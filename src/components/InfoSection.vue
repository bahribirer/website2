<template>
  <section class="info">
    <div class="container">
      <div class="text">
        <h2>Membranın Önemi</h2>
        <p>
          Membranlar, birçok endüstriyel uygulamada kritik bir rol oynar. Özellikle inşaat sektöründe binaların su yalıtımı ve hava geçirgenliğini kontrol etmek için kullanılır.
          Bu, yapıların bütünlüğünü korurken aynı zamanda iç mekan konforunu ve hava kalitesini artırır.
        </p>

        <h2>Kullanım Alanları</h2>
        <p>
          Membranlar; inşaat, otomotiv, su arıtma, gıda işleme ve farmasötik endüstrilerinde geniş kullanım alanına sahiptir.
          İnşaat sektöründe özellikle su yalıtımı ve buhar bariyeri olarak tercih edilir, yapılara uzun ömür ve dayanıklılık kazandırır.
        </p>

        <h2>Neden RMS İzolasyon?</h2>
        <p>
          RMS İzolasyon, sadece bir inşaat firması değil, aynı zamanda işletmenizin başarısı için güvenilir bir iş ortağıdır.
          İnşaat projelerimiz ve sunduğumuz izolasyon çözümleri birçok endüstriyel alanda fark yaratır. Doğru seçim, işletmenizin performansı ve maliyet etkinliği açısından büyük önem taşır.
        </p>

        <h2>Öne Çıkan Özelliklerimiz</h2>
        <p>
          Yüksek kaliteli ürünlerimiz, özelleştirilebilir çözümlerimiz, maliyet etkinliği, çevre dostu üretim anlayışımız, müşteri desteğimiz ve sektörel tecrübemizle fark yaratıyoruz.
        </p>

        <p>
          RMS Yapı Grubu olarak merkezimizden Türkiye’nin dört bir yanına membran nakliyatı hizmeti sunmaktayız.
          Güçlü lojistik ağımız ve deneyimli ekibimizle, ihtiyaç duyulan ürünleri zamanında ve güvenle ulaştırıyoruz.
          Türkiye’nin farklı bölgelerinde gerçekleştirdiğimiz inşaat projeleri ile sektörde kalıcı izler bırakıyor, kalite, güven ve sürdürülebilirlik ilkeleriyle değer katıyoruz.
        </p>

        <RouterLink to="/kurumsal" class="btn">Daha Fazla Bilgi</RouterLink>
      </div>

      <!-- 🔹 Altlı üstlü görseller -->
      <div class="images">
        <img src="/kurumsal/kurum3.jpeg" alt="RMS Yapı Grubu Fabrika" class="top-img" />
        <img src="/brands/ana.jpg" alt="RMS Yapı Grubu Çalışma Alanı" class="bottom-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.info {
  padding: 4rem 0;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
  gap: 3rem;
}

.text {
  color: #8a98a9;
}

h2 {
  color: #0c2b4d;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  color: #8a98a9;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.btn {
  display: inline-block;
  margin-top: 1.5rem;
  background-color: #0c2b4d;
  color: #ffffff;
  padding: 0.85rem 1.6rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #143c6b;
}

/* 🔹 Görsel alanı */
/* 🔹 Görsel alanı */
.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
}

.images img {
  width: 100%;
  max-width: 500px; /* ✅ Her iki fotoğraf için sabit genişlik */
  height: 320px; /* ✅ Eşit yükseklik */
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 6px 20px rgba(12, 43, 77, 0.15);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Hover efekti */
.images img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 26px rgba(12, 43, 77, 0.25);
}


/* Hafif modern görünüm: biri biraz büyük, diğeri küçük */
.images .top-img {
  max-width: 520px;
  transform: translateY(6px);
}

.images .bottom-img {
  max-width: 520px;
  transform: translateY(-6px);
}

/* Hover efekti */
.images img:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 26px rgba(12, 43, 77, 0.25);
}

/* Responsive */
@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .images {
    gap: 1.5rem; /* mobilde biraz daha dar */
  }

  .images .top-img,
  .images .bottom-img {
    max-width: 90%;
    transform: none;
  }
}

@media (max-width: 576px) {
  .info {
    padding: 0 0.5rem 3rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  p {
    font-size: 0.98rem;
  }
}
</style>

