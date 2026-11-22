var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }))
    return e
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {}
    function v(e, t, n) {
      ;((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h))
    }
    ;((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          )
        this.updater.enqueueSetState(this, e, t, `setState`)
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
      }))
    function y() {}
    y.prototype = v.prototype
    function b(e, t, n) {
      ;((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h))
    }
    var x = (b.prototype = new y())
    ;((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0))
    var S = Array.isArray
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty
    function E(e, n, r) {
      var i = r.ref
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      }
    }
    function ee(e, t) {
      return E(e.type, t, e.props)
    }
    function D(e) {
      return typeof e == `object` && !!e && e.$$typeof === t
    }
    function O(e) {
      var t = { "=": `=0`, ":": `=2` }
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e]
        })
      )
    }
    var k = /\/+/g
    function A(e, t) {
      return typeof e == `object` && e && e.key != null
        ? O(`` + e.key)
        : t.toString(36)
    }
    function j(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value
        case `rejected`:
          throw e.reason
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t))
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t))
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value
            case `rejected`:
              throw e.reason
          }
      }
      throw e
    }
    function M(e, r, i, a, o) {
      var s = typeof e
      ;(s === `undefined` || s === `boolean`) && (e = null)
      var c = !1
      if (e === null) c = !0
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0
            break
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0
                break
              case d:
                return ((c = e._init), M(c(e._payload), r, i, a, o))
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + A(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(k, `$&/`) + `/`),
              M(o, r, i, ``, function (e) {
                return e
              }))
            : o != null &&
              (D(o) &&
                (o = ee(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(k, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        )
      c = 0
      var l = a === `` ? `.` : a + `:`
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + A(a, u)), (c += M(a, r, i, s, o)))
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + A(a, u++)), (c += M(a, r, i, s, o)))
      else if (s === `object`) {
        if (typeof e.then == `function`) return M(j(e), r, i, a, o)
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        )
      }
      return c
    }
    function N(e, t, n) {
      if (e == null) return e
      var r = [],
        i = 0
      return (
        M(e, r, ``, ``, function (e) {
          return t.call(n, e, i++)
        }),
        r
      )
    }
    function P(e) {
      if (e._status === -1) {
        var t = e._result
        ;((t = t()),
          t.then(
            function (t) {
              ;(e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t))
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)))
      }
      if (e._status === 1) return e._result.default
      throw e._result
    }
    var F =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                })
                if (!window.dispatchEvent(t)) return
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e)
                return
              }
              console.error(e)
            },
      I = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments)
            },
            n,
          )
        },
        count: function (e) {
          var t = 0
          return (
            N(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!D(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            )
          return e
        },
      }
    ;((e.Activity = f),
      (e.Children = I),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e)
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments)
        }
      }),
      (e.cacheSignal = function () {
        return null
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          )
        var r = g({}, e.props),
          i = e.key
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a])
        var a = arguments.length - 2
        if (a === 1) r.children = n
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2]
          r.children = o
        }
        return E(e.type, i, r)
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        )
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r])
        var o = arguments.length - 2
        if (o === 1) i.children = n
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2]
          i.children = s
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r])
        return E(e, a, i)
      }),
      (e.createRef = function () {
        return { current: null }
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e }
      }),
      (e.isValidElement = D),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: P }
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t }
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {}
        w.T = n
        try {
          var r = e(),
            i = w.S
          ;(i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, F))
        } catch (e) {
          F(e)
        } finally {
          ;(t !== null && n.types !== null && (t.types = n.types), (w.T = t))
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh()
      }),
      (e.use = function (e) {
        return w.H.use(e)
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n)
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t)
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e)
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t)
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t)
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e)
      }),
      (e.useId = function () {
        return w.H.useId()
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t)
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t)
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t)
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t)
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n)
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e)
      }),
      (e.useState = function (e) {
        return w.H.useState(e)
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
      }),
      (e.useTransition = function () {
        return w.H.useTransition()
      }),
      (e.version = `19.2.8`))
  }),
  u = o((e, t) => {
    t.exports = l()
  })
function d(e) {
  return e[e.length - 1]
}
function f(e, t) {
  return typeof e == `function` ? e(t) : e
}
var p = Object.prototype.hasOwnProperty
function m(e) {
  for (let t in e) if (p.call(e, t)) return !0
  return !1
}
var h = () => Object.create(null),
  g = (e, t) => _(e, t, !0)
