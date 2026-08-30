import { newBlogPosts } from './seo-growth-posts.mjs';
import { searchIntentPosts } from './search-intent-posts.mjs';
import { commercialIntentPosts } from './commercial-intent-posts.mjs';
import { buyerIntentPosts } from './buyer-intent-posts.mjs';
import { problemIntentPosts } from './problem-intent-posts.mjs';
import { conversionIntentPosts } from './conversion-intent-posts.mjs';
import { technicalSeoPosts } from './technical-seo-posts.mjs';

export const blogPosts = [
  ...searchIntentPosts,
  ...commercialIntentPosts,
  ...buyerIntentPosts,
  ...problemIntentPosts,
  ...conversionIntentPosts,
  ...technicalSeoPosts,
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
    faq: [
      { question: 'Web sitesi briefi neden önemlidir?', answer: 'Brief; projenin iş hedefini, öncelikli kullanıcısını, zorunlu şablonlarını ve teslim sınırlarını baştan belirleyerek yanlış beklenti, gecikme ve ek maliyet risklerini önler.' },
      { question: 'Brief hazırlarken en sık yapılan hata nedir?', answer: 'Yalnızca tasarım zevklerini ve sayfa sayısını belirtip, ziyaretçinin yapması gereken ana eylemi, içerik sorumlularını ve kabul ölçütlerini tanımlamamaktır.' },
      { question: 'Kapsam dışı maddeler briefte yer almalı mıdır?', answer: 'Evet; fotoğraf çekimi, içerik üretimi veya CRM lisansı gibi dahil olmayan hizmetlerin yazılması iki taraf arasındaki beklentiyi netleştirir.' }
    ],
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
    faq: [
      { question: 'Teknik SEO kontrolü ne zaman yapılmalıdır?', answer: 'Site yayına alınmadan önce test ortamında başlatılmalı; yayından hemen sonra ve düzenli aralıklarla log ve Search Console denetimleriyle sürdürülmelidir.' },
      { question: 'Canonical etiketi bir yönlendirme midir?', answer: 'Hayır. Canonical bir arama motoru sinyalidir; kullanıcıyı başka sayfaya aktarmaz, arama motoruna tercih edilen orijinal URL’yi bildirir.' },
      { question: 'Sitemap dosyasında hangi sayfalar yer almalıdır?', answer: 'Sitemap yalnızca 200 yanıtı veren, canonical etiketi kendine işaret eden ve dizine eklenmesi istenen güncel sayfaları içermelidir.' }
    ],
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
    description: 'GEO, AEO ve AI arama görünürlüğünü KDD 2024 akademik bulguları, teknik SEO, özgün kanıt, bot erişimi ve ölçüm üzerinden açıklayan güncel rehber.',
    keywords: ['GEO nedir', 'AI arama optimizasyonu', 'Google AI Overviews', 'AEO', 'KDD GEO'],
    category: 'SEO & GEO',
    published: '2026-08-21T09:20:00+03:00',
    modified: '2026-08-30T00:00:00+03:00',
    readingTime: 14,
    answer: 'GEO (generative engine optimization), içeriğin üretken yapay zekâ destekli arama ve yanıt deneyimlerinde bulunma, kullanılma ve kaynak gösterilme olasılığını geliştirmeyi amaçlayan çalışmalara verilen addır. Google açısından bunun ayrı bir hile veya teknik katmanı yoktur: AI Overviews ve AI Mode görünürlüğünün temeli indekslenebilir, özgün, insan odaklı içerik ve yerleşik SEO uygulamalarıdır.',
    takeaways: [
      'Google ve AI motorları için GEO’nun temeli taranabilir statik HTML ve Search kalite sistemleridir.',
      'KDD 2024 çalışmasındaki “%40’a kadar” sonuç, önceden seçilmiş kaynakların yer aldığı kontrollü benchmarka aittir; canlı Google sırası veya kalıcı trafik garantisi değildir.',
      'Google ideal bir parça, kelime veya token uzunluğu önermiyor; içerik insan için anlaşılır bölümler hâlinde düzenlenmelidir.',
      'Sıra konumu, AI kaynak gösterimi (citation), marka anılması ve yapay zekâ yönlendirmesi (referral) ayrı ölçülür.'
    ],
    about: ['Generative Engine Optimization', 'Google AI Overviews', 'AI arama görünürlüğü', 'Information Gain'],
    related: ['web-sitesi-teknik-seo-kontrol-listesi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Arama temelli web altyapısını inceleyin',
    faq: [
      { question: 'GEO (Generative Engine Optimization) nedir?', answer: 'Web sitesi içeriğinin ve varlık sinyallerinin ChatGPT, Google AI Overviews ve Perplexity gibi üretken yapay zekâ yanıt motorları tarafından taranabilir, anlaşılabilir ve kaynak gösterilebilir hale getirilmesidir.' },
      { question: 'Yapay zekâ motorları hangi içerikleri kaynak gösterir?', answer: 'Tek bir yayınlanmış seçim formülü yoktur. Taranabilirlik ve konu alakası temel koşullardır; özgün deneyim, doğrulanabilir kanıt, açık kaynaklar ve iyi kullanıcı deneyimi içeriği daha yararlı bir kaynak adayı yapar.' },
      { question: 'llms.txt dosyası ne işe yarar?', answer: 'Bazı ajanlara önemli sayfaların isteğe bağlı temiz metin haritasını sunabilir. Google Search llms.txt dosyasını yok saydığını ve dosyanın Google görünürlüğüne ne olumlu ne olumsuz etkisi olduğunu açıkça belirtir.' },
      { question: 'Google AI Overviews ve AI Mode için site ayrıca açılmalı mı?', answer: 'Google Search Console’daki Search generative AI kontrolü varsayılan olarak dahil etme yönündedir ve yalnız bazı mülklerde kullanıma açılmış olabilir. Görünürlük hedefleniyorsa mülk sahibi bu ayarın “Include” konumunda olduğunu doğrulamalıdır; robots.txt veya özel bir HTML etiketi bu hesap ayarının yerini tutmaz.' },
      { question: 'Akademik GEO araştırmaları hangi taktikleri öneriyor?', answer: 'KDD 2024 kontrollü deneyleri kaynak ve istatistik ekleme gibi sunumların bazı sorgu alanlarında görünürlüğü artırabildiğini gösterdi. 2026 eleştirel incelemesi ise bunun organik keşif veya uzun dönem trafik etkisini kanıtlamadığını vurgular.' }
    ],
    sections: [
      {
        id: 'geo-seo-iliskisi',
        label: 'Temel tanım',
        heading: 'GEO, SEO’dan kopuk bir “AI için yazma” hilesi değildir.',
        paragraphs: [
          'Google’ın güncel rehberine göre AI Overviews ve AI Mode, çekirdek Search sıralama ve kalite sistemlerine dayanır. Sistem, bir soruyu alt sorgulara ayırabilir ve Search indexindeki alakalı sayfalardan bilgi getirebilir. Bu nedenle sayfa önce taranabilir, indexlenebilir ve snippet göstermeye uygun olmalıdır.',
          'ChatGPT Search (OAI-SearchBot), Claude (Claude-SearchBot), Perplexity (PerplexityBot) ve Bing Copilot tarayıcıları ve kaynak seçimi farklı ağırlıklara sahip olsa da ortak zemin nettir: Yetkili HTML içerik, sağlam teknik erişim, belirgin konu sahipliği, güncel birincil kaynak ve tutarlı marka varlığı.'
        ],
        table: {
          headers: ['Katman', 'SEO görevi', 'AI / GEO görünürlüğüne katkısı'],
          rows: [
            ['Keşif', 'Tarama, index, robots.txt, sitemap', 'Kaynak adayının AI botları tarafından bulunabilmesi'],
            ['Alaka', 'Sorgu niyetini derin karşılayan sayfa', 'Alt sorgular ve RAG vektör eşleşmesi'],
            ['Güven (E-E-A-T)', 'Kaynak, yazar/yayıncı, gerçek işletme ve kanıt', 'Bilginin doğrulanabilirliği ve birincil atıf'],
            ['Deneyim', 'Hızlı (CWV), erişilebilir ve anlaşılır sayfa', 'Kullanıcının kaynaktan gelince görevini tamamlaması'],
            ['Ölçüm', 'Search Console ve AI referral analizi', 'Görünürlüğün gerçek iş etkisini ayırabilme']
          ]
        }
      },
      {
        id: 'akademik-geo-bulgulari',
        label: 'Akademik bulgular',
        heading: 'KDD 2024 ve üniversite araştırmalarına göre en etkili GEO stratejileri.',
        paragraphs: [
          'Princeton, Georgia Tech ve Allen AI araştırmacılarının KDD 2024 konferansında sunduğu öncü GEO araştırması (*Aggarwal et al., arXiv:2311.09735*), üretken arama motorlarının kaynak seçme mekanizmalarını 10.000 sorguluk kontrollü benchmark (GEO-bench) üzerinde inceledi.',
          'Çalışma bazı yöntemlerde görünürlüğün kontrollü deney koşullarında %40’a kadar artabildiğini bildirdi. Ancak kaynaklar deney bağlamına önceden alınmıştı; sonuç organik keşfi, canlı Google görünürlüğünü veya kalıcı trafiği ölçmedi. Aşağıdaki yöntemler bu sınırla yorumlanmalıdır:'
        ],
        list: [
          '<strong>Doğrulanabilir alıntılar:</strong> Gerçek kaynağı belli uzman ifadeleri, deneyde bazı alanlarda görünürlük metriğini iyileştirdi; sahte veya bağlamsız alıntı üretmek bu bulgunun sonucu değildir.',
          '<strong>İstatistiksel ve sayısal veri:</strong> Kaynağı, örneklemi ve tarihi açıklanan rakamlar metni daha doğrulanabilir yapabilir; salt sayı eklemek alaka veya kaynak seçimi garantisi vermez.',
          '<strong>Açık kaynak gösterimi:</strong> Birincil belgelere yakın bağlantılar okuyucunun iddiayı denetlemesini sağlar. Akademik deneyde yararlı bulunması, her motorun sayfayı seçeceği anlamına gelmez.'
        ],
        callout: 'Kanıt sınırı: KDD 2024 sunum biçiminin etkisini kontrollü bağlamda ölçtü; 2026 literatür incelemesi organik keşif ve uzun dönem ticari etki için nedensel kanıtın henüz sınırlı olduğunu belirtiyor.'
      },
      {
        id: 'rag-chunking-mimarisi',
        label: 'RAG mimarisi',
        heading: 'AI sistemleri içeriği nasıl işler; yayıncı neyi gerçekten kontrol edebilir?',
        paragraphs: [
          'Arama ve RAG sistemleri belgelerden ilgili bölümleri getirebilir; fakat ticari motorların sabit token boyutu, parça sınırı veya tek bir retrieval yöntemi kamuya açık değildir. Google’ın 2026 rehberi özellikle “AI için küçük parçalara bölme” zorunluluğu olmadığını belirtir.',
          'Yayıncının kontrol edebildiği bölüm daha sadedir: önemli metni taranabilir HTML içinde sunmak, anlaşılır başlık ve paragraflar kullanmak, iddiaları kaynaklandırmak ve sayfayı insanın görevini tamamlayacağı biçimde düzenlemek.'
        ],
        checklist: [
          'Ters piramit yapısı: Başlığın hemen altına 1-2 cümlelik doğrudan tanım veya özet yerleştirin.',
          'Semantik HTML5: article, section, h2, h3, p, table, dl ve ol etiketlerini doğru hiyerarşide kullanın.',
          'Sıfır render gecikmesi: Ana içeriği istemci tarafı JS ile geciktirmeden doğrudan sunucu/statik HTML olarak verin.',
          'Yapılandırılmış tablolar ve adımlı listeler: Karşılaştırmayı insan için denetlenebilir ve kolay taranır hâle getirin.'
        ]
      },
      {
        id: 'teknik-onkosullar',
        label: 'Teknik temel',
        heading: 'Kaynak gösterilmeden önce kaynak olabilecek bir sayfa kurun.',
        checklist: [
          'Sayfa herkese açık, canonical URL’de 200 yanıtıyla ve ana içerik HTML içinde sunuluyor.',
          'Googlebot, OAI-SearchBot, Claude-SearchBot, PerplexityBot ve Applebot robots.txt veya WAF tarafından engellenmiyor.',
          'Nosnippet gibi önizleme kısıtları görünürlük hedefiyle çelişmiyor; max-image-preview:large ve max-snippet:-1 aktif.',
          'Başlık, H1, giriş cevabı ve ana metin aynı birincil soruyu karşılıyor.',
          'Sayfanın yayıncısı, yayın/güncelleme tarihi ve birincil kaynakları görünür.',
          'Schema (JSON-LD), sayfada görünür gerçek içeriği tekrar ediyor; olmayan kişi, yorum veya sonuç üretmiyor.',
          'Dahili linkler konuyu ana hizmet, karar araçları ve ilgili rehberlerle bağlıyor.',
          'Mobil ziyaretçi yapay zekâ sonucundaki bağlantıdan geldiğinde ana cevabı ve sonraki adımı hızla bulabiliyor.'
        ]
      },
      {
        id: 'ajan-dostu-arayuz',
        label: 'AI ajanları',
        heading: 'Tarayıcı ajanları yalnız metni okumaz; arayüzdeki görevleri de anlamaya çalışır.',
        paragraphs: [
          'Google’ın 2026 üretken AI rehberi, tarayıcı ajanlarının ekran görüntüsü, DOM ve erişilebilirlik ağacını birlikte kullanabildiğini belirtiyor. Bu katman klasik indeksleme için yeni bir sıralama sinyali değildir; fakat teklif formu, hesaplayıcı veya rezervasyon akışını kullanıcı adına tamamlayan bir ajanın sayfayı doğru yorumlamasını kolaylaştırır.',
          'web.dev rehberindeki uygulanabilir ortak payda erişilebilirliktir: özel div tıklamaları yerine gerçek button ve bağlantılar, alanla ilişkilendirilmiş label, görünür ve kararlı eylemler, seçim durumunu makineye açıklayan ARIA ve işlem sonucunun arayüzde açıkça gösterilmesi.'
        ],
        checklist: [
          'Eylemler gerçek <strong>button</strong> veya <strong>a href</strong> öğeleriyle kurulur; tıklanabilir div kullanılmaz.',
          'Her input, select ve textarea görünür bir label veya eşdeğer erişilebilir ada sahiptir.',
          'Mod, sekme ve kalıcı seçim düğmeleri <strong>aria-selected</strong> veya <strong>aria-pressed</strong> durumunu sınıf adıyla birlikte günceller.',
          'Gizlenen alanlar yalnız görsel olarak değil <strong>hidden</strong> ile erişilebilirlik ağacından da çıkarılır.',
          'Hata ve sonuç metni işlem sonrasında görünür biçimde güncellenir; ajan yalnız renk değişimine bağımlı kalmaz.'
        ],
        callout: 'Ajan uyumluluğu için deneysel protokol eklemekten önce semantik HTML ve erişilebilir form temelini düzeltin. Bu iyileştirmeler insan kullanıcıya da doğrudan yarar sağlar.'
      },
      {
        id: 'emtia-olmayan-icerik',
        label: 'Bilgi kazanımı',
        heading: 'Kolayca üretilebilen özet yerine Bilgi Kazanımı (Information Gain) sunun.',
        paragraphs: [
          'Google’ın yayımlanmış patentleri bilgi kazanımı kavramını tarif eder; ancak bir patentteki yöntem, canlı sıralama sisteminde aynı biçimde kullanıldığının kanıtı değildir. Google’ın güncel yayıncı rehberi yine de özgün bakış açısı, ilk elden deneyim ve internette kolayca yeniden üretilemeyen içeriği açıkça önerir.',
          'Bir modelin internetteki ilk birkaç sonucu özetleyerek üretebileceği metin markaya özel değer taşımaz. Ayrışan içerik; gerçek karar ölçütü, uygulanmış yöntem, interaktif hesaplama aracı, özgün karşılaştırma tablosu ve açık kısıtlamaları içermelidir.'
        ],
        list: [
          '<strong>Birinci el araç ve modeller:</strong> Tarayıcıda anında çalışan açık formüllü hesaplayıcılar ve karar matrisleri.',
          '<strong>Özgün sentez:</strong> Birincil kaynakları ve resmî standartları gerçek bir iş kararına dönüştüren çerçeve.',
          '<strong>Açık sınır ve dürüstlük:</strong> Çözümün kimin için uygun olmadığı ve sonucun neden garanti edilemeyeceği.',
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
          'Search Console Generative AI Performance raporu mülkünüzde kullanıma açıldıysa AI Overviews ve AI Mode görünürlüğünü kaynak URL, ülke ve cihaz düzeyinde ayrı inceleyin. Bu raporu normal Web performansının yerine değil, yanına koyun; her mülkte aynı anda görünmeyebileceğini hesaba katın.',
          'Aynı ayarlar alanındaki Search generative AI kontrolü varsayılan olarak dahil etmedir. Görünürlük hedefleniyorsa “Include my site’s links and content” seçimini doğrulayın. Bu hesap düzeyi kontrol, Search dışındaki model eğitimi tercihi olan Google-Extended’dan ayrıdır ve robots.txt içine yazılan yeni bir direktif değildir.'
        ],
        table: {
          headers: ['Metrik', 'Ne anlatır?', 'Neyi anlatmaz?'],
          rows: [
            ['Organik gösterim / tıklama', 'Aramadaki sorgu ve sayfa talebi', 'Tüm yapay zekâ kaynak gösterimlerini'],
            ['Yapay zekâ kaynak gösterimi (Citation)', 'Bir cevapta görünür kaynak seçimini', 'Kaynağın bütün etkisini veya nedeni'],
            ['Marka mention’ı', 'Adın cevapta geçmesini', 'Kullanıcının siteye geldiğini'],
            ['AI referral', 'Kaynak bağlantısından gerçekleşen ziyareti', 'Görünür olup tıklanmayan cevapları'],
            ['Nitelikli dönüşüm', 'Görünürlüğün iş sonucuna yaklaşmasını', 'Tek başına hangi kanalın nedensel etkisini']
          ]
        },
        callout: 'Başlangıç seti: 10 marka, 10 kategori, 10 karşılaştırma ve 10 problem sorgusunu aylık aynı yöntemle örnekleyin; kişiselleştirme ve tarih notunu saklayın.'
      }
    ],
    sources: [
      { label: 'KDD 2024 — GEO: Generative Engine Optimization (Aggarwal et al., arXiv:2311.09735)', url: 'https://arxiv.org/abs/2311.09735' },
      { label: 'Martinez 2026 — GEO araştırmalarının eleştirel incelemesi (45 çalışma)', url: 'https://arxiv.org/abs/2607.14035' },
      { label: 'Google — Üretken AI özellikleri için optimizasyon rehberi', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
      { label: 'web.dev — Tarayıcı ajanları için erişilebilir ve semantik site rehberi', url: 'https://web.dev/articles/ai-agent-site-ux' },
      { label: 'Google Search Console — Generative AI Performance raporu', url: 'https://support.google.com/webmasters/answer/16984139' },
      { label: 'Google Search Console — Search generative AI dahil etme kontrolü', url: 'https://support.google.com/webmasters/answer/16908024' },
      { label: 'ACL 2024 — WebCiteS: Atıflı web yanıtlarında kaynak doğruluğu değerlendirmesi', url: 'https://aclanthology.org/2024.acl-long.806/' },
      { label: 'Google — İnsan odaklı, güvenilir içerik ve Bilgi Kazanımı', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'OpenAI — Search botları ve yayıncı erişimi', url: 'https://developers.openai.com/api/docs/bots' },
      { label: 'Bing Webmaster Guidelines', url: 'https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a' }
    ]
  },
  {
    slug: 'google-ve-ai-botlari-icin-site-indeksleme-rehberi',
    metaTitle: 'Google ve AI Botları İndeksleme Rehberi | Narvals',
    title: 'Google ve AI botları sitenizi nasıl tarar? İndeksleme rehberi',
    description: 'Googlebot ve güncel AI arama botlarının keşif, tarama ve indeksleme rolleri; robots.txt, sitemap, llms.txt, WAF ve ölçüm rehberi.',
    keywords: ['Googlebot indeksleme', 'AI bot taraması', 'GEO indeksleme', 'robots.txt AI', 'llms.txt'],
    category: 'SEO & GEO',
    published: '2026-08-30T00:00:00+03:00',
    modified: '2026-08-30T00:00:00+03:00',
    readingTime: 14,
    answer: 'Googlebot sayfaları keşfeder, tarar, gerektiğinde JavaScript’i işler ve Google dizini için değerlendirir. OAI-SearchBot, Claude-SearchBot ve PerplexityBot ise kendi ürünlerinin arama indeksleri için ayrı tarayıcılardır. Yayıncı bu sistemlerin kapalı kaynak seçme algoritmalarını kontrol edemez; fakat 200 yanıtı, erişilebilir HTML, doğru canonical, gerçek iç bağlantı, sitemap, WAF erişimi ve yararlı özgün içerikle uygunluğu güçlendirebilir.',
    takeaways: [
      'Arama botları (SearchBot) ile eğitim botları (Training Scraper) ayrıştırılmalıdır.',
      'Ticari AI motorları için evrensel veya doğrulanmış bir token/parça boyutu yoktur; Google küçük parçalara bölmenin gerekmediğini belirtir.',
      'KDD 2024’teki “%40’a kadar” artış, önceden seçilmiş kaynaklarla yürütülen kontrollü benchmark sonucudur.',
      'Patentler canlı Google sıralama sisteminin doğrudan kanıtı değildir; özgün içerik önerisi Google’ın güncel insan odaklı içerik rehberine dayanmalıdır.',
      'Doğru JSON-LD görünür içeriği açıklar; llms.txt isteğe bağlıdır ve Google Search tarafından yok sayılır.'
    ],
    about: ['Googlebot', 'Generative Engine Optimization', 'Dense Passage Retrieval', 'Information Gain', 'Knowledge Graph'],
    related: ['google-ai-aramalari-icin-geo-rehberi', 'web-sitesi-teknik-seo-kontrol-listesi', 'web-sitesi-hizlandirma-core-web-vitals-rehberi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Teknik SEO ve web altyapısını inceleyin',
    faq: [
      { question: 'Googlebot ve AI botları arasındaki temel fark nedir?', answer: 'Googlebot Google Search dizinini besler ve AI Overviews ile AI Mode için erişim kontrolü de Googlebot üzerinden yapılır. OAI-SearchBot, Claude-SearchBot ve PerplexityBot kendi şirketlerinin arama ürünlerine ait ayrı tarayıcılardır.' },
      { question: 'AI botlarının sayfayı doğru indekslemesi için HTML nasıl olmalıdır?', answer: 'Ana bilgi herkese açık ve taranabilir metin olarak sunulmalı; başlıklar, paragraflar, bağlantılar ve tablolar insan için anlaşılır olmalıdır. Statik HTML riski azaltır, ancak Google erişilebilir JavaScript içeriğini de işleyebilir.' },
      { question: 'robots.txt dosyasında hangi AI botlarına izin verilmelidir?', answer: 'Arama görünürlüğü hedefleniyorsa OAI-SearchBot, Claude-SearchBot, PerplexityBot ve Applebot engellenmemelidir. Perplexity’nin güncel kullanıcı aracısı Perplexity-User’dır; GPTBot, ClaudeBot, Google-Extended ve Applebot-Extended eğitim/model kullanımı tercihleriyle ayrı değerlendirilir.' },
      { question: 'Google Bilgi Kazanımı (Information Gain) skoru nedir?', answer: 'Bilgi kazanımı Google patentlerinde geçen bir kavramdır; kamuya açık, site sahibinin ölçebileceği bir Google Search skoru değildir. Patent, yöntemin canlı sıralamada kullanıldığını tek başına kanıtlamaz.' }
    ],
    sections: [
      {
        id: 'bot-mimarisi-ve-roller',
        label: 'Bot türleri',
        heading: 'Arama botları ile yapay zekâ eğitim tarayıcılarını birbirinden ayırın.',
        paragraphs: [
          'Botlar aynı amaca hizmet etmez. Bazıları arama indeksini oluşturur, bazıları kullanıcı isteğiyle tekil sayfa getirir, bazıları ise gelecekteki model geliştirmesi için veri toplar. Arama tarayıcısını engellemek ilgili üründeki kaynak görünürlüğünü azaltabilir; eğitim botunu engellemek aynı ürünün arama botunu otomatik olarak engellemez.',
          'OpenAI’ın resmî dokümantasyonuna göre OAI-SearchBot ChatGPT Search içindir, GPTBot model geliştirme içindir ve ChatGPT-User kullanıcı tarafından başlatılan erişimdir. Anthropic ve Perplexity de benzer biçimde ayrı bot rolleri yayımlar. Google AI Overviews ve AI Mode için ayrıca bir “AI botu” gerekmez; erişim Googlebot üzerinden yönetilir.'
        ],
        table: {
          headers: ['Kuruluş', 'Arama / Alıntı Botu (Açık Kalmalı)', 'Eğitim Botu (Tercihe Bağlı)'],
          rows: [
            ['OpenAI', 'OAI-SearchBot; kullanıcı isteği için ChatGPT-User', 'GPTBot'],
            ['Anthropic', 'Claude-SearchBot, Claude-User', 'ClaudeBot'],
            ['Google', 'Googlebot', 'Google-Extended (Search görünürlüğünden ayrı)'],
            ['Perplexity', 'PerplexityBot; kullanıcı isteği için Perplexity-User', '—'],
            ['Apple', 'Applebot', 'Applebot-Extended'],
            ['Meta', 'FacebookBot, Meta-ExternalFetcher', 'Meta-ExternalAgent']
          ]
        }
      },
      {
        id: 'rag-chunking-ve-dpr',
        label: 'Parçalama mekaniği',
        heading: 'RAG sistemlerinin ayrıntıları kapalıdır; içeriği insan için düzenleyin.',
        paragraphs: [
          'RAG araştırmalarında belge, pasaj veya önerme düzeyinde farklı retrieval yöntemleri denenir. Bu akademik mimariler, Google, ChatGPT Search, Claude veya Perplexity’nin üretim sisteminde aynı token sınırlarıyla kullanıldığını göstermez.',
          'Google’ın Temmuz 2026 rehberi sabit bir parça boyutu olmadığını ve içeriği AI için küçük bloklara bölmenin gerekmediğini açıkça söyler. Başlık, paragraf, liste ve tabloları okuyucunun konuyu izlemesi ve iddiayı denetlemesi için kullanın.'
        ],
        ordered: [
          '<strong>Ters Piramit Başlangıcı (Definitional Lede):</strong> Her H2 veya H3 başlığının ilk cümlesinde konunun net ve bağımsız tanımını verin. Belirsiz zamirler (“bu yöntem, onlar, bunlar”) yerine açık varlık adını kullanın.',
          '<strong>Sayısal ve İstatistiksel Destek:</strong> Yalnız kaynağı, tarihi, örneklemi ve sınırı açıklanabilen rakamları kullanın.',
          '<strong>Doğrulanabilir Uzman Alıntıları:</strong> Gerçek bir görüşü bağlamı ve kaynağıyla aktarın; görünürlük yüzdesi veya kaynak seçimi garantisi vermeyin.',
          '<strong>Yapılandırılmış Tablolar:</strong> Karşılaştırmaları tabloya yalnız ilişkiyi insan için gerçekten daha anlaşılır kılıyorsa dönüştürün.'
        ],
        callout: 'Kritik kural: Bir paragraf kendi başlığıyla birlikte kopyalanıp tek başına okunduğunda hiçbir dış referansa ihtiyaç duymadan anlaşılabilmelidir.'
      },
      {
        id: 'bilgi-kazanimi-patenti',
        label: 'Information Gain',
        heading: 'Google’ın Bilgi Kazanımı (Information Gain) patenti nasıl çalışır?',
        paragraphs: [
          'Google’ın US 10,846,346 B2 numaralı patenti, bir kullanıcının daha önce gördüğü belgeler bağlamında yeni bilgi miktarını tahmin eden bir yaklaşım tarif eder. Patent metni kamuya açıktır; ancak bu, yöntemin güncel Search sıralamasında aynı biçimde kullanıldığını kanıtlamaz.',
          'Uygulama kararı patent varsayımına değil, Google’ın güncel ve açık rehberine dayanmalıdır: kolayca yeniden üretilemeyen, ilk elden deneyim veya özgün bakış sunan, insan için yararlı içerik üretin; seri ve düşük değerli sayfalardan kaçının.'
        ],
        checklist: [
          'Her konuda rakiplerde bulunmayan en az 2 özgün veri noktası, metrik veya karar tablosu ekleyin.',
          'Kullanıcının kendi verisini girdiği interaktif JavaScript karar ve hesaplama araçları sunun.',
          'Teorik tavsiye yerine gerçek sınırlamaları, maliyetleri ve kimler için uygun olmadığını açıkça yazın.',
          'Editoryal kontrolsüz, jenerik AI metin üretiminden kaçının; insan uzman doğrulaması uygulayın.'
        ]
      },
      {
        id: 'discovery-altyapisi',
        label: 'Keşif dosyaları',
        heading: 'robots.txt, llms.txt ve IndexNow ile gerçek zamanlı keşif mimarisi.',
        paragraphs: [
          'Sitemap keşfe yardımcı olur ama tarama veya indeks garantisi vermez. Sayfanın gerçek, taranabilir iç bağlantılarla bulunması; canonical sinyallerinin tutarlı olması; sunucu ve WAF’ın botlara 200 yanıtı vermesi daha temel koşullardır.',
          'robots.txt erişim tercihini ve sitemap adresini bildirir. IndexNow destekleyen arama motorlarına değişiklik bildirir; Google IndexNow kullanmaz. llms.txt bazı ajanlar için isteğe bağlı bir özet olabilir, ancak ortak bir indeksleme standardı değildir ve Google Search dosyayı yok sayar.'
        ],
        table: {
          headers: ['Protokol / Dosya', 'Muhatap Sistem', 'Birincil Görevi'],
          rows: [
            ['robots.txt', 'Tüm botlar ve web crawler’ları', 'Erişim izinlerini ve sitemap adresini bildirmek'],
            ['sitemap.xml', 'Googlebot, Bingbot, YandexBot', 'Kanonik URL listesi, görsel meta ve lastmod tarihi'],
            ['llms.txt', 'Bu deneyi desteklemeyi seçen ajanlar', 'İsteğe bağlı yapılandırılmış özet; HTML’nin yerine geçmez'],
            ['llms-full.txt', 'Dosyayı kullanmayı seçen ajanlar', 'İsteğe bağlı tam metin kopyası; indeks garantisi vermez'],
            ['IndexNow API', 'Bing Copilot, Yandex, Seznam', 'Yeni ve değişen sayfaları gerçek zamanlı dizine iletmek']
          ]
        }
      },
      {
        id: 'jsonld-ve-varlik-graflari',
        label: 'Şema mimarisi',
        heading: 'Google Knowledge Graph ve AI için birbirine bağlı JSON-LD grafı.',
        paragraphs: [
          'JSON-LD nesneleri aynı `@id` ile bağlandığında yayıncı, sayfa ve içerik ilişkileri daha tutarlı ifade edilebilir. Tek bir `@graph` kullanmak bakım kolaylığı sağlar; Google ayrı geçerli JSON-LD bloklarını da işleyebilir ve birleşik graf zorunlu değildir.',
          'sameAs yalnız gerçekten aynı varlığı temsil eden resmî veya doğrulanabilir profil için kullanılmalıdır. Rastgele Wikidata/Wikipedia bağlantıları, uzmanlık anahtar kelimeleri veya görünmeyen bilgiler varlık doğruluğunu artırmaz.'
        ],
        callout: 'Doğrulama: Google Rich Results Test ve Schema.org Validator üzerinde 0 hata ve 0 uyarı hedeflenmelidir.'
      },
      {
        id: 'olcum-ve-raporlama',
        label: 'Performans takibi',
        heading: 'AI indeksleme ve arama görünürlüğünü nasıl ölçeceksiniz?',
        paragraphs: [
          'Yapay zekâ yanıtlarında yer almayı klasik sıra takibiyle ölçmek imkansızdır; çünkü AI yanıtları kişiselleştirilmiş ve anlık üretilir. Başarı şu 4 eksende takip edilmelidir:',
          'Search Console Generative AI Performance raporundaki AI Overviews gösterimleri, web sunucu loglarındaki OAI-SearchBot ve Claude-SearchBot 200 HTTP yanıtları, yönlendirme (referral) analitiğindeki AI kaynaklı oturumlar ve marka sorgularındaki doğrudan talep artışı.'
        ],
        checklist: [
          'Haftalık olarak bot loglarında 4xx veya 5xx tarama hatalarını denetleyin.',
          'Search Console URL Denetimi ile önemli sayfaların taranma ve indeks durumunu doğrulayın.',
          'Analytics üzerinde chatgpt.com, perplexity.ai ve claude.ai yönlendirme trafiğini ayrı segmentte izleyin.',
          'Hedeflenen 20 anahtar karar sorgusunu aylık periyotlarla sabit prompt setiyle test edin.'
        ]
      }
    ],
    sources: [
      { label: 'KDD 2024 — GEO: Generative Engine Optimization (Aggarwal et al., arXiv:2311.09735)', url: 'https://arxiv.org/abs/2311.09735' },
      { label: 'EMNLP 2024 — Dense X Retrieval: What Retrieval Granularity Should We Use? (Chen et al.)', url: 'https://arxiv.org/abs/2312.06648' },
      { label: 'Google US Patent 10,846,346 B2 — Contextual Estimation of Information Gain Score', url: 'https://patents.google.com/patent/US10846346B2/en' },
      { label: 'Google Search Central — Arama İndeksleme ve Tarama Esasları', url: 'https://developers.google.com/search/docs/crawling-indexing' },
      { label: 'Google Search Central — Üretken AI özellikleri için optimizasyon rehberi', url: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide' },
      { label: 'OpenAI — Crawler ve Arama Botu Dokümantasyonu (OAI-SearchBot)', url: 'https://developers.openai.com/api/docs/bots' },
      { label: 'Anthropic — Claude Search ve Web Tarama Politikası', url: 'https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler' },
      { label: 'Perplexity — PerplexityBot ve Perplexity-User dokümantasyonu', url: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers' },
      { label: 'llmstxt.org — The /llms.txt Standard for Generative AI', url: 'https://llmstxt.org' },
      { label: 'IndexNow.org — Arama Motorları İçin Anlık İndeksleme Protokolü', url: 'https://www.indexnow.org' }
    ]
  },
  {
    slug: 'schema-org-ve-baglantili-jsonld-graflari',
    metaTitle: 'Schema.org ve JSON-LD Graf Mimarisi Rehberi | Narvals',
    title: 'Schema.org ve bağlantılı JSON-LD graf mimarisi rehberi',
    description: 'Google Knowledge Graph ve AI için Schema.org @graph mimarisi, Organization, Article, Wikidata sameAs ve knowsAbout entegrasyonu rehberi.',
    keywords: ['Schema.org rehberi', 'JSON-LD grafı', 'Knowledge Graph SEO', 'sameAs Wikidata', 'yapılandırılmış veri'],
    category: 'SEO & GEO',
    published: '2026-08-30T00:00:00+03:00',
    modified: '2026-08-30T00:00:00+03:00',
    readingTime: 14,
    answer: 'Schema.org işaretlemesi sayfadaki görünür kişi, kurum, içerik, ürün veya hizmet bilgisini makinece okunabilir biçimde açıklar. JSON-LD nesnelerini kalıcı @id değerleriyle bağlamak tutarlılığı ve bakımı kolaylaştırabilir; ancak tek bir @graph zorunlu değildir, Google AI görünürlüğü için özel schema yoktur ve yapılandırılmış veri sıralama ya da kaynak gösterimi garantisi vermez.',
    takeaways: [
      'Tek bir @graph bakım tercihi olabilir; ayrı ve geçerli JSON-LD blokları da desteklenir.',
      'Her ana varlık benzersiz ve kalıcı bir @id URI kimliğine sahip olmalıdır.',
      'sameAs yalnız gerçekten aynı varlığın doğrulanabilir profillerini göstermelidir; rastgele kavram sayfaları kullanılmamalıdır.',
      'knowsAbout destekleyici bir Schema.org özelliğidir; tek başına uzmanlık veya Google güveni kanıtlamaz.',
      'Schema.org Validator söz dizimini, Rich Results Test ise Google’ın desteklediği zengin sonuç uygunluğunu farklı kapsamlarla denetler.'
    ],
    about: ['Schema.org', 'Yapılandırılmış Veri', 'Knowledge Graph', 'JSON-LD', 'Varlık Tabanlı SEO'],
    mentions: ['Google Knowledge Graph', 'Wikidata', 'GraphRAG', 'E-E-A-T', 'Teknik SEO'],
    related: ['google-ve-ai-botlari-icin-site-indeksleme-rehberi', 'e-e-a-t-yazar-otoritesi-ve-google-guven-rehberi', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Teknik SEO ve yapılandırılmış veri hizmetini inceleyin',
    faq: [
      { question: 'Microdata mı yoksa JSON-LD mi tercih edilmelidir?', answer: 'Google ve W3C resmi olarak JSON-LD formatını önermektedir; HTML DOM yapısını kirletmeden script etiketi içinde temiz ve ayrıştırılabilir bir veri katmanı sağlar.' },
      { question: '@graph kullanmanın avantajı nedir?', answer: 'Yazar, yayıncı, sayfa ve hizmet gibi nesneleri kalıcı @id referanslarıyla ilişkilendirmeyi ve tekrar eden veriyi tek yerde yönetmeyi kolaylaştırır. Google için zorunlu değildir.' },
      { question: 'sameAs özelliği neden önemlidir?', answer: 'Bir varlığın gerçekten aynı varlığı temsil eden dış profillerini ilişkilendirebilir. Yanlış veya yalnız konu benzerliği taşıyan bağlantılar eklemek belirsizliği azaltmak yerine hatalı veri üretir.' },
      { question: 'Schema eklemek sıralamayı doğrudan yükseltir mi?', answer: 'Hayır. Doğru ve desteklenen yapılandırılmış veri bazı zengin sonuçlara uygunluk sağlayabilir; gösterim, tıklama artışı, Google sırası veya AI kaynak seçimi garanti edilmez.' }
    ],
    sections: [
      {
        id: 'kopuk-bloklar-vs-graph',
        label: 'Graf mimarisi',
        heading: 'Kopuk JSON-LD blokları yerine birleşik @graph mimarisi kurun.',
        paragraphs: [
          'Bir sayfada birden fazla geçerli JSON-LD script etiketi bulunabilir. Asıl risk blok sayısı değil; aynı varlığa farklı kimlik, ad, URL veya çelişkili özellikler verilmesidir.',
          'Tüm nesneleri tek bir `@graph` dizisinde toplamak ve `@id` referanslarıyla bağlamak (örneğin `"author": { "@id": "https://example.com/#organization" }`) bu tutarlılığı yönetmek için yararlı bir uygulama tercihidir.'
        ],
        table: {
          headers: ['Özellik', 'Kopuk JSON-LD Blokları', 'Birleşik @graph Mimarisi'],
          rows: [
            ['Varlık İlişkileri', 'Kopuk, bağımsız nesneler', '`@id` ile birbirine bağlı anlamsal graf'],
            ['Geçerlilik', 'Geçerliyse desteklenir', 'Geçerliyse desteklenir; zorunlu değildir'],
            ['AI / LLM Uyumu', 'Özel bir görünürlük etkisi kanıtlanmış değil', 'Özel bir görünürlük etkisi kanıtlanmış değil'],
            ['Kod Boyutu', 'Tekrarlayan logo ve kurum verisi', 'Tekilleştirilmiş, hafif ve temiz veri yapısı']
          ]
        }
      },
      {
        id: 'varlik-eslestirme-ve-wikidata',
        label: 'Varlık eşleştirme',
        heading: 'sameAs ve knowsAbout ile Google Knowledge Graph eşleştirmesi.',
        paragraphs: [
          'Arama sistemleri metin ve varlık ilişkilerinden yararlanabilir; fakat her kavramı bir Wikidata QID’sine bağlamak gerekli değildir. `sameAs`, konu benzerliği değil kimlik eşitliği ifade eder.',
          '`about`, `mentions` ve `knowsAbout` yalnız sayfada görünür, doğru ve sürdürülebilir bilgi için kullanılmalıdır. Bu özellikler işletmenin yetkinliğini tek başına doğrulamaz ve desteklenmeyen uzmanlık iddiası üretmemelidir.'
        ],
        ordered: [
          '<strong>Kurum @id Belirleme:</strong> Alan adının sonuna `/#organization` ekleyerek tekil bir URI tanımlayın.',
          '<strong>sameAs ile Gerçek Profiller:</strong> Yalnız kuruma ait olduğu doğrulanmış ve aynı varlığı temsil eden profilleri listeleyin.',
          '<strong>knowsAbout Taksonomisi:</strong> İşletmenin gerçekte sunduğu ve tecrübe sahibi olduğu 5-10 temel uzmanlık alanını ekleyin.',
          '<strong>about &amp; mentions Ayrımı:</strong> Sayfanın ana konusunu `about`, gerçekten değinilen yan varlıkları `mentions` ile ifade edin; dış kimlik bağlantısı zorunlu değildir.'
        ],
        callout: 'Kritik uyarı: Yapılandırılmış veri sayfada görünür içeriği doğru temsil etmelidir. Sunulmayan hizmet, sahte kişi, puan, yorum veya alakasız kimlik eklemeyin.'
      },
      {
        id: 'temel-sema-turleri',
        label: 'Şema türleri',
        heading: 'İşletmeler ve dijital stüdyolar için kritik Schema.org türleri.',
        paragraphs: [
          'Her sayfa türünün kendine özgü zorunlu ve önerilen şema özellikleri vardır. B2B işletmeler, stüdyolar ve içerik yayıncıları için temel türler şunlardır:',
          'Kurumlar için Organization / LocalBusiness, hizmet sayfaları için Service (ve `hasOfferCatalog`), karar rehberleri için BlogPosting / TechArticle, karar araçları için WebApplication ve soru-cevap blokları için FAQPage.'
        ],
        table: {
          headers: ['Sayfa Türü', 'Temel Schema Türü', 'Zorunlu / Kritik Özellikler'],
          rows: [
            ['Ana Sayfa', 'Organization, WebSite', 'name, url, logo, sameAs, knowsAbout, contactPoint'],
            ['Hizmet Sayfası', 'Service, WebPage', 'name, serviceType, provider (@id), areaServed, offers'],
            ['Blog / Rehber', 'BlogPosting / TechArticle', 'headline, author (@id), datePublished, dateModified, about'],
            ['Karar Aracı', 'WebApplication, WebPage', 'name, applicationCategory, operatingSystem, offers'],
            ['Tüm Sayfalar', 'BreadcrumbList', 'itemListElement (position, name, item)']
          ]
        }
      },
      {
        id: 'rich-results-ve-dogrulama',
        label: 'Doğrulama protokolü',
        heading: 'Yapılandırılmış verileri test etme ve canlıda izleme adımları.',
        paragraphs: [
          'Yazılan JSON-LD şemaları yayına alınmadan önce mutlaka iki aşamalı doğrulamadan geçirilmelidir: 1. Schema.org Validator (sentaks ve anlamsal standart kontrolü) ve 2. Google Rich Results Test (Google arama zengin sonuç uygunluğu).',
          'Search Console yalnız Google’ın desteklediği ve mülkte algılanan zengin sonuç türleri için geliştirme raporları gösterebilir; her Schema.org türü bu raporlarda yer almaz.'
        ],
        checklist: [
          'Sayfada görünen metin ile JSON-LD içindeki verilerin (fiyat, başlık, tarih) %100 örtüştüğünü doğrulayın.',
          'Gizlenmiş metinler veya yanıltıcı SSS (FAQ) eklemelerinden kaçının.',
          'ISO 8601 tarih formatını (`YYYY-MM-DDThh:mm:ssTZD`) eksiksiz kullanın.',
          'Kendi şemanızı hızlıca üretmek için Narvals Schema Markup Oluşturucu aracını kullanın.'
        ]
      }
    ],
    sources: [
      { label: 'Schema.org — Official Community Documentation & Specifications', url: 'https://schema.org' },
      { label: 'Google Search Central — Yapılandırılmış Veri Genel Kuralları', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' },
      { label: 'Google Search Central — Rich Results ve Desteklenen Şema Türleri', url: 'https://developers.google.com/search/docs/appearance/structured-data/search-gallery' },
      { label: 'W3C — JSON-LD 1.1 A JSON-based Serialization for Linked Data', url: 'https://www.w3.org/TR/json-ld11/' },
      { label: 'Wikidata.org — Global Entity Knowledge Base', url: 'https://www.wikidata.org' }
    ]
  },
  {
    slug: 'e-e-a-t-yazar-otoritesi-ve-google-guven-rehberi',
    metaTitle: 'E-E-A-T ve Yazar Otoritesi Kurma Rehberi | Narvals',
    title: 'E-E-A-T ve yazar otoritesi nasıl kurulur? Google güven rehberi',
    description: 'Google Search Quality Rater ilkelerine göre E-E-A-T, doğrulanabilir yazar biyografileri, editoryal şeffaflık ve varlık güveni inşa etme rehberi.',
    keywords: ['E-E-A-T nedir', 'yazar otoritesi', 'Google güven sinyalleri', 'Quality Rater Guidelines', 'E-E-A-T SEO'],
    category: 'SEO & GEO',
    published: '2026-08-30T00:00:00+03:00',
    modified: '2026-08-30T00:00:00+03:00',
    readingTime: 13,
    answer: 'E-E-A-T (Deneyim, Uzmanlık, Otoriterlik ve Güvenilirlik), Google’ın Arama Kalitesi Değerlendirme İlkeleri’nde (Quality Rater Guidelines) tanımlanan ve temel sıralama algoritmaları tarafından taranan güven çerçevesidir. Sahte yazar profilleri veya jenerik metinler yerine doğrulanabilir dijital ayak izine sahip uzman biyografileri, açık editoryal ilkeler, birinci el test kanıtları ve kurumsal şeffaflık ile inşa edilir.',
    takeaways: [
      'E-E-A-T’nin kalbinde “Güven (Trust)” yer alır; Deneyim, Uzmanlık ve Otorite güveni destekler.',
      'Doğrulanabilir dijital ayak izi (LinkedIn, yayınlar, akademik profil) olmayan sahte yazarlar risklidir.',
      'Birinci el test ekran görüntüleri, gerçek proje metrikleri ve vaka çalışmaları birinci “E”yi (Deneyim) kanıtlar.',
      'Açık künye, fiziksel adres, şirket unvanı, telefon ve editoryal politika sayfası zorunludur.',
      'YMYL (Paranız veya Hayatınız) konularında uzman doğrulaması ve inceleme kurulu şarttır.'
    ],
    about: ['E-E-A-T', 'Yazar Otoritesi', 'Google Güven Sinyalleri', 'Search Quality Raters', 'Editoryal Şeffaflık'],
    mentions: ['Information Gain', 'Knowledge Graph', 'Teknik SEO', 'İçerik Kalitesi', 'Kullanıcı Deneyimi'],
    related: ['schema-org-ve-baglantili-jsonld-graflari', 'google-ve-ai-botlari-icin-site-indeksleme-rehberi', 'kurumsal-web-sitesi-briefi-nasil-hazirlanir'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Güvenilir web ve içerik altyapısını inceleyin',
    faq: [
      { question: 'E-E-A-T doğrudan bir Google sıralama algoritması mıdır?', answer: 'E-E-A-T tek bir sıralama faktörü veya sayısal metrik değildir; Google’ın arama kalitesi değerlendiricilerine kılavuzluk eden ve temel sıralama algoritmalarının (Helpful Content, Core Ranking) ölçmeye çalıştığı bütüncül bir güven konseptidir.' },
      { question: 'Yapay zekâ (AI) ile içerik üretmek E-E-A-T’ye aykırı mıdır?', answer: 'Google yapay zekâ kullanımını tek başına cezalandırmaz; ancak uzman denetimi olmayan, özgün deneyim veya yeni veri içermeyen ölçekli AI metinleri düşük kalite (low quality) olarak değerlendirilir.' },
      { question: 'Yazar profilinde hangi bilgiler yer almalıdır?', answer: 'Yazarın tam adı, unvanı, profesyonel biyografisi, uzmanlık alanı, çalıştığı kurum, LinkedIn / GitHub / Scholar profilleri ve editoryal sorumluluğu açıkça belirtilmelidir.' },
      { question: 'Deneyim (Experience) faktörü içerikte nasıl kanıtlanır?', answer: 'Yalnızca teorik bilgi vermek yerine; gerçek test sonuçları, kullanılan araçların arayüz ekran görüntüleri, yaşanan teknik zorluklar ve somut vaka metrikleri paylaşarak kanıtlanır.' }
    ],
    sections: [
      {
        id: 'eeat-dort-sutunu',
        label: 'E-E-A-T sütunları',
        heading: 'E-E-A-T’nin dört sütunu: Deneyim, Uzmanlık, Otorite ve Güven.',
        paragraphs: [
          'Google 2022 yılında E-A-T kavramına ilk “E” harfini, yani “Deneyim (Experience)” boyutunu eklemiştir. Bir konuyu yalnızca teorik olarak bilmek (Uzmanlık) yetersizdir; o ürünü bizzat kullanmış, o kodu yazmış veya o projeyi canlıya almış olmak (Deneyim) en kritik ayırt edici sinyaldir.',
          'Tüm bu yapının merkezinde ise “Güvenilirlik (Trustworthiness)” yer alır. Deneyim, uzmanlık ve otorite sinyalleri, kullanıcıya ve arama motoruna güven vermek için çalışan destekleyici mekanizmalardır.'
        ],
        table: {
          headers: ['Sütun', 'Ne Anlama Gelir?', 'Sitede Nasıl Kanıtlanır?'],
          rows: [
            ['Deneyim (Experience)', 'Konuyla ilgili birinci el pratik tecrübe', 'Gerçek test fotoğrafları, kod demoları, vaka metrikleri'],
            ['Uzmanlık (Expertise)', 'Konu hakkındaki derin teorik ve teknik bilgi', 'Akademik/sektörel sertifikalar, detaylı teknik analizler'],
            ['Otoriterlik (Authoritativeness)', 'Sektördeki tanınırlık ve referans gösterilme', 'Bağımsız basın atıfları, Wikipedia/Wikidata kayıtları, podcastler'],
            ['Güvenilirlik (Trustworthiness)', 'Şeffaflık, dürüstlük, güvenlik ve doğruluk', 'Açık künye, HTTPS, şeffaf fiyat/koşullar, editoryal ilkeler']
          ]
        }
      },
      {
        id: 'yazar-ve-editoryal-seffaflik',
        label: 'Yazar şeffaflığı',
        heading: 'Doğrulanabilir yazar biyografileri ve editoryal politika.',
        paragraphs: [
          'Anonim yazarlar veya stok fotoğraflarla oluşturulmuş sahte uzman profilleri Google’ın kalite sistemleri tarafından hızla tespit edilir. Her içeriğin altında yazarın adı, uzmanlık alanı ve harici doğrulanabilir sosyal/akademik profillerine bağlantı yer almalıdır.',
          'Ayrıca sitenin bir `/editoryal-ilkeler/` sayfası barındırması; içeriklerin nasıl hazırlandığını, kaynakların nasıl doğrulandığını ve hata düzeltme süreçlerini şeffafça açıklaması kurumsal güveni perçinler.'
        ],
        ordered: [
          '<strong>Yazar Biyografi Sayfası:</strong> Her yazar için ad, fotoğraf, biyografi ve tüm makalelerini listeleyen ayrı bir yazar sayfası oluşturun.',
          '<strong>Harici Varlık Bağlantıları:</strong> Yazarın LinkedIn, Twitter, GitHub veya Google Scholar profillerini şemada `sameAs` ile bağlayın.',
          '<strong>Editoryal İlke Yayını:</strong> Kaynaklandırma, yapay zekâ kullanım şeffaflığı ve düzeltme politikanızı sitede açıkça yayımlayın.',
          '<strong>Tarih Şeffaflığı:</strong> İlk yayın tarihi ile son güncelleme tarihini kullanıcılara ve botlara açıkça gösterin.'
        ],
        callout: 'Google Kalite Değerlendirici İlkeleri: “Sayfanın arkasında kimin olduğunu bilmek, güven değerlendirmesinin en temel adımıdır.”'
      },
      {
        id: 'birinci-el-kanitlar',
        label: 'Özgün kanıtlar',
        heading: 'İçerikte birinci el deneyim ve vaka kanıtı üretme yöntemleri.',
        paragraphs: [
          'İnternetteki mevcut kaynakların özetini çıkaran jenerik içerikler Google’ın Bilgi Kazanımı (Information Gain) filtrelerine takılır. E-E-A-T puanı yüksek bir içerik mutlaka özgün test verisi, karşılaştırma matrisi veya hesaplama aracı içermelidir.',
          'Örneğin bir teknik makalede yalnızca “hız optimizasyonu önemlidir” demek yerine, laboratuvar ve saha test sonuçlarını, kullanılan sunucu konfigürasyonlarını ve öncesi/sonrası metriklerini paylaşmak gerekir.'
        ],
        checklist: [
          'Metin içinde “bizim testlerimizde”, “gerçekleştirdiğimiz projede” gibi birinci el deneyim ifadeleri ve verileri kullanın.',
          'Ekran görüntüleri ve grafiklerin üzerinde özgün marka filigranı veya veri kaynağı belirtin.',
          'Konunun sınırlarını ve hangi durumlarda önerilen yöntemin çalışmayacağını dürüstçe açıklayın.',
          'Kullanıcıların kendi durumlarını test edebilecekleri interaktif karar araçları sunun.'
        ]
      },
      {
        id: 'kurumsal-guven-sinyalleri',
        label: 'Kurumsal künye',
        heading: 'İletişim, yasal kimlik ve kurumsal şeffaflık standartları.',
        paragraphs: [
          'Bir web sitesinin güvenilirliği yalnız blog yazılarıyla değil, sitenin tamamındaki kurumsal şeffaflıkla belirlenir. Footer ve iletişim sayfalarında tam ticari unvan, açık fiziksel adres, doğrulanmış e-posta ve telefon numarası yer almalıdır.',
          'Ayrıca gizlilik politikası, kullanım koşulları, çerez politikası ve gerekiyorsa iade/iptal şartları standartlara uygun olarak erişilebilir olmalıdır.'
        ],
        checklist: [
          'Footer alanında tam ticari unvan ve tescilli marka adını belirtin.',
          'İletişim sayfasında yanıt verme sürelerini ve resmi destek kanallarını netleştirin.',
          'Müşteri yorumlarında doğrulanabilir üçüncü taraf platformlara (Google İşletme, Trustpilot vb.) atıfta bulunun.',
          'Site genelinde E-E-A-T denetimi yapmak için Narvals Bilgi Kazanımı Denetleyicisini kullanın.'
        ]
      }
    ],
    sources: [
      { label: 'Google Search Quality Rater Guidelines (Aralık 2022 / Güncel Versiyon)', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Google Search Central — İnsan Odaklı ve Güvenilir İçerik Oluşturma', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
      { label: 'Google Search Central — Arama Kalitesi ve E-E-A-T Açıklaması', url: 'https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t' },
      { label: 'W3C — Web İtibar ve Otorite Standartları', url: 'https://www.w3.org' }
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
    faq: [
      { question: 'Hazır e-ticaret paketi mi özel altyapı mı seçilmeli?', answer: 'Standart ürün satışı ve düşük özelleştirme ihtiyacında hazır SaaS paketler hızlı ve ekonomiktir; özel operasyonel kurallar, yüksek hacim ve derin entegrasyonlarda özel altyapı tercih edilir.' },
      { question: 'E-ticaret altyapısı seçerken en kritik kriter nedir?', answer: 'Ödeme kuruluşları, kargo, fatura/ERP entegrasyonları, sayfa yükleme hızı ve komisyonsuz veri dışa aktarma (export) yetkinliğidir.' },
      { question: 'Altyapı değişikliği SEO sıralamalarını etkiler mi?', answer: 'Doğru 301 yönlendirme haritası ve URL hiyerarşisi korunmazsa organik trafik kaybı yaşanabilir; taşıma planı yayından önce hazırlanmalıdır.' }
    ],
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
    faq: [
      { question: 'Özel yazılım ne zaman gereklidir?', answer: 'İşletmeye özgü iş kuralları rekabet avantajı sağlıyorsa, kopuk sistemlerin otomatik konuşması gerekiyorsa veya hazır SaaS araçların operasyonu karşılayamadığı durumlarda gereklidir.' },
      { question: 'Özel yazılımın en büyük riski nedir?', answer: 'Kapsamın baştan netleştirilmemesi sonucu geliştirme süresinin ve maliyetin öngörülemeyen şekilde uzamasıdır.' },
      { question: 'MVP (Minimum Uygulanabilir Ürün) yaklaşımı neden önemlidir?', answer: 'Tüm fikirleri aynı anda geliştirmek yerine en kritik iş problemini çözen ilk sürümü yayına alarak riski ve yatırım maliyetini azaltır.' }
    ],
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
    faq: [
      { question: 'Yalnızca Meta Pixel kullanmak neden yetersiz kalabilir?', answer: 'Reklam engelleyiciler, tarayıcı gizlilik kısıtlamaları (iOS 14+) ve ağ kopmaları nedeniyle tarayıcı pikselleri veri kaybına uğrayabilir.' },
      { question: 'Conversions API (CAPI) nasıl çalışır?', answer: 'Dönüşüm verisini tarayıcı üzerinden değil, doğrudan işletme sunucusundan Meta sunucularına güvenli ve şifreli olarak iletir.' },
      { question: 'Event Deduplication (Tekilleştirme) nedir?', answer: 'Hem Pixel hem CAPI kullanıldığında aynı siparişin iki kez sayılmasını önlemek için her olaya tekil bir Event ID atanması işlemidir.' }
    ],
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
    faq: [
      { question: 'PDF menü neden müşteri deneyimini olumsuz etkiler?', answer: 'Büyük dosya boyutu yavaş açılır, mobilde sürekli yakınlaştırma (zoom) gerektirir ve fiyat/stok anlık güncellenemez.' },
      { question: 'Web tabanlı dinamik QR menünün avantajı nedir?', answer: '1 saniyenin altında açılır, mobil uyumludur, yönetim panelinden anlık ürün/fiyat güncellenir ve çoklu dil desteği sunar.' },
      { question: 'QR menü basılı menünün yerini tamamen alır mı?', answer: 'Hibrit kullanım önerilir; masada estetik bir QR kod bulunurken isteyen misafirler için sınırlı sayıda basılı menü bulundurulabilir.' }
    ],
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
    faq: [
      { question: 'Rezervasyon sistemi ile randevu sistemi arasındaki fark nedir?', answer: 'Rezervasyon masa, alan ve toplam kapasiteye göre planlanırken; randevu belirli bir uzman/personel ve hizmet süresine göre planlanır.' },
      { question: 'Online rezervasyon sisteminde no-show (gelmeme) nasıl azaltılır?', answer: 'Otomatik SMS/WhatsApp hatırlatmaları ve gerektiğinde ön provizyon veya kapora akışıyla gelmeme oranı düşürülür.' },
      { question: 'Sistem personelin çalışma saatlerini yönetebilir mi?', answer: 'Evet; mola saatleri, vardiya düzeni, izin günleri ve özel tatil kuralları panelden kolayca tanımlanabilir.' }
    ],
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
    faq: [
      { question: 'Web sitesi fiyatı neye göre belirlenir?', answer: 'Sayfa sayısından ziyade içerik hazırlığı, şablon çeşitliliği, özel işlevler, CMS ihtiyacı, entegrasyonlar ve bakım kapsamına göre belirlenir.' },
      { question: 'İlk kurulum ücreti ile yıllık maliyet arasındaki fark nedir?', answer: 'Kurulum tasarım ve yazılımı kapsarken; yıllık maliyet hosting, alan adı, lisanslar, SSL, güvenlik ve teknik desteği içerir.' },
      { question: 'Düşük fiyatlı hazır temalar neden sonradan pahalıya gelebilir?', answer: 'Gereksiz kod yükü hızı düşürebilir, güvenlik açıkları doğurabilir ve özelleştirme için sürekli dış desteğe ihtiyaç duydurabilir.' }
    ],
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
    faq: [
      { question: 'Web sitesi yaptırmadan önce ilk yapılması gereken nedir?', answer: 'Sitenin birincil iş hedefini (talep toplama, doğrudan satış, randevu vb.) ve hedef kitlenin karar kriterlerini netleştirmektir.' },
      { question: 'Teklifler nasıl karşılaştırılmalıdır?', answer: 'Sadece toplam rakama bakmak yerine; teslim edilecek şablonlar, içerik sorumluluğu, SEO temeli, kaynak kod sahipliği ve kabul ölçütleri üzerinden karşılaştırılmalıdır.' },
      { question: 'Kaynak kod ve hesap sahipliği kime ait olmalıdır?', answer: 'Alan adı, hosting, analitik ve kod lisanslarının mülkiyeti her zaman işletmenin kendi adına kayıtlı olmalıdır.' }
    ],
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
