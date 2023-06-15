<script setup lang='ts'>
import { computed, ref } from 'vue';

const num = ref<number>(110)
const doubleNum = computed<number>(()=>{
  return num.value * 2
})
</script>
<template>
  <h2>计算属性</h2>
  <span>{{ doubleNum }}</span>
</template>
<style scoped></style>