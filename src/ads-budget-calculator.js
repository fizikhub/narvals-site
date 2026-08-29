import './ads-budget-calculator.css';

const formatPercent = (value) => new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
}).format(value);

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0
}).format(value);

const formatNumber = (value) => new Intl.NumberFormat('tr-TR', {
  maximumFractionDigits: 0
}).format(value);

const form = document.querySelector('[data-ads-form]');
const errorEl = document.querySelector('[data-ads-error]');
const resultEl = document.querySelector('[data-ads-result]');
const modeTabs = document.querySelectorAll('[data-ads-mode]');
const inputGoalGroup = document.querySelector('[data-group-goal]');
const inputBudgetGroup = document.querySelector('[data-group-budget]');
const sectorSelect = document.querySelector('[data-sector-preset]');
const cvrInput = document.querySelector('[name="cvr"]');

const budgetMetricEl = document.querySelector('[data-metric-budget]');
const clicksMetricEl = document.querySelector('[data-metric-clicks]');
const conversionsMetricEl = document.querySelector('[data-metric-conversions]');
const cpaMetricEl = document.querySelector('[data-metric-cpa]');
const copyBtn = document.querySelector('[data-ads-copy]');
const whatsappBtn = document.querySelector('[data-ads-whatsapp]');

let activeMode = 'goal'; // 'goal' | 'budget'
let currentReport = '';

modeTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    modeTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-pressed', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');
    activeMode = tab.dataset.adsMode;
    if (activeMode === 'goal') {
      if (inputGoalGroup) inputGoalGroup.hidden = false;
      if (inputBudgetGroup) inputBudgetGroup.hidden = true;
    } else {
      if (inputGoalGroup) inputGoalGroup.hidden = true;
      if (inputBudgetGroup) inputBudgetGroup.hidden = false;
    }
  });
});

if (sectorSelect && cvrInput) {
  sectorSelect.addEventListener('change', () => {
    const val = sectorSelect.value;
    if (val === 'ecommerce') cvrInput.value = '2.0';
    else if (val === 'b2b') cvrInput.value = '4.0';
    else if (val === 'local') cvrInput.value = '8.0';
  });
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    const formData = new FormData(form);
    const cpc = parseFloat(formData.get('cpc'));
    const cvr = parseFloat(formData.get('cvr'));

    if (isNaN(cpc) || cpc <= 0 || isNaN(cvr) || cvr <= 0 || cvr > 100) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli ortalama TBM ve %0.1–100 arası dönüşüm oranı girin.';
        errorEl.hidden = false;
      }
      return;
    }

    let requiredBudget = 0;
    let expectedClicks = 0;
    let expectedConversions = 0;
    let expectedCpa = 0;

    if (activeMode === 'goal') {
      const goal = parseFloat(formData.get('goal'));
      if (isNaN(goal) || goal <= 0) {
        if (errorEl) {
          errorEl.textContent = 'Lütfen aylık hedef dönüşüm (form/satış) adedini girin.';
          errorEl.hidden = false;
        }
        return;
      }
      expectedConversions = goal;
      expectedClicks = goal / (cvr / 100);
      requiredBudget = expectedClicks * cpc;
      expectedCpa = requiredBudget / expectedConversions;
    } else {
      const budget = parseFloat(formData.get('budget'));
      if (isNaN(budget) || budget <= 0) {
        if (errorEl) {
          errorEl.textContent = 'Lütfen aylık reklam bütçenizi girin.';
          errorEl.hidden = false;
        }
        return;
      }
      requiredBudget = budget;
      expectedClicks = budget / cpc;
      expectedConversions = expectedClicks * (cvr / 100);
      expectedCpa = expectedConversions > 0 ? requiredBudget / expectedConversions : 0;
    }

    if (budgetMetricEl) budgetMetricEl.textContent = formatCurrency(requiredBudget);
    if (clicksMetricEl) clicksMetricEl.textContent = `${formatNumber(expectedClicks)} tık`;
    if (conversionsMetricEl) conversionsMetricEl.textContent = `${formatNumber(expectedConversions)} talep`;
    if (cpaMetricEl) cpaMetricEl.textContent = formatCurrency(expectedCpa);

    currentReport = [
      'Narvals Labs Google Ads Bütçe Simülasyonu',
      `Hesaplama Modu: ${activeMode === 'goal' ? 'Hedef Dönüşümden Bütçe' : 'Bütçeden Beklenen Dönüşüm'}`,
      `Ortalama TBM (CPC): ${formatCurrency(cpc)}`,
      `Tahmini Dönüşüm Oranı (CVR): %${formatPercent(cvr)}`,
      `Aylık Gerekli Bütçe: ${formatCurrency(requiredBudget)}`,
      `Beklenen Tıklama: ${formatNumber(expectedClicks)}`,
      `Tahmini Dönüşüm: ${formatNumber(expectedConversions)}`,
      `Tahmini Edinme Başı Maliyet (CPA): ${formatCurrency(expectedCpa)}`
    ].join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, Google Ads bütçe hesaplama sonucumu paylaşıp kampanya kurulumu için görüşmek istiyorum:\n\n${currentReport}`);
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
