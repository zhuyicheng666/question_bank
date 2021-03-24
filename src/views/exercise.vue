<template>
  <div>
    <el-card class="exercise center">
      <div v-if="show === true">
        <el-button round @click="choose()">自选题目</el-button>
        <el-button round @click="random()">随机题目</el-button>
      </div>
      <div v-else>
        <el-row type="flex" justify="center">
          <el-col :span="5"> <span>难度 </span></el-col>
          <el-select v-model="valueList.level" placeholder="请选择">
            <el-option
              v-for="item in optionList.levelOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>
        <el-row type="flex" justify="center">
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

        <el-row type="flex" justify="center">
          <el-col :span="5"><span>知识点 </span></el-col>
          <el-select v-model="valueList.knowledge" placeholder="请选择">
            <el-option
              v-for="item in optionList.knowledgeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col :span="5"> <span>热度 </span></el-col>
          <el-select v-model="valueList.frequency" placeholder="请选择">
            <el-option
              v-for="item in optionList.frequencyOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-row>
        <el-row type="flex" justify="center">
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
        level: "",
        knowledge: "",
        chapter: "",
        frequency: "",
        type: "",
      },
      optionList: {
        levelOption: [
          {
            value:"",
            label:""
          },
          {
            value: "1级",
            label: "1级",
          },
          {
            value: "2级",
            label: "2级",
          },
        ],
        knowledgeOption: [
          {
            value:"",
            label:""
          },
          {
            value: "这是选择题",
            label: "这是选择题",
          },
          {
            value: "二元方程",
            label: "二元方程",
          },
        ],
        chapterOption: [
          {
            value:"",
            label:""
          },
          {
            value: "加法",
            label: "加法",
          },
          {
            value: "减法",
            label: "减法",
          },
        ],
        frequencyOption: [
          {
            value:"",
            label:""
          },
          {
            value: "1",
            label: "1",
          },
          {
            value: "2",
            label: "2",
          },
        ],
        typeOption: [
          {
            value:"",
            label:""
          },
          {
            value: "选择",
            label: "选择",
          },
          {
            value: "判断",
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
      this.$router.push('/answerSingle');
    }
  },
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
</style>