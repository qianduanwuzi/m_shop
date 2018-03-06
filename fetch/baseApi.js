import axios from 'axios'

var instanceAxios = axios.create()

// Add a request interceptor
instanceAxios.interceptors.request.use(
//   res => { return res },
  res => res,
  err => {
    // 这里显示网络异常
    // store.dispatch('SHOW_MSG_ACTION', { type: 'warning', msg: '网络异常' })
    return Promise.reject(err)
  },
)

// Add a response interceptor
instanceAxios.interceptors.response.use(
  res => {
    let resData = res.data
    // 这里验证code
    if (resData.code != 200) {
    //   store.dispatch('SHOW_MSG_ACTION', { type: 'warning', msg: resData.msg })
      if (resData.code == 302) {
        // storejs({ userInfo: {} })
        // router.replace({ path: '/login' })
      }
      return Promise.reject()
    } else return resData
  },
  err => {
    // 这里显示网络异常
    // store.dispatch('SHOW_MSG_ACTION', { type: 'warning', msg: '网络异常' })
    return Promise.reject(err)
  },
)

instanceAxios.defaults.withCredentials = true
instanceAxios.defaults.timeout = 115000


// window.instanceAxios = instanceAxios
export default instanceAxios