import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 注册路由的插件，把路由关联到vue。固定要加的
Vue.use(VueRouter)

const routes = [
  {
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
    //  个人收藏页
  {
    path:"/star",
    component:()=>import("@/views/Star"),
    meta:{
      authorization:true 
    }
  },
  {
		// 栏目管理页
		path: "/category",
		component: () => import("@/views/Category")
	},
	{
		// 栏目管理页
		path: "/search",
		component: () => import("@/views/Search")
  },
  {
		// 文章详情页
		path: "/post/:id",
		component: () => import("@/views/Post")
	},
	{
		// 视频文章详情页
		path: "/video/:id",
		component: () => import("@/views/Video")
	},
	{
		// 文章的跟帖列表页面
		path: "/post-comment/:id",
		component: () => import("@/views/PostComment")
	}
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
