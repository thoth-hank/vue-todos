<template>
  <section class="container" :class="{'menu-open': menuOpen}"> <!--最外層容器-->
    <section class="menu"> <!--左邊的容器-->
      <menus></menus>
    </section>
    <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
    <!-- 這個是當頁面收縮覆蓋在內容上面的模糊層，點擊後復原 他可以直接調用vuex actions.js裡面的updateMenu方法-->
    <section class="content-container"><!--右邊的容器-->
      <!-- <todo></todo> -->
      <router-view></router-view>
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
    },
    computed: {
      menuOpen() {
        return this.$store.state.menuOpen;
      }
    }
  };
</script>

<style lang="less">
@import '../common/style/layouts.less';
</style>
