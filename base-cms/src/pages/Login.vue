<template>
  <div class="login-container">
    <el-form :model="form" ref="formRef" class="login-form">
      <div class="title-container">
        <h3 class="title">用户登陆</h3>
      </div>
      <el-form-item prop="username">
        <i class="el-icon-user svg-container"></i>&nbsp;
        <el-input v-model="form.username" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-edit svg-container"></i>&nbsp;
        <el-input v-model="form.password" :type="passwordType" />
        &nbsp;
        <i
          @click.prevent.stop="changeType()"
          :class="passwordType === 'password' ? 'el-icon-view' : 'eye-open'"
          class=" svg-container"
          style="cursor: pointer"
        ></i>
      </el-form-item>
      <el-button type="primary" class="login-button"  @click="jump">
        登陆
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      passwordType: 'password',
      form: {
        username: '',
        password: '',
      }
    };
  },
  methods: {
    jump() {
      this.$router.push("/");
    },
    changeType() {

    }
  },
}
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: none;
        // border: none;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
    .login-button {
      width: 100%;
      box-sizing: border-box;
    }
  }
  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  .show-pwd {
    // position: absolute;
    // right: 10px;
    // top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>