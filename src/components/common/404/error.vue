<template>
  <div id="error">
    <h1 @click="goLogin">404，页面丢失，点此返回社区登录页！！！</h1>
  </div>
</template>

<script>
export default {
  name: "error",
  methods: {
    goLogin() {
      this.$router.replace({path: "/login"})
    }
  },
  beforeCreate() {
    this.$parent.navShow = false
  }
}
</script>

<style scoped>
  #error {
    position: absolute;
    background-image: linear-gradient( -135deg, #000000, #434343);
    width: 100%;
    height: 100%;
  }

  h1 {
    margin-top: 20%;
    margin-left: 20%;
    cursor: pointer;
    font-weight: 700;
    font-size: 58px;
    z-index: 9999;
  }
</style>