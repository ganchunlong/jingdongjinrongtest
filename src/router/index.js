import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home' 
  },
  {
    path:"/home",
    name: 'home',
    component: Home
},
  {
    path: '/money',
    name: 'money',
    component: () => import( /* webpackChunkName: "about" */ '../views/money/index.vue')
  },
  {
    path: '/ious',
    name: 'ious',
    component: () => import( /* webpackChunkName: "about" */ '../views/ious/index.vue')
  },
  {
    path: '/raise',
    name: 'raise',
    component: () => import( /* webpackChunkName: "about" */ '../views/raise/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( /* webpackChunkName: "about" */ '../views/user/index.vue')
  },
  {
    path: "/download",
    name: "download",
    component: () => import( /* webpackChunkName: "about" */ '../views/special/download.vue')
},
{
  path: "*",
  redirect: "/"
}
]

const router = new VueRouter({
  routes
})

export default router