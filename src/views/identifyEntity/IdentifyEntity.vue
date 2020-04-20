<template>
  <div class="artMain">
    <i class="iconfont iconziyuan1"></i>
    <el-input
      type="textarea"
      autosize
      :placeholder="msg"
      prefix-icon="el-icon-search"
      @change="queryData"
      v-model="inputdata"
      @input="getInputValue"
    ></el-input>
    <el-button class="btnStyle" @click="queryData" type="primary">提交</el-button>
    <div v-if="showData">
      <div>
        <div class="title">识别结果</div>
        <div class="contentStyle" v-html="inputdata2"></div>
      </div>
      <div>
        <div class="title">分词属性结果</div>
        <el-input type="textarea" autosize v-model="inputdata"></el-input>
      </div>
      <div>
        <div class="title">属性数据</div>
        <el-input type="textarea" autosize v-model="inputdata"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
let str = "玉米与传统的水稻、小麦等粮食作物相比";
function delData(str, data) {
  const label = "(" + str + ")";
  let regexp = new RegExp(",", "g");
  let val = label.replace(regexp, "|");
  let reg = new RegExp(val, "g");
  let test = data.replace(reg, function() {
    return `<span style="color:red">${arguments[0]}</span>`;
  });
  return test;
}

export default {
  name: "IdentifyEntity",
  data() {
    return {
      msg:
        "请输出相关数据，进行实体识别\n如：玉米与传统的水稻、小麦等粮食作物相比，玉米具有很强的耐旱性、耐寒性、耐贫瘠性以及极好的环境适应性。玉米的营养价值较高，是优良的粮食作物。作为中国的高产粮食作物，玉米是畜牧业、养殖业、水产养殖业等的重要饲料来源，也是食品、医疗卫生、轻工业、化工业等的不可或缺的原料之一。 [3] 由于玉米资源极为丰富、廉价且易于获得，它们还具有许多生物活性，如抗氧化、抗肿瘤、降血糖...",
      inputdata:
        "请输出相关数据，进行实体识别\n如：玉米与传统的水稻、小麦等粮食作物相比，玉米具有很强的耐旱性、耐寒性、耐贫瘠性以及极好的环境适应性。玉米的营养价值较高，是优良的粮食作物。作为中国的高产粮食作物，玉米是畜牧业、养殖业、水产养殖业等的重要饲料来源，也是食品、医疗卫生、轻工业、化工业等的不可或缺的原料之一。 [3] 由于玉米资源极为丰富、廉价且易于获得，它们还具有许多生物活性，如抗氧化、抗肿瘤、降血糖...",
      inputdata2: `请输出相关数据，进行实体识别\n如：玉米与传统的水稻、小麦等粮食作物相比，玉米具有很强的耐旱性、耐寒性、耐贫瘠性以及极好的环境适应性。玉米的营养价值较高，是优良的粮食作物。作为中国的高产粮食作物，玉米是畜牧业、养殖业、水产养殖业等的重要饲料来源，也是食品、医疗卫生、轻工业、化工业等的不可或缺的原料之一。 [3] 由于玉米资源极为丰富、廉价且易于获得，它们还具有许多生物活性，如抗氧化、抗肿瘤、降血糖...`,
      showData: false
    };
  },
  created() {},
  methods: {
    getInputValue(value) {
      console.log("输入框当前的value: ", value);
      this.inputdata = value;
    },
    queryData(value) {
      this.showData = true;
      const mark = "玉米,水稻,小麦";
      this.inputdata2 = delData(mark, this.inputdata2);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.artMain {
  min-height: calc(100vh - 80px);
  display: flex;
  flex: 1;
  flex-direction: column;
  background: url("../../assets/img/bg.png") #00071a no-repeat;

  padding: 160px 220px;
  i {
    font-size: 17px;
    color: #18191d;
    position: absolute;
    left: 250px;
    top: 168px;
    z-index: 99;
  }
  textarea {
    resize: none;
  }
  .el-textarea__inner {
    padding-left: 50px;
    letter-spacing: 2px;
  }
  .btnStyle {
    background: #c52275;
    margin: 30px auto;
    width: 120px;
    border-color: #c52275;
  }
  .title {
    height: 36px;
    line-height: 36px;
    align-items: center;
    color: #5a7095;
    margin-top: 10px;
  }
  .contentStyle {
    background: #fff;
    padding: 10px 30px;
    letter-spacing: 2px;
  }
  .content {
    background: #fff;
  }
}
</style>
