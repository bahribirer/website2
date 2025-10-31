<template>
  <div class="referanslar-page">
    <!-- Hero -->
    <section class="hero">
      <div class="overlay">
        <div class="container">
          <h1>Referanslarımız</h1>
          <p class="lead">Projelerimizden bazılarını gururla sunuyoruz.</p>
        </div>
      </div>
    </section>

    <!-- Liste -->
    <ReferencesSection />
  </div>
</template>

<script setup>
import ReferencesSection from '../components/ReferencesSection.vue'
</script>

<style scoped>
.referanslar-page {
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
  margin: 0 0 0.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}
.lead {
  opacity: 0.95;
  font-size: 1.05rem;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 576px) {
  .hero h1 {
    font-size: 1.7rem;
  }
  .lead {
    font-size: 0.95rem;
  }
}
</style>
