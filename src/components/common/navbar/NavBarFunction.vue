<template>
  <div id="NavBarFunction">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBarFunction"
}
</script>

<style scoped>
  #NavBarFunction {
    position: relative;
    width: 24%;
    height: 100%;
    line-height: 45px;
    float: left;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }

  #NavBarFunction:hover {
    /*background: #EEEEEE;*/
  }
</style>