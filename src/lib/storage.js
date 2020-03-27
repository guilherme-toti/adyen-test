const DEPARTURE_STORAGE_KEY = 'departure_code'
const OPTIONS_STORAGE_KEY = 'airports_options'

export const saveDepartureCode = departureCode => localStorage.setItem(DEPARTURE_STORAGE_KEY, departureCode)

export const getDepartureCode = () => localStorage.getItem(DEPARTURE_STORAGE_KEY)

export const saveAirportOptions = options => localStorage.setItem(OPTIONS_STORAGE_KEY, JSON.stringify(options))

export const getAirportOptions = () => JSON.parse(localStorage.getItem(OPTIONS_STORAGE_KEY)) || []
