<template>

  <div>
    <countDown class="countDown"/>
    <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>

      <div class="Choice">
      <el-row>
        <el-col :offset="1"><h3>选择题(每题{{choiceData.value}}分)</h3></el-col>
      </el-row>

      <div v-for="(item,index) in choiceData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="18"><div>{{item.desc}}</div></el-col>
           <el-col :span="2">
             <img src="../assets/img/text.jpg" class="img">
           </el-col>
        </el-row>
          <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.stuAnswer"  label="A">A、{{item.option1}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.stuAnswer" label="B">B、{{item.option2}}</el-radio>
            </el-col>
            </el-row>
          <el-row>
            <el-col :offset="2">
             <el-radio v-model="item.stuAnswer" label="C">C、{{item.option3}}</el-radio>
            </el-col>
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.stuAnswer" label="D">D、{{item.option4}}</el-radio>
            </el-col>
            </el-row>
      </div>
      </div>

       <div class="Judge">
      <el-row>
        <el-col :offset="1"><h3>判断题(每题{{judgementData.value}}分)</h3></el-col>
      </el-row>

      <div v-for="(item,index) in judgementData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div>{{item.desc}}</div></el-col>
        </el-row>
          <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.stuAnswer" label="T">{{item.option1}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.stuAnswer" label="F">{{item.option2}}</el-radio>
            </el-col>
            </el-row>
      </div>
      </div>

    <el-button class="submit" @click="open">提交</el-button>

  </el-card>
  </div>
  
</template>
<script>
 import countDown from './countDown'
export default {
  components:{
     countDown
    
   },
  data(){
    return {
      title:'2021年数学期末考试题目',
      choiceData:{
        value:4,
        getValue:0,
        data:[
          {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:optionA",
          option2:"B:optionB",
          option3:"C:optionC",
          option4:"D:optionD",
          answer:"A",
          type:"choice"
          },
          {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:optionA",
          option2:"B:optionB",
          option3:"C:optionC",
          option4:"D:optionD",
          answer:"A",
          type:"choice"
          }
         
        ]
      },
      judgementData:{
        value:3,
        getValue:0,
        data:[
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },
           {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          },

        ]
      }
      }
    },
  methods:{
    isFinished(){
      let chocieUnfinished=[],judgementUnfinished=[]
      this.choiceData.data.forEach((item,index)=>{
        if(!item.stuAnswer){
          chocieUnfinished.push(index+1)
        }
      })
      this.judgementData.data.forEach((item,index)=>{
        if(!item.stuAnswer){
          judgementUnfinished.push(index+1)
        }
      })
      return {chocieUnfinished,judgementUnfinished}
    },

    open(){
      let result = this.isFinished()
      let msg=''
      if(result.chocieUnfinished.length === 0 && result.judgementUnfinished.length === 0){
        msg='试卷已全部答完'
      }else{
        if (!(result.chocieUnfinished.length === 0) ){
          msg=msg+"选择题"
          result.chocieUnfinished.forEach((item)=>{
            msg=msg+"第"+item+"题 "
          })
        }
        if (!(result.judgementUnfinished.length === 0) ){
          msg=msg+"判断题"
          result.judgementUnfinished.forEach((item)=>{
            msg=msg+"第"+item+"题 "
          })
        }
        msg=msg+"未答完"
      }
        this.$confirm(msg, '提示', {
          confirmButtonText: '确定提交',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // let result = this.judge()
          this.$message({
            type: 'success',
            // message: result.score,
            message: "成绩为100分"
          });
           this.$router.push('/searchPaper')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
      
    },
    judge(){
      let score=0, error=[]
      this.choiceData.data.forEach((item)=>{
        if(item.stuAnswer !== item.answer){
          error.push(item)
        }else{
          score=score+this.choiceData.value
        }
      })
      this.judgementData.data.forEach((item)=>{
        if(item.stuAnswer !== item.answer){
          error.push(item)
        }else{
          score=score+this.judgementData.value
        }
      })
      return {
        score,error
      }
    }
  }
  
}
</script>
<style  lang="stylus" scoped>
  .title{
    margin:0 auto;
    text-align: center;
  }
  .marginBottom{
      margin-bottom: 15px
    }
  .line{
      font-size:18px
      word-wrap:break-word
      word-break:normal
    }
  .submit{
    display: block;
    margin:0 auto;
  }
  .countDown{
    position :fixed
    z-index 99
    right 20px
    top 0
  }
  .img{
    width:200px
    height:200px
  }
</style>