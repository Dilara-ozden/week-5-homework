import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    coins: []

  },
  actions: {
    loadCoins({commit}) {
      axios
          .get('https://jsonplaceholder.typicode.com/photos ')
          .then(r => r.data)
          .then(coins => {
            commit('SET_IMAGES', coins)
          })
    },
    setCount({ commit }) {
      commit('increment');
    }
  },
  mutations: {
    SET_IMAGES(state, coins) {
      state.coins = coins
    },
    increment(state,id) {
      console.log(id);
     
    }
    
  },
  getters: {
    getCount: (state) => state.count,
    getTodoList: (state) => state.coins
  }
})