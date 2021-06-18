<template>
  <div id="MineTitle">
    <div id="MineTitle-title">{{$store.state.userName}}的天空岛</div>
    <div id="MineTile-banner"></div>
    <div id="MineTitle-headPhoto"><img src="@/assets/img/mine/testP.png"></div>
    <div id="MineTitle-sex">
      <div class="MineTitle-sex-box" v-show="isMan"><img src="@/assets/img/mine/man.svg"></div>
      <div class="MineTitle-sex-box" v-show="!isMan"><img src="@/assets/img/mine/women.svg"></div>
    </div>
    <div id="MineTitle-name">
      {{$store.state.userName}}
    </div>
    <div class="MineTitle-data" style="margin-left: 37.2%;margin-top: 5%" @mouseover="newPageColor" @mouseleave="oldPageColor">
      <mine-title-data>
        <div id="MineTitle-data-page-data" slot="data">999</div>
        <div id="MineTitle-data-page" slot="name">我的帖子</div>
      </mine-title-data>
    </div>
    <img class="dividingLine" src="@/assets/img/mine/dividingLine.svg" height="80" width="80">
    <div class="MineTitle-data" @mouseover="newFansColor" @mouseleave="oldFansColor">
      <mine-title-data>
        <div id="MineTitle-data-fans-data" slot="data">999</div>
        <div id="MineTitle-data-fans" slot="name">我的粉丝</div>
      </mine-title-data>
    </div>
    <img class="dividingLine" src="@/assets/img/mine/dividingLine.svg" height="80" width="80">

    <div class="MineTitle-data" @mouseover="newFollowColor" @mouseleave="oldFollowColor">
      <mine-title-data>
        <div id="MineTitle-data-follow-data" slot="data">999</div>
        <div id="MineTitle-data-follow" slot="name">我的关注</div>
      </mine-title-data>
    </div>

    <div id="MineTitle-editInfo" @click="goEdit">
      编辑资料
    </div>
  </div>
</template>

<script>
import MineTitleData from "@/views/mine/child/MineTitleData";

export default {
  name: "MineTitle",
  components: {MineTitleData},
  data() {
    return {
        isMan: false,
    }
  },
  methods: {
    newPageColor() {
      const data = document.querySelector("#MineTitle-data-page-data")
      const name = document.querySelector("#MineTitle-data-page")
      data.style.color = "white"
      name.style.color = "white"
    },
    oldPageColor() {
      const data = document.querySelector("#MineTitle-data-page-data")
      const name = document.querySelector("#MineTitle-data-page")
      data.style.color = "darkgrey"
      name.style.color = "gray"
    },
    newFansColor() {
      const data = document.querySelector("#MineTitle-data-fans-data")
      const name = document.querySelector("#MineTitle-data-fans")
      data.style.color = "white"
      name.style.color = "white"
    },
    oldFansColor() {
      const data = document.querySelector("#MineTitle-data-fans-data")
      const name = document.querySelector("#MineTitle-data-fans")
      data.style.color = "darkgrey"
      name.style.color = "gray"
    },
    newFollowColor() {
      const data = document.querySelector("#MineTitle-data-follow-data")
      const name = document.querySelector("#MineTitle-data-follow")
      data.style.color = "white"
      name.style.color = "white"
    },
    oldFollowColor() {
      const data = document.querySelector("#MineTitle-data-follow-data")
      const name = document.querySelector("#MineTitle-data-follow")
      data.style.color = "darkgrey"
      name.style.color = "gray"
    },
    goEdit() {
      this.$router.replace({path: '/mine/edit'})
    }
  },
  beforeMount() {
    this.isMan = this.$store.state.userSex === '男';
  }
}
</script>

<style scoped>
#MineTitle {
  position: absolute;
  height: 20%;
  width: 100%;
}

#MineTitle-title {
  width: 400px;
  height: 50px;
  position: absolute;
  z-index: 2;
  text-align: center;
  font-size: 24px;
  color: white;
  margin-top: 15px;
  margin-left: 100px;
}

#MineTile-banner {
  position: absolute;
  /*width: 1475%;*/
  width: 100%;
  height: 110px;
  /*background-image: linear-gradient( 125deg, #d3cce3, #e9e4f0);*/
  background-image: linear-gradient( 180deg, #43c6ac, #f8ffae);
  /*background: darkgrey;*/

}

#MineTitle-headPhoto {
  position: relative;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 5px white solid;
  margin-left: 46.5%;
  margin-top: 2%;
  box-shadow: 0 1px 2px #888888;;
}

#MineTitle-headPhoto img{
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

.MineTitle-sex-box {
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px white solid;
  margin-top: -30px;
  margin-left: 51.3%;
}

#MineTitle-sex .MineTitle-sex-box img {
  height: 25px;
  width: 25px;
  position: absolute;
}

#MineTitle-name {
  text-align: center;
  position: absolute;
  font-size: 30px;
  margin-top: 1%;
  margin-left: 42%;
  width: 300px;
  height: 50px;
  /*border: 1px red solid;*/
}

.dividingLine {
  position: absolute;
  margin-left: -40px;
}


#MineTitle-editInfo {
  position: absolute;
  text-align: center;
  line-height: 35px;
  width: 150px;
  height: 35px;
  /*border: 1px red solid;*/
  margin-top: -130px;
  margin-left: 90%;
  border-radius: 15px;
  background: #BFB8B2;
  color: white;
  cursor: pointer;
}

#MineTitle-editInfo:hover {
  color: #40474D;
}
</style>