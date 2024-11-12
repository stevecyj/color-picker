<script setup>
import { ref } from 'vue'

defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
</script>
<template>
  <div class="color-picker">
    <ul class="swatches">
      <li
        v-for="(swatch, index) in swatches"
        :key="index"
        class="swatch"
        :style="{ background: `#${swatch}` }"
        :class="{ active: index === activeIndex }"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
