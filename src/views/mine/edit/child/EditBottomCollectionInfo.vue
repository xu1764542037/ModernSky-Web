<template>
  <div id="EditBottomCollectionInfo">
    <div id="EditBottomCollectionInfo-title">
      我的收藏
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "EditBottomCollectionInfo"
}
</script>

<style scoped>
#EditBottomCollectionInfo {
  position: absolute;
  height: 60%;
  width: 53.2%;
  background-image: linear-gradient( 0deg , #64b3f4, #c2e59c);
  margin-left: 29%;
  margin-top: 13%;
}

#EditBottomCollectionInfo-title {
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 10px;
}

hr {
  height: 2px;
  border: 0;
  margin-top: 10px;
  background: darkgrey;
}
</style>