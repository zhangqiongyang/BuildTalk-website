<template>
  <div class="index">
    <div class="index_banner">
      <img src="../../../static/img/banner.png" alt="">
    </div>
    <div class="index_feature">
      <img src="../../../static/img/index1.png" alt="">
      <img src="../../../static/img/index2.png" alt="">
      <img src="../../../static/img/index3.png" alt="">
    </div>
    <div class="index_news">
      <div class="newsBox">
        <p class="tanxiaojian">谭小建</p>
        <p class="tanxiaojianInfo">每天小建与你一起了解最新最热建筑动态，探讨建筑产业态势。</p>

        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in newsinfo" :key="item.article_id" autoplay="true">
            <div class="newsItem">
              <p class="newsTitle">{{item.article_title}}</p>
              <p class="newsCon">{{item.article_desc}}</p>
              <span class="look" @click="dialogVisible= true">查看详情</span>
            </div>
          </el-carousel-item>
        </el-carousel>

      </div>
    </div>
    <div class="index_bigData">
      <img src="../../../static/img/dashuju.png" alt="">
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请到微信小程序查看新闻详情</span>
        <img class="dialog_img" src="../../../static/img/xiaochengxu.png" alt="">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getIndexNewsInfo} from '../../api'

  export default {
    name: "index",
    data() {
      return {
        newsinfo: null,
        dialogVisible: false
      }
    },
    created() {
      this.getIndexNews()
    },
    methods: {
      //获取首页新闻接口
      getIndexNews() {
        getIndexNewsInfo()
          .then(res => {
            console.log('-----------获取到首页新闻信息了---------------');
            console.log(res);
            this.newsinfo = res.data.newsinfo
          })
      },
      //跳转到新闻详情页
      jumpToNews() {

      }
    }
  }
</script>

<style scoped>

  .index {
    width: 100%;
  }

  .index_banner img {
    width: 100%;
  }

  .index_feature {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 70px auto 0 auto;
  }

  .index_feature img{
    padding: 0 auto;
    width: 380px;
  }

  .index_news {
    background-image: url("../../../static/img/tanxiaojian.png");
    height: 410px;
    width: 100%;
    margin-top: 30px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }

  .newsBox {
    width: 750px;
    height: 260px;
    /*position: absolute;*/
    /*top: 22%;*/
    /*right: 23%;*/
    margin: 0 auto;
    padding-left: 295px;
    padding-top: 107px;
  }

  .index_bigData {
    margin-top: 58px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .tanxiaojian {
    font-size: 36px;
    color: #333;
    font-weight: bold;
  }

  .tanxiaojianInfo {
    color: #666;
    font-size: 16px;
  }

  .newsItem {
    padding-top: 44px;
  }

  .newsTitle {
    font-weight: bold;
    font-size: 22px;
  }

  .newsCon {
    font-size: 14px;
    color: #666;
    padding-top: 20px;
    display: -webkit-box;
    line-height: 24px;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .look {
    padding-top: 20px;
    font-size: 16px;
    color: #3fa9f5;
    float: right;
    text-decoration: none;
  }

  .dialog_img {
    display: block;
    margin: 0 auto;
    width: 98px;
    height: 98px;
  }
</style>
