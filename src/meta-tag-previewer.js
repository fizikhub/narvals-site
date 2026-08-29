import './meta-tag-previewer.css';

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
  const htmlCode = `<!-- Temel Meta Etiketleri -->
<title>${title}</title>
<meta name="description" content="${desc}" />
<link rel="canonical" href="${url}" />

<!-- OpenGraph (Facebook, WhatsApp, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="${brand}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:image" content="${img}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />
<meta name="twitter:image" content="${img}" />`;

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
