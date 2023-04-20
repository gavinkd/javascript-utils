/**
 * 获取Js当前的运行环境
 */
export function getRuntimeEnv() {
  const isNode = typeof global !== 'undefined' && process.versions != null && process.versions.node != null
  const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined'
  const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone/i.test(navigator.userAgent)

  let inWeex = isBrowser && typeof window?.wx !== 'undefined'

  let weexPlatform = inWeex && window?.wx.WXEnvironment.platform.toLowerCase()

  //浏览器 UA 判断
  let UA = isBrowser && window.navigator.userAgent.toLowerCase()
  let isIE = UA && /msie|trident/.test(UA)
  let isIE9 = UA && UA.indexOf('msie 9.0') > 0
  let isEdge = UA && UA.indexOf('edge/') > 0
  let isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'
  let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'
  let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

  return {
    node: isNode,
    window: isBrowser,
    wx: inWeex,
    mac: isMac,
    chrome: isChrome,
    ie: isIE,
    ie9: isIE9,
    edge: isEdge,
    android: isAndroid,
    ios: isIOS,
  }
}
