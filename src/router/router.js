import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: ['/home'],
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/technology',
      name: 'techno',
      alias: ['/techno'],
      component: () => import('@/views/TechnoView.vue')
    }
  ]
})

export default router
