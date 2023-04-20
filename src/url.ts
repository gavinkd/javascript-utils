import { URLSearchParams } from 'url'
import { getRuntimeEnv } from './env'

function urlReplace(url: string): string {
  return url.indexOf('?') > -1 ? url.split('?')[1] : url
}

/**
 * 获取 URL 查询参数
 * @param { string } url Url 链接
 * @param { string } key 参数 Key
 * @return {string | null } 返回值或者null
 */
export function urlSearchParam(url: string = location?.search, key: string): string | null {
  url = urlReplace(url)
  const urlSearchParams = new URLSearchParams(url)
  return urlSearchParams.get(key)
}

/**
 * 解析url query
 * @param url Url 链接
 */
export function parseUrlParams(url: string = location?.search): { [key: string]: any } {
  url = urlReplace(url)
  const urlSearchParams = new URLSearchParams(url)
  const result = {} as { [key: string]: any }

  for (const key of urlSearchParams.keys()) {
    result[key] = urlSearchParams.get(key)
  }

  return result
}

/**
 * 将对象转换成编码后的 url 字符串
 * @param {*} data
 * @param {*} isPrefix
 */
export function stringify(data: any, isPrefix?: boolean) {
  const env = getRuntimeEnv()
  let prefix = isPrefix ? '?' : ''
  if (env.node) {
    const searchParams = new global.URLSearchParams(data)
    return prefix + searchParams.toString()
  }

  if (env.window && window?.URLSearchParams) {
    const searchParams = new window.URLSearchParams(data)
    return prefix + searchParams.toString()
  }
  let _result = []
  for (let key in data) {
    let value = data[key]
    if (['', undefined, null].includes(value)) {
      continue
    }
    if (value.constructor === Array) {
      value.forEach((_value) => {
        _result.push(encodeURIComponent(key) + '[]=' + encodeURIComponent(_value))
      })
    } else {
      _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
    }
  }
  return _result.length ? prefix + _result.join('&') : ''
}

/**
 * 将 url 字符串转换为对象
 * @param {*} data
 * @param {*} isPrefix
 */
export function parse(str: string): { [key: string]: any } {
  const searchParams = new URLSearchParams(str)
  const queryObj: { [key: string]: string } = {}
  for (const [key, value] of searchParams.entries()) {
    queryObj[key] = value
  }

  return queryObj
}
