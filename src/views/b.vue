<template>
  <div>
    <aa ref="aa" />
    <button @click="get">chen</button>
    {{msg}}

     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column>
        <template v-slot="scope">
          <a href="#">{{scope.row.name}}</a>
        </template>
      </el-table-column>
      <el-table-column>
        <template v-slot="scope">
            <el-button type="success" icon="el-icon-check" circle @click="chooseItem(scope.row)"></el-button>
        </template>
            
         
  
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
import aa from "./a.vue"
import {b} from './b.js'
export default {
  components:{
    aa
  },
  data(){
    return {
      msg:"",
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
    
  },
methods:{
  get(){
    this.msg=this.$refs.aa.child
  },
  chooseItem(){
    console.log(b)
  }
},
mounted(){
  this.get();
  
}


}
</script>/