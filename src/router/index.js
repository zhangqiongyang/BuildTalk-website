import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import industryHighers from '@/components/pages/industryHighers'
import authorServices from '@/components/pages/authorServices'
import downloadAPP from '@/components/pages/downloadAPP'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta:{
        title:'建谈-探讨极致建筑艺术'
      }

    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title:'建谈-探讨极致建筑艺术'
      }
    },
    {
      path: '/industryHighers',
      name: 'industryHighers',
      component: industryHighers,
      meta: {
        title:'行业大咖-建谈'
      }
    },
    {
      path: '/authorServices',
      name: 'authorServices',
      component: authorServices,
      meta: {
        title:'大咖服务-建谈'
      }
    },
    {
      path: '/downloadAPP',
      name: 'downloadAPP',
      component: downloadAPP,
      meta: {
        title:'APP下载-建谈'
      }
    },
  ]
})
