<template>
  <div>
    <index-navbar :address="address"></index-navbar>
    <swiper :imgs="imgs"></swiper>
    <eight></eight>
    <list :data="listData"></list>
    <designer :data="designData"></designer>
    <offline-center></offline-center>
  </div>
</template>

<script>
import IndexNavbar from "~/components/bus/index/indexNavBar"
import Eight from "~/components/bus/index/eight"
import List from "~/components/bus/index/list"
import Designer from "~/components/bus/index/desinger"
import OfflineCenter from "~/components/bus/index/offlineCenter"
import img from "~/static/index/banner-index-01.png"
import img2 from "~/static/index/banner-index-01.png"

import img3 from "~/static/index/img-jfgz-after.png"
import img4 from "~/static/index/img-bbj.png"

import img5 from "~/static/index/img-sjs-01.png"
import img6 from "~/static/index/img-sgb.png"

import img7 from "~/static/index/img-jzrz-05.png"
import img8 from "~/static/index/img-jzrz-02.png"
import img9 from "~/static/index/img-jzrz-03.png"
import img10 from "~/static/index/img-jzrz-04.png"
import img11 from "~/static/index/img-jzrz-05.png"
import img12 from "~/static/index/img-jzrz-02.png"
export default {
  components: {
    IndexNavbar,
    Eight,
    List,
    Designer,
    OfflineCenter
  },
  data() {
    return {
      address: '苏州',
      listData: {
        baseData: [{ title: '全屋整装', subTitle: '大师严选 拎包入住', url: img3, des: '个性化设计', real: '1000', discount: '2000', comment: 12 },
        { title: '宝宝居', subTitle: '科学规划 健康整装', url: img4, des: '健康环保主材', real: '1000', discount: '2000', comment: 12 }],
        materData: { title: '装修主材', subTitle: '严选好材 匠心硬装', imgs: [], des: '工厂直供硬装主材', real: '1000', discount: '2000', comment: 12 },
        consData: { title: '装修施工', subTitle: '标准施工 可视验收', url: img6, des: '管理费全免满意再付款', real: '1000', discount: '2000', comment: 12 },
        newData: { title: '旧房换新', subTitle: '量身定制 造就美家', des: '旧房二手房必选', real: '1000', discount: '2000', comment: 12 },
        softData: {
          title: '家居软装', subTitle: '量身定制 造就美家',
          imgs: [{ src: img7, label: '1', subLabel: '11' }, { src: img8, label: '2', subLabel: '22' }, { src: img9, label: '3', subLabel: '33' },
          { src: img10, label: '4', subLabel: '44' }, { src: img11, label: '5', subLabel: '55' }, { src: img12, label: '6', subLabel: '66' },],
          des: '旧房二手房必选', real: '1000', discount: '2000', comment: 12
        },
      },
      designData: [
        { name: '十离', year: 5, caseList: ['中海龙', '万科', '中新'], url: img5 },
        { name: '十离1', year: 5, caseList: ['中海龙', '万科', '中新'], url: img4 }
      ],
      imgs: [img, img2]
    }
  },

}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
