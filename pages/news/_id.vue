<template>
    <div>
        id is {{$route.params.id}}
    </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log('11', context)
    return { name: 'posts', title: '123' }
  },
  // asyncData ({ params }) {
  //     return axios.get(`https://my-api/posts/${params.id}`)
  //     .then((res) => {
  //     return { title: res.data.title }
  //     })
  // },
  fetch() {

  },
  head() {
    return {
      
      // meta: [
      //   { hid: 'description', name: 'description', content: 'this is posts' }
      // ]
    }
  },
  mounted: function() {
    console.log(this.$route)
  },
  methods: {
   
  },
  components: {
  }
}
</script>

<style>

</style>
