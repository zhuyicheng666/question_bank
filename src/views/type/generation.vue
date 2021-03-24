<template>
   <div>
      <div class="setting">
        <span>试卷标题</span>
        <input type="text" v-model="title">
        <br/>
        <!-- <span>填空分值</span>
        <input type="text" v-model="fillValue" >
        <span>填空间距</span>
        <input type="text" v-model="fillSpace">
        <br/> -->




        <!-- <span>选择分值</span>
        <input type="text"> -->
        <!-- <span>选择间距</span>
        <input type="text"> -->
        <!-- <br/>
        <span>判断分值</span>
        <input type="text"> -->
        <!-- <span>判断间距</span>
        <input type="text"> -->
        <!-- <br/> -->



        <!-- <span>计算分值</span>
        <input type="text">
        <span>计算间距</span>
        <input type="text"> -->
      </div>

    <el-card class="box-card" id="pdfDom">
      <h1 class="title">{{title}}</h1>

      <div class="info">
        <span>班级</span>
        <input type="text">
        <span>学号</span>
        <input type="text">
        <span>姓名</span>
        <input type="text">
      </div>
<!-- 
      <div class="Fill">
        
         <el-table
            :data="fillTableData"
            style="width: 100%"
            class="fillTable"
            
            >

          <el-table-column
            type="index"
            :label=fill
            width="140px"
            align="center">
          </el-table-column>
            <el-table-column
              prop="desc"
              min-width="100%">
            </el-table-column>
            
        </el-table>
      </div> -->

      <div class="Choice" v-if="tableData.length!==0">
    
         <!-- <el-table
            :data="fillTableData"
            style="width: 100%"
            class="fillTable"
            >

          <el-table-column
            type="index"
            :label=fill
            width="140px"
            align="center">
          </el-table-column>
            <el-table-column
              prop="desc"
              min-width="100%">
            </el-table-column>
            
        </el-table> -->
      <el-row>
        <el-col :offset="1"><h2>选择题</h2></el-col>
      </el-row>
      <div v-for="(item,index) in tableData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div>{{addBrackets(item.question)}}</div></el-col>
        </el-row>
        <el-row class="marginBottom">
          
          <el-col :span="5" :offset="2">{{item.optionA}}</el-col>
          <el-col :span="5">{{item.optionB}}</el-col>
          <el-col :span="5">{{item.optionC}}</el-col>
          <el-col :span="5">{{item.optionD}}</el-col>
        </el-row>
        
      </div>
     

      </div>
      
      <div class="Judge" v-if="judgeTableData.length!==0">
        <!-- <el-table
            :data="fillTableData"
            style="width: 100%"
            class="fillTable"
            
            >

          <el-table-column
            type="index"
            :label=fill
            width="140px"
            align="center">
          </el-table-column>
            <el-table-column
              prop="desc"
              min-width="100%">
            </el-table-column>
            
        </el-table> -->
          <el-row>
        <el-col :offset="1"><h2>判断题</h2></el-col>
      </el-row>
      <div v-for="(item,index) in judgeTableData" :key="index" class="line marginBottom">
        <el-row class="marginBottom">
           <el-col :span="1" :offset="1">{{index+1}}</el-col>
           <el-col :span="20"><div>{{addBrackets(item.question)}}</div></el-col>
        </el-row>
      </div>
      </div>
      <!-- <div class="Calculate">
         <el-table
            :data="fillTableData"
            style="width: 100%"
            class="fillTable"
            
            >

          <el-table-column
            type="index"
            :label=fill
            width="140px"
            align="center">
          </el-table-column>
            <el-table-column
              prop="desc"
              min-width="100%">
            </el-table-column>
            
        </el-table>
      </div> -->
   
      

    </el-card>
  
     <el-button type="primary" round icon="el-icon-arrow-left" class="back" @click="handleBack">返回</el-button>
      <el-button type="primary" round class="generate" @click="handleGenerate">生成pdf <i class="el-icon-arrow-right el-icon--right" ></i></el-button>
      <el-button type="primary" round class="generateWord" @click="handleGenerateWord">生成word <i class="el-icon-arrow-right el-icon--right" ></i></el-button>
      <el-button type="primary" round class="generateonline" @click="handleGenerateOnline">生成在线答题版本 <i class="el-icon-arrow-right el-icon--right" ></i></el-button>
   </div>

</template>

