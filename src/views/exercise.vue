<template>
  <div>
    <el-card class="exercise center">
      <!-- <div v-if="show === true">
        <el-button round @click="choose()">自选题目</el-button> 
        <el-button round @click="random()">随机题目</el-button>
      </div> -->
      <div >
        <el-row type="flex"  align="middle" justify="center">
          <el-col :span="5"> <span>难度 </span></el-col>
          <el-select v-model="valueList.difficulty" placeholder="请选择">
            <el-option
              v-for="item in optionList.levelOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>
        <el-row type="flex"   align="middle" justify="center">
          <el-col :span="5"><span>章节 </span></el-col>
          <el-select v-model="valueList.chapter" placeholder="请选择">
            <el-option
              v-for="item in optionList.chapterOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>

      
        <el-row type="flex"   align="middle" justify="center">
          <el-col :span="5"> <span>题型 </span></el-col>
          <el-select v-model="valueList.type" placeholder="请选择">
            <el-option
              v-for="item in optionList.typeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>

     

           
        <el-row type="flex"  align="middle" justify="center" >
          <el-col :span="5"> <span>题量 &nbsp; </span></el-col>
          
             <el-input v-model="valueList.num" class="num" placeholder="请输入数量">
           
          </el-input>
          
          
       
        </el-row>


        <el-row type="flex" justify="center" class="confirm">
          <el-button type="primary" round @click="confirm">确认</el-button>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      valueList: {
        difficulty: 0,
      
        chapter: "",
      
        type: "",
        num:1
      },
      optionList: {
        levelOption: [
          {
            value:0,
            label:"无要求"
          },
          {
            value: 1,
            label: "简单",
          },
          {
            value: 2,
            label: "中等",
          },
          {
            value: 3,
            label: "困难",
          },
        ],
       
        chapterOption: [
          {
            value:"",
            label:"无要求"
          }
        ],
       
        typeOption: [
          {
            value:"",
            label:"无要求"
          },
          {
            value: "choice",
            label: "选择",
          },
          {
            value: "judgement",
            label: "判断",
          },
        ],
      },
    };
  },
  methods: {
    choose() {

   let me =this
      
      let queryArr=this.$store.getters.getChoosedItems
      me.$axios.post('http://localhost:3000/loadAllById',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                 me.$store.commit('loadQuestion', res.data.data)
               
                
              }else{
                 console.log("查询失败") 
              }
            }
           
          )



      this.$router.push('/answerSingle');
    },
    random() {
      this.show = false;





    },
    confirm(){

let me =this,queryArr=this.valueList

    
      me.$axios.post('http://localhost:3000/random',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
               me.$store.commit('loadQuestion', res.data.data)
               me.$router.push('/answerSingle');
                
              }else if(res.data.code === 201){
                 me.$store.commit('loadQuestion', res.data.data)
               
                me.$message({
                    message: res.data.message,
                    type: 'warn'
                  });
                  
                me.$router.push('/answerSingle');
              }
              else{
                 me.$message({
                    message: res.data.message,
                    type: 'warn'
                  });
              }
            }
           
          )
    

     
    }
  },

  created(){
    let me =this
       me.$axios.post('http://localhost:3000/getChapter').then(


            function(res){
              if (res.data.code===200){
                 res.data.data.forEach(item=>{
                    me. optionList.chapterOption.push({
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
  }
};
</script>
<style lang="stylus" scoped>
.exercise {
  width: 800px;
  height: 500px;
  margin: 0 auto;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alignCenter {
  display: flex;
  align-items: center;
}

.confirm {
  margin-top: 20px;
}
.num{
  margin 10px
}
</style>