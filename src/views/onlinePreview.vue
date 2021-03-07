<template>

  <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>

      <div class="Choice">
      <el-row>
        <el-col :offset="1"><h3>选择题(每题{{choiceData.value}}分)</h3></el-col>
      </el-row>

      <div v-for="(item,index) in choiceData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div>{{item.desc}}</div></el-col>
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

    <el-button class="submit" @click="open">发送给学生</el-button>

  </el-card>
</template>
<script>
export default {
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
          desc: "1+1等于2( )",
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
      
        this.$message({
          message: '恭喜你，发送成功',
          type: 'success'
        });

        this.$router.push('/paper')
      
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
</style>