// 过滤pages非路由文件(xxxxxxx_.vue)
// export default function({context, store, route, isServer, req, redirect }) {
export default function ({ store, route, redirect }) {
  // console.log('------------------', route)
  if(route.path.endsWith('_') || route.path.indexOf('common') >= 0)  return redirect('/')
}
