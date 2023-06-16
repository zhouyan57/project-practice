<script setup lang='ts'>
import { onMounted } from 'vue';
import { useChannelStore } from '../store'
import { storeToRefs } from 'pinia';
// 得到 channel 的 store 实例
const channelStore = useChannelStore()
// 调用方法得到数据源
const {getData,changeActive} = channelStore
onMounted(()=>{
    getData()
})
// 解构数据
const {channelList,active} = storeToRefs(channelStore)
</script>
<template>
  <ul class="catagtory">
    <!-- <li class="select" v-for="item in channelList" :key="item.id">{{item.name}}</li> -->
    <li @click="changeActive(item.id)" :class="{select: active === item.id}" v-for="item in channelList" :key="item.id">{{item.name}}</li>

  </ul>
</template>
<style scoped lang='less'></style>  