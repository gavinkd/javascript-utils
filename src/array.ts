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
