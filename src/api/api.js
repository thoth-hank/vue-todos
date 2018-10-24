import axios from 'axios'; //導入axios模塊
export const getTodoList = params => { //封裝一個函數，名為getTodoList
  return axios.get(`/todo/list`, { // 請求路徑 ‘/todo/list’
    params: params
  });
};
export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};
//新增一個請求查詢代辦單項列表的數據的接口函數
export const getTodo = params => {
  return axios.get(`/todo/listId`, {
    params: params
  });
};
//新增一個請求新增代辦單的接口函數
export const addRecord = params => {
  return axios.post(`/todo/addRecord`, params).then(res => res.data);
};
