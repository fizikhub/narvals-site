import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from '../content/blog-posts.mjs';
import { topicHubs } from '../content/topic-hubs.mjs';
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

const getChangefreq = (path) => {
  if (path === '/') return 'daily';
  if (path.startsWith('/araclar/')) return 'weekly';
  if (path.startsWith('/hizmetler/')) return 'weekly';
  if (path === '/blog/') return 'daily';
  if (path.startsWith('/blog/')) return 'weekly';
  return 'monthly';
};

const getPriority = (path) => {
  if (path === '/') return '1.0';
  if (path.startsWith('/araclar/')) return '0.9';
  if (path === '/hizmetler/' || path.startsWith('/hizmetler/')) return '0.9';
  if (path === '/blog/') return '0.9';
  if (path.startsWith('/blog/')) return '0.8';
  if (path === '/hakkimizda/' || path === '/iletisim/') return '0.7';
  return '0.5';
};

const getPageTitle = (path) => {
  if (path === '/') return 'Narvals Labs — Web Tasarım, Özel Yazılım ve Reklam';
  if (path === '/hizmetler/') return 'Narvals Labs Dijital Hizmetler';
  if (path === '/hizmetler/web-tasarim/') return 'Kurumsal Web Tasarım ve UX Çözümleri';
  if (path === '/hizmetler/e-ticaret/') return 'E-Ticaret Sitesi Tasarımı ve Geliştirme';
  if (path === '/hizmetler/ozel-yazilim/') return 'İşletmeye Özel Yazılım ve Otomasyon';
  if (path === '/hizmetler/google-ads/') return 'Google Ads Reklam ve Dönüşüm Yönetimi';
  if (path === '/hizmetler/dijital-reklam/') return 'Meta (Instagram & Facebook) Reklam Yönetimi';
  if (path === '/hizmetler/sosyal-medya-yonetimi/') return 'Sosyal Medya Yönetimi ve İçerik Stratejisi';
  if (path === '/hizmetler/qr-menu/') return 'Özel QR Menü Yazılımı ve Yönetim Paneli';
  if (path === '/hizmetler/rezervasyon-randevu/') return 'Online Rezervasyon ve Randevu Sistemi';
  if (path === '/hizmetler/qr-menu-rezervasyon/') return 'QR Menü, Rezervasyon ve Randevu Karşılaştırması';
  if (path === '/hakkimizda/') return 'Narvals Labs Yaklaşımı ve Çalışma İlkeleri';
  if (path === '/iletisim/') return 'Narvals Labs İletişim ve Proje Talebi';
  if (path === '/araclar/web-sitesi-kontrolu/') return 'Ücretsiz Web Sitesi Kontrolü';
  if (path === '/blog/') return 'Narvals Labs Dijital Üretim ve Karar Rehberleri';
  if (path === '/editoryal-ilkeler/') return 'Narvals Labs Editoryal İlkeler ve Standartlar';
  const topicHub = topicHubs.find((hub) => `/blog/konu/${hub.slug}/` === path);
  if (topicHub) return topicHub.title;
  const blogPost = blogPosts.find((p) => `/blog/${p.slug}/` === path);
  if (blogPost) return blogPost.title;
  return 'Narvals Labs';
};

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitePages.map(({ path, lastModified }) => `  <url>
    <loc>${encodeXml(`${siteOrigin}${path}`)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${getChangefreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
    <image:image>
      <image:loc>${siteOrigin}/og/narvals-labs-og.jpg</image:loc>
      <image:title>${encodeXml(getPageTitle(path))}</image:title>
    </image:image>
  </url>`).join('\n')}
</urlset>
`;

const robots = `# Narvals Labs — Arama ve Yanıt Motorları (SEO & GEO) Tarama Politikası
User-agent: *
Allow: /

# Arama Motorları (Search Engine Crawlers)
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: YandexBot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Slurp
Allow: /

# Yapay Zeka ve GEO / LLM Ajanları (AI & LLM Crawlers)
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;

