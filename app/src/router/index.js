import Vue from 'vue'
import Router from 'vue-router'
 
import Index from '@/components/Index'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Register from "@/components/Auth/Register"
import ViewParameters from "@/components/Aquecimento/ViewParameters"
import RegisterParameters from "@/components/Aquecimento/RegisterParameters"
import ChangeParameter from "@/components/Aquecimento/ChangeParameter"
import NewBay from "@/components/Aquecimento/NewBay"
import ShowBay from "@/components/Aquecimento/ViewBay"
import NewProject from "@/components/NewProject"
import AlterProject from "@/components/AlterProject"
import ViewProject from "@/components/ViewProject"

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
      path: '/newproject',
      name: 'NewProject',
      component: NewProject
    },
    {
      path: '/alterproject/:id',
      name: 'AlterProject',
      component: AlterProject
    },
    {
      path: '/viewproject/:id',
      name: 'ViewProject',
      component: ViewProject
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
      path: '/newbay',
      name: 'NewBay',
      component: NewBay
    },
    {
      path: '/showbay',
      name: 'ViewBay',
      component: ShowBay
    }
  ]
})

