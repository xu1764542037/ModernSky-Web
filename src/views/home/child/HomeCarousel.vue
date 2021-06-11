<template>
  <div id="carousel">
    <el-carousel :interval="3000" height="500px" arrow="always">
      <el-carousel-item>
        <img src="@/assets/img/home/homeCarousel/1.jpg" height="500" width="1210">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/homeCarousel/2.jpg" height="500" width="1200">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/homeCarousel/3.jpg" height="500" width="1200">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/homeCarousel/4.jpg" height="500" width="1200">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/homeCarousel/5.jpg" height="500" width="1200">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel"
}
</script>

<style scoped>
#carousel {
  margin: 50px auto;
  position: relative;
  width: 1200px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

img {

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
