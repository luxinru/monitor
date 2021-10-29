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

<style lang="scss">
@font-face {
  font-family: 'chuanqi';
  src: url('./assets/fonts/字体传奇特战体-免费商用.ttf');
}
</style>
