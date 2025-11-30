<script setup lang="ts">
import AppSidebar from '@/components//layout/AppSideBar.vue'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { onMounted, ref } from 'vue'
import type { IWeather } from './models/weather'

const weather = ref<IWeather>()

onMounted(() => {
  getWeather()
})

async function getWeather() {
  try {
    const response = await fetch('/api/weather')
    const data = await response.json()
    weather.value = data
  } catch (error) {
    console.error('Erro ao buscar clima:', error)
  }
}
</script>

<template>
  <SidebarProvider :style="{ '--sidebar-width': '25rem' }">
    <SidebarInset>
      <div class="w-full h-screen">
        <div class="w-full h-full flex flex-col">
          <header class="h-16 flex items-center gap-2 px-4">
            <span class="text-md font-bold"> weather.monitor </span>
            <SidebarTrigger class="-mr-1 ml-auto rotate-180" />
          </header>

          <div class="w-full h-full flex items-end p-16">
            <div class="flex items-center gap-6">
              <span class="text-9xl font-medium">{{ weather?.main.temp.toFixed(0) }}°</span>
              <div class="flex flex-col">
                <span class="text-5xl font-medium">{{ weather?.name }}</span>
                <span class="text-md font-medium">{{ new Date().toString().slice(0, 25) }}</span>
              </div>
              <div class="flex flex-col items-center">
                <img :src="`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`"></img>
                <span class="text-md font-medium">{{ weather?.weather[0]?.main }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarInset>
    <AppSidebar />
  </SidebarProvider>
</template>
