<template>
  <div class="table">
    
      <el-table :data="pageTableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left"  class="demo-table-expand">
              <el-form-item label="完整题目描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item v-if="props.row.type === 'choice'">
                <ul>
                  <li>{{props.row.option1}}</li>
                  <li>{{props.row.option2}}</li>
                  <li>{{props.row.option3}}</li>
                  <li>{{props.row.option4}}</li>
                </ul>
              </el-form-item>
              <el-form-item label="查看答案和解析">
                <el-checkbox v-model="showAnswer"></el-checkbox>
              </el-form-item>
              <el-form-item label="答案:" v-if="showAnswer">
                <span>{{props.row.answer}}</span>
              </el-form-item>
               <el-form-item label="解析:" v-if="showAnswer">
                <span>{{props.row.resolution}}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>

        <el-table-column label="编号" prop="id"></el-table-column>
        <el-table-column label="难度" prop="level"  :filters="[{text:'1级',value:'1级'},{text:'2级',value:'2级'}]" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="章节" prop="chapter"  :filters="[{text:'加法',value:'加法'},{text:'减法',value:'减法'}]" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="知识点" prop="knowledge"  :filters="[{text:'二元一次方式解法',value:'二元一次方式解法'},{text:'2级',value:'2级'}]" :filter-method="filterHandler"></el-table-column>
        <el-table-column label="热度"  :filters="[{text:'1',value:'1'},{text:'2',value:'2'}]" :filter-method="filterHandler" >
           <template v-slot="scope">
              <el-rate
                v-model="scope.row.frequency"
                disabled
                show-score
                text-color="#ff9900"
              >
              </el-rate>
           </template>
         

        </el-table-column>
        <el-table-column label="题目描述">
          <template v-slot="scope">{{scope.row.desc|ellipsis}}</template>
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
  name:'questionRecord',
  data() {
    return {
      currentPage: 0,
     showAnswer:false,
      
      pageSize:5,
      
       tableData: [
        {
          id: "12987122",
          level: "1级",
          knowledge: "这是计算题",
          desc: "1+1等于2",
          chapter: "加法",
          frequency: "3",
          type:"choice",
           option1:'A:1',
          option2:'B:2',
          option3:'C:3',
          option4:'D:4',
           answer:'A',
          resolution:"这里是解析"
        },
        {
          id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
          chapter: "加法",
          frequency: "3",
          type:"choice",
             option1:'A:1',
          option2:'B:2',
          option3:'C:3',
          option4:'D:4',
          answer:'A',
          resolution:"这里是解析"
          
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5",
          chapter: "加法",
          frequency: "3",
          type:"choice",
            option1:'A:1',
          option2:'B:2',
          option3:'C:3',
          option4:'D:4',
           answer:'A',
          resolution:"这里是解析"
        },]
    };
  },
 

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
     filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
    tableRowClassName({ row }) {
      if (this.$store.state.choosedItems.includes(row.id)) {
        return "success-row";
      }
      return "";
    },
    chooseItem({ id }) {
      if (!this.$store.state.choosedItems.includes(id)) {
        this.$store.state.choosedItems.push(id);
      }
    },
    deleteItem({ id }) {
      let index = this.$store.state.choosedItems.indexOf(id);
      if (index !== -1) {
        this.$store.state.choosedItems.splice(index, 1);
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
  height: 90%;
  position: absolute;
}
.tableCard ul {
  list-style:none
} 
.el-pagination{
  text-align center
}


</style>