
<template>
  <div>
    
    <baseCheck :tableData="tableData" />
  </div>
</template>

<script>
import baseCheck from "./baseCheck.vue"
export default {
  name:"typeCalculate",
  components:{
    baseCheck
  },
  data(){
    return {
         tableData: [
        {
          id: "12987122",
          level: "1级",
          knowledge: "这是计算题",
          desc: "1+1等于2",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "129",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
          {
          id: "12987122",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc: "1+1等于2",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "122",
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "129",
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        },
        {
          id: "187",
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25",
          chapter: "加法",
          frequency: "3",
          type:"choice"
        }
      ],
    }
  }
}
</script>
