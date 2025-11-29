<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  getWeather()
})

async function getWeather() {
  try {
    const response = await fetch('/api/weather')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Erro ao buscar clima:', error)
  }
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
