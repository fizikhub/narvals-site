import { lookup } from 'node:dns/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from '../content/site-pages.mjs';
import { loadSiteEnvironment } from './site-environment.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const environment = loadSiteEnvironment({ projectRoot, mode: 'production' });
const rawSiteUrl = (environment.SITE_URL || 'https://narvals.com').trim();

const configuredSiteUrl = new URL(rawSiteUrl);
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:') throw new Error('Live production audit requires HTTPS.');

const origin = configuredSiteUrl.origin;
const errors = [];
const liveHtmlByPath = new Map();
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1];
const request = async (url, options = {}) => {
  const signal = AbortSignal.timeout(15_000);
  return fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'Narvals-Labs-Live-SEO-Audit/1.0' },
    signal,
    ...options
  });
};

try {
  const addresses = await lookup(configuredSiteUrl.hostname, { all: true });
  if (!addresses.length) errors.push('DNS resolved without an address.');
  else console.log(`DNS: ${configuredSiteUrl.hostname} -> ${addresses.map(({ address }) => address).join(', ')}`);
} catch (error) {
  throw new Error(`DNS lookup failed for ${configuredSiteUrl.hostname}: ${error.code || error.message}`);
}

const batches = [];
for (let index = 0; index < sitePages.length; index += 4) batches.push(sitePages.slice(index, index + 4));

for (const batch of batches) {
  await Promise.all(batch.map(async ({ path }) => {
    const expectedUrl = `${origin}${path}`;
    try {
      const response = await request(expectedUrl);
      if (response.status !== 200) {
        errors.push(`${path}: expected 200, received ${response.status}`);
        return;
      }
      if (response.url !== expectedUrl) errors.push(`${path}: final URL is ${response.url}, expected ${expectedUrl}`);
      if (!response.headers.get('content-type')?.toLowerCase().includes('text/html')) {
        errors.push(`${path}: response is not text/html`);
      }
      const xRobotsTag = response.headers.get('x-robots-tag') || '';
      if (/\b(?:noindex|none)\b/i.test(xRobotsTag)) {
        errors.push(`${path}: blocking X-Robots-Tag header found (${xRobotsTag})`);
      }
      const html = await response.text();
      liveHtmlByPath.set(path, html);
      const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
      if (canonical !== expectedUrl) errors.push(`${path}: live canonical is ${canonical || 'missing'}`);
      const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]);
      const robotsMeta = metaTags.find((tag) => attribute(tag, 'name')?.toLowerCase() === 'robots');
      const robotsDirectives = (attribute(robotsMeta || '', 'content') || '')
        .toLowerCase()
        .split(/[\s,]+/)
        .filter(Boolean);
      if (!robotsDirectives.includes('index')) {
        errors.push(`${path}: live index robots directive missing`);
      }
      if (robotsDirectives.some((directive) => ['noindex', 'none'].includes(directive))) {
        errors.push(`${path}: blocking robots meta directive found`);
      }
      for (const agent of ['googlebot', 'bingbot']) {
        const agentMeta = metaTags.find((tag) => attribute(tag, 'name')?.toLowerCase() === agent);
        if (/\b(?:noindex|none)\b/i.test(attribute(agentMeta || '', 'content') || '')) {
          errors.push(`${path}: blocking ${agent} meta directive found`);
        }
      }
    } catch (error) {
      errors.push(`${path}: request failed (${error.message})`);
    }
  }));
}

// A permissive robots.txt is not enough when a CDN or WAF challenges bots.
// Probe the homepage with documented crawler user agents and require the same
// public HTML response status that a normal visitor receives.
const crawlerUserAgents = {
  Googlebot: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'Googlebot-Smartphone': 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  Bingbot: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)',
  'OAI-SearchBot': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot',
  'ChatGPT-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot',
  'Claude-SearchBot': 'Mozilla/5.0 (compatible; Claude-SearchBot/1.0; +https://www.anthropic.com/bot)',
  'Claude-User': 'Mozilla/5.0 (compatible; Claude-User/1.0; +https://claude.ai/user)',
  PerplexityBot: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)',
  'Perplexity-User': 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Perplexity-User/1.0; +https://docs.perplexity.ai/guides/bots)',
  Applebot: 'Mozilla/5.0 (compatible; Applebot/0.1; +http://www.apple.com/go/applebot)'
};
await Promise.all(Object.entries(crawlerUserAgents).map(async ([agent, userAgent]) => {
  try {
    const response = await request(`${origin}/`, { headers: { 'user-agent': userAgent } });
    if (response.status !== 200) errors.push(`${agent}: homepage returned ${response.status}; CDN/WAF may block crawling`);
    if (!response.headers.get('content-type')?.toLowerCase().includes('text/html')) {
      errors.push(`${agent}: homepage did not return HTML`);
    }
  } catch (error) {
    errors.push(`${agent}: crawler probe failed (${error.message})`);
  }
}));

