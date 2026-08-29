# Narvals Labs — SEO/GEO uygulama ve büyüme planı

Son güncelleme: 30 Ağustos 2026

## Yönetici özeti

Site artık 70 canonical URL, 14 ücretsiz interaktif karar aracı, 35 kaynaklı
karar rehberi, 5 konu merkezi hub'ı (E-ticaret, Web Sitesi, Reklam, QR Menü, SEO & GEO),
blog hub'ı, editoryal politika, RSS, URL bazlı sitemap tarihi, tüm arama ve AI
tarayıcılarını (Googlebot, OAI-SearchBot, Claude-SearchBot, PerplexityBot, Applebot,
Meta-ExternalAgent vb.) destekleyen robots politikası, zenginleştirilmiş
JSON-LD şema grafı (`Organization`, `WebSite`, `WebPage`, `BlogPosting`, `Service`,
`WebApplication`, `FAQPage`, `BreadcrumbList`), tam sosyal metadata, iki yönlü
iç bağlantılar ve otomatik SEO/HTML kontrolleri içeriyor.

Google ve üretken yapay zekâ motorlarında birinci sıra veya alıntı garantisi
verilemez. Organik sıra ve AI alıntıları; arama niyeti, taranabilirlik, gerçek
marka kanıtları (E-E-A-T), bilgi kazanımı (Information Gain) ve kullanıcı
deneyimiyle şekillenir. Bu mimarinin amacı; teknik engelleri sıfıra indirmek,
her URL'ye kesin bir arama niyeti vermek ve makine tarafından hatasız anlaşılabilir
bir varlık (entity) grafı sunmaktır.

## Uygulanan sayfa–sorgu haritası

| URL | Birincil niyet | Sayfa görevi |
|---|---|---|
| `/` | Narvals Labs + ana uzmanlıklar | Markayı ve ana çözüm kümelerini tanıtmak |
| `/hizmetler/` | dijital hizmet seçimi | İhtiyacı doğru hizmet sayfasına yönlendirmek |
| `/hizmetler/web-tasarim/` | kurumsal web tasarım ajansı | Web/UX satın alma ve kapsam niyetini sahiplenmek |
| `/hizmetler/e-ticaret/` | e-ticaret sitesi tasarımı ve geliştirme | Katalogdan sipariş operasyonuna ticari kapsamı anlatmak |
| `/hizmetler/ozel-yazilim/` | özel yazılım geliştirme ve otomasyon | Rol, iş akışı, panel, veri ve entegrasyon kapsamını anlatmak |
| `/hizmetler/dijital-reklam/` | Meta reklam yönetimi ajansı | Gerçek hizmet kapsamı olan Meta reklam niyetini sahiplenmek |
| `/hizmetler/sosyal-medya-yonetimi/` | sosyal medya yönetimi ajansı | Organik içerik, yayın ve topluluk yönetimini Meta reklam kapsamından ayırmak |
| `/hizmetler/qr-menu/` | özel QR menü yazılımı | Hazır SaaS ürünü vaadi vermeden özel panel ihtiyacını anlatmak |
| `/hizmetler/rezervasyon-randevu/` | özel rezervasyon ve randevu sistemi | Kapasite ile personel/süre kurallarını ayrı ayrı açıklamak |
| `/hizmetler/qr-menu-rezervasyon/` | QR menü, rezervasyon, randevu farkları | Çakışan Service sayfası yerine karşılaştırma hub'ı olmak |
| `/blog/` | web, yazılım, reklam ve GEO rehberleri | Bilgi/karar niyetini hizmetlerden ayırmak |
| `/hakkimizda/` | Narvals Labs hakkında | Gerçek marka, ekip ve yöntem kanıtının merkezi olmak |
| `/iletisim/` | proje talebi | Doğrulanmış iletişim kanalıyla talep toplamak |

Yakın varyasyonlar için ayrı kopya sayfa açılmadı. Örneğin “web tasarım firması”,
“web tasarım şirketi” ve “web tasarım ajansı” aynı niyet içinde doğal biçimde
ele alınır. Şehir adı değiştirilmiş doorway sayfaları oluşturulmaz.

## Yayına hazır rehber ağı

