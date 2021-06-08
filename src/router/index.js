import Vue from "vue";
import VueRouter from 'vue-router'



//1.安装插件
Vue.use(VueRouter)


const routes = [
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
