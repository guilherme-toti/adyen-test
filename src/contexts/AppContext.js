import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
  useCallback
} from 'react'
import Papa from 'papaparse'

import {
  saveDepartureCode,
  getDepartureCode,
  saveAirportOptions,
  getAirportOptions
} from '../lib/storage'

const AirportsListFile = require('../lib/airports.csv')
const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [departureCode, setDepartureCode] = useState(getDepartureCode())
  const [airports, setAirports] = useState([])
  const [options, setOptions] = useState(getAirportOptions())

  useEffect(() => {
    Papa.parse(AirportsListFile, {
      download: true,
      header: true,
      complete: res => {
        const fixedAirports = res.data
          .filter(r => !!r.city && r.iata !== '\\N')
          .map(({ iata, name, city }) => ({
            code: iata,
            name,
            city
          }))
        setAirports(fixedAirports)
      }
    });
  }, [])

  const filterAirports = useCallback(text => {
    const filteredAirports = airports.filter(a => a.city.toLowerCase().startsWith(text.toLowerCase()))

    if (filteredAirports.length > 0) {
      setOptions(filteredAirports)
      saveAirportOptions(filteredAirports)
    }
  }, [airports])

  const handleSetDepartureCode = useCallback(code => {
    saveDepartureCode(code)
    setDepartureCode(code)
  }, [setDepartureCode])

  const value = useMemo(() => {
    return {
      departureCode,
      setDepartureCode: handleSetDepartureCode,
      options,
      filterAirports
    }
  }, [departureCode, options, filterAirports, handleSetDepartureCode])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export { AppContextProvider, useAppContext }