const fetchText = async (path, expectedType) => {
  try {
    const response = await request(`${origin}${path}`);
    if (response.status !== 200) {
      errors.push(`${path}: expected 200, received ${response.status}`);
      return '';
    }
    if (!response.headers.get('content-type')?.toLowerCase().includes(expectedType)) {
      errors.push(`${path}: unexpected Content-Type ${response.headers.get('content-type') || 'missing'}`);
    }
    return response.text();
  } catch (error) {
    errors.push(`${path}: request failed (${error.message})`);
    return '';
  }
};

const [robots, sitemap, feed, llms, llmsFull, indexNowKey] = await Promise.all([
  fetchText('/robots.txt', 'text/plain'),
  fetchText('/sitemap.xml', 'xml'),
  fetchText('/blog/feed.xml', 'xml'),
  fetchText('/llms.txt', 'text/plain'),
  fetchText('/llms-full.txt', 'text/plain'),
  fetchText('/b04a90decae26feec44042e2c2e4dd84.txt', 'text/plain')
]);

if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push('robots.txt has the wrong sitemap URL.');
const robotsLines = robots
  .split(/\r?\n/)
  .map((line) => line.replace(/\s*#.*$/, '').trim())
  .filter(Boolean);
let activeAgents = [];
let groupHasDirectives = false;
for (const line of robotsLines) {
  const [rawDirective, ...rawValue] = line.split(':');
  const directive = rawDirective?.trim().toLowerCase();
  const value = rawValue.join(':').trim();
  if (directive === 'user-agent') {
    if (groupHasDirectives) {
      activeAgents = [];
      groupHasDirectives = false;
    }
    activeAgents.push(value.toLowerCase());
    continue;
  }
  if (!directive) continue;
  groupHasDirectives = true;
  const blocksEverything = directive === 'disallow' && ['/', '/*', '/*$'].includes(value.replaceAll(' ', ''));
  const relevantAgents = activeAgents.filter((agent) => [
    '*',
    'googlebot',
    'bingbot',
    'oai-searchbot',
    'chatgpt-user',
    'claude-searchbot',
    'claude-user',
    'perplexitybot',
    'perplexity-user',
    'applebot'
  ].includes(agent));
  if (blocksEverything && relevantAgents.length) {
    errors.push(`robots.txt blocks all crawling for ${relevantAgents.join(', ')}.`);
  }
}
for (const { path, kind } of sitePages) {
  const url = `${origin}${path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap.xml missing ${url}`);
  if (kind === 'article' && !feed.includes(`<link>${url}</link>`)) errors.push(`RSS feed missing ${url}`);
}

for (const { path, kind } of sitePages) {
  if (path === '/blog/' || path.startsWith('/blog/konu/') || kind === 'article') {
    if (!liveHtmlByPath.get(path)?.includes('https://www.google.com/preferences/source?q=narvals.com')) {
      errors.push(`${path}: live Google Preferred Sources link is missing`);
    }
  }
}

const imperativeWebMcpPages = [
  ['/araclar/gorsel-boyut-hesaplayici/', 'calculateImageDimensions'],
  ['/araclar/meta-etiket-onizleyici/', 'previewMetaTags'],
  ['/araclar/qr-kod-olusturucu/', 'previewQrCode'],
  ['/araclar/schema-olusturucu/', 'createOrganizationSchema']
];
const liveModuleSourceCache = new Map();
const fetchLiveModuleSource = async (path) => {
  if (liveModuleSourceCache.has(path)) return liveModuleSourceCache.get(path);
  const html = liveHtmlByPath.get(path) || '';
  const moduleSources = [
    ...html.matchAll(/<script\b[^>]*type="module"[^>]*src="([^"]+)"/gi),
    ...html.matchAll(/<link\b[^>]*rel="modulepreload"[^>]*href="([^"]+)"/gi)
  ].map((match) => new URL(match[1], origin).href);
  if (!moduleSources.length) {
    errors.push(`${path}: live module bundle is missing`);
    return '';
  }
  const bundles = await Promise.all(moduleSources.map(async (url) => {
    try {
      const response = await request(url);
      return response.status === 200 ? response.text() : '';
    } catch {
      return '';
    }
  }));
  const source = (await Promise.all(bundles)).join('\n');
  liveModuleSourceCache.set(path, source);
  return source;
};
for (const [path, expectedToolName] of imperativeWebMcpPages) {
  const source = await fetchLiveModuleSource(path);
  if (!source.includes(expectedToolName)) {
    errors.push(`${path}: live imperative WebMCP tool ${expectedToolName} is missing`);
  }
}
for (const path of ['/', '/iletisim/']) {
  const source = await fetchLiveModuleSource(path);
  if (!source.includes('narvals_attribution_v1') || !source.includes('chatgpt.com')) {
    errors.push(`${path}: live first-party AI referral attribution is missing`);
  }
}
if (indexNowKey.trim() !== 'b04a90decae26feec44042e2c2e4dd84') errors.push('IndexNow key file content is wrong.');
if (!llms.includes(`${origin}/`) || !llms.includes(`${origin}/sitemap.xml`)) {
  errors.push('llms.txt is missing the canonical origin or sitemap discovery link.');
}
if (!llmsFull.includes(`${origin}/`) || !llmsFull.includes('Narvals Labs')) {
  errors.push('llms-full.txt is missing the canonical origin or publisher identity.');
}

