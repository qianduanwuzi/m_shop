<template>
    <div class="bar_box">
        <img src="~static/index/logo.png" alt="" class="logo">
        <div class="address">{{address}}</div>
        <img src="~static/index/icon-menu.png" alt="" class="icon_menu">
    </div>
</template>

<script>

export default {

    components: {
    },
    props: {
        address: {
            default: '苏州',
            type: String
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.bar_box{
    padding: .25rem .3rem;
    display: flex;
    align-items: center;
    font-size: .28rem;
}
.logo {
    width: 1.55rem;
}
.address{
    margin-left: .3rem;
    flex: 2;
}
.icon_menu{
    width: .44rem;
}
</style>
