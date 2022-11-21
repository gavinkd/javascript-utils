import { arrayUtils } from '../dist'

describe("array utils", () => {
  it('arrayMax function', function() {
    expect(arrayUtils.arrayMax([1,3,4,90])).toBe(90)
    expect(arrayUtils.arrayMax([1,3,4,90,100])).not.toBe(90)
  })

  it('arrayMin function', function() {
    expect(arrayUtils.arrayMin([1,3,4,90])).toBe(1)
    expect(arrayUtils.arrayMin([1,3,4,90,100])).not.toBe(3)
  })
})
