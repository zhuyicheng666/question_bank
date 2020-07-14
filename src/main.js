import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'default-passive-events'

import htmlToPdf from './utils/htmlToPdf'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)





// 设置axios默认的url
// 将axios挂载到vue原型上
axios.defaults.baseURL="https://mock.yonyoucloud.com/mock/7453"
Vue.prototype.$axios=axios

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
