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
