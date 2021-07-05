import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetings',
    name: 'Meetings',
    component: () => import('../views/Meetings.vue')
  },
  {
    path: '/vault',
    name: 'Vault',
    component: () => import('../views/Vault.vue')
  },
  {
    path: '/performancesChronology',
    name: 'PerformancesChronology',
    component: () => import('../views/PerformancesChronology.vue')
  },
  {
    path: '/performancesStructured',
    name: 'PerformancesStructured',
    component: () => import('../views/PerformancesStructured.vue')
  },
  {
    path: '/performancesExecutors',
    name: 'PerformancesExecutors',
    component: () => import('../views/PerformancesExecutors.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
