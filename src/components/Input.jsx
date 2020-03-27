import React, { useState, useEffect, useCallback } from 'react'

import { useAppContext } from '../contexts/AppContext'

const Input = () => {
  const {
    departureCode,
    setDepartureCode,
    options,
    filterAirports
  } = useAppContext()
  const [value, setValue] = useState('')
  const [step, setStep] = useState(departureCode ? 'select' : 'input')

  const handleSearch = useCallback(() => {
    if (!value) {
      return
    }

    filterAirports(value)
  }, [value, filterAirports])

  useEffect(() => {
    if (options.length > 0) {
      setStep('select')
    }
  }, [options])

  return (
    <div className="flex items-center w-full bg-gray-200 border border-gray-200 rounded leading-tight py-2">
      {step === 'input' ? (
        <>
          <input
            type="text"
            placeholder="e.g: Sao Paulo"
            value={value}
            onKeyUp={e => e.keyCode === 13 && handleSearch()}
            onChange={e => setValue(e.target.value)}
            className="appearance-none bg-transparent block w-full text-gray-700 py-3 px-2 leading-tight"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="flex-shrink-0 border-transparent border-4 text-gray-700 hover:text-orange-400 text-sm py-1 px-2 rounded"
          >
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
            </svg>
          </button>
        </>
      ) : (
        <>
          <div>
            <select
              value={departureCode || ''}
              onChange={e => setDepartureCode(e.target.value)}
              className="block appearance-none bg-transparent w-full text-gray-700 py-3 px-2 leading-tight"
            >
              <option value="">Choose an airport</option>
              {options.map(airport => (
                <option
                  key={airport.code}
                  value={airport.code}
                >
                  {`(${airport.code}) ${airport.name}`}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setStep('input')}
            className="flex-shrink-0 border-transparent border-4 text-gray-700 hover:text-orange-400 text-sm py-1 px-2 rounded"
          >
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>
            </svg>
          </button>
        </>
      )}

    </div>
  )
}

export default Input;
