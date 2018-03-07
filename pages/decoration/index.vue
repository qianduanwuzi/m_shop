<template>
    <div>
        <top-nav title="新房整装"></top-nav>
        <div v-for="(one, index) in data" :key="index">
            <router-link :to="`/decoration/${one.id}`">
                <card >
                    <img :src="one.url" alt="">
                    <div class="detail">
                        <van-row class="flex">
                            <van-col :span="20" class="title">[特权定金]{{one.title}}</van-col>
                            <van-col :span="4" class="comment">评论{{one.commentNum}}</van-col>
                        </van-row>
                        <div :class="['flex', 'zhekou']" style="text-align: right;">
                            <span class="realIcon">￥</span>
                            <span class="real">{{one.real || 1000}}</span>
                            <span style="margin-left: .02rem">抵</span>
                            <span>￥</span>
                            <span class="discount">{{one.discount || 2000}}</span>
                        </div>
                    </div>
                </card>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    asyncData(context) {
        // console.log('11', context)
        // return { name: 'posts', title: '123' }
    },

    fetch() {

    },
    head() {
        return {
            title: this.title,
            meta: [
                { hid: 'description', name: 'description', content: 'this is posts'}
            ],

        }
    },
    data() {
        return {
            data: [
                { url: '', title: '家装e站全屋整装装修套餐', commentNum: 12, id:'1'  }
            ]
        }
    },
    methods: {

    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/main";
.detail {
    padding: .3rem;
    .flex {
        display: flex;
        align-items: baseline;
        span {
            display: block;
        }
    }
    .zhekou {
        margin-top: .3rem;
        justify-content: flex-end;
    }
}

.title {
    font-size: .32rem;
    color: #333;
}

.comment {
    text-align: right;
    font-size: .22rem;
    color: #999;
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
</style>
