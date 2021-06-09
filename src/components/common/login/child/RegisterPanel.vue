<template>
  <div id="register-Panel">
    <h1 id="register-Title">Register</h1>
    <div id="register-Input">
      <div>
        <input id="register-account-input" type="text" placeholder="account"/>
      </div>
      <div>
        <input id="register-password-input" type="text" placeholder="password"/>
      </div>
      <div>
        <input id="register-email-input" type="text" placeholder="email"/>
      </div>
    </div>
    <div id="register-Button-Box">
      <button id="register-button">REGISTER</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "RegisterPanel"
}
</script>

<style scoped>
#register-Panel {
  position: absolute;
  margin-left: 34.3%;
  margin-top: 1.5%;
  border-radius: 10px;
  height: 700px;
  width: 601px;
  background: rgba(255,255,255,.7);
  text-align: center;
  -webkit-transition: .5s all;
}

#register-Title {
  font-size: 48px;
  position: relative;
  top: 14%;
}

#register-Input input{
  width: 400px;
  height: 30px;
  background: rgba(255,255,255,0);
  outline: none;
  border: 0;
  border-bottom: 3px darkgrey solid;
  font-size: 16px;
}

#register-account-input {
  position: relative;
  margin-top: 150px;
}

#register-password-input {
  margin-top: 60px;

}

#register-email-input {
  margin-top: 60px;
}

#register-Button-Box {
  position: relative;
  margin-top: 97px;
}

#register-button {
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

#register-button:hover {
  border: 1px #CCCCFF solid;
  background: linear-gradient(45deg,#e9defa,#fbfcdb);
}

</style>