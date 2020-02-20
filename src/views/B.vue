<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="B" @click="replaceC">B</div>
  </div>
</template>

<script>

export default {
  name: 'B',
  components: {
  },
  mounted() {
    this.$route.meta.goC = false;
  },
  beforeRouteLeave(to, from, next) {
    console.log('B leave');
    next();
  },
  methods: {
    replaceC() {
      this.$route.meta.goC = true;
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
  .B {
    font-size: 10rem;
  }
</style>
