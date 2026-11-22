var e = (e, t = 2) =>
    Array.from({ length: t }, (t, n) => `/images/products/${e}-${n + 1}.webp`),
  t = [
    { label: `Crude protein`, value: `22% – 24%` },
    { label: `Crude fat (min)`, value: `≈ 9%` },
  ],
  n = [
    `Non-GMO — no corn, wheat, soy or meat by-products`,
    `Heart-healthy fat levels with moderate protein`,
    `Prebiotics, probiotics, oatmeal & brown rice for digestion`,
    `Omega-3 & omega-6 for skin and coat`,
    `For puppies, adults and seniors of every size`,
  ],
  r = [
    `90% real meat recipe`,
    `Natural, non-GMO ingredients`,
    `Made with fresh fruits & vegetables`,
    `Serve as a complete meal or a topper on dry food`,
    `For puppies, adults and seniors`,
  ],
  i = [
    `Natural, non-GMO ingredients`,
    `No corn, wheat, soy or artificial preservatives`,
    `Omega fatty acids for a soft, shiny coat`,
    `For kittens, adults and seniors`,
  ],
  a = [
    {
      slug: `classic-chicken-feast`,
      name: `Classic Chicken Feast — Dog & Puppy Food`,
      species: `dog`,
      format: `dry`,
      badge: `Best Seller`,
      tagline: `Our original 'Quality of Life' recipe with real chicken.`,
      description: `The recipe that started it all. Real chicken, wholesome oatmeal and brown rice, and whole fruits and vegetables come together in a clean, non-GMO formula built to help dogs of every size live longer, healthier lives.`,
      highlights: n,
      analysis: t,
      variants: [
        { id: `3lb`, label: `3 lb`, price: 11.99, images: e(`chicken-3lb`) },
        { id: `15lb`, label: `15 lb`, price: 28.99, images: e(`chicken-15lb`) },
        { id: `30lb`, label: `30 lb`, price: 54.99, images: e(`chicken-30lb`) },
      ],
    },
    {
      slug: `beef-and-bacon-feast`,
      name: `Beef & Bacon Feast for Meat Lovers — Dog & Puppy Food`,
      species: `dog`,
      format: `dry`,
      tagline: `Real beef and real bacon in every bite.`,
      description: `A hearty meat-lover's recipe with real beef and real bacon, balanced with fiber-rich grains and antioxidant-packed produce. Clean, non-GMO nutrition without the greasy fat coating.`,
      highlights: n,
      analysis: t,
      variants: [
        { id: `3lb`, label: `3 lb`, price: 13.99, images: e(`beef-bacon-3lb`) },
        {
          id: `24lb`,
          label: `24 lb`,
          price: 54.99,
          images: e(`beef-bacon-24lb`),
        },
      ],
    },
    {
      slug: `wild-caught-salmon-feast`,
      name: `Wild Caught Salmon Feast — Dog & Puppy Food`,
      species: `dog`,
      format: `dry`,
      badge: `Seafood Lovers`,
      tagline: `Wild caught salmon for skin, coat and heart health.`,
      description: `Wild caught salmon delivers naturally rich omega-3s for a glossy coat and healthy skin, paired with gentle grains, prebiotics and probiotics for easy digestion.`,
      highlights: n,
      analysis: t,
      variants: [
        { id: `18lb`, label: `18 lb`, price: 54.99, images: e(`salmon-18lb`) },
      ],
    },
    {
      slug: `small-bites-chicken-feast`,
      name: `Small Bites Chicken Feast — Dog & Puppy Food`,
      species: `dog`,
      format: `dry`,
      tagline: `Our classic chicken recipe in a smaller kibble.`,
      description: `Everything you love about the Classic Chicken Feast, in a smaller bite that's easier for toy breeds, puppies and senior mouths.`,
      highlights: n,
      analysis: t,
      variants: [
        {
          id: `7-5lb`,
          label: `7.5 lb`,
          price: 19.99,
          images: e(`small-bites-7lb`),
        },
        {
          id: `24lb`,
          label: `24 lb`,
          price: 45.99,
          images: e(`small-bites-24lb`),
        },
      ],
    },
    {
      slug: `canned-90-beef`,
      name: `90% Beef — Canned Dog & Puppy Food`,
      species: `dog`,
      format: `canned`,
      tagline: `13 oz cans, case of 12.`,
      description: `90% real beef with fresh fruits and vegetables. Serve on its own as a complete meal or spoon it over kibble as a tasty, nutritious topper.`,
      highlights: r,
      variants: [
        {
          id: `case-12`,
          label: `13 oz · case of 12`,
          price: 39.99,
          images: e(`can-beef`),
        },
      ],
    },
    {
      slug: `canned-90-chicken`,
      name: `90% Chicken — Canned Dog & Puppy Food`,
      species: `dog`,
      format: `canned`,
      tagline: `13 oz cans, case of 12.`,
      description: `90% real chicken with fresh fruits and vegetables. Serve on its own as a complete meal or spoon it over kibble as a tasty, nutritious topper.`,
      highlights: r,
      variants: [
        {
          id: `case-12`,
          label: `13 oz · case of 12`,
          price: 39.99,
          images: e(`can-chicken`),
        },
      ],
    },
    {
      slug: `canned-90-salmon`,
      name: `90% Salmon — Canned Dog & Puppy Food`,
      species: `dog`,
      format: `canned`,
      tagline: `13 oz cans, case of 12.`,
      description: `90% real salmon with fresh fruits and vegetables. Serve on its own as a complete meal or spoon it over kibble as a tasty, nutritious topper.`,
      highlights: r,
      variants: [
        {
          id: `case-12`,
          label: `13 oz · case of 12`,
          price: 39.99,
          images: e(`can-salmon`),
        },
      ],
    },
    {
      slug: `canned-90-turkey`,
      name: `90% Turkey — Canned Dog & Puppy Food`,
      species: `dog`,
      format: `canned`,
      tagline: `13 oz cans, case of 12.`,
      description: `90% real turkey with fresh fruits and vegetables. Serve on its own as a complete meal or spoon it over kibble as a tasty, nutritious topper.`,
      highlights: r,
      variants: [
        {
          id: `case-12`,
          label: `13 oz · case of 12`,
          price: 39.99,
          images: e(`can-turkey`),
        },
      ],
    },
    {
      slug: `dog-sample-pack`,
      name: `Canned Dog Food Sample Pack`,
      species: `dog`,
      format: `sample`,
      badge: `Try it`,
      tagline: `4 different 13 oz cans to find their favorite.`,
      description: `Not sure which flavor your dog will love most? Try four of our 90% meat canned recipes in one pack.`,
      highlights: r,
      variants: [
        {
          id: `pack-4`,
          label: `13 oz · pack of 4`,
          price: 13.29,
          images: e(`dog-sample-pack`, 1),
        },
      ],
    },
    {
      slug: `chicken-with-fish-cat-feast`,
      name: `Chicken with Fish Feast — Cat & Kitten Food`,
      species: `cat`,
      format: `dry`,
      tagline: `Classic 'Quality of Life' feast for cats.`,
      description: `Real chicken and fish in a clean, non-GMO recipe that supports healthy digestion, a glossy coat and lifelong vitality for cats of every age.`,
      highlights: i,
      variants: [
        {
          id: `3lb`,
          label: `3 lb`,
          price: 12.99,
          images: e(`cat-chicken-fish-3lb`),
        },
        {
          id: `9lb`,
          label: `9 lb`,
          price: 27.99,
          images: e(`cat-chicken-fish-9lb`),
        },
        {
          id: `18lb`,
          label: `18 lb`,
          price: 45.99,
          images: e(`cat-chicken-fish-18lb`),
        },
      ],
    },
    {
      slug: `canned-cat-90-chicken`,
      name: `90% Chicken — Canned Cat & Kitten Food`,
      species: `cat`,
      format: `canned`,
      tagline: `3 oz cans, case of 24.`,
      description: `90% real chicken with fruits and vegetables — a complete meal or a nutritious treat.`,
      highlights: i,
      variants: [
        {
          id: `case-24`,
          label: `3 oz · case of 24`,
          price: 38.99,
          images: e(`cat-can-chicken`),
        },
      ],
    },
    {
      slug: `canned-cat-90-beef`,
      name: `90% Beef — Canned Cat & Kitten Food`,
      species: `cat`,
      format: `canned`,
      tagline: `3 oz cans, case of 24.`,
      description: `90% real beef with fruits and vegetables — a complete meal or a nutritious treat.`,
      highlights: i,
      variants: [
        {
          id: `case-24`,
          label: `3 oz · case of 24`,
          price: 38.99,
          images: e(`cat-can-beef`),
        },
      ],
    },
    {
      slug: `canned-cat-90-salmon`,
      name: `90% Salmon — Canned Cat & Kitten Food`,
      species: `cat`,
      format: `canned`,
      tagline: `3 oz cans, case of 24.`,
      description: `90% real salmon with fruits and vegetables — a complete meal or a nutritious treat.`,
      highlights: i,
      variants: [
        {
          id: `case-24`,
          label: `3 oz · case of 24`,
          price: 38.99,
          images: e(`cat-can-salmon`),
        },
      ],
    },
    {
      slug: `canned-cat-90-tuna`,
      name: `90% Tuna — Canned Cat & Kitten Food`,
      species: `cat`,
      format: `canned`,
      tagline: `3 oz cans, case of 24.`,
      description: `90% real tuna with fruits and vegetables — a complete meal or a nutritious treat.`,
      highlights: i,
      variants: [
        {
          id: `case-24`,
          label: `3 oz · case of 24`,
          price: 35.99,
          images: e(`cat-can-tuna`),
        },
      ],
    },
    {
      slug: `cat-sample-pack`,
      name: `Canned Cat Food Sample Pack`,
      species: `cat`,
      format: `sample`,
      tagline: `4 different 3 oz cans.`,
      description: `Four of our 90% recipes for cats in one pack — perfect for picky eaters.`,
      highlights: i,
      variants: [
        {
          id: `pack-4`,
          label: `3 oz · pack of 4`,
          price: 6,
          images: e(`cat-sample-pack`, 1),
        },
      ],
    },
  ],
  o = [
    { id: `all`, label: `All products` },
    { id: `dog`, label: `Dog food` },
    { id: `cat`, label: `Cat food` },
    { id: `dry`, label: `Dry food` },
    { id: `canned`, label: `Canned food` },
    { id: `sample`, label: `Sample packs` },
  ]
function s(e) {
  return o.some((t) => t.id === e)
}
function c(e) {
  return e === `all`
    ? a
    : e === `dog` || e === `cat`
      ? a.filter((t) => t.species === e)
      : a.filter((t) => t.format === e)
}
function l(e) {
  return a.find((t) => t.slug === e)
}
function u(e, t) {
  return e.variants.find((e) => e.id === t)
}
function d(e) {
  return `$${e.toFixed(2)}`
}
function f(e) {
  let t = e.variants.map((e) => e.price),
    n = Math.min(...t),
    r = Math.max(...t)
  return n === r ? d(n) : `${d(n)} – ${d(r)}`
}
function p(e, t = 4) {
  return a
    .filter((t) => t.slug !== e.slug && t.species === e.species)
    .sort(
      (t, n) => Number(n.format === e.format) - Number(t.format === e.format),
    )
    .slice(0, t)
}
export {
  u as a,
  a as c,
  l as i,
  p as l,
  c as n,
  s as o,
  d as r,
  f as s,
  o as t,
}
