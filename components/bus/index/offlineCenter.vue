<template>
    <card>
        <van-row style="padding-top: .4rem;display: flex; align-items:center">
            <van-col span="20" class="title">全国近500家线下体验中心</van-col>
            <van-col span="4" class="citySelect">苏州></van-col>
        </van-row>

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
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped>
.title{
    font-size: .42rem;
    padding-left: .3rem;
}

.citySelect{
    font-size: .28rem;
    padding-right: .2rem;
    text-align: right
}
</style>
