<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useChannelStore, useNewsListStore } from '../store'
import { watch } from 'vue';
const newsListStore = useNewsListStore()
const channelStore = useChannelStore()
const { getArtList } = newsListStore
const { active } = storeToRefs(channelStore)
const { artList } = storeToRefs(newsListStore)
// 侦听 active
watch(active, () => {
    getArtList(active.value)
}, {
    immediate: true
})
</script>
<template>
    <div class="list">
        <div class="article_item" v-for="item in artList" :key="item.art_id">
            <h3 class="van-ellipsis">{{ item.title }}</h3>
            <div class="img_box" v-if="item.cover.type > 0">
                <img src="item.cover.images[0]" class="w100" />
            </div>
            <div class="info_box">
                <span>{{ item.aut_name }}</span>
                <span>{{ item.comm_count }}评论</span>
                <span>{{ item.pubdate }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less"></style>
