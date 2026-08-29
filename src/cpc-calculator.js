import './cpc-calculator.css';

const formatPercent = (value, minDigits = 1, maxDigits = 2) => new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: minDigits,
  maximumFractionDigits: maxDigits
}).format(value);

const formatCurrency = (value, decimals = 2) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  minimumFractionDigits: decimals,
  maximumFractionDigits: decimals
}).format(value);

const formatNumber = (value, decimals = 1) => new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 0,
  maximumFractionDigits: decimals
}).format(value);

// DOM Elements
const form = document.querySelector('[data-cpc-form]');
const errorEl = document.querySelector('[data-cpc-error]');
const resultEl = document.querySelector('[data-cpc-result]');

// Inputs and sliders
const targetCpaInput = document.querySelector('[name="target_cpa"]');
const targetCpaSlider = document.querySelector('[name="target_cpa_range"]');
const crInput = document.querySelector('[name="cr_rate"]');
const crSlider = document.querySelector('[name="cr_rate_range"]');
const aovInput = document.querySelector('[name="aov_value"]');
const aovSlider = document.querySelector('[name="aov_value_range"]');
const marginInput = document.querySelector('[name="profit_margin"]');
const marginSlider = document.querySelector('[name="profit_margin_range"]');

// Outputs
const maxCpcEl = document.querySelector('[data-max-cpc]');
const breakevenCpcEl = document.querySelector('[data-breakeven-cpc]');
const clicksNeededEl = document.querySelector('[data-clicks-needed]');
const recommendedBidEl = document.querySelector('[data-recommended-bid]');

// Diagnostic Outputs
const breakevenCpaEl = document.querySelector('[data-breakeven-cpa]');
const profitPerSaleEl = document.querySelector('[data-profit-per-sale]');
const targetRoasEl = document.querySelector('[data-target-roas]');
const statusBannerEl = document.querySelector('[data-status-banner]');
const statusTextEl = document.querySelector('[data-status-text]');

// Scenarios
const scenarioLowBidEl = document.querySelector('[data-scenario-low-bid]');
const scenarioLowCpaEl = document.querySelector('[data-scenario-low-cpa]');
const scenarioLowProfitEl = document.querySelector('[data-scenario-low-profit]');

const scenarioBalancedBidEl = document.querySelector('[data-scenario-balanced-bid]');
const scenarioBalancedCpaEl = document.querySelector('[data-scenario-balanced-cpa]');
const scenarioBalancedProfitEl = document.querySelector('[data-scenario-balanced-profit]');

const scenarioAggressiveBidEl = document.querySelector('[data-scenario-aggressive-bid]');
const scenarioAggressiveCpaEl = document.querySelector('[data-scenario-aggressive-cpa]');
const scenarioAggressiveProfitEl = document.querySelector('[data-scenario-aggressive-profit]');

// Math Steps
const mathStep1El = document.querySelector('[data-math-step-1]');
const mathStep2El = document.querySelector('[data-math-step-2]');
const mathStep3El = document.querySelector('[data-math-step-3]');

// Action Buttons
const copyBtn = document.querySelector('[data-cpc-copy]');
const whatsappBtn = document.querySelector('[data-cpc-whatsapp]');
const presetButtons = document.querySelectorAll('[data-cpc-preset]');

let currentReport = '';

// Presets Definition
const presets = {
  retail: { cpa: 150, cr: 2.0, aov: 750, margin: 35 },
  high_margin: { cpa: 250, cr: 2.5, aov: 1200, margin: 60 },
  b2b: { cpa: 600, cr: 4.0, aov: 8000, margin: 50 },
  local: { cpa: 200, cr: 8.0, aov: 1500, margin: 45 },
  low_margin: { cpa: 120, cr: 1.5, aov: 3500, margin: 15 }
};

// Synchronize range sliders with number inputs
function syncInputAndSlider(inputEl, sliderEl) {
  if (!inputEl || !sliderEl) return;
  inputEl.addEventListener('input', () => {
    sliderEl.value = inputEl.value;
    calculateLive();
  });
  sliderEl.addEventListener('input', () => {
    inputEl.value = sliderEl.value;
    calculateLive();
  });
}

syncInputAndSlider(targetCpaInput, targetCpaSlider);
syncInputAndSlider(crInput, crSlider);
syncInputAndSlider(aovInput, aovSlider);
syncInputAndSlider(marginInput, marginSlider);

// Preset Buttons Listener
presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    presetButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const presetKey = btn.dataset.cpcPreset;
    const p = presets[presetKey];
    if (p) {
      if (targetCpaInput) targetCpaInput.value = p.cpa;
      if (targetCpaSlider) targetCpaSlider.value = p.cpa;
      if (crInput) crInput.value = p.cr;
      if (crSlider) crSlider.value = p.cr;
      if (aovInput) aovInput.value = p.aov;
      if (aovSlider) aovSlider.value = p.aov;
      if (marginInput) marginInput.value = p.margin;
      if (marginSlider) marginSlider.value = p.margin;
      calculateLive();
    }
  });
});

