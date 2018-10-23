<template>
  <section class="container" > <!--最外層容器-->
    <section class="menu"> <!--左邊的容器-->
      <menus></menus>
    </section>
    <section class="content-container"><!--右邊的容器-->
      <todo></todo>
    </section>
  </section>
</template>

<script>
  import menus from './menus';
  import todo from './todo';
  export default {
    components: { //註冊menus組件，讓其可以在template調用
      menus,
      todo
    }
  };
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>
