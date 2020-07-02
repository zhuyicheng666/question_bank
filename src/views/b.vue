<template>
  <div>
    <aa ref="aa" />
    <button @click="get">chen</button>
    {{msg}}
  </div>
</template>
<script>
import aa from "./a.vue"
export default {
  components:{
    aa
  },
  data(){
    return {
      msg:""
    }
    
  },
methods:{
  get(){
    this.msg=this.$refs.aa.child
  }
},
mounted(){
  this.get();
}


}
</script>/