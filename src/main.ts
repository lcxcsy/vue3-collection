import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons'
import 'element-plus/dist/index.css'
import router from './config/router.config'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus, { size: 'mini', locale: zhCn })
app.use(router)

for (const icon in Icons) {
  app.component(`Icon${icon}`, Icons[icon])
}
app.component(`ElApple`, Icons.Apple)


app.mount('#app')
