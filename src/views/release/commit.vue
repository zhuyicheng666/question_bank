<template>
  <div>
    <el-card shadow="always">
      <h3>上传:</h3>
      <el-tabs tab-position="left" v-model="type">
        <el-tab-pane label="判断" name="judgement">
          <el-form
            :model="form"
            label-width="80px"
            :rules="judgementRule"
            ref="judgementForm"
          >
            <el-form-item label="章节" prop="chapter">
              <el-input v-model="form.chapter" clearable></el-input>
            </el-form-item>
            <el-form-item label="知识点" prop="knowledgePoint">
              <el-input v-model="form.knowledgePoint" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度" prop="difficulty">
              <el-select v-model="form.difficulty" placeholder="请选择难度">
                <el-option label="简单" value="1"></el-option>
                <el-option label="中等" value="2"></el-option>
                <el-option label="困难" value="3"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述" prop="question">
              <el-input
                type="textarea"
                v-model="form.question"
                rows="3"
                clearable
              ></el-input>
            </el-form-item>
            <!-- <el-upload
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
            </el-upload> -->
            <el-form-item label="答案" prop="answer">
              <el-input
                type="textarea"
                v-model="form.answer"
                rows="10"
                clearable
                placeholder="格式为T,True,F,False!"
              ></el-input>
            </el-form-item>
            <el-form-item label="解析" prop="process">
              <el-input
                type="textarea"
                v-model="form.process"
                rows="10"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('judgementForm')"
                >立即创建</el-button
              >
              <el-button @click="resetForm('judgementForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="选择" name="choice">
          <el-form
            :model="form"
            label-width="80px"
            :rules="choiceRule"
            ref="form"
          >
            <el-form-item label="章节" prop="chapter">
              <el-input v-model="form.chapter" clearable></el-input>
            </el-form-item>
            <el-form-item label="知识点" prop="knowledgePoint">
              <el-input v-model="form.knowledgePoint" clearable></el-input>
            </el-form-item>

            <el-form-item label="难度" prop="difficulty">
              <el-select v-model="form.difficulty" placeholder="请选择难度">
                <el-option label="简单" value="1"></el-option>
                <el-option label="中等" value="2"></el-option>
                <el-option label="困难" value="3"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述" prop="question">
              <el-input
                type="textarea"
                v-model="form.question"
                rows="3"
                clearable
              ></el-input>
            </el-form-item>
            <!-- <el-upload
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
            </el-upload> -->

            <el-form-item label="选项" class="choice" prop="tempOption">
              <el-input
                v-model="form.tempOption[0]"
                clearable
                placeholder="请输入选项A "
              ></el-input>

              <el-input
                v-model="form.tempOption[1]"
                clearable
                placeholder="请输入选项B "
              ></el-input>

              <el-input
                v-model="form.tempOption[2]"
                clearable
                placeholder="请输入选项C "
              ></el-input>

              <el-input
                v-model="form.tempOption[3]"
                clearable
                placeholder="请输入选项D "
              ></el-input>
            </el-form-item>

            <el-form-item label="答案" prop="answer">
              <el-input
                type="textarea"
                v-model="form.answer"
                rows="10"
                clearable
                placeholder="格式为A,B,C,D!"
              ></el-input>
            </el-form-item>
            <el-form-item label="解析" prop="process">
              <el-input
                type="textarea"
                v-model="form.process"
                rows="10"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')"
                >立即创建</el-button
              >
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "commit",
  data() {
    let judgementAnswerValidate = (rule, value, callback) => {
      if (this.form.answer === "T" || this.form.answer === "True") {
        this.form.answer === "True";
        callback();
      } else if (this.form.answer === "F" || this.form.answer === "False") {
        this.form.answer === "False";
        callback();
      } else {
        callback(new Error("答案格式不合要求!"));
      }
    };

    let choiceAnswerValidate = (rule, value, callback) => {
      if (
        this.form.answer === "A" ||
        this.form.answer === "B" ||
        this.form.answer === "C" ||
        this.form.answer === "D"
      ) {
        callback();
      } else {
        callback(new Error("答案格式不合要求!"));
      }
    };
    let optionValidate = (rule, value, callback) => {
      if (
        this.form.tempOption[0] !== "" &&
        this.form.tempOption[1] !== "" &&
        this.form.tempOption[2] !== "" &&
        this.form.tempOption[3] !== ""
      ) {
        callback();
      } else {
        callback(new Error("不能为空!"));
      }
    };
    return {
      type: "judgement",

      form: {
        chapter: "",
        knowledgePoint: "",
        question: "",
        option: [],
        difficulty: "",
        picture: "",
        answer: "",
        process: "",
        tempOption: ["", "", "", ""],
      },
      judgementRule: {
        chapter: [{ required: true, message: "请输入章节", trigger: "blur" }],
        knowledgePoint: [
          { required: true, message: "请输入知识点", trigger: "blur" },
        ],
        question: [{ required: true, message: "请输入题目", trigger: "blur" }],
        answer: [
          { required: true, message: "请输入答案", trigger: "blur" },
          {
            validator: judgementAnswerValidate,
            trigger: "blur",
          },
        ],
        difficulty: [
          { required: true, message: "请选择难度", trigger: "blur" },
        ],
      },
      choiceRule: {
        chapter: [{ required: true, message: "请输入章节", trigger: "blur" }],
        knowledgePoint: [
          { required: true, message: "请输入知识点", trigger: "blur" },
        ],
        question: [{ required: true, message: "请输入题目", trigger: "blur" }],
        answer: [
          { required: true, message: "请输入答案", trigger: "blur" },
          {
            validator: choiceAnswerValidate,
            trigger: "blur",
          },
        ],
        difficulty: [
          { required: true, message: "请选择难度", trigger: "blur" },
        ],
        tempOption: [
          {
            validator: optionValidate,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          return false;
        } else {
          if (this.type === "judgement") {
            this.form.type = "judgement";
            this.form.option = [
              { option: "A", text: "True" },
              { option: "B", text: "False" },
            ];
          } else {
            this.form.type = "choice";
            let tempArray = [];
            tempArray[0] = { option: "A", text: this.form.tempOption[0] };
            tempArray[1] = { option: "B", text: this.form.tempOption[1] };
            tempArray[2] = { option: "C", text: this.form.tempOption[2] };
            tempArray[3] = { option: "D", text: this.form.tempOption[3] };
            this.form.option = tempArray;
          }
          let me =this
          me.$axios.post('http://localhost:3000/commit',{data:me.form}).then(

            function(res){
              if (res.data.code===200){
                 me.$message({
                    message: '恭喜你，提交成功',
                    type: 'success'
                  });
              }else{
                   me.$message({
                    message: '提交失败',
                    type: 'warn'
                  });
              }
            }
           
          )
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.choice .el-input {
  width: 300px;
  margin-right: 20px;
}
</style>