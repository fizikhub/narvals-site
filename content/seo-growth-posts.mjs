export const newBlogPosts = [
  {
    slug: 'meta-reklam-butcesi-nasil-belirlenir',
    metaTitle: 'Meta Reklam Bütçesi Nasıl Belirlenir? | Narvals',
    title: 'Meta reklam bütçesi nasıl belirlenir? Planlama rehberi',
    description: 'Meta reklam bütçesini hedef, birim ekonomi, ölçüm hazırlığı, test kapsamı ve risk sınırlarıyla belirlemek için uygulanabilir planlama rehberi.',
    keywords: ['Meta reklam bütçesi', 'Facebook reklam bütçesi', 'Instagram reklam bütçesi', 'reklam bütçesi planlama'],
    category: 'Meta reklam',
    published: '2026-08-23T14:00:00+03:00',
    modified: '2026-08-23T14:00:00+03:00',
    readingTime: 10,
    answer: 'Meta reklam bütçesi, rakibin harcamasına veya tek bir hazır rakama göre değil; iş hedefi, kabul edilebilir sonuç maliyeti, kampanya süresi, test edilecek değişken sayısı ve ölçüm güvenilirliği birlikte değerlendirilerek belirlenir. Önce işletmenin ekonomik sınırı ve ölçülebilir dönüşümü tanımlanır; ardından öğrenmeye yetecek fakat kaybı sınırlandıran bir test planı kurulur.',
    takeaways: [
      'Her işletme ve kampanya için geçerli tek bir doğru Meta reklam bütçesi yoktur.',
      'Bütçeden önce dönüşüm, ekonomik üst sınır ve veri kaynağı tanımlanmalıdır.',
      'Çok sayıda hedef kitle ve kreatif, aynı bütçeyi daha fazla test hücresine böler.',
      'Günlük bütçe bir planlama ortalamasıdır; harcama günlere eşit dağılmayabilir.',
      'Artırma, azaltma ve durdurma kuralları kampanya başlamadan yazılmalıdır.'
    ],
    about: ['Meta reklam bütçesi', 'Reklam testi', 'Birim ekonomi'],
    related: ['meta-pixel-ve-conversions-api-farki', 'meta-reklam-ajansi-secerken-sorulacak-sorular', 'sosyal-medya-yonetimi-neleri-kapsar'],
    servicePath: '/hizmetler/dijital-reklam/',
    serviceLabel: 'Meta reklam ve performans pazarlama hizmetini inceleyin',
    faq: [
      { question: 'Meta reklamları için minimum bütçe ne kadar olmalıdır?', answer: 'Sabit tek bir tutar yoktur. Kampanyanın öğrenme aşamasını tamamlayabilmesi için hedeflenen sonuç maliyetine ve test edilecek kreatif sayısına göre belirlenmelidir.' },
      { question: 'Günlük bütçe ile toplam bütçe arasındaki fark nedir?', answer: 'Günlük bütçe her gün için hedeflenen ortalama harcamayı belirlerken, toplam bütçe belirlenen tarih aralığındaki harcama üst sınırını kesin olarak sınırlar.' },
      { question: 'Düşük bütçeyle çok fazla reklam seti açmak doğru mudur?', answer: 'Hayır; bütçe çok fazla sete bölündüğünde hiçbir set yeterli veri toplayamaz ve algoritmanın optimizasyon performansı düşer.' }
    ],
    sections: [
      {
        id: 'tek-dogru-butce-yok',
        label: 'Kısa cevap',
        heading: 'Meta reklamlarında herkese uyan tek bir başlangıç bütçesi yoktur.',
        paragraphs: [
          'Aynı günlük tutar; satış değeri, satış döngüsü, hedef ülke, kampanya amacı, kreatif sayısı ve web sitesinin dönüşüm gücü farklı iki işletmede aynı anlama gelmez. Bu nedenle “ne kadar harcamalıyım?” sorusunu önce “hangi sonucu, hangi ekonomik sınır içinde ve ne kadar sürede öğrenmek istiyorum?” biçiminde yeniden kurun.',
          'Meta reklamları açık artırmayla dağıtır. Teslimatı yalnız teklif veya bütçe değil; tahmini eylem oranı ve reklam kalitesi gibi unsurlar da etkiler. Daha yüksek bütçe, zayıf teklifin, yetersiz kreatifin veya tamamlanamayan açılış sayfasının sorununu tek başına çözmez.'
        ],
        callout: 'Bütçe bir başarı garantisi değil, belirli bir soruya veri toplayabilmek için ayırdığınız kontrollü kaynaktır.'
      },
      {
        id: 'hedef-ve-ekonomik-sinir',
        label: 'Adım 01',
        heading: 'Önce sonucu ve işletmenin ekonomik üst sınırını tanımlayın.',
        paragraphs: [
          '“Etkileşim” ile “nitelikli teklif talebi” aynı sonuç değildir. Kampanya başlamadan önce birincil dönüşümü, bu dönüşümün nerede doğrulandığını ve işletme için ne kadar değer taşıdığını yazın. E-ticarette ödeme ve iptal/iade verisi; hizmet işinde ise formdan satışa uzanan CRM aşamaları hesaba katılmalıdır.',
          'Kabul edilebilir sonuç maliyeti tahmin değil, işletmenin gerçek verisinden türetilir. Veri yoksa kesin bir kârlılık eşiği varmış gibi davranmayın; varsayımları ayrı gösterin ve ilk dönemi doğrulama testi olarak planlayın.'
        ],
        table: {
          headers: ['İş modeli', 'Önce bilinmesi gerekenler', 'Planlama mantığı'],
          rows: [
            ['E-ticaret', 'Net gelir, ürün ve işlem kaynaklı değişken giderler, iade/iptal, hedef katkı', 'Reklama ayrılabilecek sipariş maliyetini gerçek katkı sınırı içinde tutun.'],
            ['Potansiyel müşteri', 'Nitelikli talebin müşteriye dönüşme oranı ve kabul edilebilir müşteri edinme maliyeti', 'Kabul edilebilir talep maliyetini doğrulanmış satış oranından türetin.'],
            ['Randevu veya rezervasyon', 'Tamamlanan randevu, gelmeme/iptal ve müşteriye dönüşme oranı', 'Yalnız form sayısını değil, gerçekleşen iş sonucunu esas alın.'],
            ['Henüz veri yok', 'Açık varsayımlar ve kaybedilebilecek test sınırı', 'Kesin hedef yerine öğrenme sorusu ve zarar durdurma kuralı belirleyin.']
          ]
        }
      },
      {
        id: 'butce-formulu',
        label: 'Adım 02',
        heading: 'Bütçeyi süre, hedef sonuç ve test kapsamıyla birlikte hesaplayın.',
        paragraphs: [
          'Basit planlama eşitliği “dönem bütçesi = planlanan günlük ortalama × gün sayısı”dır. Sonuç hedefinden ilerliyorsanız ikinci kontrol “dönem bütçesi = hedeflenen sonuç adedi × kabul edilebilir sonuç maliyeti” olabilir. İki hesap farklı bir bütçe çıkarıyorsa hedef, süre veya ekonomik sınırdan biri yeniden değerlendirilmelidir.',
          'Bu eşitlikler performans sözü vermez. Gerçek sonuç; açık artırma koşulları, teklif, hedefleme, reklam kalitesi, açılış sayfası ve ölçüm kaybı gibi etkenlerle değişir. Hesabın amacı belirsizliği görünür kılmaktır.'
        ],
        ordered: [
          '<strong>Dönüşümü seçin:</strong> Satın alma, nitelikli talep veya gerçekleşen randevu gibi iş sonucuna en yakın olayı belirleyin.',
          '<strong>Ekonomik sınırı yazın:</strong> Kabul edilebilir maliyeti ve onu oluşturan doğrulanmış veriyi belgeleyin.',
          '<strong>Süreyi tanımlayın:</strong> Sezon, satış döngüsü ve onay takvimi içinde anlamlı bir değerlendirme dönemi seçin.',
          '<strong>Test hücrelerini sayın:</strong> Hedef kitle, teklif, kreatif ve yerleşim değişkenlerinin bütçeyi nasıl böleceğini görün.',
          '<strong>Risk sınırı koyun:</strong> Hangi harcama veya kalite sinyalinde durulacağını başlangıçta kararlaştırın.'
        ]
      },
      {
        id: 'gunluk-ve-toplam-butce',
        label: 'Adım 03',
        heading: 'Günlük ve toplam bütçe seçeneklerini nakit akışınıza göre seçin.',
        paragraphs: [
          'Günlük bütçe, her takvim gününde aynı tutarın harcanacağı sözü değil, Meta tarafından günlük ortalama olarak kullanılan bir planlama değeridir. Toplam kampanya bütçesi ise belirli bir başlangıç ve bitiş dönemi için sınır koyar. Güncel harcama davranışı ve sınırlar hesap, kampanya türü ve platform ayarına göre canlı arayüzden doğrulanmalıdır.',
          'Her iki yöntemde de medya bütçesini ajans ücreti, kreatif üretim, araç, vergi ve açılış sayfası maliyetlerinden ayrı satırda gösterin. Böylece “reklam için ayrılan para” ile toplam pazarlama yatırımını karıştırmazsınız.'
        ],
        table: {
          headers: ['Seçenek', 'Ne zaman anlamlı olabilir?', 'Kontrol edilmesi gereken'],
          rows: [
            ['Günlük bütçe', 'Sürekli kampanya ve düzenli nakit akışı', 'Günlük dalgalanma, toplam dönem sınırı ve izleme sıklığı'],
            ['Toplam bütçe', 'Başlangıç ve bitişi belli lansman veya dönem', 'Takvim, bitiş tarihi ve dönem toplamı'],
            ['Kampanya düzeyi dağıtım', 'Birden fazla reklam seti arasında sistemin dağıtım yapması istendiğinde', 'Asgari/azami sınırlar ve iş öncelikleri'],
            ['Reklam seti düzeyi bütçe', 'Belirli bir test hücresine ayrı kontrol gerektiğinde', 'Parçalanan veri ve yönetim yükü']
          ]
        }
      },
      {
        id: 'test-ve-olcum-kapasitesi',
        label: 'Adım 04',
        heading: 'Test planını bütçeye değil, bütçeyi test planına bağlayın.',
        paragraphs: [
          'Aynı anda çok sayıda hedef kitle, kreatif, teklif ve açılış sayfası denemek her kombinasyona düşen veriyi azaltır. Önce en yüksek belirsizliği seçin; diğer değişkenleri mümkün olduğunca sabit tutun. Testin hipotezini, ana metriğini ve karar tarihini yazmadan yalnız yeni reklam eklemek öğrenme üretmez.',
          'Ölçüm altyapısı testten önce doğrulanmalıdır. Tarayıcı Pixel’i, Conversions API, olay eşleştirme ve yinelenen olayların tekilleştirilmesi; platform raporunun web analitiği ve CRM ile neden farklı olabileceğiyle birlikte ele alınmalıdır.'
        ],
        checklist: [
          'Birincil dönüşüm olayı gerçek kullanıcı akışında test edildi.',
          'Pixel ve varsa Conversions API aynı olayı çift saymayacak biçimde kontrol edildi.',
          'UTM adlandırması ile kampanya, reklam seti ve kreatif ayrımı belgeli.',
          'Her test için tek ana hipotez ve önceden belirlenmiş karar ölçütü var.',
          'Kreatif üretim hızı, planlanan test sayısını karşılıyor.',
          'Açılış sayfası mobilde hızlı, anlaşılır ve tamamlanabilir.',
          'Platform, analitik ve CRM raporlarının kapsam farkı açıklandı.'
        ]
      },
      {
        id: 'artir-azalt-durdur',
        label: 'Adım 05',
        heading: 'Artırma, azaltma ve durdurma kurallarını yayından önce yazın.',
        paragraphs: [
          'Tek bir iyi veya kötü güne tepki vermek yerine değerlendirme penceresini satış döngüsü ve yeterli veri koşuluna göre belirleyin. Sonuç maliyetinin yanında sonuç kalitesini, iade/iptali, nitelikli talep oranını ve web sitesi sorunlarını da izleyin.',
          'Bütçe artırımı yalnız daha fazla harcama kararı değildir. Stok, satış ekibi, müşteri hizmetleri, kreatif yenileme ve ölçüm kapasitesi aynı artışı taşıyamıyorsa kampanya sonucu işletme sonucuna dönüşmeyebilir.'
        ],
        list: [
          '<strong>Artır:</strong> Sonuç kalitesi ve ekonomi kabul edilebilir, ölçüm güvenilir ve operasyon kapasitesi hazırsa.',
          '<strong>Azalt veya düzelt:</strong> Sorun belirli kreatif, hedef, teklif veya açılış sayfasında teşhis edilebiliyorsa.',
          '<strong>Durdur:</strong> Önceden yazılan risk sınırı aşılıyor, veri doğrulanamıyor veya teklif işletme açısından sürdürülemiyorsa.',
          '<strong>Yeniden test et:</strong> Değişiklikten sonra yeni hipotezi ve karşılaştırma dönemini açıkça kaydedin.'
        ],
        callout: 'En sağlıklı bütçe tablosu; medya harcaması, hizmet/üretim maliyeti, iş sonucu, veri kaynağı ve alınan kararı aynı satırda gösterir.'
      }
    ],
    sources: [
      { label: 'Meta Business Help Center — Reklam bütçeleri hakkında', url: 'https://www.facebook.com/business/help/214319341922580' },
      { label: 'Meta Business Help Center — Günlük bütçeler hakkında', url: 'https://www.facebook.com/business/help/190490051321426' },
      { label: 'Meta Business Help Center — Reklam açık artırması hakkında', url: 'https://www.facebook.com/business/help/430291176997542' },
      { label: 'Meta for Developers — Conversions API', url: 'https://developers.facebook.com/documentation/ads-commerce/conversions-api' },
      { label: 'Meta for Developers — Meta Pixel', url: 'https://developers.facebook.com/documentation/meta-pixel' }
    ]
  },
  {
    slug: 'meta-reklam-ajansi-secerken-sorulacak-sorular',
    metaTitle: 'Meta Reklam Ajansı Seçerken Sorulacak Sorular | Narvals',
    title: 'Meta reklam ajansı seçerken hangi sorular sorulmalı?',
    description: 'Meta reklam ajansı tekliflerini hesap sahipliği, ölçüm, bütçe, kreatif süreç, raporlama, güvenlik ve çıkış planıyla karşılaştırma rehberi.',
    keywords: ['Meta reklam ajansı', 'Facebook reklam ajansı', 'Instagram reklam ajansı', 'reklam ajansı seçimi'],
    category: 'Meta reklam',
    published: '2026-08-23T14:10:00+03:00',
    modified: '2026-08-23T14:10:00+03:00',
    readingTime: 11,
    answer: 'Meta reklam ajansı seçerken yalnız yönetim ücretini veya sunulan sonuç tahminini karşılaştırmayın. Hesap ve veri sahipliğini, erişim yöntemini, ölçüm planını, kreatif sorumluluğunu, bütçe sınırlarını, raporlama tanımlarını, politika yönetimini ve sözleşme bittiğinde yapılacak devri yazılı olarak sorun. İyi teklif, kimin neyi ne zaman ve hangi kanıtla teslim edeceğini açıklar.',
    takeaways: [
      'İşletme varlıklarının sahipliği ile ajansın çalışma erişimi ayrı konulardır.',
      'Şifre paylaşmak yerine rol tabanlı ve gerekli en düşük erişim kullanılmalıdır.',
      'Medya bütçesi, ajans ücreti, üretim ve araç maliyeti ayrı gösterilmelidir.',
      'Rapor, platform metriğini gerçek satış veya nitelikli talep verisiyle bağlamalıdır.',
      'Sözleşme başlamadan devir, arşiv ve erişim kaldırma planı yazılmalıdır.'
    ],
    about: ['Meta reklam ajansı', 'Ajans teklif değerlendirme', 'Reklam hesabı sahipliği'],
    related: ['google-ads-mi-meta-reklamlari-mi', 'meta-reklam-butcesi-nasil-belirlenir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/dijital-reklam/',
    serviceLabel: 'Meta reklam yönetimi yaklaşımımızı inceleyin',
    faq: [
      { question: 'Meta reklam hesabı kimin adına açılmalıdır?', answer: 'Reklam hesabı, Business Manager, Piksel ve ödeme yöntemi her zaman işletmenin kendi adına açılmalı, ajansa yönetici erişimi verilmelidir.' },
      { question: 'Ajansın başarı kriteri ne olmalıdır?', answer: 'Yalnızca gösterim veya tıklama değil; nitelikli talep sayısı, müşteri edinme maliyeti (CPA) ve net ciro/ROAS hedefleri olmalıdır.' },
      { question: 'Kreatif ve metin üretimi ajansın kapsamında mıdır?', answer: 'Bu durum sözleşmeye göre değişir; teklifte görsel tasarımı, video kurgusu ve metin yazımının kim tarafından yapılacağı açıkça belirtilmelidir.' }
    ],
    sections: [
      {
        id: 'vaat-degil-model',
        label: 'Kısa cevap',
        heading: 'Ajansı bir sonuç vaadiyle değil, çalışma modeliyle değerlendirin.',
        paragraphs: [
          '“Satışları artırırız” veya “maliyeti düşürürüz” cümlesi; başlangıç verisi, ürün ekonomisi, sorumluluk ve ölçüm yöntemi olmadan karşılaştırılabilir bir teklif değildir. Aynı hedef için bir ajans yalnız kampanya panelini yönetirken diğeri kreatif üretim, açılış sayfası ve CRM doğrulamasını da kapsayabilir.',
          'İlk görüşmenin amacı en iddialı tahmini bulmak değil; başarı tanımı, varlık sahipliği, karar yetkisi ve teslim sınırları üzerinde ortak bir işletim modeli kurmaktır.'
        ],
        callout: 'Karşılaştırılabilir teklif; kapsamı, kapsam dışını, sorumluyu, teslim sıklığını, maliyet kalemini ve kabul ölçütünü aynı belgede gösterir.'
      },
      {
        id: 'sorulacak-sorular',
        label: 'Görüşme seti',
        heading: 'İlk görüşmede sorulacak 14 soru.',
        ordered: [
          '<strong>Birincil iş sonucunu nasıl tanımlıyorsunuz?</strong> Platform sonucu ile gerçek satış veya nitelikli talep ayrımını sorun.',
          '<strong>İlk 30 günde hangi varsayımları doğrulayacaksınız?</strong> Kesin sonuç yerine öğrenme planını isteyin.',
          '<strong>Reklam hesabı, Pixel, katalog ve alan adı kimin işletme varlığında kalacak?</strong>',
          '<strong>Erişim hangi rollerle verilecek?</strong> Kişisel şifre veya ortak kullanıcı istenip istenmediğini netleştirin.',
          '<strong>Mevcut ölçüm kurulumu nasıl denetlenecek?</strong> Pixel, Conversions API, UTM ve CRM eşleşmesini sorun.',
          '<strong>Atıf ve raporlama tanımları nelerdir?</strong> Farklı sistemlerin neden farklı sayı üretebileceğini açıklamalarını isteyin.',
          '<strong>Kreatif strateji ve üretim kimde?</strong> Format, adet, revizyon, kullanım hakkı ve yenileme sıklığını yazdırın.',
          '<strong>Hangi test aynı anda yürütülecek?</strong> Hipotez, ana metrik ve karar koşulunu sorun.',
          '<strong>Medya bütçesi nasıl sınırlandırılacak?</strong> Artış için kimden, hangi kanaldan onay alınacağını belirleyin.',
          '<strong>Yönetim ücretine neler dahil?</strong> Vergi, araç, prodüksiyon, influencer ve açılış sayfasını ayrılaştırın.',
          '<strong>Politika reddi veya hesap kısıtında süreç nedir?</strong> Meşru itiraz ve iş sürekliliği planını isteyin.',
          '<strong>Rapor hangi sıklıkta ve hangi ham verilerle paylaşılacak?</strong>',
          '<strong>Kim iletişim kuracak ve yanıt süresi nedir?</strong> Satış görüşmesindeki ekip ile uygulama ekibini ayırın.',
          '<strong>Sözleşme bittiğinde ne devredilecek?</strong> Erişim, dosya, rapor, öğrenme arşivi ve açık işleri yazdırın.'
        ]
      },
      {
        id: 'sahiplik-ve-erisim',
        label: 'Varlık güvenliği',
        heading: 'Hesap sahipliğini, çalışma erişimini ve şifreyi birbirinden ayırın.',
        paragraphs: [
          'Facebook Sayfasında tam kontrol sahibi kişiler erişim verebilir, kaldırabilir ve bazı kritik işlemleri yapabilir; görev erişimi ise belirli yönetim işlerini araçlar üzerinden yürütmeye yarar. İhtiyaçtan geniş erişim vermek hem güvenlik hem de devir riski oluşturur.',
          'İşletmeye ait varlıkların işletmenin kontrolünde kalması; ajansa, yaptığı iş için gerekli rolün verilmesi genellikle daha sürdürülebilir bir düzendir. Ortak şifre paylaşmayın. Erişimi isimli kullanıcı, iki faktörlü doğrulama ve düzenli yetki kontrolüyle yönetin.'
        ],
        table: {
          headers: ['Varlık', 'Teklifte yazılması gereken', 'Devir kanıtı'],
          rows: [
            ['Reklam hesabı ve ödeme', 'Sahip işletme, ödeme sorumlusu, harcama/onay sınırı', 'İşletme yöneticisinin erişim kontrolü'],
            ['Facebook Sayfası ve Instagram hesabı', 'Kimde tam kontrol, kimde görev erişimi olduğu', 'Güncel kullanıcı/rol listesi'],
            ['Pixel, veri seti ve alan adı', 'Kurulum sahibi, veri akışı ve teknik sorumlu', 'Olay testi ve yapılandırma kaydı'],
            ['Ürün kataloğu ve feed', 'Veri kaynağı, güncelleme sahibi ve hata süreci', 'Erişim ve son senkronizasyon kontrolü'],
            ['Kreatif ve kaynak dosyalar', 'Kullanım hakkı, lisans, revizyon ve teslim formatı', 'Paylaşılan dosya arşivi'],
            ['Rapor ve öğrenme arşivi', 'Ham veri, tanımlar, karar günlüğü ve saklama süresi', 'İndirilebilir son dönem paketi']
          ]
        }
      },
      {
        id: 'olcum-ve-rapor',
        label: 'Ölçüm',
        heading: 'Raporun her metriği bir tanıma ve veri kaynağına bağlanmalı.',
        paragraphs: [
          'Meta, web analitiği, ödeme sistemi ve CRM aynı olayı farklı kimlik, zaman ve atıf kurallarıyla sayabilir. Tek bir paneli mutlak gerçek olarak sunan rapor yerine; farkların nedenini, eksik veriyi ve iş sonucunu gösteren bir mutabakat tablosu isteyin.',
          'Gösterim, tıklama veya platform dönüşümü yararlı ara sinyallerdir; fakat teklif kalitesini, gerçekleşen satışı, iadeyi veya kârlılığı tek başına kanıtlamaz. Ajansın hangi kararı hangi veriyle aldığını raporda görünür kılması gerekir.'
        ],
        checklist: [
          'Birincil ve ikincil dönüşümler açıkça ayrıldı.',
          'Atıf penceresi ve raporlama saat dilimi belirtildi.',
          'Pixel ve Conversions API olayları ile tekilleştirme kontrol edildi.',
          'UTM standardı ve web analitiği görünümü paylaşıldı.',
          'CRM veya sipariş verisiyle nitelik/gelir doğrulaması tanımlandı.',
          'Medya harcaması, ajans ücreti ve üretim maliyeti ayrı raporlandı.',
          'Sonuçla birlikte yapılan değişiklik ve bir sonraki hipotez kaydedildi.'
        ]
      },
      {
        id: 'kreatif-politika-sureci',
        label: 'Uygulama',
        heading: 'Kreatif, onay ve reklam politikası sürecini yazılı hale getirin.',
        paragraphs: [
          'Ajans yönetimi yalnız hedef kitle seçmek değildir. Teklifin anlaşılması, metin ve görsel üretimi, kullanım hakları, mobil formatlar, marka onayı, açılış sayfası tutarlılığı ve performansa göre yenileme tek bir iş akışında buluşur.',
          'Meta Reklam Standartlarına uyum baştan değerlendirilmelidir. Hiçbir ajans onay veya hesap sürekliliği garantisi veremez. Ret durumunda reklamı kuralları aşacak biçimde yeniden paketlemek yerine gerekçeyi inceleyen, gerektiğinde meşru itiraz yapan ve riskli iddiayı düzelten bir süreç arayın.'
        ],
        table: {
          headers: ['Aşama', 'Sorumluluk sorusu', 'Kabul ölçütü'],
          rows: [
            ['Brief', 'Teklif, hedef kitle ve kanıtı kim sağlar?', 'Onaylı iddia ve kaynak listesi'],
            ['Üretim', 'Metin, tasarım, video ve kaynak dosya kimde?', 'Format, adet, hak ve revizyon net'],
            ['Onay', 'Marka ve yasal kontrolü kim yapar?', 'İsimli onay sahibi ve tarih'],
            ['Yayın', 'Bütçe ve kampanya değişikliğine kim yetkili?', 'Yazılı sınır ve değişiklik günlüğü'],
            ['Yenileme', 'Kreatif yorgunluğu hangi veriyle değerlendirilir?', 'Önceden tanımlı sinyal ve yeni hipotez'],
            ['Politika', 'Ret veya kısıt kim tarafından yönetilir?', 'Kayıt, gerekçe, düzeltme ve itiraz yolu']
          ]
        }
      },
      {
        id: 'sozlesme-ve-cikis',
        label: 'Son kontrol',
        heading: 'İmzadan önce kapsam ve çıkış kontrol listesi.',
        checklist: [
          'Hizmete dahil ve kapsam dışı işler madde madde yazıldı.',
          'Medya, hizmet, üretim, araç, vergi ve üçüncü taraf maliyetleri ayrıldı.',
          'Harcama artışı için tutar/oran yerine açık bir onay mekanizması belirlendi.',
          'Kreatif adedi, formatı, revizyonu ve kullanım hakkı tanımlandı.',
          'Veri işleme, gizlilik ve gerekli sözleşmesel sorumluluklar yetkili uzmanla değerlendirildi.',
          'Rapor sıklığı, metrik sözlüğü, ham veri ve toplantı düzeni yazıldı.',
          'Alt yüklenici kullanımı ve sorumluluğu açıklandı.',
          'Fesih süresi, son ödeme, açık kampanya ve bütçe işlemi belirlendi.',
          'Erişim kaldırma, kaynak dosya, rapor ve öğrenme arşivi teslimi tanımlandı.'
        ],
        callout: 'Kırmızı bayraklar: kişisel şifre istemek, işletme varlığını kendi hesabında tutmakta ısrar etmek, politika veya sonuç garantisi vermek, maliyet kalemlerini ayırmamak ve ham veriyi paylaşmamak.'
      }
    ],
    sources: [
      { label: 'Meta Help Center — Facebook Sayfası erişimi hakkında', url: 'https://www.facebook.com/help/289207354498410' },
      { label: 'Meta Help Center — Sayfa erişimi verme, düzenleme ve kaldırma', url: 'https://www.facebook.com/help/187316341316631' },
      { label: 'Meta Help Center — Hesabınızı güvende tutma', url: 'https://www.facebook.com/help/235353253505947' },
      { label: 'Meta Transparency Center — Reklam Standartları', url: 'https://transparency.meta.com/policies/ad-standards/' },
      { label: 'Meta for Developers — Conversions API', url: 'https://developers.facebook.com/documentation/ads-commerce/conversions-api' }
    ]
  },
  {
    slug: 'sosyal-medya-yonetimi-neleri-kapsar',
    metaTitle: 'Sosyal Medya Yönetimi Neleri Kapsar? | Narvals',
    title: 'Sosyal medya yönetimi neleri kapsar? Hizmet ve teklif rehberi',
    description: 'Sosyal medya yönetiminin strateji, içerik, yayın, topluluk, raporlama, erişim ve kullanım hakları kapsamını netleştiren teklif rehberi.',
    keywords: ['sosyal medya yönetimi', 'sosyal medya ajansı', 'içerik planı', 'topluluk yönetimi'],
    category: 'Sosyal medya',
    published: '2026-08-23T14:20:00+03:00',
    modified: '2026-08-23T14:20:00+03:00',
    readingTime: 10,
    answer: 'Sosyal medya yönetimi genellikle strateji, içerik planı, metin ve görsel üretimi, onay, yayınlama, yorum ve mesaj yönlendirme, performans ölçümü ve düzenli raporlamayı kapsar. Reklam yönetimi, çekim, influencer çalışması, 7/24 moderasyon, kriz iletişimi ve müşteri hizmetleri ise her pakette otomatik olarak yer almaz; teklif içinde ayrı ayrı tanımlanmalıdır.',
    takeaways: [
      'Gönderi adedi tek başına sosyal medya yönetiminin kapsamını anlatmaz.',
      'Organik içerik, reklam, topluluk ve müşteri hizmetleri ayrı sorumluluklardır.',
      'Onay takvimi ve yanıt yetkisi, içerik takvimi kadar önemlidir.',
      'Etkileşim metriği iş hedefiyle ve veri kaynağıyla birlikte okunmalıdır.',
      'Hesap erişimi, kaynak dosya ve kullanım hakları teklif aşamasında netleşmelidir.'
    ],
    about: ['Sosyal medya yönetimi', 'İçerik üretimi', 'Topluluk yönetimi'],
    related: ['meta-reklam-ajansi-secerken-sorulacak-sorular', 'meta-reklam-butcesi-nasil-belirlenir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/sosyal-medya-yonetimi/',
    serviceLabel: 'Sosyal medya yönetimi hizmetini inceleyin',
    faq: [
      { question: 'Sosyal medya yönetimi sadece gönderi paylaşmak mıdır?', answer: 'Hayır; içerik stratejisi, görsel/video üretimi, topluluk yönetimi, mesaj yanıtları, kriz iletişimi ve performans raporlamasını kapsar.' },
      { question: 'Sosyal medyada her gün paylaşım yapmak zorunlu mudur?', answer: 'Zorunlu değildir; düşük kaliteli günlük paylaşımlar yerine hedef kitleye değer katan, özgün ve düzenli haftalık içerik planı daha etkilidir.' },
      { question: 'Sosyal medya yönetimi ile reklam yönetimi aynı şey midir?', answer: 'Farklı disiplinlerdir; organik sosyal medya marka algısı ve sadakati hedeflerken, reklam yönetimi bütçe optimizasyonu ve doğrudan satış/talep hedefler.' }
    ],
    sections: [
      {
        id: 'kapsam-tek-paket-degil',
        label: 'Kısa cevap',
        heading: 'Sosyal medya yönetimi tek bir standart paket değildir.',
        paragraphs: [
          'Bir işletme için ihtiyaç haftalık içerik planı ve yayınlama iken başka bir işletmede günlük topluluk yönetimi, mağaza yönlendirmesi veya çok dilli moderasyon olabilir. Bu nedenle hizmeti “ayda kaç gönderi?” sorusuyla değil; hangi kanalda, hangi hedef için, hangi iş akışının ve sorumluluğun yönetileceğiyle tanımlayın.',
          'Organik sosyal medya yönetimi ile ücretli reklam yönetimi birbiriyle ilişkili fakat farklı işlerdir. Medya bütçesi, kampanya optimizasyonu, Pixel veya dönüşüm kurulumu pakete ayrıca yazılmadıysa dahil varsayılmamalıdır.'
        ],
        callout: 'İyi kapsam; çıktı adedini, üretim girdisini, onay sahibini, yanıt süresini, kullanım hakkını ve başarı ölçümünü birlikte gösterir.'
      },
      {
        id: 'hizmet-modulleri',
        label: 'Kapsam haritası',
        heading: 'Sosyal medya yönetiminin altı temel modülü.',
        table: {
          headers: ['Modül', 'Örnek işler', 'Teklifte netleştirilecek'],
          rows: [
            ['Strateji', 'Hedef, kitle, kanal rolü, içerik teması ve marka tonu', 'Araştırma derinliği, güncelleme sıklığı ve teslim belgesi'],
            ['İçerik üretimi', 'Metin, statik tasarım, kısa video, altyazı ve uyarlama', 'Adet, format, çekim, kaynak materyal, revizyon ve lisans'],
            ['Planlama ve yayın', 'Takvim, onay, zamanlama, etiketleme ve platforma uyarlama', 'Kanal, yayın sıklığı, son teslim ve geciken onay kuralı'],
            ['Topluluk yönetimi', 'Yorum, mesaj, sınıflandırma, yönlendirme ve moderasyon', 'Çalışma saati, yanıt süresi, yetki ve eskalasyon'],
            ['Ölçüm ve öğrenme', 'İçgörü dışa aktarma, metrik sözlüğü, aylık değerlendirme', 'Veri kaynağı, dönem, karşılaştırma ve karar kaydı'],
            ['Yönetim ve güvenlik', 'Erişim, dosya arşivi, kullanım hakkı ve devir', 'Hesap sahibi, rol, 2FA, saklama ve sözleşme sonu']
          ]
        },
        callout: 'Reklam yönetimi, influencer ilişkileri, profesyonel çekim, sosyal dinleme aracı, çekiliş operasyonu ve 7/24 nöbet ayrı modül olarak fiyatlanabilir.'
      },
      {
        id: 'icerik-is-akisi',
        label: 'Üretim süreci',
        heading: 'İçerik takvimini onay ve yayın akışıyla birlikte kurun.',
        paragraphs: [
          'Takvim yalnız konu ve tarihten oluşursa gecikme nedeni görünmez. Her içerikte amaç, format, kanal, gerekli marka girdisi, metin/görsel sorumlusu, onay sahibi, son onay zamanı ve yayın durumu bulunmalıdır. Güncel olaya bağlı içerikler için daha kısa bir hızlandırılmış yol ayrıca tanımlanabilir.',
          'Bir içeriği platformlar arasında kopyalamak yerine ölçü, metin uzunluğu, bağlantı davranışı, altyazı ve erişilebilirlik ihtiyacına göre uyarlayın. Görseldeki kritik bilgi metinde de bulunmalı; videoda anlaşılır altyazı ve anlamlı kapak düşünülmelidir.'
        ],
        ordered: [
          '<strong>Aylık çerçeve:</strong> İş hedefi, kampanya dönemi, ürün/hizmet önceliği ve içerik temalarını onaylayın.',
          '<strong>Brief:</strong> Her içerik için ana fikir, kanıt, hedef eylem ve zorunlu marka girdisini yazın.',
          '<strong>Üretim:</strong> Metin, tasarım/video, altyazı ve platform uyarlamasını tamamlayın.',
          '<strong>Kontrol:</strong> Marka, doğruluk, kullanım hakkı, platform politikası ve gerekliyse yetkili hukuk incelemesini yapın.',
          '<strong>Onay:</strong> Tek karar sahibi ve son yanıt tarihini kullanın; sözlü onayı kayıt altına alın.',
          '<strong>Yayın ve öğrenme:</strong> İçeriği zamanlayın, bağlantıları test edin ve sonuçtan çıkan kararı takvime geri yazın.'
        ]
      },
      {
        id: 'topluluk-ve-kriz',
        label: 'Topluluk',
        heading: 'Yorum ve mesaj yönetiminde yanıt yetkisi önceden belirlenmeli.',
        paragraphs: [
          'Topluluk yöneticisi her soruyu tek başına çözemez. Fiyat, sipariş, teknik destek, sağlık, hukuki iddia, ayrımcılık/tehdit veya kriz sinyali farklı yetkililere gitmelidir. Hazır yanıt kütüphanesi yalnız sık sorulan ve doğrulanmış bilgiler için kullanılmalı; hassas durumlar otomatik yanıtla kapatılmamalıdır.',
          'Yorumlar ve doğrudan mesajlar kişisel veri içerebilir. Gereksiz veriyi kopyalamayın, herkese açık alanda sipariş veya kimlik bilgisi istemeyin ve saklama/erişim sürecini kurumun KVKK yükümlülükleriyle uyumlu biçimde yetkili uzmanla değerlendirin.'
        ],
        table: {
          headers: ['Durum', 'İlk işlem', 'Eskalasyon'],
          rows: [
            ['Sık ürün/hizmet sorusu', 'Onaylı bilgiyle yanıtla', 'Bilgi güncel değilse iş birimine sor'],
            ['Sipariş veya hesap sorunu', 'Kişisel veriyi açık yorumdan taşı', 'Yetkili destek ekibine kayıt aç'],
            ['Hakaret, spam veya platform ihlali', 'Yazılı moderasyon kuralını uygula', 'Gerekirse platform aracını ve sorumlu yöneticiyi kullan'],
            ['Güvenlik, sağlık veya hukuki risk', 'Yorum üretmeden kaydı koru', 'Yetkili uzman ve karar sahibine acil ilet'],
            ['Yaygın olumsuz geri bildirim', 'Sınıflandır ve hacmi doğrula', 'Kriz iletişimi sorumlusuna bağla']
          ]
        }
      },
      {
        id: 'metrik-ve-raporlama',
        label: 'Ölçüm',
        heading: 'Metrikleri içerik hedefi ve iş sonucu üzerinden okuyun.',
        paragraphs: [
          'Tek bir “etkileşim oranı” tüm sosyal medya performansını anlatmaz. Bilinirlik içeriğiyle müşteri hizmeti yanıtının amacı farklıdır. Her içerik sütununu birincil hedefe bağlayın; platformun metrik tanımını ve rapor dönemini kaydedin. Meta Business Suite, Sayfa içgörü verilerini dışa aktarmaya imkân verir; bu dosya karar günlüğünün ham veri parçası olabilir.',
          'Platform içi metrikleri iş sonucu diye sunmayın. Site ziyareti UTM ile, talep CRM ile, sipariş ödeme sistemiyle doğrulanabilir. Sistemler arasındaki sayı farkı hata olmak zorunda değildir; kapsam ve atıf tanımlarıyla açıklanmalıdır.'
        ],
        table: {
          headers: ['Amaç', 'Yakın sinyal', 'İş sonucuna bağlama'],
          rows: [
            ['Bilinirlik', 'Erişim, gösterim, video izleme tanımları', 'Hedef kitle ve dönem bazında görünürlük eğilimi'],
            ['İçerik ilgisi', 'Kaydetme, paylaşma, anlamlı yorum, profil eylemi', 'Hangi tema ve formatın sonraki adıma taşıdığı'],
            ['Site değerlendirmesi', 'Bağlantı tıklaması ve açılış sayfası oturumu', 'UTM, analitik ve tamamlanan mikro dönüşüm'],
            ['Talep veya satış', 'Platform dönüşüm raporu', 'CRM, sipariş, iptal/iade ve nitelik kontrolü'],
            ['Müşteri hizmeti', 'İlk yanıt ve çözüm durumu', 'Çözüm süresi, tekrar temas ve konu sınıfı']
          ]
        }
      },
      {
        id: 'teklif-kontrolu',
        label: 'Teklif kontrolü',
        heading: 'Sosyal medya yönetimi teklifi kabul listesi.',
        checklist: [
          'Yönetilecek kanal ve hesaplar tek tek listelendi.',
          'Strateji, içerik, yayın, topluluk, rapor ve reklam kapsamı ayrıldı.',
          'Gönderi/video/hikâye adedi kadar format, süre ve uyarlama da tanımlandı.',
          'Fotoğraf/video çekimi, oyuncu, mekân, müzik, stok ve araç lisansları açıklandı.',
          'Revizyon sayısı, onay sahibi, son onay saati ve gecikme kuralı yazıldı.',
          'Yorum ve mesaj çalışma saatleri, yanıt süresi, hazır yanıt ve eskalasyon belirlendi.',
          'Kriz, reklam, influencer, çekiliş ve 7/24 moderasyon dahil/dahil değil olarak işaretlendi.',
          'Hesap sahipliği, rol tabanlı erişim, 2FA ve erişim kaldırma süreci tanımlandı.',
          'Kaynak dosya, içerik kullanım hakkı, saklama süresi ve sözleşme sonu devir yazıldı.',
          'Rapor metriği, veri kaynağı, karşılaştırma dönemi ve karar toplantısı belirlendi.'
        ],
        callout: 'Telif notu: Instagram’ın lisanslı müzik kütüphanesindeki her parça ticari kullanım için uygun değildir. Hesap türü, içerik ve lisans koşulu yayından önce doğrulanmalıdır.'
      }
    ],
    sources: [
      { label: 'Meta Help Center — Sayfa içgörü verilerini dışa aktarma', url: 'https://www.facebook.com/help/972879969525875/' },
      { label: 'Meta Help Center — Facebook Sayfası erişimi hakkında', url: 'https://www.facebook.com/help/289207354498410' },
      { label: 'Meta Transparency Center — Topluluk Standartları', url: 'https://transparency.meta.com/policies/community-standards/' },
      { label: 'Instagram Help Center — Lisanslı müzik kütüphanesine erişim', url: 'https://www.facebook.com/help/instagram/402084904469945' },
      { label: 'KVKK — Sosyal medyada kişisel veriler hakkında kamuoyu duyurusu', url: 'https://www.kvkk.gov.tr/Icerik/4174/Kamuoyu-Duyurusu' },
      { label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2', url: 'https://www.w3.org/TR/WCAG22/' }
    ]
  },
  {
    slug: 'e-ticaret-sitesi-maliyeti-nasil-hesaplanir',
    metaTitle: 'E-Ticaret Sitesi Maliyeti Nasıl Hesaplanır? | Narvals',
    title: 'E-ticaret sitesi maliyeti nasıl hesaplanır? Toplam maliyet rehberi',
    description: 'E-ticaret sitesi maliyetini kurulum, lisans, entegrasyon, içerik, güvenlik, operasyon ve bakım kalemleriyle hesaplama ve teklif karşılaştırma rehberi.',
    keywords: ['e-ticaret sitesi maliyeti', 'e-ticaret sitesi fiyatı', 'e-ticaret altyapısı', 'e-ticaret teklif karşılaştırma'],
    category: 'E-ticaret',
    published: '2026-08-23T14:30:00+03:00',
    modified: '2026-08-23T14:30:00+03:00',
    readingTime: 12,
    answer: 'E-ticaret sitesi maliyeti tek bir tasarım veya yazılım bedeli değildir. Toplam maliyet; keşif ve kurulum gibi tek seferlik işler, altyapı ve bakım gibi dönemsel giderler, ödeme/kargo gibi kullanıma bağlı giderler, içerik ve operasyon için ayrılan iç ekip zamanı ile geçiş ve güvenlik risklerinin birlikte hesaplanmasıyla bulunur. Sağlıklı teklif karşılaştırması aynı kapsamı ve aynı değerlendirme dönemini kullanır.',
    takeaways: [
      'Ürün sayısından çok ürün verisinin yapısı ve entegrasyon ihtiyacı maliyeti değiştirir.',
      'Kurulum bedeli ile toplam sahip olma maliyeti aynı değildir.',
      'Lisans, işlem, entegrasyon, bakım ve iç ekip zamanı ayrı satırlarda hesaplanmalıdır.',
      'Hazır ve özel altyapı kararı, çıkış ve veri taşıma maliyetini de içermelidir.',
      'Kabul testi, güvenlik, mevzuat ve SEO geçişi sonradan eklenen kalemler olmamalıdır.'
    ],
    about: ['E-ticaret sitesi maliyeti', 'Toplam sahip olma maliyeti', 'E-ticaret kapsamı'],
    related: ['e-ticaret-altyapisi-nasil-secilir', 'hazir-yazilim-mi-ozel-yazilim-mi', 'web-sitesi-maliyeti-nasil-hesaplanir'],
    servicePath: '/hizmetler/e-ticaret/',
    serviceLabel: 'E-ticaret sitesi hizmetini inceleyin',
    faq: [
      { question: 'E-ticaret sitesi maliyetini artıran ana unsurlar nelerdir?', answer: 'Ürün sayısı, özel tasarım, ERP/pazaryeri entegrasyonları, ödeme/kargo altyapısı, sunucu performansı ve bakım gereksinimleridir.' },
      { question: 'Komisyonlu SaaS paketler mi yoksa açık kaynak mı daha karlıdır?', answer: 'Başlangıç ve orta ölçekte bakım maliyeti düşük SaaS paketler pratiktir; çok yüksek ciroda komisyondan tasarruf için bağımsız altyapı değerlendirilir.' },
      { question: 'E-ticaret sitesi yayına girdikten sonra hangi maliyetler sürer?', answer: 'Hosting/sunucu, alan adı, SSL, ödeme komisyonları, eklenti lisansları, dijital reklam bütçesi ve teknik bakım devam eden maliyetlerdir.' }
    ],
    sections: [
      {
        id: 'tek-fiyat-yok',
        label: 'Kısa cevap',
        heading: 'E-ticaret sitesi için kapsam bilinmeden sağlıklı tek fiyat verilemez.',
        paragraphs: [
          'On ürünlü, tek para birimli ve manuel kargo süreçli bir mağaza ile binlerce varyantı, ERP senkronizasyonu, çoklu depo ve ülke kuralları olan bir mağaza aynı “e-ticaret sitesi” başlığına girer; fakat teslim ve işletim yükleri farklıdır. Sayfa görünümünden önce katalog, sipariş, ödeme, teslimat ve satış sonrası akışları çıkarılmalıdır.',
          'Bir teklifin düşük görünmesi bazı işlerin müşteriye, üçüncü tarafa veya sonraki faza bırakılmasından kaynaklanabilir. Bu nedenle rakamdan önce kapsam, varsayım, hariç tutulan iş ve kabul ölçütünü eşitleyin.'
        ],
        callout: 'Maliyet hesabının birimi “site” değil; baştan sona çalışan ve kim tarafından işletileceği belli ticaret akışıdır.'
      },
      {
        id: 'maliyet-suruculeri',
        label: 'Kapsam',
        heading: 'Maliyeti en çok değiştiren kapsam kalemleri.',
        table: {
          headers: ['Alan', 'Sorulacak kapsam sorusu', 'Maliyet etkisinin nedeni'],
          rows: [
            ['Katalog', 'Kaç ürün, varyant, fiyat listesi, dil ve veri kaynağı var?', 'Veri temizleme, eşleme, görsel ve güncelleme iş yükü'],
            ['Sipariş akışı', 'Misafir alışverişi, üyelik, kupon, ön sipariş veya abonelik var mı?', 'İş kuralı, arayüz ve test senaryosu sayısı'],
            ['Ödeme', 'Hangi sağlayıcı, para birimi, taksit, iade ve mutabakat akışı gerekli?', 'Entegrasyon, sözleşme, işlem ve operasyon gereksinimi'],
            ['Kargo ve depo', 'Kaç depo/taşıyıcı, desi, bölge ve teslimat kuralı var?', 'Kural motoru, etiket, takip ve hata yönetimi'],
            ['İş sistemleri', 'ERP, CRM, e-fatura, pazar yeri veya çağrı merkezi bağlanacak mı?', 'API sınırı, veri eşleme, zamanlama ve izleme'],
            ['İçerik ve tasarım', 'Metin, fotoğraf, video, çeviri ve ürün girişi kimde?', 'Üretim, hak, onay ve erişilebilirlik çalışması'],
            ['Pazar ve mevzuat', 'Hangi ülke, müşteri türü ve ürün kategorisine satış yapılacak?', 'Bilgilendirme, vergi, tüketici ve veri koruma yükümlülükleri'],
            ['Trafik ve süreklilik', 'Beklenen yük, kampanya zirvesi ve kesinti toleransı nedir?', 'Altyapı, önbellek, izleme, yedekleme ve destek seviyesi']
          ]
        }
      },
      {
        id: 'toplam-maliyet-modeli',
        label: 'Hesap modeli',
        heading: 'Toplam maliyeti dört ayrı sepette hesaplayın.',
        paragraphs: [
          'Kullanışlı model şudur: toplam sahip olma maliyeti = tek seferlik maliyetler + değerlendirme dönemindeki düzenli maliyetler + kullanıma bağlı maliyetler + iç ekip ve risk maliyeti. Bütün teklifler için aynı dönemi ve aynı satış varsayımlarını kullanın; aksi halde aylık lisanslı bir çözümle yüksek kurulumlu çözüm karşılaştırılamaz.',
          'Tutarlar sağlayıcıya, kapsam ve tarihe göre değiştiği için sabit fiyat listesi yerine doldurulabilir bir maliyet envanteri hazırlayın. Vergilerin dahil olup olmadığını ve dövizli kalemlerin hangi kurla değerlendirildiğini ayrıca yazın.'
        ],
        table: {
          headers: ['Sepet', 'Örnek kalemler', 'Hesaplama notu'],
          rows: [
            ['Tek seferlik', 'Keşif, bilgi mimarisi, tasarım, geliştirme, veri göçü, kurulum, test ve eğitim', 'Faz, teslim ve kabul ölçütüyle eşleştirin.'],
            ['Düzenli', 'Altyapı/lisans, barındırma, bakım, güvenlik izleme, destek ve araçlar', 'Aylık/yıllık yenileme, kullanım limiti ve artış koşulunu yazın.'],
            ['Kullanıma bağlı', 'Ödeme işlemi, mesaj/e-posta, kargo, depolama, trafik ve üçüncü taraf API', 'Sipariş, ciro, kullanıcı veya çağrı varsayımını görünür tutun.'],
            ['İç ekip ve risk', 'Ürün girişi, içerik, operasyon, eğitim, hata düzeltme, kesinti ve sağlayıcı değişimi', 'Rol başına zaman ile olası geçiş/iş sürekliliği yükünü ayrı gösterin.']
          ]
        }
      },
      {
        id: 'altyapi-ve-cikis-maliyeti',
        label: 'Altyapı kararı',
        heading: 'Hazır paket ve özel geliştirmeyi yalnız ilk bedelle kıyaslamayın.',
        paragraphs: [
          'Hazır altyapı hızlı başlangıç, bakımın bir bölümünü sağlayıcıya bırakma ve standart özellikler sunabilir; buna karşılık lisans, uygulama ekosistemi, sınırlar ve sağlayıcıya bağımlılık taşır. Özel geliştirme belirli iş kurallarına daha fazla uyum sağlayabilir; fakat ürün sahipliği, bakım, güvenlik ve ekip sürekliliği sorumluluğu büyür.',
          'Karara çıkış planını ekleyin. Ürün, müşteri, sipariş, URL, görsel ve içerik verisinin hangi formatta dışa alınabildiği; özel entegrasyonların taşınabilirliği; alan adı, kod ve hesap sahipliği sözleşmede görünür olmalıdır.'
        ],
        checklist: [
          'Zorunlu iş akışları standart özellik, eklenti veya özel geliştirme olarak işaretlendi.',
          'Lisans planı, kullanım limiti, uygulama/eklenti ve yenileme koşulu yazıldı.',
          'Kaynak kodu, tasarım dosyası, alan adı ve üçüncü taraf hesap sahipliği belirlendi.',
          'Ürün, müşteri, sipariş ve içerik dışa aktarma formatı test edildi.',
          'Sağlayıcı değişiminde URL yönlendirme, veri göçü ve kesinti planı çıkarıldı.',
          'Güncelleme, güvenlik, yedekleme ve acil müdahalenin sorumlusu tanımlandı.'
        ]
      },
      {
        id: 'kalite-guvenlik-mevzuat',
        label: 'Eksik kalan kalemler',
        heading: 'Kalite, güvenlik, mevzuat ve SEO geçişini ayrı iş paketi yapın.',
        paragraphs: [
          'Ödeme ekranının açılması projenin bittiğini göstermez. Ürün keşfinden sipariş sonrası bildirime, iptal/iade ve yönetim paneline kadar gerçek senaryolar test edilmelidir. Klavye kullanımı, form etiketleri, hata mesajları, mobil görünüm ve performans kabul ölçütlerine eklenmelidir.',
          'Ödeme kartı verisi için kapsam ve sorumluluk, kullanılan ödeme mimarisine göre PCI DSS açısından değerlendirilmelidir. Elektronik ticaret, tüketici, vergi ve kişisel veri yükümlülükleri hedef pazar ve iş modeline göre değişebilir; şablon metinleri kopyalamak yerine güncel resmi mevzuat yetkili hukuk ve mali danışmanlarla uygulanmalıdır.',
          'Mevcut bir site taşınıyorsa URL envanteri, bire bir yönlendirme, canonical, ürün yapılandırılmış verisi, Merchant Center/feed, sitemap ve Search Console izleme planı bütçeye dahil edilmelidir. Google, e-ticaret içeriğini ürün sayfaları ve yapılandırılmış verinin yanında site yapısı ve bağlantılardan da anlamaya çalışır.'
        ],
        checklist: [
          'Ürün, varyant, stok ve fiyatın doğru kaynaktan geldiği test edildi.',
          'Sepet, kupon, vergi, kargo, ödeme, başarısız ödeme ve iade senaryoları tamamlandı.',
          'Sipariş bildirimi, yönetim paneli ve entegrasyon hatası için izleme kuruldu.',
          'Rol ve erişimler, yedekleme, güncelleme, kayıt ve olay müdahalesi tanımlandı.',
          'Mobil, klavye, ekran okuyucu ve anlaşılır hata mesajı kontrolleri yapıldı.',
          'Yasal metinler gerçek veri ve satış akışı üzerinden yetkili uzmanlarca değerlendirildi.',
          'Eski URL, yönlendirme, canonical, sitemap, ürün verisi ve arama ölçümü doğrulandı.'
        ]
      },
      {
        id: 'teklif-karsilastirma',
        label: 'Karar tablosu',
        heading: 'Teklifleri aynı kapsam ve aynı dönem üzerinden karşılaştırın.',
        paragraphs: [
          'Her tedarikçiye aynı senaryo setini verin ve cevabı “dahil, opsiyon, müşteri sorumluluğu, üçüncü taraf, kapsam dışı” olarak işaretletin. Toplamı yalnız ilk yıl için değil, işletmenizin karar dönemine göre ayrı senaryolarda hesaplayın. Satış adedi bilinmiyorsa düşük, beklenen ve yüksek kullanım varsayımlarını tutarlarla karıştırmadan açıkça yazın.',
          'Son karar tablosunda maliyetin yanında teslim süresi, iç ekip ihtiyacı, veri taşınabilirliği, güvenlik sorumluluğu ve iş sürekliliği riski bulunmalıdır. En düşük toplam her zaman en uygun çözüm değildir; fakat her ek maliyet de somut bir gereksinime veya riske bağlanmalıdır.'
        ],
        ordered: [
          '<strong>Kapsam belgesini eşitleyin:</strong> Ürün, ülke, dil, ödeme, kargo, entegrasyon, içerik ve destek varsayımlarını aynı tutun.',
          '<strong>Kalemleri sınıflandırın:</strong> Tek seferlik, düzenli, kullanıma bağlı ve iç ekip maliyetini ayırın.',
          '<strong>Hariçleri fiyatlandırın:</strong> Teklifte olmayan fakat yayına çıkmak için zorunlu işi ayrı satıra ekleyin.',
          '<strong>Kabul ölçütü koyun:</strong> Her teslimi çalışan kullanıcı senaryosu veya doğrulanabilir çıktı ile bağlayın.',
          '<strong>Değerlendirme dönemini eşitleyin:</strong> Tüm sağlayıcılarda aynı ay/yıl ufku ve kullanım senaryosunu kullanın.',
          '<strong>Çıkış maliyetini görün:</strong> Veri, URL, hesap, kod ve dosya devrini hesaba katın.',
          '<strong>Varsayımları imzalatın:</strong> Kur, vergi, üçüncü taraf fiyatı ve müşteri sorumluluklarını teklif eki yapın.'
        ],
        callout: 'Teklif özeti için beş zorunlu sütun: kalem, sorumlu, ilk dönem maliyeti, yenileme/kullanım koşulu ve kabul kanıtı.'
      }
    ],
    sources: [
      { label: 'Google Search Central — E-ticaret sitesi dokümantasyonuna genel bakış', url: 'https://developers.google.com/search/docs/specialty/ecommerce' },
      { label: 'Google Search Central — Google’ın e-ticaret site yapısını anlamasına yardımcı olma', url: 'https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure' },
      { label: 'Google Search Central — E-ticaret sitesi yayına alma', url: 'https://developers.google.com/search/docs/specialty/ecommerce/how-to-launch-an-ecommerce-website' },
      { label: 'T.C. Ticaret Bakanlığı — Elektronik Ticaret Kılavuzu', url: 'https://esnafkoop.ticaret.gov.tr/yayinlar/meslek-kilavuzlari/esnaf-ve-sanatkarlar-ozelinde-elektronik-ticaret-kilavuzu' },
      { label: 'T.C. Ticaret Bakanlığı — Elektronik ticaret mevzuatı', url: 'https://ticaret.gov.tr/ic-ticaret/mevzuat/elektronik-ticaret' },
      { label: 'PCI Security Standards Council — E-ticaret uygulamalarını güvence altına alma', url: 'https://listings.pcisecuritystandards.org/pdfs/best_practices_securing_ecommerce.pdf' },
      { label: 'W3C — Web Content Accessibility Guidelines (WCAG) 2.2', url: 'https://www.w3.org/TR/WCAG22/' }
    ]
  },
  {
    slug: 'google-ads-ajansi-secerken-sorulacak-sorular',
    metaTitle: 'Google Ads Ajansı Seçerken Sorulacak Sorular | Narvals',
    title: 'Google Ads ajansı seçerken hangi sorular sorulmalı?',
    description: 'Google Ads ajansı tekliflerini hesap erişimi, arama niyeti, dönüşüm ölçümü, bütçe, açılış sayfası, raporlama ve çıkış planıyla karşılaştırın.',
    keywords: ['Google Ads ajansı', 'Google reklam ajansı', 'Google Ads yönetimi', 'reklam ajansı seçimi'],
    category: 'Google Ads',
    published: '2026-08-27T16:00:00+03:00',
    modified: '2026-08-27T16:00:00+03:00',
    readingTime: 10,
    answer: 'Google Ads ajansı seçerken yalnız yönetim ücretini veya vaat edilen tıklama sayısını karşılaştırmayın. Hesabın kimde kalacağını, arama terimlerinin nasıl denetleneceğini, hangi dönüşümün başarı sayılacağını, medya bütçesi ile hizmet bedelinin ayrımını, açılış sayfası sorumluluğunu, raporun hangi iş kararını üreteceğini ve sözleşme sonundaki devir planını yazılı olarak sorun.',
    takeaways: [
      'Google Ads hesabı ve işletme verileri müşterinin erişiminde kalmalıdır.',
      'Anahtar kelime listesi kadar gerçek arama terimleri ve negatif kelimeler önemlidir.',
      'Dönüşüm tanımı kampanya açılmadan önce doğrulanmalıdır.',
      'Medya bütçesi, yönetim, içerik ve açılış sayfası ayrı kalemlerdir.',
      'Rapor yalnız metrik değil, yapılan değişiklik ve sonraki kararı göstermelidir.'
    ],
    about: ['Google Ads ajansı', 'Arama reklamları', 'Dönüşüm ölçümü'],
    related: ['google-ads-mi-meta-reklamlari-mi', 'meta-reklam-ajansi-secerken-sorulacak-sorular', 'web-sitesi-yaptirmadan-once-kapsam-teklif-karar-rehberi'],
    servicePath: '/hizmetler/google-ads/',
    serviceLabel: 'Google Ads yönetimi hizmetini inceleyin',
    faq: [
      { question: 'Google Ads hesabı ajansa mı yoksa işletmeye mi ait olmalıdır?', answer: 'Hesap mülkiyeti ve geçmiş veri her zaman işletmeye ait olmalı; ajans MCC (Yönetici Hesabı) üzerinden yetkilendirilmelidir.' },
      { question: 'Google Ads ajansı negatif anahtar kelimeleri nasıl yönetir?', answer: 'Düzenli arama terimi denetimleri yaparak bütçeyi tüketen alakasız tıklamaları negatif listelere eklemeli ve bütçe verimliliğini korumalıdır.' },
      { question: 'Dönüşüm takibi kim tarafından kurulmalıdır?', answer: 'Ajans ve teknik ekip birlikte; Google Tag Manager, GA4 ve Google Ads dönüşüm etiketlerini sayfadaki gerçek iş eylemlerine bağlamalıdır.' }
    ],
    sections: [
      {
        id: 'hesap-sahipligi',
        label: 'Hesap ve erişim',
        heading: 'Hesap sahipliği ve erişim rolleri en başta yazılı olmalı.',
        paragraphs: [
          'İşletmenin Google Ads hesabına doğrudan erişimi olmalı; ödeme profili, dönüşüm verileri ve geçmiş kampanyalar ajans değiştiğinde kaybolmamalıdır. Ajansın kendi yönetici hesabıyla bağlantı kurması normaldir, fakat bunun müşterinin veriye ve yönetime erişimini ortadan kaldırmaması gerekir.',
          'Teklifte hesabı kimin oluşturacağı, yönetici ve standart erişimlerin kimde olacağı, iki adımlı doğrulama, faturalama sorumluluğu ve sözleşme sonunda erişim kaldırma adımları yer almalıdır.'
        ],
        checklist: [
          'Müşteri hesabı ve ödeme profili işletmenin kontrolünde.',
          'Ajans erişimi kişisel parola paylaşımı yerine rol veya yönetici bağlantısıyla veriliyor.',
          'Değişiklik geçmişi, dönüşüm verisi ve kampanyalar müşteri hesabında kalıyor.',
          'Sözleşme sonu erişim ve teslim adımları yazılı.'
        ]
      },
      {
        id: 'arama-niyeti',
        label: 'Arama kalitesi',
        heading: 'Anahtar kelimeden önce gerçek arama terimlerinin nasıl yönetileceğini sorun.',
        paragraphs: [
          'Anahtar kelime, reklamın hangi aramalarda tetiklenebileceğini tanımlar; arama terimi raporu ise kullanıcıların gerçekten ne yazdığını gösterir. Bu ikisini aynı kabul etmek ilgisiz tıklamaları görünmez kılar. Ajansın arama terimlerini hangi sıklıkla incelediğini, negatif kelime kararlarını nasıl kaydettiğini ve marka, rakip, bilgi arama ile ticari niyeti nasıl ayırdığını sorun.',
          '“Daha çok trafik” tek başına hedef değildir. Web sitesi yaptırmak isteyen biriyle ücretsiz şablon arayan kullanıcı aynı reklam grubunda değerlendirilirse tıklama sayısı artarken talep kalitesi düşebilir.'
        ],
        table: {
          headers: ['Sorulacak soru', 'İyi cevabın kanıtı', 'Risk işareti'],
          rows: [
            ['Arama terimleri nasıl denetleniyor?', 'Düzenli inceleme ve negatif kelime karar kaydı', 'Yalnız anahtar kelime listesi gösterilmesi'],
            ['Kampanyalar hangi niyete göre ayrılıyor?', 'Hizmet, marka, bölge ve karar aşamasına göre yapı', 'Bütün hizmetlerin tek reklam grubunda olması'],
            ['Arama ile sayfa nasıl eşleşiyor?', 'Reklam vaadiyle aynı başlık, kanıt ve eylem', 'Tüm reklamların ana sayfaya gitmesi']
          ]
        }
      },
      {
        id: 'donusum-olcumu',
        label: 'Ölçüm',
        heading: 'Başarı sayılacak dönüşümü ve doğrulama yöntemini netleştirin.',
        paragraphs: [
          'Form sayfasının görüntülenmesi ile formun başarıyla gönderilmesi aynı şey değildir. Telefon bağlantısına tıklama, gerçek görüşme; sepete ekleme, tamamlanan satış anlamına gelmez. Birincil ve ikincil dönüşümleri ayırın ve her olayın nerede, nasıl tetiklendiğini test edin.',
          'Mümkün olduğunda platform dönüşümünü CRM, sipariş veya işletme kaydıyla karşılaştırın. Ajansın yalnız Google Ads panelindeki sayıyı değil; nitelikli talep, iptal, iade veya satış sonucunu nasıl değerlendireceğini sorun.'
        ],
        checklist: [
          'Birincil iş dönüşümü kampanya öncesinde tanımlandı.',
          'Etiket ve olaylar gerçek test işlemiyle doğrulandı.',
          'Çift sayım ve teşekkür sayfasını yeniden yükleme riski kontrol edildi.',
          'Gizlilik ve izin gereksinimleri gerçek veri akışına göre değerlendirildi.',
          'Platform verisini iş sonucuyla karşılaştıracak yöntem belirlendi.'
        ]
      },
      {
        id: 'butce-ve-rapor',
        label: 'Bütçe ve rapor',
        heading: 'Teklifte medya bütçesini hizmet kapsamından ayırın.',
        paragraphs: [
          'Google’a ödenen reklam harcaması; hesap yönetimi, reklam metni, görsel/video, ürün akışı, dönüşüm kurulumu ve açılış sayfası geliştirmesiyle aynı kalem değildir. Dahil olan işleri, revizyon sınırlarını, üçüncü taraf araçları ve vergi durumunu ayrı satırlarda görün.',
          'Rapor gösterim, tıklama ve ortalama maliyeti sıralayan bir ekran görüntüsü olmamalıdır. Hangi sorguların bütçe harcadığını, hangi dönüşümlerin doğrulandığını, dönemde neyin değiştirildiğini ve sonraki testin hangi hipoteze dayandığını açıklamalıdır.'
        ],
        callout: 'Sonuç garantisi veya kesin getiri vaadi yerine ölçüm kalitesini, deney planını, hesap şeffaflığını ve karar disiplinini karşılaştırın.'
      },
      {
        id: 'teklif-kontrolu',
        label: 'Karar listesi',
        heading: 'Google Ads ajansı teklifini kabul etmeden önce 10 kontrol.',
        ordered: [
          '<strong>Hedef:</strong> Kampanyanın üreteceği birincil iş sonucu yazıldı mı?',
          '<strong>Hesap:</strong> Hesap, veri ve ödeme erişimi işletmede kalıyor mu?',
          '<strong>Kapsam:</strong> Denetim, kurulum, yönetim, içerik ve sayfa işleri ayrıldı mı?',
          '<strong>Arama:</strong> Arama terimi ve negatif kelime yönetim sıklığı açık mı?',
          '<strong>Sayfa:</strong> Reklam sonrası açılış sayfasından kimin sorumlu olduğu belli mi?',
          '<strong>Ölçüm:</strong> Dönüşüm olayı ve doğrulama yöntemi tanımlandı mı?',
          '<strong>Bütçe:</strong> Medya bütçesi ile hizmet ve araç ücretleri ayrı mı?',
          '<strong>Rapor:</strong> Metrik, değişiklik ve sonraki karar birlikte raporlanıyor mu?',
          '<strong>İletişim:</strong> Onay, acil durum ve değişiklik yetkisi tanımlı mı?',
          '<strong>Çıkış:</strong> Kampanya, veri ve erişimlerin devir planı yazılı mı?'
        ]
      }
    ],
    sources: [
      { label: 'Google Ads Help — Arama terimleri raporu', url: 'https://support.google.com/google-ads/answer/2472708?hl=tr' },
      { label: 'Google Ads Help — Arama terimlerinden negatif kelime bulma', url: 'https://support.google.com/google-ads/answer/7102466?hl=tr' },
      { label: 'Google Ads Help — Web sitesi dönüşümlerinin ölçülmesi', url: 'https://support.google.com/google-ads/answer/7521212?hl=tr' },
      { label: 'Google Ads Help — Yönetici hesaplarında müşteri hesabı sahipliği', url: 'https://support.google.com/google-ads/answer/7456532?hl=tr' }
    ]
  },
  {
    slug: 'google-ads-mi-meta-reklamlari-mi',
    metaTitle: 'Google Ads mi Meta Reklamları mı? Karşılaştırma | Narvals',
    title: 'Google Ads mi Meta reklamları mı? Hangi kanal ne zaman seçilmeli?',
    description: 'Google Ads ve Meta reklamlarını kullanıcı niyeti, teklif, kreatif, ölçüm, bütçe ve müşteri yolculuğuna göre karşılaştıran karar rehberi.',
    keywords: ['Google Ads mi Meta reklam mı', 'Google reklam Meta reklam farkı', 'dijital reklam seçimi', 'reklam kanalı karşılaştırma'],
    category: 'Dijital reklam',
    published: '2026-08-27T20:30:00+03:00',
    modified: '2026-08-27T20:30:00+03:00',
    readingTime: 9,
    answer: 'Google Ads, kullanıcı ürün veya hizmeti aktif biçimde aradığında mevcut talebi yakalamak için; Meta reklamları ise görsel içerik ve kitle sinyalleriyle talep oluşturmak, ilgiyi büyütmek veya yeniden hedeflemek için daha uygun olabilir. Doğru kanal sektör adına göre değil, müşterinin karar anı, teklifin anlatım biçimi, dönüşüm ölçümü ve bütçenin öğrenme kapasitesine göre seçilir.',
    takeaways: [
      'Google Search mevcut arama talebine, Meta ise keşif ve görsel anlatıma daha yakındır.',
      'Kanal seçimi tıklama maliyetiyle değil, nitelikli iş sonucuyla yapılmalıdır.',
      'Arama hacmi olmayan teklif için yalnız Google Ads yeterli olmayabilir.',
      'Zayıf açılış sayfası veya ölçüm iki kanalda da bütçeyi boşa harcatabilir.',
      'Kanallar birlikte kullanılıyorsa her birine ayrı görev ve dönüşüm tanımı verilmelidir.'
    ],
    about: ['Google Ads', 'Meta reklamları', 'Dijital reklam kanalı seçimi'],
    related: ['google-ads-ajansi-secerken-sorulacak-sorular', 'meta-reklam-butcesi-nasil-belirlenir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/google-ads/',
    serviceLabel: 'Google Ads yönetimi hizmetini inceleyin',
    faq: [
      { question: 'Google Ads ile Meta reklamları arasındaki temel fark nedir?', answer: 'Google Ads arama anındaki mevcut talebi (Search Intent) yakalarken; Meta reklamları kullanıcının ilgi alanlarına göre yeni talep yaratır (Push Marketing).' },
      { question: 'Hangi sektörler Google Ads’e öncelik vermelidir?', answer: 'Acil ihtiyaç (çilingir, hukuk, teknik servis vb.) ve net ürün/hizmet araması yapan yüksek niyetli B2B ve B2C sektörleri.' },
      { question: 'İki kanal birlikte kullanılabilir mi?', answer: 'Evet; Meta ile marka bilinirliği ve ilgi yaratılıp, Google Search veya Retargeting ile dönüşüm tamamlanarak en yüksek verim elde edilir.' }
    ],
    sections: [
      {
        id: 'temel-fark',
        label: 'Kısa karşılaştırma',
        heading: 'Temel fark, kullanıcının reklamla karşılaştığı andaki niyettir.',
        paragraphs: [
          'Google Arama Ağı reklamı, kullanıcının yazdığı sorguyla ilişkilidir. Bu nedenle “e-ticaret sitesi yaptırmak”, “Google Ads ajansı” veya belirli bir ürün modeli gibi açık talep bulunan konularda güçlü bir başlangıç olabilir. Ancak sorgunun ticari niyeti, reklamın vaadi ve açılış sayfası aynı ihtiyeti sürdürmelidir.',
          'Meta reklamı çoğunlukla kullanıcı bir içerik akışındayken karşısına çıkar. Ürünün görsel olarak gösterilmesi, problemin henüz arama davranışına dönüşmeden anlatılması, farklı mesaj ve kreatiflerin test edilmesi veya site ziyaretçisinin yeniden hedeflenmesi için kullanılabilir.'
        ],
        table: {
          headers: ['Karar alanı', 'Google Ads', 'Meta reklamları'],
          rows: [
            ['Başlangıç sinyali', 'Arama sorgusu ve anahtar kelime ilişkisi', 'Kitle, içerik etkileşimi ve platform sinyalleri'],
            ['Kullanıcı durumu', 'İhtiyacı aktif biçimde araştırıyor olabilir', 'İhtiyeti yeni fark ediyor veya değerlendiriyor olabilir'],
            ['Ana üretim yükü', 'Arama yapısı, metin ve açılış sayfası', 'Kreatif fikir, görsel/video ve mesaj varyasyonu'],
            ['Temel kalite kontrolü', 'Arama terimi ve dönüşüm kalitesi', 'Kreatif, frekans, kitle ve dönüşüm kalitesi'],
            ['Yaygın risk', 'İlgisiz sorgulara bütçe harcamak', 'Dikkat çekip nitelikli talep üretememek']
          ]
        }
      },
      {
        id: 'google-ads-ne-zaman',
        label: 'Google Ads',
        heading: 'Aktif arama talebi varsa Google Ads önce test edilebilir.',
        paragraphs: [
          'Hedef kullanıcı problemi veya çözümü Google’da açık ifadelerle arıyorsa Search kampanyası ihtiyacın oluştuğu ana yaklaşabilir. Buradaki görev yalnız görünmek değildir; bilgi arayan, ücretsiz çözüm arayan ve satın alma niyeti taşıyan sorguları ayırmaktır.',
          'Arama hacmi sınırlıysa kampanya ölçeği doğal olarak sınırlanır. Çok geniş eşleşme ve kontrolsüz otomasyonla yapay hacim üretmek yerine gerçek arama terimlerini, negatif kelimeleri ve nitelikli dönüşümleri izlemek gerekir.'
        ],
        checklist: [
          'Müşteri hizmeti veya ürünü açık ifadelerle arıyor.',
          'Arama niyetlerine karşılık veren ayrı açılış sayfaları var.',
          'Form, arama, satış veya nitelikli talep doğrulanabiliyor.',
          'İlgisiz sorguları ayıracak düzenli arama terimi kontrolü yapılabiliyor.'
        ]
      },
      {
        id: 'meta-ne-zaman',
        label: 'Meta reklamları',
        heading: 'Teklif gösterilerek anlaşılabiliyorsa Meta reklamları öne çıkabilir.',
        paragraphs: [
          'Yeni bir ürün kategorisi, görsel dönüşümü belirgin bir hizmet veya hedef kitlenin henüz adını koymadığı bir problem yalnız arama talebine yaslanamaz. Görsel, kısa video ve net mesaj varyasyonları teklifin neden önemli olduğunu gösterebilir.',
          'Meta kampanyasında beğeni, izlenme veya ucuz tıklama doğrudan satış kanıtı değildir. Kreatif sinyalini site davranışı, form, mesaj ve mümkün olduğunda nitelikli talep ya da satışla bağlamak gerekir.'
        ],
        checklist: [
          'Ürün veya problem görsel içerikle hızlı biçimde anlatılabiliyor.',
          'Farklı mesaj ve kreatif varyasyonları düzenli üretilebiliyor.',
          'Site veya form, reklam vaadini kesintisiz sürdürüyor.',
          'Platform metriği gerçek iş sonucuyla karşılaştırılabiliyor.'
        ]
      },
      {
        id: 'birlikte-kullanim',
        label: 'Birlikte kullanım',
        heading: 'İki kanal birlikteyse aynı işi yapmamalı.',
        paragraphs: [
          'Meta reklamı yeni kitleye problemi ve teklifi gösterebilir; Google Ads daha sonra marka veya hizmeti arayan talebi yakalayabilir. Tersi biçimde Google’dan gelen ziyaretçi karar vermediyse, uygun izin ve teknik koşullarla Meta üzerinde yeniden hedefleme planlanabilir.',
          'Bu yapı otomatik olarak daha iyi değildir. Kanallar aynı dönüşüme farklı atıf pencereleriyle kredi verebilir. Toplam sonucu CRM, sipariş veya nitelikli talep kaydıyla kontrol edin; platform raporlarını basitçe toplamayın.'
        ],
        callout: 'Her kanala tek cümlelik görev verin: “Google aktif talebi yakalar”; “Meta yeni talep oluşturur ve ilgiyi büyütür” gibi. Görev net değilse bütçe dağılımı da açıklanamaz.'
      },
      {
        id: 'karar-matrisi',
        label: 'Karar matrisi',
        heading: 'Kanalı altı soruyla seçin.',
        ordered: [
          '<strong>Talep:</strong> İnsanlar çözümü bugün hangi kelimelerle arıyor?',
          '<strong>Anlatım:</strong> Teklif metinle mi, görsel/video ile mi daha hızlı anlaşılır?',
          '<strong>Sayfa:</strong> Her reklam vaadini karşılayan güvenilir bir açılış sayfası var mı?',
          '<strong>Ölçüm:</strong> Hangi olay gerçek dönüşüm, hangisi yalnız ara sinyal?',
          '<strong>Üretim:</strong> Düzenli reklam metni veya kreatif varyasyonu üretme kapasitesi var mı?',
          '<strong>Bütçe:</strong> Öğrenme ve karşılaştırma için yeterli süre ve risk sınırı belirlendi mi?'
        ],
        callout: 'Cevaplar belirsizse bütçeyi iki kanala bölmeden önce küçük, ölçülebilir bir kanal testiyle varsayımı doğrulayın.'
      }
    ],
    sources: [
      { label: 'Google Ads Help — Doğru kampanya türünü seçme', url: 'https://support.google.com/google-ads/answer/2567043?hl=tr' },
      { label: 'Google Ads Help — Google Arama Ağı hakkında', url: 'https://support.google.com/google-ads/answer/1722047?hl=tr' },
      { label: 'Google Ads Help — Arama terimleri raporu', url: 'https://support.google.com/google-ads/answer/2472708?hl=tr' },
      { label: 'Google Ads Help — Dönüşüm değerleri hakkında', url: 'https://support.google.com/google-ads/answer/13064207?hl=tr' },
      { label: 'Meta Business Help — Meta reklam açık artırmasına giriş', url: 'https://www.facebook.com/business/help/430291176997542' },
      { label: 'Meta Business Help — Meta Pixel hakkında', url: 'https://www.facebook.com/business/help/742478679120153' }
    ]
  },
  {
    slug: 'b2b-web-sitesi-nasil-olmali',
    metaTitle: 'B2B Web Sitesi Nasıl Olmalı? | Narvals Labs',
    title: 'B2B web sitesi nasıl olmalı? Lead generation ve kurumsal güven rehberi',
    description: 'B2B kurumsal web sitesinde güven inşası, karar verici odaklı içerik mimarisi, nitelikli talep (lead gen) toplama ve teknik SEO ilkeleri.',
    keywords: ['B2B web sitesi', 'B2B web tasarım', 'lead generation', 'kurumsal teklif formu', 'B2B dönüşüm'],
    category: 'Web & UX',
    published: '2026-08-27T10:00:00+03:00',
    modified: '2026-08-27T10:00:00+03:00',
    readingTime: 9,
    answer: 'Başarılı bir B2B web sitesi bir vitrin değil; satın alma komitesindeki karar vericilerin (yönetici, teknik sorumlu, satın alma) şüphelerini gideren, teknik yetkinliği kanıtlayan ve nitelikli teklif talebine (lead generation) yönlendiren stratejik bir satış aracıdır. Doğrudan ürün satışı yerine güven inşası, süreç şeffaflığı ve sürtünmesiz iletişim akışı üzerine kurulur.',
    takeaways: [
      'B2B karar süreçlerinde tek bir kişi değil, farklı uzmanlıklarda bir satın alma komitesi bulunur.',
      'Slogandan çok gerçek vaka analizleri, teknik dokümanlar ve süreç şeffaflığı güven kazandırır.',
      'Teklif ve iletişim formları gereksiz alanlardan arındırılmalı, sürtünme minimize edilmelidir.',
      'Tüm form ve etkileşimler doğrudan CRM ve satış bildirim sistemlerine anlık bağlanmalıdır.'
    ],
    about: ['B2B web sitesi', 'Lead generation', 'Kurumsal UX', 'B2B pazarlama'],
    related: ['kurumsal-web-sitesi-briefi-nasil-hazirlanir', 'web-sitesi-teknik-seo-kontrol-listesi', 'web-sitesi-yaptirmadan-once-kapsam-teklif-karar-rehberi'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Kurumsal web tasarım ve UX hizmetini inceleyin',
    faq: [
      { question: 'B2B web sitesinin B2C siteden farkı nedir?', answer: 'B2B sitelerde satın alma döngüsü daha uzundur; duygusal satın alma yerine kurumsal güven kanıtları, ürün spesifikasyonları ve nitelikli teklif formu odaklıdır.' },
      { question: 'B2B sitelerde fiyat açıkça yazılmalı mıdır?', answer: 'Özelleştirilmiş ürün/hizmetlerde fiyat yerine başlangıç aralığı veya teklif isteme butonu kullanılabilir; standart ürünlerde ise şeffaf fiyat güveni artırır.' },
      { question: 'Vaka çalışmaları (Case Study) neden kritiktir?', answer: 'B2B karar vericileri somut başarı verilerini, çözülen problemi ve teslimat yetkinliğini görmek isteyerek risklerini minimize eder.' }
    ],
    sections: [
      {
        id: 'b2b-farki',
        label: 'Temel fark',
        heading: 'B2B web sitesinin görevi anlık satış değil, nitelikli görüşme başlatmaktır.',
        paragraphs: [
          'B2C sitelerde duygusal tetikleyiciler ve anlık indirimler öne çıkarken; B2B projelerde uzun satın alma döngüleri, bütçe onayları ve risk yönetimi belirleyicidir. Karar verici, şirketi adına sorumluluk aldığı için hata payını sıfıra indirmek ister.',
          'Bu nedenle B2B web sitesi ziyaretçiye “Neden en ucuzu değil de en güveniliri biziz?” sorusunun somut kanıtlarını sunmalıdır. Arayüz tasarımı, bilgi hiyerarşisi ve hız bu güven hissinin ilk temelini atar.'
        ],
        callout: 'Kritik ilke: Ziyaretçi sitenizde aradığı teknik veya kurumsal cevabı 10 saniye içinde bulamazsa rakibin sitesine geçer.'
      },
      {
        id: 'icerik-mimarisi',
        label: 'İçerik mimarisi',
        heading: 'Satın alma komitesinin aradığı 5 temel güven unsuru.',
        paragraphs: [
          'B2B sitede yer alması gereken içerikler yüzeysel tanıtım metinleri değil; somut, ölçülebilir ve doğrulanabilir verilerden oluşmalıdır.'
        ],
        ordered: [
          '<strong>Gerçek Vaka Analizleri (Case Studies):</strong> Hangi müşterinin hangi problemini, ne kadar sürede ve hangi yöntemle çözdüğünüzü gösteren vaka özetleri.',
          '<strong>Süreç ve Metodoloji Şeffaflığı:</strong> Projeye başlandığında işin hangi aşamalardan geçeceğini gösteren adım adım çalışma modeli.',
          '<strong>Teknik Uyumluluk ve Sertifikalar:</strong> Güvenlik, KVKK, ISO veya sektörel standartlara uyumluluk kanıtları.',
          '<strong>Doğrulanabilir Ekip ve Uzmanlık:</strong> Projeyi fiilen yürütecek çekirdek ekibin tecrübesi ve uzmanlık alanları.',
          '<strong>Net Kapsam ve Karar Rehberleri:</strong> Hangi hizmetlerin kapsama dahil olduğunu açıkça belirten şeffaf yapı.'
        ]
      },
      {
        id: 'lead-generation-ux',
        label: 'Dönüşüm UX',
        heading: 'Teklif ve iletişim adımlarında sürtünmeyi ortadan kaldırın.',
        paragraphs: [
          'Birçok B2B site, 15 alanlık uzun formlar yüzünden potansiyel müşterilerini kaybeder. Formlar yalnız ilk nitelikli teması başlatacak kritik soruları içermelidir: İsim, kurumsal e-posta, şirket adı ve temel ihtiyaç özeti.',
          'Ayrıca doğrudan WhatsApp, takvim üzerinden randevu seçimi veya e-posta gibi alternatif iletişim kanalları sunularak karar vericinin tercihine saygı duyulmalıdır.'
        ],
        table: {
          headers: ['Form unsuru', 'Kaçınılması gereken', 'Doğru yaklaşım'],
          rows: [
            ['Alan sayısı', '10+ zorunlu alan sormak', '3-4 temel alan ile ilk iletişimi başlatmak'],
            ['E-posta tipi', 'Herhangi bir doğrulama yapmamak', 'Kurumsal e-posta alanlarını önceliklendirmek'],
            ['Geri dönüş süresi', 'Belirsiz bekletme', '“24 saat içinde uzman ekibimiz dönüş yapacaktır” taahhüdü'],
            ['Gizlilik &amp; KVKK', 'Açık onay metnini gizlemek', 'Şeffaf KVKK ve aydınlatma metni sunmak']
          ]
        }
      },
      {
        id: 'b2b-teknik-seo',
        label: 'Teknik altyapı',
        heading: 'Kurumsal SEO, hız ve CRM entegrasyonu.',
        paragraphs: [
          'B2B müşteriler genellikle sektörlerine özgü teknik anahtar kelimeler ve problem odaklı aramalarla (örn. “ERP entegrasyonu ajansı”, “özel depo yönetim yazılımı”) sitenize ulaşır. Sayfa yapısı semantik başlıklar ve Schema.org yapısal verileriyle donatılmalıdır.',
          'Form doldurulduğu anda gelen talebin satış ekibinin kullandığı CRM sistemine (HubSpot, Salesforce veya özel panel) anlık düşmesi ve ilgili kişiye SMS/e-posta bildirimi gitmesi dönüşüm başarısını katlar.'
        ],
        callout: 'Talebe ilk 15 dakika içinde geri dönen işletmelerin satış kapama oranı, ertesi gün dönenlere göre 7 kat daha yüksektir.'
      }
    ],
    sources: [
      { label: 'Google Search Central — B2B ve Kurumsal Web Sitesi Best Practices', url: 'https://developers.google.com/search/docs' },
      { label: 'Schema.org — Organization and ProfessionalService Data', url: 'https://schema.org/ProfessionalService' }
    ]
  },
  {
    slug: 'web-sitesi-hizlandirma-core-web-vitals-rehberi',
    metaTitle: 'Web Sitesi Hızlandırma & Core Web Vitals Rehberi | Narvals',
    title: 'Web sitesi hızlandırma ve Core Web Vitals (LCP, INP, CLS) rehberi',
    description: 'Web sitesi açılış hızını artırmak ve Google Core Web Vitals (LCP, INP, CLS) metriklerini yeşile çekmek için uygulanabilir optimizasyon rehberi.',
    keywords: ['web sitesi hızlandırma', 'Core Web Vitals', 'LCP optimizasyonu', 'INP optimizasyonu', 'CLS optimizasyonu', 'site hızı'],
    category: 'SEO & Performans',
    published: '2026-08-27T10:00:00+03:00',
    modified: '2026-08-27T10:00:00+03:00',
    readingTime: 10,
    answer: 'Web sitesi hızlandırma, yalnızca görselleri sıkıştırmaktan ibaret değildir. Google’ın sıralama sinyali olarak kullandığı Core Web Vitals standartlarında LCP (En Büyük İçerikli Boyama ≤ 2.5s), INP (Sonraki Etkileşime Yanıt Verme ≤ 200ms) ve CLS (Kümülatif Düzen Kayması ≤ 0.1) metriklerini yeşil bölgeye çekerek hem arama motorlarında üst sıralara çıkmayı hem de kullanıcı terk oranını düşürmeyi hedefler.',
    takeaways: [
      'Site açılış hızındaki her 1 saniyelik gecikme dönüşüm oranlarını ortalama %7 oranında düşürür.',
      'LCP için en kritik adım: Hero görselinin AVIF/WebP olarak sunulması ve render-blocking CSS/JS’in kaldırılmasıdır.',
      'INP metriği, ağır JavaScript kütüphanelerini temizleyerek ve ana iş parçacığını (main thread) rahatlatarak iyileştirilir.',
      'CLS için tüm görsel ve reklam alanlarına sabit width/height değerleri tanımlanmalıdır.'
    ],
    about: ['Core Web Vitals', 'Site hızı', 'LCP optimizasyonu', 'Web performansı'],
    related: ['web-sitesi-teknik-seo-kontrol-listesi', 'google-ai-aramalari-icin-geo-rehberi', 'web-sitesi-maliyeti-nasil-hesaplanir'],
    servicePath: '/hizmetler/web-tasarim/',
    serviceLabel: 'Hızlı ve performanslı web tasarım çözümlerini inceleyin',
    faq: [
      { question: 'Core Web Vitals nedir ve neden önemlidir?', answer: 'Google’ın LCP (yükleme hızı), INP (etkileşim gecikmesi) ve CLS (görsel kayma) metrikleriyle web sitesi kullanıcı deneyimini ölçtüğü resmî standartlardır.' },
      { question: 'LCP (Largest Contentful Paint) nasıl iyileştirilir?', answer: 'Hero görselini optimize etmek (WebP/AVIF, fetchpriority="high"), sunucu yanıt süresini (TTFB) düşürmek ve gereksiz JS yükünü kaldırmakla iyileşir.' },
      { question: 'INP (Interaction to Next Paint) neden zayıf çıkar?', answer: 'Sayfadaki ağır JavaScript işlemleri, ana iş parçacığını (main thread) kilitleyerek kullanıcının tıklamalarına geç yanıt verilmesine neden olur.' }
    ],
    sections: [
      {
        id: 'core-web-vitals-nedir',
        label: 'Temel metrikler',
        heading: 'Core Web Vitals metrikleri ve Google’ın kabul ettiği yeşil eşikler.',
        paragraphs: [
          'Google, kullanıcı deneyimini üç temel ayak üzerinden ölçümler: Yükleme hızı (LCP), etkileşim hızı (INP) ve görsel kararlılık (CLS). Bu metriklerin tamamı 75. yüzdelik dilimde (p75) gerçek kullanıcı verileriyle (CrUX) değerlendirilir.'
        ],
        table: {
          headers: ['Metrik', 'Açıklama', 'İyi (Yeşil Eşik)', 'Geliştirilmeli', 'Kötü (Kırmızı Eşik)'],
          rows: [
            ['LCP (Largest Contentful Paint)', 'Ana içeriğin (görsel/başlık) ekranda belirmesi', '≤ 2.5 sn', '2.5 - 4.0 sn', '> 4.0 sn'],
            ['INP (Interaction to Next Paint)', 'Tıklama/dokunmaya arayüzün yanıt verme süresi', '≤ 200 ms', '200 - 500 ms', '> 500 ms'],
            ['CLS (Cumulative Layout Shift)', 'Sayfa yüklenirken öğelerin beklenmedik kayması', '≤ 0.1', '0.1 - 0.25', '> 0.25']
          ]
        }
      },
      {
        id: 'lcp-optimizasyonu',
        label: 'Yükleme hızı',
        heading: 'LCP süresini 2.5 saniyenin altına çekmenin 4 yolu.',
        paragraphs: [
          'LCP genellikle ana sayfadaki büyük kahraman görseli (Hero image) veya H1 başlığıdır. Yavaş yüklenen LCP’nin ana nedeni büyük dosya boyutları ve sunucu yanıt süresidir.'
        ],
        ordered: [
          '<strong>Modern Görsel Formatları:</strong> PNG ve JPG yerine %40-%60 daha hafif AVIF ve WebP formatlarına geçin.',
          '<strong>Fetch Priority ve Preload:</strong> Hero görseline <code>fetchpriority="high"</code> ve <code>loading="eager"</code> vererek tarayıcının ilk bu kaynağı indirmesini sağlayın.',
          '<strong>Kritik CSS Ayırma:</strong> Ekranın üst kısmında (above-the-fold) gerekmeyen tüm stil dosyalarını ve scriptleri erteleyin (defer/async).',
          '<strong>CDN ve Edge Caching:</strong> Statik varlıkları Cloudflare veya hızlı bir CDN üzerinden kullanıcıya coğrafi olarak en yakın sunucudan dağıtın.'
        ]
      },
      {
        id: 'inp-ve-js',
        label: 'Etkileşim hızı',
        heading: 'INP metriğini iyileştirme: Ağır JavaScript yükünden kurtulun.',
        paragraphs: [
          'Sayfada çok fazla üçüncü taraf izleme kodu (etiketler, canlı destek araçları, ağır animasyon kütüphaneleri) bulunduğunda ana iş parçacığı kilitlenir. Kullanıcı bir butona bastığında arayüz milisaniyelerce tepki veremez.',
          'Gereksiz JavaScript paketlerini silin; ağır işlemleri Web Workers veya requestIdleCallback ile ana iş akışının dışına taşıyın.'
        ],
        callout: 'Kullanılmayan her 50 KB harici JS kütüphanesi, mobil cihazlarda ortalama 200 ms işlemci gecikmesi yaratır.'
      },
      {
        id: 'cls-duzen-kaymasi',
        label: 'Görsel kararlılık',
        heading: 'CLS’yi sıfırlama: Kaymaları ve zıplamaları önleyin.',
        paragraphs: [
          'Kullanıcı tam bir butona tıklayacakken üstte aniden bir banner veya resim belirmesi ve sayfanın aşağı kayması CLS cezasının başlıca sebebidir.',
          'Tüm <code>&lt;img&gt;</code> ve <code>&lt;video&gt;</code> etiketlerinde <code>width</code> ve <code>height</code> özniteliklerini mutlaka belirtin; özel yazı tipleri yüklenirken metin kaymalarını önlemek için <code>font-display: swap</code> kuralını dikkatli yapılandırın.'
        ]
      }
    ],
    sources: [
      { label: 'web.dev — Core Web Vitals Kılavuzu', url: 'https://web.dev/vitals/' },
      { label: 'Google Search Central — Sayfa Deneyimi ve Sıralama', url: 'https://developers.google.com/search/docs/appearance/page-experience' }
    ]
  },
  {
    slug: 'e-ticaret-donusum-orani-artirma-cro-rehberi',
    metaTitle: 'E-Ticaret Dönüşüm Oranı Artırma (CRO) Rehberi | Narvals',
    title: 'E-ticaret dönüşüm oranı artırma (CRO) ve sepet terkini önleme rehberi',
    description: 'E-ticarette ürün sayfası UX, sepet terkini önleme, mobil ödeme akışı ve dönüşüm oranı optimizasyonu (CRO) için pratik karar rehberi.',
    keywords: ['dönüşüm oranı artırma', 'e-ticaret CRO', 'sepet terkini önleme', 'ödeme sayfası UX', 'sepet optimizasyonu'],
    category: 'E-Ticaret',
    published: '2026-08-27T10:00:00+03:00',
    modified: '2026-08-27T10:00:00+03:00',
    readingTime: 9,
    answer: 'E-ticarette reklam bütçesini artırmadan geliri ve kârlılığı katlamanın en doğrudan yolu dönüşüm oranı optimizasyonudur (CRO). Ziyaretçinin ürün keşfinden sepete eklemesine ve ödeme adımını tamamlamasına kadar olan satın alma hunisindeki (funnel) tüm sürtünmeleri ortadan kaldırarak terk oranlarını minimize etmeyi amaçlar.',
    takeaways: [
      'Dönüşüm oranını %1’den %2’ye çıkarmak, reklam harcamasını ikiye katlamadan aynı satışı üretir.',
      'Sepet terklerinin en yaygın nedeni: Son adımda çıkan beklenmedik kargo/ek ücretler ve zorunlu üyeliktir.',
      'Mobil ürün sayfasında sepete ekle butonu ekranın altında yapışkan (sticky) kalmalıdır.',
      'Güven rozetleri, taksit tablosu ve iade garantisi karar verme süresini kısaltır.'
    ],
    about: ['Dönüşüm oranı optimizasyonu', 'E-ticaret CRO', 'Sepet terki', 'Ödeme sayfası UX'],
    related: ['e-ticaret-altyapisi-nasil-secilir', 'e-ticaret-sitesi-maliyeti-nasil-hesaplanir', 'meta-pixel-ve-conversions-api-farki'],
    servicePath: '/hizmetler/e-ticaret/',
    serviceLabel: 'E-ticaret sitesi tasarım ve optimizasyon hizmetini inceleyin',
    faq: [
      { question: 'Dönüşüm Oranı Optimizasyonu (CRO) nedir?', answer: 'Mevcut site trafiğinden daha fazla sipariş veya teklif elde etmek için kullanıcı yolculuğundaki sürtünmeleri ve tereddütleri giderme sürecidir.' },
      { question: 'Sepeti terk etme oranları nasıl düşürülür?', answer: 'Zorunlu üyelik yerine misafir alışverişi sunmak, beklenmedik kargo/ek ücretleri baştan göstermek ve güvenli ödeme seçeneklerini çeşitlendirmekle düşürülür.' },
      { question: 'A/B testi yapmadan önce nelere dikkat edilmelidir?', answer: 'Test edilecek hipotezin analitik veriye dayanması ve istatistiksel anlamlılığa ulaşacak yeterli trafik ve dönüşüm hacminin olması gerekir.' }
    ],
    sections: [
      {
        id: 'cro-nedir-ve-onemi',
        label: 'Ekonomik etki',
        heading: 'Trafik çekmek mi, mevcut trafiğin dönüşümünü artırmak mı?',
        paragraphs: [
          'Dijital reklam maliyetlerinin (TBM/BGBM) sürekli yükseldiği bir ortamda, yalnızca daha fazla trafik satın almak birim kârlılığı eritir. Sitenize gelen 10.000 ziyaretçiden 100 kişi alışveriş yapıyorsa dönüşüm oranınız %1’dir. Küçük UX iyileştirmeleriyle bunu 200 kişiye (%2) çıkardığınızda, tek bir kuruş ek reklam harcamadan cironuzu ikiye katlamış olursunuz.'
        ],
        callout: 'CRO bir tahmin sanatı değil; kullanıcı davranış verileri, analitik huniler ve kontrollü A/B testleri bütünüdür.'
      },
      {
        id: 'urun-sayfasi-optimizasyonu',
        label: 'Ürün sayfası UX',
        heading: 'Ürün detay sayfasında kararı hızlandıran 5 kritik öğe.',
        ordered: [
          '<strong>Yüksek Kaliteli ve Yakınlaştırılabilir Görseller:</strong> Ürünü tüm açılardan, kullanım halinde ve gerçek boyut hissiyle gösterin.',
          '<strong>Net Fiyat ve Taksit Seçenekleri:</strong> İndirimli fiyatı, tasarruf tutarını ve kredi kartı taksit tablosunu açıkça sergileyin.',
          '<strong>Kargo ve Teslimat Bilgisi:</strong> “Saat 16:00’ya kadar sipariş verirseniz bugün kargoda” gibi net zaman vaadi sunun.',
          '<strong>Stok Durumu ve Aciliyet Hissi:</strong> Sınırlı stok durumunda gerçek veriyi (“Son 3 ürün”) göstererek ertelemeyi önleyin.',
          '<strong>Doğrulanmış Müşteri Yorumları:</strong> Yıldız puanı ve fotoğraflı gerçek kullanıcı deneyimlerini sayfanın merkezine alın.'
        ]
      },
      {
        id: 'sepet-terkini-onleme',
        label: 'Ödeme akışı',
        heading: 'Sepet terkini önleyen 4 ödeme sayfası kuralı.',
        paragraphs: [
          'Küresel e-ticaret verilerine göre sepete eklenen her 100 üründen yaklaşık 70’i satın alma tamamlanmadan terk edilir. Bu kaybı önlemek için ödeme adımı kusursuzlaştırılmalıdır.'
        ],
        table: {
          headers: ['Terk Sebebi', 'Müşteri Tepkisi', 'Çözüm Yöntemi'],
          rows: [
            ['Zorunlu Üyelik', 'Şifre belirlemekle uğraşmak istemez', 'Misafir alışverişi (Guest checkout) imkanı sunun.'],
            ['Gizli Ek Maliyetler', 'Ödeme ekranında kargo çıkınca aldatılmış hisseder', 'Ürün sayfasında kargo ücretini açıkça belirtin.'],
            ['Karmaşık Formlar', 'Mobilde uzun adres yazmaktan yorulur', 'Adres otomatik tamamlama ve sade tek sayfa ödeme kullanın.'],
            ['Güven Eksikliği', 'Kart bilgilerini girmekten çekinir', '3D Secure, SSL rozetleri ve popüler ödeme geçitlerini gösterin.']
          ]
        }
      },
      {
        id: 'cro-test-sureci',
        label: 'Test ve iyileştirme',
        heading: 'Veri odaklı optimizasyon döngüsü nasıl kurulur?',
        paragraphs: [
          'Tasarımı rastgele değiştirmek yerine Google Analytics 4 hunilerini ve Clarity/Hotjar gibi ısı haritalarını inceleyin. Kullanıcıların sepete ekledikten sonra adres mi, ödeme mi yoksa kargo aşamasında mı takıldığını tespit edin. Hipotez kurun ve test edin.'
        ],
        callout: 'Asla aynı anda 5 farklı öğeyi değiştirmeyin; hangi değişikliğin dönüşümü artırdığını izole edebilmek için tek bir değişkeni test edin.'
      }
    ],
    sources: [
      { label: 'Baymard Institute — E-Commerce Checkout Usability Research', url: 'https://baymard.com/lists/cart-abandonment-rate' },
      { label: 'Google Analytics Help — GA4 Huni Keşfi', url: 'https://support.google.com/analytics/answer/9327974?hl=tr' }
    ]
  },
  {
    slug: 'yonetim-paneli-ve-crm-yazilimi-nasil-secilir',
    metaTitle: 'İşletmeye Özel CRM ve Yönetim Paneli Seçimi | Narvals',
    title: 'İşletmeye özel CRM ve yönetim paneli seçim rehberi',
    description: 'Hazır SaaS CRM yerine işletmeye özel yönetim paneli ne zaman gerekir? Yetkilendirme, veri güvenliği, iş akışları ve entegrasyon rehberi.',
    keywords: ['özel CRM yazılımı', 'yönetim paneli yazılımı', 'iş takip programı', 'özel panel geliştirme', 'işletme yazılımı'],
    category: 'Özel yazılım',
    published: '2026-08-27T10:00:00+03:00',
    modified: '2026-08-27T10:00:00+03:00',
    readingTime: 8,
    answer: 'Her işletmenin işleyişi, onay mekanizmaları, fiyatlandırma formülleri ve müşteri takibi standart bir hazır SaaS yazılımına uymaz. Şirket içinde dağınık Excel tabloları, tekrarlayan veri girişleri ve departmanlar arası bilgi kopukluğu yaşanıyorsa, işletmenin tam iş akışına göre tasarlanan özel bir yönetim paneli ve CRM sistemi operasyonel maliyetleri ciddi oranda düşürür.',
    takeaways: [
      'Hazır SaaS araçlar başlangıçta ucuzdur; ancak kullanıcı başı lisans ücretleri büyüdükçe ağırlaşır.',
      'Özel yönetim paneli işletmenin süreçlerine adapte olur; işletmeyi hazır bir kalıba zorlamaz.',
      'Rol bazlı yetkilendirme (RBAC) ile çalışanların yalnızca yetkili oldukları verileri görmesi sağlanır.',
      'Mevcut muhasebe, ERP veya kargo sistemleriyle tam iki yönlü API entegrasyonu kurulabilir.'
    ],
    about: ['Özel CRM', 'Yönetim paneli', 'İşletme yazılımı', 'Özel panel geliştirme'],
    related: ['hazir-yazilim-mi-ozel-yazilim-mi', 'rezervasyon-randevu-sistemi-nasil-secilir', 'web-sitesi-teknik-seo-kontrol-listesi'],
    servicePath: '/hizmetler/ozel-yazilim/',
    serviceLabel: 'İşletmeye özel yazılım geliştirme hizmetini inceleyin',
    faq: [
      { question: 'CRM yazılımı işletmeye ne kazandırır?', answer: 'Müşteri adaylarının tüm temas geçmişini, teklif aşamalarını ve satış performansını tek merkezde toplayarak talep kaybını önler ve satışı hızlandırır.' },
      { question: 'Özel yönetim paneli ne zaman tercih edilmelidir?', answer: 'Hazır CRM araçları işletmenin benzersiz operasyonel kurallarını, çoklu şube/stok akışını veya iç veri güvenliği ihtiyaçlarını karşılayamadığında.' },
      { question: 'CRM seçiminde en sık yapılan hata nedir?', answer: 'Ekibin günlük alışkanlıklarına uymayan, kullanımı aşırı karmaşık sistemler seçerek personelin veri girişini bırakmasına yol açmaktır.' }
    ],
    sections: [
      {
        id: 'hazir-crm-vs-ozel-panel',
        label: 'Karar noktası',
        heading: 'Hazır SaaS CRM mi, işletmeye özel yönetim paneli mi?',
        paragraphs: [
          'Hazır CRM platformları (HubSpot, Zoho vb.) genel kullanım için tasarlanmıştır. Ancak üretim, lojistik, özel servis veya karmaşık teklif onay süreçleri olan işletmelerde hazır aracın esnemeyen sınırları ek manuel iş yükü doğurur.'
        ],
        table: {
          headers: ['Karşılaştırma Kriteri', 'Hazır SaaS CRM', 'Özel Geliştirilen Panel'],
          rows: [
            ['İş Sürecine Uyum', 'Şirket yazılımın kurallarına uymak zorundadır', 'Yazılım şirketin tam akışına göre kodlanır'],
            ['Maliyet Modeli', 'Kullanıcı başı aylık döviz lisans ücreti', 'Tek seferlik geliştirme + düşük barındırma maliyeti'],
            ['Veri Sahipliği &amp; Güvenlik', 'Üçüncü taraf bulutta, dış bağımlı', 'Tamamen işletmeye ait sunucuda ve veritabanında'],
            ['Entegrasyon Yeteneği', 'Yalnız hazır izin verilen servislerle kısıtlı', 'Mevcut yerel ERP/muhasebe ve API’lerle tam uyum'],
            ['Gereksiz Karmaşıklık', 'Kullanılmayan yüzlerce gereksiz menü', 'Yalnız ekibin ihtiyaç duyduğu temiz ve hızlı arayüz']
          ]
        }
      },
      {
        id: 'olmazsa-olmaz-moduller',
        label: 'Temel mimari',
        heading: 'Etkili bir yönetim panelinde bulunması gereken 5 çekirdek modül.',
        ordered: [
          '<strong>Rol ve İzin Matrisi (RBAC):</strong> Yönetici, satışçı, operasyon ve muhasebe gibi her rolün yalnızca görmesi gereken veriye erişebilmesi.',
          '<strong>Müşteri ve Talep Yaşam Döngüsü:</strong> İlk temastan teklife, siparişten faturaya kadar tüm adımların tek ekranda izlenmesi.',
          '<strong>Dinamik Filtreleme ve Hızlı Arama:</strong> Binlerce kayıt arasında milisaniyeler içinde sonuç veren akıllı arama motoru.',
          '<strong>Detaylı İşlem Geçmişi (Audit Logs):</strong> Hangi kullanıcının ne zaman hangi kaydı güncellediğini gösteren güvenlik logları.',
          '<strong>Bildirim ve Görev Hatırlatma:</strong> Geciken teklifler veya onay bekleyen işlemler için e-posta/SMS/panel içi uyarılar.'
        ]
      },
      {
        id: 'guvenlik-ve-kvkk',
        label: 'Veri güvenliği',
        heading: 'Veri güvenliği, KVKK uyumu ve yedekleme standartları.',
        paragraphs: [
          'İşletmenin müşteri listeleri, finansal rakamları ve ticari sırları en değerli varlığıdır. Özel yönetim panelinde veritabanı şifreleme (Encryption at Rest), HTTPS/TLS, iki adımlı doğrulama (2FA) ve otomatik günlük yedekleme protokolleri standart olmalıdır.'
        ],
        callout: 'Özel panel geliştirirken sıfırdan her şeyi tek seferde yapmak yerine, önce en çok zaman kaybettiren operasyonu çözen bir MVP (Minimum Uygulanabilir Ürün) ile başlayın.'
      }
    ],
    sources: [
      { label: 'OWASP — Top 10 Web Application Security Risks', url: 'https://owasp.org/www-project-top-ten/' },
      { label: 'KVKK — Kişisel Verileri Koruma Kurumu Rehberleri', url: 'https://www.kvkk.gov.tr/' }
    ]
  }
];

export default newBlogPosts;
