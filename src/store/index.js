import Vuex from 'vuex'
import map from './modules/map.js'

export default Vuex.createStore({
  state() {
    return {
      test: 'state'
    }
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    map
  }
});
