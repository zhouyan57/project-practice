// 共享类型
// axios 发送请求之前需要先定义数据的类型
export type Channel = {
    id: number
    name: string
  }
  export type Res = {
    data: {
      channels: Channel[]
    }
    message: string
  }
  