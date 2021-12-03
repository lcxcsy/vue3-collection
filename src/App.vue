<template>
  <page-menu v-if="showMenu" ref="pageMenu" :menu="menuList" />
  <div class="router-view" :style="{ marginLeft: marginLeft, width: `calc(100% - ${marginLeft})` }">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import PageMenu from '@/components/PageMenu.vue'
import { menuList } from '@/config/nav.config'
import { computed } from 'vue-demi'
import { useStore } from 'vuex'
import { key } from './store'

const store = useStore(key)
const showMenu = computed((): boolean | undefined => store.state.app?.pageMenu.show)
const isCollapse = computed((): boolean | undefined => store.state.app?.pageMenu.collapse)
const marginLeft = computed((): string => {
  return showMenu.value ? (isCollapse.value ? '64px' : '240px') : ' 0px'
})
</script>

<style lang="scss" scoped>
.router-view {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
