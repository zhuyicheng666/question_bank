<template>
  <div>
    <div id="pie" class="echarts" ref="pie"></div>
    <div id="echarts" class="echarts" ref="echarts"></div>
    <!-- <div id="echarts2" class="echarts"></div> -->

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
          <el-popover placement="right" width="800" trigger="click">
            <stuPaperData />
            <el-button slot="reference" type="text" size="small"
              >查看数据</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import stuPaperData from "./stuPaperData";
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
  components: {
    stuPaperData,
  },
  mounted() {
    this.pie();
    this.paper();
    // this.stuResult();
  },
  methods: {
    checkWrong() {
      window.open("/stuWrongAnswer", "_blank");
    },
    pie() {
      var dom = this.$refs.pie;
      var myChart = this.$echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "题目的分布",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              {
                value: 235,
                name: "一元二次方程",
              },
              {
                value: 274,
                name: "10以内的加法",
              },
              {
                value: 310,
                name: "50以内的乘法",
              },
              {
                value: 335,
                name: "方程组",
              },
              {
                value: 400,
                name: "英语",
              },
            ],
          },
        ],
      });
    },
    paper() {
      var dom =this.$refs.echarts;
      var myChart = this.$echarts.init(dom);
      let option = {
        title:{
          text:"单题正确率统计"
        },
        xAxis: {
          type: "category",
          data: ["第一题", "第二题", "第三题", "第四题", "第五题", "第六题", "第七题"],
        },
        yAxis: {
          type: "value",
          max: 100
        },
        series: [
          {
            data: [80, 90, 75, 80, 70, 80, 100],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart.setOption(option);
    },

    // stuResult() {
    //   var dom = document.getElementById("echarts2");
    //   var myChart = this.$echarts.init(dom);
    //   let option = {
    //     legend: {},
    //     tooltip: {},
    //     dataset: {
    //       source: [
    //         ["product", "2015", "2016", "2017"],
    //         ["Matcha Latte", 43.3, 85.8, 93.7],
    //         ["Milk Tea", 83.1, 73.4, 55.1],
    //         ["Cheese Cocoa", 86.4, 65.2, 82.5],
    //         ["Walnut Brownie", 72.4, 53.9, 39.1],
    //       ],
    //     },
    //     xAxis: { type: "category" },
    //     yAxis: {},
    //     // Declare several bar series, each will be mapped
    //     // to a column of dataset.source by default.
    //     series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    //   };
    //   myChart.setOption(option);
    // },
  },
};
</script>
<style lang="stylus" scoped>
#echarts {
  width: 600px;
  height: 600px;
  margin-bottom: 10px;
}

#pie {
  width: 500px;
  height: 500px;
}
</style>