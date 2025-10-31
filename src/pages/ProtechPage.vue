<template>
  <div class="protech">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Protech Ürünleri</h1>
          <p class="lead">
            Yüksek teknolojiyle üretilmiş geomembran, drenaj ve yalıtım çözümleri
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
    slug: 'tpo-membran',
    name: 'TPO Membran',
    short: 'Termoplastik poliolefin esaslı, uzun ömürlü çatı su yalıtım örtüsü.',
    image: '/products/tpo.png'
  },
  {
    slug: 'su-tutucu-bant',
    name: 'PVC Su Tutucu Bant',
    short: 'Beton birleşim yerlerinde su sızdırmazlığı sağlayan PVC esaslı malzeme.',
    image: '/products/su.png'
  },
  {
    slug: 'pvc-geomembran',
    name: 'PVC Geomembran',
    short: 'Dayanıklı, esnek ve uzun ömürlü PVC esaslı su yalıtım örtüsü.',
    image: '/products/pvc.jpg'
  },
  {
    slug: 'geocell',
    name: 'GEOCELL',
    short: 'Eğimli alanlarda toprak kaybını önleyen hücresel dolgu sistemi.',
    image: '/products/geocell.png'
  },
  {
    slug: 'polietilen-geomembran',
    name: 'Polietilen Geomembran',
    short: 'Yüksek mukavemetli, kimyasal dayanımı yüksek su yalıtım malzemesi.',
    image: '/products/polıetılen.png'
  },
  {
    slug: 'geotekstil',
    name: 'Geotekstil',
    short: 'Filtre, drenaj ve ayırma amaçlı uzun ömürlü sentetik tekstil malzemesi.',
    image: '/products/geotekstil.png'
  },
  {
    slug: 'geogrid',
    name: 'Geogrid',
    short: 'Yüksek çekme dayanımlı polimer donatılı zemin güçlendirme malzemesi.',
    image: '/products/geogrid.png'
  },
  {
    slug: 'epdm-geomembran',
    name: 'EPDM Geomembran',
    short: 'Kauçuk esaslı, yüksek elastikiyetli ve UV dayanımlı geomembran.',
    image: '/products/epdm.png'
  },
  {
    slug: 'drenaj-levhasi',
    name: 'Drenaj Levhası',
    short: 'HDPE esaslı, toprak altı koruma ve su yalıtım malzemesi.',
    image: '/products/drenaj.png'
  },
 
  {
    slug: 'geonet',
    name: 'Geonet (Drenaj Kompozit)',
    short: 'Basınca dayanıklı, sıvı ve gaz tahliyesi sağlayan drenaj malzemesi.',
    image: '/products/geonet.png'
  }
]
</script>

<style scoped>
.protech {
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
  background: #fff;
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
}

/* Buton */
.btn {
  display: inline-block;
  background-color: #0c2b4d;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
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
