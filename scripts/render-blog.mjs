import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { blogPostBySlug, blogPosts } from '../content/blog-posts.mjs';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const encodeXml = (value) => escapeHtml(value).replaceAll('&#39;', '&apos;');

const cleanGeneratedOutput = (value) => `${String(value).replace(/[ \t]+$/gm, '').trim()}\n`;

const displayDate = (isoDate) => new Intl.DateTimeFormat('tr-TR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Istanbul'
}).format(new Date(isoDate));

const stripHtml = (value) => String(value)
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const sectionText = (section) => [
  section.heading,
  ...(section.paragraphs || []),
  ...(section.list || []),
  ...(section.ordered || []),
  ...(section.checklist || []),
  ...(section.table?.headers || []),
  ...(section.table?.rows.flat() || []),
  section.callout || ''
].join(' ');

const wordCount = (post) => stripHtml([
  post.title,
  post.answer,
  ...post.takeaways,
  ...post.sections.map(sectionText)
].join(' ')).split(' ').filter(Boolean).length;

const organizationNode = (siteOrigin) => ({
  '@type': 'Organization',
  '@id': `${siteOrigin}/#organization`,
  name: 'Narvals Labs',
  url: `${siteOrigin}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${siteOrigin}/assets/logo-v6/narvals-avatar-v6-1080.png`,
    width: 1080,
    height: 1080
  }
});

const websiteNode = (siteOrigin) => ({
  '@type': 'WebSite',
  '@id': `${siteOrigin}/#website`,
  url: `${siteOrigin}/`,
  name: 'Narvals Labs',
  inLanguage: 'tr-TR',
  publisher: { '@id': `${siteOrigin}/#organization` }
});

