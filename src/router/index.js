import Vue from 'vue' // 導入Vue
import Router from 'vue-router' // 導入vue-router 庫
import Layouts from '@/components/layouts' // 導入layouts.vue 組件
Vue.use(Router) //全局註冊Router組件，它會綁定到Vue實例裡面。
export default new Router({ // 創建 router 實例，然後傳 `routes` 配置
  routes: [
    {
      path: '/',  //訪問路徑
      name: 'Layouts', // 路徑名
      component: Layouts //訪問的組件,即訪問‘/’,它會加載 Layouts 組件所有的內容。
    }
  ]
})
