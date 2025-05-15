# 🌤️ Hava Durumu Uygulaması

Bu proje, Flask ve JavaScript kullanılarak geliştirilmiş, şehir seçimine göre arka planı değişen modern ve görsel bir hava durumu uygulamasıdır.

---


## 🚀 Özellikler

- Şehir seçimine göre arka plan resmi otomatik değişir.
- Rastgele hava durumu animasyonları (güneşli, yağmurlu, bulutlu, karlı).
- Modern ve responsive tasarım.
- Hava durumu detayları: Sıcaklık, rüzgar hızı, nem oranı.
- Kullanıcı dostu ve sade arayüz.

---

## 🗂️ Proje Yapısı

```
hava_durumu/
├── app.py
├── config.py
├── requirements.txt
├── static/
│   ├── backgrounds/
│   │   ├── ankara.jpeg
│   │   ├── antalya.jpeg
│   │   ├── bursa.jpg
│   │   ├── istanbul.jpeg
│   │   ├── izmir.jpeg
│   │   ├── konya.jpg
│   │   └── trabzon.jpg
│   ├── script.js
│   └── style.css
├── templates/
│   └── index.html
└── venv/
```

---

## ⚙️ Kurulum

1. **Depoyu klonlayın:**
   ```bash
   git clone <repo-link>
   cd hava_durumu
   ```

2. **Sanal ortam oluşturun ve aktif edin:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Gerekli paketleri yükleyin:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Uygulamayı başlatın:**
   ```bash
   python app.py
   ```

5. **Tarayıcınızda açın:**
   ```
   http://127.0.0.1:5000
   ```

---

## 🖼️ Arka Plan Görselleri

Her şehir için özel arka plan görselleri kullanılmıştır. Görselleri `static/backgrounds/` klasörüne ekleyebilirsiniz. Dosya isimlerinin script.js ile uyumlu olmasına dikkat edin.

---

## 👨‍💻 Katkı

Katkıda bulunmak isterseniz, lütfen bir fork oluşturun ve pull request gönderin.

---
