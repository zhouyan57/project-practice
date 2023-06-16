// 管理频道区域的数据
import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

// 定义类型
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
// 创建频道 store 的函数
let useChannelStore = defineStore('channel', () => {
    // 定义数据源
    const channelList = ref<Channel[]>([])
    // 定义获取数据源的方法
    const getData = async () => {
        const {data: res} = await axios.get<TRes>('http://geek.itheima.net/v1_0/channels')
        channelList.value = res.data.channels    
    }
    return {
        channelList,
        getData
    }
})

export { useChannelStore}