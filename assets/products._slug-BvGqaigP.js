const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/products._slug-DPeXjm4S.js",
      "assets/utils-CTnPHf1g.js",
      "assets/button-CuKnxT8Q.js",
      "assets/products._slug-mFB5kzZr.js",
      "assets/dist-DcKsCcPt.js",
      "assets/useNavigate-BoUDW7wC.js",
      "assets/ProductCard-DCoIzTlK.js",
      "assets/createLucideIcon-DIG6HcwS.js",
      "assets/products-DlwfxnYx.js",
      "assets/index-3VGh8kgk.js",
      "assets/preload-helper-aJHOanyi.js",
      "assets/store-config-B51vm3CT.js",
      "assets/Starburst-X_oWG3DN.js",
      "assets/leaf-Hf_9wiRl.js",
      "assets/shield-check-gCtisiJE.js",
    ]),
) => i.map((i) => d[i])
import { I as e, P as t, l as n } from "./utils-CTnPHf1g.js"
import { r } from "./dist-DcKsCcPt.js"
import { n as i, r as a, t as o } from "./preload-helper-aJHOanyi.js"
import { i as s, r as c } from "./button-CuKnxT8Q.js"
import { i as l } from "./products-DlwfxnYx.js"
function u(e = {}) {
  if (((e.isNotFound = !0), e.throw)) throw e
  return e
}
function d(e) {
  return e?.isNotFound === !0
}
var f = Object.defineProperty,
  p = (e, t) => f(e, `name`, { value: t, configurable: !0 }),
  m = !!(
    typeof window < `u` &&
    window.document &&
    window.document.createElement
  )
function h(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return p(function (r) {
    if ((e?.(r), n === !1 || !r || !r.defaultPrevented)) return t?.(r)
  }, `handleEvent`)
}
p(h, `composeEventHandlers`)
function g(e) {
  if (!m) throw Error(`Cannot access window outside of the DOM`)
  return e?.ownerDocument?.defaultView ?? window
}
p(g, `getOwnerWindow`)
function _(e) {
  if (!m) throw Error(`Cannot access document outside of the DOM`)
  return e?.ownerDocument ?? document
}
p(_, `getOwnerDocument`)
function v(e, t = !1) {
  let { activeElement: n } = _(e)
  if (!n?.nodeName) return null
  if (y(n) && n.contentDocument) return v(n.contentDocument.body, t)
  if (t) {
    let e = n.getAttribute(`aria-activedescendant`)
    if (e) {
      let t = _(n).getElementById(e)
      if (t) return t
    }
  }
  return n
}
p(v, `getActiveElement`)
function y(e) {
  return e.tagName === `IFRAME`
}
p(y, `isFrame`)
var ee = e(r(), 1),
  b = e(t(), 1),
  x = n(),
  te = Object.defineProperty,
  S = (e, t) => te(e, `name`, { value: t, configurable: !0 })