const renderHead = ({ siteOrigin, path, title, description, keywords, schema, type = 'website', published, modified }) => {
  const canonical = `${siteOrigin}${path}`;
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#03233a" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords.join(', '))}" />
    <meta name="author" content="Narvals Labs" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="tr" href="${canonical}" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="Narvals Labs Rehberleri" href="${siteOrigin}/blog/feed.xml" />
    <link rel="icon" href="/assets/logo-v6/narvals-favicon-v6-256.png" type="image/png" />
    <link rel="apple-touch-icon" href="/assets/logo-v6/narvals-avatar-v6-1080.png" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="Narvals Labs" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${siteOrigin}/og/narvals-labs-og.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Narvals Labs — Web, Yazılım ve Reklam" />
${published ? `    <meta property="article:published_time" content="${published}" />\n` : ''}${modified ? `    <meta property="article:modified_time" content="${modified}" />\n` : ''}    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${siteOrigin}/og/narvals-labs-og.jpg" />
    <meta name="twitter:image:alt" content="Narvals Labs — Web, Yazılım ve Reklam" />
    <title>${escapeHtml(title)}</title>
    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }, null, 2)}</script>`;
};

const renderNav = (current = '') => `<header class="info-nav">
      <a class="info-nav__brand" href="/"><img src="/assets/logo-v6/narvals-mascot-v6-transparent-96.png" alt="" width="96" height="96" /><span>narvals<i>//</i>labs</span></a>
      <nav class="info-nav__links" aria-label="Ana menü"><a href="/hizmetler/">Hizmetler</a><a href="/blog/"${current === 'blog' ? ' aria-current="page"' : ''}>Rehberler</a><a href="/hakkimizda/">Hakkımızda</a><a href="/iletisim/">Projeyi konuşalım</a></nav>
    </header>`;

const renderFooter = () => `<footer class="site-footer">
      <div class="site-footer__brand"><a href="/"><img src="/assets/logo-v6/narvals-mascot-v6-transparent-512.png" alt="" width="512" height="512" loading="lazy" /><strong>narvals<span>//</span>labs</strong></a><p>Web sitesi, özel yazılım ve reklamı aynı iş hedefinde buluşturan dijital üretim stüdyosu.</p></div>
      <nav aria-label="Hizmet bağlantıları"><strong>Hizmetler</strong><a href="/hizmetler/web-tasarim/">Web tasarım &amp; UX</a><a href="/hizmetler/e-ticaret/">E-ticaret</a><a href="/hizmetler/ozel-yazilim/">Özel yazılım</a><a href="/hizmetler/dijital-reklam/">Meta reklam</a><a href="/hizmetler/qr-menu-rezervasyon/">İşletme sistemleri</a></nav>
      <nav aria-label="Bilgi merkezi bağlantıları"><strong>Bilgi merkezi</strong><a href="/blog/">Tüm rehberler</a><a href="/blog/web-sitesi-teknik-seo-kontrol-listesi/">Teknik SEO listesi</a><a href="/blog/google-ai-aramalari-icin-geo-rehberi/">GEO rehberi</a><a href="/editoryal-ilkeler/">Editoryal ilkeler</a></nav>
      <div class="site-footer__contact"><strong>Bir proje mi var?</strong><p>Hedefi ve en kritik darboğazı anlatarak ilk görüşmeyi başlatın.</p><a href="/iletisim/">İletişim seçenekleri ↗</a></div>
      <p class="site-footer__legal">© <span data-current-year>2026</span> Narvals Labs. Tüm hakları saklıdır.</p>
    </footer>`;

const renderTable = (table) => `<section class="article-table-wrap" tabindex="0" aria-label="${escapeHtml(table.headers.join(', '))} tablosu">
          <table class="decision-table"><thead><tr>${table.headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join('')}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${cell}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table>
        </section>`;

const renderSection = (section) => `<section class="info-section article-section" id="${escapeHtml(section.id)}">
        <p class="info-section__label">${escapeHtml(section.label)}</p>
        <h2>${escapeHtml(section.heading)}</h2>
        ${(section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join('\n        ')}
        ${section.list ? `<ul class="article-list">${section.list.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
        ${section.ordered ? `<ol class="article-steps">${section.ordered.map((item) => `<li>${item}</li>`).join('')}</ol>` : ''}
        ${section.checklist ? `<ul class="article-checklist">${section.checklist.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
        ${section.table ? renderTable(section.table) : ''}
        ${section.callout ? `<aside class="article-callout" aria-label="${escapeHtml(section.heading)}: karar notu"><strong>Karar notu</strong><p>${section.callout}</p></aside>` : ''}
      </section>`;

const renderRelated = (post) => post.related
  .map((slug) => blogPostBySlug.get(slug))
  .map((related) => `<a href="/blog/${related.slug}/"><small>${escapeHtml(related.category)}</small><strong>${escapeHtml(related.title)}</strong><span aria-hidden="true">→</span></a>`)
  .join('');

const renderArticle = (post, siteOrigin) => {
  const path = `/blog/${post.slug}/`;
  const url = `${siteOrigin}${path}`;
  const schema = [
    organizationNode(siteOrigin),
    websiteNode(siteOrigin),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.metaTitle,
      description: post.description,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: post.about.map((name) => ({ '@type': 'Thing', name })),
      primaryImageOfPage: { '@type': 'ImageObject', url: `${siteOrigin}/og/narvals-labs-og.jpg`, width: 1200, height: 630 }
    },
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: post.title,
      description: post.description,
      image: [`${siteOrigin}/og/narvals-labs-og.jpg`],
      datePublished: post.published,
      dateModified: post.modified,
      inLanguage: 'tr-TR',
      isAccessibleForFree: true,
      wordCount: wordCount(post),
      articleSection: post.category,
      keywords: post.keywords.join(', '),
      author: { '@id': `${siteOrigin}/#organization` },
      publisher: { '@id': `${siteOrigin}/#organization` },
      about: post.about.map((name) => ({ '@type': 'Thing', name })),
      citation: post.sources.map((source) => source.url)
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
        { '@type': 'ListItem', position: 2, name: 'Rehberler', item: `${siteOrigin}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url }
      ]
    }
  ];

  return `<!doctype html>
<html lang="tr">
  <head>
${renderHead({ siteOrigin, path, title: post.metaTitle, description: post.description, keywords: post.keywords, schema, type: 'article', published: post.published, modified: post.modified })}
  </head>
  <body class="info-page article-page">
    <!-- Bu dosya content/blog-posts.mjs kaynağından otomatik üretilir. -->
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav('blog')}
    <main id="main-content">
      <article>
        <header class="info-hero article-hero">
          <div class="info-hero__copy">
            <nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><a href="/blog/">Rehberler</a><span>/</span><span>${escapeHtml(post.category)}</span></nav>
            <p class="info-hero__kicker">${escapeHtml(post.category)} · Karar rehberi</p>
            <h1>${escapeHtml(post.title)}</h1>
            <p class="info-hero__answer">${escapeHtml(post.answer)}</p>
            <div class="article-meta"><span>Yayınlayan <a href="/hakkimizda/">Narvals Labs</a></span><span>Yayımlandı <time datetime="${post.published}">${displayDate(post.published)}</time></span>${post.modified !== post.published ? `<span>Güncellendi <time datetime="${post.modified}">${displayDate(post.modified)}</time></span>` : ''}<span>${post.readingTime} dk okuma</span></div>
          </div>
          <aside class="info-hero__panel article-summary" aria-labelledby="ozet-basligi"><strong id="ozet-basligi">Bu rehberin özeti</strong><ul>${post.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></aside>
        </header>

        <div class="info-layout article-layout">
          <nav class="info-toc" aria-label="Makale içeriği"><strong>Bu rehberde</strong>${post.sections.map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.label)}</a>`).join('')}<a href="#kaynaklar">Kaynaklar</a></nav>
          <div class="info-content article-content">
            ${post.sections.map(renderSection).join('\n            ')}
            <section class="info-section article-section" id="kaynaklar">
              <p class="info-section__label">Birincil kaynaklar</p>
              <h2>Kaynaklar ve kapsam.</h2>
              <p>Bağlantılar içerikteki değişebilir veya dış doğrulama gerektiren bilgilerin kaynağıdır. Ticari ilişki veya sponsorlu bağlantı değildir.</p>
              <ol class="article-sources">${post.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('')}</ol>
              <aside class="article-method" aria-label="Bu rehberin hazırlanma yöntemi"><strong>Hazırlama yöntemi</strong><p>Bu rehber Narvals Labs yayıncılığında; ilgili birincil kaynaklar, görünür hizmet kapsamı ve proje karar çerçeveleri incelenerek hazırlandı. Doğrulanamayan müşteri, fiyat, başarı oranı veya sonuç iddiası eklenmedi. Yöntem, düzeltme ve yapay zekâ desteği açıklaması için <a href="/editoryal-ilkeler/">editoryal ilkeleri</a> okuyabilirsiniz.</p></aside>
            </section>
            <section class="info-section article-section">
              <p class="info-section__label">İlgili rehberler</p><h2>Bir sonraki kararı derinleştirin.</h2>
              <div class="article-related">${renderRelated(post)}</div>
            </section>
          </div>
        </div>
      </article>
      <section class="info-cta"><h2>Bu kararı projenize uyarlayalım.</h2><p>Mevcut durumu, hedefi ve en kritik sınırı paylaşın; gerekli kapsamı birlikte netleştirelim.</p><div class="article-cta-actions"><a class="info-button" href="${post.servicePath}">${escapeHtml(post.serviceLabel)} <span aria-hidden="true">→</span></a><a class="info-button info-button--light" href="/iletisim/">Projeyi konuşalım <span aria-hidden="true">↗</span></a></div></section>
    </main>
    ${renderFooter()}
    <script type="module" src="/src/info-main.js"></script>
  </body>
</html>
`;
};

const renderBlogIndex = (siteOrigin) => {
  const path = '/blog/';
  const url = `${siteOrigin}${path}`;
  const title = 'Web, Yazılım ve Reklam Rehberleri | Narvals Labs';
  const description = 'Web sitesi, e-ticaret, özel yazılım, Meta reklam, QR menü, rezervasyon, teknik SEO ve GEO kararları için kaynaklı uygulama rehberleri.';
  const schema = [
    organizationNode(siteOrigin),
    websiteNode(siteOrigin),
    {
      '@type': ['CollectionPage', 'Blog'],
      '@id': `${url}#blog`,
      url,
      name: title,
      description,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${siteOrigin}/#website` },
      publisher: { '@id': `${siteOrigin}/#organization` }
    },
    {
      '@type': 'ItemList',
      itemListElement: blogPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${siteOrigin}/blog/${post.slug}/`
      }))
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
        { '@type': 'ListItem', position: 2, name: 'Rehberler', item: url }
      ]
    }
  ];

  return `<!doctype html>
<html lang="tr">
  <head>
${renderHead({ siteOrigin, path, title, description, keywords: ['dijital rehberler', 'web tasarım rehberi', 'özel yazılım', 'Meta reklam', 'teknik SEO'], schema })}
  </head>
  <body class="info-page blog-page">
    <!-- Bu dosya content/blog-posts.mjs kaynağından otomatik üretilir. -->
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav('blog')}
    <main id="main-content">
      <section class="info-hero blog-hero">
        <div class="info-hero__copy"><nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><span>Rehberler</span></nav><p class="info-hero__kicker">Bilgi merkezi · Kaynaklı karar rehberleri</p><h1>Dijital projeler için karar rehberleri.</h1><p class="info-hero__answer">Yüzeysel trend yazıları yerine; web, yazılım, reklam ve işletme sistemleri için gerçek karar ölçütlerini, kontrol listelerini, sınırları ve birincil kaynakları bir araya getiriyoruz.</p></div>
        <aside class="info-hero__panel"><strong>Nasıl kullanılır?</strong><ul><li>Önce vermeniz gereken kararı seçin.</li><li>Tablo ve kontrol listesini mevcut durumunuza uygulayın.</li><li>Kaynaklardan değişebilir ayrıntıları doğrulayın.</li><li>Gerekli kapsamı ilgili hizmetle bağlayın.</li></ul></aside>
      </section>
      <section class="blog-hub" aria-labelledby="rehberler-basligi">
        <header class="blog-hub__header"><p class="info-section__label">Tüm rehberler</p><h2 id="rehberler-basligi">Hizmete göre değil, kararınıza göre başlayın.</h2><p>Her rehber tek bir arama ve iş niyetine sahiptir. Benzer sorgular için kopya sayfa üretmek yerine, bir konuyu karar vermeye yetecek derinlikte ele alır.</p></header>
        <div class="blog-grid">${blogPosts.map((post) => `<article class="blog-card"><div class="blog-card__meta"><span>${escapeHtml(post.category)}</span><span>${post.readingTime} dk</span></div><h3><a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.description)}</p><a class="blog-card__link" href="/blog/${post.slug}/" aria-label="${escapeHtml(post.title)} rehberini okuyun">Rehberi okuyun <span aria-hidden="true">→</span></a></article>`).join('')}</div>
      </section>
      <section class="editorial-strip"><div><p class="info-section__label">Yayın standardı</p><h2>Kaynak, sınır ve düzeltme yolu görünür.</h2></div><p>Doğrulanmayan fiyat, müşteri, performans veya başarı iddiası yayınlamıyoruz. İçeriklerin nasıl hazırlandığını ve güncellendiğini <a href="/editoryal-ilkeler/">editoryal ilkelerde</a> açıklıyoruz.</p></section>
      <section class="info-cta"><h2>Okumadan uygulamaya geçin.</h2><p>İhtiyacınızın hangi hizmete dönüştüğünden emin değilseniz mevcut akışı birlikte haritalayalım.</p><a class="info-button" href="/iletisim/">Projeyi konuşalım <span aria-hidden="true">↗</span></a></section>
    </main>
    ${renderFooter()}
    <script type="module" src="/src/info-main.js"></script>
  </body>
</html>
`;
};

const renderEditorialPolicy = (siteOrigin) => {
  const path = '/editoryal-ilkeler/';
  const url = `${siteOrigin}${path}`;
  const title = 'Editoryal İlkeler ve Kaynak Politikası | Narvals Labs';
  const description = 'Narvals Labs rehberlerinin kaynaklandırma, yapay zekâ desteği, güncelleme, düzeltme, çıkar çatışması ve doğrulanabilirlik ilkeleri.';
  const schema = [
    organizationNode(siteOrigin),
    websiteNode(siteOrigin),
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'tr-TR', isPartOf: { '@id': `${siteOrigin}/#website` }, about: { '@id': `${siteOrigin}/#organization` } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
      { '@type': 'ListItem', position: 2, name: 'Editoryal ilkeler', item: url }
    ] }
  ];

  return `<!doctype html>
<html lang="tr">
  <head>
${renderHead({ siteOrigin, path, title, description, keywords: ['editoryal ilkeler', 'kaynak politikası', 'içerik güncelleme', 'yapay zekâ şeffaflığı'], schema })}
  </head>
  <body class="info-page editorial-page">
    <!-- Bu dosya scripts/render-blog.mjs kaynağından otomatik üretilir. -->
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav()}
    <main id="main-content">
      <section class="info-hero editorial-hero"><div class="info-hero__copy"><nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><span>Editoryal ilkeler</span></nav><p class="info-hero__kicker">Güven · Kaynak · Düzeltme</p><h1>Editoryal ilkeler ve kaynak politikası.</h1><p class="info-hero__answer">Narvals Labs bilgi merkezinin neyi, neden ve nasıl yayınladığını; kaynak, yapay zekâ desteği, güncelleme ve düzeltme sorumluluğunu açıklarız.</p></div><aside class="info-hero__panel"><strong>Temel sözümüz</strong><ul><li>İnsan için yararlı karar bilgisi üretmek.</li><li>Değişebilir iddiayı birincil kaynağa bağlamak.</li><li>Uydurma kişi, müşteri, fiyat ve sonuç kullanmamak.</li><li>Hata bulunduğunda görünür biçimde düzeltmek.</li></ul></aside></section>
      <div class="info-layout"><nav class="info-toc" aria-label="Sayfa içeriği"><strong>Bu sayfada</strong><a href="#amac">Amaç ve kapsam</a><a href="#kaynak">Kaynaklar</a><a href="#yapay-zeka">Yapay zekâ</a><a href="#yazar">Yayın sorumluluğu</a><a href="#guncelleme">Güncelleme</a><a href="#duzeltme">Düzeltme</a></nav><div class="info-content article-content">
        <section class="info-section article-section" id="amac"><p class="info-section__label">Neden yayınlıyoruz?</p><h2>İçerik, arama trafiğinden önce gerçek bir kararı kolaylaştırmalıdır.</h2><p>Rehberlerimiz web sitesi, yazılım, reklam, QR menü ve rezervasyon projesi düşünen işletmelerin kapsamı anlamasına, seçenekleri karşılaştırmasına ve doğru soruları sormasına yardımcı olmak için hazırlanır. Yalnız arama varyasyonu yakalamak amacıyla şehir veya anahtar kelime değiştirilmiş kopya sayfalar yayınlamayız.</p><p>İçerik genel karar desteğidir. Hukuk, vergi, güvenlik veya platform politikası gibi uzman görüşü gerektiren alanlarda sınırı belirtir ve mümkün olduğunda yetkili birincil kaynağa yönlendirir.</p></section>
        <section class="info-section article-section" id="kaynak"><p class="info-section__label">Kanıt düzeni</p><h2>Önce birincil kaynağı, sonra uygulama yorumunu ayırırız.</h2><p>Arama motoru, reklam platformu, standart veya mevzuat hakkında değişebilir bir iddia kullandığımızda resmî doküman, kurum yayını veya standardı tercih ederiz. Kaynağın söylediği ile Narvals Labs’ın o bilgiden çıkardığı uygulama kararını birbirine karıştırmayız.</p><ul class="article-list"><li>Kaynak bağlantısı ilgili rehberin sonunda ve gerektiğinde iddianın yakınında bulunur.</li><li>Sponsorlu veya ticari ilişkili bağlantı oluşursa açıkça etiketlenir.</li><li>Üçüncü taraf araştırmasının korelasyonunu kesin neden gibi sunmayız.</li><li>Erişilemeyen veya eskiyen kaynak, içerik güncellemesinde değiştirilir ya da sınırı açıklanır.</li></ul></section>
        <section class="info-section article-section" id="yapay-zeka"><p class="info-section__label">Üretim şeffaflığı</p><h2>Yapay zekâ araştırma ve taslak desteği sağlayabilir; yayın sorumluluğunu devralmaz.</h2><p>Kaynak tarama, konu haritası, taslak üretimi, dil kontrolü ve teknik sayfa oluşturma aşamalarında yapay zekâ araçları kullanılabilir. Bu kullanım; gerçek deneyim, müşteri kanıtı veya uzman kimliği uydurmak için gerekçe değildir. Yayımlanan içerikte doğrulanamayan başarı oranı, fiyat, vaka veya biyografi oluşturmayız.</p><p>Yapay zekâ çıktısı kaynak sayılmaz. Değişebilir iddialar erişilebilir birincil kaynakla kontrol edilir; karar tabloları ve kontrol listeleri Narvals Labs’ın sunduğu hizmet kapsamıyla sınırlı tutulur. Her içerik yayına alınmadan önce marka sorumlusu tarafından doğrulanmalıdır.</p></section>
        <section class="info-section article-section" id="yazar"><p class="info-section__label">Kim yayınlıyor?</p><h2>Gerçek kişi bilgisi yoksa hayalî uzman profili açmayız.</h2><p>Mevcut rehberlerin yayıncısı Narvals Labs’tır. Gerçek yazar, teknik inceleyen veya hukuk incelemesi bilgisi doğrulanıp yayın izni alındığında ad, rol ve profil bağlantısı içeriğe eklenir. O zamana kadar kişi şeması, sahte biyografi veya belirsiz “uzman ekibimiz” iddiası kullanmayız.</p><p>Müşteri vakaları ancak yayın izni, başlangıç durumu, yöntem, ölçüm tanımı, dönem ve sınırlamalar doğrulandığında oluşturulur.</p></section>
        <section class="info-section article-section" id="guncelleme"><p class="info-section__label">Tarih politikası</p><h2>Tarihi yalnız içerik gerçekten değiştiğinde güncelleriz.</h2><p>Her rehber yayın tarihini taşır. Kaynak, karar çerçevesi veya kullanıcı sonucunu anlamlı biçimde değiştiren düzenlemede güncelleme tarihi yenilenir. Yazım düzeltmesi veya sırf taze görünme amacıyla tarih değiştirilmez. Hızla değişen platform ve mevzuat sayfaları periyodik olarak kaynak düzeyinde kontrol edilir.</p></section>
        <section class="info-section article-section" id="duzeltme"><p class="info-section__label">Hata ve geri bildirim</p><h2>Düzeltme talebinin görünür bir yolu vardır.</h2><p>Bir içerikte olgusal hata, bozuk kaynak, belirsiz çıkar çatışması veya güncelliğini yitirmiş bilgi görürseniz <a href="/iletisim/">iletişim sayfasından</a> ilgili URL ile bildirebilirsiniz. Bildirim doğrulandığında içerik düzeltilir; karar sonucunu anlamlı biçimde etkileyen değişiklikte güncelleme tarihi yenilenir.</p><p>Hiçbir rehber Google sırası, AI citation’ı, reklam sonucu, yazılım verimliliği veya ticari performans garantisi vermez.</p></section>
      </div></div>
      <section class="info-cta"><h2>Rehberleri inceleyin.</h2><p>Karar tabloları, kontrol listeleri ve birincil kaynaklarla mevcut projenizi netleştirin.</p><a class="info-button" href="/blog/">Tüm rehberler <span aria-hidden="true">→</span></a></section>
    </main>
    ${renderFooter()}
    <script type="module" src="/src/info-main.js"></script>
  </body>
</html>
`;
};

