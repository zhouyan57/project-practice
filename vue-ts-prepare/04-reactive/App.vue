<script setup lang='ts'>
import { reactive } from 'vue';

// 1. reactive 用法
const obj = reactive({
  name: 'Jane',
  age: 26
})

// 2. vue3+ts 配合 reactive
type Obj = {
  name: string
  age: number
}
const obj2 = reactive<Obj>({
  name: 'Jane',
  age: 26
})

const obj3 = reactive({
  name: 'Jane',
  age: 26
})

</script>

<template>
  <h2>
    reactive
  </h2>
</template>
<style scoped></style>