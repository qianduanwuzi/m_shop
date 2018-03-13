<template>
    <div class="">
        <van-dialog v-model="show" :show-confirm-button="false" style="padding-bottom: .9rem" class="container">
          <div class="navBox">
            <img src="~static/decoration/icon-back.png" alt="" class="arrowLeft" @click="show = false">
            <div class="backTxt" @click="show = false">返回</div>
            <div class="nav">服务门店</div>
          </div>
          <van-row class="area">
            <van-col span="11" @click.native="clickProvince">
              <div class="box">
                <div class="name">{{province}}</div>
                <img src="~static/decoration/icon-arrow-up.png" alt="" v-show="!provinceArrow">
                <img src="~static/decoration/icon-arrow-down.png" alt="" v-show="provinceArrow">
              </div>
            </van-col>
            <van-col span="11"  offset="2" @click.native="clickCity">
              <div class="box">
                <div class="name">{{city}}</div>
                <img src="~static/decoration/icon-arrow-up.png" alt="" v-show="!cityArrow">
                <img src="~static/decoration/icon-arrow-down.png" alt="" v-show="cityArrow">
              </div>
            </van-col>
          </van-row>
          <div class="areaBox" v-show="showList">
            <!-- area list -->
            <div v-for="(one, index) in list" :key="index" class="childBox" @click="clickItem(one, index)" v-show="cityArrow || provinceArrow">
              <span v-if="provinceArrow">{{one}}</span>
              <span v-else>{{one.subName}}</span>
            </div>
            <!-- 门店 list -->
            <div v-show="!cityArrow && !provinceArrow">
              <div v-for="(sone, sindex) in doorsList" :key="sindex" class="doorsItem">
                <div>
                  <img src="" alt="">
                  <img src="" alt="">
                </div>
               <div>
                  <div>体验中心名称：{{sone.shopName}}</div>
                  <div>地址：{{sone.address}}</div>
                  <div>电话：{{sone.phone}}</div>
               </div>
              </div>
            </div>
          </div>
          <btn styles="width: 6rem; line-height: .95rem;background-color: #DA1A00;font-size: .34rem;color: #fff;border-radius: .16rem;margin-top: .5rem"></btn>
        </van-dialog>
    </div>
</template>

<script>
import api from "~/fetch/api";
export default {
  components: {},
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      province: "江苏省",
      city: "苏州",
      list: [], // 省    市  渲染list
      doorsList: [], // 门店 list
      // provinceList: [],
      showList: false,
      provinceArrow: false,
      cityArrow: false,
      curIndex: 0 //根据province的index获取sublist
    };
  },
  created() {
    api.get("/api/mall/sub/sub-list?status=1").then(res => {
      this.dataList = res.datas;
      this.list = res.datas.map(one => one.province);
    });
  },
  methods: {
    clickProvince() {
      this.provinceArrow = !this.provinceArrow;
    },
    clickCity() {
      this.cityArrow = !this.cityArrow;
      this.list = this.dataList[this.curIndex].subList;
    },
    clickItem(d, i) {
      if (this.provinceArrow) {
        this.province = d;
        this.curIndex = i;
        // 切换省默认选中第一个市
        this.city = this.dataList[i].subList[0].subName;
      } else {
        this.city = d.subName;
      }
      this.cityArrow = false;
      this.provinceArrow = false;
    }
  },
  watch: {
    provinceArrow: function(val) {
      if (val) {
        this.cityArrow = false;
        this.showList = true;
      }
    },
    cityArrow: function(val) {
      if (val) {
        this.provinceArrow = false;
        this.showList = true;
      }
    },
    city: function(val) {
      api.get("/api/mall/sub/sub-query", {type: 2,status: 1,province: this.province,city: this.city+'市', pageNo:1,pageSize: 5  }).then(res => {
        this.doorsList = res.datas;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.area {
  margin-top: 0.2rem;
  .box {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
    width: 99%;
    line-height: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 0.05rem;
    img {
      width: 0.28rem;
    }
    .name {
      flex: 1;
      font-size: 0.28rem;
      color: #999;
    }
  }
}

.areaBox {
  // position: relative;
  height: 4rem;
  overflow-y: auto;
  .childBox {
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    // margin: 0 0.5rem;
    border-bottom: 1px #ddd solid;
    color: #5f646e;
  }
  .doorsItem{
    display: flex;
    align-items: center;
    font-size: .24rem;
    color: #666;
  }
}

.container {
  padding: 0.3rem;
  .navBox {
    height: 0.8rem;
    position: relative;
    border-bottom: 1px solid #ddd;
    font-size: 0.36rem;
    color: #333;
    .arrowLeft,
    .backTxt,
    .nav {
      position: absolute;
      top: 0;
    }
    .arrowLeft {
      top: 0.09rem;
      width: 0.18rem;
    }
    .backTxt {
      left: 0.35rem;
    }
    .nav {
      left: 39%;
    }
  }
}
</style>
