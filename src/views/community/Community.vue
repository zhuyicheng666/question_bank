<template>
  <div>
    <el-card>
       <search/>
       <detail/>
    </el-card>
   
  </div>
</template>

<script>
import search from "./search.vue"
import detail from "./detail.vue"
export default {
  name:"community",
  components:{
    search,
    detail
  }
}
</script>