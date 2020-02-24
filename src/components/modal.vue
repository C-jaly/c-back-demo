<template>
  <transition name="fade-quick">
    <div
      v-show="isShow"
      class="complain-modal">
      <div class="complain-modal__wrap">
        <div class="complain-modal__title">
          {{ title }}
        </div>
        <div class="complain-modal__content">
          {{ content }}
        </div>
        <div class="complain-modal__footer">
          <div
            v-if="!!cancelText"
            class="complain-modal__btn complain-modal__btn-cancel"
            @click="onClickCancel">
            {{ cancelText }}
          </div>
          <div
            v-if="!!confirmText"
            class="complain-modal__btn complain-modal__btn-confirm"
            @click="onClickConfirm">
            {{ confirmText }}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  components: {
  },
  data() {
    return {
      // 是否展示弹窗
      isShow: false,
      // 标题
      title: '',
      // 内容
      content: '',
      // 取消按钮的文案
      cancelText: '',
      // 确认按钮的文案
      confirmText: ''
    };
  },
  watch: {
    isShow(visible) {
      document.body.style.overflowY = visible ? 'hidden' : 'initial';
    }
  },
  methods: {
    /**
     * 点击取消按钮
     */
    onClickCancel() {
      this.isShow = false;
      this.$emit('clickCancel');
    },
    /**
     * 点击确定按钮
     */
    onClickConfirm() {
      this.isShow = false;
      this.$emit('clickConfirm');
    },
    /**
     * 展示弹窗
     * @param title
     * @param content
     * @param cancelText
     * @param confirmText
     */
    show({
      title,
      content,
      cancelText,
      confirmText
    }) {
      this.isShow = true;
      this.title = title;
      this.content = content;
      this.cancelText = cancelText;
      this.confirmText = confirmText;
    }
  }
};
</script>

<style lang="less" scoped>
  .fade-quick-enter-active, .fade-quick-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .fade-quick-enter, .fade-quick-leave-to {
    opacity: 0;
  }
  .complain-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;

    &__wrap {
      position: absolute;
      width: 270px;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 6px;
      padding: 25px 15px 15px;
      text-align: center;
    }
    &__title {
      font-size: 18px;
      font-family: PingFangSC;
      font-weight: bold;
      color: #333;
      line-height: 25px;
      white-space: pre-line;
    }

    &__content {
      margin: 10px 10px 15px;
      font-size: 14px;
      font-family: PingFangSC;
      color: #999;
      line-height: 21px;
      text-align: center;
    }

    &__footer {
      display: flex;
      font-size: 16px;
      height: 44px;
      text-align: center;
      overflow: hidden;
      justify-content: space-between;
    }

    &__btn {
      line-height: 44px;
      color: rgba(51, 51, 51, 1);
      border-radius: 4px;
      font-family: PingFangSC;
      width: 115px;

      &-cancel {
        background: #fff;
        color: rgba(11,130,241,1);
        border:1px solid rgba(11,130,241,1)
      }

      &-confirm {
        background: #0B82F1;
        color: #fff;
      }
    }
  }
</style>
