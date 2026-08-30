import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { blogPosts } from '../content/blog-posts.mjs';

const execFileAsync = promisify(execFile);
const concurrency = 8;
const sources = new Map();

for (const post of blogPosts) {
  for (const source of post.sources || []) {
    const usages = sources.get(source.url) || [];
    usages.push(post.slug);
    sources.set(source.url, usages);
  }
}

const entries = [...sources.entries()];
const results = [];

async function inspectSource([url, slugs]) {
  try {
    const { stdout } = await execFileAsync('curl', [
      '--location',
      '--silent',
      '--show-error',
      '--output', '/dev/null',
      '--write-out', '%{http_code}\t%{url_effective}',
      '--max-time', '20',
      '--user-agent', 'Mozilla/5.0 (compatible; NarvalsSourceAudit/1.0; +https://narvals.com/)',
      url
    ]);
    const [statusText, effectiveUrl = url] = stdout.trim().split('\t');
    results.push({ url, effectiveUrl, status: Number(statusText), slugs });
  } catch (error) {
    results.push({ url, status: 0, slugs, error: error.stderr?.trim() || error.message });
  }
}

let cursor = 0;
async function worker() {
  while (cursor < entries.length) {
    const entry = entries[cursor++];
    await inspectSource(entry);
  }
}

await Promise.all(Array.from({ length: concurrency }, worker));

const permanentFailures = results.filter(({ status }) => status === 400 || status === 404 || status === 410);
const transientWarnings = results.filter(({ status }) => status === 0 || status === 403 || status === 408 || status === 425 || status === 429 || status >= 500);

for (const result of [...permanentFailures, ...transientWarnings].sort((a, b) => a.url.localeCompare(b.url))) {
  const kind = permanentFailures.includes(result) ? 'ERROR' : 'WARN';
  console.log(`${kind} ${result.status || 'network'} ${result.url}`);
  console.log(`  used by: ${result.slugs.join(', ')}`);
  if (result.error) console.log(`  ${result.error}`);
}

console.log(`Checked ${entries.length} unique editorial sources: ${permanentFailures.length} permanent failure(s), ${transientWarnings.length} transient warning(s).`);

if (permanentFailures.length) process.exitCode = 1;
