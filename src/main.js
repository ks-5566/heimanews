import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant from 'vant';
import axios from "axios";
// 注册vant插件
Vue.use(Vant)

// 绑定到原型,可以通过this.$axios来调用请求方法
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
