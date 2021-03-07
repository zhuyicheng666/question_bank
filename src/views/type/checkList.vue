<template>
  <div class="table">
    <el-card shadow="always" class="tableCard">
      <h2 class="title">已选题目</h2>

     <Base ref="base" :showChoose="false" :tableData="tableData"/>

      <el-button type="primary" round icon="el-icon-arrow-left" class="back" @click="handleBack">返回</el-button>
      <el-button type="primary" round class="next" @click="handleNext" v-if="this.role==='teacher'">下一步 <i class="el-icon-arrow-right el-icon--right"  ></i></el-button>
    </el-card>
  


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
     role:"teacher",
      
      pageSize:2,
       tableData: [
        {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2",
          chapter: "加法",
          frequency: 3,
          option1:"A:optionA",
          option2:"B:optionB",
          option3:"C:optionC",
          option4:"D:optionD",
          answer:"A",
           type:"choice"
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5",
           chapter: "加法",
          frequency: 3,
          option1:"A:optionA",
          option2:"B:optionB",
          option3:"C:optionC",
          option4:"D:optionD",
          answer:"A",
           type:"choice"
        },
        {
          id: "129",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515",
             chapter: "加法",
          frequency: 3,
          option1:"A:optionA",
          option2:"B:optionB",
          option3:"C:optionC",
          option4:"D:optionD",
          answer:"A",
           type:"choice"
        },
        {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"},
           {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"},
           {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"}
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
        
        newTableData.push(this.$store.state.choosedItems.slice(cur, cur+this.pageSize));
        
        }
        else{
          
            newTableData.push(this.$store.state.choosedItems.slice(cur, this.$store.getters.getChoosedItemsNumber));
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
  height: 90%;
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