| Rehber | Desteklediği karar/hizmet |
|---|---|
| Kurumsal web sitesi briefi nasıl hazırlanır? | Web tasarım kapsamı ve teklif hazırlığı |
| Web sitesi teknik SEO kontrol listesi | Yayın, taşıma, tarama ve indeks güvenliği |
| GEO nedir? Google AI aramalarında görünürlük | SEO/GEO beklentisi ve ölçümü |
| Google ve AI botları sitenizi nasıl tarar? | Bot ayrımı, RAG parçalama, Information Gain ve indeksleme |
| E-ticaret altyapısı nasıl seçilir? | Hazır, headless ve özel mimari kararı |
| Hazır yazılım mı, özel yazılım mı? | Yazılım satın alma karar matrisi |
| Meta Pixel ve Conversions API farkı | Meta ölçüm mimarisi ve sınırlar |
| Meta reklam bütçesi nasıl belirlenir? | Bütçe, ekonomik sınır, test ve durdurma planı |
| Meta reklam ajansı seçerken sorulacak sorular | Hesap sahipliği, ölçüm, kreatif ve çıkış ölçütleri |
| Sosyal medya yönetimi neleri kapsar? | Teslim, onay, yayın, topluluk ve raporlama sınırları |
| E-ticaret sitesi maliyeti nasıl hesaplanır? | Kurulum, lisans, entegrasyon ve toplam sahip olma yükü |
| QR menü mü PDF menü mü? | Menü formatı ve operasyon kararı |
| Rezervasyon ve randevu sistemi nasıl seçilir? | Kapasite/personel kuralı ve ürün seçimi |
| Web sitesi maliyeti nasıl hesaplanır? | Teklif kalemleri ve toplam sahip olma yükü |
| Web sitesi yaptırmadan önce: kapsam, teklif ve karar rehberi | Satın alma niyeti, kapsam ve teklif karşılaştırması |

Her rehberde doğrudan cevap, kapsam, karar tablosu veya kontrol listesi, sınırlar,
birincil kaynaklar, yayın tarihi, `BlogPosting` ve ilgili hizmet/içerik bağları
bulunur. Gerçek kişi bilgisi olmadığı için hayalî `Person` yazarı kullanılmadı;
yayıncı şimdilik Narvals Labs organizasyonudur.

## Uygulanan teknik katman

- Statik ana içerik; JavaScript beklemeden okunabilir HTML.
- Her sayfada benzersiz title/description, self-canonical, `tr` + `x-default`,
  OG/Twitter kartı, Schema.org varlık temelli GEO işaretlemesi (ülke, dil, hizmet alanı ve doğrulanmış iletişim), yazar, manifest ve RSS keşif bağlantısı.
- 31 canonical URL'yi tek manifestten yöneten build, sitemap ve SEO kontrolü;
  key/path/file/tarih ve ilgili içerik hedefleri için başlangıç doğrulamaları.
- URL başına gerçek içerik değişikliğine bağlı `lastmod`; build tarihi kullanılmaz.
- Wildcard `robots.txt` ile açık tarama ve tek sitemap bildirimi.
- `Organization` (İstanbul/Türkiye entity, `knowsAbout`, `areaServed`), `WebSite`, `WebPage`/`CollectionPage`/`AboutPage`/`ContactPage`, hizmet sayfalarında `Service` ve `hasOfferCatalog`, içeriklerde `BlogPosting`, SSS içeren tüm sayfalarda `FAQPage`, görünür yollar için standart 3 basamaklı `BreadcrumbList`.
- Karşılaştırma sayfasından çakışan `Service` şeması kaldırıldı.
- Ana sayfa hizmet listesi `ListItem(position, item)` modeline düzeltildi.
- Standart `llms.txt` ve kapsamlı RAG bilgi tabanı olan `llms-full.txt`; HTML her zaman yetkili kaynak.
- IndexNow anahtar dosyası ve yalnız değişen URL'leri gönderen komut.
- Vite ve tüm SEO komutlarında aynı `.env`/mode zincirini kullanan ortak
  `SITE_URL` çözümleyicisi; eksik açık origin ile production build koruması.
- Tüm slashsiz ve fiziksel `index.html` varyasyonlarını canonical slash URL'ye
  bağlayan 301 kuralları.
- HTML doğrulama, canonical/link/schema/RSS/sitemap/robots/llms-full, ortak production
  asset manifesti ve dist içindeki gerçek asset referanslarını tarayan denetim.
- Canlı sayfalarda meta/header `noindex`, robots tam engeli, 404 ve tüm canonical
  yönlendirme varyasyonlarını kontrol eden yayın sonrası audit.
- Reduced-motion tercihi için smooth scroll ve dekoratif hareketleri azaltan,
  tercih sayfa açıkken değiştiğinde de hareketi durduran katman; normal
  deneyimde anlamlı geri bildirim korunur.
- Ana sayfada kullanılmayan pressure-hero JS/CSS kaldırıldı; aşağı-katman
  animasyonları kullanıcı niyetine ertelendi; 96 px footer logosu, 520/720 px
  hero ve 480/720 px hizmet görsel varyantları eklendi. Son yerel mobil
  Lighthouse koşusunda ana sayfa 90/100/100/100, örnek yeni rehber
  99/100/100/100 aldı; laboratuvar sonucu saha verisi veya sıralama garantisi
  değildir.

## Gerçek otorite için eksik girdiler

Aşağıdakiler kodla uydurulamaz ve yayın sahibinden gelmelidir:

