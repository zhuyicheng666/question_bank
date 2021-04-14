import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'default-passive-events'
import echarts from 'echarts'
import htmlToPdf from './utils/htmlToPdf'
import _ from 'lodash'
Vue.prototype._ = _
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)





// 设置axios默认的url
// 将axios挂载到vue原型上
// axios.defaults.baseURL="https://mock.yonyoucloud.com/mock/7453"
// axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.$axios=axios
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