function _(e, t, n, r = 0) {
  if (e === t) return e
  if (r++ > 500) return t
  let i = Array.isArray(e) && Array.isArray(t)
  if (!i && !(v(e) && v(t))) return t
  let a = Object.keys(e),
    o = a.length,
    s = Object.keys(t),
    c = s.length
  if (
    i
      ? o !== e.length ||
        c !== t.length ||
        (o && d(a) !== `${o - 1}`) ||
        (c && d(s) !== `${c - 1}`)
      : o !== Object.getOwnPropertyNames(e).length ||
        c !== Object.getOwnPropertyNames(t).length ||
        Object.getOwnPropertySymbols(t).length
  )
    return t
  let l = 0,
    u,
    f,
    m
  if (i) {
    for (
      ;
      l < c &&
      ((m = l),
      (f = e[m]),
      (u = t[m]),
      (u = f === u ? f : typeof f == `object` ? _(f, u, n, r) : u),
      u === f);
      l++
    );
    if (l === c && o === c) return e
  } else {
    let i = o === c,
      d = !0
    for (; l < c; l++) {
      ;((m = s[l]), (f = e[m]))
      let o = t[m]
      ;((u = f === o ? f : typeof f == `object` ? _(f, o, n, r) : o),
        (i &&= u === f && (a[l] === m || p.call(e, m))),
        (d &&= Object.is(u, o)),
        (a[l] = u))
    }
    if (i) return Object.getOwnPropertySymbols(e).length ? t : e
    if (d) return t
  }
  let g = i ? s.fill(0) : n ? h() : {}
  for (let o = 0; o < c; o++)
    ((m = i ? o : s[o]),
      i
        ? ((f = e[m]),
          o > l &&
            ((u = t[m]),
            (u = f === u ? f : typeof f == `object` ? _(f, u, n, r) : u)),
          (g[m] = o < l ? f : u))
        : (g[m] = a[o]))
  return g
}
function v(e) {
  return !e || typeof e != `object`
    ? !1
    : (Object.getPrototypeOf(e)?.constructor ?? Object) === Object
}
function y(e, t, n, r) {
  if (e === t) return !0
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1
    for (let i = 0, a = e.length; i < a; i++) {
      let a = e[i],
        o = t[i]
      if (a !== o && !y(a, o, n, r)) return !1
    }
    return !0
  }
  if (v(e) && v(t)) {
    if (n) {
      for (let i in t)
        if ((r || t[i] !== void 0) && !y(e[i], t[i], n, r)) return !1
      return !0
    }
    let i = 0
    if (r) i = Object.keys(e).length
    else for (let t in e) e[t] !== void 0 && i++
    for (let a in t)
      if ((r || t[a] !== void 0) && (i-- === 0 || !y(e[a], t[a], n, r)))
        return !1
    return i === 0
  }
  return !1
}
function b(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1
}
var x = /[\x00-\x1f\x7f"<>`{}]/g
function S(e) {
  return e.replace(
    x,
    (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`),
  )
}
function C(e) {
  let t
  try {
    t = decodeURI(e)
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e)
      } catch {
        return e
      }
    })
  }
  return S(t)
}
var w = [`http:`, `https:`, `mailto:`, `tel:`]
function T(e) {
  if (e[0] !== `/` && e.includes(`:`))
    return /^[\x00-\x20]*([a-z][a-z\d+.\t\n\r-]*:)/i
      .exec(e)?.[1]
      ?.replace(/[\t\n\r]/g, ``)
      .toLowerCase()
}
var E = /^[\x00-\x20]*[\\/][\t\n\r]*[\\/]/
function ee(e, t) {
  if (!e) return !1
  if (E.test(e)) return !0
  let n = T(e)
  return n ? !t.has(n) : !1
}
var D = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  O = /[&><\u2028\u2029]/g
function k(e) {
  return e.replace(O, (e) => D[e])
}
function A(e) {
  if (!e) return e
  let t = e
  if (/[%\\\x00-\x1f\x7f]/.test(e)) {
    let n = /%25|%5C/gi,
      r = 0,
      i
    for (t = ``; (i = n.exec(e)) !== null;)
      ((t += C(e.slice(r, i.index)) + i[0]), (r = n.lastIndex))
    t += C(r ? e.slice(r) : e)
  }
  return t
}
function j(e) {
  return /[\s\u0080-\uFFFF]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e
}
function M(e, t) {
  if (e === t) return !0
  if (e.length !== t.length) return !1
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
function N(e) {
  return e.replace(/\/{2,}/g, `/`)
}
function P(e) {
  return e === `/` ? e : e.replace(/^\/+/, ``)
}
function F(e) {
  let t = e.length
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/+$/, ``) : e
}
function I(e) {
  return F(P(e))
}
function L(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e
}
function R(e, t, n = `never`, r) {
  if ((t.includes(`//`) && (t = N(t)), t.startsWith(`/`)))
    return t.length === 1 || n === `preserve`
      ? t
      : n === `always`
        ? t.endsWith(`/`)
          ? t
          : `${t}/`
        : t.endsWith(`/`)
          ? t.slice(0, -1)
          : t
  let i = t === `.`,
    a
  if (r) {
    a = i ? e : e + `\0` + t
    let n = r.get(a)
    if (n) return n
  }
  let o
  if (i) o = e.split(`/`)
  else {
    for (
      e.includes(`//`) && (e = N(e)), o = e.split(`/`);
      o.length > 1 && d(o) === ``;
    )
      o.pop()
    let n = t.split(`/`)
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e]
      r === ``
        ? e
          ? e === t - 1 && o.push(r)
          : (o = [r])
        : r === `..`
          ? o.length > 1
            ? o.pop()
            : (o = [``])
          : r === `.` || o.push(r)
    }
  }
  o.length > 1 &&
    (d(o) === `` ? n === `never` && o.pop() : n === `always` && o.push(``))
  let s = o.join(`/`),
    c = (i ? N(s) : s) || `/`
  return (a && r && r.set(a, c), c)
}
function z(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = new RegExp([...t.keys()].join(`|`).replace(/[.*()]/g, `\\$&`), `g`)
  return (e) => e.replace(n, (e) => t.get(e) ?? e)
}
function B(e) {
  return e == null || e === ``
}
function V(e, t, n) {
  if (typeof t != `string`) return `` + (t ?? void 0)
  let r = e === `_splat`
  if (r && (!t || /^[a-zA-Z0-9\-._~!/]*$/.test(t))) return t
  let i = encodeURIComponent(t)
  return (r && (i = i.replaceAll(`%2F`, `/`)), n ? n(i) : i)
}
function H(e, t, n, r, i) {
  let a = e.endsWith(`/`) ? `/` : ``,
    o = ``
  for (let e of t) {
    if (typeof e == `string`) {
      o += e
      continue
    }
    let [t, s, c, l] = e,
      u = t === 2,
      d = u && l !== void 0 ? l + a : l,
      f = n[s]
    if (t !== 3 || f != null) {
      if ((i && ((i[s] = f), u && (i[`*`] = f)), u && B(f))) {
        if (c === `/` && !d) continue
        f = ``
      }
      o += c + V(s, f, r) + (d || ``)
    }
  }
  return o + a || `/`
}
var te = `Error preloading route! ☝️`,
  U = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`)
    function r(e, n, r) {
      var i = null
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a])
      else r = n
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      )
    }
    ;((e.Fragment = n), (e.jsx = r), (e.jsxs = r))
  }),
  ne = o((e, t) => {
    t.exports = U()
  }),
  W = c(u(), 1),
  re = ne(),
  ie = () => !0,
  ae = () => !1
function oe({ children: e, fallback: t = null }) {
  return (0, re.jsx)(W.Fragment, { children: se() ? e : t })
}
function se(e = !0) {
  return W.useSyncExternalStore(ce, ie, e ? ae : ie)
}
function ce() {
  return () => {}
}
var le = W.createContext(null)
function ue(e) {
  return W.useContext(le)
}
var de = o((e) => {
    var t = u()
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1]
      return (
        o(
          function () {
            ;((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }))
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c })
              })
            )
          },
          [e],
        ),
        s(n),
        n
      )
    }
    function l(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !r(e, n)
      } catch {
        return !0
      }
    }
    function d(e, t) {
      return t()
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore
  }),
  fe = o((e, t) => {
    t.exports = de()
  }),
  pe = o((e) => {
    var t = u(),
      n = fe()
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null)
      if (d.current === null) {
        var f = { hasValue: !1, value: null }
        d.current = f
      } else f = d.current
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value
                if (u(t, e)) return (s = t)
              }
              return (s = e)
            }
            if (((t = s), i(o, e))) return t
            var n = r(e)
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n))
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n
          return [
            function () {
              return e(t())
            },
            c === null
              ? void 0
              : function () {
                  return e(c())
                },
          ]
        },
        [t, n, r, u],
      )
      var p = a(e, d[0], d[1])
      return (
        s(
          function () {
            ;((f.hasValue = !0), (f.value = p))
          },
          [p],
        ),
        l(p),
        p
      )
    }
  }),
  me = o((e, t) => {
    t.exports = pe()
  })()
function he(e, t) {
  return e === t
}
function ge(e, t = (e) => e, n) {
  let r = n?.compare ?? he,
    i = (0, W.useCallback)(
      (t) => {
        let { unsubscribe: n } = e.subscribe(t)
        return n
      },
      [e],
    ),
    a = (0, W.useCallback)(() => e.get(), [e])
  return (0, me.useSyncExternalStoreWithSelector)(i, a, a, t, r)
}
function _e(...e) {
  let t = W.useRef(e),
    n = t.current
  return (
    e.forEach((e, t) => {
      y(n[t], e, !1, !0) || (n[t] = e)
    }),
    t.current
  )
}
function ve(e, t) {
  e.preloadRoute(t).catch((e) => {
    ;(console.warn(e), console.warn(te))
  })
}
var ye = { compare: (e, t) => e[0] === t[0] && e[1] === t[1] }
function be(e, t) {
  let n = typeof e == `string` && T(e)
  if (n) return t.has(n) ? e : null
}
function xe(e, t, n, r, i) {
  let a = L(e.pathname, r),
    o = L(t.pathname, r)
  return (n?.exact
    ? a !== o
    : !(a.startsWith(o) && (a.length === o.length || a[o.length] === `/`))) ||
    ((n?.includeSearch ?? !0) &&
      !y(e.search, t.search, !n?.exact, n?.explicitUndefined))
    ? !1
    : !n?.includeHash || (i && e.hash === t.hash)
}
function Se(e, t, n) {
  let r = ue(),
    i = W.useRef(null),
    a = W.useCallback(
      (e) => {
        if (((i.current = e), typeof t == `function`)) return t(e)
        t && (t.current = e)
      },
      [t],
    ),
    {
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      hashScrollIntoView: u,
      replace: d,
      startTransition: f,
      resetScroll: p,
      viewTransition: m,
      ignoreBlocker: h,
      disabled: g,
      target: _,
      onClick: v,
      onBlur: y,
      onFocus: b,
      onMouseEnter: x,
      onMouseLeave: S,
      onTouchStart: C,
    } = e,
    w = se(!!o?.includeHash),
    [E, ee, D] = _e(e.search, e.params, o),
    [O, k] = W.useMemo(
      () => [e, { ...e }],
      [
        r,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        E,
        ee,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    A = W.useMemo(() => {
      let e = be(s, r.protocolAllowlist)
      if (e !== void 0) {
        let t = [e ?? void 0]
        return () => t
      }
      let t, n
      return (e) => {
        O._fromLocation || (k._fromLocation = e)
        let i = r.buildLocation(k),
          a = je(i, r, g)
        return (
          (!t || t[0] !== a) &&
            ((t = [a, !(g || (a && !T(a))) && void 0]), (n = [a, !0])),
          t[1] !== void 0 && xe(e, i, D, r.basepath, w) ? n : t
        )
      }
    }, [D, g, w, O, k, r, s]),
    [j, M] = ge(r.stores.location, A, ye),
    N = M === void 0 && j,
    P = g || j === void 0,
    F = W.useRef(!1),
    I = e.reloadDocument || N || P ? !1 : (c ?? r.options.defaultPreload),
    L = l ?? r.options.defaultPreloadDelay ?? 0,
    R = W.useCallback(
      (e) => {
        let t = e?.isIntersecting
        if (!(t ?? I === `intent`)) {
          t === !1 && ke(i)
          return
        }
        if (!L) {
          ve(r, O)
          return
        }
        Oe.has(i) ||
          Oe.set(
            i,
            setTimeout(() => {
              ;(Oe.delete(i), ve(r, O))
            }, L),
          )
      },
      [r, O, i, I, L],
    )
  W.useEffect(() => {
    if (!I) return
    I === `render` && !F.current && ((F.current = !0), ve(r, O))
    let e = !0,
      t
    return (
      I === `viewport` &&
        i.current &&
        typeof IntersectionObserver == `function` &&
        ((t = new IntersectionObserver(
          (t) => {
            e && R(t.pop())
          },
          { rootMargin: `100px` },
        )),
        t.observe(i.current)),
      () => {
        ;((e = !1), t?.disconnect(), ke(i))
      }
    )
  }, [r, O, I, R, i])
  let z = Ee(e, n)
  if (((z.ref = t ? a : i), N)) return ((z.href = N), z)
  let B = (e) => {
      let t = _ ?? e.currentTarget.getAttribute(`target`)
      !P &&
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        (!t || t === `_self`) &&
        e.button === 0 &&
        (e.preventDefault(),
        r.navigate({
          ...O,
          replace: d,
          resetScroll: p,
          hashScrollIntoView: u,
          startTransition: f,
          viewTransition: m,
          ignoreBlocker: h,
        }))
    },
    V = () => {
      I === `intent` && ve(r, O)
    },
    H = () => {
      I === `intent` && ke(i)
    }
  return (
    (z.onClick = Ae(v, B)),
    (z.onBlur = Ae(y, H)),
    (z.onFocus = Ae(b, R)),
    (z.onMouseEnter = Ae(x, R)),
    (z.onMouseLeave = Ae(S, H)),
    (z.onTouchStart = Ae(C, V)),
    De(z, e, M, j, P, n)
  )
}
var Ce = {},
  we = { className: `active` },
  Te = new Set([
    `to`,
    `params`,
    `search`,
    `hash`,
    `state`,
    `mask`,
    `from`,
    `unsafeRelative`,
    `_fromLocation`,
    `reloadDocument`,
    `preload`,
    `preloadDelay`,
    `preloadIntentProximity`,
    `hashScrollIntoView`,
    `replace`,
    `startTransition`,
    `resetScroll`,
    `viewTransition`,
    `ignoreBlocker`,
    `activeProps`,
    `inactiveProps`,
    `activeOptions`,
    `_asChild`,
  ])
function Ee(e, t) {
  let n = {}
  for (let r in e)
    Te.has(r) ||
      (r === `type` && t !== void 0) ||
      (r === `disabled` && t === `a`) ||
      (n[r] = e[r])
  return n
}
function De(e, t, n, r, i, a) {
  let {
      activeProps: o,
      inactiveProps: s,
      className: c,
      style: l,
      target: u,
    } = t,
    d = f(n ? o : s, {}) ?? (n ? we : Ce)
  ;(Object.assign(e, d),
    (e.href = r),
    a !== `a` && (e.disabled = i),
    (e.target = u))
  let p = d.style
  ;(l || p) && (e.style = l && p ? { ...l, ...p } : l || p)
  let m = d.className
  return (
    (c || m) && (e.className = c ? (m ? `${c} ${m}` : c) : m),
    i && ((e.role = `link`), (e[`aria-disabled`] = !0)),
    n && ((e[`data-status`] = `active`), (e[`aria-current`] = `page`)),
    e
  )
}
var Oe = new WeakMap(),
  ke = (e) => {
    ;(clearTimeout(Oe.get(e)), Oe.delete(e))
  },
  Ae = (e, t) =>
    e ? (n) => n.defaultPrevented || (e(n), n.defaultPrevented || t(n)) : t
function je(e, t, n) {
  if (n) return
  let r = e.maskedLocation ?? e,
    i = r.external ? r.publicHref : t.history.createHref(r.publicHref) || `/`
  if (!((r.external || i !== r.publicHref) && ee(i, t.protocolAllowlist)))
    return i
}
var Me = W.memo(
  W.forwardRef((e, t) => {
    let n = e._asChild || `a`,
      r = Se(e, t, n),
      i =
        typeof e.children == `function`
          ? e.children({ isActive: r[`data-status`] === `active` })
          : e.children
    return W.createElement(n, r, i)
  }),
  Ne,
)
function Ne(e, t) {
  let n = 0
  for (let r in t)
    if ((n++, e[r] !== t[r] && (!Te.has(r) || !y(e[r], t[r], !1, !0))))
      return !1
  for (let t in e) n--
  return n === 0
}
function Pe(e) {
  var t,
    n,
    r = ``
  if (typeof e == `string` || typeof e == `number`) r += e
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length
      for (t = 0; t < i; t++)
        e[t] && (n = Pe(e[t])) && (r && (r += ` `), (r += n))
    } else for (n in e) e[n] && (r && (r += ` `), (r += n))
  return r
}
function Fe() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Pe(e)) && (r && (r += ` `), (r += t))
  return r
}
var Ie = (e, t) => {
    let n = Array(e.length + t.length)
    for (let t = 0; t < e.length; t++) n[t] = e[t]
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r]
    return n
  },
  Le = (e, t) => ({ classGroupId: e, validator: t }),
  Re = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  ze = `-`,
  Be = [],
  Ve = `arbitrary..`,
  He = (e) => {
    let t = Ge(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return We(e)
        let n = e.split(ze)
        return Ue(n, +(n[0] === `` && n.length > 1), t)
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e]
          return t ? (i ? Ie(i, t) : t) : i || Be
        }
        return n[e] || Be
      },
    }
  },
  Ue = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId
    let r = e[t],
      i = n.nextPart.get(r)
    if (i) {
      let n = Ue(e, t + 1, i)
      if (n) return n
    }
    let a = n.validators
    if (a === null) return
    let o = t === 0 ? e.join(ze) : e.slice(t).join(ze),
      s = a.length
    for (let e = 0; e < s; e++) {
      let t = a[e]
      if (t.validator(o)) return t.classGroupId
    }
  },
  We = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n)
          return r ? Ve + r : void 0
        })(),
  Ge = (e) => {
    let { theme: t, classGroups: n } = e
    return Ke(n, t)
  },
  Ke = (e, t) => {
    let n = Re()
    for (let r in e) {
      let i = e[r]
      qe(i, n, r, t)
    }
    return n
  },
  qe = (e, t, n, r) => {
    let i = e.length
    for (let a = 0; a < i; a++) {
      let i = e[a]
      Je(i, t, n, r)
    }
  },
  Je = (e, t, n, r) => {
    if (typeof e == `string`) {
      Ye(e, t, n)
      return
    }
    if (typeof e == `function`) {
      Xe(e, t, n, r)
      return
    }
    Ze(e, t, n, r)
  },
  Ye = (e, t, n) => {
    let r = e === `` ? t : Qe(t, e)
    r.classGroupId = n
  },
  Xe = (e, t, n, r) => {
    if ($e(e)) {
      qe(e(r), t, n, r)
      return
    }
    ;(t.validators === null && (t.validators = []), t.validators.push(Le(n, e)))
  },
  Ze = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e]
      qe(o, Qe(t, a), n, r)
    }
  },
  Qe = (e, t) => {
    let n = e,
      r = t.split(ze),
      i = r.length
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t)
      ;(i || ((i = Re()), n.nextPart.set(t, i)), (n = i))
    }
    return n
  },
  $e = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  et = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} }
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ;((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))))
      }
    return {
      get(e) {
        let t = n[e]
        if (t !== void 0) return t
        if ((t = r[e]) !== void 0) return (i(e, t), t)
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t)
      },
    }
  },
  tt = `!`,
  nt = `:`,
  rt = [],
  it = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  at = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length
        for (let s = 0; s < o; s++) {
          let o = e[s]
          if (n === 0 && r === 0) {
            if (o === nt) {
              ;(t.push(e.slice(i, s)), (i = s + 1))
              continue
            }
            if (o === `/`) {
              a = s
              continue
            }
          }
          o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1
        s.endsWith(tt)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(tt) && ((c = s.slice(1)), (l = !0))
        let u = a && a > i ? a - i : void 0
        return it(t, l, c, u)
      }
    if (t) {
      let e = t + nt,
        n = r
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : it(rt, !1, t, void 0, !0)
    }
    if (n) {
      let e = r
      r = (t) => n({ className: t, parseClassName: e })
    }
    return r
  },
  ot = (e) => {
    let t = new Map()
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n)
      }),
      (e) => {
        let n = [],
          r = []
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a)
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a)
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n)
      }
    )
  },
  st = (e) => ({
    cache: et(e.cacheSize),
    parseClassName: at(e),
    sortModifiers: ot(e),
    postfixLookupClassGroupIds: ct(e),
    ...He(e),
  }),
  ct = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0
    return t
  },
  lt = /\s+/,
  ut = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(lt),
      l = ``
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t)
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l)
        continue
      }
      let h = !!m,
        g
      if (h) {
        g = r(p.substring(0, m))
        let e = g && o[g] ? r(p) : void 0
        e && e !== g && ((g = e), (h = !1))
      } else g = r(p)
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l)
          continue
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l)
          continue
        }
        h = !1
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + tt : _,
        y = v + g
      if (s.indexOf(y) > -1) continue
      s.push(y)
      let b = i(g, h)
      for (let e = 0; e < b.length; ++e) {
        let t = b[e]
        s.push(v + t)
      }
      l = t + (l.length > 0 ? ` ` + l : l)
    }
    return l
  },
  dt = (...e) => {
    let t = 0,
      n,
      r,
      i = ``
    for (; t < e.length;)
      (n = e[t++]) && (r = ft(n)) && (i && (i += ` `), (i += r))
    return i
  },
  ft = (e) => {
    if (typeof e == `string`) return e
    let t,
      n = ``
    for (let r = 0; r < e.length; r++)
      e[r] && (t = ft(e[r])) && (n && (n += ` `), (n += t))
    return n
  },
  pt = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = st(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e)
        if (t) return t
        let a = ut(e, n)
        return (i(e, a), a)
      }
    return ((a = o), (...e) => a(dt(...e)))
  },
  mt = [],
  G = (e) => {
    let t = (t) => t[e] || mt
    return ((t.isThemeGetter = !0), t)
  },
  ht = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  gt = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  _t = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  vt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yt =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  bt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  xt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  St =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  K = (e) => _t.test(e),
  q = (e) => !!e && !Number.isNaN(Number(e)),
  J = (e) => !!e && Number.isInteger(Number(e)),
  Ct = (e) => e.endsWith(`%`) && q(e.slice(0, -1)),
  Y = (e) => vt.test(e),
  wt = () => !0,
  Tt = (e) => yt.test(e) && !bt.test(e),
  Et = () => !1,
  Dt = (e) => xt.test(e),
  Ot = (e) => St.test(e),
  kt = (e) => !X(e) && !Q(e),
  At = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  jt = (e) => $(e, Jt, Et),
  X = (e) => ht.test(e),
  Z = (e) => $(e, Yt, Tt),
  Mt = (e) => $(e, Xt, q),
  Nt = (e) => $(e, Qt, wt),
  Pt = (e) => $(e, Zt, Et),
  Ft = (e) => $(e, Kt, Et),
  It = (e) => $(e, qt, Ot),
  Lt = (e) => $(e, $t, Dt),
  Q = (e) => gt.test(e),
  Rt = (e) => Gt(e, Yt),
  zt = (e) => Gt(e, Zt),
  Bt = (e) => Gt(e, Kt),
  Vt = (e) => Gt(e, Jt),
  Ht = (e) => Gt(e, qt),
  Ut = (e) => Gt(e, $t, !0),
  Wt = (e) => Gt(e, Qt, !0),
  $ = (e, t, n) => {
    let r = ht.exec(e)
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1
  },
  Gt = (e, t, n = !1) => {
    let r = gt.exec(e)
    return r ? (r[1] ? t(r[1]) : n) : !1
  },
  Kt = (e) => e === `position` || e === `percentage`,
  qt = (e) => e === `image` || e === `url`,
  Jt = (e) => e === `length` || e === `size` || e === `bg-size`,
  Yt = (e) => e === `length`,
  Xt = (e) => e === `number`,
  Zt = (e) => e === `family-name`,
  Qt = (e) => e === `number` || e === `weight`,
  $t = (e) => e === `shadow`,
  en = pt(() => {
    let e = G(`color`),
      t = G(`font`),
      n = G(`text`),
      r = G(`font-weight`),
      i = G(`tracking`),
      a = G(`leading`),
      o = G(`breakpoint`),
      s = G(`container`),
      c = G(`spacing`),
      l = G(`radius`),
      u = G(`shadow`),
      d = G(`inset-shadow`),
      f = G(`text-shadow`),
      p = G(`drop-shadow`),
      m = G(`blur`),
      h = G(`perspective`),
      g = G(`aspect`),
      _ = G(`ease`),
      v = G(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), Q, X],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [Q, X, c],
      T = () => [K, `full`, `auto`, ...w()],
      E = () => [J, `none`, `subgrid`, Q, X],
      ee = () => [`auto`, { span: [`full`, J, Q, X] }, J, Q, X],
      D = () => [J, `auto`, Q, X],
      O = () => [`auto`, `min`, `max`, `fr`, Q, X],
      k = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      A = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      j = () => [`auto`, ...w()],
      M = () => [
        K,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      N = () => [
        K,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      P = () => [
        K,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      F = () => [e, Q, X],
      I = () => [...b(), Bt, Ft, { position: [Q, X] }],
      L = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      R = () => [`auto`, `cover`, `contain`, Vt, jt, { size: [Q, X] }],
      z = () => [Ct, Rt, Z],
      B = () => [``, `none`, `full`, l, Q, X],
      V = () => [``, q, Rt, Z],
      H = () => [`solid`, `dashed`, `dotted`, `double`],
      te = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      U = () => [q, Ct, Bt, Ft],
      ne = () => [``, `none`, m, Q, X],
      W = () => [`none`, q, Q, X],
      re = () => [`none`, q, Q, X],
      ie = () => [q, Q, X],
      ae = () => [K, `full`, ...w()]
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Y],
        breakpoint: [Y],
        color: [wt],
        container: [Y],
        "drop-shadow": [Y],
        ease: [`in`, `out`, `in-out`],
        font: [kt],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Y],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Y],
        shadow: [Y],
        spacing: [`px`, q],
        text: [Y],
        "text-shadow": [Y],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, K, X, Q, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, Q, X] }],
        "container-named": [At],
        columns: [{ columns: [q, X, Q, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [J, `auto`, Q, X] }],
        basis: [{ basis: [K, `full`, `auto`, s, ...w()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [q, K, `auto`, `initial`, `none`, X] }],
        grow: [{ grow: [``, q, Q, X] }],
        shrink: [{ shrink: [``, q, Q, X] }],
        order: [{ order: [J, `first`, `last`, `none`, Q, X] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: ee() }],
        "col-start": [{ "col-start": D() }],
        "col-end": [{ "col-end": D() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: ee() }],
        "row-start": [{ "row-start": D() }],
        "row-end": [{ "row-end": D() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": O() }],
        "auto-rows": [{ "auto-rows": O() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...k(), `normal`] }],
        "justify-items": [{ "justify-items": [...A(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...A()] }],
        "align-content": [{ content: [`normal`, ...k()] }],
        "align-items": [{ items: [...A(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...A(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": k() }],
        "place-items": [{ "place-items": [...A(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...A()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: j() }],
        mx: [{ mx: j() }],
        my: [{ my: j() }],
        ms: [{ ms: j() }],
        me: [{ me: j() }],
        mbs: [{ mbs: j() }],
        mbe: [{ mbe: j() }],
        mt: [{ mt: j() }],
        mr: [{ mr: j() }],
        mb: [{ mb: j() }],
        ml: [{ ml: j() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: M() }],
        "inline-size": [{ inline: [`auto`, ...N()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...N()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...N()] }],
        "block-size": [{ block: [`auto`, ...P()] }],
        "min-block-size": [{ "min-block": [`auto`, ...P()] }],
        "max-block-size": [{ "max-block": [`none`, ...P()] }],
        w: [{ w: [s, `screen`, ...M()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...M()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...M()] },
        ],
        h: [{ h: [`screen`, `lh`, ...M()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...M()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...M()] }],
        "font-size": [{ text: [`base`, n, Rt, Z] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Wt, Nt] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Ct,
              X,
            ],
          },
        ],
        "font-family": [{ font: [zt, Pt, t] }],
        "font-features": [{ "font-features": [X] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, Q, X] }],
        "line-clamp": [{ "line-clamp": [q, `none`, Q, Mt] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, Q, X] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, Q, X] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: F() }],
        "text-color": [{ text: F() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...H(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [q, `from-font`, `auto`, Q, Z] },
        ],
        "text-decoration-color": [{ decoration: F() }],
        "underline-offset": [{ "underline-offset": [q, `auto`, Q, X] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [J, Q, X] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              Q,
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, Q, X] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: I() }],
        "bg-repeat": [{ bg: L() }],
        "bg-size": [{ bg: R() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  J,
                  Q,
                  X,
                ],
                radial: [``, Q, X],
                conic: [J, Q, X],
              },
              Ht,
              It,
            ],
          },
        ],
        "bg-color": [{ bg: F() }],
        "gradient-from-pos": [{ from: z() }],
        "gradient-via-pos": [{ via: z() }],
        "gradient-to-pos": [{ to: z() }],
        "gradient-from": [{ from: F() }],
        "gradient-via": [{ via: F() }],
        "gradient-to": [{ to: F() }],
        rounded: [{ rounded: B() }],
        "rounded-s": [{ "rounded-s": B() }],
        "rounded-e": [{ "rounded-e": B() }],
        "rounded-t": [{ "rounded-t": B() }],
        "rounded-r": [{ "rounded-r": B() }],
        "rounded-b": [{ "rounded-b": B() }],
        "rounded-l": [{ "rounded-l": B() }],
        "rounded-ss": [{ "rounded-ss": B() }],
        "rounded-se": [{ "rounded-se": B() }],
        "rounded-ee": [{ "rounded-ee": B() }],
        "rounded-es": [{ "rounded-es": B() }],
        "rounded-tl": [{ "rounded-tl": B() }],
        "rounded-tr": [{ "rounded-tr": B() }],
        "rounded-br": [{ "rounded-br": B() }],
        "rounded-bl": [{ "rounded-bl": B() }],
        "border-w": [{ border: V() }],
        "border-w-x": [{ "border-x": V() }],
        "border-w-y": [{ "border-y": V() }],
        "border-w-s": [{ "border-s": V() }],
        "border-w-e": [{ "border-e": V() }],
        "border-w-bs": [{ "border-bs": V() }],
        "border-w-be": [{ "border-be": V() }],
        "border-w-t": [{ "border-t": V() }],
        "border-w-r": [{ "border-r": V() }],
        "border-w-b": [{ "border-b": V() }],
        "border-w-l": [{ "border-l": V() }],
        "divide-x": [{ "divide-x": V() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": V() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...H(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...H(), `hidden`, `none`] }],
        "border-color": [{ border: F() }],
        "border-color-x": [{ "border-x": F() }],
        "border-color-y": [{ "border-y": F() }],
        "border-color-s": [{ "border-s": F() }],
        "border-color-e": [{ "border-e": F() }],
        "border-color-bs": [{ "border-bs": F() }],
        "border-color-be": [{ "border-be": F() }],
        "border-color-t": [{ "border-t": F() }],
        "border-color-r": [{ "border-r": F() }],
        "border-color-b": [{ "border-b": F() }],
        "border-color-l": [{ "border-l": F() }],
        "divide-color": [{ divide: F() }],
        "outline-style": [{ outline: [...H(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [q, Q, X] }],
        "outline-w": [{ outline: [``, q, Rt, Z] }],
        "outline-color": [{ outline: F() }],
        shadow: [{ shadow: [``, `none`, u, Ut, Lt] }],
        "shadow-color": [{ shadow: F() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Ut, Lt] }],
        "inset-shadow-color": [{ "inset-shadow": F() }],
        "ring-w": [{ ring: V() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: F() }],
        "ring-offset-w": [{ "ring-offset": [q, Z] }],
        "ring-offset-color": [{ "ring-offset": F() }],
        "inset-ring-w": [{ "inset-ring": V() }],
        "inset-ring-color": [{ "inset-ring": F() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Ut, Lt] }],
        "text-shadow-color": [{ "text-shadow": F() }],
        opacity: [{ opacity: [q, Q, X] }],
        "mix-blend": [
          { "mix-blend": [...te(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": te() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [q] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": U() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": U() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": F() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": F() }],
        "mask-image-t-from-pos": [{ "mask-t-from": U() }],
        "mask-image-t-to-pos": [{ "mask-t-to": U() }],
        "mask-image-t-from-color": [{ "mask-t-from": F() }],
        "mask-image-t-to-color": [{ "mask-t-to": F() }],
        "mask-image-r-from-pos": [{ "mask-r-from": U() }],
        "mask-image-r-to-pos": [{ "mask-r-to": U() }],
        "mask-image-r-from-color": [{ "mask-r-from": F() }],
        "mask-image-r-to-color": [{ "mask-r-to": F() }],
        "mask-image-b-from-pos": [{ "mask-b-from": U() }],
        "mask-image-b-to-pos": [{ "mask-b-to": U() }],
        "mask-image-b-from-color": [{ "mask-b-from": F() }],
        "mask-image-b-to-color": [{ "mask-b-to": F() }],
        "mask-image-l-from-pos": [{ "mask-l-from": U() }],
        "mask-image-l-to-pos": [{ "mask-l-to": U() }],
        "mask-image-l-from-color": [{ "mask-l-from": F() }],
        "mask-image-l-to-color": [{ "mask-l-to": F() }],
        "mask-image-x-from-pos": [{ "mask-x-from": U() }],
        "mask-image-x-to-pos": [{ "mask-x-to": U() }],
        "mask-image-x-from-color": [{ "mask-x-from": F() }],
        "mask-image-x-to-color": [{ "mask-x-to": F() }],
        "mask-image-y-from-pos": [{ "mask-y-from": U() }],
        "mask-image-y-to-pos": [{ "mask-y-to": U() }],
        "mask-image-y-from-color": [{ "mask-y-from": F() }],
        "mask-image-y-to-color": [{ "mask-y-to": F() }],
        "mask-image-radial": [{ "mask-radial": [Q, X] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": U() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": U() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": F() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": F() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [q] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": U() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": U() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": F() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": F() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: I() }],
        "mask-repeat": [{ mask: L() }],
        "mask-size": [{ mask: R() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, Q, X] }],
        filter: [{ filter: [``, `none`, Q, X] }],
        blur: [{ blur: ne() }],
        brightness: [{ brightness: [q, Q, X] }],
        contrast: [{ contrast: [q, Q, X] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Ut, Lt] }],
        "drop-shadow-color": [{ "drop-shadow": F() }],
        grayscale: [{ grayscale: [``, q, Q, X] }],
        "hue-rotate": [{ "hue-rotate": [q, Q, X] }],
        invert: [{ invert: [``, q, Q, X] }],
        saturate: [{ saturate: [q, Q, X] }],
        sepia: [{ sepia: [``, q, Q, X] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, Q, X] }],
        "backdrop-blur": [{ "backdrop-blur": ne() }],
        "backdrop-brightness": [{ "backdrop-brightness": [q, Q, X] }],
        "backdrop-contrast": [{ "backdrop-contrast": [q, Q, X] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, q, Q, X] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [q, Q, X] }],
        "backdrop-invert": [{ "backdrop-invert": [``, q, Q, X] }],
        "backdrop-opacity": [{ "backdrop-opacity": [q, Q, X] }],
        "backdrop-saturate": [{ "backdrop-saturate": [q, Q, X] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, q, Q, X] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              Q,
              X,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [q, `initial`, Q, X] }],
        ease: [{ ease: [`linear`, `initial`, _, Q, X] }],
        delay: [{ delay: [q, Q, X] }],
        animate: [{ animate: [`none`, v, Q, X] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, Q, X] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: W() }],
        "rotate-x": [{ "rotate-x": W() }],
        "rotate-y": [{ "rotate-y": W() }],
        "rotate-z": [{ "rotate-z": W() }],
        scale: [{ scale: re() }],
        "scale-x": [{ "scale-x": re() }],
        "scale-y": [{ "scale-y": re() }],
        "scale-z": [{ "scale-z": re() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: ie() }],
        "skew-x": [{ "skew-x": ie() }],
        "skew-y": [{ "skew-y": ie() }],
        transform: [{ transform: [Q, X, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: ae() }],
        "translate-x": [{ "translate-x": ae() }],
        "translate-y": [{ "translate-y": ae() }],
        "translate-z": [{ "translate-z": ae() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [J, Q, X] }],
        accent: [{ accent: F() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: F() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              Q,
              X,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": F() }],
        "scrollbar-track-color": [{ "scrollbar-track": F() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, Q, X] },
        ],
        fill: [{ fill: [`none`, ...F()] }],
        "stroke-w": [{ stroke: [q, Rt, Z, Mt] }],
        stroke: [{ stroke: [`none`, ...F()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    }
  })
function tn(...e) {
  return en(Fe(e))
}
export {
  d as A,
  k as C,
  p as D,
  m as E,
  o as F,
  c as I,
  E as M,
  _ as N,
  ee as O,
  u as P,
  j as S,
  T,
  w as _,
  ue as a,
  A as b,
  se as c,
  z as d,
  H as f,
  F as g,
  P as h,
  ge as i,
  g as j,
  b as k,
  ne as l,
  I as m,
  Fe as n,
  le as o,
  R as p,
  Me as r,
  oe as s,
  tn as t,
  N as u,
  M as v,
  f as w,
  y as x,
  h as y,
}
