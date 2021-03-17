
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
         tableData: [] 
    }
  },
  created(){
      let me =this
      let queryArr={type:"choice"}
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
