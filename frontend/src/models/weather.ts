export interface IWeather {
  name: string
  weather: IWeatherDetails[]
  main: IWeatherMainContent
  wind: IWeatherWind
  sys: IWeatherCountry
}

interface IWeatherDetails {
  id: number
  main: string
  description: string
  icon: string
}

interface IWeatherMainContent {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

interface IWeatherWind {
  speed: number
  deg: number
  gust: number
}

interface IWeatherCountry {
  country: string
}
