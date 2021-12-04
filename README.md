# vue3-sfc-ts-template

> A personal project template based on vue3, script setup, typescript and vite.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Features

- StyleLint
- SFC (Script Setup)
- Vue-Router@next
- Vuex@next
- Axios
- Element-plus

### StyleLint

Adopting Eslint + Tslint + Prettier + Volar, and the required dependencies is:

- [eslint](https://eslint.org/)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

```sh
npm install --save-dev eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

The `eslintrc.js` and `Prettier` configuration can be seen in project.

### Script Setup

`<script setup>` 是在单文件组件 (SFC) 中使用**组合式 API** 的编译时语法糖。相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

详细介绍：[https://v3.cn.vuejs.org/api/sfc-script-setup.html](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

**defineProps\defineEmits\defineExpose**

```ts
<script setup lang="ts">
interface Props {
  msg: string
  labels?: string[]
}

// defineProps
const props = defineProps<Props>()

// or default value of defineProps
const props = withDefaults(defineProps<Props>(),{
  msg: "Hello", labels: () => ['one', 'two']
})

// defineEmits
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

## Vuex

`vuex` 类型化和模块化:

```ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import app, { AppState } from './modules/app'

export type State = {
  user: string
  app?: AppState
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    user: 'developer'
  },
  modules: {
    app
  }
})
```

## Hooks are smarter mixins

Mixins are helpful, no doubt - but they're dumb helpers. Hooks allow us to use smarter imports with explicit logic origin. If you have a file with several mixins, the origin of the data/methods/computed etc that are you now have access to is not immediately obvious. Hooks have us import what we need to use from them, and so we can clearly track our data's origin.

Hooks can also communicate with each other, something that mixins couldn't do.

## Some Question

1. Cannot find module 'worker_threads'
