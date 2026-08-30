import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { blogPostBySlug, blogPosts } from '../content/blog-posts.mjs';
import { topicHubs } from '../content/topic-hubs.mjs';

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
  ...post.sections.map(sectionText),
  ...(post.faq || []).flatMap((item) => [item.question, item.answer])
].join(' ')).split(' ').filter(Boolean).length;

const renderHead = ({ siteOrigin, path, title, description, keywords, schema, type = 'website', published, modified, category, readingTime }) => {
  const canonical = `${siteOrigin}${path}`;
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#03233a" />
    <meta name="color-scheme" content="light" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />
    <meta name="msapplication-TileColor" content="#03233a" />
    <meta name="msapplication-config" content="/browserconfig.xml" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(keywords.join(', '))}" />
    <meta name="author" content="Narvals Labs" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="tr" href="${canonical}" />
    <link rel="alternate" hreflang="tr-TR" href="${canonical}" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="Narvals Labs Rehberleri" href="${siteOrigin}/blog/feed.xml" />
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" href="/assets/logo-v6/narvals-favicon-48.png" type="image/png" sizes="48x48" />
    <link rel="icon" href="/assets/logo-v6/narvals-favicon-96.png" type="image/png" sizes="96x96" />
    <link rel="icon" href="/assets/logo-v6/narvals-favicon-192.png" type="image/png" sizes="192x192" />
    <link rel="icon" href="/assets/logo-v6/narvals-favicon-v6-256.png" type="image/png" sizes="256x256" />
    <link rel="apple-touch-icon" href="/assets/logo-v6/narvals-avatar-v6-1080.png" />
    <link rel="manifest" href="/site.webmanifest" />
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
${published ? `    <meta property="article:published_time" content="${published}" />\n` : ''}${modified ? `    <meta property="article:modified_time" content="${modified}" />\n` : ''}${category ? `    <meta property="article:section" content="${escapeHtml(category)}" />\n` : ''}${type === 'article' ? `    <meta property="article:author" content="${siteOrigin}/hakkimizda/" />\n    <meta property="article:publisher" content="${siteOrigin}/" />\n` : ''}${type === 'article' && Array.isArray(keywords) ? keywords.map((kw) => `    <meta property="article:tag" content="${escapeHtml(kw)}" />`).join('\n') + '\n' : ''}    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${siteOrigin}/og/narvals-labs-og.jpg" />
    <meta name="twitter:image:alt" content="Narvals Labs — Web, Yazılım ve Reklam" />
${readingTime ? `    <meta name="twitter:label1" content="Okuma Süresi" />\n    <meta name="twitter:data1" content="${readingTime} dk" />\n` : ''}${category ? `    <meta name="twitter:label2" content="Kategori" />\n    <meta name="twitter:data2" content="${escapeHtml(category)}" />\n` : ''}    <title>${escapeHtml(title)}</title>
    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }, null, 2)}</script>`;
};

const renderNav = (current = '') => `<header class="info-nav">
      <a class="info-nav__brand" href="/"><img src="/assets/logo-v6/narvals-mascot-v6-transparent-96.png" alt="" width="96" height="96" /><span>narvals<i>//</i>labs</span></a>
      <nav class="info-nav__links" aria-label="Ana menü"><a href="/hizmetler/">Hizmetler</a><a href="/blog/"${current === 'blog' ? ' aria-current="page"' : ''}>Rehberler</a><a href="/hakkimizda/">Hakkımızda</a><a href="/iletisim/">Projeyi konuşalım</a></nav>
    </header>`;

const renderFooter = () => `<footer class="site-footer">
      <div class="site-footer__brand"><a href="/"><img src="/assets/logo-v6/narvals-mascot-v6-transparent-96.png" alt="" width="96" height="96" loading="lazy" /><strong>narvals<span>//</span>labs</strong></a><p>Web sitesi, özel yazılım ve reklamı aynı iş hedefinde buluşturan dijital üretim stüdyosu.</p></div>
      <nav aria-label="Hizmet bağlantıları"><strong>Hizmetler</strong><a href="/hizmetler/web-tasarim/">Web sitesi yaptırma</a><a href="/hizmetler/e-ticaret/">E-ticaret</a><a href="/hizmetler/ozel-yazilim/">Özel yazılım</a><a href="/hizmetler/google-ads/">Google Ads</a><a href="/hizmetler/dijital-reklam/">Meta reklam</a><a href="/hizmetler/sosyal-medya-yonetimi/">Sosyal medya</a><a href="/hizmetler/qr-menu/">QR menü yaptırma</a><a href="/hizmetler/qr-menu-rezervasyon/">Sistem karşılaştırması</a></nav>
      <nav aria-label="Bilgi merkezi bağlantıları"><strong>Bilgi merkezi</strong><a href="/blog/">Tüm rehberler</a><a href="/araclar/">Ücretsiz araçlar</a><a href="/araclar/web-sitesi-kontrolu/">Site kontrolü</a><a href="/blog/konu/seo-geo/">SEO &amp; GEO rehberleri</a><a href="/blog/konu/e-ticaret/">E-ticaret rehberleri</a><a href="/blog/konu/web-sitesi/">Web sitesi rehberleri</a><a href="/blog/konu/reklam/">Reklam rehberleri</a><a href="/blog/konu/qr-menu/">QR menü rehberleri</a><a href="/editoryal-ilkeler/">Editoryal ilkeler</a></nav>
      <div class="site-footer__contact"><strong>Bir proje mi var?</strong><p>Hedefi ve en kritik darboğazı anlatarak ilk görüşmeyi başlatın.</p><a href="mailto:info@narvals.com">info@narvals.com</a><a href="https://wa.me/905019441921" rel="noopener noreferrer">WhatsApp: +90 501 944 19 21 ↗</a></div>
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

