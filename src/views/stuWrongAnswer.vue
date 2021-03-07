<template>

  <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>
      <h4 class="tip">提示：红色选项为学生错误答案，蓝色选项为题目正确答案!</h4>
      <div class="Choice">
      <el-row>
        <el-col ><h3>选择题</h3></el-col>
      </el-row>

      <div v-for="(item,index) in choiceData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="20"><div>{{item.desc}}</div></el-col>
        </el-row>
          <el-row >
            <el-col >
               <el-checkbox :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'A',item.answer) }" :checked="answer2Checkbox(item.answer,'A',item.stuAnswer)" :disabled="disabled(item.answer,'A',item.stuAnswer)" >A、{{item.option1}}</el-checkbox>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col >
              <el-checkbox :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'B',item.answer) }" :checked="answer2Checkbox(item.answer,'B',item.stuAnswer)" :disabled="disabled(item.answer,'B',item.stuAnswer)" >B、{{item.option2}}</el-checkbox>
            </el-col>
            </el-row>
          <el-row>
            <el-col>
             <el-checkbox :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'C',item.answer) }" :checked="answer2Checkbox(item.answer,'C',item.stuAnswer)" :disabled="disabled(item.answer,'C',item.stuAnswer)" >C、{{item.option3}}</el-checkbox>
            </el-col>
            </el-row>
          <el-row >
            <el-col >
              <el-checkbox  :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'D',item.answer) }" :checked="answer2Checkbox(item.answer,'D',item.stuAnswer)" :disabled="disabled(item.answer,'D',item.stuAnswer)">D、{{item.option4}}</el-checkbox>
            </el-col>
            </el-row>
      </div>
      </div>

       <div class="Judge">
      <el-row>
        <el-col ><h3>判断题(每题{{judgementData.value}}分)</h3></el-col>
      </el-row>

      <div v-for="(item,index) in judgementData.data" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="20"><div>{{item.desc}}</div></el-col>
        </el-row>
          <el-row >
            <el-col >
               <el-checkbox  :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'T',item.answer) }" :checked="answer2Checkbox(item.answer,'F',item.stuAnswer)" :disabled="disabled(item.answer,'T',item.stuAnswer)" >{{item.option1}}</el-checkbox>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col >
              <el-checkbox  :class="{ 'wrong': answer2CheckboxCss(item.stuAnswer,'F',item.answer) }" :checked="answer2Checkbox(item.answer,'F',item.stuAnswer)"  :disabled="disabled(item.answer,'F',item.stuAnswer)" >{{item.option2}}</el-checkbox>
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
          type:"choice",
          stuAnswer:"D"
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
          type:"choice",
          stuAnswer:"D"
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
          type:"judge",
          stuAnswer:"F"
          },
        ]
      }
      }
    },
  methods:{
   
 
    disabled(value,value2,value3){
      if(value === value2|| value3===value2){
        return false
      }else{
        return true
      }
    },
     answer2Checkbox(value,value2,value3){
      if(value === value2|| value3===value2){
        return true
      }else{
        return false
      }
    },
        answer2CheckboxCss(value,value2,value3){
      if(value!==value3){
        if(value === value2){
        return true
      }else{
        return false
      }
      }
      
    }
  },
  computed:{
   
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
  
.wrong>>> .el-checkbox__input.is-checked+.el-checkbox__label{
    color: red 
} 
.wrong>>> .el-checkbox__input.is-checked .el-checkbox__inner{
      background-color: red;
    border-color: red;
}
.tip{
  font-weight 400
  color red
}

</style>