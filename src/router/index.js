import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

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
  },
  {
    path: '/blog',
    name: 'Blog',
    meta: {
      title: '守心 · 文',
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
