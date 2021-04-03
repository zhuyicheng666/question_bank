
<template>
  <div>
    <el-row :gutter="20" class="filter">
      <el-col :span=2 :offset="8">
        <el-select v-model="chapter" placeholder="请选择章节"    clearable  @change="handleKnowledgePoint">
          <el-option
            v-for="item in chapterOption"
            :key="item.index"
            :label="item.label"
            :value="item.value"
           
          >
          </el-option> 
        </el-select>
      </el-col>
      <el-col :span=2>
        <el-select v-model="knowledgePoint" placeholder="请选择知识点"  clearable    >
          <el-option
            v-for="item in knowledgePointOption"
            :key="item.index"
            :label="item.label"
            :value="item.value"
           
          >
          </el-option> 
        </el-select>
      </el-col>
      <el-col :span=2>
         <el-select v-model="difficulty" placeholder="请选择难度"   clearable   >
          <el-option
            v-for="item in difficultyOption"
            :key="item.index"
            :label="item.label"
            :value="item.value"
           
          >
          </el-option> 
        </el-select></el-col>

        <el-col :span=2>
           <el-button plain @click="filter" >筛选</el-button>
        </el-col>
    </el-row>
    <baseCheck :tableData="filterTableData" />
  </div>
</template>

<script>
import baseCheck from "./baseCheck.vue";
export default {
  name: "typeChoice",
  components: {
    baseCheck,
  },
  data() {
    return {
      tableData: [],
      filterTableData:[],
      chapter:'',
      chapterOption:[],
      knowledgePointOption:[],
      knowledgePoint:'',
      difficulty:'',
      difficultyOption:[{
        label:"简单",
        value:1
      },
      {
        label:"中等",
        value:2
      },
      {
        label:"困难",
        value:3
      },
      
      ]
    };
  },
  methods:{
    filter(){
        this.filterTableData=this.tableData.filter(item=>{
          if(this.chapter!==''){
            if(this.chapter===item.chapter){
              return true
            }else{
              return false
            }
          }else{
            return true
          }

        }).filter(item=>{
           if(this.knowledgePoint!==''){
            if(this.knowledgePoint===item.knowledgePoint){
              return true
            }else{
              return false
            }
          }
          else{
            return true
          }
        }).filter(item=>{
            if(this.difficulty!==''){
            if(this.difficulty===item.difficulty){
              return true
            }else{
              return false
            }
          }
          else{
            return true
          }
        })
    },
    handleKnowledgePoint(){
        let me=this
        let queryArr ={
        chapter:this.chapter
      } 
      if(this.chapter===''){
        return true
      }
        me.$axios.post('http://localhost:3000/getKnowledgePoint',{data:queryArr}).then(


            function(res){
              if (res.data.code===200){
                 res.data.data.forEach(item=>{
                    me.knowledgePointOption.push({
                      value:item.knowledgePoint,
                      label:item.knowledgePoint
                    })
                 })


              }else{
                   me.$message({
                    message: '获取失败',
                    type: 'warn'
                  });
              }
            }
           
          )
    }
  },
  created() {
    let me = this;
    let queryArr = { type: "choice" };
    me.$axios
      .post("http://localhost:3000/loadAll", { data: queryArr })
      .then(function (res) {
        if (res.data.code === 200) {
          me.tableData = res.data.data;
          me.filterTableData=res.data.data;
          console.log(me.tableData);
        } else {
          console.log("查询失败");
        }
      });



          
          me.$axios.post('http://localhost:3000/getChapter').then(


            function(res){
              if (res.data.code===200){
                 res.data.data.forEach(item=>{
                    me.chapterOption.push({
                      value:item.chapter,
                      label:item.chapter
                    })
                 })


              }else{
                   me.$message({
                    message: '获取失败',
                    type: 'warn'
                  });
              }
            }
           
          )
  },



};
</script>

<style scoped>
  .filter{
    margin-bottom: 10px;
  }
</style>