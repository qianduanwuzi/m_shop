<template>
    <div class="bar_box">
        <img src="~static/index/logo.png" alt="" class="logo">
        <div class="address">{{address}}</div>
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
    </div>
</template>

<script>
import {mainMenuList} from "./const"
export default {

    components: {
    },
    props: {
        address: {
            default: '苏州',
            type: String
        }
    },
    data() {
        return {
            show: false,
            mainMenuList, 
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.bar_box {
    padding: .25rem .3rem;
    display: flex;
    align-items: center;
    font-size: .28rem;
}

.logo {
    width: 1.55rem;
}

.address {
    margin-left: .3rem;
    flex: 2;
}

.icon_menu {
    width: .44rem;
}

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
