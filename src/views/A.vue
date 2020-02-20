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
    console.log('before enter A', from);
    if (from.name === 'B' && from.meta.goC) {
      next((vm) => {
        console.log(vm.$router, vm.$route)
        vm.$router.replace({
          name: 'C',
        });
      });
    } else {
      next();
    }
  },
  mounted() {
    console.log('A mounted');
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
