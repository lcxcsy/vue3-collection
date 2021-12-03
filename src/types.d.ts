// 页面菜单子元素
export type MenuItem = {
  title: string // 菜单标题
  router: string // 菜单路由路径
  icon: string // 菜单图标
  children?: Array<MenuItem>
}
