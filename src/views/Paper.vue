<template>
<el-card>
  <el-row type="flex" justify="center" >
    <el-col :span="12">
      <el-table
    :data="tableData"
  
    >
    <el-table-column
      prop="pid"
      label="编号"
      width="120">
    </el-table-column>
     <el-table-column
      prop="title"
      label="试卷名字"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="出题人"
      width="120">
    </el-table-column>
    
    <el-table-column
     
      label="操作"
      width="200">
      <template slot-scope="scope">
        
        <el-button type="text" size="small" class="button" @click="checkAnswer(scope.row)" >查看试卷详情</el-button>
        <el-button type="text" size="small" class="button" @click="checkStuResult(scope.row)">查看学生答题情况</el-button>
      </template>
    </el-table-column>
    </el-table>
    </el-col>
  </el-row>
   
</el-card>
 
</template>

<script>
export default {
  methods:{
    
    checkStuResult(row){
      let me =this
      let queryArr={"pid":row.pid}
      me.$axios.post('http://localhost:3000/loadAllStuResult',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
              
               
            
               me.$router.push({ name: 'stuResult', params: {result:res.data.data}})
                
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
    },
    checkAnswer(row){
      let me =this
      let queryArr={"pid":row.pid}
      me.$axios.post('http://localhost:3000/loadPaper',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
              
                // me.$router.push('/answerPaper')
                console.log(res.data.data)
                 me.$router.push({ name: 'answerPaper', params: res.data.data})
                
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
     
    }
  },
  created(){
      let me =this,tid=20210321
      let queryArr={"tid":tid}
      me.$axios.post('http://localhost:3000/loadAllPaper',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
              
                me.tableData=res.data.data
                
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
  },
  data(){
    return {
         tableData: []
    }
  }
}
</script>

<style lang="stylus" scoped>
  .button{
    display :block;
    margin-left: 10px
  }
</style>