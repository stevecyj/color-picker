<script setup>
import { ref, computed } from 'vue'
import Checkmark from '@/assets/checkmark.svg'
const props = defineProps({
  swatches: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(0)
const activeMode = ref(0)
const colorModes = ref(['hex', 'rgb', 'hsl'])

const activeCode = computed(() => {
  return `#${props.swatches[activeIndex.value]}`
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
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
      >
        <Checkmark />
      </li>
    </ul>

    <div class="color-modes">
      <button
        v-for="(mode, index) in colorModes"
        :key="index"
        class="color-mode"
        :class="[`color-mode-${mode}`, { active: index === activeMode }]"
        @click="activeMode = index"
      >
        {{ mode }}
      </button>
    </div>

    <div class="color-code">{{ activeCode }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
