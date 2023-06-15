<script setup lang='ts'>
import {ref} from 'vue'
// 1. 数据
const score = ref(100)
// 2.传递数据
// -------- vue3 中的 defineEmits --------
// const emit = defineEmits(['passv','fn'])

// -------- vue3 + ts 中的 defineEmits --------
const emit = defineEmits<{
    // (e:'方法名', value:'方法的参数'): void
    (e:'passv', value: number) : void
    (e: 'fn', value: string): void
}>()
const passScore = () => {
    emit('passv', score.value)
}
</script>
<template>
  <h3>子组件</h3>
  <div>score:{{ score }}</div>
  <button @click="passScore">传递成绩给父组件</button>
</template>
<style scoped></style>