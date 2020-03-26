const CITIES_KEY = {
  'amsterdam': '249758',
  'budapest': '187423',
  'madrid': '308526'
}

const CITIES_CODE = {
  'amsterdam': 'AMS',
  'budapest': 'BUD',
  'madrid': 'MAD'
}

export const getCityKey = city => CITIES_KEY[city]

export const getCityCode = city => CITIES_CODE[city]
