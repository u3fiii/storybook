var pp = Object.create;
var ft = Object.defineProperty;
var up = Object.getOwnPropertyDescriptor;
var dp = Object.getOwnPropertyNames;
var fp = Object.getPrototypeOf, yp = Object.prototype.hasOwnProperty;
var a = (r, e) => ft(r, "name", { value: e, configurable: !0 }), vr = /* @__PURE__ */ ((r) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(r, {
  get: (e, t) => (typeof require < "u" ? require : e)[t]
}) : r)(function(r) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + r + '" is not supported');
});
var w = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), Ce = (r, e) => {
  for (var t in e)
    ft(r, t, { get: e[t], enumerable: !0 });
}, mp = (r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of dp(e))
      !yp.call(r, n) && n !== t && ft(r, n, { get: () => e[n], enumerable: !(o = up(e, n)) || o.enumerable });
  return r;
};
var Se = (r, e, t) => (t = r != null ? pp(fp(r)) : {}, mp(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  e || !r || !r.__esModule ? ft(t, "default", { value: r, enumerable: !0 }) : t,
  r
));

// ../node_modules/memoizerific/memoizerific.js
var St = w((Ka, jo) => {
  (function(r) {
    if (typeof Ka == "object" && typeof jo < "u")
      jo.exports = r();
    else if (typeof define == "function" && define.amd)
      define([], r);
    else {
      var e;
      typeof window < "u" ? e = window : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = this, e.memoizerific = r();
    }
  })(function() {
    var r, e, t;
    return (/* @__PURE__ */ a(function o(n, i, l) {
      function c(u, y) {
        if (!i[u]) {
          if (!n[u]) {
            var d = typeof vr == "function" && vr;
            if (!y && d) return d(u, !0);
            if (s) return s(u, !0);
            var h = new Error("Cannot find module '" + u + "'");
            throw h.code = "MODULE_NOT_FOUND", h;
          }
          var m = i[u] = { exports: {} };
          n[u][0].call(m.exports, function(S) {
            var g = n[u][1][S];
            return c(g || S);
          }, m, m.exports, o, n, i, l);
        }
        return i[u].exports;
      }
      a(c, "s");
      for (var s = typeof vr == "function" && vr, p = 0; p < l.length; p++) c(l[p]);
      return c;
    }, "e"))({ 1: [function(o, n, i) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var c = o("./similar");
          return new c();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(o, n, i) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(c) {
        var s;
        if (this.lastItem && this.isEqual(this.lastItem.key, c))
          return this.lastItem.val;
        if (s = this.indexOf(c), s >= 0)
          return this.lastItem = this.list[s], this.list[s].val;
      }, l.prototype.set = function(c, s) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? (this.lastItem.val = s, this) : (p = this.indexOf(c), p >= 0 ? (this.lastItem =
        this.list[p], this.list[p].val = s, this) : (this.lastItem = { key: c, val: s }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(c) {
        var s;
        if (this.lastItem && this.isEqual(this.lastItem.key, c) && (this.lastItem = void 0), s = this.indexOf(c), s >= 0)
          return this.size--, this.list.splice(s, 1)[0];
      }, l.prototype.has = function(c) {
        var s;
        return this.lastItem && this.isEqual(this.lastItem.key, c) ? !0 : (s = this.indexOf(c), s >= 0 ? (this.lastItem = this.list[s], !0) :
        !1);
      }, l.prototype.forEach = function(c, s) {
        var p;
        for (p = 0; p < this.size; p++)
          c.call(s || this, this.list[p].val, this.list[p].key, this);
      }, l.prototype.indexOf = function(c) {
        var s;
        for (s = 0; s < this.size; s++)
          if (this.isEqual(this.list[s].key, c))
            return s;
        return -1;
      }, l.prototype.isEqual = function(c, s) {
        return c === s || c !== c && s !== s;
      }, n.exports = l;
    }, {}], 3: [function(o, n, i) {
      var l = o("map-or-similar");
      n.exports = function(u) {
        var y = new l(!1), d = [];
        return function(h) {
          var m = /* @__PURE__ */ a(function() {
            var S = y, g, E, b = arguments.length - 1, T = Array(b + 1), R = !0, x;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== b + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (x = 0; x < b; x++) {
              if (T[x] = {
                cacheItem: S,
                arg: arguments[x]
              }, S.has(arguments[x])) {
                S = S.get(arguments[x]);
                continue;
              }
              R = !1, g = new l(!1), S.set(arguments[x], g), S = g;
            }
            return R && (S.has(arguments[b]) ? E = S.get(arguments[b]) : R = !1), R || (E = h.apply(null, arguments), S.set(arguments[b], E)),
            u > 0 && (T[b] = {
              cacheItem: S,
              arg: arguments[b]
            }, R ? c(d, T) : d.push(T), d.length > u && s(d.shift())), m.wasMemoized = R, m.numArgs = b + 1, E;
          }, "memoizerific");
          return m.limit = u, m.wasMemoized = !1, m.cache = y, m.lru = d, m;
        };
      };
      function c(u, y) {
        var d = u.length, h = y.length, m, S, g;
        for (S = 0; S < d; S++) {
          for (m = !0, g = 0; g < h; g++)
            if (!p(u[S][g].arg, y[g].arg)) {
              m = !1;
              break;
            }
          if (m)
            break;
        }
        u.push(u.splice(S, 1)[0]);
      }
      a(c, "moveToMostRecentLru");
      function s(u) {
        var y = u.length, d = u[y - 1], h, m;
        for (d.cacheItem.delete(d.arg), m = y - 2; m >= 0 && (d = u[m], h = d.cacheItem.get(d.arg), !h || !h.size); m--)
          d.cacheItem.delete(d.arg);
      }
      a(s, "removeCachedResult");
      function p(u, y) {
        return u === y || u !== u && y !== y;
      }
      a(p, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/es-errors/index.js
var Ls = w((Dv, ks) => {
  "use strict";
  ks.exports = Error;
});

// ../node_modules/es-errors/eval.js
var js = w((Nv, Ms) => {
  "use strict";
  Ms.exports = EvalError;
});

// ../node_modules/es-errors/range.js
var Bs = w((kv, qs) => {
  "use strict";
  qs.exports = RangeError;
});

// ../node_modules/es-errors/ref.js
var Gs = w((Lv, Us) => {
  "use strict";
  Us.exports = ReferenceError;
});

// ../node_modules/es-errors/syntax.js
var ta = w((Mv, Vs) => {
  "use strict";
  Vs.exports = SyntaxError;
});

// ../node_modules/es-errors/type.js
var dr = w((jv, Hs) => {
  "use strict";
  Hs.exports = TypeError;
});

// ../node_modules/es-errors/uri.js
var $s = w((qv, Ws) => {
  "use strict";
  Ws.exports = URIError;
});

// ../node_modules/has-symbols/shams.js
var Ys = w((Bv, zs) => {
  "use strict";
  zs.exports = /* @__PURE__ */ a(function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), o = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Sy\
mbol]")
      return !1;
    var n = 42;
    e[t] = n;
    for (t in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
    e).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(e);
    if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = Object.getOwnPropertyDescriptor(e, t);
      if (l.value !== n || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }, "hasSymbols");
});

// ../node_modules/has-symbols/index.js
var Js = w((Gv, Xs) => {
  "use strict";
  var Ks = typeof Symbol < "u" && Symbol, wy = Ys();
  Xs.exports = /* @__PURE__ */ a(function() {
    return typeof Ks != "function" || typeof Symbol != "function" || typeof Ks("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
    wy();
  }, "hasNativeSymbols");
});

// ../node_modules/has-proto/index.js
var Zs = w((Hv, Qs) => {
  "use strict";
  var oa = {
    __proto__: null,
    foo: {}
  }, _y = Object;
  Qs.exports = /* @__PURE__ */ a(function() {
    return { __proto__: oa }.foo === oa.foo && !(oa instanceof _y);
  }, "hasProto");
});

// ../node_modules/function-bind/implementation.js
var tl = w(($v, rl) => {
  "use strict";
  var Py = "Function.prototype.bind called on incompatible ", Oy = Object.prototype.toString, Cy = Math.max, Iy = "[object Function]", el = /* @__PURE__ */ a(
  function(e, t) {
    for (var o = [], n = 0; n < e.length; n += 1)
      o[n] = e[n];
    for (var i = 0; i < t.length; i += 1)
      o[i + e.length] = t[i];
    return o;
  }, "concatty"), Fy = /* @__PURE__ */ a(function(e, t) {
    for (var o = [], n = t || 0, i = 0; n < e.length; n += 1, i += 1)
      o[i] = e[n];
    return o;
  }, "slicy"), Dy = /* @__PURE__ */ a(function(r, e) {
    for (var t = "", o = 0; o < r.length; o += 1)
      t += r[o], o + 1 < r.length && (t += e);
    return t;
  }, "joiny");
  rl.exports = /* @__PURE__ */ a(function(e) {
    var t = this;
    if (typeof t != "function" || Oy.apply(t) !== Iy)
      throw new TypeError(Py + t);
    for (var o = Fy(arguments, 1), n, i = /* @__PURE__ */ a(function() {
      if (this instanceof n) {
        var u = t.apply(
          this,
          el(o, arguments)
        );
        return Object(u) === u ? u : this;
      }
      return t.apply(
        e,
        el(o, arguments)
      );
    }, "binder"), l = Cy(0, t.length - o.length), c = [], s = 0; s < l; s++)
      c[s] = "$" + s;
    if (n = Function("binder", "return function (" + Dy(c, ",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
      var p = /* @__PURE__ */ a(function() {
      }, "Empty");
      p.prototype = t.prototype, n.prototype = new p(), p.prototype = null;
    }
    return n;
  }, "bind");
});

// ../node_modules/function-bind/index.js
var Bt = w((Yv, ol) => {
  "use strict";
  var Ny = tl();
  ol.exports = Function.prototype.bind || Ny;
});

// ../node_modules/hasown/index.js
var al = w((Kv, nl) => {
  "use strict";
  var ky = Function.prototype.call, Ly = Object.prototype.hasOwnProperty, My = Bt();
  nl.exports = My.call(ky, Ly);
});

// ../node_modules/get-intrinsic/index.js
var Ve = w((Xv, pl) => {
  "use strict";
  var I, jy = Ls(), qy = js(), By = Bs(), Uy = Gs(), hr = ta(), mr = dr(), Gy = $s(), cl = Function, na = /* @__PURE__ */ a(function(r) {
    try {
      return cl('"use strict"; return (' + r + ").constructor;")();
    } catch {
    }
  }, "getEvalledConstructor"), Ue = Object.getOwnPropertyDescriptor;
  if (Ue)
    try {
      Ue({}, "");
    } catch {
      Ue = null;
    }
  var aa = /* @__PURE__ */ a(function() {
    throw new mr();
  }, "throwTypeError"), Vy = Ue ? function() {
    try {
      return arguments.callee, aa;
    } catch {
      try {
        return Ue(arguments, "callee").get;
      } catch {
        return aa;
      }
    }
  }() : aa, fr = Js()(), Hy = Zs()(), W = Object.getPrototypeOf || (Hy ? function(r) {
    return r.__proto__;
  } : null), yr = {}, Wy = typeof Uint8Array > "u" || !W ? I : W(Uint8Array), Ge = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? I : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? I : ArrayBuffer,
    "%ArrayIteratorPrototype%": fr && W ? W([][Symbol.iterator]()) : I,
    "%AsyncFromSyncIteratorPrototype%": I,
    "%AsyncFunction%": yr,
    "%AsyncGenerator%": yr,
    "%AsyncGeneratorFunction%": yr,
    "%AsyncIteratorPrototype%": yr,
    "%Atomics%": typeof Atomics > "u" ? I : Atomics,
    "%BigInt%": typeof BigInt > "u" ? I : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? I : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? I : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? I : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": jy,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": qy,
    "%Float32Array%": typeof Float32Array > "u" ? I : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? I : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? I : FinalizationRegistry,
    "%Function%": cl,
    "%GeneratorFunction%": yr,
    "%Int8Array%": typeof Int8Array > "u" ? I : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? I : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? I : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": fr && W ? W(W([][Symbol.iterator]())) : I,
    "%JSON%": typeof JSON == "object" ? JSON : I,
    "%Map%": typeof Map > "u" ? I : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !fr || !W ? I : W((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? I : Promise,
    "%Proxy%": typeof Proxy > "u" ? I : Proxy,
    "%RangeError%": By,
    "%ReferenceError%": Uy,
    "%Reflect%": typeof Reflect > "u" ? I : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? I : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !fr || !W ? I : W((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? I : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": fr && W ? W(""[Symbol.iterator]()) : I,
    "%Symbol%": fr ? Symbol : I,
    "%SyntaxError%": hr,
    "%ThrowTypeError%": Vy,
    "%TypedArray%": Wy,
    "%TypeError%": mr,
    "%Uint8Array%": typeof Uint8Array > "u" ? I : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? I : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? I : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? I : Uint32Array,
    "%URIError%": Gy,
    "%WeakMap%": typeof WeakMap > "u" ? I : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? I : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? I : WeakSet
  };
  if (W)
    try {
      null.error;
    } catch (r) {
      il = W(W(r)), Ge["%Error.prototype%"] = il;
    }
  var il, $y = /* @__PURE__ */ a(function r(e) {
    var t;
    if (e === "%AsyncFunction%")
      t = na("async function () {}");
    else if (e === "%GeneratorFunction%")
      t = na("function* () {}");
    else if (e === "%AsyncGeneratorFunction%")
      t = na("async function* () {}");
    else if (e === "%AsyncGenerator%") {
      var o = r("%AsyncGeneratorFunction%");
      o && (t = o.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var n = r("%AsyncGenerator%");
      n && W && (t = W(n.prototype));
    }
    return Ge[e] = t, t;
  }, "doEval"), sl = {
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
  }, Zr = Bt(), Ut = al(), zy = Zr.call(Function.call, Array.prototype.concat), Yy = Zr.call(Function.apply, Array.prototype.splice), ll = Zr.
  call(Function.call, String.prototype.replace), Gt = Zr.call(Function.call, String.prototype.slice), Ky = Zr.call(Function.call, RegExp.prototype.
  exec), Xy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Jy = /\\(\\)?/g, Qy = /* @__PURE__ */ a(
  function(e) {
    var t = Gt(e, 0, 1), o = Gt(e, -1);
    if (t === "%" && o !== "%")
      throw new hr("invalid intrinsic syntax, expected closing `%`");
    if (o === "%" && t !== "%")
      throw new hr("invalid intrinsic syntax, expected opening `%`");
    var n = [];
    return ll(e, Xy, function(i, l, c, s) {
      n[n.length] = c ? ll(s, Jy, "$1") : l || i;
    }), n;
  }, "stringToPath"), Zy = /* @__PURE__ */ a(function(e, t) {
    var o = e, n;
    if (Ut(sl, o) && (n = sl[o], o = "%" + n[0] + "%"), Ut(Ge, o)) {
      var i = Ge[o];
      if (i === yr && (i = $y(o)), typeof i > "u" && !t)
        throw new mr("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: n,
        name: o,
        value: i
      };
    }
    throw new hr("intrinsic " + e + " does not exist!");
  }, "getBaseIntrinsic");
  pl.exports = /* @__PURE__ */ a(function(e, t) {
    if (typeof e != "string" || e.length === 0)
      throw new mr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof t != "boolean")
      throw new mr('"allowMissing" argument must be a boolean');
    if (Ky(/^%?[^%]*%?$/, e) === null)
      throw new hr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var o = Qy(e), n = o.length > 0 ? o[0] : "", i = Zy("%" + n + "%", t), l = i.name, c = i.value, s = !1, p = i.alias;
    p && (n = p[0], Yy(o, zy([0, 1], p)));
    for (var u = 1, y = !0; u < o.length; u += 1) {
      var d = o[u], h = Gt(d, 0, 1), m = Gt(d, -1);
      if ((h === '"' || h === "'" || h === "`" || m === '"' || m === "'" || m === "`") && h !== m)
        throw new hr("property names with quotes must have matching quotes");
      if ((d === "constructor" || !y) && (s = !0), n += "." + d, l = "%" + n + "%", Ut(Ge, l))
        c = Ge[l];
      else if (c != null) {
        if (!(d in c)) {
          if (!t)
            throw new mr("base intrinsic for " + e + " exists, but the property is not available.");
          return;
        }
        if (Ue && u + 1 >= o.length) {
          var S = Ue(c, d);
          y = !!S, y && "get" in S && !("originalValue" in S.get) ? c = S.get : c = c[d];
        } else
          y = Ut(c, d), c = c[d];
        y && !s && (Ge[l] = c);
      }
    }
    return c;
  }, "GetIntrinsic");
});

// ../node_modules/es-define-property/index.js
var Ht = w((Qv, ul) => {
  "use strict";
  var em = Ve(), Vt = em("%Object.defineProperty%", !0) || !1;
  if (Vt)
    try {
      Vt({}, "a", { value: 1 });
    } catch {
      Vt = !1;
    }
  ul.exports = Vt;
});

// ../node_modules/gopd/index.js
var ia = w((Zv, dl) => {
  "use strict";
  var rm = Ve(), Wt = rm("%Object.getOwnPropertyDescriptor%", !0);
  if (Wt)
    try {
      Wt([], "length");
    } catch {
      Wt = null;
    }
  dl.exports = Wt;
});

// ../node_modules/define-data-property/index.js
var hl = w((eR, ml) => {
  "use strict";
  var fl = Ht(), tm = ta(), gr = dr(), yl = ia();
  ml.exports = /* @__PURE__ */ a(function(e, t, o) {
    if (!e || typeof e != "object" && typeof e != "function")
      throw new gr("`obj` must be an object or a function`");
    if (typeof t != "string" && typeof t != "symbol")
      throw new gr("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new gr("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new gr("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new gr("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new gr("`loose`, if provided, must be a boolean");
    var n = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, l = arguments.length > 5 ? arguments[5] :
    null, c = arguments.length > 6 ? arguments[6] : !1, s = !!yl && yl(e, t);
    if (fl)
      fl(e, t, {
        configurable: l === null && s ? s.configurable : !l,
        enumerable: n === null && s ? s.enumerable : !n,
        value: o,
        writable: i === null && s ? s.writable : !i
      });
    else if (c || !n && !i && !l)
      e[t] = o;
    else
      throw new tm("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, "defineDataProperty");
});

// ../node_modules/has-property-descriptors/index.js
var bl = w((tR, Sl) => {
  "use strict";
  var sa = Ht(), gl = /* @__PURE__ */ a(function() {
    return !!sa;
  }, "hasPropertyDescriptors");
  gl.hasArrayLengthDefineBug = /* @__PURE__ */ a(function() {
    if (!sa)
      return null;
    try {
      return sa([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, "hasArrayLengthDefineBug");
  Sl.exports = gl;
});

// ../node_modules/set-function-length/index.js
var Al = w((nR, Rl) => {
  "use strict";
  var om = Ve(), El = hl(), nm = bl()(), Tl = ia(), vl = dr(), am = om("%Math.floor%");
  Rl.exports = /* @__PURE__ */ a(function(e, t) {
    if (typeof e != "function")
      throw new vl("`fn` is not a function");
    if (typeof t != "number" || t < 0 || t > 4294967295 || am(t) !== t)
      throw new vl("`length` must be a positive 32-bit integer");
    var o = arguments.length > 2 && !!arguments[2], n = !0, i = !0;
    if ("length" in e && Tl) {
      var l = Tl(e, "length");
      l && !l.configurable && (n = !1), l && !l.writable && (i = !1);
    }
    return (n || i || !o) && (nm ? El(
      /** @type {Parameters<define>[0]} */
      e,
      "length",
      t,
      !0,
      !0
    ) : El(
      /** @type {Parameters<define>[0]} */
      e,
      "length",
      t
    )), e;
  }, "setFunctionLength");
});

// ../node_modules/call-bind/index.js
var Cl = w((iR, $t) => {
  "use strict";
  var la = Bt(), zt = Ve(), im = Al(), sm = dr(), _l = zt("%Function.prototype.apply%"), Pl = zt("%Function.prototype.call%"), Ol = zt("%Ref\
lect.apply%", !0) || la.call(Pl, _l), xl = Ht(), lm = zt("%Math.max%");
  $t.exports = /* @__PURE__ */ a(function(e) {
    if (typeof e != "function")
      throw new sm("a function is required");
    var t = Ol(la, Pl, arguments);
    return im(
      t,
      1 + lm(0, e.length - (arguments.length - 1)),
      !0
    );
  }, "callBind");
  var wl = /* @__PURE__ */ a(function() {
    return Ol(la, _l, arguments);
  }, "applyBind");
  xl ? xl($t.exports, "apply", { value: wl }) : $t.exports.apply = wl;
});

// ../node_modules/call-bind/callBound.js
var Nl = w((lR, Dl) => {
  "use strict";
  var Il = Ve(), Fl = Cl(), cm = Fl(Il("String.prototype.indexOf"));
  Dl.exports = /* @__PURE__ */ a(function(e, t) {
    var o = Il(e, !!t);
    return typeof o == "function" && cm(e, ".prototype.") > -1 ? Fl(o) : o;
  }, "callBoundIntrinsic");
});

// (disabled):../node_modules/object-inspect/util.inspect
var kl = w(() => {
});

// ../node_modules/object-inspect/index.js
var rc = w((dR, ec) => {
  var Sa = typeof Map == "function" && Map.prototype, ca = Object.getOwnPropertyDescriptor && Sa ? Object.getOwnPropertyDescriptor(Map.prototype,
  "size") : null, Kt = Sa && ca && typeof ca.get == "function" ? ca.get : null, Ll = Sa && Map.prototype.forEach, ba = typeof Set == "functi\
on" && Set.prototype, pa = Object.getOwnPropertyDescriptor && ba ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Xt = ba &&
  pa && typeof pa.get == "function" ? pa.get : null, Ml = ba && Set.prototype.forEach, pm = typeof WeakMap == "function" && WeakMap.prototype,
  rt = pm ? WeakMap.prototype.has : null, um = typeof WeakSet == "function" && WeakSet.prototype, tt = um ? WeakSet.prototype.has : null, dm = typeof WeakRef ==
  "function" && WeakRef.prototype, jl = dm ? WeakRef.prototype.deref : null, fm = Boolean.prototype.valueOf, ym = Object.prototype.toString,
  mm = Function.prototype.toString, hm = String.prototype.match, Ea = String.prototype.slice, we = String.prototype.replace, gm = String.prototype.
  toUpperCase, ql = String.prototype.toLowerCase, Yl = RegExp.prototype.test, Bl = Array.prototype.concat, ie = Array.prototype.join, Sm = Array.
  prototype.slice, Ul = Math.floor, fa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ua = Object.getOwnPropertySymbols, ya = typeof Symbol ==
  "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Sr = typeof Symbol == "function" && typeof Symbol.iterator ==
  "object", Y = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Sr || !0) ? Symbol.toStringTag : null, Kl = Object.
  prototype.propertyIsEnumerable, Gl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.
  prototype ? function(r) {
    return r.__proto__;
  } : null);
  function Vl(r, e) {
    if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Yl.call(/e/, e))
      return e;
    var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof r == "number") {
      var o = r < 0 ? -Ul(-r) : Ul(r);
      if (o !== r) {
        var n = String(o), i = Ea.call(e, n.length + 1);
        return we.call(n, t, "$&_") + "." + we.call(we.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return we.call(e, t, "$&_");
  }
  a(Vl, "addNumericSeparator");
  var ma = kl(), Hl = ma.custom, Wl = Jl(Hl) ? Hl : null;
  ec.exports = /* @__PURE__ */ a(function r(e, t, o, n) {
    var i = t || {};
    if (xe(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (xe(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !==
    null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var l = xe(i, "customInspect") ? i.customInspect : !0;
    if (typeof l != "boolean" && l !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (xe(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (xe(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var c = i.numericSeparator;
    if (typeof e > "u")
      return "undefined";
    if (e === null)
      return "null";
    if (typeof e == "boolean")
      return e ? "true" : "false";
    if (typeof e == "string")
      return Zl(e, i);
    if (typeof e == "number") {
      if (e === 0)
        return 1 / 0 / e > 0 ? "0" : "-0";
      var s = String(e);
      return c ? Vl(e, s) : s;
    }
    if (typeof e == "bigint") {
      var p = String(e) + "n";
      return c ? Vl(e, p) : p;
    }
    var u = typeof i.depth > "u" ? 5 : i.depth;
    if (typeof o > "u" && (o = 0), o >= u && u > 0 && typeof e == "object")
      return ha(e) ? "[Array]" : "[Object]";
    var y = Lm(i, o);
    if (typeof n > "u")
      n = [];
    else if (Ql(n, e) >= 0)
      return "[Circular]";
    function d(D, k, N) {
      if (k && (n = Sm.call(n), n.push(k)), N) {
        var q = {
          depth: i.depth
        };
        return xe(i, "quoteStyle") && (q.quoteStyle = i.quoteStyle), r(D, q, o + 1, n);
      }
      return r(D, i, o + 1, n);
    }
    if (a(d, "inspect"), typeof e == "function" && !$l(e)) {
      var h = _m(e), m = Yt(e, d);
      return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (m.length > 0 ? " { " + ie.call(m, ", ") + " }" : "");
    }
    if (Jl(e)) {
      var S = Sr ? we.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ya.call(e);
      return typeof e == "object" && !Sr ? et(S) : S;
    }
    if (Dm(e)) {
      for (var g = "<" + ql.call(String(e.nodeName)), E = e.attributes || [], b = 0; b < E.length; b++)
        g += " " + E[b].name + "=" + Xl(bm(E[b].value), "double", i);
      return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + ql.call(String(e.nodeName)) + ">", g;
    }
    if (ha(e)) {
      if (e.length === 0)
        return "[]";
      var T = Yt(e, d);
      return y && !km(T) ? "[" + ga(T, y) + "]" : "[ " + ie.call(T, ", ") + " ]";
    }
    if (Tm(e)) {
      var R = Yt(e, d);
      return !("cause" in Error.prototype) && "cause" in e && !Kl.call(e, "cause") ? "{ [" + String(e) + "] " + ie.call(Bl.call("[cause]: " +
      d(e.cause), R), ", ") + " }" : R.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ie.call(R, ", ") + " }";
    }
    if (typeof e == "object" && l) {
      if (Wl && typeof e[Wl] == "function" && ma)
        return ma(e, { depth: u - o });
      if (l !== "symbol" && typeof e.inspect == "function")
        return e.inspect();
    }
    if (Pm(e)) {
      var x = [];
      return Ll && Ll.call(e, function(D, k) {
        x.push(d(k, e, !0) + " => " + d(D, e));
      }), zl("Map", Kt.call(e), x, y);
    }
    if (Im(e)) {
      var P = [];
      return Ml && Ml.call(e, function(D) {
        P.push(d(D, e));
      }), zl("Set", Xt.call(e), P, y);
    }
    if (Om(e))
      return da("WeakMap");
    if (Fm(e))
      return da("WeakSet");
    if (Cm(e))
      return da("WeakRef");
    if (Rm(e))
      return et(d(Number(e)));
    if (xm(e))
      return et(d(fa.call(e)));
    if (Am(e))
      return et(fm.call(e));
    if (vm(e))
      return et(d(String(e)));
    if (typeof window < "u" && e === window)
      return "{ [object Window] }";
    if (e === global)
      return "{ [object globalThis] }";
    if (!Em(e) && !$l(e)) {
      var L = Yt(e, d), F = Gl ? Gl(e) === Object.prototype : e instanceof Object || e.constructor === Object, G = e instanceof Object ? "" :
      "null prototype", Q = !F && Y && Object(e) === e && Y in e ? Ea.call(_e(e), 8, -1) : G ? "Object" : "", me = F || typeof e.constructor !=
      "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", V = me + (Q || G ? "[" + ie.call(Bl.call([], Q || [], G || []), "\
: ") + "] " : "");
      return L.length === 0 ? V + "{}" : y ? V + "{" + ga(L, y) + "}" : V + "{ " + ie.call(L, ", ") + " }";
    }
    return String(e);
  }, "inspect_");
  function Xl(r, e, t) {
    var o = (t.quoteStyle || e) === "double" ? '"' : "'";
    return o + r + o;
  }
  a(Xl, "wrapQuotes");
  function bm(r) {
    return we.call(String(r), /"/g, "&quot;");
  }
  a(bm, "quote");
  function ha(r) {
    return _e(r) === "[object Array]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(ha, "isArray");
  function Em(r) {
    return _e(r) === "[object Date]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(Em, "isDate");
  function $l(r) {
    return _e(r) === "[object RegExp]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a($l, "isRegExp");
  function Tm(r) {
    return _e(r) === "[object Error]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(Tm, "isError");
  function vm(r) {
    return _e(r) === "[object String]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(vm, "isString");
  function Rm(r) {
    return _e(r) === "[object Number]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(Rm, "isNumber");
  function Am(r) {
    return _e(r) === "[object Boolean]" && (!Y || !(typeof r == "object" && Y in r));
  }
  a(Am, "isBoolean");
  function Jl(r) {
    if (Sr)
      return r && typeof r == "object" && r instanceof Symbol;
    if (typeof r == "symbol")
      return !0;
    if (!r || typeof r != "object" || !ya)
      return !1;
    try {
      return ya.call(r), !0;
    } catch {
    }
    return !1;
  }
  a(Jl, "isSymbol");
  function xm(r) {
    if (!r || typeof r != "object" || !fa)
      return !1;
    try {
      return fa.call(r), !0;
    } catch {
    }
    return !1;
  }
  a(xm, "isBigInt");
  var wm = Object.prototype.hasOwnProperty || function(r) {
    return r in this;
  };
  function xe(r, e) {
    return wm.call(r, e);
  }
  a(xe, "has");
  function _e(r) {
    return ym.call(r);
  }
  a(_e, "toStr");
  function _m(r) {
    if (r.name)
      return r.name;
    var e = hm.call(mm.call(r), /^function\s*([\w$]+)/);
    return e ? e[1] : null;
  }
  a(_m, "nameOf");
  function Ql(r, e) {
    if (r.indexOf)
      return r.indexOf(e);
    for (var t = 0, o = r.length; t < o; t++)
      if (r[t] === e)
        return t;
    return -1;
  }
  a(Ql, "indexOf");
  function Pm(r) {
    if (!Kt || !r || typeof r != "object")
      return !1;
    try {
      Kt.call(r);
      try {
        Xt.call(r);
      } catch {
        return !0;
      }
      return r instanceof Map;
    } catch {
    }
    return !1;
  }
  a(Pm, "isMap");
  function Om(r) {
    if (!rt || !r || typeof r != "object")
      return !1;
    try {
      rt.call(r, rt);
      try {
        tt.call(r, tt);
      } catch {
        return !0;
      }
      return r instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  a(Om, "isWeakMap");
  function Cm(r) {
    if (!jl || !r || typeof r != "object")
      return !1;
    try {
      return jl.call(r), !0;
    } catch {
    }
    return !1;
  }
  a(Cm, "isWeakRef");
  function Im(r) {
    if (!Xt || !r || typeof r != "object")
      return !1;
    try {
      Xt.call(r);
      try {
        Kt.call(r);
      } catch {
        return !0;
      }
      return r instanceof Set;
    } catch {
    }
    return !1;
  }
  a(Im, "isSet");
  function Fm(r) {
    if (!tt || !r || typeof r != "object")
      return !1;
    try {
      tt.call(r, tt);
      try {
        rt.call(r, rt);
      } catch {
        return !0;
      }
      return r instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  a(Fm, "isWeakSet");
  function Dm(r) {
    return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.
    getAttribute == "function";
  }
  a(Dm, "isElement");
  function Zl(r, e) {
    if (r.length > e.maxStringLength) {
      var t = r.length - e.maxStringLength, o = "... " + t + " more character" + (t > 1 ? "s" : "");
      return Zl(Ea.call(r, 0, e.maxStringLength), e) + o;
    }
    var n = we.call(we.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Nm);
    return Xl(n, "single", e);
  }
  a(Zl, "inspectString");
  function Nm(r) {
    var e = r.charCodeAt(0), t = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[e];
    return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + gm.call(e.toString(16));
  }
  a(Nm, "lowbyte");
  function et(r) {
    return "Object(" + r + ")";
  }
  a(et, "markBoxed");
  function da(r) {
    return r + " { ? }";
  }
  a(da, "weakCollectionOf");
  function zl(r, e, t, o) {
    var n = o ? ga(t, o) : ie.call(t, ", ");
    return r + " (" + e + ") {" + n + "}";
  }
  a(zl, "collectionOf");
  function km(r) {
    for (var e = 0; e < r.length; e++)
      if (Ql(r[e], `
`) >= 0)
        return !1;
    return !0;
  }
  a(km, "singleLineValues");
  function Lm(r, e) {
    var t;
    if (r.indent === "	")
      t = "	";
    else if (typeof r.indent == "number" && r.indent > 0)
      t = ie.call(Array(r.indent + 1), " ");
    else
      return null;
    return {
      base: t,
      prev: ie.call(Array(e + 1), t)
    };
  }
  a(Lm, "getIndent");
  function ga(r, e) {
    if (r.length === 0)
      return "";
    var t = `
` + e.prev + e.base;
    return t + ie.call(r, "," + t) + `
` + e.prev;
  }
  a(ga, "indentedJoin");
  function Yt(r, e) {
    var t = ha(r), o = [];
    if (t) {
      o.length = r.length;
      for (var n = 0; n < r.length; n++)
        o[n] = xe(r, n) ? e(r[n], r) : "";
    }
    var i = typeof ua == "function" ? ua(r) : [], l;
    if (Sr) {
      l = {};
      for (var c = 0; c < i.length; c++)
        l["$" + i[c]] = i[c];
    }
    for (var s in r)
      xe(r, s) && (t && String(Number(s)) === s && s < r.length || Sr && l["$" + s] instanceof Symbol || (Yl.call(/[^\w$]/, s) ? o.push(e(s,
      r) + ": " + e(r[s], r)) : o.push(s + ": " + e(r[s], r))));
    if (typeof ua == "function")
      for (var p = 0; p < i.length; p++)
        Kl.call(r, i[p]) && o.push("[" + e(i[p]) + "]: " + e(r[i[p]], r));
    return o;
  }
  a(Yt, "arrObjKeys");
});

// ../node_modules/side-channel/index.js
var nc = w((yR, oc) => {
  "use strict";
  var tc = Ve(), br = Nl(), Mm = rc(), jm = dr(), Jt = tc("%WeakMap%", !0), Qt = tc("%Map%", !0), qm = br("WeakMap.prototype.get", !0), Bm = br(
  "WeakMap.prototype.set", !0), Um = br("WeakMap.prototype.has", !0), Gm = br("Map.prototype.get", !0), Vm = br("Map.prototype.set", !0), Hm = br(
  "Map.prototype.has", !0), Ta = /* @__PURE__ */ a(function(r, e) {
    for (var t = r, o; (o = t.next) !== null; t = o)
      if (o.key === e)
        return t.next = o.next, o.next = /** @type {NonNullable<typeof list.next>} */
        r.next, r.next = o, o;
  }, "listGetNode"), Wm = /* @__PURE__ */ a(function(r, e) {
    var t = Ta(r, e);
    return t && t.value;
  }, "listGet"), $m = /* @__PURE__ */ a(function(r, e, t) {
    var o = Ta(r, e);
    o ? o.value = t : r.next = /** @type {import('.').ListNode<typeof value>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: e,
      next: r.next,
      value: t
    };
  }, "listSet"), zm = /* @__PURE__ */ a(function(r, e) {
    return !!Ta(r, e);
  }, "listHas");
  oc.exports = /* @__PURE__ */ a(function() {
    var e, t, o, n = {
      assert: /* @__PURE__ */ a(function(i) {
        if (!n.has(i))
          throw new jm("Side channel does not contain " + Mm(i));
      }, "assert"),
      get: /* @__PURE__ */ a(function(i) {
        if (Jt && i && (typeof i == "object" || typeof i == "function")) {
          if (e)
            return qm(e, i);
        } else if (Qt) {
          if (t)
            return Gm(t, i);
        } else if (o)
          return Wm(o, i);
      }, "get"),
      has: /* @__PURE__ */ a(function(i) {
        if (Jt && i && (typeof i == "object" || typeof i == "function")) {
          if (e)
            return Um(e, i);
        } else if (Qt) {
          if (t)
            return Hm(t, i);
        } else if (o)
          return zm(o, i);
        return !1;
      }, "has"),
      set: /* @__PURE__ */ a(function(i, l) {
        Jt && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new Jt()), Bm(e, i, l)) : Qt ? (t || (t = new Qt()), Vm(t, i,
        l)) : (o || (o = { key: {}, next: null }), $m(o, i, l));
      }, "set")
    };
    return n;
  }, "getSideChannel");
});

// ../node_modules/qs/lib/formats.js
var Zt = w((hR, ac) => {
  "use strict";
  var Ym = String.prototype.replace, Km = /%20/g, va = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  ac.exports = {
    default: va.RFC3986,
    formatters: {
      RFC1738: /* @__PURE__ */ a(function(r) {
        return Ym.call(r, Km, "+");
      }, "RFC1738"),
      RFC3986: /* @__PURE__ */ a(function(r) {
        return String(r);
      }, "RFC3986")
    },
    RFC1738: va.RFC1738,
    RFC3986: va.RFC3986
  };
});

// ../node_modules/qs/lib/utils.js
var xa = w((SR, sc) => {
  "use strict";
  var Xm = Zt(), Ra = Object.prototype.hasOwnProperty, He = Array.isArray, se = function() {
    for (var r = [], e = 0; e < 256; ++e)
      r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
    return r;
  }(), Jm = /* @__PURE__ */ a(function(e) {
    for (; e.length > 1; ) {
      var t = e.pop(), o = t.obj[t.prop];
      if (He(o)) {
        for (var n = [], i = 0; i < o.length; ++i)
          typeof o[i] < "u" && n.push(o[i]);
        t.obj[t.prop] = n;
      }
    }
  }, "compactQueue"), ic = /* @__PURE__ */ a(function(e, t) {
    for (var o = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n = 0; n < e.length; ++n)
      typeof e[n] < "u" && (o[n] = e[n]);
    return o;
  }, "arrayToObject"), Qm = /* @__PURE__ */ a(function r(e, t, o) {
    if (!t)
      return e;
    if (typeof t != "object") {
      if (He(e))
        e.push(t);
      else if (e && typeof e == "object")
        (o && (o.plainObjects || o.allowPrototypes) || !Ra.call(Object.prototype, t)) && (e[t] = !0);
      else
        return [e, t];
      return e;
    }
    if (!e || typeof e != "object")
      return [e].concat(t);
    var n = e;
    return He(e) && !He(t) && (n = ic(e, o)), He(e) && He(t) ? (t.forEach(function(i, l) {
      if (Ra.call(e, l)) {
        var c = e[l];
        c && typeof c == "object" && i && typeof i == "object" ? e[l] = r(c, i, o) : e.push(i);
      } else
        e[l] = i;
    }), e) : Object.keys(t).reduce(function(i, l) {
      var c = t[l];
      return Ra.call(i, l) ? i[l] = r(i[l], c, o) : i[l] = c, i;
    }, n);
  }, "merge"), Zm = /* @__PURE__ */ a(function(e, t) {
    return Object.keys(t).reduce(function(o, n) {
      return o[n] = t[n], o;
    }, e);
  }, "assignSingleSource"), eh = /* @__PURE__ */ a(function(r, e, t) {
    var o = r.replace(/\+/g, " ");
    if (t === "iso-8859-1")
      return o.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(o);
    } catch {
      return o;
    }
  }, "decode"), Aa = 1024, rh = /* @__PURE__ */ a(function(e, t, o, n, i) {
    if (e.length === 0)
      return e;
    var l = e;
    if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), o === "iso-8859-1")
      return escape(l).replace(/%u[0-9a-f]{4}/gi, function(h) {
        return "%26%23" + parseInt(h.slice(2), 16) + "%3B";
      });
    for (var c = "", s = 0; s < l.length; s += Aa) {
      for (var p = l.length >= Aa ? l.slice(s, s + Aa) : l, u = [], y = 0; y < p.length; ++y) {
        var d = p.charCodeAt(y);
        if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || i === Xm.RFC1738 &&
        (d === 40 || d === 41)) {
          u[u.length] = p.charAt(y);
          continue;
        }
        if (d < 128) {
          u[u.length] = se[d];
          continue;
        }
        if (d < 2048) {
          u[u.length] = se[192 | d >> 6] + se[128 | d & 63];
          continue;
        }
        if (d < 55296 || d >= 57344) {
          u[u.length] = se[224 | d >> 12] + se[128 | d >> 6 & 63] + se[128 | d & 63];
          continue;
        }
        y += 1, d = 65536 + ((d & 1023) << 10 | p.charCodeAt(y) & 1023), u[u.length] = se[240 | d >> 18] + se[128 | d >> 12 & 63] + se[128 |
        d >> 6 & 63] + se[128 | d & 63];
      }
      c += u.join("");
    }
    return c;
  }, "encode"), th = /* @__PURE__ */ a(function(e) {
    for (var t = [{ obj: { o: e }, prop: "o" }], o = [], n = 0; n < t.length; ++n)
      for (var i = t[n], l = i.obj[i.prop], c = Object.keys(l), s = 0; s < c.length; ++s) {
        var p = c[s], u = l[p];
        typeof u == "object" && u !== null && o.indexOf(u) === -1 && (t.push({ obj: l, prop: p }), o.push(u));
      }
    return Jm(t), e;
  }, "compact"), oh = /* @__PURE__ */ a(function(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
  }, "isRegExp"), nh = /* @__PURE__ */ a(function(e) {
    return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
  }, "isBuffer"), ah = /* @__PURE__ */ a(function(e, t) {
    return [].concat(e, t);
  }, "combine"), ih = /* @__PURE__ */ a(function(e, t) {
    if (He(e)) {
      for (var o = [], n = 0; n < e.length; n += 1)
        o.push(t(e[n]));
      return o;
    }
    return t(e);
  }, "maybeMap");
  sc.exports = {
    arrayToObject: ic,
    assign: Zm,
    combine: ah,
    compact: th,
    decode: eh,
    encode: rh,
    isBuffer: nh,
    isRegExp: oh,
    maybeMap: ih,
    merge: Qm
  };
});

// ../node_modules/qs/lib/stringify.js
var fc = w((ER, dc) => {
  "use strict";
  var cc = nc(), eo = xa(), ot = Zt(), sh = Object.prototype.hasOwnProperty, pc = {
    brackets: /* @__PURE__ */ a(function(e) {
      return e + "[]";
    }, "brackets"),
    comma: "comma",
    indices: /* @__PURE__ */ a(function(e, t) {
      return e + "[" + t + "]";
    }, "indices"),
    repeat: /* @__PURE__ */ a(function(e) {
      return e;
    }, "repeat")
  }, le = Array.isArray, lh = Array.prototype.push, uc = /* @__PURE__ */ a(function(r, e) {
    lh.apply(r, le(e) ? e : [e]);
  }, "pushToArray"), ch = Date.prototype.toISOString, lc = ot.default, H = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: eo.encode,
    encodeValuesOnly: !1,
    format: lc,
    formatter: ot.formatters[lc],
    // deprecated
    indices: !1,
    serializeDate: /* @__PURE__ */ a(function(e) {
      return ch.call(e);
    }, "serializeDate"),
    skipNulls: !1,
    strictNullHandling: !1
  }, ph = /* @__PURE__ */ a(function(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
  }, "isNonNullishPrimitive"), wa = {}, uh = /* @__PURE__ */ a(function r(e, t, o, n, i, l, c, s, p, u, y, d, h, m, S, g, E, b) {
    for (var T = e, R = b, x = 0, P = !1; (R = R.get(wa)) !== void 0 && !P; ) {
      var L = R.get(e);
      if (x += 1, typeof L < "u") {
        if (L === x)
          throw new RangeError("Cyclic object value");
        P = !0;
      }
      typeof R.get(wa) > "u" && (x = 0);
    }
    if (typeof u == "function" ? T = u(t, T) : T instanceof Date ? T = h(T) : o === "comma" && le(T) && (T = eo.maybeMap(T, function(ge) {
      return ge instanceof Date ? h(ge) : ge;
    })), T === null) {
      if (l)
        return p && !g ? p(t, H.encoder, E, "key", m) : t;
      T = "";
    }
    if (ph(T) || eo.isBuffer(T)) {
      if (p) {
        var F = g ? t : p(t, H.encoder, E, "key", m);
        return [S(F) + "=" + S(p(T, H.encoder, E, "value", m))];
      }
      return [S(t) + "=" + S(String(T))];
    }
    var G = [];
    if (typeof T > "u")
      return G;
    var Q;
    if (o === "comma" && le(T))
      g && p && (T = eo.maybeMap(T, p)), Q = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (le(u))
      Q = u;
    else {
      var me = Object.keys(T);
      Q = y ? me.sort(y) : me;
    }
    var V = s ? t.replace(/\./g, "%2E") : t, D = n && le(T) && T.length === 1 ? V + "[]" : V;
    if (i && le(T) && T.length === 0)
      return D + "[]";
    for (var k = 0; k < Q.length; ++k) {
      var N = Q[k], q = typeof N == "object" && typeof N.value < "u" ? N.value : T[N];
      if (!(c && q === null)) {
        var Z = d && s ? N.replace(/\./g, "%2E") : N, he = le(T) ? typeof o == "function" ? o(D, Z) : D : D + (d ? "." + Z : "[" + Z + "]");
        b.set(e, x);
        var $ = cc();
        $.set(wa, b), uc(G, r(
          q,
          he,
          o,
          n,
          i,
          l,
          c,
          s,
          o === "comma" && g && le(T) ? null : p,
          u,
          y,
          d,
          h,
          m,
          S,
          g,
          E,
          $
        ));
      }
    }
    return G;
  }, "stringify"), dh = /* @__PURE__ */ a(function(e) {
    if (!e)
      return H;
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var t = e.charset || H.charset;
    if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var o = ot.default;
    if (typeof e.format < "u") {
      if (!sh.call(ot.formatters, e.format))
        throw new TypeError("Unknown format option provided.");
      o = e.format;
    }
    var n = ot.formatters[o], i = H.filter;
    (typeof e.filter == "function" || le(e.filter)) && (i = e.filter);
    var l;
    if (e.arrayFormat in pc ? l = e.arrayFormat : "indices" in e ? l = e.indices ? "indices" : "repeat" : l = H.arrayFormat, "commaRoundTrip" in
    e && typeof e.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var c = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : H.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : H.addQueryPrefix,
      allowDots: c,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : H.allowEmptyArrays,
      arrayFormat: l,
      charset: t,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : H.charsetSentinel,
      commaRoundTrip: e.commaRoundTrip,
      delimiter: typeof e.delimiter > "u" ? H.delimiter : e.delimiter,
      encode: typeof e.encode == "boolean" ? e.encode : H.encode,
      encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : H.encodeDotInKeys,
      encoder: typeof e.encoder == "function" ? e.encoder : H.encoder,
      encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : H.encodeValuesOnly,
      filter: i,
      format: o,
      formatter: n,
      serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : H.serializeDate,
      skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : H.skipNulls,
      sort: typeof e.sort == "function" ? e.sort : null,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : H.strictNullHandling
    };
  }, "normalizeStringifyOptions");
  dc.exports = function(r, e) {
    var t = r, o = dh(e), n, i;
    typeof o.filter == "function" ? (i = o.filter, t = i("", t)) : le(o.filter) && (i = o.filter, n = i);
    var l = [];
    if (typeof t != "object" || t === null)
      return "";
    var c = pc[o.arrayFormat], s = c === "comma" && o.commaRoundTrip;
    n || (n = Object.keys(t)), o.sort && n.sort(o.sort);
    for (var p = cc(), u = 0; u < n.length; ++u) {
      var y = n[u];
      o.skipNulls && t[y] === null || uc(l, uh(
        t[y],
        y,
        c,
        s,
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
        p
      ));
    }
    var d = l.join(o.delimiter), h = o.addQueryPrefix === !0 ? "?" : "";
    return o.charsetSentinel && (o.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), d.length > 0 ? h + d : "";
  };
});

// ../node_modules/qs/lib/parse.js
var hc = w((vR, mc) => {
  "use strict";
  var Er = xa(), _a = Object.prototype.hasOwnProperty, fh = Array.isArray, U = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: Er.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  }, yh = /* @__PURE__ */ a(function(r) {
    return r.replace(/&#(\d+);/g, function(e, t) {
      return String.fromCharCode(parseInt(t, 10));
    });
  }, "interpretNumericEntities"), yc = /* @__PURE__ */ a(function(r, e) {
    return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
  }, "parseArrayValue"), mh = "utf8=%26%2310003%3B", hh = "utf8=%E2%9C%93", gh = /* @__PURE__ */ a(function(e, t) {
    var o = { __proto__: null }, n = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
    n = n.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, l = n.split(t.delimiter, i), c = -1, s, p = t.charset;
    if (t.charsetSentinel)
      for (s = 0; s < l.length; ++s)
        l[s].indexOf("utf8=") === 0 && (l[s] === hh ? p = "utf-8" : l[s] === mh && (p = "iso-8859-1"), c = s, s = l.length);
    for (s = 0; s < l.length; ++s)
      if (s !== c) {
        var u = l[s], y = u.indexOf("]="), d = y === -1 ? u.indexOf("=") : y + 1, h, m;
        d === -1 ? (h = t.decoder(u, U.decoder, p, "key"), m = t.strictNullHandling ? null : "") : (h = t.decoder(u.slice(0, d), U.decoder, p,
        "key"), m = Er.maybeMap(
          yc(u.slice(d + 1), t),
          function(g) {
            return t.decoder(g, U.decoder, p, "value");
          }
        )), m && t.interpretNumericEntities && p === "iso-8859-1" && (m = yh(m)), u.indexOf("[]=") > -1 && (m = fh(m) ? [m] : m);
        var S = _a.call(o, h);
        S && t.duplicates === "combine" ? o[h] = Er.combine(o[h], m) : (!S || t.duplicates === "last") && (o[h] = m);
      }
    return o;
  }, "parseQueryStringValues"), Sh = /* @__PURE__ */ a(function(r, e, t, o) {
    for (var n = o ? e : yc(e, t), i = r.length - 1; i >= 0; --i) {
      var l, c = r[i];
      if (c === "[]" && t.parseArrays)
        l = t.allowEmptyArrays && (n === "" || t.strictNullHandling && n === null) ? [] : [].concat(n);
      else {
        l = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var s = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c, p = t.decodeDotInKeys ? s.replace(/%2E/g, ".") :
        s, u = parseInt(p, 10);
        !t.parseArrays && p === "" ? l = { 0: n } : !isNaN(u) && c !== p && String(u) === p && u >= 0 && t.parseArrays && u <= t.arrayLimit ?
        (l = [], l[u] = n) : p !== "__proto__" && (l[p] = n);
      }
      n = l;
    }
    return n;
  }, "parseObject"), bh = /* @__PURE__ */ a(function(e, t, o, n) {
    if (e) {
      var i = o.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, l = /(\[[^[\]]*])/, c = /(\[[^[\]]*])/g, s = o.depth > 0 && l.exec(i), p = s ?
      i.slice(0, s.index) : i, u = [];
      if (p) {
        if (!o.plainObjects && _a.call(Object.prototype, p) && !o.allowPrototypes)
          return;
        u.push(p);
      }
      for (var y = 0; o.depth > 0 && (s = c.exec(i)) !== null && y < o.depth; ) {
        if (y += 1, !o.plainObjects && _a.call(Object.prototype, s[1].slice(1, -1)) && !o.allowPrototypes)
          return;
        u.push(s[1]);
      }
      return s && u.push("[" + i.slice(s.index) + "]"), Sh(u, t, o, n);
    }
  }, "parseQueryStringKeys"), Eh = /* @__PURE__ */ a(function(e) {
    if (!e)
      return U;
    if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = typeof e.charset > "u" ? U.charset : e.charset, o = typeof e.duplicates > "u" ? U.duplicates : e.duplicates;
    if (o !== "combine" && o !== "first" && o !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var n = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : U.allowDots : !!e.allowDots;
    return {
      allowDots: n,
      allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : U.allowEmptyArrays,
      allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : U.allowPrototypes,
      allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : U.allowSparse,
      arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : U.arrayLimit,
      charset: t,
      charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : U.charsetSentinel,
      comma: typeof e.comma == "boolean" ? e.comma : U.comma,
      decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : U.decodeDotInKeys,
      decoder: typeof e.decoder == "function" ? e.decoder : U.decoder,
      delimiter: typeof e.delimiter == "string" || Er.isRegExp(e.delimiter) ? e.delimiter : U.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : U.depth,
      duplicates: o,
      ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : U.interpretNumericEntities,
      parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : U.parameterLimit,
      parseArrays: e.parseArrays !== !1,
      plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : U.plainObjects,
      strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : U.strictNullHandling
    };
  }, "normalizeParseOptions");
  mc.exports = function(r, e) {
    var t = Eh(e);
    if (r === "" || r === null || typeof r > "u")
      return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var o = typeof r == "string" ? gh(r, t) : r, n = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(o), l = 0; l <
    i.length; ++l) {
      var c = i[l], s = bh(c, o[c], t, typeof r == "string");
      n = Er.merge(n, s, t);
    }
    return t.allowSparse === !0 ? n : Er.compact(n);
  };
});

// ../node_modules/qs/lib/index.js
var ro = w((AR, gc) => {
  "use strict";
  var Th = fc(), vh = hc(), Rh = Zt();
  gc.exports = {
    formats: Rh,
    parse: vh,
    stringify: Th
  };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/entities.json
var Ia = w((NR, Ch) => {
  Ch.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\
\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}",
  Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\
\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220",
  ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\
\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222",
  angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\
\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5",
  Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\
\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D",
  backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\
\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\
\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\
\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\
\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\
\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\
\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\
\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\
\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554",
  boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\
\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\
\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A",
  boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\
\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F",
  bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\
\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\
\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041",
  caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\
\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2",
  cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\
\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\
\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\
\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\
\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\
\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102",
  cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\
\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\
\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2",
  ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48",
  cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00",
  curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4",
  curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D",
  dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\
\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA",
  DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\
\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\
\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4",
  diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7",
  divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}",
  dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238",
  dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\
\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\
\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\
\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957",
  DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}",
  dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\
\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9",
  easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\
\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}",
  eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\
\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB",
  emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\
\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5",
  Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\
\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\
\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\
\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130",
  exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03",
  fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\
\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200",
  ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC",
  frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C",
  frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131",
  gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F",
  Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267",
  gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\
\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9",
  gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A",
  gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\
\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A",
  gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7",
  gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7",
  hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\
\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9",
  hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\
\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\
\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010",
  Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\
\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\
\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\
\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\
\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124",
  Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\
\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9",
  iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\
\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\
\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}",
  Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA",
  kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\
\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\
\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\
\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190",
  Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2",
  latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772",
  lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\
\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\
\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190",
  Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\
\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\
\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\
\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960",
  LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264",
  leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00",
  lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\
\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\
\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC",
  lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\
\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\
\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\
\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\
\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\
\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\
\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\
\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0",
  Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\
\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976",
  ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\
\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\
\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\
\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127",
  micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\
\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\
\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207",
  Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\
\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43",
  Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D",
  ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338",
  NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262",
  nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F",
  nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\
\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\
\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338",
  nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338",
  nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\
\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\
\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\
\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\
\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\
\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338",
  notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\
\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\
\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\
\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\
\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\
\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1",
  nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244",
  nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288",
  nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\
\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\
\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D",
  nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\
\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6",
  nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E",
  ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\
\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5",
  ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\
\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\
\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\
\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\
\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\
\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE",
  OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\
\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\
\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\
\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "\
+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1",
  Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A",
  prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\
\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3",
  precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\
\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\
\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}",
  qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\
\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\
\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB",
  rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\
\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\
\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]",
  rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309",
  rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C",
  realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\
\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1",
  rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\
\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\
\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\
\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\
\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953",
  RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\
\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E",
  rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\
\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\
\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\
\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D",
  sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\
\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925",
  searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\
\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448",
  ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\
\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243",
  simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\
\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA",
  smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\
\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00",
  Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\
\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\
\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\
\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\
\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\
\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\
\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\
\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\
\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\
\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE",
  supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\
\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\
\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926",
  swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4",
  tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\
\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\
\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\
\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\
\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1",
  top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122",
  triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9",
  trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\
\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\
\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\
\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB",
  ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\
\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C",
  ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF",
  UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}",
  uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\
\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E",
  UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5",
  UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\
\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\
\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\
\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\
\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\
\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\
\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE",
  verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\
\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\
\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\
\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\
\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD",
  Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\
\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\
\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\
\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}",
  yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E",
  yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\
\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\
\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D",
  zwnj: "\u200C" };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/legacy.json
var Ac = w((kR, Ih) => {
  Ih.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\
\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\
\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9",
  eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\
\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\
\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7",
  nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\
\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6",
  plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\
\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB",
  Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/xml.json
var Fa = w((LR, Fh) => {
  Fh.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/maps/decode.json
var xc = w((MR, Dh) => {
  Dh.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240,
  "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212,
  "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/decode_codepoint.js
var _c = w((at) => {
  "use strict";
  var Nh = at && at.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(at, "__esModule", { value: !0 });
  var wc = Nh(xc()), kh = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.fromCodePoint || function(r) {
      var e = "";
      return r > 65535 && (r -= 65536, e += String.fromCharCode(r >>> 10 & 1023 | 55296), r = 56320 | r & 1023), e += String.fromCharCode(r),
      e;
    }
  );
  function Lh(r) {
    return r >= 55296 && r <= 57343 || r > 1114111 ? "\uFFFD" : (r in wc.default && (r = wc.default[r]), kh(r));
  }
  a(Lh, "decodeCodePoint");
  at.default = Lh;
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/decode.js
var Na = w((ce) => {
  "use strict";
  var oo = ce && ce.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(ce, "__esModule", { value: !0 });
  ce.decodeHTML = ce.decodeHTMLStrict = ce.decodeXML = void 0;
  var Da = oo(Ia()), Mh = oo(Ac()), jh = oo(Fa()), Pc = oo(_c()), qh = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
  ce.decodeXML = Cc(jh.default);
  ce.decodeHTMLStrict = Cc(Da.default);
  function Cc(r) {
    var e = Ic(r);
    return function(t) {
      return String(t).replace(qh, e);
    };
  }
  a(Cc, "getStrictDecoder");
  var Oc = /* @__PURE__ */ a(function(r, e) {
    return r < e ? 1 : -1;
  }, "sorter");
  ce.decodeHTML = function() {
    for (var r = Object.keys(Mh.default).sort(Oc), e = Object.keys(Da.default).sort(Oc), t = 0, o = 0; t < e.length; t++)
      r[o] === e[t] ? (e[t] += ";?", o++) : e[t] += ";";
    var n = new RegExp("&(?:" + e.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), i = Ic(Da.default);
    function l(c) {
      return c.substr(-1) !== ";" && (c += ";"), i(c);
    }
    return a(l, "replacer"), function(c) {
      return String(c).replace(n, l);
    };
  }();
  function Ic(r) {
    return /* @__PURE__ */ a(function(t) {
      if (t.charAt(1) === "#") {
        var o = t.charAt(2);
        return o === "X" || o === "x" ? Pc.default(parseInt(t.substr(3), 16)) : Pc.default(parseInt(t.substr(2), 10));
      }
      return r[t.slice(1, -1)] || t;
    }, "replace");
  }
  a(Ic, "getReplacer");
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/encode.js
var La = w((re) => {
  "use strict";
  var Fc = re && re.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(re, "__esModule", { value: !0 });
  re.escapeUTF8 = re.escape = re.encodeNonAsciiHTML = re.encodeHTML = re.encodeXML = void 0;
  var Bh = Fc(Fa()), Dc = kc(Bh.default), Nc = Lc(Dc);
  re.encodeXML = qc(Dc);
  var Uh = Fc(Ia()), ka = kc(Uh.default), Gh = Lc(ka);
  re.encodeHTML = Hh(ka, Gh);
  re.encodeNonAsciiHTML = qc(ka);
  function kc(r) {
    return Object.keys(r).sort().reduce(function(e, t) {
      return e[r[t]] = "&" + t + ";", e;
    }, {});
  }
  a(kc, "getInverseObj");
  function Lc(r) {
    for (var e = [], t = [], o = 0, n = Object.keys(r); o < n.length; o++) {
      var i = n[o];
      i.length === 1 ? e.push("\\" + i) : t.push(i);
    }
    e.sort();
    for (var l = 0; l < e.length - 1; l++) {
      for (var c = l; c < e.length - 1 && e[c].charCodeAt(1) + 1 === e[c + 1].charCodeAt(1); )
        c += 1;
      var s = 1 + c - l;
      s < 3 || e.splice(l, s, e[l] + "-" + e[c]);
    }
    return t.unshift("[" + e.join("") + "]"), new RegExp(t.join("|"), "g");
  }
  a(Lc, "getInverseReplacer");
  var Mc = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  Vh = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      function(r) {
        return r.codePointAt(0);
      }
    ) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(r) {
        return (r.charCodeAt(0) - 55296) * 1024 + r.charCodeAt(1) - 56320 + 65536;
      }
    )
  );
  function no(r) {
    return "&#x" + (r.length > 1 ? Vh(r) : r.charCodeAt(0)).toString(16).toUpperCase() + ";";
  }
  a(no, "singleCharReplacer");
  function Hh(r, e) {
    return function(t) {
      return t.replace(e, function(o) {
        return r[o];
      }).replace(Mc, no);
    };
  }
  a(Hh, "getInverse");
  var jc = new RegExp(Nc.source + "|" + Mc.source, "g");
  function Wh(r) {
    return r.replace(jc, no);
  }
  a(Wh, "escape");
  re.escape = Wh;
  function $h(r) {
    return r.replace(Nc, no);
  }
  a($h, "escapeUTF8");
  re.escapeUTF8 = $h;
  function qc(r) {
    return function(e) {
      return e.replace(jc, function(t) {
        return r[t] || no(t);
      });
    };
  }
  a(qc, "getASCIIEncoder");
});

// ../node_modules/ansi-to-html/node_modules/entities/lib/index.js
var Uc = w((O) => {
  "use strict";
  Object.defineProperty(O, "__esModule", { value: !0 });
  O.decodeXMLStrict = O.decodeHTML5Strict = O.decodeHTML4Strict = O.decodeHTML5 = O.decodeHTML4 = O.decodeHTMLStrict = O.decodeHTML = O.decodeXML =
  O.encodeHTML5 = O.encodeHTML4 = O.escapeUTF8 = O.escape = O.encodeNonAsciiHTML = O.encodeHTML = O.encodeXML = O.encode = O.decodeStrict = O.
  decode = void 0;
  var ao = Na(), Bc = La();
  function zh(r, e) {
    return (!e || e <= 0 ? ao.decodeXML : ao.decodeHTML)(r);
  }
  a(zh, "decode");
  O.decode = zh;
  function Yh(r, e) {
    return (!e || e <= 0 ? ao.decodeXML : ao.decodeHTMLStrict)(r);
  }
  a(Yh, "decodeStrict");
  O.decodeStrict = Yh;
  function Kh(r, e) {
    return (!e || e <= 0 ? Bc.encodeXML : Bc.encodeHTML)(r);
  }
  a(Kh, "encode");
  O.encode = Kh;
  var $e = La();
  Object.defineProperty(O, "encodeXML", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.encodeXML;
  }, "get") });
  Object.defineProperty(O, "encodeHTML", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.encodeHTML;
  }, "get") });
  Object.defineProperty(O, "encodeNonAsciiHTML", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.encodeNonAsciiHTML;
  }, "get") });
  Object.defineProperty(O, "escape", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.escape;
  }, "get") });
  Object.defineProperty(O, "escapeUTF8", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.escapeUTF8;
  }, "get") });
  Object.defineProperty(O, "encodeHTML4", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.encodeHTML;
  }, "get") });
  Object.defineProperty(O, "encodeHTML5", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return $e.encodeHTML;
  }, "get") });
  var Pe = Na();
  Object.defineProperty(O, "decodeXML", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeXML;
  }, "get") });
  Object.defineProperty(O, "decodeHTML", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTML;
  }, "get") });
  Object.defineProperty(O, "decodeHTMLStrict", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(O, "decodeHTML4", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTML;
  }, "get") });
  Object.defineProperty(O, "decodeHTML5", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTML;
  }, "get") });
  Object.defineProperty(O, "decodeHTML4Strict", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(O, "decodeHTML5Strict", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeHTMLStrict;
  }, "get") });
  Object.defineProperty(O, "decodeXMLStrict", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Pe.decodeXML;
  }, "get") });
});

