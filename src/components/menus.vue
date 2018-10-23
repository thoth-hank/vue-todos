<template>
  <div class="list-todos">  菜單容器
      <a class="list-todo list activeListClass" v-for="item in items" :key="item.id"> <!--單個菜單容器-->
        <span class="icon-lock" v-if="item.locked"></span>  <!--鎖的圖標-->
        <span class="count-list" v-if="item.count > 0">{{item.count}}</span><!--數字-->
        {{item.title}} <!--菜單內容-->
      </a>
    <a class=" link-list-new" > <!--新增菜單-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{ title: '星期一', count: 1, locked: true}, //菜單的模擬數據
        { title: '星期二', count: 2, locked: false},
        { title: '星期三', count: 3, locked: false
        }]
      };
    }
  };
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>
