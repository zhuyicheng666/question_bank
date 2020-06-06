<template>
  <div class="table">
    <el-card shadow="always" class="tableCard">
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
     
      choosedItems: [],
      pageSize:2,
      
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
      if (this.choosedItems.includes(row.id)) {
        return "success-row";
      }
      return "";
    },
    chooseItem({ id }) {
      if (!this.choosedItems.includes(id)) {
        this.choosedItems.push(id);
      }
    },
    deleteItem({ id }) {
      let index = this.choosedItems.indexOf(id);
      if (index !== -1) {
        this.choosedItems.splice(index, 1);
      }
    },

    handleCurrentChange(val) {
      this.currentPage = val - 1;
    }
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
.el-pagination
  text-align center
</style>