<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isResize: false
    }
  },

  provide () {
    return {
      isResize: () => this.isResize
    }
  },

  mounted () {
    window.onresize = () => {
      this.isResize = !this.isResize
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