// ../node_modules/ansi-to-html/lib/ansi_to_html.js
var Qc = w(($R, Jc) => {
  "use strict";
  function Xh(r, e) {
    if (!(r instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  a(Xh, "_classCallCheck");
  function Gc(r, e) {
    for (var t = 0; t < e.length; t++) {
      var o = e[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
    }
  }
  a(Gc, "_defineProperties");
  function Jh(r, e, t) {
    return e && Gc(r.prototype, e), t && Gc(r, t), r;
  }
  a(Jh, "_createClass");
  function Yc(r, e) {
    var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = Qh(r)) || e && r && typeof r.length == "number") {
        t && (r = t);
        var o = 0, n = /* @__PURE__ */ a(function() {
        }, "F");
        return { s: n, n: /* @__PURE__ */ a(function() {
          return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
        }, "n"), e: /* @__PURE__ */ a(function(p) {
          throw p;
        }, "e"), f: n };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var i = !0, l = !1, c;
    return { s: /* @__PURE__ */ a(function() {
      t = t.call(r);
    }, "s"), n: /* @__PURE__ */ a(function() {
      var p = t.next();
      return i = p.done, p;
    }, "n"), e: /* @__PURE__ */ a(function(p) {
      l = !0, c = p;
    }, "e"), f: /* @__PURE__ */ a(function() {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (l) throw c;
      }
    }, "f") };
  }
  a(Yc, "_createForOfIteratorHelper");
  function Qh(r, e) {
    if (r) {
      if (typeof r == "string") return Vc(r, e);
      var t = Object.prototype.toString.call(r).slice(8, -1);
      if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Vc(r, e);
    }
  }
  a(Qh, "_unsupportedIterableToArray");
  function Vc(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, o = new Array(e); t < e; t++)
      o[t] = r[t];
    return o;
  }
  a(Vc, "_arrayLikeToArray");
  var Zh = Uc(), Hc = {
    fg: "#FFF",
    bg: "#000",
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: eg()
  };
  function eg() {
    var r = {
      0: "#000",
      1: "#A00",
      2: "#0A0",
      3: "#A50",
      4: "#00A",
      5: "#A0A",
      6: "#0AA",
      7: "#AAA",
      8: "#555",
      9: "#F55",
      10: "#5F5",
      11: "#FF5",
      12: "#55F",
      13: "#F5F",
      14: "#5FF",
      15: "#FFF"
    };
    return io(0, 5).forEach(function(e) {
      io(0, 5).forEach(function(t) {
        io(0, 5).forEach(function(o) {
          return rg(e, t, o, r);
        });
      });
    }), io(0, 23).forEach(function(e) {
      var t = e + 232, o = Kc(e * 10 + 8);
      r[t] = "#" + o + o + o;
    }), r;
  }
  a(eg, "getDefaultColors");
  function rg(r, e, t, o) {
    var n = 16 + r * 36 + e * 6 + t, i = r > 0 ? r * 40 + 55 : 0, l = e > 0 ? e * 40 + 55 : 0, c = t > 0 ? t * 40 + 55 : 0;
    o[n] = tg([i, l, c]);
  }
  a(rg, "setStyleColor");
  function Kc(r) {
    for (var e = r.toString(16); e.length < 2; )
      e = "0" + e;
    return e;
  }
  a(Kc, "toHexString");
  function tg(r) {
    var e = [], t = Yc(r), o;
    try {
      for (t.s(); !(o = t.n()).done; ) {
        var n = o.value;
        e.push(Kc(n));
      }
    } catch (i) {
      t.e(i);
    } finally {
      t.f();
    }
    return "#" + e.join("");
  }
  a(tg, "toColorHexString");
  function Wc(r, e, t, o) {
    var n;
    return e === "text" ? n = ig(t, o) : e === "display" ? n = ng(r, t, o) : e === "xterm256Foreground" ? n = lo(r, o.colors[t]) : e === "xt\
erm256Background" ? n = co(r, o.colors[t]) : e === "rgb" && (n = og(r, t)), n;
  }
  a(Wc, "generateOutput");
  function og(r, e) {
    e = e.substring(2).slice(0, -1);
    var t = +e.substr(0, 2), o = e.substring(5).split(";"), n = o.map(function(i) {
      return ("0" + Number(i).toString(16)).substr(-2);
    }).join("");
    return so(r, (t === 38 ? "color:#" : "background-color:#") + n);
  }
  a(og, "handleRgb");
  function ng(r, e, t) {
    e = parseInt(e, 10);
    var o = {
      "-1": /* @__PURE__ */ a(function() {
        return "<br/>";
      }, "_"),
      0: /* @__PURE__ */ a(function() {
        return r.length && Xc(r);
      }, "_"),
      1: /* @__PURE__ */ a(function() {
        return Oe(r, "b");
      }, "_"),
      3: /* @__PURE__ */ a(function() {
        return Oe(r, "i");
      }, "_"),
      4: /* @__PURE__ */ a(function() {
        return Oe(r, "u");
      }, "_"),
      8: /* @__PURE__ */ a(function() {
        return so(r, "display:none");
      }, "_"),
      9: /* @__PURE__ */ a(function() {
        return Oe(r, "strike");
      }, "_"),
      22: /* @__PURE__ */ a(function() {
        return so(r, "font-weight:normal;text-decoration:none;font-style:normal");
      }, "_"),
      23: /* @__PURE__ */ a(function() {
        return zc(r, "i");
      }, "_"),
      24: /* @__PURE__ */ a(function() {
        return zc(r, "u");
      }, "_"),
      39: /* @__PURE__ */ a(function() {
        return lo(r, t.fg);
      }, "_"),
      49: /* @__PURE__ */ a(function() {
        return co(r, t.bg);
      }, "_"),
      53: /* @__PURE__ */ a(function() {
        return so(r, "text-decoration:overline");
      }, "_")
    }, n;
    return o[e] ? n = o[e]() : 4 < e && e < 7 ? n = Oe(r, "blink") : 29 < e && e < 38 ? n = lo(r, t.colors[e - 30]) : 39 < e && e < 48 ? n =
    co(r, t.colors[e - 40]) : 89 < e && e < 98 ? n = lo(r, t.colors[8 + (e - 90)]) : 99 < e && e < 108 && (n = co(r, t.colors[8 + (e - 100)])),
    n;
  }
  a(ng, "handleDisplay");
  function Xc(r) {
    var e = r.slice(0);
    return r.length = 0, e.reverse().map(function(t) {
      return "</" + t + ">";
    }).join("");
  }
  a(Xc, "resetStyles");
  function io(r, e) {
    for (var t = [], o = r; o <= e; o++)
      t.push(o);
    return t;
  }
  a(io, "range");
  function ag(r) {
    return function(e) {
      return (r === null || e.category !== r) && r !== "all";
    };
  }
  a(ag, "notCategory");
  function $c(r) {
    r = parseInt(r, 10);
    var e = null;
    return r === 0 ? e = "all" : r === 1 ? e = "bold" : 2 < r && r < 5 ? e = "underline" : 4 < r && r < 7 ? e = "blink" : r === 8 ? e = "hid\
e" : r === 9 ? e = "strike" : 29 < r && r < 38 || r === 39 || 89 < r && r < 98 ? e = "foreground-color" : (39 < r && r < 48 || r === 49 || 99 <
    r && r < 108) && (e = "background-color"), e;
  }
  a($c, "categoryForCode");
  function ig(r, e) {
    return e.escapeXML ? Zh.encodeXML(r) : r;
  }
  a(ig, "pushText");
  function Oe(r, e, t) {
    return t || (t = ""), r.push(e), "<".concat(e).concat(t ? ' style="'.concat(t, '"') : "", ">");
  }
  a(Oe, "pushTag");
  function so(r, e) {
    return Oe(r, "span", e);
  }
  a(so, "pushStyle");
  function lo(r, e) {
    return Oe(r, "span", "color:" + e);
  }
  a(lo, "pushForegroundColor");
  function co(r, e) {
    return Oe(r, "span", "background-color:" + e);
  }
  a(co, "pushBackgroundColor");
  function zc(r, e) {
    var t;
    if (r.slice(-1)[0] === e && (t = r.pop()), t)
      return "</" + e + ">";
  }
  a(zc, "closeTag");
  function sg(r, e, t) {
    var o = !1, n = 3;
    function i() {
      return "";
    }
    a(i, "remove");
    function l(x, P) {
      return t("xterm256Foreground", P), "";
    }
    a(l, "removeXterm256Foreground");
    function c(x, P) {
      return t("xterm256Background", P), "";
    }
    a(c, "removeXterm256Background");
    function s(x) {
      return e.newline ? t("display", -1) : t("text", x), "";
    }
    a(s, "newline");
    function p(x, P) {
      o = !0, P.trim().length === 0 && (P = "0"), P = P.trimRight(";").split(";");
      var L = Yc(P), F;
      try {
        for (L.s(); !(F = L.n()).done; ) {
          var G = F.value;
          t("display", G);
        }
      } catch (Q) {
        L.e(Q);
      } finally {
        L.f();
      }
      return "";
    }
    a(p, "ansiMess");
    function u(x) {
      return t("text", x), "";
    }
    a(u, "realText");
    function y(x) {
      return t("rgb", x), "";
    }
    a(y, "rgb");
    var d = [{
      pattern: /^\x08+/,
      sub: i
    }, {
      pattern: /^\x1b\[[012]?K/,
      sub: i
    }, {
      pattern: /^\x1b\[\(B/,
      sub: i
    }, {
      pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
      sub: y
    }, {
      pattern: /^\x1b\[38;5;(\d+)m/,
      sub: l
    }, {
      pattern: /^\x1b\[48;5;(\d+)m/,
      sub: c
    }, {
      pattern: /^\n/,
      sub: s
    }, {
      pattern: /^\r+\n/,
      sub: s
    }, {
      pattern: /^\r/,
      sub: s
    }, {
      pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
      sub: p
    }, {
      // CSI n J
      // ED - Erase in Display Clears part of the screen.
      // If n is 0 (or missing), clear from cursor to end of screen.
      // If n is 1, clear from cursor to beginning of the screen.
      // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
      // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
      //   (this feature was added for xterm and is supported by other terminal applications).
      pattern: /^\x1b\[\d?J/,
      sub: i
    }, {
      // CSI n ; m f
      // HVP - Horizontal Vertical Position Same as CUP
      pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
      sub: i
    }, {
      // catch-all for CSI sequences?
      pattern: /^\x1b\[?[\d;]{0,3}/,
      sub: i
    }, {
      /**
       * extracts real text - not containing:
       * - `\x1b' - ESC - escape (Ascii 27)
       * - '\x08' - BS - backspace (Ascii 8)
       * - `\n` - Newline - linefeed (LF) (ascii 10)
       * - `\r` - Windows Carriage Return (CR)
       */
      pattern: /^(([^\x1b\x08\r\n])+)/,
      sub: u
    }];
    function h(x, P) {
      P > n && o || (o = !1, r = r.replace(x.pattern, x.sub));
    }
    a(h, "process");
    var m = [], S = r, g = S.length;
    e: for (; g > 0; ) {
      for (var E = 0, b = 0, T = d.length; b < T; E = ++b) {
        var R = d[E];
        if (h(R, E), r.length !== g) {
          g = r.length;
          continue e;
        }
      }
      if (r.length === g)
        break;
      m.push(0), g = r.length;
    }
    return m;
  }
  a(sg, "tokenize");
  function lg(r, e, t) {
    return e !== "text" && (r = r.filter(ag($c(t))), r.push({
      token: e,
      data: t,
      category: $c(t)
    })), r;
  }
  a(lg, "updateStickyStack");
  var cg = /* @__PURE__ */ function() {
    function r(e) {
      Xh(this, r), e = e || {}, e.colors && (e.colors = Object.assign({}, Hc.colors, e.colors)), this.options = Object.assign({}, Hc, e), this.
      stack = [], this.stickyStack = [];
    }
    return a(r, "Filter"), Jh(r, [{
      key: "toHtml",
      value: /* @__PURE__ */ a(function(t) {
        var o = this;
        t = typeof t == "string" ? [t] : t;
        var n = this.stack, i = this.options, l = [];
        return this.stickyStack.forEach(function(c) {
          var s = Wc(n, c.token, c.data, i);
          s && l.push(s);
        }), sg(t.join(""), i, function(c, s) {
          var p = Wc(n, c, s, i);
          p && l.push(p), i.stream && (o.stickyStack = lg(o.stickyStack, c, s));
        }), n.length && l.push(Xc(n)), l.join("");
      }, "toHtml")
    }]), r;
  }();
  Jc.exports = cg;
});

// ../node_modules/browser-dtector/browser-dtector.umd.min.js
var sp = w((Ga, Va) => {
  (function(r, e) {
    typeof Ga == "object" && typeof Va < "u" ? Va.exports = e() : typeof define == "function" && define.amd ? define(e) : (r = typeof globalThis <
    "u" ? globalThis : r || self).BrowserDetector = e();
  })(Ga, function() {
    "use strict";
    function r(l, c) {
      for (var s = 0; s < c.length; s++) {
        var p = c[s];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(l, (u = p.key, y = void 0,
        typeof (y = function(d, h) {
          if (typeof d != "object" || d === null) return d;
          var m = d[Symbol.toPrimitive];
          if (m !== void 0) {
            var S = m.call(d, h || "default");
            if (typeof S != "object") return S;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(d);
        }(u, "string")) == "symbol" ? y : String(y)), p);
      }
      var u, y;
    }
    a(r, "e");
    var e = { chrome: "Google Chrome", brave: "Brave", crios: "Google Chrome", edge: "Microsoft Edge", edg: "Microsoft Edge", edgios: "Micro\
soft Edge", fennec: "Mozilla Firefox", jsdom: "JsDOM", mozilla: "Mozilla Firefox", fxios: "Mozilla Firefox", msie: "Microsoft Internet Explo\
rer", opera: "Opera", opios: "Opera", opr: "Opera", opt: "Opera", rv: "Microsoft Internet Explorer", safari: "Safari", samsungbrowser: "Sams\
ung Browser", electron: "Electron" }, t = { android: "Android", androidTablet: "Android Tablet", cros: "Chrome OS", fennec: "Android Tablet",
    ipad: "IPad", iphone: "IPhone", jsdom: "JsDOM", linux: "Linux", mac: "Macintosh", tablet: "Android Tablet", win: "Windows", "windows pho\
ne": "Windows Phone", xbox: "Microsoft Xbox" }, o = /* @__PURE__ */ a(function(l) {
      var c = new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, "})?")), s = Number(
      l).toString().match(c);
      return s ? s[0] : null;
    }, "n"), n = /* @__PURE__ */ a(function() {
      return typeof window < "u" ? window.navigator : null;
    }, "i"), i = function() {
      function l(u) {
        var y;
        (function(d, h) {
          if (!(d instanceof h)) throw new TypeError("Cannot call a class as a function");
        })(this, l), this.userAgent = u || ((y = n()) === null || y === void 0 ? void 0 : y.userAgent) || null;
      }
      a(l, "t");
      var c, s, p;
      return c = l, s = [{ key: "parseUserAgent", value: /* @__PURE__ */ a(function(u) {
        var y, d, h, m = {}, S = u || this.userAgent || "", g = S.toLowerCase().replace(/\s\s+/g, " "), E = /(edge)\/([\w.]+)/.exec(g) || /(edg)[/]([\w.]+)/.
        exec(g) || /(opr)[/]([\w.]+)/.exec(g) || /(opt)[/]([\w.]+)/.exec(g) || /(fxios)[/]([\w.]+)/.exec(g) || /(edgios)[/]([\w.]+)/.exec(g) ||
        /(jsdom)[/]([\w.]+)/.exec(g) || /(samsungbrowser)[/]([\w.]+)/.exec(g) || /(electron)[/]([\w.]+)/.exec(g) || /(chrome)[/]([\w.]+)/.exec(
        g) || /(crios)[/]([\w.]+)/.exec(g) || /(opios)[/]([\w.]+)/.exec(g) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
        g) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(g) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(
        g) || /(webkit)[/]([\w.]+)/.exec(g) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(g) || /(msie) ([\w.]+)/.exec(g) || /(fennec)[/]([\w.]+)/.
        exec(g) || g.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(g) || g.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.
        exec(g) || [], b = /(ipad)/.exec(g) || /(ipod)/.exec(g) || /(iphone)/.exec(g) || /(jsdom)/.exec(g) || /(windows phone)/.exec(g) || /(xbox)/.
        exec(g) || /(win)/.exec(g) || /(tablet)/.exec(g) || /(android)/.test(g) && /(mobile)/.test(g) === !1 && ["androidTablet"] || /(android)/.
        exec(g) || /(mac)/.exec(g) || /(linux)/.exec(g) || /(cros)/.exec(g) || [], T = E[5] || E[3] || E[1] || null, R = b[0] || null, x = E[4] ||
        E[2] || null, P = n();
        T === "chrome" && typeof (P == null || (y = P.brave) === null || y === void 0 ? void 0 : y.isBrave) == "function" && (T = "brave"), T &&
        (m[T] = !0), R && (m[R] = !0);
        var L = !!(m.tablet || m.android || m.androidTablet), F = !!(m.ipad || m.tablet || m.androidTablet), G = !!(m.android || m.androidTablet ||
        m.tablet || m.ipad || m.ipod || m.iphone || m["windows phone"]), Q = !!(m.cros || m.mac || m.linux || m.win), me = !!(m.brave || m.chrome ||
        m.crios || m.opr || m.safari || m.edg || m.electron), V = !!(m.msie || m.rv);
        return { name: (d = e[T]) !== null && d !== void 0 ? d : null, platform: (h = t[R]) !== null && h !== void 0 ? h : null, userAgent: S,
        version: x, shortVersion: x ? o(parseFloat(x), 2) : null, isAndroid: L, isTablet: F, isMobile: G, isDesktop: Q, isWebkit: me, isIE: V };
      }, "value") }, { key: "getBrowserInfo", value: /* @__PURE__ */ a(function() {
        var u = this.parseUserAgent();
        return { name: u.name, platform: u.platform, userAgent: u.userAgent, version: u.version, shortVersion: u.shortVersion };
      }, "value") }], p = [{ key: "VERSION", get: /* @__PURE__ */ a(function() {
        return "3.4.0";
      }, "get") }], s && r(c.prototype, s), p && r(c, p), Object.defineProperty(c, "prototype", { writable: !1 }), l;
    }();
    return i;
  });
});

// ../node_modules/@storybook/global/dist/index.mjs
var uo = {};
Ce(uo, {
  global: () => v
});
var v = (() => {
  let r;
  return typeof window < "u" ? r = window : typeof globalThis < "u" ? r = globalThis : typeof global < "u" ? r = global : typeof self < "u" ?
  r = self : r = {}, r;
})();

// src/core-events/index.ts
var be = {};
Ce(be, {
  ARGTYPES_INFO_REQUEST: () => No,
  ARGTYPES_INFO_RESPONSE: () => ht,
  CHANNEL_CREATED: () => gp,
  CHANNEL_WS_DISCONNECT: () => yo,
  CONFIG_ERROR: () => mo,
  CREATE_NEW_STORYFILE_REQUEST: () => Sp,
  CREATE_NEW_STORYFILE_RESPONSE: () => bp,
  CURRENT_STORY_WAS_SET: () => yt,
  DOCS_PREPARED: () => ho,
  DOCS_RENDERED: () => Rr,
  FILE_COMPONENT_SEARCH_REQUEST: () => Ep,
  FILE_COMPONENT_SEARCH_RESPONSE: () => Tp,
  FORCE_REMOUNT: () => go,
  FORCE_RE_RENDER: () => Ar,
  GLOBALS_UPDATED: () => Ie,
  NAVIGATE_URL: () => vp,
  PLAY_FUNCTION_THREW_EXCEPTION: () => So,
  PRELOAD_ENTRIES: () => Eo,
  PREVIEW_BUILDER_PROGRESS: () => Rp,
  PREVIEW_KEYDOWN: () => To,
  REGISTER_SUBSCRIPTION: () => Ap,
  REQUEST_WHATS_NEW_DATA: () => Np,
  RESET_STORY_ARGS: () => xr,
  RESULT_WHATS_NEW_DATA: () => kp,
  SAVE_STORY_REQUEST: () => jp,
  SAVE_STORY_RESPONSE: () => qp,
  SELECT_STORY: () => xp,
  SET_CONFIG: () => wp,
  SET_CURRENT_STORY: () => vo,
  SET_FILTER: () => _p,
  SET_GLOBALS: () => Ro,
  SET_INDEX: () => Pp,
  SET_STORIES: () => Op,
  SET_WHATS_NEW_CACHE: () => Lp,
  SHARED_STATE_CHANGED: () => Cp,
  SHARED_STATE_SET: () => Ip,
  STORIES_COLLAPSE_ALL: () => Fp,
  STORIES_EXPAND_ALL: () => Dp,
  STORY_ARGS_UPDATED: () => Ao,
  STORY_CHANGED: () => xo,
  STORY_ERRORED: () => wo,
  STORY_INDEX_INVALIDATED: () => _o,
  STORY_MISSING: () => mt,
  STORY_PREPARED: () => Po,
  STORY_RENDERED: () => Ke,
  STORY_RENDER_PHASE_CHANGED: () => Fe,
  STORY_SPECIFIED: () => Oo,
  STORY_THREW_EXCEPTION: () => Co,
  STORY_UNCHANGED: () => Io,
  TELEMETRY_ERROR: () => Do,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: () => Mp,
  UNHANDLED_ERRORS_WHILE_PLAYING: () => bo,
  UPDATE_GLOBALS: () => wr,
  UPDATE_QUERY_PARAMS: () => Fo,
  UPDATE_STORY_ARGS: () => _r,
  default: () => hp
});
var fo = /* @__PURE__ */ ((A) => (A.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", A.CHANNEL_CREATED = "channelCreated", A.CONFIG_ERROR = "c\
onfigError", A.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", A.STORY_SPECIFIED = "storySpecified", A.SET_CONFIG = "setConfig", A.SET_STORIES =
"setStories", A.SET_INDEX = "setIndex", A.SET_CURRENT_STORY = "setCurrentStory", A.CURRENT_STORY_WAS_SET = "currentStoryWasSet", A.FORCE_RE_RENDER =
"forceReRender", A.FORCE_REMOUNT = "forceRemount", A.PRELOAD_ENTRIES = "preloadStories", A.STORY_PREPARED = "storyPrepared", A.DOCS_PREPARED =
"docsPrepared", A.STORY_CHANGED = "storyChanged", A.STORY_UNCHANGED = "storyUnchanged", A.STORY_RENDERED = "storyRendered", A.STORY_MISSING =
"storyMissing", A.STORY_ERRORED = "storyErrored", A.STORY_THREW_EXCEPTION = "storyThrewException", A.STORY_RENDER_PHASE_CHANGED = "storyRend\
erPhaseChanged", A.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", A.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErrorsWhilePla\
ying", A.UPDATE_STORY_ARGS = "updateStoryArgs", A.STORY_ARGS_UPDATED = "storyArgsUpdated", A.RESET_STORY_ARGS = "resetStoryArgs", A.SET_FILTER =
"setFilter", A.SET_GLOBALS = "setGlobals", A.UPDATE_GLOBALS = "updateGlobals", A.GLOBALS_UPDATED = "globalsUpdated", A.REGISTER_SUBSCRIPTION =
"registerSubscription", A.PREVIEW_KEYDOWN = "previewKeydown", A.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", A.SELECT_STORY = "sel\
ectStory", A.STORIES_COLLAPSE_ALL = "storiesCollapseAll", A.STORIES_EXPAND_ALL = "storiesExpandAll", A.DOCS_RENDERED = "docsRendered", A.SHARED_STATE_CHANGED =
"sharedStateChanged", A.SHARED_STATE_SET = "sharedStateSet", A.NAVIGATE_URL = "navigateUrl", A.UPDATE_QUERY_PARAMS = "updateQueryParams", A.
REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", A.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", A.SET_WHATS_NEW_CACHE = "setWhatsNewCache", A.
TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", A.TELEMETRY_ERROR = "telemetryError", A.FILE_COMPONENT_SEARCH_REQUEST = "fil\
eComponentSearchRequest", A.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", A.SAVE_STORY_REQUEST = "saveStoryRequest", A.SAVE_STORY_RESPONSE =
"saveStoryResponse", A.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", A.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", A.CREATE_NEW_STORYFILE_REQUEST =
"createNewStoryfileRequest", A.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", A))(fo || {}), hp = fo, {
  CHANNEL_WS_DISCONNECT: yo,
  CHANNEL_CREATED: gp,
  CONFIG_ERROR: mo,
  CREATE_NEW_STORYFILE_REQUEST: Sp,
  CREATE_NEW_STORYFILE_RESPONSE: bp,
  CURRENT_STORY_WAS_SET: yt,
  DOCS_PREPARED: ho,
  DOCS_RENDERED: Rr,
  FILE_COMPONENT_SEARCH_REQUEST: Ep,
  FILE_COMPONENT_SEARCH_RESPONSE: Tp,
  FORCE_RE_RENDER: Ar,
  FORCE_REMOUNT: go,
  GLOBALS_UPDATED: Ie,
  NAVIGATE_URL: vp,
  PLAY_FUNCTION_THREW_EXCEPTION: So,
  UNHANDLED_ERRORS_WHILE_PLAYING: bo,
  PRELOAD_ENTRIES: Eo,
  PREVIEW_BUILDER_PROGRESS: Rp,
  PREVIEW_KEYDOWN: To,
  REGISTER_SUBSCRIPTION: Ap,
  RESET_STORY_ARGS: xr,
  SELECT_STORY: xp,
  SET_CONFIG: wp,
  SET_CURRENT_STORY: vo,
  SET_FILTER: _p,
  SET_GLOBALS: Ro,
  SET_INDEX: Pp,
  SET_STORIES: Op,
  SHARED_STATE_CHANGED: Cp,
  SHARED_STATE_SET: Ip,
  STORIES_COLLAPSE_ALL: Fp,
  STORIES_EXPAND_ALL: Dp,
  STORY_ARGS_UPDATED: Ao,
  STORY_CHANGED: xo,
  STORY_ERRORED: wo,
  STORY_INDEX_INVALIDATED: _o,
  STORY_MISSING: mt,
  STORY_PREPARED: Po,
  STORY_RENDER_PHASE_CHANGED: Fe,
  STORY_RENDERED: Ke,
  STORY_SPECIFIED: Oo,
  STORY_THREW_EXCEPTION: Co,
  STORY_UNCHANGED: Io,
  UPDATE_GLOBALS: wr,
  UPDATE_QUERY_PARAMS: Fo,
  UPDATE_STORY_ARGS: _r,
  REQUEST_WHATS_NEW_DATA: Np,
  RESULT_WHATS_NEW_DATA: kp,
  SET_WHATS_NEW_CACHE: Lp,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: Mp,
  TELEMETRY_ERROR: Do,
  SAVE_STORY_REQUEST: jp,
  SAVE_STORY_RESPONSE: qp,
  ARGTYPES_INFO_REQUEST: No,
  ARGTYPES_INFO_RESPONSE: ht
} = fo;

// src/preview/globals/globals.ts
var ko = {
  "@storybook/global": "__STORYBOOK_MODULE_GLOBAL__",
  "storybook/internal/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "@storybook/core/channels": "__STORYBOOK_MODULE_CHANNELS__",
  "storybook/internal/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "@storybook/core/client-logger": "__STORYBOOK_MODULE_CLIENT_LOGGER__",
  "storybook/internal/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "@storybook/core/core-events": "__STORYBOOK_MODULE_CORE_EVENTS__",
  "storybook/internal/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "@storybook/core-events/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "@storybook/core/preview-errors": "__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__",
  "storybook/internal/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "@storybook/core/preview-api": "__STORYBOOK_MODULE_PREVIEW_API__",
  "storybook/internal/types": "__STORYBOOK_MODULE_TYPES__",
  "@storybook/types": "__STORYBOOK_MODULE_TYPES__",
  "@storybook/core/types": "__STORYBOOK_MODULE_TYPES__"
}, Wa = Object.keys(ko);

// src/channels/index.ts
var Fr = {};
Ce(Fr, {
  Channel: () => Ee,
  PostMessageTransport: () => rr,
  WebsocketTransport: () => tr,
  createBrowserChannel: () => Mf,
  default: () => Lf
});

// src/channels/main.ts
var Bp = /* @__PURE__ */ a((r) => r.transports !== void 0, "isMulti"), Up = /* @__PURE__ */ a(() => Math.random().toString(16).slice(2), "ge\
nerateRandomId"), Lo = class Lo {
  constructor(e = {}) {
    this.sender = Up();
    this.events = {};
    this.data = {};
    this.transports = [];
    this.isAsync = e.async || !1, Bp(e) ? (this.transports = e.transports || [], this.transports.forEach((t) => {
      t.setHandler((o) => this.handleEvent(o));
    })) : this.transports = e.transport ? [e.transport] : [], this.transports.forEach((t) => {
      t.setHandler((o) => this.handleEvent(o));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  }
  emit(e, ...t) {
    let o = { type: e, args: t, from: this.sender }, n = {};
    t.length >= 1 && t[0] && t[0].options && (n = t[0].options);
    let i = /* @__PURE__ */ a(() => {
      this.transports.forEach((l) => {
        l.send(o, n);
      }), this.handleEvent(o);
    }, "handler");
    this.isAsync ? setImmediate(i) : i();
  }
  last(e) {
    return this.data[e];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(e) {
    let t = this.listeners(e);
    return t ? t.length : 0;
  }
  listeners(e) {
    return this.events[e] || void 0;
  }
  once(e, t) {
    let o = this.onceListener(e, t);
    this.addListener(e, o);
  }
  removeAllListeners(e) {
    e ? this.events[e] && delete this.events[e] : this.events = {};
  }
  removeListener(e, t) {
    let o = this.listeners(e);
    o && (this.events[e] = o.filter((n) => n !== t));
  }
  on(e, t) {
    this.addListener(e, t);
  }
  off(e, t) {
    this.removeListener(e, t);
  }
  handleEvent(e) {
    let t = this.listeners(e.type);
    t && t.length && t.forEach((o) => {
      o.apply(e, e.args);
    }), this.data[e.type] = e.args;
  }
  onceListener(e, t) {
    let o = /* @__PURE__ */ a((...n) => (this.removeListener(e, o), t(...n)), "onceListener");
    return o;
  }
};
a(Lo, "Channel");
var Ee = Lo;

// src/client-logger/index.ts
var Pr = {};
Ce(Pr, {
  deprecate: () => ae,
  logger: () => C,
  once: () => M,
  pretty: () => ee
});
var { LOGLEVEL: Gp } = v, Te = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
}, Vp = Gp, Xe = Te[Vp] || Te.info, C = {
  trace: /* @__PURE__ */ a((r, ...e) => {
    Xe <= Te.trace && console.trace(r, ...e);
  }, "trace"),
  debug: /* @__PURE__ */ a((r, ...e) => {
    Xe <= Te.debug && console.debug(r, ...e);
  }, "debug"),
  info: /* @__PURE__ */ a((r, ...e) => {
    Xe <= Te.info && console.info(r, ...e);
  }, "info"),
  warn: /* @__PURE__ */ a((r, ...e) => {
    Xe <= Te.warn && console.warn(r, ...e);
  }, "warn"),
  error: /* @__PURE__ */ a((r, ...e) => {
    Xe <= Te.error && console.error(r, ...e);
  }, "error"),
  log: /* @__PURE__ */ a((r, ...e) => {
    Xe < Te.silent && console.log(r, ...e);
  }, "log")
}, Mo = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ a((r) => (e, ...t) => {
  if (!Mo.has(e))
    return Mo.add(e), C[r](e, ...t);
}, "once");
M.clear = () => Mo.clear();
M.trace = M("trace");
M.debug = M("debug");
M.info = M("info");
M.warn = M("warn");
M.error = M("error");
M.log = M("log");
var ae = M("warn"), ee = /* @__PURE__ */ a((r) => (...e) => {
  let t = [];
  if (e.length) {
    let o = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, n = /<\/span>/gi, i;
    for (t.push(e[0].replace(o, "%c").replace(n, "%c")); i = o.exec(e[0]); )
      t.push(i[2]), t.push("");
    for (let l = 1; l < e.length; l++)
      t.push(e[l]);
  }
  C[r].apply(C, t);
}, "pretty");
ee.trace = ee("trace");
ee.debug = ee("debug");
ee.info = ee("info");
ee.warn = ee("warn");
ee.error = ee("error");

// ../node_modules/telejson/dist/chunk-465TF3XA.mjs
var Hp = Object.create, $a = Object.defineProperty, Wp = Object.getOwnPropertyDescriptor, za = Object.getOwnPropertyNames, $p = Object.getPrototypeOf,
zp = Object.prototype.hasOwnProperty, te = /* @__PURE__ */ a((r, e) => /* @__PURE__ */ a(function() {
  return e || (0, r[za(r)[0]])((e = { exports: {} }).exports, e), e.exports;
}, "__require"), "__commonJS"), Yp = /* @__PURE__ */ a((r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of za(e))
      !zp.call(r, n) && n !== t && $a(r, n, { get: /* @__PURE__ */ a(() => e[n], "get"), enumerable: !(o = Wp(e, n)) || o.enumerable });
  return r;
}, "__copyProps"), gt = /* @__PURE__ */ a((r, e, t) => (t = r != null ? Hp($p(r)) : {}, Yp(
  e || !r || !r.__esModule ? $a(t, "default", { value: r, enumerable: !0 }) : t,
  r
)), "__toESM"), Kp = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], Xp = ["detail"];
function Ya(r) {
  let e = Kp.filter((t) => r[t] !== void 0).reduce((t, o) => ({ ...t, [o]: r[o] }), {});
  return r instanceof CustomEvent && Xp.filter((t) => r[t] !== void 0).forEach((t) => {
    e[t] = r[t];
  }), e;
}
a(Ya, "extractEventHiddenProperties");

// ../node_modules/telejson/dist/index.mjs
var pi = Se(St(), 1);
var ri = te({
  "node_modules/has-symbols/shams.js"(r, e) {
    "use strict";
    e.exports = /* @__PURE__ */ a(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var o = {}, n = Symbol("test"), i = Object(n);
      if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object \
Symbol]")
        return !1;
      var l = 42;
      o[n] = l;
      for (n in o)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(o).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
      o).length !== 0)
        return !1;
      var c = Object.getOwnPropertySymbols(o);
      if (c.length !== 1 || c[0] !== n || !Object.prototype.propertyIsEnumerable.call(o, n))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(o, n);
        if (s.value !== l || s.enumerable !== !0)
          return !1;
      }
      return !0;
    }, "hasSymbols");
  }
}), ti = te({
  "node_modules/has-symbols/index.js"(r, e) {
    "use strict";
    var t = typeof Symbol < "u" && Symbol, o = ri();
    e.exports = /* @__PURE__ */ a(function() {
      return typeof t != "function" || typeof Symbol != "function" || typeof t("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 :
      o();
    }, "hasNativeSymbols");
  }
}), Jp = te({
  "node_modules/function-bind/implementation.js"(r, e) {
    "use strict";
    var t = "Function.prototype.bind called on incompatible ", o = Array.prototype.slice, n = Object.prototype.toString, i = "[object Functi\
on]";
    e.exports = /* @__PURE__ */ a(function(c) {
      var s = this;
      if (typeof s != "function" || n.call(s) !== i)
        throw new TypeError(t + s);
      for (var p = o.call(arguments, 1), u, y = /* @__PURE__ */ a(function() {
        if (this instanceof u) {
          var g = s.apply(
            this,
            p.concat(o.call(arguments))
          );
          return Object(g) === g ? g : this;
        } else
          return s.apply(
            c,
            p.concat(o.call(arguments))
          );
      }, "binder"), d = Math.max(0, s.length - p.length), h = [], m = 0; m < d; m++)
        h.push("$" + m);
      if (u = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(y), s.prototype) {
        var S = /* @__PURE__ */ a(function() {
        }, "Empty2");
        S.prototype = s.prototype, u.prototype = new S(), S.prototype = null;
      }
      return u;
    }, "bind");
  }
}), Bo = te({
  "node_modules/function-bind/index.js"(r, e) {
    "use strict";
    var t = Jp();
    e.exports = Function.prototype.bind || t;
  }
}), Qp = te({
  "node_modules/has/src/index.js"(r, e) {
    "use strict";
    var t = Bo();
    e.exports = t.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), oi = te({
  "node_modules/get-intrinsic/index.js"(r, e) {
    "use strict";
    var t, o = SyntaxError, n = Function, i = TypeError, l = /* @__PURE__ */ a(function(V) {
      try {
        return n('"use strict"; return (' + V + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), c = Object.getOwnPropertyDescriptor;
    if (c)
      try {
        c({}, "");
      } catch {
        c = null;
      }
    var s = /* @__PURE__ */ a(function() {
      throw new i();
    }, "throwTypeError"), p = c ? function() {
      try {
        return arguments.callee, s;
      } catch {
        try {
          return c(arguments, "callee").get;
        } catch {
          return s;
        }
      }
    }() : s, u = ti()(), y = Object.getPrototypeOf || function(V) {
      return V.__proto__;
    }, d = {}, h = typeof Uint8Array > "u" ? t : y(Uint8Array), m = {
      "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
      "%ArrayIteratorPrototype%": u ? y([][Symbol.iterator]()) : t,
      "%AsyncFromSyncIteratorPrototype%": t,
      "%AsyncFunction%": d,
      "%AsyncGenerator%": d,
      "%AsyncGeneratorFunction%": d,
      "%AsyncIteratorPrototype%": d,
      "%Atomics%": typeof Atomics > "u" ? t : Atomics,
      "%BigInt%": typeof BigInt > "u" ? t : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? t : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
      "%Function%": n,
      "%GeneratorFunction%": d,
      "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": u ? y(y([][Symbol.iterator]())) : t,
      "%JSON%": typeof JSON == "object" ? JSON : t,
      "%Map%": typeof Map > "u" ? t : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !u ? t : y((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? t : Promise,
      "%Proxy%": typeof Proxy > "u" ? t : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? t : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? t : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !u ? t : y((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": u ? y(""[Symbol.iterator]()) : t,
      "%Symbol%": u ? Symbol : t,
      "%SyntaxError%": o,
      "%ThrowTypeError%": p,
      "%TypedArray%": h,
      "%TypeError%": i,
      "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
    }, S = /* @__PURE__ */ a(function V(D) {
      var k;
      if (D === "%AsyncFunction%")
        k = l("async function () {}");
      else if (D === "%GeneratorFunction%")
        k = l("function* () {}");
      else if (D === "%AsyncGeneratorFunction%")
        k = l("async function* () {}");
      else if (D === "%AsyncGenerator%") {
        var N = V("%AsyncGeneratorFunction%");
        N && (k = N.prototype);
      } else if (D === "%AsyncIteratorPrototype%") {
        var q = V("%AsyncGenerator%");
        q && (k = y(q.prototype));
      }
      return m[D] = k, k;
    }, "doEval2"), g = {
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
    }, E = Bo(), b = Qp(), T = E.call(Function.call, Array.prototype.concat), R = E.call(Function.apply, Array.prototype.splice), x = E.call(
    Function.call, String.prototype.replace), P = E.call(Function.call, String.prototype.slice), L = E.call(Function.call, RegExp.prototype.
    exec), F = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, G = /\\(\\)?/g, Q = /* @__PURE__ */ a(
    function(D) {
      var k = P(D, 0, 1), N = P(D, -1);
      if (k === "%" && N !== "%")
        throw new o("invalid intrinsic syntax, expected closing `%`");
      if (N === "%" && k !== "%")
        throw new o("invalid intrinsic syntax, expected opening `%`");
      var q = [];
      return x(D, F, function(Z, he, $, ge) {
        q[q.length] = $ ? x(ge, G, "$1") : he || Z;
      }), q;
    }, "stringToPath3"), me = /* @__PURE__ */ a(function(D, k) {
      var N = D, q;
      if (b(g, N) && (q = g[N], N = "%" + q[0] + "%"), b(m, N)) {
        var Z = m[N];
        if (Z === d && (Z = S(N)), typeof Z > "u" && !k)
          throw new i("intrinsic " + D + " exists, but is not available. Please file an issue!");
        return {
          alias: q,
          name: N,
          value: Z
        };
      }
      throw new o("intrinsic " + D + " does not exist!");
    }, "getBaseIntrinsic2");
    e.exports = /* @__PURE__ */ a(function(D, k) {
      if (typeof D != "string" || D.length === 0)
        throw new i("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof k != "boolean")
        throw new i('"allowMissing" argument must be a boolean');
      if (L(/^%?[^%]*%?$/, D) === null)
        throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var N = Q(D), q = N.length > 0 ? N[0] : "", Z = me("%" + q + "%", k), he = Z.name, $ = Z.value, ge = !1, po = Z.alias;
      po && (q = po[0], R(N, T([0, 1], po)));
      for (var ct = 1, Tr = !0; ct < N.length; ct += 1) {
        var pe = N[ct], pt = P(pe, 0, 1), ut = P(pe, -1);
        if ((pt === '"' || pt === "'" || pt === "`" || ut === '"' || ut === "'" || ut === "`") && pt !== ut)
          throw new o("property names with quotes must have matching quotes");
        if ((pe === "constructor" || !Tr) && (ge = !0), q += "." + pe, he = "%" + q + "%", b(m, he))
          $ = m[he];
        else if ($ != null) {
          if (!(pe in $)) {
            if (!k)
              throw new i("base intrinsic for " + D + " exists, but the property is not available.");
            return;
          }
          if (c && ct + 1 >= N.length) {
            var dt = c($, pe);
            Tr = !!dt, Tr && "get" in dt && !("originalValue" in dt.get) ? $ = dt.get : $ = $[pe];
          } else
            Tr = b($, pe), $ = $[pe];
          Tr && !ge && (m[he] = $);
        }
      }
      return $;
    }, "GetIntrinsic");
  }
}), Zp = te({
  "node_modules/call-bind/index.js"(r, e) {
    "use strict";
    var t = Bo(), o = oi(), n = o("%Function.prototype.apply%"), i = o("%Function.prototype.call%"), l = o("%Reflect.apply%", !0) || t.call(
    i, n), c = o("%Object.getOwnPropertyDescriptor%", !0), s = o("%Object.defineProperty%", !0), p = o("%Math.max%");
    if (s)
      try {
        s({}, "a", { value: 1 });
      } catch {
        s = null;
      }
    e.exports = /* @__PURE__ */ a(function(d) {
      var h = l(t, i, arguments);
      if (c && s) {
        var m = c(h, "length");
        m.configurable && s(
          h,
          "length",
          { value: 1 + p(0, d.length - (arguments.length - 1)) }
        );
      }
      return h;
    }, "callBind");
    var u = /* @__PURE__ */ a(function() {
      return l(t, n, arguments);
    }, "applyBind2");
    s ? s(e.exports, "apply", { value: u }) : e.exports.apply = u;
  }
}), eu = te({
  "node_modules/call-bind/callBound.js"(r, e) {
    "use strict";
    var t = oi(), o = Zp(), n = o(t("String.prototype.indexOf"));
    e.exports = /* @__PURE__ */ a(function(l, c) {
      var s = t(l, !!c);
      return typeof s == "function" && n(l, ".prototype.") > -1 ? o(s) : s;
    }, "callBoundIntrinsic");
  }
}), ru = te({
  "node_modules/has-tostringtag/shams.js"(r, e) {
    "use strict";
    var t = ri();
    e.exports = /* @__PURE__ */ a(function() {
      return t() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
}), tu = te({
  "node_modules/is-regex/index.js"(r, e) {
    "use strict";
    var t = eu(), o = ru()(), n, i, l, c;
    o && (n = t("Object.prototype.hasOwnProperty"), i = t("RegExp.prototype.exec"), l = {}, s = /* @__PURE__ */ a(function() {
      throw l;
    }, "throwRegexMarker"), c = {
      toString: s,
      valueOf: s
    }, typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s));
    var s, p = t("Object.prototype.toString"), u = Object.getOwnPropertyDescriptor, y = "[object RegExp]";
    e.exports = /* @__PURE__ */ a(o ? function(h) {
      if (!h || typeof h != "object")
        return !1;
      var m = u(h, "lastIndex"), S = m && n(m, "value");
      if (!S)
        return !1;
      try {
        i(h, c);
      } catch (g) {
        return g === l;
      }
    } : function(h) {
      return !h || typeof h != "object" && typeof h != "function" ? !1 : p(h) === y;
    }, "isRegex");
  }
}), ou = te({
  "node_modules/is-function/index.js"(r, e) {
    e.exports = o;
    var t = Object.prototype.toString;
    function o(n) {
      if (!n)
        return !1;
      var i = t.call(n);
      return i === "[object Function]" || typeof n == "function" && i !== "[object RegExp]" || typeof window < "u" && (n === window.setTimeout ||
      n === window.alert || n === window.confirm || n === window.prompt);
    }
    a(o, "isFunction3");
  }
}), nu = te({
  "node_modules/is-symbol/index.js"(r, e) {
    "use strict";
    var t = Object.prototype.toString, o = ti()();
    o ? (n = Symbol.prototype.toString, i = /^Symbol\(.*\)$/, l = /* @__PURE__ */ a(function(s) {
      return typeof s.valueOf() != "symbol" ? !1 : i.test(n.call(s));
    }, "isRealSymbolObject"), e.exports = /* @__PURE__ */ a(function(s) {
      if (typeof s == "symbol")
        return !0;
      if (t.call(s) !== "[object Symbol]")
        return !1;
      try {
        return l(s);
      } catch {
        return !1;
      }
    }, "isSymbol3")) : e.exports = /* @__PURE__ */ a(function(s) {
      return !1;
    }, "isSymbol3");
    var n, i, l;
  }
}), au = gt(tu()), iu = gt(ou()), su = gt(nu());
function lu(r) {
  return r != null && typeof r == "object" && Array.isArray(r) === !1;
}
a(lu, "isObject");
var cu = typeof global == "object" && global && global.Object === Object && global, pu = cu, uu = typeof self == "object" && self && self.Object ===
Object && self, du = pu || uu || Function("return this")(), Uo = du, fu = Uo.Symbol, Je = fu, ni = Object.prototype, yu = ni.hasOwnProperty,
mu = ni.toString, Or = Je ? Je.toStringTag : void 0;
function hu(r) {
  var e = yu.call(r, Or), t = r[Or];
  try {
    r[Or] = void 0;
    var o = !0;
  } catch {
  }
  var n = mu.call(r);
  return o && (e ? r[Or] = t : delete r[Or]), n;
}
a(hu, "getRawTag");
var gu = hu, Su = Object.prototype, bu = Su.toString;
function Eu(r) {
  return bu.call(r);
}
a(Eu, "objectToString");
var Tu = Eu, vu = "[object Null]", Ru = "[object Undefined]", Xa = Je ? Je.toStringTag : void 0;
function Au(r) {
  return r == null ? r === void 0 ? Ru : vu : Xa && Xa in Object(r) ? gu(r) : Tu(r);
}
a(Au, "baseGetTag");
var ai = Au;
function xu(r) {
  return r != null && typeof r == "object";
}
a(xu, "isObjectLike");
var wu = xu, _u = "[object Symbol]";
function Pu(r) {
  return typeof r == "symbol" || wu(r) && ai(r) == _u;
}
a(Pu, "isSymbol");
var Go = Pu;
function Ou(r, e) {
  for (var t = -1, o = r == null ? 0 : r.length, n = Array(o); ++t < o; )
    n[t] = e(r[t], t, r);
  return n;
}
a(Ou, "arrayMap");
var Cu = Ou, Iu = Array.isArray, Vo = Iu, Fu = 1 / 0, Ja = Je ? Je.prototype : void 0, Qa = Ja ? Ja.toString : void 0;
function ii(r) {
  if (typeof r == "string")
    return r;
  if (Vo(r))
    return Cu(r, ii) + "";
  if (Go(r))
    return Qa ? Qa.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -Fu ? "-0" : e;
}
a(ii, "baseToString");
var Du = ii;
function Nu(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
a(Nu, "isObject2");
var si = Nu, ku = "[object AsyncFunction]", Lu = "[object Function]", Mu = "[object GeneratorFunction]", ju = "[object Proxy]";
function qu(r) {
  if (!si(r))
    return !1;
  var e = ai(r);
  return e == Lu || e == Mu || e == ku || e == ju;
}
a(qu, "isFunction");
var Bu = qu, Uu = Uo["__core-js_shared__"], qo = Uu, Za = function() {
  var r = /[^.]+$/.exec(qo && qo.keys && qo.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function Gu(r) {
  return !!Za && Za in r;
}
a(Gu, "isMasked");
var Vu = Gu, Hu = Function.prototype, Wu = Hu.toString;
function $u(r) {
  if (r != null) {
    try {
      return Wu.call(r);
    } catch {
    }
    try {
      return r + "";
    } catch {
    }
  }
  return "";
}
a($u, "toSource");
var zu = $u, Yu = /[\\^$.*+?()[\]{}|]/g, Ku = /^\[object .+?Constructor\]$/, Xu = Function.prototype, Ju = Object.prototype, Qu = Xu.toString,
Zu = Ju.hasOwnProperty, ed = RegExp(
  "^" + Qu.call(Zu).replace(Yu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rd(r) {
  if (!si(r) || Vu(r))
    return !1;
  var e = Bu(r) ? ed : Ku;
  return e.test(zu(r));
}
a(rd, "baseIsNative");
var td = rd;
function od(r, e) {
  return r?.[e];
}
a(od, "getValue");
var nd = od;
function ad(r, e) {
  var t = nd(r, e);
  return td(t) ? t : void 0;
}
a(ad, "getNative");
var li = ad;
function id(r, e) {
  return r === e || r !== r && e !== e;
}
a(id, "eq");
var sd = id, ld = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cd = /^\w*$/;
function pd(r, e) {
  if (Vo(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || Go(r) ? !0 : cd.test(r) || !ld.test(r) || e != null && r in Object(
  e);
}
a(pd, "isKey");
var ud = pd, dd = li(Object, "create"), Cr = dd;
function fd() {
  this.__data__ = Cr ? Cr(null) : {}, this.size = 0;
}
a(fd, "hashClear");
var yd = fd;
function md(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
a(md, "hashDelete");
var hd = md, gd = "__lodash_hash_undefined__", Sd = Object.prototype, bd = Sd.hasOwnProperty;
function Ed(r) {
  var e = this.__data__;
  if (Cr) {
    var t = e[r];
    return t === gd ? void 0 : t;
  }
  return bd.call(e, r) ? e[r] : void 0;
}
a(Ed, "hashGet");
var Td = Ed, vd = Object.prototype, Rd = vd.hasOwnProperty;
function Ad(r) {
  var e = this.__data__;
  return Cr ? e[r] !== void 0 : Rd.call(e, r);
}
a(Ad, "hashHas");
var xd = Ad, wd = "__lodash_hash_undefined__";
function _d(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = Cr && e === void 0 ? wd : e, this;
}
a(_d, "hashSet");
var Pd = _d;
function Qe(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
a(Qe, "Hash");
Qe.prototype.clear = yd;
Qe.prototype.delete = hd;
Qe.prototype.get = Td;
Qe.prototype.has = xd;
Qe.prototype.set = Pd;
var ei = Qe;
function Od() {
  this.__data__ = [], this.size = 0;
}
a(Od, "listCacheClear");
var Cd = Od;
function Id(r, e) {
  for (var t = r.length; t--; )
    if (sd(r[t][0], e))
      return t;
  return -1;
}
a(Id, "assocIndexOf");
var Et = Id, Fd = Array.prototype, Dd = Fd.splice;
function Nd(r) {
  var e = this.__data__, t = Et(e, r);
  if (t < 0)
    return !1;
  var o = e.length - 1;
  return t == o ? e.pop() : Dd.call(e, t, 1), --this.size, !0;
}
a(Nd, "listCacheDelete");
var kd = Nd;
function Ld(r) {
  var e = this.__data__, t = Et(e, r);
  return t < 0 ? void 0 : e[t][1];
}
a(Ld, "listCacheGet");
var Md = Ld;
function jd(r) {
  return Et(this.__data__, r) > -1;
}
a(jd, "listCacheHas");
var qd = jd;
function Bd(r, e) {
  var t = this.__data__, o = Et(t, r);
  return o < 0 ? (++this.size, t.push([r, e])) : t[o][1] = e, this;
}
a(Bd, "listCacheSet");
var Ud = Bd;
function Ze(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
a(Ze, "ListCache");
Ze.prototype.clear = Cd;
Ze.prototype.delete = kd;
Ze.prototype.get = Md;
Ze.prototype.has = qd;
Ze.prototype.set = Ud;
var Gd = Ze, Vd = li(Uo, "Map"), Hd = Vd;
function Wd() {
  this.size = 0, this.__data__ = {
    hash: new ei(),
    map: new (Hd || Gd)(),
    string: new ei()
  };
}
a(Wd, "mapCacheClear");
var $d = Wd;
function zd(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
a(zd, "isKeyable");
var Yd = zd;
function Kd(r, e) {
  var t = r.__data__;
  return Yd(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
a(Kd, "getMapData");
var Tt = Kd;
function Xd(r) {
  var e = Tt(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
a(Xd, "mapCacheDelete");
var Jd = Xd;
function Qd(r) {
  return Tt(this, r).get(r);
}
a(Qd, "mapCacheGet");
var Zd = Qd;
function ef(r) {
  return Tt(this, r).has(r);
}
a(ef, "mapCacheHas");
var rf = ef;
function tf(r, e) {
  var t = Tt(this, r), o = t.size;
  return t.set(r, e), this.size += t.size == o ? 0 : 1, this;
}
a(tf, "mapCacheSet");
var of = tf;
function er(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var o = r[e];
    this.set(o[0], o[1]);
  }
}
a(er, "MapCache");
er.prototype.clear = $d;
er.prototype.delete = Jd;
er.prototype.get = Zd;
er.prototype.has = rf;
er.prototype.set = of;
var ci = er, nf = "Expected a function";
function Ho(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(nf);
  var t = /* @__PURE__ */ a(function() {
    var o = arguments, n = e ? e.apply(this, o) : o[0], i = t.cache;
    if (i.has(n))
      return i.get(n);
    var l = r.apply(this, o);
    return t.cache = i.set(n, l) || i, l;
  }, "memoized");
  return t.cache = new (Ho.Cache || ci)(), t;
}
a(Ho, "memoize");
Ho.Cache = ci;
var af = Ho, sf = 500;
function lf(r) {
  var e = af(r, function(o) {
    return t.size === sf && t.clear(), o;
  }), t = e.cache;
  return e;
}
a(lf, "memoizeCapped");
var cf = lf, pf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, uf = /\\(\\)?/g, df = cf(
function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(pf, function(t, o, n, i) {
    e.push(n ? i.replace(uf, "$1") : o || t);
  }), e;
}), ff = df;
function yf(r) {
  return r == null ? "" : Du(r);
}
a(yf, "toString");
var mf = yf;
function hf(r, e) {
  return Vo(r) ? r : ud(r, e) ? [r] : ff(mf(r));
}
a(hf, "castPath");
var gf = hf, Sf = 1 / 0;
function bf(r) {
  if (typeof r == "string" || Go(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -Sf ? "-0" : e;
}
a(bf, "toKey");
var Ef = bf;
function Tf(r, e) {
  e = gf(e, r);
  for (var t = 0, o = e.length; r != null && t < o; )
    r = r[Ef(e[t++])];
  return t && t == o ? r : void 0;
}
a(Tf, "baseGet");
var vf = Tf;
function Rf(r, e, t) {
  var o = r == null ? void 0 : vf(r, e);
  return o === void 0 ? t : o;
}
a(Rf, "get");
var Af = Rf, bt = lu, xf = /* @__PURE__ */ a((r) => {
  let e = null, t = !1, o = !1, n = !1, i = "";
  if (r.indexOf("//") >= 0 || r.indexOf("/*") >= 0)
    for (let l = 0; l < r.length; l += 1)
      !e && !t && !o && !n ? r[l] === '"' || r[l] === "'" || r[l] === "`" ? e = r[l] : r[l] === "/" && r[l + 1] === "*" ? t = !0 : r[l] === "\
/" && r[l + 1] === "/" ? o = !0 : r[l] === "/" && r[l + 1] !== "/" && (n = !0) : (e && (r[l] === e && r[l - 1] !== "\\" || r[l] === `
` && e !== "`") && (e = null), n && (r[l] === "/" && r[l - 1] !== "\\" || r[l] === `
`) && (n = !1), t && r[l - 1] === "/" && r[l - 2] === "*" && (t = !1), o && r[l] === `
` && (o = !1)), !t && !o && (i += r[l]);
  else
    i = r;
  return i;
}, "removeCodeComments"), wf = (0, pi.default)(1e4)(
  (r) => xf(r).replace(/\n\s*/g, "").trim()
), _f = /* @__PURE__ */ a(function(e, t) {
  let o = t.slice(0, t.indexOf("{")), n = t.slice(t.indexOf("{"));
  if (o.includes("=>") || o.includes("function"))
    return t;
  let i = o;
  return i = i.replace(e, "function"), i + n;
}, "convertShorthandMethods2"), Pf = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, Ir = /* @__PURE__ */ a((r) => r.match(/^[\[\{\"\}].*[\]\}\"]$/),
"isJSON");
function ui(r) {
  if (!bt(r))
    return r;
  let e = r, t = !1;
  return typeof Event < "u" && r instanceof Event && (e = Ya(e), t = !0), e = Object.keys(e).reduce((o, n) => {
    try {
      e[n] && e[n].toJSON, o[n] = e[n];
    } catch {
      t = !0;
    }
    return o;
  }, {}), t ? e : r;
}
a(ui, "convertUnconventionalData");
var Of = /* @__PURE__ */ a(function(e) {
  let t, o, n, i;
  return /* @__PURE__ */ a(function(c, s) {
    try {
      if (c === "")
        return i = [], t = /* @__PURE__ */ new Map([[s, "[]"]]), o = /* @__PURE__ */ new Map(), n = [], s;
      let p = o.get(this) || this;
      for (; n.length && p !== n[0]; )
        n.shift(), i.pop();
      if (typeof s == "boolean")
        return s;
      if (s === void 0)
        return e.allowUndefined ? "_undefined_" : void 0;
      if (s === null)
        return null;
      if (typeof s == "number")
        return s === -1 / 0 ? "_-Infinity_" : s === 1 / 0 ? "_Infinity_" : Number.isNaN(s) ? "_NaN_" : s;
      if (typeof s == "bigint")
        return `_bigint_${s.toString()}`;
      if (typeof s == "string")
        return Pf.test(s) ? e.allowDate ? `_date_${s}` : void 0 : s;
      if ((0, au.default)(s))
        return e.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
      if ((0, iu.default)(s)) {
        if (!e.allowFunction)
          return;
        let { name: y } = s, d = s.toString();
        return d.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${y}|${(() => {
        }).toString()}` : `_function_${y}|${wf(_f(c, d))}`;
      }
      if ((0, su.default)(s)) {
        if (!e.allowSymbol)
          return;
        let y = Symbol.keyFor(s);
        return y !== void 0 ? `_gsymbol_${y}` : `_symbol_${s.toString().slice(7, -1)}`;
      }
      if (n.length >= e.maxDepth)
        return Array.isArray(s) ? `[Array(${s.length})]` : "[Object]";
      if (s === this)
        return `_duplicate_${JSON.stringify(i)}`;
      if (s instanceof Error && e.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...s.cause ? { cause: s.cause } : {},
            ...s,
            name: s.name,
            message: s.message,
            stack: s.stack,
            "_constructor-name_": s.constructor.name
          }
        };
      if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && !e.allowClass)
        return;
      let u = t.get(s);
      if (!u) {
        let y = Array.isArray(s) ? s : ui(s);
        if (s.constructor && s.constructor.name && s.constructor.name !== "Object" && !Array.isArray(s) && e.allowClass)
          try {
            Object.assign(y, { "_constructor-name_": s.constructor.name });
          } catch {
          }
        return i.push(c), n.unshift(y), t.set(s, JSON.stringify(i)), s !== y && o.set(s, y), y;
      }
      return `_duplicate_${u}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2"), Cf = /* @__PURE__ */ a(function reviver(options) {
  let refs = [], root;
  return /* @__PURE__ */ a(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: r, container: e, replacement: t }) => {
      let o = Ir(t) ? JSON.parse(t) : t.split(".");
      o.length === 0 ? e[r] = root : e[r] = Af(root, o);
    })), key === "_constructor-name_")
      return value;
    if (bt(value) && value.__isConvertedError__) {
      let { message: r, ...e } = value.errorProperties, t = new Error(r);
      return Object.assign(t, e), t;
    }
    if (bt(value) && value["_constructor-name_"] && options.allowFunction) {
      let r = value["_constructor-name_"];
      if (r !== "Object") {
        let e = new Function(`return function ${r.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new e());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = /* @__PURE__ */ a((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: /* @__PURE__ */ a(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, r, e] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(e, r);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value ==
    "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }),
    null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value ==
    "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" &&
    value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_\
NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) :
    value;
  }, "revive");
}, "reviver"), di = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, vt = /* @__PURE__ */ a((r, e = {}) => {
  let t = { ...di, ...e };
  return JSON.stringify(ui(r), Of(t), e.space);
}, "stringify"), If = /* @__PURE__ */ a(() => {
  let r = /* @__PURE__ */ new Map();
  return /* @__PURE__ */ a(function e(t) {
    bt(t) && Object.entries(t).forEach(([o, n]) => {
      n === "_undefined_" ? t[o] = void 0 : r.get(n) || (r.set(n, !0), e(n));
    }), Array.isArray(t) && t.forEach((o, n) => {
      o === "_undefined_" ? (r.set(o, !0), t[n] = void 0) : r.get(o) || (r.set(o, !0), e(o));
    });
  }, "mutateUndefined");
}, "mutator"), Rt = /* @__PURE__ */ a((r, e = {}) => {
  let t = { ...di, ...e }, o = JSON.parse(r, Cf(t));
  return If()(o), o;
}, "parse");

// ../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var Ff = !0, Wo = "Invariant failed";
function ue(r, e) {
  if (!r) {
    if (Ff)
      throw new Error(Wo);
    var t = typeof e == "function" ? e() : e, o = t ? "".concat(Wo, ": ").concat(t) : Wo;
    throw new Error(o);
  }
}
a(ue, "invariant");

// src/channels/postmessage/getEventSourceUrl.ts
var fi = /* @__PURE__ */ a((r) => {
  let e = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [t, ...o] = e.filter((i) => {
    try {
      return i.contentWindow?.location.origin === r.source.location.origin && i.contentWindow?.location.pathname === r.source.location.pathname;
    } catch {
    }
    try {
      return i.contentWindow === r.source;
    } catch {
    }
    let l = i.getAttribute("src"), c;
    try {
      if (!l)
        return !1;
      ({ origin: c } = new URL(l, document.location.toString()));
    } catch {
      return !1;
    }
    return c === r.origin;
  }), n = t?.getAttribute("src");
  if (n && o.length === 0) {
    let { protocol: i, host: l, pathname: c } = new URL(n, document.location.toString());
    return `${i}//${l}${c}`;
  }
  return o.length > 0 && C.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl");

// src/channels/postmessage/index.ts
var { document: $o, location: zo } = v, yi = "storybook-channel", Df = { allowFunction: !1, maxDepth: 25 }, Yo = class Yo {
  constructor(e) {
    this.config = e;
    this.connected = !1;
    if (this.buffer = [], typeof v?.addEventListener == "function" && v.addEventListener("message", this.handleEvent.bind(this), !1), e.page !==
    "manager" && e.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${e.page}"`);
  }
  setHandler(e) {
    this.handler = (...t) => {
      e.apply(this, t), !this.connected && this.getLocalFrame().length && (this.flush(), this.connected = !0);
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist the event will be
   * stored in a buffer and sent when the window exists.
   *
   * @param event
   */
  send(e, t) {
    let {
      target: o,
      // telejson options
      allowRegExp: n,
      allowFunction: i,
      allowSymbol: l,
      allowDate: c,
      allowError: s,
      allowUndefined: p,
      allowClass: u,
      maxDepth: y,
      space: d,
      lazyEval: h
    } = t || {}, m = Object.fromEntries(
      Object.entries({
        allowRegExp: n,
        allowFunction: i,
        allowSymbol: l,
        allowDate: c,
        allowError: s,
        allowUndefined: p,
        allowClass: u,
        maxDepth: y,
        space: d,
        lazyEval: h
      }).filter(([T, R]) => typeof R < "u")
    ), S = {
      ...Df,
      ...v.CHANNEL_OPTIONS || {},
      ...m
    }, g = this.getFrames(o), E = new URLSearchParams(zo?.search || ""), b = vt(
      {
        key: yi,
        event: e,
        refId: E.get("refId")
      },
      S
    );
    return g.length ? (this.buffer.length && this.flush(), g.forEach((T) => {
      try {
        T.postMessage(b, "*");
      } catch {
        C.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((T, R) => {
      this.buffer.push({ event: e, resolve: T, reject: R });
    });
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((t) => {
      this.send(t.event).then(t.resolve).catch(t.reject);
    });
  }
  getFrames(e) {
    if (this.config.page === "manager") {
      let o = Array.from(
        $o.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((n) => {
        try {
          return n.contentWindow && n.dataset.isStorybook !== void 0 && n.id === e ? [n.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return o?.length ? o : this.getCurrentFrames();
    }
    return v && v.parent && v.parent !== v.self ? [v.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      $o.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((t) => t.contentWindow ? [t.contentWindow] : []) : v && v.parent ? [v.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      $o.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((t) => t.contentWindow ? [t.contentWindow] : []) : v && v.parent ? [v.parent] : [];
  }
  handleEvent(e) {
    try {
      let { data: t } = e, { key: o, event: n, refId: i } = typeof t == "string" && Ir(t) ? Rt(t, v.CHANNEL_OPTIONS || {}) : t;
      if (o === yi) {
        let l = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #\
1EA7FD; background: black"> preview </span>', c = Object.values(be).includes(n.type) ? `<span style="color: #FF4785">${n.type}</span>` : `<s\
pan style="color: #FFAE00">${n.type}</span>`;
        if (i && (n.refId = i), n.source = this.config.page === "preview" ? e.origin : fi(e), !n.source) {
          ee.error(
            `${l} received ${c} but was unable to determine the source of the event`
          );
          return;
        }
        let s = `${l} received ${c} (${t.length})`;
        ee.debug(
          zo.origin !== n.source ? s : `${s} <span style="color: gray">(on ${zo.origin} from ${n.source})</span>`,
          ...n.args
        ), ue(this.handler, "ChannelHandler should be set"), this.handler(n);
      }
    } catch (t) {
      C.error(t);
    }
  }
};
a(Yo, "PostMessageTransport");
var rr = Yo;

// src/channels/websocket/index.ts
var { WebSocket: Nf } = v, Ko = class Ko {
  constructor({ url: e, onError: t, page: o }) {
    this.buffer = [];
    this.isReady = !1;
    this.socket = new Nf(e), this.socket.onopen = () => {
      this.isReady = !0, this.flush();
    }, this.socket.onmessage = ({ data: n }) => {
      let i = typeof n == "string" && Ir(n) ? Rt(n) : n;
      ue(this.handler, "WebsocketTransport handler should be set"), this.handler(i);
    }, this.socket.onerror = (n) => {
      t && t(n);
    }, this.socket.onclose = () => {
      ue(this.handler, "WebsocketTransport handler should be set"), this.handler({ type: yo, args: [], from: o || "preview" });
    };
  }
  setHandler(e) {
    this.handler = e;
  }
  send(e) {
    this.isReady ? this.sendNow(e) : this.sendLater(e);
  }
  sendLater(e) {
    this.buffer.push(e);
  }
  sendNow(e) {
    let t = vt(e, {
      maxDepth: 15,
      allowFunction: !1,
      ...v.CHANNEL_OPTIONS
    });
    this.socket.send(t);
  }
  flush() {
    let { buffer: e } = this;
    this.buffer = [], e.forEach((t) => this.send(t));
  }
};
a(Ko, "WebsocketTransport");
var tr = Ko;

// src/channels/index.ts
var { CONFIG_TYPE: kf } = v, Lf = Ee;
function Mf({ page: r, extraTransports: e = [] }) {
  let t = [new rr({ page: r }), ...e];
  if (kf === "DEVELOPMENT") {
    let o = window.location.protocol === "http:" ? "ws" : "wss", { hostname: n, port: i } = window.location, l = `${o}://${n}:${i}/storybook\
-server-channel`;
    t.push(new tr({ url: l, onError: /* @__PURE__ */ a(() => {
    }, "onError"), page: r }));
  }
  return new Ee({ transports: t });
}
a(Mf, "createBrowserChannel");

// src/types/index.ts
var Dr = {};
Ce(Dr, {
  Addon_TypesEnum: () => mi
});

// src/types/modules/addons.ts
var mi = /* @__PURE__ */ ((s) => (s.TAB = "tab", s.PANEL = "panel", s.TOOL = "tool", s.TOOLEXTRA = "toolextra", s.PREVIEW = "preview", s.experimental_PAGE =
"page", s.experimental_SIDEBAR_BOTTOM = "sidebar-bottom", s.experimental_SIDEBAR_TOP = "sidebar-top", s))(mi || {});

// src/preview-api/index.ts
var lt = {};
Ce(lt, {
  DocsContext: () => fe,
  HooksContext: () => ve,
  Preview: () => qe,
  PreviewWeb: () => it,
  PreviewWithSelection: () => Be,
  StoryStore: () => Me,
  UrlStore: () => We,
  WebView: () => ze,
  addons: () => oe,
  applyHooks: () => xt,
  combineArgs: () => ar,
  combineParameters: () => J,
  composeConfigs: () => ur,
  composeStepRunners: () => jt,
  composeStories: () => Rs,
  composeStory: () => Wn,
  createPlaywrightTest: () => As,
  decorateStory: () => Un,
  defaultDecorateStory: () => kt,
  filterArgTypes: () => zr,
  inferControls: () => cr,
  makeDecorator: () => Pi,
  mockChannel: () => At,
  normalizeStory: () => sr,
  prepareMeta: () => Lt,
  prepareStory: () => lr,
  sanitizeStoryContextUpdate: () => Gn,
  setDefaultProjectAnnotations: () => Ts,
  setProjectAnnotations: () => vs,
  simulateDOMContentLoaded: () => st,
  simulatePageLoad: () => Ua,
  sortStoriesV7: () => Is,
  useArgs: () => wi,
  useCallback: () => or,
  useChannel: () => Ai,
  useEffect: () => tn,
  useGlobals: () => _i,
  useMemo: () => Si,
  useParameter: () => xi,
  useReducer: () => Ri,
  useRef: () => Ei,
  useState: () => vi,
  useStoryContext: () => Nr,
  userOrAutoTitle: () => Ps,
  userOrAutoTitleFromSpecifier: () => Yn
});

// src/preview-api/modules/addons/storybook-channel-mock.ts
function At() {
  let r = {
    setHandler: /* @__PURE__ */ a(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ a(() => {
    }, "send")
  };
  return new Ee({ transport: r });
}
a(At, "mockChannel");

// src/preview-api/modules/addons/main.ts
var Qo = class Qo {
  constructor() {
    this.getChannel = /* @__PURE__ */ a(() => {
      if (!this.channel) {
        let e = At();
        return this.setChannel(e), e;
      }
      return this.channel;
    }, "getChannel");
    this.ready = /* @__PURE__ */ a(() => this.promise, "ready");
    this.hasChannel = /* @__PURE__ */ a(() => !!this.channel, "hasChannel");
    this.setChannel = /* @__PURE__ */ a((e) => {
      this.channel = e, this.resolve();
    }, "setChannel");
    this.promise = new Promise((e) => {
      this.resolve = () => e(this.getChannel());
    });
  }
};
a(Qo, "AddonStore");
var Jo = Qo, Xo = "__STORYBOOK_ADDONS_PREVIEW";
function jf() {
  return v[Xo] || (v[Xo] = new Jo()), v[Xo];
}
a(jf, "getAddonsStore");
var oe = jf();

// src/preview-api/modules/addons/hooks.ts
var on = class on {
  constructor() {
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = /* @__PURE__ */ a((e) => {
      e === this.currentContext?.id && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener");
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(),
    this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName =
    null, this.hasUpdates = !1, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((e) => {
      e.destroy && e.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let e = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, e;
  }
  triggerEffects() {
    this.prevEffects.forEach((e) => {
      !this.currentEffects.includes(e) && e.destroy && e.destroy();
    }), this.currentEffects.forEach((e) => {
      this.prevEffects.includes(e) || (e.destroy = e.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), oe.getChannel().on(Ke, this.renderListener);
  }
  removeRenderListeners() {
    oe.getChannel().removeListener(Ke, this.renderListener);
  }
};
a(on, "HooksContext");
var ve = on;
function hi(r) {
  let e = /* @__PURE__ */ a((...t) => {
    let { hooks: o } = typeof t[0] == "function" ? t[1] : t[0], n = o.currentPhase, i = o.currentHooks, l = o.nextHookIndex, c = o.currentDecoratorName;
    o.currentDecoratorName = r.name, o.prevMountedDecorators.has(r) ? (o.currentPhase = "UPDATE", o.currentHooks = o.hookListsMap.get(r) || []) :
    (o.currentPhase = "MOUNT", o.currentHooks = [], o.hookListsMap.set(r, o.currentHooks), o.prevMountedDecorators.add(r)), o.nextHookIndex =
    0;
    let s = v.STORYBOOK_HOOKS_CONTEXT;
    v.STORYBOOK_HOOKS_CONTEXT = o;
    let p = r(...t);
    if (v.STORYBOOK_HOOKS_CONTEXT = s, o.currentPhase === "UPDATE" && o.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return o.currentPhase = n, o.currentHooks = i, o.nextHookIndex = l, o.currentDecoratorName = c, p;
  }, "hookified");
  return e.originalFn = r, e;
}
a(hi, "hookify");
var Zo = 0, qf = 25, xt = /* @__PURE__ */ a((r) => (e, t) => {
  let o = r(
    hi(e),
    t.map((n) => hi(n))
  );
  return (n) => {
    let { hooks: i } = n;
    i.prevMountedDecorators ??= /* @__PURE__ */ new Set(), i.mountedDecorators = /* @__PURE__ */ new Set([e, ...t]), i.currentContext = n, i.
    hasUpdates = !1;
    let l = o(n);
    for (Zo = 1; i.hasUpdates; )
      if (i.hasUpdates = !1, i.currentEffects = [], l = o(n), Zo += 1, Zo > qf)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return i.addRenderListeners(), l;
  };
}, "applyHooks"), Bf = /* @__PURE__ */ a((r, e) => r.length === e.length && r.every((t, o) => t === e[o]), "areDepsEqual"), en = /* @__PURE__ */ a(
() => new Error("Storybook preview hooks can only be called inside decorators and story functions."), "invalidHooksError");
function gi() {
  return v.STORYBOOK_HOOKS_CONTEXT || null;
}
a(gi, "getHooksContextOrNull");
function rn() {
  let r = gi();
  if (r == null)
    throw en();
  return r;
}
a(rn, "getHooksContextOrThrow");
function Uf(r, e, t) {
  let o = rn();
  if (o.currentPhase === "MOUNT") {
    t != null && !Array.isArray(t) && C.warn(
      `${r} received a final argument that is not an array (instead, received ${t}). When specified, the final argument must be an array.`
    );
    let n = { name: r, deps: t };
    return o.currentHooks.push(n), e(n), n;
  }
  if (o.currentPhase === "UPDATE") {
    let n = o.getNextHook();
    if (n == null)
      throw new Error("Rendered more hooks than during the previous render.");
    return n.name !== r && C.warn(
      `Storybook has detected a change in the order of Hooks${o.currentDecoratorName ? ` called by ${o.currentDecoratorName}` : ""}. This wi\
ll lead to bugs and errors if not fixed.`
    ), t != null && n.deps == null && C.warn(
      `${r} received a final argument during this render, but not during the previous render. Even though the final argument is optional, it\
s type cannot change between renders.`
    ), t != null && n.deps != null && t.length !== n.deps.length && C.warn(`The final argument passed to ${r} changed size between renders. \
The order and size of this array must remain constant.
Previous: ${n.deps}
Incoming: ${t}`), (t == null || n.deps == null || !Bf(t, n.deps)) && (e(n), n.deps = t), n;
  }
  throw en();
}
a(Uf, "useHook");
function wt(r, e, t) {
  let { memoizedState: o } = Uf(
    r,
    (n) => {
      n.memoizedState = e();
    },
    t
  );
  return o;
}
a(wt, "useMemoLike");
function Si(r, e) {
  return wt("useMemo", r, e);
}
a(Si, "useMemo");
function or(r, e) {
  return wt("useCallback", () => r, e);
}
a(or, "useCallback");
function bi(r, e) {
  return wt(r, () => ({ current: e }), []);
}
a(bi, "useRefLike");
function Ei(r) {
  return bi("useRef", r);
}
a(Ei, "useRef");
function Gf() {
  let r = gi();
  if (r != null && r.currentPhase !== "NONE")
    r.hasUpdates = !0;
  else
    try {
      oe.getChannel().emit(Ar);
    } catch {
      C.warn("State updates of Storybook preview hooks work only in browser");
    }
}
a(Gf, "triggerUpdate");
function Ti(r, e) {
  let t = bi(
    r,
    // @ts-expect-error S type should never be function, but there's no way to tell that to TypeScript
    typeof e == "function" ? e() : e
  ), o = /* @__PURE__ */ a((n) => {
    t.current = typeof n == "function" ? n(t.current) : n, Gf();
  }, "setState");
  return [t.current, o];
}
a(Ti, "useStateLike");
function vi(r) {
  return Ti("useState", r);
}
a(vi, "useState");
function Ri(r, e, t) {
  let o = t != null ? () => t(e) : e, [n, i] = Ti("useReducer", o);
  return [n, /* @__PURE__ */ a((c) => i((s) => r(s, c)), "dispatch")];
}
a(Ri, "useReducer");
function tn(r, e) {
  let t = rn(), o = wt("useEffect", () => ({ create: r }), e);
  t.currentEffects.includes(o) || t.currentEffects.push(o);
}
a(tn, "useEffect");
function Ai(r, e = []) {
  let t = oe.getChannel();
  return tn(() => (Object.entries(r).forEach(([o, n]) => t.on(o, n)), () => {
    Object.entries(r).forEach(
      ([o, n]) => t.removeListener(o, n)
    );
  }), [...Object.keys(r), ...e]), or(t.emit.bind(t), [t]);
}
a(Ai, "useChannel");
function Nr() {
  let { currentContext: r } = rn();
  if (r == null)
    throw en();
  return r;
}
a(Nr, "useStoryContext");
function xi(r, e) {
  let { parameters: t } = Nr();
  if (r)
    return t[r] ?? e;
}
a(xi, "useParameter");
function wi() {
  let r = oe.getChannel(), { id: e, args: t } = Nr(), o = or(
    (i) => r.emit(_r, { storyId: e, updatedArgs: i }),
    [r, e]
  ), n = or(
    (i) => r.emit(xr, { storyId: e, argNames: i }),
    [r, e]
  );
  return [t, o, n];
}
a(wi, "useArgs");
function _i() {
  let r = oe.getChannel(), { globals: e } = Nr(), t = or(
    (o) => r.emit(wr, { globals: o }),
    [r]
  );
  return [e, t];
}
a(_i, "useGlobals");

// src/preview-api/modules/addons/make-decorator.ts
var Pi = /* @__PURE__ */ a(({
  name: r,
  parameterName: e,
  wrapper: t,
  skipIfNoParametersOrOptions: o = !1
}) => {
  let n = /* @__PURE__ */ a((i) => (l, c) => {
    let s = c.parameters && c.parameters[e];
    return s && s.disable || o && !i && !s ? l(c) : t(l, c, {
      options: i,
      parameters: s
    });
  }, "decorator");
  return (...i) => typeof i[0] == "function" ? n()(...i) : (...l) => {
    if (l.length > 1)
      return i.length > 1 ? n(i)(...l) : n(...i)(...l);
    throw new Error(
      `Passing stories directly into ${r}() is not allowed,
        instead use addDecorator(${r}) and pass options with the '${e}' parameter`
    );
  };
}, "makeDecorator");

// src/preview-errors.ts
var $r = {};
Ce($r, {
  CalledExtractOnStoreError: () => Lr,
  CalledPreviewMethodBeforeInitializationError: () => z,
  Category: () => Ci,
  EmptyIndexError: () => Br,
  ImplicitActionsDuringRendering: () => nn,
  MdxFileWithNoCsfReferencesError: () => qr,
  MissingRenderToCanvasError: () => Mr,
  MissingStoryAfterHmrError: () => kr,
  MissingStoryFromCsfFileError: () => Gr,
  MountMustBeDestructuredError: () => De,
  NextJsSharpError: () => an,
  NextjsRouterMocksNotAvailable: () => sn,
  NoRenderFunctionError: () => Hr,
  NoStoryMatchError: () => Ur,
  NoStoryMountedError: () => Wr,
  StoryIndexFetchError: () => jr,
  StoryStoreAccessedBeforeInitializationError: () => Vr,
  UnknownArgTypesError: () => ln,
  UnsupportedViewportDimensionError: () => cn
});

// ../node_modules/ts-dedent/esm/index.js
function _(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  var o = Array.from(typeof r == "string" ? [r] : r);
  o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = o.reduce(function(c, s) {
    var p = s.match(/\n([\t ]+|(?!\s).)/g);
    return p ? c.concat(p.map(function(u) {
      var y, d;
      return (d = (y = u.match(/[\t ]/g)) === null || y === void 0 ? void 0 : y.length) !== null && d !== void 0 ? d : 0;
    })) : c;
  }, []);
  if (n.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    o = o.map(function(c) {
      return c.replace(i, `
`);
    });
  }
  o[0] = o[0].replace(/^\r?\n/, "");
  var l = o[0];
  return e.forEach(function(c, s) {
    var p = l.match(/(?:^|\n)( *)$/), u = p ? p[1] : "", y = c;
    typeof c == "string" && c.includes(`
`) && (y = String(c).split(`
`).map(function(d, h) {
      return h === 0 ? d : "" + u + d;
    }).join(`
`)), l += y + o[s + 1];
  }), l;
}
a(_, "dedent");

// src/storybook-error.ts
function Oi({
  code: r,
  category: e
}) {
  let t = String(r).padStart(4, "0");
  return `SB_${e}_${t}`;
}
a(Oi, "parseErrorCode");
var _t = class _t extends Error {
  constructor(t) {
    super(_t.getFullMessage(t));
    /**
     * Data associated with the error. Used to provide additional information in the error message or
     * to be passed to telemetry.
     */
    this.data = {};
    /** Flag used to easily determine if the error originates from Storybook. */
    this.fromStorybook = !0;
    this.category = t.category, this.documentation = t.documentation ?? !1, this.code = t.code;
  }
  get fullErrorCode() {
    return Oi({ code: this.code, category: this.category });
  }
  /** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
  get name() {
    let t = this.constructor.name;
    return `${this.fullErrorCode} (${t})`;
  }
  /** Generates the error message along with additional documentation link (if applicable). */
  static getFullMessage({
    documentation: t,
    code: o,
    category: n,
    message: i
  }) {
    let l;
    return t === !0 ? l = `https://storybook.js.org/error/${Oi({ code: o, category: n })}` : typeof t == "string" ? l = t : Array.isArray(t) &&
    (l = `
${t.map((c) => `	- ${c}`).join(`
`)}`), `${i}${l != null ? `

More info: ${l}
` : ""}`;
  }
};
a(_t, "StorybookError");
var B = _t;

// src/preview-errors.ts
var Ci = /* @__PURE__ */ ((R) => (R.BLOCKS = "BLOCKS", R.DOCS_TOOLS = "DOCS-TOOLS", R.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER", R.PREVIEW_CHANNELS =
"PREVIEW_CHANNELS", R.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS", R.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER", R.PREVIEW_API = "PREVIEW\
_API", R.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM", R.PREVIEW_ROUTER = "PREVIEW_ROUTER", R.PREVIEW_THEMING = "PREVIEW_THEMING", R.RENDERER_HTML =
"RENDERER_HTML", R.RENDERER_PREACT = "RENDERER_PREACT", R.RENDERER_REACT = "RENDERER_REACT", R.RENDERER_SERVER = "RENDERER_SERVER", R.RENDERER_SVELTE =
"RENDERER_SVELTE", R.RENDERER_VUE = "RENDERER_VUE", R.RENDERER_VUE3 = "RENDERER_VUE3", R.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS",
R.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS", R.ADDON_VITEST = "ADDON_VITEST", R))(Ci || {}), pn = class pn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 1,
      message: _`
        Couldn't find story matching id '${t.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${t.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`
    });
    this.data = t;
  }
};
a(pn, "MissingStoryAfterHmrError");
var kr = pn, un = class un extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-\
for-example-in-the-play-function",
      message: _`
        We detected that you use an implicit action arg while ${t.phase} of your story.  
        ${t.deprecated ? `
This is deprecated and won't work in Storybook 8 anymore.
` : ""}
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${t.name}: fn()
          }`
    });
    this.data = t;
  }
};
a(un, "ImplicitActionsDuringRendering");
var nn = un, dn = class dn extends B {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 3,
      message: _`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`
    });
  }
};
a(dn, "CalledExtractOnStoreError");
var Lr = dn, fn = class fn extends B {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 4,
      message: _`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field"
    });
  }
};
a(fn, "MissingRenderToCanvasError");
var Mr = fn, yn = class yn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 5,
      message: _`
        Called \`Preview.${t.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${t.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`
    });
    this.data = t;
  }
};
a(yn, "CalledPreviewMethodBeforeInitializationError");
var z = yn, mn = class mn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 6,
      message: _`
        Error fetching \`/index.json\`:
        
        ${t.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`
    });
    this.data = t;
  }
};
a(mn, "StoryIndexFetchError");
var jr = mn, hn = class hn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 7,
      message: _`
        Tried to render docs entry ${t.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`
    });
    this.data = t;
  }
};
a(hn, "MdxFileWithNoCsfReferencesError");
var qr = hn, gn = class gn extends B {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 8,
      message: _`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`
    });
  }
};
a(gn, "EmptyIndexError");
var Br = gn, Sn = class Sn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 9,
      message: _`
        Couldn't find story matching '${t.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`
    });
    this.data = t;
  }
};
a(Sn, "NoStoryMatchError");
var Ur = Sn, bn = class bn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 10,
      message: _`
        Couldn't find story matching id '${t.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`
    });
    this.data = t;
  }
};
a(bn, "MissingStoryFromCsfFileError");
var Gr = bn, En = class En extends B {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 11,
      message: _`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`
    });
  }
};
a(En, "StoryStoreAccessedBeforeInitializationError");
var Vr = En, Tn = class Tn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 12,
      message: _`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${t.playFunction}`
    });
    this.data = t;
  }
};
a(Tn, "MountMustBeDestructuredError");
var De = Tn, vn = class vn extends B {
  constructor(t) {
    super({
      category: "PREVIEW_API",
      code: 14,
      message: _`
        No render function available for storyId '${t.id}'
      `
    });
    this.data = t;
  }
};
a(vn, "NoRenderFunctionError");
var Hr = vn, Rn = class Rn extends B {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 15,
      message: _`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `
    });
  }
};
a(Rn, "NoStoryMountedError");
var Wr = Rn, An = class An extends B {
  constructor() {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 1,
      documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
      message: _`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `
    });
  }
};
a(An, "NextJsSharpError");
var an = An, xn = class xn extends B {
  constructor(t) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 2,
      message: _`
        Tried to access router mocks from "${t.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `
    });
    this.data = t;
  }
};
a(xn, "NextjsRouterMocksNotAvailable");
var sn = xn, wn = class wn extends B {
  constructor(t) {
    super({
      category: "DOCS-TOOLS",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/issues/26606",
      message: _`
        There was a failure when generating detailed ArgTypes in ${t.language} for:
        ${JSON.stringify(t.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `
    });
    this.data = t;
  }
};
a(wn, "UnknownArgTypesError");
var ln = wn, _n = class _n extends B {
  constructor(t) {
    super({
      category: "ADDON_VITEST",
      code: 1,
      // TODO: Add documentation about viewports support
      // documentation: '',
      message: _`
        Encountered an unsupported value "${t.value}" when setting the viewport ${t.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `
    });
    this.data = t;
  }
};
a(_n, "UnsupportedViewportDimensionError");
var cn = _n;

// ../node_modules/es-toolkit/dist/object/omitBy.mjs
function Pn(r, e) {
  let t = {}, o = Object.entries(r);
  for (let n = 0; n < o.length; n++) {
    let [i, l] = o[n];
    e(l, i) || (t[i] = l);
  }
  return t;
}
a(Pn, "omitBy");

// ../node_modules/es-toolkit/dist/object/pick.mjs
function On(r, e) {
  let t = {};
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
a(On, "pick");

// ../node_modules/es-toolkit/dist/object/pickBy.mjs
function Cn(r, e) {
  let t = {}, o = Object.entries(r);
  for (let n = 0; n < o.length; n++) {
    let [i, l] = o[n];
    e(l, i) && (t[i] = l);
  }
  return t;
}
a(Cn, "pickBy");

// ../node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function X(r) {
  if (typeof r != "object" || r == null)
    return !1;
  if (Object.getPrototypeOf(r) === null)
    return !0;
  if (r.toString() !== "[object Object]")
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e;
}
a(X, "isPlainObject");

// ../node_modules/es-toolkit/dist/object/mapValues.mjs
function ne(r, e) {
  let t = {}, o = Object.keys(r);
  for (let n = 0; n < o.length; n++) {
    let i = o[n], l = r[i];
    t[i] = e(l, i, r);
  }
  return t;
}
a(ne, "mapValues");

// ../node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var Ii = "[object RegExp]", Fi = "[object String]", Di = "[object Number]", Ni = "[object Boolean]", In = "[object Arguments]", ki = "[objec\
t Symbol]", Li = "[object Date]", Mi = "[object Map]", ji = "[object Set]", qi = "[object Array]", Bi = "[object Function]", Ui = "[object A\
rrayBuffer]", Pt = "[object Object]", Gi = "[object Error]", Vi = "[object DataView]", Hi = "[object Uint8Array]", Wi = "[object Uint8Clampe\
dArray]", $i = "[object Uint16Array]", zi = "[object Uint32Array]", Yi = "[object BigUint64Array]", Ki = "[object Int8Array]", Xi = "[object\
 Int16Array]", Ji = "[object Int32Array]", Qi = "[object BigInt64Array]", Zi = "[object Float32Array]", es = "[object Float64Array]";

// ../node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function Fn(r) {
  return Object.getOwnPropertySymbols(r).filter((e) => Object.prototype.propertyIsEnumerable.call(r, e));
}
a(Fn, "getSymbols");

// ../node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function Dn(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
a(Dn, "getTag");

// ../node_modules/es-toolkit/dist/predicate/isEqual.mjs
function Nn(r, e) {
  if (typeof r == typeof e)
    switch (typeof r) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return r === e;
      case "number":
        return r === e || Object.is(r, e);
      case "function":
        return r === e;
      case "object":
        return de(r, e);
    }
  return de(r, e);
}
a(Nn, "isEqual");
function de(r, e, t) {
  if (Object.is(r, e))
    return !0;
  let o = Dn(r), n = Dn(e);
  if (o === In && (o = Pt), n === In && (n = Pt), o !== n)
    return !1;
  switch (o) {
    case Fi:
      return r.toString() === e.toString();
    case Di: {
      let c = r.valueOf(), s = e.valueOf();
      return c === s || Number.isNaN(c) && Number.isNaN(s);
    }
    case Ni:
    case Li:
    case ki:
      return Object.is(r.valueOf(), e.valueOf());
    case Ii:
      return r.source === e.source && r.flags === e.flags;
    case Bi:
      return r === e;
  }
  t = t ?? /* @__PURE__ */ new Map();
  let i = t.get(r), l = t.get(e);
  if (i != null && l != null)
    return i === e;
  t.set(r, e), t.set(e, r);
  try {
    switch (o) {
      case Mi: {
        if (r.size !== e.size)
          return !1;
        for (let [c, s] of r.entries())
          if (!e.has(c) || !de(s, e.get(c), t))
            return !1;
        return !0;
      }
      case ji: {
        if (r.size !== e.size)
          return !1;
        let c = Array.from(r.values()), s = Array.from(e.values());
        for (let p = 0; p < c.length; p++) {
          let u = c[p], y = s.findIndex((d) => de(u, d, t));
          if (y === -1)
            return !1;
          s.splice(y, 1);
        }
        return !0;
      }
      case qi:
      case Hi:
      case Wi:
      case $i:
      case zi:
      case Yi:
      case Ki:
      case Xi:
      case Ji:
      case Qi:
      case Zi:
      case es: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r) !== Buffer.isBuffer(e) || r.length !== e.length)
          return !1;
        for (let c = 0; c < r.length; c++)
          if (!de(r[c], e[c], t))
            return !1;
        return !0;
      }
      case Ui:
        return r.byteLength !== e.byteLength ? !1 : de(new Uint8Array(r), new Uint8Array(e), t);
      case Vi:
        return r.byteLength !== e.byteLength || r.byteOffset !== e.byteOffset ? !1 : de(r.buffer, e.buffer, t);
      case Gi:
        return r.name === e.name && r.message === e.message;
      case Pt: {
        if (!(de(r.constructor, e.constructor, t) || X(r) && X(e)))
          return !1;
        let s = [...Object.keys(r), ...Fn(r)], p = [...Object.keys(e), ...Fn(e)];
        if (s.length !== p.length)
          return !1;
        for (let u = 0; u < s.length; u++) {
          let y = s[u], d = r[y];
          if (!Object.prototype.hasOwnProperty.call(e, y))
            return !1;
          let h = e[y];
          if (!de(d, h, t))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    t.delete(r), t.delete(e);
  }
}
a(de, "areObjectsEqual");

// src/preview-api/modules/store/StoryStore.ts
var qt = Se(St(), 1);

// src/preview-api/modules/store/args.ts
var nr = Symbol("incompatible"), kn = /* @__PURE__ */ a((r, e) => {
  let t = e.type;
  if (r == null || !t || e.mapping)
    return r;
  switch (t.name) {
    case "string":
      return String(r);
    case "enum":
      return r;
    case "number":
      return Number(r);
    case "boolean":
      return String(r) === "true";
    case "array":
      return !t.value || !Array.isArray(r) ? nr : r.reduce((o, n, i) => {
        let l = kn(n, { type: t.value });
        return l !== nr && (o[i] = l), o;
      }, new Array(r.length));
    case "object":
      return typeof r == "string" || typeof r == "number" ? r : !t.value || typeof r != "object" ? nr : Object.entries(r).reduce((o, [n, i]) => {
        let l = kn(i, { type: t.value[n] });
        return l === nr ? o : Object.assign(o, { [n]: l });
      }, {});
    default:
      return nr;
  }
}, "map"), rs = /* @__PURE__ */ a((r, e) => Object.entries(r).reduce((t, [o, n]) => {
  if (!e[o])
    return t;
  let i = kn(n, e[o]);
  return i === nr ? t : Object.assign(t, { [o]: i });
}, {}), "mapArgsToTypes"), ar = /* @__PURE__ */ a((r, e) => Array.isArray(r) && Array.isArray(e) ? e.reduce(
  (t, o, n) => (t[n] = ar(r[n], e[n]), t),
  [...r]
).filter((t) => t !== void 0) : !X(r) || !X(e) ? e : Object.keys({ ...r, ...e }).reduce((t, o) => {
  if (o in e) {
    let n = ar(r[o], e[o]);
    n !== void 0 && (t[o] = n);
  } else
    t[o] = r[o];
  return t;
}, {}), "combineArgs"), ts = /* @__PURE__ */ a((r, e) => Object.entries(e).reduce((t, [o, { options: n }]) => {
  function i() {
    return o in r && (t[o] = r[o]), t;
  }
  if (a(i, "allowArg"), !n)
    return i();
  if (!Array.isArray(n))
    return M.error(_`
        Invalid argType: '${o}.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `), i();
  if (n.some((y) => y && ["object", "function"].includes(typeof y)))
    return M.error(_`
        Invalid argType: '${o}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `), i();
  let l = Array.isArray(r[o]), c = l && r[o].findIndex((y) => !n.includes(y)), s = l && c === -1;
  if (r[o] === void 0 || n.includes(r[o]) || s)
    return i();
  let p = l ? `${o}[${c}]` : o, u = n.map((y) => typeof y == "string" ? `'${y}'` : String(y)).join(", ");
  return M.warn(`Received illegal value for '${p}'. Supported options: ${u}`), t;
}, {}), "validateOptions"), Ne = Symbol("Deeply equal"), ir = /* @__PURE__ */ a((r, e) => {
  if (typeof r != typeof e)
    return e;
  if (Nn(r, e))
    return Ne;
  if (Array.isArray(r) && Array.isArray(e)) {
    let t = e.reduce((o, n, i) => {
      let l = ir(r[i], n);
      return l !== Ne && (o[i] = l), o;
    }, new Array(e.length));
    return e.length >= r.length ? t : t.concat(new Array(r.length - e.length).fill(void 0));
  }
  return X(r) && X(e) ? Object.keys({ ...r, ...e }).reduce((t, o) => {
    let n = ir(r?.[o], e?.[o]);
    return n === Ne ? t : Object.assign(t, { [o]: n });
  }, {}) : e;
}, "deepDiff"), Ln = "UNTARGETED";
function os({
  args: r,
  argTypes: e
}) {
  let t = {};
  return Object.entries(r).forEach(([o, n]) => {
    let { target: i = Ln } = e[o] || {};
    t[i] = t[i] || {}, t[i][o] = n;
  }), t;
}
a(os, "groupArgsByTarget");

// src/preview-api/modules/store/ArgsStore.ts
function Vf(r) {
  return Object.keys(r).forEach((e) => r[e] === void 0 && delete r[e]), r;
}
a(Vf, "deleteUndefined");
var Mn = class Mn {
  constructor() {
    this.initialArgsByStoryId = {};
    this.argsByStoryId = {};
  }
  get(e) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    return this.argsByStoryId[e];
  }
  setInitial(e) {
    if (!this.initialArgsByStoryId[e.id])
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs;
    else if (this.initialArgsByStoryId[e.id] !== e.initialArgs) {
      let t = ir(this.initialArgsByStoryId[e.id], this.argsByStoryId[e.id]);
      this.initialArgsByStoryId[e.id] = e.initialArgs, this.argsByStoryId[e.id] = e.initialArgs, t !== Ne && this.updateFromDelta(e, t);
    }
  }
  updateFromDelta(e, t) {
    let o = ts(t, e.argTypes);
    this.argsByStoryId[e.id] = ar(this.argsByStoryId[e.id], o);
  }
  updateFromPersisted(e, t) {
    let o = rs(t, e.argTypes);
    return this.updateFromDelta(e, o);
  }
  update(e, t) {
    if (!(e in this.argsByStoryId))
      throw new Error(`No args known for ${e} -- has it been rendered yet?`);
    this.argsByStoryId[e] = Vf({
      ...this.argsByStoryId[e],
      ...t
    });
  }
};
a(Mn, "ArgsStore");
var Ot = Mn;

// src/preview-api/modules/store/csf/getValuesFromArgTypes.ts
var Ct = /* @__PURE__ */ a((r = {}) => Object.entries(r).reduce((e, [t, { defaultValue: o }]) => (typeof o < "u" && (e[t] = o), e), {}), "ge\
tValuesFromArgTypes");

// src/preview-api/modules/store/GlobalsStore.ts
var jn = class jn {
  constructor({
    globals: e = {},
    globalTypes: t = {}
  }) {
    this.set({ globals: e, globalTypes: t });
  }
  set({ globals: e = {}, globalTypes: t = {} }) {
    let o = this.initialGlobals && ir(this.initialGlobals, this.globals);
    this.allowedGlobalNames = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
    let n = Ct(t);
    this.initialGlobals = { ...n, ...e }, this.globals = this.initialGlobals, o && o !== Ne && this.updateFromPersisted(o);
  }
  filterAllowedGlobals(e) {
    return Object.entries(e).reduce((t, [o, n]) => (this.allowedGlobalNames.has(o) ? t[o] = n : C.warn(
      `Attempted to set a global (${o}) that is not defined in initial globals or globalTypes`
    ), t), {});
  }
  updateFromPersisted(e) {
    let t = this.filterAllowedGlobals(e);
    this.globals = { ...this.globals, ...t };
  }
  get() {
    return this.globals;
  }
  update(e) {
    this.globals = { ...this.globals, ...this.filterAllowedGlobals(e) };
  }
};
a(jn, "GlobalsStore");
var It = jn;

// src/preview-api/modules/store/StoryIndexStore.ts
var ns = Se(St(), 1);
var Hf = (0, ns.default)(1)(
  (r) => Object.values(r).reduce(
    (e, t) => (e[t.importPath] = e[t.importPath] || t, e),
    {}
  )
), qn = class qn {
  constructor({ entries: e } = { v: 5, entries: {} }) {
    this.entries = e;
  }
  entryFromSpecifier(e) {
    let t = Object.values(this.entries);
    if (e === "*")
      return t[0];
    if (typeof e == "string")
      return this.entries[e] ? this.entries[e] : t.find((i) => i.id.startsWith(e));
    let { name: o, title: n } = e;
    return t.find((i) => i.name === o && i.title === n);
  }
  storyIdToEntry(e) {
    let t = this.entries[e];
    if (!t)
      throw new kr({ storyId: e });
    return t;
  }
  importPathToEntry(e) {
    return Hf(this.entries)[e];
  }
};
a(qn, "StoryIndexStore");
var Ft = qn;

// src/preview-api/modules/store/csf/normalizeInputTypes.ts
var Wf = /* @__PURE__ */ a((r) => typeof r == "string" ? { name: r } : r, "normalizeType"), $f = /* @__PURE__ */ a((r) => typeof r == "strin\
g" ? { type: r } : r, "normalizeControl"), zf = /* @__PURE__ */ a((r, e) => {
  let { type: t, control: o, ...n } = r, i = {
    name: e,
    ...n
  };
  return t && (i.type = Wf(t)), o ? i.control = $f(o) : o === !1 && (i.control = { disable: !0 }), i;
}, "normalizeInputType"), ke = /* @__PURE__ */ a((r) => ne(r, zf), "normalizeInputTypes");

// ../node_modules/@storybook/csf/dist/index.mjs
var Yf = Object.create, ls = Object.defineProperty, Kf = Object.getOwnPropertyDescriptor, Xf = Object.getOwnPropertyNames, Jf = Object.getPrototypeOf,
Qf = Object.prototype.hasOwnProperty, Zf = /* @__PURE__ */ a((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "v"), ey = /* @__PURE__ */ a(
(r, e, t, o) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of Xf(e)) !Qf.call(r, n) && n !== t && ls(r, n, { get: /* @__PURE__ */ a(
  () => e[n], "get"), enumerable: !(o = Kf(e, n)) || o.enumerable });
  return r;
}, "E"), ry = /* @__PURE__ */ a((r, e, t) => (t = r != null ? Yf(Jf(r)) : {}, ey(e || !r || !r.__esModule ? ls(t, "default", { value: r, enumerable: !0 }) :
t, r)), "I"), ty = Zf((r) => {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.isEqual = /* @__PURE__ */ function() {
    var e = Object.prototype.toString, t = Object.getPrototypeOf, o = Object.getOwnPropertySymbols ? function(n) {
      return Object.keys(n).concat(Object.getOwnPropertySymbols(n));
    } : Object.keys;
    return function(n, i) {
      return (/* @__PURE__ */ a(function l(c, s, p) {
        var u, y, d, h = e.call(c), m = e.call(s);
        if (c === s) return !0;
        if (c == null || s == null) return !1;
        if (p.indexOf(c) > -1 && p.indexOf(s) > -1) return !0;
        if (p.push(c, s), h != m || (u = o(c), y = o(s), u.length != y.length || u.some(function(S) {
          return !l(c[S], s[S], p);
        }))) return !1;
        switch (h.slice(8, -1)) {
          case "Symbol":
            return c.valueOf() == s.valueOf();
          case "Date":
          case "Number":
            return +c == +s || +c != +c && +s != +s;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + c == "" + s;
          case "Set":
          case "Map":
            u = c.entries(), y = s.entries();
            do
              if (!l((d = u.next()).value, y.next().value, p)) return !1;
            while (!d.done);
            return !0;
          case "ArrayBuffer":
            c = new Uint8Array(c), s = new Uint8Array(s);
          case "DataView":
            c = new Uint8Array(c.buffer), s = new Uint8Array(s.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (c.length != s.length) return !1;
            for (d = 0; d < c.length; d++) if ((d in c || d in s) && (d in c != d in s || !l(c[d], s[d], p))) return !1;
            return !0;
          case "Object":
            return l(t(c), t(s), p);
          default:
            return !1;
        }
      }, "i"))(n, i, []);
    };
  }();
});
function oy(r) {
  return r.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (e, t, o, n) => `${t} ${o}${n}`).replace(
  /([a-z])([A-Z])/g, (e, t, o) => `${t} ${o}`).replace(/([a-z])([0-9])/gi, (e, t, o) => `${t} ${o}`).replace(/([0-9])([a-z])/gi, (e, t, o) => `${t}\
 ${o}`).replace(/(\s|^)(\w)/g, (e, t, o) => `${t}${o.toUpperCase()}`).replace(/ +/g, " ").trim();
}
a(oy, "R");
var as = ry(ty()), cs = /* @__PURE__ */ a((r) => r.map((e) => typeof e < "u").filter(Boolean).length, "S"), ny = /* @__PURE__ */ a((r, e) => {
  let { exists: t, eq: o, neq: n, truthy: i } = r;
  if (cs([t, o, n, i]) > 1) throw new Error(`Invalid conditional test ${JSON.stringify({ exists: t, eq: o, neq: n })}`);
  if (typeof o < "u") return (0, as.isEqual)(e, o);
  if (typeof n < "u") return !(0, as.isEqual)(e, n);
  if (typeof t < "u") {
    let l = typeof e < "u";
    return t ? l : !l;
  }
  return typeof i > "u" || i ? !!e : !e;
}, "k"), ps = /* @__PURE__ */ a((r, e, t) => {
  if (!r.if) return !0;
  let { arg: o, global: n } = r.if;
  if (cs([o, n]) !== 1) throw new Error(`Invalid conditional value ${JSON.stringify({ arg: o, global: n })}`);
  let i = o ? e[o] : t[n];
  return ny(r.if, i);
}, "P"), Bn = /* @__PURE__ */ a((r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
/-+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), "O"), is = /* @__PURE__ */ a((r, e) => {
  let t = Bn(r);
  if (t === "") throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);
  return t;
}, "m"), us = /* @__PURE__ */ a((r, e) => `${is(r, "kind")}${e ? `--${is(e, "name")}` : ""}`, "G"), ds = /* @__PURE__ */ a((r) => oy(r), "N");
function ss(r, e) {
  return Array.isArray(e) ? e.includes(r) : r.match(e);
}
a(ss, "f");
function Dt(r, { includeStories: e, excludeStories: t }) {
  return r !== "__esModule" && (!e || ss(r, e)) && (!t || !ss(r, t));
}
a(Dt, "M");
var fs = /* @__PURE__ */ a((...r) => {
  let e = r.reduce((t, o) => (o.startsWith("!") ? t.delete(o.slice(1)) : t.add(o), t), /* @__PURE__ */ new Set());
  return Array.from(e);
}, "z");

// src/preview-api/modules/store/csf/normalizeArrays.ts
var j = /* @__PURE__ */ a((r) => Array.isArray(r) ? r : r ? [r] : [], "normalizeArrays");

// src/preview-api/modules/store/csf/normalizeStory.ts
var ay = _`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function sr(r, e, t) {
  let o = e, n = typeof e == "function" ? e : null, { story: i } = o;
  i && (C.debug("deprecated story", i), ae(ay));
  let l = ds(r), c = typeof o != "function" && o.name || o.storyName || i?.name || l, s = [
    ...j(o.decorators),
    ...j(i?.decorators)
  ], p = { ...i?.parameters, ...o.parameters }, u = { ...i?.args, ...o.args }, y = { ...i?.argTypes, ...o.argTypes }, d = [...j(o.loaders), ...j(
  i?.loaders)], h = [
    ...j(o.beforeEach),
    ...j(i?.beforeEach)
  ], { render: m, play: S, tags: g = [], globals: E = {} } = o, b = p.__id || us(t.id, l);
  return {
    moduleExport: e,
    id: b,
    name: c,
    tags: g,
    decorators: s,
    parameters: p,
    args: u,
    argTypes: ke(y),
    loaders: d,
    beforeEach: h,
    globals: E,
    ...m && { render: m },
    ...n && { userStoryFn: n },
    ...S && { play: S }
  };
}
a(sr, "normalizeStory");

// src/preview-api/modules/store/csf/normalizeComponentAnnotations.ts
function Nt(r, e = r.title, t) {
  let { id: o, argTypes: n } = r;
  return {
    id: Bn(o || e),
    ...r,
    title: e,
    ...n && { argTypes: ke(n) },
    parameters: {
      fileName: t,
      ...r.parameters
    }
  };
}
a(Nt, "normalizeComponentAnnotations");

// src/preview-api/modules/store/csf/processCSFFile.ts
var iy = /* @__PURE__ */ a((r) => {
  let { globals: e, globalTypes: t } = r;
  (e || t) && C.error(
    "Global args/argTypes can only be set globally",
    JSON.stringify({
      globals: e,
      globalTypes: t
    })
  );
}, "checkGlobals"), sy = /* @__PURE__ */ a((r) => {
  let { options: e } = r;
  e?.storySort && C.error("The storySort option parameter can only be set globally");
}, "checkStorySort"), ys = /* @__PURE__ */ a((r) => {
  r && (iy(r), sy(r));
}, "checkDisallowedParameters");
function ms(r, e, t) {
  let { default: o, __namedExportsOrder: n, ...i } = r, l = Nt(
    o,
    t,
    e
  );
  ys(l.parameters);
  let c = { meta: l, stories: {}, moduleExports: r };
  return Object.keys(i).forEach((s) => {
    if (Dt(s, l)) {
      let p = sr(s, i[s], l);
      ys(p.parameters), c.stories[p.id] = p;
    }
  }), c;
}
a(ms, "processCSFFile");

// src/preview-api/modules/preview-web/render/mount-utils.ts
function gs(r) {
  return r != null && ly(r).includes("mount");
}
a(gs, "mountDestructured");
function ly(r) {
  let e = r.toString().match(/[^(]*\(([^)]*)/);
  if (!e)
    return [];
  let t = hs(e[1]);
  if (!t.length)
    return [];
  let o = t[0];
  return o.startsWith("{") && o.endsWith("}") ? hs(o.slice(1, -1).replace(/\s/g, "")).map((i) => i.replace(/:.*|=.*/g, "")) : [];
}
a(ly, "getUsedProps");
function hs(r) {
  let e = [], t = [], o = 0;
  for (let i = 0; i < r.length; i++)
    if (r[i] === "{" || r[i] === "[")
      t.push(r[i] === "{" ? "}" : "]");
    else if (r[i] === t[t.length - 1])
      t.pop();
    else if (!t.length && r[i] === ",") {
      let l = r.substring(o, i).trim();
      l && e.push(l), o = i + 1;
    }
  let n = r.substring(o).trim();
  return n && e.push(n), e;
}
a(hs, "splitByComma");

// src/preview-api/modules/store/decorators.ts
function Un(r, e, t) {
  let o = t(r);
  return (n) => e(o, n);
}
a(Un, "decorateStory");
function Gn({
  componentId: r,
  title: e,
  kind: t,
  id: o,
  name: n,
  story: i,
  parameters: l,
  initialArgs: c,
  argTypes: s,
  ...p
} = {}) {
  return p;
}
a(Gn, "sanitizeStoryContextUpdate");
function kt(r, e) {
  let t = {}, o = /* @__PURE__ */ a((i) => (l) => {
    if (!t.value)
      throw new Error("Decorated function called without init");
    return t.value = {
      ...t.value,
      ...Gn(l)
    }, i(t.value);
  }, "bindWithContext"), n = e.reduce(
    (i, l) => Un(i, l, o),
    r
  );
  return (i) => (t.value = i, n(i));
}
a(kt, "defaultDecorateStory");

// src/preview-api/modules/store/parameters.ts
var J = /* @__PURE__ */ a((...r) => {
  let e = {}, t = r.filter(Boolean), o = t.reduce((n, i) => (Object.entries(i).forEach(([l, c]) => {
    let s = n[l];
    Array.isArray(c) || typeof s > "u" ? n[l] = c : X(c) && X(s) ? e[l] = !0 : typeof c < "u" && (n[l] = c);
  }), n), {});
  return Object.keys(e).forEach((n) => {
    let i = t.filter(Boolean).map((l) => l[n]).filter((l) => typeof l < "u");
    i.every((l) => X(l)) ? o[n] = J(...i) : o[n] = i[i.length - 1];
  }), o;
}, "combineParameters");

// src/preview-api/modules/store/csf/prepareStory.ts
function lr(r, e, t) {
  let { moduleExport: o, id: n, name: i } = r || {}, l = Ss(
    r,
    e,
    t
  ), c = /* @__PURE__ */ a(async (x) => {
    let P = {};
    for (let L of [
      ..."__STORYBOOK_TEST_LOADERS__" in v && Array.isArray(v.__STORYBOOK_TEST_LOADERS__) ? [v.__STORYBOOK_TEST_LOADERS__] : [],
      j(t.loaders),
      j(e.loaders),
      j(r.loaders)
    ]) {
      if (x.abortSignal.aborted)
        return P;
      let F = await Promise.all(L.map((G) => G(x)));
      Object.assign(P, ...F);
    }
    return P;
  }, "applyLoaders"), s = /* @__PURE__ */ a(async (x) => {
    let P = new Array();
    for (let L of [
      ...j(t.beforeEach),
      ...j(e.beforeEach),
      ...j(r.beforeEach)
    ]) {
      if (x.abortSignal.aborted)
        return P;
      let F = await L(x);
      F && P.push(F);
    }
    return P;
  }, "applyBeforeEach"), p = /* @__PURE__ */ a((x) => x.originalStoryFn(x.args, x), "undecoratedStoryFn"), { applyDecorators: u = kt, runStep: y } = t,
  d = [
    ...j(r?.decorators),
    ...j(e?.decorators),
    ...j(t?.decorators)
  ], h = r?.userStoryFn || r?.render || e.render || t.render, m = xt(u)(p, d), S = /* @__PURE__ */ a((x) => m(x), "unboundStoryFn"), g = r?.
  play ?? e?.play, E = gs(g);
  if (!h && !E)
    throw new Hr({ id: n });
  let b = /* @__PURE__ */ a((x) => async () => (await x.renderToCanvas(), x.canvas), "defaultMount"), T = r.mount ?? e.mount ?? t.mount ?? b,
  R = t.testingLibraryRender;
  return {
    storyGlobals: {},
    ...l,
    moduleExport: o,
    id: n,
    name: i,
    story: i,
    originalStoryFn: h,
    undecoratedStoryFn: p,
    unboundStoryFn: S,
    applyLoaders: c,
    applyBeforeEach: s,
    playFunction: g,
    runStep: y,
    mount: T,
    testingLibraryRender: R,
    renderToCanvas: t.renderToCanvas,
    usesMount: E
  };
}
a(lr, "prepareStory");
function Lt(r, e, t) {
  return {
    ...Ss(void 0, r, e),
    moduleExport: t
  };
}
a(Lt, "prepareMeta");
function Ss(r, e, t) {
  let o = ["dev", "test"], n = v.DOCS_OPTIONS?.autodocs === !0 ? ["autodocs"] : [], i = fs(
    ...o,
    ...n,
    ...t.tags ?? [],
    ...e.tags ?? [],
    ...r?.tags ?? []
  ), l = J(
    t.parameters,
    e.parameters,
    r?.parameters
  ), { argTypesEnhancers: c = [], argsEnhancers: s = [] } = t, p = J(
    t.argTypes,
    e.argTypes,
    r?.argTypes
  );
  if (r) {
    let E = r?.userStoryFn || r?.render || e.render || t.render;
    l.__isArgsStory = E && E.length > 0;
  }
  let u = {
    ...t.args,
    ...e.args,
    ...r?.args
  }, y = {
    ...e.globals,
    ...r?.globals
  }, d = {
    componentId: e.id,
    title: e.title,
    kind: e.title,
    // Back compat
    id: r?.id || e.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: r?.name || "__meta",
    story: r?.name || "__meta",
    // Back compat
    component: e.component,
    subcomponents: e.subcomponents,
    tags: i,
    parameters: l,
    initialArgs: u,
    argTypes: p,
    storyGlobals: y
  };
  d.argTypes = c.reduce(
    (E, b) => b({ ...d, argTypes: E }),
    d.argTypes
  );
  let h = { ...u };
  d.initialArgs = s.reduce(
    (E, b) => ({
      ...E,
      ...b({
        ...d,
        initialArgs: E
      })
    }),
    h
  );
  let { name: m, story: S, ...g } = d;
  return g;
}
a(Ss, "preparePartialAnnotations");
function Mt(r) {
  let { args: e } = r, t = {
    ...r,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if (v.FEATURES?.argTypeTargetsV7) {
    let i = os(r);
    t = {
      ...r,
      allArgs: r.args,
      argsByTarget: i,
      args: i[Ln] || {}
    };
  }
  let o = Object.entries(t.args).reduce((i, [l, c]) => {
    if (!t.argTypes[l]?.mapping)
      return i[l] = c, i;
    let s = /* @__PURE__ */ a((p) => {
      let u = t.argTypes[l].mapping;
      return u && p in u ? u[p] : p;
    }, "mappingFn");
    return i[l] = Array.isArray(c) ? c.map(s) : s(c), i;
  }, {}), n = Object.entries(o).reduce((i, [l, c]) => {
    let s = t.argTypes[l] || {};
    return ps(s, o, t.globals) && (i[l] = c), i;
  }, {});
  return { ...t, unmappedArgs: e, args: n };
}
a(Mt, "prepareContext");

// src/preview-api/modules/store/inferArgTypes.ts
var Vn = /* @__PURE__ */ a((r, e, t) => {
  let o = typeof r;
  switch (o) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: o };
    default:
      break;
  }
  return r ? t.has(r) ? (C.warn(_`
        We've detected a cycle in arg '${e}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (t.add(r), Array.isArray(r) ? { name: "array", value: r.length > 0 ? Vn(r[0], e, new Set(
  t)) : { name: "other", value: "unknown" } } : { name: "object", value: ne(r, (i) => Vn(i, e, new Set(t))) }) : { name: "object", value: {} };
}, "inferType"), Hn = /* @__PURE__ */ a((r) => {
  let { id: e, argTypes: t = {}, initialArgs: o = {} } = r, n = ne(o, (l, c) => ({
    name: c,
    type: Vn(l, `${e}.${c}`, /* @__PURE__ */ new Set())
  })), i = ne(t, (l, c) => ({
    name: c
  }));
  return J(n, i, t);
}, "inferArgTypes");
Hn.secondPass = !0;

