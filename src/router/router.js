import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import bookHome from '../pages/book/book.home.vue'
import consultHome from '../pages/consult/consult.home.vue'
import reportHome from '../pages/report/report.home.vue'
import myHome from '../pages/my/my.home.vue'
import bookHosList from '../pages/book/book.hosList.vue'
import deptList from '../pages/deptList.vue'
import docList from '../pages/docList.vue'

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/bookHome', component: bookHome },
    { path: '/consultHome', component: consultHome },
    { path: '/reportHome', component: reportHome },
    { path: '/myHome', component: myHome },
    { path: '/bookHosList/:areaId', component: bookHosList },
    { path: '/deptList/:hosId', component: deptList},
    { path: '/docList/:deptId', component: docList},
    { path: '*', redirect: '/bookHome' }
  ]
})