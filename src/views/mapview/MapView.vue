<template>
  <div class="map-view">
    <div @click="back">点我回去</div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    back() {
      this.$router.push({
        name: 'Home'
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.map-view {
}
</style>