// 页面菜单子元素
export type MenuItemType = {
  title: string // 菜单标题
  router: string // 菜单路由路径
  icon: string // 菜单图标
  children?: Array<MenuItemType>
}

/** 表格格式参照
    label: '人员姓名'      // 表格的label
    value: 'personName'   // 对应的字段名
    isSlot: false         // 是否为Slot插槽
    isTransform: true     // 是否进行字典转换
    data: STATUS_MAP      // 所对应的字典
 */
export type ColumnItemType = {
  label: string
  value: string
  isSlot?: boolean
  isTransform?: boolean
  data?: string // 所对应的字段
}

// 不确定的类型 例如：表格传入数据的字段
export type UnCertainType = {
  [key: string]: string | number | boolean
}

// 分页类型
export type PaginationType = {
  pageNo: number
  pageSize: number
  total: number
}
