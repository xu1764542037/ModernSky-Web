<template>
  <div id="home">
    <div id="home-content">
      <div id="home-carousel">
        <home-carousel></home-carousel>
      </div>
      <div id="home-news">
        <home-news>
          <div slot="title">今日新闻</div>
          <div slot="p">*某男子在宿舍洗澡突然停电，感冒送医</div>
          <div slot="p">*某男子连续跑步5个小时直接昏迷</div>
          <div slot="p">*某男子在食堂吃饭吃出蟑螂</div>
          <div slot="p">*某男子因网恋对象为男性当成去世</div>
          <div slot="p">*某男子在校门口被表白结果发现女方认错人</div>
        </home-news>
        <home-news>
          <div slot="title">最新热点</div>
          <div slot="p">*寻在食堂二楼穿白衣服吃饭的男生，好帅</div>
          <div slot="p">*寻一起夜跑的朋友</div>
          <div slot="p">*学校的猫一般在哪睡觉，想撸</div>
          <div slot="p">*会记专业期末考试怎么办！！！</div>
          <div slot="p">*体育课挂科还能补码？</div>
        </home-news>
        <home-news>
          <div slot="title">最近通告</div>
          <div slot="p">*关于社区2021/6/11更新</div>
          <div slot="p">*关于社区bug通告</div>
          <div slot="p">*关于社区管理员分配</div>
          <div slot="p">*关于社区最新规章制度</div>
          <div slot="p">*关于社区黑名单公布</div>
        </home-news>
      </div>
      <div id="home-article">
        <home-article>
          <div slot="island">表白岛</div>
          <div slot="title">表白软件一班江恒</div>
          <div slot="context">暗恋他很久了，从第一次见面开始就被他的气质深深迷住了，暗恋了他两年，我觉得再不表白他就要走了，希望他能答应~~~~
            <br>如果他答应了，请加我qq</div>
        </home-article>
        <home-article>
          <div slot="island">闲置岛</div>
          <div slot="title">想卖掉iPad换手机</div>
          <div slot="context">刚买没多久的pad，想卖了换手机
            <br>有意请加我wx</div>
        </home-article>
        <home-article>
          <div slot="island">挂失岛</div>
          <div slot="title">丢失一本书</div>
          <div slot="context">专业书丢了，急寻
            <br>有人找到了请联系我</div>
        </home-article>
        <home-article>
          <div slot="island">运动岛</div>
          <div slot="title">来个晚上一起打羽毛球的兄弟</div>
          <div slot="context">我有拍子，希望技术高一点，不然玩的不尽兴
            <br>来的请加我qq</div>
        </home-article>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "@/views/home/child/HomeCarousel";
import HomeNews from "@/views/home/child/HomeNews";
import HomeArticle from "@/views/home/child/HomeArticle";


export default {
  name: "Home",
  components: {
    HomeCarousel,
    HomeNews,
    HomeArticle
  },
  beforeCreate() {
    this.$parent.navShow = true
  }
}
</script>

<style scoped>
#home {
  position: fixed;
  margin-top: 2.4%;
  width: 100%;
  height: 100%;
  /*background-color: #F6F6F6;*/
  background-image: linear-gradient( 125deg,#e8cbc0, #636fa4);

}

#home-content {
  position: absolute;
  width: 80%;
  height: 93%;
  /*background: white;*/
  background-image: linear-gradient( -135deg,#d9a7c7, #fffcdc);
  margin-left: 10%;
  margin-top: 1%;
  overflow: auto;
  box-shadow: 0 1px 10px #888888;;

}


/*滚动条样式*/
#home-content::-webkit-scrollbar {
  width: 4px;
   /*height: 4px;*/
}
#home-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
   background: rgba(0,0,0,0.2);
 }
#home-content::-webkit-scrollbar-track {
   -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
   border-radius: 0;
   background: rgba(0,0,0,0.1);
}


#home-news {
  padding-bottom: 250px;
}
</style>