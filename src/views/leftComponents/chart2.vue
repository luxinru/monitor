<template>
  <div class="leftchart2_root">
    <BaseChart type="orange" label="19234"></BaseChart>
  </div>
</template>

<script>
import BaseChart from './components/base.vue'
export default {
  name: 'LeftChart2',

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
@import './chart2.scss';
</style>
