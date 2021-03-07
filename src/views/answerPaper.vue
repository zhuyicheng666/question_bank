<template>

  <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>

      <div class="Choice">
      <el-row>
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>

      <div v-for="(item,index) in choiceData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div>{{item.desc}}</div></el-col>
        </el-row>
          <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.answer" :disabled="disabled(item.answer,'A')" label="A">A、{{item.option1}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer" :disabled="disabled(item.answer,'B')" label="B">B、{{item.option2}}</el-radio>
            </el-col>
            </el-row>
          <el-row>
            <el-col :offset="2">
             <el-radio v-model="item.answer" :disabled="disabled(item.answer,'C')" label="C">C、{{item.option3}}</el-radio>
            </el-col>
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer" :disabled="disabled(item.answer,'D')" label="D">D、{{item.option4}}</el-radio>
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
               <el-radio v-model="item.answer"  :disabled="disabled(item.answer,'T')" label="T">{{item.option1}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer"  :disabled="disabled(item.answer,'F')" label="F">{{item.option2}}</el-radio>
            </el-col>
            </el-row>
      </div>
      </div>

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
          answer:"D",
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
          answer:"T",
          type:"judge"
          },
        ]
      }
      }
    },
  methods:{
   
 
    disabled(value,value2){
      if(value === value2){
        return false
      }else{
        return true
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