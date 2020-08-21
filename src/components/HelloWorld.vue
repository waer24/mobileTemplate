<template>
  <div class="home">
    redreddsdsd
    <div class="icons">
      <i class="iconfont icondelete"></i>
      <!--  <icon-svg icon-class="delete">shanchu</icon-svg> -->
    </div>
    <hr />

    <van-button type="primary">button</van-button>
  </div>
</template>

<script>
// import iconSvg from './../views/icon-svg/icon-svg.vue';
export default {
  name: 'singleQuote',
  props: {
    msg: String,
  },
  components: {
    // iconSvg,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  color: red;
  font-size: 18px;
  .font {
    font-size: 20px;
  }
  .van-button {
    width: 80px;
    font-size: 18px; // todo uppercase
  }
  .icons {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  i {
    color: red;
  }
}
</style>
