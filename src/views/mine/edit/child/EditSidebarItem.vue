<template>
  <div class="EditSidebar-item">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "EditSidebarItem"
}
</script>

<style scoped>
.EditSidebar-item {
  position: relative;
  width: 99.99%;
  height: 72px;
  /*margin-left: -.4%;*/
  line-height: 72px;
  text-align: center;
  font-size: 16px;
  -webkit-transition: .2s all;
  color: white;
}

.EditSidebar-item:hover {
  background: rgba(255,255,255,.5);
}
</style>