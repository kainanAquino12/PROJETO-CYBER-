(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode("/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */@layer theme{:root,:host{--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1)}}@layer utilities{.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.top-\\[2000px\\]{top:2000px}.left-0{left:0}.block{display:block}.size-full{width:100%;height:100%}.h-\\[2000px\\]{height:2000px}.w-full{width:100%}.resize{resize:both}.overflow-hidden{overflow:hidden}.rounded-full{border-radius:3.40282e38px}.bg-transparent{background-color:#0000}.bg-\\[radial-gradient\\(ellipse_at_bottom\\,_\\#262626_0\\%\\,_\\#000_100\\%\\)\\]{background-image:radial-gradient(at bottom,#262626,#000)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var jf = { exports: {} }, So = {}, zf = { exports: {} }, N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr = Symbol.for("react.element"), Mm = Symbol.for("react.portal"), Dm = Symbol.for("react.fragment"), Rm = Symbol.for("react.strict_mode"), Vm = Symbol.for("react.profiler"), Lm = Symbol.for("react.provider"), _m = Symbol.for("react.context"), Nm = Symbol.for("react.forward_ref"), Fm = Symbol.for("react.suspense"), Om = Symbol.for("react.memo"), Im = Symbol.for("react.lazy"), du = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Bf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Uf = Object.assign, $f = {};
function Gn(e, t, n) {
  this.props = e, this.context = t, this.refs = $f, this.updater = n || Bf;
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wf() {
}
Wf.prototype = Gn.prototype;
function Ul(e, t, n) {
  this.props = e, this.context = t, this.refs = $f, this.updater = n || Bf;
}
var $l = Ul.prototype = new Wf();
$l.constructor = Ul;
Uf($l, Gn.prototype);
$l.isPureReactComponent = !0;
var hu = Array.isArray, Hf = Object.prototype.hasOwnProperty, Wl = { current: null }, Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) Hf.call(t, r) && !Kf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Qr, type: e, key: o, ref: s, props: i, _owner: Wl.current };
}
function zm(e, t) {
  return { $$typeof: Qr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Hl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qr;
}
function Bm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pu = /\/+/g;
function Ho(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bm("" + e.key) : t.toString(36);
}
function Ai(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Qr:
        case Mm:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + Ho(s, 0) : r, hu(i) ? (n = "", e != null && (n = e.replace(pu, "$&/") + "/"), Ai(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Hl(i) && (i = zm(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(pu, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", hu(e)) for (var l = 0; l < e.length; l++) {
    o = e[l];
    var a = r + Ho(o, l);
    s += Ai(o, t, n, a, i);
  }
  else if (a = jm(e), typeof a == "function") for (e = a.call(e), l = 0; !(o = e.next()).done; ) o = o.value, a = r + Ho(o, l++), s += Ai(o, t, n, a, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function si(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Ai(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function Um(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null }, Mi = { transition: null }, $m = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Mi, ReactCurrentOwner: Wl };
function Qf() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = { map: si, forEach: function(e, t, n) {
  si(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return si(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return si(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Hl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
N.Component = Gn;
N.Fragment = Dm;
N.Profiler = Vm;
N.PureComponent = Ul;
N.StrictMode = Rm;
N.Suspense = Fm;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
N.act = Qf;
N.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Uf({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Wl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Hf.call(t, a) && !Kf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
N.createContext = function(e) {
  return e = { $$typeof: _m, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lm, _context: e }, e.Consumer = e;
};
N.createElement = Gf;
N.createFactory = function(e) {
  var t = Gf.bind(null, e);
  return t.type = e, t;
};
N.createRef = function() {
  return { current: null };
};
N.forwardRef = function(e) {
  return { $$typeof: Nm, render: e };
};
N.isValidElement = Hl;
N.lazy = function(e) {
  return { $$typeof: Im, _payload: { _status: -1, _result: e }, _init: Um };
};
N.memo = function(e, t) {
  return { $$typeof: Om, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function(e) {
  var t = Mi.transition;
  Mi.transition = {};
  try {
    e();
  } finally {
    Mi.transition = t;
  }
};
N.unstable_act = Qf;
N.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
N.useContext = function(e) {
  return ve.current.useContext(e);
};
N.useDebugValue = function() {
};
N.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
N.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
N.useId = function() {
  return ve.current.useId();
};
N.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
N.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
N.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
N.useRef = function(e) {
  return ve.current.useRef(e);
};
N.useState = function(e) {
  return ve.current.useState(e);
};
N.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function() {
  return ve.current.useTransition();
};
N.version = "18.3.1";
zf.exports = N;
var M = zf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wm = M, Hm = Symbol.for("react.element"), Km = Symbol.for("react.fragment"), Gm = Object.prototype.hasOwnProperty, Qm = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ym = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yf(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Gm.call(t, r) && !Ym.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Hm, type: e, key: o, ref: s, props: i, _owner: Qm.current };
}
So.Fragment = Km;
So.jsx = Yf;
So.jsxs = Yf;
jf.exports = So;
var ae = jf.exports, Xf = { exports: {} }, Le = {}, Zf = { exports: {} }, qf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(C, V) {
    var L = C.length;
    C.push(V);
    e: for (; 0 < L; ) {
      var X = L - 1 >>> 1, ne = C[X];
      if (0 < i(ne, V)) C[X] = V, C[L] = ne, L = X;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var V = C[0], L = C.pop();
    if (L !== V) {
      C[0] = L;
      e: for (var X = 0, ne = C.length, ii = ne >>> 1; X < ii; ) {
        var $t = 2 * (X + 1) - 1, Wo = C[$t], Wt = $t + 1, oi = C[Wt];
        if (0 > i(Wo, L)) Wt < ne && 0 > i(oi, Wo) ? (C[X] = oi, C[Wt] = L, X = Wt) : (C[X] = Wo, C[$t] = L, X = $t);
        else if (Wt < ne && 0 > i(oi, L)) C[X] = oi, C[Wt] = L, X = Wt;
        else break e;
      }
    }
    return V;
  }
  function i(C, V) {
    var L = C.sortIndex - V.sortIndex;
    return L !== 0 ? L : C.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, g = !1, y = !1, v = !1, P = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate != "undefined" ? setImmediate : null;
  typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(C) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= C) r(u), V.sortIndex = V.expirationTime, t(a, V);
      else break;
      V = n(u);
    }
  }
  function w(C) {
    if (v = !1, m(C), !y) if (n(a) !== null) y = !0, ri(S);
    else {
      var V = n(u);
      V !== null && b(w, V.startTime - C);
    }
  }
  function S(C, V) {
    y = !1, v && (v = !1, p(T), T = -1), g = !0;
    var L = d;
    try {
      for (m(V), f = n(a); f !== null && (!(f.expirationTime > V) || C && !z()); ) {
        var X = f.callback;
        if (typeof X == "function") {
          f.callback = null, d = f.priorityLevel;
          var ne = X(f.expirationTime <= V);
          V = e.unstable_now(), typeof ne == "function" ? f.callback = ne : f === n(a) && r(a), m(V);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ii = !0;
      else {
        var $t = n(u);
        $t !== null && b(w, $t.startTime - V), ii = !1;
      }
      return ii;
    } finally {
      f = null, d = L, g = !1;
    }
  }
  var k = !1, x = null, T = -1, _ = 5, D = -1;
  function z() {
    return !(e.unstable_now() - D < _);
  }
  function Ee() {
    if (x !== null) {
      var C = e.unstable_now();
      D = C;
      var V = !0;
      try {
        V = x(!0, C);
      } finally {
        V ? rt() : (k = !1, x = null);
      }
    } else k = !1;
  }
  var rt;
  if (typeof h == "function") rt = function() {
    h(Ee);
  };
  else if (typeof MessageChannel != "undefined") {
    var yt = new MessageChannel(), ni = yt.port2;
    yt.port1.onmessage = Ee, rt = function() {
      ni.postMessage(null);
    };
  } else rt = function() {
    P(Ee, 0);
  };
  function ri(C) {
    x = C, k || (k = !0, rt());
  }
  function b(C, V) {
    T = P(function() {
      C(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, ri(S));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(C) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = d;
    }
    var L = d;
    d = V;
    try {
      return C();
    } finally {
      d = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, V) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var L = d;
    d = C;
    try {
      return V();
    } finally {
      d = L;
    }
  }, e.unstable_scheduleCallback = function(C, V, L) {
    var X = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? X + L : X) : L = X, C) {
      case 1:
        var ne = -1;
        break;
      case 2:
        ne = 250;
        break;
      case 5:
        ne = 1073741823;
        break;
      case 4:
        ne = 1e4;
        break;
      default:
        ne = 5e3;
    }
    return ne = L + ne, C = { id: c++, callback: V, priorityLevel: C, startTime: L, expirationTime: ne, sortIndex: -1 }, L > X ? (C.sortIndex = L, t(u, C), n(a) === null && C === n(u) && (v ? (p(T), T = -1) : v = !0, b(w, L - X))) : (C.sortIndex = ne, t(a, C), y || g || (y = !0, ri(S))), C;
  }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(C) {
    var V = d;
    return function() {
      var L = d;
      d = V;
      try {
        return C.apply(this, arguments);
      } finally {
        d = L;
      }
    };
  };
})(qf);
Zf.exports = qf;
var Xm = Zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm = M, Re = Xm;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Jf = /* @__PURE__ */ new Set(), Cr = {};
function an(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Jf.add(t[e]);
}
var ft = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), Vs = Object.prototype.hasOwnProperty, qm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mu = {}, gu = {};
function Jm(e) {
  return Vs.call(gu, e) ? !0 : Vs.call(mu, e) ? !1 : qm.test(e) ? gu[e] = !0 : (mu[e] = !0, !1);
}
function bm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function eg(e, t, n, r) {
  if (t === null || typeof t == "undefined" || bm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function we(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Kl = /[\-:]([a-z])/g;
function Gl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Kl,
    Gl
  );
  ce[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Kl, Gl);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Kl, Gl);
  ce[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ql(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (eg(t, n, i, r) && (n = null), r || i === null ? Jm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, li = Symbol.for("react.element"), dn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), Yl = Symbol.for("react.strict_mode"), Ls = Symbol.for("react.profiler"), bf = Symbol.for("react.provider"), ed = Symbol.for("react.context"), Xl = Symbol.for("react.forward_ref"), _s = Symbol.for("react.suspense"), Ns = Symbol.for("react.suspense_list"), Zl = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), td = Symbol.for("react.offscreen"), yu = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object" ? null : (e = yu && e[yu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Ko;
function sr(e) {
  if (Ko === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ko = t && t[1] || "";
  }
  return `
` + Ko + e;
}
var Go = !1;
function Qo(e, t) {
  if (!e || Go) return "";
  Go = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (i[s] !== o[l]) {
        if (s !== 1 || l !== 1)
          do
            if (s--, l--, 0 > l || i[s] !== o[l]) {
              var a = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    Go = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? sr(e) : "";
}
function tg(e) {
  switch (e.tag) {
    case 5:
      return sr(e.type);
    case 16:
      return sr("Lazy");
    case 13:
      return sr("Suspense");
    case 19:
      return sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Qo(e.type, !1), e;
    case 11:
      return e = Qo(e.type.render, !1), e;
    case 1:
      return e = Qo(e.type, !0), e;
    default:
      return "";
  }
}
function Fs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hn:
      return "Fragment";
    case dn:
      return "Portal";
    case Ls:
      return "Profiler";
    case Yl:
      return "StrictMode";
    case _s:
      return "Suspense";
    case Ns:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ed:
      return (e.displayName || "Context") + ".Consumer";
    case bf:
      return (e._context.displayName || "Context") + ".Provider";
    case Xl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zl:
      return t = e.displayName || null, t !== null ? t : Fs(e.type) || "Memo";
    case St:
      t = e._payload, e = e._init;
      try {
        return Fs(e(t));
      } catch {
      }
  }
  return null;
}
function ng(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fs(t);
    case 8:
      return t === Yl ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function rg(e) {
  var t = nd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ai(e) {
  e._valueTracker || (e._valueTracker = rg(e));
}
function rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = nd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function $i(e) {
  if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Os(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Nt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function id(e, t) {
  t = t.checked, t != null && Ql(e, "checked", t, !1);
}
function Is(e, t) {
  id(e, t);
  var n = Nt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? js(e, t.type, n) : t.hasOwnProperty("defaultValue") && js(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function js(e, t, n) {
  (t !== "number" || $i(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lr = Array.isArray;
function Dn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Su(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (lr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function od(e, t) {
  var n = Nt(t.value), r = Nt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function xu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? sd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ui, ld = function(e) {
  return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ui = ui || document.createElement("div"), ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ui.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var hr = {
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
  strokeWidth: !0
}, ig = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
  ig.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e];
  });
});
function ad(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px";
}
function ud(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = ad(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var og = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Us(e, t) {
  if (t) {
    if (og[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function $s(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Ws = null;
function ql(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Hs = null, Rn = null, Vn = null;
function Tu(e) {
  if (e = Zr(e)) {
    if (typeof Hs != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Eo(t), Hs(e.stateNode, e.type, t));
  }
}
function cd(e) {
  Rn ? Vn ? Vn.push(e) : Vn = [e] : Rn = e;
}
function fd() {
  if (Rn) {
    var e = Rn, t = Vn;
    if (Vn = Rn = null, Tu(e), t) for (e = 0; e < t.length; e++) Tu(t[e]);
  }
}
function dd(e, t) {
  return e(t);
}
function hd() {
}
var Yo = !1;
function pd(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return dd(e, t, n);
  } finally {
    Yo = !1, (Rn !== null || Vn !== null) && (hd(), fd());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ks = !1;
if (ft) try {
  var Jn = {};
  Object.defineProperty(Jn, "passive", { get: function() {
    Ks = !0;
  } }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
  Ks = !1;
}
function sg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var pr = !1, Wi = null, Hi = !1, Gs = null, lg = { onError: function(e) {
  pr = !0, Wi = e;
} };
function ag(e, t, n, r, i, o, s, l, a) {
  pr = !1, Wi = null, sg.apply(lg, arguments);
}
function ug(e, t, n, r, i, o, s, l, a) {
  if (ag.apply(this, arguments), pr) {
    if (pr) {
      var u = Wi;
      pr = !1, Wi = null;
    } else throw Error(E(198));
    Hi || (Hi = !0, Gs = u);
  }
}
function un(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function md(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pu(e) {
  if (un(e) !== e) throw Error(E(188));
}
function cg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = un(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Pu(i), e;
        if (o === r) return Pu(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (l === r) {
          s = !0, r = i, n = o;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (l === r) {
            s = !0, r = o, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function gd(e) {
  return e = cg(e), e !== null ? yd(e) : null;
}
function yd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vd = Re.unstable_scheduleCallback, ku = Re.unstable_cancelCallback, fg = Re.unstable_shouldYield, dg = Re.unstable_requestPaint, q = Re.unstable_now, hg = Re.unstable_getCurrentPriorityLevel, Jl = Re.unstable_ImmediatePriority, wd = Re.unstable_UserBlockingPriority, Ki = Re.unstable_NormalPriority, pg = Re.unstable_LowPriority, Sd = Re.unstable_IdlePriority, xo = null, be = null;
function mg(e) {
  if (be && typeof be.onCommitFiberRoot == "function") try {
    be.onCommitFiberRoot(xo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : vg, gg = Math.log, yg = Math.LN2;
function vg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (gg(e) / yg | 0) | 0;
}
var ci = 64, fi = 4194304;
function ar(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? r = ar(l) : (o &= s, o !== 0 && (r = ar(o)));
  } else s = n & ~i, s !== 0 ? r = ar(s) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function wg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function Sg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Qe(o), l = 1 << s, a = i[s];
    a === -1 ? (!(l & n) || l & r) && (i[s] = wg(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l;
  }
}
function Qs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function xd() {
  var e = ci;
  return ci <<= 1, !(ci & 4194240) && (ci = 64), e;
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function xg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function bl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var O = 0;
function Td(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Pd, ea, kd, Ed, Cd, Ys = !1, di = [], Ct = null, At = null, Mt = null, Dr = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Map(), Tt = [], Tg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = Zr(t), t !== null && ea(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Pg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ct = bn(Ct, e, t, n, r, i), !0;
    case "dragenter":
      return At = bn(At, e, t, n, r, i), !0;
    case "mouseover":
      return Mt = bn(Mt, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Dr.set(o, bn(Dr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Rr.set(o, bn(Rr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Ad(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = md(n), t !== null) {
          e.blockedOn = t, Cd(e.priority, function() {
            kd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ws = r, n.target.dispatchEvent(r), Ws = null;
    } else return t = Zr(n), t !== null && ea(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Cu(e, t, n) {
  Di(e) && n.delete(t);
}
function kg() {
  Ys = !1, Ct !== null && Di(Ct) && (Ct = null), At !== null && Di(At) && (At = null), Mt !== null && Di(Mt) && (Mt = null), Dr.forEach(Cu), Rr.forEach(Cu);
}
function er(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ys || (Ys = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, kg)));
}
function Vr(e) {
  function t(i) {
    return er(i, e);
  }
  if (0 < di.length) {
    er(di[0], e);
    for (var n = 1; n < di.length; n++) {
      var r = di[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && er(Ct, e), At !== null && er(At, e), Mt !== null && er(Mt, e), Dr.forEach(t), Rr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Ad(n), n.blockedOn === null && Tt.shift();
}
var Ln = gt.ReactCurrentBatchConfig, Qi = !0;
function Eg(e, t, n, r) {
  var i = O, o = Ln.transition;
  Ln.transition = null;
  try {
    O = 1, ta(e, t, n, r);
  } finally {
    O = i, Ln.transition = o;
  }
}
function Cg(e, t, n, r) {
  var i = O, o = Ln.transition;
  Ln.transition = null;
  try {
    O = 4, ta(e, t, n, r);
  } finally {
    O = i, Ln.transition = o;
  }
}
function ta(e, t, n, r) {
  if (Qi) {
    var i = Xs(e, t, n, r);
    if (i === null) os(e, t, r, Yi, n), Eu(e, r);
    else if (Pg(i, e, t, n, r)) r.stopPropagation();
    else if (Eu(e, r), t & 4 && -1 < Tg.indexOf(e)) {
      for (; i !== null; ) {
        var o = Zr(i);
        if (o !== null && Pd(o), o = Xs(e, t, n, r), o === null && os(e, t, r, Yi, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else os(e, t, r, null, n);
  }
}
var Yi = null;
function Xs(e, t, n, r) {
  if (Yi = null, e = ql(r), e = Xt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = md(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Yi = e, null;
}
function Md(e) {
  switch (e) {
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
      switch (hg()) {
        case Jl:
          return 1;
        case wd:
          return 4;
        case Ki:
        case pg:
          return 16;
        case Sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null, na = null, Ri = null;
function Dd() {
  if (Ri) return Ri;
  var e, t = na, n = t.length, r, i = "value" in kt ? kt.value : kt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return Ri = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Vi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hi() {
  return !0;
}
function Au() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hi : Au, this.isPropagationStopped = Au, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hi);
  }, persist: function() {
  }, isPersistent: hi }), t;
}
var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ra = _e(Qn), Xr = G({}, Qn, { view: 0, detail: 0 }), Ag = _e(Xr), Zo, qo, tr, To = G({}, Xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ia, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (Zo = e.screenX - tr.screenX, qo = e.screenY - tr.screenY) : qo = Zo = 0, tr = e), Zo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qo;
} }), Mu = _e(To), Mg = G({}, To, { dataTransfer: 0 }), Dg = _e(Mg), Rg = G({}, Xr, { relatedTarget: 0 }), Jo = _e(Rg), Vg = G({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Lg = _e(Vg), _g = G({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ng = _e(_g), Fg = G({}, Qn, { data: 0 }), Du = _e(Fg), Og = {
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
  MozPrintableKey: "Unidentified"
}, Ig = {
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
  224: "Meta"
}, jg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jg[e]) ? !!t[e] : !1;
}
function ia() {
  return zg;
}
var Bg = G({}, Xr, { key: function(e) {
  if (e.key) {
    var t = Og[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ig[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ia, charCode: function(e) {
  return e.type === "keypress" ? Vi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ug = _e(Bg), $g = G({}, To, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ru = _e($g), Wg = G({}, Xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ia }), Hg = _e(Wg), Kg = G({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gg = _e(Kg), Qg = G({}, To, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yg = _e(Qg), Xg = [9, 13, 27, 32], oa = ft && "CompositionEvent" in window, mr = null;
ft && "documentMode" in document && (mr = document.documentMode);
var Zg = ft && "TextEvent" in window && !mr, Rd = ft && (!oa || mr && 8 < mr && 11 >= mr), Vu = " ", Lu = !1;
function Vd(e, t) {
  switch (e) {
    case "keyup":
      return Xg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ld(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var pn = !1;
function qg(e, t) {
  switch (e) {
    case "compositionend":
      return Ld(t);
    case "keypress":
      return t.which !== 32 ? null : (Lu = !0, Vu);
    case "textInput":
      return e = t.data, e === Vu && Lu ? null : e;
    default:
      return null;
  }
}
function Jg(e, t) {
  if (pn) return e === "compositionend" || !oa && Vd(e, t) ? (e = Dd(), Ri = na = kt = null, pn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Rd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bg[e.type] : t === "textarea";
}
function _d(e, t, n, r) {
  cd(r), t = Xi(t, "onChange"), 0 < t.length && (n = new ra("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gr = null, Lr = null;
function ey(e) {
  Hd(e, 0);
}
function Po(e) {
  var t = yn(e);
  if (rd(t)) return e;
}
function ty(e, t) {
  if (e === "change") return t;
}
var Nd = !1;
if (ft) {
  var bo;
  if (ft) {
    var es = "oninput" in document;
    if (!es) {
      var Nu = document.createElement("div");
      Nu.setAttribute("oninput", "return;"), es = typeof Nu.oninput == "function";
    }
    bo = es;
  } else bo = !1;
  Nd = bo && (!document.documentMode || 9 < document.documentMode);
}
function Fu() {
  gr && (gr.detachEvent("onpropertychange", Fd), Lr = gr = null);
}
function Fd(e) {
  if (e.propertyName === "value" && Po(Lr)) {
    var t = [];
    _d(t, Lr, e, ql(e)), pd(ey, t);
  }
}
function ny(e, t, n) {
  e === "focusin" ? (Fu(), gr = t, Lr = n, gr.attachEvent("onpropertychange", Fd)) : e === "focusout" && Fu();
}
function ry(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Po(Lr);
}
function iy(e, t) {
  if (e === "click") return Po(t);
}
function oy(e, t) {
  if (e === "input" || e === "change") return Po(t);
}
function sy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xe = typeof Object.is == "function" ? Object.is : sy;
function _r(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Vs.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function Ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = Ou(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
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
    n = Ou(n);
  }
}
function Od(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Od(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Id() {
  for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $i(e.document);
  }
  return t;
}
function sa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ly(e) {
  var t = Id(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Od(n.ownerDocument.documentElement, n)) {
    if (r !== null && sa(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Iu(n, o);
        var s = Iu(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ay = ft && "documentMode" in document && 11 >= document.documentMode, mn = null, Zs = null, yr = null, qs = !1;
function ju(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qs || mn == null || mn !== $i(r) || (r = mn, "selectionStart" in r && sa(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), yr && _r(yr, r) || (yr = r, r = Xi(Zs, "onSelect"), 0 < r.length && (t = new ra("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function pi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gn = { animationend: pi("Animation", "AnimationEnd"), animationiteration: pi("Animation", "AnimationIteration"), animationstart: pi("Animation", "AnimationStart"), transitionend: pi("Transition", "TransitionEnd") }, ts = {}, jd = {};
ft && (jd = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function ko(e) {
  if (ts[e]) return ts[e];
  if (!gn[e]) return e;
  var t = gn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return ts[e] = t[n];
  return e;
}
var zd = ko("animationend"), Bd = ko("animationiteration"), Ud = ko("animationstart"), $d = ko("transitionend"), Wd = /* @__PURE__ */ new Map(), zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e, t) {
  Wd.set(e, t), an(t, [e]);
}
for (var ns = 0; ns < zu.length; ns++) {
  var rs = zu[ns], uy = rs.toLowerCase(), cy = rs[0].toUpperCase() + rs.slice(1);
  jt(uy, "on" + cy);
}
jt(zd, "onAnimationEnd");
jt(Bd, "onAnimationIteration");
jt(Ud, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt($d, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
an("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
an("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function Bu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ug(r, t, void 0, e), e.currentTarget = null;
}
function Hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
        Bu(i, l, u), o = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
        Bu(i, l, u), o = a;
      }
    }
  }
  if (Hi) throw e = Gs, Hi = !1, Gs = null, e;
}
function B(e, t) {
  var n = t[nl];
  n === void 0 && (n = t[nl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Kd(t, e, 2, !1), n.add(r));
}
function is(e, t, n) {
  var r = 0;
  t && (r |= 4), Kd(n, e, r, t);
}
var mi = "_reactListening" + Math.random().toString(36).slice(2);
function Nr(e) {
  if (!e[mi]) {
    e[mi] = !0, Jf.forEach(function(n) {
      n !== "selectionchange" && (fy.has(n) || is(n, !1, e), is(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mi] || (t[mi] = !0, is("selectionchange", !1, t));
  }
}
function Kd(e, t, n, r) {
  switch (Md(t)) {
    case 1:
      var i = Eg;
      break;
    case 4:
      i = Cg;
      break;
    default:
      i = ta;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ks || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function os(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = Xt(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = o = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  pd(function() {
    var u = o, c = ql(n), f = [];
    e: {
      var d = Wd.get(e);
      if (d !== void 0) {
        var g = ra, y = e;
        switch (e) {
          case "keypress":
            if (Vi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ug;
            break;
          case "focusin":
            y = "focus", g = Jo;
            break;
          case "focusout":
            y = "blur", g = Jo;
            break;
          case "beforeblur":
          case "afterblur":
            g = Jo;
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
            g = Mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Dg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Hg;
            break;
          case zd:
          case Bd:
          case Ud:
            g = Lg;
            break;
          case $d:
            g = Gg;
            break;
          case "scroll":
            g = Ag;
            break;
          case "wheel":
            g = Yg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ng;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Ru;
        }
        var v = (t & 4) !== 0, P = !v && e === "scroll", p = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, p !== null && (w = Mr(h, p), w != null && v.push(Fr(h, w, m)))), P) break;
          h = h.return;
        }
        0 < v.length && (d = new g(d, y, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Ws && (y = n.relatedTarget || n.fromElement) && (Xt(y) || y[dt])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? Xt(y) : null, y !== null && (P = un(y), y !== P || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (v = Mu, w = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (v = Ru, w = "onPointerLeave", p = "onPointerEnter", h = "pointer"), P = g == null ? d : yn(g), m = y == null ? d : yn(y), d = new v(w, h + "leave", g, n, c), d.target = P, d.relatedTarget = m, w = null, Xt(c) === u && (v = new v(p, h + "enter", y, n, c), v.target = m, v.relatedTarget = P, w = v), P = w, g && y) t: {
            for (v = g, p = y, h = 0, m = v; m; m = fn(m)) h++;
            for (m = 0, w = p; w; w = fn(w)) m++;
            for (; 0 < h - m; ) v = fn(v), h--;
            for (; 0 < m - h; ) p = fn(p), m--;
            for (; h--; ) {
              if (v === p || p !== null && v === p.alternate) break t;
              v = fn(v), p = fn(p);
            }
            v = null;
          }
          else v = null;
          g !== null && Uu(f, d, g, v, !1), y !== null && P !== null && Uu(f, P, y, v, !0);
        }
      }
      e: {
        if (d = u ? yn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var S = ty;
        else if (_u(d)) if (Nd) S = oy;
        else {
          S = ry;
          var k = ny;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = iy);
        if (S && (S = S(e, u))) {
          _d(f, S, n, c);
          break e;
        }
        k && k(e, d, u), e === "focusout" && (k = d._wrapperState) && k.controlled && d.type === "number" && js(d, "number", d.value);
      }
      switch (k = u ? yn(u) : window, e) {
        case "focusin":
          (_u(k) || k.contentEditable === "true") && (mn = k, Zs = u, yr = null);
          break;
        case "focusout":
          yr = Zs = mn = null;
          break;
        case "mousedown":
          qs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qs = !1, ju(f, n, c);
          break;
        case "selectionchange":
          if (ay) break;
        case "keydown":
        case "keyup":
          ju(f, n, c);
      }
      var x;
      if (oa) e: {
        switch (e) {
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
      else pn ? Vd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Rd && n.locale !== "ko" && (pn || T !== "onCompositionStart" ? T === "onCompositionEnd" && pn && (x = Dd()) : (kt = c, na = "value" in kt ? kt.value : kt.textContent, pn = !0)), k = Xi(u, T), 0 < k.length && (T = new Du(T, e, null, n, c), f.push({ event: T, listeners: k }), x ? T.data = x : (x = Ld(n), x !== null && (T.data = x)))), (x = Zg ? qg(e, n) : Jg(e, n)) && (u = Xi(u, "onBeforeInput"), 0 < u.length && (c = new Du("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = x));
    }
    Hd(f, t);
  });
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = Mr(e, n), o != null && r.unshift(Fr(e, o, i)), o = Mr(e, t), o != null && r.push(Fr(e, o, i))), e = e.return;
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Mr(n, o), a != null && s.unshift(Fr(n, a, l))) : i || (a = Mr(n, o), a != null && s.push(Fr(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var dy = /\r\n?/g, hy = /\u0000|\uFFFD/g;
function $u(e) {
  return (typeof e == "string" ? e : "" + e).replace(dy, `
`).replace(hy, "");
}
function gi(e, t, n) {
  if (t = $u(t), $u(e) !== t && n) throw Error(E(425));
}
function Zi() {
}
var Js = null, bs = null;
function el(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tl = typeof setTimeout == "function" ? setTimeout : void 0, py = typeof clearTimeout == "function" ? clearTimeout : void 0, Wu = typeof Promise == "function" ? Promise : void 0, my = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wu != "undefined" ? function(e) {
  return Wu.resolve(null).then(e).catch(gy);
} : tl;
function gy(e) {
  setTimeout(function() {
    throw e;
  });
}
function ss(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Vr(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yn = Math.random().toString(36).slice(2), Je = "__reactFiber$" + Yn, Or = "__reactProps$" + Yn, dt = "__reactContainer$" + Yn, nl = "__reactEvents$" + Yn, yy = "__reactListeners$" + Yn, vy = "__reactHandles$" + Yn;
function Xt(e) {
  var t = e[Je];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[dt] || n[Je]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Hu(e); e !== null; ) {
        if (n = e[Je]) return n;
        e = Hu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Zr(e) {
  return e = e[Je] || e[dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Eo(e) {
  return e[Or] || null;
}
var rl = [], vn = -1;
function zt(e) {
  return { current: e };
}
function U(e) {
  0 > vn || (e.current = rl[vn], rl[vn] = null, vn--);
}
function I(e, t) {
  vn++, rl[vn] = e.current, e.current = t;
}
var Ft = {}, me = zt(Ft), Te = zt(!1), nn = Ft;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Pe(e) {
  return e = e.childContextTypes, e != null;
}
function qi() {
  U(Te), U(me);
}
function Ku(e, t, n) {
  if (me.current !== Ft) throw Error(E(168));
  I(me, t), I(Te, n);
}
function Gd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, ng(e) || "Unknown", i));
  return G({}, n, r);
}
function Ji(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, nn = me.current, I(me, e), I(Te, Te.current), !0;
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = Gd(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, U(Te), U(me), I(me, e)) : U(Te), I(Te, n);
}
var ot = null, Co = !1, ls = !1;
function Qd(e) {
  ot === null ? ot = [e] : ot.push(e);
}
function wy(e) {
  Co = !0, Qd(e);
}
function Bt() {
  if (!ls && ot !== null) {
    ls = !0;
    var e = 0, t = O;
    try {
      var n = ot;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ot = null, Co = !1;
    } catch (i) {
      throw ot !== null && (ot = ot.slice(e + 1)), vd(Jl, Bt), i;
    } finally {
      O = t, ls = !1;
    }
  }
  return null;
}
var wn = [], Sn = 0, bi = null, eo = 0, Oe = [], Ie = 0, rn = null, st = 1, lt = "";
function Kt(e, t) {
  wn[Sn++] = eo, wn[Sn++] = bi, bi = e, eo = t;
}
function Yd(e, t, n) {
  Oe[Ie++] = st, Oe[Ie++] = lt, Oe[Ie++] = rn, rn = e;
  var r = st;
  e = lt;
  var i = 32 - Qe(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Qe(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, st = 1 << 32 - Qe(t) + i | n << i | r, lt = o + e;
  } else st = 1 << o | n << i | r, lt = e;
}
function la(e) {
  e.return !== null && (Kt(e, 1), Yd(e, 1, 0));
}
function aa(e) {
  for (; e === bi; ) bi = wn[--Sn], wn[Sn] = null, eo = wn[--Sn], wn[Sn] = null;
  for (; e === rn; ) rn = Oe[--Ie], Oe[Ie] = null, lt = Oe[--Ie], Oe[Ie] = null, st = Oe[--Ie], Oe[Ie] = null;
}
var Me = null, Ae = null, $ = !1, Ge = null;
function Xd(e, t) {
  var n = je(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Ae = Dt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: st, overflow: lt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function il(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ol(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (il(e)) throw Error(E(418));
        t = Dt(n.nextSibling);
        var r = Me;
        t && Qu(e, t) ? Xd(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Me = e);
      }
    } else {
      if (il(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, $ = !1, Me = e;
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Me = e;
}
function yi(e) {
  if (e !== Me) return !1;
  if (!$) return Yu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !el(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (il(e)) throw Zd(), Error(E(418));
    for (; t; ) Xd(e, t), t = Dt(t.nextSibling);
  }
  if (Yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Me ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Zd() {
  for (var e = Ae; e; ) e = Dt(e.nextSibling);
}
function In() {
  Ae = Me = null, $ = !1;
}
function ua(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var Sy = gt.ReactCurrentBatchConfig;
function nr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var l = i.refs;
        s === null ? delete l[o] : l[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function vi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Xu(e) {
  var t = e._init;
  return t(e._payload);
}
function qd(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? (p.deletions = [h], p.flags |= 16) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), h = h.sibling;
    return null;
  }
  function r(p, h) {
    for (p = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? p.set(h.key, h) : p.set(h.index, h), h = h.sibling;
    return p;
  }
  function i(p, h) {
    return p = _t(p, h), p.index = 0, p.sibling = null, p;
  }
  function o(p, h, m) {
    return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < h ? (p.flags |= 2, h) : m) : (p.flags |= 2, h)) : (p.flags |= 1048576, h);
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, h, m, w) {
    return h === null || h.tag !== 6 ? (h = ps(m, p.mode, w), h.return = p, h) : (h = i(h, m), h.return = p, h);
  }
  function a(p, h, m, w) {
    var S = m.type;
    return S === hn ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Xu(S) === h.type) ? (w = i(h, m.props), w.ref = nr(p, h, m), w.return = p, w) : (w = ji(m.type, m.key, m.props, null, p.mode, w), w.ref = nr(p, h, m), w.return = p, w);
  }
  function u(p, h, m, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = ms(m, p.mode, w), h.return = p, h) : (h = i(h, m.children || []), h.return = p, h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7 ? (h = en(m, p.mode, w, S), h.return = p, h) : (h = i(h, m), h.return = p, h);
  }
  function f(p, h, m) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = ps("" + h, p.mode, m), h.return = p, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case li:
          return m = ji(h.type, h.key, h.props, null, p.mode, m), m.ref = nr(p, null, h), m.return = p, m;
        case dn:
          return h = ms(h, p.mode, m), h.return = p, h;
        case St:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (lr(h) || qn(h)) return h = en(h, p.mode, m, null), h.return = p, h;
      vi(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : l(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case li:
          return m.key === S ? a(p, h, m, w) : null;
        case dn:
          return m.key === S ? u(p, h, m, w) : null;
        case St:
          return S = m._init, d(
            p,
            h,
            S(m._payload),
            w
          );
      }
      if (lr(m) || qn(m)) return S !== null ? null : c(p, h, m, w, null);
      vi(p, m);
    }
    return null;
  }
  function g(p, h, m, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(m) || null, l(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case li:
          return p = p.get(w.key === null ? m : w.key) || null, a(h, p, w, S);
        case dn:
          return p = p.get(w.key === null ? m : w.key) || null, u(h, p, w, S);
        case St:
          var k = w._init;
          return g(p, h, m, k(w._payload), S);
      }
      if (lr(w) || qn(w)) return p = p.get(m) || null, c(h, p, w, S, null);
      vi(h, w);
    }
    return null;
  }
  function y(p, h, m, w) {
    for (var S = null, k = null, x = h, T = h = 0, _ = null; x !== null && T < m.length; T++) {
      x.index > T ? (_ = x, x = null) : _ = x.sibling;
      var D = d(p, x, m[T], w);
      if (D === null) {
        x === null && (x = _);
        break;
      }
      e && x && D.alternate === null && t(p, x), h = o(D, h, T), k === null ? S = D : k.sibling = D, k = D, x = _;
    }
    if (T === m.length) return n(p, x), $ && Kt(p, T), S;
    if (x === null) {
      for (; T < m.length; T++) x = f(p, m[T], w), x !== null && (h = o(x, h, T), k === null ? S = x : k.sibling = x, k = x);
      return $ && Kt(p, T), S;
    }
    for (x = r(p, x); T < m.length; T++) _ = g(x, p, T, m[T], w), _ !== null && (e && _.alternate !== null && x.delete(_.key === null ? T : _.key), h = o(_, h, T), k === null ? S = _ : k.sibling = _, k = _);
    return e && x.forEach(function(z) {
      return t(p, z);
    }), $ && Kt(p, T), S;
  }
  function v(p, h, m, w) {
    var S = qn(m);
    if (typeof S != "function") throw Error(E(150));
    if (m = S.call(m), m == null) throw Error(E(151));
    for (var k = S = null, x = h, T = h = 0, _ = null, D = m.next(); x !== null && !D.done; T++, D = m.next()) {
      x.index > T ? (_ = x, x = null) : _ = x.sibling;
      var z = d(p, x, D.value, w);
      if (z === null) {
        x === null && (x = _);
        break;
      }
      e && x && z.alternate === null && t(p, x), h = o(z, h, T), k === null ? S = z : k.sibling = z, k = z, x = _;
    }
    if (D.done) return n(
      p,
      x
    ), $ && Kt(p, T), S;
    if (x === null) {
      for (; !D.done; T++, D = m.next()) D = f(p, D.value, w), D !== null && (h = o(D, h, T), k === null ? S = D : k.sibling = D, k = D);
      return $ && Kt(p, T), S;
    }
    for (x = r(p, x); !D.done; T++, D = m.next()) D = g(x, p, T, D.value, w), D !== null && (e && D.alternate !== null && x.delete(D.key === null ? T : D.key), h = o(D, h, T), k === null ? S = D : k.sibling = D, k = D);
    return e && x.forEach(function(Ee) {
      return t(p, Ee);
    }), $ && Kt(p, T), S;
  }
  function P(p, h, m, w) {
    if (typeof m == "object" && m !== null && m.type === hn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case li:
          e: {
            for (var S = m.key, k = h; k !== null; ) {
              if (k.key === S) {
                if (S = m.type, S === hn) {
                  if (k.tag === 7) {
                    n(p, k.sibling), h = i(k, m.props.children), h.return = p, p = h;
                    break e;
                  }
                } else if (k.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && Xu(S) === k.type) {
                  n(p, k.sibling), h = i(k, m.props), h.ref = nr(p, k, m), h.return = p, p = h;
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            m.type === hn ? (h = en(m.props.children, p.mode, w, m.key), h.return = p, p = h) : (w = ji(m.type, m.key, m.props, null, p.mode, w), w.ref = nr(p, h, m), w.return = p, p = w);
          }
          return s(p);
        case dn:
          e: {
            for (k = m.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                n(p, h.sibling), h = i(h, m.children || []), h.return = p, p = h;
                break e;
              } else {
                n(p, h);
                break;
              }
              else t(p, h);
              h = h.sibling;
            }
            h = ms(m, p.mode, w), h.return = p, p = h;
          }
          return s(p);
        case St:
          return k = m._init, P(p, h, k(m._payload), w);
      }
      if (lr(m)) return y(p, h, m, w);
      if (qn(m)) return v(p, h, m, w);
      vi(p, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, h !== null && h.tag === 6 ? (n(p, h.sibling), h = i(h, m), h.return = p, p = h) : (n(p, h), h = ps(m, p.mode, w), h.return = p, p = h), s(p)) : n(p, h);
  }
  return P;
}
var jn = qd(!0), Jd = qd(!1), to = zt(null), no = null, xn = null, ca = null;
function fa() {
  ca = xn = no = null;
}
function da(e) {
  var t = to.current;
  U(to), e._currentValue = t;
}
function sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function _n(e, t) {
  no = e, ca = xn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (ca !== e) if (e = { context: e, memoizedValue: t, next: null }, xn === null) {
    if (no === null) throw Error(E(308));
    xn = e, no.dependencies = { lanes: 0, firstContext: e };
  } else xn = xn.next = e;
  return t;
}
var Zt = null;
function ha(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function bd(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ha(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function pa(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function eh(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function at(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ht(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ha(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ht(e, n);
}
function Li(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
  }
}
function Zu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function ro(e, t, n, r) {
  var i = e.updateQueue;
  xt = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? o = u : s.next = u, s = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (o !== null) {
    var f = i.baseState;
    s = 0, c = u = a = null, l = o;
    do {
      var d = l.lane, g = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, v = l;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, d = typeof y == "function" ? y.call(g, f, d) : y, d == null) break e;
              f = G({}, f, d);
              break e;
            case 2:
              xt = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l));
      } else g = { eventTime: g, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = g, a = f) : c = c.next = g, s |= d;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    sn |= s, e.lanes = s, e.memoizedState = f;
  }
}
function qu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(E(191, i));
      i.call(r);
    }
  }
}
var qr = {}, et = zt(qr), Ir = zt(qr), jr = zt(qr);
function qt(e) {
  if (e === qr) throw Error(E(174));
  return e;
}
function ma(e, t) {
  switch (I(jr, t), I(Ir, e), I(et, qr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bs(t, e);
  }
  U(et), I(et, t);
}
function zn() {
  U(et), U(Ir), U(jr);
}
function th(e) {
  qt(jr.current);
  var t = qt(et.current), n = Bs(t, e.type);
  t !== n && (I(Ir, e), I(et, n));
}
function ga(e) {
  Ir.current === e && (U(et), U(Ir));
}
var W = zt(0);
function io(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var as = [];
function ya() {
  for (var e = 0; e < as.length; e++) as[e]._workInProgressVersionPrimary = null;
  as.length = 0;
}
var _i = gt.ReactCurrentDispatcher, us = gt.ReactCurrentBatchConfig, on = 0, K = null, ee = null, ie = null, oo = !1, vr = !1, zr = 0, xy = 0;
function fe() {
  throw Error(E(321));
}
function va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function wa(e, t, n, r, i, o) {
  if (on = o, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _i.current = e === null || e.memoizedState === null ? Ey : Cy, e = n(r, i), vr) {
    o = 0;
    do {
      if (vr = !1, zr = 0, 25 <= o) throw Error(E(301));
      o += 1, ie = ee = null, t.updateQueue = null, _i.current = Ay, e = n(r, i);
    } while (vr);
  }
  if (_i.current = so, t = ee !== null && ee.next !== null, on = 0, ie = ee = K = null, oo = !1, t) throw Error(E(300));
  return e;
}
function Sa() {
  var e = zr !== 0;
  return zr = 0, e;
}
function qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? K.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Ue() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ie === null ? K.memoizedState : ie.next;
  if (t !== null) ie = t, ee = e;
  else {
    if (e === null) throw Error(E(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, ie === null ? K.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function Br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cs(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ee, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var l = s = null, a = null, u = o;
    do {
      var c = u.lane;
      if ((on & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, K.lanes |= c, sn |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? s = r : a.next = l, Xe(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, K.lanes |= o, sn |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fs(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Xe(o, t.memoizedState) || (xe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function nh() {
}
function rh(e, t) {
  var n = K, r = Ue(), i = t(), o = !Xe(r.memoizedState, i);
  if (o && (r.memoizedState = i, xe = !0), r = r.queue, xa(sh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ur(9, oh.bind(null, n, r, i, t), void 0, null), se === null) throw Error(E(349));
    on & 30 || ih(n, t, i);
  }
  return i;
}
function ih(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function oh(e, t, n, r) {
  t.value = n, t.getSnapshot = r, lh(t) && ah(e);
}
function sh(e, t, n) {
  return n(function() {
    lh(t) && ah(e);
  });
}
function lh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function ah(e) {
  var t = ht(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function Ju(e) {
  var t = qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Br, lastRenderedState: e }, t.queue = e, e = e.dispatch = ky.bind(null, K, e), [t.memoizedState, e];
}
function Ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function uh() {
  return Ue().memoizedState;
}
function Ni(e, t, n, r) {
  var i = qe();
  K.flags |= e, i.memoizedState = Ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ao(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ee !== null) {
    var s = ee.memoizedState;
    if (o = s.destroy, r !== null && va(r, s.deps)) {
      i.memoizedState = Ur(t, n, o, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Ur(1 | t, n, o, r);
}
function bu(e, t) {
  return Ni(8390656, 8, e, t);
}
function xa(e, t) {
  return Ao(2048, 8, e, t);
}
function ch(e, t) {
  return Ao(4, 2, e, t);
}
function fh(e, t) {
  return Ao(4, 4, e, t);
}
function dh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function hh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ao(4, 4, dh.bind(null, t, e), n);
}
function Ta() {
}
function ph(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function mh(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && va(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function gh(e, t, n) {
  return on & 21 ? (Xe(n, t) || (n = xd(), K.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n);
}
function Ty(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = us.transition;
  us.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, us.transition = r;
  }
}
function yh() {
  return Ue().memoizedState;
}
function Py(e, t, n) {
  var r = Lt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, vh(e)) wh(t, n);
  else if (n = bd(e, t, n, r), n !== null) {
    var i = ye();
    Ye(n, e, r, i), Sh(n, t, r);
  }
}
function ky(e, t, n) {
  var r = Lt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (vh(e)) wh(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, l = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = l, Xe(l, s)) {
        var a = t.interleaved;
        a === null ? (i.next = i, ha(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = bd(e, t, i, r), n !== null && (i = ye(), Ye(n, e, r, i), Sh(n, t, r));
  }
}
function vh(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function wh(e, t) {
  vr = oo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Sh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bl(e, n);
  }
}
var so = { readContext: Be, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, Ey = { readContext: Be, useCallback: function(e, t) {
  return qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ni(
    4194308,
    4,
    dh.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ni(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ni(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Py.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ju, useDebugValue: Ta, useDeferredValue: function(e) {
  return qe().memoizedState = e;
}, useTransition: function() {
  var e = Ju(!1), t = e[0];
  return e = Ty.bind(null, e[1]), qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = qe();
  if ($) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(E(349));
    on & 30 || ih(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, bu(sh.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Ur(9, oh.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = qe(), t = se.identifierPrefix;
  if ($) {
    var n = lt, r = st;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Cy = {
  readContext: Be,
  useCallback: ph,
  useContext: Be,
  useEffect: xa,
  useImperativeHandle: hh,
  useInsertionEffect: ch,
  useLayoutEffect: fh,
  useMemo: mh,
  useReducer: cs,
  useRef: uh,
  useState: function() {
    return cs(Br);
  },
  useDebugValue: Ta,
  useDeferredValue: function(e) {
    var t = Ue();
    return gh(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = cs(Br)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: nh,
  useSyncExternalStore: rh,
  useId: yh,
  unstable_isNewReconciler: !1
}, Ay = { readContext: Be, useCallback: ph, useContext: Be, useEffect: xa, useImperativeHandle: hh, useInsertionEffect: ch, useLayoutEffect: fh, useMemo: mh, useReducer: fs, useRef: uh, useState: function() {
  return fs(Br);
}, useDebugValue: Ta, useDeferredValue: function(e) {
  var t = Ue();
  return ee === null ? t.memoizedState = e : gh(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = fs(Br)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: nh, useSyncExternalStore: rh, useId: yh, unstable_isNewReconciler: !1 };
function He(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ll(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Mo = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Lt(e), o = at(r, i);
  o.payload = t, n != null && (o.callback = n), t = Rt(e, o, i), t !== null && (Ye(t, e, i, r), Li(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Lt(e), o = at(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Rt(e, o, i), t !== null && (Ye(t, e, i, r), Li(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = Lt(e), i = at(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Rt(e, i, r), t !== null && (Ye(t, e, r, n), Li(t, e, r));
} };
function ec(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !_r(n, r) || !_r(i, o) : !0;
}
function xh(e, t, n) {
  var r = !1, i = Ft, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Be(o) : (i = Pe(t) ? nn : me.current, r = t.contextTypes, o = (r = r != null) ? On(e, i) : Ft), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Mo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function tc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Mo.enqueueReplaceState(t, t.state, null);
}
function al(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, pa(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = Be(o) : (o = Pe(t) ? nn : me.current, i.context = On(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ll(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Mo.enqueueReplaceState(i, i.state, null), ro(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += tg(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ds(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function ul(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var My = typeof WeakMap == "function" ? WeakMap : Map;
function Th(e, t, n) {
  n = at(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ao || (ao = !0, wl = r), ul(e, t);
  }, n;
}
function Ph(e, t, n) {
  n = at(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      ul(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    ul(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function nc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new My();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = $y.bind(null, e, t, n), t.then(e, e));
}
function rc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ic(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e);
}
var Dy = gt.ReactCurrentOwner, xe = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Jd(t, null, n, r) : jn(t, e.child, n, r);
}
function oc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return _n(t, i), r = wa(e, t, n, r, o, i), n = Sa(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && n && la(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function sc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Ra(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, kh(e, t, o, r, i)) : (e = ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : _r, n(s, r) && e.ref === t.ref) return pt(e, t, i);
  }
  return t.flags |= 1, e = _t(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function kh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (_r(o, r) && e.ref === t.ref) if (xe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (xe = !0);
    else return t.lanes = e.lanes, pt(e, t, i);
  }
  return cl(e, t, n, r, i);
}
function Eh(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(Pn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, I(Pn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, I(Pn, Ce), Ce |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(Pn, Ce), Ce |= r;
  return ge(e, t, i, n), t.child;
}
function Ch(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function cl(e, t, n, r, i) {
  var o = Pe(n) ? nn : me.current;
  return o = On(t, o), _n(t, i), n = wa(e, t, n, r, o, i), r = Sa(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && r && la(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function lc(e, t, n, r, i) {
  if (Pe(n)) {
    var o = !0;
    Ji(t);
  } else o = !1;
  if (_n(t, i), t.stateNode === null) Fi(e, t), xh(t, n, r), al(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Be(u) : (u = Pe(n) ? nn : me.current, u = On(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && tc(t, s, r, u), xt = !1;
    var d = t.memoizedState;
    s.state = d, ro(t, r, s, i), a = t.memoizedState, l !== r || d !== a || Te.current || xt ? (typeof c == "function" && (ll(t, n, c, r), a = t.memoizedState), (l = xt || ec(t, n, l, r, d, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, eh(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : He(t.type, l), s.props = u, f = t.pendingProps, d = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = Pe(n) ? nn : me.current, a = On(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || d !== a) && tc(t, s, r, a), xt = !1, d = t.memoizedState, s.state = d, ro(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Te.current || xt ? (typeof g == "function" && (ll(t, n, g, r), y = t.memoizedState), (u = xt || ec(t, n, u, r, d, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fl(e, t, n, r, o, i);
}
function fl(e, t, n, r, i, o) {
  Ch(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Gu(t, n, !1), pt(e, t, o);
  r = t.stateNode, Dy.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = jn(t, e.child, null, o), t.child = jn(t, null, l, o)) : ge(e, t, l, o), t.memoizedState = r.state, i && Gu(t, n, !0), t.child;
}
function Ah(e) {
  var t = e.stateNode;
  t.pendingContext ? Ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ku(e, t.context, !1), ma(e, t.containerInfo);
}
function ac(e, t, n, r, i) {
  return In(), ua(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function hl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mh(e, t, n) {
  var r = t.pendingProps, i = W.current, o = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), I(W, i & 1), e === null)
    return ol(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Vo(s, r, 0, null), e = en(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = hl(n), t.memoizedState = dl, e) : Pa(t, s));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Ry(e, t, s, r, l, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = _t(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = _t(l, o) : (o = en(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? hl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = dl, r;
  }
  return o = e.child, e = o.sibling, r = _t(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Pa(e, t) {
  return t = Vo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function wi(e, t, n, r) {
  return r !== null && ua(r), jn(t, e.child, null, n), e = Pa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Ry(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ds(Error(E(422))), wi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Vo({ mode: "visible", children: r.children }, i, 0, null), o = en(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && jn(t, e.child, null, s), t.child.memoizedState = hl(s), t.memoizedState = dl, o);
  if (!(t.mode & 1)) return wi(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, o = Error(E(419)), r = ds(o, r, void 0), wi(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, xe || l) {
    if (r = se, r !== null) {
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
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, ht(e, i), Ye(r, e, i, -1));
    }
    return Da(), r = ds(Error(E(421))), wi(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Wy.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Ae = Dt(i.nextSibling), Me = t, $ = !0, Ge = null, e !== null && (Oe[Ie++] = st, Oe[Ie++] = lt, Oe[Ie++] = rn, st = e.id, lt = e.overflow, rn = t), t = Pa(t, r.children), t.flags |= 4096, t);
}
function uc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), sl(e.return, t, n);
}
function hs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Dh(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (ge(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && uc(e, n, t);
      else if (e.tag === 19) uc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (I(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && io(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), hs(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && io(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      hs(t, !0, n, null, o);
      break;
    case "together":
      hs(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Fi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = _t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = _t(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Vy(e, t, n) {
  switch (t.tag) {
    case 3:
      Ah(t), In();
      break;
    case 5:
      th(t);
      break;
    case 1:
      Pe(t.type) && Ji(t);
      break;
    case 4:
      ma(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      I(to, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mh(e, t, n) : (I(W, W.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
      I(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Dh(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), I(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Eh(e, t, n);
  }
  return pt(e, t, n);
}
var Rh, pl, Vh, Lh;
Rh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
pl = function() {
};
Vh = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, qt(et.current);
    var o = null;
    switch (n) {
      case "input":
        i = Os(e, i), r = Os(e, r), o = [];
        break;
      case "select":
        i = G({}, i, { value: void 0 }), r = G({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = zs(e, i), r = zs(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zi);
    }
    Us(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Cr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Cr.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Lh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!$) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ly(e, t, n) {
  var r = t.pendingProps;
  switch (aa(t), t.tag) {
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
      return de(t), null;
    case 1:
      return Pe(t.type) && qi(), de(t), null;
    case 3:
      return r = t.stateNode, zn(), U(Te), U(me), ya(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Tl(Ge), Ge = null))), pl(e, t), de(t), null;
    case 5:
      ga(t);
      var i = qt(jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Vh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return de(t), null;
        }
        if (e = qt(et.current), yi(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Je] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ur.length; i++) B(ur[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              vu(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              Su(r, o), B("invalid", r);
          }
          Us(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var l = o[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && gi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && gi(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : Cr.hasOwnProperty(s) && l != null && s === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              ai(r), wu(r, o, !0);
              break;
            case "textarea":
              ai(r), xu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zi);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Je] = t, e[Or] = r, Rh(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = $s(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < ur.length; i++) B(ur[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                vu(e, r), i = Os(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = G({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Su(e, r), i = zs(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Us(n, i), l = i;
            for (o in l) if (l.hasOwnProperty(o)) {
              var a = l[o];
              o === "style" ? ud(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ld(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ar(e, a) : typeof a == "number" && Ar(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Cr.hasOwnProperty(o) ? a != null && o === "onScroll" && B("scroll", e) : a != null && Ql(e, o, a, s));
            }
            switch (n) {
              case "input":
                ai(e), wu(e, r, !1);
                break;
              case "textarea":
                ai(e), xu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Dn(e, !!r.multiple, o, !1) : r.defaultValue != null && Dn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zi);
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
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Lh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = qt(jr.current), qt(et.current), yi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Je] = t, (o = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
            case 3:
              gi(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gi(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Je] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (U(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128)) Zd(), In(), t.flags |= 98560, o = !1;
        else if (o = yi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[Je] = t;
          } else In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), o = !1;
        } else Ge !== null && (Tl(Ge), Ge = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? te === 0 && (te = 3) : Da())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return zn(), pl(e, t), e === null && Nr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return da(t.type._context), de(t), null;
    case 17:
      return Pe(t.type) && qi(), de(t), null;
    case 19:
      if (U(W), o = t.memoizedState, o === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) rr(o, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = io(e), s !== null) {
            for (t.flags |= 128, rr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return I(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && q() > Un && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = io(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !$) return de(t), null;
        } else 2 * q() - o.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, rr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = q(), t.sibling = null, n = W.current, I(W, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ma(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function _y(e, t) {
  switch (aa(t), t.tag) {
    case 1:
      return Pe(t.type) && qi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zn(), U(Te), U(me), ya(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ga(t), null;
    case 13:
      if (U(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(W), null;
    case 4:
      return zn(), null;
    case 10:
      return da(t.type._context), null;
    case 22:
    case 23:
      return Ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Si = !1, pe = !1, Ny = typeof WeakSet == "function" ? WeakSet : Set, A = null;
function Tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Y(e, t, r);
  }
  else n.current = null;
}
function ml(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var cc = !1;
function Fy(e, t) {
  if (Js = Qi, e = Id(), sa(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (g = f.firstChild) !== null; )
            d = f, f = g;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (l = s), d === o && ++c === r && (a = s), (g = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = g;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bs = { focusedElem: e, selectionRange: n }, Qi = !1, A = t; A !== null; ) if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, A = e;
  else for (; A !== null; ) {
    t = A;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, P = y.memoizedState, p = t.stateNode, h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? v : He(t.type, v), P);
            p.__reactInternalSnapshotBeforeUpdate = h;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(E(163));
      }
    } catch (w) {
      Y(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return y = cc, cc = !1, y;
}
function wr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && ml(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Do(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function gl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function _h(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _h(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Je], delete t[Or], delete t[nl], delete t[yy], delete t[vy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function fc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && (e = e.child, e !== null)) for (yl(e, t, n), e = e.sibling; e !== null; ) yl(e, t, n), e = e.sibling;
}
function vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (vl(e, t, n), e = e.sibling; e !== null; ) vl(e, t, n), e = e.sibling;
}
var le = null, Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) Fh(e, t, n), n = n.sibling;
}
function Fh(e, t, n) {
  if (be && typeof be.onCommitFiberUnmount == "function") try {
    be.onCommitFiberUnmount(xo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || Tn(n, t);
    case 6:
      var r = le, i = Ke;
      le = null, vt(e, t, n), le = r, Ke = i, le !== null && (Ke ? (e = le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null && (Ke ? (e = le, n = n.stateNode, e.nodeType === 8 ? ss(e.parentNode, n) : e.nodeType === 1 && ss(e, n), Vr(e)) : ss(le, n.stateNode));
      break;
    case 4:
      r = le, i = Ke, le = n.stateNode.containerInfo, Ke = !0, vt(e, t, n), le = r, Ke = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && ml(n, t, s), i = i.next;
        } while (i !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!pe && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Y(n, t, l);
      }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, vt(e, t, n), pe = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ny()), t.forEach(function(r) {
      var i = Hy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            le = l.stateNode, Ke = !1;
            break e;
          case 3:
            le = l.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            le = l.stateNode.containerInfo, Ke = !0;
            break e;
        }
        l = l.return;
      }
      if (le === null) throw Error(E(160));
      Fh(o, s, i), le = null, Ke = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      Y(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Oh(t, e), t = t.sibling;
}
function Oh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), Ze(e), r & 4) {
        try {
          wr(3, e, e.return), Do(3, e);
        } catch (v) {
          Y(e, e.return, v);
        }
        try {
          wr(5, e, e.return);
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), Ze(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if ($e(t, e), Ze(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Ar(i, "");
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && o.type === "radio" && o.name != null && id(i, o), $s(l, s);
          var u = $s(l, o);
          for (s = 0; s < a.length; s += 2) {
            var c = a[s], f = a[s + 1];
            c === "style" ? ud(i, f) : c === "dangerouslySetInnerHTML" ? ld(i, f) : c === "children" ? Ar(i, f) : Ql(i, c, f, u);
          }
          switch (l) {
            case "input":
              Is(i, o);
              break;
            case "textarea":
              od(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Dn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? Dn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Dn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Or] = o;
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 6:
      if ($e(t, e), Ze(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (v) {
          Y(e, e.return, v);
        }
      }
      break;
    case 3:
      if ($e(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Vr(t.containerInfo);
      } catch (v) {
        Y(e, e.return, v);
      }
      break;
    case 4:
      $e(t, e), Ze(e);
      break;
    case 13:
      $e(t, e), Ze(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Ca = q())), r & 4 && dc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || c, $e(t, e), pe = u) : $e(t, e), Ze(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (A = e, c = e.child; c !== null; ) {
          for (f = A = c; A !== null; ) {
            switch (d = A, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                wr(4, d, d.return);
                break;
              case 1:
                Tn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    Y(r, n, v);
                  }
                }
                break;
              case 5:
                Tn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  pc(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, A = g) : pc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = ad("display", s));
              } catch (v) {
                Y(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              Y(e, e.return, v);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      $e(t, e), Ze(e), r & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      $e(
        t,
        e
      ), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ar(i, ""), r.flags &= -33);
          var o = fc(e);
          vl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = fc(e);
          yl(e, l, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Oy(e, t, n) {
  A = e, Ih(e);
}
function Ih(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Si;
      if (!s) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || pe;
        l = Si;
        var u = pe;
        if (Si = s, (pe = a) && !u) for (A = i; A !== null; ) s = A, a = s.child, s.tag === 22 && s.memoizedState !== null ? mc(i) : a !== null ? (a.return = s, A = a) : mc(i);
        for (; o !== null; ) A = o, Ih(o), o = o.sibling;
        A = i, Si = l, pe = u;
      }
      hc(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, A = o) : hc(e);
  }
}
function hc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Do(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && qu(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              qu(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
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
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && Vr(f);
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
            throw Error(E(163));
        }
        pe || t.flags & 512 && gl(t);
      } catch (d) {
        Y(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function pc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function mc(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Do(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, i, a);
            }
          }
          var o = t.return;
          try {
            gl(t);
          } catch (a) {
            Y(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            gl(t);
          } catch (a) {
            Y(t, s, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, A = l;
      break;
    }
    A = t.return;
  }
}
var Iy = Math.ceil, lo = gt.ReactCurrentDispatcher, ka = gt.ReactCurrentOwner, ze = gt.ReactCurrentBatchConfig, F = 0, se = null, J = null, ue = 0, Ce = 0, Pn = zt(0), te = 0, $r = null, sn = 0, Ro = 0, Ea = 0, Sr = null, Se = null, Ca = 0, Un = 1 / 0, it = null, ao = !1, wl = null, Vt = null, xi = !1, Et = null, uo = 0, xr = 0, Sl = null, Oi = -1, Ii = 0;
function ye() {
  return F & 6 ? q() : Oi !== -1 ? Oi : Oi = q();
}
function Lt(e) {
  return e.mode & 1 ? F & 2 && ue !== 0 ? ue & -ue : Sy.transition !== null ? (Ii === 0 && (Ii = xd()), Ii) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Md(e.type)), e) : 1;
}
function Ye(e, t, n, r) {
  if (50 < xr) throw xr = 0, Sl = null, Error(E(185));
  Yr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Ro |= n), te === 4 && Pt(e, ue)), ke(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Un = q() + 500, Co && Bt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Sg(e, t);
  var r = Gi(e, e === se ? ue : 0);
  if (r === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ku(n), t === 1) e.tag === 0 ? wy(gc.bind(null, e)) : Qd(gc.bind(null, e)), my(function() {
      !(F & 6) && Bt();
    }), n = null;
    else {
      switch (Td(r)) {
        case 1:
          n = Jl;
          break;
        case 4:
          n = wd;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = Sd;
          break;
        default:
          n = Ki;
      }
      n = Kh(n, jh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function jh(e, t) {
  if (Oi = -1, Ii = 0, F & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = Gi(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Bh();
    (se !== e || ue !== t) && (it = null, Un = q() + 500, bt(e, t));
    do
      try {
        By();
        break;
      } catch (l) {
        zh(e, l);
      }
    while (!0);
    fa(), lo.current = o, F = i, J !== null ? t = 0 : (se = null, ue = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (i = Qs(e), i !== 0 && (r = i, t = xl(e, i))), t === 1) throw n = $r, bt(e, 0), Pt(e, r), ke(e, q()), n;
    if (t === 6) Pt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !jy(i) && (t = co(e, r), t === 2 && (o = Qs(e), o !== 0 && (r = o, t = xl(e, o))), t === 1)) throw n = $r, bt(e, 0), Pt(e, r), ke(e, q()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Gt(e, Se, it);
          break;
        case 3:
          if (Pt(e, r), (r & 130023424) === r && (t = Ca + 500 - q(), 10 < t)) {
            if (Gi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = tl(Gt.bind(null, e, Se, it), t);
            break;
          }
          Gt(e, Se, it);
          break;
        case 4:
          if (Pt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Qe(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Iy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = tl(Gt.bind(null, e, Se, it), r);
            break;
          }
          Gt(e, Se, it);
          break;
        case 5:
          Gt(e, Se, it);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ke(e, q()), e.callbackNode === n ? jh.bind(null, e) : null;
}
function xl(e, t) {
  var n = Sr;
  return e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256), e = co(e, t), e !== 2 && (t = Se, Se = n, t !== null && Tl(t)), e;
}
function Tl(e) {
  Se === null ? Se = e : Se.push.apply(Se, e);
}
function jy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Xe(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Pt(e, t) {
  for (t &= ~Ea, t &= ~Ro, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function gc(e) {
  if (F & 6) throw Error(E(327));
  Nn();
  var t = Gi(e, 0);
  if (!(t & 1)) return ke(e, q()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qs(e);
    r !== 0 && (t = r, n = xl(e, r));
  }
  if (n === 1) throw n = $r, bt(e, 0), Pt(e, t), ke(e, q()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Se, it), ke(e, q()), null;
}
function Aa(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Un = q() + 500, Co && Bt());
  }
}
function ln(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && Nn();
  var t = F;
  F |= 1;
  var n = ze.transition, r = O;
  try {
    if (ze.transition = null, O = 1, e) return e();
  } finally {
    O = r, ze.transition = n, F = t, !(F & 6) && Bt();
  }
}
function Ma() {
  Ce = Pn.current, U(Pn);
}
function bt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, py(n)), J !== null) for (n = J.return; n !== null; ) {
    var r = n;
    switch (aa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qi();
        break;
      case 3:
        zn(), U(Te), U(me), ya();
        break;
      case 5:
        ga(r);
        break;
      case 4:
        zn();
        break;
      case 13:
        U(W);
        break;
      case 19:
        U(W);
        break;
      case 10:
        da(r.type._context);
        break;
      case 22:
      case 23:
        Ma();
    }
    n = n.return;
  }
  if (se = e, J = e = _t(e.current, null), ue = Ce = t, te = 0, $r = null, Ea = Ro = sn = 0, Se = Sr = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function zh(e, t) {
  do {
    var n = J;
    try {
      if (fa(), _i.current = so, oo) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        oo = !1;
      }
      if (on = 0, ie = ee = K = null, vr = !1, zr = 0, ka.current = null, n === null || n.return === null) {
        te = 1, $r = t, J = null;
        break;
      }
      e: {
        var o = e, s = n.return, l = n, a = t;
        if (t = ue, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = rc(s);
          if (g !== null) {
            g.flags &= -257, ic(g, s, l, o, t), g.mode & 1 && nc(o, u, t), t = g, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              nc(o, u, t), Da();
              break e;
            }
            a = Error(E(426));
          }
        } else if ($ && l.mode & 1) {
          var P = rc(s);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), ic(P, s, l, o, t), ua(Bn(a, l));
            break e;
          }
        }
        o = a = Bn(a, l), te !== 4 && (te = 2), Sr === null ? Sr = [o] : Sr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var p = Th(o, a, t);
              Zu(o, p);
              break e;
            case 1:
              l = a;
              var h = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var w = Ph(o, l, t);
                Zu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $h(n);
    } catch (S) {
      t = S, J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Bh() {
  var e = lo.current;
  return lo.current = so, e === null ? so : e;
}
function Da() {
  (te === 0 || te === 3 || te === 2) && (te = 4), se === null || !(sn & 268435455) && !(Ro & 268435455) || Pt(se, ue);
}
function co(e, t) {
  var n = F;
  F |= 2;
  var r = Bh();
  (se !== e || ue !== t) && (it = null, bt(e, t));
  do
    try {
      zy();
      break;
    } catch (i) {
      zh(e, i);
    }
  while (!0);
  if (fa(), F = n, lo.current = r, J !== null) throw Error(E(261));
  return se = null, ue = 0, te;
}
function zy() {
  for (; J !== null; ) Uh(J);
}
function By() {
  for (; J !== null && !fg(); ) Uh(J);
}
function Uh(e) {
  var t = Hh(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? $h(e) : J = t, ka.current = null;
}
function $h(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _y(n, t), n !== null) {
        n.flags &= 32767, J = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, J = null;
        return;
      }
    } else if (n = Ly(n, t, Ce), n !== null) {
      J = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Gt(e, t, n) {
  var r = O, i = ze.transition;
  try {
    ze.transition = null, O = 1, Uy(e, t, n, r);
  } finally {
    ze.transition = i, O = r;
  }
  return null;
}
function Uy(e, t, n, r) {
  do
    Nn();
  while (Et !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (xg(e, o), e === se && (J = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || xi || (xi = !0, Kh(Ki, function() {
    return Nn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = ze.transition, ze.transition = null;
    var s = O;
    O = 1;
    var l = F;
    F |= 4, ka.current = null, Fy(e, n), Oh(n, e), ly(bs), Qi = !!Js, bs = Js = null, e.current = n, Oy(n), dg(), F = l, O = s, ze.transition = o;
  } else e.current = n;
  if (xi && (xi = !1, Et = e, uo = i), o = e.pendingLanes, o === 0 && (Vt = null), mg(n.stateNode), ke(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ao) throw ao = !1, e = wl, wl = null, e;
  return uo & 1 && e.tag !== 0 && Nn(), o = e.pendingLanes, o & 1 ? e === Sl ? xr++ : (xr = 0, Sl = e) : xr = 0, Bt(), null;
}
function Nn() {
  if (Et !== null) {
    var e = Td(uo), t = ze.transition, n = O;
    try {
      if (ze.transition = null, O = 16 > e ? 16 : e, Et === null) var r = !1;
      else {
        if (e = Et, Et = null, uo = 0, F & 6) throw Error(E(331));
        var i = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var o = A, s = o.child;
          if (A.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, A = f;
                  else for (; A !== null; ) {
                    c = A;
                    var d = c.sibling, g = c.return;
                    if (_h(c), c === u) {
                      A = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, A = d;
                      break;
                    }
                    A = g;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var P = v.sibling;
                    v.sibling = null, v = P;
                  } while (v !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, A = s;
          else e: for (; A !== null; ) {
            if (o = A, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                wr(9, o, o.return);
            }
            var p = o.sibling;
            if (p !== null) {
              p.return = o.return, A = p;
              break e;
            }
            A = o.return;
          }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          s = A;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, A = m;
          else e: for (s = h; A !== null; ) {
            if (l = A, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Do(9, l);
              }
            } catch (S) {
              Y(l, l.return, S);
            }
            if (l === s) {
              A = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, A = w;
              break e;
            }
            A = l.return;
          }
        }
        if (F = i, Bt(), be && typeof be.onPostCommitFiberRoot == "function") try {
          be.onPostCommitFiberRoot(xo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, ze.transition = t;
    }
  }
  return !1;
}
function yc(e, t, n) {
  t = Bn(n, t), t = Th(e, t, 1), e = Rt(e, t, 1), t = ye(), e !== null && (Yr(e, 1, t), ke(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) yc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      yc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
        e = Bn(n, e), e = Ph(t, e, 1), t = Rt(t, e, 1), e = ye(), t !== null && (Yr(t, 1, e), ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function $y(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > q() - Ca ? bt(e, 0) : Ea |= n), ke(e, t);
}
function Wh(e, t) {
  t === 0 && (e.mode & 1 ? (t = fi, fi <<= 1, !(fi & 130023424) && (fi = 4194304)) : t = 1);
  var n = ye();
  e = ht(e, t), e !== null && (Yr(e, t, n), ke(e, n));
}
function Wy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Wh(e, n);
}
function Hy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Wh(e, n);
}
var Hh;
Hh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) xe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return xe = !1, Vy(e, t, n);
    xe = !!(e.flags & 131072);
  }
  else xe = !1, $ && t.flags & 1048576 && Yd(t, eo, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Fi(e, t), e = t.pendingProps;
      var i = On(t, me.current);
      _n(t, n), i = wa(null, t, r, e, i, n);
      var o = Sa();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Pe(r) ? (o = !0, Ji(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, pa(t), i.updater = Mo, t.stateNode = i, i._reactInternals = t, al(t, r, e, n), t = fl(null, t, r, !0, o, n)) : (t.tag = 0, $ && o && la(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Fi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Gy(r), e = He(r, e), i) {
          case 0:
            t = cl(null, t, r, e, n);
            break e;
          case 1:
            t = lc(null, t, r, e, n);
            break e;
          case 11:
            t = oc(null, t, r, e, n);
            break e;
          case 14:
            t = sc(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), cl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), lc(e, t, r, i, n);
    case 3:
      e: {
        if (Ah(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, eh(e, t), ro(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Bn(Error(E(423)), t), t = ac(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Bn(Error(E(424)), t), t = ac(e, t, r, n, i);
          break e;
        } else for (Ae = Dt(t.stateNode.containerInfo.firstChild), Me = t, $ = !0, Ge = null, n = Jd(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === i) {
            t = pt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return th(t), e === null && ol(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, el(r, i) ? s = null : o !== null && el(r, o) && (t.flags |= 32), Ch(e, t), ge(e, t, s, n), t.child;
    case 6:
      return e === null && ol(t), null;
    case 13:
      return Mh(e, t, n);
    case 4:
      return ma(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = jn(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), oc(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, I(to, r._currentValue), r._currentValue = s, o !== null) if (Xe(o.value, s)) {
          if (o.children === i.children && !Te.current) {
            t = pt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var l = o.dependencies;
          if (l !== null) {
            s = o.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (o.tag === 1) {
                  a = at(-1, n & -n), a.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), sl(
                  o.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(E(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), sl(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        ge(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, _n(t, n), i = Be(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = He(r, t.pendingProps), i = He(r.type, i), sc(e, t, r, i, n);
    case 15:
      return kh(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), Fi(e, t), t.tag = 1, Pe(r) ? (e = !0, Ji(t)) : e = !1, _n(t, n), xh(t, r, i), al(t, r, i, n), fl(null, t, r, !0, e, n);
    case 19:
      return Dh(e, t, n);
    case 22:
      return Eh(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Kh(e, t) {
  return vd(e, t);
}
function Ky(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function je(e, t, n, r) {
  return new Ky(e, t, n, r);
}
function Ra(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Gy(e) {
  if (typeof e == "function") return Ra(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Xl) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function _t(e, t) {
  var n = e.alternate;
  return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ji(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") Ra(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case hn:
      return en(n.children, i, o, t);
    case Yl:
      s = 8, i |= 8;
      break;
    case Ls:
      return e = je(12, n, t, i | 2), e.elementType = Ls, e.lanes = o, e;
    case _s:
      return e = je(13, n, t, i), e.elementType = _s, e.lanes = o, e;
    case Ns:
      return e = je(19, n, t, i), e.elementType = Ns, e.lanes = o, e;
    case td:
      return Vo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case bf:
          s = 10;
          break e;
        case ed:
          s = 9;
          break e;
        case Xl:
          s = 11;
          break e;
        case Zl:
          s = 14;
          break e;
        case St:
          s = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = je(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function en(e, t, n, r) {
  return e = je(7, e, r, t), e.lanes = n, e;
}
function Vo(e, t, n, r) {
  return e = je(22, e, r, t), e.elementType = td, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ps(e, t, n) {
  return e = je(6, e, null, t), e.lanes = n, e;
}
function ms(e, t, n) {
  return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Qy(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xo(0), this.expirationTimes = Xo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xo(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Va(e, t, n, r, i, o, s, l, a) {
  return e = new Qy(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = je(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, pa(o), e;
}
function Yy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Gh(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Gd(e, n, t);
  }
  return t;
}
function Qh(e, t, n, r, i, o, s, l, a) {
  return e = Va(n, r, !0, e, i, o, s, l, a), e.context = Gh(null), n = e.current, r = ye(), i = Lt(n), o = at(r, i), o.callback = t != null ? t : null, Rt(n, o, i), e.current.lanes = i, Yr(e, i, r), ke(e, r), e;
}
function Lo(e, t, n, r) {
  var i = t.current, o = ye(), s = Lt(i);
  return n = Gh(n), t.context === null ? t.context = n : t.pendingContext = n, t = at(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(i, t, s), e !== null && (Ye(e, i, s, o), Li(e, i, s)), s;
}
function fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  vc(e, t), (e = e.alternate) && vc(e, t);
}
function Xy() {
  return null;
}
var Yh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function _a(e) {
  this._internalRoot = e;
}
_o.prototype.render = _a.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Lo(e, t, null, null);
};
_o.prototype.unmount = _a.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Lo(null, e, null, null);
    }), t[dt] = null;
  }
};
function _o(e) {
  this._internalRoot = e;
}
_o.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ed();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Ad(e);
  }
};
function Na(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function No(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function wc() {
}
function Zy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = fo(s);
        o.call(u);
      };
    }
    var s = Qh(t, r, e, 0, null, !1, !1, "", wc);
    return e._reactRootContainer = s, e[dt] = s.current, Nr(e.nodeType === 8 ? e.parentNode : e), ln(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = fo(a);
      l.call(u);
    };
  }
  var a = Va(e, 0, !1, null, null, !1, !1, "", wc);
  return e._reactRootContainer = a, e[dt] = a.current, Nr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Lo(t, a, n, r);
  }), a;
}
function Fo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = fo(s);
        l.call(a);
      };
    }
    Lo(t, s, e, i);
  } else s = Zy(n, t, e, i, r);
  return fo(s);
}
Pd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 && (bl(t, n | 1), ke(t, q()), !(F & 6) && (Un = q() + 500, Bt()));
      }
      break;
    case 13:
      ln(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var i = ye();
          Ye(r, e, 1, i);
        }
      }), La(e, 1);
  }
};
ea = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ye(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
kd = function(e) {
  if (e.tag === 13) {
    var t = Lt(e), n = ht(e, t);
    if (n !== null) {
      var r = ye();
      Ye(n, e, t, r);
    }
    La(e, t);
  }
};
Ed = function() {
  return O;
};
Cd = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
Hs = function(e, t, n) {
  switch (t) {
    case "input":
      if (Is(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Eo(r);
            if (!i) throw Error(E(90));
            rd(r), Is(r, i);
          }
        }
      }
      break;
    case "textarea":
      od(e, n);
      break;
    case "select":
      t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
  }
};
dd = Aa;
hd = ln;
var qy = { usingClientEntryPoint: !1, Events: [Zr, yn, Eo, cd, fd, Aa] }, ir = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Jy = { bundleType: ir.bundleType, version: ir.version, rendererPackageName: ir.rendererPackageName, rendererConfig: ir.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = gd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ir.findFiberByHostInstance || Xy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
  var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ti.isDisabled && Ti.supportsFiber) try {
    xo = Ti.inject(Jy), be = Ti;
  } catch {
  }
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qy;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Na(t)) throw Error(E(200));
  return Yy(e, t, null, n);
};
Le.createRoot = function(e, t) {
  if (!Na(e)) throw Error(E(299));
  var n = !1, r = "", i = Yh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Va(e, 1, !1, null, null, n, !1, r, i), e[dt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new _a(t);
};
Le.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = gd(t), e = e === null ? null : e.stateNode, e;
};
Le.flushSync = function(e) {
  return ln(e);
};
Le.hydrate = function(e, t, n) {
  if (!No(t)) throw Error(E(200));
  return Fo(null, e, t, !0, n);
};
Le.hydrateRoot = function(e, t, n) {
  if (!Na(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Yh;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Qh(t, null, e, 1, n != null ? n : null, i, !1, o, s), e[dt] = t.current, Nr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new _o(t);
};
Le.render = function(e, t, n) {
  if (!No(t)) throw Error(E(200));
  return Fo(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function(e) {
  if (!No(e)) throw Error(E(40));
  return e._reactRootContainer ? (ln(function() {
    Fo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[dt] = null;
    });
  }), !0) : !1;
};
Le.unstable_batchedUpdates = Aa;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!No(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Fo(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Xh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xh);
    } catch (e) {
      console.error(e);
    }
}
Xh(), Xf.exports = Le;
var by = Xf.exports, Zh, Sc = by;
Zh = Sc.createRoot, Sc.hydrateRoot;
const qh = M.createContext({});
function Jh(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Fa = M.createContext(null), Oo = M.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function ev(e = !0) {
  const t = M.useContext(Fa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, o = M.useId();
  M.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = M.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Oa = typeof window != "undefined", bh = Oa ? M.useLayoutEffect : M.useEffect, De = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let ep = De;
const tv = {
  useManualTiming: !1
};
function nv(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    o.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (s = u, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(l), t.clear(), r = !1, i && (i = !1, a.process(u));
    }
  };
  return a;
}
const Pi = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], rv = 40;
function tp(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = Pi.reduce((p, h) => (p[h] = nv(o), p), {}), { read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d } = s, g = () => {
    const p = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, rv), 1), i.timestamp = p, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: Pi.reduce((p, h) => {
    const m = s[h];
    return p[h] = (w, S = !1, k = !1) => (n || y(), m.schedule(w, S, k)), p;
  }, {}), cancel: (p) => {
    for (let h = 0; h < Pi.length; h++)
      s[Pi[h]].cancel(p);
  }, state: i, steps: s };
}
const { schedule: j, cancel: Ot, state: re, steps: gs } = tp(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : De, !0), np = M.createContext({ strict: !1 }), xc = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, $n = {};
for (const e in xc)
  $n[e] = {
    isEnabled: (t) => xc[e].some((n) => !!t[n])
  };
function iv(e) {
  for (const t in e)
    $n[t] = {
      ...$n[t],
      ...e[t]
    };
}
const ov = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ho(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ov.has(e);
}
let rp = (e) => !ho(e);
function sv(e) {
  e && (rp = (t) => t.startsWith("on") ? !ho(t) : e(t));
}
try {
  sv(require("@emotion/is-prop-valid").default);
} catch {
}
function lv(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (rp(i) || n === !0 && ho(i) || !t && !ho(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function av(e) {
  if (typeof Proxy == "undefined")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => e(...r);
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const Io = M.createContext({});
function Wr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function jo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ia = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ja = ["initial", ...Ia];
function zo(e) {
  return jo(e.animate) || ja.some((t) => Wr(e[t]));
}
function ip(e) {
  return !!(zo(e) || e.variants);
}
function uv(e, t) {
  if (zo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Wr(n) ? n : void 0,
      animate: Wr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function cv(e) {
  const { initial: t, animate: n } = uv(e, M.useContext(Io));
  return M.useMemo(() => ({ initial: t, animate: n }), [Tc(t), Tc(n)]);
}
function Tc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const fv = Symbol.for("motionComponentSymbol");
function kn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function dv(e, t, n) {
  return M.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : kn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const za = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hv = "framerAppearId", op = "data-" + za(hv), { schedule: Ba } = tp(queueMicrotask, !1), sp = M.createContext({});
function pv(e, t, n, r, i) {
  var o, s;
  const { visualElement: l } = M.useContext(Io), a = M.useContext(np), u = M.useContext(Fa), c = M.useContext(Oo).reducedMotion, f = M.useRef(null);
  r = r || a.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: l,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, g = M.useContext(sp);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && mv(f.current, n, i, g);
  const y = M.useRef(!1);
  M.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[op], P = M.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, v)));
  return bh(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Ba.render(d.render), P.current && d.animationState && d.animationState.animateChanges());
  }), M.useEffect(() => {
    d && (!P.current && d.animationState && d.animationState.animateChanges(), P.current && (queueMicrotask(() => {
      var p;
      (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, v);
    }), P.current = !1));
  }), d;
}
function mv(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : lp(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || l && kn(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: a,
    layoutRoot: u
  });
}
function lp(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : lp(e.parent);
}
function gv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var o, s;
  e && iv(e);
  function l(u, c) {
    let f;
    const d = {
      ...M.useContext(Oo),
      ...u,
      layoutId: yv(u)
    }, { isStatic: g } = d, y = cv(u), v = r(u, g);
    if (!g && Oa) {
      vv();
      const P = wv(d);
      f = P.MeasureLayout, y.visualElement = pv(i, v, d, t, P.ProjectionNode);
    }
    return ae.jsxs(Io.Provider, { value: y, children: [f && y.visualElement ? ae.jsx(f, { visualElement: y.visualElement, ...d }) : null, n(i, u, dv(v, y.visualElement, c), v, g, y.visualElement)] });
  }
  l.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
  const a = M.forwardRef(l);
  return a[fv] = i, a;
}
function yv({ layoutId: e }) {
  const t = M.useContext(qh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function vv(e, t) {
  M.useContext(np).strict;
}
function wv(e) {
  const { drag: t, layout: n } = $n;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Sv = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ua(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Sv.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Pc(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function $a(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Pc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = Pc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const Pl = (e) => Array.isArray(e), xv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Tv = (e) => Pl(e) ? e[e.length - 1] || 0 : e, oe = (e) => !!(e && e.getVelocity);
function zi(e) {
  const t = oe(e) ? e.get() : e;
  return xv(t) ? t.toValue() : t;
}
function Pv({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, o) {
  const s = {
    latestValues: kv(r, i, o, e),
    renderState: t()
  };
  return n && (s.onMount = (l) => n({ props: r, current: l, ...s }), s.onUpdate = (l) => n(l)), s;
}
const ap = (e) => (t, n) => {
  const r = M.useContext(Io), i = M.useContext(Fa), o = () => Pv(e, t, r, i);
  return n ? o() : Jh(o);
};
function kv(e, t, n, r) {
  const i = {}, o = r(e, {});
  for (const d in o)
    i[d] = zi(o[d]);
  let { initial: s, animate: l } = e;
  const a = zo(e), u = ip(e);
  t && u && !a && e.inherit !== !1 && (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  if (f && typeof f != "boolean" && !jo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = $a(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: P, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v)
          i[h] = v[h];
      }
    }
  }
  return i;
}
const Xn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], cn = new Set(Xn), up = (e) => (t) => typeof t == "string" && t.startsWith(e), cp = /* @__PURE__ */ up("--"), Ev = /* @__PURE__ */ up("var(--"), Wa = (e) => Ev(e) ? Cv.test(e.split("/*")[0].trim()) : !1, Cv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, fp = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mt = (e, t, n) => n > t ? t : n < e ? e : n, Zn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Hr = {
  ...Zn,
  transform: (e) => mt(0, 1, e)
}, ki = {
  ...Zn,
  default: 1
}, Jr = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), wt = /* @__PURE__ */ Jr("deg"), tt = /* @__PURE__ */ Jr("%"), R = /* @__PURE__ */ Jr("px"), Av = /* @__PURE__ */ Jr("vh"), Mv = /* @__PURE__ */ Jr("vw"), kc = {
  ...tt,
  parse: (e) => tt.parse(e) / 100,
  transform: (e) => tt.transform(e * 100)
}, Dv = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Misc
  backgroundPositionX: R,
  backgroundPositionY: R
}, Rv = {
  rotate: wt,
  rotateX: wt,
  rotateY: wt,
  rotateZ: wt,
  scale: ki,
  scaleX: ki,
  scaleY: ki,
  scaleZ: ki,
  skew: wt,
  skewX: wt,
  skewY: wt,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: Hr,
  originX: kc,
  originY: kc,
  originZ: R
}, Ec = {
  ...Zn,
  transform: Math.round
}, Ha = {
  ...Dv,
  ...Rv,
  zIndex: Ec,
  size: R,
  // SVG
  fillOpacity: Hr,
  strokeOpacity: Hr,
  numOctaves: Ec
}, Vv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Lv = Xn.length;
function _v(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < Lv; o++) {
    const s = Xn[o], l = e[s];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const u = fp(l, Ha[s]);
      if (!a) {
        i = !1;
        const c = Vv[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Ka(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, l = !1;
  for (const a in t) {
    const u = t[a];
    if (cn.has(a)) {
      s = !0;
      continue;
    } else if (cp(a)) {
      i[a] = u;
      continue;
    } else {
      const c = fp(u, Ha[a]);
      a.startsWith("origin") ? (l = !0, o[a] = c) : r[a] = c;
    }
  }
  if (t.transform || (s || n ? r.transform = _v(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const Nv = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Fv = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Ov(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Nv : Fv;
  e[o.offset] = R.transform(-r);
  const s = R.transform(t), l = R.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Cc(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function Iv(e, t, n) {
  const r = Cc(t, e.x, e.width), i = Cc(n, e.y, e.height);
  return `${r} ${i}`;
}
function Ga(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: o,
  pathLength: s,
  pathSpacing: l = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (Ka(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform), y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = Iv(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && Ov(d, s, l, a, !1);
}
const Qa = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), dp = () => ({
  ...Qa(),
  attrs: {}
}), Ya = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function hp(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const pp = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function mp(e, t, n, r) {
  hp(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(pp.has(i) ? i : za(i), t.attrs[i]);
}
const po = {};
function jv(e) {
  Object.assign(po, e);
}
function gp(e, { layout: t, layoutId: n }) {
  return cn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!po[e] || e === "opacity");
}
function Xa(e, t, n) {
  var r;
  const { style: i } = e, o = {};
  for (const s in i)
    (oe(i[s]) || t.style && oe(t.style[s]) || gp(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
  return o;
}
function yp(e, t, n) {
  const r = Xa(e, t, n);
  for (const i in e)
    if (oe(e[i]) || oe(t[i])) {
      const o = Xn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function zv(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const Ac = ["x", "y", "width", "height", "cx", "cy", "r"], Bv = {
  useVisualState: ap({
    scrapeMotionValuesFromProps: yp,
    createRenderState: dp,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let o = !!e.drag;
      if (!o) {
        for (const l in i)
          if (cn.has(l)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let s = !t;
      if (t)
        for (let l = 0; l < Ac.length; l++) {
          const a = Ac[l];
          e[a] !== t[a] && (s = !0);
        }
      s && j.read(() => {
        zv(n, r), j.render(() => {
          Ga(r, i, Ya(n.tagName), e.transformTemplate), mp(n, r);
        });
      });
    }
  })
}, Uv = {
  useVisualState: ap({
    scrapeMotionValuesFromProps: Xa,
    createRenderState: Qa
  })
};
function vp(e, t, n) {
  for (const r in t)
    !oe(t[r]) && !gp(r, n) && (e[r] = t[r]);
}
function $v({ transformTemplate: e }, t) {
  return M.useMemo(() => {
    const n = Qa();
    return Ka(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Wv(e, t) {
  const n = e.style || {}, r = {};
  return vp(r, n, e), Object.assign(r, $v(e, t)), r;
}
function Hv(e, t) {
  const n = {}, r = Wv(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function Kv(e, t, n, r) {
  const i = M.useMemo(() => {
    const o = dp();
    return Ga(o, t, Ya(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    vp(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function Gv(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ua(n) ? Kv : Hv)(r, o, s, n), u = lv(r, typeof n == "string", e), c = n !== M.Fragment ? { ...u, ...a, ref: i } : {}, { children: f } = r, d = M.useMemo(() => oe(f) ? f.get() : f, [f]);
    return M.createElement(n, {
      ...c,
      children: d
    });
  };
}
function Qv(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...Ua(r) ? Bv : Uv,
      preloadedFeatures: e,
      useRender: Gv(i),
      createVisualElement: t,
      Component: r
    };
    return gv(s);
  };
}
function wp(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Bo(e, t, n) {
  const r = e.getProps();
  return $a(r, t, n !== void 0 ? n : r.custom, e);
}
function Za(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Sp = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Xn
]);
let Bi;
function Yv() {
  Bi = void 0;
}
const nt = {
  now: () => (Bi === void 0 && nt.set(re.isProcessing || tv.useManualTiming ? re.timestamp : performance.now()), Bi),
  set: (e) => {
    Bi = e, queueMicrotask(Yv);
  }
};
function qa(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ja(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return qa(this.subscriptions, t), () => Ja(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function xp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Mc = 30, Xv = (e) => !isNaN(parseFloat(e));
class Zv {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const o = nt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = nt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Xv(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ba());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), j.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Mc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Mc);
    return xp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Wn(e, t) {
  return new Zv(e, t);
}
function qv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Wn(n));
}
function Jv(e, t) {
  const n = Bo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Tv(o[s]);
    qv(e, s, l);
  }
}
function bv(e) {
  return !!(oe(e) && e.add);
}
function kl(e, t) {
  const n = e.getValue("willChange");
  if (bv(n))
    return n.add(t);
}
function Tp(e) {
  return e.props[op];
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const e0 = /* @__PURE__ */ eu(() => window.ScrollTimeline !== void 0);
class t0 {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (e0() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class n0 extends t0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const ut = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ct = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function tu(e) {
  return typeof e == "function";
}
function Dc(e, t) {
  e.timeline = t, e.onfinish = null;
}
const nu = (e) => Array.isArray(e) && typeof e[0] == "number", r0 = {
  linearEasing: void 0
};
function i0(e, t) {
  const n = /* @__PURE__ */ eu(e);
  return () => {
    var r;
    return (r = r0[t]) !== null && r !== void 0 ? r : n();
  };
}
const mo = /* @__PURE__ */ i0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Hn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Pp = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    r += e(/* @__PURE__ */ Hn(0, i - 1, o)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function kp(e) {
  return !!(typeof e == "function" && mo() || !e || typeof e == "string" && (e in El || mo()) || nu(e) || Array.isArray(e) && e.every(kp));
}
const cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, El = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cr([0.33, 1.53, 0.69, 0.99])
};
function Ep(e, t) {
  if (e)
    return typeof e == "function" && mo() ? Pp(e, t) : nu(e) ? cr(e) : Array.isArray(e) ? e.map((n) => Ep(n, t) || El.easeOut) : El[e];
}
const Cp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, o0 = 1e-7, s0 = 12;
function l0(e, t, n, r, i) {
  let o, s, l = 0;
  do
    s = t + (n - t) / 2, o = Cp(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > o0 && ++l < s0);
  return s;
}
function br(e, t, n, r) {
  if (e === t && n === r)
    return De;
  const i = (o) => l0(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Cp(i(o), t, r);
}
const Ap = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Mp = (e) => (t) => 1 - e(1 - t), Dp = /* @__PURE__ */ br(0.33, 1.53, 0.69, 0.99), ru = /* @__PURE__ */ Mp(Dp), Rp = /* @__PURE__ */ Ap(ru), Vp = (e) => (e *= 2) < 1 ? 0.5 * ru(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), iu = (e) => 1 - Math.sin(Math.acos(e)), Lp = Mp(iu), _p = Ap(iu), Np = (e) => /^0[^.\s]+$/u.test(e);
function a0(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Np(e) : !0;
}
const Tr = (e) => Math.round(e * 1e5) / 1e5, ou = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function u0(e) {
  return e == null;
}
const c0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, su = (e, t) => (n) => !!(typeof n == "string" && c0.test(n) && n.startsWith(e) || t && !u0(n) && Object.prototype.hasOwnProperty.call(n, t)), Fp = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, s, l] = r.match(ou);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, f0 = (e) => mt(0, 255, e), ys = {
  ...Zn,
  transform: (e) => Math.round(f0(e))
}, Jt = {
  test: /* @__PURE__ */ su("rgb", "red"),
  parse: /* @__PURE__ */ Fp("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ys.transform(e) + ", " + ys.transform(t) + ", " + ys.transform(n) + ", " + Tr(Hr.transform(r)) + ")"
};
function d0(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Cl = {
  test: /* @__PURE__ */ su("#"),
  parse: d0,
  transform: Jt.transform
}, En = {
  test: /* @__PURE__ */ su("hsl", "hue"),
  parse: /* @__PURE__ */ Fp("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tt.transform(Tr(t)) + ", " + tt.transform(Tr(n)) + ", " + Tr(Hr.transform(r)) + ")"
}, he = {
  test: (e) => Jt.test(e) || Cl.test(e) || En.test(e),
  parse: (e) => Jt.test(e) ? Jt.parse(e) : En.test(e) ? En.parse(e) : Cl.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : En.transform(e)
}, h0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function p0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ou)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(h0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Op = "number", Ip = "color", m0 = "var", g0 = "var(", Rc = "${}", y0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Kr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const l = t.replace(y0, (a) => (he.test(a) ? (r.color.push(o), i.push(Ip), n.push(he.parse(a))) : a.startsWith(g0) ? (r.var.push(o), i.push(m0), n.push(a)) : (r.number.push(o), i.push(Op), n.push(parseFloat(a))), ++o, Rc)).split(Rc);
  return { values: n, split: l, indexes: r, types: i };
}
function jp(e) {
  return Kr(e).values;
}
function zp(e) {
  const { split: t, types: n } = Kr(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const l = n[s];
        l === Op ? o += Tr(i[s]) : l === Ip ? o += he.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const v0 = (e) => typeof e == "number" ? 0 : e;
function w0(e) {
  const t = jp(e);
  return zp(e)(t.map(v0));
}
const It = {
  test: p0,
  parse: jp,
  createTransformer: zp,
  getAnimatableNone: w0
}, S0 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function x0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ou) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = S0.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const T0 = /\b([a-z-]*)\(.*?\)/gu, Al = {
  ...It,
  getAnimatableNone: (e) => {
    const t = e.match(T0);
    return t ? t.map(x0).join(" ") : e;
  }
}, P0 = {
  ...Ha,
  // Color props
  color: he,
  backgroundColor: he,
  outlineColor: he,
  fill: he,
  stroke: he,
  // Border props
  borderColor: he,
  borderTopColor: he,
  borderRightColor: he,
  borderBottomColor: he,
  borderLeftColor: he,
  filter: Al,
  WebkitFilter: Al
}, lu = (e) => P0[e];
function Bp(e, t) {
  let n = lu(e);
  return n !== Al && (n = It), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const k0 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function E0(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !k0.has(o) && Kr(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = Bp(n, i);
}
const Vc = (e) => e === Zn || e === R, Lc = (e, t) => parseFloat(e.split(", ")[t]), _c = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Lc(i[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? Lc(o[1], e) : 0;
  }
}, C0 = /* @__PURE__ */ new Set(["x", "y", "z"]), A0 = Xn.filter((e) => !C0.has(e));
function M0(e) {
  const t = [];
  return A0.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Kn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: _c(4, 13),
  y: _c(5, 14)
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const tn = /* @__PURE__ */ new Set();
let Ml = !1, Dl = !1;
function Up() {
  if (Dl) {
    const e = Array.from(tn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = M0(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var l;
        (l = r.getValue(o)) === null || l === void 0 || l.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Dl = !1, Ml = !1, tn.forEach((e) => e.complete()), tn.clear();
}
function $p() {
  tn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Dl = !0);
  });
}
function D0() {
  $p(), Up();
}
class au {
  constructor(t, n, r, i, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (tn.add(this), Ml || (Ml = !0, j.read($p), j.resolveKeyframes(Up))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(), l = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, tn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Wp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), R0 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function V0(e) {
  const t = R0.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n != null ? n : r}`, i];
}
function Hp(e, t, n = 1) {
  const [r, i] = V0(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Wp(s) ? parseFloat(s) : s;
  }
  return Wa(i) ? Hp(i, t, n + 1) : i;
}
const Kp = (e) => (t) => t.test(e), L0 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Gp = [Zn, R, tt, wt, Mv, Av, L0], Nc = (e) => Gp.find(Kp(e));
class Qp extends au {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && (u = u.trim(), Wa(u))) {
        const c = Hp(u, n.current);
        c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Sp.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = Nc(i), l = Nc(o);
    if (s !== l)
      if (Vc(s) && Vc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      a0(t[i]) && r.push(i);
    r.length && E0(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1, l = i[s];
    i[s] = Kn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
      n.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Fc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(It.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function _0(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function N0(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = Fc(i, t), l = Fc(o, t);
  return !s || !l ? !1 : _0(e) || (n === "spring" || tu(n)) && r;
}
const F0 = (e) => e !== null;
function Uo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(F0), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const O0 = 40;
class Yp {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = nt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > O0 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && D0(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = nt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: u } = this.options;
    if (!u && !N0(t, r, i, o))
      if (s)
        this.options.duration = 0;
      else {
        a && a(Uo(t, this.options, n)), l && l(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Rl = 2e4;
function Xp(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Rl; )
    t += n, r = e.next(t);
  return t >= Rl ? 1 / 0 : t;
}
const H = (e, t, n) => e + (t - e) * n;
function vs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function I0({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = vs(a, l, e + 1 / 3), o = vs(a, l, e), s = vs(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function go(e, t) {
  return (n) => n > 0 ? t : e;
}
const ws = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, j0 = [Cl, Jt, En], z0 = (e) => j0.find((t) => t.test(e));
function Oc(e) {
  const t = z0(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === En && (n = I0(n)), n;
}
const Ic = (e, t) => {
  const n = Oc(e), r = Oc(t);
  if (!n || !r)
    return go(e, t);
  const i = { ...n };
  return (o) => (i.red = ws(n.red, r.red, o), i.green = ws(n.green, r.green, o), i.blue = ws(n.blue, r.blue, o), i.alpha = H(n.alpha, r.alpha, o), Jt.transform(i));
}, B0 = (e, t) => (n) => t(e(n)), ei = (...e) => e.reduce(B0), Vl = /* @__PURE__ */ new Set(["none", "hidden"]);
function U0(e, t) {
  return Vl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function $0(e, t) {
  return (n) => H(e, t, n);
}
function uu(e) {
  return typeof e == "number" ? $0 : typeof e == "string" ? Wa(e) ? go : he.test(e) ? Ic : K0 : Array.isArray(e) ? Zp : typeof e == "object" ? he.test(e) ? Ic : W0 : go;
}
function Zp(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => uu(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function W0(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = uu(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function H0(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], l = e.indexes[s][i[s]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[o] = a, i[s]++;
  }
  return r;
}
const K0 = (e, t) => {
  const n = It.createTransformer(t), r = Kr(e), i = Kr(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Vl.has(e) && !i.values.length || Vl.has(t) && !r.values.length ? U0(e, t) : ei(Zp(H0(r, i), i.values), n) : go(e, t);
};
function qp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : uu(e)(e, t);
}
const G0 = 5;
function Jp(e, t, n) {
  const r = Math.max(t - G0, 0);
  return xp(n - e(r), t - r);
}
const Q = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Ss = 1e-3;
function Q0({ duration: e = Q.duration, bounce: t = Q.bounce, velocity: n = Q.velocity, mass: r = Q.mass }) {
  let i, o, s = 1 - t;
  s = mt(Q.minDamping, Q.maxDamping, s), e = mt(Q.minDuration, Q.maxDuration, /* @__PURE__ */ ct(e)), s < 1 ? (i = (u) => {
    const c = u * s, f = c * e, d = c - n, g = Ll(u, s), y = Math.exp(-f);
    return Ss - d / g * y;
  }, o = (u) => {
    const f = u * s * e, d = f * n + n, g = Math.pow(s, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), v = Ll(Math.pow(u, 2), s);
    return (-i(u) + Ss > 0 ? -1 : 1) * ((d - g) * y) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Ss + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const l = 5 / e, a = X0(i, o, l);
  if (e = /* @__PURE__ */ ut(e), isNaN(a))
    return {
      stiffness: Q.stiffness,
      damping: Q.damping,
      duration: e
    };
  {
    const u = Math.pow(a, 2) * r;
    return {
      stiffness: u,
      damping: s * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const Y0 = 12;
function X0(e, t, n) {
  let r = n;
  for (let i = 1; i < Y0; i++)
    r = r - e(r) / t(r);
  return r;
}
function Ll(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Z0 = ["duration", "bounce"], q0 = ["stiffness", "damping", "mass"];
function jc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function J0(e) {
  let t = {
    velocity: Q.velocity,
    stiffness: Q.stiffness,
    damping: Q.damping,
    mass: Q.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jc(e, q0) && jc(e, Z0))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Q.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Q0(e);
      t = {
        ...t,
        ...n,
        mass: Q.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function bp(e = Q.visualDuration, t = Q.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], l = { done: !1, value: o }, { stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = J0({
    ...n,
    velocity: -/* @__PURE__ */ ct(n.velocity || 0)
  }), y = d || 0, v = u / (2 * Math.sqrt(a * c)), P = s - o, p = /* @__PURE__ */ ct(Math.sqrt(a / c)), h = Math.abs(P) < 5;
  r || (r = h ? Q.restSpeed.granular : Q.restSpeed.default), i || (i = h ? Q.restDelta.granular : Q.restDelta.default);
  let m;
  if (v < 1) {
    const S = Ll(p, v);
    m = (k) => {
      const x = Math.exp(-v * p * k);
      return s - x * ((y + v * p * P) / S * Math.sin(S * k) + P * Math.cos(S * k));
    };
  } else if (v === 1)
    m = (S) => s - Math.exp(-p * S) * (P + (y + p * P) * S);
  else {
    const S = p * Math.sqrt(v * v - 1);
    m = (k) => {
      const x = Math.exp(-v * p * k), T = Math.min(S * k, 300);
      return s - x * ((y + v * p * P) * Math.sinh(T) + S * P * Math.cosh(T)) / S;
    };
  }
  const w = {
    calculatedDuration: g && f || null,
    next: (S) => {
      const k = m(S);
      if (g)
        l.done = S >= f;
      else {
        let x = 0;
        v < 1 && (x = S === 0 ? /* @__PURE__ */ ut(y) : Jp(m, S, k));
        const T = Math.abs(x) <= r, _ = Math.abs(s - k) <= i;
        l.done = T && _;
      }
      return l.value = l.done ? s : k, l;
    },
    toString: () => {
      const S = Math.min(Xp(w), Rl), k = Pp((x) => w.next(S * x).value, S, 30);
      return S + "ms " + k;
    }
  };
  return w;
}
function zc({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: l, max: a, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (T) => l !== void 0 && T < l || a !== void 0 && T > a, y = (T) => l === void 0 ? a : a === void 0 || Math.abs(l - T) < Math.abs(a - T) ? l : a;
  let v = n * t;
  const P = f + v, p = s === void 0 ? P : s(P);
  p !== P && (v = p - f);
  const h = (T) => -v * Math.exp(-T / r), m = (T) => p + h(T), w = (T) => {
    const _ = h(T), D = m(T);
    d.done = Math.abs(_) <= u, d.value = d.done ? p : D;
  };
  let S, k;
  const x = (T) => {
    g(d.value) && (S = T, k = bp({
      keyframes: [d.value, y(d.value)],
      velocity: Jp(m, T, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return x(0), {
    calculatedDuration: null,
    next: (T) => {
      let _ = !1;
      return !k && S === void 0 && (_ = !0, w(T), x(T)), S !== void 0 && T >= S ? k.next(T - S) : (!_ && w(T), d);
    }
  };
}
const b0 = /* @__PURE__ */ br(0.42, 0, 1, 1), e1 = /* @__PURE__ */ br(0, 0, 0.58, 1), em = /* @__PURE__ */ br(0.42, 0, 0.58, 1), t1 = (e) => Array.isArray(e) && typeof e[0] != "number", n1 = {
  linear: De,
  easeIn: b0,
  easeInOut: em,
  easeOut: e1,
  circIn: iu,
  circInOut: _p,
  circOut: Lp,
  backIn: ru,
  backInOut: Rp,
  backOut: Dp,
  anticipate: Vp
}, Bc = (e) => {
  if (nu(e)) {
    ep(e.length === 4);
    const [t, n, r, i] = e;
    return br(t, n, r, i);
  } else if (typeof e == "string")
    return n1[e];
  return e;
};
function r1(e, t, n) {
  const r = [], i = n || qp, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || De : t;
      l = ei(a, l);
    }
    r.push(l);
  }
  return r;
}
function i1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (ep(o === t.length), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = r1(t, r, i), a = l.length, u = (c) => {
    if (s && c < e[0])
      return t[0];
    let f = 0;
    if (a > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Hn(e[f], e[f + 1], c);
    return l[f](d);
  };
  return n ? (c) => u(mt(e[0], e[o - 1], c)) : u;
}
function o1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Hn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function s1(e) {
  const t = [0];
  return o1(t, e.length - 1), t;
}
function l1(e, t) {
  return e.map((n) => n * t);
}
function a1(e, t) {
  return e.map(() => t || em).splice(0, e.length - 1);
}
function yo({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = t1(r) ? r.map(Bc) : Bc(r), o = {
    done: !1,
    value: t[0]
  }, s = l1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : s1(t),
    e
  ), l = i1(s, t, {
    ease: Array.isArray(i) ? i : a1(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (o.value = l(a), o.done = a >= e, o)
  };
}
const u1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => j.update(t, !0),
    stop: () => Ot(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => re.isProcessing ? re.timestamp : nt.now()
  };
}, c1 = {
  decay: zc,
  inertia: zc,
  tween: yo,
  keyframes: yo,
  spring: bp
}, f1 = (e) => e / 100;
class $o extends Yp {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || au, l = (a, u) => this.onKeyframesResolved(a, u);
    this.resolver = new s(o, l, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, l = tu(n) ? n : c1[n] || yo;
    let a, u;
    l !== yo && typeof t[0] != "number" && (a = ei(f1, qp(t[0], t[1])), t = [0, 100]);
    const c = l({ ...this.options, keyframes: t });
    o === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), c.calculatedDuration === null && (c.calculatedDuration = Xp(c));
    const { calculatedDuration: f } = c, d = f + i, g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: g, repeatType: y, repeatDelay: v, onUpdate: P } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1), h = this.speed >= 0 ? p < 0 : p > c;
    this.currentTime = Math.max(p, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let m = this.currentTime, w = o;
    if (g) {
      const T = Math.min(this.currentTime, c) / f;
      let _ = Math.floor(T), D = T % 1;
      !D && T >= 1 && (D = 1), D === 1 && _--, _ = Math.min(_, g + 1), !!(_ % 2) && (y === "reverse" ? (D = 1 - D, v && (D -= v / f)) : y === "mirror" && (w = s)), m = mt(0, 1, D) * f;
    }
    const S = h ? { done: !1, value: a[0] } : w.next(m);
    l && (S.value = l(S.value));
    let { done: k } = S;
    !h && u !== null && (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const x = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return x && i !== void 0 && (S.value = Uo(a, this.options, i)), P && P(S.value), x && this.finish(), S;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ ct(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ct(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ ut(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ct(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = u1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r != null ? r : this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
function d1(e) {
  return new $o(e);
}
const h1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function p1(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: l = "easeInOut", times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Ep(l, i);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const m1 = /* @__PURE__ */ eu(() => Object.hasOwnProperty.call(Element.prototype, "animate")), vo = 10, g1 = 2e4;
function y1(e) {
  return tu(e.type) || e.type === "spring" || !kp(e.ease);
}
function v1(e, t) {
  const n = new $o({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < g1; )
    r = n.sample(o), i.push(r.value), o += vo;
  return {
    times: void 0,
    keyframes: i,
    duration: o - vo,
    ease: "linear"
  };
}
const tm = {
  anticipate: Vp,
  backInOut: Rp,
  circInOut: _p
};
function w1(e) {
  return e in tm;
}
class Uc extends Yp {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    this.resolver = new Qp(o, (s, l) => this.onKeyframesResolved(s, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: o, type: s, motionValue: l, name: a, startTime: u } = this.options;
    if (!l.owner || !l.owner.current)
      return !1;
    if (typeof o == "string" && mo() && w1(o) && (o = tm[o]), y1(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: y, ...v } = this.options, P = v1(t, v);
      t = P.keyframes, t.length === 1 && (t[1] = t[0]), r = P.duration, i = P.times, o = P.ease, s = "keyframes";
    }
    const c = p1(l.owner.current, a, t, { ...this.options, duration: r, times: i, ease: o });
    return c.startTime = u != null ? u : this.calcStartTime(), this.pendingTimeline ? (Dc(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      l.set(Uo(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: r,
      times: i,
      type: s,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ ct(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ ct(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ ut(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return De;
      const { animation: r } = n;
      Dc(r, t);
    }
    return De;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...g } = this.options, y = new $o({
        ...g,
        keyframes: r,
        duration: i,
        type: o,
        ease: s,
        times: l,
        isGenerator: !0
      }), v = /* @__PURE__ */ ut(this.time);
      u.setWithVelocity(y.sample(v - vo).value, y.sample(v).value, vo);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: a, transformTemplate: u } = n.owner.getProps();
    return m1() && r && h1.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !a && !u && !i && o !== "mirror" && s !== 0 && l !== "inertia";
  }
}
const S1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, x1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), T1 = {
  type: "keyframes",
  duration: 0.8
}, P1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, k1 = (e, { keyframes: t }) => t.length > 2 ? T1 : cn.has(e) ? e.startsWith("scale") ? x1(t[1]) : S1 : P1;
function E1({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const cu = (e, t, n, r = {}, i, o) => (s) => {
  const l = Za(r, e) || {}, a = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ ut(a);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: (d) => {
      t.set(d), l.onUpdate && l.onUpdate(d);
    },
    onComplete: () => {
      s(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  E1(l) || (c = {
    ...c,
    ...k1(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ ut(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ ut(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
    const d = Uo(c.keyframes, l);
    if (d !== void 0)
      return j.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new n0([]);
  }
  return !o && Uc.supports(c) ? new Uc(c) : new $o(c);
};
function C1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function nm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), g = a[f];
    if (g === void 0 || c && C1(c, f))
      continue;
    const y = {
      delay: n,
      ...Za(s || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = Tp(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, j);
        h !== null && (y.startTime = h, v = !0);
      }
    }
    kl(e, f), d.start(cu(f, d, g, e.shouldReduceMotion && Sp.has(f) ? { type: !1 } : y, e, v));
    const P = d.animation;
    P && u.push(P);
  }
  return l && Promise.all(u).then(() => {
    j.update(() => {
      l && Jv(e, l);
    });
  }), u;
}
function _l(e, t, n = {}) {
  var r;
  const i = Bo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(nm(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
    return A1(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else
    return Promise.all([s(), l(n.delay)]);
}
function A1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(M1).forEach((u, c) => {
    u.notify("AnimationStart", t), s.push(_l(u, t, {
      ...o,
      delay: n + a(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function M1(e, t) {
  return e.sortNodePosition(t);
}
function D1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => _l(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = _l(e, t, n);
  else {
    const i = typeof t == "function" ? Bo(e, t, n.custom) : t;
    r = Promise.all(nm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const R1 = ja.length;
function rm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? rm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < R1; n++) {
    const r = ja[n], i = e.props[r];
    (Wr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const V1 = [...Ia].reverse(), L1 = Ia.length;
function _1(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => D1(e, n, r)));
}
function N1(e) {
  let t = _1(e), n = $c(), r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Bo(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const { props: u } = e, c = rm(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let P = 0; P < L1; P++) {
      const p = V1[P], h = n[p], m = u[p] !== void 0 ? u[p] : c[p], w = Wr(m), S = p === a ? h.isActive : null;
      S === !1 && (y = P);
      let k = m === c[p] && m !== u[p] && w;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !m && !h.prevProp || // Or if the prop doesn't define an animation
      jo(m) || typeof m == "boolean")
        continue;
      const x = F1(h.prevProp, m);
      let T = x || // If we're making this variant active, we want to always make it active
      p === a && h.isActive && !k && w || // If we removed a higher-priority variant (i is in reverse order)
      P > y && w, _ = !1;
      const D = Array.isArray(m) ? m : [m];
      let z = D.reduce(i(p), {});
      S === !1 && (z = {});
      const { prevResolvedValues: Ee = {} } = h, rt = {
        ...Ee,
        ...z
      }, yt = (b) => {
        T = !0, d.has(b) && (_ = !0, d.delete(b)), h.needsAnimating[b] = !0;
        const C = e.getValue(b);
        C && (C.liveStyle = !1);
      };
      for (const b in rt) {
        const C = z[b], V = Ee[b];
        if (g.hasOwnProperty(b))
          continue;
        let L = !1;
        Pl(C) && Pl(V) ? L = !wp(C, V) : L = C !== V, L ? C != null ? yt(b) : d.add(b) : C !== void 0 && d.has(b) ? yt(b) : h.protectedKeys[b] = !0;
      }
      h.prevProp = m, h.prevResolvedValues = z, h.isActive && (g = { ...g, ...z }), r && e.blockInitialAnimation && (T = !1), T && (!(k && x) || _) && f.push(...D.map((b) => ({
        animation: b,
        options: { type: p }
      })));
    }
    if (d.size) {
      const P = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p), m = e.getValue(p);
        m && (m.liveStyle = !0), P[p] = h != null ? h : null;
      }), f.push({ animation: P });
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var g;
      return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u);
    }), n[a].isActive = u;
    const f = s(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = $c(), r = !0;
    }
  };
}
function F1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function $c() {
  return {
    animate: Ht(!0),
    whileInView: Ht(),
    whileHover: Ht(),
    whileTap: Ht(),
    whileDrag: Ht(),
    whileFocus: Ht(),
    exit: Ht()
  };
}
class Ut {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class O1 extends Ut {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = N1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    jo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let I1 = 0;
class j1 extends Ut {
  constructor() {
    super(...arguments), this.id = I1++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const z1 = {
  animation: {
    Feature: O1
  },
  exit: {
    Feature: j1
  }
}, We = {
  x: !1,
  y: !1
};
function im() {
  return We.x || We.y;
}
function B1(e) {
  return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0, () => {
    We[e] = !1;
  }) : We.x || We.y ? null : (We.x = We.y = !0, () => {
    We.x = We.y = !1;
  });
}
const fu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Gr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ti(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const U1 = (e) => (t) => fu(t) && e(t, ti(t));
function Pr(e, t, n, r) {
  return Gr(e, t, U1(n), r);
}
const Wc = (e, t) => Math.abs(e - t);
function $1(e, t) {
  const n = Wc(e.x, t.x), r = Wc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class om {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Ts(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = $1(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: y } = f, { timestamp: v } = re;
      this.history.push({ ...y, timestamp: v });
      const { onStart: P, onMove: p } = this.handlers;
      d || (P && P(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = xs(d, this.transformPagePoint), j.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const P = Ts(f.type === "pointercancel" ? this.lastMoveEventInfo : xs(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, P), y && y(f, P);
    }, !fu(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const s = ti(t), l = xs(s, this.transformPagePoint), { point: a } = l, { timestamp: u } = re;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ts(l, this.history)), this.removeListeners = ei(Pr(this.contextWindow, "pointermove", this.handlePointerMove), Pr(this.contextWindow, "pointerup", this.handlePointerUp), Pr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ot(this.updatePoint);
  }
}
function xs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Hc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ts({ point: e }, t) {
  return {
    point: e,
    delta: Hc(e, sm(t)),
    offset: Hc(e, W1(t)),
    velocity: H1(t, 0.1)
  };
}
function W1(e) {
  return e[0];
}
function sm(e) {
  return e[e.length - 1];
}
function H1(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = sm(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ ut(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ ct(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const lm = 1e-4, K1 = 1 - lm, G1 = 1 + lm, am = 0.01, Q1 = 0 - am, Y1 = 0 + am;
function Ve(e) {
  return e.max - e.min;
}
function X1(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Kc(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = Ve(n) / Ve(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= K1 && e.scale <= G1 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Q1 && e.translate <= Y1 || isNaN(e.translate)) && (e.translate = 0);
}
function kr(e, t, n, r) {
  Kc(e.x, t.x, n.x, r ? r.originX : void 0), Kc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Gc(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ve(t);
}
function Z1(e, t, n) {
  Gc(e.x, t.x, n.x), Gc(e.y, t.y, n.y);
}
function Qc(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ve(t);
}
function Er(e, t, n) {
  Qc(e.x, t.x, n.x), Qc(e.y, t.y, n.y);
}
function q1(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e;
}
function Yc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function J1(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Yc(e.x, n, i),
    y: Yc(e.y, t, r)
  };
}
function Xc(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function b1(e, t) {
  return {
    x: Xc(e.x, t.x),
    y: Xc(e.y, t.y)
  };
}
function ew(e, t) {
  let n = 0.5;
  const r = Ve(e), i = Ve(t);
  return i > r ? n = /* @__PURE__ */ Hn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Hn(e.min, e.max - i, t.min)), mt(0, 1, n);
}
function tw(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Nl = 0.35;
function nw(e = Nl) {
  return e === !1 ? e = 0 : e === !0 && (e = Nl), {
    x: Zc(e, "left", "right"),
    y: Zc(e, "top", "bottom")
  };
}
function Zc(e, t, n) {
  return {
    min: qc(e, t),
    max: qc(e, n)
  };
}
function qc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Jc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Cn = () => ({
  x: Jc(),
  y: Jc()
}), bc = () => ({ min: 0, max: 0 }), Z = () => ({
  x: bc(),
  y: bc()
});
function Fe(e) {
  return [e("x"), e("y")];
}
function um({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function rw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function iw(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ps(e) {
  return e === void 0 || e === 1;
}
function Fl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ps(e) || !Ps(t) || !Ps(n);
}
function Qt(e) {
  return Fl(e) || cm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function cm(e) {
  return ef(e.x) || ef(e.y);
}
function ef(e) {
  return e && e !== "0%";
}
function wo(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function tf(e, t, n, r, i) {
  return i !== void 0 && (e = wo(e, i, r)), wo(e, n, r) + t;
}
function Ol(e, t = 0, n = 1, r, i) {
  e.min = tf(e.min, t, n, r, i), e.max = tf(e.max, t, n, r, i);
}
function fm(e, { x: t, y: n }) {
  Ol(e.x, t.translate, t.scale, t.originPoint), Ol(e.y, n.translate, n.scale, n.originPoint);
}
const nf = 0.999999999999, rf = 1.0000000000001;
function ow(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    o = n[l], s = o.projectionDelta;
    const { visualElement: a } = o.options;
    a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Mn(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, fm(e, s)), r && Qt(o.latestValues) && Mn(e, o.latestValues));
  }
  t.x < rf && t.x > nf && (t.x = 1), t.y < rf && t.y > nf && (t.y = 1);
}
function An(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function of(e, t, n, r, i = 0.5) {
  const o = H(e.min, e.max, i);
  Ol(e, t, n, o, r);
}
function Mn(e, t) {
  of(e.x, t.x, t.scaleX, t.scale, t.originX), of(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dm(e, t) {
  return um(iw(e.getBoundingClientRect(), t));
}
function sw(e, t, n) {
  const r = dm(e, n), { scroll: i } = t;
  return i && (An(r.x, i.offset.x), An(r.y, i.offset.y)), r;
}
const hm = ({ current: e }) => e ? e.ownerDocument.defaultView : null, lw = /* @__PURE__ */ new WeakMap();
class aw {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ti(c).point);
    }, o = (c, f) => {
      const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = B1(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe((P) => {
        let p = this.getAxisMotionValue(P).get() || 0;
        if (tt.test(p)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const m = h.layout.layoutBox[P];
            m && (p = Ve(m) * (parseFloat(p) / 100));
          }
        }
        this.originPoint[P] = p;
      }), y && j.postRender(() => y(c, f)), kl(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, s = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: P } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = uw(P), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, P), this.updateAxis("y", f.point, P), this.visualElement.render(), v && v(c, f);
    }, l = (c, f) => this.stop(c, f), a = () => Fe((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new om(t, {
      onSessionStart: i,
      onStart: o,
      onMove: s,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: hm(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && j.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ei(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = q1(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && kn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = J1(i.layoutBox, n) : this.constraints = !1, this.elastic = nw(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Fe((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = tw(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !kn(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = sw(r, i.root, this.visualElement.getTransformPagePoint());
    let s = b1(i.layout.layoutBox, o);
    if (n) {
      const l = n(rw(s));
      this.hasMutatedConstraints = !!l, l && (s = um(l));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, u = Fe((c) => {
      if (!Ei(c, n, this.currentDirection))
        return;
      let f = a && a[c] || {};
      s && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, g = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return kl(this.visualElement, t), r.start(cu(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!Ei(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - H(s, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!kn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Fe((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = ew({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe((s) => {
      if (!Ei(s, t, null))
        return;
      const l = this.getAxisMotionValue(s), { min: a, max: u } = this.constraints[s];
      l.set(H(a, u, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    lw.set(this.visualElement, this);
    const t = this.visualElement.current, n = Pr(t, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      kn(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), j.read(r);
    const s = Gr(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
      this.isDragging && u && (Fe((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Nl, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l
    };
  }
}
function Ei(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function uw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class cw extends Ut {
  constructor(t) {
    super(t), this.removeGroupControls = De, this.removeListeners = De, this.controls = new aw(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || De;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const sf = (e) => (t, n) => {
  e && j.postRender(() => e(t, n));
};
class fw extends Ut {
  constructor() {
    super(...arguments), this.removePointerDownListener = De;
  }
  onPointerDown(t) {
    this.session = new om(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: hm(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: sf(t),
      onStart: sf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && j.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Pr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ui = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function lf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const or = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = lf(e, t.target.x), r = lf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, dw = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = It.parse(e);
    if (i.length > 5)
      return r;
    const o = It.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + s] /= l, i[1 + s] /= a;
    const u = H(l, a, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
  }
};
class hw extends M.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    jv(pw), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Ui.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
    return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || j.postRender(() => {
      const l = s.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ba.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function pm(e) {
  const [t, n] = ev(), r = M.useContext(qh);
  return ae.jsx(hw, { ...e, layoutGroup: r, switchLayoutGroup: M.useContext(sp), isPresent: t, safeToRemove: n });
}
const pw = {
  borderRadius: {
    ...or,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: or,
  borderTopRightRadius: or,
  borderBottomLeftRadius: or,
  borderBottomRightRadius: or,
  boxShadow: dw
};
function mw(e, t, n) {
  const r = oe(e) ? e : Wn(e);
  return r.start(cu("", r, t, n)), r.animation;
}
function gw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const yw = (e, t) => e.depth - t.depth;
class vw {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    qa(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ja(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(yw), this.isDirty = !1, this.children.forEach(t);
  }
}
function ww(e, t) {
  const n = nt.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (Ot(r), e(o - t));
  };
  return j.read(r, !0), () => Ot(r);
}
const mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Sw = mm.length, af = (e) => typeof e == "string" ? parseFloat(e) : e, uf = (e) => typeof e == "number" || R.test(e);
function xw(e, t, n, r, i, o) {
  i ? (e.opacity = H(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Tw(r)
  ), e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, Pw(r))) : o && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < Sw; s++) {
    const l = `border${mm[s]}Radius`;
    let a = cf(t, l), u = cf(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || uf(a) === uf(u) ? (e[l] = Math.max(H(af(a), af(u), r), 0), (tt.test(u) || tt.test(a)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function cf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Tw = /* @__PURE__ */ gm(0, 0.5, Lp), Pw = /* @__PURE__ */ gm(0.5, 0.95, De);
function gm(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Hn(e, t, r));
}
function ff(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ne(e, t) {
  ff(e.x, t.x), ff(e.y, t.y);
}
function df(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function hf(e, t, n, r, i) {
  return e -= t, e = wo(e, 1 / n, r), i !== void 0 && (e = wo(e, 1 / i, r)), e;
}
function kw(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (tt.test(t) && (t = parseFloat(t), t = H(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let l = H(o.min, o.max, r);
  e === o && (l -= t), e.min = hf(e.min, t, n, l, i), e.max = hf(e.max, t, n, l, i);
}
function pf(e, t, [n, r, i], o, s) {
  kw(e, t[n], t[r], t[i], t.scale, o, s);
}
const Ew = ["x", "scaleX", "originX"], Cw = ["y", "scaleY", "originY"];
function mf(e, t, n, r) {
  pf(e.x, t, Ew, n ? n.x : void 0, r ? r.x : void 0), pf(e.y, t, Cw, n ? n.y : void 0, r ? r.y : void 0);
}
function gf(e) {
  return e.translate === 0 && e.scale === 1;
}
function ym(e) {
  return gf(e.x) && gf(e.y);
}
function yf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Aw(e, t) {
  return yf(e.x, t.x) && yf(e.y, t.y);
}
function vf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function vm(e, t) {
  return vf(e.x, t.x) && vf(e.y, t.y);
}
function wf(e) {
  return Ve(e.x) / Ve(e.y);
}
function Sf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Mw {
  constructor() {
    this.members = [];
  }
  add(t) {
    qa(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ja(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Dw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Yt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, fr = typeof window != "undefined" && window.MotionDebug !== void 0, ks = ["", "X", "Y", "Z"], Rw = { visibility: "hidden" }, xf = 1e3;
let Vw = 0;
function Es(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function wm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Tp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", j, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && wm(r);
}
function Sm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      this.id = Vw++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, fr && (Yt.totalNodes = Yt.resolvedTargetDeltas = Yt.recalculatedProjection = 0), this.nodes.forEach(Nw), this.nodes.forEach(zw), this.nodes.forEach(Bw), this.nodes.forEach(Fw), fr && window.MotionDebug.record(Yt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new vw());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new ba()), this.eventHandlers.get(s).add(l);
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = gw(s), this.instance = s;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = ww(d, 250), Ui.hasAnimatedSinceResize && (Ui.hasAnimatedSinceResize = !1, this.nodes.forEach(Pf));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || Kw, { onLayoutAnimationStart: P, onLayoutAnimationComplete: p } = c.getProps(), h = !this.targetLayout || !vm(this.targetLayout, y) || g, m = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
          const w = {
            ...Za(v, "layout"),
            onPlay: P,
            onComplete: p
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w);
        } else
          d || Pf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Ot(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Uw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && wm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Tf);
        return;
      }
      this.isUpdating || this.nodes.forEach(Iw), this.isUpdating = !1, this.nodes.forEach(jw), this.nodes.forEach(Lw), this.nodes.forEach(_w), this.clearAllSnapshots();
      const l = nt.now();
      re.delta = mt(0, 1e3 / 60, l - re.timestamp), re.timestamp = l, re.isProcessing = !0, gs.update.process(re), gs.preRender.process(re), gs.render.process(re), re.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ba.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Ow), this.sharedNodes.forEach($w);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, j.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      j.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !ym(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      s && (l || Qt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return s && (a = this.removeTransform(a)), Gw(a), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l)
        return Z();
      const a = l.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(Qw))) {
        const { scroll: c } = this.root;
        c && (An(a.x, c.offset.x), An(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Z();
      if (Ne(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && Ne(a, s), An(a.x, f.offset.x), An(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = Z();
      Ne(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && Mn(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Qt(c.latestValues) && Mn(a, c.latestValues);
      }
      return Qt(this.latestValues) && Mn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = Z();
      Ne(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Qt(u.latestValues))
          continue;
        Fl(u.latestValues) && u.updateSnapshot();
        const c = Z(), f = u.measurePageBox();
        Ne(c, f), mf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && mf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== re.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = re.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), Er(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Z1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ne(this.target, this.layout.layoutBox), fm(this.target, this.targetDelta)) : Ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), Er(this.relativeTargetOrigin, this.target, g.target), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          fr && Yt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fl(this.parent.latestValues) || cm(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const l = this.getLead(), a = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === re.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      Ne(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      ow(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Z());
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (df(this.prevProjectionDelta.x, this.projectionDelta.x), df(this.prevProjectionDelta.y, this.projectionDelta.y)), kr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !Sf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Sf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), fr && Yt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), s) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Cn(), this.projectionDelta = Cn(), this.projectionDeltaWithTransform = Cn();
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, f = Cn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Z(), g = a ? a.source : void 0, y = this.layout ? this.layout.source : void 0, v = g !== y, P = this.getStack(), p = !P || P.members.length <= 1, h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(Hw));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        kf(f.x, s.x, S), kf(f.y, s.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Er(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ww(this.relativeTarget, this.relativeTargetOrigin, d, S), m && Aw(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = Z()), Ne(m, this.relativeTarget)), v && (this.animationValues = c, xw(c, u, this.latestValues, S, h, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Ot(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = j.update(() => {
        Ui.hasAnimatedSinceResize = !0, this.currentAnimation = mw(0, xf, {
          ...s,
          onUpdate: (l) => {
            this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s;
      if (!(!l || !a || !u)) {
        if (this !== s && this.layout && u && xm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || Z();
          const f = Ve(this.layout.layoutBox.x);
          a.x.min = s.target.x.min, a.x.max = a.x.min + f;
          const d = Ve(this.layout.layoutBox.y);
          a.y.min = s.target.y.min, a.y.max = a.y.min + d;
        }
        Ne(l, a), Mn(l, c), kr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Mw()), this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let l = !1;
      const { latestValues: a } = s;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l)
        return;
      const u = {};
      a.z && Es("z", s, u, this.animationValues);
      for (let c = 0; c < ks.length; c++)
        Es(`rotate${ks[c]}`, s, u, this.animationValues), Es(`skew${ks[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Rw;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = Dw(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in po) {
        if (d[v] === void 0)
          continue;
        const { correct: P, applyTo: p } = po[v], h = u.transform === "none" ? d[v] : P(d[v], f);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++)
            u[p[w]] = h;
        } else
          u[v] = h;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? zi(s == null ? void 0 : s.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(Tf), this.root.sharedNodes.clear();
    }
  };
}
function Lw(e) {
  e.updateLayout();
}
function _w(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
    o === "size" ? Fe((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = Ve(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : xm(o, n.layoutBox, r) && Fe((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = Ve(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const l = Cn();
    kr(l, r, n.layoutBox);
    const a = Cn();
    s ? kr(a, e.applyTransform(i, !0), n.measuredBox) : kr(a, r, n.layoutBox);
    const u = !ym(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = Z();
          Er(y, n.layoutBox, d.layoutBox);
          const v = Z();
          Er(v, r, g.layoutBox), vm(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Nw(e) {
  fr && Yt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Fw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ow(e) {
  e.clearSnapshot();
}
function Tf(e) {
  e.clearMeasurements();
}
function Iw(e) {
  e.isLayoutDirty = !1;
}
function jw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Pf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function zw(e) {
  e.resolveTargetDelta();
}
function Bw(e) {
  e.calcProjection();
}
function Uw(e) {
  e.resetSkewAndRotation();
}
function $w(e) {
  e.removeLeadSnapshot();
}
function kf(e, t, n) {
  e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ef(e, t, n, r) {
  e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r);
}
function Ww(e, t, n, r) {
  Ef(e.x, t.x, n.x, r), Ef(e.y, t.y, n.y, r);
}
function Hw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Kw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cf = (e) => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Af = Cf("applewebkit/") && !Cf("chrome/") ? Math.round : De;
function Mf(e) {
  e.min = Af(e.min), e.max = Af(e.max);
}
function Gw(e) {
  Mf(e.x), Mf(e.y);
}
function xm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !X1(wf(t), wf(n), 0.2);
}
function Qw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Yw = Sm({
  attachResizeListener: (e, t) => Gr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Cs = {
  current: void 0
}, Tm = Sm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Cs.current) {
      const e = new Yw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Cs.current = e;
    }
    return Cs.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Xw = {
  pan: {
    Feature: fw
  },
  drag: {
    Feature: cw,
    ProjectionNode: Tm,
    MeasureLayout: pm
  }
};
function Zw(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Pm(e, t) {
  const n = Zw(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Df(e) {
  return (t) => {
    t.pointerType === "touch" || im() || e(t);
  };
}
function qw(e, t, n = {}) {
  const [r, i, o] = Pm(e, n), s = Df((l) => {
    const { target: a } = l, u = t(l);
    if (typeof u != "function" || !a)
      return;
    const c = Df((f) => {
      u(f), a.removeEventListener("pointerleave", c);
    });
    a.addEventListener("pointerleave", c, i);
  });
  return r.forEach((l) => {
    l.addEventListener("pointerenter", s, i);
  }), o;
}
function Rf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && j.postRender(() => o(t, ti(t)));
}
class Jw extends Ut {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = qw(t, (n) => (Rf(this.node, n, "Start"), (r) => Rf(this.node, r, "End"))));
  }
  unmount() {
  }
}
class bw extends Ut {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ei(Gr(this.node.current, "focus", () => this.onFocus()), Gr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const km = (e, t) => t ? e === t ? !0 : km(e, t.parentElement) : !1, eS = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function tS(e) {
  return eS.has(e.tagName) || e.tabIndex !== -1;
}
const dr = /* @__PURE__ */ new WeakSet();
function Vf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function As(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const nS = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Vf(() => {
    if (dr.has(n))
      return;
    As(n, "down");
    const i = Vf(() => {
      As(n, "up");
    }), o = () => As(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Lf(e) {
  return fu(e) && !im();
}
function rS(e, t, n = {}) {
  const [r, i, o] = Pm(e, n), s = (l) => {
    const a = l.currentTarget;
    if (!Lf(l) || dr.has(a))
      return;
    dr.add(a);
    const u = t(l), c = (g, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!Lf(g) || !dr.has(a)) && (dr.delete(a), typeof u == "function" && u(g, { success: y }));
    }, f = (g) => {
      c(g, n.useGlobalTarget || km(a, g.target));
    }, d = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((l) => {
    !tS(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0), (n.useGlobalTarget ? window : l).addEventListener("pointerdown", s, i), l.addEventListener("focus", (u) => nS(u, i), i);
  }), o;
}
function _f(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && j.postRender(() => o(t, ti(t)));
}
class iS extends Ut {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = rS(t, (n) => (_f(this.node, n, "Start"), (r, { success: i }) => _f(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Il = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), oS = (e) => {
  const t = Il.get(e.target);
  t && t(e);
}, sS = (e) => {
  e.forEach(oS);
};
function lS({ root: e, ...t }) {
  const n = e || document;
  Ms.has(n) || Ms.set(n, {});
  const r = Ms.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(sS, { root: e, ...t })), r[i];
}
function aS(e, t, n) {
  const r = lS(t);
  return Il.set(e, n), r.observe(e), () => {
    Il.delete(e), r.unobserve(e);
  };
}
const uS = {
  some: 0,
  all: 1
};
class cS extends Ut {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : uS[i]
    }, l = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(a);
    };
    return aS(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(fS(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function fS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const dS = {
  inView: {
    Feature: cS
  },
  tap: {
    Feature: iS
  },
  focus: {
    Feature: bw
  },
  hover: {
    Feature: Jw
  }
}, hS = {
  layout: {
    ProjectionNode: Tm,
    MeasureLayout: pm
  }
}, jl = { current: null }, Em = { current: !1 };
function pS() {
  if (Em.current = !0, !!Oa)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => jl.current = e.matches;
      e.addListener(t), t();
    } else
      jl.current = !1;
}
const mS = [...Gp, he, It], gS = (e) => mS.find(Kp(e)), Nf = /* @__PURE__ */ new WeakMap();
function yS(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (oe(i))
      e.addValue(r, i);
    else if (oe(o))
      e.addValue(r, Wn(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Wn(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ff = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class vS {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = au, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = nt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, j.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: u, onUpdate: c } = s;
    this.onUpdate = c, this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = zo(n), this.isVariantNode = ip(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const y = d[g];
      a[g] !== void 0 && oe(y) && y.set(a[g], !1);
    }
  }
  mount(t) {
    this.current = t, Nf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Em.current || pS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : jl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Nf.delete(this.current), this.projection && this.projection.unmount(), Ot(this.notifyUpdate), Ot(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = cn.has(t), i = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && j.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in $n) {
      const n = $n[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Ff.length; r++) {
      const i = Ff[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = yS(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Wn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Wp(i) || Np(i)) ? i = parseFloat(i) : !gS(i) && It.test(n) && (i = Bp(t, n)), this.setBaseTarget(t, oe(i) ? i.get() : i)), oe(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = $a(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !oe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ba()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Cm extends vS {
  constructor() {
    super(...arguments), this.KeyframeResolver = Qp;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    oe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function wS(e) {
  return window.getComputedStyle(e);
}
class SS extends Cm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = hp;
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = lu(n);
      return r && r.default || 0;
    } else {
      const r = wS(t), i = (cp(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return dm(t, n);
  }
  build(t, n, r) {
    Ka(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Xa(t, n, r);
  }
}
class xS extends Cm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = lu(n);
      return r && r.default || 0;
    }
    return n = pp.has(n) ? n : za(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return yp(t, n, r);
  }
  build(t, n, r) {
    Ga(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    mp(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Ya(t.tagName), super.mount(t);
  }
}
const TS = (e, t) => Ua(e) ? new xS(t) : new SS(t, {
  allowProjection: e !== M.Fragment
}), PS = /* @__PURE__ */ Qv({
  ...z1,
  ...dS,
  ...Xw,
  ...hS
}, TS), Am = /* @__PURE__ */ av(PS);
function zl(e) {
  const t = Jh(() => Wn(e)), { isStatic: n } = M.useContext(Oo);
  if (n) {
    const [, r] = M.useState(e);
    M.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Of(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function If(e, t = {}) {
  const { isStatic: n } = M.useContext(Oo), r = M.useRef(null), i = zl(oe(e) ? Of(e.get()) : e), o = M.useRef(i.get()), s = M.useRef(() => {
  }), l = () => {
    const u = r.current;
    u && u.time === 0 && u.sample(re.delta), a(), r.current = d1({
      keyframes: [i.get(), o.current],
      velocity: i.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...t,
      onUpdate: s.current
    });
  }, a = () => {
    r.current && r.current.stop();
  };
  return M.useInsertionEffect(() => i.attach((u, c) => n ? c(u) : (o.current = u, s.current = c, j.update(l), i.get()), a), [JSON.stringify(t)]), bh(() => {
    if (oe(e))
      return e.on("change", (u) => i.set(Of(u)));
  }, [i]), i;
}
function Bl(...e) {
  const t = [], n = (r) => {
    if (r) {
      if (typeof r == "string" || typeof r == "number") t.push(String(r));
      else if (Array.isArray(r)) r.forEach(n);
      else if (typeof r == "object")
        for (const i in r) r[i] && t.push(i);
    }
  };
  return e.forEach(n), t.join(" ");
}
function kS(e, t) {
  const n = [];
  for (let r = 0; r < e; r++) {
    const i = Math.floor(Math.random() * 4e3) - 2e3, o = Math.floor(Math.random() * 4e3) - 2e3;
    n.push(`${i}px ${o}px ${t}`);
  }
  return n.join(", ");
}
function Ds({
  count: e = 1e3,
  size: t = 1,
  transition: n = { repeat: 1 / 0, duration: 50, ease: "linear" },
  starColor: r = "#fff",
  className: i,
  ...o
}) {
  const [s, l] = M.useState("");
  return M.useEffect(() => {
    l(kS(e, r));
  }, [e, r]), /* @__PURE__ */ ae.jsxs(
    Am.div,
    {
      "data-slot": "star-layer",
      animate: { y: [0, -2e3] },
      transition: n,
      className: Bl("absolute top-0 left-0 w-full h-[2000px]", i),
      ...o,
      children: [
        /* @__PURE__ */ ae.jsx(
          "div",
          {
            className: "absolute bg-transparent rounded-full",
            style: {
              width: `${t}px`,
              height: `${t}px`,
              boxShadow: s
            }
          }
        ),
        /* @__PURE__ */ ae.jsx(
          "div",
          {
            className: "absolute bg-transparent rounded-full top-[2000px]",
            style: {
              width: `${t}px`,
              height: `${t}px`,
              boxShadow: s
            }
          }
        )
      ]
    }
  );
}
function ES({
  children: e,
  className: t,
  factor: n = 0.05,
  speed: r = 50,
  transition: i = { stiffness: 50, damping: 20 },
  starColor: o = "#fff",
  pointerEvents: s = !0,
  ...l
}) {
  const a = zl(1), u = zl(1), c = If(a, i), f = If(u, i), d = M.useCallback(
    (g) => {
      const y = window.innerWidth / 2, v = window.innerHeight / 2, P = -(g.clientX - y) * n, p = -(g.clientY - v) * n;
      a.set(P), u.set(p);
    },
    [a, u, n]
  );
  return /* @__PURE__ */ ae.jsxs(
    "div",
    {
      "data-slot": "stars-background",
      className: Bl(
        "relative size-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]",
        t
      ),
      onMouseMove: d,
      ...l,
      children: [
        /* @__PURE__ */ ae.jsxs(
          Am.div,
          {
            style: { x: c, y: f },
            className: Bl({ "pointer-events-none": !s }),
            children: [
              /* @__PURE__ */ ae.jsx(
                Ds,
                {
                  count: 480,
                  size: 1,
                  transition: { repeat: 1 / 0, duration: r, ease: "linear" },
                  starColor: o
                }
              ),
              /* @__PURE__ */ ae.jsx(
                Ds,
                {
                  count: 210,
                  size: 2,
                  transition: {
                    repeat: 1 / 0,
                    duration: r * 2,
                    ease: "linear"
                  },
                  starColor: o
                }
              ),
              /* @__PURE__ */ ae.jsx(
                Ds,
                {
                  count: 110,
                  size: 3,
                  transition: {
                    repeat: 1 / 0,
                    duration: r * 3,
                    ease: "linear"
                  },
                  starColor: o
                }
              )
            ]
          }
        ),
        e
      ]
    }
  );
}
const Ci = "228, 184, 74";
function CS() {
  const e = M.useRef(null);
  return M.useEffect(() => {
    const t = e.current;
    if (!t) return;
    const n = t.getContext("2d", { alpha: !0 });
    if (!n) return;
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let i = 0, o = 0, s = 1, l = [];
    const a = { x: -9999, y: -9999, active: !1 }, u = 132, c = 200;
    function f() {
      const k = Math.round(i * o / 15e3), x = Math.max(24, Math.min(r ? 60 : 96, k));
      l = new Array(x).fill(0).map(() => ({
        x: Math.random() * i,
        y: Math.random() * o,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6
      }));
    }
    function d() {
      s = Math.min(window.devicePixelRatio || 1, 2), i = window.innerWidth, o = window.innerHeight, t.width = Math.floor(i * s), t.height = Math.floor(o * s), t.style.width = i + "px", t.style.height = o + "px", n.setTransform(s, 0, 0, s, 0, 0), f();
    }
    function g() {
      n.clearRect(0, 0, i, o);
      for (let k = 0; k < l.length; k++) {
        const x = l[k];
        r || (x.x += x.vx, x.y += x.vy, x.x < -20 ? x.x = i + 20 : x.x > i + 20 && (x.x = -20), x.y < -20 ? x.y = o + 20 : x.y > o + 20 && (x.y = -20));
        let T = 0;
        if (a.active) {
          const D = x.x - a.x, z = x.y - a.y, Ee = Math.hypot(D, z);
          Ee < c && (T = 1 - Ee / c, n.strokeStyle = `rgba(${Ci}, ${(T * 0.55).toFixed(3)})`, n.lineWidth = 1, n.beginPath(), n.moveTo(x.x, x.y), n.lineTo(a.x, a.y), n.stroke());
        }
        for (let D = k + 1; D < l.length; D++) {
          const z = l[D], Ee = x.x - z.x, rt = x.y - z.y, yt = Math.hypot(Ee, rt);
          if (yt < u) {
            const ni = (1 - yt / u) * 0.28;
            n.strokeStyle = `rgba(${Ci}, ${ni.toFixed(3)})`, n.lineWidth = 1, n.beginPath(), n.moveTo(x.x, x.y), n.lineTo(z.x, z.y), n.stroke();
          }
        }
        const _ = x.r + T * 1.6;
        n.beginPath(), n.arc(x.x, x.y, _, 0, Math.PI * 2), n.fillStyle = `rgba(${Ci}, ${(0.45 + T * 0.5).toFixed(3)})`, n.fill(), T > 0.25 && (n.beginPath(), n.arc(x.x, x.y, _ + 3, 0, Math.PI * 2), n.fillStyle = `rgba(${Ci}, ${(T * 0.12).toFixed(3)})`, n.fill());
      }
    }
    let y = 0, v = !0;
    function P() {
      v && (g(), y = requestAnimationFrame(P));
    }
    function p(k) {
      a.x = k.clientX, a.y = k.clientY, a.active = !0;
    }
    function h() {
      a.active = !1, a.x = -9999, a.y = -9999;
    }
    function m() {
      document.hidden ? (v = !1, cancelAnimationFrame(y)) : r || (v = !0, P());
    }
    let w = 0;
    function S() {
      clearTimeout(w), w = window.setTimeout(() => {
        d(), r && g();
      }, 150);
    }
    return d(), window.addEventListener("resize", S), window.addEventListener("pointermove", p, { passive: !0 }), window.addEventListener("pointerdown", p, { passive: !0 }), document.addEventListener("mouseleave", h), document.addEventListener("visibilitychange", m), r ? g() : P(), () => {
      v = !1, cancelAnimationFrame(y), clearTimeout(w), window.removeEventListener("resize", S), window.removeEventListener("pointermove", p), window.removeEventListener("pointerdown", p), document.removeEventListener("mouseleave", h), document.removeEventListener("visibilitychange", m);
    };
  }, []), /* @__PURE__ */ ae.jsx(
    "canvas",
    {
      ref: e,
      "aria-hidden": "true",
      style: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }
    }
  );
}
function AS() {
  return /* @__PURE__ */ ae.jsxs(ae.Fragment, { children: [
    /* @__PURE__ */ ae.jsx(
      ES,
      {
        starColor: "rgba(228, 184, 74, 0.55)",
        factor: 0.03,
        speed: 110,
        pointerEvents: !1,
        style: { position: "absolute", inset: 0, background: "transparent" }
      }
    ),
    /* @__PURE__ */ ae.jsx(CS, {})
  ] });
}
const Rs = document.getElementById("bg-root");
Rs && (Zh(Rs).render(/* @__PURE__ */ ae.jsx(AS, {})), requestAnimationFrame(() => {
  requestAnimationFrame(() => Rs.classList.add("bg-ready"));
}));
