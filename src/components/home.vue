<template>
  <div class="home">
    home，我是home页面啊
    <!--   <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-delete" />
    </svg> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: lightgray;
}
</style>
