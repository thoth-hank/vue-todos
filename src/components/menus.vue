<template>
  <div class="list-todos">  <!--菜單容器-->
      <a class="list-todo activeListClass list" > <!--單個菜單容器-->
        <span class="icon-lock" ></span>  <!--鎖的圖標-->
        <span class="count-list">1</span><!--數字-->
        星期一 <!--菜單內容-->
      </a>
    <a class=" link-list-new" > <!--新增菜單-->
      <span class="icon-plus">
      </span>
      新增
    </a>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>