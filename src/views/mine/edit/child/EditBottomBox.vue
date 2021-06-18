<template>
  <div id="EditBottomBox">
    <div id="EditBottomBox-title">
      基本信息
    </div>
    <hr>
<!--    信息展示界面-->
    <div v-show="!isEdit" id="EditBottomBox-context" @mouseover="editChange" @mouseleave="editChange" @click="changEditBox">
        <div id="EditBottomBox-context-edit" v-show="editShow">
          <span id="EditBottomBox-context-edit-img"><img src="@/assets/img/mine/edit/edit.svg" height="16" width="16"></span>
          <span id="EditBottomBox-context-edit-font">编辑</span>
        </div>
        <div class="EditBottomBox-context-box">
          <span class="EditBottomBox-context-title">用户昵称</span>
          <span class="EditBottomBox-context-data">{{$store.state.userName}}</span>
        </div>
        <div class="EditBottomBox-context-box">
          <span class="EditBottomBox-context-title" style="letter-spacing: 4.5px">用户ID</span>
          <span class="EditBottomBox-context-data" style="margin-left: 98px;">{{$store.state.userId}}</span>
        </div>
        <div class="EditBottomBox-context-box">
          <span class="EditBottomBox-context-title">真实姓名</span>
          <span class="EditBottomBox-context-data">{{realName}}</span>
        </div>
        <div class="EditBottomBox-context-box">
          <span class="EditBottomBox-context-title" style="letter-spacing: 28px">性别</span>
          <span v-show="isMan"><img src="@/assets/img/mine/edit/man.svg"></span>
          <span v-show="!isMan"><img src="@/assets/img/mine/edit/women.svg"></span>
        </div>
        <div class="EditBottomBox-context-box">
          <span class="EditBottomBox-context-title">加入时间</span>
          <span class="EditBottomBox-context-data">{{$store.state.userCreateDate}}</span>
        </div>
    </div>
<!--    信息编辑界面-->
    <div v-show="isEdit" id="EditBottomBox-edit">
      <div class="EditBottomBox-edit-box">
        <span class="EditBottomBox-edit-title">ID</span><br>
        <input type="text" class="EditBottomBox-edit-input" v-model="id" disabled="disable" style="cursor: not-allowed"></input>
      </div>
      <div class="EditBottomBox-edit-box">
        <span class="EditBottomBox-edit-title">昵称</span><br>
        <input type="text" class="EditBottomBox-edit-input" v-model="name"></input>
      </div>
      <div class="EditBottomBox-edit-box">
        <span class="EditBottomBox-edit-title">姓名</span><br>
        <input type="text" class="EditBottomBox-edit-input" v-model="realName"></input>
      </div>
      <div class="EditBottomBox-edit-box">
        <span class="EditBottomBox-edit-title">性别</span>
        <div class="EditBottomBox-edit-sex-btn" id="EditBottomBox-edit-sex-btn-man" @click="sexChangeMan">男</div>
        <div class="EditBottomBox-edit-sex-btn" id="EditBottomBox-edit-sex-btn-woman" @click="sexChangeWoman" style="margin-left: 42px;">女</div>
      </div>
      <div id="EditBottomBox-edit-saveOrExit">
        <div id="EditBottomBox-edit-exit" @click="exit">取消</div>
        <div id="EditBottomBox-edit-save" @click="save">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
import {updateUserInfo} from "@/network/mine/edit/edit";
import {updateStudent} from "@/network/mine/edit/edit";
import {updateTeacher} from "@/network/mine/edit/edit";