1. Yasal/ticari işletme adı ve gerçekten kullanılan marka adı.
2. Kurumsal e-posta, ülke kodlu telefon/WhatsApp.
3. Fiziksel ofis varsa doğrulanabilir adres; yoksa gerçek hizmet modeli/alanı.
4. Kurucu ve ekip üyelerinin izinli ad, rol, biyografi ve doğrulanabilir profilleri.
5. Gerçek sosyal profil URL'leri.
6. İzinli müşteri/proje ekranları, problem, kapsam, yöntem, dönem, ölçüm ve sınır.
7. Kaynak kodu, veri, hesap, hosting, bakım, yedekleme ve destek sahipliği.
8. Analitik/Search Console/Bing erişimi, ölçüm kimlikleri ve gerçek dönüşüm tanımı.
9. KVKK, çerez, form ve iletişim izni için hukukça doğrulanmış metinler.

Bu veri gelmeden `LocalBusiness`, adres, puan, review, telefon, kişi profili,
müşteri logosu, fiyat veya performans yüzdesi eklenmemelidir. İşletme tamamen
online ise sırf yerel görünürlük için Google Business Profile açılmamalıdır.

## Canlıya alma kapıları

### P0 — indeks öncesi

- Alan adı, DNS, hosting ve geçerli HTTPS tamamlandı; canlı denetim geçti.
- Güncel kaynak için `SITE_URL=https://narvals.com npm run build:production` ve deploy.
- HTTP → HTTPS, alternatif host → canonical host ve her dizindeki `index.html`
  → canonical slash URL için tek adımlı 301/308.
- Bilinmeyen URL için gerçek 404; soft-404 yok.
- Production'da ana sayfa, bir hizmet, blog, makale, `robots.txt`, sitemap ve
  RSS için `200` kontrolü.
- Gerçek iletişim bilgileri ve entity verisi.

### P1 — ilk hafta

- Google Search Console Domain property ve Bing Webmaster doğrulaması.
- Sitemap gönderimi; ana sayfa ve kritik hizmetlerde canlı URL testi.
- Analytics/consent kurulumu; `qualified_lead` gibi gerçek iş olayı.
- Sunucu/CDN loglarında Googlebot ve Bingbot yanıt dağılımı.
- Mobil gerçek cihaz, Lighthouse ve saha CWV başlangıç ölçümü.
- Yalnız yeni/değişen URL'ler için IndexNow bildirimi.

### P2 — ilk 90 gün

- En az üç izinli gerçek vaka çalışması.
- Gerçek ekip/yazar profilleri ve içerik inceleme sorumluluğu.
- QR/rezervasyon hedefi korunacaksa çalışır demo veya açıklamalı panel turu.
- Gerçek mention/bağlantı: müşteri ortak vakası, sektör yayını, podcast,
  teknoloji ortağı veya seçilmiş güvenilir ajans dizini.
- Search Console verisiyle sorgu–sayfa haritasının yeniden önceliklendirilmesi.

## 90 günlük deney ve ölçüm planı

| Dönem | İş | Başarı sinyali |
|---|---|---|
| Gün 0–7 | İndeks, redirect, log, CWV ve dönüşüm doğrulaması | Canonical URL'ler 200; kritik teknik hata yok |
| Gün 8–30 | Hizmet sorguları ve rehber impression'larını izleme | Doğru sorgu doğru URL'de görünmeye başlıyor |
| Gün 31–60 | Gerçek vaka/ekip kanıtı, iç link ve snippet iyileştirmesi | Markasız gösterim + nitelikli ziyaret artışı |
| Gün 61–90 | Başlık/cevap hipotezleri, içerik güncellemesi, mention çalışması | Nitelikli lead, marka sorgusu ve kaynak gösterilen URL artışı |

Temel rapor boyutları:

- Search Console: sayfa × sorgu × cihaz × ülke; marka/markasız ayrımı.
- Bing: sorgu, indeks ve erişim; hesapta varsa AI citation/grounding görünümü.
- Analitik: organik ve AI referral → nitelikli iletişim → satış sonucu.
- Aylık sabit prompt seti: kategori, karşılaştırma, maliyet, uygulama ve problem.
- Citation, marka mention'ı, referral ve lead ayrı metriklerdir.

Trafik tek başına başarı değildir. Doğru sayfaya gelen nitelikli talep, gerçek iş
sonucuna bağlanmalı; sıralama değişikliği yapılan işlem ve tarihle birlikte
yorumlanmalıdır.

## Yayın etiği ve kaçınılacaklar

- Satın alınmış bağlantı ağı, sahte yorum/puan, uydurma müşteri veya sonuç.
- Arama sorgusu ya da şehir adı değiştirilmiş seri kopya sayfalar.
- Doğrulanmamış “2026 fiyatı”, başarı yüzdesi, trafik veya dönüşüm iddiası.
- İçerik değişmeden yapay tarih güncellemesi.
- Google AI için özel schema/`llms.txt` hilesi veya her soru için ayrı ince sayfa.
- Meta reklam hizmeti verilirken Google Ads/SEO hizmeti veriliyormuş gibi geniş
  “dijital reklam ajansı” vaadi.

Birinciliğe giden güvenilir yol kısa değildir: canlı ve taranabilir alan adı →
net marka/entity → doğru sorgu–sayfa eşleşmesi → gerçek uzmanlık/vaka kanıtı →
düzenli ölçüm ve iyileştirme.
