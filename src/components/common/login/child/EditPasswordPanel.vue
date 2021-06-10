<template>
  <div id="edit-Password-Panel">
    <h1 id="edit-Title">重置密码</h1>
    <div id="edit-Input">
      <div id="edit-Input-password">
        密<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>码
        <input id="edit-password-input" type="text" placeholder="在此输入密码" v-model="password"/>
      </div>
      <div id="edit-Input-password-repeat">
        请确认
        <input id="edit-password-repeat-input" type="text" placeholder="确认密码" v-model="password"/>
      </div>
      <div id="edit-Input-email">
        邮<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>箱
        <input id="edit-email-input" type="email" placeholder="在此输入邮箱" v-model="email"/>
      </div>
      <transition name="el-zoom-in-top">
        <div id="edit-Input-email-code">
          验证码
          <input id="edit-email-code-input" type="text" maxlength="6" placeholder="验证码" v-model="emailCode"></input>
          <button id="edit-send-email" @click="countDown" :disabled="emailCodeBtnDisable">{{codeCount}}</button>
        </div>
      </transition>
    </div>
    <div id="edit-Button-Box">
      <button id="edit-button" @click="register">修改</button>
    </div>
  </div>
</template>

<script>
import {sendEmailCheck} from "@/network/login/register";

export default {
  name: "EditPasswordPanel",
  data() {
    return {
      emailCodeBtn: false,
      codeCount: "发送",
      account: null,
      password: null,
      email: null,
      emailCode: null,
      responseEmailCode: null,
      emailCodeBtnDisable: false
    }
  },

  methods: {
    countDown() {
      if (this.email === "" || this.email === null) {
        alert("请填写邮箱");
        return
      }else {
        sendEmailCheck(this.email).then(res => {
          this.responseEmailCode = res.data
        })
        this.codeCount = 60
        setInterval(() => {
          if (this.codeCount > 0 ){
            this.codeCount--
            this.emailCodeBtnDisable = true
          }else {
            this.codeCount = "重新发送"
            this.emailCodeBtnDisable = false
          }
        },1000)
      }
    },
    register() {
      console.log(this.responseEmailCode);
      console.log(this.emailCode);
      if (this.responseEmailCode !== this.emailCode) {
        alert("验证码输出错误")
      }else {
        alert("注册成功")
        this.emailCodeBtn = false
      }
    }
  }
}
</script>

<style scoped>
#edit-Password-Panel {
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

#edit-Title {
  font-size: 36px;
  margin: 50px 0 22px 39px;
}

#edit-Input {
  font-size: 16px;
  color: #585A58;
}

#edit-Input input{
  background: rgba(255, 255, 255, .7);
  height: 35px;
  border: 1px #BDC2CC solid;
  border-radius: 5px;
  margin-left: 10px;
  -webkit-transition: .5s all;
  outline: none;
}

#edit-Input input:hover {
  border: 1.5px #2E58FF solid;
}

#edit-Input-password,#edit-Input-password-repeat,#edit-Input-email,#edit-Input-email-code {
  margin-left: 30px;
}

#edit-password-input {
  position: relative;
  margin-top: 50px;
  width: 337px;
}

#edit-password-repeat-input {
  margin-top: 55px;
  width: 337px;
}

#edit-email-input {
  margin-top: 55px;
  width: 337px;
}

#edit-email-code-input {
  margin-top: 55px;
  width: 150px;
}

#edit-send-email {
  width: 140px;
  height: 40px;
  margin-left: 50px;
  border: 0;
  border-radius: 5px;
  outline: none;
  background: rgba(255,255,255,.5);
  color: darkgrey;
  -webkit-transition: .5s all;
}

#edit-send-email:hover {
  background: #A8CAF4;
}

#edit-Input-email-code,#edit-Input-password-repeat {
  letter-spacing: 1px;
}

#edit-button {
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
  /*margin-top: 50px;*/
  bottom: 100px;
  margin-left: 45px;
}

#edit-button:hover {
  background: #3f89ec;

}



</style>