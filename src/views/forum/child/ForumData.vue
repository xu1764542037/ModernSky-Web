<template>
  <div id="ForumData">
    <div id="ForumData-Box">
      <div id="ForumData-Box-Img"><slot name="img"></slot></div>
      <div id="ForumData-Box-Name"><slot name="name"></slot></div>
      <div id="ForumData-Box-Function"><slot name="function"></slot></div>
      <div id="ForumData-Box-Introduction"><slot name="introduction"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForumData"
}
</script>

<style scoped>
#ForumData {
  height: auto;
  width: auto;
  float: left;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
}

#ForumData-Box {
  /*position: absolute;*/
  width: 470px;
  height: 220px;
  background: rgba(255,255,255,.5);
  margin-left: 20px;
  cursor: pointer;
  border-radius: 5px;
}

#ForumData-Box-Img {
  position: absolute;
  margin-top: 20px;
  margin-left: 60px;
}

#ForumData-Box-Name {
  font-size: 22px;
  position: absolute;
  margin-top: 20px;
  margin-left: 100px;
  color: gray;
}

#ForumData-Box-Name:hover {
  color: black;
}

#ForumData-Box-Function {
  position: absolute;
  margin-top: 20px;
  margin-left: 300px;
  padding-left: 10px;
  border-radius: 20px;
  height: 25px;
  width: 120px;
  border: 1px solid grey;
}

#ForumData-Box-Function:hover {
  border: 1px solid black;

}

#ForumData-Box-Introduction {
  position: absolute;
  height: 100px;
  width: 370px;
  margin-left: 50px;
  margin-top: 100px;
  font-size: 18px;
}
</style>