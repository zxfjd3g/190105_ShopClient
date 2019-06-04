/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from "vue-router"
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 应用中所有路由
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },

    { // 当访问根路径自动重定向到/miste
      path: '/',
      redirect: '/msite'
    }
  ]
})
