<template>
    <div>
        <div v-for="(one, index) in data.baseData" :key="index">
            <list-card :listData="one"></list-card>
        </div>
        <list-card :listData="data.materData" v-if="data.materData">
            <span v-for="(one, index) in data.materData.imgs" :key="index">
                <img :src="one" alt="">
            </span>
        </list-card>
        <list-card :listData="data.consData" v-if="data.consData">

        </list-card>
        <!--旧房换新-->
        <list-card :listData="data.newData" v-if="data.newData">
            旧房换新
        </list-card>
        <list-card :listData="data.softData" v-if="data.softData">
            <van-row gutter="20" style="padding:.2rem;margin:0 !important;">
                <van-col class="eachBox" span="12" v-for="(one, index) in data.softData.imgs" :key="index">
                    <!--<span class="eachBox">-->
                        <img :src="one.src" alt="" class="img" style="width:100%">
                        <div class="labelBox">
                            <div class="label">{{one.label}}</div>
                            <div class="subLabel">{{one.subLabel}}</div>
                        </div>
                    <!--</span>-->
                </van-col>

            </van-row>
            <div slot="footer" class="footer">
                更多家居软装 >>
            </div>
        </list-card>
        <!--家居软装-->

    </div>
</template>

<script>
import ListCard from "../listCard";
export default {
    components: {
        ListCard
    },
    props: {
        data: {
            default: () => { },
            type: Object
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
@import "../../../assets/main";
.eachBox {
    display: inline-block;
    // margin-left: .2rem;
    // margin-top: .2rem;
    img {
        width: 3.46rem;
    }
    .labelBox {
        background-color: $bg-color-1;
        padding: .25rem .5rem;
        .label {
            font-size: .28rem;
            color: $font-color-3;
        }
        .subLabel {
            margin-top: .14rem;
            font-size: .22rem;
            color: $font-color-1;
        }
    }
}

.footer {
    text-align: center;
    line-height: .85rem;
    font-size: .28rem;
}

.bottomCover {
    height: .2rem;
    background-color: $bg-color-1;
}
</style>
