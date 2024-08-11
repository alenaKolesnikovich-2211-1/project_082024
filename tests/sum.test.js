import { sum } from '../src/sum.js'

describe('sum function', () => {
  it('should return a sum of 2 and 5 is 7, pass', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
  })

  it('checks sum of 5 and 7 not 10, fail', () => {
    const result = sum(5, 7)
    expect(result).not.toBe(10)
  })
})

