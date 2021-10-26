<template>
  <div ref="RightChart2" class="rightchart2_root"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'right2',

  data () {
    return {
      myChart: null,
      datas: [
        {
          name: '云山市人力和社会资源保障局管理系统社保缴纳明细查询接口',
          value: 10
        },
        {
          name: '云山市人交通局管理系统社保缴纳明细查询接口',
          value: 20
        },
        {
          name: '云山市卫生局管理系统社保缴纳明细查询接口',
          value: 64
        },
        {
          name: '云山市卫生局管理系统社保缴纳明细查询接口',
          value: 44
        }
      ]
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

  mounted () {
    this.setDeviceSafe()
  },

  methods: {
    getArrByKey (data, k) {
      const key = k || 'value'
      const res = []
      if (data) {
        data.forEach(function (t) {
          res.push(t[key])
        })
      }
      return res
    },

    getSymbolData (data) {
      const arr = []
      for (var i = 0; i < data.length; i++) {
        arr.push({
          value: data[i].value,
          symbolPosition: 'end'
        })
      }
      return arr
    },

    setDeviceSafe () {
      const option = {
        grid: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 0
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            triggerEvent: true,
            show: false,
            data: this.getArrByKey(this.datas, 'name')
          },
          {
            triggerEvent: true,
            show: false,
            data: this.getArrByKey(this.datas, 'name')
          }
        ],
        series: [
          {
            name: 'XXX',
            type: 'pictorialBar',
            symbol:
              'image://data:image/png;base64,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',
            symbolSize: [50, 50],
            symbolOffset: [20, 0],
            z: 12,
            data: this.getSymbolData(this.datas)
          },
          {
            name: '条',
            type: 'bar',
            showBackground: true,
            yAxisIndex: 0,
            data: this.datas,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0, // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                  [
                    { offset: 0, color: 'rgba(34, 68, 172, 0.35)' },
                    { offset: 1, color: 'rgba(255, 234, 0, 0.99)' }
                  ] // 数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
              }
            },
            label: {
              show: true,
              position: [0, '-26px'],
              color: 'rgba(139, 212, 255, 1)',
              formatter: '{b}',
              fontSize: 14
            }
          }
        ]
      }

      this.myChart = echarts.init(this.$refs.RightChart2)

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.rightchart2_root {
  width: 100%;
  height: 100%;
}
</style>
