<template>
  <div class="product-card" @click="$emit('click')">
    <img :src="image" :alt="title" />
    <div class="info">
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
      <div v-if="tags && tags.length" class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  subtitle?: string
  tags?: string[]
}>()
</script>

<style scoped>
.product-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border-top: 4px solid transparent;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-5px);
  border-top-color: #0c2b4d;
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.15);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.info {
  padding: 1rem;
  text-align: center;
}

/* Başlık */
h3 {
  color: #0c2b4d;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

/* Alt yazı */
p {
  color: #8a98a9;
  font-size: 0.95rem;
  min-height: 38px;
  margin-bottom: 0.5rem;
}

/* Etiketler */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
}

.tag {
  background: #eef2f6;
  color: #0c2b4d;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid #ccd4dd;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 0.3s ease;
}

.product-card:hover .tag {
  background: #0c2b4d;
  color: #ffffff;
  border-color: #0c2b4d;
}

/* Responsive */
@media (max-width: 576px) {
  .product-card img {
    height: 160px;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
