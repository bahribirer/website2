<template>
  <div class="galeri-page">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Galeri</h1>
          <p class="lead">Projelerimizden kareler</p>
        </div>
      </div>
    </section>

    <!-- Galeri Grid -->
    <section class="gallery container">
      <div class="grid">
        <div v-for="img in images" :key="img.src" class="item">
          <img :src="img.src" :alt="img.title" loading="lazy" />
          <p class="caption">{{ img.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const images = [
  { src: '/gallery/aydın.png', title: 'AYDIN KONUT' },
  { src: '/gallery/bursakayıoba3.png', title: 'BURSA KAYIOBA 4' },
  { src: '/gallery/eczacıbası.png', title: 'ECZACIBAŞI KANYON' },
  { src: '/gallery/ekin.png', title: 'EKİN KİMYA' },
  { src: '/gallery/farma.png', title: 'PHARMA TREND' },
  { src: '/gallery/gültepe.png', title: 'GÜLTEPE ROSEHILL' },
  { src: '/gallery/gultepe2.png', title: 'GÜLTEPE ROSEHILL 2' },
  { src: '/gallery/guzeldaire.png', title: 'GÜZEL OTO İDARE' },
  { src: '/gallery/guzeloto.png', title: 'GÜZEL OTO' },
  { src: '/gallery/kayıoba3.png', title: 'BURSA KAYIOBA 3' },
  { src: '/gallery/kayıoba4.png', title: 'BURSA KAYIOBA 3 PROJESİ' },
  { src: '/gallery/kayıoba5.png', title: 'BURSA KAYIOBA 5' },
  { src: '/gallery/müric.png', title: 'MÜRİÇ KALIP' },
  { src: '/gallery/pendik.jpg', title: 'PENDİK YALI REZİDANS' },
  { src: '/gallery/pharmakim.png', title: 'PHARMAKİM İLAÇ' },
  { src: '/gallery/pharmakim2.png', title: 'PHARMAKİM' },
  { src: '/gallery/pharmatrend.png', title: 'PHARMA TREND DEPOLAMA' },
  { src: '/gallery/starbucks.png', title: 'STARBUCKS' },
  { src: '/gallery/sahintepesi.png', title: 'ŞAHİNTEPESİ SU DEPOSU' },
  { src: '/gallery/taksim.png', title: 'TAKSİM 360' },
  { src: '/gallery/taksim360.png', title: 'TAKSİM 360 PROJESİ' },
  { src: '/gallery/varyapkoprü.png', title: 'VARYAP MERİDYEN KÖPRÜ' },
  { src: '/gallery/varyapmeridyen.png', title: 'VARYAP MERİDYEN' },
  { src: '/gallery/veysel.png', title: 'VEYSELOĞLU HOLDİNG' }
]
</script>

<style scoped>
.galeri-page {
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  color: #0c2b4d;
}

/* Hero */
.hero {
  position: relative;
  background: url('/hero-bg.jpg') center/cover no-repeat;
  color: #fff;
}
.overlay {
  background: rgba(12, 43, 77, 0.85);
}
.overlay .container {
  text-align: center;
  padding: 3rem 0 2rem;
}
.hero h1 {
  font-size: 2.2rem;
  margin: 0 0 0.5rem;
  font-weight: 700;
}
.lead {
  opacity: 0.95;
  font-size: 1.05rem;
}

/* Galeri Grid */
.gallery {
  padding: 3rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(12, 43, 77, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.item:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.15);
}
.item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.item:hover img {
  transform: scale(1.08);
}

/* Başlık */
.caption {
  text-align: center;
  padding: 0.75rem 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: #0c2b4d;
}

/* Responsive */
@media (max-width: 992px) {
  .item img {
    height: 200px;
  }
}
@media (max-width: 576px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  .item img {
    height: 180px;
  }
  .caption {
    font-size: 0.85rem;
  }
}
</style>
