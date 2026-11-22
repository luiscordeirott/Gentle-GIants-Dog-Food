import { l as e, r as t } from "./utils-CTnPHf1g.js"
import { t as n } from "./icons-Ce8y2byg.js"
import { t as r } from "./button-CuKnxT8Q.js"
import { i, n as a, r as o, y as s } from "./index-3VGh8kgk.js"
import { t as c } from "./PageBanner-B6TogIsW.js"
import { t as l } from "./SectionHeading-mwC7hKnT.js"
var u = e(),
  d = [
    {
      title: `Nutrition as Preventative Medicine`,
      body: `We believe that what you feed your dog today determines their vitality tomorrow. Our recipes are scientifically formulated to support organs, joints, and immune systems, giving dogs extra years of healthy life.`,
    },
    {
      title: `Non-GMO & Premium Ingredients`,
      body: `We hand-select only the finest natural ingredients—rich in whole meats, wholesome grains, superfoods, fruits, and vegetables—completely free of GMOs, artificial additives, or corn fillers.`,
    },
    {
      title: `Unmatched Safety & Zero Recalls`,
      body: `We maintain the highest standards of safety and quality control in the industry, giving pet parents total peace of mind with every single bowl.`,
    },
    {
      title: `Making Premium Health Accessible`,
      body: `Longevity shouldn't be a luxury. We are committed to making top-tier health affordable, protecting both your dog's future and your family's budget.`,
    },
  ]
function f() {
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(c, {
        title: `About Us`,
        image: `/images/about-dogs.webp`,
        className: `min-h-[420px] md:min-h-[540px]`,
      }),
      (0, u.jsx)(`section`, {
        className: `bg-cream py-20`,
        children: (0, u.jsxs)(`div`, {
          className: `container-site max-w-4xl text-center`,
          children: [
            (0, u.jsx)(a, {
              heart: `color`,
              className: `mx-auto h-12 text-teal md:h-16`,
            }),
            (0, u.jsx)(`h2`, {
              className: `mt-6 text-3xl font-bold text-navy md:text-5xl`,
              children: `Born from Rescue. Driven by Longevity.`,
            }),
            (0, u.jsxs)(`div`, {
              className: `mt-8 space-y-5 text-base leading-relaxed text-navy/85 md:text-lg`,
              children: [
                (0, u.jsx)(`p`, {
                  children: `Gentle Giants Dog Food and Products wasn't created in a corporate boardroom—it was born from a lifelong mission of rescue, love, and dedication to animals. Founded by Burt Ward (famous worldwide as "Robin" from the classic Batman series) and his wife Tracy Ward, our journey began out of a desperate need to save the lives of giant and large-breed dogs that were suffering from poor health and tragically short lifespans.`,
                }),
                (0, u.jsx)(`p`, {
                  children: `After rescuing thousands of dogs and realizing that commercial pet foods were failing them, Burt and Tracy spent years working with top nutritional experts, veterinarians, and scientists. Their goal was simple yet revolutionary: create a food that would help dogs live the longest, happiest, and healthiest lives possible.`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, u.jsx)(`section`, {
        className: `bg-card py-20`,
        children: (0, u.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, u.jsx)(l, {
              eyebrow: `What's in every bowl`,
              title: `The benefits of Gentle Giants`,
              children: `Six reasons vets and pet parents choose Gentle Giants for dogs of every size and age.`,
            }),
            (0, u.jsx)(`div`, {
              className: `mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3`,
              children: o.map((e, t) =>
                (0, u.jsxs)(
                  `article`,
                  {
                    className: `group relative overflow-hidden rounded-3xl border bg-cream p-7 transition-all hover:-translate-y-1 hover:border-teal hover:shadow-card`,
                    children: [
                      (0, u.jsx)(`span`, {
                        className: `absolute right-5 top-4 font-display text-5xl text-teal/15`,
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      (0, u.jsx)(`div`, {
                        className: `grid size-12 place-items-center rounded-2xl bg-teal text-teal-foreground transition-transform group-hover:rotate-6`,
                        children: (0, u.jsx)(n, {
                          name: e.icon,
                          className: `size-6`,
                        }),
                      }),
                      (0, u.jsx)(`h3`, {
                        className: `mt-5 text-xl font-bold text-navy`,
                        children: e.title,
                      }),
                      (0, u.jsx)(`p`, {
                        className: `mt-3 text-sm leading-relaxed text-navy/75`,
                        children: e.body,
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, u.jsx)(`section`, {
        className: `bg-cream py-20`,
        children: (0, u.jsxs)(`div`, {
          className: `container-site grid items-center gap-12 lg:grid-cols-2`,
          children: [
            (0, u.jsx)(`img`, {
              src: `/images/gallery-rescue.webp`,
              alt: `Rescued dogs of many breeds resting together`,
              className: `w-full rounded-3xl shadow-pop`,
            }),
            (0, u.jsxs)(`div`, {
              children: [
                (0, u.jsx)(l, { align: `left`, title: `Our Difference` }),
                (0, u.jsx)(`ul`, {
                  className: `mt-8 space-y-5`,
                  children: d.map((e) =>
                    (0, u.jsxs)(
                      `li`,
                      {
                        className: `flex gap-4`,
                        children: [
                          (0, u.jsx)(`span`, {
                            className: `mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-sun text-sun-foreground`,
                            children: (0, u.jsx)(s, {
                              className: `size-3.5`,
                              strokeWidth: 3,
                            }),
                          }),
                          (0, u.jsxs)(`p`, {
                            className: `text-navy/85`,
                            children: [
                              (0, u.jsxs)(`strong`, {
                                className: `text-navy`,
                                children: [e.title, `:`],
                              }),
                              ` `,
                              e.body,
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                }),
                (0, u.jsx)(`p`, {
                  className: `mt-8 text-lg font-bold text-navy`,
                  children: `At Gentle Giants, we don't just make dog food—we give you more time with your best friend.`,
                }),
              ],
            }),
          ],
        }),
      }),
      (0, u.jsx)(`section`, {
        className: `bg-card py-20`,
        children: (0, u.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, u.jsx)(l, {
              title: `Advertising Campaign`,
              children: `From The Ellen Show to national TV, radio and billboards — Burt and Tracy have shared the Gentle Giants story with millions of pet parents.`,
            }),
            (0, u.jsx)(`div`, {
              className: `mt-12 grid grid-flow-dense auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]`,
              children: i.map((e) =>
                (0, u.jsx)(
                  `figure`,
                  {
                    className: `overflow-hidden rounded-2xl bg-muted ${e.span === `big` ? `col-span-2 row-span-2` : e.span === `wide` ? `col-span-2` : ``}`,
                    children: (0, u.jsx)(`img`, {
                      src: e.src,
                      alt: e.alt,
                      loading: `lazy`,
                      className: `size-full object-cover transition-transform duration-500 hover:scale-105`,
                    }),
                  },
                  e.src,
                ),
              ),
            }),
            (0, u.jsx)(`div`, {
              className: `mt-12 flex justify-center`,
              children: (0, u.jsx)(r, {
                asChild: !0,
                variant: `sky`,
                size: `cta`,
                children: (0, u.jsx)(t, {
                  to: `/products`,
                  children: `Shop Gentle Giants`,
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
