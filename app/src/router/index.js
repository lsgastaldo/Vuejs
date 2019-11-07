import Vue from 'vue'
import Router from 'vue-router'
 
import Index from '@/components/Index'
import Login from '@/components/Auth/Login'
import DepoisLogin from '@/components/DepoisLogin'
import Register from "@/components/Auth/Register"
import Parameters from "@/components/Parameters"
 
Vue.use(Router)
 
export default new Router({
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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/parameters',
      name: 'Parameters',
      component: Parameters
    }

  ]
})

