<template>
    <card>
        <div class="title"><span class="title">{{listData.title}}</span></div>
        <div class="subTitle">
            <span>
                {{listData.subTitle}}
            </span>
        </div>
        <slot>
            <img :src="listData.url" alt="">
        </slot>
        <slot name="footer">
            <van-row>
                <div class="btBox">
                    <van-col span="9"><span class="des">{{listData.des}}</span> </van-col>
                    <van-col span="4"><img src="" alt="" class="deposit"></van-col>
                    <van-col span="8" style="text-align: right">
                        <span class="realIcon">￥</span>
                        <span class="real">{{listData.real}}</span>
                        <span>抵</span>
                        <span>￥</span>
                        <span class="discount">{{listData.discount}}</span>
                    </van-col>
                    <van-col span="3" style="text-align: center; padding-right: .1rem">
                        <span class="comment">评论</span>
                        <span class="comment" style="margin-left: .05rem">{{listData.comment}}</span>
                    </van-col>
                </div>
            </van-row>
        </slot>
    </card>
</template>

<script>

export default {
    components: {
    },
    props: {
        listData: {
            default: () => {
                return { title: '', subTitle: '', url: '', des: '', real: '', discount: '', comment: 0 }
            },
            type: Object
        }
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
@import "../../assets/main";
.title {
    margin-top: .3rem;
    font-size: .42rem;
    text-align: center;
}

.subTitle {
    text-align: center;
    font-size: .2rem;
    margin-bottom: .3rem;
}

.btBox {
    display: flex;
    align-items: center;
    line-height: .7rem;
}

.des {
    width: 3rem;
    font-size: .22rem;
    padding-left: .2rem;
    color: $font-color-2;
}

.real {
    color: $red-font-color;
    font-size: .32rem;
}

.realIcon {
    color: $red-font-color;
    font-size: .22rem;
}

.discount {
    font-size: .32rem;
}

.comment {
    color: #999999;
    font-size: .18rem;
    // margin-left: .2rem
}

.deposit {
    // margin-left: .1rem;
    width: 1.15rem;
    display: inline-block;
}
</style>
