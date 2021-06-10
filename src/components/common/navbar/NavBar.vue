<template>
  <div id="NavBar">
    <div id="logo"><slot name="logo"></slot></div>
    <div id="button"><slot name="button"></slot></div>
    <div id="search"><slot name="searchBar"></slot></div>
    <div id="headP"><slot name="headP"></slot></div>
    <div id="function"><slot name="function"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
#NavBar {
  position: fixed;
  /*border: 1px black solid;*/
  width: 100%;
  height: 5%;
  box-shadow: 0 1px 5px #888888;;
  background: #ffffff;
}

#logo {
  position: absolute;
  margin-left: 20px;
  z-index: 999;
}

#button {
  position: relative;
  height: 100%;
  width: 22%;
  margin-left: 10%;
  /*border: 1px red solid;*/
  float: left;

}

#search{
  position: relative;
  height: 100%;
  width: 26%;
  margin-left: 8%;
  float: left;
}

#headP {
  position: absolute;
  margin-left: 76.5%;
  margin-top: .3%;
}

#function {
  position: relative;
  height: 100%;
  width: 20%;
  margin-left: 13.5%;
  float: left;
}

</style>