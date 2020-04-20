<template>
  <div class="searchMain">
    <div class="inputContent">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        @change="queryEntity"
        v-model="inputdata"
        @input="getInputValue"
      ></el-input>
      <div class="caseBar">
        <span class="fontStyle">例如:</span>
        <span class="caseStyle" v-for="item in cases" v-bind:key="item">{{item}}</span>
        <i class="el-icon-warning-outline"></i>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import request from "@/utils/request";
export default {
  name: "SearchEntity",
  data() {
    return {
      inputdata: "",
      cases: ["土豆", "玉米", "猪肉", "水稻"]
    };
  },
  created() {},
  methods: {
    getInputValue(value) {
      console.log("输入框当前的value: ", value);
      this.inputdata = value;
    },
    queryEntity(value) {
      console.log("搜索的value: ", value);
      // axios.get("http://192.168.2.101/hello");
      request({
        url: "/api/testpatato",
        method: "get",
        params: { user_text: "土豆" }
      });
      this.$router.push("/info");
    }
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.searchMain {
  min-height: calc(100vh - 80px);
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url("../../assets/img/bg.png") #00071a no-repeat;
  .inputContent {
    padding-top: 200px;
    margin: 0 392px;
    // width: 615px;
  }
  .caseBar {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-content: center;
    .fontStyle {
      color: #daf2f6;
    }
    .caseStyle {
      margin-right: 20px;
      color: #5a7095;
    }
    i {
      line-height: 30px;
      font-size: 24px;
      color: #c52275 !important;
    }
  }

  .el-input {
  }
}
</style>