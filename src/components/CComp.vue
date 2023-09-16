<script>
export default {
    props: [],
    created() {
        console.log('Cthis.$attrs:', this.$attrs)
    }
}

</script>

<template>
    <div v-bind="$attrs">组件三</div>
</template>