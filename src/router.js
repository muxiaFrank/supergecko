import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Json from './views/Json.vue'
import webssh from './views/webssh.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/json',
      name: 'json',
      component: Json
    },
    {
      path: '/console',
      name: 'console',
      component: webssh
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
