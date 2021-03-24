
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    choosedItems:[],
    choosedItemsQuestion:[],
    title:""
  },
  mutations: {
    add(state,id) {
      if (!state.choosedItems.includes(id)) {
        state.choosedItems.push(id);
      
      }
    },
    setTitle(state,title) {
     state.title=title
    },
    delete(state,id) {
      let index = state.choosedItems.indexOf(id);
      if (index !== -1) {
        state.choosedItems.splice(index, 1);
      }
      state.choosedItemsQuestion.forEach(function(item,index){
        if (item.qid===id){
          state.choosedItemsQuestion.splice(index, 1);
        }
      })
    },

    loadQuestion(state,arr){
      state.choosedItemsQuestion=arr
    }

  },
  actions: {
  },
  modules: {
  },
  getters:{
    getTitle:function(state){
      return state.title
    },
    getChoosedItemsNumber:function(state){
      return state.choosedItems.length
    },
    getChoosedItems:function(state){
      return state.choosedItems
    },
    getChoosedItemsQuestion:function(state){
      return state.choosedItemsQuestion
    },
    getChoiceQuestion:function(state){
      let arr=[]
      state.choosedItemsQuestion.forEach((item)=>{
        if (item.type==="choice"){
          arr.push(item)
        }
      })

      return arr
    },
    getJudgementQuestion:function(state){
      let arr=[]
      state.choosedItemsQuestion.forEach((item)=>{
        if (item.type==="judgement"){
          arr.push(item)
        }
      })
      return arr
    },
  }
})
