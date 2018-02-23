<template>
    <div class="bottom_box">
        <van-row style="text-align: right">
            <van-col span="4" v-for="(one, index) in bottomMenu" :key="index" v-if="index < 4" style="width: 18%">
                 <router-link :to="one.url">{{one.name}}</router-link>
            </van-col>
            <van-col span='6' style="width: 25%">
                 <router-link :to="bottomMenu[4].url">{{bottomMenu[4].name}}</router-link>
            </van-col>
        </van-row>
        <div class="copy">苏公网安备 32059002001677</div>
        <div class="copy">峰硕（苏州）家居电子商务有限公司 版权所有</div>
    </div>
</template>

<script>
import { bottomMenu } from '~/portal/menu'

export default {
    components: {
        // Logo
    },
    data() {
        return {
            bottomMenu,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.bottom_box{
    padding: .4rem .6rem ;
    background-color: #333333;
    color: #aaaaaa;
}

.each_menu{
    margin-left: .37rem;
}

.copy{
    text-align: center;
    margin-top: .2rem;
}
</style>
