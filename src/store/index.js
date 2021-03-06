import Vue from "vue";
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getter from "./getter";

Vue.use(Vuex)


const state = {
  userId: '',
  userPwd: '',
  userName: '',
  userEmail: '',
  userPhone: '',
  userSex: '',
  userCreateDate: '',
  userAutograph: '',
  teacherName: '',
  teacherNumber: '',
  studentName: '',
  studentNumber: '',
  studentClass: '',
  studentYear: '',
  studentBranch: '',
  studentMajor: '',
  userIdentities: []
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getter
})


export default store