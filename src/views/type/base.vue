<template>
  <div class="table">
    <el-card shadow="always" class="tableCard">
      
 <el-table :data="pageTableData" style="width: 100%" :row-class-name="tableRowClassName" highlight-current-row:false>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"  class="demo-table-expand" >
              <!-- <el-form-item label="完整题目描述">
                <span>{{ props.row.question }}</span>
              </el-form-item>
              <el-form-item v-if="props.row.type === 'choice'">
                <ul>
                  <li>A: {{props.row.optionA}}</li>
                  <li>A: {{props.row.optionB}}</li>
                  <li>C: {{props.row.optionC}}</li>
                  <li>D: {{props.row.optionD}}</li>
                </ul>
              </el-form-item>
              <el-form-item v-if="props.row.type === 'judgement'">
                <ul>
                  <li> {{props.row.optionA}}</li>
                  <li> {{props.row.optionB}}</li>
                </ul>
              </el-form-item> -->
              <div v-if="window.localStorage.getItem('role')!=='student'">
              <!-- <el-form-item label="查看答案" >
                <el-checkbox v-model="showAnswer[props.$index]"></el-checkbox>
              </el-form-item> -->
              <el-form-item label="答案:" >

                <!-- <span>{{props.row.answer}}</span> -->
                 <span>{{dataFormat(props.row.type,props.row.answer)}}</span>
              </el-form-item>
              </div>
             <div v-if="window.localStorage.getItem('role')!=='student'">
            <!-- <el-form-item label="查看解析">
                <el-checkbox v-model="showProcess[props.$index]"></el-checkbox>
                </el-form-item> -->
              <el-form-item label="解析:" v-if="props.row.text !== null">

                <!-- <span>{{props.row.answer}}</span> -->
                 <span v-html="props.row.text"></span>
              </el-form-item>
            </div>


            </el-form>
          </template>
        </el-table-column>

        <el-table-column label="编号" prop="qid" width=60></el-table-column>
   <!--      <el-table-column label="难度" prop="difficulty" :formatter="dateFormat" :filters="[{text:'简单',value:1},{text:'中等',value:2},{text:'困难',value:3}]" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="章节" prop="chapter"  :filters="getChapter" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="知识点" prop="knowledgePoint"  :filters="getKnowledgePoint" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="热度"  :filters="[{text:'1星',value:1},{text:'2星',value:2},{text:'3星',value:3},{text:'4星',value:4},{text:'5星',value:5},]" :filter-method="filterHandler" >
           <template v-slot="scope">
              <el-rate
                v-model="scope.row.citations"
                disabled
                show-score
                text-color="#ff9900"
              >
              </el-rate>
           </template>
         

        </el-table-column> -->
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

        <el-table-column label="操作(加入自选)" width="200px">
          <template v-slot="scope">
            <el-button v-show="!showDelete &&!scope.row.show" type="success" icon="el-icon-check" circle @click="chooseItem(scope.row)"></el-button>

            <el-button  v-show="showDelete" type="danger" icon="el-icon-delete" circle @click="deleteItem(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    
     
      <el-pagination
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </el-card>
  


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
      window:window
      
    };
  },
  props:['tableData','showChoose','showDelete'],
  
  computed: {

    

    getChapter: function() {

      let resultArr=[],result=[],item
      for (let i =0;i<this.tableData.length;i++){
        if(resultArr.indexOf(this.tableData[i].chapter)===-1){
          resultArr.push(this.tableData[i].chapter)
          item={text:this.tableData[i].chapter,value:this.tableData[i].chapter}
          result.push(item)
        }
      
      }
      return result
    },

     getKnowledgePoint: function() {

      let resultArr=[],result=[],item
      for (let i =0;i<this.tableData.length;i++){
        if(resultArr.indexOf(this.tableData[i].knowledgePoint)===-1){
          resultArr.push(this.tableData[i].knowledgePoint)
          item={text:this.tableData[i].knowledgePoint,value:this.tableData[i].knowledgePoint}
          result.push(item)
        }
      
      }
      return result
    },
  
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

    dataFormat(type,answer){
      if(type ==="judgement" && answer === "T"||answer==="True"){
        return "True"
      }else if(type ==="judgement" && answer === "F"||answer==="False"){
        return "False"
      }else {
        return answer
      }
    },
    dateFormat(row,col){
      let difficulty = row[col.property]
      if(difficulty===1){
        return "简单"
      }else if (difficulty===2){
        return "中等"
      }else{
        return"困难"
      }
    },
     filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    tableRowClassName({ row }) {
      
      if (this.$store.getters.getChoosedItems.includes(row.qid)) {
        return "success-row";
      }
      return "";
    },
    chooseItem(row) {
      let qid = row.qid
      
      this.$set( row, 'show', true )
      this.$store.commit('add',qid)
    },
    deleteItem({ qid }) {
      this.$store.commit('delete',qid)
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