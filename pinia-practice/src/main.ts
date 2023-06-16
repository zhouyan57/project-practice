import { createApp } from 'vue'
import App from './App.vue'
// 使用pinia
import {createPinia} from 'pinia'
// 创建pinia对象
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
// const app = createApp(App)
// app.use(pinia)
// app.mount('#app')
