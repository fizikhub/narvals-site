import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from '../content/site-pages.mjs';
import { blogTopicImages, getBlogImage, getTopicHubImage } from '../content/blog-images.mjs';
import { loadSiteEnvironment } from './site-environment.mjs';
import { productionFiles } from './production-files.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const checkDist = process.argv.includes('--dist');
const contentRoot = checkDist ? join(projectRoot, 'dist') : projectRoot;
const discoveryRoot = checkDist ? contentRoot : join(projectRoot, 'public');
const environment = loadSiteEnvironment({ projectRoot });
const configuredSiteUrl = new URL(environment.SITE_URL || 'https://narvals.com');
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(configuredSiteUrl.hostname)) {
  throw new Error('Production SITE_URL must use HTTPS.');
}
const siteOrigin = configuredSiteUrl.origin;
const pages = sitePages.map(({ path, file, kind, lastModified }) => [path, file, kind, lastModified]);
const pageByPath = new Map(sitePages.map((page) => [page.path, page]));

const errors = [];
const titles = new Set();
const descriptions = new Set();
const htmlByPath = new Map();
const fileByPath = new Map(pages.map(([path, file]) => [path, file]));
const kindByPath = new Map(pages.map(([path, , kind]) => [path, kind]));
const incomingLinks = new Map(pages.map(([path]) => [path, new Set()]));
const webMcpToolNames = new Set();
const unsupportedSeoClaims = [
  /\b(?:100-250|256-512)\s+token/i,
  /\bPerplexity-Search\b/i,
  /\bsıfır halüsinasyon/i,
  /\bhalüsinasyon(?:larını| riskini) (?:engeller|en aza indirir)/i,
  /\bAI (?:yanıtlarında )?kaynak gösterimi (?:sağlar|garanti)/i,
  /\bCAPI\b[^<.]{0,80}\bzorunlu(?:dur)?\b/i,
  /\banında\s+%\d+[–-]\d+\s+iyileştir/i,
  /\btıklanma oranını\s+%100/i,
  /\byüksek dönüşümlü\b/i,
  /\bneredeyse tamamı\s+kas/i,
  /\bbütçenizin her kuruşunu\b/i,
  /\bkesinlikle (?:WebP|AVIF)\b/i,
  /\bkopya içerik cezasını önle/i,
  /\bCore Web Vitals[^<.]{0,60}\bgaranti/i,
  /\b%100 doğrulukla okuy/i,
  /\bGoogle(?:'ın)? patentli bilgi kazanımı[^<.]{0,100}\bskoru/i,
  /\byüksek bilgi kazanımı puanı vererek sıralamayı yukarı taşı/i,
  /\b(?:Google|LLM)[^<.]{0,120}\bzirveye aday/i,
  /\bHelpful Content[^<.]{0,100}\bceza alma riski yüksek/i,
  /\b256[–-]512 tokenlık parçalara böl/i
];
const googlebotFetchLimitBytes = 2 * 1024 * 1024;
const htmlSafetyBudgetBytes = 512 * 1024;
const criticalHeadBudgetBytes = 128 * 1024;

const countMatches = (value, pattern) => [...value.matchAll(pattern)].length;
const tags = (html, tagName) => [...html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, 'gi'))].map((match) => match[0]);
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
const meta = (html, selector, value) => {
  const tag = tags(html, 'meta').find((candidate) => attribute(candidate, selector) === value);
  return tag ? attribute(tag, 'content') : undefined;
};
const link = (html, relation, extraAttribute, extraValue) => {
  const tag = tags(html, 'link').find((candidate) => (
    attribute(candidate, 'rel') === relation
    && (!extraAttribute || attribute(candidate, extraAttribute) === extraValue)
  ));
  return tag ? attribute(tag, 'href') : undefined;
};

for (const [path, file] of pages) {
  try {
    htmlByPath.set(path, await readFile(join(contentRoot, file), 'utf8'));
  } catch {
    errors.push(`${path}: HTML file missing (${file})`);
  }
}

