<script setup lang="ts"></script>
<template>
  <el-aside>
    <el-scrollbar>
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Grid /></el-icon>Navigator One
          </template>
          <el-menu-item index="1-1">
            <el-icon><StarFilled /></el-icon>Option 1
          </el-menu-item>
          <el-menu-item index="1-2">
            <el-icon><StarFilled /></el-icon>Option 2
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Grid /></el-icon>Navigator Two
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="2-1">Option 1</el-menu-item>
            <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="2-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="2-4">
            <template #title>Option 4</template>
            <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Grid /></el-icon>Navigator Three
          </template>
          <el-menu-item-group>
            <template #title>Group 1</template>
            <el-menu-item index="3-1">Option 1</el-menu-item>
            <el-menu-item index="3-2">Option 2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="3-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="3-4">
            <template #title>Option 4</template>
            <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<style scoped>
.el-aside {
  width: 192px;
  background-color: #d1edc4;
  color: #fff;
  font-weight: bold;
}

.el-menu,
.el-menu-item {
  background-color: #d1edc4;
}
</style>
