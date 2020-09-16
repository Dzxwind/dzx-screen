<template>
  <div class="home">
    <div class="particlate-img" ref="ParticlateWrapper"></div>
    <div class="enter-button" @click="goRouter">Enter</div>
  </div>
</template>
<script>
import initParticlate from './initParticlate.js'
export default {
  setup() {
    const { ParticlateWrapper } = initParticlate()
    return {
      ParticlateWrapper
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
  .particlate-img {
    width: 100%;
    height: 80%;
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
}
</style>