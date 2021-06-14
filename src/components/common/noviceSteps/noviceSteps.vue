<template>
  <div id="noviceSteps">
    <h1 id="noviceSteps-title">欢迎来到ModernSky校园论坛</h1>
    <div id="noviceSteps-step1" v-show="step1Show">
      <h3>请输入您的用户信息</h3>
      <div>
        <span class="noviceSteps-input-name">昵称</span>
        <input type="text" placeholder="请输入您的昵称" id="noviceSteps-step1-name" v-model="userName"/>
      </div>
      <div>
        <span class="noviceSteps-input-name">性别</span>
        <label for="man">
          <input type="radio" id="man" value="男" v-model="userSex"/><span class="userSex">男</span>
        </label>
        <label for="woman">
          <input type="radio" id="woman" value="女" v-model="userSex"/><span class="userSex">女</span>
        </label>
      </div>
      <div>
        <span class="noviceSteps-input-name">电话</span>
        <input type="text" maxlength="11" placeholder="请输入您的手机号" v-model="userPhone"/>
      </div>
    </div>
    <div id="noviceSteps-step2" v-show="step2Show">
      <div>
        <h3>请选择您在本校的身份</h3>
        <div id="noviceSteps-step2-label">
          <label for="student">
            <input type="radio" id="student" value="学生" v-model="identity"/>学生
          </label>
          <label for="teacher">
            <input type="radio" id="teacher" value="老师" v-model="identity"/>老师
          </label>
        </div>
      </div>
    </div>
    <div id="noviceSteps-step3" v-show="step3Show">
      <div v-show="isStudent" id="noviceSteps-step3-student">
        <h3>请输入您的学生信息</h3>
        <div>
          <span class="noviceSteps-input-name">姓名</span>
          <input placeholder="请输入您的真实姓名" type="text" v-model="studentName"/>
        </div>
        <div>
          <span class="noviceSteps-input-name">学号</span>
          <input placeholder="请输入您的学号" type="text" v-model="studentNumber"/>
        </div>
        <div>
          <span class="noviceSteps-input-name">分院</span>
        <select id="noviceSteps-step3-branch" class="selected" v-model="studentBranch">
          <option name="branch" disabled>---选择院系---</option>
          <option v-for="branches in studentBranches">{{branches}}</option>
        </select>
        </div>
        <div>
          <span class="noviceSteps-input-name">专业</span>
          <select id="noviceSteps-step3-major" class="selected" v-model="studentMajor">
            <option name="major" disabled>---选择专业---</option>
            <option v-for="majors in this.studentMajors">{{majors}}</option>
          </select>
        </div>
        <div>
          <span class="noviceSteps-input-name">班级</span>
          <select id="noviceSteps-step3-class" class="selected" v-model="studentClass">
            <option name="class" disabled>---选择班级---</option>
            <option v-for="classes in this.studentClasses">{{classes}}</option>
          </select>
        </div>
        <div>
          <span class="noviceSteps-input-name">年级</span>
          <select id="noviceSteps-step3-year" class="selected" v-model="studentYear">
            <option name="year" disabled>---选择年级---</option>
            <option v-for="years in this.studentYears">{{years}}</option>
          </select>
        </div>
      </div>
      <div v-show="!isStudent" id="noviceSteps-step3-teacher">
        <h3>请输入您的教师信息</h3>
        <div>
          <span class="noviceSteps-input-name">姓名</span>
          <input placeholder="请输入您的真实姓名" type="text" v-model="teacherName"/>
        </div>
        <div>
          <span class="noviceSteps-input-name">工号</span>
          <input placeholder="请输入您的教师工号" type="number" v-model="teacherNumber"/>
        </div>
      </div>
    </div>
    <div id="noviceSteps-step4" v-show="step4Show">
      <div>
        <h1>您已完成所有新手必填<br/>点此去往ModernSky</h1>
      </div>
    </div>
    <div id="noviceSteps-steps">
      <el-steps :active="active" finish-status="success">
        <el-step title="用户信息"><h1>111</h1></el-step>
        <el-step title="用户身份">2</el-step>
        <el-step title="身份信息">3</el-step>
      </el-steps>
      <el-button style="margin-top: 12px;margin-left: 42%" @click="before">上一步</el-button>
      <el-button style="margin-top: 12px;margin-left: 3%" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import {addUserInfo, selectActorId, setActor, addStudentInfo, addTeacherInfo} from "@/network/noviceSteps/noviceSteps";
import {distinctSelectBranch,distinctSelectMajor,distinctSelectClassName,distinctSelectYear} from "@/network/noviceSteps/noviceSteps";

