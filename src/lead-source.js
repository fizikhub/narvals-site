const PHONE = '905019441921';
const ATTRIBUTION_KEY = 'narvals_attribution_v1';
const AI_REFERRERS = new Map([
  ['chatgpt.com', 'ChatGPT'],
  ['perplexity.ai', 'Perplexity'],
  ['copilot.microsoft.com', 'Microsoft Copilot'],
  ['gemini.google.com', 'Google Gemini'],
  ['claude.ai', 'Claude'],
  ['meta.ai', 'Meta AI'],
  ['you.com', 'You.com'],
  ['phind.com', 'Phind'],
  ['poe.com', 'Poe']
]);
const SEARCH_REFERRERS = new Map([
  ['google.com', 'Google Search'],
  ['bing.com', 'Bing Search'],
  ['search.yahoo.com', 'Yahoo Search'],
  ['yandex.com', 'Yandex Search'],
  ['yandex.com.tr', 'Yandex Search']
]);

const cleanLabel = (value) => String(value || '')
  .replace(/[^\p{L}\p{N} ._+-]/gu, '')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 60);

const matchHost = (hostname, candidates) => {
  const normalized = hostname.toLowerCase().replace(/^www\./, '');
  for (const [domain, label] of candidates) {
    if (normalized === domain || normalized.endsWith(`.${domain}`)) return label;
  }
  return '';
};

export function classifyAcquisition({ pageUrl, referrer = '' }) {
  const page = new URL(pageUrl);
  const campaignSource = cleanLabel(page.searchParams.get('utm_source'));
  const campaignMedium = cleanLabel(page.searchParams.get('utm_medium'));
  if (campaignSource) {
    return {
      channel: /^(?:ai|llm|chatbot|organic_ai)$/i.test(campaignMedium) ? 'ai' : 'campaign',
      source: campaignMedium ? `${campaignSource} / ${campaignMedium}` : campaignSource
    };
  }

  if (!referrer) return { channel: 'direct', source: 'Doğrudan' };
  let referrerUrl;
  try {
    referrerUrl = new URL(referrer);
  } catch {
    return { channel: 'unknown', source: 'Bilinmeyen yönlendirme' };
  }
  if (referrerUrl.origin === page.origin) return { channel: 'internal', source: 'Site içi' };

  const aiSource = matchHost(referrerUrl.hostname, AI_REFERRERS);
  if (aiSource) return { channel: 'ai', source: aiSource };
  const searchSource = matchHost(referrerUrl.hostname, SEARCH_REFERRERS);
  if (searchSource) return { channel: 'organic_search', source: searchSource };
  return { channel: 'referral', source: cleanLabel(referrerUrl.hostname) || 'Yönlendirme' };
}

const getSessionAttribution = () => {
  try {
    const saved = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY));
    if (saved?.source && saved?.channel) return saved;
  } catch {
    // Storage can be unavailable in privacy modes; attribution remains optional.
  }

  const classified = classifyAcquisition({ pageUrl: window.location.href, referrer: document.referrer });
  const attribution = {
    ...classified,
    landingPath: window.location.pathname
  };
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // The visible contact journey must keep working without storage.
  }
  return attribution;
};

export function initLeadSource() {
  const pageLabel = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() || document.title;
  const source = `${pageLabel} (${window.location.pathname})`;
  const attribution = getSessionAttribution();
  const attributionNote = ['direct', 'internal'].includes(attribution.channel)
    ? ''
    : ` Geliş kaynağı: ${attribution.source}.`;

  document.querySelectorAll(`a[href^="https://wa.me/${PHONE}"]`).forEach((link) => {
    const url = new URL(link.href);
    if (!url.searchParams.has('text')) {
      url.searchParams.set('text', `Merhaba Narvals Labs, ${source} sayfasından ulaşıyorum.${attributionNote} Projemi görüşmek istiyorum.`);
      link.href = url.toString();
    }

    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_intent', {
          method: 'whatsapp',
          page_path: window.location.pathname,
          traffic_channel: attribution.channel,
          traffic_source: attribution.source,
          landing_path: attribution.landingPath
        });
      }
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_intent', {
          method: 'email',
          page_path: window.location.pathname,
          traffic_channel: attribution.channel,
          traffic_source: attribution.source,
          landing_path: attribution.landingPath
        });
      }
    });
  });
}
