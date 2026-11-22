import { I as e, P as t, l as n, r } from "./utils-CTnPHf1g.js"
import { t as i } from "./createLucideIcon-DIG6HcwS.js"
import { t as a } from "./button-CuKnxT8Q.js"
import { a as o, i as s, r as c } from "./products-DlwfxnYx.js"
import { h as l } from "./index-3VGh8kgk.js"
import { n as u } from "./order-CZIZXs3U.js"
var d = i(`circle-check`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  f = i(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  p = i(`package`, [
    [
      `path`,
      {
        d: `M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,
        key: `1a0edw`,
      },
    ],
    [`path`, { d: `M12 22V12`, key: `d0xqtd` }],
    [`polyline`, { points: `3.29 7 12 12 20.71 7`, key: `ousv84` }],
    [`path`, { d: `m7.5 4.27 9 5.15`, key: `1c824w` }],
  ]),
  m = e(t()),
  h = n()
function g() {
  let [e, t] = (0, m.useState)(void 0)
  return (
    (0, m.useEffect)(() => t(u()), []),
    e === void 0
      ? (0, h.jsx)(`div`, { className: `min-h-[60vh]` })
      : e
        ? (0, h.jsx)(`div`, {
            className: `bg-cream py-14 md:py-20`,
            children: (0, h.jsx)(`div`, {
              className: `container-site max-w-3xl`,
              children: (0, h.jsxs)(`div`, {
                className: `relative rounded-3xl bg-card p-8 text-center shadow-card md:p-12`,
                children: [
                  (0, h.jsx)(d, { className: `mx-auto size-14 text-success` }),
                  (0, h.jsxs)(`p`, {
                    className: `eyebrow mt-5 text-teal`,
                    children: [`Order `, e.number],
                  }),
                  (0, h.jsxs)(`h1`, {
                    className: `mt-2 text-3xl font-bold text-navy md:text-4xl`,
                    children: [`Thank you, `, e.firstName, `!`],
                  }),
                  (0, h.jsxs)(`p`, {
                    className: `mx-auto mt-3 max-w-md text-muted-foreground`,
                    children: [
                      `Your order is confirmed. A receipt is on its way to `,
                      (0, h.jsx)(`strong`, {
                        className: `text-navy`,
                        children: e.email,
                      }),
                      `.`,
                    ],
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `mt-8 grid gap-4 text-left sm:grid-cols-3`,
                    children: [
                      (0, h.jsx)(_, {
                        icon: (0, h.jsx)(f, { className: `size-5` }),
                        title: `Confirmation`,
                        body: `Receipt sent by email`,
                      }),
                      (0, h.jsx)(_, {
                        icon: (0, h.jsx)(p, { className: `size-5` }),
                        title: `Packing`,
                        body: `Ships within 1 business day`,
                      }),
                      (0, h.jsx)(_, {
                        icon: (0, h.jsx)(l, { className: `size-5` }),
                        title:
                          e.shippingMethod === `express`
                            ? `Express delivery`
                            : `Delivery`,
                        body: e.arrival
                          ? `Arrives ${e.arrival}`
                          : `On its way soon`,
                      }),
                    ],
                  }),
                  (0, h.jsx)(`ul`, {
                    className: `mt-8 divide-y border-y text-left`,
                    children: e.lines.map((e) => {
                      let t = s(e.slug),
                        n = t ? o(t, e.variantId) : void 0
                      return !t || !n
                        ? null
                        : (0, h.jsxs)(
                            `li`,
                            {
                              className: `flex items-center gap-4 py-3`,
                              children: [
                                (0, h.jsx)(`img`, {
                                  src: n.images[0],
                                  alt: ``,
                                  className: `size-14 rounded-lg object-contain`,
                                }),
                                (0, h.jsxs)(`div`, {
                                  className: `flex-1`,
                                  children: [
                                    (0, h.jsx)(`p`, {
                                      className: `text-sm font-semibold text-navy`,
                                      children: t.name,
                                    }),
                                    (0, h.jsxs)(`p`, {
                                      className: `text-xs text-muted-foreground`,
                                      children: [
                                        n.label,
                                        ` · Qty `,
                                        e.qty,
                                        e.subscribe &&
                                          ` · Autoship every ${e.frequencyWeeks} weeks`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `${e.slug}-${e.variantId}-${e.subscribe}`,
                          )
                    }),
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `mt-4 flex justify-between text-lg font-bold text-navy`,
                    children: [
                      (0, h.jsx)(`span`, { children: `Order total` }),
                      (0, h.jsx)(`span`, { children: c(e.totals.total) }),
                    ],
                  }),
                  (0, h.jsxs)(`p`, {
                    className: `mt-2 text-left text-xs text-muted-foreground`,
                    children: [`Delivering to `, e.address],
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `mt-10 flex flex-wrap justify-center gap-3`,
                    children: [
                      (0, h.jsx)(a, {
                        asChild: !0,
                        variant: `sky`,
                        size: `xl`,
                        children: (0, h.jsx)(r, {
                          to: `/products`,
                          children: `Keep shopping`,
                        }),
                      }),
                      (0, h.jsx)(a, {
                        asChild: !0,
                        variant: `soft`,
                        size: `xl`,
                        children: (0, h.jsx)(r, {
                          to: `/register`,
                          children: `Create an account to track orders`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        : (0, h.jsxs)(`div`, {
            className: `container-site py-32 text-center`,
            children: [
              (0, h.jsx)(`h1`, {
                className: `text-3xl font-bold text-navy`,
                children: `No recent order found`,
              }),
              (0, h.jsx)(a, {
                asChild: !0,
                variant: `sky`,
                size: `xl`,
                className: `mt-8`,
                children: (0, h.jsx)(r, {
                  to: `/products`,
                  children: `Shop products`,
                }),
              }),
            ],
          })
  )
}
function _({ icon: e, title: t, body: n }) {
  return (0, h.jsxs)(`div`, {
    className: `rounded-2xl bg-accent p-4`,
    children: [
      (0, h.jsx)(`span`, { className: `text-teal`, children: e }),
      (0, h.jsx)(`p`, {
        className: `mt-2 text-sm font-bold text-navy`,
        children: t,
      }),
      (0, h.jsx)(`p`, { className: `text-xs text-navy/75`, children: n }),
    ],
  })
}
export { g as component }
