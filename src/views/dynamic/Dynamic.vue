<template>
  <div id="Dynamic">
    <div id="Dynamic-Context">
      <div id="Dynamic-LeftBa">
        <dynamic-left-bar></dynamic-left-bar>
      </div>
      <div id="Dynamic-CenterBar">
        <dynamic-center-bar></dynamic-center-bar>
      </div>
      <div id="Dynamic-RightBar">
        <dynamic-right-bar></dynamic-right-bar>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicLeftBar from "@/views/dynamic/child/DynamicLeftBar";
import DynamicCenterBar from "@/views/dynamic/child/DynamicCenterBar";
import DynamicRightBar from "@/views/dynamic/child/DynamicRightBar";

export default {
  name: "Dynamic",
  components: {
    DynamicLeftBar,
    DynamicCenterBar,
    DynamicRightBar
  },
  DynamicLeftBar
}
</script>

<style scoped>
#Dynamic {
  position: absolute;
  margin-top: 2.4%;
  width: 100%;
  height: 95.1%;
  background-color: black;
  /*background-image: linear-gradient( 125deg,#e8cbc0, #636fa4);*/
  overflow: auto;
}

/*滚动条样式*/
#Dynamic::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
#Dynamic::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
#Dynamic::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}

#Dynamic-Context {
  /*overflow: auto;*/

}
</style>