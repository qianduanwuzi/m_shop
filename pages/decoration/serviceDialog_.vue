<template>
    <div class="">
        <van-dialog v-model="show" :show-confirm-button="false" style="padding-bottom: .9rem" class="container">
          <div class="navBox">
            <img src="~static/decoration/icon-back.png" alt="" class="arrowLeft" @click="show = false">
            <div class="backTxt">返回</div>
            <div class="nav">服务门店</div>
          </div>
            <van-row class="area">
              <van-col span="11">
                <div class="box">
                  <div class="name">{{province}}</div>
                  <img src="" alt="">
                </div>
              </van-col>
              <van-col span="11"  offset="2">
                <div class="box">
                  <div class="name">{{city}}</div>
                  <img src="" alt="">
                </div>
              </van-col>
            </van-row>
          <div>

          </div>
          <!-- <van-button size="large" style="">确认</van-button> -->
          <btn styles="width: 6rem; line-height: .95rem;background-color: #DA1A00;font-size: .34rem;color: #fff;border-radius: .16rem"></btn>
        </van-dialog>
    </div>
</template>

<script>
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
      city: "苏州"
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.area {
  .box {
    width: 99%;
    line-height: .9rem;
    border: 1px solid #ccc;
    border-radius: .02rem;
    .name {
      font-size: 0.28rem;
      color: #999;
    }
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
