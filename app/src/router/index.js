import Vue from 'vue'
import Router from 'vue-router'
 
import Index from '@/components/Index'
import Login from '@/components/Login'
import DepoisLogin from '@/components/DepoisLogin'
 
Vue.use(Router)
 
export default new Router({
  mode:history,
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/depoisLogin',
      name: 'DepoisLogin',
      component: DepoisLogin
    }
  ]
})

