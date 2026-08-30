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

## 30 Ağustos 2026 kanıt dili ve öz-denetim güvenilirliği turu

Google'ın 2026 üretken AI optimizasyon rehberi, insan odaklı içerik rehberi ve
spam politikası; OpenAI'ın güncel crawler ayrımı; 2023–2026 GEO literatürünün
eleştirel taraması ve güncel Reddit saha tartışmaları yeniden karşılaştırıldı.
Ortak sonuç, site sahibinin görebildiği bir “Google Information Gain skoru”,
evrensel RAG parça boyutu veya içerikten sıralama/citation tahmini bulunmadığıdır.

Bu nedenle E-E-A-T ve bilgi kazanımı aracı yeniden çerçevelendi:

- Araç artık Google metriği değil, kullanıcının kendi yanıtlarına dayalı 12
  maddelik içerik öz-değerlendirmesi olduğunu sonuç ekranında açıkça söyler.
- “256–512 token”, “zirveye aday”, “ceza alma riski” ve patentten canlı sıralama
  sonucu çıkaran ifadeler kaldırıldı.
- E-E-A-T içeriğinde fiziksel adres, kişi yazarı, sosyal profil veya inceleme
  kurulunun her site için zorunlu olduğu yönündeki genellemeler düzeltildi.
- Organization şemasındaki `knowsAbout` alanından NavBoost ve RAG optimizasyonu
  gibi doğrulanamayan ranking uzmanlığı iddiaları çıkarıldı; görünür hizmet ve
  yayın yaklaşımıyla uyumlu somut konular bırakıldı.
- Aynı yanıltıcı iddiaların tekrar yayınlanmasını engelleyen build kalıpları
  eklendi.

Reddit'teki AI crawler ve `llms.txt` tartışmaları yalnız hipotez kaynağı olarak
kullanıldı: toplulukta arama botu ile eğitim botunu ayırma ve sunucu loglarında
gerçek erişimi ölçme yaklaşımı tekrar ediyor; `llms.txt` için nedensel sıralama
kanıtı bildirilmiyor. Resmî kaynaklar bu sınırı destekliyor: Google, `llms.txt`
dosyasını arama görünürlüğü için yok saydığını; OpenAI ise OAI-SearchBot,
GPTBot ve ChatGPT-User rollerinin birbirinden farklı olduğunu açıklıyor.

