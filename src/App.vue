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
      navShow: true,
      stepShow: false
    }
  },
  components: {
    login,
    index,
    noviceSteps
  },
  created () {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-koharu/assets/',
        tagMode: false,
        debug: false,
        model: { jsonPath: '/static/live2dw/live2d-widget-model-koharu/assets/koharu.model.json' },
        display: { position: 'right', width: 150, height: 300 },
        mobile: { show: true },
        log: false
      })
    }, 1000)
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  outline: none;

}
body{
  /*font-family: PingFang-SC-Regular,Helvetica,"Microsoft Yahei","微软雅黑";*/
  font-family: PingFangSC-Regular!important;
  /*overflow: auto;*/
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


/*滚动条样式*/
body::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}

/**
常用css样式
  outline: none;
  -webkit-transition: .5s all;
    background: linear-gradient(45deg, #fff1eb, #ace0f9);
  letter-spacing: 1px;

  //不可被点击
  pointer-events: none;

      this.$set(this,'isMan',false)

 */
</style>