// Main Calculation Function
function calculateLive() {
  if (!form) return;

  const targetCpa = parseFloat(targetCpaInput?.value);
  const cr = parseFloat(crInput?.value);
  const aov = parseFloat(aovInput?.value);
  const margin = parseFloat(marginInput?.value);

  if (
    isNaN(targetCpa) || targetCpa <= 0 ||
    isNaN(cr) || cr <= 0 ||
    isNaN(aov) || aov <= 0 ||
    isNaN(margin) || margin <= 0 || margin > 100
  ) {
    if (errorEl) {
      errorEl.textContent = 'Lütfen tüm alanlara 0\'dan büyük geçerli değerler girin (Kâr marjı en fazla %100 olabilir).';
      errorEl.hidden = false;
    }
    return;
  }

  if (errorEl) errorEl.hidden = true;

  // 1. Calculations
  const crDecimal = cr / 100;
  const marginDecimal = margin / 100;

  // Break-even CPA & Break-even CPC
  const breakevenCpa = aov * marginDecimal;
  const breakevenCpc = breakevenCpa * crDecimal;

  // Max Profitable CPC at Target CPA
  const maxCpc = targetCpa * crDecimal;

  // Required clicks per conversion
  const clicksNeeded = 1 / crDecimal;

  // Recommended starting bid (75% of Max CPC)
  const recommendedBid = maxCpc * 0.75;

  // Profit per sale at Target CPA
  const profitPerSale = breakevenCpa - targetCpa;
  const netMarginPercent = (profitPerSale / aov) * 100;

  // Target ROAS & Break-Even ROAS
  const targetRoas = (aov / targetCpa) * 100;
  const breakevenRoas = (1 / marginDecimal) * 100;

  // 2. Render Primary Metrics
  if (maxCpcEl) maxCpcEl.textContent = formatCurrency(maxCpc, 2);
  if (breakevenCpcEl) breakevenCpcEl.textContent = formatCurrency(breakevenCpc, 2);
  if (clicksNeededEl) clicksNeededEl.textContent = `~${formatNumber(clicksNeeded, 0)} tık`;
  if (recommendedBidEl) recommendedBidEl.textContent = formatCurrency(recommendedBid, 2);

  // 3. Render Diagnostics
  if (breakevenCpaEl) breakevenCpaEl.textContent = formatCurrency(breakevenCpa, 1);
  if (profitPerSaleEl) {
    profitPerSaleEl.textContent = `${formatCurrency(profitPerSale, 1)} (%${formatPercent(netMarginPercent, 1)})`;
    profitPerSaleEl.style.color = profitPerSale >= 0 ? 'var(--text-primary, #03233a)' : '#dc2626';
  }
  if (targetRoasEl) targetRoasEl.textContent = `%${formatPercent(targetRoas, 0)} (${(targetRoas / 100).toFixed(1)}x)`;

  // 4. Status Banner
  if (statusBannerEl && statusTextEl) {
    statusBannerEl.className = 'cpc-status-banner';
    if (targetCpa > breakevenCpa) {
      statusBannerEl.classList.add('unprofitable');
      statusTextEl.innerHTML = `<strong>Kritik Kârlılık Uyarısı:</strong> Hedef CPA (${formatCurrency(targetCpa, 1)}), birim brüt kârınızın (${formatCurrency(breakevenCpa, 1)}) üzerindedir. Bu teklifle her satış başına <strong>${formatCurrency(Math.abs(profitPerSale), 1)} zarar</strong> oluşur. Hedef CPA'yı düşürün veya dönüşüm oranını artırın.`;
    } else if (targetCpa > breakevenCpa * 0.8) {
      statusBannerEl.classList.add('warning');
      statusTextEl.innerHTML = `<strong>Dar Kâr Marjı Uyarısı:</strong> Hedef CPA (${formatCurrency(targetCpa, 1)}) başabaş sınırına çok yakın. Satış başına yalnızca ${formatCurrency(profitPerSale, 1)} net kâr kalıyor. Açık artırma tekliflerinde muhafazakâr kalmanız önerilir.`;
    } else {
      statusBannerEl.classList.add('profitable');
      statusTextEl.innerHTML = `<strong>Kârlı &amp; Güvenli Teklif Alanı:</strong> Hedef CPA (${formatCurrency(targetCpa, 1)}) altında her satıştan ortalama <strong>${formatCurrency(profitPerSale, 1)} net kâr</strong> elde edilir. Maksimum ${formatCurrency(maxCpc, 2)} TBM teklifine kadar kârlılığınız korunur.`;
    }
  }

  // 5. Render Scenarios
  // Scenario 1: Conservative (Low Bid, High Profit)
  const lowBid = maxCpc * 0.60;
  const lowCpa = targetCpa * 0.60;
  const lowProfit = breakevenCpa - lowCpa;
  if (scenarioLowBidEl) scenarioLowBidEl.textContent = formatCurrency(lowBid, 2);
  if (scenarioLowCpaEl) scenarioLowCpaEl.textContent = `~${formatCurrency(lowCpa, 1)}`;
  if (scenarioLowProfitEl) scenarioLowProfitEl.textContent = `+${formatCurrency(lowProfit, 1)}`;

  // Scenario 2: Balanced (Standard Recommended)
  const balancedBid = recommendedBid;
  const balancedCpa = targetCpa * 0.80;
  const balancedProfit = breakevenCpa - balancedCpa;
  if (scenarioBalancedBidEl) scenarioBalancedBidEl.textContent = formatCurrency(balancedBid, 2);
  if (scenarioBalancedCpaEl) scenarioBalancedCpaEl.textContent = `~${formatCurrency(balancedCpa, 1)}`;
  if (scenarioBalancedProfitEl) scenarioBalancedProfitEl.textContent = `+${formatCurrency(balancedProfit, 1)}`;

  // Scenario 3: Aggressive (High Volume / Break-even scale)
  const aggressiveBid = breakevenCpc * 0.95;
  const aggressiveCpa = breakevenCpa * 0.95;
  const aggressiveProfit = breakevenCpa - aggressiveCpa;
  if (scenarioAggressiveBidEl) scenarioAggressiveBidEl.textContent = formatCurrency(aggressiveBid, 2);
  if (scenarioAggressiveCpaEl) scenarioAggressiveCpaEl.textContent = `~${formatCurrency(aggressiveCpa, 1)}`;
  if (scenarioAggressiveProfitEl) scenarioAggressiveProfitEl.textContent = `+${formatCurrency(aggressiveProfit, 1)}`;

  // 6. Mathematical Explanation Steps
  if (mathStep1El) {
    mathStep1El.innerHTML = `<strong>1. Başabaş CPA:</strong> <code>AOV (${formatCurrency(aov, 0)}) × Kâr Marjı (%${formatPercent(margin, 0)}) = ${formatCurrency(breakevenCpa, 2)}</code> (Bu tutarın üzerinde reklam harcaması zarar ettirir).`;
  }
  if (mathStep2El) {
    mathStep2El.innerHTML = `<strong>2. Başabaş TBM (Tavan CPC):</strong> <code>Başabaş CPA (${formatCurrency(breakevenCpa, 2)}) × CR (%${formatPercent(cr, 1)}) = ${formatCurrency(breakevenCpc, 2)}</code>`;
  }
  if (mathStep3El) {
    mathStep3El.innerHTML = `<strong>3. Maksimum Kârlı TBM:</strong> <code>Hedef CPA (${formatCurrency(targetCpa, 0)}) × CR (%${formatPercent(cr, 1)}) = ${formatCurrency(maxCpc, 2)}</code> (Açık artırma tavan teklifiniz).`;
  }

  // 7. Text Report for Sharing
  currentReport = [
    'Narvals Labs — CPC ve Maksimum Teklif Raporu',
    '---------------------------------------------',
    `Hedef CPA (Edinme Maliyeti): ${formatCurrency(targetCpa, 1)}`,
    `Web Dönüşüm Oranı (CR): %${formatPercent(cr, 2)}`,
    `Ortalama Sepet Tutarı (AOV): ${formatCurrency(aov, 0)} (Kâr Marjı: %${formatPercent(margin, 0)})`,
    '---------------------------------------------',
    `Maksimum Kârlı TBM (Max CPC): ${formatCurrency(maxCpc, 2)}`,
    `Başabaş TBM (Break-Even CPC): ${formatCurrency(breakevenCpc, 2)}`,
    `1 Satış İçin Gereken Tıklama: ~${formatNumber(clicksNeeded, 0)} tıklama`,
    `Önerilen Başlangıç Teklifi: ${formatCurrency(recommendedBid, 2)}`,
    `Satış Başı Beklenen Net Kâr: ${formatCurrency(profitPerSale, 1)} (%${formatPercent(netMarginPercent, 1)})`,
    `Gereken Hedef ROAS: %${formatPercent(targetRoas, 0)} (${(targetRoas / 100).toFixed(1)}x)`
  ].join('\n');

  if (whatsappBtn) {
    const msg = encodeURIComponent(`Merhaba, Google Ads / Meta açık artırma teklif stratejisi ve kampanya yönetimi için danışmak istiyorum:\n\n${currentReport}`);
    whatsappBtn.href = `https://wa.me/905019441921?text=${msg}`;
  }
}

// Initial calculation on load
calculateLive();

// Handle Form Submit
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateLive();
    if (resultEl) {
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Copy Button
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    if (!currentReport) return;
    try {
      await navigator.clipboard.writeText(currentReport);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Rapor Kopyalandı!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    } catch {
      copyBtn.textContent = 'Kopyalanamadı';
    }
  });
}
