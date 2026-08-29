import './roas-calculator.css';

const formatPercent = (value) => new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
}).format(value);

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0
}).format(value);

const formatRatio = (value) => `${formatPercent(value)}x`;

const form = document.querySelector('[data-roas-form]');
const errorEl = document.querySelector('[data-roas-error]');
const resultEl = document.querySelector('[data-roas-result]');
const statusEl = document.querySelector('[data-roas-status]');
const roasRatioEl = document.querySelector('[data-roas-ratio]');
const roasPercentEl = document.querySelector('[data-roas-percent]');
const breakevenRoasEl = document.querySelector('[data-breakeven-roas]');
const netProfitEl = document.querySelector('[data-net-profit]');
const poasEl = document.querySelector('[data-poas]');
const copyBtn = document.querySelector('[data-roas-copy]');
const whatsappBtn = document.querySelector('[data-roas-whatsapp]');

let currentReport = '';

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    const formData = new FormData(form);
    const revenue = parseFloat(formData.get('revenue'));
    const spend = parseFloat(formData.get('spend'));
    const margin = parseFloat(formData.get('margin'));

    if (isNaN(revenue) || revenue <= 0 || isNaN(spend) || spend <= 0 || isNaN(margin) || margin <= 0 || margin > 100) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli reklam cirosu, reklam harcaması ve %1–100 arası kâr marjı girin.';
        errorEl.hidden = false;
      }
      return;
    }

    const roasMultiple = revenue / spend;
    const roasPct = roasMultiple * 100;
    const breakevenMultiple = 1 / (margin / 100);
    const breakevenPct = breakevenMultiple * 100;
    const grossProfit = revenue * (margin / 100);
    const netProfit = grossProfit - spend;
    const poas = grossProfit / spend;

    if (roasRatioEl) roasRatioEl.textContent = formatRatio(roasMultiple);
    if (roasPercentEl) roasPercentEl.textContent = `%${formatPercent(roasPct)}`;
    if (breakevenRoasEl) breakevenRoasEl.textContent = `${formatRatio(breakevenMultiple)} (%${formatPercent(breakevenPct)})`;
    if (netProfitEl) {
      netProfitEl.textContent = formatCurrency(netProfit);
      netProfitEl.style.color = netProfit >= 0 ? 'var(--accent-dark, #00a870)' : '#b91c1c';
    }
    if (poasEl) poasEl.textContent = formatRatio(poas);

    if (statusEl) {
      if (roasMultiple > breakevenMultiple * 1.05) {
        statusEl.className = 'roas-status-badge roas-status-badge--profit';
        statusEl.innerHTML = '● Kârlı Büyüme Bölgesi (Reklam net kâr üretiyor)';
      } else if (roasMultiple >= breakevenMultiple * 0.95) {
        statusEl.className = 'roas-status-badge roas-status-badge--breakeven';
        statusEl.innerHTML = '● Başabaş Noktası (Kâr/Zarar sıfır sınırında)';
      } else {
        statusEl.className = 'roas-status-badge roas-status-badge--loss';
        statusEl.innerHTML = '● Zarar Bölgesi (Mevcut ROAS ürün maliyetini karşılamıyor)';
      }
    }

    currentReport = [
      'Narvals Labs ROAS & Kârlılık Özeti',
      `Reklam Harcaması: ${formatCurrency(spend)}`,
      `Elde Edilen Ciro: ${formatCurrency(revenue)}`,
      `Brüt Kâr Marjı: %${formatPercent(margin)}`,
      `Gerçekleşen ROAS: ${formatRatio(roasMultiple)} (%${formatPercent(roasPct)})`,
      `Gereken Başabaş ROAS: ${formatRatio(breakevenMultiple)}`,
      `Net Kâr / Zarar: ${formatCurrency(netProfit)} (POAS: ${formatRatio(poas)})`
    ].join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, ROAS hesaplama sonucumu paylaşıp reklam verimliliğimi değerlendirmek istiyorum:\n\n${currentReport}`);
      whatsappBtn.href = `https://wa.me/905019441921?text=${msg}`;
    }

    if (resultEl) {
      resultEl.hidden = false;
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    if (!currentReport) return;
    try {
      await navigator.clipboard.writeText(currentReport);
      const prev = copyBtn.textContent;
      copyBtn.textContent = 'Kopyalandı!';
      setTimeout(() => { copyBtn.textContent = prev; }, 2000);
    } catch {
      copyBtn.textContent = 'Kopyalanamadı';
    }
  });
}
