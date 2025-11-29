<script setup lang="ts">
import AppSidebar from '@/components//layout/AppSideBar.vue'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
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
  <SidebarProvider :style="{ '--sidebar-width': '25rem' }">
    <SidebarInset>
      <div class="w-full h-screen">
        <header class="flex w-full h-16 items-center gap-2 px-4">
          <span class="text-md font-bold"> weather.monitor </span>
          <SidebarTrigger class="-mr-1 ml-auto rotate-180" />
        </header>

        <div class="w-full h-full flex flex-col bg-green-500"></div>
      </div>
    </SidebarInset>
    <AppSidebar />
  </SidebarProvider>
</template>
