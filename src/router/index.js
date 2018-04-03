import Vue from 'vue'
import Router from 'vue-router'
import IpInfo from '@/components/IpInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IpInfo',
      component: { IpInfo }
    }
  ]
})
