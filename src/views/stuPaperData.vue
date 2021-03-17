<template>
  <div>
    <div id="stuPaperData" class="echarts" ref="stuPaperData"></div>
  </div>
</template>
<script>
export default {
  mounted() {
   
    this.stuResult();
  },
  Updated(){
 
    this.stuResult();
  },
  methods: {
  
    stuResult() {
      var dom = this.$refs.stuPaperData;
      var myChart = this.$echarts.init(dom);
      let option = {
        title: {
          text: "题目统计",
        },
        tooltip: {},
        legend: {
          data: ["题目数量", "正确回答数量"],
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 1,
              padding: [3, 5],
            },
          },
          indicator: [
            { name: "加法", max: 50 },
            { name: "减法", max: 50 },
            { name: "乘法", max: 50 },
            { name: "除法", max: 50 },
            { name: "算法", max: 50 },
            { name: "语法", max: 50 },
          ],
        },
        series: [
          {
            name: "个人数据",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [10, 20, 30, 30, 50, 10],
                name: "题目数量",
              },
              {
                value: [10, 18, 28, 10, 42, 10],
                name: "正确回答数量",
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang="stylus" scoped>
.echarts {
  width: 500px;
  height: 500px;
  margin-bottom: 10px;
}
</style>