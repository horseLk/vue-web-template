import axios from 'axios'
import store from '@/store'
import NProgress from 'nprogress'
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false })
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line quote-props
    'Accept': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // eslint-disable-next-line dot-notation
    config.headers['token'] = store.state.token
    NProgress.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    console.log(response.data)
    NProgress.done()
    return response
  },
  error => {
    Message.error({
      message: error
    })
    NProgress.done()
    return Promise.reject(error)
  }
)

export default request
