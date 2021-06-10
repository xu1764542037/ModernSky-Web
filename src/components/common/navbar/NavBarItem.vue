<template>
  <div id="NavBatItem">
    <div id="nav-bar-item"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBatItem"
}
</script>

<style scoped>
#NavBatItem {
  position: relative;
  height: 100%;
  width: 24%;
  line-height: 45px;
  text-align: center;
  float: left;
  -webkit-transition: .5s all;
}

#NavBatItem:hover {
  background: #F0F0F5;
  border-bottom: 1px #0F0F0A solid;
}
</style>