// src/preview-api/modules/store/filterArgTypes.ts
var bs = /* @__PURE__ */ a((r, e) => Array.isArray(e) ? e.includes(r) : r.match(e), "matches"), zr = /* @__PURE__ */ a((r, e, t) => !e && !t ?
r : r && Cn(r, (o, n) => {
  let i = o.name || n.toString();
  return !!(!e || bs(i, e)) && (!t || !bs(i, t));
}), "filterArgTypes");

// src/preview-api/modules/store/inferControls.ts
var cy = /* @__PURE__ */ a((r, e, t) => {
  let { type: o, options: n } = r;
  if (o) {
    if (t.color && t.color.test(e)) {
      let i = o.name;
      if (i === "string")
        return { control: { type: "color" } };
      i !== "enum" && C.warn(
        `Addon controls: Control of type color only supports string, received "${i}" instead`
      );
    }
    if (t.date && t.date.test(e))
      return { control: { type: "date" } };
    switch (o.name) {
      case "array":
        return { control: { type: "object" } };
      case "boolean":
        return { control: { type: "boolean" } };
      case "string":
        return { control: { type: "text" } };
      case "number":
        return { control: { type: "number" } };
      case "enum": {
        let { value: i } = o;
        return { control: { type: i?.length <= 5 ? "radio" : "select" }, options: i };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: n ? "select" : "object" } };
    }
  }
}, "inferControl"), cr = /* @__PURE__ */ a((r) => {
  let {
    argTypes: e,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    parameters: { __isArgsStory: t, controls: { include: o = null, exclude: n = null, matchers: i = {} } = {} }
  } = r;
  if (!t)
    return e;
  let l = zr(e, o, n), c = ne(l, (s, p) => s?.type && cy(s, p.toString(), i));
  return J(c, l);
}, "inferControls");
cr.secondPass = !0;

