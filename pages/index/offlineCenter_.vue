<template>
    <card>
        <van-row style="padding-top: .4rem;padding-bottom: .4rem;display: flex; align-items:center">
            <van-col span="20" class="title">全国近500家线下体验中心</van-col>
            <van-col span="4" class="citySelect" @click.native="show = true">{{address}}></van-col>
        </van-row>
        <van-area :area-list="areaList" :columns-num="2" title="" v-if="show" @confirm="confirm" @cancel="show = false" style="position: fixed;bottom: 0; width: 100%;font-size: .36rem" />
        <div v-for="(one, index) in list" :key="index" class="itemBox" :style="{'background-color': index%2? '#fff': '#F4F4F4', 'border': '.01rem solid #ddd', 'border-top': index? '':'.01rem solid #ddd'}">
            <div class="title">{{one.title}}</div>
            <div class="txt">服务主体：{{one.major}}</div>
            <div class="txt">地址：{{one.address}}</div>
            <div class="txt">电话：{{one.tel}}</div>
        </div>
        <div style="height: .4rem"></div>
    </card>
</template>

<script>
export default {
    components: {
    },
    props: {

    },
    data() {
        return {
            list: [{ title: '家装e站宁德线下体验中心', major: '宁德市东侨经济技术开发区', address: '养育巷100号', tel: '0512-66666666' },
            { title: '家装e站苏州线下体验中心', major: '苏州', address: '养育巷100号', tel: '0512-888888888' }],
            address: '苏州',
            show: false,
            areaList:
            {
                province_list: {
                    110000: '北京市',
                    120000: '天津市'
                },
                city_list: {
                    110100: '北京市',
                    110200: '县',
                    120100: '天津市',
                    120200: '县'
                },
                county_list: {
                    110101: '东城区',
                    110102: '西城区',
                    110105: '朝阳区',
                    110106: '丰台区',
                    120101: '和平区',
                    120102: '河东区',
                    120103: '河西区',
                    120104: '南开区',
                    120105: '河北区',
                }
            },
            pickData2: {
                columns: 2, // 两列
                link: true, // 联级必须需要link 参数
                // 第一列数据结构
                pData1: [
                    {
                        text: '数码',
                        value: 1999
                    },
                    {
                        text: '水果',
                        value: 2001
                    },
                    {
                        text: '衣服',
                        value: 2002
                    }
                ],
                // 第二列数据结构
                pData2: {
                    '1999': [
                        {
                            text: '相机',
                            value: 101
                        },
                        {
                            text: '手机',
                            value: 102
                        },
                        {
                            text: '音箱',
                            value: 103
                        }
                    ],
                    '2001': [
                        {
                            text: '苹果',
                            value: 104
                        },
                        {
                            text: '香蕉',
                            value: 105
                        },
                        {
                            text: '西红柿',
                            value: 106
                        }
                    ],
                    '2002': [
                        {
                            text: '衬衫',
                            value: 107
                        },
                        {
                            text: '短裤',
                            value: 108
                        },
                        {
                            text: '上衣',
                            value: 109
                        }
                    ]
                }
            },
        }
    },
    mounted() {
    },
    methods: {
        confirm() {

        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: .42rem;
    padding-left: .3rem;
}

.citySelect {
    font-size: .28rem;
    padding-right: .2rem;
    text-align: right
}

.itemBox{
    width: 92%;
    margin: 0 auto;
    padding: .35rem;
    // border: .01rem solid #ddd;
    .title{
        color: #333;
        font-size: .28rem;
        padding-left: 0;
    }
    .txt{
        margin-top: .2rem;
        color: #999;
    }
}
</style>
