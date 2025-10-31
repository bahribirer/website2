<template>
  <div class="kurumsal">
    <!-- 🔹 HERO -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1>
                <span class="highlight">RMS Yapı Grubu</span><br />
                İzolasyondan İnşaata Güvenli Yapıların Mimarı
              </h1>
              <p class="desc">
                Modern izolasyon teknolojileri ve yenilikçi çözümlerle, güvenli ve uzun ömürlü yapılar inşa ediyoruz.
              </p>
            </div>

            <!-- 🔹 3 Görsel (alt grid) -->
            <div class="thumbs">
              <div v-for="img in thumbs" :key="img" class="thumb-card">
                <img :src="img" alt="Kurumsal görsel" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🔹 İçerik -->
    <section class="content container">
      <div class="left">
        <p>
          RMS Yapı Grubu olarak, sadece inovasyonla değil, aynı zamanda müşterilerimizin karşılaştığı sorunları çözmek için zaman harcıyoruz.
          Bizim için müşterilerimize sadece bir telefon kadar yakın değiliz, aynı zamanda şantiye ortamında teknik çözümler sunmak için yanınızdayız.
        </p>

        <hr />

        <h3>İnşaat Teknolojilerinde İlerleme</h3>
        <p>
          İnşaat teknolojilerinin gelişimi ve malzeme biliminin sunduğu fırsatlar, günümüzde daha büyüleyici inşaat projelerine olanak sağlıyor.
          RMS Yapı Grubu olarak, uzmanlık ve yenilikçi ürün portföyümüzle siz değerli iş ortaklarımıza her aşamada ürün seçimi ve detay çözümleri ile destek oluyoruz.
          Temelden terasa su yalıtımı sorunlarınızda çözüm ortağınız RMS İzolasyon.
        </p>

        <h3>Kalite ve Uzmanlık</h3>
        <p>
          Ürün portföyümüz yüksek kalitede ve TSE standartlarına uygun su yalıtımı ürünlerini içeriyor.
          Aynı zamanda konusunda deneyimli uzman ekibimiz, sizlere daha iyi hizmet sunmak için burada.
          Has Membran olarak amacımız sadece ürün üretmek ve pazara sunmak değil, aynı zamanda satış sonrası hizmetlerimizle müşteri memnuniyetine verdiğimiz önemi yükseltmek.
        </p>

        <h3>Sektördeki Atılımımız</h3>
        <p>
          İthalat ve ihracatla başlayan serüvenimiz zamanla petrol ürünleriyle büyüdü ve RMS Görgü Yapı Grubu olarak inşaat sektöründe büyük bir atılım yaptı.
          Hedefimiz, su yalıtımı sektöründe her zaman en iyisi olma ilkesi ile çalışmak ve siz paydaşlarımıza sürdürülebilir değerler yaratmaktır.
        </p>
      </div>

      <aside class="right">
        <div class="card">
          <h4>Misyon</h4>
          <p class="muted">
            Yaşam alanlarını daha güvenli, daha konforlu ve daha sürdürülebilir hale getirmek için çalışıyoruz.
            İzolasyon malzemeleri ve membran üretiminde güvenilir bir marka olurken, yaptığımız inşaatlarla da sağlam, estetik ve uzun ömürlü yapılar bırakmayı hedefliyoruz.
            Hem Türkiye’de hem de dünyada örnek gösterilen projelere imza atarak geleceğe değer katıyoruz.
          </p>
        </div>

        <div class="card">
          <h4>Vizyon</h4>
          <p class="muted">
            Müşterilerimize kaliteli hizmet sunmak için buradayız.
            Kullandığımız malzemelerden işçiliğe kadar her aşamada titizlikle çalışıyor, izolasyon çözümlerimizle yapıları daha dayanıklı ve enerji verimli hale getiriyoruz.
            İnşaat projelerimizi güven, şeffaflık ve özveriyle yürütüyor; hayata geçirdiğimiz her projede insanların mutlu, huzurlu ve güvenle yaşayabileceği ortamlar oluşturuyoruz.
          </p>
        </div>

        <div class="card small">
          <h4>İletişim</h4>
          <ul>
            <li><strong>GSM:</strong> 0532 212 48 15</li>
            <li><strong>E-posta:</strong> rgorgu50@gmail.com</li>
          </ul>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup lang="ts">
