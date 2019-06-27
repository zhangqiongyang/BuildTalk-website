<template>
  <div class="footer">
    <div class="footerBox">
      <div style="margin: 0 auto;width: 1076px">
        <div class="footer_left">
          <div class="titleBox">
            <img src="../../../static/img/footer_logo.png" alt="">
            <p>聊建筑，上建谈</p>
          </div>
          <p class="left_text">客服电话：010-50960100</p>
          <p class="left_text">邮箱：market@51jiantan.com</p>
          <p class="left_text">地址：北京市丰台区马家堡东路156号院5号楼</p>
        </div>
        <div class="footer_right">
          <div class="titleBox titleBoxRight">
            <img src="../../../static/img/gongzhonghao.png" alt="">
            <p>微信扫码 关注【建谈】公众号</p>
          </div>
          <p class="left_text">京ICP证160296号 京ICP备14035595号-7</p>
          <p class="left_text">CopyRight ©2008-2018 建谈(www.51jiantan.com). All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vfooter"
  }
</script>

<style scoped>

  .footer {
    background-color: #f0f0f0;
    width: 100%;
    height: 265px;
  }

  .footerBox {
    padding-top: 50px;
    width: 1200px;
    margin: 0 auto;
  }

  .footer_left {
    /*float: left;*/
    width: 552px;
    display: inline-block;
    border-right: 1px solid #c2c2c2;
  }

  .titleBox {
    display: flex;
    align-items: center;
    /*width: 552px;*/
    padding-bottom: 24px;
  }

  .titleBox img {
    width: 78px;
    height: 78px;
  }

  .titleBox p {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding-left: 30px;
  }

  .left_text {
    font-size: 14px;
    line-height: 24px;
  }

  .footer_right {
    /*float: left;*/
    display: inline-block;
    padding-left: 50px;
  }

  .titleBoxRight {
    padding-bottom: 27px;
  }

  .titleBoxRight img {
    width: 98px;
    height: 98px;
  }
</style>
