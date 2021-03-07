<template>
  <div>
     <div id="pie" class="echarts"></div>
    <div id="echarts" class="echarts"></div>
    <div id="echarts2" class="echarts"></div>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="stuNo" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="date" label="答题日期" width="180">
      </el-table-column>
      <el-table-column prop="time" label="答题时间" width="180">
      </el-table-column>
      <el-table-column prop="score" label="成绩" width="180"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="checkWrong(scope.row)" type="text" size="small"
            >查看错题</el-button
          >
          <el-popover
            placement="right"
            width="800"
            trigger="click">
            123
            <stuPaperData/>
            <el-button slot="reference"  type="text" size="small"
            >查看数据</el-button
          >
          </el-popover>

          
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import stuPaperData from './stuPaperData'
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          time: "120",
          score: 100,
          stuNo: 171310427,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          time: "120",
          score: 100,
          stuNo: 171310427,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          time: "120",
          score: 100,
          stuNo: 171310427,
        },
      ],
    };
  },
  components:{
    stuPaperData
  },
  mounted() {
    this.pie()
    this.paper();
    this.stuResult();
  },
  methods: {
    checkWrong(){
      window.open("/stuWrongAnswer","_blank")
    },
    pie(){
       var dom = document.getElementById("pie");
      var myChart = this.$echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              {
                value: 235,
                name: "视频广告",
              },
              {
                value: 274,
                name: "联盟广告",
              },
              {
                value: 310,
                name: "邮件营销",
              },
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 400,
                name: "搜索引擎",
              },
            ],
          },
        ],
      });
    },
    paper() {
      var dom = document.getElementById("echarts");
      var myChart = this.$echarts.init(dom);
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }],
      };
      myChart.setOption(option);
    },
    stuResult() {
      var dom = document.getElementById("echarts2");
      var myChart = this.$echarts.init(dom);
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "2015", "2016", "2017"],
            ["Matcha Latte", 43.3, 85.8, 93.7],
            ["Milk Tea", 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 86.4, 65.2, 82.5],
            ["Walnut Brownie", 72.4, 53.9, 39.1],
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="stylus" scoped>
.echarts {
  width: 800px;
  height: 800px;
  margin-bottom: 10px;
}
</style>