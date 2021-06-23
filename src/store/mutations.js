export default {
  addUserInfo(state,plyload){
    state.userId = plyload.id
    state.userPwd = plyload.password
    state.userName = plyload.name
    state.userSex = plyload.sex
    state.userEmail = plyload.email
    state.userPhone = plyload.phone
    state.userCreateDate = plyload.createDate.split("T")[0]
    state.userAutograph = plyload.autograph
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
  },

  addUerIdentities(state,payload) {
      state.userIdentities.push(payload);
  },

  cleanIdentities(state,payload) {
    const length = state.userIdentities.length
    state.userIdentities.splice(0,length)
  }
}