export default {
  name: "noviceSteps",
  data() {
    return {
      active: 0,
      step1Show: true,
      step2Show: false,
      step3Show: false,
      step4Show: false,
      identity: '学生',
      isStudent: false,
      userId: null,
      userPwd: null,
      userName: null,
      userEmail: null,
      userPhone: null,
      userSex: '男',
      userCreateDate: null,
      teacherName: null,
      teacherNumber: null,
      studentName: null,
      studentNumber: null,
      studentClass: null,
      studentClasses: [],
      studentYear: null,
      studentYears: [],
      studentBranch: null,
      studentBranches: [],
      studentMajor: null,
      studentMajors: [],
      //上一次数据长度
      beforeMajorDataNumber: 0,
      beforeClassDataNumber: 0,
      beforeYearDataNumber: 0
    };
  },
  watch: {
    studentBranch: {
      handler() {
        this.studentMajors.splice(0,this.beforeMajorDataNumber)
        distinctSelectMajor(this.studentBranch).then( res => {
          for (let i=0; i<res.obj.length; i++) {
            // this.studentMajors[i] = res.obj[i].major
            this.$set(this.studentMajors,i,res.obj[i].major)
          }
          this.beforeMajorDataNumber = res.obj.length
        })
      }
    },
    studentMajor: {
      handler() {
        this.studentClasses.splice(0, this.beforeClassDataNumber)
        distinctSelectClassName(this.studentMajor).then(res => {
          for (let i = 0; i < res.obj.length; i++) {
            // this.studentMajors[i] = res.obj[i].major
            this.$set(this.studentClasses, i, res.obj[i].className)
          }
          this.beforeClassDataNumber = res.obj.length
        })
      }
    },
    studentClass: {
      handler() {
        this.studentYears.splice(0, this.beforeYearDataNumber)
        distinctSelectYear(this.studentClass).then(res => {
          for (let i = 0; i < res.obj.length; i++) {
            // this.studentMajors[i] = res.obj[i].major
            this.$set(this.studentYears, i, res.obj[i].year)
          }
          this.beforeYearDataNumber = res.obj.length
        })
      }
    }
  },
  methods: {
    Identification() {
      if (this.identity === "学生") {
        this.isStudent = true
      } else {
        this.isStudent = false
      }
    },
    before() {
      if (this.active-- === 0) this.active = 0;
      if (this.active === 0) {
        this.step1Show = true
        this.step2Show = false
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 1){
        this.step1Show = false
        this.step2Show = true
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 2){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = true
        this.step4Show = false

      }
      else if (this.active === 3){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = false
        this.step4Show = true
      }
    },
    next() {
      if (this.active++ > 2) this.active = 3;
      if (this.active === 0) {
        this.step1Show = true
        this.step2Show = false
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 1){
        this.step1Show = false
        this.step2Show = true
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 2){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = true
        this.step4Show = false

      }
      else if (this.active === 3){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = false
        this.step4Show = true
      }

      this.Identification()
    }
  },
  beforeCreate() {
    distinctSelectBranch().then( res => {
      for (let i=0; i<res.obj.length; i++) {
        this.studentBranches.push(res.obj[i].branch)
      }
      console.log(this.studentBranches);
    })
  }
}

</script>

<style scoped>
#noviceSteps {
  position: fixed;
  height: 100%;
  width: 100%;
  background: white;
}

#noviceSteps-title {
  position: absolute;
  margin-left: 38%;
  margin-top: 1%;
}

#noviceSteps-steps {
  position: absolute;
  width: 80%;
  margin-top: 38%;
  margin-left: 10%;
}

input {
  height: 30px;
  width: 250px;
  border-radius: 5px;
  outline: none;
  -webkit-transition: .5s all;
  border: 1px black solid;
  margin-top: 100px;
}

#noviceSteps-step3-branch {
  margin-top: 30px;
}

.selected {
  height: 30px;
  width: 257px;
  border-radius: 5px;
  outline: none;
  -webkit-transition: .5s all;
  border: 1px black solid;
  margin-top: 60px;
  margin-left: 30px;
}

.noviceSteps-input-name {
  margin-right: 10px;
}

input[type=radio] {
  height: 20px;
  width: 100px;
}

input:hover {
  border: 1px #2E58FF solid;
}

#noviceSteps-step1 {
  position: absolute;
  margin-left: 41.5%;
  margin-top: 7%;
}



#noviceSteps-step1 #man {
  margin-left: -30px;
}

#noviceSteps-step2 {
  position: absolute;
  margin-left: 41.5%;
  margin-top: 7%;
}

 h3{
  position: relative;
  margin-left: 50px;
}

#noviceSteps-step2-label {
  position: absolute;
  margin-top: 70px;
  margin-left: 40px;
}

#noviceSteps-step3 {
  position: absolute;
  margin-left: 41.5%;
  margin-top: 7%;
}

#noviceSteps-step3 input {
  margin: 30px;;
}

#noviceSteps-step3-teacher input {
  margin-top: 150px;
}

#noviceSteps-step4 {
  position: absolute;
  margin-left: 41.5%;
  margin-top: 7%
}
</style>