for (const [path, html] of htmlByPath) {
  const file = fileByPath.get(path);
  const kind = kindByPath.get(path);
  const page = pageByPath.get(path);
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = meta(html, 'name', 'description')?.trim();
  const keywords = meta(html, 'name', 'keywords')?.split(',').map((keyword) => keyword.trim()).filter(Boolean);
  const canonical = link(html, 'canonical');
  const robots = meta(html, 'name', 'robots') || '';
  const h1s = countMatches(html, /<h1\b/gi);
  const ids = [...html.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]);
  const htmlBytes = Buffer.byteLength(html, 'utf8');

  // Googlebot currently stops fetching non-PDF resources at 2 MB. Keep a
  // deliberately smaller budget and ensure discovery-critical head markup is
  // near the start so future template growth cannot push it past the cutoff.
  if (htmlBytes > htmlSafetyBudgetBytes) {
    errors.push(`${path}: HTML is ${(htmlBytes / 1024).toFixed(1)} KB; expected at most ${htmlSafetyBudgetBytes / 1024} KB (Googlebot fetch limit is ${googlebotFetchLimitBytes / 1024 / 1024} MB)`);
  }
  const criticalHeadPatterns = [
    ['title', /<title\b/i],
    ['robots meta', /<meta\b[^>]*\bname="robots"/i],
    ['canonical', /<link\b[^>]*\brel="canonical"/i],
    ['JSON-LD', /<script\b[^>]*\btype="application\/ld\+json"/i]
  ];
  for (const [label, pattern] of criticalHeadPatterns) {
    const position = html.search(pattern);
    if (position >= 0 && Buffer.byteLength(html.slice(0, position), 'utf8') > criticalHeadBudgetBytes) {
      errors.push(`${path}: ${label} begins after the first ${criticalHeadBudgetBytes / 1024} KB of HTML`);
    }
  }

  if (!title) errors.push(`${path}: title missing`);
  else {
    if (title.length < 25 || title.length > 65) errors.push(`${path}: title length is ${title.length}, expected 25–65`);
    if (titles.has(title)) errors.push(`${path}: duplicate title: ${title}`);
    titles.add(title);
  }

  if (!description) errors.push(`${path}: meta description missing`);
  else {
    if (description.length < 100 || description.length > 170) {
      errors.push(`${path}: description length is ${description.length}, expected 100–170`);
    }
    if (descriptions.has(description)) errors.push(`${path}: duplicate meta description`);
    descriptions.add(description);
  }

  if (!keywords || keywords.length < 2 || keywords.length > 7) {
    errors.push(`${path}: Yandex keywords must contain 2–7 focused phrases`);
  }

  const expectedCanonical = `${siteOrigin}${path}`;
  if (canonical !== expectedCanonical) {
    errors.push(`${path}: canonical is ${canonical || 'missing'}, expected ${expectedCanonical}`);
  }
  if (link(html, 'alternate', 'hreflang', 'tr') !== expectedCanonical) {
    errors.push(`${path}: Turkish hreflang does not match canonical`);
  }
  if (link(html, 'alternate', 'hreflang', 'tr-TR') !== expectedCanonical) {
    errors.push(`${path}: Turkish (tr-TR) hreflang does not match canonical`);
  }
  if (link(html, 'alternate', 'hreflang', 'x-default') !== expectedCanonical) {
    errors.push(`${path}: x-default hreflang does not match canonical`);
  }
  if (link(html, 'alternate', 'type', 'application/rss+xml') !== `${siteOrigin}/blog/feed.xml`) {
    errors.push(`${path}: RSS discovery link missing or wrong`);
  }
  if (link(html, 'search', 'type', 'application/opensearchdescription+xml') !== '/opensearch.xml') {
    errors.push(`${path}: OpenSearch discovery link missing or wrong`);
  }
  if (link(html, 'describedby', 'type', 'text/plain') !== '/llms.txt') {
    errors.push(`${path}: llms.txt describedby discovery link missing or wrong`);
  }
  if (meta(html, 'property', 'og:url') !== expectedCanonical) errors.push(`${path}: og:url does not match canonical`);
  if (!meta(html, 'property', 'og:title')) errors.push(`${path}: og:title missing`);
  if (!meta(html, 'property', 'og:description')) errors.push(`${path}: og:description missing`);
  const expectedSocialImage = page?.post
    ? getBlogImage(page.post)
    : page?.hub
      ? getTopicHubImage(page.hub)
      : { path: '/og/narvals-labs-og.jpg', width: 1200, height: 630, alt: 'Narvals Labs — Web, Yazılım ve Reklam' };
  const expectedSocialImageUrl = `${siteOrigin}${expectedSocialImage.path}`;
  if (meta(html, 'property', 'og:image') !== expectedSocialImageUrl) errors.push(`${path}: preferred OG image missing or wrong`);
  if ((page?.post || page?.hub) && meta(html, 'property', 'og:image:type') !== 'image/jpeg') {
    errors.push(`${path}: og:image:type missing or wrong`);
  }
  if (meta(html, 'property', 'og:image:width') !== String(expectedSocialImage.width)) errors.push(`${path}: og:image width is wrong`);
  if (meta(html, 'property', 'og:image:height') !== String(expectedSocialImage.height)) errors.push(`${path}: og:image height is wrong`);
  if (!meta(html, 'property', 'og:image:alt')) errors.push(`${path}: og:image:alt missing`);
  if (meta(html, 'name', 'twitter:card') !== 'summary_large_image') errors.push(`${path}: large Twitter card missing`);
  if (!meta(html, 'name', 'twitter:title')) errors.push(`${path}: twitter:title missing`);
  if (!meta(html, 'name', 'twitter:description')) errors.push(`${path}: twitter:description missing`);
  if (meta(html, 'name', 'twitter:image') !== expectedSocialImageUrl) errors.push(`${path}: twitter:image missing or wrong`);
  if (!meta(html, 'name', 'twitter:image:alt')) errors.push(`${path}: twitter:image:alt missing`);
  if (!robots.includes('index') || !robots.includes('max-image-preview:large')) errors.push(`${path}: index/full preview robots directives missing`);
  const bingbot = meta(html, 'name', 'bingbot') || '';
  if (!bingbot.includes('index') || !bingbot.includes('max-image-preview:large')) errors.push(`${path}: bingbot meta missing or incomplete`);
  if (meta(html, 'name', 'referrer') !== 'strict-origin-when-cross-origin') errors.push(`${path}: referrer meta missing or wrong`);
  if (meta(html, 'name', 'msapplication-TileColor') !== '#03233a') errors.push(`${path}: msapplication-TileColor meta missing or wrong`);
  if (meta(html, 'name', 'msapplication-config') !== '/browserconfig.xml') errors.push(`${path}: msapplication-config meta missing or wrong`);
  if (/\bnoindex\b|\bnosnippet\b|\bnoarchive\b|\bnocache\b/i.test(robots)) errors.push(`${path}: blocking robots directive found`);
  if (h1s !== 1) errors.push(`${path}: expected exactly one h1, found ${h1s}`);
  if (!/<main\b/i.test(html)) errors.push(`${path}: semantic main element missing`);
  if (!/<html\b[^>]*\blang="tr"/i.test(html)) errors.push(`${path}: Turkish language declaration missing`);
  if (!/<a\b[^>]*class="[^"]*skip-link/i.test(html)) errors.push(`${path}: skip link missing`);
  if (new Set(ids).size !== ids.length) errors.push(`${path}: duplicate HTML id found`);
  if (/https:\/\/wa\.me\/\?/.test(html)) errors.push(`${path}: numberless WhatsApp URL found`);
  if (path === '/iletisim/' && !html.includes('mailto:info@narvals.com')) errors.push(`${path}: verified contact email missing`);
  if (path === '/iletisim/' && !html.includes('https://wa.me/905019441921')) errors.push(`${path}: verified WhatsApp link missing`);
  if (path === '/' && !html.includes('href="/gizlilik/"')) errors.push(`${path}: privacy and data-use link missing`);
  if (path === '/gizlilik/' && (!html.includes('sessionStorage') || !html.includes('contact_intent'))) {
    errors.push(`${path}: actual browser storage and conditional analytics behavior must be disclosed`);
  }
  if (meta(html, 'name', 'author') !== 'Narvals Labs') errors.push(`${path}: author meta missing or wrong`);
  if (meta(html, 'name', 'theme-color') !== '#03233a') errors.push(`${path}: theme-color meta missing or wrong`);
  if (meta(html, 'name', 'color-scheme') !== 'light') errors.push(`${path}: color-scheme meta missing or wrong`);
  if (meta(html, 'name', 'format-detection') !== 'telephone=no') errors.push(`${path}: format-detection meta missing or wrong`);
  if (link(html, 'apple-touch-icon') !== '/assets/logo-v6/narvals-avatar-v6-1080.png') errors.push(`${path}: apple-touch-icon link missing or wrong`);
  if (link(html, 'manifest') !== '/site.webmanifest') errors.push(`${path}: webmanifest link missing or wrong`);
  if (/meta name="(?:geo\.(?:region|placename|position)|ICBM)"/i.test(html)) {
    errors.push(`${path}: legacy geolocation meta found; GEO is content/entity optimization, not coordinate stuffing`);
  }
  for (const buttonTag of tags(html, 'button')) {
    const hasPersistentChoice = /\bdata-(?:qr-type|ads-mode|meta-goal|aspect-preset|preset|vat-mode|vat-rate)=/i.test(buttonTag);
    if (hasPersistentChoice && !['true', 'false'].includes(attribute(buttonTag, 'aria-pressed'))) {
      errors.push(`${path}: persistent choice button must expose aria-pressed state`);
    }
    if (attribute(buttonTag, 'role') === 'tab') {
      const controlledId = attribute(buttonTag, 'aria-controls');
      if (!['true', 'false'].includes(attribute(buttonTag, 'aria-selected'))) {
        errors.push(`${path}: tab button must expose aria-selected state`);
      }
      if (!controlledId || !new RegExp(`\\bid="${controlledId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(html)) {
        errors.push(`${path}: tab button must control an existing panel`);
      }
    }
  }
  if (kind === 'tool') {
    for (const formTag of tags(html, 'form')) {
      const toolName = attribute(formTag, 'toolname');
      const toolDescription = attribute(formTag, 'tooldescription');
      if (!toolName || !toolDescription) {
        errors.push(`${path}: interactive tool form is missing experimental WebMCP toolname/tooldescription`);
        continue;
      }
      if (!/^[A-Za-z][A-Za-z0-9_]{0,29}$/.test(toolName)) {
        errors.push(`${path}: WebMCP toolname must be stable, alphanumeric and at most 30 characters (${toolName})`);
      }
      if (toolDescription.length > 500) errors.push(`${path}: WebMCP tool description exceeds 500 characters`);
      if (webMcpToolNames.has(toolName)) errors.push(`${path}: duplicate WebMCP toolname (${toolName})`);
      webMcpToolNames.add(toolName);
      if (/\btoolautosubmit(?:\s|>|=)/i.test(formTag)) {
        errors.push(`${path}: experimental WebMCP form must preserve explicit user submit confirmation`);
      }
    }
  }
  if (path === '/blog/' || path.startsWith('/blog/konu/') || kind === 'article') {
    if (!html.includes('https://www.google.com/preferences/source?q=narvals.com')) {
      errors.push(`${path}: Google Preferred Sources reader link missing`);
    }
  }
  for (const claim of unsupportedSeoClaims) {
    if (claim.test(html)) errors.push(`${path}: unsupported or absolute SEO/GEO claim found (${claim.source})`);
  }

  const speculationRulesBlock = html.match(/<script\b[^>]*type="speculationrules"[^>]*>([\s\S]*?)<\/script>/i)?.[1];
  if (!speculationRulesBlock) {
    errors.push(`${path}: Speculation Rules API script missing`);
  } else {
    try {
      const parsedRules = JSON.parse(speculationRulesBlock);
      if (!Array.isArray(parsedRules.prefetch) || !Array.isArray(parsedRules.prerender)) {
        errors.push(`${path}: Speculation Rules must declare both prefetch and prerender rules`);
      }
    } catch (error) {
      errors.push(`${path}: invalid Speculation Rules JSON (${error.message})`);
    }
  }

  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (!jsonLdBlocks.length) errors.push(`${path}: JSON-LD missing`);
  const structuredTypes = new Set();
  const structuredNodes = [];
  const collectTypes = (value) => {
    if (Array.isArray(value)) return value.forEach(collectTypes);
    if (!value || typeof value !== 'object') return;
    const type = value['@type'];
    if (type) structuredNodes.push(value);
    for (const item of Array.isArray(type) ? type : [type]) if (item) structuredTypes.add(item);
    Object.values(value).forEach(collectTypes);
  };
  for (const [, json] of jsonLdBlocks) {
    try {
      collectTypes(JSON.parse(json));
    } catch (error) {
      errors.push(`${path}: invalid JSON-LD (${error.message})`);
    }
  }
  if (path === '/') {
    if (!structuredTypes.has('OnlineBusiness')) errors.push(`${path}: structured data type missing (OnlineBusiness)`);
    if (!structuredTypes.has('WebSite')) errors.push(`${path}: structured data type missing (WebSite)`);
  } else {
    if (structuredTypes.has('Organization') || structuredTypes.has('OnlineBusiness')) errors.push(`${path}: organization structured data must be consolidated on the homepage`);
    if (structuredTypes.has('WebSite')) errors.push(`${path}: WebSite structured data must only appear on the homepage`);
  }
  const orgNode = structuredNodes.find((node) => ['Organization', 'OnlineBusiness'].includes(node['@type']));
  if (orgNode) {
    if (orgNode.name !== 'Narvals Labs') errors.push(`${path}: Organization name mismatch`);
    if (orgNode.legalName) errors.push(`${path}: unverified Organization legalName must not be published`);
    if (!Array.isArray(orgNode.sameAs) || !orgNode.sameAs.includes('https://github.com/fizikhub/narvals-site')) {
      errors.push(`${path}: Organization sameAs GitHub link missing`);
    }
    if (orgNode.publishingPrinciples !== `${siteOrigin}/editoryal-ilkeler/`) {
      errors.push(`${path}: Organization publishingPrinciples missing or wrong`);
    }
    if (orgNode.areaServed?.name !== 'Türkiye') errors.push(`${path}: Organization areaServed Country Türkiye missing`);
    if (orgNode.address) errors.push(`${path}: unverified or incomplete physical address must not be published`);
    if (orgNode.currenciesAccepted || orgNode.paymentAccepted) errors.push(`${path}: unverified payment claims found in Organization`);
    if (orgNode.founder) errors.push(`${path}: unverified Organization founder must not be published`);
    if (orgNode.contactPoint?.hoursAvailable) errors.push(`${path}: unverified contact hours must not be published`);
    if (orgNode.email !== 'info@narvals.com') errors.push(`${path}: Organization email missing or wrong`);
    if (orgNode.telephone !== '+905019441921') errors.push(`${path}: Organization telephone missing or wrong`);
    if (!Array.isArray(orgNode.knowsAbout) || orgNode.knowsAbout.length < 5) errors.push(`${path}: Organization knowsAbout missing or insufficient`);
    if (orgNode.hasOfferCatalog?.['@type'] !== 'OfferCatalog') errors.push(`${path}: Organization hasOfferCatalog missing`);
  }
  const websiteNode = structuredNodes.find((node) => node['@type'] === 'WebSite');
  if (websiteNode) {
    if (websiteNode.name !== 'Narvals Labs') errors.push(`${path}: WebSite name mismatch`);
    if (JSON.stringify(websiteNode.alternateName) !== JSON.stringify(['Narvals'])) {
      errors.push(`${path}: WebSite alternateName missing`);
    }
    if (websiteNode.potentialAction?.['@type'] === 'SearchAction') errors.push(`${path}: retired sitelinks SearchAction must not be published`);
  }
  if (structuredNodes.some((node) => node.address?.addressLocality === 'İstanbul')) {
    errors.push(`${path}: unverified İstanbul address found in structured data`);
  }
  if (!structuredTypes.has('WebPage') && !structuredTypes.has('CollectionPage')) errors.push(`${path}: WebPage/CollectionPage structured data missing`);
  if (structuredNodes.some((node) => node.speakable)) {
    errors.push(`${path}: unsupported Turkish service/editorial speakable markup found`);
  }
  if (structuredTypes.has('HowTo') || structuredTypes.has('HowToStep')) {
    errors.push(`${path}: deprecated Google HowTo rich-result markup found`);
  }
  if (['/hizmetler/web-tasarim/', '/hizmetler/qr-menu/'].includes(path)) {
    const expectedImagePath = path === '/hizmetler/web-tasarim/'
      ? '/assets/services-v3/web-tool-v2.webp'
      : '/assets/services-v3/booking-tool-v1.webp';
    const contentImage = tags(html, 'img').find((tag) => attribute(tag, 'src') === expectedImagePath);
    if (!contentImage || !attribute(contentImage, 'alt')?.trim()) {
      errors.push(`${path}: priority commercial page is missing its descriptive content image`);
    }
    const primaryImage = structuredNodes.find((node) => node.primaryImageOfPage)?.primaryImageOfPage;
    if (primaryImage?.url !== `${siteOrigin}${expectedImagePath}`) {
      errors.push(`${path}: primaryImageOfPage does not match the visible service image`);
    }
    const visibleText = html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&(?:#39|apos);/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/\s+/g, ' ')
      .toLocaleLowerCase('tr');
    for (const faq of structuredNodes.filter((node) => node['@type'] === 'FAQPage')) {
      for (const question of faq.mainEntity || []) {
        if (!visibleText.includes(question.name.toLocaleLowerCase('tr'))) {
          errors.push(`${path}: FAQ structured question is not visible (${question.name})`);
        }
      }
    }
  }
  const pageNodes = structuredNodes.filter((node) => node.url === expectedCanonical || node['@id']?.startsWith(expectedCanonical));
  const pageTypes = new Set(pageNodes.flatMap((node) => Array.isArray(node['@type']) ? node['@type'] : [node['@type']]).filter(Boolean));
  if (kind === 'service' && !pageTypes.has('Service')) errors.push(`${path}: Service structured data missing`);
  if (kind === 'comparison' && pageTypes.has('Service')) errors.push(`${path}: comparison page must not claim Service structured data`);
  if (kind === 'tool') {
    const webApp = structuredNodes.find((node) => {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      return types.includes('WebApplication');
    });
    if (!webApp) errors.push(`${path}: WebApplication structured data missing in tool`);
    else {
      if (webApp.provider?.['@id'] !== `${siteOrigin}/#organization`) errors.push(`${path}: WebApplication provider missing or mismatch`);
    }
    if (!structuredTypes.has('FAQPage')) errors.push(`${path}: FAQPage structured data missing in tool`);
    if (!structuredTypes.has('BreadcrumbList')) errors.push(`${path}: BreadcrumbList structured data missing in tool`);
  }
  if (kind === 'service') {
    if (!structuredTypes.has('FAQPage')) errors.push(`${path}: FAQPage structured data missing in service`);
    if (!structuredTypes.has('BreadcrumbList')) errors.push(`${path}: BreadcrumbList structured data missing in service`);
  }
  if (kind === 'article') {
    const article = structuredNodes.find((node) => node['@type'] === 'BlogPosting');
    if (!article) errors.push(`${path}: BlogPosting structured data missing`);
    else {
      for (const property of ['headline', 'datePublished', 'dateModified', 'author', 'publisher', 'mainEntityOfPage', 'image']) {
        if (!article[property]) errors.push(`${path}: BlogPosting.${property} missing`);
      }
      if (article.dateModified !== article.datePublished && !html.includes(`<time datetime="${article.dateModified}">`)) {
        errors.push(`${path}: visible machine-readable modified date missing`);
      }
      const articleImage = Array.isArray(article.image) ? article.image[0] : article.image;
      const articleImageUrl = typeof articleImage === 'string' ? articleImage : articleImage?.url;
      if (articleImageUrl !== expectedSocialImageUrl) errors.push(`${path}: BlogPosting.image does not match the preferred image`);
    }
    const webPage = structuredNodes.find((node) => node['@type'] === 'WebPage');
    const primaryImageUrl = typeof webPage?.primaryImageOfPage === 'string'
      ? webPage.primaryImageOfPage
      : webPage?.primaryImageOfPage?.url;
    if (primaryImageUrl !== expectedSocialImageUrl) errors.push(`${path}: primaryImageOfPage does not match the preferred image`);
    const visibleImageTag = tags(html, 'img').find((tag) => attribute(tag, 'src') === expectedSocialImage.path);
    if (!visibleImageTag) errors.push(`${path}: preferred image is not embedded with a standard img element`);
    else {
      if (attribute(visibleImageTag, 'width') !== String(expectedSocialImage.width) || attribute(visibleImageTag, 'height') !== String(expectedSocialImage.height)) {
        errors.push(`${path}: preferred image intrinsic dimensions missing or wrong`);
      }
      if (attribute(visibleImageTag, 'alt') !== expectedSocialImage.alt) errors.push(`${path}: preferred image alt text missing or wrong`);
    }
    if (!structuredTypes.has('FAQPage')) errors.push(`${path}: FAQPage structured data missing in article`);
    if (!html.includes('id="kisa-cevaplar"')) errors.push(`${path}: visible FAQ section #kisa-cevaplar missing in article`);
    if (!/<article\b/i.test(html)) errors.push(`${path}: semantic article element missing`);
    if (!/<time\b[^>]*datetime="[^"]+"/i.test(html)) errors.push(`${path}: visible machine-readable publication date missing`);
  }
  if (kind === 'home') {
    const itemList = structuredNodes.find((node) => node['@type'] === 'ItemList');
    if (!itemList) errors.push(`${path}: services ItemList missing`);
    else if (!Array.isArray(itemList.itemListElement) || itemList.itemListElement.some((item) => item['@type'] !== 'ListItem' || !item.position || !item.item)) {
      errors.push(`${path}: ItemList entries must use ListItem with position and item`);
    }
  }

  for (const anchorTag of tags(html, 'a')) {
    const href = attribute(anchorTag, 'href');
    if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
    let target;
    try {
      target = new URL(href, `${siteOrigin}${path}`);
    } catch {
      errors.push(`${path}: invalid link ${href}`);
      continue;
    }
    if (target.origin !== siteOrigin) continue;
    const targetPath = target.pathname;
    if (!htmlByPath.has(targetPath)) {
      errors.push(`${path}: internal link has no canonical page (${href})`);
      continue;
    }
    if (targetPath !== path) incomingLinks.get(targetPath)?.add(path);
    if (target.hash) {
      const fragment = decodeURIComponent(target.hash.slice(1));
      const targetHtml = htmlByPath.get(targetPath);
      if (!new RegExp(`\\bid="${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(targetHtml)) {
        errors.push(`${path}: fragment target missing (${href})`);
      }
    }
  }

  if (!file) errors.push(`${path}: page mapping missing`);
}

const jpegDimensions = (buffer) => {
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) return undefined;
  let offset = 2;
  while (offset + 8 < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    const size = buffer.readUInt16BE(offset + 2);
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    if (size < 2) return undefined;
    offset += size + 2;
  }
  return undefined;
};

for (const image of new Map(Object.values(blogTopicImages).map((item) => [item.path, item])).values()) {
  try {
    const imageBuffer = await readFile(join(discoveryRoot, image.path.slice(1)));
    const dimensions = jpegDimensions(imageBuffer);
    if (dimensions?.width !== image.width || dimensions?.height !== image.height) {
      errors.push(`${image.path}: expected a real ${image.width}x${image.height} JPEG image`);
    }
  } catch {
    errors.push(`${image.path}: topic image file missing`);
  }
}

for (const [path, sources] of incomingLinks) {
  if (path !== '/' && sources.size === 0) errors.push(`${path}: orphan canonical page has no incoming internal link`);
}

// Google classifies scaled pages with little original value as abuse regardless
// of whether automation or people produced them. Keep the generated article
// library from drifting into near-duplicate search pages and require each guide
// to expose a real, independently checkable source set.
const normalizedArticleText = (html) => (html.match(/<div class="info-content article-content">([\s\S]*?)<\/div>\s*<\/div>\s*<\/article>/i)?.[1] || '')
  .replace(/<section\b[^>]*id="kaynaklar"[\s\S]*$/i, ' ')
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&(?:nbsp|amp|quot|#39|apos);/gi, ' ')
  .toLocaleLowerCase('tr')
  .replace(/[^a-zçğıöşü0-9]+/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const shingles = (text, size = 5) => {
  const words = text.split(' ').filter(Boolean);
  return new Set(words.slice(0, Math.max(0, words.length - size + 1)).map((_, index) => words.slice(index, index + size).join(' ')));
};
const articleEntries = [...htmlByPath.entries()].filter(([path]) => kindByPath.get(path) === 'article');
for (const [path, html] of articleEntries) {
  const sourceBlock = html.match(/<ol class="article-sources">([\s\S]*?)<\/ol>/i)?.[1] || '';
  const sourceUrls = [...sourceBlock.matchAll(/<a\b[^>]*href="([^"]+)"/gi)].map((match) => match[1]);
  if (sourceUrls.length < 2) errors.push(`${path}: article must expose at least two external sources`);
  if (new Set(sourceUrls).size !== sourceUrls.length) errors.push(`${path}: duplicate article source URL found`);
  if (sourceUrls.some((url) => !url.startsWith('https://'))) errors.push(`${path}: article source must use HTTPS`);
}
for (let left = 0; left < articleEntries.length; left += 1) {
  const [leftPath, leftHtml] = articleEntries[left];
  const leftShingles = shingles(normalizedArticleText(leftHtml));
  for (let right = left + 1; right < articleEntries.length; right += 1) {
    const [rightPath, rightHtml] = articleEntries[right];
    const rightShingles = shingles(normalizedArticleText(rightHtml));
    const intersection = [...leftShingles].filter((value) => rightShingles.has(value)).length;
    const union = new Set([...leftShingles, ...rightShingles]).size;
    const similarity = union ? intersection / union : 0;
    if (similarity > 0.72) {
      errors.push(`${leftPath} and ${rightPath}: article similarity ${(similarity * 100).toFixed(1)}% exceeds 72%`);
    }
  }
}

const imperativeWebMcpTools = [
  ['src/aspect-ratio-calculator.js', 'calculateImageDimensions'],
  ['src/meta-tag-previewer.js', 'previewMetaTags'],
  ['src/qr-code-tool.js', 'previewQrCode'],
  ['src/schema-generator.js', 'createOrganizationSchema']
];
for (const [sourceFile, expectedName] of imperativeWebMcpTools) {
  const source = await readFile(join(projectRoot, sourceFile), 'utf8').catch(() => '');
  const registration = source.match(/registerReadOnlyTool\(\{[\s\S]*?name:\s*'([^']+)'/);
  const toolName = registration?.[1];
  if (toolName !== expectedName) {
    errors.push(`${sourceFile}: expected imperative WebMCP tool ${expectedName}`);
    continue;
  }
  if (!/^[A-Za-z][A-Za-z0-9]{0,29}$/.test(toolName)) {
    errors.push(`${sourceFile}: imperative WebMCP name must be alphanumeric and at most 30 characters (${toolName})`);
  }
  if (webMcpToolNames.has(toolName)) errors.push(`${sourceFile}: duplicate WebMCP tool name (${toolName})`);
  webMcpToolNames.add(toolName);
}
const webMcpHelper = await readFile(join(projectRoot, 'src/webmcp.js'), 'utf8').catch(() => '');
if (!webMcpHelper.includes('readOnlyHint: true') || !webMcpHelper.includes('untrustedContentHint: false')) {
  errors.push('src/webmcp.js: read-only WebMCP security annotations are missing');
}
if (!webMcpHelper.includes('if (!modelContext?.registerTool) return false')) {
  errors.push('src/webmcp.js: experimental WebMCP feature detection is missing');
}
for (const path of ['/hizmetler/web-tasarim/', '/hizmetler/qr-menu/']) {
  const sources = incomingLinks.get(path);
  if (!sources || sources.size < 20) {
    errors.push(`${path}: priority commercial service has only ${sources?.size || 0} incoming source pages; expected at least 20`);
  }
}

for (const file of productionFiles) {
  try {
    await access(join(discoveryRoot, file));
  } catch {
    errors.push(`Required production asset missing: ${file}`);
  }
}

const sitemap = await readFile(join(discoveryRoot, 'sitemap.xml'), 'utf8').catch(() => '');
for (const [path, , , lastModified] of pages) {
  if (!sitemap.includes(`<loc>${siteOrigin}${path}</loc>`)) errors.push(`sitemap.xml missing canonical URL: ${siteOrigin}${path}`);
  const escapedUrl = `${siteOrigin}${path}`.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const entryPattern = new RegExp(`<url>\\s*<loc>${escapedUrl}</loc>\\s*<lastmod>${lastModified}</lastmod>\\s*</url>`);
  if (!entryPattern.test(sitemap)) errors.push(`sitemap.xml has a missing or stale lastmod for ${siteOrigin}${path}`);
}
if (countMatches(sitemap, /<loc>/g) !== pages.length) errors.push('sitemap.xml contains an unexpected URL count');
if (/<(?:changefreq|priority)>/i.test(sitemap)) errors.push('sitemap.xml contains changefreq/priority values that Google ignores');
if (/<image:image>/i.test(sitemap)) errors.push('sitemap.xml contains a repeated generic image instead of page-specific image data');

const robotsText = await readFile(join(discoveryRoot, 'robots.txt'), 'utf8').catch(() => '');
if (!/^User-agent:\s*\*\s*$[\s\S]*?^Allow:\s*\/\s*$/mi.test(robotsText)) errors.push('robots.txt must allow all crawlers through the wildcard group');
if (/^Disallow:\s*\S+/mi.test(robotsText)) errors.push('robots.txt contains an unexpected crawl block');
if (!robotsText.includes(`Sitemap: ${siteOrigin}/sitemap.xml`)) errors.push('robots.txt sitemap URL is wrong');
for (const agent of ['Googlebot', 'OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Applebot']) {
  if (!new RegExp(`^User-agent:\\s*${agent}\\s*$`, 'mi').test(robotsText)) {
    errors.push(`robots.txt is missing documented crawler policy for ${agent}`);
  }
}

const securityHeaders = await readFile(join(discoveryRoot, '_headers'), 'utf8').catch(() => '');
for (const required of [
  "Content-Security-Policy: default-src 'self'",
  "frame-ancestors 'none'",
  "script-src-attr 'none'",
  'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options: nosniff',
  'X-Frame-Options: DENY',
  'Cross-Origin-Opener-Policy: same-origin',
  'Cross-Origin-Resource-Policy: same-origin',
  'Referrer-Policy: strict-origin-when-cross-origin',
  'X-Permitted-Cross-Domain-Policies: none'
]) {
  if (!securityHeaders.includes(required)) errors.push(`public/_headers missing required security policy: ${required}`);
}
if (/\bon(?:click|load|error|input|change|submit)\s*=/i.test([...htmlByPath.values()].join('\n'))) {
  errors.push('inline event handler found; CSP script-src-attr none would block it');
}

const llmsText = await readFile(join(discoveryRoot, 'llms.txt'), 'utf8').catch(() => '');
for (const [path] of pages) {
  if (!llmsText.includes(`${siteOrigin}${path}`)) errors.push(`llms.txt missing canonical URL: ${siteOrigin}${path}`);
}

const llmsFullText = await readFile(join(discoveryRoot, 'llms-full.txt'), 'utf8').catch(() => '');
for (const [path] of pages) {
  if (!llmsFullText.includes(`${siteOrigin}${path}`)) errors.push(`llms-full.txt missing canonical URL: ${siteOrigin}${path}`);
}

const feedText = await readFile(join(discoveryRoot, 'blog/feed.xml'), 'utf8').catch(() => '');
for (const [path, , kind] of pages) {
  if (kind === 'article' && !feedText.includes(`<link>${siteOrigin}${path}</link>`)) errors.push(`RSS feed missing article URL: ${siteOrigin}${path}`);
}

if (checkDist) {
  const walkFiles = async (directory) => {
    const files = [];
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = join(directory, entry.name);
      if (entry.isDirectory()) files.push(...await walkFiles(file));
      else files.push(file);
    }
    return files;
  };
  const scannableFiles = (await walkFiles(contentRoot)).filter((file) => /\.(?:html|css|js|webmanifest)$/i.test(file));
  const referencedAssets = new Set();
  for (const file of scannableFiles) {
    const body = await readFile(file, 'utf8');
    for (const match of body.matchAll(/\/(assets|og)\/[^\s"'()?#<>]+/g)) {
      referencedAssets.add(match[0].slice(1));
    }
  }
  for (const asset of referencedAssets) {
    try {
      await access(join(contentRoot, decodeURIComponent(asset)));
    } catch {
      errors.push(`Built page or stylesheet references a missing production asset: /${asset}`);
    }
  }

  const directorySize = async (directory) => {
    let total = 0;
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = join(directory, entry.name);
      total += entry.isDirectory() ? await directorySize(file) : (await stat(file)).size;
    }
    return total;
  };
  const distSize = await directorySize(contentRoot);
  if (distSize > 12 * 1024 * 1024) errors.push(`Production bundle is ${(distSize / 1024 / 1024).toFixed(1)} MB; expected at most 12 MB`);
  try {
    await access(join(contentRoot, 'assets/master'));
    errors.push('Design master assets leaked into production');
  } catch {
    // Expected: source masters are intentionally not deployed.
  }
}

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`SEO validation passed for ${pages.length} canonical pages${checkDist ? ' and the production bundle' : ''}.`);
