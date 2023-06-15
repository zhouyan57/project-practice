<script setup lang='ts'>
import { ref } from 'vue';
// 1. ref的用法
const num1 = ref(100)

// 2. vue3+ts 中的 ref （通过加泛型 决定传入数据的类型）
// 2.1 简单数据类型
const num2 = ref<number>(100)
const num3 = ref(100)


// 2.2 复杂数据类型
// 配合 ts 使用（复杂数据类型） - 对象
type TObj = {
  name: string
  age: number
  gender: '男' | '女'
}
const obj = ref<TObj>({} as TObj) // 需要类型断言
// 从网络请求中来
setTimeout(() => {
  obj.value = {
    name: 'jane',
    age: 26,
    gender: '女'
  }
}, 1000)

// 配合 ts 使用（复杂数据类型）- 数组**
const list = ref<TObj[]>([]) // 表示数组长度为0 不需要类型推断
// 从网络请求中得到数据
setTimeout(() => {
  list.value = [
    { name: 'a', age: 1, gender: '女' },
    { name: 'b', age: 2, gender: '男' }
  ]
}, 1000)
</script>
<template>
  <h2>ref的使用</h2>
</template>
<style scoped></style>