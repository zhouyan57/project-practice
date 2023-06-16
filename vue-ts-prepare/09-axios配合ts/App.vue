<script setup lang='ts'>
import axios from 'axios'
import { onMounted, ref } from 'vue';
// 1. axios 基本用法
// 2. 改变为ts版本
// 2.1 定义频道的类型
type Channel = {
  id: number
  name: string
}
// 2.2 定义返回数据的类型
type Res = {
  data:{
    channels: Channel[]
  }
  message: string
}
 
const list = ref<Channel[]>([]) // 默认值是空数组
const getData = async () => {
  const res = await axios.get<Res>('http://geek.itheima.net/v1_0/channels')
  // data类型为Res
  console.log(res);
    list.value = res.data.data.channels
  }
onMounted(()=>{
  getData()
})
</script>
<template>
  <h2>axios 配合 ts 使用</h2>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<style scoped></style>