<template>
  <div id="app">
    <el-header style="height: 80px;padding: 0">
      <v-header></v-header>
    </el-header>
    <el-container>
      <router-view/>
    </el-container>
    <el-footer style="height: 265px;padding: 0">
      <v-footer></v-footer>
    </el-footer>
  </div>
</template>

<script>
  import vHeader from './components/common/header'
  import vFooter from './components/common/footer'

  export default {
    name: 'App',
    components: {
      vHeader, vFooter
    }
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  body {
    margin: 0;
    color: #333;
    font-family: "Microsoft YaHei";
  }
  html
  ,body{
    min-width: 1200px;
    /*overflow-x: hidden;*/
    /*padding-right: 0!important;*/
  }

  p{
    margin: 0;
    padding: 0;
  }

  img{
    width: 100%;
  }

  .app .el-header {
    padding: 0;
  }

  .app .el-footer {
    padding: 0 !important;
  }
</style>
