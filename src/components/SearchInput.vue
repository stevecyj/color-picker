<script setup>
import { ElInput, ElButton } from 'element-plus'
defineOptions({
  inheritAttrs: false,
})

const model = defineModel()

const resetSearchInput = () => {
  model.value = ''
}
</script>
<template>
  <div class="search-input-container">
    <ElInput v-bind="$attrs" placeholder="Enter something" class="input" v-model="model" />
    <ElButton type="primary" class="search" size="default">Search</ElButton>
    <ElButton type="primary" class="reset" size="default" @click="resetSearchInput">Reset</ElButton>
  </div>
</template>

<style lang="scss" scoped></style>
