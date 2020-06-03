import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/home',
    name: 'Home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//挂载路由导航守卫（必须登陆后再能访问其他页面）
router.beforeEach((to,from,next)=>{
  //to 将要访问的路径
  //from 代表从哪个路径跳转
  //next是一个函数表示放行 
  // next（）放行 next（'/login'）强制跳转

  if(to.path==='/login')return next()
  if(to.path==='/register') return next()
  
  //通过token判断有无登陆
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) {return next('/login')}
  else {
    return next()
  }

})

export default router
