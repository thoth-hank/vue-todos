<template>
  <div class="page lists-show">
    <!-- 頭部模塊 -->
    <nav>
      <!-- 當用戶瀏覽車窗口尺寸小於40em時候，顯示手機端的菜單圖標 -->
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <!-- 顯示標題和數字模塊 -->
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span>  <!-- title:標題 綁定標題 -->
        <span class="count-list">{{todo.count || 0}}</span><!-- count:數量 綁定代辦單項熟練-->
      </h1>
      <!-- 右邊顯示刪除圖標和鎖定圖標的模塊 -->
      <div class="nav-group right">
        <div class="options-web">
          <a class=" nav-item">
            <!-- cicon-lock鎖定的圖標 icon-unlock：非鎖定的圖標-->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else>
            </span>
          </a>
          <a class=" nav-item">
            <span class="icon-trash">
            </span>
          </a>
        </div>
      </div>
      <!-- 用戶新增代辦事項的input模塊 -->
      <div class=" form todo-new input-symbol">
        <!-- 綁定disabled值，當todo.locked為綁定的時候，禁止input輸入 -->
        <input type="text" v-model="text" placeholder='請輸入' @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <!-- 列表主體模塊 -->
    <div class="content-scrollable list-items">
      <div v-for="item in items" :key="item.id">
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>
<script>
// 引入組件
import item from './item';
import { getTodo, addRecord } from '../api/api';
export default {
  //components的作用就可以把其他子組件掛載到當前父組件的作用域裡。
  data() {
    return {
      todo: {
        title: '星期一', //標題
        count: 12, //數量
        locked: false //是否綁定
      },
      items: [  //代辦單項列表
      ],
      text: '' //用戶輸入單項項綁定的輸入
    }
  },
  components: {
    item
  },
  watch: {
    '$route.params.id'() {
    // 監聽$route.params.id的變化，如果這個id即代表用戶點擊了其他的待辦項需要重新請求數據。
      this.init();
    }
  },
  created() {
  // created生命週期，在實例已經創建完成，頁面還沒渲染時調用init方法。
    this.init();
  },
  methods: {
    init() {
    // 獲取到 $route下params下的id,即我們在menus.vue組件處傳入的數據。
      const ID = this.$route.params.id;
      getTodo({ id: ID }).then(res => {

        let { id, title, count, isDelete, locked, record
        } = res.data.todo;
        // 請求成功，拿到res.data.todo;在將record 賦值到代辦單項列表，其它數據賦值到todo對象
        this.items = record;
        this.todo = {
          id: id,
          title: title,
          count: count,
          locked: locked,
          isDelete: isDelete
        };
      });
    },
    onAdd() {
      //當用戶輸入文字，並且回車時調用次方法。
      const ID = this.$route.params.id;
      addRecord({ id: ID, text: this.text }).then(res => {
        this.text = '';
        this.init();
        //請求成功後初始化
      })
    }
  }
}
</script>
<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
