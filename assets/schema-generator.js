// Active schema type state
let currentType = 'Organization';

// State for FAQ items
let faqItems = [
  {
    question: 'Schema Markup (Yapılandırılmış Veri) nedir ve neden gereklidir?',
    answer: 'Schema Markup, arama motorlarının ve yapay zeka arama botlarının (Google, Perplexity, ChatGPT) sayfa içeriğini ve varlıkları tam olarak anlamasını sağlayan JSON-LD formatındaki standart veri etiketidir.'
  },
  {
    question: 'Varlık Tabanlı SEO (Entity-Based SEO) ve sameAs neden önemlidir?',
    answer: 'sameAs özelliği ile markanızı Wikidata, Wikipedia, LinkedIn ve resmi sosyal profillere bağladığınızda arama motorları sizi doğrulanmış bir kurumsal varlık (Entity) olarak tanır.'
  },
  {
    question: 'Oluşturulan JSON-LD kodu web sitesine nasıl eklenir?',
    answer: 'Oluşturulan kodu <script type="application/ld+json"> etiketi içerisinde web sitenizin <head> veya <body> bölümüne yapıştırmanız yeterlidir.'
  }
];

// DOM Elements
const tabButtons = document.querySelectorAll('[data-schema-type]');
const formGroups = document.querySelectorAll('[data-form-group]');
const codeOutput = document.querySelector('[data-schema-code]');
const wrapScriptCheckbox = document.querySelector('[data-wrap-script]');
const statusBadge = document.querySelector('[data-schema-status]');
const copyBtn = document.querySelector('[data-schema-copy]');
const validateBtn = document.querySelector('[data-schema-validate]');
const toastEl = document.querySelector('[data-schema-toast]');
const faqContainer = document.querySelector('[data-faq-list]');
const addFaqBtn = document.querySelector('[data-faq-add]');

// Show Toast
let toastTimeout;
const showToast = (message, isError = false) => {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.style.borderColor = isError ? '#ef4444' : 'var(--accent, #00e599)';
  toastEl.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('is-visible');
  }, 3000);
};

// Syntax Highlighting for JSON
const highlightJson = (jsonString) => {
  const safe = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return safe.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'json-number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
        } else {
          cls = 'json-string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'json-boolean';
      } else if (/null/.test(match)) {
        cls = 'json-null';
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
};

// Render FAQ Form Inputs
const renderFaqInputs = () => {
  if (!faqContainer) return;
  faqContainer.innerHTML = '';
  faqItems.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'schema-faq-item';
    itemEl.innerHTML = `
      <div class="schema-faq-item-header">
        <strong>Soru #${index + 1}</strong>
        ${faqItems.length > 1 ? `<button type="button" class="schema-faq-remove-btn" data-faq-remove="${index}">Sil</button>` : ''}
      </div>
      <div class="schema-field">
        <label>Soru Metni</label>
        <input type="text" data-faq-q="${index}" value="${item.question.replace(/"/g, '&quot;')}" placeholder="Soru metnini yazın..." />
      </div>
      <div class="schema-field">
        <label>Cevap Metni</label>
        <textarea data-faq-a="${index}" rows="2" placeholder="Cevap metnini yazın...">${item.answer}</textarea>
      </div>
    `;
    faqContainer.appendChild(itemEl);
  });

  // Attach event listeners to newly rendered inputs
  faqContainer.querySelectorAll('input, textarea').forEach((input) => {
    input.addEventListener('input', (e) => {
      const qIdx = e.target.getAttribute('data-faq-q');
      const aIdx = e.target.getAttribute('data-faq-a');
      if (qIdx !== null) faqItems[parseInt(qIdx, 10)].question = e.target.value;
      if (aIdx !== null) faqItems[parseInt(aIdx, 10)].answer = e.target.value;
      generateSchema();
    });
  });

  faqContainer.querySelectorAll('[data-faq-remove]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.getAttribute('data-faq-remove'), 10);
      faqItems.splice(idx, 1);
      renderFaqInputs();
      generateSchema();
    });
  });
};

if (addFaqBtn) {
  addFaqBtn.addEventListener('click', () => {
    faqItems.push({ question: '', answer: '' });
    renderFaqInputs();
    generateSchema();
  });
}

