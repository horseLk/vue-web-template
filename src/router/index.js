import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes = []

const requireContext = require.context('./', true, /\.js$/)

requireContext.keys().forEach(filename => {
  // console.log(filename)
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  // console.log(routerModule)
  routes = [...routes, ...(routerModule.default.routes)]
})
// console.log(routes)

const router = new VueRouter({
  routes
})

router.addRoutes([
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
])

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
