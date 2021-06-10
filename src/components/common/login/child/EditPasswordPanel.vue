<template>
  <div id="edit-Password-Panel">
    <h1 id="edit-Title">Edit</h1>
    <div id="edit-Input">
      <div>
        <input id="edit-password-input" type="text" placeholder="password" v-model="password"/>
      </div>
      <div>
        <input id="edit-password-repeat-input" type="text" placeholder="again" v-model="password"/>
      </div>
      <div>
        <input id="edit-email-input" type="email" @click="showEmailCodeBtn" placeholder="email" v-model="email"/>
      </div>
      <transition name="el-zoom-in-top">
        <div v-show="emailCodeBtn">
          <input id="edit-email-code-input" type="text" maxlength="6" placeholder="Email Code" v-model="emailCode"></input>
          <button id="edit-send-email" @click="countDown" :disabled="emailCodeBtnDisable">{{codeCount}}</button>
        </div>
      </transition>
    </div>
    <div id="edit-Button-Box">
      <button id="edit-button" @click="register">Edit</button>
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
      emailCodeBtnDisable: false,
      codeCount: "SEND",
      account: null,
      password: null,
      email: null,
      emailCode: null,
      responseEmailCode: null
    }
  },

  methods: {
    showEmailCodeBtn() {
      this.emailCodeBtn = true
    },
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
  margin-left: 37%;
  margin-top: 3%;
  border-radius: 10px;
  height: 700px;
  width: 501px;
  background: rgba(255,255,255,.7);
  text-align: center;
  -webkit-transition: .5s all;
}

#edit-Title {
  font-size: 48px;
  position: relative;
  top: 10%;
}

#edit-Input input{
  height: 30px;
  background: rgba(255,255,255,0);
  outline: none;
  border: 0;
  border-bottom: 3px darkgrey solid;
  font-size: 16px;
}

#edit-password-input {
  width: 350px;
  position: relative;
  margin-top: 150px;
}

#edit-password-repeat-input {
  width: 350px;
  margin-top: 60px;
}

#edit-email-input {
  width: 350px;
  margin-top: 60px;
}

#edit-email-code-input {
  width: 100px;
  margin-top: 60px;
}

#edit-send-email {
  width: 150px;
  height: 40px;
  margin-left: 100px;
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

#edit-Button-Box {
  position: relative;
  margin-top: 97px;
}

#edit-button {
  width: 360px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(45deg, #fff1eb, #ace0f9);
  color: white;
  font-size: 16px;
  font-weight: 600;
  -webkit-transition: .5s all;
  cursor: pointer;
}

#edit-button:hover {
  border: 1px #CCCCFF solid;
  background: linear-gradient(45deg,#e9defa,#fbfcdb);
}



</style>