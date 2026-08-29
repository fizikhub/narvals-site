import './proposal-compare.css';

const form = document.querySelector('[data-proposal-compare]');

if (form) {
  const criteria = [
    ['Hedef ve kapsam', 'İş hedefi, kullanıcı, sayfa/şablon ve kapsam dışı yazılı mı?'],
    ['İçerik sorumluluğu', 'Metin, görsel, ürün verisi ve yasal içerikten kim sorumlu?'],
    ['Canlı iş kanıtı', 'Canlı URL, ajansın rolü ve doğrulanabilir teslim gösteriliyor mu?'],
    ['Teknik SEO', 'Başlık, canonical, sitemap, schema ve indeks kontrolleri teslim listesinde mi?'],
    ['URL taşıma', 'Eski URL envanteri ve sayfa bazlı yönlendirme planı var mı?'],
    ['Alan adı ve hesap sahipliği', 'Alan adı, hosting, analitik ve Search Console işletme kontrolünde mi?'],
    ['Mobil ve erişilebilirlik testi', 'Cihaz, tarayıcı, klavye ve hata durumları için kabul ölçütü var mı?'],
    ['Performans', 'Görsel, kod ve Core Web Vitals için ölçülebilir kontrol var mı?'],
    ['Dönüşüm ölçümü', 'Form, arama, satış veya rezervasyonun nasıl ölçüleceği açık mı?'],
    ['Takvim ve onay', 'Aşamalar, müşteri teslimleri, onay süresi ve gecikme kuralı yazılı mı?'],
    ['Bakım ve destek', 'Yanıt süresi, dahil işler, yenileme ve üçüncü taraf maliyetleri açık mı?'],
    ['Teslim ve çıkış planı', 'Kod, veri, tasarım dosyası, erişimler ve sağlayıcı değişimi açıklanmış mı?']
  ];
  const columns = ['a', 'b', 'c'];
  const rows = form.querySelector('[data-proposal-rows]');
  const result = document.querySelector('[data-proposal-result]');

  criteria.forEach(([title, detail], rowIndex) => {
    const row = document.createElement('tr');
    const heading = document.createElement('th');
    heading.scope = 'row';
    heading.innerHTML = `<strong>${title}</strong><span>${detail}</span>`;
    row.appendChild(heading);
    columns.forEach((column) => {
      const cell = document.createElement('td');
      const select = document.createElement('select');
      select.name = `criterion-${rowIndex}-${column}`;
      select.setAttribute('aria-label', `${title} — Teklif ${column.toUpperCase()}`);
      select.innerHTML = '<option value="2">Açıkça dahil</option><option value="1" selected>Belirsiz</option><option value="0">Yok / kapsam dışı</option>';
      cell.appendChild(select);
      row.appendChild(cell);
    });
    rows.appendChild(row);
  });

  const getOffer = (column) => ({
    column,
    name: form.elements[`name-${column}`].value.trim(),
    price: form.elements[`price-${column}`].value.trim(),
    values: criteria.map((_, index) => Number(form.elements[`criterion-${index}-${column}`].value))
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstMissing = [...form.querySelectorAll('input[required]')].find((input) => !input.value.trim());
    if (firstMissing) {
      firstMissing.setAttribute('aria-invalid', 'true');
      firstMissing.focus();
      return;
    }

    const offers = columns.map(getOffer).filter((offer) => offer.column !== 'c' || offer.name);
    const resultRoot = result.querySelector('[data-proposal-results]');
    resultRoot.replaceChildren();
    offers.forEach((offer) => {
      const score = Math.round((offer.values.reduce((sum, value) => sum + value, 0) / (criteria.length * 2)) * 100);
      const unclear = offer.values.filter((value) => value === 1).length;
      const missing = offer.values.filter((value) => value === 0).length;
      offer.score = score;
      offer.unclear = unclear;
      offer.missing = missing;
      const article = document.createElement('article');
      const name = document.createElement('h3');
      name.textContent = offer.name;
      const price = document.createElement('p');
      price.textContent = offer.price || 'Fiyat girilmedi';
      const scoreLine = document.createElement('div');
      scoreLine.innerHTML = `<strong>${score}</strong><span>/ 100 kapsam açıklığı</span><i style="--score:${score}%" aria-hidden="true"></i>`;
      const risk = document.createElement('small');
      risk.textContent = `${unclear} belirsiz · ${missing} kapsam dışı/yok`;
      article.append(name, price, scoreLine, risk);
      resultRoot.appendChild(article);
    });

    const gapsRoot = result.querySelector('[data-proposal-gaps]');
    gapsRoot.replaceChildren();
    criteria.forEach(([title, detail], index) => {
      const affected = offers.filter((offer) => offer.values[index] < 2);
      if (!affected.length) return;
      const item = document.createElement('article');
      const heading = document.createElement('h4');
      heading.textContent = title;
      const text = document.createElement('p');
      text.textContent = detail;
      const names = document.createElement('small');
      names.textContent = affected.map((offer) => `${offer.name}: ${offer.values[index] === 0 ? 'yok/kapsam dışı' : 'belirsiz'}`).join(' · ');
      item.append(heading, text, names);
      gapsRoot.appendChild(item);
    });
    if (!gapsRoot.children.length) {
      const text = document.createElement('p');
      text.textContent = 'Tüm teklifler ölçütleri açıkça kapsıyor. Canlı iş, sözleşme, ekip uyumu ve bütçeyi ayrıca değerlendirin.';
      gapsRoot.appendChild(text);
    }

    const lines = offers.map((offer) => `${offer.name}: ${offer.score}/100 kapsam açıklığı${offer.price ? ` — ${offer.price}` : ''}; ${offer.unclear} belirsiz, ${offer.missing} yok/kapsam dışı`);
    const priorityLines = [...gapsRoot.querySelectorAll('article')].slice(0, 5).map((item) => `- ${item.querySelector('h4').textContent}: ${item.querySelector('small').textContent}`);
    const summary = `Narvals web sitesi teklif karşılaştırması\n\n${lines.join('\n')}\n\nNetleştirilecek maddeler:\n${priorityLines.join('\n') || '- Kritik belirsizlik görünmüyor.'}`;
    result.dataset.summary = summary;
    result.querySelector('[data-proposal-whatsapp]').href = `https://wa.me/905019441921?text=${encodeURIComponent(`Merhaba Narvals Labs, web sitesi tekliflerini karşılaştırdım.\n\n${summary}\n\nKapsamı birlikte değerlendirmek istiyorum.`)}`;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  form.addEventListener('input', (event) => event.target.removeAttribute?.('aria-invalid'));
  document.querySelector('[data-proposal-copy]')?.addEventListener('click', async (event) => {
    try { await navigator.clipboard.writeText(result.dataset.summary || ''); event.currentTarget.textContent = 'Özet kopyalandı'; }
    catch { event.currentTarget.textContent = 'Kopyalanamadı'; }
  });
  document.querySelector('[data-proposal-print]')?.addEventListener('click', () => window.print());
}
