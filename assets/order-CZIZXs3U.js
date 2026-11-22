var e = `gg-last-order`
function t(t) {
  window.sessionStorage.setItem(e, JSON.stringify(t))
}
function n() {
  try {
    let t = window.sessionStorage.getItem(e)
    return t ? JSON.parse(t) : null
  } catch {
    return null
  }
}
function r() {
  return `GG-${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 90 + 10)}`
}
export { n, t as r, r as t }
