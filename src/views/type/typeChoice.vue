
<template>
  <div>
    
    <baseCheck :tableData="tableData"/>
  </div>
</template>

<script>
import baseCheck from "./baseCheck.vue"
export default {
  name:"typeChoice",
  components:{
   baseCheck
  },
  data(){
    return {
         tableData: [
        {
          id: "12987122",
          level: "1级",
          knowledge: "这是选择题",
          desc: "1+1等于2"
        },
        {
          id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3"
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5"
        },
        {
          id: "129",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515"
        },
        {
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25"
        },
          {
          id: "12987122",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc: "1+1等于2"
        },
        {
          id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3"
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5"
        },
        {
          id: "129",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515"
        },
        {
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25"
        }
      ],
    }
  }
}
</script>
