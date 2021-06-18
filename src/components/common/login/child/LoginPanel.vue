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
        <div id="login-Code-Box" @click="newCode">{{loginCode}}</div>
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
import {login, selectStudent, selectTeacher, getCode} from "@/network/login/login";

export default {
  name: "LoginPanel",
  data() {
    return {
      account: null,
      password: null,
      checkCode: null,
      //登陆验证码
      loginCode: null
    }
  },
  methods: {
    Login() {
      if (this.checkCode != this.loginCode) {
        alert("验证码错误，请重新输入")
      } else {
        login(this.account,this.password).then(res => {
          // console.log(res);
          if (res.obj != null) {
            this.$parent.navShow = true
            this.$store.commit('addUserInfo',res.obj[0]);
            // alert("登录成功")
            if (res.obj[0].name == null) {
              this.$router.push({path: "/noviceSteps"})
            }else {
              selectStudent(this.account).then(res => {
                if (res.obj != null) {
                  this.$store.commit('addStudentInfo',res.obj[0])
                }else {
                  selectTeacher(this.account).then(res => {
                    if (res.obj != null) {
                      this.$store.commit('addTeacherInfo',res.obj[0])
                    }
                  })
                }
              })
              this.$router.push({path: "/index"})
            }
          }else {
            alert("账号密码错误，请重新输入")
          }
        })
      }
    },
    goRegister() {
      this.$emit("changeRegister")
    },
    goEdit() {
      this.$emit("changeEdit")
    },
    newCode() {
      getCode().then( res => {
        this.loginCode = res
      })
    }
  },
  beforeCreate() {
    getCode().then( res => {
      this.loginCode = res
    })
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

#login-Code-Box {
  position: absolute;
  margin-top: -36px;
  margin-left: 300px;
  width: 100px;
  height: 35px;
  border: 1px black solid;
  /*background: darkgrey;*/
  background: rgba(0,0,0,.2);
  float: left;
  letter-spacing: 2.5px;
  text-align: center;
  font-size: 30px;
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