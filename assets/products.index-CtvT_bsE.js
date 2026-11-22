import { l as e, r as t, t as n } from "./utils-CTnPHf1g.js"
import { t as r } from "./ProductCard-DCoIzTlK.js"
import { n as i, t as a } from "./products-DlwfxnYx.js"
import { t as o } from "./index-3VGh8kgk.js"
var s = e()
function c() {
  let { category: e = `all` } = o.useSearch(),
    c = i(e)
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)(`section`, {
        className: `relative overflow-hidden bg-teal-deep`,
        children: [
          (0, s.jsxs)(`div`, {
            className: `pointer-events-none absolute -left-16 bottom-[-26px] hidden w-[320px] -rotate-6 items-end lg:flex`,
            children: [
              (0, s.jsx)(`img`, {
                src: `/images/products/can-chicken-1.webp`,
                alt: ``,
                className: `w-28 drop-shadow-lg`,
              }),
              (0, s.jsx)(`img`, {
                src: `/images/products/can-beef-1.webp`,
                alt: ``,
                className: `-ml-6 w-32 drop-shadow-lg`,
              }),
              (0, s.jsx)(`img`, {
                src: `/images/products/can-salmon-1.webp`,
                alt: ``,
                className: `-ml-7 w-24 drop-shadow-lg`,
              }),
            ],
          }),
          (0, s.jsx)(`img`, {
            src: `/images/brand/bags-and-cans-hero.webp`,
            alt: ``,
            className: `pointer-events-none absolute -right-10 top-1/2 hidden w-[380px] -translate-y-1/2 rotate-3 rounded-2xl border-4 border-card/80 lg:block`,
          }),
          (0, s.jsxs)(`div`, {
            className: `container-site relative py-14 text-center md:py-16`,
            children: [
              (0, s.jsx)(`h1`, {
                className: `text-bubble text-6xl md:text-8xl`,
                children: `Products`,
              }),
              (0, s.jsx)(`p`, {
                className: `mt-4 text-teal-foreground/85`,
                children: `Clean, non-GMO nutrition for dogs and cats of every age.`,
              }),
            ],
          }),
        ],
      }),
      (0, s.jsx)(`section`, {
        className: `bg-teal-soft py-12 md:py-16`,
        children: (0, s.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, s.jsx)(`div`, {
              className: `flex flex-wrap justify-center gap-2`,
              role: `tablist`,
              "aria-label": `Filter products`,
              children: a.map((r) => {
                let i = r.id === e
                return (0, s.jsx)(
                  t,
                  {
                    to: `/products`,
                    search: r.id === `all` ? {} : { category: r.id },
                    role: `tab`,
                    "aria-selected": i,
                    className: n(
                      `rounded-full px-5 py-2 text-sm font-semibold transition-all`,
                      i
                        ? `bg-navy text-navy-foreground shadow-card`
                        : `bg-card text-navy hover:bg-cream`,
                    ),
                    children: r.label,
                  },
                  r.id,
                )
              }),
            }),
            (0, s.jsxs)(`p`, {
              className: `mt-6 text-center text-sm font-medium text-navy/70`,
              children: [
                c.length,
                ` `,
                c.length === 1 ? `product` : `products`,
              ],
            }),
            (0, s.jsx)(`div`, {
              className: `mx-auto mt-6 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3`,
              children: c.map((e) => (0, s.jsx)(r, { product: e }, e.slug)),
            }),
          ],
        }),
      }),
    ],
  })
}
export { c as component }
