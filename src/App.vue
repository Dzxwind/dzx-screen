<template>
  <div class="current-title" v-if="$route.meta.title && $route.name !== 'Home'">{{$route.meta.title}}</div>
  <router-view v-slot="{ Component }">
    <transition name="s-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <slider-nav v-if="$route.name !== 'Home'"></slider-nav>
</template>

<script>
import SliderNav from './views/SliderNav/SliderNav.vue'
export default {
  name: 'App',
  components: {
    SliderNav
  }
}
</script>
