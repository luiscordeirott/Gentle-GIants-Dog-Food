import { I as e, P as t, l as n, r } from "./utils-CTnPHf1g.js"
import { n as i } from "./dist-DcKsCcPt.js"
import { n as a, r as o, t as s } from "./PasswordField-BwIA0mva.js"
import { t as c } from "./button-CuKnxT8Q.js"
var l = e(t()),
  u = n()
function d() {
  return (0, u.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    className: `size-6 fill-sky`,
    "aria-hidden": !0,
    children: (0, u.jsx)(`path`, {
      d: `M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z`,
    }),
  })
}
function f() {
  return (0, u.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    className: `size-6`,
    "aria-hidden": !0,
    children: [
      (0, u.jsx)(`path`, {
        className: `fill-sky`,
        d: `M22.6 12.3c0-.8-.1-1.6-.2-2.3H12v4.3h6a5.1 5.1 0 0 1-2.2 3.4v2.8h3.6c2-1.9 3.2-4.7 3.2-8.2z`,
      }),
      (0, u.jsx)(`path`, {
        className: `fill-success`,
        d: `M12 23c3 0 5.5-1 7.4-2.7l-3.6-2.8c-1 .7-2.3 1.1-3.8 1.1-2.9 0-5.4-2-6.3-4.7H2v2.9A11 11 0 0 0 12 23z`,
      }),
      (0, u.jsx)(`path`, {
        className: `fill-sun`,
        d: `M5.7 13.9a6.6 6.6 0 0 1 0-4.2V6.8H2a11 11 0 0 0 0 9.9l3.7-2.8z`,
      }),
      (0, u.jsx)(`path`, {
        className: `fill-heart`,
        d: `M12 5.4c1.6 0 3.1.6 4.3 1.7l3.2-3.2A11 11 0 0 0 2 6.8l3.7 2.9C6.6 7.3 9.1 5.4 12 5.4z`,
      }),
    ],
  })
}
function p() {
  let e = (e) => i.info(`${e} sign-in is coming soon`)
  return (0, u.jsxs)(`div`, {
    className: `mx-auto mt-8 max-w-md`,
    children: [
      (0, u.jsxs)(`div`, {
        className: `flex items-center gap-3 text-navy`,
        children: [
          (0, u.jsx)(`span`, { className: `h-px flex-1 bg-navy` }),
          ` OR `,
          (0, u.jsx)(`span`, { className: `h-px flex-1 bg-navy` }),
        ],
      }),
      (0, u.jsxs)(`div`, {
        className: `mt-6 space-y-4`,
        children: [
          (0, u.jsxs)(`button`, {
            type: `button`,
            onClick: () => e(`Facebook`),
            className: `relative flex h-12 w-full items-center justify-center rounded-2xl border border-input bg-card text-base text-navy hover:bg-field`,
            children: [
              (0, u.jsx)(`span`, {
                className: `absolute left-5`,
                children: (0, u.jsx)(d, {}),
              }),
              `Continue with Facebook`,
            ],
          }),
          (0, u.jsxs)(`button`, {
            type: `button`,
            onClick: () => e(`Google`),
            className: `relative flex h-12 w-full items-center justify-center rounded-2xl border border-input bg-card text-base text-navy hover:bg-field`,
            children: [
              (0, u.jsx)(`span`, {
                className: `absolute left-5`,
                children: (0, u.jsx)(f, {}),
              }),
              `Continue with Google`,
            ],
          }),
        ],
      }),
    ],
  })
}
function m() {
  let [e, t] = (0, l.useState)(``),
    [n, d] = (0, l.useState)(``),
    [f, m] = (0, l.useState)({})
  return (0, u.jsxs)(o, {
    title: `Login`,
    children: [
      (0, u.jsxs)(`form`, {
        onSubmit: (t) => {
          t.preventDefault()
          let r = {}
          ;(/^\S+@\S+\.\S+$/.test(e) || (r.email = `Enter a valid email`),
            n.length < 6 &&
              (r.password = `Password must have at least 6 characters`),
            m(r),
            !Object.keys(r).length &&
              i.info(`Accounts are coming soon`, {
                description: `Sign-in will work once accounts are switched on.`,
              }))
        },
        noValidate: !0,
        className: `space-y-6`,
        children: [
          (0, u.jsx)(a, {
            id: `login-email`,
            label: `E-mail`,
            type: `email`,
            autoComplete: `email`,
            placeholder: `example@gmail.com`,
            value: e,
            onChange: (e) => t(e.target.value),
            error: f.email,
          }),
          (0, u.jsx)(s, {
            id: `login-password`,
            label: `Password`,
            autoComplete: `current-password`,
            value: n,
            onChange: (e) => d(e.target.value),
            error: f.password,
          }),
          (0, u.jsxs)(`div`, {
            className: `flex items-center justify-between px-1 text-base`,
            children: [
              (0, u.jsxs)(`label`, {
                className: `flex cursor-pointer items-center gap-2 text-navy`,
                children: [
                  (0, u.jsx)(`input`, {
                    type: `checkbox`,
                    className: `size-4 accent-navy`,
                  }),
                  ` Remember me`,
                ],
              }),
              (0, u.jsx)(`button`, {
                type: `button`,
                className: `font-bold text-navy underline underline-offset-2`,
                onClick: () => i.info(`Password reset is coming soon`),
                children: `Forgot Password?`,
              }),
            ],
          }),
          (0, u.jsx)(`div`, {
            className: `flex justify-center pt-2`,
            children: (0, u.jsx)(c, {
              type: `submit`,
              className: `h-12 w-full max-w-md rounded-2xl bg-navy font-bold text-navy-foreground hover:bg-navy/90`,
              children: `Log in`,
            }),
          }),
          (0, u.jsxs)(`p`, {
            className: `text-center text-base text-navy`,
            children: [
              `Don't have an account yet?`,
              ` `,
              (0, u.jsx)(r, {
                to: `/register`,
                className: `font-bold text-teal-deep hover:underline`,
                children: `Create one now`,
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)(p, {}),
    ],
  })
}
export { m as component }
