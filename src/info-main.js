import './fonts-base.css';
import './info-base.css';
import './content.css';
import './pages.css';
import './blog.css';

document.documentElement.classList.remove('js');

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
