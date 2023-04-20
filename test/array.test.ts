import { arrayUtils } from '../src'

describe('array utils', () => {
  it('arrayMax function', function () {
    expect(arrayUtils.arrayMax([1, 3, 4, 90])).toBe(90)
    expect(arrayUtils.arrayMax([1, 3, 4, 90, 100])).not.toBe(90)
  })

  it('arrayMin function', function () {
    expect(arrayUtils.arrayMin([1, 3, 4, 90])).toBe(1)
    expect(arrayUtils.arrayMin([1, 3, 4, 90, 100])).not.toBe(3)
  })

  it('isArrayLength function', function () {
    expect(arrayUtils.isArrayLength(1)).toBe(true)
    expect(arrayUtils.isArrayLength([1])).toBe(false)
    expect(arrayUtils.isArrayLength(-1)).toBe(false)
    expect(arrayUtils.isArrayLength(0.01)).toBe(false)
    expect(arrayUtils.isArrayLength(9007199254740991 + 1000)).toBe(false)
  })

  it('isArrayLike function', function () {
    expect(
      arrayUtils.isArrayLike(() => {
        console.log(123)
      })
    ).toBe(false)
    expect(arrayUtils.isArrayLike({ length: 10 })).toBe(true)
    expect(arrayUtils.isArrayLike({ length: 0.1 })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: -1 })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: [1] })).toBe(false)
    expect(arrayUtils.isArrayLike({ length: 9007199254740991 + 1000 })).toBe(false)
  })

  it('chunk function', function () {
    expect(arrayUtils.chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]])
    expect(arrayUtils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(arrayUtils.chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
    expect(arrayUtils.chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]])
    expect(arrayUtils.chunk([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]])
  })

  it('count function', () => {
    expect(arrayUtils.count([1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 5, 6, 6, 8, 8, 8], 5)).toBe(1)
  })

  it('difference function', () => {
    expect(arrayUtils.difference([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7])).toEqual([5, 6, 7])
  })

  it('groupBy function', () => {
    expect(arrayUtils.groupBy(['one', 'two', 'three'])).toEqual({ 3: ['one', 'two'], '5': ['three'] })
    expect(arrayUtils.groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], '5': ['three'] })
    expect(arrayUtils.groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: [4.2], 6: [6.1, 6.3] })
    expect(
      arrayUtils.groupBy<{ name: string; id: number }>(
        [
          { id: 1, name: '---' },
          { id: 1, name: '--' },
          { id: 2, name: 'xxx' },
          { id: 2, name: 'xx' },
        ],
        (value) => value.id
      )
    ).toEqual({
      '1': [ { id: 1, name: '---' }, { id: 1, name: '--' } ],
      '2': [ { id: 2, name: 'xxx' }, { id: 2, name: 'xx' } ]
    })
  })
})
