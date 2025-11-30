<script setup lang="ts">
import AppSidebar from '@/components//layout/AppSideBar.vue'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { onMounted } from 'vue'
import { weatherBackgroundSelector } from './helpers/weather-bg-selector'
import { useWeather } from './stores/weather'
import { storeToRefs } from 'pinia'

const store = useWeather()
const { weather } = storeToRefs(store)

onMounted(() => {
  getWeather()
})

async function getWeather() {
  try {
    const response = await fetch(`/api/weather?lat=${-22.9726012}&lon=${-43.1837901}`)
    const data = await response.json()
    store.setWeather(data)
    weather.value = data
  } catch (error) {
    console.error('Erro ao buscar clima:', error)
  }
}
</script>

<template>
  <SidebarProvider :style="{ '--sidebar-width': '25rem' }">
    <SidebarInset>
      <div
        :class="`w-full h-screen bg-no-repeat bg-cover`"
        :style="{
          backgroundImage: `url('${weatherBackgroundSelector(weather?.weather[0]?.icon ?? '')}')`,
        }"
      >
        <div class="w-full h-full flex flex-col">
          <header class="h-16 flex items-center gap-2 px-4">
            <span class="text-md font-bold"> weather.monitor </span>
            <SidebarTrigger class="-mr-1 ml-auto rotate-180" />
          </header>

          <div class="w-full h-full flex items-end p-16">
            <Card
              class="bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white shadow-lg/50"
            >
              <CardContent>
                <div class="flex items-center gap-6">
                  <span class="text-9xl font-medium text-white"
                    >{{ weather?.main.temp.toFixed(0) }}°</span
                  >
                  <div class="flex flex-col">
                    <span class="text-5xl font-medium text-white">{{ weather?.name }}</span>
                    <span class="text-md font-medium text-white">{{
                      new Date().toString().slice(0, 25)
                    }}</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <img
                      :src="`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`"
                    />
                    <span class="text-md font-medium text-white capitalize">{{
                      weather?.weather[0]?.description
                    }}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
    <AppSidebar />
  </SidebarProvider>
</template>
