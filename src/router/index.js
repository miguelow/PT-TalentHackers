import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OneCounterView from '../views/OneCounterView.vue'
import TwoCounterView from '../views/TwoCounterView.vue'
import BreedsView from '../views/breeds/BreedsView.vue'
import BreedsDetailsView from '../views/breeds/BreedsDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/one-cat-clicker',
    name: 'One-cat-clicker',
    component: OneCounterView,
  },
  {
    path: '/two-cat-clicker',
    name: 'Two-cat-clicker',
    component: TwoCounterView,
  },
  {
    path: '/breeds',
    name: 'Breeds',
    component: BreedsView,
  },
  {
    path: '/breeds/:id',
    name: 'BreedsDetails',
    component: BreedsDetailsView,
    props: true,
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
