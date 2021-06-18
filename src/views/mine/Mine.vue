<template>
  <div id="mine">
    <div id="mine-context">
      <mine-title></mine-title>
      <mine-info></mine-info>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MineTitle from "@/views/mine/child/MineTitle";
import MineInfo from "@/views/mine/child/MineInfo";


export default {
  name: "Mine",
  components: {
    MineTitle,
    MineInfo
  }
}
</script>

<style scoped>
#mine {
  position: fixed;
  margin-top: 1.5%;
  width: 100%;
  height: 100%;
  /*background-color: #F6F6F6;*/
  background-image: linear-gradient( 125deg,#a8edea, #fed6e3);
}

#mine-context {
  position: absolute;
  width: 100%;
  height: 95%;
  background-image: linear-gradient( 0deg, #c9d6ff, #e2e2e2);

  margin-top: 1%;
  overflow: auto;
  box-shadow: 0 1px 10px #888888;;
}


/*滚动条样式*/
#mine-context::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
#mine-context::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
#mine-context::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}
</style>