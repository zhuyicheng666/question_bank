<template>
  <div>
    <el-card>
       <el-card v-if="singleData[no].type === 'choice'">
      <el-row>
        <el-col :span="20"
          ><div>{{ singleData[no].question }}</div></el-col
        >
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="A"
            >A、{{ singleData[no].optionA }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="B"
            >B、{{ singleData[no].optionB }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="C"
            >C、{{ singleData[no].optionC }}</el-radio
          >
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="D"
            >D、{{ singleData[no].optionD }}</el-radio
          >
        </el-col>
      </el-row>
    </el-card>
    <el-card v-else>
      <el-row class="marginBottom">
        <el-col>
          <div>{{ singleData[no].question }}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="T">{{
            singleData[no].optionA
          }}</el-radio>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-radio v-model="singleData[no].stuAnswer" label="F">{{
            singleData[no].optionB
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
     
    };
  },
  computed:{
     singleData: function(){
       return this.$store.getters.getChoosedItemsQuestion
     }
  }
};
</script>
<style  lang="stylus" scoped></style>