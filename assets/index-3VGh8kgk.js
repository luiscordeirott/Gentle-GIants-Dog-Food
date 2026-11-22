const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-gciycfln.js",
      "assets/utils-CTnPHf1g.js",
      "assets/dist-DcKsCcPt.js",
      "assets/createLucideIcon-DIG6HcwS.js",
      "assets/icons-Ce8y2byg.js",
      "assets/leaf-Hf_9wiRl.js",
      "assets/ProductCard-DCoIzTlK.js",
      "assets/products-DlwfxnYx.js",
      "assets/Starburst-X_oWG3DN.js",
      "assets/quote-BGeQbDNz.js",
      "assets/button-CuKnxT8Q.js",
      "assets/SectionHeading-mwC7hKnT.js",
      "assets/about-BmTg_cM8.js",
      "assets/PageBanner-B6TogIsW.js",
      "assets/checkout-9qvJNrC6.js",
      "assets/useNavigate-BoUDW7wC.js",
      "assets/store-config-B51vm3CT.js",
      "assets/shield-check-gCtisiJE.js",
      "assets/order-CZIZXs3U.js",
      "assets/community-DHS5xcwV.js",
      "assets/login-D1aGtgEH.js",
      "assets/PasswordField-BwIA0mva.js",
      "assets/order-confirmed-BB2Nbl4I.js",
      "assets/register-BDjQUJGP.js",
      "assets/products.index-CtvT_bsE.js",
    ]),
) => i.map((i) => d[i])
import {
  A as e,
  C as t,
  D as n,
  E as r,
  F as i,
  I as a,
  M as o,
  N as s,
  O as c,
  P as l,
  S as u,
  T as d,
  _ as f,
  a as p,
  b as m,
  c as h,
  d as g,
  f as _,
  g as v,
  i as y,
  j as b,
  l as x,
  m as S,
  o as C,
  p as w,
  r as T,
  s as E,
  t as D,
  u as ee,
  v as O,
  w as te,
  x as ne,
  y as re,
} from "./utils-CTnPHf1g.js"
import { r as ie, t as ae } from "./dist-DcKsCcPt.js"
import {
  a as k,
  c as A,
  d as j,
  f as oe,
  i as se,
  l as ce,
  n as le,
  o as M,
  r as ue,
  s as de,
  t as fe,
  u as pe,
} from "./products._slug-BvGqaigP.js"
import {
  a as me,
  c as he,
  d as ge,
  i as _e,
  l as ve,
  n as ye,
  o as be,
  r as xe,
  s as Se,
  t as Ce,
  u as we,
} from "./preload-helper-aJHOanyi.js"
import { t as Te } from "./createLucideIcon-DIG6HcwS.js"
import { i as Ee, n as De, r as Oe, t as ke } from "./store-config-B51vm3CT.js"
import { i as N, n as Ae, r as je, t as Me } from "./button-CuKnxT8Q.js"
import {
  a as Ne,
  i as Pe,
  o as Fe,
  r as Ie,
  t as Le,
} from "./products-DlwfxnYx.js"
var Re = i((e) => {
    function t(e, t) {
      var n = e.length
      e.push(t)
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r]
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r))
        else break a
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0]
    }
    function r(e) {
      if (e.length === 0) return null
      var t = e[0],
        n = e.pop()
      if (n !== t) {
        e[0] = n
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l]
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s))
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l))
          else break a
        }
      }
      return t
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex
      return n === 0 ? e.id - t.id : n
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance
      e.unstable_now = function () {
        return a.now()
      }
    } else {
      var o = Date,
        s = o.now()
      e.unstable_now = function () {
        return o.now() - s
      }
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l)
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i))
        else break
        i = n(l)
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), ee()))
        else {
          var t = n(l)
          t !== null && ne(x, t.startTime - e)
        }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w)
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now()
        T = t
        var i = !0
        try {
          a: {
            ;((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0))
            var a = f
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());
                ) {
                  var o = d.callback
                  if (typeof o == `function`) {
                    ;((d.callback = null), (f = d.priorityLevel))
                    var s = o(d.expirationTime <= t)
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ;((d.callback = s), b(t), (i = !0))
                      break b
                    }
                    ;(d === n(c) && r(c), b(t))
                  } else r(c)
                  d = n(c)
                }
                if (d !== null) i = !0
                else {
                  var u = n(l)
                  ;(u !== null && ne(x, u.startTime - t), (i = !1))
                }
              }
              break a
            } finally {
              ;((d = null), (f = a), (p = !1))
            }
          }
        } finally {
          i ? ee() : (S = !1)
        }
      }
    }
    var ee
    if (typeof y == `function`)
      ee = function () {
        y(D)
      }
    else if (typeof MessageChannel < `u`) {
      var O = new MessageChannel(),
        te = O.port2
      ;((O.port1.onmessage = D),
        (ee = function () {
          te.postMessage(null)
        }))
    } else
      ee = function () {
        _(D, 0)
      }
    function ne(t, n) {
      C = _(function () {
        t(e.unstable_now())
      }, n)
    }
    ;((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5)
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3
            break
          default:
            t = f
        }
        var n = f
        f = t
        try {
          return e()
        } finally {
          f = n
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break
          default:
            e = 3
        }
        var n = f
        f = e
        try {
          return t()
        } finally {
          f = n
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now()
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1
            break
          case 2:
            s = 250
            break
          case 5:
            s = 1073741823
            break
          case 4:
            s = 1e4
            break
          default:
            s = 5e3
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ne(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), ee()))),
          r
        )
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f
        return function () {
          var n = f
          f = t
          try {
            return e.apply(this, arguments)
          } finally {
            f = n
          }
        }
      }))
  }),
  ze = i((e, t) => {
    t.exports = Re()
  }),
  Be = i((e) => {
    var t = ze(),
      n = l(),
      r = ie()
    function i(e) {
      var t = `https://react.dev/errors/` + e
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1])
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n])
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      )
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      )
    }
    function o(e) {
      var t = e,
        n = e
      if (e.alternate) for (; t.return;) t = t.return
      else {
        e = t
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return))
        while (e)
      }
      return t.tag === 3 ? n : null
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated
      }
      return null
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated
      }
      return null
    }
    function u(e) {
      if (o(e) !== e) throw Error(i(188))
    }
    function d(e) {
      var t = e.alternate
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188))
        return t === e ? e : null
      }
      for (var n = e, r = t; ;) {
        var a = n.return
        if (a === null) break
        var s = a.alternate
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r
            continue
          }
          break
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (u(a), e)
            if (s === r) return (u(a), t)
            s = s.sibling
          }
          throw Error(i(188))
        }
        if (n.return !== r.return) ((n = a), (r = s))
        else {
          for (var c = !1, l = a.child; l;) {
            if (l === n) {
              ;((c = !0), (n = a), (r = s))
              break
            }
            if (l === r) {
              ;((c = !0), (r = a), (n = s))
              break
            }
            l = l.sibling
          }
          if (!c) {
            for (l = s.child; l;) {
              if (l === n) {
                ;((c = !0), (n = s), (r = a))
                break
              }
              if (l === r) {
                ;((c = !0), (r = s), (n = a))
                break
              }
              l = l.sibling
            }
            if (!c) throw Error(i(189))
          }
        }
        if (n.alternate !== r) throw Error(i(190))
      }
      if (n.tag !== 3) throw Error(i(188))
      return n.stateNode.current === n ? e : t
    }
    function f(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e
      for (e = e.child; e !== null;) {
        if (((t = f(e)), t !== null)) return t
        e = e.sibling
      }
      return null
    }
    var p = Object.assign,
      m = Symbol.for(`react.element`),
      h = Symbol.for(`react.transitional.element`),
      g = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      v = Symbol.for(`react.strict_mode`),
      y = Symbol.for(`react.profiler`),
      b = Symbol.for(`react.consumer`),
      x = Symbol.for(`react.context`),
      S = Symbol.for(`react.forward_ref`),
      C = Symbol.for(`react.suspense`),
      w = Symbol.for(`react.suspense_list`),
      T = Symbol.for(`react.memo`),
      E = Symbol.for(`react.lazy`),
      D = Symbol.for(`react.activity`),
      ee = Symbol.for(`react.memo_cache_sentinel`),
      O = Symbol.iterator
    function te(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (O && e[O]) || e[`@@iterator`]),
          typeof e == `function` ? e : null)
    }
    var ne = Symbol.for(`react.client.reference`)
    function re(e) {
      if (e == null) return null
      if (typeof e == `function`)
        return e.$$typeof === ne ? null : e.displayName || e.name || null
      if (typeof e == `string`) return e
      switch (e) {
        case _:
          return `Fragment`
        case y:
          return `Profiler`
        case v:
          return `StrictMode`
        case C:
          return `Suspense`
        case w:
          return `SuspenseList`
        case D:
          return `Activity`
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case g:
            return `Portal`
          case x:
            return e.displayName || `Context`
          case b:
            return (e._context.displayName || `Context`) + `.Consumer`
          case S:
            var t = e.render
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            )
          case T:
            return (
              (t = e.displayName || null),
              t === null ? re(e.type) || `Memo` : t
            )
          case E:
            ;((t = e._payload), (e = e._init))
            try {
              return re(e(t))
            } catch {}
        }
      return null
    }
    var ae = Array.isArray,
      k = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      j = { pending: !1, data: null, method: null, action: null },
      oe = [],
      se = -1
    function ce(e) {
      return { current: e }
    }
    function le(e) {
      0 > se || ((e.current = oe[se]), (oe[se] = null), se--)
    }
    function M(e, t) {
      ;(se++, (oe[se] = e.current), (e.current = t))
    }
    var ue = ce(null),
      de = ce(null),
      fe = ce(null),
      pe = ce(null)
    function me(e, t) {
      switch ((M(fe, t), M(de, e), M(ue, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Hd(e) : 0
          break
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Hd(t)), (e = Ud(t, e)))
          else
            switch (e) {
              case `svg`:
                e = 1
                break
              case `math`:
                e = 2
                break
              default:
                e = 0
            }
      }
      ;(le(ue), M(ue, e))
    }
    function he() {
      ;(le(ue), le(de), le(fe))
    }
    function ge(e) {
      e.memoizedState !== null && M(pe, e)
      var t = ue.current,
        n = Ud(t, e.type)
      t !== n && (M(de, e), M(ue, n))
    }
    function _e(e) {
      ;(de.current === e && (le(ue), le(de)),
        pe.current === e && (le(pe), ($f._currentValue = j)))
    }
    var ve, ye
    function be(e) {
      if (ve === void 0)
        try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/)
          ;((ve = (t && t[1]) || ``),
            (ye =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``))
        }
      return (
        `
` +
        ve +
        e +
        ye
      )
    }
    var xe = !1
    function Se(e, t) {
      if (!e || xe) return ``
      xe = !0
      var n = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error()
                }
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error()
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, [])
                  } catch (e) {
                    var r = e
                  }
                  Reflect.construct(e, [], n)
                } else {
                  try {
                    n.call()
                  } catch (e) {
                    r = e
                  }
                  e.call(n.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (e) {
                  r = e
                }
                ;(n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {})
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack]
            }
            return [null, null]
          },
        }
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        )
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          })
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1]
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`)
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `)
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    )
                  }
                while (1 <= r && 0 <= i)
              break
            }
        }
      } finally {
        ;((xe = !1), (Error.prepareStackTrace = n))
      }
      return (n = e ? e.displayName || e.name : ``) ? be(n) : ``
    }
    function Ce(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return be(e.type)
        case 16:
          return be(`Lazy`)
        case 13:
          return e.child !== t && t !== null
            ? be(`Suspense Fallback`)
            : be(`Suspense`)
        case 19:
          return be(`SuspenseList`)
        case 0:
        case 15:
          return Se(e.type, !1)
        case 11:
          return Se(e.type.render, !1)
        case 1:
          return Se(e.type, !0)
        case 31:
          return be(`Activity`)
        default:
          return ``
      }
    }
    function we(e) {
      try {
        var t = ``,
          n = null
        do ((t += Ce(e, n)), (n = e), (e = e.return))
        while (e)
        return t
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        )
      }
    }
    var Te = Object.prototype.hasOwnProperty,
      Ee = t.unstable_scheduleCallback,
      De = t.unstable_cancelCallback,
      Oe = t.unstable_shouldYield,
      ke = t.unstable_requestPaint,
      N = t.unstable_now,
      Ae = t.unstable_getCurrentPriorityLevel,
      je = t.unstable_ImmediatePriority,
      Me = t.unstable_UserBlockingPriority,
      Ne = t.unstable_NormalPriority,
      Pe = t.unstable_LowPriority,
      Fe = t.unstable_IdlePriority,
      Ie = t.log,
      Le = t.unstable_setDisableYieldValue,
      Re = null,
      Be = null
    function Ve(e) {
      if (
        (typeof Ie == `function` && Le(e),
        Be && typeof Be.setStrictMode == `function`)
      )
        try {
          Be.setStrictMode(Re, e)
        } catch {}
    }
    var He = Math.clz32 ? Math.clz32 : Ge,
      Ue = Math.log,
      We = Math.LN2
    function Ge(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ue(e) / We) | 0)) | 0)
    }
    var Ke = 256,
      qe = 262144,
      Je = 4194304
    function Ye(e) {
      var t = e & 42
      if (t !== 0) return t
      switch (e & -e) {
        case 1:
          return 1
        case 2:
          return 2
        case 4:
          return 4
        case 8:
          return 8
        case 16:
          return 16
        case 32:
          return 32
        case 64:
          return 64
        case 128:
          return 128
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560
        case 67108864:
          return 67108864
        case 134217728:
          return 134217728
        case 268435456:
          return 268435456
        case 536870912:
          return 536870912
        case 1073741824:
          return 0
        default:
          return e
      }
    }
    function Xe(e, t, n) {
      var r = e.pendingLanes
      if (r === 0) return 0
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes
      e = e.warmLanes
      var s = r & 134217727
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ye(n)))
                : (i = Ye(o))
              : (i = Ye(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ye(n)))
                  : (i = Ye(o)))
              : (i = Ye(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      )
    }
    function Ze(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Qe(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1
        default:
          return -1
      }
    }
    function $e() {
      var e = Je
      return ((Je <<= 1), !(Je & 62914560) && (Je = 4194304), e)
    }
    function et(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e)
      return t
    }
    function tt(e, t) {
      ;((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
    }
    function nt(e, t, n, r, i, a) {
      var o = e.pendingLanes
      ;((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0))
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates
      for (n = o & ~n; 0 < n;) {
        var u = 31 - He(n),
          d = 1 << u
        ;((s[u] = 0), (c[u] = -1))
        var f = l[u]
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u]
            p !== null && (p.lane &= -536870913)
          }
        n &= ~d
      }
      ;(r !== 0 && rt(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)))
    }
    function rt(e, t, n) {
      ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
      var r = 31 - He(t)
      ;((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)))
    }
    function it(e, t) {
      var n = (e.entangledLanes |= t)
      for (e = e.entanglements; n;) {
        var r = 31 - He(n),
          i = 1 << r
        ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
      }
    }
    function at(e, t) {
      var n = t & -t
      return (
        (n = n & 42 ? 1 : ot(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      )
    }
    function ot(e) {
      switch (e) {
        case 2:
          e = 1
          break
        case 8:
          e = 4
          break
        case 32:
          e = 16
          break
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128
          break
        case 268435456:
          e = 134217728
          break
        default:
          e = 0
      }
      return e
    }
    function st(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      )
    }
    function ct() {
      var e = A.p
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : hp(e.type)) : e
    }
    function lt(e, t) {
      var n = A.p
      try {
        return ((A.p = e), t())
      } finally {
        A.p = n
      }
    }
    var ut = Math.random().toString(36).slice(2),
      dt = `__reactFiber$` + ut,
      ft = `__reactProps$` + ut,
      pt = `__reactContainer$` + ut,
      mt = `__reactEvents$` + ut,
      ht = `__reactListeners$` + ut,
      gt = `__reactHandles$` + ut,
      _t = `__reactResources$` + ut,
      vt = `__reactMarker$` + ut
    function yt(e) {
      ;(delete e[dt], delete e[ft], delete e[mt], delete e[ht], delete e[gt])
    }
    function bt(e) {
      var t = e[dt]
      if (t) return t
      for (var n = e.parentNode; n;) {
        if ((t = n[pt] || n[dt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = ff(e); e !== null;) {
              if ((n = e[dt])) return n
              e = ff(e)
            }
          return t
        }
        ;((e = n), (n = e.parentNode))
      }
      return null
    }
    function xt(e) {
      if ((e = e[dt] || e[pt])) {
        var t = e.tag
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e
      }
      return null
    }
    function St(e) {
      var t = e.tag
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
      throw Error(i(33))
    }
    function Ct(e) {
      var t = e[_t]
      return (
        (t ||= e[_t] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      )
    }
    function wt(e) {
      e[vt] = !0
    }
    var Tt = new Set(),
      Et = {}
    function Dt(e, t) {
      ;(Ot(e, t), Ot(e + `Capture`, t))
    }
    function Ot(e, t) {
      for (Et[e] = t, e = 0; e < t.length; e++) Tt.add(t[e])
    }
    var kt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      At = {},
      jt = {}
    function Mt(e) {
      return Te.call(jt, e)
        ? !0
        : Te.call(At, e)
          ? !1
          : kt.test(e)
            ? (jt[e] = !0)
            : ((At[e] = !0), !1)
    }
    function Nt(e, t, n) {
      if (Mt(t))
        if (n === null) e.removeAttribute(t)
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t)
              return
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5)
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t)
                return
              }
          }
          e.setAttribute(t, `` + n)
        }
    }
    function Pt(e, t, n) {
      if (n === null) e.removeAttribute(t)
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t)
            return
        }
        e.setAttribute(t, `` + n)
      }
    }
    function Ft(e, t, n, r) {
      if (r === null) e.removeAttribute(n)
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n)
            return
        }
        e.setAttributeNS(t, n, `` + r)
      }
    }
    function It(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e
        case `object`:
          return e
        default:
          return ``
      }
    }
    function Lt(e) {
      var t = e.type
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      )
    }
    function Rt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this)
            },
            set: function (e) {
              ;((n = `` + e), a.call(this, e))
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n
            },
            setValue: function (e) {
              n = `` + e
            },
            stopTracking: function () {
              ;((e._valueTracker = null), delete e[t])
            },
          }
        )
      }
    }
    function zt(e) {
      if (!e._valueTracker) {
        var t = Lt(e) ? `checked` : `value`
        e._valueTracker = Rt(e, t, `` + e[t])
      }
    }
    function Bt(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var n = t.getValue(),
        r = ``
      return (
        e && (r = Lt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      )
    }
    function Vt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null
      try {
        return e.activeElement || e.body
      } catch {
        return e.body
      }
    }
    var Ht = /[\n"\\]/g
    function Ut(e) {
      return e.replace(Ht, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `
      })
    }
    function Wt(e, t, n, r, i, a, o, s) {
      ;((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + It(t))
            : e.value !== `` + It(t) && (e.value = `` + It(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Kt(e, o, It(n))
          : Kt(e, o, It(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + It(s))
          : e.removeAttribute(`name`))
    }
    function Gt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          zt(e)
          return
        }
        ;((n = n == null ? `` : `` + It(n)),
          (t = t == null ? n : `` + It(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t))
      }
      ;((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        zt(e))
    }
    function Kt(e, t, n) {
      ;(t === `number` && Vt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n)
    }
    function qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0))
      } else {
        for (n = `` + It(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ;((e[i].selected = !0), r && (e[i].defaultSelected = !0))
            return
          }
          t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
      }
    }
    function Jt(e, t, n) {
      if (
        t != null &&
        ((t = `` + It(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t)
        return
      }
      e.defaultValue = n == null ? `` : `` + It(n)
    }
    function Yt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92))
          if (ae(r)) {
            if (1 < r.length) throw Error(i(93))
            r = r[0]
          }
          n = r
        }
        ;((n ??= ``), (t = n))
      }
      ;((n = It(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        zt(e))
    }
    function Xt(e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t
          return
        }
      }
      e.textContent = t
    }
    var Zt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    )
    function Qt(e, t, n) {
      var r = t.indexOf(`--`) === 0
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Zt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`)
    }
    function $t(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62))
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``))
        for (var a in t)
          ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Qt(e, a, r))
      } else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o])
    }
    function en(e) {
      if (e.indexOf(`-`) === -1) return !1
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1
        default:
          return !0
      }
    }
    var tn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      nn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
    function rn(e) {
      return nn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e
    }
    function an() {}
    var on = null
    function sn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      )
    }
    var cn = null,
      ln = null
    function un(e) {
      var t = xt(e)
      if (t && (e = t.stateNode)) {
        var n = e[ft] || null
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Wt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ut(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t]
                if (r !== e && r.form === e.form) {
                  var a = r[ft] || null
                  if (!a) throw Error(i(90))
                  Wt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  )
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Bt(r))
            }
            break a
          case `textarea`:
            Jt(e, n.value, n.defaultValue)
            break a
          case `select`:
            ;((t = n.value), t != null && qt(e, !!n.multiple, t, !1))
        }
      }
    }
    var dn = !1
    function fn(e, t, n) {
      if (dn) return e(t, n)
      dn = !0
      try {
        return e(t)
      } finally {
        if (
          ((dn = !1),
          (cn !== null || ln !== null) &&
            (xu(), cn && ((t = cn), (e = ln), (ln = cn = null), un(t), e)))
        )
          for (t = 0; t < e.length; t++) un(e[t])
      }
    }
    function pn(e, t) {
      var n = e.stateNode
      if (n === null) return null
      var r = n[ft] || null
      if (r === null) return null
      n = r[t]
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ;((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r))
          break a
        default:
          e = !1
      }
      if (e) return null
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n))
      return n
    }
    var mn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      hn = !1
    if (mn)
      try {
        var gn = {}
        ;(Object.defineProperty(gn, "passive", {
          get: function () {
            hn = !0
          },
        }),
          window.addEventListener(`test`, gn, gn),
          window.removeEventListener(`test`, gn, gn))
      } catch {
        hn = !1
      }
    var _n = null,
      vn = null,
      yn = null
    function bn() {
      if (yn) return yn
      var e,
        t = vn,
        n = t.length,
        r,
        i = `value` in _n ? _n.value : _n.textContent,
        a = i.length
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (yn = i.slice(e, 1 < r ? 1 - r : void 0))
    }
    function xn(e) {
      var t = e.keyCode
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      )
    }
    function Sn() {
      return !0
    }
    function Cn() {
      return !1
    }
    function wn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]))
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Sn
            : Cn),
          (this.isPropagationStopped = Cn),
          this
        )
      }
      return (
        p(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var e = this.nativeEvent
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Sn))
          },
          stopPropagation: function () {
            var e = this.nativeEvent
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Sn))
          },
          persist: function () {},
          isPersistent: Sn,
        }),
        t
      )
    }
    var Tn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      En = wn(Tn),
      Dn = p({}, Tn, { view: 0, detail: 0 }),
      On = wn(Dn),
      kn,
      An,
      jn,
      Mn = p({}, Dn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Un,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== jn &&
                (jn && e.type === `mousemove`
                  ? ((kn = e.screenX - jn.screenX),
                    (An = e.screenY - jn.screenY))
                  : (An = kn = 0),
                (jn = e)),
              kn)
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : An
        },
      }),
      Nn = wn(Mn),
      Pn = wn(p({}, Mn, { dataTransfer: 0 })),
      Fn = wn(p({}, Dn, { relatedTarget: 0 })),
      In = wn(
        p({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      Ln = wn(
        p({}, Tn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData
          },
        }),
      ),
      Rn = wn(p({}, Tn, { data: 0 })),
      zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Bn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Vn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      }
    function Hn(e) {
      var t = this.nativeEvent
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Vn[e])
          ? !!t[e]
          : !1
    }
    function Un() {
      return Hn
    }
    var Wn = wn(
        p({}, Dn, {
          key: function (e) {
            if (e.key) {
              var t = zn[e.key] || e.key
              if (t !== `Unidentified`) return t
            }
            return e.type === `keypress`
              ? ((e = xn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Bn[e.keyCode] || `Unidentified`
                : ``
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Un,
          charCode: function (e) {
            return e.type === `keypress` ? xn(e) : 0
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
          },
          which: function (e) {
            return e.type === `keypress`
              ? xn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0
          },
        }),
      ),
      Gn = wn(
        p({}, Mn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Kn = wn(
        p({}, Dn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Un,
        }),
      ),
      qn = wn(p({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Jn = wn(
        p({}, Mn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Yn = wn(p({}, Tn, { newState: 0, oldState: 0 })),
      Xn = [9, 13, 27, 32],
      Zn = mn && `CompositionEvent` in window,
      Qn = null
    mn && `documentMode` in document && (Qn = document.documentMode)
    var $n = mn && `TextEvent` in window && !Qn,
      er = mn && (!Zn || (Qn && 8 < Qn && 11 >= Qn)),
      tr = ` `,
      nr = !1
    function rr(e, t) {
      switch (e) {
        case `keyup`:
          return Xn.indexOf(t.keyCode) !== -1
        case `keydown`:
          return t.keyCode !== 229
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0
        default:
          return !1
      }
    }
    function ir(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      )
    }
    var ar = !1
    function or(e, t) {
      switch (e) {
        case `compositionend`:
          return ir(t)
        case `keypress`:
          return t.which === 32 ? ((nr = !0), tr) : null
        case `textInput`:
          return ((e = t.data), e === tr && nr ? null : e)
        default:
          return null
      }
    }
    function sr(e, t) {
      if (ar)
        return e === `compositionend` || (!Zn && rr(e, t))
          ? ((e = bn()), (yn = vn = _n = null), (ar = !1), e)
          : null
      switch (e) {
        case `paste`:
          return null
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char
            if (t.which) return String.fromCharCode(t.which)
          }
          return null
        case `compositionend`:
          return er && t.locale !== `ko` ? null : t.data
        default:
          return null
      }
    }
    var cr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    }
    function lr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return t === `input` ? !!cr[e.type] : t === `textarea`
    }
    function ur(e, t, n, r) {
      ;(cn ? (ln ? ln.push(r) : (ln = [r])) : (cn = r),
        (t = Dd(t, `onChange`)),
        0 < t.length &&
          ((n = new En(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })))
    }
    var dr = null,
      fr = null
    function pr(e) {
      bd(e, 0)
    }
    function mr(e) {
      if (Bt(St(e))) return e
    }
    function hr(e, t) {
      if (e === `change`) return t
    }
    var gr = !1
    if (mn) {
      var _r
      if (mn) {
        var vr = `oninput` in document
        if (!vr) {
          var yr = document.createElement(`div`)
          ;(yr.setAttribute(`oninput`, `return;`),
            (vr = typeof yr.oninput == `function`))
        }
        _r = vr
      } else _r = !1
      gr = _r && (!document.documentMode || 9 < document.documentMode)
    }
    function br() {
      dr && (dr.detachEvent(`onpropertychange`, xr), (fr = dr = null))
    }
    function xr(e) {
      if (e.propertyName === `value` && mr(fr)) {
        var t = []
        ;(ur(t, fr, e, sn(e)), fn(pr, t))
      }
    }
    function Sr(e, t, n) {
      e === `focusin`
        ? (br(), (dr = t), (fr = n), dr.attachEvent(`onpropertychange`, xr))
        : e === `focusout` && br()
    }
    function Cr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return mr(fr)
    }
    function wr(e, t) {
      if (e === `click`) return mr(t)
    }
    function Tr(e, t) {
      if (e === `input` || e === `change`) return mr(t)
    }
    function Er(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var Dr = typeof Object.is == `function` ? Object.is : Er
    function Or(e, t) {
      if (Dr(e, t)) return !0
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1
      var n = Object.keys(e),
        r = Object.keys(t)
      if (n.length !== r.length) return !1
      for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!Te.call(t, i) || !Dr(e[i], t[i])) return !1
      }
      return !0
    }
    function P(e) {
      for (; e && e.firstChild;) e = e.firstChild
      return e
    }
    function kr(e, t) {
      var n = P(e)
      e = 0
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e }
          e = r
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling
              break a
            }
            n = n.parentNode
          }
          n = void 0
        }
        n = P(n)
      }
    }
    function Ar(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Ar(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1
    }
    function jr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window
      for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`
        } catch {
          n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Vt(e.document)
      }
      return t
    }
    function Mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      )
    }
    var Nr = mn && `documentMode` in document && 11 >= document.documentMode,
      Pr = null,
      Fr = null,
      Ir = null,
      Lr = !1
    function Rr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
      Lr ||
        Pr == null ||
        Pr !== Vt(r) ||
        ((r = Pr),
        `selectionStart` in r && Mr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Ir && Or(Ir, r)) ||
          ((Ir = r),
          (r = Dd(Fr, `onSelect`)),
          0 < r.length &&
            ((t = new En(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Pr))))
    }
    function zr(e, t) {
      var n = {}
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      )
    }
    var Br = {
        animationend: zr(`Animation`, `AnimationEnd`),
        animationiteration: zr(`Animation`, `AnimationIteration`),
        animationstart: zr(`Animation`, `AnimationStart`),
        transitionrun: zr(`Transition`, `TransitionRun`),
        transitionstart: zr(`Transition`, `TransitionStart`),
        transitioncancel: zr(`Transition`, `TransitionCancel`),
        transitionend: zr(`Transition`, `TransitionEnd`),
      },
      Vr = {},
      Hr = {}
    mn &&
      ((Hr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Br.animationend.animation,
        delete Br.animationiteration.animation,
        delete Br.animationstart.animation),
      `TransitionEvent` in window || delete Br.transitionend.transition)
    function Ur(e) {
      if (Vr[e]) return Vr[e]
      if (!Br[e]) return e
      var t = Br[e],
        n
      for (n in t) if (t.hasOwnProperty(n) && n in Hr) return (Vr[e] = t[n])
      return e
    }
    var Wr = Ur(`animationend`),
      Gr = Ur(`animationiteration`),
      Kr = Ur(`animationstart`),
      qr = Ur(`transitionrun`),
      Jr = Ur(`transitionstart`),
      Yr = Ur(`transitioncancel`),
      Xr = Ur(`transitionend`),
      Zr = new Map(),
      Qr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        )
    Qr.push(`scrollEnd`)
    function $r(e, t) {
      ;(Zr.set(e, t), Dt(t, [e]))
    }
    var ei =
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
      ti = [],
      ni = 0,
      ri = 0
    function ii() {
      for (var e = ni, t = (ri = ni = 0); t < e;) {
        var n = ti[t]
        ti[t++] = null
        var r = ti[t]
        ti[t++] = null
        var i = ti[t]
        ti[t++] = null
        var a = ti[t]
        if (((ti[t++] = null), r !== null && i !== null)) {
          var o = r.pending
          ;(o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i))
        }
        a !== 0 && ci(n, i, a)
      }
    }
    function ai(e, t, n, r) {
      ;((ti[ni++] = e),
        (ti[ni++] = t),
        (ti[ni++] = n),
        (ti[ni++] = r),
        (ri |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r))
    }
    function oi(e, t, n, r) {
      return (ai(e, t, n, r), li(e))
    }
    function si(e, t) {
      return (ai(e, null, null, t), li(e))
    }
    function ci(e, t, n) {
      e.lanes |= n
      var r = e.alternate
      r !== null && (r.lanes |= n)
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return))
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - He(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null
    }
    function li(e) {
      if (50 < fu) throw ((fu = 0), (pu = null), Error(i(185)))
      for (var t = e.return; t !== null;) ((e = t), (t = e.return))
      return e.tag === 3 ? e.stateNode : null
    }
    var ui = {}
    function di(e, t, n, r) {
      ;((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null))
    }
    function fi(e, t, n, r) {
      return new di(e, t, n, r)
    }
    function pi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent))
    }
    function mi(e, t) {
      var n = e.alternate
      return (
        n === null
          ? ((n = fi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      )
    }
    function hi(e, t) {
      e.flags &= 65011714
      var n = e.alternate
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      )
    }
    function gi(e, t, n, r, a, o) {
      var s = 0
      if (((r = e), typeof e == `function`)) pi(e) && (s = 1)
      else if (typeof e == `string`)
        s = Wf(e, n, ue.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5
      else
        a: switch (e) {
          case D:
            return (
              (e = fi(31, n, t, a)),
              (e.elementType = D),
              (e.lanes = o),
              e
            )
          case _:
            return _i(n.children, a, o, t)
          case v:
            ;((s = 8), (a |= 24))
            break
          case y:
            return (
              (e = fi(12, n, t, a | 2)),
              (e.elementType = y),
              (e.lanes = o),
              e
            )
          case C:
            return (
              (e = fi(13, n, t, a)),
              (e.elementType = C),
              (e.lanes = o),
              e
            )
          case w:
            return (
              (e = fi(19, n, t, a)),
              (e.elementType = w),
              (e.lanes = o),
              e
            )
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case x:
                  s = 10
                  break a
                case b:
                  s = 9
                  break a
                case S:
                  s = 11
                  break a
                case T:
                  s = 14
                  break a
                case E:
                  ;((s = 16), (r = null))
                  break a
              }
            ;((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null))
        }
      return (
        (t = fi(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      )
    }
    function _i(e, t, n, r) {
      return ((e = fi(7, e, r, t)), (e.lanes = n), e)
    }
    function vi(e, t, n) {
      return ((e = fi(6, e, null, t)), (e.lanes = n), e)
    }
    function yi(e) {
      var t = fi(18, null, null, 0)
      return ((t.stateNode = e), t)
    }
    function bi(e, t, n) {
      return (
        (t = fi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      )
    }
    var xi = new WeakMap()
    function Si(e, t) {
      if (typeof e == `object` && e) {
        var n = xi.get(e)
        return n === void 0
          ? ((t = { value: e, source: t, stack: we(t) }), xi.set(e, t), t)
          : n
      }
      return { value: e, source: t, stack: we(t) }
    }
    var Ci = [],
      wi = 0,
      Ti = null,
      Ei = 0,
      Di = [],
      Oi = 0,
      ki = null,
      Ai = 1,
      ji = ``
    function Mi(e, t) {
      ;((Ci[wi++] = Ei), (Ci[wi++] = Ti), (Ti = e), (Ei = t))
    }
    function Ni(e, t, n) {
      ;((Di[Oi++] = Ai), (Di[Oi++] = ji), (Di[Oi++] = ki), (ki = e))
      var r = Ai
      e = ji
      var i = 32 - He(r) - 1
      ;((r &= ~(1 << i)), (n += 1))
      var a = 32 - He(t) + i
      if (30 < a) {
        var o = i - (i % 5)
        ;((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ai = (1 << (32 - He(t) + i)) | (n << i) | r),
          (ji = a + e))
      } else ((Ai = (1 << a) | (n << i) | r), (ji = e))
    }
    function Pi(e) {
      e.return !== null && (Mi(e, 1), Ni(e, 1, 0))
    }
    function Fi(e) {
      for (; e === Ti;)
        ((Ti = Ci[--wi]), (Ci[wi] = null), (Ei = Ci[--wi]), (Ci[wi] = null))
      for (; e === ki;)
        ((ki = Di[--Oi]),
          (Di[Oi] = null),
          (ji = Di[--Oi]),
          (Di[Oi] = null),
          (Ai = Di[--Oi]),
          (Di[Oi] = null))
    }
    function Ii(e, t) {
      ;((Di[Oi++] = Ai),
        (Di[Oi++] = ji),
        (Di[Oi++] = ki),
        (Ai = t.id),
        (ji = t.overflow),
        (ki = e))
    }
    var Li = null,
      F = null,
      I = !1,
      Ri = null,
      zi = !1,
      Bi = Error(i(519))
    function Vi(e) {
      throw (
        qi(
          Si(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Bi
      )
    }
    function Hi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps
      switch (((t[dt] = e), (t[ft] = r), n)) {
        case `dialog`:
          ;(Z(`cancel`, t), Z(`close`, t))
          break
        case `iframe`:
        case `object`:
        case `embed`:
          Z(`load`, t)
          break
        case `video`:
        case `audio`:
          for (n = 0; n < vd.length; n++) Z(vd[n], t)
          break
        case `source`:
          Z(`error`, t)
          break
        case `img`:
        case `image`:
        case `link`:
          ;(Z(`error`, t), Z(`load`, t))
          break
        case `details`:
          Z(`toggle`, t)
          break
        case `input`:
          ;(Z(`invalid`, t),
            Gt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ))
          break
        case `select`:
          Z(`invalid`, t)
          break
        case `textarea`:
          ;(Z(`invalid`, t), Yt(t, r.value, r.defaultValue, r.children))
      }
      ;((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Nd(t.textContent, n)
          ? (r.popover != null && (Z(`beforetoggle`, t), Z(`toggle`, t)),
            r.onScroll != null && Z(`scroll`, t),
            r.onScrollEnd != null && Z(`scrollend`, t),
            r.onClick != null && (t.onclick = an),
            (t = !0))
          : (t = !1),
        t || Vi(e, !0))
    }
    function Ui(e) {
      for (Li = e.return; Li;)
        switch (Li.tag) {
          case 5:
          case 31:
          case 13:
            zi = !1
            return
          case 27:
          case 3:
            zi = !0
            return
          default:
            Li = Li.return
        }
    }
    function Wi(e) {
      if (e !== Li) return !1
      if (!I) return (Ui(e), (I = !0), !1)
      var t = e.tag,
        n
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || Wd(e.type, e.memoizedProps))),
          (n = !n)),
        n && F && Vi(e),
        Ui(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317))
        F = df(e)
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317))
        F = df(e)
      } else
        t === 27
          ? ((t = F), Qd(e.type) ? ((e = uf), (uf = null), (F = e)) : (F = t))
          : (F = Li ? lf(e.stateNode.nextSibling) : null)
      return !0
    }
    function Gi() {
      ;((F = Li = null), (I = !1))
    }
    function Ki() {
      var e = Ri
      return (
        e !== null &&
          (Ql === null ? (Ql = e) : Ql.push.apply(Ql, e), (Ri = null)),
        e
      )
    }
    function qi(e) {
      Ri === null ? (Ri = [e]) : Ri.push(e)
    }
    var Ji = ce(null),
      Yi = null,
      Xi = null
    function Zi(e, t, n) {
      ;(M(Ji, t._currentValue), (t._currentValue = n))
    }
    function Qi(e) {
      ;((e._currentValue = Ji.current), le(Ji))
    }
    function $i(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break
        e = e.return
      }
    }
    function ea(e, t, n, r) {
      var a = e.child
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies
        if (o !== null) {
          var s = a.child
          o = o.firstContext
          a: for (; o !== null;) {
            var c = o
            o = a
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ;((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  $i(o.return, n, e),
                  r || (s = null))
                break a
              }
            o = c.next
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341))
          ;((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            $i(s, n, e),
            (s = null))
        } else s = a.child
        if (s !== null) s.return = a
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null
              break
            }
            if (((a = s.sibling), a !== null)) {
              ;((a.return = s.return), (s = a))
              break
            }
            s = s.return
          }
        a = s
      }
    }
    function ta(e, t, n, r) {
      e = null
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0
          else if (a.flags & 262144) break
        }
        if (a.tag === 10) {
          var s = a.alternate
          if (s === null) throw Error(i(387))
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type
            Dr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c))
          }
        } else if (a === pe.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387))
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [$f]) : e.push($f))
        }
        a = a.return
      }
      ;(e !== null && ea(t, e, n, r), (t.flags |= 262144))
    }
    function na(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Dr(e.context._currentValue, e.memoizedValue)) return !0
        e = e.next
      }
      return !1
    }
    function ra(e) {
      ;((Yi = e),
        (Xi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null))
    }
    function ia(e) {
      return L(Yi, e)
    }
    function aa(e, t) {
      return (Yi === null && ra(e), L(e, t))
    }
    function L(e, t) {
      var n = t._currentValue
      if (((t = { context: t, memoizedValue: n, next: null }), Xi === null)) {
        if (e === null) throw Error(i(308))
        ;((Xi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288))
      } else Xi = Xi.next = t
      return n
    }
    var oa =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n)
                  },
                })
              this.abort = function () {
                ;((t.aborted = !0),
                  e.forEach(function (e) {
                    return e()
                  }))
              }
            },
      sa = t.unstable_scheduleCallback,
      ca = t.unstable_NormalPriority,
      R = {
        $$typeof: x,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      }
    function la() {
      return { controller: new oa(), data: new Map(), refCount: 0 }
    }
    function ua(e) {
      ;(e.refCount--,
        e.refCount === 0 &&
          sa(ca, function () {
            e.controller.abort()
          }))
    }
    var da = null,
      fa = 0,
      pa = 0,
      ma = null
    function ha(e, t) {
      if (da === null) {
        var n = (da = [])
        ;((fa = 0),
          (pa = fd()),
          (ma = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e)
            },
          }))
      }
      return (fa++, t.then(ga, ga), t)
    }
    function ga() {
      if (--fa === 0 && da !== null) {
        ma !== null && (ma.status = `fulfilled`)
        var e = da
        ;((da = null), (pa = 0), (ma = null))
        for (var t = 0; t < e.length; t++) (0, e[t])()
      }
    }
    function _a(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e)
          },
        }
      return (
        e.then(
          function () {
            ;((r.status = `fulfilled`), (r.value = t))
            for (var e = 0; e < n.length; e++) (0, n[e])(t)
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0)
          },
        ),
        r
      )
    }
    var va = k.S
    k.S = function (e, t) {
      ;((tu = N()),
        typeof t == `object` && t && typeof t.then == `function` && ha(e, t),
        va !== null && va(e, t))
    }
    var ya = ce(null)
    function ba() {
      var e = ya.current
      return e === null ? K.pooledCache : e
    }
    function xa(e, t) {
      t === null ? M(ya, ya.current) : M(ya, t.pool)
    }
    function Sa() {
      var e = ba()
      return e === null ? null : { parent: R._currentValue, pool: e }
    }
    var Ca = Error(i(460)),
      wa = Error(i(474)),
      Ta = Error(i(542)),
      Ea = { then: function () {} }
    function Da(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`)
    }
    function Oa(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(an, an), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value
        case `rejected`:
          throw ((e = t.reason), Ma(e), e)
        default:
          if (typeof t.status == `string`) t.then(an, an)
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482))
            ;((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `fulfilled`), (n.value = e))
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t
                    ;((n.status = `rejected`), (n.reason = e))
                  }
                },
              ))
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value
            case `rejected`:
              throw ((e = t.reason), Ma(e), e)
          }
          throw ((Aa = t), Ca)
      }
    }
    function ka(e) {
      try {
        var t = e._init
        return t(e._payload)
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Aa = e), Ca)
          : e
      }
    }
    var Aa = null
    function ja() {
      if (Aa === null) throw Error(i(459))
      var e = Aa
      return ((Aa = null), e)
    }
    function Ma(e) {
      if (e === Ca || e === Ta) throw Error(i(483))
    }
    var Na = null,
      Pa = 0
    function Fa(e) {
      var t = Pa
      return ((Pa += 1), Na === null && (Na = []), Oa(Na, e, t))
    }
    function Ia(e, t) {
      ;((t = t.props.ref), (e.ref = t === void 0 ? null : t))
    }
    function La(e, t) {
      throw t.$$typeof === m
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ))
    }
    function Ra(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
        }
      }
      function n(n, r) {
        if (!e) return null
        for (; r !== null;) (t(n, r), (r = r.sibling))
        return null
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling))
        return t
      }
      function a(e, t) {
        return ((e = mi(e, t)), (e.index = 0), (e.sibling = null), e)
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        )
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t)
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = vi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function l(e, t, n, r) {
        var i = n.type
        return i === _
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === E &&
                  ka(i) === t.type))
            ? ((t = a(t, n.props)), Ia(t, n), (t.return = e), t)
            : ((t = gi(n.type, n.key, n.props, null, e.mode, r)),
              Ia(t, n),
              (t.return = e),
              t)
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = bi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t)
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = _i(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t)
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = vi(`` + t, e.mode, n)), (t.return = e), t)
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case h:
              return (
                (n = gi(t.type, t.key, t.props, null, e.mode, n)),
                Ia(n, t),
                (n.return = e),
                n
              )
            case g:
              return ((t = bi(t, e.mode, n)), (t.return = e), t)
            case E:
              return ((t = ka(t)), f(e, t, n))
          }
          if (ae(t) || te(t))
            return ((t = _i(t, e.mode, n, null)), (t.return = e), t)
          if (typeof t.then == `function`) return f(e, Fa(t), n)
          if (t.$$typeof === x) return f(e, aa(e, t), n)
          La(e, t)
        }
        return null
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case h:
              return n.key === i ? l(e, t, n, r) : null
            case g:
              return n.key === i ? u(e, t, n, r) : null
            case E:
              return ((n = ka(n)), p(e, t, n, r))
          }
          if (ae(n) || te(n)) return i === null ? d(e, t, n, r, null) : null
          if (typeof n.then == `function`) return p(e, t, Fa(n), r)
          if (n.$$typeof === x) return p(e, t, aa(e, n), r)
          La(e, n)
        }
        return null
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i))
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case h:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              )
            case g:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              )
            case E:
              return ((r = ka(r)), m(e, t, n, r, i))
          }
          if (ae(r) || te(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null))
          if (typeof r.then == `function`) return m(e, t, n, Fa(r), i)
          if (r.$$typeof === x) return m(e, t, n, aa(t, r), i)
          La(t, r)
        }
        return null
      }
      function v(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling)
          var _ = p(i, d, s[h], c)
          if (_ === null) {
            d === null && (d = g)
            break
          }
          ;(e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g))
        }
        if (h === s.length) return (n(i, d), I && Mi(i, h), l)
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)))
          return (I && Mi(i, h), l)
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)))
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e)
            }),
          I && Mi(i, h),
          l
        )
      }
      function y(a, s, c, l) {
        if (c == null) throw Error(i(151))
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling)
          var y = p(a, h, v.value, l)
          if (y === null) {
            h === null && (h = _)
            break
          }
          ;(e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _))
        }
        if (v.done) return (n(a, h), I && Mi(a, g), u)
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)))
          return (I && Mi(a, g), u)
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)))
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e)
            }),
          I && Mi(a, g),
          u
        )
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === _ &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case h:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === _)) {
                      if (r.tag === 7) {
                        ;(n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          (c.return = e),
                          (e = c))
                        break a
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === E &&
                        ka(l) === r.type)
                    ) {
                      ;(n(e, r.sibling),
                        (c = a(r, o.props)),
                        Ia(c, o),
                        (c.return = e),
                        (e = c))
                      break a
                    }
                    n(e, r)
                    break
                  }
                  ;(t(e, r), (r = r.sibling))
                }
                o.type === _
                  ? ((c = _i(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = gi(o.type, o.key, o.props, null, e.mode, c)),
                    Ia(c, o),
                    (c.return = e),
                    (e = c))
              }
              return s(e)
            case g:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      ;(n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c))
                      break a
                    } else {
                      n(e, r)
                      break
                    }
                  ;(t(e, r), (r = r.sibling))
                }
                ;((c = bi(o, e.mode, c)), (c.return = e), (e = c))
              }
              return s(e)
            case E:
              return ((o = ka(o)), b(e, r, o, c))
          }
          if (ae(o)) return v(e, r, o, c)
          if (te(o)) {
            if (((l = te(o)), typeof l != `function`)) throw Error(i(150))
            return ((o = l.call(o)), y(e, r, o, c))
          }
          if (typeof o.then == `function`) return b(e, r, Fa(o), c)
          if (o.$$typeof === x) return b(e, r, aa(e, o), c)
          La(e, o)
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = vi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r)
      }
      return function (e, t, n, r) {
        try {
          Pa = 0
          var i = b(e, t, n, r)
          return ((Na = null), i)
        } catch (t) {
          if (t === Ca || t === Ta) throw t
          var a = fi(29, t, null, e.mode)
          return ((a.lanes = r), (a.return = e), a)
        }
      }
    }
    var za = Ra(!0),
      Ba = Ra(!1),
      Va = !1
    function Ha(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      }
    }
    function Ua(e, t) {
      ;((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }))
    }
    function Wa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null }
    }
    function Ga(e, t, n) {
      var r = e.updateQueue
      if (r === null) return null
      if (((r = r.shared), G & 2)) {
        var i = r.pending
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = li(e)),
          ci(e, null, n),
          t
        )
      }
      return (ai(e, r, t, n), li(e))
    }
    function Ka(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), it(e, n))
      }
    }
    function qa(e, t) {
      var n = e.updateQueue,
        r = e.alternate
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            }
            ;(a === null ? (i = a = o) : (a = a.next = o), (n = n.next))
          } while (n !== null)
          a === null ? (i = a = t) : (a = a.next = t)
        } else i = a = t
        ;((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n))
        return
      }
      ;((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t))
    }
    var Ja = !1
    function Ya() {
      if (Ja) {
        var e = ma
        if (e !== null) throw e
      }
    }
    function Xa(e, t, n, r) {
      Ja = !1
      var i = e.updateQueue
      Va = !1
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending
      if (s !== null) {
        i.shared.pending = null
        var c = s,
          l = c.next
        ;((c.next = null), o === null ? (a = l) : (o.next = l), (o = c))
        var u = e.alternate
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)))
      }
      if (a !== null) {
        var d = i.baseState
        ;((o = 0), (u = l = c = null), (s = a))
        do {
          var f = s.lane & -536870913,
            m = f !== s.lane
          if (m ? (J & f) === f : (r & f) === f) {
            ;(f !== 0 && f === pa && (Ja = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }))
            a: {
              var h = e,
                g = s
              f = t
              var _ = n
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f)
                    break a
                  }
                  d = h
                  break a
                case 3:
                  h.flags = (h.flags & -65537) | 128
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a
                  d = p({}, d, f)
                  break a
                case 2:
                  Va = !0
              }
            }
            ;((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [f]) : m.push(f)))
          } else
            ((m = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= f))
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break
            ;((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null))
          }
        } while (1)
        ;(u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Kl |= o),
          (e.lanes = o),
          (e.memoizedState = d))
      }
    }
    function Za(e, t) {
      if (typeof e != `function`) throw Error(i(191, e))
      e.call(t)
    }
    function Qa(e, t) {
      var n = e.callbacks
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Za(n[e], t)
    }
    var $a = ce(null),
      eo = ce(0)
    function to(e, t) {
      ;((e = Wl), M(eo, e), M($a, t), (Wl = e | t.baseLanes))
    }
    function no() {
      ;(M(eo, Wl), M($a, $a.current))
    }
    function ro() {
      ;((Wl = eo.current), le($a), le(eo))
    }
    var io = ce(null),
      ao = null
    function oo(e) {
      var t = e.alternate
      ;(M(fo, fo.current & 1),
        M(io, e),
        ao === null &&
          (t === null || $a.current !== null || t.memoizedState !== null) &&
          (ao = e))
    }
    function so(e) {
      ;(M(fo, fo.current), M(io, e), ao === null && (ao = e))
    }
    function co(e) {
      e.tag === 22
        ? (M(fo, fo.current), M(io, e), ao === null && (ao = e))
        : lo(e)
    }
    function lo() {
      ;(M(fo, fo.current), M(io, io.current))
    }
    function uo(e) {
      ;(le(io), ao === e && (ao = null), le(fo))
    }
    var fo = ce(0)
    function po(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState
          if (n !== null && ((n = n.dehydrated), n === null || of(n) || sf(n)))
            return t
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t
        } else if (t.child !== null) {
          ;((t.child.return = t), (t = t.child))
          continue
        }
        if (t === e) break
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null
          t = t.return
        }
        ;((t.sibling.return = t.return), (t = t.sibling))
      }
      return null
    }
    var mo = 0,
      z = null,
      B = null,
      ho = null,
      go = !1,
      _o = !1,
      vo = !1,
      yo = 0,
      bo = 0,
      xo = null,
      So = 0
    function Co() {
      throw Error(i(321))
    }
    function wo(e, t) {
      if (t === null) return !1
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Dr(e[n], t[n])) return !1
      return !0
    }
    function To(e, t, n, r, i, a) {
      return (
        (mo = a),
        (z = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (k.H = e === null || e.memoizedState === null ? Vs : Hs),
        (vo = !1),
        (a = n(r, i)),
        (vo = !1),
        _o && (a = Do(t, n, r, i)),
        Eo(e),
        a
      )
    }
    function Eo(e) {
      k.H = Bs
      var t = B !== null && B.next !== null
      if (((mo = 0), (ho = B = z = null), (go = !1), (bo = 0), (xo = null), t))
        throw Error(i(300))
      e === null ||
        rc ||
        ((e = e.dependencies), e !== null && na(e) && (rc = !0))
    }
    function Do(e, t, n, r) {
      z = e
      var a = 0
      do {
        if ((_o && (xo = null), (bo = 0), (_o = !1), 25 <= a))
          throw Error(i(301))
        if (((a += 1), (ho = B = null), e.updateQueue != null)) {
          var o = e.updateQueue
          ;((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0))
        }
        ;((k.H = Us), (o = t(n, r)))
      } while (_o)
      return o
    }
    function Oo() {
      var e = k.H,
        t = e.useState()[0]
      return (
        (t = typeof t.then == `function` ? Fo(t) : t),
        (e = e.useState()[0]),
        (B === null ? null : B.memoizedState) !== e && (z.flags |= 1024),
        t
      )
    }
    function ko() {
      var e = yo !== 0
      return ((yo = 0), e)
    }
    function Ao(e, t, n) {
      ;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n))
    }
    function jo(e) {
      if (go) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue
          ;(t !== null && (t.pending = null), (e = e.next))
        }
        go = !1
      }
      ;((mo = 0), (ho = B = z = null), (_o = !1), (bo = yo = 0), (xo = null))
    }
    function Mo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      }
      return (ho === null ? (z.memoizedState = ho = e) : (ho = ho.next = e), ho)
    }
    function No() {
      if (B === null) {
        var e = z.alternate
        e = e === null ? null : e.memoizedState
      } else e = B.next
      var t = ho === null ? z.memoizedState : ho.next
      if (t !== null) ((ho = t), (B = e))
      else {
        if (e === null)
          throw z.alternate === null ? Error(i(467)) : Error(i(310))
        ;((B = e),
          (e = {
            memoizedState: B.memoizedState,
            baseState: B.baseState,
            baseQueue: B.baseQueue,
            queue: B.queue,
            next: null,
          }),
          ho === null ? (z.memoizedState = ho = e) : (ho = ho.next = e))
      }
      return ho
    }
    function Po() {
      return { lastEffect: null, events: null, stores: null, memoCache: null }
    }
    function Fo(e) {
      var t = bo
      return (
        (bo += 1),
        xo === null && (xo = []),
        (e = Oa(xo, e, t)),
        (t = z),
        (ho === null ? t.memoizedState : ho.next) === null &&
          ((t = t.alternate),
          (k.H = t === null || t.memoizedState === null ? Vs : Hs)),
        e
      )
    }
    function Io(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Fo(e)
        if (e.$$typeof === x) return ia(e)
      }
      throw Error(i(438, String(e)))
    }
    function Lo(e) {
      var t = null,
        n = z.updateQueue
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = z.alternate
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice()
                }),
                index: 0,
              })))
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Po()), (z.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ee
      return (t.index++, n)
    }
    function Ro(e, t) {
      return typeof t == `function` ? t(e) : t
    }
    function zo(e) {
      return Bo(No(), B, e)
    }
    function Bo(e, t, n) {
      var r = e.queue
      if (r === null) throw Error(i(311))
      r.lastRenderedReducer = n
      var a = e.baseQueue,
        o = r.pending
      if (o !== null) {
        if (a !== null) {
          var s = a.next
          ;((a.next = o.next), (o.next = s))
        }
        ;((t.baseQueue = a = o), (r.pending = null))
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o
      else {
        t = a.next
        var c = (s = null),
          l = null,
          u = t,
          d = !1
        do {
          var f = u.lane & -536870913
          if (f === u.lane ? (mo & f) === f : (J & f) === f) {
            var p = u.revertLane
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === pa && (d = !0))
            else if ((mo & p) === p) {
              ;((u = u.next), p === pa && (d = !0))
              continue
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (z.lanes |= p),
                (Kl |= p))
            ;((f = u.action),
              vo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)))
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (z.lanes |= f),
              (Kl |= f))
          u = u.next
        } while (u !== null && u !== t)
        if (
          (l === null ? (s = o) : (l.next = c),
          !Dr(o, e.memoizedState) && ((rc = !0), d && ((n = ma), n !== null)))
        )
          throw n
        ;((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o))
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch])
    }
    function Vo(e) {
      var t = No(),
        n = t.queue
      if (n === null) throw Error(i(311))
      n.lastRenderedReducer = e
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState
      if (a !== null) {
        n.pending = null
        var s = (a = a.next)
        do ((o = e(o, s.action)), (s = s.next))
        while (s !== a)
        ;(Dr(o, t.memoizedState) || (rc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o))
      }
      return [o, r]
    }
    function Ho(e, t, n) {
      var r = z,
        a = No(),
        o = I
      if (o) {
        if (n === void 0) throw Error(i(407))
        n = n()
      } else n = t()
      var s = !Dr((B || a).memoizedState, n)
      if (
        (s && ((a.memoizedState = n), (rc = !0)),
        (a = a.queue),
        fs(Go.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (ho !== null && ho.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ss(9, { destroy: void 0 }, Wo.bind(null, r, a, n, t), null),
          K === null)
        )
          throw Error(i(349))
        o || mo & 127 || Uo(r, t, n)
      }
      return n
    }
    function Uo(e, t, n) {
      ;((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = z.updateQueue),
        t === null
          ? ((t = Po()), (z.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)))
    }
    function Wo(e, t, n, r) {
      ;((t.value = n), (t.getSnapshot = r), Ko(t) && qo(e))
    }
    function Go(e, t, n) {
      return n(function () {
        Ko(t) && qo(e)
      })
    }
    function Ko(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !Dr(e, n)
      } catch {
        return !0
      }
    }
    function qo(e) {
      var t = si(e, 2)
      t !== null && gu(t, e, 2)
    }
    function Jo(e) {
      var t = Mo()
      if (typeof e == `function`) {
        var n = e
        if (((e = n()), vo)) {
          Ve(!0)
          try {
            n()
          } finally {
            Ve(!1)
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        t
      )
    }
    function Yo(e, t, n, r) {
      return ((e.baseState = n), Bo(e, B, typeof r == `function` ? r : Ro))
    }
    function Xo(e, t, n, r, a) {
      if (Ls(e)) throw Error(i(485))
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e)
          },
        }
        ;(k.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Zo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)))
      }
    }
    function Zo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state
      if (t.isTransition) {
        var a = k.T,
          o = {}
        k.T = o
        try {
          var s = n(i, r),
            c = k.S
          ;(c !== null && c(o, s), Qo(e, t, s))
        } catch (n) {
          es(e, t, n)
        } finally {
          ;(a !== null && o.types !== null && (a.types = o.types), (k.T = a))
        }
      } else
        try {
          ;((a = n(i, r)), Qo(e, t, a))
        } catch (n) {
          es(e, t, n)
        }
    }
    function Qo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              $o(e, t, n)
            },
            function (n) {
              return es(e, t, n)
            },
          )
        : $o(e, t, n)
    }
    function $o(e, t, n) {
      ;((t.status = `fulfilled`),
        (t.value = n),
        ts(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Zo(e, n))))
    }
    function es(e, t, n) {
      var r = e.pending
      if (((e.pending = null), r !== null)) {
        r = r.next
        do ((t.status = `rejected`), (t.reason = n), ts(t), (t = t.next))
        while (t !== r)
      }
      e.action = null
    }
    function ts(e) {
      e = e.listeners
      for (var t = 0; t < e.length; t++) (0, e[t])()
    }
    function ns(e, t) {
      return t
    }
    function rs(e, t) {
      if (I) {
        var n = K.formState
        if (n !== null) {
          a: {
            var r = z
            if (I) {
              if (F) {
                b: {
                  for (var i = F, a = zi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null
                      break b
                    }
                    if (((i = lf(i.nextSibling)), i === null)) {
                      i = null
                      break b
                    }
                  }
                  ;((a = i.data), (i = a === `F!` || a === `F` ? i : null))
                }
                if (i) {
                  ;((F = lf(i.nextSibling)), (r = i.data === `F!`))
                  break a
                }
              }
              Vi(r)
            }
            r = !1
          }
          r && (t = n[0])
        }
      }
      return (
        (n = Mo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ps.bind(null, z, r)),
        (r.dispatch = n),
        (r = Jo(!1)),
        (a = Is.bind(null, z, !1, r.queue)),
        (r = Mo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Xo.bind(null, z, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      )
    }
    function is(e) {
      return V(No(), B, e)
    }
    function V(e, t, n) {
      if (
        ((t = Bo(e, t, ns)[0]),
        (e = zo(Ro)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Fo(t)
        } catch (e) {
          throw e === Ca ? Ta : e
        }
      else r = t
      t = No()
      var i = t.queue,
        a = i.dispatch
      return (
        n !== t.memoizedState &&
          ((z.flags |= 2048),
          ss(9, { destroy: void 0 }, as.bind(null, i, n), null)),
        [r, a, e]
      )
    }
    function as(e, t) {
      e.action = t
    }
    function os(e) {
      var t = No(),
        n = B
      if (n !== null) return V(t, n, e)
      ;(No(), (t = t.memoizedState), (n = No()))
      var r = n.queue.dispatch
      return ((n.memoizedState = e), [t, r, !1])
    }
    function ss(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = z.updateQueue),
        t === null && ((t = Po()), (z.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      )
    }
    function cs() {
      return No().memoizedState
    }
    function ls(e, t, n, r) {
      var i = Mo()
      ;((z.flags |= e),
        (i.memoizedState = ss(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )))
    }
    function us(e, t, n, r) {
      var i = No()
      r = r === void 0 ? null : r
      var a = i.memoizedState.inst
      B !== null && r !== null && wo(r, B.memoizedState.deps)
        ? (i.memoizedState = ss(t, a, n, r))
        : ((z.flags |= e), (i.memoizedState = ss(1 | t, a, n, r)))
    }
    function ds(e, t) {
      ls(8390656, 8, e, t)
    }
    function fs(e, t) {
      us(2048, 8, e, t)
    }
    function ps(e) {
      z.flags |= 4
      var t = z.updateQueue
      if (t === null) ((t = Po()), (z.updateQueue = t), (t.events = [e]))
      else {
        var n = t.events
        n === null ? (t.events = [e]) : n.push(e)
      }
    }
    function ms(e) {
      var t = No().memoizedState
      return (
        ps({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(i(440))
          return t.impl.apply(void 0, arguments)
        }
      )
    }
    function hs(e, t) {
      return us(4, 2, e, t)
    }
    function gs(e, t) {
      return us(4, 4, e, t)
    }
    function _s(e, t) {
      if (typeof t == `function`) {
        e = e()
        var n = t(e)
        return function () {
          typeof n == `function` ? n() : t(null)
        }
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null
          }
        )
    }
    function vs(e, t, n) {
      ;((n = n == null ? null : n.concat([e])),
        us(4, 4, _s.bind(null, t, e), n))
    }
    function ys() {}
    function bs(e, t) {
      var n = No()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      return t !== null && wo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
    }
    function xs(e, t) {
      var n = No()
      t = t === void 0 ? null : t
      var r = n.memoizedState
      if (t !== null && wo(t, r[1])) return r[0]
      if (((r = e()), vo)) {
        Ve(!0)
        try {
          e()
        } finally {
          Ve(!1)
        }
      }
      return ((n.memoizedState = [r, t]), r)
    }
    function Ss(e, t, n) {
      return n === void 0 || (mo & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = hu()), (z.lanes |= e), (Kl |= e), n)
    }
    function Cs(e, t, n, r) {
      return Dr(n, t)
        ? n
        : $a.current === null
          ? !(mo & 42) || (mo & 1073741824 && !(J & 261930))
            ? ((rc = !0), (e.memoizedState = n))
            : ((e = hu()), (z.lanes |= e), (Kl |= e), t)
          : ((e = Ss(e, n, r)), Dr(e, t) || (rc = !0), e)
    }
    function ws(e, t, n, r, i) {
      var a = A.p
      A.p = a !== 0 && 8 > a ? a : 8
      var o = k.T,
        s = {}
      ;((k.T = s), Is(e, !1, t, n))
      try {
        var c = i(),
          l = k.S
        ;(l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Fs(e, t, _a(c, r), mu(e))
            : Fs(e, t, r, mu(e)))
      } catch (n) {
        Fs(e, t, { then: function () {}, status: `rejected`, reason: n }, mu())
      } finally {
        ;((A.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (k.T = o))
      }
    }
    function Ts() {}
    function Es(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476))
      var a = Ds(e).queue
      ws(
        e,
        a,
        t,
        j,
        n === null
          ? Ts
          : function () {
              return (Os(e), n(r))
            },
      )
    }
    function Ds(e) {
      var t = e.memoizedState
      if (t !== null) return t
      t = {
        memoizedState: j,
        baseState: j,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: j,
        },
        next: null,
      }
      var n = {}
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ro,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      )
    }
    function Os(e) {
      var t = Ds(e)
      ;(t.next === null && (t = e.alternate.memoizedState),
        Fs(e, t.next.queue, {}, mu()))
    }
    function ks() {
      return ia($f)
    }
    function As() {
      return No().memoizedState
    }
    function js() {
      return No().memoizedState
    }
    function Ms(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = mu()
            e = Wa(n)
            var r = Ga(t, e, n)
            ;(r !== null && (gu(r, t, n), Ka(r, t, n)),
              (t = { cache: la() }),
              (e.payload = t))
            return
        }
        t = t.return
      }
    }
    function Ns(e, t, n) {
      var r = mu()
      ;((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Ls(e)
          ? Rs(t, n)
          : ((n = oi(e, t, n, r)), n !== null && (gu(n, e, r), zs(n, t, r))))
    }
    function Ps(e, t, n) {
      Fs(e, t, n, mu())
    }
    function Fs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }
      if (Ls(e)) Rs(t, i)
      else {
        var a = e.alternate
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n)
            if (((i.hasEagerState = !0), (i.eagerState = s), Dr(s, o)))
              return (ai(e, t, i, 0), K === null && ii(), !1)
          } catch {}
        if (((n = oi(e, t, i, r)), n !== null))
          return (gu(n, e, r), zs(n, t, r), !0)
      }
      return !1
    }
    function Is(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: fd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Ls(e))
      ) {
        if (t) throw Error(i(479))
      } else ((t = oi(e, n, r, 2)), t !== null && gu(t, e, 2))
    }
    function Ls(e) {
      var t = e.alternate
      return e === z || (t !== null && t === z)
    }
    function Rs(e, t) {
      _o = go = !0
      var n = e.pending
      ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t))
    }
    function zs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes
        ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), it(e, n))
      }
    }
    var Bs = {
      readContext: ia,
      use: Io,
      useCallback: Co,
      useContext: Co,
      useEffect: Co,
      useImperativeHandle: Co,
      useLayoutEffect: Co,
      useInsertionEffect: Co,
      useMemo: Co,
      useReducer: Co,
      useRef: Co,
      useState: Co,
      useDebugValue: Co,
      useDeferredValue: Co,
      useTransition: Co,
      useSyncExternalStore: Co,
      useId: Co,
      useHostTransitionStatus: Co,
      useFormState: Co,
      useActionState: Co,
      useOptimistic: Co,
      useMemoCache: Co,
      useCacheRefresh: Co,
    }
    Bs.useEffectEvent = Co
    var Vs = {
        readContext: ia,
        use: Io,
        useCallback: function (e, t) {
          return ((Mo().memoizedState = [e, t === void 0 ? null : t]), e)
        },
        useContext: ia,
        useEffect: ds,
        useImperativeHandle: function (e, t, n) {
          ;((n = n == null ? null : n.concat([e])),
            ls(4194308, 4, _s.bind(null, t, e), n))
        },
        useLayoutEffect: function (e, t) {
          return ls(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          ls(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = Mo()
          t = t === void 0 ? null : t
          var r = e()
          if (vo) {
            Ve(!0)
            try {
              e()
            } finally {
              Ve(!1)
            }
          }
          return ((n.memoizedState = [r, t]), r)
        },
        useReducer: function (e, t, n) {
          var r = Mo()
          if (n !== void 0) {
            var i = n(t)
            if (vo) {
              Ve(!0)
              try {
                n(t)
              } finally {
                Ve(!1)
              }
            }
          } else i = t
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ns.bind(null, z, e)),
            [r.memoizedState, e]
          )
        },
        useRef: function (e) {
          var t = Mo()
          return ((e = { current: e }), (t.memoizedState = e))
        },
        useState: function (e) {
          e = Jo(e)
          var t = e.queue,
            n = Ps.bind(null, z, t)
          return ((t.dispatch = n), [e.memoizedState, n])
        },
        useDebugValue: ys,
        useDeferredValue: function (e, t) {
          return Ss(Mo(), e, t)
        },
        useTransition: function () {
          var e = Jo(!1)
          return (
            (e = ws.bind(null, z, e.queue, !0, !1)),
            (Mo().memoizedState = e),
            [!1, e]
          )
        },
        useSyncExternalStore: function (e, t, n) {
          var r = z,
            a = Mo()
          if (I) {
            if (n === void 0) throw Error(i(407))
            n = n()
          } else {
            if (((n = t()), K === null)) throw Error(i(349))
            J & 127 || Uo(r, t, n)
          }
          a.memoizedState = n
          var o = { value: n, getSnapshot: t }
          return (
            (a.queue = o),
            ds(Go.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ss(9, { destroy: void 0 }, Wo.bind(null, r, o, n, t), null),
            n
          )
        },
        useId: function () {
          var e = Mo(),
            t = K.identifierPrefix
          if (I) {
            var n = ji,
              r = Ai
            ;((n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = yo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`))
          } else ((n = So++), (t = `_` + t + `r_` + n.toString(32) + `_`))
          return (e.memoizedState = t)
        },
        useHostTransitionStatus: ks,
        useFormState: rs,
        useActionState: rs,
        useOptimistic: function (e) {
          var t = Mo()
          t.memoizedState = t.baseState = e
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          }
          return (
            (t.queue = n),
            (t = Is.bind(null, z, !0, n)),
            (n.dispatch = t),
            [e, t]
          )
        },
        useMemoCache: Lo,
        useCacheRefresh: function () {
          return (Mo().memoizedState = Ms.bind(null, z))
        },
        useEffectEvent: function (e) {
          var t = Mo(),
            n = { impl: e }
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(i(440))
              return n.impl.apply(void 0, arguments)
            }
          )
        },
      },
      Hs = {
        readContext: ia,
        use: Io,
        useCallback: bs,
        useContext: ia,
        useEffect: fs,
        useImperativeHandle: vs,
        useInsertionEffect: hs,
        useLayoutEffect: gs,
        useMemo: xs,
        useReducer: zo,
        useRef: cs,
        useState: function () {
          return zo(Ro)
        },
        useDebugValue: ys,
        useDeferredValue: function (e, t) {
          return Cs(No(), B.memoizedState, e, t)
        },
        useTransition: function () {
          var e = zo(Ro)[0],
            t = No().memoizedState
          return [typeof e == `boolean` ? e : Fo(e), t]
        },
        useSyncExternalStore: Ho,
        useId: As,
        useHostTransitionStatus: ks,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e, t) {
          return Yo(No(), B, e, t)
        },
        useMemoCache: Lo,
        useCacheRefresh: js,
      }
    Hs.useEffectEvent = ms
    var Us = {
      readContext: ia,
      use: Io,
      useCallback: bs,
      useContext: ia,
      useEffect: fs,
      useImperativeHandle: vs,
      useInsertionEffect: hs,
      useLayoutEffect: gs,
      useMemo: xs,
      useReducer: Vo,
      useRef: cs,
      useState: function () {
        return Vo(Ro)
      },
      useDebugValue: ys,
      useDeferredValue: function (e, t) {
        var n = No()
        return B === null ? Ss(n, e, t) : Cs(n, B.memoizedState, e, t)
      },
      useTransition: function () {
        var e = Vo(Ro)[0],
          t = No().memoizedState
        return [typeof e == `boolean` ? e : Fo(e), t]
      },
      useSyncExternalStore: Ho,
      useId: As,
      useHostTransitionStatus: ks,
      useFormState: os,
      useActionState: os,
      useOptimistic: function (e, t) {
        var n = No()
        return B === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Yo(n, B, e, t)
      },
      useMemoCache: Lo,
      useCacheRefresh: js,
    }
    Us.useEffectEvent = ms
    function Ws(e, t, n, r) {
      ;((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : p({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n))
    }
    var Gs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = mu(),
          i = Wa(r)
        ;((i.payload = t),
          n != null && (i.callback = n),
          (t = Ga(e, i, r)),
          t !== null && (gu(t, e, r), Ka(t, e, r)))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = mu(),
          i = Wa(r)
        ;((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ga(e, i, r)),
          t !== null && (gu(t, e, r), Ka(t, e, r)))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = mu(),
          r = Wa(n)
        ;((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ga(e, r, n)),
          t !== null && (gu(t, e, n), Ka(t, e, n)))
      },
    }
    function Ks(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Or(n, r) || !Or(i, a)
            : !0
      )
    }
    function qs(e, t, n, r) {
      ;((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Gs.enqueueReplaceState(t, t.state, null))
    }
    function Js(e, t) {
      var n = t
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r])
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = p({}, n)), e))
          n[i] === void 0 && (n[i] = e[i])
      return n
    }
    function Ys(e) {
      ei(e)
    }
    function Xs(e) {
      console.error(e)
    }
    function Zs(e) {
      ei(e)
    }
    function Qs(e, t) {
      try {
        var n = e.onUncaughtError
        n(t.value, { componentStack: t.stack })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function $s(e, t, n) {
      try {
        var r = e.onCaughtError
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        })
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    function ec(e, t, n) {
      return (
        (n = Wa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Qs(e, t)
        }),
        n
      )
    }
    function tc(e) {
      return ((e = Wa(e)), (e.tag = 3), e)
    }
    function nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError
      if (typeof i == `function`) {
        var a = r.value
        ;((e.payload = function () {
          return i(a)
        }),
          (e.callback = function () {
            $s(t, n, r)
          }))
      }
      var o = n.stateNode
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          ;($s(t, n, r),
            typeof i != `function` &&
              (iu === null ? (iu = new Set([this])) : iu.add(this)))
          var e = r.stack
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          })
        })
    }
    function H(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && ta(t, n, a, !0),
          (n = io.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                ao === null
                  ? Ou()
                  : n.alternate === null && Gl === 0 && (Gl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Ea
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Ku(e, r, a)),
                !1
              )
            case 22:
              return (
                (n.flags |= 65536),
                r === Ea
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Ku(e, r, a)),
                !1
              )
          }
          throw Error(i(435, n.tag))
        }
        return (Ku(e, r, a), Ou(), !1)
      }
      if (I)
        return (
          (t = io.current),
          t === null
            ? (r !== Bi && ((t = Error(i(423), { cause: r })), qi(Si(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Si(r, n)),
              (a = ec(e.stateNode, r, a)),
              qa(e, a),
              Gl !== 4 && (Gl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Bi && ((e = Error(i(422), { cause: r })), qi(Si(e, n)))),
          !1
        )
      var o = Error(i(520), { cause: r })
      if (
        ((o = Si(o, n)),
        Zl === null ? (Zl = [o]) : Zl.push(o),
        Gl !== 4 && (Gl = 2),
        t === null)
      )
        return !0
      ;((r = Si(r, n)), (n = t))
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = ec(n.stateNode, r, e)),
              qa(n, e),
              !1
            )
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (iu === null || !iu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = tc(a)),
                nc(a, e, n, r),
                qa(n, a),
                !1
              )
        }
        n = n.return
      } while (n !== null)
      return !1
    }
    var U = Error(i(461)),
      rc = !1
    function ic(e, t, n, r) {
      t.child = e === null ? Ba(t, null, n, r) : za(t, e.child, n, r)
    }
    function ac(e, t, n, r, i) {
      n = n.render
      var a = t.ref
      if (`ref` in r) {
        var o = {}
        for (var s in r) s !== `ref` && (o[s] = r[s])
      } else o = r
      return (
        ra(t),
        (r = To(e, t, n, o, a, i)),
        (s = ko()),
        e !== null && !rc
          ? (Ao(e, t, i), kc(e, t, i))
          : (I && s && Pi(t), (t.flags |= 1), ic(e, t, r, i), t.child)
      )
    }
    function oc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type
        return typeof a == `function` &&
          !pi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), sc(e, t, a, r, i))
          : ((e = gi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e))
      }
      if (((a = e.child), !Ac(e, i))) {
        var o = a.memoizedProps
        if (
          ((n = n.compare),
          (n = n === null ? Or : n),
          n(o, r) && e.ref === t.ref)
        )
          return kc(e, t, i)
      }
      return (
        (t.flags |= 1),
        (e = mi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      )
    }
    function sc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps
        if (Or(a, r) && e.ref === t.ref)
          if (((rc = !1), (t.pendingProps = r = a), Ac(e, i)))
            e.flags & 131072 && (rc = !0)
          else return ((t.lanes = e.lanes), kc(e, t, i))
      }
      return hc(e, t, n, r, i)
    }
    function cc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling))
            r = i & ~a
          } else ((r = 0), (t.child = null))
          return uc(e, t, a, n, r)
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && xa(t, a === null ? null : a.cachePool),
            a === null ? no() : to(t, a),
            co(t))
        else
          return (
            (r = t.lanes = 536870912),
            uc(e, t, a === null ? n : a.baseLanes | n, n, r)
          )
      } else
        a === null
          ? (e !== null && xa(t, null), no(), lo(t))
          : (xa(t, a.cachePool), to(t, a), lo(t), (t.memoizedState = null))
      return (ic(e, t, i, n), t.child)
    }
    function lc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      )
    }
    function uc(e, t, n, r, i) {
      var a = ba()
      return (
        (a = a === null ? null : { parent: R._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && xa(t, null),
        no(),
        co(t),
        e !== null && ta(e, t, r, !0),
        (t.childLanes = i),
        null
      )
    }
    function dc(e, t) {
      return (
        (t = wc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      )
    }
    function fc(e, t, n) {
      return (
        za(t, e.child, null, n),
        (e = dc(t, t.pendingProps)),
        (e.flags |= 2),
        uo(t),
        (t.memoizedState = null),
        e
      )
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128)
      if (((t.flags &= -129), e === null)) {
        if (I) {
          if (r.mode === `hidden`)
            return ((e = dc(t, r)), (t.lanes = 536870912), lc(null, e))
          if (
            (so(t),
            (e = F)
              ? ((e = af(e, zi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ki === null ? null : { id: Ai, overflow: ji },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = yi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Li = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t)
          return ((t.lanes = 536870912), null)
        }
        return dc(t, r)
      }
      var o = e.memoizedState
      if (o !== null) {
        var s = o.dehydrated
        if ((so(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = fc(e, t, n)))
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null))
          else throw Error(i(558))
        else if (
          (rc || ta(e, t, n, !1), (a = (n & e.childLanes) !== 0), rc || a)
        ) {
          if (
            ((r = K),
            r !== null && ((s = at(r, n)), s !== 0 && s !== o.retryLane))
          )
            throw ((o.retryLane = s), si(e, s), gu(r, e, s), U)
          ;(Ou(), (t = fc(e, t, n)))
        } else
          ((e = o.treeContext),
            (F = lf(s.nextSibling)),
            (Li = t),
            (I = !0),
            (Ri = null),
            (zi = !1),
            e !== null && Ii(t, e),
            (t = dc(t, r)),
            (t.flags |= 4096))
        return t
      }
      return (
        (e = mi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      )
    }
    function mc(e, t) {
      var n = t.ref
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816)
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284))
        ;(e === null || e.ref !== n) && (t.flags |= 4194816)
      }
    }
    function hc(e, t, n, r, i) {
      return (
        ra(t),
        (n = To(e, t, n, r, void 0, i)),
        (r = ko()),
        e !== null && !rc
          ? (Ao(e, t, i), kc(e, t, i))
          : (I && r && Pi(t), (t.flags |= 1), ic(e, t, n, i), t.child)
      )
    }
    function gc(e, t, n, r, i, a) {
      return (
        ra(t),
        (t.updateQueue = null),
        (n = Do(t, r, n, i)),
        Eo(e),
        (r = ko()),
        e !== null && !rc
          ? (Ao(e, t, a), kc(e, t, a))
          : (I && r && Pi(t), (t.flags |= 1), ic(e, t, n, a), t.child)
      )
    }
    function _c(e, t, n, r, i) {
      if ((ra(t), t.stateNode === null)) {
        var a = ui,
          o = n.contextType
        ;(typeof o == `object` && o && (a = ia(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Gs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ha(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ia(o) : ui),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Ws(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Gs.enqueueReplaceState(a, a.state, null),
            Xa(t, r, a, i),
            Ya(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0))
      } else if (e === null) {
        a = t.stateNode
        var s = t.memoizedProps,
          c = Js(n, s)
        a.props = c
        var l = a.context,
          u = n.contextType
        ;((o = ui), typeof u == `object` && u && (o = ia(u)))
        var d = n.getDerivedStateFromProps
        ;((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && qs(t, a, r, o)),
          (Va = !1))
        var f = t.memoizedState
        ;((a.state = f),
          Xa(t, r, a, i),
          Ya(),
          (l = t.memoizedState),
          s || f !== l || Va
            ? (typeof d == `function` &&
                (Ws(t, n, d, r), (l = t.memoizedState)),
              (c = Va || Ks(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)))
      } else {
        ;((a = t.stateNode),
          Ua(e, t),
          (o = t.memoizedProps),
          (u = Js(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ui),
          typeof l == `object` && l && (c = ia(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && qs(t, a, r, c)),
          (Va = !1),
          (f = t.memoizedState),
          (a.state = f),
          Xa(t, r, a, i),
          Ya())
        var p = t.memoizedState
        o !== d ||
        f !== p ||
        Va ||
        (e !== null && e.dependencies !== null && na(e.dependencies))
          ? (typeof s == `function` && (Ws(t, n, s, r), (p = t.memoizedState)),
            (u =
              Va ||
              Ks(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && na(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1))
      }
      return (
        (a = r),
        mc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = za(t, e.child, null, i)),
                (t.child = za(t, null, n, i)))
              : ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = kc(e, t, i)),
        e
      )
    }
    function vc(e, t, n, r) {
      return (Gi(), (t.flags |= 256), ic(e, t, n, r), t.child)
    }
    var yc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    }
    function bc(e) {
      return { baseLanes: e, cachePool: Sa() }
    }
    function xc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Yl), e)
    }
    function Sc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s
      if (
        ((s = o) ||
          (s =
            e !== null && e.memoizedState === null ? !1 : !!(fo.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (I) {
          if (
            (a ? oo(t) : lo(t),
            (e = F)
              ? ((e = af(e, zi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ki === null ? null : { id: Ai, overflow: ji },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = yi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Li = t),
                  (F = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t)
          return (sf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null)
        }
        var c = r.children
        return (
          (r = r.fallback),
          a
            ? (lo(t),
              (a = t.mode),
              (c = wc({ mode: `hidden`, children: c }, a)),
              (r = _i(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = bc(n)),
              (r.childLanes = xc(e, s, n)),
              (t.memoizedState = yc),
              lc(null, r))
            : (oo(t), Cc(t, c))
        )
      }
      var l = e.memoizedState
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (oo(t), (t.flags &= -257), (t = Tc(e, t, n)))
            : t.memoizedState === null
              ? (lo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = wc({ mode: `visible`, children: r.children }, a)),
                (c = _i(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                za(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = bc(n)),
                (r.childLanes = xc(e, s, n)),
                (t.memoizedState = yc),
                (t = lc(null, r)))
              : (lo(t), (t.child = e.child), (t.flags |= 128), (t = null))
        else if ((oo(t), sf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst
          ;((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            qi({ value: r, source: null, stack: null }),
            (t = Tc(e, t, n)))
        } else if (
          (rc || ta(e, t, n, !1), (s = (n & e.childLanes) !== 0), rc || s)
        ) {
          if (
            ((s = K),
            s !== null && ((r = at(s, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), si(e, r), gu(s, e, r), U)
          ;(of(c) || Ou(), (t = Tc(e, t, n)))
        } else
          of(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (F = lf(c.nextSibling)),
              (Li = t),
              (I = !0),
              (Ri = null),
              (zi = !1),
              e !== null && Ii(t, e),
              (t = Cc(t, r.children)),
              (t.flags |= 4096))
        return t
      }
      return a
        ? (lo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = mi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = _i(c, a, n, null)), (c.flags |= 2))
            : (c = mi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          lc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = bc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Sa())
                : ((l = R._currentValue),
                  (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = xc(e, s, n)),
          (t.memoizedState = yc),
          lc(e.child, r))
        : (oo(t),
          (n = e.child),
          (e = n.sibling),
          (n = mi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n)
    }
    function Cc(e, t) {
      return (
        (t = wc({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      )
    }
    function wc(e, t) {
      return ((e = fi(22, e, null, t)), (e.lanes = 0), e)
    }
    function Tc(e, t, n) {
      return (
        za(t, e.child, null, n),
        (e = Cc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      )
    }
    function Ec(e, t, n) {
      e.lanes |= t
      var r = e.alternate
      ;(r !== null && (r.lanes |= t), $i(e.return, t, n))
    }
    function Dc(e, t, n, r, i, a) {
      var o = e.memoizedState
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a))
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail
      r = r.children
      var o = fo.current,
        s = !!(o & 2)
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        M(fo, o),
        ic(e, t, r, n),
        (r = I ? Ei : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t)
          else if (e.tag === 19) Ec(e, n, t)
          else if (e.child !== null) {
            ;((e.child.return = e), (e = e.child))
            continue
          }
          if (e === t) break a
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a
            e = e.return
          }
          ;((e.sibling.return = e.return), (e = e.sibling))
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && po(e) === null && (i = n),
              (n = n.sibling))
          ;((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Dc(t, !1, i, n, a, r))
          break
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && po(e) === null)) {
              t.child = i
              break
            }
            ;((e = i.sibling), (i.sibling = n), (n = i), (i = e))
          }
          Dc(t, !0, n, null, a, r)
          break
        case `together`:
          Dc(t, !1, null, null, void 0, r)
          break
        default:
          t.memoizedState = null
      }
      return t.child
    }
    function kc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Kl |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ta(e, t, n, !1), (n & t.childLanes) === 0)) return null
        } else return null
      if (e !== null && t.child !== e.child) throw Error(i(153))
      if (t.child !== null) {
        for (
          e = t.child, n = mi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = mi(e, e.pendingProps)),
            (n.return = t))
        n.sibling = null
      }
      return t.child
    }
    function Ac(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && na(e)))
      )
    }
    function jc(e, t, n) {
      switch (t.tag) {
        case 3:
          ;(me(t, t.stateNode.containerInfo),
            Zi(t, R, e.memoizedState.cache),
            Gi())
          break
        case 27:
        case 5:
          ge(t)
          break
        case 4:
          me(t, t.stateNode.containerInfo)
          break
        case 10:
          Zi(t, t.type, t.memoizedProps.value)
          break
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), so(t), null)
          break
        case 13:
          var r = t.memoizedState
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (oo(t), (e = kc(e, t, n)), e === null ? null : e.sibling)
                : Sc(e, t, n)
              : (oo(t), (t.flags |= 128), null)
          oo(t)
          break
        case 19:
          var i = !!(e.flags & 128)
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (ta(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return Oc(e, t, n)
            t.flags |= 128
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            M(fo, fo.current),
            r)
          )
            break
          return null
        case 22:
          return ((t.lanes = 0), cc(e, t, n, t.pendingProps))
        case 24:
          Zi(t, R, e.memoizedState.cache)
      }
      return kc(e, t, n)
    }
    function Mc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) rc = !0
        else {
          if (!Ac(e, n) && !(t.flags & 128)) return ((rc = !1), jc(e, t, n))
          rc = !!(e.flags & 131072)
        }
      else ((rc = !1), I && t.flags & 1048576 && Ni(t, Ei, t.index))
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps
            if (((e = ka(t.elementType)), (t.type = e), typeof e == `function`))
              pi(e)
                ? ((r = Js(e, r)), (t.tag = 1), (t = _c(null, t, e, r, n)))
                : ((t.tag = 0), (t = hc(null, t, e, r, n)))
            else {
              if (e != null) {
                var a = e.$$typeof
                if (a === S) {
                  ;((t.tag = 11), (t = ac(null, t, e, r, n)))
                  break a
                }
                if (a === T) {
                  ;((t.tag = 14), (t = oc(null, t, e, r, n)))
                  break a
                }
              }
              throw ((t = re(e) || e), Error(i(306, t, ``)))
            }
          }
          return t
        case 0:
          return hc(e, t, t.type, t.pendingProps, n)
        case 1:
          return ((r = t.type), (a = Js(r, t.pendingProps)), _c(e, t, r, a, n))
        case 3:
          a: {
            if ((me(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387))
            r = t.pendingProps
            var o = t.memoizedState
            ;((a = o.element), Ua(e, t), Xa(t, r, null, n))
            var s = t.memoizedState
            if (
              ((r = s.cache),
              Zi(t, R, r),
              r !== o.cache && ea(t, [R], n, !0),
              Ya(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = vc(e, t, r, n)
                break a
              } else if (r !== a) {
                ;((a = Si(Error(i(424)), t)), qi(a), (t = vc(e, t, r, n)))
                break a
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body
                    break
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                }
                for (
                  F = lf(e.firstChild),
                    Li = t,
                    I = !0,
                    Ri = null,
                    zi = !0,
                    n = Ba(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling))
              }
            else {
              if ((Gi(), r === a)) {
                t = kc(e, t, n)
                break a
              }
              ic(e, t, r, n)
            }
            t = t.child
          }
          return t
        case 26:
          return (
            mc(e, t),
            e === null
              ? (n = Af(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : I ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Vd(fe.current).createElement(n)),
                  (r[dt] = t),
                  (r[ft] = e),
                  Fd(r, n, e),
                  wt(r),
                  (t.stateNode = r))
              : (t.memoizedState = Af(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          )
        case 27:
          return (
            ge(t),
            e === null &&
              I &&
              ((r = t.stateNode = pf(t.type, t.pendingProps, fe.current)),
              (Li = t),
              (zi = !0),
              (a = F),
              Qd(t.type) ? ((uf = a), (F = lf(r.firstChild))) : (F = a)),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          )
        case 5:
          return (
            e === null &&
              I &&
              ((a = r = F) &&
                ((r = nf(r, t.type, t.pendingProps, zi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (Li = t),
                    (F = lf(r.firstChild)),
                    (zi = !1),
                    (a = !0))),
              a || Vi(t)),
            ge(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Wd(a, o) ? (r = null) : s !== null && Wd(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = To(e, t, Oo, null, null, n)), ($f._currentValue = a)),
            mc(e, t),
            ic(e, t, r, n),
            t.child
          )
        case 6:
          return (
            e === null &&
              I &&
              ((e = n = F) &&
                ((n = rf(n, t.pendingProps, zi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Li = t), (F = null), (e = !0))),
              e || Vi(t)),
            null
          )
        case 13:
          return Sc(e, t, n)
        case 4:
          return (
            me(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = za(t, null, r, n)) : ic(e, t, r, n),
            t.child
          )
        case 11:
          return ac(e, t, t.type, t.pendingProps, n)
        case 7:
          return (ic(e, t, t.pendingProps, n), t.child)
        case 8:
          return (ic(e, t, t.pendingProps.children, n), t.child)
        case 12:
          return (ic(e, t, t.pendingProps.children, n), t.child)
        case 10:
          return (
            (r = t.pendingProps),
            Zi(t, t.type, r.value),
            ic(e, t, r.children, n),
            t.child
          )
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ra(t),
            (a = ia(a)),
            (r = r(a)),
            (t.flags |= 1),
            ic(e, t, r, n),
            t.child
          )
        case 14:
          return oc(e, t, t.type, t.pendingProps, n)
        case 15:
          return sc(e, t, t.type, t.pendingProps, n)
        case 19:
          return Oc(e, t, n)
        case 31:
          return pc(e, t, n)
        case 22:
          return cc(e, t, n, t.pendingProps)
        case 24:
          return (
            ra(t),
            (r = ia(R)),
            e === null
              ? ((a = ba()),
                a === null &&
                  ((a = K),
                  (o = la()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ha(t),
                Zi(t, R, a))
              : ((e.lanes & n) !== 0 && (Ua(e, t), Xa(t, null, null, n), Ya()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Zi(t, R, r),
                    r !== a.cache && ea(t, [R], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Zi(t, R, r))),
            ic(e, t, t.pendingProps.children, n),
            t.child
          )
        case 29:
          throw t.pendingProps
      }
      throw Error(i(156, t.tag))
    }
    function Nc(e) {
      e.flags |= 4
    }
    function Pc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192
          else if (Tu()) e.flags |= 8192
          else throw ((Aa = Ea), wa)
      } else e.flags &= -16777217
    }
    function Fc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217
      else if (((e.flags |= 16777216), !Gf(t)))
        if (Tu()) e.flags |= 8192
        else throw ((Aa = Ea), wa)
    }
    function Ic(e, t) {
      ;(t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : $e()), (e.lanes |= t), (Xl |= t)))
    }
    function Lc(e, t) {
      if (!I)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling))
            n === null ? (e.tail = null) : (n.sibling = null)
            break
          case `collapsed`:
            n = e.tail
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling))
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null)
        }
    }
    function Rc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling))
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling))
      return ((e.subtreeFlags |= r), (e.childLanes = n), t)
    }
    function zc(e, t, n) {
      var r = t.pendingProps
      switch ((Fi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Rc(t), null)
        case 1:
          return (Rc(t), null)
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Qi(R),
            he(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Wi(t)
                ? Nc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ki())),
            Rc(t),
            null
          )
        case 26:
          var a = t.type,
            o = t.memoizedState
          return (
            e === null
              ? (Nc(t),
                o === null ? (Rc(t), Pc(t, a, null, r, n)) : (Rc(t), Fc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Rc(t), (t.flags &= -16777217))
                  : (Nc(t), Rc(t), Fc(t, o))
                : ((e = e.memoizedProps),
                  e !== r && Nc(t),
                  Rc(t),
                  Pc(t, a, e, r, n)),
            null
          )
        case 27:
          if (
            (_e(t),
            (n = fe.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Nc(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (Rc(t), null)
            }
            ;((e = ue.current),
              Wi(t) ? Hi(t, e) : ((e = pf(a, r, n)), (t.stateNode = e), Nc(t)))
          }
          return (Rc(t), null)
        case 5:
          if ((_e(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t)
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166))
              return (Rc(t), null)
            }
            if (((o = ue.current), Wi(t))) Hi(t, o)
            else {
              var s = Vd(fe.current)
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                  break
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
                  break
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                      break
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      )
                      break
                    case `script`:
                      ;((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)))
                      break
                    case `select`:
                      ;((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size))
                      break
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a)
                  }
              }
              ;((o[dt] = t), (o[ft] = r))
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode)
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ;((s.child.return = s), (s = s.child))
                  continue
                }
                if (s === t) break a
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a
                  s = s.return
                }
                ;((s.sibling.return = s.return), (s = s.sibling))
              }
              t.stateNode = o
              a: switch ((Fd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus
                  break a
                case `img`:
                  r = !0
                  break a
                default:
                  r = !1
              }
              r && Nc(t)
            }
          }
          return (
            Rc(t),
            Pc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          )
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t)
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166))
            if (((e = fe.current), Wi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = Li),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps
                }
              ;((e[dt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Nd(e.nodeValue, n)
                )),
                e || Vi(t, !0))
            } else
              ((e = Vd(e).createTextNode(r)), (e[dt] = t), (t.stateNode = e))
          }
          return (Rc(t), null)
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Wi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318))
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557))
                e[dt] = t
              } else
                (Gi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4))
              ;(Rc(t), (e = !1))
            } else
              ((n = Ki()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0))
            if (!e) return t.flags & 256 ? (uo(t), t) : (uo(t), null)
            if (t.flags & 128) throw Error(i(558))
          }
          return (Rc(t), null)
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Wi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318))
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317))
                a[dt] = t
              } else
                (Gi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4))
              ;(Rc(t), (a = !1))
            } else
              ((a = Ki()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0))
            if (!a) return t.flags & 256 ? (uo(t), t) : (uo(t), null)
          }
          return (
            uo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Ic(t, t.updateQueue),
                Rc(t),
                null)
          )
        case 4:
          return (
            he(),
            e === null && Cd(t.stateNode.containerInfo),
            Rc(t),
            null
          )
        case 10:
          return (Qi(t.type), Rc(t), null)
        case 19:
          if ((le(fo), (r = t.memoizedState), r === null)) return (Rc(t), null)
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null))
            if (a) Lc(r, !1)
            else {
              if (Gl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = po(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Lc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Ic(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (hi(n, e), (n = n.sibling))
                    return (
                      M(fo, (fo.current & 1) | 2),
                      I && Mi(t, r.treeForkCount),
                      t.child
                    )
                  }
                  e = e.sibling
                }
              r.tail !== null &&
                N() > nu &&
                ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304))
            }
          else {
            if (!a)
              if (((e = po(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ic(t, e),
                  Lc(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !o.alternate &&
                    !I)
                )
                  return (Rc(t), null)
              } else
                2 * N() - r.renderingStartTime > nu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304))
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o))
          }
          return r.tail === null
            ? (Rc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = N()),
              (e.sibling = null),
              (n = fo.current),
              M(fo, a ? (n & 1) | 2 : n & 1),
              I && Mi(t, r.treeForkCount),
              e)
        case 22:
        case 23:
          return (
            uo(t),
            ro(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (Rc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Rc(t),
            (n = t.updateQueue),
            n !== null && Ic(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && le(ya),
            null
          )
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Qi(R),
            Rc(t),
            null
          )
        case 25:
          return null
        case 30:
          return null
      }
      throw Error(i(156, t.tag))
    }
    function Bc(e, t) {
      switch ((Fi(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 3:
          return (
            Qi(R),
            he(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 26:
        case 27:
        case 5:
          return (_e(t), null)
        case 31:
          if (t.memoizedState !== null) {
            if ((uo(t), t.alternate === null)) throw Error(i(340))
            Gi()
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 13:
          if (
            (uo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340))
            Gi()
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 19:
          return (le(fo), null)
        case 4:
          return (he(), null)
        case 10:
          return (Qi(t.type), null)
        case 22:
        case 23:
          return (
            uo(t),
            ro(),
            e !== null && le(ya),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          )
        case 24:
          return (Qi(R), null)
        case 25:
          return null
        default:
          return null
      }
    }
    function Vc(e, t) {
      switch ((Fi(t), t.tag)) {
        case 3:
          ;(Qi(R), he())
          break
        case 26:
        case 27:
        case 5:
          _e(t)
          break
        case 4:
          he()
          break
        case 31:
          t.memoizedState !== null && uo(t)
          break
        case 13:
          uo(t)
          break
        case 19:
          le(fo)
          break
        case 10:
          Qi(t.type)
          break
        case 22:
        case 23:
          ;(uo(t), ro(), e !== null && le(ya))
          break
        case 24:
          Qi(R)
      }
    }
    function Hc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect
        if (r !== null) {
          var i = r.next
          n = i
          do {
            if ((n.tag & e) === e) {
              r = void 0
              var a = n.create,
                o = n.inst
              ;((r = a()), (o.destroy = r))
            }
            n = n.next
          } while (n !== i)
        }
      } catch (e) {
        X(t, t.return, e)
      }
    }
    function Uc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect
        if (i !== null) {
          var a = i.next
          r = a
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy
              if (s !== void 0) {
                ;((o.destroy = void 0), (i = t))
                var c = n,
                  l = s
                try {
                  l()
                } catch (e) {
                  X(i, c, e)
                }
              }
            }
            r = r.next
          } while (r !== a)
        }
      } catch (e) {
        X(t, t.return, e)
      }
    }
    function Wc(e) {
      var t = e.updateQueue
      if (t !== null) {
        var n = e.stateNode
        try {
          Qa(t, n)
        } catch (t) {
          X(e, e.return, t)
        }
      }
    }
    function Gc(e, t, n) {
      ;((n.props = Js(e.type, e.memoizedProps)), (n.state = e.memoizedState))
      try {
        n.componentWillUnmount()
      } catch (n) {
        X(e, t, n)
      }
    }
    function Kc(e, t) {
      try {
        var n = e.ref
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode
              break
            case 30:
              r = e.stateNode
              break
            default:
              r = e.stateNode
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r)
        }
      } catch (n) {
        X(e, t, n)
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup
      if (n !== null)
        if (typeof r == `function`)
          try {
            r()
          } catch (n) {
            X(e, t, n)
          } finally {
            ;((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null))
          }
        else if (typeof n == `function`)
          try {
            n(null)
          } catch (n) {
            X(e, t, n)
          }
        else n.current = null
    }
    function Jc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus()
            break a
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet)
        }
      } catch (t) {
        X(e, e.return, t)
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode
        ;(Id(r, e.type, n, t), (r[ft] = t))
      } catch (t) {
        X(e, e.return, t)
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Qd(e.type)) ||
        e.tag === 4
      )
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Xc(e.return)) return null
          e = e.return
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Qd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a
          ;((e.child.return = e), (e = e.child))
        }
        if (!(e.flags & 2)) return e.stateNode
      }
    }
    function Qc(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = an)))
      else if (
        r !== 4 &&
        (r === 27 && Qd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;)
          (Qc(e, t, n), (e = e.sibling))
    }
    function $c(e, t, n) {
      var r = e.tag
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e))
      else if (
        r !== 4 &&
        (r === 27 && Qd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for ($c(e, t, n), e = e.sibling; e !== null;)
          ($c(e, t, n), (e = e.sibling))
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0])
        ;(Fd(t, r, n), (t[dt] = e), (t[ft] = n))
      } catch (t) {
        X(e, e.return, t)
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null
    function ol(e, t) {
      if (((e = e.containerInfo), (zd = cp), (e = jr(e)), Mr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd }
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window
            var r = n.getSelection && n.getSelection()
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode
              var a = r.anchorOffset,
                o = r.focusNode
              r = r.focusOffset
              try {
                ;(n.nodeType, o.nodeType)
              } catch {
                n = null
                break a
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m))
                for (;;) {
                  if (f === e) break b
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break
                  ;((f = p), (p = f.parentNode))
                }
                f = m
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l }
            } else n = null
          }
        n ||= { start: 0, end: 0 }
      } else n = null
      for (
        Bd = { focusedElem: e, selectionRange: n }, cp = !1, al = t;
        al !== null;
      )
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e))
        else
          for (; al !== null;) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    ((a = e[n]), (a.ref.impl = a.nextImpl))
                break
              case 11:
              case 15:
                break
              case 1:
                if (e & 1024 && o !== null) {
                  ;((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode))
                  try {
                    var h = Js(n.type, a)
                    ;((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e))
                  } catch (e) {
                    X(n, n.return, e)
                  }
                }
                break
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    tf(e)
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        tf(e)
                        break
                      default:
                        e.textContent = ``
                    }
                }
                break
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break
              default:
                if (e & 1024) throw Error(i(163))
            }
            if (((e = t.sibling), e !== null)) {
              ;((e.return = t.return), (al = e))
              break
            }
            al = t.return
          }
    }
    function sl(e, t, n) {
      var r = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ;(xl(e, n), r & 4 && Hc(5, n))
          break
        case 1:
          if ((xl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount()
              } catch (e) {
                X(n, n.return, e)
              }
            else {
              var i = Js(n.type, t.memoizedProps)
              t = t.memoizedState
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                )
              } catch (e) {
                X(n, n.return, e)
              }
            }
          ;(r & 64 && Wc(n), r & 512 && Kc(n, n.return))
          break
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode
                  break
                case 1:
                  t = n.child.stateNode
              }
            try {
              Qa(e, t)
            } catch (e) {
              X(n, n.return, e)
            }
          }
          break
        case 27:
          t === null && r & 4 && el(n)
        case 26:
        case 5:
          ;(xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return))
          break
        case 12:
          xl(e, n)
          break
        case 31:
          ;(xl(e, n), r & 4 && fl(e, n))
          break
        case 13:
          ;(xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Yu.bind(null, n)), cf(e, n)))))
          break
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ;((t = (t !== null && t.memoizedState !== null) || nl), (i = tl))
            var a = nl
            ;((tl = r),
              (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n),
              (tl = i),
              (nl = a))
          }
          break
        case 30:
          break
        default:
          xl(e, n)
      }
    }
    function cl(e) {
      var t = e.alternate
      ;(t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && yt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null))
    }
    var W = null,
      ll = !1
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling))
    }
    function dl(e, t, n) {
      if (Be && typeof Be.onCommitFiberUnmount == `function`)
        try {
          Be.onCommitFiberUnmount(Re, n)
        } catch {}
      switch (n.tag) {
        case 26:
          ;(nl || qc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)))
          break
        case 27:
          nl || qc(n, t)
          var r = W,
            i = ll
          ;(Qd(n.type) && ((W = n.stateNode), (ll = !1)),
            ul(e, t, n),
            mf(n.stateNode),
            (W = r),
            (ll = i))
          break
        case 5:
          nl || qc(n, t)
        case 6:
          if (
            ((r = W),
            (i = ll),
            (W = null),
            ul(e, t, n),
            (W = r),
            (ll = i),
            W !== null)
          )
            if (ll)
              try {
                ;(W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode)
              } catch (e) {
                X(n, t, e)
              }
            else
              try {
                W.removeChild(n.stateNode)
              } catch (e) {
                X(n, t, e)
              }
          break
        case 18:
          W !== null &&
            (ll
              ? ((e = W),
                $d(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Pp(e))
              : $d(W, n.stateNode))
          break
        case 4:
          ;((r = W),
            (i = ll),
            (W = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (W = r),
            (ll = i))
          break
        case 0:
        case 11:
        case 14:
        case 15:
          ;(Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n))
          break
        case 1:
          ;(nl ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ul(e, t, n))
          break
        case 21:
          ul(e, t, n)
          break
        case 22:
          ;((nl = (r = nl) || n.memoizedState !== null), ul(e, t, n), (nl = r))
          break
        default:
          ul(e, t, n)
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated
        try {
          Pp(e)
        } catch (e) {
          X(t, t.return, e)
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Pp(e)
        } catch (e) {
          X(t, t.return, e)
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode
          return (t === null && (t = e.stateNode = new il()), t)
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          )
        default:
          throw Error(i(435, e.tag))
      }
    }
    function hl(e, t) {
      var n = ml(e)
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t)
          var r = Xu.bind(null, e, t)
          t.then(r, r)
        }
      })
    }
    function gl(e, t) {
      var n = t.deletions
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Qd(c.type)) {
                  ;((W = c.stateNode), (ll = !1))
                  break a
                }
                break
              case 5:
                ;((W = c.stateNode), (ll = !1))
                break a
              case 3:
              case 4:
                ;((W = c.stateNode.containerInfo), (ll = !0))
                break a
            }
            c = c.return
          }
          if (W === null) throw Error(i(160))
          ;(dl(o, s, a),
            (W = null),
            (ll = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null))
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (vl(t, e), (t = t.sibling))
    }
    var _l = null
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ;(gl(t, e),
            yl(e),
            r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)))
          break
        case 1:
          ;(gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))))
          break
        case 26:
          var a = _l
          if (
            (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ;((r = e.type),
                      (n = e.memoizedProps),
                      (a = a.ownerDocument || a))
                    b: switch (r) {
                      case `title`:
                        ;((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[vt] ||
                            o[dt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(
                              o,
                              a.querySelector(`head > title`),
                            )),
                          Fd(o, r, n),
                          (o[dt] = e),
                          wt(o),
                          (r = o))
                        break a
                      case `link`:
                        var s = Hf(`link`, `href`, a).get(r + (n.href || ``))
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)),
                          Fd(o, r, n),
                          a.head.appendChild(o))
                        break
                      case `meta`:
                        if (
                          (s = Hf(`meta`, `content`, a).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1)
                              break b
                            }
                        }
                        ;((o = a.createElement(r)),
                          Fd(o, r, n),
                          a.head.appendChild(o))
                        break
                      default:
                        throw Error(i(468, r))
                    }
                    ;((o[dt] = e), wt(o), (r = o))
                  }
                  e.stateNode = r
                } else Uf(a, e.type, e.stateNode)
              else e.stateNode = Lf(a, r, e.memoizedProps)
            else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? Uf(a, e.type, e.stateNode)
                    : Lf(a, r, e.memoizedProps))
          }
          break
        case 27:
          ;(gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps))
          break
        case 5:
          if (
            (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            e.flags & 32)
          ) {
            a = e.stateNode
            try {
              Xt(a, ``)
            } catch (t) {
              X(e, e.return, t)
            }
          }
          ;(r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Yc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0))
          break
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162))
            ;((r = e.memoizedProps), (n = e.stateNode))
            try {
              n.nodeValue = r
            } catch (t) {
              X(e, e.return, t)
            }
          }
          break
        case 3:
          if (
            ((Vf = null),
            (a = _l),
            (_l = _f(t.containerInfo)),
            gl(t, e),
            (_l = a),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Pp(t.containerInfo)
            } catch (t) {
              X(e, e.return, t)
            }
          rl && ((rl = !1), bl(e))
          break
        case 4:
          ;((r = _l),
            (_l = _f(e.stateNode.containerInfo)),
            gl(t, e),
            yl(e),
            (_l = r))
          break
        case 12:
          ;(gl(t, e), yl(e))
          break
        case 31:
          ;(gl(t, e),
            yl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))))
          break
        case 13:
          ;(gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (eu = N()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))))
          break
        case 22:
          a = e.memoizedState !== null
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl
          if (
            ((tl = u || a),
            (nl = d || l),
            gl(t, e),
            (nl = d),
            (tl = u),
            yl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || tl || nl || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`))
                    else {
                      c = l.stateNode
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim()
                    }
                  } catch (e) {
                    X(l, l.return, e)
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps
                  } catch (e) {
                    X(l, l.return, e)
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t
                  try {
                    var m = l.stateNode
                    a ? ef(m, !0) : ef(l.stateNode, !1)
                  } catch (e) {
                    X(l, l.return, e)
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ;((t.child.return = t), (t = t.child))
                continue
              }
              if (t === e) break a
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a
                ;(n === t && (n = null), (t = t.return))
              }
              ;(n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling))
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), hl(e, n))))
          break
        case 19:
          ;(gl(t, e),
            yl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), hl(e, r))))
          break
        case 30:
          break
        case 21:
          break
        default:
          ;(gl(t, e), yl(e))
      }
    }
    function yl(e) {
      var t = e.flags
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Xc(r)) {
              n = r
              break
            }
            r = r.return
          }
          if (n == null) throw Error(i(160))
          switch (n.tag) {
            case 27:
              var a = n.stateNode
              $c(e, Zc(e), a)
              break
            case 5:
              var o = n.stateNode
              ;(n.flags & 32 && (Xt(o, ``), (n.flags &= -33)), $c(e, Zc(e), o))
              break
            case 3:
            case 4:
              var s = n.stateNode.containerInfo
              Qc(e, Zc(e), s)
              break
            default:
              throw Error(i(161))
          }
        } catch (t) {
          X(e, e.return, t)
        }
        e.flags &= -3
      }
      t & 4096 && (e.flags &= -4097)
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e
          ;(bl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling))
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling))
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ;(Uc(4, t, t.return), Sl(t))
            break
          case 1:
            qc(t, t.return)
            var n = t.stateNode
            ;(typeof n.componentWillUnmount == `function` && Gc(t, t.return, n),
              Sl(t))
            break
          case 27:
            mf(t.stateNode)
          case 26:
          case 5:
            ;(qc(t, t.return), Sl(t))
            break
          case 22:
            t.memoizedState === null && Sl(t)
            break
          case 30:
            Sl(t)
            break
          default:
            Sl(t)
        }
        e = e.sibling
      }
    }
    function Cl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            ;(Cl(i, a, n), Hc(4, a))
            break
          case 1:
            if (
              (Cl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount()
              } catch (e) {
                X(r, r.return, e)
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode
              try {
                var c = i.shared.hiddenCallbacks
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Za(c[i], s)
              } catch (e) {
                X(r, r.return, e)
              }
            }
            ;(n && o & 64 && Wc(a), Kc(a, a.return))
            break
          case 27:
            el(a)
          case 26:
          case 5:
            ;(Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return))
            break
          case 12:
            Cl(i, a, n)
            break
          case 31:
            ;(Cl(i, a, n), n && o & 4 && fl(i, a))
            break
          case 13:
            ;(Cl(i, a, n), n && o & 4 && pl(i, a))
            break
          case 22:
            ;(a.memoizedState === null && Cl(i, a, n), Kc(a, a.return))
            break
          case 30:
            break
          default:
            Cl(i, a, n)
        }
        t = t.sibling
      }
    }
    function wl(e, t) {
      var n = null
      ;(e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ua(n)))
    }
    function Tl(e, t) {
      ;((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ua(e)))
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (Dl(e, t, n, r), (t = t.sibling))
    }
    function Dl(e, t, n, r) {
      var i = t.flags
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ;(El(e, t, n, r), i & 2048 && Hc(9, t))
          break
        case 1:
          El(e, t, n, r)
          break
        case 3:
          ;(El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ua(e))))
          break
        case 12:
          if (i & 2048) {
            ;(El(e, t, n, r), (e = t.stateNode))
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                )
            } catch (e) {
              X(t, t.return, e)
            }
          } else El(e, t, n, r)
          break
        case 31:
          El(e, t, n, r)
          break
        case 13:
          El(e, t, n, r)
          break
        case 23:
          break
        case 22:
          ;((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2),
                  Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t))
          break
        case 24:
          ;(El(e, t, n, r), i & 2048 && Tl(t.alternate, t))
          break
        default:
          El(e, t, n, r)
      }
    }
    function Ol(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            ;(Ol(a, o, s, c, i), Hc(8, o))
            break
          case 23:
            break
          case 22:
            var u = o.stateNode
            ;(o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o))
            break
          case 24:
            ;(Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o))
            break
          default:
            Ol(a, o, s, c, i)
        }
        t = t.sibling
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags
          switch (r.tag) {
            case 22:
              ;(kl(n, r), i & 2048 && wl(r.alternate, r))
              break
            case 24:
              ;(kl(n, r), i & 2048 && Tl(r.alternate, r))
              break
            default:
              kl(n, r)
          }
          t = t.sibling
        }
    }
    var Al = 8192
    function jl(e, t, n) {
      if (e.subtreeFlags & Al)
        for (e = e.child; e !== null;) (Ml(e, t, n), (e = e.sibling))
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          ;(jl(e, t, n),
            e.flags & Al &&
              e.memoizedState !== null &&
              Kf(n, _l, e.memoizedState, e.memoizedProps))
          break
        case 5:
          jl(e, t, n)
          break
        case 3:
        case 4:
          var r = _l
          ;((_l = _f(e.stateNode.containerInfo)), jl(e, t, n), (_l = r))
          break
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n))
          break
        default:
          jl(e, t, n)
      }
    }
    function Nl(e) {
      var t = e.alternate
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null
        do ((t = e.sibling), (e.sibling = null), (e = t))
        while (e !== null)
      }
    }
    function Pl(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((al = r), Ll(r, e))
          }
        Nl(e)
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Fl(e), (e = e.sibling))
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ;(Pl(e), e.flags & 2048 && Uc(9, e, e.return))
          break
        case 3:
          Pl(e)
          break
        case 12:
          Pl(e)
          break
        case 22:
          var t = e.stateNode
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e)
          break
        default:
          Pl(e)
      }
    }
    function Il(e) {
      var t = e.deletions
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;((al = r), Ll(r, e))
          }
        Nl(e)
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            ;(Uc(8, t, t.return), Il(t))
            break
          case 22:
            ;((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Il(t)))
            break
          default:
            Il(t)
        }
        e = e.sibling
      }
    }
    function Ll(e, t) {
      for (; al !== null;) {
        var n = al
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t)
            break
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool
              r != null && r.refCount++
            }
            break
          case 24:
            ua(n.memoizedState.cache)
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r))
        else
          a: for (n = e; al !== null;) {
            r = al
            var i = r.sibling,
              a = r.return
            if ((cl(r), r === n)) {
              al = null
              break a
            }
            if (i !== null) {
              ;((i.return = a), (al = i))
              break a
            }
            al = a
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = ia(R),
            n = t.data.get(e)
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n)
        },
        cacheSignal: function () {
          return ia(R).controller.signal
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      Bl = null,
      Vl = !1,
      Hl = !1,
      Ul = !1,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = null,
      Ql = null,
      $l = !1,
      eu = 0,
      tu = 0,
      nu = 1 / 0,
      ru = null,
      iu = null,
      au = 0,
      ou = null,
      su = null,
      cu = 0,
      lu = 0,
      uu = null,
      du = null,
      fu = 0,
      pu = null
    function mu() {
      return G & 2 && J !== 0 ? J & -J : k.T === null ? ct() : fd()
    }
    function hu() {
      if (Yl === 0)
        if (!(J & 536870912) || I) {
          var e = qe
          ;((qe <<= 1), !(qe & 3932160) && (qe = 262144), (Yl = e))
        } else Yl = 536870912
      return ((e = io.current), e !== null && (e.flags |= 32), Yl)
    }
    function gu(e, t, n) {
      ;(((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Cu(e, 0), bu(e, J, Yl, !1)),
        tt(e, n),
        (!(G & 2) || e !== K) &&
          (e === K && (!(G & 2) && (ql |= n), Gl === 4 && bu(e, J, Yl, !1)),
          id(e)))
    }
    function _u(e, t, n) {
      if (G & 6) throw Error(i(327))
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Ze(e, t),
        a = r ? ju(e, t) : ku(e, t, !0),
        o = r
      do {
        if (a === 0) {
          Hl && !r && bu(e, t, 0, !1)
          break
        }
        if (((n = e.current.alternate), o && !yu(n))) {
          ;((a = ku(e, t, !1)), (o = !1))
          continue
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s))
          if (s !== 0) {
            t = s
            a: {
              var c = e
              a = Zl
              var l = c.current.memoizedState.isDehydrated
              if ((l && (Cu(c, s).flags |= 256), (s = ku(c, s, !1)), s !== 2)) {
                if (Ul && !l) {
                  ;((c.errorRecoveryDisabledLanes |= o), (ql |= o), (a = 4))
                  break a
                }
                ;((o = Ql),
                  (Ql = a),
                  o !== null && (Ql === null ? (Ql = o) : Ql.push.apply(Ql, o)))
              }
              a = s
            }
            if (((o = !1), a !== 2)) continue
          }
        }
        if (a === 1) {
          ;(Cu(e, 0), bu(e, t, 0, !0))
          break
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345))
            case 4:
              if ((t & 4194048) !== t) break
            case 6:
              bu(r, t, Yl, !Vl)
              break a
            case 2:
              Ql = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(i(329))
          }
          if ((t & 62914560) === t && ((a = eu + 300 - N()), 10 < a)) {
            if ((bu(r, t, Yl, !Vl), Xe(r, 0, !0) !== 0)) break a
            ;((cu = t),
              (r.timeoutHandle = qd(
                vu.bind(
                  null,
                  r,
                  n,
                  Ql,
                  ru,
                  $l,
                  t,
                  Yl,
                  ql,
                  Xl,
                  Vl,
                  o,
                  `Throttled`,
                  -0,
                  0,
                ),
                a,
              )))
            break a
          }
          vu(r, n, Ql, ru, $l, t, Yl, ql, Xl, Vl, o, null, -0, 0)
        }
        break
      } while (1)
      id(e)
    }
    function vu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        ;((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: an,
        }),
          Ml(t, a, d))
        var m =
          (a & 62914560) === a ? eu - N() : (a & 4194048) === a ? tu - N() : 0
        if (((m = Jf(d, m)), m !== null)) {
          ;((cu = a),
            (e.cancelPendingCommit = m(
              Ru.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p),
            )),
            bu(e, a, o, !l))
          return
        }
      }
      Ru(e, t, a, n, r, i, o, s, c)
    }
    function yu(e) {
      for (var t = e; ;) {
        var n = t.tag
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot
            i = i.value
            try {
              if (!Dr(a(), i)) return !1
            } catch {
              return !1
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n))
        else {
          if (t === e) break
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0
            t = t.return
          }
          ;((t.sibling.return = t.return), (t = t.sibling))
        }
      }
      return !0
    }
    function bu(e, t, n, r) {
      ;((t &= ~Jl),
        (t &= ~ql),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes))
      for (var i = t; 0 < i;) {
        var a = 31 - He(i),
          o = 1 << a
        ;((r[a] = -1), (i &= ~o))
      }
      n !== 0 && rt(e, n, t)
    }
    function xu() {
      return G & 6 ? !0 : (ad(0, !1), !1)
    }
    function Su() {
      if (q !== null) {
        if (Y === 0) var e = q.return
        else ((e = q), (Xi = Yi = null), jo(e), (Na = null), (Pa = 0), (e = q))
        for (; e !== null;) (Vc(e.alternate, e), (e = e.return))
        q = null
      }
    }
    function Cu(e, t) {
      var n = e.timeoutHandle
      ;(n !== -1 && ((e.timeoutHandle = -1), Jd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (cu = 0),
        Su(),
        (K = e),
        (q = n = mi(e.current, null)),
        (J = t),
        (Y = 0),
        (Bl = null),
        (Vl = !1),
        (Hl = Ze(e, t)),
        (Ul = !1),
        (Xl = Yl = Jl = ql = Kl = Gl = 0),
        (Ql = Zl = null),
        ($l = !1),
        t & 8 && (t |= t & 32))
      var r = e.entangledLanes
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - He(r),
            a = 1 << i
          ;((t |= e[i]), (r &= ~a))
        }
      return ((Wl = t), ii(), n)
    }
    function wu(e, t) {
      ;((z = null),
        (k.H = Bs),
        t === Ca || t === Ta
          ? ((t = ja()), (Y = 3))
          : t === wa
            ? ((t = ja()), (Y = 4))
            : (Y =
                t === U
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (Bl = t),
        q === null && ((Gl = 1), Qs(e, Si(t, e.current))))
    }
    function Tu() {
      var e = io.current
      return e === null
        ? !0
        : (J & 4194048) === J
          ? ao === null
          : (J & 62914560) === J || J & 536870912
            ? e === ao
            : !1
    }
    function Eu() {
      var e = k.H
      return ((k.H = Bs), e === null ? Bs : e)
    }
    function Du() {
      var e = k.A
      return ((k.A = Rl), e)
    }
    function Ou() {
      ;((Gl = 4),
        Vl || ((J & 4194048) !== J && io.current !== null) || (Hl = !0),
        (!(Kl & 134217727) && !(ql & 134217727)) ||
          K === null ||
          bu(K, J, Yl, !1))
    }
    function ku(e, t, n) {
      var r = G
      G |= 2
      var i = Eu(),
        a = Du()
      ;((K !== e || J !== t) && ((ru = null), Cu(e, t)), (t = !1))
      var o = Gl
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = Bl
            switch (Y) {
              case 8:
                ;(Su(), (o = 6))
                break a
              case 3:
              case 2:
              case 9:
              case 6:
                io.current === null && (t = !0)
                var l = Y
                if (((Y = 0), (Bl = null), Fu(e, s, c, l), n && Hl)) {
                  o = 0
                  break a
                }
                break
              default:
                ;((l = Y), (Y = 0), (Bl = null), Fu(e, s, c, l))
            }
          }
          ;(Au(), (o = Gl))
          break
        } catch (t) {
          wu(e, t)
        }
      while (1)
      return (
        t && e.shellSuspendCounter++,
        (Xi = Yi = null),
        (G = r),
        (k.H = i),
        (k.A = a),
        q === null && ((K = null), (J = 0), ii()),
        o
      )
    }
    function Au() {
      for (; q !== null;) Nu(q)
    }
    function ju(e, t) {
      var n = G
      G |= 2
      var r = Eu(),
        a = Du()
      K !== e || J !== t
        ? ((ru = null), (nu = N() + 500), Cu(e, t))
        : (Hl = Ze(e, t))
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q
            var o = Bl
            b: switch (Y) {
              case 1:
                ;((Y = 0), (Bl = null), Fu(e, t, o, 1))
                break
              case 2:
              case 9:
                if (Da(o)) {
                  ;((Y = 0), (Bl = null), Pu(t))
                  break
                }
                ;((t = function () {
                  ;((Y !== 2 && Y !== 9) || K !== e || (Y = 7), id(e))
                }),
                  o.then(t, t))
                break a
              case 3:
                Y = 7
                break a
              case 4:
                Y = 5
                break a
              case 7:
                Da(o)
                  ? ((Y = 0), (Bl = null), Pu(t))
                  : ((Y = 0), (Bl = null), Fu(e, t, o, 7))
                break
              case 5:
                var s = null
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState
                  case 5:
                  case 27:
                    var c = q
                    if (s ? Gf(s) : c.stateNode.complete) {
                      ;((Y = 0), (Bl = null))
                      var l = c.sibling
                      if (l !== null) q = l
                      else {
                        var u = c.return
                        u === null ? (q = null) : ((q = u), Iu(u))
                      }
                      break b
                    }
                }
                ;((Y = 0), (Bl = null), Fu(e, t, o, 5))
                break
              case 6:
                ;((Y = 0), (Bl = null), Fu(e, t, o, 6))
                break
              case 8:
                ;(Su(), (Gl = 6))
                break a
              default:
                throw Error(i(462))
            }
          }
          Mu()
          break
        } catch (t) {
          wu(e, t)
        }
      while (1)
      return (
        (Xi = Yi = null),
        (k.H = r),
        (k.A = a),
        (G = n),
        q === null ? ((K = null), (J = 0), ii(), Gl) : 0
      )
    }
    function Mu() {
      for (; q !== null && !Oe();) Nu(q)
    }
    function Nu(e) {
      var t = Mc(e.alternate, e, Wl)
      ;((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (q = t))
    }
    function Pu(e) {
      var t = e,
        n = t.alternate
      switch (t.tag) {
        case 15:
        case 0:
          t = gc(n, t, t.pendingProps, t.type, void 0, J)
          break
        case 11:
          t = gc(n, t, t.pendingProps, t.type.render, t.ref, J)
          break
        case 5:
          jo(t)
        default:
          ;(Vc(n, t), (t = q = hi(t, Wl)), (t = Mc(n, t, Wl)))
      }
      ;((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (q = t))
    }
    function Fu(e, t, n, r) {
      ;((Xi = Yi = null), jo(t), (Na = null), (Pa = 0))
      var i = t.return
      try {
        if (H(e, i, t, n, J)) {
          ;((Gl = 1), Qs(e, Si(n, e.current)), (q = null))
          return
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t)
        ;((Gl = 1), Qs(e, Si(n, e.current)), (q = null))
        return
      }
      t.flags & 32768
        ? (I || r === 1
            ? (e = !0)
            : Hl || J & 536870912
              ? (e = !1)
              : ((Vl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = io.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Lu(t, e))
        : Iu(t)
    }
    function Iu(e) {
      var t = e
      do {
        if (t.flags & 32768) {
          Lu(t, Vl)
          return
        }
        e = t.return
        var n = zc(t.alternate, t, Wl)
        if (n !== null) {
          q = n
          return
        }
        if (((t = t.sibling), t !== null)) {
          q = t
          return
        }
        q = t = e
      } while (t !== null)
      Gl === 0 && (Gl = 5)
    }
    function Lu(e, t) {
      do {
        var n = Bc(e.alternate, e)
        if (n !== null) {
          ;((n.flags &= 32767), (q = n))
          return
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e
          return
        }
        q = e = n
      } while (e !== null)
      ;((Gl = 6), (q = null))
    }
    function Ru(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null
      do Uu()
      while (au !== 0)
      if (G & 6) throw Error(i(327))
      if (t !== null) {
        if (t === e.current) throw Error(i(177))
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ri),
          nt(e, n, o, s, c, l),
          e === K && ((q = K = null), (J = 0)),
          (su = t),
          (ou = e),
          (cu = n),
          (lu = o),
          (uu = a),
          (du = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Zu(Ne, function () {
                return (Wu(), null)
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ;((r = k.T), (k.T = null), (a = A.p), (A.p = 2), (s = G), (G |= 4))
          try {
            ol(e, t, n)
          } finally {
            ;((G = s), (A.p = a), (k.T = r))
          }
        }
        ;((au = 1), zu(), Bu(), Vu())
      }
    }
    function zu() {
      if (au === 1) {
        au = 0
        var e = ou,
          t = su,
          n = !!(t.flags & 13878)
        if (t.subtreeFlags & 13878 || n) {
          ;((n = k.T), (k.T = null))
          var r = A.p
          A.p = 2
          var i = G
          G |= 4
          try {
            vl(t, e)
            var a = Bd,
              o = jr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Ar(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Mr(s)) {
                var l = c.start,
                  u = c.end
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)))
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m)
                    !p.extend && h > g && ((o = g), (g = h), (h = o))
                    var _ = kr(s, h),
                      v = kr(s, g)
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange()
                      ;(y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)))
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop })
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s]
                ;((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top))
              }
            }
            ;((cp = !!zd), (Bd = zd = null))
          } finally {
            ;((G = i), (A.p = r), (k.T = n))
          }
        }
        ;((e.current = t), (au = 2))
      }
    }
    function Bu() {
      if (au === 2) {
        au = 0
        var e = ou,
          t = su,
          n = !!(t.flags & 8772)
        if (t.subtreeFlags & 8772 || n) {
          ;((n = k.T), (k.T = null))
          var r = A.p
          A.p = 2
          var i = G
          G |= 4
          try {
            sl(e, t.alternate, t)
          } finally {
            ;((G = i), (A.p = r), (k.T = n))
          }
        }
        au = 3
      }
    }
    function Vu() {
      if (au === 4 || au === 3) {
        ;((au = 0), ke())
        var e = ou,
          t = su,
          n = cu,
          r = du
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (au = 5)
          : ((au = 0), (su = ou = null), Hu(e, e.pendingLanes))
        var i = e.pendingLanes
        if (
          (i === 0 && (iu = null),
          st(n),
          (t = t.stateNode),
          Be && typeof Be.onCommitFiberRoot == `function`)
        )
          try {
            Be.onCommitFiberRoot(Re, t, void 0, (t.current.flags & 128) == 128)
          } catch {}
        if (r !== null) {
          ;((t = k.T), (i = A.p), (A.p = 2), (k.T = null))
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o]
              a(s.value, { componentStack: s.stack })
            }
          } finally {
            ;((k.T = t), (A.p = i))
          }
        }
        ;(cu & 3 && Uu(),
          id(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === pu
              ? fu++
              : ((fu = 0), (pu = e))
            : (fu = 0),
          ad(0, !1))
      }
    }
    function Hu(e, t) {
      ;(e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ua(t)))
    }
    function Uu() {
      return (zu(), Bu(), Vu(), Wu())
    }
    function Wu() {
      if (au !== 5) return !1
      var e = ou,
        t = lu
      lu = 0
      var n = st(cu),
        r = k.T,
        a = A.p
      try {
        ;((A.p = 32 > n ? 32 : n), (k.T = null), (n = uu), (uu = null))
        var o = ou,
          s = cu
        if (((au = 0), (su = ou = null), (cu = 0), G & 6)) throw Error(i(331))
        var c = G
        if (
          ((G |= 4),
          Fl(o.current),
          Dl(o, o.current, s, n),
          (G = c),
          ad(0, !1),
          Be && typeof Be.onPostCommitFiberRoot == `function`)
        )
          try {
            Be.onPostCommitFiberRoot(Re, o)
          } catch {}
        return !0
      } finally {
        ;((A.p = a), (k.T = r), Hu(e, t))
      }
    }
    function Gu(e, t, n) {
      ;((t = Si(n, t)),
        (t = ec(e.stateNode, t, 2)),
        (e = Ga(e, t, 2)),
        e !== null && (tt(e, 2), id(e)))
    }
    function X(e, t, n) {
      if (e.tag === 3) Gu(e, e, n)
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Gu(t, e, n)
            break
          }
          if (t.tag === 1) {
            var r = t.stateNode
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (iu === null || !iu.has(r)))
            ) {
              ;((e = Si(n, e)),
                (n = tc(2)),
                (r = Ga(t, n, 2)),
                r !== null && (nc(n, r, t, e), tt(r, 2), id(r)))
              break
            }
          }
          t = t.return
        }
    }
    function Ku(e, t, n) {
      var r = e.pingCache
      if (r === null) {
        r = e.pingCache = new zl()
        var i = new Set()
        r.set(t, i)
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)))
      i.has(n) ||
        ((Ul = !0), i.add(n), (e = qu.bind(null, e, t, n)), t.then(e, e))
    }
    function qu(e, t, n) {
      var r = e.pingCache
      ;(r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (Gl === 4 || (Gl === 3 && (J & 62914560) === J && 300 > N() - eu)
            ? !(G & 2) && Cu(e, 0)
            : (Jl |= n),
          Xl === J && (Xl = 0)),
        id(e))
    }
    function Ju(e, t) {
      ;(t === 0 && (t = $e()), (e = si(e, t)), e !== null && (tt(e, t), id(e)))
    }
    function Yu(e) {
      var t = e.memoizedState,
        n = 0
      ;(t !== null && (n = t.retryLane), Ju(e, n))
    }
    function Xu(e, t) {
      var n = 0
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState
          a !== null && (n = a.retryLane)
          break
        case 19:
          r = e.stateNode
          break
        case 22:
          r = e.stateNode._retryCache
          break
        default:
          throw Error(i(314))
      }
      ;(r !== null && r.delete(t), Ju(e, n))
    }
    function Zu(e, t) {
      return Ee(e, t)
    }
    var Qu = null,
      $u = null,
      ed = !1,
      td = !1,
      nd = !1,
      rd = 0
    function id(e) {
      ;(e !== $u &&
        e.next === null &&
        ($u === null ? (Qu = $u = e) : ($u = $u.next = e)),
        (td = !0),
        ed || ((ed = !0), dd()))
    }
    function ad(e, t) {
      if (!nd && td) {
        nd = !0
        do
          for (var n = !1, r = Qu; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes
                if (i === 0) var a = 0
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes
                  ;((a = (1 << (31 - He(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0))
                }
                a !== 0 && ((n = !0), ud(r, a))
              } else
                ((a = J),
                  (a = Xe(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Ze(r, a) || ((n = !0), ud(r, a)))
            r = r.next
          }
        while (n)
        nd = !1
      }
    }
    function od() {
      sd()
    }
    function sd() {
      td = ed = !1
      var e = 0
      rd !== 0 && Kd() && (e = rd)
      for (var t = N(), n = null, r = Qu; r !== null;) {
        var i = r.next,
          a = cd(r, t)
        ;(a === 0
          ? ((r.next = null),
            n === null ? (Qu = i) : (n.next = i),
            i === null && ($u = n))
          : ((n = r), (e !== 0 || a & 3) && (td = !0)),
          (r = i))
      }
      ;((au !== 0 && au !== 5) || ad(e, !1), rd !== 0 && (rd = 0))
    }
    function cd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - He(a),
          s = 1 << o,
          c = i[o]
        ;(c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Qe(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s))
      }
      if (
        ((t = K),
        (n = J),
        (n = Xe(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Y === 2 || Y === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && De(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        )
      if (!(n & 3) || Ze(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t
        switch ((r !== null && De(r), st(n))) {
          case 2:
          case 8:
            n = Me
            break
          case 32:
            n = Ne
            break
          case 268435456:
            n = Fe
            break
          default:
            n = Ne
        }
        return (
          (r = ld.bind(null, e)),
          (n = Ee(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        )
      }
      return (
        r !== null && r !== null && De(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      )
    }
    function ld(e, t) {
      if (au !== 0 && au !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null)
      var n = e.callbackNode
      if (Uu() && e.callbackNode !== n) return null
      var r = J
      return (
        (r = Xe(
          e,
          e === K ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (_u(e, r, t),
            cd(e, N()),
            e.callbackNode != null && e.callbackNode === n
              ? ld.bind(null, e)
              : null)
      )
    }
    function ud(e, t) {
      if (Uu()) return null
      _u(e, t, !0)
    }
    function dd() {
      Xd(function () {
        G & 6 ? Ee(je, od) : sd()
      })
    }
    function fd() {
      if (rd === 0) {
        var e = pa
        ;(e === 0 && ((e = Ke), (Ke <<= 1), !(Ke & 261888) && (Ke = 256)),
          (rd = e))
      }
      return rd
    }
    function pd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : rn(`` + e)
    }
    function md(e, t) {
      var n = t.ownerDocument.createElement(`input`)
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      )
    }
    function hd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = pd((i[ft] || null).action),
          o = r.submitter
        o &&
          ((t = (t = o[ft] || null)
            ? pd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)))
        var s = new En(`action`, `action`, null, r, i)
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (rd !== 0) {
                    var e = o ? md(i, o) : new FormData(i)
                    Es(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    )
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? md(i, o) : new FormData(i)),
                    Es(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ))
              },
              currentTarget: i,
            },
          ],
        })
      }
    }
    for (var gd = 0; gd < Qr.length; gd++) {
      var _d = Qr[gd]
      $r(_d.toLowerCase(), `on` + (_d[0].toUpperCase() + _d.slice(1)))
    }
    ;($r(Wr, `onAnimationEnd`),
      $r(Gr, `onAnimationIteration`),
      $r(Kr, `onAnimationStart`),
      $r(`dblclick`, `onDoubleClick`),
      $r(`focusin`, `onFocus`),
      $r(`focusout`, `onBlur`),
      $r(qr, `onTransitionRun`),
      $r(Jr, `onTransitionStart`),
      $r(Yr, `onTransitionCancel`),
      $r(Xr, `onTransitionEnd`),
      Ot(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Ot(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Ot(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Ot(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Dt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      Dt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Dt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Dt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Dt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Dt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ))
    var vd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      yd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(vd),
      )
    function bd(e, t) {
      t = !!(t & 4)
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event
        r = r.listeners
        a: {
          var a = void 0
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ei(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a
              ;((a = s), (i.currentTarget = l))
              try {
                a(i)
              } catch (e) {
                ei(e)
              }
              ;((i.currentTarget = null), (a = c))
            }
        }
      }
    }
    function Z(e, t) {
      var n = t[mt]
      n === void 0 && (n = t[mt] = new Set())
      var r = e + `__bubble`
      n.has(r) || (wd(t, e, 2, !1), n.add(r))
    }
    function xd(e, t, n) {
      var r = 0
      ;(t && (r |= 4), wd(n, e, r, t))
    }
    var Sd = `_reactListening` + Math.random().toString(36).slice(2)
    function Cd(e) {
      if (!e[Sd]) {
        ;((e[Sd] = !0),
          Tt.forEach(function (t) {
            t !== `selectionchange` && (yd.has(t) || xd(t, !1, e), xd(t, !0, e))
          }))
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[Sd] || ((t[Sd] = !0), xd(`selectionchange`, !1, t))
      }
    }
    function wd(e, t, n, r) {
      switch (hp(t)) {
        case 2:
          var i = lp
          break
        case 8:
          i = up
          break
        default:
          i = dp
      }
      ;((n = i.bind(null, t, n, e)),
        (i = void 0),
        !hn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }))
    }
    function Td(e, t, n, r, i) {
      var a = r
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return
          var s = r.tag
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo
            if (c === i) break
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return
                s = s.return
              }
            for (; c !== null;) {
              if (((s = bt(c)), s === null)) return
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s
                continue a
              }
              c = c.parentNode
            }
          }
          r = r.return
        }
      fn(function () {
        var r = a,
          i = sn(n),
          s = []
        a: {
          var c = Zr.get(e)
          if (c !== void 0) {
            var l = En,
              u = e
            switch (e) {
              case `keypress`:
                if (xn(n) === 0) break a
              case `keydown`:
              case `keyup`:
                l = Wn
                break
              case `focusin`:
                ;((u = `focus`), (l = Fn))
                break
              case `focusout`:
                ;((u = `blur`), (l = Fn))
                break
              case `beforeblur`:
              case `afterblur`:
                l = Fn
                break
              case `click`:
                if (n.button === 2) break a
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Nn
                break
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Pn
                break
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Kn
                break
              case Wr:
              case Gr:
              case Kr:
                l = In
                break
              case Xr:
                l = qn
                break
              case `scroll`:
              case `scrollend`:
                l = On
                break
              case `wheel`:
                l = Jn
                break
              case `copy`:
              case `cut`:
              case `paste`:
                l = Ln
                break
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Gn
                break
              case `toggle`:
              case `beforetoggle`:
                l = Yn
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c
            d = []
            for (var m = r, h; m !== null;) {
              var g = m
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = pn(m, p)), g != null && d.push(Ed(m, g, h))),
                f)
              )
                break
              m = m.return
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }))
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== on &&
                (u = n.relatedTarget || n.fromElement) &&
                (bt(u) || u[pt]))
            )
              break a
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? bt(u) : null),
                  u !== null &&
                    ((f = o(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Nn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Gn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : St(l)),
                (h = u == null ? c : St(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                bt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Od, p = l, m = u, h = 0, g = p; g; g = d(g)) h++
                  g = 0
                  for (var _ = m; _; _ = d(_)) g++
                  for (; 0 < h - g;) ((p = d(p)), h--)
                  for (; 0 < g - h;) ((m = d(m)), g--)
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p
                      break b
                    }
                    ;((p = d(p)), (m = d(m)))
                  }
                  d = null
                }
              else d = null
              ;(l !== null && kd(s, c, l, d, !1),
                u !== null && f !== null && kd(s, f, u, d, !0))
            }
          }
          a: {
            if (
              ((c = r ? St(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = hr
            else if (lr(c))
              if (gr) v = Tr
              else {
                v = Cr
                var y = Sr
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && en(r.elementType) && (v = hr)
                  : (v = wr))
            if ((v &&= v(e, r))) {
              ur(s, v, n, i)
              break a
            }
            ;(y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Kt(c, `number`, c.value))
          }
          switch (((y = r ? St(r) : window), e)) {
            case `focusin`:
              ;(lr(y) || y.contentEditable === `true`) &&
                ((Pr = y), (Fr = r), (Ir = null))
              break
            case `focusout`:
              Ir = Fr = Pr = null
              break
            case `mousedown`:
              Lr = !0
              break
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ;((Lr = !1), Rr(s, n, i))
              break
            case `selectionchange`:
              if (Nr) break
            case `keydown`:
            case `keyup`:
              Rr(s, n, i)
          }
          var b
          if (Zn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`
                  break b
                case `compositionend`:
                  x = `onCompositionEnd`
                  break b
                case `compositionupdate`:
                  x = `onCompositionUpdate`
                  break b
              }
              x = void 0
            }
          else
            ar
              ? rr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`)
          ;(x &&
            (er &&
              n.locale !== `ko` &&
              (ar || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ar && (b = bn())
                : ((_n = i),
                  (vn = `value` in _n ? _n.value : _n.textContent),
                  (ar = !0))),
            (y = Dd(r, x)),
            0 < y.length &&
              ((x = new Rn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = ir(n)), b !== null && (x.data = b)))),
            (b = $n ? or(e, n) : sr(e, n)) &&
              ((x = Dd(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Rn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            hd(s, e, r, n, i))
        }
        bd(s, t)
      })
    }
    function Ed(e, t, n) {
      return { instance: e, listener: t, currentTarget: n }
    }
    function Dd(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = pn(e, n)),
            i != null && r.unshift(Ed(e, i, a)),
            (i = pn(e, t)),
            i != null && r.push(Ed(e, i, a))),
          e.tag === 3)
        )
          return r
        e = e.return
      }
      return []
    }
    function Od(e) {
      if (e === null) return null
      do e = e.return
      while (e && e.tag !== 5 && e.tag !== 27)
      return e || null
    }
    function kd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode
        if (((s = s.tag), c !== null && c === r)) break
        ;((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = pn(n, a)), l != null && o.unshift(Ed(n, l, c)))
            : i || ((l = pn(n, a)), l != null && o.push(Ed(n, l, c)))),
          (n = n.return))
      }
      o.length !== 0 && e.push({ event: t, listeners: o })
    }
    var Ad = /\r\n?/g,
      jd = /\u0000|\uFFFD/g
    function Md(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Ad,
          `
`,
        )
        .replace(jd, ``)
    }
    function Nd(e, t) {
      return ((t = Md(t)), Md(e) === t)
    }
    function Q(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Xt(e, `` + r)
          break
        case `className`:
          Pt(e, `class`, r)
          break
        case `tabIndex`:
          Pt(e, `tabindex`, r)
          break
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Pt(e, n, r)
          break
        case `style`:
          $t(e, r, o)
          break
        case `data`:
          if (t !== `object`) {
            Pt(e, `data`, r)
            break
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n)
            break
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n)
            break
          }
          ;((r = rn(`` + r)), e.setAttribute(n, r))
          break
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            )
            break
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Q(e, t, `name`, a.name, a, null),
                  Q(e, t, `formEncType`, a.formEncType, a, null),
                  Q(e, t, `formMethod`, a.formMethod, a, null),
                  Q(e, t, `formTarget`, a.formTarget, a, null))
                : (Q(e, t, `encType`, a.encType, a, null),
                  Q(e, t, `method`, a.method, a, null),
                  Q(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n)
            break
          }
          ;((r = rn(`` + r)), e.setAttribute(n, r))
          break
        case `onClick`:
          r != null && (e.onclick = an)
          break
        case `onScroll`:
          r != null && Z(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && Z(`scrollend`, e)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`
          break
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break
        case `autoFocus`:
          break
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`)
            break
          }
          ;((n = rn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n))
          break
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n)
          break
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n)
          break
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n)
          break
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n)
          break
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r)
          break
        case `popover`:
          ;(Z(`beforetoggle`, e), Z(`toggle`, e), Nt(e, `popover`, r))
          break
        case `xlinkActuate`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r)
          break
        case `xlinkArcrole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r)
          break
        case `xlinkRole`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r)
          break
        case `xlinkShow`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r)
          break
        case `xlinkTitle`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r)
          break
        case `xlinkType`:
          Ft(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r)
          break
        case `xmlBase`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r)
          break
        case `xmlLang`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r)
          break
        case `xmlSpace`:
          Ft(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r)
          break
        case `is`:
          Nt(e, `is`, r)
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          ;(!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = tn.get(n) || n), Nt(e, n, r))
      }
    }
    function Pd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          $t(e, r, o)
          break
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60))
              e.innerHTML = n
            }
          }
          break
        case `children`:
          typeof r == `string`
            ? Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Xt(e, `` + r)
          break
        case `onScroll`:
          r != null && Z(`scroll`, e)
          break
        case `onScrollEnd`:
          r != null && Z(`scrollend`, e)
          break
        case `onClick`:
          r != null && (e.onclick = an)
          break
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break
        case `innerText`:
        case `textContent`:
          break
        default:
          if (!Et.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ft] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                ;(typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a))
                break a
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Nt(e, n, r)
            }
      }
    }
    function Fd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `img`:
          ;(Z(`error`, e), Z(`load`, e))
          var r = !1,
            a = !1,
            o
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o]
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0
                    break
                  case `srcSet`:
                    a = !0
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t))
                  default:
                    Q(e, t, o, s, n, null)
                }
            }
          ;(a && Q(e, t, `srcSet`, n.srcSet, n, null),
            r && Q(e, t, `src`, n.src, n, null))
          return
        case `input`:
          Z(`invalid`, e)
          var c = (o = s = a = null),
            l = null,
            u = null
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r]
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d
                    break
                  case `type`:
                    s = d
                    break
                  case `checked`:
                    l = d
                    break
                  case `defaultChecked`:
                    u = d
                    break
                  case `value`:
                    o = d
                    break
                  case `defaultValue`:
                    c = d
                    break
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t))
                    break
                  default:
                    Q(e, t, r, d, n, null)
                }
            }
          Gt(e, o, c, l, u, s, a, !1)
          return
        case `select`:
          for (a in (Z(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c
                  break
                case `defaultValue`:
                  s = c
                  break
                case `multiple`:
                  r = c
                default:
                  Q(e, t, a, c, n, null)
              }
          ;((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1))
          return
        case `textarea`:
          for (s in (Z(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c
                  break
                case `defaultValue`:
                  a = c
                  break
                case `children`:
                  o = c
                  break
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91))
                  break
                default:
                  Q(e, t, s, c, n, null)
              }
          Yt(e, r, a, o)
          return
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`
                  break
                default:
                  Q(e, t, l, r, n, null)
              }
          return
        case `dialog`:
          ;(Z(`beforetoggle`, e), Z(`toggle`, e), Z(`cancel`, e), Z(`close`, e))
          break
        case `iframe`:
        case `object`:
          Z(`load`, e)
          break
        case `video`:
        case `audio`:
          for (r = 0; r < vd.length; r++) Z(vd[r], e)
          break
        case `image`:
          ;(Z(`error`, e), Z(`load`, e))
          break
        case `details`:
          Z(`toggle`, e)
          break
        case `embed`:
        case `source`:
        case `link`:
          ;(Z(`error`, e), Z(`load`, e))
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t))
                default:
                  Q(e, t, u, r, n, null)
              }
          return
        default:
          if (en(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Pd(e, t, d, r, n, void 0))
            return
          }
      }
      for (c in n)
        n.hasOwnProperty(c) && ((r = n[c]), r != null && Q(e, t, c, r, n, null))
    }
    function Id(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null
          for (m in n) {
            var f = n[m]
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break
                case `value`:
                  break
                case `defaultValue`:
                  l = f
                default:
                  r.hasOwnProperty(m) || Q(e, t, m, null, r, f)
              }
          }
          for (var p in r) {
            var m = r[p]
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m
                  break
                case `name`:
                  a = m
                  break
                case `checked`:
                  u = m
                  break
                case `defaultChecked`:
                  d = m
                  break
                case `value`:
                  s = m
                  break
                case `defaultValue`:
                  c = m
                  break
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t))
                  break
                default:
                  m !== f && Q(e, t, p, m, r, f)
              }
          }
          Wt(e, s, c, l, u, d, o, a)
          return
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break
                case `multiple`:
                  m = l
                default:
                  r.hasOwnProperty(o) || Q(e, t, o, null, r, l)
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  p = o
                  break
                case `defaultValue`:
                  c = o
                  break
                case `multiple`:
                  s = o
                default:
                  o !== l && Q(e, t, a, o, r, l)
              }
          ;((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? qt(e, !!n, n ? [] : ``, !1) : qt(e, !!n, t, !0))
              : qt(e, !!n, p, !1))
          return
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break
                case `children`:
                  break
                default:
                  Q(e, t, c, null, r, a)
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = a
                  break
                case `defaultValue`:
                  m = a
                  break
                case `children`:
                  break
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91))
                  break
                default:
                  a !== o && Q(e, t, s, a, r, o)
              }
          Jt(e, p, m)
          return
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1
                  break
                default:
                  Q(e, t, h, null, r, p)
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`
                  break
                default:
                  Q(e, t, l, p, r, m)
              }
          return
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Q(e, t, g, null, r, p))
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t))
                  break
                default:
                  Q(e, t, u, p, r, m)
              }
          return
        default:
          if (en(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Pd(e, t, _, void 0, r, p))
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Pd(e, t, d, p, r, m))
            return
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Q(e, t, v, null, r, p))
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Q(e, t, f, p, r, m))
    }
    function Ld(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0
        default:
          return !1
      }
    }
    function Rd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration
          if (a && s && Ld(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime
              if (l > s) break
              var u = c.transferSize,
                d = c.initiatorType
              u &&
                Ld(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))))
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break
          }
        }
        if (0 < e) return t / e / 1e6
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5
    }
    var zd = null,
      Bd = null
    function Vd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Hd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1
        case `http://www.w3.org/1998/Math/MathML`:
          return 2
        default:
          return 0
      }
    }
    function Ud(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1
          case `math`:
            return 2
          default:
            return 0
        }
      return e === 1 && t === `foreignObject` ? 0 : e
    }
    function Wd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      )
    }
    var Gd = null
    function Kd() {
      var e = window.event
      return e && e.type === `popstate`
        ? e !== Gd && ((Gd = e), !0)
        : ((Gd = null), !1)
    }
    var qd = typeof setTimeout == `function` ? setTimeout : void 0,
      Jd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Yd = typeof Promise == `function` ? Promise : void 0,
      Xd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Yd === void 0
            ? qd
            : function (e) {
                return Yd.resolve(null).then(e).catch(Zd)
              }
    function Zd(e) {
      setTimeout(function () {
        throw e
      })
    }
    function Qd(e) {
      return e === `head`
    }
    function $d(e, t) {
      var n = t,
        r = 0
      do {
        var i = n.nextSibling
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              ;(e.removeChild(i), Pp(t))
              return
            }
            r--
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++
          else if (n === `html`) mf(e.ownerDocument.documentElement)
          else if (n === `head`) {
            ;((n = e.ownerDocument.head), mf(n))
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName
              ;(a[vt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o))
            }
          } else n === `body` && mf(e.ownerDocument.body)
        n = i
      } while (n)
      Pp(t)
    }
    function ef(e, t) {
      var n = e
      e = 0
      do {
        var r = n.nextSibling
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break
            e--
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++
        n = r
      } while (n)
    }
    function tf(e) {
      var t = e.firstChild
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ;(tf(n), yt(n))
            continue
          case `SCRIPT`:
          case `STYLE`:
            continue
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue
        }
        e.removeChild(n)
      }
    }
    function nf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e
          } else return e
        else if (!e[vt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break
              return e
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break
              return e
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break
              return e
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break
              return e
            default:
              return e
          }
        if (((e = lf(e.nextSibling)), e === null)) break
      }
      return null
    }
    function rf(e, t, n) {
      if (t === ``) return null
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = lf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function af(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = lf(e.nextSibling)), e === null)
        )
          return null
      return e
    }
    function of(e) {
      return e.data === `$?` || e.data === `$~`
    }
    function sf(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      )
    }
    function cf(e, t) {
      var n = e.ownerDocument
      if (e.data === `$~`) e._reactRetry = t
      else if (e.data !== `$?` || n.readyState !== `loading`) t()
      else {
        var r = function () {
          ;(t(), n.removeEventListener(`DOMContentLoaded`, r))
        }
        ;(n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r))
      }
    }
    function lf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break
          if (t === `/$` || t === `/&`) return null
        }
      }
      return e
    }
    var uf = null
    function df(e) {
      e = e.nextSibling
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lf(e.nextSibling)
            t--
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++
        }
        e = e.nextSibling
      }
      return null
    }
    function ff(e) {
      e = e.previousSibling
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e
            t--
          } else (n !== `/$` && n !== `/&`) || t++
        }
        e = e.previousSibling
      }
      return null
    }
    function pf(e, t, n) {
      switch (((t = Vd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452))
          return e
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453))
          return e
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454))
          return e
        default:
          throw Error(i(451))
      }
    }
    function mf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0])
      yt(e)
    }
    var hf = new Map(),
      gf = new Set()
    function _f(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument
    }
    var vf = A.d
    A.d = { f: yf, r: bf, D: Cf, C: wf, L: Tf, m: Ef, X: Of, S: Df, M: kf }
    function yf() {
      var e = vf.f(),
        t = xu()
      return e || t
    }
    function bf(e) {
      var t = xt(e)
      t !== null && t.tag === 5 && t.type === `form` ? Os(t) : vf.r(e)
    }
    var xf = typeof document > `u` ? null : document
    function Sf(e, t, n) {
      var r = xf
      if (r && typeof t == `string` && t) {
        var i = Ut(t)
        ;((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          gf.has(i) ||
            (gf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Fd(t, `link`, e),
              wt(t),
              r.head.appendChild(t))))
      }
    }
    function Cf(e) {
      ;(vf.D(e), Sf(`dns-prefetch`, e, null))
    }
    function wf(e, t) {
      ;(vf.C(e, t), Sf(`preconnect`, e, t))
    }
    function Tf(e, t, n) {
      vf.L(e, t, n)
      var r = xf
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ut(t) + `"]`
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ut(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ut(n.imageSizes) + `"]`))
          : (i += `[href="` + Ut(e) + `"]`)
        var a = i
        switch (t) {
          case `style`:
            a = jf(e)
            break
          case `script`:
            a = Ff(e)
        }
        hf.has(a) ||
          ((e = p(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          hf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Mf(a))) ||
            (t === `script` && r.querySelector(If(a))) ||
            ((t = r.createElement(`link`)),
            Fd(t, `link`, e),
            wt(t),
            r.head.appendChild(t)))
      }
    }
    function Ef(e, t) {
      vf.m(e, t)
      var n = xf
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ut(r) +
            `"][href="` +
            Ut(e) +
            `"]`,
          a = i
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Ff(e)
        }
        if (
          !hf.has(a) &&
          ((e = p({ rel: `modulepreload`, href: e }, t)),
          hf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(If(a))) return
          }
          ;((r = n.createElement(`link`)),
            Fd(r, `link`, e),
            wt(r),
            n.head.appendChild(r))
        }
      }
    }
    function Df(e, t, n) {
      vf.S(e, t, n)
      var r = xf
      if (r && e) {
        var i = Ct(r).hoistableStyles,
          a = jf(e)
        t ||= `default`
        var o = i.get(a)
        if (!o) {
          var s = { loading: 0, preload: null }
          if ((o = r.querySelector(Mf(a)))) s.loading = 5
          else {
            ;((e = p({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = hf.get(a)) && zf(e, n))
            var c = (o = r.createElement(`link`))
            ;(wt(c),
              Fd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ;((c.onload = e), (c.onerror = t))
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2
              }),
              (s.loading |= 4),
              Rf(o, t, r))
          }
          ;((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o))
        }
      }
    }
    function Of(e, t) {
      vf.X(e, t)
      var n = xf
      if (n && e) {
        var r = Ct(n).hoistableScripts,
          i = Ff(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(If(i))),
          a ||
            ((e = p({ src: e, async: !0 }, t)),
            (t = hf.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            wt(a),
            Fd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function kf(e, t) {
      vf.M(e, t)
      var n = xf
      if (n && e) {
        var r = Ct(n).hoistableScripts,
          i = Ff(e),
          a = r.get(i)
        a ||
          ((a = n.querySelector(If(i))),
          a ||
            ((e = p({ src: e, async: !0, type: `module` }, t)),
            (t = hf.get(i)) && Bf(e, t),
            (a = n.createElement(`script`)),
            wt(a),
            Fd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a))
      }
    }
    function Af(e, t, n, r) {
      var a = (a = fe.current) ? _f(a) : null
      if (!a) throw Error(i(446))
      switch (e) {
        case `meta`:
        case `title`:
          return null
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = jf(n.href)),
              (n = Ct(a).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null }
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = jf(n.href)
            var o = Ct(a).hoistableStyles,
              s = o.get(e)
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Mf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                hf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  hf.set(e, n),
                  o || Pf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``))
            return s
          }
          if (t && r !== null) throw Error(i(529, ``))
          return null
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Ff(n)),
                (n = Ct(a).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          )
        default:
          throw Error(i(444, e))
      }
    }
    function jf(e) {
      return `href="` + Ut(e) + `"`
    }
    function Mf(e) {
      return `link[rel="stylesheet"][` + e + `]`
    }
    function Nf(e) {
      return p({}, e, { "data-precedence": e.precedence, precedence: null })
    }
    function Pf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1)
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2)
          }),
          Fd(t, `link`, n),
          wt(t),
          e.head.appendChild(t))
    }
    function Ff(e) {
      return `[src="` + Ut(e) + `"]`
    }
    function If(e) {
      return `script[async]` + e
    }
    function Lf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ut(n.href) + `"]`)
            if (r) return ((t.instance = r), wt(r), r)
            var a = p({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            })
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              wt(r),
              Fd(r, `style`, a),
              Rf(r, n.precedence, e),
              (t.instance = r)
            )
          case `stylesheet`:
            a = jf(n.href)
            var o = e.querySelector(Mf(a))
            if (o) return ((t.state.loading |= 4), (t.instance = o), wt(o), o)
            ;((r = Nf(n)),
              (a = hf.get(a)) && zf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              wt(o))
            var s = o
            return (
              (s._p = new Promise(function (e, t) {
                ;((s.onload = e), (s.onerror = t))
              })),
              Fd(o, `link`, r),
              (t.state.loading |= 4),
              Rf(o, n.precedence, e),
              (t.instance = o)
            )
          case `script`:
            return (
              (o = Ff(n.src)),
              (a = e.querySelector(If(o)))
                ? ((t.instance = a), wt(a), a)
                : ((r = n),
                  (a = hf.get(o)) && ((r = p({}, n)), Bf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  wt(a),
                  Fd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            )
          case `void`:
            return null
          default:
            throw Error(i(443, t.type))
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Rf(r, n.precedence, e))
      return t.instance
    }
    function Rf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o]
        if (s.dataset.precedence === t) a = s
        else if (a !== i) break
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild))
    }
    function zf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title))
    }
    function Bf(e, t) {
      ;((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity))
    }
    var Vf = null
    function Hf(e, t, n) {
      if (Vf === null) {
        var r = new Map(),
          i = (Vf = new Map())
        i.set(n, r)
      } else ((i = Vf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)))
      if (r.has(e)) return r
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i]
        if (
          !(
            a[vt] ||
            a[dt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``
          o = e + o
          var s = r.get(o)
          s ? s.push(a) : r.set(o, [a])
        }
      }
      return r
    }
    function Uf(e, t, n) {
      ;((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ))
    }
    function Wf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1
      switch (e) {
        case `meta`:
        case `title`:
          return !0
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break
          return !0
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              )
            default:
              return !0
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0
      }
      return !1
    }
    function Gf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3))
    }
    function Kf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = jf(r.href),
            a = t.querySelector(Mf(i))
          if (a) {
            ;((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Yf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              wt(a))
            return
          }
          ;((a = t.ownerDocument || t),
            (r = Nf(r)),
            (i = hf.get(i)) && zf(r, i),
            (a = a.createElement(`link`)),
            wt(a))
          var o = a
          ;((o._p = new Promise(function (e, t) {
            ;((o.onload = e), (o.onerror = t))
          })),
            Fd(a, `link`, r),
            (n.instance = a))
        }
        ;(e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Yf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)))
      }
    }
    var qf = 0
    function Jf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Zf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend
                  ;((e.unsuspend = null), t())
                }
              }, 6e4 + t)
              0 < e.imgBytes && qf === 0 && (qf = 62500 * Rd())
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend
                    ;((e.unsuspend = null), t())
                  }
                },
                (e.imgBytes > qf ? 50 : 800) + t,
              )
              return (
                (e.unsuspend = n),
                function () {
                  ;((e.unsuspend = null), clearTimeout(r), clearTimeout(i))
                }
              )
            }
          : null
      )
    }
    function Yf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Zf(this, this.stylesheets)
        else if (this.unsuspend) {
          var e = this.unsuspend
          ;((this.unsuspend = null), e())
        }
      }
    }
    var Xf = null
    function Zf(e, t) {
      ;((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Xf = new Map()),
          t.forEach(Qf, e),
          (Xf = null),
          Yf.call(e)))
    }
    function Qf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Xf.get(e)
        if (n) var r = n.get(null)
        else {
          ;((n = new Map()), Xf.set(e, n))
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a]
            ;(o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o))
          }
          r && n.set(null, r)
        }
        ;((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Yf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4))
      }
    }
    var $f = {
      $$typeof: x,
      Provider: null,
      Consumer: null,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
    }
    function ep(e, t, n, r, i, a, o, s, c) {
      ;((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = et(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = et(0)),
        (this.hiddenUpdates = et(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()))
    }
    function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ep(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = fi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = la()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ha(a),
        e
      )
    }
    function np(e) {
      return e ? ((e = ui), e) : ui
    }
    function rp(e, t, n, r, i, a) {
      ;((i = np(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Wa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ga(e, r, t)),
        n !== null && (gu(n, e, t), Ka(n, e, t)))
    }
    function ip(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
      }
    }
    function ap(e, t) {
      ;(ip(e, t), (e = e.alternate) && ip(e, t))
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = si(e, 67108864)
        ;(t !== null && gu(t, e, 67108864), ap(e, 67108864))
      }
    }
    function sp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = mu()
        t = ot(t)
        var n = si(e, t)
        ;(n !== null && gu(n, e, t), ap(e, t))
      }
    }
    var cp = !0
    function lp(e, t, n, r) {
      var i = k.T
      k.T = null
      var a = A.p
      try {
        ;((A.p = 2), dp(e, t, n, r))
      } finally {
        ;((A.p = a), (k.T = i))
      }
    }
    function up(e, t, n, r) {
      var i = k.T
      k.T = null
      var a = A.p
      try {
        ;((A.p = 8), dp(e, t, n, r))
      } finally {
        ;((A.p = a), (k.T = i))
      }
    }
    function dp(e, t, n, r) {
      if (cp) {
        var i = fp(r)
        if (i === null) (Td(e, t, r, pp, n), wp(e, r))
        else if (Ep(i, e, t, n, r)) r.stopPropagation()
        else if ((wp(e, r), t & 4 && -1 < Cp.indexOf(e))) {
          for (; i !== null;) {
            var a = xt(i)
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ye(a.pendingLanes)
                    if (o !== 0) {
                      var s = a
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - He(o))
                        ;((s.entanglements[1] |= c), (o &= ~c))
                      }
                      ;(id(a), !(G & 6) && ((nu = N() + 500), ad(0, !1)))
                    }
                  }
                  break
                case 31:
                case 13:
                  ;((s = si(a, 2)), s !== null && gu(s, a, 2), xu(), ap(a, 2))
              }
            if (((a = fp(r)), a === null && Td(e, t, r, pp, n), a === i)) break
            i = a
          }
          i !== null && r.stopPropagation()
        } else Td(e, t, r, null, n)
      }
    }
    function fp(e) {
      return ((e = sn(e)), mp(e))
    }
    var pp = null
    function mp(e) {
      if (((pp = null), (e = bt(e)), e !== null)) {
        var t = o(e)
        if (t === null) e = null
        else {
          var n = t.tag
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e
            e = null
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e
            e = null
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
          } else t !== e && (e = null)
        }
      }
      return ((pp = e), null)
    }
    function hp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8
        case `message`:
          switch (Ae()) {
            case je:
              return 2
            case Me:
              return 8
            case Ne:
            case Pe:
              return 32
            case Fe:
              return 268435456
            default:
              return 32
          }
        default:
          return 32
      }
    }
    var gp = !1,
      _p = null,
      vp = null,
      yp = null,
      bp = new Map(),
      xp = new Map(),
      Sp = [],
      Cp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        )
    function wp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          _p = null
          break
        case `dragenter`:
        case `dragleave`:
          vp = null
          break
        case `mouseover`:
        case `mouseout`:
          yp = null
          break
        case `pointerover`:
        case `pointerout`:
          bp.delete(t.pointerId)
          break
        case `gotpointercapture`:
        case `lostpointercapture`:
          xp.delete(t.pointerId)
      }
    }
    function Tp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = xt(t)), t !== null && op(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e)
    }
    function Ep(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((_p = Tp(_p, e, t, n, r, i)), !0)
        case `dragenter`:
          return ((vp = Tp(vp, e, t, n, r, i)), !0)
        case `mouseover`:
          return ((yp = Tp(yp, e, t, n, r, i)), !0)
        case `pointerover`:
          var a = i.pointerId
          return (bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0)
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)),
            !0
          )
      }
      return !1
    }
    function Dp(e) {
      var t = bt(e.target)
      if (t !== null) {
        var n = o(t)
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ;((e.blockedOn = t),
                lt(e.priority, function () {
                  sp(n)
                }))
              return
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ;((e.blockedOn = t),
                lt(e.priority, function () {
                  sp(n)
                }))
              return
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
            return
          }
        }
      }
      e.blockedOn = null
    }
    function Op(e) {
      if (e.blockedOn !== null) return !1
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = fp(e.nativeEvent)
        if (n === null) {
          n = e.nativeEvent
          var r = new n.constructor(n.type, n)
          ;((on = r), n.target.dispatchEvent(r), (on = null))
        } else return ((t = xt(n)), t !== null && op(t), (e.blockedOn = n), !1)
        t.shift()
      }
      return !0
    }
    function kp(e, t, n) {
      Op(e) && n.delete(t)
    }
    function Ap() {
      ;((gp = !1),
        _p !== null && Op(_p) && (_p = null),
        vp !== null && Op(vp) && (vp = null),
        yp !== null && Op(yp) && (yp = null),
        bp.forEach(kp),
        xp.forEach(kp))
    }
    function jp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        gp ||
          ((gp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)))
    }
    var Mp = null
    function Np(e) {
      Mp !== e &&
        ((Mp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Mp === e && (Mp = null)
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2]
            if (typeof r != `function`) {
              if (mp(r || n) === null) continue
              break
            }
            var a = xt(n)
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Es(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ))
          }
        }))
    }
    function Pp(e) {
      function t(t) {
        return jp(t, e)
      }
      ;(_p !== null && jp(_p, e),
        vp !== null && jp(vp, e),
        yp !== null && jp(yp, e),
        bp.forEach(t),
        xp.forEach(t))
      for (var n = 0; n < Sp.length; n++) {
        var r = Sp[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
      for (; 0 < Sp.length && ((n = Sp[0]), n.blockedOn === null);)
        (Dp(n), n.blockedOn === null && Sp.shift())
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ft] || null
          if (typeof a == `function`) o || Np(n)
          else if (o) {
            var s = null
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ft] || null))) s = o.formAction
              else if (mp(i) !== null) continue
            } else s = o.action
            ;(typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Np(n))
          }
        }
    }
    function Fp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e)
              })
            },
            focusReset: `manual`,
            scroll: `manual`,
          })
      }
      function t() {
        ;(i !== null && (i(), (i = null)), r || setTimeout(n, 20))
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            })
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ;((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)))
          }
        )
      }
    }
    function Ip(e) {
      this._internalRoot = e
    }
    ;((Lp.prototype.render = Ip.prototype.render =
      function (e) {
        var t = this._internalRoot
        if (t === null) throw Error(i(409))
        var n = t.current
        rp(n, mu(), e, t, null, null)
      }),
      (Lp.prototype.unmount = Ip.prototype.unmount =
        function () {
          var e = this._internalRoot
          if (e !== null) {
            this._internalRoot = null
            var t = e.containerInfo
            ;(rp(e.current, 2, null, e, null, null), xu(), (t[pt] = null))
          }
        }))
    function Lp(e) {
      this._internalRoot = e
    }
    Lp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = ct()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++);
        ;(Sp.splice(n, 0, e), n === 0 && Dp(e))
      }
    }
    var Rp = n.version
    if (Rp !== `19.2.8`) throw Error(i(527, Rp, `19.2.8`))
    A.findDOMNode = function (e) {
      var t = e._reactInternals
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)))
      return (
        (e = d(t)),
        (e = e === null ? null : f(e)),
        (e = e === null ? null : e.stateNode),
        e
      )
    }
    var zp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: k,
      reconcilerVersion: `19.2.8`,
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__
      if (!Bp.isDisabled && Bp.supportsFiber)
        try {
          ;((Re = Bp.inject(zp)), (Be = Bp))
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299))
      var r = !1,
        o = ``,
        s = Ys,
        c = Xs,
        l = Zs,
        u = null
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = tp(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Fp)),
        (t.context = np(null)),
        (n = t.current),
        (r = mu()),
        (r = ot(r)),
        (o = Wa(r)),
        (o.callback = null),
        Ga(n, o, r),
        (n = r),
        (t.current.lanes = n),
        tt(t, n),
        id(t),
        (e[pt] = t.current),
        Cd(e),
        new Lp(t)
      )
    }
  }),
  Ve = i((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (e) {
          console.error(e)
        }
    }
    ;(n(), (t.exports = Be()))
  }),
  He = `__TSS_CONTEXT`,
  Ue = Symbol.for(`TSS_SERVER_FUNCTION`),
  We = `application/x-tss-framed`
;`${We}`
var Ge = () => window.__TSS_START_OPTIONS__
function Ke(e) {
  return e
    .replaceAll(`\0`, `/`)
    .replaceAll(`�`, `/`)
    .replace(/~([~0r])/g, (e, t) => (t === `0` ? `\0` : t === `r` ? `�` : t))
}
function qe(e) {
  let t = new Map(),
    n,
    r
  return {
    get(e) {
      let n = t.get(e)
      if (n) return ((n.visited = !0), n.value)
    },
    set(i, a) {
      let o = t.get(i)
      if (o) {
        o.value = a
        return
      }
      if (t.size >= e) {
        let e = n?.next().value
        for (; !e || e.visited;)
          (e ? (e.visited = !1) : (n = t.values()), (e = n.next().value))
        ;(e === r && (n = void 0), t.delete(e.key))
      }
      let s = { key: i, value: a, visited: !1 }
      ;((r = s), t.set(i, s))
    },
    clear() {
      ;(t.clear(), (n = void 0), (r = void 0))
    },
  }
}
var Je = 4,
  Ye = 5
function Xe(e) {
  let t = e.names
  if (t) return t
  let n = []
  for (let t of e) typeof t != `string` && n.push(t[1])
  return (e.names = n)
}
function Ze(e, t, n) {
  let r = e.substring(t, n)
  if (r.charCodeAt(0) === 36)
    return r.length === 1
      ? [2, `_splat`, ``, void 0]
      : [1, r.substring(1), ``, ``]
  let i = r.indexOf(`{`)
  if (i >= 0) {
    let a = r.indexOf(`}`, i),
      o = r.charCodeAt(i + 1) === 45,
      s = i + (o ? 3 : 2)
    if (a >= 0 && r.charCodeAt(s - 1) === 36 && (!o || s < a)) {
      let c = r.substring(s, a)
      return [
        o ? 3 : c ? 1 : 2,
        c || `_splat`,
        r.substring(0, i),
        e.substring(t + a + 1, c ? n : e.length),
      ]
    }
  }
  return r
}
function Qe(t, n, r, i, a, o) {
  let s = r,
    c = n.fullPath ?? n.from,
    l = n.options,
    u = c.length,
    d = c.endsWith(`/`) ? u - 1 : u,
    f = l?.caseSensitive ?? t,
    p = l?.params?.parse ?? l?.parseParams,
    m,
    h = o ? r - 1 : 0
  if (!i || c.includes(`$`)) {
    m = o?.slice() ?? []
    let t = e(m)
    t &&
      typeof t != `string` &&
      t[0] === 2 &&
      ((m[m.length - 1] = [
        t[0],
        t[1],
        t[2],
        t[3] === void 0
          ? void 0
          : t[3] + c.substring(r - (c[r - 2] === `/` ? 2 : 1), d),
      ]),
      (h = u))
  }
  for (; s < u;) {
    let e = s,
      t = c.indexOf(`/`, e),
      n = t === -1 ? u : t,
      r = Ze(c, e, n)
    s = n + 1
    let o
    if (typeof r == `string`) {
      if (!i) continue
      let e = r,
        t
      f
        ? (t = i.static ??= new Map())
        : ((e = r.toLowerCase()), (t = i.staticInsensitive ??= new Map()))
      let n = t.get(e)
      if (n) o = n
      else {
        let n = et(i)
        ;((o = n), t.set(e, n))
      }
    } else {
      let t = r[0],
        l = r[2],
        g = r[3] ?? ``
      if (
        (t === 2 && ((n = u), (s = n + 1)),
        m &&
          h < n &&
          (h < e - 1 && m.push(c.substring(h, e - 1)),
          (r[2] = `/` + l),
          t === 2 && r[3] !== void 0 && d < u && (r[3] = g.slice(0, -1)),
          m.push(r),
          (h = n)),
        !i)
      )
        continue
      let _ = f && !!(l || g)
      f || ((l = l.toLowerCase()), (g = g.toLowerCase()))
      let v =
          t === 1
            ? (i.dynamic ??= [])
            : t === 3
              ? (i.optional ??= [])
              : (i.wildcard ??= []),
        y =
          t !== 2 &&
          !p &&
          v.find(
            (e) =>
              !e.parse &&
              e.caseSensitive === _ &&
              e.prefix === l &&
              e.suffix === g,
          )
      if (y) o = y
      else {
        let e = et(i, t, _, l, g)
        ;((o = e), v.push(e), v.length === 2 && a?.push(v))
      }
    }
    i = o
  }
  m && h < d && m.push(c.substring(h, d))
  let g = m?.slice()
  if (!i) return g
  if (
    p &&
    n.children &&
    !n.isRoot &&
    n.id &&
    n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95
  ) {
    let e = et(i, Ye)
    ;((i.pathless ??= []).push(e), (i = e))
  }
  let _ = (n.path || !n.children) && !n.isRoot
  if (_ && d < u) {
    let e = et(i, Je)
    ;((i.index = e), (i = e))
  }
  return (
    (i.parse = p ?? null),
    (i.priority = l?.params?.priority ?? 0),
    i.route || ((i.data = g), _ && (i.route = n)),
    [i, s, g]
  )
}
function $e(e, t) {
  if (e.parse && !t.parse) return -1
  if (!e.parse && t.parse) return 1
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1
    if (t.prefix.startsWith(e.prefix)) return 1
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1
    if (t.suffix.endsWith(e.suffix)) return 1
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0
}
function et(e, t = 0, n, r, i) {
  return {
    kind: t,
    depth: e ? e.depth + 1 : 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    data: void 0,
    parent: e,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  }
}
function tt(e, t) {
  let n = et(),
    r = []
  function i(e, t, n, a) {
    let [o, s, c] = Qe(!1, e, t, n, r, a)
    if (e.children) for (let t of e.children) i(t, s, o, c)
  }
  for (let t of e) i(t, 1, n)
  for (let e of r) e.sort($e)
  ;((t.masksTree = n), (t.flatCache = qe(1e3)))
}
function nt(e, t) {
  e ||= `/`
  let n = t.flatCache.get(e)
  if (n !== void 0) return n
  let r = ot(e, t.masksTree)
  return (t.flatCache.set(e, r), r)
}
function rt(e, t, n, r, i) {
  ;((e ||= `/`), (r ||= `/`))
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a)
  return (
    o || ((o = et()), Qe(t, { from: e }, 1, o), i.singleCache.set(a, o)),
    ot(r, o, n)
  )
}
function it(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r)
  if (i !== void 0) return i
  e ||= `/`
  let a
  try {
    a = ot(e, t.segmentTree, n)
  } catch (e) {
    if (e instanceof URIError) a = null
    else throw e
  }
  return (a && (a.branch = ct(a.route)), t.matchCache.set(r, a), a)
}
function at(e, t = !1) {
  let n = et(),
    r = [],
    i = {},
    a = {},
    o = 0
  function s(e, n, c, l) {
    if ((e.init(o), e.id in i && ve(), (i[e.id] = e), o !== 0 && e.path)) {
      let t = v(e.fullPath)
      ;(!a[t] || e.fullPath.endsWith(`/`)) && (a[t] = e)
    }
    o++
    let [u, d, f] = Qe(t, e, n, c, r, l)
    if (((e._interpolation = f), e.children))
      for (let t of e.children) s(t, d, u, f)
  }
  s(e, 1, n)
  for (let e of r) e.sort($e)
  return {
    processedTree: {
      segmentTree: n,
      singleCache: qe(1e3),
      matchCache: qe(1e3),
      flatCache: null,
      masksTree: null,
    },
    routesById: i,
    routesByPath: a,
  }
}
function ot(e, t, n = !1) {
  let r = e.split(`/`),
    i = ut(e, r, t, n)
  if (!i) return null
  let [a] = st(e, r, i)
  return { route: i.node.route, rawParams: a }
}
function st(e, t, n) {
  let r = lt(n.node),
    i = n.node.data && Xe(n.node.data),
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.param ?? 0
  for (; s < r.length; o++, s++, c++) {
    let u = r[s]
    if (u.kind === Je) break
    if (u.kind === Ye) {
      ;(o--, c--)
      continue
    }
    let d = t[o],
      f = c
    if ((d && (c += d.length), u.kind === 1 || u.kind === 3)) {
      let e = i[l++]
      if (u.kind === 3 && n.skipped & (1 << s)) {
        ;(o--, (c = f - 1))
        continue
      }
      let t =
        u.suffix || u.prefix
          ? d.substring(u.prefix.length, d.length - u.suffix.length)
          : d
      ;(t || u.kind === 1) && (a[e] = decodeURIComponent(t))
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(f + t.prefix.length, e.length - t.suffix.length),
        r = decodeURIComponent(n)
      ;((a[`*`] = r), (a._splat = r))
      break
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, param: l }]
  )
}
function ct(e) {
  let t = [e]
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e))
  return (t.reverse(), t)
}
function lt(e) {
  let t = Array(e.depth + 1)
  do ((t[e.depth] = e), (e = e.parent))
  while (e)
  return t
}
function ut(t, n, r, i) {
  if (t === `/` && r.index) return { node: r.index, skipped: 0 }
  let a = !e(n),
    o = a && t !== `/`,
    s = n.length - +!!a,
    c = [
      { node: r, index: 1, skipped: 0, statics: 0, dynamics: 0, optionals: 0 },
    ],
    l = null,
    u = null
  for (; c.length;) {
    let e = c.pop(),
      {
        node: r,
        index: a,
        skipped: d,
        statics: f,
        dynamics: p,
        optionals: m,
      } = e,
      { extract: h, rawParams: g } = e
    if (r.kind === 2 && r.route && !mt(u, e)) continue
    if (r.parse) {
      if (!pt(t, n, e)) continue
      ;((g = e.rawParams), (h = e.extract))
    }
    i && r.route && r.kind !== Je && mt(l, e) && (l = e)
    let _ = a === s
    if (
      _ &&
      (r.route && (!o || r.kind === Je || r.kind === 2) && mt(u, e) && (u = e),
      !r.optional && !r.wildcard && !r.index && !r.pathless)
    )
      continue
    let v = _ ? void 0 : n[a],
      y
    if (_ && r.index) {
      let e = {
          node: r.index,
          index: a,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        },
        i = !0
      if ((r.index.parse && (pt(t, n, e) || (i = !1)), i)) {
        if (!p && !m && !d && ft(f, s)) return e
        mt(u, e) && (u = e)
      }
    }
    if (r.wildcard)
      for (let e = r.wildcard.length - 1; e >= 0; e--) {
        let t = r.wildcard[e],
          { prefix: i, suffix: o } = t
        if (!(
          i &&
          (_ || !(t.caseSensitive ? v : (y ??= v.toLowerCase())).startsWith(i))
        )) {
          if (o) {
            if (_) continue
            let e = n.slice(a).join(`/`),
              r = e.slice(-o.length)
            if (
              (t.caseSensitive ? r : r.toLowerCase()) !== o ||
              e.length - o.length < i.length
            )
              continue
          }
          c.push({
            node: t,
            index: s,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m,
            extract: h,
            rawParams: g,
          })
        }
      }
    if (r.optional) {
      let e = d | (1 << (r.depth + 1))
      for (let t = r.optional.length - 1; t >= 0; t--) {
        let n = r.optional[t]
        c.push({
          node: n,
          index: a,
          skipped: e,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        })
      }
      if (!_)
        for (let e = r.optional.length - 1; e >= 0; e--) {
          let t = r.optional[e],
            { prefix: n, suffix: i } = t
          if (n || i) {
            let e = t.caseSensitive ? v : (y ??= v.toLowerCase())
            if (
              (n && !e.startsWith(n)) ||
              (i && e.indexOf(i, e.length - i.length) < n.length)
            )
              continue
          }
          c.push({
            node: t,
            index: a + 1,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m + dt(s, a),
            extract: h,
            rawParams: g,
          })
        }
    }
    if (!_ && r.dynamic && v)
      for (let e = r.dynamic.length - 1; e >= 0; e--) {
        let t = r.dynamic[e],
          { prefix: n, suffix: i } = t
        if (n || i) {
          let e = t.caseSensitive ? v : (y ??= v.toLowerCase())
          if (
            (n && !e.startsWith(n)) ||
            (i && e.indexOf(i, e.length - i.length) < n.length)
          )
            continue
        }
        c.push({
          node: t,
          index: a + 1,
          skipped: d,
          statics: f,
          dynamics: p + dt(s, a),
          optionals: m,
          extract: h,
          rawParams: g,
        })
      }
    if (!_ && r.staticInsensitive) {
      let e = r.staticInsensitive.get((y ??= v.toLowerCase()))
      e &&
        c.push({
          node: e,
          index: a + 1,
          skipped: d,
          statics: f + dt(s, a),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        })
    }
    if (!_ && r.static) {
      let e = r.static.get(v)
      e &&
        c.push({
          node: e,
          index: a + 1,
          skipped: d,
          statics: f + dt(s, a),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        })
    }
    if (r.pathless)
      for (let e = r.pathless.length - 1; e >= 0; e--) {
        let t = r.pathless[e]
        c.push({
          node: t,
          index: a,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        })
      }
  }
  if (u) return u
  if (i && l) {
    let e = l.index
    for (let t = 0; t < l.index; t++) e += n[t].length
    let r = e === t.length ? `/` : t.slice(e)
    return (
      (l.rawParams ??= Object.create(null)),
      (l.rawParams[`**`] = decodeURIComponent(r)),
      l
    )
  }
  return null
}
function dt(e, t) {
  return 2 ** (e - t - 1)
}
function ft(e, t) {
  return e === 2 ** (t - 1) - 1
}
function pt(e, t, n) {
  let r, i
  try {
    ;[r, i] = st(e, t, n)
  } catch {
    return null
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0
  try {
    if (n.node.parse(r) === !1) return null
  } catch {}
  return !0
}
function mt(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === Je) > (e.node.kind === Je) ||
                ((t.node.kind === Je) == (e.node.kind === Je) &&
                  t.node.depth > e.node.depth)))))))
  )
}
function ht() {
  try {
    return sessionStorage
  } catch {
    return
  }
}
var gt = `tsr-scroll-restoration-v1_3`,
  _t = ht()
function vt() {
  try {
    return JSON.parse(_t?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`)
  } catch {
    return {}
  }
}
var yt = vt(),
  bt = `data-scroll-restoration-id`,
  xt = (e) => e.state.__TSR_key || e.href
function St(e) {
  let t = e.getAttribute(bt)
  if (t) return `[${bt}="${t}"]`
  let n = ``,
    r = e,
    i
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r
    for (; (t = t.previousElementSibling);) e++
    let a = `${r.localName}:nth-child(${e})`
    ;((n = n ? `${a} > ${n}` : a), (r = i))
  }
  return n
}
var Ct = !1,
  wt = `window`
function Tt(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e)
  } catch {}
}
function Et(e) {
  let t = new Set()
  for (let n of e) {
    if (n === wt) continue
    let e = Tt(n)
    e && t.add(e)
  }
  return t
}
function Dt(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll
  n && (r.e = !0)
  let i = e.options.getScrollRestorationKey || xt,
    a = new Set(),
    o = (e) => {
      let t = (yt[e] ||= {})
      for (let e of a)
        e === document
          ? (t[wt] = { scrollX, scrollY })
          : e.isConnected &&
            (t[St(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop })
    }
  ;(n &&
    !r.s &&
    ((r.s = !0),
    (Ct = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        Ct || a.add(e.target)
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      ;(e.fromLocation && o(i(e.fromLocation)), a.clear())
    }),
    addEventListener(`pagehide`, () => {
      ;((history.scrollRestoration = `auto`),
        o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())))
      try {
        _t?.setItem(gt, JSON.stringify(yt))
      } catch {}
    }),
    addEventListener(`pageshow`, (e) => {
      e.persisted && (history.scrollRestoration = `manual`)
    })),
    !r.r &&
      ((r.r = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.n,
          c = r.h,
          l
        if (
          (a.clear(),
          (r.n = !0),
          (r.h = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation)
        if (r.e && d && d !== u) {
          let e = yt[d]
          if (e) {
            let t = yt[u]
            for (let n in e) {
              if (n === wt) {
                if (s) continue
              } else {
                let e = Tt(n)
                if (!e || (s && o && ((l ??= Et(o)), l.has(e)))) continue
              }
              ;((t ||= yt[u] = {}), (t[n] ??= e[n]))
            }
          }
        }
        Ct = !0
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1
          if (s) {
            !e && o && (l ??= Et(o))
            let t = e && i && c,
              s = r.e ? yt[u] : void 0
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e]
                if (e === wt) {
                  if (t) continue
                  ;(scrollTo({ top: i, left: r, behavior: n }), (a = !0))
                } else {
                  let t = Tt(e)
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t))
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n }
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e)
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i)
        } finally {
          Ct = !1
        }
      })))
}
function Ot(e, t = String) {
  let n
  for (let r in e) {
    let i = e[r]
    i !== void 0 && (n ||= new URLSearchParams()).set(r, t(i))
  }
  return n ? n.toString() : ``
}
function kt(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``
}
function At(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null)
  for (let [e, r] of t.entries()) {
    let t = n[e]
    t == null
      ? (n[e] = kt(r))
      : Array.isArray(t)
        ? t.push(kt(r))
        : (n[e] = [t, kt(r)])
  }
  return n
}
var jt = /^(?:\s|["[{\d-]|fa|nu|tr)/,
  Mt = Pt(JSON.parse),
  Nt = Ft(JSON.stringify, JSON.parse)
function Pt(e) {
  let t = e === JSON.parse
  return (n) => {
    n[0] === `?` && (n = n.substring(1))
    let r = At(n)
    for (let n in r) {
      let i = r[n]
      if (typeof i == `string`) {
        if (t && !jt.test(i)) continue
        try {
          r[n] = e(i)
        } catch {}
      }
    }
    return r
  }
}
function Ft(e, t) {
  let n = t === JSON.parse
  function r(r) {
    if (r && typeof r == `object`)
      try {
        return e(r)
      } catch {}
    else if (t && typeof r == `string`) {
      if (n && !jt.test(r)) return r
      try {
        return (t(r), e(r))
      } catch {}
    }
    return r
  }
  return (e) => {
    let t = Ot(e, r)
    return t ? `?${t}` : ``
  }
}
function It(e, t, n) {
  let r = S(e),
    i = `/${r}`,
    a = t ? i : i.toLowerCase(),
    o = `${a}/`,
    s = {
      input: ({ url: e }) => {
        let n = t ? e.pathname : e.pathname.toLowerCase()
        return (
          n === a
            ? (e.pathname = `/`)
            : n.startsWith(o) && (e.pathname = e.pathname.slice(i.length)),
          e
        )
      },
      output: ({ url: e }) => ((e.pathname = ee(`/${r}${e.pathname}`)), e),
    }
  return n
    ? {
        input: ({ url: e }) => Lt(n, s.input({ url: e })),
        output: ({ url: e }) => s.output({ url: Rt(n, e) }),
      }
    : s
}
function Lt(e, t) {
  let n = e?.input?.({ url: t })
  if (n) {
    if (typeof n == `string`) return new URL(n)
    if (n instanceof URL) return n
  }
  return t
}
function Rt(e, t) {
  let n = e?.output?.({ url: t })
  if (n) {
    if (typeof n == `string`) return new URL(n)
    if (n instanceof URL) return n
  }
  return t
}
function zt(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i } = t,
    a = new Map(),
    o = n(`idle`),
    s = n(e),
    c = n(void 0),
    l = n([]),
    u = r(() => l.get().map((e) => a.get(e).get())),
    d = r(() => ({
      status: o.get(),
      isLoading: o.get() === `pending`,
      matches: u.get(),
      location: s.get(),
      resolvedLocation: c.get(),
    }))
  function f(e) {
    let t = a.get(e)
    return (t || ((t = n(void 0)), a.set(e, t)), t)
  }
  let p = {
    status: o,
    location: s,
    resolvedLocation: c,
    ids: l,
    matches: u,
    byRoute: a,
    __store: d,
    getMatchStore: f,
    setMatches: m,
  }
  function m(e) {
    let t = l.get(),
      n = e.map((e) => e.routeId)
    i(() => {
      O(t, n) || l.set(n)
      for (let e of t) n.includes(e) || a.get(e).set(() => void 0)
      for (let t of e) {
        let e = f(t.routeId)
        e.get() !== t && e.set(t)
      }
    })
  }
  return p
}
var Bt = `__TSR_index`,
  Vt = `popstate`,
  Ht = `beforeunload`,
  Ut = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/
function Wt(e) {
  let t = Ut.exec(e)
  return t ? `/` + e.slice(t[0].length) : e
}
function Gt(e) {
  return (
    /[\x00-\x1f\x7f]/.test(e) &&
      (e = e.replace(/[\x00-\x1f\x7f]/g, (e) =>
        `	
\r`.includes(e)
          ? ``
          : encodeURIComponent(e),
      )),
    Wt(e)
  )
}
function Kt(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ;((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })))
    },
    i = (n) => {
      ;(e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation())
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n()
        return
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = Yt(i.path, i.state)
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.()
            return
          }
        }
      n()
    }
  return {
    get location() {
      return t
    },
    get length() {
      return e.getLength()
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e)
      }
    ),
    push: (n, i, o) => {
      let s = t.state[Bt]
      ;((i = qt(s + 1, i)),
        a({
          task: () => {
            ;(e.pushState(n, i), r({ type: `PUSH` }))
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }))
    },
    replace: (n, i, o) => {
      let s = t.state[Bt]
      ;((i = qt(s, i)),
        a({
          task: () => {
            ;(e.replaceState(n, i), r({ type: `REPLACE` }))
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }))
    },
    go: (t, n) => {
      a({
        task: () => {
          ;(e.go(t, n?.ignoreBlocker ?? !1), i({ type: `GO`, index: t }))
        },
        navigateOpts: n,
        type: `GO`,
      })
    },
    back: (t) => {
      a({
        task: () => {
          ;(e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }))
        },
        navigateOpts: t,
        type: `BACK`,
      })
    },
    forward: (t) => {
      a({
        task: () => {
          ;(e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }))
        },
        navigateOpts: t,
        type: `FORWARD`,
      })
    },
    canGoBack: () => t.state[Bt] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {}
      let n = e.getBlockers?.() ?? []
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? []
          e.setBlockers?.(n.filter((e) => e !== t))
        }
      )
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
    _getBlockers: () => e.getBlockers?.() ?? [],
  }
}
function qt(e, t) {
  let n = Xt()
  return { ...t, key: n, __TSR_key: n, [Bt]: e }
}
function Jt(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = (t) => Gt(e?.createHref ? e.createHref(t) : t),
    c =
      e?.parseLocation ??
      (() =>
        Yt(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state,
        ))
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = Xt()
    t.history.replaceState({ [Bt]: 0, key: e, __TSR_key: e }, ``)
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _ = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (u = void 0))
    },
    v = (t, n, r) => {
      let i = e?.createHref ? s(n) : void 0,
        a = !!g
      ;(a || (u = l),
        (l = Yt(n, r)),
        (g = [i ?? l.href, r, g?.[2] || t]),
        a || queueMicrotask(() => _()))
    },
    y = (e) => {
      ;((l = c()), S.notify({ type: e }))
    },
    b = async () => {
      if (((m = !1), f)) {
        f = !1
        return
      }
      let e = c(),
        n = e.state[Bt] - l.state[Bt],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d
      d = !1
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` }
      if (p) p = !1
      else {
        let r = a()
        if (typeof document < `u` && r.length) {
          for (let i of r)
            if (
              await i.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ;((f = !0), t.history.go(-n), S.notify(u))
              return
            }
        }
      }
      ;((l = c()), S.notify(u))
    },
    x = (e) => {
      if (m) {
        m = !1
        return
      }
      let t = !1,
        n = a()
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0
          if (n === !0) {
            t = !0
            break
          }
          if (typeof n == `function` && n() === !0) {
            t = !0
            break
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``))
    },
    S = Kt({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => v(!0, e, t),
      replaceState: (e, t) => v(!1, e, t),
      back: (e) => (e && ((p = !0), (m = !0)), t.history.back()),
      forward: (e) => {
        ;(e && ((p = !0), (m = !0)), t.history.forward())
      },
      go: (e, n) => {
        ;((d = !0), n && ((p = !0), (m = !0)), t.history.go(e))
      },
      createHref: (e) => s(e),
      flush: _,
      destroy: () => {
        ;((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(Ht, x, { capture: !0 }),
          t.removeEventListener(Vt, b))
      },
      onBlocked: () => {
        u && l !== u && (l = u)
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    })
  return (
    (S._ignoreNextBeforeUnload = (e) => {
      m = !1
      try {
        ;((e = new URL(e, t.document.baseURI).href),
          (m =
            /^https?:/.test(e) &&
            (!e.includes(`#`) ||
              e.split(`#`)[0] !== t.location.href.split(`#`)[0])))
      } catch {}
    }),
    t.addEventListener(Ht, x, { capture: !0 }),
    t.addEventListener(Vt, b),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e)
      return (S._ignoreSubscribers || y(`PUSH`), r)
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e)
      return (S._ignoreSubscribers || y(`REPLACE`), n)
    }),
    S
  )
}
function Yt(e, t) {
  let n = Gt(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`)
  if (!t) {
    let e = Xt()
    t = { [Bt]: 0, key: e, __TSR_key: e }
  }
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length,
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t,
  }
}
function Xt() {
  return (Math.random() + 1).toString(36).substring(7)
}
function Zt(e, t) {
  return (
    (e.protocol !== `http:` && e.protocol !== `https:`) ||
    e.origin !== t ||
    !!e.username ||
    !!e.password
  )
}
function Qt(e) {
  return e.pathname + e.search + e.hash
}
function $t(e) {
  return (
    e.options.loader ||
    e.options.beforeLoad ||
    e.lazyFn ||
    e.options.component?.preload ||
    e.options.pendingComponent?.preload
  )
}
function en(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e }
}
function tn(e, t) {
  return {
    fromLocation: t,
    toLocation: e,
    pathChanged: t?.pathname !== e.pathname,
    hrefChanged: t?.href !== e.href,
    hashChanged: t?.hash !== e.hash,
  }
}
function nn({
  key: e,
  __TSR_key: t,
  __TSR_index: n,
  __hashScrollIntoViewOptions: r,
  ...i
}) {
  return i
}
function rn(e) {
  return (
    e.findIndex(
      (e) => e.status === `error` || e.status === `notFound` || e._notFound,
    ) + 1
  )
}
function an(e, t, n, r, i, a) {
  ;(r && (t = t.slice(0, r)), i && (n = n.slice(0, i)))
  for (let r of t) {
    if (a && e._tx !== a) return
    n.some((e) => e.routeId === r.routeId) ||
      e.routesById[r.routeId].options.onLeave?.(r)
  }
  for (let r of n) {
    if (a && e._tx !== a) return
    e.routesById[r.routeId].options[
      t.some((e) => e.routeId === r.routeId) ? `onStay` : `onEnter`
    ]?.(r)
  }
}
var on = class {
  constructor(e, t) {
    ;((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this._scroll = { n: !0 }),
      (this.subscribers = new Set()),
      (this._cache = new Map()),
      (this._committed = []),
      (this.startTransition = async (e) => (e(), !1)),
      (this.update = (e) => {
        let t = this.options
        ;((this.options = { ...t, ...e }),
          (this.isServer =
            this.options.isServer ?? !1 ?? typeof document > `u`),
          (this.staticLocations = new WeakMap()),
          (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            (this.history = this.options.history ? this.options.history : Jt()),
          (this.origin = this.options.origin),
          (this.origin ||=
            window?.origin && window.origin !== `null`
              ? window.origin
              : `http://localhost`))
        let n = this.options.basepath ?? `/`,
          r = this.options.rewrite,
          i =
            this.basepath !== n ||
            t?.rewrite !== r ||
            t?.caseSensitive !== this.options.caseSensitive
        if (
          (i &&
            ((this.basepath = n),
            (this.rewrite =
              n !== `/` && S(n) ? It(n, this.options.caseSensitive, r) : r)),
          this.history && this.updateLatestLocation(),
          this.options.routeTree !== this.routeTree)
        ) {
          this.routeTree = this.options.routeTree
          let e
          ;((e = this.buildRouteTree()), this.setRoutes(e))
        }
        if (this.stores) i && this.stores.location.set(this.latestLocation)
        else if (this.latestLocation) {
          let e = this.getStoreConfig(this)
          ;((this.batch = e.batch),
            (this.stores = zt(this.latestLocation, e)),
            Dt(this))
        }
      }),
      (this.updateLatestLocation = () => {
        this.latestLocation = this.parseLocation(
          this.history.location,
          this.latestLocation,
        )
      }),
      (this.buildRouteTree = () => {
        let e = at(this.routeTree, this.options.caseSensitive)
        return (
          this.options.routeMasks &&
            tt(this.options.routeMasks, e.processedTree),
          { ...e, resolvePathCache: qe(1e3) }
        )
      }),
      (this.subscribe = (e, t) => {
        let n = { eventType: e, fn: t }
        return (
          this.subscribers.add(n),
          () => {
            this.subscribers.delete(n)
          }
        )
      }),
      (this.emit = (e) => {
        for (let t of this.subscribers)
          if (t.eventType === e.type)
            try {
              t.fn(e)
            } catch (e) {
              console.error(e)
            }
      }),
      (this.parseLocation = (e, t) => {
        let n = ({ pathname: e, search: n, hash: r, href: i }, a) => {
            if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
              let i = this.options.parseSearch(n),
                o = this.options.stringifySearch(i)
              return {
                href: e + o + r,
                publicHref: e + o + r,
                pathname: m(e),
                external: !1,
                searchStr: o,
                search: b(t?.search, i),
                hash: m(r.slice(1)),
                state: s(t?.state, a),
              }
            }
            let o = Lt(this.rewrite, new URL(i, this.origin)),
              c = this.options.parseSearch(o.search),
              l = this.options.stringifySearch(c)
            return (
              (o.search = l),
              {
                href: o.href.replace(o.origin, ``),
                publicHref: i,
                pathname: m(Wt(o.pathname)),
                external: !!this.rewrite && Zt(o, this.origin),
                searchStr: l,
                search: b(t?.search, c),
                hash: m(o.hash.slice(1)),
                state: s(t?.state, a),
              }
            )
          },
          r = n(e, e.state),
          { __tempLocation: i, __tempKey: a } = r.state
        if (i && (!a || a === this.tempLocationKey)) {
          let e = n(i, {
            ...i.state,
            __tempLocation: void 0,
            key: r.state.key,
            __TSR_key: r.state.__TSR_key,
          })
          return ((e.maskedLocation = r), e)
        }
        return r
      }),
      (this.matchRoutes = (e, t, n) =>
        typeof e == `string`
          ? this.matchRoutesInternal({ pathname: e, search: t }, n)
          : this.matchRoutesInternal(e, t)),
      (this.getMatchedRoutes = (e) => {
        let t = Object.create(null),
          n = it(v(e), this.processedTree, !0)
        return (
          n && Object.assign(t, n.rawParams),
          [n?.branch || [this.routesById.__root__], t, n?.route]
        )
      }),
      (this.buildLocation = (e) => {
        {
          let t = this.staticLocations.get(e)
          if (t) return t
        }
        let t = !1,
          n = (n = {}) => {
            if (n.href) {
              let e = Yt(n.href, {})
              n = {
                ...n,
                to: Lt(this.rewrite, new URL(e.pathname, this.origin)).pathname,
                search: this.options.parseSearch(e.search),
                hash: e.hash.slice(1),
              }
            }
            let i =
                n._fromLocation || this._pendingLocation || this.latestLocation,
              a,
              o = () => ((t = !0), i),
              s = () => ((t = !0), (a ??= this.matchRoutesLightweight(i))),
              c = n.to ? `${n.to}` : `.`,
              l = w(
                c[0] === `/`
                  ? ``
                  : n.unsafeRelative === `path`
                    ? o().pathname
                    : (n.from ?? s()[1]),
                c,
                this.options.trailingSlash,
                this.resolvePathCache,
              ),
              d = this.routesByPath[v(l)],
              f = l.includes(`$`),
              p
            if (d) p = d._branch ??= ct(d)
            else if (f) p = []
            else {
              let [e, t, n] = this.getMatchedRoutes(l)
              ;((p = e),
                this.options.notFoundRoute &&
                  (!n || (n.path !== `/` && t[`**`])) &&
                  (p = [...p, this.options.notFoundRoute]))
            }
            let h = f
                ? (d?._interpolation ?? Qe(!1, { fullPath: l }, 0))
                : void 0,
              g
            for (let e of p) {
              let t = e.options.params?.stringify ?? e.options.stringifyParams
              if (t) {
                let e = s()[3]
                if (((g ??= dn(n.params, e)), !r(g))) break
                g === e && (g = Object.assign(re(), g))
                try {
                  Object.assign(g, t(g))
                } catch {}
              }
            }
            g ??= dn(n.params, fn(n.params, h) ? s()[3] : pn)
            let y = e.leaveParams
                ? l
                : Wt(m(h ? _(l, h, g, this.pathParamsDecoder) : l)),
              b = mn(p, e._includeValidateSearch),
              x = () => {
                let t = s()[2]
                if (e._includeValidateSearch && this.options.search?.strict) {
                  let e = {}
                  ;(p.forEach((n) => {
                    if (n.options.validateSearch)
                      try {
                        Object.assign(
                          e,
                          un(n.options.validateSearch, { ...e, ...t }),
                        )
                      } catch {}
                  }),
                    (t = e))
                }
                return t
              },
              S = b.length
                ? hn(b, x(), n)
                : n.search === !0
                  ? x()
                  : typeof n.search == `function`
                    ? n.search(x())
                    : n.search || pn,
              C = this.options.stringifySearch(S),
              T =
                n.hash === !0
                  ? o().hash
                  : typeof n.hash == `function`
                    ? n.hash(o().hash)
                    : n.hash || void 0,
              E = T ? `#${T}` : ``,
              D = n.state
                ? n.state === !0
                  ? o().state
                  : typeof n.state == `function`
                    ? n.state(o().state)
                    : n.state
                : pn,
              ee = `${y}${C}${E}`,
              O,
              te,
              ne = !1
            if (this.rewrite) {
              let e = new URL(ee, this.origin),
                t = e.origin,
                n = Rt(this.rewrite, e)
              ;((O = Qt(e)),
                Zt(n, t) ? ((te = n.href), (ne = !0)) : (te = Wt(Qt(n))))
            } else ((O = u(ee)), (te = O))
            return {
              publicHref: te,
              href: O,
              pathname: y,
              search: S,
              searchStr: C,
              state: D,
              hash: T ?? ``,
              external: ne,
              unmaskOnReload: n.unmaskOnReload,
            }
          },
          i = n(e)
        if (e.mask) i.maskedLocation = n({ from: e.from, ...e.mask })
        else if (this.options.routeMasks) {
          let t = nt(i.pathname, this.processedTree)
          if (t) {
            let r = Object.assign(re(), t.rawParams),
              { from: a, params: o, ...s } = t.route,
              c = dn(o, r)
            i.maskedLocation = n({ from: e.from, ...s, params: c })
          }
        }
        return (
          !t &&
            e._fromLocation &&
            !i.maskedLocation &&
            this.staticLocations.set(e, i),
          i
        )
      }),
      (this.commitLocation = async ({
        viewTransition: e,
        ignoreBlocker: t,
        ...n
      }) => {
        let r = n.maskedLocation ?? n
        if (r.external)
          return sn(this, r.publicHref, {
            replace: n.replace,
            ignoreBlocker: t,
          })
        let i,
          a =
            v(this.latestLocation.href) === v(n.href) &&
            ne(nn(n.state), nn(this.latestLocation.state)),
          o = this._commitPromise,
          s,
          c = new Promise((e) => {
            s = e
          })
        if (
          ((c.resolve = () => {
            ;(s(), o?.resolve())
          }),
          (this._commitPromise = c),
          a)
        )
          this.load()
        else {
          let { maskedLocation: r, hashScrollIntoView: a, ...o } = n
          ;(r &&
            ((o = {
              ...r,
              state: {
                ...r.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...o,
                  search: o.searchStr,
                  state: {
                    ...o.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    __TSR_key: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (o.state.__tempKey = this.tempLocationKey)),
            (o.state = {
              ...o.state,
              __hashScrollIntoViewOptions:
                a ?? this.options.defaultHashScrollIntoView ?? !0,
            }),
            (this.shouldViewTransition = e),
            (i = n.replace ? `REPLACE` : `PUSH`),
            this.history[i === `REPLACE` ? `replace` : `push`](
              o.publicHref,
              o.state,
              { ignoreBlocker: t },
            ),
            this.history.subscribers.size || this.load({ action: { type: i } }))
        }
        return ((this._scroll.n = n.resetScroll ?? !0), this._commitPromise)
      }),
      (this.buildAndCommitLocation = ({
        replace: e,
        resetScroll: t,
        hashScrollIntoView: n,
        viewTransition: r,
        ignoreBlocker: i,
        ...a
      } = {}) => {
        let o = this.buildLocation({ ...a, _includeValidateSearch: !0 })
        this._pendingLocation = o
        let s = this.commitLocation({
          ...o,
          viewTransition: r,
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          ignoreBlocker: i,
        })
        return (
          queueMicrotask(() => {
            this._pendingLocation === o && (this._pendingLocation = void 0)
          }),
          s
        )
      }),
      (this.navigate = async ({
        to: e,
        reloadDocument: t,
        href: n,
        publicHref: r,
        ...i
      }) => {
        let a = n ? d(n) : void 0
        if (a || t) {
          if (e !== void 0 || !n) {
            let t = this.buildLocation({ to: e, ...i }),
              a = t.maskedLocation ?? t
            ;((n ??= a.publicHref), (r ??= a.publicHref))
          }
          let t = !a && r ? r : n
          return sn(this, t, i)
        }
        return this.buildAndCommitLocation({
          ...i,
          href: n,
          to: e,
          _isNavigate: !0,
        })
      }),
      (this.load = async (e) => {
        ;(this.updateLatestLocation(),
          e?.action &&
            (this._scroll.h =
              e.action.type === `PUSH` || e.action.type === `REPLACE`),
          await cr(this, e))
      }),
      (this.startViewTransition = (e) => {
        let t = this.shouldViewTransition ?? this.options.defaultViewTransition
        if (
          ((this.shouldViewTransition = void 0),
          t && typeof document.startViewTransition == `function`)
        ) {
          let n
          if (
            typeof t == `object` &&
            window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)
          ) {
            let r = this.latestLocation,
              i = this.stores.resolvedLocation.get(),
              a = typeof t.types == `function` ? t.types(tn(r, i)) : t.types
            if (a === !1) return e()
            n = { update: e, types: a }
          } else n = e
          return document.startViewTransition(n).updateCallbackDone
        }
        return e()
      }),
      (this.invalidate = (e) => {
        let t = this._committed,
          n = e?.filter,
          r = this._preloads,
          i = new Set(),
          a = (e) => {
            ;(!n || n(e)) && i.add(e.id)
          }
        ;(t.forEach(a),
          this._cache.forEach(a),
          r?.forEach((e) => e.forEach(a)),
          this._tx?.[3].forEach(a))
        let o = []
        for (let [e, t] of r ?? [])
          t.some((e) => i.has(e.id)) && (r.delete(e), o.push(e))
        let s = (t) => {
          if (i.has(t.id)) {
            let n = this.routesById[t.routeId],
              r = {
                ...t,
                invalid: !0,
                ...((e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`) &&
                $t(n)
                  ? { status: `pending`, error: void 0 }
                  : void 0),
              }
            return ((t._flight = void 0), r)
          }
          return t
        }
        this._committed = t.map(s)
        for (let [t, n] of this._cache)
          i.has(t) &&
            ((n.invalid = !0), e?.forcePending && (n.status = `pending`))
        for (let e of i) {
          let t = this._flights?.get(e)
          ;(this._flights?.delete(e), t && !t[2] && o.push(t[1]))
        }
        for (let e of o) e.abort()
        return ((this.shouldViewTransition = !1), this.load({ sync: e?.sync }))
      }),
      (this.resolveRedirect = (e) => {
        let t = e.options,
          n = e.headers.get(`Location`) || t.href
        if (!n) {
          let e = this.buildLocation(t)
          n = (e.maskedLocation ?? e).publicHref || `/`
        }
        let r
        if (o.test(n) || ((r = d(n)) && !this.protocolAllowlist.has(r)))
          throw Error(`Redirect blocked: unsafe protocol`)
        if (r === `http:` || r === `https:`) {
          let e = new URL(n)
          e.pathname.startsWith(`//`)
            ? (n = e.href)
            : Zt(e, this.origin) || ((n = Qt(e)), (r = void 0))
        }
        return (
          r && (t.reloadDocument = !0),
          (t.href = n),
          e.headers.set(`Location`, n),
          e
        )
      }),
      (this.clearCache = (e) => {
        let t = this._cache,
          n = this._preloads,
          r = e?.filter,
          i = [],
          a = []
        for (let [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n))
        let o = []
        for (let [e, t] of n ?? [])
          (!r || t.some(r)) && (o.push(e), i.push(...t))
        for (let e of a) t.delete(e)
        for (let e of o) n.delete(e)
        for (let e of i) {
          let t = e._flight
          ;((e._flight = void 0),
            t &&
              !--t[2] &&
              (this._flights?.get(e.id) === t && this._flights.delete(e.id),
              o.push(t[1])))
        }
        for (let e of o) e.abort()
      }),
      (this.loadRouteChunk = bn),
      (this.preloadRoute = (e) => lr(this, e)),
      (this.matchRoute = (e, t) => {
        let n = {
            ...e,
            to: e.to
              ? w(
                  e.from || ``,
                  e.to,
                  this.options.trailingSlash,
                  this.resolvePathCache,
                )
              : void 0,
            params: e.params || {},
            leaveParams: !0,
          },
          r = this.buildLocation(n),
          i = this.stores.status.get() === `pending`
        if (t?.pending && !i) return !1
        let a =
            (t?.pending ?? !i)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
          o = rt(
            r.pathname,
            t?.caseSensitive ?? !1,
            t?.fuzzy ?? !1,
            a.pathname,
            this.processedTree,
          )
        return !o || (e.params && !ne(o.rawParams, e.params, !0))
          ? !1
          : (t?.includeSearch ?? !0)
            ? ne(a.search, r.search, !0)
              ? o.rawParams
              : !1
            : o.rawParams
      }),
      (this.getStoreConfig = t),
      e.pathParamsAllowedCharacters?.length &&
        (this.pathParamsDecoder = g(e.pathParamsAllowedCharacters)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...e,
        caseSensitive: e.caseSensitive ?? !1,
        notFoundMode: e.notFoundMode ?? `fuzzy`,
        stringifySearch: e.stringifySearch ?? Nt,
        parseSearch: e.parseSearch ?? Mt,
        protocolAllowlist: e.protocolAllowlist ?? f,
      }),
      (self.__TSR_ROUTER__ = this))
  }
  isShell() {
    return !!this.options.isShell
  }
  get state() {
    return this.stores.__store.get()
  }
  setRoutes(e) {
    ;(Object.assign(this, e),
      (this.lightweightCache = new WeakMap()),
      (this.staticLocations = new WeakMap()))
    let t = this.options.notFoundRoute
    t &&
      (t.init(99999999999),
      this.routesById[t.id] !== t && (t._interpolation = Qe(!1, t, 0)),
      (this.routesById[t.id] = t))
  }
  matchRoutesInternal(e, t) {
    let [n, r, i] = this.getMatchedRoutes(e.pathname),
      a = n,
      o = !1
    ;(i ? i.path !== `/` && r[`**`] : v(e.pathname)) &&
      (this.options.notFoundRoute
        ? (a = [...a, this.options.notFoundRoute])
        : (o = !0))
    let c = o ? gn(this.options.notFoundMode, a) : void 0,
      l = Array(a.length),
      u = this._committed,
      d = (e, t) => {
        let n = u[t]
        return n?.routeId === e.id
          ? n
          : e === this.options.notFoundRoute
            ? u.find((t) => t.routeId === e.id)
            : void 0
      },
      f
    for (let n = 0; n < a.length; n++) {
      let i = a[n],
        o = l[n - 1],
        u,
        p,
        m
      {
        let n = o?.search ?? e.search,
          r = o?._strictSearch ?? void 0
        try {
          let e = un(i.options.validateSearch, { ...n }) ?? void 0
          ;((u = { ...n, ...e }), (p = { ...r, ...e }))
        } catch (e) {
          let r = e
          if (
            (e instanceof cn || (r = new cn(e.message, { cause: e })),
            t?.throwOnError)
          )
            throw r
          ;((u = n), (p = {}), (m = r))
        }
      }
      let h = ``,
        g = ``
      try {
        ;((h = i.options.loaderDeps?.({ search: u }) ?? ``),
          (g = (h && JSON.stringify(h)) || ``))
      } catch (e) {
        if (t?.throwOnError) throw e
        m ??= e
      }
      let v = re(),
        y = i._interpolation
          ? _(i.fullPath, i._interpolation, r, this.pathParamsDecoder, v)
          : i.fullPath,
        x = i.id + y + g,
        S = d(i, n),
        C = this._cache.get(x) ?? (S?.id === x ? S : void 0)
      f = C?._strictParams ?? Object.assign(v, f)
      let w
      if (!C)
        try {
          _n(i, f)
        } catch (e) {
          if (
            ((w = oe(e) || we(e) ? e : new ln(e.message, { cause: e })),
            t?.throwOnError)
          )
            throw w
        }
      let T = S ? `stay` : `enter`,
        E
      if (C)
        E = {
          ...C,
          cause: T,
          search: b(S ? S.search : C.search, u),
          _strictSearch: p,
          searchError: m,
        }
      else {
        let e = $t(i) ? `pending` : `success`
        E = {
          id: x,
          ssr: i.options.ssr,
          index: n,
          routeId: i.id,
          params: S?.params ?? f,
          _strictParams: f,
          pathname: y,
          updatedAt: Date.now(),
          search: S ? b(S.search, u) : u,
          _strictSearch: p,
          searchError: m,
          status: e,
          isFetching: !1,
          error: void 0,
          paramsError: w,
          context: {},
          abortController: t?._controller ?? new AbortController(),
          cause: T,
          loaderDeps: S ? s(S.loaderDeps, h) : h,
          invalid: !1,
          preload: !1,
          staticData: i.options.staticData || {},
          fullPath: i.fullPath,
        }
      }
      let D = c === i.id
      ;(E._notFound && !D && (E.error = void 0), (E._notFound = D), (l[n] = E))
    }
    for (let e = 0; e < l.length; e++) {
      let n = l[e]
      ;((n.params = n.cause === `stay` ? b(n.params, f) : f),
        t?._controller && (n.context = {}))
    }
    return l
  }
  matchRoutesLightweight(t) {
    let n = e(this.stores.ids.get()),
      r = n ? this.stores.byRoute.get(n).get() : void 0,
      i = r?.id,
      a = this.lightweightCache.get(t)
    if (a && a[0] === i) return a[1]
    let [o, s] = this.getMatchedRoutes(t.pathname),
      c = e(o),
      l = { ...t.search }
    for (let e of o)
      try {
        Object.assign(l, un(e.options.validateSearch, l))
      } catch {}
    let u = r && r.routeId === c.id && r.pathname === t.pathname,
      d
    if (u) d = r.params
    else {
      let e = s
      for (let t of o)
        try {
          _n(t, e)
        } catch {}
      d = e
    }
    let f = [o, c.fullPath, l, d]
    return (this.lightweightCache.set(t, [i, f]), f)
  }
}
async function sn(e, t, { replace: n, ignoreBlocker: r }) {
  if (!c(t, e.protocolAllowlist)) {
    if (!r) {
      let t = e.history._getBlockers()
      for (let r of t)
        if (
          r?.blockerFn &&
          (await r.blockerFn({
            currentLocation: e.history.location,
            nextLocation: e.history.location,
            action: n ? `REPLACE` : `PUSH`,
          }))
        )
          return
    }
    ;(e.history._ignoreNextBeforeUnload?.(t),
      n ? window.location.replace(t) : (window.location.href = t))
  }
}
var cn = class extends Error {},
  ln = class extends Error {}
function un(e, t) {
  if (e == null) return {}
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t)
    if (n instanceof Promise) throw new cn(`Async validation not supported`)
    if (n.issues)
      throw new cn(JSON.stringify(n.issues, void 0, 2), { cause: n })
    return n.value
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {}
}
function dn(e, t) {
  if (e === void 0 || e === !0) return t
  let n = Object.create(null)
  return e === !1 || e === null
    ? n
    : typeof e == `function`
      ? (Object.assign(n, t), Object.assign(n, e(n)))
      : Object.assign(n, t, e)
}
function fn(e, t) {
  return typeof e == `function`
    ? !0
    : !t || e === !1 || e === null
      ? !1
      : e === void 0 ||
        e === !0 ||
        t.some((t) => typeof t != `string` && !n.call(e, t[1]))
}
var pn = Object.freeze({})
function mn(e, t) {
  let n = []
  for (let r = 0; r < e.length; r++) {
    let i = e[r].options
    ;`search` in i
      ? i.search?.middlewares && n.push(...i.search.middlewares)
      : (i.preSearchFilters || i.postSearchFilters) &&
        n.push(({ search: e, next: t }) => {
          let n = t(
            i.preSearchFilters
              ? i.preSearchFilters.reduce((e, t) => t(e), e)
              : e,
          )
          return i.postSearchFilters
            ? i.postSearchFilters.reduce((e, t) => t(e), n)
            : n
        })
    let a = i.validateSearch
    t &&
      a &&
      n.push(({ search: e, next: t, meta: n }) => {
        let r = t(e)
        try {
          let e = un(a, r)
          if (n && e)
            for (let t in e) t in r || (n.defaulted ||= new Map()).set(t, e[t])
          return { ...r, ...e }
        } catch {}
        return r
      })
  }
  return n
}
function hn(e, t, n) {
  let r = (t, i, a) => {
    if (t >= e.length) {
      if (!n.search) return {}
      if (n.search === !0) return i
      let e = te(n.search, i)
      return (a && (a.explicit = e), e)
    }
    return e[t]({
      search: i,
      next: (e, n) => {
        if (n) {
          let n = a || {}
          return { search: r(t + 1, e, n), meta: n }
        }
        return r(t + 1, e, a)
      },
      meta: a,
    })
  }
  return r(0, t)
}
function gn(e, t) {
  if (e !== `root`) {
    let e
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n]
      if (r.options.notFoundComponent) return r.id
      e ||= r.children && r.id
    }
    if (e) return e
  }
  return he
}
function _n(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams
  n && Object.assign(t, n(t))
}
function vn(e, t) {
  return e.options[t]?.preload?.()
}
function yn(e, t) {
  let n = vn(e, `component`),
    r = vn(e, `pendingComponent`)
  return (
    t && (r ? (r = r.then(t)) : t()),
    n && r ? Promise.all([n, r]).then(() => {}) : (n ?? r)
  )
}
function bn(e, t, n) {
  let r = () => (t === !1 ? void 0 : t ? vn(e, t) : yn(e, n)),
    i = e._lazy
  if (i) return i === !0 ? r() : i.then(r)
  if (!e.lazyFn) return r()
  let a = e.lazyFn().then(
    (t) => {
      {
        let { id: n, ...r } = t.options
        ;(Object.assign(e.options, r), (e._lazy = !0))
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t)
    },
  )
  return ((e._lazy = a), a.then(r))
}
function xn(e) {
  let t = e.findIndex((e) => e.status !== `success` || e._notFound) + 1
  return t && t < e.length ? e.slice(0, t) : e
}
function Sn(e) {
  let t = e.length
  for (let n = 0; n < t; n++) {
    let r = e[n]
    if (r._assetEnd !== void 0) {
      t = Math.min(t, Math.max(n + 1, r._assetEnd))
      continue
    }
    if (r.status !== `success` || r._notFound) {
      t = n + 1
      break
    }
  }
  return t < e.length ? e.slice(0, t) : e
}
var Cn = 0,
  wn = 1,
  Tn = 2,
  En = 3,
  Dn = [4]
function On(e) {
  return typeof e[0] == `number`
}
function kn(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        let i = () => r(t)
        ;(t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .then(() => t.removeEventListener(`abort`, i)))
      })
}
function An(e, t) {
  return e.routesById[t.routeId]
}
function jn(e, t, n) {
  return we(e)
    ? [En, e]
    : oe(e)
      ? ((e.routeId ||= n), [Tn, e])
      : t
        ? (typeof e?.then == `function` &&
            (e = Error(`A Promise was thrown`, { cause: e })),
          [wn, e])
        : [Cn, e]
}
function Mn(e, t) {
  let n = jn(t, !0, e.id)
  if (n[0] !== wn) return n
  try {
    e.options.onError?.(n[1])
  } catch (t) {
    n = jn(t, !0, e.id)
  }
  return n
}
function Nn(e, t, n, r, i) {
  return i[0].signal.aborted ? Dn : Yn(e, t, n, Mn(n, r), i)
}
async function Pn(e, t, n, r, i, a) {
  let [o, s] = t,
    c = n[0].signal,
    l = !!n[3]
  for (let i = n[6] ?? 0; i < r; i++) {
    let r = s[i],
      u = An(e, r)
    r.abortController = n[0]
    let d = s[i - 1]?.context ?? e.options.context ?? {},
      f = {
        params: r.params,
        location: o,
        navigate: (t) => e.navigate({ ...t, _fromLocation: o }),
        buildLocation: e.buildLocation,
        cause: l ? `preload` : r.cause,
        abortController: n[0],
        preload: l,
        matches: s,
        routeId: u.id,
      }
    try {
      let e = (r._ctx ||= u.options.context
        ? u.options.context({ ...f, deps: r.loaderDeps, context: d }) || {}
        : void 0)
      r.context = { ...d, ...e }
    } catch (a) {
      return (In(e, r), [i, Nn(e, t, u, a, n)])
    }
    if (c.aborted) return [i, Dn]
    let p = r.paramsError ?? r.searchError
    if (p !== void 0) return (In(e, r), [i, Nn(e, t, u, p, n)])
    let m = u.options.beforeLoad
    if (!m) continue
    let h = r.status
    i >= a && ((r.status = `pending`), n[7]?.())
    try {
      zn(e, r, `beforeLoad`, n[0])
      let a = m({
          ...f,
          search: r.search,
          context: r.context,
          ...e.options.additionalContext,
        }),
        o = await (typeof a?.then == `function` ? kn(a, c) : a)
      if (c.aborted) return [i, Dn]
      let s = Yn(e, t, u, jn(o, !1, u.id), n)
      if (s[0] !== Cn) return (In(e, r), [i, s])
      r.context = { ...r.context, ...o }
    } catch (a) {
      return (In(e, r), [i, Nn(e, t, u, a, n)])
    } finally {
      ;((r.status = h), zn(e, r, !1, n[0]))
    }
  }
  i()
}
function Fn(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      let n = e._tx
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return
      e._flights.delete(t.id)
    }
    return n[1]
  }
}
function In(e, t) {
  let n = t._flight
  ;((t._flight = void 0), Fn(e, t, n)?.abort())
}
function Ln(e, t, n, r) {
  let i = []
  for (let a of t)
    if (!n?.includes(a)) {
      let t = a._flight
      if (
        ((a._flight = void 0),
        r &&
          t?.[2] === 1 &&
          e._flights?.get(a.id) === t &&
          n?.some((e) => e.id === a.id))
      )
        t[2] = 0
      else {
        let n = Fn(e, a, t)
        n && i.push(n)
      }
    }
  for (let e of i) e.abort()
}
function Rn(e) {
  for (let t of e) {
    let e = t._flight
    e && e[2]++
  }
}
function zn(e, t, n, r) {
  if (((t.isFetching = n), r && e._tx?.[0] !== r)) return
  let i = e.stores.byRoute.get(t.routeId),
    a = i?.get()
  a?.id === t.id && i.set({ ...a, isFetching: n })
}
function Bn(e, t, n, r, i, a, o) {
  let s = t[0]
  return {
    params: n.params,
    location: s,
    navigate: (t) => e.navigate({ ...t, _fromLocation: s }),
    cause: o ? `preload` : n.cause,
    abortController: i,
    preload: o,
    deps: n.loaderDeps,
    parentMatchPromise: a,
    context: n.context,
    route: r,
    ...e.options.additionalContext,
  }
}
async function Vn(e, t, n, r, i, a, o) {
  let s = o[0],
    c = s.signal
  if (c.aborted) return Dn
  if (!i) return [Cn, void 0]
  let l = n._flight
  zn(e, n, `loader`, s)
  try {
    if (!l) {
      let s = new AbortController()
      ;((l = [
        Promise.resolve()
          .then(() => i(Bn(e, t, n, r, s, a, !!o[3])))
          .then(
            (e) => jn(e, !1, r.id),
            (e) => jn(e, !0, r.id),
          )
          .then(
            (t) => (
              t[0] !== Cn &&
                e._flights?.get(n.id) === l &&
                (e._flights.delete(n.id), l[2] || s.abort()),
              t[0] === wn && l[2] ? Mn(r, t[1]) : t
            ),
          ),
        s,
        1,
      ]),
        (e._flights ??= new Map()).set(n.id, l))
    }
    return (
      (n._flight = l),
      (n.abortController = l[1]),
      Yn(e, t, r, await kn(l[0], c), o)
    )
  } catch (t) {
    if (t !== c || !c.aborted) throw t
    return (In(e, n), Dn)
  } finally {
    zn(e, n, !1, s)
  }
}
function Hn(e, t, n) {
  t[0] !== En &&
    ((e.status = `success`),
    (e.error = void 0),
    t[0] === Cn
      ? ((e.loaderData = t[1]),
        (e.invalid = !1),
        (e.updatedAt = Date.now()),
        (e.preload = n))
      : (e.invalid = !0))
}
function Un(e, t, n) {
  let r = e._cache.get(t.id)
  if (
    r !== n ||
    e._committed.some((e) => e.id === t.id && e._flight === t._flight)
  )
    return
  let i = { ...t, _notFound: void 0, context: {} }
  ;(i._flight && i._flight[2]++, e._cache.set(t.id, i), r && In(e, r))
}
function Wn(e, t) {
  return t[0] === wn || t[0] === Tn
    ? {
        ...e,
        status: t[0] === wn ? `error` : `notFound`,
        error: t[1],
        _flight: void 0,
      }
    : e
}
function Gn(e, t, n, r, i, a, o) {
  let s = t[1][n],
    c = An(e, s),
    l = !!a[3],
    u = e._cache.get(s.id),
    d,
    f = !1,
    p
  try {
    if (
      (s.status === `success` &&
        ((d = c.options.shouldReload),
        typeof d == `function` && (d = d(Bn(e, t, s, c, a[0], i, l))),
        a[0].signal.aborted && (p = Dn)),
      !p)
    )
      if (s.status !== `success`) f = !0
      else {
        let t =
          l || s.preload
            ? (c.options.preloadStaleTime ??
              e.options.defaultPreloadStaleTime ??
              3e4)
            : (c.options.staleTime ?? e.options.defaultStaleTime ?? 0)
        f = !!(
          s.invalid ||
          d ||
          (d === void 0 &&
            Date.now() - s.updatedAt >= t &&
            (a[5] ||
              s.cause === `enter` ||
              a[2].some((e) => e.routeId === s.routeId && e.id !== s.id)))
        )
      }
  } catch (n) {
    ;((s.invalid = !0), In(e, s), (p = Nn(e, t, c, n, a)))
  }
  let m = c.options.loader,
    h = typeof m == `function`,
    g = h ? m : m?.handler,
    _ = !l || c.options.preload !== !1,
    v = _ && m ? e._flights?.get(s.id) : void 0
  v === s._flight || p
    ? (v = void 0)
    : v && !f && !l && d === void 0
      ? (f = !0)
      : f || (v = void 0)
  let y = !!(
      m &&
      f &&
      s.status === `success` &&
      !l &&
      !a[4] &&
      ((h ? void 0 : m.staleReloadMode) ?? e.options.defaultStaleReloadMode) !==
        `blocking`
    ),
    b = f && _,
    x = b && !y && (s.status !== `success` || !!m),
    S = n >= o ? a[7] : void 0,
    C = c.lazyFn && c._lazy !== !0 ? S : void 0
  if (
    (b && !m && ((s.invalid = !1), (s.updatedAt = Date.now())), v && v[2]++, x)
  ) {
    let t = s._flight
    ;((s._flight = v),
      Fn(e, s, t)?.abort(),
      n >= o && (s.status = `pending`),
      S?.())
  }
  b || (s.isFetching = !1)
  let w =
      !p && x
        ? Vn(e, t, s, c, g, i, a).then(
            (t) => (
              Hn(s, t, l),
              t[0] === Cn &&
                (m && !a[0].signal.aborted && Un(e, s, u),
                n >= o && (s.status = `pending`)),
              t
            ),
          )
        : Promise.resolve(p ?? [Cn, s.loaderData]),
    T = (async () => {
      try {
        let e = bn(c, void 0, C)
        e && (await kn(e, a[0].signal))
      } catch (r) {
        if (
          !t[1].some(
            (e, t) =>
              t <= n &&
              (e.status === `error` || e.status === `notFound` || e._notFound),
          )
        )
          return [n, Nn(e, t, c, r, a)]
      }
      let r = await w
      x &&
        r[0] === Cn &&
        s.status === `pending` &&
        !a[0].signal.aborted &&
        ((s.status = `success`), S?.())
    })()
  if ((r.push([n, w, T]), !y)) return w.then((e) => Wn(s, e))
  let E = { ...s, status: `pending`, preload: !1, _flight: v }
  ;((s.invalid = !1), (s.isFetching = `loader`))
  let D = Vn(e, t, E, c, g, i, a).then(
    (e) => ((s.isFetching = !1), Hn(E, e, !1), e),
  )
  return ((t[2] ??= []).push([n, D, T, E]), D.then((e) => Wn(E, e)))
}
async function Kn(e, t, n, r, i = 0) {
  let a = n?.[1][1],
    o = a?.routeId
      ? t.findIndex((e) => e.routeId === a.routeId)
      : (n?.[0] ?? t.length - 1)
  o < 0 && (o = 0)
  for (let n = o; n >= 0; n--) {
    let i = An(e, t[n])
    try {
      let e = bn(i, !1)
      e && (await kn(e, r))
    } catch (e) {
      if (e === r && r.aborted) throw e
    }
    if (i.options.notFoundComponent) return n
  }
  return a?.routeId ? o : i
}
function qn(e, t) {
  t[2] &&=
    (Ln(
      e,
      t[2].map((e) => e[3]),
    ),
    void 0)
}
async function Jn(e, t, n, r) {
  let i
  try {
    await Promise.all(
      e.map((e) =>
        e[1].then(async (t) => {
          let a = e[0]
          if (!(r && a >= (await r))) {
            if (t[0] >= En) throw [a, t]
            !i &&
              t[0] !== Cn &&
              ((i = [a, t]),
              await Promise.all(
                (n ?? []).map((e) => {
                  if (!(e[0] <= a))
                    return e[1].then((t) => {
                      if (t[0] === En) throw [e[0], t]
                    })
                }),
              ))
          }
        }),
      ),
    )
  } catch (e) {
    return e
  }
  return t ?? i
}
function Yn(e, t, n, r, i, a) {
  for (; r[0] === En;) {
    let o = r[1],
      s = o.options
    try {
      if (
        ((s.href || o.headers.has(`Location`)) &&
          (e.resolveRedirect(o), s.reloadDocument)) ||
        (s.reloadDocument ? i[3] : i[1] >= 20)
      )
        return r
      let n = e.buildLocation({
          ...s,
          _fromLocation: t[0],
          _includeValidateSearch: !0,
        }),
        a = n.maskedLocation ?? n
      if (a.external) {
        let t = o.clone()
        return (
          (t.options = { ...s }),
          t.headers.set(`Location`, a.publicHref),
          e.resolveRedirect(t),
          i[3] ? [En, t] : [En, t, a]
        )
      }
      return [En, o, n]
    } catch (e) {
      ;((r = a ? [wn, e] : Mn(n, e)), (a = !0))
    }
  }
  return r
}
async function Xn(e, t, n, r, i, a) {
  let o = t[1],
    s = await i,
    c = !1,
    l = o.findIndex((e) => e._notFound),
    u = (t) => (t[1][0] === Tn ? Kn(e, o, t, r.signal) : t[0]),
    d = l < 0 ? o.length : l
  if ((s?.[1][0] ?? 0) >= En) d = 0
  else if (s) {
    d = s[2] ??= await u(s)
    for (let e of n) {
      if (e[0] >= d) break
      let t = await e[1]
      if (t[0] !== Cn && t[0] < En && !(`loaderData` in o[e[0]])) {
        ;((s = [e[0], t]), (d = s[2] = await u(s)))
        break
      }
    }
  }
  for (let e of n) {
    if (e[0] >= d) break
    let t = await e[2]
    if (t) {
      s = t
      break
    }
  }
  if ((s?.[1][0] ?? 0) >= En) {
    let n = s[1]
    if (n[0] !== En || n[1].options.reloadDocument || n[2]) return (qn(e, t), n)
    ;((c = !0), (s = [0, [wn, Error(`Too many redirects`)]]))
  }
  let f = s ? (s[2] ?? (await u(s))) : l
  if (f >= 0) {
    let i = s?.[1],
      l = i?.[0],
      u = o[f],
      d = i?.[1],
      p = () => {
        i &&
          ((u._notFound = void 0),
          l === wn
            ? (u.status = `error`)
            : ((d.routeId = u.routeId),
              u.routeId === e.routeTree.id
                ? ((u.status = `success`), (u._notFound = !0))
                : (u.status = `notFound`)),
          (u.error = d),
          (u.isFetching = !1))
      }
    ;(p(), i || a?.())
    let m = An(e, u)
    try {
      await kn(
        i
          ? Promise.resolve().then(() =>
              bn(m, l === wn ? `errorComponent` : `notFoundComponent`),
            )
          : Promise.all([bn(m), bn(m, `notFoundComponent`)]),
        r.signal,
      )
    } catch (n) {
      if (n === r.signal && r.signal.aborted) return (qn(e, t), Dn)
    }
    i
      ? c &&
        (r.abort(),
        await Promise.all([
          ...n.map((e) => e[1]),
          ...n.map((e) => e[2]),
          ...(t[2] ?? []).map((e) => e[1]),
        ]),
        qn(e, t),
        Ln(e, o),
        p())
      : (u.status = `success`)
  }
  return t
}
async function Zn(e, t, n, r = 0, i = t[1].length) {
  let a = t[1]
  for (let t = r; t < i; t++) {
    let r = a[t],
      i = An(e, r).options
    if (i.head || i.scripts)
      try {
        let t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await kn(Promise.all([i.head?.(t), i.scripts?.(t)]), n)
        ;((r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s))
      } catch (e) {
        if (e === n && n.aborted) break
        console.error(e)
      }
    if (r.status !== `success` || r._notFound) break
  }
  return t
}
async function Qn(e, t, n, r) {
  let i = [t, n],
    a = r[0].signal,
    o
  try {
    let t = e.stores.matches.get(),
      s = n.findIndex((e) => e._notFound)
    if (e.options.notFoundMode !== `root` && s >= 0) {
      let t = await Kn(e, n, void 0, a, s)
      ;((n[s]._notFound = void 0), (n[t]._notFound = !0), (s = t))
    }
    let c = s < 0 ? n.length : s + 1,
      l = 0
    for (; l < c && l !== s;) {
      let e = n[l],
        i = r[2][l],
        a = t[l]
      if (
        i?.id !== e.id ||
        i.status !== `success` ||
        e.preload ||
        a?.id !== e.id ||
        a.status !== `success` ||
        (l++, i._notFound || a._notFound)
      )
        break
    }
    let u = [],
      d = r[6] ?? 0,
      f = d ? Promise.resolve(n[d - 1]) : void 0,
      p = () => {
        for (let t = d; t < c && !a.aborted; t++) f = Gn(e, i, t, u, f, r, l)
      },
      m = await Pn(e, i, r, c, p, l)
    if (m) {
      if (((r[4] = !0), (c = m[0]), m[1][0] === Tn)) {
        let t = await Kn(e, n, m, a)
        ;((m[2] = t), (c = Math.min(c, t + 1)))
      } else m[1][0] >= En && (c = 0)
      p()
    }
    if (!a.aborted && !r[3]) {
      let t = []
      for (let [n, r] of e._flights ?? [])
        r[2] || (e._flights.delete(n), t.push(r[1]))
      for (let e of t) e.abort()
    }
    let h = Xn(e, i, u, r[0], Jn(u, m, i[2]), r[7])
    ;(i[2]?.length &&
      (i[3] = Jn(
        i[2],
        void 0,
        void 0,
        h.then(
          (e) => (On(e) ? 0 : xn(n).length),
          () => 0,
        ),
      )),
      (o = await h))
  } catch (t) {
    if ((qn(e, i), t === a && a.aborted)) return Dn
    throw t
  }
  return On(o) ? o : Zn(e, o, a, r[6] === n.length ? r[6] : 0)
}
function $n(e, t) {
  if (e._tx !== t) return
  let n = t[3],
    r = e.stores.matches.get(),
    i = e._pending
  for (let a = 0; a < n.length; a++) {
    let o = n[a],
      s = o.status === `success` && !o._notFound,
      c = r[a]?.id === o.id && r[a]?.status === `pending`
    if (s && !c) continue
    let l = An(e, o),
      u =
        s || o.invalid
          ? 0
          : (l.options.pendingMs ?? e.options.defaultPendingMs),
      d = l.options.pendingComponent ?? e.options.defaultPendingComponent
    if (!d || typeof u != `number` || u === 1 / 0) {
      i && ((i[0] = t), (i[2] = 0), (i[4] = !0))
      return
    }
    let f = l.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0,
      p = !1
    if (
      (i?.[1] === o.id
        ? ((p = i[0] !== t), (i[0] = t))
        : (clearTimeout(i?.[3]), (e._pending = i = void 0)),
      i ||
        (e._pending = i =
          [t, o.id, c ? Date.now() + f : t[4] + u, void 0, c || void 0, d]),
      i[4] && !p && i[5] === d)
    )
      return
    if (((i[5] = d), !i[4])) {
      clearTimeout(i[3])
      let n = i[2] - Date.now()
      if (n > 0) {
        i[3] = setTimeout(() => $n(e, t), n)
        return
      }
      i[2] = 0
    }
    let m = n.map((e) => ({ ...e, _flight: void 0 }))
    m[a].status = `pending`
    let h = (i[4] = e
      .startTransition(() => e.stores.setMatches(m), m)
      .then(
        (t) => (
          t &&
            e._pending === i &&
            i[4] === h &&
            !i[2] &&
            (i[2] = Date.now() + f),
          t
        ),
      ))
    return
  }
}
function er(e, t) {
  let n = e._pending
  ;(e._tx === t || !e._tx?.[3].some((e) => e.id === n?.[1])) &&
    (clearTimeout(n?.[3]), (e._pending = void 0))
}
async function tr(e, t) {
  let n = e._pending
  if (!n) return
  clearTimeout(n[3])
  let r = n[2] - Date.now()
  if (!n[4] || r <= 0 || !xn(t[3]).some((e) => e.id === n[1])) return
  let i
  try {
    await kn(
      new Promise((e) => {
        i = setTimeout(e, r)
      }),
      t[0].signal,
    )
  } catch {}
  clearTimeout(i)
}
function nr(e, t) {
  ;((e._committed = t), e.stores.setMatches(t))
}
function rr(e, t, n, r) {
  let i = e._committed,
    a = e._lifecycleEnd,
    o = e._cache
  for (let e of n) ((e.preload = !1), r && (e._assetEnd = void 0))
  let s = xn(n).length,
    c = new Map()
  {
    let t = Date.now(),
      r = new Set()
    for (let e = 0; e < n.length; e++) {
      let t = n[e]
      ;(e < s || t.status === `success`) && r.add(t.id)
    }
    for (let n of [...i, ...o.values()]) {
      if (n.status !== `success` || r.has(n.id)) continue
      let i = An(e, n)
      !i.options.loader ||
        t - n.updatedAt >=
          (n.preload
            ? (i.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5)
            : (i.options.gcTime ?? e.options.defaultGcTime ?? 3e5)) ||
        c.set(
          n.id,
          o.get(n.id) === n
            ? n
            : { ...n, _flight: void 0, isFetching: !1, context: {} },
        )
    }
  }
  ;((t[3] = []), (e._cache = c))
  let l = (e._lifecycleEnd = rn(n))
  ;(nr(e, n),
    Ln(
      e,
      [...o.values(), ...i].filter((e) => e._flight && c.get(e.id) !== e),
      n,
    ),
    an(e, i, n, a, l, t))
}
async function ir(e, t) {
  let n = e._tx
  for (; n && n !== t;) ((t = n), await n[5], (n = e._tx))
}
function ar(e, t, n) {
  let r = n[1].options,
    i = n[2]
  if (!i) return e.navigate({ ...r, replace: !0, ignoreBlocker: !0 })
  if (r.reloadDocument)
    return e.navigate({
      href: (i.maskedLocation ?? i).publicHref,
      reloadDocument: !0,
      replace: !0,
      ignoreBlocker: !0,
    })
  ;((i._redirects = t[1] + 1), (e._pendingLocation = i))
  let a = e.commitLocation({
    ...i,
    viewTransition: r.viewTransition,
    replace: !0,
    resetScroll: r.resetScroll,
    hashScrollIntoView: r.hashScrollIntoView,
    ignoreBlocker: !0,
  })
  return (
    queueMicrotask(() => {
      e._pendingLocation === i && (e._pendingLocation = void 0)
    }),
    a
  )
}
async function or(e, t, n, r, i) {
  let a = n.map((e) => ({ ...e }))
  Rn(a)
  for (let t of r) (In(e, a[t[0]]), (a[t[0]] = t[3]))
  let o = [t[2], a],
    s
  try {
    s = await Xn(e, o, r, t[0], i)
  } catch (t) {
    throw (Ln(e, a), t)
  }
  if (On(s)) {
    ;(Ln(e, a),
      s[0] === En && e._tx === t && e._committed === n && (await ar(e, t, s)))
    return
  }
  if ((await Zn(e, s, t[0].signal), e._tx !== t || e._committed !== n)) {
    Ln(e, a)
    return
  }
  for (let t of a) {
    let n = e._cache.get(t.id)
    n?._flight && n._flight === t._flight && (e._cache.delete(t.id), In(e, n))
  }
  ;(nr(e, a), Ln(e, n, a))
}
async function sr(e, t, n, r, i, a) {
  let o = await Qn(e, t[2], t[3], [
    t[0],
    t[1],
    e._committed,
    void 0,
    i,
    n,
    a,
    r,
  ])
  if (On(o)) {
    let n = o[0] === En && e._tx === t
    if (
      ((!n || o[1].options.reloadDocument) && er(e, t),
      Ln(e, t[3]),
      (t[3] = []),
      !n)
    )
      return
    if (e._tx !== t) {
      er(e, t)
      return
    }
    await ar(e, t, o)
    return
  }
  let s = o[1]
  if ((e._tx === t && (await tr(e, t)), e._tx !== t)) {
    ;(er(e, t), Ln(e, s), qn(e, o))
    return
  }
  let c = t[2],
    l = tn(c, e.stores.resolvedLocation.get()),
    u = o[2]
  await e.startViewTransition(async () => {
    if ((e._tx === t && (await tr(e, t)), e._tx !== t)) {
      ;(er(e, t), Ln(e, s), qn(e, o))
      return
    }
    let n = await e.startTransition(() => {
      ;(er(e, t),
        rr(e, t, s, a),
        e._tx === t &&
          (e.emit({ type: `onLoad`, ...l }),
          e._tx === t && e.emit({ type: `onBeforeRouteMount`, ...l })))
    }, s)
    if (e._tx !== t) {
      qn(e, o)
      return
    }
    ;(u?.length && or(e, t, s, u, o[3]).catch(console.error),
      e.batch(() => {
        ;(e.stores.resolvedLocation.set(c),
          e.stores.status.set(`idle`),
          e._tx === t && e.emit({ type: `onResolved`, ...l }),
          n && e._tx === t && e.emit({ type: `onRendered`, ...l }))
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0)))
  })
}
async function cr(e, t) {
  let n = e._tx,
    r = e.stores.resolvedLocation.get(),
    i = r ?? e.stores.location.get(),
    a = e.latestLocation,
    o = e._pendingLocation,
    s = o?.href === a.href ? (o._redirects ?? 0) : 0,
    c = e._handoff,
    l = c?.[0](),
    u = new AbortController(),
    d = e._preflight
  if (((e._preflight = u), l || c?.[1](), d?.abort(), !u.signal.aborted)) {
    let t = tn(a, r)
    ;(e.emit({ type: `onBeforeNavigate`, ...t }),
      u.signal.aborted || e.emit({ type: `onBeforeLoad`, ...t }))
  }
  if (u.signal.aborted) {
    await ir(e, n)
    return
  }
  let f = i.href === a.href,
    p = u,
    m = e.matchRoutes(a, { _controller: u })
  Rn(m)
  let h = l ? c[1](m) : void 0
  if ((h ? (p = l) : l?.abort(), u.signal.aborted)) {
    ;(Ln(e, m), await ir(e, n))
    return
  }
  e._preflight = void 0
  let g,
    _ = () => sr(e, y, f, () => $n(e, y), t?.sync, h),
    v = t?.sync ? new Promise((e) => (g = e)) : Promise.resolve().then(_),
    y = [p, s, a, m, Date.now(), v.then(() => ir(e, y))]
  if (((e._tx = y), n)) {
    for (let t of e.stores.matches.get()) {
      if (e._tx !== y) break
      t.isFetching && zn(e, t, !1)
    }
    ;(n[0].abort(), Ln(e, n[3], y[3], !0))
  }
  if (e._tx !== y) {
    ;(Ln(e, y[3]), (y[3] = []), g?.(), await ir(e, y))
    return
  }
  ;(e.batch(() => {
    ;(e.stores.status.set(`pending`), e.stores.location.set(a))
  }),
    (h ||
      (!e._committed.length &&
        m[0]?.status !== `success` &&
        !m.some((e) => e._notFound))) &&
      $n(e, y),
    g?.(_()),
    await y[5])
}
async function lr(e, t) {
  let n = e.buildLocation(t)
  for (let t = 0; ; t++) {
    let r = e._committed,
      i = new AbortController(),
      a,
      o,
      s
    try {
      try {
        ;((a = e.matchRoutes(n, { _controller: i })),
          Rn(a),
          (o = (e._preloads ??= new Map()).set(i, a)),
          (s = await Qn(e, n, a, [i, t, r, !0])))
      } finally {
        ;(o && ((o = o.delete(i)), Ln(e, a)), i.abort())
      }
      if (!On(s)) return s[1]
      if (!o || s.length < 3) return
      n = s[2]
    } catch (e) {
      oe(e) || console.error(e)
      return
    }
  }
}
async function ur(e) {
  let t = window.$_TSR,
    n = e.options.serializationAdapters
  ;(n?.length &&
    ((t.t = new Map(n.map((e) => [e.key, e.fromSerializable]))),
    t.buffer.forEach((e) => e())),
    (t.initialized = !0))
  let r = t.router
  ;((e.ssr = { manifest: r.manifest }),
    (e.options.ssr = {
      nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content,
    }))
  let i = r.matches,
    a = new AbortController(),
    o = e._preflight
  ;((e._preflight = a), o?.abort())
  let s = () => e._preflight === a,
    c,
    l,
    u,
    d
  try {
    if ((await kn(e.options.hydrate?.(r.dehydratedData), a.signal), !s()))
      return
    let t = e.history.location
    ;((u = t.href),
      (d = t.state),
      e.updateLatestLocation(),
      (c = e.latestLocation),
      e.stores.location.set(c),
      (l = e.matchRoutes(c, { _controller: a })))
  } catch (t) {
    if ((s() && (e._preflight = void 0), a.abort(t), t !== a.signal)) throw t
  }
  if (!s()) return
  let f = [],
    p,
    m = 0,
    h = (t) => {
      m = Math.min(m, t + 1)
      let n = f.splice(t)
      for (let t of n)
        An(e, t).options.loader &&
          (t.status === `success` || (!t.invalid && `loaderData` in t)) &&
          Un(
            e,
            { ...t, status: `success`, error: void 0, preload: !0 },
            e._cache.get(t.id),
          )
      Ln(e, n)
    },
    g = i.length > l.length ? l.findIndex((e) => e._notFound) + 1 : i.length,
    _ = !1
  for (let t = 0; t < g; t++) {
    let n = l[t],
      r = i[t]
    if (typeof r.i != `string` || Ke(r.i) !== n.id) {
      p ??= t
      break
    }
    m = t + 1
    let a = An(e, n)
    if (
      ((`l` in r ||
        (r.s === `success` && r.e === void 0 && a.options.loader)) &&
        (n.loaderData = r.l),
      (n.status = r.s),
      (n.ssr = r.ssr),
      (a.options.ssr = n.ssr),
      (n.updatedAt = r.u),
      (n.error = r.e),
      (n._notFound ||= r.g),
      n.status === `error` || n.status === `notFound` || n._notFound)
    ) {
      ;((_ = !0),
        f.push(n),
        (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t))
      break
    }
    if (n.status === `pending`) {
      p ??= t
      break
    }
    ;(f.push(n), n.ssr === `data-only` && (p ??= t))
  }
  !_ && f.length === g && g < l.length && (p = g)
  let v = f.map(async (t) => {
      try {
        let n = An(e, t)
        return (
          await (t._notFound
            ? Promise.all([bn(n), bn(n, `notFoundComponent`)])
            : bn(
                n,
                t.status === `error`
                  ? `errorComponent`
                  : t.status === `notFound`
                    ? `notFoundComponent`
                    : void 0,
              )),
          !0
        )
      } catch {
        return !1
      }
    }),
    y = 0
  try {
    for (; y < v.length && (await kn(v[y], a.signal));) y++
  } catch {
    return
  }
  if (!s()) return
  y < f.length && h(y)
  let b = Math.max(
    p === f.length ? f.length + 1 : f.length,
    y < v.length ? y : m,
  )
  for (let t = 0; t < b; t++) {
    let n = l[t],
      r = An(e, n),
      o = l[t - 1]?.context ?? e.options.context ?? {},
      u
    if (r.options.context) {
      try {
        u = n._ctx =
          r.options.context({
            deps: n.loaderDeps,
            params: n.params,
            context: o,
            location: c,
            navigate: (t) => e.navigate({ ...t, _fromLocation: c }),
            buildLocation: e.buildLocation,
            cause: n.cause,
            abortController: a,
            preload: !1,
            matches: l,
            routeId: r.id,
          }) || {}
      } catch {
        if (!s()) return
        if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
          ;((p = Math.min(p ?? t, t)), h(t))
          break
        }
      }
      if (!s()) return
    }
    n.context = { ...o, ...u, ...(f[t] && i[t].b) }
  }
  if ((await Zn(e, [c, l], a.signal, 0, m), !s())) return
  let x = p !== void 0 || f.length < g,
    S = _ && f.length === g ? l : f,
    C = x ? l : S,
    w
  if (x && p !== void 0) {
    let e = C[p]
    ;((w = e.ssr === `data-only` && m > p + 1 ? m : void 0),
      (C = C.slice()),
      (C[p] = {
        ...e,
        status: `pending`,
        ssr: e.ssr === `data-only` && `data-only`,
        _assetEnd: w,
      }))
  }
  let T = () => {
      let t = e.history.location
      return x &&
        !e._tx &&
        t.href === u &&
        t.state === d &&
        e._committed === S &&
        S.length &&
        !a.signal.aborted
        ? a
        : void 0
    },
    E = [
      T,
      (t) => {
        if (e._handoff !== E) return
        e._handoff = void 0
        let n = S.length
        if (!t || !T() || S.some((e, n) => e.id !== t[n]?.id)) {
          a.abort()
          return
        }
        let r = w
        if (r !== void 0) {
          for (let e = n; e < r; e++)
            if (l[e]?.id !== t[e]?.id) {
              r = e > p + 1 ? e : void 0
              break
            }
        }
        let i = S.map((e) => ({ ...e }))
        ;(r !== void 0 && (i[p]._assetEnd = r), Ln(e, t.splice(0, n, ...i)))
        for (let e = n; e < t.length; e++) {
          let n = t[e],
            r = l[e]
          ;(r?.id === n.id && r._ctx && (n._ctx = r._ctx),
            (n.abortController = a))
        }
        return n
      },
    ]
  ;((e._committed = S),
    (e._lifecycleEnd = rn(S)),
    (e._handoff = E),
    (e._preflight = void 0),
    e.batch(() => {
      ;(e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get()))
    }))
}
var dr = Symbol.asyncIterator,
  fr = Symbol.hasInstance,
  pr = Symbol.isConcatSpreadable,
  mr = Symbol.iterator,
  hr = Symbol.match,
  gr = Symbol.matchAll,
  _r = Symbol.replace,
  vr = Symbol.search,
  yr = Symbol.species,
  br = Symbol.split,
  xr = Symbol.toPrimitive,
  Sr = Symbol.toStringTag,
  Cr = Symbol.unscopables,
  wr = {
    [dr]: 0,
    [fr]: 1,
    [pr]: 2,
    [mr]: 3,
    [hr]: 4,
    [gr]: 5,
    [_r]: 6,
    [vr]: 7,
    [yr]: 8,
    [br]: 9,
    [xr]: 10,
    [Sr]: 11,
    [Cr]: 12,
  },
  Tr = {
    0: dr,
    1: fr,
    2: pr,
    3: mr,
    4: hr,
    5: gr,
    6: _r,
    7: vr,
    8: yr,
    9: br,
    10: xr,
    11: Sr,
    12: Cr,
  },
  Er = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  Dr = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  Or = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  }
function P(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  }
}
function kr(e) {
  return P(
    2,
    void 0,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
var Ar = kr(2),
  jr = kr(3),
  Mr = kr(1),
  Nr = kr(0),
  Pr = kr(4),
  Fr = kr(5),
  Ir = kr(6),
  Lr = kr(7),
  Rr = 64,
  zr = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/
function Br(e) {
  switch (e) {
    case `"`:
      return `\\"`
    case `\\`:
      return `\\\\`
    case `
`:
      return `\\n`
    case `\r`:
      return `\\r`
    case `\b`:
      return `\\b`
    case `	`:
      return `\\t`
    case `\f`:
      return `\\f`
    case `<`:
      return `\\x3C`
    case `\u2028`:
      return `\\u2028`
    case `\u2029`:
      return `\\u2029`
    default:
      return
  }
}
function Vr(e) {
  if (e.length >= Rr && !zr.test(e)) return JSON.stringify(e).slice(1, -1)
  let t = ``,
    n = 0,
    r
  for (let i = 0, a = e.length; i < a; i++)
    ((r = Br(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)))
  return (n === 0 ? (t = e) : (t += e.slice(n)), t)
}
function Hr(e) {
  switch (e) {
    case `\\\\`:
      return `\\`
    case `\\"`:
      return `"`
    case `\\n`:
      return `
`
    case `\\r`:
      return `\r`
    case `\\b`:
      return `\b`
    case `\\t`:
      return `	`
    case `\\f`:
      return `\f`
    case `\\x3C`:
      return `<`
    case `\\u2028`:
      return `\u2028`
    case `\\u2029`:
      return `\u2029`
    default:
      return e
  }
}
function Ur(e) {
  return typeof e == `string` && !e.includes(`\\`)
    ? e
    : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Hr)
}
var { toString: Wr } = Object.prototype,
  Gr = { parsing: 1, serialization: 2, deserialization: 3 }
function Kr(e) {
  return `Seroval Error (step: ${Gr[e]})`
}
var qr = (e, t) => Kr(e),
  Jr = class extends Error {
    constructor(e, t) {
      ;(super(qr(e, t)), (this.cause = t))
    }
  },
  Yr = class extends Jr {
    constructor(e) {
      super(`parsing`, e)
    }
  },
  Xr = class extends Jr {
    constructor(e) {
      super(`deserialization`, e)
    }
  }
function Zr(e) {
  return `Seroval Error (specific: ${e})`
}
var Qr = class extends Error {
    constructor(e) {
      ;(super(Zr(1)), (this.value = e))
    }
  },
  $r = class extends Error {
    constructor(e) {
      super(Zr(2))
    }
  },
  ei = class extends Error {
    constructor(e) {
      super(Zr(3))
    }
  },
  ti = class extends Error {
    constructor(e) {
      super(Zr(4))
    }
  },
  ni = class extends Error {
    constructor(e) {
      ;(super(Zr(5)), (this.value = e))
    }
  },
  ri = class extends Error {
    constructor(e) {
      super(Zr(6))
    }
  },
  ii = class extends Error {
    constructor(e) {
      super(Zr(7))
    }
  },
  ai = class extends Error {
    constructor(e) {
      super(Zr(8))
    }
  },
  oi = class extends Error {
    constructor(e) {
      super(Zr(9))
    }
  },
  si = `__SEROVAL_REFS__`,
  ci = new Map(),
  li = new Map()
function ui(e) {
  return ci.has(e)
}
function di(e) {
  return li.has(e)
}
function fi(e) {
  if (ui(e)) return ci.get(e)
  throw new ni(e)
}
function pi(e) {
  if (di(e)) return li.get(e)
  throw new ri(e)
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, si, {
      value: li,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, si, {
        value: li,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, si, {
          value: li,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, si, {
          value: li,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
function mi(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0
}
function hi(e) {
  let t = Dr[mi(e)]
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name }
}
function gi(e, t) {
  let n = hi(e),
    r = Object.getOwnPropertyNames(e)
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o]))))
  return n
}
function _i(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e)
}
function vi(e) {
  switch (e) {
    case 1 / 0:
      return Fr
    case -1 / 0:
      return Ir
  }
  return e === e
    ? Object.is(e, -0)
      ? Pr
      : P(
          0,
          void 0,
          e,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
        )
    : Lr
}
function yi(e) {
  return P(
    1,
    void 0,
    Vr(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function bi(e) {
  return P(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function xi(e) {
  return P(
    4,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Si(e, t) {
  let n = t.valueOf()
  return P(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Ci(e, t, n) {
  return P(
    36,
    e,
    n.toString(),
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function wi(e, t) {
  return P(
    6,
    e,
    void 0,
    Vr(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Ti(e, t) {
  return P(
    17,
    e,
    wr[t],
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Ei(e, t) {
  return P(
    18,
    e,
    Vr(fi(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Di(e, t, n) {
  return P(
    25,
    e,
    n,
    Vr(t),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Oi(e, t, n) {
  return P(
    9,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    void 0,
    void 0,
    _i(t),
    void 0,
  )
}
function ki(e, t) {
  return P(
    21,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  )
}
var Ai = 1e6
function ji(e, t, n) {
  if (t.length > Ai) throw new Qr(t)
  return P(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  )
}
function Mi(e, t, n) {
  if (t.length > Ai) throw new Qr(t)
  return P(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  )
}
function Ni(e, t, n) {
  if (t.byteLength > Ai) throw new Qr(t)
  return P(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  )
}
function Pi(e, t, n) {
  return P(
    13,
    e,
    mi(t),
    void 0,
    Vr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Fi(e, t, n) {
  return P(
    14,
    e,
    mi(t),
    void 0,
    Vr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Ii(e, t) {
  return P(
    7,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function Li(e, t) {
  return P(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function F(e, t) {
  return P(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  )
}
function I(e, t, n) {
  return P(
    31,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t,
    void 0,
    void 0,
    void 0,
  )
}
function Ri(e, t) {
  return P(
    32,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  )
}
function zi(e, t) {
  return P(
    33,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  )
}
function Bi(e, t) {
  return P(
    34,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  )
}
function Vi(e, t, n, r) {
  return P(
    35,
    e,
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    r,
  )
}
var Hi = class {
    constructor(e, t) {
      ;((this.value = e), (this.replacement = t))
    }
  },
  Ui = () => {
    let e = { p: 0, s: 0, f: 0 }
    return (
      (e.p = new Promise((t, n) => {
        ;((e.s = t), (e.f = n))
      })),
      e
    )
  },
  Wi = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 }
          let e = n++,
            r = t.v[e]
          if (e === t.t) throw r
          return { done: e === t.d, value: r }
        },
      }
    return r
  },
  Gi = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 })
        },
      }
    n.on({
      next(e) {
        let t = s.shift()
        ;(t && t.s({ done: !1, value: e }), o.push(e))
      },
      throw(e) {
        let t = s.shift()
        ;(t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e))
      },
      return(e) {
        let t = s.shift()
        ;(t && t.s({ done: !0, value: e }),
          c.finalize(),
          (i = o.length),
          o.push(e))
      },
    })
    let l = {
      [e]() {
        return l
      },
      next() {
        if (i === -1) {
          let e = r++
          if (e >= o.length) {
            let e = t()
            return (s.push(e), e.p)
          }
          return { done: !1, value: o[e] }
        }
        if (r > i) return { done: !0, value: void 0 }
        let e = r++,
          n = o[e]
        if (e !== i) return { done: !1, value: n }
        if (a) throw n
        return { done: !0, value: n }
      },
    }
    return l
  },
  Ki = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n)
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e)
    return r.buffer
  },
  qi = class {
    constructor(e, t, n) {
      ;((this.v = e), (this.t = t), (this.d = n))
    }
  }
function Ji(e) {
  return e instanceof qi
}
function Yi(e, t, n) {
  return new qi(e, t, n)
}
function Xi(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[mr]()
  for (;;)
    try {
      let e = i.next()
      if ((t.push(e.value), e.done)) {
        r = t.length - 1
        break
      }
    } catch (e) {
      ;((n = t.length), (r = n), t.push(e))
      break
    }
  return Yi(t, n, r)
}
var Zi = Wi(mr)
function Qi(e) {
  return Zi(e)
}
var $i = {},
  ea = {},
  ta = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} }
function na(e, t) {
  if (t.has(e))
    throw TypeError(
      `Cannot initialize the same private elements twice on an object`,
    )
}
function ra(e, t) {
  ;(na(e, t), t.add(e))
}
function ia(e, t, n) {
  ;(na(e, t), t.set(e, n))
}
function aa(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t))
    return arguments.length < 3 ? t : n
  throw TypeError(`Private element is not present on this object`)
}
function L(e, t) {
  return e.get(aa(e, t))
}
function oa(e, t, n) {
  return (e.set(aa(e, t), n), n)
}
var sa = new WeakMap(),
  ca = new WeakMap(),
  R = new WeakMap(),
  la = new WeakMap(),
  ua = new WeakMap(),
  da = new WeakSet(),
  fa = class {
    constructor() {
      ;(ra(this, da),
        ia(this, sa, []),
        ia(this, ca, []),
        ia(this, R, !0),
        ia(this, la, !1),
        ia(this, ua, 0))
    }
    on(e) {
      let t = L(R, this),
        n = 0
      if (t) {
        for (; n < L(ua, this) && L(ca, this)[n]; n++);
        if (n === L(ua, this)) {
          var r
          oa(ua, this, ((r = L(ua, this)), r++, r))
        }
        L(ca, this)[n] = e
      }
      return (
        aa(da, this, ma).call(this, e),
        () => {
          if (L(R, this) && t) {
            for (
              t = !1, L(ca, this)[n] = void 0;
              L(ua, this) > 0 && !L(ca, this)[L(ua, this) - 1];
            ) {
              var e
              oa(ua, this, ((e = L(ua, this)), e--, e))
            }
            L(ca, this).length = L(ua, this)
          }
        }
      )
    }
    next(e) {
      L(R, this) &&
        (L(sa, this).push(e), aa(da, this, pa).call(this, e, `next`))
    }
    throw(e) {
      L(R, this) &&
        (L(sa, this).push(e),
        aa(da, this, pa).call(this, e, `throw`),
        oa(R, this, !1),
        oa(la, this, !1),
        (L(ca, this).length = 0))
    }
    return(e) {
      L(R, this) &&
        (L(sa, this).push(e),
        aa(da, this, pa).call(this, e, `return`),
        oa(R, this, !1),
        oa(la, this, !0),
        (L(ca, this).length = 0))
    }
  }
function pa(e, t) {
  for (let r = 0; r < L(ua, this); r++) {
    var n
    ;(n = L(ca, this)[r]) == null || n[t](e)
  }
}
function ma(e) {
  for (let t = 0, n = L(sa, this).length; t < n; t++) {
    let r = L(sa, this)[t]
    !L(R, this) && t === n - 1
      ? e[L(la, this) ? `return` : `throw`](r)
      : e.next(r)
  }
}
function ha(e) {
  return e instanceof fa
}
function ga() {
  return new fa()
}
function _a(e, t) {
  let n = ga(),
    r = e[dr](),
    i = !1,
    a = !1
  t?.push(() => {
    a ||
      i ||
      ((i = !0),
      Promise.resolve()
        .then(() => r.return?.call(r))
        .catch(() => {}))
  })
  async function o() {
    try {
      for (; !i;) {
        let e = await r.next()
        if (i) return
        if (e.done) {
          ;((a = !0), n.return(e.value))
          break
        }
        n.next(e.value)
      }
    } catch (e) {
      ;((a = !0), i || n.throw(e))
    }
  }
  return (o().catch(() => {}), n)
}
var va = Gi(dr, Ui)
function ya(e) {
  return va(e)
}
async function ba(e) {
  try {
    return [1, await e]
  } catch (e) {
    return [0, e]
  }
}
function xa(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
    compactArrayBufferViews: t.compactArrayBufferViews ?? !1,
  }
}
function Sa(e, t) {
  e.marked.add(t)
}
function Ca(e, t) {
  let n = e.refs.size
  return (e.refs.set(t, n), n)
}
function wa(e, t) {
  let n = e.refs.get(t)
  return n == null
    ? { type: 0, value: Ca(e, t) }
    : (Sa(e, n), { type: 1, value: xi(n) })
}
function Ta(e, t) {
  let n = wa(e, t)
  return n.type === 1 ? n : ui(t) ? { type: 2, value: Ei(n.value, t) } : n
}
function Ea(e, t) {
  let n = Ta(e, t)
  if (n.type !== 0) return n.value
  if (t in wr) return Ti(n.value, t)
  throw new Qr(t)
}
function Da(e, t) {
  let n = wa(e, ta[t])
  return n.type === 1
    ? n.value
    : P(
        26,
        n.value,
        t,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
      )
}
function Oa(e) {
  let t = wa(e, $i)
  return t.type === 1
    ? t.value
    : P(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        Ea(e, mr),
        void 0,
        void 0,
        void 0,
      )
}
function ka(e) {
  let t = wa(e, ea)
  return t.type === 1
    ? t.value
    : P(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [Da(e, 1), Ea(e, dr)],
        void 0,
        void 0,
        void 0,
        void 0,
      )
}
function Aa(e, t, n, r) {
  return P(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    _i(t),
    void 0,
  )
}
function ja(e, t, n, r) {
  return P(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    Da(e, 0),
    void 0,
    void 0,
    void 0,
  )
}
function Ma(e, t) {
  if (!e.compactArrayBufferViews) return t
  let n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice().buffer,
    r = t.constructor
  return new r(n)
}
function Na(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`)
  let t = new Uint8Array(e)
  if (typeof t.toBase64 == `function`) return t.toBase64()
  let n = ``
  for (let e = 0, r = t.length; e < r; e++) n += String.fromCharCode(t[e])
  return btoa(n)
}
function Pa(e, t, n) {
  return P(
    19,
    t,
    Na(n),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    Da(e, 5),
    void 0,
    void 0,
    void 0,
  )
}
function Fa(e, t) {
  return { base: xa(e, t), child: void 0 }
}
var Ia = class {
  constructor(e, t) {
    ;((this._p = e), (this.depth = t))
  }
  parse(e) {
    return no(this._p, this.depth, e)
  }
}
async function La(e, t, n) {
  let r = []
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await no(e, t, n[i])) : (r[i] = 0)
  return r
}
async function Ra(e, t, n, r) {
  return Oi(n, r, await La(e, t, r))
}
async function za(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = []
  for (let n = 0, o = r.length; n < o; n++)
    (i.push(Vr(r[n][0])), a.push(await no(e, t, r[n][1])))
  return (
    mr in n &&
      (i.push(Ea(e.base, mr)), a.push(Li(Oa(e.base), await no(e, t, Xi(n))))),
    dr in n &&
      (i.push(Ea(e.base, dr)), a.push(F(ka(e.base), await no(e, t, _a(n))))),
    Sr in n && (i.push(Ea(e.base, Sr)), a.push(yi(n[Sr]))),
    pr in n && (i.push(Ea(e.base, pr)), a.push(n[pr] ? Ar : jr)),
    { k: i, v: a }
  )
}
async function Ba(e, t, n, r, i) {
  return Aa(n, r, i, await za(e, t, r))
}
async function Va(e, t, n, r) {
  return ki(n, await no(e, t, r.valueOf()))
}
async function Ha(e, t, n, r) {
  return ((r = Ma(e.base, r)), ji(n, r, await no(e, t, r.buffer)))
}
async function Ua(e, t, n, r) {
  return ((r = Ma(e.base, r)), Mi(n, r, await no(e, t, r.buffer)))
}
async function Wa(e, t, n, r) {
  return ((r = Ma(e.base, r)), Ni(n, r, await no(e, t, r.buffer)))
}
async function Ga(e, t, n, r) {
  let i = gi(r, e.base.features)
  return Pi(n, r, i ? await za(e, t, i) : void 0)
}
async function Ka(e, t, n, r) {
  let i = gi(r, e.base.features)
  return Fi(n, r, i ? await za(e, t, i) : void 0)
}
async function qa(e, t, n, r) {
  let i = [],
    a = []
  for (let [n, o] of r.entries())
    (i.push(await no(e, t, n)), a.push(await no(e, t, o)))
  return ja(e.base, n, i, a)
}
async function Ja(e, t, n, r) {
  let i = []
  for (let n of r.keys()) i.push(await no(e, t, n))
  return Ii(n, i)
}
async function Ya(e, t, n, r) {
  let i = e.base.plugins
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a]
      if (o.parse.async && o.test(r))
        return Di(n, o.tag, await o.parse.async(r, new Ia(e, t), { id: n }))
    }
}
async function Xa(e, t, n, r) {
  let [i, a] = await ba(r)
  return P(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await no(e, t, a),
    void 0,
    void 0,
    void 0,
  )
}
function Za(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        ;(Sa(this.base, t),
          no(this, e, n).then(
            (e) => {
              a.push(Ri(t, e))
            },
            (e) => {
              ;(i(e), o())
            },
          ))
      },
      throw: (n) => {
        ;(Sa(this.base, t),
          no(this, e, n).then(
            (e) => {
              ;(a.push(zi(t, e)), r(a), o())
            },
            (e) => {
              ;(i(e), o())
            },
          ))
      },
      return: (n) => {
        ;(Sa(this.base, t),
          no(this, e, n).then(
            (e) => {
              ;(a.push(Bi(t, e)), r(a), o())
            },
            (e) => {
              ;(i(e), o())
            },
          ))
      },
    })
}
async function Qa(e, t, n, r) {
  return I(n, Da(e.base, 4), await new Promise(Za.bind(e, t, n, r)))
}
async function $a(e, t, n, r) {
  let i = []
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await no(e, t, r.v[n])
  return Vi(n, i, r.t, r.d)
}
async function eo(e, t, n, r) {
  if (Array.isArray(r)) return Ra(e, t, n, r)
  if (ha(r)) return Qa(e, t, n, r)
  if (Ji(r)) return $a(e, t, n, r)
  let i = r.constructor
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r)
    i = e === null ? void 0 : e.constructor
  }
  if (i === Hi) return no(e, t, r.replacement)
  let a = await Ya(e, t, n, r)
  if (a) return a
  switch (i) {
    case Object:
      return Ba(e, t, n, r, !1)
    case void 0:
      return Ba(e, t, n, r, !0)
    case Date:
      return Si(n, r)
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return Ga(e, t, n, r)
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Va(e, t, n, r)
    case ArrayBuffer:
      return Pa(e.base, n, r)
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ha(e, t, n, r)
    case DataView:
      return Wa(e, t, n, r)
    case Map:
      return qa(e, t, n, r)
    case Set:
      return Ja(e, t, n, r)
  }
  if (i === Promise || r instanceof Promise) return Xa(e, t, n, r)
  let o = e.base.features
  if (o & 32 && i === RegExp) return wi(n, r)
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Ua(e, t, n, r)
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return Ka(e, t, n, r)
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return Ci(n, 0, r)
      case Temporal.Duration:
        return Ci(n, 1, r)
      case Temporal.PlainDate:
        return Ci(n, 2, r)
      case Temporal.PlainDateTime:
        return Ci(n, 3, r)
      case Temporal.PlainMonthDay:
        return Ci(n, 4, r)
      case Temporal.PlainTime:
        return Ci(n, 5, r)
      case Temporal.PlainYearMonth:
        return Ci(n, 6, r)
      case Temporal.ZonedDateTime:
        return Ci(n, 7, r)
    }
  if (r instanceof Error) return Ga(e, t, n, r)
  if (mr in r || dr in r) return Ba(e, t, n, r, !!i)
  throw new Qr(r)
}
async function to(e, t, n) {
  let r = Ta(e.base, n)
  if (r.type !== 0) return r.value
  let i = await Ya(e, t, r.value, n)
  if (i) return i
  throw new Qr(n)
}
async function no(e, t, n) {
  if (t >= e.base.depthLimit) throw new oi(e.base.depthLimit)
  switch (typeof n) {
    case `boolean`:
      return n ? Ar : jr
    case `undefined`:
      return Mr
    case `string`:
      return yi(n)
    case `number`:
      return vi(n)
    case `bigint`:
      return bi(n)
    case `object`:
      if (n) {
        let r = Ta(e.base, n)
        return r.type === 0 ? await eo(e, t + 1, r.value, n) : r.value
      }
      return Nr
    case `symbol`:
      return Ea(e.base, n)
    case `function`:
      return to(e, t, n)
    default:
      throw new Qr(n)
  }
}
async function ro(e, t) {
  try {
    return await no(e, 0, t)
  } catch (e) {
    throw e instanceof Yr ? e : new Yr(e)
  }
}
function io(e) {
  return e
}
function ao(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n]
    e.has(r) || (e.add(r), r.extends && ao(e, r.extends))
  }
}
function oo(e) {
  if (e) {
    let t = new Set()
    return (ao(t, e), [...t])
  }
}
function so(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array
    case `Int16Array`:
      return Int16Array
    case `Int32Array`:
      return Int32Array
    case `Uint8Array`:
      return Uint8Array
    case `Uint16Array`:
      return Uint16Array
    case `Uint32Array`:
      return Uint32Array
    case `Uint8ClampedArray`:
      return Uint8ClampedArray
    case `Float32Array`:
      return Float32Array
    case `Float64Array`:
      return Float64Array
    case `BigInt64Array`:
      return BigInt64Array
    case `BigUint64Array`:
      return BigUint64Array
    default:
      throw new ii(e)
  }
}
function co(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1
    default:
      return !0
  }
}
function lo(e) {
  switch (e) {
    case dr:
    case pr:
    case Sr:
    case mr:
      return !0
    default:
      return !1
  }
}
var uo = 1e6,
  fo = 512,
  po = 1e4,
  mo = 2e4
function z(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e)
    case 1:
      return Object.preventExtensions(e)
    case 2:
      return Object.seal(e)
    default:
      return e
  }
}
var B = 1e3
function ho(e, t) {
  let n = t.maxBase64Length ?? uo
  if (!Number.isSafeInteger(n) || n < 0)
    throw RangeError(`maxBase64Length must be a non-negative safe integer`)
  let r = t.refs || new Map()
  return (
    `types` in r || Object.assign(r, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: r,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || B,
      maxBase64Length: n,
    }
  )
}
function go(e) {
  return { mode: 2, base: ho(2, e), child: void 0 }
}
var _o = class {
  constructor(e, t) {
    ;((this._p = e), (this.depth = t))
  }
  deserialize(e) {
    return V(this._p, this.depth, e)
  }
}
function vo(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new ai({ t: 4, i: t })
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t)
}
function yo(e) {
  return (
    !!e &&
    (typeof e == `object` || typeof e == `function`) &&
    `then` in e &&
    typeof e.then == `function`
  )
}
function bo(e, t, n) {
  return (vo(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n)
}
function xo(e, t, n) {
  return (vo(e.base, t), e.base.refs.set(t, n), n)
}
function So(e, t, n) {
  return e.mode === 1 ? bo(e, t, n) : xo(e, t, n)
}
function Co(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n]
  throw new ai(e)
}
function wo(e, t) {
  return So(e, t.i, pi(Ur(t.s)))
}
function To(e, t) {
  if (!Array.isArray(t)) throw new ai(e)
}
function Eo(e, t, n) {
  let r = n.a
  To(n, r)
  let i = r.length,
    a = So(e, n.i, Array(i))
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = V(e, t, o)))
  return (z(a, n.o), a)
}
function Do(e, t, n) {
  co(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      })
}
function Oo(e, t, n, r, i) {
  if (typeof r == `string`) Do(n, Ur(r), V(e, t, i))
  else {
    let a = V(e, t, r)
    switch (typeof a) {
      case `string`:
        Do(n, a, V(e, t, i))
        break
      case `symbol`:
        lo(a) && (n[a] = V(e, t, i))
        break
      default:
        throw new ai(r)
    }
  }
}
function ko(e, t, n) {
  e.base.refs.types.set(t, n)
}
function Ao(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new ai(t)
}
function jo(e, t, n, r) {
  let i = n.k
  if ((To(n, i), To(n, n.v), i.length > 0))
    for (let a = 0, o = n.v, s = i.length; a < s; a++) Oo(e, t, r, i[a], o[a])
  return r
}
function Mo(e, t, n) {
  let r = So(e, n.i, n.t === 10 ? {} : Object.create(null))
  return (jo(e, t, n.p, r), z(r, n.o), r)
}
function No(e, t) {
  return So(e, t.i, new Date(t.s))
}
function Po(e, t) {
  if (!(e.base.features & 64)) throw new $r(t)
  let n
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s)
      break
    case 1:
      n = Temporal.Duration.from(t.s)
      break
    case 2:
      n = Temporal.PlainDate.from(t.s)
      break
    case 3:
      n = Temporal.PlainDateTime.from(t.s)
      break
    case 4:
      n = Temporal.PlainMonthDay.from(t.s)
      break
    case 5:
      n = Temporal.PlainTime.from(t.s)
      break
    case 6:
      n = Temporal.PlainYearMonth.from(t.s)
      break
    case 7:
      n = Temporal.ZonedDateTime.from(t.s)
      break
    default:
      throw new ai(t)
  }
  return So(e, t.i, n)
}
function Fo(e, t) {
  if (e.base.features & 32) {
    let n = Ur(t.c)
    if (n.length > mo) throw new ai(t)
    return So(e, t.i, new RegExp(n, t.m))
  }
  throw new $r(t)
}
function Io(e, t, n) {
  let r = So(e, n.i, new Set())
  To(n, n.a)
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(V(e, t, a[i]))
  return r
}
function Lo(e, t, n) {
  let r = So(e, n.i, new Map())
  ;(To(n, n.e.k), To(n, n.e.v))
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(V(e, t, a[i]), V(e, t, o[i]))
  return r
}
function Ro(e, t) {
  if (typeof t.s != `string`) throw new ai(t)
  if (t.s.length > e.base.maxBase64Length)
    throw RangeError(
      `ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`,
    )
  let n = Ur(t.s),
    r
  if (n.length < fo || typeof Buffer > `u`) r = Ki(n)
  else {
    let e = atob(n)
    ;((r = new ArrayBuffer(e.length)), Buffer.from(r).write(e, `latin1`))
  }
  return So(e, t.i, r)
}
function zo(e, t, n) {
  let r = so(n.c),
    i = V(e, t, n.f)
  if (!(i instanceof ArrayBuffer)) throw new ai(n)
  let a = n.b ?? 0
  if (a < 0 || a > i.byteLength) throw new ai(n)
  return So(e, n.i, new r(i, a, n.l))
}
function Bo(e, t, n) {
  let r = V(e, t, n.f)
  if (!(r instanceof ArrayBuffer)) throw new ai(n)
  let i = n.b ?? 0
  if (i < 0 || i > r.byteLength) throw new ai(n)
  return So(e, n.i, new DataView(r, i, n.l))
}
function Vo(e, t, n, r) {
  if (n.p) {
    let i = jo(e, t, n.p, {})
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
  }
  return r
}
function Ho(e, t, n) {
  return Vo(e, t, n, So(e, n.i, AggregateError([], Ur(n.m))))
}
function Uo(e, t, n) {
  let r = Co(n, Or, n.s)
  return Vo(e, t, n, So(e, n.i, new r(Ur(n.m))))
}
function Wo(e, t, n) {
  let r = Ui(),
    i = So(e, n.i, r.p),
    a = V(e, t, n.f)
  if (yo(a)) throw new ai(n.f)
  return (n.s ? r.s(a) : r.f(a), i)
}
function Go(e, t, n) {
  return So(e, n.i, Object(V(e, t, n.f)))
}
function Ko(e, t, n) {
  let r = e.base.plugins
  if (r) {
    let i = Ur(n.c)
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a]
      if (o.tag === i)
        return So(e, n.i, o.deserialize(n.s, new _o(e, t), { id: n.i }))
    }
  }
  throw new ei(n.c)
}
function qo(e, t) {
  let n = So(e, t.i, So(e, t.s, Ui()).p)
  return (ko(e, t.s, 22), n)
}
function Jo(e, t, n) {
  let r = e.base.refs.get(n.i)
  if (r) {
    Ao(e, n, n.i, 22)
    let i = V(e, t, n.a[1])
    if (yo(i)) throw new ai(n.a[1])
    n.t === 23 ? r.s(i) : r.f(i)
    return
  }
  throw new ti(`Promise`)
}
function Yo(e, t, n) {
  V(e, t, n.a[0])
  let r = V(e, t, n.a[1])
  if (!Ji(r)) throw new ai(n.a[1])
  return Qi(r)
}
function Xo(e, t, n) {
  V(e, t, n.a[0])
  let r = V(e, t, n.a[1])
  if (!ha(r)) throw new ai(n.a[1])
  return ya(r)
}
function Zo(e, t, n) {
  let r = So(e, n.i, ga())
  ko(e, n.i, 31)
  let i = n.a
  To(n, i)
  let a = i.length
  if (a) for (let n = 0; n < a; n++) V(e, t, i[n])
  return r
}
function Qo(e, t, n) {
  let r = e.base.refs.get(n.i)
  if (r) {
    ;(Ao(e, n, n.i, 31), r.next(V(e, t, n.f)))
    return
  }
  throw new ti(`Stream`)
}
function $o(e, t, n) {
  let r = e.base.refs.get(n.i)
  if (r) {
    ;(Ao(e, n, n.i, 31), r.throw(V(e, t, n.f)))
    return
  }
  throw new ti(`Stream`)
}
function es(e, t, n) {
  let r = e.base.refs.get(n.i)
  if (r) {
    ;(Ao(e, n, n.i, 31), r.return(V(e, t, n.f)))
    return
  }
  throw new ti(`Stream`)
}
function ts(e, t, n) {
  V(e, t, n.f)
}
function ns(e, t, n) {
  V(e, t, n.a[1])
}
function rs(e, t) {
  return Number.isInteger(e) && e >= -1 && e < t
}
function is(e, t, n) {
  To(n, n.a)
  let r = n.a.length
  if (!(rs(n.s, r) && rs(n.l, r))) throw new ai(n)
  let i = So(e, n.i, Yi([], n.s, n.l))
  for (let a = 0; a < r; a++) i.v[a] = V(e, t, n.a[a])
  return i
}
function V(e, t, n) {
  if (t > e.base.depthLimit) throw new oi(e.base.depthLimit)
  switch (((t += 1), n.t)) {
    case 2:
      return Co(n, Er, n.s)
    case 0:
      return Number(n.s)
    case 1:
      return Ur(String(n.s))
    case 3:
      if (String(n.s).length > po) throw new ai(n)
      return BigInt(n.s)
    case 4:
      return e.base.refs.get(n.i)
    case 18:
      return wo(e, n)
    case 9:
      return Eo(e, t, n)
    case 10:
    case 11:
      return Mo(e, t, n)
    case 5:
      return No(e, n)
    case 6:
      return Fo(e, n)
    case 7:
      return Io(e, t, n)
    case 8:
      return Lo(e, t, n)
    case 19:
      return Ro(e, n)
    case 16:
    case 15:
      return zo(e, t, n)
    case 20:
      return Bo(e, t, n)
    case 14:
      return Ho(e, t, n)
    case 13:
      return Uo(e, t, n)
    case 12:
      return Wo(e, t, n)
    case 17:
      return Co(n, Tr, n.s)
    case 21:
      return Go(e, t, n)
    case 25:
      return Ko(e, t, n)
    case 22:
      return qo(e, n)
    case 23:
    case 24:
      return Jo(e, t, n)
    case 28:
      return Yo(e, t, n)
    case 30:
      return Xo(e, t, n)
    case 31:
      return Zo(e, t, n)
    case 32:
      return Qo(e, t, n)
    case 33:
      return $o(e, t, n)
    case 34:
      return es(e, t, n)
    case 27:
      return ts(e, t, n)
    case 29:
      return ns(e, t, n)
    case 35:
      return is(e, t, n)
    case 36:
      return Po(e, n)
    default:
      throw new $r(n)
  }
}
function as(e, t) {
  try {
    return V(e, 0, t)
  } catch (e) {
    throw new Xr(e)
  }
}
function os(e, t) {
  let n = oo(t.plugins)
  return as(
    go({
      maxBase64Length: t.maxBase64Length,
      plugins: n,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  )
}
async function ss(e, t = {}) {
  let n = oo(t.plugins),
    r = Fa(1, {
      compactArrayBufferViews: t.compactArrayBufferViews,
      plugins: n,
      disabledFeatures: t.disabledFeatures,
    })
  return { t: await ro(r, e), f: r.base.features, m: Array.from(r.base.marked) }
}
function cs(e) {
  return io({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n) {
        return { v: n.parse(e.toSerializable(t)) }
      },
      async async(t, n) {
        return { v: await n.parse(e.toSerializable(t)) }
      },
      stream(t, n) {
        return { v: n.parse(e.toSerializable(t)) }
      },
    },
    serialize: void 0,
    deserialize(t, n) {
      return e.fromSerializable(n.deserialize(t.v))
    },
  })
}
var ls = io({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) }
      },
      async async(e, t) {
        return { message: await t.parse(e.message) }
      },
      stream(e, t) {
        return { message: t.parse(e.message) }
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message))
    },
  }),
  us = class {
    constructor(e, t) {
      ;((this.stream = e), (this.hint = t?.hint ?? `binary`))
    }
  }
function ds(e) {
  let t = []
  for (let n = 0; n < e.length; n += 32768)
    t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)))
  return btoa(t.join(``))
}
var fs = new TextDecoder(`utf-8`, { fatal: !0, ignoreBOM: !0 })
function ps(e) {
  try {
    return `t` + fs.decode(e)
  } catch {
    return `b` + ds(e)
  }
}
function ms(e, t, n) {
  n?.throwIfAborted()
  let r = ga(),
    i = e.getReader(),
    a = !0,
    o = () => {
      ;((a = !1), n?.removeEventListener(`abort`, c), i.releaseLock())
    },
    s = (e) => (a ? (i.cancel(e).catch(() => {}), o(), !0) : !1),
    c = () => {
      s(n.reason) && r.throw(n.reason)
    }
  return (
    n?.addEventListener(`abort`, c),
    (async () => {
      try {
        for (; a;) {
          let { done: e, value: n } = await i.read()
          if (!a) return
          if (e) {
            ;(o(), r.return(void 0))
            return
          }
          r.next(t(n))
        }
      } catch (e) {
        s(e) && r.throw(e)
      }
    })(),
    [r, s]
  )
}
function hs(e) {
  return io({
    tag: `tss/RawStream`,
    test: (e) => e instanceof us,
    parse: {
      async: async (t, n) => {
        let r = await n.parse(t.hint === `text`),
          [i] = ms(t.stream, t.hint === `text` ? ps : ds, e)
        return { text: r, stream: await n.parse(i) }
      },
    },
    serialize: void 0,
    deserialize: void 0,
  })
}
var gs = hs(),
  _s = {},
  vs = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e)
            } catch {}
          },
          throw(e) {
            t.error(e)
          },
          return() {
            try {
              t.close()
            } catch {}
          },
        })
      },
    }),
  ys = io({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === _s
    },
    parse: {
      sync() {
        return _s
      },
      async async() {
        return await Promise.resolve(_s)
      },
      stream() {
        return _s
      },
    },
    serialize() {
      return vs.toString()
    },
    deserialize() {
      return _s
    },
  })
async function bs(e, t) {
  try {
    for (;;) {
      let n = await t.read()
      if (n.done) {
        ;(e.return(n.value), t.releaseLock())
        break
      }
      e.next(n.value)
    }
  } catch (n) {
    ;(t.releaseLock(), e.throw(n))
  }
}
function xs(e) {
  ;(e.cancel().catch(() => {}), e.releaseLock())
}
function Ss(e) {
  let t = ga(),
    n = e.getReader(),
    r = xs.bind(null, n)
  return (bs(t, n).catch(r), [t, r])
}
var Cs = io({
  tag: `seroval/plugins/web/ReadableStream`,
  extends: [ys],
  test(e) {
    return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream
  },
  parse: {
    sync(e, t) {
      return { factory: t.parse(_s), stream: t.parse(ga()) }
    },
    async async(e, t) {
      return { factory: await t.parse(_s), stream: await t.parse(Ss(e)[0]) }
    },
    stream(e, t) {
      let [n, r] = Ss(e)
      return (t.addCleanup(r), { factory: t.parse(_s), stream: t.parse(n) })
    },
  },
  serialize(e, t) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`
  },
  deserialize(e, t) {
    let n = t.deserialize(e.stream)
    if (!n || typeof n != `object` || !ha(n))
      throw Error(`Expected a stream source.`)
    return vs(n)
  },
})
function ws(e) {
  return [ls, e ? hs(e) : gs, Cs]
}
;[...ws()]
function Ts(e) {
  return io({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize: void 0,
    deserialize(t, n) {
      return e(n.deserialize(t.streamId))
    },
  })
}
function Es(e) {
  return [...(Ge()?.serializationAdapters?.map(cs) ?? []), ...e]
}
function Ds(e) {
  return Es(ws(e))
}
var Os = new TextDecoder(),
  ks = new Uint8Array(),
  As = new ByteLengthQueuingStrategy({ highWaterMark: 0 })
function js(e) {
  let t = e.getReader(),
    n = new Map(),
    r = 0,
    i,
    a,
    o = () => {
      ;(i?.(), (i = void 0))
    },
    s = (e, t) => {
      let n = e[1]
      ;((e[1] = !1), n && (t === 1 ? n.close() : n.error(t[0])))
    },
    c = new ReadableStream({
      start(e) {
        a = e
      },
      pull: o,
      cancel(e) {
        let i = [e === void 0 ? Error(`Framed response cancelled`) : e]
        ;((r = i), o(), t.cancel(e).catch(() => {}))
        for (let e of n.values()) s(e, i)
      },
    })
  function l(e) {
    let t = n.get(e)
    if (t) return t
    if (n.size >= 1024) throw Error(`Too many raw streams`)
    let i,
      a = [
        new ReadableStream(
          {
            start(e) {
              i = e
            },
            cancel() {
              a[1] !== !1 && (a[1] = null)
            },
          },
          As,
        ),
        i,
      ]
    return (n.set(e, a), r !== 0 && s(a, r), a)
  }
  function u(e) {
    if (e === 0 || e >>> 0 !== e) throw RangeError(`Invalid raw stream ID`)
    return l(e)[0]
  }
  return (
    (async () => {
      let e = ks,
        o = 0
      async function c() {
        for (; o === e.byteLength;) {
          ;((e = ks), (o = 0))
          let n = await t.read()
          if (r !== 0 || n.done) return !1
          e = n.value
        }
        return !0
      }
      async function u(t, n) {
        if (t === 0) return ks
        if (!(await c())) {
          if (n) return
          throw Error(`Incomplete frame`)
        }
        if (e.byteLength - o >= t) {
          let n = e.subarray(o, o + t)
          return ((o += t), o === e.byteLength && ((e = ks), (o = 0)), n)
        }
        let r = new Uint8Array(t),
          i = 0
        for (; i < t;) {
          if (!(await c())) throw Error(`Incomplete frame`)
          let n = Math.min(t - i, e.byteLength - o)
          ;(r.set(e.subarray(o, o + n), i), (o += n), (i += n))
        }
        return (o === e.byteLength && ((e = ks), (o = 0)), r)
      }
      try {
        for (; r === 0;) {
          let e = await u(9, !0)
          if (r !== 0) return
          if (!e) {
            for (let e of n.values())
              if (e[1]) throw Error(`Incomplete raw stream`)
            ;((r = 1), a.close())
            return
          }
          let t = e[0],
            o = ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            c = ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0
          if (
            ((e = ks),
            t > 3 ||
              (t === 0) != (o === 0) ||
              c > 16777216 ||
              (t === 2 && c !== 0))
          )
            throw Error(`Invalid frame`)
          let d = t === 0 ? void 0 : l(o)
          if (d?.[1] === !1) throw Error(`Raw stream already ended`)
          let f = await u(c)
          if (r !== 0) return
          if (!d) {
            let e = Os.decode(f)
            for (f = ks, a.enqueue(e); r === 0 && a.desiredSize <= 0;)
              await new Promise((e) => {
                i = e
              })
            continue
          }
          if (t === 1) {
            let e = d[1]
            if (e) {
              if (-e.desiredSize > 134217728) {
                ;(e.error(Error(`Raw stream ${o} has too many unread bytes`)),
                  (d[1] = null),
                  (f = ks))
                continue
              }
              let t = f.byteLength * 4 < f.buffer.byteLength ? f.slice() : f
              ;((f = ks), e.enqueue(t))
            }
          } else s(d, t === 2 ? 1 : [Error(Os.decode(f))])
        }
      } catch (e) {
        if (r === 0) {
          let i = [e]
          ;((r = i), t.cancel(e).catch(() => {}), a.error(e))
          for (let e of n.values()) s(e, i)
        }
      } finally {
        ;((e = ks), t.releaseLock())
      }
    })(),
    [c, u]
  )
}
var Ms = Symbol.for(`TSR_DEFERRED_PROMISE`)
function Ns(e, t) {
  let n = e
  return n[Ms]
    ? n
    : ((n[Ms] = { status: `pending` }),
      n
        .then((e) => {
          ;((n[Ms].status = `success`), (n[Ms].data = e))
        })
        .catch((e) => {
          ;((n[Ms].status = `error`),
            (n[Ms].error = {
              data: (t?.serializeError ?? en)(e),
              __isServerError: !0,
            }))
        }),
      n)
}
function Ps(e, t) {
  if (e) return typeof e == `string` ? e : e[t]
}
function Fs(e) {
  return e?.scriptFormat ?? `module`
}
function Is(e, t, n) {
  let r = Ls(t),
    i = Ps(n, `script`) ?? r.crossOrigin
  return {
    ...(Fs(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  }
}
function Ls(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e
}
function Rs(e, t) {
  if (t.length === 0) return
  if (t.length === 1) {
    e.push(t[0])
    return
  }
  let n = new Set()
  for (let r of t) {
    let t = JSON.stringify(r)
    n.has(t) || (n.add(t), e.push(r))
  }
}
function zs(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e
}
function Bs(e, t, n, r) {
  let i = Sn(e),
    a = [],
    o = []
  for (let e of i)
    for (let t of Array.isArray(e.scripts) ? e.scripts : []) {
      if (!t) continue
      let { children: e, ...i } = t
      a.push({ tag: `script`, attrs: { ...i, ...r, nonce: n }, children: e })
    }
  if (t)
    for (let e of i)
      for (let r of t.routes[e.routeId]?.scripts ?? [])
        o.push({
          tag: `script`,
          attrs: { ...r.attrs, nonce: n },
          children: r.children,
        })
  return [a, o]
}
function Vs([e, t], n) {
  return n ? [...n.before, ...e, ...t, n.boundary] : [...e, ...t]
}
function Hs(e) {
  return e
}
var Us
function Ws(e, t, n) {
  try {
    return os(e, t)
  } catch (e) {
    throw (Ks(n), e)
  }
}
async function Gs(e) {
  e.length > 0 && (await Promise.allSettled(e), (e.length = 0))
}
function Ks(e) {
  for (let t of e) t.catch(() => {})
  e.length = 0
}
var qs = Object.prototype.hasOwnProperty
function Js(e) {
  for (let t in e) if (qs.call(e, t)) return !0
  return !1
}
async function Ys(e, t, n) {
  Us ||= Ds()
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData,
    o = new Headers(r.headers)
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a || o.set(`accept`, `${We}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a) throw Error(`FormData is not supported with GET requests`)
    let t = await Xs(r)
    if (t !== void 0) {
      let n = Ot({ payload: t })
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`)
    }
  }
  let s
  return (
    r.method === `POST` &&
      ((s = await Qs(r)),
      typeof s == `string` && o.set(`content-type`, `application/json`)),
    $s(() => i(e, { method: r.method, headers: o, signal: r.signal, body: s }))
  )
}
async function Xs(e) {
  let t
  return (
    e.data !== void 0 && (t = { data: e.data }),
    e.context && Js(e.context) && ((t ??= {}).context = e.context),
    t ? Zs(t, e.signal) : void 0
  )
}
async function Zs(e, t) {
  t?.throwIfAborted()
  let n
  try {
    n = await ss(e, { plugins: t ? Ds(t) : Us })
  } finally {
    t?.throwIfAborted()
  }
  return JSON.stringify(n)
}
async function Qs(e) {
  if (e.data instanceof FormData) {
    let t
    return (
      e.context && Js(e.context) && (t = await Zs(e.context, e.signal)),
      t !== void 0 && e.data.set(He, t),
      e.data
    )
  }
  return Xs(e)
}
async function $s(e) {
  let t
  try {
    t = await e()
  } catch (e) {
    if (e instanceof Response) t = e
    else throw e
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t
  let n = t.headers.get(`content-type`)
  if ((n || ve(), t.headers.get(`x-tss-serialized`))) {
    let e
    if (n.includes(`application/x-tss-framed`)) {
      let r = /;\s*v=(\d+)/.exec(n)?.[1]
      if (r && +r != 1) throw Error(`Unsupported framed protocol version ${r}`)
      if (!t.body) throw Error(`No response body for framed response`)
      let [i, a] = js(t.body)
      e = await ec(i, [Ts(a), ...Us])
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = []
      ;((e = Ws(n, { plugins: Us }, r)), await Gs(r))
    }
    if ((e || ve(), e instanceof Error)) throw e
    return e
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = ge(e)
    if (n) throw n
    if (oe(e)) throw e
    return e
  }
  if (!t.ok) throw Error(await t.text())
  return t
}
async function ec(e, t) {
  let n = e.getReader(),
    r = { refs: new Map(), plugins: t },
    i = (e) => {
      n.cancel(e).catch(() => {})
    },
    a,
    o = []
  try {
    let e = await n.read()
    if (e.done) throw Error(`Stream ended before first object`)
    a = Ws(JSON.parse(e.value), r, o)
  } catch (e) {
    throw (i(e), n.releaseLock(), e)
  }
  return (
    (async () => {
      let e = []
      try {
        for (;;) {
          let t = await n.read()
          if (t.done) return
          ;(Ws(JSON.parse(t.value), r, e), Ks(e))
        }
      } catch (e) {
        ;(i(e), console.error(`Stream processing error:`, e))
      } finally {
        n.releaseLock()
      }
    })(),
    await Gs(o),
    a
  )
}
function tc(e) {
  let t = `/_serverFn/` + e
  return Object.assign(
    (...e) => {
      let n = Ge()?.serverFns?.fetch
      return Ys(t, e, n ?? fetch)
    },
    { url: t, serverFnMeta: { id: e }, [Ue]: !0 },
  )
}
var nc = Hs({
    key: `$TSS/serverfn`,
    test: (e) => (typeof e != `function` || !(Ue in e) ? !1 : !!e[Ue]),
    toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
    fromSerializable: ({ functionId: e }) => tc(e),
  }),
  H = a(l(), 1),
  U = x()
function rc({ promise: e }) {
  if (be) return be(e)
  let t = Ns(e)
  if (t[Ms].status === `pending`) throw t
  if (t[Ms].status === `error`) throw t[Ms].error
  return t[Ms].data
}
function ic(e) {
  let t = (0, U.jsx)(ac, { ...e })
  return e.fallback
    ? (0, U.jsx)(H.Suspense, { fallback: e.fallback, children: t })
    : t
}
function ac(e) {
  let t = rc(e)
  return e.children(t)
}
var oc = class extends H.Component {
  constructor(...e) {
    ;(super(...e),
      (this.state = { error: 0 }),
      (this.reset = () => {
        this.setState({ error: 0 })
      }))
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey()
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: 0 }
      : { resetKey: n }
  }
  static getDerivedStateFromError(e) {
    return { error: [e] }
  }
  componentDidCatch(e, t) {
    this.props.onCatch?.(e, t)
  }
  render() {
    let e = this.state.error
    return e
      ? H.createElement(this.props.errorComponent ?? sc, {
          error: e[0],
          reset: this.reset,
        })
      : this.props.children
  }
}
function sc({ error: e }) {
  let [t, n] = H.useState(!1)
  return (0, U.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, U.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, U.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, U.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, U.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, U.jsx)(`div`, {
            children: (0, U.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e?.message
                ? (0, U.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  })
}
function cc({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  }
  function r(e, t, n) {
    let r = t.depsTail
    if (r !== void 0 && r.dep === e) return
    let i = r === void 0 ? t.deps : r.nextDep
    if (i !== void 0 && i.dep === e) {
      ;((i.version = n), (t.depsTail = i))
      return
    }
    let a = e.subsTail
    if (a !== void 0 && a.version === n && a.sub === t) return
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        })
    ;(i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o))
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    )
  }
  function a(e) {
    let n = e.nextSub,
      r
    top: do {
      let i = e.sub,
        a = i.flags
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs
        if (t !== void 0) {
          let i = (e = t).nextSub
          i !== void 0 && ((r = { value: n, prev: r }), (n = i))
          continue
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub
        continue
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub
          continue top
        }
      break
    } while (!0)
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1
    top: do {
      let o = t.dep,
        c = o.flags
      if (n.flags & 16) a = !0
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs
          ;(e.nextSub !== void 0 && s(e), (a = !0))
        }
      } else if ((c & 33) == 33) {
        ;((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i)
        continue
      }
      if (!a) {
        let e = t.nextDep
        if (e !== void 0) {
          t = e
          continue
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            ;(o && s(i), (n = t.sub))
            continue
          }
          a = !1
        } else n.flags &= -33
        n = t.sub
        let c = t.nextDep
        if (c !== void 0) {
          t = c
          continue top
        }
      }
      return a
    } while (!0)
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags
      ;(r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n))
    } while ((e = e.nextSub) !== void 0)
  }
  function c(e, t) {
    let n = t.depsTail
    for (; n !== void 0;) {
      if (n === e) return !0
      n = n.prevDep
    }
    return !1
  }
}
function lc(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  }
}
var uc = [],
  dc = 0,
  {
    link: fc,
    unlink: pc,
    propagate: mc,
    checkDirty: hc,
    shallowPropagate: gc,
  } = cc({
    update(e) {
      return e._update()
    },
    notify(e) {
      ;((uc[vc++] = e), (e.flags &= -3))
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = 17), Sc(e))
    },
  }),
  _c = 0,
  vc = 0,
  yc,
  bc = 0
function xc(e) {
  try {
    ;(++bc, e())
  } finally {
    --bc || Cc()
  }
}
function Sc(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep
  for (; n !== void 0;) n = pc(n, e)
}
function Cc() {
  if (!(bc > 0)) {
    for (; _c < vc;) {
      let e = uc[_c]
      ;((uc[_c++] = void 0), e.notify())
    }
    ;((_c = 0), (vc = 0))
  }
}
function wc(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: +!n,
      get() {
        return (yc !== void 0 && fc(i, yc, dc), i._snapshot)
      },
      subscribe(e) {
        let t = lc(e),
          n = { current: !1 },
          r = Tc(() => {
            ;(i.get(),
              n.current
                ? ((yc = void 0), t.next?.(i._snapshot))
                : (n.current = !0))
          })
        return {
          unsubscribe: () => {
            r.stop()
          },
        }
      },
      _update(e) {
        let a = yc,
          o = t?.compare ?? Object.is
        if (n) ((yc = i), ++dc, (i.depsTail = void 0))
        else if (e === void 0) return !1
        n && (i.flags = 5)
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1
        } finally {
          ;((yc = a), n && (i.flags &= -5), Sc(i))
        }
      },
    }
  return (
    n
      ? ((i.flags = 17),
        (i.get = function () {
          let e = i.flags
          if (e & 16 || (e & 32 && hc(i.deps, i))) {
            if (i._update()) {
              let e = i.subs
              e !== void 0 && gc(e)
            }
          } else e & 32 && (i.flags = e & -33)
          return (yc !== void 0 && fc(i, yc, dc), i._snapshot)
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs
            e !== void 0 && (mc(e), gc(e), Cc())
          }
        }),
    i
  )
}
function Tc(e) {
  let t = () => {
      let t = yc
      ;((yc = n), ++dc, (n.depsTail = void 0), (n.flags = 6))
      try {
        return e()
      } finally {
        ;((yc = t), (n.flags &= -5), Sc(n))
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: 6,
      notify() {
        let e = this.flags
        e & 16 || (e & 32 && hc(this.deps, this)) ? t() : (this.flags = 2)
      },
      stop() {
        ;((this.flags = 0), (this.depsTail = void 0), Sc(this))
      },
    }
  return (t(), n)
}
function Ec(e) {
  let t = p(),
    n = `not-found-${y(t.stores.location, (e) => e.pathname)}-${y(t.stores.status)}`
  return (0, U.jsx)(oc, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (oe(t)) e.onCatch?.(t, n)
      else throw t
    },
    errorComponent: ({ error: t }) => {
      if (oe(t)) return e.fallback?.(t)
      throw t
    },
    children: e.children,
  })
}
function Dc() {
  return (0, U.jsx)(`p`, { children: `Not Found` })
}
function Oc(e, t, n) {
  return t.options.notFoundComponent
    ? (0, U.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, U.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, U.jsx)(Dc, {})
}
function kc(e, t) {
  let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent
  return n ? (0, U.jsx)(n, {}) : null
}
var Ac = (e, t) => e[0] === t[0] && e[1] === t[1],
  jc = (e, t, n) =>
    !t.isRoot ||
    t.options.shellComponent ||
    t.options.wrapInSuspense ||
    n === !1 ||
    n === `data-only` ||
    !e.ssr,
  Mc = H.memo(function ({ routeId: e }) {
    let t = p()
    return (0, U.jsx)(Nc, { router: t, match: y(t.stores.getMatchStore(e)) })
  })
function Nc({ router: e, match: t }) {
  let n = e.routesById[t.routeId],
    r = kc(e, n),
    i = n.options.errorComponent ?? e.options.defaultErrorComponent,
    a = n.options.onCatch ?? e.options.defaultOnCatch,
    o = n.isRoot
      ? (n.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : n.options.notFoundComponent,
    s = t.ssr === !1 || t.ssr === `data-only`,
    c =
      jc(e, n, t.ssr) &&
      (n.options.wrapInSuspense ??
        r ??
        (n.options.errorComponent?.preload || s)),
    l = (0, U.jsx)(Pc, { match: t })
  ;(s && (l = (0, U.jsx)(E, { fallback: r, children: l })),
    o &&
      (l = (0, U.jsx)(Ec, {
        fallback: (e) => {
          if (((e.routeId ??= t.routeId), e.routeId !== t.routeId)) throw e
          return H.createElement(o, e)
        },
        children: l,
      })),
    i &&
      (l = (0, U.jsx)(oc, {
        getResetKey: () => t,
        errorComponent: i,
        onCatch: (e, n) => {
          if (oe(e)) throw ((e.routeId ??= t.routeId), e)
          a?.(e, n)
        },
        children: l,
      })),
    c && (l = (0, U.jsx)(H.Suspense, { fallback: r, children: l })))
  let u = n.isRoot ? n.options.shellComponent : void 0
  return (0, U.jsx)(me.Provider, {
    value: t.routeId,
    children: u
      ? (0, U.jsxs)(u, { children: [l, null] })
      : (0, U.jsxs)(U.Fragment, { children: [l, null] }),
  })
}
var Pc = H.memo(function ({ match: e }) {
    let t = p(),
      n = e.routeId,
      r = t.routesById[n],
      i = H.useMemo(() => {
        let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: n,
          loaderDeps: e.loaderDeps,
          params: e._strictParams,
          search: e._strictSearch,
        })
        return i ? JSON.stringify(i) : void 0
      }, [
        n,
        e.loaderDeps,
        e._strictParams,
        e._strictSearch,
        r.options.remountDeps,
        t.options.defaultRemountDeps,
      ]),
      a = H.useMemo(() => {
        let e = r.options.component ?? t.options.defaultComponent
        return e ? (0, U.jsx)(e, {}, i) : (0, U.jsx)(Fc, {})
      }, [i, r.options.component, t.options.defaultComponent])
    if (e.status === `pending`) {
      if (t.ssr && !jc(t, r, e.ssr)) return a
      if (t._tx) throw t._tx[5]
      return kc(t, r)
    }
    if (e.status === `notFound`) return Oc(t, r, e.error)
    if (e.status === `error`) throw e.error
    return a
  }),
  Fc = H.memo(function () {
    let e = p(),
      t = H.useContext(me),
      n,
      r,
      i
    {
      let a = e.stores.getMatchStore(t)
      ;(([n, r] = y(a, (e) => [!!e._notFound, e.error], { compare: Ac })),
        (i = y(e.stores.ids, (e) => e[e.indexOf(t) + 1])))
    }
    if (n) return Oc(e, e.routesById[t], r)
    if (!i) return null
    let a = (0, U.jsx)(Mc, { routeId: i })
    return t === `__root__`
      ? (0, U.jsx)(H.Suspense, { fallback: kc(e), children: a })
      : a
  })
function Ic(e, t) {
  let n = e[1]
  ;((e.length = 0), n?.(t))
}
function Lc({ t: e }) {
  let t = p(),
    n = (t._rendered ??= [])
  return (
    (t.startTransition = (r, i) =>
      new Promise((a) => {
        ;(Ic(n, !1), n.push(i, a), e(t), H.startTransition(r))
      })),
    Se(() => {
      let e = t.history.subscribe(t.load)
      t.updateLatestLocation()
      let r = t.latestLocation,
        i = t.buildLocation({
          to: r.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        })
      if (v(r.publicHref) !== v(i.publicHref))
        return (t.commitLocation({ ...i, replace: !0, ignoreBlocker: !0 }), e)
      let a = t.stores.resolvedLocation.get()
      return (
        a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key
          ? n.push(t.stores.matches.get(), (e) => {
              e && t.emit({ type: `onRendered`, ...tn(a, a) })
            })
          : t._tx || t.load({ sync: !0 }).catch(console.error),
        e
      )
    }, [t, t.history]),
    null
  )
}
function Rc() {
  let e = p(),
    t = e.routesById[he],
    n = kc(e, t),
    r = (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsx)(Lc, { t: H.useState()[1] }),
        e.ssr
          ? (0, U.jsx)(zc, {})
          : (0, U.jsx)(H.Suspense, {
              fallback: n,
              children: (0, U.jsx)(zc, {}),
            }),
      ],
    })
  return e.options.InnerWrap
    ? (0, U.jsx)(e.options.InnerWrap, { children: r })
    : r
}
function zc() {
  let e = p(),
    t = e._rendered,
    n = y(e.stores.matches, (e) => t[0] ?? e),
    r = n[0],
    i = r?.routeId
  Se(() => {
    t[0] === n && Ic(t, !0)
  }, [t, n])
  let a = i ? (0, U.jsx)(Mc, { routeId: i }) : null
  return e.options.disableGlobalCatchBoundary
    ? a
    : (0, U.jsx)(oc, { getResetKey: () => r, onCatch: void 0, children: a })
}
var Bc = (e) => ({
    createMutableStore: wc,
    createReadonlyStore: wc,
    batch: xc,
  }),
  Vc = (e) => new Hc(e),
  Hc = class extends on {
    constructor(e) {
      super(e, Bc)
    }
  }
function Uc({ router: e, children: t, ...n }) {
  r(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    })
  let i = (0, U.jsx)(C.Provider, { value: e, children: t })
  return e.options.Wrap ? (0, U.jsx)(e.options.Wrap, { children: i }) : i
}
function Wc({ router: e, ...t }) {
  return (0, U.jsx)(Uc, { router: e, ...t, children: (0, U.jsx)(Rc, {}) })
}
function Gc(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r))
}
function Kc(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e,
    a = H.useMemo(() => (n === void 0 ? void 0 : { __html: n }), [n])
  switch (e.tag) {
    case `title`:
      return (0, U.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      })
    case `meta`:
      return (0, U.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 })
    case `link`:
      return (0, U.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      })
    case `style`:
      return (
        e.inlineCss,
        (0, U.jsx)(`style`, { ...t, dangerouslySetInnerHTML: a, nonce: r })
      )
    case `script`:
      return (0, U.jsx)(qc, { attrs: t, preventScriptHoist: i, children: n })
    default:
      return null
  }
}
function qc({ attrs: e, children: t, preventScriptHoist: n }) {
  p()
  let r = h(),
    i = H.useMemo(() => (t === void 0 ? void 0 : { __html: t }), [t]),
    a =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`
  if (
    (H.useEffect(() => {
      if (!a) {
        if (e?.src) {
          let t = document.createElement(`a`)
          t.href = e.src
          let n = t.href
          for (let e of document.scripts) if (e.src === n) return
          let r = document.createElement(`script`)
          return (Gc(r, e), document.head.appendChild(r), () => r.remove())
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0
          for (let e of document.scripts) {
            if (e.hasAttribute(`src`)) continue
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0
            if (e.textContent === t && i === n && a === r) return
          }
          let i = document.createElement(`script`)
          return (
            (i.textContent = t),
            Gc(i, e),
            document.head.appendChild(i),
            () => i.remove()
          )
        }
      }
    }, [e, t, a]),
    a && typeof t == `string`)
  )
    return (0, U.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: i,
    })
  if (!r) {
    if (e?.src)
      return (0, U.jsx)(`script`, { ...e, suppressHydrationWarning: !0 })
    if (typeof t == `string`)
      return (0, U.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: i,
        suppressHydrationWarning: !0,
      })
  }
  return null
}
function Jc(e, n, r, i) {
  r = Sn(r)
  let a = r.map((e) => e.meta).filter((e) => e !== void 0),
    o = [],
    s = {},
    c
  for (let e = a.length - 1; e >= 0; e--) {
    let r = a[e]
    for (let e = r.length - 1; e >= 0; e--) {
      let i = r[e]
      if (i)
        if (i.title) c ||= { tag: `title`, children: i.title }
        else if (`script:ld+json` in i)
          try {
            let e = JSON.stringify(i[`script:ld+json`])
            o.push({
              tag: `script`,
              attrs: { type: `application/ld+json` },
              children: t(e),
            })
          } catch {}
        else {
          let e = i.name ?? i.property
          if (e) {
            if (s[e]) continue
            s[e] = !0
          }
          o.push({ tag: `meta`, attrs: { ...i, nonce: n } })
        }
    }
  }
  ;(c && o.push(c),
    n && o.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
    o.reverse())
  let l = r
      .flatMap((e) => e.links ?? [])
      .filter((e) => e !== void 0)
      .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
    u = e.ssr?.manifest,
    d = []
  u &&
    (r.forEach((e) => {
      u.routes[e.routeId]?.css?.forEach((e) => {
        let t = zs(e)
        d.push({
          tag: `link`,
          attrs: {
            rel: `stylesheet`,
            ...t,
            crossOrigin: Ps(i, `stylesheet`) ?? t.crossOrigin,
            suppressHydrationWarning: !0,
            nonce: n,
          },
        })
      })
    }),
    u.inlineStyle &&
      d.push({
        tag: `style`,
        attrs: { ...u.inlineStyle.attrs, nonce: n },
        children: u.inlineStyle.children,
        inlineCss: !0,
      }))
  let f = []
  u &&
    r.forEach((e) => {
      u.routes[e.routeId]?.preloads?.forEach((e) => {
        f.push({ tag: `link`, attrs: { ...Is(u, e, i), nonce: n } })
      })
    })
  let p = r
      .flatMap((e) => e.styles ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...t }) => ({
        tag: `style`,
        attrs: { ...t, nonce: n },
        children: e,
      })),
    m = r
      .flatMap((e) => e.headScripts ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...t }) => ({
        tag: `script`,
        attrs: { ...t, nonce: n },
        children: e,
      })),
    h = []
  return (Rs(h, o), h.push(...f), Rs(h, l), h.push(...d), Rs(h, p), Rs(h, m), h)
}
var Yc = (e) => {
  let t = p(),
    n = t.options.ssr?.nonce,
    r = H.useCallback((r) => Jc(t, n, r, e), [e, n, t])
  return y(t.stores.matches, r, { compare: ne })
}
function Xc(e) {
  let t = Yc(e.assetCrossOrigin),
    n = p().options.ssr?.nonce
  return (0, U.jsx)(U.Fragment, {
    children: t.map((e) =>
      (0, H.createElement)(Kc, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      }),
    ),
  })
}
var Zc = { suppressHydrationWarning: !0 },
  Qc = () => {
    let e = p(),
      t = e.options.ssr?.nonce,
      n = (n) => {
        let r = Bs(n, e.ssr?.manifest, t, Zc)
        for (let e of r[1])
          if (typeof e.attrs?.src == `string`) {
            let t = e
            t.preventScriptHoist = !0
          }
        return r
      }
    return $c(y(e.stores.matches, (e) => Vs(n(e)), { compare: ne }))
  }
function $c(e) {
  return (0, U.jsx)(U.Fragment, {
    children: e.map((e, t) =>
      (0, H.createElement)(Kc, { ...e, key: `tsr-scripts-${e.tag}-${t}` }),
    ),
  })
}
var el = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => el({}, Object.assign(n, { validator: e, inputValidator: e }))
  return {
    options: n,
    middleware: (e) => el({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => el({}, Object.assign(n, { client: e })),
    server: (e) => el({}, Object.assign(n, { server: e })),
  }
}
function tl(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n]
    e.has(r) || (e.add(r), r.extends && tl(e, r.extends))
  }
}
var nl = (e) => ({
    getOptions: async () => {
      let t = await e()
      if (t.serializationAdapters) {
        let e = new Set()
        ;(tl(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e)))
      }
      return t
    },
    createMiddleware: el,
  }),
  rl = el(),
  il = void 0,
  al = nl(() => ({ requestMiddleware: [rl, il] })),
  ol = class {
    constructor() {
      ;((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)))
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          ;(this.listeners.delete(e), this.onUnsubscribe())
        }
      )
    }
    hasListeners() {
      return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  sl = new (class extends ol {
    #e
    #t
    #n
    constructor() {
      ;(super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e()
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t)
              }
            )
          }
        }))
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0))
    }
    setEventListener(e) {
      ;((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
        })))
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus())
    }
    onFocus() {
      let e = this.isFocused()
      this.listeners.forEach((t) => {
        t(e)
      })
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`
    }
  })(),
  cl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  W = new (class {
    #e = cl
    setTimeoutProvider(e) {
      this.#e = e
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t)
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e)
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t)
    }
    clearInterval(e) {
      this.#e.clearInterval(e)
    }
  })()
function ll(e) {
  setTimeout(e, 0)
}
var ul = typeof window > `u` || `Deno` in globalThis
function dl() {}
function fl(e, t) {
  return typeof e == `function` ? e(t) : e
}
function pl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0
}
function ml(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0)
}
function hl(e, t) {
  return typeof e == `function` ? e(t) : e
}
function gl(e, t) {
  return typeof e == `function` ? e(t) : e
}
function _l(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e
  if (o) {
    if (r) {
      if (t.queryHash !== yl(o, t.options)) return !1
    } else if (!xl(t.queryKey, o)) return !1
  }
  if (n !== `all`) {
    let e = t.isActive()
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  )
}
function vl(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e
  if (a) {
    if (!t.options.mutationKey) return !1
    if (n) {
      if (bl(t.options.mutationKey) !== bl(a)) return !1
    } else if (!xl(t.options.mutationKey, a)) return !1
  }
  return !((r && t.state.status !== r) || (i && !i(t)))
}
function yl(e, t) {
  return (t?.queryKeyHashFn || bl)(e)
}
function bl(e) {
  return JSON.stringify(e, (e, t) =>
    Tl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  )
}
function xl(e, t) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!xl(e[n], t[n])) return !1
      return !0
    }
    let n = Object.keys(t)
    for (let r of n) if (!xl(e[r], t[r])) return !1
    return !0
  }
  return !1
}
var Sl = Object.prototype.hasOwnProperty
function Cl(e, t, n = 0) {
  if (e === t) return e
  if (n > 500) return t
  let r = wl(e) && wl(t)
  if (!r && !(Tl(e) && Tl(t))) return t
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o]
    if (u === d) {
      ;((s[o] = u), (r ? l < i : Sl.call(e, o)) && c++)
      continue
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d
      continue
    }
    let f = Cl(u, d, n + 1)
    ;((s[o] = f), f === u && c++)
  }
  return i === o && c === i ? e : s
}
function wl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Tl(e) {
  if (!El(e)) return !1
  let t = e.constructor
  if (t === void 0) return !0
  let n = t.prototype
  return !(
    !El(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  )
}
function El(e) {
  return Object.prototype.toString.call(e) === `[object Object]`
}
function Dl(e) {
  return new Promise((t) => {
    W.setTimeout(t, e)
  })
}
function Ol(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Cl(e, t)
}
function kl(e, t, n = 0) {
  let r = [...e, t]
  return n && r.length > n ? r.slice(1) : r
}
function Al(e, t, n = 0) {
  let r = [t, ...e]
  return n && r.length > n ? r.slice(0, -1) : r
}
var jl = Symbol()
function Ml(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === jl
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn
}
function Nl(e, t, n) {
  let r = !1,
    i
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  )
}
var Pl = (() => {
  let e = () => ul
  return {
    isServer() {
      return e()
    },
    setIsServer(t) {
      e = t
    },
  }
})()
function Fl() {
  let e,
    t,
    n = new Promise((n, r) => {
      ;((e = n), (t = r))
    })
  ;((n.status = `pending`), n.catch(() => {}))
  function r(e) {
    ;(Object.assign(n, e), delete n.resolve, delete n.reject)
  }
  return (
    (n.resolve = (t) => {
      ;(r({ status: `fulfilled`, value: t }), e(t))
    }),
    (n.reject = (e) => {
      ;(r({ status: `rejected`, reason: e }), t(e))
    }),
    n
  )
}
var Il = ll
function Ll() {
  let e = [],
    t = 0,
    n = (e) => {
      e()
    },
    r = (e) => {
      e()
    },
    i = Il,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r)
          })
    },
    o = () => {
      let t = e
      ;((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e)
              })
            })
          }))
    }
  return {
    batch: (e) => {
      let n
      t++
      try {
        n = e()
      } finally {
        ;(t--, t || o())
      }
      return n
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t)
        })
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e
    },
    setBatchNotifyFunction: (e) => {
      r = e
    },
    setScheduler: (e) => {
      i = e
    },
  }
}
var Rl = Ll(),
  zl = new (class extends ol {
    #e = !0
    #t
    #n
    constructor() {
      ;(super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1)
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                ;(window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n))
              }
            )
          }
        }))
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0))
    }
    setEventListener(e) {
      ;((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))))
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e)
        }))
    }
    isOnline() {
      return this.#e
    }
  })()
function G(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function K(e) {
  return (e ?? `online`) !== `online` || zl.isOnline()
}
var q = class extends Error {
  constructor(e) {
    ;(super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent))
  }
}
function J(e) {
  let t = !1,
    n = 0,
    r,
    i = Fl(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new q(t)
        ;(f(n), e.onCancel?.(n))
      }
    },
    s = () => {
      t = !0
    },
    c = () => {
      t = !1
    },
    l = () =>
      sl.isFocused() &&
      (e.networkMode === `always` || zl.isOnline()) &&
      e.canRun(),
    u = () => K(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e))
    },
    f = (e) => {
      a() || (r?.(), i.reject(e))
    },
    p = () =>
      new Promise((t) => {
        ;((r = (e) => {
          ;(a() || l()) && t(e)
        }),
          e.onPause?.())
      }).then(() => {
        ;((r = void 0), a() || e.onContinue?.())
      }),
    m = () => {
      if (a()) return
      let r,
        i = n === 0 ? e.initialPromise : void 0
      try {
        r = i ?? e.fn()
      } catch (e) {
        r = Promise.reject(e)
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return
          let i = e.retry ?? (Pl.isServer() ? 0 : 3),
            o = e.retryDelay ?? G,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r))
          if (t || !c) {
            f(r)
            return
          }
          ;(n++,
            e.onFail?.(n, r),
            Dl(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m()
              }))
        })
    }
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  }
}
var Y = class {
  #e
  destroy() {
    this.clearGcTimeout()
  }
  scheduleGc() {
    ;(this.clearGcTimeout(),
      pl(this.gcTime) &&
        (this.#e = W.setTimeout(() => {
          this.optionalRemove()
        }, this.gcTime)))
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (Pl.isServer() ? 1 / 0 : 3e5))
  }
  clearGcTimeout() {
    this.#e !== void 0 && (W.clearTimeout(this.#e), (this.#e = void 0))
  }
}
function Bl(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Nl(
                e,
                () => t.signal,
                () => (n = !0),
              )
            },
            u = Ml(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason)
              if (r == null && e.pages.length) return Promise.resolve(e)
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  }
                  return (l(e), e)
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? Al : kl
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              }
            }
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Hl : Vl,
              n = { pages: a, pageParams: o }
            s = await d(n, t(r, n), e)
          } else {
            let t = e ?? a.length
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Vl(r, s)
              if (c > 0 && e == null) break
              ;((s = await d(s, e)), c++)
            } while (c < t)
          }
          return s
        }
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l
    },
  }
}
function Vl(e, { pages: t, pageParams: n }) {
  let r = t.length - 1
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Hl(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0
}
var Ul = class extends Y {
  #e
  #t
  #n
  #r
  #i
  #a
  #o
  #s
  constructor(e) {
    ;(super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Kl(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc())
  }
  get meta() {
    return this.options.meta
  }
  get queryType() {
    return this.#e
  }
  get promise() {
    return this.#a?.promise
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Kl(this.options)
      e.data !== void 0 &&
        (this.setState(Gl(e.data, e.dataUpdatedAt)), (this.#t = e))
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this)
  }
  setData(e, t) {
    let n = Ol(this.state.data, e, this.options)
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    )
  }
  setState(e) {
    this.#l({ type: `setState`, state: e })
  }
  cancel(e) {
    let t = this.#a?.promise
    return (this.#a?.cancel(e), t ? t.then(dl).catch(dl) : Promise.resolve())
  }
  destroy() {
    ;(super.destroy(), this.cancel({ silent: !0 }))
  }
  get resetState() {
    return this.#t
  }
  reset() {
    ;(this.destroy(), this.setState(this.resetState))
  }
  isActive() {
    return this.observers.some((e) => gl(e.options.enabled, this) !== !1)
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === jl || !this.isFetched()
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => hl(e.options.staleTime, this) === `static`)
    )
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !ml(this.state.dataUpdatedAt, e)
  }
  onFocus() {
    ;(this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue())
  }
  onOnline() {
    ;(this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue())
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }))
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }))
  }
  getObserversCount() {
    return this.observers.length
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    )
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` })
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 })
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise)
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn)
      e && this.setOptions(e.options)
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        })
      },
      i = () => {
        let e = Ml(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            }
            return (r(e), e)
          })()
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        )
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        }
        return (r(e), e)
      })()
    ;((this.#e === `infinite`
      ? Bl(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = J({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          ;(e instanceof q &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort())
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t })
        },
        onPause: () => {
          this.#l({ type: `pause` })
        },
        onContinue: () => {
          this.#l({ type: `continue` })
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })))
    try {
      let e = await this.#a.start()
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`)
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      )
    } catch (e) {
      if (e instanceof q) {
        if (e.silent) return this.#a.promise
        if (e.revert) {
          if (this.state.data === void 0) throw e
          return this.state.data
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      )
    } finally {
      this.scheduleGc()
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          }
        case `pause`:
          return { ...t, fetchStatus: `paused` }
        case `continue`:
          return { ...t, fetchStatus: `fetching` }
        case `fetch`:
          return {
            ...t,
            ...Wl(t.data, this.options),
            fetchMeta: e.meta ?? null,
          }
        case `success`:
          let n = {
            ...t,
            ...Gl(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          }
          return ((this.#n = e.manual ? n : void 0), n)
        case `error`:
          let r = e.error
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          }
        case `invalidate`:
          return { ...t, isInvalidated: !0 }
        case `setState`:
          return { ...t, ...e.state }
      }
    }
    ;((this.state = t(this.state)),
      Rl.batch(() => {
        ;(this.observers.forEach((e) => {
          e.onQueryUpdate()
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }))
      }))
  }
}
function Wl(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: K(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  }
}
function Gl(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  }
}
function Kl(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  }
}
var ql = class extends Y {
  #e
  #t
  #n
  #r
  constructor(e) {
    ;(super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Jl()),
      this.setOptions(e.options),
      this.scheduleGc())
  }
  setOptions(e) {
    ;((this.options = e), this.updateGcTime(this.options.gcTime))
  }
  get meta() {
    return this.options.meta
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }))
  }
  removeObserver(e) {
    ;((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }))
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this))
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables)
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` })
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      }
    this.#r = J({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t })
      },
      onPause: () => {
        this.#i({ type: `pause` })
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    })
    let r = this.state.status === `pending`,
      i = !this.#r.canStart()
    try {
      if (r) t()
      else {
        ;(this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)))
        let t = await this.options.onMutate?.(e, n)
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i })
      }
      let a = await this.#r.start()
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      )
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n)
      } catch (e) {
        Promise.reject(e)
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n)
      } catch (e) {
        Promise.reject(e)
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        )
      } catch (e) {
        Promise.reject(e)
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n)
      } catch (e) {
        Promise.reject(e)
      }
      throw (this.#i({ type: `error`, error: t }), t)
    } finally {
      this.#n.runNext(this)
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error }
        case `pause`:
          return { ...t, isPaused: !0 }
        case `continue`:
          return { ...t, isPaused: !1 }
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          }
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          }
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          }
      }
    }
    ;((this.state = t(this.state)),
      Rl.batch(() => {
        ;(this.#t.forEach((t) => {
          t.onMutationUpdate(e)
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }))
      }))
  }
}
function Jl() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  }
}
var Yl = class extends ol {
  constructor(e = {}) {
    ;(super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0))
  }
  #e
  #t
  #n
  build(e, t, n) {
    let r = new ql({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    })
    return (this.add(r), r)
  }
  add(e) {
    this.#e.add(e)
    let t = Xl(e)
    if (typeof t == `string`) {
      let n = this.#t.get(t)
      n ? n.push(e) : this.#t.set(t, [e])
    }
    this.notify({ type: `added`, mutation: e })
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Xl(e)
      if (typeof t == `string`) {
        let n = this.#t.get(t)
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e)
            t !== -1 && n.splice(t, 1)
          } else n[0] === e && this.#t.delete(t)
      }
    }
    this.notify({ type: `removed`, mutation: e })
  }
  canRun(e) {
    let t = Xl(e)
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`)
      return !n || n === e
    }
    return !0
  }
  runNext(e) {
    let t = Xl(e)
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve()
  }
  clear() {
    Rl.batch(() => {
      ;(this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e })
      }),
        this.#e.clear(),
        this.#t.clear())
    })
  }
  getAll() {
    return Array.from(this.#e)
  }
  find(e) {
    let t = { exact: !0, ...e }
    return this.getAll().find((e) => vl(t, e))
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => vl(e, t))
  }
  notify(e) {
    Rl.batch(() => {
      this.listeners.forEach((t) => {
        t(e)
      })
    })
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused)
    return Rl.batch(() => Promise.all(e.map((e) => e.continue().catch(dl))))
  }
}
function Xl(e) {
  return e.options.scope?.id
}
var Zl = class extends ol {
    constructor(e = {}) {
      ;(super(), (this.config = e), (this.#e = new Map()))
    }
    #e
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? yl(r, t),
        a = this.get(i)
      return (
        a ||
          ((a = new Ul({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      )
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }))
    }
    remove(e) {
      let t = this.#e.get(e.queryHash)
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }))
    }
    clear() {
      Rl.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e)
        })
      })
    }
    get(e) {
      return this.#e.get(e)
    }
    getAll() {
      return [...this.#e.values()]
    }
    find(e) {
      let t = { exact: !0, ...e }
      return this.getAll().find((e) => _l(t, e))
    }
    findAll(e = {}) {
      let t = this.getAll()
      return Object.keys(e).length > 0 ? t.filter((t) => _l(e, t)) : t
    }
    notify(e) {
      Rl.batch(() => {
        this.listeners.forEach((t) => {
          t(e)
        })
      })
    }
    onFocus() {
      Rl.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus()
        })
      })
    }
    onOnline() {
      Rl.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline()
        })
      })
    }
  },
  Ql = class {
    #e
    #t
    #n
    #r
    #i
    #a
    #o
    #s
    constructor(e = {}) {
      ;((this.#e = e.queryCache || new Zl()),
        (this.#t = e.mutationCache || new Yl()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0))
    }
    mount() {
      ;(this.#a++,
        this.#a === 1 &&
          ((this.#o = sl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus())
          })),
          (this.#s = zl.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline())
          }))))
    }
    unmount() {
      ;(this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)))
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e })
      return this.#e.get(t.queryHash)?.state.data
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(hl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r))
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data])
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = fl(t, i)
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 })
    }
    setQueriesData(e, t, n) {
      return Rl.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      )
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e })
      return this.#e.get(t.queryHash)?.state
    }
    removeQueries(e) {
      let t = this.#e
      Rl.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e)
        })
      })
    }
    resetQueries(e, t) {
      let n = this.#e
      return Rl.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset()
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      )
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Rl.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)))
      return Promise.all(r).then(dl).catch(dl)
    }
    invalidateQueries(e, t = {}) {
      return Rl.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate()
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      )
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Rl.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n)
              return (
                n.throwOnError || (t = t.catch(dl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              )
            }),
        )
      return Promise.all(r).then(dl)
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e)
      t.retry === void 0 && (t.retry = !1)
      let n = this.#e.build(this, t)
      return n.isStaleByTime(hl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(dl).catch(dl)
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e))
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(dl).catch(dl)
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e))
    }
    resumePausedMutations() {
      return zl.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
      return this.#e
    }
    getMutationCache() {
      return this.#t
    }
    getDefaultOptions() {
      return this.#n
    }
    setDefaultOptions(e) {
      this.#n = e
    }
    setQueryDefaults(e, t) {
      this.#r.set(bl(e), { queryKey: e, defaultOptions: t })
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {}
      return (
        t.forEach((t) => {
          xl(e, t.queryKey) && Object.assign(n, t.defaultOptions)
        }),
        n
      )
    }
    setMutationDefaults(e, t) {
      this.#i.set(bl(e), { mutationKey: e, defaultOptions: t })
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {}
      return (
        t.forEach((t) => {
          xl(e, t.mutationKey) && Object.assign(n, t.defaultOptions)
        }),
        n
      )
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      }
      return (
        (t.queryHash ||= yl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === jl && (t.enabled = !1),
        t
      )
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          }
    }
    clear() {
      ;(this.#e.clear(), this.#t.clear())
    }
  },
  $l = H.createContext(void 0),
  eu = ({ client: e, children: t }) => (
    H.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount()
        }
      ),
      [e],
    ),
    (0, U.jsx)($l.Provider, { value: e, children: t })
  ),
  tu = Te(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  nu = Te(`circle`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
  ]),
  ru = Te(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  iu = Te(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  au = Te(`shopping-bag`, [
    [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
    [`path`, { d: `M3.103 6.034h17.794`, key: `awc11p` }],
    [
      `path`,
      {
        d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
        key: `o988cm`,
      },
    ],
  ]),
  ou = Te(`trash-2`, [
    [`path`, { d: `M10 11v6`, key: `nco0om` }],
    [`path`, { d: `M14 11v6`, key: `outv1u` }],
    [`path`, { d: `M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`, key: `miytrc` }],
    [`path`, { d: `M3 6h18`, key: `d0wm0j` }],
    [`path`, { d: `M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`, key: `e791ji` }],
  ]),
  su = Te(`truck`, [
    [
      `path`,
      {
        d: `M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,
        key: `wrbu53`,
      },
    ],
    [`path`, { d: `M15 18H9`, key: `1lyqi6` }],
    [
      `path`,
      {
        d: `M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,
        key: `lysw3i`,
      },
    ],
    [`circle`, { cx: `17`, cy: `18`, r: `2`, key: `332jqn` }],
    [`circle`, { cx: `7`, cy: `18`, r: `2`, key: `19iecd` }],
  ]),
  cu = Te(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  lu = Object.defineProperty,
  uu = (e, t) => lu(e, `name`, { value: t, configurable: !0 })
function du(e) {
  let t = H.useRef(e)
  return (
    H.useEffect(() => {
      t.current = e
    }),
    H.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  )
}
uu(du, `useCallbackRef`)
var fu = Object.defineProperty,
  pu = (e, t) => fu(e, `name`, { value: t, configurable: !0 }),
  mu = `dismissableLayer.update`,
  hu = `dismissableLayer.pointerDownOutside`,
  gu = `dismissableLayer.focusOutside`,
  _u,
  vu = H.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
    dismissableSurfaces: new Set(),
  }),
  yu = H.forwardRef(
    pu(function (e, t) {
      let {
          disableOutsidePointerEvents: n = !1,
          deferPointerDownOutside: r = !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: a,
          onFocusOutside: o,
          onInteractOutside: s,
          onDismiss: c,
          ...l
        } = e,
        u = H.useContext(vu),
        [d, f] = H.useState(null),
        p = d?.ownerDocument ?? globalThis?.document,
        [, m] = H.useState({}),
        h = N(t, f),
        g = Array.from(u.layers),
        [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
        v = _ ? g.indexOf(_) : -1,
        y = d ? g.indexOf(d) : -1,
        b = u.layersWithOutsidePointerEventsDisabled.size > 0,
        x = y >= v,
        S = H.useRef(!1),
        C = Su(
          (e) => {
            ;(a?.(e), s?.(e), e.defaultPrevented || c?.())
          },
          {
            ownerDocument: p,
            deferPointerDownOutside: r,
            isDeferredPointerDownOutsideRef: S,
            dismissableSurfaces: u.dismissableSurfaces,
            shouldHandlePointerDownOutside: H.useCallback(
              (e) => {
                if (!(e instanceof Node)) return !1
                let t = [...u.branches].some((t) => t.contains(e))
                return x && !t
              },
              [u.branches, x],
            ),
          },
        ),
        w = Cu((e) => {
          if (r && S.current) return
          let t = e.target
          ;[...u.branches].some((e) => e.contains(t)) ||
            (o?.(e), s?.(e), e.defaultPrevented || c?.())
        }, p),
        T = d ? y === g.length - 1 : !1,
        E = du((e) => {
          e.key === `Escape` &&
            (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()))
        })
      return (
        H.useEffect(() => {
          if (T)
            return (
              p.addEventListener(`keydown`, E, { capture: !0 }),
              () => p.removeEventListener(`keydown`, E, { capture: !0 })
            )
        }, [p, T, E]),
        H.useEffect(() => {
          if (d)
            return (
              n &&
                (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                  ((_u = p.body.style.pointerEvents),
                  (p.body.style.pointerEvents = `none`)),
                u.layersWithOutsidePointerEventsDisabled.add(d)),
              u.layers.add(d),
              wu(),
              () => {
                n &&
                  (u.layersWithOutsidePointerEventsDisabled.delete(d),
                  u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    (p.body.style.pointerEvents = _u))
              }
            )
        }, [d, p, n, u]),
        H.useEffect(
          () => () => {
            d &&
              (u.layers.delete(d),
              u.layersWithOutsidePointerEventsDisabled.delete(d),
              wu())
          },
          [d, u],
        ),
        H.useEffect(() => {
          let e = pu(() => m({}), `handleUpdate`)
          return (
            document.addEventListener(mu, e),
            () => document.removeEventListener(mu, e)
          )
        }, []),
        (0, U.jsx)(k.div, {
          ...l,
          ref: h,
          style: {
            pointerEvents: b ? (x ? `auto` : `none`) : void 0,
            ...e.style,
          },
          onFocusCapture: j(e.onFocusCapture, w.onFocusCapture),
          onBlurCapture: j(e.onBlurCapture, w.onBlurCapture),
          onPointerDownCapture: j(
            e.onPointerDownCapture,
            C.onPointerDownCapture,
          ),
        })
      )
    }, `DismissableLayer`),
  )
function bu() {
  let e = H.useContext(vu),
    [t, n] = H.useState(null)
  return (
    H.useEffect(() => {
      if (t)
        return (
          e.dismissableSurfaces.add(t),
          () => {
            e.dismissableSurfaces.delete(t)
          }
        )
    }, [t, e.dismissableSurfaces]),
    n
  )
}
pu(bu, `useDismissableLayerSurface`)
var xu = pu(() => !0, `IS_TRUE`)
function Su(e, t) {
  let {
      ownerDocument: n = globalThis?.document,
      deferPointerDownOutside: r = !1,
      isDeferredPointerDownOutsideRef: i,
      dismissableSurfaces: a,
      shouldHandlePointerDownOutside: o = xu,
    } = t,
    s = du(e),
    c = H.useRef(!1),
    l = H.useRef(!1),
    u = H.useRef(new Map()),
    d = H.useRef(() => {})
  return (
    H.useEffect(() => {
      function e() {
        ;((l.current = !1), (i.current = !1), u.current.clear())
      }
      pu(e, `resetOutsideInteraction`)
      function t() {
        return Array.from(u.current.values()).some(Boolean)
      }
      pu(t, `isOutsideInteractionIntercepted`)
      function f(e) {
        if (!l.current) return
        let t = e.target
        ;((t instanceof Node && [...a].some((e) => e.contains(t))) ||
          u.current.set(e.type, !0),
          e.type === `click` &&
            window.setTimeout(() => {
              l.current && d.current()
            }, 0))
      }
      pu(f, `handleInteractionCapture`)
      function p(e) {
        l.current && u.current.set(e.type, !1)
      }
      pu(p, `handleInteractionBubble`)
      let m = pu((a) => {
          if (a.target && !c.current) {
            let f = function () {
              n.removeEventListener(`click`, d.current)
              let r = t()
              ;(e(), r || Tu(hu, s, p, { discrete: !0 }))
            }
            if (
              (pu(f, `handleAndDispatchPointerDownOutsideEvent`), !o(a.target))
            ) {
              ;(n.removeEventListener(`click`, d.current),
                e(),
                (c.current = !1))
              return
            }
            let p = { originalEvent: a }
            ;((l.current = !0),
              (i.current = r && a.button === 0),
              u.current.clear(),
              !r || a.button !== 0
                ? f()
                : (n.removeEventListener(`click`, d.current),
                  (d.current = f),
                  n.addEventListener(`click`, d.current, { once: !0 })))
          } else (n.removeEventListener(`click`, d.current), e())
          c.current = !1
        }, `handlePointerDown`),
        h = [
          `pointerup`,
          `mousedown`,
          `mouseup`,
          `touchstart`,
          `touchend`,
          `click`,
        ]
      for (let e of h) (n.addEventListener(e, f, !0), n.addEventListener(e, p))
      let g = window.setTimeout(() => {
        n.addEventListener(`pointerdown`, m)
      }, 0)
      return () => {
        ;(window.clearTimeout(g),
          n.removeEventListener(`pointerdown`, m),
          n.removeEventListener(`click`, d.current))
        for (let e of h)
          (n.removeEventListener(e, f, !0), n.removeEventListener(e, p))
      }
    }, [n, s, r, i, a, o]),
    { onPointerDownCapture: pu(() => (c.current = !0), `onPointerDownCapture`) }
  )
}
pu(Su, `usePointerDownOutside`)
function Cu(e, t = globalThis?.document) {
  let n = du(e),
    r = H.useRef(!1)
  return (
    H.useEffect(() => {
      let e = pu((e) => {
        e.target &&
          !r.current &&
          Tu(gu, n, { originalEvent: e }, { discrete: !1 })
      }, `handleFocus`)
      return (
        t.addEventListener(`focusin`, e),
        () => t.removeEventListener(`focusin`, e)
      )
    }, [t, n]),
    {
      onFocusCapture: pu(() => (r.current = !0), `onFocusCapture`),
      onBlurCapture: pu(() => (r.current = !1), `onBlurCapture`),
    }
  )
}
pu(Cu, `useFocusOutside`)
function wu() {
  let e = new CustomEvent(mu)
  document.dispatchEvent(e)
}
pu(wu, `dispatchUpdate`)
function Tu(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  ;(t && i.addEventListener(e, t, { once: !0 }),
    r ? M(i, a) : i.dispatchEvent(a))
}
pu(Tu, `handleAndDispatchCustomEvent`)
var Eu = Object.defineProperty,
  Du = (e, t) => Eu(e, `name`, { value: t, configurable: !0 }),
  Ou = `focusScope.autoFocusOnMount`,
  ku = `focusScope.autoFocusOnUnmount`,
  Au = { bubbles: !1, cancelable: !0 },
  ju = H.forwardRef(
    Du(function (e, t) {
      let {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          ...o
        } = e,
        [s, c] = H.useState(null),
        l = du(i),
        u = du(a),
        d = H.useRef(null),
        f = N(t, c),
        p = H.useRef({
          paused: !1,
          pause() {
            this.paused = !0
          },
          resume() {
            this.paused = !1
          },
        }).current
      ;(H.useEffect(() => {
        if (r) {
          let e = function (e) {
              if (p.paused || !s) return
              let t = e.target
              s.contains(t) ? (d.current = t) : Ru(d.current, { select: !0 })
            },
            t = function (e) {
              if (p.paused || !s) return
              let t = e.relatedTarget
              t !== null && (s.contains(t) || Ru(d.current, { select: !0 }))
            },
            n = function (e) {
              if (document.activeElement === document.body)
                for (let t of e) t.removedNodes.length > 0 && Ru(s)
            }
          ;(Du(e, `handleFocusIn`),
            Du(t, `handleFocusOut`),
            Du(n, `handleMutations`),
            document.addEventListener(`focusin`, e),
            document.addEventListener(`focusout`, t))
          let r = new MutationObserver(n)
          return (
            s && r.observe(s, { childList: !0, subtree: !0 }),
            () => {
              ;(document.removeEventListener(`focusin`, e),
                document.removeEventListener(`focusout`, t),
                r.disconnect())
            }
          )
        }
      }, [r, s, p.paused]),
        H.useEffect(() => {
          if (s) {
            zu.add(p)
            let e = document.activeElement
            if (!s.contains(e)) {
              let t = new CustomEvent(Ou, Au)
              ;(s.addEventListener(Ou, l),
                s.dispatchEvent(t),
                t.defaultPrevented ||
                  (Mu(Hu(Pu(s)), { select: !0 }),
                  document.activeElement === e && Ru(s)))
            }
            return () => {
              ;(s.removeEventListener(Ou, l),
                setTimeout(() => {
                  let t = new CustomEvent(ku, Au)
                  ;(s.addEventListener(ku, u),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      Ru(e ?? document.body, { select: !0 }),
                    s.removeEventListener(ku, u),
                    zu.remove(p))
                }, 0))
            }
          }
        }, [s, l, u, p]))
      let m = H.useCallback(
        (e) => {
          if ((!n && !r) || p.paused) return
          let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
            i = document.activeElement
          if (t && i) {
            let t = e.currentTarget,
              [r, a] = Nu(t)
            r && a
              ? !e.shiftKey && i === a
                ? (e.preventDefault(), n && Ru(r, { select: !0 }))
                : e.shiftKey &&
                  i === r &&
                  (e.preventDefault(), n && Ru(a, { select: !0 }))
              : i === t && e.preventDefault()
          }
        },
        [n, r, p.paused],
      )
      return (0, U.jsx)(k.div, { tabIndex: -1, ...o, ref: f, onKeyDown: m })
    }, `FocusScope`),
  )
function Mu(e, { select: t = !1 } = {}) {
  let n = document.activeElement
  for (let r of e)
    if ((Ru(r, { select: t }), document.activeElement !== n)) return
}
Du(Mu, `focusFirst`)
function Nu(e) {
  let t = Pu(e)
  return [Fu(t, e), Fu(t.reverse(), e)]
}
Du(Nu, `getTabbableEdges`)
function Pu(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: Du((e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      }, `acceptNode`),
    })
  for (; n.nextNode();) t.push(n.currentNode)
  return t
}
Du(Pu, `getTabbableCandidates`)
function Fu(e, t) {
  let n =
    typeof t.checkVisibility == `function` &&
    t.checkVisibility({ checkVisibilityCSS: !0 })
  for (let r of e)
    if (
      !(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Iu(r, { upTo: t }))
    )
      return r
}
Du(Fu, `findVisible`)
function Iu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0
  for (; e;) {
    if (t !== void 0 && e === t) return !1
    if (getComputedStyle(e).display === `none`) return !0
    e = e.parentElement
  }
  return !1
}
Du(Iu, `isHidden`)
function Lu(e) {
  return e instanceof HTMLInputElement && `select` in e
}
Du(Lu, `isSelectableInput`)
function Ru(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement
    ;(e.focus({ preventScroll: !0 }), e !== n && Lu(e) && t && e.select())
  }
}
Du(Ru, `focus`)
var zu = Bu()
function Bu() {
  let e = []
  return {
    add(t) {
      let n = e[0]
      ;(t !== n && n?.pause(), (e = Vu(e, t)), e.unshift(t))
    },
    remove(t) {
      ;((e = Vu(e, t)), e[0]?.resume())
    },
  }
}
Du(Bu, `createFocusScopesStack`)
function Vu(e, t) {
  let n = [...e],
    r = n.indexOf(t)
  return (r !== -1 && n.splice(r, 1), n)
}
Du(Vu, `arrayRemove`)
function Hu(e) {
  return e.filter((e) => e.tagName !== `A`)
}
Du(Hu, `removeLinks`)
var Uu = a(ie(), 1),
  Wu = Object.defineProperty,
  Gu = H.forwardRef(
    ((e, t) => Wu(e, `name`, { value: t, configurable: !0 }))(function (e, t) {
      let { container: n, ...r } = e,
        [i, a] = H.useState(!1)
      ce(() => a(!0), [])
      let o = n || (i && globalThis?.document?.body)
      return o ? Uu.createPortal((0, U.jsx)(k.div, { ...r, ref: t }), o) : null
    }, `Portal`),
  ),
  X = Object.defineProperty,
  Ku = (e, t) => X(e, `name`, { value: t, configurable: !0 }),
  qu = 0,
  Ju = null
function Yu(e) {
  return (Xu(), e.children)
}
Ku(Yu, `FocusGuards`)
function Xu() {
  H.useEffect(() => {
    Ju ||= { start: Zu(), end: Zu() }
    let { start: e, end: t } = Ju
    return (
      document.body.firstElementChild !== e &&
        document.body.insertAdjacentElement(`afterbegin`, e),
      document.body.lastElementChild !== t &&
        document.body.insertAdjacentElement(`beforeend`, t),
      qu++,
      () => {
        ;(qu === 1 && (Ju?.start.remove(), Ju?.end.remove(), (Ju = null)),
          (qu = Math.max(0, qu - 1)))
      }
    )
  }, [])
}
Ku(Xu, `useFocusGuards`)
function Zu() {
  let e = document.createElement(`span`)
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  )
}
Ku(Zu, `createFocusGuard`)
var Qu = function () {
  return (
    (Qu =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in ((t = arguments[n]), t))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        return e
      }),
    Qu.apply(this, arguments)
  )
}
function $u(e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
function ed(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) &&
        ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]))
  return e.concat(a || Array.prototype.slice.call(t))
}
var td = `right-scroll-bar-position`,
  nd = `width-before-scroll-bar`,
  rd = `with-scroll-bars-hidden`,
  id = `--removed-body-scroll-bar-size`
function ad(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e)
}
function od(e, t) {
  var n = (0, H.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(e) {
          var t = n.value
          t !== e && ((n.value = e), n.callback(e, t))
        },
      },
    }
  })[0]
  return ((n.callback = t), n.facade)
}
var sd = typeof window < `u` ? H.useLayoutEffect : H.useEffect,
  cd = new WeakMap()
function ld(e, t) {
  var n = od(t || null, function (t) {
    return e.forEach(function (e) {
      return ad(e, t)
    })
  })
  return (
    sd(
      function () {
        var t = cd.get(n)
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current
          ;(r.forEach(function (e) {
            i.has(e) || ad(e, null)
          }),
            i.forEach(function (e) {
              r.has(e) || ad(e, a)
            }))
        }
        cd.set(n, e)
      },
      [e],
    ),
    n
  )
}
function ud(e) {
  return e
}
function dd(e, t) {
  t === void 0 && (t = ud)
  var n = [],
    r = !1
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        )
      return n.length ? n[n.length - 1] : e
    },
    useMedium: function (e) {
      var i = t(e, r)
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i
          })
        }
      )
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n
        ;((n = []), t.forEach(e))
      }
      n = {
        push: function (t) {
          return e(t)
        },
        filter: function () {
          return n
        },
      }
    },
    assignMedium: function (e) {
      r = !0
      var t = []
      if (n.length) {
        var i = n
        ;((n = []), i.forEach(e), (t = n))
      }
      var a = function () {
          var n = t
          ;((t = []), n.forEach(e))
        },
        o = function () {
          return Promise.resolve().then(a)
        }
      ;(o(),
        (n = {
          push: function (e) {
            ;(t.push(e), o())
          },
          filter: function (e) {
            return ((t = t.filter(e)), n)
          },
        }))
    },
  }
}
function fd(e) {
  e === void 0 && (e = {})
  var t = dd(null)
  return ((t.options = Qu({ async: !0, ssr: !1 }, e)), t)
}
var pd = function (e) {
  var t = e.sideCar,
    n = $u(e, [`sideCar`])
  if (!t)
    throw Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    )
  var r = t.read()
  if (!r) throw Error(`Sidecar medium not found`)
  return H.createElement(r, Qu({}, n))
}
pd.isSideCarExport = !0
function md(e, t) {
  return (e.useMedium(t), pd)
}
var hd = fd(),
  gd = function () {},
  _d = H.forwardRef(function (e, t) {
    var n = H.useRef(null),
      r = H.useState({
        onScrollCapture: gd,
        onWheelCapture: gd,
        onTouchMoveCapture: gd,
      }),
      i = r[0],
      a = r[1],
      o = e.forwardProps,
      s = e.children,
      c = e.className,
      l = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noRelative,
      m = e.noIsolation,
      h = e.inert,
      g = e.allowPinchZoom,
      _ = e.as,
      v = _ === void 0 ? `div` : _,
      y = e.gapMode,
      b = $u(e, [
        `forwardProps`,
        `children`,
        `className`,
        `removeScrollBar`,
        `enabled`,
        `shards`,
        `sideCar`,
        `noRelative`,
        `noIsolation`,
        `inert`,
        `allowPinchZoom`,
        `as`,
        `gapMode`,
      ]),
      x = f,
      S = ld([n, t]),
      C = Qu(Qu({}, b), i)
    return H.createElement(
      H.Fragment,
      null,
      u &&
        H.createElement(x, {
          sideCar: hd,
          removeScrollBar: l,
          shards: d,
          noRelative: p,
          noIsolation: m,
          inert: h,
          setCallbacks: a,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: y,
        }),
      o
        ? H.cloneElement(H.Children.only(s), Qu(Qu({}, C), { ref: S }))
        : H.createElement(v, Qu({}, C, { className: c, ref: S }), s),
    )
  })
;((_d.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
  (_d.classNames = { fullWidth: nd, zeroRight: td }))
var vd,
  yd = function () {
    if (vd) return vd
    if (typeof __webpack_nonce__ < `u`) return __webpack_nonce__
  }
function bd() {
  if (!document) return null
  var e = document.createElement(`style`)
  e.type = `text/css`
  var t = yd()
  return (t && e.setAttribute(`nonce`, t), e)
}
function Z(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t))
}
function xd(e) {
  ;(document.head || document.getElementsByTagName(`head`)[0]).appendChild(e)
}
var Sd = function () {
    var e = 0,
      t = null
    return {
      add: function (n) {
        ;(e == 0 && (t = bd()) && (Z(t, n), xd(t)), e++)
      },
      remove: function () {
        ;(e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)))
      },
    }
  },
  Cd = function () {
    var e = Sd()
    return function (t, n) {
      H.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove()
            }
          )
        },
        [t && n],
      )
    }
  },
  wd = function () {
    var e = Cd()
    return function (t) {
      var n = t.styles,
        r = t.dynamic
      return (e(n, r), null)
    }
  },
  Td = { left: 0, top: 0, right: 0, gap: 0 },
  Ed = function (e) {
    return parseInt(e || ``, 10) || 0
  },
  Dd = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
      r = t[e === `padding` ? `paddingTop` : `marginTop`],
      i = t[e === `padding` ? `paddingRight` : `marginRight`]
    return [Ed(n), Ed(r), Ed(i)]
  },
  Od = function (e) {
    if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Td
    var t = Dd(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    }
  },
  kd = wd(),
  Ad = `data-scroll-locked`,
  jd = function (e, t, n, r) {
    var i = e.left,
      a = e.top,
      o = e.right,
      s = e.gap
    return (
      n === void 0 && (n = `margin`),
      `
  .${rd} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Ad}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${td} {
    right: ${s}px ${r};
  }
  
  .${nd} {
    margin-right: ${s}px ${r};
  }
  
  .${td} .${td} {
    right: 0 ${r};
  }
  
  .${nd} .${nd} {
    margin-right: 0 ${r};
  }
  
  body[${Ad}] {
    ${id}: ${s}px;
  }
`
    )
  },
  Md = function () {
    var e = parseInt(
      document.body.getAttribute(`data-scroll-locked`) || `0`,
      10,
    )
    return isFinite(e) ? e : 0
  },
  Nd = function () {
    H.useEffect(function () {
      return (
        document.body.setAttribute(Ad, (Md() + 1).toString()),
        function () {
          var e = Md() - 1
          e <= 0
            ? document.body.removeAttribute(Ad)
            : document.body.setAttribute(Ad, e.toString())
        }
      )
    }, [])
  },
  Q = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? `margin` : r
    Nd()
    var a = H.useMemo(
      function () {
        return Od(i)
      },
      [i],
    )
    return H.createElement(kd, { styles: jd(a, !t, i, n ? `` : `!important`) })
  },
  Pd = !1
if (typeof window < `u`)
  try {
    var Fd = Object.defineProperty({}, "passive", {
      get: function () {
        return ((Pd = !0), !0)
      },
    })
    ;(window.addEventListener(`test`, Fd, Fd),
      window.removeEventListener(`test`, Fd, Fd))
  } catch {
    Pd = !1
  }
var Id = Pd ? { passive: !1 } : !1,
  Ld = function (e) {
    return e.tagName === `TEXTAREA`
  },
  Rd = function (e, t) {
    if (!(e instanceof Element)) return !1
    var n = window.getComputedStyle(e)
    return (
      n[t] !== `hidden` &&
      !(n.overflowY === n.overflowX && !Ld(e) && n[t] === `visible`)
    )
  },
  zd = function (e) {
    return Rd(e, `overflowY`)
  },
  Bd = function (e) {
    return Rd(e, `overflowX`)
  },
  Vd = function (e, t) {
    var n = t.ownerDocument,
      r = t
    do {
      if (
        (typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host),
        Wd(e, r))
      ) {
        var i = Gd(e, r)
        if (i[1] > i[2]) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body)
    return !1
  },
  Hd = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight]
  },
  Ud = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth]
  },
  Wd = function (e, t) {
    return e === `v` ? zd(t) : Bd(t)
  },
  Gd = function (e, t) {
    return e === `v` ? Hd(t) : Ud(t)
  },
  Kd = function (e, t) {
    return e === `h` && t === `rtl` ? -1 : 1
  },
  qd = function (e, t, n, r, i) {
    var a = Kd(e, window.getComputedStyle(t).direction),
      o = a * r,
      s = n.target,
      c = t.contains(s),
      l = !1,
      u = o > 0,
      d = 0,
      f = 0
    do {
      if (!s) break
      var p = Gd(e, s),
        m = p[0],
        h = p[1] - p[2] - a * m
      ;(m || h) && Wd(e, s) && ((d += h), (f += m))
      var g = s.parentNode
      s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
    } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)))
    return (
      ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
        (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
        (l = !0),
      l
    )
  },
  Jd = function (e) {
    return `changedTouches` in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  Yd = function (e) {
    return [e.deltaX, e.deltaY]
  },
  Xd = function (e) {
    return e && `current` in e ? e.current : e
  },
  Zd = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  Qd = function (e) {
    return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`
  },
  $d = 0,
  ef = []
function tf(e) {
  var t = H.useRef([]),
    n = H.useRef([0, 0]),
    r = H.useRef(),
    i = H.useState($d++)[0],
    a = H.useState(wd)[0],
    o = H.useRef(e)
  ;(H.useEffect(
    function () {
      o.current = e
    },
    [e],
  ),
    H.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`)
          var t = ed([e.lockRef.current], (e.shards || []).map(Xd), !0).filter(
            Boolean,
          )
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`)
            }),
            function () {
              ;(document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`)
                }))
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ))
  var s = H.useCallback(function (e, t) {
      if (
        (`touches` in e && e.touches.length === 2) ||
        (e.type === `wheel` && e.ctrlKey)
      )
        return !o.current.allowPinchZoom
      var i = Jd(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`
      if (`touches` in e && d === `h` && u.type === `range`) return !1
      var f = window.getSelection(),
        p = f && f.anchorNode
      if (p && (p === u || p.contains(u))) return !1
      var m = Vd(d, u)
      if (!m) return !0
      if ((m ? (l = d) : ((l = d === `v` ? `h` : `v`), (m = Vd(d, u))), !m))
        return !1
      if (
        (!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)
      )
        return !0
      var h = r.current || l
      return qd(h, t, e, h === `h` ? s : c, !0)
    }, []),
    c = H.useCallback(function (e) {
      var n = e
      if (!(!ef.length || ef[ef.length - 1] !== a)) {
        var r = `deltaY` in n ? Yd(n) : Jd(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              Zd(e.delta, r)
            )
          })[0]
        if (i && i.should) {
          n.cancelable && n.preventDefault()
          return
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(Xd)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target)
            })
          ;(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault()
        }
      }
    }, []),
    l = H.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: nf(r) }
      ;(t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a
          })
        }, 1))
    }, []),
    u = H.useCallback(function (e) {
      ;((n.current = Jd(e)), (r.current = void 0))
    }, []),
    d = H.useCallback(function (t) {
      l(t.type, Yd(t), t.target, s(t, e.lockRef.current))
    }, []),
    f = H.useCallback(function (t) {
      l(t.type, Jd(t), t.target, s(t, e.lockRef.current))
    }, [])
  H.useEffect(function () {
    return (
      ef.push(a),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener(`wheel`, c, Id),
      document.addEventListener(`touchmove`, c, Id),
      document.addEventListener(`touchstart`, u, Id),
      function () {
        ;((ef = ef.filter(function (e) {
          return e !== a
        })),
          document.removeEventListener(`wheel`, c, Id),
          document.removeEventListener(`touchmove`, c, Id),
          document.removeEventListener(`touchstart`, u, Id))
      }
    )
  }, [])
  var p = e.removeScrollBar,
    m = e.inert
  return H.createElement(
    H.Fragment,
    null,
    m ? H.createElement(a, { styles: Qd(i) }) : null,
    p
      ? H.createElement(Q, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  )
}
function nf(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode))
  return t
}
var rf = md(hd, tf),
  af = H.forwardRef(function (e, t) {
    return H.createElement(_d, Qu({}, e, { ref: t, sideCar: rf }))
  })
af.classNames = _d.classNames
var of = function (e) {
    return typeof document > `u`
      ? null
      : (Array.isArray(e) ? e[0] : e).ownerDocument.body
  },
  sf = new WeakMap(),
  cf = new WeakMap(),
  lf = {},
  uf = 0,
  df = function (e) {
    return e && (e.host || df(e.parentNode))
  },
  ff = function (e, t) {
    return t
      .map(function (t) {
        if (e.contains(t)) return t
        var n = df(t)
        return n && e.contains(n)
          ? n
          : (console.error(
              `aria-hidden`,
              t,
              `in not contained inside`,
              e,
              `. Doing nothing`,
            ),
            null)
      })
      .filter(function (e) {
        return !!e
      })
  },
  pf = function (e, t, n, r) {
    var i = ff(t, Array.isArray(e) ? e : [e])
    lf[n] || (lf[n] = new WeakMap())
    var a = lf[n],
      o = [],
      s = new Set(),
      c = new Set(i),
      l = function (e) {
        !e || s.has(e) || (s.add(e), l(e.parentNode))
      }
    i.forEach(l)
    var u = function (e) {
      !e ||
        c.has(e) ||
        Array.prototype.forEach.call(e.children, function (e) {
          if (s.has(e)) u(e)
          else
            try {
              var t = e.getAttribute(r),
                i = t !== null && t !== `false`,
                c = (sf.get(e) || 0) + 1,
                l = (a.get(e) || 0) + 1
              ;(sf.set(e, c),
                a.set(e, l),
                o.push(e),
                c === 1 && i && cf.set(e, !0),
                l === 1 && e.setAttribute(n, `true`),
                i || e.setAttribute(r, `true`))
            } catch (t) {
              console.error(`aria-hidden: cannot operate on `, e, t)
            }
        })
    }
    return (
      u(t),
      s.clear(),
      uf++,
      function () {
        ;(o.forEach(function (e) {
          var t = sf.get(e) - 1,
            i = a.get(e) - 1
          ;(sf.set(e, t),
            a.set(e, i),
            t || (cf.has(e) || e.removeAttribute(r), cf.delete(e)),
            i || e.removeAttribute(n))
        }),
          uf--,
          uf ||
            ((sf = new WeakMap()),
            (sf = new WeakMap()),
            (cf = new WeakMap()),
            (lf = {})))
      }
    )
  },
  mf = function (e, t, n) {
    n === void 0 && (n = `data-aria-hidden`)
    var r = Array.from(Array.isArray(e) ? e : [e]),
      i = t || of(e)
    return i
      ? (r.push.apply(r, Array.from(i.querySelectorAll(`[aria-live], script`))),
        pf(r, i, n, `aria-hidden`))
      : function () {
          return null
        }
  },
  hf = Object.defineProperty,
  gf = (e, t) => hf(e, `name`, { value: t, configurable: !0 }),
  _f = `Dialog`,
  [vf, yf] = pe(_f),
  [bf, xf] = vf(_f),
  Sf = gf((e) => {
    let {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = H.useRef(null),
      c = H.useRef(null),
      [l, u] = de({ prop: r, defaultProp: i ?? !1, onChange: a, caller: _f }),
      [d, f] = H.useState(0),
      [p, m] = H.useState(0)
    return (0, U.jsx)(bf, {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: A(),
      titleId: A(),
      descriptionId: A(),
      titlePresent: d > 0,
      descriptionPresent: p > 0,
      setTitleCount: f,
      setDescriptionCount: m,
      open: l,
      onOpenChange: u,
      onOpenToggle: H.useCallback(() => u((e) => !e), [u]),
      modal: o,
      children: n,
    })
  }, `Dialog`),
  Cf = `DialogPortal`,
  [wf, Tf] = vf(Cf, { forceMount: void 0 }),
  Ef = gf((e) => {
    let { __scopeDialog: t, forceMount: n, children: r, container: i } = e,
      a = xf(Cf, t)
    return (0, U.jsx)(wf, {
      scope: t,
      forceMount: n,
      children: H.Children.map(r, (e) =>
        (0, U.jsx)(se, {
          present: n || a.open,
          children: (0, U.jsx)(Gu, { asChild: !0, container: i, children: e }),
        }),
      ),
    })
  }, `DialogPortal`),
  Df = `DialogOverlay`,
  Of = H.forwardRef(
    gf(function (e, t) {
      let n = Tf(Df, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = xf(Df, e.__scopeDialog)
      return a.modal
        ? (0, U.jsx)(se, {
            present: r || a.open,
            children: (0, U.jsx)(Af, { ...i, ref: t }),
          })
        : null
    }, `DialogOverlay`),
  ),
  kf = je(`DialogOverlay.RemoveScroll`),
  Af = H.forwardRef(
    gf(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = xf(Df, n),
        a = bu(),
        o = N(t, a)
      return (0, U.jsx)(af, {
        as: kf,
        allowPinchZoom: !0,
        shards: [i.contentRef],
        children: (0, U.jsx)(k.div, {
          "data-state": Hf(i.open),
          ...r,
          ref: o,
          style: { pointerEvents: `auto`, ...r.style },
        }),
      })
    }, `DialogOverlayImpl`),
  ),
  jf = `DialogContent`,
  Mf = H.forwardRef(
    gf(function (e, t) {
      let n = Tf(jf, e.__scopeDialog),
        { forceMount: r = n.forceMount, ...i } = e,
        a = xf(jf, e.__scopeDialog)
      return (0, U.jsx)(se, {
        present: r || a.open,
        children: a.modal
          ? (0, U.jsx)(Nf, { ...i, ref: t })
          : (0, U.jsx)(Pf, { ...i, ref: t }),
      })
    }, `DialogContent`),
  ),
  Nf = H.forwardRef(
    gf(function (e, t) {
      let n = xf(jf, e.__scopeDialog),
        r = H.useRef(null),
        i = N(t, n.contentRef, r)
      return (
        H.useEffect(() => {
          let e = r.current
          if (e) return mf(e)
        }, []),
        (0, U.jsx)(Ff, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          onCloseAutoFocus: j(e.onCloseAutoFocus, (e) => {
            ;(e.preventDefault(), n.triggerRef.current?.focus())
          }),
          onPointerDownOutside: j(e.onPointerDownOutside, (e) => {
            let t = e.detail.originalEvent,
              n = t.button === 0 && t.ctrlKey === !0
            ;(t.button === 2 || n) && e.preventDefault()
          }),
          onFocusOutside: j(e.onFocusOutside, (e) => e.preventDefault()),
        })
      )
    }, `DialogContentModal`),
  ),
  Pf = H.forwardRef(
    gf(function (e, t) {
      let n = xf(jf, e.__scopeDialog),
        r = H.useRef(!1),
        i = H.useRef(!1)
      return (0, U.jsx)(Ff, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          ;(e.onCloseAutoFocus?.(t),
            t.defaultPrevented ||
              (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
            (r.current = !1),
            (i.current = !1))
        },
        onInteractOutside: (t) => {
          ;(e.onInteractOutside?.(t),
            t.defaultPrevented ||
              ((r.current = !0),
              t.detail.originalEvent.type === `pointerdown` &&
                (i.current = !0)))
          let a = t.target
          ;(n.triggerRef.current?.contains(a) && t.preventDefault(),
            t.detail.originalEvent.type === `focusin` &&
              i.current &&
              t.preventDefault())
        },
      })
    }, `DialogContentNonModal`),
  ),
  Ff = H.forwardRef(
    gf(function (e, t) {
      let {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: i,
          onCloseAutoFocus: a,
          ...o
        } = e,
        s = xf(jf, n)
      return (
        Xu(),
        (0, U.jsx)(U.Fragment, {
          children: (0, U.jsx)(ju, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, U.jsx)(yu, {
              role: `dialog`,
              id: s.contentId,
              "aria-describedby": s.descriptionPresent
                ? s.descriptionId
                : void 0,
              "aria-labelledby": s.titlePresent ? s.titleId : void 0,
              "data-state": Hf(s.open),
              ...o,
              ref: t,
              deferPointerDownOutside: !0,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
        })
      )
    }, `DialogContentImpl`),
  ),
  If = `DialogTitle`,
  Lf = H.forwardRef(
    gf(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = xf(If, n),
        { setTitleCount: a } = i
      return (
        ce(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, U.jsx)(k.h2, { id: i.titleId, ...r, ref: t })
      )
    }, `DialogTitle`),
  ),
  Rf = `DialogDescription`,
  zf = H.forwardRef(
    gf(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = xf(Rf, n),
        { setDescriptionCount: a } = i
      return (
        ce(() => (a((e) => e + 1), () => a((e) => e - 1)), [a]),
        (0, U.jsx)(k.p, { id: i.descriptionId, ...r, ref: t })
      )
    }, `DialogDescription`),
  ),
  Bf = `DialogClose`,
  Vf = H.forwardRef(
    gf(function (e, t) {
      let { __scopeDialog: n, ...r } = e,
        i = xf(Bf, n)
      return (0, U.jsx)(k.button, {
        type: `button`,
        ...r,
        ref: t,
        onClick: j(e.onClick, () => i.onOpenChange(!1)),
      })
    }, `DialogClose`),
  )
function Hf(e) {
  return e ? `open` : `closed`
}
gf(Hf, `getState`)
var Uf = Sf,
  Wf = Ef,
  Gf = H.forwardRef(({ className: e, ...t }, n) =>
    (0, U.jsx)(Of, {
      className: D(
        `fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0`,
        e,
      ),
      ...t,
      ref: n,
    }),
  )
Gf.displayName = Of.displayName
var Kf = Ae(
    `fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out`,
    {
      variants: {
        side: {
          top: `inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top`,
          bottom: `inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom`,
          left: `inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm`,
          right: `inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm`,
        },
      },
      defaultVariants: { side: `right` },
    },
  ),
  qf = H.forwardRef(
    ({ side: e = `right`, className: t, children: n, ...r }, i) =>
      (0, U.jsxs)(Wf, {
        children: [
          (0, U.jsx)(Gf, {}),
          (0, U.jsxs)(Mf, {
            ref: i,
            className: D(Kf({ side: e }), t),
            ...r,
            children: [
              (0, U.jsxs)(Vf, {
                className: `absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary`,
                children: [
                  (0, U.jsx)(cu, { className: `h-4 w-4` }),
                  (0, U.jsx)(`span`, {
                    className: `sr-only`,
                    children: `Close`,
                  }),
                ],
              }),
              n,
            ],
          }),
        ],
      }),
  )
qf.displayName = Mf.displayName
var Jf = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Lf, {
    ref: n,
    className: D(`text-lg font-semibold text-foreground`, e),
    ...t,
  }),
)
Jf.displayName = Lf.displayName
var Yf = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(zf, {
    ref: n,
    className: D(`text-sm text-muted-foreground`, e),
    ...t,
  }),
)
Yf.displayName = zf.displayName
var Xf = `gg-cart-v1`,
  Zf = (0, H.createContext)(null)
function Qf({ children: e }) {
  let [t, n] = (0, H.useState)([]),
    [r, i] = (0, H.useState)(!1),
    [a, o] = (0, H.useState)(!1)
  ;((0, H.useEffect)(() => {
    try {
      let e = window.localStorage.getItem(Xf)
      e && n(JSON.parse(e))
    } catch {}
    i(!0)
  }, []),
    (0, H.useEffect)(() => {
      r && window.localStorage.setItem(Xf, JSON.stringify(t))
    }, [t, r]))
  let s = (0, H.useCallback)((e) => {
      n((t) => {
        let n = e.qty ?? 1,
          r = t.findIndex(
            (t) =>
              t.slug === e.slug &&
              t.variantId === e.variantId &&
              t.subscribe === e.subscribe,
          )
        return r >= 0
          ? t.map((e, t) => (t === r ? { ...e, qty: e.qty + n } : e))
          : [...t, { ...e, qty: n }]
      })
    }, []),
    c = (0, H.useCallback)((e, t) => {
      n((n) =>
        n
          .map((n, r) => (r === e ? { ...n, ...t } : n))
          .filter((e) => e.qty > 0),
      )
    }, []),
    l = (0, H.useCallback)((e) => {
      n((t) => t.filter((t, n) => n !== e))
    }, []),
    u = (0, H.useCallback)(() => n([]), []),
    d = (0, H.useMemo)(
      () => ({
        lines: t,
        ready: r,
        isOpen: a,
        setOpen: o,
        add: s,
        update: c,
        remove: l,
        clear: u,
      }),
      [t, r, a, s, c, l, u],
    )
  return (0, U.jsx)(Zf.Provider, { value: d, children: e })
}
function $f() {
  let e = (0, H.useContext)(Zf)
  if (!e) throw Error(`useCart must be used inside CartProvider`)
  return e
}
var ep = (e) => Math.round(e * 100) / 100
function tp(e) {
  let t = Pe(e.slug),
    n = t ? Ne(t, e.variantId) : void 0
  return n ? n.price * e.qty : 0
}
function np(e) {
  return e ? (ke.promoCodes[e.trim().toUpperCase()] ?? 0) : 0
}
function rp(e, t = `standard`, n) {
  let r = ep(e.reduce((e, t) => e + tp(t), 0)),
    i = ep(
      e
        .filter((e) => e.subscribe)
        .reduce((e, t) => e + tp(t) * ke.subscribeDiscount, 0),
    ),
    a = r - i,
    o = ep(a * np(n)),
    s = ep(a - o),
    c = r >= ke.freeShippingThreshold,
    l = 0
  return (
    e.length > 0 &&
      (l =
        t === `express`
          ? ke.expressShippingPrice
          : c
            ? 0
            : ke.standardShippingPrice),
    {
      itemCount: e.reduce((e, t) => e + t.qty, 0),
      subtotal: r,
      subscribeSavings: i,
      promoDiscount: o,
      shipping: l,
      total: ep(s + l),
      remainingForFreeShipping: ep(Math.max(0, ke.freeShippingThreshold - r)),
    }
  )
}
function ip({ subtotal: e, remaining: t }) {
  let n = Math.min(100, (e / ke.freeShippingThreshold) * 100)
  return (0, U.jsxs)(`div`, {
    className: `rounded-xl bg-accent p-3`,
    children: [
      (0, U.jsxs)(`p`, {
        className: `flex items-center gap-2 text-sm font-medium text-navy`,
        children: [
          (0, U.jsx)(su, { className: `size-4 shrink-0 text-teal` }),
          t > 0
            ? (0, U.jsxs)(`span`, {
                children: [
                  `You're `,
                  (0, U.jsx)(`strong`, { children: Ie(t) }),
                  ` away from `,
                  (0, U.jsx)(`strong`, { children: `free delivery` }),
                ],
              })
            : (0, U.jsxs)(`span`, {
                children: [
                  (0, U.jsx)(`strong`, {
                    children: `You unlocked free delivery!`,
                  }),
                  ` 🎉`,
                ],
              }),
        ],
      }),
      (0, U.jsx)(`div`, {
        className: `mt-2 h-2 overflow-hidden rounded-full bg-card`,
        children: (0, U.jsx)(`div`, {
          className: `h-full rounded-full bg-teal transition-all duration-500`,
          style: { width: `${n}%` },
        }),
      }),
    ],
  })
}
function ap() {
  let { lines: e, isOpen: t, setOpen: n, update: r, remove: i } = $f(),
    a = rp(e)
  return (0, U.jsx)(Uf, {
    open: t,
    onOpenChange: n,
    children: (0, U.jsxs)(qf, {
      className: `flex w-full flex-col gap-0 p-0 sm:max-w-md`,
      children: [
        (0, U.jsx)(`div`, {
          className: `border-b px-6 py-5`,
          children: (0, U.jsxs)(Jf, {
            className: `text-xl font-bold text-navy`,
            children: [`Your cart (`, a.itemCount, `)`],
          }),
        }),
        e.length === 0
          ? (0, U.jsxs)(`div`, {
              className: `flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center`,
              children: [
                (0, U.jsx)(`div`, {
                  className: `grid size-16 place-items-center rounded-full bg-accent text-teal`,
                  children: (0, U.jsx)(au, { className: `size-7` }),
                }),
                (0, U.jsx)(`p`, {
                  className: `font-semibold text-navy`,
                  children: `Your cart is empty`,
                }),
                (0, U.jsx)(Me, {
                  asChild: !0,
                  variant: `sky`,
                  size: `xl`,
                  onClick: () => n(!1),
                  children: (0, U.jsx)(T, {
                    to: `/products`,
                    children: `Shop products`,
                  }),
                }),
              ],
            })
          : (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(`div`, {
                  className: `px-6 pt-4`,
                  children: (0, U.jsx)(ip, {
                    subtotal: a.subtotal,
                    remaining: a.remainingForFreeShipping,
                  }),
                }),
                (0, U.jsx)(`ul`, {
                  className: `flex-1 space-y-4 overflow-y-auto px-6 py-4`,
                  children: e.map((e, t) => {
                    let n = Pe(e.slug),
                      a = n ? Ne(n, e.variantId) : void 0
                    return !n || !a
                      ? null
                      : (0, U.jsxs)(
                          `li`,
                          {
                            className: `flex gap-3`,
                            children: [
                              (0, U.jsx)(`div`, {
                                className: `grid size-20 shrink-0 place-items-center rounded-xl bg-card p-1 shadow-card`,
                                children: (0, U.jsx)(`img`, {
                                  src: a.images[0],
                                  alt: ``,
                                  className: `max-h-full`,
                                }),
                              }),
                              (0, U.jsxs)(`div`, {
                                className: `flex-1`,
                                children: [
                                  (0, U.jsx)(`p`, {
                                    className: `text-sm font-semibold leading-snug text-navy`,
                                    children: n.name,
                                  }),
                                  (0, U.jsxs)(`p`, {
                                    className: `text-xs text-muted-foreground`,
                                    children: [
                                      a.label,
                                      e.subscribe &&
                                        ` · Autoship every ${e.frequencyWeeks} wks`,
                                    ],
                                  }),
                                  (0, U.jsxs)(`div`, {
                                    className: `mt-2 flex items-center justify-between`,
                                    children: [
                                      (0, U.jsxs)(`div`, {
                                        className: `flex items-center rounded-full border`,
                                        children: [
                                          (0, U.jsx)(`button`, {
                                            type: `button`,
                                            className: `grid size-8 place-items-center`,
                                            onClick: () =>
                                              r(t, { qty: e.qty - 1 }),
                                            "aria-label": `Decrease quantity`,
                                            children: (0, U.jsx)(De, {
                                              className: `size-3.5`,
                                            }),
                                          }),
                                          (0, U.jsx)(`span`, {
                                            className: `w-6 text-center text-sm font-semibold`,
                                            children: e.qty,
                                          }),
                                          (0, U.jsx)(`button`, {
                                            type: `button`,
                                            className: `grid size-8 place-items-center`,
                                            onClick: () =>
                                              r(t, { qty: e.qty + 1 }),
                                            "aria-label": `Increase quantity`,
                                            children: (0, U.jsx)(iu, {
                                              className: `size-3.5`,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, U.jsx)(`span`, {
                                        className: `text-sm font-bold text-navy`,
                                        children: Ie(tp(e)),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, U.jsx)(`button`, {
                                type: `button`,
                                onClick: () => i(t),
                                className: `self-start text-muted-foreground hover:text-destructive`,
                                "aria-label": `Remove ${n.name}`,
                                children: (0, U.jsx)(ou, {
                                  className: `size-4`,
                                }),
                              }),
                            ],
                          },
                          `${e.slug}-${e.variantId}-${e.subscribe}`,
                        )
                  }),
                }),
                (0, U.jsxs)(`div`, {
                  className: `space-y-3 border-t bg-card px-6 py-5`,
                  children: [
                    a.subscribeSavings > 0 &&
                      (0, U.jsxs)(`div`, {
                        className: `flex justify-between text-sm text-success`,
                        children: [
                          (0, U.jsx)(`span`, { children: `Subscribe & Save` }),
                          (0, U.jsxs)(`span`, {
                            children: [`−`, Ie(a.subscribeSavings)],
                          }),
                        ],
                      }),
                    (0, U.jsxs)(`div`, {
                      className: `flex justify-between text-base font-bold text-navy`,
                      children: [
                        (0, U.jsx)(`span`, { children: `Subtotal` }),
                        (0, U.jsx)(`span`, {
                          children: Ie(a.subtotal - a.subscribeSavings),
                        }),
                      ],
                    }),
                    (0, U.jsx)(Me, {
                      asChild: !0,
                      variant: `sky`,
                      size: `cta`,
                      className: `w-full`,
                      onClick: () => n(!1),
                      children: (0, U.jsx)(T, {
                        to: `/checkout`,
                        children: `Go to checkout`,
                      }),
                    }),
                    (0, U.jsx)(`p`, {
                      className: `text-center text-xs text-muted-foreground`,
                      children: `Delivery and discounts at checkout`,
                    }),
                  ],
                }),
              ],
            }),
      ],
    }),
  })
}
var op = [
    { label: `Products`, to: `/products` },
    { label: `About`, to: `/about` },
    { label: `Community`, to: `/community` },
    { label: `Checkout`, to: `/checkout` },
    { label: `Login`, to: `/login` },
    { label: `Register`, to: `/register` },
  ],
  sp = [
    {
      icon: `leaf`,
      title: `Non-GMO and Clean Ingredients`,
      body: `Recipes avoid GMOs, meat by-products, corn, wheat, soy, and artificial colors or preservatives.`,
    },
    {
      icon: `heart`,
      title: `Heart-Healthy Fat Levels`,
      body: `Dry formulas feature a lower fat content (around 9% minimum) and moderate protein (22% to 24%) to reduce cardiovascular strain.`,
    },
    {
      icon: `sprout`,
      title: `Digestive Support`,
      body: `Added prebiotics and probiotics, along with fiber-rich grains like oatmeal and brown rice, help dogs absorb nutrients and maintain firm stools.`,
    },
    {
      icon: `bone`,
      title: `Hip and Joint Care`,
      body: `Formulas include glucosamine, chondroitin, or New Zealand green lipped mussels to protect bones and cartilage, which is especially helpful for large breeds.`,
    },
    {
      icon: `sparkles`,
      title: `Skin, Coat, and Immune Health`,
      body: `Guaranteed omega-3 and omega-6 fatty acids nourish the skin and coat, while whole fruits and vegetables like blueberries, cranberries, spinach, and sweet potatoes provide natural antioxidants.`,
    },
    {
      icon: `users`,
      title: `All-Life-Stage Versatility`,
      body: `Both dry and canned options meet nutritional standards for puppies, adults, and seniors of any size, letting multi-dog households share one food.`,
    },
  ],
  cp = [
    {
      icon: `leaf`,
      title: `100% Non-GMO & Natural`,
      body: `Zero artificial preservatives, pesticides, or genetically modified ingredients.`,
    },
    {
      icon: `users`,
      title: `All Life Stages`,
      body: `Perfectly balanced nutrition for puppies, adults, and seniors of every breed size—from 2 lbs to 300 lbs.`,
    },
    {
      icon: `heart`,
      title: `Heart Health`,
      body: `Packed with natural taurine to support cardiovascular health.`,
    },
    {
      icon: `bone`,
      title: `Natural Joint Support`,
      body: `Infused with New Zealand green mussels as a powerful source of glucosamine and chondroitin.`,
    },
    {
      icon: `droplets`,
      title: `No Greasy Fat Coating`,
      body: `Formulated clean without outer fat layers.`,
    },
  ],
  lp = [
    {
      quote: `My Great Dane lived to be 15 years old on Gentle Giants. Our vet could not believe his health and mobility at that age. This food truly gives you more years together.`,
      name: `Timothy Nathan`,
      initials: `TN`,
    },
    {
      quote: `Switched my rescue pit mix to Gentle Giants after endless skin issues. Within weeks, his coat was shiny, his digestion settled, and his energy completely returned.`,
      name: `Austin Campbell`,
      initials: `AC`,
    },
  ],
  up = [
    {
      name: `Chewy`,
      url: `https://www.chewy.com/brands/gentle-giants-6786`,
      style: `chewy`,
    },
    {
      name: `Tractor Supply Co.`,
      url: `https://www.tractorsupply.com/tsc/search/gentle%20giants`,
      style: `tsc`,
    },
    {
      name: `PetSmart`,
      url: `https://www.petsmart.com/search/?q=Gentle%20Giants%20dog%20food`,
      style: `petsmart`,
    },
    {
      name: `Petco`,
      url: `https://www.petco.com/shop/en/petcostore/brand/gentle-giants`,
      style: `petco`,
    },
    {
      name: `H-E-B`,
      url: `https://www.heb.com/search/?q=Gentle+Giants`,
      style: `heb`,
    },
    {
      name: `Target`,
      url: `https://www.target.com/s?searchTerm=Gentle+Giants+dog+food`,
      style: `target`,
    },
    { name: `Gentle Giants`, url: `/products`, style: `gg` },
    { name: `Buy Direct`, url: `/products`, style: `direct` },
  ],
  dp = [
    { name: `Duke`, breed: `Great Dane`, age: 15, image: `/images/dog8.webp` },
    {
      name: `Tank`,
      breed: `English Bulldog`,
      age: 16,
      image: `/images/dog3.webp`,
    },
    {
      name: `Rocco`,
      breed: `Shepherd Mix`,
      age: 17,
      image: `/images/dog6.webp`,
    },
    { name: `Maple`, breed: `Aussie Mix`, age: 18, image: `/images/dog7.webp` },
    { name: `Waffles`, breed: `Corgi`, age: 19, image: `/images/dog4.webp` },
    { name: `Otis`, breed: `Pug`, age: 20, image: `/images/dog2.webp` },
    { name: `Lulu`, breed: `Shih Tzu`, age: 21, image: `/images/dog5.webp` },
    {
      name: `Biscuit`,
      breed: `Jack Russell`,
      age: 22,
      image: `/images/dog1.webp`,
    },
    { name: `Pepper`, breed: `Chihuahua`, age: 23, image: `/images/dog9.webp` },
  ],
  fp = [
    {
      title: `The best dog food on the planet`,
      quote: `I have been using this food since I first learned about it. My male lived to be 18 years old eating this food and she never went to the vet only for her shots. I truly believe in this brand of dog food.`,
      name: `Peach`,
    },
    {
      title: `Like a puppy again!`,
      quote: `We have an 8 year old Half Poodle, Half Havanese. She had ceased playing with toys and just laid around. After 2 months, she was playing with toys and could once again jump onto the bed. We will feed Gentle Giants dog food to them no matter where we have to go to get it!`,
      name: `Trixie's family`,
    },
    {
      title: `Fantastic!`,
      quote: `There are no words capable of conveying the LOVE we have for the Gentle Giants brand. Our English Mastiff is sleek and lean thanks to this amazing food.`,
      name: `Chester`,
    },
    {
      title: `Won't give another food to my dog`,
      quote: `I have started adding the salmon wet food to the Gentle Giants chicken dry food and my dog goes nuts. She absolutely loves it.`,
      name: `Missa`,
    },
    {
      title: `Best food for my sighthounds`,
      quote: `I own two amazing sighthounds, a Borzoi and an Afghan Hound. I have tried many other foods and I have to say that Gentle Giants is THE best food out there! Their coats shine and they maintain their weight.`,
      name: `Sighthound Dad`,
    },
    {
      title: `Even my fussy little toy poodles love it`,
      quote: `I have 9 very opinionated toy dogs when it comes to what they eat — but they will all chow down on Gentle Giants. They love the stuff.`,
      name: `Pamela`,
    },
  ],
  pp = [
    {
      src: `/images/brand/burt-ellen.webp`,
      alt: `Burt Ward talking about Gentle Giants on The Ellen Show`,
      span: `big`,
    },
    {
      src: `/images/brand/for-the-life.webp`,
      alt: `Gentle Giants — for the life of your dog`,
    },
    {
      src: `/images/brand/burt-pouring.webp`,
      alt: `Burt Ward pouring Gentle Giants for rescue dogs`,
    },
    {
      src: `/images/brand/scott-lucky.webp`,
      alt: `Lucky turned 30 years old eating Gentle Giants`,
      span: `wide`,
    },
    {
      src: `/images/brand/dogs-of-many-ages.webp`,
      alt: `There's nothing more precious than life — dogs of many ages`,
    },
    {
      src: `/images/brand/bedroom-scene.webp`,
      alt: `Burt and Tracy's rescued dogs relaxing at home`,
    },
    {
      src: `/images/gallery-pool.webp`,
      alt: `Rescued dogs splashing in a backyard pool`,
    },
    {
      src: `/images/gallery-family.webp`,
      alt: `A family hugging their senior dog`,
    },
  ],
  mp = [
    `M14625 3970 c-90 -11 -214 -29 -270 -40 -27 -5 -92 -9 -143 -9 -87 -1 -98 -3 -155 -35 -34 -19 -76 -37 -93 -41 -18 -3 -51 -19 -75 -34 -24 -15 -65 -35 -91 -43 -26 -9 -67 -29 -90 -45 -24 -16 -55 -35 -70 -42 -16 -8 -35 -25 -43 -37 -8 -13 -32 -32 -53 -42 -20 -10 -72 -47 -115 -82 -44 -36 -91 -74 -106 -85 -58 -43 -254 -272 -286 -335 -10 -19 -29 -48 -42 -65 -43 -53 -96 -139 -118 -190 -11 -27 -30 -68 -42 -90 -11 -22 -28 -72 -37 -112 -9 -39 -30 -94 -47 -121 -22 -36 -33 -70 -40 -121 -4 -39 -19 -104 -31 -144 -34 -108 -35 -544 -1 -624 12 -28 25 -75 29 -105 8 -66 20 -97 45 -123 10 -12 27 -46 38 -77 22 -65 72 -144 131 -208 114 -125 138 -148 167 -164 18 -9 37 -25 43 -35 18 -34 176 -110 271 -131 48 -10 102 -26 119 -35 70 -36 174 -46 491 -46 168 0 323 2 345 6 79 13 140 28 167 42 16 8 83 26 149 39 67 14 138 34 157 44 20 10 62 26 94 35 31 9 70 27 85 39 36 31 67 46 90 46 11 0 37 12 58 27 21 15 58 36 81 47 85 43 336 275 367 340 8 17 28 46 44 64 16 17 35 51 42 75 7 23 23 63 36 88 61 121 64 557 5 639 -10 14 -28 46 -41 70 -25 50 -62 92 -178 201 -23 22 -56 40 -86 48 -26 6 -71 25 -100 41 -74 42 -166 53 -457 54 -276 1 -279 2 -279 67 0 69 -42 146 -87 158 -73 21 -152 6 -172 -32 -6 -12 -27 -32 -46 -44 -19 -13 -42 -35 -52 -50 -9 -16 -25 -38 -35 -49 -11 -12 -27 -48 -37 -81 -10 -32 -34 -83 -54 -112 -21 -29 -37 -58 -37 -65 0 -6 -14 -40 -31 -76 -17 -36 -42 -101 -54 -145 -13 -44 -34 -107 -46 -140 -18 -50 -22 -82 -23 -191 -1 -153 14 -187 99 -220 54 -20 210 -15 268 9 117 49 190 143 207 265 9 62 21 102 42 140 47 83 51 84 235 77 184 -7 208 -13 255 -63 19 -20 44 -44 55 -54 52 -41 54 -213 4 -271 -16 -18 -38 -50 -49 -72 -21 -41 -63 -80 -119 -108 -18 -10 -36 -23 -40 -31 -4 -7 -37 -28 -73 -46 -36 -18 -72 -38 -80 -46 -9 -7 -47 -20 -85 -29 -39 -9 -109 -29 -156 -46 -165 -56 -455 -69 -659 -29 -155 30 -355 189 -389 310 -7 25 -20 56 -28 69 -56 87 -56 485 0 597 13 27 29 78 36 114 8 39 23 81 40 105 16 22 34 57 41 78 6 21 28 57 48 81 21 24 64 80 96 125 32 44 62 81 66 81 3 0 35 25 70 55 35 30 69 55 75 55 6 0 24 14 41 31 16 16 47 38 69 48 22 10 57 30 78 44 21 14 50 28 66 32 16 3 39 17 52 31 13 13 48 32 79 40 30 9 87 27 125 39 171 57 679 81 977 46 116 -14 116 -14 160 12 73 42 93 90 93 222 0 129 -14 169 -88 251 -59 66 -98 84 -179 84 -34 0 -88 7 -118 15 -149 41 -428 57 -605 35z`,
    `M2645 3939 c-71 -5 -194 -11 -273 -13 -162 -5 -189 -10 -252 -41 -25 -13 -66 -28 -90 -35 -25 -6 -67 -24 -95 -39 -27 -16 -68 -34 -90 -41 -56 -18 -183 -89 -225 -125 -19 -17 -52 -38 -73 -48 -21 -9 -40 -24 -44 -32 -3 -9 -28 -27 -55 -41 -86 -43 -347 -321 -408 -434 -8 -15 -31 -43 -50 -62 -39 -39 -101 -143 -120 -203 -7 -22 -22 -53 -35 -70 -12 -16 -28 -48 -35 -70 -7 -22 -28 -78 -48 -125 -22 -54 -39 -119 -48 -181 -7 -52 -24 -117 -36 -145 -32 -69 -35 -539 -4 -614 10 -25 24 -78 32 -118 22 -117 34 -154 65 -203 16 -25 29 -51 29 -57 0 -6 13 -26 29 -44 15 -18 38 -53 51 -78 31 -62 191 -214 260 -247 30 -15 66 -34 80 -44 14 -9 50 -24 80 -33 30 -9 82 -29 115 -46 59 -29 164 -49 435 -82 95 -11 316 -5 370 12 19 5 98 17 175 26 115 13 154 22 215 49 41 18 104 38 140 45 36 6 90 22 120 35 30 13 81 28 112 34 32 7 74 25 98 42 23 17 61 37 83 45 23 8 53 25 67 38 14 12 46 35 72 49 69 40 283 257 314 320 14 29 35 62 46 73 10 12 26 47 34 79 8 31 27 75 41 96 39 59 58 233 44 400 -12 142 -19 168 -61 216 -17 19 -30 40 -30 48 0 23 -160 196 -194 210 -17 8 -40 23 -50 34 -11 12 -44 28 -75 37 -31 9 -83 25 -116 36 -132 44 -188 50 -423 45 -256 -5 -252 -6 -252 74 0 54 3 49 -90 132 -40 35 -67 31 -161 -25 -52 -31 -71 -49 -85 -81 -11 -23 -30 -54 -42 -69 -57 -67 -182 -332 -201 -425 -6 -29 -22 -75 -36 -101 -51 -98 -79 -359 -45 -427 22 -44 119 -90 190 -89 98 1 223 49 294 112 79 70 78 68 88 191 10 133 9 130 68 175 50 38 50 38 173 34 117 -4 126 -5 204 -42 164 -77 231 -229 146 -330 -13 -16 -33 -46 -43 -66 -22 -43 -138 -152 -191 -180 -19 -10 -41 -26 -48 -34 -8 -9 -52 -28 -100 -42 -47 -15 -102 -34 -121 -44 -19 -10 -82 -27 -140 -39 -58 -12 -139 -32 -180 -43 -103 -29 -264 -30 -335 -1 -27 11 -84 28 -125 38 -72 17 -260 108 -260 125 0 4 -16 28 -36 52 -20 23 -44 59 -52 78 -9 19 -29 49 -44 65 -41 45 -52 119 -51 330 2 234 16 330 54 389 16 24 36 70 44 101 8 31 26 71 39 88 13 18 29 48 35 67 6 19 38 64 72 100 33 36 73 83 89 105 15 22 51 58 80 80 28 22 65 52 82 68 18 15 37 27 43 27 6 0 26 15 44 34 18 19 54 42 80 52 25 9 58 25 73 36 15 10 53 28 85 39 31 11 69 30 83 43 17 17 50 29 105 40 44 9 103 23 130 32 166 51 742 57 896 8 56 -17 183 49 212 112 37 78 10 271 -46 334 -21 22 -37 45 -37 51 0 5 -16 17 -37 25 -20 9 -54 30 -75 47 -38 30 -40 31 -191 38 -83 4 -197 12 -252 18 -110 11 -121 11 -310 0z`,
    `M20367 2759 c-65 -34 -90 -126 -62 -227 21 -73 100 -162 190 -213 31 -17 60 -39 65 -49 6 -10 35 -28 65 -39 72 -27 165 -80 172 -98 8 -20 -15 -140 -43 -233 -30 -101 -41 -166 -49 -287 -3 -57 -15 -135 -25 -175 -27 -103 -27 -285 0 -376 11 -37 24 -110 29 -163 13 -130 48 -214 121 -290 63 -65 88 -74 201 -67 104 6 123 29 115 142 -3 45 -8 250 -12 456 -6 375 -6 375 21 500 14 69 32 161 40 204 15 80 38 125 96 188 23 24 34 28 82 28 109 0 209 19 277 54 36 18 86 39 112 46 58 15 131 88 147 146 14 50 14 164 1 200 -10 26 -41 68 -87 119 -18 20 -32 25 -72 25 -54 0 -44 8 -135 -110 -34 -43 -48 -53 -104 -70 -71 -22 -188 -26 -287 -10 -33 5 -109 14 -168 19 -86 7 -120 15 -170 39 -34 16 -95 35 -135 42 -82 13 -109 31 -228 148 -81 79 -95 84 -157 51z`,
    `M7270 2744 c-25 -14 -51 -31 -58 -38 -19 -18 -27 -126 -13 -167 12 -37 102 -134 172 -187 24 -18 66 -51 94 -72 27 -22 67 -46 90 -53 50 -17 154 -83 162 -102 3 -8 -4 -29 -15 -47 -11 -20 -26 -77 -36 -144 -9 -61 -25 -136 -35 -165 -64 -181 -58 -847 8 -976 10 -21 23 -56 27 -78 11 -60 107 -151 174 -166 64 -14 146 -4 189 22 33 20 33 20 24 197 -22 480 6 1052 57 1137 10 17 32 53 49 82 36 61 35 61 187 72 128 10 158 19 274 78 160 81 194 128 193 275 -1 142 -64 238 -158 238 -62 0 -73 -7 -100 -60 -62 -122 -149 -143 -478 -116 -162 13 -207 20 -240 38 -23 11 -91 32 -152 45 -64 13 -120 32 -135 43 -14 11 -42 29 -62 40 -21 11 -42 29 -48 40 -6 11 -25 27 -43 36 -18 9 -40 25 -50 35 -22 23 -22 23 -77 -7z`,
    `M19908 2733 c-68 -20 -136 -110 -149 -197 -16 -98 -25 -137 -49 -201 -26 -72 -45 -341 -37 -522 6 -117 -3 -180 -25 -194 -19 -13 -47 25 -54 73 -4 22 -18 56 -32 76 -14 20 -31 62 -39 92 -8 30 -28 72 -43 95 -16 22 -36 69 -45 104 -9 36 -25 82 -36 104 -11 21 -27 73 -35 115 -8 42 -26 101 -40 132 -14 30 -32 80 -40 110 -24 90 -69 120 -181 120 -65 0 -86 -8 -156 -60 -67 -50 -73 -66 -87 -215 -5 -60 -16 -129 -24 -151 -18 -51 -32 -135 -46 -280 -6 -62 -19 -138 -30 -169 -11 -31 -29 -112 -40 -180 -10 -67 -31 -167 -45 -222 -27 -106 -55 -276 -55 -331 0 -18 -11 -59 -25 -92 -64 -153 -2 -231 183 -229 113 1 151 14 210 71 42 40 51 56 61 104 6 32 20 68 32 80 15 16 26 53 40 138 11 63 28 135 38 158 13 30 21 83 26 173 8 138 15 165 44 165 20 0 36 -32 46 -95 4 -22 20 -61 37 -87 16 -26 36 -70 43 -99 8 -28 25 -68 38 -88 13 -20 29 -53 36 -73 7 -20 25 -54 41 -76 15 -22 38 -59 51 -83 45 -89 129 -184 176 -200 47 -15 207 -7 253 14 19 8 53 33 76 54 41 40 41 40 48 179 13 252 36 627 46 744 11 125 20 884 11 899 -35 54 -130 73 -223 44z`,
    `M6833 2708 c-50 -11 -135 -83 -164 -139 -10 -21 -28 -89 -38 -151 -11 -62 -29 -134 -40 -159 -31 -69 -42 -174 -41 -374 2 -243 2 -248 -15 -271 -15 -19 -15 -19 -34 4 -11 13 -23 43 -27 67 -4 27 -18 60 -35 81 -16 20 -36 59 -44 86 -8 27 -25 62 -38 78 -16 18 -29 52 -36 90 -5 34 -24 90 -40 124 -16 33 -37 95 -46 136 -9 44 -27 89 -41 107 -15 20 -29 56 -34 90 -12 71 -28 87 -111 109 -77 20 -142 11 -213 -29 -60 -33 -76 -70 -87 -191 -5 -57 -18 -142 -29 -188 -20 -80 -41 -223 -55 -358 -4 -37 -19 -94 -36 -131 -22 -51 -31 -92 -38 -175 -6 -60 -19 -138 -30 -172 -12 -35 -30 -137 -41 -225 -12 -89 -28 -182 -37 -207 -26 -76 -28 -145 -4 -169 38 -38 156 -54 280 -36 70 10 155 83 171 149 6 23 21 66 35 96 27 62 32 82 44 192 5 46 18 95 31 120 18 34 24 69 31 173 9 132 20 164 53 152 8 -3 18 -23 21 -44 11 -62 24 -98 49 -132 14 -18 30 -56 36 -84 7 -29 24 -74 39 -102 15 -27 35 -71 45 -97 9 -26 27 -59 39 -74 12 -15 31 -45 42 -65 34 -64 104 -158 131 -176 148 -96 411 -22 428 122 3 22 10 202 17 400 6 198 15 394 21 435 5 41 11 241 14 445 6 369 6 369 -22 426 -36 77 -61 88 -151 67z`,
    `M16025 2713 c-36 -10 -105 -64 -146 -116 -39 -49 -41 -54 -37 -107 5 -63 60 -154 106 -179 15 -8 42 -27 60 -42 22 -19 44 -29 66 -29 67 0 71 -16 56 -218 -7 -97 -16 -296 -19 -440 -6 -264 -6 -264 -30 -284 -21 -16 -34 -18 -85 -13 -76 7 -123 -17 -172 -88 -63 -91 -65 -132 -10 -241 80 -159 248 -233 357 -156 54 39 94 33 143 -22 49 -56 70 -66 145 -79 163 -26 271 64 271 225 0 109 -37 164 -145 216 -116 56 -115 52 -105 300 5 118 9 324 10 456 0 274 -5 258 88 273 71 11 153 52 188 94 39 46 35 165 -7 233 -39 62 -85 111 -124 132 -47 25 -183 21 -273 -9 -73 -23 -73 -23 -135 11 -34 18 -75 44 -90 57 -16 13 -37 23 -47 23 -10 0 -24 2 -32 4 -7 2 -22 1 -33 -1z`,
    `M9250 2663 c-123 -26 -136 -32 -179 -78 -39 -42 -41 -48 -41 -107 0 -101 -19 -319 -35 -410 -15 -80 -22 -133 -45 -337 -6 -53 -21 -118 -34 -150 -13 -31 -34 -104 -46 -164 -12 -59 -30 -127 -41 -152 -11 -24 -27 -97 -37 -163 -12 -77 -26 -131 -40 -153 -11 -19 -28 -63 -37 -98 -9 -35 -28 -85 -41 -112 -30 -57 -26 -83 18 -98 68 -24 506 -5 613 26 27 8 99 25 159 39 72 15 122 33 147 50 20 14 58 32 84 39 100 30 224 153 232 230 9 78 -26 148 -92 183 -62 32 -232 11 -307 -38 -23 -15 -72 -36 -107 -45 -35 -9 -87 -29 -115 -46 -58 -32 -92 -36 -122 -15 -18 14 -18 16 -3 43 9 15 24 53 33 84 9 31 22 62 30 68 8 7 24 40 36 75 11 34 31 77 43 96 26 40 41 75 58 140 6 25 19 64 30 86 10 23 25 70 33 105 7 35 25 91 39 124 58 136 76 490 33 638 -32 112 -139 168 -266 140z`,
    `M17610 2659 c-30 -5 -64 -16 -76 -24 -34 -22 -81 -112 -99 -190 -9 -38 -27 -86 -40 -106 -13 -20 -31 -63 -40 -95 -10 -33 -28 -75 -41 -95 -14 -20 -32 -71 -41 -115 -9 -43 -26 -95 -38 -114 -13 -19 -28 -58 -35 -87 -9 -42 -21 -61 -60 -97 -49 -46 -49 -46 -141 -46 -120 0 -168 -21 -199 -86 -20 -41 -21 -46 -6 -68 16 -26 85 -46 152 -46 96 0 122 -119 47 -218 -13 -18 -31 -54 -40 -80 -8 -26 -28 -74 -44 -107 -55 -113 -36 -227 48 -282 33 -22 183 -24 223 -4 48 25 98 90 109 142 6 27 20 68 32 90 11 22 29 82 40 132 20 91 55 162 99 202 18 16 28 17 112 6 51 -6 143 -18 205 -25 106 -14 115 -17 156 -51 50 -42 56 -73 58 -300 2 -233 9 -272 57 -317 43 -40 43 -40 137 -36 94 3 94 3 141 48 72 70 74 78 73 337 0 237 -7 306 -52 518 -14 66 -30 169 -35 228 -8 88 -15 115 -35 145 -19 29 -26 55 -31 117 -8 101 -20 147 -50 182 -13 16 -29 49 -36 73 -6 25 -24 61 -39 80 -15 19 -35 50 -45 67 -31 62 -68 108 -99 128 -18 11 -44 32 -58 47 -16 16 -43 29 -65 33 -22 3 -58 10 -81 16 -49 11 -87 10 -163 -2z m178 -467 c17 -16 35 -47 42 -73 6 -24 23 -73 36 -108 45 -116 61 -323 26 -345 -14 -8 -313 14 -334 25 -25 13 -23 51 6 93 13 19 31 65 40 102 10 37 29 92 43 122 14 29 30 84 37 120 6 37 15 73 19 80 14 21 53 13 85 -16z`,
    `M22695 2550 c-33 -4 -83 -17 -111 -28 -28 -11 -90 -27 -139 -36 -49 -8 -100 -23 -114 -34 -14 -10 -55 -32 -91 -49 -74 -36 -122 -78 -174 -155 -20 -29 -47 -66 -59 -81 -27 -35 -37 -181 -17 -252 16 -56 110 -140 167 -149 96 -15 285 -26 468 -26 181 0 209 -3 288 -24 48 -14 124 -32 170 -41 51 -11 94 -26 114 -41 17 -13 53 -32 79 -41 56 -21 124 -107 124 -157 0 -53 -71 -133 -134 -151 -30 -9 -65 -24 -78 -35 -53 -41 -258 -65 -441 -51 -112 8 -121 11 -210 56 -95 48 -100 53 -270 235 -107 115 -147 135 -185 88 -9 -12 -27 -32 -39 -45 -54 -57 -62 -182 -17 -249 15 -21 34 -59 42 -84 16 -47 104 -156 134 -166 10 -3 36 -20 58 -39 22 -18 57 -39 78 -45 20 -7 49 -24 64 -38 36 -33 241 -89 375 -102 116 -12 305 1 372 25 23 8 76 21 119 30 49 10 91 26 117 44 22 16 60 38 85 50 50 23 130 85 144 110 5 9 21 30 36 46 16 17 33 52 40 82 6 29 22 65 33 80 36 46 33 254 -5 309 -15 21 -32 61 -39 87 -9 36 -20 54 -48 75 -20 14 -50 38 -68 53 -17 15 -58 35 -90 44 -32 9 -74 27 -93 39 -45 30 -58 33 -161 46 -48 6 -112 19 -144 30 -45 15 -114 23 -319 35 -345 20 -338 19 -376 61 -17 20 -30 43 -28 52 5 28 63 52 144 62 44 5 126 17 184 26 120 18 289 15 528 -11 79 -9 193 -17 255 -18 120 -2 158 12 221 82 54 59 15 207 -61 231 -21 7 -63 26 -93 44 -55 31 -55 31 -415 33 -198 1 -387 -2 -420 -7z`,
    `M10980 2540 c-25 -4 -63 -17 -85 -28 -22 -11 -64 -23 -92 -27 -40 -5 -71 -19 -128 -57 -90 -60 -110 -84 -131 -157 -9 -31 -25 -73 -36 -94 -10 -20 -26 -72 -34 -115 -9 -42 -29 -102 -44 -132 -15 -30 -35 -89 -43 -130 -9 -42 -27 -109 -40 -150 -16 -48 -29 -123 -37 -205 -6 -71 -18 -146 -25 -166 -7 -20 -19 -65 -25 -100 -6 -35 -13 -76 -16 -92 -4 -21 -25 -40 -87 -81 -112 -75 -171 -136 -171 -179 0 -52 22 -94 57 -109 66 -27 550 -3 701 36 50 13 150 29 221 36 126 11 194 22 340 54 39 9 88 16 111 16 128 0 254 76 274 166 20 83 2 204 -35 234 -47 39 -278 31 -460 -15 -49 -13 -146 -31 -215 -40 -75 -10 -140 -24 -163 -36 -104 -53 -139 6 -101 172 18 81 22 83 133 104 43 9 105 24 138 36 32 11 103 24 158 30 58 6 119 19 145 31 25 11 70 26 100 34 66 18 97 45 111 96 13 50 8 63 -44 119 -75 81 -112 87 -365 59 -182 -20 -212 -21 -238 -9 -39 19 -42 56 -11 111 14 24 30 60 37 81 27 85 94 110 360 131 102 9 208 22 235 31 28 8 77 20 110 26 77 14 101 30 109 73 15 77 -26 146 -109 183 -22 10 -58 29 -80 43 -39 25 -44 25 -260 27 -121 1 -240 -2 -265 -7z`,
    `M4578 2524 c-37 -7 -76 -18 -87 -24 -11 -5 -49 -14 -84 -19 -52 -7 -79 -19 -136 -56 -82 -54 -108 -86 -126 -156 -7 -27 -23 -66 -35 -86 -11 -19 -28 -65 -36 -102 -9 -36 -24 -80 -35 -98 -11 -18 -31 -85 -44 -149 -14 -64 -33 -140 -44 -168 -10 -28 -26 -102 -35 -164 -9 -62 -25 -140 -36 -175 -11 -34 -24 -96 -30 -137 -5 -41 -13 -87 -16 -102 -6 -30 -73 -85 -153 -125 -57 -28 -101 -85 -101 -131 0 -45 24 -98 52 -114 45 -25 547 -4 661 28 59 17 175 36 352 58 66 9 154 24 195 35 41 10 120 21 175 24 119 7 155 18 184 57 12 16 34 36 50 44 31 16 71 105 71 158 0 51 -55 135 -97 149 -64 21 -341 6 -438 -24 -44 -13 -134 -32 -200 -41 -82 -12 -136 -25 -171 -43 -61 -30 -103 -25 -134 14 -29 37 -25 70 16 158 42 87 58 100 134 109 30 4 93 18 140 31 47 14 125 29 173 34 52 6 111 20 145 35 31 14 77 30 102 36 69 18 120 75 120 135 0 40 -91 120 -160 141 -52 16 -65 16 -272 -6 -204 -22 -218 -22 -242 -6 -32 20 -35 74 -8 123 9 17 29 54 45 82 43 81 82 94 342 115 99 9 214 24 255 35 41 10 99 22 129 26 68 9 91 31 91 88 -1 72 -53 126 -170 174 -116 49 -391 67 -542 37z`,
  ],
  hp = [
    `M16064 3499 c-19 -5 -42 -26 -64 -56 -33 -48 -33 -48 6 -12 42 40 72 53 97 43 14 -5 15 -10 5 -27 -6 -12 -15 -35 -19 -52 -4 -16 -15 -49 -23 -72 -28 -76 13 -239 75 -297 17 -16 38 -44 45 -63 17 -40 82 -84 150 -103 39 -11 55 -11 93 0 25 7 84 23 131 35 47 12 108 34 137 48 29 15 61 27 72 27 13 0 21 9 26 29 8 36 29 55 51 47 25 -10 14 -59 -18 -74 -14 -6 -31 -25 -36 -41 -7 -20 -21 -32 -46 -41 -20 -6 -36 -15 -36 -19 0 -4 -9 -17 -20 -29 -30 -32 -13 -27 27 8 18 17 40 30 47 30 14 0 104 94 148 155 15 21 31 53 34 73 7 36 -1 167 -12 195 -3 9 -34 36 -67 59 -78 53 -149 63 -215 29 -23 -12 -63 -26 -91 -32 -27 -5 -64 -21 -82 -35 -64 -47 -97 -29 -157 86 -37 70 -42 76 -83 87 -52 14 -132 15 -175 2z m436 -259 c0 -44 -91 -65 -107 -25 -9 26 17 45 63 45 37 0 44 -3 44 -20z`,
    `M16416 2794 c-9 -8 -16 -20 -16 -25 0 -5 -10 -14 -22 -19 -18 -7 -19 -9 -5 -9 10 -1 34 6 55 15 20 9 75 24 122 34 l85 19 -102 0 c-80 1 -105 -2 -117 -15z`,
  ]
function gp({ className: e, heart: t = `mono`, title: n = `Gentle Giants` }) {
  return (0, U.jsxs)(`svg`, {
    viewBox: `0 0 2480 480`,
    role: `img`,
    "aria-label": n,
    className: D(`h-8 w-auto`, e),
    fill: `currentColor`,
    children: [
      (0, U.jsx)(`title`, { children: n }),
      (0, U.jsx)(`g`, {
        transform: `translate(0,480) scale(0.1,-0.1)`,
        children: mp.map((e, t) => (0, U.jsx)(`path`, { d: e }, t)),
      }),
      (0, U.jsx)(`g`, {
        transform: `translate(0,480) scale(0.1,-0.1)`,
        className: t === `color` ? `fill-heart` : void 0,
        children: hp.map((e, t) => (0, U.jsx)(`path`, { d: e }, t)),
      }),
    ],
  })
}
function _p() {
  return (0, U.jsx)(`footer`, {
    className: `bg-teal text-teal-foreground`,
    children: (0, U.jsxs)(`div`, {
      className: `container-site py-12`,
      children: [
        (0, U.jsx)(`div`, {
          className: `flex justify-center`,
          children: (0, U.jsx)(T, {
            to: `/`,
            "aria-label": `Gentle Giants home`,
            children: (0, U.jsx)(gp, { className: `h-9` }),
          }),
        }),
        (0, U.jsx)(`div`, {
          className: `mt-10 border-t border-teal-foreground/25 pt-8`,
          children: (0, U.jsxs)(`div`, {
            className: `flex flex-col items-center justify-between gap-6 md:flex-row`,
            children: [
              (0, U.jsx)(`nav`, {
                className: `flex flex-wrap justify-center gap-x-7 gap-y-2`,
                "aria-label": `Footer`,
                children: op.map((e) =>
                  (0, U.jsx)(
                    T,
                    {
                      to: e.to,
                      className: `text-sm text-teal-foreground/90 hover:text-teal-foreground`,
                      children: e.label,
                    },
                    e.to,
                  ),
                ),
              }),
              (0, U.jsx)(`p`, {
                className: `text-center text-sm text-teal-foreground/90`,
                children: `© 2026 Gentle Giants Dog Food and Products. All rights reserved.`,
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
var vp = [`top`, `right`, `bottom`, `left`],
  yp = Math.min,
  bp = Math.max,
  xp = Math.round,
  Sp = Math.floor,
  Cp = (e) => ({ x: e, y: e }),
  wp = { left: `right`, right: `left`, bottom: `top`, top: `bottom` }
function Tp(e, t, n) {
  return bp(e, yp(t, n))
}
function Ep(e, t) {
  return typeof e == `function` ? e(t) : e
}
function Dp(e) {
  return e.split(`-`)[0]
}
function Op(e) {
  return e.split(`-`)[1]
}
function kp(e) {
  return e === `x` ? `y` : `x`
}
function Ap(e) {
  return e === `y` ? `height` : `width`
}
function jp(e) {
  let t = e[0]
  return t === `t` || t === `b` ? `y` : `x`
}
function Mp(e) {
  return kp(jp(e))
}
function Np(e, t, n) {
  n === void 0 && (n = !1)
  let r = Op(e),
    i = Mp(e),
    a = Ap(i),
    o =
      i === `x`
        ? r === (n ? `end` : `start`)
          ? `right`
          : `left`
        : r === `start`
          ? `bottom`
          : `top`
  return (t.reference[a] > t.floating[a] && (o = Hp(o)), [o, Hp(o)])
}
function Pp(e) {
  let t = Hp(e)
  return [Fp(e), t, Fp(t)]
}
function Fp(e) {
  return e.includes(`start`)
    ? e.replace(`start`, `end`)
    : e.replace(`end`, `start`)
}
var Ip = [`left`, `right`],
  Lp = [`right`, `left`],
  Rp = [`top`, `bottom`],
  zp = [`bottom`, `top`]
function Bp(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return n ? (t ? Lp : Ip) : t ? Ip : Lp
    case `left`:
    case `right`:
      return t ? Rp : zp
    default:
      return []
  }
}
function Vp(e, t, n, r) {
  let i = Op(e),
    a = Bp(Dp(e), n === `start`, r)
  return (
    i && ((a = a.map((e) => e + `-` + i)), t && (a = a.concat(a.map(Fp)))),
    a
  )
}
function Hp(e) {
  let t = Dp(e)
  return wp[t] + e.slice(t.length)
}
function Up(e) {
  return {
    top: e.top ?? 0,
    right: e.right ?? 0,
    bottom: e.bottom ?? 0,
    left: e.left ?? 0,
  }
}
function Wp(e) {
  return typeof e == `number` ? { top: e, right: e, bottom: e, left: e } : Up(e)
}
function Gp(e) {
  let { x: t, y: n, width: r, height: i } = e
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  }
}
function Kp(e, t, n) {
  let { reference: r, floating: i } = e,
    a = jp(t),
    o = Mp(t),
    s = Ap(o),
    c = Dp(t),
    l = a === `y`,
    u = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[s] / 2 - i[s] / 2,
    p
  switch (c) {
    case `top`:
      p = { x: u, y: r.y - i.height }
      break
    case `bottom`:
      p = { x: u, y: r.y + r.height }
      break
    case `right`:
      p = { x: r.x + r.width, y: d }
      break
    case `left`:
      p = { x: r.x - i.width, y: d }
      break
    default:
      p = { x: r.x, y: r.y }
  }
  let m = Op(t)
  return (m && (p[o] += f * (m === `end` ? 1 : -1) * (n && l ? -1 : 1)), p)
}
async function qp(e, t) {
  t === void 0 && (t = {})
  let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e,
    {
      boundary: c = `clippingAncestors`,
      rootBoundary: l = `viewport`,
      elementContext: u = `floating`,
      altBoundary: d = !1,
      padding: f = 0,
    } = Ep(t, e),
    p = Wp(f),
    m = o[d ? (u === `floating` ? `reference` : `floating`) : u],
    h = Gp(
      await i.getClippingRect({
        element:
          ((await (i.isElement == null ? void 0 : i.isElement(m))) ?? !0)
            ? m
            : m.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(o.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: s,
      }),
    ),
    g =
      u === `floating`
        ? { x: n, y: r, width: a.floating.width, height: a.floating.height }
        : a.reference,
    _ = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(o.floating)),
    v = ((await (i.isElement == null ? void 0 : i.isElement(_))) &&
      (await (i.getScale == null ? void 0 : i.getScale(_)))) || { x: 1, y: 1 },
    y = Gp(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: o,
            rect: g,
            offsetParent: _,
            strategy: s,
          })
        : g,
    )
  return {
    top: (h.top - y.top + p.top) / v.y,
    bottom: (y.bottom - h.bottom + p.bottom) / v.y,
    left: (h.left - y.left + p.left) / v.x,
    right: (y.right - h.right + p.right) / v.x,
  }
}
var Jp = 50,
  Yp = async (e, t, n) => {
    let {
        placement: r = `bottom`,
        strategy: i = `absolute`,
        middleware: a = [],
        platform: o,
      } = n,
      s = o.detectOverflow ? o : { ...o, detectOverflow: qp },
      c = await (o.isRTL == null ? void 0 : o.isRTL(t)),
      l = await o.getElementRects({ reference: e, floating: t, strategy: i }),
      { x: u, y: d } = Kp(l, r, c),
      f = r,
      p = 0,
      m = {}
    for (let n = 0; n < a.length; n++) {
      let h = a[n]
      if (!h) continue
      let { name: g, fn: _ } = h,
        {
          x: v,
          y,
          data: b,
          reset: x,
        } = await _({
          x: u,
          y: d,
          initialPlacement: r,
          placement: f,
          strategy: i,
          middlewareData: m,
          rects: l,
          platform: s,
          elements: { reference: e, floating: t },
        })
      ;((u = v ?? u),
        (d = y ?? d),
        (m[g] = { ...m[g], ...b }),
        x &&
          p < Jp &&
          (p++,
          typeof x == `object` &&
            (x.placement && (f = x.placement),
            x.rects &&
              (l =
                x.rects === !0
                  ? await o.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: i,
                    })
                  : x.rects),
            ({ x: u, y: d } = Kp(l, f, c))),
          (n = -1)))
    }
    return { x: u, y: d, placement: f, strategy: i, middlewareData: m }
  },
  Xp = (e) => ({
    name: `arrow`,
    options: e,
    async fn(t) {
      let {
          x: n,
          y: r,
          placement: i,
          rects: a,
          platform: o,
          elements: s,
          middlewareData: c,
        } = t,
        { element: l, padding: u = 0 } = Ep(e, t) || {}
      if (l == null) return {}
      let d = Wp(u),
        f = { x: n, y: r },
        p = Mp(i),
        m = Ap(p),
        h = await o.getDimensions(l),
        g = p === `y`,
        _ = g ? `top` : `left`,
        v = g ? `bottom` : `right`,
        y = g ? `clientHeight` : `clientWidth`,
        b = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
        x = f[p] - a.reference[p],
        S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)),
        C = S ? S[y] : 0
      ;(!C || !(await (o.isElement == null ? void 0 : o.isElement(S)))) &&
        (C = s.floating[y] || a.floating[m])
      let w = b / 2 - x / 2,
        T = C / 2 - h[m] / 2 - 1,
        E = yp(d[_], T),
        D = yp(d[v], T),
        ee = C - h[m] - D,
        O = C / 2 - h[m] / 2 + w,
        te = Tp(E, O, ee),
        ne =
          !c.arrow &&
          Op(i) != null &&
          O !== te &&
          a.reference[m] / 2 - (O < E ? E : D) - h[m] / 2 < 0,
        re = ne ? (O < E ? O - E : O - ee) : 0
      return {
        [p]: f[p] + re,
        data: {
          [p]: te,
          centerOffset: O - te - re,
          ...(ne && { alignmentOffset: re }),
        },
        reset: ne,
      }
    },
  }),
  Zp = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `flip`,
        options: e,
        async fn(t) {
          var n
          let {
              placement: r,
              middlewareData: i,
              rects: a,
              initialPlacement: o,
              platform: s,
              elements: c,
            } = t,
            {
              mainAxis: l = !0,
              crossAxis: u = !0,
              fallbackPlacements: d,
              fallbackStrategy: f = `bestFit`,
              fallbackAxisSideDirection: p = `none`,
              flipAlignment: m = !0,
              ...h
            } = Ep(e, t)
          if ((n = i.arrow) != null && n.alignmentOffset) return {}
          let g = Dp(r),
            _ = jp(o),
            v = Dp(o) === o,
            y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)),
            b = d || (v || !m ? [Hp(o)] : Pp(o)),
            x = p !== `none`
          !d && x && b.push(...Vp(o, m, p, y))
          let S = [o, ...b],
            C = await s.detectOverflow(t, h),
            w = [],
            T = i.flip?.overflows || []
          if ((l && w.push(C[g]), u)) {
            let e = Np(r, a, y)
            w.push(C[e[0]], C[e[1]])
          }
          if (
            ((T = [...T, { placement: r, overflows: w }]),
            !w.every((e) => e <= 0))
          ) {
            let e = (i.flip?.index || 0) + 1,
              t = S[e]
            if (
              t &&
              (u !== `alignment` ||
                _ === jp(t) ||
                T.every((e) => jp(e.placement) !== _ || e.overflows[0] > 0))
            )
              return {
                data: { index: e, overflows: T },
                reset: { placement: t },
              }
            let n = T.filter((e) => e.overflows[0] <= 0).sort(
              (e, t) => e.overflows[1] - t.overflows[1],
            )[0]?.placement
            if (!n)
              switch (f) {
                case `bestFit`: {
                  let e = T.filter((e) => {
                    if (x) {
                      let t = jp(e.placement)
                      return t === _ || t === `y`
                    }
                    return !0
                  })
                    .map((e) => [
                      e.placement,
                      e.overflows
                        .filter((e) => e > 0)
                        .reduce((e, t) => e + t, 0),
                    ])
                    .sort((e, t) => e[1] - t[1])[0]?.[0]
                  e && (n = e)
                  break
                }
                case `initialPlacement`:
                  n = o
              }
            if (r !== n) return { reset: { placement: n } }
          }
          return {}
        },
      }
    )
  }
function Qp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  }
}
function $p(e) {
  return vp.some((t) => e[t] >= 0)
}
var em = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `hide`,
        options: e,
        async fn(t) {
          let { rects: n, platform: r } = t,
            { strategy: i = `referenceHidden`, ...a } = Ep(e, t)
          switch (i) {
            case `referenceHidden`: {
              let e = Qp(
                await r.detectOverflow(t, {
                  ...a,
                  elementContext: `reference`,
                }),
                n.reference,
              )
              return {
                data: { referenceHiddenOffsets: e, referenceHidden: $p(e) },
              }
            }
            case `escaped`: {
              let e = Qp(
                await r.detectOverflow(t, { ...a, altBoundary: !0 }),
                n.floating,
              )
              return { data: { escapedOffsets: e, escaped: $p(e) } }
            }
            default:
              return {}
          }
        },
      }
    )
  },
  tm = new Set([`left`, `top`])
async function nm(e, t) {
  let { placement: n, platform: r, elements: i } = e,
    a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    o = Dp(n),
    s = Op(n),
    c = jp(n) === `y`,
    l = tm.has(o) ? -1 : 1,
    u = a && c ? -1 : 1,
    d = Ep(t, e),
    {
      mainAxis: f,
      crossAxis: p,
      alignmentAxis: m,
    } = typeof d == `number`
      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
      : {
          mainAxis: d.mainAxis || 0,
          crossAxis: d.crossAxis || 0,
          alignmentAxis: d.alignmentAxis,
        }
  return (
    s && typeof m == `number` && (p = s === `end` ? m * -1 : m),
    c ? { x: p * u, y: f * l } : { x: f * l, y: p * u }
  )
}
var rm = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: `offset`,
        options: e,
        async fn(t) {
          var n
          let { x: r, y: i, placement: a, middlewareData: o } = t,
            s = await nm(t, e)
          return a === o.offset?.placement &&
            (n = o.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: r + s.x, y: i + s.y, data: { ...s, placement: a } }
        },
      }
    )
  },
  im = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `shift`,
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: i, platform: a } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: c = {
                fn: (e) => {
                  let { x: t, y: n } = e
                  return { x: t, y: n }
                },
              },
              ...l
            } = Ep(e, t),
            u = { x: n, y: r },
            d = await a.detectOverflow(t, l),
            f = jp(i),
            p = kp(f),
            m = u[p],
            h = u[f],
            g = (e, t) =>
              Tp(
                t + d[e === `y` ? `top` : `left`],
                t,
                t - d[e === `y` ? `bottom` : `right`],
              )
          ;(o && (m = g(p, m)), s && (h = g(f, h)))
          let _ = c.fn({ ...t, [p]: m, [f]: h })
          return {
            ..._,
            data: { x: _.x - n, y: _.y - r, enabled: { [p]: o, [f]: s } },
          }
        },
      }
    )
  },
  am = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t,
            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Ep(e, t),
            u = { x: n, y: r },
            d = jp(i),
            f = kp(d),
            p = u[f],
            m = u[d],
            h = Ep(s, t),
            g =
              typeof h == `number`
                ? { mainAxis: h, crossAxis: 0 }
                : { mainAxis: h.mainAxis ?? 0, crossAxis: h.crossAxis ?? 0 }
          if (c) {
            let e = f === `y` ? `height` : `width`,
              t = a.reference[f] - a.floating[e] + g.mainAxis,
              n = a.reference[f] + a.reference[e] - g.mainAxis
            p < t ? (p = t) : p > n && (p = n)
          }
          if (l) {
            let e = f === `y` ? `width` : `height`,
              t = tm.has(Dp(i)),
              n =
                a.reference[d] -
                a.floating[e] +
                ((t && o.offset?.[d]) || 0) +
                (t ? 0 : g.crossAxis),
              r =
                a.reference[d] +
                a.reference[e] +
                (t ? 0 : o.offset?.[d] || 0) -
                (t ? g.crossAxis : 0)
            m < n ? (m = n) : m > r && (m = r)
          }
          return { [f]: p, [d]: m }
        },
      }
    )
  },
  om = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: `size`,
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: i, elements: a } = t,
            { apply: o = () => {}, ...s } = Ep(e, t),
            c = await i.detectOverflow(t, s),
            l = Dp(n),
            u = Op(n),
            d = jp(n) === `y`,
            { width: f, height: p } = r.floating,
            m,
            h
          l === `top` || l === `bottom`
            ? ((m = l),
              (h =
                u ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? `start`
                  : `end`)
                  ? `left`
                  : `right`))
            : ((h = l), (m = u === `end` ? `top` : `bottom`))
          let g = p - c.top - c.bottom,
            _ = f - c.left - c.right,
            v = yp(p - c[m], g),
            y = yp(f - c[h], _),
            b = t.middlewareData.shift,
            x = !b,
            S = v,
            C = y
          ;(b != null && b.enabled.x && (C = _),
            b != null && b.enabled.y && (S = g),
            x &&
              !u &&
              (d
                ? (C = f - 2 * bp(c.left, c.right))
                : (S = p - 2 * bp(c.top, c.bottom))),
            await o({ ...t, availableWidth: C, availableHeight: S }))
          let w = await i.getDimensions(a.floating)
          return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {}
        },
      }
    )
  }
function sm() {
  return typeof window < `u`
}
function cm(e) {
  return dm(e) ? (e.nodeName || ``).toLowerCase() : `#document`
}
function lm(e) {
  var t
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  )
}
function um(e) {
  return ((dm(e) ? e.ownerDocument : e.document) || window.document)
    ?.documentElement
}
function dm(e) {
  return sm() ? e instanceof Node || e instanceof lm(e).Node : !1
}
function fm(e) {
  return sm() ? e instanceof Element || e instanceof lm(e).Element : !1
}
function pm(e) {
  return sm() ? e instanceof HTMLElement || e instanceof lm(e).HTMLElement : !1
}
function mm(e) {
  return !sm() || typeof ShadowRoot > `u`
    ? !1
    : e instanceof ShadowRoot || e instanceof lm(e).ShadowRoot
}
function hm(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: i } = Em(e)
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    i !== `inline` &&
    i !== `contents`
  )
}
function gm(e) {
  return /^(table|td|th)$/.test(cm(e))
}
function _m(e) {
  try {
    if (e.matches(`:popover-open`)) return !0
  } catch {}
  try {
    return e.matches(`:modal`)
  } catch {
    return !1
  }
}
var vm = /transform|translate|scale|rotate|perspective|filter/,
  ym = /paint|layout|strict|content/,
  bm = (e) => !!e && e !== `none`,
  xm
function Sm(e) {
  let t = fm(e) ? Em(e) : e
  return (
    bm(t.transform) ||
    bm(t.translate) ||
    bm(t.scale) ||
    bm(t.rotate) ||
    bm(t.perspective) ||
    (!wm() && (bm(t.backdropFilter) || bm(t.filter))) ||
    vm.test(t.willChange || ``) ||
    ym.test(t.contain || ``)
  )
}
function Cm(e) {
  let t = Om(e)
  for (; pm(t) && !Tm(t);) {
    if (Sm(t)) return t
    if (_m(t)) return null
    t = Om(t)
  }
  return null
}
function wm() {
  return (
    (xm ??=
      typeof CSS < `u` &&
      CSS.supports &&
      CSS.supports(`-webkit-backdrop-filter`, `none`)),
    xm
  )
}
function Tm(e) {
  return /^(html|body|#document)$/.test(cm(e))
}
function Em(e) {
  return lm(e).getComputedStyle(e)
}
function Dm(e) {
  return fm(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function Om(e) {
  if (cm(e) === `html`) return e
  let t = e.assignedSlot || e.parentNode || (mm(e) && e.host) || um(e)
  return mm(t) ? t.host : t
}
function km(e) {
  let t = Om(e)
  return Tm(t) ? (e.ownerDocument || e).body : pm(t) && hm(t) ? t : km(t)
}
function Am(e, t, n) {
  ;(t === void 0 && (t = []), n === void 0 && (n = !0))
  let r = km(e),
    i = r === e.ownerDocument?.body,
    a = lm(r)
  if (i) {
    let e = jm(a)
    return t.concat(
      a,
      a.visualViewport || [],
      hm(r) ? r : [],
      e && n ? Am(e) : [],
    )
  }
  return t.concat(r, Am(r, [], n))
}
function jm(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Mm(e) {
  let t = Em(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    i = pm(e),
    a = i ? e.offsetWidth : n,
    o = i ? e.offsetHeight : r,
    s = xp(n) !== a || xp(r) !== o
  return (s && ((n = a), (r = o)), { width: n, height: r, $: s })
}
function Nm(e) {
  return fm(e) ? e : e.contextElement
}
function Pm(e) {
  let t = Nm(e)
  if (!pm(t)) return Cp(1)
  let n = t.getBoundingClientRect(),
    { width: r, height: i, $: a } = Mm(t),
    o = (a ? xp(n.width) : n.width) / r,
    s = (a ? xp(n.height) : n.height) / i
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  )
}
var Fm = Cp(0)
function Im(e) {
  let t = lm(e)
  return !wm() || !t.visualViewport
    ? Fm
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function Lm(e, t, n) {
  return (t === void 0 && (t = !1), !!n && t && n === lm(e))
}
function Rm(e, t, n, r) {
  ;(t === void 0 && (t = !1), n === void 0 && (n = !1))
  let i = e.getBoundingClientRect(),
    a = Nm(e),
    o = Cp(1)
  t && (r ? fm(r) && (o = Pm(r)) : (o = Pm(e)))
  let s = Lm(a, n, r) ? Im(a) : Cp(0),
    c = (i.left + s.x) / o.x,
    l = (i.top + s.y) / o.y,
    u = i.width / o.x,
    d = i.height / o.y
  if (a && r) {
    let e = lm(a),
      t = fm(r) ? lm(r) : r,
      n = e,
      i = jm(n)
    for (; i && t !== n;) {
      let e = Pm(i),
        t = i.getBoundingClientRect(),
        r = Em(i),
        a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
        o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y
      ;((c *= e.x),
        (l *= e.y),
        (u *= e.x),
        (d *= e.y),
        (c += a),
        (l += o),
        (n = lm(i)),
        (i = jm(n)))
    }
  }
  return Gp({ width: u, height: d, x: c, y: l })
}
function zm(e, t) {
  let n = Dm(e).scrollLeft
  return t ? t.left + n : Rm(um(e)).left + n
}
function Bm(e, t) {
  let n = e.getBoundingClientRect()
  return { x: n.left + t.scrollLeft - zm(e, n), y: n.top + t.scrollTop }
}
function Vm(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
    a = i === `fixed`,
    o = um(r),
    s = t ? _m(t.floating) : !1
  if (r === o || (s && a)) return n
  let c = { scrollLeft: 0, scrollTop: 0 },
    l = Cp(1),
    u = Cp(0),
    d = pm(r)
  if ((d || !a) && ((cm(r) !== `body` || hm(o)) && (c = Dm(r)), d)) {
    let e = Rm(r)
    ;((l = Pm(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop))
  }
  let f = o && !d && !a ? Bm(o, c) : Cp(0)
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + f.y,
  }
}
function Hm(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : []
}
function Um(e) {
  let t = Dm(e),
    n = e.ownerDocument.body,
    r = bp(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = bp(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight),
    a = -t.scrollLeft + zm(e),
    o = -t.scrollTop
  return (
    Em(n).direction === `rtl` && (a += bp(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: a, y: o }
  )
}
var Wm = 25
function Gm(e, t, n) {
  n === void 0 && (n = `viewport`)
  let r = n === `layoutViewport`,
    i = lm(e),
    a = um(e),
    o = i.visualViewport,
    s = a.clientWidth,
    c = a.clientHeight,
    l = 0,
    u = 0
  if (o) {
    let e = !wm() || t === `fixed`
    r
      ? e || ((l = -o.offsetLeft), (u = -o.offsetTop))
      : ((s = o.width),
        (c = o.height),
        e && ((l = o.offsetLeft), (u = o.offsetTop)))
  }
  if (zm(a) <= 0) {
    let e = a.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      r =
        (e.compatMode === `CSS1Compat` &&
          parseFloat(n.marginLeft) + parseFloat(n.marginRight)) ||
        0,
      i = Math.abs(a.clientWidth - t.clientWidth - r),
      o =
        getComputedStyle(a).scrollbarGutter === `stable both-edges` ? i / 2 : i
    o <= Wm && (s -= o)
  }
  return { width: s, height: c, x: l, y: u }
}
function Km(e, t) {
  let n = Rm(e, !0, t === `fixed`),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    a = Pm(e)
  return {
    width: e.clientWidth * a.x,
    height: e.clientHeight * a.y,
    x: i * a.x,
    y: r * a.y,
  }
}
function qm(e, t, n) {
  let r
  if (t === `viewport` || t === `layoutViewport`) r = Gm(e, n, t)
  else if (t === `document`) r = Um(um(e))
  else if (fm(t)) r = Km(t, n)
  else {
    let n = Im(e)
    r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height }
  }
  return Gp(r)
}
function Jm(e, t) {
  let n = t.get(e)
  if (n) return n
  let r = Am(e, [], !1).filter((e) => fm(e) && cm(e) !== `body`),
    i = null,
    a = Em(e).position === `fixed`,
    o = a ? Om(e) : e
  for (; fm(o) && !Tm(o);) {
    let e = Em(o),
      t = Sm(o),
      n = i ? i.position : a ? `fixed` : ``
    ;(!t && (n === `fixed` || (n === `absolute` && e.position === `static`))
      ? (r = r.filter((e) => e !== o))
      : (i = e),
      (o = Om(o)))
  }
  return (t.set(e, r), r)
}
function Ym(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
    a = [
      ...(n === `clippingAncestors`
        ? _m(t)
          ? []
          : Jm(t, this._c)
        : [].concat(n)),
      r,
    ],
    o = qm(t, a[0], i),
    s = o.top,
    c = o.right,
    l = o.bottom,
    u = o.left
  for (let e = 1; e < a.length; e++) {
    let n = qm(t, a[e], i)
    ;((s = bp(n.top, s)),
      (c = yp(n.right, c)),
      (l = yp(n.bottom, l)),
      (u = bp(n.left, u)))
  }
  return { width: c - u, height: l - s, x: u, y: s }
}
function Xm(e) {
  let { width: t, height: n } = Mm(e)
  return { width: t, height: n }
}
function Zm(e, t, n) {
  let r = pm(t),
    i = um(t),
    a = n === `fixed`,
    o = Rm(e, !0, a, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    c = Cp(0)
  if ((r || !a) && ((cm(t) !== `body` || hm(i)) && (s = Dm(t)), r)) {
    let e = Rm(t, !0, a, t)
    ;((c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop))
  }
  !r && i && (c.x = zm(i))
  let l = i && !r && !a ? Bm(i, s) : Cp(0)
  return {
    x: o.left + s.scrollLeft - c.x - l.x,
    y: o.top + s.scrollTop - c.y - l.y,
    width: o.width,
    height: o.height,
  }
}
function Qm(e) {
  return Em(e).position === `static`
}
function $m(e, t) {
  if (!pm(e) || Em(e).position === `fixed`) return null
  if (t) return t(e)
  let n = e.offsetParent
  return (um(e) === n && (n = n.ownerDocument.body), n)
}
function eh(e, t) {
  let n = lm(e)
  if (_m(e)) return n
  if (!pm(e)) {
    let t = Om(e)
    for (; t && !Tm(t);) {
      if (fm(t) && !Qm(t)) return t
      t = Om(t)
    }
    return n
  }
  let r = $m(e, t)
  for (; r && gm(r) && Qm(r);) r = $m(r, t)
  return r && Tm(r) && Qm(r) && !Sm(r) ? n : r || Cm(e) || n
}
var th = async function (e) {
  let t = this.getOffsetParent || eh,
    n = this.getDimensions,
    r = await n(e.floating)
  return {
    reference: Zm(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  }
}
function nh(e) {
  return Em(e).direction === `rtl`
}
var rh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vm,
  getDocumentElement: um,
  getClippingRect: Ym,
  getOffsetParent: eh,
  getElementRects: th,
  getClientRects: Hm,
  getDimensions: Xm,
  getScale: Pm,
  isElement: fm,
  isRTL: nh,
}
function ih(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  )
}
function ah(e, t, n) {
  let r = null,
    i,
    a = um(e)
  function o() {
    var e
    ;(clearTimeout(i), (e = r) == null || e.disconnect(), (r = null))
  }
  function s(n, c) {
    ;(n === void 0 && (n = !1), c === void 0 && (c = 1), o())
    let l = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: p } = l
    if ((n || t(), !f || !p)) return
    let m = Sp(d),
      h = Sp(a.clientWidth - (u + f)),
      g = Sp(a.clientHeight - (d + p)),
      _ = Sp(u),
      v = {
        rootMargin: -m + `px ` + -h + `px ` + -g + `px ` + -_ + `px`,
        threshold: bp(0, yp(1, c)) || 1,
      },
      y = !0
    function b(t) {
      let n = t[0].intersectionRatio
      if (!ih(l, e.getBoundingClientRect())) return s()
      if (n !== c) {
        if (!y) return s()
        n
          ? s(!1, n)
          : (i = setTimeout(() => {
              s(!1, 1e-7)
            }, 1e3))
      }
      y = !1
    }
    try {
      r = new IntersectionObserver(b, { ...v, root: a.ownerDocument })
    } catch {
      r = new IntersectionObserver(b, v)
    }
    r.observe(e)
  }
  let c = lm(e),
    l = () => s(n)
  return (
    c.addEventListener(`resize`, l),
    s(!0),
    () => {
      ;(c.removeEventListener(`resize`, l), o())
    }
  )
}
function oh(e, t, n, r) {
  r === void 0 && (r = {})
  let {
      ancestorScroll: i = !0,
      ancestorResize: a = !0,
      elementResize: o = typeof ResizeObserver == `function`,
      layoutShift: s = typeof IntersectionObserver == `function`,
      animationFrame: c = !1,
    } = r,
    l = Nm(e),
    u = i || a ? [...(l ? Am(l) : []), ...(t ? Am(t) : [])] : []
  u.forEach((e) => {
    ;(i && e.addEventListener(`scroll`, n),
      a && e.addEventListener(`resize`, n))
  })
  let d = l && s ? ah(l, n, a) : null,
    f = -1,
    p = null
  o &&
    ((p = new ResizeObserver((e) => {
      let [r] = e
      ;(r &&
        r.target === l &&
        p &&
        t &&
        (p.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var e
          ;(e = p) == null || e.observe(t)
        }))),
        n())
    })),
    l && !c && p.observe(l),
    t && p.observe(t))
  let m,
    h = c ? Rm(e) : null
  c && g()
  function g() {
    let t = Rm(e)
    ;(h && !ih(h, t) && n(), (h = t), (m = requestAnimationFrame(g)))
  }
  return (
    n(),
    () => {
      var e
      ;(u.forEach((e) => {
        ;(i && e.removeEventListener(`scroll`, n),
          a && e.removeEventListener(`resize`, n))
      }),
        d?.(),
        (e = p) == null || e.disconnect(),
        (p = null),
        c && cancelAnimationFrame(m))
    }
  )
}
var sh = rm,
  ch = im,
  lh = Zp,
  uh = om,
  dh = em,
  fh = Xp,
  ph = am,
  mh = (e, t, n) => {
    let r = new Map(),
      i = n ?? {},
      a = { ...rh, ...i.platform, _c: r }
    return Yp(e, t, { ...i, platform: a })
  },
  hh = typeof document < `u` ? H.useLayoutEffect : function () {}
function gh(e, t) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (typeof e == `function` && e.toString() === t.toString()) return !0
  let n, r, i
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1
      for (r = n; r-- !== 0;) if (!gh(e[r], t[r])) return !1
      return !0
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1
    for (r = n; r-- !== 0;) {
      let n = i[r]
      if (!(n === `_owner` && e.$$typeof) && !gh(e[n], t[n])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}
function _h(e) {
  return typeof window > `u`
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function vh(e, t) {
  let n = _h(e)
  return Math.round(t * n) / n
}
function yh(e) {
  let t = H.useRef(e)
  return (
    hh(() => {
      t.current = e
    }),
    t
  )
}
function bh(e) {
  e === void 0 && (e = {})
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = H.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, p] = H.useState(r)
  gh(f, r) || p(r)
  let [m, h] = H.useState(null),
    [g, _] = H.useState(null),
    v = H.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e))
    }, []),
    y = H.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e))
    }, []),
    b = a || m,
    x = o || g,
    S = H.useRef(null),
    C = H.useRef(null),
    w = H.useRef(u),
    T = c != null,
    E = yh(c),
    D = yh(i),
    ee = yh(l),
    O = H.useCallback(() => {
      if (!S.current || !C.current) return
      let e = { placement: t, strategy: n, middleware: f }
      ;(D.current && (e.platform = D.current),
        mh(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: ee.current !== !1 }
          te.current &&
            !gh(w.current, t) &&
            ((w.current = t),
            Uu.flushSync(() => {
              d(t)
            }))
        }))
    }, [f, t, n, D, ee])
  hh(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })))
  }, [l])
  let te = H.useRef(!1)
  ;(hh(
    () => (
      (te.current = !0),
      () => {
        te.current = !1
      }
    ),
    [],
  ),
    hh(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, O)
        O()
      }
    }, [b, x, O, E, T]))
  let ne = H.useMemo(
      () => ({ reference: S, floating: C, setReference: v, setFloating: y }),
      [v, y],
    ),
    re = H.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    ie = H.useMemo(() => {
      let e = { position: n, left: 0, top: 0 }
      if (!re.floating) return e
      let t = vh(re.floating, u.x),
        r = vh(re.floating, u.y)
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...(_h(re.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r }
    }, [n, s, re.floating, u.x, u.y])
  return H.useMemo(
    () => ({ ...u, update: O, refs: ne, elements: re, floatingStyles: ie }),
    [u, O, ne, re, ie],
  )
}
var xh = (e) => {
    function t(e) {
      return {}.hasOwnProperty.call(e, `current`)
    }
    return {
      name: `arrow`,
      options: e,
      fn(n) {
        let { element: r, padding: i } = typeof e == `function` ? e(n) : e
        return r && t(r)
          ? r.current == null
            ? {}
            : fh({ element: r.current, padding: i }).fn(n)
          : r
            ? fh({ element: r, padding: i }).fn(n)
            : {}
      },
    }
  },
  Sh = (e, t) => {
    let n = sh(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  Ch = (e, t) => {
    let n = ch(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  wh = (e, t) => ({ fn: ph(e).fn, options: [e, t] }),
  Th = (e, t) => {
    let n = lh(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  Eh = (e, t) => {
    let n = uh(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  Dh = (e, t) => {
    let n = dh(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  Oh = (e, t) => {
    let n = xh(e)
    return { name: n.name, fn: n.fn, options: [e, t] }
  },
  kh = Object.defineProperty,
  Ah = (e, t) => kh(e, `name`, { value: t, configurable: !0 })
function jh(e) {
  let [t, n] = H.useState(void 0)
  return (
    ce(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight })
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return
          let r = t[0],
            i,
            a
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e
            ;((i = t.inlineSize), (a = t.blockSize))
          } else ((i = e.offsetWidth), (a = e.offsetHeight))
          n({ width: i, height: a })
        })
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e))
      }
      n(void 0)
    }, [e]),
    t
  )
}
Ah(jh, `useSize`)
var Mh = Object.defineProperty,
  Nh = (e, t) => Mh(e, `name`, { value: t, configurable: !0 }),
  Ph = `Popper`,
  [Fh, Ih] = pe(Ph),
  [Lh, Rh] = Fh(Ph),
  zh = Nh((e) => {
    let { __scopePopper: t, children: n } = e,
      [r, i] = H.useState(null),
      [a, o] = H.useState(void 0)
    return (0, U.jsx)(Lh, {
      scope: t,
      anchor: r,
      onAnchorChange: i,
      placementState: a,
      setPlacementState: o,
      children: n,
    })
  }, `Popper`),
  Bh = `PopperAnchor`,
  Vh = H.forwardRef(
    Nh(function (e, t) {
      let { __scopePopper: n, virtualRef: r, ...i } = e,
        a = Rh(Bh, n),
        o = H.useRef(null),
        s = a.onAnchorChange,
        c = H.useCallback(
          (e) => {
            ;((o.current = e), e && s(e))
          },
          [s],
        ),
        l = N(t, c),
        u = H.useRef(null)
      H.useEffect(() => {
        if (!r) return
        let e = u.current
        ;((u.current = r.current), e !== u.current && s(u.current))
      })
      let d = a.placementState && Jh(a.placementState),
        f = d?.[0],
        p = d?.[1]
      return r
        ? null
        : (0, U.jsx)(k.div, {
            "data-radix-popper-side": f,
            "data-radix-popper-align": p,
            ...i,
            ref: l,
          })
    }, `PopperAnchor`),
  ),
  Hh = `PopperContent`,
  [Uh, Wh] = Fh(Hh),
  Gh = H.forwardRef(
    Nh(function (e, t) {
      let {
          __scopePopper: n,
          side: r = `bottom`,
          sideOffset: i = 0,
          align: a = `center`,
          alignOffset: o = 0,
          arrowPadding: s = 0,
          avoidCollisions: c = !0,
          collisionBoundary: l = [],
          collisionPadding: u = 0,
          sticky: d = `partial`,
          hideWhenDetached: f = !1,
          updatePositionStrategy: p = `optimized`,
          onPlaced: m,
          ...h
        } = e,
        g = Rh(Hh, n),
        [_, v] = H.useState(null),
        y = N(t, v),
        [b, x] = H.useState(null),
        S = jh(b),
        C = S?.width ?? 0,
        w = S?.height ?? 0,
        T = r + (a === `center` ? `` : `-` + a),
        E =
          typeof u == `number`
            ? u
            : { top: 0, right: 0, bottom: 0, left: 0, ...u },
        D = Array.isArray(l) ? l : [l],
        ee = D.length > 0,
        O = { padding: E, boundary: D.filter(Kh), altBoundary: ee },
        {
          refs: te,
          floatingStyles: ne,
          placement: re,
          isPositioned: ie,
          middlewareData: ae,
        } = bh({
          strategy: `fixed`,
          placement: T,
          whileElementsMounted: Nh(
            (...e) => oh(...e, { animationFrame: p === `always` }),
            `whileElementsMounted`,
          ),
          elements: { reference: g.anchor },
          middleware: [
            Sh({ mainAxis: i + w, alignmentAxis: o }),
            c &&
              Ch({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === `partial` ? wh() : void 0,
                ...O,
              }),
            c && Th({ ...O }),
            Eh({
              ...O,
              apply: Nh(
                ({
                  elements: e,
                  rects: t,
                  availableWidth: n,
                  availableHeight: r,
                }) => {
                  let { width: i, height: a } = t.reference,
                    o = e.floating.style
                  ;(o.setProperty(`--radix-popper-available-width`, `${n}px`),
                    o.setProperty(`--radix-popper-available-height`, `${r}px`),
                    o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                    o.setProperty(`--radix-popper-anchor-height`, `${a}px`))
                },
                `apply`,
              ),
            }),
            b && Oh({ element: b, padding: s }),
            qh({ arrowWidth: C, arrowHeight: w }),
            f &&
              Dh({
                strategy: `referenceHidden`,
                ...O,
                boundary: ee ? O.boundary : void 0,
              }),
          ],
        }),
        A = g.setPlacementState
      ce(
        () => (
          A(re),
          () => {
            A(void 0)
          }
        ),
        [re, A],
      )
      let [j, oe] = Jh(re),
        se = du(m)
      ce(() => {
        ie && se?.()
      }, [ie, se])
      let le = ae.arrow?.x,
        M = ae.arrow?.y,
        ue = ae.arrow?.centerOffset !== 0,
        [de, fe] = H.useState()
      return (
        ce(() => {
          _ && fe(window.getComputedStyle(_).zIndex)
        }, [_]),
        (0, U.jsx)(`div`, {
          ref: te.setFloating,
          "data-radix-popper-content-wrapper": ``,
          style: {
            ...ne,
            transform: ie ? ne.transform : `translate(0, -200%)`,
            minWidth: `max-content`,
            zIndex: de,
            "--radix-popper-transform-origin": [
              ae.transformOrigin?.x,
              ae.transformOrigin?.y,
            ].join(` `),
            ...(ae.hide?.referenceHidden && {
              visibility: `hidden`,
              pointerEvents: `none`,
            }),
          },
          dir: e.dir,
          children: (0, U.jsx)(Uh, {
            scope: n,
            placedSide: j,
            placedAlign: oe,
            onArrowChange: x,
            arrowX: le,
            arrowY: M,
            shouldHideArrow: ue,
            children: (0, U.jsx)(k.div, {
              "data-side": j,
              "data-align": oe,
              ...h,
              ref: y,
              style: {
                ...h.style,
                animation: ie ? h.style?.animation : `none`,
              },
            }),
          }),
        })
      )
    }, `PopperContent`),
  )
function Kh(e) {
  return e !== null
}
Nh(Kh, `isNotNull`)
var qh = Nh(
  (e) => ({
    name: `transformOrigin`,
    options: e,
    fn(t) {
      let { placement: n, rects: r, middlewareData: i } = t,
        a = i.arrow?.centerOffset !== 0,
        o = a ? 0 : e.arrowWidth,
        s = a ? 0 : e.arrowHeight,
        [c, l] = Jh(n),
        u = { start: `0%`, center: `50%`, end: `100%` }[l],
        d = (i.arrow?.x ?? 0) + o / 2,
        f = (i.arrow?.y ?? 0) + s / 2,
        p = ``,
        m = ``
      return (
        c === `bottom`
          ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
          : c === `top`
            ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
            : c === `right`
              ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
              : c === `left` &&
                ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
        { data: { x: p, y: m } }
      )
    },
  }),
  `transformOrigin`,
)
function Jh(e) {
  let [t, n = `center`] = e.split(`-`)
  return [t, n]
}
Nh(Jh, `getSideAndAlignFromPlacement`)
var Yh = zh,
  Xh = Vh,
  Zh = Gh,
  Qh = Object.defineProperty,
  $h = (e, t) => Qh(e, `name`, { value: t, configurable: !0 }),
  eg = !1
function tg() {
  let [e, t] = H.useState(eg)
  return (
    H.useEffect(() => {
      eg || ((eg = !0), t(!0))
    }, []),
    e
  )
}
$h(tg, `useIsHydrated`)
var ng = H.useSyncExternalStore
function rg() {
  return () => {}
}
$h(rg, `subscribe`)
function ig() {
  return ng(
    rg,
    () => !0,
    () => !1,
  )
}
$h(ig, `useIsHydratedModern`)
var ag = typeof ng == `function` ? ig : tg,
  og = Object.defineProperty,
  sg = (e, t) => og(e, `name`, { value: t, configurable: !0 }),
  cg = `rovingFocusGroup.onEntryFocus`,
  lg = { bubbles: !1, cancelable: !0 },
  ug = `RovingFocusGroup`,
  [dg, fg, pg] = ue(ug),
  [mg, hg] = pe(ug, [pg]),
  [gg, _g] = mg(ug),
  vg = H.forwardRef(
    sg(function (e, t) {
      return (0, U.jsx)(dg.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, U.jsx)(dg.Slot, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, U.jsx)(yg, { ...e, ref: t }),
        }),
      })
    }, `RovingFocusGroup`),
  ),
  yg = H.forwardRef(
    sg(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          orientation: r,
          loop: i = !1,
          dir: a,
          currentTabStopId: o,
          defaultCurrentTabStopId: s,
          onCurrentTabStopIdChange: c,
          onEntryFocus: l,
          preventScrollOnEntryFocus: u = !1,
          ...d
        } = e,
        f = H.useRef(null),
        p = N(t, f),
        m = le(a),
        [h, g] = de({
          prop: o,
          defaultProp: s ?? null,
          onChange: c,
          caller: ug,
        }),
        [_, v] = H.useState(!1),
        y = du(l),
        b = fg(n),
        x = H.useRef(!1),
        [S, C] = H.useState(0)
      return (
        H.useEffect(() => {
          let e = f.current
          if (e)
            return (
              e.addEventListener(cg, y),
              () => e.removeEventListener(cg, y)
            )
        }, [y]),
        (0, U.jsx)(gg, {
          scope: n,
          orientation: r,
          dir: m,
          loop: i,
          currentTabStopId: h,
          onItemFocus: H.useCallback((e) => g(e), [g]),
          onItemShiftTab: H.useCallback(() => v(!0), []),
          onFocusableItemAdd: H.useCallback(() => C((e) => e + 1), []),
          onFocusableItemRemove: H.useCallback(() => C((e) => e - 1), []),
          children: (0, U.jsx)(k.div, {
            tabIndex: _ || S === 0 ? -1 : 0,
            "data-orientation": r,
            ...d,
            ref: p,
            style: { outline: `none`, ...e.style },
            onMouseDown: j(e.onMouseDown, () => {
              x.current = !0
            }),
            onFocus: j(e.onFocus, (e) => {
              let t = !x.current
              if (e.target === e.currentTarget && t && !_) {
                let t = new CustomEvent(cg, lg)
                if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                  let e = b().filter((e) => e.focusable)
                  Tg(
                    [e.find((e) => e.active), e.find((e) => e.id === h), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    u,
                  )
                }
              }
              x.current = !1
            }),
            onBlur: j(e.onBlur, () => v(!1)),
          }),
        })
      )
    }, `RovingFocusGroupImpl`),
  ),
  bg = `RovingFocusGroupItem`,
  xg = H.forwardRef(
    sg(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          focusable: r = !0,
          active: i = !1,
          tabStopId: a,
          children: o,
          ...s
        } = e,
        c = A(),
        l = a || c,
        u = _g(bg, n),
        d = u.currentTabStopId === l,
        f = fg(n),
        {
          onFocusableItemAdd: p,
          onFocusableItemRemove: m,
          currentTabStopId: h,
        } = u,
        g = ag()
      return (
        ce(() => {
          if (!(!g || !r)) return (p(), () => m())
        }, [g, r, p, m]),
        H.useEffect(() => {
          if (!(g || !r)) return (p(), () => m())
        }, [g, r, p, m]),
        (0, U.jsx)(dg.ItemSlot, {
          scope: n,
          id: l,
          focusable: r,
          active: i,
          children: (0, U.jsx)(k.span, {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...s,
            ref: t,
            onMouseDown: j(e.onMouseDown, (e) => {
              r ? u.onItemFocus(l) : e.preventDefault()
            }),
            onFocus: j(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: j(e.onKeyDown, (e) => {
              if (e.key === `Tab` && e.shiftKey) {
                u.onItemShiftTab()
                return
              }
              if (e.target !== e.currentTarget) return
              let t = wg(e, u.orientation, u.dir)
              if (t !== void 0) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
                e.preventDefault()
                let n = f()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current)
                if (t === `last`) n.reverse()
                else if (t === `prev` || t === `next`) {
                  t === `prev` && n.reverse()
                  let r = n.indexOf(e.currentTarget)
                  n = u.loop ? Eg(n, r + 1) : n.slice(r + 1)
                }
                setTimeout(() => Tg(n))
              }
            }),
            children:
              typeof o == `function`
                ? o({ isCurrentTabStop: d, hasTabStop: h != null })
                : o,
          }),
        })
      )
    }, `RovingFocusGroupItem`),
  ),
  Sg = {
    ArrowLeft: `prev`,
    ArrowUp: `prev`,
    ArrowRight: `next`,
    ArrowDown: `next`,
    PageUp: `first`,
    Home: `first`,
    PageDown: `last`,
    End: `last`,
  }
function Cg(e, t) {
  return t === `rtl`
    ? e === `ArrowLeft`
      ? `ArrowRight`
      : e === `ArrowRight`
        ? `ArrowLeft`
        : e
    : e
}
sg(Cg, `getDirectionAwareKey`)
function wg(e, t, n) {
  let r = Cg(e.key, n)
  if (
    !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
    !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
  )
    return Sg[r]
}
sg(wg, `getFocusIntent`)
function Tg(e, t = !1) {
  let n = document.activeElement
  for (let r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return
}
sg(Tg, `focusFirst`)
function Eg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
sg(Eg, `wrapArray`)
var Dg = vg,
  Og = xg,
  kg = Object.defineProperty,
  $ = (e, t) => kg(e, `name`, { value: t, configurable: !0 }),
  Ag = [`Enter`, ` `],
  jg = [`ArrowDown`, `PageUp`, `Home`],
  Mg = [`ArrowUp`, `PageDown`, `End`],
  Ng = [...jg, ...Mg],
  Pg = { ltr: [...Ag, `ArrowRight`], rtl: [...Ag, `ArrowLeft`] },
  Fg = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
  Ig = `Menu`,
  [Lg, Rg, zg] = ue(Ig),
  [Bg, Vg] = pe(Ig, [zg, Ih, hg]),
  Hg = Ih(),
  Ug = hg(),
  [Wg, Gg] = Bg(Ig),
  [Kg, qg] = Bg(Ig),
  Jg = $((e) => {
    let {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: i,
        onOpenChange: a,
        modal: o = !0,
      } = e,
      s = Hg(t),
      [c, l] = H.useState(null),
      u = H.useRef(!1),
      d = du(a),
      f = le(i)
    return (
      H.useEffect(() => {
        let e = $(() => {
            ;((u.current = !0),
              document.addEventListener(`pointerdown`, t, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener(`pointermove`, t, {
                capture: !0,
                once: !0,
              }))
          }, `handleKeyDown`),
          t = $(() => (u.current = !1), `handlePointer`)
        return (
          document.addEventListener(`keydown`, e, { capture: !0 }),
          () => {
            ;(document.removeEventListener(`keydown`, e, { capture: !0 }),
              document.removeEventListener(`pointerdown`, t, { capture: !0 }),
              document.removeEventListener(`pointermove`, t, { capture: !0 }))
          }
        )
      }, []),
      H.useEffect(() => {
        if (!n) return
        let e = $(() => d(!1), `handleBlur`)
        return (
          window.addEventListener(`blur`, e),
          () => window.removeEventListener(`blur`, e)
        )
      }, [n, d]),
      (0, U.jsx)(Yh, {
        ...s,
        children: (0, U.jsx)(Wg, {
          scope: t,
          open: n,
          onOpenChange: d,
          content: c,
          onContentChange: l,
          children: (0, U.jsx)(Kg, {
            scope: t,
            onClose: H.useCallback(() => d(!1), [d]),
            isUsingKeyboardRef: u,
            dir: f,
            modal: o,
            children: r,
          }),
        }),
      })
    )
  }, `Menu`),
  Yg = H.forwardRef(
    $(function (e, t) {
      let { __scopeMenu: n, ...r } = e,
        i = Hg(n)
      return (0, U.jsx)(Xh, { ...i, ...r, ref: t })
    }, `MenuAnchor`),
  ),
  Xg = `MenuPortal`,
  [Zg, Qg] = Bg(Xg, { forceMount: void 0 }),
  $g = $((e) => {
    let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
      a = Gg(Xg, t)
    return (0, U.jsx)(Zg, {
      scope: t,
      forceMount: n,
      children: (0, U.jsx)(se, {
        present: n || a.open,
        children: (0, U.jsx)(Gu, { asChild: !0, container: i, children: r }),
      }),
    })
  }, `MenuPortal`),
  e_ = `MenuContent`,
  [t_, n_] = Bg(e_),
  r_ = H.forwardRef(
    $(function (e, t) {
      let n = Qg(e_, e.__scopeMenu),
        { forceMount: r = n.forceMount, ...i } = e,
        a = Gg(e_, e.__scopeMenu),
        o = qg(e_, e.__scopeMenu)
      return (0, U.jsx)(Lg.Provider, {
        scope: e.__scopeMenu,
        children: (0, U.jsx)(se, {
          present: r || a.open,
          children: (0, U.jsx)(Lg.Slot, {
            scope: e.__scopeMenu,
            children: o.modal
              ? (0, U.jsx)(i_, { ...i, ref: t })
              : (0, U.jsx)(a_, { ...i, ref: t }),
          }),
        }),
      })
    }, `MenuContent`),
  ),
  i_ = H.forwardRef(
    $(function (e, t) {
      let n = Gg(e_, e.__scopeMenu),
        r = H.useRef(null),
        i = N(t, r)
      return (
        H.useEffect(() => {
          let e = r.current
          if (e) return mf(e)
        }, []),
        (0, U.jsx)(s_, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: j(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      )
    }, `MenuRootContentModal`),
  ),
  a_ = H.forwardRef(
    $(function (e, t) {
      let n = Gg(e_, e.__scopeMenu)
      return (0, U.jsx)(s_, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      })
    }, `MenuRootContentNonModal`),
  ),
  o_ = je(`MenuContent.ScrollLock`),
  s_ = H.forwardRef(
    $(function (e, t) {
      let {
          __scopeMenu: n,
          loop: r = !1,
          trapFocus: i,
          onOpenAutoFocus: a,
          onCloseAutoFocus: o,
          disableOutsidePointerEvents: s,
          onEntryFocus: c,
          onEscapeKeyDown: l,
          onPointerDownOutside: u,
          onFocusOutside: d,
          onInteractOutside: f,
          onDismiss: p,
          disableOutsideScroll: m,
          ...h
        } = e,
        g = Gg(e_, n),
        _ = qg(e_, n),
        v = Hg(n),
        y = Ug(n),
        b = Rg(n),
        [x, S] = H.useState(null),
        C = H.useRef(null),
        w = N(t, C, g.onContentChange),
        T = H.useRef(0),
        E = H.useRef(``),
        D = H.useRef(0),
        ee = H.useRef(null),
        O = H.useRef(`right`),
        te = H.useRef(0),
        ne = m ? af : H.Fragment,
        re = m ? { as: o_, allowPinchZoom: !0 } : void 0,
        ie = $((e) => {
          let t = E.current + e,
            n = b().filter((e) => !e.disabled),
            r = document.activeElement,
            i = n.find((e) => e.ref.current === r)?.textValue,
            a = P_(
              n.map((e) => e.textValue),
              t,
              i,
            ),
            o = n.find((e) => e.textValue === a)?.ref.current
          ;($(function e(t) {
            ;((E.current = t),
              window.clearTimeout(T.current),
              t !== `` && (T.current = window.setTimeout(() => e(``), 1e3)))
          }, `updateSearch`)(t),
            o && setTimeout(() => o.focus()))
        }, `handleTypeaheadSearch`)
      ;(H.useEffect(() => () => window.clearTimeout(T.current), []), Xu())
      let ae = H.useCallback(
        (e) => O.current === ee.current?.side && I_(e, ee.current?.area),
        [],
      )
      return (0, U.jsx)(t_, {
        scope: n,
        searchRef: E,
        onItemEnter: H.useCallback(
          (e) => {
            ae(e) && e.preventDefault()
          },
          [ae],
        ),
        onItemLeave: H.useCallback(
          (e) => {
            ae(e) || (C.current?.focus(), S(null))
          },
          [ae],
        ),
        onTriggerLeave: H.useCallback(
          (e) => {
            ae(e) && e.preventDefault()
          },
          [ae],
        ),
        pointerGraceTimerRef: D,
        onPointerGraceIntentChange: H.useCallback((e) => {
          ee.current = e
        }, []),
        children: (0, U.jsx)(ne, {
          ...re,
          children: (0, U.jsx)(ju, {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: j(a, (e) => {
              ;(e.preventDefault(), C.current?.focus({ preventScroll: !0 }))
            }),
            onUnmountAutoFocus: o,
            children: (0, U.jsx)(yu, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: d,
              onInteractOutside: f,
              onDismiss: p,
              children: (0, U.jsx)(Dg, {
                asChild: !0,
                ...y,
                dir: _.dir,
                orientation: `vertical`,
                loop: r,
                currentTabStopId: x,
                onCurrentTabStopIdChange: S,
                onEntryFocus: j(c, (e) => {
                  _.isUsingKeyboardRef.current || e.preventDefault()
                }),
                preventScrollOnEntryFocus: !0,
                children: (0, U.jsx)(Zh, {
                  role: `menu`,
                  "aria-orientation": `vertical`,
                  "data-state": k_(g.open),
                  "data-radix-menu-content": ``,
                  dir: _.dir,
                  ...v,
                  ...h,
                  ref: w,
                  style: { outline: `none`, ...h.style },
                  onKeyDown: j(h.onKeyDown, (e) => {
                    let t =
                        e.target.closest(`[data-radix-menu-content]`) ===
                        e.currentTarget,
                      n = e.ctrlKey || e.altKey || e.metaKey,
                      r = e.key.length === 1
                    t &&
                      (e.key === `Tab` && e.preventDefault(),
                      !n && r && ie(e.key))
                    let i = C.current
                    if (e.target !== i || !Ng.includes(e.key)) return
                    e.preventDefault()
                    let a = b()
                      .filter((e) => !e.disabled)
                      .map((e) => e.ref.current)
                    ;(Mg.includes(e.key) && a.reverse(), M_(a))
                  }),
                  onBlur: j(e.onBlur, (e) => {
                    e.currentTarget.contains(e.target) ||
                      (window.clearTimeout(T.current), (E.current = ``))
                  }),
                  onPointerMove: j(
                    e.onPointerMove,
                    L_((e) => {
                      let t = e.target,
                        n = te.current !== e.clientX
                      if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > te.current ? `right` : `left`
                        ;((O.current = t), (te.current = e.clientX))
                      }
                    }),
                  ),
                }),
              }),
            }),
          }),
        }),
      })
    }, `MenuContentImpl`),
  ),
  c_ = H.forwardRef(
    $(function (e, t) {
      let { __scopeMenu: n, ...r } = e
      return (0, U.jsx)(k.div, { ...r, ref: t })
    }, `MenuLabel`),
  ),
  l_ = `MenuItem`,
  u_ = `menu.itemSelect`,
  d_ = H.forwardRef(
    $(function (e, t) {
      let { disabled: n = !1, onSelect: r, ...i } = e,
        a = H.useRef(null),
        o = qg(l_, e.__scopeMenu),
        s = n_(l_, e.__scopeMenu),
        c = N(t, a),
        l = H.useRef(!1),
        u = $(() => {
          let e = a.current
          if (!n && e) {
            let t = new CustomEvent(u_, { bubbles: !0, cancelable: !0 })
            ;(e.addEventListener(u_, (e) => r?.(e), { once: !0 }),
              M(e, t),
              t.defaultPrevented ? (l.current = !1) : o.onClose())
          }
        }, `handleSelect`)
      return (0, U.jsx)(f_, {
        ...i,
        ref: c,
        disabled: n,
        onClick: j(e.onClick, u),
        onPointerDown: (t) => {
          ;(e.onPointerDown?.(t), (l.current = !0))
        },
        onPointerUp: j(e.onPointerUp, (e) => {
          l.current || e.currentTarget?.click()
        }),
        onKeyDown: j(e.onKeyDown, (e) => {
          n ||
            e.target !== e.currentTarget ||
            ((s.searchRef.current === `` || e.key !== ` `) &&
              Ag.includes(e.key) &&
              (e.currentTarget.click(), e.preventDefault()))
        }),
      })
    }, `MenuItem`),
  ),
  f_ = H.forwardRef(
    $(function (e, t) {
      let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e,
        o = n_(l_, n),
        s = Ug(n),
        c = H.useRef(null),
        l = N(t, c),
        [u, d] = H.useState(!1),
        [f, p] = H.useState(``)
      return (
        H.useEffect(() => {
          let e = c.current
          e && p((e.textContent ?? ``).trim())
        }, [a.children]),
        (0, U.jsx)(Lg.ItemSlot, {
          scope: n,
          disabled: r,
          textValue: i ?? f,
          children: (0, U.jsx)(Og, {
            asChild: !0,
            ...s,
            focusable: !r,
            children: (0, U.jsx)(k.div, {
              role: `menuitem`,
              "data-highlighted": u ? `` : void 0,
              "aria-disabled": r || void 0,
              "data-disabled": r ? `` : void 0,
              ...a,
              ref: l,
              onPointerMove: j(
                e.onPointerMove,
                L_((e) => {
                  r
                    ? o.onItemLeave(e)
                    : (o.onItemEnter(e),
                      e.defaultPrevented ||
                        e.currentTarget.focus({ preventScroll: !0 }))
                }),
              ),
              onPointerLeave: j(
                e.onPointerLeave,
                L_((e) => o.onItemLeave(e)),
              ),
              onFocus: j(e.onFocus, () => d(!0)),
              onBlur: j(e.onBlur, () => d(!1)),
            }),
          }),
        })
      )
    }, `MenuItemImpl`),
  ),
  p_ = H.forwardRef(
    $(function (e, t) {
      let { checked: n = !1, onCheckedChange: r, ...i } = e
      return (0, U.jsx)(y_, {
        scope: e.__scopeMenu,
        checked: n,
        children: (0, U.jsx)(d_, {
          role: `menuitemcheckbox`,
          "aria-checked": A_(n) ? `mixed` : n,
          ...i,
          ref: t,
          "data-state": j_(n),
          onSelect: j(i.onSelect, () => r?.(A_(n) ? !0 : !n), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    }, `MenuCheckboxItem`),
  ),
  [m_, h_] = Bg(`MenuRadioGroup`, {
    value: void 0,
    onValueChange: $(() => {}, `onValueChange`),
  }),
  g_ = `MenuRadioItem`,
  __ = H.forwardRef(
    $(function (e, t) {
      let { value: n, ...r } = e,
        i = h_(g_, e.__scopeMenu),
        a = n === i.value
      return (0, U.jsx)(y_, {
        scope: e.__scopeMenu,
        checked: a,
        children: (0, U.jsx)(d_, {
          role: `menuitemradio`,
          "aria-checked": a,
          ...r,
          ref: t,
          "data-state": j_(a),
          onSelect: j(r.onSelect, () => i.onValueChange?.(n), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    }, `MenuRadioItem`),
  ),
  v_ = `MenuItemIndicator`,
  [y_, b_] = Bg(v_, { checked: !1 }),
  x_ = H.forwardRef(
    $(function (e, t) {
      let { __scopeMenu: n, forceMount: r, ...i } = e,
        a = b_(v_, n)
      return (0, U.jsx)(se, {
        present: r || A_(a.checked) || a.checked === !0,
        children: (0, U.jsx)(k.span, {
          ...i,
          ref: t,
          "data-state": j_(a.checked),
        }),
      })
    }, `MenuItemIndicator`),
  ),
  S_ = H.forwardRef(
    $(function (e, t) {
      let { __scopeMenu: n, ...r } = e
      return (0, U.jsx)(k.div, {
        role: `separator`,
        "aria-orientation": `horizontal`,
        ...r,
        ref: t,
      })
    }, `MenuSeparator`),
  ),
  [C_, w_] = Bg(`MenuSub`),
  T_ = `MenuSubTrigger`,
  E_ = H.forwardRef(
    $(function (e, t) {
      let n = Gg(T_, e.__scopeMenu),
        r = qg(T_, e.__scopeMenu),
        i = w_(T_, e.__scopeMenu),
        a = n_(T_, e.__scopeMenu),
        o = H.useRef(null),
        { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a,
        l = { __scopeMenu: e.__scopeMenu },
        u = H.useCallback(() => {
          ;(o.current && window.clearTimeout(o.current), (o.current = null))
        }, [])
      ;(H.useEffect(() => u, [u]),
        H.useEffect(() => {
          let e = s.current
          return () => {
            ;(window.clearTimeout(e), c(null))
          }
        }, [s, c]))
      let d = N(t, i.onTriggerChange)
      return (0, U.jsx)(Yg, {
        asChild: !0,
        ...l,
        children: (0, U.jsx)(f_, {
          id: i.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": n.open,
          "aria-controls": n.open ? i.contentId : void 0,
          "data-state": k_(n.open),
          ...e,
          ref: d,
          onClick: (t) => {
            ;(e.onClick?.(t),
              !(e.disabled || t.defaultPrevented) &&
                (t.currentTarget.focus(), n.open || n.onOpenChange(!0)))
          },
          onPointerMove: j(
            e.onPointerMove,
            L_((t) => {
              ;(a.onItemEnter(t),
                !t.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !o.current &&
                  (a.onPointerGraceIntentChange(null),
                  (o.current = window.setTimeout(() => {
                    ;(n.onOpenChange(!0), u())
                  }, 100))))
            }),
          ),
          onPointerLeave: j(
            e.onPointerLeave,
            L_((e) => {
              u()
              let t = n.content?.getBoundingClientRect()
              if (t) {
                let r = n.content?.dataset.side,
                  i = r === `right`,
                  o = i ? -5 : 5,
                  c = t[i ? `left` : `right`],
                  l = t[i ? `right` : `left`]
                ;(a.onPointerGraceIntentChange({
                  area: [
                    { x: e.clientX + o, y: e.clientY },
                    { x: c, y: t.top },
                    { x: l, y: t.top },
                    { x: l, y: t.bottom },
                    { x: c, y: t.bottom },
                  ],
                  side: r,
                }),
                  window.clearTimeout(s.current),
                  (s.current = window.setTimeout(
                    () => a.onPointerGraceIntentChange(null),
                    300,
                  )))
              } else {
                if ((a.onTriggerLeave(e), e.defaultPrevented)) return
                a.onPointerGraceIntentChange(null)
              }
            }),
          ),
          onKeyDown: j(e.onKeyDown, (t) => {
            e.disabled ||
              t.target !== t.currentTarget ||
              ((a.searchRef.current === `` || t.key !== ` `) &&
                Pg[r.dir].includes(t.key) &&
                (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()))
          }),
        }),
      })
    }, `MenuSubTrigger`),
  ),
  D_ = `MenuSubContent`,
  O_ = H.forwardRef(
    $(function (e, t) {
      let n = Qg(e_, e.__scopeMenu),
        { forceMount: r = n.forceMount, align: i = `start`, ...a } = e,
        o = Gg(e_, e.__scopeMenu),
        s = qg(e_, e.__scopeMenu),
        c = w_(D_, e.__scopeMenu),
        l = H.useRef(null),
        u = N(t, l)
      return (0, U.jsx)(Lg.Provider, {
        scope: e.__scopeMenu,
        children: (0, U.jsx)(se, {
          present: r || o.open,
          children: (0, U.jsx)(Lg.Slot, {
            scope: e.__scopeMenu,
            children: (0, U.jsx)(s_, {
              id: c.contentId,
              "aria-labelledby": c.triggerId,
              ...a,
              ref: u,
              align: i,
              side: s.dir === `rtl` ? `left` : `right`,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (e) => {
                ;(s.isUsingKeyboardRef.current && l.current?.focus(),
                  e.preventDefault())
              },
              onCloseAutoFocus: (e) => e.preventDefault(),
              onFocusOutside: j(e.onFocusOutside, (e) => {
                e.target !== c.trigger && o.onOpenChange(!1)
              }),
              onEscapeKeyDown: j(e.onEscapeKeyDown, (e) => {
                ;(s.onClose(), e.preventDefault())
              }),
              onKeyDown: j(e.onKeyDown, (e) => {
                let t = e.currentTarget.contains(e.target),
                  n = Fg[s.dir].includes(e.key)
                t &&
                  n &&
                  (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault())
              }),
            }),
          }),
        }),
      })
    }, `MenuSubContent`),
  )
function k_(e) {
  return e ? `open` : `closed`
}
$(k_, `getOpenState`)
function A_(e) {
  return e === `indeterminate`
}
$(A_, `isIndeterminate`)
function j_(e) {
  return A_(e) ? `indeterminate` : e ? `checked` : `unchecked`
}
$(j_, `getCheckedState`)
function M_(e) {
  let t = document.activeElement
  for (let n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return
}
$(M_, `focusFirst`)
function N_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
$(N_, `wrapArray`)
function P_(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = N_(e, Math.max(i, 0))
  r.length === 1 && (a = a.filter((e) => e !== n))
  let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()))
  return o === n ? void 0 : o
}
$(P_, `getNextMatch`)
function F_(e, t) {
  let { x: n, y: r } = e,
    i = !1
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i)
  }
  return i
}
$(F_, `isPointInPolygon`)
function I_(e, t) {
  return t ? F_({ x: e.clientX, y: e.clientY }, t) : !1
}
$(I_, `isPointerInGraceArea`)
function L_(e) {
  return (t) => (t.pointerType === `mouse` ? e(t) : void 0)
}
$(L_, `whenMouse`)
var R_ = Jg,
  z_ = Yg,
  B_ = $g,
  V_ = r_,
  H_ = c_,
  U_ = d_,
  W_ = p_,
  G_ = __,
  K_ = x_,
  q_ = S_,
  J_ = E_,
  Y_ = O_,
  X_ = Object.defineProperty,
  Z_ = (e, t) => X_(e, `name`, { value: t, configurable: !0 }),
  Q_ = `DropdownMenu`,
  [$_, ev] = pe(Q_, [Vg]),
  tv = Vg(),
  [nv, rv] = $_(Q_),
  iv = Z_((e) => {
    let {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: i,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = tv(t),
      l = H.useRef(null),
      [u, d] = de({ prop: i, defaultProp: a ?? !1, onChange: o, caller: Q_ })
    return (0, U.jsx)(nv, {
      scope: t,
      triggerId: A(),
      triggerRef: l,
      contentId: A(),
      open: u,
      onOpenChange: d,
      onOpenToggle: H.useCallback(() => d((e) => !e), [d]),
      modal: s,
      children: (0, U.jsx)(R_, {
        ...c,
        open: u,
        onOpenChange: d,
        dir: r,
        modal: s,
        children: n,
      }),
    })
  }, `DropdownMenu`),
  av = `DropdownMenuTrigger`,
  ov = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
        a = rv(av, n),
        o = tv(n),
        s = N(t, a.triggerRef)
      return (0, U.jsx)(z_, {
        asChild: !0,
        ...o,
        children: (0, U.jsx)(k.button, {
          type: `button`,
          id: a.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": a.open,
          "aria-controls": a.open ? a.contentId : void 0,
          "data-state": a.open ? `open` : `closed`,
          "data-disabled": r ? `` : void 0,
          disabled: r,
          ...i,
          ref: s,
          onPointerDown: j(e.onPointerDown, (e) => {
            !r &&
              e.button === 0 &&
              e.ctrlKey === !1 &&
              (a.onOpenToggle(), a.open || e.preventDefault())
          }),
          onKeyDown: j(e.onKeyDown, (e) => {
            r ||
              ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(),
              e.key === `ArrowDown` && a.onOpenChange(!0),
              [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault())
          }),
        }),
      })
    }, `DropdownMenuTrigger`),
  ),
  sv = Z_((e) => {
    let { __scopeDropdownMenu: t, ...n } = e,
      r = tv(t)
    return (0, U.jsx)(B_, { ...r, ...n })
  }, `DropdownMenuPortal`),
  cv = `DropdownMenuContent`,
  lv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = rv(cv, n),
        a = tv(n),
        o = H.useRef(!1)
      return (0, U.jsx)(V_, {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: j(e.onCloseAutoFocus, (e) => {
          ;(o.current || i.triggerRef.current?.focus(),
            (o.current = !1),
            e.preventDefault())
        }),
        onInteractOutside: j(e.onInteractOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0,
            r = t.button === 2 || n
          ;(!i.modal || r) && (o.current = !0)
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      })
    }, `DropdownMenuContent`),
  ),
  uv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(H_, { ...i, ...r, ref: t })
    }, `DropdownMenuLabel`),
  ),
  dv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(U_, { ...i, ...r, ref: t })
    }, `DropdownMenuItem`),
  ),
  fv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(W_, { ...i, ...r, ref: t })
    }, `DropdownMenuCheckboxItem`),
  ),
  pv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(G_, { ...i, ...r, ref: t })
    }, `DropdownMenuRadioItem`),
  ),
  mv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(K_, { ...i, ...r, ref: t })
    }, `DropdownMenuItemIndicator`),
  ),
  hv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(q_, { ...i, ...r, ref: t })
    }, `DropdownMenuSeparator`),
  ),
  gv = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(J_, { ...i, ...r, ref: t })
    }, `DropdownMenuSubTrigger`),
  ),
  _v = H.forwardRef(
    Z_(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = tv(n)
      return (0, U.jsx)(Y_, {
        ...i,
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      })
    }, `DropdownMenuSubContent`),
  ),
  vv = iv,
  yv = ov,
  bv = sv,
  xv = lv,
  Sv = uv,
  Cv = dv,
  wv = fv,
  Tv = pv,
  Ev = mv,
  Dv = hv,
  Ov = gv,
  kv = _v,
  Av = vv,
  jv = yv,
  Mv = H.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, U.jsxs)(Ov, {
      ref: i,
      className: D(
        `flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, U.jsx)(Oe, { className: `ml-auto` })],
    }),
  )
Mv.displayName = Ov.displayName
var Nv = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(kv, {
    ref: n,
    className: D(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
      e,
    ),
    ...t,
  }),
)
Nv.displayName = kv.displayName
var Pv = H.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  (0, U.jsx)(bv, {
    children: (0, U.jsx)(xv, {
      ref: r,
      sideOffset: t,
      className: D(
        `z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md`,
        `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
        e,
      ),
      ...n,
    }),
  }),
)
Pv.displayName = xv.displayName
var Fv = H.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, U.jsx)(Cv, {
    ref: r,
    className: D(
      `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
)
Fv.displayName = Cv.displayName
var Iv = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(wv, {
    ref: r,
    className: D(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, U.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, U.jsx)(Ev, {
          children: (0, U.jsx)(tu, { className: `h-4 w-4` }),
        }),
      }),
      t,
    ],
  }),
)
Iv.displayName = wv.displayName
var Lv = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(Tv, {
    ref: r,
    className: D(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, U.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, U.jsx)(Ev, {
          children: (0, U.jsx)(nu, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
)
Lv.displayName = Tv.displayName
var Rv = H.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, U.jsx)(Sv, {
    ref: r,
    className: D(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e),
    ...n,
  }),
)
Rv.displayName = Sv.displayName
var zv = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Dv, { ref: n, className: D(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
)
zv.displayName = Dv.displayName
var Bv = `text-sm font-semibold text-teal-foreground/90 transition-colors hover:text-teal-foreground`
function Vv() {
  let { lines: e, setOpen: t } = $f(),
    [n, r] = (0, H.useState)(!1),
    i = e.reduce((e, t) => e + t.qty, 0)
  return (0, U.jsxs)(`header`, {
    className: `sticky top-0 z-40 bg-teal text-teal-foreground shadow-sm`,
    children: [
      (0, U.jsxs)(`div`, {
        className: `container-site grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-20`,
        children: [
          (0, U.jsxs)(`nav`, {
            className: `flex items-center gap-7`,
            "aria-label": `Main`,
            children: [
              (0, U.jsx)(`button`, {
                type: `button`,
                className: `md:hidden`,
                onClick: () => r(!0),
                "aria-label": `Open menu`,
                children: (0, U.jsx)(ru, { className: `size-6` }),
              }),
              (0, U.jsxs)(`div`, {
                className: `hidden items-center gap-7 md:flex`,
                children: [
                  (0, U.jsxs)(Av, {
                    children: [
                      (0, U.jsxs)(jv, {
                        className: `${Bv} flex items-center gap-1 outline-none`,
                        children: [
                          `Products `,
                          (0, U.jsx)(Ee, { className: `size-4` }),
                        ],
                      }),
                      (0, U.jsx)(Pv, {
                        align: `start`,
                        className: `w-52 rounded-xl p-2`,
                        children: Le.map((e, t) =>
                          (0, U.jsxs)(
                            `div`,
                            {
                              children: [
                                t === 1 && (0, U.jsx)(zv, {}),
                                (0, U.jsx)(Fv, {
                                  asChild: !0,
                                  className: `cursor-pointer rounded-lg font-medium`,
                                  children: (0, U.jsx)(T, {
                                    to: `/products`,
                                    search:
                                      e.id === `all` ? {} : { category: e.id },
                                    children: e.label,
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, U.jsx)(T, {
                    to: `/about`,
                    className: Bv,
                    activeProps: { className: `underline underline-offset-8` },
                    children: `About`,
                  }),
                  (0, U.jsx)(T, {
                    to: `/community`,
                    className: Bv,
                    activeProps: { className: `underline underline-offset-8` },
                    children: `Community`,
                  }),
                ],
              }),
            ],
          }),
          (0, U.jsx)(T, {
            to: `/`,
            "aria-label": `Gentle Giants home`,
            className: `justify-self-center`,
            children: (0, U.jsx)(gp, { className: `h-7 md:h-9` }),
          }),
          (0, U.jsxs)(`div`, {
            className: `flex items-center justify-end gap-3 md:gap-5`,
            children: [
              (0, U.jsx)(T, {
                to: `/login`,
                className: `${Bv} hidden md:inline`,
                children: `Login`,
              }),
              (0, U.jsx)(Me, {
                asChild: !0,
                variant: `pill`,
                size: `sm`,
                className: `hidden px-5 md:inline-flex`,
                children: (0, U.jsx)(T, {
                  to: `/register`,
                  children: `Sign Up`,
                }),
              }),
              (0, U.jsxs)(`button`, {
                type: `button`,
                onClick: () => t(!0),
                className: `relative grid size-10 place-items-center rounded-full transition-colors hover:bg-teal-foreground/10`,
                "aria-label": `Open cart, ${i} items`,
                children: [
                  (0, U.jsx)(au, { className: `size-5` }),
                  i > 0 &&
                    (0, U.jsx)(`span`, {
                      className: `absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-sun px-1 text-[11px] font-bold text-sun-foreground`,
                      children: i,
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, U.jsx)(Uf, {
        open: n,
        onOpenChange: r,
        children: (0, U.jsxs)(qf, {
          side: `left`,
          className: `bg-teal text-teal-foreground border-none`,
          children: [
            (0, U.jsx)(Jf, { className: `sr-only`, children: `Menu` }),
            (0, U.jsx)(gp, { className: `h-8` }),
            (0, U.jsxs)(`nav`, {
              className: `mt-10 flex flex-col gap-1`,
              onClick: () => r(!1),
              children: [
                (0, U.jsx)(`p`, {
                  className: `eyebrow mb-2 text-teal-foreground/70`,
                  children: `Shop`,
                }),
                Le.map((e) =>
                  (0, U.jsx)(
                    T,
                    {
                      to: `/products`,
                      search: e.id === `all` ? {} : { category: e.id },
                      className: `rounded-lg px-2 py-2 text-lg font-semibold hover:bg-teal-foreground/10`,
                      children: e.label,
                    },
                    e.id,
                  ),
                ),
                (0, U.jsx)(`div`, {
                  className: `my-4 h-px bg-teal-foreground/20`,
                }),
                [
                  [`/about`, `About`],
                  [`/community`, `Community`],
                  [`/login`, `Login`],
                  [`/register`, `Sign Up`],
                ].map(([e, t]) =>
                  (0, U.jsx)(
                    T,
                    {
                      to: e,
                      className: `rounded-lg px-2 py-2 text-lg font-semibold hover:bg-teal-foreground/10`,
                      children: t,
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        }),
      }),
    ],
  })
}
var Hv = ({ ...e }) =>
    (0, U.jsx)(ae, {
      className: `toaster group`,
      toastOptions: {
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: `group-[.toast]:text-muted-foreground`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
        },
      },
      ...e,
    }),
  Uv = `/assets/styles-BEvVfs6H.css`
function Wv(e, t = {}) {
  if (typeof window > `u`) return
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  )
  let n = e instanceof Error ? e.stack : void 0
  window.__lovableReportRuntimeError?.({
    message: Kv(e),
    ...(n !== void 0 && { stack: n }),
    filename: window.location.pathname,
  })
}
var Gv = 2e3
function Kv(e) {
  if (e instanceof Response)
    return `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
  if (e instanceof Error) return e.message
  if (typeof e == `string`) return e
  let { message: t } = e ?? {}
  if (typeof t == `string` && t.length > 0) return t
  try {
    return JSON.stringify(e)?.slice(0, Gv) ?? String(e)
  } catch {
    return String(e)
  }
}
function qv() {
  return (0, U.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, U.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, U.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, U.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, U.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, U.jsx)(`div`, {
          className: `mt-6`,
          children: (0, U.jsx)(T, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  })
}
function Jv({ error: e, reset: t }) {
  console.error(e)
  let n = p()
  return (
    (0, H.useEffect)(() => {
      Wv(e, { boundary: `tanstack_root_error_component` })
    }, [e]),
    (0, U.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, U.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, U.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, U.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, U.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, U.jsx)(`button`, {
                onClick: () => {
                  ;(n.invalidate(), t())
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, U.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  )
}
var Yv = _e()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `Gentle Giants Dog Food — World-Class Nutrition` },
      {
        name: `description`,
        content: `Clean, non-GMO dog and cat food formulated to help pets live longer, healthier lives.`,
      },
      { name: `author`, content: `Gentle Giants` },
      { property: `og:title`, content: `Gentle Giants Dog Food` },
      {
        property: `og:description`,
        content: `Clean, non-GMO dog and cat food formulated to help pets live longer, healthier lives.`,
      },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Uv },
      { rel: `icon`, href: `/favicon.svg`, type: `image/svg+xml` },
      { rel: `preconnect`, href: `https://fonts.googleapis.com` },
      {
        rel: `preconnect`,
        href: `https://fonts.gstatic.com`,
        crossOrigin: `anonymous`,
      },
      {
        rel: `stylesheet`,
        href: `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..800;1,9..40,400&family=Luckiest+Guy&display=swap`,
      },
    ],
  }),
  shellComponent: Xv,
  component: Zv,
  notFoundComponent: qv,
  errorComponent: Jv,
})
function Xv({ children: e }) {
  return (0, U.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, U.jsx)(`head`, { children: (0, U.jsx)(Xc, {}) }),
      (0, U.jsxs)(`body`, { children: [e, (0, U.jsx)(Qc, {})] }),
    ],
  })
}
function Zv() {
  let { queryClient: e } = Yv.useRouteContext()
  return (0, U.jsx)(eu, {
    client: e,
    children: (0, U.jsxs)(Qf, {
      children: [
        (0, U.jsxs)(`div`, {
          className: `flex min-h-screen flex-col`,
          children: [
            (0, U.jsx)(Vv, {}),
            (0, U.jsx)(`main`, {
              className: `flex-1`,
              children: (0, U.jsx)(Fc, {}),
            }),
            (0, U.jsx)(_p, {}),
          ],
        }),
        (0, U.jsx)(ap, {}),
        (0, U.jsx)(Hv, { position: `top-center`, richColors: !0 }),
      ],
    }),
  })
}
var Qv = xe(`/`)({
    head: () => ({
      meta: [
        {
          title: `Gentle Giants Dog Food — World-Class Nutrition for a Healthier Life`,
        },
        {
          name: `description`,
          content: `Clean, non-GMO dog and puppy food formulated by top veterinarians and PhDs to help pets thrive at every stage of life.`,
        },
        {
          property: `og:title`,
          content: `Gentle Giants — World-Class Nutrition for a Healthier Life`,
        },
        {
          property: `og:description`,
          content: `Non-GMO dog food founded by Burt Ward. Dogs on Gentle Giants have lived 15 to 23 years.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./routes-gciycfln.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
        ),
      `component`,
    ),
  }),
  $v = xe(`/about`)({
    head: () => ({
      meta: [
        {
          title: `About Gentle Giants — Born from Rescue, Driven by Longevity`,
        },
        {
          name: `description`,
          content: `Founded by Burt Ward and Tracy Ward after rescuing thousands of dogs. Learn the benefits of Gentle Giants non-GMO dog food.`,
        },
        {
          property: `og:title`,
          content: `About Gentle Giants — Born from Rescue`,
        },
        {
          property: `og:description`,
          content: `Non-GMO, heart-healthy, joint-supporting nutrition for every life stage.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./about-BmTg_cM8.js`),
          __vite__mapDeps([12, 1, 4, 3, 5, 10, 13, 11]),
        ),
      `component`,
    ),
  }),
  ey = xe(`/checkout`)({
    head: () => ({
      meta: [
        { title: `Secure Checkout — Gentle Giants` },
        {
          name: `description`,
          content: `Complete your Gentle Giants order with free delivery options and Subscribe & Save.`,
        },
        { property: `og:title`, content: `Secure Checkout — Gentle Giants` },
        {
          property: `og:description`,
          content: `Fast, secure checkout for Gentle Giants dog and cat food.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `robots`, content: `noindex` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./checkout-9qvJNrC6.js`),
          __vite__mapDeps([14, 1, 2, 15, 3, 6, 7, 8, 16, 5, 17, 10, 18]),
        ),
      `component`,
    ),
  }),
  ty = xe(`/community`)({
    head: () => ({
      meta: [
        { title: `Community — Gentle Giants Pet Parent Stories` },
        {
          name: `description`,
          content: `Real stories from pet parents whose dogs thrive on Gentle Giants — many living 15 to 23 years and beyond.`,
        },
        { property: `og:title`, content: `Gentle Giants Community Stories` },
        {
          property: `og:description`,
          content: `Real pet parents, real birthdays, more years together.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./community-DHS5xcwV.js`),
          __vite__mapDeps([19, 1, 3, 9, 10, 13, 11, 8]),
        ),
      `component`,
    ),
  }),
  ny = xe(`/login`)({
    head: () => ({
      meta: [
        { title: `Login — Gentle Giants` },
        {
          name: `description`,
          content: `Log in to your Gentle Giants account to manage orders and autoship.`,
        },
        { property: `og:title`, content: `Login — Gentle Giants` },
        {
          property: `og:description`,
          content: `Manage your Gentle Giants orders and autoship.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./login-D1aGtgEH.js`),
          __vite__mapDeps([20, 1, 2, 21, 3, 10]),
        ),
      `component`,
    ),
  }),
  ry = xe(`/order-confirmed`)({
    head: () => ({
      meta: [
        { title: `Order Confirmed — Gentle Giants` },
        {
          name: `description`,
          content: `Thank you for your Gentle Giants order.`,
        },
        { property: `og:title`, content: `Order Confirmed — Gentle Giants` },
        {
          property: `og:description`,
          content: `Thank you for your Gentle Giants order.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `robots`, content: `noindex` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./order-confirmed-BB2Nbl4I.js`),
          __vite__mapDeps([22, 1, 3, 10, 7, 18]),
        ),
      `component`,
    ),
  }),
  iy = xe(`/register`)({
    head: () => ({
      meta: [
        { title: `Create an Account — Gentle Giants` },
        {
          name: `description`,
          content: `Register for a Gentle Giants account to track orders, manage autoship and get coupons.`,
        },
        { property: `og:title`, content: `Create an Account — Gentle Giants` },
        {
          property: `og:description`,
          content: `Track orders, manage autoship and get member coupons.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./register-BDjQUJGP.js`),
          __vite__mapDeps([23, 1, 2, 21, 3, 10]),
        ),
      `component`,
    ),
  }),
  ay = xe(`/products/`)({
    validateSearch: (e) =>
      Fe(e.category) && e.category !== `all` ? { category: e.category } : {},
    head: () => ({
      meta: [
        { title: `Shop Gentle Giants — Dry & Canned Dog and Cat Food` },
        {
          name: `description`,
          content: `Browse every Gentle Giants recipe: non-GMO dry kibble, 90% meat canned food and sample packs for dogs and cats.`,
        },
        { property: `og:title`, content: `Shop Gentle Giants Dog & Cat Food` },
        {
          property: `og:description`,
          content: `Non-GMO dry and canned recipes for every life stage.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: ye(
      () =>
        Ce(
          () => import(`./products.index-CtvT_bsE.js`),
          __vite__mapDeps([24, 1, 6, 2, 3, 7, 8]),
        ),
      `component`,
    ),
  }),
  oy = Qv.update({ id: `/`, path: `/`, getParentRoute: () => Yv }),
  sy = $v.update({ id: `/about`, path: `/about`, getParentRoute: () => Yv }),
  cy = ey.update({
    id: `/checkout`,
    path: `/checkout`,
    getParentRoute: () => Yv,
  }),
  ly = ty.update({
    id: `/community`,
    path: `/community`,
    getParentRoute: () => Yv,
  }),
  uy = ny.update({ id: `/login`, path: `/login`, getParentRoute: () => Yv }),
  dy = ry.update({
    id: `/order-confirmed`,
    path: `/order-confirmed`,
    getParentRoute: () => Yv,
  }),
  fy = iy.update({
    id: `/register`,
    path: `/register`,
    getParentRoute: () => Yv,
  }),
  py = ay.update({
    id: `/products/`,
    path: `/products/`,
    getParentRoute: () => Yv,
  }),
  my = {
    IndexRoute: oy,
    AboutRoute: sy,
    CheckoutRoute: cy,
    CommunityRoute: ly,
    LoginRoute: uy,
    OrderConfirmedRoute: dy,
    RegisterRoute: fy,
    ProductsSlugRoute: fe.update({
      id: `/products/$slug`,
      path: `/products/$slug`,
      getParentRoute: () => Yv,
    }),
    ProductsIndexRoute: py,
  },
  hy = Yv._addFileChildren(my),
  gy = () =>
    Vc({
      routeTree: hy,
      context: { queryClient: new Ql() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    })
async function _y() {
  let e = await gy(),
    t
  if (al) {
    let n = await al.getOptions()
    ;((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr))
  } else
    ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }))
  return (
    t.push(nc),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.ids.get().length || (await ur(e)),
    e
  )
}
var vy = _y
function yy() {
  return vy().finally(() => window.$_TSR?.h())
}
var by
function xy() {
  return (
    (by ||= yy()),
    (0, U.jsx)(ic, {
      promise: by,
      children: (e) => (0, U.jsx)(Wc, { router: e }),
    })
  )
}
var Sy = Ve()
;(0, H.startTransition)(() => {
  ;(0, Sy.hydrateRoot)(
    document,
    (0, U.jsx)(H.StrictMode, { children: (0, U.jsx)(xy, {}) }),
  )
})
export {
  au as _,
  fp as a,
  dp as c,
  rp as d,
  tp as f,
  ou as g,
  su as h,
  pp as i,
  up as l,
  $f as m,
  gp as n,
  cp as o,
  np as p,
  sp as r,
  lp as s,
  ay as t,
  ip as u,
  iu as v,
  tu as y,
}
