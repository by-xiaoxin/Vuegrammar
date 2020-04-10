import Vue from 'vue'
import Vuex from 'vuex'
import state from './State'
import getters from './Getters.js'
import mutations from './Mutations.js'
import actions from './Actions.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  // 第二个状态
  getters,
  //第三个状态
  mutations,
  //第四个状态
  actions
})
export default store
