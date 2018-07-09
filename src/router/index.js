import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import LoginReg from '@/components/LoginReg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Home',
      name: 'home',
      component: Home
    },{
      path: '/LoginReg',
      name: 'LoginReg',
      component: LoginReg
    }
  ]
})
