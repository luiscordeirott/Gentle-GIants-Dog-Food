import { l as e, t } from "./utils-CTnPHf1g.js"
var n = e()
function r(e, t, n, r, i, a = 0, o = 1) {
  let s = [],
    c = o,
    l = () => ((c = (c * 9301 + 49297) % 233280), c / 233280)
  for (let o = 0; o < e * 2; o++) {
    let c = (Math.PI * o) / e - Math.PI / 2,
      u = o % 2 == 0,
      [d, f] = u ? r : i,
      p = u ? 1 + (l() - 0.5) * a : 1
    s.push(
      `${(t + Math.cos(c) * d * p).toFixed(1)},${(n + Math.sin(c) * f * p).toFixed(1)}`,
    )
  }
  return s.join(` `)
}
function i({ className: e }) {
  return (0, n.jsx)(`svg`, {
    viewBox: `0 0 200 200`,
    "aria-hidden": !0,
    className: t(`fill-sun`, e),
    children: (0, n.jsx)(`polygon`, {
      points: r(14, 100, 100, [100, 100], [46, 46], 0.08, 7),
    }),
  })
}
function a({ age: e, palette: i, className: a }) {
  let o = `arc-${e}-${i}`
  return (0, n.jsxs)(`svg`, {
    viewBox: `0 0 240 150`,
    role: `img`,
    "aria-label": `${e} years old`,
    className: t(i, `overflow-visible drop-shadow-md`, a),
    children: [
      (0, n.jsx)(`polygon`, {
        points: r(18, 120, 75, [118, 74], [92, 54], 0.22, e * 13),
        style: { fill: `var(--b-outer)` },
      }),
      (0, n.jsx)(`polygon`, {
        points: r(18, 120, 75, [104, 63], [84, 48], 0.18, e * 29 + 3),
        style: { fill: `var(--b-inner)` },
      }),
      (0, n.jsx)(`defs`, {
        children: (0, n.jsx)(`path`, { id: o, d: `M 52 104 Q 120 132 188 92` }),
      }),
      (0, n.jsx)(`text`, {
        x: `120`,
        y: `86`,
        textAnchor: `middle`,
        className: `font-display`,
        style: {
          fontSize: 62,
          fill: `var(--b-text)`,
          stroke: `var(--b-stroke)`,
          strokeWidth: 7,
          paintOrder: `stroke fill`,
          strokeLinejoin: `round`,
        },
        children: e,
      }),
      (0, n.jsx)(`text`, {
        className: `font-display`,
        style: {
          fontSize: 25,
          fill: `var(--b-text)`,
          stroke: `var(--b-stroke)`,
          strokeWidth: 5,
          paintOrder: `stroke fill`,
          strokeLinejoin: `round`,
        },
        children: (0, n.jsx)(`textPath`, {
          href: `#${o}`,
          startOffset: `50%`,
          textAnchor: `middle`,
          children: `YEARS OLD!`,
        }),
      }),
    ],
  })
}
export { i as n, a as t }
