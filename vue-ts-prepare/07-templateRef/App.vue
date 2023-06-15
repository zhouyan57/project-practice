<script setup lang='ts'>
import { ref } from 'vue';

// ref 操作 dom 时，也需要给 ref 指定类型
const target = ref<HTMLImageElement | null>(null)
const getImg = () => {
  if (target.value === null) return 
  console.log(target.value.src);
}
</script>
<template>
  <h2>使用 ref 操作 dom</h2>
  <button @click="getImg">获取图片</button>
  <img ref="target" src="https://img1.baidu.com/it/u=4185159508,1034736619&fm=253&fmt=auto&app=138&f=JPEG?w=668&h=500" alt="">
</template>
<style scoped></style> 