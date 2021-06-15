export default {
  addUserInfo(state,plyload){
    state.userId = plyload.id
    state.userPwd = plyload.password
    state.userName = plyload.name
    state.userSex = plyload.sex
    state.userEmail = plyload.email
    state.userPhone = plyload.phone
    state.userCreateDate = plyload.createDate.split("T")[0]
  },


  addStudentInfo(state,payload) {
    state.studentName = payload.name
    state.studentNumber = payload.number
    state.studentClass = payload.className
    state.studentYear = payload.year
    state.studentBranch = payload.branch
    state.studentMajor = payload.major
  },



  addTeacherInfo(state,payload) {
    state.teacherName = payload.name
    state.teacherNumber = payload.jobNumber
  }
}