const ENTITY_WIKIDATA_MAP = {
  'E-ticaret': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'E-Ticaret': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'E-ticaret sitesi': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'E-ticaret sitesi maliyeti': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'E-ticaret altyapısı': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'E-ticaret kapsamı': 'https://tr.wikipedia.org/wiki/Elektronik_ticaret',
  'Google Ads': 'https://tr.wikipedia.org/wiki/Google_Ads',
  'Google Ads ajansı': 'https://tr.wikipedia.org/wiki/Google_Ads',
  'Google Ads bütçesi': 'https://tr.wikipedia.org/wiki/Google_Ads',
  'Arama reklamları': 'https://tr.wikipedia.org/wiki/Google_Ads',
  'Meta reklamları': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Meta reklam': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Meta reklam ajansı': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Meta reklam bütçesi': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Dijital reklam': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Dijital reklam kanalı seçimi': 'https://tr.wikipedia.org/wiki/Dijital_pazarlama',
  'Teknik SEO': 'https://tr.wikipedia.org/wiki/Arama_motoru_optimizasyonu',
  'SEO': 'https://tr.wikipedia.org/wiki/Arama_motoru_optimizasyonu',
  'Arama motoru optimizasyonu': 'https://tr.wikipedia.org/wiki/Arama_motoru_optimizasyonu',
  'Web tasarımı': 'https://tr.wikipedia.org/wiki/Web_tasar%C4%B1m%C4%B1',
  'Web tasarım': 'https://tr.wikipedia.org/wiki/Web_tasar%C4%B1m%C4%B1',
  'Kurumsal web sitesi': 'https://tr.wikipedia.org/wiki/Web_tasar%C4%B1m%C4%B1',
  'Web sitesi maliyeti': 'https://tr.wikipedia.org/wiki/Web_tasar%C4%B1m%C4%B1',
  'Web sitesi süresi': 'https://tr.wikipedia.org/wiki/Web_tasar%C4%B1m%C4%B1',
  'Web performansı': 'https://en.wikipedia.org/wiki/Core_Web_Vitals',
  'Core Web Vitals': 'https://en.wikipedia.org/wiki/Core_Web_Vitals',
  'Site hızı': 'https://en.wikipedia.org/wiki/Core_Web_Vitals',
  'LCP optimizasyonu': 'https://en.wikipedia.org/wiki/Core_Web_Vitals',
  'Özel yazılım': 'https://tr.wikipedia.org/wiki/Yaz%C4%B1l%C4%B1m',
  'Özel CRM': 'https://tr.wikipedia.org/wiki/M%C3%BC%C5%9Fteri_ili%C5%9Fkileri_y%C3%B6netimi',
  'CRM': 'https://tr.wikipedia.org/wiki/M%C3%BC%C5%9Fteri_ili%C5%9Fkileri_y%C3%B6netimi',
  'QR menü': 'https://tr.wikipedia.org/wiki/QR_kodu',
  'QR Menü': 'https://tr.wikipedia.org/wiki/QR_kodu',
  'QR kod': 'https://tr.wikipedia.org/wiki/QR_kodu',
  'Kullanıcı deneyimi': 'https://tr.wikipedia.org/wiki/Kullan%C4%B1c%C4%B1_deneyimi',
  'Kurumsal UX': 'https://tr.wikipedia.org/wiki/Kullan%C4%B1c%C4%B1_deneyimi',
  'Dönüşüm oranı optimizasyonu': 'https://en.wikipedia.org/wiki/Conversion_rate_optimization',
  'Dönüşüm ölçümü': 'https://en.wikipedia.org/wiki/Conversion_rate_optimization',
  'E-ticaret CRO': 'https://en.wikipedia.org/wiki/Conversion_rate_optimization',
  'Lead generation': 'https://en.wikipedia.org/wiki/Lead_generation',
  'Sosyal medya yönetimi': 'https://tr.wikipedia.org/wiki/Sosyal_medya',
  'Topluluk yönetimi': 'https://tr.wikipedia.org/wiki/Sosyal_medya',
  'B2B web sitesi': 'https://tr.wikipedia.org/wiki/B2B',
  'B2B': 'https://tr.wikipedia.org/wiki/B2B',
  'Generative Engine Optimization (GEO)': 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
  'Generative Engine Optimization': 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
  'GEO': 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
  'Google AI Overviews': 'https://en.wikipedia.org/wiki/Google_Search',
  'AI Overviews': 'https://en.wikipedia.org/wiki/Google_Search',
  'AI arama görünürlüğü': 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence',
  'Information Gain': 'https://en.wikipedia.org/wiki/Information_gain_in_decision_trees',
  'Bilgi Kazanımı': 'https://en.wikipedia.org/wiki/Information_gain_in_decision_trees',
  'Knowledge Graph': 'https://en.wikipedia.org/wiki/Google_Knowledge_Graph',
  'Google Knowledge Graph': 'https://en.wikipedia.org/wiki/Google_Knowledge_Graph',
  'Schema.org': 'https://en.wikipedia.org/wiki/Schema.org',
  'Yapılandırılmış Veri': 'https://en.wikipedia.org/wiki/Schema.org',
  'E-E-A-T': 'https://en.wikipedia.org/wiki/Google_Search',
  'Arama Niyeti': 'https://en.wikipedia.org/wiki/Search_intent',
  'Search Intent': 'https://en.wikipedia.org/wiki/Search_intent',
  'Mobil Öncelikli İndeksleme': 'https://en.wikipedia.org/wiki/Mobile-first_design',
  'Meta Pixel': 'https://en.wikipedia.org/wiki/Facebook_Platform',
  'Conversions API': 'https://en.wikipedia.org/wiki/Facebook_Platform',
  'UTM parametreleri': 'https://en.wikipedia.org/wiki/UTM_parameters',
  'ROAS': 'https://en.wikipedia.org/wiki/Return_on_ad_spend',
  'Google Analytics': 'https://tr.wikipedia.org/wiki/Google_Analytics',
  'GA4': 'https://tr.wikipedia.org/wiki/Google_Analytics',
  'Online rezervasyon': 'https://en.wikipedia.org/wiki/Computer_reservations_system',
  'Açılış sayfası': 'https://en.wikipedia.org/wiki/Landing_page',
  'Web erişilebilirliği': 'https://tr.wikipedia.org/wiki/Web_eri%C5%9Filebilirli%C4%9Fi',
  'Responsive tasarım': 'https://tr.wikipedia.org/wiki/Duyarl%C4%B1_web_tasar%C4%B1m%C4%B1',
  'SaaS': 'https://tr.wikipedia.org/wiki/Hizmet_olarak_yaz%C4%B1l%C4%B1m',
  'API entegrasyonu': 'https://tr.wikipedia.org/wiki/Uygulama_programlama_aray%C3%BCz%C3%BC',
  'Headless CMS': 'https://en.wikipedia.org/wiki/Headless_content_management_system',
  'Statik Web Sitesi': 'https://en.wikipedia.org/wiki/Static_web_page',
  'Web Güvenliği': 'https://tr.wikipedia.org/wiki/Web_g%C3%BCvenli%C4%9Fi',
  'Googlebot': 'https://en.wikipedia.org/wiki/Googlebot',
  'Dense Passage Retrieval': 'https://en.wikipedia.org/wiki/Dense_passage_retrieval',
  'DPR': 'https://en.wikipedia.org/wiki/Dense_passage_retrieval',
  'GraphRAG': 'https://en.wikipedia.org/wiki/Knowledge_graph',
  'RAG': 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation',
  'Retrieval-Augmented Generation': 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation',
  'IndexNow': 'https://en.wikipedia.org/wiki/IndexNow',
  'SearchGPT': 'https://en.wikipedia.org/wiki/ChatGPT',
  'Perplexity AI': 'https://en.wikipedia.org/wiki/Perplexity_AI',
  'ChatGPT Search': 'https://en.wikipedia.org/wiki/ChatGPT',
  'Claude': 'https://en.wikipedia.org/wiki/Claude_(language_model)',
  'Gemini': 'https://en.wikipedia.org/wiki/Gemini_(chatbot)',
  'Apple Intelligence': 'https://en.wikipedia.org/wiki/Apple_Intelligence'
};

