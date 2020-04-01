<template>
  <div class="banxin">
   <div class="toubu">
    <span class="iconfont iconnew"></span>
    <router-link to="#" class="toubu1">
       <span class="iconfont iconsearch"></span>
       <i>搜索新闻</i>
    </router-link>
    <router-link to="/personal">
        <span class="toubu2 iconfont iconwode"></span>
    </router-link>

  <!-- tab栏切换 -->
  <!-- v-model就是当前的索引，是唯一的 -->
  <!-- sticky:是否使用粘性布局 -->
  <!-- <van-tabs v-model="active" sticky="">
      <van-tabs v-for="(item,index) in categories" :key="index" :title="'选项'+index">
          内容{{index}}
      </van-tabs> -->
   </div>
 </div>
</template>

<script>
export default {
   data(){
       return{
           categories:['关注','娱乐','体育','汽车','房产','关注','关注','娱乐','体育','汽车','房产','关注','']
       }
   }
}
</script>

<style lang="less" scoped>
 .banxin{
     position: absolute;
     width: 360/360*100vw;
     top: 0px;
     left: 0px;
     height: 20/360*100vw;
     background: #757575;
     padding-top: 25/360*100vw;
 }
 .toubu{
    
    display: flex;
    height: 50/360*100vw;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    background: red;
    color: #ffffff;
 }
 .iconnew{
     display: flex;
     flex: 1;
     font-size: 50/360*100vw;
     padding: 20/360*100vw;
 }
 .toubu1{
     flex: 4;
     width: 220/360*100vw;
     height: 35/360*100vw;
     line-height:40/360*100vw ;
     border-radius: 50px;
     background-color: rgba(242, 242, 242, 0.5);;
     margin-right: 20/360*100vw;
     align-items: center;
 }
 .iconsearch{
     padding-left: 50/360*100vw;
 }
 .toubu1 i{
     padding-left: 5/360*100vw;
 }
 .toubu2{
     padding-right: 20px;
     font-size: 25/360*100vw;
 }
</style>