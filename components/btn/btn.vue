<template>
    <div :style="styles" @click="btnClick" class="btn">
        {{name}}
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        name: {
            default: '确认',
            type: String
        },
        styles: {
            default: "padding: .17rem .3rem;color: #ffffff;font-size: .18rem;border-radius: .05rem;border: .01rem solid #ffffff;",
            type: String
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
            this.$emit('btnHandler')
        }
    }
}
</script>

<style scoped>
.btn{
  text-align: center;
}
</style>
