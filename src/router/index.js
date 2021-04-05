import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'


import Release from '../views/release/Release.vue'
import Community from '../views/community/Community.vue'
import typeCalculate from '../views/type/typeCalculate.vue'
import typeFill from '../views/type/typeFill.vue'
import typeChoice from '../views/type/typeChoice.vue'
import typeJudge from '../views/type/typeJudge.vue'
import checkList from '../views/type/checkList.vue'
import generation from '../views/type/generation.vue'
import paper from '../views/Paper.vue'
import onlinePaper from '../views/onlinePaper.vue'
import answerPaper from '../views/answerPaper.vue'
import stuResult from '../views/stuResult.vue'
import stuWrongAnswer from '../views/stuWrongAnswer.vue'
import stuPaperData from '../views/stuPaperData.vue'
import onlinePreview from '../views/onlinePreview.vue'
import answerSingle from '../views/answerSingle.vue'
import searchPaper from '../views/searchPaper.vue'
import exercise from '../views/exercise.vue'
import history from '../views/history.vue'
import teacherIndex from '../views/teacherIndex.vue'
import studentIndex from '../views/studentIndex.vue'
import superAdmin from '../views/superAdmin.vue'
Vue.use(VueRouter)

  



  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
  
  
  
  {
    path:'/onlinePaper',
    name:'onlinePaper',
    component:onlinePaper
  },
 
  {
    path:'/stuWrongAnswer',
    name:'stuWrongAnswer',
    component:stuWrongAnswer
  },
  {
    path:'/superAdmin',
    name:'superAdmin',
    component:superAdmin
  },
  {
    path:'/stuPaperData',
    name: 'stuPaperData',
    component: stuPaperData
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/home',
    name: 'Home',
    component: Home,
    redirect:'/type-choice',
    children:[
      {
        path:'/onlinePreview',
        name: 'onlinePreview',
        component:onlinePreview
      },
      {
        path:'/teacherIndex',
        name: 'teacherIndex',
        component:teacherIndex
      },
      {
        path:'/studentIndex',
        name: 'studentIndex',
        component:studentIndex
      },
      {
        path:'/answerPaper',
        name:'answerPaper',
        component:answerPaper
      },
      {
        path:'/stuResult',
        name:'stuResult',
        component:stuResult
      },
      {
        path:'/paper',
        name: 'Paper',
        component:paper
      },
      {
        path:'/exercise',
        name:'exercise',
        component:exercise
      },
      {
        path:'/history',
        name:'history',
        component:history
      },
      {
        path:'/answerSingle',
        name: 'answerSingle',
        component:answerSingle
      },
      {
        path:'/searchPaper',
        name: 'searchPaper',
        component:searchPaper
      },
     
      {
        path:'/release',
        name: 'Release',
        component: Release
      },
      {
        path:'/community',
        name: 'Community',
        component: Community
      },
      {
        path:'/type-calculate',
        name: 'typeCalculate',
        component:typeCalculate
      },
      {
        path:'/type-fill',
        name: 'typeFill',
        component:typeFill
      },
      {
        path:'/type-choice',
        name: 'typeChoice',
        component:typeChoice
      },
      {
        path:'/type-judge',
        name: 'typeJudge',
        component:typeJudge
      },
      {
        path:'/checkList',
        name: 'checkList',
        component:checkList
      },  
      {
        path:'/generate',
        name: 'generate',
        component: generation
      },
    ]
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//挂载路由导航守卫（必须登陆后再能访问其他页面）
// router.beforeEach((to,from,next)=>{
//   //to 将要访问的路径
//   //from 代表从哪个路径跳转
//   //next是一个函数表示放行 
//   // next（）放行 next（'/login'）强制跳转

//   if(to.path==='/login')return next()
//   if(to.path==='/register') return next()
//   if(to.path==='/paper') return next()
//   if(to.path==='/onlinePaper') return next()
//   if(to.path==='/answerPaper')  return next()
//   if(to.path==='/stuResult')  return next()
//   //通过token判断有无登陆
//   const tokenStr = window.sessionStorage.getItem('token');
//   if (!tokenStr) {return next('/login')}
//   else {
//     return next()
//   }

// })

export default router
