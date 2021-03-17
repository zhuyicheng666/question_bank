import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    choosedItems:[]
  },
  mutations: {
    add(state,id) {
      if (!state.choosedItems.includes(id)) {
        state.choosedItems.push(id);
      }
    },
    delete(state,id) {
      let index = state.choosedItems.indexOf(id);
      if (index !== -1) {
        state.choosedItems.splice(index, 1);
      }
    },

  },
  actions: {
  },
  modules: {
  },
  getters:{
    getChoosedItemsNumber:function(state){
      return state.choosedItems.length
    }
  }
})
