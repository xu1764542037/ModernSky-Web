<template>
  <div id="login-Register-Box">
    <div id="login-Logo">
      <img src="@/assets/img/logo/logo.png" height="75" width="240">
    </div>
    <transition name="el-fade-in-linear">
      <login-panel @changeRegister="changeRegisterPanel" @changeEdit="changeEditPasswordPanel" v-show="loginPanelShow"></login-panel>
    </transition>
    <transition name="el-fade-in-linear">
      <register-panel @changeLogin="changeLoginPanel" v-show="RegisterPanelShow"></register-panel>
    </transition>
    <transition name="el-fade-in-linear">
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
    background: url("../../../assets/img/login/loginBg.jpg") no-repeat fixed center;
    background-size: cover;

    z-index: -3;
  }

  #login-Logo {
    position: absolute;
  }



  #login-Option img {
    position: absolute;
    margin-left: 10px;
    margin-top: 2px;
  }


</style>