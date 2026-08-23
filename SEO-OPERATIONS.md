# Narvals Labs — SEO ve GEO operasyon rehberi

Bu dosya kodla çözülemeyen, hesap/doğrulama veya gerçek işletme verisi
gerektiren yayın sonrası işleri takip eder. Hiçbir madde sıralama, indekslenme
veya yapay zekâ yanıtında kaynak gösterilme garantisi vermez.

## Canlılık ve Alan Adı Durumu

`narvals.com` Cloudflare DNS ve HTTPS üzerinde aktif ve canlıdır. Google Search
Console Domain mülk doğrulaması Cloudflare DNS entegrasyonu ile tamamlanmıştır.
22 canonical sayfa, `robots.txt` ve `sitemap.xml` canlıda sorunsuz erişilmektedir.

Production derlemesi:

```bash
npm run build:production
```

Bu build koruması origin biçimini ve HTTPS kullanımını doğrular; DNS sahipliğini
ve canlı sunucuyu doğrulamaz. Yayın onayı ancak aşağıdaki canlı denetim geçince
verilmelidir.

Deploy tamamlandıktan sonra canlı DNS/HTTP/canonical denetimi:

```bash
SITE_URL=https://gercek-alan-adiniz.com npm run seo:check-live
```

## Yayından önce zorunlu gerçek veriler

- Kesin production alan adı ve tercih edilen host (`www` veya çıplak alan adı)
- Herkese açık/yasal işletme adı
- Ülke kodlu telefon ve WhatsApp numarası
- Kurumsal e-posta
- Fiziksel adres varsa tam adres; yoksa gerçek hizmet alanı
- Resmî sosyal profil URL’leri
- Ekip ve kurucu bilgileri (yayın izniyle)
- Kullanılmasına izin verilen müşteri, proje, sonuç ve referanslar

Bu bilgiler geldikten sonra ana sayfa, `/iletisim/`, footer ve tüm sayfalardaki
`Organization` JSON-LD aynı anda güncellenmelidir. Sahte adres, yorum, puan,
ödül, müşteri, şehir veya sonuç eklenmemelidir.

## Alan adı ve sunucu

- HTTPS zorunlu tutulmalı.
- HTTP, alternatif host ve `/index.html` tek canonical hosta `301/308` dönmeli.
- Canonical olmayan slash varyasyonları yönlendirilmelidir.
- Bilinmeyen URL’ler ana sayfa HTML’iyle `200` değil gerçek `404` dönmelidir.
- HTML kısa cache/yeniden doğrulama; hashli CSS/JS ve değişmeyen görseller uzun
  cache ile sunulmalıdır.
- CDN/WAF; Googlebot, Bingbot, Yandex, Applebot, OAI-SearchBot ve PerplexityBot’a
  CAPTCHA, JavaScript challenge veya `403` üretmemelidir. User-agent tek başına
  güvenlik doğrulaması değildir; resmî IP listeleri ve reverse DNS kullanılır.

## Google

1. Search Console’da DNS ile Domain property doğrulayın.
2. `/sitemap.xml` gönderin; URL Inspection ile önemli sayfaları kontrol edin.
3. Page Indexing, Crawl Stats, Core Web Vitals, HTTPS, Manual Actions ve Security
   Issues raporlarını izleyin.
4. Rich Results Test ve Schema.org Validator ile JSON-LD’yi kontrol edin.
5. Search Console'da sitenin üretken yapay zekâ özelliklerine uygunluk durumunu
   kontrol edin; uygunluk gösterim veya kaynak gösterilme garantisi değildir.
6. `Generative AI Performance` raporunda gösterim, tıklama, kaynak URL ve
   sorguları izleyip normal Web performansıyla birlikte değerlendirin.
7. Gerçek yerel işletmeyse Google Business Profile oluşturun ve siteyle aynı
   NAP bilgilerini kullanın.

## Bing ve Microsoft Copilot

1. Bing Webmaster Tools’a siteyi ekleyin veya Search Console’dan içe aktarın.
2. Sitemap gönderin; URL Inspection, Site Scan ve Robots.txt Tester çalıştırın.
3. Kök dizindeki IndexNow anahtarı:
   `b04a90decae26feec44042e2c2e4dd84.txt`
4. Yeni, önemli ölçüde güncellenen veya silinen canonical URL’leri IndexNow’a
   yayın iş akışından bildirin. Aynı URL’yi değişiklik olmadan tekrar göndermeyin.
5. Bing AI Performance açıldığında citation, cited URL ve grounding query
   raporlarını izleyin.
6. Gerçek yerel işletmeyse Bing Places kaydını doğrulayın.

Örnek IndexNow isteği, production alan adı kesinleşince:

```text
https://api.indexnow.org/indexnow?url=https%3A%2F%2FALAN-ADI%2F&key=b04a90decae26feec44042e2c2e4dd84
```

Projede doğrulanmış alan adıyla toplu bildirim betiği de hazırdır:

```bash
SITE_URL=https://alan-adi.example npm run indexnow:submit -- / /hizmetler/web-tasarim/
```

## Yandex

1. Yandex Webmaster’da canonical protokol/host sürümünü doğrulayın.
2. Sitemap’i ekleyin; Robots analysis, Page Check, JS rendering ve Structured
   data validator çalıştırın.
3. Searchable Pages, Crawl Stats, Query Stats ve Important Page Monitoring
   raporlarını izleyin.
