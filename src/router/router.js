import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/technology',
      name: 'techno',
      alias: ['/techno'],
      component: () => import('@/views/TechnoPage.vue')
    },
    {
      path: '/services',
      name: 'services',
      alias: ['/service'],
      component: () => import('@/views/ServicesPage.vue')
    },
    {
      path: '/cases',
      name: 'cases',
      alias: ['/case'],
      component: () => import('@/views/CasesPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: '/sertificate',
      name: 'sertificate',
      component: () => import('@/views/SertificatePage.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/TeamPage.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/views/ReviewsPage.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: () => import('@/views/NotFoundPage.vue')
    }
  ]
})

export default router
