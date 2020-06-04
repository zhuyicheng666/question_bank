<template>
  <div>
 <el-row>
      
  <el-col :span="12" :offset="6">
    <!-- 导航条部分 -->
            <div>
              <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                 menu-trigger="click"
              >
                
                    <el-menu-item index="1">我的数据</el-menu-item>
                 

              
                    <el-submenu index="2">
                    
                      <template slot="title">题目类型</template>
                    
                      <el-menu-item index="2-1">选择</el-menu-item>
                      <el-menu-item index="2-2">填空</el-menu-item>
                      <el-menu-item index="2-3">判断</el-menu-item>
                      <el-menu-item index="2-4">计算</el-menu-item> 
                  
                    </el-submenu>
              
              

            
                    <el-menu-item index="3">我要发布</el-menu-item>
            

              
                    <el-menu-item index="4">
                      社区中心
                    </el-menu-item>
               

              
              </el-menu>
            </div>
  </el-col>
</el-row>
   
   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="stylus" scoped>
 .el-menu-item
  display inline-block
  width 25%
 .el-submenu
  display inline-block
  width 25%
</style>