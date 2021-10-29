<template>
  <div ref="leftChart3" class="leftChart3_root"></div>
</template>

<script>
import * as echarts from 'echarts'
import { orderBy } from 'lodash'
import { fetchDepartmentVisitRanking } from '../../api/index'

export default {
  name: 'leftChart3',

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
    const { data: { datas } } = await fetchDepartmentVisitRanking({
      row_num: 25
    })
    this.list = datas
    this.setDeviceSafe()
  },

  methods: {
    // 设备安全性风险
    setDeviceSafe () {
      const data = orderBy(this.list, 'access_times', 'desc').splice(0, 6).map((item) => {
        return {
          name: item.dept_name,
          value: item.access_times
        }
      })
      const color = '#929292'
      const xAxisData = []
      const seriesData = []
      const botData = []
      let sum = 0

      console.log('sum', sum)

      data.map((item) => {
        xAxisData.push(item.name)
        seriesData.push(item.value)
        sum += item.value
      })

      const option = {
        // legend: {
        //   // Try 'horizontal'
        //   orient: 'horizontal',
        //   top: '30'
        // },

        grid: {
          left: 20,
          right: 20,
          top: 60,
          bottom: 0,
          containLabel: true
        },
        title: {
          text: '单位(万次)',

          top: 20,
          textStyle: {
            color: '#78f2ff',
            fontSize: 12
          }
        },

        xAxis: {
          data: xAxisData,
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#78f2ff',
              opacity: 1
            }
          },
          axisLabel: {
            show: true,
            margin: 10,
            interval: 0,
            textStyle: {
              color: '#78f2ff',
              lineHeight: 18
            }
          },
          interval: 0
        },
        yAxis: {
          // name: "面积：㎡",
          nameTextStyle: {
            color: color,
            fontSize: 12
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: color,
              opacity: 0.1
            }
          },
          axisTick: {
            lineStyle: {
              color: '#78f2ff',
              opacity: color === '#fff' ? 0.3 : 1
            }
          },
          axisLine: {
            lineStyle: {
              color: color,
              opacity: color === '#fff' ? 0.3 : 1
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: '#78f2ff'
            }
          },
          splitNumber: 3,
          show: true,
          type: 'value'
        },
        series: [
          {
            name: '这些',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            z: 16,
            itemStyle: {
              normal: {
                color: function (params) {
                  return 'rgba(0, 234, 255, 1)'
                }
              }
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 14,
              fontWeight: 'bold',
              itemStyle: {
                normal: {
                  color: function (params) {
                    return 'rgba(0, 234, 255, 1)'
                  }
                }
              }
            },
            symbolPosition: 'end',
            data: seriesData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, 5],
            z: 11,
            itemStyle: {
              normal: {
                color: function (params) {
                  return '#2682B5'
                }
              }
            },
            data: botData
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: (params) => {
                  return new echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                      { offset: 0, color: 'rgba(34, 68, 172, 0.35)' },
                      { offset: 1, color: 'rgba(0, 183, 255, 1)' }
                    ] // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                  )
                },
                opacity: 0.5
              }
            },
            z: 11,
            silent: true,
            barWidth: 20,
            barGap: '-100%', // Make series be overlap
            data: seriesData
          }
        ]
      }
      this.myChart = echarts.init(this.$refs.leftChart3)

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.leftChart3_root {
  width: 100%;
  height: 100%;
}
</style>
