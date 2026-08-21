import { access, readFile, readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from '../content/site-pages.mjs';
import { loadSiteEnvironment } from './site-environment.mjs';
import { productionFiles } from './production-files.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const checkDist = process.argv.includes('--dist');
const contentRoot = checkDist ? join(projectRoot, 'dist') : projectRoot;
const discoveryRoot = checkDist ? contentRoot : join(projectRoot, 'public');
const environment = loadSiteEnvironment({ projectRoot });
const configuredSiteUrl = new URL(environment.SITE_URL || 'https://narvalslabs.com');
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(configuredSiteUrl.hostname)) {
  throw new Error('Production SITE_URL must use HTTPS.');
}
const siteOrigin = configuredSiteUrl.origin;
const pages = sitePages.map(({ path, file, kind, lastModified }) => [path, file, kind, lastModified]);

const errors = [];
const titles = new Set();
const descriptions = new Set();
const htmlByPath = new Map();
const fileByPath = new Map(pages.map(([path, file]) => [path, file]));
const kindByPath = new Map(pages.map(([path, , kind]) => [path, kind]));

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
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = meta(html, 'name', 'description')?.trim();
  const keywords = meta(html, 'name', 'keywords')?.split(',').map((keyword) => keyword.trim()).filter(Boolean);
  const canonical = link(html, 'canonical');
  const robots = meta(html, 'name', 'robots') || '';
  const h1s = countMatches(html, /<h1\b/gi);
  const ids = [...html.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]);

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
  if (link(html, 'alternate', 'hreflang', 'x-default') !== expectedCanonical) {
    errors.push(`${path}: x-default hreflang does not match canonical`);
  }
  if (link(html, 'alternate', 'type', 'application/rss+xml') !== `${siteOrigin}/blog/feed.xml`) {
    errors.push(`${path}: RSS discovery link missing or wrong`);
  }
  if (meta(html, 'property', 'og:url') !== expectedCanonical) errors.push(`${path}: og:url does not match canonical`);
  if (!meta(html, 'property', 'og:title')) errors.push(`${path}: og:title missing`);
  if (!meta(html, 'property', 'og:description')) errors.push(`${path}: og:description missing`);
  if (meta(html, 'property', 'og:image') !== `${siteOrigin}/og/narvals-labs-og.jpg`) errors.push(`${path}: shared OG image missing or wrong`);
  if (!meta(html, 'property', 'og:image:alt')) errors.push(`${path}: og:image:alt missing`);
  if (meta(html, 'name', 'twitter:card') !== 'summary_large_image') errors.push(`${path}: large Twitter card missing`);
  if (!meta(html, 'name', 'twitter:title')) errors.push(`${path}: twitter:title missing`);
  if (!meta(html, 'name', 'twitter:description')) errors.push(`${path}: twitter:description missing`);
  if (meta(html, 'name', 'twitter:image') !== `${siteOrigin}/og/narvals-labs-og.jpg`) errors.push(`${path}: twitter:image missing or wrong`);
  if (!meta(html, 'name', 'twitter:image:alt')) errors.push(`${path}: twitter:image:alt missing`);
  if (!robots.includes('index') || !robots.includes('max-image-preview:large')) errors.push(`${path}: index/full preview robots directives missing`);
  if (/\bnoindex\b|\bnosnippet\b|\bnoarchive\b|\bnocache\b/i.test(robots)) errors.push(`${path}: blocking robots directive found`);
  if (h1s !== 1) errors.push(`${path}: expected exactly one h1, found ${h1s}`);
  if (!/<main\b/i.test(html)) errors.push(`${path}: semantic main element missing`);
  if (!/<html\b[^>]*\blang="tr"/i.test(html)) errors.push(`${path}: Turkish language declaration missing`);
  if (!/<a\b[^>]*class="[^"]*skip-link/i.test(html)) errors.push(`${path}: skip link missing`);
  if (new Set(ids).size !== ids.length) errors.push(`${path}: duplicate HTML id found`);
  if (/https:\/\/wa\.me\/\?/.test(html)) errors.push(`${path}: numberless WhatsApp URL found`);

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
  for (const type of ['Organization', 'WebSite']) {
    if (!structuredTypes.has(type)) errors.push(`${path}: structured data type missing (${type})`);
  }
  if (!structuredTypes.has('WebPage') && !structuredTypes.has('CollectionPage')) errors.push(`${path}: WebPage/CollectionPage structured data missing`);
  if (kind === 'service' && !structuredTypes.has('Service')) errors.push(`${path}: Service structured data missing`);
  if (kind === 'comparison' && structuredTypes.has('Service')) errors.push(`${path}: comparison page must not claim Service structured data`);
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
    }
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
  const entryPattern = new RegExp(`<url>\\s*<loc>${`${siteOrigin}${path}`.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}</loc>\\s*<lastmod>${lastModified}</lastmod>\\s*</url>`);
  if (!entryPattern.test(sitemap)) errors.push(`sitemap.xml has missing or stale lastmod for ${siteOrigin}${path}`);
}
if (countMatches(sitemap, /<loc>/g) !== pages.length) errors.push('sitemap.xml contains an unexpected URL count');

const robotsText = await readFile(join(discoveryRoot, 'robots.txt'), 'utf8').catch(() => '');
if (!/^User-agent:\s*\*\s*$[\s\S]*?^Allow:\s*\/\s*$/mi.test(robotsText)) errors.push('robots.txt must allow all crawlers through the wildcard group');
if (/^Disallow:\s*\S+/mi.test(robotsText)) errors.push('robots.txt contains an unexpected crawl block');
if (!robotsText.includes(`Sitemap: ${siteOrigin}/sitemap.xml`)) errors.push('robots.txt sitemap URL is wrong');

const llmsText = await readFile(join(discoveryRoot, 'llms.txt'), 'utf8').catch(() => '');
for (const [path] of pages) {
  if (!llmsText.includes(`${siteOrigin}${path}`)) errors.push(`llms.txt missing canonical URL: ${siteOrigin}${path}`);
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
