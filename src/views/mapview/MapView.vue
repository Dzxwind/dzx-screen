<template>
  <div class="map-view">

  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  setup() {
    
  },
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