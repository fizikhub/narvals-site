import { blogPosts } from './blog-posts.mjs';
import { topicHubs } from './topic-hubs.mjs';

export const staticPages = [
  { key: 'home', path: '/', file: 'index.html', lastModified: '2026-08-29', kind: 'home' },
  { key: 'services', path: '/hizmetler/', file: 'hizmetler/index.html', lastModified: '2026-08-27', kind: 'collection' },
  { key: 'web-design', path: '/hizmetler/web-tasarim/', file: 'hizmetler/web-tasarim/index.html', lastModified: '2026-08-29', kind: 'service' },
  { key: 'ecommerce', path: '/hizmetler/e-ticaret/', file: 'hizmetler/e-ticaret/index.html', lastModified: '2026-08-29', kind: 'service' },
  { key: 'custom-software', path: '/hizmetler/ozel-yazilim/', file: 'hizmetler/ozel-yazilim/index.html', lastModified: '2026-08-23', kind: 'service' },
  { key: 'meta-ads', path: '/hizmetler/dijital-reklam/', file: 'hizmetler/dijital-reklam/index.html', lastModified: '2026-08-27', kind: 'service' },
  { key: 'google-ads', path: '/hizmetler/google-ads/', file: 'hizmetler/google-ads/index.html', lastModified: '2026-08-29', kind: 'service' },
  { key: 'social-media-management', path: '/hizmetler/sosyal-medya-yonetimi/', file: 'hizmetler/sosyal-medya-yonetimi/index.html', lastModified: '2026-08-23', kind: 'service' },
  { key: 'qr-menu', path: '/hizmetler/qr-menu/', file: 'hizmetler/qr-menu/index.html', lastModified: '2026-08-29', kind: 'service' },
  { key: 'reservations', path: '/hizmetler/rezervasyon-randevu/', file: 'hizmetler/rezervasyon-randevu/index.html', lastModified: '2026-08-23', kind: 'service' },
  { key: 'system-comparison', path: '/hizmetler/qr-menu-rezervasyon/', file: 'hizmetler/qr-menu-rezervasyon/index.html', lastModified: '2026-08-23', kind: 'comparison' },
  { key: 'about', path: '/hakkimizda/', file: 'hakkimizda/index.html', lastModified: '2026-08-23', kind: 'about' },
  { key: 'contact', path: '/iletisim/', file: 'iletisim/index.html', lastModified: '2026-08-27', kind: 'contact' },
  { key: 'tools', path: '/araclar/', file: 'araclar/index.html', lastModified: '2026-08-29', kind: 'collection' },
  { key: 'website-check', path: '/araclar/web-sitesi-kontrolu/', file: 'araclar/web-sitesi-kontrolu/index.html', lastModified: '2026-08-29', kind: 'tool' },
  { key: 'proposal-compare', path: '/araclar/teklif-karsilastirma/', file: 'araclar/teklif-karsilastirma/index.html', lastModified: '2026-08-29', kind: 'tool' },
  { key: 'conversion-calculator', path: '/araclar/donusum-orani-hesaplama/', file: 'araclar/donusum-orani-hesaplama/index.html', lastModified: '2026-08-30', kind: 'tool' },
  { key: 'roas-calculator', path: '/araclar/roas-hesaplama/', file: 'araclar/roas-hesaplama/index.html', lastModified: '2026-08-30', kind: 'tool' },
  { key: 'ads-budget-calculator', path: '/araclar/google-ads-butce-hesaplama/', file: 'araclar/google-ads-butce-hesaplama/index.html', lastModified: '2026-08-30', kind: 'tool' },
  { key: 'utm-builder', path: '/araclar/utm-link-olusturucu/', file: 'araclar/utm-link-olusturucu/index.html', lastModified: '2026-08-30', kind: 'tool' },
  { key: 'blog', path: '/blog/', file: 'blog/index.html', lastModified: '2026-08-29', kind: 'collection' },
  { key: 'editorial-policy', path: '/editoryal-ilkeler/', file: 'editoryal-ilkeler/index.html', lastModified: '2026-08-23', kind: 'policy' }
];

export const blogPages = blogPosts.map((post) => ({
  key: `blog-${post.slug}`,
  path: `/blog/${post.slug}/`,
  file: `blog/${post.slug}/index.html`,
  lastModified: post.modified.slice(0, 10),
  kind: 'article',
  post
}));

export const topicHubPages = topicHubs.map((hub) => ({
  key: `blog-topic-${hub.slug}`,
  path: `/blog/konu/${hub.slug}/`,
  file: `blog/konu/${hub.slug}/index.html`,
  lastModified: '2026-08-29',
  kind: 'collection',
  hub
}));

export const sitePages = [...staticPages, ...topicHubPages, ...blogPages];

for (const field of ['key', 'path', 'file']) {
  const values = sitePages.map((page) => page[field]);
  if (new Set(values).size !== values.length) throw new Error(`Duplicate site page ${field} found.`);
}
for (const page of sitePages) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastModified) || Number.isNaN(Date.parse(`${page.lastModified}T00:00:00Z`))) {
    throw new Error(`${page.path} has an invalid lastModified date.`);
  }
  if (!page.path.startsWith('/') || (page.path !== '/' && !page.path.endsWith('/'))) {
    throw new Error(`${page.path} is not a canonical slash path.`);
  }
}
