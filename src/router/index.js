import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import AboutMe from '@/components/myweb/aboutme/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myweb/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/myweb/aboutMe',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
