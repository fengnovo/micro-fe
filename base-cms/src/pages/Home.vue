<template>
  <el-container class="container" style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
          <el-menu-item index="1"  @click="push('/vue2-cms-app')">
            <i class="el-icon-message"></i>vue2 app
          </el-menu-item>
          <el-menu-item index="2"  @click="push('/vue3-cms-app')">
            <i class="el-icon-menu"></i>vue3 app
          </el-menu-item>
          <el-menu-item index="3"  @click="push('/react-cms-app')">
            <i class="el-icon-setting"></i>react app
          </el-menu-item>
           <el-menu-item index="4"  @click="push('/vue3-cms-app#tab')">
            <i class="el-icon-s-grid"></i>vue3列表页面
          </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <div id="subapp-container"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    push(subapp) {
      history.pushState(null, subapp, subapp);
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.container {
  height: 100%;

}

.el-aside {
  color: #333;
}
</style>
