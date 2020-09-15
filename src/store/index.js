import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: "",
  },
  getters: {
    role: state => state.role,
  },
  // 同步this.$store.commit('setRole', 'owner')
  mutations: {
    setRole: (state, role) => {
      state.role = role;
    }
  },
  // 异步this.$store.dispatch('setRoleAsync', 'owner')
  actions: {
    setRoleAsync(state, role) {
      state.commit("setRole", role);
    }
  },
  modules: {}
})