const resolveEntity = (name) => {
  const sameAs = ENTITY_WIKIDATA_MAP[name];
  return sameAs
    ? { '@type': 'Thing', name, sameAs }
    : { '@type': 'Thing', name };
};

const CATEGORY_HUB_MAP = {
  'E-ticaret': { name: 'E-ticaret rehberleri', path: '/blog/konu/e-ticaret/' },
  'E-Ticaret': { name: 'E-ticaret rehberleri', path: '/blog/konu/e-ticaret/' },
  'Web sitesi': { name: 'Web sitesi rehberleri', path: '/blog/konu/web-sitesi/' },
  'Web & UX': { name: 'Web sitesi rehberleri', path: '/blog/konu/web-sitesi/' },
  'Teknik SEO': { name: 'SEO ve GEO rehberleri', path: '/blog/konu/seo-geo/' },
  'SEO & Performans': { name: 'SEO ve GEO rehberleri', path: '/blog/konu/seo-geo/' },
  'SEO & GEO': { name: 'SEO ve GEO rehberleri', path: '/blog/konu/seo-geo/' },
  'Özel yazılım': { name: 'Web sitesi rehberleri', path: '/blog/konu/web-sitesi/' },
  'Google Ads': { name: 'Dijital reklam rehberleri', path: '/blog/konu/reklam/' },
  'Dijital reklam': { name: 'Dijital reklam rehberleri', path: '/blog/konu/reklam/' },
  'Sosyal medya': { name: 'Dijital reklam rehberleri', path: '/blog/konu/reklam/' },
  'QR menü': { name: 'QR menü rehberleri', path: '/blog/konu/qr-menu/' }
};

