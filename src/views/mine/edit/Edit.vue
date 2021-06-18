<template>
  <div id="Edit">
    <div id="Edit-context">
      <edit-sidebar>
        <edit-sidebar-item>
          <div>
            个人资料
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div>
            账号设置
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div>
            身份信息
          </div>
        </edit-sidebar-item>
        <edit-sidebar-item>
          <div>
            我的收藏
          </div>
        </edit-sidebar-item>
        <hr>
        <edit-sidebar-item style="margin-top: 20px;">
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
      <edit-bottom-box></edit-bottom-box>
    </div>
  </div>
</template>

<script>
import EditSidebar from "@/views/mine/edit/child/EditSidebar";
import EditTopBox from "@/views/mine/edit/child/EditTopBox";
import EditBottomBox from "@/views/mine/edit/child/EditBottomBox";
import EditSidebarItem from "@/views/mine/edit/child/EditSidebarItem";

import {updateAutograph} from "@/network/mine/edit/edit";

export default {
  name: "Edit",
  data() {
    return {
      autograph: ''
    }
  },
  methods: {
    updateNewAutograph() {
      const id = this.$store.state.userId
      updateAutograph(id,this.autograph).then( res => {
        console.log(res);
      })
    }
  },
  components: {
    EditSidebar,
    EditTopBox,
    EditBottomBox,
    EditSidebarItem
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