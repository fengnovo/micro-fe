import  Vue from 'vue'

import VueRouter from 'vue-router'

import React from './components/react.vue'
import Vue2 from './components/vue2.vue'
import Vue3 from './components/vue3.vue'

Vue.use(VueRouter)

// 路由表, 路由就是在这里配置，后面会详细讲解
const routes=[
    {
        path:'/react',
        name: 'react-cms',
        component: React
    },
    {
        path:'/vue2',
        name: 'vue2-cms',
        component: Vue2
    },
    {
        path:'/vue3',
        name: 'vue3-cms',
        component: Vue3
    }
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
