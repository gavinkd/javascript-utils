import { typeUtils } from '../dist'

describe('typeUtils Test', () => {
  it('typeUtils.isStatic function', () => {
    expect(typeUtils.isStatic('true')).toBe(true)
    expect(typeUtils.isStatic(1)).toBe(true)
    expect(typeUtils.isStatic(true)).toBe(true)
    expect(typeUtils.isStatic(undefined)).toBe(true)
    expect(typeUtils.isStatic(null)).toBe(true)
    expect(typeUtils.isStatic(Symbol('111'))).toBe(false)
  })

  it('typeUtils.isStatic function', () => {
    expect(typeUtils.isNull('')).toBe(false)
    expect(typeUtils.isNull(undefined)).toBe(false)
    expect(typeUtils.isNull(null)).toBe(true)
  })

  it('typeUtils.isOriginalType function', () => {
    expect(typeUtils.isOriginalType('string')).toBe(true)
    expect(typeUtils.isOriginalType(10)).toBe(true)
    expect(typeUtils.isOriginalType(true)).toBe(true)
    expect(typeUtils.isOriginalType(null)).toBe(true)
    expect(typeUtils.isOriginalType(undefined)).toBe(true)
    expect(typeUtils.isOriginalType(new String('new String'))).toBe(false)
    expect(typeUtils.isOriginalType(new Number(1000))).toBe(false)
  })

  it('typeUtils.isPlainObject function', function () {
    expect(typeUtils.isPlainObject({})).toBe(true)
    expect(typeUtils.isPlainObject(String('111'))).toBe(false)
    expect(typeUtils.isPlainObject(Number(111))).toBe(false)
  })

  it('typeUtils.isArray function', function () {
    expect(typeUtils.isArray([])).toBe(true)
    expect(typeUtils.isArray(new Array(10))).toBe(true)
    expect(typeUtils.isArray('1')).toBe(false)
    expect(typeUtils.isArray(2)).toBe(false)
    expect(typeUtils.isArray({})).toBe(false)
    expect(typeUtils.isArray(true)).toBe(false)
    expect(typeUtils.isArray(null)).toBe(false)
    expect(typeUtils.isArray(undefined)).toBe(false)
    expect(typeUtils.isArray(Symbol('2123'))).toBe(false)
  })

  it('typeUtils.isRegExp function', function () {
    expect(typeUtils.isRegExp(new RegExp(/test/))).toBe(true)
  })

  it('typeUtils.isDate function', function () {
    expect(typeUtils.isDate(new Date())).toBe(true)
  })

  it('typeUtils.isFunction function', function () {
    expect(
      typeUtils.isFunction(function () {
        console.log(13212)
      })
    ).toBe(true)
  })

  it('typeUtils.isEmpty function', function () {
    expect(typeUtils.isEmpty(null)).toBe(true)

    expect(typeUtils.isEmpty({})).toBe(true)
    expect(typeUtils.isEmpty({name: 1})).toBe(false)

    expect(typeUtils.isEmpty({length: 0})).toBe(true)
    expect(typeUtils.isEmpty({length: 10})).toBe(false)
  })
})
