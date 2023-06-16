<script setup lang='ts'>
import axios from 'axios'
import { onMounted, ref } from 'vue';
// 1. 渲染频道列表数据
type Channel = {
    id: number
    name: string
}
type TRes = {
    data:{
        channels: Channel[]
    },
    message: string
}
const channelList = ref<Channel[]>([])
const getData = async () => {
    const {data: res} = await axios.get<TRes>('http://geek.itheima.net/v1_0/channels')
    channelList.value = res.data.channels    
}
onMounted(()=>{
    getData()
})

</script>
<template>
  <ul class="catagtory">
    <li v-for="item in channelList" :key="item.id" class="select">{{item.name}}</li>
  </ul>
</template>
<style scoped lang='less'></style>  