<template>
  <div id="HomeArticle">
    <div id="HomeArticle-island"><slot name="island"></slot></div>
    <div id="HomeArticle-title"><slot name="title"></slot></div>
    <div id="HomeArticle-context"><slot name="context"></slot></div>
  </div>
</template>

<script>
export default {
  name: "HomeArticle"
}
</script>

<style scoped>
#HomeArticle {
  position: relative;
  width: 90%;
  height: 200px;
  margin-left: 5%;
  padding-left: 20px;
  background-image: linear-gradient( 125deg,#fdcbf1, #e6dee9);
  border-radius: 5px;
  margin-top: 50px;
  padding-top: 5px;
}

#HomeArticle-island {
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

#HomeArticle-title {
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
}
#HomeArticle-context {
  margin-top: 30px;
  letter-spacing: 1px;
  font-size: 18px;
}
</style>