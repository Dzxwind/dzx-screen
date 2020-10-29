<template>
	<transition name="slide-nav" mode="out-in">
		<div class="slider-nav" v-if="isMenuShow">
			<div class="head-icon"></div>
			<nav>
				<div class="nav-item" :class="{active: $route.name === item.name}" @click="onNavItemClick(item.name)" v-for="item in list" :key="item.name" :data-title="item.meta.title">
					<icon-font :name="item.meta.icon"></icon-font>
				</div>
			</nav>
			<div class="back-button" @click="switchMenu(false)">
				<icon-font name="icon-suohui"></icon-font>
			</div>
		</div>
		<div class="slider-nav-button" v-else @click="switchMenu(true)">
			<icon-font name="icon-expand"></icon-font>
		</div>
	</transition>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import navInit from './navInit.js'
export default {
	setup() {
		const { list, onNavItemClick } = navInit()
		const store = useStore()
		const isMenuShow = computed(() => store.state.isMenuShow)
		const switchMenu = (flag) => store.commit('switchMenu', flag)
		return {
			list,
			onNavItemClick,
			isMenuShow,
			switchMenu
		}
	},
  data() {
    return {
			
    }
  },
  mounted() {

  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
$headImg: "../../assets/images/headImg.png";
%normal-icon {
	cursor: pointer;
	.icon-font {
		font-size: 30px;
		color: #b1adc8;
		transition: color .5s;
	}
	& + .nav-item {
		margin-top: 30px;
	}
	&:hover {
		.icon-font {
			color: #8065ff;
		}
	}
}
.slider-nav {
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding: 20px 0;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	width: 100px;
	height: 100%;
	background-color: rgba(#fff, 1);
	opacity: 0.95;
	&:hover {
		opacity: 1;
	}
	.head-icon {
		border-radius: 6px;
		width: 60px;
		height: 60px;
		background: url($headImg) no-repeat center center/90% 90%;
		background-color: #fff;
		box-shadow: 2px 2px 6px rgba(#000, .2);
	}
	nav {
		width: 100%;
		.nav-item {
			display: flex;
			position: relative;
			justify-content: center;
			align-items: center;
			height: 50px;
			@extend %normal-icon;
			&::before {
				position: absolute;
				left: 0;
				top: 0;
				width: 4px;
				height: 0;
				background-color: #8065ff;
				content: "";
				transition: all .5s;
			}
			&::after {
				position: absolute;
				content: attr(data-title);
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
				background-color: rgba(#000, 0.7);
				color: #fff;
				font-size: 16px;
				opacity: 0;
				padding: 6px 10px;
				border-radius: 6px;
				transition: all .5s;
				height: max-content;
			}
			&:hover::after {
				transform: translateX(calc(100% + 10px));
				opacity: 1;
			}
			&.active {
				.icon-font {
					color: #8065ff;
				}
				&::before {
					height: 100%;
				}
			}
		}
	}
	.back-button {
		@extend %normal-icon;
	}
}
.slider-nav-button {
	@extend %normal-icon;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	left: 20px;
	bottom: 20px;
	background-color: #fff;
	border-radius: 10px;
}
</style>