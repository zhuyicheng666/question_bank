<template>
  <el-card class="box-card" id="pdfDom">
    <h2 class="title">{{ title }}</h2>
    <el-switch v-model="sort" active-text="按正确率" inactive-text="">
    </el-switch>

    <div v-show="sort===false">
          <div class="Choice" v-if="choiceData.length !== 0">
      <el-row>
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>

      <div
        v-for="(item, index) in choiceData"
        :key="index"
        class="line marginBottom"
      >
        <el-row class="marginBottom">
          <el-col :span="1" :offset="1"
            ><p>{{ index + 1 }}</p></el-col
          >
          <el-col :span="20"><div v-html="item.question"></div></el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'A')"
              label="A"
              >A.
            </el-radio>
          </el-col>
          <!-- <el-col :span="0.5"  class="option"> A.&nbsp;   </el-col> -->

          <el-col :span="20"><div v-html="item.optionA"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'A')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "A") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('A', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'B')"
              label="B"
              >B.
            </el-radio>
          </el-col>
          <!-- <el-col :span="0.5" class="option" > B. &nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionB"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'B')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "B") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('B', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'C')"
              label="C"
              >C.</el-radio
            >
          </el-col>
          <!-- <el-col :span="0.5"  class="option"> C.&nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionC"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'C')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "C") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('C', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'D')"
              label="D"
              >D.</el-radio
            >
          </el-col>
          <!-- <el-col :span="0.5" class="option" > D.&nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionD"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'D')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "D") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('D', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

      </div>
    </div>

    <div class="Judge" v-if="judgementData.length !== 0">
      <el-row>
      
        <el-col :offset="1"><h3>判断题</h3></el-col>
      </el-row>

      <div
        v-for="(item, index) in judgementData"
        :key="index"
        class="line marginBottom"
      >
        <el-row class="marginBottom">
          <el-col :span="1" :offset="1"
            ><p>{{ index+1 }}</p></el-col
          >
          <el-col :span="20"><div v-html="item.question"></div></el-col>
        </el-row>
        <el-row>
          <el-col :offset="2">
            <el-radio
              :value="item.answer==='True'?'T':'F'"
           
              label="T"
              >{{ item.optionA }}</el-radio
            >
          </el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'True')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "True") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('True', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row>
          <el-col :offset="2">
            <el-radio
              :value="item.answer==='True'?'T':'F'"
              
              label="F"
              >{{ item.optionB }}</el-radio
            >
          </el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'False')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "False") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('False', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>
      </div>
    </div>
    </div>
    <div v-show="sort === true">
          <div class="Choice" v-if="rateChoiceData.length !== 0">
      <el-row>
        <el-col :offset="1"><h3>选择题</h3></el-col>
      </el-row>

      <div
        v-for="(item, index) in rateChoiceData"
        :key="index"
        class="line marginBottom"
      >
        <el-row class="marginBottom">
          <el-col :span="1" :offset="1"
            ><p>{{ item.mindex }}</p></el-col
          >
          <el-col :span="20"><div v-html="item.question"></div></el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'A')"
              label="A"
              >A.
            </el-radio>
          </el-col>
          <!-- <el-col :span="0.5"  class="option"> A.&nbsp;   </el-col> -->

          <el-col :span="20"><div v-html="item.optionA"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'A')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "A") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('A', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'B')"
              label="B"
              >B.
            </el-radio>
          </el-col>
          <!-- <el-col :span="0.5" class="option" > B. &nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionB"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'B')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "B") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('B', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'C')"
              label="C"
              >C.</el-radio
            >
          </el-col>
          <!-- <el-col :span="0.5"  class="option"> C.&nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionC"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'C')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "C") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('C', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>

              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row type="flex" align="middle">
          <el-col :offset="2" :span="0.5">
            <el-radio
              class="option"
              v-model="item.answer"
              :disabled="disabled(item.answer, 'D')"
              label="D"
              >D.</el-radio
            >
          </el-col>
          <!-- <el-col :span="0.5" class="option" > D.&nbsp;   </el-col> -->
          <el-col :span="20"><div v-html="item.optionD"></div></el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'D')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "D") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('D', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

      </div>
    </div>

    <div class="Judge" v-if="rateJudgementData.length !== 0">
      <el-row>
      
        <el-col :offset="1"><h3>判断题</h3></el-col>
      </el-row>

      <div
        v-for="(item, index) in rateJudgementData"
        :key="index"
        class="line marginBottom"
      >
        <el-row class="marginBottom">
          <el-col :span="1" :offset="1"
            ><p>{{ item.mindex }}</p></el-col
          >
          <el-col :span="20"><div v-html="item.question"></div></el-col>
        </el-row>
        <el-row>
          <el-col :offset="2">
            <el-radio
            :value="item.answer==='True'?'T':'F'"
            
              label="T"
              >{{ item.optionA }}</el-radio
            >
          </el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'True')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "True") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('True', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>

        <el-row>
          <el-col :offset="2">
            <el-radio
              :value="item.answer==='True'?'T':'F'"
             
              label="F"
              >{{ item.optionB }}</el-radio
            >
          </el-col>
        </el-row>

        <el-row class="marginBottom">
          <el-col :span="6" :offset="2">
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="percentage(item.optionsum, 'False')"
              status="warning"
            ></el-progress>
          </el-col>
          <el-col :span="1"> {{ totalStu(item.optionsum, "False") }}人 </el-col>
          <el-col :span="1">
            <el-popover
              placement="top-start"
              title="学生名单"
              width="200"
              trigger="click"
              @click.native="handleClick('False', item.qid)"
            >
              <el-row>
                <ul class="icon-list">
                  <li v-for="myitem in stutable" :key="myitem.sid">
                    <el-button class="button">
                      <i class="el-icon-user-solid"></i>
                      <span class=".icon-name">{{ myitem.name }}</span>
                    </el-button>
                  </li>
                </ul>
              </el-row>
              <div slot="reference">
                <el-button>查看</el-button>
              </div>
            </el-popover>
          </el-col>
        </el-row>
      </div>
    </div>
    </div>

  </el-card>
</template>
<script>
export default {
  data() {
    return {
      stutable: [
        {
          name: "",
          index: "",
        },
      ],

      sort: false,
      rateJudgementData: [],
      rateChoiceData: [],
    };
  },

  computed: {
    title() {
      return this.$store.getters.getPaperData.title;
    },
    judgementData() {
      return this.$store.getters.getPaperData.judgementData;
    },
    choiceData() {
      return this.$store.getters.getPaperData.choiceData;
    },
  },

  created() {
    this.rateJudgementData = this._.cloneDeep(this.judgementData);
    this.rateJudgementData.forEach((item, index) => {
      item.mindex = index + 1;
      item.rightRate = this.percentage(item.optionsum, item.answer);
    });
    this.rateChoiceData = this._.cloneDeep(this.choiceData);
    this.rateChoiceData.forEach((item, index) => {
      item.mindex = index + 1;
      item.rightRate = this.percentage(item.optionsum, item.answer);
    });

    let sortby = function (itemA, itemB) {
      if (itemA.rightRate > itemB.rightRate) {
        return 1;
      } else if (itemA.rightRate === itemB.rightRate){
        return 0;
      }else{
        return -1
      }
    };

    let temp = this.rateChoiceData.sort(sortby);
    this.rateChoiceData =temp

   temp= this.rateJudgementData.sort(sortby);
   this.rateJudgementData = temp
  },

  methods: {
    format() {
      return 50;
    },
    handleClick(stuAnswer, qid) {
      let me = this;
      let queryArr = {
        stuAnswer: stuAnswer,
        pid: this.$store.getters.getPaperData.pid,
        qid: qid,
      };
      this.$axios
        .post("http://localhost:3000/getStuList", { data: queryArr })
        .then(function (res) {
          if (res.data.code === 200) {
            me.stutable = res.data.data;
          } else {
            console.log("保存失败");
          }
        });
    },
    percentage(array, item) {
      let total = 0,
        arrTotal = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i].stuAnswer === item) {
          total = array[i].total;
        }
        arrTotal = arrTotal + array[i].total;
      }
      if (arrTotal !== 0) {
        return Math.round((total / arrTotal) * 100);
      } else {
        return 0;
      }
    },
    totalStu(array, item) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i].stuAnswer === item) {
          total = array[i].total;
        }
      }
      if (total !== 0) {
        return total;
      } else {
        return 0;
      }
    },

    disabled(value, value2) {
      if (value === value2) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
<style  lang="stylus" scoped>
.title {
  margin: 0 auto;
  text-align: center;
}

.marginBottom {
  margin-bottom: 15px;
}

.line {
  font-size: 18px;
  word-wrap: break-word;
  word-break: normal;
}

.submit {
  display: block;
  margin: 0 auto;
}

#pdfDom>>>.el-radio:last-child {
  margin-right: 10px;
}

.marginBottom {
  margin-bottom: 10px;
}

.icon-list {
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
</style>