import Vuex from 'vuex'

export default Vuex.createStore({
  state() {
    return {
      test: 'state',
      isMenuShow: true
    }
  },
  mutations: {
    switchMenu(state, flag) {
      state.isMenuShow = flag
    }
  },
  actions: {

  },
  modules: {

  }
});
