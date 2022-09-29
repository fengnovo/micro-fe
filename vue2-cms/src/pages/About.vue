<template>
  <div class='about'>
    <p>这是vue2项目的about页面</p>
    <p><button @click="back">返回到home页</button></p>
    <br />
    <p><button @click="jump">跳转到tab页</button></p>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  methods: {
    jump() {
      this.$router.push("tab");
    },
    back() {
      this.$router.back();
    },
  },
}
</script>
<style lang='scss' scoped>
.about {
    background-color: yellow;
}
</style>