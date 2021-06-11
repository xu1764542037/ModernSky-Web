<template>
  <div id="noviceSteps">
    <h1 id="noviceSteps-title">欢迎来到ModernSky校园论坛</h1>
    <div id="noviceSteps-step1" v-show="step1Show">
      <h1>步骤一</h1>
    </div>
    <div id="noviceSteps-step2" v-show="step2Show">
      <h1>步骤二</h1>
    </div>
    <div id="noviceSteps-step3" v-show="step3Show">
      <h1>步骤三</h1>
    </div>
    <div id="noviceSteps-step4" v-show="step4Show">
      <h1>步骤四  回到首页</h1>
    </div>
    <div id="noviceSteps-steps">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"><h1>111</h1></el-step>
        <el-step title="步骤 2">2</el-step>
        <el-step title="步骤 3">3</el-step>
      </el-steps>
      <el-button style="margin-top: 12px;margin-left: 42%" @click="before">上一步</el-button>
      <el-button style="margin-top: 12px;margin-left: 3%" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "noviceSteps",
  data() {
    return {
      active: 0,
      step1Show: true,
      step2Show: false,
      step3Show: false,
      step4Show: false
    };
  },

  methods: {
    before() {
      if (this.active-- === 0) this.active = 0;
      console.log(this.active);
      if (this.active === 0) {
        this.step1Show = true
        this.step2Show = false
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 1){
        this.step1Show = false
        this.step2Show = true
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 2){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = true
        this.step4Show = false

      }
      else if (this.active === 3){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = false
        this.step4Show = true
      }
    },
    next() {
      if (this.active++ > 2) this.active = 3;
      console.log(this.active);

      if (this.active === 0) {
        this.step1Show = true
        this.step2Show = false
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 1){
        this.step1Show = false
        this.step2Show = true
        this.step3Show = false
        this.step4Show = false

      } else if (this.active === 2){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = true
        this.step4Show = false

      }
      else if (this.active === 3){
        this.step1Show = false
        this.step2Show = false
        this.step3Show = false
        this.step4Show = true
      }
    }
  }
}
</script>

<style scoped>
#noviceSteps {
  position: fixed;
  height: 100%;
  width: 100%;
  background: white;
}

#noviceSteps-title {
  position: absolute;
  margin-left: 36%;
  margin-top: 1%;
}

#noviceSteps-steps {
  position: absolute;
  width: 80%;
  margin-top: 35%;
  margin-left: 10%;
}


h1 {
  position: absolute;
  margin-left: 46%;
  margin-top: 10%;
}
</style>