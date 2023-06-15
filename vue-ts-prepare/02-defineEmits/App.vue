<script setup lang='ts'>
import son from './son.vue'
// 4. 通过事件接收参数
const passv = (value: number) => {
  console.log(value);
  
}
</script>
<template>
  <h2>defineEmits</h2>
  <h3>父组件</h3>
  <!-- 3. 绑定事件 -->
  <son @passv="passv"></son>
</template>
<style scoped></style>