import { I as e, P as t, l as n, r, t as i } from "./utils-CTnPHf1g.js"
import { n as a } from "./dist-DcKsCcPt.js"
import {
  a as o,
  c as s,
  d as c,
  i as l,
  l as u,
  n as d,
  r as f,
  s as p,
  t as m,
  u as h,
} from "./products._slug-BvGqaigP.js"
import { t as g } from "./useNavigate-BoUDW7wC.js"
import { n as _, r as v, t as y } from "./ProductCard-DCoIzTlK.js"
import { i as b, n as ee, r as x, t as S } from "./store-config-B51vm3CT.js"
import { t as te } from "./leaf-Hf_9wiRl.js"
import { n as ne, t as re } from "./shield-check-gCtisiJE.js"
import { i as C, t as w } from "./button-CuKnxT8Q.js"
import { l as ie, r as T } from "./products-DlwfxnYx.js"
import { h as ae, m as oe, v as se } from "./index-3VGh8kgk.js"
import { n as ce } from "./Starburst-X_oWG3DN.js"
var E = e(t(), 1),
  D = n(),
  O = Object.defineProperty,
  k = (e, t) => O(e, `name`, { value: t, configurable: !0 }),
  A = `Collapsible`,
  [j, M] = h(A),
  [N, P] = j(A),
  le = E.forwardRef(
    k(function (e, t) {
      let {
          __scopeCollapsible: n,
          open: r,
          defaultOpen: i,
          disabled: a,
          onOpenChange: c,
          ...l
        } = e,
        [u, d] = p({ prop: r, defaultProp: i ?? !1, onChange: c, caller: A })
      return (0, D.jsx)(N, {
        scope: n,
        disabled: a,
        contentId: s(),
        open: u,
        onOpenToggle: E.useCallback(() => d((e) => !e), [d]),
        children: (0, D.jsx)(o.div, {
          "data-state": F(u),
          "data-disabled": a ? `` : void 0,
          ...l,
          ref: t,
        }),
      })
    }, `Collapsible`),
  ),
  ue = `CollapsibleTrigger`,
  de = E.forwardRef(
    k(function (e, t) {
      let { __scopeCollapsible: n, ...r } = e,
        i = P(ue, n)
      return (0, D.jsx)(o.button, {
        type: `button`,
        "aria-controls": i.open ? i.contentId : void 0,
        "aria-expanded": i.open || !1,
        "data-state": F(i.open),
        "data-disabled": i.disabled ? `` : void 0,
        disabled: i.disabled,
        ...r,
        ref: t,
        onClick: c(e.onClick, i.onOpenToggle),
      })
    }, `CollapsibleTrigger`),
  ),
  fe = `CollapsibleContent`,
  pe = E.forwardRef(
    k(function (e, t) {
      let { forceMount: n, ...r } = e,
        i = P(fe, e.__scopeCollapsible)
      return (0, D.jsx)(l, {
        present: n || i.open,
        children: ({ present: e }) =>
          (0, D.jsx)(me, { ...r, ref: t, present: e }),
      })
    }, `CollapsibleContent`),
  ),
  me = E.forwardRef(
    k(function (e, t) {
      let { __scopeCollapsible: n, present: r, children: i, ...a } = e,
        s = P(fe, n),
        [c, l] = E.useState(r),
        d = E.useRef(null),
        f = C(t, d),
        p = E.useRef(0),
        m = p.current,
        h = E.useRef(0),
        g = h.current,
        _ = s.open || c,
        v = E.useRef(_),
        y = E.useRef(void 0)
      return (
        E.useEffect(() => {
          let e = requestAnimationFrame(() => (v.current = !1))
          return () => cancelAnimationFrame(e)
        }, []),
        u(() => {
          let e = d.current
          if (e) {
            ;((y.current = y.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName,
            }),
              (e.style.transitionDuration = `0s`),
              (e.style.animationName = `none`))
            let t = e.getBoundingClientRect()
            ;((p.current = t.height),
              (h.current = t.width),
              v.current ||
                ((e.style.transitionDuration = y.current.transitionDuration),
                (e.style.animationName = y.current.animationName)),
              l(r))
          }
        }, [s.open, r]),
        (0, D.jsx)(o.div, {
          "data-state": F(s.open),
          "data-disabled": s.disabled ? `` : void 0,
          id: s.contentId,
          hidden: !_,
          ...a,
          ref: f,
          style: {
            "--radix-collapsible-content-height": m ? `${m}px` : void 0,
            "--radix-collapsible-content-width": g ? `${g}px` : void 0,
            ...e.style,
          },
          children: _ && i,
        })
      )
    }, `CollapsibleContentImpl`),
  )
