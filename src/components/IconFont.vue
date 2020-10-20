<template>
  <svg class="icon-font" :style="{fontSize: size, color}">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    color: {
      type: String
    }
  },
}
</script>
