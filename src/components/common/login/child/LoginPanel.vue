<template>
  <div id="login-Panel">
    <h1 id="login-Title">Login</h1>
    <div id="login-Input">
      <div>
         <input id="login-account-input" type="text" placeholder="account" v-model="account" @keyup.enter="Login"/>
      </div>
      <div>
        <input id="login-password-input" type="password" placeholder="password" v-model="password" @keyup.enter="Login"/>
      </div>
    </div>
    <div id="login-Button-Box">
      <button id="login-button" @click="Login">LOGIN</button>
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
    }
  },
  methods: {
    Login() {
      login(this.account,this.password).then(res => {
        // console.log(res);
        if (res.obj != null) {
          alert("登录成功")
        }else {
          alert("账号密码错误，请重新输入")
        }
      }).catch(reason => {
          alert("系统发生错误，请联系管理员")
      })
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
  margin-left: 37%;
  margin-top: 3%;
  border-radius: 10px;
  height: 700px;
  width: 501px;
  background: rgba(255,255,255,.7);
  text-align: center;
  -webkit-transition: .5s all;
}

#login-Panel:hover {
  /*box-shadow: 0 0 10px 1px rgba(0,0,0,.5);*/
  /*box-shadow: 0 0 5px 1px rgba(255,255,255,.5);*/
  /*margin-top: 2.95%;*/
}

/**
login面板标题
 */
#login-Title {
  font-size: 48px;
  position: relative;
  top: 10%;
}

/**
login面板内的输入框
 */
#login-Input input {
  width: 350px;
  height: 30px;
  background: rgba(255,255,255,0);
  outline: none;
  border: 0;
  border-bottom: 3px darkgrey solid;
  font-size: 16px;
}


#login-account-input {
  position: relative;
  margin-top: 170px;
}

#login-password-input {
  margin-top: 110px;
}

#login-Button-Box {
  position: relative;
  margin-top: 120px;
}

#login-button {
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

#login-button:hover {
  border: 1px #CCCCFF solid;
  background: linear-gradient(45deg,#e9defa,#fbfcdb);
}



</style>