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
        <el-popover placement="bottom-start" width="200" trigger="hover">
          <div>
            <div>支持问答类型：</div>
            <div>(1) XXX地方适合种植什么?</div>
            <div>(2) XXX地区气候</div>
            <div>(3) 植物的营养</div>
            <div>(4) 植物的学科类目</div>
          </div>
          <i slot="reference" class="el-icon-warning-outline fontColor"></i>
        </el-popover>

        <span class="fontStyle">例如:</span>
        <span class="caseStyle" v-for="item in cases" v-bind:key="item">
          {{
          item
          }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "KnowledgeSearch",
  data() {
    return {
      inputdata: "",
      cases: ["崇明县适合种什么植物?", "胡萝卜汁含有哪些营养成分?"]
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
      this.$router.push("/form2/overview");
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
    .fontColor {
      color: #c52275;
      margin-right: 12px;
      line-height: 30px;
    }
    .fontStyle,
    i {
      color: #999;
    }
    .caseStyle {
      margin-right: 20px;
      color: #daf2f6;
    }
    i {
      font-size: 24px;
    }
  }

  .el-input {
  }
}
</style>
