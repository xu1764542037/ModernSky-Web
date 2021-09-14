<template>
  <div id="DynamicLeftBar">
    <div id="DynamicLeftBar-Info" ref="obtainTop">
      <div id="DynamicLeftBar-Info-BGP">
        <img src="@/assets/img/Dynamic/bus.png">
      </div>
      <img id="DynamicLeftBar-Info-HeadP" src="@/assets/img/Dynamic/testP.png">
      <span id="DynamicLeftBar-Info-Name">{{name}}</span>
    </div>
    <div id="DynamicLeftBar-List" ref="obtainBottom">

    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicLeftBar",
  data() {
    return {
      name: "徐志利"
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      // console.log('滚动高度', window.pageYOffset)
      // console.log('距离顶部高度', this.$refs.obtainTop.getBoundingClientRect().top)
      let divList = document.getElementById("DynamicLeftBar-List");
      if (this.$refs.obtainBottom.getBoundingClientRect().top < 77) {
        divList.style.marginTop = "10px"
        divList.style.position = "fixed"
        divList.style.zIndex = "1000"
      }
      if (this.$refs.obtainTop.getBoundingClientRect().top > -160) {
        divList.style.marginTop = "220px"
        divList.style.position = "absolute"
        divList.style.zIndex = "0"
      }
    }
  }
}
</script>

<style scoped>
#DynamicLeftBar {

}

#DynamicLeftBar-Info {
  position: absolute;
  width: 250px;
  height: 200px;
  margin-left: 380px;
  margin-top: 10px;
  border-radius: 5px;
  background: rgba(255,255,255,.7);
}

#DynamicLeftBar-Info-BGP {
  position: absolute;
  height: 35%;
  width: 100%;
}

#DynamicLeftBar-Info-BGP img {
  height: 100%;
  width: 100%;
}

#DynamicLeftBar-Info-HeadP {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 50px;
  margin-left: 20px;
}

#DynamicLeftBar-Info-Name {
  position: absolute;
  font-size: 15px;
  margin-left: 90px;
  margin-top: 80px;
  color: black;

}

#DynamicLeftBar-List {
  position: absolute;
  width: 250px;
  min-height: 600px;
  margin-left: 380px;
  margin-top: 220px;
  border-radius: 5px;
  background: rgba(255,255,255,.7);
}
</style>