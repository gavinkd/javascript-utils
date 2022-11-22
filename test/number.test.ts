import { numberUtils } from '../dist'

describe("number test", () => {
  it("isInteger function", () => {
    expect(numberUtils.isInteger(10)).toBe(true)
    expect(numberUtils.isInteger('10')).toBe(false)
    // 10.0 === 10 😁
    expect(numberUtils.isInteger(10.0)).toBe(true)
    expect(numberUtils.isInteger(10.22)).toBe(false)
    expect(numberUtils.isInteger(0.0001022)).toBe(false)
  })
})
