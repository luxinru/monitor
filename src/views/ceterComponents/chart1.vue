<template>
  <div class="ceterChart1_root">
    <!-- <section class="legend">
      <img src="../../assets/images/设备路线图例.png" alt="">
      <img src="../../assets/images/设备路线图例 拷贝.png" alt="">
    </section> -->

    <!-- <section class="cigarette">
      <img src="../../assets/images/未标题-11.gif" alt="" />
    </section> -->

    <section class="house">
      <img :src="imgPath" alt="" />
    </section>

    <section class="circle">
      <img src="../../assets/images/微信图片_20211022154337.png" alt="" />
    </section>

    <section ref="carousel_bar" class="carousel_bar">
      <template v-if="list.length > 4">
        <div
          :class="getClassName(index)"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ item.node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
      </template>

      <template v-if="list.length === 1">
        <div class="item side" style="opacity: 0;"></div>
        <div class="item subside" style="opacity: 0;">
        </div>
        <div class="item middle">
          {{ list[0].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item subside" style="opacity: 0;">
        </div>
        <div class="item side" style="opacity: 0;"></div>
      </template>

      <template v-if="list.length === 2">
        <div class="item side" style="opacity: 0;"></div>
        <div class="item subside">
          {{ list[0].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item middle" style="opacity: 0;"></div>
        <div class="item subside subside_two">
          {{ list[1].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item side" style="opacity: 0;"></div>
      </template>

      <template v-if="list.length === 3">
        <div class="item side">
          {{ list[0].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item subside" style="opacity: 0;">
        </div>
        <div class="item middle">
          {{ list[1].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item subside" style="opacity: 0;">
        </div>
        <div class="item side side_two">
          {{ list[2].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
      </template>

      <template v-if="list.length === 4">
        <div class="item side">
          {{ list[0].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item subside">
          {{ list[1].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item middle" style="opacity: 0;"></div>
        <div class="item subside subside_two">
          {{ list[2].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
        <div class="item side side_two">
          {{ list[3].node_name }}
          <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { fetchServiceHealthProfile } from '../../api/index'

export default {
  name: 'CeterChart1',
  data () {
    return {
      list: [],
      selectedIndexArr: [0, 1, 2, 3, 4],
      leftIndex: 0,
      tempInterval: null,
      isChange: true,
      master: 1,
      backup: 2,
      house1: require('../../assets/images/左侧可用右侧异常.gif'),
      house2: require('../../assets/images/右侧可用左侧异常.gif'),
      house3: require('../../assets/images/左侧可用右侧待用.gif')
    }
  },

  computed: {
    imgPath () {
      if (this.master === 1 && this.backup === 0) {
        return this.house1
      } else if (this.master === 0 && this.backup === 1) {
        return this.house2
      } else if (this.master === 2 && this.backup === 2) {
        return this.house3
      } else {
        return this.house1
      }
    }
  },

  watch: {
  },

  async mounted () {
    const { data: { datas: { bus_info: busInfo, srv_node_info: srvNodeInfo } } } = await fetchServiceHealthProfile()
    console.log('busInfo', busInfo)
    console.log('srvNodeInfo', srvNodeInfo)
    this.master = busInfo.master.status
    this.backup = busInfo.backup.status
    this.list = srvNodeInfo
    if (this.list.length > 5) {
      this.tempInterval = setInterval(() => {
        if (this.isChange) {
          this.moveClick(0)

          if (this.leftIndex === this.list.length - 5) {
            this.isChange = false
          }
        } else {
          this.moveClick(1)
          if (this.leftIndex === 0) {
            this.isChange = true
          }
        }
      }, 5 * 1000)
    }
  },

  methods: {
    getClassName (index) {
      const selectedIndex = this.selectedIndexArr.indexOf(index)
      switch (selectedIndex) {
        case 0:
          return 'item side'
        case 1:
          return 'item subside'
        case 2:
          return 'item middle'
        case 3:
          return 'item subside subside_two'
        case 4:
          return 'item side side_two'
        default:
          return 'item'
      }
    },

    moveClick (type = 0) {
      if (this.selectedIndexArr[0] === 0 && type !== 0) return
      if (
        this.selectedIndexArr[this.selectedIndexArr.length] ===
          this.list.length &&
        type === 0
      ) { return }
      this.selectedIndexArr.forEach((item, index) => {
        this.$set(
          this.selectedIndexArr,
          index,
          type === 0
            ? this.selectedIndexArr[index] + 1
            : this.selectedIndexArr[index] - 1
        )
      })
      this.leftIndex = type === 0 ? this.leftIndex + 1 : this.leftIndex - 1
      this.$refs.carousel_bar.style.left = this.leftIndex * -20 + '%'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../ceterComponents/chart1.scss';
</style>
