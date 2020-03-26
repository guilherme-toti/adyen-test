import { getCityKey, getCityCode } from '../cities'

describe('lib tests', () => {
  describe('getCityKey function', () => {
    it('returns the expected key for madrid', () => {
      expect(getCityKey('madrid')).toBe('308526')
    })

    it('returns the expected key for budapest', () => {
      expect(getCityKey('budapest')).toBe('187423')
    })
  })

  describe('getCityCode function', () => {
    it('returns the expected code for madrid', () => {
      expect(getCityCode('madrid')).toBe('MAD')
    })

    it('returns the expected code for budapest', () => {
      expect(getCityCode('budapest')).toBe('BUD')
    })
  })
})
