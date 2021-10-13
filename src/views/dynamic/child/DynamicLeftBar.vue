<template>
  <div id="DynamicLeftBar">
    <div id="DynamicLeftBar-Info" ref="obtainTop">
      <div id="DynamicLeftBar-Info-BGP">
        <img src="@/assets/img/Dynamic/bus.png">
      </div>
      <img id="DynamicLeftBar-Info-HeadP" src="@/assets/img/Dynamic/testP.png">
      <span id="DynamicLeftBar-Info-Name">{{name}}</span>
      <div id="DynamicLeftBar-Info-Datas">
        <span id="DynamicLeftBar-Info-DynamicNum" class="DynamicLeftBar-Info-Data">{{dynamicNum}}</span>
        <span id="DynamicLeftBar-Info-FansNum" class="DynamicLeftBar-Info-Data">{{fansNum}}</span>
        <span id="DynamicLeftBar-Info-FollowNum" class="DynamicLeftBar-Info-Data">{{followNum}}</span>
      </div>
      <div id="DynamicLeftBar-Info-DataNames">
        <span id="DynamicLeftBar-Info-DynamicName" class="DynamicLeftBar-Info-Name">动态</span>
        <span id="DynamicLeftBar-Info-FansName" class="DynamicLeftBar-Info-Name">粉丝</span>
        <span id="DynamicLeftBar-Info-FollowName" class="DynamicLeftBar-Info-Name">关注</span>
      </div>
    </div>
    <div id="DynamicLeftBar-List" ref="obtainBottom">
      <div id="DynamicLeftBar-List-Online">
        <span id="DynamicLeftBar-List-Online-Title">在线人数</span>
        <span id="DynamicLeftBar-List-Online-Num">({{onlineNum}})</span>
        <div id="DynamicLeftBar-List-Online-More">
          <span id="DynamicLeftBar-List-Online-More-Font" @mousemove="changeImgColor" @mouseleave="changeImgColor">更多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicLeftBar",
  data() {
    return {
      name: "徐志利",
      dynamicNum: 999,
      fansNum: 999,
      followNum: 999,
      onlineNum: 12,
      isClick: false
    }
  },
  mounted() {
    // 滚动条的获取
    window.addEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    changeImgColor() {
      this.isClick = !this.isClick
    },
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
        divList.style.zIndex = "1000"
      }
    }
  }
}
</script>

<style scoped>
#DynamicLeftBar {
  /*position: fixed;*/
  z-index: 1000;
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
  font-size: 13px;
  margin-left: 90px;
  margin-top: 80px;
  color: black;
}

#DynamicLeftBar-Info-Datas {
  position: absolute;
  height: 30px;
  width: 200px;
  margin-top: 133px;
  z-index: 1000;
}

#DynamicLeftBar-Info-DynamicNum {
  margin-left: 40px;
}

#DynamicLeftBar-Info-FansNum {
  margin-left: 100px;
}

#DynamicLeftBar-Info-FollowNum {
  margin-left: 160px;
}

.DynamicLeftBar-Info-Data {
  position: absolute;
  height: 20px;
  width: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}

.DynamicLeftBar-Info-Data:hover {
  color: #8360c3;
}

#DynamicLeftBar-Info-DataNames {
  position: absolute;
  height: 30px;
  width: 250px;
  margin-top: 160px;
}

#DynamicLeftBar-Info-DynamicName {
  margin-left: 40px;
}

#DynamicLeftBar-Info-FansName {
  margin-left: 100px;
}

#DynamicLeftBar-Info-FollowName {
  margin-left: 160px;
}

.DynamicLeftBar-Info-Name {
  height: 20px;
  width: 40px;
  text-align: center;
  position: absolute;
  font-size: 14px;
  color: gray;
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

#DynamicLeftBar-List-Online {
  position: absolute;
  height: 60px;
  width: 100%;
}

#DynamicLeftBar-List-Online-Title {
  position: absolute;
  margin-left: 20px;
  font-size: 16px;
  margin-top: 18px;
}

#DynamicLeftBar-List-Online-Num {
  position: absolute;
  margin-left: 90px;
  font-size: 14px;
  margin-top: 21px;
  color: gray;
}

#DynamicLeftBar-List-Online-More {
  position: absolute;
  height: 25px;
  width: 50px;
  margin-top: 19px;
  margin-left: 180px;
  cursor: pointer;
  z-index: 1000;
}

#DynamicLeftBar-List-Online-More-Font {
  font-size: 15px;
  color: gray;
}

#DynamicLeftBar-List-Online-More-Font::after {
  content: "";
  display: block;
  border-top: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 6px;
  height: 6px;
  position: absolute;
  top: 6px;
  right: 7px;
}

#DynamicLeftBar-List-Online-More:hover #DynamicLeftBar-List-Online-More-Font {
  color: #8360C3;
}

#DynamicLeftBar-List-Online-More:hover #DynamicLeftBar-List-Online-More-Font::after{
  content: "";
  display: block;
  border-top: 1px solid #8360C3;
  border-right: 1px solid #8360C3;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 6px;
  height: 6px;
  position: absolute;
  top: 6px;
  right: 9px;
}

</style>