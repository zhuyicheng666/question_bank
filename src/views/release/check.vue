<template>
  <div>
    <el-card shadow="always" class="check">
      <el-collapse>
        <el-collapse-item  name="1">
          
          <template slot="title">
               <el-badge :value="12" class="item">
                  <span class="title">待审核内容</span>
                </el-badge>
          </template>

          <el-table :data="tableData" style="width: 100%" >
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="完整描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>

            </el-table-column>


            <el-table-column label="难度" prop="level"></el-table-column>

            <el-table-column label="知识点" prop="knowledge"></el-table-column>

            <el-table-column label="描述">
              <template v-slot="scope">{{scope.row.desc|ellipsis}}</template>
            </el-table-column>



            <el-table-column label="通过/失败" width="200px">
              <template v-slot="scope">
                <el-button
                  type="success"
                  icon="el-icon-check"
                  circle
                  @click="success(scope.row)"
                ></el-button>

                <el-button
                  type="danger"
                  icon="el-icon-close"
                  circle
                  @click="fail(scope.row)"
                ></el-button>
              </template>
            </el-table-column>


          </el-table>

        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
   filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 15) {
        return value.slice(0, 15) + "...";
      }
      return value;
    }
  },
  data(){
    return {
        tableData: [
        {
          
          level: "1级",
          knowledge: "这是计算题",
          desc: "1+1等于2"
        },
        {
          
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3"
        },
        {
          
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5"
        },
        {
          
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515"
        },
        {
          
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25"
        },
          {
          
          level: "1级",
          knowledge: "二元一次方式解法",
          desc: "1+1等于2"
        },
        {
          
          level: "2级",
          knowledge: "二元一次方式解法",
          desc: "1+2等于3"
        },
        {
          
          level: "3级",
          knowledge: "二元一次方式解法",
          desc: "5+1等于5"
        },
        {
          
          level: "1级",
          knowledge: "二元一次方式解法",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515"
        },
        {
          
          level: "1级",
          knowledge: "二元十次方式解法",
          desc: "1525+2=15151525+25"
        }
      ],
    }
  }
};
</script>

<style lang="stylus" scoped>
  .title
    font-size:18px
    font-weight:600
</style>