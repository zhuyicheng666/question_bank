<template>
  <div class="table">
   
      
 <el-table :data="pageTableData" style="width: 100%"  highlight-current-row:false>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"  class="demo-table-expand" >
                           <el-form-item label="章节:">

                 <span v-html="props.row.chapter"></span>
              </el-form-item>
   <el-form-item label="知识点:">

                 <span v-html="props.row.knowledgePoint"></span>
              </el-form-item>

  <el-form-item label="难度:">

                 <span v-html="dateFormat(props.row.difficulty)"></span>
              </el-form-item>

              <el-form-item label="我的答案:">

                 <span v-html="props.row.stuAnswer"></span>
              </el-form-item>

              <el-form-item label="查看答案">
                <el-checkbox v-model="showAnswer[props.$index]"></el-checkbox>
              </el-form-item>
              <el-form-item label="答案:" v-if="showAnswer[props.$index]">

               
                 <span>{{dataFormat(props.row.type,props.row.answer)}}</span>
              </el-form-item>


            <el-form-item label="查看解析">
                <el-checkbox v-model="showProcess[props.$index]"></el-checkbox>
                </el-form-item>
              <el-form-item label="解析:" v-if="showProcess[props.$index]">

                 <span v-html="props.row.text"></span>
              </el-form-item>



            </el-form>
          </template>
        </el-table-column>

        <el-table-column label="编号" prop="qid" width=60></el-table-column>

        <el-table-column label="题目描述" >
          <template v-slot="scope" >
            <div v-html="scope.row.question" class="question"></div>
            
            <div>
              <div v-if="scope.row.type === 'choice'">
                   <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>A.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionA" class="option"></span>
                    </el-col>
                  </el-row>
                  <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>B.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionB" class="option"></span>
                    </el-col>
                  </el-row>
                   <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>C.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionC" class="option"></span>
                    </el-col>
                  </el-row>
                   <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>D.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionD" class="option"></span>
                    </el-col>
                  </el-row>
                  
                  
               
              </div>
              <div v-if="scope.row.type === 'judgement'">
                <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>A.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionA" class="option"></span>
                    </el-col>
                  </el-row>
                  <el-row type="flex" align="middle">
                    <el-col :span='1'>
                        <el-radio>B.</el-radio>
                    </el-col>
                    <el-col :span='23'>
                      <span v-html="scope.row.optionB" class="option"></span>
                    </el-col>
                  </el-row>
              </div>
            </div>
           
          </template>
        </el-table-column>

       
      </el-table>
    
     
      <el-pagination
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
   
  


  </div>
</template>



<script>
export default {
  name:'Base',
  data() {
    return {
      currentPage: 0,
     showAnswer:[],
      showProcess:[],
      pageSize:5,
     
      
    };
  },

  props:['tableData'],
  computed: {

    

  
    handleTableData: function() {
      let newTableData = [],
        cur = 0;

      while(cur<this.tableData.length)
      {

        if (cur+this.pageSize<=this.tableData.length){
        
        newTableData.push(this.tableData.slice(cur, cur+this.pageSize));
        
        }
        else{
          
            newTableData.push(this.tableData.slice(cur, this.tableData.length));
        }
        cur = cur + this.pageSize;
      }
    
      
      return newTableData;
    },
    pageTableData: function() {
      return this.handleTableData[this.currentPage];
    }
  },

 
  methods: {

 dateFormat(difficulty){
     
      if(difficulty===1){
        return "简单"
      }else if (difficulty===2){
        return "中等"
      }else{
        return"困难"
      }
    },
    dataFormat(type,answer){
      if(type ==="judgement" && answer === "T"||answer==="True"){
        return "True"
      }else if(type ==="judgement" && answer === "F"||answer==="False"){
        return "False"
      }else {
        return answer
      }
    },
 
    handleCurrentChange(val) {
      this.currentPage = val - 1;
    },

  }
};
</script>

<style lang="stylus" scoped>
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
  // height: 90%;
  position: absolute;
}
.tableCard ul {
  list-style:none
} 
.el-pagination{
  text-align center
}
.question{
  font-size 20px
  font-weight 500
}

</style>