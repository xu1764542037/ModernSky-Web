<template>
  <div id="register-Panel">
    <h1 id="register-Title">欢迎注册</h1>
    <span id="register-have-account">已有账号？
    <span id="register-go-login" @click="goLogin">登录</span></span>
    <div id="register-Input">
      <div id="register-Input-account">
        账<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>号
        <input id="register-account-input" type="text" placeholder="请在此输入账号" v-model="account"/>
      </div>
      <div id="register-Input-password">
        密<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>码
        <input id="register-password-input" type="text" placeholder="请在此输入密码" v-model="password"/>
      </div>
      <div id="register-Input-email">
        邮<span class="nbsp" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"/>箱
        <input id="register-email-input" type="email" placeholder="请在此输入邮箱" v-model="email"/>
      </div>
      <transition name="el-zoom-in-top">
        <div id="register-Input-email-code">
          验证码
          <input id="register-email-code-input" type="text" maxlength="6" placeholder="邮箱验证码" v-model="emailCode"></input>
          <button id="register-send-email" @click="countDown" :disabled="emailCodeBtnDisable">{{codeCount}}</button>
        </div>
      </transition>
    </div>
    <div id="register-Button-Box">
      <button id="register-button" @click="Register">注册</button>
    </div>
    <div id="register-lastChoice">
      <input type="checkbox" id="register-respectCheck"  @click="isChecked($event)">
      <span id="register-respect">
        阅读并接受<span id="register-agreement">《用户协议》</span>
          及
        <span id="register-statement">《隐私权保护声明》</span>
      </span>
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
      emailCodeBtnDisable: false,
      codeCount: "发送",
      account: null,
      password: null,
      email: null,
      emailCode: null,
      responseEmailCode: null,
      isCheck: true,
      dis: true
    }
  },
  methods: {
    countDown() {
      if (this.email === "" || this.email === null) {
        alert("请填写邮箱");
        return
      }else {
        //调用后台发送注册邮件
        sendEmailCheck(this.email).then(res => {
          console.log(res);
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
    },
    goLogin() {
      this.$emit("changeLogin")
    },
    isChecked(e) {
      this.dis = e.target.checked
      console.log(this.dis);
    }
  }
}
</script>

<style scoped>
#register-Panel {
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

#register-Title {
  font-size: 36px;
  margin: 50px 0 22px 39px;
}

#register-have-account {
  position: absolute;
  margin: -19px 0 22px 39px;
  font-size: 14px;
  color: darkgrey;
}

#register-go-login {
  background: rgba(255,255,255,.0);
  color: #2E58FF;
  cursor: pointer;
}

#register-Input {
  font-size: 16px;
  color: #585A58;
}

#register-Input input{
  background: rgba(255, 255, 255, .7);
  height: 35px;
  border: 1px #BDC2CC solid;
  border-radius: 5px;
  margin-left: 10px;
  -webkit-transition: .5s all;
  outline: none;
}

#register-Input input:hover {
  border: 1.5px #2E58FF solid;

}

#register-Input-account,#register-Input-password,#register-Input-email,#register-Input-email-code {
  margin-left: 30px;
}


#register-account-input {
  position: relative;
  margin-top: 50px;
  width: 337px;
}

#register-password-input {
  margin-top: 55px;
  width: 337px;
}

#register-email-input {
  margin-top: 55px;
  width: 337px;
}

#register-email-code-input {
  margin-top: 55px;
  width: 150px;
}

#register-send-email {
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

#register-send-email:hover {
  background: #A8CAF4;
}


#register-button {
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

#register-button:hover {
  background: #3f89ec;
}


#register-lastChoice {
  position: absolute;
  background: rgba(255,255,255,.0);
  margin-left: 110px;
  margin-top: 110px;
}

#register-lastChoice #register-respect {
  background: rgba(255,255,255,.0);
  font-size: 12px;
}

#register-lastChoice #register-respect #register-agreement {
  background: rgba(255,255,255,.0);
  color: #2E58FF;
  cursor: pointer;
}

#register-lastChoice #register-respect #register-statement {
  background: rgba(255,255,255,.0);
  color: #2E58FF;
  cursor: pointer;
}

</style>