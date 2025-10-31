<template>
  <div class="contact-page">
    <!-- 🔹 HERO -->
    <section class="hero">
      <div class="container">
        <h1>İletişim</h1>
        <p class="subtitle">
          RMS Yapı Grubu olarak, sizinle iletişim kurmak ve ihtiyaçlarınıza hızlı, etkili bir şekilde yanıt vermek için buradayız.
        </p>
      </div>
    </section>

    <!-- 🔹 KARTLAR -->
    <section class="contact-grid container">
      <div class="card">
        <i class="pi pi-mobile icon"></i>
        <h3>Telefon</h3>
        <p><a href="tel:+905322124815">+90 532 212 48 15</a></p>
      </div>

      <div class="card">
        <i class="pi pi-envelope icon"></i>
        <h3>E-posta</h3>
        <p><a href="mailto:rgorgu50@gmail.com">rgorgu50@gmail.com</a></p>
      </div>

      <div class="card">
        <i class="pi pi-map-marker icon"></i>
        <h3>Adres</h3>
        <p>Gülbahar Mah. Serçe Sk. No:5/2<br />Şişli / İstanbul</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-page {
  font-family: 'Poppins', sans-serif;
  color: #0c2b4d;
}

/* 🔹 Hero */
.hero {
  background: #0c2b4d;
  color: #fff;
  text-align: center;
  padding: 5rem 0 4rem;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.subtitle {
  color: #c7d3e0;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 🔹 Kart Grid */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 0;
}

/* Kart */
.card {
  background: #ffffff;
  border-radius: 14px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 3px 15px rgba(12, 43, 77, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(12, 43, 77, 0.15);
}

/* İkon */
.icon {
  font-size: 2.5rem;
  color: #0c2b4d;
  margin-bottom: 1rem;
}

/* Başlık ve metin */
h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0c2b4d;
  margin-bottom: 0.6rem;
}

p {
  color: #5c6b7a;
  font-size: 1rem;
  line-height: 1.5;
}

a {
  color: #0c2b4d;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #143c6b;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}
</style>
