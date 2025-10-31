<template>
  <div class="hasmembran">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Has Membran Ürünleri</h1>
          <p class="lead">
            Temelden çatıya, yüksek performanslı yerli üretim su yalıtım çözümleri
          </p>
        </div>
      </div>
    </section>

    <!-- Ürün Grid -->
    <section class="products container">
      <div class="grid">
        <div v-for="p in products" :key="p.slug" class="card">
          <img :src="p.image" :alt="p.name" />
          <h3>{{ p.name }}</h3>
          <p>{{ p.short }}</p>
          <RouterLink :to="`/urunler/${p.slug}`" class="btn">Detaylı Bilgi</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    slug: 'hasproof-membran',
    name: 'HASPROOF Membran',
    short: 'Beton öncesi uygulanabilen akıllı su yalıtım membranı.',
    image: '/products/proof.jpg.png'
  },
  {
    slug: 'via-membran',
    name: 'VIA Viyadük Membranı',
    short: 'Köprü ve viyadükler için yüksek dayanımlı izolasyon sistemi.',
    image: '/products/via.jpg.png'
  },
  {
    slug: 'par4000-kirmizi',
    name: 'PAR4000 Kırmızı Arduazlı Membran',
    short: 'Uzun ömürlü ve estetik kırmızı arduazlı çatı membranı.',
    image: '/products/par4000.jpg.png'
  },
  {
    slug: 'par4000-yesil',
    name: 'PAR4000 Yeşil Arduazlı Membran',
    short: 'Çevre dostu, yüksek dayanımlı yeşil arduazlı membran.',
    image: '/products/paryesil.jpg.png'
  },
  {
    slug: 'par4000-gri',
    name: 'PAR4000 Gri Arduazlı Membran',
    short: 'Modern görünüm ve su geçirmezlik bir arada.',
    image: '/products/pargri.jpg.png'
  },
  {
    slug: 'p4000-membran',
    name: 'P4000 Membran',
    short: 'Su yalıtımı ve termal izolasyonu tek yapıda buluşturan ürün.',
    image: '/products/4000.jpg.png'
  },
  {
    slug: 'p3000-membran',
    name: 'P3000 Membran',
    short: 'Yüksek izolasyon gücü ve uzun ömürlü performans.',
    image: '/products/p3000.jpg.webp'
  },
  {
    slug: 'likit-membran',
    name: 'Likit Membran',
    short: 'Fırça veya rulo ile uygulanabilen çok yönlü izolasyon.',
    image: '/products/likit.jpg.png'
  },
  {
    slug: 'c3000-membran',
    name: 'C3000 Membran',
    short: 'Zorlu koşullar için üretilmiş dayanıklı bitümlü membran.',
    image: '/products/c3000.jpg.webp'
  },
  {
    slug: 'c2000-membran',
    name: 'C2000 Membran',
    short: 'Fiberglas takviyeli, çevre dostu PVC su yalıtım membranı.',
    image: '/products/c2000.jpg.webp'
  }
]
</script>

<style scoped>
.hasmembran {
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
}

/* Hero */
.hero {
  position: relative;
  background: url('/hero-bg.jpg') center/cover no-repeat;
  color: #ffffff;
}
.overlay {
  background: rgba(12, 43, 77, 0.85); /* koyu lacivert overlay */
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
  opacity: 0.9;
  font-size: 1.05rem;
}

/* Grid */
.products {
  padding: 3rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border-top: 4px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  box-shadow: 0 3px 10px rgba(12, 43, 77, 0.06);
}
.card:hover {
  transform: translateY(-5px);
  border-top-color: #0c2b4d;
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.15);
}
.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
h3 {
  color: #0c2b4d;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
p {
  color: #8a98a9;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  min-height: 45px;
  line-height: 1.5;
}

/* CTA Button */
.btn {
  display: inline-block;
  background-color: #0c2b4d;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #143c6b;
}

/* Responsive */
@media (max-width: 576px) {
  .hero h1 {
    font-size: 1.7rem;
  }
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
