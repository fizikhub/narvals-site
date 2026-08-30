import './meta-tag-previewer.css';
import { registerReadOnlyTool } from './webmcp.js';

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const buildMetaTags = ({ title, desc, url, img, brand }) => `<!-- Temel Meta Etiketleri -->
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(desc)}" />
<link rel="canonical" href="${escapeHtml(url)}" />

<!-- OpenGraph (Facebook, WhatsApp, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${escapeHtml(url)}" />
<meta property="og:site_name" content="${escapeHtml(brand)}" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(desc)}" />
<meta property="og:image" content="${escapeHtml(img)}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(desc)}" />
<meta name="twitter:image" content="${escapeHtml(img)}" />`;

const titleInput = document.querySelector('[name="meta_title"]');
const descInput = document.querySelector('[name="meta_desc"]');
const urlInput = document.querySelector('[name="meta_url"]');
const imgInput = document.querySelector('[name="meta_image"]');
const brandInput = document.querySelector('[name="meta_brand"]');

const titleCounter = document.querySelector('[data-title-counter]');
const descCounter = document.querySelector('[data-desc-counter]');

const googleDomainEl = document.querySelector('[data-google-domain]');
const googleTitleEl = document.querySelector('[data-google-title]');
const googleSnippetEl = document.querySelector('[data-google-snippet]');

const socialImgEl = document.querySelector('[data-social-img]');
const socialDomainEl = document.querySelector('[data-social-domain]');
const socialTitleEl = document.querySelector('[data-social-title]');
const socialDescEl = document.querySelector('[data-social-desc]');

const codeOutput = document.querySelector('[data-meta-code]');
const copyBtn = document.querySelector('[data-meta-copy-code]');

const updatePreview = () => {
  const title = titleInput?.value.trim() || 'Narvals Labs — Web Tasarım, Özel Yazılım ve Reklam';
  const desc = descInput?.value.trim() || 'Kurumsal web siteleri, e-ticaret altyapıları, özel yazılım sistemleri ve Google/Meta reklam yönetimi üreten bağımsız dijital stüdyo.';
  const url = urlInput?.value.trim() || 'https://narvals.com/';
  const img = imgInput?.value.trim() || 'https://narvals.com/og/narvals-labs-og.jpg';
  const brand = brandInput?.value.trim() || 'Narvals Labs';

  // Title counter
  const titleLen = title.length;
  if (titleCounter) {
    titleCounter.textContent = `${titleLen} / 60 karakter`;
    titleCounter.className = `meta-tag-counter ${titleLen >= 25 && titleLen <= 65 ? 'good' : 'warn'}`;
  }

  // Desc counter
  const descLen = desc.length;
  if (descCounter) {
    descCounter.textContent = `${descLen} / 160 karakter`;
    descCounter.className = `meta-tag-counter ${descLen >= 100 && descLen <= 170 ? 'good' : 'warn'}`;
  }

  let domain = 'narvals.com';
  try {
    const u = new URL(url.startsWith('http') ? url : `https://${url}`);
    domain = u.hostname;
  } catch {
    domain = 'narvals.com';
  }

  // Google Preview
  if (googleDomainEl) googleDomainEl.textContent = `${domain} > ${url.split('/').filter(Boolean).pop() || ''}`;
  if (googleTitleEl) googleTitleEl.textContent = title;
  if (googleSnippetEl) googleSnippetEl.textContent = desc;

  // Social Preview
  if (socialDomainEl) socialDomainEl.textContent = domain;
  if (socialTitleEl) socialTitleEl.textContent = title;
  if (socialDescEl) socialDescEl.textContent = desc;
  if (socialImgEl) {
    socialImgEl.style.backgroundImage = `url('${img}')`;
    socialImgEl.textContent = '';
  }

  // Code Block
  const htmlCode = buildMetaTags({ title, desc, url, img, brand });

  if (codeOutput) codeOutput.textContent = htmlCode;
};

[titleInput, descInput, urlInput, imgInput, brandInput].forEach((input) => {
  if (input) input.addEventListener('input', updatePreview);
});

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const code = codeOutput?.textContent || '';
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      const prev = copyBtn.textContent;
      copyBtn.textContent = 'Kod Kopyalandı!';
      setTimeout(() => { copyBtn.textContent = prev; }, 2000);
    } catch {
      copyBtn.textContent = 'Kopyalanamadı';
    }
  });
}

updatePreview();

registerReadOnlyTool({
  name: 'previewMetaTags',
  description: 'Bir web sayfası için güvenli HTML meta, canonical, Open Graph ve Twitter Card etiketleri üretir ve önizlemeyi günceller.',
  inputSchema: {
    type: 'object',
    properties: {
      title: { type: 'string', minLength: 1, maxLength: 65, description: 'Sayfa başlığı; en fazla 65 karakter.' },
      description: { type: 'string', minLength: 1, maxLength: 170, description: 'Sayfa açıklaması; en fazla 170 karakter.' },
      url: { type: 'string', format: 'uri', description: 'Canonical HTTPS sayfa adresi.' },
      imageUrl: { type: 'string', format: 'uri', description: 'Sosyal paylaşım görselinin HTTPS adresi.' },
      brand: { type: 'string', minLength: 1, maxLength: 100, description: 'Site veya marka adı.' }
    },
    required: ['title', 'description', 'url']
  },
  execute: async ({ title, description, url, imageUrl, brand }) => {
    const canonical = new URL(url);
    if (canonical.protocol !== 'https:') throw new TypeError('Canonical URL HTTPS olmalıdır.');
    const image = imageUrl ? new URL(imageUrl) : new URL('/og/narvals-labs-og.jpg', canonical);
    if (image.protocol !== 'https:') throw new TypeError('Görsel URL HTTPS olmalıdır.');
    const values = {
      title: String(title).trim().slice(0, 65),
      desc: String(description).trim().slice(0, 170),
      url: canonical.href,
      img: image.href,
      brand: String(brand || canonical.hostname).trim().slice(0, 100)
    };
    if (!values.title || !values.desc) throw new TypeError('Başlık ve açıklama boş olamaz.');
    if (titleInput) titleInput.value = values.title;
    if (descInput) descInput.value = values.desc;
    if (urlInput) urlInput.value = values.url;
    if (imgInput) imgInput.value = values.img;
    if (brandInput) brandInput.value = values.brand;
    updatePreview();
    const output = buildMetaTags(values);
    if (output.length > 1500) throw new RangeError('Üretilen araç çıktısı güvenli karakter bütçesini aşıyor.');
    return output;
  }
});
