import Vue from "vue";
import VueRouter from 'vue-router'

const Login =() => import("@/components/common/login/login")
const Index =() => import("@/components/common/index/Index")
const NoviceSteps =() => import("@/components/common/noviceSteps/noviceSteps")
const Error =() => import("@/components/common/404/error")

const Home =() => import("@/views/home/Home")
const Dynamic =() => import("@/views/dynamic/Dynamic")
const Communication =() => import("@/views/communication/Communication")
const Forum =() => import("@/views/forum/Forum")
const Mine =() => import("@/views/mine/Mine")

const Edit =() => import("@/views/mine/edit/Edit")

const InfoCenter =() => import("@/views/mine/edit/infoCenter/infoCenter")

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
    component: Index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/noviceSteps',
    component: NoviceSteps,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/forum',
    component: Forum,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/communication',
    component: Communication,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/dynamic',
    component: Dynamic,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'edit',
        component: Edit,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: 'info-center',
            component: InfoCenter,
            meta: {
              requireAuth: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: "/404"
  },
  {
    path: '/404',
    component: Error
  }
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

export default router


/**
 * token
 */

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (sessionStorage.getItem("token") == 'true') { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
      next({
        path: '/login'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/index/table');
    }else{
      next();
    }
  }
});
