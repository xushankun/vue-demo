import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    successF: state => state.login = true,
    failF: state => state.login = false
  }
});

export default store
