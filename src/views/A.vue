<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="A">A</div>
    <Modal
      ref="modal"
      @clickCancel="cancel"
      @clickConfirm="confirm" />
      <div class="floatbox">
        <div class="floatbox1">123</div>
        <div class="floatbox2">123</div>
      </div>
      <div class="gridbox">
        <div class="griditem">1</div>
        <div class="griditem">2</div>
        <div class="griditem griditem3">3</div>
        <div class="griditem">4</div>
        <div class="griditem">5</div>
        <div class="griditem">6</div>
        <div class="griditem">7</div>
        <div class="griditem">8</div>
        <div class="griditem">9</div>
        <div class="griditem">10</div>
        <div class="griditem">11</div>
      </div>
      <BComp
        class="AtoBclass"
        from="A"
        :attrKey="attrKey"
        @click="cancel"
      />
  </div>
</template>

<style scoped>
  .floatbox {
    overflow:hidden;
  }
  .floatbox1{
    width: 20%;
    background-color: rgb(220, 203, 22);
    float: left;
  }
  .floatbox2{
    background-color: rgb(112, 147, 78);
    overflow: hidden;
  }
  .gridbox {
    display: grid;
    /* grid-template-columns: 33% 33% 33%;
    grid-template-rows: 10% 30% 10% 30%; */
    /* 可以设置网格线名称 */
    grid-template-columns: [c1] 30px [c2] 30px [c3] 30px[c4];
    grid-template-rows: 30px 30px 30px 30px;
    /* repeat写法相同 */
    /* grid-template-columns: repeat(3, 33%);
    grid-template-rows: repeat(2, 10% 30%); */

    /* auto-fill自动填充 */
    /* grid-template-columns: repeat(auto-fill, 100px); */

    /* fr倍数 */
    /* grid-template-columns: 1fr 2fr; */
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    /* grid-auto-flow单元格方向，默认row，row-dense，column，column-dense */
    grid-auto-flow: column;
  }
  .griditem {
    border: 1px solid #000;
  }
  .griditem3 {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }
</style>

<script>
import Modal from '../components/modal';
import BComp from '../components/BComp';

export default {
  name: 'A',
  components: {
    Modal,
    BComp
  },
  data() {
    return {
      allowBack: false,
      attrKey: 'attrKey'
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
    },

  }
}
</script>

<style lang="less" scoped>
  .A {
    font-size: 10rem;
  }
</style>
