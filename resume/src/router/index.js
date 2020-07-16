import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/pages/resume/resume'
import Wx from '@/pages/wx/Wx'
import Qq from '@/pages/qq/Qq'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/wx',
      name: 'Wx',
      component: Wx
    },
    {
      path: '/qq',
      name: 'Qq',
      component: Qq
    }
  ]
})
