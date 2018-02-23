<template>
    <van-swipe :autoplay="autoplay">
        <van-swipe-item v-for="(one, index) in imgs" :key="index">
            <img :src="one" />
        </van-swipe-item>
    </van-swipe>
</template>


<script>
export default {
    components: {
    },
    props: {
        //自动轮播间隔
        autoplay: {
            default: 3000,
            type: Number
        },
        // 父组件异步获取传递
        imgs: {
            default: () => [],
            type: Array
        }
    },
    data() {
        return {
          
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
