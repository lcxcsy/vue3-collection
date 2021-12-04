import { MenuItemType } from '@/types'

// TODO 暂时只支持两层菜单的嵌套
export const menuList: MenuItemType[] = [
  {
    title: '欢迎',
    router: '/hello',
    icon: 'icon-menu'
  },
  {
    title: '代办列表',
    router: '/toDoList',
    icon: 'icon-menu'
  },
  {
    title: '通用表格',
    router: '/table',
    icon: 'icon-menu'
  },
  {
    title: '测试菜单',
    icon: 'icon-menu',
    children: [
      {
        title: '代办列表',
        router: '/toDoList',
        icon: 'icon-apple'
      },
      {
        title: '代办列表',
        router: '/toDoList',
        icon: 'icon-apple'
      }
    ]
  }
] as MenuItemType[]
