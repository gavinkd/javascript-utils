/**
 * 手机号码格式化
 * @example telephoneFormat(13222220909) => 132****0909
 * @param value 手机号
 * @param start 起始位置，默认下标为3
 * @param slide 向后的位数，默认后4位
 * @param padding 填充物，默认为*
 * @returns {string}
 */
export function telephoneFormat(value: string, start: number = 3, slide: number = 4, padding: string = '*'): string {
  const startReg = '(\\d{' + start + '})'
  const paddingContent = new Array(slide > value.length ? value.length - start : slide).fill(padding).join('')
  let reg = ''
  let replaceValue = ''
  if (slide < value.length) {
    const end = slide > value.length ? value.length : value.length - start - slide
    reg = startReg + '\\d{' + slide + '}' + '(\\d{' + end + '})'
    replaceValue = `$1${paddingContent}$2`
  }
  if (slide >= value.length) {
    reg = startReg + '\\d{' + (value.length - start) + '}'
    replaceValue = `$1${paddingContent}`
  }
  return value.replace(new RegExp(reg), replaceValue)
}

/**
 * [_/./-]转驼峰命名
 * @param str
 * @returns {string}
 */
export function camelize(str: string) {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase()
  })
}