function F(e) {
  return e ? `open` : `closed`
}
k(F, `getState`)
var he = le,
  ge = de,
  _e = pe,
  ve = Object.defineProperty,
  I = (e, t) => ve(e, `name`, { value: t, configurable: !0 }),
  L = `Accordion`,
  ye = [`Home`, `End`, `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`],
  [R, be, xe] = f(L),
  [z, Se] = h(L, [xe, M]),
  B = M(),
  Ce = E.forwardRef(
    I(function (e, t) {
      let { type: n, ...r } = e,
        i = r,
        a = r
      return (0, D.jsx)(R.Provider, {
        scope: e.__scopeAccordion,
        children:
          n === `multiple`
            ? (0, D.jsx)(De, { ...a, ref: t })
            : (0, D.jsx)(Ee, { ...i, ref: t }),
      })
    }, `Accordion`),
  ),
  [V, we] = z(L),
  [H, Te] = z(L, { collapsible: !1 }),
  Ee = E.forwardRef(
    I(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = I(() => {}, `onValueChange`),
          collapsible: a = !1,
          ...o
        } = e,
        [s, c] = p({ prop: n, defaultProp: r ?? ``, onChange: i, caller: L })
      return (0, D.jsx)(V, {
        scope: e.__scopeAccordion,
        value: E.useMemo(() => (s ? [s] : []), [s]),
        onItemOpen: c,
        onItemClose: E.useCallback(() => a && c(``), [a, c]),
        children: (0, D.jsx)(H, {
          scope: e.__scopeAccordion,
          collapsible: a,
          children: (0, D.jsx)(W, { ...o, ref: t }),
        }),
      })
    }, `AccordionImplSingle`),
  ),
  De = E.forwardRef(
    I(function (e, t) {
      let {
          value: n,
          defaultValue: r,
          onValueChange: i = I(() => {}, `onValueChange`),
          ...a
        } = e,
        [o, s] = p({ prop: n, defaultProp: r ?? [], onChange: i, caller: L }),
        c = E.useCallback((e) => s((t = []) => [...t, e]), [s]),
        l = E.useCallback((e) => s((t = []) => t.filter((t) => t !== e)), [s])
      return (0, D.jsx)(V, {
        scope: e.__scopeAccordion,
        value: o,
        onItemOpen: c,
        onItemClose: l,
        children: (0, D.jsx)(H, {
          scope: e.__scopeAccordion,
          collapsible: !0,
          children: (0, D.jsx)(W, { ...a, ref: t }),
        }),
      })
    }, `AccordionImplMultiple`),
  ),
  [Oe, U] = z(L),
  W = E.forwardRef(
    I(function (e, t) {
      let {
          __scopeAccordion: n,
          disabled: r,
          dir: i,
          orientation: a = `vertical`,
          ...s
        } = e,
        l = E.useRef(null),
        u = C(l, t),
        f = be(n),
        p = d(i) === `ltr`,
        m = c(e.onKeyDown, (e) => {
          if (!ye.includes(e.key)) return
          let t = e.target,
            n = f().filter((e) => !e.ref.current?.disabled),
            r = n.findIndex((e) => e.ref.current === t),
            i = n.length
          if (r === -1) return
          e.preventDefault()
          let o = r,
            s = i - 1,
            c = I(() => {
              ;((o = r + 1), o > s && (o = 0))
            }, `moveNext`),
            l = I(() => {
              ;((o = r - 1), o < 0 && (o = s))
            }, `movePrev`)
          switch (e.key) {
            case `Home`:
              o = 0
              break
            case `End`:
              o = s
              break
            case `ArrowRight`:
              a === `horizontal` && (p ? c() : l())
              break
            case `ArrowDown`:
              a === `vertical` && c()
              break
            case `ArrowLeft`:
              a === `horizontal` && (p ? l() : c())
              break
            case `ArrowUp`:
              a === `vertical` && l()
          }
          n[o % i].ref.current?.focus()
        })
      return (0, D.jsx)(Oe, {
        scope: n,
        disabled: r,
        direction: i,
        orientation: a,
        children: (0, D.jsx)(R.Slot, {
          scope: n,
          children: (0, D.jsx)(o.div, {
            ...s,
            "data-orientation": a,
            ref: u,
            onKeyDown: r ? void 0 : m,
          }),
        }),
      })
    }, `AccordionImpl`),
  ),
  G = `AccordionItem`,
  [ke, K] = z(G),
  Ae = E.forwardRef(
    I(function (e, t) {
      let { __scopeAccordion: n, value: r, ...i } = e,
        a = U(G, n),
        o = we(G, n),
        c = B(n),
        l = s(),
        u = (r && o.value.includes(r)) || !1,
        d = a.disabled || e.disabled
      return (0, D.jsx)(ke, {
        scope: n,
        open: u,
        disabled: d,
        triggerId: l,
        children: (0, D.jsx)(he, {
          "data-orientation": a.orientation,
          "data-state": J(u),
          ...c,
          ...i,
          ref: t,
          disabled: d,
          open: u,
          onOpenChange: (e) => {
            e ? o.onItemOpen(r) : o.onItemClose(r)
          },
        }),
      })
    }, `AccordionItem`),
  ),
  je = `AccordionHeader`,
  Me = E.forwardRef(
    I(function (e, t) {
      let { __scopeAccordion: n, ...r } = e,
        i = U(L, n),
        a = K(je, n)
      return (0, D.jsx)(o.h3, {
        "data-orientation": i.orientation,
        "data-state": J(a.open),
        "data-disabled": a.disabled ? `` : void 0,
        ...r,
        ref: t,
      })
    }, `AccordionHeader`),
  ),
  q = `AccordionTrigger`,
  Ne = E.forwardRef(
    I(function (e, t) {
      let { __scopeAccordion: n, ...r } = e,
        i = U(L, n),
        a = K(q, n),
        o = Te(q, n),
        s = B(n)
      return (0, D.jsx)(R.ItemSlot, {
        scope: n,
        children: (0, D.jsx)(ge, {
          "aria-disabled": (a.open && !o.collapsible) || void 0,
          "data-orientation": i.orientation,
          id: a.triggerId,
          ...s,
          ...r,
          ref: t,
        }),
      })
    }, `AccordionTrigger`),
  ),
  Pe = `AccordionContent`,
  Fe = E.forwardRef(
    I(function (e, t) {
      let { __scopeAccordion: n, ...r } = e,
        i = U(L, n),
        a = K(Pe, n),
        o = B(n)
      return (0, D.jsx)(_e, {
        role: `region`,
        "aria-labelledby": a.triggerId,
        "data-orientation": i.orientation,
        ...o,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": `var(--radix-collapsible-content-height)`,
          "--radix-accordion-content-width": `var(--radix-collapsible-content-width)`,
          ...e.style,
        },
      })
    }, `AccordionContent`),
  )
