<template>
  <div ref="RightChart3" class="rightchart3_root"></div>
</template>

<script>
import { orderBy } from 'lodash'
import { fetchApplicationCallRanking } from '../../api/index'
import * as echarts from 'echarts'
export default {
  name: 'RightChart3',
  data () {
    return {
      list: [],
      myChart: null
    }
  },

  inject: ['isResize'],

  computed: {
    isResizeMsg () {
      return this.isResize()
    }
  },

  watch: {
    isResizeMsg () {
      if (this.myChart) {
        this.myChart.resize()
      }
    }
  },

  async mounted () {
    const { data: { datas } } = await fetchApplicationCallRanking({
      row_num: 25
    })
    this.list = orderBy(datas, 'access_times', 'desc').splice(0, 4).map((item) => {
      return {
        name: item.app_name,
        value: item.access_times > 1 ? Number((item.access_times - 1).toFixed(2)) : Number((item.access_times).toFixed(2))
      }
    })
    console.log('this.list', this.list)
    this.setDeviceSafe()
  },

  methods: {
    // 设备安全性风险
    setDeviceSafe () {
      const value = this.list.map(item => item.value)

      const option = {
        grid: {
          left: '10%',
          right: 20,
          top: 20,
          bottom: 0
        },
        tooltip: {
          show: false
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 1,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ffffff',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(96,118,173,0.3)'
            }
          },
          axisLabel: {
            show: false,
            color: '#2BB8F7',
            fontSize: 12
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          // show: false,
          type: 'category',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            margin: 8,
            textStyle: {
              color: '#78f2ff',
              fontSize: 12
            }
          },
          axisTick: {
            show: false
          },
          data: this.list.map(item => item.name)
        },
        series: [
          {
            // 真实数值条形图
            name: '真实值',
            type: 'pictorialBar', // pictorialBar
            barWidth: '30%',
            symbol: 'rect',
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: {
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0, 253, 85, 0.06)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 253, 85, 1)'
                    }
                  ]
                }
              },
              barBorderRadius: 10
            },
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#78f2ff',
                fontSize: 12
              },
              formatter: function (v) {
                return v.value * 1000
              }
            },
            data: value,
            z: 1
          },
          {
            // 辅助方格图形
            name: '辅助值',
            type: 'pictorialBar',
            barWidth: '30%',
            symbol: 'rect',
            symbolMargin: '80%',
            symbolSize: ['20%', '100%'],
            symbolOffset: ['150%', '0%'],
            symbolRepeat: true,
            itemStyle: {
              normal: {
                color: 'rgba(10,16,30,1)'
              },
              barBorderRadius: 10
            },
            label: {
              normal: {
                color: '#fff',
                show: false
              }
            },
            data: [1, 1, 1, 1, 1],
            z: 1
          },
          {
            // 辅助背景图形
            name: '背景条',
            type: 'bar', // pictorialBar
            barWidth: '30%',
            barGap: '-100%',
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: '#052a32'
              },
              barBorderRadius: 10
            },
            data: [1, 1, 1, 1, 1],
            z: 0
          }
        ]
      }

      this.myChart = echarts.init(this.$refs.RightChart3)

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.rightchart3_root {
  width: 100%;
  height: 100%;
}
</style>
