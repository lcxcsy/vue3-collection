# Vue3-Collection

> A project library based on Vue3, TypeScript and Vite.

## Features

- StyleLint
- Element-plus
- Vue-Router@next
- Axios

## StyleLint

Adopting Eslint + Tslint + Prettierrc + Volar, and the required dependencies is:

- [eslint](https://eslint.org/)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

```sh
npm install --save-dev eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

The `eslintrc.js` configuration is as follows:

```js
module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    es2021: true // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  },
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-undef': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
```

The `.prettierrc` configuration is as follows:

```js
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "semi": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "preserve",
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore",
  "overrides": [
    {
      "files": ["*.json", ".eslintrc", ".babelrc", ".stylelintrc", ".prettierrc"],
      "options": {
        "parser": "json",
        "tabWidth": 2
      }
    }
  ]
}
```

## Script Setup

`<script setup>` 是在单文件组件 (SFC) 中使用**组合式 API** 的编译时语法糖。相比于普通的 `<script>` 语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

详细介绍：[https://v3.cn.vuejs.org/api/sfc-script-setup.html](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

```vue
<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'

type Todo = {
  id: number
  name: string
  completed: boolean
}

const data = reactive({
  todoList: [] as Todo[]
})
const count = ref(0) // 自动解包
</script>
```

**defineProps\defineEmits\defineExpose**

```ts
<script setup lang="ts">
interface Props {
  msg?: string
  labels?: string[]
}

// defineProps
const props = defineProps<Props>()

// default value of defineProps
withDefaults(defineProps<Props>(),{
  msg: "Hello", labels: () => ['one', 'two']
})

// defineEmits
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// defineExpose
</script>
```
