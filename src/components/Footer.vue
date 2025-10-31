<template>
  <footer class="footer">
    <div class="container grid">
      <!-- Adres ve iletişim -->
      <div>
        <h3>RMS YAPI GRUBU</h3>
        <p>Gülbahar Mah. Serçe Sk. No:5/2<br />Şişli / İstanbul, 34394</p>
        <p><strong>Tel:</strong> (+90) 532 212 48 15</p>
        <p><strong>E-Mail:</strong> rgorgu50@gmail.com</p>
      </div>

      <!-- Şirket Bilgileri -->
      <div>
        <h4>Şirket Bilgileri</h4>
        <p>RMS YAPI GRUBU İnş. Yalıtım ve Taahhüt Ltd. Şti.</p>
        <p>Vergi Dairesi: Şişli</p>
      </div>

      <!-- Şirket Profili -->
      <div>
        <h4>Şirket Profili</h4>
        <p>
          RMS Yapı Grubu, Türkiye’nin dört bir yanına membran ürünleri ulaştıran, güvenilir projeleriyle öne çıkan lider izolasyon markasıdır.
        </p>
      </div>
    </div>

    <!-- Alt kısım -->
    <div class="bottom">
     

      <p class="copyright">
        © 2025 RMS Yapı Grubu — Tüm Hakları Saklıdır.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0c2b4d; /* koyu lacivert */
  color: #ffffff;
  padding: 3rem 0 1rem;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Başlıklar */
h3, h4 {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.6rem;
}

h3 {
  font-size: 1.2rem;
}

h4 {
  font-size: 1rem;
  border-bottom: 1px solid #8a98a9;
  padding-bottom: 0.3rem;
  display: inline-block;
}

p {
  margin: 0.35rem 0;
  line-height: 1.6;
  color: #e0e6ee; /* beyazın yumuşak tonu */
}

strong {
  color: #8a98a9; /* metalik gri vurgu */
  font-weight: 600;
}

/* Alt kısım */
.bottom {
  text-align: center;
  margin-top: 2.5rem;
  border-top: 1px solid #8a98a9;
  padding-top: 1.5rem;
}

.flags {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.flags img {
  width: 28px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid #8a98a9;
  opacity: 0.85;
  transition: 0.3s;
}

.flags img:hover {
  opacity: 1;
  border-color: #b0bccd;
}

.copyright {
  font-size: 0.85rem;
  color: #8a98a9;
  letter-spacing: 0.3px;
  margin-top: 0.5rem;
}

/* Responsive */
@media (max-width: 576px) {
  .footer {
    text-align: left;
    padding: 2.5rem 1rem 1rem;
  }
  .flags {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
