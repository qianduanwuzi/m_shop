<template>
    <span :style="styles" @click="btnClick">
        {{name}}
    </span>
</template>

<script>
export default {
    components: {
    },
    props: {
        name: {
            default: '',
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

</style>
