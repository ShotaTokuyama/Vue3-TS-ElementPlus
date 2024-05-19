<script setup lang="ts"></script>
<template>
  <el-header>
    <div class="header-title">Vue3 TypeScript ElementPlus</div>
    <div class="header-btn">
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="primary" plain>Primary</el-button>
    </div>
  </el-header>
</template>
<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  color: #fff;
  background-color: #529b2e;
}

.header-title {
  font-size: 24px;
  font-weight: bold;
}
</style>
