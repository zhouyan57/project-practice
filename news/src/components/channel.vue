<script setup lang='ts'>
import { onMounted } from 'vue';
import { useChannelStore } from '../store'
import { storeToRefs } from 'pinia';
// 得到 channel 的 store 实例
const channelStore = useChannelStore()
// 调用方法得到数据源
const {getData} = channelStore
onMounted(()=>{
    getData()
})
// 解构数据
const {channelList} = storeToRefs(channelStore)
</script>
<template>
  <ul class="catagtory">
    <li v-for="item in channelList" :key="item.id" class="select">{{item.name}}</li>
  </ul>
</template>
<style scoped lang='less'></style>  