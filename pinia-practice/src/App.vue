
<script setup lang='ts'>
// 1. 导入获取的 store 函数
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/counter';
// 2. 得到store对象
const counter = useCounterStore()
// 3. 将 store 中的数据解构出来 (storeToRefs: 解构数据时保留响应式)
// const {count} = counter
const {count,doubleCount} = storeToRefs(counter)
// 解构出来的方法不需要
const {add} = counter
</script>
<template>
  <h2>pinia用法</h2>
  <h3>1. 使用 pinia 中的数据(state)</h3>
  <div>count:{{ counter.count }}</div>
  <h3>2. 使用 pinia 中的计算属性(getters)</h3>
  <div>doubleCount:{{ counter.doubleCount }}</div>
  <h3>3. 使用 pinia 中的方法(mutations/actions)</h3>
  <button @click="counter.add">点我 count ++</button>
  <h3>4. 使用解构出来的 count doubleCount</h3>
  <div>count: {{ count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <h3>5. 解构出来的 add 方法</h3>
  <button @click="add">点我 count ++</button>
</template>
<style scoped></style>