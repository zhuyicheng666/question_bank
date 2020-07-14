<template>
  <div>
    <el-input placeholder="请输入题目编号" v-model="search" class="input-with-select search">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button type="primary" class="release" @click="handleClick">发布</el-button>

    <el-dialog title="发布题解" :visible.sync="dialogFormVisible">
      <el-form label-position="right" label-width="80px" :model="form" >
        <el-form-item label="题号">
          <el-input v-model="form.questionId"></el-input>
        </el-form-item>

         <el-form-item
          v-for="(domain, index) in form.domains"
          :label="'步骤' + (index+1)"
          :key="index"
        >
          <el-input v-model="form.domains[index]" ></el-input>
          <el-button type="primary" icon="el-icon-minus" circle  @click.prevent="removeDomain(index)"></el-button>
          <el-button type="primary" icon="el-icon-plus" circle  @click="addDomain"></el-button>
          
        </el-form-item>

        
         <el-form-item
          v-for="(domain, index) in form.answers"
          :label="'步骤' + (index+1)+'答案'"
          :key="'answer'+index"
        >
          <el-input v-model="form.domains[index]" ></el-input>
         
          
        </el-form-item>

       <el-form-item label="思路">
          <el-input  type="textarea" v-model="form.process"></el-input>
        </el-form-item>


       
      </el-form>
      <div slot="footer" class="dialog-footer">
        
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
      dialogFormVisible: false,
      form: {
        questionId:'',
        domains:[''],
        answers:[''],
        process:''
      }
    };
  },
  methods: {
    handleClick() {
      this.dialogFormVisible = true;
    },
    addDomain() {
        this.form.domains.push('');
         this.form.answers.push('');
      },
    removeDomain(index) {
    
    if (index !== 0) {
      this.form.domains.splice(index, 1)
      this.form.answers.splice(index, 1);
    }
  },
  }
};
</script>

<style lang="stylus" scoped>
.search {
  width: 400px;
  margin-bottom: 30px;
}

.release {
  float: right;
}
.el-input
  width 60%
  margin-right 16px
</style>
