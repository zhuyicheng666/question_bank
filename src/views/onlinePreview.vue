<template>

  <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{title}}</h2>

      <div class="Choice" v-if="choiceData.length!==0">
      <el-row>
        <!-- <el-col :offset="1"><h3>选择题(每题{{choiceData.value}}分)</h3></el-col> -->
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>

      <div v-for="(item,index) in choiceData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1"><p>{{index+1}}</p></el-col>
           <el-col :span="20"><div v-html='item.question'></div></el-col>
        </el-row>
          <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
               <el-radio v-model="item.stuAnswer"  label="A">A.</el-radio>
            </el-col>
             <!-- <el-col :span="0.5"  class="option"> A.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionA" ></div></el-col>
            </el-row>
          <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio v-model="item.stuAnswer" label="B">B.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > B. &nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionB" ></div></el-col>
            </el-row>
          <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio v-model="item.stuAnswer" label="C">C.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5"  class="option"> C.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionC" ></div></el-col>
            </el-row>
         <el-row  type="flex" align="middle">
            <el-col :offset="2" :span="0.5">
              <el-radio v-model="item.stuAnswer" label="D">D.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > D.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="item.optionD" ></div></el-col>
            </el-row>
      </div>
      </div>

       <div class="Judge" v-if="judgementData.length!==0">
      <el-row>
        <!-- <el-col :offset="1"><h3>判断题(每题{{judgementData.value}}分)</h3></el-col> -->
        <el-col :offset="1"><h3>判断题</h3></el-col>
      </el-row>
      

      <div v-for="(item,index) in judgementData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1"><p>{{index+1}}</p></el-col>
           
              <el-col :span="20"><div v-html='item.question'></div></el-col>
        </el-row>
          <el-row >
            <el-col :offset="2">
               <el-radio v-model="item.stuAnswer" label="True">{{item.optionA}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row >
            <el-col :offset="2">
              <el-radio v-model="item.stuAnswer" label="False">{{item.optionB}}</el-radio>
            </el-col>
            </el-row>
      </div>
      </div>

    <el-button class="submit" @click="dialogFormVisible=true">发布</el-button>


<el-dialog title="" :visible.sync="dialogFormVisible" width="30%">
  <el-form>
    <el-form-item label="设置时长">
      <el-input v-model="time" ></el-input>
    </el-form-item>
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="open">确 定</el-button>
  </div>
</el-dialog>






  </el-card>


  
</template>
<script>
export default {
  data(){
    return {
      time:0,
      dialogFormVisible:false
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
      //     answer:"A",
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
      //     answer:"A",
      //     type:"judge"
      //     },
      //   ]
      // }
      }
    },

  computed:{
    title(){
      return this.$store.getters.getTitle
    },
    //  time(){
    //   return this.$store.getters.getTime
    // },
    choiceData(){
       return this.$store.getters.getChoiceQuestion
    },
    judgementData(){
      return this.$store.getters.getJudgementQuestion
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

     


this. dialogFormVisible = false


      let me =this
      let paperData={}
      paperData.title=me.title
       paperData.time=me.time
      paperData.date=new Date().toLocaleDateString()
      paperData.tid = window.localStorage.getItem("tid")
      paperData.choiceData=me.choiceData
      paperData.judgementData=me.judgementData

      
      me.$axios.post('http://localhost:3000/generateOnlinePaper',{data:paperData}).then(

      function(res){
        if (res.data.code===200){
          
           me.$message({
          message: '恭喜你，发送成功',
          type: 'success'
        });

        me.$router.push('/paper')
        }else{
            me.$message({
          message: '发送失败',
          type: 'warn'
        }); 
        }
      }
      
    )
       
      
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
  .option{
    margin-right:10px
  }
</style>