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
                <label for="" class="deposit">订金</label>
                <span class="symReal">￥</span>
                <span class="real">29.9</span>
                <span class="di">抵</span>
                <span class="symDis">￥</span>
                <span class="discount">2000</span>
            </div>
            <div class="typeBox">
                <label for="">商品类型</label>
                <span class="productType">{{data.productType}}</span>
            </div>
        </div>
        <div :class="['box', 'service']" style="border-bottom: 1px solid #dcdcdc">
            <label for="" @click.self="showDialog = true">服务门店</label>
            <span class="select">请选择<span class="arrowRight" @click="showDialog = true">></span></span>
        </div>
        <div class="box" style="display: flex;align-items: center">
             <label for="">数量：</label>
            <span class="select"><van-stepper v-model="data.num" style=""/></span>
        </div>
        <service-dialog :show="showDialog"></service-dialog>
        id is {{$route.params.id}}
    </div>
</template>

<script>
import serviceDialog from "~/components/bus/decoration/serviceDialog"
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
                label: ' 家装e站全包装修室内设计效果图套餐整装包', des: '商品描述', productType: '电子抵用券', num: 1,

            },
            showDialog: false,

        }
    },
    mounted: function() {
        console.log(this.$route)
    },
    methods: {
      selectCitys() {

      },
    },
    components: {
      serviceDialog,
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

.service {
    display: flex;
    align-items: center;
    .select{
        font-size: .28rem;
        flex: 2;
        text-align: right;
        .arrowRight{
            margin-left: .2rem
        }
    }
}
//
.box {
    padding: .3rem;
    .deposit{
        margin-right: .5rem;
    }
    .typeBox{
        margin-top: .5rem;
    }
    .label {
        font-size: .32rem;
        color: #333;
    }
    .des {
        margin-top: .2rem;
        font-size: .24rem;
        color: #666;
    }
    label {
        font-size: .28rem;
        color: #999;
    }
    .symReal {
        font-size: .28rem;
        color: #DA1A00;
    }
    .real {
        color: #DA1A00;
        font-size: .44rem;
    }
    .di {
        font-size: .28rem;
        color: #999;
    }
    .symDis {
        color: #999;
    }
    .discount {
        font-size: .44rem;
        color: #999;
    }
    .productType {
        color: #333;
        font-size: .28rem;
        margin-left: .4rem;
    }
}
</style>

