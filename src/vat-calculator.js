import './vat-calculator.css';

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 2
}).format(value);

const form = document.querySelector('[data-vat-form]');
const errorEl = document.querySelector('[data-vat-error]');
const resultEl = document.querySelector('[data-vat-result]');

const modeButtons = document.querySelectorAll('[data-vat-mode]');
const rateButtons = document.querySelectorAll('[data-vat-rate]');

const amountInput = document.querySelector('[name="vat_amount"]');
const rateInput = document.querySelector('[name="vat_rate_custom"]');
const tevkifatSelect = document.querySelector('[name="tevkifat_rate"]');

const netMatrahEl = document.querySelector('[data-net-matrah]');
const vatAmountEl = document.querySelector('[data-vat-amount]');
const grossTotalEl = document.querySelector('[data-gross-total]');
const payableTotalEl = document.querySelector('[data-payable-total]');

const rowMatrah = document.querySelector('[data-row-matrah]');
const rowVatTotal = document.querySelector('[data-row-vat-total]');
const rowTevkifatDeduction = document.querySelector('[data-row-tevkifat-deduction]');
const rowVatCollected = document.querySelector('[data-row-vat-collected]');
const rowGrandTotal = document.querySelector('[data-row-grand-total]');

const copyBtn = document.querySelector('[data-vat-copy]');
const whatsappBtn = document.querySelector('[data-vat-whatsapp]');

let currentMode = 'exclusive'; // 'exclusive' (hariçten dahile) or 'inclusive' (dahilden harice)
let currentRate = 20;
let currentReport = '';

modeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    modeButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentMode = btn.dataset.vatMode;
    const label = document.querySelector('[data-amount-label]');
    if (label) {
      label.textContent = currentMode === 'exclusive' ? 'KDV Hariç Tutar (Matrah · TL)' : 'KDV Dahil Toplam Tutar (TL)';
    }
    if (form) form.requestSubmit();
  });
});

rateButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    rateButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentRate = parseFloat(btn.dataset.vatRate);
    if (rateInput) rateInput.value = currentRate;
    if (form) form.requestSubmit();
  });
});

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    const amount = parseFloat(amountInput?.value);
    const rate = parseFloat(rateInput?.value) || currentRate;
    const tevkifatVal = tevkifatSelect?.value || '0';

    if (isNaN(amount) || amount <= 0 || isNaN(rate) || rate < 0) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli bir tutar ve KDV oranı girin.';
        errorEl.hidden = false;
      }
      return;
    }

    let matrah = 0;
    let totalVat = 0;
    let grossTotal = 0;

    if (currentMode === 'exclusive') {
      matrah = amount;
      totalVat = matrah * (rate / 100);
      grossTotal = matrah + totalVat;
    } else {
      grossTotal = amount;
      matrah = grossTotal / (1 + rate / 100);
      totalVat = grossTotal - matrah;
    }

    let tevkifatRatio = 0;
    if (tevkifatVal !== '0') {
      const parts = tevkifatVal.split('/');
      if (parts.length === 2) {
        tevkifatRatio = parseInt(parts[0], 10) / parseInt(parts[1], 10);
      }
    }

    const tevkifEdilenKdv = totalVat * tevkifatRatio;
    const tahsilEdilenKdv = totalVat - tevkifEdilenKdv;
    const odenecekTutar = matrah + tahsilEdilenKdv;

    if (netMatrahEl) netMatrahEl.textContent = formatCurrency(matrah);
    if (vatAmountEl) vatAmountEl.textContent = formatCurrency(totalVat);
    if (grossTotalEl) grossTotalEl.textContent = formatCurrency(grossTotal);
    if (payableTotalEl) payableTotalEl.textContent = formatCurrency(odenecekTutar);

    if (rowMatrah) rowMatrah.textContent = formatCurrency(matrah);
    if (rowVatTotal) rowVatTotal.textContent = `${formatCurrency(totalVat)} (%${rate})`;
    if (rowTevkifatDeduction) rowTevkifatDeduction.textContent = tevkifatRatio > 0 ? `-${formatCurrency(tevkifEdilenKdv)} (${tevkifatVal})` : 'Uygulanmadı';
    if (rowVatCollected) rowVatCollected.textContent = formatCurrency(tahsilEdilenKdv);
    if (rowGrandTotal) rowGrandTotal.textContent = formatCurrency(odenecekTutar);

    currentReport = [
      'Narvals Labs KDV & Fatura Hesaplama Özeti',
      `Hesaplama Modu: ${currentMode === 'exclusive' ? 'KDV Hariçten Dahile' : 'KDV Dahilden Harice'}`,
      `Matrah (KDV Hariç): ${formatCurrency(matrah)}`,
      `KDV Oranı: %${rate}`,
      `Toplam KDV Tutarı: ${formatCurrency(totalVat)}`,
      tevkifatRatio > 0 ? `Tevkifat Oranı: ${tevkifatVal} (-${formatCurrency(tevkifEdilenKdv)})` : null,
      tevkifatRatio > 0 ? `Tahsil Edilecek Net KDV: ${formatCurrency(tahsilEdilenKdv)}` : null,
      `Tahsil Edilecek Fatura Tutarı: ${formatCurrency(odenecekTutar)}`,
      `Genel Brüt Toplam: ${formatCurrency(grossTotal)}`
    ].filter(Boolean).join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, kurumsal web ve yazılım projesi için fatura / bütçe planlamamızı görüşmek istiyorum:\n\n${currentReport}`);
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
