

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
        <el-sub-menu index="1">
          <template #title>
            <el-icon :size="20">
              <icon-apple></icon-apple>
            </el-icon>
            <span>{{ defaultActiveMenu }}</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="Hello">item one</el-menu-item>
            <el-menu-item index="ToDoList">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="2">
          <el-icon :size="20"><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon :size="20"><icon-document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon :size="20"><icon-setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { MenuItem } from '@/types'
import { useRouter, RouteRecordName } from 'vue-router'
import { useStore } from 'vuex'
import { key } from '@/store'

type MenuProps = {
  menu: Array<MenuItem> | null
  menuCollapse?: boolean
  // 是否启用折叠按钮
  collapseBtn?: boolean
  // 菜单折叠宽度
  foldWidth?: string
  // 菜单展开宽度
  unfoldWidth?: string
  // 是否只保持一个子菜单的展开
  uniqueOpened?: boolean
  // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
  router?: boolean
}

const props = withDefaults(defineProps<MenuProps>(), {
  menu: null,
  menuCollapse: true,
  collapseBtn: true,
  foldWidth: '64px',
  unfoldWidth: '240px',
  router: true
})

/******************* 页面初始化操作 *******************/

/******************* 处理菜单数据 *******************/

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
  if (path.currentRoute.value.name) {
    return path.currentRoute.value.name
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
  // background-color: $--menu-item-fill;
  // box-shadow: $--menu-box-shadow;
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