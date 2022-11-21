function urlReplace(url: string): string {
  return url.indexOf("?") > -1 ? url.split("?")[1] : url
}

/**
 * 获取 URL 查询参数
 * @param { string } url Url 链接
 * @param { string } key 参数 Key
 * @return {string | null } 返回值或者null
 */
export function urlSearchParam(
  url: string = location?.search,
  key: string
): string | null {
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
  const urlSearchParams = new URLSearchParams(url);
  const result = {} as { [key: string]: any };

  for (const key of urlSearchParams.keys()) {
    result[key] = urlSearchParams.get(key)
  }

  return result;
}
