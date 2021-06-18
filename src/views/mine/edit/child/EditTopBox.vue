<template>
  <div id="EditTopBox">
    <div id="EditTopBox-headP"><slot name="EditTopBox-headP"></slot></div>
    <div id="EditTopBox-name"><slot name="EditTopBox-name"></slot></div>
    <div id="EditTopBox-autograph"><slot name="EditTopBox-autograph"></slot></div>
  </div>
</template>

<script>
export default {
  name: "EditTopBox"
}
</script>

<style scoped>
#EditTopBox {
  position: absolute;
  height: 20%;
  width: 53.2%;
  background-image: linear-gradient( 0deg, #c2e59c, #64b3f4);
  margin-left: 29%;
  margin-top: 2%;
}

#EditTopBox-headP {
  position: absolute;
  margin-left: 7%;
  margin-top: 3%;
}

#EditTopBox-headP img {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}

#EditTopBox-name {
  position: absolute;
 font-size: 24px;
  font-weight: 500;
  margin-left: 23%;
  margin-top: 4%;
}

#EditTopBox-autograph {
  margin-top: 10%;
  margin-left: 23%;
}
</style>