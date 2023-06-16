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
    // ------ 数据源相关
    // 定义数据源
    const channelList = ref<Channel[]>([])
    // 定义获取数据源的方法
    const getData = async () => {
        const {data: res} = await axios.get<TRes>('http://geek.itheima.net/v1_0/channels')
        channelList.value = res.data.channels 
        // 当获取频道数据源之后，应该给 active 设置一个默认值 （第一个数据的id）
        active.value = channelList.value[0].id  
    }

    // ------ 选中的频道相关
    // 定义选中频道的 id
    const active = ref(0)
    // 定义切换频道的方法
    const changeActive = (id: number) => {
        active.value = id
    }
    return {
        channelList,
        getData,
        active,
        changeActive
    }
})

export { useChannelStore}