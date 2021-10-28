<template>
  <div class="ceterChart1_root">
    <!-- <section class="legend">
      <img src="../../assets/images/设备路线图例.png" alt="">
      <img src="../../assets/images/设备路线图例 拷贝.png" alt="">
    </section> -->

    <section class="cigarette">
      <img src="../../assets/images/未标题-11.gif" alt="" />
    </section>

    <section class="house">
      <img src="../../assets/images/微信图片_20211022162106.png" alt="" />
    </section>

    <section class="circle">
      <img src="../../assets/images/微信图片_20211022154337.png" alt="" />
    </section>

    <section ref="carousel_bar" class="carousel_bar">
      <div
        :class="getClassName(index)"
        v-for="(item, index) in list"
        :key="index"
      >
        服务{{ item }}
        <img src="../../assets/images/微信图片_20211025172333.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'CeterChart1',
  data () {
    return {
      list: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      selectedIndexArr: [0, 1, 2, 3, 4],
      leftIndex: 0,
      tempInterval: null,
      isChange: true
    }
  },

  computed: {
  },

  watch: {
  },

  mounted () {
    this.tempInterval = setInterval(() => {
      if (this.isChange) {
        this.moveClick(0)

        if (this.leftIndex === 21) {
          this.isChange = false
        }
      } else {
        this.moveClick(1)
        if (this.leftIndex === 0) {
          this.isChange = true
        }
      }
    }, 5 * 1000)
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
