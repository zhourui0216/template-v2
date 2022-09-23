import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    setDate(state, object) {
      for (let i in object) {
        state[i] = object[i];
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