<script>
import rendoc from '../../utils/generateWord'
export default {
  data(){
    return{
      htmlTitle:"zhuyicheng",
      title:"",
      fillValue:"",
      fillSpace:"",
      wordData:{
        choice:true,
        judgement:true,
        title:"这里是标题",
        choiceQuestion:[{
          question:"这里是题目",
          optionA:"选项A",
          optionB:"选项B",
          optionC:"选项C",
          optionD:"选项D"
        },{
          question:"这里是题目",
          optionA:"选项A",
          optionB:"选项B",
          optionC:"选项C",
          optionD:"选项D"
        },{
          question:"这里是题目",
          optionA:"选项A",
          optionB:"选项B",
          optionC:"选项C",
          optionD:"选项D"
        },

        ]
      }
  //     fillTableData:[{
          
  //         id: "187",
  //         level: "1级",
  //         knowledge: "二元十次方式解法",
  //         desc: "1525+2=15151525+25二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法s二元十次方式解法二元十次方式解法二元十二元十次方式解法二元十次方式解法二元十次方式解法次方式解法二元十次方式解法"
        
  //     },
  //     {
          
  //         id: "187",
  //         level: "1级",
  //         knowledge: "二元十次方式解法",
  //         desc: "1525+2=15151525+25二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法"
        
  //     },
  //         {
          
  //         id: "187",
  //         level: "1级",
  //         knowledge: "二元十次方式解法",
  //         desc: `选择那个是好的人( )
  // A wode B sddd
  // C  sdasd D sdsdd`
        
  //     }],
      // judgeTableData:[
      //    {id: "111",
      //     level: "2级",
      //     knowledge: "二元一次方式解法",
      //     desc: "1+2等于3( )",
      //      chapter: "加法",
      //     frequency: 3,
         
      //     answer:"true",
      //     type:"choice"},
      //      {id: "111",
      //     level: "2级",
      //     knowledge: "二元一次方式解法",
      //     desc: "1+2等于3( )",
      //      chapter: "加法",
      //     frequency: 3,
         
      //     answer:"true",
      //     type:"choice"},
      //      {id: "111",
      //     level: "2级",
      //     knowledge: "二元一次方式解法",
      //     desc: "1+2等于3( )",
      //      chapter: "加法",
      //     frequency: 3,
         
      //     answer:"true",
      //     type:"choice"}
      // ],
      //  tableData: [
      //   {
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
      //      type:"choice"
      //   },
      //   {
      //     id: "122",
      //     level: "3级",
      //     knowledge: "二元一次方式解法",
      //     desc: "5+1等于5( )",
      //      chapter: "加法",
      //     frequency: 3,
      //     option1:"A:optionA",
      //     option2:"B:optionB",
      //     option3:"C:optionC",
      //     option4:"D:optionD",
      //     answer:"A",
      //      type:"choice"
      //   },
      //   {
      //     id: "129",
      //     level: "1级",
      //     knowledge: "二元一次方式解法",
      //     desc:
      //       "1525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=1515151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515( )",
      //        chapter: "加法",
      //     frequency: 3,
      //     option1:"A:optionA",
      //     option2:"B:optionB",
      //     option3:"C:optionC",
      //     option4:"D:optionD",
      //     answer:"A",
      //      type:"choice"
      //   },
      // ],
    }
  },
  computed:{
    fill(){
      return "填空题"+this.fillValue
    },
    judgeTableData(){
      return this.$store.getters.getJudgementQuestion
      
    },
    tableData(){
       return this.$store.getters.getChoiceQuestion
    },
  },
  methods:{
    handleGenerateWord(){

      this.wordData={title:this.title}
      if (this.tableData.length!==0){
        this.wordData.choice=true
        this.wordData.choiceQuestion=this.tableData
      }
      if(this.judgeTableData.length!==0){
          this.wordData.judgement=true
        this.wordData.judgementQuestion=this.judgeTableData
      }
      rendoc(this.wordData)
    },
    handleGenerateOnline(){
      this.$store.commit('setTitle',this.title)
      this.$router.push('/onlinePreview')
    },
      handleBack(){
      this.$router.go(-1)
    },
    handleGenerate(){
      this.getPdf('#pdfDom')
    },
    addBrackets(text){
      return text + '（' +'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+' ）'
    }
  },
  watch:{
    fillSpace:function(){
      let nodes=document.querySelectorAll(".fillTable td")
      for (let i =0,len=nodes.length;i<len;i++)
      {
        nodes[i].style.paddingBottom= this.fillSpace+"px"
      }
      
      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .setting input,.info input
    margin 5px
    outline none
    border 0px
    border-bottom: 1px solid #909399;
  .setting span, .info span 
    color:#606266
  .setting 
    
    width 514px
    margin 0 auto
  .title 
    text-align center
    font-weight 400
  .info input 
    margin-right 46px
  .info 
    text-align center
  .fillTable
    font-size 20px
 
  .fillTable>>>.el-table__row>td{
    border: none;
  }
  .el-table::before 
    height: 0px;
  
  .fillTable>>>.is-leaf
    border: 0px;
  .fillTable>>> .cell {

      white-space: pre-wrap; //保留空白符序列，但是正常地进行换行。

    }
    .back,.generate{
    position fixed
    top 45%

    }
    .generateWord{
       position fixed
    top 55%
    }
.generateonline{
    position fixed
    top 65%
}
    .back{
    left 0
    transform: translate(0,-100%);
    }

    .generate, .generateWord,.generateonline{
    right 0
    transform: translate(0,-100%);
    }
    .line{
      font-size:20px
      word-wrap:break-word
      word-break:normal
    }
    .marginBottom{
      margin-bottom: 15px
    }
</style>