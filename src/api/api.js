import axios from 'axios'; //導入axios模塊
export const getTodoList = params => { //封裝一個函數，名為getTodoList
  return axios.get(`/todo/list`, { // 請求路徑 ‘/todo/list’
    params: params
  });
};
export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data);
};