// src/preview-api/modules/store/csf/normalizeProjectAnnotations.ts
function Yr({
  argTypes: r,
  globalTypes: e,
  argTypesEnhancers: t,
  decorators: o,
  loaders: n,
  beforeEach: i,
  globals: l,
  initialGlobals: c,
  ...s
}) {
  return l && Object.keys(l).length > 0 && ae(_`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `), {
    ...r && { argTypes: ke(r) },
    ...e && { globalTypes: ke(e) },
    decorators: j(o),
    loaders: j(n),
    beforeEach: j(i),
    argTypesEnhancers: [
      ...t || [],
      Hn,
      // inferControls technically should only run if the user is using the controls addon,
      // and so should be added by a preset there. However, as it seems some code relies on controls
      // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
      // compatibility reasons, we will leave this in the store until 7.0
      cr
    ],
    initialGlobals: J(c, l),
    ...s
  };
}
a(Yr, "normalizeProjectAnnotations");

// src/preview-api/modules/store/csf/beforeAll.ts
var Es = /* @__PURE__ */ a((r) => async () => {
  let e = [];
  for (let t of r) {
    let o = await t();
    o && e.unshift(o);
  }
  return async () => {
    for (let t of e)
      await t();
  };
}, "composeBeforeAllHooks");

// src/preview-api/modules/store/csf/stepRunners.ts
function jt(r) {
  return async (e, t, o) => {
    await r.reduceRight(
      (i, l) => async () => l(e, i, o),
      async () => t(o)
    )();
  };
}
a(jt, "composeStepRunners");

