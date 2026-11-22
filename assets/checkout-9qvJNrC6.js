import { I as e, P as t, l as n, r, t as i } from "./utils-CTnPHf1g.js"
import { n as a } from "./dist-DcKsCcPt.js"
import { t as o } from "./useNavigate-BoUDW7wC.js"
import { t as s } from "./createLucideIcon-DIG6HcwS.js"
import { t as c } from "./ProductCard-DCoIzTlK.js"
import { i as l, n as ee, r as te, t as u } from "./store-config-B51vm3CT.js"
import { t as ne } from "./leaf-Hf_9wiRl.js"
import { n as re, t as ie } from "./shield-check-gCtisiJE.js"
import { t as d } from "./button-CuKnxT8Q.js"
import { a as f, c as ae, i as oe, r as p } from "./products-DlwfxnYx.js"
import {
  d as se,
  f as ce,
  g as le,
  h as ue,
  m as de,
  p as fe,
  u as pe,
  v as me,
  y as m,
} from "./index-3VGh8kgk.js"
import { r as he, t as ge } from "./order-CZIZXs3U.js"
var _e = s(`badge-check`, [
    [
      `path`,
      {
        d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
        key: `3c2336`,
      },
    ],
    [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
  ]),
  h = s(`chevron-left`, [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]]),
  ve = s(`credit-card`, [
    [
      `rect`,
      { width: `20`, height: `14`, x: `2`, y: `5`, rx: `2`, key: `ynyp8z` },
    ],
    [`line`, { x1: `2`, x2: `22`, y1: `10`, y2: `10`, key: `1b3vmo` }],
  ]),
  ye = s(`gift`, [
    [`path`, { d: `M12 7v14`, key: `1akyts` }],
    [`path`, { d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`, key: `1sqzm4` }],
    [
      `path`,
      {
        d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,
        key: `kc0143`,
      },
    ],
    [
      `rect`,
      { x: `3`, y: `7`, width: `18`, height: `4`, rx: `1`, key: `1hberx` },
    ],
  ]),
  be = s(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  xe = s(`tag`, [
    [
      `path`,
      {
        d: `M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,
        key: `vktsd0`,
      },
    ],
    [
      `circle`,
      { cx: `7.5`, cy: `7.5`, r: `.5`, fill: `currentColor`, key: `kqv944` },
    ],
  ]),
  Se = s(`zap`, [
    [
      `path`,
      {
        d: `M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z`,
        key: `1xq2db`,
      },
    ],
  ]),
  g = 365.2425,
  _ = 6048e5,
  v = 864e5,
  y = 86400
;(y * 7, ((y * g) / 12) * 3)
var b = Symbol.for(`constructDateFrom`)
function x(e, t) {
  return typeof e == `function`
    ? e(t)
    : e && typeof e == `object` && b in e
      ? e[b](t)
      : e instanceof Date
        ? new e.constructor(t)
        : new Date(t)
}
function S(e, t) {
  return x(t || e, e)
}
function C(e, t) {
  return S(e, t?.in).getDay() === 6
}
function w(e, t) {
  return S(e, t?.in).getDay() === 0
}
function T(e, t) {
  let n = S(e, t?.in).getDay()
  return n === 0 || n === 6
}
function E(e, t, n) {
  let r = S(e, n?.in),
    i = T(r, n)
  if (isNaN(t)) return x(n?.in, NaN)
  let a = r.getHours(),
    o = t < 0 ? -1 : 1,
    s = Math.trunc(t / 5)
  r.setDate(r.getDate() + s * 7)
  let c = Math.abs(t % 5)
  for (; c > 0;) (r.setDate(r.getDate() + o), T(r, n) || --c)
  return (
    i &&
      T(r, n) &&
      t !== 0 &&
      (C(r, n) && r.setDate(r.getDate() + (o < 0 ? 2 : -1)),
      w(r, n) && r.setDate(r.getDate() + (o < 0 ? 1 : -2))),
    r.setHours(a),
    r
  )
}
var D = {}
function O() {
  return D
}
function k(e, t) {
  let n = O(),
    r =
      t?.weekStartsOn ??
      t?.locale?.options?.weekStartsOn ??
      n.weekStartsOn ??
      n.locale?.options?.weekStartsOn ??
      0,
    i = S(e, t?.in),
    a = i.getDay(),
    o = (a < r ? 7 : 0) + a - r
  return (i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i)
}
function A(e, t) {
  return k(e, { ...t, weekStartsOn: 1 })
}
function j(e, t) {
  let n = S(e, t?.in),
    r = n.getFullYear(),
    i = x(n, 0)
  ;(i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0))
  let a = A(i),
    o = x(n, 0)
  ;(o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0))
  let s = A(o)
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= s.getTime()
      ? r
      : r - 1
}
function M(e) {
  let t = S(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    )
  return (n.setUTCFullYear(t.getFullYear()), e - +n)
}
function N(e, ...t) {
  let n = x.bind(null, e || t.find((e) => typeof e == `object`))
  return t.map(n)
}
function P(e, t) {
  let n = S(e, t?.in)
  return (n.setHours(0, 0, 0, 0), n)
}
function F(e, t, n) {
  let [r, i] = N(n?.in, e, t),
    a = P(r),
    o = P(i),
    s = +a - M(a),
    c = +o - M(o)
  return Math.round((s - c) / v)
}
function I(e, t) {
  let n = j(e, t),
    r = x(t?.in || e, 0)
  return (r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), A(r))
}
function L(e) {
  return (
    e instanceof Date ||
    (typeof e == `object` &&
      Object.prototype.toString.call(e) === `[object Date]`)
  )
}
function R(e) {
  return !((!L(e) && typeof e != `number`) || isNaN(+S(e)))
}
function Ce(e, t) {
  let n = S(e, t?.in)
  return (n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n)
}
var we = {
    lessThanXSeconds: {
      one: `less than a second`,
      other: `less than {{count}} seconds`,
    },
    xSeconds: { one: `1 second`, other: `{{count}} seconds` },
    halfAMinute: `half a minute`,
    lessThanXMinutes: {
      one: `less than a minute`,
      other: `less than {{count}} minutes`,
    },
    xMinutes: { one: `1 minute`, other: `{{count}} minutes` },
    aboutXHours: { one: `about 1 hour`, other: `about {{count}} hours` },
    xHours: { one: `1 hour`, other: `{{count}} hours` },
    xDays: { one: `1 day`, other: `{{count}} days` },
    aboutXWeeks: { one: `about 1 week`, other: `about {{count}} weeks` },
    xWeeks: { one: `1 week`, other: `{{count}} weeks` },
    aboutXMonths: { one: `about 1 month`, other: `about {{count}} months` },
    xMonths: { one: `1 month`, other: `{{count}} months` },
    aboutXYears: { one: `about 1 year`, other: `about {{count}} years` },
    xYears: { one: `1 year`, other: `{{count}} years` },
    overXYears: { one: `over 1 year`, other: `over {{count}} years` },
    almostXYears: { one: `almost 1 year`, other: `almost {{count}} years` },
  },
  Te = (e, t, n) => {
    let r,
      i = we[e]
    return (
      (r =
        typeof i == `string`
          ? i
          : t === 1
            ? i.one
            : i.other.replace(`{{count}}`, t.toString())),
      n?.addSuffix
        ? n.comparison && n.comparison > 0
          ? `in ` + r
          : r + ` ago`
        : r
    )
  }
function z(e) {
  return (t = {}) => {
    let n = t.width ? String(t.width) : e.defaultWidth
    return e.formats[n] || e.formats[e.defaultWidth]
  }
}
var Ee = {
    date: z({
      formats: {
        full: `EEEE, MMMM do, y`,
        long: `MMMM do, y`,
        medium: `MMM d, y`,
        short: `MM/dd/yyyy`,
      },
      defaultWidth: `full`,
    }),
    time: z({
      formats: {
        full: `h:mm:ss a zzzz`,
        long: `h:mm:ss a z`,
        medium: `h:mm:ss a`,
        short: `h:mm a`,
      },
      defaultWidth: `full`,
    }),
    dateTime: z({
      formats: {
        full: `{{date}} 'at' {{time}}`,
        long: `{{date}} 'at' {{time}}`,
        medium: `{{date}}, {{time}}`,
        short: `{{date}}, {{time}}`,
      },
      defaultWidth: `full`,
    }),
  },
  De = {
    lastWeek: `'last' eeee 'at' p`,
    yesterday: `'yesterday at' p`,
    today: `'today at' p`,
    tomorrow: `'tomorrow at' p`,
    nextWeek: `eeee 'at' p`,
    other: `P`,
  },
  Oe = (e, t, n, r) => De[e]
