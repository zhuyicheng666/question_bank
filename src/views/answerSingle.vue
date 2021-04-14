<template>
  <div>
    <el-card v-if="singleData.length!==0" class="card center">
   
       <div class="Choice" v-if="singleData[no].type==='choice'">
    

     
        <el-row class="marginBottom font" >
         
           <el-col :span="20"><div v-html='singleData[no].question' ></div></el-col>
        </el-row>
          <el-row  type="flex" align="middle" class="optionFont">
            <el-col  :span="0.5">
               <el-radio v-model="singleData[no].stuAnswer"  label="A">A.</el-radio>
            </el-col>
             <!-- <el-col :span="0.5"  class="option"> A.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="singleData[no].optionA" ></div></el-col>
            </el-row>
          <el-row  type="flex" align="middle"  class="optionFont">
            <el-col :span="0.5">
              <el-radio v-model="singleData[no].stuAnswer" label="B">B.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > B. &nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="singleData[no].optionB" ></div></el-col>
            </el-row>
          <el-row  type="flex" align="middle"  class="optionFont">
            <el-col  :span="0.5">
              <el-radio v-model="singleData[no].stuAnswer" label="C">C.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5"  class="option"> C.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="singleData[no].optionC" ></div></el-col>
            </el-row>
         <el-row  type="flex" align="middle"  class="optionFont">
            <el-col  :span="0.5">
              <el-radio v-model="singleData[no].stuAnswer" label="D">D.</el-radio>
            </el-col>
            <!-- <el-col :span="0.5" class="option" > D.&nbsp;   </el-col> -->
             <el-col :span="20"  ><div v-html="singleData[no].optionD" ></div></el-col>
            </el-row>
   
      </div>

       <div class="Judge" v-else>
    
      

     
        <el-row class="marginBottom font">
           
              <el-col :span="24"><div v-html='singleData[no].question'></div></el-col>
        </el-row>
          <el-row  class="optionFont" >
            <el-col >
               <el-radio v-model="singleData[no].stuAnswer" label="True">{{singleData[no].optionA}}</el-radio>
            </el-col>
            
            </el-row>
          <el-row   class="optionFont">
            <el-col >
              <el-radio v-model="singleData[no].stuAnswer" label="False">{{singleData[no].optionB}}</el-radio>
            </el-col>
            </el-row>
      
      </div>





 
    <h4 v-show="right">答题正确</h4>
    <h4 v-show="wrong">答题错误,答案为：{{singleData[no].answer}}</h4>
    <el-card v-show="wrong">

   
      <p v-if="singleData[no].text!==''">暂无解析</p>
      <p v-else v-html="singleData[no].text"></p>
    </el-card>
     <el-button class="marignleft" round @click="back">上一题</el-button>
      <el-button round @click="confirm">确认提交</el-button>
      <el-button round @click="next">下一题</el-button>
    </el-card>

    <el-card v-else>
     
     暂无题目可答，请先挑选题目

    </el-card>


  </div>
</template>
<script>
export default {
  methods:{
    confirm(){
      this.singleData[this.no].confirm=true
      if(this.singleData[this.no].stuAnswer===this.singleData[this.no].answer){
        this.right=true
         this.wrong=false
      }else{
         this.wrong=true
         this.right=false
      }
         
    },
    next(){
      if( this.singleData[this.no].confirm===true){
       let queryArr={
            sid:window.localStorage.getItem("sid"),
            record:this.singleData[this.no]
          }
        let me =this

           this.$axios.post('http://localhost:3000/saveSingleRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
            
                 me.$store.commit('delete',queryArr.record.qid)
                me.no=me.no-1
              }else{
                 console.log("保存失败") 
              }
            }
           
          )
      }
      this.wrong = false
      this.right= false
      this.no++
      if(this.no>=this.singleData.length){
        this.no=0
      }
    },
     back(){
       if( this.singleData[this.no].confirm===true){
       let queryArr={
            sid:window.localStorage.getItem("sid"),
            record:this.singleData[this.no]
          }

  let me =this
           this.$axios.post('http://localhost:3000/saveSingleRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
             
                  me.$store.commit('delete',queryArr.record.qid)
                 me.no=me.no-1
              }else{
                 console.log("保存失败") 
              }
            }
           
          )
      }
      this.wrong = false
      this.right= false
      this.no--
      if(this.no<0){
        this.no=this.singleData.length-1
      }
    },
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
<style  lang="stylus" scoped>

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  width 1000px
  margin 0 auto 
}
.font{
  font-size:38px
  
}
.optionFont >>>.el-radio__label{
 font-size:20px
}
.optionFont{
  margin 23px
}
.marignleft{
  margin-left 90px

}
</style>