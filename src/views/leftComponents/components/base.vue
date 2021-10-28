<template>
  <div class="baseChart_root">
    <section class="left">
      <div class="content">
        <img :src="type === 'blue' ? blueImg : orangeImg" alt="" />

        <div
          class="label"
          :style="`color: ${
            type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
          }`"
        >
          {{ response.total_access }}
        </div>
      </div>
      <span class="tip">调用数</span>
    </section>
    <section class="right">
      <div class="box">
        <div class="item">
          <span class="label">服务总数</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.srv_num }}</span
          >
        </div>
        <div class="item">
          <span class="label">应用数</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.app_num }}</span
          >
        </div>
        <div class="item">
          <span class="label">非法访问</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.illegal_access }}</span
          >
        </div>
      </div>
      <div class="box">
        <div class="item">
          <span class="label">部门数</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.dept_num }}</span
          >
        </div>
        <div class="item">
          <span class="label">失败数</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.failed_access }}</span
          >
        </div>
        <div class="item">
          <span class="label">平均响应时间(秒)</span>
          <img src="../../../assets/images/ge.png" alt="" />
          <span
            class="value"
            :style="`color: ${
              type === 'blue' ? 'rgba(0, 237, 255, 1)' : 'rgba(255, 210, 0, 1)'
            }`"
            >{{ response.avg_times / 1000 }}</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fetchComprehensive } from '../../../api/index'

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
      orangeImg: require('../../../assets/images/zhuan2.png'),
      response: {
        total_statistics: 0, // 整体统计指标
        today_statistics: 0, // 当天整体指标
        dept_num: 0, // 部门数 单位为个
        app_num: 0, // 应用数 单位为个
        srv_num: 0, // 服务数 单位为个
        total_access: 0, // 调用总数 单位为次
        success_access: 0, // 成功调用数 单位为次
        failed_access: 0, // 失败调用数 单位为次
        illegal_access: 0, // 非法调用数 单位为次
        avg_times: 0 // 平均响应时间 单位时毫秒
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data: { datas } } = await fetchComprehensive({
        range: this.type === 'blue' ? 1 : 2
      })

      this.response = this.type === 'blue' ? datas.total_statistics : datas.today_statistics
    }
  }
}
</script>

<style lang="scss" scoped>
@import './base.scss';
</style>
