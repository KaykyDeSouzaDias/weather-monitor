export function weatherBackgroundSelector(weather: string) {
  switch (weather) {
    case '01d':
    case '01n':
      return '/weather-background/clear-sky.jpg'
    case '02d':
    case '02n':
      return '/weather-background/few-clouds.jpg'
    case '03d':
    case '03n':
      return '/weather-background/scattered-clouds.jpg'
    case '04d':
    case '04n':
      return '/weather-background/broken-clouds.jpg'
    case '09d':
    case '09n':
      return '/weather-background/shower-rain.jpg'
    case '10d':
    case '10n':
      return '/weather-background/rain.jpg'
    case '11d':
    case '11n':
      return '/weather-background/thunderstorm.jpg'
    case '13d':
    case '13n':
      return '/weather-background/snow.jpg'
    case '50d':
    case '50n':
      return '/weather-background/mist.jpg'

    default:
      return ''
  }
}
