import { lookup } from 'node:dns/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from '../content/site-pages.mjs';
import { loadSiteEnvironment } from './site-environment.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const environment = loadSiteEnvironment({ projectRoot, mode: 'production' });
const rawSiteUrl = environment.SITE_URL?.trim();
if (!rawSiteUrl) throw new Error('Set the verified production SITE_URL before running the live audit.');

const configuredSiteUrl = new URL(rawSiteUrl);
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:') throw new Error('Live production audit requires HTTPS.');

const origin = configuredSiteUrl.origin;
const errors = [];
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

const [robots, sitemap, feed, indexNowKey] = await Promise.all([
  fetchText('/robots.txt', 'text/plain'),
  fetchText('/sitemap.xml', 'xml'),
  fetchText('/blog/feed.xml', 'xml'),
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
  const relevantAgents = activeAgents.filter((agent) => ['*', 'googlebot', 'bingbot', 'oai-searchbot', 'perplexitybot'].includes(agent));
  if (blocksEverything && relevantAgents.length) {
    errors.push(`robots.txt blocks all crawling for ${relevantAgents.join(', ')}.`);
  }
}
for (const { path, kind } of sitePages) {
  const url = `${origin}${path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) errors.push(`sitemap.xml missing ${url}`);
  if (kind === 'article' && !feed.includes(`<link>${url}</link>`)) errors.push(`RSS feed missing ${url}`);
}
if (indexNowKey.trim() !== 'b04a90decae26feec44042e2c2e4dd84') errors.push('IndexNow key file content is wrong.');

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

if (errors.length) {
  console.error(`Live SEO audit failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Live SEO audit passed for ${sitePages.length} canonical pages at ${origin}.`);
