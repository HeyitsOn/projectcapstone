import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PackagesView from '../views/PackagesView.vue'
import SinglePackage from '../components/SinglePackage.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import LoginView from '@/views/LoginView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('../views/HomeView.vue')
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
    component: () => import( '../components/SinglePackage.vue')
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
    component: () => import( '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
