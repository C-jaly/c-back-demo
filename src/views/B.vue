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
  methods: {
    replaceC() {
      this.$router.replace({
        name: 'C'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .B {
    font-size: 10rem;
  }
</style>
