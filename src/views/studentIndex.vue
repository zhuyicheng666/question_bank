<template>
  <el-card>
    <el-row type="flex"   align="middle" justify="center">
      <el-col :span="3">
        <div class="transition-box">题库题目数量 {{total}}</div>
      </el-col>
      <el-col :span="3">
        <div class="transition-box">我的做题数量 {{mytotal}}</div>
      </el-col>
      <el-col :span="3">
        <div class="transition-box">我的错题数量 {{wrongtotal}}</div>
      </el-col>
       <el-col :span="3">
        <div class="transition-box">待完成试卷数量 {{papertotal}}</div>
      </el-col>
    </el-row>
    <el-row>
      
  <h3 class="title">
        教师信息
      </h3>
      
    </el-row>
    <el-row>
        <ul class="icon-list">
          <li  v-for="item in stutable" :key='item.tid'>
            
            <el-button slot="reference" class="button">
            <i class="el-icon-user-solid" ></i>
            <span class=".icon-name " >{{item.name}}</span>
            </el-button>

            
          </li>
        
        </ul>
    </el-row>







  </el-card>
</template>
<script>
export default {
  methods:{
   
  },
  data(){
    return {
      stutable:[],
      dialogFormVisible:false,
      form:{
       
      },
      name:'',
      total:0,
      mytotal:0,
      wrongtotal:0, 
      papertotal:0
    }
  },
  created(){
    let me =this
    let queryArr={
      sid:window.localStorage.getItem("sid")
    }
     me.$axios.post('http://localhost:3000/searchteacher',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
             me.stutable=res.data.data
              
              }else{
                 console.log("保存失败") 
              }
            })
    
      me.$axios.post('http://localhost:3000/studentInit',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
              me.total=res.data.data.total
              me.mytotal=res.data.data.mytotal
              me.wrongtotal=res.data.data.wrongtotal
              me.papertotal=res.data.data.papertotal
              }else{
                 console.log("保存失败") 
              }
            })


  }
}
</script>
<style scoped>
 .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .icon-list{
    list-style: none;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 60px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
     border-left: 1px solid #eee;
    border-top: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-list li i {
    display: block;
    font-size: 32px;
    margin-top: 8px;
    color: #606266;
   
}
.icon-list li .icon-name {
    display: inline-block;
    padding: 0 3px;
    height: 1em;
}
.title{
  font-weight: 400;
    color: #1f2f3d;
  font-size:27px;
  margin-left:20px
}
.button{
  width:100%;
  height: 100%;
  display: block;
}

</style>