<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item) in responseArray" :key="item.id" :offset="0">
        <el-card  @click.native="item.centerDialogVisible=!item.centerDialogVisible"> 
          
         
          <div><h3 class="title">题目编号:{{item.questionId}}</h3></div>
          <div class="questionDesc">题目内容:{{item.questionDesc}}</div> 
          
         
          <h4>分步步骤:</h4>
          <ol>
            <li v-for="(step,index) in item.solvingSteps" :key="index" class="step" >
              {{step}}
            </li>
          </ol>
          <div>
            <span>思路:{{item.details}}</span>
          </div>
        
         <div v-if="item.showAnswer">

             <div>分步答案:</div>
          <ol>
            <li v-for="(answer,index) in item.stepAnswer" :key="index" >
              {{answer}}
            </li>
          </ol>
         </div>
          </el-card>
          
         <el-dialog
            :title="'题目编号:'+item.questionId"
            :visible.sync="item.centerDialogVisible"
            width="60%"
            center>
          <div class="questionDesc">题目内容:{{item.questionDesc}}</div>
          <h4>分步步骤:</h4>
          <ol>
            <li v-for="(step,index) in item.solvingSteps" :key="index" class="step" >
              {{step}}
            </li>
          </ol>
          <div>
            <span>思路:{{item.details}}</span>
          </div>
         <el-button type="danger" round @click="item.showAnswer=!item.showAnswer">显示答案</el-button>
         <div v-if="item.showAnswer">

             <div>分步答案:</div>
          <ol>
            <li v-for="(answer,index) in item.stepAnswer" :key="index" >
              {{answer}}
            </li>
          </ol>
         </div>
          
            
           
         </el-dialog>
       
      </el-col>
    </el-row>



  </div>
</template>

<script>
export default {
  name:"detail",
  data(){
    return {
      responseArray:[
        {
          id:1,
          questionId:400,
          questionDesc:" 5+1等于5",
          solvingSteps:["先算括号","再算加法","在算最后结果"],
          details:"这道题先看到括号所以想到加法",
          stepAnswer:[2,15,24],
          showAnswer:false,
          centerDialogVisible:false

        },
         {
          id:2,
          questionId:400,
          questionDesc:" 5+1等于5",
          solvingSteps:["先算括号","再算加法","在算最后结果"],
          details:"这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法这道题先看到括号所以想到加法",
          stepAnswer:[2,15,24],
           showAnswer:false,
           centerDialogVisible:false
        },
         {
          id:3,
          questionId:400,
          questionDesc:" 5+1等于5",
          solvingSteps:["先算括号","再算加法","在算最后结果"],
          details:"这道题先看到括号所以想到加法",
          stepAnswer:[2,15,24],
           showAnswer:false,
           centerDialogVisible:false
        },
         {
          id:4,
          questionId:400,
          questionDesc:" 5+1等于5",
          solvingSteps:["先算括号","再算加法","在算最后结果"],
          details:"这道题先看到括号所以想到加法",
          stepAnswer:[2,15,24],
           showAnswer:false,
           centerDialogVisible:false
        },
         {
          id:5,
          questionId:400,
          questionDesc:" 5+1等于5",
          solvingSteps:["先算括号","再算加法","在算最后结果"],
          details:"这道题先看到括号所以想到加法",
          stepAnswer:[2,15,24],
           showAnswer:false,
           centerDialogVisible:false
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-card
       background: linear-gradient(to left, #FAD0C4 , #FF9A9E);
       height 400px
  .title  
    font-weight:600
    text-align center
    color #FFFFFF
  .questionDesc
    color:#606266
    padding-bottom:16px
  .step
    font-weight:600
 .el-dialog__body{
    overflow-y: auto;
  }
</style>