const POST_TOOL_MAP = {
  'crawl-budget-ve-googlebot-tarama-verimliligi': {
    path: '/araclar/tarama-butcesi-hesaplama/',
    label: 'Tarama Bütçesi ve Bot Taranabilirlik Aracı'
  },
  'ga4-ve-server-side-gtm-kurulum-rehberi': {
    path: '/araclar/utm-link-olusturucu/',
    label: 'GA4 & Meta Kampanya Takip Linki Oluşturucu'
  },
  'schema-org-ve-baglantili-jsonld-graflari': {
    path: '/araclar/schema-olusturucu/',
    label: 'Schema Markup & JSON-LD Varlık Oluşturucu'
  },
  'e-e-a-t-yazar-otoritesi-ve-google-guven-rehberi': {
    path: '/araclar/bilgi-kazanimi-kontrolu/',
    label: 'E-E-A-T ve Bilgi Kazanımı Denetim Aracı'
  },
  'google-ve-ai-botlari-icin-site-indeksleme-rehberi': {
    path: '/araclar/core-web-vitals-kontrolu/',
    label: 'Core Web Vitals ve Bot Hızı Teşhis Aracı'
  },
  'e-ticaret-sitesi-maliyeti-nasil-hesaplanir': {
    path: '/araclar/e-ticaret-kar-hesaplama/',
    label: 'E-Ticaret Net Kâr ve Başabaş Fiyat Hesaplayıcı'
  },
  'e-ticaret-donusum-orani-artirma-cro-rehberi': {
    path: '/araclar/donusum-orani-hesaplama/',
    label: 'Web Sitesi Dönüşüm Oranı ve Gelir Simülasyonu'
  },
  'web-sitesi-donusum-orani-nasil-hesaplanir': {
    path: '/araclar/donusum-orani-hesaplama/',
    label: 'Web Sitesi Dönüşüm Oranı Hesaplama Aracı'
  },
  'google-ads-butcesi-nasil-belirlenir': {
    path: '/araclar/google-ads-butce-hesaplama/',
    label: 'Google Ads Bütçe ve TBM Hesaplama Aracı'
  },
  'meta-reklam-butcesi-nasil-belirlenir': {
    path: '/araclar/meta-reklam-butcesi-hesaplama/',
    label: 'Meta ve Instagram Reklam Bütçesi Hesaplayıcı'
  },
  'web-sitesi-hizlandirma-core-web-vitals-rehberi': {
    path: '/araclar/core-web-vitals-kontrolu/',
    label: 'Core Web Vitals ve Sayfa Hızı Teşhis Aracı'
  },
  'qr-menu-nasil-yapilir': {
    path: '/araclar/qr-kod-olusturucu/',
    label: 'Ücretsiz Süresiz Vektörel QR Kod Oluşturucu'
  },
  'qr-menu-fiyatlari-ve-maliyet-kalemleri': {
    path: '/araclar/qr-kod-olusturucu/',
    label: 'Ücretsiz Süresiz Vektörel QR Kod Oluşturucu'
  },
  'web-sitesi-yaptirmadan-once-kapsam-teklif-karar-rehberi': {
    path: '/araclar/teklif-karsilastirma/',
    label: 'Web Sitesi Teklif Karşılaştırma Tablosu'
  },
  'web-tasarim-ajansi-secerken-sorulacak-sorular': {
    path: '/araclar/teklif-karsilastirma/',
    label: 'Web Sitesi Teklif Karşılaştırma Tablosu'
  },
  'web-sitesi-teknik-seo-kontrol-listesi': {
    path: '/araclar/web-sitesi-kontrolu/',
    label: '16 Soruda Ücretsiz Web Sitesi Sağlık Kontrolü'
  },
  'web-sitesi-neden-musteri-getirmiyor': {
    path: '/araclar/web-sitesi-kontrolu/',
    label: '16 Soruda Ücretsiz Web Sitesi Sağlık Kontrolü'
  },
  'web-sitesi-googleda-neden-cikmiyor': {
    path: '/araclar/web-sitesi-kontrolu/',
    label: '16 Soruda Ücretsiz Web Sitesi Sağlık Kontrolü'
  },
  'meta-pixel-ve-conversions-api-farki': {
    path: '/araclar/utm-link-olusturucu/',
    label: 'GA4 & Meta Kampanya Takip Linki Oluşturucu'
  },
  'google-ads-mi-meta-reklamlari-mi': {
    path: '/araclar/roas-hesaplama/',
    label: 'ROAS ve Reklam Başabaş Kârlılık Hesaplayıcı'
  },
  'meta-reklam-ajansi-secerken-sorulacak-sorular': {
    path: '/araclar/roas-hesaplama/',
    label: 'ROAS ve Reklam Başabaş Kârlılık Hesaplayıcı'
  },
  'web-sitesi-bakim-ucreti-ve-yillik-maliyet': {
    path: '/araclar/saatlik-ucret-hesaplama/',
    label: 'Freelance & Ajans Saatlik Ücret Simülatörü'
  },
  'google-ai-aramalari-icin-geo-rehberi': {
    path: '/araclar/meta-etiket-onizleyici/',
    label: 'SERP Önizleyici ve Meta Etiketi Test Aracı'
  }
};