function B(e) {
  return (t, n) => {
    let r = n?.context ? String(n.context) : `standalone`,
      i
    if (r === `formatting` && e.formattingValues) {
      let t = e.defaultFormattingWidth || e.defaultWidth,
        r = n?.width ? String(n.width) : t
      i = e.formattingValues[r] || e.formattingValues[t]
    } else {
      let t = e.defaultWidth,
        r = n?.width ? String(n.width) : e.defaultWidth
      i = e.values[r] || e.values[t]
    }
    let a = e.argumentCallback ? e.argumentCallback(t) : t
    return i[a]
  }
}
var ke = {
  ordinalNumber: (e, t) => {
    let n = Number(e),
      r = n % 100
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + `st`
        case 2:
          return n + `nd`
        case 3:
          return n + `rd`
      }
    return n + `th`
  },
  era: B({
    values: {
      narrow: [`B`, `A`],
      abbreviated: [`BC`, `AD`],
      wide: [`Before Christ`, `Anno Domini`],
    },
    defaultWidth: `wide`,
  }),
  quarter: B({
    values: {
      narrow: [`1`, `2`, `3`, `4`],
      abbreviated: [`Q1`, `Q2`, `Q3`, `Q4`],
      wide: [`1st quarter`, `2nd quarter`, `3rd quarter`, `4th quarter`],
    },
    defaultWidth: `wide`,
    argumentCallback: (e) => e - 1,
  }),
  month: B({
    values: {
      narrow: [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`],
      abbreviated: [
        `Jan`,
        `Feb`,
        `Mar`,
        `Apr`,
        `May`,
        `Jun`,
        `Jul`,
        `Aug`,
        `Sep`,
        `Oct`,
        `Nov`,
        `Dec`,
      ],
      wide: [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`,
      ],
    },
    defaultWidth: `wide`,
  }),
  day: B({
    values: {
      narrow: [`S`, `M`, `T`, `W`, `T`, `F`, `S`],
      short: [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
      abbreviated: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
      wide: [
        `Sunday`,
        `Monday`,
        `Tuesday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
      ],
    },
    defaultWidth: `wide`,
  }),
  dayPeriod: B({
    values: {
      narrow: {
        am: `a`,
        pm: `p`,
        midnight: `mi`,
        noon: `n`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
      abbreviated: {
        am: `AM`,
        pm: `PM`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
      wide: {
        am: `a.m.`,
        pm: `p.m.`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `morning`,
        afternoon: `afternoon`,
        evening: `evening`,
        night: `night`,
      },
    },
    defaultWidth: `wide`,
    formattingValues: {
      narrow: {
        am: `a`,
        pm: `p`,
        midnight: `mi`,
        noon: `n`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
      abbreviated: {
        am: `AM`,
        pm: `PM`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
      wide: {
        am: `a.m.`,
        pm: `p.m.`,
        midnight: `midnight`,
        noon: `noon`,
        morning: `in the morning`,
        afternoon: `in the afternoon`,
        evening: `in the evening`,
        night: `at night`,
      },
    },
    defaultFormattingWidth: `wide`,
  }),
}
function V(e) {
  return (t, n = {}) => {
    let r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      a = t.match(i)
    if (!a) return null
    let o = a[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      c = Array.isArray(s) ? je(s, (e) => e.test(o)) : Ae(s, (e) => e.test(o)),
      l
    ;((l = e.valueCallback ? e.valueCallback(c) : c),
      (l = n.valueCallback ? n.valueCallback(l) : l))
    let ee = t.slice(o.length)
    return { value: l, rest: ee }
  }
}
function Ae(e, t) {
  for (let n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n
}
function je(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n
}
function Me(e) {
  return (t, n = {}) => {
    let r = t.match(e.matchPattern)
    if (!r) return null
    let i = r[0],
      a = t.match(e.parsePattern)
    if (!a) return null
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0]
    o = n.valueCallback ? n.valueCallback(o) : o
    let s = t.slice(i.length)
    return { value: o, rest: s }
  }
}
var Ne = {
  code: `en-US`,
  formatDistance: Te,
  formatLong: Ee,
  formatRelative: Oe,
  localize: ke,
  match: {
    ordinalNumber: Me({
      matchPattern: /^(\d+)(th|st|nd|rd)?/i,
      parsePattern: /\d+/i,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: V({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: `any`,
    }),
    quarter: V({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: `any`,
      valueCallback: (e) => e + 1,
    }),
    month: V({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: `any`,
    }),
    day: V({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: `wide`,
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: `any`,
    }),
    dayPeriod: V({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: `any`,
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: `any`,
    }),
  },
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
}
function Pe(e, t) {
  let n = S(e, t?.in)
  return F(n, Ce(n)) + 1
}
function Fe(e, t) {
  let n = S(e, t?.in),
    r = A(n) - +I(n)
  return Math.round(r / _) + 1
}
function Ie(e, t) {
  let n = S(e, t?.in),
    r = n.getFullYear(),
    i = O(),
    a =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      i.firstWeekContainsDate ??
      i.locale?.options?.firstWeekContainsDate ??
      1,
    o = x(t?.in || e, 0)
  ;(o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0))
  let s = k(o, t),
    c = x(t?.in || e, 0)
  ;(c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0))
  let l = k(c, t)
  return +n >= +s ? r + 1 : +n >= +l ? r : r - 1
}
function Le(e, t) {
  let n = O(),
    r =
      t?.firstWeekContainsDate ??
      t?.locale?.options?.firstWeekContainsDate ??
      n.firstWeekContainsDate ??
      n.locale?.options?.firstWeekContainsDate ??
      1,
    i = Ie(e, t),
    a = x(t?.in || e, 0)
  return (a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), k(a, t))
}
function Re(e, t) {
  let n = S(e, t?.in),
    r = k(n, t) - +Le(n, t)
  return Math.round(r / _) + 1
}
function H(e, t) {
  return (e < 0 ? `-` : ``) + Math.abs(e).toString().padStart(t, `0`)
}
var U = {
    y(e, t) {
      let n = e.getFullYear(),
        r = n > 0 ? n : 1 - n
      return H(t === `yy` ? r % 100 : r, t.length)
    },
    M(e, t) {
      let n = e.getMonth()
      return t === `M` ? String(n + 1) : H(n + 1, 2)
    },
    d(e, t) {
      return H(e.getDate(), t.length)
    },
    a(e, t) {
      let n = e.getHours() / 12 >= 1 ? `pm` : `am`
      switch (t) {
        case `a`:
        case `aa`:
          return n.toUpperCase()
        case `aaa`:
          return n
        case `aaaaa`:
          return n[0]
        default:
          return n === `am` ? `a.m.` : `p.m.`
      }
    },
    h(e, t) {
      return H(e.getHours() % 12 || 12, t.length)
    },
    H(e, t) {
      return H(e.getHours(), t.length)
    },
    m(e, t) {
      return H(e.getMinutes(), t.length)
    },
    s(e, t) {
      return H(e.getSeconds(), t.length)
    },
    S(e, t) {
      let n = t.length,
        r = e.getMilliseconds()
      return H(Math.trunc(r * 10 ** (n - 3)), t.length)
    },
  },
  W = {
    am: `am`,
    pm: `pm`,
    midnight: `midnight`,
    noon: `noon`,
    morning: `morning`,
    afternoon: `afternoon`,
    evening: `evening`,
    night: `night`,
  },
  G = {
    G: function (e, t, n) {
      let r = +(e.getFullYear() > 0)
      switch (t) {
        case `G`:
        case `GG`:
        case `GGG`:
          return n.era(r, { width: `abbreviated` })
        case `GGGGG`:
          return n.era(r, { width: `narrow` })
        default:
          return n.era(r, { width: `wide` })
      }
    },
    y: function (e, t, n) {
      if (t === `yo`) {
        let t = e.getFullYear(),
          r = t > 0 ? t : 1 - t
        return n.ordinalNumber(r, { unit: `year` })
      }
      return U.y(e, t)
    },
    Y: function (e, t, n, r) {
      let i = Ie(e, r),
        a = i > 0 ? i : 1 - i
      return t === `YY`
        ? H(a % 100, 2)
        : t === `Yo`
          ? n.ordinalNumber(a, { unit: `year` })
          : H(a, t.length)
    },
    R: function (e, t) {
      return H(j(e), t.length)
    },
    u: function (e, t) {
      return H(e.getFullYear(), t.length)
    },
    Q: function (e, t, n) {
      let r = Math.ceil((e.getMonth() + 1) / 3)
      switch (t) {
        case `Q`:
          return String(r)
        case `QQ`:
          return H(r, 2)
        case `Qo`:
          return n.ordinalNumber(r, { unit: `quarter` })
        case `QQQ`:
          return n.quarter(r, { width: `abbreviated`, context: `formatting` })
        case `QQQQQ`:
          return n.quarter(r, { width: `narrow`, context: `formatting` })
        default:
          return n.quarter(r, { width: `wide`, context: `formatting` })
      }
    },
    q: function (e, t, n) {
      let r = Math.ceil((e.getMonth() + 1) / 3)
      switch (t) {
        case `q`:
          return String(r)
        case `qq`:
          return H(r, 2)
        case `qo`:
          return n.ordinalNumber(r, { unit: `quarter` })
        case `qqq`:
          return n.quarter(r, { width: `abbreviated`, context: `standalone` })
        case `qqqqq`:
          return n.quarter(r, { width: `narrow`, context: `standalone` })
        default:
          return n.quarter(r, { width: `wide`, context: `standalone` })
      }
    },
    M: function (e, t, n) {
      let r = e.getMonth()
      switch (t) {
        case `M`:
        case `MM`:
          return U.M(e, t)
        case `Mo`:
          return n.ordinalNumber(r + 1, { unit: `month` })
        case `MMM`:
          return n.month(r, { width: `abbreviated`, context: `formatting` })
        case `MMMMM`:
          return n.month(r, { width: `narrow`, context: `formatting` })
        default:
          return n.month(r, { width: `wide`, context: `formatting` })
      }
    },
    L: function (e, t, n) {
      let r = e.getMonth()
      switch (t) {
        case `L`:
          return String(r + 1)
        case `LL`:
          return H(r + 1, 2)
        case `Lo`:
          return n.ordinalNumber(r + 1, { unit: `month` })
        case `LLL`:
          return n.month(r, { width: `abbreviated`, context: `standalone` })
        case `LLLLL`:
          return n.month(r, { width: `narrow`, context: `standalone` })
        default:
          return n.month(r, { width: `wide`, context: `standalone` })
      }
    },
    w: function (e, t, n, r) {
      let i = Re(e, r)
      return t === `wo` ? n.ordinalNumber(i, { unit: `week` }) : H(i, t.length)
    },
    I: function (e, t, n) {
      let r = Fe(e)
      return t === `Io` ? n.ordinalNumber(r, { unit: `week` }) : H(r, t.length)
    },
    d: function (e, t, n) {
      return t === `do`
        ? n.ordinalNumber(e.getDate(), { unit: `date` })
        : U.d(e, t)
    },
    D: function (e, t, n) {
      let r = Pe(e)
      return t === `Do`
        ? n.ordinalNumber(r, { unit: `dayOfYear` })
        : H(r, t.length)
    },
    E: function (e, t, n) {
      let r = e.getDay()
      switch (t) {
        case `E`:
        case `EE`:
        case `EEE`:
          return n.day(r, { width: `abbreviated`, context: `formatting` })
        case `EEEEE`:
          return n.day(r, { width: `narrow`, context: `formatting` })
        case `EEEEEE`:
          return n.day(r, { width: `short`, context: `formatting` })
        default:
          return n.day(r, { width: `wide`, context: `formatting` })
      }
    },
    e: function (e, t, n, r) {
      let i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case `e`:
          return String(a)
        case `ee`:
          return H(a, 2)
        case `eo`:
          return n.ordinalNumber(a, { unit: `day` })
        case `eee`:
          return n.day(i, { width: `abbreviated`, context: `formatting` })
        case `eeeee`:
          return n.day(i, { width: `narrow`, context: `formatting` })
        case `eeeeee`:
          return n.day(i, { width: `short`, context: `formatting` })
        default:
          return n.day(i, { width: `wide`, context: `formatting` })
      }
    },
    c: function (e, t, n, r) {
      let i = e.getDay(),
        a = (i - r.weekStartsOn + 8) % 7 || 7
      switch (t) {
        case `c`:
          return String(a)
        case `cc`:
          return H(a, t.length)
        case `co`:
          return n.ordinalNumber(a, { unit: `day` })
        case `ccc`:
          return n.day(i, { width: `abbreviated`, context: `standalone` })
        case `ccccc`:
          return n.day(i, { width: `narrow`, context: `standalone` })
        case `cccccc`:
          return n.day(i, { width: `short`, context: `standalone` })
        default:
          return n.day(i, { width: `wide`, context: `standalone` })
      }
    },
    i: function (e, t, n) {
      let r = e.getDay(),
        i = r === 0 ? 7 : r
      switch (t) {
        case `i`:
          return String(i)
        case `ii`:
          return H(i, t.length)
        case `io`:
          return n.ordinalNumber(i, { unit: `day` })
        case `iii`:
          return n.day(r, { width: `abbreviated`, context: `formatting` })
        case `iiiii`:
          return n.day(r, { width: `narrow`, context: `formatting` })
        case `iiiiii`:
          return n.day(r, { width: `short`, context: `formatting` })
        default:
          return n.day(r, { width: `wide`, context: `formatting` })
      }
    },
    a: function (e, t, n) {
      let r = e.getHours() / 12 >= 1 ? `pm` : `am`
      switch (t) {
        case `a`:
        case `aa`:
          return n.dayPeriod(r, { width: `abbreviated`, context: `formatting` })
        case `aaa`:
          return n
            .dayPeriod(r, { width: `abbreviated`, context: `formatting` })
            .toLowerCase()
        case `aaaaa`:
          return n.dayPeriod(r, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(r, { width: `wide`, context: `formatting` })
      }
    },
    b: function (e, t, n) {
      let r = e.getHours(),
        i
      switch (
        ((i =
          r === 12 ? W.noon : r === 0 ? W.midnight : r / 12 >= 1 ? `pm` : `am`),
        t)
      ) {
        case `b`:
        case `bb`:
          return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` })
        case `bbb`:
          return n
            .dayPeriod(i, { width: `abbreviated`, context: `formatting` })
            .toLowerCase()
        case `bbbbb`:
          return n.dayPeriod(i, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(i, { width: `wide`, context: `formatting` })
      }
    },
    B: function (e, t, n) {
      let r = e.getHours(),
        i
      switch (
        ((i =
          r >= 17
            ? W.evening
            : r >= 12
              ? W.afternoon
              : r >= 4
                ? W.morning
                : W.night),
        t)
      ) {
        case `B`:
        case `BB`:
        case `BBB`:
          return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` })
        case `BBBBB`:
          return n.dayPeriod(i, { width: `narrow`, context: `formatting` })
        default:
          return n.dayPeriod(i, { width: `wide`, context: `formatting` })
      }
    },
    h: function (e, t, n) {
      if (t === `ho`) {
        let t = e.getHours() % 12
        return (t === 0 && (t = 12), n.ordinalNumber(t, { unit: `hour` }))
      }
      return U.h(e, t)
    },
    H: function (e, t, n) {
      return t === `Ho`
        ? n.ordinalNumber(e.getHours(), { unit: `hour` })
        : U.H(e, t)
    },
    K: function (e, t, n) {
      let r = e.getHours() % 12
      return t === `Ko` ? n.ordinalNumber(r, { unit: `hour` }) : H(r, t.length)
    },
    k: function (e, t, n) {
      let r = e.getHours()
      return (
        r === 0 && (r = 24),
        t === `ko` ? n.ordinalNumber(r, { unit: `hour` }) : H(r, t.length)
      )
    },
    m: function (e, t, n) {
      return t === `mo`
        ? n.ordinalNumber(e.getMinutes(), { unit: `minute` })
        : U.m(e, t)
    },
    s: function (e, t, n) {
      return t === `so`
        ? n.ordinalNumber(e.getSeconds(), { unit: `second` })
        : U.s(e, t)
    },
    S: function (e, t) {
      return U.S(e, t)
    },
    X: function (e, t, n) {
      let r = e.getTimezoneOffset()
      if (r === 0) return `Z`
      switch (t) {
        case `X`:
          return q(r)
        case `XXXX`:
        case `XX`:
          return J(r)
        default:
          return J(r, `:`)
      }
    },
    x: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `x`:
          return q(r)
        case `xxxx`:
        case `xx`:
          return J(r)
        default:
          return J(r, `:`)
      }
    },
    O: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `O`:
        case `OO`:
        case `OOO`:
          return `GMT` + K(r, `:`)
        default:
          return `GMT` + J(r, `:`)
      }
    },
    z: function (e, t, n) {
      let r = e.getTimezoneOffset()
      switch (t) {
        case `z`:
        case `zz`:
        case `zzz`:
          return `GMT` + K(r, `:`)
        default:
          return `GMT` + J(r, `:`)
      }
    },
    t: function (e, t, n) {
      return H(Math.trunc(e / 1e3), t.length)
    },
    T: function (e, t, n) {
      return H(+e, t.length)
    },
  }
function K(e, t = ``) {
  let n = e > 0 ? `-` : `+`,
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    a = r % 60
  return a === 0 ? n + String(i) : n + String(i) + t + H(a, 2)
}
function q(e, t) {
  return e % 60 == 0 ? (e > 0 ? `-` : `+`) + H(Math.abs(e) / 60, 2) : J(e, t)
}
function J(e, t = ``) {
  let n = e > 0 ? `-` : `+`,
    r = Math.abs(e),
    i = H(Math.trunc(r / 60), 2),
    a = H(r % 60, 2)
  return n + i + t + a
}
var ze = (e, t) => {
    switch (e) {
      case `P`:
        return t.date({ width: `short` })
      case `PP`:
        return t.date({ width: `medium` })
      case `PPP`:
        return t.date({ width: `long` })
      default:
        return t.date({ width: `full` })
    }
  },
  Be = (e, t) => {
    switch (e) {
      case `p`:
        return t.time({ width: `short` })
      case `pp`:
        return t.time({ width: `medium` })
      case `ppp`:
        return t.time({ width: `long` })
      default:
        return t.time({ width: `full` })
    }
  },
  Ve = {
    p: Be,
    P: (e, t) => {
      let n = e.match(/(P+)(p+)?/) || [],
        r = n[1],
        i = n[2]
      if (!i) return ze(e, t)
      let a
      switch (r) {
        case `P`:
          a = t.dateTime({ width: `short` })
          break
        case `PP`:
          a = t.dateTime({ width: `medium` })
          break
        case `PPP`:
          a = t.dateTime({ width: `long` })
          break
        default:
          a = t.dateTime({ width: `full` })
      }
      return a.replace(`{{date}}`, ze(r, t)).replace(`{{time}}`, Be(i, t))
    },
  },
  He = /^D+$/,
  Ue = /^Y+$/,
  We = [`D`, `DD`, `YY`, `YYYY`]
function Ge(e) {
  return He.test(e)
}
function Ke(e) {
  return Ue.test(e)
}
function qe(e, t, n) {
  let r = Je(e, t, n)
  if ((console.warn(r), We.includes(e))) throw RangeError(r)
}
function Je(e, t, n) {
  let r = e[0] === `Y` ? `years` : `days of the month`
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`
}
var Ye = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Xe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Ze = /^'([^]*?)'?$/,
  Qe = /''/g,
  $e = /[a-zA-Z]/
function et(e, t, n) {
  let r = O(),
    i = n?.locale ?? r.locale ?? Ne,
    a =
      n?.firstWeekContainsDate ??
      n?.locale?.options?.firstWeekContainsDate ??
      r.firstWeekContainsDate ??
      r.locale?.options?.firstWeekContainsDate ??
      1,
    o =
      n?.weekStartsOn ??
      n?.locale?.options?.weekStartsOn ??
      r.weekStartsOn ??
      r.locale?.options?.weekStartsOn ??
      0,
    s = S(e, n?.in)
  if (!R(s)) throw RangeError(`Invalid time value`)
  let c = t
    .match(Xe)
    .map((e) => {
      let t = e[0]
      if (t === `p` || t === `P`) {
        let n = Ve[t]
        return n(e, i.formatLong)
      }
      return e
    })
    .join(``)
    .match(Ye)
    .map((e) => {
      if (e === `''`) return { isToken: !1, value: `'` }
      let t = e[0]
      if (t === `'`) return { isToken: !1, value: tt(e) }
      if (G[t]) return { isToken: !0, value: e }
      if (t.match($e))
        throw RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            t +
            "`",
        )
      return { isToken: !1, value: e }
    })
  i.localize.preprocessor && (c = i.localize.preprocessor(s, c))
  let l = { firstWeekContainsDate: a, weekStartsOn: o, locale: i }
  return c
    .map((r) => {
      if (!r.isToken) return r.value
      let a = r.value
      ;((!n?.useAdditionalWeekYearTokens && Ke(a)) ||
        (!n?.useAdditionalDayOfYearTokens && Ge(a))) &&
        qe(a, t, String(e))
      let o = G[a[0]]
      return o(s, a, i.localize, l)
    })
    .join(``)
}
function tt(e) {
  let t = e.match(Ze)
  return t ? t[1].replace(Qe, `'`) : e
}
var Y = e(t(), 1),
  X = n(),
  nt = `h-12 w-full rounded-full border-[1.5px] bg-card px-5 text-[15px] text-navy placeholder:text-muted-foreground/70 transition-colors focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15 aria-[invalid=true]:border-destructive`
function rt({
  label: e,
  htmlFor: t,
  error: n,
  hint: r,
  className: a,
  children: o,
}) {
  return (0, X.jsxs)(`div`, {
    className: i(`flex flex-col gap-2`, a),
    children: [
      (0, X.jsx)(`label`, {
        htmlFor: t,
        className: `eyebrow text-navy`,
        children: e,
      }),
      o,
      n
        ? (0, X.jsx)(`p`, {
            className: `pl-4 text-xs font-medium text-destructive`,
            children: n,
          })
        : r
          ? (0, X.jsx)(`p`, {
              className: `pl-4 text-xs text-muted-foreground`,
              children: r,
            })
          : null,
    ],
  })
}
var Z = (0, Y.forwardRef)(
  (
    {
      label: e,
      id: t,
      error: n,
      hint: r,
      wrapperClassName: a,
      className: o,
      ...s
    },
    c,
  ) =>
    (0, X.jsx)(rt, {
      label: e,
      htmlFor: t,
      error: n,
      hint: r,
      className: a,
      children: (0, X.jsx)(`input`, {
        ref: c,
        id: t,
        "aria-invalid": n ? !0 : void 0,
        className: i(nt, o),
        ...s,
      }),
    }),
)
Z.displayName = `InputField`
function it({
  label: e,
  id: t,
  error: n,
  wrapperClassName: r,
  options: a,
  className: o,
  ...s
}) {
  return (0, X.jsx)(rt, {
    label: e,
    htmlFor: t,
    error: n,
    className: r,
    children: (0, X.jsxs)(`div`, {
      className: `relative`,
      children: [
        (0, X.jsx)(`select`, {
          id: t,
          className: i(nt, `appearance-none pr-11`, o),
          ...s,
          children: a.map((e) =>
            (0, X.jsx)(
              `option`,
              { value: e.value, children: e.label },
              e.value,
            ),
          ),
        }),
        (0, X.jsx)(l, {
          className: `pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-navy/70`,
        }),
      ],
    }),
  })
}
var at = {
    email: ``,
    phone: ``,
    marketing: !0,
    firstName: ``,
    lastName: ``,
    address: ``,
    apt: ``,
    city: ``,
    state: ``,
    zip: ``,
    country: `USA`,
    cardName: ``,
    cardNumber: ``,
    exp: ``,
    cvv: ``,
    billingSame: !0,
  },
  ot = [
    { value: `USA`, label: `United States` },
    { value: `CAN`, label: `Canada` },
  ],
  st = (e) =>
    e
      .replace(/\D/g, ``)
      .slice(0, 16)
      .replace(/(.{4})/g, `$1 `)
      .trim(),
  ct = (e) => {
    let t = e.replace(/\D/g, ``).slice(0, 4)
    return t.length > 2 ? `${t.slice(0, 2)}/${t.slice(2)}` : t
  }
function lt(e, t) {
  let n = {}
  if (
    (/^\S+@\S+\.\S+$/.test(e.email) || (n.email = `Enter a valid email`),
    e.phone.replace(/\D/g, ``).length < 10 &&
      (n.phone = `Enter a 10-digit phone number`),
    e.firstName.trim() || (n.firstName = `Required`),
    e.lastName.trim() || (n.lastName = `Required`),
    e.address.trim() || (n.address = `Required`),
    e.city.trim() || (n.city = `Required`),
    e.state.trim() || (n.state = `Required`),
    e.zip.trim().length < 5 && (n.zip = `Enter a valid ZIP code`),
    t === `card`)
  ) {
    ;(e.cardName.trim() || (n.cardName = `Required`),
      e.cardNumber.replace(/\s/g, ``).length < 15 &&
        (n.cardNumber = `Enter a valid card number`))
    let [t, r] = e.exp.split(`/`)
    ;((!t || !r || Number(t) < 1 || Number(t) > 12 || r.length !== 2) &&
      (n.exp = `MM/YY`),
      /^\d{3,4}$/.test(e.cvv) || (n.cvv = `3–4 digits`))
  }
  return n
}
function ut() {
  let { lines: e, ready: t, update: n, remove: s, add: c, clear: l } = de(),
    ae = o(),
    [m, g] = (0, Y.useState)(at),
    [_, v] = (0, Y.useState)({}),
    [y, b] = (0, Y.useState)(`standard`),
    [x, S] = (0, Y.useState)(`card`),
    [C, w] = (0, Y.useState)(``),
    [T, D] = (0, Y.useState)(null),
    [O, k] = (0, Y.useState)(!1),
    [A, j] = (0, Y.useState)(null)
  ;(0, Y.useEffect)(() => {
    let e = new Date(),
      t = (e) => et(e, `EEE, MMM d`)
    j({
      standard: `${t(E(e, u.standardShippingDays[0]))} – ${t(E(e, u.standardShippingDays[1]))}`,
      express: `${t(E(e, u.expressShippingDays[0]))} – ${t(E(e, u.expressShippingDays[1]))}`,
    })
  }, [])
  let M = (0, Y.useMemo)(() => se(e, y, T), [e, y, T]),
    N = (e, t) => {
      ;(g((n) => ({ ...n, [e]: t })),
        _[e] &&
          v((t) => {
            let n = { ...t }
            return (delete n[e], n)
          }))
    },
    P = oe(u.checkoutUpsell.slug),
    F = P ? f(P, u.checkoutUpsell.variantId) : void 0,
    I = e.some((e) => e.slug === u.checkoutUpsell.slug),
    L = e.some((e) => e.subscribe),
    R = M.subtotal * u.subscribeDiscount - M.subscribeSavings
  return t && e.length === 0
    ? (0, X.jsx)(mt, {})
    : (0, X.jsx)(`div`, {
        className: `bg-cream`,
        children: (0, X.jsxs)(`div`, {
          className: `container-site py-8 md:py-12`,
          children: [
            (0, X.jsx)(dt, {}),
            (0, X.jsxs)(`form`, {
              onSubmit: (t) => {
                t.preventDefault()
                let n = lt(m, x)
                v(n)
                let r = Object.keys(n)[0]
                if (r) {
                  ;(document.getElementById(`co-${r}`)?.focus(),
                    a.error(`Please check the highlighted fields`))
                  return
                }
                k(!0)
                let i = {
                  number: ge(),
                  email: m.email,
                  firstName: m.firstName,
                  address: `${m.address}${m.apt ? `, ${m.apt}` : ``}, ${m.city}, ${m.state} ${m.zip}`,
                  shippingMethod: y,
                  arrival: A ? A[y] : ``,
                  lines: e,
                  totals: M,
                  paymentMethod: x,
                  ...(x === `card`
                    ? { cardLast4: m.cardNumber.replace(/\s/g, ``).slice(-4) }
                    : {}),
                }
                window.setTimeout(() => {
                  ;(he(i), l(), ae({ to: `/order-confirmed` }))
                }, 900)
              },
              noValidate: !0,
              className: `mt-8 grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-12`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `space-y-6`,
                  children: [
                    (0, X.jsxs)(Q, {
                      children: [
                        (0, X.jsx)(`p`, {
                          className: `eyebrow text-center text-muted-foreground`,
                          children: `Express checkout`,
                        }),
                        (0, X.jsx)(`div`, {
                          className: `mt-4 grid grid-cols-3 gap-3`,
                          children: [`PayPal`, `Apple Pay`, `Google Pay`].map(
                            (e) =>
                              (0, X.jsx)(
                                `button`,
                                {
                                  type: `button`,
                                  onClick: () =>
                                    a.info(
                                      `${e} will be available once payments are connected.`,
                                    ),
                                  className: `h-12 rounded-full border-[1.5px] bg-card text-sm font-bold text-navy transition-colors hover:border-navy`,
                                  children: e,
                                },
                                e,
                              ),
                          ),
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground`,
                          children: [
                            (0, X.jsx)(`span`, {
                              className: `h-px flex-1 bg-border`,
                            }),
                            ` or pay below `,
                            (0, X.jsx)(`span`, {
                              className: `h-px flex-1 bg-border`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsxs)(Q, {
                      step: 1,
                      title: `Contact`,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `grid gap-5 sm:grid-cols-2`,
                          children: [
                            (0, X.jsx)(Z, {
                              id: `co-email`,
                              label: `E-mail`,
                              type: `email`,
                              autoComplete: `email`,
                              placeholder: `you@example.com`,
                              value: m.email,
                              onChange: (e) => N(`email`, e.target.value),
                              error: _.email,
                            }),
                            (0, X.jsx)(Z, {
                              id: `co-phone`,
                              label: `Phone`,
                              type: `tel`,
                              autoComplete: `tel`,
                              placeholder: `219 - 141 - 1082`,
                              value: m.phone,
                              onChange: (e) => N(`phone`, e.target.value),
                              error: _.phone,
                              hint: `For delivery updates only`,
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`label`, {
                          className: `mt-5 flex cursor-pointer items-center gap-3 text-sm text-navy`,
                          children: [
                            (0, X.jsx)(`input`, {
                              type: `checkbox`,
                              checked: m.marketing,
                              onChange: (e) => N(`marketing`, e.target.checked),
                              className: `size-4 accent-teal`,
                            }),
                            `Email me coupons, new recipes and pet health tips`,
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsx)(Q, {
                      step: 2,
                      title: `Delivery address`,
                      children: (0, X.jsxs)(`div`, {
                        className: `grid gap-5 sm:grid-cols-2`,
                        children: [
                          (0, X.jsx)(Z, {
                            id: `co-firstName`,
                            label: `First name`,
                            autoComplete: `given-name`,
                            placeholder: `Tim`,
                            value: m.firstName,
                            onChange: (e) => N(`firstName`, e.target.value),
                            error: _.firstName,
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-lastName`,
                            label: `Last name`,
                            autoComplete: `family-name`,
                            placeholder: `Panov`,
                            value: m.lastName,
                            onChange: (e) => N(`lastName`, e.target.value),
                            error: _.lastName,
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-address`,
                            wrapperClassName: `sm:col-span-2`,
                            label: `Address`,
                            autoComplete: `address-line1`,
                            placeholder: `30 Valley Lane`,
                            value: m.address,
                            onChange: (e) => N(`address`, e.target.value),
                            error: _.address,
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-apt`,
                            label: `Apt, suite (optional)`,
                            autoComplete: `address-line2`,
                            placeholder: `Apt 4B`,
                            value: m.apt,
                            onChange: (e) => N(`apt`, e.target.value),
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-city`,
                            label: `City`,
                            autoComplete: `address-level2`,
                            placeholder: `Los Angeles`,
                            value: m.city,
                            onChange: (e) => N(`city`, e.target.value),
                            error: _.city,
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-state`,
                            label: `State`,
                            autoComplete: `address-level1`,
                            placeholder: `CA`,
                            value: m.state,
                            onChange: (e) => N(`state`, e.target.value),
                            error: _.state,
                          }),
                          (0, X.jsx)(Z, {
                            id: `co-zip`,
                            label: `ZIP code`,
                            autoComplete: `postal-code`,
                            inputMode: `numeric`,
                            placeholder: `90006`,
                            value: m.zip,
                            onChange: (e) => N(`zip`, e.target.value),
                            error: _.zip,
                          }),
                          (0, X.jsx)(it, {
                            id: `co-country`,
                            wrapperClassName: `sm:col-span-2`,
                            label: `Country`,
                            options: ot,
                            value: m.country,
                            onChange: (e) => N(`country`, e.target.value),
                          }),
                        ],
                      }),
                    }),
                    (0, X.jsx)(Q, {
                      step: 3,
                      title: `Delivery method`,
                      children: (0, X.jsxs)(`div`, {
                        className: `grid gap-3 sm:grid-cols-2`,
                        children: [
                          (0, X.jsx)(ft, {
                            active: y === `standard`,
                            onSelect: () => b(`standard`),
                            icon: (0, X.jsx)(ue, { className: `size-5` }),
                            title:
                              M.remainingForFreeShipping > 0
                                ? `Standard Delivery`
                                : `Free Delivery`,
                            price:
                              M.remainingForFreeShipping > 0
                                ? p(u.standardShippingPrice)
                                : `FREE`,
                            detail:
                              A?.standard ??
                              `${u.standardShippingDays[0]}–${u.standardShippingDays[1]} business days`,
                            note:
                              M.remainingForFreeShipping > 0
                                ? `Free over ${p(u.freeShippingThreshold)}`
                                : void 0,
                          }),
                          (0, X.jsx)(ft, {
                            active: y === `express`,
                            onSelect: () => b(`express`),
                            icon: (0, X.jsx)(Se, { className: `size-5` }),
                            title: `Express Delivery`,
                            price: p(u.expressShippingPrice),
                            detail:
                              A?.express ??
                              `${u.expressShippingDays[0]}–${u.expressShippingDays[1]} business days`,
                          }),
                        ],
                      }),
                    }),
                    (0, X.jsxs)(Q, {
                      step: 4,
                      title: `Payment`,
                      aside: (0, X.jsx)(pt, {}),
                      children: [
                        (0, X.jsx)(`div`, {
                          className: `inline-flex rounded-full border-[1.5px] bg-card p-1`,
                          role: `tablist`,
                          children: [
                            [
                              `card`,
                              `Credit Card`,
                              (0, X.jsx)(ve, { className: `size-4` }, `c`),
                            ],
                            [`paypal`, `PayPal`, null],
                          ].map(([e, t, n]) =>
                            (0, X.jsxs)(
                              `button`,
                              {
                                type: `button`,
                                role: `tab`,
                                "aria-selected": x === e,
                                onClick: () => S(e),
                                className: i(
                                  `flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all`,
                                  x === e
                                    ? `bg-navy text-navy-foreground`
                                    : `text-navy/70 hover:text-navy`,
                                ),
                                children: [n, t],
                              },
                              e,
                            ),
                          ),
                        }),
                        x === `card`
                          ? (0, X.jsxs)(`div`, {
                              className: `mt-6 grid gap-5 sm:grid-cols-6`,
                              children: [
                                (0, X.jsx)(Z, {
                                  id: `co-cardName`,
                                  wrapperClassName: `sm:col-span-6`,
                                  label: `Cardholder name`,
                                  autoComplete: `cc-name`,
                                  value: m.cardName,
                                  onChange: (e) =>
                                    N(`cardName`, e.target.value),
                                  error: _.cardName,
                                }),
                                (0, X.jsx)(Z, {
                                  id: `co-cardNumber`,
                                  wrapperClassName: `sm:col-span-6`,
                                  label: `Card number`,
                                  autoComplete: `cc-number`,
                                  inputMode: `numeric`,
                                  placeholder: `XXXX XXXX XXXX XXXX`,
                                  value: m.cardNumber,
                                  onChange: (e) =>
                                    N(`cardNumber`, st(e.target.value)),
                                  error: _.cardNumber,
                                }),
                                (0, X.jsx)(Z, {
                                  id: `co-exp`,
                                  wrapperClassName: `sm:col-span-3`,
                                  label: `Exp date`,
                                  autoComplete: `cc-exp`,
                                  inputMode: `numeric`,
                                  placeholder: `09/28`,
                                  value: m.exp,
                                  onChange: (e) => N(`exp`, ct(e.target.value)),
                                  error: _.exp,
                                }),
                                (0, X.jsx)(Z, {
                                  id: `co-cvv`,
                                  wrapperClassName: `sm:col-span-3`,
                                  label: `CVV`,
                                  autoComplete: `cc-csc`,
                                  inputMode: `numeric`,
                                  placeholder: `812`,
                                  maxLength: 4,
                                  value: m.cvv,
                                  onChange: (e) =>
                                    N(`cvv`, e.target.value.replace(/\D/g, ``)),
                                  error: _.cvv,
                                }),
                                (0, X.jsxs)(`label`, {
                                  className: `flex cursor-pointer items-center gap-3 text-sm text-navy sm:col-span-6`,
                                  children: [
                                    (0, X.jsx)(`input`, {
                                      type: `checkbox`,
                                      checked: m.billingSame,
                                      onChange: (e) =>
                                        N(`billingSame`, e.target.checked),
                                      className: `size-4 accent-teal`,
                                    }),
                                    `Billing address is the same as delivery`,
                                  ],
                                }),
                              ],
                            })
                          : (0, X.jsx)(`p`, {
                              className: `mt-6 rounded-2xl bg-accent p-4 text-sm text-navy`,
                              children: `After you place your order you'll be sent to PayPal to complete your purchase securely.`,
                            }),
                        (0, X.jsxs)(`p`, {
                          className: `mt-5 flex items-center gap-2 text-xs text-muted-foreground`,
                          children: [
                            (0, X.jsx)(be, { className: `size-3.5` }),
                            ` Your payment details are encrypted and never stored on our servers.`,
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsx)(`div`, {
                      className: `flex items-center justify-between lg:hidden`,
                      children: (0, X.jsxs)(r, {
                        to: `/products`,
                        className: `flex items-center gap-1 font-semibold text-sky`,
                        children: [
                          (0, X.jsx)(h, { className: `size-4` }),
                          ` Back`,
                        ],
                      }),
                    }),
                  ],
                }),
                (0, X.jsxs)(`aside`, {
                  className: `lg:sticky lg:top-28 lg:self-start`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `rounded-3xl border-[1.5px] bg-card p-6 md:p-7`,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, X.jsx)(`h2`, {
                              className: `text-xl font-bold text-navy`,
                              children: `Order summary`,
                            }),
                            (0, X.jsxs)(`span`, {
                              className: `text-sm text-muted-foreground`,
                              children: [M.itemCount, ` items`],
                            }),
                          ],
                        }),
                        (0, X.jsx)(`div`, {
                          className: `mt-4`,
                          children: (0, X.jsx)(pe, {
                            subtotal: M.subtotal,
                            remaining: M.remainingForFreeShipping,
                          }),
                        }),
                        (0, X.jsx)(`ul`, {
                          className: `mt-5 divide-y`,
                          children: e.map((e, t) => {
                            let r = oe(e.slug),
                              a = r ? f(r, e.variantId) : void 0
                            return !r || !a
                              ? null
                              : (0, X.jsxs)(
                                  `li`,
                                  {
                                    className: `py-4`,
                                    children: [
                                      (0, X.jsxs)(`div`, {
                                        className: `flex gap-3`,
                                        children: [
                                          (0, X.jsxs)(`div`, {
                                            className: `relative grid size-16 shrink-0 place-items-center rounded-xl border bg-card p-1`,
                                            children: [
                                              (0, X.jsx)(`img`, {
                                                src: a.images[0],
                                                alt: ``,
                                                className: `max-h-full`,
                                              }),
                                              (0, X.jsx)(`span`, {
                                                className: `absolute -right-2 -top-2 grid size-5 place-items-center rounded-full bg-navy text-[10px] font-bold text-navy-foreground`,
                                                children: e.qty,
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(`div`, {
                                            className: `min-w-0 flex-1`,
                                            children: [
                                              (0, X.jsx)(`p`, {
                                                className: `text-sm font-semibold leading-snug text-navy`,
                                                children: r.name,
                                              }),
                                              (0, X.jsx)(`p`, {
                                                className: `text-xs text-muted-foreground`,
                                                children: a.label,
                                              }),
                                              (0, X.jsxs)(`div`, {
                                                className: `mt-2 flex items-center gap-2`,
                                                children: [
                                                  (0, X.jsxs)(`div`, {
                                                    className: `flex items-center rounded-full border`,
                                                    children: [
                                                      (0, X.jsx)(`button`, {
                                                        type: `button`,
                                                        className: `grid size-7 place-items-center`,
                                                        onClick: () =>
                                                          n(t, {
                                                            qty: e.qty - 1,
                                                          }),
                                                        "aria-label": `Decrease quantity`,
                                                        children: (0, X.jsx)(
                                                          ee,
                                                          {
                                                            className: `size-3`,
                                                          },
                                                        ),
                                                      }),
                                                      (0, X.jsx)(`span`, {
                                                        className: `w-5 text-center text-xs font-bold`,
                                                        children: e.qty,
                                                      }),
                                                      (0, X.jsx)(`button`, {
                                                        type: `button`,
                                                        className: `grid size-7 place-items-center`,
                                                        onClick: () =>
                                                          n(t, {
                                                            qty: e.qty + 1,
                                                          }),
                                                        "aria-label": `Increase quantity`,
                                                        children: (0, X.jsx)(
                                                          me,
                                                          {
                                                            className: `size-3`,
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, X.jsx)(`button`, {
                                                    type: `button`,
                                                    onClick: () => s(t),
                                                    className: `text-muted-foreground hover:text-destructive`,
                                                    "aria-label": `Remove ${r.name}`,
                                                    children: (0, X.jsx)(le, {
                                                      className: `size-3.5`,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, X.jsxs)(`div`, {
                                            className: `text-right`,
                                            children: [
                                              (0, X.jsx)(`p`, {
                                                className: `text-sm font-bold text-navy`,
                                                children: p(
                                                  ce(e) *
                                                    (e.subscribe
                                                      ? 1 - u.subscribeDiscount
                                                      : 1),
                                                ),
                                              }),
                                              e.subscribe &&
                                                (0, X.jsx)(`p`, {
                                                  className: `text-xs text-muted-foreground line-through`,
                                                  children: p(ce(e)),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, X.jsxs)(`label`, {
                                        className: i(
                                          `mt-3 flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-xs`,
                                          e.subscribe
                                            ? `bg-accent text-navy`
                                            : `bg-muted text-navy/80`,
                                        ),
                                        children: [
                                          (0, X.jsx)(`input`, {
                                            type: `checkbox`,
                                            checked: e.subscribe,
                                            onChange: (e) =>
                                              n(t, {
                                                subscribe: e.target.checked,
                                              }),
                                            className: `accent-teal`,
                                          }),
                                          (0, X.jsx)(re, {
                                            className: `size-3.5 text-teal`,
                                          }),
                                          (0, X.jsxs)(`span`, {
                                            className: `flex-1`,
                                            children: [
                                              `Subscribe & save `,
                                              Math.round(
                                                u.subscribeDiscount * 100,
                                              ),
                                              `%`,
                                            ],
                                          }),
                                          e.subscribe &&
                                            (0, X.jsx)(`select`, {
                                              value: e.frequencyWeeks,
                                              onChange: (e) =>
                                                n(t, {
                                                  frequencyWeeks: Number(
                                                    e.target.value,
                                                  ),
                                                }),
                                              className: `rounded-full border bg-card px-2 py-0.5 text-xs font-semibold`,
                                              "aria-label": `Autoship frequency`,
                                              children:
                                                u.subscribeFrequencies.map(
                                                  (e) =>
                                                    (0, X.jsxs)(
                                                      `option`,
                                                      {
                                                        value: e,
                                                        children: [
                                                          `every `,
                                                          e,
                                                          ` wks`,
                                                        ],
                                                      },
                                                      e,
                                                    ),
                                                ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  `${e.slug}-${e.variantId}-${e.subscribe}`,
                                )
                          }),
                        }),
                        P &&
                          F &&
                          !I &&
                          (0, X.jsxs)(`div`, {
                            className: `mt-2 flex items-center gap-3 rounded-2xl border-2 border-dashed border-sun bg-sun/10 p-3`,
                            children: [
                              (0, X.jsx)(`img`, {
                                src: F.images[0],
                                alt: ``,
                                className: `size-14 rounded-lg bg-card object-contain`,
                              }),
                              (0, X.jsxs)(`div`, {
                                className: `flex-1`,
                                children: [
                                  (0, X.jsxs)(`p`, {
                                    className: `flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-heart`,
                                    children: [
                                      (0, X.jsx)(ye, { className: `size-3.5` }),
                                      ` Add to your order`,
                                    ],
                                  }),
                                  (0, X.jsx)(`p`, {
                                    className: `text-sm font-semibold leading-snug text-navy`,
                                    children: P.name,
                                  }),
                                  (0, X.jsx)(`p`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: p(F.price),
                                  }),
                                ],
                              }),
                              (0, X.jsx)(d, {
                                type: `button`,
                                size: `sm`,
                                variant: `navy`,
                                onClick: () =>
                                  c({
                                    slug: P.slug,
                                    variantId: F.id,
                                    subscribe: !1,
                                    frequencyWeeks: 4,
                                  }),
                                children: `Add`,
                              }),
                            ],
                          }),
                        (0, X.jsxs)(`div`, {
                          className: `mt-5 flex gap-2`,
                          children: [
                            (0, X.jsxs)(`div`, {
                              className: `relative flex-1`,
                              children: [
                                (0, X.jsx)(xe, {
                                  className: `absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground`,
                                }),
                                (0, X.jsx)(`input`, {
                                  value: C,
                                  onChange: (e) => w(e.target.value),
                                  placeholder: `Promo code`,
                                  "aria-label": `Promo code`,
                                  className: `h-11 w-full rounded-full border-[1.5px] bg-card pl-10 pr-4 text-sm uppercase text-navy placeholder:normal-case focus:border-sky focus:outline-none`,
                                }),
                              ],
                            }),
                            (0, X.jsx)(d, {
                              type: `button`,
                              variant: `soft`,
                              className: `h-11 px-5`,
                              onClick: () => {
                                fe(C) > 0
                                  ? (D(C.trim().toUpperCase()),
                                    a.success(
                                      `Code ${C.trim().toUpperCase()} applied`,
                                    ))
                                  : a.error(`That code isn't valid`)
                              },
                              children: `Apply`,
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`dl`, {
                          className: `mt-5 space-y-2.5 border-t pt-5 text-sm`,
                          children: [
                            (0, X.jsx)($, {
                              label: `Subtotal`,
                              value: p(M.subtotal),
                            }),
                            M.subscribeSavings > 0 &&
                              (0, X.jsx)($, {
                                label: `Subscribe & Save`,
                                value: `−${p(M.subscribeSavings)}`,
                                positive: !0,
                              }),
                            M.promoDiscount > 0 &&
                              (0, X.jsx)($, {
                                label: (0, X.jsxs)(`span`, {
                                  className: `flex items-center gap-2`,
                                  children: [
                                    `Promo `,
                                    T,
                                    (0, X.jsx)(`button`, {
                                      type: `button`,
                                      className: `text-xs text-sky underline`,
                                      onClick: () => D(null),
                                      children: `remove`,
                                    }),
                                  ],
                                }),
                                value: `−${p(M.promoDiscount)}`,
                                positive: !0,
                              }),
                            (0, X.jsx)($, {
                              label:
                                y === `express`
                                  ? `Express delivery`
                                  : `Delivery`,
                              value: M.shipping === 0 ? `FREE` : p(M.shipping),
                              positive: M.shipping === 0,
                            }),
                            (0, X.jsx)($, {
                              label: `Estimated tax`,
                              value: `Calculated at shipping`,
                              muted: !0,
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `flex items-baseline justify-between border-t pt-4`,
                              children: [
                                (0, X.jsx)(`dt`, {
                                  className: `text-base font-bold text-navy`,
                                  children: `Total`,
                                }),
                                (0, X.jsx)(`dd`, {
                                  className: `text-2xl font-bold text-navy`,
                                  children: p(M.total),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !L &&
                          R > 0.5 &&
                          (0, X.jsxs)(`p`, {
                            className: `mt-3 rounded-xl bg-accent px-3 py-2 text-xs text-navy`,
                            children: [
                              `💡 Tick `,
                              (0, X.jsx)(`strong`, {
                                children: `Subscribe & save`,
                              }),
                              ` on your items to save `,
                              p(R),
                              ` on this order.`,
                            ],
                          }),
                        (0, X.jsxs)(`div`, {
                          className: `mt-6 flex items-center justify-between gap-4`,
                          children: [
                            (0, X.jsxs)(r, {
                              to: `/products`,
                              className: `hidden items-center gap-1 font-semibold text-sky lg:flex`,
                              children: [
                                (0, X.jsx)(h, { className: `size-4` }),
                                ` Back`,
                              ],
                            }),
                            (0, X.jsxs)(d, {
                              type: `submit`,
                              variant: `sky`,
                              size: `cta`,
                              className: `flex-1`,
                              disabled: O || !t,
                              children: [
                                O ? `Placing order…` : `Proceed to Checkout`,
                                !O && (0, X.jsx)(te, {}),
                              ],
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`ul`, {
                          className: `mt-6 grid grid-cols-3 gap-2 border-t pt-5 text-center text-[11px] font-semibold text-navy/80`,
                          children: [
                            (0, X.jsxs)(`li`, {
                              className: `flex flex-col items-center gap-1.5`,
                              children: [
                                (0, X.jsx)(ie, {
                                  className: `size-5 text-teal`,
                                }),
                                ` Secure SSL checkout`,
                              ],
                            }),
                            (0, X.jsxs)(`li`, {
                              className: `flex flex-col items-center gap-1.5`,
                              children: [
                                (0, X.jsx)(ne, {
                                  className: `size-5 text-teal`,
                                }),
                                ` Non-GMO ingredients`,
                              ],
                            }),
                            (0, X.jsxs)(`li`, {
                              className: `flex flex-col items-center gap-1.5`,
                              children: [
                                (0, X.jsx)(_e, {
                                  className: `size-5 text-teal`,
                                }),
                                ` Founded by Burt Ward`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`figure`, {
                      className: `mt-5 rounded-3xl bg-navy p-5 text-navy-foreground`,
                      children: [
                        (0, X.jsx)(`blockquote`, {
                          className: `text-sm leading-relaxed`,
                          children: `"My male lived to be 18 years old eating this food and never went to the vet except for his shots."`,
                        }),
                        (0, X.jsx)(`figcaption`, {
                          className: `eyebrow mt-3 text-navy-foreground/60`,
                          children: `Peach · verified customer review`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
}
function dt() {
  let e = [`Cart`, `Details`, `Payment`, `Confirmation`]
  return (0, X.jsx)(`ol`, {
    className: `mx-auto flex max-w-2xl items-center`,
    "aria-label": `Checkout progress`,
    children: e.map((t, n) =>
      (0, X.jsxs)(
        `li`,
        {
          className: i(`flex items-center`, n < e.length - 1 && `flex-1`),
          children: [
            (0, X.jsxs)(`span`, {
              className: `flex flex-col items-center gap-1.5`,
              children: [
                (0, X.jsx)(`span`, {
                  className: i(
                    `grid size-8 place-items-center rounded-full text-xs font-bold`,
                    n < 1
                      ? `bg-teal text-teal-foreground`
                      : n === 1
                        ? `bg-navy text-navy-foreground ring-4 ring-navy/15`
                        : `bg-muted text-muted-foreground`,
                  ),
                  children:
                    n < 1 ? (0, X.jsx)(m, { className: `size-4` }) : n + 1,
                }),
                (0, X.jsx)(`span`, {
                  className: i(
                    `text-xs font-semibold`,
                    n <= 1 ? `text-navy` : `text-muted-foreground`,
                  ),
                  children: t,
                }),
              ],
            }),
            n < e.length - 1 &&
              (0, X.jsx)(`span`, {
                className: i(
                  `mx-2 mb-5 h-0.5 flex-1 rounded`,
                  n < 1 ? `bg-teal` : `bg-border`,
                ),
              }),
          ],
        },
        t,
      ),
    ),
  })
}
function Q({ step: e, title: t, aside: n, children: r }) {
  return (0, X.jsxs)(`section`, {
    className: `rounded-3xl border-[1.5px] bg-card p-6 md:p-8`,
    children: [
      t &&
        (0, X.jsxs)(`div`, {
          className: `mb-6 flex items-center justify-between gap-4`,
          children: [
            (0, X.jsxs)(`h2`, {
              className: `flex items-center gap-3 text-2xl font-bold text-navy`,
              children: [
                e &&
                  (0, X.jsx)(`span`, {
                    className: `grid size-8 place-items-center rounded-full bg-teal text-sm text-teal-foreground`,
                    children: e,
                  }),
                t,
              ],
            }),
            n,
          ],
        }),
      r,
    ],
  })
}
function ft({
  active: e,
  onSelect: t,
  icon: n,
  title: r,
  price: a,
  detail: o,
  note: s,
}) {
  return (0, X.jsxs)(`button`, {
    type: `button`,
    onClick: t,
    "aria-pressed": e,
    className: i(
      `flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all`,
      e
        ? `border-navy bg-navy text-navy-foreground shadow-card`
        : `border-border bg-card text-navy hover:border-navy/40`,
    ),
    children: [
      (0, X.jsx)(`span`, {
        className: i(
          `grid size-10 shrink-0 place-items-center rounded-full`,
          e ? `bg-navy-foreground/15` : `bg-accent text-teal`,
        ),
        children: n,
      }),
      (0, X.jsxs)(`span`, {
        className: `flex-1`,
        children: [
          (0, X.jsxs)(`span`, {
            className: `flex items-center justify-between gap-2`,
            children: [
              (0, X.jsx)(`span`, { className: `font-bold`, children: r }),
              (0, X.jsx)(`span`, {
                className: i(
                  `rounded-full px-2 py-0.5 text-xs font-bold`,
                  e ? `bg-navy-foreground text-navy` : `bg-muted`,
                ),
                children: a,
              }),
            ],
          }),
          (0, X.jsxs)(`span`, {
            className: i(
              `mt-1 block text-xs`,
              e ? `text-navy-foreground/80` : `text-muted-foreground`,
            ),
            children: [`Arrives `, o],
          }),
          s &&
            (0, X.jsx)(`span`, {
              className: i(
                `mt-0.5 block text-xs`,
                e ? `text-navy-foreground/80` : `text-muted-foreground`,
              ),
              children: s,
            }),
        ],
      }),
    ],
  })
}
function pt() {
  return (0, X.jsxs)(`span`, {
    className: `flex items-center gap-1.5 text-[10px] font-black`,
    children: [
      (0, X.jsx)(`span`, {
        className: `rounded border px-1.5 py-0.5 italic text-navy`,
        children: `VISA`,
      }),
      (0, X.jsxs)(`span`, {
        className: `flex`,
        children: [
          (0, X.jsx)(`span`, { className: `size-4 rounded-full bg-heart` }),
          (0, X.jsx)(`span`, {
            className: `-ml-1.5 size-4 rounded-full bg-sun/90`,
          }),
        ],
      }),
      (0, X.jsx)(`span`, {
        className: `rounded border px-1.5 py-0.5 italic text-sky`,
        children: `PayPal`,
      }),
    ],
  })
}
function $({ label: e, value: t, positive: n, muted: r }) {
  return (0, X.jsxs)(`div`, {
    className: `flex justify-between gap-4`,
    children: [
      (0, X.jsx)(`dt`, { className: `text-navy/80`, children: e }),
      (0, X.jsx)(`dd`, {
        className: i(
          `font-semibold`,
          n
            ? `text-success`
            : r
              ? `text-xs font-normal text-muted-foreground`
              : `text-navy`,
        ),
        children: t,
      }),
    ],
  })
}
function mt() {
  let e = ae.slice(0, 3)
  return (0, X.jsxs)(`div`, {
    className: `container-site py-20 text-center`,
    children: [
      (0, X.jsx)(`h1`, {
        className: `text-3xl font-bold text-navy md:text-4xl`,
        children: `Your cart is empty`,
      }),
      (0, X.jsx)(`p`, {
        className: `mt-3 text-muted-foreground`,
        children: `Pick a recipe and come back to check out.`,
      }),
      (0, X.jsx)(d, {
        asChild: !0,
        variant: `sky`,
        size: `cta`,
        className: `mt-8`,
        children: (0, X.jsx)(r, { to: `/products`, children: `Shop products` }),
      }),
      (0, X.jsx)(`div`, {
        className: `mx-auto mt-14 grid max-w-4xl gap-6 text-left sm:grid-cols-3`,
        children: e.map((e) => (0, X.jsx)(c, { product: e }, e.slug)),
      }),
    ],
  })
}
export { ut as component }
