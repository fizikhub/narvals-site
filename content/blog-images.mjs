const images = {
  'seo-geo': {
    path: '/og/topics/seo-geo-rehberleri-v1.jpg',
    width: 1200,
    height: 675,
    alt: 'Bir narvalın arama görünürlüğü, bağlantılar ve yapay zekâ kaynak yollarını incelediği illüstrasyon'
  },
  'web-sitesi': {
    path: '/og/topics/web-tasarim-ux-rehberleri-v1.jpg',
    width: 1200,
    height: 675,
    alt: 'Bir narvalın masaüstü ve mobil web arayüzlerini erişilebilirlik ölçütleriyle tasarladığı illüstrasyon'
  },
  reklam: {
    path: '/og/topics/dijital-reklam-rehberleri-v1.jpg',
    width: 1200,
    height: 675,
    alt: 'Bir narvalın reklam sinyallerini, hedef kitle yollarını ve dönüşüm ölçümünü yönettiği illüstrasyon'
  },
  'e-ticaret': {
    path: '/og/topics/e-ticaret-rehberleri-v1.jpg',
    width: 1200,
    height: 675,
    alt: 'Bir narvalın ürün, sepet, güvenli ödeme ve teslimat adımlarını bağladığı e-ticaret illüstrasyonu'
  },
  'qr-menu': {
    path: '/og/topics/qr-menu-rezervasyon-rehberleri-v1.jpg',
    width: 1200,
    height: 675,
    alt: 'Bir narvalın restoran menüsü, mobil tarama ve rezervasyon akışını düzenlediği illüstrasyon'
  }
};

const categoryImageKey = {
  'SEO & GEO': 'seo-geo',
  'SEO & Performans': 'seo-geo',
  'Teknik SEO': 'seo-geo',
  'Web & UX': 'web-sitesi',
  'Web sitesi': 'web-sitesi',
  'Özel yazılım': 'web-sitesi',
  'Google Ads': 'reklam',
  'Meta reklam': 'reklam',
  'Dijital reklam': 'reklam',
  'Sosyal medya': 'reklam',
  'Ölçüm & Analitik': 'reklam',
  'E-ticaret': 'e-ticaret',
  'E-Ticaret': 'e-ticaret',
  'QR menü': 'qr-menu',
  Rezervasyon: 'qr-menu'
};

export const blogTopicImages = Object.freeze(images);

export const getBlogImage = (post) => {
  const key = categoryImageKey[post.category];
  if (!key || !images[key]) throw new Error(`No blog image mapping for category: ${post.category}`);
  return images[key];
};

export const getTopicHubImage = (hub) => {
  const image = images[hub.slug];
  if (!image) throw new Error(`No topic image mapping for hub: ${hub.slug}`);
  return image;
};
