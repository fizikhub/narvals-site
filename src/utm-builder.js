import './utm-builder.css';

const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-_]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const form = document.querySelector('[data-utm-form]');
const urlInput = document.querySelector('[name="base_url"]');
const sourceInput = document.querySelector('[name="utm_source"]');
const mediumInput = document.querySelector('[name="utm_medium"]');
const campaignInput = document.querySelector('[name="utm_campaign"]');
const termInput = document.querySelector('[name="utm_term"]');
const contentInput = document.querySelector('[name="utm_content"]');

const resultEl = document.querySelector('[data-utm-result]');
const outputBox = document.querySelector('[data-utm-output]');
const copyBtn = document.querySelector('[data-utm-copy]');
const testLink = document.querySelector('[data-utm-test]');
const presetButtons = document.querySelectorAll('[data-utm-preset]');

const updateUrl = () => {
  const rawUrl = urlInput ? urlInput.value.trim() : '';
  if (!rawUrl) {
    if (resultEl) resultEl.hidden = true;
    return;
  }

  let validBase = rawUrl;
  if (!/^https?:\/\//i.test(validBase)) {
    validBase = `https://${validBase}`;
  }

  try {
    const urlObj = new URL(validBase);
    const source = slugify(sourceInput?.value);
    const medium = slugify(mediumInput?.value);
    const campaign = slugify(campaignInput?.value);
    const term = slugify(termInput?.value);
    const content = slugify(contentInput?.value);

    if (source) urlObj.searchParams.set('utm_source', source);
    else urlObj.searchParams.delete('utm_source');

    if (medium) urlObj.searchParams.set('utm_medium', medium);
    else urlObj.searchParams.delete('utm_medium');

    if (campaign) urlObj.searchParams.set('utm_campaign', campaign);
    else urlObj.searchParams.delete('utm_campaign');

    if (term) urlObj.searchParams.set('utm_term', term);
    else urlObj.searchParams.delete('utm_term');

    if (content) urlObj.searchParams.set('utm_content', content);
    else urlObj.searchParams.delete('utm_content');

    const generated = urlObj.toString();
    if (outputBox) outputBox.textContent = generated;
    if (testLink) testLink.href = generated;
    if (resultEl) resultEl.hidden = false;
  } catch {
    if (resultEl) resultEl.hidden = true;
  }
};

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const preset = btn.dataset.utmPreset;
    if (preset === 'instagram') {
      if (sourceInput) sourceInput.value = 'instagram';
      if (mediumInput) mediumInput.value = 'paid-social';
    } else if (preset === 'facebook') {
      if (sourceInput) sourceInput.value = 'facebook';
      if (mediumInput) mediumInput.value = 'paid-social';
    } else if (preset === 'google') {
      if (sourceInput) sourceInput.value = 'google';
      if (mediumInput) mediumInput.value = 'cpc';
    } else if (preset === 'tiktok') {
      if (sourceInput) sourceInput.value = 'tiktok';
      if (mediumInput) mediumInput.value = 'paid-social';
    } else if (preset === 'newsletter') {
      if (sourceInput) sourceInput.value = 'newsletter';
      if (mediumInput) mediumInput.value = 'email';
    }
    updateUrl();
  });
});

[urlInput, sourceInput, mediumInput, campaignInput, termInput, contentInput].forEach((input) => {
  if (input) {
    input.addEventListener('input', updateUrl);
  }
});

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUrl();
    if (resultEl) resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = outputBox ? outputBox.textContent : '';
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      const prev = copyBtn.textContent;
      copyBtn.textContent = 'Kopyalandı!';
      setTimeout(() => { copyBtn.textContent = prev; }, 2000);
    } catch {
      copyBtn.textContent = 'Kopyalanamadı';
    }
  });
}

updateUrl();
