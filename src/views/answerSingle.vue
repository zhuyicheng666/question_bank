<template>
  <div>
    <el-card>
       <el-card v-if="singleData[no].type === 'choice'">
      <el-row>
        <el-col :span="20"
          ><div>{{ singleData[no].data.desc }}</div></el-col
        >
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="A"
            >A、{{ singleData[no].data.option1 }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="B"
            >B、{{ singleData[no].data.option2 }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="C"
            >C、{{ singleData[no].data.option3 }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="D"
            >D、{{ singleData[no].data.option4 }}</el-radio
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card v-else>
      <el-row class="marginBottom">
        <el-col>
          <div>{{ singleData[no].data.desc }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="T">{{
            singleData[no].data.option1
          }}</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].data.stuAnswer" label="F">{{
            singleData[no].data.option2
          }}</el-radio>
        </el-col>
      </el-row>
    </el-card>
    <h4 v-show="right">答题正确</h4>
    <h4 v-show="wrong">答题错误,答案为：F</h4>
    <el-card v-show="wrong">
      <p>答题解析</p>
    </el-card>
      <el-button round @click="confirm">确认提交</el-button>
      <el-button round @click="next">下一题</el-button>
    </el-card>
   


  </div>
</template>
<script>
export default {
  methods:{
    confirm(){
      this.wrong=true
    },
    next(){
      this.wrong = false
      this.right= false
      this.no++
      if(this.no>=this.singleData.length){
        this.no=0
      }
    }
  },
  data() {
    return {
      right:false,
      wrong:false,
      no:0,
      singleData: [{
        type: "choice",
        data: {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1: "A:optionA",
          option2: "B:optionB",
          option3: "C:optionC",
          option4: "D:optionD",
          answer: "A",
          type: "choice",
        }},{
        type:"judgement",
        data:{
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2( )",
          chapter: "加法",
          frequency: 3,
          option1:"A:true",
          option2:"B:false",
          answer:"A",
          type:"judge"
          
        }
      },]
    };
  },
};
</script>
<style  lang="stylus" scoped></style>