import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadSiteEnvironment } from './site-environment.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const environment = loadSiteEnvironment({ projectRoot, mode: 'production' });
const siteUrl = environment.SITE_URL;
const key = 'b04a90decae26feec44042e2c2e4dd84';
const changedLocations = process.argv.slice(2);

if (!siteUrl) {
  throw new Error('Set the verified production SITE_URL before submitting to IndexNow.');
}
if (!changedLocations.length) {
  throw new Error('Pass one or more changed canonical paths or URLs, for example: npm run indexnow:submit -- / /hizmetler/web-tasarim/');
}

const configuredSiteUrl = new URL(siteUrl);
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:') throw new Error('IndexNow SITE_URL must use HTTPS.');
const origin = configuredSiteUrl.origin;
const urlList = [...new Set(changedLocations.map((location) => {
  const url = new URL(location, `${origin}/`);
  if (url.origin !== origin) throw new Error(`IndexNow URL must use ${origin}: ${location}`);
  if (url.search || url.hash) throw new Error(`IndexNow only accepts canonical URLs without query or fragment: ${location}`);
  if (url.pathname !== '/' && !url.pathname.endsWith('/')) {
    throw new Error(`IndexNow path must use the canonical trailing slash: ${location}`);
  }
  return url.href;
}))];
if (urlList.length > 10_000) throw new Error('IndexNow accepts at most 10,000 URLs per request.');

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(origin).host,
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList
  })
});

if (!response.ok) {
  throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
}

console.log(`Submitted ${urlList.length} changed URL(s) to IndexNow.`);