Kaynaklar: [Google üretken AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[Google insan odaklı içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content),
[Google spam politikası](https://developers.google.com/search/docs/essentials/spam-policies),
[OpenAI crawler dokümantasyonu](https://developers.openai.com/api/docs/bots),
[KDD 2024 GEO çalışması](https://arxiv.org/abs/2311.09735),
[2023–2026 GEO kritik taraması](https://arxiv.org/abs/2607.14035),
[citation selection–absorption çalışması](https://arxiv.org/abs/2604.25707),
[r/TechSEO AI crawler tartışması](https://www.reddit.com/r/TechSEO/comments/1op42ux/)
ve [r/SEO_LLM llms.txt tartışması](https://www.reddit.com/r/SEO_LLM/comments/1ts3djx/).

## 30 Ağustos 2026 Google spam, içerik kalitesi ve güvenlik Ar-Ge turu

Google'ın 28 Ağustos 2026 site reputation açıklaması, güncel spam politikası,
üretken yapay zekâ içerik rehberi ve people-first öz değerlendirmesi birlikte
incelendi. Ana riskin “AI ile yazılmış olmak” değil; arama sırası için ölçekli,
yakın kopya ve kullanıcıya özgün değer sunmayan sayfa üretmek olduğu yeniden
doğrulandı. Bu turda yeni URL sayısı artırılmadı; mevcut içerik kalitesi ve
güvenlik sözleşmesi güçlendirildi.

- 42 rehber arasında beş kelimelik shingle/Jaccard benzerliği ölçen ve %72
  üzerindeki yakın kopyayı build sırasında durduran kalite kapısı eklendi.
- Her rehber için en az iki görünür HTTPS kaynak, benzersiz kaynak URL'si,
  canonical iç bağlantı ve gerçek yayın tarihi zorunluluğu doğrulandı.
- Ücretsiz araçlarda kalan kaynaksız kesin pazarlama iddiaları temizlendi:
  “CAPI zorunludur”, “anında %40–50”, “%100 uyum”, “yüksek dönüşümlü” ve
  bağlamsız vergi/komisyon genellemeleri koşullu ve doğrulanabilir açıklamalarla
  değiştirildi.
- Editoryal politika yeni URL açma ölçütünü, otomasyon kullanımını, benzerlik
  denetimini ve gerçek düzeltme e-postasını görünür hâle getirdi.
- CSP çerçeveleme politikası `frame-ancestors 'none'` ve `X-Frame-Options:
  DENY` olarak sıkılaştırıldı. Inline olay işleyicileri kaldırıldı ve
  `script-src-attr 'none'` ile engellendi. Build ve canlı denetim artık HSTS,
  CSP, MIME sniffing, frame, COOP, CORP ve referrer başlıklarını ayrı doğrular.

Bu değişiklikler sıralama garantisi değildir. Google'ın kendi people-first
rehberi, içerik ekleme veya tarih yenilemenin sırf “taze görünmek” amacıyla
yapılmaması gerektiğini söylüyor. Reddit r/bigseo'daki 2026 cannibalization
tartışması da ticari hizmet sayfası ile bilgi rehberini ayrı niyetler olarak
tutmayı; gerçek sorgu çakışmasını Search Console verisiyle doğrulamayı öneren
saha yaklaşımı sundu. Reddit görüşü kanıt değil, uygulanmış niyet ayrımını
zorlamak için hipotez kontrolü olarak kullanıldı.

Kaynaklar: [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies),
[Google people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content),
[Google generative AI content guidance](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content),
[28 Ağustos 2026 site reputation güncellemesi](https://developers.google.com/search/blog/2026/08/update-site-reputation-policy),
[web.dev security headers](https://web.dev/articles/security-headers),
[2026 authority-aware generative retrieval çalışması](https://arxiv.org/abs/2604.13468)
ve [r/bigseo content cannibalisation tartışması](https://www.reddit.com/r/bigseo/comments/1vquo8e/).

## 30 Ağustos 2026 ticari arama niyeti ve GEO kanıt güncellemesi

Bu turda “e-ticaret sitesi yaptırmak”, “Google Ads ajansı” ve “Meta reklam
ajansı” niyetleri Türkiye sonuçlarıyla karşılaştırıldı. Mevcut hizmet sayfaları
bu üç ana talebi doğrudan kapsıyordu; açık kalan konu, reklamverenin medya
bütçesi ile ajans yönetim ücretini ayıran karar içeriğiydi. İki yeni rehber bu
boşluğu kapatmak için yayınlandı:

- Google Ads yönetim ücreti; medya, yönetim, üretim, ölçüm ve araç maliyetlerini
  ayrı gösteren dört modelle açıklandı. Google'ın resmî manager account ve
  account budget belgelerine dayanılarak işletmenin kendi hesap/veri
  varlıklarında yönetici kalması önerildi.
- Meta reklam yönetim ücreti; medya, kreatif, ölçüm altyapısı ve yönetim olarak
  ayrıldı. Pixel, Conversions API, katalog ve Business Portfolio sahipliği
  görünür bir teklif ölçütüne dönüştürüldü.
- İki rehber reklam konu merkezine ve ilgili hizmet sayfasına bağlandı. Böylece
  “bütçe ne olmalı?”, “ajans nasıl seçilir?” ve “ajans ücreti neyi kapsar?”
  birbirini tekrarlamayan üç ayrı karar niyeti oldu.

Akademik GEO literatüründeki son çalışmalar tedbirli yorumlandı. KDD 2024'te
yayımlanan Princeton/Georgia Tech/Allen Institute çalışması görünürlükte
kaynaklandırma ve istatistik gibi içerik niteliklerini deneysel olarak sınasa da
sonraki 2026 literatürü metriklerin ve platform davranışının hâlâ heterojen
olduğunu vurguluyor. 602 kontrollü prompt ve çoklu AI platformu kullanan yeni
ölçüm çalışması ayrıca “kaynak olarak seçilme” ile kaynağın cevaba gerçekten
kanıt taşımasını ayrı aşamalar olarak ele alıyor. Bu nedenle siteye cümle
şablonu, yapay anahtar kelime yoğunluğu veya doğrulanmamış otorite iddiası
eklenmedi; açık kapsam, birincil kaynak, hesap sahipliği ve özgün karar tabloları
uygulandı. 2026 çalışmaları henüz preprint niteliğinde olduğundan kesin sıralama
kuralı olarak sunulmadı.

Reddit'teki r/TechSEO, r/SEO ve r/bigseo tartışmalarında tekrar eden iki saha
gözlemi vardı: `llms.txt` ile citation artışı arasında ikna edici nedensel kanıt
bulunmaması ve schema'nın tek başına güven/sıralama üretmemesi. Bunlar resmî veya
akademik kanıt sayılmadı; Google'ın 2026 AI optimization rehberindeki “özel GEO
markup gerekmez” açıklamasıyla uyumlu hipotez kontrolü olarak kullanıldı.

Kaynaklar: [Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[Google Ads manager accounts](https://support.google.com/google-ads/answer/6139186),
[Google Ads account budgets](https://support.google.com/google-ads/answer/7054229),
[Princeton GEO / KDD 2024](https://arxiv.org/abs/2311.09735),
[Citation selection–absorption ölçüm çalışması](https://arxiv.org/abs/2604.25707),
[2023–2026 GEO kritik taraması](https://arxiv.org/abs/2607.14035),
[r/TechSEO Google GEO rehberi tartışması](https://www.reddit.com/r/TechSEO/comments/1te4xtn/),
[r/SEO llms.txt saha araştırması tartışması](https://www.reddit.com/r/SEO/comments/1uclth8/)
ve [r/SEO schema tartışması](https://www.reddit.com/r/SEO/comments/1nztb1k/).

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

## 30 Ağustos 2026 kanıt sınırı yeniden denetimi

Önceki araştırma notlarındaki kapalı sistemlere ilişkin kesin hükümler yeniden
incelendi. Google, OpenAI, Anthropic ve Perplexity; tarama erişimini ve bazı ürün
rollerini açıklar, fakat üretimdeki sıralama, yeniden sıralama, pasaj boyutu veya
kaynak seçme formüllerini yayımlamaz. Bu nedenle aşağıdaki ayrımlar korunmalıdır:

- KDD 2024 GEO sonuçları kontrollü bir benchmark'a aittir. Kaynak ve istatistik
  ekleme bazı koşullarda görünürlüğü artırmıştır; bu sonuç canlı Google sırası,
  ChatGPT citation'ı veya her sektör için sabit artış vaadi değildir.
- Google patentleri ve kamuya sızan/mahkeme dosyalarındaki alan adları olası
  sistem bileşenleri hakkında araştırma ipucu verebilir. Bir patent ya da alan
  adı, özelliğin bugün kullanıldığını, ağırlığını veya site sahibi tarafından
  optimize edilebilir bir metrik olduğunu kanıtlamaz.
- ColBERT, RRF, dense retrieval ve passage ranking akademik/teknik bilgi erişim
  yöntemleridir. ChatGPT Search, Perplexity, Claude veya Google'ın aynı modeli,
  aynı sabiti ya da aynı pasaj penceresini kullandığı varsayılamaz.
- Semantik HTML, kısa ve açık bölümler, tablolar ve kaynaklar önce insanın bilgiyi
  anlamasına ve erişilebilirliğe yarar. Bunların AI citation olasılığını belirli
  bir yüzdeyle artırdığı veya gizli bir “zero-vector penalty”yi kaldırdığına dair
  yayımlanmış platform garantisi yoktur.
- `llms.txt`, OpenSearch, Wikidata bağlantıları ve geniş Schema.org özellikleri
  yardımcı makine açıklamaları olabilir; Google bunların hiçbirini özel bir AI
  sıralama şartı olarak istemez. İşaretleme yalnız görünür ve doğrulanabilir
  içeriği temsil etmelidir.
- COOP/CORP ve güvenlik başlıkları saldırı yüzeyini azaltan savunma katmanlarıdır;
  riski sıfırlamaz ve doğrudan SEO sıralama sinyali olarak sunulmamalıdır.
- PWA manifesti, prefetch/prerender ve modern CSS kullanıcı deneyimini belirli
  tarayıcılarda iyileştirebilir. Gerçek Core Web Vitals ve dönüşüm etkisi saha
  ölçümü olmadan ileri sürülmemelidir.

Bu yeniden denetim sonucunda strateji; gizli algoritmayı tahmin etmekten
çıkarılarak taranabilir HTML, doğru kurum bilgisi, alakalı iç bağlantılar, özgün
karar desteği, kaynak doğruluğu ve gerçek kullanıcı dönüşümünün ölçülmesine
bağlandı.

## 30 Ağustos 2026 Türkiye ticari sorgu ve güven araştırması

“E-ticaret sitesi yaptırma”, “Google Ads ajansı” ve “Meta reklam ajansı” sorguları
için incelenen Türkiye sonuçlarında fiyat/teklif şeffaflığı güçlü bir karşılaştırma
temasıydı. Rakip örnekleri kesin pazar fiyatı veya kalite kanıtı sayılmadı; hangi
soruların satın alma kararında görünür olduğunu belirlemek için kullanıldı.

Akademik e-ticaret ve çevrimiçi güven çalışmaları da bilgi şeffaflığı, algılanan
fiyat adaleti, satıcı güveni ve riskin satın alma niyetiyle ilişkili olduğunu
bildiriyor. Örneklem, ülke ve ürün türü etkileri nedeniyle bu bulgular Narvals için
nedensel dönüşüm garantisi değildir. Uygulanabilir ve dürüst sonuç, üç ana hizmet
sayfasında şu kalemleri görünür biçimde ayırmaktır:

- Platforma/üçüncü tarafa ödenen bütçe ile Narvals hizmet bedeli.
- Yönetim, ölçüm, kreatif/sayfa üretimi ve entegrasyon sınırları.
- Alan adı, reklam hesabı, analitik, Pixel ve diğer dijital varlıkların sahipliği.
- Tek seferlik proje giderleri, dönemsel servis ücretleri ve yayın sonrası destek.
- Sonuç garantisi yerine doğrulanabilir kapsam, erişim ve ölçüm soruları.

Reddit'teki Türkiye odaklı e-ticaret tartışmalarında platforma kilitlenme, sürpriz
giderler ve projenin kapsamını fiyatla birlikte okuyamama tekrar eden endişelerdi.
Bunlar öz-seçilimli kullanıcı anlatılarıdır; uygulamaya yalnız akademik şeffaflık
bulguları ve kullanıcıya açık karar desteğiyle örtüştüğü ölçüde yön verdi.

## 30 Ağustos 2026 ölçüm iddiaları ve veri şeffaflığı denetimi

Bu turda yayın metni; sabit dönüşüm yüzdesi, eksiksiz atıf, zengin sonuç garantisi
ve kayıpsız ölçüm iddiaları için yeniden tarandı. Uygulama kararları şunlardır:

- UTM parametreleri manuel trafik kaynağı boyutlarını besler; satışın nedenini
  tek başına kanıtlamaz. İzin, yönlendirme, etiket korunması, Analytics kurulumu
  ve dönüşüm olayı ayrıca test edilmelidir.
- JSON-LD'nin söz dizimsel olarak geçerli olması, görünür bilginin doğru olduğunu
  veya Google'ın zengin sonuç göstereceğini kanıtlamaz. Araç yalnız taslak ve
  temel doğrulama sağlar; Google Rich Results Test ayrı adımdır.
- Core Web Vitals eşikleri 75. yüzdelikte değerlendirilir. “Her 1 saniye yüzde
  X dönüşüm kaybettirir” veya “50 KB JavaScript sabit Y ms gecikme yaratır” gibi
  bağlamsız genellemeler kaldırıldı; saha ve laboratuvar ölçümü ayrıldı.
- Baymard'ın sepet terki ortalaması genel bir kıyastır; tek mağazanın sonucu veya
  yapılacak değişikliğin etkisi değildir. CRO örnekleri, diğer değişkenler sabit
  varsayımı ve net kâr sınırıyla açıklandı.
- Sitenin gerçek davranışına göre `/gizlilik/` sayfası eklendi. Tarayıcıda çalışan
  araçlar, `sessionStorage` içindeki kaynak/kanal/ilk sayfa, koşullu
  `contact_intent` analitik olayı ve WhatsApp/e-posta geçişleri ayrı açıklandı.
  Bu sayfa genel şeffaflık metnidir; uydurma tüzel kişilik veya hukuk beyanı
  eklenmedi.

## Kanıt matrisi

| Kaynak | Bulgu | Uygulama | Sınır |
|---|---|---|---|
| [Google AI optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | Google AI yüzeyleri temel arama dizini ve kalite sistemlerine dayanır; özel AI dosyası/işaretlemesi gerekmez. | Temel SEO, crawlability ve özgün içerik ana katman yapıldı. | Uygunluk görünürlük veya citation garantisi değildir. |
| [Google yapılandırılmış veri kalite ilkeleri](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) | Doğru işaretleme zengin sonuca uygunluk sağlayabilir; görünürlük garanti edilmez ve işaretleme sayfadaki gerçek içeriği temsil etmelidir. | Schema aracındaki “kusursuz/geçerli/otorite” vaatleri kaldırıldı; haricî test ve içerik doğruluğu ayrı gösterildi. | Rich Results Test sözdizimi/uygunluk sorunlarının tümünü veya sonuç görünürlüğünü garanti etmez. |
| [GA4 trafik kaynağı ve manuel etiketleme](https://support.google.com/analytics/answer/11242870) | UTM değerleri manuel kaynak, mecra ve kampanya boyutlarını besler; otomatik etiketleme ve eksik parametrelerle etkileşimleri vardır. | UTM aracı atıf doğruluğu veya ciro ispatı vaat etmiyor; tutarlı adlandırma ve ölçüm sınırlamalarını açıklıyor. | Raporlanan kampanya boyutu nedensel satış etkisi değildir. |
| [Core Web Vitals eşik yöntemi](https://web.dev/articles/defining-core-web-vitals-thresholds) | LCP, INP ve CLS eşikleri gerçek kullanıcı ziyaretlerinin 75. yüzdeliği üzerinden sınıflandırılır. | Evrensel hız-dönüşüm yüzdeleri kaldırıldı; gerçek kullanıcı verisi ve sayfaya özgü teşhis öne alındı. | İyi CWV tek başına sıralama veya dönüşüm garantisi değildir. |
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
| [2026 üretken arama citation çalışması](https://arxiv.org/abs/2607.15771) | Büyük ölçekli Çince sorgu deneyinde kaynak seçimi motorlar ve sorgu türleri arasında değişti; tek bir evrensel citation reçetesi görülmedi. | Platformlar tek başarı metriğine indirgenmedi; sorgu, kaynak URL ve görünür citation ayrı kaydedilecek. | Yeni bir ön baskıdır; Çince ekosistem ve incelenen motorlar Türkiye hizmet sorgularını doğrudan temsil etmez. |
| [Bilgi şeffaflığı ve satın alma niyeti çalışması](https://www.sciencedirect.com/science/article/pii/S0378720617305086) | Satıcı, ürün ve işlem bilgisinin algılanan şeffaflığı; güven/risk değerlendirmesi ve satın alma niyetiyle ilişkilendirildi. | Hizmet sayfalarında ücret sınıfları, üçüncü taraf giderleri, kapsam ve varlık sahipliği ayrıştırıldı. | E-ticaret bağlamındaki araştırma ajans hizmetlerine doğrudan nedensel sonuç olarak taşınamaz. |
| [Fiyat adaleti, güven ve sosyal ticaret çalışması](https://www.sciencedirect.com/science/article/pii/S1567422324000152) | İncelenen örneklemde fiyat adaleti, güven, yanıt verebilirlik ve yorumlar satın alma niyetiyle ilişkiliydi. | Uydurma referans/yorum yerine karşılaştırılabilir teklif soruları ve açık maliyet ayrımı kullanıldı. | Tek platform/örneklem bulgusu; dönüşüm veya organik sıralama garantisi değildir. |
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
