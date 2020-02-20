import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'A',
    component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
  },
  {
    path: '/B',
    name: 'B',
    component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
  },
  {
    path: '/C',
    name: 'C',
    component: () => import(/* webpackChunkName: "about" */ '../views/C.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
