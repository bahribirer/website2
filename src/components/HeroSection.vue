<template>
  <section class="hero">
    <div class="overlay">
      <div class="content">
        <h1>
          <span class="brand">RMS Yapı Grubu</span>
          <br />
          <span class="motto">
            Türkiye’nin Yarınlarına Yön Veren İzolasyon Çözümleri ve Güvenilir İnşaat Hizmetleriyle Tanışın
          </span>
        </h1>

        <p>
          Sektördeki deneyimimiz ve güçlü altyapımızla uzun ömürlü çözümler üretiyoruz.
        </p>

        <div class="buttons">
          <RouterLink to="/iletisim" class="btn primary">İletişim</RouterLink>
          <RouterLink to="/urunler" class="btn secondary">Ürünlerimiz</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background: url('/kurumsal/membran.jpg') center/cover no-repeat;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.overlay {
  background: linear-gradient(rgba(12, 43, 77, 0.9), rgba(12, 43, 77, 0.75));
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  text-align: center;
  max-width: 900px;
  padding: 2rem;
  animation: fadeIn 1.2s ease-out;
}

/* Başlık */
h1 {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.2rem;
}

.brand {
  display: block;
  font-size: 2.2rem;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 800;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

/* 🔹 Motto – profesyonel ve güçlü tipografi */
.motto {
  display: inline-block;
  margin-top: 0.6rem;
  font-family: 'Montserrat', 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.9rem;
  letter-spacing: 0.4px;
  color: #ffffff;
  line-height: 1.35;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

/* Açıklama */
p {
  font-size: 1.15rem;
  margin-bottom: 2.2rem;
  line-height: 1.6;
  color: #d9e2ef;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

/* Butonlar */
.buttons {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
}

.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s;
}

/* Primary */
.primary {
  background-color: #ffffff;
  color: #0c2b4d;
  border: 2px solid #ffffff;
}
.primary:hover {
  background-color: #143c6b;
  color: #ffffff;
}

/* Secondary */
.secondary {
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}
.secondary:hover {
  background-color: #ffffff;
  color: #0c2b4d;
}

/* Giriş animasyonu */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero {
    height: 70vh;
  }
  h1 {
    font-size: 2.2rem;
  }
  .motto {
    font-size: 1.4rem;
  }
  p {
    font-size: 1rem;
  }
  .buttons {
    flex-direction: column;
    gap: 0.8rem;
  }
  .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 60vh;
  }
  h1 {
    font-size: 1.8rem;
  }
  .motto {
    font-size: 1.2rem;
  }
}
</style>

<!-- 🔹 Font import (global index.html'e eklemen gerek) -->
<!--
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
-->
