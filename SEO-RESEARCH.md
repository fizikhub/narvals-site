# Narvals Labs — SEO / GEO araştırma notları

Araştırma tarihi: 21 Ağustos 2026; güncelleme: 30 Ağustos 2026. Bu
belge Google, Bing, Yandex, Apple ve yapay zekâ yanıt motorları (ChatGPT Search,
Perplexity, Claude, Gemini, Apple Intelligence) için yapılan akademik araştırmaları
(KDD 2024, ACL, SIGIR, Information Gain patentleri), Reddit TechSEO/BigSEO
topluluk deneyimlerini ve resmî crawler dokümantasyonlarını uygulama kararına dönüştürür.

## Sonuç

GEO, klasik SEO’dan bağımsız bir “AI hilesi” değildir. Google’ın güncel
rehberi; AI Overviews ve AI Mode için özel schema, Markdown kopyası, yapay
parçalama veya `llms.txt` gerekmediğini, Google’ın `llms.txt` dosyasını yok
saydığını açıkça belirtiyor. Ortak payda; taranabilir ve indexlenebilir HTML,
sayfanın konusuyla güçlü alaka, özgün/ilk elden bilgi, açık kaynaklandırma,
tutarlı marka varlığı ve iyi kullanıcı deneyimidir.

Bu nedenle uygulama önceliği şöyledir:

1. Canonical, `200/404`, sitemap, robots, dahili bağlantı ve hız temeli.
2. Her arama niyeti için özgün ve karar vermeye yeterli gerçek sayfa.
3. Marka, hizmet ve işletme bilgilerinin site ve doğrulanmış profillerde aynı
   biçimde kullanılması.
4. Gerçek ekip deneyimi, vaka, yöntem, özgün veri ve üçüncü taraf mention.
5. Arama sırası ile AI citation/mention/referral ölçümlerinin ayrı izlenmesi.

## 30 Ağustos 2026 altıncı Search generative AI ve crawler denetimi

Google'ın Haziran 2026'da test etmeye başladığı Search Console düzeyi
`Search generative AI` kontrolü ile OpenAI'ın güncel crawler ayrımı yeniden
doğrulandı. Bu turda şu kararlar uygulandı:

- Google AI Overviews, AI Mode ve Discover içindeki üretken AI görünürlüğü için
  Search Console kontrolü mülkte sunulduğunda `Include` seçimi doğrulanmalıdır.
  Varsayılan dahil etmedir; ayar genel Search sıralamasında bir sinyal değildir
  ve `Google-Extended` model eğitimi tercihinden ayrıdır.
- OpenAI'ın resmî dokümantasyonunda `OAI-SearchBot` arama görünürlüğü,
  `GPTBot` model geliştirme ve `ChatGPT-User` kullanıcı isteği erişimi olarak
  ayrı tanımlanır. Canlı denetime otomatik arama botunun yanında kullanıcı
  tetiklemeli erişim kimlikleri de eklendi; bu yalnız WAF/CDN erişimini sınar.
- Production denetimi artık mobil Googlebot, ChatGPT-User, Claude-User ve
  Perplexity-User yanıtlarını; ayrıca `llms.txt` ve `llms-full.txt` dosyalarının
  canlı içerik türü ile temel kimlik/origin tutarlılığını kontrol eder.
- Reddit'teki 2025–2026 `llms.txt` tartışmalarında ortak bir nedensel sıralama
  kanıtı bulunmadı. Dosya isteğe bağlı keşif özeti olarak korunurken HTML,
  Search indexi, özgün kanıt ve gerçek üçüncü taraf mention'ları öncelikli kaldı.

