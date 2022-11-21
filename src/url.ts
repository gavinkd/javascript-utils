/**
 * 获取 URL 查询参数
 * @param { string } url URL链接
 * @param { string } key 参数 Key
 * @return {string | null } 返回值或者null
 */
export function urlSearchParam(
  url: string = location?.search,
  key: string
): string | null {
  const urlSearchParams = new URLSearchParams(url)
  return urlSearchParams.get(key)
}
