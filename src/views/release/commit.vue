<template>
  <div>
    <el-card shadow="always">
      <h3>添加:</h3>
      <el-tabs tab-position="left" v-model="type">
        <el-tab-pane label="判断" name="judgement">
          <el-form
            :model="form"
            label-width="80px"
            :rules="judgementRule"
            ref="judgementForm"
          >
            <el-form-item label="章节" prop="chapter">
              <!-- <el-input v-model="form.chapter" clearable></el-input> -->
              <el-select v-model="form.chapter" placeholder="请选择章节"  @change="getKnowledge">
                <el-option
                  v-for="item in chapterOption"
                  :key="item.index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="知识点" prop="knowledgePoint">
               <el-autocomplete
              v-model="form.knowledgePoint"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入知识点"
            ></el-autocomplete>
            </el-form-item>

            <el-form-item label="难度" prop="difficulty">
              <el-select v-model="form.difficulty" placeholder="请选择难度">
                <el-option label="简单" value="1"></el-option>
                <el-option label="中等" value="2"></el-option>
                <el-option label="困难" value="3"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述" prop="question" >
              <div id="judgementQuestion">

              </div>
              <!-- <el-input
                type="textarea"
                v-model="form.question"
                rows="3"
                clearable
              ></el-input> -->
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
              <!-- <el-input
                type="textarea"
                v-model="form.answer"
                rows="10"
                clearable
                placeholder="格式为T,True,F,False!"
              ></el-input> -->

              <el-radio v-model="form.answer" label="True">True</el-radio>
              <el-radio v-model="form.answer" label="False">False</el-radio>


            </el-form-item>
            <el-form-item >
                <a href="#" class="addProcess" @click="showProcess=!showProcess">+增加题目解析</a>
            </el-form-item>
            <el-form-item label="解析" prop="process" v-show="showProcess">
              <div id="judgementProcess"></div>
              <!-- <el-input
                type="textarea"
                v-model="form.process"
                rows="10"
                clearable
              ></el-input> -->
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
             <el-select v-model="form.chapter" placeholder="请选择章节" @change="getKnowledge">
                <el-option
                  v-for="item in chapterOption"
                  :key="item.index"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="知识点" prop="knowledgePoint">
               <el-autocomplete
              v-model="form.knowledgePoint"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入知识点"
            ></el-autocomplete>
            </el-form-item>
           

            <el-form-item label="难度" prop="difficulty">
              <el-select v-model="form.difficulty" placeholder="请选择难度">
                <el-option label="简单" value="1"></el-option>
                <el-option label="中等" value="2"></el-option>
                <el-option label="困难" value="3"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="题目描述" prop="question" >
              <div id="choiceQuestion">

              </div>
              <!-- <el-input
                type="textarea"
                v-model="form.question"
                rows="3"
                clearable
              ></el-input> -->
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


            <!-- <el-form-item label="选项" class="choice" prop="tempOption">
              
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
            </el-form-item> -->



          <el-form-item label="选项A"  prop="tempOption" >
              <div id="optionA"></div>
              <!-- <el-input
                v-model="form.tempOption[0]"
                clearable
                placeholder="请输入选项A "
              ></el-input> -->

            </el-form-item>