// Clean helper: removes empty keys or falsy values (except boolean false or number 0)
const cleanObject = (obj) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null || value === '') continue;
    if (Array.isArray(value)) {
      const filtered = value.map((v) => (typeof v === 'object' ? cleanObject(v) : v)).filter(Boolean);
      if (filtered.length > 0) result[key] = filtered;
    } else if (typeof value === 'object') {
      const cleaned = cleanObject(value);
      if (Object.keys(cleaned).length > 0) result[key] = cleaned;
    } else {
      result[key] = value;
    }
  }
  return result;
};

// Generate Schema Logic
const generateSchema = () => {
  let schemaData = {};

  if (currentType === 'Organization') {
    const name = document.querySelector('[name="org_name"]')?.value.trim() || 'Narvals Labs';
    const url = document.querySelector('[name="org_url"]')?.value.trim() || 'https://narvals.com/';
    const logo = document.querySelector('[name="org_logo"]')?.value.trim();
    const desc = document.querySelector('[name="org_desc"]')?.value.trim();
    const email = document.querySelector('[name="org_email"]')?.value.trim();
    const phone = document.querySelector('[name="org_phone"]')?.value.trim();
    const country = document.querySelector('[name="org_country"]')?.value.trim();
    const locality = document.querySelector('[name="org_locality"]')?.value.trim();
    const sameAsRaw = document.querySelector('[name="org_sameas"]')?.value.trim() || '';
    const sameAs = sameAsRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
    const knowsRaw = document.querySelector('[name="org_knowsabout"]')?.value.trim() || '';
    const knowsAbout = knowsRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    schemaData = cleanObject({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${url.replace(/\/$/, '')}/#organization`,
      name,
      url,
      logo: logo ? { '@type': 'ImageObject', url: logo } : undefined,
      description: desc || undefined,
      email: email || undefined,
      telephone: phone || undefined,
      address: (country || locality) ? {
        '@type': 'PostalAddress',
        addressCountry: country || undefined,
        addressLocality: locality || undefined
      } : undefined,
      sameAs: sameAs.length ? sameAs : undefined,
      knowsAbout: knowsAbout.length ? knowsAbout : undefined
    });
  } else if (currentType === 'LocalBusiness') {
    const lbType = document.querySelector('[name="lb_type"]')?.value || 'LocalBusiness';
    const name = document.querySelector('[name="lb_name"]')?.value.trim() || 'Narvals Kahve & Fırın';
    const url = document.querySelector('[name="lb_url"]')?.value.trim();
    const image = document.querySelector('[name="lb_image"]')?.value.trim();
    const phone = document.querySelector('[name="lb_phone"]')?.value.trim();
    const priceRange = document.querySelector('[name="lb_price_range"]')?.value.trim();
    const street = document.querySelector('[name="lb_street"]')?.value.trim();
    const locality = document.querySelector('[name="lb_locality"]')?.value.trim();
    const region = document.querySelector('[name="lb_region"]')?.value.trim();
    const postalCode = document.querySelector('[name="lb_postal_code"]')?.value.trim();
    const country = document.querySelector('[name="lb_country"]')?.value.trim() || 'TR';
    const lat = parseFloat(document.querySelector('[name="lb_lat"]')?.value.trim());
    const lng = parseFloat(document.querySelector('[name="lb_lng"]')?.value.trim());
    const openingHours = document.querySelector('[name="lb_opening_hours"]')?.value.trim();
    const sameAsRaw = document.querySelector('[name="lb_sameas"]')?.value.trim() || '';
    const sameAs = sameAsRaw.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);

    schemaData = cleanObject({
      '@context': 'https://schema.org',
      '@type': lbType,
      name,
      url: url || undefined,
      image: image || undefined,
      telephone: phone || undefined,
      priceRange: priceRange || undefined,
      address: {
        '@type': 'PostalAddress',
        streetAddress: street || undefined,
        addressLocality: locality || undefined,
        addressRegion: region || undefined,
        postalCode: postalCode || undefined,
        addressCountry: country || undefined
      },
      geo: (!isNaN(lat) && !isNaN(lng)) ? {
        '@type': 'GeoCoordinates',
        latitude: lat,
        longitude: lng
      } : undefined,
      openingHours: openingHours || undefined,
      sameAs: sameAs.length ? sameAs : undefined
    });
  } else if (currentType === 'Service') {
    const name = document.querySelector('[name="srv_name"]')?.value.trim() || 'Kurumsal Web Tasarım ve UX';
    const serviceType = document.querySelector('[name="srv_service_type"]')?.value.trim() || 'Web Geliştirme';
    const desc = document.querySelector('[name="srv_desc"]')?.value.trim();
    const url = document.querySelector('[name="srv_url"]')?.value.trim();
    const providerName = document.querySelector('[name="srv_provider_name"]')?.value.trim() || 'Narvals Labs';
    const providerUrl = document.querySelector('[name="srv_provider_url"]')?.value.trim() || 'https://narvals.com/';
    const areaServed = document.querySelector('[name="srv_area_served"]')?.value.trim() || 'Türkiye';
    const price = document.querySelector('[name="srv_price"]')?.value.trim();
    const currency = document.querySelector('[name="srv_currency"]')?.value || 'TRY';

    schemaData = cleanObject({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name,
      serviceType,
      description: desc || undefined,
      url: url || undefined,
      provider: {
        '@type': 'Organization',
        name: providerName,
        url: providerUrl
      },
      areaServed: areaServed ? {
        '@type': 'Country',
        name: areaServed
      } : undefined,
      offers: price ? {
        '@type': 'Offer',
        price,
        priceCurrency: currency
      } : undefined
    });
  } else if (currentType === 'FAQPage') {
    const mainEntity = faqItems
      .filter((item) => item.question.trim() && item.answer.trim())
      .map((item) => ({
        '@type': 'Question',
        name: item.question.trim(),
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer.trim()
        }
      }));

    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity
    };
  } else if (currentType === 'Article') {
    const artType = document.querySelector('[name="art_type"]')?.value || 'Article';
    const headline = document.querySelector('[name="art_headline"]')?.value.trim() || 'Web Sitesi Teknik SEO ve Schema Mimarisi';
    const desc = document.querySelector('[name="art_desc"]')?.value.trim();
    const image = document.querySelector('[name="art_image"]')?.value.trim() || 'https://narvals.com/og/narvals-labs-og.jpg';
    const url = document.querySelector('[name="art_url"]')?.value.trim();
    const datePublished = document.querySelector('[name="art_date_published"]')?.value || '2026-08-30';
    const dateModified = document.querySelector('[name="art_date_modified"]')?.value || datePublished;
    const authorType = document.querySelector('[name="art_author_type"]')?.value || 'Person';
    const authorName = document.querySelector('[name="art_author_name"]')?.value.trim() || 'Narvals Labs';
    const authorUrl = document.querySelector('[name="art_author_url"]')?.value.trim();
    const pubName = document.querySelector('[name="art_pub_name"]')?.value.trim() || 'Narvals Labs';
    const pubLogo = document.querySelector('[name="art_pub_logo"]')?.value.trim() || 'https://narvals.com/assets/logo-v6/narvals-avatar-v6-1080.png';

    schemaData = cleanObject({
      '@context': 'https://schema.org',
      '@type': artType,
      headline,
      description: desc || undefined,
      image: image ? [image] : undefined,
      mainEntityOfPage: url ? { '@type': 'WebPage', '@id': url } : undefined,
      datePublished,
      dateModified,
      author: {
        '@type': authorType,
        name: authorName,
        url: authorUrl || undefined
      },
      publisher: {
        '@type': 'Organization',
        name: pubName,
        logo: pubLogo ? { '@type': 'ImageObject', url: pubLogo } : undefined
      }
    });
  } else if (currentType === 'Product') {
    const name = document.querySelector('[name="prod_name"]')?.value.trim() || 'Ergonomik Çalışma Koltuğu Pro';
    const image = document.querySelector('[name="prod_image"]')?.value.trim();
    const desc = document.querySelector('[name="prod_desc"]')?.value.trim();
    const brand = document.querySelector('[name="prod_brand"]')?.value.trim() || 'Narvals';
    const sku = document.querySelector('[name="prod_sku"]')?.value.trim();
    const price = document.querySelector('[name="prod_price"]')?.value.trim() || '2450.00';
    const currency = document.querySelector('[name="prod_currency"]')?.value || 'TRY';
    const availability = document.querySelector('[name="prod_avail"]')?.value || 'https://schema.org/InStock';
    const condition = document.querySelector('[name="prod_cond"]')?.value || 'https://schema.org/NewCondition';
    const url = document.querySelector('[name="prod_url"]')?.value.trim();
    const ratingVal = parseFloat(document.querySelector('[name="prod_rating_val"]')?.value.trim());
    const reviewCount = parseInt(document.querySelector('[name="prod_review_count"]')?.value.trim(), 10);

    schemaData = cleanObject({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      image: image ? [image] : undefined,
      description: desc || undefined,
      brand: brand ? { '@type': 'Brand', name: brand } : undefined,
      sku: sku || undefined,
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: currency,
        availability,
        itemCondition: condition,
        url: url || undefined
      },
      aggregateRating: (!isNaN(ratingVal) && !isNaN(reviewCount) && reviewCount > 0) ? {
        '@type': 'AggregateRating',
        ratingValue: ratingVal,
        reviewCount
      } : undefined
    });
  }

  // Convert to formatted JSON
  const rawJson = JSON.stringify(schemaData, null, 2);

  // Validate JSON
  let isValid = true;
  try {
    JSON.parse(rawJson);
    if (!schemaData['@type'] || (currentType === 'Organization' && !schemaData.name)) {
      isValid = false;
    }
  } catch {
    isValid = false;
  }

  // Update Status Badge
  if (statusBadge) {
    if (isValid) {
      statusBadge.className = 'schema-status-badge is-valid';
      statusBadge.innerHTML = '<span class="schema-status-dot"></span> Geçerli JSON-LD';
    } else {
      statusBadge.className = 'schema-status-badge is-invalid';
      statusBadge.innerHTML = '<span class="schema-status-dot"></span> Eksik / Geçersiz Veri';
    }
  }

  // Render highlighted output
  const wrapScript = wrapScriptCheckbox ? wrapScriptCheckbox.checked : true;
  const highlightedJson = highlightJson(rawJson);

  if (codeOutput) {
    if (wrapScript) {
      codeOutput.innerHTML = `<span class="json-tag">&lt;script type="application/ld+json"&gt;</span>\n${highlightedJson}\n<span class="json-tag">&lt;/script&gt;</span>`;
    } else {
      codeOutput.innerHTML = highlightedJson;
    }
  }

  return { rawJson, wrapScript };
};