// src/preview-api/modules/store/csf/composeConfigs.ts
function Xr(r, e) {
  return r.map((t) => t.default?.[e] ?? t[e]).filter(Boolean);
}
a(Xr, "getField");
function Le(r, e, t = {}) {
  return Xr(r, e).reduce((o, n) => {
    let i = j(n);
    return t.reverseFileOrder ? [...i, ...o] : [...o, ...i];
  }, []);
}
a(Le, "getArrayField");
function Kr(r, e) {
  return Object.assign({}, ...Xr(r, e));
}
a(Kr, "getObjectField");
function pr(r, e) {
  return Xr(r, e).pop();
}
a(pr, "getSingletonField");
function ur(r) {
  let e = Le(r, "argTypesEnhancers"), t = Xr(r, "runStep"), o = Le(r, "beforeAll");
  return {
    parameters: J(...Xr(r, "parameters")),
    decorators: Le(r, "decorators", {
      reverseFileOrder: !(v.FEATURES?.legacyDecoratorFileOrder ?? !1)
    }),
    args: Kr(r, "args"),
    argsEnhancers: Le(r, "argsEnhancers"),
    argTypes: Kr(r, "argTypes"),
    argTypesEnhancers: [
      ...e.filter((n) => !n.secondPass),
      ...e.filter((n) => n.secondPass)
    ],
    globals: Kr(r, "globals"),
    initialGlobals: Kr(r, "initialGlobals"),
    globalTypes: Kr(r, "globalTypes"),
    loaders: Le(r, "loaders"),
    beforeAll: Es(o),
    beforeEach: Le(r, "beforeEach"),
    render: pr(r, "render"),
    renderToCanvas: pr(r, "renderToCanvas"),
    renderToDOM: pr(r, "renderToDOM"),
    // deprecated
    applyDecorators: pr(r, "applyDecorators"),
    runStep: jt(t),
    tags: Le(r, "tags"),
    mount: pr(r, "mount"),
    testingLibraryRender: pr(r, "testingLibraryRender")
  };
}
a(ur, "composeConfigs");

