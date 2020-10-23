<template>
  <el-aside>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <div v-for="(item, index) in listData" :key="index">
        <el-submenu :index="item.url">
          <template slot="title">
            <div @click="linkTo(item.url)">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </div>
          </template>
          <!-- <el-menu-item-group>
            <el-menu-item index="">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      listData: [
        { title: "软件下载", url: "/software", icon: "el-icon-menu" },
        { title: "在线书籍", url: "/gitbook", icon: "el-icon-notebook-2" },
        { title: "开源库", url: "/opensourcelib", icon: "el-icon-box" }
      ]
    };
  },
  methods: {
    linkTo(url) {
      this.$router.push(url);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-aside {
  background-color: #545c64;
}
</style>