const thumbs = [
  '/kurumsal/kurum1.jpg',
  '/kurumsal/kurum2.jpg',
  '/kurumsal/zemin.jpg'
]
</script>

<style scoped>
.kurumsal {
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
}

/* HERO */
.hero {
  position: relative;
  background: url('/kurumsal/hero.jpg') center/cover no-repeat;
  color: #fff;
}

.overlay {
  background: linear-gradient(
    to bottom,
    rgba(12, 43, 77, 0.85),
    rgba(12, 43, 77, 0.7)
  );
  width: 100%;
  height: 100%;
}

.overlay .container {
  padding: 5rem 0 4rem;
  text-align: center;
}

/* Hero text */
.hero-text h1 {
  font-size: 2.6rem;
  margin: 0 auto 1rem;
  max-width: 800px;
  line-height: 1.4;
  font-weight: 700;
}

.hero-text .highlight {
  color: #ffffff;
}


.hero-text .desc {
  font-size: 1.1rem;
  color: #e6ecf3;
  margin: 0 auto 2.5rem;
  max-width: 680px;
}

/* Görseller */
/* 🔹 Görsel galeri alanı */
.thumbs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  perspective: 1000px;
}

.thumb-card {
  position: relative;
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  width: 300px;
  height: 200px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.5s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

/* 🔹 Hover efekti: hafif yukarı kalkma + parıltı */
.thumb-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 32px rgba(12, 43, 77, 0.25);
}

/* 🔹 Görsel içeriği */
.thumb-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* 🔹 Hover’da zoom efekti */
.thumb-card:hover img {
  transform: scale(1.08);
}

/* 🔹 Üstte şeffaf degrade overlay (profesyonel görünüm) */
.thumb-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(12, 43, 77, 0.6), rgba(12, 43, 77, 0.05));
  opacity: 0.8;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.thumb-card:hover::after {
  opacity: 0.3;
}

/* 🔹 Görsel üstünde kısa başlık efekti (isteğe bağlı) */
.thumb-card::before {
  content: 'RMS Yapı Grubu';
  position: absolute;
  bottom: 14px;
  left: 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(12px);
  opacity: 0;
}

.thumb-card:hover::before {
  transform: translateY(0);
  opacity: 1;
}

/* 🔹 Responsive uyum */
@media (max-width: 992px) {
  .thumb-card {
    width: 270px;
    height: 170px;
  }
}

@media (max-width: 576px) {
  .thumb-card {
    width: 90%;
    height: 160px;
  }
}

/* İçerik */
.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2.5rem;
  padding: 3rem 0 4rem;
}

.left h3 {
  font-size: 1.4rem;
  margin: 1.5rem 0 0.5rem;
  color: #0c2b4d;
  font-weight: 700;
}

.left p {
  color: #8a98a9;
  line-height: 1.7;
}

.left hr {
  border: none;
  border-top: 1px solid rgba(12, 43, 77, 0.2);
  margin: 1.5rem 0;
}

/* Sağ taraf */
.right .card {
  background: #f6f8fc;
  border-radius: 12px;
  padding: 1.4rem 1.2rem;
  box-shadow: 0 2px 8px rgba(12, 43, 77, 0.05);
  border: 1px solid rgba(12, 43, 77, 0.08);
  margin-bottom: 1.2rem;
}

.right .card.small {
  padding: 1rem;
}

.right h4 {
  margin: 0 0 0.5rem;
  color: #0c2b4d;
  font-weight: 700;
}

.muted {
  color: #8a98a9;
  font-style: italic;
}

.right ul {
  list-style: none;
  padding: 0;
  margin: 0.25rem 0 0;
}

.right li {
  margin: 0.35rem 0;
  color: #0c2b4d;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 992px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text .desc {
    font-size: 1rem;
  }

  .thumb-card {
    width: 270px;
    height: 170px;
  }

  .content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero-text h1 {
    font-size: 1.7rem;
  }

  .thumb-card {
    width: 90%;
    height: 160px;
  }
}
</style>
