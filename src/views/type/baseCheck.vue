
<template>
  <div>
  
    <Base ref="base"  :showChoose="true" :tableData="tableData"/>
      <!-- 已选题目的小图标按钮 -->
    <div class="checkList" @click="handleCheckListClick">
      <el-badge :value="this.$store.getters.getChoosedItemsNumber" class="item">
        <i class="el-icon-s-claim"></i>
      </el-badge>
    </div>
   

  </div>
</template>

<script>
import Base from "./base.vue"
export default {
  name:"baseCheck",
   components:{
     Base
    
   },
   data(){
     return {
       
     }
   },

 methods:{
     handleCheckListClick(){
      this.$router.push('/checkList')
     },
    
    
  },

  


 props:['tableData'],
}
</script>
<style lang="stylus" scoped>
.checkList{
  position fixed
  right 0
  top 50%
  transform: translate(-50%,-100%);
 
  width 60px
  height 60px
 

  line-height 60px
  font-size:60px
}
</style>
