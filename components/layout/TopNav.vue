<template>
    <div class="navBox">
        <img src="~static/decoration/icon-back.png" alt="" class="arrowLeft" @click="$router.go(-1)">
        <div style="flex: 2">
            <!--自定义-->
            <slot>
                <div class="title">{{title}}</div>
            </slot>
        </div>
        <img src="~static/index/icon-menu.png" alt="" class="icon_menu" @click="show = true">
        <van-dialog v-model="show" :show-confirm-button="false" style="padding-bottom: .9rem">
            <van-row >
                <van-col span="24" style="position: relative"><img src="~static/index/icon-close.png" alt=""  class="closeImg" @click="show = false"></van-col>
            </van-row>
           <van-row style="padding-top: .2rem">
                <van-col span="8" v-for="(one, index) in mainMenuList" :key="index" class="menuCol">
                    <router-link :to="one.url">
                        <img :src="one.imgurl" alt="" class="menuImg">
                        <div class="menuName">{{one.name}}</div>
                    </router-link>
                </van-col>
            </van-row>
        </van-dialog>
    </div>
</template>

<script>

import {mainMenuList} from "./menu"
export default {
  components: {
  },
  props: {
   title: {
       default: '',
       type: String
   }
  },
  data() {
    return {
        show: false,
        mainMenuList,
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/main.scss";
.navBox{
    display: flex;
    line-height: .88rem;
    align-items: center;
    padding: 0 .3rem;
    .arrowLeft{
        width: .18rem;
        justify-content: flex-start;
    }
    .title{
        text-align: center;
        // flex: 2;
        font-size: .36rem;
        color: #333;
    }
    .icon_menu {
        width: .44rem;
        justify-content: flex-end;
    }
}

// .icon_menu {
//     width: .44rem;
// }

.closeImg{
    width: .58rem;
    position: absolute;
    top: .2rem;
    right: .2rem;
}

.menuCol{
    margin-top: .76rem;
    text-align: center;
    .menuImg{
        width: .91rem;
        margin: 0 auto;
    }
    .menuName{
        color: #333333;
        font-size: .26rem;
        margin-top: .17rem;
    }
}
</style>
