
import swiper from "~/components/swiper/swiper"
import btn from "~/components/btn/btn"


// 业务抽象类
import card from "~/components/bus/card"
let componentsArray = [
    { name: 'swiper', instance: swiper },
    { name: 'card', instance: card },
    { name: 'btn', instance: btn },
]
export default componentsArray 
 