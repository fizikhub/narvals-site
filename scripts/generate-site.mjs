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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages.map(({ path, lastModified }) => `  <url>
    <loc>${encodeXml(`${siteOrigin}${path}`)}</loc>
    <lastmod>${lastModified}</lastmod>
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

User-agent: GoogleOther
Allow: /

User-agent: Google-CloudVertexBot
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

User-agent: OAI-AdsBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: FacebookBot
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

User-agent: DeepL-Bot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Diffbot
Allow: /

User-agent: PoeBot
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
Host: ${configuredSiteUrl.host}
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
- [Ücretsiz araçlar](${siteOrigin}/araclar/): Web sitesi, ajans teklifi ve proje kapsamı karar araçları
- [Ücretsiz web sitesi kontrolü](${siteOrigin}/araclar/web-sitesi-kontrolu/): Teklif, güven, dönüşüm ve teknik görünürlüğü 16 soruda değerlendiren, kayıt gerektirmeyen araç
- [Teklif karşılaştırma aracı](${siteOrigin}/araclar/teklif-karsilastirma/): İki veya üç web sitesi teklifini 12 kapsam ve risk ölçütüyle karşılaştıran araç
- [Dönüşüm oranı hesaplama](${siteOrigin}/araclar/donusum-orani-hesaplama/): Ziyaret, nitelikli talep ve müşteri verilerinden mevcut oranı ve iyileştirme senaryolarını hesaplayan araç
- [ROAS hesaplama](${siteOrigin}/araclar/roas-hesaplama/): Reklam harcaması, ciro ve ürün kâr marjından gerçekleşen ROAS, başabaş (break-even) eşiği ve net kâr hesaplayan araç
- [Google Ads bütçe hesaplama](${siteOrigin}/araclar/google-ads-butce-hesaplama/): Hedef dönüşüm veya aylık bütçeden gereken tıklama, maliyet ve CPA simülasyonu yapan araç
- [UTM link oluşturucu](${siteOrigin}/araclar/utm-link-olusturucu/): GA4 ve Meta reklamları için Türkçe karakter temizlikli ve hazır şablonlu kampanya URL oluşturucu
- [QR kod oluşturucu](${siteOrigin}/araclar/qr-kod-olusturucu/): URL, dijital menü, WhatsApp, Wi-Fi ve vCard için süresiz, vektörel SVG ve HD PNG QR kod oluşturucu
- [E-ticaret kâr hesaplama](${siteOrigin}/araclar/e-ticaret-kar-hesaplama/): Trendyol, Hepsiburada ve e-ticaret siteniz için komisyon, kargo ve iade payından net kâr ve başabaş fiyat hesaplayıcı
- [KDV ve tevkifat hesaplama](${siteOrigin}/araclar/kdv-hesaplama/): KDV dahil/hariç tutar, fatura tevkifat kesintisi ve ödenecek net tutar hesaplayıcı
- [Core Web Vitals kontrolü](${siteOrigin}/araclar/core-web-vitals-kontrolu/): LCP, INP, CLS ve sunucu hız metriklerini 10 maddede denetleyen teşhis aracı
- [Görsel boyut ve oran hesaplayıcı](${siteOrigin}/araclar/gorsel-boyut-hesaplayici/): 16:9, 4:5, 1:1, 9:16 en-boy oranlarını ve sosyal medya piksel ölçülerini hesaplayan araç
- [Saatlik ücret hesaplayıcı](${siteOrigin}/araclar/saatlik-ucret-hesaplama/): Hedef net gelir, gider ve faturalandırılabilir çalışma saatinden minimum saatlik ve proje ücreti hesaplayan araç
- [Meta reklam bütçesi simülasyonu](${siteOrigin}/araclar/meta-reklam-butcesi-hesaplama/): Instagram ve Facebook reklamları için bütçe, CPM, gösterim, tıklama ve CPA simülasyon aracı
- [Meta etiketi ve sosyal önizleyici](${siteOrigin}/araclar/meta-etiket-onizleyici/): Google SERP snippet, WhatsApp kartı ve OpenGraph meta etiketlerini test ve kopyalama aracı
- [Schema Markup ve JSON-LD oluşturucu](${siteOrigin}/araclar/schema-olusturucu/): Organization, LocalBusiness, Service, FAQ, Article ve Product için doğrulanabilir Schema.org JSON-LD kod oluşturucu ve varlık aracı
- [E-E-A-T ve Bilgi Kazanımı Denetleyici](${siteOrigin}/araclar/bilgi-kazanimi-kontrolu/): Bilgi kazanımı (information gain), E-E-A-T yazar otoritesi, kanıt kalitesi ve RAG yapısını 12 kriterde denetleyen araç
- [CPC ve maksimum teklif hesaplama](${siteOrigin}/araclar/cpc-hesaplama/): Hedef CPA, dönüşüm oranı ve kâr marjından maksimum kârlı TBM, başabaş teklif eşiği ve açık artırma başlangıç teklifini hesaplayan araç
- [Tarama bütçesi ve taranabilirlik](${siteOrigin}/araclar/tarama-butcesi-hesaplama/): Googlebot günlük tarama kapasitesi, TTFB, CSR ve HTTP durum kodlarından tarama verimliliği ve israf simülatörü
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

## İsteğe Bağlı / Optional

- [Tam Dokümantasyon (llms-full.txt)](${siteOrigin}/llms-full.txt): LLM ve RAG sistemleri için ${blogPosts.length} karar rehberi, ${sitePages.filter(({ kind }) => kind === 'tool').length} araç ve mimari kuralları içeren tam metin bilgi tabanı
- [XML Site Haritası](${siteOrigin}/sitemap.xml): Arama motorları ve botlar için tam kanonik sayfa ve görsel indeksi
- [RSS Akışı](${siteOrigin}/blog/feed.xml): En son yayınlanan rehberlerin makine tarafından okunabilir XML akışı
- [OpenSearch XML](${siteOrigin}/opensearch.xml): Tarayıcılar ve AI ajanları için standart arama tanımı
`;

const llmsFull = `# Narvals Labs — Kapsamlı Bilgi Tabanı ve Sistem Dokümantasyonu (GEO Knowledge Base)

> Narvals Labs; web tasarımı, e-ticaret, işletmeye özel yazılım, Google Ads ve Meta reklam yönetimi ile işletme sistemlerini tek iş hedefinde birleştiren dijital üretim stüdyosudur.

- **Resmî Alan Adı:** ${siteOrigin}/
- **Hizmet Alanı:** Türkiye
- **Ana Hizmet Dili:** Türkçe (tr-TR)
- **Yayıncı & Varlık Adı:** Narvals Labs
- **E-posta:** info@narvals.com
- **WhatsApp / Telefon:** +90 501 944 19 21
- **Ücretsiz web sitesi kontrolü:** ${siteOrigin}/araclar/web-sitesi-kontrolu/
- **Ücretsiz web sitesi teklif karşılaştırma:** ${siteOrigin}/araclar/teklif-karsilastirma/
- **Ücretsiz dönüşüm oranı hesaplama:** ${siteOrigin}/araclar/donusum-orani-hesaplama/
- **Ücretsiz ROAS hesaplama:** ${siteOrigin}/araclar/roas-hesaplama/
- **Ücretsiz Google Ads bütçe simülasyonu:** ${siteOrigin}/araclar/google-ads-butce-hesaplama/
- **Ücretsiz GA4 UTM link oluşturucu:** ${siteOrigin}/araclar/utm-link-olusturucu/
- **Ücretsiz QR kod oluşturucu:** ${siteOrigin}/araclar/qr-kod-olusturucu/
- **Ücretsiz e-ticaret kâr hesaplayıcı:** ${siteOrigin}/araclar/e-ticaret-kar-hesaplama/
- **Ücretsiz KDV ve tevkifat hesaplama:** ${siteOrigin}/araclar/kdv-hesaplama/
- **Ücretsiz Core Web Vitals hız kontrolü:** ${siteOrigin}/araclar/core-web-vitals-kontrolu/
- **Ücretsiz görsel boyut ve oran hesaplayıcı:** ${siteOrigin}/araclar/gorsel-boyut-hesaplayici/
- **Ücretsiz saatlik ücret hesaplayıcı:** ${siteOrigin}/araclar/saatlik-ucret-hesaplama/
- **Ücretsiz Meta reklam bütçesi simülasyonu:** ${siteOrigin}/araclar/meta-reklam-butcesi-hesaplama/
- **Ücretsiz meta etiketi ve sosyal önizleyici:** ${siteOrigin}/araclar/meta-etiket-onizleyici/
- **Ücretsiz Schema Markup ve JSON-LD oluşturucu:** ${siteOrigin}/araclar/schema-olusturucu/
- **Ücretsiz E-E-A-T ve bilgi kazanımı denetleyici:** ${siteOrigin}/araclar/bilgi-kazanimi-kontrolu/
- **Ücretsiz CPC ve maksimum teklif hesaplayıcı:** ${siteOrigin}/araclar/cpc-hesaplama/
- **Ücretsiz tarama bütçesi ve taranabilirlik teşhisi:** ${siteOrigin}/araclar/tarama-butcesi-hesaplama/

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

## 3. Karar Formülleri ve Hesaplama Modelleri

- **ROAS (Return on Ad Spend):** \`ROAS = Toplam Reklam Cirosu / Toplam Reklam Harcaması\`
- **Başabaş ROAS (Break-even ROAS):** \`Break-even ROAS = 1 / Brüt Kâr Marjı (%)\` (Örn: %40 marjda başabaş ROAS eşiği 2.50x'tir).
- **Maksimum Kârlı TBM (Max CPC):** \`Max CPC = Hedef Satış Fiyatı × Kâr Marjı (%) × Dönüşüm Oranı (%)\`
- **Dönüşüm Oranı (CR):** \`CR = (Nitelikli Dönüşüm Sayısı / Toplam Tekil Ziyaret) × 100\`
- **Tarama Verimliliği (Crawl Efficiency):** \`Verimlilik = (Googlebot 200 OK Alan Canonical URL) / (Toplam Taranan İstek Sayısı)\` (Yönlendirme döngüleri, parametreler ve soft-404'ler bu oranı düşürür).
- **E-Ticaret Net Kâr Denklemi:** \`Net Kâr = Satış Fiyatı - (Ürün Maliyeti + Pazaryeri Komisyonu + Kargo/Paketleme + KDV Farkı + İade Payı + Müşteri Edinme Maliyeti/CPA)\`

---

## 4. Çalışma Metodolojisi (4 Adım)

1. **İşi Çıkarma:** Mevcut süreci, iş hedefini, müşteri sorularını ve teknik sınırları netleştirme.
2. **Akışı Çizme:** Ziyaretçinin göreceği ekranları, ekibin yönetim panelini ve veri yollarını planlama.
3. **Kurma ve Bağlama:** Tasarım, geliştirme, entegrasyon, içerik ve testleri aynı çalışma planında yürütme.
4. **Ölçme ve İyileştirme:** Yayın sonrasında gerçek kullanım verilerine göre reklamı, sayfaları ve süreçleri güçlendirme.

---

## 5. Sık Sorulan Sorular ve Yanıtlar (Definitive FAQ)

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

## 6. Tüm Karar Rehberleri Özeti (${blogPosts.length} Rehber)

${blogPosts.map((post) => `### ${post.title}
- **URL:** ${siteOrigin}/blog/${post.slug}/
- **Kategori:** ${post.category}
- **Kısa Cevap:** ${post.answer}
- **Önemli Çıkarımlar:**
${post.takeaways.map((t) => `  * ${t}`).join('\n')}
`).join('\n')}

---

## 7. Tüm Sayfa İndeksi (Canonical URLs)

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
- Ücretsiz Araçlar: ${siteOrigin}/araclar/
- Ücretsiz Web Sitesi Kontrolü: ${siteOrigin}/araclar/web-sitesi-kontrolu/
- Web Sitesi Teklif Karşılaştırma: ${siteOrigin}/araclar/teklif-karsilastirma/
- Dönüşüm Oranı Hesaplama: ${siteOrigin}/araclar/donusum-orani-hesaplama/
- ROAS Hesaplama: ${siteOrigin}/araclar/roas-hesaplama/
- Google Ads Bütçe Simülasyonu: ${siteOrigin}/araclar/google-ads-butce-hesaplama/
- GA4 UTM Link Oluşturucu: ${siteOrigin}/araclar/utm-link-olusturucu/
- QR Kod Oluşturucu: ${siteOrigin}/araclar/qr-kod-olusturucu/
- E-Ticaret Net Kâr Hesaplayıcı: ${siteOrigin}/araclar/e-ticaret-kar-hesaplama/
- KDV ve Tevkifat Hesaplama: ${siteOrigin}/araclar/kdv-hesaplama/
- Core Web Vitals Kontrolü: ${siteOrigin}/araclar/core-web-vitals-kontrolu/
- Görsel Boyut ve Oran Hesaplayıcı: ${siteOrigin}/araclar/gorsel-boyut-hesaplayici/
- Saatlik Ücret Hesaplayıcı: ${siteOrigin}/araclar/saatlik-ucret-hesaplama/
- Meta Reklam Bütçesi Hesaplama: ${siteOrigin}/araclar/meta-reklam-butcesi-hesaplama/
- Meta Etiketi ve Sosyal Önizleyici: ${siteOrigin}/araclar/meta-etiket-onizleyici/
- Schema Markup ve JSON-LD Oluşturucu: ${siteOrigin}/araclar/schema-olusturucu/
- E-E-A-T ve Bilgi Kazanımı Denetleyici: ${siteOrigin}/araclar/bilgi-kazanimi-kontrolu/
- CPC ve Maksimum Teklif Hesaplama: ${siteOrigin}/araclar/cpc-hesaplama/
- Tarama Bütçesi Hesaplama: ${siteOrigin}/araclar/tarama-butcesi-hesaplama/
- Blog & Rehberler: ${siteOrigin}/blog/
- Editoryal İlkeler: ${siteOrigin}/editoryal-ilkeler/
${topicHubs.map((hub) => `- Konu Merkezi: ${siteOrigin}/blog/konu/${hub.slug}/`).join('\n')}
${blogPosts.map((post) => `- Rehber: ${siteOrigin}/blog/${post.slug}/`).join('\n')}
`;

await mkdir(publicRoot, { recursive: true });

const sharedOrgNode = (origin) => ({
  '@type': 'OnlineBusiness',
  '@id': `${origin}/#organization`,
  name: 'Narvals Labs',
  url: `${origin}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${origin}/assets/logo-v6/narvals-avatar-v6-1080.png`,
    contentUrl: `${origin}/assets/logo-v6/narvals-avatar-v6-1080.png`,
    width: 1080,
    height: 1080
  },
  image: `${origin}/og/narvals-labs-og.jpg`,
  description: 'Web sitesi ve UX, işletmeye özel yazılım, dijital reklam, marka, QR menü ve rezervasyon sistemleri üreten dijital stüdyo.',
  email: 'info@narvals.com',
  telephone: '+905019441921',
  sameAs: [
    'https://github.com/fizikhub/narvals-site'
  ],
  publishingPrinciples: `${origin}/editoryal-ilkeler/`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'info@narvals.com',
    telephone: '+905019441921',
    areaServed: 'TR',
    availableLanguage: ['Turkish', 'English']
  },
  areaServed: {
    '@type': 'Country',
    name: 'Türkiye'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Narvals Labs Dijital Hizmetler',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kurumsal Web Tasarım ve UX', url: `${origin}/hizmetler/web-tasarim/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Ticaret Sitesi Tasarımı ve Geliştirme', url: `${origin}/hizmetler/e-ticaret/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'İşletmeye Özel Yazılım ve Otomasyon', url: `${origin}/hizmetler/ozel-yazilim/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Reklam ve Dönüşüm Yönetimi', url: `${origin}/hizmetler/google-ads/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta (Instagram & Facebook) Reklam Yönetimi', url: `${origin}/hizmetler/dijital-reklam/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sosyal Medya Yönetimi ve İçerik Stratejisi', url: `${origin}/hizmetler/sosyal-medya-yonetimi/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Özel QR Menü Yazılımı ve Yönetim Paneli', url: `${origin}/hizmetler/qr-menu/` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online Rezervasyon ve Randevu Sistemi', url: `${origin}/hizmetler/rezervasyon-randevu/` } }
    ]
  },
  knowsAbout: [
    { '@type': 'Thing', name: 'Web Tasarımı ve UX', sameAs: 'https://www.wikidata.org/wiki/Q190637' },
    { '@type': 'Thing', name: 'Arama Motoru Optimizasyonu (SEO)', sameAs: 'https://www.wikidata.org/wiki/Q180711' },
    { '@type': 'Thing', name: 'Elektronik Ticaret (E-Ticaret)', sameAs: 'https://www.wikidata.org/wiki/Q484876' },
    { '@type': 'Thing', name: 'Özel Yazılım Geliştirme', sameAs: 'https://www.wikidata.org/wiki/Q1341490' },
    { '@type': 'Thing', name: 'Dijital Pazarlama ve Reklam', sameAs: 'https://www.wikidata.org/wiki/Q1323528' },
    { '@type': 'Thing', name: 'Sosyal Medya Pazarlaması', sameAs: 'https://www.wikidata.org/wiki/Q261543' },
    { '@type': 'Thing', name: 'Kullanıcı Deneyimi (UX)', sameAs: 'https://www.wikidata.org/wiki/Q1132455' },
    { '@type': 'Thing', name: 'Dönüşüm Oranı Optimizasyonu (CRO)', sameAs: 'https://www.wikidata.org/wiki/Q5166418' },
    { '@type': 'Thing', name: 'QR Kod Teknolojisi', sameAs: 'https://www.wikidata.org/wiki/Q12203' },
    { '@type': 'Thing', name: 'Schema.org ve Yapılandırılmış Veri', sameAs: 'https://www.wikidata.org/wiki/Q3475338' },
    { '@type': 'Thing', name: 'Üretken Yapay Zekâ ve GEO', sameAs: 'https://www.wikidata.org/wiki/Q1170729' },
    { '@type': 'Thing', name: 'Google Ads', sameAs: 'https://www.wikidata.org/wiki/Q219563' },
    { '@type': 'Thing', name: 'OpenSearch Standartları', sameAs: 'https://www.wikidata.org/wiki/Q1056588' },
    { '@type': 'Thing', name: 'Uygulama Programlama Arayüzü (API)', sameAs: 'https://www.wikidata.org/wiki/Q165149' },
    'İnsan odaklı içerik ve teknik SEO',
    'Kaynaklandırma ve editoryal doğrulama',
    'Erişilebilir ve semantik web arayüzleri',
    'WebMCP (Web Model Context Protocol)',
    'Core Web Vitals Optimizasyonu',
    'Conversions API (CAPI)',
    'Google Analytics 4 (GA4)',
    'Headless CMS ve API Mimarisi'
  ],
  knowsLanguage: ['tr', 'en']
});

const sharedWebsiteNode = (origin) => ({
  '@type': 'WebSite',
  '@id': `${origin}/#website`,
  url: `${origin}/`,
  name: 'Narvals Labs',
  alternateName: ['Narvals'],
  inLanguage: 'tr-TR',
  publisher: { '@id': `${origin}/#organization` }
});

