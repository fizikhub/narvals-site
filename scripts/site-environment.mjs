import { loadEnv } from 'vite';

/**
 * Load SITE_URL from the same environment-file cascade Vite uses.
 * Explicit process environment values always win over .env files.
 */
export function loadSiteEnvironment({ projectRoot, mode = process.env.SITE_MODE || 'development' }) {
  return {
    ...loadEnv(mode, projectRoot, ''),
    ...process.env
  };
}
