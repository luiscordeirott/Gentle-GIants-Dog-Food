import { I as e, P as t, l as n, r, t as i } from "./utils-CTnPHf1g.js"
import { n as a } from "./dist-DcKsCcPt.js"
import { t as o } from "./createLucideIcon-DIG6HcwS.js"
import { t as s } from "./icons-Ce8y2byg.js"
import { t as c } from "./ProductCard-DCoIzTlK.js"
import { t as l } from "./quote-BGeQbDNz.js"
import { t as u } from "./button-CuKnxT8Q.js"
import { c as d } from "./products-DlwfxnYx.js"
import {
  _ as f,
  c as p,
  l as m,
  n as h,
  o as g,
  s as _,
} from "./index-3VGh8kgk.js"
import { t as v } from "./SectionHeading-mwC7hKnT.js"
import { t as y } from "./Starburst-X_oWG3DN.js"
var b = o(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  x = e(t()),
  S = n()
function C({ dog: e, index: t }) {
  let n = `burst-${(t % 9) + 1}`
  return (0, S.jsxs)(`figure`, {
    className: `relative mb-6 rounded-3xl bg-card p-3 pt-10 shadow-card`,
    children: [
      (0, S.jsx)(y, {
        age: e.age,
        palette: n,
        className: `absolute -right-4 -top-6 z-10 w-36 animate-wiggle`,
      }),
      (0, S.jsx)(`div`, {
        className: `aspect-[4/5] overflow-hidden rounded-2xl bg-field`,
        children: (0, S.jsx)(`img`, {
          src: e.image,
          alt: `${e.name}, a ${e.breed}`,
          loading: `lazy`,
          className: `size-full object-contain object-bottom`,
        }),
      }),
      (0, S.jsxs)(`figcaption`, {
        className: `px-1 pb-1 pt-3`,
        children: [
          (0, S.jsx)(`p`, {
            className: `font-bold text-navy`,
            children: e.name,
          }),
          (0, S.jsx)(`p`, {
            className: `text-xs text-muted-foreground`,
            children: e.breed,
          }),
        ],
      }),
    ],
  })
}
function w({
  dogs: e,
  direction: t,
  duration: n,
  offset: r,
  reverse: a = !1,
  className: o,
}) {
  let s = [...e.slice(r), ...e.slice(0, r)],
    c = a ? s.reverse() : s,
    l = [...c, ...c]
  return (0, S.jsx)(`div`, {
    className: i(`relative h-full overflow-visible`, o),
    children: (0, S.jsx)(`div`, {
      className: i(
        `flex flex-col px-4 group-hover:[animation-play-state:paused]`,
        t === `up` ? `animate-marquee-up` : `animate-marquee-down`,
      ),
      style: { "--marquee-duration": `${n}s` },
      children: l.map((t, n) =>
        (0, S.jsx)(C, { dog: t, index: e.indexOf(t) }, `${t.name}-${n}`),
      ),
    }),
  })
}
function T() {
  let e = Math.min(...p.map((e) => e.age)),
    t = Math.max(...p.map((e) => e.age))
  return (0, S.jsx)(`section`, {
    className: `relative overflow-hidden bg-teal-soft`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site grid items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-0`,
      children: [
        (0, S.jsxs)(`div`, {
          className: `lg:py-24`,
          children: [
            (0, S.jsx)(`p`, {
              className: `eyebrow text-teal-deep`,
              children: `Real dogs · Real birthdays`,
            }),
            (0, S.jsxs)(`h2`, {
              className: `mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl`,
              children: [
                `They didn't just live long.`,
                (0, S.jsx)(`br`, {}),
                ` They lived `,
                (0, S.jsx)(`span`, {
                  className: `text-heart`,
                  children: `well.`,
                }),
              ],
            }),
            (0, S.jsxs)(`div`, {
              className: `mt-8 flex items-end gap-4`,
              children: [
                (0, S.jsx)(`span`, {
                  className: `text-bubble text-7xl md:text-8xl`,
                  children: e,
                }),
                (0, S.jsx)(`span`, {
                  className: `pb-4 text-2xl font-bold text-navy`,
                  children: `to`,
                }),
                (0, S.jsx)(`span`, {
                  className: `text-bubble text-7xl md:text-8xl`,
                  children: t,
                }),
                (0, S.jsx)(`span`, {
                  className: `pb-4 text-2xl font-bold text-navy`,
                  children: `years`,
                }),
              ],
            }),
            (0, S.jsxs)(`p`, {
              className: `mt-6 max-w-md text-base text-navy/80`,
              children: [
                `Families feeding Gentle Giants keep sharing the same story: more birthdays, more walks and more years together. Here are a few of the gentle giants — big and small — who reached `,
                e,
                ` to `,
                t,
                ` years.`,
              ],
            }),
            (0, S.jsx)(u, {
              asChild: !0,
              variant: `navy`,
              size: `xl`,
              className: `mt-8`,
              children: (0, S.jsx)(r, {
                to: `/community`,
                children: `Read their stories`,
              }),
            }),
          ],
        }),
        (0, S.jsx)(`div`, {
          className: `group relative h-[560px] mask-fade-y md:h-[680px]`,
          "aria-label": `Dogs who lived 15 to 23 years`,
          children: (0, S.jsxs)(`div`, {
            className: `grid h-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3`,
            children: [
              (0, S.jsx)(w, {
                dogs: p,
                direction: `up`,
                duration: 46,
                offset: 0,
              }),
              (0, S.jsx)(w, {
                dogs: p,
                direction: `down`,
                duration: 54,
                offset: 4,
                reverse: !0,
                className: `hidden sm:block`,
              }),
              (0, S.jsx)(w, {
                dogs: p,
                direction: `up`,
                duration: 50,
                offset: 6,
                className: `hidden xl:block`,
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
function E() {
  return (0, S.jsxs)(S.Fragment, {
    children: [
      (0, S.jsx)(D, {}),
      (0, S.jsx)(O, {}),
      (0, S.jsx)(k, {}),
      (0, S.jsx)(T, {}),
      (0, S.jsx)(A, {}),
      (0, S.jsx)(M, {}),
      (0, S.jsx)(N, {}),
      (0, S.jsx)(P, {}),
    ],
  })
}
function D() {
  return (0, S.jsxs)(`section`, {
    className: `relative isolate flex min-h-[78vh] items-center overflow-hidden`,
    children: [
      (0, S.jsx)(`img`, {
        src: `/images/hero-dog.webp`,
        alt: ``,
        className: `absolute inset-0 -z-20 size-full object-cover`,
      }),
      (0, S.jsx)(`div`, {
        className: `absolute inset-0 -z-10 bg-hero-overlay`,
      }),
      (0, S.jsxs)(`div`, {
        className: `container-site py-24 text-center text-teal-foreground`,
        children: [
          (0, S.jsx)(`p`, {
            className: `text-base font-semibold md:text-lg`,
            children: `The only dog food your dog needs`,
          }),
          (0, S.jsxs)(`h1`, {
            className: `text-bubble mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl`,
            children: [
              `World-Class Nutrition`,
              (0, S.jsx)(`br`, {}),
              `for a Healthier Life`,
            ],
          }),
          (0, S.jsx)(`p`, {
            className: `mx-auto mt-6 max-w-2xl text-base text-teal-foreground/90 md:text-lg`,
            children: `Clean, non-GMO dog and puppy food formulated with top vets and PhDs to help your pets thrive at every stage of life.`,
          }),
          (0, S.jsxs)(`div`, {
            className: `mt-10 flex flex-wrap justify-center gap-3`,
            children: [
              (0, S.jsx)(u, {
                asChild: !0,
                variant: `sky`,
                size: `cta`,
                className: `min-w-44`,
                children: (0, S.jsx)(r, {
                  to: `/products`,
                  children: `Shop Now`,
                }),
              }),
              (0, S.jsx)(u, {
                asChild: !0,
                variant: `pill`,
                size: `cta`,
                className: `text-teal-foreground`,
                children: (0, S.jsx)(r, {
                  to: `/about`,
                  children: `Why Gentle Giants?`,
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function O() {
  return (0, S.jsx)(`section`, {
    className: `bg-card py-20`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site`,
      children: [
        (0, S.jsx)(v, { title: `The food your pets deserve!` }),
        (0, S.jsx)(`div`, {
          className: `mt-14 flex flex-wrap justify-center gap-x-8 gap-y-12`,
          children: g.map((e) =>
            (0, S.jsxs)(
              `div`,
              {
                className: `flex w-full max-w-xs gap-4 sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]`,
                children: [
                  (0, S.jsx)(`div`, {
                    className: `grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-teal`,
                    children: (0, S.jsx)(s, {
                      name: e.icon,
                      className: `size-5`,
                    }),
                  }),
                  (0, S.jsxs)(`div`, {
                    children: [
                      (0, S.jsx)(`h3`, {
                        className: `eyebrow text-navy`,
                        children: e.title,
                      }),
                      (0, S.jsx)(`p`, {
                        className: `mt-2 text-sm leading-relaxed text-muted-foreground`,
                        children: e.body,
                      }),
                    ],
                  }),
                ],
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  })
}
function k() {
  return (0, S.jsx)(`section`, {
    className: `bg-sun`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site grid items-center gap-8 py-14 md:grid-cols-[auto_1fr] md:gap-12`,
      children: [
        (0, S.jsx)(`img`, {
          src: `/images/brand/burt-tracy.webp`,
          alt: `Burt Ward and Tracy Ward with their rescued pets`,
          className: `mx-auto w-48 rotate-[-3deg] rounded-3xl border-4 border-card shadow-pop md:w-60`,
        }),
        (0, S.jsxs)(`div`, {
          className: `text-sun-foreground`,
          children: [
            (0, S.jsx)(`p`, { className: `eyebrow`, children: `Our founder` }),
            (0, S.jsx)(`h2`, {
              className: `mt-2 text-3xl font-bold md:text-4xl`,
              children: `Meet Burt Ward, The Caped Crusader`,
            }),
            (0, S.jsx)(`p`, {
              className: `mt-4 max-w-2xl text-base leading-relaxed`,
              children: `Founded by TV's Robin (Burt Ward), Gentle Giants makes all-natural, non-GMO pet food formulated with top vets to help dogs live longer, healthier lives.`,
            }),
            (0, S.jsxs)(`p`, {
              className: `mt-3 max-w-2xl text-base leading-relaxed`,
              children: [
                `Burt Ward discusses his mission to rescue dogs and extend their lifespans in the`,
                ` `,
                (0, S.jsx)(`a`, {
                  href: `https://www.gentlegiantsdogfood.com/batman-news--gentle-giants-dog-food-news.html`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  className: `font-semibold underline underline-offset-4`,
                  children: `Actor Burt Ward Has Saved Over 15,000 Dogs`,
                }),
                ` `,
                `interview on The Ellen Show, which highlights his life's work with Gentle Giants.`,
              ],
            }),
            (0, S.jsxs)(r, {
              to: `/about`,
              className: `mt-5 inline-flex items-center gap-2 font-bold hover:gap-3 transition-all`,
              children: [
                `Read our story `,
                (0, S.jsx)(b, { className: `size-4` }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
function A() {
  let e = [
    `classic-chicken-feast`,
    `beef-and-bacon-feast`,
    `wild-caught-salmon-feast`,
    `dog-sample-pack`,
  ]
    .map((e) => d.find((t) => t.slug === e))
    .filter((e) => e !== void 0)
  return (0, S.jsx)(`section`, {
    className: `bg-cream py-20`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site`,
      children: [
        (0, S.jsxs)(`div`, {
          className: `flex flex-wrap items-end justify-between gap-4`,
          children: [
            (0, S.jsx)(v, {
              align: `left`,
              eyebrow: `Shop favorites`,
              title: `Loved by giants big and small`,
            }),
            (0, S.jsx)(u, {
              asChild: !0,
              variant: `soft`,
              size: `xl`,
              children: (0, S.jsxs)(r, {
                to: `/products`,
                children: [`See all products `, (0, S.jsx)(b, {})],
              }),
            }),
          ],
        }),
        (0, S.jsx)(`div`, {
          className: `mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
          children: e.map((e) => (0, S.jsx)(c, { product: e }, e.slug)),
        }),
      ],
    }),
  })
}
function j({ style: e, name: t }) {
  switch (e) {
    case `chewy`:
      return (0, S.jsx)(`span`, {
        className: `font-display text-4xl lowercase text-sky`,
        children: `chewy`,
      })
    case `tsc`:
      return (0, S.jsxs)(`span`, {
        className: `flex items-center gap-1.5`,
        children: [
          (0, S.jsx)(`span`, {
            className: `rounded bg-heart px-1.5 py-0.5 font-display text-lg text-destructive-foreground`,
            children: `TSC`,
          }),
          (0, S.jsxs)(`span`, {
            className: `text-sm font-black uppercase leading-none text-navy`,
            children: [`Tractor`, (0, S.jsx)(`br`, {}), `Supply Co`],
          }),
        ],
      })
    case `petsmart`:
      return (0, S.jsx)(`span`, {
        className: `text-2xl font-black uppercase tracking-tight text-heart`,
        children: `PetSmart`,
      })
    case `petco`:
      return (0, S.jsx)(`span`, {
        className: `text-3xl font-black lowercase text-sky`,
        children: `petco`,
      })
    case `heb`:
      return (0, S.jsx)(`span`, {
        className: `rounded-full border-4 border-card bg-heart px-4 py-1 text-2xl font-black text-destructive-foreground shadow`,
        children: `H-E-B`,
      })
    case `target`:
      return (0, S.jsxs)(`span`, {
        className: `flex flex-col items-center`,
        children: [
          (0, S.jsx)(`span`, {
            className: `grid size-10 place-items-center rounded-full border-[7px] border-heart`,
            children: (0, S.jsx)(`span`, {
              className: `size-3 rounded-full bg-heart`,
            }),
          }),
          (0, S.jsx)(`span`, {
            className: `mt-1 text-xs font-black uppercase text-heart`,
            children: `Target`,
          }),
        ],
      })
    case `gg`:
      return (0, S.jsx)(h, { heart: `color`, className: `h-8 text-teal` })
    default:
      return (0, S.jsxs)(`span`, {
        className: `flex items-center gap-2 text-lg font-black text-navy`,
        children: [(0, S.jsx)(f, { className: `size-5 text-teal` }), ` `, t],
      })
  }
}
function M() {
  return (0, S.jsx)(`section`, {
    className: `bg-card py-20`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site`,
      children: [
        (0, S.jsx)(v, {
          title: `In 1,550 stores nationally all across America!`,
          children: `Find Gentle Giants at your favorite pet retailer, or order direct and have it delivered straight to your door.`,
        }),
        (0, S.jsx)(`div`, {
          className: `mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6`,
          children: m.map((e) => {
            let t = e.url.startsWith(`/`),
              n = (0, S.jsxs)(S.Fragment, {
                children: [
                  (0, S.jsx)(`svg`, {
                    viewBox: `0 0 200 120`,
                    "aria-hidden": !0,
                    className: `absolute inset-0 size-full fill-card transition-transform duration-500 group-hover:scale-110`,
                    children: (0, S.jsx)(`polygon`, {
                      points: `100,4 116,34 150,14 142,48 192,48 154,68 186,96 140,88 136,116 108,94 92,118 78,92 44,112 50,82 8,84 40,62 10,36 56,40 52,10 84,30`,
                    }),
                  }),
                  (0, S.jsx)(`span`, {
                    className: `relative`,
                    children: (0, S.jsx)(j, { style: e.style, name: e.name }),
                  }),
                ],
              }),
              i = `group relative grid aspect-[5/3] place-items-center overflow-hidden rounded-xl bg-muted transition-shadow hover:shadow-card`
            return t
              ? (0, S.jsx)(
                  r,
                  {
                    to: `/products`,
                    className: i,
                    "aria-label": `Shop ${e.name}`,
                    children: n,
                  },
                  e.name,
                )
              : (0, S.jsx)(
                  `a`,
                  {
                    href: e.url,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: i,
                    "aria-label": `Find Gentle Giants at ${e.name}`,
                    children: n,
                  },
                  e.name,
                )
          }),
        }),
      ],
    }),
  })
}
function N() {
  return (0, S.jsx)(`section`, {
    className: `bg-navy py-20 text-navy-foreground`,
    children: (0, S.jsx)(`div`, {
      className: `container-site grid gap-12 md:grid-cols-2`,
      children: _.map((e) =>
        (0, S.jsxs)(
          `figure`,
          {
            className: `flex gap-5`,
            children: [
              (0, S.jsx)(`div`, {
                className: `grid size-12 shrink-0 place-items-center rounded-full bg-sun font-bold text-sun-foreground`,
                children: e.initials,
              }),
              (0, S.jsxs)(`div`, {
                children: [
                  (0, S.jsx)(l, { className: `mb-2 size-5 text-aqua` }),
                  (0, S.jsxs)(`blockquote`, {
                    className: `text-lg leading-relaxed`,
                    children: [`"`, e.quote, `"`],
                  }),
                  (0, S.jsx)(`figcaption`, {
                    className: `eyebrow mt-4 text-navy-foreground/60`,
                    children: e.name,
                  }),
                ],
              }),
            ],
          },
          e.name,
        ),
      ),
    }),
  })
}
function P() {
  let [e, t] = (0, x.useState)(``)
  return (0, S.jsx)(`section`, {
    className: `relative overflow-hidden bg-newsletter text-teal-foreground`,
    children: (0, S.jsxs)(`div`, {
      className: `container-site grid items-center gap-10 py-16 md:grid-cols-2`,
      children: [
        (0, S.jsxs)(`div`, {
          children: [
            (0, S.jsx)(`p`, {
              className: `eyebrow text-teal-foreground/80`,
              children: `Become a Gentle Giant`,
            }),
            (0, S.jsx)(`h2`, {
              className: `mt-3 text-4xl font-bold`,
              children: `Join our Newsletter!`,
            }),
            (0, S.jsx)(`p`, {
              className: `mt-2 text-teal-foreground/85`,
              children: `News, coupons and discounts weekly.`,
            }),
            (0, S.jsxs)(`form`, {
              onSubmit: (n) => {
                if ((n.preventDefault(), !/^\S+@\S+\.\S+$/.test(e))) {
                  a.error(`Please enter a valid email address`)
                  return
                }
                ;(a.success(`Welcome to the pack!`, {
                  description: `Look out for news, coupons and discounts weekly.`,
                }),
                  t(``))
              },
              className: `mt-8 flex max-w-md flex-col gap-3 sm:flex-row`,
              children: [
                (0, S.jsx)(`label`, {
                  htmlFor: `newsletter-email`,
                  className: `sr-only`,
                  children: `Your email`,
                }),
                (0, S.jsx)(`input`, {
                  id: `newsletter-email`,
                  type: `email`,
                  value: e,
                  onChange: (e) => t(e.target.value),
                  placeholder: `Your email`,
                  className: `h-12 flex-1 rounded-full border border-teal-foreground/40 bg-transparent px-5 text-teal-foreground placeholder:text-teal-foreground/60 focus:border-teal-foreground focus:outline-none`,
                }),
                (0, S.jsx)(u, {
                  type: `submit`,
                  variant: `aqua`,
                  size: `xl`,
                  children: `Sign Up`,
                }),
              ],
            }),
          ],
        }),
        (0, S.jsx)(`img`, {
          src: `/images/brand/bags-and-cans-hero.webp`,
          alt: `Gentle Giants dry and canned dog and cat food`,
          className: `mx-auto w-full max-w-xl animate-float rounded-3xl border-4 border-card shadow-pop`,
        }),
      ],
    }),
  })
}
export { E as component }
