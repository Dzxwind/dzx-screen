<template>
  <div class="map-view">
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
  #mapView {
    width: 100%;
    height: 100%;
  }
}
</style>