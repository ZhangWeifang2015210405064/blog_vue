import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import LoginReg from '@/components/LoginReg'
import post from '@/components/post'
import logout from '@/components/logout'
import xwzj from '@/components/xwzj'
import qd from '@/components/xwzj/qd'
import hd from '@/components/xwzj/hd'
import sjk from '@/components/xwzj/sjk'
import mbrs from '@/components/mbrs'
import ly from '@/components/mbrs/ly'
import ys from '@/components/mbrs/ys'
import jj from '@/components/mbrs/jj'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/Home'
    },{
      path: '/Home',
      name: 'home',
      component: Home
    },{
      path: '/LoginReg',
      name: 'LoginReg',
      component: LoginReg,
    },{
      path: '/post',
      name: 'post',
      component: post
    },{
      path: '/logout',
      name: 'logout',
      component: logout
    },{
      path: '/xwzj',
      name: 'xwzj',
      component: xwzj,
      children: [
        {
          path: '/qd',
          name: 'qd',
          component: qd
        },{
          path: '/hd',
          name: 'hd',
          component: hd
        },{
          path: '/sjk',
          name: 'sjk',
          component: sjk
        }
      ]
    },{
      path: '/mbrs',
      name: 'mbrs',
      component: mbrs,
      children: [
        {
          path: '/ly',
          name: 'ly',
          component: ly
        },{
          path: '/ys',
          name: 'ys',
          component: ys
        },{
          path: '/jj',
          name: 'jj',
          component: jj
        }
      ]
    }
  ]
})
