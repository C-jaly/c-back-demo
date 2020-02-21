<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="C">C</div>
  </div>
</template>

<script>

export default {
  name: 'C',
  beforeRouteLeave(to, from, next) {
    next(false);
    this.quit();
  },
  methods: {
    async quit() {
      if (env.isAliMP) {
        alipay.mpNavigateBackByDelta();
      } else if (env.isEasyBikeApp) {
        Native.closeWebView();
      } else if (env.isWeixinMp) {
        wechat.navigateBack();
      } else {
        window.history.go(-1);
      }
    },
  }
}
</script>

<style lang="less" scoped>
  .C {
    font-size: 10rem;
  }
</style>
