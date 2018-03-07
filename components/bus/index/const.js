// eight
import eight_one from '~/static/index/icon-all.png'
import eight_two from '~/static/index/icon-material.png'
import eight_three from '~/static/index/icon-homefurnish.png'
import eight_four from '~/static/index/icon-sketch.png'
import eight_five from '~/static/index/icon-class.png'
import eight_six from '~/static/index/icon-case.png'
import eight_seven from '~/static/index/icon-quote.png'
import eight_eight from '~/static/index/icon-reserve.png'


// slide-menu
import sm_one from '~/static/index/icon-home.png'
import sm_two from '~/static/index/icon-all.png'
import sm_three from '~/static/index/icon-material.png'
import sm_four from '~/static/index/icon-homefurnish.png'
import sm_five from '~/static/index/icon-sketch.png'
import sm_six from '~/static/index/icon-class.png'
import sm_seven from '~/static/index/icon-case.png'
import sm_eight from '~/static/index/icon-quote.png'
import sm_nine from '~/static/index/icon-reserve.png'
import sm_ten from '~/static/index/icon-about.png'
import sm_eleven from '~/static/index/icon-e-center.png'
import sm_twelve from '~/static/index/icon-p-center.png'



export const eight = [
    { name: '全屋整装', url: eight_one },
    { name: '装修主材', url: eight_two },
    { name: '家居软装', url: eight_three },
    { name: '装修效果图', url: eight_four },
    { name: '装修攻略', url: eight_five },
    { name: '装修案例', url: eight_six },
    { name: '免费报价', url: eight_seven },
    { name: '预约量房', url: eight_eight },
]

export const mainMenuList = [
    { name: '首页', imgurl: sm_one, url: '/' },
    { name: '全屋整装', imgurl: sm_two, url: 'decoration' },
    { name: '装修主材', imgurl: sm_three, url: 'material' },
    { name: '家居软装', imgurl: sm_four, url: 'mall' },
    { name: '装修效果图', imgurl: sm_five, url: 'renderings' },
    { name: '装修攻略', imgurl: sm_six, url: 'baike' },
    { name: '装修案例', imgurl: sm_seven, url: 'case' },
    { name: '免费报价', imgurl: sm_eight, url: 'quote' },
    { name: '预约量房', imgurl: sm_nine, url: 'measure' },
    { name: '关于我们', imgurl: sm_ten, url: 'aboutus' },
    { name: '线下体验中心', imgurl: sm_eleven, url: 'offline_store' },
    { name: '个人中心', imgurl: sm_twelve, url: 'member' },
]



// ---------------------- PC路由 ------------------------
//  router.get('/', controller.home.index);
//   // 爬虫抓取用的
//   router.get('/robots.txt', () => {});
//   // 首页
//   router.get('/index', controller.home.index);
//   // 城市切换
//   router.get('/city_change', controller.other.cityChange);
//   // 登录
//   router.get('/login', controller.user.login);
//   // 注册
//   router.get('/register', controller.user.register);
//   // 线下门店
//   router.get('/offline_store', controller.nav.offlineStore);
//   // 装修
//   router.get('/decoration', controller.decoration.index);
//   // 主材
//   router.get('/material', controller.decoration.index);
//   // 商城
//   router.get('/mall', controller.mall.index);
//   // 购物车
//   router.get('/cart', controller.cart.index);
//   // 核对订单信息
//   router.get('/order_confirm', controller.order.confirm);
//   // 付款
//   router.get('/order_pay', controller.order.pay);
//   // 订单完成
//   router.get('/order_paid', controller.order.paid);
//   // 新闻
//   router.get('/news', controller.news.list);
//   // 新闻详情
//   router.get('/news/:id', controller.news.detail);
//   // 装修百科
//   router.get('/baike', controller.baike.list);
//   // 百科详情
//   router.get('/baike/:id', controller.baike.detail);
//   // 装修案例
//   router.get('/case', controller.case.list);
//   // 案例详情
//   router.get('/case/:id', controller.case.detail);
//   // 商品
//   router.get('/products', controller.products.list);
//   // 商品详情
//   router.get('/products/:id', controller.products.detail);
//   // 活动列表
//   router.get('/promotions', controller.promotions.list);
//   // 活动详情
//   router.get('/promotions/:id', controller.promotions.detail);
//   // 效果图
//   router.get('/renderings', controller.renderings.list);
//   // 效果图详情
//   router.get('/renderings/:id', controller.renderings.detail);
//   // 报价
//   router.get('/quote', controller.house.quote);
//   // 报价与量房
//   router.get('/measure', controller.house.measure);