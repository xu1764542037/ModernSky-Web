import Vue from "vue";
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getter from "./getter";

Vue.use(Vuex)


const state = {

}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getter
})


export default store