const renderRelated = (post) => post.related
  .map((slug) => blogPostBySlug.get(slug))
  .map((related) => `<a href="/blog/${related.slug}/"><small>${escapeHtml(related.category)}</small><strong>${escapeHtml(related.title)}</strong><span aria-hidden="true">→</span></a>`)
  .join('');

const renderArticle = (post, siteOrigin) => {
  const path = `/blog/${post.slug}/`;
  const url = `${siteOrigin}${path}`;
  const hubInfo = CATEGORY_HUB_MAP[post.category];
  const toolInfo = POST_TOOL_MAP[post.slug];
  const breadcrumbElements = hubInfo ? [
    { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
    { '@type': 'ListItem', position: 2, name: 'Rehberler', item: `${siteOrigin}/blog/` },
    { '@type': 'ListItem', position: 3, name: hubInfo.name, item: `${siteOrigin}${hubInfo.path}` },
    { '@type': 'ListItem', position: 4, name: post.title, item: url }
  ] : [
    { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
    { '@type': 'ListItem', position: 2, name: 'Rehberler', item: `${siteOrigin}/blog/` },
    { '@type': 'ListItem', position: 3, name: post.title, item: url }
  ];

  const schema = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: post.metaTitle,
      description: post.description,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: post.about.map(resolveEntity),
      datePublished: post.published,
      dateModified: post.modified,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.info-hero__answer', '.article-summary ul', '.article-section h2']
      },
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
      timeRequired: `PT${post.readingTime}M`,
      inLanguage: 'tr-TR',
      isAccessibleForFree: true,
      wordCount: wordCount(post),
      articleSection: post.category,
      keywords: post.keywords.join(', '),
      author: { '@id': `${siteOrigin}/#organization` },
      publisher: { '@id': `${siteOrigin}/#organization` },
      copyrightHolder: { '@id': `${siteOrigin}/#organization` },
      license: `${siteOrigin}/editoryal-ilkeler/`,
      publishingPrinciples: `${siteOrigin}/editoryal-ilkeler/`,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.info-hero__answer', '.article-summary ul', '.article-section h2']
      },
      about: post.about.map(resolveEntity),
      citation: post.sources.map((source) => source.url),
      isBasedOn: post.sources.map((source) => source.url)
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbElements
    }
  ];

  if (post.faq?.length) {
    schema.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer }
      }))
    });
  }

  return `<!doctype html>
<html class="no-js" lang="tr">
  <head>
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
${renderHead({ siteOrigin, path, title: post.metaTitle, description: post.description, keywords: post.keywords, schema, type: 'article', published: post.published, modified: post.modified, category: post.category, readingTime: post.readingTime })}
  </head>
  <body class="info-page article-page">
    <!-- Bu dosya content/blog-posts.mjs kaynağından otomatik üretilir. -->
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav('blog')}
    <main id="main-content">
      <article>
        <header class="info-hero article-hero">
          <div class="info-hero__copy">
            <nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><a href="/blog/">Rehberler</a><span>/</span>${hubInfo ? `<a href="${hubInfo.path}">${escapeHtml(post.category)}</a>` : `<span>${escapeHtml(post.category)}</span>`}</nav>
            <p class="info-hero__kicker">${escapeHtml(post.category)} · Karar rehberi</p>
            <h1>${escapeHtml(post.title)}</h1>
            <p class="info-hero__answer">${escapeHtml(post.answer)}</p>
            <div class="article-meta"><span>Yayınlayan <a href="/hakkimizda/">Narvals Labs</a></span><span>Yayımlandı <time datetime="${post.published}">${displayDate(post.published)}</time></span>${post.modified !== post.published ? `<span>Güncellendi <time datetime="${post.modified}">${displayDate(post.modified)}</time></span>` : ''}<span>${post.readingTime} dk okuma</span></div>
          </div>
          <aside class="info-hero__panel article-summary" aria-labelledby="ozet-basligi"><strong id="ozet-basligi">Bu rehberin özeti</strong><ul>${post.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></aside>
        </header>

        <div class="info-layout article-layout">
          <nav class="info-toc" aria-label="Makale içeriği"><strong>Bu rehberde</strong>${post.sections.map((section) => `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.label)}</a>`).join('')}${post.faq?.length ? '<a href="#kisa-cevaplar">Kısa cevaplar</a>' : ''}<a href="#kaynaklar">Kaynaklar</a></nav>
          <div class="info-content article-content">
            ${post.sections.map(renderSection).join('\n            ')}
            ${toolInfo ? `<aside class="article-tool-strip" aria-label="İlgili ücretsiz araç">
              <div class="article-tool-strip__copy">
                <small>İlgili ücretsiz araç · Kayıt gerekmez</small>
                <strong>${escapeHtml(toolInfo.label)}</strong>
                <p>Tarayıcınızda çalışan açık formüllü araçla kendi verilerinizi anında test edin.</p>
              </div>
              <a class="article-tool-strip__btn" href="${toolInfo.path}">Aracı başlat <span aria-hidden="true">→</span></a>
            </aside>` : ''}
            ${post.faq?.length ? `<section class="info-section article-section" id="kisa-cevaplar">
              <p class="info-section__label">Sık sorulan sorular</p>
              <h2>Kısa ve doğrudan cevaplar.</h2>
              <div class="article-faq">${post.faq.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}</div>
            </section>
            ` : ''}<section class="info-section article-section" id="kaynaklar">
              <p class="info-section__label">Birincil kaynaklar</p>
              <h2>Kaynaklar ve kapsam.</h2>
              <p>Bağlantılar içerikteki değişebilir veya dış doğrulama gerektiren bilgilerin kaynağıdır. Ticari ilişki veya sponsorlu bağlantı değildir.</p>
              <ol class="article-sources">${post.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" rel="noopener noreferrer">${escapeHtml(source.label)}</a></li>`).join('')}</ol>
              <aside class="article-method" aria-label="Bu rehberin hazırlanma yöntemi"><strong>Hazırlama yöntemi</strong><p>Bu rehber Narvals Labs yayıncılığında; ilgili birincil kaynaklar, görünür hizmet kapsamı ve proje karar çerçeveleri incelenerek hazırlandı. Doğrulanamayan müşteri, fiyat, başarı oranı veya sonuç iddiası eklenmedi. Yöntem, düzeltme ve yapay zekâ desteği açıklaması için <a href="/editoryal-ilkeler/">editoryal ilkeleri</a> okuyabilirsiniz.</p></aside>
            </section>
            <section class="info-section article-section">
              <p class="info-section__label">İlgili rehberler</p><h2>İlgili rehberlerle devam edin.</h2>
              <div class="article-related">${renderRelated(post)}</div>
            </section>
          </div>
        </div>
      </article>
      <section class="info-cta"><h2>Bu kararı projenize uyarlayalım.</h2><p>Mevcut durumu, hedefi ve en kritik sınırı paylaşın; gerekli kapsamı birlikte netleştirelim.</p><div class="article-cta-actions"><a class="info-button" href="${post.servicePath}">${escapeHtml(post.serviceLabel)} <span aria-hidden="true">→</span></a>${toolInfo ? `<a class="info-button info-button--tool" href="${toolInfo.path}">${escapeHtml(toolInfo.label)} <span aria-hidden="true">⚡</span></a>` : ''}<a class="info-button info-button--light" href="/iletisim/">Projeyi konuşalım <span aria-hidden="true">↗</span></a></div></section>
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
<html class="no-js" lang="tr">
  <head>
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
${renderHead({ siteOrigin, path, title, description, keywords: ['dijital rehberler', 'web tasarım rehberi', 'özel yazılım', 'Meta reklam', 'teknik SEO'], schema })}
  </head>
  <body class="info-page blog-page">
    <!-- Bu dosya content/blog-posts.mjs kaynağından otomatik üretilir. -->
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav('blog')}
    <main id="main-content">
      <section class="info-hero blog-hero">
        <div class="info-hero__copy"><nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><span>Rehberler</span></nav><p class="info-hero__kicker">Bilgi merkezi · Kaynaklı karar rehberleri</p><h1>Dijital projeler için karar rehberleri.</h1><p class="info-hero__answer">Yüzeysel trend yazıları yerine; web, yazılım, reklam ve işletme sistemleri için gerçek karar ölçütlerini, kontrol listelerini, sınırları ve birincil kaynakları bir araya getiriyoruz.</p></div>
        <aside class="info-hero__panel blog-search-panel"><strong>Ne yapmak istiyorsunuz?</strong><form class="blog-search" action="/blog/" method="get" role="search"><label for="blog-search-input">Rehberlerde ara</label><div><input id="blog-search-input" name="q" type="search" placeholder="Örn. e-ticaret sitesi" autocomplete="off" /><button type="submit">Ara <span aria-hidden="true">→</span></button></div></form><p>E-ticaret, web sitesi, QR menü, reklam veya SEO hakkında sorunuzu yazın.</p></aside>
      </section>
      <section class="blog-tool" aria-labelledby="ucretsiz-kontrol-basligi"><div><p>Ücretsiz karar aracı</p><h2 id="ucretsiz-kontrol-basligi">Sitenizi 16 soruda kontrol edin.</h2><span>Teklif, güven, dönüşüm ve teknik görünürlükte hangi alanın önce düzeltilmesi gerektiğini görün. Kayıt yok; cevaplar cihazınızda kalır.</span></div><a href="/araclar/web-sitesi-kontrolu/">Ücretsiz kontrolü başlat <i aria-hidden="true">→</i></a></section>
      <section class="topic-directory" aria-labelledby="konu-merkezleri-basligi">
        <header><p>Karar yolunu seçin</p><h2 id="konu-merkezleri-basligi">Tek yazı değil, doğru sıra.</h2><span>Bir projeyi baştan sona anlamak için rehberleri konu merkezlerinde karar sırasıyla takip edin.</span></header>
        <div class="topic-directory__list">${topicHubs.map((hub, index) => `<a href="/blog/konu/${hub.slug}/"><small>0${index + 1} · ${hub.all.length} rehber</small><strong>${escapeHtml(hub.title)}</strong><span>${escapeHtml(hub.answer)}</span><i aria-hidden="true">→</i></a>`).join('')}</div>
      </section>
      <section class="blog-hub" aria-labelledby="rehberler-basligi">
        <header class="blog-hub__header"><p class="info-section__label">Tüm rehberler</p><h2 id="rehberler-basligi">Hizmete göre değil, kararınıza göre başlayın.</h2><p>Her rehber tek bir arama ve iş niyetine sahiptir. Benzer sorgular için kopya sayfa üretmek yerine, bir konuyu karar vermeye yetecek derinlikte ele alır.</p></header>
        <div class="blog-grid">${blogPosts.map((post) => `<article class="blog-card"><div class="blog-card__meta"><span>${escapeHtml(post.category)}</span><span>${post.readingTime} dk</span></div><h3><a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.description)}</p><a class="blog-card__link" href="/blog/${post.slug}/" aria-label="${escapeHtml(post.title)} içeriğini okuyun">Rehberi okuyun <span aria-hidden="true">→</span></a></article>`).join('')}</div>
      </section>
      <section class="editorial-strip"><div><p class="info-section__label">Yayın standardı</p><h2>Her rehberde kaynakları, kapsamı ve düzeltme yolunu açıkça gösteriyoruz.</h2></div><p>Doğrulanmayan fiyat, müşteri, performans veya başarı iddiası yayınlamıyoruz. İçeriklerin nasıl hazırlandığını ve güncellendiğini <a href="/editoryal-ilkeler/">editoryal ilkelerde</a> açıklıyoruz.</p></section>
      <section class="info-cta"><h2>Rehberden uygulamaya geçin.</h2><p>Hangi hizmetle başlamanız gerektiğinden emin değilseniz mevcut durumu birlikte netleştirelim.</p><a class="info-button" href="/iletisim/">Projeyi konuşalım <span aria-hidden="true">↗</span></a></section>
    </main>
    ${renderFooter()}
    <script type="module" src="/src/info-main.js"></script>
  </body>
