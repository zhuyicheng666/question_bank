
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
        
      ],
    }
  },
  created(){
      let me =this
      let queryArr={type:"judgement"}
      me.$axios.post('http://localhost:3000/loadAll',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                

                 me.tableData = res.data.data
                 console.log(me.tableData)
              }else{
                 console.log("查询失败") 
              }
            }
           
          )
  }
}
</script>