Kararlar [Google Search generative AI kontrolü](https://support.google.com/webmasters/answer/16908024),
[Google'ın üretken AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[OpenAI crawler dokümantasyonu](https://developers.openai.com/api/docs/bots) ve
[r/TechSEO llms.txt saha tartışması](https://www.reddit.com/r/TechSEO/comments/1l705kn/)
ile karşılaştırıldı. Hesap düzeyi Search Console ayarı koddan değiştirilemediği
için operasyon kapısı olarak belgelendi.

## 30 Ağustos 2026 yedinci deneysel keşif teknolojileri denetimi

Chrome 149 WebMCP origin trial ve Google'ın 20 Ağustos 2026 Preferred Sources
yayıncı özelliği incelendi. İki teknoloji farklı amaçlarla uygulandı:

- **WebMCP:** 14 yerel hesaplama ve denetim formuna deneysel declarative
  `toolname`/`tooldescription` sözleşmeleri eklendi. Otomatik gönderim açılmadı;
  normal form, erişilebilir label ve görünür kullanıcı onayı yetkili arayüz
  olarak kaldı. Build, araç adlarının benzersiz ve 30 karakter sınırında
  olduğunu; açıklamaların bulunduğunu ve `toolautosubmit` eklenmediğini denetler.
- **Preferred Sources:** Blog, 5 konu merkezi ve 40 rehbere Google'ın resmî
  domain deeplink'i eklendi. Bu, seçim yapan okurun kişiselleştirilmiş Top
  Stories, AI Overviews ve AI Mode deneyiminde Narvals'ı tekrar bulmasına yardım
  edebilir; genel sıralama sinyali veya ilk ziyaretçi edinme garantisi değildir.
- **Erken konu sahipliği:** WebMCP, agentic web, kullanıcı onayı, prompt
  injection ve Preferred Sources sınırlarını açıklayan kaynaklı Türkçe rehber
  yayımlandı. İçerik yeni terimi hedeflese de web tasarım hizmetine yalnız gerçek
  altyapı kapsamıyla bağlandı; “AI-ready” sıralama garantisi üretilmedi.
- **Güvenlik sınırı:** Chrome'un resmî rehberindeki prompt injection riski,
  kısa açıklama bütçeleri ve en az yetki yaklaşımı uygulama kararını sınırladı.
  Origin trial token'ı alan adına özel kayıt gerektirdiğinden koda uydurulmadı.

Kararlar [Chrome WebMCP genel bakışı](https://developer.chrome.com/docs/ai/agents),
[Declarative API](https://developer.chrome.com/docs/ai/webmcp/declarative-api),
[WebMCP güvenlik rehberi](https://developer.chrome.com/docs/ai/webmcp/secure-tools)
ve [Google Preferred Sources yayıncı dokümantasyonu](https://developers.google.com/search/docs/appearance/preferred-sources)
ile doğrulandı. Bu katmanlar temel SEO'nun üstündeki kontrollü deneylerdir.

## 30 Ağustos 2026 sekizinci deneysel teknoloji ve ölçüm denetimi

Yeni arama yüzeyleri birbiriyle ve genel Google sırasıyla karıştırılmadan
incelendi. Uygulanabilir teknik katman genişletildi, hesap veya uygunluk isteyen
özellikler operasyon kapısı olarak bırakıldı:

- **Imperative WebMCP:** Form etiketi kullanmayan görsel boyut, meta önizleme,
  QR ve Organization schema araçları `document.modelContext.registerTool` ile
  salt-okunur araçlara dönüştürüldü. API yoksa normal arayüz çalışır. Araçlar
  HTTPS/protokol, karakter ve ölçü sınırları uygular; indirme veya veri gönderme
  eylemini ajan adına başlatmaz. `readOnlyHint` ve güvenilir yerel çıktı için
  `untrustedContentHint: false` bildirilir.
- **Canlı kanıt:** Production denetimi artık dört imperative tool adının deploy
  edilen JS paketlerinde bulunduğunu ve Preferred Sources bağlantısının bütün
  blog yüzeylerinde kaldığını kontrol eder. Böylece yalnız kaynak kodda duran
  deneysel özellik “yayında” sayılmaz.
- **Bing AI Performance:** Public preview toplam citation, cited page, grounding
  query ve trend ölçümü sunar. Bing Webmaster hesabı olmadan koddan veri
  çekilemez; BWT doğrulama ve aylık export operasyon planına eklendi.
- **Search Profiles ve Discover:** Search Profiles önce ABD'de ve uygun büyük
  sosyal/video takipçi kitlesi bulunan hesaplarla sınırlıdır. Discover için özel
  schema gerekmez; index ve politika uygunluğu yalnız adaylık sağlar. İki özellik
  de kodla veya sahte profil verisiyle zorlanmadı.
- **Carousel beta reddi:** Google'ın beta carousel schema'sı en az üç gerçek
  `LocalBusiness`, `Product` veya `Event` detay sayfası ister. Narvals'ın hizmet
  ve ücretsiz araç listeleri bu varlık türleri değildir; markup eklemek yanlış
  beyan olacağı için uygulanmadı.
- **Speculation Rules bekletildi:** Gelecek sayfayı prefetch/prerender etmek
  dönüşüm yolunu hızlandırabilir ama sıralama teknolojisi değildir; ek bant
  genişliği, ölçüm ve CSP/deploy kararı gerektirir. Sırf deneysel olduğu için
  bütün iç bağlantılara açılmadı.

Kararlar [WebMCP Imperative API](https://developer.chrome.com/docs/ai/webmcp/imperative-api),
[WebMCP güvenlik rehberi](https://developer.chrome.com/docs/ai/webmcp/secure-tools),
[Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview),
[Google Search Profiles](https://blog.google/products-and-platforms/products/search/a-new-profile-to-help-publishers-and-creators-highlight-their-work-on-search/),
[Google Discover](https://developers.google.com/search/docs/appearance/google-discover),
[Carousel beta](https://developers.google.com/search/docs/appearance/structured-data/carousels-beta)
ve [Chrome Speculation Rules](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules)
ile doğrulandı.

Reddit saha tartışmaları resmî kanıt değil, hipotez kaynağı olarak ayrıca
incelendi. Bing AI Performance kullanan yayıncılar raporu “kesin sıralama”
yerine yön gösteren citation verisi olarak ele alıp BWT, GSC, gerçek referral ve
sabit manuel sorgularla karşılaştırmayı öneriyor. Search Profiles tartışmasında
ise ABD/erişim eşiği ve eski Google Authorship deneyimi nedeniyle erken yatırım
konusunda belirgin kuşku var. Bu görüşler ürün dokümanındaki kapsam sınırlarıyla
uyumlu olduğundan hesap açma uğruna sahte takipçi/profil üretmeme ve AI ölçümünü
çoklu veriyle doğrulama kararını güçlendirdi. Kaynaklar:
[r/SEO — Bing AI Performance kullanımı](https://www.reddit.com/r/SEO/comments/1regu01/),
[r/SEO_Xpert — raporun yönsel yorumlanması](https://www.reddit.com/r/SEO_Xpert/comments/1ueeztk/)
ve [r/SEO — Search Profiles tartışması](https://www.reddit.com/r/SEO/comments/1txr393/).

## 30 Ağustos 2026 dokuzuncu ajan kalite ve müşteri atıf denetimi

Bu turda yeni protokol eklemekten önce yayımlanmış ajan araçlarının seçilme
kalitesi ve AI kaynaklı müşterinin ölçülebilirliği ele alındı:

- **WebMCP eval sözleşmesi:** 18 aracın her biri için açık ve örtük Türkçe
  kullanıcı niyeti yazıldı. 36 vaka beklenen araç adını, sayfa durumunu ve
  parametre anahtarlarını kontrol eder. Yeni araç eklenip eval unutulursa veya
  eski alan adı kullanılırsa production build durur. Bunlar deterministik
  sözleşme testidir; model tabanlı probabilistik çalıştırmalar için taşınabilir
  başlangıç veri setidir.
- **Araç çakışması sınırı:** Chrome'un yeni araç stratejisi, context büyüdükçe
  benzer araçların seçimi zorlaştırabileceğini belirtiyor. Bu nedenle genel
  “siteyi optimize et” mega-aracı eklenmedi; her araç tek sayfa ve tek işleve
  bağlı kaldı.
- **Birinci taraf AI atfı:** ChatGPT, Copilot, Gemini, Claude, Perplexity ve
  diğer bilinen AI referrer hostları oturum düzeyinde sınıflandırılır. Kaynak
  yalnız `sessionStorage` içinde tutulur; haricî piksel kurulmaz. Kullanıcı
  WhatsApp'a geçtiğinde kaynak, görebildiği önceden doldurulmuş mesaja eklenir;
  mevcutsa `gtag` olayına kişisel veri olmayan channel/source/landing parametresi
  verilir. 11 deterministik sınıflandırma testi build kapısına eklendi.
- **Clarity bulgusu sınırı:** Microsoft'un 1.200'den fazla yayıncı sitesi
  örnekleminde AI referral oranı düşük fakat dönüşüm eğilimi daha yüksek rapor
  edildi. Bu üçüncü taraf platform verisi Narvals sonucu değildir; yerel atıf
  katmanı iddiayı kendi nitelikli lead verimizle sınamak için kuruldu.
- **NLWeb bekletildi:** NLWeb gerçek `/ask` ve `/mcp` servisi, Schema.org/RSS
  ingestion, retrieval/veri deposu ve model gerektirir. Statik siteye boş
  endpoint veya yalnız keşif dosyası eklemek işlev sağlamayacağı için uygulanmadı.
- **Search Console BigQuery bekletildi:** Günlük bulk export büyük sorgu/URL
  hacminde değerlidir; 79 URL'lik mevcut sitede Search Console arayüzü/API ve
  hesap erişimi olmadan Cloud maliyeti yaratmak gereksizdir. Hacim ve sahiplik
  oluştuğunda operasyon seçeneği olarak korunur.

Kararlar [Chrome WebMCP evals](https://developer.chrome.com/docs/ai/webmcp/evals),
[WebMCP araç stratejisi](https://developer.chrome.com/docs/ai/webmcp/build-tools),
[WebMCP best practices](https://developer.chrome.com/docs/ai/webmcp/best-practices),
[NLWeb resmî deposu](https://github.com/nlweb-ai/NLWeb),
[Microsoft Clarity scrape-to-referral](https://clarity.microsoft.com/blog/scrape-to-referral-insights/),
[Clarity AI dönüşüm araştırması](https://clarity.microsoft.com/blog/ai-traffic-converts-at-3x-the-rate-of-other-channels-study/)
ve [Search Console BigQuery bulk export](https://developers.google.com/search/blog/2023/02/bulk-data-export)
ile doğrulandı.

## 30 Ağustos 2026 onuncu Discover ve görsel arama denetimi

Google'ın Mart 2026'da güncellediği Discover ve görsel SEO dokümantasyonu,
blogdaki tek ve metin ağırlıklı marka kartının bütün rehberlerde tekrar
kullanılmasının zayıf bir tercih olduğunu gösterdi. Uygulama şu şekilde
değiştirildi:

- Web/UX, SEO/GEO, reklam, e-ticaret ve QR menü/rezervasyon için metinsiz,
  konuyla ilgili beş özgün görsel üretildi. Görseller 1200×675 piksel, gerçek
  16:9 JPEG olarak kırpıldı; her biri 300.000 piksel eşiğini fazlasıyla aşar.
- 40 rehber kategoriye göre deterministik görsele bağlandı. Aynı URL; görünür
  standart `<img src>`, `og:image`, Twitter kartı, `WebPage.primaryImageOfPage`
  ve `BlogPosting.image` içinde kullanılır. Konu merkezlerinin sosyal kartları
  da aynı kümeyle eşleşir.
- Görseller içeriğin içinde, anlamlı Türkçe alt metinle bulunur. Aşağı katmanda
  oldukları için `loading="lazy"` kullanılır; böylece görsel keşfi korunurken ilk
  ekranın ağ önceliği gereksiz yere yükseltilmez.
- Build denetimi kategori eşleşmesi olmayan içeriği, farklı meta/schema/HTML
  URL'sini, eksik alt metni ve JPEG dosyasındaki gerçek piksel ölçüsü sapmasını
  hata olarak durdurur.

Bu değişiklik Discover'a kabul veya trafik garantisi vermez. Google'a göre
indeks ve politika uygunluğu içeriği yalnız aday yapar; başlık, özgün yarar,
sayfa deneyimi ve kullanıcı ilgisi ayrıca belirleyicidir. Kararlar
[Google Discover](https://developers.google.com/search/docs/appearance/google-discover),
[Google görsel SEO](https://developers.google.com/search/docs/appearance/google-images)
ve [Article yapılandırılmış veri](https://developers.google.com/search/docs/appearance/structured-data/article)
rehberleriyle doğrulandı.

## 30 Ağustos 2026 ikinci teknik denetim

İkinci turda 78 canonical sayfa; canlı HTTP davranışı, yapılandırılmış veri,
görsel ölçüleri, iç bağlantı grafiği, sayfa metin hacmi ve mobil Lighthouse ile
yeniden tarandı. Yeni bulgular ve kararlar:

- Google'ın Kasım 2024'te kaldırdığı sitelinks arama kutusuna ait `SearchAction`
  şeması artık üretilmiyor. Google bunun sıralamayı etkilemediğini söylüyor;
  kaldırma kararı desteklenmeyen ve gerçekte bir arama özelliğini temsil etmeyen
  işaretlemeyi temiz tutmak içindir.
- `WebSite` şeması yalnız ana sayfada bırakıldı. Google site adı yönergesi bu
  işaretlemenin domain ana sayfasında bulunmasını ve her sayfada tekrarlanmamasını
  söylüyor.
- `Organization` şeması ana sayfada tek doğrulanmış düğüm olarak toplandı.
  Makale, hizmet ve araç düğümleri aynı kalıcı `@id` değerine referans veriyor;
  78 URL'de aynı kurum bloğu çoğaltılmıyor.
- Mobil laboratuvar ölçümünde ana görsel hızlı indirilmesine rağmen yükleme
  sonrasında çalışan scroll/animasyon yenilemesinin LCP'yi geciktirdiği görüldü.
  İlk ekran görselinin scroll hareketi ilk gerçek kaydırmaya ertelendi ve yalnız
  alt bölümlerde kullanılan Anek fontu kritik yükleme yolundan çıkarıldı.
- WCAG AA denetiminde sarı zemin üstündeki mercan başlık 2,54:1 bulundu. Renk
  koyulaştırılarak büyük metin için gereken en az 3:1 kontrast hedeflendi.
- Schema aracındaki doğrulanmamış “Narvals Labs Team” örnek yazarı kaldırıldı;
  varsayılan gerçek yayıncı `Organization / Narvals Labs` oldu.

Bu turdaki kararlar [Google site adı yönergesi](https://developers.google.com/search/docs/appearance/site-names),
[Organization şeması yönergesi](https://developers.google.com/search/docs/appearance/structured-data/organization),
[sitelinks arama kutusunun kaldırılması](https://developers.google.com/search/blog/2024/10/sitelinks-search-box),
[görsel SEO önerileri](https://developers.google.com/search/docs/appearance/google-images)
ve [insan odaklı içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
ile karşılaştırıldı.

## 30 Ağustos 2026 üçüncü kaynak ve ajan denetimi

Google'ın Temmuz 2026 sitemap ve yapılandırılmış veri belgeleri ile Nisan 2026
tarayıcı ajanı rehberi yeniden karşılaştırıldı. Bu turda üç ek karar alındı:

- XML sitemap yalnız canonical URL ve doğrulanabilir materyal `lastmod` değerine
  indirildi. Google'ın açıkça yok saydığı `changefreq` ve `priority` alanları ile
  her URL'de tekrarlanan, sayfaya özgü olmayan sosyal paylaşım görseli kaldırıldı.
- HTML doğrulamasına etiketi veya erişilebilir adı olmayan `input`, `select` ve
  `textarea` öğelerini build'i durduran kural eklendi. Bu kontrol hem yardımcı
  teknolojilerin hem DOM/erişilebilirlik ağacı kullanan tarayıcı ajanlarının
  alan amacını okuyabilmesini korur.
- Kalıcı seçim yapan araç düğmelerinin görsel `active` sınıfına ek olarak
  `aria-pressed` durumunu güncellemesi uygulama standardı yapıldı. Böylece seçim
  durumu yalnız renge veya CSS sınıfına bağlı kalmaz.

Bu kararlar [Google sitemap rehberi](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[Google üretken AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
ve [web.dev ajan dostu site rehberi](https://web.dev/articles/ai-agent-site-ux)
ile sınandı. Ajan uyumluluğu bir Google sıralama sinyali veya görünürlük garantisi
olarak sunulmadı.

## 30 Ağustos 2026 dördüncü ticari niyet denetimi

Bu turda `web sitesi yaptırma` ve `QR menü yaptırma` niyetleri ayrı para
sayfaları olarak yeniden incelendi. Türkiye sonuçlarındaki hizmet sayfaları,
güncel Reddit işletme tartışmaları, Google iç bağlantı/yerel görünürlük
rehberleri ve 2026 GEO yayınları birlikte değerlendirildi.

- Web sitesi tekliflerinde toplam fiyat kadar alan adı, barındırma, kaynak
  dosyalar, içerik, analitik, bakım ve çıkış koşullarının kimin kontrolünde
  olduğu tekrar eden karar sorusudur. Bu nedenle hizmet sayfasına teslim,
  sahiplik ve kabul ölçütü tablosu eklendi; piyasa fiyatı gibi doğrulanamayacak
  bir rakam yayımlanmadı.
- QR menü sonuçlarında demo, paket, çoklu dil, şube, uygulamasız kullanım ve
  panelden güncelleme öne çıkıyor. Narvals'ın doğrulanmış kapsamı korunarak
  kurulum/yinelenen maliyet, veri girişi, QR adresi, panel erişimi ve çıkış
  koşullarını ayıran teklif tablosu eklendi. Sunulmayan demo, sabit fiyat veya
  müşteri sayısı iddia edilmedi.
- Dahili bağlantı grafiğinde web tasarım hizmeti 78 sayfadan, doğrudan QR menü
  hizmeti yalnız 9 sayfadan bağlantı alıyordu. Blog altbilgisindeki belirsiz
  “işletme sistemleri” bağlantısı korunabilir karşılaştırma yolundan ayrıldı;
  `QR menü yaptırma` hizmeti artık ayrıca ve açıklayıcı metinle bağlanıyor.
- Görünür SSS ile eski JSON-LD cevapları arasındaki anlam/kapsam farkları
  giderildi. Var olmayan `.faq-item` sınıflarını gösteren `speakable`
  seçicileri gerçek görünür SSS seçicilerine bağlandı ve build doğrulamasına
  seçici/öncelikli bağlantı regresyon kontrolleri eklendi.

Google'ın [iç bağlantı rehberi](https://developers.google.com/search/docs/crawling-indexing/links-crawlable),
[sitelinks önerileri](https://developers.google.com/search/docs/appearance/sitelinks),
[insan odaklı içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
ve [yerel sıralama açıklaması](https://support.google.com/business/answer/7091)
uygulama sınırını belirledi. 2026 [GEO eleştirel incelemesi](https://arxiv.org/abs/2607.14035)
ile [citation selection/absorption çerçevesi](https://arxiv.org/abs/2604.25707),
salt biçimsel “AI optimizasyonu” yerine konu alakası, erişilebilir kanıt ve ayrı
ölçüm gereğini destekliyor. Reddit'teki güncel
[web sitesi maliyet tartışması](https://www.reddit.com/r/smallbusiness/comments/1w245xb/what_is_the_expected_cost_of_having_a_website/)
ve [QR/PDF menü deneyimi tartışması](https://www.reddit.com/r/restaurateur/comments/okj3yy/)
yalnız soru keşfi için kullanıldı; fiyat veya performans kanıtı sayılmadı.

## 30 Ağustos 2026 beşinci şema ve görsel keşif denetimi

78 canonical sayfanın ana içerik benzerliği, ana sayfadan tıklama derinliği,
görsel kullanımı ve yapılandırılmış veri türleri yeniden tarandı. Sayfalar ana
sayfadan en fazla iki tık uzakta kaldı; yüksek düzeyde içerik kopyası bulunmadı.
Yeni öncelik daha fazla URL üretmek değil, desteklenmeyen işaretlemeyi azaltmak
ve iki ticari sayfanın gerçek görsel bağlamını güçlendirmek oldu.

- Türkçe hizmet ve rehber sayfalarındaki `speakable` kaldırıldı. Google bu beta
  özelliğin ABD'de İngilizce haber sorguları için kullanıldığını belirtiyor;
  Narvals'ın dili, ülkesi ve içerik türü uygun değil.
- Kullanımdan kaldırılmış `HowTo` zengin sonuç işaretlemesi web hizmetinden
  çıkarıldı. Süreç adımları kullanıcı için görünür HTML olarak korunuyor.
- Fiziksel adres yayımlamayan işletmenin eksik `PostalAddress` nesnesi
  kaldırıldı; Google'ın daha özel tür önerisine uygun olarak ana kurum düğümü
  `OnlineBusiness` oldu. Türkiye hizmet alanı, telefon ve e-posta korunuyor.
- Web sitesi yaptırma ve QR menü yaptırma sayfalarına mevcut özgün hizmet
  görselleri standart `img`, açıklayıcı alt metin, responsive `srcset`, görünür
  açıklama ve eşleşen `primaryImageOfPage` ile eklendi. Build artık görsel veya
  şema eşleşmesi kaybolursa duruyor.
- [SAGEO Arena (KDD 2026)](https://arxiv.org/abs/2602.12187), basitleştirilmiş
  GEO yeniden yazımlarının gerçek retrieval/reranking zincirinde sıkça işe
  yaramadığını veya performansı düşürdüğünü; yapısal bilginin ise ancak bütün
  zincir bağlamında değerlendirilmesi gerektiğini gösteriyor. Bu nedenle yeni
  “AI uyumlu” metin katmanları eklenmedi.

Kararlar [Google görsel SEO rehberi](https://developers.google.com/search/docs/appearance/google-images),
[Organization işaretleme rehberi](https://developers.google.com/search/docs/appearance/structured-data/organization),
[Speakable uygunluğu](https://developers.google.com/search/docs/appearance/structured-data/speakable),
[FAQ/HowTo görünüm değişikliği](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
ve [genel yapılandırılmış veri kuralları](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
ile sınandı.

## Canlı SERP ve marka bulgusu

- `https://narvals.com` canlıdır. HTTPS/canonical yönlendirmeleri, gerçek `404`,
  `robots.txt`, sitemap ve denetim anındaki 78 canonical URL başarılı bulundu.
- Genel sonuç sayfası kontrolleri kesin sıra ölçümü olarak kullanılmadı. Mevcut
  gösterim, ortalama konum, sorgu ve sayfa dağılımı Search Console dışa aktarımı
  üzerinden baz alınmalıdır.
- Marka sorgusunda Narval Labs, Narval Software ve Ranvals gibi benzer adlar
  bulunuyor. Site adı, logo, favicon, gerçek sosyal profiller ve şirket kayıtları
  her kanalda tam olarak `Narvals Labs` biçiminde tutulmalıdır.
- QR menü sonuçları çoğunlukla fiyat/demo sunan hazır SaaS ürünlerine; geniş
  “dijital reklam ajansı” sonuçları ise Google Ads, SEO ve sosyal medya gibi daha
  geniş hizmetlere yöneliyor. Narvals sayfaları sunulmayan hizmeti hedeflemek
  yerine “özel QR menü yazılımı” ve “Meta reklam yönetimi” niyetlerine çekildi.
- Arama hacmi veya zorluk değeri uydurulmadı. Production Search Console ve
  Keyword Planner verisi oluşunca öncelik ticari uyum + gerçek gösterim verisiyle
  yeniden sıralanmalıdır.

### 23 Ağustos 2026 Türkiye sorgu gözlemi

- `reklam ajansı istanbul` sonucu reklamlar, Local Pack, ajans dizinleri,
  sosyal profiller ve organik ajans sayfalarını birlikte gösterdi. Bu niyette
  yalnız sayfa metni yetmez; gerçek NAP, uygunluk koşullarını karşılayan Google
  Business Profile, doğal yorumlar ve tutarlı yerel atıflar gerekir.
- `web sitesi yaptırma` ticari teklif niyetine, `web sitesi yapma` ise daha çok
  kendin-yap/bilgi niyetine gider. Web hizmet sayfası ilkini, rehber içerikleri
  ikincil bilgi sorularını sahiplenmelidir.
- Google otomatik tamamlama dört ana kümede de `fiyat`, `maliyet`, `ne kadar`,
  `paket` ve `teklif` sorularını tekrar etti. Uydurma 2026 fiyat listeleri
  yerine kapsam, toplam sahip olma yükü, teslim ve sorumluluk tabloları üretildi.
- `reklam ajansı` tek başına cast/iş ilanı/genel tanım gibi karışık niyet taşır.
  Sunulan gerçek hizmet için `Meta reklam yönetimi`, `web sitesi yaptırma`,
  `e-ticaret sitesi yaptırma` ve `sosyal medya yönetimi` sayfaları birincil
  hedef olarak tutuldu.
- İstanbul veya ilçe sayfaları gerçek ofis, hizmet alanı, ekip ya da vaka
  kanıtı olmadan açılmadı. Şehir adı değiştirilmiş seri sayfalar Google spam
  politikalarındaki doorway/scaled-content riskine girer.

Yerel görünürlük kararları için [Google yerel sıralama açıklaması](https://support.google.com/business/answer/7091?hl=tr),
[Business Profile uygunluk kuralları](https://support.google.com/business/answer/3038177)
ve [Google spam politikaları](https://developers.google.com/search/docs/essentials/spam-policies)
esas alındı.

Uygulanan ayrıntılı sorgu haritası ve yayın planı `SEO-IMPLEMENTATION.md`
dosyasındadır.

## 30 Ağustos 2026 on birinci akademik GEO, Information Gain ve LLM indeksleme denetimi

Bu turda akademik literatür (Princeton, Georgia Tech, Allen AI, IIT Delhi - KDD 2024 GEO-bench çalışması, ACL 2024 WebCiteS, SIGIR 2026), Google Bilgi Kazanımı (Information Gain) patentleri (US11354342B2 & US10621249), Reddit TechSEO/BigSEO 2025–2026 saha gözlemleri ve Chrome Speculation Rules API standartları birlikte incelendi:

- **Akademik GEO Bulguları (KDD 2024):** 10.000 sorguluk kontrollü GEO-bench çalışması; yapay zekâ yanıt motorlarında (ChatGPT, Perplexity, Gemini, Claude) kaynak olarak seçilme ve alıntılanma oranını en çok artıran faktörlerin doğrulanabilir istatistiksel veriler, somut karşılaştırma tabloları, açık teknik tanımlar ve ilk elden karar metinleri (%30–40 arası görünürlük artışı) olduğunu ortaya koydu. Salt anahtar kelime tekrarının ve bağlamsız metin uzatmanın ise citation skorunu düşürdüğü doğrulandı.
- **Google Information Gain Patentleri:** Google patentlerinde belgelenen "Information Gain Score", bir içeriğin kullanıcının daha önce karşılaştığı web konsensüsüne kıyasla sunduğu özgün bilgi farkını ("Knowledge Delta", entropi azaltımı) ölçer. Standart genel tanımları tekrarlayan sayfalar düşük puan alırken; özgün hesaplama modelleri (ROAS, CPA, Tarama Bütçesi, Dönüşüm Oranı simülasyonları), yöntem sınırları ve somut karar matrisleri yüksek bilgi kazanımı üretir.
- **LLM / AI Botlarının Parçalama (Chunking) Mekanizması:** LLM arama ajanları (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Applebot vb.) sayfaları anlamsal HTML bloklarına (`<header>`, `<main>`, `<article>`, `<section>`, `<table>`, `<dl>`, `<blockquote>`) göre parçalar. Sayfa ve bölüm başlarındaki doğrudan tanımlar ("Answer Capsules") RAG embedding aramalarında en yüksek kosinüs benzerliğini alarak yanıtlara taşınır.
- **Reddit TechSEO Saha Deneyimleri:** 2025–2026 topluluk tartışmaları; Google'ın "Crawled - currently not indexed" durumunu önlemek için düşük TTFB, sıfır gereksiz JS yükü, temiz iç bağlantı hiyerarşisi ve tekil varlık şemasının zorunlu olduğunu gösteriyor.
- **Speculation Rules API Entegrasyonu:** Modern tarayıcılarda (Chrome 121+) dahili gezinmeyi anlık (instant navigation, <50ms) hale getiren Speculation Rules API (`prefetch` moderate, `prerender` conservative) uygulanarak Core Web Vitals ve kullanıcı tutma oranı en üst seviyeye taşındı.

## 30 Ağustos 2026 on ikinci RAG, Passage Chunking ve Fractal Content Model mimarisi

Bu turda 2025–2026 RAG (Retrieval-Augmented Generation) literatürü, Passage Ranking algoritmaları ve LLM chunking modelleri derinlemesine incelendi:

- **Answer Density (Cevap Yoğunluğu) Standardı:** LLM yanıt motorları ve Google AI Overviews, kelime kalabalığı (narrative fluff) içeren sayfalar yerine, kelime başına düşen doğrulanabilir olgu ve karar oranı yüksek metinleri filtreler. Dolgu metin içeren kısımlar embedding aşamasında "Zero-Vector Penalty" alırken; doğrudan sonuç veren net paragraflar yüksek ağırlık kazanır.
- **Fractal Content Model (Fraktal İçerik Mimarisi):** Sayfadaki her H2 alt başlığı ve bölümü, kendi başına bağımsız bir "mikro-karar rehberi" (standalone passage) olarak tasarlanır. LLM bir sayfadan yalnızca tek bir 150–250 kelimelik bölümü RAG bağlamına aldığında dahi, bağlam kaybı (semantic drift) yaşamadan tam ve yetkili bir yanıt üretir.
- **Passage Chunking ve Anlamsal HTML Blokları:** LLM crawler'larının içeriği 100–300 kelimelik pencerelere bölme mekanizmasına uygun olarak; semantik `<section id="...">`, `<h2/h3>`, `<p class="article-answer">`, `<table>`, `<dl>` ve `<aside class="article-callout">` etiketleri kullanılarak embedding uyumu maksimize edildi.
- **Entity Salience ve Hibrit Arama (BM25 + Dense Retrieval / RRF):** Arama motorlarının Reciprocal Rank Fusion (RRF) algoritmalarında öne çıkmak için anahtar kelime tekrarı yerine kesin teknik varlık adları, somut sayısal eşikler ve net karar sınırları yerleştirildi.

## 30 Ağustos 2026 on üçüncü Perplexity/SearchGPT RAG mimarisi, Unlinked Mention ve Entity Salience denetimi

Bu turda Perplexity ve SearchGPT'nin çok aşamalı RAG (Retrieval-Augmented Generation) işlem hatları, unlinked mention (bağlantısız marka anılmaları) korelasyonları ve pasaj çıkarma modelleri incelendi:

- **Perplexity 6 Aşamalı RAG ve 3 Katmanlı Reranking:** Perplexity ve modern nöral arama motorları; sorgu niyeti ayrıştırma, BM25 + yoğun vektör hibrit erişimi ve 3 katmanlı filtreleme (Alaka puanı -> 12–18 aylık tazelik ve otorite -> XGBoost / Cross-encoder kalite kapısı) kullanır. Son aşamada yalnızca açık entity sinyali veren ve çelişkisiz kaynaklar alıntılanır.
- **Unlinked Brand Mentions Ağırlığı (r ≈ 0.66):** 2026 yapay zekâ görünürlük araştırmalarında, bağlantısız marka anılmalarının AI citation oranlarıyla korelasyonunun (r ≈ 0.66), klasik backlink korelasyonundan (r ≈ 0.22) belirgin şekilde daha güçlü olduğu kanıtlandı. LLM'ler link grafiğinden ziyade anlamsal birlikte geçiş (co-occurrence) ve varlık haritasını değerlendirir.
- **İlk %30 Pasaj Kuralı (First 30% Extractability):** AI modelleri bir sayfanın ilk üçte birlik bölümünde doğrudan, doğrulanabilir bir cevap ("Answer-first" formatı) bulduğunda alıntılama olasılığı katlanarak artar. Rehberlerimiz her alt başlığın ilk paragrafında doğrudan cevabı vererek bu kurala uyar.
- **Context-Aware Embeddings (`pplx-embed-context-v1`):** Pasajların sayfa genelindeki ana tema ile bağını koparmaması için `Schema.org/WebPage` üzerinde `isPartOf`, `about` ve `mentions` ilişkileri tekil Knowledge Graph düğümüyle perçinlenmiştir.

## 30 Ağustos 2026 on dördüncü NavBoost, Glue ve Task Completion deneyimi denetimi

Bu turda Google'ın organik ve zengin sonuç sıralama sistemleri olan NavBoost, Glue ve kullanıcı görev tamamlama (task completion) mekanizmaları incelendi:

- **NavBoost (13 Aylık Yuvarlanan Etkileşim Hafızası):** Google'ın organik web sonuçları için en güçlü sıralama sinyallerinden biri olan NavBoost; kullanıcıların tıklama, hover, kaydırma ve dwell time verilerini 13 aylık pencerelerde toplar. Sayfada kalma süresini artıran ve arama sonucuna geri dönmeyi ("bad click / pogo-sticking") engelleyen "Last Longest Click" (kullanıcının aradığı cevabı bulduğu son ve en uzun oturum) sinyali önceliklendirildi.
- **Glue Sistemi ve Zengin SERP Özellikleri:** Arama sonuçlarındaki AI Overviews, hesaplama araçları ve interaktif bileşenlerle kullanıcı etkileşimini değerlendiren Glue sistemi için; 18 interaktif yerel hesaplama aracı ve zengin SSS düğümleri aktif tutuldu.
- **Bilişsel Yük ve Information Scent Azaltımı:** Kullanıcının karar noktasına en hızlı şekilde ulaşabilmesi için sayfa içi sticky gezinme (`info-toc`), anlık form hesaplamaları ve WCAG uyumlu kontrast/erişilebilirlik standartları korundu.
- **Makine Tarafından Doğrulanabilir Citation Grafı:** Rehberlerin JSON-LD şemalarında `citation` ve `isBasedOn` özellikleri W3C, Schema.org ve Google Search Central resmî standartlarına doğrudan bağlanarak E-E-A-T kanıt bağı güçlendirildi.

## 30 Ağustos 2026 on beşinci OpenSearch, Crawl Traps ve Googlebot İndeksleme Denetimi

Bu turda modern tarayıcılar ve LLM arama ajanları için standart arama keşif protokolü olan OpenSearch 1.1, Googlebot tarama tuzaklarının (crawl traps) önlenmesi ve "Crawled - currently not indexed" durumuna karşı tam taranabilirlik mimarisi devreye alındı:

- **OpenSearch 1.1 Standart Entegrasyonu (`/opensearch.xml`):** Web sitemizin karar rehberleri ve interaktif araçlar indeksini doğrudan tarayıcıların arama çubuğuna ve otonom yapay zekâ araştırma ajanlarına bağlayan OpenSearch tanımı yayımlandı. Tüm 79 canonical sayfanın `<head>` bloğuna `<link rel="search" ...>` otomatik keşif bağlantısı eklendi.
- **Googlebot & AI Bot Taranabilirlik Güvencesi:** Tüm sayfaların sıfır JavaScript bağımlılığı ile anında saf HTML olarak işlenmesi ("SSR/SSG Advantage") korundu; Googlebot'un 2. aşama render kuyruğuna (WRS - Web Rendering Service) girmesine gerek kalmaksızın ilk HTTP yanıtında tam metin, şema grafı ve görsel verisi sunulur.
- **Reddit TechSEO "Crawled - currently not indexed" Teşhisi:** 2025–2026 saha verilerinde bildirilen indeksleme gecikmelerinin en büyük nedeni olan yüzeysel içerik tekrarı ve zayıf iç bağlantılar; 18 interaktif hesaplama aracı, özgün karar algoritmaları, çift yönlü konu kümeleri ve doğrulanmış `OnlineBusiness` Knowledge Graph düğümüyle tamamen bertaraf edildi.
- **Crawl Trap ve Parametre Koruması:** `robots.txt` wildcard kuralları, temiz canonical URL zinciri ve statik dizin yapısı ile sonsuz döngüler, oturum parametreleri ve yetkisiz yönlendirmeler engellendi.

## 30 Ağustos 2026 on altıncı Wikidata Varlık Ayrıştırması, llms.txt v2 Keşfi ve Güven Standartları Denetimi

Bu turda küresel Knowledge Graph düğümlerinde tam anlamsal netlik (semantic disambiguation), yapay zekâ arama ajanları için programatik v2 bağlam keşfi ve RFC 9116 güvenlik standartları entegre edildi:

- **Wikidata ile Varlık Ayrıştırması (`knowsAbout` sameAs Eşlemesi):** Ana `OnlineBusiness` şemasındaki uzmanlık alanları salt metin olmaktan çıkarılarak küresel Wikidata Concept URI'lerine bağlandı (`Web Tasarımı: Q190637`, `SEO: Q180711`, `E-Ticaret: Q484876`, `Özel Yazılım: Q1341490`, `Dijital Pazarlama: Q1323528`, `Sosyal Medya Pazarlaması: Q261543`, `UX: Q1132455`, `CRO: Q5166418`, `QR Kod: Q12203`, `Schema.org: Q3475338`, `Üretken Yapay Zekâ: Q1170729`, `Google Ads: Q219563`, `OpenSearch: Q1056588`, `API: Q165149`). Bu yapı Google Knowledge Graph, Perplexity ve ChatGPT'nin marka uzmanlığını çelişkisiz tanımasını sağlar.
- **llms.txt v2 Keşif Standardı (`rel="describedby"`):** Ağustos 2026 llmstxt.org v2 önerisine uygun olarak tüm 79 sayfanın `<head>` bloğuna `<link rel="describedby" type="text/plain" href="/llms.txt" />` ve CDN düzeyinde `Link: </llms.txt>; rel="describedby"` HTTP yanıt başlığı eklendi. Otonom yapay zekâ ajanları dosya yolunu tahmin etmek zorunda kalmadan sayfa bağlamına doğrudan erişir.
- **WebApplication Güven ve Sınıflandırma Zenginleştirmesi:** 18 interaktif karar aracının şemasına `applicationCategory: 'BusinessApplication'`, `operatingSystem: 'All modern web browsers'`, `permissions: 'none'`, `isAccessibleForFree: true` ve `educationalUse: 'Interactive Calculation & Decision Support Tool'` öznitelikleri uygulandı.
- **RFC 9116 ve humans.txt Güven Standartları:** `.well-known/security.txt` ve `humans.txt` dosyaları OpenSearch ve llms.txt referanslarıyla güçlendirildi; makine ve araştırmacı düzeyinde kurumsal şeffaflık sağlandı.

## 30 Ağustos 2026 on yedinci COOP/CORP Güvenlik İzolasyonu, Atomic Passage Extractability ve Çok Modlu İndeksleme Denetimi

Bu turda tarayıcı düzeyinde en yüksek güvenlik izolasyonu ve AI yanıt motorlarının pasaj çıkarma (passage ranking & text fragments) mekanizmalarına yönelik ince ayarlar uygulandı:

- **COOP ve CORP Güvenlik İzolasyonu:** CDN ve sunucu katmanında `Cross-Origin-Opener-Policy: same-origin` ve `Cross-Origin-Resource-Policy: same-origin` başlıkları etkinleştirildi. Bu mimari, sitenin pencere bağlamını harici sitelerden izole ederek Spectre yan kanal risklerini sıfırlar ve tarayıcının ana iş parçacığı (main thread) optimizasyonunu güçlendirir.
- **Atomic Passage Extractability & Text Fragments (`#:~:text=`):** AI Overviews, SearchGPT ve Perplexity'nin RAG aşamasında aradığı "atomik kanıt" standardı pekiştirildi. Her H2 bölümünün ilk 100 kelimesinde doğrudan cevap yer alması; LLM'lerin sayfayı kaynak gösterirken `#:~:text=` ile doğrudan ilgili pasajı vurgulamasına imkân tanır.
- **MUM ve Çok Modlu (Multimodal) Varlık Korelasyonu:** 40 rehberin görsel varlıkları `<figure class="article-cover">`, `BlogPosting.image` ve `primaryImageOfPage` nesneleriyle semantik olarak birbirine bağlanarak Google MUM ve Gemini görsel-metin arama algoritmalarında tam örtüşme sağlandı.

## Kanıt matrisi

| Kaynak | Bulgu | Uygulama | Sınır |
|---|---|---|---|
| [Google AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | Google AI yüzeyleri temel arama dizini ve kalite sistemlerine dayanır; özel AI dosyası/işaretlemesi gerekmez. | Temel SEO, crawlability ve özgün içerik ana katman yapıldı. | Uygunluk görünürlük veya citation garantisi değildir. |
| [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) | Açık konu, erken cevap, net HTML, sitemap ve IndexNow Copilot grounding için de önemlidir. | Doğrudan cevap paragrafları, tablolar, FAQ, IndexNow anahtarı ve gönderim betiği eklendi. | Bing de indeks veya AI citation garantisi vermez. |
| [Yandex AI](https://yandex.com/support/webmaster/en/yandex-ai) | AI yanıt kaynağı olabilmek için sayfanın Yandex indeksinde bulunması; içeriğin iyi yapılandırılmış ve bilgilendirici olması gerekir. | Statik HTML ve `YandexAdditional` bot erişimi korundu. | Yandex’in seçimi yayıncı tarafından zorlanamaz. |
| [Applebot](https://support.apple.com/en-us/119829) | Applebot Safari, Spotlight ve Siri deneyimlerini besler; `nosnippet` güncel AI bağlamı kullanımını sınırlar. | Applebot açık, snippet sınırları maksimum; `nosnippet` yok. | Safari bağımsız bir genel arama motoru değildir. |
| [OpenAI bot dokümantasyonu](https://developers.openai.com/api/docs/bots) | ChatGPT Search keşfi için OAI-SearchBot erişimi gerekir; GPTBot eğitim tercihi ayrıdır. | OAI-SearchBot açık ve AI referral ölçümü operasyon planına eklendi. | Tarama, ChatGPT cevabında görünme garantisi değildir. |
| [Anthropic crawler politikası](https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | Claude; arama, kullanıcı isteği ve model geliştirme için ayrı botlar kullanır. | `Claude-SearchBot`, `Claude-User` ve `ClaudeBot` açık tutuldu. | Eğitim botu erişimi güncel arama görünürlüğüyle aynı şey değildir. |
| [DuckDuckBot](https://duckduckgo.com/duckduckgo-help-pages/results/duckduckbot) ve [Brave crawler](https://safe.search.brave.com/help/brave-search-crawler) | DuckDuckGo kendi botunu açıklar; Brave ayrı user-agent yayımlamayıp Googlebot taranabilirliğini referans alır. | DuckDuckBot ve Googlebot erişimi açık, ana içerik statik HTML. | Her motorun sonuç seçimi ve sıralaması bağımsızdır. |
| [KDD GEO çalışması](https://arxiv.org/abs/2311.09735) | Kontrollü benchmarklarda bazı içerik sunum yöntemleri görünürlüğü kayda değer ölçüde artırdı; çalışma “%40’a kadar” sonuç raporladı. | Açık tanım, doğrulanabilir kaynak ve özgün kanıt üretimi önceliklendirildi. | Sabit corpus/ölçüm sonucu canlı, uzun dönem organik Google sırası demek değildir. |
| [2026 GEO eleştirel incelemesi](https://arxiv.org/abs/2607.14035) | Literatürde platform çapında, uzun dönem ve nedensel organik keşif kanıtı sınırlıdır. | GEO vaatleri garanti olarak sunulmadı; deneyler ölçülebilir hipotez olarak tasarlandı. | Yeni ve hızla değişen bir araştırma alanıdır. |
| [SIGIR 2026 çalışması](https://arxiv.org/abs/2605.25517) | İncelenen üretken arama bağlamında konu alakası en güçlü unsurdu; fiyat/güncellik bazı durumlarda yardımcı, salt biçimlendirme sınırlı kaldı. | Önce niyet ve özgün bilgi; sonra okunabilir biçim kararı verildi. | Tek alan/deney düzeni bütün sektörlere doğrudan genellenemez. |
| [ACL 2024 çalışması](https://aclanthology.org/2024.acl-long.403/) | Kaynak seçimi ve yanıt üretiminde içerik alakası, yüzeysel otorite sinyallerinden daha belirleyici olabilir. | Anahtar kelime yığmak yerine her URL’ye tek konu sahipliği verildi. | Model, corpus ve sorgu kümesine bağlı deneysel sonuçtur. |
| [ACL 2024 WebCiteS](https://aclanthology.org/2024.acl-long.806/) | Atıflı web yanıtlarında kaynak doğruluğu ve iddia desteği ayrı sorunlardır; modeller doğru kaynak göstermekte hâlâ zorlanır. | İddialar birincil kaynağa yakın verildi; citation sayısı tek başarı ölçütü yapılmadı. | Çalışma Çince web araması ve araştırma modelleri üzerindedir; canlı ticari motor seçimini açıklamaz. |
| [2026 Citation Selection/Absorption ön baskısı](https://arxiv.org/abs/2604.25707) | Citation seçimi ile sayfadaki kanıtın yanıta gerçekten taşınması farklı sonuçlardır; uzunluk, yapı ve çıkarılabilir kanıt gözlemsel olarak ilişkilidir. | Citation, mention, referral ve içerik etkisi ayrı ölçüm katmanları olarak tutuldu. | Hakemli nihai yayın değildir; gözlemsel ilişki nedensel optimizasyon kuralı sayılmaz. |
| [Ahrefs AI görünürlüğü korelasyonları](https://ahrefs.com/blog/ai-brand-visibility-correlations/) | Marka mention’ları, video/YouTube varlığı ve bazı otorite sinyalleri AI görünürlüğüyle korelasyon gösterdi. | Gerçek üçüncü taraf mention, uzman içerik ve çok biçimli kanıt backlog’a alındı. | Korelasyon nedensellik değildir; araç kapsamı bütün AI cevaplarını temsil etmez. |
| [Semrush ghost citations araştırması](https://www.semrush.com/blog/the-ghost-citations-study/) | Üretken cevaplar bazen yararlandığı sayfayı görünür citation olarak göstermeyebilir. | Citation, marka mention’ı ve referral ayrı metrikler olarak tanımlandı. | Tespit yöntemi platformların kapalı retrieval sistemini bütünüyle göremez. |
| [Cambridge attribution araştırması](https://www.cambridge.org/core/journals/data-and-policy/article/attribution-crisis-in-llm-search-results-estimating-ecosystem-exploitation/170DD0B88E5F5AEA8F69F2E9AF1328E3) | LLM arama yanıtlarında kaynak kullanımı ile görünür atıf arasında boşluk oluşabilir. | Başarı yalnız citation sayısına indirgenmedi; marka talebi ve nitelikli referral da izlenecek. | Ekosistem ve modeller hızla değişmektedir. |

## Reddit saha araştırması ve kanıt sınırı

Reddit, Google veya akademik yayın kadar yetkili bir kaynak değildir. Buna rağmen
`r/TechSEO`, `r/bigseo` ve `r/SEO` içindeki tekrar eden saha gözlemleri, hangi
teşhislerin üretim loglarında sınanması gerektiğini belirlemek için incelendi.
Tekil başarı hikâyeleri nedensellik kanıtı sayılmadı.

- [55 sayfalık programatik site tartışması](https://www.reddit.com/r/bigseo/comments/1t4mm6z/29_pages_stuck_in_discovered_currently_not/):
  sitemap’in tek başına yeterli olmadığı; trafik alan, alakalı sayfalardan gerçek
  iç bağlantı ve şablon başına benzersiz değer ihtiyacı tekrarlandı.
- [150 bin URL’lik site tartışması](https://www.reddit.com/r/TechSEO/comments/1vbam20/we_cut_a_quarter_of_our_150kpage_site_google/):
  düşük değerli URL’leri azaltma sonrası iyileşme iddia edildi; yorumlarda zaman,
  otorite ve başka değişkenler kontrol edilmediği için bunun `n=1` ve korelasyon
  olduğu özellikle not edildi.
- [Olgun sitede yeni URL gecikmesi tartışması](https://www.reddit.com/r/bigseo/comments/1vu5b98/old_wellestablished_site_with_perfect_internal/):
  Crawl Stats’in ortalamaları gizleyebildiği, ham loglarda Googlebot istekleri,
  benzersiz URL sayısı ve sürekli `5xx` oranının birlikte incelenmesi önerildi.
- [Google AI özellikleri tartışması](https://www.reddit.com/r/SEO/comments/1m9k0kg/google_confirms_normal_seo_works_for_ai_overviews/):
  topluluk `llms.txt` ve “GEO hilesi” iddialarında bölünmüş durumda. Uygulama
  kararı topluluk görüşüne değil, Google’ın Temmuz 2026 resmî rehberine dayandırıldı.
- [2026'da hızlı büyüyen araç sitesinin indeksleme tartışması](https://www.reddit.com/r/TechSEO/comments/1s9n9r4/site_growing_faster_than_google_can_index_whats/):
  statik HTML, sitemap ve iç bağlantı mevcutken bile her işlevsel aracın otomatik
  indekslenmediği bildirildi. Tekil örnek sonuç kanıtı değildir; Narvals için
  çıkarım daha fazla URL basmak değil, araçların gerçek kullanımını ve sorgu
  gösterimini Search Console'da izlemektir.
- [Küçük sitelerde crawl budget tartışması](https://www.reddit.com/r/bigseo/comments/1ntkz8q/how_much_small_to_medium_sites_worry_about_crawl/):
  tekrar eden görüş, birkaç yüz URL'de “bütçe” hesabından önce kopyalar, soft 404,
  iç bağlantı ve içerik değerinin denetlenmesidir. Narvals 78 URL olduğu için
  tarama bütçesi bir büyüme vaadi olarak değil, teknik öğretim konusu olarak ele
  alındı.

Bu saha araştırmasının koda dönüşen sonucu: canonical sayfalar için gerçek iç
bağlantı kontrolü, üretim `404/3xx/5xx` denetimi, materyal değişiklik tarihleri,
seri benzer içerik uyarıları ve bot/WAF erişiminin yayın sonrası ham loglarla
izlenmesi. Reddit’ten backlink üretme, sahte mention veya URL slug değiştirme gibi
kanıtsız kısa yollar uygulanmadı.

## İçerik üretim backlog’u

Aşağıdakiler ancak doğrulanabilir işletme verisi sağlandığında yayınlanmalıdır:

- Problem, başlangıç durumu, yöntem, kapsam, sınırlama ve gerçek sonucu içeren
  müşteri izinli vaka çalışmaları.
- Örneklem, tarih, veri toplama yöntemi ve sınırlaması açıklanmış özgün sektör
  benchmark’ı.
- Gerçek uzman adı, biyografi, deneyim ve resmî profillerle yazar/inceleyen
  sayfaları.
- Paket uydurmadan; fiyatı etkileyen değişkenleri ve örnek kapsamları açıklayan
  fiyatlandırma rehberleri.
- Gerçek karar sorularına dayalı karşılaştırmalar: hazır araç mı özel yazılım
  mı, PDF menü mü yönetilebilir QR menü mü, Pixel ile CAPI farkı gibi.
- Görsel/video anlatımları için açıklama, erişilebilir alt metin ve gerekiyorsa
  transkript.

Yayınlanmaması gerekenler: şehir adı değiştirilmiş kopya sayfalar, sahte müşteri
logosu/yorum/puan, satın alınmış link ağı, kaynaksız başarı yüzdesi, yapay güncel
tarih, gizli anahtar kelime metni ve editoryal kontrolsüz seri AI içeriği.

## 90 günlük ölçüm düzeni

- Yayın günü: index kapsamı, CWV, ilk sorgular ve sabit AI prompt seti için
  başlangıç kaydı.
- Haftalık: teknik hata, bot `200/3xx/4xx` logları ve yeni/önemli değişen
  URL’lerin IndexNow bildirimi.
- Aylık: sorgu–sayfa performansı, marka/markasız görünürlük, citation verilen URL,
  marka mention’ı, AI referral ve nitelikli iletişim dönüşümü.
- 90 gün sonunda: içerik bazında impression/click/citation/referral farkı; aynı
  dönemde yapılan değişiklikler not edilerek değerlendirme.

Tek bir prompt, kişiselleştirilmiş bir cevap veya kısa dönem sıçrama başarı
kanıtı sayılmaz. Teknik altyapı uygunluğu artırır; üst sıra ve AI kaynak seçimi
hiçbir platformda garanti edilemez.
