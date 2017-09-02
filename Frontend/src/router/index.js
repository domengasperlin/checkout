import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pay from '@/components/Pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }
  ]
})
