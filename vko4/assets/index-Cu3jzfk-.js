(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function ah(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var nc = { exports: {} },
  so = {},
  rc = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur = Symbol.for("react.element"),
  uh = Symbol.for("react.portal"),
  ch = Symbol.for("react.fragment"),
  dh = Symbol.for("react.strict_mode"),
  fh = Symbol.for("react.profiler"),
  hh = Symbol.for("react.provider"),
  ph = Symbol.for("react.context"),
  mh = Symbol.for("react.forward_ref"),
  gh = Symbol.for("react.suspense"),
  vh = Symbol.for("react.memo"),
  yh = Symbol.for("react.lazy"),
  va = Symbol.iterator;
function _h(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (va && t[va]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var ic = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  oc = Object.assign,
  sc = {};
function Fn(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = sc),
    (this.updater = n || ic);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Fn.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function lc() {}
lc.prototype = Fn.prototype;
function dl(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = sc),
    (this.updater = n || ic);
}
var fl = (dl.prototype = new lc());
fl.constructor = dl;
oc(fl, Fn.prototype);
fl.isPureReactComponent = !0;
var ya = Array.isArray,
  ac = Object.prototype.hasOwnProperty,
  hl = { current: null },
  uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cc(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (s = e.ref),
    e.key !== void 0 && (o = "" + e.key),
    e))
      ac.call(e, r) && !uc.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ur,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: hl.current,
  };
}
function wh(t, e) {
  return {
    $$typeof: Ur,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function pl(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ur;
}
function Eh(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var _a = /\/+/g;
function Ao(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Eh("" + t.key)
    : e.toString(36);
}
function hi(t, e, n, r, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var s = !1;
  if (t === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Ur:
          case uh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = t),
      (i = i(s)),
      (t = r === "" ? "." + Ao(s, 0) : r),
      ya(i)
        ? ((n = ""),
          t != null && (n = t.replace(_a, "$&/") + "/"),
          hi(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (pl(i) &&
            (i = wh(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(_a, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ya(t)))
    for (var l = 0; l < t.length; l++) {
      o = t[l];
      var a = r + Ao(o, l);
      s += hi(o, e, n, a, i);
    }
  else if (((a = _h(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(o = t.next()).done; )
      (o = o.value), (a = r + Ao(o, l++)), (s += hi(o, e, n, a, i));
  else if (o === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Yr(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    hi(t, r, "", "", function (o) {
      return e.call(n, o, i++);
    }),
    r
  );
}
function Sh(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var ce = { current: null },
  pi = { transition: null },
  kh = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: pi,
    ReactCurrentOwner: hl,
  };
A.Children = {
  map: Yr,
  forEach: function (t, e, n) {
    Yr(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Yr(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Yr(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!pl(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
A.Component = Fn;
A.Fragment = ch;
A.Profiler = fh;
A.PureComponent = dl;
A.StrictMode = dh;
A.Suspense = gh;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
A.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = oc({}, t.props),
    i = t.key,
    o = t.ref,
    s = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (s = hl.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      ac.call(e, a) &&
        !uc.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ur, type: t.type, key: i, ref: o, props: r, _owner: s };
};
A.createContext = function (t) {
  return (
    (t = {
      $$typeof: ph,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: hh, _context: t }),
    (t.Consumer = t)
  );
};
A.createElement = cc;
A.createFactory = function (t) {
  var e = cc.bind(null, t);
  return (e.type = t), e;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (t) {
  return { $$typeof: mh, render: t };
};
A.isValidElement = pl;
A.lazy = function (t) {
  return { $$typeof: yh, _payload: { _status: -1, _result: t }, _init: Sh };
};
A.memo = function (t, e) {
  return { $$typeof: vh, type: t, compare: e === void 0 ? null : e };
};
A.startTransition = function (t) {
  var e = pi.transition;
  pi.transition = {};
  try {
    t();
  } finally {
    pi.transition = e;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (t, e) {
  return ce.current.useCallback(t, e);
};
A.useContext = function (t) {
  return ce.current.useContext(t);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (t) {
  return ce.current.useDeferredValue(t);
};
A.useEffect = function (t, e) {
  return ce.current.useEffect(t, e);
};
A.useId = function () {
  return ce.current.useId();
};
A.useImperativeHandle = function (t, e, n) {
  return ce.current.useImperativeHandle(t, e, n);
};
A.useInsertionEffect = function (t, e) {
  return ce.current.useInsertionEffect(t, e);
};
A.useLayoutEffect = function (t, e) {
  return ce.current.useLayoutEffect(t, e);
};
A.useMemo = function (t, e) {
  return ce.current.useMemo(t, e);
};
A.useReducer = function (t, e, n) {
  return ce.current.useReducer(t, e, n);
};
A.useRef = function (t) {
  return ce.current.useRef(t);
};
A.useState = function (t) {
  return ce.current.useState(t);
};
A.useSyncExternalStore = function (t, e, n) {
  return ce.current.useSyncExternalStore(t, e, n);
};
A.useTransition = function () {
  return ce.current.useTransition();
};
A.version = "18.2.0";
rc.exports = A;
var Rn = rc.exports;
const Ih = ah(Rn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ch = Rn,
  Th = Symbol.for("react.element"),
  Ph = Symbol.for("react.fragment"),
  Rh = Object.prototype.hasOwnProperty,
  Nh = Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Oh = { key: !0, ref: !0, __self: !0, __source: !0 };
function dc(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
  for (r in e) Rh.call(e, r) && !Oh.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: Th,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: Nh.current,
  };
}
so.Fragment = Ph;
so.jsx = dc;
so.jsxs = dc;
nc.exports = so;
var U = nc.exports,
  cs = {},
  fc = { exports: {} },
  Ee = {},
  hc = { exports: {} },
  pc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(k, R) {
    var N = k.length;
    k.push(R);
    e: for (; 0 < N; ) {
      var K = (N - 1) >>> 1,
        X = k[K];
      if (0 < i(X, R)) (k[K] = R), (k[N] = X), (N = K);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var R = k[0],
      N = k.pop();
    if (N !== R) {
      k[0] = N;
      e: for (var K = 0, X = k.length, Gr = X >>> 1; K < Gr; ) {
        var Ut = 2 * (K + 1) - 1,
          Oo = k[Ut],
          zt = Ut + 1,
          Qr = k[zt];
        if (0 > i(Oo, N))
          zt < X && 0 > i(Qr, Oo)
            ? ((k[K] = Qr), (k[zt] = N), (K = zt))
            : ((k[K] = Oo), (k[Ut] = N), (K = Ut));
        else if (zt < X && 0 > i(Qr, N)) (k[K] = Qr), (k[zt] = N), (K = zt);
        else break e;
      }
    }
    return R;
  }
  function i(k, R) {
    var N = k.sortIndex - R.sortIndex;
    return N !== 0 ? N : k.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    t.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    h = 1,
    p = null,
    m = 3,
    y = !1,
    _ = !1,
    w = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(k) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= k)
        r(u), (R.sortIndex = R.expirationTime), e(a, R);
      else break;
      R = n(u);
    }
  }
  function g(k) {
    if (((w = !1), f(k), !_))
      if (n(a) !== null) (_ = !0), Ro(E);
      else {
        var R = n(u);
        R !== null && No(g, R.startTime - k);
      }
  }
  function E(k, R) {
    (_ = !1), w && ((w = !1), d(T), (T = -1)), (y = !0);
    var N = m;
    try {
      for (
        f(R), p = n(a);
        p !== null && (!(p.expirationTime > R) || (k && !Ne()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var X = K(p.expirationTime <= R);
          (R = t.unstable_now()),
            typeof X == "function" ? (p.callback = X) : p === n(a) && r(a),
            f(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Gr = !0;
      else {
        var Ut = n(u);
        Ut !== null && No(g, Ut.startTime - R), (Gr = !1);
      }
      return Gr;
    } finally {
      (p = null), (m = N), (y = !1);
    }
  }
  var I = !1,
    C = null,
    T = -1,
    F = 5,
    O = -1;
  function Ne() {
    return !(t.unstable_now() - O < F);
  }
  function Hn() {
    if (C !== null) {
      var k = t.unstable_now();
      O = k;
      var R = !0;
      try {
        R = C(!0, k);
      } finally {
        R ? Wn() : ((I = !1), (C = null));
      }
    } else I = !1;
  }
  var Wn;
  if (typeof c == "function")
    Wn = function () {
      c(Hn);
    };
  else if (typeof MessageChannel < "u") {
    var ga = new MessageChannel(),
      lh = ga.port2;
    (ga.port1.onmessage = Hn),
      (Wn = function () {
        lh.postMessage(null);
      });
  } else
    Wn = function () {
      x(Hn, 0);
    };
  function Ro(k) {
    (C = k), I || ((I = !0), Wn());
  }
  function No(k, R) {
    T = x(function () {
      k(t.unstable_now());
    }, R);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      _ || y || ((_ = !0), Ro(E));
    }),
    (t.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (k) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var N = m;
      m = R;
      try {
        return k();
      } finally {
        m = N;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var N = m;
      m = k;
      try {
        return R();
      } finally {
        m = N;
      }
    }),
    (t.unstable_scheduleCallback = function (k, R, N) {
      var K = t.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? K + N : K))
          : (N = K),
        k)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = N + X),
        (k = {
          id: h++,
          callback: R,
          priorityLevel: k,
          startTime: N,
          expirationTime: X,
          sortIndex: -1,
        }),
        N > K
          ? ((k.sortIndex = N),
            e(u, k),
            n(a) === null &&
              k === n(u) &&
              (w ? (d(T), (T = -1)) : (w = !0), No(g, N - K)))
          : ((k.sortIndex = X), e(a, k), _ || y || ((_ = !0), Ro(E))),
        k
      );
    }),
    (t.unstable_shouldYield = Ne),
    (t.unstable_wrapCallback = function (k) {
      var R = m;
      return function () {
        var N = m;
        m = R;
        try {
          return k.apply(this, arguments);
        } finally {
          m = N;
        }
      };
    });
})(pc);
hc.exports = pc;
var Ah = hc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mc = Rn,
  we = Ah;
function v(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gc = new Set(),
  mr = {};
function Zt(t, e) {
  Nn(t, e), Nn(t + "Capture", e);
}
function Nn(t, e) {
  for (mr[t] = e, t = 0; t < e.length; t++) gc.add(e[t]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ds = Object.prototype.hasOwnProperty,
  Lh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wa = {},
  Ea = {};
function Dh(t) {
  return ds.call(Ea, t)
    ? !0
    : ds.call(wa, t)
    ? !1
    : Lh.test(t)
    ? (Ea[t] = !0)
    : ((wa[t] = !0), !1);
}
function xh(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Mh(t, e, n, r) {
  if (e === null || typeof e > "u" || xh(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function de(t, e, n, r, i, o, s) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    ne[t] = new de(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  ne[e] = new de(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  ne[t] = new de(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  ne[t] = new de(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    ne[t] = new de(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  ne[t] = new de(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  ne[t] = new de(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  ne[t] = new de(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  ne[t] = new de(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var ml = /[\-:]([a-z])/g;
function gl(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(ml, gl);
    ne[e] = new de(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(ml, gl);
    ne[e] = new de(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(ml, gl);
  ne[e] = new de(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  ne[t] = new de(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  ne[t] = new de(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function vl(t, e, n, r) {
  var i = ne.hasOwnProperty(e) ? ne[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Mh(e, n, i, r) && (n = null),
    r || i === null
      ? Dh(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var ot = mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jr = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  sn = Symbol.for("react.fragment"),
  yl = Symbol.for("react.strict_mode"),
  fs = Symbol.for("react.profiler"),
  vc = Symbol.for("react.provider"),
  yc = Symbol.for("react.context"),
  _l = Symbol.for("react.forward_ref"),
  hs = Symbol.for("react.suspense"),
  ps = Symbol.for("react.suspense_list"),
  wl = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  _c = Symbol.for("react.offscreen"),
  Sa = Symbol.iterator;
function bn(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Sa && t[Sa]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var W = Object.assign,
  Lo;
function Zn(t) {
  if (Lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Lo = (e && e[1]) || "";
    }
  return (
    `
` +
    Lo +
    t
  );
}
var Do = !1;
function xo(t, e) {
  if (!t || Do) return "";
  Do = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Do = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Zn(t) : "";
}
function Uh(t) {
  switch (t.tag) {
    case 5:
      return Zn(t.type);
    case 16:
      return Zn("Lazy");
    case 13:
      return Zn("Suspense");
    case 19:
      return Zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = xo(t.type, !1)), t;
    case 11:
      return (t = xo(t.type.render, !1)), t;
    case 1:
      return (t = xo(t.type, !0)), t;
    default:
      return "";
  }
}
function ms(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case sn:
      return "Fragment";
    case on:
      return "Portal";
    case fs:
      return "Profiler";
    case yl:
      return "StrictMode";
    case hs:
      return "Suspense";
    case ps:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case yc:
        return (t.displayName || "Context") + ".Consumer";
      case vc:
        return (t._context.displayName || "Context") + ".Provider";
      case _l:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case wl:
        return (
          (e = t.displayName || null), e !== null ? e : ms(t.type) || "Memo"
        );
      case at:
        (e = t._payload), (t = t._init);
        try {
          return ms(t(e));
        } catch {}
    }
  return null;
}
function zh(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ms(e);
    case 8:
      return e === yl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Nt(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function wc(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Fh(t) {
  var e = wc(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Xr(t) {
  t._valueTracker || (t._valueTracker = Fh(t));
}
function Ec(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = wc(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Ni(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function gs(t, e) {
  var n = e.checked;
  return W({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function ka(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Nt(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Sc(t, e) {
  (e = e.checked), e != null && vl(t, "checked", e, !1);
}
function vs(t, e) {
  Sc(t, e);
  var n = Nt(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? ys(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && ys(t, e.type, Nt(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Ia(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function ys(t, e, n) {
  (e !== "number" || Ni(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var er = Array.isArray;
function yn(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function _s(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(v(91));
  return W({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Ca(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(v(92));
      if (er(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Nt(n) };
}
function kc(t, e) {
  var n = Nt(e.value),
    r = Nt(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function Ta(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Ic(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ws(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Ic(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var qr,
  Cc = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        qr = qr || document.createElement("div"),
          qr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = qr.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function gr(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jh = ["Webkit", "ms", "Moz", "O"];
Object.keys(or).forEach(function (t) {
  jh.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (or[e] = or[t]);
  });
});
function Tc(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (or.hasOwnProperty(t) && or[t])
    ? ("" + e).trim()
    : e + "px";
}
function Pc(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Tc(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var Bh = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Es(t, e) {
  if (e) {
    if (Bh[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(v(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(v(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(v(62));
  }
}
function Ss(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ks = null;
function El(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var Is = null,
  _n = null,
  wn = null;
function Pa(t) {
  if ((t = jr(t))) {
    if (typeof Is != "function") throw Error(v(280));
    var e = t.stateNode;
    e && ((e = fo(e)), Is(t.stateNode, t.type, e));
  }
}
function Rc(t) {
  _n ? (wn ? wn.push(t) : (wn = [t])) : (_n = t);
}
function Nc() {
  if (_n) {
    var t = _n,
      e = wn;
    if (((wn = _n = null), Pa(t), e)) for (t = 0; t < e.length; t++) Pa(e[t]);
  }
}
function Oc(t, e) {
  return t(e);
}
function Ac() {}
var Mo = !1;
function Lc(t, e, n) {
  if (Mo) return t(e, n);
  Mo = !0;
  try {
    return Oc(t, e, n);
  } finally {
    (Mo = !1), (_n !== null || wn !== null) && (Ac(), Nc());
  }
}
function vr(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = fo(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(v(231, e, typeof n));
  return n;
}
var Cs = !1;
if (et)
  try {
    var Kn = {};
    Object.defineProperty(Kn, "passive", {
      get: function () {
        Cs = !0;
      },
    }),
      window.addEventListener("test", Kn, Kn),
      window.removeEventListener("test", Kn, Kn);
  } catch {
    Cs = !1;
  }
function $h(t, e, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var sr = !1,
  Oi = null,
  Ai = !1,
  Ts = null,
  Vh = {
    onError: function (t) {
      (sr = !0), (Oi = t);
    },
  };
function Hh(t, e, n, r, i, o, s, l, a) {
  (sr = !1), (Oi = null), $h.apply(Vh, arguments);
}
function Wh(t, e, n, r, i, o, s, l, a) {
  if ((Hh.apply(this, arguments), sr)) {
    if (sr) {
      var u = Oi;
      (sr = !1), (Oi = null);
    } else throw Error(v(198));
    Ai || ((Ai = !0), (Ts = u));
  }
}
function en(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Dc(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Ra(t) {
  if (en(t) !== t) throw Error(v(188));
}
function bh(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = en(t)), e === null)) throw Error(v(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Ra(i), t;
        if (o === r) return Ra(i), e;
        o = o.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? t : e;
}
function xc(t) {
  return (t = bh(t)), t !== null ? Mc(t) : null;
}
function Mc(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Mc(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Uc = we.unstable_scheduleCallback,
  Na = we.unstable_cancelCallback,
  Kh = we.unstable_shouldYield,
  Gh = we.unstable_requestPaint,
  G = we.unstable_now,
  Qh = we.unstable_getCurrentPriorityLevel,
  Sl = we.unstable_ImmediatePriority,
  zc = we.unstable_UserBlockingPriority,
  Li = we.unstable_NormalPriority,
  Yh = we.unstable_LowPriority,
  Fc = we.unstable_IdlePriority,
  lo = null,
  $e = null;
function Jh(t) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(lo, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var xe = Math.clz32 ? Math.clz32 : Zh,
  Xh = Math.log,
  qh = Math.LN2;
function Zh(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Xh(t) / qh) | 0)) | 0;
}
var Zr = 64,
  ei = 4194304;
function tr(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Di(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = tr(l)) : ((o &= s), o !== 0 && (r = tr(o)));
  } else (s = n & ~i), s !== 0 ? (r = tr(s)) : o !== 0 && (r = tr(o));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - xe(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function ep(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tp(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var s = 31 - xe(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = ep(l, e))
      : a <= e && (t.expiredLanes |= l),
      (o &= ~l);
  }
}
function Ps(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function jc() {
  var t = Zr;
  return (Zr <<= 1), !(Zr & 4194240) && (Zr = 64), t;
}
function Uo(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function zr(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - xe(e)),
    (t[e] = n);
}
function np(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - xe(n),
      o = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
  }
}
function kl(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - xe(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var D = 0;
function Bc(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $c,
  Il,
  Vc,
  Hc,
  Wc,
  Rs = !1,
  ti = [],
  yt = null,
  _t = null,
  wt = null,
  yr = new Map(),
  _r = new Map(),
  ct = [],
  rp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Oa(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      yt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      yr.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(e.pointerId);
  }
}
function Gn(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      e !== null && ((e = jr(e)), e !== null && Il(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function ip(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (yt = Gn(yt, t, e, n, r, i)), !0;
    case "dragenter":
      return (_t = Gn(_t, t, e, n, r, i)), !0;
    case "mouseover":
      return (wt = Gn(wt, t, e, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return yr.set(o, Gn(yr.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), _r.set(o, Gn(_r.get(o) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function bc(t) {
  var e = $t(t.target);
  if (e !== null) {
    var n = en(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Dc(n)), e !== null)) {
          (t.blockedOn = e),
            Wc(t.priority, function () {
              Vc(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function mi(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Ns(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ks = r), n.target.dispatchEvent(r), (ks = null);
    } else return (e = jr(n)), e !== null && Il(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Aa(t, e, n) {
  mi(t) && n.delete(e);
}
function op() {
  (Rs = !1),
    yt !== null && mi(yt) && (yt = null),
    _t !== null && mi(_t) && (_t = null),
    wt !== null && mi(wt) && (wt = null),
    yr.forEach(Aa),
    _r.forEach(Aa);
}
function Qn(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Rs ||
      ((Rs = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, op)));
}
function wr(t) {
  function e(i) {
    return Qn(i, t);
  }
  if (0 < ti.length) {
    Qn(ti[0], t);
    for (var n = 1; n < ti.length; n++) {
      var r = ti[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    yt !== null && Qn(yt, t),
      _t !== null && Qn(_t, t),
      wt !== null && Qn(wt, t),
      yr.forEach(e),
      _r.forEach(e),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    bc(n), n.blockedOn === null && ct.shift();
}
var En = ot.ReactCurrentBatchConfig,
  xi = !0;
function sp(t, e, n, r) {
  var i = D,
    o = En.transition;
  En.transition = null;
  try {
    (D = 1), Cl(t, e, n, r);
  } finally {
    (D = i), (En.transition = o);
  }
}
function lp(t, e, n, r) {
  var i = D,
    o = En.transition;
  En.transition = null;
  try {
    (D = 4), Cl(t, e, n, r);
  } finally {
    (D = i), (En.transition = o);
  }
}
function Cl(t, e, n, r) {
  if (xi) {
    var i = Ns(t, e, n, r);
    if (i === null) Ko(t, e, r, Mi, n), Oa(t, r);
    else if (ip(i, t, e, n, r)) r.stopPropagation();
    else if ((Oa(t, r), e & 4 && -1 < rp.indexOf(t))) {
      for (; i !== null; ) {
        var o = jr(i);
        if (
          (o !== null && $c(o),
          (o = Ns(t, e, n, r)),
          o === null && Ko(t, e, r, Mi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ko(t, e, r, null, n);
  }
}
var Mi = null;
function Ns(t, e, n, r) {
  if (((Mi = null), (t = El(r)), (t = $t(t)), t !== null))
    if (((e = en(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Dc(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Mi = t), null;
}
function Kc(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qh()) {
        case Sl:
          return 1;
        case zc:
          return 4;
        case Li:
        case Yh:
          return 16;
        case Fc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gt = null,
  Tl = null,
  gi = null;
function Gc() {
  if (gi) return gi;
  var t,
    e = Tl,
    n = e.length,
    r,
    i = "value" in gt ? gt.value : gt.textContent,
    o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var s = n - t;
  for (r = 1; r <= s && e[n - r] === i[o - r]; r++);
  return (gi = i.slice(t, 1 < r ? 1 - r : void 0));
}
function vi(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ni() {
  return !0;
}
function La() {
  return !1;
}
function Se(t) {
  function e(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ni
        : La),
      (this.isPropagationStopped = La),
      this
    );
  }
  return (
    W(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ni));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ni));
      },
      persist: function () {},
      isPersistent: ni,
    }),
    e
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pl = Se(jn),
  Fr = W({}, jn, { view: 0, detail: 0 }),
  ap = Se(Fr),
  zo,
  Fo,
  Yn,
  ao = W({}, Fr, {
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
    getModifierState: Rl,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Yn &&
            (Yn && t.type === "mousemove"
              ? ((zo = t.screenX - Yn.screenX), (Fo = t.screenY - Yn.screenY))
              : (Fo = zo = 0),
            (Yn = t)),
          zo);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Fo;
    },
  }),
  Da = Se(ao),
  up = W({}, ao, { dataTransfer: 0 }),
  cp = Se(up),
  dp = W({}, Fr, { relatedTarget: 0 }),
  jo = Se(dp),
  fp = W({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hp = Se(fp),
  pp = W({}, jn, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  mp = Se(pp),
  gp = W({}, jn, { data: 0 }),
  xa = Se(gp),
  vp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  yp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _p = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wp(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = _p[t]) ? !!e[t] : !1;
}
function Rl() {
  return wp;
}
var Ep = W({}, Fr, {
    key: function (t) {
      if (t.key) {
        var e = vp[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = vi(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? yp[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rl,
    charCode: function (t) {
      return t.type === "keypress" ? vi(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? vi(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  Sp = Se(Ep),
  kp = W({}, ao, {
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
  Ma = Se(kp),
  Ip = W({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rl,
  }),
  Cp = Se(Ip),
  Tp = W({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Pp = Se(Tp),
  Rp = W({}, ao, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Np = Se(Rp),
  Op = [9, 13, 27, 32],
  Nl = et && "CompositionEvent" in window,
  lr = null;
et && "documentMode" in document && (lr = document.documentMode);
var Ap = et && "TextEvent" in window && !lr,
  Qc = et && (!Nl || (lr && 8 < lr && 11 >= lr)),
  Ua = " ",
  za = !1;
function Yc(t, e) {
  switch (t) {
    case "keyup":
      return Op.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jc(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var ln = !1;
function Lp(t, e) {
  switch (t) {
    case "compositionend":
      return Jc(e);
    case "keypress":
      return e.which !== 32 ? null : ((za = !0), Ua);
    case "textInput":
      return (t = e.data), t === Ua && za ? null : t;
    default:
      return null;
  }
}
function Dp(t, e) {
  if (ln)
    return t === "compositionend" || (!Nl && Yc(t, e))
      ? ((t = Gc()), (gi = Tl = gt = null), (ln = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Qc && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var xp = {
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
};
function Fa(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!xp[t.type] : e === "textarea";
}
function Xc(t, e, n, r) {
  Rc(r),
    (e = Ui(e, "onChange")),
    0 < e.length &&
      ((n = new Pl("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var ar = null,
  Er = null;
function Mp(t) {
  ad(t, 0);
}
function uo(t) {
  var e = cn(t);
  if (Ec(e)) return t;
}
function Up(t, e) {
  if (t === "change") return e;
}
var qc = !1;
if (et) {
  var Bo;
  if (et) {
    var $o = "oninput" in document;
    if (!$o) {
      var ja = document.createElement("div");
      ja.setAttribute("oninput", "return;"),
        ($o = typeof ja.oninput == "function");
    }
    Bo = $o;
  } else Bo = !1;
  qc = Bo && (!document.documentMode || 9 < document.documentMode);
}
function Ba() {
  ar && (ar.detachEvent("onpropertychange", Zc), (Er = ar = null));
}
function Zc(t) {
  if (t.propertyName === "value" && uo(Er)) {
    var e = [];
    Xc(e, Er, t, El(t)), Lc(Mp, e);
  }
}
function zp(t, e, n) {
  t === "focusin"
    ? (Ba(), (ar = e), (Er = n), ar.attachEvent("onpropertychange", Zc))
    : t === "focusout" && Ba();
}
function Fp(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return uo(Er);
}
function jp(t, e) {
  if (t === "click") return uo(e);
}
function Bp(t, e) {
  if (t === "input" || t === "change") return uo(e);
}
function $p(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Ue = typeof Object.is == "function" ? Object.is : $p;
function Sr(t, e) {
  if (Ue(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ds.call(e, i) || !Ue(t[i], e[i])) return !1;
  }
  return !0;
}
function $a(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Va(t, e) {
  var n = $a(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $a(n);
  }
}
function ed(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? ed(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function td() {
  for (var t = window, e = Ni(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Ni(t.document);
  }
  return e;
}
function Ol(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Vp(t) {
  var e = td(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    ed(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ol(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Va(n, o));
        var s = Va(n, r);
        i &&
          s &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== s.node ||
            t.focusOffset !== s.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > r
            ? (t.addRange(e), t.extend(s.node, s.offset))
            : (e.setEnd(s.node, s.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Hp = et && "documentMode" in document && 11 >= document.documentMode,
  an = null,
  Os = null,
  ur = null,
  As = !1;
function Ha(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  As ||
    an == null ||
    an !== Ni(r) ||
    ((r = an),
    "selectionStart" in r && Ol(r)
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
    (ur && Sr(ur, r)) ||
      ((ur = r),
      (r = Ui(Os, "onSelect")),
      0 < r.length &&
        ((e = new Pl("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = an))));
}
function ri(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var un = {
    animationend: ri("Animation", "AnimationEnd"),
    animationiteration: ri("Animation", "AnimationIteration"),
    animationstart: ri("Animation", "AnimationStart"),
    transitionend: ri("Transition", "TransitionEnd"),
  },
  Vo = {},
  nd = {};
et &&
  ((nd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete un.animationend.animation,
    delete un.animationiteration.animation,
    delete un.animationstart.animation),
  "TransitionEvent" in window || delete un.transitionend.transition);
function co(t) {
  if (Vo[t]) return Vo[t];
  if (!un[t]) return t;
  var e = un[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in nd) return (Vo[t] = e[n]);
  return t;
}
var rd = co("animationend"),
  id = co("animationiteration"),
  od = co("animationstart"),
  sd = co("transitionend"),
  ld = new Map(),
  Wa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function At(t, e) {
  ld.set(t, e), Zt(e, [t]);
}
for (var Ho = 0; Ho < Wa.length; Ho++) {
  var Wo = Wa[Ho],
    Wp = Wo.toLowerCase(),
    bp = Wo[0].toUpperCase() + Wo.slice(1);
  At(Wp, "on" + bp);
}
At(rd, "onAnimationEnd");
At(id, "onAnimationIteration");
At(od, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(sd, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var nr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));
function ba(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), Wh(r, e, void 0, t), (t.currentTarget = null);
}
function ad(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          ba(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          ba(i, l, u), (o = a);
        }
    }
  }
  if (Ai) throw ((t = Ts), (Ai = !1), (Ts = null), t);
}
function j(t, e) {
  var n = e[Us];
  n === void 0 && (n = e[Us] = new Set());
  var r = t + "__bubble";
  n.has(r) || (ud(e, t, 2, !1), n.add(r));
}
function bo(t, e, n) {
  var r = 0;
  e && (r |= 4), ud(n, t, r, e);
}
var ii = "_reactListening" + Math.random().toString(36).slice(2);
function kr(t) {
  if (!t[ii]) {
    (t[ii] = !0),
      gc.forEach(function (n) {
        n !== "selectionchange" && (Kp.has(n) || bo(n, !1, t), bo(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[ii] || ((e[ii] = !0), bo("selectionchange", !1, e));
  }
}
function ud(t, e, n, r) {
  switch (Kc(e)) {
    case 1:
      var i = sp;
      break;
    case 4:
      i = lp;
      break;
    default:
      i = Cl;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Cs ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Ko(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = $t(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Lc(function () {
    var u = o,
      h = El(n),
      p = [];
    e: {
      var m = ld.get(t);
      if (m !== void 0) {
        var y = Pl,
          _ = t;
        switch (t) {
          case "keypress":
            if (vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Sp;
            break;
          case "focusin":
            (_ = "focus"), (y = jo);
            break;
          case "focusout":
            (_ = "blur"), (y = jo);
            break;
          case "beforeblur":
          case "afterblur":
            y = jo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Da;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Cp;
            break;
          case rd:
          case id:
          case od:
            y = hp;
            break;
          case sd:
            y = Pp;
            break;
          case "scroll":
            y = ap;
            break;
          case "wheel":
            y = Np;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ma;
        }
        var w = (e & 4) !== 0,
          x = !w && t === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = vr(c, d)), g != null && w.push(Ir(c, g, f)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new y(m, _, null, n, h)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((m = t === "mouseover" || t === "pointerover"),
          (y = t === "mouseout" || t === "pointerout"),
          m &&
            n !== ks &&
            (_ = n.relatedTarget || n.fromElement) &&
            ($t(_) || _[tt]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((_ = n.relatedTarget || n.toElement),
              (y = u),
              (_ = _ ? $t(_) : null),
              _ !== null &&
                ((x = en(_)), _ !== x || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((y = null), (_ = u)),
          y !== _)
        ) {
          if (
            ((w = Da),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((w = Ma),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (x = y == null ? m : cn(y)),
            (f = _ == null ? m : cn(_)),
            (m = new w(g, c + "leave", y, n, h)),
            (m.target = x),
            (m.relatedTarget = f),
            (g = null),
            $t(h) === u &&
              ((w = new w(d, c + "enter", _, n, h)),
              (w.target = f),
              (w.relatedTarget = x),
              (g = w)),
            (x = g),
            y && _)
          )
            t: {
              for (w = y, d = _, c = 0, f = w; f; f = rn(f)) c++;
              for (f = 0, g = d; g; g = rn(g)) f++;
              for (; 0 < c - f; ) (w = rn(w)), c--;
              for (; 0 < f - c; ) (d = rn(d)), f--;
              for (; c--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = rn(w)), (d = rn(d));
              }
              w = null;
            }
          else w = null;
          y !== null && Ka(p, m, y, w, !1),
            _ !== null && x !== null && Ka(p, x, _, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? cn(u) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var E = Up;
        else if (Fa(m))
          if (qc) E = Bp;
          else {
            E = Fp;
            var I = zp;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = jp);
        if (E && (E = E(t, u))) {
          Xc(p, E, n, h);
          break e;
        }
        I && I(t, m, u),
          t === "focusout" &&
            (I = m._wrapperState) &&
            I.controlled &&
            m.type === "number" &&
            ys(m, "number", m.value);
      }
      switch (((I = u ? cn(u) : window), t)) {
        case "focusin":
          (Fa(I) || I.contentEditable === "true") &&
            ((an = I), (Os = u), (ur = null));
          break;
        case "focusout":
          ur = Os = an = null;
          break;
        case "mousedown":
          As = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (As = !1), Ha(p, n, h);
          break;
        case "selectionchange":
          if (Hp) break;
        case "keydown":
        case "keyup":
          Ha(p, n, h);
      }
      var C;
      if (Nl)
        e: {
          switch (t) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        ln
          ? Yc(t, n) && (T = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Qc &&
          n.locale !== "ko" &&
          (ln || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && ln && (C = Gc())
            : ((gt = h),
              (Tl = "value" in gt ? gt.value : gt.textContent),
              (ln = !0))),
        (I = Ui(u, T)),
        0 < I.length &&
          ((T = new xa(T, t, null, n, h)),
          p.push({ event: T, listeners: I }),
          C ? (T.data = C) : ((C = Jc(n)), C !== null && (T.data = C)))),
        (C = Ap ? Lp(t, n) : Dp(t, n)) &&
          ((u = Ui(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new xa("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: u }),
            (h.data = C)));
    }
    ad(p, e);
  });
}
function Ir(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ui(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = vr(t, n)),
      o != null && r.unshift(Ir(t, o, i)),
      (o = vr(t, e)),
      o != null && r.push(Ir(t, o, i))),
      (t = t.return);
  }
  return r;
}
function rn(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Ka(t, e, n, r, i) {
  for (var o = e._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = vr(n, o)), a != null && s.unshift(Ir(n, a, l)))
        : i || ((a = vr(n, o)), a != null && s.push(Ir(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && t.push({ event: e, listeners: s });
}
var Gp = /\r\n?/g,
  Qp = /\u0000|\uFFFD/g;
function Ga(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Gp,
      `
`
    )
    .replace(Qp, "");
}
function oi(t, e, n) {
  if (((e = Ga(e)), Ga(t) !== e && n)) throw Error(v(425));
}
function zi() {}
var Ls = null,
  Ds = null;
function xs(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Ms = typeof setTimeout == "function" ? setTimeout : void 0,
  Yp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qa = typeof Promise == "function" ? Promise : void 0,
  Jp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qa < "u"
      ? function (t) {
          return Qa.resolve(null).then(t).catch(Xp);
        }
      : Ms;
function Xp(t) {
  setTimeout(function () {
    throw t;
  });
}
function Go(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), wr(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  wr(e);
}
function Et(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Ya(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Bn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Bn,
  Cr = "__reactProps$" + Bn,
  tt = "__reactContainer$" + Bn,
  Us = "__reactEvents$" + Bn,
  qp = "__reactListeners$" + Bn,
  Zp = "__reactHandles$" + Bn;
function $t(t) {
  var e = t[Be];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[tt] || n[Be])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Ya(t); t !== null; ) {
          if ((n = t[Be])) return n;
          t = Ya(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function jr(t) {
  return (
    (t = t[Be] || t[tt]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function cn(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(v(33));
}
function fo(t) {
  return t[Cr] || null;
}
var zs = [],
  dn = -1;
function Lt(t) {
  return { current: t };
}
function B(t) {
  0 > dn || ((t.current = zs[dn]), (zs[dn] = null), dn--);
}
function z(t, e) {
  dn++, (zs[dn] = t.current), (t.current = e);
}
var Ot = {},
  se = Lt(Ot),
  pe = Lt(!1),
  Kt = Ot;
function On(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Ot;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = e[o];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function me(t) {
  return (t = t.childContextTypes), t != null;
}
function Fi() {
  B(pe), B(se);
}
function Ja(t, e, n) {
  if (se.current !== Ot) throw Error(v(168));
  z(se, e), z(pe, n);
}
function cd(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(v(108, zh(t) || "Unknown", i));
  return W({}, n, r);
}
function ji(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Ot),
    (Kt = se.current),
    z(se, t),
    z(pe, pe.current),
    !0
  );
}
function Xa(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((t = cd(t, e, Kt)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      B(pe),
      B(se),
      z(se, t))
    : B(pe),
    z(pe, n);
}
var Ke = null,
  ho = !1,
  Qo = !1;
function dd(t) {
  Ke === null ? (Ke = [t]) : Ke.push(t);
}
function em(t) {
  (ho = !0), dd(t);
}
function Dt() {
  if (!Qo && Ke !== null) {
    Qo = !0;
    var t = 0,
      e = D;
    try {
      var n = Ke;
      for (D = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (Ke = null), (ho = !1);
    } catch (i) {
      throw (Ke !== null && (Ke = Ke.slice(t + 1)), Uc(Sl, Dt), i);
    } finally {
      (D = e), (Qo = !1);
    }
  }
  return null;
}
var fn = [],
  hn = 0,
  Bi = null,
  $i = 0,
  ke = [],
  Ie = 0,
  Gt = null,
  Ge = 1,
  Qe = "";
function Ft(t, e) {
  (fn[hn++] = $i), (fn[hn++] = Bi), (Bi = t), ($i = e);
}
function fd(t, e, n) {
  (ke[Ie++] = Ge), (ke[Ie++] = Qe), (ke[Ie++] = Gt), (Gt = t);
  var r = Ge;
  t = Qe;
  var i = 32 - xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - xe(e) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ge = (1 << (32 - xe(e) + i)) | (n << i) | r),
      (Qe = o + t);
  } else (Ge = (1 << o) | (n << i) | r), (Qe = t);
}
function Al(t) {
  t.return !== null && (Ft(t, 1), fd(t, 1, 0));
}
function Ll(t) {
  for (; t === Bi; )
    (Bi = fn[--hn]), (fn[hn] = null), ($i = fn[--hn]), (fn[hn] = null);
  for (; t === Gt; )
    (Gt = ke[--Ie]),
      (ke[Ie] = null),
      (Qe = ke[--Ie]),
      (ke[Ie] = null),
      (Ge = ke[--Ie]),
      (ke[Ie] = null);
}
var _e = null,
  ye = null,
  $ = !1,
  De = null;
function hd(t, e) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function qa(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (_e = t), (ye = Et(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (_e = t), (ye = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Gt !== null ? { id: Ge, overflow: Qe } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (_e = t),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fs(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function js(t) {
  if ($) {
    var e = ye;
    if (e) {
      var n = e;
      if (!qa(t, e)) {
        if (Fs(t)) throw Error(v(418));
        e = Et(n.nextSibling);
        var r = _e;
        e && qa(t, e)
          ? hd(r, n)
          : ((t.flags = (t.flags & -4097) | 2), ($ = !1), (_e = t));
      }
    } else {
      if (Fs(t)) throw Error(v(418));
      (t.flags = (t.flags & -4097) | 2), ($ = !1), (_e = t);
    }
  }
}
function Za(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  _e = t;
}
function si(t) {
  if (t !== _e) return !1;
  if (!$) return Za(t), ($ = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !xs(t.type, t.memoizedProps))),
    e && (e = ye))
  ) {
    if (Fs(t)) throw (pd(), Error(v(418)));
    for (; e; ) hd(t, e), (e = Et(e.nextSibling));
  }
  if ((Za(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(v(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              ye = Et(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      ye = null;
    }
  } else ye = _e ? Et(t.stateNode.nextSibling) : null;
  return !0;
}
function pd() {
  for (var t = ye; t; ) t = Et(t.nextSibling);
}
function An() {
  (ye = _e = null), ($ = !1);
}
function Dl(t) {
  De === null ? (De = [t]) : De.push(t);
}
var tm = ot.ReactCurrentBatchConfig;
function Ae(t, e) {
  if (t && t.defaultProps) {
    (e = W({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Vi = Lt(null),
  Hi = null,
  pn = null,
  xl = null;
function Ml() {
  xl = pn = Hi = null;
}
function Ul(t) {
  var e = Vi.current;
  B(Vi), (t._currentValue = e);
}
function Bs(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Sn(t, e) {
  (Hi = t),
    (xl = pn = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (he = !0), (t.firstContext = null));
}
function Pe(t) {
  var e = t._currentValue;
  if (xl !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), pn === null)) {
      if (Hi === null) throw Error(v(308));
      (pn = t), (Hi.dependencies = { lanes: 0, firstContext: t });
    } else pn = pn.next = t;
  return e;
}
var Vt = null;
function zl(t) {
  Vt === null ? (Vt = [t]) : Vt.push(t);
}
function md(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), zl(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    nt(t, r)
  );
}
function nt(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Fl(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gd(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Ze(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      nt(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), zl(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    nt(t, n)
  );
}
function yi(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), kl(t, n);
  }
}
function eu(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Wi(t, e, n, r) {
  var i = t.updateQueue;
  ut = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var h = t.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (l = h.lastBaseUpdate),
      l !== s &&
        (l === null ? (h.firstBaseUpdate = u) : (l.next = u),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (h = u = a = null), (l = o);
    do {
      var m = l.lane,
        y = l.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = t,
            w = l;
          switch (((m = e), (y = n), w.tag)) {
            case 1:
              if (((_ = w.payload), typeof _ == "function")) {
                p = _.call(y, p, m);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = w.payload),
                (m = typeof _ == "function" ? _.call(y, p, m) : _),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          h === null ? ((u = h = y), (a = p)) : (h = h.next = y),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = h),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (s |= i.lane), (i = i.next);
      while (i !== e);
    } else o === null && (i.shared.lanes = 0);
    (Yt |= s), (t.lanes = s), (t.memoizedState = p);
  }
}
function tu(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(v(191, i));
        i.call(r);
      }
    }
}
var vd = new mc.Component().refs;
function $s(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : W({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var po = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? en(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = ue(),
      i = It(t),
      o = Ze(r, i);
    (o.payload = e),
      n != null && (o.callback = n),
      (e = St(t, o, i)),
      e !== null && (Me(e, t, i, r), yi(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = ue(),
      i = It(t),
      o = Ze(r, i);
    (o.tag = 1),
      (o.payload = e),
      n != null && (o.callback = n),
      (e = St(t, o, i)),
      e !== null && (Me(e, t, i, r), yi(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = ue(),
      r = It(t),
      i = Ze(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = St(t, i, r)),
      e !== null && (Me(e, t, r, n), yi(e, t, r));
  },
};
function nu(t, e, n, r, i, o, s) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, o, s)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Sr(n, r) || !Sr(i, o)
      : !0
  );
}
function yd(t, e, n) {
  var r = !1,
    i = Ot,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Pe(o))
      : ((i = me(e) ? Kt : se.current),
        (r = e.contextTypes),
        (o = (r = r != null) ? On(t, i) : Ot)),
    (e = new e(n, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = po),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function ru(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && po.enqueueReplaceState(e, e.state, null);
}
function Vs(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = vd), Fl(t);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Pe(o))
    : ((o = me(e) ? Kt : se.current), (i.context = On(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && ($s(t, e, o, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && po.enqueueReplaceState(i, i.state, null),
      Wi(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function Jn(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, t));
      var i = r,
        o = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (s) {
            var l = i.refs;
            l === vd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (e._stringRef = o),
          e);
    }
    if (typeof t != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, t));
  }
  return t;
}
function li(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      v(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function iu(t) {
  var e = t._init;
  return e(t._payload);
}
function _d(t) {
  function e(d, c) {
    if (t) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!t) return null;
    for (; c !== null; ) e(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = Ct(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      t
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function s(d) {
    return t && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, f, g) {
    return c === null || c.tag !== 6
      ? ((c = ts(f, d.mode, g)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function a(d, c, f, g) {
    var E = f.type;
    return E === sn
      ? h(d, c, f.props.children, g, f.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === at &&
            iu(E) === c.type))
      ? ((g = i(c, f.props)), (g.ref = Jn(d, c, f)), (g.return = d), g)
      : ((g = Ii(f.type, f.key, f.props, null, d.mode, g)),
        (g.ref = Jn(d, c, f)),
        (g.return = d),
        g);
  }
  function u(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = ns(f, d.mode, g)), (c.return = d), c)
      : ((c = i(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, g, E) {
    return c === null || c.tag !== 7
      ? ((c = bt(f, d.mode, g, E)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function p(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ts("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Jr:
          return (
            (f = Ii(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Jn(d, null, c)),
            (f.return = d),
            f
          );
        case on:
          return (c = ns(c, d.mode, f)), (c.return = d), c;
        case at:
          var g = c._init;
          return p(d, g(c._payload), f);
      }
      if (er(c) || bn(c))
        return (c = bt(c, d.mode, f, null)), (c.return = d), c;
      li(d, c);
    }
    return null;
  }
  function m(d, c, f, g) {
    var E = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : l(d, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Jr:
          return f.key === E ? a(d, c, f, g) : null;
        case on:
          return f.key === E ? u(d, c, f, g) : null;
        case at:
          return (E = f._init), m(d, c, E(f._payload), g);
      }
      if (er(f) || bn(f)) return E !== null ? null : h(d, c, f, g, null);
      li(d, f);
    }
    return null;
  }
  function y(d, c, f, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(f) || null), l(c, d, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Jr:
          return (d = d.get(g.key === null ? f : g.key) || null), a(c, d, g, E);
        case on:
          return (d = d.get(g.key === null ? f : g.key) || null), u(c, d, g, E);
        case at:
          var I = g._init;
          return y(d, c, f, I(g._payload), E);
      }
      if (er(g) || bn(g)) return (d = d.get(f) || null), h(c, d, g, E, null);
      li(c, g);
    }
    return null;
  }
  function _(d, c, f, g) {
    for (
      var E = null, I = null, C = c, T = (c = 0), F = null;
      C !== null && T < f.length;
      T++
    ) {
      C.index > T ? ((F = C), (C = null)) : (F = C.sibling);
      var O = m(d, C, f[T], g);
      if (O === null) {
        C === null && (C = F);
        break;
      }
      t && C && O.alternate === null && e(d, C),
        (c = o(O, c, T)),
        I === null ? (E = O) : (I.sibling = O),
        (I = O),
        (C = F);
    }
    if (T === f.length) return n(d, C), $ && Ft(d, T), E;
    if (C === null) {
      for (; T < f.length; T++)
        (C = p(d, f[T], g)),
          C !== null &&
            ((c = o(C, c, T)), I === null ? (E = C) : (I.sibling = C), (I = C));
      return $ && Ft(d, T), E;
    }
    for (C = r(d, C); T < f.length; T++)
      (F = y(C, d, T, f[T], g)),
        F !== null &&
          (t && F.alternate !== null && C.delete(F.key === null ? T : F.key),
          (c = o(F, c, T)),
          I === null ? (E = F) : (I.sibling = F),
          (I = F));
    return (
      t &&
        C.forEach(function (Ne) {
          return e(d, Ne);
        }),
      $ && Ft(d, T),
      E
    );
  }
  function w(d, c, f, g) {
    var E = bn(f);
    if (typeof E != "function") throw Error(v(150));
    if (((f = E.call(f)), f == null)) throw Error(v(151));
    for (
      var I = (E = null), C = c, T = (c = 0), F = null, O = f.next();
      C !== null && !O.done;
      T++, O = f.next()
    ) {
      C.index > T ? ((F = C), (C = null)) : (F = C.sibling);
      var Ne = m(d, C, O.value, g);
      if (Ne === null) {
        C === null && (C = F);
        break;
      }
      t && C && Ne.alternate === null && e(d, C),
        (c = o(Ne, c, T)),
        I === null ? (E = Ne) : (I.sibling = Ne),
        (I = Ne),
        (C = F);
    }
    if (O.done) return n(d, C), $ && Ft(d, T), E;
    if (C === null) {
      for (; !O.done; T++, O = f.next())
        (O = p(d, O.value, g)),
          O !== null &&
            ((c = o(O, c, T)), I === null ? (E = O) : (I.sibling = O), (I = O));
      return $ && Ft(d, T), E;
    }
    for (C = r(d, C); !O.done; T++, O = f.next())
      (O = y(C, d, T, O.value, g)),
        O !== null &&
          (t && O.alternate !== null && C.delete(O.key === null ? T : O.key),
          (c = o(O, c, T)),
          I === null ? (E = O) : (I.sibling = O),
          (I = O));
    return (
      t &&
        C.forEach(function (Hn) {
          return e(d, Hn);
        }),
      $ && Ft(d, T),
      E
    );
  }
  function x(d, c, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === sn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Jr:
          e: {
            for (var E = f.key, I = c; I !== null; ) {
              if (I.key === E) {
                if (((E = f.type), E === sn)) {
                  if (I.tag === 7) {
                    n(d, I.sibling),
                      (c = i(I, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  I.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === at &&
                    iu(E) === I.type)
                ) {
                  n(d, I.sibling),
                    (c = i(I, f.props)),
                    (c.ref = Jn(d, I, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, I);
                break;
              } else e(d, I);
              I = I.sibling;
            }
            f.type === sn
              ? ((c = bt(f.props.children, d.mode, g, f.key)),
                (c.return = d),
                (d = c))
              : ((g = Ii(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = Jn(d, c, f)),
                (g.return = d),
                (d = g));
          }
          return s(d);
        case on:
          e: {
            for (I = f.key; c !== null; ) {
              if (c.key === I)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else e(d, c);
              c = c.sibling;
            }
            (c = ns(f, d.mode, g)), (c.return = d), (d = c);
          }
          return s(d);
        case at:
          return (I = f._init), x(d, c, I(f._payload), g);
      }
      if (er(f)) return _(d, c, f, g);
      if (bn(f)) return w(d, c, f, g);
      li(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = ts(f, d.mode, g)), (c.return = d), (d = c)),
        s(d))
      : n(d, c);
  }
  return x;
}
var Ln = _d(!0),
  wd = _d(!1),
  Br = {},
  Ve = Lt(Br),
  Tr = Lt(Br),
  Pr = Lt(Br);
function Ht(t) {
  if (t === Br) throw Error(v(174));
  return t;
}
function jl(t, e) {
  switch ((z(Pr, e), z(Tr, t), z(Ve, Br), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : ws(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = ws(e, t));
  }
  B(Ve), z(Ve, e);
}
function Dn() {
  B(Ve), B(Tr), B(Pr);
}
function Ed(t) {
  Ht(Pr.current);
  var e = Ht(Ve.current),
    n = ws(e, t.type);
  e !== n && (z(Tr, t), z(Ve, n));
}
function Bl(t) {
  Tr.current === t && (B(Ve), B(Tr));
}
var V = Lt(0);
function bi(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Yo = [];
function $l() {
  for (var t = 0; t < Yo.length; t++)
    Yo[t]._workInProgressVersionPrimary = null;
  Yo.length = 0;
}
var _i = ot.ReactCurrentDispatcher,
  Jo = ot.ReactCurrentBatchConfig,
  Qt = 0,
  H = null,
  Y = null,
  q = null,
  Ki = !1,
  cr = !1,
  Rr = 0,
  nm = 0;
function re() {
  throw Error(v(321));
}
function Vl(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Ue(t[n], e[n])) return !1;
  return !0;
}
function Hl(t, e, n, r, i, o) {
  if (
    ((Qt = o),
    (H = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (_i.current = t === null || t.memoizedState === null ? sm : lm),
    (t = n(r, i)),
    cr)
  ) {
    o = 0;
    do {
      if (((cr = !1), (Rr = 0), 25 <= o)) throw Error(v(301));
      (o += 1),
        (q = Y = null),
        (e.updateQueue = null),
        (_i.current = am),
        (t = n(r, i));
    } while (cr);
  }
  if (
    ((_i.current = Gi),
    (e = Y !== null && Y.next !== null),
    (Qt = 0),
    (q = Y = H = null),
    (Ki = !1),
    e)
  )
    throw Error(v(300));
  return t;
}
function Wl() {
  var t = Rr !== 0;
  return (Rr = 0), t;
}
function je() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (H.memoizedState = q = t) : (q = q.next = t), q;
}
function Re() {
  if (Y === null) {
    var t = H.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Y.next;
  var e = q === null ? H.memoizedState : q.next;
  if (e !== null) (q = e), (Y = t);
  else {
    if (t === null) throw Error(v(310));
    (Y = t),
      (t = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      q === null ? (H.memoizedState = q = t) : (q = q.next = t);
  }
  return q;
}
function Nr(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Xo(t) {
  var e = Re(),
    n = e.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = t;
  var r = Y,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var h = u.lane;
      if ((Qt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var p = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (H.lanes |= h),
          (Yt |= h);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ue(r, e.memoizedState) || (he = !0),
      (e.memoizedState = r),
      (e.baseState = s),
      (e.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (o = i.lane), (H.lanes |= o), (Yt |= o), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function qo(t) {
  var e = Re(),
    n = e.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = t(o, s.action)), (s = s.next);
    while (s !== i);
    Ue(o, e.memoizedState) || (he = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Sd() {}
function kd(t, e) {
  var n = H,
    r = Re(),
    i = e(),
    o = !Ue(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (he = !0)),
    (r = r.queue),
    bl(Td.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Or(9, Cd.bind(null, n, r, i, e), void 0, null),
      Z === null)
    )
      throw Error(v(349));
    Qt & 30 || Id(n, e, i);
  }
  return i;
}
function Id(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = H.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (H.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Cd(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Pd(e) && Rd(t);
}
function Td(t, e, n) {
  return n(function () {
    Pd(e) && Rd(t);
  });
}
function Pd(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Ue(t, n);
  } catch {
    return !0;
  }
}
function Rd(t) {
  var e = nt(t, 1);
  e !== null && Me(e, t, 1, -1);
}
function ou(t) {
  var e = je();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = om.bind(null, H, t)),
    [e.memoizedState, t]
  );
}
function Or(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = H.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (H.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Nd() {
  return Re().memoizedState;
}
function wi(t, e, n, r) {
  var i = je();
  (H.flags |= t),
    (i.memoizedState = Or(1 | e, n, void 0, r === void 0 ? null : r));
}
function mo(t, e, n, r) {
  var i = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var s = Y.memoizedState;
    if (((o = s.destroy), r !== null && Vl(r, s.deps))) {
      i.memoizedState = Or(e, n, o, r);
      return;
    }
  }
  (H.flags |= t), (i.memoizedState = Or(1 | e, n, o, r));
}
function su(t, e) {
  return wi(8390656, 8, t, e);
}
function bl(t, e) {
  return mo(2048, 8, t, e);
}
function Od(t, e) {
  return mo(4, 2, t, e);
}
function Ad(t, e) {
  return mo(4, 4, t, e);
}
function Ld(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Dd(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), mo(4, 4, Ld.bind(null, e, t), n)
  );
}
function Kl() {}
function xd(t, e) {
  var n = Re();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Vl(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Md(t, e) {
  var n = Re();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && Vl(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Ud(t, e, n) {
  return Qt & 21
    ? (Ue(n, e) || ((n = jc()), (H.lanes |= n), (Yt |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (he = !0)), (t.memoizedState = n));
}
function rm(t, e) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = Jo.transition;
  Jo.transition = {};
  try {
    t(!1), e();
  } finally {
    (D = n), (Jo.transition = r);
  }
}
function zd() {
  return Re().memoizedState;
}
function im(t, e, n) {
  var r = It(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Fd(t))
  )
    jd(e, n);
  else if (((n = md(t, e, n, r)), n !== null)) {
    var i = ue();
    Me(n, t, r, i), Bd(n, e, r);
  }
}
function om(t, e, n) {
  var r = It(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fd(t)) jd(e, i);
  else {
    var o = t.alternate;
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var s = e.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ue(l, s))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), zl(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = md(t, e, i, r)),
      n !== null && ((i = ue()), Me(n, t, r, i), Bd(n, e, r));
  }
}
function Fd(t) {
  var e = t.alternate;
  return t === H || (e !== null && e === H);
}
function jd(t, e) {
  cr = Ki = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Bd(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), kl(t, n);
  }
}
var Gi = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Pe,
    useCallback: function (t, e) {
      return (je().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Pe,
    useEffect: su,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        wi(4194308, 4, Ld.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return wi(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return wi(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = je();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = je();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = im.bind(null, H, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = je();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: ou,
    useDebugValue: Kl,
    useDeferredValue: function (t) {
      return (je().memoizedState = t);
    },
    useTransition: function () {
      var t = ou(!1),
        e = t[0];
      return (t = rm.bind(null, t[1])), (je().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = H,
        i = je();
      if ($) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = e()), Z === null)) throw Error(v(349));
        Qt & 30 || Id(r, e, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (i.queue = o),
        su(Td.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        Or(9, Cd.bind(null, r, o, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = je(),
        e = Z.identifierPrefix;
      if ($) {
        var n = Qe,
          r = Ge;
        (n = (r & ~(1 << (32 - xe(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = Rr++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = nm++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  lm = {
    readContext: Pe,
    useCallback: xd,
    useContext: Pe,
    useEffect: bl,
    useImperativeHandle: Dd,
    useInsertionEffect: Od,
    useLayoutEffect: Ad,
    useMemo: Md,
    useReducer: Xo,
    useRef: Nd,
    useState: function () {
      return Xo(Nr);
    },
    useDebugValue: Kl,
    useDeferredValue: function (t) {
      var e = Re();
      return Ud(e, Y.memoizedState, t);
    },
    useTransition: function () {
      var t = Xo(Nr)[0],
        e = Re().memoizedState;
      return [t, e];
    },
    useMutableSource: Sd,
    useSyncExternalStore: kd,
    useId: zd,
    unstable_isNewReconciler: !1,
  },
  am = {
    readContext: Pe,
    useCallback: xd,
    useContext: Pe,
    useEffect: bl,
    useImperativeHandle: Dd,
    useInsertionEffect: Od,
    useLayoutEffect: Ad,
    useMemo: Md,
    useReducer: qo,
    useRef: Nd,
    useState: function () {
      return qo(Nr);
    },
    useDebugValue: Kl,
    useDeferredValue: function (t) {
      var e = Re();
      return Y === null ? (e.memoizedState = t) : Ud(e, Y.memoizedState, t);
    },
    useTransition: function () {
      var t = qo(Nr)[0],
        e = Re().memoizedState;
      return [t, e];
    },
    useMutableSource: Sd,
    useSyncExternalStore: kd,
    useId: zd,
    unstable_isNewReconciler: !1,
  };
function xn(t, e) {
  try {
    var n = "",
      r = e;
    do (n += Uh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function Zo(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Hs(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var um = typeof WeakMap == "function" ? WeakMap : Map;
function $d(t, e, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Yi || ((Yi = !0), (Zs = r)), Hs(t, e);
    }),
    n
  );
}
function Vd(t, e, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Hs(t, e);
      });
  }
  var o = t.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Hs(t, e),
          typeof r != "function" &&
            (kt === null ? (kt = new Set([this])) : kt.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function lu(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new um();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = km.bind(null, t, e, n)), e.then(t, t));
}
function au(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function uu(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = Ze(-1, 1)), (e.tag = 2), St(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var cm = ot.ReactCurrentOwner,
  he = !1;
function ae(t, e, n, r) {
  e.child = t === null ? wd(e, null, n, r) : Ln(e, t.child, n, r);
}
function cu(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return (
    Sn(e, i),
    (r = Hl(t, e, n, r, o, i)),
    (n = Wl()),
    t !== null && !he
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        rt(t, e, i))
      : ($ && n && Al(e), (e.flags |= 1), ae(t, e, r, i), e.child)
  );
}
function du(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ea(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Hd(t, e, o, r, i))
      : ((t = Ii(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Sr), n(s, r) && t.ref === e.ref)
    )
      return rt(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Ct(o, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Hd(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (Sr(o, r) && t.ref === e.ref)
      if (((he = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
        t.flags & 131072 && (he = !0);
      else return (e.lanes = t.lanes), rt(t, e, i);
  }
  return Ws(t, e, n, r, i);
}
function Wd(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(gn, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          z(gn, ve),
          (ve |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(gn, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      z(gn, ve),
      (ve |= r);
  return ae(t, e, i, n), e.child;
}
function bd(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Ws(t, e, n, r, i) {
  var o = me(n) ? Kt : se.current;
  return (
    (o = On(e, o)),
    Sn(e, i),
    (n = Hl(t, e, n, r, o, i)),
    (r = Wl()),
    t !== null && !he
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        rt(t, e, i))
      : ($ && r && Al(e), (e.flags |= 1), ae(t, e, n, i), e.child)
  );
}
function fu(t, e, n, r, i) {
  if (me(n)) {
    var o = !0;
    ji(e);
  } else o = !1;
  if ((Sn(e, i), e.stateNode === null))
    Ei(t, e), yd(e, n, r), Vs(e, n, r, i), (r = !0);
  else if (t === null) {
    var s = e.stateNode,
      l = e.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Pe(u))
      : ((u = me(n) ? Kt : se.current), (u = On(e, u)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ru(e, s, r, u)),
      (ut = !1);
    var m = e.memoizedState;
    (s.state = m),
      Wi(e, r, s, i),
      (a = e.memoizedState),
      l !== r || m !== a || pe.current || ut
        ? (typeof h == "function" && ($s(e, n, h, r), (a = e.memoizedState)),
          (l = ut || nu(e, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (s = e.stateNode),
      gd(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Ae(e.type, l)),
      (s.props = u),
      (p = e.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Pe(a))
        : ((a = me(n) ? Kt : se.current), (a = On(e, a)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && ru(e, s, r, a)),
      (ut = !1),
      (m = e.memoizedState),
      (s.state = m),
      Wi(e, r, s, i);
    var _ = e.memoizedState;
    l !== p || m !== _ || pe.current || ut
      ? (typeof y == "function" && ($s(e, n, y, r), (_ = e.memoizedState)),
        (u = ut || nu(e, n, u, r, m, _, a) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, _, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, _, a)),
            typeof s.componentDidUpdate == "function" && (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && m === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = _)),
        (s.props = r),
        (s.state = _),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && m === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return bs(t, e, n, r, o, i);
}
function bs(t, e, n, r, i, o) {
  bd(t, e);
  var s = (e.flags & 128) !== 0;
  if (!r && !s) return i && Xa(e, n, !1), rt(t, e, o);
  (r = e.stateNode), (cm.current = e);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && s
      ? ((e.child = Ln(e, t.child, null, o)), (e.child = Ln(e, null, l, o)))
      : ae(t, e, l, o),
    (e.memoizedState = r.state),
    i && Xa(e, n, !0),
    e.child
  );
}
function Kd(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Ja(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Ja(t, e.context, !1),
    jl(t, e.containerInfo);
}
function hu(t, e, n, r, i) {
  return An(), Dl(i), (e.flags |= 256), ae(t, e, n, r), e.child;
}
var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gs(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Gd(t, e, n) {
  var r = e.pendingProps,
    i = V.current,
    o = !1,
    s = (e.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    z(V, i & 1),
    t === null)
  )
    return (
      js(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((s = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = yo(s, r, 0, null)),
              (t = bt(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = Gs(n)),
              (e.memoizedState = Ks),
              t)
            : Gl(e, s))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return dm(t, e, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = e.mode), (i = t.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = Ct(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ct(l, o)) : ((o = bt(o, s, n, null)), (o.flags |= 2)),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (s = t.child.memoizedState),
      (s =
        s === null
          ? Gs(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = Ks),
      r
    );
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (r = Ct(o, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Gl(t, e) {
  return (
    (e = yo({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function ai(t, e, n, r) {
  return (
    r !== null && Dl(r),
    Ln(e, t.child, null, n),
    (t = Gl(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function dm(t, e, n, r, i, o, s) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Zo(Error(v(422)))), ai(t, e, s, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = r.fallback),
        (i = e.mode),
        (r = yo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = bt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = e),
        (o.return = e),
        (r.sibling = o),
        (e.child = r),
        e.mode & 1 && Ln(e, t.child, null, s),
        (e.child.memoizedState = Gs(s)),
        (e.memoizedState = Ks),
        o);
  if (!(e.mode & 1)) return ai(t, e, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(v(419))), (r = Zo(o, r, void 0)), ai(t, e, s, r);
  }
  if (((l = (s & t.childLanes) !== 0), he || l)) {
    if (((r = Z), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), nt(t, i), Me(r, t, i, -1));
    }
    return Zl(), (r = Zo(Error(v(421)))), ai(t, e, s, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Im.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (ye = Et(i.nextSibling)),
      (_e = e),
      ($ = !0),
      (De = null),
      t !== null &&
        ((ke[Ie++] = Ge),
        (ke[Ie++] = Qe),
        (ke[Ie++] = Gt),
        (Ge = t.id),
        (Qe = t.overflow),
        (Gt = e)),
      (e = Gl(e, r.children)),
      (e.flags |= 4096),
      e);
}
function pu(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Bs(t.return, e, n);
}
function es(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Qd(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ae(t, e, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && pu(t, n, e);
        else if (t.tag === 19) pu(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((z(V, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && bi(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          es(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && bi(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        es(e, !0, n, null, o);
        break;
      case "together":
        es(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Ei(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function rt(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Yt |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(v(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Ct(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Ct(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function fm(t, e, n) {
  switch (e.tag) {
    case 3:
      Kd(e), An();
      break;
    case 5:
      Ed(e);
      break;
    case 1:
      me(e.type) && ji(e);
      break;
    case 4:
      jl(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      z(Vi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(V, V.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Gd(t, e, n)
          : (z(V, V.current & 1),
            (t = rt(t, e, n)),
            t !== null ? t.sibling : null);
      z(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Qd(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Wd(t, e, n);
  }
  return rt(t, e, n);
}
var Yd, Qs, Jd, Xd;
Yd = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qs = function () {};
Jd = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Ht(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        (i = gs(t, i)), (r = gs(t, r)), (o = []);
        break;
      case "select":
        (i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = _s(t, i)), (r = _s(t, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = zi);
    }
    Es(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (mr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (mr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && j("scroll", t),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Xd = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Xn(t, e) {
  if (!$)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ie(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function hm(t, e, n) {
  var r = e.pendingProps;
  switch ((Ll(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ie(e), null;
    case 1:
      return me(e.type) && Fi(), ie(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Dn(),
        B(pe),
        B(se),
        $l(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (si(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), De !== null && (nl(De), (De = null)))),
        Qs(t, e),
        ie(e),
        null
      );
    case 5:
      Bl(e);
      var i = Ht(Pr.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Jd(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(v(166));
          return ie(e), null;
        }
        if (((t = Ht(Ve.current)), si(e))) {
          (r = e.stateNode), (n = e.type);
          var o = e.memoizedProps;
          switch (((r[Be] = e), (r[Cr] = o), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < nr.length; i++) j(nr[i], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j("error", r), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              ka(r, o), j("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                j("invalid", r);
              break;
            case "textarea":
              Ca(r, o), j("invalid", r);
          }
          Es(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      oi(r.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      oi(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : mr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  j("scroll", r);
            }
          switch (n) {
            case "input":
              Xr(r), Ia(r, o, !0);
              break;
            case "textarea":
              Xr(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = zi);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Ic(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = s.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = s.createElement(n, { is: r.is }))
                : ((t = s.createElement(n)),
                  n === "select" &&
                    ((s = t),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (t = s.createElementNS(t, n)),
            (t[Be] = e),
            (t[Cr] = r),
            Yd(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((s = Ss(n, r)), n)) {
              case "dialog":
                j("cancel", t), j("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < nr.length; i++) j(nr[i], t);
                i = r;
                break;
              case "source":
                j("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                j("error", t), j("load", t), (i = r);
                break;
              case "details":
                j("toggle", t), (i = r);
                break;
              case "input":
                ka(t, r), (i = gs(t, r)), j("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  j("invalid", t);
                break;
              case "textarea":
                Ca(t, r), (i = _s(t, r)), j("invalid", t);
                break;
              default:
                i = r;
            }
            Es(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Pc(t, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Cc(t, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && gr(t, a)
                    : typeof a == "number" && gr(t, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (mr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && j("scroll", t)
                      : a != null && vl(t, o, a, s));
              }
            switch (n) {
              case "input":
                Xr(t), Ia(t, r, !1);
                break;
              case "textarea":
                Xr(t), Ta(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? yn(t, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      yn(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = zi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return ie(e), null;
    case 6:
      if (t && e.stateNode != null) Xd(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(v(166));
        if (((n = Ht(Pr.current)), Ht(Ve.current), si(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Be] = e),
            (o = r.nodeValue !== n) && ((t = _e), t !== null))
          )
            switch (t.tag) {
              case 3:
                oi(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  oi(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = e),
            (e.stateNode = r);
      }
      return ie(e), null;
    case 13:
      if (
        (B(V),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && e.mode & 1 && !(e.flags & 128))
          pd(), An(), (e.flags |= 98560), (o = !1);
        else if (((o = si(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(v(318));
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(v(317));
            o[Be] = e;
          } else
            An(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          ie(e), (o = !1);
        } else De !== null && (nl(De), (De = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || V.current & 1 ? J === 0 && (J = 3) : Zl())),
          e.updateQueue !== null && (e.flags |= 4),
          ie(e),
          null);
    case 4:
      return (
        Dn(), Qs(t, e), t === null && kr(e.stateNode.containerInfo), ie(e), null
      );
    case 10:
      return Ul(e.type._context), ie(e), null;
    case 17:
      return me(e.type) && Fi(), ie(e), null;
    case 19:
      if ((B(V), (o = e.memoizedState), o === null)) return ie(e), null;
      if (((r = (e.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Xn(o, !1);
        else {
          if (J !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((s = bi(t)), s !== null)) {
                for (
                  e.flags |= 128,
                    Xn(o, !1),
                    r = s.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (o = n),
                    (t = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (t = s.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return z(V, (V.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null &&
            G() > Mn &&
            ((e.flags |= 128), (r = !0), Xn(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = bi(s)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Xn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !$)
            )
              return ie(e), null;
          } else
            2 * G() - o.renderingStartTime > Mn &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Xn(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = e.child), (e.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (e.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = G()),
          (e.sibling = null),
          (n = V.current),
          z(V, r ? (n & 1) | 2 : n & 1),
          e)
        : (ie(e), null);
    case 22:
    case 23:
      return (
        ql(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? ve & 1073741824 && (ie(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ie(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, e.tag));
}
function pm(t, e) {
  switch ((Ll(e), e.tag)) {
    case 1:
      return (
        me(e.type) && Fi(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Dn(),
        B(pe),
        B(se),
        $l(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Bl(e), null;
    case 13:
      if ((B(V), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(v(340));
        An();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return B(V), null;
    case 4:
      return Dn(), null;
    case 10:
      return Ul(e.type._context), null;
    case 22:
    case 23:
      return ql(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ui = !1,
  oe = !1,
  mm = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function mn(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(t, e, r);
      }
    else n.current = null;
}
function Ys(t, e, n) {
  try {
    n();
  } catch (r) {
    b(t, e, r);
  }
}
var mu = !1;
function gm(t, e) {
  if (((Ls = xi), (t = td()), Ol(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            h = 0,
            p = t,
            m = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (m = p), (p = y);
            for (;;) {
              if (p === t) break t;
              if (
                (m === n && ++u === i && (l = s),
                m === o && ++h === r && (a = s),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ds = { focusedElem: t, selectionRange: n }, xi = !1, S = e; S !== null; )
    if (((e = S), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (S = t);
    else
      for (; S !== null; ) {
        e = S;
        try {
          var _ = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var w = _.memoizedProps,
                    x = _.memoizedState,
                    d = e.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? w : Ae(e.type, w),
                      x
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = e.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          b(e, e.return, g);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (S = t);
          break;
        }
        S = e.return;
      }
  return (_ = mu), (mu = !1), _;
}
function dr(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ys(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function go(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Js(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function qd(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), qd(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Be], delete e[Cr], delete e[Us], delete e[qp], delete e[Zp])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Zd(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function gu(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Zd(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Xs(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = zi));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (Xs(t, e, n), t = t.sibling; t !== null; ) Xs(t, e, n), (t = t.sibling);
}
function qs(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (qs(t, e, n), t = t.sibling; t !== null; ) qs(t, e, n), (t = t.sibling);
}
var ee = null,
  Le = !1;
function st(t, e, n) {
  for (n = n.child; n !== null; ) ef(t, e, n), (n = n.sibling);
}
function ef(t, e, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(lo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      oe || mn(n, e);
    case 6:
      var r = ee,
        i = Le;
      (ee = null),
        st(t, e, n),
        (ee = r),
        (Le = i),
        ee !== null &&
          (Le
            ? ((t = ee),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Le
          ? ((t = ee),
            (n = n.stateNode),
            t.nodeType === 8
              ? Go(t.parentNode, n)
              : t.nodeType === 1 && Go(t, n),
            wr(t))
          : Go(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (i = Le),
        (ee = n.stateNode.containerInfo),
        (Le = !0),
        st(t, e, n),
        (ee = r),
        (Le = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ys(n, e, s),
            (i = i.next);
        } while (i !== r);
      }
      st(t, e, n);
      break;
    case 1:
      if (
        !oe &&
        (mn(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          b(n, e, l);
        }
      st(t, e, n);
      break;
    case 21:
      st(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((oe = (r = oe) || n.memoizedState !== null), st(t, e, n), (oe = r))
        : st(t, e, n);
      break;
    default:
      st(t, e, n);
  }
}
function vu(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new mm()),
      e.forEach(function (r) {
        var i = Cm.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Oe(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t,
          s = e,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ee = l.stateNode), (Le = !1);
              break e;
            case 3:
              (ee = l.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (ee = l.stateNode.containerInfo), (Le = !0);
              break e;
          }
          l = l.return;
        }
        if (ee === null) throw Error(v(160));
        ef(o, s, i), (ee = null), (Le = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        b(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) tf(e, t), (e = e.sibling);
}
function tf(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(e, t), Fe(t), r & 4)) {
        try {
          dr(3, t, t.return), go(3, t);
        } catch (w) {
          b(t, t.return, w);
        }
        try {
          dr(5, t, t.return);
        } catch (w) {
          b(t, t.return, w);
        }
      }
      break;
    case 1:
      Oe(e, t), Fe(t), r & 512 && n !== null && mn(n, n.return);
      break;
    case 5:
      if (
        (Oe(e, t),
        Fe(t),
        r & 512 && n !== null && mn(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          gr(i, "");
        } catch (w) {
          b(t, t.return, w);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Sc(i, o),
              Ss(l, s);
            var u = Ss(l, o);
            for (s = 0; s < a.length; s += 2) {
              var h = a[s],
                p = a[s + 1];
              h === "style"
                ? Pc(i, p)
                : h === "dangerouslySetInnerHTML"
                ? Cc(i, p)
                : h === "children"
                ? gr(i, p)
                : vl(i, h, p, u);
            }
            switch (l) {
              case "input":
                vs(i, o);
                break;
              case "textarea":
                kc(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? yn(i, !!o.multiple, y, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? yn(i, !!o.multiple, o.defaultValue, !0)
                      : yn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Cr] = o;
          } catch (w) {
            b(t, t.return, w);
          }
      }
      break;
    case 6:
      if ((Oe(e, t), Fe(t), r & 4)) {
        if (t.stateNode === null) throw Error(v(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          b(t, t.return, w);
        }
      }
      break;
    case 3:
      if (
        (Oe(e, t), Fe(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          wr(e.containerInfo);
        } catch (w) {
          b(t, t.return, w);
        }
      break;
    case 4:
      Oe(e, t), Fe(t);
      break;
    case 13:
      Oe(e, t),
        Fe(t),
        (i = t.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Jl = G())),
        r & 4 && vu(t);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((oe = (u = oe) || h), Oe(e, t), (oe = u)) : Oe(e, t),
        Fe(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !h && t.mode & 1)
        )
          for (S = t, h = t.child; h !== null; ) {
            for (p = S = h; S !== null; ) {
              switch (((m = S), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, m, m.return);
                  break;
                case 1:
                  mn(m, m.return);
                  var _ = m.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (e = r),
                        (_.props = e.memoizedProps),
                        (_.state = e.memoizedState),
                        _.componentWillUnmount();
                    } catch (w) {
                      b(r, n, w);
                    }
                  }
                  break;
                case 5:
                  mn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    _u(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (S = y)) : _u(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = t; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Tc("display", s)));
              } catch (w) {
                b(t, t.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                b(t, t.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === t) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === t) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === t) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Oe(e, t), Fe(t), r & 4 && vu(t);
      break;
    case 21:
      break;
    default:
      Oe(e, t), Fe(t);
  }
}
function Fe(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Zd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (gr(i, ""), (r.flags &= -33));
          var o = gu(t);
          qs(t, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = gu(t);
          Xs(t, l, s);
          break;
        default:
          throw Error(v(161));
      }
    } catch (a) {
      b(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function vm(t, e, n) {
  (S = t), nf(t);
}
function nf(t, e, n) {
  for (var r = (t.mode & 1) !== 0; S !== null; ) {
    var i = S,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ui;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || oe;
        l = ui;
        var u = oe;
        if (((ui = s), (oe = a) && !u))
          for (S = i; S !== null; )
            (s = S),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? wu(i)
                : a !== null
                ? ((a.return = s), (S = a))
                : wu(i);
        for (; o !== null; ) (S = o), nf(o), (o = o.sibling);
        (S = i), (ui = l), (oe = u);
      }
      yu(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (S = o)) : yu(t);
  }
}
function yu(t) {
  for (; S !== null; ) {
    var e = S;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              oe || go(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Ae(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && tu(e, o, r);
              break;
            case 3:
              var s = e.updateQueue;
              if (s !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                tu(e, s, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && wr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        oe || (e.flags & 512 && Js(e));
      } catch (m) {
        b(e, e.return, m);
      }
    }
    if (e === t) {
      S = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (S = n);
      break;
    }
    S = e.return;
  }
}
function _u(t) {
  for (; S !== null; ) {
    var e = S;
    if (e === t) {
      S = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (S = n);
      break;
    }
    S = e.return;
  }
}
function wu(t) {
  for (; S !== null; ) {
    var e = S;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            go(4, e);
          } catch (a) {
            b(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(e, i, a);
            }
          }
          var o = e.return;
          try {
            Js(e);
          } catch (a) {
            b(e, o, a);
          }
          break;
        case 5:
          var s = e.return;
          try {
            Js(e);
          } catch (a) {
            b(e, s, a);
          }
      }
    } catch (a) {
      b(e, e.return, a);
    }
    if (e === t) {
      S = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (S = l);
      break;
    }
    S = e.return;
  }
}
var ym = Math.ceil,
  Qi = ot.ReactCurrentDispatcher,
  Ql = ot.ReactCurrentOwner,
  Te = ot.ReactCurrentBatchConfig,
  L = 0,
  Z = null,
  Q = null,
  te = 0,
  ve = 0,
  gn = Lt(0),
  J = 0,
  Ar = null,
  Yt = 0,
  vo = 0,
  Yl = 0,
  fr = null,
  fe = null,
  Jl = 0,
  Mn = 1 / 0,
  be = null,
  Yi = !1,
  Zs = null,
  kt = null,
  ci = !1,
  vt = null,
  Ji = 0,
  hr = 0,
  el = null,
  Si = -1,
  ki = 0;
function ue() {
  return L & 6 ? G() : Si !== -1 ? Si : (Si = G());
}
function It(t) {
  return t.mode & 1
    ? L & 2 && te !== 0
      ? te & -te
      : tm.transition !== null
      ? (ki === 0 && (ki = jc()), ki)
      : ((t = D),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Kc(t.type))),
        t)
    : 1;
}
function Me(t, e, n, r) {
  if (50 < hr) throw ((hr = 0), (el = null), Error(v(185)));
  zr(t, n, r),
    (!(L & 2) || t !== Z) &&
      (t === Z && (!(L & 2) && (vo |= n), J === 4 && dt(t, te)),
      ge(t, r),
      n === 1 && L === 0 && !(e.mode & 1) && ((Mn = G() + 500), ho && Dt()));
}
function ge(t, e) {
  var n = t.callbackNode;
  tp(t, e);
  var r = Di(t, t === Z ? te : 0);
  if (r === 0)
    n !== null && Na(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Na(n), e === 1))
      t.tag === 0 ? em(Eu.bind(null, t)) : dd(Eu.bind(null, t)),
        Jp(function () {
          !(L & 6) && Dt();
        }),
        (n = null);
    else {
      switch (Bc(r)) {
        case 1:
          n = Sl;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Li;
          break;
        case 536870912:
          n = Fc;
          break;
        default:
          n = Li;
      }
      n = df(n, rf.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function rf(t, e) {
  if (((Si = -1), (ki = 0), L & 6)) throw Error(v(327));
  var n = t.callbackNode;
  if (kn() && t.callbackNode !== n) return null;
  var r = Di(t, t === Z ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Xi(t, r);
  else {
    e = r;
    var i = L;
    L |= 2;
    var o = sf();
    (Z !== t || te !== e) && ((be = null), (Mn = G() + 500), Wt(t, e));
    do
      try {
        Em();
        break;
      } catch (l) {
        of(t, l);
      }
    while (!0);
    Ml(),
      (Qi.current = o),
      (L = i),
      Q !== null ? (e = 0) : ((Z = null), (te = 0), (e = J));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Ps(t)), i !== 0 && ((r = i), (e = tl(t, i)))), e === 1)
    )
      throw ((n = Ar), Wt(t, 0), dt(t, r), ge(t, G()), n);
    if (e === 6) dt(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !_m(i) &&
          ((e = Xi(t, r)),
          e === 2 && ((o = Ps(t)), o !== 0 && ((r = o), (e = tl(t, o)))),
          e === 1))
      )
        throw ((n = Ar), Wt(t, 0), dt(t, r), ge(t, G()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          jt(t, fe, be);
          break;
        case 3:
          if (
            (dt(t, r), (r & 130023424) === r && ((e = Jl + 500 - G()), 10 < e))
          ) {
            if (Di(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              ue(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Ms(jt.bind(null, t, fe, be), e);
            break;
          }
          jt(t, fe, be);
          break;
        case 4:
          if ((dt(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - xe(r);
            (o = 1 << s), (s = e[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ym(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Ms(jt.bind(null, t, fe, be), r);
            break;
          }
          jt(t, fe, be);
          break;
        case 5:
          jt(t, fe, be);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ge(t, G()), t.callbackNode === n ? rf.bind(null, t) : null;
}
function tl(t, e) {
  var n = fr;
  return (
    t.current.memoizedState.isDehydrated && (Wt(t, e).flags |= 256),
    (t = Xi(t, e)),
    t !== 2 && ((e = fe), (fe = n), e !== null && nl(e)),
    t
  );
}
function nl(t) {
  fe === null ? (fe = t) : fe.push.apply(fe, t);
}
function _m(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ue(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function dt(t, e) {
  for (
    e &= ~Yl,
      e &= ~vo,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - xe(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function Eu(t) {
  if (L & 6) throw Error(v(327));
  kn();
  var e = Di(t, 0);
  if (!(e & 1)) return ge(t, G()), null;
  var n = Xi(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Ps(t);
    r !== 0 && ((e = r), (n = tl(t, r)));
  }
  if (n === 1) throw ((n = Ar), Wt(t, 0), dt(t, e), ge(t, G()), n);
  if (n === 6) throw Error(v(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    jt(t, fe, be),
    ge(t, G()),
    null
  );
}
function Xl(t, e) {
  var n = L;
  L |= 1;
  try {
    return t(e);
  } finally {
    (L = n), L === 0 && ((Mn = G() + 500), ho && Dt());
  }
}
function Jt(t) {
  vt !== null && vt.tag === 0 && !(L & 6) && kn();
  var e = L;
  L |= 1;
  var n = Te.transition,
    r = D;
  try {
    if (((Te.transition = null), (D = 1), t)) return t();
  } finally {
    (D = r), (Te.transition = n), (L = e), !(L & 6) && Dt();
  }
}
function ql() {
  (ve = gn.current), B(gn);
}
function Wt(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Yp(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((Ll(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fi();
          break;
        case 3:
          Dn(), B(pe), B(se), $l();
          break;
        case 5:
          Bl(r);
          break;
        case 4:
          Dn();
          break;
        case 13:
          B(V);
          break;
        case 19:
          B(V);
          break;
        case 10:
          Ul(r.type._context);
          break;
        case 22:
        case 23:
          ql();
      }
      n = n.return;
    }
  if (
    ((Z = t),
    (Q = t = Ct(t.current, null)),
    (te = ve = e),
    (J = 0),
    (Ar = null),
    (Yl = vo = Yt = 0),
    (fe = fr = null),
    Vt !== null)
  ) {
    for (e = 0; e < Vt.length; e++)
      if (((n = Vt[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Vt = null;
  }
  return t;
}
function of(t, e) {
  do {
    var n = Q;
    try {
      if ((Ml(), (_i.current = Gi), Ki)) {
        for (var r = H.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ki = !1;
      }
      if (
        ((Qt = 0),
        (q = Y = H = null),
        (cr = !1),
        (Rr = 0),
        (Ql.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (Ar = e), (Q = null);
        break;
      }
      e: {
        var o = t,
          s = n.return,
          l = n,
          a = e;
        if (
          ((e = te),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            h = l,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = au(s);
          if (y !== null) {
            (y.flags &= -257),
              uu(y, s, l, o, e),
              y.mode & 1 && lu(o, u, e),
              (e = y),
              (a = u);
            var _ = e.updateQueue;
            if (_ === null) {
              var w = new Set();
              w.add(a), (e.updateQueue = w);
            } else _.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              lu(o, u, e), Zl();
              break e;
            }
            a = Error(v(426));
          }
        } else if ($ && l.mode & 1) {
          var x = au(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              uu(x, s, l, o, e),
              Dl(xn(a, l));
            break e;
          }
        }
        (o = a = xn(a, l)),
          J !== 4 && (J = 2),
          fr === null ? (fr = [o]) : fr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var d = $d(o, a, e);
              eu(o, d);
              break e;
            case 1:
              l = a;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (kt === null || !kt.has(f))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var g = Vd(o, l, e);
                eu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      af(n);
    } catch (E) {
      (e = E), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sf() {
  var t = Qi.current;
  return (Qi.current = Gi), t === null ? Gi : t;
}
function Zl() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    Z === null || (!(Yt & 268435455) && !(vo & 268435455)) || dt(Z, te);
}
function Xi(t, e) {
  var n = L;
  L |= 2;
  var r = sf();
  (Z !== t || te !== e) && ((be = null), Wt(t, e));
  do
    try {
      wm();
      break;
    } catch (i) {
      of(t, i);
    }
  while (!0);
  if ((Ml(), (L = n), (Qi.current = r), Q !== null)) throw Error(v(261));
  return (Z = null), (te = 0), J;
}
function wm() {
  for (; Q !== null; ) lf(Q);
}
function Em() {
  for (; Q !== null && !Kh(); ) lf(Q);
}
function lf(t) {
  var e = cf(t.alternate, t, ve);
  (t.memoizedProps = t.pendingProps),
    e === null ? af(t) : (Q = e),
    (Ql.current = null);
}
function af(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = pm(n, e)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (J = 6), (Q = null);
        return;
      }
    } else if (((n = hm(n, e, ve)), n !== null)) {
      Q = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Q = e;
      return;
    }
    Q = e = t;
  } while (e !== null);
  J === 0 && (J = 5);
}
function jt(t, e, n) {
  var r = D,
    i = Te.transition;
  try {
    (Te.transition = null), (D = 1), Sm(t, e, n, r);
  } finally {
    (Te.transition = i), (D = r);
  }
  return null;
}
function Sm(t, e, n, r) {
  do kn();
  while (vt !== null);
  if (L & 6) throw Error(v(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(v(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (np(t, o),
    t === Z && ((Q = Z = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ci ||
      ((ci = !0),
      df(Li, function () {
        return kn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Te.transition), (Te.transition = null);
    var s = D;
    D = 1;
    var l = L;
    (L |= 4),
      (Ql.current = null),
      gm(t, n),
      tf(n, t),
      Vp(Ds),
      (xi = !!Ls),
      (Ds = Ls = null),
      (t.current = n),
      vm(n),
      Gh(),
      (L = l),
      (D = s),
      (Te.transition = o);
  } else t.current = n;
  if (
    (ci && ((ci = !1), (vt = t), (Ji = i)),
    (o = t.pendingLanes),
    o === 0 && (kt = null),
    Jh(n.stateNode),
    ge(t, G()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Yi) throw ((Yi = !1), (t = Zs), (Zs = null), t);
  return (
    Ji & 1 && t.tag !== 0 && kn(),
    (o = t.pendingLanes),
    o & 1 ? (t === el ? hr++ : ((hr = 0), (el = t))) : (hr = 0),
    Dt(),
    null
  );
}
function kn() {
  if (vt !== null) {
    var t = Bc(Ji),
      e = Te.transition,
      n = D;
    try {
      if (((Te.transition = null), (D = 16 > t ? 16 : t), vt === null))
        var r = !1;
      else {
        if (((t = vt), (vt = null), (Ji = 0), L & 6)) throw Error(v(331));
        var i = L;
        for (L |= 4, S = t.current; S !== null; ) {
          var o = S,
            s = o.child;
          if (S.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (S = u; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (S = p);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var m = h.sibling,
                        y = h.return;
                      if ((qd(h), h === u)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (S = m);
                        break;
                      }
                      S = y;
                    }
                }
              }
              var _ = o.alternate;
              if (_ !== null) {
                var w = _.child;
                if (w !== null) {
                  _.child = null;
                  do {
                    var x = w.sibling;
                    (w.sibling = null), (w = x);
                  } while (w !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (S = s);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (S = d);
                break e;
              }
              S = o.return;
            }
        }
        var c = t.current;
        for (S = c; S !== null; ) {
          s = S;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (S = f);
          else
            e: for (s = c; S !== null; ) {
              if (((l = S), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      go(9, l);
                  }
                } catch (E) {
                  b(l, l.return, E);
                }
              if (l === s) {
                S = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (S = g);
                break e;
              }
              S = l.return;
            }
        }
        if (
          ((L = i), Dt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(lo, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Te.transition = e);
    }
  }
  return !1;
}
function Su(t, e, n) {
  (e = xn(n, e)),
    (e = $d(t, e, 1)),
    (t = St(t, e, 1)),
    (e = ue()),
    t !== null && (zr(t, 1, e), ge(t, e));
}
function b(t, e, n) {
  if (t.tag === 3) Su(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Su(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kt === null || !kt.has(r)))
        ) {
          (t = xn(n, t)),
            (t = Vd(e, t, 1)),
            (e = St(e, t, 1)),
            (t = ue()),
            e !== null && (zr(e, 1, t), ge(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function km(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = ue()),
    (t.pingedLanes |= t.suspendedLanes & n),
    Z === t &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > G() - Jl)
        ? Wt(t, 0)
        : (Yl |= n)),
    ge(t, e);
}
function uf(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = ei), (ei <<= 1), !(ei & 130023424) && (ei = 4194304))
      : (e = 1));
  var n = ue();
  (t = nt(t, e)), t !== null && (zr(t, e, n), ge(t, n));
}
function Im(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), uf(t, n);
}
function Cm(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(e), uf(t, n);
}
var cf;
cf = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || pe.current) he = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (he = !1), fm(t, e, n);
      he = !!(t.flags & 131072);
    }
  else (he = !1), $ && e.flags & 1048576 && fd(e, $i, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      Ei(t, e), (t = e.pendingProps);
      var i = On(e, se.current);
      Sn(e, n), (i = Hl(null, e, r, t, i, n));
      var o = Wl();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            me(r) ? ((o = !0), ji(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fl(e),
            (i.updater = po),
            (e.stateNode = i),
            (i._reactInternals = e),
            Vs(e, r, t, n),
            (e = bs(null, e, r, !0, o, n)))
          : ((e.tag = 0), $ && o && Al(e), ae(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (Ei(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Pm(r)),
          (t = Ae(r, t)),
          i)
        ) {
          case 0:
            e = Ws(null, e, r, t, n);
            break e;
          case 1:
            e = fu(null, e, r, t, n);
            break e;
          case 11:
            e = cu(null, e, r, t, n);
            break e;
          case 14:
            e = du(null, e, r, Ae(r.type, t), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Ae(r, i)),
        Ws(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Ae(r, i)),
        fu(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Kd(e), t === null)) throw Error(v(387));
        (r = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          gd(t, e),
          Wi(e, r, null, n);
        var s = e.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            (i = xn(Error(v(423)), e)), (e = hu(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = xn(Error(v(424)), e)), (e = hu(t, e, r, n, i));
            break e;
          } else
            for (
              ye = Et(e.stateNode.containerInfo.firstChild),
                _e = e,
                $ = !0,
                De = null,
                n = wd(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((An(), r === i)) {
            e = rt(t, e, n);
            break e;
          }
          ae(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Ed(e),
        t === null && js(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (s = i.children),
        xs(r, i) ? (s = null) : o !== null && xs(r, o) && (e.flags |= 32),
        bd(t, e),
        ae(t, e, s, n),
        e.child
      );
    case 6:
      return t === null && js(e), null;
    case 13:
      return Gd(t, e, n);
    case 4:
      return (
        jl(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Ln(e, null, r, n)) : ae(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Ae(r, i)),
        cu(t, e, r, i, n)
      );
    case 7:
      return ae(t, e, e.pendingProps, n), e.child;
    case 8:
      return ae(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return ae(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (s = i.value),
          z(Vi, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ue(o.value, s)) {
            if (o.children === i.children && !pe.current) {
              e = rt(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Ze(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Bs(o.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(v(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Bs(s, n, e),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === e) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ae(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Sn(e, n),
        (i = Pe(i)),
        (r = r(i)),
        (e.flags |= 1),
        ae(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Ae(r, e.pendingProps)),
        (i = Ae(r.type, i)),
        du(t, e, r, i, n)
      );
    case 15:
      return Hd(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Ae(r, i)),
        Ei(t, e),
        (e.tag = 1),
        me(r) ? ((t = !0), ji(e)) : (t = !1),
        Sn(e, n),
        yd(e, r, i),
        Vs(e, r, i, n),
        bs(null, e, r, !0, t, n)
      );
    case 19:
      return Qd(t, e, n);
    case 22:
      return Wd(t, e, n);
  }
  throw Error(v(156, e.tag));
};
function df(t, e) {
  return Uc(t, e);
}
function Tm(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(t, e, n, r) {
  return new Tm(t, e, n, r);
}
function ea(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Pm(t) {
  if (typeof t == "function") return ea(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === _l)) return 11;
    if (t === wl) return 14;
  }
  return 2;
}
function Ct(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Ce(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Ii(t, e, n, r, i, o) {
  var s = 2;
  if (((r = t), typeof t == "function")) ea(t) && (s = 1);
  else if (typeof t == "string") s = 5;
  else
    e: switch (t) {
      case sn:
        return bt(n.children, i, o, e);
      case yl:
        (s = 8), (i |= 8);
        break;
      case fs:
        return (
          (t = Ce(12, n, e, i | 2)), (t.elementType = fs), (t.lanes = o), t
        );
      case hs:
        return (t = Ce(13, n, e, i)), (t.elementType = hs), (t.lanes = o), t;
      case ps:
        return (t = Ce(19, n, e, i)), (t.elementType = ps), (t.lanes = o), t;
      case _c:
        return yo(n, i, o, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case vc:
              s = 10;
              break e;
            case yc:
              s = 9;
              break e;
            case _l:
              s = 11;
              break e;
            case wl:
              s = 14;
              break e;
            case at:
              (s = 16), (r = null);
              break e;
          }
        throw Error(v(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Ce(s, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
  );
}
function bt(t, e, n, r) {
  return (t = Ce(7, t, r, e)), (t.lanes = n), t;
}
function yo(t, e, n, r) {
  return (
    (t = Ce(22, t, r, e)),
    (t.elementType = _c),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function ts(t, e, n) {
  return (t = Ce(6, t, null, e)), (t.lanes = n), t;
}
function ns(t, e, n) {
  return (
    (e = Ce(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function Rm(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Uo(0)),
    (this.expirationTimes = Uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ta(t, e, n, r, i, o, s, l, a) {
  return (
    (t = new Rm(t, e, n, l, a)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = Ce(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fl(o),
    t
  );
}
function Nm(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function ff(t) {
  if (!t) return Ot;
  t = t._reactInternals;
  e: {
    if (en(t) !== t || t.tag !== 1) throw Error(v(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (me(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(v(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (me(n)) return cd(t, n, e);
  }
  return e;
}
function hf(t, e, n, r, i, o, s, l, a) {
  return (
    (t = ta(n, r, !0, t, i, o, s, l, a)),
    (t.context = ff(null)),
    (n = t.current),
    (r = ue()),
    (i = It(n)),
    (o = Ze(r, i)),
    (o.callback = e ?? null),
    St(n, o, i),
    (t.current.lanes = i),
    zr(t, i, r),
    ge(t, r),
    t
  );
}
function _o(t, e, n, r) {
  var i = e.current,
    o = ue(),
    s = It(i);
  return (
    (n = ff(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = Ze(o, s)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = St(i, e, s)),
    t !== null && (Me(t, i, s, o), yi(t, i, s)),
    s
  );
}
function qi(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function ku(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function na(t, e) {
  ku(t, e), (t = t.alternate) && ku(t, e);
}
function Om() {
  return null;
}
var pf =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function ra(t) {
  this._internalRoot = t;
}
wo.prototype.render = ra.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(v(409));
  _o(t, e, null, null);
};
wo.prototype.unmount = ra.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Jt(function () {
      _o(null, t, null, null);
    }),
      (e[tt] = null);
  }
};
function wo(t) {
  this._internalRoot = t;
}
wo.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Hc();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < ct.length && e !== 0 && e < ct[n].priority; n++);
    ct.splice(n, 0, t), n === 0 && bc(t);
  }
};
function ia(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Eo(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Iu() {}
function Am(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = qi(s);
        o.call(u);
      };
    }
    var s = hf(e, r, t, 0, null, !1, !1, "", Iu);
    return (
      (t._reactRootContainer = s),
      (t[tt] = s.current),
      kr(t.nodeType === 8 ? t.parentNode : t),
      Jt(),
      s
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = qi(a);
      l.call(u);
    };
  }
  var a = ta(t, 0, !1, null, null, !1, !1, "", Iu);
  return (
    (t._reactRootContainer = a),
    (t[tt] = a.current),
    kr(t.nodeType === 8 ? t.parentNode : t),
    Jt(function () {
      _o(e, a, n, r);
    }),
    a
  );
}
function So(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = qi(s);
        l.call(a);
      };
    }
    _o(e, s, t, i);
  } else s = Am(n, e, t, i, r);
  return qi(s);
}
$c = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = tr(e.pendingLanes);
        n !== 0 &&
          (kl(e, n | 1), ge(e, G()), !(L & 6) && ((Mn = G() + 500), Dt()));
      }
      break;
    case 13:
      Jt(function () {
        var r = nt(t, 1);
        if (r !== null) {
          var i = ue();
          Me(r, t, 1, i);
        }
      }),
        na(t, 1);
  }
};
Il = function (t) {
  if (t.tag === 13) {
    var e = nt(t, 134217728);
    if (e !== null) {
      var n = ue();
      Me(e, t, 134217728, n);
    }
    na(t, 134217728);
  }
};
Vc = function (t) {
  if (t.tag === 13) {
    var e = It(t),
      n = nt(t, e);
    if (n !== null) {
      var r = ue();
      Me(n, t, e, r);
    }
    na(t, e);
  }
};
Hc = function () {
  return D;
};
Wc = function (t, e) {
  var n = D;
  try {
    return (D = t), e();
  } finally {
    D = n;
  }
};
Is = function (t, e, n) {
  switch (e) {
    case "input":
      if ((vs(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = fo(r);
            if (!i) throw Error(v(90));
            Ec(r), vs(r, i);
          }
        }
      }
      break;
    case "textarea":
      kc(t, n);
      break;
    case "select":
      (e = n.value), e != null && yn(t, !!n.multiple, e, !1);
  }
};
Oc = Xl;
Ac = Jt;
var Lm = { usingClientEntryPoint: !1, Events: [jr, cn, fo, Rc, Nc, Xl] },
  qn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Dm = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = xc(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || Om,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!di.isDisabled && di.supportsFiber)
    try {
      (lo = di.inject(Dm)), ($e = di);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
Ee.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ia(e)) throw Error(v(200));
  return Nm(t, e, null, n);
};
Ee.createRoot = function (t, e) {
  if (!ia(t)) throw Error(v(299));
  var n = !1,
    r = "",
    i = pf;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = ta(t, 1, !1, null, null, n, !1, r, i)),
    (t[tt] = e.current),
    kr(t.nodeType === 8 ? t.parentNode : t),
    new ra(e)
  );
};
Ee.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(v(188))
      : ((t = Object.keys(t).join(",")), Error(v(268, t)));
  return (t = xc(e)), (t = t === null ? null : t.stateNode), t;
};
Ee.flushSync = function (t) {
  return Jt(t);
};
Ee.hydrate = function (t, e, n) {
  if (!Eo(e)) throw Error(v(200));
  return So(null, t, e, !0, n);
};
Ee.hydrateRoot = function (t, e, n) {
  if (!ia(t)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = pf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (e = hf(e, null, t, 1, n ?? null, i, !1, o, s)),
    (t[tt] = e.current),
    kr(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new wo(e);
};
Ee.render = function (t, e, n) {
  if (!Eo(e)) throw Error(v(200));
  return So(null, t, e, !1, n);
};
Ee.unmountComponentAtNode = function (t) {
  if (!Eo(t)) throw Error(v(40));
  return t._reactRootContainer
    ? (Jt(function () {
        So(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[tt] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = Xl;
Ee.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Eo(n)) throw Error(v(200));
  if (t == null || t._reactInternals === void 0) throw Error(v(38));
  return So(t, e, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
function mf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf);
    } catch (t) {
      console.error(t);
    }
}
mf(), (fc.exports = Ee);
var xm = fc.exports,
  Cu = xm;
(cs.createRoot = Cu.createRoot), (cs.hydrateRoot = Cu.hydrateRoot);
const Mm = "/tehtavat/vko4/assets/react-CHdo91hT.svg",
  Um = "/tehtavat/vko4/vite.svg";
var Tu = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gf = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  zm = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const o = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63));
      } else if (i > 239 && i < 365) {
        const o = t[n++],
          s = t[n++],
          l = t[n++],
          a =
            (((i & 7) << 18) | ((o & 63) << 12) | ((s & 63) << 6) | (l & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
          (e[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const o = t[n++],
          s = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((o & 63) << 6) | (s & 63)
        );
      }
    }
    return e.join("");
  },
  vf = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const o = t[i],
          s = i + 1 < t.length,
          l = s ? t[i + 1] : 0,
          a = i + 2 < t.length,
          u = a ? t[i + 2] : 0,
          h = o >> 2,
          p = ((o & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (u >> 6),
          y = u & 63;
        a || ((y = 64), s || (m = 64)), r.push(n[h], n[p], n[m], n[y]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(gf(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : zm(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const o = n[t.charAt(i++)],
          l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const p = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, o == null || l == null || u == null || p == null))
          throw new Fm();
        const m = (o << 2) | (l >> 4);
        if ((r.push(m), u !== 64)) {
          const y = ((l << 4) & 240) | (u >> 2);
          if ((r.push(y), p !== 64)) {
            const _ = ((u << 6) & 192) | p;
            r.push(_);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class Fm extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const jm = function (t) {
    const e = gf(t);
    return vf.encodeByteArray(e, !0);
  },
  yf = function (t) {
    return jm(t).replace(/\./g, "");
  },
  _f = function (t) {
    try {
      return vf.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bm() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $m = () => Bm().__FIREBASE_DEFAULTS__,
  Vm = () => {
    if (typeof process > "u" || typeof Tu > "u") return;
    const t = Tu.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  Hm = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && _f(t[1]);
    return e && JSON.parse(e);
  },
  oa = () => {
    try {
      return $m() || Vm() || Hm();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  Wm = (t) => {
    var e, n;
    return (n =
      (e = oa()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  wf = () => {
    var t;
    return (t = oa()) === null || t === void 0 ? void 0 : t.config;
  },
  Ef = (t) => {
    var e;
    return (e = oa()) === null || e === void 0 ? void 0 : e[`_${t}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bm {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function le() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Km() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())
  );
}
function Gm() {
  const t =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof t == "object" && t.id !== void 0;
}
function Qm() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Ym() {
  const t = le();
  return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
}
function Jm() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Xm() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var o;
          e(
            ((o = i.error) === null || o === void 0 ? void 0 : o.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qm = "FirebaseError";
class xt extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = qm),
      Object.setPrototypeOf(this, xt.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, $r.prototype.create);
  }
}
class $r {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      o = this.errors[e],
      s = o ? Zm(o, r) : "Error",
      l = `${this.serviceName}: ${s} (${i}).`;
    return new xt(i, l, r);
  }
}
function Zm(t, e) {
  return t.replace(eg, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const eg = /\{\$([^}]+)}/g;
function tg(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Zi(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const o = t[i],
      s = e[i];
    if (Pu(o) && Pu(s)) {
      if (!Zi(o, s)) return !1;
    } else if (o !== s) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Pu(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vr(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
function rr(t) {
  const e = {};
  return (
    t
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, o] = r.split("=");
          e[decodeURIComponent(i)] = decodeURIComponent(o);
        }
      }),
    e
  );
}
function ir(t) {
  const e = t.indexOf("?");
  if (!e) return "";
  const n = t.indexOf("#", e);
  return t.substring(e, n > 0 ? n : void 0);
}
function ng(t, e) {
  const n = new rg(t, e);
  return n.subscribe.bind(n);
}
class rg {
  constructor(e, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          e(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(e) {
    this.forEachObserver((n) => {
      n.next(e);
    });
  }
  error(e) {
    this.forEachObserver((n) => {
      n.error(e);
    }),
      this.close(e);
  }
  complete() {
    this.forEachObserver((e) => {
      e.complete();
    }),
      this.close();
  }
  subscribe(e, n, r) {
    let i;
    if (e === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    ig(e, ["next", "error", "complete"])
      ? (i = e)
      : (i = { next: e, error: n, complete: r }),
      i.next === void 0 && (i.next = rs),
      i.error === void 0 && (i.error = rs),
      i.complete === void 0 && (i.complete = rs);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      o
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, e);
  }
  sendOne(e, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          n(this.observers[e]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function ig(t, e) {
  if (typeof t != "object" || t === null) return !1;
  for (const n of e) if (n in t && typeof t[n] == "function") return !0;
  return !1;
}
function rs() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tn(t) {
  return t && t._delegate ? t._delegate : t;
}
class Un {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bt = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class og {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new bm();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (i) return null;
        throw o;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (lg(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: Bt });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(e = Bt) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = Bt) {
    return this.instances.has(e);
  }
  getOptions(e = Bt) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [o, s] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(o);
      r === l && s.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    o.add(e), this.onInitCallbacks.set(i, o);
    const s = this.instances.get(i);
    return (
      s && e(s, i),
      () => {
        o.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: sg(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = Bt) {
    return this.component ? (this.component.multipleInstances ? e : Bt) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function sg(t) {
  return t === Bt ? void 0 : t;
}
function lg(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ag {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new og(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var M;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(M || (M = {}));
const ug = {
    debug: M.DEBUG,
    verbose: M.VERBOSE,
    info: M.INFO,
    warn: M.WARN,
    error: M.ERROR,
    silent: M.SILENT,
  },
  cg = M.INFO,
  dg = {
    [M.DEBUG]: "log",
    [M.VERBOSE]: "log",
    [M.INFO]: "info",
    [M.WARN]: "warn",
    [M.ERROR]: "error",
  },
  fg = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = dg[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class Sf {
  constructor(e) {
    (this.name = e),
      (this._logLevel = cg),
      (this._logHandler = fg),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in M))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? ug[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, M.DEBUG, ...e),
      this._logHandler(this, M.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, M.VERBOSE, ...e),
      this._logHandler(this, M.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, M.INFO, ...e),
      this._logHandler(this, M.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, M.WARN, ...e),
      this._logHandler(this, M.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, M.ERROR, ...e),
      this._logHandler(this, M.ERROR, ...e);
  }
}
const hg = (t, e) => e.some((n) => t instanceof n);
let Ru, Nu;
function pg() {
  return (
    Ru ||
    (Ru = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function mg() {
  return (
    Nu ||
    (Nu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const kf = new WeakMap(),
  rl = new WeakMap(),
  If = new WeakMap(),
  is = new WeakMap(),
  sa = new WeakMap();
function gg(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", o), t.removeEventListener("error", s);
      },
      o = () => {
        n(Tt(t.result)), i();
      },
      s = () => {
        r(t.error), i();
      };
    t.addEventListener("success", o), t.addEventListener("error", s);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && kf.set(n, t);
      })
      .catch(() => {}),
    sa.set(e, t),
    e
  );
}
function vg(t) {
  if (rl.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", o),
          t.removeEventListener("error", s),
          t.removeEventListener("abort", s);
      },
      o = () => {
        n(), i();
      },
      s = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", o),
      t.addEventListener("error", s),
      t.addEventListener("abort", s);
  });
  rl.set(t, e);
}
let il = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return rl.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || If.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Tt(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function yg(t) {
  il = t(il);
}
function _g(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(os(this), e, ...n);
        return If.set(r, e.sort ? e.sort() : [e]), Tt(r);
      }
    : mg().includes(t)
    ? function (...e) {
        return t.apply(os(this), e), Tt(kf.get(this));
      }
    : function (...e) {
        return Tt(t.apply(os(this), e));
      };
}
function wg(t) {
  return typeof t == "function"
    ? _g(t)
    : (t instanceof IDBTransaction && vg(t),
      hg(t, pg()) ? new Proxy(t, il) : t);
}
function Tt(t) {
  if (t instanceof IDBRequest) return gg(t);
  if (is.has(t)) return is.get(t);
  const e = wg(t);
  return e !== t && (is.set(t, e), sa.set(e, t)), e;
}
const os = (t) => sa.get(t);
function Eg(t, e, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
  const s = indexedDB.open(t, e),
    l = Tt(s);
  return (
    r &&
      s.addEventListener("upgradeneeded", (a) => {
        r(Tt(s.result), a.oldVersion, a.newVersion, Tt(s.transaction), a);
      }),
    n && s.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        o && a.addEventListener("close", () => o()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const Sg = ["get", "getKey", "getAll", "getAllKeys", "count"],
  kg = ["put", "add", "delete", "clear"],
  ss = new Map();
function Ou(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (ss.get(e)) return ss.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = kg.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Sg.includes(n))
  )
    return;
  const o = async function (s, ...l) {
    const a = this.transaction(s, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return ss.set(e, o), o;
}
yg((t) => ({
  ...t,
  get: (e, n, r) => Ou(e, n) || t.get(e, n, r),
  has: (e, n) => !!Ou(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ig {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Cg(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Cg(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const ol = "@firebase/app",
  Au = "0.10.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xt = new Sf("@firebase/app"),
  Tg = "@firebase/app-compat",
  Pg = "@firebase/analytics-compat",
  Rg = "@firebase/analytics",
  Ng = "@firebase/app-check-compat",
  Og = "@firebase/app-check",
  Ag = "@firebase/auth",
  Lg = "@firebase/auth-compat",
  Dg = "@firebase/database",
  xg = "@firebase/database-compat",
  Mg = "@firebase/functions",
  Ug = "@firebase/functions-compat",
  zg = "@firebase/installations",
  Fg = "@firebase/installations-compat",
  jg = "@firebase/messaging",
  Bg = "@firebase/messaging-compat",
  $g = "@firebase/performance",
  Vg = "@firebase/performance-compat",
  Hg = "@firebase/remote-config",
  Wg = "@firebase/remote-config-compat",
  bg = "@firebase/storage",
  Kg = "@firebase/storage-compat",
  Gg = "@firebase/firestore",
  Qg = "@firebase/firestore-compat",
  Yg = "firebase",
  Jg = "10.10.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sl = "[DEFAULT]",
  Xg = {
    [ol]: "fire-core",
    [Tg]: "fire-core-compat",
    [Rg]: "fire-analytics",
    [Pg]: "fire-analytics-compat",
    [Og]: "fire-app-check",
    [Ng]: "fire-app-check-compat",
    [Ag]: "fire-auth",
    [Lg]: "fire-auth-compat",
    [Dg]: "fire-rtdb",
    [xg]: "fire-rtdb-compat",
    [Mg]: "fire-fn",
    [Ug]: "fire-fn-compat",
    [zg]: "fire-iid",
    [Fg]: "fire-iid-compat",
    [jg]: "fire-fcm",
    [Bg]: "fire-fcm-compat",
    [$g]: "fire-perf",
    [Vg]: "fire-perf-compat",
    [Hg]: "fire-rc",
    [Wg]: "fire-rc-compat",
    [bg]: "fire-gcs",
    [Kg]: "fire-gcs-compat",
    [Gg]: "fire-fst",
    [Qg]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Yg]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eo = new Map(),
  qg = new Map(),
  ll = new Map();
function Lu(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Xt.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function Lr(t) {
  const e = t.name;
  if (ll.has(e))
    return (
      Xt.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  ll.set(e, t);
  for (const n of eo.values()) Lu(n, t);
  for (const n of qg.values()) Lu(n, t);
  return !0;
}
function Cf(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
function Ye(t) {
  return t.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zg = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  Pt = new $r("app", "Firebase", Zg);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ev {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Un("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Pt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hr = Jg;
function Tf(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: sl, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Pt.create("bad-app-name", { appName: String(i) });
  if ((n || (n = wf()), !n)) throw Pt.create("no-options");
  const o = eo.get(i);
  if (o) {
    if (Zi(n, o.options) && Zi(r, o.config)) return o;
    throw Pt.create("duplicate-app", { appName: i });
  }
  const s = new ag(i);
  for (const a of ll.values()) s.addComponent(a);
  const l = new ev(n, r, s);
  return eo.set(i, l), l;
}
function tv(t = sl) {
  const e = eo.get(t);
  if (!e && t === sl && wf()) return Tf();
  if (!e) throw Pt.create("no-app", { appName: t });
  return e;
}
function In(t, e, n) {
  var r;
  let i = (r = Xg[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const o = i.match(/\s|\//),
    s = e.match(/\s|\//);
  if (o || s) {
    const l = [`Unable to register library "${i}" with version "${e}":`];
    o &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      o && s && l.push("and"),
      s &&
        l.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Xt.warn(l.join(" "));
    return;
  }
  Lr(new Un(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nv = "firebase-heartbeat-database",
  rv = 1,
  Dr = "firebase-heartbeat-store";
let ls = null;
function Pf() {
  return (
    ls ||
      (ls = Eg(nv, rv, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(Dr);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw Pt.create("idb-open", { originalErrorMessage: t.message });
      })),
    ls
  );
}
async function iv(t) {
  try {
    const n = (await Pf()).transaction(Dr),
      r = await n.objectStore(Dr).get(Rf(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof xt) Xt.warn(e.message);
    else {
      const n = Pt.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Xt.warn(n.message);
    }
  }
}
async function Du(t, e) {
  try {
    const r = (await Pf()).transaction(Dr, "readwrite");
    await r.objectStore(Dr).put(e, Rf(t)), await r.done;
  } catch (n) {
    if (n instanceof xt) Xt.warn(n.message);
    else {
      const r = Pt.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Xt.warn(r.message);
    }
  }
}
function Rf(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ov = 1024,
  sv = 30 * 24 * 60 * 60 * 1e3;
class lv {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new uv(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      o = xu();
    if (
      !(
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((s) => s.date === o)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: o, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((s) => {
            const l = new Date(s.date).valueOf();
            return Date.now() - l <= sv;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var e;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = xu(),
      { heartbeatsToSend: r, unsentEntries: i } = av(
        this._heartbeatsCache.heartbeats
      ),
      o = yf(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      o
    );
  }
}
function xu() {
  return new Date().toISOString().substring(0, 10);
}
function av(t, e = ov) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const o = n.find((s) => s.agent === i.agent);
    if (o) {
      if ((o.dates.push(i.date), Mu(n) > e)) {
        o.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Mu(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class uv {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Jm()
      ? Xm()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await iv(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Du(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Du(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Mu(t) {
  return yf(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cv(t) {
  Lr(new Un("platform-logger", (e) => new Ig(e), "PRIVATE")),
    Lr(new Un("heartbeat", (e) => new lv(e), "PRIVATE")),
    In(ol, Au, t),
    In(ol, Au, "esm2017"),
    In("fire-js", "");
}
cv("");
function la(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      e.indexOf(r) < 0 &&
      (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
        (n[r[i]] = t[r[i]]);
  return n;
}
function Nf() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const dv = Nf,
  Of = new $r("auth", "Firebase", Nf());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const to = new Sf("@firebase/auth");
function fv(t, ...e) {
  to.logLevel <= M.WARN && to.warn(`Auth (${Hr}): ${t}`, ...e);
}
function Ci(t, ...e) {
  to.logLevel <= M.ERROR && to.error(`Auth (${Hr}): ${t}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ze(t, ...e) {
  throw aa(t, ...e);
}
function He(t, ...e) {
  return aa(t, ...e);
}
function Af(t, e, n) {
  const r = Object.assign(Object.assign({}, dv()), { [e]: n });
  return new $r("auth", "Firebase", r).create(e, { appName: t.name });
}
function Rt(t) {
  return Af(
    t,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function aa(t, ...e) {
  if (typeof t != "string") {
    const n = e[0],
      r = [...e.slice(1)];
    return r[0] && (r[0].appName = t.name), t._errorFactory.create(n, ...r);
  }
  return Of.create(t, ...e);
}
function P(t, e, ...n) {
  if (!t) throw aa(e, ...n);
}
function Je(t) {
  const e = "INTERNAL ASSERTION FAILED: " + t;
  throw (Ci(e), new Error(e));
}
function it(t, e) {
  t || Je(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function al() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.href)) ||
    ""
  );
}
function hv() {
  return Uu() === "http:" || Uu() === "https:";
}
function Uu() {
  var t;
  return (
    (typeof self < "u" &&
      ((t = self.location) === null || t === void 0 ? void 0 : t.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pv() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (hv() || Gm() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function mv() {
  if (typeof navigator > "u") return null;
  const t = navigator;
  return (t.languages && t.languages[0]) || t.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wr {
  constructor(e, n) {
    (this.shortDelay = e),
      (this.longDelay = n),
      it(n > e, "Short delay should be less than long delay!"),
      (this.isMobile = Km() || Qm());
  }
  get() {
    return pv()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ua(t, e) {
  it(t.emulator, "Emulator should always be set here");
  const { url: n } = t.emulator;
  return e ? `${n}${e.startsWith("/") ? e.slice(1) : e}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lf {
  static initialize(e, n, r) {
    (this.fetchImpl = e),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Je(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Je(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Je(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gv = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vv = new Wr(3e4, 6e4);
function nn(t, e) {
  return t.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId })
    : e;
}
async function Mt(t, e, n, r, i = {}) {
  return Df(t, i, async () => {
    let o = {},
      s = {};
    r && (e === "GET" ? (s = r) : (o = { body: JSON.stringify(r) }));
    const l = Vr(Object.assign({ key: t.config.apiKey }, s)).slice(1),
      a = await t._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      t.languageCode && (a["X-Firebase-Locale"] = t.languageCode),
      Lf.fetch()(
        xf(t, t.config.apiHost, n, l),
        Object.assign(
          { method: e, headers: a, referrerPolicy: "no-referrer" },
          o
        )
      )
    );
  });
}
async function Df(t, e, n) {
  t._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, gv), e);
  try {
    const i = new _v(t),
      o = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const s = await o.json();
    if ("needConfirmation" in s)
      throw fi(t, "account-exists-with-different-credential", s);
    if (o.ok && !("errorMessage" in s)) return s;
    {
      const l = o.ok ? s.errorMessage : s.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw fi(t, "credential-already-in-use", s);
      if (a === "EMAIL_EXISTS") throw fi(t, "email-already-in-use", s);
      if (a === "USER_DISABLED") throw fi(t, "user-disabled", s);
      const h = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw Af(t, h, u);
      ze(t, h);
    }
  } catch (i) {
    if (i instanceof xt) throw i;
    ze(t, "network-request-failed", { message: String(i) });
  }
}
async function ko(t, e, n, r, i = {}) {
  const o = await Mt(t, e, n, r, i);
  return (
    "mfaPendingCredential" in o &&
      ze(t, "multi-factor-auth-required", { _serverResponse: o }),
    o
  );
}
function xf(t, e, n, r) {
  const i = `${e}${n}?${r}`;
  return t.config.emulator ? ua(t.config, i) : `${t.config.apiScheme}://${i}`;
}
function yv(t) {
  switch (t) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class _v {
  constructor(e) {
    (this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(He(this.auth, "network-request-failed")),
          vv.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function fi(t, e, n) {
  const r = { appName: t.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = He(t, e, r);
  return (i.customData._tokenResponse = n), i;
}
function zu(t) {
  return t !== void 0 && t.enterprise !== void 0;
}
class wv {
  constructor(e) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = e.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState);
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === e) return yv(n.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === "ENFORCE" ||
      this.getProviderEnforcementState(e) === "AUDIT"
    );
  }
}
async function Ev(t, e) {
  return Mt(t, "GET", "/v2/recaptchaConfig", nn(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Sv(t, e) {
  return Mt(t, "POST", "/v1/accounts:delete", e);
}
async function Mf(t, e) {
  return Mt(t, "POST", "/v1/accounts:lookup", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pr(t) {
  if (t)
    try {
      const e = new Date(Number(t));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function kv(t, e = !1) {
  const n = tn(t),
    r = await n.getIdToken(e),
    i = ca(r);
  P(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const o = typeof i.firebase == "object" ? i.firebase : void 0,
    s = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: pr(as(i.auth_time)),
    issuedAtTime: pr(as(i.iat)),
    expirationTime: pr(as(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
  };
}
function as(t) {
  return Number(t) * 1e3;
}
function ca(t) {
  const [e, n, r] = t.split(".");
  if (e === void 0 || n === void 0 || r === void 0)
    return Ci("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = _f(n);
    return i
      ? JSON.parse(i)
      : (Ci("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Ci(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function Fu(t) {
  const e = ca(t);
  return (
    P(e, "internal-error"),
    P(typeof e.exp < "u", "internal-error"),
    P(typeof e.iat < "u", "internal-error"),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xr(t, e, n = !1) {
  if (n) return e;
  try {
    return await e;
  } catch (r) {
    throw (
      (r instanceof xt &&
        Iv(r) &&
        t.auth.currentUser === t &&
        (await t.auth.signOut()),
      r)
    );
  }
}
function Iv({ code: t }) {
  return t === "auth/user-disabled" || t === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cv {
  constructor(e) {
    (this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var n;
    if (e) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ul {
  constructor(e, n) {
    (this.createdAt = e), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = pr(this.lastLoginAt)),
      (this.creationTime = pr(this.createdAt));
  }
  _copy(e) {
    (this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function no(t) {
  var e;
  const n = t.auth,
    r = await t.getIdToken(),
    i = await xr(t, Mf(n, { idToken: r }));
  P(i == null ? void 0 : i.users.length, n, "internal-error");
  const o = i.users[0];
  t._notifyReloadListener(o);
  const s =
      !((e = o.providerUserInfo) === null || e === void 0) && e.length
        ? Uf(o.providerUserInfo)
        : [],
    l = Pv(t.providerData, s),
    a = t.isAnonymous,
    u = !(t.email && o.passwordHash) && !(l != null && l.length),
    h = a ? u : !1,
    p = {
      uid: o.localId,
      displayName: o.displayName || null,
      photoURL: o.photoUrl || null,
      email: o.email || null,
      emailVerified: o.emailVerified || !1,
      phoneNumber: o.phoneNumber || null,
      tenantId: o.tenantId || null,
      providerData: l,
      metadata: new ul(o.createdAt, o.lastLoginAt),
      isAnonymous: h,
    };
  Object.assign(t, p);
}
async function Tv(t) {
  const e = tn(t);
  await no(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e);
}
function Pv(t, e) {
  return [
    ...t.filter((r) => !e.some((i) => i.providerId === r.providerId)),
    ...e,
  ];
}
function Uf(t) {
  return t.map((e) => {
    var { providerId: n } = e,
      r = la(e, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Rv(t, e) {
  const n = await Df(t, {}, async () => {
    const r = Vr({ grant_type: "refresh_token", refresh_token: e }).slice(1),
      { tokenApiHost: i, apiKey: o } = t.config,
      s = xf(t, i, "/v1/token", `key=${o}`),
      l = await t._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      Lf.fetch()(s, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function Nv(t, e) {
  return Mt(t, "POST", "/v2/accounts:revokeToken", nn(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cn {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    P(e.idToken, "internal-error"),
      P(typeof e.idToken < "u", "internal-error"),
      P(typeof e.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in e && typeof e.expiresIn < "u"
        ? Number(e.expiresIn)
        : Fu(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, n);
  }
  updateFromIdToken(e) {
    P(e.length !== 0, "internal-error");
    const n = Fu(e);
    this.updateTokensAndExpiration(e, null, n);
  }
  async getToken(e, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (P(this.refreshToken, e, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, n) {
    const { accessToken: r, refreshToken: i, expiresIn: o } = await Rv(e, n);
    this.updateTokensAndExpiration(r, i, Number(o));
  }
  updateTokensAndExpiration(e, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(e, n) {
    const { refreshToken: r, accessToken: i, expirationTime: o } = n,
      s = new Cn();
    return (
      r &&
        (P(typeof r == "string", "internal-error", { appName: e }),
        (s.refreshToken = r)),
      i &&
        (P(typeof i == "string", "internal-error", { appName: e }),
        (s.accessToken = i)),
      o &&
        (P(typeof o == "number", "internal-error", { appName: e }),
        (s.expirationTime = o)),
      s
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    (this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime);
  }
  _clone() {
    return Object.assign(new Cn(), this.toJSON());
  }
  _performRefresh() {
    return Je("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lt(t, e) {
  P(typeof t == "string" || typeof t > "u", "internal-error", { appName: e });
}
class Xe {
  constructor(e) {
    var { uid: n, auth: r, stsTokenManager: i } = e,
      o = la(e, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new Cv(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = o.displayName || null),
      (this.email = o.email || null),
      (this.emailVerified = o.emailVerified || !1),
      (this.phoneNumber = o.phoneNumber || null),
      (this.photoURL = o.photoURL || null),
      (this.isAnonymous = o.isAnonymous || !1),
      (this.tenantId = o.tenantId || null),
      (this.providerData = o.providerData ? [...o.providerData] : []),
      (this.metadata = new ul(o.createdAt || void 0, o.lastLoginAt || void 0));
  }
  async getIdToken(e) {
    const n = await xr(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      P(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(e) {
    return kv(this, e);
  }
  reload() {
    return Tv(this);
  }
  _assign(e) {
    this !== e &&
      (P(this.uid === e.uid, this.auth, "internal-error"),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const n = new Xe(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(e) {
    P(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, n = !1) {
    let r = !1;
    e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
      n && (await no(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Ye(this.auth.app)) return Promise.reject(Rt(this.auth));
    const e = await this.getIdToken();
    return (
      await xr(this, Sv(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(e, n) {
    var r, i, o, s, l, a, u, h;
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      m = (i = n.email) !== null && i !== void 0 ? i : void 0,
      y = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0,
      _ = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
      w = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      x = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      d = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      c = (h = n.lastLoginAt) !== null && h !== void 0 ? h : void 0,
      {
        uid: f,
        emailVerified: g,
        isAnonymous: E,
        providerData: I,
        stsTokenManager: C,
      } = n;
    P(f && C, e, "internal-error");
    const T = Cn.fromJSON(this.name, C);
    P(typeof f == "string", e, "internal-error"),
      lt(p, e.name),
      lt(m, e.name),
      P(typeof g == "boolean", e, "internal-error"),
      P(typeof E == "boolean", e, "internal-error"),
      lt(y, e.name),
      lt(_, e.name),
      lt(w, e.name),
      lt(x, e.name),
      lt(d, e.name),
      lt(c, e.name);
    const F = new Xe({
      uid: f,
      auth: e,
      email: m,
      emailVerified: g,
      displayName: p,
      isAnonymous: E,
      photoURL: _,
      phoneNumber: y,
      tenantId: w,
      stsTokenManager: T,
      createdAt: d,
      lastLoginAt: c,
    });
    return (
      I &&
        Array.isArray(I) &&
        (F.providerData = I.map((O) => Object.assign({}, O))),
      x && (F._redirectEventId = x),
      F
    );
  }
  static async _fromIdTokenResponse(e, n, r = !1) {
    const i = new Cn();
    i.updateFromServerResponse(n);
    const o = new Xe({
      uid: n.localId,
      auth: e,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await no(o), o;
  }
  static async _fromGetAccountInfoResponse(e, n, r) {
    const i = n.users[0];
    P(i.localId !== void 0, "internal-error");
    const o = i.providerUserInfo !== void 0 ? Uf(i.providerUserInfo) : [],
      s = !(i.email && i.passwordHash) && !(o != null && o.length),
      l = new Cn();
    l.updateFromIdToken(r);
    const a = new Xe({
        uid: i.localId,
        auth: e,
        stsTokenManager: l,
        isAnonymous: s,
      }),
      u = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: o,
        metadata: new ul(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(o != null && o.length),
      };
    return Object.assign(a, u), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ju = new Map();
function qe(t) {
  it(t instanceof Function, "Expected a class definition");
  let e = ju.get(t);
  return e
    ? (it(e instanceof t, "Instance stored in cache mismatched with class"), e)
    : ((e = new t()), ju.set(t, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zf {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, n) {
    this.storage[e] = n;
  }
  async _get(e) {
    const n = this.storage[e];
    return n === void 0 ? null : n;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
zf.type = "NONE";
const Bu = zf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ti(t, e, n) {
  return `firebase:${t}:${e}:${n}`;
}
class Tn {
  constructor(e, n, r) {
    (this.persistence = e), (this.auth = n), (this.userKey = r);
    const { config: i, name: o } = this.auth;
    (this.fullUserKey = Ti(this.userKey, i.apiKey, o)),
      (this.fullPersistenceKey = Ti("persistence", i.apiKey, o)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? Xe._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, n, r = "authUser") {
    if (!n.length) return new Tn(qe(Bu), e, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let o = i[0] || qe(Bu);
    const s = Ti(r, e.config.apiKey, e.name);
    let l = null;
    for (const u of n)
      try {
        const h = await u._get(s);
        if (h) {
          const p = Xe._fromJSON(e, h);
          u !== o && (l = p), (o = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !o._shouldAllowMigration || !a.length
      ? new Tn(o, e, r)
      : ((o = a[0]),
        l && (await o._set(s, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== o)
              try {
                await u._remove(s);
              } catch {}
          })
        ),
        new Tn(o, e, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $u(t) {
  const e = t.toLowerCase();
  if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/"))
    return "Opera";
  if (Bf(e)) return "IEMobile";
  if (e.includes("msie") || e.includes("trident/")) return "IE";
  if (e.includes("edge/")) return "Edge";
  if (Ff(e)) return "Firefox";
  if (e.includes("silk/")) return "Silk";
  if (Vf(e)) return "Blackberry";
  if (Hf(e)) return "Webos";
  if (da(e)) return "Safari";
  if ((e.includes("chrome/") || jf(e)) && !e.includes("edge/")) return "Chrome";
  if ($f(e)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = t.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Ff(t = le()) {
  return /firefox\//i.test(t);
}
function da(t = le()) {
  const e = t.toLowerCase();
  return (
    e.includes("safari/") &&
    !e.includes("chrome/") &&
    !e.includes("crios/") &&
    !e.includes("android")
  );
}
function jf(t = le()) {
  return /crios\//i.test(t);
}
function Bf(t = le()) {
  return /iemobile/i.test(t);
}
function $f(t = le()) {
  return /android/i.test(t);
}
function Vf(t = le()) {
  return /blackberry/i.test(t);
}
function Hf(t = le()) {
  return /webos/i.test(t);
}
function Io(t = le()) {
  return (
    /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t))
  );
}
function Ov(t = le()) {
  var e;
  return (
    Io(t) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Av() {
  return Ym() && document.documentMode === 10;
}
function Wf(t = le()) {
  return Io(t) || $f(t) || Hf(t) || Vf(t) || /windows phone/i.test(t) || Bf(t);
}
function Lv() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bf(t, e = []) {
  let n;
  switch (t) {
    case "Browser":
      n = $u(le());
      break;
    case "Worker":
      n = `${$u(le())}-${t}`;
      break;
    default:
      n = t;
  }
  const r = e.length ? e.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Hr}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dv {
  constructor(e) {
    (this.auth = e), (this.queue = []);
  }
  pushCallback(e, n) {
    const r = (o) =>
      new Promise((s, l) => {
        try {
          const a = e(o);
          s(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const n = [];
    try {
      for (const r of this.queue) await r(e), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function xv(t, e = {}) {
  return Mt(t, "GET", "/v2/passwordPolicy", nn(t, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mv = 6;
class Uv {
  constructor(e) {
    var n, r, i, o;
    const s = e.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = s.minPasswordLength) !== null && n !== void 0 ? n : Mv),
      s.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
      s.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          s.containsLowercaseCharacter),
      s.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          s.containsUppercaseCharacter),
      s.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          s.containsNumericCharacter),
      s.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          s.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = e.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (o = e.forceUpgradeOnSignin) !== null && o !== void 0 ? o : !1),
      (this.schemaVersion = e.schemaVersion);
  }
  validatePassword(e) {
    var n, r, i, o, s, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, a),
      this.validatePasswordCharacterOptions(e, a),
      a.isValid &&
        (a.isValid =
          (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsUppercaseLetter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(e, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = e.length >= r),
      i && (n.meetsMaxPasswordLength = e.length <= i);
  }
  validatePasswordCharacterOptions(e, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < e.length; i++)
      (r = e.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(e, n, r, i, o) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = o));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zv {
  constructor(e, n, r, i) {
    (this.app = e),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Vu(this)),
      (this.idTokenSubscription = new Vu(this)),
      (this.beforeStateQueue = new Dv(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Of),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(e, n) {
    return (
      n && (this._popupRedirectResolver = qe(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Tn.create(this, e)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        this._currentUser._assign(e), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const n = await Mf(this, { idToken: e }),
        r = await Xe._fromGetAccountInfoResponse(this, n, e);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(e) {
    var n;
    if (Ye(this.app)) {
      const s = this.app.settings.authIdToken;
      return s
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(s).then(l, l)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      o = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(e);
      (!s || s === l) && a != null && a.user && ((i = a.user), (o = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (s) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(s)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      P(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(e) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await no(e);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = mv();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (Ye(this.app)) return Promise.reject(Rt(this));
    const n = e ? tn(e) : null;
    return (
      n &&
        P(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(e, n = !1) {
    if (!this._deleted)
      return (
        e && P(this.tenantId === e.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          await this.directlySetCurrentUser(e), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Ye(this.app)
      ? Promise.reject(Rt(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return Ye(this.app)
      ? Promise.reject(Rt(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(qe(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await xv(this),
      n = new Uv(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new $r("auth", "Firebase", e());
  }
  onAuthStateChanged(e, n, r) {
    return this.registerStateListener(this.authStateSubscription, e, n, r);
  }
  beforeAuthStateChanged(e, n) {
    return this.beforeStateQueue.pushCallback(e, n);
  }
  onIdTokenChanged(e, n, r) {
    return this.registerStateListener(this.idTokenSubscription, e, n, r);
  }
  authStateReady() {
    return new Promise((e, n) => {
      if (this.currentUser) e();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), e();
        }, n);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: e,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await Nv(this, r);
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const n = (e && qe(e)) || this._popupRedirectResolver;
      P(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Tn.create(
          this,
          [qe(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === e
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === e
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, n, r, i) {
    if (this._deleted) return () => {};
    const o = typeof n == "function" ? n : n.next.bind(n);
    let s = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (P(l, this, "internal-error"),
      l.then(() => {
        s || o(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const a = e.addObserver(n, r, i);
      return () => {
        (s = !0), a();
      };
    } else {
      const a = e.addObserver(n);
      return () => {
        (s = !0), a();
      };
    }
  }
  async directlySetCurrentUser(e) {
    this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(e) {
    return (this.operations = this.operations.then(e, e)), this.operations;
  }
  get assertedPersistence() {
    return (
      P(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = bf(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var e;
    const n = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      n != null &&
        n.error &&
        fv(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function $n(t) {
  return tn(t);
}
class Vu {
  constructor(e) {
    (this.auth = e),
      (this.observer = null),
      (this.addObserver = ng((n) => (this.observer = n)));
  }
  get next() {
    return (
      P(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Co = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function Fv(t) {
  Co = t;
}
function Kf(t) {
  return Co.loadJS(t);
}
function jv() {
  return Co.recaptchaEnterpriseScript;
}
function Bv() {
  return Co.gapiScript;
}
function $v(t) {
  return `__${t}${Math.floor(Math.random() * 1e6)}`;
}
const Vv = "recaptcha-enterprise",
  Hv = "NO_RECAPTCHA";
class Wv {
  constructor(e) {
    (this.type = Vv), (this.auth = $n(e));
  }
  async verify(e = "verify", n = !1) {
    async function r(o) {
      if (!n) {
        if (o.tenantId == null && o._agentRecaptchaConfig != null)
          return o._agentRecaptchaConfig.siteKey;
        if (
          o.tenantId != null &&
          o._tenantRecaptchaConfigs[o.tenantId] !== void 0
        )
          return o._tenantRecaptchaConfigs[o.tenantId].siteKey;
      }
      return new Promise(async (s, l) => {
        Ev(o, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((a) => {
            if (a.recaptchaKey === void 0)
              l(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new wv(a);
              return (
                o.tenantId == null
                  ? (o._agentRecaptchaConfig = u)
                  : (o._tenantRecaptchaConfigs[o.tenantId] = u),
                s(u.siteKey)
              );
            }
          })
          .catch((a) => {
            l(a);
          });
      });
    }
    function i(o, s, l) {
      const a = window.grecaptcha;
      zu(a)
        ? a.enterprise.ready(() => {
            a.enterprise
              .execute(o, { action: e })
              .then((u) => {
                s(u);
              })
              .catch(() => {
                s(Hv);
              });
          })
        : l(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((o, s) => {
      r(this.auth)
        .then((l) => {
          if (!n && zu(window.grecaptcha)) i(l, o, s);
          else {
            if (typeof window > "u") {
              s(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let a = jv();
            a.length !== 0 && (a += l),
              Kf(a)
                .then(() => {
                  i(l, o, s);
                })
                .catch((u) => {
                  s(u);
                });
          }
        })
        .catch((l) => {
          s(l);
        });
    });
  }
}
async function Hu(t, e, n, r = !1) {
  const i = new Wv(t);
  let o;
  try {
    o = await i.verify(n);
  } catch {
    o = await i.verify(n, !0);
  }
  const s = Object.assign({}, e);
  return (
    r
      ? Object.assign(s, { captchaResp: o })
      : Object.assign(s, { captchaResponse: o }),
    Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    s
  );
}
async function Wu(t, e, n, r) {
  var i;
  if (
    !((i = t._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const o = await Hu(t, e, n, n === "getOobCode");
    return r(t, o);
  } else
    return r(t, e).catch(async (o) => {
      if (o.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const s = await Hu(t, e, n, n === "getOobCode");
        return r(t, s);
      } else return Promise.reject(o);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bv(t, e) {
  const n = Cf(t, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      o = n.getOptions();
    if (Zi(o, e ?? {})) return i;
    ze(i, "already-initialized");
  }
  return n.initialize({ options: e });
}
function Kv(t, e) {
  const n = (e == null ? void 0 : e.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(qe);
  e != null && e.errorMap && t._updateErrorMap(e.errorMap),
    t._initializeWithPersistence(
      r,
      e == null ? void 0 : e.popupRedirectResolver
    );
}
function Gv(t, e, n) {
  const r = $n(t);
  P(r._canInitEmulator, r, "emulator-config-failed"),
    P(/^https?:\/\//.test(e), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    o = Gf(e),
    { host: s, port: l } = Qv(e),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${o}//${s}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: s,
      port: l,
      protocol: o.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || Yv();
}
function Gf(t) {
  const e = t.indexOf(":");
  return e < 0 ? "" : t.substr(0, e + 1);
}
function Qv(t) {
  const e = Gf(t),
    n = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const o = i[1];
    return { host: o, port: bu(r.substr(o.length + 1)) };
  } else {
    const [o, s] = r.split(":");
    return { host: o, port: bu(s) };
  }
}
function bu(t) {
  if (!t) return null;
  const e = Number(t);
  return isNaN(e) ? null : e;
}
function Yv() {
  function t() {
    const e = document.createElement("p"),
      n = e.style;
    (e.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      e.classList.add("firebase-emulator-warning"),
      document.body.appendChild(e);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", t)
        : t());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fa {
  constructor(e, n) {
    (this.providerId = e), (this.signInMethod = n);
  }
  toJSON() {
    return Je("not implemented");
  }
  _getIdTokenResponse(e) {
    return Je("not implemented");
  }
  _linkToIdToken(e, n) {
    return Je("not implemented");
  }
  _getReauthenticationResolver(e) {
    return Je("not implemented");
  }
}
async function Jv(t, e) {
  return Mt(t, "POST", "/v1/accounts:signUp", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Xv(t, e) {
  return ko(t, "POST", "/v1/accounts:signInWithPassword", nn(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qv(t, e) {
  return ko(t, "POST", "/v1/accounts:signInWithEmailLink", nn(t, e));
}
async function Zv(t, e) {
  return ko(t, "POST", "/v1/accounts:signInWithEmailLink", nn(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mr extends fa {
  constructor(e, n, r, i = null) {
    super("password", r),
      (this._email = e),
      (this._password = n),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(e, n) {
    return new Mr(e, n, "password");
  }
  static _fromEmailAndCode(e, n, r = null) {
    return new Mr(e, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Wu(e, n, "signInWithPassword", Xv);
      case "emailLink":
        return qv(e, { email: this._email, oobCode: this._password });
      default:
        ze(e, "internal-error");
    }
  }
  async _linkToIdToken(e, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return Wu(e, r, "signUpPassword", Jv);
      case "emailLink":
        return Zv(e, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        ze(e, "internal-error");
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Pn(t, e) {
  return ko(t, "POST", "/v1/accounts:signInWithIdp", nn(t, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ey = "http://localhost";
class qt extends fa {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(e) {
    const n = new qt(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (n.idToken = e.idToken),
          e.accessToken && (n.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (n.nonce = e.nonce),
          e.pendingToken && (n.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
        ? ((n.accessToken = e.oauthToken), (n.secret = e.oauthTokenSecret))
        : ze("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const n = typeof e == "string" ? JSON.parse(e) : e,
      { providerId: r, signInMethod: i } = n,
      o = la(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const s = new qt(r, i);
    return (
      (s.idToken = o.idToken || void 0),
      (s.accessToken = o.accessToken || void 0),
      (s.secret = o.secret),
      (s.nonce = o.nonce),
      (s.pendingToken = o.pendingToken || null),
      s
    );
  }
  _getIdTokenResponse(e) {
    const n = this.buildRequest();
    return Pn(e, n);
  }
  _linkToIdToken(e, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Pn(e, r);
  }
  _getReauthenticationResolver(e) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Pn(e, n);
  }
  buildRequest() {
    const e = { requestUri: ey, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (e.postBody = Vr(n));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ty(t) {
  switch (t) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function ny(t) {
  const e = rr(ir(t)).link,
    n = e ? rr(ir(e)).deep_link_id : null,
    r = rr(ir(t)).deep_link_id;
  return (r ? rr(ir(r)).link : null) || r || n || e || t;
}
class ha {
  constructor(e) {
    var n, r, i, o, s, l;
    const a = rr(ir(e)),
      u = (n = a.apiKey) !== null && n !== void 0 ? n : null,
      h = (r = a.oobCode) !== null && r !== void 0 ? r : null,
      p = ty((i = a.mode) !== null && i !== void 0 ? i : null);
    P(u && h && p, "argument-error"),
      (this.apiKey = u),
      (this.operation = p),
      (this.code = h),
      (this.continueUrl =
        (o = a.continueUrl) !== null && o !== void 0 ? o : null),
      (this.languageCode =
        (s = a.languageCode) !== null && s !== void 0 ? s : null),
      (this.tenantId = (l = a.tenantId) !== null && l !== void 0 ? l : null);
  }
  static parseLink(e) {
    const n = ny(e);
    try {
      return new ha(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vn {
  constructor() {
    this.providerId = Vn.PROVIDER_ID;
  }
  static credential(e, n) {
    return Mr._fromEmailAndPassword(e, n);
  }
  static credentialWithLink(e, n) {
    const r = ha.parseLink(n);
    return P(r, "argument-error"), Mr._fromEmailAndCode(e, r.code, r.tenantId);
  }
}
Vn.PROVIDER_ID = "password";
Vn.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Vn.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qf {
  constructor(e) {
    (this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return (this.customParameters = e), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class br extends Qf {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(e) {
    return this.scopes.includes(e) || this.scopes.push(e), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ft extends br {
  constructor() {
    super("facebook.com");
  }
  static credential(e) {
    return qt._fromParams({
      providerId: ft.PROVIDER_ID,
      signInMethod: ft.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return ft.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return ft.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return ft.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ft.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
ft.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ht extends br {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(e, n) {
    return qt._fromParams({
      providerId: ht.PROVIDER_ID,
      signInMethod: ht.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: n,
    });
  }
  static credentialFromResult(e) {
    return ht.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return ht.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = e;
    if (!n && !r) return null;
    try {
      return ht.credential(n, r);
    } catch {
      return null;
    }
  }
}
ht.GOOGLE_SIGN_IN_METHOD = "google.com";
ht.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pt extends br {
  constructor() {
    super("github.com");
  }
  static credential(e) {
    return qt._fromParams({
      providerId: pt.PROVIDER_ID,
      signInMethod: pt.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return pt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return pt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !("oauthAccessToken" in e) || !e.oauthAccessToken) return null;
    try {
      return pt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
pt.GITHUB_SIGN_IN_METHOD = "github.com";
pt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mt extends br {
  constructor() {
    super("twitter.com");
  }
  static credential(e, n) {
    return qt._fromParams({
      providerId: mt.PROVIDER_ID,
      signInMethod: mt.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(e) {
    return mt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return mt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = e;
    if (!n || !r) return null;
    try {
      return mt.credential(n, r);
    } catch {
      return null;
    }
  }
}
mt.TWITTER_SIGN_IN_METHOD = "twitter.com";
mt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zn {
  constructor(e) {
    (this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType);
  }
  static async _fromIdTokenResponse(e, n, r, i = !1) {
    const o = await Xe._fromIdTokenResponse(e, r, i),
      s = Ku(r);
    return new zn({
      user: o,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(e, n, r) {
    await e._updateTokensIfNecessary(r, !0);
    const i = Ku(r);
    return new zn({
      user: e,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function Ku(t) {
  return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro extends xt {
  constructor(e, n, r, i) {
    var o;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, ro.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (o = e.tenantId) !== null && o !== void 0 ? o : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(e, n, r, i) {
    return new ro(e, n, r, i);
  }
}
function Yf(t, e, n, r) {
  return (
    e === "reauthenticate"
      ? n._getReauthenticationResolver(t)
      : n._getIdTokenResponse(t)
  ).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required"
      ? ro._fromErrorAndOperation(t, o, e, r)
      : o;
  });
}
async function ry(t, e, n = !1) {
  const r = await xr(t, e._linkToIdToken(t.auth, await t.getIdToken()), n);
  return zn._forOperation(t, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function iy(t, e, n = !1) {
  const { auth: r } = t;
  if (Ye(r.app)) return Promise.reject(Rt(r));
  const i = "reauthenticate";
  try {
    const o = await xr(t, Yf(r, i, e, t), n);
    P(o.idToken, r, "internal-error");
    const s = ca(o.idToken);
    P(s, r, "internal-error");
    const { sub: l } = s;
    return P(t.uid === l, r, "user-mismatch"), zn._forOperation(t, i, o);
  } catch (o) {
    throw (
      ((o == null ? void 0 : o.code) === "auth/user-not-found" &&
        ze(r, "user-mismatch"),
      o)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Jf(t, e, n = !1) {
  if (Ye(t.app)) return Promise.reject(Rt(t));
  const r = "signIn",
    i = await Yf(t, r, e),
    o = await zn._fromIdTokenResponse(t, r, i);
  return n || (await t._updateCurrentUser(o.user)), o;
}
async function oy(t, e) {
  return Jf($n(t), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sy(t) {
  const e = $n(t);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
function ly(t, e, n) {
  return Ye(t.app)
    ? Promise.reject(Rt(t))
    : oy(tn(t), Vn.credential(e, n)).catch(async (r) => {
        throw (
          (r.code === "auth/password-does-not-meet-requirements" && sy(t), r)
        );
      });
}
function ay(t, e, n, r) {
  return tn(t).onIdTokenChanged(e, n, r);
}
function uy(t, e, n) {
  return tn(t).beforeAuthStateChanged(e, n);
}
const io = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xf {
  constructor(e, n) {
    (this.storageRetriever = e), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(io, "1"),
          this.storage.removeItem(io),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, n) {
    return this.storage.setItem(e, JSON.stringify(n)), Promise.resolve();
  }
  _get(e) {
    const n = this.storage.getItem(e);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(e) {
    return this.storage.removeItem(e), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cy() {
  const t = le();
  return da(t) || Io(t);
}
const dy = 1e3,
  fy = 10;
class qf extends Xf {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (e, n) => this.onStorageEvent(e, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = cy() && Lv()),
      (this.fallbackToPolling = Wf()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(e) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && e(n, i, r);
    }
  }
  onStorageEvent(e, n = !1) {
    if (!e.key) {
      this.forAllChangedKeys((s, l, a) => {
        this.notifyListeners(s, a);
      });
      return;
    }
    const r = e.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const s = this.storage.getItem(r);
      if (e.newValue !== s)
        e.newValue !== null
          ? this.storage.setItem(r, e.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === e.newValue && !n) return;
    }
    const i = () => {
        const s = this.storage.getItem(r);
        (!n && this.localCache[r] === s) || this.notifyListeners(r, s);
      },
      o = this.storage.getItem(r);
    Av() && o !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(i, fy)
      : i();
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: e, oldValue: n, newValue: r }),
            !0
          );
        });
      }, dy));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(e, n) {
    await super._set(e, n), (this.localCache[e] = JSON.stringify(n));
  }
  async _get(e) {
    const n = await super._get(e);
    return (this.localCache[e] = JSON.stringify(n)), n;
  }
  async _remove(e) {
    await super._remove(e), delete this.localCache[e];
  }
}
qf.type = "LOCAL";
const hy = qf;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zf extends Xf {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(e, n) {}
  _removeListener(e, n) {}
}
Zf.type = "SESSION";
const eh = Zf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function py(t) {
  return Promise.all(
    t.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class To {
  constructor(e) {
    (this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(e) {
    const n = this.receivers.find((i) => i.isListeningto(e));
    if (n) return n;
    const r = new To(e);
    return this.receivers.push(r), r;
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const n = e,
      { eventId: r, eventType: i, data: o } = n.data,
      s = this.handlersMap[i];
    if (!(s != null && s.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(s).map(async (u) => u(n.origin, o)),
      a = await py(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(e, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(n);
  }
  _unsubscribe(e, n) {
    this.handlersMap[e] && n && this.handlersMap[e].delete(n),
      (!n || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
To.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pa(t = "", e = 10) {
  let n = "";
  for (let r = 0; r < e; r++) n += Math.floor(Math.random() * 10);
  return t + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class my {
  constructor(e) {
    (this.target = e), (this.handlers = new Set());
  }
  removeMessageHandler(e) {
    e.messageChannel &&
      (e.messageChannel.port1.removeEventListener("message", e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e);
  }
  async _send(e, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let o, s;
    return new Promise((l, a) => {
      const u = pa("", 20);
      i.port1.start();
      const h = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (s = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === u)
            switch (m.data.status) {
              case "ack":
                clearTimeout(h),
                  (o = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(o), l(m.data.response);
                break;
              default:
                clearTimeout(h),
                  clearTimeout(o),
                  a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(s),
        i.port1.addEventListener("message", s.onMessage),
        this.target.postMessage({ eventType: e, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function We() {
  return window;
}
function gy(t) {
  We().location.href = t;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function th() {
  return (
    typeof We().WorkerGlobalScope < "u" &&
    typeof We().importScripts == "function"
  );
}
async function vy() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function yy() {
  var t;
  return (
    ((t = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    t === void 0
      ? void 0
      : t.controller) || null
  );
}
function _y() {
  return th() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nh = "firebaseLocalStorageDb",
  wy = 1,
  oo = "firebaseLocalStorage",
  rh = "fbase_key";
class Kr {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, n) => {
      this.request.addEventListener("success", () => {
        e(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Po(t, e) {
  return t.transaction([oo], e ? "readwrite" : "readonly").objectStore(oo);
}
function Ey() {
  const t = indexedDB.deleteDatabase(nh);
  return new Kr(t).toPromise();
}
function cl() {
  const t = indexedDB.open(nh, wy);
  return new Promise((e, n) => {
    t.addEventListener("error", () => {
      n(t.error);
    }),
      t.addEventListener("upgradeneeded", () => {
        const r = t.result;
        try {
          r.createObjectStore(oo, { keyPath: rh });
        } catch (i) {
          n(i);
        }
      }),
      t.addEventListener("success", async () => {
        const r = t.result;
        r.objectStoreNames.contains(oo)
          ? e(r)
          : (r.close(), await Ey(), e(await cl()));
      });
  });
}
async function Gu(t, e, n) {
  const r = Po(t, !0).put({ [rh]: e, value: n });
  return new Kr(r).toPromise();
}
async function Sy(t, e) {
  const n = Po(t, !1).get(e),
    r = await new Kr(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Qu(t, e) {
  const n = Po(t, !0).delete(e);
  return new Kr(n).toPromise();
}
const ky = 800,
  Iy = 3;
class ih {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await cl()), this.db);
  }
  async _withRetries(e) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await e(r);
      } catch (r) {
        if (n++ > Iy) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return th() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = To._getInstance(_y())),
      this.receiver._subscribe("keyChanged", async (e, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (e, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var e, n;
    if (((this.activeServiceWorker = await vy()), !this.activeServiceWorker))
      return;
    this.sender = new my(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((e = r[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        yy() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await cl();
      return await Gu(e, io, "1"), await Qu(e, io), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Gu(r, e, n)),
        (this.localCache[e] = n),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const n = await this._withRetries((r) => Sy(r, e));
    return (this.localCache[e] = n), n;
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Qu(n, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((i) => {
      const o = Po(i, !1).getAll();
      return new Kr(o).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (e.length !== 0)
      for (const { fbase_key: i, value: o } of e)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(o) &&
            (this.notifyListeners(i, o), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(e, n) {
    this.localCache[e] = n;
    const r = this.listeners[e];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), ky));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(n);
  }
  _removeListener(e, n) {
    this.listeners[e] &&
      (this.listeners[e].delete(n),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
ih.type = "LOCAL";
const Cy = ih;
new Wr(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ty(t, e) {
  return e
    ? qe(e)
    : (P(t._popupRedirectResolver, t, "argument-error"),
      t._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ma extends fa {
  constructor(e) {
    super("custom", "custom"), (this.params = e);
  }
  _getIdTokenResponse(e) {
    return Pn(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, n) {
    return Pn(e, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(e) {
    return Pn(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return e && (n.idToken = e), n;
  }
}
function Py(t) {
  return Jf(t.auth, new ma(t), t.bypassAuthState);
}
function Ry(t) {
  const { auth: e, user: n } = t;
  return P(n, e, "internal-error"), iy(n, new ma(t), t.bypassAuthState);
}
async function Ny(t) {
  const { auth: e, user: n } = t;
  return P(n, e, "internal-error"), ry(n, new ma(t), t.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oh {
  constructor(e, n, r, i, o = !1) {
    (this.auth = e),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = o),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (e, n) => {
      this.pendingPromise = { resolve: e, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: o,
      error: s,
      type: l,
    } = e;
    if (s) {
      this.reject(s);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: o || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Py;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Ny;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Ry;
      default:
        ze(this.auth, "internal-error");
    }
  }
  resolve(e) {
    it(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp();
  }
  reject(e) {
    it(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oy = new Wr(2e3, 1e4);
class vn extends oh {
  constructor(e, n, r, i, o) {
    super(e, n, i, o),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      vn.currentPopupAction && vn.currentPopupAction.cancel(),
      (vn.currentPopupAction = this);
  }
  async executeNotNull() {
    const e = await this.execute();
    return P(e, this.auth, "internal-error"), e;
  }
  async onExecution() {
    it(this.filter.length === 1, "Popup operations only handle one event");
    const e = pa();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(He(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(He(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (vn.currentPopupAction = null);
  }
  pollUserCancellation() {
    const e = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(He(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, Oy.get());
    };
    e();
  }
}
vn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ay = "pendingRedirect",
  Pi = new Map();
class Ly extends oh {
  constructor(e, n, r = !1) {
    super(
      e,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let e = Pi.get(this.auth._key());
    if (!e) {
      try {
        const r = (await Dy(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(r);
      } catch (n) {
        e = () => Promise.reject(n);
      }
      Pi.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Pi.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === "signInViaRedirect") return super.onAuthEvent(e);
    if (e.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const n = await this.auth._redirectUserForId(e.eventId);
      if (n) return (this.user = n), super.onAuthEvent(e);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Dy(t, e) {
  const n = Uy(e),
    r = My(t);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function xy(t, e) {
  Pi.set(t._key(), e);
}
function My(t) {
  return qe(t._redirectPersistence);
}
function Uy(t) {
  return Ti(Ay, t.config.apiKey, t.name);
}
async function zy(t, e, n = !1) {
  if (Ye(t.app)) return Promise.reject(Rt(t));
  const r = $n(t),
    i = Ty(r, e),
    s = await new Ly(r, i, n).execute();
  return (
    s &&
      !n &&
      (delete s.user._redirectEventId,
      await r._persistUserIfCurrent(s.user),
      await r._setRedirectUser(null, e)),
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fy = 10 * 60 * 1e3;
class jy {
  constructor(e) {
    (this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(e) {
    this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(e, r) &&
          ((n = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !By(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = e), (n = !0))),
      n
    );
  }
  sendToConsumer(e, n) {
    var r;
    if (e.error && !sh(e)) {
      const i =
        ((r = e.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(He(this.auth, i));
    } else n.onAuthEvent(e);
  }
  isEventForConsumer(e, n) {
    const r = n.eventId === null || (!!e.eventId && e.eventId === n.eventId);
    return n.filter.includes(e.type) && r;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= Fy &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Yu(e))
    );
  }
  saveEventToCache(e) {
    this.cachedEventUids.add(Yu(e)), (this.lastProcessedEventTime = Date.now());
  }
}
function Yu(t) {
  return [t.type, t.eventId, t.sessionId, t.tenantId]
    .filter((e) => e)
    .join("-");
}
function sh({ type: t, error: e }) {
  return (
    t === "unknown" && (e == null ? void 0 : e.code) === "auth/no-auth-event"
  );
}
function By(t) {
  switch (t.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return sh(t);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $y(t, e = {}) {
  return Mt(t, "GET", "/v1/projects", e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Hy = /^https?/;
async function Wy(t) {
  if (t.config.emulator) return;
  const { authorizedDomains: e } = await $y(t);
  for (const n of e)
    try {
      if (by(n)) return;
    } catch {}
  ze(t, "unauthorized-domain");
}
function by(t) {
  const e = al(),
    { protocol: n, hostname: r } = new URL(e);
  if (t.startsWith("chrome-extension://")) {
    const s = new URL(t);
    return s.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          t.replace("chrome-extension://", "") ===
            e.replace("chrome-extension://", "")
      : n === "chrome-extension:" && s.hostname === r;
  }
  if (!Hy.test(n)) return !1;
  if (Vy.test(t)) return r === t;
  const i = t.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ky = new Wr(3e4, 6e4);
function Ju() {
  const t = We().___jsl;
  if (t != null && t.H) {
    for (const e of Object.keys(t.H))
      if (
        ((t.H[e].r = t.H[e].r || []),
        (t.H[e].L = t.H[e].L || []),
        (t.H[e].r = [...t.H[e].L]),
        t.CP)
      )
        for (let n = 0; n < t.CP.length; n++) t.CP[n] = null;
  }
}
function Gy(t) {
  return new Promise((e, n) => {
    var r, i, o;
    function s() {
      Ju(),
        gapi.load("gapi.iframes", {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Ju(), n(He(t, "network-request-failed"));
          },
          timeout: Ky.get(),
        });
    }
    if (
      !(
        (i = (r = We().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((o = We().gapi) === null || o === void 0) && o.load) s();
    else {
      const l = $v("iframefcb");
      return (
        (We()[l] = () => {
          gapi.load ? s() : n(He(t, "network-request-failed"));
        }),
        Kf(`${Bv()}?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((e) => {
    throw ((Ri = null), e);
  });
}
let Ri = null;
function Qy(t) {
  return (Ri = Ri || Gy(t)), Ri;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yy = new Wr(5e3, 15e3),
  Jy = "__/auth/iframe",
  Xy = "emulator/auth/iframe",
  qy = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  Zy = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function e0(t) {
  const e = t.config;
  P(e.authDomain, t, "auth-domain-config-required");
  const n = e.emulator ? ua(e, Xy) : `https://${t.config.authDomain}/${Jy}`,
    r = { apiKey: e.apiKey, appName: t.name, v: Hr },
    i = Zy.get(t.config.apiHost);
  i && (r.eid = i);
  const o = t._getFrameworks();
  return o.length && (r.fw = o.join(",")), `${n}?${Vr(r).slice(1)}`;
}
async function t0(t) {
  const e = await Qy(t),
    n = We().gapi;
  return (
    P(n, t, "internal-error"),
    e.open(
      {
        where: document.body,
        url: e0(t),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qy,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, o) => {
          await r.restyle({ setHideOnLeave: !1 });
          const s = He(t, "network-request-failed"),
            l = We().setTimeout(() => {
              o(s);
            }, Yy.get());
          function a() {
            We().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            o(s);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const n0 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  r0 = 500,
  i0 = 600,
  o0 = "_blank",
  s0 = "http://localhost";
class Xu {
  constructor(e) {
    (this.window = e), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function l0(t, e, n, r = r0, i = i0) {
  const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, n0), {
      width: r.toString(),
      height: i.toString(),
      top: o,
      left: s,
    }),
    u = le().toLowerCase();
  n && (l = jf(u) ? o0 : n), Ff(u) && ((e = e || s0), (a.scrollbars = "yes"));
  const h = Object.entries(a).reduce((m, [y, _]) => `${m}${y}=${_},`, "");
  if (Ov(u) && l !== "_self") return a0(e || "", l), new Xu(null);
  const p = window.open(e || "", l, h);
  P(p, t, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new Xu(p);
}
function a0(t, e) {
  const n = document.createElement("a");
  (n.href = t), (n.target = e);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const u0 = "__/auth/handler",
  c0 = "emulator/auth/handler",
  d0 = encodeURIComponent("fac");
async function qu(t, e, n, r, i, o) {
  P(t.config.authDomain, t, "auth-domain-config-required"),
    P(t.config.apiKey, t, "invalid-api-key");
  const s = {
    apiKey: t.config.apiKey,
    appName: t.name,
    authType: n,
    redirectUrl: r,
    v: Hr,
    eventId: i,
  };
  if (e instanceof Qf) {
    e.setDefaultLanguage(t.languageCode),
      (s.providerId = e.providerId || ""),
      tg(e.getCustomParameters()) ||
        (s.customParameters = JSON.stringify(e.getCustomParameters()));
    for (const [h, p] of Object.entries(o || {})) s[h] = p;
  }
  if (e instanceof br) {
    const h = e.getScopes().filter((p) => p !== "");
    h.length > 0 && (s.scopes = h.join(","));
  }
  t.tenantId && (s.tid = t.tenantId);
  const l = s;
  for (const h of Object.keys(l)) l[h] === void 0 && delete l[h];
  const a = await t._getAppCheckToken(),
    u = a ? `#${d0}=${encodeURIComponent(a)}` : "";
  return `${f0(t)}?${Vr(l).slice(1)}${u}`;
}
function f0({ config: t }) {
  return t.emulator ? ua(t, c0) : `https://${t.authDomain}/${u0}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const us = "webStorageSupport";
class h0 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = eh),
      (this._completeRedirectFn = zy),
      (this._overrideRedirectResult = xy);
  }
  async _openPopup(e, n, r, i) {
    var o;
    it(
      (o = this.eventManagers[e._key()]) === null || o === void 0
        ? void 0
        : o.manager,
      "_initialize() not called before _openPopup()"
    );
    const s = await qu(e, n, r, al(), i);
    return l0(e, s, pa());
  }
  async _openRedirect(e, n, r, i) {
    await this._originValidation(e);
    const o = await qu(e, n, r, al(), i);
    return gy(o), new Promise(() => {});
  }
  _initialize(e) {
    const n = e._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: o } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (it(o, "If manager is not set, promise should be"), o);
    }
    const r = this.initAndGetManager(e);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(e) {
    const n = await t0(e),
      r = new jy(e);
    return (
      n.register(
        "authEvent",
        (i) => (
          P(i == null ? void 0 : i.authEvent, e, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: r }),
      (this.iframes[e._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(e, n) {
    this.iframes[e._key()].send(
      us,
      { type: us },
      (i) => {
        var o;
        const s =
          (o = i == null ? void 0 : i[0]) === null || o === void 0
            ? void 0
            : o[us];
        s !== void 0 && n(!!s), ze(e, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const n = e._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = Wy(e)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Wf() || da() || Io();
  }
}
const p0 = h0;
var Zu = "@firebase/auth",
  ec = "1.7.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m0 {
  constructor(e) {
    (this.auth = e), (this.internalListeners = new Map());
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(e, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(e);
    n && (this.internalListeners.delete(e), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    P(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function g0(t) {
  switch (t) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function v0(t) {
  Lr(
    new Un(
      "auth",
      (e, { options: n }) => {
        const r = e.getProvider("app").getImmediate(),
          i = e.getProvider("heartbeat"),
          o = e.getProvider("app-check-internal"),
          { apiKey: s, authDomain: l } = r.options;
        P(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
        const a = {
            apiKey: s,
            authDomain: l,
            clientPlatform: t,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: bf(t),
          },
          u = new zv(r, i, o, a);
        return Kv(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((e, n, r) => {
        e.getProvider("auth-internal").initialize();
      })
  ),
    Lr(
      new Un(
        "auth-internal",
        (e) => {
          const n = $n(e.getProvider("auth").getImmediate());
          return ((r) => new m0(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    In(Zu, ec, g0(t)),
    In(Zu, ec, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y0 = 5 * 60,
  _0 = Ef("authIdTokenMaxAge") || y0;
let tc = null;
const w0 = (t) => async (e) => {
  const n = e && (await e.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > _0) return;
  const i = n == null ? void 0 : n.token;
  tc !== i &&
    ((tc = i),
    await fetch(t, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function E0(t = tv()) {
  const e = Cf(t, "auth");
  if (e.isInitialized()) return e.getImmediate();
  const n = bv(t, { popupRedirectResolver: p0, persistence: [Cy, hy, eh] }),
    r = Ef("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const o = new URL(r, location.origin);
    if (location.origin === o.origin) {
      const s = w0(o.toString());
      uy(n, s, () => s(n.currentUser)), ay(n, (l) => s(l));
    }
  }
  const i = Wm("auth");
  return i && Gv(n, `http://${i}`), n;
}
function S0() {
  var t, e;
  return (e =
    (t = document.getElementsByTagName("head")) === null || t === void 0
      ? void 0
      : t[0]) !== null && e !== void 0
    ? e
    : document;
}
Fv({
  loadJS(t) {
    return new Promise((e, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", t),
        (r.onload = e),
        (r.onerror = (i) => {
          const o = He("internal-error");
          (o.customData = i), n(o);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        S0().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
v0("Browser");
var k0 = "firebase",
  I0 = "10.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ In(k0, I0, "app");
const C0 = {
    apiKey: "AIzaSyCOx-XPm-hJC9mM_md-0STsgQ-4K6WJzME",
    authDomain: "pilvi-react-15627.firebaseapp.com",
    projectId: "pilvi-react-15627",
    storageBucket: "pilvi-react-15627.appspot.com",
    messagingSenderId: "913862361539",
    appId: "1:913862361539:web:eb65ba1ae8c629e3c8bd76",
  },
  T0 = Tf(C0);
function P0() {
  const t = E0(T0),
    [e, n] = Rn.useState(""),
    [r, i] = Rn.useState(""),
    o = async (s) => {
      s.preventDefault();
      try {
        await ly(t, e, r).then((l) => {
          const a = l.user;
          console.log("Tämä on esimerkkiviesti " + a.email);
        });
      } catch {}
    };
  return U.jsxs("div", {
    children: [
      U.jsx("h2", { children: "Kirjaudu sisään" }),
      U.jsxs("form", {
        onSubmit: o,
        children: [
          U.jsxs("div", {
            children: [
              U.jsx("label", { htmlFor: "email", children: "Sähköposti:" }),
              U.jsx("input", {
                type: "email",
                id: "email",
                value: e,
                onChange: (s) => n(s.target.value),
                required: !0,
              }),
            ],
          }),
          U.jsxs("div", {
            children: [
              U.jsx("label", { htmlFor: "password", children: "Salasana:" }),
              U.jsx("input", {
                type: "password",
                id: "password",
                value: r,
                onChange: (s) => i(s.target.value),
                required: !0,
              }),
            ],
          }),
          U.jsx("button", { type: "submit", children: "Kirjaudu sisään" }),
        ],
      }),
    ],
  });
}
function R0() {
  const [t, e] = Rn.useState(0);
  return U.jsxs(U.Fragment, {
    children: [
      U.jsxs("div", {
        children: [
          U.jsx("a", {
            href: "https://vitejs.dev",
            target: "_blank",
            children: U.jsx("img", {
              src: Um,
              className: "logo",
              alt: "Vite logo",
            }),
          }),
          U.jsx("a", {
            href: "https://react.dev",
            target: "_blank",
            children: U.jsx("img", {
              src: Mm,
              className: "logo react",
              alt: "React logo",
            }),
          }),
        ],
      }),
      U.jsx("h1", { children: "Vite + React" }),
      U.jsx(P0, {}),
      U.jsxs("div", {
        className: "card",
        children: [
          U.jsxs("button", {
            onClick: () => e((n) => n + 1),
            children: ["count is ", t],
          }),
          U.jsxs("p", {
            children: [
              "Edit ",
              U.jsx("code", { children: "src/App.tsx" }),
              " and save to test HMR",
            ],
          }),
        ],
      }),
      U.jsx("p", {
        className: "read-the-docs",
        children: "Click on the Vite and React logos to learn more",
      }),
    ],
  });
}
cs.createRoot(document.getElementById("root")).render(
  U.jsx(Ih.StrictMode, { children: U.jsx(R0, {}) })
);
