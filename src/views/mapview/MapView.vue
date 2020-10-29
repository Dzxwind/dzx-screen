<template>
  <div class="map-view">
    <transition name="s-fade">
      <div class="back-button" v-if="isBackShow" @click="backOriginMap">
        <icon-font name="icon-back"></icon-font>
        返回
      </div>
    </transition>
    <div id="mapView"></div>
    <transition name="detail-show">
      <area-detail :detail-data="detailData" v-if="isBackShow"></area-detail>
    </transition>
    <router-view />
  </div>
</template>
<script>
import mapInit from './mapInit/mapInit.js'
import cityIntro from './mapInit/cityIntro.js'
import { ref } from 'vue'
import AreaDetail from './AreaDetail/AreaDetail.vue'
export default {
  components: {
    AreaDetail
  },
  setup() {
    let isBackShow = ref(false)
    const map = mapInit()
    const { backOriginMap, detailData } = cityIntro(map, isBackShow)
    return {
      isBackShow,
      backOriginMap,
      detailData,
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
  .back-button {
    position: absolute;
    top: 50px;
    left: 150px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 20px;
    color: #b1adc8;
    cursor: pointer;
    z-index: 1;
    font-size: 20px;
    transition: all .5s;
    &:hover {
      color: #8065ff;
    }
  }
	#mapView {
		width: 100%;
		height: 100%;
	}
}
</style>