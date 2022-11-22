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

  it('isArrayLength function', function() {
    expect(arrayUtils.isArrayLength(1)).toBe(true)
    expect(arrayUtils.isArrayLength([1])).toBe(false)
    expect(arrayUtils.isArrayLength(-1)).toBe(false)
    expect(arrayUtils.isArrayLength(0.01)).toBe(false)
    expect(arrayUtils.isArrayLength(9007199254740991 + 1000)).toBe(false)
  })

  it('isArrayLike function', function() {
    expect(arrayUtils.isArrayLike(() => {
      console.log(123)
    })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: 10 })).toBe(true)
    expect(arrayUtils.isArrayLike({ length: 0.1 })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: -1 })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: [1] })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: 9007199254740991 + 1000 })).toBe(false)
  })
})
