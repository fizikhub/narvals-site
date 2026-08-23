---
name: Narvals Labs
description: .
colors:
  ocean-metal: "oklch(0.55 0.091 210)"
  abyss: "oklch(0.23 0.075 250)"
  deep: "oklch(0.17 0.055 248)"
  blue: "oklch(0.43 0.15 252)"
  aqua: "oklch(0.82 0.105 188)"
  safety-yellow: "oklch(0.89 0.18 96)"
  repair-coral: "oklch(0.67 0.2 37)"
  repair-coral-contrast: "oklch(0.65 0.2 37)"
  offwhite: "oklch(0.975 0.012 210)"
  ice-blue: "oklch(0.944 0.027 205)"
  ink: "oklch(0.14 0.035 250)"
  muted: "oklch(0.51 0.04 240)"
typography:
  display:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "clamp(3rem, 7.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Onest Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.625rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  tag: "6px"
  control: "12px"
  panel: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "40px"
  section: "clamp(110px, 15vw, 220px)"
components:
  button-primary:
    backgroundColor: "{colors.repair-coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 10px 8px 28px"
    height: "84px"
  button-primary-hover:
    backgroundColor: "{colors.safety-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  chip-service:
    backgroundColor: "{colors.safety-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  panel-machine:
    backgroundColor: "{colors.ocean-metal}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.panel}"
    padding: "36px"
---

# Design System: Narvals Labs

## Overview

**Creative North Star: "Su Basan Dijital Tamirhane"**

Narvals Labs, okyanusun dibine kurulmuş fiziksel bir elektronik atölyesi gibi davranır. Renkli kablolar, boyası aşınmış metal, gerçek lifli kâğıt, ekran camı ve ciddi yüzlü narval teknisyen markanın dijital işi elle tutulur hâle getirir. Kompozisyon yoğun ama trafik düzeni nettir: her görünümde tek bir ana makine, tek bir mesaj ve tek bir eylem bulunur.

Sistem punk enerjisini kirli ya da okunaksız olmakla karıştırmaz. Sert kurumsal kutular yerine dalga, kâğıt yırtığı ve hafif eğri servis etiketleri kullanılır; metin daima yüksek kontrastlı ve kısa kalır. Jenerik yapay zekâ ajansı estetiği, mor neon soyutlamalar ve merkezde başlık + iki CTA düzeni kesinlikle reddedilir.

**Key Characteristics:**

- Fiziksel stop-motion diorama görselleri
- Hero’da vazgeçilmez, yetişkin ve muzip narval maskot
- Tam palet, yüksek kontrast ve bölüm bazlı renk drenci
- Daralan genişleyen deneysel display tipografisi
- Saf beyaz, kutusuz kontrolleri olan sakin ve yüksek kontrastlı navbar
- Açık, tek anlamlı WhatsApp yolu

## Colors

Palet bir gemi kronometresinin oksitli çeliği ile tamir atölyesinin güvenlik sarısını bir araya getirir.

### Primary

- **Oksitli Kronometre Mavisi:** Markanın metal gövdeleri, teşhis makinesi ve teknik yüzeylerinde kullanılır.
- **Abis Laciverti:** Hero, servis avlusu ve yüksek kontrastlı ana düğmelerin taşıyıcı rengidir.

### Secondary

- **Güvenlik Sarısı:** Servis çağrısı, önemli kelime ve çalışan durumlarında kullanılır.
- **Tamir Mercanı:** Aktif kontrol, damga, CTA ve punk vurgusudur.
- **Kontrast Mercanı:** Buz mavisi üzerindeki büyük mercan metin için 3:1 kontrast sağlayan koyu tonal adımdır.

### Tertiary

- **Basınç Akuası:** Yalnızca teknik veri, çalışan durum ve su hissini güçlendiren ikincil vurgularda görünür.

### Neutral

- **Soğuk Atölye Beyazı:** Kâğıt yüzey ve koyu zemin üzerindeki ana metindir.
- **Buz Mavisi:** Hero ile yaklaşım filmi arasındaki kesintisiz, sakin anlatı yüzeyidir.
- **Conta Mürekkebi:** Açık yüzeylerdeki ana metindir; saf siyah yerine okyanus tonunu taşır.
- **Aşınmış Etiket:** Açık yüzeydeki ikincil metindir.

**The Safety Paint Rule.** Sarı ve mercan dekor değildir; yalnızca durum, eylem veya anlatısal vurgu taşır.

## Typography

**Display Font:** Anybody Variable (sans-serif)
**Body Font:** Onest Variable (sans-serif)
**Label/Mono Font:** Azeret Mono (monospace)

**Character:** Anybody'nin değişken genişliği tamirhane afişi gibi sıkışıp açılır; Onest sakin ve insani bir okuma alanı kurar. Azeret Mono yalnızca gerçekten teknik olan basınç, iş emri ve makine durumunda kullanılır.

### Hierarchy

- **Display** (900, `clamp(3rem, 7.6vw, 6rem)`, 0.8): Hero ve bölüm tezlerinde; en fazla üç satır.
- **Headline** (780, `clamp(2.7rem, 4.7vw, 5.2rem)`, 0.91): Servis başlıklarında değişken genişlikle.
- **Title** (720, `clamp(2rem, 3.5vw, 4rem)`, 0.98): Teşhis çıktıları ve ara odaklarda.
- **Body** (400, 1rem, 1.55): 65 karakteri aşmayan açıklamalarda.
- **Label** (700, 0.625rem, 0.05em): İş emri, makine durumu ve kısa servis kodlarında.

**The Workshop Label Rule.** Monospace yalnızca makinenin gerçekten söyleyebileceği şeylerde görünür; pazarlama başlıklarına kostüm olmaz.

## Mascot

