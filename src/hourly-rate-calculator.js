import './hourly-rate-calculator.css';

const formatCurrency = (value) => new Intl.NumberFormat('tr-TR', {
  style: 'currency',
  currency: 'TRY',
  maximumFractionDigits: 0
}).format(value);

const form = document.querySelector('[data-hourly-form]');
const errorEl = document.querySelector('[data-hourly-error]');
const resultEl = document.querySelector('[data-hourly-result]');

const hourlyRateEl = document.querySelector('[data-hourly-rate]');
const dailyRateEl = document.querySelector('[data-daily-rate]');
const projectPriceEl = document.querySelector('[data-project-price]');
const annualGrossEl = document.querySelector('[data-annual-gross]');

const copyBtn = document.querySelector('[data-hourly-copy]');
const whatsappBtn = document.querySelector('[data-hourly-whatsapp]');

let currentReport = '';

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errorEl) errorEl.hidden = true;

    const formData = new FormData(form);
    const targetNet = parseFloat(formData.get('target_net'));
    const overhead = parseFloat(formData.get('monthly_overhead')) || 0;
    const taxRate = parseFloat(formData.get('tax_rate')) || 25;
    const billableHoursWeek = parseFloat(formData.get('billable_hours_week')) || 20;
    const vacationWeeks = parseFloat(formData.get('vacation_weeks')) || 4;
    const projectHours = parseFloat(formData.get('project_hours')) || 40;

    if (isNaN(targetNet) || targetNet <= 0 || isNaN(billableHoursWeek) || billableHoursWeek <= 0) {
      if (errorEl) {
        errorEl.textContent = 'Lütfen geçerli bir hedef aylık net gelir ve haftalık çalışma saati girin.';
        errorEl.hidden = false;
      }
      return;
    }

    const annualNetGoal = targetNet * 12;
    const annualOverhead = overhead * 12;
    const taxMultiplier = 1 - (taxRate / 100);
    const annualGrossNeeded = taxMultiplier > 0 ? (annualNetGoal + annualOverhead) / taxMultiplier : (annualNetGoal + annualOverhead);

    const workingWeeks = Math.max(1, 52 - vacationWeeks);
    const totalBillableHoursYear = workingWeeks * billableHoursWeek;

    const minHourlyRate = annualGrossNeeded / totalBillableHoursYear;
    const dailyRate = minHourlyRate * 7;
    const estimatedProjectPrice = minHourlyRate * projectHours;

    if (hourlyRateEl) hourlyRateEl.textContent = formatCurrency(minHourlyRate);
    if (dailyRateEl) dailyRateEl.textContent = formatCurrency(dailyRate);
    if (projectPriceEl) projectPriceEl.textContent = formatCurrency(estimatedProjectPrice);
    if (annualGrossEl) annualGrossEl.textContent = formatCurrency(annualGrossNeeded);

    currentReport = [
      'Narvals Labs Saatlik Ücret ve Proje Fiyatı Raporu',
      `Hedef Aylık Net Gelir: ${formatCurrency(targetNet)}`,
      `Aylık Sabit Gider: ${formatCurrency(overhead)}`,
      `Gereken Yıllık Brüt Gelir: ${formatCurrency(annualGrossNeeded)}`,
      `Yıllık Faturalandırılabilir Süre: ${totalBillableHoursYear} saat (${workingWeeks} hafta)`,
      `Önerilen Minimum Saatlik Ücret: ${formatCurrency(minHourlyRate)} / saat`,
      `Önerilen Günlük Ücret (7 saat): ${formatCurrency(dailyRate)} / gün`,
      `${projectHours} Saatlik Örnek Proje Bedeli: ${formatCurrency(estimatedProjectPrice)}`
    ].join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, kurumsal web tasarımı ve yazılım projesi için kapsam ve bütçe planlaması yapmak istiyorum:\n\n${currentReport}`);
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
