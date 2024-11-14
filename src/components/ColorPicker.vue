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
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.color-picker {
  background-color: #fff;
  border: 1px solid #dae4e9;
  border-radius: 0.125rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: #596a73;
  font-family:
    BlinkMacSystemFont,
    Helvetica Neue,
    sans-serif;
  padding: 1rem;
}

.swatches {
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -0.25rem -0.25rem 0.75rem;
  padding: 0;
}

.swatch {
  border-radius: 0.125rem;
  cursor: pointer;
  height: 2rem;
  margin: 0.25rem;
  position: relative;
  width: 2rem;
}

.swatch::after {
  border-radius: 0.125rem;
  bottom: 0;
  box-shadow: inset 0 0 0 1px #dae4e9;
  content: '';
  display: block;
  left: 0;
  mix-blend-mode: multiply;
  position: absolute;
  right: 0;
  top: 0;
}

.swatch svg {
  display: none;
  color: #fff;
  fill: currentColor;
  margin: 0.5rem;
}

.swatch.active svg {
  display: block;
}

.color-modes {
  display: flex;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  margin: 0 -0.25rem 0.75rem;
}

.color-mode {
  background: none;
  border: none;
  color: #9babb4;
  cursor: pointer;
  display: block;
  font-weight: 700;
  margin: 0 0.25rem;
  padding: 0;
  text-transform: uppercase;
}

.color-mode.active {
  color: #364349;
}

.color-code {
  border: 1px solid #dae4e9;
  border-radius: 0.125rem;
  color: #364349;
  text-transform: uppercase;
  padding: 0.75rem;
}
</style>
