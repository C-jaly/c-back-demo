<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="A">A</div>
    <Modal
      ref="modal"
      @clickCancel="cancel"
      @clickConfirm="confirm" />
  </div>
</template>

<script>
import Modal from '../components/modal';

export default {
  name: 'A',
  components: {
    Modal,
  },
  data() {
    return {
      allowBack: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.allowBack) {
      to.meta.stop = true;
      console.log('beforeRouteLeave', to);
      next(false);
      this.showModal();
    } else {
      next();
    }
  },
  methods: {
    showModal() {
      this.$refs.modal.show({
        title: `确定退出？`,
        cancelText: '放弃',
        confirmText: '确定',
      });
    },
    cancel() {
      // eslint-disable-next-line no-console
      console.log('再想想');
    },
    confirm() {
      console.log('confirm');
      this.allowBack = true;
      this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
  .A {
    font-size: 10rem;
  }
</style>
