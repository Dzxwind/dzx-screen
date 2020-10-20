<template>
  <div class="map-view">
    <div id="mapView"></div>
    <router-view />
  </div>
</template>
<script>
import mapInit from './mapInit/mapInit.js'
import GradientSphere from './threeModle/GradientSphere.js'
import RotatePin from './threeModle/RotatePin.js'
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
      let RotatePinInstance = new RotatePin({
        id: 'RotatePin',
        center: [121.623001,29.865294],
        height: 0,
        rotate: [Math.PI / 2, 0, 0],
        scale: 2.41843220338983e-5
      })
      console.log(RotatePinInstance.getLayerObject());
      map.addLayer(RotatePinInstance.getLayerObject())
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
	position: relative;
	width: 100%;
	height: 100%;
	background: url("../../assets/images/bg.png") no-repeat center center;
	background-size: 100% 100%;
	.screen-title {
		position: absolute;
		left: 40px;
		top: 30px;
		font-size: 36px;
	}
	#mapView {
		width: 100%;
		height: 100%;
	}
}
</style>