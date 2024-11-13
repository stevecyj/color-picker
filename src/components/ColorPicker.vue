<script setup>
import { ref, computed } from 'vue'
import convert from 'color-convert'
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
  return activeModeValue.value === 'hex'
    ? hex.value
    : activeModeValue.value === 'rgb'
      ? rgb.value
      : hsl.value
})
// console.log('activeCode >>> ', activeCode.value)

const activeColorValue = computed(() => {
  return props.swatches[activeIndex.value]
})

const activeModeValue = computed(() => {
  return colorModes.value[activeMode.value]
})

const hex = computed(() => {
  return `#${activeColorValue.value}`
})

const hsl = computed(() => {
  const hslColor = convert.hex.hsl(activeColorValue.value)
  return `${hslColor[0]}, ${hslColor[1]}%, ${hslColor[2]}%`
})

const rgb = computed(() => {
  const rgbColor = convert.hex.rgb(activeColorValue.value)
  return `${rgbColor.join(', ')}`
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
