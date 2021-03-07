<template>
  <div>
    <el-card shadow="always">
      <h3>发布:</h3>
      <el-tabs tab-position="left">
        <!-- <el-tab-pane label="填空">
          <el-form :model="form" label-width="80px">
            <el-form-item label="知识点">
              <el-input v-model="form.knowledge" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度">
              <el-select v-model="form.level" placeholder="请选择难度">
                <el-option label="简单" value="简单"></el-option>
                <el-option label="中等" value="中等"></el-option>
                <el-option label="困难" value="困难"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述">
              <el-input type="textarea" v-model="form.desc" rows="3" clearable></el-input>
            </el-form-item>
            <el-form-item label="答案">
              <el-input type="textarea" v-model="form.desc" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane> -->
        <el-tab-pane label="判断">
          <el-form :model="form" label-width="80px">
             <el-form-item label="章节">
              <el-input v-model="form.chapter" clearable></el-input>
            </el-form-item>
            <el-form-item label="知识点">
              <el-input v-model="form.knowledge" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度">
              <el-select v-model="form.level" placeholder="请选择难度">
                <el-option label="简单" value="简单"></el-option>
                <el-option label="中等" value="中等"></el-option>
                <el-option label="困难" value="困难"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述">
              <el-input type="textarea" v-model="form.desc" rows="3" clearable></el-input>
            </el-form-item>
             <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">上传图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-form-item label="答案">
              <el-input type="textarea" v-model="form.desc" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item label="解析">
              <el-input type="textarea" v-model="form.resolution" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="选择">
          <el-form :model="form" label-width="80px">
             <el-form-item label="章节">
              <el-input v-model="form.chapter" clearable></el-input>
            </el-form-item>
            <el-form-item label="知识点">
              <el-input v-model="form.knowledge" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度">
              <el-select v-model="form.level" placeholder="请选择难度">
                <el-option label="简单" value="简单"></el-option>
                <el-option label="中等" value="中等"></el-option>
                <el-option label="困难" value="困难"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述">
              <el-input type="textarea" v-model="form.desc" rows="3" clearable></el-input>
            </el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">上传图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-form-item label="选项" class="choice">
              <el-input v-model="form.choice[0]"  clearable  placeholder="请输入选项A 格式为 A.xxx"></el-input>
              <el-input v-model="form.choice[1]"  clearable  placeholder="请输入选项B 格式为 A.xxx"></el-input>
              <el-input v-model="form.choice[2]"  clearable  placeholder="请输入选项C 格式为 A.xxx"></el-input>
              <el-input v-model="form.choice[3]"  clearable  placeholder="请输入选项D 格式为 A.xxx"></el-input>
            </el-form-item>
            <el-form-item label="答案">
              <el-input type="textarea" v-model="form.desc" rows="10" clearable></el-input>
            </el-form-item>
             <el-form-item label="解析">
              <el-input type="textarea" v-model="form.resolution" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- <el-tab-pane label="计算">
          <el-form :model="form" label-width="80px">
            <el-form-item label="知识点">
              <el-input v-model="form.knowledge" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度">
              <el-select v-model="form.level" placeholder="请选择难度">
                <el-option label="简单" value="简单"></el-option>
                <el-option label="中等" value="中等"></el-option>
                <el-option label="困难" value="困难"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述">
              <el-input type="textarea" v-model="form.desc" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item label="答案">
              <el-input type="textarea" v-model="form.desc" rows="10" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane> -->
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "commit",
  data() {
    return {
      form: {
        level: "",
        desc: "",
        knowledge: "",
        choice:["","","",""],
        type:"",
        chapter:""
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.choice .el-input 
  width 300px
  margin-right 20px
</style>