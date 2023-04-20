/**
 * 平滑滚动到页面顶部
 */
export function scrollToTop() {
  const top = document.documentElement.scrollTop || document.body.scrollTop
  if(!window.requestAnimationFrame) {
    window.requestAnimationFrame =  function(callback) {
      return setTimeout(callback, 20)
    }
  }
  if (top > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, top - top / 8)
  }
}
