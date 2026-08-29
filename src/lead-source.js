const PHONE = '905019441921';

export function initLeadSource() {
  const pageLabel = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim() || document.title;
  const source = `${pageLabel} (${window.location.pathname})`;

  document.querySelectorAll(`a[href^="https://wa.me/${PHONE}"]`).forEach((link) => {
    const url = new URL(link.href);
    if (!url.searchParams.has('text')) {
      url.searchParams.set('text', `Merhaba Narvals Labs, ${source} sayfasından ulaşıyorum. Projemi görüşmek istiyorum.`);
      link.href = url.toString();
    }

    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_intent', { method: 'whatsapp', page_path: window.location.pathname });
      }
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'contact_intent', { method: 'email', page_path: window.location.pathname });
      }
    });
  });
}
