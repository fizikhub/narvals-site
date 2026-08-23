import './fonts-base.css';
import './info-base.css';
import './content.css';
import './pages.css';
import './blog.css';
import './refined-info.css';

document.documentElement.classList.replace('no-js', 'js');

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const infoNav = document.querySelector('.info-nav');
const infoNavLinks = infoNav?.querySelector('.info-nav__links');
const compactNav = window.matchMedia('(max-width: 820px)');

if (infoNav && infoNavLinks) {
  const contactLink = infoNavLinks.querySelector('a[href="/iletisim/"]');
  const quickContact = contactLink?.cloneNode(true);
  const menuToggle = document.createElement('button');

  if (quickContact) {
    quickContact.className = 'info-nav__quick';
    quickContact.textContent = 'İletişim';
    quickContact.removeAttribute('aria-current');
    infoNav.insertBefore(quickContact, infoNavLinks);
  }

  infoNavLinks.id ||= 'info-mobile-menu';
  menuToggle.className = 'info-nav__toggle';
  menuToggle.type = 'button';
  menuToggle.setAttribute('aria-label', 'Menüyü aç');
  menuToggle.setAttribute('aria-controls', infoNavLinks.id);
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<span aria-hidden="true"></span>';
  infoNav.insertBefore(menuToggle, infoNavLinks);

  const setMenu = (open, { restoreFocus = false } = {}) => {
    const nextOpen = compactNav.matches && open;
    menuToggle.setAttribute('aria-expanded', String(nextOpen));
    menuToggle.setAttribute('aria-label', nextOpen ? 'Menüyü kapat' : 'Menüyü aç');
    infoNavLinks.setAttribute('aria-hidden', String(!nextOpen));
    infoNavLinks.inert = !nextOpen;
    document.body.classList.toggle('info-menu-open', nextOpen);
    if (!nextOpen && restoreFocus) menuToggle.focus();
  };

  const syncMenuMode = () => {
    if (compactNav.matches) {
      setMenu(false);
    } else {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Menüyü aç');
      infoNavLinks.removeAttribute('aria-hidden');
      infoNavLinks.inert = false;
      document.body.classList.remove('info-menu-open');
    }
  };

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  infoNavLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false, { restoreFocus: true });
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (menuToggle.getAttribute('aria-expanded') === 'true' && !infoNav.contains(event.target)) {
      setMenu(false);
    }
  });

  compactNav.addEventListener('change', syncMenuMode);
  syncMenuMode();
}
