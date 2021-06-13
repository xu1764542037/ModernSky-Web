import axios from "axios";

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:8000/modernsky',
    timeout: 10000
  })

  //2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },error => {
    // console.log(error);
  })

  //2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    // console.log(err);
  })

  //3.发送真正的网络请求
  //instance(config)本身返回一个promise
  return instance(config)
}