const speculationRulesBlock = `    <script type="speculationrules">${JSON.stringify({
      prefetch: [
        {
          source: 'document',
          where: {
            and: [
              { href_matches: '/*' },
              { not: { href_matches: '/*\\?*' } },
              { not: { selector_matches: '[rel~=nofollow]' } }
            ]
          },
          eagerness: 'moderate'
        }
      ],
      prerender: [
        {
          source: 'document',
          where: {
            and: [
              { href_matches: '/hizmetler/*' },
              { not: { href_matches: '/*\\?*' } },
              { not: { selector_matches: '[rel~=nofollow]' } }
            ]
          },
          eagerness: 'conservative'
        }
      ]
    }, null, 2)}</script>`;

// Authored HTML stays deployable when the production origin changes. Blog and
// editorial files are rendered below, so only hand-authored pages are synced.
const authoredPages = sitePages.filter(({ file }) => !file.startsWith('blog/') && file !== 'editoryal-ilkeler/index.html');
await Promise.all(authoredPages.map(async ({ file, path }) => {
  const htmlPath = join(projectRoot, file);
  const html = await readFile(htmlPath, 'utf8');
  const canonicalHref = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  if (!canonicalHref) throw new Error(`${file} is missing the canonical URL required for origin synchronization.`);
  const currentOrigin = new URL(canonicalHref).origin;
  let updatedHtml = html;
  if (currentOrigin !== siteOrigin) {
    updatedHtml = updatedHtml.replaceAll(currentOrigin, siteOrigin);
  }
  updatedHtml = updatedHtml.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i, (match, jsonText) => {
    try {
      const data = JSON.parse(jsonText);
      if (data && Array.isArray(data['@graph'])) {
        data['@graph'] = data['@graph'].flatMap((node) => {
          if (path !== '/' && ['Organization', 'OnlineBusiness', 'WebSite'].includes(node['@type'])) return [];
          if (['Organization', 'OnlineBusiness'].includes(node['@type'])) return sharedOrgNode(siteOrigin);
          if (node['@type'] === 'WebSite') return sharedWebsiteNode(siteOrigin);
          const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
          if (types.includes('WebApplication')) {
            node.provider = { '@id': `${siteOrigin}/#organization` };
            node.browserRequirements = 'JavaScript, HTML5, CSS3';
            node.softwareVersion = '2.0';
            node.applicationCategory = 'BusinessApplication';
            node.operatingSystem = 'All modern web browsers';
            node.permissions = 'none';
            node.isAccessibleForFree = true;
          }
          return node;
        });
        return `<script type="application/ld+json">\n      ${JSON.stringify(data, null, 2).replace(/\n/g, '\n      ')}\n    </script>`;
      }
    } catch {
      // Keep existing if JSON parsing fails
    }
    return match;
  });
  const openSearchLink = '    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Narvals Labs" />';
  const describedByLink = '    <link rel="describedby" type="text/plain" href="/llms.txt" />';
  if (!updatedHtml.includes('rel="search"')) {
    if (updatedHtml.includes('type="application/rss+xml"')) {
      updatedHtml = updatedHtml.replace(/(<link\s+rel="alternate"\s+type="application\/rss\+xml"[^>]*>)/i, `$1\n${openSearchLink}`);
    } else {
      updatedHtml = updatedHtml.replace('</head>', `${openSearchLink}\n  </head>`);
    }
  }
  if (!updatedHtml.includes('rel="describedby"')) {
    if (updatedHtml.includes('rel="search"')) {
      updatedHtml = updatedHtml.replace(/(<link\s+rel="search"[^>]*>)/i, `$1\n${describedByLink}`);
    } else {
      updatedHtml = updatedHtml.replace('</head>', `${describedByLink}\n  </head>`);
    }
  }
  if (/<script\b[^>]*type="speculationrules"[^>]*>([\s\S]*?)<\/script>/i.test(updatedHtml)) {
    updatedHtml = updatedHtml.replace(/<script\b[^>]*type="speculationrules"[^>]*>([\s\S]*?)<\/script>/i, speculationRulesBlock.trim());
  } else {
    updatedHtml = updatedHtml.replace('</head>', `${speculationRulesBlock}\n  </head>`);
  }
  if (updatedHtml !== html) await writeFile(htmlPath, updatedHtml);
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
