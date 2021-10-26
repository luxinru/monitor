<template>
  <div class="rightchart1_root">
    <table>
      <thead>
        <tr>
          <th>调用部门</th>
          <th>被调用部门</th>
          <th>服务名称</th>
          <th>访问情况</th>
          <th>访问时间</th>
        </tr>
      </thead>
      <tbody ref="tbody">
        <tr v-for="(item, index) in tableList" :key="index">
          <td>{{ item.value1 }}</td>
          <td>{{ item.value2 }}</td>
          <td>{{ item.value3 }}</td>
          <td :class="index % 2 === 0 ? 'success' : 'fail'">
            {{ index % 2 === 0 ? '成功' : '失败' }}
          </td>
          <td>{{ item.value5 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RightChart1',
  data () {
    return {
      scrollTopInterval: null,
      tableList: [
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        },
        {
          value1: '民族局',
          value2: '公安局',
          value3: '人口基本...',
          value4: '成功',
          value5: '访问时间'
        }
      ]
    }
  },
  methods: {},
  mounted () {
    const tbody = this.$refs.tbody
    let max = 0
    this.scrollTopInterval = setInterval(() => {
      tbody.scrollTop = tbody.scrollTop + 1
      if (max === tbody.scrollTop) {
        tbody.scrollTop = 0
      }
      max = tbody.scrollTop
    }, 0.03 * 1000)
  },
  beforeDestroy () {
    if (this.scrollTopInterval) {
      window.clearInterval(this.scrollTopInterval)
    }
    this.scrollTopInterval = null
  }
}
</script>

<style lang="scss" scoped>
@import './chart1.scss';
</style>
