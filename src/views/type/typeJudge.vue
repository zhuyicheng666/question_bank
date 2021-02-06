
<template>
  <div>
    
    <baseCheck :tableData="tableData"/>
  </div>
</template>

<script>
import baseCheck from "./baseCheck.vue"
export default {
  name:"typeJudge",
  components:{
   baseCheck
  },
  data(){
    return {
         tableData: [
        {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"},
           {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"},
           {id: "111",
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3",
           chapter: "加法",
          frequency: 3,
         
          answer:"true",
          type:"choice"}
      ],
    }
  }
}
</script>
