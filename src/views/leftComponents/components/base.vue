<template>
  <div class="baseChart_root">
    <section class="left">
      <div class="content">
        <img :src="type === 'blue' ? blueImg : orangeImg" alt="">

        <div class="label" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">{{ label }}</div>
      </div>
      <span class="tip">调用数</span>
    </section>
    <section class="right">
      <div class="box">
        <div class="item">
          <span class="label">服务总数</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">9389</span>
        </div>
        <div class="item">
          <span class="label">应用数</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">8321</span>
        </div>
        <div class="item">
          <span class="label">非法访问</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">530</span>
        </div>
      </div>
      <div class="box">
        <div class="item">
          <span class="label">部门数</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">3457</span>
        </div>
        <div class="item">
          <span class="label">失败数</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">2987</span>
        </div>
        <div class="item">
          <span class="label">平均响应时间(秒)</span>
          <img src="../../../assets/images/ge.png" alt="">
          <span class="value" :style="`color: ${type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'}`">331</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseChart',

  props: {
    type: {
      type: String,
      default: () => {
        return 'blue'
      }
    },

    label: {
      type: String,
      default: () => {
        return '25万'
      }
    }
  },

  data () {
    return {
      blueImg: require('../../../assets/images/zhuan1.png'),
      orangeImg: require('../../../assets/images/zhuan2.png')
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
</style>
