import { createRouter, createWebHashHistory } from 'vue-router'

// Sayfalar
import HomePage from '../pages/HomePage.vue'
import KurumsalPage from '../pages/KurumsalPage.vue'
const UrunlerPage = () => import('../pages/UrunlerPage.vue')
const ReferanslarPage = () => import('../pages/ReferanslarPage.vue')
const IletisimPage = () => import('../pages/İletisimPage.vue')
const GaleriPage = () => import('../pages/Galeri.vue') // 🔹 yeni eklendi

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/kurumsal', name: 'Kurumsal', component: KurumsalPage },
  { path: '/urunler', name: 'Urunler', component: UrunlerPage },
  { path: '/referanslar', name: 'Referanslar', component: ReferanslarPage },
  { path: '/iletisim', name: 'İletisim', component: IletisimPage },
  { path: '/galeri', name: 'Galeri', component: GaleriPage }, // 🔸 burada

  // 🔸 Marka bazlı ürün sayfaları
  {
    path: '/urunler/has-membran',
    name: 'HasMembranPage',
    component: () => import('../pages/HasMembranPage.vue')
  },
  {
    path: '/urunler/ankara-membran',
    name: 'AnkaraMembranPage',
    component: () => import('../pages/AnkaraMembran.vue')
  },
  {
    path: '/urunler/protech',
    name: 'ProtechPage',
    component: () => import('../pages/ProtechPage.vue')
  },

  // 🔹 Ürün detay sayfası
  {
    path: '/urunler/:slug',
    name: 'ProductDetail',
    component: () => import('../pages/ProductDetail.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
