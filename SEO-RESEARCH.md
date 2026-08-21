# Narvals Labs — SEO / GEO araştırma notları

Araştırma tarihi: 21 Ağustos 2026. Bu belge Google, Bing, Yandex, Apple ve
yanıt motorları için yapılan resmî kaynak taramasını; akademik ve üçüncü taraf
bulguların sınırlarıyla birlikte uygulama kararına dönüştürür.

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

## Canlı SERP ve marka bulgusu

- `narvalslabs.com` araştırma tarihinde DNS'te çözümlenmedi; ana sayfa,
  `robots.txt` ve sitemap alınamadı.
- `site:narvalslabs.com`, `"Narvals Labs"` ve alan adı sorgularında markaya ait
  görünür sonuç bulunamadı. Bu tek başına kesin indeks kanıtı değildir; DNS
  hatasıyla birlikte yayın/keşif problemini doğrular.
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

Uygulanan ayrıntılı sorgu haritası ve yayın planı `SEO-IMPLEMENTATION.md`
dosyasındadır.

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
| [Ahrefs AI görünürlüğü korelasyonları](https://ahrefs.com/blog/ai-brand-visibility-correlations/) | Marka mention’ları, video/YouTube varlığı ve bazı otorite sinyalleri AI görünürlüğüyle korelasyon gösterdi. | Gerçek üçüncü taraf mention, uzman içerik ve çok biçimli kanıt backlog’a alındı. | Korelasyon nedensellik değildir; araç kapsamı bütün AI cevaplarını temsil etmez. |
| [Semrush ghost citations araştırması](https://www.semrush.com/blog/the-ghost-citations-study/) | Üretken cevaplar bazen yararlandığı sayfayı görünür citation olarak göstermeyebilir. | Citation, marka mention’ı ve referral ayrı metrikler olarak tanımlandı. | Tespit yöntemi platformların kapalı retrieval sistemini bütünüyle göremez. |
| [Cambridge attribution araştırması](https://www.cambridge.org/core/journals/data-and-policy/article/attribution-crisis-in-llm-search-results-estimating-ecosystem-exploitation/170DD0B88E5F5AEA8F69F2E9AF1328E3) | LLM arama yanıtlarında kaynak kullanımı ile görünür atıf arasında boşluk oluşabilir. | Başarı yalnız citation sayısına indirgenmedi; marka talebi ve nitelikli referral da izlenecek. | Ekosistem ve modeller hızla değişmektedir. |

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
