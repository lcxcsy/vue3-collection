

<template>
  <nav id="page-menu" :style="{ width: isCollapse ? foldWidth : unfoldWidth }">
    <el-scrollbar wrap-style="height: 100%" view-style="height: 100%">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <el-icon :size="20">
              <icon-apple></icon-apple>
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
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
interface MenuItem {
  title: string
  router: string
  icon: string
}

interface MenuProps {
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
  foldWidth: '48px',
  unfoldWidth: '240px',
  router: true
})

// 定义Emit事件
const emit = defineEmits<{
  (e: 'click-collapse'): void
}>()

let isCollapse = false

const clickCollapse = (): void => {
  isCollapse = !isCollapse
  emit('click-collapse')
}

const updateMenu = (): void => {
  if (props.menu && props.menu.length) {
    // page.
    console.log(1)
  }
}
console.log(props.menu, 'props.menu')
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