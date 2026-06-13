---
title: Dokumantasyon
description: Neta kurulum ve kullanim dokumantasyonu.
order: 1
---

# Dokumantasyon

Neta dokumantasyon sistemi hazir. Icerik Markdown dosyalariyla sayfa bazli yonetilir.

## Icerik nasil eklenir?

`content/docs` klasorune yeni bir `.md` dosyasi ekle. Dosya yolu otomatik olarak `/docs/...` route'una donusur.

```md
---
title: Sayfa basligi
description: Kisa aciklama
order: 2
---

# Sayfa basligi

Markdown icerigi buraya gelecek.
```

## Sonraki adim

Kurulum, self-host, moduller ve AI asistan gibi sayfalari ayri Markdown dosyalari olarak ekleyebiliriz.
