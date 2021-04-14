<template>
  <div>
    <!-- <div id="pie" class="echarts" ref="pie"></div>
    <div id="echarts" class="echarts" ref="echarts"></div> -->
    <!-- <div id="echarts2" class="echarts"></div> -->



  <el-row type="flex" justify="center" >
     <el-col :span='3' class="border grey">
       总人数
    </el-col>
    <el-col :span='3' class="border grey">
     错题数最少值
    </el-col>
     <el-col :span='3' class="border grey">
      错题数最大值
    </el-col>
  </el-row>
    <el-row type="flex" justify="center" >
     <el-col :span='3' class="border">
      {{total}}
    </el-col>
    <el-col :span='3' class="border">
     {{interval.least}}
    </el-col>
     <el-col :span='3' class="border">
        {{interval.most}}
    </el-col>
  </el-row>
<el-row type="flex" justify="center"   class="margintop" >
    <el-col :span='3' class="border grey">
      错题数0-5
    </el-col>
 <el-col :span='3' class="border grey">
      错题数6-10
    </el-col>
     <el-col :span='3' class="border grey">
      错题数11-15
    </el-col>
     <el-col :span='3' class="border grey">
      错题数16-20
    </el-col>
     <el-col :span='3' class="border grey">
      错题数21-40
    </el-col>
     <el-col :span='3' class="border grey"> 
      错题数40以上
    </el-col>

  </el-row>

<el-row type="flex" justify="center" >
    <el-col :span='3' class="border">
     {{interval.five}}人
    </el-col>
 <el-col :span='3' class="border">
    {{interval.ten}}人
    </el-col>
     <el-col :span='3' class="border">
     {{interval.fifteen}}人
    </el-col>
     <el-col :span='3' class="border">
   {{interval.twenty}}人
    </el-col>
     <el-col :span='3' class="border">
     {{interval.forty}}人
    </el-col>
     <el-col :span='3' class="border"> 
     {{interval.more}}人
    </el-col>

  </el-row>












    <el-row type="flex" justify="center">
      <el-col :span="12">
  <el-table :data="tableData" stripe style="width: 100%" class="table">
      <el-table-column prop="sid" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="date" label="答题日期" width="180">
      </el-table-column>
      <!-- <el-table-column prop="time" label="答题时间" width="180">
      </el-table-column> -->
      <el-table-column prop="score" label="错题数" width="180" sortable> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="checkWrong(scope.row)" type="text" size="small"
            >查看学生答题</el-button
          >
          <!-- <el-popover placement="right" width="800" trigger="click">
            <stuPaperData />
            <el-button slot="reference" type="text" size="small"
              >查看数据</el-button
            >
          </el-popover> -->
        </template>
      </el-table-column>
    </el-table>
      </el-col>

    </el-row>
  
  </div>
</template>

