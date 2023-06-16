
<script setup lang='ts'>
// 1. 导入获取的 store 函数
import { useCounterStore } from './store/counter';
// 2. 得到store对象
const counter = useCounterStore()
</script>
<template>
  <h2>pinia用法</h2>
  <h3>1. 使用 pinia 中的数据(state)</h3>
  <div>count:{{ counter.count }}</div>
  <h3>2. 使用 pinia 中的计算属性(getters)</h3>
  <div>doubleCount:{{ counter.doubleCount }}</div>
  <h3>3. 使用 pinia 中的方法(mutations/actions)</h3>
  <button @click="counter.add">点我 count ++</button>
</template>
<style scoped></style>