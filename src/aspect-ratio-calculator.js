import './aspect-ratio-calculator.css';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const w1Input = document.querySelector('[name="w1"]');
const h1Input = document.querySelector('[name="h1"]');
const w2Input = document.querySelector('[name="w2"]');
const h2Input = document.querySelector('[name="h2"]');

const previewBox = document.querySelector('[data-aspect-box]');
const ratioText = document.querySelector('[data-aspect-ratio-text]');
const summaryEl = document.querySelector('[data-aspect-summary]');
const copyBtn = document.querySelector('[data-aspect-copy]');
const presetButtons = document.querySelectorAll('[data-aspect-preset]');

let lastModifiedTarget = 'w2'; // 'w2' or 'h2'

const calculateRatio = () => {
  const w1 = parseFloat(w1Input?.value) || 1920;
  const h1 = parseFloat(h1Input?.value) || 1080;

  if (w1 <= 0 || h1 <= 0) return;

  const divisor = gcd(Math.round(w1), Math.round(h1));
  const ratioX = Math.round(w1) / divisor;
  const ratioY = Math.round(h1) / divisor;
  const ratioStr = `${ratioX}:${ratioY}`;

  if (lastModifiedTarget === 'w2') {
    const w2 = parseFloat(w2Input?.value) || 1200;
    const h2 = Math.round((w2 * h1) / w1);
    if (h2Input) h2Input.value = h2;
  } else {
    const h2 = parseFloat(h2Input?.value) || 675;
    const w2 = Math.round((h2 * w1) / h1);
    if (w2Input) w2Input.value = w2;
  }

  const w2Val = parseFloat(w2Input?.value) || w1;
  const h2Val = parseFloat(h2Input?.value) || h1;

  if (ratioText) ratioText.textContent = ratioStr;

  if (previewBox) {
    previewBox.textContent = `${w2Val} × ${h2Val} (${ratioStr})`;
    const maxDim = 180;
    if (w1 >= h1) {
      const widthPx = maxDim;
      const heightPx = Math.max(24, Math.round((maxDim * h1) / w1));
      previewBox.style.width = `${widthPx}px`;
      previewBox.style.height = `${heightPx}px`;
    } else {
      const heightPx = maxDim;
      const widthPx = Math.max(24, Math.round((maxDim * w1) / h1));
      previewBox.style.width = `${widthPx}px`;
      previewBox.style.height = `${heightPx}px`;
    }
  }

  if (summaryEl) {
    summaryEl.innerHTML = `
      <strong>Oran Özeti:</strong> ${w1}×${h1} piksel görsel ${ratioStr} en-boy oranına sahiptir.<br />
      Yeni ölçekte (${w2Val}×${h2Val}px) görsel deforme olmadan %100 oran korumasıyla ölçeklenir.
    `;
  }
};

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    presetButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const [presetW, presetH] = (btn.dataset.aspectPreset || '1920x1080').split('x');
    if (w1Input && h1Input) {
      w1Input.value = presetW;
      h1Input.value = presetH;
      calculateRatio();
    }
  });
});

if (w1Input) w1Input.addEventListener('input', calculateRatio);
if (h1Input) h1Input.addEventListener('input', calculateRatio);

if (w2Input) {
  w2Input.addEventListener('input', () => {
    lastModifiedTarget = 'w2';
    calculateRatio();
  });
}

if (h2Input) {
  h2Input.addEventListener('input', () => {
    lastModifiedTarget = 'h2';
    calculateRatio();
  });
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = summaryEl?.textContent?.trim() || '';
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

calculateRatio();
