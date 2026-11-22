import { l as e, r as t } from "./utils-CTnPHf1g.js"
import { t as n } from "./createLucideIcon-DIG6HcwS.js"
import { t as r } from "./quote-BGeQbDNz.js"
import { t as i } from "./button-CuKnxT8Q.js"
import { a, c as o } from "./index-3VGh8kgk.js"
import { t as s } from "./PageBanner-B6TogIsW.js"
import { t as c } from "./SectionHeading-mwC7hKnT.js"
import { t as l } from "./Starburst-X_oWG3DN.js"
var u = n(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  d = e()
function f() {
  return (0, d.jsxs)(d.Fragment, {
    children: [
      (0, d.jsx)(s, {
        title: `Community`,
        image: `/images/gallery-rescue.webp`,
        className: `min-h-[360px]`,
        children: (0, d.jsx)(`p`, {
          className: `mt-4 max-w-xl text-lg text-teal-foreground/90`,
          children: `Real pet parents. Real birthdays. More years together.`,
        }),
      }),
      (0, d.jsx)(`section`, {
        className: `bg-cream py-20`,
        children: (0, d.jsxs)(`div`, {
          className: `container-site grid items-center gap-12 lg:grid-cols-2`,
          children: [
            (0, d.jsx)(`img`, {
              src: `/images/brand/scott-lucky.webp`,
              alt: `Scott Johnson with Lucky, who turned 30 years old`,
              className: `w-full rounded-3xl shadow-pop`,
            }),
            (0, d.jsxs)(`div`, {
              children: [
                (0, d.jsx)(`p`, {
                  className: `eyebrow text-teal`,
                  children: `Featured story`,
                }),
                (0, d.jsx)(`h2`, {
                  className: `mt-3 text-3xl font-bold text-navy md:text-4xl`,
                  children: `Lucky turned 30 years old`,
                }),
                (0, d.jsx)(`blockquote`, {
                  className: `mt-6 border-l-4 border-sun pl-5 text-lg leading-relaxed text-navy/85`,
                  children: `"Lucky is 30 years old! He is healthy, active and happy! And he has eaten Gentle Giants Natural Non GMO Ingredients Dog and Puppy Food for 15 years."`,
                }),
                (0, d.jsx)(`p`, {
                  className: `eyebrow mt-4 text-muted-foreground`,
                  children: `Scott Johnson`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, d.jsx)(`section`, {
        className: `bg-card py-20`,
        children: (0, d.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, d.jsx)(c, {
              eyebrow: `Reviews`,
              title: `What pet parents are saying`,
            }),
            (0, d.jsx)(`div`, {
              className: `mt-12 columns-1 gap-6 md:columns-2 lg:columns-3`,
              children: a.map((e) =>
                (0, d.jsxs)(
                  `figure`,
                  {
                    className: `mb-6 break-inside-avoid rounded-3xl border bg-cream p-6`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `flex gap-0.5 text-sun`,
                        "aria-label": `5 stars`,
                        children: Array.from({ length: 5 }).map((e, t) =>
                          (0, d.jsx)(
                            u,
                            { className: `size-4 fill-current` },
                            t,
                          ),
                        ),
                      }),
                      (0, d.jsx)(`h3`, {
                        className: `mt-3 font-bold text-navy`,
                        children: e.title,
                      }),
                      (0, d.jsxs)(`blockquote`, {
                        className: `mt-2 text-sm leading-relaxed text-navy/80`,
                        children: [
                          (0, d.jsx)(r, { className: `mb-1 size-4 text-teal` }),
                          e.quote,
                        ],
                      }),
                      (0, d.jsx)(`figcaption`, {
                        className: `eyebrow mt-4 text-muted-foreground`,
                        children: e.name,
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, d.jsx)(`section`, {
        className: `bg-teal-soft py-20`,
        children: (0, d.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, d.jsx)(c, { title: `The birthday wall` }),
            (0, d.jsx)(`div`, {
              className: `mt-14 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5`,
              children: o.map((e, t) =>
                (0, d.jsxs)(
                  `figure`,
                  {
                    className: `relative rounded-3xl bg-card p-3 pt-8 text-center shadow-card`,
                    children: [
                      (0, d.jsx)(l, {
                        age: e.age,
                        palette: `burst-${t + 1}`,
                        className: `absolute -top-9 left-1/2 w-28 -translate-x-1/2`,
                      }),
                      (0, d.jsx)(`img`, {
                        src: e.image,
                        alt: `${e.name}, ${e.breed}`,
                        loading: `lazy`,
                        className: `mx-auto aspect-square w-full rounded-2xl bg-field object-contain object-bottom`,
                      }),
                      (0, d.jsxs)(`figcaption`, {
                        className: `mt-2 text-sm font-bold text-navy`,
                        children: [
                          e.name,
                          ` `,
                          (0, d.jsxs)(`span`, {
                            className: `font-normal text-muted-foreground`,
                            children: [`· `, e.breed],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.name,
                ),
              ),
            }),
            (0, d.jsx)(`div`, {
              className: `mt-14 text-center`,
              children: (0, d.jsx)(i, {
                asChild: !0,
                variant: `navy`,
                size: `cta`,
                children: (0, d.jsx)(t, {
                  to: `/products`,
                  children: `Give your dog more birthdays`,
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
export { f as component }
