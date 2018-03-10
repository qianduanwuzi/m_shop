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
  .navBox{
    position: relative;
    // display: flex;
    // align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: .36rem;
    color: #333;
    .arrowLeft, .backTxt, .nav{
      position: absolute;

    }
    .arrowLeft {
      width: .18rem;
    }
    .backTxt {
      padding-left: .15rem;
    }
    .nav {

    }
  }
}
</style>
