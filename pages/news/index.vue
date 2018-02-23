<template>
    <div>
       this is news/ 
    </div>
</template>

<script>
export default {
  asyncData(context) {
    // console.log('11', context)
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
