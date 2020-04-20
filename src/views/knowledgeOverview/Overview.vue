<template>
  <div class="knowMain">
    <div class="leftCon">
      <div class="topInput">
        <el-input
          v-model="sample"
          suffix-icon="el-icon-search"
          size="mini"
          @change="queryEntity"
        ></el-input>
      </div>
      <div class="middleList">
        <div class="answer">答案</div>
        <div
          class="list"
          v-for="(item, index) in itemArr"
          :key="index"
          :class="{
            clickBg: index == clickIndex,
            hoverBg: index == hoverIndex
          }"
          @click="clickIndex = index"
          @mouseover="hoverIndex = index"
          @mouseout="hoverIndex = -1"
        >
          {{ item }}
        </div>
        <div class="pageStyle">
          <el-pagination background layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="rightCon">
      <div
        :id="id"
        :class="className"
        :style="{ height: height, width: width }"
      />
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "Overview",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      sample: "土豆",
      itemArr: ["A", "B", "C", "D", "E", "F"],
      hoverIndex: -1, //表示当前hover的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
      clickIndex: -1 //表示当前点击的是第几个li 初始为 -1 或 null 不能为0 0表示第一个li
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    queryEntity(value) {
      console.log("value: ", value);
      this.sample = value;
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      let data = {
        nodes: [
          {
            name: "操作系统集团",
            category: 0
          },
          {
            name: "浏览器有限公司",
            category: 0
          },
          {
            name: "HTML科技",
            category: 0
          },
          {
            name: "JavaScript科技",
            category: 0
          },
          {
            name: "CSS科技",
            category: 0
          },
          {
            name: "Chrome",
            category: 1
          },
          {
            name: "IE",
            category: 1
          },
          {
            name: "Firefox",
            category: 1
          },
          {
            name: "Safari",
            category: 1
          }
        ],

        links: [
          {
            source: "浏览器有限公司",
            target: "操作系统集团",
            name: "参股"
          },
          {
            source: "HTML科技",
            target: "浏览器有限公司",
            name: "参股"
          },
          {
            source: "CSS科技",
            target: "浏览器有限公司",
            name: "参股"
          },
          {
            source: "JavaScript科技",
            target: "浏览器有限公司",
            name: "参股"
          },
          {
            source: "Chrome",
            target: "浏览器有限公司",
            name: "董事"
          },
          {
            source: "IE",
            target: "浏览器有限公司",
            name: "董事"
          },
          {
            source: "Firefox",
            target: "浏览器有限公司",
            name: "董事"
          },
          {
            source: "Safari",
            target: "浏览器有限公司",
            name: "董事"
          },
          {
            source: "Chrome",
            target: "JavaScript科技",
            name: "法人"
          }
        ]
      };

      const color1 = "#006acc";
      const color2 = "#ff7d18";
      const color3 = "#10a050";

      data.nodes.forEach(node => {
        if (node.category === 0) {
          node.symbolSize = 100;
          node.itemStyle = {
            color: color1
          };
        } else if (node.category === 1) {
          node.itemStyle = {
            color: color2
          };
        }
      });

      data.links.forEach(link => {
        link.label = {
          align: "center",
          fontSize: 12
        };

        if (link.name === "参股") {
          link.lineStyle = {
            color: color2
          };
        } else if (link.name === "董事") {
          link.lineStyle = {
            color: color1
          };
        } else if (link.name === "法人") {
          link.lineStyle = {
            color: color3
          };
        }
      });

      let categories = [
        {
          name: "公司",
          itemStyle: {
            color: color1
          }
        },
        {
          name: "董事",
          itemStyle: {
            color: color2
          }
        }
      ];
      this.chart.setOption({
        backgroundColor: "#02102D",
        title: {
          text: "知识图谱"
        },
        legend: [
          {
            // selectedMode: 'single',
            data: categories.map(x => x.name)
            // icon: 'circle'
          }
        ],
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 58,
            draggable: true,
            roam: true,
            focusNodeAdjacency: true,
            categories: categories,
            edgeSymbol: ["", "arrow"],
            // edgeSymbolSize: [80, 10],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20
                },
                formatter(x) {
                  return x.data.name;
                }
              }
            },
            label: {
              show: true
            },
            force: {
              repulsion: 2000,
              edgeLength: 120
            },
            data: data.nodes,
            links: data.links
          }
        ],
        animationEasing: "elasticOut",
        animationEasingUpdate: "elasticOut",
        animationDelay(idx) {
          return idx * 20;
        },
        animationDelayUpdate(idx) {
          return idx * 20;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.knowMain {
  min-height: calc(100vh - 80px);
  display: flex;
  flex: 1;
  background: #00071a;
  padding: 30px;
  .leftCon {
    display: flex;
    width: 450px;
    flex-direction: column;
    margin-right: 30px;
    .middleList {
      display: flex;
      flex: 1;
      flex-direction: column;
      background: #02102d;
      margin-top: 30px;
      padding-left: 30px;
      .answer {
        color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    .middleList .list {
      width: 390px;
      height: 70px;
      line-height: 60px;
      background: #5a7095;
      margin-bottom: 20px;
      padding-left: 30px;
      color: #fff;
      cursor: pointer;
    }
    .hoverBg {
      background: #13c6e2 !important;
      // color: red !important;
    }
    .clickBg {
      background: red;
      color: #fff;
    }
    .pageStyle {
      display: flex;
      justify-content: flex-end;
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #c52275;
      }
      .el-pagination {
        .btn-prev,
        .btn-next {
          background: #02102d;
          width: 32px;
          height: 23px;
          line-height: 23px;

          border: 1px solid rgba(90, 112, 149, 1);
          opacity: 1;
          border-radius: 14px;
        }
        .number {
          background: #02102d;
          width: 32px;
          height: 23px;
          line-height: 23px;
          border: 1px solid rgba(90, 112, 149, 1);
          opacity: 1;
          border-radius: 14px;
        }
      }
    }
  }
  .rightCon {
    display: flex;
    flex: 1;
  }
}
</style>
