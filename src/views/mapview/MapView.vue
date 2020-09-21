<template>
  <div class="map-view">
    <div class="screen-title">概念 · 屏</div>
    <div id="mapView"></div>
  </div>
</template>
<script>
import { computed } from 'vue'
import store from '/@/store/index.js'
export default {
  setup() {
    const testState = computed(() => store.state.map.lalala)
    return  {
      testState
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.$store.commit('mapInit')
  },
  methods: {
    back() {
      this.$router.push({
        name: 'Home'
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: 100%;
  background: url('/@img/bg.png') no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  .screen-title {
    position: absolute;
    top: 30px;
    left: 40px;
    font-size: 36px;
  }
  #mapView {
    width: 100%;
    height: 100%;
  }
}
</style>