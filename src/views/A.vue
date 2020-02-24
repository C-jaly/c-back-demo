<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="A" @click="pushB">A</div>
  </div>
</template>

<script>

export default {
  name: 'A',
  components: {
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    if (from.name === 'C') {
      if (env.isAliMP) {
        alipay.mpNavigateBackByDelta();
      } else if (env.isEasyBikeApp) {
        Native.closeWebView();
      } else if (env.isWeixinMp) {
        wechat.navigateBack();
      } else {
        window.history.go(-1);
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    next();
  },
  mounted() {
    console.log("A mounted");
  },
  methods: {
    pushB() {
      this.$router.push({
        name: 'B'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .A {
    font-size: 10rem;
  }
</style>
