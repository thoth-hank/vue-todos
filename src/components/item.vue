<template>
  <div class="list-item editingClass editing"> <!-- 最外層容器-->
    <label class="checkbox"> <!--自定義的多選框-->
      <input type="checkbox" v-model="item.checked"> <!--item.checked-->
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder='寫點什麼。。。'>  <!--綁定item.text-->
    <a class="delete-item"> <!--刪除圖標-->
      <span class="icon-trash"></span>
    </a>
  </div>
</template>
<script>
export default {
  props: ['item']  //子組件顯式的用 props 選項聲明它期待獲得的數據，
  // 這裡申明 它想要一個叫做 ’item‘的數據。
};
</script>
<style lang="less">
@import '../common/style/list-items.less';
</style>
