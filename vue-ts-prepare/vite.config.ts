import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    // 开启实验特性：可以让defineProps数据进行解构
    reactivityTransform: true
  })],
})
