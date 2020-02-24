import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'forward',
    meta: { stop: false },
    component: () => import(/* webpackChunkName: "about" */ '../views/forward.vue')
  },
  {
    path: '/A',
    name: 'A',
    component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
