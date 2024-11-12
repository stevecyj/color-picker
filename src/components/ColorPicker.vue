<script setup>
defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})
</script>
<template>
  <div class="color-picker">
    <ul class="swatches">
      <li
        v-for="(swatch, index) in swatches"
        :key="index"
        class="swatch"
        :style="{ background: `#${swatch}` }"
        :class="{ active: index === 0 }"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
