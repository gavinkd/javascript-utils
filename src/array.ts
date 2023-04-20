import { isInteger } from './number'
import { isFunction } from './type'

/**
 * 返回数组中的最大值
 * @param array
 */
export function arrayMax(array: number[]): number {
  return Math.max(...array)
}

/**
 * 返回数组中的最小值
 * @param array
 */
export function arrayMin(array: number[]): number {
  return Math.min(...array)
}

/**
 * 判断是否是有效的数组长度
 * 1，Number 类型、2 大于-1、3，是一个整数、4，小于Number.MAX_SAFE_INTEGER
 */
export function isArrayLength(value: any): boolean {
  return typeof value === 'number' && value > -1 && isInteger(value) && value <= Number.MAX_SAFE_INTEGER
}

/**
 * 是否是类数组
 * @description 1，不是一个function、2，有length属性、 3，length 属性满足 { isArrayLength }
 */
export function isArrayLike(value: any): boolean {
  return !isFunction(value) && isArrayLength(value?.length)
}

/**
 * 将数组划分为指定大小的数组块
 * @param value 源数组
 * @param size 大小块
 * @example
 */
export function chunk<T = any>(value: T[], size: number): T[][] {
  if (isArrayLength(size)) {
    return Array.from({ length: Math.ceil(value.length / size) }, (v, index) => value.slice(index * size, index * size + size))
  }
  return []
}

/**
 * 从数组中过滤false 值
 * 包括：null false 0 undefined "" '' NaN
 * @param value
 */
export function filterFake(value: any[]) {
  return value.filter(Boolean)
}

/**
 * 计算数组中指定值的出现次数
 * @param value
 * @param field
 */
export function count(value: number[], field: number) {
  return value.reduce((a, v) => (v === field ? a + 1 : a), 0)
}

/**
 * 找出两个数组中的差异
 * @param a
 * @param b
 */
export function difference(a: any[], b: any[]) {
  const set = new Set(a)
  return b.filter((x) => !set.has(x))
}

/**
 * 根据给定函数对数组元素进行分组
 * @param value
 * @param conditions
 */
function groupBy(value: string[], conditions?: "length"): { [key: string]: string };
function groupBy<T = any>(value:T[], conditions: (value: T, index: number) => string | number ): { [key: string]: string };
function groupBy(value: any[], conditions?: any): any {
  if(!conditions || conditions === 'length') {
    return value.map((item) => item["length"]).reduce((p, c, index) => {
      p[c] = (p[c] || []).concat([value[index]])
      return p
    }, {})
  }

  if(typeof conditions === 'function') {
    return value.map(conditions).reduce((p, c, index) => {
      // @ts-ignore
      p[c] = (p[c] || []).concat([value[index]])
      return p;
    }, {})
  }

}

export { groupBy }

/**
 * 返回数组的第一个元素
 * @example
 * head([1, 2, 3]); // => 1
 * head([]); // => undefined
 */
export function head<T = any>(value: T[]): T | undefined {
  return (value !== null && value.length) ? value[0] : undefined
}
