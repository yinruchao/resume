import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: () => import('@/pages/resume/resume')
    },
    {
      path: '/wx',
      name: 'Wx',
      component: () => import('@/pages/wx/Wx')
    },
    {
      path: '/qq',
      name: 'Qq',
      component: () => import('@/pages/qq/Qq')
    }
  ]
})
