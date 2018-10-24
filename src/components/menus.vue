<template>
<!--綁定點擊事件goList),並且判斷當todoId 時候 item.id時,文字高亮度-->
  <div class="list-todos">
  <!-- 綁定class，當items循環中的id等於我們設置的選中todoId時候,就會加上active這個calss,這樣樣式就會發生變化。-->
    <a @click="goList(item.id)" class="list-todo list activeListClass" :class="{'active': item.id === todoId}" v-for="item in items" :key="item.id">
      <span class="icon-lock" v-if="item.locked"></span>
      <span class="count-list" v-if="item.count > 0">{{item.count}}</span>
      {{item.title}}
    </a>
    <a class=" link-list-new" @click="addTodoList">
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
  import { getTodoList, addTodo } from '../api/api'; // 引入我們 封裝好的兩個接口函數。
  export default {
    data() {
      return {
        items: [], // 菜單數據
        todoId: '' // 默認選中id
      };
    },
    created() { // 調用請求菜單列表數據的接口
      getTodoList({}).then(res => {
        const TODOS = res.data.todos; // 數據都會返回在res.data裡面。
        this.items = TODOS; // 我的把菜單數據賦值給定義的this.items
        this.todoId = TODOS[0].id; // 把菜單數據的默認的第一個對象的id賦值給默認選中的id
      });
    },
     watch: {
      'todoId'(id) {
        this.$router.push({ name: 'todo', params: { id: id } });
        //監聽到用戶的點擊todoId的變化在跳轉路由
      }
    },
    methods: {
      goList(id) { // 點擊菜單時候,替換選中id
        this.todoId = id;
      },
      addTodoList() { // 點擊新增按鈕時候
      // 調用新增菜單的接口，在接口調用成功在請求數據
        addTodo({}).then(data => {
          getTodoList({}).then(res => {
            const TODOS = res.data.todos;
            this.todoId = TODOS[TODOS.length - 1].id;
            this.items = TODOS;
          });
        });
      }
    }
  };
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>
