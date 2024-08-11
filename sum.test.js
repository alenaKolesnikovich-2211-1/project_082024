import { sum } from sum.js

describe(`sum`, () => {
  it('checks sum of 10 and 12 is 22, pass', () => {
    expect(sum(10, 12)).toBe(22);
  })
  it('checks that sum of 4 and 5 not 1, fails', () => {
    expect(sum(4, 5)).not.toBe(1);
  })
})
