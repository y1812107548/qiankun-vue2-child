import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/order',
    name:'micro-order',
    meta:{
      title:'工单',
      isMicro:true
    },
    component: () => import('../views/Order.vue')
    // children:[
    //   {
    //     path:'list',
    //     name:'micro-list',
    //     meta:{
    //       title:'工单列表',
    //       isMicro:true
    //     },
    //     component:()=> import('../views/Order.vue')
    //   }
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
