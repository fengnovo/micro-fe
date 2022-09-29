<template>
  <div class="tab">
    <p>tab页</p>
    <p><button @click="jump">返回到about页</button></p>
    <br />
    <div class="tab-container top-none">
      <ul class="tab-list">
        <li class="tab-item" @click="select(1)">
          <span class="tab-text" :class="{ active: index === 1 }">视频</span>
        </li>
        <li class="tab-item" @click="select(2)">
          <span class="tab-text" :class="{ active: index === 2 }">详情</span>
        </li>
        <li class="tab-item" @click="select(3)">
          <span class="tab-text" :class="{ active: index === 3 }">详情2</span>
        </li>
        <li class="tab-item" @click="select(4)">
          <span class="tab-text" :class="{ active: index === 4 }">详情3</span>
        </li>
        <li class="tab-item" @click="select(5)">
          <span class="tab-text" :class="{ active: index === 5 }">详情5</span>
        </li>
        <li class="tab-item" @click="select(6)">
          <span class="tab-text" :class="{ active: index === 6 }">详情6</span>
        </li>
        <li class="tab-item" @click="select(7)">
          <span class="tab-text" :class="{ active: index === 7 }">详情7</span>
        </li>
        <div class="tab-line" :style="style"></div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      index: 1,
      style:
        "transform: translateX(16px) translateX(-50%); transition-duration: 0.3s;",
    };
  },
  mounted() {
    this.select(1);
  },
  methods: {
    jump() {
      this.$router.back();
    },
    select(index) {
      this.index = index;
      const sideWidth =  document.querySelector('.el-aside')?.style.width.slice(0,-2) ?? 0;
      const left =
        document
          .querySelector(".tab-list > :nth-child(" + index + ")")
          .getBoundingClientRect().x + 16 - ((+sideWidth) ? (+sideWidth + 20) : 0);
      this.style =
        "transform: translateX(" +
        left +
        "px) translateX(-50%); transition-duration: 0.3s";
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.tab {
  height: 310vh;
  background-color: goldenrod;
  .tab-container {
    overflow: hidden;
    padding-top: 0.13rem;
    position: sticky;
    top: 0rem;
    z-index: 99;
    background-color: #1f1f23;
    .tab-list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 3rem;
      position: relative;
      .tab-item {
        text-align: center;
        line-height: 1rem;
        height: 1rem;
        cursor: pointer;
        .tab-text {
          font-family: PingFangSC-Medium;
          font-size: 1rem;
          color: hsla(0, 0%, 100%, 0.7);
          letter-spacing: 0.01rem;
          text-align: center;
          line-height: 0.59rem;
        }
        .active {
          color: #fff;
        }
      }
    }
    .tab-line {
      width: 2rem;
      height: 0.4rem;
      background: #7a46ff;
      z-index: 1;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
