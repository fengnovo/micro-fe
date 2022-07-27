<template>
  <div id="root-app">
    <el-container style="border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <router-link :to="{ name: 'vue2-cms' }"
            ><el-menu-item index="1">
              <i class="el-icon-message"></i>vue2 app
            </el-menu-item>
          </router-link>
          <router-link :to="{ name: 'vue3-cms' }"
            ><el-menu-item index="2">
              <i class="el-icon-menu"></i>vue3 app
            </el-menu-item>
          </router-link>
          <router-link :to="{ name: 'react-cms' }"
            ><el-menu-item index="3">
              <i class="el-icon-setting"></i>react app
            </el-menu-item>
          </router-link>
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
          <router-view></router-view>
          <div id="subapp-container"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      a: "",
    };
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
