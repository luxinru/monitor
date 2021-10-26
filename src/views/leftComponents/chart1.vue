<template>
  <div class="leftchart1_root">
    <BaseChart></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/base.vue'
export default {
  name: 'LeftChart1',

  components: {
    BaseChart
  },

  data () {
    return {
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './chart1.scss';
</style>
