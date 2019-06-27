<template>
  <div class="authorServices">
    <div class="loginBox">
      <div class="loginTitle">账号登录</div>
      <!--<el-form class="form" :rules="rules" :model="userInfo" ref="ruleForm">-->
      <!--<div class="formItem">-->
      <!--<img src="../../../static/img/user.png" alt="">-->
      <!--<el-input v-model="userInfo.user" prop="user" placeholder="请输入您的用户名"/>-->
      <!--</div>-->
      <!--<div class="formItem">-->
      <!--<img src="../../../static/img/password.png" alt="">-->
      <!--<el-input v-model="userInfo.password" prop="password" placeholder="请输入您的密码" type="password"/>-->
      <!--</div>-->
      <!--<div class="rememberPassword">-->
      <!--<el-checkbox></el-checkbox>-->
      <!--<span>记住密码</span>-->
      <!--</div>-->
      <!--</el-form>-->
      <el-form :model="userInfo" :rules="rules" ref="ruleForm" class="form">
        <el-form-item class="formItem" prop="user">
          <img src="../../../static/img/user.png">
          <el-input v-model="userInfo.user" placeholder="请输入您的用户名"></el-input>
        </el-form-item>
        <el-form-item class="formItem" prop="password">
          <img src="../../../static/img/password.png">
          <el-input v-model="userInfo.password" placeholder="请输入您的密码" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox-group class="rememberPassword" v-model="userInfo.remember">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="submit" @click="submitForm('ruleForm')">登录</el-button>
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
        </el-form-item>
      </el-form>
      <!--<div class="submit" @click="submitForm">-->
      <!--登录-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "authorServices",
    data() {
      return {
        userInfo: {
          user: '',
          password: '',
          remember: null,
        },

        rules: {
          user: [
            {required: true, message: '用户名不能为空', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      submitForm() {
        if (this.userInfo.user == '') {
          this.openError('用户名不能为空')
        }
        else if (this.userInfo.password == '') {
          this.openError('密码不能为空')
        } else {
          this.openError('信息错误')
        }
      },
      openError(errMsg) {
        this.$message.error(errMsg);
      }
    }
  }
</script>

<style>
  .form .el-input__inner {
    border-radius: 0;
    height: 32px;
    border: 1px solid #eaeaea;
    padding-left: 24px;
    font-size: 14px;
  }

  .form .el-form-item {
    margin-bottom: 0;
  }

</style>

<style scoped>

  .authorServices {
    background-image: url("../../../static/img/authorServicesBack.jpg");
    width: 100%;
    height: 735px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }

  .loginBox {
    width: 250px;
    height: 304px;
    background-color: #fff;
    position: absolute;
    top: 33%;
    right: 31%;
  }

  .loginTitle {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #06a6ee;
    font-size: 16px;
  }

  .form {
    width: 203px;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 30px;
  }

  .formItem {
    width: 100%;
    position: relative;
    margin-top: 20px;
  }

  .formItem img {
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 14px;
    height: 16px;
  }

  /*.formItem input {*/
  /*!*width: 100%;*!*/
  /*height: 32px;*/
  /*border: 1px solid #eaeaea;*/
  /*padding-left: 24px;*/
  /*font-size: 14px;*/
  /*}*/

  .rememberPassword {
    padding-top: 10px;
  }

  .rememberPassword input {
    background-color: #fff;
    border: 1px solid #c3c3c3;
  }

  .rememberPassword span {
    color: #c3c3c3;
    font-size: 14px;
  }

  .submit {
    width: 203px;
    height: 34px;
    background-color: #06a6ee;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
  }
</style>
