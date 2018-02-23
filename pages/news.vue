<template>
    <div>
       this is news root页
       <!--child views-->
       <div>---child views---</div>
      <nuxt-child/>
    </div>
</template>

<script>
export default {
  // asyncData(context) {
  //   console.log('11', context)
  //   return { name: 'posts', title: '123' }
  // },
  async asyncData ({ params }) { // 参数看api 拿不到this
      // console.log('---------------', params)
      // // let { data } = await axios.get(`https://my-api/posts/${params.id}`)
      // // return { title: data.title }
      return {title: 'news', content: 'this is news content'} // 返回数据会加载到data（）可作实例化后全局使用
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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
