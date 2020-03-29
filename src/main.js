import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant from 'vant';
import axios from "axios";

// 绑定到原型,可以通过this.$axios来调用请求方法
Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://localhost:3000"

// 注册vant插件
Vue.use(Vant)
 
// 添加路由的守卫
// to: 代表你即将要访问的页面
// from：代表你即将要离开的页面
// next：必须要调用，next就类似于你nodejs的中间件，调用才会加载后面的内
router.beforeEach((to,from,next)=>{
  // 判断是否去的个人中心页
   if(to.path === "/personal"){
     // 判断是否是登录状态，时候有token
    // 如果本地的数据是空会返回null，null是没有token属性，会导致js报错，
    // 所以可以加个判断，如果本地的数据空的，等于空的对象
    const userJson = JSON.parse(localStorage.getItem('userInfo')) || {};
    // 有token可以正常访问
    if(userJson.token){
      next();
    }else{
      next("/login");
      // 跳转到登录页,next这个函数可以传递路径，并且会跳转该路径
    }
   }else{
      // 非个人中心页
      next();
   }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
