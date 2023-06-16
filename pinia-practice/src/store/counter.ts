// pinia管理数据模块
// 1.0 导入创建 pinia 实例的函数
//   defineStore：创建 pinia 仓库对象
//   defineStore('仓库名', () => { return // 逻辑代码 }) // return 暴露给外界使用的数据和方法
import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
export const useCounterStore = defineStore('counter', () => {
    // 定义变量保存数字 （相当于 vuex 中的 state）
    const count = ref(1)

    // 定义计算属性保存数字的两倍 （相对于 vuex 中的 getters）
    const doubleCount = computed(()=>{
        return count.value * 2
    })

    // 定义修改数字的方法 （相当于 vuex 中的 mutations & actions）
    const add = () => {
        count.value ++
    }
    return {count, add, doubleCount}
},{
    persist: true // 开启数据的持久化
})