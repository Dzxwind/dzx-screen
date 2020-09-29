import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('/@/views/home/TheHome.vue'))
  },
  {
    path: '/map',
    name: 'MapView',
    component: defineAsyncComponent(() => import('/@/views/mapview/MapView.vue')),
    children: [
      {
        path: 'area',
        name: 'MapArea',
        component: defineAsyncComponent(() => import('/@/views/mapview/area/MapArea.vue')),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
