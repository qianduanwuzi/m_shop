<template>
    <div>
        <top-nav title="全屋整装-家装e站">
            <div class="definedNavSlotBox">
                <span class="title">全屋整装-家装e站</span>
                <img src="~static/decoration/icon-cart.png" alt="" class="shopIcon" />
            </div>
        </top-nav>
        <img src="" alt="">
        <div class="box" style="border-bottom: 1px solid #dcdcdc">
            <div class="label">【特权订金】{{data.label}}</div>
            <div class="des">{{data.des}}</div>
        </div>
        <div class="box" style="border-bottom: 1px solid #dcdcdc">
            <div>
                <label for="">订金</label> ￥29.9 抵 ￥2000
                <label for="">商品类型</label>
            </div>
        </div>
        <div class="box" style="border-bottom: 1px solid #dcdcdc">
            <label for="">服务门店</label> <span>请选择></span>
        </div>

        id is {{$route.params.id}}
    </div>
</template>

<script>
export default {
    //   asyncData(context) {
    //     console.log('11', context)
    //     return { name: 'posts', title: '123' }
    //   },
    // asyncData ({ params }) {
    //     return axios.get(`https://my-api/posts/${params.id}`)
    //     .then((res) => {
    //     return { title: res.data.title }
    //     })
    // },
    fetch() {

    },
    head() {
        return {

        }
    },
    data() {
        return {
            data: {
                label: ' 家装e站全包装修室内设计效果图套餐整装包', des: '商品描述',

            }

        }
    },
    mounted: function() {
        console.log(this.$route)
    },
    methods: {

    },
    components: {
    }
}
</script>

<style lang="scss" scoped>
.definedNavSlotBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .28rem 0 .15rem;
    .title {
        font-size: .36rem;
        color: #333;
    }
    .shopIcon {
        width: .53rem;
    }
}

.box {
    padding: .3rem;
    .label {
        font-size: .32rem;
        color: #333;
    }
    .des {
        margin-top: .2rem;
        font-size: .24rem;
        color: #666;
    }
}
</style>

