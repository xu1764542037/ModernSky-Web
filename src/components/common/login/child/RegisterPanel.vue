<template>
  <div id="register-Panel">
    <h1 id="register-Title">Register</h1>
    <div id="register-Input">
      <div>
        <input id="register-account-input" type="text" placeholder="account" v-model="account"/>
      </div>
      <div>
        <input id="register-password-input" type="text" placeholder="password" v-model="password"/>
      </div>
      <div>
        <input id="register-email-input" type="email" @click="showEmailCodeBtn" placeholder="email" v-model="email"/>
      </div>
      <transition name="el-zoom-in-top">
        <div v-show="emailCodeBtn">
          <input id="register-email-code-input" type="text" maxlength="6" placeholder="Email Code" v-model="emailCode"></input>
          <button id="register-send-email" @click="countDown" :disabled="emailCodeBtnDisable">{{codeCount}}</button>
        </div>
      </transition>
    </div>
    <div id="register-Button-Box">
      <button id="register-button" @click="Register">REGISTER</button>
    </div>
  </div>

</template>

<script>
import {sendEmailCheck} from "@/network/login/register";
import {register} from "@/network/login/register";
import {selectId} from "@/network/login/register";


export default {
  name: "RegisterPanel",
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
        //调用后台发送注册邮件
        sendEmailCheck(this.email).then(res => {
          this.responseEmailCode = res.data
        }).catch( reason => {
          alert("系统错误，请联系管理员")
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
    Register() {
      if (this.responseEmailCode !== this.emailCode) {
        alert("验证码输出错误")
      }else {
        //判断账号是否存在
        selectId(this.account).then(res => {
          if (res.obj == null) {
            //调用后天添加方法
            register(this.account,this.password,this.email).then(res => {
              if (res.obj != null) {
                alert("注册成功")
                this.account = ""
                this.password = ""
                this.email = ""
                this.emailCode = ""
                this.emailCodeBtn = false
                //调用方法给父组件打招呼
                this.$emit("registerComplete");
              }else {
                alert("注册失败，请重新输入")
              }
            }).catch(reason => {
              alert("系统错误，请联系管理员")
            })
          }else {
            alert("账号已被注册，请重新输入")
          }
        }).catch( reason => {
          alert("系统错误，请联系管理员")
        })
      }
    }
  }
}
</script>

<style scoped>
#register-Panel {
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

#register-Title {
  font-size: 48px;
  position: relative;
  top: 10%;
}

#register-Input input{
  height: 30px;
  background: rgba(255,255,255,0);
  outline: none;
  border: 0;
  border-bottom: 3px darkgrey solid;
  font-size: 16px;
}

#register-account-input {
  width: 350px;
  position: relative;
  margin-top: 150px;
}

#register-password-input {
  width: 350px;
  margin-top: 60px;
}

#register-email-input {
  width: 350px;
  margin-top: 60px;
}

#register-email-code-input {
  width: 100px;
  margin-top: 60px;
}

#register-send-email {
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

#register-send-email:hover {
  background: #A8CAF4;
}

#register-Button-Box {
  position: relative;
  margin-top: 97px;
}

#register-button {
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

#register-button:hover {
  border: 1px #CCCCFF solid;
  background: linear-gradient(45deg,#e9defa,#fbfcdb);
}

</style>