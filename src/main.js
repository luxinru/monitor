import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/mock' // 取消使用mock数据把这个注释掉

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
