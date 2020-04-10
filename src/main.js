import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vant, { Toast } from 'vant';
import axios from "axios";
// 保存根实例对象的
let app;

// 绑定到原型,可以通过this.$axios来调用请求方法
Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://localhost:3000"
//axios.defaults.baseURL = "http://hmtoutiao-api.atlansic.com"

// 注册vant插件
Vue.use(Vant)

// 上线环境是否提示信息(忽略)
Vue.config.productionTip = false
 
// 添加路由的守卫
// to: 代表你即将要访问的页面
// from：代表你即将要离开的页面
// next：必须要调用，next就类似于你nodejs的中间件，调用才会加载后面的内
router.beforeEach((to,from,next)=>{
//   // 判断是否去的个人中心页
   if(to.meta.authorization){
     // 判断是否是登录状态，时候有token
    // 如果本地的数据是空会返回null，null是没有token属性，会导致js报错，
    // 所以可以加个判断，如果本地的数据空的，等于空的对象
    const userJson = JSON.parse(localStorage.getItem('userInfo')) || {};
    // // 有token可以正常访问
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
});

// axios响应拦截器 文档地址：https://github.com/axios/axios#interceptors
axios.interceptors.response.use(res=>{
  return res;
},error=>{
  // 如果请求返回的结果是错误的，会进入到错误的处理函数中
	// error是js原生的错误对象，我们可以用过error.response可以获取到详细的信息
  const {statusCode,message}=error.response.data;
  if(statusCode===400){
    Toast.fail(message);
  }
  // 如果状态码是403，就表示token是错的或者没有传token
	if(statusCode === 403){
		// 提示
		Toast.fail(message);

		// 跳转到登录页, push方法的参数除了可以直接写一个字符串还可以写一个对象
		// 对象里面的path属性表示路径，query表单问号的参数
		// 比如这完整的路径其实 /login?return_url=/posts/8
		app.$router.push({
			path: "/login",
			query: {
				return_url: app.$route.path
			}
		});
	}
  return Promise.reject(error)
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
