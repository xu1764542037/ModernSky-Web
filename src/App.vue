<template>
  <div id="app">
<!--    <login></login>-->
    <index v-show="navShow"></index>
<!--    <novice-steps v-show="stepShow"></novice-steps>-->
    <router-view></router-view>
  </div>
</template>

<script>
import login from "@/components/common/login/login";
import index from "@/components/common/index/Index"
import noviceSteps from "@/components/common/noviceSteps/noviceSteps";

export default {
  name: 'App',
  data() {
    return {
      navShow: false,
      stepShow: false
    }
  },
  components: {
    login,
    index,
    noviceSteps
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: PingFang-SC-Regular,Helvetica,"Microsoft Yahei","微软雅黑";
  overflow: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


input{
  padding-left: 5px;
}

/**
常用css样式
  outline: none;
  -webkit-transition: .5s all;
    background: linear-gradient(45deg, #fff1eb, #ace0f9);
  letter-spacing: 1px;

 */
</style>
