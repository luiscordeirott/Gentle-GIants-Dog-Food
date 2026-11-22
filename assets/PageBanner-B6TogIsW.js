import { l as e, t } from "./utils-CTnPHf1g.js"
var n = e()
function r({ title: e, image: r, className: i, children: a }) {
  return (0, n.jsxs)(`section`, {
    className: t(`relative isolate overflow-hidden bg-teal-deep`, i),
    children: [
      r &&
        (0, n.jsx)(`img`, {
          src: r,
          alt: ``,
          className: `absolute inset-0 -z-20 size-full object-cover`,
        }),
      r &&
        (0, n.jsx)(`div`, {
          className: `absolute inset-0 -z-10 bg-teal-overlay`,
        }),
      (0, n.jsxs)(`div`, {
        className: `container-site relative flex h-full flex-col items-center justify-center py-16 text-center`,
        children: [
          (0, n.jsx)(`h1`, {
            className: `text-bubble text-6xl md:text-8xl`,
            children: e,
          }),
          a,
        ],
      }),
    ],
  })
}
export { r as t }
