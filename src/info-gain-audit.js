import './info-gain-audit.css';

const form = document.querySelector('[data-iga-form]');

if (form) {
  const fieldsets = [...form.querySelectorAll('fieldset[data-criterion]')];
  const progressEl = form.querySelector('[data-iga-progress]');
  const resultSection = document.querySelector('[data-iga-result]');

  const categoryNames = {
    ig: 'Bilgi Kazanımı & Özgünlük',
    eeat: 'E-E-A-T & Yazar Otoritesi',
    cite: 'Kanıt & Alıntı Kalitesi',
    rag: 'RAG & Anlamsal Parçalama'
  };

  const criteriaData = {
    ig_data: {
      name: 'Tescilli / Birincil Veri & Saha Araştırması',
      category: 'ig',
      advice: 'Sayfanıza sektörünüze özel en az bir özgün anket sonucu, anonimleştirilmiş müşteri verisi veya kendi test ölçümünüzü ekleyin.'
    },
    ig_tool: {
      name: 'Özgün Hesaplama Aracı veya İnteraktif Model',
      category: 'ig',
      advice: 'Kullanıcının salt okumak yerine verilerini girip anlık özel çıktı alacağı interaktif bir hesaplama aracı veya karar matrisi entegre edin.'
    },
    ig_case: {
      name: 'Birinci El Vaka Analizi & Somut Deneyim',
      category: 'ig',
      advice: 'Gerçek proje tecrübelerinizi, karşılaşılan teknik engelleri, ekran görüntülerini ve A/B test verilerini içeren birinci el vaka çalışması ekleyin.'
    },
    eeat_bio: {
      name: 'Doğrulanabilir Yazar Biyografisi ve İtibar',
      category: 'eeat',
      advice: 'İçerik altına yazarın sektör deneyimini, uzmanlık unvanını ve yetkinliklerini özetleyen ayrıntılı ve fotoğraflı bir biyografi kutusu ekleyin.'
    },
    eeat_entity: {
      name: 'Yazarın Dijital Varlık Profilleri (SameAs)',
      category: 'eeat',
      advice: 'Yazar kutusuna ve BlogPosting JSON-LD şemasına yazarın resmi LinkedIn, Wikidata veya Google Scholar sameAs bağlantılarını tanımlayın.'
    },
    eeat_policy: {
      name: 'Editoryal Politika ve Kurumsal Şeffaflık',
      category: 'eeat',
      advice: 'Sitenize editoryal ilkeler, içerik revizyon protokolü ve şeffaf yapay zekâ kullanım politikasını içeren bağımsız bir kurumsal sayfa ekleyin.'
    },
    cite_quotes: {
      name: 'Doğrudan Uzman Tırnak İçi Alıntıları',
      category: 'cite',
      advice: 'Konuyla ilgili sektörde saygın bağımsız bir uzmandan doğrudan tırnak içi alıntı yaparak (blockquote) unvan ve tarihle sunun.'
    },
    cite_stats: {
      name: 'İstatistiki Yüzdeler ve Sayısal Veri Desteği',
      category: 'cite',
      advice: 'Soyut iddiaları net yüzdelerle (%X), zaman kazanımlarıyla veya ölçülebilir finansal/performans rakamlarıyla değiştirin.'
    },
    cite_sources: {
      name: 'Birincil Akademik / Resmî Kaynak Bağlantıları',
      category: 'cite',
      advice: 'İçeriğinizdeki iddiaları ikincil bloglar yerine resmî belgelere (W3C, Google Search Central, TÜİK vb.) doğrudan dış bağlantıyla kaynaklandırın.'
    },
    rag_direct: {
      name: 'Ters Piramit Doğrudan Cevap Başlangıcı',
      category: 'rag',
      advice: 'Sayfanın en başına, arama niyeti sorusunu 50 kelimede doğrudan yanıtlayan ters piramit bir özet ve tanım kutusu yerleştirin.'
    },
    rag_chunks: {
      name: '256–512 Tokenlık Açık Başlık Hiyerarşisi',
      category: 'rag',
      advice: 'Her H2 ve H3 altında tek bir ana fikri, insanın bağlamı kaybetmeden anlayacağı doğal uzunlukta açıklayın; sabit bir AI token veya kelime hedefi kullanmayın.'
    },
    rag_entity: {
      name: 'Zamir Belirsizliği Olmayan Önerme Yapısı',
      category: 'rag',
      advice: 'Paragraflardaki "bunun", "şu durum" gibi belirsiz zamirleri açık varlık isimleriyle (ör. "Google PageSpeed algoritması") netleştirin.'
    }
  };

  const answeredCount = () => fieldsets.filter((f) => f.querySelector('input:checked')).length;

  const updateProgress = () => {
    if (progressEl) {
      const count = answeredCount();
      progressEl.textContent = `${count} / ${fieldsets.length} kriter değerlendirildi`;
    }
  };

  form.addEventListener('change', updateProgress);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstMissing = fieldsets.find((f) => !f.querySelector('input:checked'));
    if (firstMissing) {
      if (progressEl) {
        progressEl.textContent = `Sonuç için ${fieldsets.length - answeredCount()} kriteri daha işaretleyin.`;
      }
      firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMissing.querySelector('input')?.focus({ preventScroll: true });
      return;
    }

    const catPoints = { ig: 0, eeat: 0, cite: 0, rag: 0 };
    const gaps = [];
    const checklistRows = [];
    let totalPoints = 0;

    fieldsets.forEach((fieldset) => {
      const key = fieldset.dataset.criterion;
      const checkedInput = fieldset.querySelector('input:checked');
      const val = Number(checkedInput ? checkedInput.value : 0);
      const cat = fieldset.dataset.category;

      totalPoints += val;
      catPoints[cat] += val;

      const itemInfo = criteriaData[key] || { name: key, category: cat, advice: '' };

      if (val < 2) {
        gaps.push({
          key,
          val,
          name: itemInfo.name,
          category: cat,
          advice: itemInfo.advice
        });
      }

      checklistRows.push({
        name: itemInfo.name,
        category: categoryNames[cat],
        val,
        advice: itemInfo.advice
      });
    });

    const score = Math.round((totalPoints / (fieldsets.length * 2)) * 100);

    const dimScores = {
      ig: Math.round((catPoints.ig / 6) * 100),
      eeat: Math.round((catPoints.eeat / 6) * 100),
      cite: Math.round((catPoints.cite / 6) * 100),
      rag: Math.round((catPoints.rag / 6) * 100)
    };

    let gradeLetter = 'A+';
    let gradeTitle = 'Maksimum Bilgi Kazanımı & Otoriter Lider';
    let gradeDesc = 'İçeriğiniz tescilli veri, yüksek yazar otoritesi, güçlü alıntılar ve kusursuz RAG anlamsal yapısıyla hem Google hem de LLM aramalarında zirveye aday.';

    if (score >= 90) {
      gradeLetter = 'A+';
      gradeTitle = 'Maksimum Bilgi Kazanımı & Otoriter Lider';
      gradeDesc = 'İçeriğiniz tescilli veri, yüksek yazar otoritesi, güçlü alıntılar ve kusursuz RAG anlamsal yapısıyla hem Google hem de LLM aramalarında zirveye aday.';
    } else if (score >= 75) {
      gradeLetter = 'A';
      gradeTitle = 'Yüksek E-E-A-T & Güçlü Bilgi Kazanımı';
      gradeDesc = 'Güçlü bir temel ve net bir uzmanlık var. Birkaç küçük veri ve biçimlendirme eksiğini tamamlayarak A+ lider seviyesine çıkabilirsiniz.';
    } else if (score >= 55) {
      gradeLetter = 'B';
      gradeTitle = 'Orta Düzey — Standart İçerik, Özgünlük Artırılmalı';
      gradeDesc = 'İçeriğiniz temel bilgileri veriyor ancak webdeki diğer kaynaklardan yeterince ayrışmıyor. Birincil veri ve interaktif araç eklemelisiniz.';
    } else if (score >= 35) {
      gradeLetter = 'C';
      gradeTitle = 'Zayıf Bilgi Kazanımı — Jenerik AI İçeriği Riski';
      gradeDesc = 'Sayfanız arama motorları ve yapay zekâ botları tarafından jenerik/derleme olarak algılanabilir. Yazar profili ve tescilli veri eksikliği ciddi sıralama riski oluşturuyor.';
    } else {
      gradeLetter = 'Riskli';
      gradeTitle = 'Yüksek Sıralama Kaybı & İndeks Riski';
      gradeDesc = 'İçerik E-E-A-T ve Bilgi Kazanımı standartlarının çok gerisinde. Google Yardımcı Olmayan İçerik (Helpful Content) güncellemelerinde ceza alma riski yüksek.';
    }

    const titleInput = form.querySelector('[name="content_title"]');
    const contentTitle = titleInput?.value.trim() || 'Denetlenen İçerik';

    if (resultSection) {
      resultSection.querySelector('[data-iga-score]').textContent = String(score);
      resultSection.querySelector('[data-iga-grade]').textContent = `Seviye: ${gradeLetter}`;
      resultSection.querySelector('[data-iga-status-title]').textContent = gradeTitle;
      resultSection.querySelector('[data-iga-status-desc]').textContent = gradeDesc;
      resultSection.querySelector('[data-iga-target-title]').textContent = contentTitle;

      // Update Dimension Bars
      const barsContainer = resultSection.querySelector('[data-iga-bars]');
      if (barsContainer) {
        barsContainer.innerHTML = Object.entries(dimScores).map(([key, val]) => {
          let fillColor = 'var(--coral)';
          if (val >= 80) fillColor = 'var(--aqua)';
          else if (val >= 50) fillColor = 'var(--yellow)';
          return `
            <div class="iga-bar-item">
              <div class="iga-bar-header">
                <span>${categoryNames[key]}</span>
                <strong>%${val}</strong>
              </div>
              <div class="iga-bar-track">
                <div class="iga-bar-fill" style="--percent: ${val}%; --fill-color: ${fillColor};"></div>
              </div>
            </div>
          `;
        }).join('');
      }

      // Update SVG Radar Chart
      // Center (150, 150), radius 95
      const cx = 150;
      const cy = 150;
      const r = 95;

      const p0 = { x: cx, y: cy - (r * (dimScores.ig / 100)) }; // Top: IG
      const p1 = { x: cx + (r * (dimScores.eeat / 100)), y: cy }; // Right: EEAT
      const p2 = { x: cx, y: cy + (r * (dimScores.cite / 100)) }; // Bottom: Cite
      const p3 = { x: cx - (r * (dimScores.rag / 100)), y: cy }; // Left: RAG

      const radarPoly = resultSection.querySelector('[data-iga-radar-polygon]');
      if (radarPoly) {
        radarPoly.setAttribute('points', `${p0.x},${p0.y} ${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`);
      }

      const v0 = resultSection.querySelector('[data-iga-v0]');
      const v1 = resultSection.querySelector('[data-iga-v1]');
      const v2 = resultSection.querySelector('[data-iga-v2]');
      const v3 = resultSection.querySelector('[data-iga-v3]');
      if (v0) { v0.setAttribute('cx', p0.x); v0.setAttribute('cy', p0.y); }
      if (v1) { v1.setAttribute('cx', p1.x); v1.setAttribute('cy', p1.y); }
      if (v2) { v2.setAttribute('cx', p2.x); v2.setAttribute('cy', p2.y); }
      if (v3) { v3.setAttribute('cx', p3.x); v3.setAttribute('cy', p3.y); }

      // Update Priorities
      const priorities = gaps.sort((a, b) => a.val - b.val).slice(0, 3);
      const prioritiesList = resultSection.querySelector('[data-iga-priorities]');
      if (prioritiesList) {
        prioritiesList.innerHTML = priorities.length
          ? priorities.map((item) => `
              <li>
                <strong>${item.name} (${item.val === 0 ? 'Kritik Eksik' : 'Geliştirilmeli'})</strong>
                <span>${item.advice}</span>
              </li>
            `).join('')
          : '<li><strong>Kusursuz Yapı!</strong><span>İçeriğiniz 12 kriterin tamamında üst düzey E-E-A-T ve Bilgi Kazanımı standartlarına sahip.</span></li>';
      }

      // Update Full Checklist Table
      const checklistTbody = resultSection.querySelector('[data-iga-checklist-body]');
      if (checklistTbody) {
        checklistTbody.innerHTML = checklistRows.map((row) => {
          let badgeClass = 'iga-status-badge--pass';
          let badgeText = 'Tam (+2)';
          if (row.val === 1) {
            badgeClass = 'iga-status-badge--warn';
            badgeText = 'Kısmi (+1)';
          } else if (row.val === 0) {
            badgeClass = 'iga-status-badge--fail';
            badgeText = 'Yok (0)';
          }

          return `
            <tr>
              <td><strong>${row.name}</strong><br><small style="color:oklch(0.51 0.04 240);">${row.category}</small></td>
              <td><span class="iga-status-badge ${badgeClass}">${badgeText}</span></td>
              <td>${row.val === 2 ? 'Kriter başarıyla karşılandı.' : row.advice}</td>
            </tr>
          `;
        }).join('');
      }

      // Generate Summary & WhatsApp Link
      const dimSummary = Object.entries(dimScores).map(([k, v]) => `${categoryNames[k]}: %${v}`).join(' | ');
      const prioSummary = priorities.map((p, idx) => `${idx + 1}. ${p.name}: ${p.advice}`).join('\n');

      const fullReportText = [
        `Narvals Labs E-E-A-T ve Bilgi Kazanımı Denetim Raporu`,
        `İçerik: ${contentTitle}`,
        `Genel Skor: ${score}/100 (Seviye: ${gradeLetter})`,
        `Boyut Dağılımı: ${dimSummary}`,
        ``,
        `Öncelikli Aksiyon Maddeleri:`,
        prioSummary || 'Tüm kriterler eksiksiz karşılandı.'
      ].join('\n');

      resultSection.dataset.summary = fullReportText;

      const whatsappBtn = resultSection.querySelector('[data-iga-whatsapp]');
      if (whatsappBtn) {
        const msg = encodeURIComponent(`Merhaba Narvals Labs, içeriğimin E-E-A-T ve Bilgi Kazanımı denetimini tamamladım:\n\n${fullReportText}\n\nİçerik stratejisi ve optimizasyon için profesyonel destek almak istiyorum.`);
        whatsappBtn.href = `https://wa.me/905019441921?text=${msg}`;
      }

      resultSection.hidden = false;
      resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  document.querySelector('[data-iga-copy]')?.addEventListener('click', async (event) => {
    try {
      await navigator.clipboard.writeText(resultSection?.dataset.summary || '');
      const btn = event.currentTarget;
      const prev = btn.textContent;
      btn.textContent = 'Özet Kopyalandı!';
      setTimeout(() => { btn.textContent = prev; }, 2000);
    } catch {
      event.currentTarget.textContent = 'Kopyalanamadı';
    }
  });

  document.querySelector('[data-iga-print]')?.addEventListener('click', () => window.print());

  updateProgress();
}
