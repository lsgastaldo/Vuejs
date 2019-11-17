import Vue from 'vue'
import Router from 'vue-router'
 
import Index from '@/components/Index'
import Login from '@/components/Auth/Login'
import Logout from '@/components/Auth/Logout'
import Register from "@/components/Auth/Register"
import ViewParameters from "@/components/Aquecimento/ViewParameters"
import NewParameters from "@/components/Aquecimento/NewParameters"
import ChangeParameter from "@/components/Aquecimento/ChangeParameter"
import NewBay from "@/components/Aquecimento/NewBay"
import ViewBay from "@/components/Aquecimento/ViewBay"
import ChangeBay from "@/components/Aquecimento/ChangeBay"
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
    // {
    //   path: '/newproject',
    //   name: 'NewProject',
    //   component: NewProject
    // },
    // {
    //   path: '/alterproject/:id',
    //   name: 'AlterProject',
    //   component: AlterProject
    // },
    // {
    //   path: '/viewproject/:id',
    //   name: 'ViewProject',
    //   component: ViewProject
    // },
    {
      path: '/viewParameters',
      name: 'ViewParameters',
      component: ViewParameters
    },
    {
      path: '/changeParameter/:id',
      name: 'ChangeParameter',
      component: ChangeParameter
    },
    {
      path: '/newparameters',
      name: 'NewParameters',
      component: NewParameters
    },
    {
      path: '/newbay',
      name: 'NewBay',
      component: NewBay
    },
    {
      path: '/viewbay',
      name: 'ViewBay',
      component: ViewBay
    },
    {
      path: '/changebay/:id',
      name: 'ChangeBay',
      component: ChangeBay
    }
  ]
})