</html>
`;
};

const renderTopicHub = (hub, siteOrigin) => {
  const path = `/blog/konu/${hub.slug}/`;
  const url = `${siteOrigin}${path}`;
  const posts = hub.all.map((slug) => blogPostBySlug.get(slug));
  const starters = hub.start.map((slug) => blogPostBySlug.get(slug));
  if ([...posts, ...starters].some((post) => !post)) throw new Error(`${hub.slug} topic hub references a missing blog post.`);
  const schema = [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#webpage`,
      url,
      name: hub.metaTitle,
      description: hub.description,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${siteOrigin}/#website` },
      about: hub.keywords.map(resolveEntity),
      breadcrumb: { '@id': `${url}#breadcrumb` }
    },
    { '@type': 'ItemList', itemListElement: posts.map((post, index) => ({ '@type': 'ListItem', position: index + 1, name: post.title, url: `${siteOrigin}/blog/${post.slug}/` })) },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
        { '@type': 'ListItem', position: 2, name: 'Rehberler', item: `${siteOrigin}/blog/` },
        { '@type': 'ListItem', position: 3, name: hub.title, item: url }
      ]
    }
  ];

  return `<!doctype html>
<html class="no-js" lang="tr">
  <head>
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
${renderHead({ siteOrigin, path, title: hub.metaTitle, description: hub.description, keywords: hub.keywords, schema })}
  </head>
  <body class="info-page topic-page">
    <a class="skip-link" href="#main-content">Ana içeriğe geç</a>
    ${renderNav('blog')}
    <main id="main-content">
      <section class="info-hero topic-hero"><div class="info-hero__copy"><nav class="breadcrumbs" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>/</span><a href="/blog/">Rehberler</a><span>/</span><span>Konu merkezi</span></nav><p class="info-hero__kicker">Konu merkezi · ${posts.length} kaynaklı rehber</p><h1>${escapeHtml(hub.title)}</h1><p class="info-hero__answer">${escapeHtml(hub.answer)}</p></div><aside class="info-hero__panel"><strong>Bu merkezde</strong><ul><li>Başlangıç için üç karar</li><li>Uygulama ve kontrol rehberleri</li><li>Birincil kaynaklar ve açık sınırlar</li><li>İlgili hizmete doğrudan geçiş</li></ul></aside></section>
      <section class="topic-path" aria-labelledby="baslangic-yolu"><header><p>Önerilen başlangıç</p><h2 id="baslangic-yolu">Üç kararla ilerleyin.</h2></header><ol>${starters.map((post) => `<li><a href="/blog/${post.slug}/"><small>${escapeHtml(post.category)} · ${post.readingTime} dk</small><strong>${escapeHtml(post.title)}</strong><span>${escapeHtml(post.answer)}</span><i aria-hidden="true">→</i></a></li>`).join('')}</ol></section>
      ${hub.slug === 'web-sitesi' ? '<section class="blog-tool blog-tool--topic" aria-labelledby="konu-araci-basligi"><div><p>Mevcut siteniz varsa</p><h2 id="konu-araci-basligi">Okumadan önce durumunuzu puanlayın.</h2><span>16 soruluk ücretsiz kontrol, hangi rehberden başlamanız gerektiğini görünür kılar.</span></div><a href="/araclar/web-sitesi-kontrolu/">Web sitesini kontrol et <i aria-hidden="true">→</i></a></section>' : ''}
      <section class="topic-library" aria-labelledby="tum-rehberler"><header><h2 id="tum-rehberler">Bu konudaki tüm rehberler.</h2><p>İhtiyacınız olan karardan başlayın; her içerik ilgili sonraki adıma bağlanır.</p></header><div>${posts.map((post) => `<article><small>${escapeHtml(post.category)} · ${post.readingTime} dk</small><h3><a href="/blog/${post.slug}/">${escapeHtml(post.title)}</a></h3><p>${escapeHtml(post.description)}</p><a href="/blog/${post.slug}/" aria-label="${escapeHtml(post.title)} rehberini okuyun">Rehberi okuyun <span aria-hidden="true">→</span></a></article>`).join('')}</div></section>
      <section class="info-cta"><h2>Rehberden uygulamaya geçin.</h2><p>Mevcut durumunuzu ve en kritik sınırı paylaşın; gereksiz kapsamı ayıklayıp doğru başlangıcı birlikte belirleyelim.</p><div class="article-cta-actions"><a class="info-button" href="${hub.servicePath}">${escapeHtml(hub.serviceLabel)} <span aria-hidden="true">→</span></a><a class="info-button info-button--light" href="/iletisim/">Projeyi konuşalım <span aria-hidden="true">↗</span></a></div></section>
    </main>
    ${renderFooter()}
    <script type="module" src="/src/info-main.js"></script>
  </body>
</html>`;
};

