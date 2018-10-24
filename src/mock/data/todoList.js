import Mock from 'mockjs'; // 導入mockjs 模塊
let Todos = []; // 定義我們需要的數據
const COUNT = [1, 2, 3, 4, 5]; // 定義我們需要數量
for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(Mock.mock({ // 根據數據模板生成模擬數據。
    id: Mock.Random.guid(), // 隨機id
    title: Mock.Random.first(), // 隨機標題
    isDelete: false, //是否刪除
    locked: Mock.Random.boolean(), // 隨機鎖定
    record: COUNT.map(() => { // 代辦單項列表的數據
      return {
        text: Mock.Random.cparagraph(2), // 隨機內容
        isDelete: false, //是否刪除
        checked: Mock.Random.boolean()  //是否完成
      };
    })
  }));
}
export { // 導出列表數據
  Todos
};
