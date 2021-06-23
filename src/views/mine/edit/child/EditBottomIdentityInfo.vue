<template>
  <div id="EditBottomIdentityInfo">
    <div id="EditBottomIdentityInfo-title">
      身份信息
    </div>
    <hr>
    <div id="EditBottomIdentityInfo-context">
      <div class="EditBottomIdentityInfo-context-box" v-show="isStudent">
        <div class="EditBottomIdentityInfo-context-title">学生</div>
        <div class="EditBottomIdentityInfo-context-explain">在此可以对自己的在校信息进行修改</div>
        <div class="EditBottomIdentityInfo-context-link">管理</div>
      </div>
      <div class="EditBottomIdentityInfo-context-box" v-show="isTeacher">
        <div class="EditBottomIdentityInfo-context-title">老师</div>
        <div class="EditBottomIdentityInfo-context-explain">在此可以对在教学生和班级信息进行管理</div>
        <div class="EditBottomIdentityInfo-context-link" @click="goInfoCenter">管理</div>
      </div>
      <div class="EditBottomIdentityInfo-context-box" v-show="isIslandOwner">
        <div class="EditBottomIdentityInfo-context-title">岛主</div>
        <div class="EditBottomIdentityInfo-context-explain">在此可以对所对应的社区天空岛管理员身份进行管理</div>
        <div class="EditBottomIdentityInfo-context-link">管理</div>
      </div>
      <div class="EditBottomIdentityInfo-context-box" v-show="isAdministrators">
        <div class="EditBottomIdentityInfo-context-title">管理员</div>
        <div class="EditBottomIdentityInfo-context-explain">在此可以对所有社区天空岛进行管理</div>
        <div class="EditBottomIdentityInfo-context-link">管理</div>
      </div>
      <div class="EditBottomIdentityInfo-context-box" v-show="isSuperAdministrators">
        <div class="EditBottomIdentityInfo-context-title">超级管理员</div>
        <div class="EditBottomIdentityInfo-context-explain">在此可以对论坛所有信息进行管理</div>
        <div class="EditBottomIdentityInfo-context-link">管理</div>
      </div>
    </div>
  </div>
</template>

<script>
import {selectAId} from "@/network/mine/edit/edit";
import {batchSelect} from "@/network/mine/edit/edit";

export default {
  name: "EditBottomIdentityInfo",
  data() {
    return {
      // ids: '',
      identities: [],
      isStudent: false,
      isTeacher: false,
      isIslandOwner: false,
      isAdministrators: false,
      isSuperAdministrators: false
    }
  },
  methods: {
    test() {

    },
    goInfoCenter() {
      this.$router.push({path: "/mine/edit/info-center"})
    }
  },
  mounted() {
    let Identities = []
    Identities = this.$store.state.userIdentities
    for (let i=0; i<Identities.length; i++) {
      if (Identities[i] === "学生") {
        this.isStudent = true
      } else if (Identities[i] === "老师") {
        this.isTeacher = true
      } else if (Identities[i] === "岛主") {
        this.isIslandOwner = true
      } else if (Identities[i] === "管理员") {
        this.isAdministrators = true
      } else if (Identities[i] === "超级管理员") {
        this.isSuperAdministrators = true
      }
    }
  }
}
</script>

<style scoped>
#EditBottomIdentityInfo {
  position: absolute;
  height: 60%;
  width: 53.2%;
  background-image: linear-gradient( 0deg , #64b3f4, #c2e59c);
  margin-left: 29%;
  margin-top: 13%;
}

#EditBottomIdentityInfo-title {
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 10px;
}

hr {
  height: 2px;
  border: 0;
  margin-top: 10px;
  background: darkgrey;
}
#EditBottomIdentityInfo-context {
  position: absolute;
  height: 84%;
  width: 96%;
  margin-left: 2%;
  margin-top: 2%;
  -webkit-transition: .2s all;
}

.EditBottomIdentityInfo-context-box {
  margin-top: 20px;
  width: 100%;
  height: 15%;
  border-bottom: 1px darkgrey solid;
}

.EditBottomIdentityInfo-context-box:first-child {
  margin-top: 10px;
}

.EditBottomIdentityInfo-context-box .EditBottomIdentityInfo-context-title {
  font-weight: 700;
  font-size: 24px;
  margin-left: 10px;

}

.EditBottomIdentityInfo-context-box .EditBottomIdentityInfo-context-explain {
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
  color: gray;
}

.EditBottomIdentityInfo-context-box .EditBottomIdentityInfo-context-link {
  position: absolute;
  right: 5px;
  margin-top: -20px;
  cursor: pointer;
  color: #1989FA;

}
</style>