const renderEditorialPolicy = (siteOrigin) => {
  const path = '/editoryal-ilkeler/';
  const url = `${siteOrigin}${path}`;
  const title = 'Editoryal İlkeler ve Kaynak Politikası | Narvals Labs';
  const description = 'Narvals Labs rehberlerinin kaynaklandırma, yapay zekâ desteği, güncelleme, düzeltme, çıkar çatışması ve doğrulanabilirlik ilkeleri.';
  const schema = [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'tr-TR', isPartOf: { '@id': `${siteOrigin}/#website` }, about: { '@id': `${siteOrigin}/#organization` } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: `${siteOrigin}/` },
      { '@type': 'ListItem', position: 2, name: 'Editoryal ilkeler', item: url }
    ] }
  ];

  return `<!doctype html>
<html class="no-js" lang="tr">
  <head>
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
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
        <section class="info-section article-section" id="duzeltme"><p class="info-section__label">Hata ve geri bildirim</p><h2>Düzeltme talepleri gerçek bir iletişim kanalıyla alınmalıdır.</h2><p>Doğrulanmış iletişim kanalı eklendiğinde olgusal hata, bozuk kaynak, belirsiz çıkar çatışması veya güncelliğini yitirmiş bilgi ilgili URL ile bildirilebilir. Bildirim doğrulandığında içerik düzeltilir; karar sonucunu anlamlı biçimde etkileyen değişiklikte güncelleme tarihi yenilenir.</p><p>Hiçbir rehber Google sırası, yapay zekâ kaynak gösterimi, reklam sonucu, yazılım verimliliği veya ticari performans garantisi vermez.</p></section>
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
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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
      <content:encoded><![CDATA[<p>${escapeHtml(post.answer)}</p><ul>${post.takeaways.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>]]></content:encoded>
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

  await Promise.all(topicHubs.map(async (hub) => {
    const destination = join(blogRoot, 'konu', hub.slug);
    await mkdir(destination, { recursive: true });
    await writeFile(join(destination, 'index.html'), cleanGeneratedOutput(renderTopicHub(hub, siteOrigin)));
  }));

  const editorialRoot = join(projectRoot, 'editoryal-ilkeler');
  await mkdir(editorialRoot, { recursive: true });
  await writeFile(join(editorialRoot, 'index.html'), cleanGeneratedOutput(renderEditorialPolicy(siteOrigin)));

  const publicBlogRoot = join(publicRoot, 'blog');
  await mkdir(publicBlogRoot, { recursive: true });
  await writeFile(join(publicBlogRoot, 'feed.xml'), cleanGeneratedOutput(renderFeed(siteOrigin)));

  console.log(`Rendered blog hub, ${topicHubs.length} topic centers, ${blogPosts.length} guides, editorial policy and RSS feed.`);
}
