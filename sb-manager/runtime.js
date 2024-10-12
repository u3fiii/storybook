var Am = Object.create;
var On = Object.defineProperty;
var Mm = Object.getOwnPropertyDescriptor;
var Dm = Object.getOwnPropertyNames;
var Lm = Object.getPrototypeOf, Nm = Object.prototype.hasOwnProperty;
var a = (e, t) => On(e, "name", { value: t, configurable: !0 }), br = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var J = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Fm = (e, t, r, o) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of Dm(t))
      !Nm.call(e, i) && i !== r && On(e, i, { get: () => t[i], enumerable: !(o = Mm(t, i)) || o.enumerable });
  return e;
};
var We = (e, t, r) => (r = e != null ? Am(Lm(e)) : {}, Fm(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? On(r, "default", { value: e, enumerable: !0 }) : r,
  e
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var ws = J((Rw, Ss) => {
  "use strict";
  var Hm = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Ss.exports = Hm;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var Ts = J((zw, _s) => {
  "use strict";
  var Rm = ws();
  function Es() {
  }
  a(Es, "emptyFunction");
  function Cs() {
  }
  a(Cs, "emptyFunctionWithReset");
  Cs.resetWarningCache = Es;
  _s.exports = function() {
    function e(o, i, n, l, u, c) {
      if (c !== Rm) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    a(e, "shim"), e.isRequired = e;
    function t() {
      return e;
    }
    a(t, "getShim");
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Cs,
      resetWarningCache: Es
    };
    return r.PropTypes = r, r;
  };
});

// ../node_modules/prop-types/index.js
var Dn = J((Kw, ks) => {
  ks.exports = Ts()();
  var $w, Vw;
});

// ../node_modules/react-fast-compare/index.js
var Ps = J((jw, Os) => {
  var zm = typeof Element < "u", Wm = typeof Map == "function", $m = typeof Set == "function", Vm = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function Zr(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var r, o, i;
      if (Array.isArray(e)) {
        if (r = e.length, r != t.length) return !1;
        for (o = r; o-- !== 0; )
          if (!Zr(e[o], t[o])) return !1;
        return !0;
      }
      var n;
      if (Wm && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (n = e.entries(); !(o = n.next()).done; )
          if (!t.has(o.value[0])) return !1;
        for (n = e.entries(); !(o = n.next()).done; )
          if (!Zr(o.value[1], t.get(o.value[0]))) return !1;
        return !0;
      }
      if ($m && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (n = e.entries(); !(o = n.next()).done; )
          if (!t.has(o.value[0])) return !1;
        return !0;
      }
      if (Vm && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (r = e.length, r != t.length) return !1;
        for (o = r; o-- !== 0; )
          if (e[o] !== t[o]) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() ===
      t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() ===
      t.toString();
      if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length) return !1;
      for (o = r; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, i[o])) return !1;
      if (zm && e instanceof Element) return !1;
      for (o = r; o-- !== 0; )
        if (!((i[o] === "_owner" || i[o] === "__v" || i[o] === "__o") && e.$$typeof) && !Zr(e[i[o]], t[i[o]]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  a(Zr, "equal");
  Os.exports = /* @__PURE__ */ a(function(t, r) {
    try {
      return Zr(t, r);
    } catch (o) {
      if ((o.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw o;
    }
  }, "isEqual");
});

// ../node_modules/invariant/browser.js
var Ms = J((qw, As) => {
  "use strict";
  var Km = /* @__PURE__ */ a(function(e, t, r, o, i, n, l, u) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var d = [r, o, i, n, l, u], p = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return d[p++];
          })
        ), c.name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, "invariant");
  As.exports = Km;
});

// ../node_modules/shallowequal/index.js
var Ls = J((Yw, Ds) => {
  Ds.exports = /* @__PURE__ */ a(function(t, r, o, i) {
    var n = o ? o.call(i, t, r) : void 0;
    if (n !== void 0)
      return !!n;
    if (t === r)
      return !0;
    if (typeof t != "object" || !t || typeof r != "object" || !r)
      return !1;
    var l = Object.keys(t), u = Object.keys(r);
    if (l.length !== u.length)
      return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(r), d = 0; d < l.length; d++) {
      var p = l[d];
      if (!c(p))
        return !1;
      var h = t[p], f = r[p];
      if (n = o ? o.call(i, h, f, p) : void 0, n === !1 || n === void 0 && h !== f)
        return !1;
    }
    return !0;
  }, "shallowEqual");
});

// ../node_modules/memoizerific/memoizerific.js
var Co = J((Zl, oi) => {
  (function(e) {
    if (typeof Zl == "object" && typeof oi < "u")
      oi.exports = e();
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, r;
    return (/* @__PURE__ */ a(function o(i, n, l) {
      function u(p, h) {
        if (!n[p]) {
          if (!i[p]) {
            var f = typeof br == "function" && br;
            if (!h && f) return f(p, !0);
            if (c) return c(p, !0);
            var g = new Error("Cannot find module '" + p + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var m = n[p] = { exports: {} };
          i[p][0].call(m.exports, function(v) {
            var S = i[p][1][v];
            return u(S || v);
          }, m, m.exports, o, i, n, l);
        }
        return n[p].exports;
      }
      a(u, "s");
      for (var c = typeof br == "function" && br, d = 0; d < l.length; d++) u(l[d]);
      return u;
    }, "e"))({ 1: [function(o, i, n) {
      i.exports = function(l) {
        if (typeof Map != "function" || l) {
          var u = o("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(o, i, n) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, l.prototype.forEach = function(u, c) {
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, i.exports = l;
    }, {}], 3: [function(o, i, n) {
      var l = o("map-or-similar");
      i.exports = function(p) {
        var h = new l(!1), f = [];
        return function(g) {
          var m = /* @__PURE__ */ a(function() {
            var v = h, S, C, y = arguments.length - 1, b = Array(y + 1), I = !0, E;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== y + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E = 0; E < y; E++) {
              if (b[E] = {
                cacheItem: v,
                arg: arguments[E]
              }, v.has(arguments[E])) {
                v = v.get(arguments[E]);
                continue;
              }
              I = !1, S = new l(!1), v.set(arguments[E], S), v = S;
            }
            return I && (v.has(arguments[y]) ? C = v.get(arguments[y]) : I = !1), I || (C = g.apply(null, arguments), v.set(arguments[y], C)),
            p > 0 && (b[y] = {
              cacheItem: v,
              arg: arguments[y]
            }, I ? u(f, b) : f.push(b), f.length > p && c(f.shift())), m.wasMemoized = I, m.numArgs = y + 1, C;
          }, "memoizerific");
          return m.limit = p, m.wasMemoized = !1, m.cache = h, m.lru = f, m;
        };
      };
      function u(p, h) {
        var f = p.length, g = h.length, m, v, S;
        for (v = 0; v < f; v++) {
          for (m = !0, S = 0; S < g; S++)
            if (!d(p[v][S].arg, h[S].arg)) {
              m = !1;
              break;
            }
          if (m)
            break;
        }
        p.push(p.splice(v, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(p) {
        var h = p.length, f = p[h - 1], g, m;
        for (f.cacheItem.delete(f.arg), m = h - 2; m >= 0 && (f = p[m], g = f.cacheItem.get(f.arg), !g || !g.size); m--)
          f.cacheItem.delete(f.arg);
      }
      a(c, "removeCachedResult");
      function d(p, h) {
        return p === h || p !== p && h !== h;
      }
      a(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/es-errors/index.js
var ou = J((MP, ru) => {
  "use strict";
  ru.exports = Error;
});

// ../node_modules/es-errors/eval.js
var iu = J((DP, nu) => {
  "use strict";
  nu.exports = EvalError;
});

// ../node_modules/es-errors/range.js
var su = J((LP, au) => {
  "use strict";
  au.exports = RangeError;
});

// ../node_modules/es-errors/ref.js
var uu = J((NP, lu) => {
  "use strict";
  lu.exports = ReferenceError;
});

// ../node_modules/es-errors/syntax.js
var si = J((FP, cu) => {
  "use strict";
  cu.exports = SyntaxError;
});

// ../node_modules/es-errors/type.js
var sr = J((BP, pu) => {
  "use strict";
  pu.exports = TypeError;
});

// ../node_modules/es-errors/uri.js
var fu = J((HP, du) => {
  "use strict";
  du.exports = URIError;
});

// ../node_modules/has-symbols/shams.js
var hu = J((RP, mu) => {
  "use strict";
  mu.exports = /* @__PURE__ */ a(function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, r = Symbol("test"), o = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Sy\
mbol]")
      return !1;
    var i = 42;
    t[r] = i;
    for (r in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
    t).length !== 0)
      return !1;
    var n = Object.getOwnPropertySymbols(t);
    if (n.length !== 1 || n[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = Object.getOwnPropertyDescriptor(t, r);
      if (l.value !== i || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }, "hasSymbols");
});

// ../node_modules/has-symbols/index.js
var vu = J((WP, yu) => {
  "use strict";
  var gu = typeof Symbol < "u" && Symbol, ig = hu();
  yu.exports = /* @__PURE__ */ a(function() {
    return typeof gu != "function" || typeof Symbol != "function" || typeof gu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
    ig();
  }, "hasNativeSymbols");
});

// ../node_modules/has-proto/index.js
var xu = J((VP, bu) => {
  "use strict";
  var li = {
    __proto__: null,
    foo: {}
  }, ag = Object;
  bu.exports = /* @__PURE__ */ a(function() {
    return { __proto__: li }.foo === li.foo && !(li instanceof ag);
  }, "hasProto");
});

// ../node_modules/function-bind/implementation.js
var wu = J((jP, Su) => {
  "use strict";
  var sg = "Function.prototype.bind called on incompatible ", lg = Object.prototype.toString, ug = Math.max, cg = "[object Function]", Iu = /* @__PURE__ */ a(
  function(t, r) {
    for (var o = [], i = 0; i < t.length; i += 1)
      o[i] = t[i];
    for (var n = 0; n < r.length; n += 1)
      o[n + t.length] = r[n];
    return o;
  }, "concatty"), pg = /* @__PURE__ */ a(function(t, r) {
    for (var o = [], i = r || 0, n = 0; i < t.length; i += 1, n += 1)
      o[n] = t[i];
    return o;
  }, "slicy"), dg = /* @__PURE__ */ a(function(e, t) {
    for (var r = "", o = 0; o < e.length; o += 1)
      r += e[o], o + 1 < e.length && (r += t);
    return r;
  }, "joiny");
  Su.exports = /* @__PURE__ */ a(function(t) {
    var r = this;
    if (typeof r != "function" || lg.apply(r) !== cg)
      throw new TypeError(sg + r);
    for (var o = pg(arguments, 1), i, n = /* @__PURE__ */ a(function() {
      if (this instanceof i) {
        var p = r.apply(
          this,
          Iu(o, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return r.apply(
        t,
        Iu(o, arguments)
      );
    }, "binder"), l = ug(0, r.length - o.length), u = [], c = 0; c < l; c++)
      u[c] = "$" + c;
    if (i = Function("binder", "return function (" + dg(u, ",") + "){ return binder.apply(this,arguments); }")(n), r.prototype) {
      var d = /* @__PURE__ */ a(function() {
      }, "Empty");
      d.prototype = r.prototype, i.prototype = new d(), d.prototype = null;
    }
    return i;
  }, "bind");
});

// ../node_modules/function-bind/index.js
var _o = J((qP, Eu) => {
  "use strict";
  var fg = wu();
  Eu.exports = Function.prototype.bind || fg;
});

// ../node_modules/hasown/index.js
var _u = J((GP, Cu) => {
  "use strict";
  var mg = Function.prototype.call, hg = Object.prototype.hasOwnProperty, gg = _o();
  Cu.exports = gg.call(mg, hg);
});

// ../node_modules/get-intrinsic/index.js
var Dt = J((YP, Au) => {
  "use strict";
  var ie, yg = ou(), vg = iu(), bg = su(), xg = uu(), pr = si(), cr = sr(), Ig = fu(), Pu = Function, ui = /* @__PURE__ */ a(function(e) {
    try {
      return Pu('"use strict"; return (' + e + ").constructor;")();
    } catch {
    }
  }, "getEvalledConstructor"), At = Object.getOwnPropertyDescriptor;
  if (At)
    try {
      At({}, "");
    } catch {
      At = null;
    }
  var ci = /* @__PURE__ */ a(function() {
    throw new cr();
  }, "throwTypeError"), Sg = At ? function() {
    try {
      return arguments.callee, ci;
    } catch {
      try {
        return At(arguments, "callee").get;
      } catch {
        return ci;
      }
    }
  }() : ci, lr = vu()(), wg = xu()(), Oe = Object.getPrototypeOf || (wg ? function(e) {
    return e.__proto__;
  } : null), ur = {}, Eg = typeof Uint8Array > "u" || !Oe ? ie : Oe(Uint8Array), Mt = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? ie : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ie : ArrayBuffer,
    "%ArrayIteratorPrototype%": lr && Oe ? Oe([][Symbol.iterator]()) : ie,
    "%AsyncFromSyncIteratorPrototype%": ie,
    "%AsyncFunction%": ur,
    "%AsyncGenerator%": ur,
    "%AsyncGeneratorFunction%": ur,
    "%AsyncIteratorPrototype%": ur,
    "%Atomics%": typeof Atomics > "u" ? ie : Atomics,
    "%BigInt%": typeof BigInt > "u" ? ie : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? ie : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? ie : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? ie : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": yg,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": vg,
    "%Float32Array%": typeof Float32Array > "u" ? ie : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? ie : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ie : FinalizationRegistry,
    "%Function%": Pu,
    "%GeneratorFunction%": ur,
    "%Int8Array%": typeof Int8Array > "u" ? ie : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? ie : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? ie : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": lr && Oe ? Oe(Oe([][Symbol.iterator]())) : ie,
    "%JSON%": typeof JSON == "object" ? JSON : ie,
    "%Map%": typeof Map > "u" ? ie : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !lr || !Oe ? ie : Oe((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? ie : Promise,
    "%Proxy%": typeof Proxy > "u" ? ie : Proxy,
    "%RangeError%": bg,
    "%ReferenceError%": xg,
    "%Reflect%": typeof Reflect > "u" ? ie : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? ie : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !lr || !Oe ? ie : Oe((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ie : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": lr && Oe ? Oe(""[Symbol.iterator]()) : ie,
    "%Symbol%": lr ? Symbol : ie,
    "%SyntaxError%": pr,
    "%ThrowTypeError%": Sg,
    "%TypedArray%": Eg,
    "%TypeError%": cr,
    "%Uint8Array%": typeof Uint8Array > "u" ? ie : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ie : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? ie : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? ie : Uint32Array,
    "%URIError%": Ig,
    "%WeakMap%": typeof WeakMap > "u" ? ie : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? ie : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? ie : WeakSet
  };
  if (Oe)
    try {
      null.error;
    } catch (e) {
      Tu = Oe(Oe(e)), Mt["%Error.prototype%"] = Tu;
    }
  var Tu, Cg = /* @__PURE__ */ a(function e(t) {
    var r;
    if (t === "%AsyncFunction%")
      r = ui("async function () {}");
    else if (t === "%GeneratorFunction%")
      r = ui("function* () {}");
    else if (t === "%AsyncGeneratorFunction%")
      r = ui("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var o = e("%AsyncGeneratorFunction%");
      o && (r = o.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var i = e("%AsyncGenerator%");
      i && Oe && (r = Oe(i.prototype));
    }
    return Mt[t] = r, r;
  }, "doEval"), ku = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, Pr = _o(), To = _u(), _g = Pr.call(Function.call, Array.prototype.concat), Tg = Pr.call(Function.apply, Array.prototype.splice), Ou = Pr.
  call(Function.call, String.prototype.replace), ko = Pr.call(Function.call, String.prototype.slice), kg = Pr.call(Function.call, RegExp.prototype.
  exec), Og = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Pg = /\\(\\)?/g, Ag = /* @__PURE__ */ a(
  function(t) {
    var r = ko(t, 0, 1), o = ko(t, -1);
    if (r === "%" && o !== "%")
      throw new pr("invalid intrinsic syntax, expected closing `%`");
    if (o === "%" && r !== "%")
      throw new pr("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return Ou(t, Og, function(n, l, u, c) {
      i[i.length] = u ? Ou(c, Pg, "$1") : l || n;
    }), i;
  }, "stringToPath"), Mg = /* @__PURE__ */ a(function(t, r) {
    var o = t, i;
    if (To(ku, o) && (i = ku[o], o = "%" + i[0] + "%"), To(Mt, o)) {
      var n = Mt[o];
      if (n === ur && (n = Cg(o)), typeof n > "u" && !r)
        throw new cr("intrinsic " + t + " exists, but is not available. Please file an issue!");
      return {
        alias: i,
        name: o,
        value: n
      };
    }
    throw new pr("intrinsic " + t + " does not exist!");
  }, "getBaseIntrinsic");
  Au.exports = /* @__PURE__ */ a(function(t, r) {
    if (typeof t != "string" || t.length === 0)
      throw new cr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new cr('"allowMissing" argument must be a boolean');
    if (kg(/^%?[^%]*%?$/, t) === null)
      throw new pr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var o = Ag(t), i = o.length > 0 ? o[0] : "", n = Mg("%" + i + "%", r), l = n.name, u = n.value, c = !1, d = n.alias;
    d && (i = d[0], Tg(o, _g([0, 1], d)));
    for (var p = 1, h = !0; p < o.length; p += 1) {
      var f = o[p], g = ko(f, 0, 1), m = ko(f, -1);
      if ((g === '"' || g === "'" || g === "`" || m === '"' || m === "'" || m === "`") && g !== m)
        throw new pr("property names with quotes must have matching quotes");
      if ((f === "constructor" || !h) && (c = !0), i += "." + f, l = "%" + i + "%", To(Mt, l))
        u = Mt[l];
      else if (u != null) {
        if (!(f in u)) {
          if (!r)
            throw new cr("base intrinsic for " + t + " exists, but the property is not available.");
          return;
        }
        if (At && p + 1 >= o.length) {
          var v = At(u, f);
          h = !!v, h && "get" in v && !("originalValue" in v.get) ? u = v.get : u = u[f];
        } else
          h = To(u, f), u = u[f];
        h && !c && (Mt[l] = u);
      }
    }
    return u;
  }, "GetIntrinsic");
});

// ../node_modules/es-define-property/index.js
var Po = J((XP, Mu) => {
  "use strict";
  var Dg = Dt(), Oo = Dg("%Object.defineProperty%", !0) || !1;
  if (Oo)
    try {
      Oo({}, "a", { value: 1 });
    } catch {
      Oo = !1;
    }
  Mu.exports = Oo;
});

// ../node_modules/gopd/index.js
var pi = J((ZP, Du) => {
  "use strict";
  var Lg = Dt(), Ao = Lg("%Object.getOwnPropertyDescriptor%", !0);
  if (Ao)
    try {
      Ao([], "length");
    } catch {
      Ao = null;
    }
  Du.exports = Ao;
});

// ../node_modules/define-data-property/index.js
var Bu = J((JP, Fu) => {
  "use strict";
  var Lu = Po(), Ng = si(), dr = sr(), Nu = pi();
  Fu.exports = /* @__PURE__ */ a(function(t, r, o) {
    if (!t || typeof t != "object" && typeof t != "function")
      throw new dr("`obj` must be an object or a function`");
    if (typeof r != "string" && typeof r != "symbol")
      throw new dr("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new dr("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new dr("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new dr("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new dr("`loose`, if provided, must be a boolean");
    var i = arguments.length > 3 ? arguments[3] : null, n = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] :
    null, u = arguments.length > 6 ? arguments[6] : !1, c = !!Nu && Nu(t, r);
    if (Lu)
      Lu(t, r, {
        configurable: l === null && c ? c.configurable : !l,
        enumerable: i === null && c ? c.enumerable : !i,
        value: o,
        writable: n === null && c ? c.writable : !n
      });
    else if (u || !i && !n && !l)
      t[r] = o;
    else
      throw new Ng("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, "defineDataProperty");
});

// ../node_modules/has-property-descriptors/index.js
var zu = J((tA, Ru) => {
  "use strict";
  var di = Po(), Hu = /* @__PURE__ */ a(function() {
    return !!di;
  }, "hasPropertyDescriptors");
  Hu.hasArrayLengthDefineBug = /* @__PURE__ */ a(function() {
    if (!di)
      return null;
    try {
      return di([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, "hasArrayLengthDefineBug");
  Ru.exports = Hu;
});

// ../node_modules/set-function-length/index.js
var ju = J((oA, Ku) => {
  "use strict";
  var Fg = Dt(), Wu = Bu(), Bg = zu()(), $u = pi(), Vu = sr(), Hg = Fg("%Math.floor%");
  Ku.exports = /* @__PURE__ */ a(function(t, r) {
    if (typeof t != "function")
      throw new Vu("`fn` is not a function");
    if (typeof r != "number" || r < 0 || r > 4294967295 || Hg(r) !== r)
      throw new Vu("`length` must be a positive 32-bit integer");
    var o = arguments.length > 2 && !!arguments[2], i = !0, n = !0;
    if ("length" in t && $u) {
      var l = $u(t, "length");
      l && !l.configurable && (i = !1), l && !l.writable && (n = !1);
    }
    return (i || n || !o) && (Bg ? Wu(
      /** @type {Parameters<define>[0]} */
      t,
      "length",
      r,
      !0,
      !0
    ) : Wu(
      /** @type {Parameters<define>[0]} */
      t,
      "length",
      r
    )), t;
  }, "setFunctionLength");
});

// ../node_modules/call-bind/index.js
var Xu = J((iA, Mo) => {
  "use strict";
  var fi = _o(), Do = Dt(), Rg = ju(), zg = sr(), Gu = Do("%Function.prototype.apply%"), Yu = Do("%Function.prototype.call%"), Qu = Do("%Ref\
lect.apply%", !0) || fi.call(Yu, Gu), Uu = Po(), Wg = Do("%Math.max%");
  Mo.exports = /* @__PURE__ */ a(function(t) {
    if (typeof t != "function")
      throw new zg("a function is required");
    var r = Qu(fi, Yu, arguments);
    return Rg(
      r,
      1 + Wg(0, t.length - (arguments.length - 1)),
      !0
    );
  }, "callBind");
  var qu = /* @__PURE__ */ a(function() {
    return Qu(fi, Gu, arguments);
  }, "applyBind");
  Uu ? Uu(Mo.exports, "apply", { value: qu }) : Mo.exports.apply = qu;
});

// ../node_modules/call-bind/callBound.js
var tc = J((sA, ec) => {
  "use strict";
  var Zu = Dt(), Ju = Xu(), $g = Ju(Zu("String.prototype.indexOf"));
  ec.exports = /* @__PURE__ */ a(function(t, r) {
    var o = Zu(t, !!r);
    return typeof o == "function" && $g(t, ".prototype.") > -1 ? Ju(o) : o;
  }, "callBoundIntrinsic");
});

// (disabled):../node_modules/object-inspect/util.inspect
var rc = J(() => {
});

// ../node_modules/object-inspect/index.js
var Sc = J((pA, Ic) => {
  var wi = typeof Map == "function" && Map.prototype, mi = Object.getOwnPropertyDescriptor && wi ? Object.getOwnPropertyDescriptor(Map.prototype,
  "size") : null, No = wi && mi && typeof mi.get == "function" ? mi.get : null, oc = wi && Map.prototype.forEach, Ei = typeof Set == "functi\
on" && Set.prototype, hi = Object.getOwnPropertyDescriptor && Ei ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Fo = Ei &&
  hi && typeof hi.get == "function" ? hi.get : null, nc = Ei && Set.prototype.forEach, Vg = typeof WeakMap == "function" && WeakMap.prototype,
  Mr = Vg ? WeakMap.prototype.has : null, Kg = typeof WeakSet == "function" && WeakSet.prototype, Dr = Kg ? WeakSet.prototype.has : null, jg = typeof WeakRef ==
  "function" && WeakRef.prototype, ic = jg ? WeakRef.prototype.deref : null, Ug = Boolean.prototype.valueOf, qg = Object.prototype.toString,
  Gg = Function.prototype.toString, Yg = String.prototype.match, Ci = String.prototype.slice, yt = String.prototype.replace, Qg = String.prototype.
  toUpperCase, ac = String.prototype.toLowerCase, hc = RegExp.prototype.test, sc = Array.prototype.concat, ot = Array.prototype.join, Xg = Array.
  prototype.slice, lc = Math.floor, vi = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, gi = Object.getOwnPropertySymbols, bi = typeof Symbol ==
  "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, fr = typeof Symbol == "function" && typeof Symbol.iterator ==
  "object", Ne = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === fr || !0) ? Symbol.toStringTag : null, gc = Object.
  prototype.propertyIsEnumerable, uc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.
  prototype ? function(e) {
    return e.__proto__;
  } : null);
  function cc(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || hc.call(/e/, t))
      return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
      var o = e < 0 ? -lc(-e) : lc(e);
      if (o !== e) {
        var i = String(o), n = Ci.call(t, i.length + 1);
        return yt.call(i, r, "$&_") + "." + yt.call(yt.call(n, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return yt.call(t, r, "$&_");
  }
  a(cc, "addNumericSeparator");
  var xi = rc(), pc = xi.custom, dc = vc(pc) ? pc : null;
  Ic.exports = /* @__PURE__ */ a(function e(t, r, o, i) {
    var n = r || {};
    if (gt(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (gt(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !==
    null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var l = gt(n, "customInspect") ? n.customInspect : !0;
    if (typeof l != "boolean" && l !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (gt(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (gt(n, "numericSeparator") && typeof n.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var u = n.numericSeparator;
    if (typeof t > "u")
      return "undefined";
    if (t === null)
      return "null";
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "string")
      return xc(t, n);
    if (typeof t == "number") {
      if (t === 0)
        return 1 / 0 / t > 0 ? "0" : "-0";
      var c = String(t);
      return u ? cc(t, c) : c;
    }
    if (typeof t == "bigint") {
      var d = String(t) + "n";
      return u ? cc(t, d) : d;
    }
    var p = typeof n.depth > "u" ? 5 : n.depth;
    if (typeof o > "u" && (o = 0), o >= p && p > 0 && typeof t == "object")
      return Ii(t) ? "[Array]" : "[Object]";
    var h = hy(n, o);
    if (typeof i > "u")
      i = [];
    else if (bc(i, t) >= 0)
      return "[Circular]";
    function f(D, L, $) {
      if (L && (i = Xg.call(i), i.push(L)), $) {
        var X = {
          depth: n.depth
        };
        return gt(n, "quoteStyle") && (X.quoteStyle = n.quoteStyle), e(D, X, o + 1, i);
      }
      return e(D, n, o + 1, i);
    }
    if (a(f, "inspect"), typeof t == "function" && !fc(t)) {
      var g = ay(t), m = Lo(t, f);
      return "[Function" + (g ? ": " + g : " (anonymous)") + "]" + (m.length > 0 ? " { " + ot.call(m, ", ") + " }" : "");
    }
    if (vc(t)) {
      var v = fr ? yt.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : bi.call(t);
      return typeof t == "object" && !fr ? Ar(v) : v;
    }
    if (dy(t)) {
      for (var S = "<" + ac.call(String(t.nodeName)), C = t.attributes || [], y = 0; y < C.length; y++)
        S += " " + C[y].name + "=" + yc(Zg(C[y].value), "double", n);
      return S += ">", t.childNodes && t.childNodes.length && (S += "..."), S += "</" + ac.call(String(t.nodeName)) + ">", S;
    }
    if (Ii(t)) {
      if (t.length === 0)
        return "[]";
      var b = Lo(t, f);
      return h && !my(b) ? "[" + Si(b, h) + "]" : "[ " + ot.call(b, ", ") + " ]";
    }
    if (ey(t)) {
      var I = Lo(t, f);
      return !("cause" in Error.prototype) && "cause" in t && !gc.call(t, "cause") ? "{ [" + String(t) + "] " + ot.call(sc.call("[cause]: " +
      f(t.cause), I), ", ") + " }" : I.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ot.call(I, ", ") + " }";
    }
    if (typeof t == "object" && l) {
      if (dc && typeof t[dc] == "function" && xi)
        return xi(t, { depth: p - o });
      if (l !== "symbol" && typeof t.inspect == "function")
        return t.inspect();
    }
    if (sy(t)) {
      var E = [];
      return oc && oc.call(t, function(D, L) {
        E.push(f(L, t, !0) + " => " + f(D, t));
      }), mc("Map", No.call(t), E, h);
    }
    if (cy(t)) {
      var _ = [];
      return nc && nc.call(t, function(D) {
        _.push(f(D, t));
      }), mc("Set", Fo.call(t), _, h);
    }
    if (ly(t))
      return yi("WeakMap");
    if (py(t))
      return yi("WeakSet");
    if (uy(t))
      return yi("WeakRef");
    if (ry(t))
      return Ar(f(Number(t)));
    if (ny(t))
      return Ar(f(vi.call(t)));
    if (oy(t))
      return Ar(Ug.call(t));
    if (ty(t))
      return Ar(f(String(t)));
    if (typeof window < "u" && t === window)
      return "{ [object Window] }";
    if (t === global)
      return "{ [object globalThis] }";
    if (!Jg(t) && !fc(t)) {
      var k = Lo(t, f), O = uc ? uc(t) === Object.prototype : t instanceof Object || t.constructor === Object, w = t instanceof Object ? "" :
      "null prototype", T = !O && Ne && Object(t) === t && Ne in t ? Ci.call(vt(t), 8, -1) : w ? "Object" : "", P = O || typeof t.constructor !=
      "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", M = P + (T || w ? "[" + ot.call(sc.call([], T || [], w || []), "\
: ") + "] " : "");
      return k.length === 0 ? M + "{}" : h ? M + "{" + Si(k, h) + "}" : M + "{ " + ot.call(k, ", ") + " }";
    }
    return String(t);
  }, "inspect_");
  function yc(e, t, r) {
    var o = (r.quoteStyle || t) === "double" ? '"' : "'";
    return o + e + o;
  }
  a(yc, "wrapQuotes");
  function Zg(e) {
    return yt.call(String(e), /"/g, "&quot;");
  }
  a(Zg, "quote");
  function Ii(e) {
    return vt(e) === "[object Array]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(Ii, "isArray");
  function Jg(e) {
    return vt(e) === "[object Date]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(Jg, "isDate");
  function fc(e) {
    return vt(e) === "[object RegExp]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(fc, "isRegExp");
  function ey(e) {
    return vt(e) === "[object Error]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(ey, "isError");
  function ty(e) {
    return vt(e) === "[object String]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(ty, "isString");
  function ry(e) {
    return vt(e) === "[object Number]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(ry, "isNumber");
  function oy(e) {
    return vt(e) === "[object Boolean]" && (!Ne || !(typeof e == "object" && Ne in e));
  }
  a(oy, "isBoolean");
  function vc(e) {
    if (fr)
      return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol")
      return !0;
    if (!e || typeof e != "object" || !bi)
      return !1;
    try {
      return bi.call(e), !0;
    } catch {
    }
    return !1;
  }
  a(vc, "isSymbol");
  function ny(e) {
    if (!e || typeof e != "object" || !vi)
      return !1;
    try {
      return vi.call(e), !0;
    } catch {
    }
    return !1;
  }
  a(ny, "isBigInt");
  var iy = Object.prototype.hasOwnProperty || function(e) {
    return e in this;
  };
  function gt(e, t) {
    return iy.call(e, t);
  }
  a(gt, "has");
  function vt(e) {
    return qg.call(e);
  }
  a(vt, "toStr");
  function ay(e) {
    if (e.name)
      return e.name;
    var t = Yg.call(Gg.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
  }
  a(ay, "nameOf");
  function bc(e, t) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0, o = e.length; r < o; r++)
      if (e[r] === t)
        return r;
    return -1;
  }
  a(bc, "indexOf");
  function sy(e) {
    if (!No || !e || typeof e != "object")
      return !1;
    try {
      No.call(e);
      try {
        Fo.call(e);
      } catch {
        return !0;
      }
      return e instanceof Map;
    } catch {
    }
    return !1;
  }
  a(sy, "isMap");
  function ly(e) {
    if (!Mr || !e || typeof e != "object")
      return !1;
    try {
      Mr.call(e, Mr);
      try {
        Dr.call(e, Dr);
      } catch {
        return !0;
      }
      return e instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  a(ly, "isWeakMap");
  function uy(e) {
    if (!ic || !e || typeof e != "object")
      return !1;
    try {
      return ic.call(e), !0;
    } catch {
    }
    return !1;
  }
  a(uy, "isWeakRef");
  function cy(e) {
    if (!Fo || !e || typeof e != "object")
      return !1;
    try {
      Fo.call(e);
      try {
        No.call(e);
      } catch {
        return !0;
      }
      return e instanceof Set;
    } catch {
    }
    return !1;
  }
  a(cy, "isSet");
  function py(e) {
    if (!Dr || !e || typeof e != "object")
      return !1;
    try {
      Dr.call(e, Dr);
      try {
        Mr.call(e, Mr);
      } catch {
        return !0;
      }
      return e instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  a(py, "isWeakSet");
  function dy(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.
    getAttribute == "function";
  }
  a(dy, "isElement");
  function xc(e, t) {
    if (e.length > t.maxStringLength) {
      var r = e.length - t.maxStringLength, o = "... " + r + " more character" + (r > 1 ? "s" : "");
      return xc(Ci.call(e, 0, t.maxStringLength), t) + o;
    }
    var i = yt.call(yt.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, fy);
    return yc(i, "single", t);
  }
  a(xc, "inspectString");
  function fy(e) {
    var t = e.charCodeAt(0), r = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[t];
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Qg.call(t.toString(16));
  }
  a(fy, "lowbyte");
  function Ar(e) {
    return "Object(" + e + ")";
  }
  a(Ar, "markBoxed");
  function yi(e) {
    return e + " { ? }";
  }
  a(yi, "weakCollectionOf");
  function mc(e, t, r, o) {
    var i = o ? Si(r, o) : ot.call(r, ", ");
    return e + " (" + t + ") {" + i + "}";
  }
  a(mc, "collectionOf");
  function my(e) {
    for (var t = 0; t < e.length; t++)
      if (bc(e[t], `
`) >= 0)
        return !1;
    return !0;
  }
  a(my, "singleLineValues");
  function hy(e, t) {
    var r;
    if (e.indent === "	")
      r = "	";
    else if (typeof e.indent == "number" && e.indent > 0)
      r = ot.call(Array(e.indent + 1), " ");
    else
      return null;
    return {
      base: r,
      prev: ot.call(Array(t + 1), r)
    };
  }
  a(hy, "getIndent");
  function Si(e, t) {
    if (e.length === 0)
      return "";
    var r = `
` + t.prev + t.base;
    return r + ot.call(e, "," + r) + `
` + t.prev;
  }
  a(Si, "indentedJoin");
  function Lo(e, t) {
    var r = Ii(e), o = [];
    if (r) {
      o.length = e.length;
      for (var i = 0; i < e.length; i++)
        o[i] = gt(e, i) ? t(e[i], e) : "";
    }
    var n = typeof gi == "function" ? gi(e) : [], l;
    if (fr) {
      l = {};
      for (var u = 0; u < n.length; u++)
        l["$" + n[u]] = n[u];
    }
    for (var c in e)
      gt(e, c) && (r && String(Number(c)) === c && c < e.length || fr && l["$" + c] instanceof Symbol || (hc.call(/[^\w$]/, c) ? o.push(t(c,
      e) + ": " + t(e[c], e)) : o.push(c + ": " + t(e[c], e))));
    if (typeof gi == "function")
      for (var d = 0; d < n.length; d++)
        gc.call(e, n[d]) && o.push("[" + t(n[d]) + "]: " + t(e[n[d]], e));
    return o;
  }
  a(Lo, "arrObjKeys");
});

// ../node_modules/side-channel/index.js
var Cc = J((fA, Ec) => {
  "use strict";
  var wc = Dt(), mr = tc(), gy = Sc(), yy = sr(), Bo = wc("%WeakMap%", !0), Ho = wc("%Map%", !0), vy = mr("WeakMap.prototype.get", !0), by = mr(
  "WeakMap.prototype.set", !0), xy = mr("WeakMap.prototype.has", !0), Iy = mr("Map.prototype.get", !0), Sy = mr("Map.prototype.set", !0), wy = mr(
  "Map.prototype.has", !0), _i = /* @__PURE__ */ a(function(e, t) {
    for (var r = e, o; (o = r.next) !== null; r = o)
      if (o.key === t)
        return r.next = o.next, o.next = /** @type {NonNullable<typeof list.next>} */
        e.next, e.next = o, o;
  }, "listGetNode"), Ey = /* @__PURE__ */ a(function(e, t) {
    var r = _i(e, t);
    return r && r.value;
  }, "listGet"), Cy = /* @__PURE__ */ a(function(e, t, r) {
    var o = _i(e, t);
    o ? o.value = r : e.next = /** @type {import('.').ListNode<typeof value>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: t,
      next: e.next,
      value: r
    };
  }, "listSet"), _y = /* @__PURE__ */ a(function(e, t) {
    return !!_i(e, t);
  }, "listHas");
  Ec.exports = /* @__PURE__ */ a(function() {
    var t, r, o, i = {
      assert: /* @__PURE__ */ a(function(n) {
        if (!i.has(n))
          throw new yy("Side channel does not contain " + gy(n));
      }, "assert"),
      get: /* @__PURE__ */ a(function(n) {
        if (Bo && n && (typeof n == "object" || typeof n == "function")) {
          if (t)
            return vy(t, n);
        } else if (Ho) {
          if (r)
            return Iy(r, n);
        } else if (o)
          return Ey(o, n);
      }, "get"),
      has: /* @__PURE__ */ a(function(n) {
        if (Bo && n && (typeof n == "object" || typeof n == "function")) {
          if (t)
            return xy(t, n);
        } else if (Ho) {
          if (r)
            return wy(r, n);
        } else if (o)
          return _y(o, n);
        return !1;
      }, "has"),
      set: /* @__PURE__ */ a(function(n, l) {
        Bo && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new Bo()), by(t, n, l)) : Ho ? (r || (r = new Ho()), Sy(r, n,
        l)) : (o || (o = { key: {}, next: null }), Cy(o, n, l));
      }, "set")
    };
    return i;
  }, "getSideChannel");
});

// ../node_modules/qs/lib/formats.js
var Ro = J((hA, _c) => {
  "use strict";
  var Ty = String.prototype.replace, ky = /%20/g, Ti = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  _c.exports = {
    default: Ti.RFC3986,
    formatters: {
      RFC1738: /* @__PURE__ */ a(function(e) {
        return Ty.call(e, ky, "+");
      }, "RFC1738"),
      RFC3986: /* @__PURE__ */ a(function(e) {
        return String(e);
      }, "RFC3986")
    },
    RFC1738: Ti.RFC1738,
    RFC3986: Ti.RFC3986
  };
});

// ../node_modules/qs/lib/utils.js
var Pi = J((yA, kc) => {
  "use strict";
  var Oy = Ro(), ki = Object.prototype.hasOwnProperty, Lt = Array.isArray, nt = function() {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  }(), Py = /* @__PURE__ */ a(function(t) {
    for (; t.length > 1; ) {
      var r = t.pop(), o = r.obj[r.prop];
      if (Lt(o)) {
        for (var i = [], n = 0; n < o.length; ++n)
          typeof o[n] < "u" && i.push(o[n]);
        r.obj[r.prop] = i;
      }
    }
  }, "compactQueue"), Tc = /* @__PURE__ */ a(function(t, r) {
    for (var o = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < t.length; ++i)
      typeof t[i] < "u" && (o[i] = t[i]);
    return o;
  }, "arrayToObject"), Ay = /* @__PURE__ */ a(function e(t, r, o) {
    if (!r)
      return t;
    if (typeof r != "object") {
      if (Lt(t))
        t.push(r);
      else if (t && typeof t == "object")
        (o && (o.plainObjects || o.allowPrototypes) || !ki.call(Object.prototype, r)) && (t[r] = !0);
      else
        return [t, r];
      return t;
    }
    if (!t || typeof t != "object")
      return [t].concat(r);
    var i = t;
    return Lt(t) && !Lt(r) && (i = Tc(t, o)), Lt(t) && Lt(r) ? (r.forEach(function(n, l) {
      if (ki.call(t, l)) {
        var u = t[l];
        u && typeof u == "object" && n && typeof n == "object" ? t[l] = e(u, n, o) : t.push(n);
      } else
        t[l] = n;
    }), t) : Object.keys(r).reduce(function(n, l) {
      var u = r[l];
      return ki.call(n, l) ? n[l] = e(n[l], u, o) : n[l] = u, n;
    }, i);
  }, "merge"), My = /* @__PURE__ */ a(function(t, r) {
    return Object.keys(r).reduce(function(o, i) {
      return o[i] = r[i], o;
    }, t);
  }, "assignSingleSource"), Dy = /* @__PURE__ */ a(function(e, t, r) {
    var o = e.replace(/\+/g, " ");
    if (r === "iso-8859-1")
      return o.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }, "decode"), Oi = 1024, Ly = /* @__PURE__ */ a(function(t, r, o, i, n) {
    if (t.length === 0)
      return t;
    var l = t;
    if (typeof t == "symbol" ? l = Symbol.prototype.toString.call(t) : typeof t != "string" && (l = String(t)), o === "iso-8859-1")
      return escape(l).replace(/%u[0-9a-f]{4}/gi, function(g) {
        return "%26%23" + parseInt(g.slice(2), 16) + "%3B";
      });
    for (var u = "", c = 0; c < l.length; c += Oi) {
      for (var d = l.length >= Oi ? l.slice(c, c + Oi) : l, p = [], h = 0; h < d.length; ++h) {
        var f = d.charCodeAt(h);
        if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || n === Oy.RFC1738 &&
        (f === 40 || f === 41)) {
          p[p.length] = d.charAt(h);
          continue;
        }
        if (f < 128) {
          p[p.length] = nt[f];
          continue;
        }
        if (f < 2048) {
          p[p.length] = nt[192 | f >> 6] + nt[128 | f & 63];
          continue;
        }
        if (f < 55296 || f >= 57344) {
          p[p.length] = nt[224 | f >> 12] + nt[128 | f >> 6 & 63] + nt[128 | f & 63];
          continue;
        }
        h += 1, f = 65536 + ((f & 1023) << 10 | d.charCodeAt(h) & 1023), p[p.length] = nt[240 | f >> 18] + nt[128 | f >> 12 & 63] + nt[128 |
        f >> 6 & 63] + nt[128 | f & 63];
      }
      u += p.join("");
    }
    return u;
  }, "encode"), Ny = /* @__PURE__ */ a(function(t) {
    for (var r = [{ obj: { o: t }, prop: "o" }], o = [], i = 0; i < r.length; ++i)
      for (var n = r[i], l = n.obj[n.prop], u = Object.keys(l), c = 0; c < u.length; ++c) {
        var d = u[c], p = l[d];
        typeof p == "object" && p !== null && o.indexOf(p) === -1 && (r.push({ obj: l, prop: d }), o.push(p));
      }
    return Py(r), t;
  }, "compact"), Fy = /* @__PURE__ */ a(function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  }, "isRegExp"), By = /* @__PURE__ */ a(function(t) {
    return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
  }, "isBuffer"), Hy = /* @__PURE__ */ a(function(t, r) {
    return [].concat(t, r);
  }, "combine"), Ry = /* @__PURE__ */ a(function(t, r) {
    if (Lt(t)) {
      for (var o = [], i = 0; i < t.length; i += 1)
        o.push(r(t[i]));
      return o;
    }
    return r(t);
  }, "maybeMap");
  kc.exports = {
    arrayToObject: Tc,
    assign: My,
    combine: Hy,
    compact: Ny,
    decode: Dy,
    encode: Ly,
    isBuffer: By,
    isRegExp: Fy,
    maybeMap: Ry,
    merge: Ay
  };
});

// ../node_modules/qs/lib/stringify.js
var Lc = J((bA, Dc) => {
  "use strict";
  var Pc = Cc(), zo = Pi(), Lr = Ro(), zy = Object.prototype.hasOwnProperty, Ac = {
    brackets: /* @__PURE__ */ a(function(t) {
      return t + "[]";
    }, "brackets"),
    comma: "comma",
    indices: /* @__PURE__ */ a(function(t, r) {
      return t + "[" + r + "]";
    }, "indices"),
    repeat: /* @__PURE__ */ a(function(t) {
      return t;
    }, "repeat")
  }, it = Array.isArray, Wy = Array.prototype.push, Mc = /* @__PURE__ */ a(function(e, t) {
    Wy.apply(e, it(t) ? t : [t]);
  }, "pushToArray"), $y = Date.prototype.toISOString, Oc = Lr.default, Ce = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: zo.encode,
    encodeValuesOnly: !1,
    format: Oc,
    formatter: Lr.formatters[Oc],
    // deprecated
    indices: !1,
    serializeDate: /* @__PURE__ */ a(function(t) {
      return $y.call(t);
    }, "serializeDate"),
    skipNulls: !1,
    strictNullHandling: !1
  }, Vy = /* @__PURE__ */ a(function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
  }, "isNonNullishPrimitive"), Ai = {}, Ky = /* @__PURE__ */ a(function e(t, r, o, i, n, l, u, c, d, p, h, f, g, m, v, S, C, y) {
    for (var b = t, I = y, E = 0, _ = !1; (I = I.get(Ai)) !== void 0 && !_; ) {
      var k = I.get(t);
      if (E += 1, typeof k < "u") {
        if (k === E)
          throw new RangeError("Cyclic object value");
        _ = !0;
      }
      typeof I.get(Ai) > "u" && (E = 0);
    }
    if (typeof p == "function" ? b = p(r, b) : b instanceof Date ? b = g(b) : o === "comma" && it(b) && (b = zo.maybeMap(b, function(B) {
      return B instanceof Date ? g(B) : B;
    })), b === null) {
      if (l)
        return d && !S ? d(r, Ce.encoder, C, "key", m) : r;
      b = "";
    }
    if (Vy(b) || zo.isBuffer(b)) {
      if (d) {
        var O = S ? r : d(r, Ce.encoder, C, "key", m);
        return [v(O) + "=" + v(d(b, Ce.encoder, C, "value", m))];
      }
      return [v(r) + "=" + v(String(b))];
    }
    var w = [];
    if (typeof b > "u")
      return w;
    var T;
    if (o === "comma" && it(b))
      S && d && (b = zo.maybeMap(b, d)), T = [{ value: b.length > 0 ? b.join(",") || null : void 0 }];
    else if (it(p))
      T = p;
    else {
      var P = Object.keys(b);
      T = h ? P.sort(h) : P;
    }
    var M = c ? r.replace(/\./g, "%2E") : r, D = i && it(b) && b.length === 1 ? M + "[]" : M;
    if (n && it(b) && b.length === 0)
      return D + "[]";
    for (var L = 0; L < T.length; ++L) {
      var $ = T[L], X = typeof $ == "object" && typeof $.value < "u" ? $.value : b[$];
      if (!(u && X === null)) {
        var q = f && c ? $.replace(/\./g, "%2E") : $, R = it(b) ? typeof o == "function" ? o(D, q) : D : D + (f ? "." + q : "[" + q + "]");
        y.set(t, E);
        var z = Pc();
        z.set(Ai, y), Mc(w, e(
          X,
          R,
          o,
          i,
          n,
          l,
          u,
          c,
          o === "comma" && S && it(b) ? null : d,
          p,
          h,
          f,
          g,
          m,
          v,
          S,
          C,
          z
        ));
      }
    }
    return w;
  }, "stringify"), jy = /* @__PURE__ */ a(function(t) {
    if (!t)
      return Ce;
    if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var r = t.charset || Ce.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var o = Lr.default;
    if (typeof t.format < "u") {
      if (!zy.call(Lr.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      o = t.format;
    }
    var i = Lr.formatters[o], n = Ce.filter;
    (typeof t.filter == "function" || it(t.filter)) && (n = t.filter);
    var l;
    if (t.arrayFormat in Ac ? l = t.arrayFormat : "indices" in t ? l = t.indices ? "indices" : "repeat" : l = Ce.arrayFormat, "commaRoundTri\
p" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : Ce.allowDots : !!t.allowDots;
    return {
      addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : Ce.addQueryPrefix,
      allowDots: u,
      allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : Ce.allowEmptyArrays,
      arrayFormat: l,
      charset: r,
      charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : Ce.charsetSentinel,
      commaRoundTrip: t.commaRoundTrip,
      delimiter: typeof t.delimiter > "u" ? Ce.delimiter : t.delimiter,
      encode: typeof t.encode == "boolean" ? t.encode : Ce.encode,
      encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : Ce.encodeDotInKeys,
      encoder: typeof t.encoder == "function" ? t.encoder : Ce.encoder,
      encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : Ce.encodeValuesOnly,
      filter: n,
      format: o,
      formatter: i,
      serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : Ce.serializeDate,
      skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : Ce.skipNulls,
      sort: typeof t.sort == "function" ? t.sort : null,
      strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : Ce.strictNullHandling
    };
  }, "normalizeStringifyOptions");
  Dc.exports = function(e, t) {
    var r = e, o = jy(t), i, n;
    typeof o.filter == "function" ? (n = o.filter, r = n("", r)) : it(o.filter) && (n = o.filter, i = n);
    var l = [];
    if (typeof r != "object" || r === null)
      return "";
    var u = Ac[o.arrayFormat], c = u === "comma" && o.commaRoundTrip;
    i || (i = Object.keys(r)), o.sort && i.sort(o.sort);
    for (var d = Pc(), p = 0; p < i.length; ++p) {
      var h = i[p];
      o.skipNulls && r[h] === null || Mc(l, Ky(
        r[h],
        h,
        u,
        c,
        o.allowEmptyArrays,
        o.strictNullHandling,
        o.skipNulls,
        o.encodeDotInKeys,
        o.encode ? o.encoder : null,
        o.filter,
        o.sort,
        o.allowDots,
        o.serializeDate,
        o.format,
        o.formatter,
        o.encodeValuesOnly,
        o.charset,
        d
      ));
    }
    var f = l.join(o.delimiter), g = o.addQueryPrefix === !0 ? "?" : "";
    return o.charsetSentinel && (o.charset === "iso-8859-1" ? g += "utf8=%26%2310003%3B&" : g += "utf8=%E2%9C%93&"), f.length > 0 ? g + f : "";
  };
});

// ../node_modules/qs/lib/parse.js
var Bc = J((IA, Fc) => {
  "use strict";
  var hr = Pi(), Mi = Object.prototype.hasOwnProperty, Uy = Array.isArray, xe = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: hr.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  }, qy = /* @__PURE__ */ a(function(e) {
    return e.replace(/&#(\d+);/g, function(t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  }, "interpretNumericEntities"), Nc = /* @__PURE__ */ a(function(e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
  }, "parseArrayValue"), Gy = "utf8=%26%2310003%3B", Yy = "utf8=%E2%9C%93", Qy = /* @__PURE__ */ a(function(t, r) {
    var o = { __proto__: null }, i = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
    i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var n = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, l = i.split(r.delimiter, n), u = -1, c, d = r.charset;
    if (r.charsetSentinel)
      for (c = 0; c < l.length; ++c)
        l[c].indexOf("utf8=") === 0 && (l[c] === Yy ? d = "utf-8" : l[c] === Gy && (d = "iso-8859-1"), u = c, c = l.length);
    for (c = 0; c < l.length; ++c)
      if (c !== u) {
        var p = l[c], h = p.indexOf("]="), f = h === -1 ? p.indexOf("=") : h + 1, g, m;
        f === -1 ? (g = r.decoder(p, xe.decoder, d, "key"), m = r.strictNullHandling ? null : "") : (g = r.decoder(p.slice(0, f), xe.decoder,
        d, "key"), m = hr.maybeMap(
          Nc(p.slice(f + 1), r),
          function(S) {
            return r.decoder(S, xe.decoder, d, "value");
          }
        )), m && r.interpretNumericEntities && d === "iso-8859-1" && (m = qy(m)), p.indexOf("[]=") > -1 && (m = Uy(m) ? [m] : m);
        var v = Mi.call(o, g);
        v && r.duplicates === "combine" ? o[g] = hr.combine(o[g], m) : (!v || r.duplicates === "last") && (o[g] = m);
      }
    return o;
  }, "parseQueryStringValues"), Xy = /* @__PURE__ */ a(function(e, t, r, o) {
    for (var i = o ? t : Nc(t, r), n = e.length - 1; n >= 0; --n) {
      var l, u = e[n];
      if (u === "[]" && r.parseArrays)
        l = r.allowEmptyArrays && (i === "" || r.strictNullHandling && i === null) ? [] : [].concat(i);
      else {
        l = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var c = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, d = r.decodeDotInKeys ? c.replace(/%2E/g, ".") :
        c, p = parseInt(d, 10);
        !r.parseArrays && d === "" ? l = { 0: i } : !isNaN(p) && u !== d && String(p) === d && p >= 0 && r.parseArrays && p <= r.arrayLimit ?
        (l = [], l[p] = i) : d !== "__proto__" && (l[d] = i);
      }
      i = l;
    }
    return i;
  }, "parseObject"), Zy = /* @__PURE__ */ a(function(t, r, o, i) {
    if (t) {
      var n = o.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, l = /(\[[^[\]]*])/, u = /(\[[^[\]]*])/g, c = o.depth > 0 && l.exec(n), d = c ?
      n.slice(0, c.index) : n, p = [];
      if (d) {
        if (!o.plainObjects && Mi.call(Object.prototype, d) && !o.allowPrototypes)
          return;
        p.push(d);
      }
      for (var h = 0; o.depth > 0 && (c = u.exec(n)) !== null && h < o.depth; ) {
        if (h += 1, !o.plainObjects && Mi.call(Object.prototype, c[1].slice(1, -1)) && !o.allowPrototypes)
          return;
        p.push(c[1]);
      }
      return c && p.push("[" + n.slice(c.index) + "]"), Xy(p, r, o, i);
    }
  }, "parseQueryStringKeys"), Jy = /* @__PURE__ */ a(function(t) {
    if (!t)
      return xe;
    if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = typeof t.charset > "u" ? xe.charset : t.charset, o = typeof t.duplicates > "u" ? xe.duplicates : t.duplicates;
    if (o !== "combine" && o !== "first" && o !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var i = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : xe.allowDots : !!t.allowDots;
    return {
      allowDots: i,
      allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : xe.allowEmptyArrays,
      allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : xe.allowPrototypes,
      allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : xe.allowSparse,
      arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : xe.arrayLimit,
      charset: r,
      charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : xe.charsetSentinel,
      comma: typeof t.comma == "boolean" ? t.comma : xe.comma,
      decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : xe.decodeDotInKeys,
      decoder: typeof t.decoder == "function" ? t.decoder : xe.decoder,
      delimiter: typeof t.delimiter == "string" || hr.isRegExp(t.delimiter) ? t.delimiter : xe.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : xe.depth,
      duplicates: o,
      ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : xe.interpretNumericEntities,
      parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : xe.parameterLimit,
      parseArrays: t.parseArrays !== !1,
      plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : xe.plainObjects,
      strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : xe.strictNullHandling
    };
  }, "normalizeParseOptions");
  Fc.exports = function(e, t) {
    var r = Jy(t);
    if (e === "" || e === null || typeof e > "u")
      return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var o = typeof e == "string" ? Qy(e, r) : e, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n = Object.keys(o), l = 0; l <
    n.length; ++l) {
      var u = n[l], c = Zy(u, o[u], r, typeof e == "string");
      i = hr.merge(i, c, r);
    }
    return r.allowSparse === !0 ? i : hr.compact(i);
  };
});

// ../node_modules/qs/lib/index.js
var Rc = J((wA, Hc) => {
  "use strict";
  var ev = Lc(), tv = Bc(), rv = Ro();
  Hc.exports = {
    formats: rv,
    parse: tv,
    stringify: ev
  };
});

// ../node_modules/toggle-selection/index.js
var jc = J((zA, Kc) => {
  Kc.exports = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, r = [], o = 0; o < e.rangeCount; o++)
      r.push(e.getRangeAt(o));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(i) {
        e.addRange(i);
      }), t && t.focus();
    };
  };
});

// ../node_modules/copy-to-clipboard/index.js
var Gc = J((WA, qc) => {
  "use strict";
  var lv = jc(), Uc = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, uv = "Copy to clipboard: #{key}, Enter";
  function cv(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(cv, "format");
  function pv(e, t) {
    var r, o, i, n, l, u, c = !1;
    t || (t = {}), r = t.debug || !1;
    try {
      i = lv(), n = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(p) {
        if (p.stopPropagation(), t.format)
          if (p.preventDefault(), typeof p.clipboardData > "u") {
            r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var h = Uc[t.format] || Uc.default;
            window.clipboardData.setData(h, e);
          } else
            p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
        t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
      }), document.body.appendChild(u), n.selectNodeContents(u), l.addRange(n);
      var d = document.execCommand("copy");
      if (!d)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (p) {
      r && console.error("unable to copy using execCommand: ", p), r && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (h) {
        r && console.error("unable to copy using clipboardData: ", h), r && console.error("falling back to prompt"), o = cv("message" in t ?
        t.message : uv), window.prompt(o, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(n) : l.removeAllRanges()), u && document.body.removeChild(u), i();
    }
    return c;
  }
  a(pv, "copy");
  qc.exports = pv;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var hd = J((fe) => {
  "use strict";
  var Vi = Symbol.for("react.element"), Ki = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mo\
de"), Yo = Symbol.for("react.profiler"), Qo = Symbol.for("react.provider"), Xo = Symbol.for("react.context"), Nb = Symbol.for("react.server_\
context"), Zo = Symbol.for("react.forward_ref"), Jo = Symbol.for("react.suspense"), en = Symbol.for("react.suspense_list"), tn = Symbol.for(
  "react.memo"), rn = Symbol.for("react.lazy"), Fb = Symbol.for("react.offscreen"), md;
  md = Symbol.for("react.module.reference");
  function qe(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Vi:
          switch (e = e.type, e) {
            case qo:
            case Yo:
            case Go:
            case Jo:
            case en:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Nb:
                case Xo:
                case Zo:
                case rn:
                case tn:
                case Qo:
                  return e;
                default:
                  return t;
              }
          }
        case Ki:
          return t;
      }
    }
  }
  a(qe, "v");
  fe.ContextConsumer = Xo;
  fe.ContextProvider = Qo;
  fe.Element = Vi;
  fe.ForwardRef = Zo;
  fe.Fragment = qo;
  fe.Lazy = rn;
  fe.Memo = tn;
  fe.Portal = Ki;
  fe.Profiler = Yo;
  fe.StrictMode = Go;
  fe.Suspense = Jo;
  fe.SuspenseList = en;
  fe.isAsyncMode = function() {
    return !1;
  };
  fe.isConcurrentMode = function() {
    return !1;
  };
  fe.isContextConsumer = function(e) {
    return qe(e) === Xo;
  };
  fe.isContextProvider = function(e) {
    return qe(e) === Qo;
  };
  fe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Vi;
  };
  fe.isForwardRef = function(e) {
    return qe(e) === Zo;
  };
  fe.isFragment = function(e) {
    return qe(e) === qo;
  };
  fe.isLazy = function(e) {
    return qe(e) === rn;
  };
  fe.isMemo = function(e) {
    return qe(e) === tn;
  };
  fe.isPortal = function(e) {
    return qe(e) === Ki;
  };
  fe.isProfiler = function(e) {
    return qe(e) === Yo;
  };
  fe.isStrictMode = function(e) {
    return qe(e) === Go;
  };
  fe.isSuspense = function(e) {
    return qe(e) === Jo;
  };
  fe.isSuspenseList = function(e) {
    return qe(e) === en;
  };
  fe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === qo || e === Yo || e === Go || e === Jo || e === en || e === Fb || typeof e ==
    "object" && e !== null && (e.$$typeof === rn || e.$$typeof === tn || e.$$typeof === Qo || e.$$typeof === Xo || e.$$typeof === Zo || e.$$typeof ===
    md || e.getModuleId !== void 0);
  };
  fe.typeOf = qe;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var yd = J((rF, gd) => {
  "use strict";
  gd.exports = hd();
});

// ../node_modules/fuse.js/dist/fuse.js
var _f = J((Vr, Na) => {
  (function(e, t) {
    typeof Vr == "object" && typeof Na == "object" ? Na.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof Vr ==
    "object" ? Vr.Fuse = t() : e.Fuse = t();
  })(Vr, function() {
    return function(e) {
      var t = {};
      function r(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = { i: o, l: !1, exports: {} };
        return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
      }
      return a(r, "r"), r.m = e, r.c = t, r.d = function(o, i, n) {
        r.o(o, i) || Object.defineProperty(o, i, { enumerable: !0, get: n });
      }, r.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        o, "__esModule", { value: !0 });
      }, r.t = function(o, i) {
        if (1 & i && (o = r(o)), 8 & i || 4 & i && typeof o == "object" && o && o.__esModule) return o;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: o }), 2 & i && typeof o != "string") for (var l in o) r.d(n,
        l, (function(u) {
          return o[u];
        }).bind(null, l));
        return n;
      }, r.n = function(o) {
        var i = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return r.d(i, "a", i), i;
      }, r.o = function(o, i) {
        return Object.prototype.hasOwnProperty.call(o, i);
      }, r.p = "", r(r.s = 0);
    }([function(e, t, r) {
      function o(p) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
          return typeof h;
        } : function(h) {
          return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
        })(p);
      }
      a(o, "n");
      function i(p, h) {
        for (var f = 0; f < h.length; f++) {
          var g = h[f];
          g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(p, g.key, g);
        }
      }
      a(i, "o");
      var n = r(1), l = r(7), u = l.get, c = (l.deepValue, l.isArray), d = function() {
        function p(m, v) {
          var S = v.location, C = S === void 0 ? 0 : S, y = v.distance, b = y === void 0 ? 100 : y, I = v.threshold, E = I === void 0 ? 0.6 :
          I, _ = v.maxPatternLength, k = _ === void 0 ? 32 : _, O = v.caseSensitive, w = O !== void 0 && O, T = v.tokenSeparator, P = T === void 0 ?
          / +/g : T, M = v.findAllMatches, D = M !== void 0 && M, L = v.minMatchCharLength, $ = L === void 0 ? 1 : L, X = v.id, q = X === void 0 ?
          null : X, R = v.keys, z = R === void 0 ? [] : R, B = v.shouldSort, re = B === void 0 || B, H = v.getFn, N = H === void 0 ? u : H, F = v.
          sortFn, W = F === void 0 ? function(me, Se) {
            return me.score - Se.score;
          } : F, Y = v.tokenize, oe = Y !== void 0 && Y, ee = v.matchAllTokens, le = ee !== void 0 && ee, se = v.includeMatches, pe = se !==
          void 0 && se, ce = v.includeScore, Ie = ce !== void 0 && ce, ge = v.verbose, Pe = ge !== void 0 && ge;
          (function(me, Se) {
            if (!(me instanceof Se)) throw new TypeError("Cannot call a class as a function");
          })(this, p), this.options = { location: C, distance: b, threshold: E, maxPatternLength: k, isCaseSensitive: w, tokenSeparator: P, findAllMatches: D,
          minMatchCharLength: $, id: q, keys: z, includeMatches: pe, includeScore: Ie, shouldSort: re, getFn: N, sortFn: W, verbose: Pe, tokenize: oe,
          matchAllTokens: le }, this.setCollection(m), this._processKeys(z);
        }
        a(p, "e");
        var h, f, g;
        return h = p, (f = [{ key: "setCollection", value: /* @__PURE__ */ a(function(m) {
          return this.list = m, m;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(m) {
          if (this._keyWeights = {}, this._keyNames = [], m.length && typeof m[0] == "string") for (var v = 0, S = m.length; v < S; v += 1) {
            var C = m[v];
            this._keyWeights[C] = 1, this._keyNames.push(C);
          }
          else {
            for (var y = null, b = null, I = 0, E = 0, _ = m.length; E < _; E += 1) {
              var k = m[E];
              if (!k.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var O = k.name;
              if (this._keyNames.push(O), !k.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var w = k.weight;
              if (w < 0 || w > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              b = b == null ? w : Math.max(b, w), y = y == null ? w : Math.min(y, w), this._keyWeights[O] = w, I += w;
            }
            if (I > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(m) {
          var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(m, '"'));
          var S = this._prepareSearchers(m), C = S.tokenSearchers, y = S.fullSearcher, b = this._search(C, y);
          return this._computeScore(b), this.options.shouldSort && this._sort(b), v.limit && typeof v.limit == "number" && (b = b.slice(0, v.
          limit)), this._format(b);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", v = [];
          if (this.options.tokenize) for (var S = m.split(this.options.tokenSeparator), C = 0, y = S.length; C < y; C += 1) v.push(new n(S[C],
          this.options));
          return { tokenSearchers: v, fullSearcher: new n(m, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], v = arguments.length > 1 ? arguments[1] : void 0, S = this.
          list, C = {}, y = [];
          if (typeof S[0] == "string") {
            for (var b = 0, I = S.length; b < I; b += 1) this._analyze({ key: "", value: S[b], record: b, index: b }, { resultMap: C, results: y,
            tokenSearchers: m, fullSearcher: v });
            return y;
          }
          for (var E = 0, _ = S.length; E < _; E += 1) for (var k = S[E], O = 0, w = this._keyNames.length; O < w; O += 1) {
            var T = this._keyNames[O];
            this._analyze({ key: T, value: this.options.getFn(k, T), record: k, index: E }, { resultMap: C, results: y, tokenSearchers: m, fullSearcher: v });
          }
          return y;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(m, v) {
          var S = this, C = m.key, y = m.arrayIndex, b = y === void 0 ? -1 : y, I = m.value, E = m.record, _ = m.index, k = v.tokenSearchers,
          O = k === void 0 ? [] : k, w = v.fullSearcher, T = v.resultMap, P = T === void 0 ? {} : T, M = v.results, D = M === void 0 ? [] : M;
          (/* @__PURE__ */ a(function L($, X, q, R) {
            if (X != null) {
              if (typeof X == "string") {
                var z = !1, B = -1, re = 0;
                S._log(`
Key: `.concat(C === "" ? "--" : C));
                var H = w.search(X);
                if (S._log('Full text: "'.concat(X, '", score: ').concat(H.score)), S.options.tokenize) {
                  for (var N = X.split(S.options.tokenSeparator), F = N.length, W = [], Y = 0, oe = O.length; Y < oe; Y += 1) {
                    var ee = O[Y];
                    S._log(`
Pattern: "`.concat(ee.pattern, '"'));
                    for (var le = !1, se = 0; se < F; se += 1) {
                      var pe = N[se], ce = ee.search(pe), Ie = {};
                      ce.isMatch ? (Ie[pe] = ce.score, z = !0, le = !0, W.push(ce.score)) : (Ie[pe] = 1, S.options.matchAllTokens || W.push(
                      1)), S._log('Token: "'.concat(pe, '", score: ').concat(Ie[pe]));
                    }
                    le && (re += 1);
                  }
                  B = W[0];
                  for (var ge = W.length, Pe = 1; Pe < ge; Pe += 1) B += W[Pe];
                  B /= ge, S._log("Token score average:", B);
                }
                var me = H.score;
                B > -1 && (me = (me + B) / 2), S._log("Score average:", me);
                var Se = !S.options.tokenize || !S.options.matchAllTokens || re >= O.length;
                if (S._log(`
Check Matches: `.concat(Se)), (z || H.isMatch) && Se) {
                  var _e = { key: C, arrayIndex: $, value: X, score: me };
                  S.options.includeMatches && (_e.matchedIndices = H.matchedIndices);
                  var Fe = P[R];
                  Fe ? Fe.output.push(_e) : (P[R] = { item: q, output: [_e] }, D.push(P[R]));
                }
              } else if (c(X)) for (var tt = 0, Me = X.length; tt < Me; tt += 1) L(tt, X[tt], q, R);
            }
          }, "e"))(b, I, E, _);
        }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ a(function(m) {
          this._log(`

Computing score:
`);
          for (var v = this._keyWeights, S = !!Object.keys(v).length, C = 0, y = m.length; C < y; C += 1) {
            for (var b = m[C], I = b.output, E = I.length, _ = 1, k = 0; k < E; k += 1) {
              var O = I[k], w = O.key, T = S ? v[w] : 1, P = O.score === 0 && v && v[w] > 0 ? Number.EPSILON : O.score;
              _ *= Math.pow(P, T);
            }
            b.score = _, this._log(b);
          }
        }, "value") }, { key: "_sort", value: /* @__PURE__ */ a(function(m) {
          this._log(`

Sorting....`), m.sort(this.options.sortFn);
        }, "value") }, { key: "_format", value: /* @__PURE__ */ a(function(m) {
          var v = [];
          if (this.options.verbose) {
            var S = [];
            this._log(`

Output:

`, JSON.stringify(m, function(O, w) {
              if (o(w) === "object" && w !== null) {
                if (S.indexOf(w) !== -1) return;
                S.push(w);
              }
              return w;
            }, 2)), S = null;
          }
          var C = [];
          this.options.includeMatches && C.push(function(O, w) {
            var T = O.output;
            w.matches = [];
            for (var P = 0, M = T.length; P < M; P += 1) {
              var D = T[P];
              if (D.matchedIndices.length !== 0) {
                var L = { indices: D.matchedIndices, value: D.value };
                D.key && (L.key = D.key), D.hasOwnProperty("arrayIndex") && D.arrayIndex > -1 && (L.arrayIndex = D.arrayIndex), w.matches.push(
                L);
              }
            }
          }), this.options.includeScore && C.push(function(O, w) {
            w.score = O.score;
          });
          for (var y = 0, b = m.length; y < b; y += 1) {
            var I = m[y];
            if (this.options.id && (I.item = this.options.getFn(I.item, this.options.id)[0]), C.length) {
              for (var E = { item: I.item }, _ = 0, k = C.length; _ < k; _ += 1) C[_](I, E);
              v.push(E);
            } else v.push(I.item);
          }
          return v;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var m;
          this.options.verbose && (m = console).log.apply(m, arguments);
        }, "value") }]) && i(h.prototype, f), g && i(h, g), p;
      }();
      e.exports = d;
    }, function(e, t, r) {
      function o(c, d) {
        for (var p = 0; p < d.length; p++) {
          var h = d[p];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(c, h.key, h);
        }
      }
      a(o, "n");
      var i = r(2), n = r(3), l = r(6), u = function() {
        function c(f, g) {
          var m = g.location, v = m === void 0 ? 0 : m, S = g.distance, C = S === void 0 ? 100 : S, y = g.threshold, b = y === void 0 ? 0.6 :
          y, I = g.maxPatternLength, E = I === void 0 ? 32 : I, _ = g.isCaseSensitive, k = _ !== void 0 && _, O = g.tokenSeparator, w = O ===
          void 0 ? / +/g : O, T = g.findAllMatches, P = T !== void 0 && T, M = g.minMatchCharLength, D = M === void 0 ? 1 : M, L = g.includeMatches,
          $ = L !== void 0 && L;
          (function(X, q) {
            if (!(X instanceof q)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: v, distance: C, threshold: b, maxPatternLength: E, isCaseSensitive: k, tokenSeparator: w, findAllMatches: P,
          includeMatches: $, minMatchCharLength: D }, this.pattern = k ? f : f.toLowerCase(), this.pattern.length <= E && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var d, p, h;
        return d = c, (p = [{ key: "search", value: /* @__PURE__ */ a(function(f) {
          var g = this.options, m = g.isCaseSensitive, v = g.includeMatches;
          if (m || (f = f.toLowerCase()), this.pattern === f) {
            var S = { isMatch: !0, score: 0 };
            return v && (S.matchedIndices = [[0, f.length - 1]]), S;
          }
          var C = this.options, y = C.maxPatternLength, b = C.tokenSeparator;
          if (this.pattern.length > y) return i(f, this.pattern, b);
          var I = this.options, E = I.location, _ = I.distance, k = I.threshold, O = I.findAllMatches, w = I.minMatchCharLength;
          return n(f, this.pattern, this.patternAlphabet, { location: E, distance: _, threshold: k, findAllMatches: O, minMatchCharLength: w,
          includeMatches: v });
        }, "value") }]) && o(d.prototype, p), h && o(d, h), c;
      }();
      e.exports = u;
    }, function(e, t) {
      var r = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
      e.exports = function(o, i) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(i.replace(r, "\\$&").replace(n, "|")),
        u = o.match(l), c = !!u, d = [];
        if (c) for (var p = 0, h = u.length; p < h; p += 1) {
          var f = u[p];
          d.push([o.indexOf(f), f.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: d };
      };
    }, function(e, t, r) {
      var o = r(4), i = r(5);
      e.exports = function(n, l, u, c) {
        for (var d = c.location, p = d === void 0 ? 0 : d, h = c.distance, f = h === void 0 ? 100 : h, g = c.threshold, m = g === void 0 ? 0.6 :
        g, v = c.findAllMatches, S = v !== void 0 && v, C = c.minMatchCharLength, y = C === void 0 ? 1 : C, b = c.includeMatches, I = b !== void 0 &&
        b, E = p, _ = n.length, k = m, O = n.indexOf(l, E), w = l.length, T = [], P = 0; P < _; P += 1) T[P] = 0;
        if (O !== -1) {
          var M = o(l, { errors: 0, currentLocation: O, expectedLocation: E, distance: f });
          if (k = Math.min(M, k), (O = n.lastIndexOf(l, E + w)) !== -1) {
            var D = o(l, { errors: 0, currentLocation: O, expectedLocation: E, distance: f });
            k = Math.min(D, k);
          }
        }
        O = -1;
        for (var L = [], $ = 1, X = w + _, q = 1 << (w <= 31 ? w - 1 : 30), R = 0; R < w; R += 1) {
          for (var z = 0, B = X; z < B; )
            o(l, { errors: R, currentLocation: E + B, expectedLocation: E, distance: f }) <= k ? z = B : X = B, B = Math.floor((X - z) / 2 +
            z);
          X = B;
          var re = Math.max(1, E - B + 1), H = S ? _ : Math.min(E + B, _) + w, N = Array(H + 2);
          N[H + 1] = (1 << R) - 1;
          for (var F = H; F >= re; F -= 1) {
            var W = F - 1, Y = u[n.charAt(W)];
            if (Y && (T[W] = 1), N[F] = (N[F + 1] << 1 | 1) & Y, R !== 0 && (N[F] |= (L[F + 1] | L[F]) << 1 | 1 | L[F + 1]), N[F] & q && ($ =
            o(l, { errors: R, currentLocation: W, expectedLocation: E, distance: f })) <= k) {
              if (k = $, (O = W) <= E) break;
              re = Math.max(1, 2 * E - O);
            }
          }
          if (o(l, { errors: R + 1, currentLocation: E, expectedLocation: E, distance: f }) > k) break;
          L = N;
        }
        var oe = { isMatch: O >= 0, score: $ === 0 ? 1e-3 : $ };
        return I && (oe.matchedIndices = i(T, y)), oe;
      };
    }, function(e, t) {
      e.exports = function(r, o) {
        var i = o.errors, n = i === void 0 ? 0 : i, l = o.currentLocation, u = l === void 0 ? 0 : l, c = o.expectedLocation, d = c === void 0 ?
        0 : c, p = o.distance, h = p === void 0 ? 100 : p, f = n / r.length, g = Math.abs(d - u);
        return h ? f + g / h : g ? 1 : f;
      };
    }, function(e, t) {
      e.exports = function() {
        for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ?
        arguments[1] : 1, i = [], n = -1, l = -1, u = 0, c = r.length; u < c; u += 1) {
          var d = r[u];
          d && n === -1 ? n = u : d || n === -1 || ((l = u - 1) - n + 1 >= o && i.push([n, l]), n = -1);
        }
        return r[u - 1] && u - n >= o && i.push([n, u - 1]), i;
      };
    }, function(e, t) {
      e.exports = function(r) {
        for (var o = {}, i = r.length, n = 0; n < i; n += 1) o[r.charAt(n)] = 0;
        for (var l = 0; l < i; l += 1) o[r.charAt(l)] |= 1 << i - l - 1;
        return o;
      };
    }, function(e, t) {
      var r = /* @__PURE__ */ a(function(l) {
        return Array.isArray ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
      }, "r"), o = /* @__PURE__ */ a(function(l) {
        return l == null ? "" : function(u) {
          if (typeof u == "string") return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }(l);
      }, "n"), i = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), n = /* @__PURE__ */ a(function(l) {
        return typeof l == "number";
      }, "i");
      e.exports = { get: /* @__PURE__ */ a(function(l, u) {
        var c = [];
        return (/* @__PURE__ */ a(function d(p, h) {
          if (h) {
            var f = h.indexOf("."), g = h, m = null;
            f !== -1 && (g = h.slice(0, f), m = h.slice(f + 1));
            var v = p[g];
            if (v != null) if (m || !i(v) && !n(v)) if (r(v)) for (var S = 0, C = v.length; S < C; S += 1) d(v[S], m);
            else m && d(v, m);
            else c.push(o(v));
          } else c.push(p);
        }, "e"))(l, u), c;
      }, "get"), isArray: r, isString: i, isNum: n, toString: o };
    }]);
  });
});

// ../node_modules/store2/dist/store2.js
var cm = J((Cn, _n) => {
  (function(e, t) {
    var r = {
      version: "2.14.2",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: /* @__PURE__ */ a(function(i, n) {
        for (var l in i)
          n.hasOwnProperty(l) || Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(i, l));
        return n;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(i, n) {
        return i === void 0 || typeof i == "function" ? i + "" : JSON.stringify(i, n || r.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(i, n) {
        try {
          return JSON.parse(i, n || r.revive);
        } catch {
          return i;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(i, n) {
        r.storeAPI[i] = n;
        for (var l in r.apis)
          r.apis[l][i] = n;
      }, "fn"),
      get: /* @__PURE__ */ a(function(i, n) {
        return i.getItem(n);
      }, "get"),
      set: /* @__PURE__ */ a(function(i, n, l) {
        i.setItem(n, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(i, n) {
        i.removeItem(n);
      }, "remove"),
      key: /* @__PURE__ */ a(function(i, n) {
        return i.key(n);
      }, "key"),
      length: /* @__PURE__ */ a(function(i) {
        return i.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(i) {
        i.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(i, n, l) {
        var u = r.inherit(r.storeAPI, function(d, p, h) {
          return arguments.length === 0 ? u.getAll() : typeof p == "function" ? u.transact(d, p, h) : p !== void 0 ? u.set(d, p, h) : typeof d ==
          "string" || typeof d == "number" ? u.get(d) : typeof d == "function" ? u.each(d) : d ? u.setAll(d, p) : u.clear();
        });
        u._id = i;
        try {
          var c = "__store2_test";
          n.setItem(c, "ok"), u._area = n, n.removeItem(c);
        } catch {
          u._area = r.storage("fake");
        }
        return u._ns = l || "", r.areas[i] || (r.areas[i] = u._area), r.apis[u._ns + u._id] || (r.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(i, n) {
          var l = this[i];
          return (!l || !l.area) && (l = r.Store(i, n, this._ns), this[i] || (this[i] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(i, n, l) {
          if (l = l || this._delim || r.nsdelim, !i)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = i, c = this[u];
          if ((!c || !c.namespace) && (c = r.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !n))
            for (var d in r.areas)
              c.area(d, r.areas[d]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(i) {
          return i ? (this._real = this._area, this._area = r.storage("fake")) : i === !1 && (this._area = this._real || this._area), this._area.
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ a(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
        has: /* @__PURE__ */ a(function(i) {
          return this._area.has ? this._area.has(this._in(i)) : this._in(i) in this._area;
        }, "has"),
        size: /* @__PURE__ */ a(function() {
          return this.keys().length;
        }, "size"),
        each: /* @__PURE__ */ a(function(i, n) {
          for (var l = 0, u = r.length(this._area); l < u; l++) {
            var c = this._out(r.key(this._area, l));
            if (c !== void 0 && i.call(this, c, this.get(c), n) === !1)
              break;
            u > r.length(this._area) && (u--, l--);
          }
          return n || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(i) {
          return this.each(function(n, l, u) {
            u.push(n);
          }, i || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(i, n) {
          var l = r.get(this._area, this._in(i)), u;
          return typeof n == "function" && (u = n, n = null), l !== null ? r.parse(l, u) : n ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(i) {
          return this.each(function(n, l, u) {
            u[n] = l;
          }, i || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(i, n, l) {
          var u = this.get(i, l), c = n(u);
          return this.set(i, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(i, n, l) {
          var u = this.get(i), c;
          return u != null && l === !1 ? n : (typeof l == "function" && (c = l, l = void 0), r.set(this._area, this._in(i), r.stringify(n, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(i, n) {
          var l, u;
          for (var c in i)
            u = i[c], this.set(c, u, n) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(i, n, l) {
          var u = this.get(i);
          if (u instanceof Array)
            n = u.concat(n);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof n && c === "object") {
              for (var d in n)
                u[d] = n[d];
              n = u;
            } else
              n = u + n;
          }
          return r.set(this._area, this._in(i), r.stringify(n, l)), n;
        }, "add"),
        remove: /* @__PURE__ */ a(function(i, n) {
          var l = this.get(i, n);
          return r.remove(this._area, this._in(i)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(i) {
            r.remove(this._area, this._in(i));
          }, 1) : r.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var i = this._area;
          for (var n in r.areas)
            r.areas.hasOwnProperty(n) && (this._area = r.areas[n], this.clear());
          return this._area = i, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(i) {
          return typeof i != "string" && (i = r.stringify(i)), this._ns ? this._ns + i : i;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(i) {
          return this._ns ? i && i.indexOf(this._ns) === 0 ? i.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            i
          );
        }, "_out")
      },
      // end _.storeAPI
      storage: /* @__PURE__ */ a(function(i) {
        return r.inherit(r.storageAPI, { items: {}, name: i });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(i) {
          return this.items.hasOwnProperty(i);
        }, "has"),
        key: /* @__PURE__ */ a(function(i) {
          var n = 0;
          for (var l in this.items)
            if (this.has(l) && i === n++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(i, n) {
          this.has(i) || this.length++, this.items[i] = n;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(i) {
          this.has(i) && (delete this.items[i], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(i) {
          return this.has(i) ? this.items[i] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var i in this.items)
            this.removeItem(i);
        }, "clear")
      }
      // end _.storageAPI
    }, o = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      r.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    o.local = o, o._ = r, o.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), o.area("page", r.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return o;
    }) : typeof _n < "u" && _n.exports ? _n.exports = o : (e.store && (r.conflict = e.store), e.store = o);
  })(Cn, Cn && Cn.define);
});

// global-externals:@storybook/core/channels
var SI = __STORYBOOK_CHANNELS__, { Channel: wI, PostMessageTransport: EI, WebsocketTransport: CI, createBrowserChannel: Ya } = __STORYBOOK_CHANNELS__;

// ../node_modules/@storybook/global/dist/index.mjs
var ae = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// global-externals:@storybook/core/core-events
var kI = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: Qa, ARGTYPES_INFO_RESPONSE: Xa, CHANNEL_CREATED: Za, CHANNEL_WS_DISCONNECT: OI,
CONFIG_ERROR: PI, CREATE_NEW_STORYFILE_REQUEST: Ja, CREATE_NEW_STORYFILE_RESPONSE: es, CURRENT_STORY_WAS_SET: AI, DOCS_PREPARED: MI, DOCS_RENDERED: DI,
FILE_COMPONENT_SEARCH_REQUEST: ts, FILE_COMPONENT_SEARCH_RESPONSE: Ur, FORCE_REMOUNT: Pn, FORCE_RE_RENDER: LI, GLOBALS_UPDATED: NI, NAVIGATE_URL: FI,
PLAY_FUNCTION_THREW_EXCEPTION: BI, PRELOAD_ENTRIES: wt, PREVIEW_BUILDER_PROGRESS: rs, PREVIEW_KEYDOWN: HI, REGISTER_SUBSCRIPTION: RI, REQUEST_WHATS_NEW_DATA: zI,
RESET_STORY_ARGS: WI, RESULT_WHATS_NEW_DATA: $I, SAVE_STORY_REQUEST: os, SAVE_STORY_RESPONSE: ns, SELECT_STORY: VI, SET_CONFIG: KI, SET_CURRENT_STORY: is,
SET_FILTER: jI, SET_GLOBALS: UI, SET_INDEX: qI, SET_STORIES: GI, SET_WHATS_NEW_CACHE: YI, SHARED_STATE_CHANGED: QI, SHARED_STATE_SET: XI, STORIES_COLLAPSE_ALL: xr,
STORIES_EXPAND_ALL: An, STORY_ARGS_UPDATED: ZI, STORY_CHANGED: JI, STORY_ERRORED: eS, STORY_INDEX_INVALIDATED: tS, STORY_MISSING: rS, STORY_PREPARED: oS,
STORY_RENDERED: nS, STORY_RENDER_PHASE_CHANGED: iS, STORY_SPECIFIED: aS, STORY_THREW_EXCEPTION: sS, STORY_UNCHANGED: lS, TELEMETRY_ERROR: uS,
TOGGLE_WHATS_NEW_NOTIFICATIONS: cS, UNHANDLED_ERRORS_WHILE_PLAYING: pS, UPDATE_GLOBALS: dS, UPDATE_QUERY_PARAMS: fS, UPDATE_STORY_ARGS: mS } = __STORYBOOK_CORE_EVENTS__;

// global-externals:@storybook/core/manager-api
var gS = __STORYBOOK_API__, { ActiveTabs: yS, Consumer: he, ManagerContext: vS, Provider: as, RequestResponseError: bS, addons: Qe, combineParameters: xS,
controlOrMetaKey: IS, controlOrMetaSymbol: SS, eventMatchesShortcut: wS, eventToShortcut: ss, experimental_requestResponse: qr, isMacLike: ES,
isShortcutTaken: CS, keyToSymbol: _S, merge: Gr, mockChannel: TS, optionOrAltSymbol: kS, shortcutMatchesShortcut: ls, shortcutToHumanString: Xe,
types: ve, useAddonState: OS, useArgTypes: PS, useArgs: AS, useChannel: MS, useGlobalTypes: DS, useGlobals: LS, useParameter: NS, useSharedState: FS,
useStoryPrepared: BS, useStorybookApi: de, useStorybookState: Ke } = __STORYBOOK_API__;

// global-externals:react
var s = __REACT__, { Children: RS, Component: He, Fragment: Te, Profiler: zS, PureComponent: WS, StrictMode: $S, Suspense: VS, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: KS,
cloneElement: us, createContext: Ut, createElement: jS, createFactory: US, createRef: qS, forwardRef: cs, isValidElement: GS, lazy: YS, memo: Ir,
startTransition: QS, unstable_act: XS, useCallback: A, useContext: Yr, useDebugValue: ZS, useDeferredValue: ps, useEffect: V, useId: JS, useImperativeHandle: ew,
useInsertionEffect: tw, useLayoutEffect: qt, useMemo: K, useReducer: Gt, useRef: Q, useState: Z, useSyncExternalStore: rw, useTransition: ds,
version: ow } = __REACT__;

// global-externals:react-dom/client
var nw = __REACT_DOM_CLIENT__, { createRoot: fs, hydrateRoot: iw } = __REACT_DOM_CLIENT__;

// global-externals:@storybook/core/router
var sw = __STORYBOOK_ROUTER__, { BaseLocationProvider: lw, DEEPLY_EQUAL: uw, Link: Qr, Location: Xr, LocationProvider: ms, Match: hs, Route: Sr,
buildArgsParam: cw, deepDiff: pw, getMatch: dw, parsePath: fw, queryFromLocation: mw, queryFromString: hw, stringifyQuery: gw, useNavigate: gs } = __STORYBOOK_ROUTER__;

// global-externals:@storybook/core/theming
var vw = __STORYBOOK_THEMING__, { CacheProvider: bw, ClassNames: xw, Global: Yt, ThemeProvider: Mn, background: Iw, color: Sw, convert: ww, create: Ew,
createCache: Cw, createGlobal: ys, createReset: _w, css: vs, darken: Tw, ensure: bs, ignoreSsrWarning: kw, isPropValid: Ow, jsx: Pw, keyframes: wr,
lighten: Aw, styled: x, themes: Mw, typography: Dw, useTheme: De, withTheme: xs } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/manager-errors
var Nw = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: Fw, ProviderDoesNotExtendBaseProviderError: Is, UncaughtManagerError: Bw } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// ../node_modules/react-helmet-async/lib/index.module.js
var ne = We(Dn()), Ws = We(Ps()), Hn = We(Ms()), $s = We(Ls());
function be() {
  return be = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, be.apply(this, arguments);
}
a(be, "a");
function $n(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Rn(e, t);
}
a($n, "s");
function Rn(e, t) {
  return Rn = Object.setPrototypeOf || function(r, o) {
    return r.__proto__ = o, r;
  }, Rn(e, t);
}
a(Rn, "c");
function Ns(e, t) {
  if (e == null) return {};
  var r, o, i = {}, n = Object.keys(e);
  for (o = 0; o < n.length; o++) t.indexOf(r = n[o]) >= 0 || (i[r] = e[r]);
  return i;
}
a(Ns, "u");
var G = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, jm = { rel: ["amphtml", "canonical", "alternate"] }, Um = { type: ["applicatio\
n/ld+json"] }, qm = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
Fs = Object.keys(G).map(function(e) {
  return G[e];
}), to = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, Gm = Object.keys(to).reduce(function(e, t) {
  return e[to[t]] = t, e;
}, {}), Xt = /* @__PURE__ */ a(function(e, t) {
  for (var r = e.length - 1; r >= 0; r -= 1) {
    var o = e[r];
    if (Object.prototype.hasOwnProperty.call(o, t)) return o[t];
  }
  return null;
}, "T"), Ym = /* @__PURE__ */ a(function(e) {
  var t = Xt(e, G.TITLE), r = Xt(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), r && t) return r.replace(/%s/g, function() {
    return t;
  });
  var o = Xt(e, "defaultTitle");
  return t || o || void 0;
}, "g"), Qm = /* @__PURE__ */ a(function(e) {
  return Xt(e, "onChangeClientState") || function() {
  };
}, "b"), Ln = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(r) {
    return r[e] !== void 0;
  }).map(function(r) {
    return r[e];
  }).reduce(function(r, o) {
    return be({}, r, o);
  }, {});
}, "v"), Xm = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(r) {
    return r[G.BASE] !== void 0;
  }).map(function(r) {
    return r[G.BASE];
  }).reverse().reduce(function(r, o) {
    if (!r.length) for (var i = Object.keys(o), n = 0; n < i.length; n += 1) {
      var l = i[n].toLowerCase();
      if (e.indexOf(l) !== -1 && o[l]) return r.concat(o);
    }
    return r;
  }, []);
}, "A"), Er = /* @__PURE__ */ a(function(e, t, r) {
  var o = {};
  return r.filter(function(i) {
    return !!Array.isArray(i[e]) || (i[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof i[e] + '"'), !1);
  }).map(function(i) {
    return i[e];
  }).reverse().reduce(function(i, n) {
    var l = {};
    n.filter(function(h) {
      for (var f, g = Object.keys(h), m = 0; m < g.length; m += 1) {
        var v = g[m], S = v.toLowerCase();
        t.indexOf(S) === -1 || f === "rel" && h[f].toLowerCase() === "canonical" || S === "rel" && h[S].toLowerCase() === "stylesheet" || (f =
        S), t.indexOf(v) === -1 || v !== "innerHTML" && v !== "cssText" && v !== "itemprop" || (f = v);
      }
      if (!f || !h[f]) return !1;
      var C = h[f].toLowerCase();
      return o[f] || (o[f] = {}), l[f] || (l[f] = {}), !o[f][C] && (l[f][C] = !0, !0);
    }).reverse().forEach(function(h) {
      return i.push(h);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var d = u[c], p = be({}, o[d], l[d]);
      o[d] = p;
    }
    return i;
  }, []).reverse();
}, "C"), Zm = /* @__PURE__ */ a(function(e, t) {
  if (Array.isArray(e) && e.length) {
    for (var r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
  }
  return !1;
}, "O"), Vs = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), Nn = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(r, o) {
    return function(i, n) {
      for (var l = Object.keys(i), u = 0; u < l.length; u += 1) if (n[l[u]] && n[l[u]].includes(i[l[u]])) return !0;
      return !1;
    }(o, t) ? r.priority.push(o) : r.default.push(o), r;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), Bs = /* @__PURE__ */ a(function(e, t) {
  var r;
  return be({}, e, ((r = {})[t] = void 0, r));
}, "I"), Jm = [G.NOSCRIPT, G.SCRIPT, G.STYLE], Fn = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), Hs = /* @__PURE__ */ a(function(e) {
  return Object.keys(e).reduce(function(t, r) {
    var o = e[r] !== void 0 ? r + '="' + e[r] + '"' : "" + r;
    return t ? t + " " + o : o;
  }, "");
}, "x"), Rs = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(r, o) {
    return r[to[o] || o] = e[o], r;
  }, t);
}, "L"), eo = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(r, o) {
    var i, n = ((i = { key: o })["data-rh"] = !0, i);
    return Object.keys(r).forEach(function(l) {
      var u = to[l] || l;
      u === "innerHTML" || u === "cssText" ? n.dangerouslySetInnerHTML = { __html: r.innerHTML || r.cssText } : n[u] = r[l];
    }), s.createElement(e, n);
  });
}, "j"), je = /* @__PURE__ */ a(function(e, t, r) {
  switch (e) {
    case G.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return i = t.titleAttributes, (n = { key: o = t.title })["data-rh"] = !0, l = Rs(i, n), [s.createElement(G.TITLE, l, o)];
        var o, i, n, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(o, i, n, l) {
          var u = Hs(n), c = Vs(i);
          return u ? "<" + o + ' data-rh="true" ' + u + ">" + Fn(c, l) + "</" + o + ">" : "<" + o + ' data-rh="true">' + Fn(c, l) + "</" + o +
          ">";
        }(e, t.title, t.titleAttributes, r);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ a(function() {
        return Rs(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Hs(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return eo(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(o, i, n) {
          return i.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(h) {
              return !(h === "innerHTML" || h === "cssText");
            }).reduce(function(h, f) {
              var g = u[f] === void 0 ? f : f + '="' + Fn(u[f], n) + '"';
              return h ? h + " " + g : g;
            }, ""), d = u.innerHTML || u.cssText || "", p = Jm.indexOf(o) === -1;
            return l + "<" + o + ' data-rh="true" ' + c + (p ? "/>" : ">" + d + "</" + o + ">");
          }, "");
        }(e, t, r);
      }, "toString") };
  }
}, "M"), zn = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, r = e.bodyAttributes, o = e.encode, i = e.htmlAttributes, n = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, d = e.titleAttributes, p = e.linkTags, h = e.metaTags, f = e.scriptTags, g = { toComponent: /* @__PURE__ */ a(function() {
  }, "toComponent"), toString: /* @__PURE__ */ a(function() {
    return "";
  }, "toString") };
  if (e.prioritizeSeoTags) {
    var m = function(v) {
      var S = v.linkTags, C = v.scriptTags, y = v.encode, b = Nn(v.metaTags, qm), I = Nn(S, jm), E = Nn(C, Um);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(eo(G.META, b.priority), eo(G.LINK, I.priority), eo(G.SCRIPT, E.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return je(G.META, b.priority, y) + " " + je(G.LINK, I.priority, y) + " " + je(G.SCRIPT, E.priority, y);
      }, "toString") }, metaTags: b.default, linkTags: I.default, scriptTags: E.default };
    }(e);
    g = m.priorityMethods, p = m.linkTags, h = m.metaTags, f = m.scriptTags;
  }
  return { priority: g, base: je(G.BASE, t, o), bodyAttributes: je("bodyAttributes", r, o), htmlAttributes: je("htmlAttributes", i, o), link: je(
  G.LINK, p, o), meta: je(G.META, h, o), noscript: je(G.NOSCRIPT, n, o), script: je(G.SCRIPT, f, o), style: je(G.STYLE, l, o), title: je(G.TITLE,
  { title: c, titleAttributes: d }, o) };
}, "k"), Jr = [], Wn = /* @__PURE__ */ a(function(e, t) {
  var r = this;
  t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ a(function(o) {
    r.context.helmet = o;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ a(function() {
    return r.canUseDOM ? Jr : r.instances;
  }, "get"), add: /* @__PURE__ */ a(function(o) {
    (r.canUseDOM ? Jr : r.instances).push(o);
  }, "add"), remove: /* @__PURE__ */ a(function(o) {
    var i = (r.canUseDOM ? Jr : r.instances).indexOf(o);
    (r.canUseDOM ? Jr : r.instances).splice(i, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = zn({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), Ks = s.createContext({}), eh = ne.default.shape({ setHelmet: ne.default.func, helmetInstances: ne.default.shape({ get: ne.default.func,
add: ne.default.func, remove: ne.default.func }) }), th = typeof document < "u", ft = /* @__PURE__ */ function(e) {
  function t(r) {
    var o;
    return (o = e.call(this, r) || this).helmetData = new Wn(o.props.context, t.canUseDOM), o;
  }
  return a(t, "r"), $n(t, e), t.prototype.render = function() {
    return s.createElement(Ks.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(He);
ft.canUseDOM = th, ft.propTypes = { context: ne.default.shape({ helmet: ne.default.shape() }), children: ne.default.node.isRequired }, ft.defaultProps =
{ context: {} }, ft.displayName = "HelmetProvider";
var Qt = /* @__PURE__ */ a(function(e, t) {
  var r, o = document.head || document.querySelector(G.HEAD), i = o.querySelectorAll(e + "[data-rh]"), n = [].slice.call(i), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (d === "innerHTML" ? c.innerHTML = u.innerHTML : d === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(d, u[d] === void 0 ? "" : u[d]));
    c.setAttribute("data-rh", "true"), n.some(function(p, h) {
      return r = h, c.isEqualNode(p);
    }) ? n.splice(r, 1) : l.push(c);
  }), n.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return o.appendChild(u);
  }), { oldTags: n, newTags: l };
}, "Y"), Bn = /* @__PURE__ */ a(function(e, t) {
  var r = document.getElementsByTagName(e)[0];
  if (r) {
    for (var o = r.getAttribute("data-rh"), i = o ? o.split(",") : [], n = [].concat(i), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], d = t[c] || "";
      r.getAttribute(c) !== d && r.setAttribute(c, d), i.indexOf(c) === -1 && i.push(c);
      var p = n.indexOf(c);
      p !== -1 && n.splice(p, 1);
    }
    for (var h = n.length - 1; h >= 0; h -= 1) r.removeAttribute(n[h]);
    i.length === n.length ? r.removeAttribute("data-rh") : r.getAttribute("data-rh") !== l.join(",") && r.setAttribute("data-rh", l.join(","));
  }
}, "B"), zs = /* @__PURE__ */ a(function(e, t) {
  var r = e.baseTag, o = e.htmlAttributes, i = e.linkTags, n = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, d = e.
  styleTags, p = e.title, h = e.titleAttributes;
  Bn(G.BODY, e.bodyAttributes), Bn(G.HTML, o), function(v, S) {
    v !== void 0 && document.title !== v && (document.title = Vs(v)), Bn(G.TITLE, S);
  }(p, h);
  var f = { baseTag: Qt(G.BASE, r), linkTags: Qt(G.LINK, i), metaTags: Qt(G.META, n), noscriptTags: Qt(G.NOSCRIPT, l), scriptTags: Qt(G.SCRIPT,
  c), styleTags: Qt(G.STYLE, d) }, g = {}, m = {};
  Object.keys(f).forEach(function(v) {
    var S = f[v], C = S.newTags, y = S.oldTags;
    C.length && (g[v] = C), y.length && (m[v] = f[v].oldTags);
  }), t && t(), u(e, g, m);
}, "K"), Cr = null, ro = /* @__PURE__ */ function(e) {
  function t() {
    for (var o, i = arguments.length, n = new Array(i), l = 0; l < i; l++) n[l] = arguments[l];
    return (o = e.call.apply(e, [this].concat(n)) || this).rendered = !1, o;
  }
  a(t, "e"), $n(t, e);
  var r = t.prototype;
  return r.shouldComponentUpdate = function(o) {
    return !(0, $s.default)(o, this.props);
  }, r.componentDidUpdate = function() {
    this.emitChange();
  }, r.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, r.emitChange = function() {
    var o, i, n = this.props.context, l = n.setHelmet, u = null, c = (o = n.helmetInstances.get().map(function(d) {
      var p = be({}, d.props);
      return delete p.context, p;
    }), { baseTag: Xm(["href"], o), bodyAttributes: Ln("bodyAttributes", o), defer: Xt(o, "defer"), encode: Xt(o, "encodeSpecialCharacters"),
    htmlAttributes: Ln("htmlAttributes", o), linkTags: Er(G.LINK, ["rel", "href"], o), metaTags: Er(G.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], o), noscriptTags: Er(G.NOSCRIPT, ["innerHTML"], o), onChangeClientState: Qm(o), scriptTags: Er(G.SCRIPT, ["src",
    "innerHTML"], o), styleTags: Er(G.STYLE, ["cssText"], o), title: Ym(o), titleAttributes: Ln("titleAttributes", o), prioritizeSeoTags: Zm(
    o, "prioritizeSeoTags") });
    ft.canUseDOM ? (i = c, Cr && cancelAnimationFrame(Cr), i.defer ? Cr = requestAnimationFrame(function() {
      zs(i, function() {
        Cr = null;
      });
    }) : (zs(i), Cr = null)) : zn && (u = zn(c)), l(u);
  }, r.init = function() {
    this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
  }, r.render = function() {
    return this.init(), null;
  }, t;
}(He);
ro.propTypes = { context: eh.isRequired }, ro.displayName = "HelmetDispatcher";
var rh = ["children"], oh = ["children"], _r = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), $n(t, e);
  var r = t.prototype;
  return r.shouldComponentUpdate = function(o) {
    return !(0, Ws.default)(Bs(this.props, "helmetData"), Bs(o, "helmetData"));
  }, r.mapNestedChildrenToProps = function(o, i) {
    if (!i) return null;
    switch (o.type) {
      case G.SCRIPT:
      case G.NOSCRIPT:
        return { innerHTML: i };
      case G.STYLE:
        return { cssText: i };
      default:
        throw new Error("<" + o.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, r.flattenArrayTypeChildren = function(o) {
    var i, n = o.child, l = o.arrayTypeChildren;
    return be({}, l, ((i = {})[n.type] = [].concat(l[n.type] || [], [be({}, o.newChildProps, this.mapNestedChildrenToProps(n, o.nestedChildren))]),
    i));
  }, r.mapObjectTypeChildren = function(o) {
    var i, n, l = o.child, u = o.newProps, c = o.newChildProps, d = o.nestedChildren;
    switch (l.type) {
      case G.TITLE:
        return be({}, u, ((i = {})[l.type] = d, i.titleAttributes = be({}, c), i));
      case G.BODY:
        return be({}, u, { bodyAttributes: be({}, c) });
      case G.HTML:
        return be({}, u, { htmlAttributes: be({}, c) });
      default:
        return be({}, u, ((n = {})[l.type] = be({}, c), n));
    }
  }, r.mapArrayTypeChildrenToProps = function(o, i) {
    var n = be({}, i);
    return Object.keys(o).forEach(function(l) {
      var u;
      n = be({}, n, ((u = {})[l] = o[l], u));
    }), n;
  }, r.warnOnInvalidChildren = function(o, i) {
    return (0, Hn.default)(Fs.some(function(n) {
      return o.type === n;
    }), typeof o.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + Fs.join(", ") + " are allowed. Helmet does not support rendering <" + o.type + "> e\
lements. Refer to our API for more information."), (0, Hn.default)(!i || typeof i == "string" || Array.isArray(i) && !i.some(function(n) {
      return typeof n != "string";
    }), "Helmet expects a string as a child of <" + o.type + ">. Did you forget to wrap your children in braces? ( <" + o.type + ">{``}</" +
    o.type + "> ) Refer to our API for more information."), !0;
  }, r.mapChildrenToProps = function(o, i) {
    var n = this, l = {};
    return s.Children.forEach(o, function(u) {
      if (u && u.props) {
        var c = u.props, d = c.children, p = Ns(c, rh), h = Object.keys(p).reduce(function(g, m) {
          return g[Gm[m] || m] = p[m], g;
        }, {}), f = u.type;
        switch (typeof f == "symbol" ? f = f.toString() : n.warnOnInvalidChildren(u, d), f) {
          case G.FRAGMENT:
            i = n.mapChildrenToProps(d, i);
            break;
          case G.LINK:
          case G.META:
          case G.NOSCRIPT:
          case G.SCRIPT:
          case G.STYLE:
            l = n.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: h, nestedChildren: d });
            break;
          default:
            i = n.mapObjectTypeChildren({ child: u, newProps: i, newChildProps: h, nestedChildren: d });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, i);
  }, r.render = function() {
    var o = this.props, i = o.children, n = Ns(o, oh), l = be({}, n), u = n.helmetData;
    return i && (l = this.mapChildrenToProps(i, l)), !u || u instanceof Wn || (u = new Wn(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    ro, be({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(Ks.Consumer, null, function(c) {
      return s.createElement(ro, be({}, l, { context: c }));
    });
  }, t;
}(He);
_r.propTypes = { base: ne.default.object, bodyAttributes: ne.default.object, children: ne.default.oneOfType([ne.default.arrayOf(ne.default.node),
ne.default.node]), defaultTitle: ne.default.string, defer: ne.default.bool, encodeSpecialCharacters: ne.default.bool, htmlAttributes: ne.default.
object, link: ne.default.arrayOf(ne.default.object), meta: ne.default.arrayOf(ne.default.object), noscript: ne.default.arrayOf(ne.default.object),
onChangeClientState: ne.default.func, script: ne.default.arrayOf(ne.default.object), style: ne.default.arrayOf(ne.default.object), title: ne.default.
string, titleAttributes: ne.default.object, titleTemplate: ne.default.string, prioritizeSeoTags: ne.default.bool, helmetData: ne.default.object },
_r.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, _r.displayName = "Helmet";

// src/manager/constants.ts
var lt = "@media (min-width: 600px)";

// global-externals:@storybook/core/components
var tE = __STORYBOOK_COMPONENTS__, { A: rE, ActionBar: oE, AddonPanel: nE, Badge: oo, Bar: iE, Blockquote: aE, Button: we, ClipboardCode: sE,
Code: lE, DL: uE, Div: cE, DocumentWrapper: pE, EmptyTabContent: js, ErrorFormatter: Us, FlexBar: dE, Form: no, H1: fE, H2: mE, H3: hE, H4: gE,
H5: yE, H6: vE, HR: bE, IconButton: te, IconButtonSkeleton: xE, Icons: qs, Img: IE, LI: SE, Link: Le, ListItem: wE, Loader: io, Modal: Et, OL: EE,
P: CE, Placeholder: _E, Pre: TE, ResetWrapper: kE, ScrollArea: ao, Separator: Zt, Spaced: ut, Span: OE, StorybookIcon: PE, StorybookLogo: so,
Symbols: AE, SyntaxHighlighter: ME, TT: DE, TabBar: lo, TabButton: uo, TabWrapper: LE, Table: NE, Tabs: Gs, TabsState: FE, TooltipLinkList: Ct,
TooltipMessage: BE, TooltipNote: co, UL: HE, WithTooltip: Re, WithTooltipPure: RE, Zoom: Ys, codeCommon: zE, components: WE, createCopyToClipboardFunction: $E,
getStoryHref: Jt, icons: VE, interleaveSeparators: KE, nameSpaceClassNames: jE, resetComponents: UE, withReset: qE } = __STORYBOOK_COMPONENTS__;

// global-externals:@storybook/icons
var YE = __STORYBOOK_ICONS__, { AccessibilityAltIcon: QE, AccessibilityIcon: XE, AddIcon: ZE, AdminIcon: JE, AlertAltIcon: eC, AlertIcon: po,
AlignLeftIcon: tC, AlignRightIcon: rC, AppleIcon: oC, ArrowBottomLeftIcon: nC, ArrowBottomRightIcon: iC, ArrowDownIcon: aC, ArrowLeftIcon: Qs,
ArrowRightIcon: sC, ArrowSolidDownIcon: lC, ArrowSolidLeftIcon: uC, ArrowSolidRightIcon: cC, ArrowSolidUpIcon: pC, ArrowTopLeftIcon: dC, ArrowTopRightIcon: fC,
ArrowUpIcon: mC, AzureDevOpsIcon: hC, BackIcon: gC, BasketIcon: yC, BatchAcceptIcon: vC, BatchDenyIcon: bC, BeakerIcon: xC, BellIcon: IC, BitbucketIcon: SC,
BoldIcon: wC, BookIcon: EC, BookmarkHollowIcon: CC, BookmarkIcon: _C, BottomBarIcon: fo, BottomBarToggleIcon: Xs, BoxIcon: TC, BranchIcon: kC,
BrowserIcon: OC, ButtonIcon: PC, CPUIcon: AC, CalendarIcon: MC, CameraIcon: DC, CategoryIcon: LC, CertificateIcon: NC, ChangedIcon: FC, ChatIcon: BC,
CheckIcon: rt, ChevronDownIcon: er, ChevronLeftIcon: HC, ChevronRightIcon: Zs, ChevronSmallDownIcon: RC, ChevronSmallLeftIcon: zC, ChevronSmallRightIcon: WC,
ChevronSmallUpIcon: $C, ChevronUpIcon: VC, ChromaticIcon: KC, ChromeIcon: jC, CircleHollowIcon: UC, CircleIcon: Js, ClearIcon: qC, CloseAltIcon: mo,
CloseIcon: Ze, CloudHollowIcon: GC, CloudIcon: YC, CogIcon: Vn, CollapseIcon: el, CommandIcon: QC, CommentAddIcon: XC, CommentIcon: ZC, CommentsIcon: JC,
CommitIcon: e_, CompassIcon: t_, ComponentDrivenIcon: r_, ComponentIcon: Kn, ContrastIcon: o_, ControlsIcon: n_, CopyIcon: i_, CreditIcon: a_,
CrossIcon: s_, DashboardIcon: l_, DatabaseIcon: u_, DeleteIcon: c_, DiamondIcon: p_, DirectionIcon: d_, DiscordIcon: f_, DocChartIcon: m_, DocListIcon: h_,
DocumentIcon: tr, DownloadIcon: g_, DragIcon: y_, EditIcon: v_, EllipsisIcon: b_, EmailIcon: x_, ExpandAltIcon: tl, ExpandIcon: rl, EyeCloseIcon: ol,
EyeIcon: nl, FaceHappyIcon: I_, FaceNeutralIcon: S_, FaceSadIcon: w_, FacebookIcon: E_, FailedIcon: C_, FastForwardIcon: __, FigmaIcon: T_, FilterIcon: k_,
FlagIcon: O_, FolderIcon: P_, FormIcon: A_, GDriveIcon: M_, GithubIcon: ho, GitlabIcon: D_, GlobeIcon: jn, GoogleIcon: L_, GraphBarIcon: N_,
GraphLineIcon: F_, GraphqlIcon: B_, GridAltIcon: H_, GridIcon: R_, GrowIcon: z_, HeartHollowIcon: W_, HeartIcon: il, HomeIcon: $_, HourglassIcon: V_,
InfoIcon: al, ItalicIcon: K_, JumpToIcon: j_, KeyIcon: U_, LightningIcon: sl, LightningOffIcon: q_, LinkBrokenIcon: G_, LinkIcon: ll, LinkedinIcon: Y_,
LinuxIcon: Q_, ListOrderedIcon: X_, ListUnorderedIcon: Z_, LocationIcon: J_, LockIcon: go, MarkdownIcon: e1, MarkupIcon: ul, MediumIcon: t1,
MemoryIcon: r1, MenuIcon: yo, MergeIcon: o1, MirrorIcon: n1, MobileIcon: i1, MoonIcon: a1, NutIcon: s1, OutboxIcon: l1, OutlineIcon: u1, PaintBrushIcon: c1,
PaperClipIcon: p1, ParagraphIcon: d1, PassedIcon: f1, PhoneIcon: m1, PhotoDragIcon: h1, PhotoIcon: g1, PinAltIcon: y1, PinIcon: v1, PlayBackIcon: b1,
PlayIcon: x1, PlayNextIcon: I1, PlusIcon: cl, PointerDefaultIcon: S1, PointerHandIcon: w1, PowerIcon: E1, PrintIcon: C1, ProceedIcon: _1, ProfileIcon: T1,
PullRequestIcon: k1, QuestionIcon: O1, RSSIcon: P1, RedirectIcon: A1, ReduxIcon: M1, RefreshIcon: D1, ReplyIcon: L1, RepoIcon: N1, RequestChangeIcon: F1,
RewindIcon: B1, RulerIcon: H1, SearchIcon: vo, ShareAltIcon: _t, ShareIcon: R1, ShieldIcon: z1, SideBySideIcon: W1, SidebarAltIcon: bo, SidebarAltToggleIcon: $1,
SidebarIcon: V1, SidebarToggleIcon: K1, SpeakerIcon: j1, StackedIcon: U1, StarHollowIcon: q1, StarIcon: G1, StatusFailIcon: Un, StatusPassIcon: pl,
StatusWarnIcon: qn, StickerIcon: Y1, StopAltIcon: Q1, StopIcon: X1, StorybookIcon: dl, StructureIcon: Z1, SubtractIcon: J1, SunIcon: eT, SupportIcon: tT,
SwitchAltIcon: rT, SyncIcon: mt, TabletIcon: oT, ThumbsUpIcon: nT, TimeIcon: fl, TimerIcon: iT, TransferIcon: aT, TrashIcon: ml, TwitterIcon: sT,
TypeIcon: lT, UbuntuIcon: uT, UndoIcon: cT, UnfoldIcon: pT, UnlockIcon: dT, UnpinIcon: fT, UploadIcon: mT, UserAddIcon: hT, UserAltIcon: gT,
UserIcon: yT, UsersIcon: vT, VSCodeIcon: bT, VerifiedIcon: xT, VideoIcon: IT, WandIcon: hl, WatchIcon: ST, WindowsIcon: wT, WrenchIcon: ET, XIcon: CT,
YoutubeIcon: _T, ZoomIcon: gl, ZoomOutIcon: yl, ZoomResetIcon: vl, iconList: TT } = __STORYBOOK_ICONS__;

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, j.apply(null, arguments);
}
a(j, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function bl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(bl, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function ht(e, t) {
  return ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ht(e, t);
}
a(ht, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function rr(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ht(e, t);
}
a(rr, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function xo(e) {
  return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, xo(e);
}
a(xo, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function xl(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
a(xl, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function Gn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gn = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(Gn, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function Il(e, t, r) {
  if (Gn()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, t);
  var i = new (e.bind.apply(e, o))();
  return r && ht(i, r.prototype), i;
}
a(Il, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function Io(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Io = /* @__PURE__ */ a(function(o) {
    if (o === null || !xl(o)) return o;
    if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return Il(o, arguments, xo(this).constructor);
    }
    return a(i, "Wrapper"), i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ht(i, o);
  }, "_wrapNativeSuper"), Io(e);
}
a(Io, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var nr = /* @__PURE__ */ function(e) {
  rr(t, e);
  function t(r) {
    var o;
    if (1)
      o = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + r +
      " for more information.") || this;
    else
      for (var i, n, l; l < i; l++)
        ;
    return bl(o);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ Io(Error));
function Yn(e) {
  return Math.round(e * 255);
}
a(Yn, "colorToInt");
function nh(e, t, r) {
  return Yn(e) + "," + Yn(t) + "," + Yn(r);
}
a(nh, "convertToInt");
function Sl(e, t, r, o) {
  if (o === void 0 && (o = nh), t === 0)
    return o(r, r, r);
  var i = (e % 360 + 360) % 360 / 60, n = (1 - Math.abs(2 * r - 1)) * t, l = n * (1 - Math.abs(i % 2 - 1)), u = 0, c = 0, d = 0;
  i >= 0 && i < 1 ? (u = n, c = l) : i >= 1 && i < 2 ? (u = l, c = n) : i >= 2 && i < 3 ? (c = n, d = l) : i >= 3 && i < 4 ? (c = l, d = n) :
  i >= 4 && i < 5 ? (u = l, d = n) : i >= 5 && i < 6 && (u = n, d = l);
  var p = r - n / 2, h = u + p, f = c + p, g = d + p;
  return o(h, f, g);
}
a(Sl, "hslToRgb");
var wl = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function ih(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return wl[t] ? "#" + wl[t] : e;
}
a(ih, "nameToHex");
var ah = /^#[a-fA-F0-9]{6}$/, sh = /^#[a-fA-F0-9]{8}$/, lh = /^#[a-fA-F0-9]{3}$/, uh = /^#[a-fA-F0-9]{4}$/, Qn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
ch = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, ph = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
dh = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function _l(e) {
  if (typeof e != "string")
    throw new nr(3);
  var t = ih(e);
  if (t.match(ah))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(sh)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(lh))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(uh)) {
    var o = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: o
    };
  }
  var i = Qn.exec(t);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10)
    };
  var n = ch.exec(t.substring(0, 50));
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10),
      alpha: parseFloat("" + n[4]) > 1 ? parseFloat("" + n[4]) / 100 : parseFloat("" + n[4])
    };
  var l = ph.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, d = parseInt("" + l[3], 10) / 100, p = "rgb(" + Sl(u, c, d) + ")", h = Qn.
    exec(p);
    if (!h)
      throw new nr(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10)
    };
  }
  var f = dh.exec(t.substring(0, 50));
  if (f) {
    var g = parseInt("" + f[1], 10), m = parseInt("" + f[2], 10) / 100, v = parseInt("" + f[3], 10) / 100, S = "rgb(" + Sl(g, m, v) + ")", C = Qn.
    exec(S);
    if (!C)
      throw new nr(4, t, S);
    return {
      red: parseInt("" + C[1], 10),
      green: parseInt("" + C[2], 10),
      blue: parseInt("" + C[3], 10),
      alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4])
    };
  }
  throw new nr(5);
}
a(_l, "parseToRgb");
var fh = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), El = fh;
function or(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(or, "numberToHex");
function Cl(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return El("#" + or(e) + or(t) + or(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return El("#" + or(e.red) + or(e.green) + or(e.blue));
  throw new nr(6);
}
a(Cl, "rgb");
function Xn(e, t, r, o) {
  if (typeof e == "string" && typeof t == "number") {
    var i = _l(e);
    return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof o == "number")
      return o >= 1 ? Cl(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + o + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && o === void 0)
      return e.alpha >= 1 ? Cl(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new nr(7);
}
a(Xn, "rgba");
function Tl(e, t, r) {
  return /* @__PURE__ */ a(function() {
    var i = r.concat(Array.prototype.slice.call(arguments));
    return i.length >= t ? e.apply(this, i) : Tl(e, t, i);
  }, "fn");
}
a(Tl, "curried");
function mh(e) {
  return Tl(e, e.length, []);
}
a(mh, "curry");
function hh(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
a(hh, "guard");
function gh(e, t) {
  if (t === "transparent") return t;
  var r = _l(t), o = typeof r.alpha == "number" ? r.alpha : 1, i = j({}, r, {
    alpha: hh(0, 1, +(o * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return Xn(i);
}
a(gh, "transparentize");
var yh = /* @__PURE__ */ mh(gh), ye = yh;

// src/manager/components/notifications/NotificationItem.tsx
var vh = wr({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
}), bh = wr({
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
}), kl = x.div(
  ({ theme: e }) => ({
    position: "relative",
    display: "flex",
    padding: 15,
    width: 280,
    borderRadius: 4,
    alignItems: "center",
    animation: `${vh} 500ms`,
    background: e.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
    color: e.color.inverseText,
    textDecoration: "none",
    overflow: "hidden"
  }),
  ({ duration: e, theme: t }) => e && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: t.color.secondary,
      animation: `${bh} ${e}ms linear forwards reverse`
    }
  }
), Ol = x(kl)({
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0\
.1)"
  }
}), xh = Ol.withComponent("div"), Ih = Ol.withComponent(Qr), Sh = x.div(() => ({
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
})), wh = x.div(({ theme: e }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: e.base === "dark" ? e.color.mediumdark : e.color.mediumlight
})), Eh = x.div(({ theme: e, hasIcon: t }) => ({
  height: "100%",
  width: t ? 205 : 230,
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: e.typography.size.s1,
  lineHeight: "16px",
  fontWeight: e.typography.weight.bold
})), Ch = x.div(({ theme: e }) => ({
  color: ye(0.25, e.color.inverseText),
  fontSize: e.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2
})), Zn = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: r }
}) => {
  let o = De(), i = o.base === "dark" ? o.color.mediumdark : o.color.mediumlight;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(Sh, null, s.isValidElement(e) ? e : typeof e ==
  "object" && "name" in e && /* @__PURE__ */ s.createElement(qs, { icon: e.name, color: e.color || i })), /* @__PURE__ */ s.createElement(wh,
  null, /* @__PURE__ */ s.createElement(Eh, { title: t, hasIcon: !!e }, t), r && /* @__PURE__ */ s.createElement(Ch, null, r)));
}, "ItemContent"), _h = x(te)(({ theme: e }) => ({
  alignSelf: "center",
  marginTop: 0,
  color: e.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
})), Jn = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  _h,
  {
    title: "Dismiss notification",
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), e();
    }
  },
  /* @__PURE__ */ s.createElement(mo, { size: 12 })
), "DismissNotificationItem"), gk = x.div({
  height: 48
}), Th = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: r, onClear: o, onClick: i, id: n, icon: l },
  onDismissNotification: u
}) => {
  let c = A(() => {
    u(n), o && o({ dismissed: !1, timeout: !0 });
  }, [u, o]), d = Q(null);
  V(() => {
    if (t)
      return d.current = setTimeout(c, t), () => clearTimeout(d.current);
  }, [t, c]);
  let p = A(() => {
    clearTimeout(d.current), u(n), o && o({ dismissed: !0, timeout: !1 });
  }, [u, o]);
  return r ? /* @__PURE__ */ s.createElement(Ih, { to: r, duration: t }, /* @__PURE__ */ s.createElement(Zn, { icon: l, content: e }), /* @__PURE__ */ s.
  createElement(Jn, { onDismiss: p })) : i ? /* @__PURE__ */ s.createElement(xh, { duration: t, onClick: () => i({ onDismiss: p }) }, /* @__PURE__ */ s.
  createElement(Zn, { icon: l, content: e }), /* @__PURE__ */ s.createElement(Jn, { onDismiss: p })) : /* @__PURE__ */ s.createElement(kl, {
  duration: t }, /* @__PURE__ */ s.createElement(Zn, { icon: l, content: e }), /* @__PURE__ */ s.createElement(Jn, { onDismiss: p }));
}, "NotificationItem"), Pl = Th;

// src/manager/components/notifications/NotificationList.tsx
var Al = /* @__PURE__ */ a(({
  notifications: e,
  clearNotification: t
}) => /* @__PURE__ */ s.createElement(kh, null, e && e.map((r) => /* @__PURE__ */ s.createElement(
  Pl,
  {
    key: r.id,
    onDismissNotification: (o) => t(o),
    notification: r
  }
))), "NotificationList"), kh = x.div({
  zIndex: 200,
  position: "fixed",
  left: 20,
  bottom: 60,
  [lt]: {
    bottom: 20
  },
  "> * + *": {
    marginTop: 10
  },
  "&:empty": {
    display: "none"
  }
});

// src/manager/container/Notifications.tsx
var Oh = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), Ml = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(he, { filter: Oh }, (t) => /* @__PURE__ */ s.createElement(Al, {
...e, ...t })), "Notifications");

// src/manager/components/hooks/useMedia.tsx
function Dl(e) {
  let t = /* @__PURE__ */ a((n) => typeof window < "u" ? window.matchMedia(n).matches : !1, "getMatches"), [r, o] = Z(t(e));
  function i() {
    o(t(e));
  }
  return a(i, "handleChange"), V(() => {
    let n = window.matchMedia(e);
    return i(), n.addEventListener("change", i), () => {
      n.removeEventListener("change", i);
    };
  }, [e]), r;
}
a(Dl, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var Ll = Ut({
  isMobileMenuOpen: !1,
  setMobileMenuOpen: /* @__PURE__ */ a(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: !1,
  setMobileAboutOpen: /* @__PURE__ */ a(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: !1,
  setMobilePanelOpen: /* @__PURE__ */ a(() => {
  }, "setMobilePanelOpen"),
  isDesktop: !1,
  isMobile: !1
}), Nl = /* @__PURE__ */ a(({ children: e }) => {
  let [t, r] = Z(!1), [o, i] = Z(!1), [n, l] = Z(!1), u = Dl(`(min-width: ${600}px)`), c = !u, d = K(
    () => ({
      isMobileMenuOpen: t,
      setMobileMenuOpen: r,
      isMobileAboutOpen: o,
      setMobileAboutOpen: i,
      isMobilePanelOpen: n,
      setMobilePanelOpen: l,
      isDesktop: u,
      isMobile: c
    }),
    [
      t,
      r,
      o,
      i,
      n,
      l,
      u,
      c
    ]
  );
  return /* @__PURE__ */ s.createElement(Ll.Provider, { value: d }, e);
}, "LayoutProvider"), Ee = /* @__PURE__ */ a(() => Yr(Ll), "useLayout");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Ph = x.div(({ theme: e }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden"
})), Fl = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(Ph, null, e), "MobileAddonsDrawer");

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function ke(e, t) {
  if (e == null) return {};
  var r = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (t.indexOf(o) >= 0) continue;
    r[o] = e[o];
  }
  return r;
}
a(ke, "_objectWithoutPropertiesLoose");

// global-externals:react-dom
var Tr = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Kk, createPortal: jk, createRoot: Uk, findDOMNode: qk, flushSync: kr,
hydrate: Gk, hydrateRoot: Yk, render: Qk, unmountComponentAtNode: Xk, unstable_batchedUpdates: Zk, unstable_renderSubtreeIntoContainer: Jk, version: eO } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var ei = {
  disabled: !1
};

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var ti = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var Bl = /* @__PURE__ */ a(function(t) {
  return t.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
var Or = "unmounted", Tt = "exited", kt = "entering", ar = "entered", ri = "exiting", ct = /* @__PURE__ */ function(e) {
  rr(t, e);
  function t(o, i) {
    var n;
    n = e.call(this, o, i) || this;
    var l = i, u = l && !l.isMounting ? o.enter : o.appear, c;
    return n.appearStatus = null, o.in ? u ? (c = Tt, n.appearStatus = kt) : c = ar : o.unmountOnExit || o.mountOnEnter ? c = Or : c = Tt, n.
    state = {
      status: c
    }, n.nextCallback = null, n;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(i, n) {
    var l = i.in;
    return l && n.status === Or ? {
      status: Tt
    } : null;
  }, "getDerivedStateFromProps");
  var r = t.prototype;
  return r.componentDidMount = /* @__PURE__ */ a(function() {
    this.updateStatus(!0, this.appearStatus);
  }, "componentDidMount"), r.componentDidUpdate = /* @__PURE__ */ a(function(i) {
    var n = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== kt && l !== ar && (n = kt) : (l === kt || l === ar) && (n = ri);
    }
    this.updateStatus(!1, n);
  }, "componentDidUpdate"), r.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), r.getTimeouts = /* @__PURE__ */ a(function() {
    var i = this.props.timeout, n, l, u;
    return n = l = u = i, i != null && typeof i != "number" && (n = i.exit, l = i.enter, u = i.appear !== void 0 ? i.appear : l), {
      exit: n,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), r.updateStatus = /* @__PURE__ */ a(function(i, n) {
    if (i === void 0 && (i = !1), n !== null)
      if (this.cancelNextCallback(), n === kt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this);
          l && Bl(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Tt && this.setState({
      status: Or
    });
  }, "updateStatus"), r.performEnter = /* @__PURE__ */ a(function(i) {
    var n = this, l = this.props.enter, u = this.context ? this.context.isMounting : i, c = this.props.nodeRef ? [u] : [Tr.findDOMNode(this),
    u], d = c[0], p = c[1], h = this.getTimeouts(), f = u ? h.appear : h.enter;
    if (!i && !l || ei.disabled) {
      this.safeSetState({
        status: ar
      }, function() {
        n.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, p), this.safeSetState({
      status: kt
    }, function() {
      n.props.onEntering(d, p), n.onTransitionEnd(f, function() {
        n.safeSetState({
          status: ar
        }, function() {
          n.props.onEntered(d, p);
        });
      });
    });
  }, "performEnter"), r.performExit = /* @__PURE__ */ a(function() {
    var i = this, n = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Tr.findDOMNode(this);
    if (!n || ei.disabled) {
      this.safeSetState({
        status: Tt
      }, function() {
        i.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: ri
    }, function() {
      i.props.onExiting(u), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: Tt
        }, function() {
          i.props.onExited(u);
        });
      });
    });
  }, "performExit"), r.cancelNextCallback = /* @__PURE__ */ a(function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, "cancelNextCallback"), r.safeSetState = /* @__PURE__ */ a(function(i, n) {
    n = this.setNextCallback(n), this.setState(i, n);
  }, "safeSetState"), r.setNextCallback = /* @__PURE__ */ a(function(i) {
    var n = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, n.nextCallback = null, i(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), r.onTransitionEnd = /* @__PURE__ */ a(function(i, n) {
    this.setNextCallback(n);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this), u = i == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = c[0], p = c[1];
      this.props.addEndListener(d, p);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, "onTransitionEnd"), r.render = /* @__PURE__ */ a(function() {
    var i = this.state.status;
    if (i === Or)
      return null;
    var n = this.props, l = n.children, u = n.in, c = n.mountOnEnter, d = n.unmountOnExit, p = n.appear, h = n.enter, f = n.exit, g = n.timeout,
    m = n.addEndListener, v = n.onEnter, S = n.onEntering, C = n.onEntered, y = n.onExit, b = n.onExiting, I = n.onExited, E = n.nodeRef, _ = ke(
    n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(ti.Provider, {
        value: null
      }, typeof l == "function" ? l(i, _) : s.cloneElement(s.Children.only(l), _))
    );
  }, "render"), t;
}(s.Component);
ct.contextType = ti;
ct.propTypes = {};
function ir() {
}
a(ir, "noop");
ct.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ir,
  onEntering: ir,
  onEntered: ir,
  onExit: ir,
  onExiting: ir,
  onExited: ir
};
ct.UNMOUNTED = Or;
ct.EXITED = Tt;
ct.ENTERING = kt;
ct.ENTERED = ar;
ct.EXITING = ri;
var Ot = ct;

// src/manager/components/upgrade/UpgradeBlock.tsx
var So = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = de(), [r, o] = Z("npm");
  return /* @__PURE__ */ s.createElement(Ah, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(Mh, null, /* @__PURE__ */ s.createElement(Hl, { active: r === "npm", onClick: () => o("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  Hl, { active: r === "pnpm", onClick: () => o("pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(Dh, null, r === "npm" ? "npx storybook@l\
atest upgrade" : "pnpm dlx storybook@latest upgrade"), e && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ s.createElement(Le, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), Ah = x.div(({ theme: e }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: e.appBorderColor,
  fontSize: e.typography.size.s2,
  width: "100%",
  [lt]: {
    maxWidth: 400
  }
})), Mh = x.div({
  display: "flex",
  gap: 2
}), Dh = x.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), Hl = x.button(({ theme: e, active: t }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: t ? e.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
var Wl = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = Ee(), r = Q(null);
  return /* @__PURE__ */ s.createElement(
    Ot,
    {
      nodeRef: r,
      in: e,
      timeout: 300,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (o) => /* @__PURE__ */ s.createElement(Lh, { ref: r, state: o, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(Bh, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(Qs, null), "Back"), /* @__PURE__ */ s.createElement(Nh, null, /* @__PURE__ */ s.
    createElement(Rl, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(zl, null, /* @__PURE__ */ s.
    createElement(ho, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(_t, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      Rl,
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
      /* @__PURE__ */ s.createElement(zl, null, /* @__PURE__ */ s.createElement(dl, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(_t, { width: 12 })
    )), /* @__PURE__ */ s.createElement(So, null), /* @__PURE__ */ s.createElement(Fh, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Le, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Le, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), Lh = x.div(
  ({ theme: e, state: t, transitionDuration: r }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${r}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: e.color.defaultText,
    background: e.background.content,
    opacity: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
), Nh = x.div({
  marginTop: 20,
  marginBottom: 20
}), Rl = x.a(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: e.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${e.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
})), zl = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s2 - 1,
  height: 40,
  gap: 5
})), Fh = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), Bh = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: e.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var $l = /* @__PURE__ */ a(({ children: e }) => {
  let t = Q(null), r = Q(null), o = Q(null), { isMobileMenuOpen: i, setMobileMenuOpen: n, isMobileAboutOpen: l, setMobileAboutOpen: u } = Ee();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Ot,
    {
      nodeRef: t,
      in: i,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0,
      onExited: () => u(!1)
    },
    (c) => /* @__PURE__ */ s.createElement(Hh, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      Ot,
      {
        nodeRef: r,
        in: !l,
        timeout: 300
      },
      (d) => /* @__PURE__ */ s.createElement(Rh, { ref: r, state: d }, e)
    ), /* @__PURE__ */ s.createElement(Wl, null))
  ), /* @__PURE__ */ s.createElement(
    Ot,
    {
      nodeRef: o,
      in: i,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (c) => /* @__PURE__ */ s.createElement(
      zh,
      {
        ref: o,
        state: c,
        onClick: () => n(!1),
        "aria-label": "Close navigation menu"
      }
    )
  ));
}, "MobileMenuDrawer"), Hh = x.div(({ theme: e, state: t }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  transform: `${t === "entering" || t === "entered" ? "translateY(0)" : t === "exiting" || t === "exited" ? "translateY(100%)" : "translateY\
(0)"}`
})), Rh = x.div(({ theme: e, state: t }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${t === "entered" || t === "entering" ? 1 : t === "exiting" || t === "exited" ? 0 : 1}`,
  transform: `${(() => {
    switch (t) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
})), zh = x.div(({ state: e }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${300}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (e) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
var Wh = /* @__PURE__ */ a(() => {
  let { index: e } = Ke(), t = de(), r = t.getCurrentStoryData();
  if (!r)
    return "";
  let o = r.renderLabel?.(r, t) || r.name, i = e[r.id];
  for (; "parent" in i && i.parent && e[i.parent] && o.length < 24; )
    i = e[i.parent], o = `${i.renderLabel?.(i, t) || i.name}/${o}`;
  return o;
}, "useFullStoryName"), Vl = /* @__PURE__ */ a(({ menu: e, panel: t, showPanel: r }) => {
  let { isMobileMenuOpen: o, isMobilePanelOpen: i, setMobileMenuOpen: n, setMobilePanelOpen: l } = Ee(), u = Wh();
  return /* @__PURE__ */ s.createElement($h, null, /* @__PURE__ */ s.createElement($l, null, e), i ? /* @__PURE__ */ s.createElement(Fl, null,
  t) : /* @__PURE__ */ s.createElement(Vh, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(Kh, { onClick: () => n(!o), title: "Open\
 navigation menu" }, /* @__PURE__ */ s.createElement(yo, null), /* @__PURE__ */ s.createElement(jh, null, u)), r && /* @__PURE__ */ s.createElement(
  te, { onClick: () => l(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(Xs, null))));
}, "MobileNavigation"), $h = x.div(({ theme: e }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: e.barBg,
  borderTop: `1px solid ${e.appBorderColor}`
})), Vh = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
}), Kh = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: e.barTextColor,
  fontSize: `${e.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: e.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
})), jh = x.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
var Kl = 30, wo = 240, Eo = 270, jl = 0.9;
function Ul(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
a(Ul, "clamp");
function ql(e, t, r) {
  return t + (r - t) * e;
}
a(ql, "interpolate");
function Gl({
  setState: e,
  isPanelShown: t,
  isDesktop: r
}) {
  let o = Q(null), i = Q(null);
  return V(() => {
    let n = o.current, l = i.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, d = /* @__PURE__ */ a((f) => {
      f.preventDefault(), e((g) => ({
        ...g,
        isDragging: !0
      })), f.currentTarget === n ? c = n : f.currentTarget === l && (c = l), window.addEventListener("mousemove", h), window.addEventListener(
      "mouseup", p), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), p = /* @__PURE__ */ a((f) => {
      e((g) => c === l && g.navSize < wo && g.navSize > 0 ? {
        ...g,
        isDragging: !1,
        navSize: wo
      } : c === n && g.panelPosition === "right" && g.rightPanelWidth < Eo && g.rightPanelWidth > 0 ? {
        ...g,
        isDragging: !1,
        rightPanelWidth: Eo
      } : {
        ...g,
        isDragging: !1
      }), window.removeEventListener("mousemove", h), window.removeEventListener("mouseup", p), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), h = /* @__PURE__ */ a((f) => {
      if (f.buttons === 0) {
        p(f);
        return;
      }
      e((g) => {
        if (c === l) {
          let m = f.clientX;
          return m === g.navSize ? g : m <= Kl ? {
            ...g,
            navSize: 0
          } : m <= wo ? {
            ...g,
            navSize: ql(jl, m, wo)
          } : {
            ...g,
            // @ts-expect-error (non strict)
            navSize: Ul(m, 0, f.view.innerWidth)
          };
        }
        if (c === n) {
          let m = g.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", v = g.panelPosition === "bottom" ? (
            // @ts-expect-error (non strict)
            f.view.innerHeight - f.clientY
          ) : (
            // @ts-expect-error (non strict)
            f.view.innerWidth - f.clientX
          );
          if (v === g[m])
            return g;
          if (v <= Kl)
            return {
              ...g,
              [m]: 0
            };
          if (g.panelPosition === "right" && v <= Eo)
            return {
              ...g,
              [m]: ql(
                jl,
                v,
                Eo
              )
            };
          let S = (
            // @ts-expect-error (non strict)
            g.panelPosition === "bottom" ? f.view.innerHeight : f.view.innerWidth
          );
          return {
            ...g,
            [m]: Ul(v, 0, S)
          };
        }
        return g;
      });
    }, "onDrag");
    return n?.addEventListener("mousedown", d), l?.addEventListener("mousedown", d), () => {
      n?.removeEventListener("mousedown", d), l?.removeEventListener("mousedown", d), u?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    t,
    r,
    e
  ]), { panelResizerRef: o, sidebarResizerRef: i };
}
a(Gl, "useDragging");

// src/manager/components/layout/Layout.tsx
var Uh = 100, Yl = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), qh = /* @__PURE__ */ a(({
  managerLayoutState: e,
  setManagerLayoutState: t,
  isDesktop: r,
  hasTab: o
}) => {
  let i = s.useRef(e), [n, l] = Z({
    ...e,
    isDragging: !1
  });
  V(() => {
    n.isDragging || // don't interrupt user's drag
    Yl(e, i.current) || (i.current = e, l((m) => ({ ...m, ...e })));
  }, [n.isDragging, e, l]), qt(() => {
    if (n.isDragging || // wait with syncing managerLayoutState until user is done dragging
    Yl(e, n))
      return;
    let m = {
      navSize: n.navSize,
      bottomPanelHeight: n.bottomPanelHeight,
      rightPanelWidth: n.rightPanelWidth
    };
    i.current = {
      ...i.current,
      ...m
    }, t(m);
  }, [n, t]);
  let u = e.viewMode !== "story" && e.viewMode !== "docs", c = e.viewMode === "story" && !o, { panelResizerRef: d, sidebarResizerRef: p } = Gl(
  {
    setState: l,
    isPanelShown: c,
    isDesktop: r
  }), { navSize: h, rightPanelWidth: f, bottomPanelHeight: g } = n.isDragging ? n : e;
  return {
    navSize: h,
    rightPanelWidth: f,
    bottomPanelHeight: g,
    panelPosition: e.panelPosition,
    panelResizerRef: d,
    sidebarResizerRef: p,
    showPages: u,
    showPanel: c,
    isDragging: n.isDragging
  };
}, "useLayoutSyncingState"), Xl = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: r, ...o }) => {
  let { isDesktop: i, isMobile: n } = Ee(), {
    navSize: l,
    rightPanelWidth: u,
    bottomPanelHeight: c,
    panelPosition: d,
    panelResizerRef: p,
    sidebarResizerRef: h,
    showPages: f,
    showPanel: g,
    isDragging: m
  } = qh({ managerLayoutState: e, setManagerLayoutState: t, isDesktop: i, hasTab: r });
  return /* @__PURE__ */ s.createElement(
    Gh,
    {
      navSize: l,
      rightPanelWidth: u,
      bottomPanelHeight: c,
      panelPosition: e.panelPosition,
      isDragging: m,
      viewMode: e.viewMode,
      showPanel: g
    },
    /* @__PURE__ */ s.createElement(Ml, null),
    f && /* @__PURE__ */ s.createElement(Xh, null, o.slotPages),
    /* @__PURE__ */ s.createElement(hs, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 }, ({ match: v }) => /* @__PURE__ */ s.createElement(
    Qh, { shown: !!v }, o.slotMain)),
    i && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Yh, null, /* @__PURE__ */ s.createElement(Ql, { ref: h }),
    o.slotSidebar), g && /* @__PURE__ */ s.createElement(Zh, { position: d }, /* @__PURE__ */ s.createElement(
      Ql,
      {
        orientation: d === "bottom" ? "horizontal" : "vertical",
        position: d === "bottom" ? "left" : "right",
        ref: p
      }
    ), o.slotPanel)),
    n && /* @__PURE__ */ s.createElement(Vl, { menu: o.slotSidebar, panel: o.slotPanel, showPanel: g })
  );
}, "Layout"), Gh = x.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: r, viewMode: o, panelPosition: i, showPanel: n }) => ({
    width: "100%",
    height: ["100vh", "100dvh"],
    // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [lt]: {
      display: "grid",
      gap: 0,
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${Uh}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${r}px)`,
      gridTemplateAreas: o === "docs" || !n ? `"sidebar content content"
                  "sidebar content content"` : i === "right" ? `"sidebar content panel"
                  "sidebar content panel"` : `"sidebar content content"
                "sidebar panel   panel"`
    }
  })
), Yh = x.div(({ theme: e }) => ({
  backgroundColor: e.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${e.color.border}`
})), Qh = x.div(({ theme: e, shown: t }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: e.background.content,
  display: t ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [lt]: {
    flex: "auto",
    gridArea: "content"
  }
})), Xh = x.div(({ theme: e }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: e.background.content,
  zIndex: 1
})), Zh = x.div(
  ({ theme: e, position: t }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: e.background.content,
    borderTop: t === "bottom" ? `1px solid ${e.color.border}` : void 0,
    borderLeft: t === "right" ? `1px solid ${e.color.border}` : void 0
  })
), Ql = x.div(
  ({ theme: e }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: e.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation: e = "vertical", position: t = "left" }) => e === "vertical" ? {
    width: t === "left" ? 10 : 13,
    height: "100%",
    top: 0,
    right: t === "left" ? "-7px" : void 0,
    left: t === "right" ? "-7px" : void 0,
    "&:after": {
      width: 1,
      height: "100%",
      marginLeft: t === "left" ? 3 : 6
    },
    "&:hover": {
      cursor: "col-resize"
    }
  } : {
    width: "100%",
    height: "13px",
    top: "-7px",
    left: 0,
    "&:after": {
      width: "100%",
      height: 1,
      marginTop: 6
    },
    "&:hover": {
      cursor: "row-resize"
    }
  }
);

// global-externals:@storybook/core/types
var cP = __STORYBOOK_TYPES__, { Addon_TypesEnum: Ae } = __STORYBOOK_TYPES__;

// src/manager/container/Panel.tsx
var Jl = We(Co(), 1);

// src/manager/components/panel/Panel.tsx
var ai = class ai extends He {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  componentDidCatch(t, r) {
    this.setState({ hasError: !0 }), console.error(t, r);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    let { hasError: t } = this.state, { children: r } = this.props;
    return t ? /* @__PURE__ */ s.createElement("h1", null, "Something went wrong.") : r;
  }
};
a(ai, "SafeTab");
var ni = ai, ii = s.memo(
  ({
    panels: e,
    shortcuts: t,
    actions: r,
    selectedPanel: o = null,
    panelPosition: i = "right",
    absolute: n = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = Ee();
    return /* @__PURE__ */ s.createElement(
      Gs,
      {
        absolute: n,
        ...o ? { selected: o } : {},
        menuName: "Addons",
        actions: r,
        showToolsWhenEmpty: !0,
        emptyState: /* @__PURE__ */ s.createElement(
          js,
          {
            title: "Storybook add-ons",
            description: /* @__PURE__ */ s.createElement(s.Fragment, null, "Integrate your tools with Storybook to connect workflows and unl\
ock advanced features."),
            footer: /* @__PURE__ */ s.createElement(Le, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement(tr, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(Jh, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          te,
          {
            key: "position",
            onClick: r.togglePosition,
            title: `Change addon orientation [${Xe(
              t.panelPosition
            )}]`
          },
          i === "bottom" ? /* @__PURE__ */ s.createElement(bo, null) : /* @__PURE__ */ s.createElement(fo, null)
        ), /* @__PURE__ */ s.createElement(
          te,
          {
            key: "visibility",
            onClick: r.toggleVisibility,
            title: `Hide addons [${Xe(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(Ze, null)
        )) : /* @__PURE__ */ s.createElement(te, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(Ze, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, d]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(ni, { key: c, id: c, title: typeof d.title == "function" ? /* @__PURE__ */ s.createElement(d.title, null) :
        d.title }, d.render)
      ))
    );
  }
);
ii.displayName = "AddonPanel";
var Jh = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
var eg = (0, Jl.default)(1)((e) => ({
  onSelect: /* @__PURE__ */ a((t) => e.setSelectedPanel(t), "onSelect"),
  toggleVisibility: /* @__PURE__ */ a(() => e.togglePanel(), "toggleVisibility"),
  togglePosition: /* @__PURE__ */ a(() => e.togglePanelPosition(), "togglePosition")
})), tg = /* @__PURE__ */ a((e) => {
  let t = e.getElements(Ae.PANEL), r = e.getCurrentStoryData();
  if (!t || !r || r.type !== "story")
    return t;
  let { parameters: o } = r, i = {};
  return Object.entries(t).forEach(([n, l]) => {
    let { paramKey: u } = l;
    u && o && o[u] && o[u].disable || (i[n] = l);
  }), i;
}, "getPanels"), rg = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  panels: tg(t),
  selectedPanel: t.getSelectedPanel(),
  panelPosition: e.layout.panelPosition,
  actions: eg(t),
  shortcuts: t.getShortcutKeys()
}), "mapper"), og = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(he, { filter: rg }, (t) => /* @__PURE__ */ s.createElement(ii, {
...e, ...t })), "Panel"), eu = og;

// src/manager/container/Preview.tsx
var Fr = We(Co(), 1);

// src/manager/components/preview/Iframe.tsx
var ng = x.iframe(({ theme: e }) => ({
  backgroundColor: e.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function tu(e) {
  let { active: t, id: r, title: o, src: i, allowFullScreen: n, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(Ys.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    ng,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (d) => d.currentTarget.setAttribute("data-is-loaded", "true"),
      id: r,
      title: o,
      src: i,
      allow: "clipboard-write;",
      allowFullScreen: n,
      ref: c,
      ...u
    }
  ));
}
a(tu, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var zc = We(Rc(), 1);
var Wc = /* @__PURE__ */ a((e) => zc.default.stringify(e, { addQueryPrefix: !0, encode: !1 }).replace(/^\?/, "&"), "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
var ov = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), nv = x(we)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: e.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
})), iv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), av = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
}, $c = /* @__PURE__ */ a(({
  refs: e,
  scale: t,
  viewMode: r = "story",
  refId: o,
  queryParams: i = {},
  baseUrl: n,
  storyId: l = "*"
}) => {
  let u = e[o]?.version, c = Wc({
    ...i,
    ...u && { version: u }
  }), d = ov(o, e), { current: p } = Q({}), h = Object.values(e).filter((f) => f.type === "auto-inject" || f.id === o, {});
  return p["storybook-preview-iframe"] || (p["storybook-preview-iframe"] = Jt(n, l, {
    ...i,
    ...u && { version: u },
    viewMode: r
  })), h.forEach((f) => {
    let g = `storybook-ref-${f.id}`, m = p[g]?.split("/iframe.html")[0];
    if (!m || f.url !== m) {
      let v = `${f.url}/iframe.html?id=${l}&viewMode=${r}&refId=${f.id}${c}`;
      p[g] = v;
    }
  }), /* @__PURE__ */ s.createElement(Te, null, /* @__PURE__ */ s.createElement(Yt, { styles: av }), /* @__PURE__ */ s.createElement(he, { filter: iv },
  ({ isFullscreen: f, isNavShown: g, selectedStoryId: m }) => f || !g || !m ? null : /* @__PURE__ */ s.createElement(nv, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${m}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(p).map(([f, g]) => /* @__PURE__ */ s.
  createElement(Te, { key: f }, /* @__PURE__ */ s.createElement(
    tu,
    {
      active: f === d,
      key: f,
      id: f,
      title: f,
      src: g,
      allowFullScreen: !0,
      scale: t
    }
  ))));
}, "FramesRenderer");

// src/manager/components/preview/tools/addons.tsx
var sv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsPanelShown(),
  singleStory: t.singleStory,
  panelPosition: t.layout.panelPosition,
  toggle: /* @__PURE__ */ a(() => e.togglePanel(), "toggle")
}), "menuMapper"), Vc = {
  title: "addons",
  id: "addons",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: sv }, ({ isVisible: e, toggle: t, singleStory: r, panelPosition: o }) => !r &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, o === "bottom" ? /* @__PURE__ */ s.createElement(fo, null) : /* @__PURE__ */ s.createElement(bo, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var Yc = We(Gc(), 1);
var { PREVIEW_URL: dv, document: fv } = ae, mv = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: r, refs: o } = e, { location: i } = fv, n = o[r], l = `${i.origin}${i.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: r,
    baseUrl: n ? `${n.url}/iframe.html` : dv || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), Qc = {
  title: "copy",
  id: "copy",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: mv }, ({ baseUrl: e, storyId: t, queryParams: r }) => t ? /* @__PURE__ */ s.
  createElement(
    te,
    {
      key: "copy",
      onClick: () => (0, Yc.default)(Jt(e, t, r)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(ll, null)
  ) : null), "render")
};

// src/manager/components/preview/tools/eject.tsx
var { PREVIEW_URL: hv } = ae, gv = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: r, refs: o } = e, i = o[r];
  return {
    refId: r,
    baseUrl: i ? `${i.url}/iframe.html` : hv || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), Xc = {
  title: "eject",
  id: "eject",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: gv }, ({ baseUrl: e, storyId: t, queryParams: r }) => t ? /* @__PURE__ */ s.
  createElement(te, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: Jt(e, t, r),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
    /* @__PURE__ */ s.createElement(_t, null)
  )) : null), "render")
};

// src/manager/components/preview/tools/remount.tsx
var yv = x(te)(({ theme: e, animating: t, disabled: r }) => ({
  opacity: r ? 0.5 : 1,
  svg: {
    animation: t ? `${e.animation.rotate360} 1000ms ease-out` : void 0
  }
})), vv = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: r } = t;
  return {
    storyId: r,
    remount: /* @__PURE__ */ a(() => e.emit(Pn, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), Zc = {
  title: "remount",
  id: "remount",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: vv }, ({ remount: e, storyId: t, api: r }) => {
    let [o, i] = Z(!1), n = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return r.on(Pn, () => {
      i(!0);
    }), /* @__PURE__ */ s.createElement(
      yv,
      {
        key: "remount",
        title: "Remount component",
        onClick: n,
        onAnimationEnd: () => i(!1),
        animating: o,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(mt, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/zoom.tsx
var Nr = 1, Jc = Ut({ value: Nr, set: /* @__PURE__ */ a((e) => {
}, "set") }), Li = class Li extends He {
  constructor() {
    super(...arguments);
    this.state = {
      value: Nr
    };
    this.set = /* @__PURE__ */ a((r) => this.setState({ value: r }), "set");
  }
  render() {
    let { children: r, shouldScale: o } = this.props, { set: i } = this, { value: n } = this.state;
    return /* @__PURE__ */ s.createElement(Jc.Provider, { value: { value: o ? n : Nr, set: i } }, r);
  }
};
a(Li, "ZoomProvider");
var Wo = Li, { Consumer: Di } = Jc, bv = Ir(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: r, reset: o }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(gl, null)), /* @__PURE__ */ s.createElement(te, { key: "zoomout", onClick: r, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(yl, null)), /* @__PURE__ */ s.createElement(te, { key: "zoomreset", onClick: o, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  vl, null)));
}, "Zoom"));
var xv = Ir(/* @__PURE__ */ a(function({
  set: t,
  value: r
}) {
  let o = A(
    (l) => {
      l.preventDefault(), t(0.8 * r);
    },
    [t, r]
  ), i = A(
    (l) => {
      l.preventDefault(), t(1.25 * r);
    },
    [t, r]
  ), n = A(
    (l) => {
      l.preventDefault(), t(Nr);
    },
    [t, Nr]
  );
  return /* @__PURE__ */ s.createElement(bv, { key: "zoom", zoomIn: o, zoomOut: i, reset: n });
}, "ZoomWrapper"));
function Iv() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Di, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(xv, { set: e, value: t })), /* @__PURE__ */ s.createElement(Zt, null));
}
a(Iv, "ZoomToolRenderer");
var ep = {
  title: "zoom",
  id: "zoom",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: Iv
};

// src/manager/components/preview/Toolbar.tsx
var Sv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: Xe(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(Ae.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), rp = {
  title: "fullscreen",
  id: "fullscreen",
  type: ve.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a((e) => ["story", "docs"].includes(e.viewMode), "match"),
  render: /* @__PURE__ */ a(() => {
    let { isMobile: e } = Ee();
    return e ? null : /* @__PURE__ */ s.createElement(he, { filter: Sv }, ({ toggle: t, isFullscreen: r, shortcut: o, hasPanel: i, singleStory: n }) => (!n ||
    n && i) && /* @__PURE__ */ s.createElement(
      te,
      {
        key: "full",
        onClick: t,
        title: `${r ? "Exit full screen" : "Go full screen"} [${o}]`,
        "aria-label": r ? "Exit full screen" : "Go full screen"
      },
      r ? /* @__PURE__ */ s.createElement(Ze, null) : /* @__PURE__ */ s.createElement(rl, null)
    ));
  }, "render")
};
var op = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: r,
  toolsExtra: o,
  tabs: i,
  tabId: n,
  api: l
}) {
  return i || r || o ? /* @__PURE__ */ s.createElement(Ev, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(Cv, null, /* @__PURE__ */ s.createElement(np, null, i.length > 1 ? /* @__PURE__ */ s.createElement(Te,
  null, /* @__PURE__ */ s.createElement(lo, { key: "tabs" }, i.map((u, c) => /* @__PURE__ */ s.createElement(
    uo,
    {
      disabled: u.disabled,
      active: u.id === n || u.id === "canvas" && !n,
      onClick: () => {
        l.applyQueryParams({ tab: u.id === "canvas" ? void 0 : u.id });
      },
      key: u.id || `tab-${c}`
    },
    u.title
  ))), /* @__PURE__ */ s.createElement(Zt, null)) : null, /* @__PURE__ */ s.createElement(tp, { key: "left", list: r })), /* @__PURE__ */ s.
  createElement(_v, null, /* @__PURE__ */ s.createElement(tp, { key: "right", list: o })))) : null;
}, "ToolbarComp")), tp = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: r, id: o, ...i }, n) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(r, { key: o || i.key || `f-${n}` })
  )));
}, "Tools"));
function wv(e, t) {
  let r = t?.type === "story" && t?.prepared ? t?.parameters : {}, o = "toolbar" in r ? r.toolbar : void 0, { toolbar: i } = Qe.getConfig(),
  n = Gr(
    i || {},
    o || {}
  );
  return n ? !!n[e?.id]?.hidden : !1;
}
a(wv, "toolbarItemHasBeenExcluded");
function Ni(e, t, r, o, i, n) {
  let l = /* @__PURE__ */ a((u) => u && (!u.match || u.match({
    storyId: t?.id,
    refId: t?.refId,
    viewMode: r,
    location: o,
    path: i,
    tabId: n
  })) && !wv(u, t), "filter");
  return e.filter(l);
}
a(Ni, "filterToolsSide");
var Ev = x.div(({ theme: e, shown: t }) => ({
  position: "relative",
  color: e.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: t ? 0 : -40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  zIndex: 4
})), Cv = x.div({
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
}), np = x.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
}), _v = x(np)({
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
var ip = x.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
}), ap = x.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
}), sp = x.div(
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show: e }) => ({ display: e ? "grid" : "none" })
), kM = x(Qr)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), OM = x.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
}), $o = x.div(({ theme: e }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
})), lp = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: e.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
var up = /* @__PURE__ */ a(({
  wrappers: e,
  id: t,
  storyId: r,
  children: o
}) => /* @__PURE__ */ s.createElement(Te, null, e.reduceRight(
  (i, n, l) => /* @__PURE__ */ s.createElement(n.render, { index: l, children: i, id: t, storyId: r }),
  o
)), "ApplyWrappers"), cp = [
  {
    id: "iframe-wrapper",
    type: Ae.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement($o, { id: "storybook-preview-wrapper" }, e.children), "render")
  }
];

// src/manager/components/preview/Preview.tsx
var kv = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  storyId: e.storyId,
  refId: e.refId,
  viewMode: e.viewMode,
  customCanvas: t.renderPreview,
  queryParams: e.customQueryParams,
  getElements: t.getElements,
  entry: t.getData(e.storyId, e.refId),
  previewInitialized: e.previewInitialized,
  refs: e.refs
}), "canvasMapper"), pp = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: ve.TAB,
  title: "Canvas",
  route: /* @__PURE__ */ a(({ storyId: e, refId: t }) => t ? `/story/${t}_${e}` : `/story/${e}`, "route"),
  match: /* @__PURE__ */ a(({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ a(() => null, "render")
}), "createCanvasTab"), dp = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: r,
    id: o,
    options: i,
    viewMode: n,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: d,
    withLoader: p = !0,
    tools: h,
    toolsExtra: f,
    tabs: g,
    wrappers: m,
    tabId: v
  } = t, S = g.find((I) => I.id === v)?.render, C = n === "story", { showToolbar: y } = i, b = Q(l);
  return V(() => {
    if (u && n) {
      if (l === b.current)
        return;
      if (b.current = l, n.match(/docs|story/)) {
        let { refId: I, id: E } = u;
        r.emit(is, {
          storyId: E,
          viewMode: n,
          options: { target: I }
        });
      }
    }
  }, [u, n, l, r]), /* @__PURE__ */ s.createElement(Te, null, o === "main" && /* @__PURE__ */ s.createElement(_r, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(Wo, { shouldScale: C }, /* @__PURE__ */ s.createElement(ip, null, /* @__PURE__ */ s.
  createElement(
    op,
    {
      key: "tools",
      isShown: y,
      tabId: v,
      tabs: g,
      tools: h,
      toolsExtra: f,
      api: r
    }
  ), /* @__PURE__ */ s.createElement(ap, { key: "frame" }, S && /* @__PURE__ */ s.createElement($o, null, S({ active: !0 })), /* @__PURE__ */ s.
  createElement(sp, { show: !v }, /* @__PURE__ */ s.createElement(Ov, { withLoader: p, baseUrl: d, wrappers: m }))))));
}, "Preview"));
var Ov = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: r }) => /* @__PURE__ */ s.createElement(he, { filter: kv }, ({
  entry: o,
  refs: i,
  customCanvas: n,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: d,
  previewInitialized: p
}) => {
  let h = "canvas", [f, g] = Z(void 0);
  V(() => {
    if (ae.CONFIG_TYPE === "DEVELOPMENT")
      try {
        Qe.getChannel().on(rs, (b) => {
          g(b);
        });
      } catch {
      }
  }, []);
  let m = !!i[u] && !i[u].previewInitialized, v = !(f?.value === 1 || f === void 0), S = !u && (!p || v), C = o && m || S;
  return /* @__PURE__ */ s.createElement(Di, null, ({ value: y }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && C && /* @__PURE__ */ s.
  createElement(lp, null, /* @__PURE__ */ s.createElement(io, { id: "preview-loader", role: "progressbar", progress: f })), /* @__PURE__ */ s.
  createElement(up, { id: h, storyId: l, viewMode: c, wrappers: r }, n ? n(l, c, h, e, y, d) : /* @__PURE__ */ s.createElement(
    $c,
    {
      baseUrl: e,
      refs: i,
      scale: y,
      entry: o,
      viewMode: c,
      refId: u,
      queryParams: d,
      storyId: l
    }
  ))));
}), "Canvas");
function fp(e, t) {
  let { previewTabs: r } = Qe.getConfig(), o = t ? t.previewTabs : void 0;
  if (r || o) {
    let i = Gr(r || {}, o || {}), n = Object.keys(i).map((l, u) => ({
      index: u,
      ...typeof i[l] == "string" ? { title: i[l] } : i[l],
      id: l
    }));
    return e.filter((l) => {
      let u = n.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = n.find((f) => f.id === l.id), d = c ? c.index : n.length + l.index, p = n.find((f) => f.id === u.id), h = p ? p.index : n.length +
      u.index;
      return d - h;
    }).map((l) => {
      let u = n.find((c) => c.id === l.id);
      return u ? {
        ...l,
        title: u.title || l.title,
        disabled: u.disabled,
        hidden: u.hidden
      } : l;
    });
  }
  return e;
}
a(fp, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var Pv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), mp = {
  title: "menu",
  id: "menu",
  type: ve.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: Pv }, ({ isVisible: e, toggle: t, singleStory: r }) => !r &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(yo, null)), /* @__PURE__ */ s.createElement(Zt, null))), "render")
};

// src/manager/container/Preview.tsx
var Av = [pp()], Mv = [mp, Zc, ep], Dv = [Vc, rp, Xc, Qc], Lv = [], Nv = (0, Fr.default)(1)(
  (e, t, r, o) => o ? fp([...Av, ...Object.values(t)], r) : Lv
), Fv = (0, Fr.default)(1)(
  (e, t, r) => Ni([...Mv, ...Object.values(t)], ...r)
), Bv = (0, Fr.default)(1)(
  (e, t, r) => Ni([...Dv, ...Object.values(t)], ...r)
), Hv = (0, Fr.default)(1)((e, t) => [
  ...cp,
  ...Object.values(t)
]), { PREVIEW_URL: Rv } = ae, zv = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), Wv = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: r } = e;
    return t && r ? zv(`${t} - ${r} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), $v = /* @__PURE__ */ a(({
  api: e,
  state: t
  // @ts-expect-error (non strict)
}) => {
  let { layout: r, location: o, customQueryParams: i, storyId: n, refs: l, viewMode: u, path: c, refId: d } = t, p = e.getData(n, d), h = Object.
  values(e.getElements(Ae.TAB)), f = Object.values(e.getElements(Ae.PREVIEW)), g = Object.values(e.getElements(Ae.TOOL)), m = Object.values(
  e.getElements(Ae.TOOLEXTRA)), v = e.getQueryParam("tab"), S = Fv(g.length, e.getElements(Ae.TOOL), [
    p,
    u,
    o,
    c,
    // @ts-expect-error (non strict)
    v
  ]), C = Bv(
    m.length,
    e.getElements(Ae.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [p, u, o, c, v]
  );
  return {
    api: e,
    entry: p,
    options: r,
    description: Wv(p),
    viewMode: u,
    refs: l,
    storyId: n,
    baseUrl: Rv || "iframe.html",
    queryParams: i,
    tools: S,
    toolsExtra: C,
    tabs: Nv(
      h.length,
      e.getElements(Ae.TAB),
      p ? p.parameters : void 0,
      r.showTabs
    ),
    wrappers: Hv(
      f.length,
      e.getElements(Ae.PREVIEW)
    ),
    tabId: v
  };
}, "mapper"), Vv = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(he, { filter: $v }, (r) => /* @__PURE__ */ s.createElement(dp, { ...t, ...r }));
}, "PreviewConnected")), hp = Vv;

// src/manager/components/sidebar/HighlightStyles.tsx
var gp = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  Yt,
  {
    styles: ({ color: r }) => {
      let o = ye(0.85, r.secondary);
      return {
        [`[data-ref-id="${e}"][data-item-id="${t}"]:not([data-selected="true"])`]: {
          '&[data-nodetype="component"], &[data-nodetype="group"]': {
            background: o,
            "&:hover, &:focus": { background: o }
          },
          '&[data-nodetype="story"], &[data-nodetype="document"]': {
            color: r.defaultText,
            background: o,
            "&:hover, &:focus": { background: o }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
var gr = We(Co(), 1);
var { document: bp, window: Kv } = ae, Vo = /* @__PURE__ */ a((e, t) => !t || t === st ? e : `${t}_${e}`, "createId"), xp = /* @__PURE__ */ a(
(e, t) => `${bp.location.pathname}?path=/${e.type}/${Vo(e.id, t)}`, "getLink");
var yp = (0, gr.default)(1e3)((e, t) => t[e]), jv = (0, gr.default)(1e3)((e, t) => {
  let r = yp(e, t);
  return r && r.type !== "root" ? yp(r.parent, t) : void 0;
}), Ip = (0, gr.default)(1e3)((e, t) => {
  let r = jv(e, t);
  return r ? [r, ...Ip(r.id, t)] : [];
}), Br = (0, gr.default)(1e3)(
  (e, t) => Ip(t, e).map((r) => r.id)
), at = (0, gr.default)(1e3)((e, t, r) => {
  let o = e[t];
  return (o.type === "story" || o.type === "docs" ? [] : o.children).reduce((n, l) => {
    let u = e[l];
    return !u || r && (u.type === "story" || u.type === "docs") || n.push(l, ...at(e, l, r)), n;
  }, []);
});
function Sp(e, t) {
  let r = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return r ? [...Sp(r, t), r.name] : t.id === st ? [] : [t.title || t.id];
}
a(Sp, "getPath");
var Fi = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: Sp(e, t) }), "searchItem");
function wp(e, t, r) {
  let o = t + r % e.length;
  return o < 0 && (o = e.length + o), o >= e.length && (o -= e.length), o;
}
a(wp, "cycle");
var Nt = /* @__PURE__ */ a((e, t = !1) => {
  if (!e)
    return;
  let { top: r, bottom: o } = e.getBoundingClientRect();
  r >= 0 && o <= (Kv.innerHeight || bp.documentElement.clientHeight) || e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), Ep = /* @__PURE__ */ a((e, t, r, o) => {
  switch (!0) {
    case t:
      return "auth";
    case r:
      return "error";
    case e:
      return "loading";
    case o:
      return "empty";
    default:
      return "ready";
  }
}, "getStateType"), Ft = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : Ft(e.parentElement || void 0, t), "isAncestor"), vp = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), Cp = /* @__PURE__ */ a((e, t) => vp(e) === vp(t), "isStoryHoistable");

// global-externals:@storybook/core/client-logger
var wD = __STORYBOOK_CLIENT_LOGGER__, { deprecate: ED, logger: _p, once: CD, pretty: _D } = __STORYBOOK_CLIENT_LOGGER__;

// src/manager/components/sidebar/Loader.tsx
var Tp = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], Uv = x.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth: e = 0 }) => ({
    marginLeft: e * 15,
    maxWidth: 85 - e * 5
  }),
  ({ theme: e }) => e.animation.inlineGlow,
  ({ theme: e }) => ({
    background: e.appBorderColor
  })
), Hr = x.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
}), kp = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / Tp.length), r = Array.from(Array(t)).fill(Tp).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(Te, null, r.map((o, i) => /* @__PURE__ */ s.createElement(Uv, { depth: o, key: i })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: Op } = ae, qv = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), Bi = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: e.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
})), Gv = x.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme: e }) => ({
    color: e.color.dark
  })
), Pp = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [r, o] = Z(!1), i = A(() => {
    Op.document.location.reload();
  }, []), n = A((l) => {
    l.preventDefault();
    let u = Op.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), o(!0)) : (_p.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Hr, null, /* @__PURE__ */ s.createElement(ut, null, r ? /* @__PURE__ */ s.createElement(Te, null, /* @__PURE__ */ s.
  createElement(Bi, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(we, { small: !0, gray: !0, onClick: i }, /* @__PURE__ */ s.
  createElement(mt, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(Te, null, /* @__PURE__ */ s.createElement(Bi, null, "Sign in t\
o browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(we, { small: !0, gray: !0, onClick: n },
  /* @__PURE__ */ s.createElement(go, null), "Sign in")))));
}, "AuthBlock"), Ap = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(Hr, null, /* @__PURE__ */ s.createElement(ut, null,
/* @__PURE__ */ s.createElement(qv, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  Re,
  {
    tooltip: /* @__PURE__ */ s.createElement(Gv, null, /* @__PURE__ */ s.createElement(Us, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Le, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement(er, null))
), " ", /* @__PURE__ */ s.createElement(Le, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), Yv = x(ut)({
  display: "flex"
}), Qv = x(ut)({
  flex: 1
}), Mp = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(Hr, null, /* @__PURE__ */ s.createElement(Yv, { col: 1 }, /* @__PURE__ */ s.
createElement(Qv, null, /* @__PURE__ */ s.createElement(Bi, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
ok is empty. Possible reasons why:", /* @__PURE__ */ s.createElement("ul", null, /* @__PURE__ */ s.createElement("li", null, "The glob speci\
fied in ", /* @__PURE__ */ s.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ s.createElement("li", null, "No sto\
ries are defined in your story files."), /* @__PURE__ */ s.createElement("li", null, "You're using filter-functions, and all stories are fil\
tered away.")), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null, "This composed storybook is empty, maybe you're using filter-functi\
ons, and all stories are filtered away."))))), "EmptyBlock"), Dp = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(Hr, null,
/* @__PURE__ */ s.createElement(kp, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: Xv, window: Zv } = ae, Jv = x.aside(({ theme: e }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: e.layoutMargin
  }
})), eb = x.button(({ theme: e }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText),
  "&:hover": {
    color: e.barSelectedColor
  },
  "&:focus": {
    color: e.barSelectedColor,
    borderColor: e.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
})), Bt = x.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Ht = x.a(({ theme: e }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: e.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  "&:hover": {
    background: e.background.hoverable,
    color: e.color.darker
  },
  "&:link": {
    color: e.color.darker
  },
  "&:active": {
    color: e.color.darker
  },
  "&:focus": {
    color: e.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
})), tb = x.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
}), rb = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s1,
  fontWeight: e.typography.weight.regular,
  color: e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
})), ob = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let r = K(() => {
    let o = Object.entries(t).find(([i, n]) => n === e);
    return o && o[0] ? o[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(rb, null, /* @__PURE__ */ s.createElement("span", null, r), /* @__PURE__ */ s.createElement(er, null));
}, "CurrentVersion"), Lp = s.memo(
  cs(
    ({ state: e, ...t }, r) => {
      let o = de(), i = K(() => Object.values(t.index || {}), [t.index]), n = K(
        () => i.filter((u) => u.type === "component").length,
        [i]
      ), l = K(
        () => i.filter((u) => u.type === "docs" || u.type === "story").length,
        [i]
      );
      return /* @__PURE__ */ s.createElement(Jv, { ref: r }, /* @__PURE__ */ s.createElement(
        Re,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: /* @__PURE__ */ s.createElement(tb, null, /* @__PURE__ */ s.createElement(ut, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(ub, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(lb, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(nb, { url: t.url, componentCount: n, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(ib, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(ab, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(cb, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          sb, null)))
        },
        /* @__PURE__ */ s.createElement(eb, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        jn, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        Re,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: (u) => /* @__PURE__ */ s.createElement(
            Ct,
            {
              links: Object.entries(t.versions).map(([c, d]) => ({
                icon: d === t.url ? "check" : void 0,
                id: c,
                title: c,
                href: d,
                onClick: /* @__PURE__ */ a((p, h) => {
                  p.preventDefault(), o.changeRefVersion(t.id, h.href), u.onHide();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement(ob, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), nb = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: r }) => {
  let o = De();
  return /* @__PURE__ */ s.createElement(Ht, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(jn,
  { color: o.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", r, " stories in a new browser tab.")));
}, "ReadyMessage"), ib = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(Ht, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(ul, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "View source code")));
}, "SourceCodeMessage"), ab = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let r = De(), o = A((i) => {
    i.preventDefault();
    let n = Zv.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      n ? n.closed && (clearInterval(l), Xv.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Ht, { onClick: o }, /* @__PURE__ */ s.createElement(go, { color: r.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), sb = /* @__PURE__ */ a(() => {
  let e = De();
  return /* @__PURE__ */ s.createElement(
    Ht,
    {
      href: "https://storybook.js.org/docs/react/sharing/storybook-composition",
      target: "_blank"
    },
    /* @__PURE__ */ s.createElement(tr, { color: e.color.green }),
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "Read Composition docs"), /* @__PURE__ */ s.createElement(
    "div", null, "Learn how to combine multiple Storybooks into one."))
  );
}, "ReadDocsMessage"), lb = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(Ht, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(po,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), ub = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(Ht, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(fl,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), cb = /* @__PURE__ */ a(() => {
  let e = De();
  return /* @__PURE__ */ s.createElement(
    Ht,
    {
      href: "https://storybook.js.org/docs/react/sharing/storybook-composition#improve-your-storybook-composition",
      target: "_blank"
    },
    /* @__PURE__ */ s.createElement(sl, { color: e.color.gold }),
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Bt, null, "Reduce lag"), /* @__PURE__ */ s.createElement("d\
iv", null, "Learn how to speed up Composition performance."))
  );
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
var pb = x.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`, Np = "icon--group", Fp = "icon--component", Bp = "icon--document", Hp = "icon--story", Rp = "icon--success", zp = "icon--error", Wp = "ic\
on--warning", $p = "icon--dot", Vp = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(pb, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: Np }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v\
-8.5a.5.5 0 00-.5-.5H7z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Fp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0\
 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Bp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 \
1h-5a.5.5 0 01-.5-.5z",
    fill: "currentColor"
  }
), /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0\
 00.5.5h2V13H2V1z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Hp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.\
5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Rp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: zp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Wp }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.4\
97.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: $p }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Be = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${Np}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Fp}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${Bp}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Hp}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${Rp}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${zp}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Wp}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${$p}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var db = x(Js)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
}), fb = x(db)(({ theme: { animation: e, color: t, base: r } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: r === "light" ? t.mediumdark : t.darker
})), mb = ["unknown", "pending", "success", "warn", "error"], Rr = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ s.createElement(fb, { key: "icon" }), "currentColor"],
  success: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Be, { type: "success" })),
    "currentColor"
  ],
  warn: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Be, { type: "warning" })),
    "#A15C20"
  ],
  error: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Be, { type: "error" })),
    "brown"
  ]
}, zr = /* @__PURE__ */ a((e) => mb.reduce(
  (t, r) => e.includes(r) ? r : t,
  "unknown"
), "getHighestStatus");
function Ko(e, t) {
  return Object.values(e).reduce((r, o) => {
    if (o.type === "group" || o.type === "component") {
      let i = at(e, o.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), n = zr(
        // @ts-expect-error (non strict)
        i.flatMap((l) => Object.values(t?.[l.id] || {})).map((l) => l.status)
      );
      n && (r[o.id] = n);
    }
    return r;
  }, {});
}
a(Ko, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var Kp = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let r = e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText);
  return {
    color: {
      pending: r,
      success: e.color.positive,
      error: e.color.negative,
      warn: e.color.warning,
      unknown: r
    }[t]
  };
}, "withStatusColor"), jp = x.div(Kp, {
  margin: 3
}), Hi = x(te)(
  Kp,
  ({ theme: e, height: t, width: r }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: r || 28,
    height: t || 28,
    "&:hover": {
      color: e.color.secondary
    },
    "&:focus": {
      color: e.color.secondary,
      borderColor: e.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme: e, selectedItem: t }) => t && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${e.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/StatusContext.tsx
var Ri = Ut({}), Up = /* @__PURE__ */ a((e) => {
  let { data: t, status: r, groupStatus: o } = Yr(Ri), i = {
    counts: { pending: 0, success: 0, error: 0, warn: 0, unknown: 0 },
    statuses: { pending: {}, success: {}, error: {}, warn: {}, unknown: {} }
  };
  if (t && r && o && ["pending", "warn", "error"].includes(o[e.id]))
    for (let n of at(t, e.id, !1))
      for (let l of Object.values(r[n] || {}))
        i.counts[l.status]++, i.statuses[l.status][n] = i.statuses[l.status][n] || [], i.statuses[l.status][n].push(l);
  return i;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var hb = x.div(({ theme: e, isExpanded: t }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: ye(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), Rt = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(hb, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
vg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
var bt = x.svg(
  ({ theme: e, type: t }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: t === "group" ? e.base === "dark" ? e.color.primary : e.color.ultraviolet : t === "component" ? e.color.secondary : t === "docume\
nt" ? e.base === "dark" ? e.color.gold : "#ff8300" : t === "story" ? e.color.seafoam : "currentColor"
  })
), qp = x.button(({ theme: e, depth: t = 0, isExpandable: r = !1 }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(r ? 8 : 22) + t * 18}px`,
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4
})), Gp = x.a(({ theme: e, depth: t = 0 }) => ({
  width: "100%",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + t * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${e.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
})), Yp = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor
})), jo = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
}), Qp = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: r = !1,
  isExpandable: o = !1,
  ...i
}) {
  return /* @__PURE__ */ s.createElement(qp, { isExpandable: o, tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(jo, null, o && /* @__PURE__ */ s.
  createElement(Rt, { isExpanded: r }), /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Be, { type: "group" }))), t);
}, "GroupNode")), Xp = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: r, isExpanded: o, isExpandable: i, isSelected: n, ...l }) {
    return /* @__PURE__ */ s.createElement(qp, { isExpandable: i, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(jo, null, i && /* @__PURE__ */ s.
    createElement(Rt, { isExpanded: o }), /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Be, { type: "component" }))), r);
  }, "ComponentNode")
), Zp = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: r, docsMode: o, ...i }) {
    return /* @__PURE__ */ s.createElement(Gp, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(jo, null, /* @__PURE__ */ s.createElement(
    bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Be, { type: "document" }))), r);
  }, "DocumentNode")
), Jp = s.memo(/* @__PURE__ */ a(function({
  theme: t,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ s.createElement(Gp, { tabIndex: -1, ...o }, /* @__PURE__ */ s.createElement(jo, null, /* @__PURE__ */ s.createElement(
  bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Be, { type: "story" }))), r);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function Uo(e, t, { signal: r, edges: o } = {}) {
  let i, n = null, l = o != null && o.includes("leading"), u = o == null || o.includes("trailing"), c = /* @__PURE__ */ a(() => {
    n !== null && (e.apply(i, n), i = void 0, n = null);
  }, "invoke"), d = /* @__PURE__ */ a(() => {
    u && c(), g();
  }, "onTimerEnd"), p = null, h = /* @__PURE__ */ a(() => {
    p != null && clearTimeout(p), p = setTimeout(() => {
      p = null, d();
    }, t);
  }, "schedule"), f = /* @__PURE__ */ a(() => {
    p !== null && (clearTimeout(p), p = null);
  }, "cancelTimer"), g = /* @__PURE__ */ a(() => {
    f(), i = void 0, n = null;
  }, "cancel"), m = /* @__PURE__ */ a(() => {
    f(), c();
  }, "flush"), v = /* @__PURE__ */ a(function(...S) {
    if (r?.aborted)
      return;
    i = this, n = S;
    let C = p == null;
    h(), l && C && c();
  }, "debounced");
  return v.schedule = h, v.cancel = g, v.flush = m, r?.addEventListener("abort", g, { once: !0 }), v;
}
a(Uo, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function zi(e, t, { signal: r, edges: o = ["leading", "trailing"] } = {}) {
  let i = null, n = Uo(e, t, { signal: r, edges: o }), l = /* @__PURE__ */ a(function(...u) {
    i == null ? i = Date.now() : Date.now() - i >= t && (n.cancel(), n(...u)), n(...u);
  }, "throttled");
  return l.cancel = n.cancel, l.flush = n.flush, l;
}
a(zi, "throttle");

// src/manager/keybinding.ts
var gb = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
}, yb = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, xt = /* @__PURE__ */ a((e, t) => {
  let { alt: r, ctrl: o, meta: i, shift: n } = e === !1 ? yb : e;
  return !(typeof r == "boolean" && r !== t.altKey || typeof o == "boolean" && o !== t.ctrlKey || typeof i == "boolean" && i !== t.metaKey ||
  typeof n == "boolean" && n !== t.shiftKey);
}, "matchesModifiers"), Ue = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === gb[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: Wi } = ae, vb = /* @__PURE__ */ a(({
  refId: e,
  data: t,
  initialExpanded: r,
  highlightedRef: o,
  rootIds: i
}) => {
  let n = o.current?.refId === e ? Br(t, o.current?.itemId) : [];
  return [...i, ...n].reduce(
    // @ts-expect-error (non strict)
    (l, u) => Object.assign(l, { [u]: u in r ? r[u] : !0 }),
    {}
  );
}, "initializeExpanded"), bb = /* @__PURE__ */ a(() => {
}, "noop"), ed = /* @__PURE__ */ a(({
  containerRef: e,
  isBrowsing: t,
  refId: r,
  data: o,
  initialExpanded: i,
  rootIds: n,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: d
}) => {
  let p = de(), [h, f] = Gt(
    (y, { ids: b, value: I }) => b.reduce((E, _) => Object.assign(E, { [_]: I }), { ...y }),
    // @ts-expect-error (non strict)
    { refId: r, data: o, highlightedRef: l, rootIds: n, initialExpanded: i },
    vb
  ), g = A(
    (y) => e.current?.querySelector(`[data-item-id="${y}"]`),
    [e]
  ), m = A(
    (y) => {
      u(y.getAttribute("data-item-id")), Nt(y);
    },
    [u]
  ), v = A(
    ({ ids: y, value: b }) => {
      if (f({ ids: y, value: b }), y.length === 1) {
        let I = e.current?.querySelector(
          `[data-item-id="${y[0]}"][data-ref-id="${r}"]`
        );
        I && m(I);
      }
    },
    [e, m, r]
  );
  V(() => {
    f({ ids: Br(o, c), value: !0 });
  }, [o, c]);
  let S = A(() => {
    let y = Object.keys(o).filter((b) => !n.includes(b));
    f({ ids: y, value: !1 });
  }, [o, n]), C = A(() => {
    f({ ids: Object.keys(o), value: !0 });
  }, [o]);
  return V(() => p ? (p.on(xr, S), p.on(An, C), () => {
    p.off(xr, S), p.off(An, C);
  }) : bb, [p, S, C]), V(() => {
    let y = Wi.getElementById("storybook-explorer-menu"), b = zi((I) => {
      let E = l.current?.refId === r && l.current?.itemId;
      if (!t || !e.current || !E || I.repeat || !xt(!1, I))
        return;
      let _ = Ue("Enter", I), k = Ue("Space", I), O = Ue("ArrowLeft", I), w = Ue("ArrowRight", I);
      if (!(_ || k || O || w))
        return;
      let T = g(E);
      if (!T || T.getAttribute("data-ref-id") !== r)
        return;
      let P = I.target;
      if (!Ft(y, P) && !Ft(P, y))
        return;
      if (P.hasAttribute("data-action")) {
        if (_ || k)
          return;
        P.blur();
      }
      let M = T.getAttribute("data-nodetype");
      (_ || k) && ["component", "story", "document"].includes(M) && d(E);
      let D = T.getAttribute("aria-expanded");
      if (O) {
        if (D === "true") {
          f({ ids: [E], value: !1 });
          return;
        }
        let L = T.getAttribute("data-parent-id"), $ = L && g(L);
        if ($ && $.getAttribute("data-highlightable") === "true") {
          m($);
          return;
        }
        f({ ids: at(o, E, !0), value: !1 });
        return;
      }
      w && (D === "false" ? v({ ids: [E], value: !0 }) : D === "true" && v({ ids: at(o, E, !0), value: !0 }));
    }, 60);
    return Wi.addEventListener("keydown", b), () => Wi.removeEventListener("keydown", b);
  }, [
    e,
    t,
    r,
    o,
    l,
    u,
    d
  ]), [h, v];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var xb = x.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), Ib = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: ye(0.93, e.color.secondary)
  }
})), td = x.div(({ theme: e }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: e.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  "&:hover, &:focus": {
    background: ye(0.93, e.color.secondary),
    outline: "none"
  },
  '&[data-selected="true"]': {
    color: e.color.lightest,
    background: e.color.secondary,
    fontWeight: e.typography.weight.bold,
    "&&:hover, &&:focus": {
      background: e.color.secondary
    },
    svg: { color: e.color.lightest }
  },
  a: { color: "currentColor" }
})), Sb = x(we)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: e.color.secondary,
      width: "auto"
    }
  }
})), rd = s.memo(/* @__PURE__ */ a(function({
  item: t,
  status: r,
  groupStatus: o,
  refId: i,
  docsMode: n,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: d,
  setFullyExpanded: p,
  isExpanded: h,
  setExpanded: f,
  onSelectStoryId: g,
  api: m
}) {
  let { isDesktop: v, isMobile: S, setMobileMenuOpen: C } = Ee(), y = De(), { counts: b, statuses: I } = Up(t);
  if (!u)
    return null;
  let E = Vo(t.id, i);
  if (t.type === "story" || t.type === "docs") {
    let _ = t.type === "docs" ? Zp : Jp, k = zr(Object.values(r || {}).map((P) => P.status)), [O, w] = Rr[k], T = ["success", "error", "warn",
    "pending", "unknown"];
    return /* @__PURE__ */ s.createElement(
      td,
      {
        key: E,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": i,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "docs" ? "document" : "story",
        "data-highlightable": u
      },
      /* @__PURE__ */ s.createElement(
        _,
        {
          style: c ? {} : { color: w },
          href: xp(t, i),
          id: E,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), g(t.id), S && C(!1);
          },
          ...t.type === "docs" && { docsMode: n }
        },
        t.renderLabel?.(t, m) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(Sb, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      O ? /* @__PURE__ */ s.createElement(
        Re,
        {
          closeOnOutsideClick: !0,
          onClick: (P) => P.stopPropagation(),
          placement: "bottom",
          tooltip: () => /* @__PURE__ */ s.createElement(
            Ct,
            {
              links: Object.entries(r || {}).sort(
                (P, M) => T.indexOf(P[1].status) - T.indexOf(M[1].status)
              ).map(([P, M]) => ({
                id: P,
                title: M.title,
                description: M.description,
                icon: {
                  success: /* @__PURE__ */ s.createElement(pl, { color: y.color.positive }),
                  error: /* @__PURE__ */ s.createElement(Un, { color: y.color.negative }),
                  warn: /* @__PURE__ */ s.createElement(qn, { color: y.color.warning }),
                  pending: /* @__PURE__ */ s.createElement(mt, { size: 12, color: y.color.defaultText }),
                  unknown: null
                }[M.status],
                onClick: /* @__PURE__ */ a(() => {
                  g(t.id), M.onClick?.();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement(Hi, { type: "button", status: k, selectedItem: c }, O)
      ) : null
    );
  }
  if (t.type === "root")
    return /* @__PURE__ */ s.createElement(
      Yp,
      {
        key: E,
        id: E,
        className: "sidebar-subheading",
        "data-ref-id": i,
        "data-item-id": t.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ s.createElement(
        Ib,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (_) => {
            _.preventDefault(), f({ ids: [t.id], value: !h });
          },
          "aria-expanded": h
        },
        /* @__PURE__ */ s.createElement(Rt, { isExpanded: h }),
        t.renderLabel?.(t, m) || t.name
      ),
      h && /* @__PURE__ */ s.createElement(
        te,
        {
          className: "sidebar-subheading-action",
          "aria-label": d ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": d,
          onClick: (_) => {
            _.preventDefault(), p();
          }
        },
        d ? /* @__PURE__ */ s.createElement(el, null) : /* @__PURE__ */ s.createElement(tl, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let _ = o?.[t.id], k = _ ? Rr[_][1] : null, O = t.type === "component" ? Xp : Qp, w = /* @__PURE__ */ a((T) => {
      let P = [];
      return b.error && P.push({
        id: "errors",
        icon: /* @__PURE__ */ s.createElement(Un, { color: y.color.negative }),
        title: `${b.error} ${b.error === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [M, [D]] = Object.entries(I.error)[0];
          g(M), D.onClick?.(), T();
        }, "onClick")
      }), b.warn && P.push({
        id: "warnings",
        icon: /* @__PURE__ */ s.createElement(qn, { color: y.color.gold }),
        title: `${b.warn} ${b.warn === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [M, [D]] = Object.entries(I.warn)[0];
          g(M), D.onClick?.(), T();
        }, "onClick")
      }), P;
    }, "createLinks");
    return /* @__PURE__ */ s.createElement(
      td,
      {
        key: E,
        className: "sidebar-item",
        "data-ref-id": i,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "component" ? "component" : "group",
        "data-highlightable": u
      },
      /* @__PURE__ */ s.createElement(
        O,
        {
          id: E,
          style: k ? { color: k } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": h,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: h,
          onClick: (T) => {
            T.preventDefault(), f({ ids: [t.id], value: !h }), t.type === "component" && !h && v && g(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && m.emit(wt, {
              ids: [t.children[0]],
              options: { target: i }
            });
          }
        },
        t.renderLabel?.(t, m) || t.name
      ),
      ["error", "warn"].includes(_) && /* @__PURE__ */ s.createElement(
        Re,
        {
          closeOnOutsideClick: !0,
          onClick: (T) => T.stopPropagation(),
          placement: "bottom",
          tooltip: ({ onHide: T }) => /* @__PURE__ */ s.createElement(Ct, { links: w(T) })
        },
        /* @__PURE__ */ s.createElement(Hi, { type: "button", status: _ }, /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0\
 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Be, { type: "dot" })))
      )
    );
  }
  return null;
}, "Node")), wb = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: r,
  expandableDescendants: o,
  ...i
}) {
  let n = A(
    () => t({ ids: o, value: !r }),
    [t, r, o]
  );
  return /* @__PURE__ */ s.createElement(
    rd,
    {
      ...i,
      setExpanded: t,
      isFullyExpanded: r,
      setFullyExpanded: n
    }
  );
}, "Root")), od = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: r,
  refId: o,
  data: i,
  status: n,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: d,
  onSelectStoryId: p
}) {
  let h = Q(null), f = de(), [g, m, v] = K(
    () => Object.keys(i).reduce(
      (w, T) => {
        let P = i[T];
        return P.type === "root" ? w[0].push(T) : P.parent || w[1].push(T), P.type === "root" && P.startCollapsed && (w[2][T] = !1), w;
      },
      [[], [], {}]
    ),
    [i]
  ), { expandableDescendants: S } = K(() => [...m, ...g].reduce(
    (w, T) => (w.expandableDescendants[T] = at(i, T, !1).filter(
      (P) => !["story", "docs"].includes(i[P].type)
    ), w),
    { orphansFirst: [], expandableDescendants: {} }
  ), [i, g, m]), C = K(() => Object.keys(i).filter((w) => {
    let T = i[w];
    if (T.type !== "component")
      return !1;
    let { children: P = [], name: M } = T;
    if (P.length !== 1)
      return !1;
    let D = i[P[0]];
    return D.type === "docs" ? !0 : D.type === "story" ? Cp(D.name, M) : !1;
  }), [i]), y = K(
    () => Object.keys(i).filter((w) => !C.includes(w)),
    [C]
  ), b = K(() => C.reduce(
    (w, T) => {
      let { children: P, parent: M, name: D } = i[T], [L] = P;
      if (M) {
        let $ = [...i[M].children];
        $[$.indexOf(T)] = L, w[M] = { ...i[M], children: $ };
      }
      return w[L] = {
        ...i[L],
        name: D,
        parent: M,
        depth: i[L].depth - 1
      }, w;
    },
    { ...i }
  ), [i]), I = K(() => y.reduce(
    (w, T) => Object.assign(w, { [T]: Br(b, T) }),
    {}
  ), [y, b]), [E, _] = ed({
    // @ts-expect-error (non strict)
    containerRef: h,
    isBrowsing: t,
    refId: o,
    data: b,
    initialExpanded: v,
    rootIds: g,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: d,
    onSelectStoryId: p
  }), k = K(() => Ko(b, n), [b, n]), O = K(() => y.map((w) => {
    let T = b[w], P = Vo(w, o);
    if (T.type === "root") {
      let D = S[T.id], L = D.every(($) => E[$]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          wb,
          {
            key: P,
            item: T,
            refId: o,
            isOrphan: !1,
            isDisplayed: !0,
            isSelected: d === w,
            isExpanded: !!E[w],
            setExpanded: _,
            isFullyExpanded: L,
            expandableDescendants: D,
            onSelectStoryId: p
          }
        )
      );
    }
    let M = !T.parent || I[w].every((D) => E[D]);
    return /* @__PURE__ */ s.createElement(
      rd,
      {
        api: f,
        key: P,
        item: T,
        status: n?.[w],
        groupStatus: k,
        refId: o,
        docsMode: l,
        isOrphan: m.some((D) => w === D || w.startsWith(`${D}-`)),
        isDisplayed: M,
        isSelected: d === w,
        isExpanded: !!E[w],
        setExpanded: _,
        onSelectStoryId: p
      }
    );
  }), [
    I,
    f,
    b,
    y,
    l,
    S,
    E,
    k,
    p,
    m,
    o,
    d,
    _,
    n
  ]);
  return /* @__PURE__ */ s.createElement(Ri.Provider, { value: { data: i, status: n, groupStatus: k } }, /* @__PURE__ */ s.createElement(xb,
  { ref: h, hasOrphans: r && m.length > 0 }, /* @__PURE__ */ s.createElement(Vp, null), O));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var Eb = x.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), Cb = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${e.appBorderColor}`,
  color: e.base === "light" ? e.color.defaultText : ye(0.2, e.color.defaultText)
})), _b = x.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
}), Tb = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: e.color.secondary,
    "span:first-of-type": {
      borderLeftColor: e.color.secondary
    }
  }
})), nd = s.memo(
  /* @__PURE__ */ a(function(t) {
    let { docsOptions: r } = Ke(), o = de(), {
      index: i,
      id: n,
      title: l = n,
      isLoading: u,
      isBrowsing: c,
      selectedStoryId: d,
      highlightedRef: p,
      setHighlighted: h,
      loginUrl: f,
      type: g,
      expanded: m = !0,
      indexError: v,
      previewInitialized: S
    } = t, C = K(() => i ? Object.keys(i).length : 0, [i]), y = Q(null), b = n === st, E = u || (g === "auto-inject" && !S || g === "server-\
checked") || g === "unknown", w = Ep(E, !!f && C === 0, !!v, !E && C === 0), [T, P] = Z(m);
    V(() => {
      i && d && i[d] && P(!0);
    }, [P, i, d]);
    let M = A(() => P(($) => !$), [P]), D = A(
      ($) => h({ itemId: $, refId: n }),
      [h]
    ), L = A(
      // @ts-expect-error (non strict)
      ($) => o && o.selectStory($, void 0, { ref: !b && n }),
      [o, b, n]
    );
    return /* @__PURE__ */ s.createElement(s.Fragment, null, b || /* @__PURE__ */ s.createElement(
      Cb,
      {
        "aria-label": `${T ? "Hide" : "Show"} ${l} stories`,
        "aria-expanded": T
      },
      /* @__PURE__ */ s.createElement(Tb, { "data-action": "collapse-ref", onClick: M }, /* @__PURE__ */ s.createElement(Rt, { isExpanded: T }),
      /* @__PURE__ */ s.createElement(_b, { title: l }, l)),
      /* @__PURE__ */ s.createElement(Lp, { ...t, state: w, ref: y })
    ), T && /* @__PURE__ */ s.createElement(Eb, { "data-title": l, isMain: b }, w === "auth" && /* @__PURE__ */ s.createElement(Pp, { id: n,
    loginUrl: f }), w === "error" && /* @__PURE__ */ s.createElement(Ap, { error: v }), w === "loading" && /* @__PURE__ */ s.createElement(Dp,
    { isMain: b }), w === "empty" && /* @__PURE__ */ s.createElement(Mp, { isMain: b }), w === "ready" && /* @__PURE__ */ s.createElement(
      od,
      {
        status: t.status,
        isBrowsing: c,
        isMain: b,
        refId: n,
        data: i,
        docsMode: r.docsMode,
        selectedStoryId: d,
        onSelectStoryId: L,
        highlightedRef: p,
        setHighlightedItemId: D
      }
    )));
  }, "Ref")
);

// src/manager/components/sidebar/useHighlighted.ts
var { document: $i, window: id } = ae, ad = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), sd = /* @__PURE__ */ a(
({
  containerRef: e,
  isLoading: t,
  isBrowsing: r,
  dataset: o,
  selected: i
}) => {
  let n = ad(i), l = Q(n), [u, c] = Z(n), d = de(), p = A(
    (f) => {
      l.current = f, c(f);
    },
    [l]
  ), h = A(
    (f, g = !1) => {
      let m = f.getAttribute("data-item-id"), v = f.getAttribute("data-ref-id");
      !m || !v || (p({ itemId: m, refId: v }), Nt(f, g));
    },
    [p]
  );
  return V(() => {
    let f = ad(i);
    if (p(f), f) {
      let { itemId: g, refId: m } = f;
      setTimeout(() => {
        Nt(
          // @ts-expect-error (non strict)
          e.current?.querySelector(`[data-item-id="${g}"][data-ref-id="${m}"]`),
          !0
          // make sure it's clearly visible by centering it
        );
      }, 0);
    }
  }, [o, l, e, i]), V(() => {
    let f = $i.getElementById("storybook-explorer-menu"), g, m = /* @__PURE__ */ a((v) => {
      if (t || !r || !e.current || !xt(!1, v))
        return;
      let S = Ue("ArrowUp", v), C = Ue("ArrowDown", v);
      if (!(S || C))
        return;
      let y = id.requestAnimationFrame(() => {
        id.cancelAnimationFrame(g), g = y;
        let b = v.target;
        if (!Ft(f, b) && !Ft(b, f))
          return;
        b.hasAttribute("data-action") && b.blur();
        let I = Array.from(
          e.current.querySelectorAll("[data-highlightable=true]")
        ), E = I.findIndex(
          (O) => O.getAttribute("data-item-id") === l.current?.itemId && O.getAttribute("data-ref-id") === l.current?.refId
        ), _ = wp(I, E, S ? -1 : 1), k = S ? _ === I.length - 1 : _ === 0;
        if (h(I[_], k), I[_].getAttribute("data-nodetype") === "component") {
          let { itemId: O, refId: w } = l.current, T = d.resolveStory(O, w === "storybook_internal" ? void 0 : w);
          T.type === "component" && d.emit(wt, {
            // @ts-expect-error (non strict)
            ids: [T.children[0]],
            options: { target: w }
          });
        }
      });
    }, "navigateTree");
    return $i.addEventListener("keydown", m), () => $i.removeEventListener("keydown", m);
  }, [t, r, l, h]), [u, p, l];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var ld = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: r,
  dataset: o,
  selected: i
}) {
  let n = Q(null), [l, u, c] = sd({
    // @ts-expect-error (non strict)
    containerRef: n,
    isLoading: t,
    isBrowsing: r,
    dataset: o,
    selected: i
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: n,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": l?.refId,
      "data-highlighted-item-id": l?.itemId
    },
    l && /* @__PURE__ */ s.createElement(gp, { ...l }),
    o.entries.map(([d, p]) => /* @__PURE__ */ s.createElement(
      nd,
      {
        ...p,
        key: d,
        isLoading: t,
        isBrowsing: r,
        selectedStoryId: i?.refId === p.id ? i.storyId : null,
        highlightedRef: c,
        setHighlighted: u
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
var kb = x(so)(({ theme: e }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: e.base === "light" ? e.color.defaultText : e.color.lightest
})), Ob = x.img({
  display: "block",
  maxWidth: "150px",
  maxHeight: "100px"
}), ud = x.a(({ theme: e }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: e.color.secondary
  }
})), cd = xs(({ theme: e }) => {
  let { title: t = "Storybook", url: r = "./", image: o, target: i } = e.brand, n = i || (r === "./" ? "" : "_blank");
  if (o === null)
    return t === null ? null : r ? /* @__PURE__ */ s.createElement(ud, { href: r, target: n, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = o ? /* @__PURE__ */ s.createElement(Ob, { src: o, alt: t }) : /* @__PURE__ */ s.createElement(kb, { alt: t });
  return r ? /* @__PURE__ */ s.createElement(ud, { title: t, href: r, target: n }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var pd = x(te)(({ highlighted: e, theme: t }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...e && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: t.background.app,
      border: `1px solid ${t.background.app}`,
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:after": {
      background: t.color.positive,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${ye(0.88, t.color.secondary)}`
    }
  }
})), Pb = x.div({
  display: "flex",
  gap: 4
}), Ab = /* @__PURE__ */ a(({ menu: e, onHide: t }) => {
  let r = K(() => e.map(({ onClick: o, ...i }) => ({
    ...i,
    onClick: /* @__PURE__ */ a((n, l) => {
      o && o(n, l), t();
    }, "onClick")
  })), [e, t]);
  return /* @__PURE__ */ s.createElement(Ct, { links: r });
}, "SidebarMenuList"), dd = /* @__PURE__ */ a(({ menu: e, isHighlighted: t, onClick: r }) => {
  let [o, i] = Z(!1), { isMobile: n, setMobileMenuOpen: l } = Ee();
  return n ? /* @__PURE__ */ s.createElement(Pb, null, /* @__PURE__ */ s.createElement(
    pd,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: t,
      active: !1,
      onClick: r
    },
    /* @__PURE__ */ s.createElement(Vn, null)
  ), /* @__PURE__ */ s.createElement(
    te,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      onClick: () => l(!1)
    },
    /* @__PURE__ */ s.createElement(Ze, null)
  )) : /* @__PURE__ */ s.createElement(
    Re,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(Ab, { onHide: u, menu: e }),
      onVisibleChange: i
    },
    /* @__PURE__ */ s.createElement(
      pd,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: t,
        active: o
      },
      /* @__PURE__ */ s.createElement(Vn, null)
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
var Mb = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
})), Db = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
}), Lb = x(we)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: e.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
})), fd = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: r,
  extra: o,
  isLoading: i,
  onMenuClick: n,
  ...l
}) => /* @__PURE__ */ s.createElement(Db, { ...l }, r && /* @__PURE__ */ s.createElement(Lb, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: r, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(Mb, null, /* @__PURE__ */ s.createElement(cd, null)), i ?
null : o.map(({ id: u, render: c }) => /* @__PURE__ */ s.createElement(c, { key: u })), /* @__PURE__ */ s.createElement(dd, { menu: t, isHighlighted: e,
onClick: n })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var U = We(Dn());
var Hb = We(yd());

// ../node_modules/compute-scroll-into-view/dist/index.js
var vd = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), bd = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), ji = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let r = getComputedStyle(e, null);
    return bd(r.overflowY, t) || bd(r.overflowX, t) || ((o) => {
      let i = ((n) => {
        if (!n.ownerDocument || !n.ownerDocument.defaultView) return null;
        try {
          return n.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(o);
      return !!i && (i.clientHeight < o.scrollHeight || i.clientWidth < o.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), on = /* @__PURE__ */ a((e, t, r, o, i, n, l, u) => n < e && l > t || n > e && l < t ? 0 : n <= e && u <= r || l >= t && u >= r ? n -
e - o : l > t && u < r || n < e && u > r ? l - t + i : 0, "o"), Bb = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), xd = /* @__PURE__ */ a((e, t) => {
  var r, o, i, n;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: d, skipOverflowHiddenElements: p } = t, h = typeof d == "function" ? d : (X) => X !== d;
  if (!vd(e)) throw new TypeError("Invalid target");
  let f = document.scrollingElement || document.documentElement, g = [], m = e;
  for (; vd(m) && h(m); ) {
    if (m = Bb(m), m === f) {
      g.push(m);
      break;
    }
    m != null && m === document.body && ji(m) && !ji(document.documentElement) || m != null && ji(m, p) && g.push(m);
  }
  let v = (o = (r = window.visualViewport) == null ? void 0 : r.width) != null ? o : innerWidth, S = (n = (i = window.visualViewport) == null ?
  void 0 : i.height) != null ? n : innerHeight, { scrollX: C, scrollY: y } = window, { height: b, width: I, top: E, right: _, bottom: k, left: O } = e.
  getBoundingClientRect(), { top: w, right: T, bottom: P, left: M } = ((X) => {
    let q = window.getComputedStyle(X);
    return { top: parseFloat(q.scrollMarginTop) || 0, right: parseFloat(q.scrollMarginRight) || 0, bottom: parseFloat(q.scrollMarginBottom) ||
    0, left: parseFloat(q.scrollMarginLeft) || 0 };
  })(e), D = u === "start" || u === "nearest" ? E - w : u === "end" ? k + P : E + b / 2 - w + P, L = c === "center" ? O + I / 2 - M + T : c ===
  "end" ? _ + T : O - M, $ = [];
  for (let X = 0; X < g.length; X++) {
    let q = g[X], { height: R, width: z, top: B, right: re, bottom: H, left: N } = q.getBoundingClientRect();
    if (l === "if-needed" && E >= 0 && O >= 0 && k <= S && _ <= v && E >= B && k <= H && O >= N && _ <= re) return $;
    let F = getComputedStyle(q), W = parseInt(F.borderLeftWidth, 10), Y = parseInt(F.borderTopWidth, 10), oe = parseInt(F.borderRightWidth, 10),
    ee = parseInt(F.borderBottomWidth, 10), le = 0, se = 0, pe = "offsetWidth" in q ? q.offsetWidth - q.clientWidth - W - oe : 0, ce = "offs\
etHeight" in q ? q.offsetHeight - q.clientHeight - Y - ee : 0, Ie = "offsetWidth" in q ? q.offsetWidth === 0 ? 0 : z / q.offsetWidth : 0, ge = "\
offsetHeight" in q ? q.offsetHeight === 0 ? 0 : R / q.offsetHeight : 0;
    if (f === q) le = u === "start" ? D : u === "end" ? D - S : u === "nearest" ? on(y, y + S, S, Y, ee, y + D, y + D + b, b) : D - S / 2, se =
    c === "start" ? L : c === "center" ? L - v / 2 : c === "end" ? L - v : on(C, C + v, v, W, oe, C + L, C + L + I, I), le = Math.max(0, le +
    y), se = Math.max(0, se + C);
    else {
      le = u === "start" ? D - B - Y : u === "end" ? D - H + ee + ce : u === "nearest" ? on(B, H, R, Y, ee + ce, D, D + b, b) : D - (B + R /
      2) + ce / 2, se = c === "start" ? L - N - W : c === "center" ? L - (N + z / 2) + pe / 2 : c === "end" ? L - re + oe + pe : on(N, re, z,
      W, oe + pe, L, L + I, I);
      let { scrollLeft: Pe, scrollTop: me } = q;
      le = ge === 0 ? 0 : Math.max(0, Math.min(me + le / ge, q.scrollHeight - R / ge + ce)), se = Ie === 0 ? 0 : Math.max(0, Math.min(Pe + se /
      Ie, q.scrollWidth - z / Ie + pe)), D += me - le, L += Pe - se;
    }
    $.push({ el: q, top: le, left: se });
  }
  return $;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var zt = /* @__PURE__ */ a(function() {
  return zt = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var r, o = 1, i = arguments.length; o < i; o++) {
      r = arguments[o];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, "__assign"), zt.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var Rb = 0;
function Id(e) {
  return typeof e == "function" ? e : ze;
}
a(Id, "cbToCb");
function ze() {
}
a(ze, "noop");
function kd(e, t) {
  if (e) {
    var r = xd(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    r.forEach(function(o) {
      var i = o.el, n = o.top, l = o.left;
      i.scrollTop = n, i.scrollLeft = l;
    });
  }
}
a(kd, "scrollIntoView");
function Sd(e, t, r) {
  var o = e === t || t instanceof r.Node && e.contains && e.contains(t);
  return o;
}
a(Sd, "isOrContainsNode");
function gn(e, t) {
  var r;
  function o() {
    r && clearTimeout(r);
  }
  a(o, "cancel");
  function i() {
    for (var n = arguments.length, l = new Array(n), u = 0; u < n; u++)
      l[u] = arguments[u];
    o(), r = setTimeout(function() {
      r = null, e.apply(void 0, l);
    }, t);
  }
  return a(i, "wrapper"), i.cancel = o, i;
}
a(gn, "debounce");
function ue() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
      n[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [o].concat(n)), o.preventDownshiftDefault || o.hasOwnProperty("nativeEvent") && o.nativeEvent.preventDownshiftDefault;
    });
  };
}
a(ue, "callAllEventHandlers");
function Je() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(o) {
    t.forEach(function(i) {
      typeof i == "function" ? i(o) : i && (i.current = o);
    });
  };
}
a(Je, "handleRefs");
function Od() {
  return String(Rb++);
}
a(Od, "generateId");
function zb(e) {
  var t = e.isOpen, r = e.resultCount, o = e.previousResultCount;
  return t ? r ? r !== o ? r + " result" + (r === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter ke\
y to select." : "" : "No results are available." : "";
}
a(zb, "getA11yStatusMessage");
function wd(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
a(wd, "unwrapArray");
function Wb(e) {
  return typeof e.type == "string";
}
a(Wb, "isDOMElement");
function $b(e) {
  return e.props;
}
a($b, "getElementProps");
var Vb = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function nn(e) {
  e === void 0 && (e = {});
  var t = {};
  return Vb.forEach(function(r) {
    e.hasOwnProperty(r) && (t[r] = e[r]);
  }), t;
}
a(nn, "pickState");
function $r(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(r, o) {
    return r[o] = cn(t, o) ? t[o] : e[o], r;
  }, {});
}
a($r, "getState");
function cn(e, t) {
  return e[t] !== void 0;
}
a(cn, "isControlledProp");
function yr(e) {
  var t = e.key, r = e.keyCode;
  return r >= 37 && r <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(yr, "normalizeArrowKey");
function et(e, t, r, o, i) {
  i === void 0 && (i = !1);
  var n = r.length;
  if (n === 0)
    return -1;
  var l = n - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = i ? l : 0 : u > l && (u = i ? 0 : l);
  var c = It(u, t < 0, r, o, i);
  return c === -1 ? e >= n ? -1 : e : c;
}
a(et, "getHighlightedIndex");
function It(e, t, r, o, i) {
  i === void 0 && (i = !1);
  var n = r.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!o(r[l], l))
        return l;
  } else
    for (var u = e; u < n; u++)
      if (!o(r[u], u))
        return u;
  return i ? It(t ? n - 1 : 0, t, r, o) : -1;
}
a(It, "getNonDisabledIndex");
function pn(e, t, r, o) {
  return o === void 0 && (o = !0), r && t.some(function(i) {
    return i && (Sd(i, e, r) || o && Sd(i, r.document.activeElement, r));
  });
}
a(pn, "targetWithinDownshift");
var Kb = gn(function(e) {
  Pd(e).textContent = "";
}, 500);
function Pd(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("ar\
ia-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
a(Pd, "getStatusDiv");
function Ad(e, t) {
  if (!(!e || !t)) {
    var r = Pd(t);
    r.textContent = e, Kb(t);
  }
}
a(Ad, "setStatus");
function jb(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(jb, "cleanupStatusDiv");
var Md = 0, Dd = 1, Ld = 2, an = 3, sn = 4, Nd = 5, Fd = 6, Bd = 7, Hd = 8, Rd = 9, zd = 10, Wd = 11, $d = 12, Vd = 13, Kd = 14, jd = 15, Ud = 16,
Ub = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown: Md,
  mouseUp: Dd,
  itemMouseEnter: Ld,
  keyDownArrowUp: an,
  keyDownArrowDown: sn,
  keyDownEscape: Nd,
  keyDownEnter: Fd,
  keyDownHome: Bd,
  keyDownEnd: Hd,
  clickItem: Rd,
  blurInput: zd,
  changeInput: Wd,
  keyDownSpaceButton: $d,
  clickButton: Vd,
  blurButton: Kd,
  controlledPropUpdatedSelectedItem: jd,
  touchEnd: Ud
}), qb = ["refKey", "ref"], Gb = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], Yb = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], Qb = ["refKey", "ref"], Xb = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], Zb = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function r(i) {
      var n;
      n = t.call(this, i) || this, n.id = n.props.id || "downshift-" + Od(), n.menuId = n.props.menuId || n.id + "-menu", n.labelId = n.props.
      labelId || n.id + "-label", n.inputId = n.props.inputId || n.id + "-input", n.getItemId = n.props.getItemId || function(y) {
        return n.id + "-item-" + y;
      }, n.items = [], n.itemCount = null, n.previousResultCount = 0, n.timeoutIds = [], n.internalSetTimeout = function(y, b) {
        var I = setTimeout(function() {
          n.timeoutIds = n.timeoutIds.filter(function(E) {
            return E !== I;
          }), y();
        }, b);
        n.timeoutIds.push(I);
      }, n.setItemCount = function(y) {
        n.itemCount = y;
      }, n.unsetItemCount = function() {
        n.itemCount = null;
      }, n.isItemDisabled = function(y, b) {
        var I = n.getItemNodeFromIndex(b);
        return I && I.hasAttribute("disabled");
      }, n.setHighlightedIndex = function(y, b) {
        y === void 0 && (y = n.props.defaultHighlightedIndex), b === void 0 && (b = {}), b = nn(b), n.internalSetState(j({
          highlightedIndex: y
        }, b));
      }, n.clearSelection = function(y) {
        n.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: n.props.defaultHighlightedIndex,
          isOpen: n.props.defaultIsOpen
        }, y);
      }, n.selectItem = function(y, b, I) {
        b = nn(b), n.internalSetState(j({
          isOpen: n.props.defaultIsOpen,
          highlightedIndex: n.props.defaultHighlightedIndex,
          selectedItem: y,
          inputValue: n.props.itemToString(y)
        }, b), I);
      }, n.selectItemAtIndex = function(y, b, I) {
        var E = n.items[y];
        E != null && n.selectItem(E, b, I);
      }, n.selectHighlightedItem = function(y, b) {
        return n.selectItemAtIndex(n.getState().highlightedIndex, y, b);
      }, n.internalSetState = function(y, b) {
        var I, E, _ = {}, k = typeof y == "function";
        return !k && y.hasOwnProperty("inputValue") && n.props.onInputValueChange(y.inputValue, j({}, n.getStateAndHelpers(), y)), n.setState(
        function(O) {
          var w;
          O = n.getState(O);
          var T = k ? y(O) : y;
          T = n.props.stateReducer(O, T), I = T.hasOwnProperty("selectedItem");
          var P = {};
          return I && T.selectedItem !== O.selectedItem && (E = T.selectedItem), (w = T).type || (w.type = Md), Object.keys(T).forEach(function(M) {
            O[M] !== T[M] && (_[M] = T[M]), M !== "type" && (T[M], cn(n.props, M) || (P[M] = T[M]));
          }), k && T.hasOwnProperty("inputValue") && n.props.onInputValueChange(T.inputValue, j({}, n.getStateAndHelpers(), T)), P;
        }, function() {
          Id(b)();
          var O = Object.keys(_).length > 1;
          O && n.props.onStateChange(_, n.getStateAndHelpers()), I && n.props.onSelect(y.selectedItem, n.getStateAndHelpers()), E !== void 0 &&
          n.props.onChange(E, n.getStateAndHelpers()), n.props.onUserAction(_, n.getStateAndHelpers());
        });
      }, n.rootRef = function(y) {
        return n._rootNode = y;
      }, n.getRootProps = function(y, b) {
        var I, E = y === void 0 ? {} : y, _ = E.refKey, k = _ === void 0 ? "ref" : _, O = E.ref, w = ke(E, qb), T = b === void 0 ? {} : b, P = T.
        suppressRefError, M = P === void 0 ? !1 : P;
        n.getRootProps.called = !0, n.getRootProps.refKey = k, n.getRootProps.suppressRefError = M;
        var D = n.getState(), L = D.isOpen;
        return j((I = {}, I[k] = Je(O, n.rootRef), I.role = "combobox", I["aria-expanded"] = L, I["aria-haspopup"] = "listbox", I["aria-owns"] =
        L ? n.menuId : void 0, I["aria-labelledby"] = n.labelId, I), w);
      }, n.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(b) {
          var I = this;
          if (b.preventDefault(), this.getState().isOpen) {
            var E = b.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(E, {
              type: sn
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: sn
            }, function() {
              var _ = I.getItemCount();
              if (_ > 0) {
                var k = I.getState(), O = k.highlightedIndex, w = et(O, 1, {
                  length: _
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(w, {
                  type: sn
                });
              }
            });
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ a(function(b) {
          var I = this;
          if (b.preventDefault(), this.getState().isOpen) {
            var E = b.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(E, {
              type: an
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: an
            }, function() {
              var _ = I.getItemCount();
              if (_ > 0) {
                var k = I.getState(), O = k.highlightedIndex, w = et(O, -1, {
                  length: _
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(w, {
                  type: an
                });
              }
            });
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ a(function(b) {
          if (b.which !== 229) {
            var I = this.getState(), E = I.isOpen, _ = I.highlightedIndex;
            if (E && _ != null) {
              b.preventDefault();
              var k = this.items[_], O = this.getItemNodeFromIndex(_);
              if (k == null || O && O.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Fd
              });
            }
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ a(function(b) {
          b.preventDefault(), this.reset(j({
            type: Nd
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
      }, n.buttonKeyDownHandlers = j({}, n.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(b) {
          b.preventDefault(), this.toggleMenu({
            type: $d
          });
        }, "_")
      }), n.inputKeyDownHandlers = j({}, n.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(b) {
          var I = this.getState(), E = I.isOpen;
          if (E) {
            b.preventDefault();
            var _ = this.getItemCount();
            if (!(_ <= 0 || !E)) {
              var k = It(0, !1, {
                length: _
              }, this.isItemDisabled);
              this.setHighlightedIndex(k, {
                type: Bd
              });
            }
          }
        }, "Home"),
        End: /* @__PURE__ */ a(function(b) {
          var I = this.getState(), E = I.isOpen;
          if (E) {
            b.preventDefault();
            var _ = this.getItemCount();
            if (!(_ <= 0 || !E)) {
              var k = It(_ - 1, !0, {
                length: _
              }, this.isItemDisabled);
              this.setHighlightedIndex(k, {
                type: Hd
              });
            }
          }
        }, "End")
      }), n.getToggleButtonProps = function(y) {
        var b = y === void 0 ? {} : y, I = b.onClick;
        b.onPress;
        var E = b.onKeyDown, _ = b.onKeyUp, k = b.onBlur, O = ke(b, Gb), w = n.getState(), T = w.isOpen, P = {
          onClick: ue(I, n.buttonHandleClick),
          onKeyDown: ue(E, n.buttonHandleKeyDown),
          onKeyUp: ue(_, n.buttonHandleKeyUp),
          onBlur: ue(k, n.buttonHandleBlur)
        }, M = O.disabled ? {} : P;
        return j({
          type: "button",
          role: "button",
          "aria-label": T ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, M, O);
      }, n.buttonHandleKeyUp = function(y) {
        y.preventDefault();
      }, n.buttonHandleKeyDown = function(y) {
        var b = yr(y);
        n.buttonKeyDownHandlers[b] && n.buttonKeyDownHandlers[b].call(n, y);
      }, n.buttonHandleClick = function(y) {
        if (y.preventDefault(), n.props.environment) {
          var b = n.props.environment.document, I = b.body, E = b.activeElement;
          I && I === E && y.target.focus();
        }
        n.internalSetTimeout(function() {
          return n.toggleMenu({
            type: Vd
          });
        });
      }, n.buttonHandleBlur = function(y) {
        var b = y.target;
        n.internalSetTimeout(function() {
          if (!(n.isMouseDown || !n.props.environment)) {
            var I = n.props.environment.document.activeElement;
            (I == null || I.id !== n.inputId) && I !== b && n.reset({
              type: Kd
            });
          }
        });
      }, n.getLabelProps = function(y) {
        return j({
          htmlFor: n.inputId,
          id: n.labelId
        }, y);
      }, n.getInputProps = function(y) {
        var b = y === void 0 ? {} : y, I = b.onKeyDown, E = b.onBlur, _ = b.onChange, k = b.onInput;
        b.onChangeText;
        var O = ke(b, Yb), w, T = {};
        w = "onChange";
        var P = n.getState(), M = P.inputValue, D = P.isOpen, L = P.highlightedIndex;
        if (!O.disabled) {
          var $;
          T = ($ = {}, $[w] = ue(_, k, n.inputHandleChange), $.onKeyDown = ue(I, n.inputHandleKeyDown), $.onBlur = ue(E, n.inputHandleBlur),
          $);
        }
        return j({
          "aria-autocomplete": "list",
          "aria-activedescendant": D && typeof L == "number" && L >= 0 ? n.getItemId(L) : void 0,
          "aria-controls": D ? n.menuId : void 0,
          "aria-labelledby": O && O["aria-label"] ? void 0 : n.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: M,
          id: n.inputId
        }, T, O);
      }, n.inputHandleKeyDown = function(y) {
        var b = yr(y);
        b && n.inputKeyDownHandlers[b] && n.inputKeyDownHandlers[b].call(n, y);
      }, n.inputHandleChange = function(y) {
        n.internalSetState({
          type: Wd,
          isOpen: !0,
          inputValue: y.target.value,
          highlightedIndex: n.props.defaultHighlightedIndex
        });
      }, n.inputHandleBlur = function() {
        n.internalSetTimeout(function() {
          var y;
          if (!(n.isMouseDown || !n.props.environment)) {
            var b = n.props.environment.document.activeElement, I = (b == null || (y = b.dataset) == null ? void 0 : y.toggle) && n._rootNode &&
            n._rootNode.contains(b);
            I || n.reset({
              type: zd
            });
          }
        });
      }, n.menuRef = function(y) {
        n._menuNode = y;
      }, n.getMenuProps = function(y, b) {
        var I, E = y === void 0 ? {} : y, _ = E.refKey, k = _ === void 0 ? "ref" : _, O = E.ref, w = ke(E, Qb), T = b === void 0 ? {} : b, P = T.
        suppressRefError, M = P === void 0 ? !1 : P;
        return n.getMenuProps.called = !0, n.getMenuProps.refKey = k, n.getMenuProps.suppressRefError = M, j((I = {}, I[k] = Je(O, n.menuRef),
        I.role = "listbox", I["aria-labelledby"] = w && w["aria-label"] ? void 0 : n.labelId, I.id = n.menuId, I), w);
      }, n.getItemProps = function(y) {
        var b, I = y === void 0 ? {} : y, E = I.onMouseMove, _ = I.onMouseDown, k = I.onClick;
        I.onPress;
        var O = I.index, w = I.item, T = w === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : w, P = ke(I, Xb);
        O === void 0 ? (n.items.push(T), O = n.items.indexOf(T)) : n.items[O] = T;
        var M = "onClick", D = k, L = (b = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: ue(E, function() {
            O !== n.getState().highlightedIndex && (n.setHighlightedIndex(O, {
              type: Ld
            }), n.avoidScrolling = !0, n.internalSetTimeout(function() {
              return n.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: ue(_, function(X) {
            X.preventDefault();
          })
        }, b[M] = ue(D, function() {
          n.selectItemAtIndex(O, {
            type: Rd
          });
        }), b), $ = P.disabled ? {
          onMouseDown: L.onMouseDown
        } : L;
        return j({
          id: n.getItemId(O),
          role: "option",
          "aria-selected": n.getState().highlightedIndex === O
        }, $, P);
      }, n.clearItems = function() {
        n.items = [];
      }, n.reset = function(y, b) {
        y === void 0 && (y = {}), y = nn(y), n.internalSetState(function(I) {
          var E = I.selectedItem;
          return j({
            isOpen: n.props.defaultIsOpen,
            highlightedIndex: n.props.defaultHighlightedIndex,
            inputValue: n.props.itemToString(E)
          }, y);
        }, b);
      }, n.toggleMenu = function(y, b) {
        y === void 0 && (y = {}), y = nn(y), n.internalSetState(function(I) {
          var E = I.isOpen;
          return j({
            isOpen: !E
          }, E && {
            highlightedIndex: n.props.defaultHighlightedIndex
          }, y);
        }, function() {
          var I = n.getState(), E = I.isOpen, _ = I.highlightedIndex;
          E && n.getItemCount() > 0 && typeof _ == "number" && n.setHighlightedIndex(_, y), Id(b)();
        });
      }, n.openMenu = function(y) {
        n.internalSetState({
          isOpen: !0
        }, y);
      }, n.closeMenu = function(y) {
        n.internalSetState({
          isOpen: !1
        }, y);
      }, n.updateStatus = gn(function() {
        var y;
        if ((y = n.props) != null && (y = y.environment) != null && y.document) {
          var b = n.getState(), I = n.items[b.highlightedIndex], E = n.getItemCount(), _ = n.props.getA11yStatusMessage(j({
            itemToString: n.props.itemToString,
            previousResultCount: n.previousResultCount,
            resultCount: E,
            highlightedItem: I
          }, b));
          n.previousResultCount = E, Ad(_, n.props.environment.document);
        }
      }, 200);
      var l = n.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, d = c === void 0 ? u : c, p = l.defaultIsOpen, h = l.initialIsOpen,
      f = h === void 0 ? p : h, g = l.initialInputValue, m = g === void 0 ? "" : g, v = l.initialSelectedItem, S = v === void 0 ? null : v, C = n.
      getState({
        highlightedIndex: d,
        isOpen: f,
        inputValue: m,
        selectedItem: S
      });
      return C.selectedItem != null && n.props.initialInputValue === void 0 && (C.inputValue = n.props.itemToString(C.selectedItem)), n.state =
      C, n;
    }
    a(r, "Downshift"), rr(r, t);
    var o = r.prototype;
    return o.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(n) {
        clearTimeout(n);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), o.getState = /* @__PURE__ */ a(function(n) {
      return n === void 0 && (n = this.state), $r(n, this.props);
    }, "getState$1"), o.getItemCount = /* @__PURE__ */ a(function() {
      var n = this.items.length;
      return this.itemCount != null ? n = this.itemCount : this.props.itemCount !== void 0 && (n = this.props.itemCount), n;
    }, "getItemCount"), o.getItemNodeFromIndex = /* @__PURE__ */ a(function(n) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(n)) : null;
    }, "getItemNodeFromIndex"), o.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var n = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(n, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), o.moveHighlightedIndex = /* @__PURE__ */ a(function(n, l) {
      var u = this.getItemCount(), c = this.getState(), d = c.highlightedIndex;
      if (u > 0) {
        var p = et(d, n, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(p, l);
      }
    }, "moveHighlightedIndex"), o.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var n = this.getState(), l = n.highlightedIndex, u = n.inputValue, c = n.selectedItem, d = n.isOpen, p = this.props.itemToString, h = this.
      id, f = this.getRootProps, g = this.getToggleButtonProps, m = this.getLabelProps, v = this.getMenuProps, S = this.getInputProps, C = this.
      getItemProps, y = this.openMenu, b = this.closeMenu, I = this.toggleMenu, E = this.selectItem, _ = this.selectItemAtIndex, k = this.selectHighlightedItem,
      O = this.setHighlightedIndex, w = this.clearSelection, T = this.clearItems, P = this.reset, M = this.setItemCount, D = this.unsetItemCount,
      L = this.internalSetState;
      return {
        // prop getters
        getRootProps: f,
        getToggleButtonProps: g,
        getLabelProps: m,
        getMenuProps: v,
        getInputProps: S,
        getItemProps: C,
        // actions
        reset: P,
        openMenu: y,
        closeMenu: b,
        toggleMenu: I,
        selectItem: E,
        selectItemAtIndex: _,
        selectHighlightedItem: k,
        setHighlightedIndex: O,
        clearSelection: w,
        clearItems: T,
        setItemCount: M,
        unsetItemCount: D,
        setState: L,
        // props
        itemToString: p,
        // derived
        id: h,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: d,
        selectedItem: c
      };
    }, "getStateAndHelpers"), o.componentDidMount = /* @__PURE__ */ a(function() {
      var n = this;
      if (!this.props.environment)
        this.cleanup = function() {
          n.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          n.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(g) {
          n.isMouseDown = !1;
          var m = pn(g.target, [n._rootNode, n._menuNode], n.props.environment);
          !m && n.getState().isOpen && n.reset({
            type: Dd
          }, function() {
            return n.props.onOuterClick(n.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          n.isTouchMove = !1;
        }, "onTouchStart"), d = /* @__PURE__ */ a(function() {
          n.isTouchMove = !0;
        }, "onTouchMove"), p = /* @__PURE__ */ a(function(g) {
          var m = pn(g.target, [n._rootNode, n._menuNode], n.props.environment, !1);
          !n.isTouchMove && !m && n.getState().isOpen && n.reset({
            type: Ud
          }, function() {
            return n.props.onOuterClick(n.getStateAndHelpers());
          });
        }, "onTouchEnd"), h = this.props.environment;
        h.addEventListener("mousedown", l), h.addEventListener("mouseup", u), h.addEventListener("touchstart", c), h.addEventListener("touch\
move", d), h.addEventListener("touchend", p), this.cleanup = function() {
          n.internalClearTimeouts(), n.updateStatus.cancel(), h.removeEventListener("mousedown", l), h.removeEventListener("mouseup", u), h.
          removeEventListener("touchstart", c), h.removeEventListener("touchmove", d), h.removeEventListener("touchend", p);
        };
      }
    }, "componentDidMount"), o.shouldScroll = /* @__PURE__ */ a(function(n, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, d = l.highlightedIndex === void 0 ?
      n : l, p = d.highlightedIndex, h = c && this.getState().isOpen && !n.isOpen, f = c !== p;
      return h || f;
    }, "shouldScroll"), o.componentDidUpdate = /* @__PURE__ */ a(function(n, l) {
      cn(this.props, "selectedItem") && this.props.selectedItemChanged(n.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: jd,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, n) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), o.render = /* @__PURE__ */ a(function() {
      var n = wd(this.props.children, ze);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = wd(n(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return l;
      if (Wb(l))
        return /* @__PURE__ */ us(l, this.getRootProps($b(l)));
    }, "render"), r;
  }(He);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: zb,
    itemToString: /* @__PURE__ */ a(function(r) {
      return r == null ? "" : String(r);
    }, "itemToString"),
    onStateChange: ze,
    onInputValueChange: ze,
    onUserAction: ze,
    onChange: ze,
    onSelect: ze,
    onOuterClick: ze,
    selectedItemChanged: /* @__PURE__ */ a(function(r, o) {
      return r !== o;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ a(function(r, o) {
      return o;
    }, "stateReducer"),
    suppressRefError: !1,
    scrollIntoView: kd
  }, e.stateChangeTypes = Ub, e;
}(), Vt = Zb;
var qd = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Jb(e, t, r) {
  var o = e.props, i = e.type, n = {};
  Object.keys(t).forEach(function(l) {
    e0(l, e, t, r), r[l] !== t[l] && (n[l] = r[l]);
  }), o.onStateChange && Object.keys(n).length && o.onStateChange(j({
    type: i
  }, n));
}
a(Jb, "callOnChangeProps");
function e0(e, t, r, o) {
  var i = t.props, n = t.type, l = "on" + Gi(e) + "Change";
  i[l] && o[e] !== void 0 && o[e] !== r[e] && i[l](j({
    type: n
  }, o));
}
a(e0, "invokeOnChangeHandler");
function t0(e, t) {
  return t.changes;
}
a(t0, "stateReducer");
var Ed = gn(function(e, t) {
  Ad(e, t);
}, 200), r0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? qt : V, Gd = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var r = t.id, o = t.labelId, i = t.menuId, n = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  r || (r = c);
  var d = Q({
    labelId: o || r + "-label",
    menuId: i || r + "-menu",
    getItemId: n || function(p) {
      return r + "-item-" + p;
    },
    toggleButtonId: l || r + "-toggle-button",
    inputId: u || r + "-input"
  });
  return d.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var r = t.id, o = r === void 0 ? "downshift-" + Od() : r, i = t.labelId, n = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  d = Q({
    labelId: i || o + "-label",
    menuId: n || o + "-menu",
    getItemId: l || function(p) {
      return o + "-item-" + p;
    },
    toggleButtonId: u || o + "-toggle-button",
    inputId: c || o + "-input"
  });
  return d.current;
}, "useElementIds");
function qi(e, t, r, o) {
  var i, n;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(o);
    i = r[t], n = t;
  } else
    n = t === void 0 ? r.indexOf(e) : t, i = e;
  return [i, n];
}
a(qi, "getItemAndIndex");
function o0(e) {
  return /^\S{1}$/.test(e);
}
a(o0, "isAcceptedCharacterKey");
function Gi(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(Gi, "capitalizeString");
function yn(e) {
  var t = Q(e);
  return t.current = e, t;
}
a(yn, "useLatestRef");
function Yd(e, t, r, o) {
  var i = Q(), n = Q(), l = A(function(g, m) {
    n.current = m, g = $r(g, m.props);
    var v = e(g, m), S = m.props.stateReducer(g, j({}, m, {
      changes: v
    }));
    return S;
  }, [e]), u = Gt(l, t, r), c = u[0], d = u[1], p = yn(t), h = A(function(g) {
    return d(j({
      props: p.current
    }, g));
  }, [p]), f = n.current;
  return V(function() {
    var g = $r(i.current, f?.props), m = f && i.current && !o(g, c);
    m && Jb(f, g, c), i.current = c;
  }, [c, f, o]), [c, h];
}
a(Yd, "useEnhancedReducer");
function Qd(e, t, r, o) {
  var i = Yd(e, t, r, o), n = i[0], l = i[1];
  return [$r(n, t), l];
}
a(Qd, "useControlledReducer$1");
var Wr = {
  itemToString: /* @__PURE__ */ a(function(t) {
    return t ? String(t) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ a(function(t) {
    return t;
  }, "itemToKey"),
  stateReducer: t0,
  scrollIntoView: kd,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function $e(e, t, r) {
  r === void 0 && (r = qd);
  var o = e["default" + Gi(t)];
  return o !== void 0 ? o : r[t];
}
a($e, "getDefaultValue$1");
function Wt(e, t, r) {
  r === void 0 && (r = qd);
  var o = e[t];
  if (o !== void 0)
    return o;
  var i = e["initial" + Gi(t)];
  return i !== void 0 ? i : $e(e, t, r);
}
a(Wt, "getInitialValue$1");
function Xd(e) {
  var t = Wt(e, "selectedItem"), r = Wt(e, "isOpen"), o = Wt(e, "highlightedIndex"), i = Wt(e, "inputValue");
  return {
    highlightedIndex: o < 0 && t && r ? e.items.findIndex(function(n) {
      return e.itemToKey(n) === e.itemToKey(t);
    }) : o,
    isOpen: r,
    selectedItem: t,
    inputValue: i
  };
}
a(Xd, "getInitialState$2");
function $t(e, t, r) {
  var o = e.items, i = e.initialHighlightedIndex, n = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, d = t.
  highlightedIndex;
  return o.length === 0 ? -1 : i !== void 0 && d === i && !l(o[i]) ? i : n !== void 0 && !l(o[n]) ? n : c ? o.findIndex(function(p) {
    return u(c) === u(p);
  }) : r < 0 && !l(o[o.length - 1]) ? o.length - 1 : r > 0 && !l(o[0]) ? 0 : -1;
}
a($t, "getHighlightedIndexOnOpen");
function Zd(e, t, r) {
  var o = Q({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return V(function() {
    if (!e)
      return ze;
    var i = t.map(function(p) {
      return p.current;
    });
    function n() {
      o.current.isTouchEnd = !1, o.current.isMouseDown = !0;
    }
    a(n, "onMouseDown");
    function l(p) {
      o.current.isMouseDown = !1, pn(p.target, i, e) || r();
    }
    a(l, "onMouseUp");
    function u() {
      o.current.isTouchEnd = !1, o.current.isTouchMove = !1;
    }
    a(u, "onTouchStart");
    function c() {
      o.current.isTouchMove = !0;
    }
    a(c, "onTouchMove");
    function d(p) {
      o.current.isTouchEnd = !0, !o.current.isTouchMove && !pn(p.target, i, e, !1) && r();
    }
    return a(d, "onTouchEnd"), e.addEventListener("mousedown", n), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", d), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", n), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", d);
    }, "cleanup");
  }, [e, r]), o.current;
}
a(Zd, "useMouseAndTouchTracker");
var Yi = /* @__PURE__ */ a(function() {
  return ze;
}, "useGetterPropsCalledChecker");
function Qi(e, t, r, o) {
  o === void 0 && (o = {});
  var i = o.document, n = vn();
  V(function() {
    if (!(!e || n || !i)) {
      var l = e(t);
      Ed(l, i);
    }
  }, r), V(function() {
    return function() {
      Ed.cancel(), jb(i);
    };
  }, [i]);
}
a(Qi, "useA11yMessageStatus");
function Jd(e) {
  var t = e.highlightedIndex, r = e.isOpen, o = e.itemRefs, i = e.getItemNodeFromIndex, n = e.menuElement, l = e.scrollIntoView, u = Q(!0);
  return r0(function() {
    t < 0 || !r || !Object.keys(o.current).length || (u.current === !1 ? u.current = !0 : l(i(t), n));
  }, [t]), u;
}
a(Jd, "useScrollIntoView");
var Xi = ze;
function dn(e, t, r) {
  var o;
  r === void 0 && (r = !0);
  var i = ((o = e.items) == null ? void 0 : o.length) && t >= 0;
  return j({
    isOpen: !1,
    highlightedIndex: -1
  }, i && j({
    selectedItem: e.items[t],
    isOpen: $e(e, "isOpen"),
    highlightedIndex: $e(e, "highlightedIndex")
  }, r && {
    inputValue: e.itemToString(e.items[t])
  }));
}
a(dn, "getChangesOnSelection");
function ef(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(ef, "isDropdownsStateEqual");
function vn() {
  var e = s.useRef(!0);
  return s.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
a(vn, "useIsInitialMount");
var ln = {
  environment: U.default.shape({
    addEventListener: U.default.func.isRequired,
    removeEventListener: U.default.func.isRequired,
    document: U.default.shape({
      createElement: U.default.func.isRequired,
      getElementById: U.default.func.isRequired,
      activeElement: U.default.any.isRequired,
      body: U.default.any.isRequired
    }).isRequired,
    Node: U.default.func.isRequired
  }),
  itemToString: U.default.func,
  itemToKey: U.default.func,
  stateReducer: U.default.func
}, tf = j({}, ln, {
  getA11yStatusMessage: U.default.func,
  highlightedIndex: U.default.number,
  defaultHighlightedIndex: U.default.number,
  initialHighlightedIndex: U.default.number,
  isOpen: U.default.bool,
  defaultIsOpen: U.default.bool,
  initialIsOpen: U.default.bool,
  selectedItem: U.default.any,
  initialSelectedItem: U.default.any,
  defaultSelectedItem: U.default.any,
  id: U.default.string,
  labelId: U.default.string,
  menuId: U.default.string,
  getItemId: U.default.func,
  toggleButtonId: U.default.string,
  onSelectedItemChange: U.default.func,
  onHighlightedIndexChange: U.default.func,
  onStateChange: U.default.func,
  onIsOpenChange: U.default.func,
  scrollIntoView: U.default.func
});
function rf(e, t, r) {
  var o = t.type, i = t.props, n;
  switch (o) {
    case r.ItemMouseMove:
      n = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case r.MenuMouseLeave:
      n = {
        highlightedIndex: -1
      };
      break;
    case r.ToggleButtonClick:
    case r.FunctionToggleMenu:
      n = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : $t(i, e, 0)
      };
      break;
    case r.FunctionOpenMenu:
      n = {
        isOpen: !0,
        highlightedIndex: $t(i, e, 0)
      };
      break;
    case r.FunctionCloseMenu:
      n = {
        isOpen: !1
      };
      break;
    case r.FunctionSetHighlightedIndex:
      n = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case r.FunctionSetInputValue:
      n = {
        inputValue: t.inputValue
      };
      break;
    case r.FunctionReset:
      n = {
        highlightedIndex: $e(i, "highlightedIndex"),
        isOpen: $e(i, "isOpen"),
        selectedItem: $e(i, "selectedItem"),
        inputValue: $e(i, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return j({}, e, n);
}
a(rf, "downshiftCommonReducer");
function n0(e) {
  for (var t = e.keysSoFar, r = e.highlightedIndex, o = e.items, i = e.itemToString, n = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < o.
  length; u++) {
    var c = (u + r + (t.length < 2 ? 1 : 0)) % o.length, d = o[c];
    if (d !== void 0 && i(d).toLowerCase().startsWith(l) && !n(d, c))
      return c;
  }
  return r;
}
a(n0, "getItemIndexByCharacterKey");
var fF = zt(zt({}, tf), { items: U.default.array.isRequired, isItemDisabled: U.default.func }), i0 = zt(zt({}, Wr), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), a0 = ze, un = 0, Zi = 1, Ji = 2, fn = 3, ea = 4, ta = 5, ra = 6, oa = 7, na = 8, ia = 9, aa = 10, mn = 11, of = 12,
nf = 13, sa = 14, af = 15, sf = 16, lf = 17, uf = 18, la = 19, Ui = 20, cf = 21, pf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: un,
  ToggleButtonKeyDownArrowDown: Zi,
  ToggleButtonKeyDownArrowUp: Ji,
  ToggleButtonKeyDownCharacter: fn,
  ToggleButtonKeyDownEscape: ea,
  ToggleButtonKeyDownHome: ta,
  ToggleButtonKeyDownEnd: ra,
  ToggleButtonKeyDownEnter: oa,
  ToggleButtonKeyDownSpaceButton: na,
  ToggleButtonKeyDownPageUp: ia,
  ToggleButtonKeyDownPageDown: aa,
  ToggleButtonBlur: mn,
  MenuMouseLeave: of,
  ItemMouseMove: nf,
  ItemClick: sa,
  FunctionToggleMenu: af,
  FunctionOpenMenu: sf,
  FunctionCloseMenu: lf,
  FunctionSetHighlightedIndex: uf,
  FunctionSelectItem: la,
  FunctionSetInputValue: Ui,
  FunctionReset: cf
});
function s0(e, t) {
  var r, o = t.type, i = t.props, n = t.altKey, l;
  switch (o) {
    case sa:
      l = {
        isOpen: $e(i, "isOpen"),
        highlightedIndex: $e(i, "highlightedIndex"),
        selectedItem: i.items[t.index]
      };
      break;
    case fn:
      {
        var u = t.key, c = "" + e.inputValue + u, d = !e.isOpen && e.selectedItem ? i.items.findIndex(function(g) {
          return i.itemToKey(g) === i.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, p = n0({
          keysSoFar: c,
          highlightedIndex: d,
          items: i.items,
          itemToString: i.itemToString,
          isItemDisabled: i.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: p,
          isOpen: !0
        };
      }
      break;
    case Zi:
      {
        var h = e.isOpen ? et(e.highlightedIndex, 1, i.items, i.isItemDisabled) : n && e.selectedItem == null ? -1 : $t(i, e, 1);
        l = {
          highlightedIndex: h,
          isOpen: !0
        };
      }
      break;
    case Ji:
      if (e.isOpen && n)
        l = dn(i, e.highlightedIndex, !1);
      else {
        var f = e.isOpen ? et(e.highlightedIndex, -1, i.items, i.isItemDisabled) : $t(i, e, -1);
        l = {
          highlightedIndex: f,
          isOpen: !0
        };
      }
      break;
    case oa:
    case na:
      l = dn(i, e.highlightedIndex, !1);
      break;
    case ta:
      l = {
        highlightedIndex: It(0, !1, i.items, i.isItemDisabled),
        isOpen: !0
      };
      break;
    case ra:
      l = {
        highlightedIndex: It(i.items.length - 1, !0, i.items, i.isItemDisabled),
        isOpen: !0
      };
      break;
    case ia:
      l = {
        highlightedIndex: et(e.highlightedIndex, -10, i.items, i.isItemDisabled)
      };
      break;
    case aa:
      l = {
        highlightedIndex: et(e.highlightedIndex, 10, i.items, i.isItemDisabled)
      };
      break;
    case ea:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case mn:
      l = j({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = i.items) == null ? void 0 : r.length) && {
        selectedItem: i.items[e.highlightedIndex]
      });
      break;
    case la:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return rf(e, t, pf);
  }
  return j({}, e, l);
}
a(s0, "downshiftSelectReducer");
var l0 = ["onClick"], u0 = ["onMouseLeave", "refKey", "ref"], c0 = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], p0 = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
df.stateChangeTypes = pf;
function df(e) {
  e === void 0 && (e = {}), a0(e, df);
  var t = j({}, i0, e), r = t.scrollIntoView, o = t.environment, i = t.getA11yStatusMessage, n = Qd(s0, t, Xd, ef), l = n[0], u = n[1], c = l.
  isOpen, d = l.highlightedIndex, p = l.selectedItem, h = l.inputValue, f = Q(null), g = Q(null), m = Q({}), v = Q(null), S = Gd(t), C = yn(
  {
    state: l,
    props: t
  }), y = A(function(R) {
    return m.current[S.getItemId(R)];
  }, [S]);
  Qi(i, l, [c, d, p, h], o);
  var b = Jd({
    menuElement: g.current,
    highlightedIndex: d,
    isOpen: c,
    itemRefs: m,
    scrollIntoView: r,
    getItemNodeFromIndex: y
  });
  V(function() {
    return v.current = gn(function(R) {
      R({
        type: Ui,
        inputValue: ""
      });
    }, 500), function() {
      v.current.cancel();
    };
  }, []), V(function() {
    h && v.current(u);
  }, [u, h]), Xi({
    props: t,
    state: l
  }), V(function() {
    var R = Wt(t, "isOpen");
    R && f.current && f.current.focus();
  }, []);
  var I = Zd(o, [f, g], A(/* @__PURE__ */ a(function() {
    C.current.state.isOpen && u({
      type: mn
    });
  }, "handleBlur"), [u, C])), E = Yi("getMenuProps", "getToggleButtonProps");
  V(function() {
    c || (m.current = {});
  }, [c]);
  var _ = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(z) {
        z.preventDefault(), u({
          type: Zi,
          altKey: z.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(z) {
        z.preventDefault(), u({
          type: Ji,
          altKey: z.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(z) {
        z.preventDefault(), u({
          type: ta
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(z) {
        z.preventDefault(), u({
          type: ra
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        C.current.state.isOpen && u({
          type: ea
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(z) {
        z.preventDefault(), u({
          type: C.current.state.isOpen ? oa : un
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(z) {
        C.current.state.isOpen && (z.preventDefault(), u({
          type: ia
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(z) {
        C.current.state.isOpen && (z.preventDefault(), u({
          type: aa
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(z) {
        z.preventDefault();
        var B = C.current.state;
        if (!B.isOpen) {
          u({
            type: un
          });
          return;
        }
        B.inputValue ? u({
          type: fn,
          key: " "
        }) : u({
          type: na
        });
      }, "_")
    };
  }, [u, C]), k = A(function() {
    u({
      type: af
    });
  }, [u]), O = A(function() {
    u({
      type: lf
    });
  }, [u]), w = A(function() {
    u({
      type: sf
    });
  }, [u]), T = A(function(R) {
    u({
      type: uf,
      highlightedIndex: R
    });
  }, [u]), P = A(function(R) {
    u({
      type: la,
      selectedItem: R
    });
  }, [u]), M = A(function() {
    u({
      type: cf
    });
  }, [u]), D = A(function(R) {
    u({
      type: Ui,
      inputValue: R
    });
  }, [u]), L = A(function(R) {
    var z = R === void 0 ? {} : R, B = z.onClick, re = ke(z, l0), H = /* @__PURE__ */ a(function() {
      var F;
      (F = f.current) == null || F.focus();
    }, "labelHandleClick");
    return j({
      id: S.labelId,
      htmlFor: S.toggleButtonId,
      onClick: ue(B, H)
    }, re);
  }, [S]), $ = A(function(R, z) {
    var B, re = R === void 0 ? {} : R, H = re.onMouseLeave, N = re.refKey, F = N === void 0 ? "ref" : N, W = re.ref, Y = ke(re, u0), oe = z ===
    void 0 ? {} : z, ee = oe.suppressRefError, le = ee === void 0 ? !1 : ee, se = /* @__PURE__ */ a(function() {
      u({
        type: of
      });
    }, "menuHandleMouseLeave");
    return E("getMenuProps", le, F, g), j((B = {}, B[F] = Je(W, function(pe) {
      g.current = pe;
    }), B.id = S.menuId, B.role = "listbox", B["aria-labelledby"] = Y && Y["aria-label"] ? void 0 : "" + S.labelId, B.onMouseLeave = ue(H, se),
    B), Y);
  }, [u, E, S]), X = A(function(R, z) {
    var B, re = R === void 0 ? {} : R, H = re.onBlur, N = re.onClick;
    re.onPress;
    var F = re.onKeyDown, W = re.refKey, Y = W === void 0 ? "ref" : W, oe = re.ref, ee = ke(re, c0), le = z === void 0 ? {} : z, se = le.suppressRefError,
    pe = se === void 0 ? !1 : se, ce = C.current.state, Ie = /* @__PURE__ */ a(function() {
      u({
        type: un
      });
    }, "toggleButtonHandleClick"), ge = /* @__PURE__ */ a(function() {
      ce.isOpen && !I.isMouseDown && u({
        type: mn
      });
    }, "toggleButtonHandleBlur"), Pe = /* @__PURE__ */ a(function(_e) {
      var Fe = yr(_e);
      Fe && _[Fe] ? _[Fe](_e) : o0(Fe) && u({
        type: fn,
        key: Fe
      });
    }, "toggleButtonHandleKeyDown"), me = j((B = {}, B[Y] = Je(oe, function(Se) {
      f.current = Se;
    }), B["aria-activedescendant"] = ce.isOpen && ce.highlightedIndex > -1 ? S.getItemId(ce.highlightedIndex) : "", B["aria-controls"] = S.menuId,
    B["aria-expanded"] = C.current.state.isOpen, B["aria-haspopup"] = "listbox", B["aria-labelledby"] = ee && ee["aria-label"] ? void 0 : "" +
    S.labelId, B.id = S.toggleButtonId, B.role = "combobox", B.tabIndex = 0, B.onBlur = ue(H, ge), B), ee);
    return ee.disabled || (me.onClick = ue(N, Ie), me.onKeyDown = ue(F, Pe)), E("getToggleButtonProps", pe, Y, f), me;
  }, [u, S, C, I, E, _]), q = A(function(R) {
    var z, B = R === void 0 ? {} : R, re = B.item, H = B.index, N = B.onMouseMove, F = B.onClick, W = B.onMouseDown;
    B.onPress;
    var Y = B.refKey, oe = Y === void 0 ? "ref" : Y, ee = B.disabled, le = B.ref, se = ke(B, p0);
    ee !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useSelect.');
    var pe = C.current, ce = pe.state, Ie = pe.props, ge = qi(re, H, Ie.items, "Pass either item or index to getItemProps!"), Pe = ge[0], me = ge[1],
    Se = Ie.isItemDisabled(Pe, me), _e = /* @__PURE__ */ a(function() {
      I.isTouchEnd || me === ce.highlightedIndex || (b.current = !1, u({
        type: nf,
        index: me,
        disabled: Se
      }));
    }, "itemHandleMouseMove"), Fe = /* @__PURE__ */ a(function() {
      u({
        type: sa,
        index: me
      });
    }, "itemHandleClick"), tt = /* @__PURE__ */ a(function(vr) {
      return vr.preventDefault();
    }, "itemHandleMouseDown"), Me = j((z = {}, z[oe] = Je(le, function(Ge) {
      Ge && (m.current[S.getItemId(me)] = Ge);
    }), z["aria-disabled"] = Se, z["aria-selected"] = "" + (Pe === ce.selectedItem), z.id = S.getItemId(me), z.role = "option", z), se);
    return Se || (Me.onClick = ue(F, Fe)), Me.onMouseMove = ue(N, _e), Me.onMouseDown = ue(W, tt), Me;
  }, [C, S, I, b, u]);
  return {
    // prop getters.
    getToggleButtonProps: X,
    getLabelProps: L,
    getMenuProps: $,
    getItemProps: q,
    // actions.
    toggleMenu: k,
    openMenu: w,
    closeMenu: O,
    setHighlightedIndex: T,
    selectItem: P,
    reset: M,
    setInputValue: D,
    // state.
    highlightedIndex: d,
    isOpen: c,
    selectedItem: p,
    inputValue: h
  };
}
a(df, "useSelect");
var ua = 0, ca = 1, pa = 2, da = 3, fa = 4, ma = 5, ha = 6, ga = 7, ya = 8, hn = 9, va = 10, ff = 11, mf = 12, ba = 13, hf = 14, gf = 15, yf = 16,
vf = 17, bf = 18, xa = 19, xf = 20, If = 21, Ia = 22, Sf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: ua,
  InputKeyDownArrowUp: ca,
  InputKeyDownEscape: pa,
  InputKeyDownHome: da,
  InputKeyDownEnd: fa,
  InputKeyDownPageUp: ma,
  InputKeyDownPageDown: ha,
  InputKeyDownEnter: ga,
  InputChange: ya,
  InputBlur: hn,
  InputClick: va,
  MenuMouseLeave: ff,
  ItemMouseMove: mf,
  ItemClick: ba,
  ToggleButtonClick: hf,
  FunctionToggleMenu: gf,
  FunctionOpenMenu: yf,
  FunctionCloseMenu: vf,
  FunctionSetHighlightedIndex: bf,
  FunctionSelectItem: xa,
  FunctionSetInputValue: xf,
  FunctionReset: If,
  ControlledPropUpdatedSelectedItem: Ia
});
function d0(e) {
  var t = Xd(e), r = t.selectedItem, o = t.inputValue;
  return o === "" && r && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (o = e.itemToString(
  r)), j({}, t, {
    inputValue: o
  });
}
a(d0, "getInitialState$1");
var mF = j({}, tf, {
  items: U.default.array.isRequired,
  isItemDisabled: U.default.func,
  inputValue: U.default.string,
  defaultInputValue: U.default.string,
  initialInputValue: U.default.string,
  inputId: U.default.string,
  onInputValueChange: U.default.func
});
function f0(e, t, r, o) {
  var i = Q(), n = Yd(e, t, r, o), l = n[0], u = n[1], c = vn();
  return V(function() {
    if (cn(t, "selectedItem")) {
      if (!c) {
        var d = t.itemToKey(t.selectedItem) !== t.itemToKey(i.current);
        d && u({
          type: Ia,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      i.current = l.selectedItem === i.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [$r(l, t), u];
}
a(f0, "useControlledReducer");
var m0 = ze, h0 = j({}, Wr, {
  isItemDisabled: /* @__PURE__ */ a(function() {
    return !1;
  }, "isItemDisabled")
});
function g0(e, t) {
  var r, o = t.type, i = t.props, n = t.altKey, l;
  switch (o) {
    case ba:
      l = {
        isOpen: $e(i, "isOpen"),
        highlightedIndex: $e(i, "highlightedIndex"),
        selectedItem: i.items[t.index],
        inputValue: i.itemToString(i.items[t.index])
      };
      break;
    case ua:
      e.isOpen ? l = {
        highlightedIndex: et(e.highlightedIndex, 1, i.items, i.isItemDisabled, !0)
      } : l = {
        highlightedIndex: n && e.selectedItem == null ? -1 : $t(i, e, 1),
        isOpen: i.items.length >= 0
      };
      break;
    case ca:
      e.isOpen ? n ? l = dn(i, e.highlightedIndex) : l = {
        highlightedIndex: et(e.highlightedIndex, -1, i.items, i.isItemDisabled, !0)
      } : l = {
        highlightedIndex: $t(i, e, -1),
        isOpen: i.items.length >= 0
      };
      break;
    case ga:
      l = dn(i, e.highlightedIndex);
      break;
    case pa:
      l = j({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case ma:
      l = {
        highlightedIndex: et(e.highlightedIndex, -10, i.items, i.isItemDisabled, !0)
      };
      break;
    case ha:
      l = {
        highlightedIndex: et(e.highlightedIndex, 10, i.items, i.isItemDisabled, !0)
      };
      break;
    case da:
      l = {
        highlightedIndex: It(0, !1, i.items, i.isItemDisabled)
      };
      break;
    case fa:
      l = {
        highlightedIndex: It(i.items.length - 1, !0, i.items, i.isItemDisabled)
      };
      break;
    case hn:
      l = j({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((r = i.items) == null ? void 0 : r.length) && t.selectItem && {
        selectedItem: i.items[e.highlightedIndex],
        inputValue: i.itemToString(i.items[e.highlightedIndex])
      });
      break;
    case ya:
      l = {
        isOpen: !0,
        highlightedIndex: $e(i, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case va:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : $t(i, e, 0)
      };
      break;
    case xa:
      l = {
        selectedItem: t.selectedItem,
        inputValue: i.itemToString(t.selectedItem)
      };
      break;
    case Ia:
      l = {
        inputValue: t.inputValue
      };
      break;
    default:
      return rf(e, t, Sf);
  }
  return j({}, e, l);
}
a(g0, "downshiftUseComboboxReducer");
var y0 = ["onMouseLeave", "refKey", "ref"], v0 = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], b0 = ["onClick", "onPress", "refKey", "ref"], x0 = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
wf.stateChangeTypes = Sf;
function wf(e) {
  e === void 0 && (e = {}), m0(e, wf);
  var t = j({}, h0, e), r = t.items, o = t.scrollIntoView, i = t.environment, n = t.getA11yStatusMessage, l = f0(g0, t, d0, ef), u = l[0], c = l[1],
  d = u.isOpen, p = u.highlightedIndex, h = u.selectedItem, f = u.inputValue, g = Q(null), m = Q({}), v = Q(null), S = Q(null), C = vn(), y = Gd(
  t), b = Q(), I = yn({
    state: u,
    props: t
  }), E = A(function(H) {
    return m.current[y.getItemId(H)];
  }, [y]);
  Qi(n, u, [d, p, h, f], i);
  var _ = Jd({
    menuElement: g.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: m,
    scrollIntoView: o,
    getItemNodeFromIndex: E
  });
  Xi({
    props: t,
    state: u
  }), V(function() {
    var H = Wt(t, "isOpen");
    H && v.current && v.current.focus();
  }, []), V(function() {
    C || (b.current = r.length);
  });
  var k = Zd(i, [S, g, v], A(/* @__PURE__ */ a(function() {
    I.current.state.isOpen && c({
      type: hn,
      selectItem: !1
    });
  }, "handleBlur"), [c, I])), O = Yi("getInputProps", "getMenuProps");
  V(function() {
    d || (m.current = {});
  }, [d]), V(function() {
    var H;
    !d || !(i != null && i.document) || !(v != null && (H = v.current) != null && H.focus) || i.document.activeElement !== v.current && v.current.
    focus();
  }, [d, i]);
  var w = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(N) {
        N.preventDefault(), c({
          type: ua,
          altKey: N.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(N) {
        N.preventDefault(), c({
          type: ca,
          altKey: N.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(N) {
        I.current.state.isOpen && (N.preventDefault(), c({
          type: da
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(N) {
        I.current.state.isOpen && (N.preventDefault(), c({
          type: fa
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(N) {
        var F = I.current.state;
        (F.isOpen || F.inputValue || F.selectedItem || F.highlightedIndex > -1) && (N.preventDefault(), c({
          type: pa
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(N) {
        var F = I.current.state;
        !F.isOpen || N.which === 229 || (N.preventDefault(), c({
          type: ga
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(N) {
        I.current.state.isOpen && (N.preventDefault(), c({
          type: ma
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(N) {
        I.current.state.isOpen && (N.preventDefault(), c({
          type: ha
        }));
      }, "PageDown")
    };
  }, [c, I]), T = A(function(H) {
    return j({
      id: y.labelId,
      htmlFor: y.inputId
    }, H);
  }, [y]), P = A(function(H, N) {
    var F, W = H === void 0 ? {} : H, Y = W.onMouseLeave, oe = W.refKey, ee = oe === void 0 ? "ref" : oe, le = W.ref, se = ke(W, y0), pe = N ===
    void 0 ? {} : N, ce = pe.suppressRefError, Ie = ce === void 0 ? !1 : ce;
    return O("getMenuProps", Ie, ee, g), j((F = {}, F[ee] = Je(le, function(ge) {
      g.current = ge;
    }), F.id = y.menuId, F.role = "listbox", F["aria-labelledby"] = se && se["aria-label"] ? void 0 : "" + y.labelId, F.onMouseLeave = ue(Y,
    function() {
      c({
        type: ff
      });
    }), F), se);
  }, [c, O, y]), M = A(function(H) {
    var N, F, W = H === void 0 ? {} : H, Y = W.item, oe = W.index, ee = W.refKey, le = ee === void 0 ? "ref" : ee, se = W.ref, pe = W.onMouseMove,
    ce = W.onMouseDown, Ie = W.onClick;
    W.onPress;
    var ge = W.disabled, Pe = ke(W, v0);
    ge !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var me = I.current, Se = me.props, _e = me.state, Fe = qi(Y, oe, Se.items, "Pass either item or index to getItemProps!"), tt = Fe[0], Me = Fe[1],
    Ge = Se.isItemDisabled(tt, Me), vr = "onClick", jr = Ie, pt = /* @__PURE__ */ a(function() {
      k.isTouchEnd || Me === _e.highlightedIndex || (_.current = !1, c({
        type: mf,
        index: Me,
        disabled: Ge
      }));
    }, "itemHandleMouseMove"), St = /* @__PURE__ */ a(function() {
      c({
        type: ba,
        index: Me
      });
    }, "itemHandleClick"), dt = /* @__PURE__ */ a(function(Pm) {
      return Pm.preventDefault();
    }, "itemHandleMouseDown");
    return j((N = {}, N[le] = Je(se, function(Ye) {
      Ye && (m.current[y.getItemId(Me)] = Ye);
    }), N["aria-disabled"] = Ge, N["aria-selected"] = "" + (Me === _e.highlightedIndex), N.id = y.getItemId(Me), N.role = "option", N), !Ge &&
    (F = {}, F[vr] = ue(jr, St), F), {
      onMouseMove: ue(pe, pt),
      onMouseDown: ue(ce, dt)
    }, Pe);
  }, [c, y, I, k, _]), D = A(function(H) {
    var N, F = H === void 0 ? {} : H, W = F.onClick;
    F.onPress;
    var Y = F.refKey, oe = Y === void 0 ? "ref" : Y, ee = F.ref, le = ke(F, b0), se = I.current.state, pe = /* @__PURE__ */ a(function() {
      c({
        type: hf
      });
    }, "toggleButtonHandleClick");
    return j((N = {}, N[oe] = Je(ee, function(ce) {
      S.current = ce;
    }), N["aria-controls"] = y.menuId, N["aria-expanded"] = se.isOpen, N.id = y.toggleButtonId, N.tabIndex = -1, N), !le.disabled && j({}, {
      onClick: ue(W, pe)
    }), le);
  }, [c, I, y]), L = A(function(H, N) {
    var F, W = H === void 0 ? {} : H, Y = W.onKeyDown, oe = W.onChange, ee = W.onInput, le = W.onBlur;
    W.onChangeText;
    var se = W.onClick, pe = W.refKey, ce = pe === void 0 ? "ref" : pe, Ie = W.ref, ge = ke(W, x0), Pe = N === void 0 ? {} : N, me = Pe.suppressRefError,
    Se = me === void 0 ? !1 : me;
    O("getInputProps", Se, ce, v);
    var _e = I.current.state, Fe = /* @__PURE__ */ a(function(dt) {
      var Ye = yr(dt);
      Ye && w[Ye] && w[Ye](dt);
    }, "inputHandleKeyDown"), tt = /* @__PURE__ */ a(function(dt) {
      c({
        type: ya,
        inputValue: dt.target.value
      });
    }, "inputHandleChange"), Me = /* @__PURE__ */ a(function(dt) {
      if (i != null && i.document && _e.isOpen && !k.isMouseDown) {
        var Ye = dt.relatedTarget === null && i.document.activeElement !== i.document.body;
        c({
          type: hn,
          selectItem: !Ye
        });
      }
    }, "inputHandleBlur"), Ge = /* @__PURE__ */ a(function() {
      c({
        type: va
      });
    }, "inputHandleClick"), vr = "onChange", jr = {};
    if (!ge.disabled) {
      var pt;
      jr = (pt = {}, pt[vr] = ue(oe, ee, tt), pt.onKeyDown = ue(Y, Fe), pt.onBlur = ue(le, Me), pt.onClick = ue(se, Ge), pt);
    }
    return j((F = {}, F[ce] = Je(Ie, function(St) {
      v.current = St;
    }), F["aria-activedescendant"] = _e.isOpen && _e.highlightedIndex > -1 ? y.getItemId(_e.highlightedIndex) : "", F["aria-autocomplete"] =
    "list", F["aria-controls"] = y.menuId, F["aria-expanded"] = _e.isOpen, F["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : y.labelId,
    F.autoComplete = "off", F.id = y.inputId, F.role = "combobox", F.value = _e.inputValue, F), jr, ge);
  }, [c, y, i, w, I, k, O]), $ = A(function() {
    c({
      type: gf
    });
  }, [c]), X = A(function() {
    c({
      type: vf
    });
  }, [c]), q = A(function() {
    c({
      type: yf
    });
  }, [c]), R = A(function(H) {
    c({
      type: bf,
      highlightedIndex: H
    });
  }, [c]), z = A(function(H) {
    c({
      type: xa,
      selectedItem: H
    });
  }, [c]), B = A(function(H) {
    c({
      type: xf,
      inputValue: H
    });
  }, [c]), re = A(function() {
    c({
      type: If
    });
  }, [c]);
  return {
    // prop getters.
    getItemProps: M,
    getLabelProps: T,
    getMenuProps: P,
    getInputProps: L,
    getToggleButtonProps: D,
    // actions.
    toggleMenu: $,
    openMenu: q,
    closeMenu: X,
    setHighlightedIndex: R,
    setInputValue: B,
    selectItem: z,
    reset: re,
    // state.
    highlightedIndex: p,
    isOpen: d,
    selectedItem: h,
    inputValue: f
  };
}
a(wf, "useCombobox");
var Ef = {
  activeIndex: -1,
  selectedItems: []
};
function Cd(e, t) {
  return Wt(e, t, Ef);
}
a(Cd, "getInitialValue");
function _d(e, t) {
  return $e(e, t, Ef);
}
a(_d, "getDefaultValue");
function I0(e) {
  var t = Cd(e, "activeIndex"), r = Cd(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: r
  };
}
a(I0, "getInitialState");
function Td(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
a(Td, "isKeyDownOperationPermitted");
function S0(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(S0, "isStateEqual");
var hF = {
  stateReducer: ln.stateReducer,
  itemToKey: ln.itemToKey,
  environment: ln.environment,
  selectedItems: U.default.array,
  initialSelectedItems: U.default.array,
  defaultSelectedItems: U.default.array,
  getA11yStatusMessage: U.default.func,
  activeIndex: U.default.number,
  initialActiveIndex: U.default.number,
  defaultActiveIndex: U.default.number,
  onActiveIndexChange: U.default.func,
  onSelectedItemsChange: U.default.func,
  keyNavigationNext: U.default.string,
  keyNavigationPrevious: U.default.string
}, w0 = {
  itemToKey: Wr.itemToKey,
  stateReducer: Wr.stateReducer,
  environment: Wr.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, E0 = ze, Sa = 0, wa = 1, Ea = 2, Ca = 3, _a = 4, Ta = 5, ka = 6, Oa = 7, Pa = 8, Aa = 9, Ma = 10, Da = 11, La = 12, C0 = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  SelectedItemClick: Sa,
  SelectedItemKeyDownDelete: wa,
  SelectedItemKeyDownBackspace: Ea,
  SelectedItemKeyDownNavigationNext: Ca,
  SelectedItemKeyDownNavigationPrevious: _a,
  DropdownKeyDownNavigationPrevious: Ta,
  DropdownKeyDownBackspace: ka,
  DropdownClick: Oa,
  FunctionAddSelectedItem: Pa,
  FunctionRemoveSelectedItem: Aa,
  FunctionSetSelectedItems: Ma,
  FunctionSetActiveIndex: Da,
  FunctionReset: La
});
function _0(e, t) {
  var r = t.type, o = t.index, i = t.props, n = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (r) {
    case Sa:
      c = {
        activeIndex: o
      };
      break;
    case _a:
      c = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Ca:
      c = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case Ea:
    case wa: {
      if (l < 0)
        break;
      var d = l;
      u.length === 1 ? d = -1 : l === u.length - 1 && (d = u.length - 2), c = j({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: d
      });
      break;
    }
    case Ta:
      c = {
        activeIndex: u.length - 1
      };
      break;
    case ka:
      c = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Pa:
      c = {
        selectedItems: [].concat(u, [n])
      };
      break;
    case Oa:
      c = {
        activeIndex: -1
      };
      break;
    case Aa: {
      var p = l, h = u.findIndex(function(m) {
        return i.itemToKey(m) === i.itemToKey(n);
      });
      if (h < 0)
        break;
      u.length === 1 ? p = -1 : h === u.length - 1 && (p = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, h), u.slice(h + 1)),
        activeIndex: p
      };
      break;
    }
    case Ma: {
      var f = t.selectedItems;
      c = {
        selectedItems: f
      };
      break;
    }
    case Da: {
      var g = t.activeIndex;
      c = {
        activeIndex: g
      };
      break;
    }
    case La:
      c = {
        activeIndex: _d(i, "activeIndex"),
        selectedItems: _d(i, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return j({}, e, c);
}
a(_0, "downshiftMultipleSelectionReducer");
var T0 = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], k0 = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
Cf.stateChangeTypes = C0;
function Cf(e) {
  e === void 0 && (e = {}), E0(e, Cf);
  var t = j({}, w0, e), r = t.getA11yStatusMessage, o = t.environment, i = t.keyNavigationNext, n = t.keyNavigationPrevious, l = Qd(_0, t, I0,
  S0), u = l[0], c = l[1], d = u.activeIndex, p = u.selectedItems, h = vn(), f = Q(null), g = Q();
  g.current = [];
  var m = yn({
    state: u,
    props: t
  });
  Qi(r, u, [d, p], o), V(function() {
    h || (d === -1 && f.current ? f.current.focus() : g.current[d] && g.current[d].focus());
  }, [d]), Xi({
    props: t,
    state: u
  });
  var v = Yi("getDropdownProps"), S = K(function() {
    var w;
    return w = {}, w[n] = function() {
      c({
        type: _a
      });
    }, w[i] = function() {
      c({
        type: Ca
      });
    }, w.Delete = /* @__PURE__ */ a(function() {
      c({
        type: wa
      });
    }, "Delete"), w.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: Ea
      });
    }, "Backspace"), w;
  }, [c, i, n]), C = K(function() {
    var w;
    return w = {}, w[n] = function(T) {
      Td(T) && c({
        type: Ta
      });
    }, w.Backspace = /* @__PURE__ */ a(function(P) {
      Td(P) && c({
        type: ka
      });
    }, "Backspace"), w;
  }, [c, n]), y = A(function(w) {
    var T, P = w === void 0 ? {} : w, M = P.refKey, D = M === void 0 ? "ref" : M, L = P.ref, $ = P.onClick, X = P.onKeyDown, q = P.selectedItem,
    R = P.index, z = ke(P, T0), B = m.current.state, re = qi(q, R, B.selectedItems, "Pass either item or index to getSelectedItemProps!"), H = re[1],
    N = H > -1 && H === B.activeIndex, F = /* @__PURE__ */ a(function() {
      c({
        type: Sa,
        index: H
      });
    }, "selectedItemHandleClick"), W = /* @__PURE__ */ a(function(oe) {
      var ee = yr(oe);
      ee && S[ee] && S[ee](oe);
    }, "selectedItemHandleKeyDown");
    return j((T = {}, T[D] = Je(L, function(Y) {
      Y && g.current.push(Y);
    }), T.tabIndex = N ? 0 : -1, T.onClick = ue($, F), T.onKeyDown = ue(X, W), T), z);
  }, [c, m, S]), b = A(function(w, T) {
    var P, M = w === void 0 ? {} : w, D = M.refKey, L = D === void 0 ? "ref" : D, $ = M.ref, X = M.onKeyDown, q = M.onClick, R = M.preventKeyAction,
    z = R === void 0 ? !1 : R, B = ke(M, k0), re = T === void 0 ? {} : T, H = re.suppressRefError, N = H === void 0 ? !1 : H;
    v("getDropdownProps", N, L, f);
    var F = /* @__PURE__ */ a(function(oe) {
      var ee = yr(oe);
      ee && C[ee] && C[ee](oe);
    }, "dropdownHandleKeyDown"), W = /* @__PURE__ */ a(function() {
      c({
        type: Oa
      });
    }, "dropdownHandleClick");
    return j((P = {}, P[L] = Je($, function(Y) {
      Y && (f.current = Y);
    }), P), !z && {
      onKeyDown: ue(X, F),
      onClick: ue(q, W)
    }, B);
  }, [c, C, v]), I = A(function(w) {
    c({
      type: Pa,
      selectedItem: w
    });
  }, [c]), E = A(function(w) {
    c({
      type: Aa,
      selectedItem: w
    });
  }, [c]), _ = A(function(w) {
    c({
      type: Ma,
      selectedItems: w
    });
  }, [c]), k = A(function(w) {
    c({
      type: Da,
      activeIndex: w
    });
  }, [c]), O = A(function() {
    c({
      type: La
    });
  }, [c]);
  return {
    getSelectedItemProps: y,
    getDropdownProps: b,
    addSelectedItem: I,
    removeSelectedItem: E,
    setSelectedItems: _,
    setActiveIndex: k,
    reset: O,
    selectedItems: p,
    activeIndex: d
  };
}
a(Cf, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var nm = We(_f(), 1);

// src/manager/hooks/useDebounce.ts
function Tf(e, t) {
  let [r, o] = Z(e);
  return V(() => {
    let i = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [e, t]), r;
}
a(Tf, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function kf() {
  let [e, t] = s.useState({
    width: null,
    height: null
  }), r = s.useRef(null);
  return [s.useCallback((i) => {
    if (r.current && (r.current.disconnect(), r.current = null), i?.nodeType === Node.ELEMENT_NODE) {
      let n = new ResizeObserver(([l]) => {
        if (l && l.borderBoxSize) {
          let { inlineSize: u, blockSize: c } = l.borderBoxSize[0];
          t({ width: u, height: c });
        }
      });
      n.observe(i), r.current = n;
    }
  }, []), e];
}
a(kf, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function Kt(e, t, r) {
  let o = r.initialDeps ?? [], i;
  return () => {
    var n, l, u, c;
    let d;
    r.key && ((n = r.debug) != null && n.call(r)) && (d = Date.now());
    let p = e();
    if (!(p.length !== o.length || p.some((g, m) => o[m] !== g)))
      return i;
    o = p;
    let f;
    if (r.key && ((l = r.debug) != null && l.call(r)) && (f = Date.now()), i = t(...p), r.key && ((u = r.debug) != null && u.call(r))) {
      let g = Math.round((Date.now() - d) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, S = /* @__PURE__ */ a((C, y) => {
        for (C = String(C); C.length < y; )
          C = " " + C;
        return C;
      }, "pad");
      console.info(
        `%c\u23F1 ${S(m, 5)} /${S(g, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        r?.key
      );
    }
    return (c = r?.onChange) == null || c.call(r, i), i;
  };
}
a(Kt, "memo");
function bn(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
a(bn, "notUndefined");
var Of = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var O0 = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), P0 = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), r = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
  for (let i = t; i <= r; i++)
    o.push(i);
  return o;
}, "defaultRangeExtractor"), Pf = /* @__PURE__ */ a((e, t) => {
  let r = e.scrollElement;
  if (!r)
    return;
  let o = /* @__PURE__ */ a((n) => {
    let { width: l, height: u } = n;
    t({ width: Math.round(l), height: Math.round(u) });
  }, "handler");
  if (o(r.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  let i = new ResizeObserver((n) => {
    let l = n[0];
    if (l?.borderBoxSize) {
      let u = l.borderBoxSize[0];
      if (u) {
        o({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    o(r.getBoundingClientRect());
  });
  return i.observe(r, { box: "border-box" }), () => {
    i.unobserve(r);
  };
}, "observeElementRect");
var Af = /* @__PURE__ */ a((e, t) => {
  let r = e.scrollElement;
  if (!r)
    return;
  let o = /* @__PURE__ */ a(() => {
    t(r[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
  }, "handler");
  return o(), r.addEventListener("scroll", o, {
    passive: !0
  }), () => {
    r.removeEventListener("scroll", o);
  };
}, "observeElementOffset");
var A0 = /* @__PURE__ */ a((e, t, r) => {
  if (t?.borderBoxSize) {
    let o = t.borderBoxSize[0];
    if (o)
      return Math.round(
        o[r.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[r.options.horizontal ? "width" : "height"]
  );
}, "measureElement");
var Mf = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: r
}, o) => {
  var i, n;
  let l = e + t;
  (n = (i = o.scrollElement) == null ? void 0 : i.scrollTo) == null || n.call(i, {
    [o.options.horizontal ? "left" : "top"]: l,
    behavior: r
  });
}, "elementScroll"), Fa = class Fa {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null,
    this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection =
    null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let r = null, o = /* @__PURE__ */ a(() => r || (typeof ResizeObserver < "u" ? r = new ResizeObserver((i) => {
        i.forEach((n) => {
          this._measureElement(n.target, n);
        });
      }) : null), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var i;
          return (i = o()) == null ? void 0 : i.disconnect();
        }, "disconnect"),
        observe: /* @__PURE__ */ a((i) => {
          var n;
          return (n = o()) == null ? void 0 : n.observe(i, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((i) => {
          var n;
          return (n = o()) == null ? void 0 : n.unobserve(i);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (r) => {
      Object.entries(r).forEach(([o, i]) => {
        typeof i > "u" && delete r[o];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: O0,
        rangeExtractor: P0,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: A0,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...r
      };
    }, this.notify = (r) => {
      var o, i;
      (i = (o = this.options).onChange) == null || i.call(o, this, r);
    }, this.maybeNotify = Kt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (r) => {
        this.notify(r);
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((r) => r()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      let r = this.options.getScrollElement();
      this.scrollElement !== r && (this.cleanup(), this.scrollElement = r, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (o) => {
          this.scrollRect = o, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (o) => {
          this.scrollAdjustments = 0, this.scrollOffset !== o && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId),
          this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < o ? "forward" : "backward", this.
          scrollOffset = o, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = Kt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (r, o, i, n) => (this.pendingMeasuredCacheIndexes = [], {
        count: r,
        paddingStart: o,
        scrollMargin: i,
        getItemKey: n
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (r, o) => {
      let i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (let l = o - 1; l >= 0; l--) {
        let u = r[l];
        if (i.has(u.lane))
          continue;
        let c = n.get(
          u.lane
        );
        if (c == null || u.end > c.end ? n.set(u.lane, u) : u.end < c.end && i.set(u.lane, !0), i.size === this.options.lanes)
          break;
      }
      return n.size === this.options.lanes ? Array.from(n.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurements = Kt(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: r, paddingStart: o, scrollMargin: i, getItemKey: n }, l) => {
        let u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let c = this.measurementsCache.slice(0, u);
        for (let d = u; d < r; d++) {
          let p = n(d), h = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), f = h ? h.end + this.options.gap : o + i,
          g = l.get(p), m = typeof g == "number" ? g : this.options.estimateSize(d), v = f + m, S = h ? h.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: f,
            size: m,
            end: v,
            key: p,
            lane: S
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.calculateRange = Kt(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (r, o, i) => this.range = r.length > 0 && o > 0 ? M0({
        measurements: r,
        outerSize: o,
        scrollOffset: i
      }) : null,
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getIndexes = Kt(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (r, o, i, n) => o === null ? [] : r({
        ...o,
        overscan: i,
        count: n
      }),
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.indexFromElement = (r) => {
      let o = this.options.indexAttribute, i = r.getAttribute(o);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${o}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (r, o) => {
      let i = this.measurementsCache[this.indexFromElement(r)];
      if (!i || !r.isConnected) {
        this.measureElementCache.forEach((u, c) => {
          u === r && (this.observer.unobserve(r), this.measureElementCache.delete(c));
        });
        return;
      }
      let n = this.measureElementCache.get(i.key);
      n !== r && (n && this.observer.unobserve(n), this.observer.observe(r), this.measureElementCache.set(i.key, r));
      let l = this.options.measureElement(r, o, this);
      this.resizeItem(i, l);
    }, this.resizeItem = (r, o) => {
      let i = this.itemSizeCache.get(r.key) ?? r.size, n = o - i;
      n !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, n, this) :
      r.start < this.scrollOffset + this.scrollAdjustments) && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += n,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, o)), this.notify(!1));
    }, this.measureElement = (r) => {
      r && this._measureElement(r, void 0);
    }, this.getVirtualItems = Kt(
      () => [this.getIndexes(), this.getMeasurements()],
      (r, o) => {
        let i = [];
        for (let n = 0, l = r.length; n < l; n++) {
          let u = r[n], c = o[u];
          i.push(c);
        }
        return i;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getVirtualItemForOffset = (r) => {
      let o = this.getMeasurements();
      return bn(
        o[Df(
          0,
          o.length - 1,
          (i) => bn(o[i]).start,
          r
        )]
      );
    }, this.getOffsetForAlignment = (r, o) => {
      let i = this.getSize();
      o === "auto" && (r <= this.scrollOffset ? o = "start" : r >= this.scrollOffset + i ? o = "end" : o = "start"), o === "start" ? r = r :
      o === "end" ? r = r - i : o === "center" && (r = r - i / 2);
      let n = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[n] : this.scrollElement[n] : 0) - this.getSize();
      return Math.max(Math.min(u, r), 0);
    }, this.getOffsetForIndex = (r, o = "auto") => {
      r = Math.max(0, Math.min(r, this.options.count - 1));
      let i = bn(this.getMeasurements()[r]);
      if (o === "auto")
        if (i.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          o = "end";
        else if (i.start <= this.scrollOffset + this.options.scrollPaddingStart)
          o = "start";
        else
          return [this.scrollOffset, o];
      let n = o === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(n, o), o];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (r, { align: o = "start", behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(r, o), {
        adjustments: void 0,
        behavior: i
      });
    }, this.scrollToIndex = (r, { align: o = "auto", behavior: i } = {}) => {
      r = Math.max(0, Math.min(r, this.options.count - 1)), this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let [n, l] = this.getOffsetForIndex(r, o);
      this._scrollToOffset(n, { adjustments: void 0, behavior: i }), i !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId =
      setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(r)
        )) {
          let [c] = this.getOffsetForIndex(r, l);
          Of(c, this.scrollOffset) || this.scrollToIndex(r, { align: l, behavior: i });
        } else
          this.scrollToIndex(r, { align: l, behavior: i });
      }));
    }, this.scrollBy = (r, { behavior: o } = {}) => {
      this.cancelScrollToIndex(), o === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + r, {
        adjustments: void 0,
        behavior: o
      });
    }, this.getTotalSize = () => {
      var r;
      let o = this.getMeasurements(), i;
      return o.length === 0 ? i = this.options.paddingStart : i = this.options.lanes === 1 ? ((r = o[o.length - 1]) == null ? void 0 : r.end) ??
      0 : Math.max(
        ...o.slice(-this.options.lanes).map((n) => n.end)
      ), i - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (r, {
      adjustments: o,
      behavior: i
    }) => {
      this.options.scrollToFn(r, { behavior: i, adjustments: o }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ?
    this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.
    forEach((r) => {
      this.itemSizeCache.set(r.key, r.size);
    }), this.maybeNotify();
  }
};
a(Fa, "Virtualizer");
var xn = Fa, Df = /* @__PURE__ */ a((e, t, r, o) => {
  for (; e <= t; ) {
    let i = (e + t) / 2 | 0, n = r(i);
    if (n < o)
      e = i + 1;
    else if (n > o)
      t = i - 1;
    else
      return i;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function M0({
  measurements: e,
  outerSize: t,
  scrollOffset: r
}) {
  let o = e.length - 1, n = Df(0, o, /* @__PURE__ */ a((u) => e[u].start, "getOffset"), r), l = n;
  for (; l < o && e[l].end < r + t; )
    l++;
  return { startIndex: n, endIndex: l };
}
a(M0, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var D0 = typeof document < "u" ? qt : V;
function L0(e) {
  let t = Gt(() => ({}), {})[1], r = {
    ...e,
    onChange: /* @__PURE__ */ a((i, n) => {
      var l;
      n ? kr(t) : t(), (l = e.onChange) == null || l.call(e, i, n);
    }, "onChange")
  }, [o] = Z(
    () => new xn(r)
  );
  return o.setOptions(r), V(() => o._didMount(), []), D0(() => o._willUpdate()), o;
}
a(L0, "useVirtualizerBase");
function Lf(e) {
  return L0({
    observeElementRect: Pf,
    observeElementOffset: Af,
    scrollToFn: Mf,
    ...e
  });
}
a(Lf, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var Nf = /* @__PURE__ */ a(({
  parentRef: e,
  rowVirtualizer: t,
  selectedItem: r
}) => {
  V(() => {
    let o = /* @__PURE__ */ a((i) => {
      if (!e.current)
        return;
      let n = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      d = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), p = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${n - 1}"]`), "getLastElement");
      if (i.code === "ArrowDown" && l) {
        if (i.stopPropagation(), c) {
          d()?.focus();
          return;
        }
        if (u === n - 1) {
          kr(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
          }, 100);
          return;
        }
        if (r === u) {
          document.querySelector(
            `[data-index-position="${r}_first"]`
          )?.focus();
          return;
        }
        if (r !== null && l.getAttribute("data-index-position")?.includes("last")) {
          document.querySelector(
            `[data-index="${r + 1}"]`
          )?.focus();
          return;
        }
        l.nextElementSibling?.focus();
      }
      if (i.code === "ArrowUp" && l) {
        if (c) {
          kr(() => {
            t.scrollToIndex(n - 1, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
          }, 100);
          return;
        }
        if (r !== null && l.getAttribute("data-index-position")?.includes("first")) {
          document.querySelector(
            `[data-index="${r}"]`
          )?.focus();
          return;
        }
        l.previousElementSibling?.focus();
      }
    }, "handleArrowKeys");
    return document.addEventListener("keydown", o, { capture: !0 }), () => {
      document.removeEventListener("keydown", o, { capture: !0 });
    };
  }, [t, r, e]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
var Ff = x("div")(({ theme: e }) => ({
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: `linear-gradient(${Xn(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), In = x("div")(({ theme: e }) => ({
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
})), Bf = x("li")(({ theme: e }) => ({
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
})), Sn = x("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), Hf = x.div(({ theme: e, selected: t, disabled: r, error: o }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...t && {
    borderRadius: "4px",
    background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...r && {
    cursor: "not-allowed",
    div: {
      color: `${e.color.mediumdark} !important`
    }
  },
  ...o && {
    background: e.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: o ? "#00000022" : e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
})), Rf = x("ul")({
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
}), zf = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
}), Wf = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), $f = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.base === "dark" ? e.color.lighter : e.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), Vf = x("div")(({ theme: e }) => ({
  color: e.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), Kf = x("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), jf = x("li")(({ theme: e, error: t }) => ({
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...t && {
    background: "#F9ECEC",
    color: e.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: t ? "#F9ECEC" : e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: t ? e.color.negativeText : e.color.secondary
  }
})), Uf = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
})), qf = x("span")(({ theme: e }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
})), Gf = x("span")(({ theme: e }) => ({
  display: "inline-block",
  padding: `1px ${e.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: e.base === "dark" ? e.color.lightest : "#727272",
  backgroundColor: e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
})), Yf = x("div")(({ theme: e }) => ({
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: e.base === "dark" ? e.color.lightest : "#000"
})), Qf = x("p")(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.defaultText : e.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
var N0 = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
})), F0 = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
}), B0 = x.div(({ theme: e }) => ({
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
})), Xf = x.div(({ theme: e }) => ({
  height: "16px",
  borderRadius: "3px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
})), Zf = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(In, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(Sn, { key: e },
/* @__PURE__ */ s.createElement(N0, null, /* @__PURE__ */ s.createElement(B0, null), /* @__PURE__ */ s.createElement(F0, null, /* @__PURE__ */ s.
createElement(Xf, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(Xf, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var Jf = x(Zs)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), H0 = x(er)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), em = Ir(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: r,
  onNewStory: o,
  errorItemId: i
}) {
  let [n, l] = Z(null), u = s.useRef(), c = K(() => [...r ?? []].sort((m, v) => {
    let S = m.exportedComponents === null || m.exportedComponents?.length === 0, C = m.storyFileExists, y = v.exportedComponents === null ||
    v.exportedComponents?.length === 0, b = v.storyFileExists;
    return C && !b ? -1 : b && !C || S && !y ? 1 : !S && y ? -1 : 0;
  }), [r]), d = r?.length || 0, p = Lf({
    count: d,
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ a(() => u.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ a(() => 54, "estimateSize"),
    overscan: 2
  });
  Nf({ rowVirtualizer: p, parentRef: u, selectedItem: n });
  let h = A(
    ({ virtualItem: m, searchResult: v, itemId: S }) => {
      v?.exportedComponents?.length > 1 ? l((C) => C === m.index ? null : m.index) : v?.exportedComponents?.length === 1 && o({
        componentExportName: v.exportedComponents[0].name,
        componentFilePath: v.filepath,
        componentIsDefaultExport: v.exportedComponents[0].default,
        selectedItemId: S,
        componentExportCount: 1
      });
    },
    [o]
  ), f = A(
    ({ searchResult: m, component: v, id: S }) => {
      o({
        componentExportName: v.name,
        componentFilePath: m.filepath,
        componentIsDefaultExport: v.default,
        selectedItemId: S,
        // @ts-expect-error (non strict)
        componentExportCount: m.exportedComponents.length
      });
    },
    [o]
  ), g = A(
    ({ virtualItem: m, selected: v, searchResult: S }) => {
      let C = i === S.filepath, y = v === m.index;
      return /* @__PURE__ */ s.createElement(
        Sn,
        {
          "aria-expanded": y,
          "aria-controls": `file-list-export-${m.index}`,
          id: `file-list-item-wrapper-${m.index}`
        },
        /* @__PURE__ */ s.createElement(
          Hf,
          {
            className: "file-list-item",
            selected: y,
            error: C,
            disabled: S.exportedComponents === null || S.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(Wf, { error: C }, /* @__PURE__ */ s.createElement(Kn, null)),
          /* @__PURE__ */ s.createElement(zf, null, /* @__PURE__ */ s.createElement($f, { error: C }, S.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(Vf, null, S.filepath)),
          y ? /* @__PURE__ */ s.createElement(H0, null) : /* @__PURE__ */ s.createElement(Jf, null)
        ),
        S?.exportedComponents?.length > 1 && y && /* @__PURE__ */ s.createElement(
          Kf,
          {
            role: "region",
            id: `file-list-export-${m.index}`,
            "aria-labelledby": `file-list-item-wrapper-${m.index}`,
            onClick: (b) => {
              b.stopPropagation();
            },
            onKeyUp: (b) => {
              b.key === "Enter" && b.stopPropagation();
            }
          },
          S.exportedComponents?.map((b, I) => {
            let E = i === `${S.filepath}_${I}`, _ = I === 0 ? "first" : (
              // @ts-expect-error (non strict)
              I === S.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              jf,
              {
                tabIndex: 0,
                "data-index-position": `${m.index}_${_}`,
                key: b.name,
                error: E,
                onClick: () => {
                  f({
                    searchResult: S,
                    component: b,
                    id: `${S.filepath}_${I}`
                  });
                },
                onKeyUp: (k) => {
                  k.key === "Enter" && f({
                    searchResult: S,
                    component: b,
                    id: `${S.filepath}_${I}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(Uf, null, /* @__PURE__ */ s.createElement(Kn, null), b.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(qf, null, S.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(Gf, null, "Default export")) : b.name),
              /* @__PURE__ */ s.createElement(Jf, null)
            );
          })
        )
      );
    },
    [f, i]
  );
  return t && (r === null || r?.length === 0) ? /* @__PURE__ */ s.createElement(Zf, null) : r?.length === 0 ? /* @__PURE__ */ s.createElement(
  Yf, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(Qf, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  Ff, null, /* @__PURE__ */ s.createElement(In, { ref: u }, /* @__PURE__ */ s.createElement(
    Rf,
    {
      style: {
        height: `${p.getTotalSize()}px`
      }
    },
    p.getVirtualItems().map((m) => {
      let v = c[m.index], S = v.exportedComponents === null || v.exportedComponents?.length === 0, C = {};
      return /* @__PURE__ */ s.createElement(
        Bf,
        {
          key: m.key,
          "data-index": m.index,
          ref: p.measureElement,
          onClick: () => {
            h({
              virtualItem: m,
              itemId: v.filepath,
              searchResult: v
            });
          },
          onKeyUp: (y) => {
            y.key === "Enter" && h({
              virtualItem: m,
              itemId: v.filepath,
              searchResult: v
            });
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${m.start}px)`
          },
          tabIndex: 0
        },
        S ? /* @__PURE__ */ s.createElement(
          Re,
          {
            ...C,
            style: { width: "100%" },
            hasChrome: !1,
            closeOnOutsideClick: !0,
            tooltip: /* @__PURE__ */ s.createElement(
              co,
              {
                note: S ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
              }
            )
          },
          /* @__PURE__ */ s.createElement(
            g,
            {
              searchResult: v,
              selected: n,
              virtualItem: m
            }
          )
        ) : /* @__PURE__ */ s.createElement(
          g,
          {
            ...C,
            key: m.index,
            searchResult: v,
            selected: n,
            virtualItem: m
          }
        )
      );
    })
  ))) : null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
var R0 = 418, z0 = x(Et)(() => ({
  boxShadow: "none",
  background: "transparent"
})), W0 = x.div(({ theme: e, height: t }) => ({
  backgroundColor: e.background.bar,
  borderRadius: 6,
  boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
  padding: "16px",
  transition: "height 0.3s",
  height: t ? `${t + 32}px` : "auto",
  overflow: "hidden"
})), $0 = x(Et.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), V0 = x(no.Input)(({ theme: e }) => ({
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...e.base === "light" && {
    color: e.color.darkest
  },
  "::placeholder": {
    color: e.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${e.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), K0 = x.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
}), j0 = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
})), U0 = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
})), q0 = x(Et.Error)({
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
}), G0 = x(mo)({
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
}), tm = /* @__PURE__ */ a(({
  open: e,
  onOpenChange: t,
  fileSearchQuery: r,
  setFileSearchQuery: o,
  isLoading: i,
  error: n,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: d
}) => {
  let [p, h] = kf(), [f, g] = Z(h.height), [, m] = ds(), [v, S] = Z(r);
  return V(() => {
    f < h.height && g(h.height);
  }, [h.height, f]), /* @__PURE__ */ s.createElement(
    z0,
    {
      height: R0,
      width: 440,
      open: e,
      onOpenChange: t,
      onEscapeKeyDown: () => {
        t(!1);
      },
      onInteractOutside: () => {
        t(!1);
      },
      container: d
    },
    /* @__PURE__ */ s.createElement(W0, { height: r === "" ? h.height : f }, /* @__PURE__ */ s.createElement($0, { ref: p }, /* @__PURE__ */ s.
    createElement(Et.Header, null, /* @__PURE__ */ s.createElement(Et.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(Et.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(K0, null, /* @__PURE__ */ s.createElement(j0, null,
    /* @__PURE__ */ s.createElement(vo, null)), /* @__PURE__ */ s.createElement(
      V0,
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: !0,
        autoFocus: !0,
        value: v,
        onChange: (C) => {
          let y = C.target.value;
          S(y), m(() => {
            o(y);
          });
        }
      }
    ), i && /* @__PURE__ */ s.createElement(U0, null, /* @__PURE__ */ s.createElement(mt, null))), /* @__PURE__ */ s.createElement(
      em,
      {
        errorItemId: n?.selectedItemId,
        isLoading: i,
        searchResults: l,
        onNewStory: u
      }
    ))),
    n && r !== "" && /* @__PURE__ */ s.createElement(q0, null, /* @__PURE__ */ s.createElement("div", null, n.error), /* @__PURE__ */ s.createElement(
      G0,
      {
        onClick: () => {
          c(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
function rm(e) {
  return Object.keys(e).reduce(
    (r, o) => {
      let i = e[o];
      if (typeof i.control == "object" && "type" in i.control)
        switch (i.control.type) {
          case "object":
            r[o] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
            r[o] = i.control.options?.[0];
            break;
          case "color":
            r[o] = "#000000";
            break;
          default:
            break;
        }
      return wn(i.type, r, o), r;
    },
    {}
  );
}
a(rm, "extractSeededRequiredArgs");
function wn(e, t, r) {
  if (!(typeof e == "string" || !e.required))
    switch (e.name) {
      case "boolean":
        t[r] = !0;
        break;
      case "number":
        t[r] = 0;
        break;
      case "string":
        t[r] = r;
        break;
      case "array":
        t[r] = [];
        break;
      case "object":
        t[r] = {}, Object.entries(e.value ?? {}).forEach(([o, i]) => {
          wn(i, t[r], o);
        });
        break;
      case "function":
        t[r] = () => {
        };
        break;
      case "intersection":
        e.value?.every((o) => o.name === "object") && (t[r] = {}, e.value?.forEach((o) => {
          o.name === "object" && Object.entries(o.value ?? {}).forEach(([i, n]) => {
            wn(n, t[r], i);
          });
        }));
        break;
      case "union":
        e.value?.[0] !== void 0 && wn(e.value[0], t, r);
        break;
      case "enum":
        e.value?.[0] !== void 0 && (t[r] = e.value?.[0]);
        break;
      case "other":
        typeof e.value == "string" && e.value === "tuple" && (t[r] = []);
        break;
      default:
        break;
    }
}
a(wn, "setArgType");
async function En(e, t, r = 1) {
  if (r > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await e(t);
  } catch {
    return await new Promise((i) => setTimeout(i, 500)), En(e, t, r + 1);
  }
}
a(En, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var Y0 = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, r) => typeof r == "function" ? "__sb_empty_function_arg__" : r), "stringifyArgs"), om = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [r, o] = Z(!1), [i, n] = Z(""), l = Tf(i, 600), u = ps(l), c = Q(null), [d, p] = Z(
    null
  ), h = de(), [f, g] = Z(null), m = A(
    (y) => {
      h.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${y} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(rt, null)
      }), t(!1);
    },
    [h, t]
  ), v = A(() => {
    h.addNotification({
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: "Successfully navigated to existing story"
      },
      duration: 8e3,
      icon: /* @__PURE__ */ s.createElement(rt, null)
    }), t(!1);
  }, [h, t]), S = A(() => {
    o(!0);
    let y = Qe.getChannel(), b = /* @__PURE__ */ a((I) => {
      I.id === u && (I.success ? g(I.payload.files) : p({ error: I.error }), y.off(Ur, b), o(!1), c.current = null);
    }, "set");
    return y.on(Ur, b), u !== "" && c.current !== u ? (c.current = u, y.emit(ts, {
      id: u,
      payload: {}
    })) : (g(null), o(!1)), () => {
      y.off(Ur, b);
    };
  }, [u]), C = A(
    async ({
      componentExportName: y,
      componentFilePath: b,
      componentIsDefaultExport: I,
      componentExportCount: E,
      selectedItemId: _
    }) => {
      try {
        let k = Qe.getChannel(), O = await qr(k, Ja, es, {
          componentExportName: y,
          componentFilePath: b,
          componentIsDefaultExport: I,
          componentExportCount: E
        });
        p(null);
        let w = O.storyId;
        await En(h.selectStory, w);
        try {
          let P = (await qr(k, Qa, Xa, {
            storyId: w
          })).argTypes, M = rm(P);
          await qr(
            k,
            os,
            ns,
            {
              args: Y0(M),
              importPath: O.storyFilePath,
              csfId: w
            }
          );
        } catch {
        }
        m(y), S();
      } catch (k) {
        switch (k?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let O = k;
            await En(h.selectStory, O.payload.kind), v();
            break;
          default:
            p({ selectedItemId: _, error: k?.message });
            break;
        }
      }
    },
    [h?.selectStory, m, S, v]
  );
  return V(() => {
    p(null);
  }, [u]), V(() => S(), [S]), /* @__PURE__ */ s.createElement(
    tm,
    {
      error: d,
      fileSearchQuery: i,
      fileSearchQueryDeferred: u,
      onCreateNewStory: C,
      isLoading: r,
      onOpenChange: t,
      open: e,
      searchResults: f,
      setError: p,
      setFileSearchQuery: n
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/types.ts
function Kr(e) {
  return !!(e && e.showAll);
}
a(Kr, "isExpandType");
function Ba(e) {
  return !!(e && e.item);
}
a(Ba, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: Q0 } = ae, Ha = 50, X0 = {
  shouldSort: !0,
  tokenize: !0,
  findAllMatches: !0,
  includeScore: !0,
  includeMatches: !0,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
}, Z0 = x.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), J0 = x(co)({
  margin: 0
}), ex = x.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
}), tx = x(te)(({ theme: e }) => ({
  color: e.color.mediumdark
})), rx = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 8,
  zIndex: 1,
  pointerEvents: "none",
  color: e.textMutedColor,
  display: "flex",
  alignItems: "center",
  height: "100%"
})), ox = x.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
}), nx = x.input(({ theme: e }) => ({
  appearance: "none",
  height: 28,
  paddingLeft: 28,
  paddingRight: 28,
  border: 0,
  boxShadow: `${e.button.border} 0 0 0 1px inset`,
  background: "transparent",
  borderRadius: 4,
  fontSize: `${e.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: e.color.defaultText,
  width: "100%",
  "&:focus, &:active": {
    outline: 0,
    borderColor: e.color.secondary,
    background: e.background.app
  },
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), ix = x.code(({ theme: e }) => ({
  position: "absolute",
  top: 6,
  right: 9,
  height: 16,
  zIndex: 1,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4
})), ax = x.span({
  fontSize: "14px"
}), sx = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  right: 8,
  zIndex: 1,
  color: e.textMutedColor,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: "100%"
})), lx = x.div({ outline: 0 }), ux = ae.CONFIG_TYPE === "DEVELOPMENT", cx = ae.STORYBOOK_RENDERER === "react", im = s.memo(/* @__PURE__ */ a(
function({
  children: t,
  dataset: r,
  enableShortcuts: o = !0,
  getLastViewed: i,
  initialQuery: n = "",
  showCreateStoryButton: l = ux && cx
}) {
  let u = de(), c = Q(null), [d, p] = Z("Find components"), [h, f] = Z(!1), g = u ? Xe(u.getShortcutKeys().search) : "/", [m, v] = Z(!1), S = A(
  () => {
    let _ = r.entries.reduce((k, [O, { index: w, status: T }]) => {
      let P = Ko(w || {}, T);
      return w && k.push(
        ...Object.values(w).map((M) => {
          let D = T && T[M.id] ? zr(Object.values(T[M.id] || {}).map((L) => L.status)) : null;
          return {
            ...Fi(M, r.hash[O]),
            status: D || P[M.id] || null
          };
        })
      ), k;
    }, []);
    return new nm.default(_, X0);
  }, [r]), C = A(
    (_) => {
      let k = S();
      if (!_)
        return [];
      let O = [], w = /* @__PURE__ */ new Set(), T = k.search(_).filter(({ item: P }) => !(P.type === "component" || P.type === "docs" || P.
      type === "story") || // @ts-expect-error (non strict)
      w.has(P.parent) ? !1 : (w.add(P.id), !0));
      return T.length && (O = T.slice(0, h ? 1e3 : Ha), T.length > Ha && !h && O.push({
        showAll: /* @__PURE__ */ a(() => f(!0), "showAll"),
        totalCount: T.length,
        moreCount: T.length - Ha
      })), O;
    },
    [h, S]
  ), y = A(
    (_) => {
      if (Ba(_)) {
        let { id: k, refId: O } = _.item;
        u?.selectStory(k, void 0, { ref: O !== st && O }), c.current.blur(), f(!1);
        return;
      }
      Kr(_) && _.showAll();
    },
    [u]
  ), b = A((_, k) => {
    f(!1);
  }, []), I = A(
    (_, k) => {
      switch (k.type) {
        case Vt.stateChangeTypes.blurInput:
          return {
            ...k,
            // Prevent clearing the input on blur
            inputValue: _.inputValue,
            // Return to the tree view after selecting an item
            isOpen: _.inputValue && !_.selectedItem
          };
        case Vt.stateChangeTypes.mouseUp:
          return _;
        case Vt.stateChangeTypes.keyDownEscape:
          return _.inputValue ? { ...k, inputValue: "", isOpen: !0, selectedItem: null } : { ...k, isOpen: !1, selectedItem: null };
        case Vt.stateChangeTypes.clickItem:
        case Vt.stateChangeTypes.keyDownEnter:
          return Ba(k.selectedItem) ? { ...k, inputValue: _.inputValue } : Kr(k.selectedItem) ? _ : k;
        default:
          return k;
      }
    },
    []
  ), { isMobile: E } = Ee();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      Vt,
      {
        initialInputValue: n,
        stateReducer: I,
        itemToString: (_) => _?.item?.name || "",
        scrollIntoView: (_) => Nt(_),
        onSelect: y,
        onInputValueChange: b
      },
      ({
        isOpen: _,
        openMenu: k,
        closeMenu: O,
        inputValue: w,
        clearSelection: T,
        getInputProps: P,
        getItemProps: M,
        getLabelProps: D,
        getMenuProps: L,
        getRootProps: $,
        highlightedIndex: X
      }) => {
        let q = w ? w.trim() : "", R = q ? C(q) : [], z = !q && i();
        z && z.length && (R = z.reduce((N, { storyId: F, refId: W }) => {
          let Y = r.hash[W];
          if (Y && Y.index && Y.index[F]) {
            let oe = Y.index[F], ee = oe.type === "story" ? Y.index[oe.parent] : oe;
            N.some((le) => le.item.refId === W && le.item.id === ee.id) || N.push({ item: Fi(ee, r.hash[W]), matches: [], score: 0 });
          }
          return N;
        }, []));
        let B = "storybook-explorer-searchfield", re = P({
          id: B,
          ref: c,
          required: !0,
          type: "search",
          placeholder: d,
          onFocus: /* @__PURE__ */ a(() => {
            k(), p("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => p("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((N) => {
            N.key === "Escape" && w.length === 0 && c.current.blur();
          }, "onKeyDown")
        }), H = D({
          htmlFor: B
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ex, { ...H }, "Search for components"), /* @__PURE__ */ s.
        createElement(Z0, null, /* @__PURE__ */ s.createElement(
          ox,
          {
            ...$({ refKey: "" }, { suppressRefError: !0 }),
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(rx, null, /* @__PURE__ */ s.createElement(vo, null)),
          /* @__PURE__ */ s.createElement(nx, { ...re }),
          !E && o && !_ && /* @__PURE__ */ s.createElement(ix, null, g === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(ax, null, "\u2318"), "K") : g),
          _ && /* @__PURE__ */ s.createElement(sx, { onClick: () => T() }, /* @__PURE__ */ s.createElement(Ze, null))
        ), l && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          Re,
          {
            trigger: "hover",
            hasChrome: !1,
            tooltip: /* @__PURE__ */ s.createElement(J0, { note: "Create a new story" })
          },
          /* @__PURE__ */ s.createElement(
            tx,
            {
              onClick: () => {
                v(!0);
              },
              variant: "outline"
            },
            /* @__PURE__ */ s.createElement(cl, null)
          )
        ), /* @__PURE__ */ s.createElement(
          om,
          {
            open: m,
            onOpenChange: v
          }
        ))), /* @__PURE__ */ s.createElement(lx, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: q,
          results: R,
          isBrowsing: !_ && Q0.activeElement !== c.current,
          closeMenu: O,
          getMenuProps: L,
          getItemProps: M,
          highlightedIndex: X
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
var { document: am } = ae, px = x.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), dx = x.li(({ theme: e, isHighlighted: t }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: t ? e.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: ye(0.93, e.color.secondary),
    outline: "none"
  }
})), fx = x.div({
  marginTop: 2
}), mx = x.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), hx = x.div(({ theme: e }) => ({
  marginTop: 20,
  textAlign: "center",
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "18px",
  color: e.color.defaultText,
  small: {
    color: e.barTextColor,
    fontSize: `${e.typography.size.s1}px`
  }
})), gx = x.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), yx = x.div({
  marginTop: 8
}), vx = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
})), sm = s.memo(/* @__PURE__ */ a(function({
  children: t,
  match: r
}) {
  if (!r)
    return t;
  let { value: o, indices: i } = r, { nodes: n } = i.reduce(
    ({ cursor: l, nodes: u }, [c, d], p, { length: h }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${p}-1` }, o.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(gx, { key: `${p}-2` }, o.slice(c, d + 1))), p === h - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${p}-3` }, o.slice(d + 1))), { cursor: d + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, n);
}, "Highlight")), bx = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})), xx = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${e.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
})), Ix = s.memo(/* @__PURE__ */ a(function({ item: t, matches: r, onClick: o, ...i }) {
  let n = A(
    (p) => {
      p.preventDefault(), o?.(p);
    },
    [o]
  ), l = de();
  V(() => {
    l && i.isHighlighted && t.type === "component" && l.emit(wt, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [i.isHighlighted, t]);
  let u = r.find((p) => p.key === "name"), c = r.filter((p) => p.key === "path"), [d] = t.status ? Rr[t.status] : [];
  return /* @__PURE__ */ s.createElement(dx, { ...i, onClick: n }, /* @__PURE__ */ s.createElement(fx, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Be, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Be, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(bt, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Be, { type: "document" }))), /* @__PURE__ */ s.createElement(
  mx, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(bx, null, /* @__PURE__ */ s.createElement(sm, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(xx, null, t.path.map((p, h) => /* @__PURE__ */ s.createElement("span", { key: h }, /* @__PURE__ */ s.
  createElement(sm, { match: c.find((f) => f.arrayIndex === h) }, p))))), t.status ? /* @__PURE__ */ s.createElement(jp, { status: t.status },
  d) : null);
}, "Result")), lm = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: r,
  closeMenu: o,
  getMenuProps: i,
  getItemProps: n,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: d
}) {
  let p = de();
  V(() => {
    let g = /* @__PURE__ */ a((m) => {
      if (!(!c || u || m.repeat) && xt(!1, m) && Ue("Escape", m)) {
        if (m.target?.id === "storybook-explorer-searchfield")
          return;
        m.preventDefault(), o();
      }
    }, "handleEscape");
    return am.addEventListener("keydown", g), () => am.removeEventListener("keydown", g);
  }, [o, c, u]);
  let h = A((g) => {
    if (!p)
      return;
    let m = g.currentTarget, v = m.getAttribute("data-id"), S = m.getAttribute("data-refid"), C = p.resolveStory(v, S === "storybook_interna\
l" ? void 0 : S);
    C?.type === "component" && p.emit(wt, {
      // @ts-expect-error (TODO)
      ids: [C.isLeaf ? C.id : C.children[0]],
      options: { target: S }
    });
  }, []), f = /* @__PURE__ */ a(() => {
    d(), o();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(px, { ...i() }, r.length > 0 && !t && /* @__PURE__ */ s.createElement(vx, { className: "search-resu\
lt-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    te,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: f
    },
    /* @__PURE__ */ s.createElement(ml, null)
  )), r.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(hx, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), r.map((g, m) => {
    if (Kr(g))
      return /* @__PURE__ */ s.createElement(yx, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(
        we,
        {
          ...g,
          ...n({ key: m, index: m, item: g }),
          size: "small"
        },
        "Show ",
        g.moreCount,
        " more results"
      ));
    let { item: v } = g, S = `${v.refId}::${v.id}`;
    return /* @__PURE__ */ s.createElement(
      Ix,
      {
        key: v.id,
        ...g,
        ...n({ key: S, index: m, item: g }),
        isHighlighted: l === m,
        "data-id": g.item.id,
        "data-refid": g.item.refId,
        onMouseOver: h,
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

// src/manager/components/sidebar/FilterToggle.tsx
var Sx = x(oo)(({ theme: e }) => ({
  padding: "4px 8px",
  fontSize: e.typography.size.s1
})), wx = x(te)(
  ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    "&:hover [data-badge][data-status=warning], [data-badge=true][data-status=warning]": {
      background: "#E3F3FF",
      borderColor: "rgba(2, 113, 182, 0.1)",
      color: "#0271B6"
    },
    "&:hover [data-badge][data-status=critical], [data-badge=true][data-status=critical]": {
      background: e.background.negative,
      boxShadow: "inset 0 0 0 1px rgba(182, 2, 2, 0.1)",
      color: e.color.negativeText
    }
  }),
  ({ active: e, theme: t }) => !e && vs({
    "&:hover": {
      color: t.base === "light" ? t.color.defaultText : t.color.light
    }
  })
), Ex = x.span(({ theme: e }) => ({
  color: e.base === "light" ? e.color.defaultText : e.color.light
})), Ra = /* @__PURE__ */ a(({
  active: e,
  count: t,
  label: r,
  status: o,
  ...i
}) => /* @__PURE__ */ s.createElement(wx, { active: e, ...i }, /* @__PURE__ */ s.createElement(Sx, { status: o, "data-badge": e, "data-statu\
s": o }, t), /* @__PURE__ */ s.createElement(Ex, null, `${r}${t === 1 ? "" : "s"}`)), "FilterToggle");

// src/manager/components/sidebar/SidebarBottom.tsx
var Cx = /* @__PURE__ */ a(() => !0, "filterNone"), _x = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status ===
"warn"), "filterWarn"), Tx = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status === "error"), "filterError"), kx = /* @__PURE__ */ a(
({ status: e = {} }) => Object.values(e).some((t) => t?.status === "warn" || t?.status === "error"), "filterBoth"), Ox = /* @__PURE__ */ a((e = !1, t = !1) => e &&
t ? kx : e ? _x : t ? Tx : Cx, "getFilter"), Px = x.div({
  display: "flex",
  gap: 5
}), Ax = /* @__PURE__ */ a(({ api: e, status: t = {} }) => {
  let [r, o] = s.useState(!1), [i, n] = s.useState(!1), l = Object.values(t).filter(
    (f) => Object.values(f).some((g) => g?.status === "warn")
  ), u = Object.values(t).filter(
    (f) => Object.values(f).some((g) => g?.status === "error")
  ), c = l.length > 0, d = u.length > 0, p = A(() => o((f) => !f), []), h = A(() => n((f) => !f), []);
  return V(() => {
    let f = Ox(c && r, d && i);
    e.experimental_setFilter("sidebar-bottom-filter", f);
  }, [e, c, d, r, i]), !c && !d ? null : /* @__PURE__ */ s.createElement(Px, { id: "sidebar-bottom-wrapper" }, d && /* @__PURE__ */ s.createElement(
    Ra,
    {
      id: "errors-found-filter",
      active: i,
      count: u.length,
      label: "Error",
      status: "critical",
      onClick: h
    }
  ), c && /* @__PURE__ */ s.createElement(
    Ra,
    {
      id: "warnings-found-filter",
      active: r,
      count: l.length,
      label: "Warning",
      status: "warning",
      onClick: p
    }
  ));
}, "SidebarBottomBase"), um = /* @__PURE__ */ a(() => {
  let e = de(), { status: t } = Ke();
  return /* @__PURE__ */ s.createElement(Ax, { api: e, status: t });
}, "SidebarBottom");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function za(e, t = 0, r = {}) {
  typeof r != "object" && (r = {});
  let { signal: o, leading: i = !1, trailing: n = !0, maxWait: l } = r, u = Array(2);
  i && (u[0] = "leading"), n && (u[1] = "trailing");
  let c, d = null, p = Uo(function(...g) {
    c = e.apply(this, g), d = null;
  }, t, { signal: o, edges: u }), h = /* @__PURE__ */ a(function(...g) {
    if (l != null) {
      if (d === null)
        d = Date.now();
      else if (Date.now() - d >= l)
        return c = e.apply(this, g), d = Date.now(), p.cancel(), p.schedule(), c;
    }
    return p.apply(this, g), c;
  }, "debounced"), f = /* @__PURE__ */ a(() => (p.flush(), c), "flush");
  return h.cancel = p.cancel, h.flush = f, h;
}
a(za, "debounce");

// src/manager/components/sidebar/useLastViewed.ts
var Tn = We(cm(), 1);
var pm = za((e) => Tn.default.set("lastViewedStoryIds", e), 1e3), dm = /* @__PURE__ */ a((e) => {
  let t = K(() => {
    let i = Tn.default.get("lastViewedStoryIds");
    return !i || !Array.isArray(i) ? [] : i.some((n) => typeof n == "object" && n.storyId && n.refId) ? i : [];
  }, [Tn.default]), r = Q(t), o = A(
    (i) => {
      let n = r.current, l = n.findIndex(
        ({ storyId: u, refId: c }) => u === i.storyId && c === i.refId
      );
      l !== 0 && (l === -1 ? r.current = [i, ...n] : r.current = [i, ...n.slice(0, l), ...n.slice(l + 1)], pm(r.current));
    },
    [r]
  );
  return V(() => {
    e && o(e);
  }, [e]), {
    getLastViewed: A(() => r.current, [r]),
    clearLastViewed: A(() => {
      r.current = r.current.slice(0, 1), pm(r.current);
    }, [r])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
var st = "storybook_internal", Mx = x.nav(({ theme: e }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: e.background.content,
  [lt]: {
    background: e.background.app
  }
})), Dx = x(ut)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
}), Lx = x.div(({ theme: e }) => ({
  borderTop: `1px solid ${e.appBorderColor}`,
  padding: e.layoutMargin / 2,
  display: "flex",
  flexWrap: "wrap",
  gap: e.layoutMargin / 2,
  backgroundColor: e.barBg,
  "&:empty": {
    display: "none"
  }
})), Nx = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: r
}) {
  let [o, i] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: r ? "block" : "none" } },
  o), /* @__PURE__ */ s.createElement("div", { style: { display: r ? "none" : "block" } }, i));
}, "Swap")), Fx = /* @__PURE__ */ a((e, t, r, o, i) => {
  let n = K(
    () => ({
      [st]: {
        index: e,
        indexError: t,
        previewInitialized: r,
        status: o,
        title: null,
        id: st,
        url: "iframe.html"
      },
      ...i
    }),
    [i, e, t, r, o]
  );
  return K(() => ({ hash: n, entries: Object.entries(n) }), [n]);
}, "useCombination"), fm = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: r = st,
  index: o,
  indexError: i,
  status: n,
  previewInitialized: l,
  menu: u,
  extra: c,
  menuHighlighted: d = !1,
  enableShortcuts: p = !0,
  refs: h = {},
  onMenuClick: f,
  showCreateStoryButton: g
}) {
  let m = K(() => t && { storyId: t, refId: r }, [t, r]), v = Fx(o, i, l, n, h), S = !o && !i, C = dm(m);
  return /* @__PURE__ */ s.createElement(Mx, { className: "container sidebar-container" }, /* @__PURE__ */ s.createElement(ao, { vertical: !0,
  offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(Dx, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    fd,
    {
      className: "sidebar-header",
      menuHighlighted: d,
      menu: u,
      extra: c,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: S,
      onMenuClick: f
    }
  ), /* @__PURE__ */ s.createElement(
    im,
    {
      dataset: v,
      enableShortcuts: p,
      showCreateStoryButton: g,
      ...C
    },
    ({
      query: y,
      results: b,
      isBrowsing: I,
      closeMenu: E,
      getMenuProps: _,
      getItemProps: k,
      highlightedIndex: O
    }) => /* @__PURE__ */ s.createElement(Nx, { condition: I }, /* @__PURE__ */ s.createElement(
      ld,
      {
        dataset: v,
        selected: m,
        isLoading: S,
        isBrowsing: I
      }
    ), /* @__PURE__ */ s.createElement(
      lm,
      {
        query: y,
        results: b,
        closeMenu: E,
        getMenuProps: _,
        getItemProps: k,
        highlightedIndex: O,
        enableShortcuts: p,
        isLoading: S,
        clearLastViewed: C.clearLastViewed
      }
    ))
  ))), S ? null : /* @__PURE__ */ s.createElement(Lx, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(um, null)));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var Bx = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, Hx = x.span(({ theme: e }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: e.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
})), Rx = x.code(
  ({ theme: e }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
), Ve = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Hx, null, e.map(
(t, r) => /* @__PURE__ */ s.createElement(Rx, { key: t }, Xe([t]))))), "Shortcut"), mm = /* @__PURE__ */ a((e, t, r, o, i, n, l) => {
  let u = De(), c = t.getShortcutKeys(), d = K(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("about"), "onClick"),
      icon: /* @__PURE__ */ s.createElement(al, null)
    }),
    [t]
  ), p = K(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(_t, null)
  }), [t]), h = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, f = t.isWhatsNewUnread(), g = K(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("whats-new"), "onClick"),
      right: h && f && /* @__PURE__ */ s.createElement(oo, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement(hl, null)
    }),
    [t, h, f]
  ), m = K(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("shortcuts"), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.shortcutsPage }) : null,
      style: {
        borderBottom: `4px solid ${u.appBorderColor}`
      }
    }),
    [t, l, c.shortcutsPage, u.appBorderColor]
  ), v = K(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ a(() => t.toggleNav(), "onClick"),
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.toggleNav }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(rt, null) : null
    }),
    [t, l, c, n]
  ), S = K(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ a(() => t.toggleToolbar(), "onClick"),
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.toolbar }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(rt, null) : null
    }),
    [t, l, c, r]
  ), C = K(
    () => ({
      id: "A",
      title: "Show addons",
      onClick: /* @__PURE__ */ a(() => t.togglePanel(), "onClick"),
      active: i,
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.togglePanel }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(rt, null) : null
    }),
    [t, l, c, i]
  ), y = K(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ a(() => t.togglePanelPosition(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.panelPosition }) : null
    }),
    [t, l, c]
  ), b = K(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ a(() => t.toggleFullscreen(), "onClick"),
      active: o,
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.fullScreen }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(rt, null) : null
    }),
    [t, l, c, o]
  ), I = K(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(Bx.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.search }) : null
    }),
    [t, l, c]
  ), E = K(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.prevComponent }) : null
    }),
    [t, l, c]
  ), _ = K(
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.nextComponent }) : null
    }),
    [t, l, c]
  ), k = K(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.prevStory }) : null
    }),
    [t, l, c]
  ), O = K(
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.nextStory }) : null
    }),
    [t, l, c]
  ), w = K(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(xr), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: c.collapseAll }) : null
    }),
    [t, l, c]
  ), T = A(() => {
    let P = t.getAddonsShortcuts(), M = c;
    return Object.entries(P).filter(([D, { showInMenu: L }]) => L).map(([D, { label: L, action: $ }]) => ({
      id: D,
      title: L,
      onClick: /* @__PURE__ */ a(() => $(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Ve, { keys: M[D] }) : null
    }));
  }, [t, l, c]);
  return K(
    () => [
      d,
      ...e.whatsNewData?.status === "SUCCESS" ? [g] : [],
      p,
      m,
      v,
      S,
      C,
      y,
      b,
      I,
      E,
      _,
      k,
      O,
      w,
      ...T()
    ],
    [
      d,
      e,
      g,
      p,
      m,
      v,
      S,
      C,
      y,
      b,
      I,
      E,
      _,
      k,
      O,
      w,
      T
    ]
  );
}, "useMenu");

// src/manager/container/Sidebar.tsx
var zx = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(he, { filter: /* @__PURE__ */ a(({ state: o, api: i }) => {
    let {
      ui: { name: n, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: d,
      refId: p,
      layout: { showToolbar: h },
      index: f,
      status: g,
      indexError: m,
      previewInitialized: v,
      refs: S
    } = o, C = mm(
      o,
      i,
      h,
      i.getIsFullscreen(),
      i.getIsPanelShown(),
      i.getIsNavShown(),
      u
    ), y = o.whatsNewData?.status === "SUCCESS" && !o.disableWhatsNewNotifications, b = i.getElements(Ae.experimental_SIDEBAR_TOP), I = K(() => Object.
    values(b), [Object.keys(b).join("")]);
    return {
      title: n,
      url: l,
      index: f,
      indexError: m,
      status: g,
      previewInitialized: v,
      refs: S,
      storyId: d,
      refId: p,
      viewMode: c,
      menu: C,
      menuHighlighted: y && i.isWhatsNewUnread(),
      enableShortcuts: u,
      extra: I
    };
  }, "mapper") }, (o) => /* @__PURE__ */ s.createElement(fm, { ...o, onMenuClick: t }));
}, "Sideber")), hm = zx;

// src/manager/App.tsx
var gm = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: r, hasTab: o }) => {
  let { setMobileAboutOpen: i } = Ee();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Yt, { styles: ys }), /* @__PURE__ */ s.createElement(
    Xl,
    {
      hasTab: o,
      managerLayoutState: e,
      setManagerLayoutState: t,
      slotMain: /* @__PURE__ */ s.createElement(hp, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(hm, { onMenuClick: () => i((n) => !n) }),
      slotPanel: /* @__PURE__ */ s.createElement(eu, null),
      slotPages: r.map(({ id: n, render: l }) => /* @__PURE__ */ s.createElement(l, { key: n }))
    }
  ));
}, "App");

// src/manager/provider.ts
var Wa = class Wa {
  getElements(t) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(t) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
a(Wa, "Provider");
var jt = Wa;

// src/manager/settings/About.tsx
var Wx = x.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
}), $x = x.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
}), Vx = x.div(({ theme: e }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: e.base === "light" ? e.color.dark : e.color.lightest,
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2
})), Kx = x.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
}), ym = x(Le)(({ theme: e }) => ({
  "&&": {
    fontWeight: e.typography.weight.bold,
    color: e.base === "light" ? e.color.dark : e.color.light
  },
  "&:hover": {
    color: e.base === "light" ? e.color.darkest : e.color.lightest
  }
})), vm = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(Wx, null, /* @__PURE__ */ s.createElement($x, null,
/* @__PURE__ */ s.createElement(so, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(So, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(Vx, null, /* @__PURE__ */ s.createElement(Kx, null, /* @__PURE__ */ s.createElement(we, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(ho, null), "GitHub")), /* @__PURE__ */ s.createElement(
we, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement(tr, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(ym, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
ym, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var Va = class Va extends He {
  componentDidMount() {
    let { api: t, notificationId: r } = this.props;
    t.clearNotification(r);
  }
  render() {
    let { children: t } = this.props;
    return t;
  }
};
a(Va, "NotificationClearer");
var $a = Va, bm = /* @__PURE__ */ a(() => {
  let e = de(), t = Ke(), r = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement($a, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    vm,
    {
      onNavigateToWhatsNew: t.whatsNewData?.status === "SUCCESS" ? r : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
var jx = x.div(({ theme: e }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${e.appBorderColor}`,
  fontWeight: e.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
})), Ux = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(jx, { ...e }, /* @__PURE__ */ s.createElement(Le, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Le, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Le,
  {
    secondary: !0,
    href: "https://storybook.js.org/community#support",
    cancel: !1,
    target: "_blank"
  },
  "Support"
)), "SettingsFooter"), xm = Ux;

// src/manager/settings/shortcuts.tsx
var qx = x.header(({ theme: e }) => ({
  marginBottom: 20,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  alignItems: "center",
  display: "flex"
})), Im = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Gx = x.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
}), Yx = x.div(({ theme: e }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${e.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
})), Qx = x.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
}), Xx = x.div({
  alignSelf: "center"
}), Zx = x(no.Input)(
  ({ valid: e, theme: t }) => e === "error" ? {
    animation: `${t.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
), Jx = wr`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, eI = x(rt)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${Jx} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
), tI = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  padding: "3rem 20px",
  maxWidth: 600,
  margin: "0 auto"
})), rI = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
}, oI = ["escape"];
function Ka(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [r, o]) => oI.includes(r) ? t : { ...t, [r]: { shortcut: o, error: !1 } },
    {}
  );
}
a(Ka, "toShortcutState");
var ja = class ja extends He {
  constructor(r) {
    super(r);
    this.onKeyDown = /* @__PURE__ */ a((r) => {
      let { activeFeature: o, shortcutKeys: i } = this.state;
      if (r.key === "Backspace")
        return this.restoreDefault();
      let n = ss(r);
      if (!n)
        return !1;
      let l = !!Object.entries(i).find(
        ([u, { shortcut: c }]) => u !== o && c && ls(n, c)
      );
      return this.setState({
        shortcutKeys: { ...i, [o]: { shortcut: n, error: l } }
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ a((r) => () => {
      let { shortcutKeys: o } = this.state;
      this.setState({
        activeFeature: r,
        shortcutKeys: {
          ...o,
          [r]: { shortcut: null, error: !1 }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ a(async () => {
      let { shortcutKeys: r, activeFeature: o } = this.state;
      if (r[o]) {
        let { shortcut: i, error: n } = r[o];
        return !i || n ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ a(async () => {
      let { activeFeature: r, shortcutKeys: o } = this.state, { setShortcut: i } = this.props;
      await i(r, o[r].shortcut), this.setState({ successField: r });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: r } = this.props, o = await r();
      return this.setState({ shortcutKeys: Ka(o) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: r, shortcutKeys: o } = this.state, { restoreDefaultShortcut: i } = this.props, n = await i(r);
      return this.setState({
        shortcutKeys: {
          ...o,
          ...Ka({ [r]: n })
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ a((r) => {
      let { successField: o, shortcutKeys: i } = this.state;
      return r === o && i[r].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((r) => {
      let { activeFeature: o, shortcutKeys: i } = this.state;
      return r === o && i[r].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: r, addonsShortcutLabels: o } = this.state;
      return Object.entries(r).map(([n, { shortcut: l }]) => /* @__PURE__ */ s.createElement(Yx, { key: n }, /* @__PURE__ */ s.createElement(
      Xx, null, rI[n] || o[n]), /* @__PURE__ */ s.createElement(
        Zx,
        {
          spellCheck: "false",
          valid: this.displayError(n),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(n),
          onKeyDown: this.onKeyDown,
          value: l ? Xe(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement(eI, { valid: this.displaySuccessMessage(n) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Qx, null, /* @__PURE__ */ s.createElement(Gx, null, /* @__PURE__ */ s.
    createElement(Im, null, "Commands"), /* @__PURE__ */ s.createElement(Im, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
      shortcutKeys: Ka(r.shortcutKeys),
      addonsShortcutLabels: r.addonsShortcutLabels
    };
  }
  render() {
    let r = this.renderKeyForm();
    return /* @__PURE__ */ s.createElement(tI, null, /* @__PURE__ */ s.createElement(qx, null, "Keyboard shortcuts"), r, /* @__PURE__ */ s.createElement(
      we,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), /* @__PURE__ */ s.createElement(xm, null));
  }
};
a(ja, "ShortcutsScreen");
var kn = ja;

// src/manager/settings/ShortcutsPage.tsx
var Sm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, null, ({
  api: {
    getShortcutKeys: e,
    getAddonsShortcutLabels: t,
    setShortcut: r,
    restoreDefaultShortcut: o,
    restoreAllDefaultShortcuts: i
  }
}) => /* @__PURE__ */ s.createElement(
  kn,
  {
    shortcutKeys: e(),
    addonsShortcutLabels: t(),
    setShortcut: r,
    restoreDefaultShortcut: o,
    restoreAllDefaultShortcuts: i
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
var wm = x.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
}), nI = x.div({
  position: "relative",
  height: "32px"
}), Em = x.div(({ theme: e }) => ({
  paddingTop: "12px",
  color: e.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${e.typography.size.s1}px`,
  lineHeight: "16px"
})), iI = x.div(({ theme: e }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: e.background.bar,
  fontSize: "13px",
  borderTop: "1px solid",
  borderColor: e.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})), aI = /* @__PURE__ */ a(({
  isNotificationsEnabled: e,
  onToggleNotifications: t,
  onCopyLink: r
}) => {
  let o = De(), [i, n] = Z("Copy Link"), l = /* @__PURE__ */ a(() => {
    r(), n("Copied!"), setTimeout(() => n("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement(iI, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(il, { color: o.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(we, { onClick: l, size: "small", variant: "ghost" }, i)), e ? /* @__PURE__ */ s.createElement(we, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(ol, null), "Hide notifications") : /* @__PURE__ */ s.createElement(we,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(nl, null), "Show notifications"));
}, "WhatsNewFooter"), sI = x.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded: e }) => ({ visibility: e ? "visible" : "hidden" })
), lI = x((e) => /* @__PURE__ */ s.createElement(po, { ...e }))(({ theme: e }) => ({
  color: e.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
})), uI = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(wm, null, /* @__PURE__ */ s.createElement(nI, null, /* @__PURE__ */ s.createElement(
io, null)), /* @__PURE__ */ s.createElement(Em, null, "Loading...")), "WhatsNewLoader"), cI = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
wm, null, /* @__PURE__ */ s.createElement(lI, null), /* @__PURE__ */ s.createElement(Em, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), pI = /* @__PURE__ */ a(({
  didHitMaxWaitTime: e,
  isLoaded: t,
  onLoad: r,
  url: o,
  onCopyLink: i,
  onToggleNotifications: n,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(Te, null, !t && !e && /* @__PURE__ */ s.createElement(uI, null), e ? /* @__PURE__ */ s.createElement(cI,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(sI, { isLoaded: t, onLoad: r, src: o, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  aI,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: n,
    onCopyLink: i
  }
))), "PureWhatsNewScreen"), dI = 1e4, Cm = /* @__PURE__ */ a(() => {
  let e = de(), t = Ke(), { whatsNewData: r } = t, [o, i] = Z(!1), [n, l] = Z(!1);
  if (V(() => {
    let c = setTimeout(() => !o && l(!0), dI);
    return () => clearTimeout(c);
  }, [o]), r?.status !== "SUCCESS")
    return null;
  let u = !r.disableWhatsNewNotifications;
  return /* @__PURE__ */ s.createElement(
    pI,
    {
      didHitMaxWaitTime: n,
      isLoaded: o,
      onLoad: () => {
        e.whatsNewHasBeenRead(), i(!0);
      },
      url: r.url,
      isNotificationsEnabled: u,
      onCopyLink: () => {
        navigator.clipboard?.writeText(r.blogUrl ?? r.url);
      },
      onToggleNotifications: () => {
        u ? ae.confirm("All update notifications will no longer be shown. Are you sure?") && e.toggleWhatsNewNotifications() : e.toggleWhatsNewNotifications();
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
var _m = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Cm, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: Tm } = ae, fI = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  paddingRight: 8
})), Ua = s.memo(/* @__PURE__ */ a(function({
  changeTab: t,
  id: r,
  title: o
}) {
  return /* @__PURE__ */ s.createElement(Xr, null, ({ path: i }) => {
    let n = i.includes(`settings/${r}`);
    return /* @__PURE__ */ s.createElement(
      uo,
      {
        id: `tabbutton-${r}`,
        className: ["tabbutton"].concat(n ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: n,
        onClick: () => t(r),
        role: "tab"
      },
      o
    );
  });
}, "TabBarButton")), mI = x(ao)(({ theme: e }) => ({
  background: e.background.content
})), hI = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: r = !0, enableWhatsNew: o }) => (s.useEffect(() => {
  let i = /* @__PURE__ */ a((n) => {
    !r || n.repeat || xt(!1, n) && Ue("Escape", n) && (n.preventDefault(), t());
  }, "handleEscape");
  return Tm.addEventListener("keydown", i), () => Tm.removeEventListener("keydown", i);
}, [r, t]), /* @__PURE__ */ s.createElement(Te, null, /* @__PURE__ */ s.createElement(fI, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
lo, { role: "tablist" }, /* @__PURE__ */ s.createElement(Ua, { id: "about", title: "About", changeTab: e }), o && /* @__PURE__ */ s.createElement(
Ua, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(Ua, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  te,
  {
    onClick: (i) => (i.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(Ze, null)
)), /* @__PURE__ */ s.createElement(mI, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(Sr, { path: "about" }, /* @__PURE__ */ s.
createElement(bm, { key: "about" })), /* @__PURE__ */ s.createElement(Sr, { path: "whats-new" }, /* @__PURE__ */ s.createElement(_m, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(Sr, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(Sm, { key: "shortcuts" }))))), "P\
ages"), gI = /* @__PURE__ */ a(() => {
  let e = de(), t = Ke(), r = /* @__PURE__ */ a((o) => e.changeSettingsTab(o), "changeTab");
  return /* @__PURE__ */ s.createElement(
    hI,
    {
      enableWhatsNew: t.whatsNewData?.status === "SUCCESS",
      enableShortcuts: t.ui.enableShortcuts,
      changeTab: r,
      onClose: e.closeSettings
    }
  );
}, "SettingsPages"), km = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: ve.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Sr, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  gI, null)), "render")
};

// src/manager/index.tsx
Mn.displayName = "ThemeProvider";
ft.displayName = "HelmetProvider";
var yI = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(ft, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
ms, { key: "location.provider" }, /* @__PURE__ */ s.createElement(vI, { provider: e }))), "Root"), vI = /* @__PURE__ */ a(({ provider: e }) => {
  let t = gs();
  return /* @__PURE__ */ s.createElement(Xr, { key: "location.consumer" }, (r) => /* @__PURE__ */ s.createElement(
    as,
    {
      key: "manager",
      provider: e,
      ...r,
      navigate: t,
      docsOptions: ae?.DOCS_OPTIONS || {}
    },
    (o) => {
      let { state: i, api: n } = o, l = A(
        (c) => {
          n.setSizes(c);
        },
        [n]
      ), u = K(
        () => [km, ...Object.values(n.getElements(ve.experimental_PAGE))],
        [Object.keys(n.getElements(ve.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(Mn, { key: "theme.provider", theme: bs(i.theme) }, /* @__PURE__ */ s.createElement(Nl, null, /* @__PURE__ */ s.
      createElement(
        gm,
        {
          key: "app",
          pages: u,
          managerLayoutState: {
            ...i.layout,
            viewMode: i.viewMode
          },
          hasTab: !!n.getQueryParam("tab"),
          setManagerLayoutState: l
        }
      )));
    }
  ));
}, "Main");
function Om(e, t) {
  if (!(t instanceof jt))
    throw new Is();
  fs(e).render(/* @__PURE__ */ s.createElement(yI, { key: "root", provider: t }));
}
a(Om, "renderStorybookUI");

// src/manager/runtime.ts
var Ga = class Ga extends jt {
  constructor() {
    super();
    let t = Ya({ page: "manager" });
    Qe.setChannel(t), t.emit(Za), this.addons = Qe, this.channel = t, ae.__STORYBOOK_ADDONS_CHANNEL__ = t;
  }
  getElements(t) {
    return this.addons.getElements(t);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(t) {
    this.addons.loadAddons(t);
  }
};
a(Ga, "ReactProvider");
var qa = Ga, { document: bI } = ae, xI = bI.getElementById("root");
setTimeout(() => {
  Om(xI, new qa());
}, 0);
