import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import {
  Todos
} from './data/todoList'; // 導入Todos數據
export default {
  /**
   * mock start
   */
  start() { // 初始化函數
    let mock = new MockAdapter(axios); // 創建 MockAdapter 實例
    // 獲取todo列表
    mock.onGet('/todo/list').reply(config => { //  config 指 前台傳過來的值
      let mockTodo = Todos.map(tode => { // 重組 Todos數組，變成我們想要的數據
        return {
          id: tode.id,
          title: tode.title,
          count: tode.record.filter((data) => {
            if (data.checked === false) return true;
            return false;
          }).length, // 過濾到record裡面 ‘checked’ 為true的數據，因為它們已經被完成了
          locked: tode.locked,
          isDelete: tode.isDelete
        };
      }).filter(tode => {
        if (tode.isDelete === true) return false; // 過濾掉 ‘isDelete’為true，因為已經被刪除了。
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo // 返回狀態為200，並且返回todos數據
          }]);
        }, 200);
      });
    });
    // 新增一條todo
    mock.onPost('/todo/addTodo').reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isDelete: false,
        locked: false,
        record: []
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200]);
        }, 200);
      });
    });
    // 新增todo單個列表查詢
    mock.onGet('/todo/listId').reply(config => {
      let {
        id
      } = config.params;
      // id 是傳進來的值
      // todo 是根據id和現有的Todos數據匹配，找出id相等的數據，在進行返回
      let todo = Todos.find(todo => {
        return id && todo.id === id;
      });
      // todo.count (等待完成數目)等於 todo.record（代辦事項列表下面未被選擇的數據
      todo.count = todo.record.filter((data) => {
        return data.checked === false;
      }).length;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todo: todo
          }]);
        }, 200);
      });
    });
    // 新增一條代辦事項
    mock.onPost('/todo/addRecord').reply(config => {
      let {
        id,
        text
      } = JSON.parse(config.data);
       // id 是傳進來的值唯一待辦項的id
      // text 用戶新增輸入的數據
      Todos.some((t, index) => {
        if (t.id === id) {
          t.record.push({
            text: text,
            isDelete: false,
            checked: false
          });
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200]);
        }, 200);
      });
    });
  }
};
