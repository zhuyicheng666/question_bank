<template >
  <div class="login_bg">
    
    <h1 class="title">试题库系统</h1>


     <div class="login" >
       <!-- 角色切换部分 -->
        <el-radio-group v-model="role" >
          <el-radio-button label="学生入口" ></el-radio-button>
          <el-radio-button label="教师入口"  ></el-radio-button>
        </el-radio-group>

      <!-- 用户名 密码 登陆部分 -->

        <!-- hide-required-asterisk用来控制前面必填框的小星星，注需要前面加： -->
        <!-- label-width表单宽度不再需要css改 -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm"  :hide-required-asterisk="true">

          <!-- prop属性对于规则 -->
          <el-form-item label="手机号" prop="userName">
            <el-input v-model="ruleForm.userName" placeholder="请输入手机号"></el-input>
          </el-form-item>

          <!-- show-password控制密码不可见 -->
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>

        </el-form>
        
        <!-- 转跳注册部分 -->
       
        <router-link to="/register" class="to_register" v-if=" role === '学生入口'" 

        >没有账户？立即注册一个</router-link>
     </div>
  </div>

</template>

<script>

export default {
  name:"Login",
  data(){
         
         //这是一个自定义验证规则 其中reg一个判单11个数字的正则表达式

         var validatePass = (rule, value, callback) => {
           let reg=/^\d{11}$/g
           if (!reg.test(value)){
             callback(new Error('请输入11位数字'))
           }
           else{
             callback()
           }
 
       

      }; 

    return{
        //角色切换
        role:"学生入口",
        //表单
        ruleForm: {
          role:'学生',
          userName: '',
          password:''
        },
        //表单规则
        rules: {

          userName: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { validator:validatePass, trigger:'blur'}
            
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ]
          
        }
    }
  },
  watch:{
    role(){
      if (this.role==="学生入口"){
        this.ruleForm.role="学生"
      }else{
         this.ruleForm.role="教师"
      }
      
    }
  },
  methods: {
    submitForm(formName) {
      let me =this
      me.$refs[formName].validate((valid) => {
        if (!valid) {
         return false;
        } 
        else {
        /* 发送get请求 路径'/login' 
            参数{用户名，密码}
            返回 {token}

        */
         me.$axios.post('http://localhost:3000/login',{data:me.ruleForm})
         .then(function(res){
          
             //  1.登陆成功后，保存token到sessionStorage
             //  2.通过编程式导航转跳到主页面
             //  注：由于this问题，需要在函数后面bind
          if(res.data.code===200){
            window.sessionStorage.setItem('token','res.data.token');
            
            
            if (res.data.data.role ==="teacher"){
              window.localStorage.setItem('tid',res.data.data.tid),
              window.localStorage.setItem('role',res.data.data.role)
               me.$router.push('/teacherIndex')
            }else if (res.data.data.role ==="student"){
              window.localStorage.setItem('sid',res.data.data.sid),
              window.localStorage.setItem('role',res.data.data.role)
               me.$router.push('/studentIndex')
            }else{
               me.$router.push('/superAdmin')
            }
           
           
          }else{
            alert('用户名或密码不正确')
            me.resetForm('ruleForm')
          }
          
         }.bind(me)
        
         )
        }
      });
    },
    // 调用表单的resetFirels方法（自带）重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },

}
</script>

<style lang="stylus" scoped>

  //切换角色部分由于样式通过 穿透 更改
  .login>>>.el-radio-button__inner
      width 100%
      color  #b7b9bd
  .login>>>.el-radio-button__orig-radio:checked+.el-radio-button__inner
        color black
        background-color #fff
        border-color  #fff
        box-shadow -1px 0 0 0 #fff

  //背景图片全屏
  .login_bg
    background-image  url('/img/login_bg4.jpg')
    background-size cover
    position fixed
    height 100%
    width 100%
    overflow: auto;

    .title
      text-align center
      margin-top 6%

    .to_register
      color #b7b9bd
      text-decoration  none 
      float:right
      margin-top 6%
      margin-right 2%

    //垂直水平居中，登陆表单
    .login
      width 450px
      height 400px
      background-color #ffffff
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      border-radius 4px 
     
      //切换角色部分样式
      .el-radio-group
        width 100%
        .el-radio-button
          width 50%
    
      //表单部分样式
      .ruleForm
        margin-top :80px
        .el-input
          width:80%



</style>