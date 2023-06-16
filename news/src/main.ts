import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import './style/index.css'

createApp(App).use(pinia).mount('#app')
