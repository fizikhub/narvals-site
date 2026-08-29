import './crawl-budget-calculator.css';

const form = document.querySelector('[data-cbc-form]');

if (form) {
  // Elements
  const urlCountInput = form.querySelector('[name="url_count"]');
  const urlCountRange = form.querySelector('[data-range="url_count"]');
  
  const updatedCountInput = form.querySelector('[name="updated_count"]');
  const updatedCountRange = form.querySelector('[data-range="updated_count"]');
  
  const ttfbInput = form.querySelector('[name="ttfb"]');
  const ttfbRange = form.querySelector('[data-range="ttfb"]');
  const ttfbTag = form.querySelector('[data-ttfb-tag]');
  
  const htmlSizeInput = form.querySelector('[name="html_size"]');
  const htmlSizeRange = form.querySelector('[data-range="html_size"]');
  const htmlSizeTag = form.querySelector('[data-size-tag]');
  
  const renderRadios = [...form.querySelectorAll('[name="render_type"]')];
  
  const status200Input = form.querySelector('[name="status_200"]');
  const status304Input = form.querySelector('[name="status_304"]');
  const status3xxInput = form.querySelector('[name="status_3xx"]');
  const status404Input = form.querySelector('[name="status_404"]');
  const status5xxInput = form.querySelector('[name="status_5xx"]');
  
  const distTotalEl = form.querySelector('[data-dist-total]');
  const distWarningEl = form.querySelector('[data-dist-warning]');
  const seg200 = form.querySelector('[data-seg="200"]');
  const seg304 = form.querySelector('[data-seg="304"]');
  const seg3xx = form.querySelector('[data-seg="3xx"]');
  const seg404 = form.querySelector('[data-seg="404"]');
  const seg5xx = form.querySelector('[data-seg="5xx"]');

  // Preset Buttons
  const presetButtons = [...document.querySelectorAll('[data-preset]')];

  // Result Elements
  const resultSection = document.querySelector('[data-cbc-result]');
  const scoreNumberEl = document.querySelector('[data-cbc-score]');
  const scoreBadgeEl = document.querySelector('[data-cbc-score-badge]');
  const scoreHeadingEl = document.querySelector('[data-cbc-status-heading]');
  const scoreDescEl = document.querySelector('[data-cbc-status-desc]');
  
  const metricCrawlDailyEl = document.querySelector('[data-metric-crawl-daily]');
  const metricCrawlMonthlyEl = document.querySelector('[data-metric-crawl-monthly]');
  const metricWastePercentEl = document.querySelector('[data-metric-waste-pct]');
  const metricWasteDailyEl = document.querySelector('[data-metric-waste-daily]');
  const metricUsefulDailyEl = document.querySelector('[data-metric-useful-daily]');
  const metricCycleTimeEl = document.querySelector('[data-metric-cycle-time]');
  const metricUpdateCoverageEl = document.querySelector('[data-metric-update-cov]');
  
  const waste404El = document.querySelector('[data-waste-404]');
  const waste3xxEl = document.querySelector('[data-waste-3xx]');
  const waste5xxEl = document.querySelector('[data-waste-5xx]');
  const wasteCsrEl = document.querySelector('[data-waste-csr]');
  const wasteCacheEl = document.querySelector('[data-waste-cache]');
  
  const recContainer = document.querySelector('[data-cbc-recommendations]');
  const copyBtn = document.querySelector('[data-cbc-copy]');
  const printBtn = document.querySelector('[data-cbc-print]');
  const waLink = document.querySelector('[data-cbc-whatsapp]');

  // Presets Data
  const presets = {
    corporate: {
      url_count: 1500,
      updated_count: 20,
      ttfb: 180,
      html_size: 45,
      render_type: 'ssr',
      status_200: 92,
      status_304: 5,
      status_3xx: 2,
      status_404: 1,
      status_5xx: 0
    },
    ecommerce: {
      url_count: 75000,
      updated_count: 2500,
      ttfb: 650,
      html_size: 180,
      render_type: 'ssr',
      status_200: 78,
      status_304: 2,
      status_3xx: 12,
      status_404: 6,
      status_5xx: 2
    },
    spa: {
      url_count: 15000,
      updated_count: 300,
      ttfb: 850,
      html_size: 280,
      render_type: 'csr',
      status_200: 85,
      status_304: 0,
      status_3xx: 8,
      status_404: 5,
      status_5xx: 2
    },
    edge: {
      url_count: 40000,
      updated_count: 1000,
      ttfb: 80,
      html_size: 35,
      render_type: 'ssr',
      status_200: 90,
      status_304: 8,
      status_3xx: 1,
      status_404: 1,
      status_5xx: 0
    }
  };

  // Sync Slider and Number Input helper
  const linkInputs = (numInput, rangeInput, onUpdate) => {
    if (!numInput || !rangeInput) return;
    numInput.addEventListener('input', () => {
      rangeInput.value = numInput.value;
      if (onUpdate) onUpdate();
      calculate();
    });
    rangeInput.addEventListener('input', () => {
      numInput.value = rangeInput.value;
      if (onUpdate) onUpdate();
      calculate();
    });
  };

  // Update Status Badges for TTFB and HTML Size
  const updateTTFBTag = () => {
    const val = Number.parseFloat(ttfbInput.value) || 0;
    if (!ttfbTag) return;
    if (val <= 200) {
      ttfbTag.textContent = 'Mükemmel (<200ms)';
      ttfbTag.className = 'cbc-status-tag cbc-status-tag--good';
    } else if (val <= 600) {
      ttfbTag.textContent = 'Kabul Edilebilir (200-600ms)';
      ttfbTag.className = 'cbc-status-tag cbc-status-tag--good';
    } else if (val <= 1200) {
      ttfbTag.textContent = 'Yavaş (600-1200ms)';
      ttfbTag.className = 'cbc-status-tag cbc-status-tag--fair';
    } else {
      ttfbTag.textContent = 'Kritik Yavaş (>1200ms)';
      ttfbTag.className = 'cbc-status-tag cbc-status-tag--poor';
    }
  };

  const updateSizeTag = () => {
    const val = Number.parseFloat(htmlSizeInput.value) || 0;
    if (!htmlSizeTag) return;
    if (val <= 50) {
      htmlSizeTag.textContent = 'Hafif & Optimize (<50KB)';
      htmlSizeTag.className = 'cbc-status-tag cbc-status-tag--good';
    } else if (val <= 150) {
      htmlSizeTag.textContent = 'Normal (50-150KB)';
      htmlSizeTag.className = 'cbc-status-tag cbc-status-tag--good';
    } else if (val <= 300) {
      htmlSizeTag.textContent = 'Ağır (150-300KB)';
      htmlSizeTag.className = 'cbc-status-tag cbc-status-tag--fair';
    } else {
      htmlSizeTag.textContent = 'Aşırı Yüklü (>300KB)';
      htmlSizeTag.className = 'cbc-status-tag cbc-status-tag--poor';
    }
  };

  linkInputs(urlCountInput, urlCountRange);
  linkInputs(updatedCountInput, updatedCountRange);
  linkInputs(ttfbInput, ttfbRange, updateTTFBTag);
  linkInputs(htmlSizeInput, htmlSizeRange, updateSizeTag);

  // Render type change listener
  renderRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      renderRadios.forEach((r) => {
        const card = r.closest('.cbc-render-card');
        if (card) card.classList.toggle('active', r.checked);
      });
      calculate();
    });
  });

  // Status code change listeners
  const statusInputs = [status200Input, status304Input, status3xxInput, status404Input, status5xxInput];
  statusInputs.forEach((inp) => {
    if (inp) {
      inp.addEventListener('input', () => {
        updateDistributionBar();
        calculate();
      });
    }
  });

  const updateDistributionBar = () => {
    const s200 = Math.max(0, Number.parseFloat(status200Input?.value) || 0);
    const s304 = Math.max(0, Number.parseFloat(status304Input?.value) || 0);
    const s3xx = Math.max(0, Number.parseFloat(status3xxInput?.value) || 0);
    const s404 = Math.max(0, Number.parseFloat(status404Input?.value) || 0);
    const s5xx = Math.max(0, Number.parseFloat(status5xxInput?.value) || 0);
    
    const total = s200 + s304 + s3xx + s404 + s5xx;
    if (distTotalEl) {
      distTotalEl.textContent = `%${total.toFixed(0)}`;
      distTotalEl.style.color = Math.abs(total - 100) < 0.1 ? 'var(--ocean-metal)' : '#dc2626';
    }

    if (distWarningEl) {
      if (Math.abs(total - 100) >= 0.5) {
        distWarningEl.textContent = `Toplam oran %100 olmalıdır (Şu an: %${total.toFixed(0)}).`;
        distWarningEl.hidden = false;
      } else {
        distWarningEl.hidden = true;
      }
    }

    const scale = total > 0 ? (100 / total) : 0;
    if (seg200) seg200.style.width = `${s200 * scale}%`;
    if (seg304) seg304.style.width = `${s304 * scale}%`;
    if (seg3xx) seg3xx.style.width = `${s3xx * scale}%`;
    if (seg404) seg404.style.width = `${s404 * scale}%`;
    if (seg5xx) seg5xx.style.width = `${s5xx * scale}%`;
  };

  // Apply Preset
  const applyPreset = (presetKey) => {
    const data = presets[presetKey];
    if (!data) return;

    if (urlCountInput) urlCountInput.value = data.url_count;
    if (urlCountRange) urlCountRange.value = data.url_count;
    if (updatedCountInput) updatedCountInput.value = data.updated_count;
    if (updatedCountRange) updatedCountRange.value = data.updated_count;
    if (ttfbInput) ttfbInput.value = data.ttfb;
    if (ttfbRange) ttfbRange.value = data.ttfb;
    if (htmlSizeInput) htmlSizeInput.value = data.html_size;
    if (htmlSizeRange) htmlSizeRange.value = data.html_size;

    renderRadios.forEach((r) => {
      r.checked = (r.value === data.render_type);
      const card = r.closest('.cbc-render-card');
      if (card) card.classList.toggle('active', r.checked);
    });

    if (status200Input) status200Input.value = data.status_200;
    if (status304Input) status304Input.value = data.status_304;
    if (status3xxInput) status3xxInput.value = data.status_3xx;
    if (status404Input) status404Input.value = data.status_404;
    if (status5xxInput) status5xxInput.value = data.status_5xx;

    presetButtons.forEach((btn) => {
      const isActive = btn.getAttribute('data-preset') === presetKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    updateTTFBTag();
    updateSizeTag();
    updateDistributionBar();
    calculate();
  };

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = btn.getAttribute('data-preset');
      applyPreset(p);
    });
  });

  // Calculation Engine
  const calculate = () => {
    const urlCount = Math.max(10, Number.parseFloat(urlCountInput?.value) || 1000);
    const updatedCount = Math.max(0, Number.parseFloat(updatedCountInput?.value) || 0);
    const ttfb = Math.max(20, Number.parseFloat(ttfbInput?.value) || 200);
    const htmlSize = Math.max(5, Number.parseFloat(htmlSizeInput?.value) || 50);
    
    const selectedRender = renderRadios.find((r) => r.checked)?.value || 'ssr';
    
    const p200 = Math.max(0, Number.parseFloat(status200Input?.value) || 0);
    const p304 = Math.max(0, Number.parseFloat(status304Input?.value) || 0);
    const p3xx = Math.max(0, Number.parseFloat(status3xxInput?.value) || 0);
    const p404 = Math.max(0, Number.parseFloat(status404Input?.value) || 0);
    const p5xx = Math.max(0, Number.parseFloat(status5xxInput?.value) || 0);

    // Normalize Status Codes if needed
    const rawTotal = p200 + p304 + p3xx + p404 + p5xx;
    const factor = rawTotal > 0 ? (100 / rawTotal) : 1;
    const n200 = p200 * factor;
    const n304 = p304 * factor;
    const n3xx = p3xx * factor;
    const n404 = p404 * factor;
    const n5xx = p5xx * factor;

    // 1. Base Theoretical Crawl Demand
    // Logarithmic scaling with site size + active update booster
    const baseDemand = Math.max(250, Math.round((urlCount ** 0.72) * 12 + (updatedCount * 2.2)));

    // 2. Multipliers
    // TTFB Multiplier (Googlebot Host Load constraint)
    let mTtfb = 1.0;
    if (ttfb <= 200) {
      mTtfb = 1.25;
    } else if (ttfb <= 500) {
      mTtfb = 1.25 - 0.35 * ((ttfb - 200) / 300);
    } else if (ttfb <= 1000) {
      mTtfb = 0.90 - 0.40 * ((ttfb - 500) / 500);
    } else {
      mTtfb = Math.max(0.18, 0.50 - 0.32 * Math.min(1, (ttfb - 1000) / 1000));
    }

    // HTML Size Multiplier
    let mSize = 1.0;
    if (htmlSize <= 50) {
      mSize = 1.15;
    } else if (htmlSize <= 150) {
      mSize = 1.15 - 0.25 * ((htmlSize - 50) / 100);
    } else if (htmlSize <= 300) {
      mSize = 0.90 - 0.30 * ((htmlSize - 150) / 150);
    } else {
      mSize = Math.max(0.35, 0.60 - 0.25 * Math.min(1, (htmlSize - 300) / 300));
    }

    // Rendering Multiplier
    let mRender = 1.0;
    if (selectedRender === 'ssr') mRender = 1.0;
    else if (selectedRender === 'hybrid') mRender = 0.85;
    else if (selectedRender === 'csr') mRender = 0.38;

    // 5xx Server Error Penalty (Host Load Backoff)
    let m5xx = 1.0;
    if (n5xx === 0) {
      m5xx = 1.0;
    } else if (n5xx <= 2) {
      m5xx = 1.0 - (n5xx * 0.15);
    } else {
      m5xx = Math.max(0.12, 0.70 - ((n5xx - 2) * 0.06));
    }

    // Daily Crawl Capacity
    const crawlDaily = Math.max(50, Math.round(baseDemand * mTtfb * mSize * mRender * m5xx));
    const crawlMonthly = crawlDaily * 30;

    // 3. Wastage Calculation (%)
    let directWastePct = (n404 * 1.0) + (n3xx * 0.75) + (n5xx * 1.0);
    let structuralWastePct = 0;
    if (selectedRender === 'csr') structuralWastePct += 18;
    if (ttfb > 800) structuralWastePct += Math.min(12, ((ttfb - 800) / 100) * 1.5);
    if (n304 < 3) structuralWastePct += 4; // Cache validation deficit

    let totalWastePct = Math.min(96, Math.max(1, directWastePct + structuralWastePct));
    let wastedDailyRequests = Math.round(crawlDaily * (totalWastePct / 100));
    let usefulDailyRequests = Math.max(10, crawlDaily - wastedDailyRequests);

    // 4. Crawl Efficiency Score (0-100)
    // TTFB score (25 pts)
    const ttfbScore = 25 * Math.max(0, Math.min(1, 1 - (ttfb - 100) / 1200));
    
    // Status distribution score (30 pts)
    let statusScore = 30 * ((n200 + 0.95 * n304) / 100) - (n5xx * 1.8) - (n404 * 0.9) - (n3xx * 0.5);
    statusScore = Math.max(0, Math.min(30, statusScore));
    
    // Render architecture score (25 pts)
    const renderScore = selectedRender === 'ssr' ? 25 : (selectedRender === 'hybrid' ? 20 : 8);
    
    // HTML Size score (20 pts)
    const sizeScore = 20 * Math.max(0, Math.min(1, 1 - (htmlSize - 30) / 300));
    
    let totalScore = Math.round(ttfbScore + statusScore + renderScore + sizeScore);
    totalScore = Math.max(5, Math.min(100, totalScore));

    // 5. Site Coverage Time & Update Lag
    const cycleDays = (urlCount / usefulDailyRequests).toFixed(1);
    const updateCoverageRatio = updatedCount > 0 ? Math.min(100, Math.round((usefulDailyRequests / updatedCount) * 100)) : 100;

    // Detailed Wastage Items
    const waste404Count = Math.round(crawlDaily * (n404 / 100));
    const waste3xxCount = Math.round(crawlDaily * ((n3xx * 0.75) / 100));
    const waste5xxCount = Math.round(crawlDaily * (n5xx / 100));
    const wasteCsrCount = selectedRender === 'csr' ? Math.round(crawlDaily * 0.18) : 0;
    const wasteCacheCount = n304 < 3 ? Math.round(crawlDaily * 0.04) : 0;

    // Update UI Elements
    if (scoreNumberEl) scoreNumberEl.textContent = totalScore;
    
    if (scoreBadgeEl) {
      scoreBadgeEl.className = 'cbc-score-badge';
      if (totalScore >= 85) scoreBadgeEl.classList.add('cbc-score-badge--excellent');
      else if (totalScore >= 70) scoreBadgeEl.classList.add('cbc-score-badge--good');
      else if (totalScore >= 50) scoreBadgeEl.classList.add('cbc-score-badge--fair');
      else scoreBadgeEl.classList.add('cbc-score-badge--poor');
    }

    if (scoreHeadingEl && scoreDescEl) {
      if (totalScore >= 85) {
        scoreHeadingEl.textContent = 'Mükemmel Taranabilirlik & Yüksek Kapasite';
        scoreDescEl.textContent = 'Sunucu yanıt süreleriniz ve teknik mimariniz Googlebot için ideal seviyede. Bot istekleri minimum israfla doğrudan faydalı içeriğe ulaşıyor.';
      } else if (totalScore >= 70) {
        scoreHeadingEl.textContent = 'İyi Seviye — Küçük İyileştirmeler Gerekiyor';
        scoreDescEl.textContent = 'Tarama bütçeniz genel olarak verimli kullanılıyor; ancak yönlendirmeler veya hafif sunucu gecikmeleri nedeniyle %' + Math.round(totalWastePct) + ' oranında potansiyel israf mevcut.';
      } else if (totalScore >= 50) {
        scoreHeadingEl.textContent = 'Orta Seviye — Ciddi Tarama Darboğazı';
        scoreDescEl.textContent = 'Yavaş TTFB, render yükü veya hatalı durum kodları Googlebot tarama kapasitenizi kısıtlıyor. Yeni içeriklerinizin dizine eklenmesinde gecikmeler yaşanabilir.';
      } else {
        scoreHeadingEl.textContent = 'Kritik Tarama İsrafı & Host Backoff Riski';
        scoreDescEl.textContent = 'Sunucu hataları (5xx), aşırı yavaş yanıt süreleri veya ağır CSR yapısı Googlebot\'u yavaşlatıyor. Tarama bütçenizin büyük kısmı boşa harcanıyor.';
      }
    }

    // Format numbers
    const fmt = (n) => new Intl.NumberFormat('tr-TR').format(n);

    if (metricCrawlDailyEl) metricCrawlDailyEl.textContent = `${fmt(crawlDaily)} istek`;
    if (metricCrawlMonthlyEl) metricCrawlMonthlyEl.textContent = `Aylık ~${fmt(crawlMonthly)} bot isteği`;
    
    if (metricWastePercentEl) metricWastePercentEl.textContent = `%${totalWastePct.toFixed(1)}`;
    if (metricWasteDailyEl) metricWasteDailyEl.textContent = `Günlük ~${fmt(wastedDailyRequests)} boşa giden istek`;
    
    if (metricUsefulDailyEl) metricUsefulDailyEl.textContent = `${fmt(usefulDailyRequests)} sayfa/gün`;
    
    if (metricCycleTimeEl) {
      metricCycleTimeEl.textContent = `${cycleDays} gün`;
    }
    
    if (metricUpdateCoverageEl) {
      if (updatedCount === 0) {
        metricUpdateCoverageEl.textContent = '%100 (Dinamik güncelleme yok)';
      } else if (updateCoverageRatio >= 100) {
        metricUpdateCoverageEl.textContent = `%100 (Günlük ${fmt(updatedCount)} güncelleme anında karşılanıyor)`;
      } else {
        metricUpdateCoverageEl.textContent = `%${updateCoverageRatio} (Tarama Gecikmesi Riski!)`;
      }
    }

    if (waste404El) waste404El.textContent = `${fmt(waste404Count)} istek/gün (%${n404.toFixed(1)})`;
    if (waste3xxEl) waste3xxEl.textContent = `${fmt(waste3xxCount)} istek/gün (%${n3xx.toFixed(1)})`;
    if (waste5xxEl) waste5xxEl.textContent = `${fmt(waste5xxCount)} istek/gün (%${n5xx.toFixed(1)})`;
    if (wasteCsrEl) wasteCsrEl.textContent = selectedRender === 'csr' ? `~${fmt(wasteCsrCount)} istek/gün (WRS Kuyruk Yükü)` : '0 (Statik / SSR)';
    if (wasteCacheEl) wasteCacheEl.textContent = n304 < 3 ? `~${fmt(wasteCacheCount)} istek/gün (Gereksiz Yeniden İndirme)` : '0 (304 Önbellek Aktif)';

    // 6. Generate Actionable Recommendations
    const recs = [];

    if (n5xx > 0.5) {
      recs.push({
        badge: 'critical',
        badgeText: 'Kritik Öncelik',
        title: '5xx Sunucu Hatalarını ve Host Load Backoff\'u Durdurun',
        desc: `Sunucunuz %${n5xx.toFixed(1)} oranında 5xx hatası dönüyor. Googlebot sunucu çökmesini önlemek için tarama hızını (Crawl Rate Limit) sert şekilde kısıtlar. Sunucu hata loglarını inceleyerek 500, 502 ve 504 veren uç noktaları derhal onarın.`
      });
    }

    if (selectedRender === 'csr') {
      recs.push({
        badge: 'high',
        badgeText: 'Yüksek Öncelik',
        title: 'Client-Side Rendering (CSR) Yerine SSR veya SSG Mimarisine Geçin',
        desc: 'İstemci taraflı JavaScript render (CSR), Googlebot\'u iki aşamalı Web Rendering Service (WRS) kuyruğuna mecbur bırakır. Botun CPU maliyeti 15 kat artar ve tarama sıklığı %60 azalır. Sayfalarınızı Server-Side Rendering (SSR) veya Edge prerendering ile sunun.'
      });
    }

    if (ttfb > 600) {
      recs.push({
        badge: 'high',
        badgeText: 'Yüksek Öncelik',
        title: `Sunucu TTFB Süresini (${ttfb}ms) 200ms Altına Düşürün`,
        desc: 'Googlebot bir sayfayı indirirken harcadığı süreye göre eşzamanlı bağlantı sayısını ayarlar. TTFB 200ms altına indiğinde Googlebot sunucunuza aynı zaman diliminde 4–5 kat daha fazla istek gönderebilir. Cloudflare Edge Caching ve veritabanı indekslemesi uygulayın.'
      });
    }

    if (n404 > 2.5) {
      recs.push({
        badge: 'medium',
        badgeText: 'Orta Öncelik',
        title: `Kırık Bağlantıları ve %${n404.toFixed(1)} Oranındaki 404 İsteklerini Temizleyin`,
        desc: `Günlük yaklaşık ${fmt(waste404Count)} bot isteği ölü 404 sayfalarında heba oluyor. XML site haritasındaki ve site içi linklerdeki 404 veren bağlantıları ayıklayın veya ilgili 200 sayfalarına yönlendirin.`
      });
    }

    if (n3xx > 5) {
      recs.push({
        badge: 'medium',
        badgeText: 'Orta Öncelik',
        title: `Yönlendirme Zincirlerini Çözün (%${n3xx.toFixed(1)} 3xx Oranı)`,
        desc: `Site içi linklerinizde yönlendirilmiş URL'ler kullanıldığında bot her yönlendirme için ek HTTP isteği harcar. Tüm dahili bağlantıları doğrudan nihai 200 URL'ine bağlayarak zincirleri (Redirect hops) ortadan kaldırın.`
      });
    }

    if (n304 < 3 && urlCount > 5000) {
      recs.push({
        badge: 'info',
        badgeText: 'Teknik İyileştirme',
        title: 'HTTP 304 (Not Modified) ve ETag / Last-Modified Başlıklarını Kullanın',
        desc: 'Değişmeyen sayfalar için sunucunuzun HTTP 304 Not Modified dönmesini sağlayın. Googlebot tüm HTML gövdesini indirmek yerine yalnızca başlığı doğrular; böylece bant genişliği ve CPU tüketmeden tarama kapasiteniz katlanır.'
      });
    }

    if (htmlSize > 150) {
      recs.push({
        badge: 'info',
        badgeText: 'Varlık Optimizasyonu',
        title: `HTML Yanıt Boyutunu (${htmlSize}KB) 100KB Altına İndirin`,
        desc: 'Şişkin HTML dosyaları botun indirme bant genişliğini kısıtlar. Satır içi (inline) devasa SVG\'leri, gereksiz JSON-LD gömülerini ve aşırı DOM derinliğini temizleyip Brotli sıkıştırmasını etkinleştirin.'
      });
    }

    if (recs.length === 0) {
      recs.push({
        badge: 'info',
        badgeText: 'Sürdürülebilirlik',
        title: 'Mükemmel Yapı: Log Dosyası Analiziyle İzlemeye Devam Edin',
        desc: 'Mevcut teknik altyapınız Googlebot için son derece verimli. Düzenli sunucu erişim (access log) analizleri yaparak yeni eklenen parametreli URL veya filtre sayfalarının bütçeyi şişirmediğinden emin olun.'
      });
    }

    if (recContainer) {
      recContainer.innerHTML = recs.map((r) => `
        <article class="cbc-rec-card">
          <div class="cbc-rec-header">
            <h4 class="cbc-rec-title">${r.title}</h4>
            <span class="cbc-rec-badge cbc-rec-badge--${r.badge}">${r.badgeText}</span>
          </div>
          <p class="cbc-rec-desc">${r.desc}</p>
        </article>
      `).join('');
    }

    // Share & Copy Text Generation
    const summaryText = `[Narvals Labs — Tarama Bütçesi ve Bot Taranabilirlik Teşhisi]
• Toplam URL: ${fmt(urlCount)} | Günlük Güncelleme: ${fmt(updatedCount)}
• Ortalama TTFB: ${ttfb}ms | HTML Boyutu: ${htmlSize}KB | Render: ${selectedRender.toUpperCase()}
• HTTP Durum Dağılımı: 200 OK (%${n200.toFixed(1)}), 304 (%${n304.toFixed(1)}), 3xx (%${n3xx.toFixed(1)}), 404 (%${n404.toFixed(1)}), 5xx (%${n5xx.toFixed(1)})

SONUÇ KARNESİ:
★ Tarama Verimlilik Skoru: ${totalScore} / 100
★ Tahmini Günlük Bot Kapasitesi: ${fmt(crawlDaily)} istek/gün
★ İsraf Edilen Bütçe Oranı: %${totalWastePct.toFixed(1)} (~${fmt(wastedDailyRequests)} istek/gün)
★ Net Faydalı Tarama Kapasitesi: ${fmt(usefulDailyRequests)} sayfa/gün
★ Tam Site Tarama Döngüsü: ${cycleDays} gün

Öncelikli Teknik Adım: ${recs[0]?.title || 'Optimizasyon tamamlandı.'}
Detaylı Teşhis: https://narvals.com/araclar/tarama-butcesi-hesaplama/`;

    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(summaryText).then(() => {
          const prev = copyBtn.textContent;
          copyBtn.textContent = 'Özet Kopyalandı ✓';
          setTimeout(() => { copyBtn.textContent = prev; }, 2200);
        });
      };
    }

    if (printBtn) {
      printBtn.onclick = () => window.print();
    }

    if (waLink) {
      const waMsg = encodeURIComponent(`Merhaba Narvals ekibi, Tarama Bütçesi ve Bot Taranabilirlik Teşhisi sonucumu paylaşıp teknik optimizasyon projesini değerlendirmek istiyorum:\n\n${summaryText}`);
      waLink.href = `https://wa.me/905019441921?text=${waMsg}`;
    }
  };

  // Initial Run
  updateTTFBTag();
  updateSizeTag();
  updateDistributionBar();
  calculate();
}
