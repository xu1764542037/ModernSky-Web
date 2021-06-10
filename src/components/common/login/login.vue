<template>
  <div id="login-Register-Box">
    <div id="login-Logo">
      <img src="@/assets/img/logo/logo.png">
    </div>
    <div id="login-Option"  @click="changePullUp">
      <span>选项
        <img v-show="!isPullUp" src="@/assets/img/login/top.svg" height="18px" width="18px;">
      </span>
    </div>
    <div id="login-Options">
      <el-collapse-transition>
        <div v-show="isPullUp">
          <div class="login-Options-Btn" @click="changeLoginPanel">登录</div>
          <div class="login-Options-Btn" @click="changeRegisterPanel">注册</div>
          <div class="login-Options-Btn" @click="changeEditPasswordPanel">找回密码</div>
        </div>
      </el-collapse-transition>
    </div>
    <transition name="el-zoom-in-center">
      <login-panel v-show="loginPanelShow"></login-panel>
    </transition>
    <transition name="el-zoom-in-center">
      <register-panel @registerComplete="changeLoginPanel" v-show="RegisterPanelShow"></register-panel>
    </transition>
    <transition name="el-zoom-in-center">
      <edit-password-panel  v-show="EditPasswordPanelShow"></edit-password-panel>
    </transition>
  </div>
</template>

<script>
import LoginPanel from "@/components/common/login/child/LoginPanel";
import RegisterPanel from "@/components/common/login/child/RegisterPanel";
import EditPasswordPanel from "@/components/common/login/child/EditPasswordPanel";

export default {
  name: "login",
  data() {
    return {
      leftShow: true,
      rightShow: true,
      loginPanelShow: true,
      RegisterPanelShow: false,
      EditPasswordPanelShow: false,
      isPullUp: false
    }
  },
  methods: {
    changePullUp() {
      this.isPullUp = !this.isPullUp
    },
    changeLoginPanel() {
      this.loginPanelShow = true
      this.RegisterPanelShow = false
      this.EditPasswordPanelShow = false
      this.isPullUp = false
    },
    changeRegisterPanel() {
      this.loginPanelShow = false
      this.RegisterPanelShow = true
      this.EditPasswordPanelShow = false
      this.isPullUp = false
    },
    changeEditPasswordPanel() {
      this.loginPanelShow = false
      this.RegisterPanelShow = false
      this.EditPasswordPanelShow = true
      this.isPullUp = false
    }

  },
  components: {
    EditPasswordPanel,
    RegisterPanel,
    LoginPanel
  }
}
</script>

<style scoped>
  #login-Register-Box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../../assets/img/login/bg.jpg") no-repeat fixed center;
    background-size: cover;
  }

  #login-Logo {
    position: absolute;
  }

  #login-Option {
    position: absolute;
    height: 30px;
    width: 70px;
    margin-left: 88%;
    margin-top: 1%;
    font-size: 16px;
    font-weight: 500;
    color: #6E3E0D;
    border-radius: 10px;
    padding-left: 10px;
    padding-top: 5px;
    -webkit-transition: .5s all;

  }

  #login-Option:hover {
    background: rgba(255,255,255,.5);

  }

  #login-Options {
    position: absolute;
    text-align: center;
    margin-left: 88.3%;
    margin-top: 2.5%;
    width: 70px;
    height: 100px;
  }

  .login-Options-Btn {
    color: darkgrey;
    margin-top: 8px;
    -webkit-transition: .5s all;
  }



  .login-Options-Btn:hover {
    color: black;
    background: rgba(255,255,255,.3);
    border-radius: 3px;
  }


  #login-Option img {
    position: absolute;
    margin-left: 10px;
    margin-top: 2px;
  }


</style>