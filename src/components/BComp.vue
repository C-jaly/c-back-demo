<script>
import CComp from '../components/CComp.vue'

export default {
  inheritAttrs: false,
  components: {
    CComp
  },
  props: [],
  emits: [],
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<template>
  <div>
      <p>B组件{{$attrs}}</p>
      <CComp v-bind="$attrs" />
  </div>
</template>