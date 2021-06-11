<template>
  <div id="HomeNews">
    <div id="HomeNews-title"><h3><slot name="title"></slot></h3></div>
    <div id="HomeNews-p">
      <p><a href="#"><slot name="p"></slot></a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNews"
}
</script>

<style scoped>
  #HomeNews {
    height: 200px;
    width: 400px;
    margin-left: 84px;
    overflow: hidden;
    background: #F5CBA1;
    float: left;
    border-radius: 5px;

  }

  #HomeNews-title {
    height: 26px;
    width: 400px;
    background: #E6E6E6;
    text-align: center;
  }

  #HomeNews-p a{
    position: absolute;
    font-size: 18px;
    text-decoration : none;
    color: black;
    line-height: 35px;
    margin-left: 10px;
  }

</style>