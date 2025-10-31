<template>
  <section class="contact">
    <div class="container">
      <h2>İletişim</h2>
      <p class="subtitle">
        Bizimle doğrudan iletişime geçin — ofis adresimiz, telefon ve e-posta bilgilerimiz aşağıdadır.
      </p>

      <div class="info">
        <h3>RMS Yapı Grubu</h3>
        <p>Gülbahar Mah. Serçe Sk. No:5/2</p>
        <p>Şişli / İstanbul, 34394</p>
        <p><strong>Telefon:</strong> <a href="tel:+905322124815">(+90) 532 212 48 15</a></p>
        <p><strong>E-posta:</strong> <a href="mailto:rgorgu50@gmail.com">rgorgu50@gmail.com</a></p>

        <!-- 📍 Google Maps (Pin'li ve isimli) -->
        <div class="map">
          <iframe
            src="https://www.google.com/maps?q=Gülbahar+Mah.+Serçe+Sk.+No:5/2,+Şişli,+İstanbul&hl=tr&z=17&output=embed"
            width="100%"
            height="320"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 0;
  background: #ffffff;
}

.container {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

h2 {
  color: #0c2b4d;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #8a98a9;
  margin-bottom: 3rem;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Bilgi kısmı */
.info {
  text-align: center;
  color: #0c2b4d;
  line-height: 1.8;
  background: #f9fbfd;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(12, 43, 77, 0.08);
  border-top: 4px solid #0c2b4d;
}

.info h3 {
  color: #0c2b4d;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.info p {
  margin-bottom: 0.4rem;
  color: #0c2b4d;
}

.info a {
  color: #0c2b4d;
  text-decoration: none;
  font-weight: 600;
}

.info a:hover {
  color: #143c6b;
}

/* 📍 Harita */
.map {
  margin-top: 1.8rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #c7d0db;
  box-shadow: 0 2px 10px rgba(12, 43, 77, 0.08);
}

/* Responsive */
@media (max-width: 576px) {
  .container {
    width: 94%;
  }
  h2 {
    font-size: 1.7rem;
  }
  .info {
    padding: 2rem 1.25rem;
  }
}
</style>
