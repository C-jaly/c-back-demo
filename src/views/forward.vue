<template>
  <div class="home" @click="pushA">
  </div>
</template>

<script>

export default {
  name: 'A',
  components: {
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', from);
    if (from.name === 'A') {
      to.meta.stop = true;
      // if (env.isAliMP) {
      //   alipay.mpNavigateBackByDelta();
      // } else if (env.isEasyBikeApp) {
      //   Native.closeWebView();
      // } else if (env.isWeixinMp) {
      //   wechat.navigateBack();
      // } else {
      console.log('forward from A');
      next(() => {
        window.history.go(-1);
      })
      // }
    } else {
      console.log('else');
      next();
    }
  },
  mounted() {
    console.log('push A')
    if (!this.$route.meta.stop) {
      this.$router.push({
        name: 'A'
      })
    }
  },
  methods: {
    pushA() {
      this.$router.push({
        name: 'A'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .forward {
    font-size: 10rem;
  }
</style>
