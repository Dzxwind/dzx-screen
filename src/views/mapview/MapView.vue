<template>
  <div class="map-view">
    <div id="mapView"></div>
    <area-detail></area-detail>
    <router-view />
  </div>
</template>
<script>
import mapInit from './mapInit/mapInit.js'
import cityIntro from './mapInit/cityIntro.js'
import { onMounted } from 'vue'
import AreaDetail from './AreaDetail/AreaDetail.vue'
export default {
  components: {
    AreaDetail
  },
  setup() {
    onMounted(async () => {
      const map = await mapInit()
      cityIntro(map)
    })
    return {

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