<template>
  <div class="area-detail">
    <div class="area-name">{{detail.name}}</div>
    <div class="area-total">总人口：<span>{{totalValue}}</span></div>
    <div class="count-charts">
      <div class="member-charts">
        <div class="charts-title">人员类型</div>
        <div class="member-charts-wrapper">
          <div class="origin-pie" ref="originPie"></div>
          <div class="age-bar" ref="ageBar"></div>
        </div>
      </div>
      <div class="gdp-charts">
        <div class="charts-title">GDP情况</div>
        <div class="gdp-charts-wrapper">
          <div class="gdp-area" ref="gdpArea"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, toRaw, computed } from 'vue'
import renderOriginPie from './charts/originPie.js'
import renderAgeBar from './charts/ageBar.js'
import renderGdpArea from './charts/gdpArea.js'
export default {
  props: {
    detailData: {
      type: Object
    },
  },
  setup(props) {
    const { detailData } = toRefs(props)
    const totalValue = computed(() => parseFloat(detailData.value.data.member).toLocaleString())
    const chartsData = toRaw(detailData.value.data)
    const { originPie } = renderOriginPie(chartsData.memberForm)
    const { ageBar } = renderAgeBar(chartsData.ageDivide)
    const { gdpArea } = renderGdpArea(chartsData.gdp)
    return {
      detail: detailData.value.data,
      totalValue,
      originPie,
      ageBar,
      gdpArea
    }
  },
}
</script>
<style lang="scss" scoped>
.area-detail {
  position: absolute;
  top: 180px;
  right: 40px;
  width: 680px;
  padding: 30px;
  box-sizing: border-box;
  background-color: rgba(#fff, .4);
  border-radius: 20px;
  color: #2a4054;
  .area-name {
    font-size: 32px;
    margin-bottom: 10px;
  }
  .area-total {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    span {
      font-size: 40px;
      font-family: "LED";
    }
  }
  .count-charts {
    & > div + div {
      margin-top: 10px;
    }
    .charts-title {
      width: 100%;
      font-size: 20px;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: rgba(#000 , .05);
        margin-top: 4px;
      }
    }
    .member-charts-wrapper, .gdp-charts-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .origin-pie, .age-bar {
        width: 48%;
        height: 250px;
        margin: 10px 0;
      }
      .gdp-area {
        width: 100%;
        height: 300px;
        margin: 10px 0;
      }
    }
  }
}
</style>