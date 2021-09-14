<template>
  <div id="DynamicRightBar">
    <div id="DynamicRightBar-Notice" ref="obtainTop">

    </div>
    <div id="DynamicRightBar-Hot" ref="obtainBottom">

    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicRightBar",
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleScrollx() {
      // console.log('滚动高度', window.pageYOffset)
      // console.log('距离顶部高度', this.$refs.obtainTop.getBoundingClientRect().top)
      let divHot = document.getElementById("DynamicRightBar-Hot");
      if (this.$refs.obtainBottom.getBoundingClientRect().top < 57) {
        divHot.style.marginTop = "10px"
        divHot.style.position = "fixed"
        divHot.style.zIndex = "1000"
      }
      if (this.$refs.obtainTop.getBoundingClientRect().top > -160) {
        divHot.style.marginTop = "200px"
        divHot.style.position = "absolute"
        divHot.style.zIndex = "0"
      }
    }
  }
}
</script>

<style scoped>
#DynamicRightBar {

}

#DynamicRightBar-Notice {
  position: absolute;
  width: 250px;
  height: 180px;
  margin-left: 1300px;
  margin-top: 10px;
  border-radius: 5px;
  background: rgba(255,255,255,.8);
}

#DynamicRightBar-Hot {
  position: absolute;
  width: 250px;
  height: 380px;
  margin-left: 1300px;
  margin-top: 200px;
  border-radius: 5px;
  background: rgba(255,255,255,.8);
}
</style>