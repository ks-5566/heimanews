<template>
   <div class="banxin">
     <div class="one ">
       <span class="iconfont iconicon-test"></span>
    </div>
       <div class="three">
         <span class="iconfont iconnew"></span>
        </div>
       
        <van-form @submit="onSubmit" class="form">
            <!-- van-field是表单的字段 -->
            <!-- rules是表单字段的规则，required表示这个输入框是必填 -->
            <van-field
                v-model="form.username"
                name="手机号码"
                placeholder="手机号码"
                :rules="[{ required: true, message: '请填写手机号码' }]"
            />
            <!-- 密码输入框，和上面的属性是一样的 -->
            <van-field
                v-model="form.password"
                type="password"
                name="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div>
                <!-- 如果这个按钮是在van-form组件内部，
                并且按钮的native-type="submit"，说明点击这个按钮就会触发submit事件 -->
                <van-button round block type="info" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
        <router-link to="/register">
            <van-button round block class="link-register" >
                注册
            </van-button>
        </router-link>
               <div class="sever">

               </div>
         </div>
</template>

<script>
export default {
    data(){
        return{
        form:{
         username:"",
         password:"",
        }
      }
    },
    methods:{
    // 这里的values是给我们自己看的
    onSubmit(values) {
    //   console.log('submit', this.form);
            this.$axios({
                // 接口地址
                url:"/login",
                // 请求方式
                method:"POST",
                // 参数
                data:this.form
            }).then(res=>{
              // 获取到返回的信息, data是token和用户的信息，data是保存到本地的
                const {message,data}=res.data;
                 // 使用vant的弹窗提示用，success表示成功的弹窗
                this.$toast.success(message);
                // 把token和id保存到本地
                // localStorage只能保存字符串，需要使用JSON.stringify来把对象转换成字符串
                localStorage.setItem("userInfo", JSON.stringify(data));

                // 判断地址栏有没有return_url参数，
                const {return_url} = this.$route.query;
                // 有的话就跳转到这个路径，没有就跳转个人中心
                this.$router.replace(return_url || "/personal");
            });
        
         }  
     },
};
</script>

<style lang="less" scoped>
   .banxin{
     height: 20/360*100vw;
     background-color: #757575;
   }
   .one{
     display: flex;
      .iconicon-test{
        margin-top: 40/360*100vw;
        padding:  0 20/360*100vw;
        font-size: 27px;
      }
   }
   .iconnew{
     font-size: 100px;
     color: red;
     padding: 0 140/360*100vw;
   }
   .fore{
     padding: 0 20/360*100vw;
     color: rgba(134, 134, 134, 0.87);
     border-bottom: 1px #eee solid;
     
   }
   .five{
     padding: 0 20/360*100vw;
     color: rgba(134, 134, 134, 0.87);
     border-bottom: 1px #eee solid;
     margin-top: 15/360*100vw;
   }
   .six{
     display: flex;
     width:300/360*100vw;
     height: 40/360*100vw;
    line-height: 40/360*100vw;
    margin-left: 20/360*100vw;
     margin-top: 80/360*100vw;
     color: #eeeeee;
     border-radius: 20px;
     background-color: #cc3300;
      span{
      margin-left: 140/360*100vw;
      }
   }
  .sever{
    margin-top: 100/360*100vw;
    height:50/360*100vw;
    background: black;
  }
</style>