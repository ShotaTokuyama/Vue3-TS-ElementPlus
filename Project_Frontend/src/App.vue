<script setup lang="ts">
import ContainerHeader from '@/components/LayoutContainer/ContainerHeader.vue'
import ContainerSideMenu from '@/components/LayoutContainer/ContainerSideMenu.vue'
</script>
<template>
  <div>
    <ContainerHeader />
    <el-container>
      <ContainerSideMenu />
      <el-main>
        <el-card></el-card>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped></style>
