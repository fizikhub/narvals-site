import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { sitePages } from './content/site-pages.mjs';
import { loadSiteEnvironment } from './scripts/site-environment.mjs';

export default defineConfig(({ command, mode }) => {
  const environment = loadSiteEnvironment({ projectRoot: import.meta.dirname, mode });
  const configuredSiteUrl = new URL(environment.SITE_URL || 'https://narvalslabs.com');
  if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
    throw new Error('SITE_URL must be an origin only, for example https://example.com');
  }
  if (configuredSiteUrl.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(configuredSiteUrl.hostname)) {
    throw new Error('Production SITE_URL must use HTTPS.');
  }
  const siteOrigin = configuredSiteUrl.origin;

  return {
    appType: 'mpa',
    plugins: [{
      name: 'narvals-site-origin',
      transformIndexHtml(html) {
        return html.replaceAll('https://narvalslabs.com', siteOrigin);
      }
    }],
    // The source library in public/ is intentionally kept for design work. Production
    // receives only the explicit allowlist copied by scripts/copy-public-assets.mjs.
    publicDir: command === 'build' ? false : 'public',
    build: {
      rollupOptions: {
        input: {
          ...Object.fromEntries(sitePages.map((page) => [page.key, resolve(import.meta.dirname, page.file)])),
          notFound: resolve(import.meta.dirname, '404.html')
        }
      }
    }
  };
});
