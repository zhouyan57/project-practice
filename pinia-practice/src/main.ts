import { createApp } from 'vue'
import App from './App.vue'
// 使用pinia
import {createPinia} from 'pinia'
// 导入自动保存pinia数据的第三方包
import persist from 'pinia-plugin-persistedstate'
// 创建pinia对象
const pinia = createPinia()

createApp(App).use(pinia.use(persist)).mount('#app')
// const app = createApp(App)
// app.use(pinia)
// app.mount('#app')