<el-form-item label="选项B"  prop="tempOption">
              <div id="optionB"></div>
              <!-- <el-input
                v-model="form.tempOption[1]"
                clearable
                placeholder="请输入选项B "
              ></el-input> -->

            </el-form-item>
            <el-form-item label="选项C"  prop="tempOption">
              <div id="optionC"></div>
              <!-- <el-input
                v-model="form.tempOption[2]"
                clearable
                placeholder="请输入选项C "
              ></el-input> -->

            </el-form-item>
            <el-form-item label="选项D"  prop="tempOption">
              <div id="optionD"></div>
              <!-- <el-input
                v-model="form.tempOption[3]"
                clearable
                placeholder="请输入选项D "
              ></el-input> -->

            </el-form-item>






            <el-form-item label="答案" prop="answer">
              <!-- <el-input
                type="textarea"
                v-model="form.answer"
                rows="10"
                clearable
                placeholder="格式为A,B,C,D!"
              ></el-input> -->
              <el-radio v-model="form.answer" label="A">A</el-radio>
              <el-radio v-model="form.answer" label="B">B</el-radio>
              <el-radio v-model="form.answer" label="C">C</el-radio>
              <el-radio v-model="form.answer" label="D">D</el-radio>
            </el-form-item>
            <el-form-item >
                <a href="#" class="addProcess" @click="showProcess=!showProcess">+增加题目解析</a>
            </el-form-item>
            <el-form-item label="解析" prop="process" v-show="showProcess">
              <div id="choiceProcess"></div>
              <!-- <el-input
                type="textarea"
                v-model="form.process"
                rows="10"
                clearable
              ></el-input> -->
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit('form')"
                >立即添加</el-button
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
import E from 'wangeditor'
export default {
  name: "commit",

  data() {




    let judgementAnswerValidate = (rule, value, callback) => {
      if (this.form.answer === "T" || this.form.answer === "True") {
        this.form.answer = "True";
        callback();
      } else if (this.form.answer === "F" || this.form.answer === "False") {
        this.form.answer = "False";
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
      timeout:null,
        suggest:[],
       editorArr:[],
      // editorContent:'',
      // editorText:"",
      showProcess:false,
      type: "judgement",
      chapterOption:[],
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
  created(){
          let me =this
          me.$axios.post('http://localhost:3000/getChapter').then(


            function(res){
              if (res.data.code===200){
                 res.data.data.forEach(item=>{
                    me.chapterOption.push({
                      value:item.chapter,
                      label:item.chapter
                    })
                 })


              }else{
                   me.$message({
                    message: '获取失败',
                    type: 'warn'
                  });
              }
            }
           
          )

           


  
  },
  mounted() {
     let me =this
       function createEditor(id,mybind,height,index){
          
         const editor = new E(id)
         if(height!==undefined){
         
            editor.config.height = height
         }else{
            editor.config.height = 200
         }
       
        
        editor.config.onchange =  function (newHtml) {
          if(index===-1){
              me.form[mybind] = newHtml

            
            
          }else{
            console.log("here")
           me.form[mybind][index] = newHtml
          }
          
        }
        let uploadUrl = 'http://localhost:3000/uploadImg';

        editor.config.showLinkImg = false
          
           editor.config.uploadImgServer= uploadUrl//配置上传图片的接口api
           editor.config.uploadImgMaxSize=25 * 1024 * 1024//图片大小限制为 5M
           editor.config.uploadImgMaxLength= 10// 限制一次最多上传 10 张图片
           editor.config.uploadFileName='myFileName'//配置文件参数名（这个参数必需配置，后台用这个值接收图片）
            
      
 
 
    //监听函数在上传图片的不同阶段做相应处理
        editor.config.uploadImgHooks = {
            success: function () {
                console.log('图片上传并返回结果,图片插入成功')
            },
            fail: function () {
                console.log('图片上传并返回结果，但图片插入错误')
            },
            error: function () {
                console.log('图片上传出错')
            },
            timeout: function () {
                console.log('图片上传超时')
            },
            customInsert: function (insertImg, result,) {
                console.log(' 图片上传并返回结果');
                var url = result.data[0];
                insertImg(url)
            }
        };
        editor.create()
        me.editorArr.push(editor)
       }
      createEditor('#choiceQuestion','question',300,-1)
      createEditor('#judgementQuestion','question',300,-1)
      createEditor('#optionA','tempOption',150,0)
      createEditor('#optionB','tempOption',150,1)
      createEditor('#optionC','tempOption',150,2)
      createEditor('#optionD','tempOption',150,3)
      createEditor('#choiceProcess','process',300,-1)
      createEditor('#judgementProcess','process',300,-1)

  },
  watch:{

  },
  methods: {
    getKnowledge(value){
      let me =this
      let arr={
        chapter:value
      }
        me.$axios.post('http://localhost:3000/getKnowledge',{data:arr}).then(

            function(res){
              if (res.data.code===200){
                me.suggest=res.data.data
              }
              console.log(me.suggest)
            }
           
          )
    },
      querySearchAsync(queryString, cb) {
        var suggest = this.suggest;
        var results = queryString ? suggest.filter(this.createStateFilter(queryString)) : suggest;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
            let result 
          if(state.value!==null){
            result = state.value.indexOf(queryString)===0
          }
          return result;
        };
      },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.editorArr.forEach(item=>{
        item.txt.clear()
      })
      
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
                me.resetForm('judgementForm')
                me.resetForm('form')
                me.editorArr.forEach(editor=>{
                  editor.txt.clear()
                })
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

<style lang="stylus">
.choice .el-input {
  width: 300px;
  margin-bottom: 20px;
  display block
}
.addProcess{
  text-decoration: none;
  color:#409eff
}
.w-e-toolbar{
  z-index: 2 !important;
}
.w-e-menu{
  z-index: 1 !important;
}
.w-e-text-container{
  z-index: 1 !important;
}

  
</style>