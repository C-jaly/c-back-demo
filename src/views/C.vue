<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="C">C</div>
  </div>
</template>

<script>

export default {
  name: 'C',
  components: {
  },
  beforeRouteEnter(to, from, next) {
    console.log('C beforeRouteEnter', from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('C beforeRouteLeave');
    next();
  }
}
</script>

<style lang="less" scoped>
  .C {
    font-size: 10rem;
  }
</style>
