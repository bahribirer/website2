<template>
  <section class="products">
    <div class="container">
      <h2>Ürünlerimiz</h2>
      <p class="subtitle">
        Has Membran, Ankara Membran ve Protech markalarına ait yüksek performanslı yalıtım çözümlerimiz
      </p>

      <div class="grid">
        <div v-for="brand in brands" :key="brand.id" class="card">
          <img :src="brand.image" :alt="brand.name" />
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.desc }}</p>
          <RouterLink :to="brand.link" class="btn">Detaylı Bilgi</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const brands = [
  {
    id: 1,
    name: 'Has Membran Ürünleri',
    desc: 'Temel, çatı ve teraslarda yüksek dayanımlı bitümlü ve polimer esaslı yalıtım çözümleri.',
    image: '/brands/has.jpg',
    link: '/urunler/has-membran'
  },
  {
    id: 2,
    name: 'Ankara Membran Ürünleri',
    desc: 'Ankara Membran çatısı altında üretilen PVC ve sentetik bazlı profesyonel yalıtım ürünleri.',
    image: '/brands/ankara.jpg',
    link: '/urunler/ankara-membran'
  },
  {
    id: 3,
    name: 'Protech Membran Ürünleri',
    desc: 'Protech markasının endüstriyel uygulamalara özel, ileri seviye yalıtım sistemleri.',
    image: '/brands/pro.jpg',
    link: '/urunler/protech'
  }
]
</script>

<style scoped>
.products {
  padding: 4rem 0;
  background: #ffffff; /* beyaz arka plan */
  font-family: 'Poppins', sans-serif;
  text-align: center;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Başlık */
h2 {
  color: #0c2b4d;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

/* Alt başlık */
.subtitle {
  color: #8a98a9;
  margin-bottom: 3rem;
  font-size: 1rem;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Kart */
.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  border-top: 4px solid transparent;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.15);
  border-top-color: #0c2b4d;
}

/* Kart görseli */
.card img {
  width: 100%;
  height: 200px;
  object-fit: contain; /* 🔹 resmi ezmeden sığdırır */
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f7f9fc; /* 🔹 arka plan, logoların kenarında boşluk olursa hoş görünür */
  padding: 8px; /* 🔹 iç boşluk: orantısız resimler daha estetik durur */
}

/* Kart başlık ve metin */
h3 {
  color: #0c2b4d;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

p {
  color: #8a98a9;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  min-height: 60px;
  line-height: 1.5;
}

/* CTA Buton */
.btn {
  display: inline-block;
  background-color: #0c2b4d;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #143c6b;
}

/* Responsive */
@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    padding: 1rem;
  }
}
</style>
