import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    // 登录页
		path: "/index",
		// 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
		// .vue这个扩展名可以忽略
		component: () => import("@/views/Index")
  },
  {
    // 登录页
		path: "/login",
		// 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
		// .vue这个扩展名可以忽略
		component: () => import("@/views/Login")
  },
  {
    // 注册页
    path:"/register",
    component:()=>import("@/views/Register")
  },
  {
    // 个人中心页
    path:"/personal",
    component:()=>import("@/views/Personal"),
    meta:{
      authorization:true 
    }
  },
  {
    // 个人编辑页
    path:"/editprofile",
    component:()=>import("@/views/EditProfile"),
    meta:{
      authorization:true 
    }
  },
  //  个人关注页
  {
    path:"/follow",
    component:()=>import("@/views/Follow"),
    // 路由可以通过meta自定义数据
    meta:{
      authorization:true 
    }
  },
  //  个人跟帖页
  {
    path:"/comment",
    component:()=>import("@/views/Comment"),
    meta:{
      authorization:true 
    }
  },
    //  个人跟帖页
  {
    path:"/star",
    component:()=>import("@/views/Star"),
    meta:{
      authorization:true 
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
