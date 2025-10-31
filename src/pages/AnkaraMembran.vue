<template>
  <div class="ankaramembran">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Ankara Membran Ürünleri</h1>
          <p class="lead">
            Zorlu iklim koşullarına dayanıklı, yüksek performanslı bitümlü yalıtım sistemleri
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
    slug: 'yonca-desenli',
    name: 'Yonca Desenli Membran',
    short: 'Dekoratif, dayanıklı ve kolay uygulanabilir su yalıtım çözümü.',
    image: '/products/yonca.jpg.png'
  },
  {
    slug: 'yesil-arduaz',
    name: 'Yeşil Arduaz Membran',
    short: 'Estetik, çevre dostu yeşil arduaz granüllü bitüm membran.',
    image: '/products/arduaz.jpg'
  },
  {
    slug: 'turbot-likit-1k',
    name: 'TURBOT Likit 1K',
    short: 'Modifiye bitüm esaslı, tek bileşenli elastik likit membran.',
    image: '/products/turbot.jpg'
  },
  {
    slug: 'tugla-desenli',
    name: 'Tuğla Desenli Membran',
    short: 'Dekoratif görünüm ve üstün su yalıtımı bir arada.',
    image: '/products/tugla.jpg'
  },
  {
    slug: 'plato-serisi',
    name: 'Plato Serisi (-10°C)',
    short: 'Karasal iklimlere özel APP modifiyeli plastomerik membran serisi.',
    image: '/products/plato.jpg'
  },
  {
    slug: 'petek-desenli',
    name: 'Petek Desenli Membran',
    short: 'Dekoratif baskı ve yüksek mekanik dayanım sunan membran.',
    image: '/products/petek.jpg'
  },
  {
    slug: 'kirmizi-arduaz',
    name: 'Kırmızı Arduaz Membran',
    short: 'Kırmızı arduaz kaplamalı, dayanıklı bitüm esaslı membran.',
    image: '/products/kırmızıarduaz.jpg'
  },
  {
    slug: 'kiremit-desenli',
    name: 'Kiremit Desenli Membran',
    short: 'Kiremit desenli, estetik ve su geçirmez yalıtım çözümü.',
    image: '/products/kiremit.jpg'
  },
  {
    slug: 'atlas-serisi',
    name: 'Atlas Serisi (-20°C)',
    short: 'Sert soğuk iklimlere özel SBS modifiyeli elastomerik membran.',
    image: '/products/atlas.jpg'
  },
  {
    slug: 'aluminyum-membran',
    name: 'Alüminyum Membran',
    short: 'Yüksek yansıtıcılık ve dekoratif görünüm sunan yalıtım ürünü.',
    image: '/products/aluminyum.jpg'
  }
]
</script>

<style scoped>
.ankaramembran {
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
}

/* Hero */
.hero {
  position: relative;
  background: url('/hero-bg.jpg') center/cover no-repeat;
  color: #fff;
}
.overlay {
  background: rgba(12, 43, 77, 0.85); /* Lacivert overlay */
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
