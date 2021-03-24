<template>
  <el-card class="searchPaper">
    <p class='tip'>以下为尚未作答试卷列表，如需查看已作答试卷请点击历史答题</p>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="pid" label="试卷编号" width="180"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="教师名" width="180">
      </el-table-column>
      <el-table-column prop="title" label="试卷名" width="180">
      </el-table-column>
      <el-table-column prop="time" label="考试时长" width="180">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >开始答题</el-button
          >
          
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  methods:{
    handleClick(row){
      let paperNO = row.paperNO
      console.log(paperNO)
       this.$router.push('/onlinePaper')
    }
  },
  created(){
      let me =this
      
      let queryArr ={
        sid:20210324
      } 
      me.$axios.post('http://localhost:3000/searchPaper',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                
                me.tableData = res.data.data
               
              
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
  },
  data() {
    return {
      tableData: [
       
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
  .searchPaper{
    width:1055px;
    
    margin: 0 auto
  }
  .tip{
    color:red
    font-size :14px

  }
</style>>
