<template>
  <div ref="CeterChart2" class="ceterChart2_root"></div>
</template>

<script>
import * as echarts from 'echarts'
import { orderBy } from 'lodash'
import { fetchDepartmentProvidesRanking } from '../../api/index'

export default {
  name: 'CeterChart2',
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
    const { data: { datas } } = await fetchDepartmentProvidesRanking({
      row_num: 25
    })
    this.list = datas
    this.setDeviceSafe()
  },

  methods: {
    // 设备安全性风险
    setDeviceSafe () {
      var data = orderBy(this.list, 'provide_access_times', 'desc').splice(0, 6).map((item) => {
        return {
          name: item.dept_name,
          value: item.provide_access_times
        }
      })
      var color = '#929292'
      const xAxisData = []
      const seriesData = []
      let sum = 0

      console.log('sum', sum)

      data.map((item) => {
        xAxisData.push(item.name)
        seriesData.push(item.value)
        sum += item.value
      })

      var option = {
        // legend: {
        //   // Try 'horizontal'
        //   orient: 'horizontal',
        //   top: '30'
        // },

        grid: {
          left: '3%',
          right: '3%',
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
            color: '#2BB8F7',
            fontSize: 12
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#2BB8F7',
              opacity: 0.1
            }
          },
          axisTick: {
            lineStyle: {
              color: '#2BB8F7',
              opacity: color === '#fff' ? 0.3 : 1
            }
          },
          axisLine: {
            lineStyle: {
              color: '#2BB8F7',
              opacity: color === '#fff' ? 0.3 : 1
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: '#2BB8F7'
            }
          },
          splitNumber: 3,
          show: true,
          type: 'value'
        },
        series: [
          {
            type: 'pictorialBar',
            label: {
              show: true,
              position: 'top',
              fontSize: 14,
              color: '#2BB8F7',
              fontWeight: 'bold',
              itemStyle: {
                normal: {
                  color: function (params) {
                    return '#2BB8F7'
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0, 151, 251, 1)' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 34, 66, 0.2)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                } // 渐变颜色
              }
            },
            symbol:
              'path://M0.000,47.000 C0.000,47.000 10.951,43.083 12.938,37.510 C6.945,54.319 24.539,-0.000 34.000,-0.000 C40.701,-0.000 48.898,23.666 53.093,37.411 C54.810,43.036 68.000,47.000 68.000,47.000 L0.000,47.000 Z',

            z: 11,
            silent: true,
            barWidth: 80,
            barGap: '-100%', // Make series be overlap
            data: seriesData
          }
        ]
      }
      this.myChart = echarts.init(this.$refs.CeterChart2)

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.ceterChart2_root {
  width: 100%;
  height: 100%;
}
</style>
