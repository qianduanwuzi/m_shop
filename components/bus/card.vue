<template>
    <div>
        <slot></slot>
        <div class="bottom_cover"></div>
    </div>
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

<style lang="scss" scoped>
@import "../../assets/main.scss";

.bottom_cover{
    height: .2rem;
    background-color: $bg-color-1;
}
</style>
