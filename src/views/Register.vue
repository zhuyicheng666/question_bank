<template >
  <div class="login_bg">

    <h1 class="title">试题库系统-用户注册</h1>

    <div class="login">
      <!--注册表单部分 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="ruleForm">

        <!-- 身份选择 -->
        <el-form-item label="身份" prop="role">
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="学生"></el-radio>
            <el-radio label="教师"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="手机号" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入手机号"></el-input>
        </el-form-item>
       <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入6-10位密码" show-password></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item label="请再次输入密码" prop="secondPassword">
          <el-input v-model="ruleForm.secondPassword" placeholder="请再次输入密码" show-password></el-input>
        </el-form-item>

        <!-- 注册，重置按钮部分 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 手动转跳登陆部分 -->
      <router-link to="/" class="to_register">返回登陆页面</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:"Register",
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
      //表单
      ruleForm: {
        name: "",
        password: "",
        role: "学生",
        secondPassword: ""
      },
      //规则
      rules: {
        name: [
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
        ]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
          return;
        } else {
        /* 发送get请求 路径'/register' 
            参数{角色，用户名，密码}
            返回 {}
        */
          this.$axios.post("/register", {
              role: this.ruleForm.role,
              name: this.ruleForm.name,
              password: this.ruleForm.password
            })
            .then(function() {      
              this.$message({
              message: '恭喜你，注册成功',
              type: 'success'
        });
               this.$router.push('/login')
            }.bind(this));
            
        }
      });
    },

    // 调用表单的resetFirels方法（自带）重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="stylus" scoped>
.login_bg {
  background-image: url('/img/login_bg4.jpg');
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: auto;

  .title {
    text-align: center;
    margin-top: 6%;
  }

  .to_register {
    color: #b7b9bd;
    text-decoration: none;
    float: right;
    margin-top: 6%;
    margin-right: 2%;
  }

  .login {
    width: 600px;
    height: 500px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;

    .ruleForm {
      margin-top: 80px;

      .el-input {
        width: 80%;
      }
    }
  }
}
</style>