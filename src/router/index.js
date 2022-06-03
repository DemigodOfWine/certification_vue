import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/dpc',
    name: 'dpc',
    meta: {layout: 'main'},
    component: () => import('../views/PassportDPC')
  },
  {
    path: '/rs_s',
    name: 'rs_s',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Passport_RS_S')
  },
  {
    path: '/print/:id',
    name: 'print',
    meta: {layout: 'print'},
    component: () => import(/* webpackChunkName: "about" */ '../views/DPC/Print')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