function ne(e, t) {
  let n = b.createContext(t)
  n.displayName = e + `Context`
  let r = S((e) => {
    let { children: t, ...r } = e,
      i = b.useMemo(() => r, Object.values(r))
    return (0, x.jsx)(n.Provider, { value: i, children: t })
  }, `Provider`)
  r.displayName = e + `Provider`
  function i(r, i = {}) {
    let { optional: a = !1 } = i,
      o = b.useContext(n)
    if (o) return o
    if (t !== void 0) return t
    if (!a) throw Error(`\`${r}\` must be used within \`${e}\``)
  }
  return (S(i, `useContext`), [r, i])
}
S(ne, `createContext`)
function C(e, t = []) {
  let n = []
  function r(t, r) {
    let i = b.createContext(r)
    i.displayName = t + `Context`
    let a = n.length
    n = [...n, r]
    let o = S((t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = b.useMemo(() => o, Object.values(o))
      return (0, x.jsx)(s.Provider, { value: c, children: r })
    }, `Provider`)
    o.displayName = t + `Provider`
    function s(n, o, s = {}) {
      let { optional: c = !1 } = s,
        l = o?.[e]?.[a] || i,
        u = b.useContext(l)
      if (u) return u
      if (r !== void 0) return r
      if (!c) throw Error(`\`${n}\` must be used within \`${t}\``)
    }
    return (S(s, `useContext`), [o, s])
  }
  S(r, `createContext`)
  let i = S(() => {
    let t = n.map((e) => b.createContext(e))
    return S(function (n) {
      let r = n?.[e] || t
      return b.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r])
    }, `useScope`)
  }, `createScope`)
  return ((i.scopeName = e), [r, w(i, ...t)])
}
S(C, `createContextScope`)
function w(...e) {
  let t = e[0]
  if (e.length === 1) return t
  let n = S(() => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
    return S(function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`]
        return { ...t, ...i }
      }, {})
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r])
    }, `useComposedScopes`)
  }, `createScope`)
  return ((n.scopeName = t.scopeName), n)
}
S(w, `composeContextScopes`)
var T = globalThis?.document ? b.useLayoutEffect : () => {},
  re = Object.defineProperty,
  ie = (e, t) => re(e, `name`, { value: t, configurable: !0 }),
  ae = b.useId || (() => void 0),
  oe = 0
function E(e) {
  let [t, n] = b.useState(ae())
  return (
    T(() => {
      e || n((e) => e ?? String(oe++))
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  )
}
ie(E, `useId`)
var se = Object.defineProperty,
  ce = (e, t) => se(e, `name`, { value: t, configurable: !0 }),
  D = b.useEffectEvent,
  O = b.useInsertionEffect
function k(e) {
  if (typeof D == `function`) return D(e)
  let t = b.useRef(() => {
    throw Error(`Cannot call an event handler while rendering.`)
  })
  return (
    typeof O == `function`
      ? O(() => {
          t.current = e
        })
      : T(() => {
          t.current = e
        }),
    b.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  )
}
ce(k, `useEffectEvent`)
var le = Object.defineProperty,
  A = (e, t) => le(e, `name`, { value: t, configurable: !0 }),
  ue = b.useInsertionEffect || T
function j({
  prop: e,
  defaultProp: t,
  onChange: n = A(() => {}, `onChange`),
  caller: r,
}) {
  let [i, a, o] = M({ defaultProp: t, onChange: n }),
    s = e !== void 0
  return [
    s ? e : i,
    b.useCallback(
      (t) => {
        if (s) {
          let n = N(t) ? t(e) : t
          n !== e && o.current?.(n)
        } else a(t)
      },
      [s, e, a, o],
    ),
  ]
}
A(j, `useControllableState`)
function M({ defaultProp: e, onChange: t }) {
  let [n, r] = b.useState(e),
    i = b.useRef(n),
    a = b.useRef(t)
  return (
    ue(() => {
      a.current = t
    }, [t]),
    b.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n))
    }, [n, i]),
    [n, r, a]
  )
}
A(M, `useUncontrolledState`)
function N(e) {
  return typeof e == `function`
}
A(N, `isFunction`)
var P = Symbol(`RADIX:SYNC_STATE`)
function de(e, t, n, r) {
  let { prop: i, defaultProp: a, onChange: o, caller: s } = t,
    c = i !== void 0,
    l = k(o),
    u = [{ ...n, state: a }]
  r && u.push(r)
  let [d, f] = b.useReducer(
      (t, n) => {
        if (n.type === P) return { ...t, state: n.state }
        let r = e(t, n)
        return (c && !Object.is(r.state, t.state) && l(r.state), r)
      },
      ...u,
    ),
    p = d.state,
    m = b.useRef(p)
  b.useEffect(() => {
    m.current !== p && ((m.current = p), c || l(p))
  }, [p, m, c])
  let h = b.useMemo(() => (i === void 0 ? d : { ...d, state: i }), [d, i])
  return (
    b.useEffect(() => {
      c && !Object.is(i, d.state) && f({ type: P, state: i })
    }, [i, d.state, c]),
    [h, f]
  )
}
A(de, `useControllableStateReducer`)
var fe = Object.defineProperty,
  pe = (e, t) => fe(e, `name`, { value: t, configurable: !0 }),
  me = [
    `a`,
    `button`,
    `div`,
    `form`,
    `h2`,
    `h3`,
    `img`,
    `input`,
    `label`,
    `li`,
    `nav`,
    `ol`,
    `p`,
    `select`,
    `span`,
    `svg`,
    `ul`,
  ].reduce((e, t) => {
    let n = c(`Primitive.${t}`),
      r = b.forwardRef((e, r) => {
        let { asChild: i, ...a } = e,
          o = i ? n : t
        return (
          typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
          (0, x.jsx)(o, { ...a, ref: r })
        )
      })
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r })
  }, {})
function F(e, t) {
  e && ee.flushSync(() => e.dispatchEvent(t))
}
pe(F, `dispatchDiscreteCustomEvent`)
var he = Object.defineProperty,
  I = (e, t) => he(e, `name`, { value: t, configurable: !0 })
function L(e, t) {
  return b.useReducer((e, n) => t[e][n] ?? e, e)
}
I(L, `useStateMachine`)
var ge = I((e) => {
  let { present: t, children: n } = e,
    r = R(t),
    i =
      typeof n == `function` ? n({ present: r.isPresent }) : b.Children.only(n),
    a = B(r.ref, H(i))
  return typeof n == `function` || r.isPresent
    ? b.cloneElement(i, { ref: a })
    : null
}, `Presence`)
function R(e) {
  let [t, n] = b.useState(),
    r = b.useRef(null),
    i = b.useRef(e),
    a = b.useRef(`none`),
    o = b.useRef(void 0),
    [s, c] = L(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    })
  return (
    b.useEffect(() => {
      s === `mounted`
        ? ((a.current = o.current ?? V(r.current)), (o.current = void 0))
        : (a.current = `none`)
    }, [s]),
    T(() => {
      let t = r.current,
        n = i.current
      if (n !== e) {
        let r = a.current,
          s = V(t)
        ;(e
          ? ((o.current = s), c(`MOUNT`))
          : s === `none` || t?.display === `none`
            ? c(`UNMOUNT`)
            : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e))
      }
    }, [e, c]),
    T(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = I((a) => {
            let o = V(r.current).includes(CSS.escape(a.animationName))
            if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode
              ;((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` &&
                    (t.style.animationFillMode = r)
                })))
            }
          }, `handleAnimationEnd`),
          s = I((e) => {
            e.target === t && (a.current = V(r.current))
          }, `handleAnimationStart`)
        return (
          t.addEventListener(`animationstart`, s),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            ;(n.clearTimeout(e),
              t.removeEventListener(`animationstart`, s),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o))
          }
        )
      }
      c(`ANIMATION_END`)
    }, [t, c]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(s),
      ref: b.useCallback((e) => {
        if (e) {
          let t = getComputedStyle(e)
          ;((r.current = t), (o.current = V(t)))
        } else r.current = null
        n(e)
      }, []),
    }
  )
}
I(R, `usePresence`)
function z(e, t) {
  if (typeof e == `function`) return e(t)
  e != null && (e.current = t)
}
I(z, `setRef`)
function B(...e) {
  let t = b.useRef(e)
  return (
    (t.current = e),
    b.useCallback((e) => {
      let n = t.current,
        r = !1,
        i = n.map((t) => {
          let n = z(t, e)
          return (!r && typeof n == `function` && (r = !0), n)
        })
      if (r)
        return () => {
          for (let e = 0; e < i.length; e++) {
            let t = i[e]
            typeof t == `function` ? t() : z(n[e], null)
          }
        }
    }, [])
  )
}
I(B, `useStableComposedRefs`)
function V(e) {
  return e?.animationName || `none`
}
I(V, `getAnimationName`)
function H(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref)
}
I(H, `getElementRef`)
var _e = Object.defineProperty,
  U = (e, t) => _e(e, `name`, { value: t, configurable: !0 })
