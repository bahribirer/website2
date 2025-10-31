<template>
  <div class="product-detail">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>{{ product?.name }}</h1>
          <p class="lead">{{ product?.short }}</p>
        </div>
      </div>
    </section>

    <!-- İçerik -->
    <section class="content container" v-if="product">
      <div v-html="product.long" class="text"></div>
    </section>

    <!-- Ürün bulunamadı -->
    <section v-else class="not-found container">
      <h2>Ürün bulunamadı</h2>
      <RouterLink to="/urunler" class="btn">Ürünlere Dön</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 🔹 Tüm veri dosyaları
import { hasMembranProducts } from '../data/hasmembran'
import { ankaraMembranProducts } from '../data/ankaramembran'
import { protechProducts } from '../data/protech'

const route = useRoute()
const slug = route.params.slug as string

// 🔥 Tüm markaların ürünlerini tek diziye topla
const allProducts = [
  ...hasMembranProducts,
  ...ankaraMembranProducts,
  ...protechProducts
]

// Slug’a göre ürünü bul
const product = computed(() => allProducts.find(p => p.slug === slug))
</script>

<style scoped>
.product-detail {
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
}

/* Hero Bölümü */
.hero {
  position: relative;
  background: url('/hero-bg.jpg') center/cover no-repeat;
  color: #fff;
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
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: #ffffff;
}
.lead {
  opacity: 0.9;
  font-size: 1.05rem;
}

/* İçerik */
.content {
  padding: 3rem 0;
}
.text {
  color: #444;
  line-height: 1.8;
  font-size: 1rem;
}
.text h3 {
  color: #0c2b4d;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
}
.text ul {
  padding-left: 1.4rem;
  list-style: disc;
  color: #333;
}
.text li {
  margin: 0.4rem 0;
}

/* Ürün bulunamadı */
.not-found {
  text-align: center;
  padding: 4rem 0;
}
.not-found h2 {
  color: #0c2b4d;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}

/* Buton */
.btn {
  background: #0c2b4d;
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  transition: background 0.3s;
}
.btn:hover {
  background: #143c6b;
}

/* Responsive */
@media (max-width: 576px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  .text {
    font-size: 0.95rem;
  }
}
</style>