function J(e) {
  return e ? `open` : `closed`
}
I(J, `getState`)
var Ie = Ce,
  Le = Ae,
  Re = Me,
  Y = Ne,
  X = Fe,
  ze = Ie,
  Z = E.forwardRef(({ className: e, ...t }, n) =>
    (0, D.jsx)(Le, { ref: n, className: i(`border-b`, e), ...t }),
  )
Z.displayName = `AccordionItem`
var Q = E.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, D.jsx)(Re, {
    className: `flex`,
    children: (0, D.jsxs)(Y, {
      ref: r,
      className: i(
        `flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180`,
        e,
      ),
      ...n,
      children: [
        t,
        (0, D.jsx)(b, {
          className: `h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200`,
        }),
      ],
    }),
  }),
)
Q.displayName = Y.displayName
var $ = E.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, D.jsx)(X, {
    ref: r,
    className: `overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
    ...n,
    children: (0, D.jsx)(`div`, { className: i(`pb-4 pt-0`, e), children: t }),
  }),
)
$.displayName = X.displayName
function Be() {
  let { product: e } = m.useLoaderData(),
    { add: t, setOpen: n } = oe(),
    o = g(),
    [s, c] = (0, E.useState)(e.variants[e.variants.length - 1]?.id ?? ``),
    [l, u] = (0, E.useState)(0),
    [d, f] = (0, E.useState)(1),
    [p, h] = (0, E.useState)(!1),
    [b, C] = (0, E.useState)(4),
    O = e.variants.find((e) => e.id === s) ?? e.variants[0]
  if (!O) return null
  let k = O.images[l] ?? O.images[0],
    A = p ? O.price * (1 - S.subscribeDiscount) : O.price,
    j = e.species === `cat` ? v : _,
    M = Math.round(S.subscribeDiscount * 100),
    N = (r) => {
      ;(t({
        slug: e.slug,
        variantId: O.id,
        qty: d,
        subscribe: p,
        frequencyWeeks: b,
      }),
        r
          ? o({ to: `/checkout` })
          : (a.success(`Added to cart`, {
              description: `${d} × ${e.name} (${O.label})`,
            }),
            n(!0)))
    }
  return (0, D.jsxs)(D.Fragment, {
    children: [
      (0, D.jsx)(`div`, {
        className: `container-site pt-6`,
        children: (0, D.jsxs)(`nav`, {
          className: `flex items-center gap-1 text-sm text-muted-foreground`,
          "aria-label": `Breadcrumb`,
          children: [
            (0, D.jsx)(r, {
              to: `/products`,
              className: `hover:text-navy`,
              children: `Products`,
            }),
            (0, D.jsx)(x, { className: `size-4` }),
            (0, D.jsx)(r, {
              to: `/products`,
              search: { category: e.species },
              className: `hover:text-navy`,
              children: e.species === `cat` ? `Cat food` : `Dog food`,
            }),
            (0, D.jsx)(x, { className: `size-4` }),
            (0, D.jsx)(`span`, {
              className: `truncate text-navy`,
              children: O.label,
            }),
          ],
        }),
      }),
      (0, D.jsxs)(`section`, {
        className: `container-site grid gap-10 py-8 lg:grid-cols-2 lg:gap-16 lg:py-12`,
        children: [
          (0, D.jsxs)(`div`, {
            children: [
              (0, D.jsxs)(`div`, {
                className: `relative grid aspect-square place-items-center overflow-hidden rounded-3xl bg-card shadow-card`,
                children: [
                  (0, D.jsx)(ce, {
                    className: `absolute inset-8 animate-spin-slow opacity-90`,
                  }),
                  (0, D.jsx)(`img`, {
                    src: k,
                    alt: `${e.name} — ${O.label}`,
                    className: `absolute inset-[10%] size-[80%] object-contain`,
                  }),
                  (0, D.jsxs)(`span`, {
                    className: `absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-navy`,
                    children: [
                      (0, D.jsx)(j, { className: `size-4` }),
                      ` `,
                      e.species === `cat`
                        ? `For cats & kittens`
                        : `For dogs & puppies`,
                    ],
                  }),
                ],
              }),
              O.images.length > 1 &&
                (0, D.jsx)(`div`, {
                  className: `mt-4 grid grid-cols-4 gap-3`,
                  children: O.images.map((e, t) =>
                    (0, D.jsx)(
                      `button`,
                      {
                        type: `button`,
                        onClick: () => u(t),
                        className: i(
                          `grid aspect-square place-items-center overflow-hidden rounded-2xl border-2 bg-card p-2 transition-all`,
                          t === l
                            ? `border-teal`
                            : `border-transparent hover:border-border`,
                        ),
                        "aria-label": `Show photo ${t + 1}`,
                        children: (0, D.jsx)(`img`, {
                          src: e,
                          alt: ``,
                          className: `max-h-full object-contain`,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
            ],
          }),
          (0, D.jsxs)(`div`, {
            children: [
              e.badge &&
                (0, D.jsx)(`span`, {
                  className: `inline-block rounded-full bg-heart px-3 py-1 text-xs font-bold uppercase tracking-wide text-destructive-foreground`,
                  children: e.badge,
                }),
              (0, D.jsx)(`h1`, {
                className: `mt-3 text-3xl font-bold leading-tight text-navy md:text-4xl`,
                children: e.name,
              }),
              (0, D.jsx)(`p`, {
                className: `mt-2 text-muted-foreground`,
                children: e.tagline,
              }),
              (0, D.jsxs)(`div`, {
                className: `mt-6 flex items-baseline gap-3`,
                children: [
                  (0, D.jsx)(`span`, {
                    className: `text-3xl font-bold text-navy`,
                    children: T(A),
                  }),
                  p &&
                    (0, D.jsx)(`span`, {
                      className: `text-lg text-muted-foreground line-through`,
                      children: T(O.price),
                    }),
                ],
              }),
              e.variants.length > 1 &&
                (0, D.jsxs)(`fieldset`, {
                  className: `mt-6`,
                  children: [
                    (0, D.jsx)(`legend`, {
                      className: `eyebrow text-navy`,
                      children: `Size`,
                    }),
                    (0, D.jsx)(`div`, {
                      className: `mt-3 flex flex-wrap gap-2`,
                      children: e.variants.map((e) =>
                        (0, D.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            onClick: () => {
                              ;(c(e.id), u(0))
                            },
                            className: i(
                              `rounded-2xl border-2 px-4 py-2.5 text-left transition-all`,
                              e.id === O.id
                                ? `border-navy bg-navy text-navy-foreground`
                                : `border-border bg-card text-navy hover:border-navy/50`,
                            ),
                            "aria-pressed": e.id === O.id,
                            children: [
                              (0, D.jsx)(`span`, {
                                className: `block text-sm font-bold`,
                                children: e.label,
                              }),
                              (0, D.jsx)(`span`, {
                                className: `block text-xs opacity-80`,
                                children: T(e.price),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              (0, D.jsxs)(`fieldset`, {
                className: `mt-6 space-y-3`,
                children: [
                  (0, D.jsx)(`legend`, {
                    className: `eyebrow mb-3 text-navy`,
                    children: `Purchase`,
                  }),
                  (0, D.jsxs)(`label`, {
                    className: i(
                      `flex cursor-pointer items-center gap-3 rounded-2xl border-2 bg-card p-4 transition-all`,
                      p ? `border-border` : `border-navy`,
                    ),
                    children: [
                      (0, D.jsx)(`input`, {
                        type: `radio`,
                        name: `purchase`,
                        checked: !p,
                        onChange: () => h(!1),
                        className: `accent-navy`,
                      }),
                      (0, D.jsx)(`span`, {
                        className: `flex-1 font-semibold text-navy`,
                        children: `One-time purchase`,
                      }),
                      (0, D.jsx)(`span`, {
                        className: `font-bold text-navy`,
                        children: T(O.price),
                      }),
                    ],
                  }),
                  (0, D.jsxs)(`label`, {
                    className: i(
                      `block cursor-pointer rounded-2xl border-2 bg-card p-4 transition-all`,
                      p ? `border-teal bg-accent` : `border-border`,
                    ),
                    children: [
                      (0, D.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [
                          (0, D.jsx)(`input`, {
                            type: `radio`,
                            name: `purchase`,
                            checked: p,
                            onChange: () => h(!0),
                            className: `accent-teal`,
                          }),
                          (0, D.jsxs)(`span`, {
                            className: `flex-1`,
                            children: [
                              (0, D.jsxs)(`span`, {
                                className: `font-semibold text-navy`,
                                children: [`Subscribe & Save `, M, `%`],
                              }),
                              (0, D.jsx)(`span`, {
                                className: `ml-2 rounded-full bg-sun px-2 py-0.5 text-[11px] font-bold text-sun-foreground`,
                                children: `Best value`,
                              }),
                            ],
                          }),
                          (0, D.jsx)(`span`, {
                            className: `font-bold text-teal-deep`,
                            children: T(O.price * (1 - S.subscribeDiscount)),
                          }),
                        ],
                      }),
                      p &&
                        (0, D.jsxs)(`span`, {
                          className: `mt-3 flex flex-wrap items-center gap-2 pl-7 text-sm text-navy`,
                          children: [
                            `Deliver every`,
                            (0, D.jsx)(`select`, {
                              value: b,
                              onChange: (e) => C(Number(e.target.value)),
                              className: `rounded-full border bg-card px-3 py-1 font-semibold`,
                              children: S.subscribeFrequencies.map((e) =>
                                (0, D.jsxs)(
                                  `option`,
                                  { value: e, children: [e, ` weeks`] },
                                  e,
                                ),
                              ),
                            }),
                            (0, D.jsx)(`span`, {
                              className: `text-muted-foreground`,
                              children: `· Skip or cancel anytime`,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, D.jsxs)(`div`, {
                className: `mt-6 flex flex-wrap gap-3`,
                children: [
                  (0, D.jsxs)(`div`, {
                    className: `flex h-14 items-center rounded-full border-2 bg-card`,
                    children: [
                      (0, D.jsx)(`button`, {
                        type: `button`,
                        className: `grid size-12 place-items-center`,
                        onClick: () => f((e) => Math.max(1, e - 1)),
                        "aria-label": `Decrease quantity`,
                        children: (0, D.jsx)(ee, { className: `size-4` }),
                      }),
                      (0, D.jsx)(`span`, {
                        className: `w-8 text-center font-bold text-navy`,
                        "aria-live": `polite`,
                        children: d,
                      }),
                      (0, D.jsx)(`button`, {
                        type: `button`,
                        className: `grid size-12 place-items-center`,
                        onClick: () => f((e) => e + 1),
                        "aria-label": `Increase quantity`,
                        children: (0, D.jsx)(se, { className: `size-4` }),
                      }),
                    ],
                  }),
                  (0, D.jsxs)(w, {
                    variant: `sky`,
                    size: `cta`,
                    className: `flex-1`,
                    onClick: () => N(!1),
                    children: [`Add to cart · `, T(A * d)],
                  }),
                ],
              }),
              (0, D.jsx)(w, {
                variant: `navy`,
                size: `cta`,
                className: `mt-3 w-full`,
                onClick: () => N(!0),
                children: `Buy it now`,
              }),
              (0, D.jsxs)(`ul`, {
                className: `mt-6 grid gap-3 text-sm text-navy sm:grid-cols-3`,
                children: [
                  (0, D.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, D.jsx)(ae, { className: `size-4 text-teal` }),
                      ` Free delivery over `,
                      T(S.freeShippingThreshold),
                    ],
                  }),
                  (0, D.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, D.jsx)(te, { className: `size-4 text-teal` }),
                      ` Non-GMO ingredients`,
                    ],
                  }),
                  (0, D.jsxs)(`li`, {
                    className: `flex items-center gap-2`,
                    children: [
                      (0, D.jsx)(re, { className: `size-4 text-teal` }),
                      ` Secure checkout`,
                    ],
                  }),
                ],
              }),
              (0, D.jsxs)(ze, {
                type: `multiple`,
                defaultValue: [`about`],
                className: `mt-8 border-t`,
                children: [
                  (0, D.jsxs)(Z, {
                    value: `about`,
                    children: [
                      (0, D.jsx)(Q, {
                        className: `text-base font-bold text-navy`,
                        children: `About this recipe`,
                      }),
                      (0, D.jsx)($, {
                        className: `text-navy/80 leading-relaxed`,
                        children: e.description,
                      }),
                    ],
                  }),
                  (0, D.jsxs)(Z, {
                    value: `benefits`,
                    children: [
                      (0, D.jsx)(Q, {
                        className: `text-base font-bold text-navy`,
                        children: `Key benefits`,
                      }),
                      (0, D.jsx)($, {
                        children: (0, D.jsx)(`ul`, {
                          className: `space-y-2`,
                          children: e.highlights.map((e) =>
                            (0, D.jsxs)(
                              `li`,
                              {
                                className: `flex gap-2 text-navy/80`,
                                children: [
                                  (0, D.jsx)(`span`, {
                                    className: `mt-2 size-1.5 shrink-0 rounded-full bg-teal`,
                                  }),
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                  e.analysis &&
                    (0, D.jsxs)(Z, {
                      value: `analysis`,
                      children: [
                        (0, D.jsx)(Q, {
                          className: `text-base font-bold text-navy`,
                          children: `Nutrition`,
                        }),
                        (0, D.jsx)($, {
                          children: (0, D.jsx)(`dl`, {
                            className: `divide-y rounded-xl border bg-card`,
                            children: e.analysis.map((e) =>
                              (0, D.jsxs)(
                                `div`,
                                {
                                  className: `flex justify-between px-4 py-2.5 text-sm`,
                                  children: [
                                    (0, D.jsx)(`dt`, {
                                      className: `text-navy/80`,
                                      children: e.label,
                                    }),
                                    (0, D.jsx)(`dd`, {
                                      className: `font-semibold text-navy`,
                                      children: e.value,
                                    }),
                                  ],
                                },
                                e.label,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                  (0, D.jsxs)(Z, {
                    value: `shipping`,
                    children: [
                      (0, D.jsx)(Q, {
                        className: `text-base font-bold text-navy`,
                        children: `Delivery & autoship`,
                      }),
                      (0, D.jsxs)($, {
                        className: `flex gap-3 text-navy/80`,
                        children: [
                          (0, D.jsx)(ne, {
                            className: `mt-0.5 size-4 shrink-0 text-teal`,
                          }),
                          `Standard delivery is free on orders over `,
                          T(S.freeShippingThreshold),
                          `. Express delivery arrives in `,
                          S.expressShippingDays[0],
                          `–`,
                          S.expressShippingDays[1],
                          ` business days. Autoship orders can be skipped, changed or cancelled anytime.`,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, D.jsx)(`section`, {
        className: `bg-teal-soft py-16`,
        children: (0, D.jsxs)(`div`, {
          className: `container-site`,
          children: [
            (0, D.jsx)(`h2`, {
              className: `text-2xl font-bold text-navy md:text-3xl`,
              children: `You may also like`,
            }),
            (0, D.jsx)(`div`, {
              className: `mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4`,
              children: ie(e).map((e) => (0, D.jsx)(y, { product: e }, e.slug)),
            }),
          ],
        }),
      }),
    ],
  })
}
export { Be as component }
