<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  padding-left: 8px;
}

/**
常用css样式
  outline: none;
  -webkit-transition: .5s all;
    background: linear-gradient(45deg, #fff1eb, #ace0f9);

 */
</style>
