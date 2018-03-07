<template>
    <div>
        <top-nav title="全屋整装-家装e站">
            <div class="definedNavSlotBox">
                <span class="title">全屋整装-家装e站</span>
                <img src="~static/decoration/icon-cart.png" alt="" class="shopIcon" />
            </div>
        </top-nav>
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
            data: [
                { url: '', title: '家装e站全屋整装装修套餐', commentNum: 12, id: '1' }
            ]
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
</style>