function W(e) {
  let t = e + `CollectionProvider`,
    [n, r] = C(t),
    [i, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = U((e) => {
      let { scope: t, children: n } = e,
        r = b.useRef(null),
        a = b.useRef(new Map()).current
      return (0, x.jsx)(i, {
        scope: t,
        itemMap: a,
        collectionRef: r,
        children: n,
      })
    }, `CollectionProvider`)
  o.displayName = t
  let l = e + `CollectionSlot`,
    u = c(l),
    d = b.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(l, n),
        o = s(t, i.collectionRef)
      return (0, x.jsx)(u, { ref: o, children: r })
    })
  d.displayName = l
  let f = e + `CollectionItemSlot`,
    p = `data-radix-collection-item`,
    m = c(f),
    h = b.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = b.useRef(null),
        c = s(t, o),
        l = a(f, n)
      return (
        b.useEffect(
          () => (
            l.itemMap.set(o, { ref: o, ...i }),
            () => void l.itemMap.delete(o)
          ),
        ),
        (0, x.jsx)(m, { [p]: ``, ref: c, children: r })
      )
    })
  h.displayName = f
  function g(t) {
    let n = a(e + `CollectionConsumer`, t)
    return b.useCallback(() => {
      let e = n.collectionRef.current
      if (!e) return []
      let t = Array.from(e.querySelectorAll(`[${p}]`))
      return Array.from(n.itemMap.values()).sort(
        (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
      )
    }, [n.collectionRef, n.itemMap])
  }
  return (U(g, `useCollection`), [{ Provider: o, Slot: d, ItemSlot: h }, g, r])
}
U(W, `createCollection`)
var G = new WeakMap(),
  K = class e extends Map {
    static {
      U(this, `OrderedDict`)
    }
    #e
    constructor(e) {
      ;(super(e), (this.#e = [...super.keys()]), G.set(this, !0))
    }
    set(e, t) {
      return (
        G.get(this) &&
          (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
        super.set(e, t),
        this
      )
    }
    insert(e, t, n) {
      let r = this.has(t),
        i = this.#e.length,
        a = Y(e),
        o = a >= 0 ? a : i + a,
        s = o < 0 || o >= i ? -1 : o
      if (s === this.size || (r && s === this.size - 1) || s === -1)
        return (this.set(t, n), this)
      let c = this.size + +!r
      a < 0 && o++
      let l = [...this.#e],
        u,
        d = !1
      for (let e = o; e < c; e++)
        if (o === e) {
          let i = l[e]
          ;(l[e] === t && (i = l[e + 1]),
            r && this.delete(t),
            (u = this.get(i)),
            this.set(t, n))
        } else {
          !d && l[e - 1] === t && (d = !0)
          let n = l[d ? e : e - 1],
            r = u
          ;((u = this.get(n)), this.delete(n), this.set(n, r))
        }
      return this
    }
    with(t, n, r) {
      let i = new e(this)
      return (i.insert(t, n, r), i)
    }
    before(e) {
      let t = this.#e.indexOf(e) - 1
      if (!(t < 0)) return this.entryAt(t)
    }
    setBefore(e, t, n) {
      let r = this.#e.indexOf(e)
      return r === -1 ? this : this.insert(r, t, n)
    }
    after(e) {
      let t = this.#e.indexOf(e)
      if (((t = t === -1 || t === this.size - 1 ? -1 : t + 1), t !== -1))
        return this.entryAt(t)
    }
    setAfter(e, t, n) {
      let r = this.#e.indexOf(e)
      return r === -1 ? this : this.insert(r + 1, t, n)
    }
    first() {
      return this.entryAt(0)
    }
    last() {
      return this.entryAt(-1)
    }
    clear() {
      return ((this.#e = []), super.clear())
    }
    delete(e) {
      let t = super.delete(e)
      return (t && this.#e.splice(this.#e.indexOf(e), 1), t)
    }
    deleteAt(e) {
      let t = this.keyAt(e)
      return t !== void 0 && this.delete(t)
    }
    at(e) {
      let t = q(this.#e, e)
      if (t !== void 0) return this.get(t)
    }
    entryAt(e) {
      let t = q(this.#e, e)
      if (t !== void 0) return [t, this.get(t)]
    }
    indexOf(e) {
      return this.#e.indexOf(e)
    }
    keyAt(e) {
      return q(this.#e, e)
    }
    from(e, t) {
      let n = this.indexOf(e)
      if (n === -1) return
      let r = n + t
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.at(r)
      )
    }
    keyFrom(e, t) {
      let n = this.indexOf(e)
      if (n === -1) return
      let r = n + t
      return (
        r < 0 && (r = 0),
        r >= this.size && (r = this.size - 1),
        this.keyAt(r)
      )
    }
    find(e, t) {
      let n = 0
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return r
        n++
      }
    }
    findIndex(e, t) {
      let n = 0
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return n
        n++
      }
      return -1
    }
    filter(t, n) {
      let r = [],
        i = 0
      for (let e of this) (Reflect.apply(t, n, [e, i, this]) && r.push(e), i++)
      return new e(r)
    }
    map(t, n) {
      let r = [],
        i = 0
      for (let e of this)
        (r.push([e[0], Reflect.apply(t, n, [e, i, this])]), i++)
      return new e(r)
    }
    reduce(...e) {
      let [t, n] = e,
        r = 0,
        i = n ?? this.at(0)
      for (let n of this)
        ((i =
          r === 0 && e.length === 1
            ? n
            : Reflect.apply(t, this, [i, n, r, this])),
          r++)
      return i
    }
    reduceRight(...e) {
      let [t, n] = e,
        r = n ?? this.at(-1)
      for (let n = this.size - 1; n >= 0; n--) {
        let i = this.at(n)
        r =
          n === this.size - 1 && e.length === 1
            ? i
            : Reflect.apply(t, this, [r, i, n, this])
      }
      return r
    }
    toSorted(t) {
      let n = [...this.entries()].sort(t)
      return new e(n)
    }
    toReversed() {
      let t = new e()
      for (let e = this.size - 1; e >= 0; e--) {
        let n = this.keyAt(e),
          r = this.get(n)
        t.set(n, r)
      }
      return t
    }
    toSpliced(...t) {
      let n = [...this.entries()]
      return (n.splice(...t), new e(n))
    }
    slice(t, n) {
      let r = new e(),
        i = this.size - 1
      if (t === void 0) return r
      ;(t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1))
      for (let e = t; e <= i; e++) {
        let t = this.keyAt(e),
          n = this.get(t)
        r.set(t, n)
      }
      return r
    }
    every(e, t) {
      let n = 0
      for (let r of this) {
        if (!Reflect.apply(e, t, [r, n, this])) return !1
        n++
      }
      return !0
    }
    some(e, t) {
      let n = 0
      for (let r of this) {
        if (Reflect.apply(e, t, [r, n, this])) return !0
        n++
      }
      return !1
    }
  }
function q(e, t) {
  if (`at` in Array.prototype) return Array.prototype.at.call(e, t)
  let n = J(e, t)
  return n === -1 ? void 0 : e[n]
}
U(q, `at`)
function J(e, t) {
  let n = e.length,
    r = Y(t),
    i = r >= 0 ? r : n + r
  return i < 0 || i >= n ? -1 : i
}
U(J, `toSafeIndex`)
function Y(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e)
}
U(Y, `toSafeInteger`)
function ve(e) {
  let t = e + `CollectionProvider`,
    [n, r] = C(t),
    [i, a] = n(t, {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new K(),
      setItemMap: U(() => void 0, `setItemMap`),
    }),
    o = U(
      ({ state: e, ...t }) =>
        e ? (0, x.jsx)(u, { ...t, state: e }) : (0, x.jsx)(l, { ...t }),
      `CollectionProvider`,
    )
  o.displayName = t
  let l = U((e) => {
    let t = _()
    return (0, x.jsx)(u, { ...e, state: t })
  }, `CollectionInit`)
  l.displayName = t + `Init`
  let u = U((e) => {
    let { scope: t, children: n, state: r } = e,
      a = b.useRef(null),
      [o, c] = b.useState(null),
      l = s(a, c),
      [u, d] = r
    return (
      b.useEffect(() => {
        if (!o) return
        let e = ye(() => {})
        return (
          e.observe(o, { childList: !0, subtree: !0 }),
          () => {
            e.disconnect()
          }
        )
      }, [o]),
      (0, x.jsx)(i, {
        scope: t,
        itemMap: u,
        setItemMap: d,
        collectionRef: l,
        collectionRefObject: a,
        collectionElement: o,
        children: n,
      })
    )
  }, `CollectionProviderImpl`)
  u.displayName = t + `Impl`
  let d = e + `CollectionSlot`,
    f = c(d),
    p = b.forwardRef((e, t) => {
      let { scope: n, children: r } = e,
        i = a(d, n),
        o = s(t, i.collectionRef)
      return (0, x.jsx)(f, { ref: o, children: r })
    })
  p.displayName = d
  let m = e + `CollectionItemSlot`,
    h = c(m),
    g = b.forwardRef((e, t) => {
      let { scope: n, children: r, ...i } = e,
        o = b.useRef(null),
        [c, l] = b.useState(null),
        u = s(t, o, l),
        { setItemMap: d } = a(m, n),
        f = b.useRef(i)
      X(f.current, i) || (f.current = i)
      let p = f.current
      return (
        b.useEffect(() => {
          let e = p
          return (
            d((t) =>
              c
                ? t.has(c)
                  ? t.set(c, { ...e, element: c }).toSorted(Q)
                  : (t.set(c, { ...e, element: c }), t.toSorted(Q))
                : t,
            ),
            () => {
              d((e) => (!c || !e.has(c) ? e : (e.delete(c), new K(e))))
            }
          )
        }, [c, p, d]),
        (0, x.jsx)(h, { "data-radix-collection-item": ``, ref: u, children: r })
      )
    })
  g.displayName = m
  function _() {
    return b.useState(new K())
  }
  U(_, `useInitCollection`)
  function v(t) {
    let { itemMap: n } = a(e + `CollectionConsumer`, t)
    return n
  }
  return (
    U(v, `useCollection`),
    [
      { Provider: o, Slot: p, ItemSlot: g },
      { createCollectionScope: r, useCollection: v, useInitCollection: _ },
    ]
  )
}
U(ve, `createCollection`)
function X(e, t) {
  if (e === t) return !0
  if (typeof e != `object` || typeof t != `object` || e == null || t == null)
    return !1
  let n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (let r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1
  return !0
}
U(X, `shallowEqual`)
function Z(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)
}
U(Z, `isElementPreceding`)
function Q(e, t) {
  return !e[1].element || !t[1].element
    ? 0
    : Z(e[1].element, t[1].element)
      ? -1
      : 1
}
U(Q, `sortByDocumentPosition`)
function ye(e) {
  return new MutationObserver((t) => {
    for (let n of t)
      if (n.type === `childList`) {
        e()
        return
      }
  })
}
U(ye, `getChildListObserver`)
var be = Object.defineProperty,
  xe = (e, t) => be(e, `name`, { value: t, configurable: !0 }),
  Se = b.createContext(void 0)
function $(e) {
  let t = b.useContext(Se)
  return e || t || `ltr`
}
xe($, `useDirection`)
var Ce = a(`/products/$slug`)({
  loader: ({ params: e }) => {
    let t = l(e.slug)
    if (!t) throw u()
    return { product: t }
  },
  head: ({ loaderData: e }) => {
    let t = e?.product
    return t
      ? {
          meta: [
            { title: `${t.name} — Gentle Giants` },
            { name: `description`, content: t.description },
            { property: `og:title`, content: `${t.name} — Gentle Giants` },
            { property: `og:description`, content: t.tagline },
            { property: `og:type`, content: `product` },
            { name: `twitter:card`, content: `summary_large_image` },
          ],
        }
      : {
          meta: [
            { title: `Product not found — Gentle Giants` },
            { name: `robots`, content: `noindex` },
          ],
        }
  },
  notFoundComponent: i(
    () =>
      o(
        () => import(`./products._slug-DPeXjm4S.js`),
        __vite__mapDeps([0, 1, 2]),
      ),
    `notFoundComponent`,
  ),
  component: i(
    () =>
      o(
        () => import(`./products._slug-mFB5kzZr.js`),
        __vite__mapDeps([3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 2, 12, 13, 14]),
      ),
    `component`,
  ),
})
export {
  me as a,
  E as c,
  h as d,
  d as f,
  ge as i,
  T as l,
  $ as n,
  F as o,
  W as r,
  j as s,
  Ce as t,
  C as u,
}
