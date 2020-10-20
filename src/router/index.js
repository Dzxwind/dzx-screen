import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'
import { useStore } from 'vuex'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'icon-home'
    },
    component: defineAsyncComponent(() => import('/@/views/home/TheHome.vue'))
  },
  {
    path: '/map',
    name: 'MapView',
    component: defineAsyncComponent(() => import('/@/views/mapview/MapView.vue')),
    meta: {
      title: '概念 · 屏',
      icon: 'icon-daping'
    },
    // children: [
    //   {
    //     path: 'area',
    //     name: 'MapArea',
    //     component: defineAsyncComponent(() => import('/@/views/mapview/area/MapArea.vue')),
    //   }
    // ]
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: '博客',
      icon: 'icon-boke'
    },
    component: defineAsyncComponent(() => import('/@/views/blog/TheBlog.vue')),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
