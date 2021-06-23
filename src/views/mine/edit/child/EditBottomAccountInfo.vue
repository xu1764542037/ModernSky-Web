<template>
  <div id="EditBottomAccountInfo">
    <div id="EditBottomAccountInfo-title">
      账号设置
    </div>
    <hr>
    <div id="EditBottomAccountInfo-context">
      <div class="EditBottomAccountInfo-context-box" style="margin-top: 50px;">
        <div class="EditBottomAccountInfo-context-title">密<span style="margin-left: 32px;">码</span></div>
        <div class="EditBottomAccountInfo-context-link">修改密码</div>
      </div>

      <div class="EditBottomAccountInfo-context-box">
        <div class="EditBottomAccountInfo-context-title">邮<span style="margin-left: 32px;">箱</span></div>
        <div id="EditBottomAccountInfo-context-email">{{$store.state.userEmail}}</div>
        <div class="EditBottomAccountInfo-context-link">修改邮箱</div>
      </div>

      <div class="EditBottomAccountInfo-context-box">
        <div class="EditBottomAccountInfo-context-title">手<span style="margin-left: 32px;">机</span></div>
        <div id="EditBottomAccountInfo-context-phone">{{$store.state.userPhone}}</div>
        <div class="EditBottomAccountInfo-context-link">修改手机</div>
      </div>

      <div class="EditBottomAccountInfo-context-box">
        <div class="EditBottomAccountInfo-context-title">注销账号</div>
        <div class="EditBottomAccountInfo-context-link" @click="deleteAccount">注销账号</div>
      </div>
    </div>
  </div>
</template>

<script>
import {deleteActor, deleteUser, deleteTeacher, deleteStudent} from "@/network/mine/edit/edit";

export default {
  name: "EditBottomAccountInfo",
  methods: {
    deleteAccount() {
      if (confirm("您确定要注销账号吗")) {
        let Identities = []
        const id = this.$store.state.userId
        Identities = this.$store.state.userIdentities
        for (let i=0; i<Identities.length; i++) {
          if (Identities[i] === "学生") {
            deleteStudent(id).then( res => {
              console.log(res);
            })
          } else if (Identities[i] === "老师") {
            deleteTeacher(id).then( res => {
              console.log(res);
            })
          }
          deleteActor(id).then( res => {
            console.log(res);
            deleteUser(id).then( res => {
              console.log(res);
              alert("账号已注销，返回登录页")
              sessionStorage.setItem("token", 'false');
              this.$router.replace({path: "/login"})
            })
          })
        }
      }
    }
  }
}
</script>

<style scoped>
#EditBottomAccountInfo {
  position: absolute;
  height: 60%;
  width: 53.2%;
  background-image: linear-gradient( 0deg , #64b3f4, #c2e59c);
  margin-left: 29%;
  margin-top: 13%;
}

#EditBottomAccountInfo-title {
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

#EditBottomAccountInfo-context {
  position: absolute;
  height: 84%;
  width: 96%;
  margin-left: 2%;
  margin-top: 2%;
  -webkit-transition: .2s all;
  /*border: 1px red solid;*/
}

.EditBottomAccountInfo-context-box {
  margin-top: 90px;
}

.EditBottomAccountInfo-context-box .EditBottomAccountInfo-context-title {
  float: left;
  margin-left: 20px;
}

.EditBottomAccountInfo-context-box .EditBottomAccountInfo-context-link {
  margin-left: 90%;
  position: relative;
  color: #1989FA;
  cursor: pointer;
}

#EditBottomAccountInfo-context-email {
  position: absolute;
  right: 13%;
}

#EditBottomAccountInfo-context-phone {
  position: absolute;
  right: 13%;
}
</style>