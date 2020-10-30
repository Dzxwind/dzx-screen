<template>
  <div class="map-view">
    <transition name="s-fade">
      <div class="back-button" v-if="isBackShow" @click="backOriginMap">
        <icon-font name="icon-back"></icon-font>
        返回
      </div>
    </transition>
    <div id="mapView"></div>
    <transition name="detail-show" mode="out-in">
      <area-detail :detail-data="detailData" v-if="isBackShow"></area-detail>
      <div class="overview-board" v-else>
        <div class="overview_i" v-for="item in overViewList" :key="item.key">
          <div class="overview-name">{{item.name}}</div>
          <div class="overview-value">{{item.value}}{{item.unit}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import mapInit from './mapInit/mapInit.js'
import cityIntro from './mapInit/cityIntro.js'
import { ref } from 'vue'
import AreaDetail from './AreaDetail/AreaDetail.vue'
import getOverViewData from './overView/getData.js'
export default {
  components: {
    AreaDetail
  },
  setup() {
    const { overViewList } = getOverViewData()
    let isBackShow = ref(false)
    const map = mapInit()
    const { backOriginMap, detailData } = cityIntro(map, isBackShow)
    return {
      overViewList,
      isBackShow,
      backOriginMap,
      detailData,
    }
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
  .overview-board {
    position: absolute;
    bottom: 100px;
    right: 40px;
    width: max-content;
    padding: 30px;
    box-sizing: border-box;
    background-color: rgba(#fff, .4);
    border-radius: 20px;
    color: #2a4054;
    text-align: right;
    .overview_i + .overview_i {
      margin-top: 40px;
    }
    .overview-name {
      font-size: 18px;
    }
    .overview-value {
      font-size: 38px;
      font-family: "LED";
    }
  }
	#mapView {
		width: 100%;
		height: 100%;
	}
}
</style>