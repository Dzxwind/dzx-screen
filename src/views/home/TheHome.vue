<template>
  <div class="home">
    <div class="particlate-img" ref="ParticlateWrapper"></div>
    <div class="expand-line">
      <svg class="path-ani">
        <defs>
          <clipPath class="clip-circle">
            <circle cx="50%" cy="50%" r="20"/>
          </clipPath>
          <clipPath id="clip-rect" :class="{animated: finishFlag}">
            <rect x="955" y="35" width="10" height="10"></rect>
          </clipPath>
        </defs>
        <g class="wing-line" clip-path="url(#clip-rect)">
          <polyline points="0,40 1920,40"></polyline>
          <rect class="center-diamond" x="935" y="15" width="50" height="50"></rect>
          <rect class="center-scale-diamond" x="935" y="15" width="50" height="50"></rect>
        </g>
        <!-- <image height='85px' width="1920px" clip-path="url(#cd-image-1)" :xlink:href="require('@/assets/title.png')"></image> -->
      </svg>
    </div>
    <transition name="fade-down" mode="out-in" @enter="onButtonShow">
      <div v-if="finishFlag" class="enter-button" @click="goRouter">Enter</div>
    </transition>
    <transition-group name="fade-up" tag="div" class="dzx-words">
      <div class="dzx-words_i" v-for="item in dzxWordsArr" :key="item">{{item}}</div>
    </transition-group>
  </div>
</template>
<script>
import initParticlate from './initParticlate.js'
import { watch, computed, ref, reactive } from 'vue'
export default {
  setup() {
    const { ParticlateWrapper,finishFlag } = initParticlate()
    const dzxWords = '无设计,不代码'
    const wordsFlag = ref(false)
    const dzxWordsArr = reactive([])
    const onButtonShow = () => {
      dzxWords.split('').forEach(item => {
        dzxWordsArr.push(item)
      });
    }
    return {
      ParticlateWrapper,
      finishFlag,
      onButtonShow,
      dzxWordsArr
    }
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    goRouter() {
      this.$router.push({
        name: 'MapView'
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  .particlate-img {
    width: 100%;
    height: 80%;
  }
  .expand-line {
    width: 100%;
    height: 80px;
    position: relative;
    top: -100px;
    .path-ani {
      width: 100%;
      height: 100%;
      @keyframes expand {
        to {
          transform: scale(192);
        }
      }
      #clip-rect {
        transform-origin: 50% 50%;
        &.animated {
          animation: expand 3s forwards;
        }
      }
      .wing-line {
        fill: none;
        stroke: #333;
        stroke-width: 2;
        .center-diamond {
          fill: #fff;
          stroke: #333;
          transform: rotate(45deg);
          transform-origin: center center;
        }
        .center-scale-diamond {
          @keyframes opacityScale {
            0% {
              fill: #fff;
              stroke: #333;
              transform: rotate(45deg) scale(0.6);
            }
            50% {
              fill: #333;
              stroke: #fff;
              transform: rotate(45deg) scale(0.2);
            }
            100% {
              fill: #fff;
              stroke: #333;
              transform: rotate(45deg) scale(0.6);
            }
          }
          fill: #333;
          transform: rotate(45deg) scale(1);
          transform-origin: center center;
          animation: opacityScale 2s infinite ease-in-out;
        }
      }
    }
  }
  .enter-button {
    width: max-content;
    margin: 0 auto;
    text-align: center;
    border: 2px solid #333;
    color: #333;
    padding: 10px 60px;
    letter-spacing: .2rem;
    cursor: pointer;
    transition: .5s all;
    &:hover {
      color: #fff;
      background-color: #333;
    }
  }
  .dzx-words {
    position: absolute;
    width: 600px;
    left: 0;
    right: 0;
    margin: auto;
    top: 55%;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
  }
}
</style>