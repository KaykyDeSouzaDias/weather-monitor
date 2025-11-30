<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import { useWeather } from '@/stores/weather'
import { storeToRefs } from 'pinia'

const store = useWeather()
const { weather } = storeToRefs(store)

const items = [
  {
    title: 'Copacabana, Rio de Janeiro',
    latitude: -22.9726012,
    longitude: -43.1837901,
  },
  {
    title: 'San Francisco County, United States',
    latitude: 37.7576713,
    longitude: -122.5200012,
  },
  {
    title: 'Aigáleo, Grece',
    latitude: 37.99083,
    longitude: 23.6971397,
  },
  {
    title: 'Frederiksberg, Denmark',
    latitude: 55.6712398,
    longitude: 12.5114238,
  },
]

async function onChangeLocation(latitude: number, longitude: number) {
  try {
    const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`)
    const data = await response.json()
    store.setWeather(data)
  } catch (error) {
    console.error('Erro ao buscar clima:', error)
  }
}
</script>

<template>
  <Sidebar
    side="right"
    class="*:data-[sidebar=sidebar]:bg-zinc-900 *:data-[sidebar=sidebar]:text-white"
  >
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="text-xs font-medium text-white">Locations</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton
                as-child
                class="cursor-pointer"
                @click="() => onChangeLocation(item.latitude, item.longitude)"
              >
                <span>{{ item.title }}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <span class="text-lg font-medium text-white px-3 py-2"> Weather Details </span>
    <SidebarSeparator class="w-full m-0" />
    <SidebarFooter>
      <SidebarGroup>
        <SidebarGroupContent class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-md font-medium text-gray-400">Humidity</span>
            <span class="text-md font-medium text-white"
              >{{ weather?.main.humidity.toFixed(0) }}%</span
            >
          </div>
          <div class="flex items-center justify-between">
            <span class="text-md font-medium text-gray-400">Pressure</span>
            <span class="text-md font-medium text-white"
              >{{ weather?.main.pressure.toFixed(0) }}Pa</span
            >
          </div>
          <div class="flex items-center justify-between">
            <span class="text-md font-medium text-gray-400">Sea Level</span>
            <span class="text-md font-medium text-white"
              >{{ weather?.main.sea_level.toFixed(0) }}m</span
            >
          </div>
          <div class="flex items-center justify-between">
            <span class="text-md font-medium text-gray-400">Wind</span>
            <span class="text-md font-medium text-white"
              >{{ weather?.wind.speed.toFixed(0) }}km/h</span
            >
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarFooter>
  </Sidebar>
</template>
