<template>

  <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>

      <div class="Choice" v-if="choiceData.length!==0">
      <el-row>
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>


      <div v-for="(item,index) in choiceData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div v-html='item.question'></div></el-col>
        </el-row>

        <el-row  type="flex" align="middle">
          
            <el-col :offset='2' :span="0.5">
               <el-radio class="option" v-model="item.answer" :disabled="disabled(item.answer,'A')"  label="A">A. </el-radio>
            </el-col>
             <!-- <el-col :span="0.5"  class="option"> A.&nbsp;   </el-col> -->


             
             <el-col :span="20"  ><div v-html="item.optionA" ></div></el-col>
          
              
             
            </el-row>

            <el-row  class="marginBottom">
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'A')" status="warning"></el-progress>
              </el-col>
             </el-row>


          <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio  class="option" v-model="item.answer" :disabled="disabled(item.answer,'B')" label="B">B. </el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > B. &nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionB" ></div></el-col>
            </el-row>

            <el-row class="marginBottom" >
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'B')" status="warning"></el-progress>
              </el-col>
             </el-row>

          <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio  class="option" v-model="item.answer" :disabled="disabled(item.answer,'C')" label="C">C.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5"  class="option"> C.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionC" ></div></el-col>
            </el-row>


             <el-row class="marginBottom" >
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'C')" status="warning"></el-progress>
              </el-col>
             </el-row>

         <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio class="option" v-model="item.answer" :disabled="disabled(item.answer,'D')" label="D">D.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > D.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionD" ></div></el-col>
            </el-row>




             <el-row  class="marginBottom">
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'D')" status="warning"></el-progress>
              </el-col>
             </el-row>



          <!-- <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.answer" :disabled="disabled(item.answer,'A')" label="A">A、{{item.optionA}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer" :disabled="disabled(item.answer,'B')" label="B">B、{{item.optionB}}</el-radio>
            </el-col>
            </el-row>
          <el-row>
            <el-col :offset="2">
             <el-radio v-model="item.answer" :disabled="disabled(item.answer,'C')" label="C">C、{{item.optionC}}</el-radio>
            </el-col>
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer" :disabled="disabled(item.answer,'D')" label="D">D、{{item.optionD}}</el-radio>
            </el-col>
            </el-row> -->
      </div>
      </div>

       <div class="Judge" v-if="judgementData.length!==0">
      <el-row>
        <!-- <el-col :offset="1"><h3>判断题(每题{{judgementData.value}}分)</h3></el-col> -->
        <el-col :offset="1"><h3>判断题</h3></el-col>
      </el-row>

      <div v-for="(item,index) in judgementData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
          <el-col :span="20"><div v-html='item.question'></div></el-col>
        </el-row>
          <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.answer"  :disabled="disabled(item.answer,'T')" label="T">{{item.optionA}}</el-radio>
            </el-col>
            
            </el-row>

 <el-row class="marginBottom" >
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'True')" status="warning" ></el-progress>
              </el-col>
             </el-row>


          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.answer"  :disabled="disabled(item.answer,'F')" label="F">{{item.optionB}}</el-radio>
            </el-col>
            </el-row>


             <el-row class="marginBottom">
              <el-col :span="6" :offset="2" >
                <el-progress :text-inside="true" :stroke-width="26" :percentage="percentage(item.optionsum,'False')"  status="warning"></el-progress>
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
      // title:'2021年数学期末考试题目',
      // choiceData:{
      //   value:4,
      //   getValue:0,
      //   data:[
      //     {
      //     id: "12987122",
      //     level: "1级",
      //     knowledge: "这是选择题",
      //     desc: "1+1等于2( )",
      //     chapter: "加法",
      //     frequency: 3,
      //     option1:"A:optionA",
      //     option2:"B:optionB",
      //     option3:"C:optionC",
      //     option4:"D:optionD",
      //     answer:"A",
      //     type:"choice"
      //     },
      //     {
      //     id: "12987122",
      //     level: "1级",
      //     knowledge: "这是选择题",
      //     desc: "1+1等于2( )",
      //     chapter: "加法",
      //     frequency: 3,
      //     option1:"A:optionA",
      //     option2:"B:optionB",
      //     option3:"C:optionC",
      //     option4:"D:optionD",
      //     answer:"D",
      //     type:"choice"
      //     }
         
      //   ]
      // },
      // judgementData:{
      //   value:3,
      //   getValue:0,
      //   data:[
      //      {
      //     id: "12987122",
      //     level: "1级",
      //     knowledge: "这是选择题",
      //     desc: "1+1等于2( )",
      //     chapter: "加法",
      //     frequency: 3,
      //     option1:"A:true",
      //     option2:"B:false",
      //     answer:"T",
      //     type:"judge"
      //     },
      //   ]
      // }
      }
    },

   computed:{
     title(){
       return this.$route.params.title
     },
     judgementData(){
        return this.$route.params.judgementData
     },
     choiceData(){
         return this.$route.params.choiceData
     },
     
   } ,
  methods:{
   format() {
      return 50
    },
 percentage(array,item){
   let total=0,arrTotal=0
   for (let i=0;i<array.length;i++){
     if(array[i].stuAnswer===item){
       total=array[i].total
     }
     arrTotal=arrTotal+array[i].total
   }
   if(arrTotal!==0){
       return Math.round(total/arrTotal*100)
   }else{
     return 0
   }
 
 },

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
  #pdfDom>>>.el-radio:last-child{
    margin-right 10px
  }
  .marginBottom{
    margin-bottom:10px
  }
</style>