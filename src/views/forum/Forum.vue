<template>
  <div id="Forum">
    <div id="Forum-Context">
      <forum-sidebar slot="search">
        <input slot="search" id="Forum-SearchInput" v-model="SearchObj" @keyup.enter="search"/>
        <img slot="search" v-show="isClickSearch" @mouseover="isClickSearch = !isClickSearch" class="Forum-SearchImg" src="@/assets/img/Forum/search1.svg">
        <img slot="search" v-show="!isClickSearch" @mouseleave="isClickSearch = !isClickSearch" @click="search" class="Forum-SearchImg" src="@/assets/img/Forum/search2.svg">
        <div slot="home" id="Forum-Home" @click="all">
          <img id="Forum-Home-HomeImg" src="@/assets/img/Forum/home.svg">
          <p id="Forum-Home-P">天空岛首页</p>
          <img id="Forum-Home-RightImg" src="@/assets/img/Forum/turnRight.svg">
        </div>
        <div slot="list">
          <div class="Forum-ListItem" @mousedown="changeListNum(0)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 0" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 0" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">我加入的天空岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(1)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 1" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 1" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">学习群岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(2)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 2" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 2" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">运动群岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(3)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 3" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 3" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">游戏群岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(4)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 4" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 4" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">娱乐群岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(5)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 5" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 5" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">影视群岛</p>
          </div>
          <div class="Forum-ListItem" @mousedown="changeListNum(6)">
            <img class="Forum-ListItem-Img1" src="@/assets/img/Forum/TurnRightFull.svg">
            <img class="Forum-ListItem-Img2" v-show="CurrentClickNum !== 6" src="@/assets/img/Forum/could1.svg">
            <img class="Forum-ListItem-Img3" v-show="CurrentClickNum === 6" src="@/assets/img/Forum/could2.svg">
            <p class="Forum-ListItem-Font">美食群岛</p>
          </div>
        </div>
      </forum-sidebar>
      <div id="Forum-DataPlace">
        <forum-data v-for="(data,index) in CurrentData">
          <div slot="img"><img src="@/assets/img/Forum/headP.svg"></div>
          <div slot="name">{{ data.name }}</div>
          <div slot="function" class="Forum-DataPlace-Function">+ 加入 | {{data.people}}人</div>
          <div slot="introduction">简介：{{data.title}}</div>
        </forum-data>
      </div>
    </div>
  </div>
</template>

<script>
import ForumSidebar from "@/views/forum/child/ForumSidebar";
import ForumData from "@/views/forum/child/ForumData";
import {distinctSelectType, select, selectIId, batchSelectIsland} from "@/network/forum/forum";


export default {
  name: "Forum",
  components: {
    ForumSidebar,
    ForumData,
  },
  data() {
    return {
      isClickSearch: false,
      isClickList: false,
      SearchObj: '',
      CurrentClickNum: -1,//默认为  我加入的天空岛
      CurrentData: [],
      JoinIslandData: []
    }
  },
  methods: {
    search() {
      select(this.SearchObj).then( res => {
        this.CurrentData = res.obj
      })
    },
    changeListNum(num) {
      this.CurrentClickNum = num
      let type = ''
      if (num === 0) {
        // this.CurrentData = this.JoinIslandData
        console.log(this.JoinIslandData);

        const id = this.$store.state.userId
        selectIId(id).then( res => {
          let IIds = "-"
          for (let i = 0; i< res.obj.length; i++) {
            IIds = IIds + res.obj[i].i_id + "-"
          }
          batchSelectIsland(IIds).then( res => {
            this.CurrentData = res.obj
          })
        })
      } else if (num === 1) {
        type = "学习"
      } else if (num === 2) {
        type = "运动"
      } else if (num === 3) {
        type = "游戏"
      } else if (num === 4) {
        type = "娱乐"
      } else if (num === 5) {
        type = "影视"
      } else if (num === 6) {
        type = "美食"
      }
      distinctSelectType(type).then( res => {
        this.CurrentData = res.obj
      })
    },
    all() {
      select().then( res => {
        this.CurrentData = res.obj
        this.CurrentClickNum = -1
      })
    },
    test() {
      this.CurrentData

    }
  },
  beforeCreate() {
    select().then( res => {
      this.CurrentData = res.obj
    })

    const id = this.$store.state.userId
    selectIId(id).then( res => {
      let IIds = "-"
      for (let i = 0; i< res.obj.length; i++) {
        IIds = IIds + res.obj[i].i_id + "-"
      }
      batchSelectIsland(IIds).then( res => {
        this.JoinIslandData = res.obj
      })
    })
  }
}
</script>


<style scoped>
#Forum {
  position: absolute;
  margin-top: 2.4%;
  width: 100%;
  height: 95.1%;
  background-image: linear-gradient( 125deg,#e8cbc0, #636fa4);
  overflow: auto;
}

/*滚动条样式*/
#Forum::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
#Forum::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
#Forum::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}

#Forum-Context {
  /*position: absolute;*/
  width: 100%;
  height: auto;
  margin-top: 1%;
  overflow: auto;
}

/*滚动条样式*/
#Forum-Context::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
#Forum-Context::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
#Forum-Context::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}

#Forum-SearchInput {
  height: 30px;
  width: 250px;
  background: rgba(255,255,255,.3);
  margin-top: 20px;
  margin-left: 15px;
  border: 1px solid #D8D8D8;
  -webkit-transition: .5s all;
  border-radius: 5px;
}

#Forum-SearchInput:focus {
  border: 1px solid #2E82FF;
}

.Forum-SearchImg {
  position: absolute;
  margin-left: -30px;
  margin-top: 25px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

#Forum-Home {
  width: 300px;
  height: 50px;
  -webkit-transition: .5s all;
}

#Forum-Home:hover {
  background: #BDC2CC;
}

#Forum-Home-HomeImg {
  position: absolute;
  margin: 15px 25px;
}

#Forum-Home-P {
  position: absolute;
  margin: 13px 50px;
  font-weight: 700;
  font-size: 15px;
}

#Forum-Home-RightImg {
  position: absolute;
  margin: 15px 250px;
}

.Forum-ListItem {
  float: left;
  margin-top: 20px;
  height: 50px;
  width: 300px;
  /*border: 1px solid red;*/
  line-height: 30px;
  -webkit-transition: .5s all;

}

.Forum-ListItem:hover {
  background: #BDC2CC;
}

.Forum-ListItem-Img1 {
  position: absolute;
  margin-left: 40px;
  padding-top: 17px;
  width: 14px;
  height: 14px;
}

.Forum-ListItem-Img2 {
  position: absolute;
  margin-left: 80px;
  margin-top: 9px;
  width: 30px;
  height: 30px;
}

.Forum-ListItem-Img3 {
  position: absolute;
  margin-left: 80px;
  margin-top: 9px;
  width: 30px;
  height: 30px;
}

.Forum-ListItem-Font {
  position: absolute;
  margin-left: 120px;
  margin-top: 10px;
}

#Forum-DataPlace {
  position: absolute;
  min-height: 892px;
  width: 1565px;
  margin-left: 350px;
  margin-top: -20px;
  background: rgba(255,255,255,.3);
}


</style>



