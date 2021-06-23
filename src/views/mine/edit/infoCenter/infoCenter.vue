<template>
  <div id="infoCenter">
    <table-class></table-class>
  </div>
</template>

<script>
import TableClass from "@/views/mine/edit/infoCenter/child/TableClass";
export default {
  name: "infoCenter",
  components: {
    TableClass
  }
}
</script>

<style scoped>
#infoCenter {
  position: fixed;
  height: 100%;
  width: 100%;
  background-image: linear-gradient( -135deg, #9795f0, #fbc8d4);
  z-index: 1;

}
</style>