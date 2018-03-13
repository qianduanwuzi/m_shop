<template>
    <div>
      <top-nav title="个人信息"></top-nav>
      <div class="w_div"></div>
      <div class="info">
        <div class="info_l">昵称</div>
        <div class="info_r">
          二毛一毛
          <img :src="img1" style="width:.18rem;display:inline-block;margin-left:0.1rem" alt="">
        </div>
      </div>
      <div class="info">
        <div class="info_l">姓名</div>
        <div class="info_r">
          某某某
        </div>
      </div>
      <div class="info">
        <div class="info_l">手机号码</div>
        <div class="info_r">
          13333333333
        </div>
      </div>
      <div class="info">
        <div class="info_l">收货地址</div>
        <div class="info_r">
          <img :src="img1" style="width:.18rem;display:inline-block;margin-left:0.1rem" alt="">
        </div>
      </div>
      <div class="addr_title">
        房屋地址
      </div>
      <div class="addr">
        江苏省苏州市工业园区月亮湾10号慧湖大厦b栋15楼
      </div>
      <div class="addr">
        江苏省苏州市工业园区月亮湾10号慧湖大厦b栋15楼
      </div>
      <div class="w_div"></div>
      <div class="info">
        <div class="info_l">服务分站</div>
        <div class="info_r">
          苏州分站
        </div>
      </div>
      <div class="btn_d">
        <van-button class="btn" @click="show=true">退出登录</van-button>
      </div>

      <van-dialog v-model="show" style="font-size:40px;">
      退出成功
      </van-dialog>
    </div>
</template>

<script>
import { Dialog } from "vant";
import img1 from "~/static/member/icon-more.png";

export default {
  asyncData(context) {
    // console.log('11', context)
    // return { name: 'posts', title: '123' }
  },
  data() {
    return {
      img1,
      show:false
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

  },
  components: {}
};
</script>

<style lang="scss" scoped>
.w_div {
  background-color: #f4f4f4;
  height: 0.2rem;
  border-top: 0.01rem #ccc solid;
}

.info {
  height: 1rem;
  line-height: 1rem;
  font-size: 0.34rem;
  display: flex;
  justify-content: space-between;
  border-top: 0.01rem #ccc solid;
}

.info_l {
  color: #333;
  padding-left: 0.33rem;
}

.info_r {
  color: #999;
  padding-right: 0.33rem;
  display: flex;
  align-items: center;
}

.addr_title {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #666;
  background-color: #f4f4f4;
  font-size: 0.32rem;
  border-top: 0.01rem #ccc solid;
  padding-left: 0.33rem;
}

.addr {
  padding: 0.3rem 0.3rem;
  font-size: 0.32rem;
  border-top: 0.01rem #ccc solid;
  padding-left: 0.33rem;
}

.btn_d {
  border-top: 0.01rem #ccc solid;
  background-color: #f4f4f4;
  padding-top: 0.67rem;
  padding-bottom: 0.67rem;
}

.btn {
  margin: 0 0.2rem;
  width: 94%;
  height: 0.9rem;
  background-color: #da1a00;
  color: #fff;
  font-size: 0.44rem;
  border-radius: 0.16rem;
}
</style>
