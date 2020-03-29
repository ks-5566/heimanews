<template>
   <div class="benxin">
        <!-- 第一个灰色快 -->
        <div class="one">
        </div>
         <!-- 头部下面第一个区域 -->
        <div class="two iconfont iconicon-test">

        </div>
        <!-- 头部下面第二个区域 -->
         <div class="three iconfont iconnew">
        
        </div>

        <!-- 使用vant的表单 -->
    <van-form @submit="onSubmit" class="form"> 
    <van-field
    v-model="form.username"
    name="手机号码"
    placeholder="手机号码"
    :rules="[{ required: true, message: '请填写手机号码' }]"
  />
    <van-field
    v-model="form.password"
    type="password"
    name="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
    <div>
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
  </div>
  </van-form>
    <router-link to="/register">
    <van-button round block class="rive">
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

                // 先暂时登录成功跳转个人中心页
                this.$router.push("/personal");
            })
      }     
    } 
};
</script>

<style lang="less" scoped>
   .benxin {
            position: absolute;
            width: 360px;
            height: 700px;
            background-color:#f2f2f2;
            margin: 100px;

        }

        .one {
            width: 360px;
            height: 25px;
            background-color:#757575;
        }

        .two{
            width: 30px;
            height: 30px;
            margin-left: 20px;
            margin-top: 30px;
            font-size: 25px;
        }

        .three{
            height: 200px;
            text-align: center;
            font-size: 120px;
            color: red;
        }

        .sever{
            position: absolute;
            bottom: 0px;
            width: 360px;
            height: 50px;
            background-color: #000000;
        }
        .form .van-cell{
            width: 320px;
            font-size: 16px;
            padding: 10px 20px;
            margin-bottom: 20px;
        }
        .form .van-cell:not(:last-child)::after{
            border-bottom: 1px solid #333;
            left: 0;
        }
        .form .van-button--info{
            width: 320px;
            margin-top: 30px;
            background-color: #cc3300;
            border: 1px solid #cc3300;
        }
        .rive{
            margin-top: 20px;
            margin-left: -20px;
        }
</style>