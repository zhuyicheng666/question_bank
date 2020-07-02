<template>
  <div class="table">
    <el-card shadow="always" class="tableCard">
      <h2 class="title">已选题目</h2>

      <el-table :data="pageTableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="完整描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column label="编号" prop="id"></el-table-column>

        <el-table-column label="难度" prop="level"></el-table-column>

        <el-table-column label="知识点" prop="knowledge"></el-table-column>

        <el-table-column label="描述">
          <template v-slot="scope">{{scope.row.desc|ellipsis}}</template>
        </el-table-column>

        <el-table-column label="操作(加入/取消)" width="200px">
          <template v-slot="scope">
            <el-button type="success" icon="el-icon-check" circle @click="chooseItem(scope.row)"></el-button>

            <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        layout="prev, pager, next"
        :total="this.$store.getters.getChoosedItemsNumber"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      ></el-pagination>

      <el-button type="primary" round icon="el-icon-arrow-left" class="back" @click="handleBack">返回</el-button>
      <el-button type="primary" round class="next" @click="handleNext">下一步 <i class="el-icon-arrow-right el-icon--right" ></i></el-button>
    </el-card>
  


  </div>
</template>



<script>
export default {
  name:'checkList',
  data() {
    return {
      currentPage: 0,
     
      
      pageSize:2,
      
      
    };
  },
  

  computed: {

  
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