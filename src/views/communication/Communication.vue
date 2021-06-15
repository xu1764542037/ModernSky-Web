<template>
  <div id="communication">
    <div id="communication-context">

    </div>
  </div>
</template>

<script>
export default {
  name: "Communication"
}
</script>

<style scoped>
#communication {
  position: fixed;
  margin-top: 2.4%;
  width: 100%;
  height: 100%;
  /*background-color: #F6F6F6;*/
  background-image: linear-gradient( 125deg,#e8cbc0, #636fa4);
}

#communication-context {
  position: absolute;
  width: 80%;
  height: 93%;
  background-image: linear-gradient( -135deg,#d9a7c7, #fffcdc);
  margin-left: 10%;
  margin-top: 1%;
  overflow: auto;
  box-shadow: 0 1px 10px #888888;;

}
</style>