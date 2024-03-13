import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/HomeView.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/Packages',
    name: 'Packages',
    component: () => import( '../views/PackagesView.vue')
  },
  {
    path: '/SinglePackage/:id',
    name: 'SinglePackage',
    component: () => import( '../views/SinglePackage.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
