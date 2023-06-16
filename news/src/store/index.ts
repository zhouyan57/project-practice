// 创建 pinia 实例
import { createPinia } from 'pinia'
let pinia = createPinia()

export default pinia

export * from './modules/channel'
export * from './modules/newslist'