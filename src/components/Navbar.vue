<template>
  <header class="navbar">
    <div class="container">
      <!-- Logo & Marka -->
      <div class="logo-area">
        <img src="/brands/rmslogo2.png" alt="RMS Yapı Grubu Logo" class="logo" />
        <div class="brand">
        </div>
        
      </div>

      <!-- Hamburger -->
      <button class="hamburger" @click="open = !open" aria-label="Menüyü Aç/Kapat">
        <i class="pi" :class="open ? 'pi-times' : 'pi-bars'"></i>
      </button>

      <!-- Menü -->
      <nav class="menu" :class="{ open }">
        <RouterLink to="/" class="menu-item" :class="{ active: isActive('/') }" @click="close">Ana Sayfa</RouterLink>
        <RouterLink to="/kurumsal" class="menu-item" :class="{ active: isActive('/kurumsal') }" @click="close">Kurumsal</RouterLink>
        <RouterLink to="/urunler" class="menu-item" :class="{ active: isActive('/urunler') }" @click="close">Ürünler</RouterLink>
        <RouterLink to="/galeri" class="menu-item" :class="{ active: isActive('/galeri') }" @click="close">Galeri</RouterLink>
        <RouterLink to="/referanslar" class="menu-item" :class="{ active: isActive('/referanslar') }" @click="close">Referanslar</RouterLink>
        <RouterLink to="/iletisim" class="menu-item" :class="{ active: isActive('/iletisim') }" @click="close">İletişim</RouterLink>

        <!-- 🔹 WhatsApp butonu -->
        <a
          href="https://wa.me/905322124815?text=Merhaba%20RMS%20Yapi%20Grubu%2C%20bilgi%20almak%20istiyorum."
          target="_blank"
          rel="noopener"
          class="whatsapp-btn"
          aria-label="WhatsApp ile iletişime geç"
        >
          <i class="pi pi-whatsapp"></i>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path: string) => route.path === path
const open = ref(false)
const close = () => (open.value = false)
</script>

<style scoped>
.navbar {
  background-color: #0c2b4d;
  color: #ffffff;
  padding: 0.8rem 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  height: 70px;
}

.container {
  width: 92%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  height: 44px;
  width: 120px;
  border-radius: 4px;
  object-fit: cover;
  filter: brightness(3.0) contrast(1.3);
}

.brand h1 {
  font-size: 1.1rem;
  margin: 0;
  color: #ffffff;
  font-weight: 700;
}

.brand p {
  font-size: 0.8rem;
  margin: 0;
  color: #8a98a9;
  font-weight: 500;
}

.hamburger {
  display: none;
  background: transparent;
  border: 0;
  color: #ffffff;
  font-size: 1.6rem;
  cursor: pointer;
}

.menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: 0.3s ease;
}

/* Menü elemanları */
.menu-item {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease, border-color 0.2s ease;
  position: relative;
}

.menu-item:hover {
  color: #8a98a9;
}

.menu-item.active {
  font-weight: 600;
}

.menu-item.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  border-radius: 1px;
}

/* WhatsApp butonu */
.whatsapp-btn {
  background: #25d366;
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: 0.3s;
}
.whatsapp-btn:hover {
  background: #1eb95b;
}

/* 🔹 Mobil için düzeltme */
@media (max-width: 992px) {
  .hamburger {
    display: inline-flex;
  }

  .menu {
    display: none; /* ✅ Kapalıyken tamamen gizli */
    flex-direction: column;
    align-items: flex-start;
    background: #0c2b4d;
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 1rem 1.2rem;
    gap: 0.8rem;
    border-top: 1px solid #143c6b;
  }

  .menu.open {
    display: flex; /* ✅ Hamburger tıklanınca göster */
  }

  .menu-item {
    width: 100%;
    padding: 0.4rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .whatsapp-btn {
    align-self: flex-end;
    margin-top: 0.5rem;
  }
}
</style>


