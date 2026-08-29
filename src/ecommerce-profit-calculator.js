import './ecommerce-profit-calculator.css';

const formatPercent = (value) => new Intl.NumberFormat('tr-TR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
}).format(value);

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 1
}).format(value);

const form = document.querySelector('[data-ecom-form]');
const errorEl = document.querySelector('[data-ecom-error]');
const resultEl = document.querySelector('[data-ecom-result]');

const netProfitEl = document.querySelector('[data-net-profit]');
const netMarginEl = document.querySelector('[data-net-margin]');
const breakevenPriceEl = document.querySelector('[data-breakeven-price]');
const roiEl = document.querySelector('[data-roi]');
const commissionDeductionEl = document.querySelector('[data-commission-deduction]');

const copyBtn = document.querySelector('[data-ecom-copy]');
const whatsappBtn = document.querySelector('[data-ecom-whatsapp]');
const presetButtons = document.querySelectorAll('[data-ecom-preset]');

const commissionInput = document.querySelector('[name="commission_rate"]');

presetButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const rate = btn.dataset.ecomPreset;
    if (commissionInput && rate) {
      commissionInput.value = rate;
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
    const price = parseFloat(formData.get('selling_price'));
    const cost = parseFloat(formData.get('cost_price'));
    const commRate = parseFloat(formData.get('commission_rate'));
    const shipping = parseFloat(formData.get('shipping_cost')) || 0;
    const packaging = parseFloat(formData.get('packaging_cost')) || 0;
    const returnRate = parseFloat(formData.get('return_rate')) || 0;

    if (isNaN(price) || price <= 0 || isNaN(cost) || cost <= 0 || isNaN(commRate) || commRate < 0) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli satış fiyatı, alış maliyeti ve komisyon oranı girin.';
        errorEl.hidden = false;
      }
      return;
    }

    const commissionTotal = price * (commRate / 100) * 1.20; // 20% commission VAT added
    const expectedReturnLoss = (returnRate / 100) * (shipping * 2 + packaging);
    const totalDeductions = cost + commissionTotal + shipping + packaging + expectedReturnLoss;
    const netProfit = price - totalDeductions;
    const netMargin = (netProfit / price) * 100;
    const roi = totalDeductions > 0 ? (netProfit / totalDeductions) * 100 : 0;

    const denom = 1 - (commRate / 100 * 1.20);
    const breakevenPrice = denom > 0 ? (cost + shipping + packaging + expectedReturnLoss) / denom : cost;

    if (netProfitEl) {
      netProfitEl.textContent = formatCurrency(netProfit);
      netProfitEl.style.color = netProfit >= 0 ? 'var(--accent-dark, #00a870)' : '#b91c1c';
    }
    if (netMarginEl) netMarginEl.textContent = `%${formatPercent(netMargin)}`;
    if (breakevenPriceEl) breakevenPriceEl.textContent = formatCurrency(breakevenPrice);
    if (roiEl) roiEl.textContent = `%${formatPercent(roi)}`;
    if (commissionDeductionEl) commissionDeductionEl.textContent = formatCurrency(commissionTotal);

    currentReport = [
      'Narvals Labs E-Ticaret Net Kâr Özeti',
      `Satış Fiyatı: ${formatCurrency(price)}`,
      `Ürün Maliyeti: ${formatCurrency(cost)}`,
      `Komisyon Kesintisi (KDV Dahil): ${formatCurrency(commissionTotal)} (%${formatPercent(commRate)})`,
      `Kargo & Paketleme: ${formatCurrency(shipping + packaging)}`,
      `İade Risk Payı (%${formatPercent(returnRate)}): ${formatCurrency(expectedReturnLoss)}`,
      `Net Kâr: ${formatCurrency(netProfit)} (Net Marj: %${formatPercent(netMargin)})`,
      `Minimum Başabaş Satış Fiyatı: ${formatCurrency(breakevenPrice)}`
    ].join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, e-ticaret kârlılık analizimi paylaşıp kendi bağımsız e-ticaret sitemi kurmak için görüşmek istiyorum:\n\n${currentReport}`);
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
