/**
 * 是否是整数
 * @param value
 */
export function isInteger(value: any): boolean {
  return typeof value === 'number' && Math.floor(value) === value
}
