import type { IWeather } from '@/models/weather'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeather = defineStore('weather', () => {
  const weather = ref<IWeather>()

  function setWeather(value: IWeather) {
    weather.value = value
  }

  return { weather, setWeather }
})
