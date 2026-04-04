function $b(f, n) {
  for (var r = 0; r < n.length; r++) {
    const i = n[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const u in i)
        if (u !== "default" && !(u in f)) {
          const o = Object.getOwnPropertyDescriptor(i, u);
          o &&
            Object.defineProperty(
              f,
              u,
              o.get ? o : { enumerable: !0, get: () => i[u] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) i(u);
  new MutationObserver((u) => {
    for (const o of u)
      if (o.type === "childList")
        for (const d of o.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(u) {
    const o = {};
    return (
      u.integrity && (o.integrity = u.integrity),
      u.referrerPolicy && (o.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(u) {
    if (u.ep) return;
    u.ep = !0;
    const o = r(u);
    fetch(u.href, o);
  }
})();
function Pb(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
var Xd = { exports: {} },
  Pu = {};
var Pg;
function Ib() {
  if (Pg) return Pu;
  Pg = 1;
  var f = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function r(i, u, o) {
    var d = null;
    if (
      (o !== void 0 && (d = "" + o),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      o = {};
      for (var h in u) h !== "key" && (o[h] = u[h]);
    } else o = u;
    return (
      (u = o.ref),
      { $$typeof: f, type: i, key: d, ref: u !== void 0 ? u : null, props: o }
    );
  }
  return ((Pu.Fragment = n), (Pu.jsx = r), (Pu.jsxs = r), Pu);
}
var Ig;
function ex() {
  return (Ig || ((Ig = 1), (Xd.exports = Ib())), Xd.exports);
}
var y = ex(),
  Vd = { exports: {} },
  Ee = {};
var e1;
function tx() {
  if (e1) return Ee;
  e1 = 1;
  var f = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (T && E[T]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    M = {};
  function q(E, L, P) {
    ((this.props = E),
      (this.context = L),
      (this.refs = M),
      (this.updater = P || z));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (E, L) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, L, "setState");
    }),
    (q.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function V() {}
  V.prototype = q.prototype;
  function K(E, L, P) {
    ((this.props = E),
      (this.context = L),
      (this.refs = M),
      (this.updater = P || z));
  }
  var U = (K.prototype = new V());
  ((U.constructor = K), S(U, q.prototype), (U.isPureReactComponent = !0));
  var Q = Array.isArray;
  function W() {}
  var D = { H: null, A: null, T: null, S: null },
    B = Object.prototype.hasOwnProperty;
  function J(E, L, P) {
    var ee = P.ref;
    return {
      $$typeof: f,
      type: E,
      key: L,
      ref: ee !== void 0 ? ee : null,
      props: P,
    };
  }
  function I(E, L) {
    return J(E.type, L, E.props);
  }
  function de(E) {
    return typeof E == "object" && E !== null && E.$$typeof === f;
  }
  function te(E) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (P) {
        return L[P];
      })
    );
  }
  var xe = /\/+/g;
  function ye(E, L) {
    return typeof E == "object" && E !== null && E.key != null
      ? te("" + E.key)
      : L.toString(36);
  }
  function ve(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(W, W)
            : ((E.status = "pending"),
              E.then(
                function (L) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = L));
                },
                function (L) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = L));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function C(E, L, P, ee, ie) {
    var me = typeof E;
    (me === "undefined" || me === "boolean") && (E = null);
    var ae = !1;
    if (E === null) ae = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case f:
            case n:
              ae = !0;
              break;
            case _:
              return ((ae = E._init), C(ae(E._payload), L, P, ee, ie));
          }
      }
    if (ae)
      return (
        (ie = ie(E)),
        (ae = ee === "" ? "." + ye(E, 0) : ee),
        Q(ie)
          ? ((P = ""),
            ae != null && (P = ae.replace(xe, "$&/") + "/"),
            C(ie, L, P, "", function (Jt) {
              return Jt;
            }))
          : ie != null &&
            (de(ie) &&
              (ie = I(
                ie,
                P +
                  (ie.key == null || (E && E.key === ie.key)
                    ? ""
                    : ("" + ie.key).replace(xe, "$&/") + "/") +
                  ae,
              )),
            L.push(ie)),
        1
      );
    ae = 0;
    var Ze = ee === "" ? "." : ee + ":";
    if (Q(E))
      for (var ze = 0; ze < E.length; ze++)
        ((ee = E[ze]), (me = Ze + ye(ee, ze)), (ae += C(ee, L, P, me, ie)));
    else if (((ze = x(E)), typeof ze == "function"))
      for (E = ze.call(E), ze = 0; !(ee = E.next()).done; )
        ((ee = ee.value),
          (me = Ze + ye(ee, ze++)),
          (ae += C(ee, L, P, me, ie)));
    else if (me === "object") {
      if (typeof E.then == "function") return C(ve(E), L, P, ee, ie);
      throw (
        (L = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ae;
  }
  function G(E, L, P) {
    if (E == null) return E;
    var ee = [],
      ie = 0;
    return (
      C(E, ee, "", "", function (me) {
        return L.call(P, me, ie++);
      }),
      ee
    );
  }
  function X(E) {
    if (E._status === -1) {
      var L = E._result;
      ((L = L()),
        L.then(
          function (P) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = P));
          },
          function (P) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = P));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = L)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var he =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    N = {
      map: G,
      forEach: function (E, L, P) {
        G(
          E,
          function () {
            L.apply(this, arguments);
          },
          P,
        );
      },
      count: function (E) {
        var L = 0;
        return (
          G(E, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (E) {
        return (
          G(E, function (L) {
            return L;
          }) || []
        );
      },
      only: function (E) {
        if (!de(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (Ee.Activity = b),
    (Ee.Children = N),
    (Ee.Component = q),
    (Ee.Fragment = r),
    (Ee.Profiler = u),
    (Ee.PureComponent = K),
    (Ee.StrictMode = i),
    (Ee.Suspense = m),
    (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return D.H.useMemoCache(E);
      },
    }),
    (Ee.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (Ee.cacheSignal = function () {
      return null;
    }),
    (Ee.cloneElement = function (E, L, P) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var ee = S({}, E.props),
        ie = E.key;
      if (L != null)
        for (me in (L.key !== void 0 && (ie = "" + L.key), L))
          !B.call(L, me) ||
            me === "key" ||
            me === "__self" ||
            me === "__source" ||
            (me === "ref" && L.ref === void 0) ||
            (ee[me] = L[me]);
      var me = arguments.length - 2;
      if (me === 1) ee.children = P;
      else if (1 < me) {
        for (var ae = Array(me), Ze = 0; Ze < me; Ze++)
          ae[Ze] = arguments[Ze + 2];
        ee.children = ae;
      }
      return J(E.type, ie, ee);
    }),
    (Ee.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: o, _context: E }),
        E
      );
    }),
    (Ee.createElement = function (E, L, P) {
      var ee,
        ie = {},
        me = null;
      if (L != null)
        for (ee in (L.key !== void 0 && (me = "" + L.key), L))
          B.call(L, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (ie[ee] = L[ee]);
      var ae = arguments.length - 2;
      if (ae === 1) ie.children = P;
      else if (1 < ae) {
        for (var Ze = Array(ae), ze = 0; ze < ae; ze++)
          Ze[ze] = arguments[ze + 2];
        ie.children = Ze;
      }
      if (E && E.defaultProps)
        for (ee in ((ae = E.defaultProps), ae))
          ie[ee] === void 0 && (ie[ee] = ae[ee]);
      return J(E, me, ie);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (Ee.isValidElement = de),
    (Ee.lazy = function (E) {
      return { $$typeof: _, _payload: { _status: -1, _result: E }, _init: X };
    }),
    (Ee.memo = function (E, L) {
      return { $$typeof: p, type: E, compare: L === void 0 ? null : L };
    }),
    (Ee.startTransition = function (E) {
      var L = D.T,
        P = {};
      D.T = P;
      try {
        var ee = E(),
          ie = D.S;
        (ie !== null && ie(P, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(W, he));
      } catch (me) {
        he(me);
      } finally {
        (L !== null && P.types !== null && (L.types = P.types), (D.T = L));
      }
    }),
    (Ee.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (Ee.use = function (E) {
      return D.H.use(E);
    }),
    (Ee.useActionState = function (E, L, P) {
      return D.H.useActionState(E, L, P);
    }),
    (Ee.useCallback = function (E, L) {
      return D.H.useCallback(E, L);
    }),
    (Ee.useContext = function (E) {
      return D.H.useContext(E);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (E, L) {
      return D.H.useDeferredValue(E, L);
    }),
    (Ee.useEffect = function (E, L) {
      return D.H.useEffect(E, L);
    }),
    (Ee.useEffectEvent = function (E) {
      return D.H.useEffectEvent(E);
    }),
    (Ee.useId = function () {
      return D.H.useId();
    }),
    (Ee.useImperativeHandle = function (E, L, P) {
      return D.H.useImperativeHandle(E, L, P);
    }),
    (Ee.useInsertionEffect = function (E, L) {
      return D.H.useInsertionEffect(E, L);
    }),
    (Ee.useLayoutEffect = function (E, L) {
      return D.H.useLayoutEffect(E, L);
    }),
    (Ee.useMemo = function (E, L) {
      return D.H.useMemo(E, L);
    }),
    (Ee.useOptimistic = function (E, L) {
      return D.H.useOptimistic(E, L);
    }),
    (Ee.useReducer = function (E, L, P) {
      return D.H.useReducer(E, L, P);
    }),
    (Ee.useRef = function (E) {
      return D.H.useRef(E);
    }),
    (Ee.useState = function (E) {
      return D.H.useState(E);
    }),
    (Ee.useSyncExternalStore = function (E, L, P) {
      return D.H.useSyncExternalStore(E, L, P);
    }),
    (Ee.useTransition = function () {
      return D.H.useTransition();
    }),
    (Ee.version = "19.2.3"),
    Ee
  );
}
var t1;
function Hh() {
  return (t1 || ((t1 = 1), (Vd.exports = tx())), Vd.exports);
}
var le = Hh();
const lx = Pb(le),
  nx = $b({ __proto__: null, default: lx }, [le]);
var Qd = { exports: {} },
  Iu = {},
  Zd = { exports: {} },
  Kd = {};
var l1;
function ax() {
  return (
    l1 ||
      ((l1 = 1),
      (function (f) {
        function n(C, G) {
          var X = C.length;
          C.push(G);
          e: for (; 0 < X; ) {
            var he = (X - 1) >>> 1,
              N = C[he];
            if (0 < u(N, G)) ((C[he] = G), (C[X] = N), (X = he));
            else break e;
          }
        }
        function r(C) {
          return C.length === 0 ? null : C[0];
        }
        function i(C) {
          if (C.length === 0) return null;
          var G = C[0],
            X = C.pop();
          if (X !== G) {
            C[0] = X;
            e: for (var he = 0, N = C.length, E = N >>> 1; he < E; ) {
              var L = 2 * (he + 1) - 1,
                P = C[L],
                ee = L + 1,
                ie = C[ee];
              if (0 > u(P, X))
                ee < N && 0 > u(ie, P)
                  ? ((C[he] = ie), (C[ee] = X), (he = ee))
                  : ((C[he] = P), (C[L] = X), (he = L));
              else if (ee < N && 0 > u(ie, X))
                ((C[he] = ie), (C[ee] = X), (he = ee));
              else break e;
            }
          }
          return G;
        }
        function u(C, G) {
          var X = C.sortIndex - G.sortIndex;
          return X !== 0 ? X : C.id - G.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          f.unstable_now = function () {
            return o.now();
          };
        } else {
          var d = Date,
            h = d.now();
          f.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          p = [],
          _ = 1,
          b = null,
          T = 3,
          x = !1,
          z = !1,
          S = !1,
          M = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function U(C) {
          for (var G = r(p); G !== null; ) {
            if (G.callback === null) i(p);
            else if (G.startTime <= C)
              (i(p), (G.sortIndex = G.expirationTime), n(m, G));
            else break;
            G = r(p);
          }
        }
        function Q(C) {
          if (((S = !1), U(C), !z))
            if (r(m) !== null) ((z = !0), W || ((W = !0), te()));
            else {
              var G = r(p);
              G !== null && ve(Q, G.startTime - C);
            }
        }
        var W = !1,
          D = -1,
          B = 5,
          J = -1;
        function I() {
          return M ? !0 : !(f.unstable_now() - J < B);
        }
        function de() {
          if (((M = !1), W)) {
            var C = f.unstable_now();
            J = C;
            var G = !0;
            try {
              e: {
                ((z = !1), S && ((S = !1), V(D), (D = -1)), (x = !0));
                var X = T;
                try {
                  t: {
                    for (
                      U(C), b = r(m);
                      b !== null && !(b.expirationTime > C && I());
                    ) {
                      var he = b.callback;
                      if (typeof he == "function") {
                        ((b.callback = null), (T = b.priorityLevel));
                        var N = he(b.expirationTime <= C);
                        if (((C = f.unstable_now()), typeof N == "function")) {
                          ((b.callback = N), U(C), (G = !0));
                          break t;
                        }
                        (b === r(m) && i(m), U(C));
                      } else i(m);
                      b = r(m);
                    }
                    if (b !== null) G = !0;
                    else {
                      var E = r(p);
                      (E !== null && ve(Q, E.startTime - C), (G = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (T = X), (x = !1));
                }
                G = void 0;
              }
            } finally {
              G ? te() : (W = !1);
            }
          }
        }
        var te;
        if (typeof K == "function")
          te = function () {
            K(de);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            ye = xe.port2;
          ((xe.port1.onmessage = de),
            (te = function () {
              ye.postMessage(null);
            }));
        } else
          te = function () {
            q(de, 0);
          };
        function ve(C, G) {
          D = q(function () {
            C(f.unstable_now());
          }, G);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (f.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (B = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (f.unstable_next = function (C) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = T;
            }
            var X = T;
            T = G;
            try {
              return C();
            } finally {
              T = X;
            }
          }),
          (f.unstable_requestPaint = function () {
            M = !0;
          }),
          (f.unstable_runWithPriority = function (C, G) {
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
            var X = T;
            T = C;
            try {
              return G();
            } finally {
              T = X;
            }
          }),
          (f.unstable_scheduleCallback = function (C, G, X) {
            var he = f.unstable_now();
            switch (
              (typeof X == "object" && X !== null
                ? ((X = X.delay),
                  (X = typeof X == "number" && 0 < X ? he + X : he))
                : (X = he),
              C)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = X + N),
              (C = {
                id: _++,
                callback: G,
                priorityLevel: C,
                startTime: X,
                expirationTime: N,
                sortIndex: -1,
              }),
              X > he
                ? ((C.sortIndex = X),
                  n(p, C),
                  r(m) === null &&
                    C === r(p) &&
                    (S ? (V(D), (D = -1)) : (S = !0), ve(Q, X - he)))
                : ((C.sortIndex = N),
                  n(m, C),
                  z || x || ((z = !0), W || ((W = !0), te()))),
              C
            );
          }),
          (f.unstable_shouldYield = I),
          (f.unstable_wrapCallback = function (C) {
            var G = T;
            return function () {
              var X = T;
              T = G;
              try {
                return C.apply(this, arguments);
              } finally {
                T = X;
              }
            };
          }));
      })(Kd)),
    Kd
  );
}
var n1;
function ix() {
  return (n1 || ((n1 = 1), (Zd.exports = ax())), Zd.exports);
}
var Jd = { exports: {} },
  _l = {};
var a1;
function rx() {
  if (a1) return _l;
  a1 = 1;
  var f = Hh();
  function n(m) {
    var p = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var i = {
      d: {
        f: r,
        r: function () {
          throw Error(n(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function o(m, p, _) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: p,
      implementation: _,
    };
  }
  var d = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, p) {
    if (m === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (_l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    (_l.createPortal = function (m, p) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(n(299));
      return o(m, p, null, _);
    }),
    (_l.flushSync = function (m) {
      var p = d.T,
        _ = i.p;
      try {
        if (((d.T = null), (i.p = 2), m)) return m();
      } finally {
        ((d.T = p), (i.p = _), i.d.f());
      }
    }),
    (_l.preconnect = function (m, p) {
      typeof m == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        i.d.C(m, p));
    }),
    (_l.prefetchDNS = function (m) {
      typeof m == "string" && i.d.D(m);
    }),
    (_l.preinit = function (m, p) {
      if (typeof m == "string" && p && typeof p.as == "string") {
        var _ = p.as,
          b = h(_, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          x = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        _ === "style"
          ? i.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: x,
            })
          : _ === "script" &&
            i.d.X(m, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: x,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (_l.preinitModule = function (m, p) {
      if (typeof m == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var _ = h(p.as, p.crossOrigin);
            i.d.M(m, {
              crossOrigin: _,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && i.d.M(m);
    }),
    (_l.preload = function (m, p) {
      if (
        typeof m == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var _ = p.as,
          b = h(_, p.crossOrigin);
        i.d.L(m, _, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (_l.preloadModule = function (m, p) {
      if (typeof m == "string")
        if (p) {
          var _ = h(p.as, p.crossOrigin);
          i.d.m(m, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: _,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else i.d.m(m);
    }),
    (_l.requestFormReset = function (m) {
      i.d.r(m);
    }),
    (_l.unstable_batchedUpdates = function (m, p) {
      return m(p);
    }),
    (_l.useFormState = function (m, p, _) {
      return d.H.useFormState(m, p, _);
    }),
    (_l.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (_l.version = "19.2.3"),
    _l
  );
}
var i1;
function ux() {
  if (i1) return Jd.exports;
  i1 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (n) {
        console.error(n);
      }
  }
  return (f(), (Jd.exports = rx()), Jd.exports);
}
var r1;
function sx() {
  if (r1) return Iu;
  r1 = 1;
  var f = ix(),
    n = Hh(),
    r = ux();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function o(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (o(e) !== e) throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = o(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var s = l.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((a = s.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === l) return (m(s), e);
          if (c === a) return (m(s), t);
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (l.return !== a.return) ((l = s), (a = c));
      else {
        for (var g = !1, v = s.child; v; ) {
          if (v === l) {
            ((g = !0), (l = s), (a = c));
            break;
          }
          if (v === a) {
            ((g = !0), (a = s), (l = c));
            break;
          }
          v = v.sibling;
        }
        if (!g) {
          for (v = c.child; v; ) {
            if (v === l) {
              ((g = !0), (l = c), (a = s));
              break;
            }
            if (v === a) {
              ((g = !0), (a = c), (l = s));
              break;
            }
            v = v.sibling;
          }
          if (!g) throw Error(i(189));
        }
      }
      if (l.alternate !== a) throw Error(i(190));
    }
    if (l.tag !== 3) throw Error(i(188));
    return l.stateNode.current === l ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = _(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    T = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    D = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    J = Symbol.for("react.activity"),
    I = Symbol.for("react.memo_cache_sentinel"),
    de = Symbol.iterator;
  function te(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (de && e[de]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Symbol.for("react.client.reference");
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case S:
        return "Fragment";
      case q:
        return "Profiler";
      case M:
        return "StrictMode";
      case Q:
        return "Suspense";
      case W:
        return "SuspenseList";
      case J:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case U:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case D:
          return (
            (t = e.displayName || null),
            t !== null ? t : ye(e.type) || "Memo"
          );
        case B:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  var ve = Array.isArray,
    C = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    X = { pending: !1, data: null, method: null, action: null },
    he = [],
    N = -1;
  function E(e) {
    return { current: e };
  }
  function L(e) {
    0 > N || ((e.current = he[N]), (he[N] = null), N--);
  }
  function P(e, t) {
    (N++, (he[N] = e.current), (e.current = t));
  }
  var ee = E(null),
    ie = E(null),
    me = E(null),
    ae = E(null);
  function Ze(e, t) {
    switch ((P(me, t), P(ie, e), P(ee, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? xg(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = xg(t)), (e = Sg(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (L(ee), P(ee, e));
  }
  function ze() {
    (L(ee), L(ie), L(me));
  }
  function Jt(e) {
    e.memoizedState !== null && P(ae, e);
    var t = ee.current,
      l = Sg(t, e.type);
    t !== l && (P(ie, e), P(ee, l));
  }
  function mt(e) {
    (ie.current === e && (L(ee), L(ie)),
      ae.current === e && (L(ae), (Ju._currentValue = X)));
  }
  var pt, Le;
  function Ie(e) {
    if (pt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((pt = (t && t[1]) || ""),
          (Le =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      pt +
      e +
      Le
    );
  }
  var el = !1;
  function il(e, t) {
    if (!e || el) return "";
    el = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (H) {
                  var k = H;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (H) {
                  k = H;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                k = H;
              }
              ($ = e()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (H) {
            if (H && k && typeof H.stack == "string") return [H.stack, k.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = a.DetermineComponentFrameRoot(),
        g = c[0],
        v = c[1];
      if (g && v) {
        var w = g.split(`
`),
          R = v.split(`
`);
        for (
          s = a = 0;
          a < w.length && !w[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === w.length || s === R.length)
          for (
            a = w.length - 1, s = R.length - 1;
            1 <= a && 0 <= s && w[a] !== R[s];
          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (w[a] !== R[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || w[a] !== R[s])) {
                  var Z =
                    `
` + w[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Z.includes("<anonymous>") &&
                      (Z = Z.replace("<anonymous>", e.displayName)),
                    Z
                  );
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      ((el = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? Ie(l) : "";
  }
  function Y(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ie(e.type);
      case 16:
        return Ie("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ie("Suspense Fallback")
          : Ie("Suspense");
      case 19:
        return Ie("SuspenseList");
      case 0:
      case 15:
        return il(e.type, !1);
      case 11:
        return il(e.type.render, !1);
      case 1:
        return il(e.type, !0);
      case 31:
        return Ie("Activity");
      default:
        return "";
    }
  }
  function hl(e) {
    try {
      var t = "",
        l = null;
      do ((t += Y(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Jl = Object.prototype.hasOwnProperty,
    gn = f.unstable_scheduleCallback,
    st = f.unstable_cancelCallback,
    Yn = f.unstable_shouldYield,
    Zn = f.unstable_requestPaint,
    jt = f.unstable_now,
    Ht = f.unstable_getCurrentPriorityLevel,
    qn = f.unstable_ImmediatePriority,
    gt = f.unstable_UserBlockingPriority,
    ml = f.unstable_NormalPriority,
    Rl = f.unstable_LowPriority,
    _n = f.unstable_IdlePriority,
    Ti = f.log,
    At = f.unstable_setDisableYieldValue,
    Kn = null,
    bt = null;
  function Tl(e) {
    if (
      (typeof Ti == "function" && At(e),
      bt && typeof bt.setStrictMode == "function")
    )
      try {
        bt.setStrictMode(Kn, e);
      } catch {}
  }
  var Yt = Math.clz32 ? Math.clz32 : Ce,
    Jn = Math.log,
    oa = Math.LN2;
  function Ce(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Jn(e) / oa) | 0)) | 0);
  }
  var vn = 256,
    pl = 262144,
    gl = 4194304;
  function Ft(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var s = 0,
      c = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var v = a & 134217727;
    return (
      v !== 0
        ? ((a = v & ~c),
          a !== 0
            ? (s = Ft(a))
            : ((g &= v),
              g !== 0
                ? (s = Ft(g))
                : l || ((l = v & ~e), l !== 0 && (s = Ft(l)))))
        : ((v = a & ~c),
          v !== 0
            ? (s = Ft(v))
            : g !== 0
              ? (s = Ft(g))
              : l || ((l = a & ~e), l !== 0 && (s = Ft(l)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & c) === 0 &&
            ((c = s & -s),
            (l = t & -t),
            c >= l || (c === 32 && (l & 4194048) !== 0))
          ? t
          : s
    );
  }
  function bn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ln(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ba() {
    var e = gl;
    return ((gl <<= 1), (gl & 62914560) === 0 && (gl = 4194304), e);
  }
  function Te(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function pe(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Je(e, t, l, a, s, c) {
    var g = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      w = e.expirationTimes,
      R = e.hiddenUpdates;
    for (l = g & ~l; 0 < l; ) {
      var Z = 31 - Yt(l),
        $ = 1 << Z;
      ((v[Z] = 0), (w[Z] = -1));
      var k = R[Z];
      if (k !== null)
        for (R[Z] = null, Z = 0; Z < k.length; Z++) {
          var H = k[Z];
          H !== null && (H.lane &= -536870913);
        }
      l &= ~$;
    }
    (a !== 0 && ne(e, a, 0),
      c !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(g & ~t)));
  }
  function ne(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - Yt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function we(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - Yt(l),
        s = 1 << a;
      ((s & t) | (e[a] & t) && (e[a] |= t), (l &= ~s));
    }
  }
  function ge(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Se(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Se(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Nt(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ke() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Qg(e.type));
  }
  function _t(e, t) {
    var l = G.p;
    try {
      return ((G.p = e), t());
    } finally {
      G.p = l;
    }
  }
  var ct = Math.random().toString(36).slice(2),
    Oe = "__reactFiber$" + ct,
    je = "__reactProps$" + ct,
    Ke = "__reactContainer$" + ct,
    wl = "__reactEvents$" + ct,
    ft = "__reactListeners$" + ct,
    El = "__reactHandles$" + ct,
    Fl = "__reactResources$" + ct,
    xt = "__reactMarker$" + ct;
  function Dt(e) {
    (delete e[Oe], delete e[je], delete e[wl], delete e[ft], delete e[El]);
  }
  function St(e) {
    var t = e[Oe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Ke] || l[Oe])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = Mg(e); e !== null; ) {
            if ((l = e[Oe])) return l;
            e = Mg(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function kl(e) {
    if ((e = e[Oe] || e[Ke])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Fn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Tt(e) {
    var t = e[Fl];
    return (
      t ||
        (t = e[Fl] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ue(e) {
    e[xt] = !0;
  }
  var Wl = new Set(),
    ur = {};
  function Wn(e, t) {
    (xn(e, t), xn(e + "Capture", t));
  }
  function xn(e, t) {
    for (ur[e] = t, e = 0; e < t.length; e++) Wl.add(t[e]);
  }
  var Sn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ha = {},
    wi = {};
  function $n(e) {
    return Jl.call(wi, e)
      ? !0
      : Jl.call(Ha, e)
        ? !1
        : Sn.test(e)
          ? (wi[e] = !0)
          : ((Ha[e] = !0), !1);
  }
  function Rs(e, t, l) {
    if ($n(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function ks(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function ca(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function Tn(e) {
    switch (typeof e) {
      case "bigint":
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
  function hm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Vv(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        c = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (g) {
            ((l = "" + g), c.call(this, g));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (g) {
            l = "" + g;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function kc(e) {
    if (!e._valueTracker) {
      var t = hm(e) ? "checked" : "value";
      e._valueTracker = Vv(e, t, "" + e[t]);
    }
  }
  function mm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = hm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Us(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Qv = /[\n"\\]/g;
  function wn(e) {
    return e.replace(Qv, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Uc(e, t, l, a, s, c, g, v) {
    ((e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Tn(t))
          : e.value !== "" + Tn(t) && (e.value = "" + Tn(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? Bc(e, g, Tn(t))
        : l != null
          ? Bc(e, g, Tn(l))
          : a != null && e.removeAttribute("value"),
      s == null && c != null && (e.defaultChecked = !!c),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Tn(v))
        : e.removeAttribute("name"));
  }
  function pm(e, t, l, a, s, c, g, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.type = c),
      t != null || l != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || t != null)) {
        kc(e);
        return;
      }
      ((l = l != null ? "" + Tn(l) : ""),
        (t = t != null ? "" + Tn(t) : l),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = v ? e.checked : !!a),
      (e.defaultChecked = !!a),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g),
      kc(e));
  }
  function Bc(e, t, l) {
    (t === "number" && Us(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function sr(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < l.length; s++) t["$" + l[s]] = !0;
      for (l = 0; l < e.length; l++)
        ((s = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== s && (e[l].selected = s),
          s && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + Tn(l), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === l) {
          ((e[s].selected = !0), a && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function gm(e, t, l) {
    if (
      t != null &&
      ((t = "" + Tn(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Tn(l) : "";
  }
  function _m(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(i(92));
        if (ve(a)) {
          if (1 < a.length) throw Error(i(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = Tn(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      kc(e));
  }
  function or(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function vm(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Zv.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function ym(e, t, l) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var s in t)
        ((a = t[s]), t.hasOwnProperty(s) && l[s] !== a && vm(e, s, a));
    } else for (var c in t) t.hasOwnProperty(c) && vm(e, c, t[c]);
  }
  function Hc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Kv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Jv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bs(e) {
    return Jv.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function fa() {}
  var Yc = null;
  function qc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cr = null,
    fr = null;
  function bm(e) {
    var t = kl(e);
    if (t && (e = t.stateNode)) {
      var l = e[je] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Uc(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + wn("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var s = a[je] || null;
                if (!s) throw Error(i(90));
                Uc(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && mm(a));
          }
          break e;
        case "textarea":
          gm(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && sr(e, !!l.multiple, t, !1));
      }
    }
  }
  var Lc = !1;
  function xm(e, t, l) {
    if (Lc) return e(t, l);
    Lc = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Lc = !1),
        (cr !== null || fr !== null) &&
          (Eo(), cr && ((t = cr), (e = fr), (fr = cr = null), bm(t), e)))
      )
        for (t = 0; t < e.length; t++) bm(e[t]);
    }
  }
  function fu(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[je] || null;
    if (a === null) return null;
    l = a[t];
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
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(i(231, t, typeof l));
    return l;
  }
  var da = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gc = !1;
  if (da)
    try {
      var du = {};
      (Object.defineProperty(du, "passive", {
        get: function () {
          Gc = !0;
        },
      }),
        window.addEventListener("test", du, du),
        window.removeEventListener("test", du, du));
    } catch {
      Gc = !1;
    }
  var Ya = null,
    Xc = null,
    Hs = null;
  function Sm() {
    if (Hs) return Hs;
    var e,
      t = Xc,
      l = t.length,
      a,
      s = "value" in Ya ? Ya.value : Ya.textContent,
      c = s.length;
    for (e = 0; e < l && t[e] === s[e]; e++);
    var g = l - e;
    for (a = 1; a <= g && t[l - a] === s[c - a]; a++);
    return (Hs = s.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Ys(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qs() {
    return !0;
  }
  function Tm() {
    return !1;
  }
  function Ul(e) {
    function t(l, a, s, c, g) {
      ((this._reactName = l),
        (this._targetInst = s),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = g),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((l = e[v]), (this[v] = l ? l(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? qs
          : Tm),
        (this.isPropagationStopped = Tm),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = qs));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = qs));
        },
        persist: function () {},
        isPersistent: qs,
      }),
      t
    );
  }
  var Ei = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ls = Ul(Ei),
    hu = b({}, Ei, { view: 0, detail: 0 }),
    Fv = Ul(hu),
    Vc,
    Qc,
    mu,
    Gs = b({}, hu, {
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
      getModifierState: Kc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== mu &&
              (mu && e.type === "mousemove"
                ? ((Vc = e.screenX - mu.screenX), (Qc = e.screenY - mu.screenY))
                : (Qc = Vc = 0),
              (mu = e)),
            Vc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Qc;
      },
    }),
    wm = Ul(Gs),
    Wv = b({}, Gs, { dataTransfer: 0 }),
    $v = Ul(Wv),
    Pv = b({}, hu, { relatedTarget: 0 }),
    Zc = Ul(Pv),
    Iv = b({}, Ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ey = Ul(Iv),
    ty = b({}, Ei, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ly = Ul(ty),
    ny = b({}, Ei, { data: 0 }),
    Em = Ul(ny),
    ay = {
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
    iy = {
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
    ry = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function uy(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ry[e])
        ? !!t[e]
        : !1;
  }
  function Kc() {
    return uy;
  }
  var sy = b({}, hu, {
      key: function (e) {
        if (e.key) {
          var t = ay[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? iy[e.keyCode] || "Unidentified"
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
      getModifierState: Kc,
      charCode: function (e) {
        return e.type === "keypress" ? Ys(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ys(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    oy = Ul(sy),
    cy = b({}, Gs, {
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
    zm = Ul(cy),
    fy = b({}, hu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kc,
    }),
    dy = Ul(fy),
    hy = b({}, Ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    my = Ul(hy),
    py = b({}, Gs, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    gy = Ul(py),
    _y = b({}, Ei, { newState: 0, oldState: 0 }),
    vy = Ul(_y),
    yy = [9, 13, 27, 32],
    Jc = da && "CompositionEvent" in window,
    pu = null;
  da && "documentMode" in document && (pu = document.documentMode);
  var by = da && "TextEvent" in window && !pu,
    Am = da && (!Jc || (pu && 8 < pu && 11 >= pu)),
    Nm = " ",
    Mm = !1;
  function Om(e, t) {
    switch (e) {
      case "keyup":
        return yy.indexOf(t.keyCode) !== -1;
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
  function Cm(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var dr = !1;
  function xy(e, t) {
    switch (e) {
      case "compositionend":
        return Cm(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mm = !0), Nm);
      case "textInput":
        return ((e = t.data), e === Nm && Mm ? null : e);
      default:
        return null;
    }
  }
  function Sy(e, t) {
    if (dr)
      return e === "compositionend" || (!Jc && Om(e, t))
        ? ((e = Sm()), (Hs = Xc = Ya = null), (dr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Am && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ty = {
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
  function jm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ty[e.type] : t === "textarea";
  }
  function Dm(e, t, l, a) {
    (cr ? (fr ? fr.push(a) : (fr = [a])) : (cr = a),
      (t = jo(t, "onChange")),
      0 < t.length &&
        ((l = new Ls("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var gu = null,
    _u = null;
  function wy(e) {
    pg(e, 0);
  }
  function Xs(e) {
    var t = Fn(e);
    if (mm(t)) return e;
  }
  function Rm(e, t) {
    if (e === "change") return t;
  }
  var km = !1;
  if (da) {
    var Fc;
    if (da) {
      var Wc = "oninput" in document;
      if (!Wc) {
        var Um = document.createElement("div");
        (Um.setAttribute("oninput", "return;"),
          (Wc = typeof Um.oninput == "function"));
      }
      Fc = Wc;
    } else Fc = !1;
    km = Fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Bm() {
    gu && (gu.detachEvent("onpropertychange", Hm), (_u = gu = null));
  }
  function Hm(e) {
    if (e.propertyName === "value" && Xs(_u)) {
      var t = [];
      (Dm(t, _u, e, qc(e)), xm(wy, t));
    }
  }
  function Ey(e, t, l) {
    e === "focusin"
      ? (Bm(), (gu = t), (_u = l), gu.attachEvent("onpropertychange", Hm))
      : e === "focusout" && Bm();
  }
  function zy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xs(_u);
  }
  function Ay(e, t) {
    if (e === "click") return Xs(t);
  }
  function Ny(e, t) {
    if (e === "input" || e === "change") return Xs(t);
  }
  function My(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var $l = typeof Object.is == "function" ? Object.is : My;
  function vu(e, t) {
    if ($l(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var s = l[a];
      if (!Jl.call(t, s) || !$l(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Ym(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qm(e, t) {
    var l = Ym(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Ym(l);
    }
  }
  function Lm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Lm(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Gm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Us(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Us(e.document);
    }
    return t;
  }
  function $c(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Oy = da && "documentMode" in document && 11 >= document.documentMode,
    hr = null,
    Pc = null,
    yu = null,
    Ic = !1;
  function Xm(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ic ||
      hr == null ||
      hr !== Us(a) ||
      ((a = hr),
      "selectionStart" in a && $c(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (yu && vu(yu, a)) ||
        ((yu = a),
        (a = jo(Pc, "onSelect")),
        0 < a.length &&
          ((t = new Ls("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = hr))));
  }
  function zi(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var mr = {
      animationend: zi("Animation", "AnimationEnd"),
      animationiteration: zi("Animation", "AnimationIteration"),
      animationstart: zi("Animation", "AnimationStart"),
      transitionrun: zi("Transition", "TransitionRun"),
      transitionstart: zi("Transition", "TransitionStart"),
      transitioncancel: zi("Transition", "TransitionCancel"),
      transitionend: zi("Transition", "TransitionEnd"),
    },
    ef = {},
    Vm = {};
  da &&
    ((Vm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mr.animationend.animation,
      delete mr.animationiteration.animation,
      delete mr.animationstart.animation),
    "TransitionEvent" in window || delete mr.transitionend.transition);
  function Ai(e) {
    if (ef[e]) return ef[e];
    if (!mr[e]) return e;
    var t = mr[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Vm) return (ef[e] = t[l]);
    return e;
  }
  var Qm = Ai("animationend"),
    Zm = Ai("animationiteration"),
    Km = Ai("animationstart"),
    Cy = Ai("transitionrun"),
    jy = Ai("transitionstart"),
    Dy = Ai("transitioncancel"),
    Jm = Ai("transitionend"),
    Fm = new Map(),
    tf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  tf.push("scrollEnd");
  function Gn(e, t) {
    (Fm.set(e, t), Wn(t, [e]));
  }
  var Vs =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    En = [],
    pr = 0,
    lf = 0;
  function Qs() {
    for (var e = pr, t = (lf = pr = 0); t < e; ) {
      var l = En[t];
      En[t++] = null;
      var a = En[t];
      En[t++] = null;
      var s = En[t];
      En[t++] = null;
      var c = En[t];
      if (((En[t++] = null), a !== null && s !== null)) {
        var g = a.pending;
        (g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
          (a.pending = s));
      }
      c !== 0 && Wm(l, s, c);
    }
  }
  function Zs(e, t, l, a) {
    ((En[pr++] = e),
      (En[pr++] = t),
      (En[pr++] = l),
      (En[pr++] = a),
      (lf |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function nf(e, t, l, a) {
    return (Zs(e, t, l, a), Ks(e));
  }
  function Ni(e, t) {
    return (Zs(e, null, null, t), Ks(e));
  }
  function Wm(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var s = !1, c = e.return; c !== null; )
      ((c.childLanes |= l),
        (a = c.alternate),
        a !== null && (a.childLanes |= l),
        c.tag === 22 &&
          ((e = c.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = c),
        (c = c.return));
    return e.tag === 3
      ? ((c = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - Yt(l)),
          (e = c.hiddenUpdates),
          (a = e[s]),
          a === null ? (e[s] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        c)
      : null;
  }
  function Ks(e) {
    if (50 < Lu) throw ((Lu = 0), (hd = null), Error(i(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var gr = {};
  function Ry(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
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
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Pl(e, t, l, a) {
    return new Ry(e, t, l, a);
  }
  function af(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ha(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = Pl(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function $m(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Js(e, t, l, a, s, c) {
    var g = 0;
    if (((a = e), typeof e == "function")) af(e) && (g = 1);
    else if (typeof e == "string")
      g = Yb(e, l, ee.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case J:
          return ((e = Pl(31, l, t, s)), (e.elementType = J), (e.lanes = c), e);
        case S:
          return Mi(l.children, s, c, t);
        case M:
          ((g = 8), (s |= 24));
          break;
        case q:
          return (
            (e = Pl(12, l, t, s | 2)),
            (e.elementType = q),
            (e.lanes = c),
            e
          );
        case Q:
          return ((e = Pl(13, l, t, s)), (e.elementType = Q), (e.lanes = c), e);
        case W:
          return ((e = Pl(19, l, t, s)), (e.elementType = W), (e.lanes = c), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case K:
                g = 10;
                break e;
              case V:
                g = 9;
                break e;
              case U:
                g = 11;
                break e;
              case D:
                g = 14;
                break e;
              case B:
                ((g = 16), (a = null));
                break e;
            }
          ((g = 29),
            (l = Error(i(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = Pl(g, l, t, s)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = c),
      t
    );
  }
  function Mi(e, t, l, a) {
    return ((e = Pl(7, e, a, t)), (e.lanes = l), e);
  }
  function rf(e, t, l) {
    return ((e = Pl(6, e, null, t)), (e.lanes = l), e);
  }
  function Pm(e) {
    var t = Pl(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function uf(e, t, l) {
    return (
      (t = Pl(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Im = new WeakMap();
  function zn(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Im.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: hl(t) }), Im.set(e, t), t);
    }
    return { value: e, source: t, stack: hl(t) };
  }
  var _r = [],
    vr = 0,
    Fs = null,
    bu = 0,
    An = [],
    Nn = 0,
    qa = null,
    Pn = 1,
    In = "";
  function ma(e, t) {
    ((_r[vr++] = bu), (_r[vr++] = Fs), (Fs = e), (bu = t));
  }
  function e0(e, t, l) {
    ((An[Nn++] = Pn), (An[Nn++] = In), (An[Nn++] = qa), (qa = e));
    var a = Pn;
    e = In;
    var s = 32 - Yt(a) - 1;
    ((a &= ~(1 << s)), (l += 1));
    var c = 32 - Yt(t) + s;
    if (30 < c) {
      var g = s - (s % 5);
      ((c = (a & ((1 << g) - 1)).toString(32)),
        (a >>= g),
        (s -= g),
        (Pn = (1 << (32 - Yt(t) + s)) | (l << s) | a),
        (In = c + e));
    } else ((Pn = (1 << c) | (l << s) | a), (In = e));
  }
  function sf(e) {
    e.return !== null && (ma(e, 1), e0(e, 1, 0));
  }
  function of(e) {
    for (; e === Fs; )
      ((Fs = _r[--vr]), (_r[vr] = null), (bu = _r[--vr]), (_r[vr] = null));
    for (; e === qa; )
      ((qa = An[--Nn]),
        (An[Nn] = null),
        (In = An[--Nn]),
        (An[Nn] = null),
        (Pn = An[--Nn]),
        (An[Nn] = null));
  }
  function t0(e, t) {
    ((An[Nn++] = Pn),
      (An[Nn++] = In),
      (An[Nn++] = qa),
      (Pn = t.id),
      (In = t.overflow),
      (qa = e));
  }
  var rl = null,
    dt = null,
    Ve = !1,
    La = null,
    Mn = !1,
    cf = Error(i(519));
  function Ga(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (xu(zn(t, e)), cf);
  }
  function l0(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Oe] = e), (t[je] = a), l)) {
      case "dialog":
        (qe("cancel", t), qe("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Xu.length; l++) qe(Xu[l], t);
        break;
      case "source":
        qe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (qe("error", t), qe("load", t));
        break;
      case "details":
        qe("toggle", t);
        break;
      case "input":
        (qe("invalid", t),
          pm(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        qe("invalid", t);
        break;
      case "textarea":
        (qe("invalid", t), _m(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      yg(t.textContent, l)
        ? (a.popover != null && (qe("beforetoggle", t), qe("toggle", t)),
          a.onScroll != null && qe("scroll", t),
          a.onScrollEnd != null && qe("scrollend", t),
          a.onClick != null && (t.onclick = fa),
          (t = !0))
        : (t = !1),
      t || Ga(e, !0));
  }
  function n0(e) {
    for (rl = e.return; rl; )
      switch (rl.tag) {
        case 5:
        case 31:
        case 13:
          Mn = !1;
          return;
        case 27:
        case 3:
          Mn = !0;
          return;
        default:
          rl = rl.return;
      }
  }
  function yr(e) {
    if (e !== rl) return !1;
    if (!Ve) return (n0(e), (Ve = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Nd(e.type, e.memoizedProps))),
        (l = !l)),
      l && dt && Ga(e),
      n0(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      dt = Ng(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      dt = Ng(e);
    } else
      t === 27
        ? ((t = dt), li(e.type) ? ((e = Dd), (Dd = null), (dt = e)) : (dt = t))
        : (dt = rl ? Cn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Oi() {
    ((dt = rl = null), (Ve = !1));
  }
  function ff() {
    var e = La;
    return (
      e !== null &&
        (ql === null ? (ql = e) : ql.push.apply(ql, e), (La = null)),
      e
    );
  }
  function xu(e) {
    La === null ? (La = [e]) : La.push(e);
  }
  var df = E(null),
    Ci = null,
    pa = null;
  function Xa(e, t, l) {
    (P(df, t._currentValue), (t._currentValue = l));
  }
  function ga(e) {
    ((e._currentValue = df.current), L(df));
  }
  function hf(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function mf(e, t, l, a) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var g = s.child;
        c = c.firstContext;
        e: for (; c !== null; ) {
          var v = c;
          c = s;
          for (var w = 0; w < t.length; w++)
            if (v.context === t[w]) {
              ((c.lanes |= l),
                (v = c.alternate),
                v !== null && (v.lanes |= l),
                hf(c.return, l, e),
                a || (g = null));
              break e;
            }
          c = v.next;
        }
      } else if (s.tag === 18) {
        if (((g = s.return), g === null)) throw Error(i(341));
        ((g.lanes |= l),
          (c = g.alternate),
          c !== null && (c.lanes |= l),
          hf(g, l, e),
          (g = null));
      } else g = s.child;
      if (g !== null) g.return = s;
      else
        for (g = s; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((s = g.sibling), s !== null)) {
            ((s.return = g.return), (g = s));
            break;
          }
          g = g.return;
        }
      s = g;
    }
  }
  function br(e, t, l, a) {
    e = null;
    for (var s = t, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var g = s.alternate;
        if (g === null) throw Error(i(387));
        if (((g = g.memoizedProps), g !== null)) {
          var v = s.type;
          $l(s.pendingProps.value, g.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (s === ae.current) {
        if (((g = s.alternate), g === null)) throw Error(i(387));
        g.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Ju) : (e = [Ju]));
      }
      s = s.return;
    }
    (e !== null && mf(t, e, l, a), (t.flags |= 262144));
  }
  function Ws(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!$l(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ji(e) {
    ((Ci = e),
      (pa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ul(e) {
    return a0(Ci, e);
  }
  function $s(e, t) {
    return (Ci === null && ji(e), a0(e, t));
  }
  function a0(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), pa === null)) {
      if (e === null) throw Error(i(308));
      ((pa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else pa = pa.next = t;
    return l;
  }
  var ky =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    Uy = f.unstable_scheduleCallback,
    By = f.unstable_NormalPriority,
    qt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pf() {
    return { controller: new ky(), data: new Map(), refCount: 0 };
  }
  function Su(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Uy(By, function () {
          e.controller.abort();
        }));
  }
  var Tu = null,
    gf = 0,
    xr = 0,
    Sr = null;
  function Hy(e, t) {
    if (Tu === null) {
      var l = (Tu = []);
      ((gf = 0),
        (xr = yd()),
        (Sr = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (gf++, t.then(i0, i0), t);
  }
  function i0() {
    if (--gf === 0 && Tu !== null) {
      Sr !== null && (Sr.status = "fulfilled");
      var e = Tu;
      ((Tu = null), (xr = 0), (Sr = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Yy(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          l.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var s = 0; s < l.length; s++) (0, l[s])(t);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < l.length; s++)
            (0, l[s])(void 0);
        },
      ),
      a
    );
  }
  var r0 = C.S;
  C.S = function (e, t) {
    ((Xp = jt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Hy(e, t),
      r0 !== null && r0(e, t));
  };
  var Di = E(null);
  function _f() {
    var e = Di.current;
    return e !== null ? e : it.pooledCache;
  }
  function Ps(e, t) {
    t === null ? P(Di, Di.current) : P(Di, t.pool);
  }
  function u0() {
    var e = _f();
    return e === null ? null : { parent: qt._currentValue, pool: e };
  }
  var Tr = Error(i(460)),
    vf = Error(i(474)),
    Is = Error(i(542)),
    eo = { then: function () {} };
  function s0(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function o0(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(fa, fa), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), f0(e), e);
      default:
        if (typeof t.status == "string") t.then(fa, fa);
        else {
          if (((e = it), e !== null && 100 < e.shellSuspendCounter))
            throw Error(i(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), f0(e), e);
        }
        throw ((ki = t), Tr);
    }
  }
  function Ri(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((ki = l), Tr)
        : l;
    }
  }
  var ki = null;
  function c0() {
    if (ki === null) throw Error(i(459));
    var e = ki;
    return ((ki = null), e);
  }
  function f0(e) {
    if (e === Tr || e === Is) throw Error(i(483));
  }
  var wr = null,
    wu = 0;
  function to(e) {
    var t = wu;
    return ((wu += 1), wr === null && (wr = []), o0(wr, e, t));
  }
  function Eu(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function lo(e, t) {
    throw t.$$typeof === T
      ? Error(i(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function d0(e) {
    function t(O, A) {
      if (e) {
        var j = O.deletions;
        j === null ? ((O.deletions = [A]), (O.flags |= 16)) : j.push(A);
      }
    }
    function l(O, A) {
      if (!e) return null;
      for (; A !== null; ) (t(O, A), (A = A.sibling));
      return null;
    }
    function a(O) {
      for (var A = new Map(); O !== null; )
        (O.key !== null ? A.set(O.key, O) : A.set(O.index, O), (O = O.sibling));
      return A;
    }
    function s(O, A) {
      return ((O = ha(O, A)), (O.index = 0), (O.sibling = null), O);
    }
    function c(O, A, j) {
      return (
        (O.index = j),
        e
          ? ((j = O.alternate),
            j !== null
              ? ((j = j.index), j < A ? ((O.flags |= 67108866), A) : j)
              : ((O.flags |= 67108866), A))
          : ((O.flags |= 1048576), A)
      );
    }
    function g(O) {
      return (e && O.alternate === null && (O.flags |= 67108866), O);
    }
    function v(O, A, j, F) {
      return A === null || A.tag !== 6
        ? ((A = rf(j, O.mode, F)), (A.return = O), A)
        : ((A = s(A, j)), (A.return = O), A);
    }
    function w(O, A, j, F) {
      var _e = j.type;
      return _e === S
        ? Z(O, A, j.props.children, F, j.key)
        : A !== null &&
            (A.elementType === _e ||
              (typeof _e == "object" &&
                _e !== null &&
                _e.$$typeof === B &&
                Ri(_e) === A.type))
          ? ((A = s(A, j.props)), Eu(A, j), (A.return = O), A)
          : ((A = Js(j.type, j.key, j.props, null, O.mode, F)),
            Eu(A, j),
            (A.return = O),
            A);
    }
    function R(O, A, j, F) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== j.containerInfo ||
        A.stateNode.implementation !== j.implementation
        ? ((A = uf(j, O.mode, F)), (A.return = O), A)
        : ((A = s(A, j.children || [])), (A.return = O), A);
    }
    function Z(O, A, j, F, _e) {
      return A === null || A.tag !== 7
        ? ((A = Mi(j, O.mode, F, _e)), (A.return = O), A)
        : ((A = s(A, j)), (A.return = O), A);
    }
    function $(O, A, j) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = rf("" + A, O.mode, j)), (A.return = O), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case x:
            return (
              (j = Js(A.type, A.key, A.props, null, O.mode, j)),
              Eu(j, A),
              (j.return = O),
              j
            );
          case z:
            return ((A = uf(A, O.mode, j)), (A.return = O), A);
          case B:
            return ((A = Ri(A)), $(O, A, j));
        }
        if (ve(A) || te(A))
          return ((A = Mi(A, O.mode, j, null)), (A.return = O), A);
        if (typeof A.then == "function") return $(O, to(A), j);
        if (A.$$typeof === K) return $(O, $s(O, A), j);
        lo(O, A);
      }
      return null;
    }
    function k(O, A, j, F) {
      var _e = A !== null ? A.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return _e !== null ? null : v(O, A, "" + j, F);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case x:
            return j.key === _e ? w(O, A, j, F) : null;
          case z:
            return j.key === _e ? R(O, A, j, F) : null;
          case B:
            return ((j = Ri(j)), k(O, A, j, F));
        }
        if (ve(j) || te(j)) return _e !== null ? null : Z(O, A, j, F, null);
        if (typeof j.then == "function") return k(O, A, to(j), F);
        if (j.$$typeof === K) return k(O, A, $s(O, j), F);
        lo(O, j);
      }
      return null;
    }
    function H(O, A, j, F, _e) {
      if (
        (typeof F == "string" && F !== "") ||
        typeof F == "number" ||
        typeof F == "bigint"
      )
        return ((O = O.get(j) || null), v(A, O, "" + F, _e));
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case x:
            return (
              (O = O.get(F.key === null ? j : F.key) || null),
              w(A, O, F, _e)
            );
          case z:
            return (
              (O = O.get(F.key === null ? j : F.key) || null),
              R(A, O, F, _e)
            );
          case B:
            return ((F = Ri(F)), H(O, A, j, F, _e));
        }
        if (ve(F) || te(F))
          return ((O = O.get(j) || null), Z(A, O, F, _e, null));
        if (typeof F.then == "function") return H(O, A, j, to(F), _e);
        if (F.$$typeof === K) return H(O, A, j, $s(A, F), _e);
        lo(A, F);
      }
      return null;
    }
    function re(O, A, j, F) {
      for (
        var _e = null, Fe = null, fe = A, Ne = (A = 0), Xe = null;
        fe !== null && Ne < j.length;
        Ne++
      ) {
        fe.index > Ne ? ((Xe = fe), (fe = null)) : (Xe = fe.sibling);
        var We = k(O, fe, j[Ne], F);
        if (We === null) {
          fe === null && (fe = Xe);
          break;
        }
        (e && fe && We.alternate === null && t(O, fe),
          (A = c(We, A, Ne)),
          Fe === null ? (_e = We) : (Fe.sibling = We),
          (Fe = We),
          (fe = Xe));
      }
      if (Ne === j.length) return (l(O, fe), Ve && ma(O, Ne), _e);
      if (fe === null) {
        for (; Ne < j.length; Ne++)
          ((fe = $(O, j[Ne], F)),
            fe !== null &&
              ((A = c(fe, A, Ne)),
              Fe === null ? (_e = fe) : (Fe.sibling = fe),
              (Fe = fe)));
        return (Ve && ma(O, Ne), _e);
      }
      for (fe = a(fe); Ne < j.length; Ne++)
        ((Xe = H(fe, O, Ne, j[Ne], F)),
          Xe !== null &&
            (e &&
              Xe.alternate !== null &&
              fe.delete(Xe.key === null ? Ne : Xe.key),
            (A = c(Xe, A, Ne)),
            Fe === null ? (_e = Xe) : (Fe.sibling = Xe),
            (Fe = Xe)));
      return (
        e &&
          fe.forEach(function (ui) {
            return t(O, ui);
          }),
        Ve && ma(O, Ne),
        _e
      );
    }
    function be(O, A, j, F) {
      if (j == null) throw Error(i(151));
      for (
        var _e = null,
          Fe = null,
          fe = A,
          Ne = (A = 0),
          Xe = null,
          We = j.next();
        fe !== null && !We.done;
        Ne++, We = j.next()
      ) {
        fe.index > Ne ? ((Xe = fe), (fe = null)) : (Xe = fe.sibling);
        var ui = k(O, fe, We.value, F);
        if (ui === null) {
          fe === null && (fe = Xe);
          break;
        }
        (e && fe && ui.alternate === null && t(O, fe),
          (A = c(ui, A, Ne)),
          Fe === null ? (_e = ui) : (Fe.sibling = ui),
          (Fe = ui),
          (fe = Xe));
      }
      if (We.done) return (l(O, fe), Ve && ma(O, Ne), _e);
      if (fe === null) {
        for (; !We.done; Ne++, We = j.next())
          ((We = $(O, We.value, F)),
            We !== null &&
              ((A = c(We, A, Ne)),
              Fe === null ? (_e = We) : (Fe.sibling = We),
              (Fe = We)));
        return (Ve && ma(O, Ne), _e);
      }
      for (fe = a(fe); !We.done; Ne++, We = j.next())
        ((We = H(fe, O, Ne, We.value, F)),
          We !== null &&
            (e &&
              We.alternate !== null &&
              fe.delete(We.key === null ? Ne : We.key),
            (A = c(We, A, Ne)),
            Fe === null ? (_e = We) : (Fe.sibling = We),
            (Fe = We)));
      return (
        e &&
          fe.forEach(function (Wb) {
            return t(O, Wb);
          }),
        Ve && ma(O, Ne),
        _e
      );
    }
    function at(O, A, j, F) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === S &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case x:
            e: {
              for (var _e = j.key; A !== null; ) {
                if (A.key === _e) {
                  if (((_e = j.type), _e === S)) {
                    if (A.tag === 7) {
                      (l(O, A.sibling),
                        (F = s(A, j.props.children)),
                        (F.return = O),
                        (O = F));
                      break e;
                    }
                  } else if (
                    A.elementType === _e ||
                    (typeof _e == "object" &&
                      _e !== null &&
                      _e.$$typeof === B &&
                      Ri(_e) === A.type)
                  ) {
                    (l(O, A.sibling),
                      (F = s(A, j.props)),
                      Eu(F, j),
                      (F.return = O),
                      (O = F));
                    break e;
                  }
                  l(O, A);
                  break;
                } else t(O, A);
                A = A.sibling;
              }
              j.type === S
                ? ((F = Mi(j.props.children, O.mode, F, j.key)),
                  (F.return = O),
                  (O = F))
                : ((F = Js(j.type, j.key, j.props, null, O.mode, F)),
                  Eu(F, j),
                  (F.return = O),
                  (O = F));
            }
            return g(O);
          case z:
            e: {
              for (_e = j.key; A !== null; ) {
                if (A.key === _e)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === j.containerInfo &&
                    A.stateNode.implementation === j.implementation
                  ) {
                    (l(O, A.sibling),
                      (F = s(A, j.children || [])),
                      (F.return = O),
                      (O = F));
                    break e;
                  } else {
                    l(O, A);
                    break;
                  }
                else t(O, A);
                A = A.sibling;
              }
              ((F = uf(j, O.mode, F)), (F.return = O), (O = F));
            }
            return g(O);
          case B:
            return ((j = Ri(j)), at(O, A, j, F));
        }
        if (ve(j)) return re(O, A, j, F);
        if (te(j)) {
          if (((_e = te(j)), typeof _e != "function")) throw Error(i(150));
          return ((j = _e.call(j)), be(O, A, j, F));
        }
        if (typeof j.then == "function") return at(O, A, to(j), F);
        if (j.$$typeof === K) return at(O, A, $s(O, j), F);
        lo(O, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          A !== null && A.tag === 6
            ? (l(O, A.sibling), (F = s(A, j)), (F.return = O), (O = F))
            : (l(O, A), (F = rf(j, O.mode, F)), (F.return = O), (O = F)),
          g(O))
        : l(O, A);
    }
    return function (O, A, j, F) {
      try {
        wu = 0;
        var _e = at(O, A, j, F);
        return ((wr = null), _e);
      } catch (fe) {
        if (fe === Tr || fe === Is) throw fe;
        var Fe = Pl(29, fe, null, O.mode);
        return ((Fe.lanes = F), (Fe.return = O), Fe);
      }
    };
  }
  var Ui = d0(!0),
    h0 = d0(!1),
    Va = !1;
  function yf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function bf(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Qa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Za(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), ($e & 2) !== 0)) {
      var s = a.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (a.pending = t),
        (t = Ks(e)),
        Wm(e, null, l),
        t
      );
    }
    return (Zs(e, a, t, l), Ks(e));
  }
  function zu(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), we(e, l));
    }
  }
  function xf(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var s = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var g = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = g) : (c = c.next = g), (l = l.next));
        } while (l !== null);
        c === null ? (s = c = t) : (c = c.next = t);
      } else s = c = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Sf = !1;
  function Au() {
    if (Sf) {
      var e = Sr;
      if (e !== null) throw e;
    }
  }
  function Nu(e, t, l, a) {
    Sf = !1;
    var s = e.updateQueue;
    Va = !1;
    var c = s.firstBaseUpdate,
      g = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var w = v,
        R = w.next;
      ((w.next = null), g === null ? (c = R) : (g.next = R), (g = w));
      var Z = e.alternate;
      Z !== null &&
        ((Z = Z.updateQueue),
        (v = Z.lastBaseUpdate),
        v !== g &&
          (v === null ? (Z.firstBaseUpdate = R) : (v.next = R),
          (Z.lastBaseUpdate = w)));
    }
    if (c !== null) {
      var $ = s.baseState;
      ((g = 0), (Z = R = w = null), (v = c));
      do {
        var k = v.lane & -536870913,
          H = k !== v.lane;
        if (H ? (Ge & k) === k : (a & k) === k) {
          (k !== 0 && k === xr && (Sf = !0),
            Z !== null &&
              (Z = Z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var re = e,
              be = v;
            k = t;
            var at = l;
            switch (be.tag) {
              case 1:
                if (((re = be.payload), typeof re == "function")) {
                  $ = re.call(at, $, k);
                  break e;
                }
                $ = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = be.payload),
                  (k = typeof re == "function" ? re.call(at, $, k) : re),
                  k == null)
                )
                  break e;
                $ = b({}, $, k);
                break e;
              case 2:
                Va = !0;
            }
          }
          ((k = v.callback),
            k !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = s.callbacks),
              H === null ? (s.callbacks = [k]) : H.push(k)));
        } else
          ((H = {
            lane: k,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            Z === null ? ((R = Z = H), (w = $)) : (Z = Z.next = H),
            (g |= k));
        if (((v = v.next), v === null)) {
          if (((v = s.shared.pending), v === null)) break;
          ((H = v),
            (v = H.next),
            (H.next = null),
            (s.lastBaseUpdate = H),
            (s.shared.pending = null));
        }
      } while (!0);
      (Z === null && (w = $),
        (s.baseState = w),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = Z),
        c === null && (s.shared.lanes = 0),
        ($a |= g),
        (e.lanes = g),
        (e.memoizedState = $));
    }
  }
  function m0(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function p0(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) m0(l[e], t);
  }
  var Er = E(null),
    no = E(0);
  function g0(e, t) {
    ((e = Ea), P(no, e), P(Er, t), (Ea = e | t.baseLanes));
  }
  function Tf() {
    (P(no, Ea), P(Er, Er.current));
  }
  function wf() {
    ((Ea = no.current), L(Er), L(no));
  }
  var Il = E(null),
    On = null;
  function Ka(e) {
    var t = e.alternate;
    (P(Rt, Rt.current & 1),
      P(Il, e),
      On === null &&
        (t === null || Er.current !== null || t.memoizedState !== null) &&
        (On = e));
  }
  function Ef(e) {
    (P(Rt, Rt.current), P(Il, e), On === null && (On = e));
  }
  function _0(e) {
    e.tag === 22
      ? (P(Rt, Rt.current), P(Il, e), On === null && (On = e))
      : Ja();
  }
  function Ja() {
    (P(Rt, Rt.current), P(Il, Il.current));
  }
  function en(e) {
    (L(Il), On === e && (On = null), L(Rt));
  }
  var Rt = E(0);
  function ao(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Cd(l) || jd(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var _a = 0,
    Ae = null,
    lt = null,
    Lt = null,
    io = !1,
    zr = !1,
    Bi = !1,
    ro = 0,
    Mu = 0,
    Ar = null,
    qy = 0;
  function Mt() {
    throw Error(i(321));
  }
  function zf(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!$l(e[l], t[l])) return !1;
    return !0;
  }
  function Af(e, t, l, a, s, c) {
    return (
      (_a = c),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (C.H = e === null || e.memoizedState === null ? ep : Gf),
      (Bi = !1),
      (c = l(a, s)),
      (Bi = !1),
      zr && (c = y0(t, l, a, s)),
      v0(e),
      c
    );
  }
  function v0(e) {
    C.H = ju;
    var t = lt !== null && lt.next !== null;
    if (((_a = 0), (Lt = lt = Ae = null), (io = !1), (Mu = 0), (Ar = null), t))
      throw Error(i(300));
    e === null ||
      Gt ||
      ((e = e.dependencies), e !== null && Ws(e) && (Gt = !0));
  }
  function y0(e, t, l, a) {
    Ae = e;
    var s = 0;
    do {
      if ((zr && (Ar = null), (Mu = 0), (zr = !1), 25 <= s))
        throw Error(i(301));
      if (((s += 1), (Lt = lt = null), e.updateQueue != null)) {
        var c = e.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((C.H = tp), (c = t(l, a)));
    } while (zr);
    return c;
  }
  function Ly() {
    var e = C.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ou(t) : t),
      (e = e.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== e && (Ae.flags |= 1024),
      t
    );
  }
  function Nf() {
    var e = ro !== 0;
    return ((ro = 0), e);
  }
  function Mf(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function Of(e) {
    if (io) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      io = !1;
    }
    ((_a = 0), (Lt = lt = Ae = null), (zr = !1), (Mu = ro = 0), (Ar = null));
  }
  function zl() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Lt === null ? (Ae.memoizedState = Lt = e) : (Lt = Lt.next = e), Lt);
  }
  function kt() {
    if (lt === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var t = Lt === null ? Ae.memoizedState : Lt.next;
    if (t !== null) ((Lt = t), (lt = e));
    else {
      if (e === null)
        throw Ae.alternate === null ? Error(i(467)) : Error(i(310));
      ((lt = e),
        (e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Lt === null ? (Ae.memoizedState = Lt = e) : (Lt = Lt.next = e));
    }
    return Lt;
  }
  function uo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ou(e) {
    var t = Mu;
    return (
      (Mu += 1),
      Ar === null && (Ar = []),
      (e = o0(Ar, e, t)),
      (t = Ae),
      (Lt === null ? t.memoizedState : Lt.next) === null &&
        ((t = t.alternate),
        (C.H = t === null || t.memoizedState === null ? ep : Gf)),
      e
    );
  }
  function so(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ou(e);
      if (e.$$typeof === K) return ul(e);
    }
    throw Error(i(438, String(e)));
  }
  function Cf(e) {
    var t = null,
      l = Ae.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = Ae.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = uo()), (Ae.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = I;
    return (t.index++, l);
  }
  function va(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function oo(e) {
    var t = kt();
    return jf(t, lt, e);
  }
  function jf(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = l;
    var s = e.baseQueue,
      c = a.pending;
    if (c !== null) {
      if (s !== null) {
        var g = s.next;
        ((s.next = c.next), (c.next = g));
      }
      ((t.baseQueue = s = c), (a.pending = null));
    }
    if (((c = e.baseState), s === null)) e.memoizedState = c;
    else {
      t = s.next;
      var v = (g = null),
        w = null,
        R = t,
        Z = !1;
      do {
        var $ = R.lane & -536870913;
        if ($ !== R.lane ? (Ge & $) === $ : (_a & $) === $) {
          var k = R.revertLane;
          if (k === 0)
            (w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              $ === xr && (Z = !0));
          else if ((_a & k) === k) {
            ((R = R.next), k === xr && (Z = !0));
            continue;
          } else
            (($ = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              w === null ? ((v = w = $), (g = c)) : (w = w.next = $),
              (Ae.lanes |= k),
              ($a |= k));
          (($ = R.action),
            Bi && l(c, $),
            (c = R.hasEagerState ? R.eagerState : l(c, $)));
        } else
          ((k = {
            lane: $,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            w === null ? ((v = w = k), (g = c)) : (w = w.next = k),
            (Ae.lanes |= $),
            ($a |= $));
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (w === null ? (g = c) : (w.next = v),
        !$l(c, e.memoizedState) && ((Gt = !0), Z && ((l = Sr), l !== null)))
      )
        throw l;
      ((e.memoizedState = c),
        (e.baseState = g),
        (e.baseQueue = w),
        (a.lastRenderedState = c));
    }
    return (s === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Df(e) {
    var t = kt(),
      l = t.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      s = l.pending,
      c = t.memoizedState;
    if (s !== null) {
      l.pending = null;
      var g = (s = s.next);
      do ((c = e(c, g.action)), (g = g.next));
      while (g !== s);
      ($l(c, t.memoizedState) || (Gt = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (l.lastRenderedState = c));
    }
    return [c, a];
  }
  function b0(e, t, l) {
    var a = Ae,
      s = kt(),
      c = Ve;
    if (c) {
      if (l === void 0) throw Error(i(407));
      l = l();
    } else l = t();
    var g = !$l((lt || s).memoizedState, l);
    if (
      (g && ((s.memoizedState = l), (Gt = !0)),
      (s = s.queue),
      Uf(T0.bind(null, a, s, e), [e]),
      s.getSnapshot !== t || g || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Nr(9, { destroy: void 0 }, S0.bind(null, a, s, l, t), null),
        it === null)
      )
        throw Error(i(349));
      c || (_a & 127) !== 0 || x0(a, t, l);
    }
    return l;
  }
  function x0(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = uo()), (Ae.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function S0(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), w0(t) && E0(e));
  }
  function T0(e, t, l) {
    return l(function () {
      w0(t) && E0(e);
    });
  }
  function w0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !$l(e, l);
    } catch {
      return !0;
    }
  }
  function E0(e) {
    var t = Ni(e, 2);
    t !== null && Ll(t, e, 2);
  }
  function Rf(e) {
    var t = zl();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Bi)) {
        Tl(!0);
        try {
          l();
        } finally {
          Tl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: e,
      }),
      t
    );
  }
  function z0(e, t, l, a) {
    return ((e.baseState = l), jf(e, lt, typeof a == "function" ? a : va));
  }
  function Gy(e, t, l, a, s) {
    if (ho(e)) throw Error(i(485));
    if (((e = t.action), e !== null)) {
      var c = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          c.listeners.push(g);
        },
      };
      (C.T !== null ? l(!0) : (c.isTransition = !1),
        a(c),
        (l = t.pending),
        l === null
          ? ((c.next = t.pending = c), A0(t, c))
          : ((c.next = l.next), (t.pending = l.next = c)));
    }
  }
  function A0(e, t) {
    var l = t.action,
      a = t.payload,
      s = e.state;
    if (t.isTransition) {
      var c = C.T,
        g = {};
      C.T = g;
      try {
        var v = l(s, a),
          w = C.S;
        (w !== null && w(g, v), N0(e, t, v));
      } catch (R) {
        kf(e, t, R);
      } finally {
        (c !== null && g.types !== null && (c.types = g.types), (C.T = c));
      }
    } else
      try {
        ((c = l(s, a)), N0(e, t, c));
      } catch (R) {
        kf(e, t, R);
      }
  }
  function N0(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            M0(e, t, a);
          },
          function (a) {
            return kf(e, t, a);
          },
        )
      : M0(e, t, l);
  }
  function M0(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      O0(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), A0(e, l))));
  }
  function kf(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), O0(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function O0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function C0(e, t) {
    return t;
  }
  function j0(e, t) {
    if (Ve) {
      var l = it.formState;
      if (l !== null) {
        e: {
          var a = Ae;
          if (Ve) {
            if (dt) {
              t: {
                for (var s = dt, c = Mn; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break t;
                  }
                  if (((s = Cn(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((dt = Cn(s.nextSibling)), (a = s.data === "F!"));
                break e;
              }
            }
            Ga(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = zl()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: C0,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = $0.bind(null, Ae, a)),
      (a.dispatch = l),
      (a = Rf(!1)),
      (c = Lf.bind(null, Ae, !1, a.queue)),
      (a = zl()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = s),
      (l = Gy.bind(null, Ae, s, c, l)),
      (s.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function D0(e) {
    var t = kt();
    return R0(t, lt, e);
  }
  function R0(e, t, l) {
    if (
      ((t = jf(e, t, C0)[0]),
      (e = oo(va)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = Ou(t);
      } catch (g) {
        throw g === Tr ? Is : g;
      }
    else a = t;
    t = kt();
    var s = t.queue,
      c = s.dispatch;
    return (
      l !== t.memoizedState &&
        ((Ae.flags |= 2048),
        Nr(9, { destroy: void 0 }, Xy.bind(null, s, l), null)),
      [a, c, e]
    );
  }
  function Xy(e, t) {
    e.action = t;
  }
  function k0(e) {
    var t = kt(),
      l = lt;
    if (l !== null) return R0(t, l, e);
    (kt(), (t = t.memoizedState), (l = kt()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Nr(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = Ae.updateQueue),
      t === null && ((t = uo()), (Ae.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function U0() {
    return kt().memoizedState;
  }
  function co(e, t, l, a) {
    var s = zl();
    ((Ae.flags |= e),
      (s.memoizedState = Nr(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function fo(e, t, l, a) {
    var s = kt();
    a = a === void 0 ? null : a;
    var c = s.memoizedState.inst;
    lt !== null && a !== null && zf(a, lt.memoizedState.deps)
      ? (s.memoizedState = Nr(t, c, l, a))
      : ((Ae.flags |= e), (s.memoizedState = Nr(1 | t, c, l, a)));
  }
  function B0(e, t) {
    co(8390656, 8, e, t);
  }
  function Uf(e, t) {
    fo(2048, 8, e, t);
  }
  function Vy(e) {
    Ae.flags |= 4;
    var t = Ae.updateQueue;
    if (t === null) ((t = uo()), (Ae.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function H0(e) {
    var t = kt().memoizedState;
    return (
      Vy({ ref: t, nextImpl: e }),
      function () {
        if (($e & 2) !== 0) throw Error(i(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Y0(e, t) {
    return fo(4, 2, e, t);
  }
  function q0(e, t) {
    return fo(4, 4, e, t);
  }
  function L0(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function G0(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), fo(4, 4, L0.bind(null, t, e), l));
  }
  function Bf() {}
  function X0(e, t) {
    var l = kt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && zf(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function V0(e, t) {
    var l = kt();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && zf(t, a[1])) return a[0];
    if (((a = e()), Bi)) {
      Tl(!0);
      try {
        e();
      } finally {
        Tl(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Hf(e, t, l) {
    return l === void 0 || ((_a & 1073741824) !== 0 && (Ge & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Qp()), (Ae.lanes |= e), ($a |= e), l);
  }
  function Q0(e, t, l, a) {
    return $l(l, t)
      ? l
      : Er.current !== null
        ? ((e = Hf(e, l, a)), $l(e, t) || (Gt = !0), e)
        : (_a & 42) === 0 || ((_a & 1073741824) !== 0 && (Ge & 261930) === 0)
          ? ((Gt = !0), (e.memoizedState = l))
          : ((e = Qp()), (Ae.lanes |= e), ($a |= e), t);
  }
  function Z0(e, t, l, a, s) {
    var c = G.p;
    G.p = c !== 0 && 8 > c ? c : 8;
    var g = C.T,
      v = {};
    ((C.T = v), Lf(e, !1, t, l));
    try {
      var w = s(),
        R = C.S;
      if (
        (R !== null && R(v, w),
        w !== null && typeof w == "object" && typeof w.then == "function")
      ) {
        var Z = Yy(w, a);
        Cu(e, t, Z, nn(e));
      } else Cu(e, t, a, nn(e));
    } catch ($) {
      Cu(e, t, { then: function () {}, status: "rejected", reason: $ }, nn());
    } finally {
      ((G.p = c),
        g !== null && v.types !== null && (g.types = v.types),
        (C.T = g));
    }
  }
  function Qy() {}
  function Yf(e, t, l, a) {
    if (e.tag !== 5) throw Error(i(476));
    var s = K0(e).queue;
    Z0(
      e,
      s,
      t,
      X,
      l === null
        ? Qy
        : function () {
            return (J0(e), l(a));
          },
    );
  }
  function K0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: X,
      baseState: X,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: va,
        lastRenderedState: X,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: va,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function J0(e) {
    var t = K0(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Cu(e, t.next.queue, {}, nn()));
  }
  function qf() {
    return ul(Ju);
  }
  function F0() {
    return kt().memoizedState;
  }
  function W0() {
    return kt().memoizedState;
  }
  function Zy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = nn();
          e = Qa(l);
          var a = Za(t, e, l);
          (a !== null && (Ll(a, t, l), zu(a, t, l)),
            (t = { cache: pf() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ky(e, t, l) {
    var a = nn();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ho(e)
        ? P0(t, l)
        : ((l = nf(e, t, l, a)), l !== null && (Ll(l, e, a), I0(l, t, a))));
  }
  function $0(e, t, l) {
    var a = nn();
    Cu(e, t, l, a);
  }
  function Cu(e, t, l, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ho(e)) P0(t, s);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var g = t.lastRenderedState,
            v = c(g, l);
          if (((s.hasEagerState = !0), (s.eagerState = v), $l(v, g)))
            return (Zs(e, t, s, 0), it === null && Qs(), !1);
        } catch {}
      if (((l = nf(e, t, s, a)), l !== null))
        return (Ll(l, e, a), I0(l, t, a), !0);
    }
    return !1;
  }
  function Lf(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: yd(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ho(e))
    ) {
      if (t) throw Error(i(479));
    } else ((t = nf(e, l, a, 2)), t !== null && Ll(t, e, 2));
  }
  function ho(e) {
    var t = e.alternate;
    return e === Ae || (t !== null && t === Ae);
  }
  function P0(e, t) {
    zr = io = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function I0(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), we(e, l));
    }
  }
  var ju = {
    readContext: ul,
    use: so,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt,
  };
  ju.useEffectEvent = Mt;
  var ep = {
      readContext: ul,
      use: so,
      useCallback: function (e, t) {
        return ((zl().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ul,
      useEffect: B0,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          co(4194308, 4, L0.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return co(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        co(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = zl();
        t = t === void 0 ? null : t;
        var a = e();
        if (Bi) {
          Tl(!0);
          try {
            e();
          } finally {
            Tl(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = zl();
        if (l !== void 0) {
          var s = l(t);
          if (Bi) {
            Tl(!0);
            try {
              l(t);
            } finally {
              Tl(!1);
            }
          }
        } else s = t;
        return (
          (a.memoizedState = a.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (a.queue = e),
          (e = e.dispatch = Ky.bind(null, Ae, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = zl();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Rf(e);
        var t = e.queue,
          l = $0.bind(null, Ae, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Bf,
      useDeferredValue: function (e, t) {
        var l = zl();
        return Hf(l, e, t);
      },
      useTransition: function () {
        var e = Rf(!1);
        return (
          (e = Z0.bind(null, Ae, e.queue, !0, !1)),
          (zl().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = Ae,
          s = zl();
        if (Ve) {
          if (l === void 0) throw Error(i(407));
          l = l();
        } else {
          if (((l = t()), it === null)) throw Error(i(349));
          (Ge & 127) !== 0 || x0(a, t, l);
        }
        s.memoizedState = l;
        var c = { value: l, getSnapshot: t };
        return (
          (s.queue = c),
          B0(T0.bind(null, a, c, e), [e]),
          (a.flags |= 2048),
          Nr(9, { destroy: void 0 }, S0.bind(null, a, c, l, t), null),
          l
        );
      },
      useId: function () {
        var e = zl(),
          t = it.identifierPrefix;
        if (Ve) {
          var l = In,
            a = Pn;
          ((l = (a & ~(1 << (32 - Yt(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = ro++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = qy++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: qf,
      useFormState: j0,
      useActionState: j0,
      useOptimistic: function (e) {
        var t = zl();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Lf.bind(null, Ae, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Cf,
      useCacheRefresh: function () {
        return (zl().memoizedState = Zy.bind(null, Ae));
      },
      useEffectEvent: function (e) {
        var t = zl(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if (($e & 2) !== 0) throw Error(i(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Gf = {
      readContext: ul,
      use: so,
      useCallback: X0,
      useContext: ul,
      useEffect: Uf,
      useImperativeHandle: G0,
      useInsertionEffect: Y0,
      useLayoutEffect: q0,
      useMemo: V0,
      useReducer: oo,
      useRef: U0,
      useState: function () {
        return oo(va);
      },
      useDebugValue: Bf,
      useDeferredValue: function (e, t) {
        var l = kt();
        return Q0(l, lt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = oo(va)[0],
          t = kt().memoizedState;
        return [typeof e == "boolean" ? e : Ou(e), t];
      },
      useSyncExternalStore: b0,
      useId: F0,
      useHostTransitionStatus: qf,
      useFormState: D0,
      useActionState: D0,
      useOptimistic: function (e, t) {
        var l = kt();
        return z0(l, lt, e, t);
      },
      useMemoCache: Cf,
      useCacheRefresh: W0,
    };
  Gf.useEffectEvent = H0;
  var tp = {
    readContext: ul,
    use: so,
    useCallback: X0,
    useContext: ul,
    useEffect: Uf,
    useImperativeHandle: G0,
    useInsertionEffect: Y0,
    useLayoutEffect: q0,
    useMemo: V0,
    useReducer: Df,
    useRef: U0,
    useState: function () {
      return Df(va);
    },
    useDebugValue: Bf,
    useDeferredValue: function (e, t) {
      var l = kt();
      return lt === null ? Hf(l, e, t) : Q0(l, lt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Df(va)[0],
        t = kt().memoizedState;
      return [typeof e == "boolean" ? e : Ou(e), t];
    },
    useSyncExternalStore: b0,
    useId: F0,
    useHostTransitionStatus: qf,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function (e, t) {
      var l = kt();
      return lt !== null
        ? z0(l, lt, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: Cf,
    useCacheRefresh: W0,
  };
  tp.useEffectEvent = H0;
  function Xf(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : b({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Vf = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = nn(),
        s = Qa(a);
      ((s.payload = t),
        l != null && (s.callback = l),
        (t = Za(e, s, a)),
        t !== null && (Ll(t, e, a), zu(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = nn(),
        s = Qa(a);
      ((s.tag = 1),
        (s.payload = t),
        l != null && (s.callback = l),
        (t = Za(e, s, a)),
        t !== null && (Ll(t, e, a), zu(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = nn(),
        a = Qa(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Za(e, a, l)),
        t !== null && (Ll(t, e, l), zu(t, e, l)));
    },
  };
  function lp(e, t, l, a, s, c, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, c, g)
        : t.prototype && t.prototype.isPureReactComponent
          ? !vu(l, a) || !vu(s, c)
          : !0
    );
  }
  function np(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Vf.enqueueReplaceState(t, t.state, null));
  }
  function Hi(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = b({}, l));
      for (var s in e) l[s] === void 0 && (l[s] = e[s]);
    }
    return l;
  }
  function ap(e) {
    Vs(e);
  }
  function ip(e) {
    console.error(e);
  }
  function rp(e) {
    Vs(e);
  }
  function mo(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function up(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Qf(e, t, l) {
    return (
      (l = Qa(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        mo(e, t);
      }),
      l
    );
  }
  function sp(e) {
    return ((e = Qa(e)), (e.tag = 3), e);
  }
  function op(e, t, l, a) {
    var s = l.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = a.value;
      ((e.payload = function () {
        return s(c);
      }),
        (e.callback = function () {
          up(t, l, a);
        }));
    }
    var g = l.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        (up(t, l, a),
          typeof s != "function" &&
            (Pa === null ? (Pa = new Set([this])) : Pa.add(this)));
        var v = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Jy(e, t, l, a, s) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && br(t, l, s, !0),
        (l = Il.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              On === null ? zo() : l.alternate === null && Ot === 0 && (Ot = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = s),
              a === eo
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  gd(e, a, s)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === eo
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  gd(e, a, s)),
              !1
            );
        }
        throw Error(i(435, l.tag));
      }
      return (gd(e, a, s), zo(), !1);
    }
    if (Ve)
      return (
        (t = Il.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            a !== cf && ((e = Error(i(422), { cause: a })), xu(zn(e, l))))
          : (a !== cf && ((t = Error(i(423), { cause: a })), xu(zn(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (a = zn(a, l)),
            (s = Qf(e.stateNode, a, s)),
            xf(e, s),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var c = Error(i(520), { cause: a });
    if (
      ((c = zn(c, l)),
      qu === null ? (qu = [c]) : qu.push(c),
      Ot !== 4 && (Ot = 2),
      t === null)
    )
      return !0;
    ((a = zn(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = s & -s),
            (l.lanes |= e),
            (e = Qf(l.stateNode, a, e)),
            xf(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Pa === null || !Pa.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (s &= -s),
              (l.lanes |= s),
              (s = sp(s)),
              op(s, e, l, a),
              xf(l, s),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Zf = Error(i(461)),
    Gt = !1;
  function sl(e, t, l, a) {
    t.child = e === null ? h0(t, null, l, a) : Ui(t, e.child, l, a);
  }
  function cp(e, t, l, a, s) {
    l = l.render;
    var c = t.ref;
    if ("ref" in a) {
      var g = {};
      for (var v in a) v !== "ref" && (g[v] = a[v]);
    } else g = a;
    return (
      ji(t),
      (a = Af(e, t, l, g, c, s)),
      (v = Nf()),
      e !== null && !Gt
        ? (Mf(e, t, s), ya(e, t, s))
        : (Ve && v && sf(t), (t.flags |= 1), sl(e, t, a, s), t.child)
    );
  }
  function fp(e, t, l, a, s) {
    if (e === null) {
      var c = l.type;
      return typeof c == "function" &&
        !af(c) &&
        c.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = c), dp(e, t, c, a, s))
        : ((e = Js(l.type, null, a, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), !ed(e, s))) {
      var g = c.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : vu), l(g, a) && e.ref === t.ref)
      )
        return ya(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = ha(c, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function dp(e, t, l, a, s) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (vu(c, a) && e.ref === t.ref)
        if (((Gt = !1), (t.pendingProps = a = c), ed(e, s)))
          (e.flags & 131072) !== 0 && (Gt = !0);
        else return ((t.lanes = e.lanes), ya(e, t, s));
    }
    return Kf(e, t, l, a, s);
  }
  function hp(e, t, l, a) {
    var s = a.children,
      c = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, s = 0; a !== null; )
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~c;
        } else ((a = 0), (t.child = null));
        return mp(e, t, c, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ps(t, c !== null ? c.cachePool : null),
          c !== null ? g0(t, c) : Tf(),
          _0(t));
      else
        return (
          (a = t.lanes = 536870912),
          mp(e, t, c !== null ? c.baseLanes | l : l, l, a)
        );
    } else
      c !== null
        ? (Ps(t, c.cachePool), g0(t, c), Ja(), (t.memoizedState = null))
        : (e !== null && Ps(t, null), Tf(), Ja());
    return (sl(e, t, s, l), t.child);
  }
  function Du(e, t) {
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
    );
  }
  function mp(e, t, l, a, s) {
    var c = _f();
    return (
      (c = c === null ? null : { parent: qt._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: l, cachePool: c }),
      e !== null && Ps(t, null),
      Tf(),
      _0(t),
      e !== null && br(e, t, a, !0),
      (t.childLanes = s),
      null
    );
  }
  function po(e, t) {
    return (
      (t = _o({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function pp(e, t, l) {
    return (
      Ui(t, e.child, null, l),
      (e = po(t, t.pendingProps)),
      (e.flags |= 2),
      en(t),
      (t.memoizedState = null),
      e
    );
  }
  function Fy(e, t, l) {
    var a = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ve) {
        if (a.mode === "hidden")
          return ((e = po(t, a)), (t.lanes = 536870912), Du(null, e));
        if (
          (Ef(t),
          (e = dt)
            ? ((e = Ag(e, Mn)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: qa !== null ? { id: Pn, overflow: In } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Pm(e)),
                (l.return = t),
                (t.child = l),
                (rl = t),
                (dt = null)))
            : (e = null),
          e === null)
        )
          throw Ga(t);
        return ((t.lanes = 536870912), null);
      }
      return po(t, a);
    }
    var c = e.memoizedState;
    if (c !== null) {
      var g = c.dehydrated;
      if ((Ef(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = pp(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(i(558));
      else if (
        (Gt || br(e, t, l, !1), (s = (l & e.childLanes) !== 0), Gt || s)
      ) {
        if (
          ((a = it),
          a !== null && ((g = ge(a, l)), g !== 0 && g !== c.retryLane))
        )
          throw ((c.retryLane = g), Ni(e, g), Ll(a, e, g), Zf);
        (zo(), (t = pp(e, t, l)));
      } else
        ((e = c.treeContext),
          (dt = Cn(g.nextSibling)),
          (rl = t),
          (Ve = !0),
          (La = null),
          (Mn = !1),
          e !== null && t0(t, e),
          (t = po(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = ha(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function go(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(i(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Kf(e, t, l, a, s) {
    return (
      ji(t),
      (l = Af(e, t, l, a, void 0, s)),
      (a = Nf()),
      e !== null && !Gt
        ? (Mf(e, t, s), ya(e, t, s))
        : (Ve && a && sf(t), (t.flags |= 1), sl(e, t, l, s), t.child)
    );
  }
  function gp(e, t, l, a, s, c) {
    return (
      ji(t),
      (t.updateQueue = null),
      (l = y0(t, a, l, s)),
      v0(e),
      (a = Nf()),
      e !== null && !Gt
        ? (Mf(e, t, c), ya(e, t, c))
        : (Ve && a && sf(t), (t.flags |= 1), sl(e, t, l, c), t.child)
    );
  }
  function _p(e, t, l, a, s) {
    if ((ji(t), t.stateNode === null)) {
      var c = gr,
        g = l.contextType;
      (typeof g == "object" && g !== null && (c = ul(g)),
        (c = new l(a, c)),
        (t.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = Vf),
        (t.stateNode = c),
        (c._reactInternals = t),
        (c = t.stateNode),
        (c.props = a),
        (c.state = t.memoizedState),
        (c.refs = {}),
        yf(t),
        (g = l.contextType),
        (c.context = typeof g == "object" && g !== null ? ul(g) : gr),
        (c.state = t.memoizedState),
        (g = l.getDerivedStateFromProps),
        typeof g == "function" && (Xf(t, l, g, a), (c.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((g = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          g !== c.state && Vf.enqueueReplaceState(c, c.state, null),
          Nu(t, a, c, s),
          Au(),
          (c.state = t.memoizedState)),
        typeof c.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      c = t.stateNode;
      var v = t.memoizedProps,
        w = Hi(l, v);
      c.props = w;
      var R = c.context,
        Z = l.contextType;
      ((g = gr), typeof Z == "object" && Z !== null && (g = ul(Z)));
      var $ = l.getDerivedStateFromProps;
      ((Z =
        typeof $ == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        Z ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || R !== g) && np(t, c, a, g)),
        (Va = !1));
      var k = t.memoizedState;
      ((c.state = k),
        Nu(t, a, c, s),
        Au(),
        (R = t.memoizedState),
        v || k !== R || Va
          ? (typeof $ == "function" && (Xf(t, l, $, a), (R = t.memoizedState)),
            (w = Va || lp(t, l, w, a, k, R, g))
              ? (Z ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = R)),
            (c.props = a),
            (c.state = R),
            (c.context = g),
            (a = w))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((c = t.stateNode),
        bf(e, t),
        (g = t.memoizedProps),
        (Z = Hi(l, g)),
        (c.props = Z),
        ($ = t.pendingProps),
        (k = c.context),
        (R = l.contextType),
        (w = gr),
        typeof R == "object" && R !== null && (w = ul(R)),
        (v = l.getDerivedStateFromProps),
        (R =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((g !== $ || k !== w) && np(t, c, a, w)),
        (Va = !1),
        (k = t.memoizedState),
        (c.state = k),
        Nu(t, a, c, s),
        Au());
      var H = t.memoizedState;
      g !== $ ||
      k !== H ||
      Va ||
      (e !== null && e.dependencies !== null && Ws(e.dependencies))
        ? (typeof v == "function" && (Xf(t, l, v, a), (H = t.memoizedState)),
          (Z =
            Va ||
            lp(t, l, Z, a, k, H, w) ||
            (e !== null && e.dependencies !== null && Ws(e.dependencies)))
            ? (R ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(a, H, w),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(a, H, w)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (g === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && k === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = H)),
          (c.props = a),
          (c.state = H),
          (c.context = w),
          (a = Z))
        : (typeof c.componentDidUpdate != "function" ||
            (g === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && k === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (c = a),
      go(e, t),
      (a = (t.flags & 128) !== 0),
      c || a
        ? ((c = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ui(t, e.child, null, s)),
              (t.child = Ui(t, null, l, s)))
            : sl(e, t, l, s),
          (t.memoizedState = c.state),
          (e = t.child))
        : (e = ya(e, t, s)),
      e
    );
  }
  function vp(e, t, l, a) {
    return (Oi(), (t.flags |= 256), sl(e, t, l, a), t.child);
  }
  var Jf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ff(e) {
    return { baseLanes: e, cachePool: u0() };
  }
  function Wf(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= ln), e);
  }
  function yp(e, t, l) {
    var a = t.pendingProps,
      s = !1,
      c = (t.flags & 128) !== 0,
      g;
    if (
      ((g = c) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : (Rt.current & 2) !== 0),
      g && ((s = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ve) {
        if (
          (s ? Ka(t) : Ja(),
          (e = dt)
            ? ((e = Ag(e, Mn)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: qa !== null ? { id: Pn, overflow: In } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Pm(e)),
                (l.return = t),
                (t.child = l),
                (rl = t),
                (dt = null)))
            : (e = null),
          e === null)
        )
          throw Ga(t);
        return (jd(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var v = a.children;
      return (
        (a = a.fallback),
        s
          ? (Ja(),
            (s = t.mode),
            (v = _o({ mode: "hidden", children: v }, s)),
            (a = Mi(a, s, l, null)),
            (v.return = t),
            (a.return = t),
            (v.sibling = a),
            (t.child = v),
            (a = t.child),
            (a.memoizedState = Ff(l)),
            (a.childLanes = Wf(e, g, l)),
            (t.memoizedState = Jf),
            Du(null, a))
          : (Ka(t), $f(t, v))
      );
    }
    var w = e.memoizedState;
    if (w !== null && ((v = w.dehydrated), v !== null)) {
      if (c)
        t.flags & 256
          ? (Ka(t), (t.flags &= -257), (t = Pf(e, t, l)))
          : t.memoizedState !== null
            ? (Ja(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ja(),
              (v = a.fallback),
              (s = t.mode),
              (a = _o({ mode: "visible", children: a.children }, s)),
              (v = Mi(v, s, l, null)),
              (v.flags |= 2),
              (a.return = t),
              (v.return = t),
              (a.sibling = v),
              (t.child = a),
              Ui(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Ff(l)),
              (a.childLanes = Wf(e, g, l)),
              (t.memoizedState = Jf),
              (t = Du(null, a)));
      else if ((Ka(t), jd(v))) {
        if (((g = v.nextSibling && v.nextSibling.dataset), g)) var R = g.dgst;
        ((g = R),
          (a = Error(i(419))),
          (a.stack = ""),
          (a.digest = g),
          xu({ value: a, source: null, stack: null }),
          (t = Pf(e, t, l)));
      } else if (
        (Gt || br(e, t, l, !1), (g = (l & e.childLanes) !== 0), Gt || g)
      ) {
        if (
          ((g = it),
          g !== null && ((a = ge(g, l)), a !== 0 && a !== w.retryLane))
        )
          throw ((w.retryLane = a), Ni(e, a), Ll(g, e, a), Zf);
        (Cd(v) || zo(), (t = Pf(e, t, l)));
      } else
        Cd(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (dt = Cn(v.nextSibling)),
            (rl = t),
            (Ve = !0),
            (La = null),
            (Mn = !1),
            e !== null && t0(t, e),
            (t = $f(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Ja(),
        (v = a.fallback),
        (s = t.mode),
        (w = e.child),
        (R = w.sibling),
        (a = ha(w, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = w.subtreeFlags & 65011712),
        R !== null ? (v = ha(R, v)) : ((v = Mi(v, s, l, null)), (v.flags |= 2)),
        (v.return = t),
        (a.return = t),
        (a.sibling = v),
        (t.child = a),
        Du(null, a),
        (a = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = Ff(l))
          : ((s = v.cachePool),
            s !== null
              ? ((w = qt._currentValue),
                (s = s.parent !== w ? { parent: w, pool: w } : s))
              : (s = u0()),
            (v = { baseLanes: v.baseLanes | l, cachePool: s })),
        (a.memoizedState = v),
        (a.childLanes = Wf(e, g, l)),
        (t.memoizedState = Jf),
        Du(e.child, a))
      : (Ka(t),
        (l = e.child),
        (e = l.sibling),
        (l = ha(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function $f(e, t) {
    return (
      (t = _o({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _o(e, t) {
    return ((e = Pl(22, e, null, t)), (e.lanes = 0), e);
  }
  function Pf(e, t, l) {
    return (
      Ui(t, e.child, null, l),
      (e = $f(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function bp(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), hf(e.return, t, l));
  }
  function If(e, t, l, a, s, c) {
    var g = e.memoizedState;
    g === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: s,
          treeForkCount: c,
        })
      : ((g.isBackwards = t),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = a),
        (g.tail = l),
        (g.tailMode = s),
        (g.treeForkCount = c));
  }
  function xp(e, t, l) {
    var a = t.pendingProps,
      s = a.revealOrder,
      c = a.tail;
    a = a.children;
    var g = Rt.current,
      v = (g & 2) !== 0;
    if (
      (v ? ((g = (g & 1) | 2), (t.flags |= 128)) : (g &= 1),
      P(Rt, g),
      sl(e, t, a, l),
      (a = Ve ? bu : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bp(e, l, t);
        else if (e.tag === 19) bp(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (s) {
      case "forwards":
        for (l = t.child, s = null; l !== null; )
          ((e = l.alternate),
            e !== null && ao(e) === null && (s = l),
            (l = l.sibling));
        ((l = s),
          l === null
            ? ((s = t.child), (t.child = null))
            : ((s = l.sibling), (l.sibling = null)),
          If(t, !1, s, l, c, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ao(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = l), (l = s), (s = e));
        }
        If(t, !0, l, null, c, a);
        break;
      case "together":
        If(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ya(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      ($a |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((br(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, l = ha(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = ha(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function ed(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Ws(e)));
  }
  function Wy(e, t, l) {
    switch (t.tag) {
      case 3:
        (Ze(t, t.stateNode.containerInfo),
          Xa(t, qt, e.memoizedState.cache),
          Oi());
        break;
      case 27:
      case 5:
        Jt(t);
        break;
      case 4:
        Ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Ef(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Ka(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? yp(e, t, l)
              : (Ka(t), (e = ya(e, t, l)), e !== null ? e.sibling : null);
        Ka(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (br(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          s)
        ) {
          if (a) return xp(e, t, l);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          P(Rt, Rt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), hp(e, t, l, t.pendingProps));
      case 24:
        Xa(t, qt, e.memoizedState.cache);
    }
    return ya(e, t, l);
  }
  function Sp(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Gt = !0;
      else {
        if (!ed(e, l) && (t.flags & 128) === 0) return ((Gt = !1), Wy(e, t, l));
        Gt = (e.flags & 131072) !== 0;
      }
    else ((Gt = !1), Ve && (t.flags & 1048576) !== 0 && e0(t, bu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ri(t.elementType)), (t.type = e), typeof e == "function"))
            af(e)
              ? ((a = Hi(e, a)), (t.tag = 1), (t = _p(null, t, e, a, l)))
              : ((t.tag = 0), (t = Kf(null, t, e, a, l)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === U) {
                ((t.tag = 11), (t = cp(null, t, e, a, l)));
                break e;
              } else if (s === D) {
                ((t.tag = 14), (t = fp(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = ye(e) || e), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return Kf(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (s = Hi(a, t.pendingProps)), _p(e, t, a, s, l));
      case 3:
        e: {
          if ((Ze(t, t.stateNode.containerInfo), e === null))
            throw Error(i(387));
          a = t.pendingProps;
          var c = t.memoizedState;
          ((s = c.element), bf(e, t), Nu(t, a, null, l));
          var g = t.memoizedState;
          if (
            ((a = g.cache),
            Xa(t, qt, a),
            a !== c.cache && mf(t, [qt], l, !0),
            Au(),
            (a = g.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: a, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              t = vp(e, t, a, l);
              break e;
            } else if (a !== s) {
              ((s = zn(Error(i(424)), t)), xu(s), (t = vp(e, t, a, l)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  dt = Cn(e.firstChild),
                  rl = t,
                  Ve = !0,
                  La = null,
                  Mn = !0,
                  l = h0(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Oi(), a === s)) {
              t = ya(e, t, l);
              break e;
            }
            sl(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          go(e, t),
          e === null
            ? (l = Dg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ve ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Do(me.current).createElement(l)),
                (a[Oe] = t),
                (a[je] = e),
                ol(a, l, e),
                Ue(a),
                (t.stateNode = a))
            : (t.memoizedState = Dg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Jt(t),
          e === null &&
            Ve &&
            ((a = t.stateNode = Og(t.type, t.pendingProps, me.current)),
            (rl = t),
            (Mn = !0),
            (s = dt),
            li(t.type) ? ((Dd = s), (dt = Cn(a.firstChild))) : (dt = s)),
          sl(e, t, t.pendingProps.children, l),
          go(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ve &&
            ((s = a = dt) &&
              ((a = zb(a, t.type, t.pendingProps, Mn)),
              a !== null
                ? ((t.stateNode = a),
                  (rl = t),
                  (dt = Cn(a.firstChild)),
                  (Mn = !1),
                  (s = !0))
                : (s = !1)),
            s || Ga(t)),
          Jt(t),
          (s = t.type),
          (c = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (a = c.children),
          Nd(s, c) ? (a = null) : g !== null && Nd(s, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Af(e, t, Ly, null, null, l)), (Ju._currentValue = s)),
          go(e, t),
          sl(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ve &&
            ((e = l = dt) &&
              ((l = Ab(l, t.pendingProps, Mn)),
              l !== null
                ? ((t.stateNode = l), (rl = t), (dt = null), (e = !0))
                : (e = !1)),
            e || Ga(t)),
          null
        );
      case 13:
        return yp(e, t, l);
      case 4:
        return (
          Ze(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ui(t, null, a, l)) : sl(e, t, a, l),
          t.child
        );
      case 11:
        return cp(e, t, t.type, t.pendingProps, l);
      case 7:
        return (sl(e, t, t.pendingProps, l), t.child);
      case 8:
        return (sl(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (sl(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Xa(t, t.type, a.value),
          sl(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (a = t.pendingProps.children),
          ji(t),
          (s = ul(s)),
          (a = a(s)),
          (t.flags |= 1),
          sl(e, t, a, l),
          t.child
        );
      case 14:
        return fp(e, t, t.type, t.pendingProps, l);
      case 15:
        return dp(e, t, t.type, t.pendingProps, l);
      case 19:
        return xp(e, t, l);
      case 31:
        return Fy(e, t, l);
      case 22:
        return hp(e, t, l, t.pendingProps);
      case 24:
        return (
          ji(t),
          (a = ul(qt)),
          e === null
            ? ((s = _f()),
              s === null &&
                ((s = it),
                (c = pf()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= l),
                (s = c)),
              (t.memoizedState = { parent: a, cache: s }),
              yf(t),
              Xa(t, qt, s))
            : ((e.lanes & l) !== 0 && (bf(e, t), Nu(t, null, null, l), Au()),
              (s = e.memoizedState),
              (c = t.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Xa(t, qt, a))
                : ((a = c.cache),
                  Xa(t, qt, a),
                  a !== s.cache && mf(t, [qt], l, !0))),
          sl(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function ba(e) {
    e.flags |= 4;
  }
  function td(e, t, l, a, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Fp()) e.flags |= 8192;
        else throw ((ki = eo), vf);
    } else e.flags &= -16777217;
  }
  function Tp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Hg(t)))
      if (Fp()) e.flags |= 8192;
      else throw ((ki = eo), vf);
  }
  function vo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ba() : 536870912), (e.lanes |= t), (jr |= t)));
  }
  function Ru(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((l |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((l |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function $y(e, t, l) {
    var a = t.pendingProps;
    switch ((of(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ht(t), null);
      case 1:
        return (ht(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          ga(qt),
          ze(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (yr(t)
              ? ba(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ff())),
          ht(t),
          null
        );
      case 26:
        var s = t.type,
          c = t.memoizedState;
        return (
          e === null
            ? (ba(t),
              c !== null ? (ht(t), Tp(t, c)) : (ht(t), td(t, s, null, a, l)))
            : c
              ? c !== e.memoizedState
                ? (ba(t), ht(t), Tp(t, c))
                : (ht(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && ba(t),
                ht(t),
                td(t, s, e, a, l)),
          null
        );
      case 27:
        if (
          (mt(t),
          (l = me.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && ba(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return (ht(t), null);
          }
          ((e = ee.current),
            yr(t) ? l0(t) : ((e = Og(s, a, l)), (t.stateNode = e), ba(t)));
        }
        return (ht(t), null);
      case 5:
        if ((mt(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && ba(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return (ht(t), null);
          }
          if (((c = ee.current), yr(t))) l0(t);
          else {
            var g = Do(me.current);
            switch (c) {
              case 1:
                c = g.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = g.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = g.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((c = g.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof a.is == "string"
                        ? g.createElement("select", { is: a.is })
                        : g.createElement("select")),
                      a.multiple
                        ? (c.multiple = !0)
                        : a.size && (c.size = a.size));
                    break;
                  default:
                    c =
                      typeof a.is == "string"
                        ? g.createElement(s, { is: a.is })
                        : g.createElement(s);
                }
            }
            ((c[Oe] = t), (c[je] = a));
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6) c.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                ((g.child.return = g), (g = g.child));
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t) break e;
                g = g.return;
              }
              ((g.sibling.return = g.return), (g = g.sibling));
            }
            t.stateNode = c;
            e: switch ((ol(c, s, a), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && ba(t);
          }
        }
        return (
          ht(t),
          td(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && ba(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((e = me.current), yr(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (s = rl),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((e[Oe] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                yg(e.nodeValue, l)
              )),
              e || Ga(t, !0));
          } else
            ((e = Do(e).createTextNode(a)), (e[Oe] = t), (t.stateNode = e));
        }
        return (ht(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = yr(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(i(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(i(557));
              e[Oe] = t;
            } else
              (Oi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ht(t), (e = !1));
          } else
            ((l = ff()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (en(t), t) : (en(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return (ht(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = yr(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(i(317));
              s[Oe] = t;
            } else
              (Oi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (ht(t), (s = !1));
          } else
            ((s = ff()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (en(t), t) : (en(t), null);
        }
        return (
          en(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (c = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (c = a.memoizedState.cachePool.pool),
                c !== s && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              vo(t, t.updateQueue),
              ht(t),
              null)
        );
      case 4:
        return (ze(), e === null && Td(t.stateNode.containerInfo), ht(t), null);
      case 10:
        return (ga(t.type), ht(t), null);
      case 19:
        if ((L(Rt), (a = t.memoizedState), a === null)) return (ht(t), null);
        if (((s = (t.flags & 128) !== 0), (c = a.rendering), c === null))
          if (s) Ru(a, !1);
          else {
            if (Ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = ao(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Ru(a, !1),
                      e = c.updateQueue,
                      t.updateQueue = e,
                      vo(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    ($m(l, e), (l = l.sibling));
                  return (
                    P(Rt, (Rt.current & 1) | 2),
                    Ve && ma(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              jt() > To &&
              ((t.flags |= 128), (s = !0), Ru(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = ao(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                vo(t, e),
                Ru(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ve)
              )
                return (ht(t), null);
            } else
              2 * jt() - a.renderingStartTime > To &&
                l !== 536870912 &&
                ((t.flags |= 128), (s = !0), Ru(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((e = a.last),
              e !== null ? (e.sibling = c) : (t.child = c),
              (a.last = c));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = jt()),
            (e.sibling = null),
            (l = Rt.current),
            P(Rt, s ? (l & 1) | 2 : l & 1),
            Ve && ma(t, a.treeForkCount),
            e)
          : (ht(t), null);
      case 22:
      case 23:
        return (
          en(t),
          wf(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ht(t),
          (l = t.updateQueue),
          l !== null && vo(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && L(Di),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          ga(qt),
          ht(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Py(e, t) {
    switch ((of(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          ga(qt),
          ze(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (mt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((en(t), t.alternate === null)) throw Error(i(340));
          Oi();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (en(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Oi();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (L(Rt), null);
      case 4:
        return (ze(), null);
      case 10:
        return (ga(t.type), null);
      case 22:
      case 23:
        return (
          en(t),
          wf(),
          e !== null && L(Di),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (ga(qt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function wp(e, t) {
    switch ((of(t), t.tag)) {
      case 3:
        (ga(qt), ze());
        break;
      case 26:
      case 27:
      case 5:
        mt(t);
        break;
      case 4:
        ze();
        break;
      case 31:
        t.memoizedState !== null && en(t);
        break;
      case 13:
        en(t);
        break;
      case 19:
        L(Rt);
        break;
      case 10:
        ga(t.type);
        break;
      case 22:
      case 23:
        (en(t), wf(), e !== null && L(Di));
        break;
      case 24:
        ga(qt);
    }
  }
  function ku(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var c = l.create,
              g = l.inst;
            ((a = c()), (g.destroy = a));
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (v) {
      tt(t, t.return, v);
    }
  }
  function Fa(e, t, l) {
    try {
      var a = t.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            var g = a.inst,
              v = g.destroy;
            if (v !== void 0) {
              ((g.destroy = void 0), (s = t));
              var w = l,
                R = v;
              try {
                R();
              } catch (Z) {
                tt(s, w, Z);
              }
            }
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (Z) {
      tt(t, t.return, Z);
    }
  }
  function Ep(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        p0(t, l);
      } catch (a) {
        tt(e, e.return, a);
      }
    }
  }
  function zp(e, t, l) {
    ((l.props = Hi(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      tt(e, t, a);
    }
  }
  function Uu(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (s) {
      tt(e, t, s);
    }
  }
  function ea(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          tt(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (s) {
          tt(e, t, s);
        }
      else l.current = null;
  }
  function Ap(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (s) {
      tt(e, e.return, s);
    }
  }
  function ld(e, t, l) {
    try {
      var a = e.stateNode;
      (bb(a, e.type, l, t), (a[je] = t));
    } catch (s) {
      tt(e, e.return, s);
    }
  }
  function Np(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && li(e.type)) ||
      e.tag === 4
    );
  }
  function nd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Np(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && li(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ad(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = fa)));
    else if (
      a !== 4 &&
      (a === 27 && li(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ad(e, t, l), e = e.sibling; e !== null; )
        (ad(e, t, l), (e = e.sibling));
  }
  function yo(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && li(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (yo(e, t, l), e = e.sibling; e !== null; )
        (yo(e, t, l), (e = e.sibling));
  }
  function Mp(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (ol(t, a, l), (t[Oe] = e), (t[je] = l));
    } catch (c) {
      tt(e, e.return, c);
    }
  }
  var xa = !1,
    Xt = !1,
    id = !1,
    Op = typeof WeakSet == "function" ? WeakSet : Set,
    tl = null;
  function Iy(e, t) {
    if (((e = e.containerInfo), (zd = qo), (e = Gm(e)), $c(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var s = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, c.nodeType);
            } catch {
              l = null;
              break e;
            }
            var g = 0,
              v = -1,
              w = -1,
              R = 0,
              Z = 0,
              $ = e,
              k = null;
            t: for (;;) {
              for (
                var H;
                $ !== l || (s !== 0 && $.nodeType !== 3) || (v = g + s),
                  $ !== c || (a !== 0 && $.nodeType !== 3) || (w = g + a),
                  $.nodeType === 3 && (g += $.nodeValue.length),
                  (H = $.firstChild) !== null;
              )
                ((k = $), ($ = H));
              for (;;) {
                if ($ === e) break t;
                if (
                  (k === l && ++R === s && (v = g),
                  k === c && ++Z === a && (w = g),
                  (H = $.nextSibling) !== null)
                )
                  break;
                (($ = k), (k = $.parentNode));
              }
              $ = H;
            }
            l = v === -1 || w === -1 ? null : { start: v, end: w };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Ad = { focusedElem: e, selectionRange: l }, qo = !1, tl = t;
      tl !== null;
    )
      if (
        ((t = tl), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (tl = e));
      else
        for (; tl !== null; ) {
          switch (((t = tl), (c = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((s = e[l]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && c !== null) {
                ((e = void 0),
                  (l = t),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (a = l.stateNode));
                try {
                  var re = Hi(l.type, s);
                  ((e = a.getSnapshotBeforeUpdate(re, c)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (be) {
                  tt(l, l.return, be);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Od(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Od(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (tl = e));
            break;
          }
          tl = t.return;
        }
  }
  function Cp(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Ta(e, l), a & 4 && ku(5, l));
        break;
      case 1:
        if ((Ta(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              tt(l, l.return, g);
            }
          else {
            var s = Hi(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              tt(l, l.return, g);
            }
          }
        (a & 64 && Ep(l), a & 512 && Uu(l, l.return));
        break;
      case 3:
        if ((Ta(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            p0(e, t);
          } catch (g) {
            tt(l, l.return, g);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Mp(l);
      case 26:
      case 5:
        (Ta(e, l), t === null && a & 4 && Ap(l), a & 512 && Uu(l, l.return));
        break;
      case 12:
        Ta(e, l);
        break;
      case 31:
        (Ta(e, l), a & 4 && Rp(e, l));
        break;
      case 13:
        (Ta(e, l),
          a & 4 && kp(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = sb.bind(null, l)), Nb(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || xa), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Xt), (s = xa));
          var c = Xt;
          ((xa = a),
            (Xt = t) && !c ? wa(e, l, (l.subtreeFlags & 8772) !== 0) : Ta(e, l),
            (xa = s),
            (Xt = c));
        }
        break;
      case 30:
        break;
      default:
        Ta(e, l);
    }
  }
  function jp(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), jp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Dt(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var vt = null,
    Bl = !1;
  function Sa(e, t, l) {
    for (l = l.child; l !== null; ) (Dp(e, t, l), (l = l.sibling));
  }
  function Dp(e, t, l) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(Kn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Xt || ea(l, t),
          Sa(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Xt || ea(l, t);
        var a = vt,
          s = Bl;
        (li(l.type) && ((vt = l.stateNode), (Bl = !1)),
          Sa(e, t, l),
          Qu(l.stateNode),
          (vt = a),
          (Bl = s));
        break;
      case 5:
        Xt || ea(l, t);
      case 6:
        if (
          ((a = vt),
          (s = Bl),
          (vt = null),
          Sa(e, t, l),
          (vt = a),
          (Bl = s),
          vt !== null)
        )
          if (Bl)
            try {
              (vt.nodeType === 9
                ? vt.body
                : vt.nodeName === "HTML"
                  ? vt.ownerDocument.body
                  : vt
              ).removeChild(l.stateNode);
            } catch (c) {
              tt(l, t, c);
            }
          else
            try {
              vt.removeChild(l.stateNode);
            } catch (c) {
              tt(l, t, c);
            }
        break;
      case 18:
        vt !== null &&
          (Bl
            ? ((e = vt),
              Eg(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              qr(e))
            : Eg(vt, l.stateNode));
        break;
      case 4:
        ((a = vt),
          (s = Bl),
          (vt = l.stateNode.containerInfo),
          (Bl = !0),
          Sa(e, t, l),
          (vt = a),
          (Bl = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Fa(2, l, t), Xt || Fa(4, l, t), Sa(e, t, l));
        break;
      case 1:
        (Xt ||
          (ea(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && zp(l, t, a)),
          Sa(e, t, l));
        break;
      case 21:
        Sa(e, t, l);
        break;
      case 22:
        ((Xt = (a = Xt) || l.memoizedState !== null), Sa(e, t, l), (Xt = a));
        break;
      default:
        Sa(e, t, l);
    }
  }
  function Rp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        qr(e);
      } catch (l) {
        tt(t, t.return, l);
      }
    }
  }
  function kp(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        qr(e);
      } catch (l) {
        tt(t, t.return, l);
      }
  }
  function eb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Op()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Op()),
          t
        );
      default:
        throw Error(i(435, e.tag));
    }
  }
  function bo(e, t) {
    var l = eb(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var s = ob.bind(null, e, a);
        a.then(s, s);
      }
    });
  }
  function Hl(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var s = l[a],
          c = e,
          g = t,
          v = g;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (li(v.type)) {
                ((vt = v.stateNode), (Bl = !1));
                break e;
              }
              break;
            case 5:
              ((vt = v.stateNode), (Bl = !1));
              break e;
            case 3:
            case 4:
              ((vt = v.stateNode.containerInfo), (Bl = !0));
              break e;
          }
          v = v.return;
        }
        if (vt === null) throw Error(i(160));
        (Dp(c, g, s),
          (vt = null),
          (Bl = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Up(t, e), (t = t.sibling));
  }
  var Xn = null;
  function Up(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Hl(t, e),
          Yl(e),
          a & 4 && (Fa(3, e, e.return), ku(3, e), Fa(5, e, e.return)));
        break;
      case 1:
        (Hl(t, e),
          Yl(e),
          a & 512 && (Xt || l === null || ea(l, l.return)),
          a & 64 &&
            xa &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var s = Xn;
        if (
          (Hl(t, e),
          Yl(e),
          a & 512 && (Xt || l === null || ea(l, l.return)),
          a & 4)
        ) {
          var c = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (s = s.ownerDocument || s));
                  t: switch (a) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[xt] ||
                          c[Oe] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(a)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        ol(c, a, l),
                        (c[Oe] = e),
                        Ue(c),
                        (a = c));
                      break e;
                    case "link":
                      var g = Ug("link", "href", s).get(a + (l.href || ""));
                      if (g) {
                        for (var v = 0; v < g.length; v++)
                          if (
                            ((c = g[v]),
                            c.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              c.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              c.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              c.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(a)),
                        ol(c, a, l),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (g = Ug("meta", "content", s).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (v = 0; v < g.length; v++)
                          if (
                            ((c = g[v]),
                            c.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              c.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              c.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            g.splice(v, 1);
                            break t;
                          }
                      }
                      ((c = s.createElement(a)),
                        ol(c, a, l),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(i(468, a));
                  }
                  ((c[Oe] = e), Ue(c), (a = c));
                }
                e.stateNode = a;
              } else Bg(s, e.type, e.stateNode);
            else e.stateNode = kg(s, a, e.memoizedProps);
          else
            c !== a
              ? (c === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                a === null
                  ? Bg(s, e.type, e.stateNode)
                  : kg(s, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                ld(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Hl(t, e),
          Yl(e),
          a & 512 && (Xt || l === null || ea(l, l.return)),
          l !== null && a & 4 && ld(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Hl(t, e),
          Yl(e),
          a & 512 && (Xt || l === null || ea(l, l.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            or(s, "");
          } catch (re) {
            tt(e, e.return, re);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), ld(e, s, l !== null ? l.memoizedProps : s)),
          a & 1024 && (id = !0));
        break;
      case 6:
        if ((Hl(t, e), Yl(e), a & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (re) {
            tt(e, e.return, re);
          }
        }
        break;
      case 3:
        if (
          ((Uo = null),
          (s = Xn),
          (Xn = Ro(t.containerInfo)),
          Hl(t, e),
          (Xn = s),
          Yl(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            qr(t.containerInfo);
          } catch (re) {
            tt(e, e.return, re);
          }
        id && ((id = !1), Bp(e));
        break;
      case 4:
        ((a = Xn),
          (Xn = Ro(e.stateNode.containerInfo)),
          Hl(t, e),
          Yl(e),
          (Xn = a));
        break;
      case 12:
        (Hl(t, e), Yl(e));
        break;
      case 31:
        (Hl(t, e),
          Yl(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bo(e, a))));
        break;
      case 13:
        (Hl(t, e),
          Yl(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (So = jt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bo(e, a))));
        break;
      case 22:
        s = e.memoizedState !== null;
        var w = l !== null && l.memoizedState !== null,
          R = xa,
          Z = Xt;
        if (
          ((xa = R || s),
          (Xt = Z || w),
          Hl(t, e),
          (Xt = Z),
          (xa = R),
          Yl(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (l === null || w || xa || Xt || Yi(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                w = l = t;
                try {
                  if (((c = w.stateNode), s))
                    ((g = c.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none"));
                  else {
                    v = w.stateNode;
                    var $ = w.memoizedProps.style,
                      k =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    v.style.display =
                      k == null || typeof k == "boolean" ? "" : ("" + k).trim();
                  }
                } catch (re) {
                  tt(w, w.return, re);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = s ? "" : w.memoizedProps;
                } catch (re) {
                  tt(w, w.return, re);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                w = t;
                try {
                  var H = w.stateNode;
                  s ? zg(H, !0) : zg(w.stateNode, !1);
                } catch (re) {
                  tt(w, w.return, re);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), bo(e, l))));
        break;
      case 19:
        (Hl(t, e),
          Yl(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), bo(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Hl(t, e), Yl(e));
    }
  }
  function Yl(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Np(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(i(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              c = nd(e);
            yo(e, c, s);
            break;
          case 5:
            var g = l.stateNode;
            l.flags & 32 && (or(g, ""), (l.flags &= -33));
            var v = nd(e);
            yo(e, v, g);
            break;
          case 3:
          case 4:
            var w = l.stateNode.containerInfo,
              R = nd(e);
            ad(e, R, w);
            break;
          default:
            throw Error(i(161));
        }
      } catch (Z) {
        tt(e, e.return, Z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Bp(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Ta(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Cp(e, t.alternate, t), (t = t.sibling));
  }
  function Yi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Fa(4, t, t.return), Yi(t));
          break;
        case 1:
          ea(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && zp(t, t.return, l),
            Yi(t));
          break;
        case 27:
          Qu(t.stateNode);
        case 26:
        case 5:
          (ea(t, t.return), Yi(t));
          break;
        case 22:
          t.memoizedState === null && Yi(t);
          break;
        case 30:
          Yi(t);
          break;
        default:
          Yi(t);
      }
      e = e.sibling;
    }
  }
  function wa(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        s = e,
        c = t,
        g = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (wa(s, c, l), ku(4, c));
          break;
        case 1:
          if (
            (wa(s, c, l),
            (a = c),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (R) {
              tt(a, a.return, R);
            }
          if (((a = c), (s = a.updateQueue), s !== null)) {
            var v = a.stateNode;
            try {
              var w = s.shared.hiddenCallbacks;
              if (w !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < w.length; s++)
                  m0(w[s], v);
            } catch (R) {
              tt(a, a.return, R);
            }
          }
          (l && g & 64 && Ep(c), Uu(c, c.return));
          break;
        case 27:
          Mp(c);
        case 26:
        case 5:
          (wa(s, c, l), l && a === null && g & 4 && Ap(c), Uu(c, c.return));
          break;
        case 12:
          wa(s, c, l);
          break;
        case 31:
          (wa(s, c, l), l && g & 4 && Rp(s, c));
          break;
        case 13:
          (wa(s, c, l), l && g & 4 && kp(s, c));
          break;
        case 22:
          (c.memoizedState === null && wa(s, c, l), Uu(c, c.return));
          break;
        case 30:
          break;
        default:
          wa(s, c, l);
      }
      t = t.sibling;
    }
  }
  function rd(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Su(l)));
  }
  function ud(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Su(e)));
  }
  function Vn(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Hp(e, t, l, a), (t = t.sibling));
  }
  function Hp(e, t, l, a) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Vn(e, t, l, a), s & 2048 && ku(9, t));
        break;
      case 1:
        Vn(e, t, l, a);
        break;
      case 3:
        (Vn(e, t, l, a),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Su(e))));
        break;
      case 12:
        if (s & 2048) {
          (Vn(e, t, l, a), (e = t.stateNode));
          try {
            var c = t.memoizedProps,
              g = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (w) {
            tt(t, t.return, w);
          }
        } else Vn(e, t, l, a);
        break;
      case 31:
        Vn(e, t, l, a);
        break;
      case 13:
        Vn(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((c = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? c._visibility & 2
              ? Vn(e, t, l, a)
              : Bu(e, t)
            : c._visibility & 2
              ? Vn(e, t, l, a)
              : ((c._visibility |= 2),
                Mr(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && rd(g, t));
        break;
      case 24:
        (Vn(e, t, l, a), s & 2048 && ud(t.alternate, t));
        break;
      default:
        Vn(e, t, l, a);
    }
  }
  function Mr(e, t, l, a, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var c = e,
        g = t,
        v = l,
        w = a,
        R = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          (Mr(c, g, v, w, s), ku(8, g));
          break;
        case 23:
          break;
        case 22:
          var Z = g.stateNode;
          (g.memoizedState !== null
            ? Z._visibility & 2
              ? Mr(c, g, v, w, s)
              : Bu(c, g)
            : ((Z._visibility |= 2), Mr(c, g, v, w, s)),
            s && R & 2048 && rd(g.alternate, g));
          break;
        case 24:
          (Mr(c, g, v, w, s), s && R & 2048 && ud(g.alternate, g));
          break;
        default:
          Mr(c, g, v, w, s);
      }
      t = t.sibling;
    }
  }
  function Bu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (Bu(l, a), s & 2048 && rd(a.alternate, a));
            break;
          case 24:
            (Bu(l, a), s & 2048 && ud(a.alternate, a));
            break;
          default:
            Bu(l, a);
        }
        t = t.sibling;
      }
  }
  var Hu = 8192;
  function Or(e, t, l) {
    if (e.subtreeFlags & Hu)
      for (e = e.child; e !== null; ) (Yp(e, t, l), (e = e.sibling));
  }
  function Yp(e, t, l) {
    switch (e.tag) {
      case 26:
        (Or(e, t, l),
          e.flags & Hu &&
            e.memoizedState !== null &&
            qb(l, Xn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Or(e, t, l);
        break;
      case 3:
      case 4:
        var a = Xn;
        ((Xn = Ro(e.stateNode.containerInfo)), Or(e, t, l), (Xn = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Hu), (Hu = 16777216), Or(e, t, l), (Hu = a))
            : Or(e, t, l));
        break;
      default:
        Or(e, t, l);
    }
  }
  function qp(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Yu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((tl = a), Gp(a, e));
        }
      qp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Lp(e), (e = e.sibling));
  }
  function Lp(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Yu(e), e.flags & 2048 && Fa(9, e, e.return));
        break;
      case 3:
        Yu(e);
        break;
      case 12:
        Yu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), xo(e))
          : Yu(e);
        break;
      default:
        Yu(e);
    }
  }
  function xo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((tl = a), Gp(a, e));
        }
      qp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Fa(8, t, t.return), xo(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), xo(t)));
          break;
        default:
          xo(t);
      }
      e = e.sibling;
    }
  }
  function Gp(e, t) {
    for (; tl !== null; ) {
      var l = tl;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Fa(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Su(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (tl = a));
      else
        e: for (l = e; tl !== null; ) {
          a = tl;
          var s = a.sibling,
            c = a.return;
          if ((jp(a), a === l)) {
            tl = null;
            break e;
          }
          if (s !== null) {
            ((s.return = c), (tl = s));
            break e;
          }
          tl = c;
        }
    }
  }
  var tb = {
      getCacheForType: function (e) {
        var t = ul(qt),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return ul(qt).controller.signal;
      },
    },
    lb = typeof WeakMap == "function" ? WeakMap : Map,
    $e = 0,
    it = null,
    Ye = null,
    Ge = 0,
    et = 0,
    tn = null,
    Wa = !1,
    Cr = !1,
    sd = !1,
    Ea = 0,
    Ot = 0,
    $a = 0,
    qi = 0,
    od = 0,
    ln = 0,
    jr = 0,
    qu = null,
    ql = null,
    cd = !1,
    So = 0,
    Xp = 0,
    To = 1 / 0,
    wo = null,
    Pa = null,
    Wt = 0,
    Ia = null,
    Dr = null,
    za = 0,
    fd = 0,
    dd = null,
    Vp = null,
    Lu = 0,
    hd = null;
  function nn() {
    return ($e & 2) !== 0 && Ge !== 0 ? Ge & -Ge : C.T !== null ? yd() : ke();
  }
  function Qp() {
    if (ln === 0)
      if ((Ge & 536870912) === 0 || Ve) {
        var e = pl;
        ((pl <<= 1), (pl & 3932160) === 0 && (pl = 262144), (ln = e));
      } else ln = 536870912;
    return ((e = Il.current), e !== null && (e.flags |= 32), ln);
  }
  function Ll(e, t, l) {
    (((e === it && (et === 2 || et === 9)) || e.cancelPendingCommit !== null) &&
      (Rr(e, 0), ei(e, Ge, ln, !1)),
      pe(e, l),
      (($e & 2) === 0 || e !== it) &&
        (e === it &&
          (($e & 2) === 0 && (qi |= l), Ot === 4 && ei(e, Ge, ln, !1)),
        ta(e)));
  }
  function Zp(e, t, l) {
    if (($e & 6) !== 0) throw Error(i(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || bn(e, t),
      s = a ? ib(e, t) : pd(e, t, !0),
      c = a;
    do {
      if (s === 0) {
        Cr && !a && ei(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), c && !nb(l))) {
          ((s = pd(e, t, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = t), e.errorRecoveryDisabledLanes & c)) var g = 0;
          else
            ((g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0));
          if (g !== 0) {
            t = g;
            e: {
              var v = e;
              s = qu;
              var w = v.current.memoizedState.isDehydrated;
              if ((w && (Rr(v, g).flags |= 256), (g = pd(v, g, !1)), g !== 2)) {
                if (sd && !w) {
                  ((v.errorRecoveryDisabledLanes |= c), (qi |= c), (s = 4));
                  break e;
                }
                ((c = ql),
                  (ql = s),
                  c !== null &&
                    (ql === null ? (ql = c) : ql.push.apply(ql, c)));
              }
              s = g;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Rr(e, 0), ei(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (c = s), c)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ei(a, t, ln, !Wa);
              break e;
            case 2:
              ql = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((s = So + 300 - jt()), 10 < s)) {
            if ((ei(a, t, ln, !Wa), yn(a, 0, !0) !== 0)) break e;
            ((za = t),
              (a.timeoutHandle = Tg(
                Kp.bind(
                  null,
                  a,
                  l,
                  ql,
                  wo,
                  cd,
                  t,
                  ln,
                  qi,
                  jr,
                  Wa,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break e;
          }
          Kp(a, l, ql, wo, cd, t, ln, qi, jr, Wa, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ta(e);
  }
  function Kp(e, t, l, a, s, c, g, v, w, R, Z, $, k, H) {
    if (
      ((e.timeoutHandle = -1),
      ($ = t.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      (($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fa,
      }),
        Yp(t, c, $));
      var re =
        (c & 62914560) === c ? So - jt() : (c & 4194048) === c ? Xp - jt() : 0;
      if (((re = Lb($, re)), re !== null)) {
        ((za = c),
          (e.cancelPendingCommit = re(
            tg.bind(null, e, t, c, l, a, s, g, v, w, Z, $, null, k, H),
          )),
          ei(e, c, g, !R));
        return;
      }
    }
    tg(e, t, c, l, a, s, g, v, w);
  }
  function nb(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var s = l[a],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!$l(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ei(e, t, l, a) {
    ((t &= ~od),
      (t &= ~qi),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var c = 31 - Yt(s),
        g = 1 << c;
      ((a[c] = -1), (s &= ~g));
    }
    l !== 0 && ne(e, l, t);
  }
  function Eo() {
    return ($e & 6) === 0 ? (Gu(0), !1) : !0;
  }
  function md() {
    if (Ye !== null) {
      if (et === 0) var e = Ye.return;
      else ((e = Ye), (pa = Ci = null), Of(e), (wr = null), (wu = 0), (e = Ye));
      for (; e !== null; ) (wp(e.alternate, e), (e = e.return));
      Ye = null;
    }
  }
  function Rr(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Tb(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (za = 0),
      md(),
      (it = e),
      (Ye = l = ha(e.current, null)),
      (Ge = t),
      (et = 0),
      (tn = null),
      (Wa = !1),
      (Cr = bn(e, t)),
      (sd = !1),
      (jr = ln = od = qi = $a = Ot = 0),
      (ql = qu = null),
      (cd = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var s = 31 - Yt(a),
          c = 1 << s;
        ((t |= e[s]), (a &= ~c));
      }
    return ((Ea = t), Qs(), l);
  }
  function Jp(e, t) {
    ((Ae = null),
      (C.H = ju),
      t === Tr || t === Is
        ? ((t = c0()), (et = 3))
        : t === vf
          ? ((t = c0()), (et = 4))
          : (et =
              t === Zf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (tn = t),
      Ye === null && ((Ot = 1), mo(e, zn(t, e.current))));
  }
  function Fp() {
    var e = Il.current;
    return e === null
      ? !0
      : (Ge & 4194048) === Ge
        ? On === null
        : (Ge & 62914560) === Ge || (Ge & 536870912) !== 0
          ? e === On
          : !1;
  }
  function Wp() {
    var e = C.H;
    return ((C.H = ju), e === null ? ju : e);
  }
  function $p() {
    var e = C.A;
    return ((C.A = tb), e);
  }
  function zo() {
    ((Ot = 4),
      Wa || ((Ge & 4194048) !== Ge && Il.current !== null) || (Cr = !0),
      (($a & 134217727) === 0 && (qi & 134217727) === 0) ||
        it === null ||
        ei(it, Ge, ln, !1));
  }
  function pd(e, t, l) {
    var a = $e;
    $e |= 2;
    var s = Wp(),
      c = $p();
    ((it !== e || Ge !== t) && ((wo = null), Rr(e, t)), (t = !1));
    var g = Ot;
    e: do
      try {
        if (et !== 0 && Ye !== null) {
          var v = Ye,
            w = tn;
          switch (et) {
            case 8:
              (md(), (g = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Il.current === null && (t = !0);
              var R = et;
              if (((et = 0), (tn = null), kr(e, v, w, R), l && Cr)) {
                g = 0;
                break e;
              }
              break;
            default:
              ((R = et), (et = 0), (tn = null), kr(e, v, w, R));
          }
        }
        (ab(), (g = Ot));
        break;
      } catch (Z) {
        Jp(e, Z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (pa = Ci = null),
      ($e = a),
      (C.H = s),
      (C.A = c),
      Ye === null && ((it = null), (Ge = 0), Qs()),
      g
    );
  }
  function ab() {
    for (; Ye !== null; ) Pp(Ye);
  }
  function ib(e, t) {
    var l = $e;
    $e |= 2;
    var a = Wp(),
      s = $p();
    it !== e || Ge !== t
      ? ((wo = null), (To = jt() + 500), Rr(e, t))
      : (Cr = bn(e, t));
    e: do
      try {
        if (et !== 0 && Ye !== null) {
          t = Ye;
          var c = tn;
          t: switch (et) {
            case 1:
              ((et = 0), (tn = null), kr(e, t, c, 1));
              break;
            case 2:
            case 9:
              if (s0(c)) {
                ((et = 0), (tn = null), Ip(t));
                break;
              }
              ((t = function () {
                ((et !== 2 && et !== 9) || it !== e || (et = 7), ta(e));
              }),
                c.then(t, t));
              break e;
            case 3:
              et = 7;
              break e;
            case 4:
              et = 5;
              break e;
            case 7:
              s0(c)
                ? ((et = 0), (tn = null), Ip(t))
                : ((et = 0), (tn = null), kr(e, t, c, 7));
              break;
            case 5:
              var g = null;
              switch (Ye.tag) {
                case 26:
                  g = Ye.memoizedState;
                case 5:
                case 27:
                  var v = Ye;
                  if (g ? Hg(g) : v.stateNode.complete) {
                    ((et = 0), (tn = null));
                    var w = v.sibling;
                    if (w !== null) Ye = w;
                    else {
                      var R = v.return;
                      R !== null ? ((Ye = R), Ao(R)) : (Ye = null);
                    }
                    break t;
                  }
              }
              ((et = 0), (tn = null), kr(e, t, c, 5));
              break;
            case 6:
              ((et = 0), (tn = null), kr(e, t, c, 6));
              break;
            case 8:
              (md(), (Ot = 6));
              break e;
            default:
              throw Error(i(462));
          }
        }
        rb();
        break;
      } catch (Z) {
        Jp(e, Z);
      }
    while (!0);
    return (
      (pa = Ci = null),
      (C.H = a),
      (C.A = s),
      ($e = l),
      Ye !== null ? 0 : ((it = null), (Ge = 0), Qs(), Ot)
    );
  }
  function rb() {
    for (; Ye !== null && !Yn(); ) Pp(Ye);
  }
  function Pp(e) {
    var t = Sp(e.alternate, e, Ea);
    ((e.memoizedProps = e.pendingProps), t === null ? Ao(e) : (Ye = t));
  }
  function Ip(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gp(l, t, t.pendingProps, t.type, void 0, Ge);
        break;
      case 11:
        t = gp(l, t, t.pendingProps, t.type.render, t.ref, Ge);
        break;
      case 5:
        Of(t);
      default:
        (wp(l, t), (t = Ye = $m(t, Ea)), (t = Sp(l, t, Ea)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ao(e) : (Ye = t));
  }
  function kr(e, t, l, a) {
    ((pa = Ci = null), Of(t), (wr = null), (wu = 0));
    var s = t.return;
    try {
      if (Jy(e, s, t, l, Ge)) {
        ((Ot = 1), mo(e, zn(l, e.current)), (Ye = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((Ye = s), c);
      ((Ot = 1), mo(e, zn(l, e.current)), (Ye = null));
      return;
    }
    t.flags & 32768
      ? (Ve || a === 1
          ? (e = !0)
          : Cr || (Ge & 536870912) !== 0
            ? (e = !1)
            : ((Wa = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Il.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        eg(t, e))
      : Ao(t);
  }
  function Ao(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        eg(t, Wa);
        return;
      }
      e = t.return;
      var l = $y(t.alternate, t, Ea);
      if (l !== null) {
        Ye = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ye = t;
        return;
      }
      Ye = t = e;
    } while (t !== null);
    Ot === 0 && (Ot = 5);
  }
  function eg(e, t) {
    do {
      var l = Py(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (Ye = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ye = e;
        return;
      }
      Ye = e = l;
    } while (e !== null);
    ((Ot = 6), (Ye = null));
  }
  function tg(e, t, l, a, s, c, g, v, w) {
    e.cancelPendingCommit = null;
    do No();
    while (Wt !== 0);
    if (($e & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (
        ((c = t.lanes | t.childLanes),
        (c |= lf),
        Je(e, l, c, g, v, w),
        e === it && ((Ye = it = null), (Ge = 0)),
        (Dr = t),
        (Ia = e),
        (za = l),
        (fd = c),
        (dd = s),
        (Vp = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            cb(ml, function () {
              return (rg(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = C.T), (C.T = null), (s = G.p), (G.p = 2), (g = $e), ($e |= 4));
        try {
          Iy(e, t, l);
        } finally {
          (($e = g), (G.p = s), (C.T = a));
        }
      }
      ((Wt = 1), lg(), ng(), ag());
    }
  }
  function lg() {
    if (Wt === 1) {
      Wt = 0;
      var e = Ia,
        t = Dr,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var a = G.p;
        G.p = 2;
        var s = $e;
        $e |= 4;
        try {
          Up(t, e);
          var c = Ad,
            g = Gm(e.containerInfo),
            v = c.focusedElem,
            w = c.selectionRange;
          if (
            g !== v &&
            v &&
            v.ownerDocument &&
            Lm(v.ownerDocument.documentElement, v)
          ) {
            if (w !== null && $c(v)) {
              var R = w.start,
                Z = w.end;
              if ((Z === void 0 && (Z = R), "selectionStart" in v))
                ((v.selectionStart = R),
                  (v.selectionEnd = Math.min(Z, v.value.length)));
              else {
                var $ = v.ownerDocument || document,
                  k = ($ && $.defaultView) || window;
                if (k.getSelection) {
                  var H = k.getSelection(),
                    re = v.textContent.length,
                    be = Math.min(w.start, re),
                    at = w.end === void 0 ? be : Math.min(w.end, re);
                  !H.extend && be > at && ((g = at), (at = be), (be = g));
                  var O = qm(v, be),
                    A = qm(v, at);
                  if (
                    O &&
                    A &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== O.node ||
                      H.anchorOffset !== O.offset ||
                      H.focusNode !== A.node ||
                      H.focusOffset !== A.offset)
                  ) {
                    var j = $.createRange();
                    (j.setStart(O.node, O.offset),
                      H.removeAllRanges(),
                      be > at
                        ? (H.addRange(j), H.extend(A.node, A.offset))
                        : (j.setEnd(A.node, A.offset), H.addRange(j)));
                  }
                }
              }
            }
            for ($ = [], H = v; (H = H.parentNode); )
              H.nodeType === 1 &&
                $.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < $.length;
              v++
            ) {
              var F = $[v];
              ((F.element.scrollLeft = F.left), (F.element.scrollTop = F.top));
            }
          }
          ((qo = !!zd), (Ad = zd = null));
        } finally {
          (($e = s), (G.p = a), (C.T = l));
        }
      }
      ((e.current = t), (Wt = 2));
    }
  }
  function ng() {
    if (Wt === 2) {
      Wt = 0;
      var e = Ia,
        t = Dr,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var a = G.p;
        G.p = 2;
        var s = $e;
        $e |= 4;
        try {
          Cp(e, t.alternate, t);
        } finally {
          (($e = s), (G.p = a), (C.T = l));
        }
      }
      Wt = 3;
    }
  }
  function ag() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), Zn());
      var e = Ia,
        t = Dr,
        l = za,
        a = Vp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (Dr = Ia = null), ig(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (Pa = null),
        Nt(l),
        (t = t.stateNode),
        bt && typeof bt.onCommitFiberRoot == "function")
      )
        try {
          bt.onCommitFiberRoot(Kn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = C.T), (s = G.p), (G.p = 2), (C.T = null));
        try {
          for (var c = e.onRecoverableError, g = 0; g < a.length; g++) {
            var v = a[g];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          ((C.T = t), (G.p = s));
        }
      }
      ((za & 3) !== 0 && No(),
        ta(e),
        (s = e.pendingLanes),
        (l & 261930) !== 0 && (s & 42) !== 0
          ? e === hd
            ? Lu++
            : ((Lu = 0), (hd = e))
          : (Lu = 0),
        Gu(0));
    }
  }
  function ig(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Su(t)));
  }
  function No() {
    return (lg(), ng(), ag(), rg());
  }
  function rg() {
    if (Wt !== 5) return !1;
    var e = Ia,
      t = fd;
    fd = 0;
    var l = Nt(za),
      a = C.T,
      s = G.p;
    try {
      ((G.p = 32 > l ? 32 : l), (C.T = null), (l = dd), (dd = null));
      var c = Ia,
        g = za;
      if (((Wt = 0), (Dr = Ia = null), (za = 0), ($e & 6) !== 0))
        throw Error(i(331));
      var v = $e;
      if (
        (($e |= 4),
        Lp(c.current),
        Hp(c, c.current, g, l),
        ($e = v),
        Gu(0, !1),
        bt && typeof bt.onPostCommitFiberRoot == "function")
      )
        try {
          bt.onPostCommitFiberRoot(Kn, c);
        } catch {}
      return !0;
    } finally {
      ((G.p = s), (C.T = a), ig(e, t));
    }
  }
  function ug(e, t, l) {
    ((t = zn(l, t)),
      (t = Qf(e.stateNode, t, 2)),
      (e = Za(e, t, 2)),
      e !== null && (pe(e, 2), ta(e)));
  }
  function tt(e, t, l) {
    if (e.tag === 3) ug(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ug(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Pa === null || !Pa.has(a)))
          ) {
            ((e = zn(l, e)),
              (l = sp(2)),
              (a = Za(t, l, 2)),
              a !== null && (op(l, a, t, e), pe(a, 2), ta(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function gd(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new lb();
      var s = new Set();
      a.set(t, s);
    } else ((s = a.get(t)), s === void 0 && ((s = new Set()), a.set(t, s)));
    s.has(l) ||
      ((sd = !0), s.add(l), (e = ub.bind(null, e, t, l)), t.then(e, e));
  }
  function ub(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      it === e &&
        (Ge & l) === l &&
        (Ot === 4 || (Ot === 3 && (Ge & 62914560) === Ge && 300 > jt() - So)
          ? ($e & 2) === 0 && Rr(e, 0)
          : (od |= l),
        jr === Ge && (jr = 0)),
      ta(e));
  }
  function sg(e, t) {
    (t === 0 && (t = Ba()), (e = Ni(e, t)), e !== null && (pe(e, t), ta(e)));
  }
  function sb(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), sg(e, l));
  }
  function ob(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          s = e.memoizedState;
        s !== null && (l = s.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    (a !== null && a.delete(t), sg(e, l));
  }
  function cb(e, t) {
    return gn(e, t);
  }
  var Mo = null,
    Ur = null,
    _d = !1,
    Oo = !1,
    vd = !1,
    ti = 0;
  function ta(e) {
    (e !== Ur &&
      e.next === null &&
      (Ur === null ? (Mo = Ur = e) : (Ur = Ur.next = e)),
      (Oo = !0),
      _d || ((_d = !0), db()));
  }
  function Gu(e, t) {
    if (!vd && Oo) {
      vd = !0;
      do
        for (var l = !1, a = Mo; a !== null; ) {
          if (e !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var g = a.suspendedLanes,
                v = a.pingedLanes;
              ((c = (1 << (31 - Yt(42 | e) + 1)) - 1),
                (c &= s & ~(g & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((l = !0), dg(a, c));
          } else
            ((c = Ge),
              (c = yn(
                a,
                a === it ? c : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || bn(a, c) || ((l = !0), dg(a, c)));
          a = a.next;
        }
      while (l);
      vd = !1;
    }
  }
  function fb() {
    og();
  }
  function og() {
    Oo = _d = !1;
    var e = 0;
    ti !== 0 && Sb() && (e = ti);
    for (var t = jt(), l = null, a = Mo; a !== null; ) {
      var s = a.next,
        c = cg(a, t);
      (c === 0
        ? ((a.next = null),
          l === null ? (Mo = s) : (l.next = s),
          s === null && (Ur = l))
        : ((l = a), (e !== 0 || (c & 3) !== 0) && (Oo = !0)),
        (a = s));
    }
    ((Wt !== 0 && Wt !== 5) || Gu(e), ti !== 0 && (ti = 0));
  }
  function cg(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        s = e.expirationTimes,
        c = e.pendingLanes & -62914561;
      0 < c;
    ) {
      var g = 31 - Yt(c),
        v = 1 << g,
        w = s[g];
      (w === -1
        ? ((v & l) === 0 || (v & a) !== 0) && (s[g] = Ln(v, t))
        : w <= t && (e.expiredLanes |= v),
        (c &= ~v));
    }
    if (
      ((t = it),
      (l = Ge),
      (l = yn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (et === 2 || et === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && st(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || bn(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && st(a), Nt(l))) {
        case 2:
        case 8:
          l = gt;
          break;
        case 32:
          l = ml;
          break;
        case 268435456:
          l = _n;
          break;
        default:
          l = ml;
      }
      return (
        (a = fg.bind(null, e)),
        (l = gn(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && st(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function fg(e, t) {
    if (Wt !== 0 && Wt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (No() && e.callbackNode !== l) return null;
    var a = Ge;
    return (
      (a = yn(
        e,
        e === it ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Zp(e, a, t),
          cg(e, jt()),
          e.callbackNode != null && e.callbackNode === l
            ? fg.bind(null, e)
            : null)
    );
  }
  function dg(e, t) {
    if (No()) return null;
    Zp(e, t, !0);
  }
  function db() {
    wb(function () {
      ($e & 6) !== 0 ? gn(qn, fb) : og();
    });
  }
  function yd() {
    if (ti === 0) {
      var e = xr;
      (e === 0 && ((e = vn), (vn <<= 1), (vn & 261888) === 0 && (vn = 256)),
        (ti = e));
    }
    return ti;
  }
  function hg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Bs("" + e);
  }
  function mg(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function hb(e, t, l, a, s) {
    if (t === "submit" && l && l.stateNode === s) {
      var c = hg((s[je] || null).action),
        g = a.submitter;
      g &&
        ((t = (t = g[je] || null)
          ? hg(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((c = t), (g = null)));
      var v = new Ls("action", "action", null, a, s);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ti !== 0) {
                  var w = g ? mg(s, g) : new FormData(s);
                  Yf(
                    l,
                    { pending: !0, data: w, method: s.method, action: c },
                    null,
                    w,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (w = g ? mg(s, g) : new FormData(s)),
                  Yf(
                    l,
                    { pending: !0, data: w, method: s.method, action: c },
                    c,
                    w,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var bd = 0; bd < tf.length; bd++) {
    var xd = tf[bd],
      mb = xd.toLowerCase(),
      pb = xd[0].toUpperCase() + xd.slice(1);
    Gn(mb, "on" + pb);
  }
  (Gn(Qm, "onAnimationEnd"),
    Gn(Zm, "onAnimationIteration"),
    Gn(Km, "onAnimationStart"),
    Gn("dblclick", "onDoubleClick"),
    Gn("focusin", "onFocus"),
    Gn("focusout", "onBlur"),
    Gn(Cy, "onTransitionRun"),
    Gn(jy, "onTransitionStart"),
    Gn(Dy, "onTransitionCancel"),
    Gn(Jm, "onTransitionEnd"),
    xn("onMouseEnter", ["mouseout", "mouseover"]),
    xn("onMouseLeave", ["mouseout", "mouseover"]),
    xn("onPointerEnter", ["pointerout", "pointerover"]),
    xn("onPointerLeave", ["pointerout", "pointerover"]),
    Wn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Wn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Xu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    gb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Xu),
    );
  function pg(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        s = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var g = a.length - 1; 0 <= g; g--) {
            var v = a[g],
              w = v.instance,
              R = v.currentTarget;
            if (((v = v.listener), w !== c && s.isPropagationStopped()))
              break e;
            ((c = v), (s.currentTarget = R));
            try {
              c(s);
            } catch (Z) {
              Vs(Z);
            }
            ((s.currentTarget = null), (c = w));
          }
        else
          for (g = 0; g < a.length; g++) {
            if (
              ((v = a[g]),
              (w = v.instance),
              (R = v.currentTarget),
              (v = v.listener),
              w !== c && s.isPropagationStopped())
            )
              break e;
            ((c = v), (s.currentTarget = R));
            try {
              c(s);
            } catch (Z) {
              Vs(Z);
            }
            ((s.currentTarget = null), (c = w));
          }
      }
    }
  }
  function qe(e, t) {
    var l = t[wl];
    l === void 0 && (l = t[wl] = new Set());
    var a = e + "__bubble";
    l.has(a) || (gg(t, e, 2, !1), l.add(a));
  }
  function Sd(e, t, l) {
    var a = 0;
    (t && (a |= 4), gg(l, e, a, t));
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function Td(e) {
    if (!e[Co]) {
      ((e[Co] = !0),
        Wl.forEach(function (l) {
          l !== "selectionchange" && (gb.has(l) || Sd(l, !1, e), Sd(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Co] || ((t[Co] = !0), Sd("selectionchange", !1, t));
    }
  }
  function gg(e, t, l, a) {
    switch (Qg(t)) {
      case 2:
        var s = Vb;
        break;
      case 8:
        s = Qb;
        break;
      default:
        s = Hd;
    }
    ((l = s.bind(null, t, l, e)),
      (s = void 0),
      !Gc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: s })
          : e.addEventListener(t, l, !0)
        : s !== void 0
          ? e.addEventListener(t, l, { passive: s })
          : e.addEventListener(t, l, !1));
  }
  function wd(e, t, l, a, s) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var g = a.tag;
        if (g === 3 || g === 4) {
          var v = a.stateNode.containerInfo;
          if (v === s) break;
          if (g === 4)
            for (g = a.return; g !== null; ) {
              var w = g.tag;
              if ((w === 3 || w === 4) && g.stateNode.containerInfo === s)
                return;
              g = g.return;
            }
          for (; v !== null; ) {
            if (((g = St(v)), g === null)) return;
            if (((w = g.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              a = c = g;
              continue e;
            }
            v = v.parentNode;
          }
        }
        a = a.return;
      }
    xm(function () {
      var R = c,
        Z = qc(l),
        $ = [];
      e: {
        var k = Fm.get(e);
        if (k !== void 0) {
          var H = Ls,
            re = e;
          switch (e) {
            case "keypress":
              if (Ys(l) === 0) break e;
            case "keydown":
            case "keyup":
              H = oy;
              break;
            case "focusin":
              ((re = "focus"), (H = Zc));
              break;
            case "focusout":
              ((re = "blur"), (H = Zc));
              break;
            case "beforeblur":
            case "afterblur":
              H = Zc;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = wm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = $v;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = dy;
              break;
            case Qm:
            case Zm:
            case Km:
              H = ey;
              break;
            case Jm:
              H = my;
              break;
            case "scroll":
            case "scrollend":
              H = Fv;
              break;
            case "wheel":
              H = gy;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = zm;
              break;
            case "toggle":
            case "beforetoggle":
              H = vy;
          }
          var be = (t & 4) !== 0,
            at = !be && (e === "scroll" || e === "scrollend"),
            O = be ? (k !== null ? k + "Capture" : null) : k;
          be = [];
          for (var A = R, j; A !== null; ) {
            var F = A;
            if (
              ((j = F.stateNode),
              (F = F.tag),
              (F !== 5 && F !== 26 && F !== 27) ||
                j === null ||
                O === null ||
                ((F = fu(A, O)), F != null && be.push(Vu(A, F, j))),
              at)
            )
              break;
            A = A.return;
          }
          0 < be.length &&
            ((k = new H(k, re, null, l, Z)),
            $.push({ event: k, listeners: be }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            k &&
              l !== Yc &&
              (re = l.relatedTarget || l.fromElement) &&
              (St(re) || re[Ke]))
          )
            break e;
          if (
            (H || k) &&
            ((k =
              Z.window === Z
                ? Z
                : (k = Z.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            H
              ? ((re = l.relatedTarget || l.toElement),
                (H = R),
                (re = re ? St(re) : null),
                re !== null &&
                  ((at = o(re)),
                  (be = re.tag),
                  re !== at || (be !== 5 && be !== 27 && be !== 6)) &&
                  (re = null))
              : ((H = null), (re = R)),
            H !== re)
          ) {
            if (
              ((be = wm),
              (F = "onMouseLeave"),
              (O = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((be = zm),
                (F = "onPointerLeave"),
                (O = "onPointerEnter"),
                (A = "pointer")),
              (at = H == null ? k : Fn(H)),
              (j = re == null ? k : Fn(re)),
              (k = new be(F, A + "leave", H, l, Z)),
              (k.target = at),
              (k.relatedTarget = j),
              (F = null),
              St(Z) === R &&
                ((be = new be(O, A + "enter", re, l, Z)),
                (be.target = j),
                (be.relatedTarget = at),
                (F = be)),
              (at = F),
              H && re)
            )
              t: {
                for (be = _b, O = H, A = re, j = 0, F = O; F; F = be(F)) j++;
                F = 0;
                for (var _e = A; _e; _e = be(_e)) F++;
                for (; 0 < j - F; ) ((O = be(O)), j--);
                for (; 0 < F - j; ) ((A = be(A)), F--);
                for (; j--; ) {
                  if (O === A || (A !== null && O === A.alternate)) {
                    be = O;
                    break t;
                  }
                  ((O = be(O)), (A = be(A)));
                }
                be = null;
              }
            else be = null;
            (H !== null && _g($, k, H, be, !1),
              re !== null && at !== null && _g($, at, re, be, !0));
          }
        }
        e: {
          if (
            ((k = R ? Fn(R) : window),
            (H = k.nodeName && k.nodeName.toLowerCase()),
            H === "select" || (H === "input" && k.type === "file"))
          )
            var Fe = Rm;
          else if (jm(k))
            if (km) Fe = Ny;
            else {
              Fe = zy;
              var fe = Ey;
            }
          else
            ((H = k.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (k.type !== "checkbox" && k.type !== "radio")
                ? R && Hc(R.elementType) && (Fe = Rm)
                : (Fe = Ay));
          if (Fe && (Fe = Fe(e, R))) {
            Dm($, Fe, l, Z);
            break e;
          }
          (fe && fe(e, k, R),
            e === "focusout" &&
              R &&
              k.type === "number" &&
              R.memoizedProps.value != null &&
              Bc(k, "number", k.value));
        }
        switch (((fe = R ? Fn(R) : window), e)) {
          case "focusin":
            (jm(fe) || fe.contentEditable === "true") &&
              ((hr = fe), (Pc = R), (yu = null));
            break;
          case "focusout":
            yu = Pc = hr = null;
            break;
          case "mousedown":
            Ic = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ic = !1), Xm($, l, Z));
            break;
          case "selectionchange":
            if (Oy) break;
          case "keydown":
          case "keyup":
            Xm($, l, Z);
        }
        var Ne;
        if (Jc)
          e: {
            switch (e) {
              case "compositionstart":
                var Xe = "onCompositionStart";
                break e;
              case "compositionend":
                Xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Xe = "onCompositionUpdate";
                break e;
            }
            Xe = void 0;
          }
        else
          dr
            ? Om(e, l) && (Xe = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Xe = "onCompositionStart");
        (Xe &&
          (Am &&
            l.locale !== "ko" &&
            (dr || Xe !== "onCompositionStart"
              ? Xe === "onCompositionEnd" && dr && (Ne = Sm())
              : ((Ya = Z),
                (Xc = "value" in Ya ? Ya.value : Ya.textContent),
                (dr = !0))),
          (fe = jo(R, Xe)),
          0 < fe.length &&
            ((Xe = new Em(Xe, e, null, l, Z)),
            $.push({ event: Xe, listeners: fe }),
            Ne
              ? (Xe.data = Ne)
              : ((Ne = Cm(l)), Ne !== null && (Xe.data = Ne)))),
          (Ne = by ? xy(e, l) : Sy(e, l)) &&
            ((Xe = jo(R, "onBeforeInput")),
            0 < Xe.length &&
              ((fe = new Em("onBeforeInput", "beforeinput", null, l, Z)),
              $.push({ event: fe, listeners: Xe }),
              (fe.data = Ne))),
          hb($, e, R, l, Z));
      }
      pg($, t);
    });
  }
  function Vu(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function jo(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var s = e,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = fu(e, l)),
          s != null && a.unshift(Vu(e, s, c)),
          (s = fu(e, t)),
          s != null && a.push(Vu(e, s, c))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function _b(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function _g(e, t, l, a, s) {
    for (var c = t._reactName, g = []; l !== null && l !== a; ) {
      var v = l,
        w = v.alternate,
        R = v.stateNode;
      if (((v = v.tag), w !== null && w === a)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        R === null ||
        ((w = R),
        s
          ? ((R = fu(l, c)), R != null && g.unshift(Vu(l, R, w)))
          : s || ((R = fu(l, c)), R != null && g.push(Vu(l, R, w)))),
        (l = l.return));
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var vb = /\r\n?/g,
    yb = /\u0000|\uFFFD/g;
  function vg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vb,
        `
`,
      )
      .replace(yb, "");
  }
  function yg(e, t) {
    return ((t = vg(t)), vg(e) === t);
  }
  function nt(e, t, l, a, s, c) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || or(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            or(e, "" + a);
        break;
      case "className":
        ks(e, "class", a);
        break;
      case "tabIndex":
        ks(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ks(e, l, a);
        break;
      case "style":
        ym(e, a, c);
        break;
      case "data":
        if (t !== "object") {
          ks(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = Bs("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (l === "formAction"
              ? (t !== "input" && nt(e, t, "name", s.name, s, null),
                nt(e, t, "formEncType", s.formEncType, s, null),
                nt(e, t, "formMethod", s.formMethod, s, null),
                nt(e, t, "formTarget", s.formTarget, s, null))
              : (nt(e, t, "encType", s.encType, s, null),
                nt(e, t, "method", s.method, s, null),
                nt(e, t, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = Bs("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = fa);
        break;
      case "onScroll":
        a != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && qe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((l = a.__html), l != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = Bs("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (qe("beforetoggle", e), qe("toggle", e), Rs(e, "popover", a));
        break;
      case "xlinkActuate":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        ca(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        ca(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Rs(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Kv.get(l) || l), Rs(e, l, a));
    }
  }
  function Ed(e, t, l, a, s, c) {
    switch (l) {
      case "style":
        ym(e, a, c);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
          if (((l = a.__html), l != null)) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? or(e, a)
          : (typeof a == "number" || typeof a == "bigint") && or(e, "" + a);
        break;
      case "onScroll":
        a != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && qe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = fa);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ur.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((s = l.endsWith("Capture")),
              (t = l.slice(2, s ? l.length - 7 : void 0)),
              (c = e[je] || null),
              (c = c != null ? c[l] : null),
              typeof c == "function" && e.removeEventListener(t, c, s),
              typeof a == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, s));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Rs(e, l, a);
          }
    }
  }
  function ol(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (qe("error", e), qe("load", e));
        var a = !1,
          s = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var g = l[c];
            if (g != null)
              switch (c) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  nt(e, t, c, g, l, null);
              }
          }
        (s && nt(e, t, "srcSet", l.srcSet, l, null),
          a && nt(e, t, "src", l.src, l, null));
        return;
      case "input":
        qe("invalid", e);
        var v = (c = g = s = null),
          w = null,
          R = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var Z = l[a];
            if (Z != null)
              switch (a) {
                case "name":
                  s = Z;
                  break;
                case "type":
                  g = Z;
                  break;
                case "checked":
                  w = Z;
                  break;
                case "defaultChecked":
                  R = Z;
                  break;
                case "value":
                  c = Z;
                  break;
                case "defaultValue":
                  v = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null) throw Error(i(137, t));
                  break;
                default:
                  nt(e, t, a, Z, l, null);
              }
          }
        pm(e, c, v, w, R, g, s, !1);
        return;
      case "select":
        (qe("invalid", e), (a = g = c = null));
        for (s in l)
          if (l.hasOwnProperty(s) && ((v = l[s]), v != null))
            switch (s) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                g = v;
                break;
              case "multiple":
                a = v;
              default:
                nt(e, t, s, v, l, null);
            }
        ((t = c),
          (l = g),
          (e.multiple = !!a),
          t != null ? sr(e, !!a, t, !1) : l != null && sr(e, !!a, l, !0));
        return;
      case "textarea":
        (qe("invalid", e), (c = s = a = null));
        for (g in l)
          if (l.hasOwnProperty(g) && ((v = l[g]), v != null))
            switch (g) {
              case "value":
                a = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(i(91));
                break;
              default:
                nt(e, t, g, v, l, null);
            }
        _m(e, a, s, c);
        return;
      case "option":
        for (w in l)
          l.hasOwnProperty(w) &&
            ((a = l[w]), a != null) &&
            (w === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : nt(e, t, w, a, l, null));
        return;
      case "dialog":
        (qe("beforetoggle", e),
          qe("toggle", e),
          qe("cancel", e),
          qe("close", e));
        break;
      case "iframe":
      case "object":
        qe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xu.length; a++) qe(Xu[a], e);
        break;
      case "image":
        (qe("error", e), qe("load", e));
        break;
      case "details":
        qe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (qe("error", e), qe("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in l)
          if (l.hasOwnProperty(R) && ((a = l[R]), a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                nt(e, t, R, a, l, null);
            }
        return;
      default:
        if (Hc(t)) {
          for (Z in l)
            l.hasOwnProperty(Z) &&
              ((a = l[Z]), a !== void 0 && Ed(e, t, Z, a, l, void 0));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && ((a = l[v]), a != null && nt(e, t, v, a, l, null));
  }
  function bb(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          g = null,
          v = null,
          w = null,
          R = null,
          Z = null;
        for (H in l) {
          var $ = l[H];
          if (l.hasOwnProperty(H) && $ != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = $;
              default:
                a.hasOwnProperty(H) || nt(e, t, H, null, a, $);
            }
        }
        for (var k in a) {
          var H = a[k];
          if ((($ = l[k]), a.hasOwnProperty(k) && (H != null || $ != null)))
            switch (k) {
              case "type":
                c = H;
                break;
              case "name":
                s = H;
                break;
              case "checked":
                R = H;
                break;
              case "defaultChecked":
                Z = H;
                break;
              case "value":
                g = H;
                break;
              case "defaultValue":
                v = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(i(137, t));
                break;
              default:
                H !== $ && nt(e, t, k, H, a, $);
            }
        }
        Uc(e, g, v, w, R, Z, c, s);
        return;
      case "select":
        H = g = v = k = null;
        for (c in l)
          if (((w = l[c]), l.hasOwnProperty(c) && w != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                H = w;
              default:
                a.hasOwnProperty(c) || nt(e, t, c, null, a, w);
            }
        for (s in a)
          if (
            ((c = a[s]),
            (w = l[s]),
            a.hasOwnProperty(s) && (c != null || w != null))
          )
            switch (s) {
              case "value":
                k = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                g = c;
              default:
                c !== w && nt(e, t, s, c, a, w);
            }
        ((t = v),
          (l = g),
          (a = H),
          k != null
            ? sr(e, !!l, k, !1)
            : !!a != !!l &&
              (t != null ? sr(e, !!l, t, !0) : sr(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        H = k = null;
        for (v in l)
          if (
            ((s = l[v]),
            l.hasOwnProperty(v) && s != null && !a.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(e, t, v, null, a, s);
            }
        for (g in a)
          if (
            ((s = a[g]),
            (c = l[g]),
            a.hasOwnProperty(g) && (s != null || c != null))
          )
            switch (g) {
              case "value":
                k = s;
                break;
              case "defaultValue":
                H = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== c && nt(e, t, g, s, a, c);
            }
        gm(e, k, H);
        return;
      case "option":
        for (var re in l)
          ((k = l[re]),
            l.hasOwnProperty(re) &&
              k != null &&
              !a.hasOwnProperty(re) &&
              (re === "selected"
                ? (e.selected = !1)
                : nt(e, t, re, null, a, k)));
        for (w in a)
          ((k = a[w]),
            (H = l[w]),
            a.hasOwnProperty(w) &&
              k !== H &&
              (k != null || H != null) &&
              (w === "selected"
                ? (e.selected =
                    k && typeof k != "function" && typeof k != "symbol")
                : nt(e, t, w, k, a, H)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in l)
          ((k = l[be]),
            l.hasOwnProperty(be) &&
              k != null &&
              !a.hasOwnProperty(be) &&
              nt(e, t, be, null, a, k));
        for (R in a)
          if (
            ((k = a[R]),
            (H = l[R]),
            a.hasOwnProperty(R) && k !== H && (k != null || H != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(i(137, t));
                break;
              default:
                nt(e, t, R, k, a, H);
            }
        return;
      default:
        if (Hc(t)) {
          for (var at in l)
            ((k = l[at]),
              l.hasOwnProperty(at) &&
                k !== void 0 &&
                !a.hasOwnProperty(at) &&
                Ed(e, t, at, void 0, a, k));
          for (Z in a)
            ((k = a[Z]),
              (H = l[Z]),
              !a.hasOwnProperty(Z) ||
                k === H ||
                (k === void 0 && H === void 0) ||
                Ed(e, t, Z, k, a, H));
          return;
        }
    }
    for (var O in l)
      ((k = l[O]),
        l.hasOwnProperty(O) &&
          k != null &&
          !a.hasOwnProperty(O) &&
          nt(e, t, O, null, a, k));
    for ($ in a)
      ((k = a[$]),
        (H = l[$]),
        !a.hasOwnProperty($) ||
          k === H ||
          (k == null && H == null) ||
          nt(e, t, $, k, a, H));
  }
  function bg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function xb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var s = l[a],
          c = s.transferSize,
          g = s.initiatorType,
          v = s.duration;
        if (c && v && bg(g)) {
          for (g = 0, v = s.responseEnd, a += 1; a < l.length; a++) {
            var w = l[a],
              R = w.startTime;
            if (R > v) break;
            var Z = w.transferSize,
              $ = w.initiatorType;
            Z &&
              bg($) &&
              ((w = w.responseEnd), (g += Z * (w < v ? 1 : (v - R) / (w - R))));
          }
          if ((--a, (t += (8 * (c + g)) / (s.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var zd = null,
    Ad = null;
  function Do(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Nd(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Md = null;
  function Sb() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Md
        ? !1
        : ((Md = e), !0)
      : ((Md = null), !1);
  }
  var Tg = typeof setTimeout == "function" ? setTimeout : void 0,
    Tb = typeof clearTimeout == "function" ? clearTimeout : void 0,
    wg = typeof Promise == "function" ? Promise : void 0,
    wb =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof wg < "u"
          ? function (e) {
              return wg.resolve(null).then(e).catch(Eb);
            }
          : Tg;
  function Eb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function li(e) {
    return e === "head";
  }
  function Eg(e, t) {
    var l = t,
      a = 0;
    do {
      var s = l.nextSibling;
      if ((e.removeChild(l), s && s.nodeType === 8))
        if (((l = s.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(s), qr(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") Qu(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), Qu(l));
          for (var c = l.firstChild; c; ) {
            var g = c.nextSibling,
              v = c.nodeName;
            (c[xt] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(c),
              (c = g));
          }
        } else l === "body" && Qu(e.ownerDocument.body);
      l = s;
    } while (l);
    qr(t);
  }
  function zg(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function Od(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Od(l), Dt(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function zb(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var s = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[xt])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((c = e.getAttribute("rel")),
                c === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((c = e.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === c) return e;
      } else return e;
      if (((e = Cn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ab(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Cn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ag(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Cn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Cd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function jd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Nb(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Cn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Dd = null;
  function Ng(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return Cn(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Og(e, t, l) {
    switch (((t = Do(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(i(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(i(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function Qu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Dt(e);
  }
  var jn = new Map(),
    Cg = new Set();
  function Ro(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Aa = G.d;
  G.d = { f: Mb, r: Ob, D: Cb, C: jb, L: Db, m: Rb, X: Ub, S: kb, M: Bb };
  function Mb() {
    var e = Aa.f(),
      t = Eo();
    return e || t;
  }
  function Ob(e) {
    var t = kl(e);
    t !== null && t.tag === 5 && t.type === "form" ? J0(t) : Aa.r(e);
  }
  var Br = typeof document > "u" ? null : document;
  function jg(e, t, l) {
    var a = Br;
    if (a && typeof t == "string" && t) {
      var s = wn(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof l == "string" && (s += '[crossorigin="' + l + '"]'),
        Cg.has(s) ||
          (Cg.add(s),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(s) === null &&
            ((t = a.createElement("link")),
            ol(t, "link", e),
            Ue(t),
            a.head.appendChild(t))));
    }
  }
  function Cb(e) {
    (Aa.D(e), jg("dns-prefetch", e, null));
  }
  function jb(e, t) {
    (Aa.C(e, t), jg("preconnect", e, t));
  }
  function Db(e, t, l) {
    Aa.L(e, t, l);
    var a = Br;
    if (a && e && t) {
      var s = 'link[rel="preload"][as="' + wn(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((s += '[imagesrcset="' + wn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (s += '[imagesizes="' + wn(l.imageSizes) + '"]'))
        : (s += '[href="' + wn(e) + '"]');
      var c = s;
      switch (t) {
        case "style":
          c = Hr(e);
          break;
        case "script":
          c = Yr(e);
      }
      jn.has(c) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        jn.set(c, e),
        a.querySelector(s) !== null ||
          (t === "style" && a.querySelector(Zu(c))) ||
          (t === "script" && a.querySelector(Ku(c))) ||
          ((t = a.createElement("link")),
          ol(t, "link", e),
          Ue(t),
          a.head.appendChild(t)));
    }
  }
  function Rb(e, t) {
    Aa.m(e, t);
    var l = Br;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + wn(a) + '"][href="' + wn(e) + '"]',
        c = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Yr(e);
      }
      if (
        !jn.has(c) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        jn.set(c, e),
        l.querySelector(s) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ku(c))) return;
        }
        ((a = l.createElement("link")),
          ol(a, "link", e),
          Ue(a),
          l.head.appendChild(a));
      }
    }
  }
  function kb(e, t, l) {
    Aa.S(e, t, l);
    var a = Br;
    if (a && e) {
      var s = Tt(a).hoistableStyles,
        c = Hr(e);
      t = t || "default";
      var g = s.get(c);
      if (!g) {
        var v = { loading: 0, preload: null };
        if ((g = a.querySelector(Zu(c)))) v.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = jn.get(c)) && Rd(e, l));
          var w = (g = a.createElement("link"));
          (Ue(w),
            ol(w, "link", e),
            (w._p = new Promise(function (R, Z) {
              ((w.onload = R), (w.onerror = Z));
            })),
            w.addEventListener("load", function () {
              v.loading |= 1;
            }),
            w.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            ko(g, t, a));
        }
        ((g = { type: "stylesheet", instance: g, count: 1, state: v }),
          s.set(c, g));
      }
    }
  }
  function Ub(e, t) {
    Aa.X(e, t);
    var l = Br;
    if (l && e) {
      var a = Tt(l).hoistableScripts,
        s = Yr(e),
        c = a.get(s);
      c ||
        ((c = l.querySelector(Ku(s))),
        c ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = jn.get(s)) && kd(e, t),
          (c = l.createElement("script")),
          Ue(c),
          ol(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function Bb(e, t) {
    Aa.M(e, t);
    var l = Br;
    if (l && e) {
      var a = Tt(l).hoistableScripts,
        s = Yr(e),
        c = a.get(s);
      c ||
        ((c = l.querySelector(Ku(s))),
        c ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = jn.get(s)) && kd(e, t),
          (c = l.createElement("script")),
          Ue(c),
          ol(c, "link", e),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        a.set(s, c));
    }
  }
  function Dg(e, t, l, a) {
    var s = (s = me.current) ? Ro(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = Hr(l.href)),
            (l = Tt(s).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = Hr(l.href);
          var c = Tt(s).hoistableStyles,
            g = c.get(e);
          if (
            (g ||
              ((s = s.ownerDocument || s),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(e, g),
              (c = s.querySelector(Zu(e))) &&
                !c._p &&
                ((g.instance = c), (g.state.loading = 5)),
              jn.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                jn.set(e, l),
                c || Hb(s, e, l, g.state))),
            t && a === null)
          )
            throw Error(i(528, ""));
          return g;
        }
        if (t && a !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Yr(l)),
              (l = Tt(s).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, e));
    }
  }
  function Hr(e) {
    return 'href="' + wn(e) + '"';
  }
  function Zu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rg(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Hb(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ol(t, "link", l),
        Ue(t),
        e.head.appendChild(t));
  }
  function Yr(e) {
    return '[src="' + wn(e) + '"]';
  }
  function Ku(e) {
    return "script[async]" + e;
  }
  function kg(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + wn(l.href) + '"]');
          if (a) return ((t.instance = a), Ue(a), a);
          var s = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Ue(a),
            ol(a, "style", s),
            ko(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          s = Hr(l.href);
          var c = e.querySelector(Zu(s));
          if (c) return ((t.state.loading |= 4), (t.instance = c), Ue(c), c);
          ((a = Rg(l)),
            (s = jn.get(s)) && Rd(a, s),
            (c = (e.ownerDocument || e).createElement("link")),
            Ue(c));
          var g = c;
          return (
            (g._p = new Promise(function (v, w) {
              ((g.onload = v), (g.onerror = w));
            })),
            ol(c, "link", a),
            (t.state.loading |= 4),
            ko(c, l.precedence, e),
            (t.instance = c)
          );
        case "script":
          return (
            (c = Yr(l.src)),
            (s = e.querySelector(Ku(c)))
              ? ((t.instance = s), Ue(s), s)
              : ((a = l),
                (s = jn.get(c)) && ((a = b({}, l)), kd(a, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                Ue(s),
                ol(s, "link", a),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ko(a, l.precedence, e));
    return t.instance;
  }
  function ko(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = a.length ? a[a.length - 1] : null,
        c = s,
        g = 0;
      g < a.length;
      g++
    ) {
      var v = a[g];
      if (v.dataset.precedence === t) c = v;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(e, c.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Rd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function kd(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Uo = null;
  function Ug(e, t, l) {
    if (Uo === null) {
      var a = new Map(),
        s = (Uo = new Map());
      s.set(l, a);
    } else ((s = Uo), (a = s.get(l)), a || ((a = new Map()), s.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), s = 0;
      s < l.length;
      s++
    ) {
      var c = l[s];
      if (
        !(
          c[xt] ||
          c[Oe] ||
          (e === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = c.getAttribute(t) || "";
        g = e + g;
        var v = a.get(g);
        v ? v.push(c) : a.set(g, [c]);
      }
    }
    return a;
  }
  function Bg(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Yb(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function qb(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var s = Hr(a.href),
          c = t.querySelector(Zu(s));
        if (c) {
          ((t = c._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Bo.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = c),
            Ue(c));
          return;
        }
        ((c = t.ownerDocument || t),
          (a = Rg(a)),
          (s = jn.get(s)) && Rd(a, s),
          (c = c.createElement("link")),
          Ue(c));
        var g = c;
        ((g._p = new Promise(function (v, w) {
          ((g.onload = v), (g.onerror = w));
        })),
          ol(c, "link", a),
          (l.instance = c));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Bo.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Ud = 0;
  function Lb(e, t) {
    return (
      e.stylesheets && e.count === 0 && Yo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Yo(e, e.stylesheets), e.unsuspend)) {
                var c = e.unsuspend;
                ((e.unsuspend = null), c());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Ud === 0 && (Ud = 62500 * xb());
            var s = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Yo(e, e.stylesheets), e.unsuspend))
                ) {
                  var c = e.unsuspend;
                  ((e.unsuspend = null), c());
                }
              },
              (e.imgBytes > Ud ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Bo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Yo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ho = null;
  function Yo(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ho = new Map()),
        t.forEach(Gb, e),
        (Ho = null),
        Bo.call(e)));
  }
  function Gb(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ho.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Ho.set(e, l));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var g = s[c];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (l.set(g.dataset.precedence, g), (a = g));
        }
        a && l.set(null, a);
      }
      ((s = t.instance),
        (g = s.getAttribute("data-precedence")),
        (c = l.get(g) || a),
        c === a && l.set(null, s),
        l.set(g, s),
        this.count++,
        (a = Bo.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Ju = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: X,
    _currentValue2: X,
    _threadCount: 0,
  };
  function Xb(e, t, l, a, s, c, g, v, w) {
    ((this.tag = 1),
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
      (this.expirationTimes = Te(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Te(0)),
      (this.hiddenUpdates = Te(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function Yg(e, t, l, a, s, c, g, v, w, R, Z, $) {
    return (
      (e = new Xb(e, t, l, g, w, R, Z, $, v)),
      (t = 1),
      c === !0 && (t |= 24),
      (c = Pl(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (t = pf()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (c.memoizedState = { element: a, isDehydrated: l, cache: t }),
      yf(c),
      e
    );
  }
  function qg(e) {
    return e ? ((e = gr), e) : gr;
  }
  function Lg(e, t, l, a, s, c) {
    ((s = qg(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = Qa(t)),
      (a.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (a.callback = c),
      (l = Za(e, a, t)),
      l !== null && (Ll(l, e, t), zu(l, e, t)));
  }
  function Gg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Bd(e, t) {
    (Gg(e, t), (e = e.alternate) && Gg(e, t));
  }
  function Xg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ni(e, 67108864);
      (t !== null && Ll(t, e, 67108864), Bd(e, 67108864));
    }
  }
  function Vg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = nn();
      t = Se(t);
      var l = Ni(e, t);
      (l !== null && Ll(l, e, t), Bd(e, t));
    }
  }
  var qo = !0;
  function Vb(e, t, l, a) {
    var s = C.T;
    C.T = null;
    var c = G.p;
    try {
      ((G.p = 2), Hd(e, t, l, a));
    } finally {
      ((G.p = c), (C.T = s));
    }
  }
  function Qb(e, t, l, a) {
    var s = C.T;
    C.T = null;
    var c = G.p;
    try {
      ((G.p = 8), Hd(e, t, l, a));
    } finally {
      ((G.p = c), (C.T = s));
    }
  }
  function Hd(e, t, l, a) {
    if (qo) {
      var s = Yd(a);
      if (s === null) (wd(e, t, a, Lo, l), Zg(e, a));
      else if (Kb(s, e, t, l, a)) a.stopPropagation();
      else if ((Zg(e, a), t & 4 && -1 < Zb.indexOf(e))) {
        for (; s !== null; ) {
          var c = kl(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var g = Ft(c.pendingLanes);
                  if (g !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; g; ) {
                      var w = 1 << (31 - Yt(g));
                      ((v.entanglements[1] |= w), (g &= ~w));
                    }
                    (ta(c), ($e & 6) === 0 && ((To = jt() + 500), Gu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = Ni(c, 2)), v !== null && Ll(v, c, 2), Eo(), Bd(c, 2));
            }
          if (((c = Yd(a)), c === null && wd(e, t, a, Lo, l), c === s)) break;
          s = c;
        }
        s !== null && a.stopPropagation();
      } else wd(e, t, a, null, l);
    }
  }
  function Yd(e) {
    return ((e = qc(e)), qd(e));
  }
  var Lo = null;
  function qd(e) {
    if (((Lo = null), (e = St(e)), e !== null)) {
      var t = o(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Lo = e), null);
  }
  function Qg(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ht()) {
          case qn:
            return 2;
          case gt:
            return 8;
          case ml:
          case Rl:
            return 32;
          case _n:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ld = !1,
    ni = null,
    ai = null,
    ii = null,
    Fu = new Map(),
    Wu = new Map(),
    ri = [],
    Zb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Zg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ni = null;
        break;
      case "dragenter":
      case "dragleave":
        ai = null;
        break;
      case "mouseover":
      case "mouseout":
        ii = null;
        break;
      case "pointerover":
      case "pointerout":
        Fu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wu.delete(t.pointerId);
    }
  }
  function $u(e, t, l, a, s, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [s],
        }),
        t !== null && ((t = kl(t)), t !== null && Xg(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Kb(e, t, l, a, s) {
    switch (t) {
      case "focusin":
        return ((ni = $u(ni, e, t, l, a, s)), !0);
      case "dragenter":
        return ((ai = $u(ai, e, t, l, a, s)), !0);
      case "mouseover":
        return ((ii = $u(ii, e, t, l, a, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (Fu.set(c, $u(Fu.get(c) || null, e, t, l, a, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          Wu.set(c, $u(Wu.get(c) || null, e, t, l, a, s)),
          !0
        );
    }
    return !1;
  }
  function Kg(e) {
    var t = St(e.target);
    if (t !== null) {
      var l = o(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = d(l)), t !== null)) {
            ((e.blockedOn = t),
              _t(e.priority, function () {
                Vg(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = h(l)), t !== null)) {
            ((e.blockedOn = t),
              _t(e.priority, function () {
                Vg(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Yd(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Yc = a), l.target.dispatchEvent(a), (Yc = null));
      } else return ((t = kl(l)), t !== null && Xg(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Jg(e, t, l) {
    Go(e) && l.delete(t);
  }
  function Jb() {
    ((Ld = !1),
      ni !== null && Go(ni) && (ni = null),
      ai !== null && Go(ai) && (ai = null),
      ii !== null && Go(ii) && (ii = null),
      Fu.forEach(Jg),
      Wu.forEach(Jg));
  }
  function Xo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ld ||
        ((Ld = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Jb)));
  }
  var Vo = null;
  function Fg(e) {
    Vo !== e &&
      ((Vo = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Vo === e && (Vo = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            s = e[t + 2];
          if (typeof a != "function") {
            if (qd(a || l) === null) continue;
            break;
          }
          var c = kl(l);
          c !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Yf(c, { pending: !0, data: s, method: l.method, action: a }, a, s));
        }
      }));
  }
  function qr(e) {
    function t(w) {
      return Xo(w, e);
    }
    (ni !== null && Xo(ni, e),
      ai !== null && Xo(ai, e),
      ii !== null && Xo(ii, e),
      Fu.forEach(t),
      Wu.forEach(t));
    for (var l = 0; l < ri.length; l++) {
      var a = ri[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ri.length && ((l = ri[0]), l.blockedOn === null); )
      (Kg(l), l.blockedOn === null && ri.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var s = l[a],
          c = l[a + 1],
          g = s[je] || null;
        if (typeof c == "function") g || Fg(l);
        else if (g) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (g = c[je] || null))) v = g.formAction;
            else if (qd(s) !== null) continue;
          } else v = g.action;
          (typeof v == "function" ? (l[a + 1] = v) : (l.splice(a, 3), (a -= 3)),
            Fg(l));
        }
      }
  }
  function Wg() {
    function e(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (g) {
              return (s = g);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (s !== null && (s(), (s = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Gd(e) {
    this._internalRoot = e;
  }
  ((Qo.prototype.render = Gd.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var l = t.current,
        a = nn();
      Lg(l, a, e, t, null, null);
    }),
    (Qo.prototype.unmount = Gd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Lg(e.current, 2, null, e, null, null), Eo(), (t[Ke] = null));
        }
      }));
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ke();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ri.length && t !== 0 && t < ri[l].priority; l++);
      (ri.splice(l, 0, e), l === 0 && Kg(e));
    }
  };
  var $g = n.version;
  if ($g !== "19.2.3") throw Error(i(527, $g, "19.2.3"));
  G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(i(188))
        : ((e = Object.keys(e).join(",")), Error(i(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? _(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Fb = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber)
      try {
        ((Kn = Zo.inject(Fb)), (bt = Zo));
      } catch {}
  }
  return (
    (Iu.createRoot = function (e, t) {
      if (!u(e)) throw Error(i(299));
      var l = !1,
        a = "",
        s = ap,
        c = ip,
        g = rp;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (c = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError)),
        (t = Yg(e, 1, !1, null, null, l, a, null, s, c, g, Wg)),
        (e[Ke] = t.current),
        Td(e),
        new Gd(t)
      );
    }),
    (Iu.hydrateRoot = function (e, t, l) {
      if (!u(e)) throw Error(i(299));
      var a = !1,
        s = "",
        c = ap,
        g = ip,
        v = rp,
        w = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (s = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (g = l.onCaughtError),
          l.onRecoverableError !== void 0 && (v = l.onRecoverableError),
          l.formState !== void 0 && (w = l.formState)),
        (t = Yg(e, 1, !0, t, l ?? null, a, s, w, c, g, v, Wg)),
        (t.context = qg(null)),
        (l = t.current),
        (a = nn()),
        (a = Se(a)),
        (s = Qa(a)),
        (s.callback = null),
        Za(l, s, a),
        (l = a),
        (t.current.lanes = l),
        pe(t, l),
        ta(t),
        (e[Ke] = t.current),
        Td(e),
        new Qo(t)
      );
    }),
    (Iu.version = "19.2.3"),
    Iu
  );
}
var u1;
function ox() {
  if (u1) return Qd.exports;
  u1 = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (n) {
        console.error(n);
      }
  }
  return (f(), (Qd.exports = sx()), Qd.exports);
}
var cx = ox();
const l_ = le.createContext(void 0);
function fx({ children: f }) {
  const [n, r] = le.useState([]),
    [i, u] = le.useState(!1),
    o = le.useCallback(() => u(!0), []),
    d = le.useCallback(() => u(!1), []),
    h = le.useCallback((x) => {
      (r((z) =>
        z.find((M) => M.id === x.id)
          ? z.map((M) =>
              M.id === x.id ? { ...M, quantity: M.quantity + 1 } : M,
            )
          : [...z, { ...x, quantity: 1 }],
      ),
        u(!0));
    }, []),
    m = le.useCallback((x) => {
      r((z) => z.filter((S) => S.id !== x));
    }, []),
    p = le.useCallback(
      (x, z) => {
        if (z <= 0) {
          m(x);
          return;
        }
        r((S) => S.map((M) => (M.id === x ? { ...M, quantity: z } : M)));
      },
      [m],
    ),
    _ = le.useCallback(() => {
      r([]);
    }, []),
    b = n.reduce((x, z) => x + z.quantity, 0),
    T = n.reduce((x, z) => x + z.price * z.quantity, 0);
  return y.jsx(l_.Provider, {
    value: {
      items: n,
      isOpen: i,
      openCart: o,
      closeCart: d,
      addToCart: h,
      removeFromCart: m,
      updateQuantity: p,
      clearCart: _,
      totalItems: b,
      totalPrice: T,
    },
    children: f,
  });
}
function Yh() {
  const f = le.useContext(l_);
  if (f === void 0)
    throw new Error("useCart must be used within a CartProvider");
  return f;
}
const dx = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  hx = (f) =>
    f.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, i) =>
      i ? i.toUpperCase() : r.toLowerCase(),
    ),
  s1 = (f) => {
    const n = hx(f);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  n_ = (...f) =>
    f
      .filter((n, r, i) => !!n && n.trim() !== "" && i.indexOf(n) === r)
      .join(" ")
      .trim(),
  mx = (f) => {
    for (const n in f)
      if (n.startsWith("aria-") || n === "role" || n === "title") return !0;
  };
var px = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const gx = le.forwardRef(
  (
    {
      color: f = "currentColor",
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: i,
      className: u = "",
      children: o,
      iconNode: d,
      ...h
    },
    m,
  ) =>
    le.createElement(
      "svg",
      {
        ref: m,
        ...px,
        width: n,
        height: n,
        stroke: f,
        strokeWidth: i ? (Number(r) * 24) / Number(n) : r,
        className: n_("lucide", u),
        ...(!o && !mx(h) && { "aria-hidden": "true" }),
        ...h,
      },
      [
        ...d.map(([p, _]) => le.createElement(p, _)),
        ...(Array.isArray(o) ? o : [o]),
      ],
    ),
);
const Kt = (f, n) => {
  const r = le.forwardRef(({ className: i, ...u }, o) =>
    le.createElement(gx, {
      ref: o,
      iconNode: n,
      className: n_(`lucide-${dx(s1(f))}`, `lucide-${f}`, i),
      ...u,
    }),
  );
  return ((r.displayName = s1(f)), r);
};
const _x = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Da = Kt("arrow-right", _x);
const vx = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  o1 = Kt("clock", vx);
const yx = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  bx = Kt("facebook", yx);
const xx = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  Sx = Kt("heart", xx);
const Tx = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  wx = Kt("instagram", Tx);
const Ex = [
    [
      "path",
      {
        d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
        key: "nnexq3",
      },
    ],
    [
      "path",
      { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" },
    ],
  ],
  zx = Kt("leaf", Ex);
const Ax = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Nx = Kt("mail", Ax);
const Mx = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Ox = Kt("map-pin", Mx);
const Cx = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  jx = Kt("menu", Cx);
const Dx = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  Rx = Kt("minus", Dx);
const kx = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Ux = Kt("phone", kx);
const Bx = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Hx = Kt("plus", Bx);
const Yx = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  Fd = Kt("quote", Yx);
const qx = [
    ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
    ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
    [
      "path",
      {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm",
      },
    ],
  ],
  _c = Kt("shopping-bag", qx);
const Lx = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  Gx = Kt("sparkles", Lx);
const Xx = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Vx = Kt("star", Xx);
const Qx = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  Zx = Kt("trash-2", Qx);
const Kx = [
    [
      "path",
      {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53",
      },
    ],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i",
      },
    ],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ],
  Jx = Kt("truck", Kx);
const Fx = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  Wx = Kt("twitter", Fx);
const $x = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  a_ = Kt("x", $x);
function c1(f, n) {
  if (typeof f == "function") return f(n);
  f != null && (f.current = n);
}
function Px(...f) {
  return (n) => {
    let r = !1;
    const i = f.map((u) => {
      const o = c1(u, n);
      return (!r && typeof o == "function" && (r = !0), o);
    });
    if (r)
      return () => {
        for (let u = 0; u < i.length; u++) {
          const o = i[u];
          typeof o == "function" ? o() : c1(f[u], null);
        }
      };
  };
}
var Ix = Symbol.for("react.lazy"),
  vc = nx[" use ".trim().toString()];
function e2(f) {
  return typeof f == "object" && f !== null && "then" in f;
}
function i_(f) {
  return (
    f != null &&
    typeof f == "object" &&
    "$$typeof" in f &&
    f.$$typeof === Ix &&
    "_payload" in f &&
    e2(f._payload)
  );
}
function t2(f) {
  const n = n2(f),
    r = le.forwardRef((i, u) => {
      let { children: o, ...d } = i;
      i_(o) && typeof vc == "function" && (o = vc(o._payload));
      const h = le.Children.toArray(o),
        m = h.find(i2);
      if (m) {
        const p = m.props.children,
          _ = h.map((b) =>
            b === m
              ? le.Children.count(p) > 1
                ? le.Children.only(null)
                : le.isValidElement(p)
                  ? p.props.children
                  : null
              : b,
          );
        return y.jsx(n, {
          ...d,
          ref: u,
          children: le.isValidElement(p) ? le.cloneElement(p, void 0, _) : null,
        });
      }
      return y.jsx(n, { ...d, ref: u, children: o });
    });
  return ((r.displayName = `${f}.Slot`), r);
}
var l2 = t2("Slot");
function n2(f) {
  const n = le.forwardRef((r, i) => {
    let { children: u, ...o } = r;
    if (
      (i_(u) && typeof vc == "function" && (u = vc(u._payload)),
      le.isValidElement(u))
    ) {
      const d = u2(u),
        h = r2(o, u.props);
      return (
        u.type !== le.Fragment && (h.ref = i ? Px(i, d) : d),
        le.cloneElement(u, h)
      );
    }
    return le.Children.count(u) > 1 ? le.Children.only(null) : null;
  });
  return ((n.displayName = `${f}.SlotClone`), n);
}
var a2 = Symbol("radix.slottable");
function i2(f) {
  return (
    le.isValidElement(f) &&
    typeof f.type == "function" &&
    "__radixId" in f.type &&
    f.type.__radixId === a2
  );
}
function r2(f, n) {
  const r = { ...n };
  for (const i in n) {
    const u = f[i],
      o = n[i];
    /^on[A-Z]/.test(i)
      ? u && o
        ? (r[i] = (...h) => {
            const m = o(...h);
            return (u(...h), m);
          })
        : u && (r[i] = u)
      : i === "style"
        ? (r[i] = { ...u, ...o })
        : i === "className" && (r[i] = [u, o].filter(Boolean).join(" "));
  }
  return { ...f, ...r };
}
function u2(f) {
  let n = Object.getOwnPropertyDescriptor(f.props, "ref")?.get,
    r = n && "isReactWarning" in n && n.isReactWarning;
  return r
    ? f.ref
    : ((n = Object.getOwnPropertyDescriptor(f, "ref")?.get),
      (r = n && "isReactWarning" in n && n.isReactWarning),
      r ? f.props.ref : f.props.ref || f.ref);
}
function r_(f) {
  var n,
    r,
    i = "";
  if (typeof f == "string" || typeof f == "number") i += f;
  else if (typeof f == "object")
    if (Array.isArray(f)) {
      var u = f.length;
      for (n = 0; n < u; n++)
        f[n] && (r = r_(f[n])) && (i && (i += " "), (i += r));
    } else for (r in f) f[r] && (i && (i += " "), (i += r));
  return i;
}
function u_() {
  for (var f, n, r = 0, i = "", u = arguments.length; r < u; r++)
    (f = arguments[r]) && (n = r_(f)) && (i && (i += " "), (i += n));
  return i;
}
const f1 = (f) => (typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f),
  d1 = u_,
  s2 = (f, n) => (r) => {
    var i;
    if (n?.variants == null) return d1(f, r?.class, r?.className);
    const { variants: u, defaultVariants: o } = n,
      d = Object.keys(u).map((p) => {
        const _ = r?.[p],
          b = o?.[p];
        if (_ === null) return null;
        const T = f1(_) || f1(b);
        return u[p][T];
      }),
      h =
        r &&
        Object.entries(r).reduce((p, _) => {
          let [b, T] = _;
          return (T === void 0 || (p[b] = T), p);
        }, {}),
      m =
        n == null || (i = n.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((p, _) => {
              let { class: b, className: T, ...x } = _;
              return Object.entries(x).every((z) => {
                let [S, M] = z;
                return Array.isArray(M)
                  ? M.includes({ ...o, ...h }[S])
                  : { ...o, ...h }[S] === M;
              })
                ? [...p, b, T]
                : p;
            }, []);
    return d1(f, d, m, r?.class, r?.className);
  },
  o2 = (f, n) => {
    const r = new Array(f.length + n.length);
    for (let i = 0; i < f.length; i++) r[i] = f[i];
    for (let i = 0; i < n.length; i++) r[f.length + i] = n[i];
    return r;
  },
  c2 = (f, n) => ({ classGroupId: f, validator: n }),
  s_ = (f = new Map(), n = null, r) => ({
    nextPart: f,
    validators: n,
    classGroupId: r,
  }),
  yc = "-",
  h1 = [],
  f2 = "arbitrary..",
  d2 = (f) => {
    const n = m2(f),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: i } = f;
    return {
      getClassGroupId: (d) => {
        if (d.startsWith("[") && d.endsWith("]")) return h2(d);
        const h = d.split(yc),
          m = h[0] === "" && h.length > 1 ? 1 : 0;
        return o_(h, m, n);
      },
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const m = i[d],
            p = r[d];
          return m ? (p ? o2(p, m) : m) : p || h1;
        }
        return r[d] || h1;
      },
    };
  },
  o_ = (f, n, r) => {
    if (f.length - n === 0) return r.classGroupId;
    const u = f[n],
      o = r.nextPart.get(u);
    if (o) {
      const p = o_(f, n + 1, o);
      if (p) return p;
    }
    const d = r.validators;
    if (d === null) return;
    const h = n === 0 ? f.join(yc) : f.slice(n).join(yc),
      m = d.length;
    for (let p = 0; p < m; p++) {
      const _ = d[p];
      if (_.validator(h)) return _.classGroupId;
    }
  },
  h2 = (f) =>
    f.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const n = f.slice(1, -1),
            r = n.indexOf(":"),
            i = n.slice(0, r);
          return i ? f2 + i : void 0;
        })(),
  m2 = (f) => {
    const { theme: n, classGroups: r } = f;
    return p2(r, n);
  },
  p2 = (f, n) => {
    const r = s_();
    for (const i in f) {
      const u = f[i];
      qh(u, r, i, n);
    }
    return r;
  },
  qh = (f, n, r, i) => {
    const u = f.length;
    for (let o = 0; o < u; o++) {
      const d = f[o];
      g2(d, n, r, i);
    }
  },
  g2 = (f, n, r, i) => {
    if (typeof f == "string") {
      _2(f, n, r);
      return;
    }
    if (typeof f == "function") {
      v2(f, n, r, i);
      return;
    }
    y2(f, n, r, i);
  },
  _2 = (f, n, r) => {
    const i = f === "" ? n : c_(n, f);
    i.classGroupId = r;
  },
  v2 = (f, n, r, i) => {
    if (b2(f)) {
      qh(f(i), n, r, i);
      return;
    }
    (n.validators === null && (n.validators = []), n.validators.push(c2(r, f)));
  },
  y2 = (f, n, r, i) => {
    const u = Object.entries(f),
      o = u.length;
    for (let d = 0; d < o; d++) {
      const [h, m] = u[d];
      qh(m, c_(n, h), r, i);
    }
  },
  c_ = (f, n) => {
    let r = f;
    const i = n.split(yc),
      u = i.length;
    for (let o = 0; o < u; o++) {
      const d = i[o];
      let h = r.nextPart.get(d);
      (h || ((h = s_()), r.nextPart.set(d, h)), (r = h));
    }
    return r;
  },
  b2 = (f) => "isThemeGetter" in f && f.isThemeGetter === !0,
  x2 = (f) => {
    if (f < 1) return { get: () => {}, set: () => {} };
    let n = 0,
      r = Object.create(null),
      i = Object.create(null);
    const u = (o, d) => {
      ((r[o] = d), n++, n > f && ((n = 0), (i = r), (r = Object.create(null))));
    };
    return {
      get(o) {
        let d = r[o];
        if (d !== void 0) return d;
        if ((d = i[o]) !== void 0) return (u(o, d), d);
      },
      set(o, d) {
        o in r ? (r[o] = d) : u(o, d);
      },
    };
  },
  hh = "!",
  m1 = ":",
  S2 = [],
  p1 = (f, n, r, i, u) => ({
    modifiers: f,
    hasImportantModifier: n,
    baseClassName: r,
    maybePostfixModifierPosition: i,
    isExternal: u,
  }),
  T2 = (f) => {
    const { prefix: n, experimentalParseClassName: r } = f;
    let i = (u) => {
      const o = [];
      let d = 0,
        h = 0,
        m = 0,
        p;
      const _ = u.length;
      for (let S = 0; S < _; S++) {
        const M = u[S];
        if (d === 0 && h === 0) {
          if (M === m1) {
            (o.push(u.slice(m, S)), (m = S + 1));
            continue;
          }
          if (M === "/") {
            p = S;
            continue;
          }
        }
        M === "[" ? d++ : M === "]" ? d-- : M === "(" ? h++ : M === ")" && h--;
      }
      const b = o.length === 0 ? u : u.slice(m);
      let T = b,
        x = !1;
      b.endsWith(hh)
        ? ((T = b.slice(0, -1)), (x = !0))
        : b.startsWith(hh) && ((T = b.slice(1)), (x = !0));
      const z = p && p > m ? p - m : void 0;
      return p1(o, x, T, z);
    };
    if (n) {
      const u = n + m1,
        o = i;
      i = (d) =>
        d.startsWith(u) ? o(d.slice(u.length)) : p1(S2, !1, d, void 0, !0);
    }
    if (r) {
      const u = i;
      i = (o) => r({ className: o, parseClassName: u });
    }
    return i;
  },
  w2 = (f) => {
    const n = new Map();
    return (
      f.orderSensitiveModifiers.forEach((r, i) => {
        n.set(r, 1e6 + i);
      }),
      (r) => {
        const i = [];
        let u = [];
        for (let o = 0; o < r.length; o++) {
          const d = r[o],
            h = d[0] === "[",
            m = n.has(d);
          h || m
            ? (u.length > 0 && (u.sort(), i.push(...u), (u = [])), i.push(d))
            : u.push(d);
        }
        return (u.length > 0 && (u.sort(), i.push(...u)), i);
      }
    );
  },
  E2 = (f) => ({
    cache: x2(f.cacheSize),
    parseClassName: T2(f),
    sortModifiers: w2(f),
    ...d2(f),
  }),
  z2 = /\s+/,
  A2 = (f, n) => {
    const {
        parseClassName: r,
        getClassGroupId: i,
        getConflictingClassGroupIds: u,
        sortModifiers: o,
      } = n,
      d = [],
      h = f.trim().split(z2);
    let m = "";
    for (let p = h.length - 1; p >= 0; p -= 1) {
      const _ = h[p],
        {
          isExternal: b,
          modifiers: T,
          hasImportantModifier: x,
          baseClassName: z,
          maybePostfixModifierPosition: S,
        } = r(_);
      if (b) {
        m = _ + (m.length > 0 ? " " + m : m);
        continue;
      }
      let M = !!S,
        q = i(M ? z.substring(0, S) : z);
      if (!q) {
        if (!M) {
          m = _ + (m.length > 0 ? " " + m : m);
          continue;
        }
        if (((q = i(z)), !q)) {
          m = _ + (m.length > 0 ? " " + m : m);
          continue;
        }
        M = !1;
      }
      const V = T.length === 0 ? "" : T.length === 1 ? T[0] : o(T).join(":"),
        K = x ? V + hh : V,
        U = K + q;
      if (d.indexOf(U) > -1) continue;
      d.push(U);
      const Q = u(q, M);
      for (let W = 0; W < Q.length; ++W) {
        const D = Q[W];
        d.push(K + D);
      }
      m = _ + (m.length > 0 ? " " + m : m);
    }
    return m;
  },
  N2 = (...f) => {
    let n = 0,
      r,
      i,
      u = "";
    for (; n < f.length; )
      (r = f[n++]) && (i = f_(r)) && (u && (u += " "), (u += i));
    return u;
  },
  f_ = (f) => {
    if (typeof f == "string") return f;
    let n,
      r = "";
    for (let i = 0; i < f.length; i++)
      f[i] && (n = f_(f[i])) && (r && (r += " "), (r += n));
    return r;
  },
  M2 = (f, ...n) => {
    let r, i, u, o;
    const d = (m) => {
        const p = n.reduce((_, b) => b(_), f());
        return (
          (r = E2(p)),
          (i = r.cache.get),
          (u = r.cache.set),
          (o = h),
          h(m)
        );
      },
      h = (m) => {
        const p = i(m);
        if (p) return p;
        const _ = A2(m, r);
        return (u(m, _), _);
      };
    return ((o = d), (...m) => o(N2(...m)));
  },
  O2 = [],
  $t = (f) => {
    const n = (r) => r[f] || O2;
    return ((n.isThemeGetter = !0), n);
  },
  d_ = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  h_ = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  C2 = /^\d+\/\d+$/,
  j2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  D2 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  R2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  k2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  U2 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Lr = (f) => C2.test(f),
  De = (f) => !!f && !Number.isNaN(Number(f)),
  si = (f) => !!f && Number.isInteger(Number(f)),
  Wd = (f) => f.endsWith("%") && De(f.slice(0, -1)),
  Na = (f) => j2.test(f),
  B2 = () => !0,
  H2 = (f) => D2.test(f) && !R2.test(f),
  m_ = () => !1,
  Y2 = (f) => k2.test(f),
  q2 = (f) => U2.test(f),
  L2 = (f) => !se(f) && !oe(f),
  G2 = (f) => ou(f, __, m_),
  se = (f) => d_.test(f),
  Li = (f) => ou(f, v_, H2),
  $d = (f) => ou(f, K2, De),
  g1 = (f) => ou(f, p_, m_),
  X2 = (f) => ou(f, g_, q2),
  Ko = (f) => ou(f, y_, Y2),
  oe = (f) => h_.test(f),
  es = (f) => cu(f, v_),
  V2 = (f) => cu(f, J2),
  _1 = (f) => cu(f, p_),
  Q2 = (f) => cu(f, __),
  Z2 = (f) => cu(f, g_),
  Jo = (f) => cu(f, y_, !0),
  ou = (f, n, r) => {
    const i = d_.exec(f);
    return i ? (i[1] ? n(i[1]) : r(i[2])) : !1;
  },
  cu = (f, n, r = !1) => {
    const i = h_.exec(f);
    return i ? (i[1] ? n(i[1]) : r) : !1;
  },
  p_ = (f) => f === "position" || f === "percentage",
  g_ = (f) => f === "image" || f === "url",
  __ = (f) => f === "length" || f === "size" || f === "bg-size",
  v_ = (f) => f === "length",
  K2 = (f) => f === "number",
  J2 = (f) => f === "family-name",
  y_ = (f) => f === "shadow",
  F2 = () => {
    const f = $t("color"),
      n = $t("font"),
      r = $t("text"),
      i = $t("font-weight"),
      u = $t("tracking"),
      o = $t("leading"),
      d = $t("breakpoint"),
      h = $t("container"),
      m = $t("spacing"),
      p = $t("radius"),
      _ = $t("shadow"),
      b = $t("inset-shadow"),
      T = $t("text-shadow"),
      x = $t("drop-shadow"),
      z = $t("blur"),
      S = $t("perspective"),
      M = $t("aspect"),
      q = $t("ease"),
      V = $t("animate"),
      K = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      Q = () => [...U(), oe, se],
      W = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", "contain", "none"],
      B = () => [oe, se, m],
      J = () => [Lr, "full", "auto", ...B()],
      I = () => [si, "none", "subgrid", oe, se],
      de = () => ["auto", { span: ["full", si, oe, se] }, si, oe, se],
      te = () => [si, "auto", oe, se],
      xe = () => ["auto", "min", "max", "fr", oe, se],
      ye = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      ve = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      C = () => ["auto", ...B()],
      G = () => [
        Lr,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...B(),
      ],
      X = () => [f, oe, se],
      he = () => [...U(), _1, g1, { position: [oe, se] }],
      N = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      E = () => ["auto", "cover", "contain", Q2, G2, { size: [oe, se] }],
      L = () => [Wd, es, Li],
      P = () => ["", "none", "full", p, oe, se],
      ee = () => ["", De, es, Li],
      ie = () => ["solid", "dashed", "dotted", "double"],
      me = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ae = () => [De, Wd, _1, g1],
      Ze = () => ["", "none", z, oe, se],
      ze = () => ["none", De, oe, se],
      Jt = () => ["none", De, oe, se],
      mt = () => [De, oe, se],
      pt = () => [Lr, "full", ...B()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Na],
        breakpoint: [Na],
        color: [B2],
        container: [Na],
        "drop-shadow": [Na],
        ease: ["in", "out", "in-out"],
        font: [L2],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Na],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Na],
        shadow: [Na],
        spacing: ["px", De],
        text: [Na],
        "text-shadow": [Na],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Lr, se, oe, M] }],
        container: ["container"],
        columns: [{ columns: [De, se, oe, h] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: Q() }],
        overflow: [{ overflow: W() }],
        "overflow-x": [{ "overflow-x": W() }],
        "overflow-y": [{ "overflow-y": W() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: J() }],
        "inset-x": [{ "inset-x": J() }],
        "inset-y": [{ "inset-y": J() }],
        start: [{ start: J() }],
        end: [{ end: J() }],
        top: [{ top: J() }],
        right: [{ right: J() }],
        bottom: [{ bottom: J() }],
        left: [{ left: J() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [si, "auto", oe, se] }],
        basis: [{ basis: [Lr, "full", "auto", h, ...B()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [De, Lr, "auto", "initial", "none", se] }],
        grow: [{ grow: ["", De, oe, se] }],
        shrink: [{ shrink: ["", De, oe, se] }],
        order: [{ order: [si, "first", "last", "none", oe, se] }],
        "grid-cols": [{ "grid-cols": I() }],
        "col-start-end": [{ col: de() }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": I() }],
        "row-start-end": [{ row: de() }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": xe() }],
        "auto-rows": [{ "auto-rows": xe() }],
        gap: [{ gap: B() }],
        "gap-x": [{ "gap-x": B() }],
        "gap-y": [{ "gap-y": B() }],
        "justify-content": [{ justify: [...ye(), "normal"] }],
        "justify-items": [{ "justify-items": [...ve(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...ve()] }],
        "align-content": [{ content: ["normal", ...ye()] }],
        "align-items": [{ items: [...ve(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...ve(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ye() }],
        "place-items": [{ "place-items": [...ve(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...ve()] }],
        p: [{ p: B() }],
        px: [{ px: B() }],
        py: [{ py: B() }],
        ps: [{ ps: B() }],
        pe: [{ pe: B() }],
        pt: [{ pt: B() }],
        pr: [{ pr: B() }],
        pb: [{ pb: B() }],
        pl: [{ pl: B() }],
        m: [{ m: C() }],
        mx: [{ mx: C() }],
        my: [{ my: C() }],
        ms: [{ ms: C() }],
        me: [{ me: C() }],
        mt: [{ mt: C() }],
        mr: [{ mr: C() }],
        mb: [{ mb: C() }],
        ml: [{ ml: C() }],
        "space-x": [{ "space-x": B() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": B() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: G() }],
        w: [{ w: [h, "screen", ...G()] }],
        "min-w": [{ "min-w": [h, "screen", "none", ...G()] }],
        "max-w": [
          { "max-w": [h, "screen", "none", "prose", { screen: [d] }, ...G()] },
        ],
        h: [{ h: ["screen", "lh", ...G()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...G()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...G()] }],
        "font-size": [{ text: ["base", r, es, Li] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [i, oe, $d] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Wd,
              se,
            ],
          },
        ],
        "font-family": [{ font: [V2, se, n] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [u, oe, se] }],
        "line-clamp": [{ "line-clamp": [De, "none", oe, $d] }],
        leading: [{ leading: [o, ...B()] }],
        "list-image": [{ "list-image": ["none", oe, se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", oe, se] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: X() }],
        "text-color": [{ text: X() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [De, "from-font", "auto", oe, Li] },
        ],
        "text-decoration-color": [{ decoration: X() }],
        "underline-offset": [{ "underline-offset": [De, "auto", oe, se] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: B() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              oe,
              se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", oe, se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: he() }],
        "bg-repeat": [{ bg: N() }],
        "bg-size": [{ bg: E() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  si,
                  oe,
                  se,
                ],
                radial: ["", oe, se],
                conic: [si, oe, se],
              },
              Z2,
              X2,
            ],
          },
        ],
        "bg-color": [{ bg: X() }],
        "gradient-from-pos": [{ from: L() }],
        "gradient-via-pos": [{ via: L() }],
        "gradient-to-pos": [{ to: L() }],
        "gradient-from": [{ from: X() }],
        "gradient-via": [{ via: X() }],
        "gradient-to": [{ to: X() }],
        rounded: [{ rounded: P() }],
        "rounded-s": [{ "rounded-s": P() }],
        "rounded-e": [{ "rounded-e": P() }],
        "rounded-t": [{ "rounded-t": P() }],
        "rounded-r": [{ "rounded-r": P() }],
        "rounded-b": [{ "rounded-b": P() }],
        "rounded-l": [{ "rounded-l": P() }],
        "rounded-ss": [{ "rounded-ss": P() }],
        "rounded-se": [{ "rounded-se": P() }],
        "rounded-ee": [{ "rounded-ee": P() }],
        "rounded-es": [{ "rounded-es": P() }],
        "rounded-tl": [{ "rounded-tl": P() }],
        "rounded-tr": [{ "rounded-tr": P() }],
        "rounded-br": [{ "rounded-br": P() }],
        "rounded-bl": [{ "rounded-bl": P() }],
        "border-w": [{ border: ee() }],
        "border-w-x": [{ "border-x": ee() }],
        "border-w-y": [{ "border-y": ee() }],
        "border-w-s": [{ "border-s": ee() }],
        "border-w-e": [{ "border-e": ee() }],
        "border-w-t": [{ "border-t": ee() }],
        "border-w-r": [{ "border-r": ee() }],
        "border-w-b": [{ "border-b": ee() }],
        "border-w-l": [{ "border-l": ee() }],
        "divide-x": [{ "divide-x": ee() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": ee() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...ie(), "hidden", "none"] }],
        "divide-style": [{ divide: [...ie(), "hidden", "none"] }],
        "border-color": [{ border: X() }],
        "border-color-x": [{ "border-x": X() }],
        "border-color-y": [{ "border-y": X() }],
        "border-color-s": [{ "border-s": X() }],
        "border-color-e": [{ "border-e": X() }],
        "border-color-t": [{ "border-t": X() }],
        "border-color-r": [{ "border-r": X() }],
        "border-color-b": [{ "border-b": X() }],
        "border-color-l": [{ "border-l": X() }],
        "divide-color": [{ divide: X() }],
        "outline-style": [{ outline: [...ie(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [De, oe, se] }],
        "outline-w": [{ outline: ["", De, es, Li] }],
        "outline-color": [{ outline: X() }],
        shadow: [{ shadow: ["", "none", _, Jo, Ko] }],
        "shadow-color": [{ shadow: X() }],
        "inset-shadow": [{ "inset-shadow": ["none", b, Jo, Ko] }],
        "inset-shadow-color": [{ "inset-shadow": X() }],
        "ring-w": [{ ring: ee() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: X() }],
        "ring-offset-w": [{ "ring-offset": [De, Li] }],
        "ring-offset-color": [{ "ring-offset": X() }],
        "inset-ring-w": [{ "inset-ring": ee() }],
        "inset-ring-color": [{ "inset-ring": X() }],
        "text-shadow": [{ "text-shadow": ["none", T, Jo, Ko] }],
        "text-shadow-color": [{ "text-shadow": X() }],
        opacity: [{ opacity: [De, oe, se] }],
        "mix-blend": [
          { "mix-blend": [...me(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": me() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [De] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ae() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ae() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": X() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": X() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ae() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ae() }],
        "mask-image-t-from-color": [{ "mask-t-from": X() }],
        "mask-image-t-to-color": [{ "mask-t-to": X() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ae() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ae() }],
        "mask-image-r-from-color": [{ "mask-r-from": X() }],
        "mask-image-r-to-color": [{ "mask-r-to": X() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ae() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ae() }],
        "mask-image-b-from-color": [{ "mask-b-from": X() }],
        "mask-image-b-to-color": [{ "mask-b-to": X() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ae() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ae() }],
        "mask-image-l-from-color": [{ "mask-l-from": X() }],
        "mask-image-l-to-color": [{ "mask-l-to": X() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ae() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ae() }],
        "mask-image-x-from-color": [{ "mask-x-from": X() }],
        "mask-image-x-to-color": [{ "mask-x-to": X() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ae() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ae() }],
        "mask-image-y-from-color": [{ "mask-y-from": X() }],
        "mask-image-y-to-color": [{ "mask-y-to": X() }],
        "mask-image-radial": [{ "mask-radial": [oe, se] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ae() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ae() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": X() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": X() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": U() }],
        "mask-image-conic-pos": [{ "mask-conic": [De] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ae() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ae() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": X() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": X() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: he() }],
        "mask-repeat": [{ mask: N() }],
        "mask-size": [{ mask: E() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", oe, se] }],
        filter: [{ filter: ["", "none", oe, se] }],
        blur: [{ blur: Ze() }],
        brightness: [{ brightness: [De, oe, se] }],
        contrast: [{ contrast: [De, oe, se] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", x, Jo, Ko] }],
        "drop-shadow-color": [{ "drop-shadow": X() }],
        grayscale: [{ grayscale: ["", De, oe, se] }],
        "hue-rotate": [{ "hue-rotate": [De, oe, se] }],
        invert: [{ invert: ["", De, oe, se] }],
        saturate: [{ saturate: [De, oe, se] }],
        sepia: [{ sepia: ["", De, oe, se] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", oe, se] }],
        "backdrop-blur": [{ "backdrop-blur": Ze() }],
        "backdrop-brightness": [{ "backdrop-brightness": [De, oe, se] }],
        "backdrop-contrast": [{ "backdrop-contrast": [De, oe, se] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", De, oe, se] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [De, oe, se] }],
        "backdrop-invert": [{ "backdrop-invert": ["", De, oe, se] }],
        "backdrop-opacity": [{ "backdrop-opacity": [De, oe, se] }],
        "backdrop-saturate": [{ "backdrop-saturate": [De, oe, se] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", De, oe, se] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": B() }],
        "border-spacing-x": [{ "border-spacing-x": B() }],
        "border-spacing-y": [{ "border-spacing-y": B() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              oe,
              se,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [De, "initial", oe, se] }],
        ease: [{ ease: ["linear", "initial", q, oe, se] }],
        delay: [{ delay: [De, oe, se] }],
        animate: [{ animate: ["none", V, oe, se] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [S, oe, se] }],
        "perspective-origin": [{ "perspective-origin": Q() }],
        rotate: [{ rotate: ze() }],
        "rotate-x": [{ "rotate-x": ze() }],
        "rotate-y": [{ "rotate-y": ze() }],
        "rotate-z": [{ "rotate-z": ze() }],
        scale: [{ scale: Jt() }],
        "scale-x": [{ "scale-x": Jt() }],
        "scale-y": [{ "scale-y": Jt() }],
        "scale-z": [{ "scale-z": Jt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: mt() }],
        "skew-x": [{ "skew-x": mt() }],
        "skew-y": [{ "skew-y": mt() }],
        transform: [{ transform: [oe, se, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: Q() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: pt() }],
        "translate-x": [{ "translate-x": pt() }],
        "translate-y": [{ "translate-y": pt() }],
        "translate-z": [{ "translate-z": pt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: X() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: X() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              oe,
              se,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": B() }],
        "scroll-mx": [{ "scroll-mx": B() }],
        "scroll-my": [{ "scroll-my": B() }],
        "scroll-ms": [{ "scroll-ms": B() }],
        "scroll-me": [{ "scroll-me": B() }],
        "scroll-mt": [{ "scroll-mt": B() }],
        "scroll-mr": [{ "scroll-mr": B() }],
        "scroll-mb": [{ "scroll-mb": B() }],
        "scroll-ml": [{ "scroll-ml": B() }],
        "scroll-p": [{ "scroll-p": B() }],
        "scroll-px": [{ "scroll-px": B() }],
        "scroll-py": [{ "scroll-py": B() }],
        "scroll-ps": [{ "scroll-ps": B() }],
        "scroll-pe": [{ "scroll-pe": B() }],
        "scroll-pt": [{ "scroll-pt": B() }],
        "scroll-pr": [{ "scroll-pr": B() }],
        "scroll-pb": [{ "scroll-pb": B() }],
        "scroll-pl": [{ "scroll-pl": B() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", oe, se],
          },
        ],
        fill: [{ fill: ["none", ...X()] }],
        "stroke-w": [{ stroke: [De, es, Li, $d] }],
        stroke: [{ stroke: ["none", ...X()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  W2 = M2(F2);
function b_(...f) {
  return W2(u_(f));
}
function Zt(f) {
  return `./screenshots/${f}`;
}
const $2 = s2(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function cl({
  className: f,
  variant: n = "default",
  size: r = "default",
  asChild: i = !1,
  ...u
}) {
  const o = i ? l2 : "button";
  return y.jsx(o, {
    "data-slot": "button",
    "data-variant": n,
    "data-size": r,
    className: b_($2({ variant: n, size: r, className: f })),
    ...u,
  });
}
function P2() {
  const [f, n] = le.useState(!1),
    [r, i] = le.useState(!1),
    { totalItems: u, openCart: o } = Yh();
  le.useEffect(() => {
    const h = () => {
      n(window.scrollY > 50);
    };
    return (
      window.addEventListener("scroll", h, { passive: !0 }),
      () => window.removeEventListener("scroll", h)
    );
  }, []);
  const d = [
    { name: "Shop", href: "#products" },
    { name: "Collections", href: "#categories" },
    { name: "About", href: "#about" },
    { name: "Journal", href: "#blog" },
  ];
  return y.jsx("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-drift ${f ? "bg-cream/80 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"}`,
    children: y.jsxs("div", {
      className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16",
      children: [
        y.jsxs("nav", {
          className: "flex items-center justify-between",
          children: [
            y.jsx("a", {
              href: "#",
              className:
                "font-serif text-2xl sm:text-3xl text-dark-brown tracking-wide hover:text-coral transition-colors duration-300",
              children: "Velvet Rose",
            }),
            y.jsx("div", {
              className: "hidden md:flex items-center gap-8 lg:gap-10",
              children: d.map((h) =>
                y.jsxs(
                  "a",
                  {
                    href: h.href,
                    className:
                      "text-sm font-medium text-rich-brown hover:text-coral transition-colors duration-300 relative group",
                    children: [
                      h.name,
                      y.jsx("span", {
                        className:
                          "absolute -bottom-1 left-0 w-0 h-px bg-coral transition-all duration-300 group-hover:w-full",
                      }),
                    ],
                  },
                  h.name,
                ),
              ),
            }),
            y.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                y.jsxs(cl, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "relative hover:bg-pale-blush/50 transition-colors duration-300",
                  onClick: o,
                  children: [
                    y.jsx(_c, { className: "h-5 w-5 text-dark-brown" }),
                    u > 0 &&
                      y.jsx("span", {
                        className:
                          "absolute -top-1 -right-1 w-5 h-5 bg-coral text-white text-xs font-medium rounded-full flex items-center justify-center animate-scale-in",
                        children: u,
                      }),
                  ],
                }),
                y.jsx(cl, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "md:hidden hover:bg-pale-blush/50 transition-colors duration-300",
                  onClick: () => i(!r),
                  children: r
                    ? y.jsx(a_, { className: "h-5 w-5 text-dark-brown" })
                    : y.jsx(jx, { className: "h-5 w-5 text-dark-brown" }),
                }),
              ],
            }),
          ],
        }),
        y.jsx("div", {
          className: `md:hidden overflow-hidden transition-all duration-500 ease-sharp ${r ? "max-h-64 mt-4" : "max-h-0"}`,
          children: y.jsx("div", {
            className: "flex flex-col gap-4 py-4 border-t border-light-rose",
            children: d.map((h, m) =>
              y.jsx(
                "a",
                {
                  href: h.href,
                  className:
                    "text-base font-medium text-rich-brown hover:text-coral transition-colors duration-300",
                  style: { animationDelay: `${m * 0.1}s` },
                  onClick: () => i(!1),
                  children: h.name,
                },
                h.name,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
function Ma(f) {
  if (f === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return f;
}
function x_(f, n) {
  ((f.prototype = Object.create(n.prototype)),
    (f.prototype.constructor = f),
    (f.__proto__ = n));
}
var hn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  lu = { duration: 0.5, overwrite: !1, delay: 0 },
  Lh,
  dl,
  yt,
  Un = 1e8,
  ut = 1 / Un,
  mh = Math.PI * 2,
  I2 = mh / 4,
  eS = 0,
  S_ = Math.sqrt,
  tS = Math.cos,
  lS = Math.sin,
  al = function (n) {
    return typeof n == "string";
  },
  Ct = function (n) {
    return typeof n == "function";
  },
  ka = function (n) {
    return typeof n == "number";
  },
  Gh = function (n) {
    return typeof n > "u";
  },
  sa = function (n) {
    return typeof n == "object";
  },
  Xl = function (n) {
    return n !== !1;
  },
  Xh = function () {
    return typeof window < "u";
  },
  Fo = function (n) {
    return Ct(n) || al(n);
  },
  T_ =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Sl = Array.isArray,
  nS = /random\([^)]+\)/g,
  aS = /,\s*/g,
  v1 = /(?:-?\.?\d|\.)+/gi,
  w_ = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Kr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Pd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  E_ = /[+-]=-?[.\d]+/,
  iS = /[^,'"\[\]\s]+/gi,
  rS = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Et,
  la,
  ph,
  Vh,
  mn = {},
  bc = {},
  z_,
  A_ = function (n) {
    return (bc = nu(n, mn)) && Kl;
  },
  Qh = function (n, r) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  ws = function (n, r) {
    return !r && console.warn(n);
  },
  N_ = function (n, r) {
    return (n && (mn[n] = r) && bc && (bc[n] = r)) || mn;
  },
  Es = function () {
    return 0;
  },
  uS = { suppressEvents: !0, isStart: !0, kill: !1 },
  sc = { suppressEvents: !0, kill: !1 },
  sS = { suppressEvents: !0 },
  Zh = {},
  pi = [],
  gh = {},
  M_,
  un = {},
  Id = {},
  y1 = 30,
  oc = [],
  Kh = "",
  Jh = function (n) {
    var r = n[0],
      i,
      u;
    if ((sa(r) || Ct(r) || (n = [n]), !(i = (r._gsap || {}).harness))) {
      for (u = oc.length; u-- && !oc[u].targetTest(r); );
      i = oc[u];
    }
    for (u = n.length; u--; )
      (n[u] && (n[u]._gsap || (n[u]._gsap = new I_(n[u], i)))) ||
        n.splice(u, 1);
    return n;
  },
  Wi = function (n) {
    return n._gsap || Jh(Bn(n))[0]._gsap;
  },
  O_ = function (n, r, i) {
    return (i = n[r]) && Ct(i)
      ? n[r]()
      : (Gh(i) && n.getAttribute && n.getAttribute(r)) || i;
  },
  Vl = function (n, r) {
    return (n = n.split(",")).forEach(r) || n;
  },
  Ut = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  wt = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  Wr = function (n, r) {
    var i = r.charAt(0),
      u = parseFloat(r.substr(2));
    return (
      (n = parseFloat(n)),
      i === "+" ? n + u : i === "-" ? n - u : i === "*" ? n * u : n / u
    );
  },
  oS = function (n, r) {
    for (var i = r.length, u = 0; n.indexOf(r[u]) < 0 && ++u < i; );
    return u < i;
  },
  xc = function () {
    var n = pi.length,
      r = pi.slice(0),
      i,
      u;
    for (gh = {}, pi.length = 0, i = 0; i < n; i++)
      ((u = r[i]),
        u && u._lazy && (u.render(u._lazy[0], u._lazy[1], !0)._lazy = 0));
  },
  Fh = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  C_ = function (n, r, i, u) {
    (pi.length && !dl && xc(),
      n.render(r, i, !!(dl && r < 0 && Fh(n))),
      pi.length && !dl && xc());
  },
  j_ = function (n) {
    var r = parseFloat(n);
    return (r || r === 0) && (n + "").match(iS).length < 2
      ? r
      : al(n)
        ? n.trim()
        : n;
  },
  D_ = function (n) {
    return n;
  },
  pn = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  cS = function (n) {
    return function (r, i) {
      for (var u in i)
        u in r || (u === "duration" && n) || u === "ease" || (r[u] = i[u]);
    };
  },
  nu = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  b1 = function f(n, r) {
    for (var i in r)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (n[i] = sa(r[i]) ? f(n[i] || (n[i] = {}), r[i]) : r[i]);
    return n;
  },
  Sc = function (n, r) {
    var i = {},
      u;
    for (u in n) u in r || (i[u] = n[u]);
    return i;
  },
  fs = function (n) {
    var r = n.parent || Et,
      i = n.keyframes ? cS(Sl(n.keyframes)) : pn;
    if (Xl(n.inherit))
      for (; r; ) (i(n, r.vars.defaults), (r = r.parent || r._dp));
    return n;
  },
  fS = function (n, r) {
    for (var i = n.length, u = i === r.length; u && i-- && n[i] === r[i]; );
    return i < 0;
  },
  R_ = function (n, r, i, u, o) {
    var d = n[u],
      h;
    if (o) for (h = r[o]; d && d[o] > h; ) d = d._prev;
    return (
      d ? ((r._next = d._next), (d._next = r)) : ((r._next = n[i]), (n[i] = r)),
      r._next ? (r._next._prev = r) : (n[u] = r),
      (r._prev = d),
      (r.parent = r._dp = n),
      r
    );
  },
  Cc = function (n, r, i, u) {
    (i === void 0 && (i = "_first"), u === void 0 && (u = "_last"));
    var o = r._prev,
      d = r._next;
    (o ? (o._next = d) : n[i] === r && (n[i] = d),
      d ? (d._prev = o) : n[u] === r && (n[u] = o),
      (r._next = r._prev = r.parent = null));
  },
  vi = function (n, r) {
    (n.parent &&
      (!r || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0));
  },
  $i = function (n, r) {
    if (n && (!r || r._end > n._dur || r._start < 0))
      for (var i = n; i; ) ((i._dirty = 1), (i = i.parent));
    return n;
  },
  dS = function (n) {
    for (var r = n.parent; r && r.parent; )
      ((r._dirty = 1), r.totalDuration(), (r = r.parent));
    return n;
  },
  _h = function (n, r, i, u) {
    return (
      n._startAt &&
      (dl
        ? n._startAt.revert(sc)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(r, !0, u))
    );
  },
  hS = function f(n) {
    return !n || (n._ts && f(n.parent));
  },
  x1 = function (n) {
    return n._repeat ? au(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  au = function (n, r) {
    var i = Math.floor((n = wt(n / r)));
    return n && i === n ? i - 1 : i;
  },
  Tc = function (n, r) {
    return (
      (n - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  jc = function (n) {
    return (n._end = wt(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || ut) || 0),
    ));
  },
  Dc = function (n, r) {
    var i = n._dp;
    return (
      i &&
        i.smoothChildTiming &&
        n._ts &&
        ((n._start = wt(
          i._time -
            (n._ts > 0
              ? r / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts),
        )),
        jc(n),
        i._dirty || $i(i, n)),
      n
    );
  },
  k_ = function (n, r) {
    var i;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < n._time && (r._dur || !r.add))) &&
        ((i = Tc(n.rawTime(), r)),
        (!r._dur || Ds(0, r.totalDuration(), i) - r._tTime > ut) &&
          r.render(i, !0)),
      $i(n, r)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (i = n; i._dp; )
          (i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp));
      n._zTime = -ut;
    }
  },
  aa = function (n, r, i, u) {
    return (
      r.parent && vi(r),
      (r._start = wt(
        (ka(i) ? i : i || n !== Et ? Dn(n, i, r) : n._time) + r._delay,
      )),
      (r._end = wt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0),
      )),
      R_(n, r, "_first", "_last", n._sort ? "_start" : 0),
      vh(r) || (n._recent = r),
      u || k_(n, r),
      n._ts < 0 && Dc(n, n._tTime),
      n
    );
  },
  U_ = function (n, r) {
    return (
      (mn.ScrollTrigger || Qh("scrollTrigger", r)) &&
      mn.ScrollTrigger.create(r, n)
    );
  },
  B_ = function (n, r, i, u, o) {
    if (($h(n, r, o), !n._initted)) return 1;
    if (
      !i &&
      n._pt &&
      !dl &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      M_ !== on.frame
    )
      return (pi.push(n), (n._lazy = [o, u]), 1);
  },
  mS = function f(n) {
    var r = n.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || f(r));
  },
  vh = function (n) {
    var r = n.data;
    return r === "isFromStart" || r === "isStart";
  },
  pS = function (n, r, i, u) {
    var o = n.ratio,
      d =
        r < 0 ||
        (!r &&
          ((!n._start && mS(n) && !(!n._initted && vh(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !vh(n))))
          ? 0
          : 1,
      h = n._rDelay,
      m = 0,
      p,
      _,
      b;
    if (
      (h &&
        n._repeat &&
        ((m = Ds(0, n._tDur, r)),
        (_ = au(m, h)),
        n._yoyo && _ & 1 && (d = 1 - d),
        _ !== au(n._tTime, h) &&
          ((o = 1 - d), n.vars.repeatRefresh && n._initted && n.invalidate())),
      d !== o || dl || u || n._zTime === ut || (!r && n._zTime))
    ) {
      if (!n._initted && B_(n, r, u, i, m)) return;
      for (
        b = n._zTime,
          n._zTime = r || (i ? ut : 0),
          i || (i = r && !b),
          n.ratio = d,
          n._from && (d = 1 - d),
          n._time = 0,
          n._tTime = m,
          p = n._pt;
        p;
      )
        (p.r(d, p.d), (p = p._next));
      (r < 0 && _h(n, r, i, !0),
        n._onUpdate && !i && fn(n, "onUpdate"),
        m && n._repeat && !i && n.parent && fn(n, "onRepeat"),
        (r >= n._tDur || r < 0) &&
          n.ratio === d &&
          (d && vi(n, 1),
          !i &&
            !dl &&
            (fn(n, d ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom())));
    } else n._zTime || (n._zTime = r);
  },
  gS = function (n, r, i) {
    var u;
    if (i > r)
      for (u = n._first; u && u._start <= i; ) {
        if (u.data === "isPause" && u._start > r) return u;
        u = u._next;
      }
    else
      for (u = n._last; u && u._start >= i; ) {
        if (u.data === "isPause" && u._start < r) return u;
        u = u._prev;
      }
  },
  iu = function (n, r, i, u) {
    var o = n._repeat,
      d = wt(r) || 0,
      h = n._tTime / n._tDur;
    return (
      h && !u && (n._time *= d / n._dur),
      (n._dur = d),
      (n._tDur = o ? (o < 0 ? 1e10 : wt(d * (o + 1) + n._rDelay * o)) : d),
      h > 0 && !u && Dc(n, (n._tTime = n._tDur * h)),
      n.parent && jc(n),
      i || $i(n.parent, n),
      n
    );
  },
  S1 = function (n) {
    return n instanceof jl ? $i(n) : iu(n, n._dur);
  },
  _S = { _start: 0, endTime: Es, totalDuration: Es },
  Dn = function f(n, r, i) {
    var u = n.labels,
      o = n._recent || _S,
      d = n.duration() >= Un ? o.endTime(!1) : n._dur,
      h,
      m,
      p;
    return al(r) && (isNaN(r) || r in u)
      ? ((m = r.charAt(0)),
        (p = r.substr(-1) === "%"),
        (h = r.indexOf("=")),
        m === "<" || m === ">"
          ? (h >= 0 && (r = r.replace(/=/, "")),
            (m === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (p ? (h < 0 ? o : i).totalDuration() / 100 : 1))
          : h < 0
            ? (r in u || (u[r] = d), u[r])
            : ((m = parseFloat(r.charAt(h - 1) + r.substr(h + 1))),
              p && i && (m = (m / 100) * (Sl(i) ? i[0] : i).totalDuration()),
              h > 1 ? f(n, r.substr(0, h - 1), i) + m : d + m))
      : r == null
        ? d
        : +r;
  },
  ds = function (n, r, i) {
    var u = ka(r[1]),
      o = (u ? 2 : 1) + (n < 2 ? 0 : 1),
      d = r[o],
      h,
      m;
    if ((u && (d.duration = r[1]), (d.parent = i), n)) {
      for (h = d, m = i; m && !("immediateRender" in h); )
        ((h = m.vars.defaults || {}), (m = Xl(m.vars.inherit) && m.parent));
      ((d.immediateRender = Xl(h.immediateRender)),
        n < 2 ? (d.runBackwards = 1) : (d.startAt = r[o - 1]));
    }
    return new Qt(r[0], d, r[o + 1]);
  },
  Si = function (n, r) {
    return n || n === 0 ? r(n) : r;
  },
  Ds = function (n, r, i) {
    return i < n ? n : i > r ? r : i;
  },
  bl = function (n, r) {
    return !al(n) || !(r = rS.exec(n)) ? "" : r[1];
  },
  vS = function (n, r, i) {
    return Si(i, function (u) {
      return Ds(n, r, u);
    });
  },
  yh = [].slice,
  H_ = function (n, r) {
    return (
      n &&
      sa(n) &&
      "length" in n &&
      ((!r && !n.length) || (n.length - 1 in n && sa(n[0]))) &&
      !n.nodeType &&
      n !== la
    );
  },
  yS = function (n, r, i) {
    return (
      i === void 0 && (i = []),
      n.forEach(function (u) {
        var o;
        return (al(u) && !r) || H_(u, 1)
          ? (o = i).push.apply(o, Bn(u))
          : i.push(u);
      }) || i
    );
  },
  Bn = function (n, r, i) {
    return yt && !r && yt.selector
      ? yt.selector(n)
      : al(n) && !i && (ph || !ru())
        ? yh.call((r || Vh).querySelectorAll(n), 0)
        : Sl(n)
          ? yS(n, i)
          : H_(n)
            ? yh.call(n, 0)
            : n
              ? [n]
              : [];
  },
  bh = function (n) {
    return (
      (n = Bn(n)[0] || ws("Invalid scope") || {}),
      function (r) {
        var i = n.current || n.nativeElement || n;
        return Bn(
          r,
          i.querySelectorAll
            ? i
            : i === n
              ? ws("Invalid scope") || Vh.createElement("div")
              : n,
        );
      }
    );
  },
  Y_ = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  q_ = function (n) {
    if (Ct(n)) return n;
    var r = sa(n) ? n : { each: n },
      i = Pi(r.ease),
      u = r.from || 0,
      o = parseFloat(r.base) || 0,
      d = {},
      h = u > 0 && u < 1,
      m = isNaN(u) || h,
      p = r.axis,
      _ = u,
      b = u;
    return (
      al(u)
        ? (_ = b = { center: 0.5, edges: 0.5, end: 1 }[u] || 0)
        : !h && m && ((_ = u[0]), (b = u[1])),
      function (T, x, z) {
        var S = (z || r).length,
          M = d[S],
          q,
          V,
          K,
          U,
          Q,
          W,
          D,
          B,
          J;
        if (!M) {
          if (((J = r.grid === "auto" ? 0 : (r.grid || [1, Un])[1]), !J)) {
            for (
              D = -Un;
              D < (D = z[J++].getBoundingClientRect().left) && J < S;
            );
            J < S && J--;
          }
          for (
            M = d[S] = [],
              q = m ? Math.min(J, S) * _ - 0.5 : u % J,
              V = J === Un ? 0 : m ? (S * b) / J - 0.5 : (u / J) | 0,
              D = 0,
              B = Un,
              W = 0;
            W < S;
            W++
          )
            ((K = (W % J) - q),
              (U = V - ((W / J) | 0)),
              (M[W] = Q = p ? Math.abs(p === "y" ? U : K) : S_(K * K + U * U)),
              Q > D && (D = Q),
              Q < B && (B = Q));
          (u === "random" && Y_(M),
            (M.max = D - B),
            (M.min = B),
            (M.v = S =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (J > S
                    ? S - 1
                    : p
                      ? p === "y"
                        ? S / J
                        : J
                      : Math.max(J, S / J)) ||
                0) * (u === "edges" ? -1 : 1)),
            (M.b = S < 0 ? o - S : o),
            (M.u = bl(r.amount || r.each) || 0),
            (i = i && S < 0 ? W_(i) : i));
        }
        return (
          (S = (M[T] - M.min) / M.max || 0),
          wt(M.b + (i ? i(S) : S) * M.v) + M.u
        );
      }
    );
  },
  xh = function (n) {
    var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (i) {
      var u = wt(Math.round(parseFloat(i) / n) * n * r);
      return (u - (u % 1)) / r + (ka(i) ? 0 : bl(i));
    };
  },
  L_ = function (n, r) {
    var i = Sl(n),
      u,
      o;
    return (
      !i &&
        sa(n) &&
        ((u = i = n.radius || Un),
        n.values
          ? ((n = Bn(n.values)), (o = !ka(n[0])) && (u *= u))
          : (n = xh(n.increment))),
      Si(
        r,
        i
          ? Ct(n)
            ? function (d) {
                return ((o = n(d)), Math.abs(o - d) <= u ? o : d);
              }
            : function (d) {
                for (
                  var h = parseFloat(o ? d.x : d),
                    m = parseFloat(o ? d.y : 0),
                    p = Un,
                    _ = 0,
                    b = n.length,
                    T,
                    x;
                  b--;
                )
                  (o
                    ? ((T = n[b].x - h), (x = n[b].y - m), (T = T * T + x * x))
                    : (T = Math.abs(n[b] - h)),
                    T < p && ((p = T), (_ = b)));
                return (
                  (_ = !u || p <= u ? n[_] : d),
                  o || _ === d || ka(d) ? _ : _ + bl(d)
                );
              }
          : xh(n),
      )
    );
  },
  G_ = function (n, r, i, u) {
    return Si(Sl(n) ? !r : i === !0 ? !!(i = 0) : !u, function () {
      return Sl(n)
        ? n[~~(Math.random() * n.length)]
        : (i = i || 1e-5) &&
            (u = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - i / 2 + Math.random() * (r - n + i * 0.99)) / i) *
                i *
                u,
            ) / u;
    });
  },
  bS = function () {
    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
      r[i] = arguments[i];
    return function (u) {
      return r.reduce(function (o, d) {
        return d(o);
      }, u);
    };
  },
  xS = function (n, r) {
    return function (i) {
      return n(parseFloat(i)) + (r || bl(i));
    };
  },
  SS = function (n, r, i) {
    return V_(n, r, 0, 1, i);
  },
  X_ = function (n, r, i) {
    return Si(i, function (u) {
      return n[~~r(u)];
    });
  },
  TS = function f(n, r, i) {
    var u = r - n;
    return Sl(n)
      ? X_(n, f(0, n.length), r)
      : Si(i, function (o) {
          return ((u + ((o - n) % u)) % u) + n;
        });
  },
  wS = function f(n, r, i) {
    var u = r - n,
      o = u * 2;
    return Sl(n)
      ? X_(n, f(0, n.length - 1), r)
      : Si(i, function (d) {
          return ((d = (o + ((d - n) % o)) % o || 0), n + (d > u ? o - d : d));
        });
  },
  zs = function (n) {
    return n.replace(nS, function (r) {
      var i = r.indexOf("[") + 1,
        u = r.substring(i || 7, i ? r.indexOf("]") : r.length - 1).split(aS);
      return G_(i ? u : +u[0], i ? 0 : +u[1], +u[2] || 1e-5);
    });
  },
  V_ = function (n, r, i, u, o) {
    var d = r - n,
      h = u - i;
    return Si(o, function (m) {
      return i + (((m - n) / d) * h || 0);
    });
  },
  ES = function f(n, r, i, u) {
    var o = isNaN(n + r)
      ? 0
      : function (x) {
          return (1 - x) * n + x * r;
        };
    if (!o) {
      var d = al(n),
        h = {},
        m,
        p,
        _,
        b,
        T;
      if ((i === !0 && (u = 1) && (i = null), d))
        ((n = { p: n }), (r = { p: r }));
      else if (Sl(n) && !Sl(r)) {
        for (_ = [], b = n.length, T = b - 2, p = 1; p < b; p++)
          _.push(f(n[p - 1], n[p]));
        (b--,
          (o = function (z) {
            z *= b;
            var S = Math.min(T, ~~z);
            return _[S](z - S);
          }),
          (i = r));
      } else u || (n = nu(Sl(n) ? [] : {}, n));
      if (!_) {
        for (m in r) Wh.call(h, n, m, "get", r[m]);
        o = function (z) {
          return em(z, h) || (d ? n.p : n);
        };
      }
    }
    return Si(i, o);
  },
  T1 = function (n, r, i) {
    var u = n.labels,
      o = Un,
      d,
      h,
      m;
    for (d in u)
      ((h = u[d] - r),
        h < 0 == !!i && h && o > (h = Math.abs(h)) && ((m = d), (o = h)));
    return m;
  },
  fn = function (n, r, i) {
    var u = n.vars,
      o = u[r],
      d = yt,
      h = n._ctx,
      m,
      p,
      _;
    if (o)
      return (
        (m = u[r + "Params"]),
        (p = u.callbackScope || n),
        i && pi.length && xc(),
        h && (yt = h),
        (_ = m ? o.apply(p, m) : o.call(p)),
        (yt = d),
        _
      );
  },
  as = function (n) {
    return (
      vi(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!dl),
      n.progress() < 1 && fn(n, "onInterrupt"),
      n
    );
  },
  Jr,
  Q_ = [],
  Z_ = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Xh() || n.headless)) {
        var r = n.name,
          i = Ct(n),
          u =
            r && !i && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          o = {
            init: Es,
            render: em,
            add: Wh,
            kill: LS,
            modifier: qS,
            rawVars: 0,
          },
          d = {
            targetTest: 0,
            get: 0,
            getSetter: Ih,
            aliases: {},
            register: 0,
          };
        if ((ru(), n !== u)) {
          if (un[r]) return;
          (pn(u, pn(Sc(n, o), d)),
            nu(u.prototype, nu(o, Sc(n, d))),
            (un[(u.prop = r)] = u),
            n.targetTest && (oc.push(u), (Zh[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin"));
        }
        (N_(r, u), n.register && n.register(Kl, u, Ql));
      } else Q_.push(n);
  },
  rt = 255,
  is = {
    aqua: [0, rt, rt],
    lime: [0, rt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, rt],
    navy: [0, 0, 128],
    white: [rt, rt, rt],
    olive: [128, 128, 0],
    yellow: [rt, rt, 0],
    orange: [rt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [rt, 0, 0],
    pink: [rt, 192, 203],
    cyan: [0, rt, rt],
    transparent: [rt, rt, rt, 0],
  },
  eh = function (n, r, i) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? r + (i - r) * n * 6
        : n < 0.5
          ? i
          : n * 3 < 2
            ? r + (i - r) * (2 / 3 - n) * 6
            : r) *
        rt +
        0.5) |
        0
    );
  },
  K_ = function (n, r, i) {
    var u = n ? (ka(n) ? [n >> 16, (n >> 8) & rt, n & rt] : 0) : is.black,
      o,
      d,
      h,
      m,
      p,
      _,
      b,
      T,
      x,
      z;
    if (!u) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), is[n]))
        u = is[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((o = n.charAt(1)),
            (d = n.charAt(2)),
            (h = n.charAt(3)),
            (n =
              "#" +
              o +
              o +
              d +
              d +
              h +
              h +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (u = parseInt(n.substr(1, 6), 16)),
            [u >> 16, (u >> 8) & rt, u & rt, parseInt(n.substr(7), 16) / 255]
          );
        ((n = parseInt(n.substr(1), 16)),
          (u = [n >> 16, (n >> 8) & rt, n & rt]));
      } else if (n.substr(0, 3) === "hsl") {
        if (((u = z = n.match(v1)), !r))
          ((m = (+u[0] % 360) / 360),
            (p = +u[1] / 100),
            (_ = +u[2] / 100),
            (d = _ <= 0.5 ? _ * (p + 1) : _ + p - _ * p),
            (o = _ * 2 - d),
            u.length > 3 && (u[3] *= 1),
            (u[0] = eh(m + 1 / 3, o, d)),
            (u[1] = eh(m, o, d)),
            (u[2] = eh(m - 1 / 3, o, d)));
        else if (~n.indexOf("="))
          return ((u = n.match(w_)), i && u.length < 4 && (u[3] = 1), u);
      } else u = n.match(v1) || is.transparent;
      u = u.map(Number);
    }
    return (
      r &&
        !z &&
        ((o = u[0] / rt),
        (d = u[1] / rt),
        (h = u[2] / rt),
        (b = Math.max(o, d, h)),
        (T = Math.min(o, d, h)),
        (_ = (b + T) / 2),
        b === T
          ? (m = p = 0)
          : ((x = b - T),
            (p = _ > 0.5 ? x / (2 - b - T) : x / (b + T)),
            (m =
              b === o
                ? (d - h) / x + (d < h ? 6 : 0)
                : b === d
                  ? (h - o) / x + 2
                  : (o - d) / x + 4),
            (m *= 60)),
        (u[0] = ~~(m + 0.5)),
        (u[1] = ~~(p * 100 + 0.5)),
        (u[2] = ~~(_ * 100 + 0.5))),
      i && u.length < 4 && (u[3] = 1),
      u
    );
  },
  J_ = function (n) {
    var r = [],
      i = [],
      u = -1;
    return (
      n.split(gi).forEach(function (o) {
        var d = o.match(Kr) || [];
        (r.push.apply(r, d), i.push((u += d.length + 1)));
      }),
      (r.c = i),
      r
    );
  },
  w1 = function (n, r, i) {
    var u = "",
      o = (n + u).match(gi),
      d = r ? "hsla(" : "rgba(",
      h = 0,
      m,
      p,
      _,
      b;
    if (!o) return n;
    if (
      ((o = o.map(function (T) {
        return (
          (T = K_(T, r, 1)) &&
          d +
            (r ? T[0] + "," + T[1] + "%," + T[2] + "%," + T[3] : T.join(",")) +
            ")"
        );
      })),
      i && ((_ = J_(n)), (m = i.c), m.join(u) !== _.c.join(u)))
    )
      for (p = n.replace(gi, "1").split(Kr), b = p.length - 1; h < b; h++)
        u +=
          p[h] +
          (~m.indexOf(h)
            ? o.shift() || d + "0,0,0,0)"
            : (_.length ? _ : o.length ? o : i).shift());
    if (!p)
      for (p = n.split(gi), b = p.length - 1; h < b; h++) u += p[h] + o[h];
    return u + p[b];
  },
  gi = (function () {
    var f =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in is) f += "|" + n + "\\b";
    return new RegExp(f + ")", "gi");
  })(),
  zS = /hsl[a]?\(/,
  F_ = function (n) {
    var r = n.join(" "),
      i;
    if (((gi.lastIndex = 0), gi.test(r)))
      return (
        (i = zS.test(r)),
        (n[1] = w1(n[1], i)),
        (n[0] = w1(n[0], i, J_(n[1]))),
        !0
      );
  },
  As,
  on = (function () {
    var f = Date.now,
      n = 500,
      r = 33,
      i = f(),
      u = i,
      o = 1e3 / 240,
      d = o,
      h = [],
      m,
      p,
      _,
      b,
      T,
      x,
      z = function S(M) {
        var q = f() - u,
          V = M === !0,
          K,
          U,
          Q,
          W;
        if (
          ((q > n || q < 0) && (i += q - r),
          (u += q),
          (Q = u - i),
          (K = Q - d),
          (K > 0 || V) &&
            ((W = ++b.frame),
            (T = Q - b.time * 1e3),
            (b.time = Q = Q / 1e3),
            (d += K + (K >= o ? 4 : o - K)),
            (U = 1)),
          V || (m = p(S)),
          U)
        )
          for (x = 0; x < h.length; x++) h[x](Q, T, W, M);
      };
    return (
      (b = {
        time: 0,
        frame: 0,
        tick: function () {
          z(!0);
        },
        deltaRatio: function (M) {
          return T / (1e3 / (M || 60));
        },
        wake: function () {
          z_ &&
            (!ph &&
              Xh() &&
              ((la = ph = window),
              (Vh = la.document || {}),
              (mn.gsap = Kl),
              (la.gsapVersions || (la.gsapVersions = [])).push(Kl.version),
              A_(bc || la.GreenSockGlobals || (!la.gsap && la) || {}),
              Q_.forEach(Z_)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && b.sleep(),
            (p =
              _ ||
              function (M) {
                return setTimeout(M, (d - b.time * 1e3 + 1) | 0);
              }),
            (As = 1),
            z(2));
        },
        sleep: function () {
          ((_ ? cancelAnimationFrame : clearTimeout)(m), (As = 0), (p = Es));
        },
        lagSmoothing: function (M, q) {
          ((n = M || 1 / 0), (r = Math.min(q || 33, n)));
        },
        fps: function (M) {
          ((o = 1e3 / (M || 240)), (d = b.time * 1e3 + o));
        },
        add: function (M, q, V) {
          var K = q
            ? function (U, Q, W, D) {
                (M(U, Q, W, D), b.remove(K));
              }
            : M;
          return (b.remove(M), h[V ? "unshift" : "push"](K), ru(), K);
        },
        remove: function (M, q) {
          ~(q = h.indexOf(M)) && h.splice(q, 1) && x >= q && x--;
        },
        _listeners: h,
      }),
      b
    );
  })(),
  ru = function () {
    return !As && on.wake();
  },
  Qe = {},
  AS = /^[\d.\-M][\d.\-,\s]/,
  NS = /["']/g,
  MS = function (n) {
    for (
      var r = {},
        i = n.substr(1, n.length - 3).split(":"),
        u = i[0],
        o = 1,
        d = i.length,
        h,
        m,
        p;
      o < d;
      o++
    )
      ((m = i[o]),
        (h = o !== d - 1 ? m.lastIndexOf(",") : m.length),
        (p = m.substr(0, h)),
        (r[u] = isNaN(p) ? p.replace(NS, "").trim() : +p),
        (u = m.substr(h + 1).trim()));
    return r;
  },
  OS = function (n) {
    var r = n.indexOf("(") + 1,
      i = n.indexOf(")"),
      u = n.indexOf("(", r);
    return n.substring(r, ~u && u < i ? n.indexOf(")", i + 1) : i);
  },
  CS = function (n) {
    var r = (n + "").split("("),
      i = Qe[r[0]];
    return i && r.length > 1 && i.config
      ? i.config.apply(
          null,
          ~n.indexOf("{") ? [MS(r[1])] : OS(n).split(",").map(j_),
        )
      : Qe._CE && AS.test(n)
        ? Qe._CE("", n)
        : i;
  },
  W_ = function (n) {
    return function (r) {
      return 1 - n(1 - r);
    };
  },
  $_ = function f(n, r) {
    for (var i = n._first, u; i; )
      (i instanceof jl
        ? f(i, r)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== r &&
          (i.timeline
            ? f(i.timeline, r)
            : ((u = i._ease),
              (i._ease = i._yEase),
              (i._yEase = u),
              (i._yoyo = r))),
        (i = i._next));
  },
  Pi = function (n, r) {
    return (n && (Ct(n) ? n : Qe[n] || CS(n))) || r;
  },
  rr = function (n, r, i, u) {
    (i === void 0 &&
      (i = function (m) {
        return 1 - r(1 - m);
      }),
      u === void 0 &&
        (u = function (m) {
          return m < 0.5 ? r(m * 2) / 2 : 1 - r((1 - m) * 2) / 2;
        }));
    var o = { easeIn: r, easeOut: i, easeInOut: u },
      d;
    return (
      Vl(n, function (h) {
        ((Qe[h] = mn[h] = o), (Qe[(d = h.toLowerCase())] = i));
        for (var m in o)
          Qe[
            d + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")
          ] = Qe[h + "." + m] = o[m];
      }),
      o
    );
  },
  P_ = function (n) {
    return function (r) {
      return r < 0.5 ? (1 - n(1 - r * 2)) / 2 : 0.5 + n((r - 0.5) * 2) / 2;
    };
  },
  th = function f(n, r, i) {
    var u = r >= 1 ? r : 1,
      o = (i || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      d = (o / mh) * (Math.asin(1 / u) || 0),
      h = function (_) {
        return _ === 1 ? 1 : u * Math.pow(2, -10 * _) * lS((_ - d) * o) + 1;
      },
      m =
        n === "out"
          ? h
          : n === "in"
            ? function (p) {
                return 1 - h(1 - p);
              }
            : P_(h);
    return (
      (o = mh / o),
      (m.config = function (p, _) {
        return f(n, p, _);
      }),
      m
    );
  },
  lh = function f(n, r) {
    r === void 0 && (r = 1.70158);
    var i = function (d) {
        return d ? --d * d * ((r + 1) * d + r) + 1 : 0;
      },
      u =
        n === "out"
          ? i
          : n === "in"
            ? function (o) {
                return 1 - i(1 - o);
              }
            : P_(i);
    return (
      (u.config = function (o) {
        return f(n, o);
      }),
      u
    );
  };
Vl("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, n) {
  var r = n < 5 ? n + 1 : n;
  rr(
    f + ",Power" + (r - 1),
    n
      ? function (i) {
          return Math.pow(i, r);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, r);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, r) / 2
        : 1 - Math.pow((1 - i) * 2, r) / 2;
    },
  );
});
Qe.Linear.easeNone = Qe.none = Qe.Linear.easeIn;
rr("Elastic", th("in"), th("out"), th());
(function (f, n) {
  var r = 1 / n,
    i = 2 * r,
    u = 2.5 * r,
    o = function (h) {
      return h < r
        ? f * h * h
        : h < i
          ? f * Math.pow(h - 1.5 / n, 2) + 0.75
          : h < u
            ? f * (h -= 2.25 / n) * h + 0.9375
            : f * Math.pow(h - 2.625 / n, 2) + 0.984375;
    };
  rr(
    "Bounce",
    function (d) {
      return 1 - o(1 - d);
    },
    o,
  );
})(7.5625, 2.75);
rr("Expo", function (f) {
  return Math.pow(2, 10 * (f - 1)) * f + f * f * f * f * f * f * (1 - f);
});
rr("Circ", function (f) {
  return -(S_(1 - f * f) - 1);
});
rr("Sine", function (f) {
  return f === 1 ? 1 : -tS(f * I2) + 1;
});
rr("Back", lh("in"), lh("out"), lh());
Qe.SteppedEase =
  Qe.steps =
  mn.SteppedEase =
    {
      config: function (n, r) {
        n === void 0 && (n = 1);
        var i = 1 / n,
          u = n + (r ? 0 : 1),
          o = r ? 1 : 0,
          d = 1 - ut;
        return function (h) {
          return (((u * Ds(0, d, h)) | 0) + o) * i;
        };
      },
    };
lu.ease = Qe["quad.out"];
Vl(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (f) {
    return (Kh += f + "," + f + "Params,");
  },
);
var I_ = function (n, r) {
    ((this.id = eS++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = r),
      (this.get = r ? r.get : O_),
      (this.set = r ? r.getSetter : Ih));
  },
  Ns = (function () {
    function f(r) {
      ((this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        iu(this, +r.duration, 1, 1),
        (this.data = r.data),
        yt && ((this._ctx = yt), yt.data.push(this)),
        As || on.wake());
    }
    var n = f.prototype;
    return (
      (n.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (n.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i,
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            iu(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (n.totalTime = function (i, u) {
        if ((ru(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (Dc(this, i), !o._dp || o.parent || k_(o, this); o && o.parent; )
            (o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            aa(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !u) ||
            (this._initted && Math.abs(this._zTime) === ut) ||
            (!this._initted && this._dur && i) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), C_(this, i, u)),
          this
        );
      }),
      (n.time = function (i, u) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + x1(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              u,
            )
          : this._time;
      }),
      (n.totalProgress = function (i, u) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, u)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (n.progress = function (i, u) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                x1(this),
              u,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (n.iteration = function (i, u) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * o, u)
          : this._repeat
            ? au(this._tTime, o) + 1
            : 1;
      }),
      (n.timeScale = function (i, u) {
        if (!arguments.length) return this._rts === -ut ? 0 : this._rts;
        if (this._rts === i) return this;
        var o =
          this.parent && this._ts ? Tc(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -ut ? 0 : this._rts),
          this.totalTime(
            Ds(-Math.abs(this._delay), this.totalDuration(), o),
            u !== !1,
          ),
          jc(this),
          dS(this)
        );
      }),
      (n.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ru(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ut &&
                      (this._tTime -= ut),
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (i) {
        if (arguments.length) {
          this._start = wt(i);
          var u = this.parent || this._dp;
          return (
            u &&
              (u._sort || !this.parent) &&
              aa(u, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (n.endTime = function (i) {
        return (
          this._start +
          (Xl(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (i) {
        var u = this.parent || this._dp;
        return u
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Tc(u.rawTime(i), this)
              : this._tTime
          : this._tTime;
      }),
      (n.revert = function (i) {
        i === void 0 && (i = sS);
        var u = dl;
        return (
          (dl = i),
          Fh(this) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (dl = u),
          this
        );
      }),
      (n.globalTime = function (i) {
        for (var u = this, o = arguments.length ? i : u.rawTime(); u; )
          ((o = u._start + o / (Math.abs(u._ts) || 1)), (u = u._dp));
        return !this.parent && this._sat ? this._sat.globalTime(i) : o;
      }),
      (n.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), S1(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (n.repeatDelay = function (i) {
        if (arguments.length) {
          var u = this._time;
          return ((this._rDelay = i), S1(this), u ? this.time(u) : this);
        }
        return this._rDelay;
      }),
      (n.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (n.seek = function (i, u) {
        return this.totalTime(Dn(this, i), Xl(u));
      }),
      (n.restart = function (i, u) {
        return (
          this.play().totalTime(i ? -this._delay : 0, Xl(u)),
          this._dur || (this._zTime = -ut),
          this
        );
      }),
      (n.play = function (i, u) {
        return (i != null && this.seek(i, u), this.reversed(!1).paused(!1));
      }),
      (n.reverse = function (i, u) {
        return (
          i != null && this.seek(i || this.totalDuration(), u),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (i, u) {
        return (i != null && this.seek(i, u), this.paused(!0));
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -ut : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -ut), this);
      }),
      (n.isActive = function () {
        var i = this.parent || this._dp,
          u = this._start,
          o;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (o = i.rawTime(!0)) >= u &&
            o < this.endTime(!0) - ut)
        );
      }),
      (n.eventCallback = function (i, u, o) {
        var d = this.vars;
        return arguments.length > 1
          ? (u
              ? ((d[i] = u),
                o && (d[i + "Params"] = o),
                i === "onUpdate" && (this._onUpdate = u))
              : delete d[i],
            this)
          : d[i];
      }),
      (n.then = function (i) {
        var u = this,
          o = u._prom;
        return new Promise(function (d) {
          var h = Ct(i) ? i : D_,
            m = function () {
              var _ = u.then;
              ((u.then = null),
                o && o(),
                Ct(h) && (h = h(u)) && (h.then || h === u) && (u.then = _),
                d(h),
                (u.then = _));
            };
          (u._initted && u.totalProgress() === 1 && u._ts >= 0) ||
          (!u._tTime && u._ts < 0)
            ? m()
            : (u._prom = m);
        });
      }),
      (n.kill = function () {
        as(this);
      }),
      f
    );
  })();
pn(Ns.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ut,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var jl = (function (f) {
  x_(n, f);
  function n(i, u) {
    var o;
    return (
      i === void 0 && (i = {}),
      (o = f.call(this, i) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!i.smoothChildTiming),
      (o.autoRemoveChildren = !!i.autoRemoveChildren),
      (o._sort = Xl(i.sortChildren)),
      Et && aa(i.parent || Et, Ma(o), u),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      i.scrollTrigger && U_(Ma(o), i.scrollTrigger),
      o
    );
  }
  var r = n.prototype;
  return (
    (r.to = function (u, o, d) {
      return (ds(0, arguments, this), this);
    }),
    (r.from = function (u, o, d) {
      return (ds(1, arguments, this), this);
    }),
    (r.fromTo = function (u, o, d, h) {
      return (ds(2, arguments, this), this);
    }),
    (r.set = function (u, o, d) {
      return (
        (o.duration = 0),
        (o.parent = this),
        fs(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Qt(u, o, Dn(this, d), 1),
        this
      );
    }),
    (r.call = function (u, o, d) {
      return aa(this, Qt.delayedCall(0, u, o), d);
    }),
    (r.staggerTo = function (u, o, d, h, m, p, _) {
      return (
        (d.duration = o),
        (d.stagger = d.stagger || h),
        (d.onComplete = p),
        (d.onCompleteParams = _),
        (d.parent = this),
        new Qt(u, d, Dn(this, m)),
        this
      );
    }),
    (r.staggerFrom = function (u, o, d, h, m, p, _) {
      return (
        (d.runBackwards = 1),
        (fs(d).immediateRender = Xl(d.immediateRender)),
        this.staggerTo(u, o, d, h, m, p, _)
      );
    }),
    (r.staggerFromTo = function (u, o, d, h, m, p, _, b) {
      return (
        (h.startAt = d),
        (fs(h).immediateRender = Xl(h.immediateRender)),
        this.staggerTo(u, o, h, m, p, _, b)
      );
    }),
    (r.render = function (u, o, d) {
      var h = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        _ = u <= 0 ? 0 : wt(u),
        b = this._zTime < 0 != u < 0 && (this._initted || !p),
        T,
        x,
        z,
        S,
        M,
        q,
        V,
        K,
        U,
        Q,
        W,
        D;
      if (
        (this !== Et && _ > m && u >= 0 && (_ = m), _ !== this._tTime || d || b)
      ) {
        if (
          (h !== this._time &&
            p &&
            ((_ += this._time - h), (u += this._time - h)),
          (T = _),
          (U = this._start),
          (K = this._ts),
          (q = !K),
          b && (p || (h = this._zTime), (u || !o) && (this._zTime = u)),
          this._repeat)
        ) {
          if (
            ((W = this._yoyo),
            (M = p + this._rDelay),
            this._repeat < -1 && u < 0)
          )
            return this.totalTime(M * 100 + u, o, d);
          if (
            ((T = wt(_ % M)),
            _ === m
              ? ((S = this._repeat), (T = p))
              : ((Q = wt(_ / M)),
                (S = ~~Q),
                S && S === Q && ((T = p), S--),
                T > p && (T = p)),
            (Q = au(this._tTime, M)),
            !h &&
              this._tTime &&
              Q !== S &&
              this._tTime - Q * M - this._dur <= 0 &&
              (Q = S),
            W && S & 1 && ((T = p - T), (D = 1)),
            S !== Q && !this._lock)
          ) {
            var B = W && Q & 1,
              J = B === (W && S & 1);
            if (
              (S < Q && (B = !B),
              (h = B ? 0 : _ % p ? p : _),
              (this._lock = 1),
              (this.render(h || (D ? 0 : wt(S * M)), o, !p)._lock = 0),
              (this._tTime = _),
              !o && this.parent && fn(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !D &&
                ((this.invalidate()._lock = 1), (Q = S)),
              (h && h !== this._time) ||
                q !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (m = this._tDur),
              J &&
                ((this._lock = 2),
                (h = B ? p : -1e-4),
                this.render(h, !0),
                this.vars.repeatRefresh && !D && this.invalidate()),
              (this._lock = 0),
              !this._ts && !q)
            )
              return this;
            $_(this, D);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((V = gS(this, wt(h), wt(T))), V && (_ -= T - (T = V._start))),
          (this._tTime = _),
          (this._time = T),
          (this._act = !K),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = u),
            (h = 0)),
          !h && _ && p && !o && !Q && (fn(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (T >= h && u >= 0)
          for (x = this._first; x; ) {
            if (
              ((z = x._next), (x._act || T >= x._start) && x._ts && V !== x)
            ) {
              if (x.parent !== this) return this.render(u, o, d);
              if (
                (x.render(
                  x._ts > 0
                    ? (T - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (T - x._start) * x._ts,
                  o,
                  d,
                ),
                T !== this._time || (!this._ts && !q))
              ) {
                ((V = 0), z && (_ += this._zTime = -ut));
                break;
              }
            }
            x = z;
          }
        else {
          x = this._last;
          for (var I = u < 0 ? u : T; x; ) {
            if (((z = x._prev), (x._act || I <= x._end) && x._ts && V !== x)) {
              if (x.parent !== this) return this.render(u, o, d);
              if (
                (x.render(
                  x._ts > 0
                    ? (I - x._start) * x._ts
                    : (x._dirty ? x.totalDuration() : x._tDur) +
                        (I - x._start) * x._ts,
                  o,
                  d || (dl && Fh(x)),
                ),
                T !== this._time || (!this._ts && !q))
              ) {
                ((V = 0), z && (_ += this._zTime = I ? -ut : ut));
                break;
              }
            }
            x = z;
          }
        }
        if (
          V &&
          !o &&
          (this.pause(),
          (V.render(T >= h ? 0 : -ut)._zTime = T >= h ? 1 : -1),
          this._ts)
        )
          return ((this._start = U), jc(this), this.render(u, o, d));
        (this._onUpdate && !o && fn(this, "onUpdate", !0),
          ((_ === m && this._tTime >= this.totalDuration()) || (!_ && h)) &&
            (U === this._start || Math.abs(K) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((u || !p) &&
                ((_ === m && this._ts > 0) || (!_ && this._ts < 0)) &&
                vi(this, 1),
              !o &&
                !(u < 0 && !h) &&
                (_ || h || !m) &&
                (fn(
                  this,
                  _ === m && u >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(_ < m && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (r.add = function (u, o) {
      var d = this;
      if ((ka(o) || (o = Dn(this, o, u)), !(u instanceof Ns))) {
        if (Sl(u))
          return (
            u.forEach(function (h) {
              return d.add(h, o);
            }),
            this
          );
        if (al(u)) return this.addLabel(u, o);
        if (Ct(u)) u = Qt.delayedCall(0, u);
        else return this;
      }
      return this !== u ? aa(this, u, o) : this;
    }),
    (r.getChildren = function (u, o, d, h) {
      (u === void 0 && (u = !0),
        o === void 0 && (o = !0),
        d === void 0 && (d = !0),
        h === void 0 && (h = -Un));
      for (var m = [], p = this._first; p; )
        (p._start >= h &&
          (p instanceof Qt
            ? o && m.push(p)
            : (d && m.push(p), u && m.push.apply(m, p.getChildren(!0, o, d)))),
          (p = p._next));
      return m;
    }),
    (r.getById = function (u) {
      for (var o = this.getChildren(1, 1, 1), d = o.length; d--; )
        if (o[d].vars.id === u) return o[d];
    }),
    (r.remove = function (u) {
      return al(u)
        ? this.removeLabel(u)
        : Ct(u)
          ? this.killTweensOf(u)
          : (u.parent === this && Cc(this, u),
            u === this._recent && (this._recent = this._last),
            $i(this));
    }),
    (r.totalTime = function (u, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = wt(
              on.time -
                (this._ts > 0
                  ? u / this._ts
                  : (this.totalDuration() - u) / -this._ts),
            )),
          f.prototype.totalTime.call(this, u, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (u, o) {
      return ((this.labels[u] = Dn(this, o)), this);
    }),
    (r.removeLabel = function (u) {
      return (delete this.labels[u], this);
    }),
    (r.addPause = function (u, o, d) {
      var h = Qt.delayedCall(0, o || Es, d);
      return (
        (h.data = "isPause"),
        (this._hasPause = 1),
        aa(this, h, Dn(this, u))
      );
    }),
    (r.removePause = function (u) {
      var o = this._first;
      for (u = Dn(this, u); o; )
        (o._start === u && o.data === "isPause" && vi(o), (o = o._next));
    }),
    (r.killTweensOf = function (u, o, d) {
      for (var h = this.getTweensOf(u, d), m = h.length; m--; )
        ci !== h[m] && h[m].kill(u, o);
      return this;
    }),
    (r.getTweensOf = function (u, o) {
      for (var d = [], h = Bn(u), m = this._first, p = ka(o), _; m; )
        (m instanceof Qt
          ? oS(m._targets, h) &&
            (p
              ? (!ci || (m._initted && m._ts)) &&
                m.globalTime(0) <= o &&
                m.globalTime(m.totalDuration()) > o
              : !o || m.isActive()) &&
            d.push(m)
          : (_ = m.getTweensOf(h, o)).length && d.push.apply(d, _),
          (m = m._next));
      return d;
    }),
    (r.tweenTo = function (u, o) {
      o = o || {};
      var d = this,
        h = Dn(d, u),
        m = o,
        p = m.startAt,
        _ = m.onStart,
        b = m.onStartParams,
        T = m.immediateRender,
        x,
        z = Qt.to(
          d,
          pn(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: h,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (h - (p && "time" in p ? p.time : d._time)) / d.timeScale(),
                ) ||
                ut,
              onStart: function () {
                if ((d.pause(), !x)) {
                  var M =
                    o.duration ||
                    Math.abs(
                      (h - (p && "time" in p ? p.time : d._time)) /
                        d.timeScale(),
                    );
                  (z._dur !== M && iu(z, M, 0, 1).render(z._time, !0, !0),
                    (x = 1));
                }
                _ && _.apply(z, b || []);
              },
            },
            o,
          ),
        );
      return T ? z.render(0) : z;
    }),
    (r.tweenFromTo = function (u, o, d) {
      return this.tweenTo(o, pn({ startAt: { time: Dn(this, u) } }, d));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (u) {
      return (u === void 0 && (u = this._time), T1(this, Dn(this, u)));
    }),
    (r.previousLabel = function (u) {
      return (u === void 0 && (u = this._time), T1(this, Dn(this, u), 1));
    }),
    (r.currentLabel = function (u) {
      return arguments.length
        ? this.seek(u, !0)
        : this.previousLabel(this._time + ut);
    }),
    (r.shiftChildren = function (u, o, d) {
      d === void 0 && (d = 0);
      var h = this._first,
        m = this.labels,
        p;
      for (u = wt(u); h; )
        (h._start >= d && ((h._start += u), (h._end += u)), (h = h._next));
      if (o) for (p in m) m[p] >= d && (m[p] += u);
      return $i(this);
    }),
    (r.invalidate = function (u) {
      var o = this._first;
      for (this._lock = 0; o; ) (o.invalidate(u), (o = o._next));
      return f.prototype.invalidate.call(this, u);
    }),
    (r.clear = function (u) {
      u === void 0 && (u = !0);
      for (var o = this._first, d; o; )
        ((d = o._next), this.remove(o), (o = d));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        u && (this.labels = {}),
        $i(this)
      );
    }),
    (r.totalDuration = function (u) {
      var o = 0,
        d = this,
        h = d._last,
        m = Un,
        p,
        _,
        b;
      if (arguments.length)
        return d.timeScale(
          (d._repeat < 0 ? d.duration() : d.totalDuration()) /
            (d.reversed() ? -u : u),
        );
      if (d._dirty) {
        for (b = d.parent; h; )
          ((p = h._prev),
            h._dirty && h.totalDuration(),
            (_ = h._start),
            _ > m && d._sort && h._ts && !d._lock
              ? ((d._lock = 1), (aa(d, h, _ - h._delay, 1)._lock = 0))
              : (m = _),
            _ < 0 &&
              h._ts &&
              ((o -= _),
              ((!b && !d._dp) || (b && b.smoothChildTiming)) &&
                ((d._start += wt(_ / d._ts)), (d._time -= _), (d._tTime -= _)),
              d.shiftChildren(-_, !1, -1 / 0),
              (m = 0)),
            h._end > o && h._ts && (o = h._end),
            (h = p));
        (iu(d, d === Et && d._time > o ? d._time : o, 1, 1), (d._dirty = 0));
      }
      return d._tDur;
    }),
    (n.updateRoot = function (u) {
      if ((Et._ts && (C_(Et, Tc(u, Et)), (M_ = on.frame)), on.frame >= y1)) {
        y1 += hn.autoSleep || 120;
        var o = Et._first;
        if ((!o || !o._ts) && hn.autoSleep && on._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || on.sleep();
        }
      }
    }),
    n
  );
})(Ns);
pn(jl.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var jS = function (n, r, i, u, o, d, h) {
    var m = new Ql(this._pt, n, r, 0, 1, iv, null, o),
      p = 0,
      _ = 0,
      b,
      T,
      x,
      z,
      S,
      M,
      q,
      V;
    for (
      m.b = i,
        m.e = u,
        i += "",
        u += "",
        (q = ~u.indexOf("random(")) && (u = zs(u)),
        d && ((V = [i, u]), d(V, n, r), (i = V[0]), (u = V[1])),
        T = i.match(Pd) || [];
      (b = Pd.exec(u));
    )
      ((z = b[0]),
        (S = u.substring(p, b.index)),
        x ? (x = (x + 1) % 5) : S.substr(-5) === "rgba(" && (x = 1),
        z !== T[_++] &&
          ((M = parseFloat(T[_ - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: S || _ === 1 ? S : ",",
            s: M,
            c: z.charAt(1) === "=" ? Wr(M, z) - M : parseFloat(z) - M,
            m: x && x < 4 ? Math.round : 0,
          }),
          (p = Pd.lastIndex)));
    return (
      (m.c = p < u.length ? u.substring(p, u.length) : ""),
      (m.fp = h),
      (E_.test(u) || q) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  Wh = function (n, r, i, u, o, d, h, m, p, _) {
    Ct(u) && (u = u(o || 0, n, d));
    var b = n[r],
      T =
        i !== "get"
          ? i
          : Ct(b)
            ? p
              ? n[
                  r.indexOf("set") || !Ct(n["get" + r.substr(3)])
                    ? r
                    : "get" + r.substr(3)
                ](p)
              : n[r]()
            : b,
      x = Ct(b) ? (p ? BS : nv) : Ph,
      z;
    if (
      (al(u) &&
        (~u.indexOf("random(") && (u = zs(u)),
        u.charAt(1) === "=" &&
          ((z = Wr(T, u) + (bl(T) || 0)), (z || z === 0) && (u = z))),
      !_ || T !== u || Sh)
    )
      return !isNaN(T * u) && u !== ""
        ? ((z = new Ql(
            this._pt,
            n,
            r,
            +T || 0,
            u - (T || 0),
            typeof b == "boolean" ? YS : av,
            0,
            x,
          )),
          p && (z.fp = p),
          h && z.modifier(h, this, n),
          (this._pt = z))
        : (!b && !(r in n) && Qh(r, u),
          jS.call(this, n, r, T, u, x, m || hn.stringFilter, p));
  },
  DS = function (n, r, i, u, o) {
    if (
      (Ct(n) && (n = hs(n, o, r, i, u)),
      !sa(n) || (n.style && n.nodeType) || Sl(n) || T_(n))
    )
      return al(n) ? hs(n, o, r, i, u) : n;
    var d = {},
      h;
    for (h in n) d[h] = hs(n[h], o, r, i, u);
    return d;
  },
  ev = function (n, r, i, u, o, d) {
    var h, m, p, _;
    if (
      un[n] &&
      (h = new un[n]()).init(
        o,
        h.rawVars ? r[n] : DS(r[n], u, o, d, i),
        i,
        u,
        d,
      ) !== !1 &&
      ((i._pt = m = new Ql(i._pt, o, n, 0, 1, h.render, h, 0, h.priority)),
      i !== Jr)
    )
      for (p = i._ptLookup[i._targets.indexOf(o)], _ = h._props.length; _--; )
        p[h._props[_]] = m;
    return h;
  },
  ci,
  Sh,
  $h = function f(n, r, i) {
    var u = n.vars,
      o = u.ease,
      d = u.startAt,
      h = u.immediateRender,
      m = u.lazy,
      p = u.onUpdate,
      _ = u.runBackwards,
      b = u.yoyoEase,
      T = u.keyframes,
      x = u.autoRevert,
      z = n._dur,
      S = n._startAt,
      M = n._targets,
      q = n.parent,
      V = q && q.data === "nested" ? q.vars.targets : M,
      K = n._overwrite === "auto" && !Lh,
      U = n.timeline,
      Q,
      W,
      D,
      B,
      J,
      I,
      de,
      te,
      xe,
      ye,
      ve,
      C,
      G;
    if (
      (U && (!T || !o) && (o = "none"),
      (n._ease = Pi(o, lu.ease)),
      (n._yEase = b ? W_(Pi(b === !0 ? o : b, lu.ease)) : 0),
      b &&
        n._yoyo &&
        !n._repeat &&
        ((b = n._yEase), (n._yEase = n._ease), (n._ease = b)),
      (n._from = !U && !!u.runBackwards),
      !U || (T && !u.stagger))
    ) {
      if (
        ((te = M[0] ? Wi(M[0]).harness : 0),
        (C = te && u[te.prop]),
        (Q = Sc(u, Zh)),
        S &&
          (S._zTime < 0 && S.progress(1),
          r < 0 && _ && h && !x ? S.render(-1, !0) : S.revert(_ && z ? sc : uS),
          (S._lazy = 0)),
        d)
      ) {
        if (
          (vi(
            (n._startAt = Qt.set(
              M,
              pn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: q,
                  immediateRender: !0,
                  lazy: !S && Xl(m),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return fn(n, "onUpdate");
                    },
                  stagger: 0,
                },
                d,
              ),
            )),
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (dl || (!h && !x)) && n._startAt.revert(sc),
          h && z && r <= 0 && i <= 0)
        ) {
          r && (n._zTime = r);
          return;
        }
      } else if (_ && z && !S) {
        if (
          (r && (h = !1),
          (D = pn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: h && !S && Xl(m),
              immediateRender: h,
              stagger: 0,
              parent: q,
            },
            Q,
          )),
          C && (D[te.prop] = C),
          vi((n._startAt = Qt.set(M, D))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (dl ? n._startAt.revert(sc) : n._startAt.render(-1, !0)),
          (n._zTime = r),
          !h)
        )
          f(n._startAt, ut, ut);
        else if (!r) return;
      }
      for (
        n._pt = n._ptCache = 0, m = (z && Xl(m)) || (m && !z), W = 0;
        W < M.length;
        W++
      ) {
        if (
          ((J = M[W]),
          (de = J._gsap || Jh(M)[W]._gsap),
          (n._ptLookup[W] = ye = {}),
          gh[de.id] && pi.length && xc(),
          (ve = V === M ? W : V.indexOf(J)),
          te &&
            (xe = new te()).init(J, C || Q, n, ve, V) !== !1 &&
            ((n._pt = B =
              new Ql(n._pt, J, xe.name, 0, 1, xe.render, xe, 0, xe.priority)),
            xe._props.forEach(function (X) {
              ye[X] = B;
            }),
            xe.priority && (I = 1)),
          !te || C)
        )
          for (D in Q)
            un[D] && (xe = ev(D, Q, n, ve, J, V))
              ? xe.priority && (I = 1)
              : (ye[D] = B =
                  Wh.call(n, J, D, "get", Q[D], ve, V, 0, u.stringFilter));
        (n._op && n._op[W] && n.kill(J, n._op[W]),
          K &&
            n._pt &&
            ((ci = n),
            Et.killTweensOf(J, ye, n.globalTime(r)),
            (G = !n.parent),
            (ci = 0)),
          n._pt && m && (gh[de.id] = 1));
      }
      (I && rv(n), n._onInit && n._onInit(n));
    }
    ((n._onUpdate = p),
      (n._initted = (!n._op || n._pt) && !G),
      T && r <= 0 && U.render(Un, !0, !0));
  },
  RS = function (n, r, i, u, o, d, h, m) {
    var p = ((n._pt && n._ptCache) || (n._ptCache = {}))[r],
      _,
      b,
      T,
      x;
    if (!p)
      for (
        p = n._ptCache[r] = [], T = n._ptLookup, x = n._targets.length;
        x--;
      ) {
        if (((_ = T[x][r]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== r && _.fp !== r; ) _ = _._next;
        if (!_)
          return (
            (Sh = 1),
            (n.vars[r] = "+=0"),
            $h(n, h),
            (Sh = 0),
            m ? ws(r + " not eligible for reset") : 1
          );
        p.push(_);
      }
    for (x = p.length; x--; )
      ((b = p[x]),
        (_ = b._pt || b),
        (_.s = (u || u === 0) && !o ? u : _.s + (u || 0) + d * _.c),
        (_.c = i - _.s),
        b.e && (b.e = Ut(i) + bl(b.e)),
        b.b && (b.b = _.s + bl(b.b)));
  },
  kS = function (n, r) {
    var i = n[0] ? Wi(n[0]).harness : 0,
      u = i && i.aliases,
      o,
      d,
      h,
      m;
    if (!u) return r;
    o = nu({}, r);
    for (d in u)
      if (d in o) for (m = u[d].split(","), h = m.length; h--; ) o[m[h]] = o[d];
    return o;
  },
  US = function (n, r, i, u) {
    var o = r.ease || u || "power1.inOut",
      d,
      h;
    if (Sl(r))
      ((h = i[n] || (i[n] = [])),
        r.forEach(function (m, p) {
          return h.push({ t: (p / (r.length - 1)) * 100, v: m, e: o });
        }));
    else
      for (d in r)
        ((h = i[d] || (i[d] = [])),
          d === "ease" || h.push({ t: parseFloat(n), v: r[d], e: o }));
  },
  hs = function (n, r, i, u, o) {
    return Ct(n)
      ? n.call(r, i, u, o)
      : al(n) && ~n.indexOf("random(")
        ? zs(n)
        : n;
  },
  tv = Kh + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  lv = {};
Vl(tv + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
  return (lv[f] = 1);
});
var Qt = (function (f) {
  x_(n, f);
  function n(i, u, o, d) {
    var h;
    (typeof u == "number" && ((o.duration = u), (u = o), (o = null)),
      (h = f.call(this, d ? u : fs(u)) || this));
    var m = h.vars,
      p = m.duration,
      _ = m.delay,
      b = m.immediateRender,
      T = m.stagger,
      x = m.overwrite,
      z = m.keyframes,
      S = m.defaults,
      M = m.scrollTrigger,
      q = m.yoyoEase,
      V = u.parent || Et,
      K = (Sl(i) || T_(i) ? ka(i[0]) : "length" in u) ? [i] : Bn(i),
      U,
      Q,
      W,
      D,
      B,
      J,
      I,
      de;
    if (
      ((h._targets = K.length
        ? Jh(K)
        : ws(
            "GSAP target " + i + " not found. https://gsap.com",
            !hn.nullTargetWarn,
          ) || []),
      (h._ptLookup = []),
      (h._overwrite = x),
      z || T || Fo(p) || Fo(_))
    ) {
      if (
        ((u = h.vars),
        (U = h.timeline =
          new jl({
            data: "nested",
            defaults: S || {},
            targets: V && V.data === "nested" ? V.vars.targets : K,
          })),
        U.kill(),
        (U.parent = U._dp = Ma(h)),
        (U._start = 0),
        T || Fo(p) || Fo(_))
      ) {
        if (((D = K.length), (I = T && q_(T)), sa(T)))
          for (B in T) ~tv.indexOf(B) && (de || (de = {}), (de[B] = T[B]));
        for (Q = 0; Q < D; Q++)
          ((W = Sc(u, lv)),
            (W.stagger = 0),
            q && (W.yoyoEase = q),
            de && nu(W, de),
            (J = K[Q]),
            (W.duration = +hs(p, Ma(h), Q, J, K)),
            (W.delay = (+hs(_, Ma(h), Q, J, K) || 0) - h._delay),
            !T &&
              D === 1 &&
              W.delay &&
              ((h._delay = _ = W.delay), (h._start += _), (W.delay = 0)),
            U.to(J, W, I ? I(Q, J, K) : 0),
            (U._ease = Qe.none));
        U.duration() ? (p = _ = 0) : (h.timeline = 0);
      } else if (z) {
        (fs(pn(U.vars.defaults, { ease: "none" })),
          (U._ease = Pi(z.ease || u.ease || "none")));
        var te = 0,
          xe,
          ye,
          ve;
        if (Sl(z))
          (z.forEach(function (C) {
            return U.to(K, C, ">");
          }),
            U.duration());
        else {
          W = {};
          for (B in z)
            B === "ease" || B === "easeEach" || US(B, z[B], W, z.easeEach);
          for (B in W)
            for (
              xe = W[B].sort(function (C, G) {
                return C.t - G.t;
              }),
                te = 0,
                Q = 0;
              Q < xe.length;
              Q++
            )
              ((ye = xe[Q]),
                (ve = {
                  ease: ye.e,
                  duration: ((ye.t - (Q ? xe[Q - 1].t : 0)) / 100) * p,
                }),
                (ve[B] = ye.v),
                U.to(K, ve, te),
                (te += ve.duration));
          U.duration() < p && U.to({}, { duration: p - U.duration() });
        }
      }
      p || h.duration((p = U.duration()));
    } else h.timeline = 0;
    return (
      x === !0 && !Lh && ((ci = Ma(h)), Et.killTweensOf(K), (ci = 0)),
      aa(V, Ma(h), o),
      u.reversed && h.reverse(),
      u.paused && h.paused(!0),
      (b ||
        (!p &&
          !z &&
          h._start === wt(V._time) &&
          Xl(b) &&
          hS(Ma(h)) &&
          V.data !== "nested")) &&
        ((h._tTime = -ut), h.render(Math.max(0, -_) || 0)),
      M && U_(Ma(h), M),
      h
    );
  }
  var r = n.prototype;
  return (
    (r.render = function (u, o, d) {
      var h = this._time,
        m = this._tDur,
        p = this._dur,
        _ = u < 0,
        b = u > m - ut && !_ ? m : u < ut ? 0 : u,
        T,
        x,
        z,
        S,
        M,
        q,
        V,
        K,
        U;
      if (!p) pS(this, u, o, d);
      else if (
        b !== this._tTime ||
        !u ||
        d ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((T = b), (K = this.timeline), this._repeat)) {
          if (((S = p + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(S * 100 + u, o, d);
          if (
            ((T = wt(b % S)),
            b === m
              ? ((z = this._repeat), (T = p))
              : ((M = wt(b / S)),
                (z = ~~M),
                z && z === M ? ((T = p), z--) : T > p && (T = p)),
            (q = this._yoyo && z & 1),
            q && ((U = this._yEase), (T = p - T)),
            (M = au(this._tTime, S)),
            T === h && !d && this._initted && z === M)
          )
            return ((this._tTime = b), this);
          z !== M &&
            (K && this._yEase && $_(K, q),
            this.vars.repeatRefresh &&
              !q &&
              !this._lock &&
              T !== S &&
              this._initted &&
              ((this._lock = d = 1),
              (this.render(wt(S * z), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (B_(this, _ ? u : T, d, o, b)) return ((this._tTime = 0), this);
          if (h !== this._time && !(d && this.vars.repeatRefresh && z !== M))
            return this;
          if (p !== this._dur) return this.render(u, o, d);
        }
        if (
          ((this._tTime = b),
          (this._time = T),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = V = (U || this._ease)(T / p)),
          this._from && (this.ratio = V = 1 - V),
          !h && b && !o && !M && (fn(this, "onStart"), this._tTime !== b))
        )
          return this;
        for (x = this._pt; x; ) (x.r(V, x.d), (x = x._next));
        ((K && K.render(u < 0 ? u : K._dur * K._ease(T / this._dur), o, d)) ||
          (this._startAt && (this._zTime = u)),
          this._onUpdate &&
            !o &&
            (_ && _h(this, u, o, d), fn(this, "onUpdate")),
          this._repeat &&
            z !== M &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            fn(this, "onRepeat"),
          (b === this._tDur || !b) &&
            this._tTime === b &&
            (_ && !this._onUpdate && _h(this, u, !0, !0),
            (u || !p) &&
              ((b === this._tDur && this._ts > 0) || (!b && this._ts < 0)) &&
              vi(this, 1),
            !o &&
              !(_ && !h) &&
              (b || h || q) &&
              (fn(this, b === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(b < m && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (u) {
      return (
        (!u || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(u),
        f.prototype.invalidate.call(this, u)
      );
    }),
    (r.resetTo = function (u, o, d, h, m) {
      (As || on.wake(), this._ts || this.play());
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || $h(this, p),
        (_ = this._ease(p / this._dur)),
        RS(this, u, o, d, h, _, p, m)
          ? this.resetTo(u, o, d, h, 1)
          : (Dc(this, 0),
            this.parent ||
              R_(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (r.kill = function (u, o) {
      if ((o === void 0 && (o = "all"), !u && (!o || o === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? as(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!dl),
          this
        );
      if (this.timeline) {
        var d = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(u, o, ci && ci.vars.overwrite !== !0)
            ._first || as(this),
          this.parent &&
            d !== this.timeline.totalDuration() &&
            iu(this, (this._dur * this.timeline._tDur) / d, 0, 1),
          this
        );
      }
      var h = this._targets,
        m = u ? Bn(u) : h,
        p = this._ptLookup,
        _ = this._pt,
        b,
        T,
        x,
        z,
        S,
        M,
        q;
      if ((!o || o === "all") && fS(h, m))
        return (o === "all" && (this._pt = 0), as(this));
      for (
        b = this._op = this._op || [],
          o !== "all" &&
            (al(o) &&
              ((S = {}),
              Vl(o, function (V) {
                return (S[V] = 1);
              }),
              (o = S)),
            (o = kS(h, o))),
          q = h.length;
        q--;
      )
        if (~m.indexOf(h[q])) {
          ((T = p[q]),
            o === "all"
              ? ((b[q] = o), (z = T), (x = {}))
              : ((x = b[q] = b[q] || {}), (z = o)));
          for (S in z)
            ((M = T && T[S]),
              M &&
                ((!("kill" in M.d) || M.d.kill(S) === !0) && Cc(this, M, "_pt"),
                delete T[S]),
              x !== "all" && (x[S] = 1));
        }
      return (this._initted && !this._pt && _ && as(this), this);
    }),
    (n.to = function (u, o) {
      return new n(u, o, arguments[2]);
    }),
    (n.from = function (u, o) {
      return ds(1, arguments);
    }),
    (n.delayedCall = function (u, o, d, h) {
      return new n(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: u,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: d,
        onReverseCompleteParams: d,
        callbackScope: h,
      });
    }),
    (n.fromTo = function (u, o, d) {
      return ds(2, arguments);
    }),
    (n.set = function (u, o) {
      return ((o.duration = 0), o.repeatDelay || (o.repeat = 0), new n(u, o));
    }),
    (n.killTweensOf = function (u, o, d) {
      return Et.killTweensOf(u, o, d);
    }),
    n
  );
})(Ns);
pn(Qt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Vl("staggerTo,staggerFrom,staggerFromTo", function (f) {
  Qt[f] = function () {
    var n = new jl(),
      r = yh.call(arguments, 0);
    return (r.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), n[f].apply(n, r));
  };
});
var Ph = function (n, r, i) {
    return (n[r] = i);
  },
  nv = function (n, r, i) {
    return n[r](i);
  },
  BS = function (n, r, i, u) {
    return n[r](u.fp, i);
  },
  HS = function (n, r, i) {
    return n.setAttribute(r, i);
  },
  Ih = function (n, r) {
    return Ct(n[r]) ? nv : Gh(n[r]) && n.setAttribute ? HS : Ph;
  },
  av = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
  },
  YS = function (n, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * n), r);
  },
  iv = function (n, r) {
    var i = r._pt,
      u = "";
    if (!n && r.b) u = r.b;
    else if (n === 1 && r.e) u = r.e;
    else {
      for (; i; )
        ((u =
          i.p +
          (i.m ? i.m(i.s + i.c * n) : Math.round((i.s + i.c * n) * 1e4) / 1e4) +
          u),
          (i = i._next));
      u += r.c;
    }
    r.set(r.t, r.p, u, r);
  },
  em = function (n, r) {
    for (var i = r._pt; i; ) (i.r(n, i.d), (i = i._next));
  },
  qS = function (n, r, i, u) {
    for (var o = this._pt, d; o; )
      ((d = o._next), o.p === u && o.modifier(n, r, i), (o = d));
  },
  LS = function (n) {
    for (var r = this._pt, i, u; r; )
      ((u = r._next),
        (r.p === n && !r.op) || r.op === n
          ? Cc(this, r, "_pt")
          : r.dep || (i = 1),
        (r = u));
    return !i;
  },
  GS = function (n, r, i, u) {
    u.mSet(n, r, u.m.call(u.tween, i, u.mt), u);
  },
  rv = function (n) {
    for (var r = n._pt, i, u, o, d; r; ) {
      for (i = r._next, u = o; u && u.pr > r.pr; ) u = u._next;
      ((r._prev = u ? u._prev : d) ? (r._prev._next = r) : (o = r),
        (r._next = u) ? (u._prev = r) : (d = r),
        (r = i));
    }
    n._pt = o;
  },
  Ql = (function () {
    function f(r, i, u, o, d, h, m, p, _) {
      ((this.t = i),
        (this.s = o),
        (this.c = d),
        (this.p = u),
        (this.r = h || av),
        (this.d = m || this),
        (this.set = p || Ph),
        (this.pr = _ || 0),
        (this._next = r),
        r && (r._prev = this));
    }
    var n = f.prototype;
    return (
      (n.modifier = function (i, u, o) {
        ((this.mSet = this.mSet || this.set),
          (this.set = GS),
          (this.m = i),
          (this.mt = o),
          (this.tween = u));
      }),
      f
    );
  })();
Vl(
  Kh +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (f) {
    return (Zh[f] = 1);
  },
);
mn.TweenMax = mn.TweenLite = Qt;
mn.TimelineLite = mn.TimelineMax = jl;
Et = new jl({
  sortChildren: !1,
  defaults: lu,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
hn.stringFilter = F_;
var Ii = [],
  cc = {},
  XS = [],
  E1 = 0,
  VS = 0,
  nh = function (n) {
    return (cc[n] || XS).map(function (r) {
      return r();
    });
  },
  Th = function () {
    var n = Date.now(),
      r = [];
    n - E1 > 2 &&
      (nh("matchMediaInit"),
      Ii.forEach(function (i) {
        var u = i.queries,
          o = i.conditions,
          d,
          h,
          m,
          p;
        for (h in u)
          ((d = la.matchMedia(u[h]).matches),
            d && (m = 1),
            d !== o[h] && ((o[h] = d), (p = 1)));
        p && (i.revert(), m && r.push(i));
      }),
      nh("matchMediaRevert"),
      r.forEach(function (i) {
        return i.onMatch(i, function (u) {
          return i.add(null, u);
        });
      }),
      (E1 = n),
      nh("matchMedia"));
  },
  uv = (function () {
    function f(r, i) {
      ((this.selector = i && bh(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = VS++),
        r && this.add(r));
    }
    var n = f.prototype;
    return (
      (n.add = function (i, u, o) {
        Ct(i) && ((o = u), (u = i), (i = Ct));
        var d = this,
          h = function () {
            var p = yt,
              _ = d.selector,
              b;
            return (
              p && p !== d && p.data.push(d),
              o && (d.selector = bh(o)),
              (yt = d),
              (b = u.apply(d, arguments)),
              Ct(b) && d._r.push(b),
              (yt = p),
              (d.selector = _),
              (d.isReverted = !1),
              b
            );
          };
        return (
          (d.last = h),
          i === Ct
            ? h(d, function (m) {
                return d.add(null, m);
              })
            : i
              ? (d[i] = h)
              : h
        );
      }),
      (n.ignore = function (i) {
        var u = yt;
        ((yt = null), i(this), (yt = u));
      }),
      (n.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (u) {
            return u instanceof f
              ? i.push.apply(i, u.getTweens())
              : u instanceof Qt &&
                  !(u.parent && u.parent.data === "nested") &&
                  i.push(u);
          }),
          i
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (i, u) {
        var o = this;
        if (
          (i
            ? (function () {
                for (var h = o.getTweens(), m = o.data.length, p; m--; )
                  ((p = o.data[m]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (_) {
                        return h.splice(h.indexOf(_), 1);
                      })));
                for (
                  h
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, b) {
                      return b.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(i);
                    }),
                    m = o.data.length;
                  m--;
                )
                  ((p = o.data[m]),
                    p instanceof jl
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof Qt) && p.revert && p.revert(i));
                (o._r.forEach(function (_) {
                  return _(i, o);
                }),
                  (o.isReverted = !0));
              })()
            : this.data.forEach(function (h) {
                return h.kill && h.kill();
              }),
          this.clear(),
          u)
        )
          for (var d = Ii.length; d--; )
            Ii[d].id === this.id && Ii.splice(d, 1);
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      f
    );
  })(),
  QS = (function () {
    function f(r) {
      ((this.contexts = []), (this.scope = r), yt && yt.data.push(this));
    }
    var n = f.prototype;
    return (
      (n.add = function (i, u, o) {
        sa(i) || (i = { matches: i });
        var d = new uv(0, o || this.scope),
          h = (d.conditions = {}),
          m,
          p,
          _;
        (yt && !d.selector && (d.selector = yt.selector),
          this.contexts.push(d),
          (u = d.add("onMatch", u)),
          (d.queries = i));
        for (p in i)
          p === "all"
            ? (_ = 1)
            : ((m = la.matchMedia(i[p])),
              m &&
                (Ii.indexOf(d) < 0 && Ii.push(d),
                (h[p] = m.matches) && (_ = 1),
                m.addListener
                  ? m.addListener(Th)
                  : m.addEventListener("change", Th)));
        return (
          _ &&
            u(d, function (b) {
              return d.add(null, b);
            }),
          this
        );
      }),
      (n.revert = function (i) {
        this.kill(i || {});
      }),
      (n.kill = function (i) {
        this.contexts.forEach(function (u) {
          return u.kill(i, !0);
        });
      }),
      f
    );
  })(),
  wc = {
    registerPlugin: function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      r.forEach(function (u) {
        return Z_(u);
      });
    },
    timeline: function (n) {
      return new jl(n);
    },
    getTweensOf: function (n, r) {
      return Et.getTweensOf(n, r);
    },
    getProperty: function (n, r, i, u) {
      al(n) && (n = Bn(n)[0]);
      var o = Wi(n || {}).get,
        d = i ? D_ : j_;
      return (
        i === "native" && (i = ""),
        n &&
          (r
            ? d(((un[r] && un[r].get) || o)(n, r, i, u))
            : function (h, m, p) {
                return d(((un[h] && un[h].get) || o)(n, h, m, p));
              })
      );
    },
    quickSetter: function (n, r, i) {
      if (((n = Bn(n)), n.length > 1)) {
        var u = n.map(function (_) {
            return Kl.quickSetter(_, r, i);
          }),
          o = u.length;
        return function (_) {
          for (var b = o; b--; ) u[b](_);
        };
      }
      n = n[0] || {};
      var d = un[r],
        h = Wi(n),
        m = (h.harness && (h.harness.aliases || {})[r]) || r,
        p = d
          ? function (_) {
              var b = new d();
              ((Jr._pt = 0),
                b.init(n, i ? _ + i : _, Jr, 0, [n]),
                b.render(1, b),
                Jr._pt && em(1, Jr));
            }
          : h.set(n, m);
      return d
        ? p
        : function (_) {
            return p(n, m, i ? _ + i : _, h, 1);
          };
    },
    quickTo: function (n, r, i) {
      var u,
        o = Kl.to(
          n,
          pn(
            ((u = {}), (u[r] = "+=0.1"), (u.paused = !0), (u.stagger = 0), u),
            i || {},
          ),
        ),
        d = function (m, p, _) {
          return o.resetTo(r, m, p, _);
        };
      return ((d.tween = o), d);
    },
    isTweening: function (n) {
      return Et.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return (n && n.ease && (n.ease = Pi(n.ease, lu.ease)), b1(lu, n || {}));
    },
    config: function (n) {
      return b1(hn, n || {});
    },
    registerEffect: function (n) {
      var r = n.name,
        i = n.effect,
        u = n.plugins,
        o = n.defaults,
        d = n.extendTimeline;
      ((u || "").split(",").forEach(function (h) {
        return (
          h && !un[h] && !mn[h] && ws(r + " effect requires " + h + " plugin.")
        );
      }),
        (Id[r] = function (h, m, p) {
          return i(Bn(h), pn(m || {}, o), p);
        }),
        d &&
          (jl.prototype[r] = function (h, m, p) {
            return this.add(Id[r](h, sa(m) ? m : (p = m) && {}, this), p);
          }));
    },
    registerEase: function (n, r) {
      Qe[n] = Pi(r);
    },
    parseEase: function (n, r) {
      return arguments.length ? Pi(n, r) : Qe;
    },
    getById: function (n) {
      return Et.getById(n);
    },
    exportRoot: function (n, r) {
      n === void 0 && (n = {});
      var i = new jl(n),
        u,
        o;
      for (
        i.smoothChildTiming = Xl(n.smoothChildTiming),
          Et.remove(i),
          i._dp = 0,
          i._time = i._tTime = Et._time,
          u = Et._first;
        u;
      )
        ((o = u._next),
          (r ||
            !(
              !u._dur &&
              u instanceof Qt &&
              u.vars.onComplete === u._targets[0]
            )) &&
            aa(i, u, u._start - u._delay),
          (u = o));
      return (aa(Et, i, 0), i);
    },
    context: function (n, r) {
      return n ? new uv(n, r) : yt;
    },
    matchMedia: function (n) {
      return new QS(n);
    },
    matchMediaRefresh: function () {
      return (
        Ii.forEach(function (n) {
          var r = n.conditions,
            i,
            u;
          for (u in r) r[u] && ((r[u] = !1), (i = 1));
          i && n.revert();
        }) || Th()
      );
    },
    addEventListener: function (n, r) {
      var i = cc[n] || (cc[n] = []);
      ~i.indexOf(r) || i.push(r);
    },
    removeEventListener: function (n, r) {
      var i = cc[n],
        u = i && i.indexOf(r);
      u >= 0 && i.splice(u, 1);
    },
    utils: {
      wrap: TS,
      wrapYoyo: wS,
      distribute: q_,
      random: G_,
      snap: L_,
      normalize: SS,
      getUnit: bl,
      clamp: vS,
      splitColor: K_,
      toArray: Bn,
      selector: bh,
      mapRange: V_,
      pipe: bS,
      unitize: xS,
      interpolate: ES,
      shuffle: Y_,
    },
    install: A_,
    effects: Id,
    ticker: on,
    updateRoot: jl.updateRoot,
    plugins: un,
    globalTimeline: Et,
    core: {
      PropTween: Ql,
      globals: N_,
      Tween: Qt,
      Timeline: jl,
      Animation: Ns,
      getCache: Wi,
      _removeLinkedListItem: Cc,
      reverting: function () {
        return dl;
      },
      context: function (n) {
        return (n && yt && (yt.data.push(n), (n._ctx = yt)), yt);
      },
      suppressOverwrites: function (n) {
        return (Lh = n);
      },
    },
  };
Vl("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
  return (wc[f] = Qt[f]);
});
on.add(jl.updateRoot);
Jr = wc.to({}, { duration: 0 });
var ZS = function (n, r) {
    for (var i = n._pt; i && i.p !== r && i.op !== r && i.fp !== r; )
      i = i._next;
    return i;
  },
  KS = function (n, r) {
    var i = n._targets,
      u,
      o,
      d;
    for (u in r)
      for (o = i.length; o--; )
        ((d = n._ptLookup[o][u]),
          d &&
            (d = d.d) &&
            (d._pt && (d = ZS(d, u)),
            d && d.modifier && d.modifier(r[u], n, i[o], u)));
  },
  ah = function (n, r) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (u, o, d) {
        d._onInit = function (h) {
          var m, p;
          if (
            (al(o) &&
              ((m = {}),
              Vl(o, function (_) {
                return (m[_] = 1);
              }),
              (o = m)),
            r)
          ) {
            m = {};
            for (p in o) m[p] = r(o[p]);
            o = m;
          }
          KS(h, o);
        };
      },
    };
  },
  Kl =
    wc.registerPlugin(
      {
        name: "attr",
        init: function (n, r, i, u, o) {
          var d, h, m;
          this.tween = i;
          for (d in r)
            ((m = n.getAttribute(d) || ""),
              (h = this.add(
                n,
                "setAttribute",
                (m || 0) + "",
                r[d],
                u,
                o,
                0,
                0,
                d,
              )),
              (h.op = d),
              (h.b = m),
              this._props.push(d));
        },
        render: function (n, r) {
          for (var i = r._pt; i; )
            (dl ? i.set(i.t, i.p, i.b, i) : i.r(n, i.d), (i = i._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, r) {
          for (var i = r.length; i--; )
            this.add(n, i, n[i] || 0, r[i], 0, 0, 0, 0, 0, 1);
        },
      },
      ah("roundProps", xh),
      ah("modifiers"),
      ah("snap", L_),
    ) || wc;
Qt.version = jl.version = Kl.version = "3.14.2";
z_ = 1;
Xh() && ru();
Qe.Power0;
Qe.Power1;
Qe.Power2;
Qe.Power3;
Qe.Power4;
Qe.Linear;
Qe.Quad;
Qe.Cubic;
Qe.Quart;
Qe.Quint;
Qe.Strong;
Qe.Elastic;
Qe.Back;
Qe.SteppedEase;
Qe.Bounce;
Qe.Sine;
Qe.Expo;
Qe.Circ;
var z1,
  fi,
  $r,
  tm,
  Ji,
  A1,
  lm,
  JS = function () {
    return typeof window < "u";
  },
  Ua = {},
  Qi = 180 / Math.PI,
  Pr = Math.PI / 180,
  Gr = Math.atan2,
  N1 = 1e8,
  nm = /([A-Z])/g,
  FS = /(left|right|width|margin|padding|x)/i,
  WS = /[\s,\(]\S/,
  ia = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  wh = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
  },
  $S = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u,
      r,
    );
  },
  PS = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  IS = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r,
    );
  },
  e3 = function (n, r) {
    var i = r.s + r.c * n;
    r.set(r.t, r.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  sv = function (n, r) {
    return r.set(r.t, r.p, n ? r.e : r.b, r);
  },
  ov = function (n, r) {
    return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
  },
  t3 = function (n, r, i) {
    return (n.style[r] = i);
  },
  l3 = function (n, r, i) {
    return n.style.setProperty(r, i);
  },
  n3 = function (n, r, i) {
    return (n._gsap[r] = i);
  },
  a3 = function (n, r, i) {
    return (n._gsap.scaleX = n._gsap.scaleY = i);
  },
  i3 = function (n, r, i, u, o) {
    var d = n._gsap;
    ((d.scaleX = d.scaleY = i), d.renderTransform(o, d));
  },
  r3 = function (n, r, i, u, o) {
    var d = n._gsap;
    ((d[r] = i), d.renderTransform(o, d));
  },
  zt = "transform",
  Zl = zt + "Origin",
  u3 = function f(n, r) {
    var i = this,
      u = this.target,
      o = u.style,
      d = u._gsap;
    if (n in Ua && o) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        ((n = ia[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (h) {
                return (i.tfm[h] = Oa(u, h));
              })
            : (this.tfm[n] = d.x ? d[n] : Oa(u, n)),
          n === Zl && (this.tfm.zOrigin = d.zOrigin));
      else
        return ia.transform.split(",").forEach(function (h) {
          return f.call(i, h, r);
        });
      if (this.props.indexOf(zt) >= 0) return;
      (d.svg &&
        ((this.svgo = u.getAttribute("data-svg-origin")),
        this.props.push(Zl, r, "")),
        (n = zt));
    }
    (o || r) && this.props.push(n, r, o[n]);
  },
  cv = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  s3 = function () {
    var n = this.props,
      r = this.target,
      i = r.style,
      u = r._gsap,
      o,
      d;
    for (o = 0; o < n.length; o += 3)
      n[o + 1]
        ? n[o + 1] === 2
          ? r[n[o]](n[o + 2])
          : (r[n[o]] = n[o + 2])
        : n[o + 2]
          ? (i[n[o]] = n[o + 2])
          : i.removeProperty(
              n[o].substr(0, 2) === "--"
                ? n[o]
                : n[o].replace(nm, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (d in this.tfm) u[d] = this.tfm[d];
      (u.svg &&
        (u.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (o = lm()),
        (!o || !o.isStart) &&
          !i[zt] &&
          (cv(i),
          u.zOrigin &&
            i[Zl] &&
            ((i[Zl] += " " + u.zOrigin + "px"),
            (u.zOrigin = 0),
            u.renderTransform()),
          (u.uncache = 1)));
    }
  },
  fv = function (n, r) {
    var i = { target: n, props: [], revert: s3, save: u3 };
    return (
      n._gsap || Kl.core.getCache(n),
      r &&
        n.style &&
        n.nodeType &&
        r.split(",").forEach(function (u) {
          return i.save(u);
        }),
      i
    );
  },
  dv,
  Eh = function (n, r) {
    var i = fi.createElementNS
      ? fi.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n,
        )
      : fi.createElement(n);
    return i && i.style ? i : fi.createElement(n);
  },
  dn = function f(n, r, i) {
    var u = getComputedStyle(n);
    return (
      u[r] ||
      u.getPropertyValue(r.replace(nm, "-$1").toLowerCase()) ||
      u.getPropertyValue(r) ||
      (!i && f(n, uu(r) || r, 1)) ||
      ""
    );
  },
  M1 = "O,Moz,ms,Ms,Webkit".split(","),
  uu = function (n, r, i) {
    var u = r || Ji,
      o = u.style,
      d = 5;
    if (n in o && !i) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      d-- && !(M1[d] + n in o);
    );
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? M1[d] : "") + n;
  },
  zh = function () {
    JS() &&
      window.document &&
      ((z1 = window),
      (fi = z1.document),
      ($r = fi.documentElement),
      (Ji = Eh("div") || { style: {} }),
      Eh("div"),
      (zt = uu(zt)),
      (Zl = zt + "Origin"),
      (Ji.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (dv = !!uu("perspective")),
      (lm = Kl.core.reverting),
      (tm = 1));
  },
  O1 = function (n) {
    var r = n.ownerSVGElement,
      i = Eh(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      u = n.cloneNode(!0),
      o;
    ((u.style.display = "block"), i.appendChild(u), $r.appendChild(i));
    try {
      o = u.getBBox();
    } catch {}
    return (i.removeChild(u), $r.removeChild(i), o);
  },
  C1 = function (n, r) {
    for (var i = r.length; i--; )
      if (n.hasAttribute(r[i])) return n.getAttribute(r[i]);
  },
  hv = function (n) {
    var r, i;
    try {
      r = n.getBBox();
    } catch {
      ((r = O1(n)), (i = 1));
    }
    return (
      (r && (r.width || r.height)) || i || (r = O1(n)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +C1(n, ["x", "cx", "x1"]) || 0,
            y: +C1(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  mv = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && hv(n));
  },
  yi = function (n, r) {
    if (r) {
      var i = n.style,
        u;
      (r in Ua && r !== Zl && (r = zt),
        i.removeProperty
          ? ((u = r.substr(0, 2)),
            (u === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            i.removeProperty(
              u === "--" ? r : r.replace(nm, "-$1").toLowerCase(),
            ))
          : i.removeAttribute(r));
    }
  },
  di = function (n, r, i, u, o, d) {
    var h = new Ql(n._pt, r, i, 0, 1, d ? ov : sv);
    return ((n._pt = h), (h.b = u), (h.e = o), n._props.push(i), h);
  },
  j1 = { deg: 1, rad: 1, turn: 1 },
  o3 = { grid: 1, flex: 1 },
  bi = function f(n, r, i, u) {
    var o = parseFloat(i) || 0,
      d = (i + "").trim().substr((o + "").length) || "px",
      h = Ji.style,
      m = FS.test(r),
      p = n.tagName.toLowerCase() === "svg",
      _ = (p ? "client" : "offset") + (m ? "Width" : "Height"),
      b = 100,
      T = u === "px",
      x = u === "%",
      z,
      S,
      M,
      q;
    if (u === d || !o || j1[u] || j1[d]) return o;
    if (
      (d !== "px" && !T && (o = f(n, r, i, "px")),
      (q = n.getCTM && mv(n)),
      (x || d === "%") && (Ua[r] || ~r.indexOf("adius")))
    )
      return (
        (z = q ? n.getBBox()[m ? "width" : "height"] : n[_]),
        Ut(x ? (o / z) * b : (o / 100) * z)
      );
    if (
      ((h[m ? "width" : "height"] = b + (T ? d : u)),
      (S =
        (u !== "rem" && ~r.indexOf("adius")) ||
        (u === "em" && n.appendChild && !p)
          ? n
          : n.parentNode),
      q && (S = (n.ownerSVGElement || {}).parentNode),
      (!S || S === fi || !S.appendChild) && (S = fi.body),
      (M = S._gsap),
      M && x && M.width && m && M.time === on.time && !M.uncache)
    )
      return Ut((o / M.width) * b);
    if (x && (r === "height" || r === "width")) {
      var V = n.style[r];
      ((n.style[r] = b + u), (z = n[_]), V ? (n.style[r] = V) : yi(n, r));
    } else
      ((x || d === "%") &&
        !o3[dn(S, "display")] &&
        (h.position = dn(n, "position")),
        S === n && (h.position = "static"),
        S.appendChild(Ji),
        (z = Ji[_]),
        S.removeChild(Ji),
        (h.position = "absolute"));
    return (
      m && x && ((M = Wi(S)), (M.time = on.time), (M.width = S[_])),
      Ut(T ? (z * o) / b : z && o ? (b / z) * o : 0)
    );
  },
  Oa = function (n, r, i, u) {
    var o;
    return (
      tm || zh(),
      r in ia &&
        r !== "transform" &&
        ((r = ia[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Ua[r] && r !== "transform"
        ? ((o = Os(n, u)),
          (o =
            r !== "transformOrigin"
              ? o[r]
              : o.svg
                ? o.origin
                : zc(dn(n, Zl)) + " " + o.zOrigin + "px"))
        : ((o = n.style[r]),
          (!o || o === "auto" || u || ~(o + "").indexOf("calc(")) &&
            (o =
              (Ec[r] && Ec[r](n, r, i)) ||
              dn(n, r) ||
              O_(n, r) ||
              (r === "opacity" ? 1 : 0))),
      i && !~(o + "").trim().indexOf(" ") ? bi(n, r, o, i) + i : o
    );
  },
  c3 = function (n, r, i, u) {
    if (!i || i === "none") {
      var o = uu(r, n, 1),
        d = o && dn(n, o, 1);
      d && d !== i
        ? ((r = o), (i = d))
        : r === "borderColor" && (i = dn(n, "borderTopColor"));
    }
    var h = new Ql(this._pt, n.style, r, 0, 1, iv),
      m = 0,
      p = 0,
      _,
      b,
      T,
      x,
      z,
      S,
      M,
      q,
      V,
      K,
      U,
      Q;
    if (
      ((h.b = i),
      (h.e = u),
      (i += ""),
      (u += ""),
      u.substring(0, 6) === "var(--" &&
        (u = dn(n, u.substring(4, u.indexOf(")")))),
      u === "auto" &&
        ((S = n.style[r]),
        (n.style[r] = u),
        (u = dn(n, r) || u),
        S ? (n.style[r] = S) : yi(n, r)),
      (_ = [i, u]),
      F_(_),
      (i = _[0]),
      (u = _[1]),
      (T = i.match(Kr) || []),
      (Q = u.match(Kr) || []),
      Q.length)
    ) {
      for (; (b = Kr.exec(u)); )
        ((M = b[0]),
          (V = u.substring(m, b.index)),
          z
            ? (z = (z + 1) % 5)
            : (V.substr(-5) === "rgba(" || V.substr(-5) === "hsla(") && (z = 1),
          M !== (S = T[p++] || "") &&
            ((x = parseFloat(S) || 0),
            (U = S.substr((x + "").length)),
            M.charAt(1) === "=" && (M = Wr(x, M) + U),
            (q = parseFloat(M)),
            (K = M.substr((q + "").length)),
            (m = Kr.lastIndex - K.length),
            K ||
              ((K = K || hn.units[r] || U),
              m === u.length && ((u += K), (h.e += K))),
            U !== K && (x = bi(n, r, S, K) || 0),
            (h._pt = {
              _next: h._pt,
              p: V || p === 1 ? V : ",",
              s: x,
              c: q - x,
              m: (z && z < 4) || r === "zIndex" ? Math.round : 0,
            })));
      h.c = m < u.length ? u.substring(m, u.length) : "";
    } else h.r = r === "display" && u === "none" ? ov : sv;
    return (E_.test(u) && (h.e = 0), (this._pt = h), h);
  },
  D1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  f3 = function (n) {
    var r = n.split(" "),
      i = r[0],
      u = r[1] || "50%";
    return (
      (i === "top" || i === "bottom" || u === "left" || u === "right") &&
        ((n = i), (i = u), (u = n)),
      (r[0] = D1[i] || i),
      (r[1] = D1[u] || u),
      r.join(" ")
    );
  },
  d3 = function (n, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var i = r.t,
        u = i.style,
        o = r.u,
        d = i._gsap,
        h,
        m,
        p;
      if (o === "all" || o === !0) ((u.cssText = ""), (m = 1));
      else
        for (o = o.split(","), p = o.length; --p > -1; )
          ((h = o[p]),
            Ua[h] && ((m = 1), (h = h === "transformOrigin" ? Zl : zt)),
            yi(i, h));
      m &&
        (yi(i, zt),
        d &&
          (d.svg && i.removeAttribute("transform"),
          (u.scale = u.rotate = u.translate = "none"),
          Os(i, 1),
          (d.uncache = 1),
          cv(u)));
    }
  },
  Ec = {
    clearProps: function (n, r, i, u, o) {
      if (o.data !== "isFromStart") {
        var d = (n._pt = new Ql(n._pt, r, i, 0, 0, d3));
        return ((d.u = u), (d.pr = -10), (d.tween = o), n._props.push(i), 1);
      }
    },
  },
  Ms = [1, 0, 0, 1, 0, 0],
  pv = {},
  gv = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  R1 = function (n) {
    var r = dn(n, zt);
    return gv(r) ? Ms : r.substr(7).match(w_).map(Ut);
  },
  am = function (n, r) {
    var i = n._gsap || Wi(n),
      u = n.style,
      o = R1(n),
      d,
      h,
      m,
      p;
    return i.svg && n.getAttribute("transform")
      ? ((m = n.transform.baseVal.consolidate().matrix),
        (o = [m.a, m.b, m.c, m.d, m.e, m.f]),
        o.join(",") === "1,0,0,1,0,0" ? Ms : o)
      : (o === Ms &&
          !n.offsetParent &&
          n !== $r &&
          !i.svg &&
          ((m = u.display),
          (u.display = "block"),
          (d = n.parentNode),
          (!d || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((p = 1), (h = n.nextElementSibling), $r.appendChild(n)),
          (o = R1(n)),
          m ? (u.display = m) : yi(n, "display"),
          p &&
            (h
              ? d.insertBefore(n, h)
              : d
                ? d.appendChild(n)
                : $r.removeChild(n))),
        r && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  Ah = function (n, r, i, u, o, d) {
    var h = n._gsap,
      m = o || am(n, !0),
      p = h.xOrigin || 0,
      _ = h.yOrigin || 0,
      b = h.xOffset || 0,
      T = h.yOffset || 0,
      x = m[0],
      z = m[1],
      S = m[2],
      M = m[3],
      q = m[4],
      V = m[5],
      K = r.split(" "),
      U = parseFloat(K[0]) || 0,
      Q = parseFloat(K[1]) || 0,
      W,
      D,
      B,
      J;
    (i
      ? m !== Ms &&
        (D = x * M - z * S) &&
        ((B = U * (M / D) + Q * (-S / D) + (S * V - M * q) / D),
        (J = U * (-z / D) + Q * (x / D) - (x * V - z * q) / D),
        (U = B),
        (Q = J))
      : ((W = hv(n)),
        (U = W.x + (~K[0].indexOf("%") ? (U / 100) * W.width : U)),
        (Q = W.y + (~(K[1] || K[0]).indexOf("%") ? (Q / 100) * W.height : Q))),
      u || (u !== !1 && h.smooth)
        ? ((q = U - p),
          (V = Q - _),
          (h.xOffset = b + (q * x + V * S) - q),
          (h.yOffset = T + (q * z + V * M) - V))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = U),
      (h.yOrigin = Q),
      (h.smooth = !!u),
      (h.origin = r),
      (h.originIsAbsolute = !!i),
      (n.style[Zl] = "0px 0px"),
      d &&
        (di(d, h, "xOrigin", p, U),
        di(d, h, "yOrigin", _, Q),
        di(d, h, "xOffset", b, h.xOffset),
        di(d, h, "yOffset", T, h.yOffset)),
      n.setAttribute("data-svg-origin", U + " " + Q));
  },
  Os = function (n, r) {
    var i = n._gsap || new I_(n);
    if ("x" in i && !r && !i.uncache) return i;
    var u = n.style,
      o = i.scaleX < 0,
      d = "px",
      h = "deg",
      m = getComputedStyle(n),
      p = dn(n, Zl) || "0",
      _,
      b,
      T,
      x,
      z,
      S,
      M,
      q,
      V,
      K,
      U,
      Q,
      W,
      D,
      B,
      J,
      I,
      de,
      te,
      xe,
      ye,
      ve,
      C,
      G,
      X,
      he,
      N,
      E,
      L,
      P,
      ee,
      ie;
    return (
      (_ = b = T = S = M = q = V = K = U = 0),
      (x = z = 1),
      (i.svg = !!(n.getCTM && mv(n))),
      m.translate &&
        ((m.translate !== "none" ||
          m.scale !== "none" ||
          m.rotate !== "none") &&
          (u[zt] =
            (m.translate !== "none"
              ? "translate3d(" +
                (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none"
              ? "scale(" + m.scale.split(" ").join(",") + ") "
              : "") +
            (m[zt] !== "none" ? m[zt] : "")),
        (u.scale = u.rotate = u.translate = "none")),
      (D = am(n, i.svg)),
      i.svg &&
        (i.uncache
          ? ((X = n.getBBox()),
            (p = i.xOrigin - X.x + "px " + (i.yOrigin - X.y) + "px"),
            (G = ""))
          : (G = !r && n.getAttribute("data-svg-origin")),
        Ah(n, G || p, !!G || i.originIsAbsolute, i.smooth !== !1, D)),
      (Q = i.xOrigin || 0),
      (W = i.yOrigin || 0),
      D !== Ms &&
        ((de = D[0]),
        (te = D[1]),
        (xe = D[2]),
        (ye = D[3]),
        (_ = ve = D[4]),
        (b = C = D[5]),
        D.length === 6
          ? ((x = Math.sqrt(de * de + te * te)),
            (z = Math.sqrt(ye * ye + xe * xe)),
            (S = de || te ? Gr(te, de) * Qi : 0),
            (V = xe || ye ? Gr(xe, ye) * Qi + S : 0),
            V && (z *= Math.abs(Math.cos(V * Pr))),
            i.svg &&
              ((_ -= Q - (Q * de + W * xe)), (b -= W - (Q * te + W * ye))))
          : ((ie = D[6]),
            (P = D[7]),
            (N = D[8]),
            (E = D[9]),
            (L = D[10]),
            (ee = D[11]),
            (_ = D[12]),
            (b = D[13]),
            (T = D[14]),
            (B = Gr(ie, L)),
            (M = B * Qi),
            B &&
              ((J = Math.cos(-B)),
              (I = Math.sin(-B)),
              (G = ve * J + N * I),
              (X = C * J + E * I),
              (he = ie * J + L * I),
              (N = ve * -I + N * J),
              (E = C * -I + E * J),
              (L = ie * -I + L * J),
              (ee = P * -I + ee * J),
              (ve = G),
              (C = X),
              (ie = he)),
            (B = Gr(-xe, L)),
            (q = B * Qi),
            B &&
              ((J = Math.cos(-B)),
              (I = Math.sin(-B)),
              (G = de * J - N * I),
              (X = te * J - E * I),
              (he = xe * J - L * I),
              (ee = ye * I + ee * J),
              (de = G),
              (te = X),
              (xe = he)),
            (B = Gr(te, de)),
            (S = B * Qi),
            B &&
              ((J = Math.cos(B)),
              (I = Math.sin(B)),
              (G = de * J + te * I),
              (X = ve * J + C * I),
              (te = te * J - de * I),
              (C = C * J - ve * I),
              (de = G),
              (ve = X)),
            M &&
              Math.abs(M) + Math.abs(S) > 359.9 &&
              ((M = S = 0), (q = 180 - q)),
            (x = Ut(Math.sqrt(de * de + te * te + xe * xe))),
            (z = Ut(Math.sqrt(C * C + ie * ie))),
            (B = Gr(ve, C)),
            (V = Math.abs(B) > 2e-4 ? B * Qi : 0),
            (U = ee ? 1 / (ee < 0 ? -ee : ee) : 0)),
        i.svg &&
          ((G = n.getAttribute("transform")),
          (i.forceCSS = n.setAttribute("transform", "") || !gv(dn(n, zt))),
          G && n.setAttribute("transform", G))),
      Math.abs(V) > 90 &&
        Math.abs(V) < 270 &&
        (o
          ? ((x *= -1), (V += S <= 0 ? 180 : -180), (S += S <= 0 ? 180 : -180))
          : ((z *= -1), (V += V <= 0 ? 180 : -180))),
      (r = r || i.uncache),
      (i.x =
        _ -
        ((i.xPercent =
          _ &&
          ((!r && i.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (n.offsetWidth * i.xPercent) / 100
          : 0) +
        d),
      (i.y =
        b -
        ((i.yPercent =
          b &&
          ((!r && i.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-b) ? -50 : 0)))
          ? (n.offsetHeight * i.yPercent) / 100
          : 0) +
        d),
      (i.z = T + d),
      (i.scaleX = Ut(x)),
      (i.scaleY = Ut(z)),
      (i.rotation = Ut(S) + h),
      (i.rotationX = Ut(M) + h),
      (i.rotationY = Ut(q) + h),
      (i.skewX = V + h),
      (i.skewY = K + h),
      (i.transformPerspective = U + d),
      (i.zOrigin = parseFloat(p.split(" ")[2]) || (!r && i.zOrigin) || 0) &&
        (u[Zl] = zc(p)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = hn.force3D),
      (i.renderTransform = i.svg ? m3 : dv ? _v : h3),
      (i.uncache = 0),
      i
    );
  },
  zc = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  ih = function (n, r, i) {
    var u = bl(r);
    return Ut(parseFloat(r) + parseFloat(bi(n, "x", i + "px", u))) + u;
  },
  h3 = function (n, r) {
    ((r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      _v(n, r));
  },
  Gi = "0deg",
  ts = "0px",
  Xi = ") ",
  _v = function (n, r) {
    var i = r || this,
      u = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      m = i.z,
      p = i.rotation,
      _ = i.rotationY,
      b = i.rotationX,
      T = i.skewX,
      x = i.skewY,
      z = i.scaleX,
      S = i.scaleY,
      M = i.transformPerspective,
      q = i.force3D,
      V = i.target,
      K = i.zOrigin,
      U = "",
      Q = (q === "auto" && n && n !== 1) || q === !0;
    if (K && (b !== Gi || _ !== Gi)) {
      var W = parseFloat(_) * Pr,
        D = Math.sin(W),
        B = Math.cos(W),
        J;
      ((W = parseFloat(b) * Pr),
        (J = Math.cos(W)),
        (d = ih(V, d, D * J * -K)),
        (h = ih(V, h, -Math.sin(W) * -K)),
        (m = ih(V, m, B * J * -K + K)));
    }
    (M !== ts && (U += "perspective(" + M + Xi),
      (u || o) && (U += "translate(" + u + "%, " + o + "%) "),
      (Q || d !== ts || h !== ts || m !== ts) &&
        (U +=
          m !== ts || Q
            ? "translate3d(" + d + ", " + h + ", " + m + ") "
            : "translate(" + d + ", " + h + Xi),
      p !== Gi && (U += "rotate(" + p + Xi),
      _ !== Gi && (U += "rotateY(" + _ + Xi),
      b !== Gi && (U += "rotateX(" + b + Xi),
      (T !== Gi || x !== Gi) && (U += "skew(" + T + ", " + x + Xi),
      (z !== 1 || S !== 1) && (U += "scale(" + z + ", " + S + Xi),
      (V.style[zt] = U || "translate(0, 0)"));
  },
  m3 = function (n, r) {
    var i = r || this,
      u = i.xPercent,
      o = i.yPercent,
      d = i.x,
      h = i.y,
      m = i.rotation,
      p = i.skewX,
      _ = i.skewY,
      b = i.scaleX,
      T = i.scaleY,
      x = i.target,
      z = i.xOrigin,
      S = i.yOrigin,
      M = i.xOffset,
      q = i.yOffset,
      V = i.forceCSS,
      K = parseFloat(d),
      U = parseFloat(h),
      Q,
      W,
      D,
      B,
      J;
    ((m = parseFloat(m)),
      (p = parseFloat(p)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (p += _), (m += _)),
      m || p
        ? ((m *= Pr),
          (p *= Pr),
          (Q = Math.cos(m) * b),
          (W = Math.sin(m) * b),
          (D = Math.sin(m - p) * -T),
          (B = Math.cos(m - p) * T),
          p &&
            ((_ *= Pr),
            (J = Math.tan(p - _)),
            (J = Math.sqrt(1 + J * J)),
            (D *= J),
            (B *= J),
            _ &&
              ((J = Math.tan(_)),
              (J = Math.sqrt(1 + J * J)),
              (Q *= J),
              (W *= J))),
          (Q = Ut(Q)),
          (W = Ut(W)),
          (D = Ut(D)),
          (B = Ut(B)))
        : ((Q = b), (B = T), (W = D = 0)),
      ((K && !~(d + "").indexOf("px")) || (U && !~(h + "").indexOf("px"))) &&
        ((K = bi(x, "x", d, "px")), (U = bi(x, "y", h, "px"))),
      (z || S || M || q) &&
        ((K = Ut(K + z - (z * Q + S * D) + M)),
        (U = Ut(U + S - (z * W + S * B) + q))),
      (u || o) &&
        ((J = x.getBBox()),
        (K = Ut(K + (u / 100) * J.width)),
        (U = Ut(U + (o / 100) * J.height))),
      (J =
        "matrix(" + Q + "," + W + "," + D + "," + B + "," + K + "," + U + ")"),
      x.setAttribute("transform", J),
      V && (x.style[zt] = J));
  },
  p3 = function (n, r, i, u, o) {
    var d = 360,
      h = al(o),
      m = parseFloat(o) * (h && ~o.indexOf("rad") ? Qi : 1),
      p = m - u,
      _ = u + p + "deg",
      b,
      T;
    return (
      h &&
        ((b = o.split("_")[1]),
        b === "short" && ((p %= d), p !== p % (d / 2) && (p += p < 0 ? d : -d)),
        b === "cw" && p < 0
          ? (p = ((p + d * N1) % d) - ~~(p / d) * d)
          : b === "ccw" && p > 0 && (p = ((p - d * N1) % d) - ~~(p / d) * d)),
      (n._pt = T = new Ql(n._pt, r, i, u, p, $S)),
      (T.e = _),
      (T.u = "deg"),
      n._props.push(i),
      T
    );
  },
  k1 = function (n, r) {
    for (var i in r) n[i] = r[i];
    return n;
  },
  g3 = function (n, r, i) {
    var u = k1({}, i._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      d = i.style,
      h,
      m,
      p,
      _,
      b,
      T,
      x,
      z;
    u.svg
      ? ((p = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (d[zt] = r),
        (h = Os(i, 1)),
        yi(i, zt),
        i.setAttribute("transform", p))
      : ((p = getComputedStyle(i)[zt]),
        (d[zt] = r),
        (h = Os(i, 1)),
        (d[zt] = p));
    for (m in Ua)
      ((p = u[m]),
        (_ = h[m]),
        p !== _ &&
          o.indexOf(m) < 0 &&
          ((x = bl(p)),
          (z = bl(_)),
          (b = x !== z ? bi(i, m, p, z) : parseFloat(p)),
          (T = parseFloat(_)),
          (n._pt = new Ql(n._pt, h, m, b, T - b, wh)),
          (n._pt.u = z || 0),
          n._props.push(m)));
    k1(h, u);
  };
Vl("padding,margin,Width,Radius", function (f, n) {
  var r = "Top",
    i = "Right",
    u = "Bottom",
    o = "Left",
    d = (n < 3 ? [r, i, u, o] : [r + o, r + i, u + i, u + o]).map(function (h) {
      return n < 2 ? f + h : "border" + h + f;
    });
  Ec[n > 1 ? "border" + f : f] = function (h, m, p, _, b) {
    var T, x;
    if (arguments.length < 4)
      return (
        (T = d.map(function (z) {
          return Oa(h, z, p);
        })),
        (x = T.join(" ")),
        x.split(T[0]).length === 5 ? T[0] : x
      );
    ((T = (_ + "").split(" ")),
      (x = {}),
      d.forEach(function (z, S) {
        return (x[z] = T[S] = T[S] || T[((S - 1) / 2) | 0]);
      }),
      h.init(m, x, b));
  };
});
var vv = {
  name: "css",
  register: zh,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, r, i, u, o) {
    var d = this._props,
      h = n.style,
      m = i.vars.startAt,
      p,
      _,
      b,
      T,
      x,
      z,
      S,
      M,
      q,
      V,
      K,
      U,
      Q,
      W,
      D,
      B,
      J;
    (tm || zh(),
      (this.styles = this.styles || fv(n)),
      (B = this.styles.props),
      (this.tween = i));
    for (S in r)
      if (S !== "autoRound" && ((_ = r[S]), !(un[S] && ev(S, r, i, u, n, o)))) {
        if (
          ((x = typeof _),
          (z = Ec[S]),
          x === "function" && ((_ = _.call(i, u, n, o)), (x = typeof _)),
          x === "string" && ~_.indexOf("random(") && (_ = zs(_)),
          z)
        )
          z(this, n, S, _, i) && (D = 1);
        else if (S.substr(0, 2) === "--")
          ((p = (getComputedStyle(n).getPropertyValue(S) + "").trim()),
            (_ += ""),
            (gi.lastIndex = 0),
            gi.test(p) ||
              ((M = bl(p)),
              (q = bl(_)),
              q ? M !== q && (p = bi(n, S, p, q) + q) : M && (_ += M)),
            this.add(h, "setProperty", p, _, u, o, 0, 0, S),
            d.push(S),
            B.push(S, 0, h[S]));
        else if (x !== "undefined") {
          if (
            (m && S in m
              ? ((p = typeof m[S] == "function" ? m[S].call(i, u, n, o) : m[S]),
                al(p) && ~p.indexOf("random(") && (p = zs(p)),
                bl(p + "") ||
                  p === "auto" ||
                  (p += hn.units[S] || bl(Oa(n, S)) || ""),
                (p + "").charAt(1) === "=" && (p = Oa(n, S)))
              : (p = Oa(n, S)),
            (T = parseFloat(p)),
            (V = x === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            V && (_ = _.substr(2)),
            (b = parseFloat(_)),
            S in ia &&
              (S === "autoAlpha" &&
                (T === 1 && Oa(n, "visibility") === "hidden" && b && (T = 0),
                B.push("visibility", 0, h.visibility),
                di(
                  this,
                  h,
                  "visibility",
                  T ? "inherit" : "hidden",
                  b ? "inherit" : "hidden",
                  !b,
                )),
              S !== "scale" &&
                S !== "transform" &&
                ((S = ia[S]), ~S.indexOf(",") && (S = S.split(",")[0]))),
            (K = S in Ua),
            K)
          ) {
            if (
              (this.styles.save(S),
              (J = _),
              x === "string" && _.substring(0, 6) === "var(--")
            ) {
              if (
                ((_ = dn(n, _.substring(4, _.indexOf(")")))),
                _.substring(0, 5) === "calc(")
              ) {
                var I = n.style.perspective;
                ((n.style.perspective = _),
                  (_ = dn(n, "perspective")),
                  I ? (n.style.perspective = I) : yi(n, "perspective"));
              }
              b = parseFloat(_);
            }
            if (
              (U ||
                ((Q = n._gsap),
                (Q.renderTransform && !r.parseTransform) ||
                  Os(n, r.parseTransform),
                (W = r.smoothOrigin !== !1 && Q.smooth),
                (U = this._pt =
                  new Ql(this._pt, h, zt, 0, 1, Q.renderTransform, Q, 0, -1)),
                (U.dep = 1)),
              S === "scale")
            )
              ((this._pt = new Ql(
                this._pt,
                Q,
                "scaleY",
                Q.scaleY,
                (V ? Wr(Q.scaleY, V + b) : b) - Q.scaleY || 0,
                wh,
              )),
                (this._pt.u = 0),
                d.push("scaleY", S),
                (S += "X"));
            else if (S === "transformOrigin") {
              (B.push(Zl, 0, h[Zl]),
                (_ = f3(_)),
                Q.svg
                  ? Ah(n, _, 0, W, 0, this)
                  : ((q = parseFloat(_.split(" ")[2]) || 0),
                    q !== Q.zOrigin && di(this, Q, "zOrigin", Q.zOrigin, q),
                    di(this, h, S, zc(p), zc(_))));
              continue;
            } else if (S === "svgOrigin") {
              Ah(n, _, 1, W, 0, this);
              continue;
            } else if (S in pv) {
              p3(this, Q, S, T, V ? Wr(T, V + _) : _);
              continue;
            } else if (S === "smoothOrigin") {
              di(this, Q, "smooth", Q.smooth, _);
              continue;
            } else if (S === "force3D") {
              Q[S] = _;
              continue;
            } else if (S === "transform") {
              g3(this, _, n);
              continue;
            }
          } else S in h || (S = uu(S) || S);
          if (K || ((b || b === 0) && (T || T === 0) && !WS.test(_) && S in h))
            ((M = (p + "").substr((T + "").length)),
              b || (b = 0),
              (q = bl(_) || (S in hn.units ? hn.units[S] : M)),
              M !== q && (T = bi(n, S, p, q)),
              (this._pt = new Ql(
                this._pt,
                K ? Q : h,
                S,
                T,
                (V ? Wr(T, V + b) : b) - T,
                !K && (q === "px" || S === "zIndex") && r.autoRound !== !1
                  ? e3
                  : wh,
              )),
              (this._pt.u = q || 0),
              K && J !== _
                ? ((this._pt.b = p), (this._pt.e = J), (this._pt.r = IS))
                : M !== q &&
                  q !== "%" &&
                  ((this._pt.b = p), (this._pt.r = PS)));
          else if (S in h) c3.call(this, n, S, p, V ? V + _ : _);
          else if (S in n) this.add(n, S, p || n[S], V ? V + _ : _, u, o);
          else if (S !== "parseTransform") {
            Qh(S, _);
            continue;
          }
          (K ||
            (S in h
              ? B.push(S, 0, h[S])
              : typeof n[S] == "function"
                ? B.push(S, 2, n[S]())
                : B.push(S, 1, p || n[S])),
            d.push(S));
        }
      }
    D && rv(this);
  },
  render: function (n, r) {
    if (r.tween._time || !lm())
      for (var i = r._pt; i; ) (i.r(n, i.d), (i = i._next));
    else r.styles.revert();
  },
  get: Oa,
  aliases: ia,
  getSetter: function (n, r, i) {
    var u = ia[r];
    return (
      u && u.indexOf(",") < 0 && (r = u),
      r in Ua && r !== Zl && (n._gsap.x || Oa(n, "x"))
        ? i && A1 === i
          ? r === "scale"
            ? a3
            : n3
          : (A1 = i || {}) && (r === "scale" ? i3 : r3)
        : n.style && !Gh(n.style[r])
          ? t3
          : ~r.indexOf("-")
            ? l3
            : Ih(n, r)
    );
  },
  core: { _removeProperty: yi, _getMatrix: am },
};
Kl.utils.checkPrefix = uu;
Kl.core.getStyleSaver = fv;
(function (f, n, r, i) {
  var u = Vl(f + "," + n + "," + r, function (o) {
    Ua[o] = 1;
  });
  (Vl(n, function (o) {
    ((hn.units[o] = "deg"), (pv[o] = 1));
  }),
    (ia[u[13]] = f + "," + n),
    Vl(i, function (o) {
      var d = o.split(":");
      ia[d[1]] = u[d[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Vl(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (f) {
    hn.units[f] = "px";
  },
);
Kl.registerPlugin(vv);
var Me = Kl.registerPlugin(vv) || Kl;
Me.core.Tween;
function _3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null),
    i = le.useRef(null),
    u = le.useRef(null);
  return (
    le.useEffect(() => {
      const o = Me.context(() => {
        const d = Me.timeline({ defaults: { ease: "power3.out" } });
        if (
          (d.fromTo(
            n.current,
            { clipPath: "circle(0% at 50% 50%)", scale: 1.1 },
            { clipPath: "circle(150% at 50% 50%)", scale: 1, duration: 1.4 },
          ),
          r.current)
        ) {
          const h = r.current.querySelectorAll(".word");
          d.fromTo(
            h,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
            "-=0.8",
          );
        }
        (d.fromTo(
          i.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          "-=0.4",
        ),
          d.fromTo(
            u.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
            "-=0.2",
          ));
      }, f);
      return () => o.revert();
    }, []),
    le.useEffect(() => {
      const o = () => {
        if (n.current) {
          const d = window.scrollY;
          Me.to(n.current, { y: d * 0.15, duration: 0.3, ease: "power1.out" });
        }
      };
      return (
        window.addEventListener("scroll", o, { passive: !0 }),
        () => window.removeEventListener("scroll", o)
      );
    }, []),
    y.jsxs("section", {
      ref: f,
      className: "relative min-h-screen w-full overflow-hidden bg-cream",
      children: [
        y.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            y.jsx("div", {
              className:
                "absolute top-1/4 left-10 w-4 h-4 bg-soft-pink/30 rounded-full animate-petalFloat",
              style: { animationDelay: "0s" },
            }),
            y.jsx("div", {
              className:
                "absolute top-1/3 right-20 w-3 h-3 bg-coral/20 rounded-full animate-petalFloat",
              style: { animationDelay: "2s" },
            }),
            y.jsx("div", {
              className:
                "absolute bottom-1/3 left-1/4 w-5 h-5 bg-pale-blush/40 rounded-full animate-petalFloat",
              style: { animationDelay: "4s" },
            }),
          ],
        }),
        y.jsx("div", {
          className:
            "w-full min-h-screen px-6 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-12 lg:pt-32 lg:pb-20",
          children: y.jsxs("div", {
            className:
              "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]",
            children: [
              y.jsxs("div", {
                className: "order-2 lg:order-1 flex flex-col justify-center",
                children: [
                  y.jsxs("h1", {
                    ref: r,
                    className:
                      "font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-dark-brown leading-[1.1] mb-6 overflow-hidden",
                    children: [
                      y.jsx("span", {
                        className: "word inline-block",
                        children: "Velvet",
                      }),
                      " ",
                      y.jsx("span", {
                        className: "word inline-block text-coral",
                        children: "Rose",
                      }),
                    ],
                  }),
                  y.jsx("p", {
                    ref: i,
                    className:
                      "text-lg sm:text-xl text-muted-taupe max-w-md mb-8 leading-relaxed",
                    children:
                      "Crafting moments of botanical elegance for life's most precious occasions. Each petal tells a story of love, beauty, and timeless romance.",
                  }),
                  y.jsx("div", {
                    ref: u,
                    children: y.jsxs(cl, {
                      size: "lg",
                      className:
                        "bg-coral hover:bg-coral/90 text-white rounded-full px-8 py-6 text-base font-medium shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom group",
                      children: [
                        "Explore Collection",
                        y.jsx(Da, {
                          className:
                            "ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              y.jsx("div", {
                className:
                  "order-1 lg:order-2 flex justify-center lg:justify-end",
                children: y.jsxs("div", {
                  ref: n,
                  className:
                    "relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[4/5] lg:aspect-[3/4] overflow-hidden",
                  style: { clipPath: "circle(0% at 50% 50%)" },
                  children: [
                    y.jsx("svg", {
                      className: "absolute inset-0 w-full h-full",
                      viewBox: "0 0 100 100",
                      preserveAspectRatio: "none",
                      children: y.jsx("defs", {
                        children: y.jsx("clipPath", {
                          id: "pill-arch",
                          clipPathUnits: "objectBoundingBox",
                          children: y.jsx("path", {
                            d: "M0,0.3 Q0,0 0.5,0 Q1,0 1,0.3 L1,1 L0,1 Z",
                          }),
                        }),
                      }),
                    }),
                    y.jsx("img", {
                      src: Zt("hero-bouquet.jpg"),
                      alt: "Beautiful floral bouquet with pink and peach roses",
                      className: "w-full h-full object-cover animate-breathe",
                      style: { clipPath: "url(#pill-arch)" },
                    }),
                    y.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent pointer-events-none",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        y.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-rose to-transparent",
        }),
      ],
    })
  );
}
function v3(f, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(f, i.key, i));
  }
}
function y3(f, n, r) {
  return (n && v3(f.prototype, n), f);
}
var fl,
  fc,
  cn,
  hi,
  mi,
  Ir,
  yv,
  Zi,
  ms,
  bv,
  ja,
  Qn,
  xv,
  Sv = function () {
    return (
      fl ||
      (typeof window < "u" && (fl = window.gsap) && fl.registerPlugin && fl)
    );
  },
  Tv = 1,
  Fr = [],
  He = [],
  ua = [],
  ps = Date.now,
  Nh = function (n, r) {
    return r;
  },
  b3 = function () {
    var n = ms.core,
      r = n.bridge || {},
      i = n._scrollers,
      u = n._proxies;
    (i.push.apply(i, He),
      u.push.apply(u, ua),
      (He = i),
      (ua = u),
      (Nh = function (d, h) {
        return r[d](h);
      }));
  },
  _i = function (n, r) {
    return ~ua.indexOf(n) && ua[ua.indexOf(n) + 1][r];
  },
  gs = function (n) {
    return !!~bv.indexOf(n);
  },
  Nl = function (n, r, i, u, o) {
    return n.addEventListener(r, i, { passive: u !== !1, capture: !!o });
  },
  Al = function (n, r, i, u) {
    return n.removeEventListener(r, i, !!u);
  },
  Wo = "scrollLeft",
  $o = "scrollTop",
  Mh = function () {
    return (ja && ja.isPressed) || He.cache++;
  },
  Ac = function (n, r) {
    var i = function u(o) {
      if (o || o === 0) {
        Tv && (cn.history.scrollRestoration = "manual");
        var d = ja && ja.isPressed;
        ((o = u.v = Math.round(o) || (ja && ja.iOS ? 1 : 0)),
          n(o),
          (u.cacheID = He.cache),
          d && Nh("ss", o));
      } else
        (r || He.cache !== u.cacheID || Nh("ref")) &&
          ((u.cacheID = He.cache), (u.v = n()));
      return u.v + u.offset;
    };
    return ((i.offset = 0), n && i);
  },
  Dl = {
    s: Wo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ac(function (f) {
      return arguments.length
        ? cn.scrollTo(f, It.sc())
        : cn.pageXOffset || hi[Wo] || mi[Wo] || Ir[Wo] || 0;
    }),
  },
  It = {
    s: $o,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dl,
    sc: Ac(function (f) {
      return arguments.length
        ? cn.scrollTo(Dl.sc(), f)
        : cn.pageYOffset || hi[$o] || mi[$o] || Ir[$o] || 0;
    }),
  },
  Gl = function (n, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || fl.utils.toArray)(n)[0] ||
      (typeof n == "string" && fl.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  x3 = function (n, r) {
    for (var i = r.length; i--; ) if (r[i] === n || r[i].contains(n)) return !0;
    return !1;
  },
  xi = function (n, r) {
    var i = r.s,
      u = r.sc;
    gs(n) && (n = hi.scrollingElement || mi);
    var o = He.indexOf(n),
      d = u === It.sc ? 1 : 2;
    (!~o && (o = He.push(n) - 1), He[o + d] || Nl(n, "scroll", Mh));
    var h = He[o + d],
      m =
        h ||
        (He[o + d] =
          Ac(_i(n, i), !0) ||
          (gs(n)
            ? u
            : Ac(function (p) {
                return arguments.length ? (n[i] = p) : n[i];
              })));
    return (
      (m.target = n),
      h || (m.smooth = fl.getProperty(n, "scrollBehavior") === "smooth"),
      m
    );
  },
  Oh = function (n, r, i) {
    var u = n,
      o = n,
      d = ps(),
      h = d,
      m = r || 50,
      p = Math.max(500, m * 3),
      _ = function (z, S) {
        var M = ps();
        S || M - d > m
          ? ((o = u), (u = z), (h = d), (d = M))
          : i
            ? (u += z)
            : (u = o + ((z - o) / (M - h)) * (d - h));
      },
      b = function () {
        ((o = u = i ? 0 : u), (h = d = 0));
      },
      T = function (z) {
        var S = h,
          M = o,
          q = ps();
        return (
          (z || z === 0) && z !== u && _(z),
          d === h || q - h > p
            ? 0
            : ((u + (i ? M : -M)) / ((i ? q : d) - S)) * 1e3
        );
      };
    return { update: _, reset: b, getVelocity: T };
  },
  ls = function (n, r) {
    return (
      r && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  U1 = function (n) {
    var r = Math.max.apply(Math, n),
      i = Math.min.apply(Math, n);
    return Math.abs(r) >= Math.abs(i) ? r : i;
  },
  wv = function () {
    ((ms = fl.core.globals().ScrollTrigger), ms && ms.core && b3());
  },
  Ev = function (n) {
    return (
      (fl = n || Sv()),
      !fc &&
        fl &&
        typeof document < "u" &&
        document.body &&
        ((cn = window),
        (hi = document),
        (mi = hi.documentElement),
        (Ir = hi.body),
        (bv = [cn, hi, mi, Ir]),
        fl.utils.clamp,
        (xv = fl.core.context || function () {}),
        (Zi = "onpointerenter" in Ir ? "pointer" : "mouse"),
        (yv = Bt.isTouch =
          cn.matchMedia &&
          cn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in cn ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Qn = Bt.eventTypes =
          (
            "ontouchstart" in mi
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in mi
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Tv = 0);
        }, 500),
        wv(),
        (fc = 1)),
      fc
    );
  };
Dl.op = It;
He.cache = 0;
var Bt = (function () {
  function f(r) {
    this.init(r);
  }
  var n = f.prototype;
  return (
    (n.init = function (i) {
      (fc || Ev(fl) || console.warn("Please gsap.registerPlugin(Observer)"),
        ms || wv());
      var u = i.tolerance,
        o = i.dragMinimum,
        d = i.type,
        h = i.target,
        m = i.lineHeight,
        p = i.debounce,
        _ = i.preventDefault,
        b = i.onStop,
        T = i.onStopDelay,
        x = i.ignore,
        z = i.wheelSpeed,
        S = i.event,
        M = i.onDragStart,
        q = i.onDragEnd,
        V = i.onDrag,
        K = i.onPress,
        U = i.onRelease,
        Q = i.onRight,
        W = i.onLeft,
        D = i.onUp,
        B = i.onDown,
        J = i.onChangeX,
        I = i.onChangeY,
        de = i.onChange,
        te = i.onToggleX,
        xe = i.onToggleY,
        ye = i.onHover,
        ve = i.onHoverEnd,
        C = i.onMove,
        G = i.ignoreCheck,
        X = i.isNormalizer,
        he = i.onGestureStart,
        N = i.onGestureEnd,
        E = i.onWheel,
        L = i.onEnable,
        P = i.onDisable,
        ee = i.onClick,
        ie = i.scrollSpeed,
        me = i.capture,
        ae = i.allowClicks,
        Ze = i.lockAxis,
        ze = i.onLockAxis;
      ((this.target = h = Gl(h) || mi),
        (this.vars = i),
        x && (x = fl.utils.toArray(x)),
        (u = u || 1e-9),
        (o = o || 0),
        (z = z || 1),
        (ie = ie || 1),
        (d = d || "wheel,touch,pointer"),
        (p = p !== !1),
        m || (m = parseFloat(cn.getComputedStyle(Ir).lineHeight) || 22));
      var Jt,
        mt,
        pt,
        Le,
        Ie,
        el,
        il,
        Y = this,
        hl = 0,
        Jl = 0,
        gn = i.passive || (!_ && i.passive !== !1),
        st = xi(h, Dl),
        Yn = xi(h, It),
        Zn = st(),
        jt = Yn(),
        Ht =
          ~d.indexOf("touch") &&
          !~d.indexOf("pointer") &&
          Qn[0] === "pointerdown",
        qn = gs(h),
        gt = h.ownerDocument || hi,
        ml = [0, 0, 0],
        Rl = [0, 0, 0],
        _n = 0,
        Ti = function () {
          return (_n = ps());
        },
        At = function (pe, Je) {
          return (
            ((Y.event = pe) && x && x3(pe.target, x)) ||
            (Je && Ht && pe.pointerType !== "touch") ||
            (G && G(pe, Je))
          );
        },
        Kn = function () {
          (Y._vx.reset(), Y._vy.reset(), mt.pause(), b && b(Y));
        },
        bt = function () {
          var pe = (Y.deltaX = U1(ml)),
            Je = (Y.deltaY = U1(Rl)),
            ne = Math.abs(pe) >= u,
            we = Math.abs(Je) >= u;
          (de && (ne || we) && de(Y, pe, Je, ml, Rl),
            ne &&
              (Q && Y.deltaX > 0 && Q(Y),
              W && Y.deltaX < 0 && W(Y),
              J && J(Y),
              te && Y.deltaX < 0 != hl < 0 && te(Y),
              (hl = Y.deltaX),
              (ml[0] = ml[1] = ml[2] = 0)),
            we &&
              (B && Y.deltaY > 0 && B(Y),
              D && Y.deltaY < 0 && D(Y),
              I && I(Y),
              xe && Y.deltaY < 0 != Jl < 0 && xe(Y),
              (Jl = Y.deltaY),
              (Rl[0] = Rl[1] = Rl[2] = 0)),
            (Le || pt) &&
              (C && C(Y),
              pt && (M && pt === 1 && M(Y), V && V(Y), (pt = 0)),
              (Le = !1)),
            el && !(el = !1) && ze && ze(Y),
            Ie && (E(Y), (Ie = !1)),
            (Jt = 0));
        },
        Tl = function (pe, Je, ne) {
          ((ml[ne] += pe),
            (Rl[ne] += Je),
            Y._vx.update(pe),
            Y._vy.update(Je),
            p ? Jt || (Jt = requestAnimationFrame(bt)) : bt());
        },
        Yt = function (pe, Je) {
          (Ze &&
            !il &&
            ((Y.axis = il = Math.abs(pe) > Math.abs(Je) ? "x" : "y"),
            (el = !0)),
            il !== "y" && ((ml[2] += pe), Y._vx.update(pe, !0)),
            il !== "x" && ((Rl[2] += Je), Y._vy.update(Je, !0)),
            p ? Jt || (Jt = requestAnimationFrame(bt)) : bt());
        },
        Jn = function (pe) {
          if (!At(pe, 1)) {
            pe = ls(pe, _);
            var Je = pe.clientX,
              ne = pe.clientY,
              we = Je - Y.x,
              ge = ne - Y.y,
              Se = Y.isDragging;
            ((Y.x = Je),
              (Y.y = ne),
              (Se ||
                ((we || ge) &&
                  (Math.abs(Y.startX - Je) >= o ||
                    Math.abs(Y.startY - ne) >= o))) &&
                (pt || (pt = Se ? 2 : 1),
                Se || (Y.isDragging = !0),
                Yt(we, ge)));
          }
        },
        oa = (Y.onPress = function (Te) {
          At(Te, 1) ||
            (Te && Te.button) ||
            ((Y.axis = il = null),
            mt.pause(),
            (Y.isPressed = !0),
            (Te = ls(Te)),
            (hl = Jl = 0),
            (Y.startX = Y.x = Te.clientX),
            (Y.startY = Y.y = Te.clientY),
            Y._vx.reset(),
            Y._vy.reset(),
            Nl(X ? h : gt, Qn[1], Jn, gn, !0),
            (Y.deltaX = Y.deltaY = 0),
            K && K(Y));
        }),
        Ce = (Y.onRelease = function (Te) {
          if (!At(Te, 1)) {
            Al(X ? h : gt, Qn[1], Jn, !0);
            var pe = !isNaN(Y.y - Y.startY),
              Je = Y.isDragging,
              ne =
                Je &&
                (Math.abs(Y.x - Y.startX) > 3 || Math.abs(Y.y - Y.startY) > 3),
              we = ls(Te);
            (!ne &&
              pe &&
              (Y._vx.reset(),
              Y._vy.reset(),
              _ &&
                ae &&
                fl.delayedCall(0.08, function () {
                  if (ps() - _n > 300 && !Te.defaultPrevented) {
                    if (Te.target.click) Te.target.click();
                    else if (gt.createEvent) {
                      var ge = gt.createEvent("MouseEvents");
                      (ge.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        cn,
                        1,
                        we.screenX,
                        we.screenY,
                        we.clientX,
                        we.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        Te.target.dispatchEvent(ge));
                    }
                  }
                })),
              (Y.isDragging = Y.isGesturing = Y.isPressed = !1),
              b && Je && !X && mt.restart(!0),
              pt && bt(),
              q && Je && q(Y),
              U && U(Y, ne));
          }
        }),
        vn = function (pe) {
          return (
            pe.touches &&
            pe.touches.length > 1 &&
            (Y.isGesturing = !0) &&
            he(pe, Y.isDragging)
          );
        },
        pl = function () {
          return (Y.isGesturing = !1) || N(Y);
        },
        gl = function (pe) {
          if (!At(pe)) {
            var Je = st(),
              ne = Yn();
            (Tl((Je - Zn) * ie, (ne - jt) * ie, 1),
              (Zn = Je),
              (jt = ne),
              b && mt.restart(!0));
          }
        },
        Ft = function (pe) {
          if (!At(pe)) {
            ((pe = ls(pe, _)), E && (Ie = !0));
            var Je =
              (pe.deltaMode === 1
                ? m
                : pe.deltaMode === 2
                  ? cn.innerHeight
                  : 1) * z;
            (Tl(pe.deltaX * Je, pe.deltaY * Je, 0), b && !X && mt.restart(!0));
          }
        },
        yn = function (pe) {
          if (!At(pe)) {
            var Je = pe.clientX,
              ne = pe.clientY,
              we = Je - Y.x,
              ge = ne - Y.y;
            ((Y.x = Je),
              (Y.y = ne),
              (Le = !0),
              b && mt.restart(!0),
              (we || ge) && Yt(we, ge));
          }
        },
        bn = function (pe) {
          ((Y.event = pe), ye(Y));
        },
        Ln = function (pe) {
          ((Y.event = pe), ve(Y));
        },
        Ba = function (pe) {
          return At(pe) || (ls(pe, _) && ee(Y));
        };
      ((mt = Y._dc = fl.delayedCall(T || 0.25, Kn).pause()),
        (Y.deltaX = Y.deltaY = 0),
        (Y._vx = Oh(0, 50, !0)),
        (Y._vy = Oh(0, 50, !0)),
        (Y.scrollX = st),
        (Y.scrollY = Yn),
        (Y.isDragging = Y.isGesturing = Y.isPressed = !1),
        xv(this),
        (Y.enable = function (Te) {
          return (
            Y.isEnabled ||
              (Nl(qn ? gt : h, "scroll", Mh),
              d.indexOf("scroll") >= 0 && Nl(qn ? gt : h, "scroll", gl, gn, me),
              d.indexOf("wheel") >= 0 && Nl(h, "wheel", Ft, gn, me),
              ((d.indexOf("touch") >= 0 && yv) || d.indexOf("pointer") >= 0) &&
                (Nl(h, Qn[0], oa, gn, me),
                Nl(gt, Qn[2], Ce),
                Nl(gt, Qn[3], Ce),
                ae && Nl(h, "click", Ti, !0, !0),
                ee && Nl(h, "click", Ba),
                he && Nl(gt, "gesturestart", vn),
                N && Nl(gt, "gestureend", pl),
                ye && Nl(h, Zi + "enter", bn),
                ve && Nl(h, Zi + "leave", Ln),
                C && Nl(h, Zi + "move", yn)),
              (Y.isEnabled = !0),
              (Y.isDragging = Y.isGesturing = Y.isPressed = Le = pt = !1),
              Y._vx.reset(),
              Y._vy.reset(),
              (Zn = st()),
              (jt = Yn()),
              Te && Te.type && oa(Te),
              L && L(Y)),
            Y
          );
        }),
        (Y.disable = function () {
          Y.isEnabled &&
            (Fr.filter(function (Te) {
              return Te !== Y && gs(Te.target);
            }).length || Al(qn ? gt : h, "scroll", Mh),
            Y.isPressed &&
              (Y._vx.reset(), Y._vy.reset(), Al(X ? h : gt, Qn[1], Jn, !0)),
            Al(qn ? gt : h, "scroll", gl, me),
            Al(h, "wheel", Ft, me),
            Al(h, Qn[0], oa, me),
            Al(gt, Qn[2], Ce),
            Al(gt, Qn[3], Ce),
            Al(h, "click", Ti, !0),
            Al(h, "click", Ba),
            Al(gt, "gesturestart", vn),
            Al(gt, "gestureend", pl),
            Al(h, Zi + "enter", bn),
            Al(h, Zi + "leave", Ln),
            Al(h, Zi + "move", yn),
            (Y.isEnabled = Y.isPressed = Y.isDragging = !1),
            P && P(Y));
        }),
        (Y.kill = Y.revert =
          function () {
            Y.disable();
            var Te = Fr.indexOf(Y);
            (Te >= 0 && Fr.splice(Te, 1), ja === Y && (ja = 0));
          }),
        Fr.push(Y),
        X && gs(h) && (ja = Y),
        Y.enable(S));
    }),
    y3(f, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    f
  );
})();
Bt.version = "3.14.2";
Bt.create = function (f) {
  return new Bt(f);
};
Bt.register = Ev;
Bt.getAll = function () {
  return Fr.slice();
};
Bt.getById = function (f) {
  return Fr.filter(function (n) {
    return n.vars.id === f;
  })[0];
};
Sv() && fl.registerPlugin(Bt);
var ue,
  Qr,
  Be,
  ot,
  sn,
  Pe,
  im,
  Nc,
  Cs,
  _s,
  rs,
  Po,
  vl,
  Rc,
  Ch,
  Ol,
  B1,
  H1,
  Zr,
  zv,
  rh,
  Av,
  Ml,
  jh,
  Nv,
  Mv,
  oi,
  Dh,
  rm,
  eu,
  um,
  vs,
  Rh,
  uh,
  Io = 1,
  yl = Date.now,
  sh = yl(),
  Hn = 0,
  us = 0,
  Y1 = function (n, r, i) {
    var u = rn(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return ((i["_" + r + "Clamp"] = u), u ? n.substr(6, n.length - 7) : n);
  },
  q1 = function (n, r) {
    return r && (!rn(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  S3 = function f() {
    return us && requestAnimationFrame(f);
  },
  L1 = function () {
    return (Rc = 1);
  },
  G1 = function () {
    return (Rc = 0);
  },
  na = function (n) {
    return n;
  },
  ss = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Ov = function () {
    return typeof window < "u";
  },
  Cv = function () {
    return ue || (Ov() && (ue = window.gsap) && ue.registerPlugin && ue);
  },
  nr = function (n) {
    return !!~im.indexOf(n);
  },
  jv = function (n) {
    return (
      (n === "Height" ? um : Be["inner" + n]) ||
      sn["client" + n] ||
      Pe["client" + n]
    );
  },
  Dv = function (n) {
    return (
      _i(n, "getBoundingClientRect") ||
      (nr(n)
        ? function () {
            return ((gc.width = Be.innerWidth), (gc.height = um), gc);
          }
        : function () {
            return Ca(n);
          })
    );
  },
  T3 = function (n, r, i) {
    var u = i.d,
      o = i.d2,
      d = i.a;
    return (d = _i(n, "getBoundingClientRect"))
      ? function () {
          return d()[u];
        }
      : function () {
          return (r ? jv(o) : n["client" + o]) || 0;
        };
  },
  w3 = function (n, r) {
    return !r || ~ua.indexOf(n)
      ? Dv(n)
      : function () {
          return gc;
        };
  },
  ra = function (n, r) {
    var i = r.s,
      u = r.d2,
      o = r.d,
      d = r.a;
    return Math.max(
      0,
      (i = "scroll" + u) && (d = _i(n, i))
        ? d() - Dv(n)()[o]
        : nr(n)
          ? (sn[i] || Pe[i]) - jv(u)
          : n[i] - n["offset" + u],
    );
  },
  ec = function (n, r) {
    for (var i = 0; i < Zr.length; i += 3)
      (!r || ~r.indexOf(Zr[i + 1])) && n(Zr[i], Zr[i + 1], Zr[i + 2]);
  },
  rn = function (n) {
    return typeof n == "string";
  },
  xl = function (n) {
    return typeof n == "function";
  },
  os = function (n) {
    return typeof n == "number";
  },
  Ki = function (n) {
    return typeof n == "object";
  },
  ns = function (n, r, i) {
    return n && n.progress(r ? 0 : 1) && i && n.pause();
  },
  oh = function (n, r) {
    if (n.enabled) {
      var i = n._ctx
        ? n._ctx.add(function () {
            return r(n);
          })
        : r(n);
      i && i.totalTime && (n.callbackAnimation = i);
    }
  },
  Xr = Math.abs,
  Rv = "left",
  kv = "top",
  sm = "right",
  om = "bottom",
  er = "width",
  tr = "height",
  ys = "Right",
  bs = "Left",
  xs = "Top",
  Ss = "Bottom",
  Vt = "padding",
  Rn = "margin",
  su = "Width",
  cm = "Height",
  Pt = "px",
  kn = function (n) {
    return Be.getComputedStyle(n);
  },
  E3 = function (n) {
    var r = kn(n).position;
    n.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  X1 = function (n, r) {
    for (var i in r) i in n || (n[i] = r[i]);
    return n;
  },
  Ca = function (n, r) {
    var i =
        r &&
        kn(n)[Ch] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ue
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      u = n.getBoundingClientRect();
    return (i && i.progress(0).kill(), u);
  },
  Mc = function (n, r) {
    var i = r.d2;
    return n["offset" + i] || n["client" + i] || 0;
  },
  Uv = function (n) {
    var r = [],
      i = n.labels,
      u = n.duration(),
      o;
    for (o in i) r.push(i[o] / u);
    return r;
  },
  z3 = function (n) {
    return function (r) {
      return ue.utils.snap(Uv(n), r);
    };
  },
  fm = function (n) {
    var r = ue.utils.snap(n),
      i =
        Array.isArray(n) &&
        n.slice(0).sort(function (u, o) {
          return u - o;
        });
    return i
      ? function (u, o, d) {
          d === void 0 && (d = 0.001);
          var h;
          if (!o) return r(u);
          if (o > 0) {
            for (u -= d, h = 0; h < i.length; h++) if (i[h] >= u) return i[h];
            return i[h - 1];
          } else for (h = i.length, u += d; h--; ) if (i[h] <= u) return i[h];
          return i[0];
        }
      : function (u, o, d) {
          d === void 0 && (d = 0.001);
          var h = r(u);
          return !o || Math.abs(h - u) < d || h - u < 0 == o < 0
            ? h
            : r(o < 0 ? u - n : u + n);
        };
  },
  A3 = function (n) {
    return function (r, i) {
      return fm(Uv(n))(r, i.direction);
    };
  },
  tc = function (n, r, i, u) {
    return i.split(",").forEach(function (o) {
      return n(r, o, u);
    });
  },
  nl = function (n, r, i, u, o) {
    return n.addEventListener(r, i, { passive: !u, capture: !!o });
  },
  ll = function (n, r, i, u) {
    return n.removeEventListener(r, i, !!u);
  },
  lc = function (n, r, i) {
    ((i = i && i.wheelHandler), i && (n(r, "wheel", i), n(r, "touchmove", i)));
  },
  V1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  nc = { toggleActions: "play", anticipatePin: 0 },
  Oc = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  dc = function (n, r) {
    if (rn(n)) {
      var i = n.indexOf("="),
        u = ~i ? +(n.charAt(i - 1) + 1) * parseFloat(n.substr(i + 1)) : 0;
      (~i && (n.indexOf("%") > i && (u *= r / 100), (n = n.substr(0, i - 1))),
        (n =
          u +
          (n in Oc
            ? Oc[n] * r
            : ~n.indexOf("%")
              ? (parseFloat(n) * r) / 100
              : parseFloat(n) || 0)));
    }
    return n;
  },
  ac = function (n, r, i, u, o, d, h, m) {
    var p = o.startColor,
      _ = o.endColor,
      b = o.fontSize,
      T = o.indent,
      x = o.fontWeight,
      z = ot.createElement("div"),
      S = nr(i) || _i(i, "pinType") === "fixed",
      M = n.indexOf("scroller") !== -1,
      q = S ? Pe : i,
      V = n.indexOf("start") !== -1,
      K = V ? p : _,
      U =
        "border-color:" +
        K +
        ";font-size:" +
        b +
        ";color:" +
        K +
        ";font-weight:" +
        x +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (U += "position:" + ((M || m) && S ? "fixed;" : "absolute;")),
      (M || m || !S) &&
        (U += (u === It ? sm : om) + ":" + (d + parseFloat(T)) + "px;"),
      h &&
        (U +=
          "box-sizing:border-box;text-align:left;width:" +
          h.offsetWidth +
          "px;"),
      (z._isStart = V),
      z.setAttribute("class", "gsap-marker-" + n + (r ? " marker-" + r : "")),
      (z.style.cssText = U),
      (z.innerText = r || r === 0 ? n + "-" + r : n),
      q.children[0] ? q.insertBefore(z, q.children[0]) : q.appendChild(z),
      (z._offset = z["offset" + u.op.d2]),
      hc(z, 0, u, V),
      z
    );
  },
  hc = function (n, r, i, u) {
    var o = { display: "block" },
      d = i[u ? "os2" : "p2"],
      h = i[u ? "p2" : "os2"];
    ((n._isFlipped = u),
      (o[i.a + "Percent"] = u ? -100 : 0),
      (o[i.a] = u ? "1px" : 0),
      (o["border" + d + su] = 1),
      (o["border" + h + su] = 0),
      (o[i.p] = r + "px"),
      ue.set(n, o));
  },
  Re = [],
  kh = {},
  js,
  Q1 = function () {
    return yl() - Hn > 34 && (js || (js = requestAnimationFrame(Ra)));
  },
  Vr = function () {
    (!Ml || !Ml.isPressed || Ml.startX > Pe.clientWidth) &&
      (He.cache++,
      Ml ? js || (js = requestAnimationFrame(Ra)) : Ra(),
      Hn || ir("scrollStart"),
      (Hn = yl()));
  },
  ch = function () {
    ((Mv = Be.innerWidth), (Nv = Be.innerHeight));
  },
  cs = function (n) {
    (He.cache++,
      (n === !0 ||
        (!vl &&
          !Av &&
          !ot.fullscreenElement &&
          !ot.webkitFullscreenElement &&
          (!jh ||
            Mv !== Be.innerWidth ||
            Math.abs(Be.innerHeight - Nv) > Be.innerHeight * 0.25))) &&
        Nc.restart(!0));
  },
  ar = {},
  N3 = [],
  Bv = function f() {
    return ll(ce, "scrollEnd", f) || Fi(!0);
  },
  ir = function (n) {
    return (
      (ar[n] &&
        ar[n].map(function (r) {
          return r();
        })) ||
      N3
    );
  },
  an = [],
  Hv = function (n) {
    for (var r = 0; r < an.length; r += 5)
      (!n || (an[r + 4] && an[r + 4].query === n)) &&
        ((an[r].style.cssText = an[r + 1]),
        an[r].getBBox && an[r].setAttribute("transform", an[r + 2] || ""),
        (an[r + 3].uncache = 1));
  },
  Yv = function () {
    return He.forEach(function (n) {
      return xl(n) && ++n.cacheID && (n.rec = n());
    });
  },
  dm = function (n, r) {
    var i;
    for (Ol = 0; Ol < Re.length; Ol++)
      ((i = Re[Ol]),
        i && (!r || i._ctx === r) && (n ? i.kill(1) : i.revert(!0, !0)));
    ((vs = !0), r && Hv(r), r || ir("revert"));
  },
  qv = function (n, r) {
    (He.cache++,
      (r || !Cl) &&
        He.forEach(function (i) {
          return xl(i) && i.cacheID++ && (i.rec = 0);
        }),
      rn(n) && (Be.history.scrollRestoration = rm = n));
  },
  Cl,
  lr = 0,
  Z1,
  M3 = function () {
    if (Z1 !== lr) {
      var n = (Z1 = lr);
      requestAnimationFrame(function () {
        return n === lr && Fi(!0);
      });
    }
  },
  Lv = function () {
    (Pe.appendChild(eu),
      (um = (!Ml && eu.offsetHeight) || Be.innerHeight),
      Pe.removeChild(eu));
  },
  K1 = function (n) {
    return Cs(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (r) {
      return (r.style.display = n ? "none" : "block");
    });
  },
  Fi = function (n, r) {
    if (
      ((sn = ot.documentElement),
      (Pe = ot.body),
      (im = [Be, ot, sn, Pe]),
      Hn && !n && !vs)
    ) {
      nl(ce, "scrollEnd", Bv);
      return;
    }
    (Lv(), (Cl = ce.isRefreshing = !0), vs || Yv());
    var i = ir("refreshInit");
    (zv && ce.sort(),
      r || dm(),
      He.forEach(function (u) {
        xl(u) && (u.smooth && (u.target.style.scrollBehavior = "auto"), u(0));
      }),
      Re.slice(0).forEach(function (u) {
        return u.refresh();
      }),
      (vs = !1),
      Re.forEach(function (u) {
        if (u._subPinOffset && u.pin) {
          var o = u.vars.horizontal ? "offsetWidth" : "offsetHeight",
            d = u.pin[o];
          (u.revert(!0, 1), u.adjustPinSpacing(u.pin[o] - d), u.refresh());
        }
      }),
      (Rh = 1),
      K1(!0),
      Re.forEach(function (u) {
        var o = ra(u.scroller, u._dir),
          d = u.vars.end === "max" || (u._endClamp && u.end > o),
          h = u._startClamp && u.start >= o;
        (d || h) &&
          u.setPositions(
            h ? o - 1 : u.start,
            d ? Math.max(h ? o : u.start + 1, o) : u.end,
            !0,
          );
      }),
      K1(!1),
      (Rh = 0),
      i.forEach(function (u) {
        return u && u.render && u.render(-1);
      }),
      He.forEach(function (u) {
        xl(u) &&
          (u.smooth &&
            requestAnimationFrame(function () {
              return (u.target.style.scrollBehavior = "smooth");
            }),
          u.rec && u(u.rec));
      }),
      qv(rm, 1),
      Nc.pause(),
      lr++,
      (Cl = 2),
      Ra(2),
      Re.forEach(function (u) {
        return xl(u.vars.onRefresh) && u.vars.onRefresh(u);
      }),
      (Cl = ce.isRefreshing = !1),
      ir("refresh"));
  },
  Uh = 0,
  mc = 1,
  Ts,
  Ra = function (n) {
    if (n === 2 || (!Cl && !vs)) {
      ((ce.isUpdating = !0), Ts && Ts.update(0));
      var r = Re.length,
        i = yl(),
        u = i - sh >= 50,
        o = r && Re[0].scroll();
      if (
        ((mc = Uh > o ? -1 : 1),
        Cl || (Uh = o),
        u &&
          (Hn && !Rc && i - Hn > 200 && ((Hn = 0), ir("scrollEnd")),
          (rs = sh),
          (sh = i)),
        mc < 0)
      ) {
        for (Ol = r; Ol-- > 0; ) Re[Ol] && Re[Ol].update(0, u);
        mc = 1;
      } else for (Ol = 0; Ol < r; Ol++) Re[Ol] && Re[Ol].update(0, u);
      ce.isUpdating = !1;
    }
    js = 0;
  },
  Bh = [
    Rv,
    kv,
    om,
    sm,
    Rn + Ss,
    Rn + ys,
    Rn + xs,
    Rn + bs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  pc = Bh.concat([
    er,
    tr,
    "boxSizing",
    "max" + su,
    "max" + cm,
    "position",
    Rn,
    Vt,
    Vt + xs,
    Vt + ys,
    Vt + Ss,
    Vt + bs,
  ]),
  O3 = function (n, r, i) {
    tu(i);
    var u = n._gsap;
    if (u.spacerIsNative) tu(u.spacerState);
    else if (n._gsap.swappedIn) {
      var o = r.parentNode;
      o && (o.insertBefore(n, r), o.removeChild(r));
    }
    n._gsap.swappedIn = !1;
  },
  fh = function (n, r, i, u) {
    if (!n._gsap.swappedIn) {
      for (var o = Bh.length, d = r.style, h = n.style, m; o--; )
        ((m = Bh[o]), (d[m] = i[m]));
      ((d.position = i.position === "absolute" ? "absolute" : "relative"),
        i.display === "inline" && (d.display = "inline-block"),
        (h[om] = h[sm] = "auto"),
        (d.flexBasis = i.flexBasis || "auto"),
        (d.overflow = "visible"),
        (d.boxSizing = "border-box"),
        (d[er] = Mc(n, Dl) + Pt),
        (d[tr] = Mc(n, It) + Pt),
        (d[Vt] = h[Rn] = h[kv] = h[Rv] = "0"),
        tu(u),
        (h[er] = h["max" + su] = i[er]),
        (h[tr] = h["max" + cm] = i[tr]),
        (h[Vt] = i[Vt]),
        n.parentNode !== r &&
          (n.parentNode.insertBefore(r, n), r.appendChild(n)),
        (n._gsap.swappedIn = !0));
    }
  },
  C3 = /([A-Z])/g,
  tu = function (n) {
    if (n) {
      var r = n.t.style,
        i = n.length,
        u = 0,
        o,
        d;
      for ((n.t._gsap || ue.core.getCache(n.t)).uncache = 1; u < i; u += 2)
        ((d = n[u + 1]),
          (o = n[u]),
          d
            ? (r[o] = d)
            : r[o] && r.removeProperty(o.replace(C3, "-$1").toLowerCase()));
    }
  },
  ic = function (n) {
    for (var r = pc.length, i = n.style, u = [], o = 0; o < r; o++)
      u.push(pc[o], i[pc[o]]);
    return ((u.t = n), u);
  },
  j3 = function (n, r, i) {
    for (var u = [], o = n.length, d = i ? 8 : 0, h; d < o; d += 2)
      ((h = n[d]), u.push(h, h in r ? r[h] : n[d + 1]));
    return ((u.t = n.t), u);
  },
  gc = { left: 0, top: 0 },
  J1 = function (n, r, i, u, o, d, h, m, p, _, b, T, x, z) {
    (xl(n) && (n = n(m)),
      rn(n) &&
        n.substr(0, 3) === "max" &&
        (n = T + (n.charAt(4) === "=" ? dc("0" + n.substr(3), i) : 0)));
    var S = x ? x.time() : 0,
      M,
      q,
      V;
    if ((x && x.seek(0), isNaN(n) || (n = +n), os(n)))
      (x &&
        (n = ue.utils.mapRange(
          x.scrollTrigger.start,
          x.scrollTrigger.end,
          0,
          T,
          n,
        )),
        h && hc(h, i, u, !0));
    else {
      xl(r) && (r = r(m));
      var K = (n || "0").split(" "),
        U,
        Q,
        W,
        D;
      ((V = Gl(r, m) || Pe),
        (U = Ca(V) || {}),
        (!U || (!U.left && !U.top)) &&
          kn(V).display === "none" &&
          ((D = V.style.display),
          (V.style.display = "block"),
          (U = Ca(V)),
          D ? (V.style.display = D) : V.style.removeProperty("display")),
        (Q = dc(K[0], U[u.d])),
        (W = dc(K[1] || "0", i)),
        (n = U[u.p] - p[u.p] - _ + Q + o - W),
        h && hc(h, W, u, i - W < 20 || (h._isStart && W > 20)),
        (i -= i - W));
    }
    if ((z && ((m[z] = n || -0.001), n < 0 && (n = 0)), d)) {
      var B = n + i,
        J = d._isStart;
      ((M = "scroll" + u.d2),
        hc(
          d,
          B,
          u,
          (J && B > 20) ||
            (!J && (b ? Math.max(Pe[M], sn[M]) : d.parentNode[M]) <= B + 1),
        ),
        b &&
          ((p = Ca(h)),
          b && (d.style[u.op.p] = p[u.op.p] - u.op.m - d._offset + Pt)));
    }
    return (
      x &&
        V &&
        ((M = Ca(V)),
        x.seek(T),
        (q = Ca(V)),
        (x._caScrollDist = M[u.p] - q[u.p]),
        (n = (n / x._caScrollDist) * T)),
      x && x.seek(S),
      x ? n : Math.round(n)
    );
  },
  D3 = /(webkit|moz|length|cssText|inset)/i,
  F1 = function (n, r, i, u) {
    if (n.parentNode !== r) {
      var o = n.style,
        d,
        h;
      if (r === Pe) {
        ((n._stOrig = o.cssText), (h = kn(n)));
        for (d in h)
          !+d &&
            !D3.test(d) &&
            h[d] &&
            typeof o[d] == "string" &&
            d !== "0" &&
            (o[d] = h[d]);
        ((o.top = i), (o.left = u));
      } else o.cssText = n._stOrig;
      ((ue.core.getCache(n).uncache = 1), r.appendChild(n));
    }
  },
  Gv = function (n, r, i) {
    var u = r,
      o = u;
    return function (d) {
      var h = Math.round(n());
      return (
        h !== u &&
          h !== o &&
          Math.abs(h - u) > 3 &&
          Math.abs(h - o) > 3 &&
          ((d = h), i && i()),
        (o = u),
        (u = Math.round(d)),
        u
      );
    };
  },
  rc = function (n, r, i) {
    var u = {};
    ((u[r.p] = "+=" + i), ue.set(n, u));
  },
  W1 = function (n, r) {
    var i = xi(n, r),
      u = "_scroll" + r.p2,
      o = function d(h, m, p, _, b) {
        var T = d.tween,
          x = m.onComplete,
          z = {};
        p = p || i();
        var S = Gv(i, p, function () {
          (T.kill(), (d.tween = 0));
        });
        return (
          (b = (_ && b) || 0),
          (_ = _ || h - p),
          T && T.kill(),
          (m[u] = h),
          (m.inherit = !1),
          (m.modifiers = z),
          (z[u] = function () {
            return S(p + _ * T.ratio + b * T.ratio * T.ratio);
          }),
          (m.onUpdate = function () {
            (He.cache++, d.tween && Ra());
          }),
          (m.onComplete = function () {
            ((d.tween = 0), x && x.call(T));
          }),
          (T = d.tween = ue.to(n, m)),
          T
        );
      };
    return (
      (n[u] = i),
      (i.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      nl(n, "wheel", i.wheelHandler),
      ce.isTouch && nl(n, "touchmove", i.wheelHandler),
      o
    );
  },
  ce = (function () {
    function f(r, i) {
      (Qr ||
        f.register(ue) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Dh(this),
        this.init(r, i));
    }
    var n = f.prototype;
    return (
      (n.init = function (i, u) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !us)
        ) {
          this.update = this.refresh = this.kill = na;
          return;
        }
        i = X1(rn(i) || os(i) || i.nodeType ? { trigger: i } : i, nc);
        var o = i,
          d = o.onUpdate,
          h = o.toggleClass,
          m = o.id,
          p = o.onToggle,
          _ = o.onRefresh,
          b = o.scrub,
          T = o.trigger,
          x = o.pin,
          z = o.pinSpacing,
          S = o.invalidateOnRefresh,
          M = o.anticipatePin,
          q = o.onScrubComplete,
          V = o.onSnapComplete,
          K = o.once,
          U = o.snap,
          Q = o.pinReparent,
          W = o.pinSpacer,
          D = o.containerAnimation,
          B = o.fastScrollEnd,
          J = o.preventOverlaps,
          I =
            i.horizontal || (i.containerAnimation && i.horizontal !== !1)
              ? Dl
              : It,
          de = !b && b !== 0,
          te = Gl(i.scroller || Be),
          xe = ue.core.getCache(te),
          ye = nr(te),
          ve =
            ("pinType" in i
              ? i.pinType
              : _i(te, "pinType") || (ye && "fixed")) === "fixed",
          C = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          G = de && i.toggleActions.split(" "),
          X = "markers" in i ? i.markers : nc.markers,
          he = ye ? 0 : parseFloat(kn(te)["border" + I.p2 + su]) || 0,
          N = this,
          E =
            i.onRefreshInit &&
            function () {
              return i.onRefreshInit(N);
            },
          L = T3(te, ye, I),
          P = w3(te, ye),
          ee = 0,
          ie = 0,
          me = 0,
          ae = xi(te, I),
          Ze,
          ze,
          Jt,
          mt,
          pt,
          Le,
          Ie,
          el,
          il,
          Y,
          hl,
          Jl,
          gn,
          st,
          Yn,
          Zn,
          jt,
          Ht,
          qn,
          gt,
          ml,
          Rl,
          _n,
          Ti,
          At,
          Kn,
          bt,
          Tl,
          Yt,
          Jn,
          oa,
          Ce,
          vn,
          pl,
          gl,
          Ft,
          yn,
          bn,
          Ln;
        if (
          ((N._startClamp = N._endClamp = !1),
          (N._dir = I),
          (M *= 45),
          (N.scroller = te),
          (N.scroll = D ? D.time.bind(D) : ae),
          (mt = ae()),
          (N.vars = i),
          (u = u || i.animation),
          "refreshPriority" in i &&
            ((zv = 1), i.refreshPriority === -9999 && (Ts = N)),
          (xe.tweenScroll = xe.tweenScroll || {
            top: W1(te, It),
            left: W1(te, Dl),
          }),
          (N.tweenTo = Ze = xe.tweenScroll[I.p]),
          (N.scrubDuration = function (ne) {
            ((vn = os(ne) && ne),
              vn
                ? Ce
                  ? Ce.duration(ne)
                  : (Ce = ue.to(u, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: vn,
                      paused: !0,
                      onComplete: function () {
                        return q && q(N);
                      },
                    }))
                : (Ce && Ce.progress(1).kill(), (Ce = 0)));
          }),
          u &&
            ((u.vars.lazy = !1),
            (u._initted && !N.isReverted) ||
              (u.vars.immediateRender !== !1 &&
                i.immediateRender !== !1 &&
                u.duration() &&
                u.render(0, !0, !0)),
            (N.animation = u.pause()),
            (u.scrollTrigger = N),
            N.scrubDuration(b),
            (Jn = 0),
            m || (m = u.vars.id)),
          U &&
            ((!Ki(U) || U.push) && (U = { snapTo: U }),
            "scrollBehavior" in Pe.style &&
              ue.set(ye ? [Pe, sn] : te, { scrollBehavior: "auto" }),
            He.forEach(function (ne) {
              return (
                xl(ne) &&
                ne.target === (ye ? ot.scrollingElement || sn : te) &&
                (ne.smooth = !1)
              );
            }),
            (Jt = xl(U.snapTo)
              ? U.snapTo
              : U.snapTo === "labels"
                ? z3(u)
                : U.snapTo === "labelsDirectional"
                  ? A3(u)
                  : U.directional !== !1
                    ? function (ne, we) {
                        return fm(U.snapTo)(
                          ne,
                          yl() - ie < 500 ? 0 : we.direction,
                        );
                      }
                    : ue.utils.snap(U.snapTo)),
            (pl = U.duration || { min: 0.1, max: 2 }),
            (pl = Ki(pl) ? _s(pl.min, pl.max) : _s(pl, pl)),
            (gl = ue
              .delayedCall(U.delay || vn / 2 || 0.1, function () {
                var ne = ae(),
                  we = yl() - ie < 500,
                  ge = Ze.tween;
                if (
                  (we || Math.abs(N.getVelocity()) < 10) &&
                  !ge &&
                  !Rc &&
                  ee !== ne
                ) {
                  var Se = (ne - Le) / st,
                    Nt = u && !de ? u.totalProgress() : Se,
                    ke = we ? 0 : ((Nt - oa) / (yl() - rs)) * 1e3 || 0,
                    _t = ue.utils.clamp(-Se, 1 - Se, (Xr(ke / 2) * ke) / 0.185),
                    ct = Se + (U.inertia === !1 ? 0 : _t),
                    Oe,
                    je,
                    Ke = U,
                    wl = Ke.onStart,
                    ft = Ke.onInterrupt,
                    El = Ke.onComplete;
                  if (
                    ((Oe = Jt(ct, N)),
                    os(Oe) || (Oe = ct),
                    (je = Math.max(0, Math.round(Le + Oe * st))),
                    ne <= Ie && ne >= Le && je !== ne)
                  ) {
                    if (ge && !ge._initted && ge.data <= Xr(je - ne)) return;
                    (U.inertia === !1 && (_t = Oe - Se),
                      Ze(
                        je,
                        {
                          duration: pl(
                            Xr(
                              (Math.max(Xr(ct - Nt), Xr(Oe - Nt)) * 0.185) /
                                ke /
                                0.05 || 0,
                            ),
                          ),
                          ease: U.ease || "power3",
                          data: Xr(je - ne),
                          onInterrupt: function () {
                            return gl.restart(!0) && ft && ft(N);
                          },
                          onComplete: function () {
                            (N.update(),
                              (ee = ae()),
                              u &&
                                !de &&
                                (Ce
                                  ? Ce.resetTo(
                                      "totalProgress",
                                      Oe,
                                      u._tTime / u._tDur,
                                    )
                                  : u.progress(Oe)),
                              (Jn = oa =
                                u && !de ? u.totalProgress() : N.progress),
                              V && V(N),
                              El && El(N));
                          },
                        },
                        ne,
                        _t * st,
                        je - ne - _t * st,
                      ),
                      wl && wl(N, Ze.tween));
                  }
                } else N.isActive && ee !== ne && gl.restart(!0);
              })
              .pause())),
          m && (kh[m] = N),
          (T = N.trigger = Gl(T || (x !== !0 && x))),
          (Ln = T && T._gsap && T._gsap.stRevert),
          Ln && (Ln = Ln(N)),
          (x = x === !0 ? T : Gl(x)),
          rn(h) && (h = { targets: T, className: h }),
          x &&
            (z === !1 ||
              z === Rn ||
              (z =
                !z &&
                x.parentNode &&
                x.parentNode.style &&
                kn(x.parentNode).display === "flex"
                  ? !1
                  : Vt),
            (N.pin = x),
            (ze = ue.core.getCache(x)),
            ze.spacer
              ? (Yn = ze.pinState)
              : (W &&
                  ((W = Gl(W)),
                  W && !W.nodeType && (W = W.current || W.nativeElement),
                  (ze.spacerIsNative = !!W),
                  W && (ze.spacerState = ic(W))),
                (ze.spacer = Ht = W || ot.createElement("div")),
                Ht.classList.add("pin-spacer"),
                m && Ht.classList.add("pin-spacer-" + m),
                (ze.pinState = Yn = ic(x))),
            i.force3D !== !1 && ue.set(x, { force3D: !0 }),
            (N.spacer = Ht = ze.spacer),
            (Yt = kn(x)),
            (Ti = Yt[z + I.os2]),
            (gt = ue.getProperty(x)),
            (ml = ue.quickSetter(x, I.a, Pt)),
            fh(x, Ht, Yt),
            (jt = ic(x))),
          X)
        ) {
          ((Jl = Ki(X) ? X1(X, V1) : V1),
            (Y = ac("scroller-start", m, te, I, Jl, 0)),
            (hl = ac("scroller-end", m, te, I, Jl, 0, Y)),
            (qn = Y["offset" + I.op.d2]));
          var Ba = Gl(_i(te, "content") || te);
          ((el = this.markerStart = ac("start", m, Ba, I, Jl, qn, 0, D)),
            (il = this.markerEnd = ac("end", m, Ba, I, Jl, qn, 0, D)),
            D && (bn = ue.quickSetter([el, il], I.a, Pt)),
            !ve &&
              !(ua.length && _i(te, "fixedMarkers") === !0) &&
              (E3(ye ? Pe : te),
              ue.set([Y, hl], { force3D: !0 }),
              (Kn = ue.quickSetter(Y, I.a, Pt)),
              (Tl = ue.quickSetter(hl, I.a, Pt))));
        }
        if (D) {
          var Te = D.vars.onUpdate,
            pe = D.vars.onUpdateParams;
          D.eventCallback("onUpdate", function () {
            (N.update(0, 0, 1), Te && Te.apply(D, pe || []));
          });
        }
        if (
          ((N.previous = function () {
            return Re[Re.indexOf(N) - 1];
          }),
          (N.next = function () {
            return Re[Re.indexOf(N) + 1];
          }),
          (N.revert = function (ne, we) {
            if (!we) return N.kill(!0);
            var ge = ne !== !1 || !N.enabled,
              Se = vl;
            ge !== N.isReverted &&
              (ge &&
                ((Ft = Math.max(ae(), N.scroll.rec || 0)),
                (me = N.progress),
                (yn = u && u.progress())),
              el &&
                [el, il, Y, hl].forEach(function (Nt) {
                  return (Nt.style.display = ge ? "none" : "block");
                }),
              ge && ((vl = N), N.update(ge)),
              x &&
                (!Q || !N.isActive) &&
                (ge ? O3(x, Ht, Yn) : fh(x, Ht, kn(x), At)),
              ge || N.update(ge),
              (vl = Se),
              (N.isReverted = ge));
          }),
          (N.refresh = function (ne, we, ge, Se) {
            if (!((vl || !N.enabled) && !we)) {
              if (x && ne && Hn) {
                nl(f, "scrollEnd", Bv);
                return;
              }
              (!Cl && E && E(N),
                (vl = N),
                Ze.tween && !ge && (Ze.tween.kill(), (Ze.tween = 0)),
                Ce && Ce.pause(),
                S &&
                  u &&
                  (u.revert({ kill: !1 }).invalidate(),
                  u.getChildren
                    ? u.getChildren(!0, !0, !1).forEach(function ($n) {
                        return $n.vars.immediateRender && $n.render(0, !0, !0);
                      })
                    : u.vars.immediateRender && u.render(0, !0, !0)),
                N.isReverted || N.revert(!0, !0),
                (N._subPinOffset = !1));
              var Nt = L(),
                ke = P(),
                _t = D ? D.duration() : ra(te, I),
                ct = st <= 0.01 || !st,
                Oe = 0,
                je = Se || 0,
                Ke = Ki(ge) ? ge.end : i.end,
                wl = i.endTrigger || T,
                ft = Ki(ge)
                  ? ge.start
                  : i.start || (i.start === 0 || !T ? 0 : x ? "0 0" : "0 100%"),
                El = (N.pinnedContainer =
                  i.pinnedContainer && Gl(i.pinnedContainer, N)),
                Fl = (T && Math.max(0, Re.indexOf(N))) || 0,
                xt = Fl,
                Dt,
                St,
                kl,
                Fn,
                Tt,
                Ue,
                Wl,
                ur,
                Wn,
                xn,
                Sn,
                Ha,
                wi;
              for (
                X &&
                Ki(ge) &&
                ((Ha = ue.getProperty(Y, I.p)), (wi = ue.getProperty(hl, I.p)));
                xt-- > 0;
              )
                ((Ue = Re[xt]),
                  Ue.end || Ue.refresh(0, 1) || (vl = N),
                  (Wl = Ue.pin),
                  Wl &&
                    (Wl === T || Wl === x || Wl === El) &&
                    !Ue.isReverted &&
                    (xn || (xn = []), xn.unshift(Ue), Ue.revert(!0, !0)),
                  Ue !== Re[xt] && (Fl--, xt--));
              for (
                xl(ft) && (ft = ft(N)),
                  ft = Y1(ft, "start", N),
                  Le =
                    J1(
                      ft,
                      T,
                      Nt,
                      I,
                      ae(),
                      el,
                      Y,
                      N,
                      ke,
                      he,
                      ve,
                      _t,
                      D,
                      N._startClamp && "_startClamp",
                    ) || (x ? -0.001 : 0),
                  xl(Ke) && (Ke = Ke(N)),
                  rn(Ke) &&
                    !Ke.indexOf("+=") &&
                    (~Ke.indexOf(" ")
                      ? (Ke = (rn(ft) ? ft.split(" ")[0] : "") + Ke)
                      : ((Oe = dc(Ke.substr(2), Nt)),
                        (Ke = rn(ft)
                          ? ft
                          : (D
                              ? ue.utils.mapRange(
                                  0,
                                  D.duration(),
                                  D.scrollTrigger.start,
                                  D.scrollTrigger.end,
                                  Le,
                                )
                              : Le) + Oe),
                        (wl = T))),
                  Ke = Y1(Ke, "end", N),
                  Ie =
                    Math.max(
                      Le,
                      J1(
                        Ke || (wl ? "100% 0" : _t),
                        wl,
                        Nt,
                        I,
                        ae() + Oe,
                        il,
                        hl,
                        N,
                        ke,
                        he,
                        ve,
                        _t,
                        D,
                        N._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Oe = 0,
                  xt = Fl;
                xt--;
              )
                ((Ue = Re[xt] || {}),
                  (Wl = Ue.pin),
                  Wl &&
                    Ue.start - Ue._pinPush <= Le &&
                    !D &&
                    Ue.end > 0 &&
                    ((Dt =
                      Ue.end -
                      (N._startClamp ? Math.max(0, Ue.start) : Ue.start)),
                    ((Wl === T && Ue.start - Ue._pinPush < Le) || Wl === El) &&
                      isNaN(ft) &&
                      (Oe += Dt * (1 - Ue.progress)),
                    Wl === x && (je += Dt)));
              if (
                ((Le += Oe),
                (Ie += Oe),
                N._startClamp && (N._startClamp += Oe),
                N._endClamp &&
                  !Cl &&
                  ((N._endClamp = Ie || -0.001),
                  (Ie = Math.min(Ie, ra(te, I)))),
                (st = Ie - Le || ((Le -= 0.01) && 0.001)),
                ct &&
                  (me = ue.utils.clamp(0, 1, ue.utils.normalize(Le, Ie, Ft))),
                (N._pinPush = je),
                el &&
                  Oe &&
                  ((Dt = {}),
                  (Dt[I.a] = "+=" + Oe),
                  El && (Dt[I.p] = "-=" + ae()),
                  ue.set([el, il], Dt)),
                x && !(Rh && N.end >= ra(te, I)))
              )
                ((Dt = kn(x)),
                  (Fn = I === It),
                  (kl = ae()),
                  (Rl = parseFloat(gt(I.a)) + je),
                  !_t &&
                    Ie > 1 &&
                    ((Sn = (ye ? ot.scrollingElement || sn : te).style),
                    (Sn = {
                      style: Sn,
                      value: Sn["overflow" + I.a.toUpperCase()],
                    }),
                    ye &&
                      kn(Pe)["overflow" + I.a.toUpperCase()] !== "scroll" &&
                      (Sn.style["overflow" + I.a.toUpperCase()] = "scroll")),
                  fh(x, Ht, Dt),
                  (jt = ic(x)),
                  (St = Ca(x, !0)),
                  (ur = ve && xi(te, Fn ? Dl : It)()),
                  z
                    ? ((At = [z + I.os2, st + je + Pt]),
                      (At.t = Ht),
                      (xt = z === Vt ? Mc(x, I) + st + je : 0),
                      xt &&
                        (At.push(I.d, xt + Pt),
                        Ht.style.flexBasis !== "auto" &&
                          (Ht.style.flexBasis = xt + Pt)),
                      tu(At),
                      El &&
                        Re.forEach(function ($n) {
                          $n.pin === El &&
                            $n.vars.pinSpacing !== !1 &&
                            ($n._subPinOffset = !0);
                        }),
                      ve && ae(Ft))
                    : ((xt = Mc(x, I)),
                      xt &&
                        Ht.style.flexBasis !== "auto" &&
                        (Ht.style.flexBasis = xt + Pt)),
                  ve &&
                    ((Tt = {
                      top: St.top + (Fn ? kl - Le : ur) + Pt,
                      left: St.left + (Fn ? ur : kl - Le) + Pt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Tt[er] = Tt["max" + su] = Math.ceil(St.width) + Pt),
                    (Tt[tr] = Tt["max" + cm] = Math.ceil(St.height) + Pt),
                    (Tt[Rn] =
                      Tt[Rn + xs] =
                      Tt[Rn + ys] =
                      Tt[Rn + Ss] =
                      Tt[Rn + bs] =
                        "0"),
                    (Tt[Vt] = Dt[Vt]),
                    (Tt[Vt + xs] = Dt[Vt + xs]),
                    (Tt[Vt + ys] = Dt[Vt + ys]),
                    (Tt[Vt + Ss] = Dt[Vt + Ss]),
                    (Tt[Vt + bs] = Dt[Vt + bs]),
                    (Zn = j3(Yn, Tt, Q)),
                    Cl && ae(0)),
                  u
                    ? ((Wn = u._initted),
                      rh(1),
                      u.render(u.duration(), !0, !0),
                      (_n = gt(I.a) - Rl + st + je),
                      (bt = Math.abs(st - _n) > 1),
                      ve && bt && Zn.splice(Zn.length - 2, 2),
                      u.render(0, !0, !0),
                      Wn || u.invalidate(!0),
                      u.parent || u.totalTime(u.totalTime()),
                      rh(0))
                    : (_n = st),
                  Sn &&
                    (Sn.value
                      ? (Sn.style["overflow" + I.a.toUpperCase()] = Sn.value)
                      : Sn.style.removeProperty("overflow-" + I.a)));
              else if (T && ae() && !D)
                for (St = T.parentNode; St && St !== Pe; )
                  (St._pinOffset &&
                    ((Le -= St._pinOffset), (Ie -= St._pinOffset)),
                    (St = St.parentNode));
              (xn &&
                xn.forEach(function ($n) {
                  return $n.revert(!1, !0);
                }),
                (N.start = Le),
                (N.end = Ie),
                (mt = pt = Cl ? Ft : ae()),
                !D && !Cl && (mt < Ft && ae(Ft), (N.scroll.rec = 0)),
                N.revert(!1, !0),
                (ie = yl()),
                gl && ((ee = -1), gl.restart(!0)),
                (vl = 0),
                u &&
                  de &&
                  (u._initted || yn) &&
                  u.progress() !== yn &&
                  u.progress(yn || 0, !0).render(u.time(), !0, !0),
                (ct || me !== N.progress || D || S || (u && !u._initted)) &&
                  (u &&
                    !de &&
                    (u._initted || me || u.vars.immediateRender !== !1) &&
                    u.totalProgress(
                      D && Le < -0.001 && !me
                        ? ue.utils.normalize(Le, Ie, 0)
                        : me,
                      !0,
                    ),
                  (N.progress = ct || (mt - Le) / st === me ? 0 : me)),
                x && z && (Ht._pinOffset = Math.round(N.progress * _n)),
                Ce && Ce.invalidate(),
                isNaN(Ha) ||
                  ((Ha -= ue.getProperty(Y, I.p)),
                  (wi -= ue.getProperty(hl, I.p)),
                  rc(Y, I, Ha),
                  rc(el, I, Ha - (Se || 0)),
                  rc(hl, I, wi),
                  rc(il, I, wi - (Se || 0))),
                ct && !Cl && N.update(),
                _ && !Cl && !gn && ((gn = !0), _(N), (gn = !1)));
            }
          }),
          (N.getVelocity = function () {
            return ((ae() - pt) / (yl() - rs)) * 1e3 || 0;
          }),
          (N.endAnimation = function () {
            (ns(N.callbackAnimation),
              u &&
                (Ce
                  ? Ce.progress(1)
                  : u.paused()
                    ? de || ns(u, N.direction < 0, 1)
                    : ns(u, u.reversed())));
          }),
          (N.labelToScroll = function (ne) {
            return (
              (u &&
                u.labels &&
                (Le || N.refresh() || Le) +
                  (u.labels[ne] / u.duration()) * st) ||
              0
            );
          }),
          (N.getTrailing = function (ne) {
            var we = Re.indexOf(N),
              ge =
                N.direction > 0 ? Re.slice(0, we).reverse() : Re.slice(we + 1);
            return (
              rn(ne)
                ? ge.filter(function (Se) {
                    return Se.vars.preventOverlaps === ne;
                  })
                : ge
            ).filter(function (Se) {
              return N.direction > 0 ? Se.end <= Le : Se.start >= Ie;
            });
          }),
          (N.update = function (ne, we, ge) {
            if (!(D && !ge && !ne)) {
              var Se = Cl === !0 ? Ft : N.scroll(),
                Nt = ne ? 0 : (Se - Le) / st,
                ke = Nt < 0 ? 0 : Nt > 1 ? 1 : Nt || 0,
                _t = N.progress,
                ct,
                Oe,
                je,
                Ke,
                wl,
                ft,
                El,
                Fl;
              if (
                (we &&
                  ((pt = mt),
                  (mt = D ? ae() : Se),
                  U && ((oa = Jn), (Jn = u && !de ? u.totalProgress() : ke))),
                M &&
                  x &&
                  !vl &&
                  !Io &&
                  Hn &&
                  (!ke && Le < Se + ((Se - pt) / (yl() - rs)) * M
                    ? (ke = 1e-4)
                    : ke === 1 &&
                      Ie > Se + ((Se - pt) / (yl() - rs)) * M &&
                      (ke = 0.9999)),
                ke !== _t && N.enabled)
              ) {
                if (
                  ((ct = N.isActive = !!ke && ke < 1),
                  (Oe = !!_t && _t < 1),
                  (ft = ct !== Oe),
                  (wl = ft || !!ke != !!_t),
                  (N.direction = ke > _t ? 1 : -1),
                  (N.progress = ke),
                  wl &&
                    !vl &&
                    ((je = ke && !_t ? 0 : ke === 1 ? 1 : _t === 1 ? 2 : 3),
                    de &&
                      ((Ke =
                        (!ft && G[je + 1] !== "none" && G[je + 1]) || G[je]),
                      (Fl =
                        u &&
                        (Ke === "complete" || Ke === "reset" || Ke in u)))),
                  J &&
                    (ft || Fl) &&
                    (Fl || b || !u) &&
                    (xl(J)
                      ? J(N)
                      : N.getTrailing(J).forEach(function (kl) {
                          return kl.endAnimation();
                        })),
                  de ||
                    (Ce && !vl && !Io
                      ? (Ce._dp._time - Ce._start !== Ce._time &&
                          Ce.render(Ce._dp._time - Ce._start),
                        Ce.resetTo
                          ? Ce.resetTo("totalProgress", ke, u._tTime / u._tDur)
                          : ((Ce.vars.totalProgress = ke),
                            Ce.invalidate().restart()))
                      : u && u.totalProgress(ke, !!(vl && (ie || ne)))),
                  x)
                ) {
                  if ((ne && z && (Ht.style[z + I.os2] = Ti), !ve))
                    ml(ss(Rl + _n * ke));
                  else if (wl) {
                    if (
                      ((El =
                        !ne && ke > _t && Ie + 1 > Se && Se + 1 >= ra(te, I)),
                      Q)
                    )
                      if (!ne && (ct || El)) {
                        var xt = Ca(x, !0),
                          Dt = Se - Le;
                        F1(
                          x,
                          Pe,
                          xt.top + (I === It ? Dt : 0) + Pt,
                          xt.left + (I === It ? 0 : Dt) + Pt,
                        );
                      } else F1(x, Ht);
                    (tu(ct || El ? Zn : jt),
                      (bt && ke < 1 && ct) ||
                        ml(Rl + (ke === 1 && !El ? _n : 0)));
                  }
                }
                (U && !Ze.tween && !vl && !Io && gl.restart(!0),
                  h &&
                    (ft || (K && ke && (ke < 1 || !uh))) &&
                    Cs(h.targets).forEach(function (kl) {
                      return kl.classList[ct || K ? "add" : "remove"](
                        h.className,
                      );
                    }),
                  d && !de && !ne && d(N),
                  wl && !vl
                    ? (de &&
                        (Fl &&
                          (Ke === "complete"
                            ? u.pause().totalProgress(1)
                            : Ke === "reset"
                              ? u.restart(!0).pause()
                              : Ke === "restart"
                                ? u.restart(!0)
                                : u[Ke]()),
                        d && d(N)),
                      (ft || !uh) &&
                        (p && ft && oh(N, p),
                        C[je] && oh(N, C[je]),
                        K && (ke === 1 ? N.kill(!1, 1) : (C[je] = 0)),
                        ft || ((je = ke === 1 ? 1 : 3), C[je] && oh(N, C[je]))),
                      B &&
                        !ct &&
                        Math.abs(N.getVelocity()) > (os(B) ? B : 2500) &&
                        (ns(N.callbackAnimation),
                        Ce
                          ? Ce.progress(1)
                          : ns(u, Ke === "reverse" ? 1 : !ke, 1)))
                    : de && d && !vl && d(N));
              }
              if (Tl) {
                var St = D ? (Se / D.duration()) * (D._caScrollDist || 0) : Se;
                (Kn(St + (Y._isFlipped ? 1 : 0)), Tl(St));
              }
              bn && bn((-Se / D.duration()) * (D._caScrollDist || 0));
            }
          }),
          (N.enable = function (ne, we) {
            N.enabled ||
              ((N.enabled = !0),
              nl(te, "resize", cs),
              ye || nl(te, "scroll", Vr),
              E && nl(f, "refreshInit", E),
              ne !== !1 && ((N.progress = me = 0), (mt = pt = ee = ae())),
              we !== !1 && N.refresh());
          }),
          (N.getTween = function (ne) {
            return ne && Ze ? Ze.tween : Ce;
          }),
          (N.setPositions = function (ne, we, ge, Se) {
            if (D) {
              var Nt = D.scrollTrigger,
                ke = D.duration(),
                _t = Nt.end - Nt.start;
              ((ne = Nt.start + (_t * ne) / ke),
                (we = Nt.start + (_t * we) / ke));
            }
            (N.refresh(
              !1,
              !1,
              {
                start: q1(ne, ge && !!N._startClamp),
                end: q1(we, ge && !!N._endClamp),
              },
              Se,
            ),
              N.update());
          }),
          (N.adjustPinSpacing = function (ne) {
            if (At && ne) {
              var we = At.indexOf(I.d) + 1;
              ((At[we] = parseFloat(At[we]) + ne + Pt),
                (At[1] = parseFloat(At[1]) + ne + Pt),
                tu(At));
            }
          }),
          (N.disable = function (ne, we) {
            if (
              (ne !== !1 && N.revert(!0, !0),
              N.enabled &&
                ((N.enabled = N.isActive = !1),
                we || (Ce && Ce.pause()),
                (Ft = 0),
                ze && (ze.uncache = 1),
                E && ll(f, "refreshInit", E),
                gl &&
                  (gl.pause(), Ze.tween && Ze.tween.kill() && (Ze.tween = 0)),
                !ye))
            ) {
              for (var ge = Re.length; ge--; )
                if (Re[ge].scroller === te && Re[ge] !== N) return;
              (ll(te, "resize", cs), ye || ll(te, "scroll", Vr));
            }
          }),
          (N.kill = function (ne, we) {
            (N.disable(ne, we), Ce && !we && Ce.kill(), m && delete kh[m]);
            var ge = Re.indexOf(N);
            (ge >= 0 && Re.splice(ge, 1),
              ge === Ol && mc > 0 && Ol--,
              (ge = 0),
              Re.forEach(function (Se) {
                return Se.scroller === N.scroller && (ge = 1);
              }),
              ge || Cl || (N.scroll.rec = 0),
              u &&
                ((u.scrollTrigger = null),
                ne && u.revert({ kill: !1 }),
                we || u.kill()),
              el &&
                [el, il, Y, hl].forEach(function (Se) {
                  return Se.parentNode && Se.parentNode.removeChild(Se);
                }),
              Ts === N && (Ts = 0),
              x &&
                (ze && (ze.uncache = 1),
                (ge = 0),
                Re.forEach(function (Se) {
                  return Se.pin === x && ge++;
                }),
                ge || (ze.spacer = 0)),
              i.onKill && i.onKill(N));
          }),
          Re.push(N),
          N.enable(!1, !1),
          Ln && Ln(N),
          u && u.add && !st)
        ) {
          var Je = N.update;
          ((N.update = function () {
            ((N.update = Je), He.cache++, Le || Ie || N.refresh());
          }),
            ue.delayedCall(0.01, N.update),
            (st = 0.01),
            (Le = Ie = 0));
        } else N.refresh();
        x && M3();
      }),
      (f.register = function (i) {
        return (
          Qr ||
            ((ue = i || Cv()),
            Ov() && window.document && f.enable(),
            (Qr = us)),
          Qr
        );
      }),
      (f.defaults = function (i) {
        if (i) for (var u in i) nc[u] = i[u];
        return nc;
      }),
      (f.disable = function (i, u) {
        ((us = 0),
          Re.forEach(function (d) {
            return d[u ? "kill" : "disable"](i);
          }),
          ll(Be, "wheel", Vr),
          ll(ot, "scroll", Vr),
          clearInterval(Po),
          ll(ot, "touchcancel", na),
          ll(Pe, "touchstart", na),
          tc(ll, ot, "pointerdown,touchstart,mousedown", L1),
          tc(ll, ot, "pointerup,touchend,mouseup", G1),
          Nc.kill(),
          ec(ll));
        for (var o = 0; o < He.length; o += 3)
          (lc(ll, He[o], He[o + 1]), lc(ll, He[o], He[o + 2]));
      }),
      (f.enable = function () {
        if (
          ((Be = window),
          (ot = document),
          (sn = ot.documentElement),
          (Pe = ot.body),
          ue &&
            ((Cs = ue.utils.toArray),
            (_s = ue.utils.clamp),
            (Dh = ue.core.context || na),
            (rh = ue.core.suppressOverwrites || na),
            (rm = Be.history.scrollRestoration || "auto"),
            (Uh = Be.pageYOffset || 0),
            ue.core.globals("ScrollTrigger", f),
            Pe))
        ) {
          ((us = 1),
            (eu = document.createElement("div")),
            (eu.style.height = "100vh"),
            (eu.style.position = "absolute"),
            Lv(),
            S3(),
            Bt.register(ue),
            (f.isTouch = Bt.isTouch),
            (oi =
              Bt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (jh = Bt.isTouch === 1),
            nl(Be, "wheel", Vr),
            (im = [Be, ot, sn, Pe]),
            ue.matchMedia
              ? ((f.matchMedia = function (p) {
                  var _ = ue.matchMedia(),
                    b;
                  for (b in p) _.add(b, p[b]);
                  return _;
                }),
                ue.addEventListener("matchMediaInit", function () {
                  (Yv(), dm());
                }),
                ue.addEventListener("matchMediaRevert", function () {
                  return Hv();
                }),
                ue.addEventListener("matchMedia", function () {
                  (Fi(0, 1), ir("matchMedia"));
                }),
                ue.matchMedia().add("(orientation: portrait)", function () {
                  return (ch(), ch);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            ch(),
            nl(ot, "scroll", Vr));
          var i = Pe.hasAttribute("style"),
            u = Pe.style,
            o = u.borderTopStyle,
            d = ue.core.Animation.prototype,
            h,
            m;
          for (
            d.revert ||
              Object.defineProperty(d, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              u.borderTopStyle = "solid",
              h = Ca(Pe),
              It.m = Math.round(h.top + It.sc()) || 0,
              Dl.m = Math.round(h.left + Dl.sc()) || 0,
              o ? (u.borderTopStyle = o) : u.removeProperty("border-top-style"),
              i || (Pe.setAttribute("style", ""), Pe.removeAttribute("style")),
              Po = setInterval(Q1, 250),
              ue.delayedCall(0.5, function () {
                return (Io = 0);
              }),
              nl(ot, "touchcancel", na),
              nl(Pe, "touchstart", na),
              tc(nl, ot, "pointerdown,touchstart,mousedown", L1),
              tc(nl, ot, "pointerup,touchend,mouseup", G1),
              Ch = ue.utils.checkPrefix("transform"),
              pc.push(Ch),
              Qr = yl(),
              Nc = ue.delayedCall(0.2, Fi).pause(),
              Zr = [
                ot,
                "visibilitychange",
                function () {
                  var p = Be.innerWidth,
                    _ = Be.innerHeight;
                  ot.hidden
                    ? ((B1 = p), (H1 = _))
                    : (B1 !== p || H1 !== _) && cs();
                },
                ot,
                "DOMContentLoaded",
                Fi,
                Be,
                "load",
                Fi,
                Be,
                "resize",
                cs,
              ],
              ec(nl),
              Re.forEach(function (p) {
                return p.enable(0, 1);
              }),
              m = 0;
            m < He.length;
            m += 3
          )
            (lc(ll, He[m], He[m + 1]), lc(ll, He[m], He[m + 2]));
        }
      }),
      (f.config = function (i) {
        "limitCallbacks" in i && (uh = !!i.limitCallbacks);
        var u = i.syncInterval;
        ((u && clearInterval(Po)) || ((Po = u) && setInterval(Q1, u)),
          "ignoreMobileResize" in i &&
            (jh = f.isTouch === 1 && i.ignoreMobileResize),
          "autoRefreshEvents" in i &&
            (ec(ll) || ec(nl, i.autoRefreshEvents || "none"),
            (Av = (i.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (f.scrollerProxy = function (i, u) {
        var o = Gl(i),
          d = He.indexOf(o),
          h = nr(o);
        (~d && He.splice(d, h ? 6 : 2),
          u && (h ? ua.unshift(Be, u, Pe, u, sn, u) : ua.unshift(o, u)));
      }),
      (f.clearMatchMedia = function (i) {
        Re.forEach(function (u) {
          return u._ctx && u._ctx.query === i && u._ctx.kill(!0, !0);
        });
      }),
      (f.isInViewport = function (i, u, o) {
        var d = (rn(i) ? Gl(i) : i).getBoundingClientRect(),
          h = d[o ? er : tr] * u || 0;
        return o
          ? d.right - h > 0 && d.left + h < Be.innerWidth
          : d.bottom - h > 0 && d.top + h < Be.innerHeight;
      }),
      (f.positionInViewport = function (i, u, o) {
        rn(i) && (i = Gl(i));
        var d = i.getBoundingClientRect(),
          h = d[o ? er : tr],
          m =
            u == null
              ? h / 2
              : u in Oc
                ? Oc[u] * h
                : ~u.indexOf("%")
                  ? (parseFloat(u) * h) / 100
                  : parseFloat(u) || 0;
        return o ? (d.left + m) / Be.innerWidth : (d.top + m) / Be.innerHeight;
      }),
      (f.killAll = function (i) {
        if (
          (Re.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          i !== !0)
        ) {
          var u = ar.killAll || [];
          ((ar = {}),
            u.forEach(function (o) {
              return o();
            }));
        }
      }),
      f
    );
  })();
ce.version = "3.14.2";
ce.saveStyles = function (f) {
  return f
    ? Cs(f).forEach(function (n) {
        if (n && n.style) {
          var r = an.indexOf(n);
          (r >= 0 && an.splice(r, 5),
            an.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ue.core.getCache(n),
              Dh(),
            ));
        }
      })
    : an;
};
ce.revert = function (f, n) {
  return dm(!f, n);
};
ce.create = function (f, n) {
  return new ce(f, n);
};
ce.refresh = function (f) {
  return f ? cs(!0) : (Qr || ce.register()) && Fi(!0);
};
ce.update = function (f) {
  return ++He.cache && Ra(f === !0 ? 2 : 0);
};
ce.clearScrollMemory = qv;
ce.maxScroll = function (f, n) {
  return ra(f, n ? Dl : It);
};
ce.getScrollFunc = function (f, n) {
  return xi(Gl(f), n ? Dl : It);
};
ce.getById = function (f) {
  return kh[f];
};
ce.getAll = function () {
  return Re.filter(function (f) {
    return f.vars.id !== "ScrollSmoother";
  });
};
ce.isScrolling = function () {
  return !!Hn;
};
ce.snapDirectional = fm;
ce.addEventListener = function (f, n) {
  var r = ar[f] || (ar[f] = []);
  ~r.indexOf(n) || r.push(n);
};
ce.removeEventListener = function (f, n) {
  var r = ar[f],
    i = r && r.indexOf(n);
  i >= 0 && r.splice(i, 1);
};
ce.batch = function (f, n) {
  var r = [],
    i = {},
    u = n.interval || 0.016,
    o = n.batchMax || 1e9,
    d = function (p, _) {
      var b = [],
        T = [],
        x = ue
          .delayedCall(u, function () {
            (_(b, T), (b = []), (T = []));
          })
          .pause();
      return function (z) {
        (b.length || x.restart(!0),
          b.push(z.trigger),
          T.push(z),
          o <= b.length && x.progress(1));
      };
    },
    h;
  for (h in n)
    i[h] =
      h.substr(0, 2) === "on" && xl(n[h]) && h !== "onRefreshInit"
        ? d(h, n[h])
        : n[h];
  return (
    xl(o) &&
      ((o = o()),
      nl(ce, "refresh", function () {
        return (o = n.batchMax());
      })),
    Cs(f).forEach(function (m) {
      var p = {};
      for (h in i) p[h] = i[h];
      ((p.trigger = m), r.push(ce.create(p)));
    }),
    r
  );
};
var $1 = function (n, r, i, u) {
    return (
      r > u ? n(u) : r < 0 && n(0),
      i > u ? (u - r) / (i - r) : i < 0 ? r / (r - i) : 1
    );
  },
  dh = function f(n, r) {
    (r === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          r === !0
            ? "auto"
            : r
              ? "pan-" + r + (Bt.isTouch ? " pinch-zoom" : "")
              : "none"),
      n === sn && f(Pe, r));
  },
  uc = { auto: 1, scroll: 1 },
  R3 = function (n) {
    var r = n.event,
      i = n.target,
      u = n.axis,
      o = (r.changedTouches ? r.changedTouches[0] : r).target,
      d = o._gsap || ue.core.getCache(o),
      h = yl(),
      m;
    if (!d._isScrollT || h - d._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== Pe &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(uc[(m = kn(o)).overflowY] || uc[m.overflowX]));
      )
        o = o.parentNode;
      ((d._isScroll =
        o &&
        o !== i &&
        !nr(o) &&
        (uc[(m = kn(o)).overflowY] || uc[m.overflowX])),
        (d._isScrollT = h));
    }
    (d._isScroll || u === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Xv = function (n, r, i, u) {
    return Bt.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (u = u && R3),
      onPress: u,
      onDrag: u,
      onScroll: u,
      onEnable: function () {
        return i && nl(ot, Bt.eventTypes[0], I1, !1, !0);
      },
      onDisable: function () {
        return ll(ot, Bt.eventTypes[0], I1, !0);
      },
    });
  },
  k3 = /(input|label|select|textarea)/i,
  P1,
  I1 = function (n) {
    var r = k3.test(n.target.tagName);
    (r || P1) && ((n._gsapAllow = !0), (P1 = r));
  },
  U3 = function (n) {
    (Ki(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer"));
    var r = n,
      i = r.normalizeScrollX,
      u = r.momentum,
      o = r.allowNestedScroll,
      d = r.onRelease,
      h,
      m,
      p = Gl(n.target) || sn,
      _ = ue.core.globals().ScrollSmoother,
      b = _ && _.get(),
      T =
        oi &&
        ((n.content && Gl(n.content)) ||
          (b && n.content !== !1 && !b.smooth() && b.content())),
      x = xi(p, It),
      z = xi(p, Dl),
      S = 1,
      M =
        (Bt.isTouch && Be.visualViewport
          ? Be.visualViewport.scale * Be.visualViewport.width
          : Be.outerWidth) / Be.innerWidth,
      q = 0,
      V = xl(u)
        ? function () {
            return u(h);
          }
        : function () {
            return u || 2.8;
          },
      K,
      U,
      Q = Xv(p, n.type, !0, o),
      W = function () {
        return (U = !1);
      },
      D = na,
      B = na,
      J = function () {
        ((m = ra(p, It)),
          (B = _s(oi ? 1 : 0, m)),
          i && (D = _s(0, ra(p, Dl))),
          (K = lr));
      },
      I = function () {
        ((T._gsap.y = ss(parseFloat(T._gsap.y) + x.offset) + "px"),
          (T.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(T._gsap.y) +
            ", 0, 1)"),
          (x.offset = x.cacheID = 0));
      },
      de = function () {
        if (U) {
          requestAnimationFrame(W);
          var X = ss(h.deltaY / 2),
            he = B(x.v - X);
          if (T && he !== x.v + x.offset) {
            x.offset = he - x.v;
            var N = ss((parseFloat(T && T._gsap.y) || 0) - x.offset);
            ((T.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              N +
              ", 0, 1)"),
              (T._gsap.y = N + "px"),
              (x.cacheID = He.cache),
              Ra());
          }
          return !0;
        }
        (x.offset && I(), (U = !0));
      },
      te,
      xe,
      ye,
      ve,
      C = function () {
        (J(),
          te.isActive() &&
            te.vars.scrollY > m &&
            (x() > m ? te.progress(1) && x(m) : te.resetTo("scrollY", m)));
      };
    return (
      T && ue.set(T, { y: "+=0" }),
      (n.ignoreCheck = function (G) {
        return (
          (oi && G.type === "touchmove" && de()) ||
          (S > 1.05 && G.type !== "touchstart") ||
          h.isGesturing ||
          (G.touches && G.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        U = !1;
        var G = S;
        ((S = ss(((Be.visualViewport && Be.visualViewport.scale) || 1) / M)),
          te.pause(),
          G !== S && dh(p, S > 1.01 ? !0 : i ? !1 : "x"),
          (xe = z()),
          (ye = x()),
          J(),
          (K = lr));
      }),
      (n.onRelease = n.onGestureStart =
        function (G, X) {
          if ((x.offset && I(), !X)) ve.restart(!0);
          else {
            He.cache++;
            var he = V(),
              N,
              E;
            (i &&
              ((N = z()),
              (E = N + (he * 0.05 * -G.velocityX) / 0.227),
              (he *= $1(z, N, E, ra(p, Dl))),
              (te.vars.scrollX = D(E))),
              (N = x()),
              (E = N + (he * 0.05 * -G.velocityY) / 0.227),
              (he *= $1(x, N, E, ra(p, It))),
              (te.vars.scrollY = B(E)),
              te.invalidate().duration(he).play(0.01),
              ((oi && te.vars.scrollY >= m) || N >= m - 1) &&
                ue.to({}, { onUpdate: C, duration: he }));
          }
          d && d(G);
        }),
      (n.onWheel = function () {
        (te._ts && te.pause(), yl() - q > 1e3 && ((K = 0), (q = yl())));
      }),
      (n.onChange = function (G, X, he, N, E) {
        if (
          (lr !== K && J(),
          X && i && z(D(N[2] === X ? xe + (G.startX - G.x) : z() + X - N[1])),
          he)
        ) {
          x.offset && I();
          var L = E[2] === he,
            P = L ? ye + G.startY - G.y : x() + he - E[1],
            ee = B(P);
          (L && P !== ee && (ye += ee - P), x(ee));
        }
        (he || X) && Ra();
      }),
      (n.onEnable = function () {
        (dh(p, i ? !1 : "x"),
          ce.addEventListener("refresh", C),
          nl(Be, "resize", C),
          x.smooth &&
            ((x.target.style.scrollBehavior = "auto"),
            (x.smooth = z.smooth = !1)),
          Q.enable());
      }),
      (n.onDisable = function () {
        (dh(p, !0),
          ll(Be, "resize", C),
          ce.removeEventListener("refresh", C),
          Q.kill());
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (h = new Bt(n)),
      (h.iOS = oi),
      oi && !x() && x(1),
      oi && ue.ticker.add(na),
      (ve = h._dc),
      (te = ue.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Gv(x, x(), function () {
            return te.pause();
          }),
        },
        onUpdate: Ra,
        onComplete: ve.vars.onComplete,
      })),
      h
    );
  };
ce.sort = function (f) {
  if (xl(f)) return Re.sort(f);
  var n = Be.pageYOffset || 0;
  return (
    ce.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? n + r.trigger.getBoundingClientRect().top
        : r.start + Be.innerHeight);
    }),
    Re.sort(
      f ||
        function (r, i) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((i.vars.containerAnimation ? 1e6 : i._sortY) +
              (i.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
ce.observe = function (f) {
  return new Bt(f);
};
ce.normalizeScroll = function (f) {
  if (typeof f > "u") return Ml;
  if (f === !0 && Ml) return Ml.enable();
  if (f === !1) {
    (Ml && Ml.kill(), (Ml = f));
    return;
  }
  var n = f instanceof Bt ? f : U3(f);
  return (
    Ml && Ml.target === n.target && Ml.kill(),
    nr(n.target) && (Ml = n),
    n
  );
};
ce.core = {
  _getVelocityProp: Oh,
  _inputObserver: Xv,
  _scrollers: He,
  _proxies: ua,
  bridge: {
    ss: function () {
      (Hn || ir("scrollStart"), (Hn = yl()));
    },
    ref: function () {
      return vl;
    },
  },
};
Cv() && ue.registerPlugin(ce);
Me.registerPlugin(ce);
function B3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null);
  return (
    le.useEffect(() => {
      const i = [],
        u = Me.context(() => {
          const o = ce.create({
            trigger: n.current,
            start: "top 80%",
            onEnter: () => {
              Me.fromTo(
                n.current,
                { clipPath: "inset(0 100% 0 0)" },
                {
                  clipPath: "inset(0 0% 0 0)",
                  duration: 1,
                  ease: "power3.out",
                },
              );
            },
            once: !0,
          });
          i.push(o);
          const d = ce.create({
            trigger: r.current,
            start: "top 75%",
            onEnter: () => {
              const m = r.current?.querySelectorAll(".animate-item");
              m &&
                m.length > 0 &&
                Me.fromTo(
                  m,
                  { y: 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                  },
                );
            },
            once: !0,
          });
          i.push(d);
          const h = ce.create({
            trigger: f.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (m) => {
              n.current &&
                Me.to(n.current?.querySelector("img"), {
                  y: m.progress * 50 - 25,
                  duration: 0.1,
                });
            },
          });
          i.push(h);
        }, f);
      return () => {
        (i.forEach((o) => o.kill()), u.revert());
      };
    }, []),
    y.jsxs("section", {
      id: "about",
      ref: f,
      className: "relative w-full py-20 lg:py-32 bg-cream overflow-hidden",
      children: [
        y.jsx("div", {
          className:
            "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",
          children: y.jsx("span", {
            className:
              "font-serif text-[20rem] lg:text-[30rem] text-light-rose/30 whitespace-nowrap select-none",
            children: "Rose",
          }),
        }),
        y.jsx("div", {
          className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
          children: y.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            children: [
              y.jsxs("div", {
                ref: n,
                className:
                  "relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl shadow-soft",
                style: { clipPath: "inset(0 100% 0 0)" },
                children: [
                  y.jsx("img", {
                    src: Zt("about-bouquet.jpg"),
                    alt: "Hand holding a beautiful bouquet of pastel roses",
                    className: "w-full h-full object-cover",
                  }),
                  y.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-t from-cream/10 to-transparent",
                  }),
                ],
              }),
              y.jsxs("div", {
                ref: r,
                className: "lg:pl-8",
                children: [
                  y.jsx("span", {
                    className:
                      "animate-item text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                    children: "Our Story",
                  }),
                  y.jsxs("h2", {
                    className:
                      "animate-item font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6",
                    children: [
                      "Where Romance",
                      y.jsx("br", {}),
                      y.jsx("span", {
                        className: "text-coral",
                        children: "Meets Nature",
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "space-y-4 mb-8",
                    children: [
                      y.jsx("p", {
                        className:
                          "animate-item text-muted-taupe text-lg leading-relaxed",
                        children:
                          "Born and raised in the heart of Odisha, India, I grew up surrounded by the vibrant marigolds of temple garlands, the fragrant rajnigandha at evening pujas, and the wild jasmine that bloomed in our backyard. Flowers have always been woven into my life — from the colourful Rath Yatra celebrations in Puri to the delicate floral rangolis my mother would create at dawn.",
                      }),
                      y.jsx("p", {
                        className:
                          "animate-item text-muted-taupe text-lg leading-relaxed",
                        children:
                          "Velvet Rose was born from that deep, lifelong love for flowers. What started as a childhood fascination blossomed into a mission — to bring the finest, hand-curated floral arrangements to every doorstep across India. We blend the rich floral heritage of Odisha with modern aesthetics, crafting bouquets that carry warmth, tradition, and a touch of magic in every petal.",
                      }),
                    ],
                  }),
                  y.jsxs(cl, {
                    variant: "outline",
                    size: "lg",
                    className:
                      "animate-item border-coral text-coral hover:bg-coral hover:text-white rounded-full px-8 py-6 transition-all duration-300 group",
                    children: [
                      "Learn More About Us",
                      y.jsx(Da, {
                        className:
                          "ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const H3 = [
    {
      id: "roses",
      name: "Roses",
      image: Zt("category-roses.jpg"),
      description: "Timeless symbols of love and passion",
    },
    {
      id: "peonies",
      name: "Peonies",
      image: Zt("category-peonies.jpg"),
      description: "Lush blooms of romance and prosperity",
    },
    {
      id: "tulips",
      name: "Tulips",
      image: Zt("category-tulips.jpg"),
      description: "Cheerful harbingers of spring",
    },
    {
      id: "ranunculus",
      name: "Ranunculus",
      image: Zt("category-ranunculus.jpg"),
      description: "Delicate layers of ethereal beauty",
    },
  ],
  Y3 = [
    {
      id: "white-rose-elegance",
      name: "White Rose Elegance",
      price: 1099,
      image: Zt("product-white-roses.jpg"),
      category: "roses",
      description:
        "A pristine bouquet of pure white roses, symbolizing innocence and grace.",
    },
    {
      id: "blush-peony-dream",
      name: "Blush Peony Dream",
      price: 999,
      image: Zt("product-pink-peonies.jpg"),
      category: "peonies",
      description:
        "Luxurious pink peonies that embody romance and feminine elegance.",
    },
    {
      id: "coral-rose-garden",
      name: "Coral Rose Garden",
      price: 949,
      image: Zt("product-coral-roses.jpg"),
      category: "roses",
      description:
        "Warm coral garden roses that bring sunshine and joy to any room.",
    },
    {
      id: "wildflower-meadow",
      name: "Wildflower Meadow",
      price: 849,
      image: Zt("product-wildflowers.jpg"),
      category: "mixed",
      description:
        "A whimsical arrangement of seasonal wildflowers in soft hues.",
    },
    {
      id: "single-stem-rose",
      name: "Single Stem Rose",
      price: 299,
      image: Zt("product-single-rose.jpg"),
      category: "roses",
      description:
        "One perfect garden rose, a simple gesture of love and appreciation.",
    },
    {
      id: "bridal-white-collection",
      name: "Bridal White Collection",
      price: 1999,
      image: Zt("product-bridal.jpg"),
      category: "arrangements",
      description:
        "An exquisite bridal bouquet featuring white roses, peonies, and eucalyptus.",
    },
  ],
  q3 = [
    {
      id: "1",
      name: "Priya Mohanty",
      avatar: Zt("customer-1.jpg"),
      text: "Velvet Rose made my wedding mandap look absolutely divine! The marigold and rose arrangements were breathtaking — every guest kept asking where we got the flowers. Truly the best florist in Odisha.",
      rating: 5,
    },
    {
      id: "2",
      name: "Ananya Sharma",
      avatar: Zt("customer-2.jpg"),
      text: "I order from Velvet Rose for every festival — Diwali, Durga Puja, Holi — and they never disappoint. The flowers arrive fresh and the bouquets are so beautifully arranged. Same-day delivery in Berhampur is a blessing!",
      rating: 5,
    },
    {
      id: "3",
      name: "Sneha Pattnaik",
      avatar: Zt("customer-3.jpg"),
      text: "I surprised my mother on her birthday with a rajnigandha and rose bouquet from Velvet Rose. She was in tears! The fragrance filled our entire home. Their attention to detail and love for flowers really shows.",
      rating: 5,
    },
  ],
  Vi = [
    {
      id: "1",
      title: "The Art of Arranging: A Beginner's Guide",
      image: Zt("blog-arranging.jpg"),
      excerpt:
        "Discover the secrets to creating beautiful floral arrangements at home with our step-by-step guide.",
      date: "Jan 12, 2026",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Spring Wedding Flower Trends",
      image: Zt("blog-wedding.jpg"),
      excerpt:
        "From garden roses to ranunculus, explore the most enchanting blooms for your spring celebration.",
      date: "Jan 8, 2026",
      readTime: "4 min read",
    },
    {
      id: "3",
      title: "Caring for Your Fresh Flowers",
      image: Zt("blog-arrangement.jpg"),
      excerpt:
        "Learn simple tips to extend the life of your beautiful blooms and keep them looking fresh longer.",
      date: "Jan 5, 2026",
      readTime: "3 min read",
    },
  ],
  e_ = [
    {
      icon: "Sparkles",
      title: "Handcrafted Bouquets",
      description:
        "Each arrangement is thoughtfully designed by our expert florists with the freshest seasonal blooms.",
    },
    {
      icon: "Leaf",
      title: "Freshness Guaranteed",
      description:
        "We source our flowers daily from local growers to ensure the highest quality and longevity.",
    },
    {
      icon: "Truck",
      title: "Same-Day Delivery",
      description:
        "Order before 2pm for same-day delivery across the city. Perfect for last-minute surprises.",
    },
  ];
Me.registerPlugin(ce);
function L3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null),
    i = { roses: 24, peonies: 18, tulips: 32, ranunculus: 15 };
  return (
    le.useEffect(() => {
      const u = [],
        o = Me.context(() => {
          const d = ce.create({
            trigger: r.current,
            start: "top 80%",
            onEnter: () => {
              Me.fromTo(
                r.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
              );
            },
            once: !0,
          });
          if ((u.push(d), n.current && f.current)) {
            const h = n.current.querySelectorAll(".category-card"),
              m = n.current.scrollWidth - window.innerWidth + 100,
              p = ce.create({
                trigger: f.current,
                start: "top 20%",
                end: `+=${m}`,
                pin: !0,
                scrub: 1,
                anticipatePin: 1,
                onUpdate: (_) => {
                  n.current &&
                    Me.to(n.current, {
                      x: -_.progress * m,
                      duration: 0.1,
                      ease: "none",
                    });
                },
              });
            (u.push(p),
              h.forEach((_, b) => {
                const T = ce.create({
                  trigger: f.current,
                  start: "top 60%",
                  onEnter: () => {
                    Me.fromTo(
                      _,
                      { y: 60, opacity: 0, rotateY: 15 },
                      {
                        y: 0,
                        opacity: 1,
                        rotateY: 0,
                        duration: 0.8,
                        delay: b * 0.15,
                        ease: "power3.out",
                      },
                    );
                  },
                  once: !0,
                });
                u.push(T);
              }));
          }
        }, f);
      return () => {
        (u.forEach((d) => d.kill()), o.revert());
      };
    }, []),
    y.jsxs("section", {
      id: "categories",
      ref: f,
      className:
        "relative w-full min-h-screen bg-cream overflow-hidden py-20 lg:py-32",
      children: [
        y.jsxs("svg", {
          className:
            "absolute top-0 left-0 w-full h-full pointer-events-none opacity-10",
          viewBox: "0 0 1200 800",
          fill: "none",
          children: [
            y.jsx("path", {
              d: "M0,400 Q300,200 600,400 T1200,400",
              stroke: "#f76b6c",
              strokeWidth: "2",
              fill: "none",
              className: "animate-float",
            }),
            y.jsx("path", {
              d: "M0,500 Q400,300 800,500 T1200,500",
              stroke: "#ffb4b4",
              strokeWidth: "1.5",
              fill: "none",
              className: "animate-float",
              style: { animationDelay: "1s" },
            }),
          ],
        }),
        y.jsx("div", {
          className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 mb-12 lg:mb-16",
          children: y.jsxs("div", {
            ref: r,
            className:
              "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("span", {
                    className:
                      "text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                    children: "Collections",
                  }),
                  y.jsxs("h2", {
                    className:
                      "font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight",
                    children: [
                      "Shop by",
                      y.jsx("br", {}),
                      y.jsx("span", {
                        className: "text-coral",
                        children: "Category",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsx("p", {
                className: "text-muted-taupe max-w-md text-lg",
                children:
                  "Discover our curated collections, each bloom hand-selected for its beauty and freshness.",
              }),
            ],
          }),
        }),
        y.jsx("div", {
          className: "relative overflow-visible",
          children: y.jsxs("div", {
            ref: n,
            className: "flex gap-6 lg:gap-8 pl-6 sm:pl-8 lg:pl-12 xl:pl-16",
            style: { width: "max-content" },
            children: [
              H3.map((u, o) =>
                y.jsxs(
                  "div",
                  {
                    className:
                      "category-card group relative w-72 sm:w-80 lg:w-96 flex-shrink-0 cursor-pointer",
                    children: [
                      y.jsxs("div", {
                        className:
                          "relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-soft group-hover:shadow-lifted transition-all duration-500 ease-bloom",
                        children: [
                          y.jsx("img", {
                            src: u.image,
                            alt: u.name,
                            className:
                              "w-full h-full object-cover transition-transform duration-700 ease-bloom group-hover:scale-110",
                          }),
                          y.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-dark-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                          }),
                          y.jsxs("div", {
                            className:
                              "absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-bloom",
                            children: [
                              y.jsx("p", {
                                className: "text-white/80 text-sm mb-2",
                                children: u.description,
                              }),
                              y.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-white text-sm font-medium",
                                children: [
                                  y.jsxs("span", {
                                    children: [i[u.id], " Products"],
                                  }),
                                  y.jsx(Da, { className: "h-4 w-4" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      y.jsx("div", {
                        className: "mt-6 text-center",
                        children: y.jsx("h3", {
                          className:
                            "font-serif text-2xl text-dark-brown group-hover:text-coral transition-colors duration-300",
                          children: u.name,
                        }),
                      }),
                      y.jsxs("span", {
                        className:
                          "absolute -top-4 -right-4 w-10 h-10 bg-coral text-white text-sm font-medium rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-75",
                        children: ["0", o + 1],
                      }),
                    ],
                  },
                  u.id,
                ),
              ),
              y.jsx("div", { className: "w-16 flex-shrink-0" }),
            ],
          }),
        }),
        y.jsxs("div", {
          className:
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-taupe text-sm",
          children: [
            y.jsx("span", { children: "Scroll to explore" }),
            y.jsx(Da, { className: "h-4 w-4 animate-pulse" }),
          ],
        }),
      ],
    })
  );
}
Me.registerPlugin(ce);
function G3({ product: f, index: n }) {
  const r = le.useRef(null),
    { addToCart: i } = Yh();
  return (
    le.useEffect(() => {
      const u = ce.create({
        trigger: r.current,
        start: "top 85%",
        onEnter: () => {
          Me.fromTo(
            r.current,
            { y: 60, opacity: 0, rotateX: 20 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              delay: n * 0.1,
              ease: "power3.out",
            },
          );
        },
        once: !0,
      });
      return () => u.kill();
    }, [n]),
    y.jsxs("div", {
      ref: r,
      className:
        "group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom",
      style: { opacity: 0 },
      children: [
        y.jsxs("div", {
          className: "relative aspect-[4/5] overflow-hidden",
          children: [
            y.jsx("div", {
              className: "absolute inset-0",
              style: { clipPath: "ellipse(50% 45% at 50% 45%)" },
              children: y.jsx("img", {
                src: f.image,
                alt: f.name,
                className:
                  "w-full h-full object-cover transition-transform duration-700 ease-bloom group-hover:scale-110",
              }),
            }),
            y.jsx("div", {
              className:
                "absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-500",
            }),
            y.jsx(cl, {
              variant: "ghost",
              size: "icon",
              className:
                "absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0",
              children: y.jsx(Sx, { className: "h-5 w-5 text-coral" }),
            }),
            y.jsx("div", {
              className:
                "absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0",
              children: y.jsxs(cl, {
                onClick: () => i(f),
                className:
                  "w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 font-medium transition-all duration-300",
                children: [
                  y.jsx(_c, { className: "h-5 w-5 mr-2" }),
                  "Add to Cart",
                ],
              }),
            }),
          ],
        }),
        y.jsxs("div", {
          className: "p-6",
          children: [
            y.jsx("span", {
              className:
                "text-xs font-medium text-coral uppercase tracking-wider mb-2 block",
              children: f.category,
            }),
            y.jsx("h3", {
              className:
                "font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300",
              children: f.name,
            }),
            y.jsx("p", {
              className: "text-muted-taupe text-sm mb-4 line-clamp-2",
              children: f.description,
            }),
            y.jsx("div", {
              className: "flex items-center justify-between",
              children: y.jsxs("span", {
                className: "font-serif text-2xl text-dark-brown",
                children: ["₹", f.price.toLocaleString("en-IN")],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function X3() {
  const f = le.useRef(null),
    n = le.useRef(null);
  return (
    le.useEffect(() => {
      const r = ce.create({
        trigger: n.current,
        start: "top 80%",
        onEnter: () => {
          Me.fromTo(
            n.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          );
        },
        once: !0,
      });
      return () => r.kill();
    }, []),
    y.jsxs("section", {
      id: "products",
      ref: f,
      className: "relative w-full py-20 lg:py-32 bg-cream overflow-hidden",
      children: [
        y.jsx("div", {
          className: "absolute inset-0 opacity-[0.03]",
          style: {
            backgroundImage:
              "radial-gradient(circle, #f76b6c 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          },
        }),
        y.jsxs("div", {
          className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
          children: [
            y.jsxs("div", {
              ref: n,
              className: "text-center mb-16",
              children: [
                y.jsx("span", {
                  className:
                    "text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                  children: "Our Collection",
                }),
                y.jsxs("h2", {
                  className:
                    "font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6",
                  children: [
                    "Featured ",
                    y.jsx("span", {
                      className: "text-coral",
                      children: "Products",
                    }),
                  ],
                }),
                y.jsx("p", {
                  className: "text-muted-taupe text-lg max-w-2xl mx-auto",
                  children:
                    "Each bloom in our collection is hand-selected for its beauty, freshness, and ability to bring joy to your special moments.",
                }),
              ],
            }),
            y.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
              children: Y3.map((r, i) =>
                y.jsx(G3, { product: r, index: i }, r.id),
              ),
            }),
            y.jsx("div", {
              className: "text-center mt-12",
              children: y.jsx(cl, {
                variant: "outline",
                size: "lg",
                className:
                  "border-coral text-coral hover:bg-coral hover:text-white rounded-full px-10 py-6 transition-all duration-300",
                children: "View All Products",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
Me.registerPlugin(ce);
const t_ = { Sparkles: Gx, Leaf: zx, Truck: Jx };
function V3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null);
  return (
    le.useEffect(() => {
      const i = [],
        u = Me.context(() => {
          const o = r.current?.querySelectorAll(".feature-card");
          if (o) {
            const m = ce.create({
              trigger: r.current,
              start: "top 75%",
              onEnter: () => {
                Me.fromTo(
                  o,
                  { y: 50, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power3.out",
                  },
                );
              },
              once: !0,
            });
            i.push(m);
          }
          const d = ce.create({
            trigger: f.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (m) => {
              if (n.current) {
                const p = -5 + m.progress * 10;
                Me.to(n.current, { rotation: p, duration: 0.1 });
              }
            },
          });
          i.push(d);
          const h = r.current?.querySelectorAll(".feature-icon");
          h &&
            h.forEach((m) => {
              const p = ce.create({
                trigger: m,
                start: "top 80%",
                onEnter: () => {
                  Me.fromTo(
                    m,
                    { scale: 0, rotation: -180 },
                    {
                      scale: 1,
                      rotation: 0,
                      duration: 0.6,
                      ease: "back.out(1.7)",
                    },
                  );
                },
                once: !0,
              });
              i.push(p);
            });
        }, f);
      return () => {
        (i.forEach((o) => o.kill()), u.revert());
      };
    }, []),
    y.jsxs("section", {
      ref: f,
      className: "relative w-full py-20 lg:py-32 bg-cream overflow-hidden",
      children: [
        y.jsx("div", {
          className:
            "absolute top-20 left-10 w-32 h-32 bg-soft-pink/20 rounded-full blur-3xl",
        }),
        y.jsx("div", {
          className:
            "absolute bottom-20 right-10 w-40 h-40 bg-pale-blush/30 rounded-full blur-3xl",
        }),
        y.jsxs("div", {
          className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
          children: [
            y.jsxs("div", {
              className: "text-center mb-16",
              children: [
                y.jsx("span", {
                  className:
                    "text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                  children: "Why Choose Us",
                }),
                y.jsxs("h2", {
                  className:
                    "font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight",
                  children: [
                    "The ",
                    y.jsx("span", {
                      className: "text-coral",
                      children: "Velvet Rose",
                    }),
                    " Difference",
                  ],
                }),
              ],
            }),
            y.jsxs("div", {
              className: "grid lg:grid-cols-3 gap-8 lg:gap-12 items-center",
              children: [
                y.jsx("div", {
                  ref: r,
                  className: "space-y-8 lg:space-y-12",
                  children: e_.slice(0, 2).map((i, u) => {
                    const o = t_[i.icon];
                    return y.jsxs(
                      "div",
                      {
                        className: "feature-card group flex items-start gap-5",
                        style: { opacity: 0 },
                        children: [
                          y.jsx("div", {
                            className:
                              "feature-icon flex-shrink-0 w-14 h-14 bg-pale-blush rounded-2xl flex items-center justify-center group-hover:bg-coral transition-colors duration-300",
                            children: y.jsx(o, {
                              className:
                                "h-6 w-6 text-coral group-hover:text-white transition-colors duration-300",
                            }),
                          }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("h3", {
                                className:
                                  "font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300",
                                children: i.title,
                              }),
                              y.jsx("p", {
                                className:
                                  "text-muted-taupe text-sm leading-relaxed",
                                children: i.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      u,
                    );
                  }),
                }),
                y.jsxs("div", {
                  ref: n,
                  className:
                    "relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lifted order-first lg:order-none",
                  children: [
                    y.jsx("img", {
                      src: Zt("feature-centerpiece.jpg"),
                      alt: "Elegant floral centerpiece",
                      className: "w-full h-full object-cover",
                    }),
                    y.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-cream/20 to-transparent",
                    }),
                  ],
                }),
                y.jsx("div", {
                  ref: r,
                  className: "space-y-8 lg:space-y-12",
                  children: e_.slice(2).map((i, u) => {
                    const o = t_[i.icon];
                    return y.jsxs(
                      "div",
                      {
                        className: "feature-card group flex items-start gap-5",
                        style: { opacity: 0 },
                        children: [
                          y.jsx("div", {
                            className:
                              "feature-icon flex-shrink-0 w-14 h-14 bg-pale-blush rounded-2xl flex items-center justify-center group-hover:bg-coral transition-colors duration-300",
                            children: y.jsx(o, {
                              className:
                                "h-6 w-6 text-coral group-hover:text-white transition-colors duration-300",
                            }),
                          }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("h3", {
                                className:
                                  "font-serif text-xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300",
                                children: i.title,
                              }),
                              y.jsx("p", {
                                className:
                                  "text-muted-taupe text-sm leading-relaxed",
                                children: i.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      u,
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
Me.registerPlugin(ce);
function Q3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null);
  return (
    le.useEffect(() => {
      const i = [],
        u = Me.context(() => {
          const o = ce.create({
            trigger: r.current,
            start: "top 80%",
            onEnter: () => {
              Me.fromTo(
                r.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
              );
            },
            once: !0,
          });
          (i.push(o),
            n.current &&
              n.current
                .querySelectorAll(".testimonial-card")
                .forEach((h, m) => {
                  const p = ce.create({
                    trigger: f.current,
                    start: "top 70%",
                    onEnter: () => {
                      Me.fromTo(
                        h,
                        { y: 40, opacity: 0 },
                        {
                          y: 0,
                          opacity: 1,
                          duration: 0.6,
                          delay: m * 0.15,
                          ease: "power3.out",
                        },
                      );
                    },
                    once: !0,
                  });
                  i.push(p);
                }));
        }, f);
      return () => {
        (i.forEach((o) => o.kill()), u.revert());
      };
    }, []),
    y.jsxs("section", {
      ref: f,
      className: "relative w-full py-20 lg:py-32 bg-cream overflow-hidden",
      children: [
        y.jsx("div", {
          className: "absolute top-20 left-10 opacity-5",
          children: y.jsx(Fd, { className: "h-32 w-32 text-coral" }),
        }),
        y.jsx("div", {
          className: "absolute bottom-20 right-10 opacity-5 rotate-180",
          children: y.jsx(Fd, { className: "h-32 w-32 text-coral" }),
        }),
        y.jsxs("div", {
          className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
          children: [
            y.jsxs("div", {
              ref: r,
              className: "text-center mb-16",
              children: [
                y.jsx("span", {
                  className:
                    "text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                  children: "Testimonials",
                }),
                y.jsxs("h2", {
                  className:
                    "font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight mb-6",
                  children: [
                    "What Our ",
                    y.jsx("span", {
                      className: "text-coral",
                      children: "Customers",
                    }),
                    " Say",
                  ],
                }),
                y.jsx("p", {
                  className: "text-muted-taupe text-lg max-w-2xl mx-auto",
                  children:
                    "Hear from those who have experienced the magic of Velvet Rose.",
                }),
              ],
            }),
            y.jsx("div", {
              ref: n,
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
              children: q3.map((i) =>
                y.jsxs(
                  "div",
                  {
                    className:
                      "testimonial-card group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom",
                    style: { opacity: 0 },
                    children: [
                      y.jsx("div", {
                        className:
                          "absolute top-6 right-6 w-10 h-10 bg-pale-blush rounded-full flex items-center justify-center",
                        children: y.jsx(Fd, {
                          className: "h-5 w-5 text-coral",
                        }),
                      }),
                      y.jsx("div", {
                        className: "flex gap-1 mb-6",
                        children: [...Array(i.rating)].map((u, o) =>
                          y.jsx(
                            Vx,
                            { className: "h-4 w-4 fill-coral text-coral" },
                            o,
                          ),
                        ),
                      }),
                      y.jsxs("p", {
                        className:
                          "text-rich-brown text-lg leading-relaxed mb-8",
                        children: ['"', i.text, '"'],
                      }),
                      y.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          y.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full overflow-hidden ring-2 ring-pale-blush group-hover:ring-coral transition-all duration-300",
                            children: y.jsx("img", {
                              src: i.avatar,
                              alt: i.name,
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          y.jsxs("div", {
                            children: [
                              y.jsx("h4", {
                                className: "font-serif text-lg text-dark-brown",
                                children: i.name,
                              }),
                              y.jsx("p", {
                                className: "text-muted-taupe text-sm",
                                children: "Verified Customer",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y.jsx("div", {
                        className:
                          "absolute inset-0 rounded-3xl border-2 border-coral/0 group-hover:border-coral/20 transition-colors duration-500 pointer-events-none",
                      }),
                    ],
                  },
                  i.id,
                ),
              ),
            }),
          ],
        }),
      ],
    })
  );
}
Me.registerPlugin(ce);
function Z3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null);
  return (
    le.useEffect(() => {
      const i = [],
        u = Me.context(() => {
          const o = ce.create({
            trigger: f.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (h) => {
              n.current &&
                Me.to(n.current, { y: h.progress * 100 - 50, duration: 0.1 });
            },
          });
          i.push(o);
          const d = ce.create({
            trigger: r.current,
            start: "top 70%",
            onEnter: () => {
              const h = r.current?.querySelectorAll(".animate-item");
              h &&
                h.length > 0 &&
                Me.fromTo(
                  h,
                  { y: 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                  },
                );
            },
            once: !0,
          });
          i.push(d);
        }, f);
      return () => {
        (i.forEach((o) => o.kill()), u.revert());
      };
    }, []),
    y.jsxs("section", {
      ref: f,
      className: "relative w-full h-[70vh] lg:h-[80vh] overflow-hidden",
      children: [
        y.jsxs("div", {
          ref: n,
          className: "absolute inset-0 scale-110",
          children: [
            y.jsx("img", {
              src: Zt("cta-background.jpg"),
              alt: "Beautiful floral arrangement",
              className: "w-full h-full object-cover",
            }),
            y.jsx("div", { className: "absolute inset-0 bg-dark-brown/40" }),
          ],
        }),
        y.jsx("div", {
          className: "relative z-10 h-full flex items-center justify-center",
          children: y.jsxs("div", {
            ref: r,
            className: "text-center px-6 max-w-3xl",
            children: [
              y.jsx("span", {
                className:
                  "animate-item text-soft-pink text-sm font-medium tracking-widest uppercase mb-4 block",
                children: "Bring Beauty Home",
              }),
              y.jsxs("h2", {
                className:
                  "animate-item font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6",
                children: [
                  "Let the Magic",
                  y.jsx("br", {}),
                  y.jsx("span", {
                    className: "text-soft-pink",
                    children: "Unfold",
                  }),
                ],
              }),
              y.jsx("p", {
                className:
                  "animate-item text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10",
                children:
                  "Order today and experience the joy of fresh, handcrafted floral arrangements delivered to your door.",
              }),
              y.jsxs("div", {
                className:
                  "animate-item flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  y.jsxs(cl, {
                    size: "lg",
                    className:
                      "bg-coral hover:bg-coral/90 text-white rounded-full px-10 py-6 text-base font-medium shadow-lifted transition-all duration-300 group",
                    children: [
                      "Shop Now",
                      y.jsx(Da, {
                        className:
                          "ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1",
                      }),
                    ],
                  }),
                  y.jsx(cl, {
                    variant: "outline",
                    size: "lg",
                    className:
                      "border-white bg-transparent text-white hover:bg-white hover:text-dark-brown rounded-full px-10 py-6 text-base font-medium transition-all duration-300",
                    children: "View Collections",
                  }),
                ],
              }),
            ],
          }),
        }),
        y.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent",
        }),
      ],
    })
  );
}
Me.registerPlugin(ce);
function K3() {
  const f = le.useRef(null),
    n = le.useRef(null),
    r = le.useRef(null);
  return (
    le.useEffect(() => {
      const i = [],
        u = Me.context(() => {
          const o = ce.create({
            trigger: n.current,
            start: "top 80%",
            onEnter: () => {
              Me.fromTo(
                n.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
              );
            },
            once: !0,
          });
          i.push(o);
          const d = r.current?.querySelectorAll(".blog-post");
          d &&
            d.forEach((h, m) => {
              const p = ce.create({
                trigger: h,
                start: "top 80%",
                onEnter: () => {
                  Me.fromTo(
                    h,
                    { y: 60, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 0.8,
                      delay: m * 0.15,
                      ease: "power3.out",
                    },
                  );
                },
                once: !0,
              });
              i.push(p);
            });
        }, f);
      return () => {
        (i.forEach((o) => o.kill()), u.revert());
      };
    }, []),
    y.jsx("section", {
      id: "blog",
      ref: f,
      className: "relative w-full py-20 lg:py-32 bg-cream overflow-hidden",
      children: y.jsxs("div", {
        className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
        children: [
          y.jsxs("div", {
            ref: n,
            className:
              "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16",
            children: [
              y.jsxs("div", {
                children: [
                  y.jsx("span", {
                    className:
                      "text-sm font-medium text-coral tracking-widest uppercase mb-4 block",
                    children: "Journal",
                  }),
                  y.jsxs("h2", {
                    className:
                      "font-serif text-4xl sm:text-5xl lg:text-6xl text-dark-brown leading-tight",
                    children: [
                      "From Our ",
                      y.jsx("span", {
                        className: "text-coral",
                        children: "Blog",
                      }),
                    ],
                  }),
                ],
              }),
              y.jsxs("a", {
                href: "#",
                className:
                  "flex items-center gap-2 text-coral hover:text-coral/80 font-medium transition-colors duration-300 group",
                children: [
                  "View All Articles",
                  y.jsx(Da, {
                    className:
                      "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
                  }),
                ],
              }),
            ],
          }),
          y.jsxs("div", {
            ref: r,
            className: "grid lg:grid-cols-2 gap-6 lg:gap-8",
            children: [
              y.jsx("div", {
                className: "blog-post group lg:row-span-2 cursor-pointer",
                style: { opacity: 0 },
                children: y.jsxs("div", {
                  className:
                    "relative h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom",
                  children: [
                    y.jsx("img", {
                      src: Vi[0].image,
                      alt: Vi[0].title,
                      className:
                        "w-full h-full object-cover transition-all duration-700 ease-bloom group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0",
                    }),
                    y.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/20 to-transparent",
                    }),
                    y.jsxs("div", {
                      className: "absolute bottom-0 left-0 right-0 p-8",
                      children: [
                        y.jsxs("div", {
                          className:
                            "flex items-center gap-4 text-white/70 text-sm mb-4",
                          children: [
                            y.jsx("span", { children: Vi[0].date }),
                            y.jsx("span", {
                              className: "w-1 h-1 bg-white/50 rounded-full",
                            }),
                            y.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                y.jsx(o1, { className: "h-3 w-3" }),
                                Vi[0].readTime,
                              ],
                            }),
                          ],
                        }),
                        y.jsx("h3", {
                          className:
                            "font-serif text-2xl lg:text-3xl text-white mb-3 group-hover:text-soft-pink transition-colors duration-300",
                          children: Vi[0].title,
                        }),
                        y.jsx("p", {
                          className:
                            "text-white/80 text-sm lg:text-base line-clamp-2 mb-4",
                          children: Vi[0].excerpt,
                        }),
                        y.jsxs("span", {
                          className:
                            "inline-flex items-center gap-2 text-coral font-medium group-hover:gap-3 transition-all duration-300",
                          children: [
                            "Read More",
                            y.jsx(Da, { className: "h-4 w-4" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Vi.slice(1).map((i) =>
                y.jsx(
                  "div",
                  {
                    className: "blog-post group cursor-pointer",
                    style: { opacity: 0 },
                    children: y.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row gap-6 bg-white rounded-3xl p-4 shadow-soft hover:shadow-lifted transition-all duration-500 ease-bloom",
                      children: [
                        y.jsx("div", {
                          className:
                            "sm:w-48 lg:w-56 flex-shrink-0 aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden",
                          children: y.jsx("img", {
                            src: i.image,
                            alt: i.title,
                            className:
                              "w-full h-full object-cover transition-all duration-700 ease-bloom group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0",
                          }),
                        }),
                        y.jsxs("div", {
                          className: "flex flex-col justify-center py-2",
                          children: [
                            y.jsxs("div", {
                              className:
                                "flex items-center gap-4 text-muted-taupe text-sm mb-3",
                              children: [
                                y.jsx("span", { children: i.date }),
                                y.jsx("span", {
                                  className:
                                    "w-1 h-1 bg-muted-taupe rounded-full",
                                }),
                                y.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    y.jsx(o1, { className: "h-3 w-3" }),
                                    i.readTime,
                                  ],
                                }),
                              ],
                            }),
                            y.jsx("h3", {
                              className:
                                "font-serif text-xl lg:text-2xl text-dark-brown mb-2 group-hover:text-coral transition-colors duration-300",
                              children: i.title,
                            }),
                            y.jsx("p", {
                              className:
                                "text-muted-taupe text-sm line-clamp-2 mb-4",
                              children: i.excerpt,
                            }),
                            y.jsxs("span", {
                              className:
                                "inline-flex items-center gap-2 text-coral text-sm font-medium group-hover:gap-3 transition-all duration-300",
                              children: [
                                "Read More",
                                y.jsx(Da, { className: "h-4 w-4" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  i.id,
                ),
              ),
            ],
          }),
        ],
      }),
    })
  );
}
function J3({ className: f, type: n, ...r }) {
  return y.jsx("input", {
    type: n,
    "data-slot": "input",
    className: b_(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      f,
    ),
    ...r,
  });
}
Me.registerPlugin(ce);
function F3() {
  const f = le.useRef(null),
    n = le.useRef(null);
  le.useEffect(() => {
    const o = ce.create({
      trigger: f.current,
      start: "top 90%",
      onEnter: () => {
        const d = n.current?.querySelectorAll(".animate-item");
        d &&
          d.length > 0 &&
          Me.fromTo(
            d,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
          );
      },
      once: !0,
    });
    return () => o.kill();
  }, []);
  const r = [
      { name: "Shop All", href: "#products" },
      { name: "Collections", href: "#categories" },
      { name: "About Us", href: "#about" },
      { name: "Journal", href: "#blog" },
    ],
    i = [
      { name: "Contact Us", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
    ],
    u = [
      { icon: wx, href: "#", label: "Instagram" },
      { icon: bx, href: "#", label: "Facebook" },
      { icon: Wx, href: "#", label: "Twitter" },
    ];
  return y.jsxs("footer", {
    ref: f,
    className: "relative w-full bg-footer-bg pt-20 lg:pt-32 pb-8",
    children: [
      y.jsx("div", {
        className: "absolute top-0 left-0 right-0 h-px bg-light-rose",
      }),
      y.jsxs("div", {
        ref: n,
        className: "w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10",
        children: [
          y.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16",
            children: [
              y.jsxs("div", {
                className: "lg:col-span-1",
                children: [
                  y.jsx("a", {
                    href: "#",
                    className:
                      "animate-item font-serif text-3xl text-dark-brown block mb-6 hover:text-coral transition-colors duration-300",
                    children: "Velvet Rose",
                  }),
                  y.jsx("p", {
                    className:
                      "animate-item text-muted-taupe text-sm leading-relaxed mb-6",
                    children:
                      "Crafting moments of botanical elegance for life's most precious occasions. Each petal tells a story of love and beauty.",
                  }),
                  y.jsx("div", {
                    className: "animate-item flex gap-4",
                    children: u.map((o) =>
                      y.jsx(
                        "a",
                        {
                          href: o.href,
                          className:
                            "w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xs hover:shadow-soft hover:bg-coral group transition-all duration-300",
                          "aria-label": o.label,
                          children: y.jsx(o.icon, {
                            className:
                              "h-4 w-4 text-muted-taupe group-hover:text-white transition-colors duration-300",
                          }),
                        },
                        o.label,
                      ),
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "animate-item",
                children: [
                  y.jsx("h4", {
                    className: "font-serif text-lg text-dark-brown mb-6",
                    children: "Quick Links",
                  }),
                  y.jsx("ul", {
                    className: "space-y-3",
                    children: r.map((o) =>
                      y.jsx(
                        "li",
                        {
                          children: y.jsx("a", {
                            href: o.href,
                            className:
                              "text-muted-taupe hover:text-coral transition-colors duration-300 text-sm",
                            children: o.name,
                          }),
                        },
                        o.name,
                      ),
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "animate-item",
                children: [
                  y.jsx("h4", {
                    className: "font-serif text-lg text-dark-brown mb-6",
                    children: "Help & Support",
                  }),
                  y.jsx("ul", {
                    className: "space-y-3",
                    children: i.map((o) =>
                      y.jsx(
                        "li",
                        {
                          children: y.jsx("a", {
                            href: o.href,
                            className:
                              "text-muted-taupe hover:text-coral transition-colors duration-300 text-sm",
                            children: o.name,
                          }),
                        },
                        o.name,
                      ),
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                className: "animate-item",
                children: [
                  y.jsx("h4", {
                    className: "font-serif text-lg text-dark-brown mb-6",
                    children: "Stay in Touch",
                  }),
                  y.jsxs("div", {
                    className: "space-y-3 mb-6",
                    children: [
                      y.jsxs("a", {
                        href: "mailto:hello@velvetrose.in",
                        className:
                          "flex items-center gap-3 text-muted-taupe hover:text-coral transition-colors duration-300 text-sm",
                        children: [
                          y.jsx(Nx, { className: "h-4 w-4" }),
                          "hello@velvetrose.in",
                        ],
                      }),
                      y.jsxs("a", {
                        href: "tel:+911234567890",
                        className:
                          "flex items-center gap-3 text-muted-taupe hover:text-coral transition-colors duration-300 text-sm",
                        children: [
                          y.jsx(Ux, { className: "h-4 w-4" }),
                          "+91 1234567890",
                        ],
                      }),
                      y.jsxs("div", {
                        className:
                          "flex items-start gap-3 text-muted-taupe text-sm",
                        children: [
                          y.jsx(Ox, {
                            className: "h-4 w-4 mt-0.5 flex-shrink-0",
                          }),
                          y.jsxs("span", {
                            children: [
                              "Khajuria main road",
                              y.jsx("br", {}),
                              "Berhampur, Odisha 760003",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    className: "mt-6",
                    children: [
                      y.jsx("p", {
                        className: "text-muted-taupe text-sm mb-4",
                        children:
                          "Subscribe to our newsletter for floral inspiration and exclusive offers.",
                      }),
                      y.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          y.jsx(J3, {
                            type: "email",
                            placeholder: "Your email",
                            className:
                              "bg-white border-light-rose focus:border-coral rounded-full text-sm",
                          }),
                          y.jsx(cl, {
                            size: "icon",
                            className:
                              "bg-coral hover:bg-coral/90 rounded-full flex-shrink-0",
                            children: y.jsx(Da, {
                              className: "h-4 w-4 text-white",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className: "animate-item pt-8 border-t border-light-rose",
            children: y.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center gap-4",
              children: [
                y.jsx("p", {
                  className: "text-muted-taupe text-sm",
                  children: "© 2026 Velvet Rose. All rights reserved.",
                }),
                y.jsxs("div", {
                  className: "flex gap-6",
                  children: [
                    y.jsx("a", {
                      href: "#",
                      className:
                        "text-muted-taupe hover:text-coral text-sm transition-colors duration-300",
                      children: "Privacy Policy",
                    }),
                    y.jsx("a", {
                      href: "#",
                      className:
                        "text-muted-taupe hover:text-coral text-sm transition-colors duration-300",
                      children: "Terms of Service",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function W3() {
  const {
      items: f,
      isOpen: n,
      closeCart: r,
      removeFromCart: i,
      updateQuantity: u,
      totalPrice: o,
      clearCart: d,
    } = Yh(),
    h = le.useRef(null),
    m = le.useRef(null),
    p = le.useRef(null);
  le.useEffect(() => {
    if (n) {
      (Me.to(m.current, { opacity: 1, duration: 0.3, ease: "power2.out" }),
        Me.to(h.current, { x: 0, duration: 0.4, ease: "power3.out" }));
      const b = p.current?.querySelectorAll(".animate-item");
      b &&
        b.length > 0 &&
        Me.fromTo(
          b,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.2,
            ease: "power2.out",
          },
        );
    } else
      (Me.to(m.current, { opacity: 0, duration: 0.3, ease: "power2.in" }),
        Me.to(h.current, { x: "100%", duration: 0.3, ease: "power3.in" }));
  }, [n]);
  const _ = () => {
    (alert("Thank you for shopping with Velvet Rose! This is a demo checkout."),
      d(),
      r());
  };
  return y.jsxs(y.Fragment, {
    children: [
      y.jsx("div", {
        ref: m,
        className: `fixed inset-0 bg-dark-brown/50 backdrop-blur-sm z-50 opacity-0 ${n ? "pointer-events-auto" : "pointer-events-none"}`,
        onClick: r,
      }),
      y.jsxs("div", {
        ref: h,
        className:
          "fixed top-0 right-0 h-full w-full sm:w-96 lg:w-[450px] bg-cream z-50 shadow-2xl transform translate-x-full overflow-hidden flex flex-col",
        children: [
          y.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-light-rose animate-item",
            children: [
              y.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  y.jsx(_c, { className: "h-5 w-5 text-coral" }),
                  y.jsx("h2", {
                    className: "font-serif text-2xl text-dark-brown",
                    children: "Your Cart",
                  }),
                ],
              }),
              y.jsx(cl, {
                variant: "ghost",
                size: "icon",
                className: "hover:bg-pale-blush rounded-full",
                onClick: r,
                children: y.jsx(a_, { className: "h-5 w-5 text-dark-brown" }),
              }),
            ],
          }),
          y.jsx("div", {
            ref: p,
            className: "flex-1 overflow-y-auto p-6",
            children:
              f.length === 0
                ? y.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center animate-item",
                    children: [
                      y.jsx("div", {
                        className:
                          "w-20 h-20 bg-pale-blush rounded-full flex items-center justify-center mb-6",
                        children: y.jsx(_c, {
                          className: "h-8 w-8 text-coral",
                        }),
                      }),
                      y.jsx("h3", {
                        className: "font-serif text-xl text-dark-brown mb-2",
                        children: "Your cart is empty",
                      }),
                      y.jsx("p", {
                        className: "text-muted-taupe text-sm mb-6",
                        children: "Add some beautiful blooms to get started.",
                      }),
                      y.jsx(cl, {
                        onClick: r,
                        className:
                          "bg-coral hover:bg-coral/90 text-white rounded-full px-8",
                        children: "Continue Shopping",
                      }),
                    ],
                  })
                : y.jsx("div", {
                    className: "space-y-6",
                    children: f.map((b) =>
                      y.jsxs(
                        "div",
                        {
                          className: "flex gap-4 animate-item group",
                          children: [
                            y.jsx("div", {
                              className:
                                "w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-xs",
                              children: y.jsx("img", {
                                src: b.image,
                                alt: b.name,
                                className: "w-full h-full object-cover",
                              }),
                            }),
                            y.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                y.jsx("h4", {
                                  className:
                                    "font-serif text-base text-dark-brown truncate mb-1",
                                  children: b.name,
                                }),
                                y.jsxs("p", {
                                  className:
                                    "text-coral font-medium text-sm mb-3",
                                  children: [
                                    "₹",
                                    b.price.toLocaleString("en-IN"),
                                  ],
                                }),
                                y.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    y.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 bg-white rounded-full border border-light-rose",
                                      children: [
                                        y.jsx(cl, {
                                          variant: "ghost",
                                          size: "icon",
                                          className:
                                            "h-8 w-8 hover:bg-pale-blush rounded-full",
                                          onClick: () =>
                                            u(b.id, b.quantity - 1),
                                          children: y.jsx(Rx, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                        y.jsx("span", {
                                          className:
                                            "w-6 text-center text-sm font-medium text-dark-brown",
                                          children: b.quantity,
                                        }),
                                        y.jsx(cl, {
                                          variant: "ghost",
                                          size: "icon",
                                          className:
                                            "h-8 w-8 hover:bg-pale-blush rounded-full",
                                          onClick: () =>
                                            u(b.id, b.quantity + 1),
                                          children: y.jsx(Hx, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                      ],
                                    }),
                                    y.jsx(cl, {
                                      variant: "ghost",
                                      size: "icon",
                                      className:
                                        "h-8 w-8 text-muted-taupe hover:text-coral hover:bg-pale-blush rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                      onClick: () => i(b.id),
                                      children: y.jsx(Zx, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            y.jsx("div", {
                              className: "text-right",
                              children: y.jsxs("span", {
                                className: "font-serif text-lg text-dark-brown",
                                children: [
                                  "₹",
                                  (b.price * b.quantity).toLocaleString(
                                    "en-IN",
                                  ),
                                ],
                              }),
                            }),
                          ],
                        },
                        b.id,
                      ),
                    ),
                  }),
          }),
          f.length > 0 &&
            y.jsxs("div", {
              className:
                "border-t border-light-rose p-6 space-y-4 animate-item",
              children: [
                y.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    y.jsx("span", {
                      className: "text-muted-taupe",
                      children: "Subtotal",
                    }),
                    y.jsxs("span", {
                      className: "text-dark-brown font-medium",
                      children: ["₹", o.toLocaleString("en-IN")],
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "flex justify-between text-sm",
                  children: [
                    y.jsx("span", {
                      className: "text-muted-taupe",
                      children: "Shipping",
                    }),
                    y.jsx("span", {
                      className: "text-dark-brown font-medium",
                      children: "Free",
                    }),
                  ],
                }),
                y.jsxs("div", {
                  className: "flex justify-between",
                  children: [
                    y.jsx("span", {
                      className: "text-dark-brown font-medium",
                      children: "Total",
                    }),
                    y.jsxs("span", {
                      className: "font-serif text-2xl text-coral",
                      children: ["₹", o.toLocaleString("en-IN")],
                    }),
                  ],
                }),
                y.jsx(cl, {
                  onClick: _,
                  className:
                    "w-full bg-coral hover:bg-coral/90 text-white rounded-full py-6 text-base font-medium shadow-soft hover:shadow-lifted transition-all duration-300",
                  children: "Proceed to Checkout",
                }),
                y.jsx(cl, {
                  variant: "ghost",
                  onClick: r,
                  className:
                    "w-full text-muted-taupe hover:text-coral transition-colors duration-300",
                  children: "Continue Shopping",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function $3() {
  return y.jsx(fx, {
    children: y.jsxs("div", {
      className: "min-h-screen bg-cream",
      children: [
        y.jsx(P2, {}),
        y.jsxs("main", {
          children: [
            y.jsx(_3, {}),
            y.jsx(B3, {}),
            y.jsx(L3, {}),
            y.jsx(X3, {}),
            y.jsx(V3, {}),
            y.jsx(Q3, {}),
            y.jsx(Z3, {}),
            y.jsx(K3, {}),
          ],
        }),
        y.jsx(F3, {}),
        y.jsx(W3, {}),
      ],
    }),
  });
}
cx.createRoot(document.getElementById("root")).render(
  y.jsx(le.StrictMode, { children: y.jsx($3, {}) }),
);
