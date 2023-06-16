// 使用pinia
import {createPinia} from 'pinia'
// 导入自动保存pinia数据的第三方包
import persist from 'pinia-plugin-persistedstate'
// 创建pinia对象
const pinia = createPinia()
// 使用持久化包
pinia.use(persist)
// 暴露 pinia
export default pinia

// 导入 counter 中的函数
// import { useCounterStore } from './counter'
// export { useCounterStore }
export * from './counter'