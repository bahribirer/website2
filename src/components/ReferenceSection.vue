<template>
  <section class="references">
    <div class="container">
      <h2>Referanslarımız</h2>
      <p class="subtitle">
        Yalıtım çözümlerimizle iş birliği yaptığımız bazı değerli markalar
      </p>

      <div class="logos">
        <div v-for="ref in references" :key="ref.id" class="logo-card">
          <img :src="ref.image" :alt="ref.name" />
          <p>{{ ref.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const references = [
  { id: 1, name: 'Türkiye İş Bankası', image: '/referans/is.jpg' },
  { id: 2, name: 'Eczacıbaşı', image: '/referans/ecza.jpg' },
  { id: 3, name: 'Starbucks', image: '/referans/star.jpg' },
  { id: 4, name: 'Varyap Meridyen', image: '/referans/varyap.jpg' }
]
</script>

<style scoped>
.references {
  padding: 4rem 0;
  background: #ffffff; /* beyaz arka plan */
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Başlıklar */
h2 {
  color: #0c2b4d;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.3px;
}

.subtitle {
  color: #8a98a9;
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

/* Logo grid */
.logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
}

/* Logo kartı */
.logo-card {
  background: #ffffff;
  padding: 1.4rem;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(12, 43, 77, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  width: 100%;
  max-width: 260px;
  border-top: 4px solid transparent;
}

.logo-card:hover {
  transform: translateY(-5px);
  border-top-color: #0c2b4d;
  box-shadow: 0 6px 16px rgba(12, 43, 77, 0.18);
}

/* Logo resmi */
.logo-card img {
  width: 100%;
  max-width: 180px;
  border-radius: 12px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.85;
}

.logo-card:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

/* Logo ismi */
.logo-card p {
  margin-top: 0.75rem;
  color: #0c2b4d;
  font-weight: 600;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 992px) {
  .logos {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }
  .logo-card img {
    max-width: 140px;
  }
}
@media (max-width: 576px) {
  .logos {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .logo-card img {
    max-width: 120px;
  }
}
</style>
