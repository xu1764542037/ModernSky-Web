import Vue from "vue";
import VueRouter from 'vue-router'

const Login =() => import("@/components/common/login/login")
const Index =() => import("@/components/common/index/Index")
const NoviceSteps =() => import("@/components/common/noviceSteps/noviceSteps")

const Home =() => import("@/views/home/Home")
const Dynamic =() => import("@/views/dynamic/Dynamic")
const Communication =() => import("@/views/communication/Communication")
const Forum =() => import("@/views/forum/Forum")


//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    redirect: "/home",
    component: Index
  },
  {
    path: '/noviceSteps',
    component: NoviceSteps
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/forum',
    component: Forum
  },
  {
    path: '/communication',
    component: Communication
  },
  {
    path: '/dynamic',
    component: Dynamic
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
