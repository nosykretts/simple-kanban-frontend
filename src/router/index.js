import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MainLayout from '@/components/MainLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        }
      ]
    }
  ]
})
