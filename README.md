# Narvals Labs — narvals.com

Okyanus tabanlı “dijital tamirhane” görsel dilinde hazırlanan tek sayfalık Vite sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Vite varsayılan olarak `http://localhost:5173` adresini açar.

## Üretim derlemesi

```bash
SITE_URL=https://narvals.com npm run build:production
npm run preview
```

`build:production`, Vite'ın standart `.env`, `.env.local`, `.env.production`
ve `.env.production.local` zincirinden ya da CI ortamından açıkça tanımlanmış
gerçek bir `SITE_URL` olmadan durur. Ortam değişkeni dosya değerlerinin önüne
geçer. Bu yalnız açık origin/HTTPS biçimi korumasıdır; DNS ve deploy gerçekten
çalışıyor mu sorusunun yayın kapısı `npm run seo:check-live` komutudur. Yerel
deneme için `npm run build` kullanılabilir.

Deploy sonrasında DNS, 79 canlı URL, canonical, HTTP durumları, meta/header
`noindex`, robots tam engeli, sitemap, RSS, IndexNow anahtarı, slash ve
`index.html` yönlendirmeleri ile gerçek 404 davranışını denetleyin:

```bash
SITE_URL=https://narvals.com npm run seo:check-live
```

## SEO / GEO yapılandırması

Üretim alan adını build sırasında tanımlayın:

```bash
SITE_URL=https://narvals.com npm run build:production
```

Alternatif olarak `.env.example` dosyasını `.env` adıyla kopyalayıp gerçek
`SITE_URL` değerini yazabilirsiniz; `.env` Git’e eklenmez.

Build; 79 canonical sayfayı, 40 kaynaklı rehberi, blog RSS akışını ve keşif
dosyalarını (`robots.txt`, URL bazlı `sitemap.xml`, deneysel `llms.txt`) üretir.
Tüm indexlenebilir sayfalarda title, description, canonical, tek H1, JSON-LD,
iç bağlantılar ve sosyal önizleme direktiflerini doğrular.

18 interaktif aracın 14 form tabanlı işlevi declarative WebMCP açıklamalarına,
form dışı dört işlevi ise özellik algılamalı ve salt-okunur Imperative WebMCP
araçlarına sahiptir. Bu deneysel katman desteklenmeyen tarayıcılarda normal
arayüzü etkilemez ve bir arama sıralaması garantisi değildir.

Üretim çıktısı yalnız kullanılan runtime varlıklarını içerir; büyük master,
source ve eski tasarım export’ları `public/` içinde korunur ancak `dist/`
paketine kopyalanmaz. Ayrıntılı operasyon adımları `SEO-OPERATIONS.md`, resmî ve
üçüncü taraf araştırma özeti `SEO-RESEARCH.md` dosyasındadır.

`https://narvals.com` production canonical alan adıdır. Derleme ve canlı SEO
kontrolü sırasında aynı adres `SITE_URL` olarak açıkça tanımlanmalıdır.
Doğrulanmış WhatsApp/telefon,
kurumsal e-posta, adres ve sosyal profiller henüz proje girdilerinde olmadığı
için şemaya veya sayfalara uydurma bilgi eklenmemiştir. Bu bilgiler geldiğinde
`/iletisim/`, footer ve `Organization` verisi birlikte güncellenmelidir.
