<template>
  <div class="the-blog">
    <div>
      {{testText}}
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const testText = `我就是力量的化身!
    我就是魔法的化身`
    return {
      testText
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
<style lang="scss">
.the-blog {
	overflow-y: auto;
	position: relative;
	box-sizing: border-box;
	padding-top: 140px;
	width: 100%;
	height: 100%;
	background: url("../../assets/images/blog2.jpg") no-repeat center center;
	background-color: #f0f2f5;
	background-size: 100% 100%;
	background-blend-mode: screen;
}
</style>
