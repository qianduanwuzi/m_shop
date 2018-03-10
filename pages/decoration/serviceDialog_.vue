<template>
    <div class="">
        <van-dialog v-model="show" :show-confirm-button="false" style="padding-bottom: .9rem" class="container">
          <div class="navBox">
            <img src="~static/decoration/icon-back.png" alt="" class="arrowLeft" @click="show = false">
            <div class="backTxt">返回</div>
            <div class="nav">服务门店</div>
          </div>
          <div>

          </div>
          <div>

          </div>
          <van-button size="large">确认</van-button>
        </van-dialog>
    </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    show: {
      default: false,
      type: Boolean
    },

  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.container{
  padding: .3rem;
  .navBox{
    height: .8rem;
    position: relative;
    border-bottom: 1px solid #ddd;
    font-size: .36rem;
    color: #333;
    .arrowLeft, .backTxt, .nav{
      position: absolute;
      top: 0;
    }
    .arrowLeft {
      top: .09rem;
      width: .18rem;
    }
    .backTxt {
      left: .35rem;
    }
    .nav {
      left: 39%;
    }
  }
}
</style>
