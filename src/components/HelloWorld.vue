<script setup lang="ts">
import { ref, nextTick } from 'vue'
withDefaults(defineProps<{ msg?: string }>(), {
  msg: 'Hello Vue 3 + TypeScript + Vite'
})
const emit = defineEmits<{ (e: 'test', str: string): void }>()
const count = ref(0)
const totalCount = ref(100)
const handleClick = function (): void {
  emit('test', '我被点击了11111111111')
  nextTick(() => {
    count.value = 1
  })
}
defineExpose({ totalCount })
</script>

<template>
  <h1 @click="handleClick()">{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
