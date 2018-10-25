import {
  getTodoList
} from '../api/api';
// 引入api接口函數getTodoList，請求最新的代辦事項列表數據
export const getTodo = ({ //定義一個名字為getTodo的事件
  commit
}) => {
  return new Promise((resolve) => {
    /**
     *調用 getTodo這個函數的時候
     會調用getTodoList這個ajax請求函數，
     函數返回值後，在調用store.js裡面的EDITTODE方法，並且把值傳給它。
     */
    getTodoList().then(res => {
      commit('EDITTODE', res.data.todos);
      resolve();
    });
  });
};
export const updateMenu = ({ //定義一個名字為updateMenu的事件
  commit
}) => {
  commit('MENUOPEN'); // 調用store.js裡面的MENUOPEN方法
};
