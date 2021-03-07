<template>
  <el-card  >
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item  name="1">
    <template slot="title">
    <h3>试卷历史</h3>
    </template>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="paperNo" label="试卷编号" width="180"> </el-table-column>
      <el-table-column prop="date" label="答题日期" width="180"> </el-table-column>
      <el-table-column prop="teacherName" label="教师名" width="180">
      </el-table-column>
      <el-table-column prop="paperTitle" label="试卷名" width="180">
      </el-table-column>
      <el-table-column prop="time" label="考试用时" width="180">
      </el-table-column>
      <el-table-column prop="score" label="成绩" width="180">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看试卷</el-button
          >
          
        </template>
      </el-table-column>
    </el-table>
  </el-collapse-item>
  <el-collapse-item  name="2">
    <template slot="title">
    <h3>练习正确答题记录</h3>
    </template>
    <div>
      <questionRecord/>
    </div>
    

  </el-collapse-item>
  <el-collapse-item  name="3">
  <template slot="title">
    <h3>练习错题记录</h3>
    </template>

<div>
      <questionRecord/>
    </div>
  </el-collapse-item>

</el-collapse>
  </el-card>
</template>

<script>
import questionRecord from './questionRecord'
export default {
  components:{
    questionRecord
  },
  methods:{
    handleClick(row){
      console.log(row)
      
      window.open('/stuWrongAnswer', "_blank");
    }
  },
  data() {
      return {
        activeNames: ['1'],
        tableData: [
        {
          paperNo:'20210305',
          date: "2016-05-01",
          teacherName: "Tom",
          paperTitle: "期末考试",
          time: "100分钟",
          score:100

        },
        {
          paperNo:'2010105',
          date: "2014-01-01",
          teacherName: "Tom",
          paperTitle: "期中考试",
          time: "100分钟",
          score:90
        },
        {
          paperNo:'20210205',
          date: "2015-02-01",
          teacherName: "Tom",
          paperTitle: "单元考试",
          time: "100分钟",
          score:80
        },

      ],

      };
  }
}
</script>
<style lang="stylus" scoped>
.title
    font-size:18px
    font-weight:600
</style>