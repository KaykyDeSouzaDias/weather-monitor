<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-vue-next'
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
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]
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
              <SidebarMenuButton as-child>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
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
