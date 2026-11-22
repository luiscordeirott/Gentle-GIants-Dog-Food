import { l as e, r as t } from "./utils-CTnPHf1g.js"
import { t as n } from "./button-CuKnxT8Q.js"
var r = e(),
  i = () =>
    (0, r.jsxs)(`div`, {
      className: `container-site py-32 text-center`,
      children: [
        (0, r.jsx)(`h1`, {
          className: `text-3xl font-bold text-navy`,
          children: `We couldn't find that product`,
        }),
        (0, r.jsx)(n, {
          asChild: !0,
          variant: `sky`,
          size: `xl`,
          className: `mt-8`,
          children: (0, r.jsx)(t, {
            to: `/products`,
            children: `Back to all products`,
          }),
        }),
      ],
    })
export { i as notFoundComponent }
