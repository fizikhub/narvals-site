import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from '../content/blog-posts.mjs';
import { sitePages } from '../content/site-pages.mjs';
import { renderBlog } from './render-blog.mjs';
import { loadSiteEnvironment } from './site-environment.mjs';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = join(projectRoot, 'public');
const environment = loadSiteEnvironment({ projectRoot });
const explicitSiteUrl = environment.SITE_URL?.trim();
if (environment.REQUIRE_SITE_URL === '1' && !explicitSiteUrl) {
  throw new Error('Production build requires an explicit SITE_URL. Add it to .env or the build environment.');
}
const configuredSiteUrl = new URL(explicitSiteUrl || 'https://narvals.com');
if (configuredSiteUrl.pathname !== '/' || configuredSiteUrl.search || configuredSiteUrl.hash) {
  throw new Error('SITE_URL must be an origin only, for example https://example.com');
}
if (configuredSiteUrl.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(configuredSiteUrl.hostname)) {
  throw new Error('Production SITE_URL must use HTTPS.');
}
const siteOrigin = configuredSiteUrl.origin;
if (environment.REQUIRE_SITE_URL === '1' && ['example.com', 'www.example.com'].includes(configuredSiteUrl.hostname)) {
  throw new Error('Production SITE_URL cannot use the reserved example.com domain.');
}

// lastModified is maintained per URL in content/site-pages.mjs and changes
// only after a material content update. Build time is never used as a proxy.

const encodeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages.map(({ path, lastModified }) => `  <url>
    <loc>${encodeXml(`${siteOrigin}${path}`)}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`).join('\n')}
</urlset>
`;

const robots = `# Narvals Labs — arama ve yanıt motorları için tarama politikası
User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;

const llms = `# Narvals Labs

> Narvals Labs; web sitesi ve UX, işletmeye özel yazılım, dijital reklam, marka, QR menü ve rezervasyon sistemlerini aynı ekipte birleştiren Türkçe dijital üretim stüdyosudur.

## Ana sayfalar

- [Ana sayfa](${siteOrigin}/): Stüdyonun yaklaşımı, hizmetleri ve çalışma süreci
- [Tüm hizmetler](${siteOrigin}/hizmetler/): İhtiyaca göre hizmet seçimi ve bağlantılar
- [Web tasarım ve UX](${siteOrigin}/hizmetler/web-tasarim/): Kurumsal web sitesi, e-ticaret ve dönüşüm odaklı UX
- [E-ticaret sitesi](${siteOrigin}/hizmetler/e-ticaret/): Ürün keşfi, sepet, ödeme ve sipariş yönetimi
- [Özel yazılım](${siteOrigin}/hizmetler/ozel-yazilim/): Yönetim panelleri, otomasyonlar ve entegrasyonlar
- [Dijital reklam](${siteOrigin}/hizmetler/dijital-reklam/): Meta reklam yönetimi, kreatif ve ölçüm
- [QR menü](${siteOrigin}/hizmetler/qr-menu/): Yönetilebilir mobil ürün ve menü deneyimi
- [Rezervasyon ve randevu](${siteOrigin}/hizmetler/rezervasyon-randevu/): Kapasite, zaman ve personel kurallarıyla kayıt sistemi
- [QR menü ve rezervasyon karşılaştırması](${siteOrigin}/hizmetler/qr-menu-rezervasyon/): Menü, randevu ve rezervasyon akışlarının ayrımı
- [Hakkımızda](${siteOrigin}/hakkimizda/): Narvals Labs'in çalışma ilkeleri
- [İletişim](${siteOrigin}/iletisim/): Proje ön görüşmesi ve iletişim yolu
- [Rehberler](${siteOrigin}/blog/): Web, yazılım, reklam, SEO/GEO ve işletme sistemleri için kaynaklı karar rehberleri
- [Editoryal ilkeler](${siteOrigin}/editoryal-ilkeler/): Kaynak, güncelleme, düzeltme ve yapay zekâ desteği politikası

## Seçilmiş rehberler

${blogPosts.map((post) => `- [${post.title}](${siteOrigin}/blog/${post.slug}/): ${post.description}`).join('\n')}

## İçerik ilkeleri

- Hizmet kapsamı işletmenin hedefi, mevcut altyapısı ve gerçek iş akışına göre belirlenir.
- Sonuç garantisi verilmez; ölçülebilir hedef, açık kapsam ve düzenli iyileştirme esastır.
- Bu dosya deneysel bir gezinme özetidir. Güncel ve yetkili içerik yukarıdaki HTML sayfalarındadır.
`;

await mkdir(publicRoot, { recursive: true });

// Authored HTML stays deployable when the production origin changes. Blog and
// editorial files are rendered below, so only hand-authored pages are synced.
const authoredPages = sitePages.filter(({ file }) => !file.startsWith('blog/') && file !== 'editoryal-ilkeler/index.html');
await Promise.all(authoredPages.map(async ({ file }) => {
  const htmlPath = join(projectRoot, file);
  const html = await readFile(htmlPath, 'utf8');
  const canonicalHref = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  if (!canonicalHref) throw new Error(`${file} is missing the canonical URL required for origin synchronization.`);
  const currentOrigin = new URL(canonicalHref).origin;
  if (currentOrigin !== siteOrigin) await writeFile(htmlPath, html.replaceAll(currentOrigin, siteOrigin));
}));

await renderBlog({ projectRoot, publicRoot, siteOrigin });
await Promise.all([
  writeFile(join(publicRoot, 'sitemap.xml'), sitemap),
  writeFile(join(publicRoot, 'robots.txt'), robots),
  writeFile(join(publicRoot, 'llms.txt'), llms)
]);

const redirectTemplatePath = join(publicRoot, '_redirects.template');
try {
  const redirectTemplate = await readFile(redirectTemplatePath, 'utf8');
  const canonicalPathRedirects = sitePages
    .filter(({ path }) => path !== '/' && path.endsWith('/'))
    .flatMap(({ path }) => [
      `${path.slice(0, -1)}  ${path}  301`,
      `${path}index.html  ${path}  301`
    ])
    .join('\n');
  await writeFile(
    join(publicRoot, '_redirects'),
    `${redirectTemplate.replaceAll('__SITE_ORIGIN__', siteOrigin).trim()}\n${canonicalPathRedirects}\n`
  );
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

console.log(`Generated search discovery files for ${siteOrigin}`);
if (siteOrigin === 'https://narvalslabs.com') {
  console.warn('WARNING: using the unverified placeholder canonical https://narvalslabs.com; use https://narvals.com instead.');
}
