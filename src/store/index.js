
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    choosedItems:[],
    choosedItemsQuestion:[],
    title:"",
    time:0,
    paper:{
      title:'',
      time:0,
      pid:-1,
      choiceData:[],
      judgementData:[]
    },
    answeredPaperRecord:[]
  },
  mutations: {
    add(state,id) {
      if (!state.choosedItems.includes(id)) {
        state.choosedItems.push(id);
      
      }
    },
    setPaper(state,paper) {
     state.paper=paper
    },
    setAnsweredPaperRecord(state,answeredPaperRecord) {
      state.answeredPaperRecord=answeredPaperRecord
     },
    setTitle(state,title) {
     state.title=title
    },
    setTime(state,time) {
      state.time=time
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
    getPaper:function(state){
      return state.paper
    },
    getTitle:function(state){
      return state.title
    },
     getAnsweredPaperRecord:function(state){
      return state.answeredPaperRecord
    },
    getTime:function(state){
      return state.time
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
