import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePages } from '../content/site-pages.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const evals = JSON.parse(await readFile(join(projectRoot, 'evals/webmcp-tool-selection.json'), 'utf8'));
const errors = [];
const tools = new Map();

const imperativeTools = [
  ['/araclar/gorsel-boyut-hesaplayici/', 'calculateImageDimensions', ['originalWidth', 'originalHeight', 'targetWidth', 'targetHeight']],
  ['/araclar/meta-etiket-onizleyici/', 'previewMetaTags', ['title', 'description', 'url', 'imageUrl', 'brand']],
  ['/araclar/qr-kod-olusturucu/', 'previewQrCode', ['url']],
  ['/araclar/schema-olusturucu/', 'createOrganizationSchema', ['name', 'url', 'description', 'logoUrl', 'sameAs']]
];

for (const { path, file, kind } of sitePages.filter((page) => page.kind === 'tool')) {
  const html = await readFile(join(projectRoot, file), 'utf8');
  for (const match of html.matchAll(/<form\b[^>]*toolname="([^"]+)"[^>]*>([\s\S]*?)<\/form>/gi)) {
    const fields = new Set([...match[2].matchAll(/<(?:input|select|textarea)\b[^>]*\bname="([^"]+)"/gi)].map((field) => field[1]));
    tools.set(match[1], { page: path, fields });
  }
}
for (const [page, name, fields] of imperativeTools) tools.set(name, { page, fields: new Set(fields) });

const ids = new Set();
for (const item of evals) {
  if (!item.id || ids.has(item.id)) errors.push(`Eval id is missing or duplicate: ${item.id || '(missing)'}`);
  ids.add(item.id);
  if (!['direct', 'ambiguous'].includes(item.variant)) errors.push(`${item.id}: variant must be direct or ambiguous`);
  if (item.messages?.length !== 1 || item.messages[0].role !== 'user' || !item.messages[0].content?.trim()) {
    errors.push(`${item.id}: exactly one non-empty user message is required`);
  }
  if (item.expectedCall?.length !== 1) {
    errors.push(`${item.id}: exactly one expectedCall is required`);
    continue;
  }
  const call = item.expectedCall[0];
  const tool = tools.get(call.functionName);
  if (!tool) {
    errors.push(`${item.id}: unknown WebMCP function ${call.functionName}`);
    continue;
  }
  if (item.page !== tool.page) errors.push(`${item.id}: page does not match ${call.functionName}`);
  for (const argument of Object.keys(call.arguments || {})) {
    if (!tool.fields.has(argument)) errors.push(`${item.id}: unknown ${call.functionName} argument ${argument}`);
  }
}

for (const [name] of tools) {
  const cases = evals.filter((item) => item.expectedCall?.[0]?.functionName === name);
  const variants = new Set(cases.map((item) => item.variant));
  if (cases.length < 2 || !variants.has('direct') || !variants.has('ambiguous')) {
    errors.push(`${name}: requires direct and ambiguous tool-selection evals`);
  }
  if (new Set(cases.map((item) => item.messages[0].content)).size !== cases.length) {
    errors.push(`${name}: eval prompts must be unique`);
  }
}

if (tools.size !== 18) errors.push(`Expected 18 WebMCP tools, discovered ${tools.size}`);

if (errors.length) {
  console.error(`WebMCP eval contract failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`WebMCP eval contract passed: ${evals.length} cases cover ${tools.size} tools.`);
