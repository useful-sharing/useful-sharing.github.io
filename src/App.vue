<template>
  <el-container>
    <Aside />
    <Main />
  </el-container>
</template>

<script>
import Aside from "./components/Aside";
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    Main,
    Aside
  }
};
</script>

<style>
html,
body,
.el-container {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
