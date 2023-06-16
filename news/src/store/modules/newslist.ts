// 管理新闻的数据
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
// 定义类型
type News = {
    art_id: string
    title: string
    aut_id: string
    comm_count: number
    pubdate: string
    aut_name: string
    is_top: number
    cover: {
        type: number
        images: string[]
    }
}
type TRes = {
    data: {
        results: News[]
        pre_timestamp: string
    },
    message: string
}
let useNewsListStore = defineStore('newsList', () => {
    // 定义文章数据源
    const artList = ref<News[]>([])
    // 定义获取文章数据的方法
    const getArtList = async (id: number) => {
        const { data: res } = await axios.get<TRes>(`http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`)
        artList.value = res.data.results
    }
    return {
        artList,
        getArtList
    }
})
export { useNewsListStore }