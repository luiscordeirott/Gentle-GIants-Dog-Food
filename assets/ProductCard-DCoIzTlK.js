import { l as e, r as t, t as n } from "./utils-CTnPHf1g.js"
import { n as r } from "./dist-DcKsCcPt.js"
import { t as i } from "./createLucideIcon-DIG6HcwS.js"
import { r as a, s as o } from "./products-DlwfxnYx.js"
import { m as s, v as c } from "./index-3VGh8kgk.js"
import { n as l } from "./Starburst-X_oWG3DN.js"
var u = i(`cat`, [
    [
      `path`,
      {
        d: `M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z`,
        key: `x6xyqk`,
      },
    ],
    [`path`, { d: `M8 14v.5`, key: `1nzgdb` }],
    [`path`, { d: `M16 14v.5`, key: `1lajdz` }],
    [`path`, { d: `M11.25 16.25h1.5L12 17l-.75-.75Z`, key: `12kq1m` }],
  ]),
  d = i(`dog`, [
    [`path`, { d: `M11.25 16.25h1.5L12 17z`, key: `w7jh35` }],
    [`path`, { d: `M16 14v.5`, key: `1lajdz` }],
    [
      `path`,
      {
        d: `M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309`,
        key: `u7s9ue`,
      },
    ],
    [`path`, { d: `M8 14v.5`, key: `1nzgdb` }],
    [
      `path`,
      {
        d: `M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5`,
        key: `v8hric`,
      },
    ],
  ]),
  f = e()
function p({ product: e, className: i }) {
  let { add: p, setOpen: m } = s(),
    h = e.variants[0],
    g = e.species === `cat` ? u : d,
    _ = e.variants.length === 1
  return (0, f.jsxs)(`article`, {
    className: n(
      `group relative flex flex-col overflow-hidden rounded-2xl bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop`,
      i,
    ),
    children: [
      (0, f.jsx)(`div`, {
        className: `absolute left-3 top-3 z-10 grid size-9 place-items-center rounded-lg bg-muted text-navy`,
        children: (0, f.jsx)(g, {
          className: `size-5`,
          "aria-label": e.species === `cat` ? `Cat food` : `Dog food`,
        }),
      }),
      e.badge &&
        (0, f.jsx)(`span`, {
          className: `absolute right-3 top-3 z-10 rounded-full bg-heart px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-destructive-foreground`,
          children: e.badge,
        }),
      (0, f.jsxs)(t, {
        to: `/products/$slug`,
        params: { slug: e.slug },
        className: `relative mx-auto block aspect-square w-full max-w-60`,
        children: [
          (0, f.jsx)(l, {
            className: `absolute inset-2 transition-transform duration-700 group-hover:rotate-12`,
          }),
          h &&
            (0, f.jsx)(`img`, {
              src: h.images[0],
              alt: e.name,
              loading: `lazy`,
              className: `absolute inset-[9%] size-[82%] object-contain transition-transform duration-300 group-hover:scale-105`,
            }),
        ],
      }),
      (0, f.jsxs)(`div`, {
        className: `mt-3 flex flex-1 flex-col`,
        children: [
          (0, f.jsx)(`p`, {
            className: `text-xs font-medium text-muted-foreground`,
            children: e.variants.map((e) => e.label).join(` · `),
          }),
          (0, f.jsx)(`h3`, {
            className: `mt-1 text-[15px] font-semibold leading-snug text-navy`,
            children: (0, f.jsx)(t, {
              to: `/products/$slug`,
              params: { slug: e.slug },
              className: `hover:underline`,
              children: e.name,
            }),
          }),
          (0, f.jsxs)(`div`, {
            className: `mt-auto flex items-center justify-between pt-3`,
            children: [
              (0, f.jsx)(`span`, {
                className: `font-bold text-navy`,
                children: o(e),
              }),
              _ && h
                ? (0, f.jsx)(`button`, {
                    type: `button`,
                    onClick: () => {
                      ;(p({
                        slug: e.slug,
                        variantId: h.id,
                        subscribe: !1,
                        frequencyWeeks: 4,
                      }),
                        r.success(`Added to cart`, {
                          description: `${e.name} · ${a(h.price)}`,
                        }),
                        m(!0))
                    },
                    className: `grid size-9 place-items-center rounded-full bg-sky text-sky-foreground transition-transform hover:scale-110`,
                    "aria-label": `Add ${e.name} to cart`,
                    children: (0, f.jsx)(c, { className: `size-5` }),
                  })
                : (0, f.jsx)(t, {
                    to: `/products/$slug`,
                    params: { slug: e.slug },
                    className: `rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground hover:bg-teal-soft`,
                    children: `Choose size`,
                  }),
            ],
          }),
        ],
      }),
    ],
  })
}
export { d as n, u as r, p as t }
