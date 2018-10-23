 <template>
  <div class="page lists-show"><!--最外層容器-->
    <nav><!--容器上半部分-->
      <div class="nav-group"> <!--移動端的菜單圖標-->
        <a class="nav-item">
          <span class="icon-list-unordered">
          </span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span> <!-- 標題-->
        <span class="count-list">{{todo.count}}</span><!-- 數目-->
      </h1>
      <div class="nav-group right"><!-- 右邊的刪除，鎖定圖標容器-->
        <div class="options-web">
          <a class=" nav-item"> <!-- 鎖定圖標-->
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unlock" v-else>
            </span>
          </a>
          <a class=" nav-item"><!-- 刪除圖標-->
            <span class="icon-trash">
            </span>
          </a>
        </div>
      </div>

      <div class=" form todo-new input-symbol"> <!-- 新增單個代辦單項輸入框,監聽了回車事件，雙向綁定text值,監聽了disabled屬性，在todo.locked為true的情況下無法編輯-->
         <input type="text" v-model="text" placeholder='請輸入' @keyup.enter="onAdd" :disabled="todo.locked" />
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
      <!--容器下半部分-->
      <div v-for="item in items" :key="item.id"> <!-- 這裡`v-for`會循環我們在 `data`函數 事先定義好的 ’items‘模擬數據，循環後拿到單個對象，在通過prop把數據傳輸給子組件 item -->
        <item :item="item"></item>
      </div>
    </div>
  </div>
</template>
<script>
import item from './item';
export default {
  components: {  //新加components對象
    item  //新加的
  },
  data() {
    return {
      todo: { //詳情內容
        title: '星期一',
        count: 12,
        locked: false
      },
      items: [ //代辦單項列表
        { checked: false, text: '新的一天', isDelete: false },
        { checked: false, text: '新的二天', isDelete: false },
        { checked: false, text: '新的三天', isDelete: false }
      ],
      text: '' //新增代辦單項綁定的值
    }
  },
  methods: {
    onAdd() {
      this.items.push({
        checked: false, text: this.text, isDelete: false
      }); // 當用戶點擊回車時候 ，給items的值新增一個對象，this.text 即輸入框綁定的值
      this.text = ''; //初始化輸入框的值。
    }
  }
}
</script>
<style lang = "less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
