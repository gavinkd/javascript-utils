/**
 * 检测数据是不是除了symbol外的原始数据
 * @param value { any }
 * @return {boolean}
 */
import { isArrayLike } from './array'

export function isStatic(value: any): boolean {
  return  typeof value === "string" || typeof value === 'number' || typeof value === "boolean" || typeof value === "undefined" || value === null
}

/**
 * 检测数据是不是 null
 * 所有原始类型都可以使用 typeof 运算符测试。
 * 但是 typeof null 返回 "object"，因此必须使用 === null 来测试 null
 * @param value { any }
 * @return { boolean }
 */
export function isNull(value: any): boolean {
  return value === null
}

/**
 * 检测数据是不是原始数据
 * @param value
 * @return { boolean }
 */
export function isOriginalType(value: any): boolean {
  return isStatic(value) || typeof value === "symbol"
}

/**
 * 判断数据是不是Object类型的数据
 * @param value
 */
export function isPlainObject(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 判断数据是不是Array类型的数据
 * @param value
 */
export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Array]"
}

/**
 * 判断数据是不是正则对象
 * @param value
 */
export function isRegExp(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object RegExp]"
}

/**
 * 判断数据是不是Date对象
 * @param value
 */
export function isDate(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Date]"
}

/**
 * 判断数据是否是函数
 * @param value
 */
export function isFunction(value: any): boolean {
  return  Object.prototype.toString.call(value) === "[object Function]"
}

/**
 * 判断数据是不是浏览器内置函数
 * @param value {any}
 */
export function isNativeCode(value: any) {
  return isFunction(value) && /native code/.test(value.toString())
}

/**
 * 检查类型是否为空
 * @param value {any}
 */
export function isEmpty(value: any): boolean {
  if(isNull(value)) return true;
  if(isArrayLike(value)) return !value.length;
  return isPlainObject(value) && Object.keys(value).length === 0;
}
