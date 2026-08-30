import assert from 'node:assert/strict';
import { classifyAcquisition } from '../src/lead-source.js';

const pageUrl = 'https://narvals.com/hizmetler/web-tasarim/';
const cases = [
  ['', { channel: 'direct', source: 'Doğrudan' }],
  ['https://chatgpt.com/c/abc', { channel: 'ai', source: 'ChatGPT' }],
  ['https://www.perplexity.ai/search/example', { channel: 'ai', source: 'Perplexity' }],
  ['https://copilot.microsoft.com/chats/abc', { channel: 'ai', source: 'Microsoft Copilot' }],
  ['https://gemini.google.com/app/abc', { channel: 'ai', source: 'Google Gemini' }],
  ['https://claude.ai/new', { channel: 'ai', source: 'Claude' }],
  ['https://www.google.com/search?q=web+tasarim', { channel: 'organic_search', source: 'Google Search' }],
  ['https://narvals.com/blog/', { channel: 'internal', source: 'Site içi' }],
  ['https://example.org/article', { channel: 'referral', source: 'example.org' }]
];

for (const [referrer, expected] of cases) {
  assert.deepEqual(classifyAcquisition({ pageUrl, referrer }), expected);
}

assert.deepEqual(
  classifyAcquisition({
    pageUrl: `${pageUrl}?utm_source=chatgpt&utm_medium=ai&utm_campaign=deneme`,
    referrer: 'https://www.google.com/'
  }),
  { channel: 'ai', source: 'chatgpt / ai' }
);
assert.deepEqual(
  classifyAcquisition({ pageUrl: `${pageUrl}?utm_source=linkedin&utm_medium=paid_social` }),
  { channel: 'campaign', source: 'linkedin / paid_social' }
);

console.log(`Lead-source classifier passed ${cases.length + 2} deterministic cases.`);
