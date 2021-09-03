<template>
  <div id="ForumSidebar">
    <div id="ForumSidebar-search"><slot name="search"></slot></div>
    <hr>
    <div id="ForumSidebar-home"><slot name="home"></slot></div>
    <div id="ForumSidebar-list"><slot name="list"></slot></div>
  </div>
</template>

<script>
export default {
  name: "ForumSidebar"
}
</script>

<style scoped>
#ForumSidebar {
  position: fixed;
  height: 95%;
  width: 300px;
  background: rgba(255,255,255,.4);
  margin-top: -20px;
}

hr {
  margin-top: 30px;
  border: 1px solid darkgrey;
}

#ForumSidebar-list {

}
</style>