<template>
  <div id="MineInfo">
    <div id="MineInfo-createTime">
      <img src="@/assets/img/mine/birthday.svg">
      于  {{$store.state.userCreateDate}}  加入社区
    </div>
    <div id="MineInfo-navbar">

    </div>
  </div>
</template>

<script>
export default {
  name: "MineInfo",

}
</script>

<style scoped>
#MineInfo {
  position: absolute;
  width: 99.8%;
  height: 69.5%;
  /*border: 1px red solid;*/
  margin-top: 20%;
  margin-left: 0.1%;
}

#MineInfo-createTime {
  height: 50px;
  width: 300px;
  margin-left: 7%;
  background: #A3B7EB;
  line-height: 50px;
  text-align: center;
}


</style>