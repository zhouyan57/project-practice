<script setup lang='ts'>
import { ref } from 'vue'

const target = ref<HTMLImageElement | null>(null)
const getImg = () => {
  // if (target.value === null) return
  console.log(target.value?.src)
   // 修改图片的地址
   target.value!.src = 'https://img0.baidu.com/it/u=269752636,1324542314&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200'

}
</script>
<template>
  <h2>使用 ref 操作 dom</h2>
  <button @click="getImg">点我得到图片</button>
  <img ref="target" src="https://img1.baidu.com/it/u=3933233142,341745494&fm=253&fmt=auto&app=138&f=JPEG?w=130&h=170" alt="">
</template>
<style scoped></style>