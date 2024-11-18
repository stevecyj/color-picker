<script setup>
import { ElInput, ElButton } from 'element-plus'
</script>
<template>
  <div class="search-input-container">
    <ElInput placeholder="Enter something" class="input" />
    <ElButton type="primary" class="search" size="default">Search</ElButton>
    <ElButton type="primary" class="reset" size="default">Reset</ElButton>
  </div>
</template>

<style lang="scss" scoped></style>
