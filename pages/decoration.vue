<template>
    <div>
      <nuxt-child/>
    </div>
</template>

<script>
export default {

  async asyncData ({ params }) { // 参数看api 拿不到this
      // console.log('---------------', params)
      // // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
      // // return { title: data.title }
    //   return {title: 'news', content: 'this is news content'} // 返回数据会加载到data（）可作实例化后全局使用
  },
  fetch() { // change store，返回数据不会加载到data（）

  },
  head() {
    return {
      title: this.title,
      // meta: [
      //   { hid: 'description', name: 'description', content: 'this is posts' }
      // ]
      meta: [
        {hid: 'description', name:'description', content: this.content}
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
