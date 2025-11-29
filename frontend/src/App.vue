<script setup lang="ts">
import AppSidebar from '@/components//layout/AppSideBar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
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
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>
