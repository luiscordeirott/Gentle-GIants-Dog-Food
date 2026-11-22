import { l as e, t } from "./utils-CTnPHf1g.js"
var n = e()
function r({
  eyebrow: e,
  title: r,
  children: i,
  className: a,
  align: o = `center`,
}) {
  return (0, n.jsxs)(`div`, {
    className: t(o === `center` ? `mx-auto text-center` : ``, `max-w-2xl`, a),
    children: [
      e &&
        (0, n.jsx)(`p`, { className: `eyebrow mb-3 text-teal`, children: e }),
      (0, n.jsx)(`h2`, {
        className: `text-3xl font-bold text-navy md:text-4xl`,
        children: r,
      }),
      i &&
        (0, n.jsx)(`p`, {
          className: `mt-4 text-base text-muted-foreground`,
          children: i,
        }),
    ],
  })
}
export { r as t }