// src/preview-api/modules/store/csf/portable-stories.ts
function Ts(r) {
  globalThis.defaultProjectAnnotations = r;
}
a(Ts, "setDefaultProjectAnnotations");
var py = "ComposedStory", uy = "Unnamed Story";
function dy(r) {
  return r ? "default" in r ? r.default : r : {};
}
a(dy, "extractAnnotation");
function vs(r) {
  let e = Array.isArray(r) ? r : [r];
  return globalThis.globalProjectAnnotations = ur(e.map(dy)), ur([
    globalThis.defaultProjectAnnotations ?? {},
    globalThis.globalProjectAnnotations ?? {}
  ]);
}
a(vs, "setProjectAnnotations");
var Re = [];
function Wn(r, e, t, o, n) {
  if (r === void 0)
    throw new Error("Expected a story but received undefined.");
  e.title = e.title ?? py;
  let i = Nt(e), l = n || r.storyName || r.story?.name || r.name || uy, c = sr(
    l,
    r,
    i
  ), s = Yr(
    ur([
      o && Object.keys(o).length > 0 ? o : globalThis.defaultProjectAnnotations ?? {},
      globalThis.globalProjectAnnotations ?? {},
      t ?? {}
    ])
  ), p = lr(
    c,
    i,
    s
  ), u = Ct(s.globalTypes), y = /* @__PURE__ */ a(() => {
    let E = Mt({
      hooks: new ve(),
      globals: {
        // TODO: remove loading from globalTypes in 9.0
        ...u,
        ...s.initialGlobals,
        ...p.storyGlobals
      },
      args: { ...p.initialArgs },
      viewMode: "story",
      loaded: {},
      abortSignal: new AbortController().signal,
      step: /* @__PURE__ */ a((b, T) => p.runStep(b, T, E), "step"),
      canvasElement: null,
      canvas: {},
      globalTypes: s.globalTypes,
      ...p,
      context: null,
      mount: null
    });
    return E.context = E, p.renderToCanvas && (E.renderToCanvas = async () => {
      let b = await p.renderToCanvas?.(
        {
          componentId: p.componentId,
          title: p.title,
          id: p.id,
          name: p.name,
          tags: p.tags,
          showMain: /* @__PURE__ */ a(() => {
          }, "showMain"),
          showError: /* @__PURE__ */ a((T) => {
            throw new Error(`${T.title}
${T.description}`);
          }, "showError"),
          showException: /* @__PURE__ */ a((T) => {
            throw T;
          }, "showException"),
          forceRemount: !0,
          storyContext: E,
          storyFn: /* @__PURE__ */ a(() => p.unboundStoryFn(E), "storyFn"),
          unboundStoryFn: p.unboundStoryFn
        },
        E.canvasElement
      );
      b && Re.push(b);
    }), E.mount = p.mount(E), E;
  }, "initializeContext"), d, h = /* @__PURE__ */ a(async (E) => {
    let b = y();
    return b.canvasElement ??= globalThis?.document?.body, d && (b.loaded = d.loaded), Object.assign(b, E), p.playFunction(b);
  }, "play"), m = /* @__PURE__ */ a((E) => {
    let b = y();
    return Object.assign(b, E), yy(p, b);
  }, "run"), S = p.playFunction ? h : void 0;
  return Object.assign(
    /* @__PURE__ */ a(function(b) {
      let T = y();
      return d && (T.loaded = d.loaded), T.args = {
        ...T.initialArgs,
        ...b
      }, p.unboundStoryFn(T);
    }, "storyFn"),
    {
      id: p.id,
      storyName: l,
      load: /* @__PURE__ */ a(async () => {
        for (let b of [...Re].reverse())
          await b();
        Re.length = 0;
        let E = y();
        E.loaded = await p.applyLoaders(E), Re.push(...(await p.applyBeforeEach(E)).filter(Boolean)), d = E;
      }, "load"),
      args: p.initialArgs,
      parameters: p.parameters,
      argTypes: p.argTypes,
      play: S,
      run: m,
      tags: p.tags
    }
  );
}
a(Wn, "composeStory");
var fy = /* @__PURE__ */ a((r, e, t, o) => Wn(r, e, t, {}, o), "defaultComposeStory");
function Rs(r, e, t = fy) {
  let { default: o, __esModule: n, __namedExportsOrder: i, ...l } = r;
  return Object.entries(l).reduce((s, [p, u]) => Dt(p, o) ? Object.assign(s, {
    [p]: t(
      u,
      o,
      e,
      p
    )
  }) : s, {});
}
a(Rs, "composeStories");
function As(r) {
  return r.extend({
    mount: /* @__PURE__ */ a(async ({ mount: e, page: t }, o) => {
      await o(async (n, ...i) => {
        if (!("__pw_type" in n) || "__pw_type" in n && n.__pw_type !== "jsx")
          throw new Error(_`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
        await t.evaluate(async (c) => {
          let s = await globalThis.__pwUnwrapObject?.(c);
          return ("__pw_type" in s ? s.type : s)?.load?.();
        }, n);
        let l = await e(n, ...i);
        return await t.evaluate(async (c) => {
          let s = await globalThis.__pwUnwrapObject?.(c), p = "__pw_type" in s ? s.type : s, u = document.querySelector("#root");
          return p?.play?.({ canvasElement: u });
        }, n), l;
      });
    }, "mount")
  });
}
a(As, "createPlaywrightTest");
async function yy(r, e) {
  for (let n of [...Re].reverse())
    await n();
  if (Re.length = 0, !e.canvasElement) {
    let n = document.createElement("div");
    globalThis?.document?.body?.appendChild(n), e.canvasElement = n, Re.push(() => {
      globalThis?.document?.body?.contains(n) && globalThis?.document?.body?.removeChild(n);
    });
  }
  if (e.loaded = await r.applyLoaders(e), e.abortSignal.aborted)
    return;
  Re.push(...(await r.applyBeforeEach(e)).filter(Boolean));
  let t = r.playFunction, o = r.usesMount;
  o || await e.mount(), !e.abortSignal.aborted && t && (o || (e.mount = async () => {
    throw new De({ playFunction: t.toString() });
  }), await t(e));
}
a(yy, "runStory");

// src/preview-api/modules/store/StoryStore.ts
function xs(r, e) {
  return Pn(On(r, e), (t) => t === void 0);
}
a(xs, "picky");
var ws = 1e3, my = 1e4, $n = class $n {
  constructor(e, t, o) {
    this.importFn = t;
    // TODO: Remove in 9.0
    // NOTE: this is legacy `stories.json` data for the `extract` script.
    // It is used to allow v7 Storybooks to be composed in v6 Storybooks, which expect a
    // `stories.json` file with legacy fields (`kind` etc).
    this.getStoriesJsonData = /* @__PURE__ */ a(() => {
      let e = this.getSetStoriesPayload(), t = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      return {
        v: 3,
        stories: ne(e.stories, (n) => {
          let { importPath: i } = this.storyIndex.entries[n.id];
          return {
            ...xs(n, ["id", "name", "title"]),
            importPath: i,
            // These 3 fields were going to be dropped in v7, but instead we will keep them for the
            // 7.x cycle so that v7 Storybooks can be composed successfully in v6 Storybook.
            // In v8 we will (likely) completely drop support for `extract` and `getStoriesJsonData`
            kind: n.title,
            story: n.name,
            parameters: {
              ...xs(n.parameters, t),
              fileName: i
            }
          };
        })
      };
    }, "getStoriesJsonData");
    this.storyIndex = new Ft(e), this.projectAnnotations = Yr(o);
    let { initialGlobals: n, globalTypes: i } = this.projectAnnotations;
    this.args = new Ot(), this.userGlobals = new It({ globals: n, globalTypes: i }), this.hooks = {}, this.cleanupCallbacks = {}, this.processCSFFileWithCache =
    (0, qt.default)(ws)(ms), this.prepareMetaWithCache = (0, qt.default)(ws)(Lt), this.prepareStoryWithCache = (0, qt.default)(my)(lr);
  }
  setProjectAnnotations(e) {
    this.projectAnnotations = Yr(e);
    let { initialGlobals: t, globalTypes: o } = e;
    this.userGlobals.set({ globals: t, globalTypes: o });
  }
  // This means that one of the CSF files has changed.
  // If the `importFn` has changed, we will invalidate both caches.
  // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
  // on whether we've loaded the relevant files yet.
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    e && (this.importFn = e), t && (this.storyIndex.entries = t.entries), this.cachedCSFFiles && await this.cacheAllCSFFiles();
  }
  // Get an entry from the index, waiting on initialization if necessary
  async storyIdToEntry(e) {
    return this.storyIndex.storyIdToEntry(e);
  }
  // To load a single CSF file to service a story we need to look up the importPath in the index
  async loadCSFFileByStoryId(e) {
    let { importPath: t, title: o } = this.storyIndex.storyIdToEntry(e), n = await this.importFn(t);
    return this.processCSFFileWithCache(n, t, o);
  }
  async loadAllCSFFiles() {
    let e = {};
    return Object.entries(this.storyIndex.entries).forEach(([o, { importPath: n }]) => {
      e[n] = o;
    }), (await Promise.all(
      Object.entries(e).map(async ([o, n]) => ({
        importPath: o,
        csfFile: await this.loadCSFFileByStoryId(n)
      }))
    )).reduce(
      (o, { importPath: n, csfFile: i }) => (o[n] = i, o),
      {}
    );
  }
  async cacheAllCSFFiles() {
    this.cachedCSFFiles = await this.loadAllCSFFiles();
  }
  preparedMetaFromCSFFile({ csfFile: e }) {
    let t = e.meta;
    return this.prepareMetaWithCache(
      t,
      this.projectAnnotations,
      e.moduleExports.default
    );
  }
  // Load the CSF file for a story and prepare the story from it and the project annotations.
  async loadStory({ storyId: e }) {
    let t = await this.loadCSFFileByStoryId(e);
    return this.storyFromCSFFile({ storyId: e, csfFile: t });
  }
  // This function is synchronous for convenience -- often times if you have a CSF file already
  // it is easier not to have to await `loadStory`.
  storyFromCSFFile({
    storyId: e,
    csfFile: t
  }) {
    let o = t.stories[e];
    if (!o)
      throw new Gr({ storyId: e });
    let n = t.meta, i = this.prepareStoryWithCache(
      o,
      n,
      this.projectAnnotations
    );
    return this.args.setInitial(i), this.hooks[i.id] = this.hooks[i.id] || new ve(), i;
  }
  // If we have a CSF file we can get all the stories from it synchronously
  componentStoriesFromCSFFile({
    csfFile: e
  }) {
    return Object.keys(this.storyIndex.entries).filter((t) => !!e.stories[t]).map((t) => this.storyFromCSFFile({ storyId: t, csfFile: e }));
  }
  async loadEntry(e) {
    let t = await this.storyIdToEntry(e), o = t.type === "docs" ? t.storiesImports : [], [n, ...i] = await Promise.all([
      this.importFn(t.importPath),
      ...o.map((l) => {
        let c = this.storyIndex.importPathToEntry(l);
        return this.loadCSFFileByStoryId(c.id);
      })
    ]);
    return { entryExports: n, csfFiles: i };
  }
  // A prepared story does not include args, globals or hooks. These are stored in the story store
  // and updated separtely to the (immutable) story.
  getStoryContext(e, { forceInitialArgs: t = !1 } = {}) {
    let o = this.userGlobals.get(), { initialGlobals: n } = this.userGlobals;
    return Mt({
      ...e,
      args: t ? e.initialArgs : this.args.get(e.id),
      initialGlobals: n,
      globalTypes: this.projectAnnotations.globalTypes,
      userGlobals: o,
      globals: {
        ...o,
        ...e.storyGlobals
      },
      hooks: this.hooks[e.id]
    });
  }
  addCleanupCallbacks(e, t) {
    this.cleanupCallbacks[e.id] = t;
  }
  async cleanupStory(e) {
    this.hooks[e.id].clean();
    let t = this.cleanupCallbacks[e.id];
    if (t)
      for (let o of [...t].reverse())
        await o();
    delete this.cleanupCallbacks[e.id];
  }
  extract(e = { includeDocsOnly: !1 }) {
    let { cachedCSFFiles: t } = this;
    if (!t)
      throw new Lr();
    return Object.entries(this.storyIndex.entries).reduce(
      (o, [n, { type: i, importPath: l }]) => {
        if (i === "docs")
          return o;
        let c = t[l], s = this.storyFromCSFFile({ storyId: n, csfFile: c });
        return !e.includeDocsOnly && s.parameters.docsOnly || (o[n] = Object.entries(s).reduce(
          (p, [u, y]) => u === "moduleExport" || typeof y == "function" ? p : Array.isArray(y) ? Object.assign(p, { [u]: y.slice().sort() }) :
          Object.assign(p, { [u]: y }),
          { args: s.initialArgs }
        )), o;
      },
      {}
    );
  }
  // TODO: Remove in 9.0
  getSetStoriesPayload() {
    let e = this.extract({ includeDocsOnly: !0 }), t = Object.values(e).reduce(
      (o, { title: n }) => (o[n] = {}, o),
      {}
    );
    return {
      v: 2,
      globals: this.userGlobals.get(),
      globalParameters: {},
      kindParameters: t,
      stories: e
    };
  }
  raw() {
    return ae(
      "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead"
    ), Object.values(this.extract()).map(({ id: e }) => this.fromId(e)).filter(Boolean);
  }
  fromId(e) {
    if (ae(
      "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead"
    ), !this.cachedCSFFiles)
      throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
    let t;
    try {
      ({ importPath: t } = this.storyIndex.storyIdToEntry(e));
    } catch {
      return null;
    }
    let o = this.cachedCSFFiles[t], n = this.storyFromCSFFile({ storyId: e, csfFile: o });
    return {
      ...n,
      storyFn: /* @__PURE__ */ a((i) => {
        let l = {
          ...this.getStoryContext(n),
          abortSignal: new AbortController().signal,
          canvasElement: null,
          loaded: {},
          step: /* @__PURE__ */ a((c, s) => n.runStep(c, s, l), "step"),
          context: null,
          mount: null,
          canvas: {},
          viewMode: "story"
        };
        return n.unboundStoryFn({ ...l, ...i });
      }, "storyFn")
    };
  }
};
a($n, "StoryStore");
var Me = $n;

// ../node_modules/slash/index.js
function zn(r) {
  return r.startsWith("\\\\?\\") ? r : r.replace(/\\/g, "/");
}
a(zn, "slash");

// src/preview-api/modules/store/autoTitle.ts
var hy = /* @__PURE__ */ a((r) => {
  if (r.length === 0)
    return r;
  let e = r[r.length - 1], t = e?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
  if (r.length === 1)
    return [t];
  let o = r[r.length - 2];
  return t && o && t.toLowerCase() === o.toLowerCase() ? [...r.slice(0, -2), t] : t && (/^(story|stories)([.][^.]+)$/i.test(e) || /^index$/i.
  test(t)) ? r.slice(0, -1) : [...r.slice(0, -1), t];
}, "sanitize");
function _s(r) {
  return r.flatMap((e) => e.split("/")).filter(Boolean).join("/");
}
a(_s, "pathJoin");
var Yn = /* @__PURE__ */ a((r, e, t) => {
  let { directory: o, importPathMatcher: n, titlePrefix: i = "" } = e || {};
  typeof r == "number" && M.warn(_`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
  let l = zn(String(r));
  if (n.exec(l)) {
    if (!t) {
      let c = l.replace(o, ""), s = _s([i, c]).split("/");
      return s = hy(s), s.join("/");
    }
    return i ? _s([i, t]) : t;
  }
}, "userOrAutoTitleFromSpecifier"), Ps = /* @__PURE__ */ a((r, e, t) => {
  for (let o = 0; o < e.length; o += 1) {
    let n = Yn(r, e[o], t);
    if (n)
      return n;
  }
  return t || void 0;
}, "userOrAutoTitle");

// src/preview-api/modules/store/storySort.ts
var Os = /\s*\/\s*/, Cs = /* @__PURE__ */ a((r = {}) => (e, t) => {
  if (e.title === t.title && !r.includeNames)
    return 0;
  let o = r.method || "configure", n = r.order || [], i = e.title.trim().split(Os), l = t.title.trim().split(Os);
  r.includeNames && (i.push(e.name), l.push(t.name));
  let c = 0;
  for (; i[c] || l[c]; ) {
    if (!i[c])
      return -1;
    if (!l[c])
      return 1;
    let s = i[c], p = l[c];
    if (s !== p) {
      let y = n.indexOf(s), d = n.indexOf(p), h = n.indexOf("*");
      return y !== -1 || d !== -1 ? (y === -1 && (h !== -1 ? y = h : y = n.length), d === -1 && (h !== -1 ? d = h : d = n.length), y - d) : o ===
      "configure" ? 0 : s.localeCompare(p, r.locales ? r.locales : void 0, {
        numeric: !0,
        sensitivity: "accent"
      });
    }
    let u = n.indexOf(s);
    u === -1 && (u = n.indexOf("*")), n = u !== -1 && Array.isArray(n[u + 1]) ? n[u + 1] : [], c += 1;
  }
  return 0;
}, "storySort");

// src/preview-api/modules/store/sortStories.ts
var gy = /* @__PURE__ */ a((r, e, t) => {
  if (e) {
    let o;
    typeof e == "function" ? o = e : o = Cs(e), r.sort(o);
  } else
    r.sort(
      (o, n) => t.indexOf(o.importPath) - t.indexOf(n.importPath)
    );
  return r;
}, "sortStoriesCommon"), Is = /* @__PURE__ */ a((r, e, t) => {
  try {
    return gy(r, e, t);
  } catch (o) {
    throw new Error(_`
    Error sorting stories with sort parameter ${e}:

    > ${o.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
  }
}, "sortStoriesV7");

// src/preview-api/modules/preview-web/render/Render.ts
var Ae = new Error("prepareAborted");

// src/preview-api/modules/preview-web/render/StoryRender.ts
var { AbortController: Fs } = globalThis;
function Ds(r) {
  try {
    let { name: e = "Error", message: t = String(r), stack: o } = r;
    return { name: e, message: t, stack: o };
  } catch {
    return { name: "Error", message: String(r) };
  }
}
a(Ds, "serializeError");
var Kn = class Kn {
  constructor(e, t, o, n, i, l, c = { autoplay: !0, forceInitialArgs: !1 }, s) {
    this.channel = e;
    this.store = t;
    this.renderToScreen = o;
    this.callbacks = n;
    this.id = i;
    this.viewMode = l;
    this.renderOptions = c;
    this.type = "story";
    this.notYetRendered = !0;
    this.rerenderEnqueued = !1;
    this.disableKeyListeners = !1;
    this.teardownRender = /* @__PURE__ */ a(() => {
    }, "teardownRender");
    this.torndown = !1;
    this.abortController = new Fs(), s && (this.story = s, this.phase = "preparing");
  }
  async runPhase(e, t, o) {
    this.phase = t, this.channel.emit(Fe, { newPhase: this.phase, storyId: this.id }), o && (await o(), this.checkIfAborted(e));
  }
  checkIfAborted(e) {
    return e.aborted ? (this.phase = "aborted", this.channel.emit(Fe, { newPhase: this.phase, storyId: this.id }), !0) : !1;
  }
  async prepare() {
    if (await this.runPhase(this.abortController.signal, "preparing", async () => {
      this.story = await this.store.loadStory({ storyId: this.id });
    }), this.abortController.signal.aborted)
      throw await this.store.cleanupStory(this.story), Ae;
  }
  // The two story "renders" are equal and have both loaded the same story
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  isPreparing() {
    return ["preparing"].includes(this.phase);
  }
  isPending() {
    return ["loading", "beforeEach", "rendering", "playing"].includes(this.phase);
  }
  async renderToElement(e) {
    return this.canvasElement = e, this.render({ initial: !0, forceRemount: !0 });
  }
  storyContext() {
    if (!this.story)
      throw new Error("Cannot call storyContext before preparing");
    let { forceInitialArgs: e } = this.renderOptions;
    return this.store.getStoryContext(this.story, { forceInitialArgs: e });
  }
  async render({
    initial: e = !1,
    forceRemount: t = !1
  } = {}) {
    let { canvasElement: o } = this;
    if (!this.story)
      throw new Error("cannot render when not prepared");
    let n = this.story;
    if (!o)
      throw new Error("cannot render when canvasElement is unset");
    let {
      id: i,
      componentId: l,
      title: c,
      name: s,
      tags: p,
      applyLoaders: u,
      applyBeforeEach: y,
      unboundStoryFn: d,
      playFunction: h,
      runStep: m
    } = n;
    t && !e && (this.cancelRender(), this.abortController = new Fs());
    let S = this.abortController.signal, g = !1, E = n.usesMount;
    try {
      let b = {
        ...this.storyContext(),
        viewMode: this.viewMode,
        abortSignal: S,
        canvasElement: o,
        loaded: {},
        step: /* @__PURE__ */ a((F, G) => m(F, G, b), "step"),
        context: null,
        canvas: {},
        renderToCanvas: /* @__PURE__ */ a(async () => {
          let F = await this.renderToScreen(T, o);
          this.teardownRender = F || (() => {
          }), g = !0;
        }, "renderToCanvas"),
        // The story provides (set in a renderer) a mount function that is a higher order function
        // (context) => (...args) => Canvas
        //
        // Before assigning it to the context, we resolve the context dependency,
        // so that a user can just call it as await mount(...args) in their play function.
        mount: /* @__PURE__ */ a(async (...F) => {
          this.callbacks.showStoryDuringRender?.();
          let G = null;
          return await this.runPhase(S, "rendering", async () => {
            G = await n.mount(b)(...F);
          }), E && await this.runPhase(S, "playing"), G;
        }, "mount")
      };
      b.context = b;
      let T = {
        componentId: l,
        title: c,
        kind: c,
        id: i,
        name: s,
        story: s,
        tags: p,
        ...this.callbacks,
        showError: /* @__PURE__ */ a((F) => (this.phase = "errored", this.callbacks.showError(F)), "showError"),
        showException: /* @__PURE__ */ a((F) => (this.phase = "errored", this.callbacks.showException(F)), "showException"),
        forceRemount: t || this.notYetRendered,
        storyContext: b,
        storyFn: /* @__PURE__ */ a(() => d(b), "storyFn"),
        unboundStoryFn: d
      };
      if (await this.runPhase(S, "loading", async () => {
        b.loaded = await u(b);
      }), S.aborted)
        return;
      let R = await y(b);
      if (this.store.addCleanupCallbacks(n, R), this.checkIfAborted(S) || (!g && !E && await b.mount(), this.notYetRendered = !1, S.aborted))
        return;
      let x = this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors === !0, P = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ a((F) => P.
      add("error" in F ? F.error : F.reason), "onError");
      if (this.renderOptions.autoplay && t && h && this.phase !== "errored") {
        window.addEventListener("error", L), window.addEventListener("unhandledrejection", L), this.disableKeyListeners = !0;
        try {
          if (E ? await h(b) : (b.mount = async () => {
            throw new De({ playFunction: h.toString() });
          }, await this.runPhase(S, "playing", async () => h(b))), !g)
            throw new Wr();
          this.checkIfAborted(S), !x && P.size > 0 ? await this.runPhase(S, "errored") : await this.runPhase(S, "played");
        } catch (F) {
          if (this.callbacks.showStoryDuringRender?.(), await this.runPhase(S, "errored", async () => {
            this.channel.emit(So, Ds(F));
          }), this.story.parameters.throwPlayFunctionExceptions !== !1)
            throw F;
          console.error(F);
        }
        if (!x && P.size > 0 && this.channel.emit(
          bo,
          Array.from(P).map(Ds)
        ), this.disableKeyListeners = !1, window.removeEventListener("unhandledrejection", L), window.removeEventListener("error", L), S.aborted)
          return;
      }
      await this.runPhase(
        S,
        "completed",
        async () => this.channel.emit(Ke, i)
      );
    } catch (b) {
      this.phase = "errored", this.callbacks.showException(b);
    }
    this.rerenderEnqueued && (this.rerenderEnqueued = !1, this.render());
  }
  /**
   * Rerender the story. If the story is currently pending (loading/rendering), the rerender will be
   * enqueued, and will be executed after the current render is completed. Rerendering while playing
   * will not be enqueued, and will be executed immediately, to support rendering args changes while
   * playing.
   */
  async rerender() {
    if (this.isPending() && this.phase !== "playing")
      this.rerenderEnqueued = !0;
    else
      return this.render();
  }
  async remount() {
    return await this.teardown(), this.render({ forceRemount: !0 });
  }
  // If the story is torn down (either a new story is rendered or the docs page removes it)
  // we need to consider the fact that the initial render may not be finished
  // (possibly the loaders or the play function are still running). We use the controller
  // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
  // happens inside the user's code.
  cancelRender() {
    this.abortController?.abort();
  }
  async teardown() {
    this.torndown = !0, this.cancelRender(), this.story && await this.store.cleanupStory(this.story);
    for (let e = 0; e < 3; e += 1) {
      if (!this.isPending()) {
        await this.teardownRender();
        return;
      }
      await new Promise((t) => setTimeout(t, 0));
    }
    window.location.reload(), await new Promise(() => {
    });
  }
};
a(Kn, "StoryRender");
var je = Kn;

// src/preview-api/modules/preview-web/Preview.tsx
var { fetch: Sy } = v, by = "./index.json", Xn = class Xn {
  constructor(e, t, o = oe.getChannel(), n = !0) {
    this.importFn = e;
    this.getProjectAnnotations = t;
    this.channel = o;
    this.storyRenders = [];
    this.storeInitializationPromise = new Promise((i, l) => {
      this.resolveStoreInitializationPromise = i, this.rejectStoreInitializationPromise = l;
    }), n && this.initialize();
  }
  // Create a proxy object for `__STORYBOOK_STORY_STORE__` and `__STORYBOOK_PREVIEW__.storyStore`
  // That proxies through to the store once ready, and errors beforehand. This means we can set
  // `__STORYBOOK_STORY_STORE__ = __STORYBOOK_PREVIEW__.storyStore` without having to wait, and
  // similarly integrators can access the `storyStore` on the preview at any time, although
  // it is considered deprecated and we will no longer allow access in 9.0
  get storyStore() {
    return new Proxy(
      {},
      {
        get: /* @__PURE__ */ a((e, t) => {
          if (this.storyStoreValue)
            return ae("Accessing the Story Store is deprecated and will be removed in 9.0"), this.storyStoreValue[t];
          throw new Vr();
        }, "get")
      }
    );
  }
  // INITIALIZATION
  async initialize() {
    this.setupListeners();
    try {
      let e = await this.getProjectAnnotationsOrRenderError();
      await this.runBeforeAllHook(e), await this.initializeWithProjectAnnotations(e);
    } catch (e) {
      this.rejectStoreInitializationPromise(e);
    }
  }
  ready() {
    return this.storeInitializationPromise;
  }
  setupListeners() {
    this.channel.on(_o, this.onStoryIndexChanged.bind(this)), this.channel.on(wr, this.onUpdateGlobals.bind(this)), this.channel.on(_r, this.
    onUpdateArgs.bind(this)), this.channel.on(No, this.onRequestArgTypesInfo.bind(this)), this.channel.on(xr, this.onResetArgs.bind(this)), this.
    channel.on(Ar, this.onForceReRender.bind(this)), this.channel.on(go, this.onForceRemount.bind(this));
  }
  async getProjectAnnotationsOrRenderError() {
    try {
      let e = await this.getProjectAnnotations();
      if (this.renderToCanvas = e.renderToCanvas, !this.renderToCanvas)
        throw new Mr();
      return e;
    } catch (e) {
      throw this.renderPreviewEntryError("Error reading preview.js:", e), e;
    }
  }
  // If initialization gets as far as project annotations, this function runs.
  async initializeWithProjectAnnotations(e) {
    this.projectAnnotationsBeforeInitialization = e;
    try {
      let t = await this.getStoryIndexFromServer();
      return this.initializeWithStoryIndex(t);
    } catch (t) {
      throw this.renderPreviewEntryError("Error loading story index:", t), t;
    }
  }
  async runBeforeAllHook(e) {
    try {
      await this.beforeAllCleanup?.(), this.beforeAllCleanup = await e.beforeAll?.();
    } catch (t) {
      throw this.renderPreviewEntryError("Error in beforeAll hook:", t), t;
    }
  }
  async getStoryIndexFromServer() {
    let e = await Sy(by);
    if (e.status === 200)
      return e.json();
    throw new jr({ text: await e.text() });
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(e) {
    if (!this.projectAnnotationsBeforeInitialization)
      throw new Error("Cannot call initializeWithStoryIndex until project annotations resolve");
    this.storyStoreValue = new Me(
      e,
      this.importFn,
      this.projectAnnotationsBeforeInitialization
    ), delete this.projectAnnotationsBeforeInitialization, this.setInitialGlobals(), this.resolveStoreInitializationPromise();
  }
  async setInitialGlobals() {
    this.emitGlobals();
  }
  emitGlobals() {
    if (!this.storyStoreValue)
      throw new z({ methodName: "emitGlobals" });
    let e = {
      globals: this.storyStoreValue.userGlobals.get() || {},
      globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {}
    };
    this.channel.emit(Ro, e);
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: e
  }) {
    delete this.previewEntryError, this.getProjectAnnotations = e;
    let t = await this.getProjectAnnotationsOrRenderError();
    if (await this.runBeforeAllHook(t), !this.storyStoreValue) {
      await this.initializeWithProjectAnnotations(t);
      return;
    }
    this.storyStoreValue.setProjectAnnotations(t), this.emitGlobals();
  }
  async onStoryIndexChanged() {
    if (delete this.previewEntryError, !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
      try {
        let e = await this.getStoryIndexFromServer();
        if (this.projectAnnotationsBeforeInitialization) {
          this.initializeWithStoryIndex(e);
          return;
        }
        await this.onStoriesChanged({ storyIndex: e });
      } catch (e) {
        throw this.renderPreviewEntryError("Error loading story index:", e), e;
      }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: e,
    storyIndex: t
  }) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "onStoriesChanged" });
    await this.storyStoreValue.onStoriesChanged({ importFn: e, storyIndex: t });
  }
  async onUpdateGlobals({
    globals: e,
    currentStory: t
  }) {
    if (this.storyStoreValue || await this.storeInitializationPromise, !this.storyStoreValue)
      throw new z({ methodName: "onUpdateGlobals" });
    if (this.storyStoreValue.userGlobals.update(e), t) {
      let { initialGlobals: o, storyGlobals: n, userGlobals: i, globals: l } = this.storyStoreValue.getStoryContext(t);
      this.channel.emit(Ie, {
        initialGlobals: o,
        userGlobals: i,
        storyGlobals: n,
        globals: l
      });
    } else {
      let { initialGlobals: o, globals: n } = this.storyStoreValue.userGlobals;
      this.channel.emit(Ie, {
        initialGlobals: o,
        userGlobals: n,
        storyGlobals: {},
        globals: n
      });
    }
    await Promise.all(this.storyRenders.map((o) => o.rerender()));
  }
  async onUpdateArgs({ storyId: e, updatedArgs: t }) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "onUpdateArgs" });
    this.storyStoreValue.args.update(e, t), await Promise.all(
      this.storyRenders.filter((o) => o.id === e && !o.renderOptions.forceInitialArgs).map(
        (o) => (
          // We only run the play function, with in a force remount.
          // But when mount is destructured, the rendering happens inside of the play function.
          o.story && o.story.usesMount ? o.remount() : o.rerender()
        )
      )
    ), this.channel.emit(Ao, {
      storyId: e,
      args: this.storyStoreValue.args.get(e)
    });
  }
  async onRequestArgTypesInfo({ id: e, payload: t }) {
    try {
      await this.storeInitializationPromise;
      let o = await this.storyStoreValue?.loadStory(t);
      this.channel.emit(ht, {
        id: e,
        success: !0,
        payload: { argTypes: o?.argTypes || {} },
        error: null
      });
    } catch (o) {
      this.channel.emit(ht, {
        id: e,
        success: !1,
        error: o?.message
      });
    }
  }
  async onResetArgs({ storyId: e, argNames: t }) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "onResetArgs" });
    let n = this.storyRenders.find((c) => c.id === e)?.story || await this.storyStoreValue.loadStory({ storyId: e }), l = (t || [
      .../* @__PURE__ */ new Set([
        ...Object.keys(n.initialArgs),
        ...Object.keys(this.storyStoreValue.args.get(e))
      ])
    ]).reduce((c, s) => (c[s] = n.initialArgs[s], c), {});
    await this.onUpdateArgs({ storyId: e, updatedArgs: l });
  }
  // ForceReRender does not include a story id, so we simply must
  // re-render all stories in case they are relevant
  async onForceReRender() {
    await Promise.all(this.storyRenders.map((e) => e.rerender()));
  }
  async onForceRemount({ storyId: e }) {
    await Promise.all(this.storyRenders.filter((t) => t.id === e).map((t) => t.remount()));
  }
  // Used by docs to render a story to a given element
  // Note this short-circuits the `prepare()` phase of the StoryRender,
  // main to be consistent with the previous behaviour. In the future,
  // we will change it to go ahead and load the story, which will end up being
  // "instant", although async.
  renderStoryToElement(e, t, o, n) {
    if (!this.renderToCanvas || !this.storyStoreValue)
      throw new z({
        methodName: "renderStoryToElement"
      });
    let i = new je(
      this.channel,
      this.storyStoreValue,
      this.renderToCanvas,
      o,
      e.id,
      "docs",
      n,
      e
    );
    return i.renderToElement(t), this.storyRenders.push(i), async () => {
      await this.teardownRender(i);
    };
  }
  async teardownRender(e, { viewModeChanged: t } = {}) {
    this.storyRenders = this.storyRenders.filter((o) => o !== e), await e?.teardown?.({ viewModeChanged: t });
  }
  // API
  async loadStory({ storyId: e }) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "loadStory" });
    return this.storyStoreValue.loadStory({ storyId: e });
  }
  getStoryContext(e, { forceInitialArgs: t = !1 } = {}) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "getStoryContext" });
    return this.storyStoreValue.getStoryContext(e, { forceInitialArgs: t });
  }
  async extract(e) {
    if (!this.storyStoreValue)
      throw new z({ methodName: "extract" });
    if (this.previewEntryError)
      throw this.previewEntryError;
    return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(e);
  }
  // UTILITIES
  renderPreviewEntryError(e, t) {
    this.previewEntryError = t, C.error(e), C.error(t), this.channel.emit(mo, t);
  }
};
a(Xn, "Preview");
var qe = Xn;

// src/preview-api/modules/preview-web/docs-context/DocsContext.ts
var Jn = class Jn {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.renderStoryToElement = o;
    this.storyIdByName = /* @__PURE__ */ a((e) => {
      let t = this.nameToStoryId.get(e);
      if (t)
        return t;
      throw new Error(`No story found with that name: ${e}`);
    }, "storyIdByName");
    this.componentStories = /* @__PURE__ */ a(() => this.componentStoriesValue, "componentStories");
    this.componentStoriesFromCSFFile = /* @__PURE__ */ a((e) => this.store.componentStoriesFromCSFFile({ csfFile: e }), "componentStoriesFro\
mCSFFile");
    this.storyById = /* @__PURE__ */ a((e) => {
      if (!e) {
        if (!this.primaryStory)
          throw new Error(
            "No primary story defined for docs entry. Did you forget to use `<Meta>`?"
          );
        return this.primaryStory;
      }
      let t = this.storyIdToCSFFile.get(e);
      if (!t)
        throw new Error(`Called \`storyById\` for story that was never loaded: ${e}`);
      return this.store.storyFromCSFFile({ storyId: e, csfFile: t });
    }, "storyById");
    this.getStoryContext = /* @__PURE__ */ a((e) => ({
      ...this.store.getStoryContext(e),
      loaded: {},
      viewMode: "docs"
    }), "getStoryContext");
    this.loadStory = /* @__PURE__ */ a((e) => this.store.loadStory({ storyId: e }), "loadStory");
    this.componentStoriesValue = [], this.storyIdToCSFFile = /* @__PURE__ */ new Map(), this.exportToStory = /* @__PURE__ */ new Map(), this.
    exportsToCSFFile = /* @__PURE__ */ new Map(), this.nameToStoryId = /* @__PURE__ */ new Map(), this.attachedCSFFiles = /* @__PURE__ */ new Set(),
    n.forEach((i, l) => {
      this.referenceCSFFile(i);
    });
  }
  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(e) {
    this.exportsToCSFFile.set(e.moduleExports, e), this.exportsToCSFFile.set(e.moduleExports.default, e), this.store.componentStoriesFromCSFFile(
    { csfFile: e }).forEach((o) => {
      let n = e.stories[o.id];
      this.storyIdToCSFFile.set(n.id, e), this.exportToStory.set(n.moduleExport, o);
    });
  }
  attachCSFFile(e) {
    if (!this.exportsToCSFFile.has(e.moduleExports))
      throw new Error("Cannot attach a CSF file that has not been referenced");
    if (this.attachedCSFFiles.has(e))
      return;
    this.attachedCSFFiles.add(e), this.store.componentStoriesFromCSFFile({ csfFile: e }).forEach((o) => {
      this.nameToStoryId.set(o.name, o.id), this.componentStoriesValue.push(o), this.primaryStory || (this.primaryStory = o);
    });
  }
  referenceMeta(e, t) {
    let o = this.resolveModuleExport(e);
    if (o.type !== "meta")
      throw new Error(
        "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your \
CSF file?"
      );
    t && this.attachCSFFile(o.csfFile);
  }
  get projectAnnotations() {
    let { projectAnnotations: e } = this.store;
    if (!e)
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    return e;
  }
  resolveAttachedModuleExportType(e) {
    if (e === "story") {
      if (!this.primaryStory)
        throw new Error(
          "No primary story attached to this docs file, did you forget to use <Meta of={} />?"
        );
      return { type: "story", story: this.primaryStory };
    }
    if (this.attachedCSFFiles.size === 0)
      throw new Error(
        "No CSF file attached to this docs file, did you forget to use <Meta of={} />?"
      );
    let t = Array.from(this.attachedCSFFiles)[0];
    if (e === "meta")
      return { type: "meta", csfFile: t };
    let { component: o } = t.meta;
    if (!o)
      throw new Error(
        "Attached CSF file does not defined a component, did you forget to export one?"
      );
    return { type: "component", component: o };
  }
  resolveModuleExport(e) {
    let t = this.exportsToCSFFile.get(e);
    if (t)
      return { type: "meta", csfFile: t };
    let o = this.exportToStory.get(e);
    return o ? { type: "story", story: o } : { type: "component", component: e };
  }
  resolveOf(e, t = []) {
    let o;
    if (["component", "meta", "story"].includes(e)) {
      let n = e;
      o = this.resolveAttachedModuleExportType(n);
    } else
      o = this.resolveModuleExport(e);
    if (t.length && !t.includes(o.type)) {
      let n = o.type === "component" ? "component or unknown" : o.type;
      throw new Error(_`Invalid value passed to the 'of' prop. The value was resolved to a '${n}' type but the only types for this block are: ${t.
      join(
        ", "
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }
    switch (o.type) {
      case "component":
        return {
          ...o,
          projectAnnotations: this.projectAnnotations
        };
      case "meta":
        return {
          ...o,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: o.csfFile })
        };
      case "story":
      default:
        return o;
    }
  }
};
a(Jn, "DocsContext");
var fe = Jn;

// src/preview-api/modules/preview-web/render/CsfDocsRender.ts
var Qn = class Qn {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = n;
    this.type = "docs";
    this.subtype = "csf";
    this.torndown = !1;
    this.disableKeyListeners = !1;
    this.preparing = !1;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw Ae;
    let { importPath: o, title: n } = this.entry, i = this.store.processCSFFileWithCache(
      e,
      o,
      n
    ), l = Object.keys(i.stories)[0];
    this.story = this.store.storyFromCSFFile({ storyId: l, csfFile: i }), this.csfFiles = [i, ...t], this.preparing = !1;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.story && this.story === e.story);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let t = new fe(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
    return this.csfFiles.forEach((o) => t.attachCSFFile(o)), t;
  }
  async renderToElement(e, t) {
    if (!this.story || !this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: n } = this.story.parameters || {};
    if (!n)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let i = await n.renderer(), { render: l } = i, c = /* @__PURE__ */ a(async () => {
      try {
        await l(o, n, e), this.channel.emit(Rr, this.id);
      } catch (s) {
        this.callbacks.showException(s);
      }
    }, "renderDocs");
    return this.rerender = async () => c(), this.teardownRender = async ({ viewModeChanged: s }) => {
      !s || !e || i.unmount(e);
    }, c();
  }
  async teardown({ viewModeChanged: e } = {}) {
    this.teardownRender?.({ viewModeChanged: e }), this.torndown = !0;
  }
};
a(Qn, "CsfDocsRender");
var Jr = Qn;

// src/preview-api/modules/preview-web/render/MdxDocsRender.ts
var Zn = class Zn {
  constructor(e, t, o, n) {
    this.channel = e;
    this.store = t;
    this.entry = o;
    this.callbacks = n;
    this.type = "docs";
    this.subtype = "mdx";
    this.torndown = !1;
    this.disableKeyListeners = !1;
    this.preparing = !1;
    this.id = o.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: e, csfFiles: t = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw Ae;
    this.csfFiles = t, this.exports = e, this.preparing = !1;
  }
  isEqual(e) {
    return !!(this.id === e.id && this.exports && this.exports === e.exports);
  }
  docsContext(e) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    return new fe(
      this.channel,
      this.store,
      e,
      this.csfFiles
    );
  }
  async renderToElement(e, t) {
    if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
      throw new Error("Cannot render docs before preparing");
    let o = this.docsContext(t), { docs: n } = this.store.projectAnnotations.parameters || {};
    if (!n)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let i = { ...n, page: this.exports.default }, l = await n.renderer(), { render: c } = l, s = /* @__PURE__ */ a(async () => {
      try {
        await c(o, i, e), this.channel.emit(Rr, this.id);
      } catch (p) {
        this.callbacks.showException(p);
      }
    }, "renderDocs");
    return this.rerender = async () => s(), this.teardownRender = async ({ viewModeChanged: p } = {}) => {
      !p || !e || (l.unmount(e), this.torndown = !0);
    }, s();
  }
  async teardown({ viewModeChanged: e } = {}) {
    this.teardownRender?.({ viewModeChanged: e }), this.torndown = !0;
  }
};
a(Zn, "MdxDocsRender");
var Qr = Zn;

// src/preview-api/modules/preview-web/PreviewWithSelection.tsx
var Ey = globalThis;
function Ty(r) {
  let e = r.composedPath && r.composedPath()[0] || r.target;
  return /input|textarea/i.test(e.tagName) || e.getAttribute("contenteditable") !== null;
}
a(Ty, "focusInInput");
var Ns = "attached-mdx", vy = "unattached-mdx";
function Ry({ tags: r }) {
  return r?.includes(vy) || r?.includes(Ns);
}
a(Ry, "isMdxEntry");
function ea(r) {
  return r.type === "story";
}
a(ea, "isStoryRender");
function Ay(r) {
  return r.type === "docs";
}
a(Ay, "isDocsRender");
function xy(r) {
  return Ay(r) && r.subtype === "csf";
}
a(xy, "isCsfDocsRender");
var ra = class ra extends qe {
  constructor(t, o, n, i) {
    super(t, o, void 0, !1);
    this.importFn = t;
    this.getProjectAnnotations = o;
    this.selectionStore = n;
    this.view = i;
    this.initialize();
  }
  setupListeners() {
    super.setupListeners(), Ey.onkeydown = this.onKeydown.bind(this), this.channel.on(vo, this.onSetCurrentStory.bind(this)), this.channel.on(
    Fo, this.onUpdateQueryParams.bind(this)), this.channel.on(Eo, this.onPreloadStories.bind(this));
  }
  async setInitialGlobals() {
    if (!this.storyStoreValue)
      throw new z({ methodName: "setInitialGlobals" });
    let { globals: t } = this.selectionStore.selectionSpecifier || {};
    t && this.storyStoreValue.userGlobals.updateFromPersisted(t), this.emitGlobals();
  }
  // If initialization gets as far as the story index, this function runs.
  async initializeWithStoryIndex(t) {
    return await super.initializeWithStoryIndex(t), this.selectSpecifiedStory();
  }
  // Use the selection specifier to choose a story, then render it
  async selectSpecifiedStory() {
    if (!this.storyStoreValue)
      throw new z({
        methodName: "selectSpecifiedStory"
      });
    if (this.selectionStore.selection) {
      await this.renderSelection();
      return;
    }
    if (!this.selectionStore.selectionSpecifier) {
      this.renderMissingStory();
      return;
    }
    let { storySpecifier: t, args: o } = this.selectionStore.selectionSpecifier, n = this.storyStoreValue.storyIndex.entryFromSpecifier(t);
    if (!n) {
      t === "*" ? this.renderStoryLoadingException(t, new Br()) : this.renderStoryLoadingException(
        t,
        new Ur({ storySpecifier: t.toString() })
      );
      return;
    }
    let { id: i, type: l } = n;
    this.selectionStore.setSelection({ storyId: i, viewMode: l }), this.channel.emit(Oo, this.selectionStore.selection), this.channel.emit(yt,
    this.selectionStore.selection), await this.renderSelection({ persistedArgs: o });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: t
  }) {
    await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: t }), this.selectionStore.selection && this.renderSelection();
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: t,
    storyIndex: o
  }) {
    await super.onStoriesChanged({ importFn: t, storyIndex: o }), this.selectionStore.selection ? await this.renderSelection() : await this.
    selectSpecifiedStory();
  }
  onKeydown(t) {
    if (!this.storyRenders.find((o) => o.disableKeyListeners) && !Ty(t)) {
      let { altKey: o, ctrlKey: n, metaKey: i, shiftKey: l, key: c, code: s, keyCode: p } = t;
      this.channel.emit(To, {
        event: { altKey: o, ctrlKey: n, metaKey: i, shiftKey: l, key: c, code: s, keyCode: p }
      });
    }
  }
  async onSetCurrentStory(t) {
    this.selectionStore.setSelection({ viewMode: "story", ...t }), await this.storeInitializationPromise, this.channel.emit(yt, this.selectionStore.
    selection), this.renderSelection();
  }
  onUpdateQueryParams(t) {
    this.selectionStore.setQueryParams(t);
  }
  async onUpdateGlobals({ globals: t }) {
    let o = this.currentRender instanceof je && this.currentRender.story || void 0;
    super.onUpdateGlobals({ globals: t, currentStory: o }), (this.currentRender instanceof Qr || this.currentRender instanceof Jr) && await this.
    currentRender.rerender?.();
  }
  async onUpdateArgs({ storyId: t, updatedArgs: o }) {
    super.onUpdateArgs({ storyId: t, updatedArgs: o });
  }
  async onPreloadStories({ ids: t }) {
    await this.storeInitializationPromise, this.storyStoreValue && await Promise.allSettled(t.map((o) => this.storyStoreValue?.loadEntry(o)));
  }
  // RENDERING
  // We can either have:
  // - a story selected in "story" viewMode,
  //     in which case we render it to the root element, OR
  // - a story selected in "docs" viewMode,
  //     in which case we render the docsPage for that story
  async renderSelection({ persistedArgs: t } = {}) {
    let { renderToCanvas: o } = this;
    if (!this.storyStoreValue || !o)
      throw new z({ methodName: "renderSelection" });
    let { selection: n } = this.selectionStore;
    if (!n)
      throw new Error("Cannot call renderSelection as no selection was made");
    let { storyId: i } = n, l;
    try {
      l = await this.storyStoreValue.storyIdToEntry(i);
    } catch (h) {
      this.currentRender && await this.teardownRender(this.currentRender), this.renderStoryLoadingException(i, h);
      return;
    }
    let c = this.currentSelection?.storyId !== i, s = this.currentRender?.type !== l.type;
    l.type === "story" ? this.view.showPreparingStory({ immediate: s }) : this.view.showPreparingDocs({ immediate: s }), this.currentRender?.
    isPreparing() && await this.teardownRender(this.currentRender);
    let p;
    l.type === "story" ? p = new je(
      this.channel,
      this.storyStoreValue,
      o,
      this.mainStoryCallbacks(i),
      i,
      "story"
    ) : Ry(l) ? p = new Qr(
      this.channel,
      this.storyStoreValue,
      l,
      this.mainStoryCallbacks(i)
    ) : p = new Jr(
      this.channel,
      this.storyStoreValue,
      l,
      this.mainStoryCallbacks(i)
    );
    let u = this.currentSelection;
    this.currentSelection = n;
    let y = this.currentRender;
    this.currentRender = p;
    try {
      await p.prepare();
    } catch (h) {
      y && await this.teardownRender(y), h !== Ae && this.renderStoryLoadingException(i, h);
      return;
    }
    let d = !c && y && !p.isEqual(y);
    if (t && ea(p) && (ue(!!p.story), this.storyStoreValue.args.updateFromPersisted(p.story, t)), y && !y.torndown && !c && !d && !s) {
      this.currentRender = y, this.channel.emit(Io, i), this.view.showMain();
      return;
    }
    if (y && await this.teardownRender(y, { viewModeChanged: s }), u && (c || s) && this.channel.emit(xo, i), ea(p)) {
      ue(!!p.story);
      let {
        parameters: h,
        initialArgs: m,
        argTypes: S,
        unmappedArgs: g,
        initialGlobals: E,
        userGlobals: b,
        storyGlobals: T,
        globals: R
      } = this.storyStoreValue.getStoryContext(p.story);
      this.channel.emit(Po, {
        id: i,
        parameters: h,
        initialArgs: m,
        argTypes: S,
        args: g
      }), this.channel.emit(Ie, { userGlobals: b, storyGlobals: T, globals: R, initialGlobals: E });
    } else {
      let { parameters: h } = this.storyStoreValue.projectAnnotations, { initialGlobals: m, globals: S } = this.storyStoreValue.userGlobals;
      if (this.channel.emit(Ie, {
        globals: S,
        initialGlobals: m,
        storyGlobals: {},
        userGlobals: S
      }), xy(p) || p.entry.tags?.includes(Ns)) {
        if (!p.csfFiles)
          throw new qr({ storyId: i });
        ({ parameters: h } = this.storyStoreValue.preparedMetaFromCSFFile({
          csfFile: p.csfFiles[0]
        }));
      }
      this.channel.emit(ho, {
        id: i,
        parameters: h
      });
    }
    ea(p) ? (ue(!!p.story), this.storyRenders.push(p), this.currentRender.renderToElement(
      this.view.prepareForStory(p.story)
    )) : this.currentRender.renderToElement(
      this.view.prepareForDocs(),
      // This argument is used for docs, which is currently only compatible with HTMLElements
      this.renderStoryToElement.bind(this)
    );
  }
  async teardownRender(t, { viewModeChanged: o = !1 } = {}) {
    this.storyRenders = this.storyRenders.filter((n) => n !== t), await t?.teardown?.({ viewModeChanged: o });
  }
  // UTILITIES
  mainStoryCallbacks(t) {
    return {
      showStoryDuringRender: /* @__PURE__ */ a(() => this.view.showStoryDuringRender(), "showStoryDuringRender"),
      showMain: /* @__PURE__ */ a(() => this.view.showMain(), "showMain"),
      showError: /* @__PURE__ */ a((o) => this.renderError(t, o), "showError"),
      showException: /* @__PURE__ */ a((o) => this.renderException(t, o), "showException")
    };
  }
  renderPreviewEntryError(t, o) {
    super.renderPreviewEntryError(t, o), this.view.showErrorDisplay(o);
  }
  renderMissingStory() {
    this.view.showNoPreview(), this.channel.emit(mt);
  }
  renderStoryLoadingException(t, o) {
    C.error(o), this.view.showErrorDisplay(o), this.channel.emit(mt, t);
  }
  // renderException is used if we fail to render the story and it is uncaught by the app layer
  renderException(t, o) {
    let { name: n = "Error", message: i = String(o), stack: l } = o;
    this.channel.emit(Co, { name: n, message: i, stack: l }), this.channel.emit(Fe, { newPhase: "errored", storyId: t }), this.view.showErrorDisplay(
    o), C.error(`Error rendering story '${t}':`), C.error(o);
  }
  // renderError is used by the various app layers to inform the user they have done something
  // wrong -- for instance returned the wrong thing from a story
  renderError(t, { title: o, description: n }) {
    C.error(`Error rendering story ${o}: ${n}`), this.channel.emit(wo, { title: o, description: n }), this.channel.emit(Fe, { newPhase: "err\
ored", storyId: t }), this.view.showErrorDisplay({
      message: o,
      stack: n
    });
  }
};
a(ra, "PreviewWithSelection");
var Be = ra;

// src/preview-api/modules/preview-web/UrlStore.ts
var to = Se(ro(), 1);

// src/preview-api/modules/preview-web/parseArgsParam.ts
var bc = Se(ro(), 1);
var Sc = /^[a-zA-Z0-9 _-]*$/, Ec = /^-?[0-9]+(\.[0-9]+)?$/, Ah = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i, Tc = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
Pa = /* @__PURE__ */ a((r = "", e) => r === null || r === "" || !Sc.test(r) ? !1 : e == null || e instanceof Date || typeof e == "number" ||
typeof e == "boolean" ? !0 : typeof e == "string" ? Sc.test(e) || Ec.test(e) || Ah.test(e) || Tc.test(e) : Array.isArray(e) ? e.every((t) => Pa(
r, t)) : X(e) ? Object.entries(e).every(([t, o]) => Pa(t, o)) : !1, "validateArgs"), xh = {
  delimiter: ";",
  // we're parsing a single query param
  allowDots: !0,
  // objects are encoded using dot notation
  allowSparse: !0,
  // arrays will be merged on top of their initial value
  decoder(r, e, t, o) {
    if (o === "value" && r.startsWith("!")) {
      if (r === "!undefined")
        return;
      if (r === "!null")
        return null;
      if (r === "!true")
        return !0;
      if (r === "!false")
        return !1;
      if (r.startsWith("!date(") && r.endsWith(")"))
        return new Date(r.slice(6, -1));
      if (r.startsWith("!hex(") && r.endsWith(")"))
        return `#${r.slice(5, -1)}`;
      let n = r.slice(1).match(Tc);
      if (n)
        return r.startsWith("!rgba") ? `${n[1]}(${n[2]}, ${n[3]}, ${n[4]}, ${n[5]})` : r.startsWith("!hsla") ? `${n[1]}(${n[2]}, ${n[3]}%, ${n[4]}\
%, ${n[5]})` : r.startsWith("!rgb") ? `${n[1]}(${n[2]}, ${n[3]}, ${n[4]})` : `${n[1]}(${n[2]}, ${n[3]}%, ${n[4]}%)`;
    }
    return o === "value" && Ec.test(r) ? Number(r) : e(r, e, t);
  }
}, Oa = /* @__PURE__ */ a((r) => {
  let e = r.split(";").map((t) => t.replace("=", "~").replace(":", "="));
  return Object.entries(bc.default.parse(e.join(";"), xh)).reduce((t, [o, n]) => Pa(o, n) ? Object.assign(t, { [o]: n }) : (M.warn(_`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `), t), {});
}, "parseArgsParam");

// src/preview-api/modules/preview-web/UrlStore.ts
var { history: vc, document: ye } = v;
function wh(r) {
  let e = (r || "").match(/^\/story\/(.+)/);
  if (!e)
    throw new Error(`Invalid path '${r}',  must start with '/story/'`);
  return e[1];
}
a(wh, "pathToId");
var Rc = /* @__PURE__ */ a(({
  selection: r,
  extraParams: e
}) => {
  let t = typeof ye < "u" ? ye.location.search : "", { path: o, selectedKind: n, selectedStory: i, ...l } = to.default.parse(t, {
    ignoreQueryPrefix: !0
  });
  return to.default.stringify(
    {
      ...l,
      ...e,
      ...r && { id: r.storyId, viewMode: r.viewMode }
    },
    { encode: !1, addQueryPrefix: !0 }
  );
}, "getQueryString"), _h = /* @__PURE__ */ a((r) => {
  if (!r)
    return;
  let e = Rc({ selection: r }), { hash: t = "" } = ye.location;
  ye.title = r.storyId, vc.replaceState({}, "", `${ye.location.pathname}${e}${t}`);
}, "setPath"), Ph = /* @__PURE__ */ a((r) => r != null && typeof r == "object" && Array.isArray(r) === !1, "isObject"), nt = /* @__PURE__ */ a(
(r) => {
  if (r !== void 0) {
    if (typeof r == "string")
      return r;
    if (Array.isArray(r))
      return nt(r[0]);
    if (Ph(r))
      return nt(Object.values(r).filter(Boolean));
  }
}, "getFirstString"), Oh = /* @__PURE__ */ a(() => {
  if (typeof ye < "u") {
    let r = to.default.parse(ye.location.search, { ignoreQueryPrefix: !0 }), e = typeof r.args == "string" ? Oa(r.args) : void 0, t = typeof r.
    globals == "string" ? Oa(r.globals) : void 0, o = nt(r.viewMode);
    (typeof o != "string" || !o.match(/docs|story/)) && (o = "story");
    let n = nt(r.path), i = n ? wh(n) : nt(r.id);
    if (i)
      return { storySpecifier: i, args: e, globals: t, viewMode: o };
  }
  return null;
}, "getSelectionSpecifierFromPath"), Ca = class Ca {
  constructor() {
    this.selectionSpecifier = Oh();
  }
  setSelection(e) {
    this.selection = e, _h(this.selection);
  }
  setQueryParams(e) {
    let t = Rc({ extraParams: e }), { hash: o = "" } = ye.location;
    vc.replaceState({}, "", `${ye.location.pathname}${t}${o}`);
  }
};
a(Ca, "UrlStore");
var We = Ca;

// src/preview-api/modules/preview-web/WebView.ts
var rp = Se(Qc(), 1), tp = Se(ro(), 1);
var { document: K } = v, Zc = 100, op = /* @__PURE__ */ ((i) => (i.MAIN = "MAIN", i.NOPREVIEW = "NOPREVIEW", i.PREPARING_STORY = "PREPARING_\
STORY", i.PREPARING_DOCS = "PREPARING_DOCS", i.ERROR = "ERROR", i))(op || {}), Ma = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
}, ja = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
}, ep = new rp.default({
  escapeXML: !0
}), qa = class qa {
  constructor() {
    this.testing = !1;
    if (typeof K < "u") {
      let { __SPECIAL_TEST_PARAMETER__: e } = tp.default.parse(K.location.search, {
        ignoreQueryPrefix: !0
      });
      switch (e) {
        case "preparing-story": {
          this.showPreparingStory(), this.testing = !0;
          break;
        }
        case "preparing-docs": {
          this.showPreparingDocs(), this.testing = !0;
          break;
        }
        default:
      }
    }
  }
  // Get ready to render a story, returning the element to render to
  prepareForStory(e) {
    return this.showStory(), this.applyLayout(e.parameters.layout), K.documentElement.scrollTop = 0, K.documentElement.scrollLeft = 0, this.
    storyRoot();
  }
  storyRoot() {
    return K.getElementById("storybook-root");
  }
  prepareForDocs() {
    return this.showMain(), this.showDocs(), this.applyLayout("fullscreen"), K.documentElement.scrollTop = 0, K.documentElement.scrollLeft =
    0, this.docsRoot();
  }
  docsRoot() {
    return K.getElementById("storybook-docs");
  }
  applyLayout(e = "padded") {
    if (e === "none") {
      K.body.classList.remove(this.currentLayoutClass), this.currentLayoutClass = null;
      return;
    }
    this.checkIfLayoutExists(e);
    let t = ja[e];
    K.body.classList.remove(this.currentLayoutClass), K.body.classList.add(t), this.currentLayoutClass = t;
  }
  checkIfLayoutExists(e) {
    ja[e] || C.warn(
      _`
          The desired layout: ${e} is not a valid option.
          The possible options are: ${Object.keys(ja).join(", ")}, none.
        `
    );
  }
  showMode(e) {
    clearTimeout(this.preparingTimeout), Object.keys(op).forEach((t) => {
      t === e ? K.body.classList.add(Ma[t]) : K.body.classList.remove(Ma[t]);
    });
  }
  showErrorDisplay({ message: e = "", stack: t = "" }) {
    let o = e, n = t, i = e.split(`
`);
    i.length > 1 && ([o] = i, n = i.slice(1).join(`
`).replace(/^\n/, "")), K.getElementById("error-message").innerHTML = ep.toHtml(o), K.getElementById("error-stack").innerHTML = ep.toHtml(n),
    this.showMode("ERROR");
  }
  showNoPreview() {
    this.testing || (this.showMode("NOPREVIEW"), this.storyRoot()?.setAttribute("hidden", "true"), this.docsRoot()?.setAttribute("hidden", "\
true"));
  }
  showPreparingStory({ immediate: e = !1 } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_STORY") : this.preparingTimeout = setTimeout(
      () => this.showMode("PREPARING_STORY"),
      Zc
    );
  }
  showPreparingDocs({ immediate: e = !1 } = {}) {
    clearTimeout(this.preparingTimeout), e ? this.showMode("PREPARING_DOCS") : this.preparingTimeout = setTimeout(() => this.showMode("PREPA\
RING_DOCS"), Zc);
  }
  showMain() {
    this.showMode("MAIN");
  }
  showDocs() {
    this.storyRoot().setAttribute("hidden", "true"), this.docsRoot().removeAttribute("hidden");
  }
  showStory() {
    this.docsRoot().setAttribute("hidden", "true"), this.storyRoot().removeAttribute("hidden");
  }
  showStoryDuringRender() {
    K.body.classList.add(Ma.MAIN);
  }
};
a(qa, "WebView");
var ze = qa;

// src/preview-api/modules/preview-web/PreviewWeb.tsx
var Ba = class Ba extends Be {
  constructor(t, o) {
    super(t, o, new We(), new ze());
    this.importFn = t;
    this.getProjectAnnotations = o;
    v.__STORYBOOK_PREVIEW__ = this;
  }
};
a(Ba, "PreviewWeb");
var it = Ba;

// src/preview-api/modules/preview-web/simulate-pageload.ts
var { document: Ye } = v, pg = [
  "application/javascript",
  "application/ecmascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
  // Support modern javascript
  "module"
], ug = "script", np = "scripts-root";
function st() {
  let r = Ye.createEvent("Event");
  r.initEvent("DOMContentLoaded", !0, !0), Ye.dispatchEvent(r);
}
a(st, "simulateDOMContentLoaded");
function dg(r, e, t) {
  let o = Ye.createElement("script");
  o.type = r.type === "module" ? "module" : "text/javascript", r.src ? (o.onload = e, o.onerror = e, o.src = r.src) : o.textContent = r.innerText,
  t ? t.appendChild(o) : Ye.head.appendChild(o), r.parentNode.removeChild(r), r.src || e();
}
a(dg, "insertScript");
function ap(r, e, t = 0) {
  r[t](() => {
    t++, t === r.length ? e() : ap(r, e, t);
  });
}
a(ap, "insertScriptsSequentially");
function Ua(r) {
  let e = Ye.getElementById(np);
  e ? e.innerHTML = "" : (e = Ye.createElement("div"), e.id = np, Ye.body.appendChild(e));
  let t = Array.from(r.querySelectorAll(ug));
  if (t.length) {
    let o = [];
    t.forEach((n) => {
      let i = n.getAttribute("type");
      (!i || pg.includes(i)) && o.push((l) => dg(n, l, e));
    }), o.length && ap(o, st, void 0);
  } else
    st();
}
a(Ua, "simulatePageLoad");

// src/preview/globals/runtime.ts
var ip = {
  "@storybook/global": uo,
  "storybook/internal/channels": Fr,
  "@storybook/channels": Fr,
  "@storybook/core/channels": Fr,
  "storybook/internal/client-logger": Pr,
  "@storybook/client-logger": Pr,
  "@storybook/core/client-logger": Pr,
  "storybook/internal/core-events": be,
  "@storybook/core-events": be,
  "@storybook/core/core-events": be,
  "storybook/internal/preview-errors": $r,
  "@storybook/core-events/preview-errors": $r,
  "@storybook/core/preview-errors": $r,
  "storybook/internal/preview-api": lt,
  "@storybook/preview-api": lt,
  "@storybook/core/preview-api": lt,
  "storybook/internal/types": Dr,
  "@storybook/types": Dr,
  "@storybook/core/types": Dr
};

// src/preview/utils.ts
var lp = Se(sp(), 1);
var Ha;
function fg() {
  return Ha || (Ha = new lp.default(v.navigator?.userAgent).getBrowserInfo()), Ha;
}
a(fg, "getBrowserInfo");
function cp(r) {
  return r.browserInfo = fg(), r;
}
a(cp, "prepareForTelemetry");

// src/preview/runtime.ts
Wa.forEach((r) => {
  v[ko[r]] = ip[r];
});
v.sendTelemetryError = (r) => {
  v.__STORYBOOK_ADDONS_CHANNEL__.emit(Do, cp(r));
};
v.addEventListener("error", (r) => {
  let e = r.error || r;
  e.fromStorybook && v.sendTelemetryError(e);
});
v.addEventListener("unhandledrejection", ({ reason: r }) => {
  r.fromStorybook && v.sendTelemetryError(r);
});
