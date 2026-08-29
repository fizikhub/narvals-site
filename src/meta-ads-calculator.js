import './meta-ads-calculator.css';

const formatNumber = (value) => new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 0 }).format(value);
const formatPercent = (value) => new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value);
const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 1 }).format(value);

const form = document.querySelector('[data-meta-form]');
const errorEl = document.querySelector('[data-meta-error]');
const resultEl = document.querySelector('[data-meta-result]');

const impressionsEl = document.querySelector('[data-meta-impressions]');
const clicksEl = document.querySelector('[data-meta-clicks]');
const conversionsEl = document.querySelector('[data-meta-conversions]');
const cpaEl = document.querySelector('[data-meta-cpa]');
const cpcEl = document.querySelector('[data-meta-cpc]');
const roasEl = document.querySelector('[data-meta-roas]');

const copyBtn = document.querySelector('[data-meta-copy]');
const whatsappBtn = document.querySelector('[data-meta-whatsapp]');
const goalButtons = document.querySelectorAll('[data-meta-goal]');

const cpmInput = document.querySelector('[name="cpm_cost"]');
const ctrInput = document.querySelector('[name="ctr_rate"]');
const crInput = document.querySelector('[name="cr_rate"]');

const goals = {
  ecommerce: { cpm: 85, ctr: 1.8, cr: 2.5 },
  b2b: { cpm: 120, ctr: 1.2, cr: 5.0 },
  local: { cpm: 50, ctr: 2.2, cr: 8.0 },
  awareness: { cpm: 35, ctr: 0.8, cr: 1.0 }
};

goalButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    goalButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const goalKey = btn.dataset.metaGoal;
    const g = goals[goalKey];
    if (g) {
      if (cpmInput) cpmInput.value = g.cpm;
      if (ctrInput) ctrInput.value = g.ctr;
      if (crInput) crInput.value = g.cr;
      if (form) form.requestSubmit();
    }
  });
});

let currentReport = '';

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    const formData = new FormData(form);
    const budget = parseFloat(formData.get('monthly_budget'));
    const cpm = parseFloat(formData.get('cpm_cost'));
    const ctr = parseFloat(formData.get('ctr_rate'));
    const cr = parseFloat(formData.get('cr_rate'));
    const orderValue = parseFloat(formData.get('order_value')) || 0;

    if (isNaN(budget) || budget <= 0 || isNaN(cpm) || cpm <= 0 || isNaN(ctr) || ctr <= 0 || isNaN(cr) || cr <= 0) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli bir bütçe, CPM, CTR ve dönüşüm oranı girin.';
        errorEl.hidden = false;
      }
      return;
    }

    const totalImpressions = (budget / cpm) * 1000;
    const totalClicks = totalImpressions * (ctr / 100);
    const cpc = totalClicks > 0 ? budget / totalClicks : 0;
    const totalConversions = Math.max(1, Math.round(totalClicks * (cr / 100)));
    const cpa = totalConversions > 0 ? budget / totalConversions : budget;
    const estimatedRevenue = totalConversions * orderValue;
    const roas = budget > 0 ? (estimatedRevenue / budget) * 100 : 0;

    if (impressionsEl) impressionsEl.textContent = formatNumber(totalImpressions);
    if (clicksEl) clicksEl.textContent = formatNumber(totalClicks);
    if (conversionsEl) conversionsEl.textContent = formatNumber(totalConversions);
    if (cpaEl) cpaEl.textContent = formatCurrency(cpa);
    if (cpcEl) cpcEl.textContent = formatCurrency(cpc);
    if (roasEl) roasEl.textContent = `%${formatPercent(roas)} (${(roas / 100).toFixed(1)}x)`;

    currentReport = [
      'Narvals Labs Meta (Instagram & Facebook) Bütçe Simülasyonu',
      `Aylık Reklam Bütçesi: ${formatCurrency(budget)}`,
      `Tahmini Gösterim Sayısı: ~${formatNumber(totalImpressions)} (CPM: ${formatCurrency(cpm)})`,
      `Beklenen Tıklama: ~${formatNumber(totalClicks)} (TBM: ${formatCurrency(cpc)} · CTR: %${formatPercent(ctr)})`,
      `Beklenen Satış / Talep Adedi: ~${formatNumber(totalConversions)} adet (CR: %${formatPercent(cr)})`,
      `Müşteri Başı Edinme Maliyeti (CPA): ${formatCurrency(cpa)}`,
      orderValue > 0 ? `Tahmini Ciro / ROAS: ${formatCurrency(estimatedRevenue)} (%${formatPercent(roas)})` : null
    ].filter(Boolean).join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, Meta reklam kampanyamız için profesyonel yönetim ve bütçe planlaması görüşmek istiyorum:\n\n${currentReport}`);
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
