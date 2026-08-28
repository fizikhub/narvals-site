// Narvals Labs — İnteraktif Proje Kapsam ve Maliyet Hesaplayıcı Mantığı

export function initCalculator() {
  const root = document.querySelector('#proje-hesaplayici');
  if (!root) return;

  const steps = [...root.querySelectorAll('.calc-step')];
  const progressSteps = [...root.querySelectorAll('.calc-progress__step')];
  const btnNext = root.querySelector('[data-calc-next]');
  const btnPrev = root.querySelector('[data-calc-prev]');
  const btnReset = root.querySelector('[data-calc-reset]');
  const btnWhatsapp = root.querySelector('[data-calc-whatsapp]');
  const btnContact = root.querySelector('[data-calc-contact]');
  const featureContainers = [...root.querySelectorAll('[data-calc-feature-group]')];

  let currentStep = 1;

  const state = {
    service: 'web',
    serviceName: 'Kurumsal Web Tasarım & UX',
    features: [],
    featureLabels: [],
    timeline: 'standard',
    timelineLabel: 'Standart Planlama (2–4 Hafta)',
    maintenance: false
  };

  const serviceData = {
    web: {
      name: 'Kurumsal Web Tasarım & UX',
      baseWeeks: 2,
      tier: 'Büyüme Odaklı Web',
      architecture: 'Mobil öncelikli statik HTML/JS + Modern CSS + Teknik SEO'
    },
    ecommerce: {
      name: 'E-Ticaret Sitesi Geliştirme',
      baseWeeks: 3,
      tier: 'Özel E-Ticaret Sistemi',
      architecture: 'Katalog + Sepet/Ödeme + CAPI Ölçüm + Hızlı Arayüz'
    },
    software: {
      name: 'İşletmeye Özel Yazılım & Panel',
      baseWeeks: 4,
      tier: 'Özel İşletme Otomasyonu',
      architecture: 'Özel Yönetim Paneli + Rol Tabanlı Yetki + REST API'
    },
    ads: {
      name: 'Meta & Google Reklam Yönetimi',
      baseWeeks: 1,
      tier: 'Dönüşüm Odaklı Medya Yönetimi',
      architecture: 'Kampanya Mimarisi + Kreatif Strateji + CAPI Entegrasyonu'
    },
    qrmenu: {
      name: 'QR Menü & Rezervasyon Sistemi',
      baseWeeks: 2,
      tier: 'İşletme Menü & Masa Sistemi',
      architecture: 'Hızlı Mobil Menü + Yönetim Paneli + Masa Rezervasyon Motoru'
    },
    hybrid: {
      name: 'Uçtan Uca Büyüme (Web + Panel + Reklam)',
      baseWeeks: 5,
      tier: 'Tam Entegre Dijital Altyapı',
      architecture: 'Web/UX + Özel İşletme Paneli + Meta/Google Reklam + CAPI'
    }
  };

  function updateProgress() {
    progressSteps.forEach((stepEl, idx) => {
      const stepNum = idx + 1;
      stepEl.classList.toggle('is-active', stepNum === currentStep);
      stepEl.classList.toggle('is-completed', stepNum < currentStep);
    });
  }

  function showStep(stepNum) {
    currentStep = stepNum;
    steps.forEach((s) => s.classList.toggle('is-active', Number(s.dataset.step) === currentStep));
    updateProgress();

    if (btnPrev) {
      btnPrev.style.display = currentStep > 1 && currentStep < 4 ? 'inline-flex' : 'none';
    }
    if (btnNext) {
      btnNext.style.display = currentStep < 4 ? 'inline-flex' : 'none';
    }

    if (currentStep === 2) {
      // Show only relevant features for selected service
      featureContainers.forEach((fc) => {
        const matches = fc.dataset.calcFeatureGroup === state.service || fc.dataset.calcFeatureGroup === 'all';
        fc.style.display = matches ? 'block' : 'none';
      });
    }

    if (currentStep === 4) {
      calculateAndRenderResults();
    }

    if (currentStep > 1) {
      root.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function syncServiceSelection() {
    const selectedRadio = root.querySelector('input[name="calc-service"]:checked');
    if (selectedRadio) {
      state.service = selectedRadio.value;
      state.serviceName = serviceData[state.service]?.name || selectedRadio.value;
    }
  }

  function syncFeatureSelection() {
    const selectedBoxes = [...root.querySelectorAll('input[data-calc-feature]:checked')];
    state.features = selectedBoxes.map((b) => b.value);
    state.featureLabels = selectedBoxes.map((b) => {
      const card = b.closest('.calc-card');
      return card?.querySelector('.calc-card__name')?.textContent?.trim() || b.value;
    });
  }

  function syncTimelineSelection() {
    const selectedRadio = root.querySelector('input[name="calc-timeline"]:checked');
    if (selectedRadio) {
      state.timeline = selectedRadio.value;
      const card = selectedRadio.closest('.calc-card');
      state.timelineLabel = card?.querySelector('.calc-card__name')?.textContent?.trim() || selectedRadio.value;
    }
    const maintenanceBox = root.querySelector('input[name="calc-maintenance"]');
    state.maintenance = Boolean(maintenanceBox?.checked);
  }

  function calculateAndRenderResults() {
    syncServiceSelection();
    syncFeatureSelection();
    syncTimelineSelection();

    const info = serviceData[state.service] || serviceData.web;
    let totalWeeks = info.baseWeeks;

    // Additional weeks per feature
    if (state.features.length >= 3) totalWeeks += 1;
    if (state.features.length >= 5) totalWeeks += 1;

    let timelineText = `${totalWeeks}–${totalWeeks + 2} Hafta`;
    if (state.timeline === 'fast') {
      timelineText = `${Math.max(1, totalWeeks - 1)}–${totalWeeks} Hafta (Hızlı MVP)`;
    }

    // Render Stats
    const valScope = root.querySelector('[data-result-scope]');
    const valDuration = root.querySelector('[data-result-duration]');
    const valArch = root.querySelector('[data-result-arch]');
    const listEl = root.querySelector('[data-result-list]');

    if (valScope) valScope.textContent = info.tier;
    if (valDuration) valDuration.textContent = timelineText;
    if (valArch) valArch.textContent = info.architecture;

    if (listEl) {
      listEl.innerHTML = '';
      const allItems = [
        `Ana Hizmet: ${state.serviceName}`,
        ...state.featureLabels,
        `Öncelik: ${state.timelineLabel}`,
        ...(state.maintenance ? ['Yayın Sonrası Düzenli Destek & Bakım'] : [])
      ];

      allItems.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;
        listEl.appendChild(li);
      });
    }

    // Prepare WhatsApp Message
    const waFeatures = state.featureLabels.length
      ? state.featureLabels.map((l) => `  • ${l}`).join('\n')
      : '  • Standart Çekirdek Kapsam';

    const waText = [
      'Merhaba Narvals Labs ekibi,',
      'Web sitenizdeki Proje Kapsam Hesaplayıcı üzerinden bir ön talep oluşturdum:',
      '',
      `📌 Ana Hizmet: ${state.serviceName}`,
      '🧩 Tercih Edilen Modüller:',
      waFeatures,
      `⏱️ Süreç & Zamanlama: ${state.timelineLabel}`,
      state.maintenance ? '🛠️ Ek Hizmet: Yayın Sonrası Sürekli Destek' : '',
      `🎯 Öngörülen Takvim: ${timelineText}`,
      '',
      'Bu kapsam için proje detaylarını ve teklifi görüşmek istiyorum.'
    ].filter(Boolean).join('\n');

    if (btnWhatsapp) {
      btnWhatsapp.href = `https://wa.me/905019441921?text=${encodeURIComponent(waText)}`;
    }

    if (btnContact) {
      btnContact.href = `/iletisim/?service=${encodeURIComponent(state.service)}&scope=${encodeURIComponent(state.features.join(','))}`;
    }
  }

  // Event Listeners
  root.addEventListener('change', (e) => {
    const card = e.target.closest('.calc-card');
    if (!card) return;

    if (e.target.type === 'radio') {
      const groupName = e.target.name;
      root.querySelectorAll(`input[name="${groupName}"]`).forEach((input) => {
        input.closest('.calc-card')?.classList.remove('is-selected');
      });
      card.classList.add('is-selected');
    } else if (e.target.type === 'checkbox') {
      card.classList.toggle('is-selected', e.target.checked);
    }
  });

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (currentStep === 1) syncServiceSelection();
      if (currentStep === 2) syncFeatureSelection();
      if (currentStep === 3) syncTimelineSelection();
      if (currentStep < 4) showStep(currentStep + 1);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (currentStep > 1) showStep(currentStep - 1);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      showStep(1);
    });
  }

  // Initialize first step visual state
  showStep(1);
}
