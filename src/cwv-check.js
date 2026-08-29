import './cwv-check.css';

const form = document.querySelector('[data-cwv-form]');
const resultEl = document.querySelector('[data-cwv-result]');
const scoreCircle = document.querySelector('[data-cwv-score]');
const scoreHeading = document.querySelector('[data-cwv-status-heading]');
const scoreDesc = document.querySelector('[data-cwv-status-desc]');
const recommendationsList = document.querySelector('[data-cwv-recommendations]');
const copyBtn = document.querySelector('[data-cwv-copy]');
const whatsappBtn = document.querySelector('[data-cwv-whatsapp]');

const issues = {
  opt_hero: {
    title: 'Hero Görseli & LCP Optimizasyonu',
    fix: 'İlk ekrandaki ana görseli WebP/AVIF formatına dönüştürün, lazy load yapmayın ve <link rel="preload"> veya fetchpriority="high" ekleyin.'
  },
  opt_ttfb: {
    title: 'Sunucu Yanıt Süresi (TTFB)',
    fix: 'Edge caching (Cloudflare vb.), CDN kullanımı veya veritabanı sorgu optimizasyonu ile TTFB değerini 500ms altına çekin.'
  },
  opt_js: {
    title: 'Gereksiz JavaScript & INP Yükü',
    fix: 'Kullanılmayan 3. taraf takip kodlarını kaldırın, analitikleri Partytown/Worker katmanına taşıyın veya defer/async kullanın.'
  },
  opt_main_thread: {
    title: 'Ana İş Parçacığı Blokajı (TBT/INP)',
    fix: 'Ağır DOM manipülasyonlarını requestIdleCallback ve CSS animasyonları (transform/opacity) ile donanım ivmelendirmeli yapın.'
  },
  opt_cls_dimensions: {
    title: 'Düzen Kayması (CLS) & Boyut Tanımları',
    fix: 'Tüm <img> ve <iframe> etiketlerine kesin width ve height öznitelikleri verin veya CSS aspect-ratio uygulayın.'
  },
  opt_fonts: {
    title: 'Yazı Tipi Atlama & FOIT/FOUT Önleme',
    fix: 'Fontları WOFF2 olarak yerel sunucudan barındırın ve font-display: swap ile önceden <link rel="preload"> yapın.'
  },
  opt_compression: {
    title: 'Sıkıştırma ve Minification',
    fix: 'Sunucuda Brotli sıkıştırmasını aktif edin ve Vite/Terser ile CSS/JS dosyalarınızı minified olarak sunun.'
  },
  opt_mobile_overflow: {
    title: 'Mobil Taşma ve Görünüm Alanı',
    fix: 'Yatay taşmaya (horizontal scroll) sebep olan sabit genişlikli (fixed width) divleri max-width: 100% ile düzeltin.'
  },
  opt_protocol: {
    title: 'HTTP/2 ve HTTPS Protokolü',
    fix: 'Çoklu bağlantı yükünü azaltmak için HTTP/2 veya HTTP/3 (QUIC) protokolüne geçiş yapın.'
  },
  opt_caching: {
    title: 'Statik Varlık Önbellekleme',
    fix: 'Görsel, font ve stil dosyalarına 1 yıllık (max-age=31536000, immutable) Cache-Control başlığı ekleyin.'
  }
};

let currentReport = '';

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    let checkedCount = 0;
    const missingKeys = [];

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        checkedCount++;
      } else {
        missingKeys.push(cb.name);
      }
    });

    const score = Math.round((checkedCount / checkboxes.length) * 100);

    if (scoreCircle) scoreCircle.textContent = score;

    let statusText = '';
    let statusDesc = '';

    if (score >= 90) {
      statusText = 'Mükemmel Hız ve Core Web Vitals Skoru (Yeşil Kuşak)';
      statusDesc = 'Siteniz Google CWV kriterlerini eksiksiz karşılıyor. Arama motorları ve kullanıcı deneyimi açısından üst düzey performans sunuyorsunuz.';
      if (scoreCircle) scoreCircle.style.color = 'var(--accent, #00e599)';
    } else if (score >= 60) {
      statusText = 'Geliştirilmesi Gereken Hız Darboğazları Var (Turuncu Kuşak)';
      statusDesc = 'Siteniz temel standartları karşılıyor ancak bazı LCP ve INP engelleri mobil dönüşüm oranlarınızı düşürebilir.';
      if (scoreCircle) scoreCircle.style.color = '#f59e0b';
    } else {
      statusText = 'Kritik Performans ve SEO Kaybı Riski (Kırmızı Kuşak)';
      statusDesc = 'Sitenizde ciddi Core Web Vitals problemleri mevcut. Ziyaretçilerin sayfadan hemen çıkma oranı yüksek ve Google sıralamalarında geride kalıyorsunuz.';
      if (scoreCircle) scoreCircle.style.color = '#ef4444';
    }

    if (scoreHeading) scoreHeading.textContent = statusText;
    if (scoreDesc) scoreDesc.textContent = statusDesc;

    if (recommendationsList) {
      recommendationsList.innerHTML = '';
      if (missingKeys.length === 0) {
        recommendationsList.innerHTML = '<div class="cwv-rec-card"><h4>Tüm kriterler başarıyla karşılandı!</h4><p>Sitenizin hız altyapısı eksiksizdir.</p></div>';
      } else {
        missingKeys.forEach((key) => {
          const item = issues[key];
          if (item) {
            const card = document.createElement('div');
            card.className = 'cwv-rec-card';
            card.innerHTML = `<h4>⚠️ ${item.title}</h4><p>${item.fix}</p>`;
            recommendationsList.appendChild(card);
          }
        });
      }
    }

    currentReport = [
      'Narvals Labs Core Web Vitals Teşhis Özeti',
      `Performans Skoru: ${score}/100`,
      `Durum: ${statusText}`,
      `Eksik / İyileştirilmesi Gereken Kalem Sayısı: ${missingKeys.length}`,
      missingKeys.map((k) => `- ${issues[k]?.title}: ${issues[k]?.fix}`).join('\n')
    ].join('\n');

    if (whatsappBtn) {
      const msg = encodeURIComponent(`Merhaba, web sitemin Core Web Vitals ve hız optimizasyonu için profesyonel destek almak istiyorum:\n\n${currentReport}`);
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
