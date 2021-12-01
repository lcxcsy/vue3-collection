<script setup lang="ts">
import PageMenu from '@/components/PageMenu.vue'
import navList from '@/config/nav.config'
</script>

<template>
  <page-menu :menu="navList" />
  <div class="router-view">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  display: flex;
  margin-left: 240px;
  width: calc(100% - 240px);
  height: 100vh;
  flex-direction: column;
}
</style>
