<template>
  <div id="login-Panel">
    <h1 id="login-Title">Login</h1>
    <div id="login-Input">
      <div>
         <input id="login-account-input" type="text" placeholder="account" v-model="account"/>
      </div>
      <div>
        <input id="login-password-input" type="password" placeholder="password" v-model="password"/>
      </div>
    </div>
    <div id="login-Button-Box">
      <button id="login-button">LOGIN</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPanel",
  data() {
    return {
      account: null,
      password: null,
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
  margin-left: 34.3%;
  margin-top: 2%;
  border-radius: 10px;
  height: 700px;
  width: 601px;
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
  top: 14%;
}

/**
login面板内的输入框
 */
#login-Input input {
  width: 400px;
  height: 30px;
  background: rgba(255,255,255,0);
  outline: none;
  border: 0;
  border-bottom: 3px darkgrey solid;
  font-size: 16px;
}


#login-account-input {
  position: relative;
  margin-top: 200px;
}

#login-password-input {
  margin-top: 100px;
}

#login-Button-Box {
  position: relative;
  margin-top: 100px;
}

#login-button {
  width: 410px;
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