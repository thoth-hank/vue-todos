import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
Vue.use(Vuex); //安裝 Vuex 插件
// 創建初始應用全局狀態變量
const state = {
  todoList: [], //指我們的待辦事項列表數據
  menuOpen: false //移動端的時候菜單是否開啟
};
// 定義所需的 mutations
const mutations = {
  EDITTODE(state, data) { // 定義名為 EDITTODE函數用作改變todoList的值
    state.todoList = data;
  },
  MENUOPEN(state) { // 定義名為 MENUOPEN函數用作改變menuOpen的值
    state.menuOpen = !state.menuOpen;
  }
};
// 創建 store 實例並且導出
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
});
