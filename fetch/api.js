import instanceAxios from "./baseApi";

const http = {
  fetchPost: function(action, params) {
    return instanceAxios.post(action, params).then( res => res)
  },
  fetchGet: function(action, params) {
    return instanceAxios.get(action, { params: params }).then(res => res)
  },
  fetchPut: function(action, params) {
    return instanceAxios.put(action, params).then(res => res)
  },
  fetchDelete: function(action, params) {
    return instanceAxios.delete(action, { data: params }).then(res => res)
  },
}




// params为参数   ip为不同的请求ip
// import config from 'config/config'

// var defIp = config.ip4

// const preApi = (api, ip) => {
//   const reg = RegExp(/v[0-9]/)
//   if (reg.test(api)) {
//     return api
//   } else {
//     return ip + api
//   }
// }

// const http = {
//   fetchPost: function(action, params, ip = defIp) {
//     const api = preApi(action, ip)
//     return instanceAxios.post(api, params).then(function(response) {
//       return response
//     })
//   },
//   fetchGet: function(action, params, ip = defIp) {
//     const api = preApi(action, ip)
//     return instanceAxios.get(api, { params: params }).then(function(response) {
//       return response
//     })
//   },
//   fetchPut: function(action, params, ip = defIp) {
//     const api = preApi(action, ip)
//     return instanceAxios.put(api, params).then(function(response) {
//       return response
//     })
//   },
//   fetchDelete: function(action, params, ip = defIp) {
//     const api = preApi(action, ip)
//     return instanceAxios.delete(api, { data: params }).then(function(response) {
//       return response
//     })
//   },
// }

http.get = http.fetchGet
http.post = http.fetchPost
http.put = http.fetchPut
http.delete = http.fetchDelete

export default http