export default {
  name: "EditBottomBox",
  data() {
    return {
      realName: '',
      isEdit: false,
      isMan: false,
      editShow: false,
      sex: '',
      id: '',
      name: '',
      identity: null
    }
  },
  methods: {
    editChange() {
      this.editShow = !this.editShow
    },
    sexChangeMan() {
      const womanBox = document.getElementById("EditBottomBox-edit-sex-btn-woman");
      womanBox.style.color = "white"
      womanBox.style.border = "1px #B2B2B2 solid"


      this.sex = '男'
      const manBox = document.getElementById("EditBottomBox-edit-sex-btn-man");
      manBox.style.color = "#B3FF87"
      manBox.style.border = "1px #B3FF87 solid"
    },
    sexChangeWoman() {
      const manBox = document.getElementById("EditBottomBox-edit-sex-btn-man");
      manBox.style.color = "white"
      manBox.style.border = "1px #B2B2B2 solid"


      this.sex = '女'
      const womanBox = document.getElementById("EditBottomBox-edit-sex-btn-woman");
      womanBox.style.color = "#B3FF87"
      womanBox.style.border = "1px #B3FF87 solid"
    },
    changEditBox() {
      this.isEdit = true
      if (this.$store.state.userSex === '男') {
        this.sexChangeMan()
      }else {
        this.sexChangeWoman()
      }
    },
    exit() {
      this.isEdit = false
    },
    save() {
      updateUserInfo(this.id,this.name,this.sex).then(res => {
        if (res.message === "修改成功") {
          if (this.identity === "学生") {
            updateStudent(this.id,this.realName).then( res => {
              if (res.message === "修改成功") {
                alert("修改成功")
                this.isEdit = false

              }
            })
          } else {
            updateTeacher(this.id,this.realName).then( res => {
              if (res.message === "修改成功") {
                alert("修改成功")
                this.isEdit = false
              }
            })
          }
        }
      })


    },
    test() {
    }
  },
  beforeMount() {
    if (this.$store.state.studentName !== '' && this.$store.state.studentName !== null) {
      this.realName = this.$store.state.studentName
      this.identity = '学生'
    } else {
      this.realName = this.$store.state.teacherName
      this.identity = '老师'
    }

    if (this.$store.state.userSex === '男') {
      this.isMan = true
    } else {
      this.isMan = false
    }

    this.id = this.$store.state.userId
    this.name = this.$store.state.userName
  }
}
</script>

<style scoped>
#EditBottomBox {
  position: absolute;
  height: 60%;
  width: 53.2%;
  background-image: linear-gradient( 0deg , #64b3f4, #c2e59c);
  margin-left: 29%;
  margin-top: 13%;
}

#EditBottomBox-title {
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

#EditBottomBox-context {
  position: absolute;
  height: 84%;
  width: 96%;
  margin-left: 2%;
  margin-top: 2%;
  -webkit-transition: .2s all;
  cursor: pointer;
}

#EditBottomBox-context:hover {
  background: rgba(0,0,0,.1);
}

#EditBottomBox-context-edit {
  position: absolute;
  margin-left: 93%;
  margin-top: 1%;
}

#EditBottomBox-context-edit #EditBottomBox-context-edit-img {
  position: absolute;
  margin-left: -20px;
  margin-top: 3px;
}

#EditBottomBox-context-edit #EditBottomBox-context-edit-font {
  color: #2E58FF;
}

.EditBottomBox-context-box {
  position: relative;
  margin-top: 60px;
  margin-left: 30px;
  font-size: 16px;
  /*font-family: PingFangSC-Regular!important;*/
  pointer-events: none;
}

.EditBottomBox-context-box img {
  position: absolute;
  margin-left: 76px;
}

.EditBottomBox-context-box .EditBottomBox-context-title {
  color: #585A58;
}

.EditBottomBox-context-box .EditBottomBox-context-data {
  position: relative;
  margin-left: 100px;
}

#EditBottomBox-edit {
  position: absolute;
  padding-left: 300px;
}

.EditBottomBox-edit-box {
  position: relative;
  margin-top: 35px;
}

.EditBottomBox-edit-title {
  position: absolute;
  color: #585A58;
}

.EditBottomBox-edit-input {
  outline: none;
  border: 1px #B2B2B2 solid;
  height: 30px;
  width: 400px;
  margin-top: 10px;
  border-radius: 3px;
  background: rgba(255,225,225,.3);
}

.EditBottomBox-edit-input:focus {
  border: 1px #409EFF solid;
}

.EditBottomBox-edit-sex-btn {
  position: relative;
  width: 180px;
  height: 30px;
  border: 1px #B2B2B2 solid;
  float: left;
  margin-top: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  background: rgba(255,225,225,.3);
  color: white;
}

#EditBottomBox-edit-saveOrExit {
  position: absolute;
  margin-top: 110px;
  text-align: center;
}

#EditBottomBox-edit-saveOrExit #EditBottomBox-edit-exit {
  float: left;
  height: 30px;
  width: 80px;
  border-radius: 50px 50px 50px 50px;
  border: 1px white solid;
  line-height: 30px;
  margin-left: 100px;
  color: white;
  background: rgba(0,0,0,.3);
}

#EditBottomBox-edit-saveOrExit #EditBottomBox-edit-exit:hover {
  background: rgba(0,0,0,.5);
}

#EditBottomBox-edit-saveOrExit #EditBottomBox-edit-save {
  float: left;
  height: 30px;
  width: 80px;
  border-radius: 50px 50px 50px 50px;
  border: 1px black solid;
  margin-left: 50px;
  line-height: 30px;
  color: black;
  background: rgba(255,255,255,.3);
}

#EditBottomBox-edit-saveOrExit #EditBottomBox-edit-save:hover {
  background: rgba(255,255,255,.5);

}

</style>