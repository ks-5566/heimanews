<template>
   <div class="banxin">
       <!-- 头部 -->
      <div class="one">
           <!-- 头像 -->
        <div class="two">
            <img src="https://baidu.com/img/bd_logo1.png" alt="">
        </div>
           <!-- 姓名 -->
            <div class="three iconfont iconxingbienan">
              <span>火星网有</span>
              <p>2019-10-10</p>
            </div>
            <span class="fore iconfont iconjiantou1"></span>
       </div>
       <!-- 灰色分割线 -->
       <div class="five">

       </div>
       <div class="cove">
           <span>我的关注</span>
           <span>关注的用户</span>
       </div>
   </div>
    
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
   .banxin{
       width: 360px;
       height: 700px;
       background-color:#f2f2f2;
   }
   .one{
       width: 360px;
       height: 25px;
       background-color:#757575;
   }
   .two img{
     float: left;
     width: 70px;
     height: 70px;
     border-radius: 50%;
     object-fit:contain ;
     padding: 20px;
   }
   .three{
       float: left;
       padding: 40px 2px;
       font-size: 14px;
   }
   .three p{
       color: rgba(148, 148,148, 0.87);
   }
   .five{
       float: left;
       width: 360px;
       height: 5px;
       background: #E4E4E4;
   }
   .cove{
       float: left;
   }
</style>