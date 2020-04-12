<template>
<div class="benxin">
    <div class="one ">
       <span class="iconfont iconicon-test"></span>
    </div>
    <div class="three">
         <span class="iconfont iconnew"></span>
    </div>

        <!-- 使用vant的表单 -->
    <van-form @submit="onSubmit" class="form"> 
    <van-field
    v-model="form.username"
    name="手机号码"
    placeholder="手机号码"
    :rules="[{ required: true, message: '请填写手机号码' }]"
  />
  <!-- 昵称的输入框 -->
    <van-field
     v-model="form.nickname"
     name="昵称"
    placeholder="请输入昵称"
    :rules="[{ required: true, message: '请填写昵称' }]"
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
      注册
    </van-button>
  </div>
  </van-form>
    <router-link to="/login">
    <van-button round block class="rive">
      登录
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
         nickname:"",
        }
      }
    },
    methods:{
    // 这里的values是给我们自己看的
    onSubmit(values) {
    //   console.log('submit', this.form);
            this.$axios({
                // 接口地址
                url:"/registe",
                // 请求方式
                method:"POST",
                // 参数
                data:this.form
            }).then(res=>{
              // 获取到返回的信息
                const {message}=res.data;
                // 使用vant的弹窗提示用，success表示成功的弹窗
                this.$toast.success(message);
            })
      }     
    } 
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