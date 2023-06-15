<script setup lang='ts'>
import { onMounted, ref } from 'vue';

// **说明**

// - 给元素绑定事件时，通常需要从事件源参数中得到所需的属性
// - 如果不指定事件源类型，会报错
// - 如果给事件源参数设置类型： `any`，无法点出参数中的所需的属性

// 记录鼠标位置
const point = ref({
  x:0,
  y:0
})
const move = (e: MouseEvent) => {
  // console.dir(e)
  point.value.x = e.pageX
  point.value.y = e.pageY
}
onMounted(()=>{
  document.addEventListener('mousemove',move)
})
</script>
<template>
  <!-- 鼠标移到$event可得事件源类型 -->
  <h2 @mousemove="move($event)">事件处理</h2>
  <div>x: {{ point.x }}</div>
  <div>y: {{ point.y }}</div>

</template>
<style scoped></style>