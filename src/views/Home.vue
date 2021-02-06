<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header height="57px">
        <el-row>
          <el-col :span="12" :offset="6" >
            <!-- 导航条部分 -->
            <div>
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                text-color="#409EFF"
               
                :router="true"
               
                
              >
               
                  
                    <!-- <el-menu-item index="/data"  >我的数据</el-menu-item> -->
                

                  
                    <el-submenu index="/type" >
                      <template slot="title">题目类型</template>
                      
                      <el-menu-item index="/type-choice"  style="width:100px">选择</el-menu-item>
                      <!-- <el-menu-item index="/type-fill">填空</el-menu-item> -->
                      <el-menu-item index="/type-judge">判断</el-menu-item>
                      <!-- <el-menu-item index="/type-calculate">计算</el-menu-item> -->
                    </el-submenu>
                 

                 
                    <el-menu-item index="/release">我要发布</el-menu-item>
                  

                 
                    <!-- <el-menu-item index="/community">
                      社区中心
                    </el-menu-item> -->
                 
               
              </el-menu>
            </div>
          </el-col>

          <!-- 退出部分 -->
          <el-col :span="1" :offset="5" class="logout">
            <el-button @click="logout" >退出</el-button>
          </el-col>
        </el-row>
      </el-header>

      <!-- 内容区域 -->
    <el-main>
        
        <router-view>

        </router-view>
      
     </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name:"Home",
  data() {
    return {
      activeIndex: "/data"
    };
  },
  methods: {
   
    //退出
    logout(){
      // 清空sessionStorage的token
      window.sessionStorage.clear()
      // 转跳到登陆页面
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="stylus" scoped>

.el-row
  height 100%
  .el-col 
    height 100%
    .el-menu-demo
      .el-menu-item,.el-submenu
        display inline-block
        width 25%
   
    
    .el-menu-item,.el-submenu {
      text-align: center;
      font-size:18px
      font-weight:530
    }
    .el-submenu>>>.el-submenu__title
      font-size:18px
      font-weight:530
   

  .logout {
    
    display flex
    align-items center
    }
.el-header 
  margin-bottom :10px
 
</style>