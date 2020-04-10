import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Box from '../views/Box.vue'
import Saidas from '../views/Saidas.vue'
import Saida from '../views/Saida.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dash',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Dashboard
  },
  {
    path: '/box',
    name: 'Box',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Box
  },
  {
    path: '/saidas',
    name: 'Saidas',
    component: Saidas
  },
  {
    path: '/saida/:id',
    name: 'Saida',
    component: Saida
  },
  {
    path: '*', redirect: '/'
  },
  {
    path: '/saida',
    name: 'AddSaida',
    component: Saida
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
