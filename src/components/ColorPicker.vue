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
  return activeModeValue.value
})

const activeColorValue = computed(() => {
  return props.swatches[activeIndex.value]
})

const activeModeValue = computed(() => {
  return colorModes[activeMode.value]
})

const hex = computed(() => {
  return `#${activeColorValue.value}`
})

const hsl = computed(() => {
  const hsl = convert.hex.hsl(activeColorValue.value)
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
})

const rgb = computed(() => {
  const rgb = convert.hex.rgb(activeColorValue.value)
  return `rgb(${rgb.join(', ')})`
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

    <div class="color-code">{{ hex }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
