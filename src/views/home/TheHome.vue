<template>
  <div class="home">
    <div class="particlate-img" ref="ParticlateWrapper"></div>
    <div class="expand-line">
      <svg class="path-ani">
        <defs>
          <clipPath id="clip-rect" :class="{animated: finishFlag}">
            <rect x="955" y="35" width="10" height="10"></rect>
          </clipPath>
        </defs>
        <g class="wing-line" clip-path="url(#clip-rect)">
          <polyline points="0,40 1920,40"></polyline>
          <rect class="center-diamond" x="935" y="15" width="50" height="50" transform="rotate(45, 960, 40)"></rect>
          <rect class="center-scale-diamond" x="935" y="15" width="50" height="50"></rect>
        </g>
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
    const dzxWords = '无创意 不代码'
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
	position: relative;
	width: 100%;
	height: 100%;
	.particlate-img {
		width: 100%;
		height: 80%;
	}
	.expand-line {
		position: relative;
		top: -100px;
		width: 100%;
		height: 80px;
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
					// transform: rotateZ(-45deg);
					// transform-origin: center center;
					fill: #fff;
					stroke: #333;
				}
				.center-scale-diamond {
					transform: rotate(45deg) scale(1);
					transform-origin: center center;
					animation: opacityScale 2s infinite ease-in-out;

					fill: #333;
					@keyframes opacityScale {
						0% {
							transform: rotate(45deg) scale(.6);

							fill: #fff;
							stroke: #333;
						}
						50% {
							transform: rotate(45deg) scale(.2);

							fill: #333;
							stroke: #fff;
						}
						100% {
							transform: rotate(45deg) scale(.6);

							fill: #fff;
							stroke: #333;
						}
					}
				}
			}
		}
	}
	.enter-button {
		margin: 0 auto;
		padding: 10px 60px;
		border: 2px solid #333;
		width: max-content;
		cursor: pointer;
		text-align: center;
		color: #333;
		letter-spacing: .2rem;
		transition: .5s all;
		&:hover {
			background-color: #333;
			color: #fff;
		}
	}
	.dzx-words {
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		top: 55%;
		justify-content: space-around;
		margin: auto;
		width: 600px;
		font-size: 20px;
	}
}
</style>