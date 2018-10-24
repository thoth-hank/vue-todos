import Vue from 'vue' // 導入Vue
import Router from 'vue-router' // 導入vue-router 庫
import Layouts from '@/components/layouts' // 導入layouts.vue 組件
import Todo from '@/components/todo' // 導入todo.vue 組件 (陷阱)
Vue.use(Router) //全局註冊Router組件，它會綁定到Vue實例裡面。
export default new Router({
  routes: [{
    path: '/',
    name: 'Layouts',
    component: Layouts,
    children: [{
      path: '/todo/:id',
      name: 'todo',
      component: Todo
    }]
  }]
})
