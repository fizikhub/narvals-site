import './qr-code-tool.css';
import { generateQRCodeSVG } from './qr-core.js';

const previewBox = document.querySelector('[data-qr-preview]');
const typeButtons = document.querySelectorAll('[data-qr-type]');
const dynamicFieldsContainer = document.querySelector('[data-qr-dynamic-fields]');
const downloadSvgBtn = document.querySelector('[data-download-svg]');
const downloadPngBtn = document.querySelector('[data-download-png]');

let currentType = 'url';
let currentPayload = 'https://narvals.com';

const renderFields = () => {
  if (!dynamicFieldsContainer) return;
  if (currentType === 'url') {
    dynamicFieldsContainer.innerHTML = `
      <label><span>Web Sitesi Adresi (URL)</span><small>https:// ile başlayan bağlantı</small>
        <input type="url" data-input-url placeholder="https://ornek.com" value="https://narvals.com" required />
      </label>
    `;
  } else if (currentType === 'menu') {
    dynamicFieldsContainer.innerHTML = `
      <label><span>Dijital Menü Bağlantısı</span><small>PDF menü veya restoran web adresi</small>
        <input type="url" data-input-menu placeholder="https://restoran.com/menu" value="https://narvals.com/hizmetler/qr-menu/" required />
      </label>
    `;
  } else if (currentType === 'whatsapp') {
    dynamicFieldsContainer.innerHTML = `
      <label><span>WhatsApp Numarası (Ülke kodu ile)</span><small>Örn. 905019441921</small>
        <input type="tel" data-input-phone placeholder="905019441921" value="905019441921" required />
      </label>
      <label><span>Önceden Yazılmış Mesaj <i>isteğe bağlı</i></span><small>Kullanıcı karekodu okutunca açılacak mesaj</small>
        <input type="text" data-input-message placeholder="Merhaba, menü ve rezervasyon hakkında bilgi almak istiyorum." value="Merhaba, bilgi almak istiyorum." />
      </label>
    `;
  } else if (currentType === 'wifi') {
    dynamicFieldsContainer.innerHTML = `
      <label><span>Ağ Adı (SSID)</span><small>Wi-Fi adınız</small>
        <input type="text" data-input-ssid placeholder="Restoran_Misafir_WiFi" value="Narvals_Guest_WiFi" required />
      </label>
      <label><span>Wi-Fi Şifresi</span><small>Kamerayla okutulduğunda otomatik bağlanır</small>
        <input type="text" data-input-wifipass placeholder="sifre1234" value="misafir2026" required />
      </label>
    `;
  } else if (currentType === 'vcard') {
    dynamicFieldsContainer.innerHTML = `
      <label><span>Ad Soyad</span><input type="text" data-input-name placeholder="Ahmet Yılmaz" value="Narvals Labs" required /></label>
      <label><span>Şirket & Unvan</span><input type="text" data-input-title placeholder="Kurucu / Narvals" value="Dijital Üretim Stüdyosu" /></label>
      <label><span>Telefon</span><input type="tel" data-input-vphone placeholder="+90 501 944 19 21" value="+90 501 944 19 21" /></label>
      <label><span>E-Posta</span><input type="email" data-input-vemail placeholder="info@narvals.com" value="info@narvals.com" /></label>
      <label><span>Web Sitesi</span><input type="url" data-input-vurl placeholder="https://narvals.com" value="https://narvals.com" /></label>
    `;
  }

  attachInputListeners();
  updateQR();
};

const getPayload = () => {
  if (currentType === 'url') {
    const el = document.querySelector('[data-input-url]');
    return el?.value.trim() || 'https://narvals.com';
  }
  if (currentType === 'menu') {
    const el = document.querySelector('[data-input-menu]');
    return el?.value.trim() || 'https://narvals.com/hizmetler/qr-menu/';
  }
  if (currentType === 'whatsapp') {
    const phone = document.querySelector('[data-input-phone]')?.value.replace(/\D/g, '') || '905019441921';
    const msg = encodeURIComponent(document.querySelector('[data-input-message]')?.value.trim() || '');
    return `https://wa.me/${phone}${msg ? `?text=${msg}` : ''}`;
  }
  if (currentType === 'wifi') {
    const ssid = document.querySelector('[data-input-ssid]')?.value.trim() || 'Guest_WiFi';
    const pass = document.querySelector('[data-input-wifipass]')?.value.trim() || '';
    return `WIFI:T:WPA;S:${ssid};P:${pass};;`;
  }
  if (currentType === 'vcard') {
    const name = document.querySelector('[data-input-name]')?.value.trim() || 'İsim';
    const title = document.querySelector('[data-input-title]')?.value.trim() || '';
    const phone = document.querySelector('[data-input-vphone]')?.value.trim() || '';
    const email = document.querySelector('[data-input-vemail]')?.value.trim() || '';
    const url = document.querySelector('[data-input-vurl]')?.value.trim() || '';
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${name}`,
      title ? `TITLE:${title}` : '',
      phone ? `TEL;TYPE=CELL:${phone}` : '',
      email ? `EMAIL:${email}` : '',
      url ? `URL:${url}` : '',
      'END:VCARD'
    ].filter(Boolean).join('\n');
  }
  return 'https://narvals.com';
};

const updateQR = () => {
  currentPayload = getPayload();
  try {
    const svgString = generateQRCodeSVG(currentPayload, { fg: '#03233a', bg: '#ffffff', margin: 2 });
    if (previewBox) previewBox.innerHTML = svgString;
  } catch (err) {
    console.error(err);
  }
};

const attachInputListeners = () => {
  const inputs = dynamicFieldsContainer.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('input', updateQR);
  });
};

typeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    typeButtons.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentType = btn.dataset.qrType;
    renderFields();
  });
});

if (downloadSvgBtn) {
  downloadSvgBtn.addEventListener('click', () => {
    const svgString = generateQRCodeSVG(currentPayload, { fg: '#03233a', bg: '#ffffff', margin: 2 });
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `narvals-qr-${currentType}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

if (downloadPngBtn) {
  downloadPngBtn.addEventListener('click', () => {
    const svgString = generateQRCodeSVG(currentPayload, { fg: '#03233a', bg: '#ffffff', margin: 2 });
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 1024;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        const pngUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = pngUrl;
        a.download = `narvals-qr-${currentType}-hd.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(pngUrl);
      }, 'image/png');
    };
    img.src = url;
  });
}

renderFields();
