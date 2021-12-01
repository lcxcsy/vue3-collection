import { createRouter, RouteRecordRaw, createWebHashHistory, Router } from 'vue-router'

const modules = import.meta.glob('../pages/*.vue')
const createRoute = (component: string) => {
  return modules[`../pages/${component}.vue`]
}

class RouterInstance {
  private $routes: Array<RouteRecordRaw> = []
  private $router: Router | null = null

  constructor(routes: Array<RouteRecordRaw>) {
    this.$routes = routes
  }

  public createRouter = () => {
    // createRouter
    this.$router = createRouter({
      history: createWebHashHistory(),
      routes: this.$routes
    })

    // NavigationGuard
    this.$router.beforeEach(async (to, form, next) => {
      if (to.path.indexOf('error') > -1) {
        next();
        return;
      }
      next();
    })

    return this.$router
  }
}

// 路由菜单的配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/hello'
  }, {
    name: 'Hello',
    path: '/hello',
    component: createRoute('Hello')
  }
]

export default new RouterInstance(routes).createRouter()