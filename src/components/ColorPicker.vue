<script setup>
import { ref, computed } from 'vue'
// import convert from 'color-convert'
import { hex, rgb, hsl } from '@/utils/color'
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
const modes = { hex, rgb, hsl }
const activeCode = computed(() => {
  const activeColor = props.swatches[activeIndex.value]
  const currentMode = colorModes.value[activeMode.value]
  return modes[currentMode](activeColor)
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

<style lang="scss" scoped>
ul {
  list-style-type: none; /* 移除項目符號 */
  padding: 0; /* 移除內邊距 */
  margin: 0; /* 移除外邊距 */
}
</style>
