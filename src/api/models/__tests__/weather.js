import { Conditions, Forecast } from '../weather'

describe('Weather models', () => {
  describe('Conditions model', () => {
    it('returns the expected value', () => {
      const text = 'Partly cloudy'
      const unit = 'F'
      const value = 45.0

      const dataFromApi = {
        "WeatherText": text,
        "Temperature": {
            "Metric": {
                "Value": 7.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": value,
                "Unit": unit,
                "UnitType": 18
            }
        },
      }

      const expectedValue = {
        text,
        temperature: {
          unit,
          value: parseInt(value)
        }
      }

      expect(Conditions(dataFromApi)).toEqual(expectedValue)
    })
  })

  describe('Forecast model', () => {
    it('returns the expected value', () => {
      const unit = 'F'

      const dataFromApi = {
        "DailyForecasts": [
          {
            "Temperature": {
                "Minimum": {
                  "Value": 34.0,
                  "Unit": unit,
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 54.0,
                  "Unit": unit,
                  "UnitType": 18
                }
            },
          },
          {
            "Temperature": {
                "Minimum": {
                  "Value": 40.0,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 54.0,
                  "Unit": "F",
                  "UnitType": 18
                }
            },
          },
          {
            "Temperature": {
                "Minimum": {
                  "Value": 36.0,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 51.0,
                  "Unit": "F",
                  "UnitType": 18
                }
            },
          },
        ]
      }

      const expectedValue = {
        averageTemperature: {
          min: {
            unit,
            value: 36
          },
          max: {
            unit,
            value: 53
          }
        }
      }

      expect(Forecast(dataFromApi)).toEqual(expectedValue)
    })
  })
})
