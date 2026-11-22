import { l as e } from "./utils-CTnPHf1g.js"
import { t } from "./createLucideIcon-DIG6HcwS.js"
import { t as n } from "./leaf-Hf_9wiRl.js"
var r = t(`bone`, [
    [
      `path`,
      {
        d: `M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z`,
        key: `w610uw`,
      },
    ],
  ]),
  i = t(`droplets`, [
    [
      `path`,
      {
        d: `M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z`,
        key: `1ptgy4`,
      },
    ],
    [
      `path`,
      {
        d: `M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97`,
        key: `1sl1rz`,
      },
    ],
  ]),
  a = t(`heart-pulse`, [
    [
      `path`,
      {
        d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
        key: `mvr1a0`,
      },
    ],
    [`path`, { d: `M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`, key: `auskq0` }],
  ]),
  o = t(`sparkles`, [
    [
      `path`,
      {
        d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
        key: `1s2grr`,
      },
    ],
    [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
    [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
    [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
  ]),
  s = t(`sprout`, [
    [
      `path`,
      {
        d: `M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3`,
        key: `139s4v`,
      },
    ],
    [`path`, { d: `M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4`, key: `1dlkgp` }],
    [`path`, { d: `M5 21h14`, key: `11awu3` }],
  ]),
  c = t(`users`, [
    [`path`, { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` }],
    [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
    [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
    [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
  ]),
  l = e(),
  u = {
    leaf: n,
    heart: a,
    sprout: s,
    bone: r,
    sparkles: o,
    users: c,
    droplets: i,
  }
function d({ name: e, className: t }) {
  let r = u[e] ?? n
  return (0, l.jsx)(r, { className: t, "aria-hidden": !0 })
}
export { d as t }
