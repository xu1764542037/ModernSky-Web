<template>
  <div id="MineTitleData">
    <div id="MineTitleData-data"><slot name="data"></slot></div>
    <div id="MineTitleData-name"><slot name="name"></slot></div>
  </div>
</template>

<script>
export default {
  name: "MineTitleData"
}
</script>

<style scoped>
#MineTitleData {
  position: relative;
  height: 100px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  float: left;
  margin-left: 10px;
}

#MineTitleData-data {
  font-size: 30px;
  font-weight: 700;
  color: darkgrey;
}

#MineTitleData-name {
  color: gray;
  margin-top: 10px;
}
</style>