4. Maksimum Yandex AI görünürlüğü için `YandexAdditional` ve
   `YandexAdditionalBot` engellenmemelidir.
5. Gerçek işletme bilgileriyle Yandex Business kaydını oluşturun.

## Apple / Safari / Spotlight / Siri

Safari bağımsız bir genel arama motoru değildir. Applebot; Safari, Spotlight ve
Siri içindeki arama deneyimlerini besler. `Applebot` engellenmemeli; CSS/JS gibi
render kaynaklarına erişebilmelidir. `nosnippet` kullanılmamalıdır.

- Yerel veya marka görünürlüğü için Apple Business / Business Connect kaydı
  doğrulanmalıdır.
- `Applebot-Extended`, Apple model eğitimi tercihini yönetir; arama görünürlüğü
  tercihi değildir. Maksimum erişim talebine uygun olarak engellenmemiştir.

## ChatGPT, Perplexity ve Claude

- ChatGPT Search için `OAI-SearchBot`, Perplexity için `PerplexityBot` açık.
- Claude için arama (`Claude-SearchBot`), kullanıcı isteği (`Claude-User`) ve
  model geliştirme (`ClaudeBot`) botları açık.
- WAF loglarında bu botların başarılı `200` erişimi doğrulanmalı.
- ChatGPT yönlendirmeleri analitikte `utm_source=chatgpt.com` ile izlenebilir.
- `llms.txt` deneysel bir gezinme özetidir. Google bunu yok sayar; sıralama veya
  citation artışı beklenmemelidir. Yetkili içerik her zaman HTML sayfalarıdır.

## DuckDuckGo ve Brave

- DuckDuckGo’nun kendi `DuckDuckBot` tarayıcısı açık tutulmuştur.
- Brave Search ayrı bir user-agent yayımlamıyor; sayfanın Googlebot tarafından
  taranabilir olmasını referans alıyor. Googlebot açık ve ana içerik statik HTML.

## İçerik ve otorite takvimi

- `/blog/` altında dokuz karar rehberi ve `/editoryal-ilkeler/` yayın sistemi
  hazırdır. Her metin production öncesi marka sorumlusu tarafından okunmalı;
  platform/mevzuat iddialarının bağlantıları yeniden açılmalıdır.
- Uydurma veya yüzeysel “SEO blogları” yerine, yayın izni olan gerçek proje vaka
  çalışmaları oluşturun: problem, kapsam, yöntem, süre, sınırlamalar ve
  doğrulanabilir sonuç.
- Anonimleştirilmiş özgün veri/benchmark üretilirse örneklem, tarih, yöntem ve
  sınırlamaları aynı sayfada açıklayın.
- Her içerikte gerçek sorumlu kişi/ekip, yayın ve önemli güncelleme tarihi olsun.
- Sayısal iddiaları mümkün olduğunca birincil kaynağa cümlenin yanında bağlayın.
- Basın, podcast, sektör yayını, iş ortağı ve izinli ortak vaka gibi gerçek üçüncü
  taraf mention’ları kazanın. Satın alınmış link/mention ağı ve sahte yorum
  kullanmayın.
- Aynı içeriği şehir adı değiştirerek çoğaltmayın. Şehir sayfası ancak o şehre
  özgü gerçek ekip, hizmet, vaka ve kullanıcı değeri olduğunda açılmalıdır.

## Ölçüm

- Google Search Console: sorgu, sayfa, ülke, cihaz, indeks ve CWV
- Bing Webmaster: arama ve AI citations/grounding queries
- Yandex Webmaster: sorgu ve index kapsamı
- Analitik: organik arama, `utm_source=chatgpt.com`, diğer AI referralları,
  iletişim ve nitelikli talep dönüşümleri
- Sabit bir prompt setiyle marka, kategori, fiyat/süre, karşılaştırma ve problem
  sorgularını Google AI, ChatGPT, Bing Copilot ve Perplexity’de düzenli örnekleyin

Citation ile marka mention’ını ayrı ölçün. Tek bir sorgu veya tek bir gün,
platformlar arası görünürlük başarısı sayılmaz.

## Analitik, formlar ve gizlilik

- Doğrulanmış ölçüm kimliği olmadan sahte veya başkasına ait analitik etiketi
  eklenmemelidir.
- Form, CRM, reklam etiketi veya davranış analitiği etkinleştirilmeden önce
  toplanan veri, saklama süresi, hizmet sağlayıcılar ve kullanıcı haklarını
  açıklayan gerçek gizlilik metni hazırlanmalıdır.
- Türkiye ve hedef pazardaki KVKK/çerez/iletişim izni gereksinimleri hukuk
  danışmanıyla doğrulanmalı; gereken etiketler izin alınmadan çalıştırılmamalıdır.
- İletişim formu eklendiğinde spam koruması kullanıcıyı ve arama botlarını site
  genelinde challenge’a sokmamalıdır.

## Birincil kaynaklar

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google AI optimizasyonu: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Organization: https://developers.google.com/search/docs/appearance/structured-data/organization
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- IndexNow: https://www.indexnow.org/documentation
- Yandex AI: https://yandex.com/support/webmaster/en/yandex-ai
- Applebot: https://support.apple.com/en-us/119829
- OpenAI bot dokümantasyonu: https://developers.openai.com/api/docs/bots
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Anthropic bots: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- DuckDuckBot: https://duckduckgo.com/duckduckgo-help-pages/results/duckduckbot
- Brave Search crawler: https://safe.search.brave.com/help/brave-search-crawler
