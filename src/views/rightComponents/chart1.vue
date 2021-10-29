<template>
  <div class="rightchart1_root">
    <table>
      <thead>
        <tr>
          <template v-if="type === 1">
            <th>调用部门</th>
            <th>被调用部门</th>
            <th>服务名称</th>
            <th>访问情况</th>
            <th>访问时间</th>
          </template>
          <template v-if="type === 2">
            <th>部门名称</th>
            <th>服务归属部门</th>
            <th>波测结果</th>
            <th>波测时间</th>
          </template>
          <template v-if="type === 3">
            <th>部门名称</th>
            <th>服务归属部门</th>
            <th>预警信息</th>
            <th>预警时间</th>
          </template>
        </tr>
      </thead>
      <tbody ref="tbody">
        <template v-if="type === 1">
          <tr v-for="(item, index) in tableList" :key="index">
            <td>{{ item.srv_name }}</td>
            <td>{{ item.app_name }}</td>
            <td>{{ item.srv_owner_dept_name }}</td>
            <td :class="item.access_result === 1 ? 'success' : 'fail'">
              {{ item.access_result === 1 ? '成功' : '失败' }}
            </td>
            <td>{{ item.access_time }}</td>
          </tr>
        </template>
        <template v-if="type === 2">
          <tr v-for="(item, index) in tableList" :key="index">
            <td>{{ item.srv_name }}</td>
            <td>{{ item.owner_dept_name }}</td>
            <td :class="item.check_result === 1 ? 'success' : 'fail'">
              {{ item.check_result === 1 ? '正常' : '异常' }}
            </td>
            <td>{{ item.check_time }}</td>
          </tr>
        </template>
        <template v-if="type === 3">
          <tr v-for="(item, index) in tableList" :key="index">
            <td>{{ item.srv_name }}</td>
            <td>{{ item.owner_dept_name }}</td>
            <td>{{ item.warning_info }}</td>
            <td>{{ item.warning_time }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { fetchLogs1, fetchLogs2, fetchLogs3 } from '../../api/index'

export default {
  name: 'RightChart1',

  props: {
    type: {
      type: Number,
      default: 1
    }
  },

  watch: {
    type: {
      handler () {
        console.log('change')
        this.init()
      },
      immediate: true
    }
  },

  data () {
    return {
      scrollTopInterval: null,
      tableList: []
    }
  },

  methods: {
    async init () {
      switch (this.type) {
        case 1: {
          const { data: { datas } } = await fetchLogs1({
            row_num: 50
          })
          this.tableList = datas
          break
        }

        case 2: {
          const { data: { datas } } = await fetchLogs2({
            row_num: 50
          })
          this.tableList = datas
          break
        }

        case 3: {
          const { data: { datas } } = await fetchLogs3({
            row_num: 50
          })
          this.tableList = datas
          break
        }
      }

      const tbody = this.$refs.tbody
      let max = 0
      if (this.scrollTopInterval) {
        window.clearInterval(this.scrollTopInterval)
      }
      this.scrollTopInterval = setInterval(() => {
        tbody.scrollTop = tbody.scrollTop + 1
        if (max === tbody.scrollTop) {
          tbody.scrollTop = 0
        }
        max = tbody.scrollTop
      }, 0.03 * 1000)
    }
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
