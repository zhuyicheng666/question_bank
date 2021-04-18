<template>

  <div>
    <countDown class="countDown" />
    <el-card class="box-card" id="pdfDom">
      <h2 class="title">{{paper.title}}</h2>

       <div class="Choice" v-if="paper.choiceData.length!==0">
      <el-row>
        <!-- <el-col :offset="1"><h3>选择题(每题{{choiceData.value}}分)</h3></el-col> -->
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>

      <div v-for="(item,index) in paper.choiceData" :key="index" class="line marginBottom">
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

       <div class="Judge" v-if="paper.judgementData.length!==0">
      <el-row>
        <!-- <el-col :offset="1"><h3>判断题(每题{{judgementData.value}}分)</h3></el-col> -->
        <el-col :offset="1"><h3>判断题</h3></el-col>
      </el-row>
      

      <div v-for="(item,index) in paper.judgementData" :key="index" class="line marginBottom">
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
      beforeUnload_time :0,
      gap_time:0
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
      //     desc: "1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )1+1等于2( )",
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
    paper(){
      return this.$store.getters.getPaper
    }
  },
  
  methods:{
    isFinished(){
      let chocieUnfinished=[],judgementUnfinished=[]
      this.paper.choiceData.forEach((item,index)=>{
        if(!item.stuAnswer){
          chocieUnfinished.push(index+1)
        }
      })
      this.paper.judgementData.forEach((item,index)=>{
        if(!item.stuAnswer){
          judgementUnfinished.push(index+1)
        }
      })
      return {chocieUnfinished,judgementUnfinished}
    },

    open(){
      let me =this
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
          let result = this.judge()
          console.log(result)
          this.$message({
            type: 'success',
            message: '选择错题：'+result.choiceError+" 判断错题："+result.judgementError,
            // message: "成绩为100分"
          });

          
          let queryArr={
            sid:window.localStorage.getItem("sid"),
            paper:this.paper
          }


           this.$axios.post('http://localhost:3000/saveAllRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                
                console.log("保存成功s")
                 me.$store.commit('resetSpenttime',0)
                 me.$router.push({path:'/searchPaper',query:{
            t:Date.now() } })
              }else{
                 console.log("保存失败") 
              }
            }
           
          )












           
      
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
      
    },
    judge(){
      let  choiceError=[],judgementError=[]
      console.log(this.paper)
      this.paper.choiceData.forEach((item,index)=>{
        if(item.stuAnswer !== item.answer){
          choiceError.push(index+1)
        }
      })
      this.paper.judgementData.forEach((item,index)=>{
        if(item.stuAnswer !== item.answer){
          judgementError.push( index+1)
        }
      })
      return {
        choiceError,judgementError
      }
    },
    halfCommit(){

      let me =this
      let queryArr={
            sid:window.localStorage.getItem("sid"),
            paper:this.paper,
            spenttime:this.$store.getters.getSpenttime,
            totaltime:this.$store.getters.getTotalTime
          }


          this.gap_time=new Date().getTime()-this.beforeUnload_time
          if(this.gap_time<=5){
           this.$axios.post('http://localhost:3000/saveHalfRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                  me.$store.commit('resetSpenttime',0)
                console.log("保存成功s")
                
              }else{
                 console.log("保存失败") 
              }
            }
           
          )}
    }
  },
  
  mounted(){
    window.addEventListener('unload',this.halfCommit)
    window.addEventListener('beforeunload',()=>{
      this.beforeUnload_time=new Date().getTime();
    })
  },
  watch:{
    '$store.state.time':function(newvalue){
      if(newvalue <= 0){
        this.open()
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