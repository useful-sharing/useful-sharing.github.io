<template>
  <el-row>
    <el-col :span="6" v-for="(item, index) in softwareData.officeSoftware" :key="index">
      <a :href="item.url" target="_blank">
        <el-card shadow="hover">
          <span class="title">{{ item.name }}</span>
          <div class="desc">{{ item.desc }}</div>
        </el-card>
      </a>
    </el-col>

    <h1>Will add more</h1>
  </el-row>
</template>

<script>
import softwareData from "../data/software.json";
export default {
  name: "Software",
  data() {
    return {
      softwareData
    };
  }
};
</script>

<style scoped>
.el-card {
  text-align: center;
}
.title {
  font-weight: bold;
}
.desc {
  font-style: italic;
}
a {
  text-decoration: none;
}
</style>
