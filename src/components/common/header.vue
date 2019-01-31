<template>
  <div class="header">
    <div>
      <img src="../../../static/img/logo.png" alt="logo">
    </div>
    <div class="nav">
      <router-link to="/index" class="navItem">首页</router-link>
      <router-link to="/industryHighers" class="navItem">行业大咖</router-link>
      <router-link to="/downloadAPP" class="navItem">APP下载</router-link>
      <router-link to="/authorServices" class="navItem">大咖服务</router-link>
      <!--<div :class="['navItem',active=='1' ? 'active' : '']" @click="jumpToIndex" >首页</div>
      <div :class="['navItem',active=='2' ? 'active' : '']" @click="jumpToIndustryHighers" >行业大咖</div>
      <div :class="['navItem',active=='3' ? 'active' : '']" @click="jumpToDownloadAPP" >APP下载</div>
      <div :class="['navItem',active=='4' ? 'active' : '']" @click="jumpToAuthorServices" >大咖服务</div>
      <span v-if="active==1" class="activeSpan index"></span>
      <span v-if="active==2" class="activeSpan industryHighers"></span>
      <span v-if="active==3" class="activeSpan downloadAPP"></span>
      <span v-if="active==4" class="activeSpan authorServices"></span>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "vheader",
    data(){
      return{
        active: '1'
      }
    },
    methods:{
      //跳转到首页
      jumpToIndex(){
        this.active=1;
        this.$router.push(
          {
            path:'/index',
            name:'index'
          }
        )
      },
      //跳转到行业大咖
      jumpToIndustryHighers(){
        this.active=2;
        this.$router.push(
          {
            path:'/industryHighers',
            name:'industryHighers'
          }
        )
      },
      //跳转到APP下载
      jumpToDownloadAPP(){
        this.active=3;
        this.$router.push(
          {
            path:'/downloadAPP',
            name:'downloadAPP'
          }
        )
      },
      //跳转到大咖服务
      jumpToAuthorServices(){
        this.active=4;
        this.$router.push(
          {
            path:'/authorServices',
            name:'authorServices'
          }
        )
      }

    }
  }
</script>
<style>
  .navItem{
    display: inline-block;
    font-size: 16px;
    color: #333;
    text-decoration: none;
    margin-left: 30px;
    position: relative;

  }
  .navItem.router-link-active{
    color: #06a6ee;
  }
  .navItem.router-link-active:after{
    content: '';
    display: block;
    background-color: #06a6ee;
    width: 50%;
    height: 2px;
    position: absolute;
    top: 140%;
    left: 25%;
    /*margin-left: -7px;*/
  }
</style>
<style scoped>



  .header {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    float: right;
    position: relative;
  }





  .navItem:hover{
    color: #06a6ee;
  }


  .active{
    color: #06a6ee;
  }

  .activeSpan{
    background-color: #06a6ee;
    width: 14px;
    height: 2px;
    position: absolute;
    top: 140%;
  }

  .index{
    left: 11%;
  }

  .industryHighers{
    left: 35%;
  }

  .downloadAPP{
    left: 62%;
  }

  .authorServices{
    left: 89%;
  }


</style>
