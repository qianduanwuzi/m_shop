
import Swiper from "~/components/swiper/Swiper"
import Btn from "~/components/btn/Btn"


// 业务抽象类
import Card from "~/components/card/Card"
import TopNav from "~/components/layout/TopNav"
let componentsArray = [
    { name: 'swiper', instance: Swiper },
    { name: 'card', instance: Card },
    { name: 'btn', instance: Btn },
    { name: 'topNav', instance: TopNav },
]
export default componentsArray
