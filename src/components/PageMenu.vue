<template>
  <nav id="page-menu" :style="{ width: isCollapse ? foldWidth : unfoldWidth }">
    <el-scrollbar wrap-style="height: 100%" view-style="height: 100%">
      <el-menu
        :default-active="defaultActiveMenu"
        :router="router"
        :collapse="isCollapse"
        :style="{ width: isCollapse ? `${parseInt(foldWidth)}px` : `${parseInt(unfoldWidth)}px` }"
      >
        <!-- 折叠按钮 -->
        <div class="el-sub-menu__title" @click="clickCollapse">
          <el-icon :size="20">
            <icon-expand v-if="isCollapse" />
            <icon-fold v-else />
          </el-icon>
        </div>
        <!-- 真实菜单 -->
        <component
          :is="item.children ? 'el-sub-menu' : 'el-menu-item'"
          v-for="(item, index) in menu"
          :key="index"
          :index="item.router || item.title"
        >
          <el-icon v-if="!item.children" :size="20">
            <component :is="item.icon"></component>
          </el-icon>
          <template #title>
            <el-icon v-if="item.children" :size="20">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
          <!-- 嵌套的子菜单 -->
          <el-menu-item v-for="(child, cIndex) in item.children" :key="cIndex" index="toDoList">
            <el-icon :size="20">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ child.title }}</span>
          </el-menu-item>
        </component>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>

<script setup lang="ts">
import { key } from '@/store'
import { useStore } from 'vuex'
import { computed } from 'vue-demi'
import type { MenuItemType } from '@/types'
import { useRouter, RouteRecordName } from 'vue-router'

type MenuProps = {
  menu: Array<MenuItemType> | null
  // 菜单折叠宽度
  foldWidth?: string
  // 菜单展开宽度
  unfoldWidth?: string
  // 是否只保持一个子菜单的展开
  uniqueOpened?: boolean
  // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
  router?: boolean
}

withDefaults(defineProps<MenuProps>(), {
  menu: null,
  foldWidth: '64px',
  unfoldWidth: '240px',
  router: true
})

/******************* 处理菜单折叠 *******************/
const store = useStore(key)
const isCollapse = computed(() => store.state.app?.pageMenu.collapse)
const emit = defineEmits<{ (e: 'click-collapse'): void }>()
const clickCollapse = async (): Promise<void> => {
  store.dispatch('app/toggleMenu')
  emit('click-collapse')
}

/******************* 当前激活菜单 *******************/
let defaultActiveMenu = computed((): RouteRecordName => {
  const path = useRouter()
  if (path.currentRoute.value.path) {
    return path.currentRoute.value.path
  } else {
    return ''
  }
})
</script>

<style lang="scss" scoped>
#page-menu {
  position: fixed;
  left: 0;
  height: 100%;
  transition: width 0.2s ease-in-out;
  height: 100%;
  .el-menu {
    min-height: 100%;
    .el-menu-item-group ::v-deep(.el-menu-item-group__title) {
      text-align: left;
    }
  }
}
</style>
