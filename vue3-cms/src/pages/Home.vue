<template>
  <div class='home'>
    <p>这是vue3项目的home页面</p>
    <p><button @click="jump">跳转到about页</button></p>
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
      this.$router.push("about");
    },
  },
}
</script>
<style lang='scss' scoped>
.home {
    background-color: bisque;
}
</style>