import * as Y from "react";
import w, { createContext as Dr, useContext as Lr, useRef as G, useEffect as q, useState as B, useLayoutEffect as xn, useCallback as sr, forwardRef as L, Children as Nr, isValidElement as Mt, createElement as F, cloneElement as pt, Fragment as vo, useReducer as Xi, useMemo as Vt } from "react";
import * as Ec from "react-dom";
import { createPortal as Cc, flushSync as Rc } from "react-dom";
var Qn = {}, Nc = {
  get exports() {
    return Qn;
  },
  set exports(e) {
    Qn = e;
  }
}, Qr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Tc() {
  if (Mo)
    return Qr;
  Mo = 1;
  var e = w, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, f = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (f[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        f[u] === void 0 && (f[u] = l[u]);
    return { $$typeof: r, type: s, key: p, ref: m, props: f, _owner: o.current };
  }
  return Qr.Fragment = t, Qr.jsx = i, Qr.jsxs = i, Qr;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Ic() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = w, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, h = "@@iterator";
    function _(d) {
      if (d === null || typeof d != "object")
        return null;
      var $ = g && d[g] || d[h];
      return typeof $ == "function" ? $ : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(d) {
      {
        for (var $ = arguments.length, b = new Array($ > 1 ? $ - 1 : 0), C = 1; C < $; C++)
          b[C - 1] = arguments[C];
        O("error", d, b);
      }
    }
    function O(d, $, b) {
      {
        var C = v.ReactDebugCurrentFrame, D = C.getStackAddendum();
        D !== "" && ($ += "%s", b = b.concat([D]));
        var j = b.map(function(V) {
          return String(V);
        });
        j.unshift("Warning: " + $), Function.prototype.apply.call(console[d], console, j);
      }
    }
    var E = !1, S = !1, R = !1, x = !1, T = !1, I;
    I = Symbol.for("react.module.reference");
    function N(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === a || T || d === o || d === c || d === u || x || d === m || E || S || R || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === i || d.$$typeof === s || d.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === I || d.getModuleId !== void 0));
    }
    function A(d, $, b) {
      var C = d.displayName;
      if (C)
        return C;
      var D = $.displayName || $.name || "";
      return D !== "" ? b + "(" + D + ")" : b;
    }
    function z(d) {
      return d.displayName || "Context";
    }
    function H(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case s:
            var $ = d;
            return z($) + ".Consumer";
          case i:
            var b = d;
            return z(b._context) + ".Provider";
          case l:
            return A(d, d.render, "ForwardRef");
          case f:
            var C = d.displayName || null;
            return C !== null ? C : H(d.type) || "Memo";
          case p: {
            var D = d, j = D._payload, V = D._init;
            try {
              return H(V(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, X = 0, J, ce, fe, Ee, ve, _e, Ce;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function ur() {
      {
        if (X === 0) {
          J = console.log, ce = console.info, fe = console.warn, Ee = console.error, ve = console.group, _e = console.groupCollapsed, Ce = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        X++;
      }
    }
    function dr() {
      {
        if (X--, X === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, d, {
              value: J
            }),
            info: K({}, d, {
              value: ce
            }),
            warn: K({}, d, {
              value: fe
            }),
            error: K({}, d, {
              value: Ee
            }),
            group: K({}, d, {
              value: ve
            }),
            groupCollapsed: K({}, d, {
              value: _e
            }),
            groupEnd: K({}, d, {
              value: Ce
            })
          });
        }
        X < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ye = v.ReactCurrentDispatcher, Ge;
    function Ie(d, $, b) {
      {
        if (Ge === void 0)
          try {
            throw Error();
          } catch (D) {
            var C = D.stack.trim().match(/\n( *(at )?)/);
            Ge = C && C[1] || "";
          }
        return `
` + Ge + d;
      }
    }
    var Xe = !1, qe;
    {
      var Wr = typeof WeakMap == "function" ? WeakMap : Map;
      qe = new Wr();
    }
    function wr(d, $) {
      if (!d || Xe)
        return "";
      {
        var b = qe.get(d);
        if (b !== void 0)
          return b;
      }
      var C;
      Xe = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Ye.current, Ye.current = null, ur();
      try {
        if ($) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (Je) {
              C = Je;
            }
            Reflect.construct(d, [], V);
          } else {
            try {
              V.call();
            } catch (Je) {
              C = Je;
            }
            d.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Je) {
            C = Je;
          }
          d();
        }
      } catch (Je) {
        if (Je && C && typeof Je.stack == "string") {
          for (var M = Je.stack.split(`
`), me = C.stack.split(`
`), ee = M.length - 1, ne = me.length - 1; ee >= 1 && ne >= 0 && M[ee] !== me[ne]; )
            ne--;
          for (; ee >= 1 && ne >= 0; ee--, ne--)
            if (M[ee] !== me[ne]) {
              if (ee !== 1 || ne !== 1)
                do
                  if (ee--, ne--, ne < 0 || M[ee] !== me[ne]) {
                    var Re = `
` + M[ee].replace(" at new ", " at ");
                    return d.displayName && Re.includes("<anonymous>") && (Re = Re.replace("<anonymous>", d.displayName)), typeof d == "function" && qe.set(d, Re), Re;
                  }
                while (ee >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        Xe = !1, Ye.current = j, dr(), Error.prepareStackTrace = D;
      }
      var xr = d ? d.displayName || d.name : "", Lo = xr ? Ie(xr) : "";
      return typeof d == "function" && qe.set(d, Lo), Lo;
    }
    function De(d, $, b) {
      return wr(d, !1);
    }
    function Br(d) {
      var $ = d.prototype;
      return !!($ && $.isReactComponent);
    }
    function Me(d, $, b) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return wr(d, Br(d));
      if (typeof d == "string")
        return Ie(d);
      switch (d) {
        case c:
          return Ie("Suspense");
        case u:
          return Ie("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            return De(d.render);
          case f:
            return Me(d.type, $, b);
          case p: {
            var C = d, D = C._payload, j = C._init;
            try {
              return Me(j(D), $, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, ae = {}, Pr = v.ReactDebugCurrentFrame;
    function er(d) {
      if (d) {
        var $ = d._owner, b = Me(d.type, d._source, $ ? $.type : null);
        Pr.setExtraStackFrame(b);
      } else
        Pr.setExtraStackFrame(null);
    }
    function Q(d, $, b, C, D) {
      {
        var j = Function.call.bind(Qe);
        for (var V in d)
          if (j(d, V)) {
            var M = void 0;
            try {
              if (typeof d[V] != "function") {
                var me = Error((C || "React class") + ": " + b + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw me.name = "Invariant Violation", me;
              }
              M = d[V]($, V, C, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              M = ee;
            }
            M && !(M instanceof Error) && (er(D), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", b, V, typeof M), er(null)), M instanceof Error && !(M.message in ae) && (ae[M.message] = !0, er(D), y("Failed %s type: %s", b, M.message), er(null));
          }
      }
    }
    var kn = Array.isArray;
    function we(d) {
      return kn(d);
    }
    function se(d) {
      {
        var $ = typeof Symbol == "function" && Symbol.toStringTag, b = $ && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return b;
      }
    }
    function Hr(d) {
      try {
        return pr(d), !1;
      } catch {
        return !0;
      }
    }
    function pr(d) {
      return "" + d;
    }
    function Ur(d) {
      if (Hr(d))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", se(d)), pr(d);
    }
    var mr = v.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, Or, Yr;
    Yr = {};
    function zn(d) {
      if (Qe.call(d, "ref")) {
        var $ = Object.getOwnPropertyDescriptor(d, "ref").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function he(d) {
      if (Qe.call(d, "key")) {
        var $ = Object.getOwnPropertyDescriptor(d, "key").get;
        if ($ && $.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function Gr(d, $) {
      if (typeof d.ref == "string" && mr.current && $ && mr.current.stateNode !== $) {
        var b = H(mr.current.type);
        Yr[b] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(mr.current.type), d.ref), Yr[b] = !0);
      }
    }
    function Xr(d, $) {
      {
        var b = function() {
          rr || (rr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        b.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Ln(d, $) {
      {
        var b = function() {
          Or || (Or = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", $));
        };
        b.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var $r = function(d, $, b, C, D, j, V) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: d,
        key: $,
        ref: b,
        props: V,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Pe(d, $, b, C, D) {
      {
        var j, V = {}, M = null, me = null;
        b !== void 0 && (Ur(b), M = "" + b), he($) && (Ur($.key), M = "" + $.key), zn($) && (me = $.ref, Gr($, D));
        for (j in $)
          Qe.call($, j) && !Ke.hasOwnProperty(j) && (V[j] = $[j]);
        if (d && d.defaultProps) {
          var ee = d.defaultProps;
          for (j in ee)
            V[j] === void 0 && (V[j] = ee[j]);
        }
        if (M || me) {
          var ne = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          M && Xr(V, ne), me && Ln(V, ne);
        }
        return $r(d, M, me, D, C, mr.current, V);
      }
    }
    var Ve = v.ReactCurrentOwner, qr = v.ReactDebugCurrentFrame;
    function ue(d) {
      if (d) {
        var $ = d._owner, b = Me(d.type, d._source, $ ? $.type : null);
        qr.setExtraStackFrame(b);
      } else
        qr.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Kr(d) {
      return typeof d == "object" && d !== null && d.$$typeof === r;
    }
    function Fe() {
      {
        if (Ve.current) {
          var d = H(Ve.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Mn(d) {
      {
        if (d !== void 0) {
          var $ = d.fileName.replace(/^.*[\\\/]/, ""), b = d.lineNumber;
          return `

Check your code at ` + $ + ":" + b + ".";
        }
        return "";
      }
    }
    var gr = {};
    function te(d) {
      {
        var $ = Fe();
        if (!$) {
          var b = typeof d == "string" ? d : d.displayName || d.name;
          b && ($ = `

Check the top-level render call using <` + b + ">.");
        }
        return $;
      }
    }
    function Jr(d, $) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var b = te($);
        if (gr[b])
          return;
        gr[b] = !0;
        var C = "";
        d && d._owner && d._owner !== Ve.current && (C = " It was passed a child from " + H(d._owner.type) + "."), ue(d), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, C), ue(null);
      }
    }
    function tr(d, $) {
      {
        if (typeof d != "object")
          return;
        if (we(d))
          for (var b = 0; b < d.length; b++) {
            var C = d[b];
            Kr(C) && Jr(C, $);
          }
        else if (Kr(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var D = _(d);
          if (typeof D == "function" && D !== d.entries)
            for (var j = D.call(d), V; !(V = j.next()).done; )
              Kr(V.value) && Jr(V.value, $);
        }
      }
    }
    function $e(d) {
      {
        var $ = d.type;
        if ($ == null || typeof $ == "string")
          return;
        var b;
        if (typeof $ == "function")
          b = $.propTypes;
        else if (typeof $ == "object" && ($.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        $.$$typeof === f))
          b = $.propTypes;
        else
          return;
        if (b) {
          var C = H($);
          Q(b, d.props, "prop", C, d);
        } else if ($.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var D = H($);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof $.getDefaultProps == "function" && !$.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(d) {
      {
        for (var $ = Object.keys(d.props), b = 0; b < $.length; b++) {
          var C = $[b];
          if (C !== "children" && C !== "key") {
            ue(d), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), ue(null);
            break;
          }
        }
        d.ref !== null && (ue(d), y("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    function Zr(d, $, b, C, D, j) {
      {
        var V = N(d);
        if (!V) {
          var M = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Mn(D);
          me ? M += me : M += Fe();
          var ee;
          d === null ? ee = "null" : we(d) ? ee = "array" : d !== void 0 && d.$$typeof === r ? (ee = "<" + (H(d.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof d, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, M);
        }
        var ne = Pe(d, $, b, D, j);
        if (ne == null)
          return ne;
        if (V) {
          var Re = $.children;
          if (Re !== void 0)
            if (C)
              if (we(Re)) {
                for (var xr = 0; xr < Re.length; xr++)
                  tr(Re[xr], d);
                Object.freeze && Object.freeze(Re);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(Re, d);
        }
        return d === n ? yt(ne) : $e(ne), ne;
      }
    }
    function Sr(d, $, b) {
      return Zr(d, $, b, !0);
    }
    function Vn(d, $, b) {
      return Zr(d, $, b, !1);
    }
    var Fn = Vn, Wn = Sr;
    et.Fragment = n, et.jsx = Fn, et.jsxs = Wn;
  }()), et;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Tc() : e.exports = Ic();
})(Nc);
const qi = Qn.jsx;
function Dc(e) {
  const r = Dr(null);
  return [({ children: o, value: a }) => /* @__PURE__ */ w.createElement(r.Provider, {
    value: a
  }, o), () => {
    const o = Lr(r);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Ki(e) {
  return Array.isArray(e) ? e : [e];
}
const Ac = () => {
};
function jc(e, r = { active: !0 }) {
  return typeof e != "function" || !r.active ? r.onKeyDown || Ac : (t) => {
    var n;
    t.key === "Escape" && (e(t), (n = r.onTrigger) == null || n.call(r));
  };
}
function kc({ data: e }) {
  const r = [], t = [], n = e.reduce((o, a, i) => (a.group ? o[a.group] ? o[a.group].push(i) : o[a.group] = [i] : t.push(i), o), {});
  return Object.keys(n).forEach((o) => {
    r.push(...n[o].map((a) => e[a]));
  }), r.push(...t.map((o) => e[o])), r;
}
function Ji(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== w.Fragment : !1;
}
function Zi(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Zi(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Qi() {
  for (var e = 0, r, t, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = Zi(r)) && (n && (n += " "), n += t);
  return n;
}
const zc = {
  dark: [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5c5f66",
    "#373A40",
    "#2C2E33",
    "#25262b",
    "#1A1B1E",
    "#141517",
    "#101113"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};
function Lc(e) {
  return () => ({ fontFamily: e.fontFamily || "sans-serif" });
}
var Mc = Object.defineProperty, Fo = Object.getOwnPropertySymbols, Vc = Object.prototype.hasOwnProperty, Fc = Object.prototype.propertyIsEnumerable, Wo = (e, r, t) => r in e ? Mc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Bo = (e, r) => {
  for (var t in r || (r = {}))
    Vc.call(r, t) && Wo(e, t, r[t]);
  if (Fo)
    for (var t of Fo(r))
      Fc.call(r, t) && Wo(e, t, r[t]);
  return e;
};
function Wc(e) {
  return (r) => ({
    WebkitTapHighlightColor: "transparent",
    [r || "&:focus"]: Bo({}, e.focusRing === "always" || e.focusRing === "auto" ? e.focusRingStyles.styles(e) : e.focusRingStyles.resetStyles(e)),
    [r ? r.replace(":focus", ":focus:not(:focus-visible)") : "&:focus:not(:focus-visible)"]: Bo({}, e.focusRing === "auto" || e.focusRing === "never" ? e.focusRingStyles.resetStyles(e) : null)
  });
}
function mt(e) {
  return (r) => typeof e.primaryShade == "number" ? e.primaryShade : e.primaryShade[r || e.colorScheme];
}
function ho(e) {
  const r = mt(e);
  return (t, n, o = !0, a = !0) => {
    if (typeof t == "string" && t.includes(".")) {
      const [s, l] = t.split("."), c = parseInt(l, 10);
      if (s in e.colors && c >= 0 && c < 10)
        return e.colors[s][typeof n == "number" && !a ? n : c];
    }
    const i = typeof n == "number" ? n : r();
    return t in e.colors ? e.colors[t][i] : o ? e.colors[e.primaryColor][i] : t;
  };
}
function es(e) {
  let r = "";
  for (let t = 1; t < e.length - 1; t += 1)
    r += `${e[t]} ${t / (e.length - 1) * 100}%, `;
  return `${e[0]} 0%, ${r}${e[e.length - 1]} 100%`;
}
function Bc(e, ...r) {
  return `linear-gradient(${e}deg, ${es(r)})`;
}
function Hc(...e) {
  return `radial-gradient(circle, ${es(e)})`;
}
function rs(e) {
  const r = ho(e), t = mt(e);
  return (n) => {
    const o = {
      from: (n == null ? void 0 : n.from) || e.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || e.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || e.defaultGradient.deg
    };
    return `linear-gradient(${o.deg}deg, ${r(o.from, t(), !1)} 0%, ${r(o.to, t(), !1)} 100%)`;
  };
}
function ts(e) {
  return (r) => {
    if (typeof r == "number")
      return `${r / 16}${e}`;
    if (typeof r == "string") {
      const t = r.replace("px", "");
      if (!Number.isNaN(Number(t)))
        return `${Number(t) / 16}${e}`;
    }
    return r;
  };
}
const P = ts("rem"), yo = ts("em");
function k({
  size: e,
  sizes: r,
  units: t
}) {
  return e in r ? r[e] : typeof e == "number" ? t === "em" ? yo(e) : P(e) : e || r.md;
}
function Ft(e) {
  return typeof e == "number" ? e : typeof e == "string" && e.includes("rem") ? Number(e.replace("rem", "")) * 16 : typeof e == "string" && e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e);
}
function Uc(e) {
  return (r) => `@media (min-width: ${yo(Ft(k({ size: r, sizes: e.breakpoints })))})`;
}
function Yc(e) {
  return (r) => `@media (max-width: ${yo(Ft(k({ size: r, sizes: e.breakpoints })) - 1)})`;
}
function Gc(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Xc(e) {
  let r = e.replace("#", "");
  if (r.length === 3) {
    const i = r.split("");
    r = [
      i[0],
      i[0],
      i[1],
      i[1],
      i[2],
      i[2]
    ].join("");
  }
  const t = parseInt(r, 16), n = t >> 16 & 255, o = t >> 8 & 255, a = t & 255;
  return {
    r: n,
    g: o,
    b: a,
    a: 1
  };
}
function qc(e) {
  const [r, t, n, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r, g: t, b: n, a: o || 1 };
}
function bo(e) {
  return Gc(e) ? Xc(e) : e.startsWith("rgb") ? qc(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Rr(e, r) {
  if (typeof e != "string" || r > 1 || r < 0)
    return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(--"))
    return e;
  const { r: t, g: n, b: o } = bo(e);
  return `rgba(${t}, ${n}, ${o}, ${r})`;
}
function Kc(e = 0) {
  return {
    position: "absolute",
    top: P(e),
    right: P(e),
    left: P(e),
    bottom: P(e)
  };
}
function Jc(e, r) {
  if (typeof e == "string" && e.startsWith("var(--"))
    return e;
  const { r: t, g: n, b: o, a } = bo(e), i = 1 - r, s = (l) => Math.round(l * i);
  return `rgba(${s(t)}, ${s(n)}, ${s(o)}, ${a})`;
}
function Zc(e, r) {
  if (typeof e == "string" && e.startsWith("var(--"))
    return e;
  const { r: t, g: n, b: o, a } = bo(e), i = (s) => Math.round(s + (255 - s) * r);
  return `rgba(${i(t)}, ${i(n)}, ${i(o)}, ${a})`;
}
function Qc(e) {
  return (r) => {
    if (typeof r == "number")
      return P(r);
    const t = typeof e.defaultRadius == "number" ? e.defaultRadius : e.radius[e.defaultRadius] || e.defaultRadius;
    return e.radius[r] || r || t;
  };
}
function ef(e, r) {
  if (typeof e == "string" && e.includes(".")) {
    const [t, n] = e.split("."), o = parseInt(n, 10);
    if (t in r.colors && o >= 0 && o < 10)
      return { isSplittedColor: !0, key: t, shade: o };
  }
  return { isSplittedColor: !1 };
}
function rf(e) {
  const r = ho(e), t = mt(e), n = rs(e);
  return ({ variant: o, color: a, gradient: i, primaryFallback: s }) => {
    const l = ef(a, e);
    switch (o) {
      case "light":
        return {
          border: "transparent",
          background: Rr(r(a, e.colorScheme === "dark" ? 8 : 0, s, !1), e.colorScheme === "dark" ? 0.2 : 1),
          color: a === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          hover: Rr(r(a, e.colorScheme === "dark" ? 7 : 1, s, !1), e.colorScheme === "dark" ? 0.25 : 0.65)
        };
      case "subtle":
        return {
          border: "transparent",
          background: "transparent",
          color: a === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          hover: Rr(r(a, e.colorScheme === "dark" ? 8 : 0, s, !1), e.colorScheme === "dark" ? 0.2 : 1)
        };
      case "outline":
        return {
          border: r(a, e.colorScheme === "dark" ? 5 : t("light")),
          background: "transparent",
          color: r(a, e.colorScheme === "dark" ? 5 : t("light")),
          hover: e.colorScheme === "dark" ? Rr(r(a, 5, s, !1), 0.05) : Rr(r(a, 0, s, !1), 0.35)
        };
      case "default":
        return {
          border: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4],
          background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
          color: e.colorScheme === "dark" ? e.white : e.black,
          hover: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[0]
        };
      case "white":
        return {
          border: "transparent",
          background: e.white,
          color: r(a, t()),
          hover: null
        };
      case "transparent":
        return {
          border: "transparent",
          color: a === "dark" ? e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.dark[9] : r(a, e.colorScheme === "dark" ? 2 : t("light")),
          background: "transparent",
          hover: null
        };
      case "gradient":
        return {
          background: n(i),
          color: e.white,
          border: "transparent",
          hover: null
        };
      default: {
        const c = t(), u = l.isSplittedColor ? l.shade : c, f = l.isSplittedColor ? l.key : a;
        return {
          border: "transparent",
          background: r(f, u, s),
          color: e.white,
          hover: r(f, u === 9 ? 8 : u + 1)
        };
      }
    }
  };
}
function tf(e) {
  return (r) => {
    const t = mt(e)(r);
    return e.colors[e.primaryColor][t];
  };
}
function nf(e) {
  return {
    "@media (hover: hover)": {
      "&:hover": e
    },
    "@media (hover: none)": {
      "&:active": e
    }
  };
}
function of(e) {
  return () => ({
    userSelect: "none",
    color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
  });
}
function af(e) {
  return () => e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6];
}
const ie = {
  fontStyles: Lc,
  themeColor: ho,
  focusStyles: Wc,
  linearGradient: Bc,
  radialGradient: Hc,
  smallerThan: Yc,
  largerThan: Uc,
  rgba: Rr,
  cover: Kc,
  darken: Jc,
  lighten: Zc,
  radius: Qc,
  variant: rf,
  primaryShade: mt,
  hover: nf,
  gradient: rs,
  primaryColor: tf,
  placeholderStyles: of,
  dimmed: af
};
var sf = Object.defineProperty, lf = Object.defineProperties, cf = Object.getOwnPropertyDescriptors, Ho = Object.getOwnPropertySymbols, ff = Object.prototype.hasOwnProperty, uf = Object.prototype.propertyIsEnumerable, Uo = (e, r, t) => r in e ? sf(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, df = (e, r) => {
  for (var t in r || (r = {}))
    ff.call(r, t) && Uo(e, t, r[t]);
  if (Ho)
    for (var t of Ho(r))
      uf.call(r, t) && Uo(e, t, r[t]);
  return e;
}, pf = (e, r) => lf(e, cf(r));
function mf(e) {
  return pf(df({}, e), {
    fn: {
      fontStyles: ie.fontStyles(e),
      themeColor: ie.themeColor(e),
      focusStyles: ie.focusStyles(e),
      largerThan: ie.largerThan(e),
      smallerThan: ie.smallerThan(e),
      radialGradient: ie.radialGradient,
      linearGradient: ie.linearGradient,
      gradient: ie.gradient(e),
      rgba: ie.rgba,
      cover: ie.cover,
      lighten: ie.lighten,
      darken: ie.darken,
      primaryShade: ie.primaryShade(e),
      radius: ie.radius(e),
      variant: ie.variant(e),
      hover: ie.hover,
      primaryColor: ie.primaryColor(e),
      placeholderStyles: ie.placeholderStyles(e),
      dimmed: ie.dimmed(e)
    }
  });
}
const gf = {
  dir: "ltr",
  primaryShade: {
    light: 6,
    dark: 8
  },
  focusRing: "auto",
  loader: "oval",
  colorScheme: "light",
  white: "#fff",
  black: "#000",
  defaultRadius: "sm",
  transitionTimingFunction: "ease",
  colors: zc,
  lineHeight: 1.55,
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  primaryColor: "blue",
  respectReducedMotion: !0,
  cursorType: "default",
  defaultGradient: {
    from: "indigo",
    to: "cyan",
    deg: 45
  },
  shadows: {
    xs: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)",
    sm: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem",
    md: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem",
    lg: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem",
    xl: "0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem"
  },
  radius: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "2rem"
  },
  spacing: {
    xs: "0.625rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem"
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  headings: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: "2.125rem", lineHeight: 1.3, fontWeight: void 0 },
      h2: { fontSize: "1.625rem", lineHeight: 1.35, fontWeight: void 0 },
      h3: { fontSize: "1.375rem", lineHeight: 1.4, fontWeight: void 0 },
      h4: { fontSize: "1.125rem", lineHeight: 1.45, fontWeight: void 0 },
      h5: { fontSize: "1rem", lineHeight: 1.5, fontWeight: void 0 },
      h6: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: void 0 }
    }
  },
  other: {},
  components: {},
  activeStyles: { transform: "translateY(0.0625rem)" },
  datesLocale: "en",
  globalStyles: void 0,
  focusRingStyles: {
    styles: (e) => ({
      outlineOffset: "0.125rem",
      outline: `0.125rem solid ${e.colors[e.primaryColor][e.colorScheme === "dark" ? 7 : 5]}`
    }),
    resetStyles: () => ({ outline: "none" }),
    inputStyles: (e) => ({
      outline: "none",
      borderColor: e.colors[e.primaryColor][typeof e.primaryShade == "object" ? e.primaryShade[e.colorScheme] : e.primaryShade]
    })
  }
}, ns = mf(gf);
function vf(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function hf(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var yf = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(hf(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = vf(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), de = "-ms-", Wt = "-moz-", W = "-webkit-", _o = "comm", wo = "rule", Po = "decl", bf = "@import", os = "@keyframes", _f = Math.abs, En = String.fromCharCode, wf = Object.assign;
function Pf(e, r) {
  return le(e, 0) ^ 45 ? (((r << 2 ^ le(e, 0)) << 2 ^ le(e, 1)) << 2 ^ le(e, 2)) << 2 ^ le(e, 3) : 0;
}
function as(e) {
  return e.trim();
}
function Of(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function U(e, r, t) {
  return e.replace(r, t);
}
function eo(e, r) {
  return e.indexOf(r);
}
function le(e, r) {
  return e.charCodeAt(r) | 0;
}
function ct(e, r, t) {
  return e.slice(r, t);
}
function We(e) {
  return e.length;
}
function Oo(e) {
  return e.length;
}
function bt(e, r) {
  return r.push(e), e;
}
function $f(e, r) {
  return e.map(r).join("");
}
var Cn = 1, Ar = 1, is = 0, be = 0, oe = 0, Mr = "";
function Rn(e, r, t, n, o, a, i) {
  return { value: e, root: r, parent: t, type: n, props: o, children: a, line: Cn, column: Ar, length: i, return: "" };
}
function rt(e, r) {
  return wf(Rn("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Sf() {
  return oe;
}
function xf() {
  return oe = be > 0 ? le(Mr, --be) : 0, Ar--, oe === 10 && (Ar = 1, Cn--), oe;
}
function xe() {
  return oe = be < is ? le(Mr, be++) : 0, Ar++, oe === 10 && (Ar = 1, Cn++), oe;
}
function He() {
  return le(Mr, be);
}
function Dt() {
  return be;
}
function gt(e, r) {
  return ct(Mr, e, r);
}
function ft(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ss(e) {
  return Cn = Ar = 1, is = We(Mr = e), be = 0, [];
}
function ls(e) {
  return Mr = "", e;
}
function At(e) {
  return as(gt(be - 1, ro(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ef(e) {
  for (; (oe = He()) && oe < 33; )
    xe();
  return ft(e) > 2 || ft(oe) > 3 ? "" : " ";
}
function Cf(e, r) {
  for (; --r && xe() && !(oe < 48 || oe > 102 || oe > 57 && oe < 65 || oe > 70 && oe < 97); )
    ;
  return gt(e, Dt() + (r < 6 && He() == 32 && xe() == 32));
}
function ro(e) {
  for (; xe(); )
    switch (oe) {
      case e:
        return be;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ro(oe);
        break;
      case 40:
        e === 41 && ro(e);
        break;
      case 92:
        xe();
        break;
    }
  return be;
}
function Rf(e, r) {
  for (; xe() && e + oe !== 47 + 10; )
    if (e + oe === 42 + 42 && He() === 47)
      break;
  return "/*" + gt(r, be - 1) + "*" + En(e === 47 ? e : xe());
}
function Nf(e) {
  for (; !ft(He()); )
    xe();
  return gt(e, be);
}
function Tf(e) {
  return ls(jt("", null, null, null, [""], e = ss(e), 0, [0], e));
}
function jt(e, r, t, n, o, a, i, s, l) {
  for (var c = 0, u = 0, f = i, p = 0, m = 0, g = 0, h = 1, _ = 1, v = 1, y = 0, O = "", E = o, S = a, R = n, x = O; _; )
    switch (g = y, y = xe()) {
      case 40:
        if (g != 108 && le(x, f - 1) == 58) {
          eo(x += U(At(y), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += At(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += Ef(g);
        break;
      case 92:
        x += Cf(Dt() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            bt(If(Rf(xe(), Dt()), r, t), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * h:
        s[c++] = We(x) * v;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            _ = 0;
          case 59 + u:
            m > 0 && We(x) - f && bt(m > 32 ? Go(x + ";", n, t, f - 1) : Go(U(x, " ", "") + ";", n, t, f - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (bt(R = Yo(x, r, t, c, u, o, s, O, E = [], S = [], f), a), y === 123)
              if (u === 0)
                jt(x, r, R, R, E, a, f, s, S);
              else
                switch (p === 99 && le(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 109:
                  case 115:
                    jt(e, R, R, n && bt(Yo(e, R, R, 0, 0, o, s, O, o, E = [], f), S), o, S, f, s, n ? E : S);
                    break;
                  default:
                    jt(x, R, R, R, [""], S, 0, s, S);
                }
        }
        c = u = m = 0, h = v = 1, O = x = "", f = i;
        break;
      case 58:
        f = 1 + We(x), m = g;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && xf() == 125)
            continue;
        }
        switch (x += En(y), y * h) {
          case 38:
            v = u > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[c++] = (We(x) - 1) * v, v = 1;
            break;
          case 64:
            He() === 45 && (x += At(xe())), p = He(), u = f = We(O = x += Nf(Dt())), y++;
            break;
          case 45:
            g === 45 && We(x) == 2 && (h = 0);
        }
    }
  return a;
}
function Yo(e, r, t, n, o, a, i, s, l, c, u) {
  for (var f = o - 1, p = o === 0 ? a : [""], m = Oo(p), g = 0, h = 0, _ = 0; g < n; ++g)
    for (var v = 0, y = ct(e, f + 1, f = _f(h = i[g])), O = e; v < m; ++v)
      (O = as(h > 0 ? p[v] + " " + y : U(y, /&\f/g, p[v]))) && (l[_++] = O);
  return Rn(e, r, t, o === 0 ? wo : s, l, c, u);
}
function If(e, r, t) {
  return Rn(e, r, t, _o, En(Sf()), ct(e, 2, -2), 0);
}
function Go(e, r, t, n) {
  return Rn(e, r, t, Po, ct(e, 0, n), ct(e, n + 1, -1), n);
}
function Tr(e, r) {
  for (var t = "", n = Oo(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Df(e, r, t, n) {
  switch (e.type) {
    case bf:
    case Po:
      return e.return = e.return || e.value;
    case _o:
      return "";
    case os:
      return e.return = e.value + "{" + Tr(e.children, n) + "}";
    case wo:
      e.value = e.props.join(",");
  }
  return We(t = Tr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Af(e) {
  var r = Oo(e);
  return function(t, n, o, a) {
    for (var i = "", s = 0; s < r; s++)
      i += e[s](t, n, o, a) || "";
    return i;
  };
}
function jf(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function kf(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var zf = function(r, t, n) {
  for (var o = 0, a = 0; o = a, a = He(), o === 38 && a === 12 && (t[n] = 1), !ft(a); )
    xe();
  return gt(r, be);
}, Lf = function(r, t) {
  var n = -1, o = 44;
  do
    switch (ft(o)) {
      case 0:
        o === 38 && He() === 12 && (t[n] = 1), r[n] += zf(be - 1, t, n);
        break;
      case 2:
        r[n] += At(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = He() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += En(o);
    }
  while (o = xe());
  return r;
}, Mf = function(r, t) {
  return ls(Lf(ss(r), t));
}, Xo = /* @__PURE__ */ new WeakMap(), Vf = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Xo.get(n)) && !o) {
      Xo.set(r, !0);
      for (var a = [], i = Mf(t, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          r.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, Ff = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Wf = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Bf = function(r) {
  return r.type === "comm" && r.children.indexOf(Wf) > -1;
}, Hf = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var i = t.parent === o[0], s = i ? o[0].children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < t.line)
            break;
          if (c.column < t.column) {
            if (Bf(c))
              return;
            break;
          }
        }
        a.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, cs = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Uf = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!cs(t[n]))
      return !0;
  return !1;
}, qo = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Yf = function(r, t, n) {
  cs(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), qo(r)) : Uf(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), qo(r)));
};
function fs(e, r) {
  switch (Pf(e, r)) {
    case 5103:
      return W + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + Wt + e + de + e + e;
    case 6828:
    case 4268:
      return W + e + de + e + e;
    case 6165:
      return W + e + de + "flex-" + e + e;
    case 5187:
      return W + e + U(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + de + "flex-$1$2") + e;
    case 5443:
      return W + e + de + "flex-item-" + U(e, /flex-|-self/, "") + e;
    case 4675:
      return W + e + de + "flex-line-pack" + U(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return W + e + de + U(e, "shrink", "negative") + e;
    case 5292:
      return W + e + de + U(e, "basis", "preferred-size") + e;
    case 6060:
      return W + "box-" + U(e, "-grow", "") + W + e + de + U(e, "grow", "positive") + e;
    case 4554:
      return W + U(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return U(U(U(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return U(U(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + de + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, W + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (We(e) - 1 - r > 6)
        switch (le(e, r + 1)) {
          case 109:
            if (le(e, r + 4) !== 45)
              break;
          case 102:
            return U(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Wt + (le(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~eo(e, "stretch") ? fs(U(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (le(e, r + 1) !== 115)
        break;
    case 6444:
      switch (le(e, We(e) - 3 - (~eo(e, "!important") && 10))) {
        case 107:
          return U(e, ":", ":" + W) + e;
        case 101:
          return U(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + de + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (le(e, r + 11)) {
        case 114:
          return W + e + de + U(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + de + U(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + de + U(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + de + e + e;
  }
  return e;
}
var Gf = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Po:
        r.return = fs(r.value, r.length);
        break;
      case os:
        return Tr([rt(r, {
          value: U(r.value, "@", "@" + W)
        })], o);
      case wo:
        if (r.length)
          return $f(r.props, function(a) {
            switch (Of(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Tr([rt(r, {
                  props: [U(a, /:(read-\w+)/, ":" + Wt + "$1")]
                })], o);
              case "::placeholder":
                return Tr([rt(r, {
                  props: [U(a, /:(plac\w+)/, ":" + W + "input-$1")]
                }), rt(r, {
                  props: [U(a, /:(plac\w+)/, ":" + Wt + "$1")]
                }), rt(r, {
                  props: [U(a, /:(plac\w+)/, de + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Xf = [Gf], qf = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var _ = h.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Xf;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var a = {}, i, s = [];
  i = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(h) {
      for (var _ = h.getAttribute("data-emotion").split(" "), v = 1; v < _.length; v++)
        a[_[v]] = !0;
      s.push(h);
    }
  );
  var l, c = [Vf, Ff];
  process.env.NODE_ENV !== "production" && c.push(Hf({
    get compat() {
      return g.compat;
    }
  }), Yf);
  {
    var u, f = [Df, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? u.insert(h.return) : h.value && h.type !== _o && u.insert(h.value + "{}"));
    } : jf(function(h) {
      u.insert(h);
    })], p = Af(c.concat(o, f)), m = function(_) {
      return Tr(Tf(_), p);
    };
    l = function(_, v, y, O) {
      u = y, process.env.NODE_ENV !== "production" && v.map !== void 0 && (u = {
        insert: function(S) {
          y.insert(S + v.map);
        }
      }), m(_ ? _ + "{" + v.styles + "}" : v.styles), O && (g.inserted[v.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new yf({
      key: t,
      container: i,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(s), g;
};
const Kf = qf;
function Z() {
  return Z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Z.apply(this, arguments);
}
var Jf = !0;
function Zf(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Qf = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Jf === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, eu = function(r, t, n) {
  Qf(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var a = t;
    do
      r.insert(t === a ? "." + o : "", a, r.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function ru(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var tu = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ko = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, nu = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", ou = /[A-Z]|^ms/g, us = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $o = function(r) {
  return r.charCodeAt(1) === 45;
}, Jo = function(r) {
  return r != null && typeof r != "boolean";
}, Bn = /* @__PURE__ */ kf(function(e) {
  return $o(e) ? e : e.replace(ou, "-$&").toLowerCase();
}), Bt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(us, function(n, o, a) {
          return Ae = {
            name: o,
            styles: a,
            next: Ae
          }, o;
        });
  }
  return tu[r] !== 1 && !$o(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var au = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, iu = ["normal", "none", "initial", "inherit", "unset"], su = Bt, lu = /^-ms-/, cu = /-(.)/g, Zo = {};
  Bt = function(r, t) {
    if (r === "content" && (typeof t != "string" || iu.indexOf(t) === -1 && !au.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = su(r, t);
    return n !== "" && !$o(r) && r.indexOf("-") !== -1 && Zo[r] === void 0 && (Zo[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(lu, "ms-").replace(cu, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var ds = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ut(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ds);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Ae = {
          name: t.name,
          styles: t.styles,
          next: Ae
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ae = {
              name: n.name,
              styles: n.styles,
              next: Ae
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return fu(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var a = Ae, i = t(e);
        return Ae = a, ut(e, r, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = t.replace(us, function(u, f, p) {
          var m = "animation" + s.length;
          return s.push("const " + m + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + m + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var c = r[t];
  return c !== void 0 ? c : t;
}
function fu(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += ut(e, r, t[o]) + ";";
  else
    for (var a in t) {
      var i = t[a];
      if (typeof i != "object")
        r != null && r[i] !== void 0 ? n += a + "{" + r[i] + "}" : Jo(i) && (n += Bn(a) + ":" + Bt(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ds);
        if (Array.isArray(i) && typeof i[0] == "string" && (r == null || r[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            Jo(i[s]) && (n += Bn(a) + ":" + Bt(a, i[s]) + ";");
        else {
          var l = ut(e, r, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += Bn(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(nu), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Qo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ps;
process.env.NODE_ENV !== "production" && (ps = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ae, uu = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, a = "";
  Ae = void 0;
  var i = r[0];
  i == null || i.raw === void 0 ? (o = !1, a += ut(n, t, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(Ko), a += i[0]);
  for (var s = 1; s < r.length; s++)
    a += ut(n, t, r[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(Ko), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(ps, function(p) {
    return l = p, "";
  })), Qo.lastIndex = 0;
  for (var c = "", u; (u = Qo.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var f = ru(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: a,
    map: l,
    next: Ae,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: a,
    next: Ae
  };
};
function ms(e) {
  return Object.keys(e).reduce((r, t) => (e[t] !== void 0 && (r[t] = e[t]), r), {});
}
var du = Object.defineProperty, ea = Object.getOwnPropertySymbols, pu = Object.prototype.hasOwnProperty, mu = Object.prototype.propertyIsEnumerable, ra = (e, r, t) => r in e ? du(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Hn = (e, r) => {
  for (var t in r || (r = {}))
    pu.call(r, t) && ra(e, t, r[t]);
  if (ea)
    for (var t of ea(r))
      mu.call(r, t) && ra(e, t, r[t]);
  return e;
};
const gs = Dr({
  theme: ns
});
function Ne() {
  var e;
  return ((e = Lr(gs)) == null ? void 0 : e.theme) || ns;
}
function gu(e) {
  const r = Ne(), t = (n) => {
    var o, a, i, s;
    return {
      styles: ((o = r.components[n]) == null ? void 0 : o.styles) || {},
      classNames: ((a = r.components[n]) == null ? void 0 : a.classNames) || {},
      variants: (i = r.components[n]) == null ? void 0 : i.variants,
      sizes: (s = r.components[n]) == null ? void 0 : s.sizes
    };
  };
  return Array.isArray(e) ? e.map(t) : [t(e)];
}
function vs() {
  var e;
  return (e = Lr(gs)) == null ? void 0 : e.emotionCache;
}
function re(e, r, t) {
  var n;
  const o = Ne(), a = (n = o.components[e]) == null ? void 0 : n.defaultProps, i = typeof a == "function" ? a(o) : a;
  return Hn(Hn(Hn({}, r), i), ms(t));
}
const vu = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function hs(e) {
  return vu[e];
}
function hu(e, r) {
  const t = G();
  return (!t.current || r.length !== t.current.prevDeps.length || t.current.prevDeps.map((n, o) => n === r[o]).indexOf(!1) >= 0) && (t.current = {
    v: e(),
    prevDeps: [...r]
  }), t.current.v;
}
const yu = Kf({ key: "mantine", prepend: !0 });
function bu() {
  return vs() || yu;
}
var _u = Object.defineProperty, ta = Object.getOwnPropertySymbols, wu = Object.prototype.hasOwnProperty, Pu = Object.prototype.propertyIsEnumerable, na = (e, r, t) => r in e ? _u(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ou = (e, r) => {
  for (var t in r || (r = {}))
    wu.call(r, t) && na(e, t, r[t]);
  if (ta)
    for (var t of ta(r))
      Pu.call(r, t) && na(e, t, r[t]);
  return e;
};
const Un = "ref";
function $u(e) {
  let r;
  if (e.length !== 1)
    return { args: e, ref: r };
  const [t] = e;
  if (!(t instanceof Object))
    return { args: e, ref: r };
  if (!(Un in t))
    return { args: e, ref: r };
  r = t[Un];
  const n = Ou({}, t);
  return delete n[Un], { args: [n], ref: r };
}
const { cssFactory: Su } = (() => {
  function e(t, n, o) {
    const a = [], i = Zf(t, a, o);
    return a.length < 2 ? o : i + n(a);
  }
  function r(t) {
    const { cache: n } = t, o = (...i) => {
      const { ref: s, args: l } = $u(i), c = uu(l, n.registered);
      return eu(n, c, !1), `${n.key}-${c.name}${s === void 0 ? "" : ` ${s}`}`;
    };
    return { css: o, cx: (...i) => e(n.registered, o, Qi(i)) };
  }
  return { cssFactory: r };
})();
function ys() {
  const e = bu();
  return hu(() => Su({ cache: e }), [e]);
}
function xu({
  cx: e,
  classes: r,
  context: t,
  classNames: n,
  name: o,
  cache: a
}) {
  const i = t.reduce((s, l) => (Object.keys(l.classNames).forEach((c) => {
    typeof s[c] != "string" ? s[c] = `${l.classNames[c]}` : s[c] = `${s[c]} ${l.classNames[c]}`;
  }), s), {});
  return Object.keys(r).reduce((s, l) => (s[l] = e(r[l], i[l], n != null && n[l], Array.isArray(o) ? o.filter(Boolean).map((c) => `${(a == null ? void 0 : a.key) || "mantine"}-${c}-${l}`).join(" ") : o ? `${(a == null ? void 0 : a.key) || "mantine"}-${o}-${l}` : null), s), {});
}
var Eu = Object.defineProperty, oa = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Ru = Object.prototype.propertyIsEnumerable, aa = (e, r, t) => r in e ? Eu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Yn = (e, r) => {
  for (var t in r || (r = {}))
    Cu.call(r, t) && aa(e, t, r[t]);
  if (oa)
    for (var t of oa(r))
      Ru.call(r, t) && aa(e, t, r[t]);
  return e;
};
function to(e, r) {
  return r && Object.keys(r).forEach((t) => {
    e[t] ? e[t] = Yn(Yn({}, e[t]), r[t]) : e[t] = Yn({}, r[t]);
  }), e;
}
function ia(e, r, t, n) {
  const o = (a) => typeof a == "function" ? a(r, t || {}, n) : a || {};
  return Array.isArray(e) ? e.map((a) => o(a.styles)).reduce((a, i) => to(a, i), {}) : o(e);
}
function Nu({ ctx: e, theme: r, params: t, variant: n, size: o }) {
  return e.reduce((a, i) => (i.variants && n in i.variants && to(a, i.variants[n](r, t, { variant: n, size: o })), i.sizes && o in i.sizes && to(a, i.sizes[o](r, t, { variant: n, size: o })), a), {});
}
function pe(e) {
  const r = typeof e == "function" ? e : () => e;
  function t(n, o) {
    const a = Ne(), i = gu(o == null ? void 0 : o.name), s = vs(), l = { variant: o == null ? void 0 : o.variant, size: o == null ? void 0 : o.size }, { css: c, cx: u } = ys(), f = r(a, n, l), p = ia(o == null ? void 0 : o.styles, a, n, l), m = ia(i, a, n, l), g = Nu({
      ctx: i,
      theme: a,
      params: n,
      variant: o == null ? void 0 : o.variant,
      size: o == null ? void 0 : o.size
    }), h = Object.fromEntries(Object.keys(f).map((_) => {
      const v = u({ [c(f[_])]: !(o != null && o.unstyled) }, c(g[_]), c(m[_]), c(p[_]));
      return [_, v];
    }));
    return {
      classes: xu({
        cx: u,
        classes: h,
        context: i,
        classNames: o == null ? void 0 : o.classNames,
        name: o == null ? void 0 : o.name,
        cache: s
      }),
      cx: u,
      theme: a
    };
  }
  return t;
}
function sa(e) {
  return `___ref-${e || ""}`;
}
var Tu = Object.defineProperty, Iu = Object.defineProperties, Du = Object.getOwnPropertyDescriptors, la = Object.getOwnPropertySymbols, Au = Object.prototype.hasOwnProperty, ju = Object.prototype.propertyIsEnumerable, ca = (e, r, t) => r in e ? Tu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, tt = (e, r) => {
  for (var t in r || (r = {}))
    Au.call(r, t) && ca(e, t, r[t]);
  if (la)
    for (var t of la(r))
      ju.call(r, t) && ca(e, t, r[t]);
  return e;
}, nt = (e, r) => Iu(e, Du(r));
const ot = {
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${P(10)})` },
  transitionProperty: "transform, opacity"
}, _t = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(-${P(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${P(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${P(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${P(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: nt(tt({}, ot), {
    common: { transformOrigin: "center center" }
  }),
  "pop-bottom-left": nt(tt({}, ot), {
    common: { transformOrigin: "bottom left" }
  }),
  "pop-bottom-right": nt(tt({}, ot), {
    common: { transformOrigin: "bottom right" }
  }),
  "pop-top-left": nt(tt({}, ot), {
    common: { transformOrigin: "top left" }
  }),
  "pop-top-right": nt(tt({}, ot), {
    common: { transformOrigin: "top right" }
  })
}, fa = ["mousedown", "touchstart"];
function ku(e, r, t) {
  const n = G();
  return q(() => {
    const o = (a) => {
      const { target: i } = a ?? {};
      if (Array.isArray(t)) {
        const s = (i == null ? void 0 : i.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(i) && i.tagName !== "HTML";
        t.every((c) => !!c && !a.composedPath().includes(c)) && !s && e();
      } else
        n.current && !n.current.contains(i) && e();
    };
    return (r || fa).forEach((a) => document.addEventListener(a, o)), () => {
      (r || fa).forEach((a) => document.removeEventListener(a, o));
    };
  }, [n, e, t]), n;
}
function zu(e, r) {
  try {
    return e.addEventListener("change", r), () => e.removeEventListener("change", r);
  } catch {
    return e.addListener(r), () => e.removeListener(r);
  }
}
function Lu(e, r) {
  return typeof r == "boolean" ? r : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function Mu(e, r, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = B(t ? r : Lu(e, r)), a = G();
  return q(() => {
    if ("matchMedia" in window)
      return a.current = window.matchMedia(e), o(a.current.matches), zu(a.current, (i) => o(i.matches));
  }, [e]), n;
}
const bs = typeof document < "u" ? xn : q;
function lr(e, r) {
  const t = G(!1);
  q(() => () => {
    t.current = !1;
  }, []), q(() => {
    if (t.current)
      return e();
    t.current = !0;
  }, r);
}
function Vu({ opened: e, shouldReturnFocus: r = !0 }) {
  const t = G(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return lr(() => {
    let o = -1;
    const a = (i) => {
      i.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", a), e ? t.current = document.activeElement : r && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", a);
    };
  }, [e, r]), n;
}
const Fu = /input|select|textarea|button|object/, _s = "a, input, select, textarea, button, object, [tabindex]";
function Wu(e) {
  return process.env.NODE_ENV === "test" ? !1 : e.style.display === "none";
}
function Bu(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let t = e;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Wu(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function ws(e) {
  let r = e.getAttribute("tabindex");
  return r === null && (r = void 0), parseInt(r, 10);
}
function no(e) {
  const r = e.nodeName.toLowerCase(), t = !Number.isNaN(ws(e));
  return (Fu.test(r) && !e.disabled || e instanceof HTMLAnchorElement && e.href || t) && Bu(e);
}
function Ps(e) {
  const r = ws(e);
  return (Number.isNaN(r) || r >= 0) && no(e);
}
function Hu(e) {
  return Array.from(e.querySelectorAll(_s)).filter(Ps);
}
function Uu(e, r) {
  const t = Hu(e);
  if (!t.length) {
    r.preventDefault();
    return;
  }
  const n = t[r.shiftKey ? 0 : t.length - 1], o = e.getRootNode();
  if (!(n === o.activeElement || e === o.activeElement))
    return;
  r.preventDefault();
  const i = t[r.shiftKey ? t.length - 1 : 0];
  i && i.focus();
}
function Yu(e, r = "body > :not(script)") {
  const t = Array.from(document.querySelectorAll(r)).map((n) => {
    var o;
    if ((o = n == null ? void 0 : n.shadowRoot) != null && o.contains(e) || n.contains(e))
      return;
    const a = n.getAttribute("aria-hidden");
    return (a === null || a === "false") && n.setAttribute("aria-hidden", "true"), { node: n, ariaHidden: a };
  });
  return () => {
    t.forEach((n) => {
      n && (n.ariaHidden === null ? n.node.removeAttribute("aria-hidden") : n.node.setAttribute("aria-hidden", n.ariaHidden));
    });
  };
}
function Gu(e = !0) {
  const r = G(), t = G(null), n = (a) => {
    let i = a.querySelector("[data-autofocus]");
    if (!i) {
      const s = Array.from(a.querySelectorAll(_s));
      i = s.find(Ps) || s.find(no) || null, !i && no(a) && (i = a);
    }
    i ? i.focus({ preventScroll: !0 }) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node", a);
  }, o = sr((a) => {
    if (e) {
      if (a === null) {
        t.current && (t.current(), t.current = null);
        return;
      }
      t.current = Yu(a), r.current !== a && (a ? (setTimeout(() => {
        a.getRootNode() ? n(a) : process.env.NODE_ENV === "development" && console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", a);
      }), r.current = a) : r.current = null);
    }
  }, [e]);
  return q(() => {
    if (!e)
      return;
    r.current && setTimeout(() => n(r.current));
    const a = (i) => {
      i.key === "Tab" && r.current && Uu(r.current, i);
    };
    return document.addEventListener("keydown", a), () => {
      document.removeEventListener("keydown", a), t.current && t.current();
    };
  }, [e]), o;
}
const Xu = w["useId".toString()] || (() => {
});
function qu() {
  const e = Xu();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Os() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function $s(e) {
  const r = qu(), [t, n] = B(r);
  return bs(() => {
    n(Os());
  }, []), typeof e == "string" ? e : typeof window > "u" ? r : t;
}
function ua(e, r, t) {
  q(() => (window.addEventListener(e, r, t), () => window.removeEventListener(e, r, t)), [e, r]);
}
function Ku(e, r) {
  typeof e == "function" ? e(r) : typeof e == "object" && e !== null && "current" in e && (e.current = r);
}
function Ju(...e) {
  return (r) => {
    e.forEach((t) => Ku(t, r));
  };
}
function So(...e) {
  return sr(Ju(...e), e);
}
function oo({
  value: e,
  defaultValue: r,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, a] = B(r !== void 0 ? r : t), i = (s) => {
    a(s), n == null || n(s);
  };
  return e !== void 0 ? [e, n, !0] : [o, i, !1];
}
function Ss(e, r) {
  return Mu("(prefers-reduced-motion: reduce)", e, r);
}
const Zu = (e) => e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e, Qu = ({
  axis: e,
  target: r,
  parent: t,
  alignment: n,
  offset: o,
  isList: a
}) => {
  if (!r || !t && typeof document > "u")
    return 0;
  const i = !!t, l = (t || document.body).getBoundingClientRect(), c = r.getBoundingClientRect(), u = (f) => c[f] - l[f];
  if (e === "y") {
    const f = u("top");
    if (f === 0)
      return 0;
    if (n === "start") {
      const m = f - o;
      return m <= c.height * (a ? 0 : 1) || !a ? m : 0;
    }
    const p = i ? l.height : window.innerHeight;
    if (n === "end") {
      const m = f + o - p + c.height;
      return m >= -c.height * (a ? 0 : 1) || !a ? m : 0;
    }
    return n === "center" ? f - p / 2 + c.height / 2 : 0;
  }
  if (e === "x") {
    const f = u("left");
    if (f === 0)
      return 0;
    if (n === "start") {
      const m = f - o;
      return m <= c.width || !a ? m : 0;
    }
    const p = i ? l.width : window.innerWidth;
    if (n === "end") {
      const m = f + o - p + c.width;
      return m >= -c.width || !a ? m : 0;
    }
    return n === "center" ? f - p / 2 + c.width / 2 : 0;
  }
  return 0;
}, ed = ({ axis: e, parent: r }) => {
  if (!r && typeof document > "u")
    return 0;
  const t = e === "y" ? "scrollTop" : "scrollLeft";
  if (r)
    return r[t];
  const { body: n, documentElement: o } = document;
  return n[t] + o[t];
}, rd = ({ axis: e, parent: r, distance: t }) => {
  if (!r && typeof document > "u")
    return;
  const n = e === "y" ? "scrollTop" : "scrollLeft";
  if (r)
    r[n] = t;
  else {
    const { body: o, documentElement: a } = document;
    o[n] = t, a[n] = t;
  }
};
function td({
  duration: e = 1250,
  axis: r = "y",
  onScrollFinish: t,
  easing: n = Zu,
  offset: o = 0,
  cancelable: a = !0,
  isList: i = !1
} = {}) {
  const s = G(0), l = G(0), c = G(!1), u = G(null), f = G(null), p = Ss(), m = () => {
    s.current && cancelAnimationFrame(s.current);
  }, g = sr(({ alignment: _ = "start" } = {}) => {
    var v;
    c.current = !1, s.current && m();
    const y = (v = ed({ parent: u.current, axis: r })) != null ? v : 0, O = Qu({
      parent: u.current,
      target: f.current,
      axis: r,
      alignment: _,
      offset: o,
      isList: i
    }) - (u.current ? 0 : y);
    function E() {
      l.current === 0 && (l.current = performance.now());
      const R = performance.now() - l.current, x = p || e === 0 ? 1 : R / e, T = y + O * n(x);
      rd({
        parent: u.current,
        axis: r,
        distance: T
      }), !c.current && x < 1 ? s.current = requestAnimationFrame(E) : (typeof t == "function" && t(), l.current = 0, s.current = 0, m());
    }
    E();
  }, [r, e, n, i, o, t, p]), h = () => {
    a && (c.current = !0);
  };
  return ua("wheel", h, {
    passive: !0
  }), ua("touchmove", h, {
    passive: !0
  }), q(() => m, []), {
    scrollableRef: u,
    targetRef: f,
    scrollIntoView: g,
    cancel: m
  };
}
var da = Object.getOwnPropertySymbols, nd = Object.prototype.hasOwnProperty, od = Object.prototype.propertyIsEnumerable, ad = (e, r) => {
  var t = {};
  for (var n in e)
    nd.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && da)
    for (var n of da(e))
      r.indexOf(n) < 0 && od.call(e, n) && (t[n] = e[n]);
  return t;
};
function xo(e) {
  const r = e, {
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: i,
    ml: s,
    mr: l,
    p: c,
    px: u,
    py: f,
    pt: p,
    pb: m,
    pl: g,
    pr: h,
    bg: _,
    c: v,
    opacity: y,
    ff: O,
    fz: E,
    fw: S,
    lts: R,
    ta: x,
    lh: T,
    fs: I,
    tt: N,
    td: A,
    w: z,
    miw: H,
    maw: K,
    h: X,
    mih: J,
    mah: ce,
    bgsz: fe,
    bgp: Ee,
    bgr: ve,
    bga: _e,
    pos: Ce,
    top: Le,
    left: ur,
    bottom: dr,
    right: Ye,
    inset: Ge,
    display: Ie
  } = r, Xe = ad(r, [
    "m",
    "mx",
    "my",
    "mt",
    "mb",
    "ml",
    "mr",
    "p",
    "px",
    "py",
    "pt",
    "pb",
    "pl",
    "pr",
    "bg",
    "c",
    "opacity",
    "ff",
    "fz",
    "fw",
    "lts",
    "ta",
    "lh",
    "fs",
    "tt",
    "td",
    "w",
    "miw",
    "maw",
    "h",
    "mih",
    "mah",
    "bgsz",
    "bgp",
    "bgr",
    "bga",
    "pos",
    "top",
    "left",
    "bottom",
    "right",
    "inset",
    "display"
  ]);
  return { systemStyles: ms({
    m: t,
    mx: n,
    my: o,
    mt: a,
    mb: i,
    ml: s,
    mr: l,
    p: c,
    px: u,
    py: f,
    pt: p,
    pb: m,
    pl: g,
    pr: h,
    bg: _,
    c: v,
    opacity: y,
    ff: O,
    fz: E,
    fw: S,
    lts: R,
    ta: x,
    lh: T,
    fs: I,
    tt: N,
    td: A,
    w: z,
    miw: H,
    maw: K,
    h: X,
    mih: J,
    mah: ce,
    bgsz: fe,
    bgp: Ee,
    bgr: ve,
    bga: _e,
    pos: Ce,
    top: Le,
    left: ur,
    bottom: dr,
    right: Ye,
    inset: Ge,
    display: Ie
  }), rest: Xe };
}
function id(e, r) {
  const t = Object.keys(e).filter((n) => n !== "base").sort((n, o) => Ft(k({ size: n, sizes: r.breakpoints })) - Ft(k({ size: o, sizes: r.breakpoints })));
  return "base" in e ? ["base", ...t] : t;
}
function sd({ value: e, theme: r, getValue: t, property: n }) {
  if (e == null)
    return;
  if (typeof e == "object")
    return id(e, r).reduce((i, s) => {
      if (s === "base" && e.base !== void 0) {
        const c = t(e.base, r);
        return Array.isArray(n) ? (n.forEach((u) => {
          i[u] = c;
        }), i) : (i[n] = c, i);
      }
      const l = t(e[s], r);
      return Array.isArray(n) ? (i[r.fn.largerThan(s)] = {}, n.forEach((c) => {
        i[r.fn.largerThan(s)][c] = l;
      }), i) : (i[r.fn.largerThan(s)] = {
        [n]: l
      }, i);
    }, {});
  const o = t(e, r);
  return Array.isArray(n) ? n.reduce((a, i) => (a[i] = o, a), {}) : { [n]: o };
}
function ld(e, r) {
  return e === "dimmed" ? r.colorScheme === "dark" ? r.colors.dark[2] : r.colors.gray[6] : r.fn.variant({ variant: "filled", color: e, primaryFallback: !1 }).background;
}
function cd(e) {
  return P(e);
}
function fd(e) {
  return e;
}
function ud(e, r) {
  return k({ size: e, sizes: r.fontSizes });
}
const dd = ["-xs", "-sm", "-md", "-lg", "-xl"];
function pd(e, r) {
  return dd.includes(e) ? `calc(${k({
    size: e.replace("-", ""),
    sizes: r.spacing
  })} * -1)` : k({ size: e, sizes: r.spacing });
}
const md = {
  identity: fd,
  color: ld,
  size: cd,
  fontSize: ud,
  spacing: pd
}, gd = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
  my: { type: "spacing", property: ["marginTop", "marginBottom"] },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
  py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
  bg: { type: "color", property: "background" },
  c: { type: "color", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "identity", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "identity", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" }
};
var vd = Object.defineProperty, pa = Object.getOwnPropertySymbols, hd = Object.prototype.hasOwnProperty, yd = Object.prototype.propertyIsEnumerable, ma = (e, r, t) => r in e ? vd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ga = (e, r) => {
  for (var t in r || (r = {}))
    hd.call(r, t) && ma(e, t, r[t]);
  if (pa)
    for (var t of pa(r))
      yd.call(r, t) && ma(e, t, r[t]);
  return e;
};
function va(e, r, t = gd) {
  return Object.keys(t).reduce((o, a) => (a in e && e[a] !== void 0 && o.push(sd({
    value: e[a],
    getValue: md[t[a].type],
    property: t[a].property,
    theme: r
  })), o), []).reduce((o, a) => (Object.keys(a).forEach((i) => {
    typeof a[i] == "object" && a[i] !== null && i in o ? o[i] = ga(ga({}, o[i]), a[i]) : o[i] = a[i];
  }), o), {});
}
function ha(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function bd(e, r, t) {
  const n = Ne(), { css: o, cx: a } = ys();
  return Array.isArray(e) ? a(t, o(va(r, n)), e.map((i) => o(ha(i, n)))) : a(t, o(ha(e, n)), o(va(r, n)));
}
var _d = Object.defineProperty, Ht = Object.getOwnPropertySymbols, xs = Object.prototype.hasOwnProperty, Es = Object.prototype.propertyIsEnumerable, ya = (e, r, t) => r in e ? _d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, wd = (e, r) => {
  for (var t in r || (r = {}))
    xs.call(r, t) && ya(e, t, r[t]);
  if (Ht)
    for (var t of Ht(r))
      Es.call(r, t) && ya(e, t, r[t]);
  return e;
}, Pd = (e, r) => {
  var t = {};
  for (var n in e)
    xs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ht)
    for (var n of Ht(e))
      r.indexOf(n) < 0 && Es.call(e, n) && (t[n] = e[n]);
  return t;
};
const Cs = L((e, r) => {
  var t = e, { className: n, component: o, style: a, sx: i } = t, s = Pd(t, ["className", "component", "style", "sx"]);
  const { systemStyles: l, rest: c } = xo(s), u = o || "div";
  return /* @__PURE__ */ w.createElement(u, wd({
    ref: r,
    className: bd(i, l, n),
    style: a
  }, c));
});
Cs.displayName = "@mantine/core/Box";
const ge = Cs;
var Od = Object.defineProperty, $d = Object.defineProperties, Sd = Object.getOwnPropertyDescriptors, ba = Object.getOwnPropertySymbols, xd = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, _a = (e, r, t) => r in e ? Od(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, wa = (e, r) => {
  for (var t in r || (r = {}))
    xd.call(r, t) && _a(e, t, r[t]);
  if (ba)
    for (var t of ba(r))
      Ed.call(r, t) && _a(e, t, r[t]);
  return e;
}, Cd = (e, r) => $d(e, Sd(r)), Rd = pe((e) => ({
  root: Cd(wa(wa({}, e.fn.focusStyles()), e.fn.fontStyles()), {
    cursor: "pointer",
    border: 0,
    padding: 0,
    appearance: "none",
    fontSize: e.fontSizes.md,
    backgroundColor: "transparent",
    textAlign: "left",
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    textDecoration: "none",
    boxSizing: "border-box"
  })
}));
const Nd = Rd;
var Td = Object.defineProperty, Ut = Object.getOwnPropertySymbols, Rs = Object.prototype.hasOwnProperty, Ns = Object.prototype.propertyIsEnumerable, Pa = (e, r, t) => r in e ? Td(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Id = (e, r) => {
  for (var t in r || (r = {}))
    Rs.call(r, t) && Pa(e, t, r[t]);
  if (Ut)
    for (var t of Ut(r))
      Ns.call(r, t) && Pa(e, t, r[t]);
  return e;
}, Dd = (e, r) => {
  var t = {};
  for (var n in e)
    Rs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Ut)
    for (var n of Ut(e))
      r.indexOf(n) < 0 && Ns.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ts = L((e, r) => {
  const t = re("UnstyledButton", {}, e), {
    className: n,
    component: o = "button",
    unstyled: a,
    variant: i
  } = t, s = Dd(t, [
    "className",
    "component",
    "unstyled",
    "variant"
  ]), { classes: l, cx: c } = Nd(null, { name: "UnstyledButton", unstyled: a, variant: i });
  return /* @__PURE__ */ w.createElement(ge, Id({
    component: o,
    ref: r,
    className: c(l.root, n),
    type: o === "button" ? "button" : void 0
  }, s));
});
Ts.displayName = "@mantine/core/UnstyledButton";
const Is = Ts;
var Ad = Object.defineProperty, jd = Object.defineProperties, kd = Object.getOwnPropertyDescriptors, Oa = Object.getOwnPropertySymbols, zd = Object.prototype.hasOwnProperty, Ld = Object.prototype.propertyIsEnumerable, $a = (e, r, t) => r in e ? Ad(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ao = (e, r) => {
  for (var t in r || (r = {}))
    zd.call(r, t) && $a(e, t, r[t]);
  if (Oa)
    for (var t of Oa(r))
      Ld.call(r, t) && $a(e, t, r[t]);
  return e;
}, Sa = (e, r) => jd(e, kd(r));
const Md = [
  "subtle",
  "filled",
  "outline",
  "light",
  "default",
  "transparent",
  "gradient"
], wt = {
  xs: P(18),
  sm: P(22),
  md: P(28),
  lg: P(34),
  xl: P(44)
};
function Vd({ variant: e, theme: r, color: t, gradient: n }) {
  const o = r.fn.variant({ color: t, variant: e, gradient: n });
  return e === "gradient" ? {
    border: 0,
    backgroundImage: o.background,
    color: o.color,
    "&:hover": r.fn.hover({
      backgroundSize: "200%"
    })
  } : Md.includes(e) ? ao({
    border: `${P(1)} solid ${o.border}`,
    backgroundColor: o.background,
    color: o.color
  }, r.fn.hover({
    backgroundColor: o.hover
  })) : null;
}
var Fd = pe((e, { radius: r, color: t, gradient: n }, { variant: o, size: a }) => ({
  root: Sa(ao({
    position: "relative",
    borderRadius: e.fn.radius(r),
    padding: 0,
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: k({ size: a, sizes: wt }),
    minHeight: k({ size: a, sizes: wt }),
    width: k({ size: a, sizes: wt }),
    minWidth: k({ size: a, sizes: wt })
  }, Vd({ variant: o, theme: e, color: t, gradient: n })), {
    "&:active": e.activeStyles,
    "& [data-action-icon-loader]": {
      maxWidth: "70%"
    },
    "&:disabled, &[data-disabled]": {
      color: e.colors.gray[e.colorScheme === "dark" ? 6 : 4],
      cursor: "not-allowed",
      backgroundColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
      borderColor: o === "transparent" ? void 0 : e.fn.themeColor("gray", e.colorScheme === "dark" ? 8 : 1),
      backgroundImage: "none",
      pointerEvents: "none",
      "&:active": {
        transform: "none"
      }
    },
    "&[data-loading]": {
      pointerEvents: "none",
      "&::before": Sa(ao({
        content: '""'
      }, e.fn.cover(P(-1))), {
        backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: e.fn.radius(r),
        cursor: "not-allowed"
      })
    }
  })
}));
const Wd = Fd;
var Bd = Object.defineProperty, Yt = Object.getOwnPropertySymbols, Ds = Object.prototype.hasOwnProperty, As = Object.prototype.propertyIsEnumerable, xa = (e, r, t) => r in e ? Bd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Hd = (e, r) => {
  for (var t in r || (r = {}))
    Ds.call(r, t) && xa(e, t, r[t]);
  if (Yt)
    for (var t of Yt(r))
      As.call(r, t) && xa(e, t, r[t]);
  return e;
}, Ud = (e, r) => {
  var t = {};
  for (var n in e)
    Ds.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Yt)
    for (var n of Yt(e))
      r.indexOf(n) < 0 && As.call(e, n) && (t[n] = e[n]);
  return t;
};
function Yd(e) {
  var r = e, { size: t, color: n } = r, o = Ud(r, ["size", "color"]);
  return /* @__PURE__ */ w.createElement("svg", Hd({
    viewBox: "0 0 135 140",
    xmlns: "http://www.w3.org/2000/svg",
    fill: n,
    width: t
  }, o), /* @__PURE__ */ w.createElement("rect", {
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("rect", {
    x: "30",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("rect", {
    x: "60",
    width: "15",
    height: "140",
    rx: "6"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "y",
    begin: "0s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("rect", {
    x: "90",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "height",
    begin: "0.25s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "y",
    begin: "0.25s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("rect", {
    x: "120",
    y: "10",
    width: "15",
    height: "120",
    rx: "6"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "height",
    begin: "0.5s",
    dur: "1s",
    values: "120;110;100;90;80;70;60;50;40;140;120",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "y",
    begin: "0.5s",
    dur: "1s",
    values: "10;15;20;25;30;35;40;45;50;0;10",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}
var Gd = Object.defineProperty, Gt = Object.getOwnPropertySymbols, js = Object.prototype.hasOwnProperty, ks = Object.prototype.propertyIsEnumerable, Ea = (e, r, t) => r in e ? Gd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Xd = (e, r) => {
  for (var t in r || (r = {}))
    js.call(r, t) && Ea(e, t, r[t]);
  if (Gt)
    for (var t of Gt(r))
      ks.call(r, t) && Ea(e, t, r[t]);
  return e;
}, qd = (e, r) => {
  var t = {};
  for (var n in e)
    js.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Gt)
    for (var n of Gt(e))
      r.indexOf(n) < 0 && ks.call(e, n) && (t[n] = e[n]);
  return t;
};
function Kd(e) {
  var r = e, { size: t, color: n } = r, o = qd(r, ["size", "color"]);
  return /* @__PURE__ */ w.createElement("svg", Xd({
    width: t,
    height: t,
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: n
  }, o), /* @__PURE__ */ w.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ w.createElement("g", {
    transform: "translate(2.5 2.5)",
    strokeWidth: "5"
  }, /* @__PURE__ */ w.createElement("circle", {
    strokeOpacity: ".5",
    cx: "16",
    cy: "16",
    r: "16"
  }), /* @__PURE__ */ w.createElement("path", {
    d: "M32 16c0-9.94-8.06-16-16-16"
  }, /* @__PURE__ */ w.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 16 16",
    to: "360 16 16",
    dur: "1s",
    repeatCount: "indefinite"
  })))));
}
var Jd = Object.defineProperty, Xt = Object.getOwnPropertySymbols, zs = Object.prototype.hasOwnProperty, Ls = Object.prototype.propertyIsEnumerable, Ca = (e, r, t) => r in e ? Jd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Zd = (e, r) => {
  for (var t in r || (r = {}))
    zs.call(r, t) && Ca(e, t, r[t]);
  if (Xt)
    for (var t of Xt(r))
      Ls.call(r, t) && Ca(e, t, r[t]);
  return e;
}, Qd = (e, r) => {
  var t = {};
  for (var n in e)
    zs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Xt)
    for (var n of Xt(e))
      r.indexOf(n) < 0 && Ls.call(e, n) && (t[n] = e[n]);
  return t;
};
function ep(e) {
  var r = e, { size: t, color: n } = r, o = Qd(r, ["size", "color"]);
  return /* @__PURE__ */ w.createElement("svg", Zd({
    width: t,
    viewBox: "0 0 120 30",
    xmlns: "http://www.w3.org/2000/svg",
    fill: n
  }, o), /* @__PURE__ */ w.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ w.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, /* @__PURE__ */ w.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ w.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
}
var rp = Object.defineProperty, qt = Object.getOwnPropertySymbols, Ms = Object.prototype.hasOwnProperty, Vs = Object.prototype.propertyIsEnumerable, Ra = (e, r, t) => r in e ? rp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, tp = (e, r) => {
  for (var t in r || (r = {}))
    Ms.call(r, t) && Ra(e, t, r[t]);
  if (qt)
    for (var t of qt(r))
      Vs.call(r, t) && Ra(e, t, r[t]);
  return e;
}, np = (e, r) => {
  var t = {};
  for (var n in e)
    Ms.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && qt)
    for (var n of qt(e))
      r.indexOf(n) < 0 && Vs.call(e, n) && (t[n] = e[n]);
  return t;
};
const Gn = {
  bars: Yd,
  oval: Kd,
  dots: ep
}, op = {
  xs: P(18),
  sm: P(22),
  md: P(36),
  lg: P(44),
  xl: P(58)
}, ap = {
  size: "md"
};
function Eo(e) {
  const r = re("Loader", ap, e), { size: t, color: n, variant: o } = r, a = np(r, ["size", "color", "variant"]), i = Ne(), s = o in Gn ? o : i.loader;
  return /* @__PURE__ */ w.createElement(ge, tp({
    role: "presentation",
    component: Gn[s] || Gn.bars,
    size: k({ size: t, sizes: op }),
    color: i.fn.variant({
      variant: "filled",
      primaryFallback: !1,
      color: n || i.primaryColor
    }).background
  }, a));
}
Eo.displayName = "@mantine/core/Loader";
var ip = Object.defineProperty, Kt = Object.getOwnPropertySymbols, Fs = Object.prototype.hasOwnProperty, Ws = Object.prototype.propertyIsEnumerable, Na = (e, r, t) => r in e ? ip(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ta = (e, r) => {
  for (var t in r || (r = {}))
    Fs.call(r, t) && Na(e, t, r[t]);
  if (Kt)
    for (var t of Kt(r))
      Ws.call(r, t) && Na(e, t, r[t]);
  return e;
}, sp = (e, r) => {
  var t = {};
  for (var n in e)
    Fs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Kt)
    for (var n of Kt(e))
      r.indexOf(n) < 0 && Ws.call(e, n) && (t[n] = e[n]);
  return t;
};
const lp = {
  color: "gray",
  size: "md",
  variant: "subtle"
}, Bs = L((e, r) => {
  const t = re("ActionIcon", lp, e), {
    className: n,
    color: o,
    children: a,
    radius: i,
    size: s,
    variant: l,
    gradient: c,
    disabled: u,
    loaderProps: f,
    loading: p,
    unstyled: m,
    __staticSelector: g
  } = t, h = sp(t, [
    "className",
    "color",
    "children",
    "radius",
    "size",
    "variant",
    "gradient",
    "disabled",
    "loaderProps",
    "loading",
    "unstyled",
    "__staticSelector"
  ]), { classes: _, cx: v, theme: y } = Wd({ radius: i, color: o, gradient: c }, { name: ["ActionIcon", g], unstyled: m, size: s, variant: l }), O = /* @__PURE__ */ w.createElement(Eo, Ta({
    color: y.fn.variant({ color: o, variant: l }).color,
    size: "100%",
    "data-action-icon-loader": !0
  }, f));
  return /* @__PURE__ */ w.createElement(Is, Ta({
    className: v(_.root, n),
    ref: r,
    disabled: u,
    "data-disabled": u || void 0,
    "data-loading": p || void 0,
    unstyled: m
  }, h), p ? O : a);
});
Bs.displayName = "@mantine/core/ActionIcon";
const cp = Bs;
var fp = Object.defineProperty, up = Object.defineProperties, dp = Object.getOwnPropertyDescriptors, Jt = Object.getOwnPropertySymbols, Hs = Object.prototype.hasOwnProperty, Us = Object.prototype.propertyIsEnumerable, Ia = (e, r, t) => r in e ? fp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, pp = (e, r) => {
  for (var t in r || (r = {}))
    Hs.call(r, t) && Ia(e, t, r[t]);
  if (Jt)
    for (var t of Jt(r))
      Us.call(r, t) && Ia(e, t, r[t]);
  return e;
}, mp = (e, r) => up(e, dp(r)), gp = (e, r) => {
  var t = {};
  for (var n in e)
    Hs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Jt)
    for (var n of Jt(e))
      r.indexOf(n) < 0 && Us.call(e, n) && (t[n] = e[n]);
  return t;
};
function Ys(e) {
  const r = re("Portal", {}, e), { children: t, target: n, className: o, innerRef: a } = r, i = gp(r, ["children", "target", "className", "innerRef"]), s = Ne(), [l, c] = B(!1), u = G();
  return bs(() => (c(!0), u.current = n ? typeof n == "string" ? document.querySelector(n) : n : document.createElement("div"), n || document.body.appendChild(u.current), () => {
    !n && document.body.removeChild(u.current);
  }), [n]), l ? Cc(/* @__PURE__ */ w.createElement("div", mp(pp({
    className: o,
    dir: s.dir
  }, i), {
    ref: a
  }), t), u.current) : null;
}
Ys.displayName = "@mantine/core/Portal";
var vp = Object.defineProperty, Zt = Object.getOwnPropertySymbols, Gs = Object.prototype.hasOwnProperty, Xs = Object.prototype.propertyIsEnumerable, Da = (e, r, t) => r in e ? vp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, hp = (e, r) => {
  for (var t in r || (r = {}))
    Gs.call(r, t) && Da(e, t, r[t]);
  if (Zt)
    for (var t of Zt(r))
      Xs.call(r, t) && Da(e, t, r[t]);
  return e;
}, yp = (e, r) => {
  var t = {};
  for (var n in e)
    Gs.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Zt)
    for (var n of Zt(e))
      r.indexOf(n) < 0 && Xs.call(e, n) && (t[n] = e[n]);
  return t;
};
function qs(e) {
  var r = e, { withinPortal: t = !0, children: n } = r, o = yp(r, ["withinPortal", "children"]);
  return t ? /* @__PURE__ */ w.createElement(Ys, hp({}, o), n) : /* @__PURE__ */ w.createElement(w.Fragment, null, n);
}
qs.displayName = "@mantine/core/OptionalPortal";
var bp = Object.defineProperty, Aa = Object.getOwnPropertySymbols, _p = Object.prototype.hasOwnProperty, wp = Object.prototype.propertyIsEnumerable, ja = (e, r, t) => r in e ? bp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Pp = (e, r) => {
  for (var t in r || (r = {}))
    _p.call(r, t) && ja(e, t, r[t]);
  if (Aa)
    for (var t of Aa(r))
      wp.call(r, t) && ja(e, t, r[t]);
  return e;
};
function Ks(e) {
  return /* @__PURE__ */ w.createElement("svg", Pp({
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e), /* @__PURE__ */ w.createElement("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
Ks.displayName = "@mantine/core/CloseIcon";
var Op = Object.defineProperty, Qt = Object.getOwnPropertySymbols, Js = Object.prototype.hasOwnProperty, Zs = Object.prototype.propertyIsEnumerable, ka = (e, r, t) => r in e ? Op(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, $p = (e, r) => {
  for (var t in r || (r = {}))
    Js.call(r, t) && ka(e, t, r[t]);
  if (Qt)
    for (var t of Qt(r))
      Zs.call(r, t) && ka(e, t, r[t]);
  return e;
}, Sp = (e, r) => {
  var t = {};
  for (var n in e)
    Js.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Qt)
    for (var n of Qt(e))
      r.indexOf(n) < 0 && Zs.call(e, n) && (t[n] = e[n]);
  return t;
};
const xp = {
  xs: P(12),
  sm: P(16),
  md: P(20),
  lg: P(28),
  xl: P(34)
}, Ep = {
  size: "sm"
}, Qs = L((e, r) => {
  const t = re("CloseButton", Ep, e), { iconSize: n, size: o, children: a } = t, i = Sp(t, ["iconSize", "size", "children"]), s = P(n || xp[o]);
  return /* @__PURE__ */ w.createElement(cp, $p({
    ref: r,
    __staticSelector: "CloseButton",
    size: o
  }, i), a || /* @__PURE__ */ w.createElement(Ks, {
    width: s,
    height: s
  }));
});
Qs.displayName = "@mantine/core/CloseButton";
const Cp = Qs;
var Rp = Object.defineProperty, Np = Object.defineProperties, Tp = Object.getOwnPropertyDescriptors, za = Object.getOwnPropertySymbols, Ip = Object.prototype.hasOwnProperty, Dp = Object.prototype.propertyIsEnumerable, La = (e, r, t) => r in e ? Rp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Pt = (e, r) => {
  for (var t in r || (r = {}))
    Ip.call(r, t) && La(e, t, r[t]);
  if (za)
    for (var t of za(r))
      Dp.call(r, t) && La(e, t, r[t]);
  return e;
}, Ap = (e, r) => Np(e, Tp(r));
function jp({
  underline: e,
  strikethrough: r
}) {
  const t = [];
  return e && t.push("underline"), r && t.push("line-through"), t.length > 0 ? t.join(" ") : "none";
}
function kp({ theme: e, color: r }) {
  return r === "dimmed" ? e.fn.dimmed() : typeof r == "string" && (r in e.colors || r.split(".")[0] in e.colors) ? e.fn.variant({ variant: "filled", color: r }).background : r || "inherit";
}
function zp(e) {
  return typeof e == "number" ? {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: e,
    WebkitBoxOrient: "vertical"
  } : null;
}
function Lp({ theme: e, truncate: r }) {
  return r === "start" ? {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    direction: e.dir === "ltr" ? "rtl" : "ltr",
    textAlign: e.dir === "ltr" ? "right" : "left"
  } : r ? {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  } : null;
}
var Mp = pe((e, {
  color: r,
  lineClamp: t,
  truncate: n,
  inline: o,
  inherit: a,
  underline: i,
  gradient: s,
  weight: l,
  transform: c,
  align: u,
  strikethrough: f,
  italic: p
}, { size: m }) => {
  const g = e.fn.variant({ variant: "gradient", gradient: s });
  return {
    root: Ap(Pt(Pt(Pt(Pt({}, e.fn.fontStyles()), e.fn.focusStyles()), zp(t)), Lp({ theme: e, truncate: n })), {
      color: kp({ color: r, theme: e }),
      fontFamily: a ? "inherit" : e.fontFamily,
      fontSize: a || m === void 0 ? "inherit" : k({ size: m, sizes: e.fontSizes }),
      lineHeight: a ? "inherit" : o ? 1 : e.lineHeight,
      textDecoration: jp({ underline: i, strikethrough: f }),
      WebkitTapHighlightColor: "transparent",
      fontWeight: a ? "inherit" : l,
      textTransform: c,
      textAlign: u,
      fontStyle: p ? "italic" : void 0
    }),
    gradient: {
      backgroundImage: g.background,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
  };
});
const Vp = Mp;
var Fp = Object.defineProperty, en = Object.getOwnPropertySymbols, el = Object.prototype.hasOwnProperty, rl = Object.prototype.propertyIsEnumerable, Ma = (e, r, t) => r in e ? Fp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Wp = (e, r) => {
  for (var t in r || (r = {}))
    el.call(r, t) && Ma(e, t, r[t]);
  if (en)
    for (var t of en(r))
      rl.call(r, t) && Ma(e, t, r[t]);
  return e;
}, Bp = (e, r) => {
  var t = {};
  for (var n in e)
    el.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && en)
    for (var n of en(e))
      r.indexOf(n) < 0 && rl.call(e, n) && (t[n] = e[n]);
  return t;
};
const Hp = {
  variant: "text"
}, tl = L((e, r) => {
  const t = re("Text", Hp, e), {
    className: n,
    size: o,
    weight: a,
    transform: i,
    color: s,
    align: l,
    variant: c,
    lineClamp: u,
    truncate: f,
    gradient: p,
    inline: m,
    inherit: g,
    underline: h,
    strikethrough: _,
    italic: v,
    classNames: y,
    styles: O,
    unstyled: E,
    span: S,
    __staticSelector: R
  } = t, x = Bp(t, [
    "className",
    "size",
    "weight",
    "transform",
    "color",
    "align",
    "variant",
    "lineClamp",
    "truncate",
    "gradient",
    "inline",
    "inherit",
    "underline",
    "strikethrough",
    "italic",
    "classNames",
    "styles",
    "unstyled",
    "span",
    "__staticSelector"
  ]), { classes: T, cx: I } = Vp({
    color: s,
    lineClamp: u,
    truncate: f,
    inline: m,
    inherit: g,
    underline: h,
    strikethrough: _,
    italic: v,
    weight: a,
    transform: i,
    align: l,
    gradient: p
  }, { unstyled: E, name: R || "Text", variant: c, size: o });
  return /* @__PURE__ */ w.createElement(ge, Wp({
    ref: r,
    className: I(T.root, { [T.gradient]: c === "gradient" }, n),
    component: S ? "span" : "div"
  }, x));
});
tl.displayName = "@mantine/core/Text";
const Nn = tl, Ot = {
  xs: P(1),
  sm: P(2),
  md: P(3),
  lg: P(4),
  xl: P(5)
};
function $t(e, r) {
  const t = e.fn.variant({ variant: "outline", color: r }).border;
  return typeof r == "string" && (r in e.colors || r.split(".")[0] in e.colors) ? t : r === void 0 ? e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4] : r;
}
var Up = pe((e, { color: r }, { size: t, variant: n }) => ({
  root: {},
  withLabel: {
    borderTop: "0 !important"
  },
  left: {
    "&::before": {
      display: "none"
    }
  },
  right: {
    "&::after": {
      display: "none"
    }
  },
  label: {
    display: "flex",
    alignItems: "center",
    "&::before": {
      content: '""',
      flex: 1,
      height: P(1),
      borderTop: `${k({ size: t, sizes: Ot })} ${n} ${$t(e, r)}`,
      marginRight: e.spacing.xs
    },
    "&::after": {
      content: '""',
      flex: 1,
      borderTop: `${k({ size: t, sizes: Ot })} ${n} ${$t(e, r)}`,
      marginLeft: e.spacing.xs
    }
  },
  labelDefaultStyles: {
    color: r === "dark" ? e.colors.dark[1] : e.fn.themeColor(r, e.colorScheme === "dark" ? 5 : e.fn.primaryShade(), !1)
  },
  horizontal: {
    border: 0,
    borderTopWidth: P(k({ size: t, sizes: Ot })),
    borderTopColor: $t(e, r),
    borderTopStyle: n,
    margin: 0
  },
  vertical: {
    border: 0,
    alignSelf: "stretch",
    height: "auto",
    borderLeftWidth: P(k({ size: t, sizes: Ot })),
    borderLeftColor: $t(e, r),
    borderLeftStyle: n
  }
}));
const Yp = Up;
var Gp = Object.defineProperty, Xp = Object.defineProperties, qp = Object.getOwnPropertyDescriptors, rn = Object.getOwnPropertySymbols, nl = Object.prototype.hasOwnProperty, ol = Object.prototype.propertyIsEnumerable, Va = (e, r, t) => r in e ? Gp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Fa = (e, r) => {
  for (var t in r || (r = {}))
    nl.call(r, t) && Va(e, t, r[t]);
  if (rn)
    for (var t of rn(r))
      ol.call(r, t) && Va(e, t, r[t]);
  return e;
}, Kp = (e, r) => Xp(e, qp(r)), Jp = (e, r) => {
  var t = {};
  for (var n in e)
    nl.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && rn)
    for (var n of rn(e))
      r.indexOf(n) < 0 && ol.call(e, n) && (t[n] = e[n]);
  return t;
};
const Zp = {
  orientation: "horizontal",
  size: "xs",
  labelPosition: "left",
  variant: "solid"
}, io = L((e, r) => {
  const t = re("Divider", Zp, e), {
    className: n,
    color: o,
    orientation: a,
    size: i,
    label: s,
    labelPosition: l,
    labelProps: c,
    variant: u,
    styles: f,
    classNames: p,
    unstyled: m
  } = t, g = Jp(t, [
    "className",
    "color",
    "orientation",
    "size",
    "label",
    "labelPosition",
    "labelProps",
    "variant",
    "styles",
    "classNames",
    "unstyled"
  ]), { classes: h, cx: _ } = Yp({ color: o }, { classNames: p, styles: f, unstyled: m, name: "Divider", variant: u, size: i }), v = a === "vertical", y = a === "horizontal", O = !!s && y, E = !(c != null && c.color);
  return /* @__PURE__ */ w.createElement(ge, Fa({
    ref: r,
    className: _(h.root, {
      [h.vertical]: v,
      [h.horizontal]: y,
      [h.withLabel]: O
    }, n),
    role: "separator"
  }, g), O && /* @__PURE__ */ w.createElement(Nn, Kp(Fa({}, c), {
    size: (c == null ? void 0 : c.size) || "xs",
    mt: P(2),
    className: _(h.label, h[l], {
      [h.labelDefaultStyles]: E
    })
  }), s));
});
io.displayName = "@mantine/core/Divider";
var Qp = Object.defineProperty, em = Object.defineProperties, rm = Object.getOwnPropertyDescriptors, Wa = Object.getOwnPropertySymbols, tm = Object.prototype.hasOwnProperty, nm = Object.prototype.propertyIsEnumerable, Ba = (e, r, t) => r in e ? Qp(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ha = (e, r) => {
  for (var t in r || (r = {}))
    tm.call(r, t) && Ba(e, t, r[t]);
  if (Wa)
    for (var t of Wa(r))
      nm.call(r, t) && Ba(e, t, r[t]);
  return e;
}, om = (e, r) => em(e, rm(r)), am = pe((e, r, { size: t }) => ({
  item: om(Ha({}, e.fn.fontStyles()), {
    boxSizing: "border-box",
    textAlign: "left",
    width: "100%",
    padding: `calc(${k({ size: t, sizes: e.spacing })} / 1.5) ${k({
      size: t,
      sizes: e.spacing
    })}`,
    cursor: "pointer",
    fontSize: k({ size: t, sizes: e.fontSizes }),
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    borderRadius: e.fn.radius(),
    "&[data-hovered]": {
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[1]
    },
    "&[data-selected]": Ha({
      backgroundColor: e.fn.variant({ variant: "filled" }).background,
      color: e.fn.variant({ variant: "filled" }).color
    }, e.fn.hover({ backgroundColor: e.fn.variant({ variant: "filled" }).hover })),
    "&[data-disabled]": {
      cursor: "default",
      color: e.colors.dark[2]
    }
  }),
  nothingFound: {
    boxSizing: "border-box",
    color: e.colors.gray[6],
    paddingTop: `calc(${k({ size: t, sizes: e.spacing })} / 2)`,
    paddingBottom: `calc(${k({ size: t, sizes: e.spacing })} / 2)`,
    textAlign: "center"
  },
  separator: {
    boxSizing: "border-box",
    textAlign: "left",
    width: "100%",
    padding: `calc(${k({ size: t, sizes: e.spacing })} / 1.5) ${k({
      size: t,
      sizes: e.spacing
    })}`
  },
  separatorLabel: {
    color: e.colorScheme === "dark" ? e.colors.dark[3] : e.colors.gray[5]
  }
}));
const im = am;
var sm = Object.defineProperty, Ua = Object.getOwnPropertySymbols, lm = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, Ya = (e, r, t) => r in e ? sm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, fm = (e, r) => {
  for (var t in r || (r = {}))
    lm.call(r, t) && Ya(e, t, r[t]);
  if (Ua)
    for (var t of Ua(r))
      cm.call(r, t) && Ya(e, t, r[t]);
  return e;
};
function al({
  data: e,
  hovered: r,
  classNames: t,
  styles: n,
  isItemSelected: o,
  uuid: a,
  __staticSelector: i,
  onItemHover: s,
  onItemSelect: l,
  itemsRefs: c,
  itemComponent: u,
  size: f,
  nothingFound: p,
  creatable: m,
  createLabel: g,
  unstyled: h,
  variant: _
}) {
  const { classes: v } = im(null, {
    classNames: t,
    styles: n,
    unstyled: h,
    name: i,
    variant: _,
    size: f
  }), y = [], O = [];
  let E = null;
  const S = (x, T) => {
    const I = typeof o == "function" ? o(x.value) : !1;
    return /* @__PURE__ */ w.createElement(u, fm({
      key: x.value,
      className: v.item,
      "data-disabled": x.disabled || void 0,
      "data-hovered": !x.disabled && r === T || void 0,
      "data-selected": !x.disabled && I || void 0,
      selected: I,
      onMouseEnter: () => s(T),
      id: `${a}-${T}`,
      role: "option",
      tabIndex: -1,
      "aria-selected": r === T,
      ref: (N) => {
        c && c.current && (c.current[x.value] = N);
      },
      onMouseDown: x.disabled ? null : (N) => {
        N.preventDefault(), l(x);
      },
      disabled: x.disabled,
      variant: _
    }, x));
  };
  let R = null;
  if (e.forEach((x, T) => {
    x.creatable ? E = T : x.group ? (R !== x.group && (R = x.group, O.push(/* @__PURE__ */ w.createElement("div", {
      className: v.separator,
      key: `__mantine-divider-${T}`
    }, /* @__PURE__ */ w.createElement(io, {
      classNames: { label: v.separatorLabel },
      label: x.group
    })))), O.push(S(x, T))) : y.push(S(x, T));
  }), m) {
    const x = e[E];
    y.push(/* @__PURE__ */ w.createElement("div", {
      key: Os(),
      className: v.item,
      "data-hovered": r === E || void 0,
      onMouseEnter: () => s(E),
      onMouseDown: (T) => {
        T.preventDefault(), l(x);
      },
      tabIndex: -1,
      ref: (T) => {
        c && c.current && (c.current[x.value] = T);
      }
    }, g));
  }
  return O.length > 0 && y.length > 0 && y.unshift(/* @__PURE__ */ w.createElement("div", {
    className: v.separator,
    key: "empty-group-separator"
  }, /* @__PURE__ */ w.createElement(io, null))), O.length > 0 || y.length > 0 ? /* @__PURE__ */ w.createElement(w.Fragment, null, O, y) : /* @__PURE__ */ w.createElement(Nn, {
    size: f,
    unstyled: h,
    className: v.nothingFound
  }, p);
}
al.displayName = "@mantine/core/SelectItems";
var um = Object.defineProperty, tn = Object.getOwnPropertySymbols, il = Object.prototype.hasOwnProperty, sl = Object.prototype.propertyIsEnumerable, Ga = (e, r, t) => r in e ? um(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, dm = (e, r) => {
  for (var t in r || (r = {}))
    il.call(r, t) && Ga(e, t, r[t]);
  if (tn)
    for (var t of tn(r))
      sl.call(r, t) && Ga(e, t, r[t]);
  return e;
}, pm = (e, r) => {
  var t = {};
  for (var n in e)
    il.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && tn)
    for (var n of tn(e))
      r.indexOf(n) < 0 && sl.call(e, n) && (t[n] = e[n]);
  return t;
};
const ll = L((e, r) => {
  var t = e, { label: n, value: o } = t, a = pm(t, ["label", "value"]);
  return /* @__PURE__ */ w.createElement("div", dm({
    ref: r
  }, a), n || o);
});
ll.displayName = "@mantine/core/DefaultItem";
function mm(e, r) {
  typeof e == "function" ? e(r) : e != null && (e.current = r);
}
function cl(...e) {
  return (r) => e.forEach(
    (t) => mm(t, r)
  );
}
function br(...e) {
  return sr(cl(...e), e);
}
const fl = /* @__PURE__ */ L((e, r) => {
  const { children: t, ...n } = e, o = Nr.toArray(t), a = o.find(vm);
  if (a) {
    const i = a.props.children, s = o.map((l) => l === a ? Nr.count(i) > 1 ? Nr.only(null) : /* @__PURE__ */ Mt(i) ? i.props.children : null : l);
    return /* @__PURE__ */ F(so, Z({}, n, {
      ref: r
    }), /* @__PURE__ */ Mt(i) ? /* @__PURE__ */ pt(i, void 0, s) : null);
  }
  return /* @__PURE__ */ F(so, Z({}, n, {
    ref: r
  }), t);
});
fl.displayName = "Slot";
const so = /* @__PURE__ */ L((e, r) => {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ Mt(t) ? /* @__PURE__ */ pt(t, {
    ...hm(n, t.props),
    ref: cl(r, t.ref)
  }) : Nr.count(t) > 1 ? Nr.only(null) : null;
});
so.displayName = "SlotClone";
const gm = ({ children: e }) => /* @__PURE__ */ F(vo, null, e);
function vm(e) {
  return /* @__PURE__ */ Mt(e) && e.type === gm;
}
function hm(e, r) {
  const t = {
    ...r
  };
  for (const n in r) {
    const o = e[n], a = r[n];
    /^on[A-Z]/.test(n) ? o && a ? t[n] = (...s) => {
      a(...s), o(...s);
    } : o && (t[n] = o) : n === "style" ? t[n] = {
      ...o,
      ...a
    } : n === "className" && (t[n] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...t
  };
}
const ym = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], vt = ym.reduce((e, r) => {
  const t = /* @__PURE__ */ L((n, o) => {
    const { asChild: a, ...i } = n, s = a ? fl : r;
    return q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ F(s, Z({}, i, {
      ref: o
    }));
  });
  return t.displayName = `Primitive.${r}`, {
    ...e,
    [r]: t
  };
}, {}), lo = globalThis != null && globalThis.document ? xn : () => {
};
function bm(e, r) {
  return Xi((t, n) => {
    const o = r[t][n];
    return o ?? t;
  }, e);
}
const ht = (e) => {
  const { present: r, children: t } = e, n = _m(r), o = typeof t == "function" ? t({
    present: n.isPresent
  }) : Nr.only(t), a = br(n.ref, o.ref);
  return typeof t == "function" || n.isPresent ? /* @__PURE__ */ pt(o, {
    ref: a
  }) : null;
};
ht.displayName = "Presence";
function _m(e) {
  const [r, t] = B(), n = G({}), o = G(e), a = G("none"), i = e ? "mounted" : "unmounted", [s, l] = bm(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return q(() => {
    const c = St(n.current);
    a.current = s === "mounted" ? c : "none";
  }, [
    s
  ]), lo(() => {
    const c = n.current, u = o.current;
    if (u !== e) {
      const p = a.current, m = St(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    l
  ]), lo(() => {
    if (r) {
      const c = (f) => {
        const m = St(n.current).includes(f.animationName);
        f.target === r && m && Rc(
          () => l("ANIMATION_END")
        );
      }, u = (f) => {
        f.target === r && (a.current = St(n.current));
      };
      return r.addEventListener("animationstart", u), r.addEventListener("animationcancel", c), r.addEventListener("animationend", c), () => {
        r.removeEventListener("animationstart", u), r.removeEventListener("animationcancel", c), r.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [
    r,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: sr((c) => {
      c && (n.current = getComputedStyle(c)), t(c);
    }, [])
  };
}
function St(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function wm(e, r = []) {
  let t = [];
  function n(a, i) {
    const s = /* @__PURE__ */ Dr(i), l = t.length;
    t = [
      ...t,
      i
    ];
    function c(f) {
      const { scope: p, children: m, ...g } = f, h = (p == null ? void 0 : p[e][l]) || s, _ = Vt(
        () => g,
        Object.values(g)
      );
      return /* @__PURE__ */ F(h.Provider, {
        value: _
      }, m);
    }
    function u(f, p) {
      const m = (p == null ? void 0 : p[e][l]) || s, g = Lr(m);
      if (g)
        return g;
      if (i !== void 0)
        return i;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return c.displayName = a + "Provider", [
      c,
      u
    ];
  }
  const o = () => {
    const a = t.map((i) => /* @__PURE__ */ Dr(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return Vt(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: l
          }
        }),
        [
          s,
          l
        ]
      );
    };
  };
  return o.scopeName = e, [
    n,
    Pm(o, ...r)
  ];
}
function Pm(...e) {
  const r = e[0];
  if (e.length === 1)
    return r;
  const t = () => {
    const n = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const i = n.reduce((s, { useScope: l, scopeName: c }) => {
        const f = l(a)[`__scope${c}`];
        return {
          ...s,
          ...f
        };
      }, {});
      return Vt(
        () => ({
          [`__scope${r.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return t.scopeName = r.scopeName, t;
}
function vr(e) {
  const r = G(e);
  return q(() => {
    r.current = e;
  }), Vt(
    () => (...t) => {
      var n;
      return (n = r.current) === null || n === void 0 ? void 0 : n.call(r, ...t);
    },
    []
  );
}
const Om = /* @__PURE__ */ Dr(void 0);
function $m(e) {
  const r = Lr(Om);
  return e || r || "ltr";
}
function Sm(e, [r, t]) {
  return Math.min(t, Math.max(r, e));
}
function hr(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return r == null ? void 0 : r(o);
  };
}
function xm(e, r) {
  return Xi((t, n) => {
    const o = r[t][n];
    return o ?? t;
  }, e);
}
const ul = "ScrollArea", [dl, Oy] = wm(ul), [Em, Te] = dl(ul), Cm = /* @__PURE__ */ L((e, r) => {
  const { __scopeScrollArea: t, type: n = "hover", dir: o, scrollHideDelay: a = 600, ...i } = e, [s, l] = B(null), [c, u] = B(null), [f, p] = B(null), [m, g] = B(null), [h, _] = B(null), [v, y] = B(0), [O, E] = B(0), [S, R] = B(!1), [x, T] = B(!1), I = br(
    r,
    (A) => l(A)
  ), N = $m(o);
  return /* @__PURE__ */ F(Em, {
    scope: t,
    type: n,
    dir: N,
    scrollHideDelay: a,
    scrollArea: s,
    viewport: c,
    onViewportChange: u,
    content: f,
    onContentChange: p,
    scrollbarX: m,
    onScrollbarXChange: g,
    scrollbarXEnabled: S,
    onScrollbarXEnabledChange: R,
    scrollbarY: h,
    onScrollbarYChange: _,
    scrollbarYEnabled: x,
    onScrollbarYEnabledChange: T,
    onCornerWidthChange: y,
    onCornerHeightChange: E
  }, /* @__PURE__ */ F(vt.div, Z({
    dir: N
  }, i, {
    ref: I,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: v + "px",
      ["--radix-scroll-area-corner-height"]: O + "px",
      ...e.style
    }
  })));
}), Rm = "ScrollAreaViewport", Nm = /* @__PURE__ */ L((e, r) => {
  const { __scopeScrollArea: t, children: n, ...o } = e, a = Te(Rm, t), i = G(null), s = br(r, i, a.onViewportChange);
  return /* @__PURE__ */ F(vo, null, /* @__PURE__ */ F("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ F(vt.div, Z({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: s,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ F("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, n)));
}), Ze = "ScrollAreaScrollbar", Tm = /* @__PURE__ */ L((e, r) => {
  const { forceMount: t, ...n } = e, o = Te(Ze, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = o, s = e.orientation === "horizontal";
  return q(() => (s ? a(!0) : i(!0), () => {
    s ? a(!1) : i(!1);
  }), [
    s,
    a,
    i
  ]), o.type === "hover" ? /* @__PURE__ */ F(Im, Z({}, n, {
    ref: r,
    forceMount: t
  })) : o.type === "scroll" ? /* @__PURE__ */ F(Dm, Z({}, n, {
    ref: r,
    forceMount: t
  })) : o.type === "auto" ? /* @__PURE__ */ F(pl, Z({}, n, {
    ref: r,
    forceMount: t
  })) : o.type === "always" ? /* @__PURE__ */ F(Co, Z({}, n, {
    ref: r
  })) : null;
}), Im = /* @__PURE__ */ L((e, r) => {
  const { forceMount: t, ...n } = e, o = Te(Ze, e.__scopeScrollArea), [a, i] = B(!1);
  return q(() => {
    const s = o.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, u = () => {
        l = window.setTimeout(
          () => i(!1),
          o.scrollHideDelay
        );
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", u), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ F(ht, {
    present: t || a
  }, /* @__PURE__ */ F(pl, Z({
    "data-state": a ? "visible" : "hidden"
  }, n, {
    ref: r
  })));
}), Dm = /* @__PURE__ */ L((e, r) => {
  const { forceMount: t, ...n } = e, o = Te(Ze, e.__scopeScrollArea), a = e.orientation === "horizontal", i = In(
    () => l("SCROLL_END"),
    100
  ), [s, l] = xm("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return q(() => {
    if (s === "idle") {
      const c = window.setTimeout(
        () => l("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(c);
    }
  }, [
    s,
    o.scrollHideDelay,
    l
  ]), q(() => {
    const c = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let f = c[u];
      const p = () => {
        const m = c[u];
        f !== m && (l("SCROLL"), i()), f = m;
      };
      return c.addEventListener("scroll", p), () => c.removeEventListener("scroll", p);
    }
  }, [
    o.viewport,
    a,
    l,
    i
  ]), /* @__PURE__ */ F(ht, {
    present: t || s !== "hidden"
  }, /* @__PURE__ */ F(Co, Z({
    "data-state": s === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: r,
    onPointerEnter: hr(
      e.onPointerEnter,
      () => l("POINTER_ENTER")
    ),
    onPointerLeave: hr(
      e.onPointerLeave,
      () => l("POINTER_LEAVE")
    )
  })));
}), pl = /* @__PURE__ */ L((e, r) => {
  const t = Te(Ze, e.__scopeScrollArea), { forceMount: n, ...o } = e, [a, i] = B(!1), s = e.orientation === "horizontal", l = In(() => {
    if (t.viewport) {
      const c = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
      i(s ? c : u);
    }
  }, 10);
  return jr(t.viewport, l), jr(t.content, l), /* @__PURE__ */ F(ht, {
    present: n || a
  }, /* @__PURE__ */ F(Co, Z({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: r
  })));
}), Co = /* @__PURE__ */ L((e, r) => {
  const { orientation: t = "vertical", ...n } = e, o = Te(Ze, e.__scopeScrollArea), a = G(null), i = G(0), [s, l] = B({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), c = hl(s.viewport, s.content), u = {
    ...n,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (p) => a.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function f(p, m) {
    return Fm(p, i.current, s, m);
  }
  return t === "horizontal" ? /* @__PURE__ */ F(Am, Z({}, u, {
    ref: r,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollLeft, m = Xa(p, s, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
    }
  })) : t === "vertical" ? /* @__PURE__ */ F(jm, Z({}, u, {
    ref: r,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const p = o.viewport.scrollTop, m = Xa(p, s);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      o.viewport && (o.viewport.scrollTop = f(p));
    }
  })) : null;
}), Am = /* @__PURE__ */ L((e, r) => {
  const { sizes: t, onSizesChange: n, ...o } = e, a = Te(Ze, e.__scopeScrollArea), [i, s] = B(), l = G(null), c = br(r, l, a.onScrollbarXChange);
  return q(() => {
    l.current && s(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ F(gl, Z({
    "data-orientation": "horizontal"
  }, o, {
    ref: c,
    sizes: t,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: Tn(t) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(p), bl(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && a.viewport && i && n({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: l.current.clientWidth,
          paddingStart: nn(i.paddingLeft),
          paddingEnd: nn(i.paddingRight)
        }
      });
    }
  }));
}), jm = /* @__PURE__ */ L((e, r) => {
  const { sizes: t, onSizesChange: n, ...o } = e, a = Te(Ze, e.__scopeScrollArea), [i, s] = B(), l = G(null), c = br(r, l, a.onScrollbarYChange);
  return q(() => {
    l.current && s(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ F(gl, Z({
    "data-orientation": "vertical"
  }, o, {
    ref: c,
    sizes: t,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: Tn(t) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, f) => {
      if (a.viewport) {
        const p = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(p), bl(p, f) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && a.viewport && i && n({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: l.current.clientHeight,
          paddingStart: nn(i.paddingTop),
          paddingEnd: nn(i.paddingBottom)
        }
      });
    }
  }));
}), [km, ml] = dl(Ze), gl = /* @__PURE__ */ L((e, r) => {
  const { __scopeScrollArea: t, sizes: n, hasThumb: o, onThumbChange: a, onThumbPointerUp: i, onThumbPointerDown: s, onThumbPositionChange: l, onDragScroll: c, onWheelScroll: u, onResize: f, ...p } = e, m = Te(Ze, t), [g, h] = B(null), _ = br(
    r,
    (I) => h(I)
  ), v = G(null), y = G(""), O = m.viewport, E = n.content - n.viewport, S = vr(u), R = vr(l), x = In(f, 10);
  function T(I) {
    if (v.current) {
      const N = I.clientX - v.current.left, A = I.clientY - v.current.top;
      c({
        x: N,
        y: A
      });
    }
  }
  return q(() => {
    const I = (N) => {
      const A = N.target;
      (g == null ? void 0 : g.contains(A)) && S(N, E);
    };
    return document.addEventListener("wheel", I, {
      passive: !1
    }), () => document.removeEventListener("wheel", I, {
      passive: !1
    });
  }, [
    O,
    g,
    E,
    S
  ]), q(R, [
    n,
    R
  ]), jr(g, x), jr(m.content, x), /* @__PURE__ */ F(km, {
    scope: t,
    scrollbar: g,
    hasThumb: o,
    onThumbChange: vr(a),
    onThumbPointerUp: vr(i),
    onThumbPositionChange: R,
    onThumbPointerDown: vr(s)
  }, /* @__PURE__ */ F(vt.div, Z({}, p, {
    ref: _,
    style: {
      position: "absolute",
      ...p.style
    },
    onPointerDown: hr(e.onPointerDown, (I) => {
      I.button === 0 && (I.target.setPointerCapture(I.pointerId), v.current = g.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", T(I));
    }),
    onPointerMove: hr(e.onPointerMove, T),
    onPointerUp: hr(e.onPointerUp, (I) => {
      const N = I.target;
      N.hasPointerCapture(I.pointerId) && N.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, v.current = null;
    })
  })));
}), co = "ScrollAreaThumb", zm = /* @__PURE__ */ L((e, r) => {
  const { forceMount: t, ...n } = e, o = ml(co, e.__scopeScrollArea);
  return /* @__PURE__ */ F(ht, {
    present: t || o.hasThumb
  }, /* @__PURE__ */ F(Lm, Z({
    ref: r
  }, n)));
}), Lm = /* @__PURE__ */ L((e, r) => {
  const { __scopeScrollArea: t, style: n, ...o } = e, a = Te(co, t), i = ml(co, t), { onThumbPositionChange: s } = i, l = br(
    r,
    (f) => i.onThumbChange(f)
  ), c = G(), u = In(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return q(() => {
    const f = a.viewport;
    if (f) {
      const p = () => {
        if (u(), !c.current) {
          const m = Wm(f, s);
          c.current = m, s();
        }
      };
      return s(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
    }
  }, [
    a.viewport,
    u,
    s
  ]), /* @__PURE__ */ F(vt.div, Z({
    "data-state": i.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: l,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: hr(e.onPointerDownCapture, (f) => {
      const m = f.target.getBoundingClientRect(), g = f.clientX - m.left, h = f.clientY - m.top;
      i.onThumbPointerDown({
        x: g,
        y: h
      });
    }),
    onPointerUp: hr(e.onPointerUp, i.onThumbPointerUp)
  }));
}), vl = "ScrollAreaCorner", Mm = /* @__PURE__ */ L((e, r) => {
  const t = Te(vl, e.__scopeScrollArea), n = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && n ? /* @__PURE__ */ F(Vm, Z({}, e, {
    ref: r
  })) : null;
}), Vm = /* @__PURE__ */ L((e, r) => {
  const { __scopeScrollArea: t, ...n } = e, o = Te(vl, t), [a, i] = B(0), [s, l] = B(0), c = !!(a && s);
  return jr(o.scrollbarX, () => {
    var u;
    const f = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(f), l(f);
  }), jr(o.scrollbarY, () => {
    var u;
    const f = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(f), i(f);
  }), c ? /* @__PURE__ */ F(vt.div, Z({}, n, {
    ref: r,
    style: {
      width: a,
      height: s,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function nn(e) {
  return e ? parseInt(e, 10) : 0;
}
function hl(e, r) {
  const t = e / r;
  return isNaN(t) ? 0 : t;
}
function Tn(e) {
  const r = hl(e.viewport, e.content), t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - t) * r;
  return Math.max(n, 18);
}
function Fm(e, r, t, n = "ltr") {
  const o = Tn(t), a = o / 2, i = r || a, s = o - i, l = t.scrollbar.paddingStart + i, c = t.scrollbar.size - t.scrollbar.paddingEnd - s, u = t.content - t.viewport, f = n === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return yl([
    l,
    c
  ], f)(e);
}
function Xa(e, r, t = "ltr") {
  const n = Tn(r), o = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, a = r.scrollbar.size - o, i = r.content - r.viewport, s = a - n, l = t === "ltr" ? [
    0,
    i
  ] : [
    i * -1,
    0
  ], c = Sm(e, l);
  return yl([
    0,
    i
  ], [
    0,
    s
  ])(c);
}
function yl(e, r) {
  return (t) => {
    if (e[0] === e[1] || r[0] === r[1])
      return r[0];
    const n = (r[1] - r[0]) / (e[1] - e[0]);
    return r[0] + n * (t - e[0]);
  };
}
function bl(e, r) {
  return e > 0 && e < r;
}
const Wm = (e, r = () => {
}) => {
  let t = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, n = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, i = t.left !== a.left, s = t.top !== a.top;
    (i || s) && r(), t = a, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function In(e, r) {
  const t = vr(e), n = G(0);
  return q(
    () => () => window.clearTimeout(n.current),
    []
  ), sr(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(t, r);
  }, [
    t,
    r
  ]);
}
function jr(e, r) {
  const t = vr(r);
  lo(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(t);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [
    e,
    t
  ]);
}
const Bm = Cm, Hm = Nm, qa = Tm, Ka = zm, Um = Mm;
var Ym = pe((e, { scrollbarSize: r, offsetScrollbars: t, scrollbarHovered: n, hidden: o }) => ({
  root: {
    overflow: "hidden"
  },
  viewport: {
    width: "100%",
    height: "100%",
    paddingRight: t ? P(r) : void 0,
    paddingBottom: t ? P(r) : void 0
  },
  scrollbar: {
    display: o ? "none" : "flex",
    userSelect: "none",
    touchAction: "none",
    boxSizing: "border-box",
    padding: `calc(${P(r)}  / 5)`,
    transition: "background-color 150ms ease, opacity 150ms ease",
    "&:hover": {
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[8] : e.colors.gray[0],
      [`& .${sa("thumb")}`]: {
        backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.white, 0.5) : e.fn.rgba(e.black, 0.5)
      }
    },
    '&[data-orientation="vertical"]': {
      width: P(r)
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: P(r)
    },
    '&[data-state="hidden"]': {
      display: "none",
      opacity: 0
    }
  },
  thumb: {
    ref: sa("thumb"),
    flex: 1,
    backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.white, 0.4) : e.fn.rgba(e.black, 0.4),
    borderRadius: P(r),
    position: "relative",
    transition: "background-color 150ms ease",
    display: o ? "none" : void 0,
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      minWidth: P(44),
      minHeight: P(44)
    }
  },
  corner: {
    backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[0],
    transition: "opacity 150ms ease",
    opacity: n ? 1 : 0,
    display: o ? "none" : void 0
  }
}));
const Gm = Ym;
var Xm = Object.defineProperty, qm = Object.defineProperties, Km = Object.getOwnPropertyDescriptors, on = Object.getOwnPropertySymbols, _l = Object.prototype.hasOwnProperty, wl = Object.prototype.propertyIsEnumerable, Ja = (e, r, t) => r in e ? Xm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, fo = (e, r) => {
  for (var t in r || (r = {}))
    _l.call(r, t) && Ja(e, t, r[t]);
  if (on)
    for (var t of on(r))
      wl.call(r, t) && Ja(e, t, r[t]);
  return e;
}, Pl = (e, r) => qm(e, Km(r)), Ol = (e, r) => {
  var t = {};
  for (var n in e)
    _l.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && on)
    for (var n of on(e))
      r.indexOf(n) < 0 && wl.call(e, n) && (t[n] = e[n]);
  return t;
};
const $l = {
  scrollbarSize: 12,
  scrollHideDelay: 1e3,
  type: "hover",
  offsetScrollbars: !1
}, Dn = L((e, r) => {
  const t = re("ScrollArea", $l, e), {
    children: n,
    className: o,
    classNames: a,
    styles: i,
    scrollbarSize: s,
    scrollHideDelay: l,
    type: c,
    dir: u,
    offsetScrollbars: f,
    viewportRef: p,
    onScrollPositionChange: m,
    unstyled: g,
    variant: h,
    viewportProps: _
  } = t, v = Ol(t, [
    "children",
    "className",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "variant",
    "viewportProps"
  ]), [y, O] = B(!1), E = Ne(), { classes: S, cx: R } = Gm({ scrollbarSize: s, offsetScrollbars: f, scrollbarHovered: y, hidden: c === "never" }, { name: "ScrollArea", classNames: a, styles: i, unstyled: g, variant: h });
  return /* @__PURE__ */ w.createElement(Bm, {
    type: c === "never" ? "always" : c,
    scrollHideDelay: l,
    dir: u || E.dir,
    ref: r,
    asChild: !0
  }, /* @__PURE__ */ w.createElement(ge, fo({
    className: R(S.root, o)
  }, v), /* @__PURE__ */ w.createElement(Hm, Pl(fo({}, _), {
    className: S.viewport,
    ref: p,
    onScroll: typeof m == "function" ? ({ currentTarget: x }) => m({
      x: x.scrollLeft,
      y: x.scrollTop
    }) : void 0
  }), n), /* @__PURE__ */ w.createElement(qa, {
    orientation: "horizontal",
    className: S.scrollbar,
    forceMount: !0,
    onMouseEnter: () => O(!0),
    onMouseLeave: () => O(!1)
  }, /* @__PURE__ */ w.createElement(Ka, {
    className: S.thumb
  })), /* @__PURE__ */ w.createElement(qa, {
    orientation: "vertical",
    className: S.scrollbar,
    forceMount: !0,
    onMouseEnter: () => O(!0),
    onMouseLeave: () => O(!1)
  }, /* @__PURE__ */ w.createElement(Ka, {
    className: S.thumb
  })), /* @__PURE__ */ w.createElement(Um, {
    className: S.corner
  })));
}), Sl = L((e, r) => {
  const t = re("ScrollAreaAutosize", $l, e), {
    children: n,
    classNames: o,
    styles: a,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: l,
    dir: c,
    offsetScrollbars: u,
    viewportRef: f,
    onScrollPositionChange: p,
    unstyled: m,
    sx: g,
    variant: h,
    viewportProps: _
  } = t, v = Ol(t, [
    "children",
    "classNames",
    "styles",
    "scrollbarSize",
    "scrollHideDelay",
    "type",
    "dir",
    "offsetScrollbars",
    "viewportRef",
    "onScrollPositionChange",
    "unstyled",
    "sx",
    "variant",
    "viewportProps"
  ]);
  return /* @__PURE__ */ w.createElement(ge, Pl(fo({}, v), {
    ref: r,
    sx: [{ display: "flex" }, ...Ki(g)]
  }), /* @__PURE__ */ w.createElement(ge, {
    sx: { display: "flex", flexDirection: "column", flex: 1 }
  }, /* @__PURE__ */ w.createElement(Dn, {
    classNames: o,
    styles: a,
    scrollHideDelay: s,
    scrollbarSize: i,
    type: l,
    dir: c,
    offsetScrollbars: u,
    viewportRef: f,
    onScrollPositionChange: p,
    unstyled: m,
    variant: h,
    viewportProps: _
  }, n)));
});
Sl.displayName = "@mantine/core/ScrollAreaAutosize";
Dn.displayName = "@mantine/core/ScrollArea";
Dn.Autosize = Sl;
const Jm = Dn;
var Zm = Object.defineProperty, Qm = Object.defineProperties, eg = Object.getOwnPropertyDescriptors, an = Object.getOwnPropertySymbols, xl = Object.prototype.hasOwnProperty, El = Object.prototype.propertyIsEnumerable, Za = (e, r, t) => r in e ? Zm(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Qa = (e, r) => {
  for (var t in r || (r = {}))
    xl.call(r, t) && Za(e, t, r[t]);
  if (an)
    for (var t of an(r))
      El.call(r, t) && Za(e, t, r[t]);
  return e;
}, rg = (e, r) => Qm(e, eg(r)), tg = (e, r) => {
  var t = {};
  for (var n in e)
    xl.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && an)
    for (var n of an(e))
      r.indexOf(n) < 0 && El.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ro = L((e, r) => {
  var t = e, { style: n } = t, o = tg(t, ["style"]);
  return /* @__PURE__ */ w.createElement(Jm, rg(Qa({}, o), {
    style: Qa({ width: "100%" }, n),
    viewportProps: { tabIndex: -1 },
    viewportRef: r
  }), o.children);
});
Ro.displayName = "@mantine/core/SelectScrollArea";
var ng = pe(() => ({
  dropdown: {},
  itemsWrapper: {
    padding: P(4),
    display: "flex",
    width: "100%",
    boxSizing: "border-box"
  }
}));
const og = ng;
function Vr(e) {
  return e.split("-")[1];
}
function No(e) {
  return e === "y" ? "height" : "width";
}
function je(e) {
  return e.split("-")[0];
}
function fr(e) {
  return ["top", "bottom"].includes(je(e)) ? "x" : "y";
}
function ei(e, r, t) {
  let { reference: n, floating: o } = e;
  const a = n.x + n.width / 2 - o.width / 2, i = n.y + n.height / 2 - o.height / 2, s = fr(r), l = No(s), c = n[l] / 2 - o[l] / 2, u = s === "x";
  let f;
  switch (je(r)) {
    case "top":
      f = { x: a, y: n.y - o.height };
      break;
    case "bottom":
      f = { x: a, y: n.y + n.height };
      break;
    case "right":
      f = { x: n.x + n.width, y: i };
      break;
    case "left":
      f = { x: n.x - o.width, y: i };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  switch (Vr(r)) {
    case "start":
      f[s] -= c * (t && u ? -1 : 1);
      break;
    case "end":
      f[s] += c * (t && u ? -1 : 1);
  }
  return f;
}
const ag = async (e, r, t) => {
  const { placement: n = "bottom", strategy: o = "absolute", middleware: a = [], platform: i } = t, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(r));
  let c = await i.getElementRects({ reference: e, floating: r, strategy: o }), { x: u, y: f } = ei(c, n, l), p = n, m = {}, g = 0;
  for (let h = 0; h < s.length; h++) {
    const { name: _, fn: v } = s[h], { x: y, y: O, data: E, reset: S } = await v({ x: u, y: f, initialPlacement: n, placement: p, strategy: o, middlewareData: m, rects: c, platform: i, elements: { reference: e, floating: r } });
    u = y ?? u, f = O ?? f, m = { ...m, [_]: { ...m[_], ...E } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (c = S.rects === !0 ? await i.getElementRects({ reference: e, floating: r, strategy: o }) : S.rects), { x: u, y: f } = ei(c, p, l)), h = -1);
  }
  return { x: u, y: f, placement: p, strategy: o, middlewareData: m };
};
function To(e) {
  return typeof e != "number" ? function(r) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...r };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function kr(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Io(e, r) {
  var t;
  r === void 0 && (r = {});
  const { x: n, y: o, platform: a, rects: i, elements: s, strategy: l } = e, { boundary: c = "clippingAncestors", rootBoundary: u = "viewport", elementContext: f = "floating", altBoundary: p = !1, padding: m = 0 } = r, g = To(m), h = s[p ? f === "floating" ? "reference" : "floating" : f], _ = kr(await a.getClippingRect({ element: (t = await (a.isElement == null ? void 0 : a.isElement(h))) == null || t ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: c, rootBoundary: u, strategy: l })), v = f === "floating" ? { ...i.floating, x: n, y: o } : i.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), O = await (a.isElement == null ? void 0 : a.isElement(y)) && await (a.getScale == null ? void 0 : a.getScale(y)) || { x: 1, y: 1 }, E = kr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: y, strategy: l }) : v);
  return { top: (_.top - E.top + g.top) / O.y, bottom: (E.bottom - _.bottom + g.bottom) / O.y, left: (_.left - E.left + g.left) / O.x, right: (E.right - _.right + g.right) / O.x };
}
const zr = Math.min, Be = Math.max;
function uo(e, r, t) {
  return Be(e, zr(r, t));
}
const ri = (e) => ({ name: "arrow", options: e, async fn(r) {
  const { element: t, padding: n = 0 } = e || {}, { x: o, y: a, placement: i, rects: s, platform: l, elements: c } = r;
  if (t == null)
    return {};
  const u = To(n), f = { x: o, y: a }, p = fr(i), m = No(p), g = await l.getDimensions(t), h = p === "y", _ = h ? "top" : "left", v = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", O = s.reference[m] + s.reference[p] - f[p] - s.floating[m], E = f[p] - s.reference[p], S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(t));
  let R = S ? S[y] : 0;
  R && await (l.isElement == null ? void 0 : l.isElement(S)) || (R = c.floating[y] || s.floating[m]);
  const x = O / 2 - E / 2, T = u[_], I = R - g[m] - u[v], N = R / 2 - g[m] / 2 + x, A = uo(T, N, I), z = Vr(i) != null && N != A && s.reference[m] / 2 - (N < T ? u[_] : u[v]) - g[m] / 2 < 0;
  return { [p]: f[p] - (z ? N < T ? T - N : I - N : 0), data: { [p]: A, centerOffset: N - A } };
} }), ig = ["top", "right", "bottom", "left"];
ig.reduce((e, r) => e.concat(r, r + "-start", r + "-end"), []);
const sg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function sn(e) {
  return e.replace(/left|right|bottom|top/g, (r) => sg[r]);
}
function lg(e, r, t) {
  t === void 0 && (t = !1);
  const n = Vr(e), o = fr(e), a = No(o);
  let i = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return r.reference[a] > r.floating[a] && (i = sn(i)), { main: i, cross: sn(i) };
}
const cg = { start: "end", end: "start" };
function Xn(e) {
  return e.replace(/start|end/g, (r) => cg[r]);
}
const fg = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(r) {
    var t;
    const { placement: n, middlewareData: o, rects: a, initialPlacement: i, platform: s, elements: l } = r, { mainAxis: c = !0, crossAxis: u = !0, fallbackPlacements: f, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = !0, ...h } = e, _ = je(n), v = je(i) === i, y = await (s.isRTL == null ? void 0 : s.isRTL(l.floating)), O = f || (v || !g ? [sn(i)] : function(A) {
      const z = sn(A);
      return [Xn(A), z, Xn(z)];
    }(i));
    f || m === "none" || O.push(...function(A, z, H, K) {
      const X = Vr(A);
      let J = function(ce, fe, Ee) {
        const ve = ["left", "right"], _e = ["right", "left"], Ce = ["top", "bottom"], Le = ["bottom", "top"];
        switch (ce) {
          case "top":
          case "bottom":
            return Ee ? fe ? _e : ve : fe ? ve : _e;
          case "left":
          case "right":
            return fe ? Ce : Le;
          default:
            return [];
        }
      }(je(A), H === "start", K);
      return X && (J = J.map((ce) => ce + "-" + X), z && (J = J.concat(J.map(Xn)))), J;
    }(i, g, m, y));
    const E = [i, ...O], S = await Io(r, h), R = [];
    let x = ((t = o.flip) == null ? void 0 : t.overflows) || [];
    if (c && R.push(S[_]), u) {
      const { main: A, cross: z } = lg(n, a, y);
      R.push(S[A], S[z]);
    }
    if (x = [...x, { placement: n, overflows: R }], !R.every((A) => A <= 0)) {
      var T, I;
      const A = (((T = o.flip) == null ? void 0 : T.index) || 0) + 1, z = E[A];
      if (z)
        return { data: { index: A, overflows: x }, reset: { placement: z } };
      let H = (I = x.filter((K) => K.overflows[0] <= 0).sort((K, X) => K.overflows[1] - X.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!H)
        switch (p) {
          case "bestFit": {
            var N;
            const K = (N = x.map((X) => [X.placement, X.overflows.filter((J) => J > 0).reduce((J, ce) => J + ce, 0)]).sort((X, J) => X[1] - J[1])[0]) == null ? void 0 : N[0];
            K && (H = K);
            break;
          }
          case "initialPlacement":
            H = i;
        }
      if (n !== H)
        return { reset: { placement: H } };
    }
    return {};
  } };
};
function ti(e) {
  const r = zr(...e.map((n) => n.left)), t = zr(...e.map((n) => n.top));
  return { x: r, y: t, width: Be(...e.map((n) => n.right)) - r, height: Be(...e.map((n) => n.bottom)) - t };
}
const ug = function(e) {
  return e === void 0 && (e = {}), { name: "inline", options: e, async fn(r) {
    const { placement: t, elements: n, rects: o, platform: a, strategy: i } = r, { padding: s = 2, x: l, y: c } = e, u = Array.from(await (a.getClientRects == null ? void 0 : a.getClientRects(n.reference)) || []), f = function(h) {
      const _ = h.slice().sort((O, E) => O.y - E.y), v = [];
      let y = null;
      for (let O = 0; O < _.length; O++) {
        const E = _[O];
        !y || E.y - y.y > y.height / 2 ? v.push([E]) : v[v.length - 1].push(E), y = E;
      }
      return v.map((O) => kr(ti(O)));
    }(u), p = kr(ti(u)), m = To(s), g = await a.getElementRects({ reference: { getBoundingClientRect: function() {
      if (f.length === 2 && f[0].left > f[1].right && l != null && c != null)
        return f.find((h) => l > h.left - m.left && l < h.right + m.right && c > h.top - m.top && c < h.bottom + m.bottom) || p;
      if (f.length >= 2) {
        if (fr(t) === "x") {
          const S = f[0], R = f[f.length - 1], x = je(t) === "top", T = S.top, I = R.bottom, N = x ? S.left : R.left, A = x ? S.right : R.right;
          return { top: T, bottom: I, left: N, right: A, width: A - N, height: I - T, x: N, y: T };
        }
        const h = je(t) === "left", _ = Be(...f.map((S) => S.right)), v = zr(...f.map((S) => S.left)), y = f.filter((S) => h ? S.left === v : S.right === _), O = y[0].top, E = y[y.length - 1].bottom;
        return { top: O, bottom: E, left: v, right: _, width: _ - v, height: E - O, x: v, y: O };
      }
      return p;
    } }, floating: n.floating, strategy: i });
    return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? { reset: { rects: g } } : {};
  } };
}, dg = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(r) {
    const { x: t, y: n } = r, o = await async function(a, i) {
      const { placement: s, platform: l, elements: c } = a, u = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), f = je(s), p = Vr(s), m = fr(s) === "x", g = ["left", "top"].includes(f) ? -1 : 1, h = u && m ? -1 : 1, _ = typeof i == "function" ? i(a) : i;
      let { mainAxis: v, crossAxis: y, alignmentAxis: O } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return p && typeof O == "number" && (y = p === "end" ? -1 * O : O), m ? { x: y * h, y: v * g } : { x: v * g, y: y * h };
    }(r, e);
    return { x: t + o.x, y: n + o.y, data: o };
  } };
};
function Cl(e) {
  return e === "x" ? "y" : "x";
}
const pg = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(r) {
    const { x: t, y: n, placement: o } = r, { mainAxis: a = !0, crossAxis: i = !1, limiter: s = { fn: (_) => {
      let { x: v, y } = _;
      return { x: v, y };
    } }, ...l } = e, c = { x: t, y: n }, u = await Io(r, l), f = fr(je(o)), p = Cl(f);
    let m = c[f], g = c[p];
    if (a) {
      const _ = f === "y" ? "bottom" : "right";
      m = uo(m + u[f === "y" ? "top" : "left"], m, m - u[_]);
    }
    if (i) {
      const _ = p === "y" ? "bottom" : "right";
      g = uo(g + u[p === "y" ? "top" : "left"], g, g - u[_]);
    }
    const h = s.fn({ ...r, [f]: m, [p]: g });
    return { ...h, data: { x: h.x - t, y: h.y - n } };
  } };
}, mg = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(r) {
    const { x: t, y: n, placement: o, rects: a, middlewareData: i } = r, { offset: s = 0, mainAxis: l = !0, crossAxis: c = !0 } = e, u = { x: t, y: n }, f = fr(o), p = Cl(f);
    let m = u[f], g = u[p];
    const h = typeof s == "function" ? s(r) : s, _ = typeof h == "number" ? { mainAxis: h, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h };
    if (l) {
      const O = f === "y" ? "height" : "width", E = a.reference[f] - a.floating[O] + _.mainAxis, S = a.reference[f] + a.reference[O] - _.mainAxis;
      m < E ? m = E : m > S && (m = S);
    }
    if (c) {
      var v, y;
      const O = f === "y" ? "width" : "height", E = ["top", "left"].includes(je(o)), S = a.reference[p] - a.floating[O] + (E && ((v = i.offset) == null ? void 0 : v[p]) || 0) + (E ? 0 : _.crossAxis), R = a.reference[p] + a.reference[O] + (E ? 0 : ((y = i.offset) == null ? void 0 : y[p]) || 0) - (E ? _.crossAxis : 0);
      g < S ? g = S : g > R && (g = R);
    }
    return { [f]: m, [p]: g };
  } };
}, gg = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(r) {
    const { placement: t, rects: n, platform: o, elements: a } = r, { apply: i = () => {
    }, ...s } = e, l = await Io(r, s), c = je(t), u = Vr(t), f = fr(t) === "x", { width: p, height: m } = n.floating;
    let g, h;
    c === "top" || c === "bottom" ? (g = c, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = c, g = u === "end" ? "top" : "bottom");
    const _ = m - l[g], v = p - l[h];
    let y = _, O = v;
    if (f ? O = zr(p - l.right - l.left, v) : y = zr(m - l.bottom - l.top, _), !r.middlewareData.shift && !u) {
      const S = Be(l.left, 0), R = Be(l.right, 0), x = Be(l.top, 0), T = Be(l.bottom, 0);
      f ? O = p - 2 * (S !== 0 || R !== 0 ? S + R : Be(l.left, l.right)) : y = m - 2 * (x !== 0 || T !== 0 ? x + T : Be(l.top, l.bottom));
    }
    await i({ ...r, availableWidth: O, availableHeight: y });
    const E = await o.getDimensions(a.floating);
    return p !== E.width || m !== E.height ? { reset: { rects: !0 } } : {};
  } };
};
function Se(e) {
  var r;
  return ((r = e.ownerDocument) == null ? void 0 : r.defaultView) || window;
}
function Ue(e) {
  return Se(e).getComputedStyle(e);
}
function Rl(e) {
  return e instanceof Se(e).Node;
}
function cr(e) {
  return Rl(e) ? (e.nodeName || "").toLowerCase() : "";
}
let xt;
function Nl() {
  if (xt)
    return xt;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (xt = e.brands.map((r) => r.brand + "/" + r.version).join(" "), xt) : navigator.userAgent;
}
function ze(e) {
  return e instanceof Se(e).HTMLElement;
}
function ke(e) {
  return e instanceof Se(e).Element;
}
function ni(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Se(e).ShadowRoot || e instanceof ShadowRoot;
}
function An(e) {
  const { overflow: r, overflowX: t, overflowY: n, display: o } = Ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(r + n + t) && !["inline", "contents"].includes(o);
}
function vg(e) {
  return ["table", "td", "th"].includes(cr(e));
}
function po(e) {
  const r = /firefox/i.test(Nl()), t = Ue(e), n = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!n && n !== "none" || r && t.willChange === "filter" || r && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((o) => t.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const a = t.contain;
    return a != null && a.includes(o);
  });
}
function mo() {
  return /^((?!chrome|android).)*safari/i.test(Nl());
}
function Do(e) {
  return ["html", "body", "#document"].includes(cr(e));
}
const oi = Math.min, it = Math.max, ln = Math.round;
function Tl(e) {
  const r = Ue(e);
  let t = parseFloat(r.width), n = parseFloat(r.height);
  const o = ze(e), a = o ? e.offsetWidth : t, i = o ? e.offsetHeight : n, s = ln(t) !== a || ln(n) !== i;
  return s && (t = a, n = i), { width: t, height: n, fallback: s };
}
function Il(e) {
  return ke(e) ? e : e.contextElement;
}
const Dl = { x: 1, y: 1 };
function Ir(e) {
  const r = Il(e);
  if (!ze(r))
    return Dl;
  const t = r.getBoundingClientRect(), { width: n, height: o, fallback: a } = Tl(r);
  let i = (a ? ln(t.width) : t.width) / n, s = (a ? ln(t.height) : t.height) / o;
  return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), { x: i, y: s };
}
function yr(e, r, t, n) {
  var o, a;
  r === void 0 && (r = !1), t === void 0 && (t = !1);
  const i = e.getBoundingClientRect(), s = Il(e);
  let l = Dl;
  r && (n ? ke(n) && (l = Ir(n)) : l = Ir(e));
  const c = s ? Se(s) : window, u = mo() && t;
  let f = (i.left + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / l.x, p = (i.top + (u && ((a = c.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / l.y, m = i.width / l.x, g = i.height / l.y;
  if (s) {
    const h = Se(s), _ = n && ke(n) ? Se(n) : n;
    let v = h.frameElement;
    for (; v && n && _ !== h; ) {
      const y = Ir(v), O = v.getBoundingClientRect(), E = getComputedStyle(v);
      O.x += (v.clientLeft + parseFloat(E.paddingLeft)) * y.x, O.y += (v.clientTop + parseFloat(E.paddingTop)) * y.y, f *= y.x, p *= y.y, m *= y.x, g *= y.y, f += O.x, p += O.y, v = Se(v).frameElement;
    }
  }
  return kr({ width: m, height: g, x: f, y: p });
}
function ir(e) {
  return ((Rl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function jn(e) {
  return ke(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Al(e) {
  return yr(ir(e)).left + jn(e).scrollLeft;
}
function dt(e) {
  if (cr(e) === "html")
    return e;
  const r = e.assignedSlot || e.parentNode || ni(e) && e.host || ir(e);
  return ni(r) ? r.host : r;
}
function jl(e) {
  const r = dt(e);
  return Do(r) ? r.ownerDocument.body : ze(r) && An(r) ? r : jl(r);
}
function st(e, r) {
  var t;
  r === void 0 && (r = []);
  const n = jl(e), o = n === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Se(n);
  return o ? r.concat(a, a.visualViewport || [], An(n) ? n : []) : r.concat(n, st(n));
}
function ai(e, r, t) {
  let n;
  if (r === "viewport")
    n = function(i, s) {
      const l = Se(i), c = ir(i), u = l.visualViewport;
      let f = c.clientWidth, p = c.clientHeight, m = 0, g = 0;
      if (u) {
        f = u.width, p = u.height;
        const h = mo();
        (!h || h && s === "fixed") && (m = u.offsetLeft, g = u.offsetTop);
      }
      return { width: f, height: p, x: m, y: g };
    }(e, t);
  else if (r === "document")
    n = function(i) {
      const s = ir(i), l = jn(i), c = i.ownerDocument.body, u = it(s.scrollWidth, s.clientWidth, c.scrollWidth, c.clientWidth), f = it(s.scrollHeight, s.clientHeight, c.scrollHeight, c.clientHeight);
      let p = -l.scrollLeft + Al(i);
      const m = -l.scrollTop;
      return Ue(c).direction === "rtl" && (p += it(s.clientWidth, c.clientWidth) - u), { width: u, height: f, x: p, y: m };
    }(ir(e));
  else if (ke(r))
    n = function(i, s) {
      const l = yr(i, !0, s === "fixed"), c = l.top + i.clientTop, u = l.left + i.clientLeft, f = ze(i) ? Ir(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * f.x, height: i.clientHeight * f.y, x: u * f.x, y: c * f.y };
    }(r, t);
  else {
    const i = { ...r };
    if (mo()) {
      var o, a;
      const s = Se(e);
      i.x -= ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0, i.y -= ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0;
    }
    n = i;
  }
  return kr(n);
}
function ii(e, r) {
  return ze(e) && Ue(e).position !== "fixed" ? r ? r(e) : e.offsetParent : null;
}
function si(e, r) {
  const t = Se(e);
  if (!ze(e))
    return t;
  let n = ii(e, r);
  for (; n && vg(n) && Ue(n).position === "static"; )
    n = ii(n, r);
  return n && (cr(n) === "html" || cr(n) === "body" && Ue(n).position === "static" && !po(n)) ? t : n || function(o) {
    let a = dt(o);
    for (; ze(a) && !Do(a); ) {
      if (po(a))
        return a;
      a = dt(a);
    }
    return null;
  }(e) || t;
}
function hg(e, r, t) {
  const n = ze(r), o = ir(r), a = yr(e, !0, t === "fixed", r);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && t !== "fixed")
    if ((cr(r) !== "body" || An(o)) && (i = jn(r)), ze(r)) {
      const l = yr(r, !0);
      s.x = l.x + r.clientLeft, s.y = l.y + r.clientTop;
    } else
      o && (s.x = Al(o));
  return { x: a.left + i.scrollLeft - s.x, y: a.top + i.scrollTop - s.y, width: a.width, height: a.height };
}
const yg = { getClippingRect: function(e) {
  let { element: r, boundary: t, rootBoundary: n, strategy: o } = e;
  const a = t === "clippingAncestors" ? function(c, u) {
    const f = u.get(c);
    if (f)
      return f;
    let p = st(c).filter((_) => ke(_) && cr(_) !== "body"), m = null;
    const g = Ue(c).position === "fixed";
    let h = g ? dt(c) : c;
    for (; ke(h) && !Do(h); ) {
      const _ = Ue(h), v = po(h);
      _.position === "fixed" ? m = null : (g ? v || m : v || _.position !== "static" || !m || !["absolute", "fixed"].includes(m.position)) ? m = _ : p = p.filter((y) => y !== h), h = dt(h);
    }
    return u.set(c, p), p;
  }(r, this._c) : [].concat(t), i = [...a, n], s = i[0], l = i.reduce((c, u) => {
    const f = ai(r, u, o);
    return c.top = it(f.top, c.top), c.right = oi(f.right, c.right), c.bottom = oi(f.bottom, c.bottom), c.left = it(f.left, c.left), c;
  }, ai(r, s, o));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: r, offsetParent: t, strategy: n } = e;
  const o = ze(t), a = ir(t);
  if (t === a)
    return r;
  let i = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((o || !o && n !== "fixed") && ((cr(t) !== "body" || An(a)) && (i = jn(t)), ze(t))) {
    const c = yr(t);
    s = Ir(t), l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
  }
  return { width: r.width * s.x, height: r.height * s.y, x: r.x * s.x - i.scrollLeft * s.x + l.x, y: r.y * s.y - i.scrollTop * s.y + l.y };
}, isElement: ke, getDimensions: function(e) {
  return Tl(e);
}, getOffsetParent: si, getDocumentElement: ir, getScale: Ir, async getElementRects(e) {
  let { reference: r, floating: t, strategy: n } = e;
  const o = this.getOffsetParent || si, a = this.getDimensions;
  return { reference: hg(r, await o(t), n), floating: { x: 0, y: 0, ...await a(t) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ue(e).direction === "rtl" };
function bg(e, r, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: o = !0, ancestorResize: a = !0, elementResize: i = !0, animationFrame: s = !1 } = n, l = o && !s, c = l || a ? [...ke(e) ? st(e) : e.contextElement ? st(e.contextElement) : [], ...st(r)] : [];
  c.forEach((m) => {
    l && m.addEventListener("scroll", t, { passive: !0 }), a && m.addEventListener("resize", t);
  });
  let u, f = null;
  i && (f = new ResizeObserver(() => {
    t();
  }), ke(e) && !s && f.observe(e), ke(e) || !e.contextElement || s || f.observe(e.contextElement), f.observe(r));
  let p = s ? yr(e) : null;
  return s && function m() {
    const g = yr(e);
    !p || g.x === p.x && g.y === p.y && g.width === p.width && g.height === p.height || t(), p = g, u = requestAnimationFrame(m);
  }(), t(), () => {
    var m;
    c.forEach((g) => {
      l && g.removeEventListener("scroll", t), a && g.removeEventListener("resize", t);
    }), (m = f) == null || m.disconnect(), f = null, s && cancelAnimationFrame(u);
  };
}
const _g = (e, r, t) => {
  const n = /* @__PURE__ */ new Map(), o = { platform: yg, ...t }, a = { ...o.platform, _c: n };
  return ag(e, r, { ...o, platform: a });
}, wg = (e) => {
  const {
    element: r,
    padding: t
  } = e;
  function n(o) {
    return Object.prototype.hasOwnProperty.call(o, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(o) {
      return n(r) ? r.current != null ? ri({
        element: r.current,
        padding: t
      }).fn(o) : {} : r ? ri({
        element: r,
        padding: t
      }).fn(o) : {};
    }
  };
};
var kt = typeof document < "u" ? xn : q;
function cn(e, r) {
  if (e === r)
    return !0;
  if (typeof e != typeof r)
    return !1;
  if (typeof e == "function" && e.toString() === r.toString())
    return !0;
  let t, n, o;
  if (e && r && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t != r.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!cn(e[n], r[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), t = o.length, t !== Object.keys(r).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      const a = o[n];
      if (!(a === "_owner" && e.$$typeof) && !cn(e[a], r[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
}
function li(e) {
  const r = Y.useRef(e);
  return kt(() => {
    r.current = e;
  }), r;
}
function Pg(e) {
  e === void 0 && (e = {});
  const {
    placement: r = "bottom",
    strategy: t = "absolute",
    middleware: n = [],
    platform: o,
    whileElementsMounted: a,
    open: i
  } = e, [s, l] = Y.useState({
    x: null,
    y: null,
    strategy: t,
    placement: r,
    middlewareData: {},
    isPositioned: !1
  }), [c, u] = Y.useState(n);
  cn(c, n) || u(n);
  const f = Y.useRef(null), p = Y.useRef(null), m = Y.useRef(s), g = li(a), h = li(o), [_, v] = Y.useState(null), [y, O] = Y.useState(null), E = Y.useCallback((N) => {
    f.current !== N && (f.current = N, v(N));
  }, []), S = Y.useCallback((N) => {
    p.current !== N && (p.current = N, O(N));
  }, []), R = Y.useCallback(() => {
    if (!f.current || !p.current)
      return;
    const N = {
      placement: r,
      strategy: t,
      middleware: c
    };
    h.current && (N.platform = h.current), _g(f.current, p.current, N).then((A) => {
      const z = {
        ...A,
        isPositioned: !0
      };
      x.current && !cn(m.current, z) && (m.current = z, Ec.flushSync(() => {
        l(z);
      }));
    });
  }, [c, r, t, h]);
  kt(() => {
    i === !1 && m.current.isPositioned && (m.current.isPositioned = !1, l((N) => ({
      ...N,
      isPositioned: !1
    })));
  }, [i]);
  const x = Y.useRef(!1);
  kt(() => (x.current = !0, () => {
    x.current = !1;
  }), []), kt(() => {
    if (_ && y) {
      if (g.current)
        return g.current(_, y, R);
      R();
    }
  }, [_, y, R, g]);
  const T = Y.useMemo(() => ({
    reference: f,
    floating: p,
    setReference: E,
    setFloating: S
  }), [E, S]), I = Y.useMemo(() => ({
    reference: _,
    floating: y
  }), [_, y]);
  return Y.useMemo(() => ({
    ...s,
    update: R,
    refs: T,
    elements: I,
    reference: E,
    floating: S
  }), [s, R, T, I, E, S]);
}
var Og = typeof document < "u" ? xn : q;
function $g() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(r, t) {
      var n;
      (n = e.get(r)) == null || n.forEach((o) => o(t));
    },
    on(r, t) {
      e.set(r, [...e.get(r) || [], t]);
    },
    off(r, t) {
      e.set(r, (e.get(r) || []).filter((n) => n !== t));
    }
  };
}
const Sg = /* @__PURE__ */ Y.createContext(null), xg = () => Y.useContext(Sg);
function Eg(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Cg(e) {
  return Eg(e).defaultView || window;
}
function Et(e) {
  return e ? e instanceof Cg(e).Element : !1;
}
const Rg = Y[/* @__PURE__ */ "useInsertionEffect".toString()], Ng = Rg || ((e) => e());
function Tg(e) {
  const r = Y.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Ng(() => {
    r.current = e;
  }), Y.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return r.current == null ? void 0 : r.current(...n);
  }, []);
}
function Ig(e) {
  e === void 0 && (e = {});
  const {
    open: r = !1,
    onOpenChange: t,
    nodeId: n
  } = e, o = Pg(e), a = xg(), i = Y.useRef(null), s = Y.useRef({}), l = Y.useState(() => $g())[0], [c, u] = Y.useState(null), f = Y.useCallback((v) => {
    const y = Et(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    o.refs.setReference(y);
  }, [o.refs]), p = Y.useCallback((v) => {
    (Et(v) || v === null) && (i.current = v, u(v)), (Et(o.refs.reference.current) || o.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !Et(v)) && o.refs.setReference(v);
  }, [o.refs]), m = Y.useMemo(() => ({
    ...o.refs,
    setReference: p,
    setPositionReference: f,
    domReference: i
  }), [o.refs, p, f]), g = Y.useMemo(() => ({
    ...o.elements,
    domReference: c
  }), [o.elements, c]), h = Tg(t), _ = Y.useMemo(() => ({
    ...o,
    refs: m,
    elements: g,
    dataRef: s,
    nodeId: n,
    events: l,
    open: r,
    onOpenChange: h
  }), [o, n, l, r, h, m, g]);
  return Og(() => {
    const v = a == null ? void 0 : a.nodesRef.current.find((y) => y.id === n);
    v && (v.context = _);
  }), Y.useMemo(() => ({
    ...o,
    context: _,
    refs: m,
    reference: p,
    positionReference: f
  }), [o, m, _, p, f]);
}
function Dg({
  opened: e,
  floating: r,
  position: t,
  positionDependencies: n
}) {
  const [o, a] = B(0);
  q(() => {
    if (r.refs.reference.current && r.refs.floating.current)
      return bg(r.refs.reference.current, r.refs.floating.current, r.update);
  }, [
    r.refs.reference.current,
    r.refs.floating.current,
    e,
    o,
    t
  ]), lr(() => {
    r.update();
  }, n), lr(() => {
    a((i) => i + 1);
  }, [e]);
}
function Ag(e) {
  const r = [dg(e.offset)];
  return e.middlewares.shift && r.push(pg({ limiter: mg() })), e.middlewares.flip && r.push(fg()), e.middlewares.inline && r.push(ug()), r.push(wg({ element: e.arrowRef, padding: e.arrowOffset })), r;
}
function jg(e) {
  const [r, t] = oo({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), n = () => {
    var i;
    (i = e.onClose) == null || i.call(e), t(!1);
  }, o = () => {
    var i, s;
    r ? ((i = e.onClose) == null || i.call(e), t(!1)) : ((s = e.onOpen) == null || s.call(e), t(!0));
  }, a = Ig({
    placement: e.position,
    middleware: [
      ...Ag(e),
      ...e.width === "target" ? [
        gg({
          apply({ rects: i }) {
            var s, l;
            Object.assign((l = (s = a.refs.floating.current) == null ? void 0 : s.style) != null ? l : {}, {
              width: `${i.reference.width}px`
            });
          }
        })
      ] : []
    ]
  });
  return Dg({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: a
  }), lr(() => {
    var i;
    (i = e.onPositionChange) == null || i.call(e, a.placement);
  }, [a.placement]), lr(() => {
    var i, s;
    e.opened ? (s = e.onOpen) == null || s.call(e) : (i = e.onClose) == null || i.call(e);
  }, [e.opened]), {
    floating: a,
    controlled: typeof e.opened == "boolean",
    opened: r,
    onClose: n,
    onToggle: o
  };
}
const kl = {
  context: "Popover component was not found in the tree",
  children: "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
}, [kg, zl] = Dc(kl.context);
var zg = Object.defineProperty, Lg = Object.defineProperties, Mg = Object.getOwnPropertyDescriptors, fn = Object.getOwnPropertySymbols, Ll = Object.prototype.hasOwnProperty, Ml = Object.prototype.propertyIsEnumerable, ci = (e, r, t) => r in e ? zg(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Ct = (e, r) => {
  for (var t in r || (r = {}))
    Ll.call(r, t) && ci(e, t, r[t]);
  if (fn)
    for (var t of fn(r))
      Ml.call(r, t) && ci(e, t, r[t]);
  return e;
}, Vg = (e, r) => Lg(e, Mg(r)), Fg = (e, r) => {
  var t = {};
  for (var n in e)
    Ll.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && fn)
    for (var n of fn(e))
      r.indexOf(n) < 0 && Ml.call(e, n) && (t[n] = e[n]);
  return t;
};
const Wg = {
  refProp: "ref",
  popupType: "dialog"
}, Vl = L((e, r) => {
  const t = re("PopoverTarget", Wg, e), { children: n, refProp: o, popupType: a } = t, i = Fg(t, ["children", "refProp", "popupType"]);
  if (!Ji(n))
    throw new Error(kl.children);
  const s = i, l = zl(), c = So(l.reference, n.ref, r), u = l.withRoles ? {
    "aria-haspopup": a,
    "aria-expanded": l.opened,
    "aria-controls": l.getDropdownId(),
    id: l.getTargetId()
  } : {};
  return pt(n, Ct(Vg(Ct(Ct(Ct({}, s), u), l.targetProps), {
    className: Qi(l.targetProps.className, s.className, n.props.className),
    [o]: c
  }), l.controlled ? null : { onClick: l.onToggle }));
});
Vl.displayName = "@mantine/core/PopoverTarget";
var Bg = pe((e, { radius: r, shadow: t }) => ({
  dropdown: {
    position: "absolute",
    backgroundColor: e.white,
    background: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
    border: `${P(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
    padding: `${e.spacing.sm} ${e.spacing.md}`,
    boxShadow: e.shadows[t] || t || "none",
    borderRadius: e.fn.radius(r),
    "&:focus": {
      outline: 0
    }
  },
  arrow: {
    backgroundColor: "inherit",
    border: `${P(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2]}`,
    zIndex: 1
  }
}));
const Hg = Bg;
var Ug = Object.defineProperty, fi = Object.getOwnPropertySymbols, Yg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, ui = (e, r, t) => r in e ? Ug(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Er = (e, r) => {
  for (var t in r || (r = {}))
    Yg.call(r, t) && ui(e, t, r[t]);
  if (fi)
    for (var t of fi(r))
      Gg.call(r, t) && ui(e, t, r[t]);
  return e;
};
const di = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Xg({
  transition: e,
  state: r,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof e == "string" ? e in _t ? Er(Er(Er({
    transitionProperty: _t[e].transitionProperty
  }, o), _t[e].common), _t[e][di[r]]) : null : Er(Er(Er({
    transitionProperty: e.transitionProperty
  }, o), e.common), e[di[r]]);
}
function qg({
  duration: e,
  exitDuration: r,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: a,
  onEntered: i,
  onExited: s
}) {
  const l = Ne(), c = Ss(), u = l.respectReducedMotion ? c : !1, [f, p] = B(u ? 0 : e), [m, g] = B(n ? "entered" : "exited"), h = G(-1), _ = (v) => {
    const y = v ? o : a, O = v ? i : s;
    g(v ? "pre-entering" : "pre-exiting"), window.clearTimeout(h.current);
    const E = u ? 0 : v ? e : r;
    if (p(E), E === 0)
      typeof y == "function" && y(), typeof O == "function" && O(), g(v ? "entered" : "exited");
    else {
      const S = window.setTimeout(() => {
        typeof y == "function" && y(), g(v ? "entering" : "exiting");
      }, 10);
      h.current = window.setTimeout(() => {
        window.clearTimeout(S), typeof O == "function" && O(), g(v ? "entered" : "exited");
      }, E);
    }
  };
  return lr(() => {
    _(n);
  }, [n]), q(() => () => window.clearTimeout(h.current), []), {
    transitionDuration: f,
    transitionStatus: m,
    transitionTimingFunction: t || l.transitionTimingFunction
  };
}
function Fl({
  keepMounted: e,
  transition: r,
  duration: t = 250,
  exitDuration: n = t,
  mounted: o,
  children: a,
  timingFunction: i,
  onExit: s,
  onEntered: l,
  onEnter: c,
  onExited: u
}) {
  const { transitionDuration: f, transitionStatus: p, transitionTimingFunction: m } = qg({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: i,
    onExit: s,
    onEntered: l,
    onEnter: c,
    onExited: u
  });
  return f === 0 ? o ? /* @__PURE__ */ w.createElement(w.Fragment, null, a({})) : e ? a({ display: "none" }) : null : p === "exited" ? e ? a({ display: "none" }) : null : /* @__PURE__ */ w.createElement(w.Fragment, null, a(Xg({
    transition: r,
    duration: f,
    state: p,
    timingFunction: m
  })));
}
Fl.displayName = "@mantine/core/Transition";
function Wl({
  children: e,
  active: r = !0,
  refProp: t = "ref"
}) {
  const n = Gu(r), o = So(n, e == null ? void 0 : e.ref);
  return Ji(e) ? pt(e, { [t]: o }) : e;
}
Wl.displayName = "@mantine/core/FocusTrap";
var Kg = Object.defineProperty, Jg = Object.defineProperties, Zg = Object.getOwnPropertyDescriptors, pi = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, ev = Object.prototype.propertyIsEnumerable, mi = (e, r, t) => r in e ? Kg(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, nr = (e, r) => {
  for (var t in r || (r = {}))
    Qg.call(r, t) && mi(e, t, r[t]);
  if (pi)
    for (var t of pi(r))
      ev.call(r, t) && mi(e, t, r[t]);
  return e;
}, Rt = (e, r) => Jg(e, Zg(r));
function gi(e, r, t, n) {
  return e === "center" || n === "center" ? { top: r } : e === "end" ? { bottom: t } : e === "start" ? { top: t } : {};
}
function vi(e, r, t, n, o) {
  return e === "center" || n === "center" ? { left: r } : e === "end" ? { [o === "ltr" ? "right" : "left"]: t } : e === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const rv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function tv({
  position: e,
  arrowSize: r,
  arrowOffset: t,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: a,
  arrowY: i,
  dir: s
}) {
  const [l, c = "center"] = e.split("-"), u = {
    width: P(r),
    height: P(r),
    transform: "rotate(45deg)",
    position: "absolute",
    [rv[l]]: P(n)
  }, f = P(-r / 2);
  return l === "left" ? Rt(nr(nr({}, u), gi(c, i, t, o)), {
    right: f,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  }) : l === "right" ? Rt(nr(nr({}, u), gi(c, i, t, o)), {
    left: f,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  }) : l === "top" ? Rt(nr(nr({}, u), vi(c, a, t, o, s)), {
    bottom: f,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  }) : l === "bottom" ? Rt(nr(nr({}, u), vi(c, a, t, o, s)), {
    top: f,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  }) : {};
}
var nv = Object.defineProperty, ov = Object.defineProperties, av = Object.getOwnPropertyDescriptors, un = Object.getOwnPropertySymbols, Bl = Object.prototype.hasOwnProperty, Hl = Object.prototype.propertyIsEnumerable, hi = (e, r, t) => r in e ? nv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, iv = (e, r) => {
  for (var t in r || (r = {}))
    Bl.call(r, t) && hi(e, t, r[t]);
  if (un)
    for (var t of un(r))
      Hl.call(r, t) && hi(e, t, r[t]);
  return e;
}, sv = (e, r) => ov(e, av(r)), lv = (e, r) => {
  var t = {};
  for (var n in e)
    Bl.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && un)
    for (var n of un(e))
      r.indexOf(n) < 0 && Hl.call(e, n) && (t[n] = e[n]);
  return t;
};
const Ul = L((e, r) => {
  var t = e, {
    position: n,
    arrowSize: o,
    arrowOffset: a,
    arrowRadius: i,
    arrowPosition: s,
    visible: l,
    arrowX: c,
    arrowY: u
  } = t, f = lv(t, [
    "position",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "visible",
    "arrowX",
    "arrowY"
  ]);
  const p = Ne();
  return l ? /* @__PURE__ */ w.createElement("div", sv(iv({}, f), {
    ref: r,
    style: tv({
      position: n,
      arrowSize: o,
      arrowOffset: a,
      arrowRadius: i,
      arrowPosition: s,
      dir: p.dir,
      arrowX: c,
      arrowY: u
    })
  })) : null;
});
Ul.displayName = "@mantine/core/FloatingArrow";
var cv = Object.defineProperty, fv = Object.defineProperties, uv = Object.getOwnPropertyDescriptors, dn = Object.getOwnPropertySymbols, Yl = Object.prototype.hasOwnProperty, Gl = Object.prototype.propertyIsEnumerable, yi = (e, r, t) => r in e ? cv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Cr = (e, r) => {
  for (var t in r || (r = {}))
    Yl.call(r, t) && yi(e, t, r[t]);
  if (dn)
    for (var t of dn(r))
      Gl.call(r, t) && yi(e, t, r[t]);
  return e;
}, qn = (e, r) => fv(e, uv(r)), dv = (e, r) => {
  var t = {};
  for (var n in e)
    Yl.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && dn)
    for (var n of dn(e))
      r.indexOf(n) < 0 && Gl.call(e, n) && (t[n] = e[n]);
  return t;
};
const pv = {};
function Xl(e) {
  var r;
  const t = re("PopoverDropdown", pv, e), { style: n, className: o, children: a, onKeyDownCapture: i } = t, s = dv(t, ["style", "className", "children", "onKeyDownCapture"]), l = zl(), { classes: c, cx: u } = Hg({ radius: l.radius, shadow: l.shadow }, {
    name: l.__staticSelector,
    classNames: l.classNames,
    styles: l.styles,
    unstyled: l.unstyled,
    variant: l.variant
  }), f = Vu({
    opened: l.opened,
    shouldReturnFocus: l.returnFocus
  }), p = l.withRoles ? {
    "aria-labelledby": l.getTargetId(),
    id: l.getDropdownId(),
    role: "dialog"
  } : {};
  return l.disabled ? null : /* @__PURE__ */ w.createElement(qs, Cr({
    withinPortal: l.withinPortal
  }, l.portalProps), /* @__PURE__ */ w.createElement(Fl, qn(Cr({
    mounted: l.opened
  }, l.transitionProps), {
    transition: l.transitionProps.transition || "fade",
    duration: (r = l.transitionProps.duration) != null ? r : 150,
    keepMounted: l.keepMounted,
    exitDuration: typeof l.transitionProps.exitDuration == "number" ? l.transitionProps.exitDuration : l.transitionProps.duration
  }), (m) => {
    var g, h;
    return /* @__PURE__ */ w.createElement(Wl, {
      active: l.trapFocus
    }, /* @__PURE__ */ w.createElement(ge, Cr(qn(Cr({}, p), {
      tabIndex: -1,
      ref: l.floating,
      style: qn(Cr(Cr({}, n), m), {
        zIndex: l.zIndex,
        top: (g = l.y) != null ? g : 0,
        left: (h = l.x) != null ? h : 0,
        width: l.width === "target" ? void 0 : P(l.width)
      }),
      className: u(c.dropdown, o),
      onKeyDownCapture: jc(l.onClose, {
        active: l.closeOnEscape,
        onTrigger: f,
        onKeyDown: i
      }),
      "data-position": l.placement
    }), s), a, /* @__PURE__ */ w.createElement(Ul, {
      ref: l.arrowRef,
      arrowX: l.arrowX,
      arrowY: l.arrowY,
      visible: l.withArrow,
      position: l.placement,
      arrowSize: l.arrowSize,
      arrowRadius: l.arrowRadius,
      arrowOffset: l.arrowOffset,
      arrowPosition: l.arrowPosition,
      className: c.arrow
    })));
  }));
}
Xl.displayName = "@mantine/core/PopoverDropdown";
function mv(e, r) {
  if (e === "rtl" && (r.includes("right") || r.includes("left"))) {
    const [t, n] = r.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return r;
}
var bi = Object.getOwnPropertySymbols, gv = Object.prototype.hasOwnProperty, vv = Object.prototype.propertyIsEnumerable, hv = (e, r) => {
  var t = {};
  for (var n in e)
    gv.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && bi)
    for (var n of bi(e))
      r.indexOf(n) < 0 && vv.call(e, n) && (t[n] = e[n]);
  return t;
};
const yv = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: !0, shift: !0, inline: !1 },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !1,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: hs("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
function Fr(e) {
  var r, t, n, o, a, i;
  const s = G(null), l = re("Popover", yv, e), {
    children: c,
    position: u,
    offset: f,
    onPositionChange: p,
    positionDependencies: m,
    opened: g,
    transitionProps: h,
    width: _,
    middlewares: v,
    withArrow: y,
    arrowSize: O,
    arrowOffset: E,
    arrowRadius: S,
    arrowPosition: R,
    unstyled: x,
    classNames: T,
    styles: I,
    closeOnClickOutside: N,
    withinPortal: A,
    portalProps: z,
    closeOnEscape: H,
    clickOutsideEvents: K,
    trapFocus: X,
    onClose: J,
    onOpen: ce,
    onChange: fe,
    zIndex: Ee,
    radius: ve,
    shadow: _e,
    id: Ce,
    defaultOpened: Le,
    __staticSelector: ur,
    withRoles: dr,
    disabled: Ye,
    returnFocus: Ge,
    variant: Ie,
    keepMounted: Xe
  } = l, qe = hv(l, [
    "children",
    "position",
    "offset",
    "onPositionChange",
    "positionDependencies",
    "opened",
    "transitionProps",
    "width",
    "middlewares",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "unstyled",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "withinPortal",
    "portalProps",
    "closeOnEscape",
    "clickOutsideEvents",
    "trapFocus",
    "onClose",
    "onOpen",
    "onChange",
    "zIndex",
    "radius",
    "shadow",
    "id",
    "defaultOpened",
    "__staticSelector",
    "withRoles",
    "disabled",
    "returnFocus",
    "variant",
    "keepMounted"
  ]), [Wr, wr] = B(null), [De, Br] = B(null), Me = $s(Ce), Qe = Ne(), ae = jg({
    middlewares: v,
    width: _,
    position: mv(Qe.dir, u),
    offset: f + (y ? O / 2 : 0),
    arrowRef: s,
    arrowOffset: E,
    onPositionChange: p,
    positionDependencies: m,
    opened: g,
    defaultOpened: Le,
    onChange: fe,
    onOpen: ce,
    onClose: J
  });
  ku(() => N && ae.onClose(), K, [
    Wr,
    De
  ]);
  const Pr = sr((Q) => {
    wr(Q), ae.floating.reference(Q);
  }, [ae.floating.reference]), er = sr((Q) => {
    Br(Q), ae.floating.floating(Q);
  }, [ae.floating.floating]);
  return /* @__PURE__ */ w.createElement(kg, {
    value: {
      returnFocus: Ge,
      disabled: Ye,
      controlled: ae.controlled,
      reference: Pr,
      floating: er,
      x: ae.floating.x,
      y: ae.floating.y,
      arrowX: (n = (t = (r = ae.floating) == null ? void 0 : r.middlewareData) == null ? void 0 : t.arrow) == null ? void 0 : n.x,
      arrowY: (i = (a = (o = ae.floating) == null ? void 0 : o.middlewareData) == null ? void 0 : a.arrow) == null ? void 0 : i.y,
      opened: ae.opened,
      arrowRef: s,
      transitionProps: h,
      width: _,
      withArrow: y,
      arrowSize: O,
      arrowOffset: E,
      arrowRadius: S,
      arrowPosition: R,
      placement: ae.floating.placement,
      trapFocus: X,
      withinPortal: A,
      portalProps: z,
      zIndex: Ee,
      radius: ve,
      shadow: _e,
      closeOnEscape: H,
      onClose: ae.onClose,
      onToggle: ae.onToggle,
      getTargetId: () => `${Me}-target`,
      getDropdownId: () => `${Me}-dropdown`,
      withRoles: dr,
      targetProps: qe,
      __staticSelector: ur,
      classNames: T,
      styles: I,
      unstyled: x,
      variant: Ie,
      keepMounted: Xe
    }
  }, c);
}
Fr.Target = Vl;
Fr.Dropdown = Xl;
Fr.displayName = "@mantine/core/Popover";
var bv = Object.defineProperty, pn = Object.getOwnPropertySymbols, ql = Object.prototype.hasOwnProperty, Kl = Object.prototype.propertyIsEnumerable, _i = (e, r, t) => r in e ? bv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, _v = (e, r) => {
  for (var t in r || (r = {}))
    ql.call(r, t) && _i(e, t, r[t]);
  if (pn)
    for (var t of pn(r))
      Kl.call(r, t) && _i(e, t, r[t]);
  return e;
}, wv = (e, r) => {
  var t = {};
  for (var n in e)
    ql.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && pn)
    for (var n of pn(e))
      r.indexOf(n) < 0 && Kl.call(e, n) && (t[n] = e[n]);
  return t;
};
function Pv(e) {
  var r = e, {
    children: t,
    component: n = "div",
    maxHeight: o = 220,
    direction: a = "column",
    id: i,
    innerRef: s,
    __staticSelector: l,
    styles: c,
    classNames: u,
    unstyled: f
  } = r, p = wv(r, [
    "children",
    "component",
    "maxHeight",
    "direction",
    "id",
    "innerRef",
    "__staticSelector",
    "styles",
    "classNames",
    "unstyled"
  ]);
  const { classes: m } = og(null, { name: l, styles: c, classNames: u, unstyled: f });
  return /* @__PURE__ */ w.createElement(Fr.Dropdown, _v({
    p: 0,
    onMouseDown: (g) => g.preventDefault()
  }, p), /* @__PURE__ */ w.createElement("div", {
    style: { maxHeight: P(o), display: "flex" }
  }, /* @__PURE__ */ w.createElement(ge, {
    component: n || "div",
    id: `${i}-items`,
    "aria-labelledby": `${i}-label`,
    role: "listbox",
    onMouseDown: (g) => g.preventDefault(),
    style: { flex: 1, overflowY: n !== Ro ? "auto" : void 0 },
    "data-combobox-popover": !0,
    tabIndex: -1,
    ref: s
  }, /* @__PURE__ */ w.createElement("div", {
    className: m.itemsWrapper,
    style: { flexDirection: a }
  }, t))));
}
function lt({
  opened: e,
  transitionProps: r = { transition: "fade", duration: 0 },
  shadow: t,
  withinPortal: n,
  portalProps: o,
  children: a,
  __staticSelector: i,
  onDirectionChange: s,
  switchDirectionOnFlip: l,
  zIndex: c,
  dropdownPosition: u,
  positionDependencies: f = [],
  classNames: p,
  styles: m,
  unstyled: g,
  readOnly: h,
  variant: _
}) {
  return /* @__PURE__ */ w.createElement(Fr, {
    unstyled: g,
    classNames: p,
    styles: m,
    width: "target",
    withRoles: !1,
    opened: e,
    middlewares: { flip: u === "flip", shift: !1 },
    position: u === "flip" ? "bottom" : u,
    positionDependencies: f,
    zIndex: c,
    __staticSelector: i,
    withinPortal: n,
    portalProps: o,
    transitionProps: r,
    shadow: t,
    disabled: h,
    onPositionChange: (v) => l && (s == null ? void 0 : s(v === "top" ? "column-reverse" : "column")),
    variant: _
  }, a);
}
lt.Target = Fr.Target;
lt.Dropdown = Pv;
var Ov = Object.defineProperty, $v = Object.defineProperties, Sv = Object.getOwnPropertyDescriptors, mn = Object.getOwnPropertySymbols, Jl = Object.prototype.hasOwnProperty, Zl = Object.prototype.propertyIsEnumerable, wi = (e, r, t) => r in e ? Ov(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Nt = (e, r) => {
  for (var t in r || (r = {}))
    Jl.call(r, t) && wi(e, t, r[t]);
  if (mn)
    for (var t of mn(r))
      Zl.call(r, t) && wi(e, t, r[t]);
  return e;
}, xv = (e, r) => $v(e, Sv(r)), Ev = (e, r) => {
  var t = {};
  for (var n in e)
    Jl.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && mn)
    for (var n of mn(e))
      r.indexOf(n) < 0 && Zl.call(e, n) && (t[n] = e[n]);
  return t;
};
function Cv(e, r, t) {
  const n = re(e, r, t), {
    label: o,
    description: a,
    error: i,
    required: s,
    classNames: l,
    styles: c,
    className: u,
    unstyled: f,
    __staticSelector: p,
    sx: m,
    errorProps: g,
    labelProps: h,
    descriptionProps: _,
    wrapperProps: v,
    id: y,
    size: O,
    style: E,
    inputContainer: S,
    inputWrapperOrder: R,
    withAsterisk: x,
    variant: T
  } = n, I = Ev(n, [
    "label",
    "description",
    "error",
    "required",
    "classNames",
    "styles",
    "className",
    "unstyled",
    "__staticSelector",
    "sx",
    "errorProps",
    "labelProps",
    "descriptionProps",
    "wrapperProps",
    "id",
    "size",
    "style",
    "inputContainer",
    "inputWrapperOrder",
    "withAsterisk",
    "variant"
  ]), N = $s(y), { systemStyles: A, rest: z } = xo(I), H = Nt({
    label: o,
    description: a,
    error: i,
    required: s,
    classNames: l,
    className: u,
    __staticSelector: p,
    sx: m,
    errorProps: g,
    labelProps: h,
    descriptionProps: _,
    unstyled: f,
    styles: c,
    id: N,
    size: O,
    style: E,
    inputContainer: S,
    inputWrapperOrder: R,
    withAsterisk: x,
    variant: T
  }, v);
  return xv(Nt({}, z), {
    classNames: l,
    styles: c,
    unstyled: f,
    wrapperProps: Nt(Nt({}, H), A),
    inputProps: {
      required: s,
      classNames: l,
      styles: c,
      unstyled: f,
      id: N,
      size: O,
      __staticSelector: p,
      error: i,
      variant: T
    }
  });
}
var Rv = pe((e, r, { size: t }) => ({
  label: {
    display: "inline-block",
    fontSize: k({ size: t, sizes: e.fontSizes }),
    fontWeight: 500,
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.colors.gray[9],
    wordBreak: "break-word",
    cursor: "default",
    WebkitTapHighlightColor: "transparent"
  },
  required: {
    color: e.fn.variant({ variant: "filled", color: "red" }).background
  }
}));
const Nv = Rv;
var Tv = Object.defineProperty, gn = Object.getOwnPropertySymbols, Ql = Object.prototype.hasOwnProperty, ec = Object.prototype.propertyIsEnumerable, Pi = (e, r, t) => r in e ? Tv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Iv = (e, r) => {
  for (var t in r || (r = {}))
    Ql.call(r, t) && Pi(e, t, r[t]);
  if (gn)
    for (var t of gn(r))
      ec.call(r, t) && Pi(e, t, r[t]);
  return e;
}, Dv = (e, r) => {
  var t = {};
  for (var n in e)
    Ql.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && gn)
    for (var n of gn(e))
      r.indexOf(n) < 0 && ec.call(e, n) && (t[n] = e[n]);
  return t;
};
const Av = {
  labelElement: "label",
  size: "sm"
}, Ao = L((e, r) => {
  const t = re("InputLabel", Av, e), {
    labelElement: n,
    children: o,
    required: a,
    size: i,
    classNames: s,
    styles: l,
    unstyled: c,
    className: u,
    htmlFor: f,
    __staticSelector: p,
    variant: m,
    onMouseDown: g
  } = t, h = Dv(t, [
    "labelElement",
    "children",
    "required",
    "size",
    "classNames",
    "styles",
    "unstyled",
    "className",
    "htmlFor",
    "__staticSelector",
    "variant",
    "onMouseDown"
  ]), { classes: _, cx: v } = Nv(null, {
    name: ["InputWrapper", p],
    classNames: s,
    styles: l,
    unstyled: c,
    variant: m,
    size: i
  });
  return /* @__PURE__ */ w.createElement(ge, Iv({
    component: n,
    ref: r,
    className: v(_.label, u),
    htmlFor: n === "label" ? f : void 0,
    onMouseDown: (y) => {
      g == null || g(y), !y.defaultPrevented && y.detail > 1 && y.preventDefault();
    }
  }, h), o, a && /* @__PURE__ */ w.createElement("span", {
    className: _.required,
    "aria-hidden": !0
  }, " *"));
});
Ao.displayName = "@mantine/core/InputLabel";
var jv = pe((e, r, { size: t }) => ({
  error: {
    wordBreak: "break-word",
    color: e.fn.variant({ variant: "filled", color: "red" }).background,
    fontSize: `calc(${k({ size: t, sizes: e.fontSizes })} - ${P(2)})`,
    lineHeight: 1.2,
    display: "block"
  }
}));
const kv = jv;
var zv = Object.defineProperty, vn = Object.getOwnPropertySymbols, rc = Object.prototype.hasOwnProperty, tc = Object.prototype.propertyIsEnumerable, Oi = (e, r, t) => r in e ? zv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Lv = (e, r) => {
  for (var t in r || (r = {}))
    rc.call(r, t) && Oi(e, t, r[t]);
  if (vn)
    for (var t of vn(r))
      tc.call(r, t) && Oi(e, t, r[t]);
  return e;
}, Mv = (e, r) => {
  var t = {};
  for (var n in e)
    rc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && vn)
    for (var n of vn(e))
      r.indexOf(n) < 0 && tc.call(e, n) && (t[n] = e[n]);
  return t;
};
const Vv = {
  size: "sm"
}, jo = L((e, r) => {
  const t = re("InputError", Vv, e), {
    children: n,
    className: o,
    classNames: a,
    styles: i,
    unstyled: s,
    size: l,
    __staticSelector: c,
    variant: u
  } = t, f = Mv(t, [
    "children",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "size",
    "__staticSelector",
    "variant"
  ]), { classes: p, cx: m } = kv(null, {
    name: ["InputWrapper", c],
    classNames: a,
    styles: i,
    unstyled: s,
    variant: u,
    size: l
  });
  return /* @__PURE__ */ w.createElement(Nn, Lv({
    className: m(p.error, o),
    ref: r
  }, f), n);
});
jo.displayName = "@mantine/core/InputError";
var Fv = pe((e, r, { size: t }) => ({
  description: {
    wordBreak: "break-word",
    color: e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[6],
    fontSize: `calc(${k({ size: t, sizes: e.fontSizes })} - ${P(2)})`,
    lineHeight: 1.2,
    display: "block"
  }
}));
const Wv = Fv;
var Bv = Object.defineProperty, hn = Object.getOwnPropertySymbols, nc = Object.prototype.hasOwnProperty, oc = Object.prototype.propertyIsEnumerable, $i = (e, r, t) => r in e ? Bv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Hv = (e, r) => {
  for (var t in r || (r = {}))
    nc.call(r, t) && $i(e, t, r[t]);
  if (hn)
    for (var t of hn(r))
      oc.call(r, t) && $i(e, t, r[t]);
  return e;
}, Uv = (e, r) => {
  var t = {};
  for (var n in e)
    nc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && hn)
    for (var n of hn(e))
      r.indexOf(n) < 0 && oc.call(e, n) && (t[n] = e[n]);
  return t;
};
const Yv = {
  size: "sm"
}, ko = L((e, r) => {
  const t = re("InputDescription", Yv, e), {
    children: n,
    className: o,
    classNames: a,
    styles: i,
    unstyled: s,
    size: l,
    __staticSelector: c,
    variant: u
  } = t, f = Uv(t, [
    "children",
    "className",
    "classNames",
    "styles",
    "unstyled",
    "size",
    "__staticSelector",
    "variant"
  ]), { classes: p, cx: m } = Wv(null, {
    name: ["InputWrapper", c],
    classNames: a,
    styles: i,
    unstyled: s,
    variant: u,
    size: l
  });
  return /* @__PURE__ */ w.createElement(Nn, Hv({
    color: "dimmed",
    className: m(p.description, o),
    ref: r,
    unstyled: s
  }, f), n);
});
ko.displayName = "@mantine/core/InputDescription";
const ac = Dr({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0
}), Gv = ac.Provider, Xv = () => Lr(ac);
function qv(e, { hasDescription: r, hasError: t }) {
  const n = e.findIndex((l) => l === "input"), o = e[n - 1], a = e[n + 1];
  return { offsetBottom: r && a === "description" || t && a === "error", offsetTop: r && o === "description" || t && o === "error" };
}
var Kv = Object.defineProperty, Jv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, Si = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, eh = Object.prototype.propertyIsEnumerable, xi = (e, r, t) => r in e ? Kv(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, rh = (e, r) => {
  for (var t in r || (r = {}))
    Qv.call(r, t) && xi(e, t, r[t]);
  if (Si)
    for (var t of Si(r))
      eh.call(r, t) && xi(e, t, r[t]);
  return e;
}, th = (e, r) => Jv(e, Zv(r)), nh = pe((e) => ({
  root: th(rh({}, e.fn.fontStyles()), {
    lineHeight: e.lineHeight
  })
}));
const oh = nh;
var ah = Object.defineProperty, ih = Object.defineProperties, sh = Object.getOwnPropertyDescriptors, yn = Object.getOwnPropertySymbols, ic = Object.prototype.hasOwnProperty, sc = Object.prototype.propertyIsEnumerable, Ei = (e, r, t) => r in e ? ah(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, or = (e, r) => {
  for (var t in r || (r = {}))
    ic.call(r, t) && Ei(e, t, r[t]);
  if (yn)
    for (var t of yn(r))
      sc.call(r, t) && Ei(e, t, r[t]);
  return e;
}, Ci = (e, r) => ih(e, sh(r)), lh = (e, r) => {
  var t = {};
  for (var n in e)
    ic.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && yn)
    for (var n of yn(e))
      r.indexOf(n) < 0 && sc.call(e, n) && (t[n] = e[n]);
  return t;
};
const ch = {
  labelElement: "label",
  size: "sm",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, lc = L((e, r) => {
  const t = re("InputWrapper", ch, e), {
    className: n,
    label: o,
    children: a,
    required: i,
    id: s,
    error: l,
    description: c,
    labelElement: u,
    labelProps: f,
    descriptionProps: p,
    errorProps: m,
    classNames: g,
    styles: h,
    size: _,
    inputContainer: v,
    __staticSelector: y,
    unstyled: O,
    inputWrapperOrder: E,
    withAsterisk: S,
    variant: R
  } = t, x = lh(t, [
    "className",
    "label",
    "children",
    "required",
    "id",
    "error",
    "description",
    "labelElement",
    "labelProps",
    "descriptionProps",
    "errorProps",
    "classNames",
    "styles",
    "size",
    "inputContainer",
    "__staticSelector",
    "unstyled",
    "inputWrapperOrder",
    "withAsterisk",
    "variant"
  ]), { classes: T, cx: I } = oh(null, {
    classNames: g,
    styles: h,
    name: ["InputWrapper", y],
    unstyled: O,
    variant: R,
    size: _
  }), N = {
    classNames: g,
    styles: h,
    unstyled: O,
    size: _,
    variant: R,
    __staticSelector: y
  }, A = typeof S == "boolean" ? S : i, z = s ? `${s}-error` : m == null ? void 0 : m.id, H = s ? `${s}-description` : p == null ? void 0 : p.id, X = `${!!l && typeof l != "boolean" ? z : ""} ${c ? H : ""}`, J = X.trim().length > 0 ? X.trim() : void 0, ce = o && /* @__PURE__ */ w.createElement(Ao, or(or({
    key: "label",
    labelElement: u,
    id: s ? `${s}-label` : void 0,
    htmlFor: s,
    required: A
  }, N), f), o), fe = c && /* @__PURE__ */ w.createElement(ko, Ci(or(or({
    key: "description"
  }, p), N), {
    size: (p == null ? void 0 : p.size) || N.size,
    id: (p == null ? void 0 : p.id) || H
  }), c), Ee = /* @__PURE__ */ w.createElement(vo, {
    key: "input"
  }, v(a)), ve = typeof l != "boolean" && l && /* @__PURE__ */ w.createElement(jo, Ci(or(or({}, m), N), {
    size: (m == null ? void 0 : m.size) || N.size,
    key: "error",
    id: (m == null ? void 0 : m.id) || z
  }), l), _e = E.map((Ce) => {
    switch (Ce) {
      case "label":
        return ce;
      case "input":
        return Ee;
      case "description":
        return fe;
      case "error":
        return ve;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ w.createElement(Gv, {
    value: or({
      describedBy: J
    }, qv(E, {
      hasDescription: !!fe,
      hasError: !!ve
    }))
  }, /* @__PURE__ */ w.createElement(ge, or({
    className: I(T.root, n),
    ref: r
  }, x), _e));
});
lc.displayName = "@mantine/core/InputWrapper";
var fh = Object.defineProperty, bn = Object.getOwnPropertySymbols, cc = Object.prototype.hasOwnProperty, fc = Object.prototype.propertyIsEnumerable, Ri = (e, r, t) => r in e ? fh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, uh = (e, r) => {
  for (var t in r || (r = {}))
    cc.call(r, t) && Ri(e, t, r[t]);
  if (bn)
    for (var t of bn(r))
      fc.call(r, t) && Ri(e, t, r[t]);
  return e;
}, dh = (e, r) => {
  var t = {};
  for (var n in e)
    cc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && bn)
    for (var n of bn(e))
      r.indexOf(n) < 0 && fc.call(e, n) && (t[n] = e[n]);
  return t;
};
const ph = {}, uc = L((e, r) => {
  const t = re("InputPlaceholder", ph, e), { sx: n } = t, o = dh(t, ["sx"]);
  return /* @__PURE__ */ w.createElement(ge, uh({
    component: "span",
    sx: [(a) => a.fn.placeholderStyles(), ...Ki(n)],
    ref: r
  }, o));
});
uc.displayName = "@mantine/core/InputPlaceholder";
var mh = Object.defineProperty, gh = Object.defineProperties, vh = Object.getOwnPropertyDescriptors, Ni = Object.getOwnPropertySymbols, hh = Object.prototype.hasOwnProperty, yh = Object.prototype.propertyIsEnumerable, Ti = (e, r, t) => r in e ? mh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Tt = (e, r) => {
  for (var t in r || (r = {}))
    hh.call(r, t) && Ti(e, t, r[t]);
  if (Ni)
    for (var t of Ni(r))
      yh.call(r, t) && Ti(e, t, r[t]);
  return e;
}, Kn = (e, r) => gh(e, vh(r));
const ye = {
  xs: P(30),
  sm: P(36),
  md: P(42),
  lg: P(50),
  xl: P(60)
}, bh = ["default", "filled", "unstyled"];
function _h({ theme: e, variant: r }) {
  return bh.includes(r) ? r === "default" ? {
    border: `${P(1)} solid ${e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[4]}`,
    backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.white,
    transition: "border-color 100ms ease",
    "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e)
  } : r === "filled" ? {
    border: `${P(1)} solid transparent`,
    backgroundColor: e.colorScheme === "dark" ? e.colors.dark[5] : e.colors.gray[1],
    "&:focus, &:focus-within": e.focusRingStyles.inputStyles(e)
  } : {
    borderWidth: 0,
    color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
    backgroundColor: "transparent",
    minHeight: P(28),
    outline: 0,
    "&:focus, &:focus-within": {
      outline: "none",
      borderColor: "transparent"
    },
    "&:disabled": {
      backgroundColor: "transparent",
      "&:focus, &:focus-within": {
        outline: "none",
        borderColor: "transparent"
      }
    }
  } : null;
}
var wh = pe((e, {
  multiline: r,
  radius: t,
  invalid: n,
  rightSectionWidth: o,
  withRightSection: a,
  iconWidth: i,
  offsetBottom: s,
  offsetTop: l,
  pointer: c
}, { variant: u, size: f }) => {
  const p = e.fn.variant({ variant: "filled", color: "red" }).background, m = u === "default" || u === "filled" ? {
    minHeight: k({ size: f, sizes: ye }),
    paddingLeft: `calc(${k({ size: f, sizes: ye })}  / 3)`,
    paddingRight: a ? o || k({ size: f, sizes: ye }) : `calc(${k({ size: f, sizes: ye })}  / 3)`,
    borderRadius: e.fn.radius(t)
  } : null;
  return {
    wrapper: {
      position: "relative",
      marginTop: l ? `calc(${e.spacing.xs} / 2)` : void 0,
      marginBottom: s ? `calc(${e.spacing.xs} / 2)` : void 0
    },
    input: Kn(Tt(Tt(Kn(Tt({}, e.fn.fontStyles()), {
      height: r ? u === "unstyled" ? void 0 : "auto" : k({ size: f, sizes: ye }),
      WebkitTapHighlightColor: "transparent",
      lineHeight: r ? e.lineHeight : `calc(${k({ size: f, sizes: ye })} - ${P(2)})`,
      appearance: "none",
      resize: "none",
      boxSizing: "border-box",
      fontSize: k({ size: f, sizes: e.fontSizes }),
      width: "100%",
      color: e.colorScheme === "dark" ? e.colors.dark[0] : e.black,
      display: "block",
      textAlign: "left",
      cursor: c ? "pointer" : void 0
    }), _h({ theme: e, variant: u })), m), {
      "&:disabled, &[data-disabled]": {
        backgroundColor: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[1],
        color: e.colors.dark[2],
        opacity: 0.6,
        cursor: "not-allowed",
        "&::placeholder": {
          color: e.colors.dark[2]
        }
      },
      "&[data-invalid]": {
        color: p,
        borderColor: p,
        "&::placeholder": {
          opacity: 1,
          color: p
        }
      },
      "&[data-with-icon]": {
        paddingLeft: typeof i == "number" ? P(i) : k({ size: f, sizes: ye })
      },
      "&::placeholder": Kn(Tt({}, e.fn.placeholderStyles()), {
        opacity: 1
      }),
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
        appearance: "none"
      },
      "&[type=number]": {
        MozAppearance: "textfield"
      }
    }),
    icon: {
      pointerEvents: "none",
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: i ? P(i) : k({ size: f, sizes: ye }),
      color: n ? e.colors.red[e.colorScheme === "dark" ? 6 : 7] : e.colorScheme === "dark" ? e.colors.dark[2] : e.colors.gray[5]
    },
    rightSection: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: o || k({ size: f, sizes: ye })
    }
  };
});
const Ph = wh;
var Oh = Object.defineProperty, $h = Object.defineProperties, Sh = Object.getOwnPropertyDescriptors, _n = Object.getOwnPropertySymbols, dc = Object.prototype.hasOwnProperty, pc = Object.prototype.propertyIsEnumerable, Ii = (e, r, t) => r in e ? Oh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, It = (e, r) => {
  for (var t in r || (r = {}))
    dc.call(r, t) && Ii(e, t, r[t]);
  if (_n)
    for (var t of _n(r))
      pc.call(r, t) && Ii(e, t, r[t]);
  return e;
}, Di = (e, r) => $h(e, Sh(r)), xh = (e, r) => {
  var t = {};
  for (var n in e)
    dc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && _n)
    for (var n of _n(e))
      r.indexOf(n) < 0 && pc.call(e, n) && (t[n] = e[n]);
  return t;
};
const Eh = {
  size: "sm",
  variant: "default"
}, _r = L((e, r) => {
  const t = re("Input", Eh, e), {
    className: n,
    error: o,
    required: a,
    disabled: i,
    variant: s,
    icon: l,
    style: c,
    rightSectionWidth: u,
    iconWidth: f,
    rightSection: p,
    rightSectionProps: m,
    radius: g,
    size: h,
    wrapperProps: _,
    classNames: v,
    styles: y,
    __staticSelector: O,
    multiline: E,
    sx: S,
    unstyled: R,
    pointer: x
  } = t, T = xh(t, [
    "className",
    "error",
    "required",
    "disabled",
    "variant",
    "icon",
    "style",
    "rightSectionWidth",
    "iconWidth",
    "rightSection",
    "rightSectionProps",
    "radius",
    "size",
    "wrapperProps",
    "classNames",
    "styles",
    "__staticSelector",
    "multiline",
    "sx",
    "unstyled",
    "pointer"
  ]), { offsetBottom: I, offsetTop: N, describedBy: A } = Xv(), { classes: z, cx: H } = Ph({
    radius: g,
    multiline: E,
    invalid: !!o,
    rightSectionWidth: u ? P(u) : void 0,
    iconWidth: f,
    withRightSection: !!p,
    offsetBottom: I,
    offsetTop: N,
    pointer: x
  }, { classNames: v, styles: y, name: ["Input", O], unstyled: R, variant: s, size: h }), { systemStyles: K, rest: X } = xo(T);
  return /* @__PURE__ */ w.createElement(ge, It(It({
    className: H(z.wrapper, n),
    sx: S,
    style: c
  }, K), _), l && /* @__PURE__ */ w.createElement("div", {
    className: z.icon
  }, l), /* @__PURE__ */ w.createElement(ge, Di(It({
    component: "input"
  }, X), {
    ref: r,
    required: a,
    "aria-invalid": !!o,
    "aria-describedby": A,
    disabled: i,
    "data-disabled": i || void 0,
    "data-with-icon": !!l || void 0,
    "data-invalid": !!o || void 0,
    className: z.input
  })), p && /* @__PURE__ */ w.createElement("div", Di(It({}, m), {
    className: z.rightSection
  }), p));
});
_r.displayName = "@mantine/core/Input";
_r.Wrapper = lc;
_r.Label = Ao;
_r.Description = ko;
_r.Error = jo;
_r.Placeholder = uc;
const Ai = _r;
var Ch = pe((e, { orientation: r, buttonBorderWidth: t }) => ({
  root: {
    display: "flex",
    flexDirection: r === "vertical" ? "column" : "row",
    "& [data-button]": {
      "&:first-of-type:not(:last-of-type)": {
        borderBottomRightRadius: 0,
        [r === "vertical" ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 0,
        [r === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${P(t)} / 2)`
      },
      "&:last-of-type:not(:first-of-type)": {
        borderTopLeftRadius: 0,
        [r === "vertical" ? "borderTopRightRadius" : "borderBottomLeftRadius"]: 0,
        [r === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${P(t)} / 2)`
      },
      "&:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0,
        [r === "vertical" ? "borderTopWidth" : "borderLeftWidth"]: `calc(${P(t)} / 2)`,
        [r === "vertical" ? "borderBottomWidth" : "borderRightWidth"]: `calc(${P(t)} / 2)`
      },
      "& + [data-button]": {
        [r === "vertical" ? "marginTop" : "marginLeft"]: `calc(${t} * -1)`,
        "@media (min-resolution: 192dpi)": {
          [r === "vertical" ? "marginTop" : "marginLeft"]: 0
        }
      }
    }
  }
}));
const Rh = Ch;
var Nh = Object.defineProperty, wn = Object.getOwnPropertySymbols, mc = Object.prototype.hasOwnProperty, gc = Object.prototype.propertyIsEnumerable, ji = (e, r, t) => r in e ? Nh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Th = (e, r) => {
  for (var t in r || (r = {}))
    mc.call(r, t) && ji(e, t, r[t]);
  if (wn)
    for (var t of wn(r))
      gc.call(r, t) && ji(e, t, r[t]);
  return e;
}, Ih = (e, r) => {
  var t = {};
  for (var n in e)
    mc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && wn)
    for (var n of wn(e))
      r.indexOf(n) < 0 && gc.call(e, n) && (t[n] = e[n]);
  return t;
};
const Dh = {
  orientation: "horizontal",
  buttonBorderWidth: 1
}, vc = L((e, r) => {
  const t = re("ButtonGroup", Dh, e), { className: n, orientation: o, buttonBorderWidth: a, unstyled: i } = t, s = Ih(t, ["className", "orientation", "buttonBorderWidth", "unstyled"]), { classes: l, cx: c } = Rh({ orientation: o, buttonBorderWidth: a }, { name: "ButtonGroup", unstyled: i });
  return /* @__PURE__ */ w.createElement(ge, Th({
    className: c(l.root, n),
    ref: r
  }, s));
});
vc.displayName = "@mantine/core/ButtonGroup";
var Ah = Object.defineProperty, jh = Object.defineProperties, kh = Object.getOwnPropertyDescriptors, ki = Object.getOwnPropertySymbols, zh = Object.prototype.hasOwnProperty, Lh = Object.prototype.propertyIsEnumerable, zi = (e, r, t) => r in e ? Ah(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, ar = (e, r) => {
  for (var t in r || (r = {}))
    zh.call(r, t) && zi(e, t, r[t]);
  if (ki)
    for (var t of ki(r))
      Lh.call(r, t) && zi(e, t, r[t]);
  return e;
}, zt = (e, r) => jh(e, kh(r));
const Mh = [
  "filled",
  "outline",
  "light",
  "white",
  "default",
  "subtle",
  "gradient"
], go = {
  xs: { height: ye.xs, paddingLeft: P(14), paddingRight: P(14) },
  sm: { height: ye.sm, paddingLeft: P(18), paddingRight: P(18) },
  md: { height: ye.md, paddingLeft: P(22), paddingRight: P(22) },
  lg: { height: ye.lg, paddingLeft: P(26), paddingRight: P(26) },
  xl: { height: ye.xl, paddingLeft: P(32), paddingRight: P(32) },
  "compact-xs": { height: P(22), paddingLeft: P(7), paddingRight: P(7) },
  "compact-sm": { height: P(26), paddingLeft: P(8), paddingRight: P(8) },
  "compact-md": { height: P(30), paddingLeft: P(10), paddingRight: P(10) },
  "compact-lg": { height: P(34), paddingLeft: P(12), paddingRight: P(12) },
  "compact-xl": { height: P(40), paddingLeft: P(14), paddingRight: P(14) }
};
function Vh({ compact: e, size: r, withLeftIcon: t, withRightIcon: n }) {
  if (e)
    return go[`compact-${r}`];
  const o = go[r];
  return o ? zt(ar({}, o), {
    paddingLeft: t ? `calc(${o.paddingLeft}  / 1.5)` : o.paddingLeft,
    paddingRight: n ? `calc(${o.paddingRight}  / 1.5)` : o.paddingRight
  }) : {};
}
const Fh = (e) => ({
  display: e ? "block" : "inline-block",
  width: e ? "100%" : "auto"
});
function Wh({ variant: e, theme: r, color: t, gradient: n }) {
  if (!Mh.includes(e))
    return null;
  const o = r.fn.variant({ color: t, variant: e, gradient: n });
  return e === "gradient" ? ar({
    border: 0,
    backgroundImage: o.background,
    color: o.color
  }, r.fn.hover({ backgroundSize: "200%" })) : {
    border: `${P(1)} solid ${o.border}`,
    backgroundColor: o.background,
    color: o.color,
    "&:not([data-disabled])": r.fn.hover({ backgroundColor: o.hover })
  };
}
var Bh = pe((e, {
  radius: r,
  fullWidth: t,
  compact: n,
  withLeftIcon: o,
  withRightIcon: a,
  color: i,
  gradient: s
}, { variant: l, size: c }) => ({
  root: zt(ar(zt(ar(ar(ar(ar({}, Vh({ compact: n, size: c, withLeftIcon: o, withRightIcon: a })), e.fn.fontStyles()), e.fn.focusStyles()), Fh(t)), {
    borderRadius: e.fn.radius(r),
    fontWeight: 600,
    position: "relative",
    lineHeight: 1,
    fontSize: k({ size: c, sizes: e.fontSizes }),
    userSelect: "none",
    cursor: "pointer"
  }), Wh({ variant: l, theme: e, color: i, gradient: s })), {
    "&:active": e.activeStyles,
    "&:disabled, &[data-disabled]": {
      borderColor: "transparent",
      backgroundColor: e.colorScheme === "dark" ? e.colors.dark[4] : e.colors.gray[2],
      color: e.colorScheme === "dark" ? e.colors.dark[6] : e.colors.gray[5],
      cursor: "not-allowed",
      backgroundImage: "none",
      pointerEvents: "none",
      "&:active": {
        transform: "none"
      }
    },
    "&[data-loading]": {
      pointerEvents: "none",
      "&::before": zt(ar({
        content: '""'
      }, e.fn.cover(P(-1))), {
        backgroundColor: e.colorScheme === "dark" ? e.fn.rgba(e.colors.dark[7], 0.5) : "rgba(255, 255, 255, .5)",
        borderRadius: e.fn.radius(r),
        cursor: "not-allowed"
      })
    }
  }),
  icon: {
    display: "flex",
    alignItems: "center"
  },
  leftIcon: {
    marginRight: e.spacing.xs
  },
  rightIcon: {
    marginLeft: e.spacing.xs
  },
  centerLoader: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.5
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    overflow: "visible"
  },
  label: {
    whiteSpace: "nowrap",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center"
  }
}));
const Hh = Bh;
var Uh = Object.defineProperty, Pn = Object.getOwnPropertySymbols, hc = Object.prototype.hasOwnProperty, yc = Object.prototype.propertyIsEnumerable, Li = (e, r, t) => r in e ? Uh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Mi = (e, r) => {
  for (var t in r || (r = {}))
    hc.call(r, t) && Li(e, t, r[t]);
  if (Pn)
    for (var t of Pn(r))
      yc.call(r, t) && Li(e, t, r[t]);
  return e;
}, Yh = (e, r) => {
  var t = {};
  for (var n in e)
    hc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Pn)
    for (var n of Pn(e))
      r.indexOf(n) < 0 && yc.call(e, n) && (t[n] = e[n]);
  return t;
};
const Gh = {
  size: "sm",
  type: "button",
  variant: "filled",
  loaderPosition: "left"
}, zo = L((e, r) => {
  const t = re("Button", Gh, e), {
    className: n,
    size: o,
    color: a,
    type: i,
    disabled: s,
    children: l,
    leftIcon: c,
    rightIcon: u,
    fullWidth: f,
    variant: p,
    radius: m,
    uppercase: g,
    compact: h,
    loading: _,
    loaderPosition: v,
    loaderProps: y,
    gradient: O,
    classNames: E,
    styles: S,
    unstyled: R
  } = t, x = Yh(t, [
    "className",
    "size",
    "color",
    "type",
    "disabled",
    "children",
    "leftIcon",
    "rightIcon",
    "fullWidth",
    "variant",
    "radius",
    "uppercase",
    "compact",
    "loading",
    "loaderPosition",
    "loaderProps",
    "gradient",
    "classNames",
    "styles",
    "unstyled"
  ]), { classes: T, cx: I, theme: N } = Hh({
    radius: m,
    color: a,
    fullWidth: f,
    compact: h,
    gradient: O,
    withLeftIcon: !!c,
    withRightIcon: !!u
  }, { name: "Button", unstyled: R, classNames: E, styles: S, variant: p, size: o }), A = N.fn.variant({ color: a, variant: p }), z = /* @__PURE__ */ w.createElement(Eo, Mi({
    color: A.color,
    size: `calc(${k({ size: o, sizes: go }).height} / 2)`
  }, y));
  return /* @__PURE__ */ w.createElement(Is, Mi({
    className: I(T.root, n),
    type: i,
    disabled: s,
    "data-button": !0,
    "data-disabled": s || void 0,
    "data-loading": _ || void 0,
    ref: r,
    unstyled: R
  }, x), /* @__PURE__ */ w.createElement("div", {
    className: T.inner
  }, (c || _ && v === "left") && /* @__PURE__ */ w.createElement("span", {
    className: I(T.icon, T.leftIcon)
  }, _ && v === "left" ? z : c), _ && v === "center" && /* @__PURE__ */ w.createElement("span", {
    className: T.centerLoader
  }, z), /* @__PURE__ */ w.createElement("span", {
    className: T.label,
    style: { textTransform: g ? "uppercase" : void 0 }
  }, l), (u || _ && v === "right") && /* @__PURE__ */ w.createElement("span", {
    className: I(T.icon, T.rightIcon)
  }, _ && v === "right" ? z : u)));
});
zo.displayName = "@mantine/core/Button";
zo.Group = vc;
const Xh = zo;
var qh = Object.defineProperty, On = Object.getOwnPropertySymbols, bc = Object.prototype.hasOwnProperty, _c = Object.prototype.propertyIsEnumerable, Vi = (e, r, t) => r in e ? qh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Fi = (e, r) => {
  for (var t in r || (r = {}))
    bc.call(r, t) && Vi(e, t, r[t]);
  if (On)
    for (var t of On(r))
      _c.call(r, t) && Vi(e, t, r[t]);
  return e;
}, Kh = (e, r) => {
  var t = {};
  for (var n in e)
    bc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && On)
    for (var n of On(e))
      r.indexOf(n) < 0 && _c.call(e, n) && (t[n] = e[n]);
  return t;
};
const Jh = {
  xs: P(14),
  sm: P(18),
  md: P(20),
  lg: P(24),
  xl: P(28)
};
function Zh(e) {
  var r = e, { size: t, error: n, style: o } = r, a = Kh(r, ["size", "error", "style"]);
  const i = Ne(), s = k({ size: t, sizes: Jh });
  return /* @__PURE__ */ w.createElement("svg", Fi({
    width: s,
    height: s,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: Fi({ color: n ? i.colors.red[6] : i.colors.gray[6] }, o),
    "data-chevron": !0
  }, a), /* @__PURE__ */ w.createElement("path", {
    d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
var Qh = Object.defineProperty, ey = Object.defineProperties, ry = Object.getOwnPropertyDescriptors, Wi = Object.getOwnPropertySymbols, ty = Object.prototype.hasOwnProperty, ny = Object.prototype.propertyIsEnumerable, Bi = (e, r, t) => r in e ? Qh(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, oy = (e, r) => {
  for (var t in r || (r = {}))
    ty.call(r, t) && Bi(e, t, r[t]);
  if (Wi)
    for (var t of Wi(r))
      ny.call(r, t) && Bi(e, t, r[t]);
  return e;
}, ay = (e, r) => ey(e, ry(r));
function wc({
  shouldClear: e,
  clearButtonProps: r,
  onClear: t,
  size: n,
  error: o
}) {
  return e ? /* @__PURE__ */ w.createElement(Cp, ay(oy({}, r), {
    variant: "transparent",
    onClick: t,
    size: n,
    onMouseDown: (a) => a.preventDefault()
  })) : /* @__PURE__ */ w.createElement(Zh, {
    error: o,
    size: n
  });
}
wc.displayName = "@mantine/core/SelectRightSection";
var iy = Object.defineProperty, sy = Object.defineProperties, ly = Object.getOwnPropertyDescriptors, $n = Object.getOwnPropertySymbols, Pc = Object.prototype.hasOwnProperty, Oc = Object.prototype.propertyIsEnumerable, Hi = (e, r, t) => r in e ? iy(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, Jn = (e, r) => {
  for (var t in r || (r = {}))
    Pc.call(r, t) && Hi(e, t, r[t]);
  if ($n)
    for (var t of $n(r))
      Oc.call(r, t) && Hi(e, t, r[t]);
  return e;
}, Ui = (e, r) => sy(e, ly(r)), cy = (e, r) => {
  var t = {};
  for (var n in e)
    Pc.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && $n)
    for (var n of $n(e))
      r.indexOf(n) < 0 && Oc.call(e, n) && (t[n] = e[n]);
  return t;
};
function fy(e) {
  var r = e, {
    styles: t,
    rightSection: n,
    rightSectionWidth: o,
    theme: a
  } = r, i = cy(r, [
    "styles",
    "rightSection",
    "rightSectionWidth",
    "theme"
  ]);
  if (n)
    return { rightSection: n, rightSectionWidth: o, styles: t };
  const s = typeof t == "function" ? t(a) : t;
  return {
    rightSection: !i.readOnly && !(i.disabled && i.shouldClear) && /* @__PURE__ */ w.createElement(wc, Jn({}, i)),
    styles: Ui(Jn({}, s), {
      rightSection: Ui(Jn({}, s == null ? void 0 : s.rightSection), {
        pointerEvents: i.shouldClear ? void 0 : "none"
      })
    })
  };
}
function uy({
  data: e,
  searchable: r,
  limit: t,
  searchValue: n,
  filter: o,
  value: a,
  filterDataOnExactSearchMatch: i
}) {
  if (!r)
    return e;
  const s = a != null && e.find((c) => c.value === a) || null;
  if (s && !i && (s == null ? void 0 : s.label) === n) {
    if (t) {
      if (t >= e.length)
        return e;
      const c = e.indexOf(s), u = c + t, f = u - e.length;
      return f > 0 ? e.slice(c - f) : e.slice(c, u);
    }
    return e;
  }
  const l = [];
  for (let c = 0; c < e.length && (o(n, e[c]) && l.push(e[c]), !(l.length >= t)); c += 1)
    ;
  return l;
}
var dy = pe(() => ({
  input: {
    "&:not(:disabled)": {
      cursor: "pointer",
      "&::selection": {
        backgroundColor: "transparent"
      }
    }
  }
}));
const py = dy;
var my = Object.defineProperty, gy = Object.defineProperties, vy = Object.getOwnPropertyDescriptors, Sn = Object.getOwnPropertySymbols, $c = Object.prototype.hasOwnProperty, Sc = Object.prototype.propertyIsEnumerable, Yi = (e, r, t) => r in e ? my(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, at = (e, r) => {
  for (var t in r || (r = {}))
    $c.call(r, t) && Yi(e, t, r[t]);
  if (Sn)
    for (var t of Sn(r))
      Sc.call(r, t) && Yi(e, t, r[t]);
  return e;
}, Zn = (e, r) => gy(e, vy(r)), hy = (e, r) => {
  var t = {};
  for (var n in e)
    $c.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && Sn)
    for (var n of Sn(e))
      r.indexOf(n) < 0 && Sc.call(e, n) && (t[n] = e[n]);
  return t;
};
function yy(e, r) {
  return r.label.toLowerCase().trim().includes(e.toLowerCase().trim());
}
function by(e, r) {
  return !!e && !r.some((t) => t.label.toLowerCase() === e.toLowerCase());
}
const _y = {
  required: !1,
  size: "sm",
  shadow: "sm",
  itemComponent: ll,
  transitionProps: { transition: "fade", duration: 0 },
  initiallyOpened: !1,
  filter: yy,
  maxDropdownHeight: 220,
  searchable: !1,
  clearable: !1,
  limit: 1 / 0,
  disabled: !1,
  creatable: !1,
  shouldCreate: by,
  selectOnBlur: !1,
  switchDirectionOnFlip: !1,
  filterDataOnExactSearchMatch: !1,
  zIndex: hs("popover"),
  positionDependencies: [],
  dropdownPosition: "flip"
}, xc = L((e, r) => {
  const t = Cv("Select", _y, e), {
    inputProps: n,
    wrapperProps: o,
    shadow: a,
    data: i,
    value: s,
    defaultValue: l,
    onChange: c,
    itemComponent: u,
    onKeyDown: f,
    onBlur: p,
    onFocus: m,
    transitionProps: g,
    initiallyOpened: h,
    unstyled: _,
    classNames: v,
    styles: y,
    filter: O,
    maxDropdownHeight: E,
    searchable: S,
    clearable: R,
    nothingFound: x,
    limit: T,
    disabled: I,
    onSearchChange: N,
    searchValue: A,
    rightSection: z,
    rightSectionWidth: H,
    creatable: K,
    getCreateLabel: X,
    shouldCreate: J,
    selectOnBlur: ce,
    onCreate: fe,
    dropdownComponent: Ee,
    onDropdownClose: ve,
    onDropdownOpen: _e,
    withinPortal: Ce,
    portalProps: Le,
    switchDirectionOnFlip: ur,
    zIndex: dr,
    name: Ye,
    dropdownPosition: Ge,
    allowDeselect: Ie,
    placeholder: Xe,
    filterDataOnExactSearchMatch: qe,
    form: Wr,
    positionDependencies: wr,
    readOnly: De,
    clearButtonProps: Br,
    hoverOnSearchChange: Me
  } = t, Qe = hy(t, [
    "inputProps",
    "wrapperProps",
    "shadow",
    "data",
    "value",
    "defaultValue",
    "onChange",
    "itemComponent",
    "onKeyDown",
    "onBlur",
    "onFocus",
    "transitionProps",
    "initiallyOpened",
    "unstyled",
    "classNames",
    "styles",
    "filter",
    "maxDropdownHeight",
    "searchable",
    "clearable",
    "nothingFound",
    "limit",
    "disabled",
    "onSearchChange",
    "searchValue",
    "rightSection",
    "rightSectionWidth",
    "creatable",
    "getCreateLabel",
    "shouldCreate",
    "selectOnBlur",
    "onCreate",
    "dropdownComponent",
    "onDropdownClose",
    "onDropdownOpen",
    "withinPortal",
    "portalProps",
    "switchDirectionOnFlip",
    "zIndex",
    "name",
    "dropdownPosition",
    "allowDeselect",
    "placeholder",
    "filterDataOnExactSearchMatch",
    "form",
    "positionDependencies",
    "readOnly",
    "clearButtonProps",
    "hoverOnSearchChange"
  ]), { classes: ae, cx: Pr, theme: er } = py(), [Q, kn] = B(h), [we, se] = B(-1), Hr = G(), pr = G({}), [Ur, mr] = B("column"), Ke = Ur === "column", { scrollIntoView: rr, targetRef: Or, scrollableRef: Yr } = td({
    duration: 0,
    offset: 5,
    cancelable: !1,
    isList: !0
  }), zn = Ie === void 0 ? R : Ie, he = (b) => {
    if (Q !== b) {
      kn(b);
      const C = b ? _e : ve;
      typeof C == "function" && C();
    }
  }, Gr = K && typeof X == "function";
  let Xr = null;
  const Ln = i.map((b) => typeof b == "string" ? { label: b, value: b } : b), $r = kc({ data: Ln }), [Pe, Ve, qr] = oo({
    value: s,
    defaultValue: l,
    finalValue: null,
    onChange: c
  }), ue = $r.find((b) => b.value === Pe), [Oe, Kr] = oo({
    value: A,
    defaultValue: (ue == null ? void 0 : ue.label) || "",
    finalValue: void 0,
    onChange: N
  }), Fe = (b) => {
    Kr(b), S && typeof N == "function" && N(b);
  }, Mn = () => {
    var b;
    De || (Ve(null), qr || Fe(""), (b = Hr.current) == null || b.focus());
  };
  q(() => {
    const b = $r.find((C) => C.value === Pe);
    b ? Fe(b.label) : (!Gr || !Pe) && Fe("");
  }, [Pe]), q(() => {
    ue && (!S || !Q) && Fe(ue.label);
  }, [ue == null ? void 0 : ue.label]);
  const gr = (b) => {
    if (!De)
      if (zn && (ue == null ? void 0 : ue.value) === b.value)
        Ve(null), he(!1);
      else {
        if (b.creatable && typeof fe == "function") {
          const C = fe(b.value);
          typeof C < "u" && C !== null && Ve(typeof C == "string" ? C : C.value);
        } else
          Ve(b.value);
        qr || Fe(b.label), se(-1), he(!1), Hr.current.focus();
      }
  }, te = uy({
    data: $r,
    searchable: S,
    limit: T,
    searchValue: Oe,
    filter: O,
    filterDataOnExactSearchMatch: qe,
    value: Pe
  });
  Gr && J(Oe, te) && (Xr = X(Oe), te.push({ label: Oe, value: Oe, creatable: !0 }));
  const Jr = (b, C, D) => {
    let j = b;
    for (; D(j); )
      if (j = C(j), !te[j].disabled)
        return j;
    return b;
  };
  lr(() => {
    se(Me && Oe ? 0 : -1);
  }, [Oe, Me]);
  const tr = Pe ? te.findIndex((b) => b.value === Pe) : 0, $e = !De && (te.length > 0 ? Q : Q && !!x), yt = () => {
    se((b) => {
      var C;
      const D = Jr(b, (j) => j - 1, (j) => j > 0);
      return Or.current = pr.current[(C = te[D]) == null ? void 0 : C.value], $e && rr({ alignment: Ke ? "start" : "end" }), D;
    });
  }, Zr = () => {
    se((b) => {
      var C;
      const D = Jr(b, (j) => j + 1, (j) => j < te.length - 1);
      return Or.current = pr.current[(C = te[D]) == null ? void 0 : C.value], $e && rr({ alignment: Ke ? "end" : "start" }), D;
    });
  }, Sr = () => window.setTimeout(() => {
    var b;
    Or.current = pr.current[(b = te[tr]) == null ? void 0 : b.value], rr({ alignment: Ke ? "end" : "start" });
  }, 0);
  lr(() => {
    $e && Sr();
  }, [$e]);
  const Vn = (b) => {
    switch (typeof f == "function" && f(b), b.key) {
      case "ArrowUp": {
        b.preventDefault(), Q ? Ke ? yt() : Zr() : (se(tr), he(!0), Sr());
        break;
      }
      case "ArrowDown": {
        b.preventDefault(), Q ? Ke ? Zr() : yt() : (se(tr), he(!0), Sr());
        break;
      }
      case "Home": {
        if (!S) {
          b.preventDefault(), Q || he(!0);
          const C = te.findIndex((D) => !D.disabled);
          se(C), $e && rr({ alignment: Ke ? "end" : "start" });
        }
        break;
      }
      case "End": {
        if (!S) {
          b.preventDefault(), Q || he(!0);
          const C = te.map((D) => !!D.disabled).lastIndexOf(!1);
          se(C), $e && rr({ alignment: Ke ? "end" : "start" });
        }
        break;
      }
      case "Escape": {
        b.preventDefault(), he(!1), se(-1);
        break;
      }
      case " ": {
        S || (b.preventDefault(), te[we] && Q ? gr(te[we]) : (he(!0), se(tr), Sr()));
        break;
      }
      case "Enter":
        S || b.preventDefault(), te[we] && Q && (b.preventDefault(), gr(te[we]));
    }
  }, Fn = (b) => {
    typeof p == "function" && p(b);
    const C = $r.find((D) => D.value === Pe);
    ce && te[we] && Q && gr(te[we]), Fe((C == null ? void 0 : C.label) || ""), he(!1);
  }, Wn = (b) => {
    typeof m == "function" && m(b), S && he(!0);
  }, d = (b) => {
    De || (Fe(b.currentTarget.value), R && b.currentTarget.value === "" && Ve(null), se(-1), he(!0));
  }, $ = () => {
    De || (he(!Q), Pe && !Q && se(tr));
  };
  return /* @__PURE__ */ w.createElement(Ai.Wrapper, Zn(at({}, o), {
    __staticSelector: "Select"
  }), /* @__PURE__ */ w.createElement(lt, {
    opened: $e,
    transitionProps: g,
    shadow: a,
    withinPortal: Ce,
    portalProps: Le,
    __staticSelector: "Select",
    onDirectionChange: mr,
    switchDirectionOnFlip: ur,
    zIndex: dr,
    dropdownPosition: Ge,
    positionDependencies: [...wr, Oe],
    classNames: v,
    styles: y,
    unstyled: _,
    variant: n.variant
  }, /* @__PURE__ */ w.createElement(lt.Target, null, /* @__PURE__ */ w.createElement("div", {
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-owns": $e ? `${n.id}-items` : null,
    "aria-controls": n.id,
    "aria-expanded": $e,
    onMouseLeave: () => se(-1),
    tabIndex: -1
  }, /* @__PURE__ */ w.createElement("input", {
    type: "hidden",
    name: Ye,
    value: Pe || "",
    form: Wr,
    disabled: I
  }), /* @__PURE__ */ w.createElement(Ai, at(Zn(at(at({
    autoComplete: "off",
    type: "search"
  }, n), Qe), {
    ref: So(r, Hr),
    onKeyDown: Vn,
    __staticSelector: "Select",
    value: Oe,
    placeholder: Xe,
    onChange: d,
    "aria-autocomplete": "list",
    "aria-controls": $e ? `${n.id}-items` : null,
    "aria-activedescendant": we >= 0 ? `${n.id}-${we}` : null,
    onMouseDown: $,
    onBlur: Fn,
    onFocus: Wn,
    readOnly: !S || De,
    disabled: I,
    "data-mantine-stop-propagation": $e,
    name: null,
    classNames: Zn(at({}, v), {
      input: Pr({ [ae.input]: !S }, v == null ? void 0 : v.input)
    })
  }), fy({
    theme: er,
    rightSection: z,
    rightSectionWidth: H,
    styles: y,
    size: n.size,
    shouldClear: R && !!ue,
    onClear: Mn,
    error: o.error,
    clearButtonProps: Br,
    disabled: I,
    readOnly: De
  }))))), /* @__PURE__ */ w.createElement(lt.Dropdown, {
    component: Ee || Ro,
    maxHeight: E,
    direction: Ur,
    id: n.id,
    innerRef: Yr,
    __staticSelector: "Select",
    classNames: v,
    styles: y
  }, /* @__PURE__ */ w.createElement(al, {
    data: te,
    hovered: we,
    classNames: v,
    styles: y,
    isItemSelected: (b) => b === Pe,
    uuid: n.id,
    __staticSelector: "Select",
    onItemHover: se,
    onItemSelect: gr,
    itemsRefs: pr,
    itemComponent: u,
    size: n.size,
    nothingFound: x,
    creatable: Gr && !!Xr,
    createLabel: Xr,
    "aria-label": o.label,
    unstyled: _,
    variant: n.variant
  }))));
});
xc.displayName = "@mantine/core/Select";
const Lt = "#001D56", Gi = "#FFFFFF";
function $y(e) {
  Ne();
  const { light: r, ...t } = e;
  return /* @__PURE__ */ qi(
    Xh,
    {
      ...t,
      style: {
        backgroundColor: t.disabled ? void 0 : r ? Gi : Lt,
        width: "fit-content",
        color: t.disabled ? void 0 : r ? Lt : Gi,
        opacity: t.disabled ? 0.6 : 1,
        borderColor: r ? Lt : void 0,
        borderWidth: "1px"
      }
    }
  );
}
function Sy(e) {
  return /* @__PURE__ */ qi(
    xc,
    {
      ...e,
      styles: (r) => ({
        item: {
          // applies styles to selected item
          "&[data-selected]": {
            "&, &:hover": {
              backgroundColor: Lt,
              color: r.white
            }
          },
          // applies styles to hovered item (with mouse or keyboard)
          "&[data-hovered]": {}
        }
      })
    }
  );
}
export {
  $y as TBButton,
  Sy as TBSelect
};
//# sourceMappingURL=index.es.js.map
