<template>
    <div>
      <top-nav title="会员中心"></top-nav>
       <div class="top" @click="detail">
        <div style="width:25%">
          <img :src="img1" style="width:1.28rem" alt="">
        </div>
        <div style="width:70%">
          <div class="t_name">二毛一毛</div>
          <div class="t_phone">13333333333</div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.18rem" alt="">
        </div>
       </div>
       <div class="w_div"></div>
       <div class="middle1">
        <van-row>
          <van-col span="12" class="m1_my_order">我的订单</van-col>
          <van-col span="12" class="m1_all_order">查看全部订单</van-col>
        </van-row>
       </div>
       <div class="middle2">
         <van-row>
          <van-col span="8" style="text-align:center">
            <img :src="img3" style="width:.62rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">待支付</div>
          </van-col>
          <van-col span="8" style="text-align:center">
            <img :src="img4" style="width:.62rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">待评价</div>
          </van-col>
          <van-col span="8" style="text-align:center">
            <img :src="img5" style="width:.62rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">退款/售后</div>
          </van-col>
        </van-row>
       </div>
       <div class="w_div"></div>
       <div class="footer">
         <van-row>
          <van-col span="8" class="f_col">
            <img :src="img6" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">我的合同</div>
          </van-col>
          <van-col span="8" class="f_col">
            <img :src="img7" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">异议记录</div>
          </van-col>
          <van-col span="8" class="f_col_l">
            <img :src="img8" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">抵用金</div>
          </van-col>
        </van-row>
       </div>
       <div class="footer">
         <van-row>
          <van-col span="8" class="f_col">
            <img :src="img9" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">我的积分</div>
          </van-col>
          <van-col span="8" class="f_col">
            <img :src="img10" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">我的收藏</div>
          </van-col>
          <van-col span="8" class="f_col_l">
            <img :src="img11" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">会员特权</div>
          </van-col>
        </van-row>
       </div>
       <div class="footer">
         <van-row>
          <van-col span="8" class="f_col">
            <img :src="img13" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">我的选品单</div>
          </van-col>
          <van-col span="8" class="f_col">
            <img :src="img12" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">我的装修</div>
          </van-col>
          <van-col span="8" class="f_col_l">
            <img :src="img14" style="width:.58rem;display:inline-block" alt="">
            <div style="padding-top:.2rem">保障计划</div>
          </van-col>
        </van-row>
       </div>
    </div>
</template>

<script>
import img1 from "~/static/member/img-head-portrait.png";
import img2 from "~/static/member/icon-more.png";
import img3 from "~/static/member/icon-pay.png";
import img4 from "~/static/member/icon-commment.png";
import img5 from "~/static/member/icon-refund.png";
import img6 from "~/static/member/icon-contract.png";
import img7 from "~/static/member/icon-objection.png";
import img8 from "~/static/member/icon-coupon.png";
import img9 from "~/static/member/icon-integral.png";
import img10 from "~/static/member/icon-collection.png";
import img11 from "~/static/member/icon-privilege.png";
import img12 from "~/static/member/icon-decoration.png";
import img13 from "~/static/member/icon-selection.png";
import img14 from "~/static/member/icon-security-plan.png";
export default {
  asyncData(context) {
    // console.log('11', context)
    // return { name: 'posts', title: '123' }
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: "this is posts" }
      ]
    };
  },

  methods: {
    detail: function() {
      this.$router.push({ path: '/member/detail',query: { id: 1 } })
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  padding: 0.34rem 0.3rem;
  border-top: 0.01rem #ccc solid;
  border-bottom: 0.01rem #ccc solid;
}

.t_name {
  font-size: 0.36rem;
  color: #333;
}

.t_phone {
  font-size: 0.32rem;
  color: #999;
  padding-top: 0.1rem;
}

.w_div {
  background-color: #f4f4f4;
  height: 0.24rem;
}

.middle1 {
  border-top: 0.01rem #ccc solid;
  height: 0.89rem;
  line-height: 0.89rem;
}

.m1_my_order {
  text-align: left;
  font-size: 0.34rem;
  padding-left: 0.3rem;
}

.m1_all_order {
  text-align: right;
  font-size: 0.28rem;
  padding-right: 0.3rem;
  color: #999;
}

.middle2 {
  border-top: 0.01rem #ccc solid;
  border-bottom: 0.01rem #ccc solid;
  color: #333;
  font-size: 0.28rem;
  padding: 0.4rem 0;
}

.footer {
  border-top: 0.01rem #ccc solid;
  border-bottom: 0.01rem #ccc solid;
  color: #666;
  font-size: 0.28rem;
}

.footer_l {
  border-top: 0.01rem #ccc solid;
  color: #666;
  font-size: 0.28rem;
}

.f_col {
  text-align: center;
  border-right: 0.01rem #ccc solid;
  padding: 0.4rem 0;
}

.f_col_l {
  text-align: center;
  padding: 0.4rem 0;
}
</style>
