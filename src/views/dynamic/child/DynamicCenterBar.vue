<template>
  <div id="DynamicCenterBar">
    <div id="DynamicCenterBar-Input">

    </div>
    <div id="DynamicCenterBar-FriendList">

    </div>
    <div id="DynamicCenterBar-ChoiceList">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicCenterBar"
}
</script>

<style scoped>
#DynamicCenterBar {
  position: absolute;
}

#DynamicCenterBar-Input {
  position: absolute;
  height: 110px;
  width: 650px;
  margin-top: 10px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}

#DynamicCenterBar-FriendList {
  position: absolute;
  height: 130px;
  width: 650px;
  margin-top: 130px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}

#DynamicCenterBar-ChoiceList {
  position: absolute;
  height: 50px;
  width: 650px;
  margin-top: 270px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}

.DynamicCenterBar-Data {
  /*position: absolute;*/
  height: 300px;
  width: 650px;
  margin-top: 330px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}
</style>