Narval, logodan sonra markanın en güçlü tanınma öğesidir ve hero’da görünür kalır. Rolü televizyon ya da başka fiziksel bir nesne tamir etmek değil; tasarım, kod ve reklam üretimini tek enerjik karakterde birleştirmektir. Siluet yetişkin, kendinden emin ve hafif punk görünür; sevimli bebek, peluş oyuncak veya jenerik parlak 3B karakter estetiğine düşmez.

**The Narwhal Rule.** Hero yeniden tasarlanırken narval çıkarılmaz, dekoratif arka plan görseline indirgenmez ve markanın sattığı hizmetlerle ilgisiz bir mesleğe kostümlenmez.

## Elevation

Sistem geniş, sisli SaaS gölgeleri kullanmaz. Derinlik fotoğrafların gerçek stüdyo ışığından, yüzey üst üste bindirmelerinden ve 2–10 piksellik sert baskı kaymalarından gelir.

### Shadow Vocabulary

- **Baskı Kayması** (`4px 4px 0 var(--ink)`): CTA ve servis etiketi basma hissi.
- **Makine Ayağı** (`10px 10px 0 var(--ink)`): Yalnızca büyük teşhis gövdesinde yapısal ağırlık.
- **Perçin İçi** (`inset 2px 2px 0 rgba(255,255,255,.35)`): Küçük fiziksel parçalar.

**The Hard Contact Rule.** Gölge ancak yüzeyin altında fiziksel bir parça varmış gibi davranıyorsa kullanılır; blur değeri 8 pikseli geçmez.

## Components

### Buttons

- **Shape:** Hafif düzensiz, yumuşak servis etiketi (6–12px yarıçap).
- **Primary:** Mercan zemin, koyu mürekkep ve ayrı dairesel yön oku.
- **Hover / Focus:** Renk güvenlik sarısına döner; gölge 4 pikselden 2 piksele oturur. Klavye odağı 3 piksel mercan dış çizgidir.
- **WhatsApp:** Her görünümde tek birincil iş çağrısı; yeni sekmede açılır.

### Chips

- **Style:** Sarı, mercan veya aqua dolgu; ilgili servis tezgâhını etiketler.
- **State:** Teşhis kontrollerinde aktif seçim mercana döner ve hafif yukarı kalkar.

### Cards / Containers

- **Corner Style:** Standart kart yoktur. Görsel servis yüzeyleri kâğıt yırtığı poligonlarıyla kesilir; makine panelleri en fazla 14px yuvarlanır.
- **Background:** Bölümün anlatısına göre abis, sarı veya soğuk beyaz.
- **Shadow Strategy:** Yalnızca yapısal sert temas gölgesi.
- **Internal Padding:** 20–52px arası, içerik ağırlığına göre değişir.

### Navigation

Masaüstü navbar saf beyaz zeminli, sabit yükseklikte ve düz bir üst bardır. Koyu mürekkep tipografisi ve en fazla 8 piksel bulanıklığa sahip düşük opaklıklı gölge barı içerikten ayırır; renk yalnızca mercan `//` işaretinde ve küçük yön kontrolünde görünür. Mobilde marka kilidi küçülür; iletişim eylemi açık metinle korunur ve menü standart iki çizgili ikonla temsil edilir. Mobil navbar işlev katmanı olduğu için tek, kontrollü bir likit cam yüzey kullanabilir.

### Mobile Clarity & Glass

- Mobil ana sayfa sırası: açık değer önerisi, üç hizmet, dört adımlı çalışma biçimi, sık sorulan sorular ve tek iletişim çağrısıdır.
- Likit cam yalnızca gezinme ile ana eylem konsolunda kullanılır; içerik kartlarında ve cam üstüne cam katmanlarında kullanılmaz.
- Cam yüzeylerde sabit bulanıklık, ince speküler kenar, güçlü metin kontrastı ve kısa temas gölgesi korunur; bulanıklık animasyonu yapılmaz.
- `prefers-reduced-transparency`, `prefers-reduced-motion`, yüksek kontrast ve `backdrop-filter` desteği olmayan tarayıcılar için opak yüzey karşılıkları sağlanır.
- Mobil dokunma hedefleri en az 48 piksel, gövde metni en az 16 piksel ve içerik sırası 320 piksel genişlikte yatay sayfa taşması olmadan çalışır.

### Work Order

Hero'daki ana CTA bir kart değil, iğnelenmiş fiziksel iş emridir. Kesikli iç çizgi, perçin ve yırtık alt kenar ancak bu bileşene aittir.

## Do's and Don'ts

### Do:

- **Do** generated raster görselleri gerçek malzeme, fiziksel ışık ve belirgin bir ana nesneyle kullan.
- **Do** hero, servis ve kapanışta tek birincil mesaj ve tek WhatsApp eylemi koru.
- **Do** mobil kompozisyonu 375px genişlikte bağımsız olarak düzenle; dokunma hedeflerini en az 44px tut.
- **Do** hareketi su, metal, kâğıt ve mekanik parçanın ağırlığına göre koreografla.
- **Do** renkleri OKLCH tokenları üzerinden kullan.

### Don't:

- **Don't** jenerik yapay zekâ ajansı estetiği kullan.
- **Don't** ortalanmış büyük başlık + iki CTA + sağda soyut 3B nesne hero kompozisyonu kur.
- **Don't** mor neon degradeler, aşırı cam efekti veya standart kapsül navbar kullan.
- **Don't** eş boyutlu ikonlu kart gridleri ya da sert köşeli kurumsal paneller üret.
- **Don't** sahte el çizimi SVG doodle'ları veya kullanıcı referanslarının kopyasını kullan.
- **Don't** display metnini 6rem üzerine ya da harf aralığını -0.04em altına çıkar.