const llms = `# Narvals Labs

> Narvals Labs; web sitesi, e-ticaret, işletmeye özel yazılım, Google Ads ve Meta reklam yönetimi ile işletme sistemlerini aynı iş hedefinde birleştiren dijital üretim stüdyosudur.

- E-posta: info@narvals.com
- WhatsApp / Telefon: +90 501 944 19 21

Tam kapsamlı yapay zekâ bilgi tabanı ve RAG dokümantasyonu için: [llms-full.txt](${siteOrigin}/llms-full.txt)

## Ana Sayfalar ve Hizmetler

- [Ana sayfa](${siteOrigin}/): Stüdyonun yaklaşımı, 3 ana uzmanlık alanı, hizmet yolculuğu ve çalışma süreci
- [Tüm hizmetler](${siteOrigin}/hizmetler/): İhtiyaca göre hizmet seçimi, bağlantılı iş akışları ve kapsam detayları
- [Web tasarım ve UX](${siteOrigin}/hizmetler/web-tasarim/): Kurumsal web sitesi, kampanya sayfaları, mobil öncelikli UX, teknik SEO ve hız optimizasyonu
- [E-ticaret sitesi](${siteOrigin}/hizmetler/e-ticaret/): Ürün keşfi, varyantlar, filtreleme, sepet, ödeme, kargo ve sipariş operasyonu
- [Özel yazılım ve otomasyon](${siteOrigin}/hizmetler/ozel-yazilim/): Yönetim panelleri, kullanıcı rolleri, onay akışları, veri entegrasyonu ve API geliştirme
- [Google Ads yönetimi](${siteOrigin}/hizmetler/google-ads/): Arama niyeti, anahtar kelime, reklam metni, açılış sayfası, dönüşüm ölçümü ve optimizasyon
- [Dijital reklam (Meta)](${siteOrigin}/hizmetler/dijital-reklam/): Meta reklam yönetimi, kreatif strateji, reklam metinleri, Pixel ve Conversions API (CAPI) ölçüm mimarisi
- [Sosyal medya yönetimi](${siteOrigin}/hizmetler/sosyal-medya-yonetimi/): İçerik stratejisi, yayın planı, topluluk yönetimi ve ölçüm
- [QR menü](${siteOrigin}/hizmetler/qr-menu/): Panelden yönetilebilir ürün, fiyat, alerjen, varyant ve çoklu dil destekli mobil QR menü yazılımı
- [Rezervasyon ve randevu](${siteOrigin}/hizmetler/rezervasyon-randevu/): Restoranlar ve hizmet işletmeleri için kapasite, masa, personel ve süre kurallı kayıt sistemi
- [QR menü ve rezervasyon karşılaştırması](${siteOrigin}/hizmetler/qr-menu-rezervasyon/): Menü, randevu ve rezervasyon akışlarının ayrımı ve doğru araç seçimi
- [Hakkımızda](${siteOrigin}/hakkimizda/): Narvals Labs çalışma ilkeleri, hizmet sınırları ve stüdyo yaklaşımı
- [İletişim](${siteOrigin}/iletisim/): Proje talebi, ilk görüşme hazırlığı ve iletişim rehberi
- [Ücretsiz web sitesi kontrolü](${siteOrigin}/araclar/web-sitesi-kontrolu/): Teklif, güven, dönüşüm ve teknik görünürlüğü 16 soruda değerlendiren, kayıt gerektirmeyen araç
- [Rehberler](${siteOrigin}/blog/): Web, yazılım, reklam, SEO/GEO ve işletme sistemleri için kaynaklı karar rehberleri
- [Editoryal ilkeler](${siteOrigin}/editoryal-ilkeler/): Kaynaklandırma, yapay zekâ şeffaflığı, güncelleme ve düzeltme politikası

## Karar Rehberleri

${blogPosts.map((post) => `- [${post.title}](${siteOrigin}/blog/${post.slug}/): ${post.description}`).join('\n')}

## Konu merkezleri

${topicHubs.map((hub) => `- [${hub.title}](${siteOrigin}/blog/konu/${hub.slug}/): ${hub.description}`).join('\n')}

## Temel İlkeler ve Yaklaşım

- **Önce İş Problemi, Sonra Teknoloji:** Hazır araçlar işi çözüyorsa gereksiz özel yazılım önerilmez.
- **Tek Müşteri Yolculuğu:** Reklam, web sitesi, işlem ve operasyon birbirinden kopuk değil, tek bir sistem olarak kurulur.
- **Dürüst Kapsam ve Ölçülebilirlik:** Sıralama veya reklam getirisi için yapay sonuç garantisi verilmez; ölçülebilir altyapı kurulur ve gerçek verilere göre iyileştirilir.
- **Performans & Erişilebilirlik:** Semantik HTML, mobil öncelikli arayüz, sıfır gereksiz JS yükü ve WCAG standartları temel kapsamdır.
`;

