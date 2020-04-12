<template>
    <div class="banxin">
      <!-- 引入自定义的头部导航组件,  showHome显示首页图标的 -->
		<NavigateBar title="个人中心" :showHome="true"/>
		
	<router-link to="/editprofile">
     <div class="header">
		 <!-- 头像 -->
		 <div class="avatar">
			 <!-- <img src="https://www.baidu.com/img/bd_logo1.png" alt=""> -->
			 <img src="$axios.defaults.baseURL+userInfo.head_img" alt="">
		 </div>
		 <div class="profile">
			 <div>
				 <!-- 性别男的图标 -->
				 <span class="arrow iconfont iconxingbienan"
				 v-if="userInfo.gender === 1"></span>
				 <!-- 性别女的图标 -->
				 <span class="iconfont iconxingbienv" v-if="userInfo.gender === 0"></span>
				 {{userInfo.nickname}}
			 </div>
			 <p>{{ moment(userInfo.create_date).format('YYYY-MM-DD') }}</p>
		 </div>
		 <span class="iconfont iconjiantou1"></span>
	 </div>
	 </router-link>
	 <!-- 组件的调用，单双标签都可以 -->
		<!-- :key不是报错，可以不加，
		但是vue希望给循环的元素指定“唯一的key”，所以推荐我们在循环时候都加上 -->
		<Listbar v-for="(item, index) in rows" :key="index"
		:label="item.label" 
		:tips="item.tips"
		:path="item.path"/>
		<!-- handleClick点击退出按钮时候触发 -->
		<!-- click.native这个事件类型，会给Listbar这个组件最外部的div强制绑定点击事件
			不要去跟事件传递作比较 -->
		<Listbar @click.native="handleClick" label="退出"/>

		<div class="five">

	   </div>
  </div>
</template>
<script>
// 导入列表按钮栏的组件，import后面接上的组件变量名（变量就意味着可以随便改名字）
// @代表src目录
import Listbar from "@/components/Listbar";
// 引入头部导航组件
import NavigateBar from "@/components/NavigateBar"
// 引入第三方的日期格式处理的工具库
import moment from "moment";
  export default{
     data(){
		return {
			// 组织一个列表按钮栏的数据
			rows: [
				{ label: "我的关注", tips: "关注的用户" ,path:"/follow"},
				{ label: "我的跟帖", tips: "跟帖回复",path:"/comment" },
				{ label: "我的收藏", tips: "文章视频" ,path:"/star"},
			],
			// 个人的详细信息,初始值给一个对象
			userInfo: {},
			// moment是日期处理的工具库，为了在模板中可以使用，所以需要绑定在data中
			moment,
		}
	 },
	 components:{
		 Listbar,
		 NavigateBar
	 },
	 mounted(){
		 // 从本地获取token和id
		 const jsonStr = localStorage.getItem("userInfo");
		 // 把字符串转成对象,userJson就是用户的信息对象
		// userJson.token和userJson.user.id 这两个值是接口需要的
		const userJson = JSON.parse(jsonStr);
		// 发起异步的请求
		this.$axios({
			url: "/user/" +   userJson.user.id,
			// 添加头信息
			headers: {
				Authorization: userJson.token
			}
		}).then(res => {
			// 解构出用户的数据
			// console.log(res)
			const {data} = res.data;
			// 赋值给data的userInfo
			this.userInfo = data;
		})
	 },
     methods: {
		// 退出的事件
		handleClick(){
			// 询问用户是否确定退出
			this.$dialog.confirm({
				title: '提示',
				message: '确定退出吗？'
			}).then(() => {
				// 点击确定时候触发的函数
				
				// 清除本地的存储的用户数据
				localStorage.removeItem("userInfo");
				// 跳转到登录页,必须要使用replace。因为退出不可能再返回个人中心
				this.$router.replace("/login");
			}).catch(() => {
				// 点击取消按钮触发的函数
			});
		}
	}
  };
</script>

<style scoped lang="less">
  .navigate-bar{
	line-height: 48 / 360 * 100vw;
	display: flex;
	justify-content: space-between;
	align-items:center;
	padding: 0 20 / 360 * 100vw;
	border-bottom:1px #eee solid;
	}
	.iconshouye{
		font-size: 20px;
	}
   .header{
	padding: 20 / 360 * 100vw;
	display: flex;
	justify-content: space-between;
	align-items:center;
	border-bottom: 5px #eee solid;

	.avatar{
		img{
			display: block;
			width:70 / 360 * 100vw;
			height: 70 / 360 * 100vw;
			border-radius: 50%;
			object-fit: cover;
		}
	}

	.profile{
		flex:1;
		padding-left: 20 / 360 * 100vw;
		line-height: 1.5;
		p{
			color: #999;
		}
	}
}
.five{
	width: 360/360*100vw;
	height: 50/360*100vw;
	background-color:#757575;
	align-items: center;
}
.iconxingbienan{
			color: blue;
		}
.iconxingbienv{
			color: palevioletred;
		}
</style>