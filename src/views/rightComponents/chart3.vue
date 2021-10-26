<template>
  <div ref="RightChart3" class="rightchart3_root"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'RightChart3',
  data () {
    return {
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

  methods: {
    // 计算最大值
    calMax (arr) {
      let max = 0
      arr.forEach((el) => {
        el.forEach((el1) => {
          if (!(el1 === undefined || el1 === '')) {
            if (max < Number(el1)) {
              max = Number(el1)
            }
          }
        })
      })
      const maxint = Math.ceil(max / 9.5)
      // 不让最高的值超过最上面的刻度
      const maxval = maxint * 10
      // 让显示的刻度是整数
      return maxval
    },
    // 设备安全性风险
    setDeviceSafe () {
      var value = [0.4, 0.5, 0.6, 0.72, 0.88]

      var option = {
        grid: {
          left: 20,
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
            margin: 0,
            align: 'left',
            padding: [-40, 0, 0, 0],
            textStyle: {
              color: '#78f2ff',
              fontSize: 12
            }
          },
          axisTick: {
            show: false
          },
          data: ['xxx系统1', 'xxx系统2', 'xxx系统3', 'xxx系统4', 'xxx系统5']
        },
        series: [
          {
            // 真实数值条形图
            name: '真实值',
            type: 'pictorialBar', // pictorialBar
            barWidth: '30%',
            symbol: 'rect',
            // symbolRepeat: 'true',
            // symbolMargin: '80%',
            // symbolSize: ['20%', '100%'],
            // symbolOffset: ['150%', '0%'],
            // symbolRepeat: true,
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
                console.log(v)
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
                show: false,
                position: ['100%', '10%'],
                fontSize: 18,
                formatter: function (params) {
                  console.info(params)
                  return ' ' + (value[params.dataIndex] * 100).toFixed(2) + '%'
                }
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
  },
  mounted () {
    this.setDeviceSafe()
  }
}
</script>

<style lang="scss" scoped>
.rightchart3_root {
  width: 100%;
  height: 100%;
}
</style>
