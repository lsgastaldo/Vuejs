import Vue from 'vue'
import Router from 'vue-router'
 
import Index from '@/components/Index'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Register from "@/components/Auth/Register"
import ViewParameters from "@/components/Aquecimento/ViewParameters"
import RegisterParameters from "@/components/Aquecimento/RegisterParameters"
import ChangeParameter from "@/components/Aquecimento/ChangeParameter"
import NewBaia from "@/components/Aquecimento/NewBaia"
import ShowBaias from "@/components/Aquecimento/ShowBaias"

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
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/viewParameters',
      name: 'Parameters',
      component: ViewParameters
    },
    {
      path: '/changeParameter/:id',
      name: 'ChangeParameter',
      component: ChangeParameter
    },
    {
      path: '/registerParameters',
      name: 'RegisterParameters',
      component: RegisterParameters
    },
    {
      path: '/newBaia',
      name: 'NewBaia',
      component: NewBaia
    },
    {
      path: '/showBaias',
      name: 'ShowBaias',
      component: ShowBaias
    }
  ]
})

