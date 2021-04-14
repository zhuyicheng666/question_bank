<template>
  <div  >
    <el-collapse v-model="activeNames" >
  <el-collapse-item  name="1">
    <template slot="title">
    <h3>试卷历史</h3>
    </template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="pid" label="试卷编号" width="180"> </el-table-column>
      <el-table-column prop="date" label="答题日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="教师名" width="180">
      </el-table-column>
      <el-table-column prop="title" label="试卷名" width="180">
      </el-table-column>
      <el-table-column prop="time" label="考试用时" width="180">
      </el-table-column>
      <el-table-column prop="score" label="成绩" width="180">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看试卷</el-button
          >
          
        </template>
      </el-table-column>
    </el-table>
  </el-collapse-item>
  <el-collapse-item  name="2">
    <template slot="title">
    <h3>练习正确答题记录</h3>
    </template>
    <div>
      <questionRecord :tableData="rightAnswerRecord"/>
    </div>
    

  </el-collapse-item>
  <el-collapse-item  name="3">
  <template slot="title">
    <h3>练习错题记录</h3>
    </template>

<div>
      <questionRecord :tableData="wrongAnswerRecord"/>
    </div>
  </el-collapse-item>

</el-collapse>
  </div>
</template>

<script>
import questionRecord from './questionRecord'
export default {
  components:{
    questionRecord
  },
  methods:{
    handleClick(row){
        let queryArr= {
      sid:window.localStorage.getItem("sid"),
      pid:row.pid
    }
    let me =this
     me.$axios.post('http://localhost:3000/searchAnsweredPaperRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
              me.$store.commit('setAnsweredPaperRecord',res.data.data)
              me.$router.push({ name: 'stuWrongAnswer', params: res.data.data})
              
              }else{
                 console.log("保存失败") 
              }
            })
           
  
      
      
    }
  },
  data() {
      return {
        activeNames: ['1'],
        tableData: [
     

      ],
      rightAnswerRecord:[],
      wrongAnswerRecord:[]
      };
  },
  created(){
    let queryArr= {
      sid:window.localStorage.getItem("sid")
    }
    let me =this
     me.$axios.post('http://localhost:3000/searchPaperRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
            
               me.tableData=res.data.data
               
                
              }else{
                 console.log("保存失败") 
              }
            })


       me.$axios.post('http://localhost:3000/searchRightAnswerRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
            
               me.rightAnswerRecord=res.data.data
               
                
              }else{
                 console.log("保存失败") 
              }
            })

            
       me.$axios.post('http://localhost:3000/searchWrongAnswerRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
            
               me.wrongAnswerRecord=res.data.data
               
                
              }else{
                 console.log("保存失败") 
              }
            })
         
  }
}
</script>
<style lang="stylus" scoped>
.title
    font-size:18px
    font-weight:600
</style>