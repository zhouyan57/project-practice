// pinia管理数据模块
// 1.0 导入创建 pinia 实例的函数
//   defineStore：创建 pinia 仓库对象
//   defineStore('仓库名', () => { return // 逻辑代码 }) // return 暴露给外界使用的数据和方法
import {defineStore} from 'pinia'
export const useCounterStore = defineStore('counter', ()=>{
    return {}
})