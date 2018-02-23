<template>
    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(one, index) in data" :key="index">
            <div :style="`background: #ccc url(${one.url})center 100% no-repeat ;background-size: 100%`" class="box">
                <div class="sideBox">
                    <div>
                        <label for="">设计师</label>
                        <span class="an">{{one.name}}</span>
                    </div>
                    <div class="labelBox">
                        <label for="">从业年限</label>
                        <span class="an">{{one.year}}</span>
                    </div>
                    <div class="labelBox">
                        <label for="">设计案例</label>
                        <div v-for="(sone, sIndex) in one.caseList" :key="sIndex" class="case">
                            <span>{{sone}}</span>
                        </div>
                    </div>
                    <div class="labelBox">
                        <btn name="预约同城设计师" @btnHandler="btnClick"></btn>
                    </div>
                </div>
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    components: {
    },
    props: {
        data: {
            default: () => [],
            type: Array
        }


    },
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {
        btnClick() {

        }
    }
}
</script>

<style scoped>
.box {
    /*width: 400px;*/
    height: 4.7rem;
    /*background: url('~/static/index/img-bbj.png');*/
    /*background-size: 100%;*/
    position: relative;
}

.sideBox {
    padding-top: .55rem;
    padding-left: .4rem;
    height: 100%;
    background-color: #343434;
    width: 2.4rem;
    position: absolute;
    right: 0;
    top: 0;
    color: #ffffff;
}

.sideBox label {
    width: .8rem;
}

.labelBox {
    margin-top: .35rem
}

.an {
    padding-left: .35rem;
    color: #999999;
}

.case {
    padding-top: .28rem;
    color: #999999;
}
</style>
