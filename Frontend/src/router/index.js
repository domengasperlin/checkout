import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fly from '@/components/Fly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/fly',
      name: 'fly',
      component: Fly
    }
  ]
})
