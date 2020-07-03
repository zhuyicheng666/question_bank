<template>
  <div>
    <el-card shadow="always" class="check">
      <el-collapse>
        <el-collapse-item  name="1">
          
          <template slot="title">
               <el-badge :value="12" class="item">
                  <span class="title">我发布的题目</span>
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


            <el-table-column label="描述">
              <template v-slot="scope">{{scope.row.desc|ellipsis}}</template>
            </el-table-column>



            <el-table-column label="状态" >
              <template v-slot="scope">
                   <el-steps :space="200" :active=handleActive(scope.row) finish-status="success"   >
                      <el-step title="已提交"></el-step>
                      <el-step title="审核中"></el-step>
                      <el-step title="审核结果" :status=handleStatus(scope.row)></el-step>
                    </el-steps>
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
          status:"success",
          desc: "1+1等于2"
        },
        {
         
          desc: "1+2等于3"
        },
        {
          
          status:"success",
          desc: "5+1等于5"
        },
        {
          
          status:"fail",
          desc:
            "1525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=15151525+2=1515"
        },
        {
          
          status:"fail",
          desc: "1525+2=15151525+25"
        }
      ],
    }
   
  } ,
  methods: {
      handleActive(row) {
        if (row.status=="success"){
           return 3
        }
        else if(row.status=="fail")
          {
            return 3
          }
        else {
          return 2
        }
      },
          handleStatus(row) {
        if (row.status=="success"){
           return "success"
        }
        else if(row.status=="fail")
          {
            return "error"
          }
       
      },
     
 
    },
};
</script>

<style lang="stylus" scoped>
  .title
    font-size:18px
    font-weight:600
</style>