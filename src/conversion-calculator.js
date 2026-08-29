import './conversion-calculator.css';

const form = document.querySelector('[data-conversion-form]');

if (form) {
  const result = document.querySelector('[data-conversion-result]');
  const error = form.querySelector('[data-conversion-error]');
  const formatPercent = (value) => `%${value.toLocaleString('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}`;
  const formatNumber = (value) => value.toLocaleString('tr-TR', { maximumFractionDigits: 1 });
  const formatMoney = (value) => `${Math.round(value).toLocaleString('tr-TR')} TL`;
  let summary = '';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const sessions = Number(data.get('sessions'));
    const leads = Number(data.get('leads'));
    const customers = Number(data.get('customers'));
    const value = Number(data.get('value')) || 0;

    const message = !Number.isFinite(sessions) || sessions < 1
      ? 'Oturum sayısı en az 1 olmalıdır.'
      : leads < 0 || leads > sessions
        ? 'Nitelikli talep sayısı 0 ile oturum sayısı arasında olmalıdır.'
        : customers < 0 || customers > leads
          ? 'Müşteri sayısı 0 ile nitelikli talep sayısı arasında olmalıdır.'
          : value < 0 ? 'Müşteri değeri negatif olamaz.' : '';

    if (message) {
      error.textContent = message;
      error.hidden = false;
      result.hidden = true;
      return;
    }

    error.hidden = true;
    const leadRate = (leads / sessions) * 100;
    const closeRate = leads ? customers / leads : 0;
    const customerRate = (customers / sessions) * 100;
    document.querySelector('[data-lead-rate]').textContent = formatPercent(leadRate);
    document.querySelector('[data-close-rate]').textContent = formatPercent(closeRate * 100);
    document.querySelector('[data-customer-rate]').textContent = formatPercent(customerRate);

    const scenarioWrap = document.querySelector('[data-scenarios]');
    const scenarios = [0.5, 1].map((lift) => {
      const targetRate = leadRate + lift;
      const targetLeads = sessions * targetRate / 100;
      const extraLeads = Math.max(0, targetLeads - leads);
      const extraCustomers = extraLeads * closeRate;
      return { lift, targetRate, targetLeads, extraLeads, extraCustomers, extraValue: extraCustomers * value };
    });

    scenarioWrap.innerHTML = scenarios.map((scenario) => `<article><span>+${scenario.lift.toLocaleString('tr-TR')} yüzde puan</span><strong>${formatPercent(scenario.targetRate)}</strong><dl><div><dt>Toplam olası talep</dt><dd>${formatNumber(scenario.targetLeads)}</dd></div><div><dt>Ek talep</dt><dd>+${formatNumber(scenario.extraLeads)}</dd></div><div><dt>Ek müşteri senaryosu</dt><dd>+${formatNumber(scenario.extraCustomers)}</dd></div>${value ? `<div><dt>Ek değer senaryosu</dt><dd>${formatMoney(scenario.extraValue)}</dd></div>` : ''}</dl></article>`).join('');

    summary = [
      'Narvals Labs — Web sitesi dönüşüm özeti',
      `Oturum: ${formatNumber(sessions)}`,
      `Nitelikli talep: ${formatNumber(leads)}`,
      `Müşteri: ${formatNumber(customers)}`,
      `Talep oranı: ${formatPercent(leadRate)}`,
      `Kapatma oranı: ${formatPercent(closeRate * 100)}`,
      `Ziyaretten müşteri oranı: ${formatPercent(customerRate)}`,
      ...scenarios.map((scenario) => `+${scenario.lift.toLocaleString('tr-TR')} puan senaryosu: ${formatNumber(scenario.extraLeads)} ek talep, ${formatNumber(scenario.extraCustomers)} ek müşteri${value ? `, ${formatMoney(scenario.extraValue)} ek değer` : ''}`),
      'Not: Senaryo tahmin veya garanti değildir.'
    ].join('\n');

    const whatsapp = document.querySelector('[data-conversion-whatsapp]');
    whatsapp.href = `https://wa.me/905019441921?text=${encodeURIComponent(`${summary}\n\nBu dönüşüm yolundaki darboğazı birlikte incelemek istiyorum.`)}`;
    result.hidden = false;
    result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });

  document.querySelector('[data-conversion-copy]')?.addEventListener('click', async (event) => {
    await navigator.clipboard.writeText(summary);
    event.currentTarget.textContent = 'Özet kopyalandı';
  });
}