// Tab Switch Handling
tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');

    currentType = btn.getAttribute('data-schema-type') || 'Organization';

    formGroups.forEach((group) => {
      const match = group.getAttribute('data-form-group') === currentType;
      group.hidden = !match;
      group.style.display = match ? 'flex' : 'none';
    });

    generateSchema();
  });
});

// Live Form Inputs Event Listeners
document.querySelectorAll('.schema-form-card input, .schema-form-card select, .schema-form-card textarea').forEach((input) => {
  input.addEventListener('input', generateSchema);
  input.addEventListener('change', generateSchema);
});

if (wrapScriptCheckbox) {
  wrapScriptCheckbox.addEventListener('change', generateSchema);
}

// Copy Code Button
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const { rawJson, wrapScript } = generateSchema();
    const finalCode = wrapScript
      ? `<script type="application/ld+json">\n${rawJson}\n</script>`
      : rawJson;

    try {
      await navigator.clipboard.writeText(finalCode);
      showToast('✓ JSON-LD Kodu Panoya Kopyalandı!');
      const span = copyBtn.querySelector('span');
      if (span) {
        const prev = span.textContent;
        span.textContent = 'Kopyalandı!';
        setTimeout(() => { span.textContent = prev; }, 2000);
      }
    } catch {
      showToast('Kopyalama başarısız oldu.', true);
    }
  });
}

// Validate Button
if (validateBtn) {
  validateBtn.addEventListener('click', () => {
    const { rawJson } = generateSchema();
    try {
      const parsed = JSON.parse(rawJson);
      if (parsed['@type'] && parsed['@context']) {
        showToast(`✓ Schema.org (${parsed['@type']}) formatı kusursuz ve geçerli!`);
      } else {
        showToast('⚠ @context veya @type eksik.', true);
      }
    } catch (err) {
      showToast(`⚠ Hata: ${err.message}`, true);
    }
  });
}

// Initialize FAQ and first render
renderFaqInputs();
generateSchema();
