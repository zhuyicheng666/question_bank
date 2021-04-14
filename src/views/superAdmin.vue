<template>
<div>
<div  class="logout">
            <el-button @click="logout" >退出</el-button>
     </div>

  <el-card class="card">
  


      <el-collapse v-model="activeName" accordion>
  <el-collapse-item title="章节管理" name="1">
   
      <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>章节名称</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible=true">增加</el-button>
  </div>
  <div v-for="o in chapterOption" :key="o.value" class="text item">
    {{ o.value }}
  </div>
</el-card>




  </el-collapse-item>
  <el-collapse-item title="教师账号注册" name="2">
   
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="ruleForm">

        <!-- 身份选择 -->
        <el-form-item label="身份" prop="role">
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="教师"></el-radio>
           
          </el-radio-group>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="手机号" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入手机号"></el-input>
        </el-form-item>
       <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入6-10位密码" show-password></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="请再次输入密码" prop="secondPassword">
          <el-input v-model="ruleForm.secondPassword" placeholder="请再次输入密码" show-password></el-input>
        </el-form-item>
        
        <el-form-item label="名字" prop="name" >
          <el-input v-model="ruleForm.name" placeholder="请输入名字" ></el-input>
        </el-form-item>


        <!-- 注册，重置按钮部分 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>






  </el-collapse-item>
 
</el-collapse>

 <el-dialog title="添加章节" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="章节名称" >
      <el-input v-model="form.chapter" autocomplete="off"  ></el-input>
    </el-form-item>
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="addChapter"  >确 定</el-button>
  </div>
</el-dialog>


  </el-card>
  </div>
</template>


<script>
  export default {
  




    data() {
    
    //这是一个自定义验证规则 其中reg一个判单11个数字的正则表达式
    var validatePass = (rule, value, callback) => {
      let reg = /^\d{11}$/g;
      if (!reg.test(value)) {
        callback(new Error("请输入11位数字"));
      } else {
        callback();
      }
    };

    //这是一个自定义验证规则 判断两次输出密码一致
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form:{
        chapter:''
      },
      dialogFormVisible:false,
      chapterOption:[],
      //表单
      ruleForm: {
        userName: "",
        password: "",
        role: "教师",
        secondPassword: "",
        
        name:''
      },
       activeName: '1',
      //规则
      rules: {
        userName: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],
        secondPassword: [
          { required: true, message: "两次密码不一致", trigger: "blur" },
          {min: 6, max: 10, message: "长度在 6 到 10 个字符",trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],

        role: [
          { required: true, message: "请选择角色", trigger: "blur" }
        ],
        name:  [
          { required: true, message: "请输入名字", trigger: "blur" }
        ]
      }
    };
  },

  created(){
     let me =this
          me.$axios.post('http://localhost:3000/getChapter').then(


            function(res){
              if (res.data.code===200){
                 res.data.data.forEach(item=>{
                    me.chapterOption.push({
                      value:item.chapter,
                      label:item.chapter
                    })
                    
                 })


              }
            }
           
          )
  },
  methods: {
    cancel(){
      this.dialogFormVisible = false;
     this.form.chapter=""
    },
     //退出
    logout(){
      // 清空sessionStorage的token
      window.sessionStorage.clear()
      // 转跳到登陆页面
      this.$router.push('/login')
    },
    addChapter(){
         let me =this
         let queryArr={
           chapter:this.form.chapter
         }
          me.$axios.post('http://localhost:3000/addChapter',{data:queryArr}).then(


            function(res){
              if (res.data.code===200){
               
                me.chapterOption.push({
                  
                      value:me.form.chapter,
                      label:me.form.chapter
                    
                })
              me.dialogFormVisible=false
              me.form.chapter=""
              }else{
                   me.$message({
                    message: '已存在,添加失败',
                    type: 'warn'
                  });
              }
            }
           
          )
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return;
        } else {
        /* 发送get请求 路径'/register' 
            参数{角色，用户名，密码}
            返回 {}
        */


          this.$axios.post("http://localhost:3000/register", {data:{
              role: this.ruleForm.role==='学生'?'student':'teacher',
              userName: this.ruleForm.userName,
              password: this.ruleForm.password,
              name:this.ruleForm.name,
             

          }
            
            })
            .then(function(res) {
              if(res.data.code===200){
                  this.$message({
              message: '恭喜你，注册成功',
              type: 'success'
             });
               this.resetForm('ruleForm')
              }else{
                this.$message({
              message: res.data.message,
              type: 'error'
              });
              this.resetForm('ruleForm')
              }
            
            }.bind(this));
            
        }
      });
    },

    // 调用表单的resetFirels方法（自带）重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
  }
</script>
<style  scoped>
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .card{
    width: 90%;
    margin: 0 auto;
  }
  .logout{
    float:right;
    margin-bottom:10px

  }
</style>
