<template>
    <card>
        <div class="eight_box">
            <!--<span v-for="(one, index) in eight" :key="index" :class="index%4 == 0? '' : 'each'">
                            <img :src="one.url" alt="" class="img">
                            <div class="name">{{one.name}}</div>
                        </span>-->
            <van-row style="text-align:center">
                <van-col span="6" v-for="(one, index) in eight" :key="index" class="each">
                    <img :src="one.url" alt="" class="img">
                    <div class="name">{{one.name}}</div>
                </van-col>
            </van-row>
        </div>
    </card>
</template>

<script>
import { eight } from './const_'

export default {
    components: {
    },
    props: {

    },
    data() {
        return {
            eight,
        }
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style scoped>
.eight_box {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding: 0 .7rem .3rem;
    border-bottom: .01rem solid #dddddd;
}




/*
.eight_box span {
    margin-top: .3rem;
    display: inline-block;
}*/

.name {
    margin-top: .2rem;
}

.img {
    width: .9rem;
    margin: 0 auto;
}

.each {
    /*margin-left: .8rem;*/
    /*flex: 2;*/
    /*margin: 0 .15rem;*/
    margin-top: .3rem;
}
</style>
