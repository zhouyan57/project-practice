import { createApp } from 'vue'
import App from './App.vue'
import type { Channel, Res } from './type'
import {add, baseurl} from './utils/tools.js'
console.log(add(1,2))
console.log(baseurl)

createApp(App).mount('#app')
