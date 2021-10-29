<template>
  <div class="index_root">
    <section class="header">
      <span>数据服务全景</span>
      <span>接口综合监控</span>
      <span>平台健康监控</span>
    </section>

    <section class="body">
      <section class="left">
        <Container class="box" title="整体指标">
          <LeftChart1></LeftChart1>
        </Container>
        <Container class="box mt24" title="当日情况">
          <LeftChart2></LeftChart2>
        </Container>
        <Container class="box mt24" title="部门访问排行">
          <LeftChart3></LeftChart3>
        </Container>
      </section>

      <section class="middle">
        <CeterChart1 class="animation"></CeterChart1>
        <Container class="box mt48" title="部门提供排行">
          <CeterChart2></CeterChart2>
        </Container>
      </section>

      <section class="right">
        <Container class="box" title="整体指标">
          <div slot="title" class="special_title">
            <div :class="{selected: selected === 1}">实时滚动</div>
            <div class="icon">/</div>
            <div :class="{selected: selected === 2}">接口波测</div>
            <div class="icon">/</div>
            <div :class="{selected: selected === 3}">滚动预警</div>
          </div>
          <RightChart1 :type.sync="selected"></RightChart1>
        </Container>
        <Container class="box mt24" title="热度排行">
          <RightChart2></RightChart2>
        </Container>
        <Container class="box mt24" title="应用调用排行">
          <RightChart3></RightChart3>
        </Container>
      </section>
    </section>
  </div>
</template>

<script>
import Container from '../components/container/index.vue'

import LeftChart1 from './leftComponents/chart1.vue'
import LeftChart2 from './leftComponents/chart2.vue'
import LeftChart3 from './leftComponents/chart3.vue'
import CeterChart1 from './ceterComponents/chart1.vue'
import CeterChart2 from './ceterComponents/chart2.vue'
import RightChart1 from './rightComponents/chart1.vue'
import RightChart2 from './rightComponents/chart2.vue'
import RightChart3 from './rightComponents/chart3.vue'

export default {
  name: 'Index',

  components: {
    Container,
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CeterChart1,
    CeterChart2,
    RightChart1,
    RightChart2,
    RightChart3
  },

  data () {
    return {
      selected: 1,
      selectedInterval: null
    }
  },

  mounted () {
    // 表格自动切换tab
    this.selectedInterval = setInterval(() => {
      if (this.selected === 3) {
        this.selected = 1
      } else {
        this.selected = this.selected + 1
      }
    }, 15 * 1000)
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
