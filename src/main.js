import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
Vue.config.productionTip = false
// 在Vue对象上挂载全局的axios避免每个组件都导入
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
