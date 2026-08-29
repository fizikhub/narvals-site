import './website-check.css';

const form = document.querySelector('[data-site-check]');

if (form) {
  const fieldsets = [...form.querySelectorAll('fieldset[data-category]')];
  const progress = form.querySelector('[data-check-progress]');
  const result = document.querySelector('[data-check-result]');
  const categoryNames = { offer: 'Teklif', trust: 'Güven', conversion: 'Dönüşüm', technical: 'Teknik görünürlük' };

  const answeredCount = () => fieldsets.filter((fieldset) => fieldset.querySelector('input:checked')).length;
  const updateProgress = () => { progress.textContent = `${answeredCount()} / ${fieldsets.length} soru cevaplandı`; };

  form.addEventListener('change', updateProgress);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstMissing = fieldsets.find((fieldset) => !fieldset.querySelector('input:checked'));
    if (firstMissing) {
      progress.textContent = `Sonuç için ${fieldsets.length - answeredCount()} soruyu daha cevaplayın.`;
      firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMissing.querySelector('input')?.focus({ preventScroll: true });
      return;
    }

    const categoryScores = { offer: 0, trust: 0, conversion: 0, technical: 0 };
    const gaps = [];
    let total = 0;
    fieldsets.forEach((fieldset) => {
      const value = Number(fieldset.querySelector('input:checked').value);
      total += value;
      categoryScores[fieldset.dataset.category] += value;
      if (value < 2) gaps.push({ value, label: fieldset.dataset.label, advice: fieldset.dataset.advice });
    });

    const score = Math.round((total / (fieldsets.length * 2)) * 100);
    const grade = score >= 85
      ? ['Temel güçlü; ölçerek iyileştirin.', 'Ana yapı güven veriyor. Küçük boşlukları kapatıp gerçek talep ve satış kalitesini düzenli izleyin.']
      : score >= 65
        ? ['İyi bir temel var; birkaç kritik boşluk kalmış.', 'Her şeyi yeniden yapmak yerine düşük puanlı alanları sırayla düzeltin ve dönüşüm ölçümünü doğrulayın.']
        : score >= 40
          ? ['Site çalışıyor; müşteri yolu belirgin biçimde güçlendirilmeli.', 'Teklif, güven ve dönüşüm kopukluklarını teknik makyajdan önce ele alın.']
          : ['Önce temeli ve sahipliği güvenceye alın.', 'En pahalı çözüme geçmeden teklif, iletişim, hesap sahipliği ve ölçümün çalıştığını doğrulayın.'];

    const url = form.elements.website.value.trim();
    result.querySelector('[data-result-score]').textContent = String(score);
    result.querySelector('[data-result-title]').textContent = grade[0];
    result.querySelector('[data-result-summary]').textContent = grade[1];
    result.querySelector('[data-result-site]').textContent = url || 'Web sitesi değerlendirmesi';

    const categoryRoot = result.querySelector('[data-result-categories]');
    categoryRoot.innerHTML = Object.entries(categoryScores).map(([key, value]) => {
      const percentage = Math.round((value / 8) * 100);
      return `<div><span>${categoryNames[key]}</span><strong>${percentage}</strong><i style="--score:${percentage}%" aria-hidden="true"></i></div>`;
    }).join('');

    const priorities = gaps.sort((a, b) => a.value - b.value).slice(0, 3);
    result.querySelector('[data-result-priorities]').innerHTML = priorities.length
      ? priorities.map((item) => `<li><strong>${item.label}</strong><span>${item.advice}</span></li>`).join('')
      : '<li><strong>Kritik boşluk görünmüyor.</strong><span>Gerçek kullanıcı davranışı, nitelikli talep ve satış sonuçlarıyla düzenli iyileştirmeye devam edin.</span></li>';

    const categoryText = Object.entries(categoryScores).map(([key, value]) => `${categoryNames[key]} %${Math.round((value / 8) * 100)}`).join(', ');
    const priorityText = priorities.map((item, index) => `${index + 1}. ${item.label}`).join('\n');
    const summary = `Narvals web sitesi kontrolü${url ? ` — ${url}` : ''}\nGenel puan: ${score}/100\n${categoryText}\n\nÖncelikler:\n${priorityText || 'Kritik boşluk görünmüyor.'}`;
    result.dataset.summary = summary;
    result.querySelector('[data-result-whatsapp]').href = `https://wa.me/905019441921?text=${encodeURIComponent(`Merhaba Narvals Labs, web sitesi kontrolünü tamamladım.\n\n${summary}\n\nBu sonucu birlikte değerlendirmek istiyorum.`)}`;

    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelector('[data-result-copy]')?.addEventListener('click', async (event) => {
    try {
      await navigator.clipboard.writeText(result.dataset.summary || '');
      event.currentTarget.textContent = 'Özet kopyalandı';
    } catch {
      event.currentTarget.textContent = 'Kopyalanamadı';
    }
  });

  document.querySelector('[data-result-print]')?.addEventListener('click', () => window.print());
  updateProgress();
}