<script>
// import stuPaperData from "./stuPaperData";
export default {
  data() {
    return {
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     time: "120",
      //     score: 100,
      //     stuNo: 171310427,
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     time: "120",
      //     score: 100,
      //     stuNo: 171310427,
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     time: "120",
      //     score: 100,
      //     stuNo: 171310427,
      //   },
      // ],
    
    };
  },
  computed:{
    tableData(){
      return this.$store.getters.getResult
      
    },
    total(){
      
      let total=0
      for(let i =0;i<this.$store.getters.getResult.length;i++){
        total++
      }
      return total
    },
     interval(){

      let   interval={
        five:0,
        ten:0,
        fifteen:0,
        twenty:0,
        forty:0,
        more:0,
        least:0,
        most:0
      }
      for(let i =0;i<this.$store.getters.getResult.length;i++){
        if(i===0){
            interval.least=this.$store.getters.getResult[0].score
              interval.most=this.$store.getters.getResult[0].score
        }
        
        if(this.$store.getters.getResult[i].score<interval.least){
            interval.least=this.$store.getters.getResult[i].score
        }
        if(this.$store.getters.getResult[i].score>interval.least){
            interval.most=this.$store.getters.getResult[i].score
        }




      if (this.$store.getters.getResult[i].score>=0&&this.$store.getters.getResult[i].score<=5){

          interval.five= interval.five+1
        }
       else if (this.$store.getters.getResult[i].score>5&&this.$store.getters.getResult[i].score<=10){
          interval.ten= interval.ten+1
        }
       else  if (this.$store.getters.getResult[i].score>10&&this.$store.getters.getResult[i].score<=15){
          interval.fifteen= interval.fifteen+1
        }
        else if (this.$store.getters.getResult[i].score>15&&this.$store.getters.getResult[i].score<=20){
          interval.twenty= interval.twenty+1
        }
         else   if (this.$store.getters.getResult[i].score>20&&this.$store.getters.getResult[i].score<=40){
          interval.forty= interval.forty+1
        }
           else   if (this.$store.getters.getResult[i].score>40){
          interval.more= interval.more+1
        }
      }

     
      return interval
    },
    
  },
  components: {
    // stuPaperData,
  },
  mounted() {
    // this.pie();
    // this.paper();
    // this.stuResult();
  },
  methods: {
    checkWrong(row){
        let queryArr= {
      sid:window.localStorage.getItem("sid"),
      pid:row.pid
    }
    let me =this
     me.$axios.post('http://localhost:3000/searchAnsweredPaperRecord',{data:queryArr}).then(

            function(res){
              if (res.data.code===200){
                
              me.$store.commit('setAnsweredPaperRecord',res.data.data)
              me.$router.push({ name: 'stuWrongAnswer', params: res.data.data})
              
              }else{
                 console.log("保存失败") 
              }
            })
           
  
      
      
    }
    // checkWrong() {
    //   window.open("/stuWrongAnswer", "_blank");
    // },
    // pie() {
    //   var dom = this.$refs.pie;
    //   var myChart = this.$echarts.init(dom);
    //   // 绘制图表
    //   myChart.setOption({
    //     title: {
    //       text: "题目的分布",
    //       left: "center",
    //     },
    //     tooltip: {
    //       trigger: "item",
    //     },
    //     series: [
    //       {
    //         name: "访问来源",
    //         type: "pie",
    //         radius: "50%",
    //         data: [
    //           {
    //             value: 235,
    //             name: "一元二次方程",
    //           },
    //           {
    //             value: 274,
    //             name: "10以内的加法",
    //           },
    //           {
    //             value: 310,
    //             name: "50以内的乘法",
    //           },
    //           {
    //             value: 335,
    //             name: "方程组",
    //           },
    //           {
    //             value: 400,
    //             name: "英语",
    //           },
    //         ],
    //       },
    //     ],
    //   });
    // },
    // paper() {
    //   var dom =this.$refs.echarts;
    //   var myChart = this.$echarts.init(dom);
    //   let option = {
    //     title:{
    //       text:"单题正确率统计"
    //     },
    //     xAxis: {
    //       type: "category",
    //       data: ["第一题", "第二题", "第三题", "第四题", "第五题", "第六题", "第七题"],
    //     },
    //     yAxis: {
    //       type: "value",
    //       max: 100
    //     },
    //     series: [
    //       {
    //         data: [80, 90, 75, 80, 70, 80, 100],
    //         type: "bar",
    //         showBackground: true,
    //         backgroundStyle: {
    //           color: "rgba(180, 180, 180, 0.2)",
    //         },
    //       },
    //     ],
    //   };
    //   myChart.setOption(option);
    // },

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
.border{
  font-size:20px
  color:#3b3939
  border-bottom :1px solid #c5c2c2
  padding: 10px

}
.table{
  margin-top:150px
  
}
.grey{
  background-color:#d3d3d3
}
.margintop{
  margin-top:20px
}
</style>