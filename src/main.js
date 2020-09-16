import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/index'

const app = createApp(App).use(router).use(store).use(utils)
router.isReady().then(() => app.mount('#app'))