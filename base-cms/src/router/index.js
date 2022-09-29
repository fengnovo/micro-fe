import  Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['../pages/Home.vue'], resolve)
const Login = resolve => require(['../pages/Login.vue'], resolve)

// 路由表, 路由就是在这里配置，后面会详细讲解
const routes=[
    {
        path: "/",
        name: "index",
        component: Home,
        meta: {
          title: "首页",
          index: 1,
        },
      },
    {
        path:'/login',
        name: 'login',
        component: Login,
        meta: {
          title: "登陆页",
          index: 0,
        },
    },
    {
        path:'/vue2-cms-app',
        name: 'home',
        component: Home,
        meta: {
          title: "首页",
          index: 1,
        },
    },
    {
      path:'/react-cms-app',
      name: 'home',
      component: Home,
      meta: {
        title: "首页",
        index: 1,
      },
  },
  {
    path:'/vue3-cms-app',
    name: 'home',
    component: Home,
    meta: {
      title: "首页",
      index: 1,
    },
},
]
// 创建一个路由实例
const router =new VueRouter({
    // hash 表示 hash 模式   history  表示 history 模式
    // 二者区别的表现在于地址栏有没有 # 
    mode: 'history',  
    routes
    
})

// 导出
export default router
