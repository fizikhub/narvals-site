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
    related: ['meta-reklam-butcesi-nasil-belirlenir', 'meta-pixel-ve-conversions-api-farki', 'sosyal-medya-yonetimi-neleri-kapsar'],
    servicePath: '/hizmetler/dijital-reklam/',
    serviceLabel: 'Meta reklam yönetimi yaklaşımımızı inceleyin',
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
  }
];

export default newBlogPosts;
