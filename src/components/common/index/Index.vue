<template>
  <div id="index">
    <nav-bar>
      <div slot="logo">
        <img id="index-logo" src="@/assets/img/logo/logo.png" height="50" width="160">
      </div>
      <div slot="button">
        <nav-bat-item><div id="index-home" @click="goHome">首页</div></nav-bat-item>
        <nav-bat-item><div id="index-forum" @click="goForum">天空岛</div></nav-bat-item>
        <nav-bat-item><div id="index-communication" @click="goCommunication">交友</div></nav-bat-item>
        <nav-bat-item><div id="index-dynamic" @click="goDynamic">动态</div></nav-bat-item>
      </div>
      <div slot="searchBar">
        <input type="text" placeholder=" 点我搜索" id="index-search-input" @focus="searchInput" @blur="searchInput"/>
        <div id="index-search-btn">
          <img id="index-search-btn-img" src="@/assets/img/index/search.svg" height="20" width="20">
        </div>
      </div>
      <div slot="headP">
        <img v-show="!HeadPIsClick" @click="changHeadPIsClick" src="@/assets/img/index/HeadP.svg" height="36px" width="36px">
        <img v-show="HeadPIsClick" @click="changHeadPIsClick" src="@/assets/img/index/HeadP2.svg" height="36px" width="36px">
        <transition name="el-zoom-in-top">
          <div id="index-HeadPItem" v-show="HeadPShow">
            <div class="index-HeadPItem" @click="goMine">个人中心</div>
            <div class="index-HeadPItem">内容管理</div>
            <div class="index-HeadPItem">日常签到</div>
            <div class="index-HeadPItem" @click="exit">退出</div>
          </div>
        </transition>
      </div>
      <div slot="function">
        <nav-bar-function><div id="index-function-member">会员中心</div></nav-bar-function>
        <nav-bar-function>
          <div id="index-function-news" @click="changeFunctionShow">消息</div>
          <transition name="el-zoom-in-top">
            <div id="index-FunctionItem" v-show="FunctionShow">
              <div class="index-FunctionItem">好友消息</div>
              <div class="index-FunctionItem">班级消息</div>
              <div class="index-FunctionItem">老师消息</div>
              <div class="index-FunctionItem">系统消息</div>
            </div>
          </transition>
        </nav-bar-function>
        <nav-bar-function><div id="index-function-history">历史</div></nav-bar-function>
        <nav-bar-function><div id="index-function-collection">收藏</div></nav-bar-function>
      </div>

    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import NavBatItem from "@/components/common/navbar/NavBarItem";
import NavBarFunction from "@/components/common/navbar/NavBarFunction";
import {batchSelect, selectAId} from "@/network/mine/edit/edit";

export default {
  name: "Index",
  data() {
    return {
      searchBtnIsFocus: false,
      HeadPIsClick: false,
      HeadPShow: false,
      FunctionShow: false
    }
  },
  methods: {
    /**
     * navbar的一些方法
     */
    searchInput() {
      const searchBtn = document.querySelector("#index-search-btn")
      this.searchBtnIsFocus = !this.searchBtnIsFocus
      if (this.searchBtnIsFocus === true){
        searchBtn.style.background = "#B67FB6"
      }else {
        searchBtn.style.background = "#A9A9A9"
      }
    },
    changHeadPIsClick() {
      this.HeadPIsClick = !this.HeadPIsClick
      this.HeadPShow = !this.HeadPShow

      this.FunctionShow = false
    },
    changeFunctionShow() {
      this.FunctionShow = !this.FunctionShow

      this.HeadPIsClick = false
      this.HeadPShow = false
    },

    /**
     * 一些跳转方法
     */
    goHome() {
      this.$router.push({path: "/home"})
    },
    goForum() {
      this.$router.push({path: "/forum"})
    },
    goCommunication() {
      this.$router.push({path: "/communication"})
    },
    goDynamic() {
      this.$router.push({path: "/dynamic"})
    },
    goMine() {
      this.$router.push({path: "/mine"})
      this.HeadPShow = false
      this.HeadPIsClick = !this.HeadPIsClick

    },
    exit() {
      sessionStorage.setItem("token", 'false');
      this.$router.push({path: "/login"})
      this.HeadPShow = false
      this.HeadPIsClick = !this.HeadPIsClick
    }
  },
  mounted() {
    document.addEventListener('click',e => {
      if(!this.$el.contains(e.target)){
        this.HeadPShow = false//点击其他区域关闭
        this.FunctionShow = false
        this.HeadPIsClick = false

      }
    })
  },
  components: {
    NavBar,
    NavBatItem,
    NavBarFunction,
  }
}
</script>

<style scoped>
#index {
  z-index: 1;
  position: fixed;
  height: 5%;
  width: 100%;
}


#index-search-input {
  position: absolute;
  margin-left: 3%;
  margin-top: 1.5%;
  height: 70%;
  width: 70%;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: 1px #A9A9A9 solid;
  -webkit-transition: .5s all;
  background: rgba(255,255,255,0.3);
}

#index-search-input:hover {
  border: 1px #B67FB6 solid;
  background: rgba(255,255,255,0.7);
}

#index-search-input:focus {
  border: 1px #B67FB6 solid;
  background: rgba(255,255,255,0.7);
}

#index-search-btn {
  position: absolute;
  height: 75%;
  width: 10%;
  background-color: #B1B1B1;
  margin-left: 74.2%;
  margin-top: 1.37%;
  border: 0;
  border-radius:  0 5px 5px 0;
  -webkit-transition: .5s all;

}

#index-search-btn:hover {
  background: #B67FB6;
}

#index-search-btn-img {
  position: absolute;
  margin-left: 25%;
  margin-top: 12%;
}



.index-HeadPItem {
  text-align: center;
  position: relative;
  width: 250%;
  line-height: 300%;
  margin-left: -100%;
  background-color: darkgrey;
  float: top;
  box-shadow: 0 1px 5px #888888;
}

.index-HeadPItem:hover {
  background-color: #F4F4F4;
}

.index-FunctionItem {
  text-align: center;
  position: relative;
  width: 130%;
  line-height: 300%;
  margin-left: -18%;
  background-color: darkgrey;
  float: top;
  box-shadow: 0 1px 5px #888888;;
}

.index-FunctionItem:hover {
  background-color: #F4F4F4;
}

#index-function-news,#index-function-member,#index-function-collection,#index-function-history {
  -webkit-transition: .5s all;
}

#index-function-news:hover,#index-function-member:hover,#index-function-collection:hover,#index-function-history:hover {
  background: rgba(0,0,0,.3);
  border-bottom: 1px white solid;
}

</style>