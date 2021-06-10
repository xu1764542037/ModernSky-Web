<template>
  <div id="login-Panel">
    <h1 id="login-Title">欢迎登陆</h1>
    <span id="login-no-account">没有账号？
      <span id="login-go-register" @click="goRegister">注册</span></span>
    <div id="login-Input">
      <div id="login-Input-account">
         账<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>号
        <input id="login-account-input" type="text" placeholder="请输入账号" v-model="account" @keyup.enter="Login"/>
      </div>
      <div id="login-Input-password">
        密<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>码
        <input id="login-password-input" type="password" placeholder="请输入密码" v-model="password" @keyup.enter="Login"/>
      </div>
      <div id="login-Input-checkCode">
        验证码
        <input id="login-checkCode-input" type="password" placeholder="请输入验证码" v-model="checkCode" @keyup.enter="Login"/>
      </div>
    </div>
    <div id="login-Button-Box">
      <button id="login-button" @click="Login">登录</button>
    </div>
    <div>
      <p id="login-Button-forget" @click="goEdit">忘记密码？</p>
    </div>
  </div>
</template>

<script>
import {login} from "@/network/login/login";

export default {
  name: "LoginPanel",
  data() {
    return {
      account: null,
      password: null,
      checkCode: null
    }
  },
  methods: {
    Login() {
      login(this.account,this.password).then(res => {
        // console.log(res);
        if (res.obj != null) {
          alert("登录成功")
          this.$router.push({path: "/index"})
        }else {
          alert("账号密码错误，请重新输入")
        }
      }).catch(reason => {
          alert("系统发生错误，请联系管理员")
      })
    },
    goRegister() {
      this.$emit("changeRegister")
    },
    goEdit() {
      this.$emit("changeEdit")
    }
  }
}
</script>

<style scoped>
/**
整个login面板
 */
#login-Panel {
  position: absolute;
  margin-top: -400px;
  top: 50%;
  right: 139px;
  border-radius: 10px;
  width: 480px;
  height: 680px;
  background: rgba(255,255,255,.7);
  /*text-align: center;*/
  -webkit-transition: .5s all;
}

#login-Title {
  font-size: 36px;
  margin: 50px 0 22px 39px;

}

#login-no-account {
  position: absolute;
  margin: -19px 0 22px 39px;
  font-size: 14px;
  color: darkgrey;
}

#login-go-register {
  background: rgba(255,255,255,.0);
  color: #2E58FF;
  cursor: pointer;
}

#login-Input {
  /*color: darkgrey;*/
  font-size: 16px;
  color: #585A58;
}

#login-Input input {
  background: rgba(255, 255, 255, .7);
  height: 35px;
  border: 1px #BDC2CC solid;
  border-radius: 5px;
  margin-left: 10px;
  -webkit-transition: .5s all;
  outline: none;
}


#login-Input input:hover {
  border: 1.5px #2E58FF solid;
}

#login-Input-account,#login-Input-password,#login-Input-checkCode {
  margin-left: 30px;
}

#login-account-input {
  position: relative;
  margin-top: 80px;
  width: 337px;
}

#login-password-input {
  margin-top: 70px;
  width: 337px;
}

#login-checkCode-input {
  margin-top: 70px;
  width: 150px;
}

#login-Input-checkCode {
  letter-spacing: 1px;
}

#login-button {
  position: absolute;
  width: 390px;
  height: 50px;
  border-radius: 25px;
  border: 0;
  background: #BDCEFC;
  color: #fefefe;
  font-size: 18px;
  outline: none;
  -webkit-transition: .5s all;
  bottom: 100px;
  margin-left: 45px;
}

#login-button:hover {
  background: #3f89ec;
}

#login-Button-forget {
  position: absolute;
  background: rgba(255,255,255,.0);
  padding-left: 45px;
  padding-top: 140px;
  color: #2E82FF;
  cursor: pointer;
}


</style>