const llmsFull = `# Narvals Labs — Kapsamlı Bilgi Tabanı ve Sistem Dokümantasyonu (GEO Knowledge Base)

> Narvals Labs; web tasarımı, e-ticaret, işletmeye özel yazılım, Google Ads ve Meta reklam yönetimi ile işletme sistemlerini tek iş hedefinde birleştiren dijital üretim stüdyosudur.

- **Resmî Alan Adı:** ${siteOrigin}/
- **Hizmet Alanı:** Türkiye
- **Ana Hizmet Dili:** Türkçe (tr-TR)
- **Yayıncı & Varlık Adı:** Narvals Labs
- **E-posta:** info@narvals.com
- **WhatsApp / Telefon:** +90 501 944 19 21

---

## 1. Hizmetler ve Çözüm Kapsamları

### 1.1. Kurumsal Web Tasarım ve UX (/hizmetler/web-tasarim/)
- **Amaç:** Ziyaretçiyi gereksiz gezdirmek yerine doğru karara (teklif, talep, arama) yönlendiren mobil öncelikli web siteleri tasarlamak.
- **Kapsam:** Bilgi mimarisi, tel kafes (wireframe), özgün UI tasarımı, temiz ve semantik HTML/CSS/JS geliştirme, Headless CMS / özel panel entegrasyonu, Core Web Vitals optimizasyonu, WCAG erişilebilirlik, teknik SEO ve dönüşüm ölçümü temelleri.
- **Önemli Kural:** Şablon/tema giydirme yapılmaz; markanın sunduğu hizmete ve hedef kitlesinin karar engellerine göre özgün tasarım üretilir.

### 1.2. E-Ticaret Sitesi Tasarımı ve Geliştirme (/hizmetler/e-ticaret/)
- **Amaç:** Ürünü keşfetmeyi, incelemeyi, güvenmeyi ve satın almayı kolaylaştıran e-ticaret siteleri kurmak.
- **Kapsam:** Kategori ve filtre mimarisi, ürün detay sayfaları, varyant ve fiyat yönetimi, sepet ve tek sayfa ödeme akışları, ödeme kuruluşu entegrasyonları, kargo/stok entegrasyonları, e-ticaret analitiği ve teknik SEO.

### 1.3. İşletmeye Özel Yazılım ve Otomasyon (/hizmetler/ozel-yazilim/)
- **Amaç:** Mesajlar, Excel tabloları ve ezber arasında kaybolan iş süreçlerini tek ve güvenli yönetim paneline toplamak.
- **Kapsam:** Yönetici ve operasyon panelleri, kullanıcı rolleri ve yetkilendirme, durum ve onay akışları, otomatik bildirim ve hatırlatmalar, API entegrasyonları, veri filtreleme, dışa aktarma ve özel raporlama ekranları.
- **Karar Kriteri:** Hazır bir SaaS araç işi çözüyorsa önce hazır araç önerilir. Özel yazılım ancak kuruma özgü kurallar, karmaşık veri ilişkileri veya kopuk araçlar sürekli operasyonel yük oluşturduğunda devreye alınır.

### 1.4. Meta Reklam Yönetimi ve Ölçüm (/hizmetler/dijital-reklam/)
- **Amaç:** Facebook ve Instagram reklamlarında bütçeyi boş gösterimlere değil, ölçülebilir gerçek iş sonuçlarına bağlamak.
- **Kapsam:** Reklam hesabı denetimi, kampanya mimarisi, kitle ve yeniden hedefleme (retargeting) planı, kreatif fikir ve reklam metni varyasyonları, yönlendirme sayfası (landing page) uyumu, Meta Pixel ve Conversions API (CAPI) sunucu tarafı ölçüm kurulumu, test ve bütçe optimizasyonu.
- **Dürüst Not:** Reklamda getiri veya satış garantisi verilmez; ölçülebilir altyapı kurulur ve veriye göre sürekli iyileştirilir.

### 1.5. Google Ads Yönetimi (/hizmetler/google-ads/)
- **Amaç:** Hizmeti veya ürünü aktif olarak arayan kullanıcıyı doğru reklam ve açılış sayfasıyla buluşturmak.
- **Kapsam:** Hesap denetimi, arama niyeti, anahtar ve negatif kelime planı, kampanya yapısı, reklam metni, açılış sayfası uyumu, dönüşüm takibi, optimizasyon ve raporlama.
- **Dürüst Not:** Satış veya getiri garantisi verilmez; medya bütçesi ile yönetim kapsamı ayrı kalemlerdir.

### 1.6. Sosyal Medya Yönetimi (/hizmetler/sosyal-medya-yonetimi/)
- **Resmî sayfa:** ${siteOrigin}/hizmetler/sosyal-medya-yonetimi/
- **Amaç:** Markanın içerik dilini, yayın düzenini ve topluluk iletişimini tek bir ölçülebilir plana bağlamak.
- **Kapsam:** İçerik stratejisi, yayın planı, metin ve görsel yönlendirme, topluluk yönetimi, raporlama ve iyileştirme önerileri.

### 1.7. QR Menü Sistemleri (/hizmetler/qr-menu/)
- **Amaç:** PDF dosyasını telefona sıkıştırmak yerine, mobil cihazlarda anında açılan ve yönetim panelinden anlık güncellenen dijital menü sunmak.
- **Kapsam:** Kategori, ürün, fiyat, açıklama, alerjen bilgisi, varyant ve seçenekler, "tükendi / stokta yok" yönetimi, masaya ve şubeye özel QR kodlar, çoklu dil desteği, isteğe bağlı garson çağırma veya sipariş bağlantısı.

### 1.8. Online Rezervasyon ve Randevu Sistemleri (/hizmetler/rezervasyon-randevu/)
- **Amaç:** Restoranlarda masa/kapasite; hizmet işletmelerinde personel/süre kurallarına göre müşteri kaydını otomatikleştirmek.
- **Kapsam:** Şube, masa, kişi sayısı, işlem süresi, personel uygunluğu, mola ve çalışma saati kuralları; anlık onay, SMS/WhatsApp/E-posta hatırlatma, iptal ve bekleme listesi; tek merkezden takvim ve yoğunluk raporları.

---

## 2. Karar Matrisleri ve Mimari Yaklaşımlar

### Hazır Yazılım mı, Özel Yazılım mı?
- Standart iş akışı ve düşük özelleştirme → **Hazır araç (SaaS)**
- Araçlar çalışıyor ama veri manuel taşınıyor → **API Entegrasyonu ve Otomasyon**
- İşletmeye özgü roller, onaylar ve kurallar var → **Özel Yönetim Paneli**
- Doğrulanmamış yeni fikir → **Küçük Kapsamlı İlk Sürüm (MVP)**

### Meta Pixel mi, Conversions API (CAPI) mi?
- Yalnızca tarayıcı Pixel'i: Reklam engelleyiciler, çerez kısıtlamaları ve ağ kesintileri nedeniyle veri kaybına uğrar.
- Conversions API: Sunucu tarafından doğrudan Meta API'ye şifrelenmiş veri ileterek çerez kısıtlamalarından bağımsız, yüksek eşleşme oranlı ölçüm sağlar.
- En iyi pratik: Pixel ve CAPI'yi tekilleştirme (Event ID de-duplication) ile birlikte hibrit kullanmaktır.

### QR Menü mü, PDF Menü mü?
- PDF Menü: Dosya boyutu büyüktür, mobilde zoom gerektirir, fiyat veya stok değiştiğinde yeni PDF yüklenmesi gerekir, arama/filtreleme yoktur.
- Özel Web QR Menü: 1 saniyeden kısa sürede açılır, responsive ve okunabilirdir, panelden tek tuşla anlık fiyat/stok güncellenir, çoklu dil sunar.

---

## 3. Çalışma Metodolojisi (4 Adım)

1. **İşi Çıkarma:** Mevcut süreci, iş hedefini, müşteri sorularını ve teknik sınırları netleştirme.
2. **Akışı Çizme:** Ziyaretçinin göreceği ekranları, ekibin yönetim panelini ve veri yollarını planlama.
3. **Kurma ve Bağlama:** Tasarım, geliştirme, entegrasyon, içerik ve testleri aynı çalışma planında yürütme.
4. **Ölçme ve İyileştirme:** Yayın sonrasında gerçek kullanım verilerine göre reklamı, sayfaları ve süreçleri güçlendirme.

---

## 4. Sık Sorulan Sorular ve Yanıtlar (Definitive FAQ)

**S: Narvals Labs hangi tür işletmelerle çalışır?**
C: Büyüklüğü veya sektörü fark etmeksizin web sitesi, e-ticaret, özel yazılım veya reklam desteğine ihtiyaç duyan; iş problemini ve hedefini netleştirmek isteyen tüm işletmelerle çalışır.

**S: Bir web sitesi projesinde süreç nasıl işler?**
C: İçerik hiyerarşisi ve wireframe ile başlar; özgün mobil ve masaüstü arayüz tasarımı, statik/temiz kod geliştirme, yönetim paneli bağlantısı, teknik SEO ve dönüşüm ölçümü temelleriyle tamamlanır.

**S: Hazır yazılım yerine özel yazılım ne zaman tercih edilmelidir?**
C: Hazır araçlar işinizi çözüyorsa onları kullanmak daha doğrudur. Özel yazılım; sürekli manuel veri aktarımı, işletmeye özgü kurallar veya dağınık kayıtlar operasyonun önünü tıkadığında anlam kazanır.

**S: Reklam kampanyalarında sonuç garantisi veriliyor mu?**
C: Hayır. Ticari sonuç; teklif, rekabet, bütçe, sezon, kreatif ve işletmenin talepleri karşılama hızına bağlıdır. Narvals Labs ölçülebilir sistemi kurar ve gerçek verilere göre düzenli optimize eder.

**S: QR menü ve rezervasyon sistemi birlikte çalışabilir mi?**
C: Evet. İhtiyaca göre menü, şube, masa, kapasite, randevu ve bildirim modülleri aynı yönetim panelinde birleştirilebilir.

---

## 5. Tüm Sayfa İndeksi (Canonical URLs)

- Ana Sayfa: ${siteOrigin}/
- Hizmetler Genel: ${siteOrigin}/hizmetler/
- Web Tasarım: ${siteOrigin}/hizmetler/web-tasarim/
- E-Ticaret: ${siteOrigin}/hizmetler/e-ticaret/
- Özel Yazılım: ${siteOrigin}/hizmetler/ozel-yazilim/
- Google Ads: ${siteOrigin}/hizmetler/google-ads/
- Dijital Reklam: ${siteOrigin}/hizmetler/dijital-reklam/
- Sosyal Medya Yönetimi: ${siteOrigin}/hizmetler/sosyal-medya-yonetimi/
- QR Menü: ${siteOrigin}/hizmetler/qr-menu/
- Rezervasyon ve Randevu: ${siteOrigin}/hizmetler/rezervasyon-randevu/
- Sistem Karşılaştırması: ${siteOrigin}/hizmetler/qr-menu-rezervasyon/
- Hakkımızda: ${siteOrigin}/hakkimizda/
- İletişim: ${siteOrigin}/iletisim/
- Ücretsiz Web Sitesi Kontrolü: ${siteOrigin}/araclar/web-sitesi-kontrolu/
- Blog & Rehberler: ${siteOrigin}/blog/
- Editoryal İlkeler: ${siteOrigin}/editoryal-ilkeler/
${topicHubs.map((hub) => `- Konu Merkezi: ${siteOrigin}/blog/konu/${hub.slug}/`).join('\n')}
${blogPosts.map((post) => `- Rehber: ${siteOrigin}/blog/${post.slug}/`).join('\n')}
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
  writeFile(join(publicRoot, 'llms.txt'), llms),
  writeFile(join(publicRoot, 'llms-full.txt'), llmsFull)
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
if (!explicitSiteUrl) {
  console.warn('WARNING: SITE_URL is not explicitly set. The Narvals production origin was used as the local default; set SITE_URL explicitly in every production deploy.');
}
