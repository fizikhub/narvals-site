import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { productionFiles } from './production-files.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = join(projectRoot, 'public');
const distRoot = join(projectRoot, 'dist');

for (const relativePath of productionFiles) {
  const destination = join(distRoot, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(join(publicRoot, relativePath), destination);
}

console.log(`Copied ${productionFiles.length} allowlisted public assets to dist/.`);
