<template>
  <div id="EditSidebar">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "EditSidebar"
}
</script>

<style scoped>
#EditSidebar {
  position: absolute;
  height: 40%;
  width: 12%;
  margin-top: 2%;
  margin-left: 16%;
  background-image: linear-gradient( 180deg, #8360c3, #2ebf91);

  /*border: 1px skyblue solid;*/
  padding-top: 1%;
  padding-bottom: 1%;
  box-shadow: 0 1px 5px #888888;;
}

hr {
  height: 2px;
  border: 0;
  background: black;
}
</style>