const renderFeed = (siteOrigin) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Narvals Labs Rehberleri</title>
    <link>${encodeXml(`${siteOrigin}/blog/`)}</link>
    <description>Web, yazılım, reklam ve işletme sistemleri için kaynaklı karar rehberleri.</description>
    <language>tr-TR</language>
    <lastBuildDate>${new Date(Math.max(...blogPosts.map((post) => new Date(post.modified).getTime()))).toUTCString()}</lastBuildDate>
    <atom:link href="${encodeXml(`${siteOrigin}/blog/feed.xml`)}" rel="self" type="application/rss+xml" />
${blogPosts.map((post) => `    <item>
      <title>${encodeXml(post.title)}</title>
      <link>${encodeXml(`${siteOrigin}/blog/${post.slug}/`)}</link>
      <guid isPermaLink="true">${encodeXml(`${siteOrigin}/blog/${post.slug}/`)}</guid>
      <pubDate>${new Date(post.published).toUTCString()}</pubDate>
      <category>${encodeXml(post.category)}</category>
      <description>${encodeXml(post.description)}</description>
    </item>`).join('\n')}
  </channel>
</rss>
`;

export async function renderBlog({ projectRoot, publicRoot, siteOrigin }) {
  const blogRoot = join(projectRoot, 'blog');
  await mkdir(blogRoot, { recursive: true });
  await writeFile(join(blogRoot, 'index.html'), cleanGeneratedOutput(renderBlogIndex(siteOrigin)));

  await Promise.all(blogPosts.map(async (post) => {
    const destination = join(blogRoot, post.slug);
    await mkdir(destination, { recursive: true });
    await writeFile(join(destination, 'index.html'), cleanGeneratedOutput(renderArticle(post, siteOrigin)));
  }));

  const editorialRoot = join(projectRoot, 'editoryal-ilkeler');
  await mkdir(editorialRoot, { recursive: true });
  await writeFile(join(editorialRoot, 'index.html'), cleanGeneratedOutput(renderEditorialPolicy(siteOrigin)));

  const publicBlogRoot = join(publicRoot, 'blog');
  await mkdir(publicBlogRoot, { recursive: true });
  await writeFile(join(publicBlogRoot, 'feed.xml'), cleanGeneratedOutput(renderFeed(siteOrigin)));

  console.log(`Rendered blog hub, ${blogPosts.length} guides, editorial policy and RSS feed.`);
}
