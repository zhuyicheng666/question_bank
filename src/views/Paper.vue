<template>
<el-card>
   <el-table
    :data="tableData"
    border
    >
    <el-table-column
      prop="id"
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
        
        <el-button type="text" size="small" class="button" @click="checkAnswer(scope.row)" >查看答案</el-button>
        <el-button type="text" size="small" class="button" @click="checkStuResult(scope.row)">查看学生答题情况</el-button>
      </template>
    </el-table-column>
  </el-table>
</el-card>
 
</template>

<script>
export default {
  methods:{
    
    checkStuResult(row){
      console.log(row)
      this.$router.push('/stuResult')
    },
    checkAnswer(row){
       console.log(row)
      this.$router.push('/answerPaper')
    }
  },
  data(){
    return {
         tableData: [{
          id:'123456',
          date: '2016-05-02',
          name: '王小虎',
          title: '2021年数学考试期末试卷'
        }, {
          id:'123456',
          date: '2016-05-02',
          name: '王小虎',
          title: '2021年数学考试期末试卷'
        }, {
          id:'123456',
          date: '2016-05-02',
          name: '王小虎',
          title: '2021年数学考试期末试卷'
        }, {
          id:'123456',
          date: '2016-05-02',
          name: '王小虎',
          title: '2021年数学考试期末试卷'
        }]
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