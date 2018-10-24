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
// item 是todo的子組件,他接受一個對象item,來進行處理
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: false,
          text: '你好,世界'
        }
      }
    }
  }
};
</script>
<style lang="less">
@import '../common/style/list-items.less';
</style>
