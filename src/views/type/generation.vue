<template>
   <div>
      <div class="setting">
        <span>试卷标题</span>
        <input type="text" v-model="title">
        <br/>
        <span>填空分值</span>
        <input type="text" v-model="fillValue" >
        <span>填空间距</span>
        <input type="text" v-model="fillSpace">
        <br/>
        <span>选择分值</span>
        <input type="text">
        <span>选择间距</span>
        <input type="text">
        <br/>
        <span>判断分值</span>
        <input type="text">
        <span>判断间距</span>
        <input type="text">
        <br/>
        <span>计算分值</span>
        <input type="text">
        <span>计算间距</span>
        <input type="text">
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
      </div>

      <div class="Choice">
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
      </div>

      <div class="Judge">
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
      </div>

      <div class="Calculate">
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
      </div>
   
      

    </el-card>
  
     <el-button type="primary" round icon="el-icon-arrow-left" class="back" @click="handleBack">返回</el-button>
      <el-button type="primary" round class="generate" @click="handleGenerate">生成 <i class="el-icon-arrow-right el-icon--right" ></i></el-button>
   </div>

</template>

<script>

export default {
  data(){
    return{
      htmlTitle:"zhuyicheng",
      title:"",
      fillValue:"",
      fillSpace:"",
      fillTableData:[{
          
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法s二元十次方式解法二元十次方式解法二元十二元十次方式解法二元十次方式解法二元十次方式解法次方式解法二元十次方式解法"
        
      },
      {
          
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法二元十次方式解法"
        
      },
          {
          
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: `选择那个是好的人( )
  A wode B sddd
  C  sdasd D sdsdd`
        
      }]
    }
  },
  computed:{
    fill(){
      return "填空题"+this.fillValue
    }
  },
  methods:{
      handleBack(){
      this.$router.go(-1)
    },
    handleGenerate(){
      this.getPdf('#pdfDom')
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
    top 50%

    }

    .back{
    left 0
    transform: translate(0,-100%);
    }

    .generate{
    right 0
    transform: translate(0,-100%);
    }
  
</style>