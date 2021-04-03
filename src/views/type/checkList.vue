<template>
  <div class="table">
    <!-- <el-card shadow="always"  class="tableCard"> -->
      <h2 class="title">已选题目</h2>

     <Base ref="base"  :showDelete="true"  :tableData="tableData"/>

      <el-button type="primary" round icon="el-icon-arrow-left" class="back" @click="handleBack">返回</el-button>
      <el-button type="primary" round class="next" @click="handleNext" v-if="this.role==='teacher'">下一步 <i class="el-icon-arrow-right el-icon--right"  ></i></el-button>
    <!-- </el-card> -->
  


  </div>
</template>



<script>
import Base from "./base.vue"
export default {
  name:'checkList',
    components:{
     Base
    
   },
  data() {
    return {
      currentPage: 0,
      role:"student",
      
      pageSize:2,
       tableData: [
      ],
      
    };
  },
  

  computed: {

    // choosedItems:function(){
    //   return this.$store.state.choosedItems
    // },
    handleTableData: function() {
      let newTableData = [],
        cur = 0;

      while(cur<this.$store.getters.getChoosedItemsNumber)
      {

        if (cur+this.pageSize<=this.$store.getters.getChoosedItemsNumber){
        
        newTableData.push(this.$store.getters.getChoosedItemsQuesiton.slice(cur, cur+this.pageSize));
        
        }
        else{
          
            newTableData.push(this.$store.getters.getChoosedItemsQuesiton.slice(cur, this.$store.getters.getChoosedItemsNumber));
        }
        cur = cur + this.pageSize;
      }
    
      
      return newTableData;
    },
    pageTableData: function() {
      return this.handleTableData[this.currentPage];
    }
  },

  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      }
      return value;
    }
  },
  methods: {
    tableRowClassName({ row }) {
      if (this.$store.state.choosedItems.includes(row.id)) {
        return "success-row";
      }
      return "";
    },
    chooseItem({ id }) {
      this.$store.commit('add',{id})
    },
    deleteItem({ id }) {
      this.$store.commit('delete',{id})
    },

    handleCurrentChange(val) {
      this.currentPage = val - 1;
    },
    handleBack(){
      this.$router.go(-1)
    },
    handleNext(){
      this.$router.push('/generate')
    }
    
  },
  created(){
      let me =this
      
      let queryArr=this.$store.getters.getChoosedItems
      if(queryArr.length!==0){
         me.$axios.post('http://localhost:3000/loadAllById',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                 me.$store.commit('loadQuestion', res.data.data)
               
                
                 me.tableData = me.$store.getters.getChoosedItemsQuestion
                 console.log(me.tableData)
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
      }
     
  }

};
</script>

<style lang="stylus" scoped>
.title 
  text-align center
  color:#409EFF
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}

.el-table >>>.success-row {
  background: #f0f9eb;
}

.tableCard {
  width: 98%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  position: absolute;
}
.el-pagination{
  text-align center
}

.back,.next{
  position fixed
  top 50%
  
}

.back{
  left 0
  transform: translate(0,-100%);
}

.next{
  right 0
  transform: translate(0,-100%);
}


</style>