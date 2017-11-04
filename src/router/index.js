import Vue from 'vue'
import Router from 'vue-router'
import MainV from '../pages/mainV.vue'
import ListV from '../components/listV.vue'
import listDetail from '../components/listDetail.vue'
import Release from '../pages/release.vue'
import Message from '../pages/message.vue'
import MyV from '../pages/myV.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      name: 'mainV',
      components: {
        default: MainV
      },
      children:[
        {path:'/list',component:ListV}
      ]
    },
    {path:'/listDetail/:id',component:listDetail},
    {
      path:'/release',
      name: 'Release',
      components: {
        release:Release
      }
    },
    {
      path:'/message',
      name: 'Message',
      components: {
        message:Message
      }
    },
    {
      path:'/myv',
      name: 'MyV',
      components: {
        myv:MyV
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})



