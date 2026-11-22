import { I as e, P as t, l as n } from "./utils-CTnPHf1g.js"
import { t as r } from "./createLucideIcon-DIG6HcwS.js"
var i = r(`eye-off`, [
    [
      `path`,
      {
        d: `M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,
        key: `ct8e1f`,
      },
    ],
    [`path`, { d: `M14.084 14.158a3 3 0 0 1-4.242-4.242`, key: `151rxh` }],
    [
      `path`,
      {
        d: `M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,
        key: `13bj9a`,
      },
    ],
    [`path`, { d: `m2 2 20 20`, key: `1ooewy` }],
  ]),
  a = r(`eye`, [
    [
      `path`,
      {
        d: `M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,
        key: `1nclc0`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  o = e(t(), 1),
  s = n(),
  c = `h-16 w-full rounded-2xl border border-input bg-field px-5 text-base text-navy placeholder:text-navy/50 transition-colors focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15 aria-[invalid=true]:border-destructive`
function l({ title: e, width: t = `max-w-xl`, children: n }) {
  return (0, s.jsx)(`section`, {
    className: `bg-cream py-12 md:py-16`,
    children: (0, s.jsxs)(`div`, {
      className: `container-site ${t}`,
      children: [
        (0, s.jsx)(`h1`, {
          className: `text-center text-4xl font-bold text-navy md:text-5xl`,
          children: e,
        }),
        (0, s.jsx)(`div`, { className: `mt-10`, children: n }),
      ],
    }),
  })
}
function u({ id: e, label: t, error: n, ...r }) {
  return (0, s.jsxs)(`div`, {
    className: `flex flex-col gap-2`,
    children: [
      (0, s.jsx)(`label`, {
        htmlFor: e,
        className: `text-base font-bold text-navy`,
        children: t,
      }),
      (0, s.jsx)(`input`, {
        id: e,
        "aria-invalid": n ? !0 : void 0,
        className: c,
        ...r,
      }),
      n &&
        (0, s.jsx)(`p`, {
          className: `pl-2 text-xs font-medium text-destructive`,
          children: n,
        }),
    ],
  })
}
function d({ id: e, label: t, error: n, ...r }) {
  let [l, u] = (0, o.useState)(!1)
  return (0, s.jsxs)(`div`, {
    className: `flex flex-col gap-2`,
    children: [
      (0, s.jsx)(`label`, {
        htmlFor: e,
        className: `text-base font-bold text-navy`,
        children: t,
      }),
      (0, s.jsxs)(`div`, {
        className: `relative`,
        children: [
          (0, s.jsx)(`input`, {
            id: e,
            type: l ? `text` : `password`,
            "aria-invalid": n ? !0 : void 0,
            className: `${c} pr-16`,
            ...r,
          }),
          (0, s.jsx)(`button`, {
            type: `button`,
            onClick: () => u((e) => !e),
            className: `absolute right-0 top-1/2 flex h-10 -translate-y-1/2 items-center border-l border-input px-5 text-navy/60 hover:text-navy`,
            "aria-label": l ? `Hide password` : `Show password`,
            children: l
              ? (0, s.jsx)(i, { className: `size-4` })
              : (0, s.jsx)(a, { className: `size-4` }),
          }),
        ],
      }),
      n &&
        (0, s.jsx)(`p`, {
          className: `pl-2 text-xs font-medium text-destructive`,
          children: n,
        }),
    ],
  })
}
export { u as n, l as r, d as t }
