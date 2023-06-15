<script setup lang="ts">
import {ref} from 'vue'
import son from './son.vue'
const money = ref(9999)
const pet = ref('yoyo')
const food = ref('三文鱼')
</script>

<template>
  <h2>根组件</h2>
  <h3>父组件</h3>
  <!-- 1. 传入数据 -->
  <son :money="money" :pet="pet" :food="food"></son>
</template>