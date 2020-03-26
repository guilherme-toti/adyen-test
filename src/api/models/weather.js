export const Conditions = data => ({
  text: data.WeatherText,
  temperature: {
    unit: data.Temperature.Imperial.Unit,
    value: parseInt(data.Temperature.Imperial.Value)
  }
})

const getAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length

export const Forecast = data => {
  const minTemperature = data.DailyForecasts.map(d => d.Temperature.Minimum.Value)
  const maxTemperature = data.DailyForecasts.map(d => d.Temperature.Maximum.Value)

  return {
    averageTemperature: {
      min: {
        value: parseInt(getAverage(minTemperature)),
        unit: data.DailyForecasts[0].Temperature.Minimum.Unit
      },
      max: {
        value: parseInt(getAverage(maxTemperature)),
        unit: data.DailyForecasts[0].Temperature.Minimum.Unit
      }
    },
  }
}
