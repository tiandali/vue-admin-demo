<template>
  <div class="wel-contailer">
    <div class="banner-text">
      <div style="text-align: center;">
        <img
          src="https://gitee.com/li_haodong/picture_management/raw/master/pic/WechatIMG9.png"
          height="256"
          width="256"
          alt="pre系统logo"
        />
        <el-button type="primary" @click="sendData">主要按钮</el-button>
      </div>
      <div :id="id" :class="className" :style="{height:height,width:width}" />
      <!-- <span>
        <a href="https://gitee.com/li_haodong/pre" target="_blank">
          <img src="https://img.shields.io/badge/Pre-1.1-green.svg" alt="Build Status" />
        </a>
        <img
          src="https://img.shields.io/badge/spring--boot-2.1.6.RELEASE-green.svg"
          alt="spring-boot"
        />
        <img src="https://img.shields.io/badge/security-5.1.5-blue.svg" alt="security" />
        <img src="https://img.shields.io/badge/mybatis--plus-3.1.2-blue.svg" alt="mybatis-plus" />
      </span>
      <br />
      -->
      <span>
        <!-- <el-collapse v-model="activeNames">
          <el-collapse-item title="Pre RBAC权限管理系统" name="1">
            <div>基于Spring Boot 2.1.6.RELEASE</div>
            <div>基于Spring Security 5.1.5</div>
          </el-collapse-item>
          <el-collapse-item title="Pre 完美的容器化支持" name="2">
            <div>支持docker部署</div>
          </el-collapse-item>
          <el-collapse-item title="Pre 完美解决前后分离第三方登录" name="3">
            <div>支持第三方社交登录</div>
          </el-collapse-item>
          <el-collapse-item title="Pre 项目特点" name="4">
            <div>前后端分离架构</div>
            <div>Jwt Token 鉴权机制</div>
            <div>代码注释丰富，极其简洁风格，上手快易理解</div>
            <div>采用Restfull API 规范开发</div>
            <div>统一异常拦截，友好的错误提示</div>
            <div>基于注解 + Aop切面实现全方位日记记录系统</div>
            <div>基于Mybatis拦截器 + 策略模式实现数据权限控制</div>
          </el-collapse-item>
          <el-collapse-item title="基本功能" name="4">
            <div>用户管理 、角色管理 、角色管理 、菜单管理 、部门管理 、社交账号管理</div>
            <div>岗位管理 、字典管理 、操作日志 、异常日志 、代码生成</div>
            <div><a href="https://gitee.com/li_haodong/pre" target="_blank">详细介绍Pre </a></div>
          </el-collapse-item>
        </el-collapse>-->
      </span>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import axios from "axios";
import request from "@/utils/request";

export default {
  name: "Index",
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
      default: "500px"
    }
  },
  data() {
    return {
      activeNames: ["1", "2", "3", "4"],
      DATA: [],
      text: "",
      actor: "",
      count: 0,
      isText: false
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
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));

      const xAxisData = [];
      const data = [];
      const data2 = [];
      for (let i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3);
      }
      let graph2 = {
        nodes: [
          {
            id: "0",
            label: { normal: { show: true } },
            name: "dali",
            value: 1000,
            symbolSize: 10,
            category: 0,
            draggable: true,
            itemStyle: null,
            x: null,
            y: null,
            attributes: { modularity_class: 0 }
          },
          {
            id: "1",
            label: { normal: { show: true } },
            name: "jianling",
            value: 200,
            symbolSize: 30,
            category: 0,
            draggable: true,
            itemStyle: null,
            x: null,
            y: null,
            attributes: { modularity_class: 0 }
          },
          {
            id: "2",
            label: { normal: { show: true } },
            name: "weiya",
            value: 700,
            symbolSize: 30,
            category: 0,
            draggable: true,
            itemStyle: null,
            x: null,
            y: null,
            attributes: { modularity_class: 0 }
          },
          {
            id: "3",
            label: { normal: { show: true } },
            name: "yusen",
            value: 700,
            symbolSize: 30,
            category: 0,
            draggable: true,
            itemStyle: null,
            x: null,
            y: null,
            attributes: { modularity_class: 0 }
          }
        ],
        links: [
          {
            id: "0",
            source: "1",
            target: "0",
            name: null,
            lineStyle: { normal: {} }
          },
          {
            id: "1",
            source: "2",
            target: "0",
            name: null,
            lineStyle: { normal: {} }
          },
          {
            id: "2",
            source: "2",
            target: "1",
            name: null,
            lineStyle: { normal: {} }
          },
          {
            id: "3",
            source: "3",
            target: "0",
            name: null,
            lineStyle: { normal: {} }
          },
          {
            id: "4",
            source: "3",
            target: "1",
            name: null,
            lineStyle: { normal: {} }
          },
          {
            id: "5",
            source: "3",
            target: "2",
            name: null,
            lineStyle: { normal: {} }
          }
        ]
      };
      var categories = [];
      for (var i = 0; i < 1; i++) {
        categories[i] = {
          name: "类目" + i
        };
      }

      this.chart.setOption({
        backgroundColor: "#08263a",
        color: ["#199475", "#61a0a8", "#d48265", "#91c7ae", "#749f83"],
        grid: {
          left: "5%",
          right: "5%"
        },
        xAxis: [
          {
            show: false,
            data: xAxisData
          },
          {
            show: false,
            data: xAxisData
          }
        ],

        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#4a657a"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#08263f"
            }
          },
          axisTick: {
            show: false
          }
        },
        legend: [
          {
            // selectedMode: 'single',
            data: categories.map(function(a) {
              return a.name;
            })
          }
        ],
        animation: false,
        series: [
          {
            name: "ssss",
            type: "graph",
            layout: "force",
            data: graph2.nodes,
            links: graph2.links,
            categories: categories,
            roam: true,
            label: {
              position: "right"
            },
            force: {
              repulsion: 10000
            }
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
    },
    sendData() {
      request({
        url: "/testpatato",
        method: "get",
        params: { user_text: "土豆" }
      });
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.wel-contailer {
  position: relative;
}

.banner-text {
  position: relative;
  padding: 0 20px;
  font-size: 20px;
  text-align: center;
  color: #333;
}

.banner-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  display: none;
}

.actor {
  height: 250px;
  overflow: hidden;
  font-size: 18px;
  color: #333;
}

.actor:after {
  content: "";
  width: 3px;
  height: 25px;
  vertical-align: -5px;
  margin-left: 5px;
  background-color: #333;
  display: inline-block;
  animation: blink 0.4s infinite alternate;
}

.typeing:after {
  animation: none;
}

@keyframes blink {
  to {
    opacity: 0;
  }
}
</style>
