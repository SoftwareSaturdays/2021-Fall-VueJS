import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import(/* webpackChunkName: "demo1" */ '../views/Demo1.vue'),
    props: true,
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: () => import(/* webpackChunkName: "demo2" */ '../views/Demo2.vue'),
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
