<template>
  <div class="map-view">
    <div class="screen-title">概念 · 屏</div>
    <div id="mapView"></div>
    <router-view />
  </div>
</template>
<script>
import mapInit from './mapInit/mapInit.js'
import GradientSphere from './threeModle/GradientSphere.js'
// import ModelInit from './threeModle/ModelInit'
export default {
  setup() {
    const { mb } = mapInit((map) => {
      let GradientSphereInstance = new GradientSphere({
        id: 'GradientSphere',
        center: [120.43644173862953, 27.774665654830912],
        height: 0,
        rotate: [Math.PI / 2, 0, 0],
        scale: 2.41843220338983e-5
      })
      // map.addLayer(ModelInit(map))
      map.addLayer(GradientSphereInstance.getLayerObject())
    })
    return {
      mb
    }
  },
  data() {
    return {

    }
  },
  methods: {
    back() {
      this.$router.push({
        name: 'Home'
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/bg.png') no-repeat center center;
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