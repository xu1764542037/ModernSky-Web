import Vue from "vue";
import VueRouter from 'vue-router'

const Login =() => import("@/components/common/login/login")

//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
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
