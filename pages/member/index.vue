<template>
    <div>
       this is member / 
    </div>
</template>

<script>
export default {
  asyncData(context) {
    // console.log('11', context)
    // return { name: 'posts', title: '123' }
  },
 
  fetch() {

  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'this is posts' }
      ]
    }
  },
  methods: {
   
  },
  components: {
  }
}
</script>

<style>

</style>
