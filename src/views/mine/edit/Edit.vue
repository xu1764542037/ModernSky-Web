<template>
  <div id="Edit">
    <div id="Edit-context">
      <edit-sidebar>
        <edit-sidebar-item>
          <div @click="changeUserInfo">
            个人资料
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div @click="changeAccountInfo">
            账号设置
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div @click="changeIdentityInfo">
            身份信息
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div @click="changeCollectionInfo">
            我的收藏
          </div>
        </edit-sidebar-item>
        <hr>
        <edit-sidebar-item style="margin-top: 15px;">
          <div>
            内容管理
            <img src="@/assets/img/mine/edit/left.svg" height="14px" width="14px" style="position:absolute; margin-left: 30px; margin-top: 28px;">
          </div>
        </edit-sidebar-item>
      </edit-sidebar>
      <edit-top-box>
        <div slot="EditTopBox-name">{{$store.state.userName}}</div>
        <div slot="EditTopBox-headP"><img src="@/assets/img/mine/edit/testP.png"></div>
        <div slot="EditTopBox-autograph">
          <input placeholder="来展示你的签名吧" v-model="autograph" id="EditTopBox-autograph-input" @blur="updateNewAutograph"/>
        </div>
      </edit-top-box>


      <transition name="el-zoom-in-center">
        <edit-bottom-user-info v-show="showUserInfo"></edit-bottom-user-info>
      </transition>

      <transition name="el-zoom-in-center">
        <edit-bottom-account-info v-show="showAccountInfo"></edit-bottom-account-info>
      </transition>

      <transition name="el-zoom-in-center">
        <edit-bottom-identity-info v-show="showIdentityInfo"></edit-bottom-identity-info>
      </transition>

      <transition name="el-zoom-in-center">
        <edit-bottom-collection-info v-show="showCollectionInfo"></edit-bottom-collection-info>
      </transition>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import EditSidebar from "@/views/mine/edit/child/EditSidebar";
import EditSidebarItem from "@/views/mine/edit/child/EditSidebarItem";
import EditTopBox from "@/views/mine/edit/child/EditTopBox";
import EditBottomUserInfo from "@/views/mine/edit/child/EditBottomUserInfo";
import EditBottomAccountInfo from "@/views/mine/edit/child/EditBottomAccountInfo";
import EditBottomIdentityInfo from "@/views/mine/edit/child/EditBottomIdentityInfo";
import EditBottomCollectionInfo from "@/views/mine/edit/child/EditBottomCollectionInfo";


import {updateAutograph} from "@/network/mine/edit/edit";

export default {
  name: "Edit",
  data() {
    return {
      autograph: '',
      showUserInfo: true,
      showAccountInfo: false,
      showIdentityInfo: false,
      showCollectionInfo: false
    }
  },
  methods: {
    updateNewAutograph() {
      const id = this.$store.state.userId
      updateAutograph(id,this.autograph).then( res => {
        console.log(res);
      })
    },
    changeUserInfo() {
      this.showUserInfo = true
      this.showAccountInfo = false
      this.showIdentityInfo = false
      this.showCollectionInfo = false
    },
    changeAccountInfo() {
      this.showUserInfo = false
      this.showAccountInfo = true
      this.showIdentityInfo = false
      this.showCollectionInfo = false

    },
    changeIdentityInfo() {
      this.showUserInfo = false
      this.showAccountInfo = false
      this.showIdentityInfo = true
      this.showCollectionInfo = false
    },
    changeCollectionInfo() {
      this.showUserInfo = false
      this.showAccountInfo = false
      this.showIdentityInfo = false
      this.showCollectionInfo = true
    }
  },
  components: {
    EditSidebar,
    EditTopBox,
    EditBottomUserInfo,
    EditSidebarItem,
    EditBottomAccountInfo,
    EditBottomIdentityInfo,
    EditBottomCollectionInfo
  },
  beforeMount() {
    this.autograph = this.$store.state.userAutograph
  }
}
</script>

<style scoped>
#Edit {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: linear-gradient( 180deg, #43c6ac, #f8ffae);

  z-index: 5;
}

#EditTopBox-autograph-input {
  font-size: 14px;
  font-weight: 500;
  height: 30px;
  width: 80%;
  outline: none;
  border: 0;
  background: rgba(255,255,255,0);
  -webkit-transition: .5s all;
  color: darkgrey;
}

#EditTopBox-autograph-input:hover {
  background: rgba(255,255,255,.2);
}

#EditTopBox-autograph-input:focus {
  background: rgba(255,255,255,.2);
}
</style>