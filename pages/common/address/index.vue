<template>
    <div>
      <top-nav title="收货地址">
        <span slot="right">
        </span>
      </top-nav>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img1" style="width:.33rem" alt="">
        </div>
       </div>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.33rem" alt="">
        </div>
       </div>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.33rem" alt="">
        </div>
       </div>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.33rem" alt="">
        </div>
       </div>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.33rem" alt="">
        </div>
       </div>
       <div class="top">
        <div style="width:95%">
          <div class="t1"><span style="font-size:.32rem">测试</span><span style="font-size:.32rem;padding-left:.25rem">13333333333</span></div>
          <div class="t2"><span style="color:#db230a">[默认地址]</span><span style="color:#333;padding-left:.05rem">江苏省苏州吴中区月亮湾10号慧湖大厦B座 15F家装e站</span></div>
        </div>
        <div style="width:5%">
          <img :src="img2" style="width:.33rem" alt="">
        </div>
       </div>
    </div>
</template>

<script>
import img1 from "~/static/member/icon-check-on.png";
import img2 from "~/static/member/icon-check.png";

export default {
  asyncData(context) {
    // console.log('11', context)
    // return { name: 'posts', title: '123' }
  },
  data() {
    return {
      img1,
      img2
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: "this is posts" }
      ]
    };
  },

  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  padding: .32rem .33rem;
  border-top: .01rem #ccc solid;
}

.t1 {
  color: #333;
}

.t2 {
  font-size: .26rem;
  padding-top: .15rem;
}
</style>