try {
  const response = await request(`${origin}/__narvals-seo-404-check__/`);
  if (response.status !== 404) errors.push(`Unknown URL returned ${response.status}; expected a real 404.`);
} catch (error) {
  errors.push(`404 probe failed (${error.message})`);
}

const redirectPairs = sitePages.flatMap(({ path }) => path === '/'
  ? [['/index.html', '/']]
  : [[path.slice(0, -1), path], [`${path}index.html`, path]]);
for (let index = 0; index < redirectPairs.length; index += 6) {
  await Promise.all(redirectPairs.slice(index, index + 6).map(async ([from, to]) => {
    try {
      const response = await request(`${origin}${from}`, { redirect: 'manual' });
      if (![301, 308].includes(response.status)) {
        errors.push(`${from}: expected 301/308, received ${response.status}`);
        return;
      }
      const location = new URL(response.headers.get('location') || '', origin).href;
      if (location !== `${origin}${to}`) errors.push(`${from}: redirects to ${location}, expected ${origin}${to}`);
    } catch (error) {
      errors.push(`${from}: redirect probe failed (${error.message})`);
    }
  }));
}

try {
  const response = await request(`${origin}/`);
  const requiredHeaders = {
    'strict-transport-security': ['max-age=31536000', 'includesubdomains'],
    'content-security-policy': ["default-src 'self'", "frame-ancestors 'none'", "script-src-attr 'none'", "object-src 'none'"],
    'x-content-type-options': ['nosniff'],
    'x-frame-options': ['deny'],
    'cross-origin-opener-policy': ['same-origin'],
    'cross-origin-resource-policy': ['same-origin'],
    'referrer-policy': ['strict-origin-when-cross-origin'],
    'x-permitted-cross-domain-policies': ['none']
  };
  for (const [name, expectedParts] of Object.entries(requiredHeaders)) {
    const value = (response.headers.get(name) || '').toLowerCase();
    for (const part of expectedParts) {
      if (!value.includes(part.toLowerCase())) errors.push(`homepage security header ${name} is missing ${part}`);
    }
  }
} catch (error) {
  errors.push(`homepage security header audit failed (${error.message})`);
}

if (errors.length) {
  console.error(`Live SEO audit failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Live SEO audit passed for ${sitePages.length} canonical pages at ${origin}.`);
