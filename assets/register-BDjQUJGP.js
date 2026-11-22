import { I as e, P as t, l as n, r } from "./utils-CTnPHf1g.js"
import { n as i } from "./dist-DcKsCcPt.js"
import { n as a, r as o, t as s } from "./PasswordField-BwIA0mva.js"
import { t as c } from "./button-CuKnxT8Q.js"
var l = e(t()),
  u = n()
function d() {
  let [e, t] = (0, l.useState)({
      name: ``,
      age: ``,
      email: ``,
      password: ``,
      confirm: ``,
      terms: !1,
      truth: !1,
    }),
    [n, d] = (0, l.useState)({})
  return (0, u.jsx)(o, {
    title: `Register`,
    width: `max-w-4xl`,
    children: (0, u.jsxs)(`form`, {
      onSubmit: (t) => {
        t.preventDefault()
        let n = {}
        e.name.trim() || (n.name = `Please enter your name`)
        let r = Number(e.age)
        ;((!e.age || Number.isNaN(r) || r < 18 || r > 120) &&
          (n.age = `You must be 18 or older`),
          /^\S+@\S+\.\S+$/.test(e.email) || (n.email = `Enter a valid email`),
          e.password.length < 8 && (n.password = `Use at least 8 characters`),
          e.confirm !== e.password && (n.confirm = `Passwords don't match`),
          e.terms ||
            (n.terms = `Please accept the Terms of Use and Privacy Policy`),
          e.truth || (n.truth = `Please confirm your information is accurate`),
          d(n),
          !Object.keys(n).length &&
            i.info(`Accounts are coming soon`, {
              description: `Registration will work once accounts are switched on.`,
            }))
      },
      noValidate: !0,
      className: `space-y-5`,
      children: [
        (0, u.jsx)(a, {
          id: `reg-name`,
          label: `Name`,
          autoComplete: `name`,
          value: e.name,
          onChange: (n) => t({ ...e, name: n.target.value }),
          error: n.name,
        }),
        (0, u.jsx)(a, {
          id: `reg-age`,
          label: `Age`,
          type: `number`,
          inputMode: `numeric`,
          min: 18,
          value: e.age,
          onChange: (n) => t({ ...e, age: n.target.value }),
          error: n.age,
        }),
        (0, u.jsx)(a, {
          id: `reg-email`,
          label: `E-mail`,
          type: `email`,
          autoComplete: `email`,
          value: e.email,
          onChange: (n) => t({ ...e, email: n.target.value }),
          error: n.email,
        }),
        (0, u.jsx)(s, {
          id: `reg-password`,
          label: `Password`,
          autoComplete: `new-password`,
          value: e.password,
          onChange: (n) => t({ ...e, password: n.target.value }),
          error: n.password,
        }),
        (0, u.jsx)(s, {
          id: `reg-confirm`,
          label: `Confirm Password`,
          autoComplete: `new-password`,
          value: e.confirm,
          onChange: (n) => t({ ...e, confirm: n.target.value }),
          error: n.confirm,
        }),
        (0, u.jsxs)(`div`, {
          className: `space-y-3 px-1 pt-2`,
          children: [
            (0, u.jsxs)(`label`, {
              className: `flex cursor-pointer items-center gap-3 text-lg text-navy`,
              children: [
                (0, u.jsx)(`input`, {
                  type: `checkbox`,
                  checked: e.terms,
                  onChange: (n) => t({ ...e, terms: n.target.checked }),
                  className: `size-6 accent-navy`,
                }),
                `I have read and agree to the Terms of Use and Privacy Policy.`,
              ],
            }),
            n.terms &&
              (0, u.jsx)(`p`, {
                className: `pl-9 text-xs font-medium text-destructive`,
                children: n.terms,
              }),
            (0, u.jsxs)(`label`, {
              className: `flex cursor-pointer items-center gap-3 text-lg text-navy`,
              children: [
                (0, u.jsx)(`input`, {
                  type: `checkbox`,
                  checked: e.truth,
                  onChange: (n) => t({ ...e, truth: n.target.checked }),
                  className: `size-6 accent-navy`,
                }),
                `I declare that all the information provided is true.`,
              ],
            }),
            n.truth &&
              (0, u.jsx)(`p`, {
                className: `pl-9 text-xs font-medium text-destructive`,
                children: n.truth,
              }),
          ],
        }),
        (0, u.jsx)(`div`, {
          className: `flex justify-center pt-2`,
          children: (0, u.jsx)(c, {
            type: `submit`,
            className: `h-12 w-full max-w-md rounded-2xl bg-navy font-bold text-navy-foreground hover:bg-navy/90`,
            children: `Register`,
          }),
        }),
        (0, u.jsxs)(`p`, {
          className: `text-center text-lg text-navy`,
          children: [
            `Already have an account?`,
            ` `,
            (0, u.jsx)(r, {
              to: `/login`,
              className: `font-bold hover:underline`,
              children: `Log in`,
            }),
          ],
        }),
      ],
    }),
  })
}
export { d as component }
