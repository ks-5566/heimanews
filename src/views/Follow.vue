<template>
  <div class="banxin">
      <div class="toubu">
        <!-- 头部组件 -->
        <NavigateBar title="我的关注"/>
       </div>
       <!-- 要循环的结构 -->
       <div class="toubu1" v-for="(item,index) in follows" :key="index">
       <img :src="$axios.defaults.baseURL+item.head_img" alt="">
       <div class="toubu1-one">
       <span>{{item.nickname}}</span>
        <p>{{moment(item.create_date).format("YYYY-MM-DD hh:mm:ss")}}</p>
       </div>
       <div class="toubu2"  @click="handleCancel(item.id, index)">取消关注</div>
       </div>
  </div>
</template>

<script>
import NavigateBar from "@/components/NavigateBar"
import moment from "moment"
export default {
    data(){
        return{
            follows:[],
             // 把moment挂载到data
            moment,
            // 本地的用户数据 token
            localUserJson: {}
        }
    },
   components:{
       NavigateBar
   },
   mounted(){
       // 获取token
       const localUserJson = JSON.parse(localStorage.getItem('userInfo'));
        // 保存到data
        this.localUserJson = localUserJson;
       // 请求列表数据
       this.$axios({
           url:"user_follows",
           headers:{
               Authorization:localUserJson.token
           }
       }).then(res=>{
        //    console.log(res);
        // data就是我的关注的用户列表
        const {data}=res.data;
        // 保存到data中的关注列表
        this.follows=data;
       })
   },
   methods: {
        // 取消关注，参数id是模板传递过来的用户id
        handleCancel(id, index){
            // 弹窗提示
            this.$dialog.confirm({
				title: '提示',
				message: '确定取消关注吗？'
			}).then(() => {
                // 根据id取消用户的关注,id是要取消的那个用户的id
                this.$axios({
                    url: "/user_unfollow/" + id,
                    headers: {
                        Authorization: this.localUserJson.token
                    }
                }).then(res => {
                    this.$toast.success("取消关注成功");
                    // 刷新页面的数据
                    this.follows.splice(index, 1);
                });
            })
        }
    }
};
</script>

<style lang="less" scoped>
.toubu1{
    display: flex;
    padding: 20/360*100vw;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
}
  .toubu1 img{
    display: flex;
    width: 40/360*100vw;
    height: 40/360*100vw;
    justify-content: center;
    border-radius: 50%;
    
  }
  .toubu1-one{
    flex: 1;
    margin-left: 20/360*100vw;
  }
  .toubu2{
      padding: 6px;
      background: #eeeeee;
      border-radius: 30px;
      font-size: 10px;
  }
</style>