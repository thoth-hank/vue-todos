// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue模塊
import App from './App' //引入vue組件
import router from './router' //引入路由配置文件

Vue.config.productionTip = false // 關閉生產模式下給出的提示

/* eslint-disable no-new */
new Vue({  //創建一個 Vue 的根實例
  el: '#app', //掛載id,這個實例下所有的內容都會在index.html 一個id為app的div下顯示
  router, //注入路由配置。
  template: '<App/>', //配置根模板 即打開頁面顯示那個組件
  components: { App } //注入組件
})
