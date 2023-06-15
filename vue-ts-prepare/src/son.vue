<script setup lang="ts">
// 2. 接收数据
// -------- vue3的接收方式 --------
// defineProps({
//     money:Number,
//     pet: {
//         type: String,
//         reqruied: true
//     },
//     food:{
//         type: String,
//         default: '鳗鱼'
//     }
// })

// -------- vue3+ts 的接收方式 --------
// defineProps 通过泛型参数来定义 props 的类型通常更直接
// 注意类型的大小写问题
// 1. 不带默认参数
// defineProps<{
//     money: number // 必选参数
//     pet: string
//     food?: string // 可选参数
// }>()
// 2. 带默认参数
// withDefaults(defineProps<{
//     money: number
//     pet: string
//     food?: string 
// }>(),{
//     food: '鳗鱼'
// })
// 3. 使用响应式语法糖 解构 + defineProps
// 需要 显式地选择开启
const { food = '鳗鱼'} = defineProps<{
    money: number
    pet: string
    food?: string 
}>()
</script>
<template>
    <h3>子组件</h3>
    <!-- 3. 使用数据 -->
    <div>money:{{ money }}</div>
    <div>pet:{{ pet }}</div>
    <div>food:{{ food }}</div>
</template>