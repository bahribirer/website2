<template>
  <div class="urunler">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Ürünler</h1>
          <p class="lead">Su yalıtımı için yüksek kalite membran ve kaplama çözümlerimiz</p>
        </div>
      </div>
    </section>

    <!-- Filtreler -->
    <section class="filters">
      <div class="container bar">
        <div class="left">
          <span class="label">Marka</span>
          <Dropdown
            v-model="state.brand"
            :options="brands"
            optionLabel="label"
            optionValue="value"
            placeholder="Tümü"
            class="w-15rem"
          />
        </div>

        <div class="right">
          <span class="label">Ara</span>
          <InputText v-model="state.search" placeholder="Ürün adı..." />
        </div>
      </div>
    </section>

    <!-- Grid -->
    <section class="list container">
      <div class="grid">
        <ProductCard
          v-for="p in filtered"
          :key="p.slug"
          :image="p.image"
          :title="p.name"
          :subtitle="p.short"
          :tags="p.tags"
          @click="goDetail(p)"
        />
      </div>

      <div v-if="filtered.length === 0" class="empty">
        <p>Hiç ürün bulunamadı.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'

import { hasMembranProducts } from '../data/hasmembran'
import { ankaraMembranProducts } from '../data/ankaramembran'
import { protechProducts } from '../data/protech'

const router = useRouter()

const all = [
  ...hasMembranProducts.map(p => ({ ...p, brand: 'hasmembran' })),
  ...ankaraMembranProducts.map(p => ({ ...p, brand: 'ankaramembran' })),
  ...protechProducts.map(p => ({ ...p, brand: 'protech' }))
]

const brands = [
  { label: 'Tümü', value: '' },
  { label: 'Has Membran', value: 'hasmembran' },
  { label: 'Ankara Membran', value: 'ankaramembran' },
  { label: 'Protech', value: 'protech' }
]

const state = reactive({
  brand: '' as string,
  search: '' as string
})

const filtered = computed(() => {
  const s = state.search.trim().toLowerCase()
  return all.filter(p => {
    const byBrand = state.brand ? p.brand === state.brand : true
    const byText = s ? (p.name + ' ' + p.short).toLowerCase().includes(s) : true
    return byBrand && byText
  })
})

function goDetail(p: any) {
  router.push(`/urunler/${p.slug}`)
}
</script>

<style scoped>
.urunler {
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
  background: rgba(12, 43, 77, 0.85); /* koyu lacivert overlay */
}
.overlay .container {
  text-align: center;
  padding: 3rem 0 2rem;
}
.hero h1 {
  font-size: 2.2rem;
  margin: 0 0 0.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.lead {
  opacity: 0.9;
  margin: 0;
  font-size: 1.05rem;
}

/* Filters */
.filters {
  background: #f7f9fb; /* açık gri ton */
  border-bottom: 1px solid #d6dde5;
}
.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
}
.bar {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  flex-wrap: wrap;
}
.left,
.right {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;
}
.label {
  font-weight: 600;
  color: #0c2b4d;
}
.w-15rem {
  width: 15rem;
}

/* Grid */
.list {
  padding: 2rem 0 3rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
}
.empty {
  text-align: center;
  color: #8a98a9;
  margin-top: 2rem;
  font-size: 1rem;
}
</style>
