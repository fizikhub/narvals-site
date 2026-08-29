import { newBlogPosts } from './seo-growth-posts.mjs';
import { searchIntentPosts } from './search-intent-posts.mjs';
import { commercialIntentPosts } from './commercial-intent-posts.mjs';
import { buyerIntentPosts } from './buyer-intent-posts.mjs';
import { problemIntentPosts } from './problem-intent-posts.mjs';
import { conversionIntentPosts } from './conversion-intent-posts.mjs';

export const blogPosts = [
  ...searchIntentPosts,
  ...commercialIntentPosts,
  ...buyerIntentPosts,
  ...problemIntentPosts,
  ...conversionIntentPosts,
  {
    slug: 'kurumsal-web-sitesi-briefi-nasil-hazirlanir',
    metaTitle: 'Kurumsal Web Sitesi Briefi Nasıl Hazırlanır? | Narvals',
    title: 'Kurumsal web sitesi briefi nasıl hazırlanır?',
    description: 'Kurumsal web sitesi projesinde hedefi, kapsamı, içeriği, entegrasyonları ve başarı ölçütlerini netleştiren uygulanabilir brief rehberi.',
    keywords: ['web sitesi briefi', 'kurumsal web sitesi', 'web tasarım süreci', 'web proje kapsamı'],
    category: 'Web & UX',
    published: '2026-08-21T09:00:00+03:00',
    modified: '2026-08-21T09:00:00+03:00',
    readingTime: 9,
    answer: 'İyi bir web sitesi briefi renk veya sayfa sayısıyla başlamaz. İş hedefini, hedef kullanıcıyı, kullanıcının tamamlaması gereken ana eylemi, gerekli içerik ve kanıtları, teknik bağlantıları, kapsam dışını ve başarı ölçümünü aynı belgede netleştirir. Aşağıdaki soru seti Narvals Labs’ın editoryal proje çerçevesidir.',
    takeaways: [
      'Brief çözümü tarif etmekten önce problemi sınırlar.',
      'İçerik sahibi ve onay akışı takvim kadar önemlidir.',
      '“Şimdi, sonra, kapsam dışı” ayrımı bütçe sürprizlerini azaltır.',
      'Başarı ölçütü yayından önce tanımlanır.'
    ],
    about: ['Kurumsal web sitesi', 'Web tasarım briefi', 'İçerik mimarisi'],
    related: ['web-sitesi-teknik-seo-kontrol-listesi', 'e-ticaret-altyapisi-nasil-secilir', 'web-sitesi-maliyeti-nasil-hesaplanir'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Web tasarım ve UX hizmetini inceleyin',
    sections: [
      {
        id: 'briefin-gorevi',
        label: 'Başlangıç noktası',
        heading: 'Briefin görevi tasarımı tarif etmek değil, kararı kolaylaştırmaktır.',
        paragraphs: [
          '“Modern, şık ve mobil uyumlu bir site istiyoruz” bir beklentidir; fakat proje kararı değildir. Aynı görünüm hedefi, bir katalog sitesiyle bir teklif toplama sitesi için bambaşka içerik ve teknik yapı gerektirir. Brief bu belirsizliği işletme hedefi, kullanıcı ihtiyacı ve ölçülebilir sonuç üzerinden azaltır.',
          'Belgenin sonunda ajansın veya ürün ekibinin şu üç soruya aynı cevabı verebilmesi gerekir: Site kimin hangi problemini çözecek, ziyaretçi hangi eylemi tamamlayacak ve bunun çalıştığını hangi veriyle anlayacağız?'
        ],
        callout: 'Kısa test: Briefi okuyan biri logo ve renkleri görmeden sitenin işlevini anlatabiliyorsa temel doğru kurulmuştur.'
      },
      {
        id: 'on-karar-sorusu',
        label: 'Karar seti',
        heading: 'Briefte cevaplanması gereken 10 soru.',
        ordered: [
          '<strong>İş hedefi nedir?</strong> Daha fazla nitelikli talep, doğrudan satış, randevu, bayi başvurusu veya destek yükünü azaltma gibi tek birincil hedef seçin.',
          '<strong>Öncelikli kullanıcı kimdir?</strong> “Herkes” yerine karar verici rolünü, bağlamını, sorusunu ve itirazını tarif edin.',
          '<strong>Ana eylem nedir?</strong> Teklif isteme, ürün satın alma, randevu alma, arama veya dosya indirme gibi tamamlanabilir bir eylem belirleyin.',
          '<strong>Kullanıcı neden size inanmalı?</strong> Gerçek ekip, süreç, yetkinlik, ürün detayı, politika, müşteri izni bulunan vaka veya doğrulanabilir sonuç gibi kanıtları listeleyin.',
          '<strong>Hangi içerikler hazır?</strong> Metin, görsel, video, ürün verisi, çeviri ve yasal metinlerin sahibi ile durumunu yazın.',
          '<strong>Hangi sayfalar gerçekten gerekli?</strong> Her URL için tek bir kullanıcı sorusu ve tek bir görev tanımlayın.',
          '<strong>Hangi sistemlerle konuşmalı?</strong> CRM, ödeme, kargo, e-posta, takvim, analitik veya mevcut panel bağlantılarını belirtin.',
          '<strong>Ne korunacak veya taşınacak?</strong> Mevcut URL, içerik, arama performansı, müşteri hesabı ve veri aktarımı ihtiyaçlarını çıkarın.',
          '<strong>Kim karar verecek?</strong> İçerik sağlayan, geri bildirim veren ve son onayı veren kişileri ayırın.',
          '<strong>Başarı nasıl ölçülecek?</strong> Yalnız trafik değil; tamamlanan form, nitelikli görüşme, satış veya işlem başarısı gibi iş metriği seçin.'
        ]
      },
      {
        id: 'icerik-envanteri',
        label: 'İçerik hazırlığı',
        heading: '“İçerikler hazır” cümlesini bir envantere dönüştürün.',
        paragraphs: [
          'İçerik gecikmesi çoğu projede tasarım sorunu gibi görünür. Oysa sorun çoğunlukla hangi bilginin eksik olduğunun, kimin üreteceğinin ve ne zaman onaylanacağının bilinmemesidir. Her içerik parçasını görünür bir duruma bağlayın.'
        ],
        table: {
          headers: ['İçerik', 'Sorumlu', 'Durum', 'Kabul ölçütü'],
          rows: [
            ['Hizmet açıklamaları', 'İş birimi + editör', 'Taslak / onaylı', 'Kapsam, sınır ve sonraki adım açık'],
            ['Ekip ve marka kanıtları', 'Marka sorumlusu', 'İzin bekliyor', 'Ad, rol ve kullanım izni doğrulanmış'],
            ['Görseller', 'Marka / prodüksiyon', 'Eksik / hazır', 'Yeterli çözünürlük, kullanım hakkı ve alt metin amacı var'],
            ['Yasal metinler', 'Yetkili hukuk danışmanı', 'İncelemede', 'Gerçek veri akışı ve hedef pazarla uyumlu'],
            ['Entegrasyon bilgileri', 'Teknik sorumlu', 'Doğrulanacak', 'Hesap sahibi, erişim ve test ortamı belirli']
          ]
        }
      },
      {
        id: 'kapsam-siniri',
        label: 'Kapsam kontrolü',
        heading: 'Kapsamı “şimdi, sonra ve kapsam dışı” olarak üçe ayırın.',
        paragraphs: [
          'Her fikri ilk sürüme almak kaliteyi artırmaz; çoğu zaman kritik akışın test edilmesini geciktirir. İlk sürüm, kullanıcının ana görevi baştan sona tamamlayabildiği en küçük güvenilir kapsam olmalıdır.',
          '“Sonra” listesi unutulan işler deposu değildir. Her madde için hangi veri veya koşul oluşursa yeniden değerlendirileceğini yazın. “Kapsam dışı” ise yanlış beklentiyi açıkça kapatır; örneğin içerik üretimi, fotoğraf çekimi, çoklu dil veya CRM lisansı teklife dahil değilse baştan görünür olur.'
        ],
        list: [
          '<strong>Şimdi:</strong> Ana kullanıcı görevini tamamlatan sayfa, içerik ve entegrasyonlar.',
          '<strong>Sonra:</strong> İlk kullanım verisiyle gerekliliği doğrulanacak geliştirmeler.',
          '<strong>Kapsam dışı:</strong> Bu proje tarafından teslim edilmeyen hizmet, lisans ve sorumluluklar.'
        ]
      },
      {
        id: 'teslim-briefi',
        label: 'Teslim formatı',
        heading: 'Ajansa göndermeden önce brief kontrolü.',
        checklist: [
          'Tek birincil iş hedefi ve öncelikli kullanıcı yazıldı.',
          'Ana dönüşüm eylemi ile başarı ölçütü eşleştirildi.',
          'Zorunlu sayfa ve içerikler, “olsa iyi olur” listesinden ayrıldı.',
          'İçerik, görsel ve onay sorumluları isim veya rol olarak belirlendi.',
          'Mevcut URL, veri ve entegrasyonların korunma ihtiyacı yazıldı.',
          'Teknik, yasal, takvimsel ve bütçesel sınırlar açıklandı.',
          'İlk sürüm, sonraki faz ve kapsam dışı maddeler ayrıldı.',
          'Tekliflerin hangi ortak ölçütlerle karşılaştırılacağı belirlendi.'
        ],
        callout: 'Bu kontrol tamamlandığında teklifleri yalnız toplam fiyatla değil; kapsam, sorumluluk, risk ve ölçüm planıyla karşılaştırabilirsiniz.'
      }
    ],
    sources: [
      { label: 'Google — İnsan odaklı ve güvenilir içerik rehberi', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
      { label: 'W3C WAI — Web projelerinde erişilebilirliği planlama ve yönetme', url: 'https://www.w3.org/WAI/planning-and-managing/' }
    ]
  },
  {
    slug: 'web-sitesi-teknik-seo-kontrol-listesi',
    metaTitle: 'Web Sitesi Teknik SEO Kontrol Listesi | Narvals Labs',
    title: 'Web sitesi teknik SEO kontrol listesi: yayından önce ve sonra',
    description: 'Tarama, index, canonical, yönlendirme, sitemap, yapılandırılmış veri, performans ve ölçümü kapsayan uygulamalı teknik SEO kontrol listesi.',
    keywords: ['teknik SEO kontrol listesi', 'site yayına alma', 'canonical', 'sitemap'],
    category: 'SEO & GEO',
    published: '2026-08-21T09:10:00+03:00',
    modified: '2026-08-21T09:10:00+03:00',
    readingTime: 12,
    answer: 'Teknik SEO kontrolü, birkaç meta etiketi eklemekten ibaret değildir. Arama motorunun doğru URL’yi 200 yanıtıyla bulabilmesi, içeriği render edebilmesi, kopyaları tek canonical altında birleştirebilmesi, sayfalar arasında ilerleyebilmesi ve değişiklikleri güvenilir biçimde izleyebilmesi gerekir.',
    takeaways: [
      'Önce HTTP yanıtı ve indexlenebilirlik, sonra görünüm ayrıntıları gelir.',
      'Canonical bir yönlendirme değildir; sinyaldir.',
      'Sitemap yalnız canonical ve indexlenebilir URL’leri içermelidir.',
      'Kontrol yayın gününde bitmez; log ve Search Console ile sürer.'
    ],
    about: ['Teknik SEO', 'Google Search', 'Web sitesi yayını'],
    related: ['google-ai-aramalari-icin-geo-rehberi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-maliyeti-nasil-hesaplanir'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Teknik SEO temelli web hizmetini inceleyin',
    sections: [
      {
        id: 'oncelik-sirasi',
        label: 'Doğru sıra',
        heading: 'Teknik SEO’yu altı geçiş kapısı olarak yönetin.',
        paragraphs: [
          'Bir sayfanın başlığı kusursuz olsa bile sunucu 500 döndürüyorsa, robots ile engelleniyorsa veya canonical başka URL’yi gösteriyorsa sonraki optimizasyonların etkisi sınırlı kalır. Kontrol sırasını “erişim → tarama → index → anlam → deneyim → ölçüm” olarak kurmak hata ayıklamayı hızlandırır.'
        ],
        table: {
          headers: ['Kapı', 'Temel soru', 'Kanıt'],
          rows: [
            ['Erişim', 'Doğru URL gerçek içerikle 200 dönüyor mu?', 'HTTP kontrolü ve sunucu logu'],
            ['Tarama', 'Bot HTML, CSS, JS ve görsellere erişebiliyor mu?', 'robots testi ve canlı URL testi'],
            ['Index', 'Canonical, noindex ve kopya sinyalleri tutarlı mı?', 'URL Inspection ve index raporu'],
            ['Anlam', 'Başlık, ana içerik, linkler ve schema aynı konuyu mu anlatıyor?', 'Render edilmiş HTML ve yapılandırılmış veri testi'],
            ['Deneyim', 'Sayfa mobilde hızlı, okunur ve tamamlanabilir mi?', 'Gerçek cihaz, CWV ve erişilebilirlik testi'],
            ['Ölçüm', 'Görünürlük iş sonucuna bağlanıyor mu?', 'Search Console, analitik ve dönüşüm olayı']
          ]
        }
      },
      {
        id: 'tarama-index',
        label: 'Kapı 01–03',
        heading: 'Erişim, tarama ve index kontrolü.',
        checklist: [
          'Canonical URL HTTPS üzerinde ve tek tercih edilen hostta 200 yanıtı veriyor.',
          'HTTP, alternatif host, /index.html ve slash varyasyonları tek adımda 301 veya 308 ile canonical’a gidiyor.',
          'Olmayan URL gerçek 404 veya 410 döndürüyor; ana sayfa kopyasıyla 200 vermiyor.',
          'robots.txt gerekli HTML, CSS, JS ve görsel yollarını yanlışlıkla engellemiyor.',
          'Indexlenmesi gereken sayfada noindex, nosnippet veya engelleyici X-Robots-Tag bulunmuyor.',
          'XML sitemap yalnız 200 dönen, canonical ve indexlenebilir URL’leri içeriyor.',
          'Sitemap içindeki lastmod yalnız önemli içerik değiştiğinde güncelleniyor.',
          'Dahili bağlantılar gerçek &lt;a href&gt; öğeleriyle ve açıklayıcı metinle kuruluyor.'
        ],
        callout: 'robots.txt bir URL’nin indexlenmesini kesin olarak engelleme aracı değildir. Gizli veya index dışı içerik için doğru erişim ve noindex yöntemi birlikte planlanmalıdır.'
      },
      {
        id: 'canonical-tasima',
        label: 'URL yönetimi',
        heading: 'Canonical, yönlendirme ve site taşımasını birbirine karıştırmayın.',
        paragraphs: [
          'Canonical, benzer sayfalar arasında tercih edilen URL’yi bildiren bir sinyaldir; kullanıcıyı taşımaz. Kalıcı URL değişikliğinde eski adresten yenisine sunucu yönlendirmesi gerekir. Dahili link, sitemap, hreflang ve canonical da yeni URL’de birleşmelidir.',
          'Yeniden tasarımda eski URL envanteri çıkarılmadan rota değiştirmek, yıllar içinde biriken dış bağlantı ve sorgu sinyallerini gereksiz yere dağıtabilir. Her eski URL için “koru, bire bir yönlendir veya 410 ile kaldır” kararı verin; alakasız sayfaları topluca ana sayfaya yönlendirmeyin.'
        ],
        table: {
          headers: ['Durum', 'Doğru araç', 'Kontrol'],
          rows: [
            ['Aynı içeriğin parametreli/kopya URL’si', 'rel=canonical', 'Canonical hedef 200 ve indexlenebilir'],
            ['Kalıcı URL değişikliği', '301/308 yönlendirme', 'Tek sıçrama, yeni URL’ye dahili link'],
            ['Geçici bakım veya taşıma', '302/307 veya 503 bağlama göre', 'Süre ve cache davranışı kontrolü'],
            ['Kalıcı kaldırılan içerik', '404/410', 'Sitemap ve dahili linklerden çıkarma']
          ]
        }
      },
      {
        id: 'sayfa-anlami',
        label: 'Kapı 04',
        heading: 'Her indexlenebilir URL tek birincil arama niyetine sahip olmalı.',
        list: [
          'Benzersiz ve açıklayıcı <strong>title</strong>; sayfanın görünen ana başlığıyla aynı vaadi taşır.',
          'Bir adet anlamlı <strong>H1</strong>; alt başlıklar içerik ilişkisini bozmadan sırayı kurar.',
          'Ana cevap, yalnız görselde veya JavaScript sonrası değil HTML içinde bulunur.',
          'İç link metni “buraya tıklayın” yerine hedef sayfanın konusunu açıklar.',
          'Görsel alt metni, görselin o bağlamdaki işlevini anlatır; dekoratif görseller boş alt kullanır.',
          'Yapılandırılmış veri sayfada görünür olan içeriği doğru türle tarif eder; sahte puan, yorum veya işletme verisi eklemez.',
          'Meta description benzersiz bir sonuç özeti sunar; sıralama garantisi veya anahtar kelime yığını içermez.'
        ]
      },
      {
        id: 'deneyim-performans',
        label: 'Kapı 05',
        heading: 'Performansı tek Lighthouse puanına indirgemeyin.',
        paragraphs: [
          'Laboratuvar testi tekrarlanabilir hata ayıklama sağlar; gerçek kullanıcı verisi ise farklı cihaz, ağ ve etkileşim koşullarını gösterir. İkisini birlikte kullanın. Ana içeriği render etmeyi geciktiren kaynakları, boyutsuz görselleri, font yükünü ve kullanılmayan JavaScript’i sayfa şablonu düzeyinde çözün.',
          'Core Web Vitals eşiği tek başına “iyi deneyim” demek değildir. Klavye kullanımı, görünür odak, form etiketleri, hata mesajları, okunabilir kontrast ve mobilde tamamlanabilir görevler ayrıca test edilmelidir.'
        ],
        checklist: [
          'Ana görsel doğru boyutta, modern formatta ve gerekiyorsa yüksek öncelikle yükleniyor.',
          'Görsellerin width ve height değerleri layout kaymasını azaltacak biçimde tanımlı.',
          'Kritik içerik üçüncü taraf betik veya kullanıcı etkileşimi beklemiyor.',
          'Mobil menü, form, tablo ve CTA 320 px genişlikte kullanılabiliyor.',
          'Klavye odağı görünür; başlık ve landmark yapısı ekran okuyucu gezinmesini destekliyor.',
          'Çerez, sohbet veya reklam katmanı ana içeriği kapatmıyor ve etkileşimi geciktirmiyor.'
        ]
      },
      {
        id: 'yayin-sonrasi',
        label: 'Kapı 06',
        heading: 'Yayın sonrası 7 günlük gözlem planı.',
        ordered: [
          '<strong>Yayın anı:</strong> Canonical URL, HTTP yanıtı, robots, sitemap ve yapılandırılmış veriyi production ortamında yeniden test edin.',
          '<strong>İlk gün:</strong> Search Console URL Inspection ile ana sayfa ve kritik hizmet sayfalarının canlı testini yapın; sitemap gönderin.',
          '<strong>İlk üç gün:</strong> Sunucu loglarında botların 200/3xx/4xx dağılımını ve beklenmeyen tarama yollarını inceleyin.',
          '<strong>İlk hafta:</strong> Index kapsamı, mobil kullanılabilirlik, gerçek kullanıcı hataları ve dönüşüm olaylarını kontrol edin.',
          '<strong>Her önemli değişiklikte:</strong> Yalnız değişen URL’ler için sitemap lastmod ve gerekiyorsa IndexNow bildirimi güncelleyin.',
          '<strong>Aylık:</strong> Sorgu–sayfa eşleşmesini, iç linkleri ve trafik yerine nitelikli dönüşüm trendini değerlendirin.'
        ]
      }
    ],
    sources: [
      { label: 'Google Search Essentials', url: 'https://developers.google.com/search/docs/essentials' },
      { label: 'Google — Canonical URL belirtme yöntemleri', url: 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls' },
      { label: 'Google — Sitemap oluşturma ve gönderme', url: 'https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap' },
      { label: 'Google — Yapılandırılmış veri genel kuralları', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' },
      { label: 'Google — Core Web Vitals ve laboratuvar/saha ölçümü', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
      { label: 'W3C — WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' }
    ]
  },
  {
    slug: 'google-ai-aramalari-icin-geo-rehberi',
    metaTitle: 'GEO Rehberi: Google AI Aramalarında Görünürlük | Narvals',
    title: 'GEO nedir? Google AI sonuçlarında görünürlük rehberi',
    description: 'GEO, AEO ve AI arama görünürlüğünü teknik SEO, özgün kanıt, marka tutarlılığı, bot erişimi ve ölçüm üzerinden açıklayan güncel rehber.',
    keywords: ['GEO nedir', 'AI arama optimizasyonu', 'Google AI Overviews', 'AEO'],
    category: 'SEO & GEO',
    published: '2026-08-21T09:20:00+03:00',
    modified: '2026-08-23T21:35:00+03:00',
    readingTime: 13,
    answer: 'GEO (generative engine optimization), bir markanın üretken yapay zekâ destekli arama ve yanıt deneyimlerinde bulunabilir, anlaşılabilir ve kaynak gösterilebilir olmasını geliştiren çalışmalara verilen addır. Google açısından bunun temeli ayrı bir hile değil; indexlenebilirlik, alakalı ve özgün içerik, açık marka bilgisi ve iyi sayfa deneyimi gibi SEO esaslarıdır.',
    takeaways: [
      'Google için GEO’nun temeli hâlâ Search indexi ve kalite sistemleridir.',
      'Özel bir AI schema’sı veya zorunlu llms.txt yoktur.',
      'Kolayca kopyalanan özet değil, birinci el kanıt ve özgün karar bilgisi gerekir.',
      'Sıra, kaynak gösterimi, marka anılması ve yapay zekâdan gelen ziyaret ayrı ölçülür.'
    ],
    about: ['Generative Engine Optimization', 'Google AI Overviews', 'AI arama görünürlüğü'],
    related: ['web-sitesi-teknik-seo-kontrol-listesi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Arama temelli web altyapısını inceleyin',
    sections: [
      {
        id: 'geo-seo-iliskisi',
        label: 'Temel tanım',
        heading: 'GEO, SEO’dan kopuk bir “AI için yazma” tekniği değildir.',
        paragraphs: [
          'Google’ın güncel rehberine göre AI Overviews ve AI Mode, çekirdek Search sıralama ve kalite sistemlerine dayanır. Sistem, bir soruyu alt sorgulara ayırabilir ve Search indexindeki alakalı sayfalardan bilgi getirebilir. Bu nedenle sayfa önce taranabilir, indexlenebilir ve snippet göstermeye uygun olmalıdır.',
          'ChatGPT Search, Bing Copilot veya başka yanıt motorlarının tarayıcıları ve kaynak seçimi farklı olabilir. Ortak zemin ise açıktır: Yetkili HTML içerik, sağlam teknik erişim, belirgin konu sahipliği, güncel kaynak ve tutarlı marka varlığı.'
        ],
        table: {
          headers: ['Katman', 'SEO görevi', 'AI görünürlüğüne katkısı'],
          rows: [
            ['Keşif', 'Tarama, index, dahili link, sitemap', 'Kaynak adayının bulunabilmesi'],
            ['Alaka', 'Sorgu niyetini derin karşılayan sayfa', 'Alt sorgularla anlamlı eşleşme'],
            ['Güven', 'Kaynak, yazar/yayıncı, gerçek işletme ve kanıt', 'İddianın doğrulanabilir olması'],
            ['Deneyim', 'Hızlı, erişilebilir ve anlaşılır sayfa', 'Kullanıcının kaynağa geçince görevini tamamlaması'],
            ['Ölçüm', 'Search Console ve dönüşüm analizi', 'Görünürlüğün iş etkisini ayırabilme']
          ]
        }
      },
      {
        id: 'teknik-onkosullar',
        label: 'Teknik temel',
        heading: 'Kaynak gösterilmeden önce kaynak olabilecek bir sayfa kurun.',
        checklist: [
          'Sayfa herkese açık, canonical URL’de 200 yanıtıyla ve ana içerik HTML içinde sunuluyor.',
          'Googlebot ile arama odaklı botlar robots veya WAF tarafından yanlışlıkla engellenmiyor.',
          'Nosnippet gibi önizleme kısıtları görünürlük hedefiyle çelişmiyor.',
          'Başlık, H1, giriş cevabı ve ana metin aynı birincil soruyu karşılıyor.',
          'Sayfanın yayıncısı, yayın/güncelleme tarihi ve kaynakları görünür.',
          'Schema, sayfada görünür gerçek içeriği tekrar ediyor; olmayan kişi, yorum veya sonuç üretmiyor.',
          'Dahili linkler konuyu ana hizmet, karşılaştırma ve ilgili rehberlerle bağlıyor.',
          'Mobil ziyaretçi yapay zekâ sonucundaki bağlantıdan geldiğinde ana cevabı ve sonraki adımı hızla bulabiliyor.'
        ]
      },
      {
        id: 'emtia-olmayan-icerik',
        label: 'İçerik farkı',
        heading: 'Kolayca üretilebilen özet yerine özgün ve doğrulanabilir bilgi sunun.',
        paragraphs: [
          'Bir modelin internetteki ilk birkaç sonucu özetleyerek üretebileceği metin markaya özel değer taşımaz. Ayrışan içerik; gerçek karar ölçütü, uygulanmış yöntem, izinli vaka, özgün veri, açık sınır ve hatalı seçimlerin sonucunu gösterebilir.',
          'Gerçek müşteri verisi veya vaka yoksa uydurmak yerine şeffaf bir karar aracı üretin. Örneğin “özel yazılım iyidir” demek yerine süreç değişkenliği, entegrasyon sayısı, veri sahipliği ve toplam işletme yükünü karşılaştıran matris yayınlayın. Kaynağın değeri kesin sayıdan değil, okuyucunun doğru karar verebilmesinden doğar.'
        ],
        list: [
          '<strong>Birinci el:</strong> İzinli ekran, test yöntemi, süreç çıktısı, ölçüm tanımı ve sınırlamalar.',
          '<strong>Özgün sentez:</strong> Birincil kaynakları gerçek bir iş kararına dönüştüren çerçeve.',
          '<strong>Açık sınır:</strong> Kimin için uygun olmadığı, hangi verinin eksik olduğu ve sonucun neden garanti edilemeyeceği.',
          '<strong>Güncel bakım:</strong> Değişen ürün veya kural için yalnız gerçek güncellemede dateModified kullanımı.'
        ]
      },
      {
        id: 'entity-marka',
        label: 'Marka tutarlılığı',
        heading: 'Markanın kim olduğunu site dışında da doğrulanabilir hâle getirin.',
        paragraphs: [
          'Site içindeki Organization verisi tek başına otorite yaratmaz. İşletme adı, alan adı, iletişim bilgileri, hizmet alanı ve resmî profiller doğrulanmış yüzeylerde tutarlı olmalıdır. Yerel işletmeler için Google Business Profile; ürün satan işletmeler için Merchant Center gibi sahip olunan kaynaklar ayrıca önem taşır.',
          'Gerçek üçüncü taraf mention’ları; ortak vaka, sektör yayını, etkinlik, podcast veya iş ortağı sayfası gibi editoryal bağlamlardan doğmalıdır. Satın alınmış link ağı, sahte yorum veya seri forum mention’ı kısa yol değildir ve güveni zedeler.'
        ],
        callout: 'Eksik gerçek işletme verisini schema ile doldurmayın. Adres, telefon, kurucu, müşteri ve puan yalnız doğrulanabildiğinde yayınlanmalıdır.'
      },
      {
        id: 'geo-mitleri',
        label: 'Yanlış öncelikler',
        heading: 'GEO için yapmanız gerekmeyenler.',
        table: {
          headers: ['İddia', 'Gerçek', 'Doğru öncelik'],
          rows: [
            ['“Google için llms.txt zorunlu”', 'Google bu dosyayı özel bir görünürlük sinyali olarak kullanmadığını belirtiyor.', 'Yetkili HTML, index ve içerik kalitesi'],
            ['“Özel AI schema’sı ekleyin”', 'Google AI özellikleri için özel schema gerekmiyor.', 'Sayfaya uygun ve doğru mevcut schema türü'],
            ['“Her uzun kuyruk sorgu için sayfa açın”', 'Seri benzer sayfalar ölçekli içerik kötüye kullanımına dönüşebilir.', 'Tek niyeti kapsamlı karşılayan konu sahibi URL'],
            ['“Metni küçük AI parçalarına bölün”', 'Zorunlu bir chunk boyutu veya ideal kelime sayısı yok.', 'İnsan için açık başlık, paragraf, liste ve tablo'],
            ['“Daha çok bot açmak sıralamayı artırır”', 'Erişim yalnız uygunluk sağlar; seçilme garantisi vermez.', 'Alaka, özgün değer ve güvenilirlik']
          ]
        }
      },
      {
        id: 'olcum',
        label: 'Başarı sistemi',
        heading: 'AI görünürlüğünü tek bir “kaç kez çıktık?” sayısına indirmeyin.',
        paragraphs: [
          'Üretken yanıtlar kişiye, konuma, zamana ve sorgu biçimine göre değişebilir. Sabit bir prompt seti trend görmek için yararlıdır; fakat bütün görünürlüğün ölçümü değildir. Search Console verisini, AI kaynaklı yönlendirmeleri, marka aramalarını ve nitelikli dönüşümleri birlikte okuyun.',
          'Search Console Generative AI Performance raporu mülkünüzde kullanıma açıldıysa AI Overviews ve AI Mode görünürlüğünü kaynak URL, ülke ve cihaz düzeyinde ayrı inceleyin. Bu raporu normal Web performansının yerine değil, yanına koyun; her mülkte aynı anda görünmeyebileceğini hesaba katın.'
        ],
        table: {
          headers: ['Metrik', 'Ne anlatır?', 'Neyi anlatmaz?'],
          rows: [
            ['Organik gösterim / tıklama', 'Aramadaki sorgu ve sayfa talebi', 'Tüm yapay zekâ kaynak gösterimlerini'],
            ['Yapay zekâ kaynak gösterimi', 'Bir cevapta görünür kaynak seçimini', 'Kaynağın bütün etkisini veya nedeni'],
            ['Marka mention’ı', 'Adın cevapta geçmesini', 'Kullanıcının siteye geldiğini'],
            ['AI referral', 'Kaynak bağlantısından gerçekleşen ziyareti', 'Görünür olup tıklanmayan cevapları'],
            ['Nitelikli dönüşüm', 'Görünürlüğün iş sonucuna yaklaşmasını', 'Tek başına hangi kanalın nedensel etkisini']
          ]
        },
        callout: 'Başlangıç seti: 10 marka, 10 kategori, 10 karşılaştırma ve 10 problem sorgusunu aylık aynı yöntemle örnekleyin; kişiselleştirme ve tarih notunu saklayın.'
      }
    ],
    sources: [
      { label: 'Google — Üretken AI özellikleri için optimizasyon rehberi', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
      { label: 'Google Search Console — Generative AI Performance raporu', url: 'https://support.google.com/webmasters/answer/16984139' },
      { label: 'Google — İnsan odaklı, güvenilir içerik', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'OpenAI — Search botları ve yayıncı erişimi', url: 'https://developers.openai.com/api/docs/bots' },
      { label: 'Bing Webmaster Guidelines', url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a' }
    ]
  },
  {
    slug: 'e-ticaret-altyapisi-nasil-secilir',
    metaTitle: 'E-Ticaret Altyapısı Nasıl Seçilir? | Narvals Labs',
    title: 'E-ticaret altyapısı nasıl seçilir? Dokuz karar sorusu',
    description: 'Hazır platform ile özel geliştirme arasında; katalog, ödeme, kargo, entegrasyon, SEO, veri ve operasyon ihtiyaçlarına göre seçim rehberi.',
    keywords: ['e-ticaret altyapısı', 'e-ticaret sitesi', 'online mağaza', 'e-ticaret platformu'],
    category: 'E-ticaret',
    published: '2026-08-21T09:30:00+03:00',
    modified: '2026-08-23T21:40:00+03:00',
    readingTime: 11,
    answer: 'Doğru e-ticaret altyapısı en çok özelliği olan değil; ürün modelini, sipariş operasyonunu, gerekli entegrasyonları ve büyüme planını kabul edilebilir toplam maliyet ve bağımlılıkla karşılayan sistemdir. Seçim tema demosundan önce gerçek ürün ve sipariş senaryolarıyla yapılmalıdır.',
    takeaways: [
      'Platformu ürün ve sipariş modelinden sonra seçin.',
      'Lisansla birlikte toplam kullanım maliyetini karşılaştırın.',
      'Entegrasyonun varlığını değil veri akışını test edin.',
      'Taşınabilirlik ve çıkış planını sözleşmeden önce sorun.'
    ],
    about: ['E-ticaret altyapısı', 'Online mağaza', 'E-ticaret operasyonu'],
    related: ['hazir-yazilim-mi-ozel-yazilim-mi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/e-ticaret/',
    serviceLabel: 'E-ticaret sitesi hizmetini inceleyin',
    sections: [
      {
        id: 'senaryo-once',
        label: 'Karar ilkesi',
        heading: 'Platform demosuyla değil, uçtan uca sipariş senaryosuyla başlayın.',
        paragraphs: [
          'Bir mağaza ürün ekleyebildiği için işletmenize uygun sayılmaz. Varyant, fiyat, stok, kampanya, kargo, iade, fatura, müşteri hizmeti ve raporlama adımları birlikte çalışmalıdır. Önce en sık siparişi, en zor siparişi ve hata senaryosunu kâğıt üzerinde yürütün.',
          'Örneğin aynı ürünün renk–beden varyantı, şubeye göre stok, kişiye özel üretim veya abonelik modeli farklı veri yapıları ister. Bu farklar sonradan eklentiyle kapatılmaya çalışıldığında yönetim yükü ve hata riski büyüyebilir.'
        ],
        callout: 'Minimum test seti: normal sipariş, indirimli sipariş, stokta son ürün, başarısız ödeme, kısmi iade ve adres değişikliği.'
      },
      {
        id: 'dokuz-soru',
        label: 'Seçim soruları',
        heading: 'Altyapı seçmeden önce cevaplanacak dokuz soru.',
        ordered: [
          '<strong>Ürün veri modeli nedir?</strong> Varyant, paket, abonelik, kişiselleştirme, dijital ürün ve çoklu fiyat kurallarını çıkarın.',
          '<strong>Katalog nasıl keşfedilecek?</strong> Kategori, filtre, arama, karşılaştırma ve ürün ilişkilerini gerçek envanterle test edin.',
          '<strong>Ödeme hangi koşullara uymalı?</strong> Sağlayıcı, para birimi, taksit, iade ve hata akışlarını doğrulayın.',
          '<strong>Kargo ve teslimat nasıl hesaplanır?</strong> Bölge, ağırlık, desi, mağazadan teslim ve takip verisinin sorumlusunu belirleyin.',
          '<strong>Stok nerede ana kayıttır?</strong> Mağaza, ERP, pazar yeri ve fiziksel şubeler arasında kaynağın hangisi olduğunu seçin.',
          '<strong>İçeriği kim yönetecek?</strong> Ürün zenginleştirme, kampanya, landing page ve yetki seviyelerini planlayın.',
          '<strong>Hangi entegrasyonlar zorunlu?</strong> Muhasebe, ERP, CRM, e-posta, destek ve pazar yeri akışlarını veri alanı düzeyinde tanımlayın.',
          '<strong>Ölçek ne demek?</strong> Yalnız trafik değil; SKU, sipariş, ülke, dil, ekip ve operasyon karmaşıklığını tahmin edin.',
          '<strong>Çıkış planı var mı?</strong> Ürün, müşteri, sipariş, içerik, yönlendirme ve medya verisinin dışa aktarım biçimini sorun.'
        ]
      },
      {
        id: 'hazir-ozel',
        label: 'Mimari seçimi',
        heading: 'Hazır platform, ayrık ön yüz (headless) ve özel geliştirmeyi aynı ölçütle karşılaştırın.',
        table: {
          headers: ['Yaklaşım', 'Güçlü olduğu durum', 'Dikkat edilmesi gereken'],
          rows: [
            ['Hazır SaaS platformu', 'Standart ürün ve sipariş akışı, hızlı başlangıç, sınırlı teknik ekip', 'Eklenti bağımlılığı, işlem/lisans maliyeti, veri çıkışı ve özel kural sınırı'],
            ['Açık kaynak paket', 'Kod ve barındırma üzerinde daha fazla kontrol, hazır ekosistem', 'Güncelleme, güvenlik, eklenti uyumu ve operasyon sorumluluğu'],
            ['Ayrık ön yüz (headless)', 'Çok kanallı içerik ve özgün ön yüz ihtiyacı', 'Entegrasyon, önbellek, önizleme ve ekip karmaşıklığı'],
            ['Özel geliştirme', 'İş modelinin rekabet avantajı olan benzersiz kural ve entegrasyonları', 'Ürün yönetimi, bakım, güvenlik ve sürekli geliştirme bütçesi']
          ]
        }
      },
      {
        id: 'toplam-maliyet',
        label: 'Ekonomi',
        heading: 'Aylık lisansla birlikte toplam kullanım maliyetini hesaplayın.',
        paragraphs: [
          'Karşılaştırmaya kurulum, tema veya tasarım, geliştirme, eklenti, işlem komisyonu, barındırma, destek, güvenlik, entegrasyon bakımı, içerik operasyonu ve geçiş maliyetini dahil edin. Ucuz başlayan sistem, iş akışını sürekli manuel müdahaleye zorluyorsa toplamda pahalı olabilir.',
          'Tersine, standart bir mağaza için gereksiz özel geliştirme de ilk yatırım ve bakım yükünü artırır. Ekibin gerçekten yönetebileceği en sade sistemi seçmek, “ileride her şeyi yapabilir” vaadinden çoğu zaman daha değerlidir.'
        ],
        table: {
          headers: ['Maliyet katmanı', 'Sorulacak soru'],
          rows: [
            ['Kurulum', 'Veri hazırlığı, taşıma, tasarım ve entegrasyon kimde?'],
            ['Süreklilik', 'Lisans, işlem, barındırma, bakım ve destek nasıl artıyor?'],
            ['Operasyon', 'Bir ürün/sipariş değişikliği için kaç kişi ve araç gerekiyor?'],
            ['Risk', 'Kritik eklenti kapanırsa veya API değişirse sorumluluk kimde?'],
            ['Çıkış', 'Veri ve URL’leri başka sisteme taşımanın gerçek bedeli nedir?']
          ]
        }
      },
      {
        id: 'seo-veri',
        label: 'Bulunabilirlik',
        heading: 'SEO özelliği kutucuğunu değil, gerçek URL ve ürün çıktısını inceleyin.',
        checklist: [
          'Kategori ve ürün URL’leri kalıcı, okunabilir ve canonical olarak yönetilebilir.',
          'Ürün adı, açıklama, fiyat ve uygunluk ana HTML içinde erişilebilir.',
          'Varyant ve filtre URL’lerinin index politikası kontrol edilebilir.',
          'Product yapılandırılmış verisi görünen ürün bilgisiyle tutarlı üretilebilir.',
          'Stok veya ürün kalktığında 404, yönlendirme ve alternatif ürün davranışı planlanabilir.',
          'Görseller farklı boyutlarda, açıklayıcı alt metinle ve hızlı sunulabilir.',
          'Sitemap büyük katalogda bölünebilir ve yalnız canonical ürünleri içerebilir.',
          'Ürün, sipariş ve analitik verisi güvenilir biçimde dışa aktarılabilir.'
        ]
      },
      {
        id: 'pilot',
        label: 'Satın alma öncesi test',
        heading: 'Sözleşmeden önce gerçek bir sipariş akışını test edin.',
        paragraphs: [
          'Demo mağazadaki örnek ürün yerine kendi en zor beş ürününüzü sisteme girin. Bir kampanya oluşturun, mobilde sipariş verin, başarısız ödeme üretin, iade başlatın ve rapordaki sonuca bakın. Entegrasyon varsa yalnız “bağlanıyor” cevabını değil, alan eşleme ve hata tekrarını görün.',
          'Pilotun çıktısı platformu sevmek değil, bilinmeyenleri azaltmaktır. Kritik bir kural desteklenmiyorsa geçici manuel çözümün sahibi, süresi ve maliyeti açıkça yazılmalıdır.'
        ]
      }
    ],
    sources: [
      { label: 'Google — E-ticaret sitesi yapısı rehberi', url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure' },
      { label: 'Google — Product yapılandırılmış verisi', url: 'https://developers.google.com/search/docs/appearance/structured-data/product' },
      { label: 'W3C — WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' }
    ]
  },
  {
    slug: 'hazir-yazilim-mi-ozel-yazilim-mi',
    metaTitle: 'Hazır Yazılım mı, Özel Yazılım mı? Karar Rehberi | Narvals',
    title: 'Hazır yazılım mı, özel yazılım mı? Karar matrisi',
    description: 'Süreç uyumu, entegrasyon, veri sahipliği, toplam maliyet ve değişim hızına göre hazır ürün ile özel yazılım arasında seçim rehberi.',
    keywords: ['hazır yazılım mı özel yazılım mı', 'özel yazılım', 'SaaS', 'yazılım seçimi'],
    category: 'Özel yazılım',
    published: '2026-08-21T09:40:00+03:00',
    modified: '2026-08-23T21:41:00+03:00',
    readingTime: 10,
    answer: 'Hazır yazılım, süreç standart ve ürünün sunduğu kurallara uyabiliyorsa genellikle daha hızlı ve düşük riskli başlangıçtır. Özel yazılım; işletmeye özgü kurallar rekabet avantajı yaratıyor, manuel köprüler kalıcı yük oluşturuyor veya kritik sistemlerin birlikte çalışması hazır ürünlerle sürdürülemiyorsa anlam kazanır.',
    takeaways: [
      'Hazır ürün varsayılan başlangıç adayı olmalıdır.',
      'Özel yazılım, yalnız farklı görünmek için değil farklı çalışan süreç için gerekir.',
      'Karşılaştırma lisans ile geliştirme bedeli arasında yapılmaz.',
      'Hibrit çözüm çoğu işletmede en dengeli yol olabilir.'
    ],
    about: ['Özel yazılım', 'Hazır yazılım', 'İş otomasyonu'],
    related: ['e-ticaret-altyapisi-nasil-secilir', 'rezervasyon-randevu-sistemi-nasil-secilir', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir'],
    servicePath: '/hizmetler/ozel-yazilim/',
    serviceLabel: 'Özel yazılım ve otomasyon hizmetini inceleyin',
    sections: [
      {
        id: 'yanlis-soru',
        label: 'Karar ilkesi',
        heading: '“Hangisi daha iyi?” yerine “Hangi riski taşıyoruz?” diye sorun.',
        paragraphs: [
          'Hazır ürünün temel riski, işletmenin ürüne gereğinden fazla uyarlanması ve zamanla eklenti–manuel işlem zincirine dönüşmesidir. Özel yazılımın temel riski ise ürün yönetimi, bakım ve bilgi birikiminin sürdürülememesidir. Doğru karar, bu risklerden hangisinin işletme için daha yönetilebilir olduğuna bağlıdır.',
          'Bir süreç net değilse onu kodlamak belirsizliği çözmez; yalnız daha pahalı hâle getirebilir. Önce iş kuralını, istisnayı, veri sahibini ve başarı ölçütünü tarif edin. Hazır araç bu modeli yeterince karşılıyorsa özel geliştirme için iş gerekçesi zayıftır.'
        ],
        callout: 'İlk test: Süreci yeni bir çalışana beş dakikada ve istisnalarıyla anlatamıyorsanız yazılım geliştirmeden önce süreci netleştirin. Bu rehberdeki altı ölçütlü matris Narvals Labs’ın editoryal karar çerçevesidir.'
      },
      {
        id: 'karar-matrisi',
        label: 'Karşılaştırma',
        heading: 'Altı ölçütlü karar matrisi.',
        table: {
          headers: ['Ölçüt', 'Hazır yazılım öne çıkar', 'Özel yazılım öne çıkar'],
          rows: [
            ['Süreç', 'Sektörde standart ve ürün akışına uyuyor', 'Kuruma özgü kural işin temelini oluşturuyor'],
            ['Değişim', 'İhtiyaçlar oturmuş ve seyrek değişiyor', 'Kurallar değişiyor ama ürün yönetimi güçlü'],
            ['Entegrasyon', 'Hazır bağlayıcılar yeterli', 'Birden çok kritik sistemde özel veri eşleme gerekiyor'],
            ['Veri / kontrol', 'Standart dışa aktarım ve yetkiler yeterli', 'Veri konumu, erişim ve yaşam döngüsü üzerinde özel kontrol şart'],
            ['Ekip', 'Teknik bakım sorumluluğu istenmiyor', 'Ürün sahibi, bütçe ve bakım kapasitesi var'],
            ['Farklılaşma', 'Araç destek işlevi görüyor', 'Akış doğrudan rekabet avantajı yaratıyor']
          ]
        }
      },
      {
        id: 'gizli-maliyetler',
        label: 'Toplam yük',
        heading: 'Lisans bedeli ile geliştirme teklifini doğrudan karşılaştırmayın.',
        paragraphs: [
          'Hazır yazılımın toplam maliyetine kullanıcı, modül, işlem, entegrasyon, danışmanlık, veri taşıma ve manuel iş yükünü ekleyin. Özel yazılımda analiz, tasarım, geliştirme, test, barındırma, güvenlik, destek, izleme, dokümantasyon ve ekip değişimi riskini hesaba katın.',
          'Zaman maliyeti de görünür olmalıdır. Bir raporu her hafta üç dosyadan birleştirmek veya aynı kaydı iki sisteme girmek yıllık olarak lisans farkından daha büyük yük yaratabilir. Buna karşılık yılda iki kez yapılan bir manuel iş için özel modül geliştirmek ekonomik olmayabilir.'
        ],
        list: [
          '<strong>Edinme:</strong> Lisans, analiz, kurulum, geliştirme ve veri taşıma.',
          '<strong>İşletme:</strong> Destek, bakım, güncelleme, barındırma ve kullanıcı eğitimi.',
          '<strong>Uyumsuzluk:</strong> Manuel köprü, tekrar, hata düzeltme ve kaçan fırsat.',
          '<strong>Değişim:</strong> Yeni kuralın ürüne eklenme süresi ve bağımlılıklar.',
          '<strong>Çıkış:</strong> Veri aktarımı, süreç yeniden eğitimi ve sistem kapatma.'
        ]
      },
      {
        id: 'hibrit',
        label: 'Üçüncü seçenek',
        heading: 'Hazır çekirdek + özel bağlantı çoğu durumda daha doğru olabilir.',
        paragraphs: [
          'Kimlik doğrulama, ödeme, e-posta veya muhasebe gibi olgun yetenekleri sıfırdan geliştirmek yerine güvenilir servislerden almak; işletmeye özgü orkestrasyon, panel veya rapor katmanını özel kurmak mümkündür. Bu yaklaşım hem hazır ürünün hızını hem de gerekli alanda kontrolü sağlayabilir.',
          'Hibrit mimari ücretsiz karmaşıklık değildir. API sınırları, veri tutarlılığı, hata tekrarları ve sağlayıcı değişikliği yine planlanmalıdır. Her sistem için ana veri kaynağını ve kesinti anındaki davranışı açıkça belirleyin.'
        ],
        table: {
          headers: ['Parça', 'Olası tercih', 'Neden'],
          rows: [
            ['Ödeme', 'Hazır ve lisanslı sağlayıcı', 'Uyumluluk ve operasyon yükünü azaltma'],
            ['CRM', 'Hazır ürün', 'Standart satış ve iletişim süreçleri'],
            ['Kuruma özgü onay motoru', 'Özel modül', 'Benzersiz rol, kural ve istisnalar'],
            ['Raporlama katmanı', 'Hazır BI + özel veri modeli', 'Görselleştirmeyi yeniden icat etmeden ortak metrik']
          ]
        }
      },
      {
        id: 'pilot',
        label: 'Risk azaltma',
        heading: 'Tam proje öncesinde iki haftalık pilot çalışma yapın.',
        ordered: [
          '<strong>Süreci gözleyin:</strong> Söylenen akış ile gerçek iş arasındaki farkları not edin.',
          '<strong>Veri sözlüğü çıkarın:</strong> Alan, kaynak, sahip, güncelleme ve saklama ihtiyacını yazın.',
          '<strong>Üç kritik senaryo seçin:</strong> Normal işlem, en sık istisna ve hata/kesinti durumu.',
          '<strong>İki hazır ürünü gerçek veriyle deneyin:</strong> Demo anlatımı yerine işlemi baştan sona tamamlayın.',
          '<strong>Boşluğu fiyatlandırın:</strong> Manuel çözüm, entegrasyon veya özel modülün sürekli yükünü ölçün.',
          '<strong>Çıkış ölçütü belirleyin:</strong> Pilot hangi sonuç oluşursa hazır, hibrit veya özel kararla sonuçlanacak?'
        ],
        callout: 'Karar belgesi yalnız seçilen çözümü değil, reddedilen seçenekleri ve gerekçelerini de saklamalıdır.'
      }
    ],
    sources: [
      { label: 'NIST — Secure Software Development Framework', url: 'https://csrc.nist.gov/Projects/ssdf' },
      { label: 'OWASP — Application Security Verification Standard', url: 'https://owasp.org/www-project-application-security-verification-standard/' }
    ]
  },
  {
    slug: 'meta-pixel-ve-conversions-api-farki',
    metaTitle: 'Meta Pixel ve Conversions API Farkı | Narvals Labs',
    title: 'Meta Pixel ve Conversions API: farkları ve birlikte kullanım',
    description: 'Meta Pixel ile Conversions API’nin veri kaynağı, kullanım amacı, event eşleştirme, test ve gizlilik açısından farklarını açıklayan uygulama rehberi.',
    keywords: ['Meta Pixel', 'Conversions API', 'CAPI', 'Meta reklam ölçümü'],
    category: 'Meta reklam',
    published: '2026-08-21T09:50:00+03:00',
    modified: '2026-08-23T21:42:00+03:00',
    readingTime: 10,
    answer: 'Meta Pixel, tarayıcıda gerçekleşen web etkileşimlerini gönderir; Conversions API (CAPI) ise sunucu, CRM, platform veya başka bir iş sistemi üzerinden Meta’ya event iletmek için doğrudan bağlantı sağlar. Web eventleri için çoğu senaryoda birbirinin alternatifi değil, aynı event planının iki kaynağı olarak birlikte değerlendirilir.',
    takeaways: [
      'Önce event planı, sonra Pixel ve CAPI kurulumu gelir.',
      'Aynı event iki kaynaktan gidiyorsa tekilleştirme tasarlanmalıdır.',
      'CAPI gizlilik veya izin kurallarını aşma yöntemi değildir.',
      'Test başarı metriği yalnız “event geliyor” değildir.'
    ],
    about: ['Meta Pixel', 'Conversions API', 'Dönüşüm ölçümü'],
    related: ['google-ai-aramalari-icin-geo-rehberi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/dijital-reklam/',
    serviceLabel: 'Meta reklam ve ölçüm hizmetini inceleyin',
    sections: [
      {
        id: 'temel-fark',
        label: 'Tanım',
        heading: 'Fark, eventin anlamında değil gönderildiği yoldadır.',
        paragraphs: [
          '“Purchase” veya “Lead” gibi event adları işte gerçekleşen olayı tarif eder. Pixel bu olayı tarayıcı bağlamından, CAPI ise sunucu ya da bağlı iş sisteminden iletebilir. İki kanalın aynı iş olayını farklı zaman veya anlamla göndermesi raporu güvenilmez hâle getirir.',
          'Bu nedenle kurulum, web sitesine kod yapıştırmakla başlamamalıdır. Önce hangi olayın optimizasyon sinyali olduğu, ne zaman kesinleştiği, hangi parametreleri taşıdığı ve iptal/iade gibi sonraki durumların nasıl ele alınacağı tanımlanmalıdır.'
        ],
        table: {
          headers: ['Boyut', 'Meta Pixel', 'Conversions API'],
          rows: [
            ['Kaynak', 'Kullanıcının tarayıcısı', 'Sunucu, platform, CRM, uygulama veya başka iş sistemi'],
            ['Güçlü bağlam', 'Sayfa görüntüleme ve tarayıcı etkileşimi', 'Sunucuda kesinleşen veya daha sonra oluşan iş olayı'],
            ['Etkilendiği alan', 'Tarayıcı yükleme hataları, bağlantı ve engelleyiciler', 'Sunucu entegrasyonu, veri kalitesi ve iş kuralı hataları'],
            ['Bakım', 'Ön yüz ve etiket değişiklikleri', 'API, sunucu, veri eşleme ve izleme'],
            ['Gizlilik', 'Geçerli politika ve izin gereksinimlerine tabidir', 'Aynı şekilde politika ve izin gereksinimlerine tabidir']
          ]
        }
      },
      {
        id: 'event-plani',
        label: 'Ölçüm tasarımı',
        heading: 'Her butonu dönüşüm yapmayın; iş değerini modelleyin.',
        paragraphs: [
          'Bir sayfayı açmak, formu başlatmak ve doğrulanmış talep göndermek aynı değer düzeyinde değildir. Kampanya optimizasyonunda çok erken ve düşük niyetli event seçmek, sistemi kolay ama iş açısından zayıf sonuca yönlendirebilir. Event merdivenini ziyaret → ilgi → niyet → doğrulanmış sonuç şeklinde kurun.',
          'Event adı kadar tetik koşulu da belgelenmelidir. “Lead”, yalnız teşekkür sayfası açıldığında mı; sunucu formu kabul ettiğinde mi; yoksa CRM kaydı doğrulandığında mı oluşuyor? Cevap net değilse Pixel ile CAPI arasında tutarlılık kurulamaz.'
        ],
        table: {
          headers: ['Event', 'Tetik koşulu örneği', 'Doğrulama'],
          rows: [
            ['ViewContent', 'Ana hizmet veya ürün içeriği gerçekten görüntülendi', 'URL/öğe kimliği ve tek tetik'],
            ['InitiateCheckout', 'Kullanıcı ödeme akışına geçti', 'Sepet ve para birimi tutarlı'],
            ['Lead', 'Form sunucu tarafından başarıyla kabul edildi', 'Spam/tekrar ayrımı ve CRM kaydı'],
            ['Purchase', 'Ödeme sağlayıcıdan başarı durumu döndü', 'Sipariş kimliği, değer, para birimi ve iade süreci']
          ]
        }
      },
      {
        id: 'tekillestirme',
        label: 'Çift sayımı önleme',
        heading: 'Aynı event iki kanaldan gidiyorsa tekilleştirme zorunlu bir tasarım konusudur.',
        paragraphs: [
          'Pixel ve CAPI aynı satın alma veya lead olayını ilettiğinde platformun bunları tek olay olarak eşleştirebilmesi gerekir. Bunun için aynı olayın tarayıcı ve sunucu kopyasında tutarlı event adı ile aynı benzersiz event kimliği kullanılır. Kimlik her sayfa yenilemede değil, gerçek iş olayı oluştuğunda üretilmelidir.',
          'Tekilleştirmeyi yalnız arayüzde “deduplicated” etiketi görerek bırakmayın. Aynı siparişin bir kez, farklı siparişlerin ayrı ayrı sayıldığını; retry mekanizmasının yeni kimlik üretmediğini ve test eventlerinin production raporuna karışmadığını doğrulayın.'
        ],
        checklist: [
          'Tarayıcı ve sunucu aynı iş olayı için aynı event_name kullanıyor.',
          'Aynı olayın iki kopyası aynı event_id değerini taşıyor.',
          'Retry aynı event_id ile yapılıyor; yeni dönüşüm üretmiyor.',
          'Sipariş/lead kimliği tahmin edilebilir kişisel veri olarak gönderilmiyor.',
          'Test ile production veri kaynakları ve olayları ayrılmış.',
          'İade, iptal ve geçersiz lead davranışı iş kuralında tanımlı.'
        ]
      },
      {
        id: 'gizlilik',
        label: 'Veri sorumluluğu',
        heading: 'CAPI, tarayıcı sınırlamalarını veya veri koruma yükümlülüklerini aşmak için kullanılmaz.',
        paragraphs: [
          'Meta, Conversions API’nin iOS App Tracking Transparency veya Avrupa’daki gizlilik kuralları gibi veri paylaşımı politikalarını aşma aracı olmadığını açıkça belirtir. Hangi verinin, hangi amaç ve hukuki dayanakla işlendiği; saklama, sağlayıcı ve kullanıcı tercihlerinin nasıl yönetildiği hedef pazara göre yetkili hukuk danışmanıyla değerlendirilmelidir.',
          'Teknik ekip “gönderilebilir” alanları değil “gerekli ve izinli” alanları almalıdır. E-posta veya telefon gibi eşleştirme verilerinin normalleştirme, hash, erişim ve log davranışı dokümante edilmeli; gereksiz kişisel veri debug loglarına yazılmamalıdır.'
        ],
        callout: 'Bu bölüm hukuki görüş değildir. Canlı veri akışı, KVKK ve hedef pazardaki ilgili mevzuat açısından yetkin danışmanla doğrulanmalıdır.'
      },
      {
        id: 'test',
        label: 'Kalite güvencesi',
        heading: 'Kurulum kabul testini beş kontrolle tamamlayın.',
        ordered: [
          '<strong>Anlam kontrolü:</strong> Olay adı ve tetik koşulu yazılı iş tanımıyla eşleşiyor.',
          '<strong>Teknik kontrol:</strong> Gerekli parametreler doğru tür, değer ve para birimiyle ulaşıyor.',
          '<strong>Tekilleştirme kontrolü:</strong> Pixel + CAPI aynı gerçek olayı raporda bir kez gösteriyor.',
          '<strong>Hata kontrolü:</strong> Sunucu hatası, yeniden deneme ve başarısız ödeme yeni dönüşüm üretmiyor.',
          '<strong>İş sonucu kontrolü:</strong> Olay sayısı belirli bir dönemde sipariş veya CRM kaydıyla açıklanabilir fark içinde uzlaştırılıyor.'
        ],
        callout: 'Events Manager’daki yeşil durum başlangıçtır; muhasebe, sipariş veya CRM kaydıyla uzlaştırma yapılmadan ölçüm tamamlanmış sayılmaz.'
      }
    ],
    sources: [
      { label: 'Meta for Developers — Conversions API', url: 'https://developers.facebook.com/documentation/ads-commerce/conversions-api' },
      { label: 'Meta Business Help — Conversions API ve veri paylaşım sınırları', url: 'https://www.facebook.com/business/help/AboutConversionsAPI' },
      { label: 'Meta for Developers — Meta Pixel', url: 'https://developers.facebook.com/documentation/meta-pixel' },
      { label: 'Meta for Developers — Pixel ve sunucu eventlerini tekilleştirme', url: 'https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events' },
      { label: 'KVKK — Kişisel Veri Güvenliği Rehberi', url: 'https://www.kvkk.gov.tr/yayinlar/veri_guvenligi_rehberi.pdf' }
    ]
  },
  {
    slug: 'qr-menu-mu-pdf-menu-mu',
    metaTitle: 'QR Menü mü PDF Menü mü? Karşılaştırma | Narvals Labs',
    title: 'QR menü mü, PDF menü mü? Karşılaştırma rehberi',
    description: 'PDF menü ile mobil HTML QR menüyü hız, okunabilirlik, güncelleme, çoklu dil, erişilebilirlik, ölçüm ve operasyon açısından karşılaştırın.',
    keywords: ['QR menü', 'PDF menü', 'dijital menü', 'QR menü sistemi'],
    category: 'QR menü',
    published: '2026-08-21T10:00:00+03:00',
    modified: '2026-08-23T21:43:00+03:00',
    readingTime: 8,
    answer: 'PDF menü, basılı tasarımı ekrana taşıyan hızlı ve sınırlı bir çözüm olabilir. Mobil HTML tabanlı QR menü ise ürünleri ekran boyutuna göre düzenler; fiyat, stok, alerjen, dil ve şube bilgisini panelden yönetmeye daha uygundur. Sık değişen ve müşterinin telefonda seçim yaptığı menülerde HTML çözüm genellikle daha işlevseldir.',
    takeaways: [
      'QR kod yalnız giriş kapısıdır; deneyimin kalitesini hedef sayfa belirler.',
      'PDF, güncellemesi seyrek ve kısa içerikte geçici çözüm olabilir.',
      'Mobil HTML menü arama, kategori, dil ve güncellemede daha esnektir.',
      'Seçimden önce içerik sahibi ve güncelleme süreci tanımlanmalıdır.'
    ],
    about: ['QR menü', 'PDF menü', 'Mobil menü deneyimi'],
    related: ['rezervasyon-randevu-sistemi-nasil-secilir', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/qr-menu/',
    serviceLabel: 'QR menü sistemi hizmetini inceleyin',
    sections: [
      {
        id: 'qr-kod-menu-degil',
        label: 'Temel ayrım',
        heading: 'QR kod bir menü değildir; yalnız menüye giden bağlantıdır.',
        paragraphs: [
          'Aynı QR kod bir PDF dosyasına, mobil web sayfasına veya uygulamaya gidebilir. Masadaki küçük kareden sonra müşterinin yakınlaştırma yapması, sayfalar arasında kayması, aradığı kategoriyi bulması ve ürün içeriğini anlaması gerekir. Bu nedenle çözümü “QR var mı?” sorusuyla değil hedef deneyimle değerlendirin.',
          'QR kodun basılı materyali değişmeden hedefi güncellenebiliyorsa geçiş kolaylaşır. Ancak yönlendirme altyapısının sahibini, alan adını ve sistem kapanırsa kodun ne olacağını baştan sorun.'
        ],
        callout: 'Kritik sahiplik sorusu: Hizmet sağlayıcı değiştiğinde masalardaki mevcut QR kodlar çalışmaya devam edecek mi? Karşılaştırma ölçütleri Narvals Labs’ın editoryal karar çerçevesidir.'
      },
      {
        id: 'karsilastirma',
        label: 'Karar tablosu',
        heading: 'PDF ve mobil HTML menüyü aynı görevlerle test edin.',
        table: {
          headers: ['Ölçüt', 'PDF menü', 'Mobil HTML QR menü'],
          rows: [
            ['Telefonda okuma', 'Sıklıkla yakınlaştırma ve yatay kaydırma gerekir', 'Ekrana göre yeniden akar ve dokunma hedefleri uyarlanır'],
            ['Güncelleme', 'Dosya yeniden hazırlanır ve yüklenir', 'Alan veya ürün panelden değiştirilebilir'],
            ['Kategori / arama', 'Belge içi gezinmeyle sınırlı', 'Kategori, filtre ve arama davranışı kurulabilir'],
            ['Çoklu dil', 'Ayrı dosyalar veya uzun belge', 'Dil seçimi ve ortak ürün kaynağı mümkün'],
            ['Stok / görünürlük', 'Anlık yönetim zordur', 'Ürün veya seçenek görünürlüğü yönetilebilir'],
            ['Erişilebilirlik', 'Belgenin etiketlenmesine ve okuyucuya bağlı', 'Semantik HTML ve web erişilebilirliği uygulanabilir'],
            ['Ölçüm', 'Dosya açılışıyla sınırlı kalabilir', 'Kategori ve ürün etkileşimi izinli ölçümle izlenebilir']
          ]
        }
      },
      {
        id: 'pdf-uygunluk',
        label: 'Basit çözüm',
        heading: 'PDF menü hangi durumda yeterli olabilir?',
        paragraphs: [
          'Ürün sayısı az, fiyat ve içerik seyrek değişiyor, tek dil ve tek şube kullanılıyor, personel menüyü ayrıca açıklıyor ve geçici bir dijital erişim gerekiyorsa iyi hazırlanmış PDF yeterli olabilir. Dosya mobil oranla tasarlanmalı, metin seçilebilir olmalı ve görüntü olarak taranmış sayfalardan oluşmamalıdır.',
          'PDF kısa vadeli seçildiğinde bile kalıcı URL kullanın; her güncellemede QR kodu yeniden basmak yerine aynı URL’nin hedefini güncelleyin. Dosya boyutunu düşük tutun ve zayıf bağlantıda açılışı gerçek cihazla test edin.'
        ],
        checklist: [
          'Metin 320 px ekranda sürekli yakınlaştırma olmadan okunabiliyor.',
          'Dosya görüntü taraması değil; seçilebilir ve doğru okuma sıralı metin içeriyor.',
          'Başlıklar, dil ve belge özellikleri tanımlı.',
          'Dosya boyutu mobil bağlantıda makul açılış sağlıyor.',
          'Kalıcı bağlantı ve eski dosya cache davranışı kontrol edilmiş.',
          'Fiyat ve içerik güncellemesinden sorumlu kişi belli.'
        ]
      },
      {
        id: 'html-gereksinim',
        label: 'Yönetilebilir sistem',
        heading: 'HTML QR menüde yalnız tasarımı değil veri modelini satın alırsınız.',
        paragraphs: [
          'Kategori, ürün, seçenek, fiyat, alerjen, içerik, görsel, şube, dil ve görünürlük alanlarının nasıl ilişkilendiğini inceleyin. Bir ürünün fiyatı şubeye göre değişiyorsa kopya ürün oluşturmak yerine fiyat kuralı tanımlanabiliyor mu? Bir çeviri eksikse sistem ne gösteriyor?',
          'Yetkilendirme de menünün parçasıdır. Her çalışan her fiyatı değiştirebiliyor mu, değişiklik onay bekliyor mu, geçmiş kayıt tutuluyor mu ve yanlış güncelleme geri alınabiliyor mu? İyi müşteri ekranı, güvenilir yönetim akışı olmadan güncel kalamaz.'
        ],
        list: [
          '<strong>İçerik modeli:</strong> Ürün, seçenek, alerjen, fiyat ve dil ilişkisi.',
          '<strong>Yetki:</strong> Şube, rol, onay ve değişiklik geçmişi.',
          '<strong>Dayanıklılık:</strong> Zayıf bağlantı, eski cihaz, yoğun trafik ve cache davranışı.',
          '<strong>Erişilebilirlik:</strong> Kontrast, metin boyutu, dokunma alanı, ekran okuyucu ve klavye.',
          '<strong>Sahiplik:</strong> Alan adı, veri dışa aktarımı, QR yönlendirmesi ve sağlayıcı değişimi.'
        ]
      },
      {
        id: 'masa-testi',
        label: 'Gerçek kullanım',
        heading: 'Kararı masada, tek elle ve zayıf bağlantıda test edin.',
        ordered: [
          'Farklı fiyat seviyesindeki üç ürünü bulun ve karşılaştırın.',
          'Alerjen veya içerik bilgisini yardım almadan bulun.',
          'Bir ürünün seçeneğini ve güncel fiyatını doğrulayın.',
          'Dili değiştirin; kategori ve sepet/tercih durumunun korunup korunmadığına bakın.',
          'Düşük parlaklık, güneş ışığı ve tek elle kullanımda okunabilirliği test edin.',
          'Personel panelinden fiyat değiştirip müşteri ekranına ne kadar sürede yansıdığını ölçün.',
          'İnternet kesildiğinde kullanıcıya ne olduğunu ve personelin alternatifini kontrol edin.'
        ]
      }
    ],
    sources: [
      { label: 'W3C — Mobil erişilebilirlik', url: 'https://www.w3.org/WAI/standards-guidelines/mobile/' },
      { label: 'W3C — WCAG 2.2 hızlı başvuru', url: 'https://www.w3.org/WAI/WCAG22/quickref/' }
    ]
  },
  {
    slug: 'rezervasyon-randevu-sistemi-nasil-secilir',
    metaTitle: 'Rezervasyon ve Randevu Sistemi Nasıl Seçilir? | Narvals',
    title: 'Rezervasyon ve randevu sistemi nasıl seçilir?',
    description: 'Kapasite, personel, süre, uygunluk, onay, hatırlatma, no-show, entegrasyon ve kişisel veri ihtiyaçlarına göre sistem seçme rehberi.',
    keywords: ['rezervasyon sistemi', 'randevu sistemi', 'online rezervasyon', 'randevu yazılımı'],
    category: 'Rezervasyon',
    published: '2026-08-21T10:10:00+03:00',
    modified: '2026-08-23T21:44:00+03:00',
    readingTime: 10,
    answer: 'Rezervasyon sistemi kapasiteyi; randevu sistemi çoğunlukla personel, hizmet süresi ve uygunluğu yönetir. Doğru ürün, işletmenin gerçek zaman ve kapasite kurallarını müşteriye anlaşılır seçenekler olarak gösterirken ekibin çakışma, istisna, iptal ve iletişim süreçlerini tek yerde yönetmesini sağlar.',
    takeaways: [
      'Önce masa/kapasite mi, personel/süre mi yönettiğinizi ayırın.',
      'Takvim görünümü iş kurallarının yerini tutmaz.',
      'İptal, gecikme ve no-show normal akış kadar önemlidir.',
      'Yalnız gerekli kişisel veriyi toplayın ve yaşam döngüsünü planlayın.'
    ],
    about: ['Rezervasyon sistemi', 'Randevu sistemi', 'Online takvim'],
    related: ['qr-menu-mu-pdf-menu-mu', 'hazir-yazilim-mi-ozel-yazilim-mi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir'],
    servicePath: '/hizmetler/rezervasyon-randevu/',
    serviceLabel: 'Rezervasyon ve randevu hizmetini inceleyin',
    sections: [
      {
        id: 'rezervasyon-randevu',
        label: 'Model farkı',
        heading: 'Rezervasyon kapasiteyi, randevu ise çoğunlukla zaman ve kaynağı böler.',
        paragraphs: [
          'Restoranda 19.00 için dört kişilik kayıt; masa birleştirme, oturum süresi, salon kapasitesi ve bekleme politikasına bağlıdır. Danışmanlık veya bakım hizmetinde ise uzman, hizmet türü, süre, hazırlık ve mola aralığı belirleyicidir. İki model aynı takvim arayüzünü kullanabilir ama uygunluk motoru aynı değildir.',
          'İşletmeniz iki modeli birden kullanıyorsa hepsini tek bir “uygun saat” tablosuna zorlamak yerine kaynak türlerini ayırın. Örneğin spa için oda, personel ve hizmet süresi aynı anda uygun olmalı; restoran için kişi sayısı masaya ve salona yerleşebilmelidir.'
        ],
        table: {
          headers: ['Boyut', 'Rezervasyon örneği', 'Randevu örneği'],
          rows: [
            ['Ana kaynak', 'Masa, oda, koltuk veya toplam kapasite', 'Personel, cihaz, oda ve hizmet süresi'],
            ['Süre', 'Oturum/gece/seans aralığı', 'Hizmet bazlı süre + hazırlık/buffer'],
            ['Uygunluk', 'Kişi sayısı ve kapasite yerleşimi', 'Yetkin personel ile kaynakların kesişimi'],
            ['Onay', 'Anlık veya kapasite kontrolünden sonra', 'Anlık, ön ödeme veya personel onayı'],
            ['Değişiklik', 'Kişi sayısı, tarih ve oturum', 'Hizmet, personel, süre ve zaman']
          ]
        }
      },
      {
        id: 'kural-envanteri',
        label: 'Sistem tasarımı',
        heading: 'Satın almadan önce gerçek kural envanterini çıkarın.',
        checklist: [
          'Çalışma saatleri, tatil, vardiya ve özel gün istisnaları.',
          'Hizmet veya kişi sayısına göre süre ve hazırlık aralığı.',
          'Aynı anda kullanılan personel, oda, masa, cihaz veya araç.',
          'En erken/en geç rezervasyon, değişiklik ve iptal penceresi.',
          'Anında onay, manuel onay, bekleme listesi ve kapasite aşımı politikası.',
          'Ön ödeme, depozito, iade ve başarısız ödeme davranışı.',
          'Gecikme, no-show, erken geliş ve fazla kişi senaryosu.',
          'Telefon, mesaj, web ve üçüncü taraf kayıtlarının tek takvimde birleşmesi.',
          'Hatırlatma kanalı, zamanı, dil tercihi ve teslim edilememe durumu.',
          'Raporlama, veri saklama ve erişim yetkileri.'
        ],
        callout: 'Bir kural “bazen değişir” diye tarif ediliyorsa hangi koşulda, kimin kararıyla ve sistemde nasıl kaydedildiğini netleştirin.'
      },
      {
        id: 'musteri-akisi',
        label: 'Müşteri deneyimi',
        heading: 'Formu kısaltmak yetmez; belirsizliği azaltın.',
        paragraphs: [
          'Müşteri önce hizmeti veya kişi sayısını, sonra uygun zamanı seçebilmeli; fiyat, süre, konum, iptal ve hazırlık koşullarını onaydan önce görebilmelidir. Sistem uygun olmayan zamanı son adımda reddetmek yerine baştan göstermemelidir.',
          'Onay ekranı ve mesajı kaydın durumunu açıkça söylemelidir: Talep alındı mı, kesinleşti mi, ödeme bekliyor mu? “Başarılı” yazıp takvim kaydı üretmeyen veya iki kanal arasında farklı durum gösteren akış destek yükünü artırır.'
        ],
        ordered: [
          'İhtiyacı seç: hizmet, kişi sayısı, şube veya kaynak.',
          'Uygun zamanı gör: yalnız gerçekten alınabilir seçenekler.',
          'Koşulları anla: süre, fiyat, iptal ve gerekli hazırlık.',
          'Gerekli bilgiyi gir: amaçla ilgisiz alan olmadan.',
          'Durumu doğrula: kesin, onay bekliyor veya ödeme bekliyor.',
          'Yönet: değiştir, iptal et, takvime ekle veya destek al.'
        ]
      },
      {
        id: 'operasyon',
        label: 'Ekip tarafı',
        heading: 'İyi sistem müşteriye uygun saatleri, ekibe gerekli bilgiyi gösterir.',
        table: {
          headers: ['Operasyon ihtiyacı', 'Sistemde aranacak davranış'],
          rows: [
            ['Çakışma önleme', 'Aynı kaynak ve zamanı atomik biçimde kilitleme'],
            ['Manuel kayıt', 'Telefon/kapı kaydını online kapasiteye anında yansıtma'],
            ['Değişiklik', 'Eski zamanı serbest bırakıp yeni kuralı doğrulama'],
            ['İletişim', 'Gönderim durumu, şablon sürümü ve tercih yönetimi'],
            ['Yetki', 'Şube, rol ve işlem türüne göre sınırlı erişim'],
            ['İz', 'Kim, ne zaman, hangi alanı değiştirdi kaydı'],
            ['Kesinti', 'İnternet/sağlayıcı sorunu için kontrollü alternatif süreç']
          ]
        }
      },
      {
        id: 'veri-gizlilik',
        label: 'Kişisel veri',
        heading: 'Kayıt için gereken veri ile sonradan işe yarayabilecek veriyi ayırın.',
        paragraphs: [
          'Ad, iletişim, hizmet ve zaman bilgisi çoğu akış için yeterli olabilir; sağlık notu veya başka özel nitelikli veri bazı hizmetlerde farklı risk ve yükümlülük doğurur. Her alan için amaç, hukuki dayanak, erişen rol, saklama süresi ve silme davranışı belirlenmelidir.',
          'Hatırlatma ve pazarlama iletişimi aynı şey değildir. Randevunun operasyonel mesajını ayrı, kampanya iletişimi tercihini ayrı yönetin. Canlı uygulamadan önce KVKK ve hedef pazardaki ilgili düzenlemeleri yetkin hukuk danışmanıyla doğrulayın.'
        ],
        callout: 'Bu rehber teknik ve operasyonel karar desteğidir; hukuki görüş değildir.'
      },
      {
        id: 'demo-testi',
        label: 'Ürün seçimi',
        heading: 'Demo sırasında güzel takvime değil sekiz zor senaryoya bakın.',
        ordered: [
          'Aynı son uygun saati iki cihazdan eşzamanlı almaya çalışın.',
          'Personel hastalık izni ekleyip mevcut kayıtların durumunu görün.',
          'Süreyi uzatan ek hizmet seçin ve sonraki uygun saatleri kontrol edin.',
          'Müşteri kişi sayısını veya hizmeti değiştirdiğinde kapasiteyi doğrulayın.',
          'Ödeme başarısız olduğunda seçilen saatin ne kadar tutulduğunu test edin.',
          'İptal penceresi geçtikten sonra müşteri ve ekip seçeneklerini inceleyin.',
          'Mesaj teslim edilmediğinde uyarı ve tekrar sürecini görün.',
          'Veriyi dışa aktarın; alan, zaman dilimi ve durum bilgisinin korunmasını kontrol edin.'
        ]
      }
    ],
    sources: [
      { label: 'W3C — Form etiketleri ve talimatlar', url: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions' },
      { label: 'KVKK — Kişisel verilerin işlenmesine ilişkin temel ilkeler', url: 'https://www.kvkk.gov.tr/Icerik/4189/Kisisel-Verilerin-Islenmesine-Iliskin-Temel-Ilkeler' },
      { label: 'KVKK — Özel nitelikli kişisel verilerin işlenmesine ilişkin rehber', url: 'https://www.kvkk.gov.tr/Icerik/8183/Ozel-Nitelikli-Kisisel-Verilerin-Islenmesine-Iliskin-Rehber' }
    ]
  },
  {
    slug: 'web-sitesi-maliyeti-nasil-hesaplanir',
    metaTitle: 'Web Sitesi Maliyeti Nasıl Hesaplanır? | Narvals Labs',
    title: 'Web sitesi maliyeti nasıl hesaplanır? Teklif karşılaştırma rehberi',
    description: 'Web sitesi fiyatını etkileyen içerik, tasarım, geliştirme, entegrasyon, taşıma, test ve bakım kalemlerini görünür bir kapsamla karşılaştırın.',
    keywords: ['web sitesi maliyeti', 'web sitesi fiyatı', 'web tasarım teklifi', 'kurumsal site'],
    category: 'Web & UX',
    published: '2026-08-21T10:20:00+03:00',
    modified: '2026-08-21T10:20:00+03:00',
    readingTime: 9,
    answer: 'Web sitesi maliyeti sayfa sayısından çok; içerik hazırlığı, şablon çeşitliliği, özgün tasarım, yönetim ihtiyacı, entegrasyon, veri taşıma, erişilebilirlik, test, yayın ve bakım sorumluluklarıyla belirlenir. Sağlıklı karşılaştırma için teklifler aynı kapsam ve kabul ölçütleri üzerinde okunmalıdır. Aşağıdaki maliyet modeli Narvals Labs’ın editoryal kapsam çerçevesidir.',
    takeaways: [
      '“Beş sayfa” tek başına kapsam tanımı değildir.',
      'İçerik, entegrasyon ve veri taşıma bütçeyi görünür biçimde değiştirir.',
      'Düşük ilk fiyat yüksek işletme yükünü saklayabilir.',
      'Teklifte teslim, sorumluluk ve kabul ölçütü birlikte bulunmalıdır.'
    ],
    about: ['Web sitesi maliyeti', 'Web tasarım teklifi', 'Proje kapsamı'],
    related: ['kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-teknik-seo-kontrol-listesi', 'hazir-yazilim-mi-ozel-yazilim-mi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Web tasarım ve UX hizmetini inceleyin',
    sections: [
      {
        id: 'neden-tek-fiyat-yok',
        label: 'Kapsam gerçeği',
        heading: 'Aynı sayfa sayısı, aynı proje anlamına gelmez.',
        paragraphs: [
          'İki kurumsal site de sekiz URL’den oluşabilir. Birinde hazır içerik ve basit iletişim formu vardır; diğerinde çoklu dil, ürün kataloğu, CRM bağlantısı, eski URL taşıması ve özel hesaplayıcı bulunur. Sayfa adedi benzer görünürken analiz, içerik, tasarım, geliştirme ve test yükü farklıdır.',
          'Bu nedenle telefonda tek rakam istemek bütçe aralığı için başlangıç olabilir ama satın alma kararı için yeterli değildir. Önce teslim edilecek şablonları, içerik sorumluluğunu, teknik davranışları ve kabul ölçütlerini görünür kılın.'
        ],
        callout: 'Doğru soru: “Site kaç para?” değil, “Hangi iş sonucunu üreten hangi kapsamın toplam maliyeti nedir?”'
      },
      {
        id: 'maliyet-kalemleri',
        label: 'Bütçe modeli',
        heading: 'Fiyatı belirleyen sekiz ana kalem.',
        table: {
          headers: ['Kalem', 'Kapsamı büyüten örnekler', 'Teklifte aranacak çıktı'],
          rows: [
            ['Araştırma / strateji', 'Çok hedef kitle, rakip, paydaş ve kullanıcı akışı', 'Hedef, sitemap, başarı ölçütü'],
            ['İçerik', 'Sıfırdan metin, çekim, çoklu dil, ürün verisi', 'İçerik envanteri ve sorumlular'],
            ['UX / tasarım', 'Çok sayıda benzersiz şablon ve etkileşim', 'Onaylı akış ve ekran seti'],
            ['Geliştirme', 'Özel bileşen, CMS, hesaplayıcı ve animasyon', 'Tarayıcıda çalışan teslim ve kaynak kod'],
            ['Entegrasyon', 'CRM, ödeme, kargo, takvim, ERP, e-posta', 'Alan eşleme, hata ve test senaryosu'],
            ['Taşıma / SEO', 'Eski URL, içerik, medya ve yönlendirme', 'URL haritası, canonical ve sitemap'],
            ['Kalite', 'Cihaz, erişilebilirlik, performans ve güvenlik testleri', 'Kabul listesi ve hata kapanışı'],
            ['Yayın / bakım', 'Barındırma, izleme, yedek, güncelleme ve destek', 'SLA veya açık sorumluluk matrisi']
          ]
        }
      },
      {
        id: 'ucuz-pahali',
        label: 'Toplam sahiplik',
        heading: 'İlk proje bedeli ile toplam kullanım maliyetini ayırın.',
        paragraphs: [
          'Alan adı, barındırma, üçüncü taraf lisansları, içerik güncelleme, güvenlik güncellemeleri, teknik destek, analitik bakımı ve yeni geliştirmeler proje sonrasında devam edebilir. Bunların hangisinin zorunlu, hangisinin isteğe bağlı olduğunu teklif aşamasında sorun.',
          'Bir içeriği değiştirmek için her seferinde geliştirici gerekiyorsa düşük kurulum bedeli operasyon maliyetine dönüşür. Tersine, yılda hiç değişmeyen bir siteye karmaşık yönetim paneli eklemek gereksiz lisans ve bakım yükü yaratabilir. Yönetim modeli gerçek değişim sıklığına göre seçilmelidir.'
        ],
        list: [
          '<strong>Tek seferlik:</strong> Analiz, içerik hazırlığı, tasarım, geliştirme, taşıma ve yayın.',
          '<strong>Düzenli:</strong> Barındırma, lisans, bakım, izleme, destek ve içerik operasyonu.',
          '<strong>Değişken:</strong> Trafik, işlem, depolama, mesaj, çeviri ve yeni özellik kullanımı.',
          '<strong>Risk:</strong> Sağlayıcı bağımlılığı, veri çıkışı, kritik eklenti ve ekip değişimi.'
        ]
      },
      {
        id: 'teklif-karsilastirma',
        label: 'Satın alma',
        heading: 'Teklifleri yan yana koymadan önce aynı dili konuşmalarını sağlayın.',
        checklist: [
          'Sayfa adları değil benzersiz şablon ve işlevler listelenmiş.',
          'Metin, görsel, çeviri ve veri girişini kimin yapacağı yazılmış.',
          'CMS, lisans, eklenti, barındırma ve üçüncü taraf ücretleri ayrılmış.',
          'Entegrasyonlar yalnız isimle değil kapsam ve hata davranışıyla tanımlanmış.',
          'Mobil, tarayıcı, erişilebilirlik ve performans kabul ölçütleri bulunuyor.',
          'Eski URL, içerik ve arama görünürlüğü taşıma planı açıklanmış.',
          'Kaynak kod, hesap, alan adı ve verinin sahibi belirtilmiş.',
          'Garanti, destek, bakım ve değişiklik talebi süreci yazılmış.',
          'Teslim takvimi müşteri onay ve içerik sorumluluklarını da içeriyor.',
          'Kapsam dışı maddeler açıkça listelenmiş.'
        ]
      },
      {
        id: 'butce-dusurme',
        label: 'Akıllı sadeleştirme',
        heading: 'Kaliteyi düşürmeden bütçeyi azaltmanın yolu kapsamı netleştirmektir.',
        ordered: [
          'Birincil hedefi ve ana kullanıcıyı tekleştirin.',
          'İlk sürümde yalnız ana görevi tamamlatan sayfa ve işlevleri bırakın.',
          'Hazır, kaliteli servislerin karşıladığı standart işlevleri yeniden geliştirmeyin.',
          'İçeriği tasarım başlamadan hazırlayın; sonsuz yer tutucu metin döngüsünü önleyin.',
          'Benzersiz şablon sayısını, gerçek içerik farkına göre sınırlandırın.',
          '“Sonra” listesine ölçülebilir tetik koşulu ekleyin.',
          'Teklifleri aynı brief ve kabul listesiyle isteyin.'
        ],
        callout: 'Bütçe baskısında teknik temel, erişilebilirlik ve ölçümü silmek yerine düşük öncelikli sayfa ve animasyonları sonraki faza taşıyın.'
      }
    ],
    sources: [
      { label: 'Google — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'W3C — WCAG 2.2', url: 'https://www.w3.org/TR/WCAG22/' },
      { label: 'W3C WAI — Web projelerinde erişilebilirliği planlama ve yönetme', url: 'https://www.w3.org/WAI/planning-and-managing/' }
    ]
  },
  {
    slug: 'web-sitesi-yaptirmadan-once-kapsam-teklif-karar-rehberi',
    metaTitle: 'Web Sitesi Yaptırmadan Önce: Kapsam ve Teklif Rehberi | Narvals',
    title: 'Web sitesi yaptırmadan önce: kapsam, teklif ve karar rehberi',
    description: 'Web sitesi yaptırırken hedefi, ilk sürüm kapsamını, teklifleri, içerik sorumluluklarını ve kabul ölçütlerini netleştirmek için pratik karar rehberi.',
    keywords: ['web sitesi yaptırma', 'web sitesi yapma', 'web tasarım teklifi', 'web sitesi kapsamı'],
    category: 'Web & UX',
    published: '2026-08-23T10:00:00+03:00',
    modified: '2026-08-23T10:00:00+03:00',
    readingTime: 11,
    answer: 'Web sitesi yaptırma kararında önce “nasıl görünecek?” değil, “hangi kullanıcı hangi işi güvenle tamamlayacak?” sorusu yanıtlanmalıdır. Hedef, ilk sürüm kapsamı, içerik ve entegrasyon sorumlulukları, teklif kalemleri ve kabul ölçütleri aynı çerçevede netleştiğinde doğru çözümü seçmek ve teklifleri karşılaştırmak kolaylaşır.',
    takeaways: [
      'Web sitesi yapma ihtiyacı; kurumsal anlatım, talep toplama, online satış veya operasyon akışı gibi farklı projelere dönüşebilir.',
      'Sayfa sayısı yerine kullanıcı görevi, şablon, içerik ve entegrasyon üzerinden kapsam isteyin.',
      'Teklifler aynı brief ve aynı kabul ölçütleriyle karşılaştırıldığında toplam bedelin neyi kapsadığı anlaşılır.',
      'İlk sürümü küçük tutmak, gerekli ölçüm ve teknik temeli ertelemek anlamına gelmez.'
    ],
    about: ['Web sitesi yaptırma', 'Web tasarım teklifi', 'Proje kapsamı'],
    related: ['kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-maliyeti-nasil-hesaplanir', 'e-ticaret-altyapisi-nasil-secilir'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Web sitesi ve UX hizmetini inceleyin',
    sections: [
      {
        id: 'karar-nerede-baslar',
        label: 'İlk karar',
        heading: 'Web sitesi yaptırma kararı, tasarım örneği seçmekle başlamaz.',
        paragraphs: [
          '“Bir web sitesi yapalım” aynı anda birden çok ihtiyacı gizleyebilir: yeni bir markayı anlatmak, doğru müşteriden talep toplamak, ürün kataloğunu anlaşılır kılmak, randevu almak veya doğrudan satış yapmak. Bunların her biri içerik, kullanıcı akışı, ölçüm ve teknik altyapı açısından farklı bir başlangıç noktasıdır. Bu yüzden ilk toplantıdaki en değerli çıktı renk paleti değil; ziyaretçinin tamamlamasını istediğiniz ana görevdir.',
          'Örneğin ana hedef nitelikli görüşme başlatmaksa, <a href="/hizmetler/web-tasarim/">web tasarım ve UX hizmeti</a> sayfa hiyerarşisini, güven unsurlarını ve form akışını bu karara göre ele almalıdır. Ama kullanıcı ürün seçip ödeme yapacaksa konu yalnız bir kurumsal site değildir; stok, ödeme, kargo, iade ve operasyon senaryolarını kapsayan bir <a href="/hizmetler/e-ticaret/">e-ticaret sitesi</a> planı gerekir. Aynı tasarım dili kullanılabilir, fakat çözülmesi gereken iş farklıdır.'
        ],
        callout: 'Tek cümlelik karar testi: “Bu site yayına girdikten sonra ziyaretçinin en önemli yapmasını istediğimiz şey nedir?” sorusuna ekip aynı yanıtı verebiliyor mu?'
      },
      {
        id: 'ilk-surumu-secin',
        label: 'Kapsam seçimi',
        heading: 'Önce ilk sürümün tamamlaması gereken görevi seçin.',
        paragraphs: [
          'İyi bir ilk sürüm, az sayıda özellik içeren site demek değildir; kullanıcının kritik yolunun baştan sona çalışması demektir. Gereksiz sayfaları, sonraki faz fikirlerini ve belirsiz istekleri başlangıçta ayırmak bütçe konuşmasını da daha sağlıklı hale getirir. Aşağıdaki tablo, ihtiyacı teslim edilecek işten ayırmaya yardımcı olur.'
        ],
        table: {
          headers: ['İş ihtiyacı', 'İlk sürümde netleştirilecekler', 'Teklifte sorulacak soru'],
          rows: [
            ['Markayı ve hizmetleri anlatmak', 'Ana mesaj, hizmet sayfaları, güven kanıtları, iletişim yolu', 'Her sayfanın kullanıcı sorusu ve içerik sorumlusu kim?'],
            ['Nitelikli talep toplamak', 'Hedef kitleye göre giriş sayfası, CTA, form alanları, bildirim akışı', 'Form verisi nereye gidecek, hata olduğunda kim bilgilenecek?'],
            ['Ürünleri online satmak', 'Ürün verisi, sepet, ödeme, kargo, iade ve sipariş yönetimi', 'Ödeme, stok ve kargo akışları hangi gerçek senaryolarla test edilecek?'],
            ['Randevu veya başvuru almak', 'Uygunluk kuralları, form/takvim, onay ve hatırlatma mesajları', 'Çakışma, iptal ve kişisel veri senaryoları nasıl ele alınacak?'],
            ['Mevcut siteyi yenilemek', 'URL envanteri, içerik taşıma, yönlendirme, ölçümün korunması', 'Eski URL ve önemli sayfalar için taşıma planı teslim edilecek mi?']
          ]
        }
      },
      {
        id: 'briefi-bir-sayfada-toplayin',
        label: 'Brief',
        heading: 'Ajansa veya ekibe göndermeden önce bir sayfalık karar özeti hazırlayın.',
        paragraphs: [
          'Uzun bir sunum şart değildir. Fakat ihtiyacın sözlü kalması, farklı tekliflerin farklı varsayımlarla hazırlanmasına yol açar. Kısa bir brief, hem sizin ne satın aldığınızı hem de karşı tarafın neyi çözmekle sorumlu olduğunu görünür hale getirir. Daha ayrıntılı soru seti için <a href="/blog/kurumsal-web-sitesi-briefi-nasil-hazirlanir/">kurumsal web sitesi briefi rehberinden</a> yararlanabilirsiniz.'
        ],
        checklist: [
          '<strong>İş hedefi:</strong> Bu projenin işletme açısından önceliği nedir; talep, satış, randevu, destek yükünü azaltma veya başka bir sonuç mu?',
          '<strong>Öncelikli kullanıcı:</strong> Kararı veren kişi kim, siteye hangi soruyla geliyor ve hangi tereddüdü taşıyor?',
          '<strong>Ana eylem:</strong> Kullanıcı teklif isteyecek, ürün satın alacak, randevu alacak veya başka bir görevi mi tamamlayacak?',
          '<strong>İçerik ve kanıt:</strong> Metin, görsel, ürün verisi, ekip bilgisi, referans kullanma izni ve yasal metinler hazır mı; sahibi kim?',
          '<strong>Entegrasyonlar:</strong> CRM, ödeme, e-posta, kargo, takvim, analitik veya mevcut veri aktarımı gerekiyor mu?',
          '<strong>Sınırlar:</strong> İlk sürümde kesinlikle gerekenler, sonraki faza kalabilecekler ve kapsam dışı olanlar neler?',
          '<strong>Karar ve onay:</strong> Geri bildirim kimden toplanacak, son onayı kim verecek, geciken içerikte nasıl ilerlenir?',
          '<strong>Başarı ölçümü:</strong> Yalnız ziyaret sayısı değil, hangi nitelikli eylem veya iş sonucu takip edilecek?'
        ],
        callout: 'Briefte belirsiz kalan her konu teklif veren tarafından varsayılır. Varsayımlar yazılı değilse, aynı kelimelerle konuşuyor gibi görünen iki taraf farklı teslimatlar bekleyebilir.'
      },
      {
        id: 'teklifi-satir-satir-okuyun',
        label: 'Teklif karşılaştırma',
        heading: 'Teklifleri toplam bedelle değil, teslim ve risk tablosuyla karşılaştırın.',
        paragraphs: [
          'Bir teklif “10 sayfa web sitesi” yazıp diğer teklif “3 şablon, içerik girişi, CRM form bağlantısı ve yönlendirme planı” diyorsa, bu iki belge aynı işi tarif etmeyebilir. Karar vermeden önce her teklifi aşağıdaki başlıklara göre yan yana getirin. Maliyet kalemlerinin neden değiştiğini ayrıca <a href="/blog/web-sitesi-maliyeti-nasil-hesaplanir/">web sitesi maliyeti rehberinde</a> inceleyebilirsiniz.'
        ],
        table: {
          headers: ['Başlık', 'Teklifte görünmesi gereken', 'Belirsiz kalırsa oluşan risk'],
          rows: [
            ['Teslim edilen yapı', 'Benzersiz şablonlar, sayfalar, bileşenler ve kullanıcı akışları', '“Sayfa” sözcüğü farklı işlevleri gizleyebilir'],
            ['İçerik üretimi', 'Metin, görsel, çeviri ve veri girişinden sorumlu taraf', 'Tasarım tamamlanır, yayın içerik bekler'],
            ['Tasarım ve revizyon', 'Onay adımları, revizyon sınırı ve karar verici', 'Geri bildirim döngüsü takvimi belirsiz uzatır'],
            ['Teknik işler', 'CMS, entegrasyon, yönlendirme, analitik, erişilebilirlik ve test kapsamı', 'Kritik ihtiyaçlar “sonradan ek iş”e dönüşebilir'],
            ['Hesaplar ve sahiplik', 'Alan adı, barındırma, lisans, kaynak kod ve üçüncü taraf hesaplarının sahibi', 'Yayın sonrası erişim ve devamlılık riski'],
            ['Yayın sonrası', 'Hata düzeltme, bakım, destek, eğitim ve değişiklik talebi yaklaşımı', 'Teslimden sonra kimin ne yapacağı belirsiz kalır']
          ]
        }
      },
      {
        id: 'kabul-olcutleri-ve-sonraki-adim',
        label: 'Yayına hazır olma',
        heading: '“Bitti” demek için görünüşten daha fazlasını kontrol edin.',
        paragraphs: [
          'Web sitesi yalnız tasarım dosyası onaylandığında tamamlanmış sayılmaz. Gerçek cihazda kullanıcı görevini tamamlayabilmeli; form, ödeme veya randevu gibi kritik akışlar ilgili ekibe doğru veri iletmeli; gerekli içerikler, yasal metinler ve teknik yönlendirmeler yerinde olmalıdır. E-ticaret söz konusuysa altyapı kararı için <a href="/blog/e-ticaret-altyapisi-nasil-secilir/">e-ticaret altyapısı seçme rehberini</a> projenin başında değerlendirmek, sonradan zorunlu değişiklikleri azaltır.'
        ],
        checklist: [
          'Ana kullanıcı akışı mobil ve masaüstünde gerçek içerikle tamamlanıyor.',
          'Form, ödeme, randevu veya diğer kritik işlem için başarı ve hata senaryoları test edildi.',
          'İçerik, görsel kullanım hakları, iletişim bilgileri ve yasal metinler yetkili kişilerce onaylandı.',
          'Alan adı, barındırma, analiz, reklam ve üçüncü taraf hesaplarına doğru kişilerin erişimi var.',
          'Eski siteden geçiş varsa URL yönlendirmeleri ve önemli arama sayfaları kontrol edildi.',
          'Temel performans, erişilebilirlik ve taranabilirlik kontrolleri yayın ortamında yapıldı.',
          'Yayın sonrası ilk inceleme tarihi, sorumlusu ve bakılacak veriler belirlendi.'
        ],
        callout: 'En iyi teklif, en uzun özellik listesi değildir. İş hedefini karşılayan, sorumlulukları açıkça dağıtan ve yayına kadar doğrulanabilir kabul ölçütleri sunan tekliftir.'
      }
    ],
    sources: [
      { label: 'Google — İnsan odaklı ve güvenilir içerik rehberi', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Google — SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'W3C WAI — Web projelerinde erişilebilirliği planlama ve yönetme', url: 'https://www.w3.org/WAI/planning-and-managing/' }
    ]
  },
  ...newBlogPosts
];

const slugs = new Set(blogPosts.map((post) => post.slug));
if (slugs.size !== blogPosts.length) throw new Error('Every blog post slug must be unique.');
for (const post of blogPosts) {
  for (const field of ['published', 'modified']) {
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(post[field]) || Number.isNaN(Date.parse(post[field]))) {
      throw new Error(`${post.slug} has an invalid ${field} timestamp.`);
    }
  }
  if (Date.parse(post.modified) < Date.parse(post.published)) {
    throw new Error(`${post.slug} has a modified date before its publication date.`);
  }
  if (new Set(post.related).size !== post.related.length) {
    throw new Error(`${post.slug} contains duplicate related-post slugs.`);
  }
  for (const relatedSlug of post.related) {
    if (!slugs.has(relatedSlug)) throw new Error(`${post.slug} references missing related post ${relatedSlug}.`);
    if (relatedSlug === post.slug) throw new Error(`${post.slug} cannot relate to itself.`);
  }
  const sectionIds = post.sections.map((section) => section.id);
  if (new Set(sectionIds).size !== sectionIds.length) throw new Error(`${post.slug} contains duplicate section ids.`);
}

export const blogPostBySlug = new Map(blogPosts.map((post) => [post.slug, post]));
