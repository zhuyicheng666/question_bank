<template>
  <el-card>
    <el-row type="flex"   align="middle" justify="center">
      <el-col :span="3">
        <div class="transition-box">题库题目数量 {{total}}</div>
      </el-col>
      <el-col :span="3">
        <div class="transition-box">我的出卷数量 {{mytotal}}</div>
      </el-col>
      <el-col :span="3">
        <div class="transition-box">我的学生数量 {{studenttotal}}</div>
      </el-col>
    </el-row>
    <el-row>
      
  <h3 class="title">
        学生管理
      </h3>
      
    </el-row>
    <el-row>
        <ul class="icon-list">
          <li  v-for="item in stutable" :key='item.sid'>
            <el-popover
                 
            >

            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click=" deleteStu(item.sid)">删除学生</el-button>
              <el-button type="primary" size="mini" @click="showHistory(item.sid)">查看学生答题历史</el-button>
            </div>

            <el-button slot="reference" class="button">
            <i class="el-icon-user-solid" ></i>
            <span class=".icon-name " >{{item.name}}</span>
            </el-button>

            </el-popover>
          </li>
          <li>
              <el-button class="button" @click="dialogFormVisible=true">
            <i class=" el-icon-plus" ></i>
              </el-button>
          </li>
        </ul>
    </el-row>



  <el-dialog title="添加学生" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="学生手机号" >
      <el-input v-model="form.userName" autocomplete="off" @blur="searchSingleStudent" ></el-input>
    </el-form-item>
    <el-form-item label="学生姓名" >
       {{name}}
    </el-form-item>
    
   
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="addStudent" v-show="name!==''" >确 定</el-button>
  </div>
</el-dialog>



  </el-card>
</template>
<script>
export default {
  methods:{
    addStudent(){
          let me =this
    let queryArr={
      userName:this.form.userName,
      tid:window.localStorage.getItem("tid")
    }
     me.$axios.post('http://localhost:3000/addstudent',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                me.stutable.push(res.data.data[0])
              me. dialogFormVisible = false
              me.studenttotal++
              me.form={}

              }else{
                 console.log("保存失败") 
              }
            })
     
    },
    showHistory(sid){
        window.localStorage.setItem('sid',sid)
        this.$router.push('/history')
    },
    deleteStu(sid){
       let me =this
    let queryArr={
      sid:sid,
      tid:window.localStorage.getItem("tid")
    }
     me.$axios.post('http://localhost:3000/deletestudent',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
                me.stutable.forEach((item,index)=>{
                  if(item.sid===sid){
                    me.stutable.splice(index,1)
                  }
                })
              
              }else{
                 console.log("保存失败") 
              }
            })
           
    },
    searchSingleStudent(){
      if(this.form.userName){
         let me =this
    let queryArr={
      userName:this.form.userName
    }
     me.$axios.post('http://localhost:3000/searchSingleStudent',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
              me.name=res.data.data[0].name
              
              }else{
                 console.log("保存失败") 
              }
            })
           
      }
    }
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
      studenttotal:0
    }
  },
  created(){
    let me =this
    let queryArr={
      tid:window.localStorage.getItem("tid")
    }
     me.$axios.post('http://localhost:3000/searchstudent',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
             me.stutable=res.data.data
              
              }else{
                 console.log("保存失败") 
              }
            })
    
      me.$axios.post('http://localhost:3000/teacherInit',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
             me.total=res.data.data.total
              me.mytotal=res.data.data.mytotal
              me.studenttotal=res.data.data.studenttotal
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
    
    text-align: center;
    
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