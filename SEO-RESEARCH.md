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
