<template>
  <div id="DynamicCenterBar">
    <div id="DynamicCenterBar-InputBox">
      <input type="text" id="DynamicCenterBar-InputBox-Input" placeholder="有什么想和大家要分享的？"/>
      <div id="DynamicCenterBar-InputBox-Functions">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mousemove="EnjoyIsShow = true" v-show="!EnjoyIsShow" src="@/assets/img/Dynamic/enjoy.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mouseleave="EnjoyIsShow = false" v-show="EnjoyIsShow" src="@/assets/img/Dynamic/enjoy-1.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mousemove="PhotoIsShow = true" v-show="!PhotoIsShow" src="@/assets/img/Dynamic/photo.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mouseleave="PhotoIsShow = false" v-show="PhotoIsShow" src="@/assets/img/Dynamic/photo-1.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mousemove="ATIsShow = true" v-show="!ATIsShow" src="@/assets/img/Dynamic/@.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mouseleave="ATIsShow = false" v-show="ATIsShow" src="@/assets/img/Dynamic/@-1.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mousemove="WellIsShow = true" v-show="!WellIsShow" src="@/assets/img/Dynamic/well.svg">
        <img class="DynamicCenterBar-InputBox-Functions-Img" @mouseleave="WellIsShow = false" v-show="WellIsShow" src="@/assets/img/Dynamic/well-1.svg">
        <div id="DynamicCenterBar-InputBox-Functions-Button">发布</div>
      </div>
    </div>
    <div id="DynamicCenterBar-FriendList">
      <div id="DynamicCenterBar-FriendList-LeftBox">
        <span id="DynamicCenterBar-FriendList-LeftBox-Left"></span>
      </div>
      <div id="DynamicCenterBar-FriendList-RightBox">
        <span id="DynamicCenterBar-FriendList-RightBox-Right"></span>
      </div>

    </div>
    <div id="DynamicCenterBar-ChoiceList">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
    <div class="DynamicCenterBar-Data">

    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicCenterBar",
  data() {
    return {
      ATIsShow: false,
      EnjoyIsShow: false,
      PhotoIsShow: false,
      WellIsShow: false
    }
  },
  methods: {
    ATClick() {
    }
  }
}
</script>

<style scoped>
#DynamicCenterBar {
  position: absolute;
}

#DynamicCenterBar-InputBox {
  position: absolute;
  height: 110px;
  width: 650px;
  margin-top: 10px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);
  /*background: white;*/
}

#DynamicCenterBar-InputBox-Input {
  position: absolute;
  width: 600px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  border: 0;
  color: #B5B3B4;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  background: rgba(255,255,255,0);
}

#DynamicCenterBar-InputBox-Functions {
  height: 40px;
  width: 640px;
  margin-top: 55px;
  margin-left: 5px;
}

.DynamicCenterBar-InputBox-Functions-Img {
  height: 24px;
  width: 24px;
  margin-left: 25px;
  margin-top: 5px;
  cursor: pointer;
}

#DynamicCenterBar-InputBox-Functions-Button {
  position: absolute;
  height: 32px;
  width: 70px;
  right: 20px;
  top: 55px;
  border-radius: 4px;
  cursor: pointer;
  background: #8D67D2;
  color: white;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
}

#DynamicCenterBar-FriendList {
  position: absolute;
  height: 120px;
  width: 650px;
  margin-top: 130px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);
}

#DynamicCenterBar-FriendList-LeftBox {
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-top: 50px;
  margin-left: 20px;
}

#DynamicCenterBar-FriendList-LeftBox-Left::after {
  content: "";
  display: block;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  -webkit-transform: rotate(45deg);
  transform: rotate(-135deg);
  width: 9px;
  height: 9px;
  position: relative;
  top: 5px;
  left: 6px;
  cursor: pointer;
}

#DynamicCenterBar-FriendList-LeftBox:hover #DynamicCenterBar-FriendList-LeftBox-Left:after {
  content: "";
  display: block;
  border-top: 1px solid #8360C3;
  border-right: 1px solid #8360C3;
  -webkit-transform: rotate(45deg);
  transform: rotate(-135deg);
  width: 9px;
  height: 9px;
  position: relative;
  top: 5px;
  left: 6px;
}

#DynamicCenterBar-FriendList-RightBox {
  cursor: pointer;
  position: absolute;
  height: 20px;
  width: 20px;
  top: 50px;
  right: 20px;
}

#DynamicCenterBar-FriendList-RightBox-Right::after {
  content: "";
  display: block;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 9px;
  height: 9px;
  position: relative;
  top: 5px;
  left: 6px;
}

#DynamicCenterBar-FriendList-RightBox:hover #DynamicCenterBar-FriendList-RightBox-Right::after {
  content: "";
  display: block;
  border-top: 1px solid #8360C3;
  border-right: 1px solid #8360C3;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 9px;
  height: 9px;
  position: relative;
  top: 5px;
  left: 6px;
}

#DynamicCenterBar-ChoiceList {
  position: absolute;
  height: 50px;
  width: 650px;
  margin-top: 260px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}

.DynamicCenterBar-Data {
  /*position: absolute;*/
  height: 300px;
  width: 650px;
  margin-top: 320px;
  margin-left: 640px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);

}
</style>