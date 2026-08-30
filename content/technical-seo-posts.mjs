export const technicalSeoPosts = [
  {
    slug: 'crawl-budget-ve-googlebot-tarama-verimliligi',
    metaTitle: 'Crawl Budget ve Googlebot Tarama Verimliliği | Narvals',
    title: 'Crawl budget nedir? Googlebot tarama verimliliği rehberi',
    description: 'Crawl budget kavramını, küçük ve büyük sitelerde gerçek önemini; sunucu logları, sitemap, iç bağlantı, kopya URL ve HTTP durumlarıyla teşhis edin.',
    keywords: ['crawl budget nedir', 'Googlebot tarama bütçesi', 'tarama verimliliği', 'Google indeksleme', 'sunucu log analizi'],
    category: 'SEO & GEO',
    published: '2026-08-30T12:00:00+03:00',
    modified: '2026-08-30T12:00:00+03:00',
    readingTime: 11,
    answer: 'Crawl budget, Googlebot’un bir site için taramak istediği ve sunucuyu zorlamadan tarayabildiği URL miktarının pratik birleşimidir. Google, tarama bütçesi yönetimini öncelikle çok büyük veya çok sık değişen siteler için önemli görür. Onlarca ya da yüzlerce temiz URL’si olan bir sitede indeks sorunu çoğu zaman bütçeden değil; erişim, canonical, iç bağlantı, kopya sayfa veya içerik değerinden kaynaklanır.',
    takeaways: [
      'Küçük sitelerde “crawl budget artırma” çoğunlukla yanlış teşhistir.',
      'Sitemap’in çekilmesi, içindeki her URL’nin tarandığı veya indekslendiği anlamına gelmez.',
      'Ham sunucu logu botun gerçekten hangi URL’ye hangi durum koduyla geldiğini gösterir.',
      '5xx ve 429 yanıtları tarama kapasitesini; kopya ve sonsuz URL uzayları tarama talebini olumsuz etkileyebilir.',
      'İndekslenme ve sıralama hiçbir teknik ayarla garanti edilemez.'
    ],
    about: ['Crawl budget', 'Googlebot', 'Teknik SEO', 'Sunucu log analizi'],
    related: ['google-ve-ai-botlari-icin-site-indeksleme-rehberi', 'web-sitesi-googleda-neden-cikmiyor', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Teknik SEO ve web altyapısını inceleyin',
    faq: [
      { question: 'Crawl budget küçük siteler için önemli mi?', answer: 'Google’ın rehberine göre yüz milyonlarca dönemsel URL veya on milyonlarca sık değişen URL gibi çok büyük ölçekler asıl crawl budget adaylarıdır. Küçük siteler önce erişim, canonical, kalite ve iç bağlantıyı denetlemelidir.' },
      { question: 'Sitemap göndermek bütün sayfaları indeksletir mi?', answer: 'Hayır. Sitemap tercih edilen kanonik URL’leri keşfetmeye yardım eder; tarama, indeks veya sıralama garantisi vermez.' },
      { question: 'Googlebot taramasını nasıl ölçerim?', answer: 'Search Console Crawl Stats genel görünüm sağlar. En kesin URL ve durum kodu ayrımı için doğrulanmış Googlebot isteklerini ham CDN veya sunucu erişim loglarında analiz edin.' },
      { question: 'IndexNow Google’a URL gönderir mi?', answer: 'Hayır. IndexNow Bing, Yandex ve diğer katılımcı motorlar içindir; Google şu anda IndexNow protokolünü desteklemez.' }
    ],
    sections: [
      {
        id: 'ne-zaman-gercek-sorun', label: 'Doğru teşhis', heading: 'Önce gerçekten tarama bütçesi sorununuz olup olmadığını belirleyin.',
        paragraphs: [
          'Google tarama kapasitesini sunucunun verdiği yanıtlara göre sınırlar; tarama talebini ise URL’nin algılanan önemi, güncelliği ve benzeri sinyaller etkileyebilir. Bu iki unsurun kesişimi pratik tarama miktarını oluşturur.',
          '“Discovered – currently not indexed” raporu tek başına sunucunun yetersiz olduğunu kanıtlamaz. URL hiç taranmamış olabilir; fakat neden düşük öncelik, zayıf iç bağlantı, çok sayıda benzer şablon veya sınırlı site sinyali de olabilir. Reddit TechSEO ve BigSEO tartışmalarında bunlar sık tekrarlanır, ancak tekil vakalar nedensel kanıt değildir.'
        ],
        table: { headers: ['Belirti', 'İlk kanıt', 'Olası sonraki adım'], rows: [
          ['5xx veya 429 artışı', 'Sunucu/CDN logu ve Crawl Stats', 'Kapasite, cache ve hata nedenini düzeltin'],
          ['Çok sayıda parametre URL’si', 'Loglarda sorgu parametresi dağılımı', 'İç link, canonical ve gerektiğinde robots kurallarını sadeleştirin'],
          ['Discovered, not indexed', 'URL Inspection ve iç bağlantı yolu', 'Şablon değerini, keşif yolunu ve site talebini birlikte inceleyin'],
          ['Crawled, not indexed', 'Google canonical ve render edilmiş HTML', 'Kopya, soft 404 ve içerik değerini kontrol edin']
        ] }
      },
      {
        id: 'loglarla-olc', label: 'Kanıta dayalı ölçüm', heading: 'Crawl Stats ile başlayın, ham logla doğrulayın.',
        paragraphs: [
          'Search Console; istek sayısı, toplam indirme boyutu, ortalama yanıt süresi, dosya türü, amaç ve yanıt kodu dağılımını özetler. Ortalama grafikler, sürekli fakat düşük oranlı bir 5xx problemini veya belirli bir URL şablonundaki israfı saklayabilir.',
          'Ham erişim logunda bot kimliğini yalnız user-agent ile kabul etmeyin. Sahte Googlebot kolaydır; Google’ın önerdiği reverse DNS ya da yayımlanmış IP aralıklarıyla doğrulayın. Ardından bot, gün, URL şablonu, durum kodu, yanıt süresi ve bayt dağılımını çıkarın.'
        ],
        checklist: ['Googlebot istekleri doğrulanmış IP veya reverse DNS ile ayrıldı.', '200, 3xx, 4xx, 429 ve 5xx oranları URL şablonuna göre hesaplandı.', 'En çok taranan fakat indekslenmesi istenmeyen URL kalıpları çıkarıldı.', 'Önemli URL’lerin son tarama zamanı ile gerçek lastmod tarihi karşılaştırıldı.', 'CSS, JS ve görsel dosyalarının Google render erişimi engellenmiyor.']
      },
      {
        id: 'israfi-azalt', label: 'Uygulama', heading: 'Tarama israfını URL ve sunucu katmanında azaltın.',
        ordered: [
          '<strong>Tek kanonik URL:</strong> HTTP/HTTPS, www/çıplak host, slash ve index.html varyasyonlarını tek adrese yönlendirin.',
          '<strong>Gerçek durum kodu:</strong> Silinen sayfaya 404/410; geçici sunucu sorununa 5xx; kalıcı taşımaya tek atlamalı 301/308 verin.',
          '<strong>Temiz keşif:</strong> Sitemap’e yalnız indekslenmesini istediğiniz kanonik 200 URL’leri koyun ve lastmod’u yalnız materyal değişiklikte güncelleyin.',
          '<strong>İç bağlantı:</strong> Önemli sayfaları trafik ve konu bakımından alakalı hub ve içeriklerden normal `a href` bağlantılarıyla bulunabilir yapın.',
          '<strong>URL uzayını sınırla:</strong> Takvim, filtre, dahili arama, oturum ve sıralama parametrelerinin sonsuz kombinasyon üretmesini önleyin.',
          '<strong>Sunucu sağlığı:</strong> Yanıt süresini, 429/5xx taban oranını ve WAF bot challenge’larını düzenli izleyin.'
        ]
      },
      {
        id: 'narvals-uygulamasi', label: 'Bu sitedeki uygulama', heading: 'Narvals tarama yüzeyini küçük, kanonik ve denetlenebilir tutuyor.',
        paragraphs: [
          'Bu projede tüm indekslenebilir URL’ler tek veri kaynağından sitemap, RSS ve keşif dosyalarına üretilir. Derleme; canonical, title, meta robots, yapılandırılmış veri, iç bağlantı, gerçek hedef dosya, sitemap lastmod ve yetim sayfa kontrolleri başarısız olursa durur.',
          'Canlı denetim bilinmeyen URL’nin gerçek 404 verdiğini, slash/index.html varyasyonlarının tek atlamalı yönlendiğini ve Googlebot, Bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot ile Applebot user-agent’larının WAF’tan 200 HTML alabildiğini test eder. Bu uygunluk sağlar; indeks veya sıra garantisi vermez.'
        ],
        callout: '<a href="/araclar/tarama-butcesi-hesaplama/">Tarama bütçesi ve bot taranabilirlik aracını</a> kullanarak log verinizden ilk risk önceliğini çıkarabilirsiniz.'
      }
    ],
    sources: [
      { label: 'Google Search Central — Büyük sitelerde crawl budget yönetimi', url: 'https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget' },
      { label: 'Google Search Central — Googlebot taramasını doğrulama', url: 'https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot' },
      { label: 'Google Search Central — Sitemap oluşturma ve gönderme', url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap' },
      { label: 'Google Search Console — Crawl Stats raporu', url: 'https://support.google.com/webmasters/answer/9679690' },
      { label: 'IndexNow — Katılımcı arama motorları ve protokol', url: 'https://www.indexnow.org' }
    ]
  },
  {
    slug: 'ga4-ve-server-side-gtm-kurulum-rehberi',
    metaTitle: 'GA4 ve Server-Side GTM Kurulum Rehberi | Narvals',
    title: 'GA4 ve server-side GTM nasıl kurulur? Ölçüm rehberi',
    description: 'GA4 ve server-side Google Tag Manager mimarisini amaç, veri akışı, izin, test, maliyet ve veri doğruluğu açısından planlayın; yanlış vaatlerden kaçının.',
    keywords: ['GA4 kurulumu', 'server-side GTM', 'Google Tag Manager', 'server-side tagging', 'dönüşüm ölçümü'],
    category: 'Ölçüm & Analitik',
    published: '2026-08-30T12:10:00+03:00',
    modified: '2026-08-30T12:10:00+03:00',
    readingTime: 10,
    answer: 'GA4 kurulumu, işletme kararlarını temsil eden olayları tanımlayıp web veri akışını doğru mülke göndermekle başlar. Server-side GTM ise etiket isteklerini işletmenin kontrol ettiği bir sunucu container’ı üzerinden işleyebilir. Bu mimari veri kontrolü ve performans için seçenek sunar; izni ortadan kaldırmaz, reklam engelleyicileri tamamen aşmaz ve eksiksiz veri garantisi vermez.',
    takeaways: ['Önce ölçüm planı, sonra etiket kurulumu yapılır.', 'Server-side tagging zorunlu değildir; bakım ve barındırma maliyeti getirir.', 'Tarayıcı ve sunucu olayları ortak event_id ile tekilleştirilmelidir.', 'DebugView, Tag Assistant ve gerçek iş kaydı birlikte doğrulanmalıdır.', 'Kişisel veri ve izin yükümlülükleri teknik proxy ile ortadan kalkmaz.'],
    about: ['Google Analytics 4', 'Server-side Google Tag Manager', 'Dönüşüm ölçümü', 'Veri yönetişimi'],
    related: ['meta-pixel-ve-conversions-api-farki', 'google-ads-butcesi-nasil-belirlenir', 'web-sitesi-donusum-orani-nasil-hesaplanir'],
    servicePath: '/hizmetler/google-ads/', serviceLabel: 'Google Ads ve dönüşüm ölçümünü inceleyin',
    faq: [
      { question: 'Server-side GTM zorunlu mu?', answer: 'Hayır. İhtiyaç; veri akışı, performans, yönetişim, ekip yetkinliği ve barındırma maliyetine göre değerlendirilir. Basit sitelerde doğru bir istemci tarafı kurulum yeterli olabilir.' },
      { question: 'Server-side tagging çerez iznini kaldırır mı?', answer: 'Hayır. Verinin hangi amaçla toplandığı ve işlendiği değişmez; geçerli izin, aydınlatma ve veri minimizasyonu yükümlülükleri ayrıca değerlendirilmelidir.' },
      { question: 'GA4 ile Google Ads sayıları neden farklıdır?', answer: 'Atıf modeli, raporlama zamanı, kimlik, izin, dönüşüm penceresi ve veri işleme kuralları farklı olabilir. Önce aynı olay tanımı ve saat dilimiyle karşılaştırın.' },
      { question: 'Kurulumun doğru çalıştığını nasıl doğrularım?', answer: 'Tag Assistant ve GA4 DebugView ile teknik akışı, gerçek form/sipariş kaydıyla iş sonucunu, yinelenen olay kontrolüyle de sayım doğruluğunu test edin.' }
    ],
    sections: [
      { id: 'olcum-plani', label: 'Adım 01', heading: 'Araçtan önce ölçüm sözlüğünü yazın.', paragraphs: ['Her tıklamayı dönüşüm yapmayın. Satın alma, gönderilmiş ve doğrulanmış talep ya da gerçekleşen randevu gibi iş sonucuna yakın olayları birincil; sayfa görüntüleme ve kaydırma gibi davranışları ikincil ayırın.', 'Her olay için ad, tetik koşulu, parametre, veri sahibi, saklama amacı ve hangi kararı desteklediğini yazın. E-posta, telefon ve serbest metin gibi kişisel verileri GA4’e göndermeyin.'], table: { headers: ['Alan', 'Örnek karar', 'Kontrol'], rows: [['Olay', 'generate_lead', 'Başarılı sunucu yanıtından sonra tek kez'], ['Parametre', 'form_type', 'İzinli, sınırlı değer sözlüğü'], ['Birincil sonuç', 'Nitelikli talep', 'CRM’de ayrıca doğrulanır'], ['Veri kalitesi', 'Tekilleştirme', 'Aynı event_id iki kez sayılmıyor']] } },
      { id: 'mimari-secimi', label: 'Adım 02', heading: 'İstemci ve sunucu mimarisini ihtiyaca göre seçin.', paragraphs: ['İstemci tarafı GTM tarayıcıda çalışır ve kurulumu daha basittir. Server-side GTM, web container’ından veya sunucudan gelen istekleri bir server container üzerinden ilgili hedeflere yönlendirir. Birinci taraf alan adı, istek doğrulama ve veri minimizasyonu gibi kontroller sağlayabilir.', 'Buna karşılık bulut barındırma, özel alan adı, güncelleme, güvenlik, loglama ve hata izleme sorumluluğu getirir. Yalnız “daha çok veri toplar” vaadiyle kurulması doğru kapsam kararı değildir.'], checklist: ['Ölçüm hedefi server-side mimari gerektiriyor.', 'Barındırma ve trafik maliyeti kabul edildi.', 'Container erişimleri en az ayrıcalıkla sınırlandı.', 'İstemci tarafından gelen istekler doğrulanıyor.', 'Gereksiz parametreler hedeflere gönderilmeden temizleniyor.', 'Hata ve gecikme için izleme sahibi belirlendi.'] },
      { id: 'kurulum-ve-test', label: 'Adım 03', heading: 'Kurulumu test ortamından gerçek iş kaydına kadar doğrulayın.', ordered: ['GA4 mülkü, web veri akışı, saat dilimi ve veri saklama ayarlarını gerçek işletme bilgileriyle oluşturun.', 'Web container’da yalnız ölçüm planındaki etiketleri ve tetikleyicileri kurun.', 'Server container kullanılıyorsa resmî kurulum yöntemini, özel alt alan adını ve HTTPS’i yapılandırın.', 'Tag Assistant ile istemci isteğini, server preview ile client/tag eşleşmesini ve GA4 DebugView ile gelen olayı izleyin.', 'Form, ödeme veya CRM kaydıyla analitik olayını aynı test kimliği ve zaman damgası üzerinden karşılaştırın.', 'Tarayıcı ve sunucu aynı olayı gönderiyorsa ortak event_id ve platformun önerdiği tekilleştirme yöntemini uygulayın.'] },
      { id: 'olcum-yonetimi', label: 'Adım 04', heading: 'Kurulumdan sonra veri kalitesi ve izin durumunu işletin.', paragraphs: ['Ölçüm zamanla bozulabilir: form alanı değişir, teşekkür sayfası kaldırılır, ödeme sağlayıcısı yönlendirmeyi değiştirir veya etiket iki kez yüklenir. Her sürümde kritik olaylar için otomatik ya da tekrarlanabilir kabul testi çalıştırın.', 'GA4, reklam platformu ve CRM farklı kapsamlarla sayı üretir. Raporu tek bir paneli mutlak gerçek ilan etmek yerine kaynak, tanım, atıf penceresi ve bilinen veri kaybıyla birlikte okuyun.'], callout: '<a href="/araclar/utm-link-olusturucu/">UTM link oluşturucu</a> ile kampanya adlandırmasını tutarlı kurun; UTM parametrelerinin hatalı iç bağlantılarda kullanılmamasına dikkat edin.' }
    ],
    sources: [
      { label: 'Google Analytics — GA4 kurulum rehberi', url: 'https://support.google.com/analytics/answer/9304153' },
      { label: 'Google Tag Manager — Server-side tagging kurulumu', url: 'https://developers.google.com/tag-platform/tag-manager/server-side' },
      { label: 'Google Tag Platform — Server-side tagging temelleri', url: 'https://developers.google.com/tag-platform/learn/sst-fundamentals' },
      { label: 'Google Analytics — DebugView', url: 'https://support.google.com/analytics/answer/7201382' },
      { label: 'Google Analytics — Kişisel olarak tanımlanabilir bilgi politikası', url: 'https://support.google.com/analytics/answer/6366371' }
    ]
  },
  {
    slug: 'webmcp-ai-ajanlari-icin-web-sitesi-rehberi',
    metaTitle: 'WebMCP Nedir? AI Ajanlarına Hazır Web Sitesi | Narvals',
    title: 'WebMCP nedir? AI ajanları için web sitesi hazırlama rehberi',
    description: 'Chrome WebMCP origin trial, agent dostu formlar, Google Preferred Sources ve güvenli AI müşteri yolculuğunu uygulama sınırlarıyla öğrenin.',
    keywords: ['WebMCP nedir', 'AI ajanı web sitesi', 'agentic web', 'Google Preferred Sources', 'AI müşteri yolculuğu'],
    category: 'SEO & GEO',
    published: '2026-08-30T13:00:00+03:00',
    modified: '2026-08-30T13:00:00+03:00',
    readingTime: 10,
    answer: 'WebMCP, web sitelerinin form ve JavaScript işlevlerini tarayıcı içindeki yapay zekâ ajanlarına ad, açıklama ve yapılandırılmış parametrelerle sunmasını amaçlayan deneysel bir web standardıdır. Chrome 149 origin trial aşamasındadır; Google sıralama sinyali değildir. Doğru kullanıldığında bir ajanın hesaplama, karşılaştırma veya talep hazırlama görevini daha güvenilir tamamlamasına yardımcı olabilir.',
    takeaways: [
      'WebMCP henüz deneysel bir origin trial teknolojisidir; standartlaşacağı veya sıralamayı artıracağı garanti değildir.',
      'Standart HTML formları toolname ve tooldescription açıklamalarıyla progressive enhancement olarak ajanlara tanıtılabilir.',
      'Durum değiştiren veya veri gönderen işlemlerde açık kullanıcı onayı, doğrulama ve prompt injection savunması gerekir.',
      'Google Preferred Sources, WebMCP’den ayrıdır ve okurun seçtiği yayıncıyı kendi Search ve AI deneyiminde öne çıkarabilir.',
      'Başarı; tool activation, tamamlanan görev, nitelikli iletişim ve gerçek müşteri sonucuyla ölçülmelidir.'
    ],
    about: ['WebMCP', 'AI ajanları', 'Agentic web', 'Google Preferred Sources'],
    related: ['google-ai-aramalari-icin-geo-rehberi', 'google-ve-ai-botlari-icin-site-indeksleme-rehberi', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'AI ajanlarına hazır web altyapısını inceleyin',
    faq: [
      { question: 'WebMCP Google sıralamasını artırır mı?', answer: 'Buna dair resmî bir sıralama sinyali veya nedensel kanıt yoktur. WebMCP, tarayıcı içindeki AI ajanlarının site işlevlerini daha güvenilir kullanmasını hedefler; SEO’nun yerine geçmez.' },
      { question: 'WebMCP bugün bütün tarayıcılarda çalışır mı?', answer: 'Hayır. Ağustos 2026 itibarıyla Chrome origin trial aşamasındadır ve taslak değişebilir. Ek açıklamalar desteklemeyen tarayıcılarda normal HTML form davranışını bozmamalıdır.' },
      { question: 'WebMCP ile form otomatik gönderilmeli mi?', answer: 'Hassas, mali veya veri gönderen işlemlerde otomatik gönderim varsayılan olmamalıdır. Kullanıcı formu ve değerleri görmeli, son eylemi doğrulamalı ve sunucu tarafı kontroller devam etmelidir.' },
      { question: 'Google Preferred Sources ne sağlar?', answer: 'Bir kullanıcı sitenizi tercih edilen kaynak seçerse içerikleriniz o kullanıcı için Top Stories, AI Overviews ve AI Mode içinde tercih rozetiyle daha görünür olabilir. Bu genel sıralama garantisi değildir.' }
    ],
    sections: [
      {
        id: 'webmcp-nedir',
        label: 'Deneysel standart',
        heading: 'WebMCP, görünür arayüz ile AI ajanı arasında yapılandırılmış bir sözleşme kurar.',
        paragraphs: [
          'Tarayıcı ajanları bugün ekran görüntüsü, DOM ve erişilebilirlik ağacından butonları ve alanları tahmin ederek işlem yapabilir. WebMCP, sitenin desteklediği görevi açık bir araç adı, kısa açıklama ve JSON Schema parametreleriyle tarayıcıya bildirmeyi amaçlar.',
          'Declarative API standart HTML formlarına `toolname`, `tooldescription` ve gerektiğinde alan açıklamaları ekler. Destekleyen tarayıcı formu görünür tutar ve alanları doldurabilir. Desteklemeyen tarayıcı bu özel nitelikleri yok saydığı için form normal biçimde çalışmaya devam eder.'
        ],
        table: {
          headers: ['Katman', 'İnsan deneyimi', 'Ajan deneyimi'],
          rows: [
            ['Standart form', 'Etiketleri okuyup değerleri girer', 'DOM ve erişilebilirlik ağacını yorumlar'],
            ['WebMCP açıklaması', 'Form görünür kalır', 'Görevin adı ve parametre sözleşmesini alır'],
            ['Kullanıcı onayı', 'Sonucu veya gönderimi kontrol eder', 'İzin ve onay sınırına uyar'],
            ['Sunucu doğrulaması', 'Hata ve başarı mesajını görür', 'Yalnız doğrulanmış sonucu alır']
          ]
        }
      },
      {
        id: 'uygulama-stratejisi',
        label: 'Uygulama',
        heading: 'Önce salt okunur hesaplama ve karşılaştırma araçlarıyla başlayın.',
        paragraphs: [
          'En düşük riskli başlangıç; tarayıcıda çalışan bütçe, ROAS, dönüşüm, teklif karşılaştırma ve site kontrolü gibi görevlerdir. Narvals araçlarındaki 14 standart form WebMCP açıklamalarıyla işaretlendi; otomatik gönderim açılmadı ve mevcut kullanıcı arayüzü yetkili kontrol yüzeyi olarak korundu.',
          'İletişim, rezervasyon, satın alma veya hesap değişikliği gibi durum değiştiren işlemler daha yüksek risklidir. Bu görevlerde tool çağrısı doğrudan iş sonucu üretmemeli; kullanıcıya özet ve son onay gösterilmeli, kimlik/izin ve sunucu doğrulaması yeniden yapılmalıdır.'
        ],
        checklist: [
          'Araç adı 30 karakteri geçmeyen, tek görevi anlatan kararlı bir fiil içeriyor.',
          'Açıklama ne yaptığını ve yapmadığını kısa biçimde söylüyor.',
          'Form alanlarının görünür label değerleri var ve aynı parametre adı tekrar kullanılmıyor.',
          'Hesaplama sonucu metin olarak görünür; yalnız renk veya animasyona bağlı değil.',
          'Veri gönderen eylem kullanıcı onayı olmadan tamamlanmıyor.',
          'Ajan çağrısı da normal kullanıcıyla aynı doğrulama, hız sınırı ve güvenlik kontrollerinden geçiyor.'
        ]
      },
      {
        id: 'preferred-sources',
        label: 'Yeni Google kanalı',
        heading: 'Preferred Sources, geri dönen okuyucuyla Google arasında doğrudan tercih sinyali kurar.',
        paragraphs: [
          'Google Ağustos 2026’da yayıncıların sayfalarına Preferred Sources düğmesi veya deeplink ekleyebileceğini duyurdu. Kullanıcı bir domaini tercih ettiğinde o kaynağın uygun içerikleri kullanıcıya özel Top Stories, AI Overviews ve AI Mode yüzeylerinde tercih rozetiyle öne çıkabilir.',
          'Bu özellik siteye ilk kez müşteri getiren genel bir sıralama kısayolu değildir. Önce içerikten gerçek değer alan okurun Narvals’ı yeniden bulmasını kolaylaştıran bir sadakat ve yeniden keşif katmanıdır. Bu nedenle bağlantı yalnız rehberler ve konu merkezlerinde, açık kullanıcı eylemi olarak sunulur.'
        ],
        callout: 'Preferred Sources genel algoritmayı manipüle etmez; etkisi seçim yapan kullanıcının kişiselleştirilmiş deneyimiyle sınırlıdır.'
      },
      {
        id: 'guvenlik-ve-olcum',
        label: 'Deney tasarımı',
        heading: 'Deneysel teknoloji yalnız ölçülebilir hipotez ve geri alma planıyla yayına alınmalıdır.',
        paragraphs: [
          'Chrome, WebMCP araçlarının dolaylı prompt injection ve yetki kötüye kullanımına açık olabileceğini özellikle vurgular. Kullanıcı veya dış kaynaktan gelen metin güvenilir talimat sayılmamalı; araçlar en az yetkiyle sınırlandırılmalı ve açıklamalar kısa tutulmalıdır.',
          'WebMCP aktivasyonu sıralama metriği değildir. Deney, ajan tarafından alan doldurma, kullanıcının sonucu onaylama, araç sonucundan iletişime geçiş ve CRM’de nitelikli müşteri sonucu gibi basamaklarla ölçülmelidir. Preferred Sources için de tıklama olayı, geri dönen okur ve Search Console AI görünürlüğü ayrı izlenmelidir.'
        ],
        table: {
          headers: ['Hipotez', 'Öncü metrik', 'İş metriği', 'Durdurma koşulu'],
          rows: [
            ['Ajan hesaplayıcıyı doğru kullanır', 'Tool activation ve geçerli sonuç', 'Sonuçtan nitelikli iletişim', 'Yanlış alan eşleme veya kullanıcı şaşkınlığı'],
            ['Tercih edilen kaynak bağlantısı kullanılır', 'Google deeplink tıklaması', 'Geri dönen ilgili okur', 'CTA ana görevi gölgeler'],
            ['AI referral daha niteliklidir', 'AI kaynaklı oturum', 'Nitelikli talep oranı', 'Düşük kalite veya spam artışı']
          ]
        }
      }
    ],
    sources: [
      { label: 'Chrome for Developers — WebMCP ve AI ajanları', url: 'https://developer.chrome.com/docs/ai/agents' },
      { label: 'Chrome for Developers — WebMCP Declarative API', url: 'https://developer.chrome.com/docs/ai/webmcp/declarative-api' },
      { label: 'Chrome for Developers — WebMCP güvenlik rehberi', url: 'https://developer.chrome.com/docs/ai/webmcp/secure-tools' },
      { label: 'Google Search Central — Preferred Sources yayıncı rehberi', url: 'https://developers.google.com/search/docs/appearance/preferred-sources' },
      { label: 'Google — Search, Discover ve News kişiselleştirme duyurusu', url: 'https://blog.google/products-and-platforms/products/search/personalize-search-discover-news/' },
      { label: 'Google — Üretken AI aramalarında optimizasyon rehberi', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' }
    ]
  }
];
